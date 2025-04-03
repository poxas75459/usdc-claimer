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
    "DttmyVniaxY7pyKMegKZPhYDnQeaqGh1tTaHhUGoUHHvMdfxbzFQi68D1KPiWqrvrok4uRE5yMAT3qCX2txL8nd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o5o4Gh9L8BGs2DC4u1FgAK442GWqakRbDXGquKM3CxLWSmRcKA882v4ynFHoseVj55Ut8zngk7xtMLNMfsdaWS3",
  "key1": "4BEQ55Pozrf8hEBCKWXsntF1hghMQ3KK3xZ7HYChUuQe4mQdtTu1gPHFEYrAeWWC97GFj5Ky3Lt1MmNJpToCC9b2",
  "key2": "5grtmFe5o2XM796NrrwcbeCXAiY5U65fyzdR58FyBCrmDiriwart1n2rcR9FMvpqXeBPKGRfDuRdGoFRXiTLxUKn",
  "key3": "2CTjmBGgvr9usthdeejYTmsHzo4hWdahQxi9Zo569RECm8iEVUkDZjhUgUUe8YBeptViMdZNAqATLrfqQHnRxg1b",
  "key4": "gV2uzVYjxXWzWcEdnMqsF5P3VwdBL2Sq9sbFfSa4qQLem6YMqiXQanwTWTWQoYWynPd5bMEMSG3b9njvnL8rsjt",
  "key5": "3mFtWTghS5rXXz83mf1SMP1y9uavxPdaSMFKNHv2cgnNVdZzHtBeURY9WMdu9L3FiNgFHSPX2BBdiB7MWiHWq2BC",
  "key6": "33b8ijfLNGwsEdkMoFAAVFtxveKuqHrH1U9dTGw4pRS15RqfeSaALVMQkqyqpkDEKomRAfNbG9zVErcejthLTtsi",
  "key7": "2P5ZMs3ARTtPEhLiE7NG23pAabTJdFZocqwRYbWeqGxZU9oFjFaT8EhZ19oAi9D5XQXVnE3iSVurGtpHiw6etEzi",
  "key8": "2jCZtMuVscFxo1MumY5Ap8hCXVYeNvRYVbnFsxTtR48mcD8kCEhhZ3vedqUGZsZCHFt7z6WgzxSJ3XXJaL9QP3yX",
  "key9": "58y8B6FQayXQ5HavjNeZ3VdkjQkEe5dy1wJjAV3NrgAJfC5QAHH2QHySFNGBkQtMuao7pDFsG2Bn3Li2CLZyS8uw",
  "key10": "4MGZX9qSoyMm4X1Zojvs6mpZJzHTnfE6DCEzpk7QuhUawQW5P7FjPaywbGjbH7gyLjDAa9qiRp5dvKKk6pktHkWp",
  "key11": "2sqqmL5eFzvznXHGDTFfUKS1ZZAvQthQtLwZ53VxeJ9RpVZLkqXkrtGErG6c6jtg5hCKU1Xo9aEy7SvoNWgoa35z",
  "key12": "3Ly8SYs2d9FNcDjT6Qyh5AWAEphFfi21kvnGswttZmzLzr1BXKQUu9ztyi4zw8maa94etDEKgGBYBgXarWyVtiR7",
  "key13": "2M48D7QyZvF88xrN18Sa8vEwh8H7ZCe7xhVnjMW1zvEkx3GzTZyxTVUnEZtZnswV9UNkMASiF83TAJuEaNv2q5MM",
  "key14": "56yDhXTgi16ocCirw98c3Mt6is98MC2h8B6RLC9HqKPy6G7uvfrCp7i9pQ7CLPsjd5DUA2vqhwRUbGjAbrQ7mE1K",
  "key15": "5ZYBUKDZPnKvgdUQcPuRFnEkinNsGHkV6wqxZDmQBf2FF2JJZjLnw8sFDiVMSFsNcbY15NT1WxoMVkkraWru8AMa",
  "key16": "SbiYQMGwxh7x37ouHH1utGtnZww5CaKzUC4zmLFAqkw5kyY2qZXSGYTLJpSNMBHdQpGEQrDGb4bVkFt7VAs16uS",
  "key17": "3SJ1uWAUqXSfyRE9j7goUZ4RGE87nEY7jUvH9urw4Fxu3SRZaJXCkuWjk5Cz858z91s7c5m5DcrE7NQovTZ6ABm7",
  "key18": "4B5gw5ZLb2QLmkLz2W8vkcfBHosmGvL6f5TjwfWQMpT7fse6dsgSrwPyLaPgANamMtPJq1pjHzjdB6XaDWmPg6Rq",
  "key19": "3HtRwWuwZ6bgKesvccrNHqQijgvWdqHYcEtnAqsMG8GL5ZLF6fvai28ifw3dKXNc5jEz3qk9gkCaepLbYd4xVWvx",
  "key20": "kTPzgSrDZQz2LpPXseAz1j1bcP3ofGoduwmAvWwP4QSMb175RnMu3AFHS7HamtQtxGHD2kU2LCjfp8hsHQTiX7F",
  "key21": "63FXKG1nKQjyZTgmbUG3ibJCMSsJXsPkYhtFmhPn14gni5eqgdqKc9zRw7TPRovStCEKAXm6wyyacPRryTA157ME",
  "key22": "SkzaVJCpK3GKEvHpFVhJhvvXfrorrwBtyozGSqhU7P3GT1RcRKB9cKWtEqziQStAWwokfnQDWCBGzJCrpDqcnEy",
  "key23": "3zKz4tw73QsjEXpMVMXSxQQkKpcSDqNiBiQcTTgAFMuQPeC2Fsa1tfiSMBWR24WdnBjDwaaaDivQgW7S5dzUafTp",
  "key24": "3Gyw1gAq5ZEpPiEiyXwy2ec9CFPHdjbWwFa582VCwcnuxugbaW3NwUDztx5kxLRijx7pKhQ6mSSStwwAZgTVEWkg",
  "key25": "5YZaazdNqKYzdZEBoUh5TcramWEwtfhDyBqnnXj3cyngytixD2kfy7P2rbcNXa3LooKgqyvL8dUHQukFhihJmgMu",
  "key26": "4kHNa2rxSq5qKhM7phK1C4C5UyUF5RmTqwnCiT6YTiAxcGNfmwKVcvmLx7MkhsYpEaCWfhqkbtecLkQQ2R9aTBWD",
  "key27": "2KK7zgYMFvXch61PQjyvrghC4yFyaqTSTRA1RvLfUdRhz64LHUcbDjiVt9KTSpeMQqh6QwbvoGwQu6xsRFz6Pzks",
  "key28": "4fDJtf3ZnfSJjNecCcZNirKXWCDBUK5nUP4Pro2KxvDHuD4YA3kKZp4xXWs21VhTGoejeDySDV4dMtdT9LYMt5C9",
  "key29": "55voAVHhobPnWaHzPgHaiyuJySTyUrtsR8WYsjtpsZde3uq5r4vxMQ5sS6DNvkGBbHN6zwdsuZWU9c1BpUfEoDeW"
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
