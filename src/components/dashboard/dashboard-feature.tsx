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
    "3saUA9Qvi3jFYKjbgqRGZR2H3RxTDwsz5esCrSAWKbKHbZkQXfn6tH5hFeHkNE6R4JLYGPgvKzG3MUcUqKVjV2kM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aop1dz2sZArBYzKeLZE9rkdwjTb5XD8X736fPc5iWGfjz8pgpfbvVWCgTy9J7wJwJPB1kLvD3yKRw6ozrZWVHBq",
  "key1": "aXhQrt1Q1hP3WUbMDbQ8QPZewyzZjxBebnuU4Wy8ffvnfAuZ1D8AiZKSS9TQdyNGkZA3P1pofo7xpr19yBuuPi9",
  "key2": "59vv9G2pR8kTexPD79jTNy55tvoCqJMNveMzX9kCszE1is1VNd1NhfMvmcDVDPYBiRzxdFy5c36r92kVtox4t3XF",
  "key3": "61u3WCibhBGMeeFgJNUER9mFV184fQPLHZ8fpt7SvxGL9Bs6jfSHtY8QZaXcRTrV8F8JXHz2jUXFz1N9NX4MNEbh",
  "key4": "h9KhQD9C46dizJq3nodjMFuZj4XLAkuD851p9Uz33KcJPRu1SZgNVDUmeQE34X5mJgCvvBktxUSox3wuCa3Xzi5",
  "key5": "xFn5J3XG5qKj7pYvieW6RW36gx8pHT2Pd7Vprg5d8zBfN5ubtxcThozWG2NVZ1iSEv2FUEYymdpSKmD99vzVc7y",
  "key6": "5nFmhrR7BhD5BxhygUvPpHxMNCFqrMzTp1jNxjq7ELDFftWWFBXvMt4QkVnradDTrAep2FEW8oqjeaNjPkit1yKY",
  "key7": "2P2xVGwkPTcwR8xPdvRPL32vp4UB29AMsgwjdGF4T4YiPfNm34udRQkPXZFac1b28NMNy9tJoecFqXuQcnzJTDrw",
  "key8": "3pLHF25BZpX1T9ga69pc3UgKhN8ZGM4WjDyKqvdFWnKYrTv3GizHd7VyC83cWQknuMaJ1c98mcbqHaQXXS7X2GJK",
  "key9": "43rsWQmN1aqJk3eBnkFqCyNRXkWk7B2SbNxf3vaRuAjcZgdaLKhWEPqJmNovADGVbvPvA7xpkbwcfQLG45GPgQXi",
  "key10": "3aR4YmFtU1AS1oxd3GhKogqfyekkaTqkqT4xUEFE7ChLsoNusij8pwpzpg1QnhLmdM97w9zCbFeBWJtuGxB82M3P",
  "key11": "4ZUAdA8cuPG266MKxvaJfUnrvWZkLKnbksvmMdYbRuxJyzNd4GsLmXMJmmRUzVfh56xQKmXiBEJptcPDsao6ss3m",
  "key12": "1NQPX1drsVUWiYDBCmjtfZvwveu3NVZrNW5qNMAyE4Dipa3XVMzaZ8NbwNwHcnfhY3vaQh27z447DR7Q5td5bp8",
  "key13": "U8wtVp1bPive8GsgNQh7RSSEfG9N9uxWrFaXc5ash5RfopU2qmkxstTChV8vUdj8r7GbbseRH25UUYZxPBTsokS",
  "key14": "xwqFxcYjtiwbuoTaNRnTFPvKo5Vd5QQecF7nvzFrF7X6mUovQgiZciLWCu1kLCnzsSo8vBYzzEYtZ7aWjf2u4oq",
  "key15": "5LEFaZ9U9QkHUHFSdaHt3zvZVkkYhG1scETG9tmGiBZhc5kNcP42a5oYRH4qBQ24rffa7BBipx8UEddYSLU5DjTn",
  "key16": "4JLA3ecUPUUPgRPLw8U58hF1PnS47Mc1koi4Bcj2XRZAsjDE1sjocQJcKQuKXWAbfAgjZ7G3Ecp6KnZXzmDi8d9v",
  "key17": "5ozRRJtKbVkzoDFNRvrw8ncLm5JhPAxmSFtarw7GTp6NZEgUTp89mYysqM2mFNyFsfBDmR6MCJREQf1bH4YFj8j1",
  "key18": "42MdRUEkFDGkqTEW4Furkjs5GTXvGXeacPKLSc5mQXabEDJJKZchUzmek96c1KW7hTE7NZY2SzGxYYwh8t83zJo8",
  "key19": "DSagMrx6297FSJkTkhRmRWT6fBrDsq2ZYLZZ4TnFbVjeGmg8d1uaH9XVxUXeP6mbfMH7JjnAYcyeASoq4Zh6Rnm",
  "key20": "533rAioiX4YTWBLFeY2hNuj5joqHmwoASmkFycPikqLY3k4tSzUj49XPoYPn68RMyrwbc7kg7eXb9vLkKDARtShq",
  "key21": "3psSEGEydBJfMeFQsiHdL3h1XRyminPwBS9tjWYmrUPY2Dh9QAW7M4xocn5sA4sn2suFGobC1vb1Zepkcc3f9q4t",
  "key22": "3TNNso53sA2KSAn1sL8mfKYHPPXNFwzoGZgYTDt4zyJsp4SauS6dDHjADGzshAxgvgMHsAN9Sp1AuG1Ldo3bd4UX",
  "key23": "5y5f7jGimjrkftkYo7eMkHdpmvvxWmdzWyGzfj1jmDCFHuFV6nfUxSnm4NbNhRaAvSgfcApz4BziV3qPgXe6aFzv",
  "key24": "2WPEWRm5bSybLbXJGEa5KVihSTPm71DnSN67nGA7sctki9pWifj8JV6CSLABAdxEjvgL7QAhYBfGZmgc9a3KTgw5"
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
