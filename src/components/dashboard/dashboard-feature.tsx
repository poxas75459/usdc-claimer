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
    "5tEf2m8enJUg2uN7yfTx4Borm7vS7FFu1HYP2esAiDCFGVpq59hHcN4EfG1Nmqj9v2QMa5V5h6Figo1MHQHAzdgy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f9cS6WjZWPkcJ8iCjxk2L6RJtKopeMH4hfujGxxLrgeyEMsiebfPZRFAFjvACCAKySKxYwCY7GYbrgZhhP8ojEJ",
  "key1": "5a5hS2B8A1zTQFN8UpRNiBX8frUTWqTBYMQjh6Bdpm2z58f6rpToxALUxXAYP6pt7pBYhTedWGEaNhQAx2zsXQpM",
  "key2": "8QzpTQ9sY6UrSrUCUcCu8dRHZgMhbbdeKygKZRag9DGqoLyuLhgBSmU7UZ2FTM8mp95KLrHwiYhdZ4zi22bNrUe",
  "key3": "2HSiHoph5iJaEhyFJ29SwhsDeGhufi7PH15SoKhNRkDA7V4SjbPzpcZT4RVhkdsMdNMve5jQsGZPcAC7raXfz1kh",
  "key4": "5piA5wetWCtta8gAm8tVgjX2reZ48VP4qzXGWyxAyFKKGLTgMJbjCcpCu7yaHNMFBzQzvnsDjqijGKFLmWh2eiha",
  "key5": "5XwxXff1pDPnDcTjijEkmUzhU9b6RMAGzAs8usD6vs7hA8C17f5NWv7wMpqjgrGktWjrEtMzMPPnAoDFpHLicMF8",
  "key6": "3BNUt6qCUZgD8V3yStzRD7JHMrM7rs3PTmjGLKZmBQiHjypu6srUPtjiSmdP679G2ey5GwGvhc9uxYwMRR1NCFVF",
  "key7": "4SHJdAthDwMHm4cxSJzqNvy6ZM2aqUmkLvXaApdTBKSaxAi7hsgCM2jC775fzQC3VF9YEgbSS4svEEEo58W2PHtE",
  "key8": "4gTD2vcTDtcAwwVwzL7wkaEZP1Q5BHuj6d9U3eyzBMLuWTmSvUMwANJz8NQnCHzahTpuSoyrmThGKyJ9MXhRczru",
  "key9": "Ep9wKgHEZ8eGMEnHRfrnxHF1wcsab6VpWpyRZbpPEE6uS7Wrw3AjPXZRnvpv2uMoT7W6X1XDaHjcpkb1ooKkv7M",
  "key10": "4zCsx9LkGBstN8tGWTcbZfF8JeH6LWw4p5TmQP8mafMZ1b2tV8tFdKkdNro7UaM54wotJxzFR47kFCxp1LKkSxr1",
  "key11": "5WUrMPxjSMp5oTUxkQnWaAyeekqKBndjLL9JZTQhdHTPsbUhzN6MqfjHGG9cjnYNYm35ymCJXeoY5BbXMuk5LqhV",
  "key12": "4vJt5WdZroKzuDneqB2M33fSm8Y9ywtRAMBf9cM8rUjHyvybRmyo9YQPgsWeLejQaDSUycDqGy5VYEaRPJZR6pRx",
  "key13": "5PE9d7b8NZQ8GpHBesydXQ9fnAEmif91MSzXnPGiXihHJ76UHK6KNdhUMqmx7z3KR6W3dXxuLhEF1vKxMUKQhDcV",
  "key14": "9ftnzvgJTZvLCmxGaVuTgbybPbNa5o4tv7ZCt6qTRwvZrx1s4M9xs6RaQkxWoobSVVu3zcj2YrFRdRuVx8EPWT5",
  "key15": "3K5VcYxQKpACokm7D4NqNreCRuHeCroJSXVoU1nN4H39YfeEEufnWimZHpB4xKJdoLGZhAfcSANAEZYv6HNTRmSK",
  "key16": "3vgjzqspoBhR1epUWADmPKDFt4gyDz6q7hvBpY7y96DNPjXt1oB6wBRnXZVyVap13AkzXfYwnChwbreAVDWQMK5Q",
  "key17": "61sVpUFWDcXg7N88tWaedwVYwAaqYrjwXRKQh43mFAhmBm7snEs9dT1meNEB51SuZA1BH2j4uPPhh8RV2u7HbTp6",
  "key18": "5tvTdMafHVHxXcBMkKKbMbqA7hNEaAcQknorXNNM8Jbo3nGYiBAVY9CuQeQJdfARktThbWxfhyZvrtQmZBczLLYo",
  "key19": "oJZoFJNweteqptsQVpC3R46MhC8ckA4CYeFYRjLn7eCzEmZYA8B7hheiiKYAiUNryYeqQdtch7d7r533wvsA2fQ",
  "key20": "5pbLVwP4uJENNZv9f2vxb7rcEihUoBZdc4oqCwL3Qj37WRW7KYAxsHdFg96wCh2y5CVSdJC1DjqinugXoub6aGHQ",
  "key21": "2ch8JQhWBRNxx1PbpZwdGDj1r4vLMAWwFbbaEBVLwkWDwjTE1eZudi8ry6gicVjeYALbR9DrWDuwnuVQEc44ZocJ",
  "key22": "4E9JgGtT4ZgHxqaKzcrfkCzuEiRt5XjEYN9DL4XY6qc7q7qHvQeotmUGGRdxYURHpichUWjaQHftkTy9ZXrayo34",
  "key23": "3MXVXCo2mESLpZrnKfWXZh2SA6Zc3KN8Ebw2qMGyLSV8qvXMMe5DZnMx19Xieirwqd6bctBrvtugKcPgvRPSrHpN",
  "key24": "43bCTrt6zs4nQqzAV5KgZGHU4wNVW1LP4fyuRxTa1tRXfLazSBZqNScmW19KkNognCh5jVEPWvzhmB2SEVgsoYjq",
  "key25": "4v6CKGjiZvF4f5BR8sg6S8vykdDJpEaQbRjgKpt6dTJTV6eGwpjwevW5d5zoDUuMuYLEB9AMfLj8kexcYgqpWHJU",
  "key26": "3pnxq57t6CDQnhueAcsfmsmduExWKvTNH8VTZVyYJFzFcSE4zHa55mEDgiN2s3GhAEZB7JxmSdLoLV3AhbbFQb78"
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
