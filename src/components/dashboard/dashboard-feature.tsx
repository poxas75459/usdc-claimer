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
    "53V5tzs2WxJLTDeQ63uMV5hghwGZNzPNnvqXzPvE7CXLfbVzUixM6nS1j5Z8Zg3izmQy3NRh7uNL2CEcW85Y3rMR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YNLcMjXwsYemMNNQn1RZ8tfhFCNNgXgR29sjJ8yx5qBhM4BEY15CMQfdo7PsNxoV9ZHqhi86pNMGcMysSZfyge9",
  "key1": "4EcmLm5xbZWa4ScW3A9XKU99Jc3dWWDmR55SrJV14E5ak8RKqkNkeW5etw3AE581UV9PUAoAQhTraKJ3T9pnvCRV",
  "key2": "2A5hGmfVGhgrhWq8b7tG6xd1nTt5iVRRZEsw59ydMf46W51CXtg46qE9wpPQzzL9CyWEvd1EQJmgTREaUTi1BhNy",
  "key3": "5cb7jKh38qnfsx7gx5wuqDLNCRT2XbpbYACR7wxfNCaWhw76gFbnijNqaH3KYnYFCeC9v5dPAYs2LTjVxcYxDrKw",
  "key4": "2VrsJQvfXQ9o5Q2mAuQiGGqfdqDfshzroKpMHytMoZTN3prKv3zpzSsGEdPFF8crJu2y2h6MXtXh6R5tUZJ2zKC5",
  "key5": "4NtFcFCVKeoEMZGDFPDA6zMM6oFH1hD6Ns4LdyGCPEmhgXyqQHxo2J3JfdU8XTzRUxYcwDepNJ3b9vzNdyuhgoEs",
  "key6": "7k2Umk7m5YYNrR6cGddGgLNGzR1EaQ2txUENLWtzEjwsGhPJM2e9ktuE8irvYpW7Q3V9ZQv8HphDRAhFkJZ8gqU",
  "key7": "33BAU4b1yHSdpqUBJsJkakx7KWP7J5ERq3MHWxNkQ5ZXHKfZuMm5JhqTCH1QRJgvBmvWUMhtcGUn9Ev7N9nvDCxn",
  "key8": "2wNeR9HencU3QZ4ebFESH34oro4Wjgxd6ckUBtFDJcjrBayMiZQGNsRgyZgm5a4m4Bmx61MVEovp5T8m1DnaELG7",
  "key9": "37cU1MWYGdKtHSm54QEcdAQ9ySxsWf76pA7vk3sNGbKjnQ7Cg81WDNkcy1L4m6zMXtUQ3z5nJYroUwxH1uD8hi9d",
  "key10": "4BDtYNAUyuZrARUjZmFcgZF3PprckuYnL6kWkJMoQwZzzb6kXqLd6fzXXCxbyD5Z8fFKwmuwXPJaFyym4Wbe8sKW",
  "key11": "5pyXWJcMQjsD94ZGp34tMXcRHErReupbVrN9ZJ4TKjnfyaT5kYdBfumpeDLUPa7iQGdaiybha9oGCfBiFAgwMhn3",
  "key12": "2pq1rkCqhxEmq2C4W9zo6jNY58e8fUcGhrhMiq1PzPKDerJHwGVgX14hxQWceFHw4fHuZWCPx7gGWwKYMmUfquWF",
  "key13": "4mw6QNW9j2f6VPwg4LFhCkLjWzSeTq6UiChhjvWiNukuhqrrEqnnQggJsLczKdLKkmmKEcLTcJzpGkhFiuJNc17v",
  "key14": "2rmQofUE91Z2tdoXgZVjmZQ54iaPPRespLaW9fwoJRqWekjDrZjEQrV3SrUoSDit6FMhSYDSJ7ipDomPbCuWv2P9",
  "key15": "2ApvCyBfzDNzj9hN3syqK2YU3yd4y9wV547D7YJoegHdVDhzz3sRTTMyviEUyUydFnqMnDVf4DDjCekVSa9m6tc5",
  "key16": "3sHrmRfLgQrubec2GHuHyJaieFWAdsCVW23NgCiLosxd1v3Do3atffit3KzEhG8n418W4hCfduCbyGRaP9QYqxeS",
  "key17": "3dg9rkPHtzfMcRpyzH9xacbEwQxQw2AHtvnr5ZHLEJWwUCNDViH2KQejeJG1GuitUJuT7cWVr6XXpwamEerTGK5D",
  "key18": "3uQjYQaudhhGBGDuQFWyW5xRF7mfScBPgUT8HJCK87HDXzsvwZm7QUJW1Een7gnNLKBvWaXm71B1qEkoCyreJ7v3",
  "key19": "qEKs7quqFnVRWaZuqSSezf12Ex85694V5oo6CzNHgYNb6vwLiBivcSS1TCZJEo2iisjdEPJMnpkhqTT8bmCvzdb",
  "key20": "BiNfghFk64Jg8FSNP1AFCqpuyezEEWHTwRhMnYMoSRfAbW5GV4YcPfnPavB38wn6BFbB33HLa7hg4DWBJdGoo8S",
  "key21": "5z5d6UCkSVAD7P8ES2U6gGHCVTZDybcMhXUzmBtNC6VVGzQTqWLAvbPbwTvxpwsn8v7X3tYrfzNmytcxYcg31XCA",
  "key22": "5GibZS3Emhh83GYq7QHyer7q9aZpPiyudhbiVi7T4tV2ZY53kUap99ipm22b8bVQxYJ3ooBH8xUcX5k8KptiVUqG",
  "key23": "4HQZtaMjhw3gHFpKedQ1t34wiWvCLb3oL2zsiWm4v7VagfzPoMjVPPY7UMmm6XMGAMMs8MhriUMzkbsAizPrzD57",
  "key24": "5hDXDZJ2Dh3s9sdEJRCtRohBdCmCRZgYX4McYt9F1FewoW76FSgpr7fwGMdrgRtc7iv4Vue1RoKYHt67VbiXLCmq",
  "key25": "5iCbhP5oHUQYaVfeCrZtNi5zcWrZKAiM8UqQMH4s4EbBLUHsQyDCsoJ7VE66R1veNNxXEqVosLeQyyvgEgKfGCZB",
  "key26": "oFim83zcckUn8hptgaoL5ws2zdV8Ap1F8PpCYnSfhu64MWeSXs7hXPKyvWAbJF8v5qVrW7cizTBaM9VQrMx1seq",
  "key27": "WKChavHxwU3y5W9KGU7qWjhgnbzxgBmgtoQrcnyi8GiqC78xboVWKCvJmoYLUAqPLFCe5YGxkCmJpJiihopupxq",
  "key28": "3RqnoboTWu3GjukLPcHgCveKiiqBMNtKgzu94ePPwP55xy8aUEA9FggbevuSsHaSijaj5EdgnNAiSqz9WCrcRrub",
  "key29": "XFJ2gKAg3mx38Yx71RPHRPLz6ppHE3vwYrr2LHGEXqNsGK6SER9mZVB9zs7URpP4AB7LcZfkHiHwBjyssXqZZ4D",
  "key30": "3igU6sHrnWN9kvTUn7H9SE4E1qJyZe8e1s2Q2mwnCCiaBUW8TyvqrksGD9FaWiMTa7pMsWzAd4Rf9DZ5nEaZ3oNF",
  "key31": "3nDWkQiDPx1Cd5w8sPGwnNVDd3vR7FX9haiHDt7n5Q28P2oYCaQK6R1AoZmkm5k5zcPbmVwS1nZbTrFjPsWEGXNk",
  "key32": "PTaosDcrE6XXnaYwgzyv2GVXU1n8HWWxN5ZcpGZsaj4BT64U9fxdSHDb1nV4J79joeAhRftRyQvKLhBiU2ikhFe",
  "key33": "34xembVNzdkk1ae1jqKJHpKbBnWdZGApAruPBmvGdG18pvTfH5X99ySf6LWVf7YU3HAEnUkYv8E1Y5v2qmBzqvh",
  "key34": "5DHg9tcuvxTkypNvgZzPYif99MaxCFjrDCGV7ae4jJun1tk7tCs9rBmxzb1Z8VyfWcZhXZWHNbN9HHTc7qoMZLqG",
  "key35": "5LrFWy3KBiZGyKWYWeBSf16kBHx51MV6J4e358VjMuNiiju3jBmyj17vnzRRFfC3q1DSxm8DiBE8eq8zNvzNgkBU",
  "key36": "3g23on7Ki6JwzJfDRsJvV2oQ2LyHSzqDTHz7b24rYbs93k46xPZcAwBnYxoRDtvxT7dwENWyYZU2i7gxDyFPaCNX"
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
