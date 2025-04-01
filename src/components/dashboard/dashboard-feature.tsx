/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5Nt22JpVA4D3Tbm2wCuozPBx6r4GyBfw7hEVSjQwkNJTxeSt4D1ac3np5DzZPWzUBz4pf7p8PHEmK6SnVtBsRLVn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wozHreJBu3Zb58Y1UMWwR5P5PhZQLCYsan6wd53wNpehWLkwxWnMpMwb6LiLmc2irWVaqCXx1AmtWBve2nAjqwS",
  "key1": "3hmNFkhhXjeQQ37Exd8ApFfVLygWTPgscuxotCiU38f4YYotzZonrH8QZ943KKDPzoG4cDfABCBhRSDQYdxDTa5J",
  "key2": "3zw5nbsv2osDz2ZXQpjTaduWAncfUYnDdCsSpv3ySGJXJ9TVueJJSr6fw68XSN1mGZVjS3d2JV1KoPdgmGVrSGKF",
  "key3": "36cAZcARermazUtFA5ik1ezuW1wcd9tPeTcNyvs7FRoW4Uh42pXeBahXkdEVxFJdMC6vegTRTSVmLZtXRPfK16fq",
  "key4": "2YuXypNCNcaLq5KTPs2hiuVVETnr2nsjVXy4NG3x3REk84giTCvEVqjAmZSQzgWoaM92geG1iFhccjDAjnFF3Q8G",
  "key5": "2VFHzHSbUzu3ke28ctEKwn457aXoGcjMNof5gCtgk3VecJ5WNjzGLPHUgDKtmpdX2ZG1VmatHWRAFRckPNMj9AuH",
  "key6": "3jvETBxe5RXnBhKLrAjs1FnhY4LGHtFi2JP8HdJtJTr6ApxYdbLUjphivN5baUN4kufLwrns2HTY31tyQf1R2m8E",
  "key7": "5Erz6jEEc1YhKhSLxMPSbXCv32yXLbMm63RTXbPhe6q4ycxatHWHbrj5GCugjzimqKZo816UcajwBWmg1cd3sWtc",
  "key8": "332WjCnggMYPLsUNvviz9G1QQfuSBwcvr3mZDgtPaRA7xvsNK4pv9k2Uzw7Ygkyx7fHE33cxpvvCZWnvWh4LbGHN",
  "key9": "3xRWj6Res3CeGmo4QPUjkrShgGn7E7Aonw41cqHZZuSvYmpyzVj9Bi4ZPzuQLitcoLzgT5ie9NZ8fmhp2jo4mnce",
  "key10": "39Zuhzm9GNPWXpdtdvN46ZEx7Mo73fNcTfKBATouAZQKDcn3s3iwn3HHyh9e3zSVP3cAQKF37EHKqNY9LFktC32z",
  "key11": "388tcuqf1HTAyeGC7ZqPfXRjVXc5kwE6rwkHDkzaUyUH5ZEXJY5cd8FezFe9yMhgSWkXU65Ss7LmUDAVu6tpotNh",
  "key12": "3RvWa4HbZ9WbaNJnNaqVu8iafzWTjoG5Hn7ciozqvHqGKKrVXNKkgEoCPjMzM2LeBLSTkFymecGT3APfRGTCFAFf",
  "key13": "5swNWvL8J35K2zkvdY2d1LR5xWSnqUiZhhyfr66a9xqc263ZREyMMgsW4SZGeZzFPuDJL6CgEQHLQF8AYq3orvh2",
  "key14": "VsrqVKwCBb8ahjrJy8MnnJohfr9dz9FCAm5NphgxAakNAiCR2GNXX8VbAmGbUTiY4eK2tBRPP5YNvL24TnMmHvF",
  "key15": "wpbDPuuUd54PztAMrrx2Zq6nApG5U41g1Zgrj7QkDEG4eq8tSSiTD7AzqcEkUHSXjQott4buJbuBcj1Co6mZVh7",
  "key16": "3js9EWqx7ZTkhmbVG7g9KNRNv437rfXrUzFzDyP4RBTJSUwerACLLCsTsfV23U3b4pWhaDbUr3QevLEsNknWb2yq",
  "key17": "5nRD7FxLdX4SWVVT6a25ezkVhvaQLsy3AUBBiycAJy38ZtLq6WwJL1xoZUiYvkEEE7StUikg9Vp4Wgc9rAgtvktX",
  "key18": "3ZgKYXgDFqAQF17ZJd625akNgYBoz49qQUvfxzUWLtKBR79cwehUtDVn7Yidps2E5r3SWyHjUJd1cidiHHKxjuVq",
  "key19": "2BoUv3qxrP5J6GDpUwsFuwwqZz4wpGUtZQpsUY7PkuKG4gJHSH7hQa3KBxpzUETH4bvw2wzo1b6Anu1DVMtY4Uh",
  "key20": "3MFiQQXKnRDjWhMbFkcKq9ahaTByMzZLvtjKSbVoV156ZhhUikGjaK3CDXzNih3RNqZ3hagbUnKEnT1v1QL9RNAi",
  "key21": "4BuUPSQbRZQjJjtfaJKvfs8BWAbsVAGcdLat48MP8FKFQvJMRszGKUwgdFqJEJgzmPZd8LUXEaXuB8eCUk49MeSu",
  "key22": "5vJ6XeZuEKPo3x1wgqpHAV3qHBzDTMoheXAwsHm23pbij2QAucktB8bkCSUJbgqNUs5Pmyq79HLjiRmDmxnmVA4e",
  "key23": "3CwSFeBxxzaHYWrFuWt48jG9fefVnoJyewYejkZ4PXGfPUSwvd1BBbcRVdiN2PhpgcEcDUtTcvmNG1Pis8R14ioh",
  "key24": "7HfZJX7CADBGSxHz5HKvoef8vWtArSWq786fJyzqLmRCcUG8XZ28MknrGWt82KMfB6FRKYnwa5YfjrBkAyc2d79",
  "key25": "2cS2bRCkcq9P1n4UiRxTYqnwTJjjeLjpTzCSgBYb5H4SVsF2J4qCKanS1PjJwYxizrjrFZz3TZLUgHidfYqbHBuR"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
