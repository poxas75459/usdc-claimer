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
    "3WnEKbDKv3kvjnzvDhikEYt1pUsEvjHjoRvFAwANrofpUPjeSeBRstnYpVy2QzQwN5HZhTupKqarGkgm2V65g5Pf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55rkWSyjkfUgTwrT5PwFQGtJkzqGhz4fkhnbUJ6zS5c2FXWksY6H4oYQkhFeUNUofNyBLGuQ6xSqTJusxSYnYz6B",
  "key1": "4VqrQYpC6jApSZJmVQJV1auiAJRrhvmuGPu8UPtH9AdqG8E8iGBEGAmKkpD2q3aNs1oEk1UqYtff9p2dnjf9y2hb",
  "key2": "3kLo4xyzy6DywCfv8SxXPPhDM7VScfxHXJhRjc5cEaFg19Gg8nruDadme3SWk2FWnYsZ8bT3mqUfHH9GmRQXVV56",
  "key3": "5Uh26GM4qvyVzbXdW9rHHVi8pmYssGReBVcZdiqhMZQgo8ayKbDBrFeH6D7PVfGPiWwsKXpC4wd2XGWE6W9oHtM3",
  "key4": "3uWUVocMjfbsQ7QUnariUUVwxdR2fuz1E8Gk8uyeLZYjJsrf4C5DSwUaFiwDNZ7Vht3LzisMS9APhqrNGDSrc7Fv",
  "key5": "8Df1C9WpgWiH78n2jj4fdmn3BGCgZ2CE6kBj5LjfU7UcaTJ55rUAXdtaPUsXzqY6kMU7kFHFQkvs6CyWE7CWpbv",
  "key6": "4yAuh3j6nF4mJ3CarNcmGnidyBmNHi2sd7FJMFwWAhSfmgieer7F7oneg6fxxXe66YvrS3zZuhRMtiJHgAbUaeCw",
  "key7": "3fRssWS7AApHUPESTpd7t5D1wWQ1LM7uDhj8FixnogwMNfdcjuep28SuMj35JXiqeCg5b3KBx7CW9Nz9vDBnEBvW",
  "key8": "2sXqyFCsZgGzLM7o626azz6GFeJ3uJYDYg4RkJtag8Cd5J2kenA23RxfMic3eVBzU3nqeoFLTFn6tMfi62AVmF9w",
  "key9": "4MhmJiUGKbyHgsL9arDJsHU92UvoRsE1YeWr199Aw8kRvVnuMppYRsPhbQFeSfHpKKdTttKQi7ESeiUih3B739zh",
  "key10": "2LHzwH7g33BsW5cAESdqeAzZU1MJZf7AmV49Q2cjJEFddkSigEqyizvexMxRrXdmdG3T49rVdDkHKaU6S6y1EcC3",
  "key11": "24fnJBu7E6kaQFhmyNo5UgVWKuaKdq68rY6NQqCnF7fVqqJTnJ6Bnwy9zErNjuoY6kdnPsgndPxvcGjihH2s1Dz8",
  "key12": "41vdybQKJKVXVSzQCDbpJzvzaEmK7Xq4LhhYoaR9GPQprUkgUXqYrVzh2RyLHn8C1T4SdV5Gx9Ydd75vj1mB42Z7",
  "key13": "64XaL6nDS9jcDWjhfyqgeMmYMaovK6t46tU2uLxqsAA3MjmM9wFT7JGMvADoCExTJshsxF2WndJgnsQdbHzMAdy6",
  "key14": "3RxGTte1b9Dddxunwc4zgj4AY5dHiLZmxYwwbPXv2DpAiEqy96aC4GNs1uJstpVUxUAW8Jz7RvR8JRk4s3pp2Yuw",
  "key15": "2gsPHTxW9cbdaNg7hWmwTB3kN9Gj2HeQoF1jSxXcVueS7mV3Y1afvPPV1SoTR3YcvuNcRVJ4YJyvqB4yCEVr6aQe",
  "key16": "51gncRC94ex1oWyFAr4XbgMFUG1LZ95KiCuy5xacTgA5Qgs3gW2gUjUxkVbDP7zY4ibQfy4ksKkJLuLCvvg3LU2d",
  "key17": "2DKSXDpZkMGBP42mr6tqPZLdJoYTWNyEjm21zKh5yif9aUXJVS1xGSDSfCQjEKFBAd75VMJREsyTt2woB1957sJr",
  "key18": "2TtNY1DEwBZcB89s4jGYvqksLmHTZLRBfmu9SKbx4ypZwZ6PPhmqEGTc989cKMRNufxrruZY48H9WK6f3r4gqPeG",
  "key19": "4nV9C645CHHWsBH2GEGwek2yh7hnqHAuuU1V6MZEAaUJhJUHbF3hGogy9q31PHfy9XrT4j4Yk9wWerfQoC2LtimH",
  "key20": "4EnhZrrdhT5yto74ofWsEwL1FcdKwFNNhSicoj5PKpc7LbNqsJptXmcojfap2ShiWvauzTVyUdfd4Y2nXdYkLnGe",
  "key21": "oDRjhBidkGscU6Rs55yWqxFQuZVYkRsUy6MoxwSkTqhLMrKQN97Rykj829zq7jU96Uh2PEkYvE2KeKqSH15Ke9o",
  "key22": "ktnDLoxDa18rfdAKXvLBU6g1gwiE4jH9MNaCwQkYjthQj2sCdLUBmFKfiNK8kTwsnXikXg7Ci4NDf6BLwKUVcs1",
  "key23": "3sfZtbt4omSNDRg5eK9PuRgubX6Z7NdkruGxVnVYZknvP6DveAy9f1ZeTg5cChqjxHyCM4HpPYqXTh32kCPCMFPA",
  "key24": "592YXxoQp4xz3VdQdC5MUsR93rHcjkKSfyUZcW4T8QcNEsj1QtTCUAzEpYHtBQ4xQdhfQF1ZTCCa5NEgznxrZFDy",
  "key25": "27t7cs7DFoh4xGfC25PUJojQ7nHQ5cXgadd8EYv3M8Rr67W3jecknqp5WetYeeVJsD2K7idke3kokbZy92EbEq3c",
  "key26": "3rbfubpr1CbAEA9og7v6YCo9GXQZegTdR1FjaTtsgDedoXoubbvWwwBqXuAVMcBxfZMwJHfHUDABUHd886GyEMqa",
  "key27": "4BF1qR1ZvuNoNKR6koGAuggm9g4W7zC4jfAeEYJPQ45FppBpYyR6DgGbwvunnq5UTVDZUUQv3Lid89AfrmYLUJw6",
  "key28": "5qJ3ncGyYqkvTx2Ettnn9ZfGe8HkMP6KkjX8EUa7RpNJQwAtL5zAGUJLcnFURZr4iFDcZtASEFUs1ASTpQfqA3rt",
  "key29": "3kf1nLnDXmiNDZmtfzgsvq7JKwznAyKUUVNqwJFNvH5PVgR6F8Pknmv9u9777sQayFiDfCK7s3abcaNxRGoJ1Por",
  "key30": "4uz2ygw3A1CWtfqYkpZxZT1fb21cHnJjE2B9AekMCmRZ2SAgUdd6aAw6vjvT9qzpwwLjXMpqF964BKJY3yxXXnAY",
  "key31": "3JKhpiQLGcuzaSQU6BnS5Bas7Q5tdMWJca354J1XYNqngTkK7iXCtdAGrssBE45dvPsJDUjUxPzQC891r15J7gCq"
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
