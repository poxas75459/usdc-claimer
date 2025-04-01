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
    "4GWyQyKbLPAZvGmVpByYxxtw7ieBdW1U9ry1NSoabpyBna2PE8qLhGQVNxBFCd6hp63LmwwVVuQXn9Bhv9z3Fb4v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sMAScvPkNhuZkZJHYzMooMYAvLoCjSTioi3D3h2tsfzW7oEGXW2k4XHdnoEqiuA9MEY6etPHZW57u5m46QuBW3M",
  "key1": "3A1DzGxCJrr39GiK9ipgoSLKHFzZuRVK2BoA276zSV4mkNoGbNFuEVz2TDfRx3a8UvVbGpEMCeMEVGjvGbeE91DL",
  "key2": "3isK8kh5pcttEmbzTYeHh3xhcJyPAN1y8fF1o2xYftTwazqta3YUMfwUoGBPo2ezu7CsvQhFQJpq6J93y13NToz",
  "key3": "5AKwTkgYFM3Lmd7j4wmSvETNKpyesNGKPUQzHpnvfknruD7PKCVxHVyHG6zrasRhXmjn2SzvrcMpC9dWrVnxBLBn",
  "key4": "3DXaPnUjprDS6zMy48aYfgCjnvHuFzuSbgzMUnH82b1dEfev1sHshgrHzqEwDQA5ZSN5bKK2LDK3UQc1rajBbCAh",
  "key5": "39FrsDjxn9wZEGxhM3p4s8EPAY3wrRZudWUWe9SJcYNEY6ytZjj6TV2dm3VyE3wGcTpw9PA9YZatEVThN8pVyHyd",
  "key6": "u5LAcUzodKBrE8ozaqXDsRLBru9YKjqkFVik5ydHTCqh8D1tLZsLF8ghXqih7gSpTLN7RvWiegs3xuysBhgTTpp",
  "key7": "2sap5SwP8JxxHgzr8oHzueo2CofkeQtX7g8xdR2vzNsnqByz4fN1nwBxQtigQ6MMQvrPvjLv5hK2b55a28Z3kJgS",
  "key8": "27voU7H8foDtN834tDPLG7zyKU5HfVjBkWE6n1pBiSkgwp43MDTy3uo6Kucj8A9VyYWWtjFBPGoZ1zioomEwczER",
  "key9": "4VPwZayPB8m8pqH33VGKYePRsE9L26Vkr63F9b5JAYxx7LxHZfvZSe2tXjPYJQGCZxCLvvX673SBrBf6fb6TDcbK",
  "key10": "5JmXB3XwiyAvbCSH8qvbRsGpVHcTvXDy5vJLKkkqJ7vSpjuDATj8HNU4gE9hXCo9i7YkCMLZ3yHcnVGXNVRMs8as",
  "key11": "4YeKdkvSVN5mQonu3Qiznrk5RYowa8fMjwFazDCtJP89QdscDYCG7UB8BBk3kZXwLERaeCmUCuwn6ZkjHXstdqtV",
  "key12": "3aAHGGacGWX4NybtcsNnvwMwttZVGStA7jNzBDKjJxWSZbh6JywV5itH5AwEm7pWe8rtNkFYYG3FmvfnPqXt6nyD",
  "key13": "4datknkNe1hq2xLqW6HN7HbcZdVs7XZdQgCu4LYDGJxT6qCL39dzYPj2in6tD4xwcLTD27gxobcmS2Ywn53Nwzd3",
  "key14": "2rjMT7KjDVw9tJsxptQbaNbfgQeRPV1pXvrdbBezooMQXcvCNSTsUVc2LE9YLvdUazdnCt6GpjeuyCGDUFsQLkrD",
  "key15": "2L6igBERcqACJcZv9GTead3voJKVVK89q9a9Wa9GTwFmz6j7T76C5J2HE1xdvhdJwEpwobfsaHGUFnpafNaxAavS",
  "key16": "5KQuJLRCncY959gJtWxrwH1D8wJfpB52sWtTquBYzvK5zUH7u2GtnwLbzK7nMMj6RK81AahAEyPWbhPqqhtmKgm7",
  "key17": "3gibnm4Fd96vPEWrsqgWgETgWUR6qT1ifYHVRRC3k5xgvksZWVXYJqM5E68TrY9YN5KcWMNqDcau7JxZzd7dDUj2",
  "key18": "4KRHAimfEfuMtyxNyTxRwZiCT9f1DFjghguvrTZV9qbd21FwQ8iyeqV9oABARM1hJgtANiemrAAcQAB24F6844tH",
  "key19": "42y2jKtV3szQ4SHum8yrJwzYn4QmeE4EXxsCg1L7VpNtByew8egpWhAPaA3YY2ANDyKzF6WCteU2WXwRHgqAnayd",
  "key20": "2S6MAhXsi7vCxu71KpLRkMGaHie8vAiJfC4QaEvH9FE3aJzdPRKBEvbePPfsBTQxgAb2bPZgQeP8x8ttwE3VA9E",
  "key21": "5mA8mtVtt9PNiYZDbGd1c77MgbPqmgMtwZCSP2Fb41CeVQ5zqE1ow8R1ixCo81ho9rdXUE34HLnpLzb9FxtZgNr9",
  "key22": "2KiFpoKJ1XEg3912dfsWrArZWHL19wkBTRH4JGrGgSKbfFVfjA4eZAqXTtvQkDTS2A8GoWD6H3CE4kg25j85KnLg",
  "key23": "2UMQDNhem7uWAQcaWggRa6ReNxtjkVZ2Sb7NqtNgdTqRPNQqPvznjN3kFYTi3iLp8TxacBxkaaZnmct6pU3gUEtm",
  "key24": "3FjuDYYJXah77GDKWQhx39EYBzK964yAVfAFQWeqbiZi3PHP1iPw8sUKUXuXqvrKstDNHucwjF3xF6QeXUZSez9C",
  "key25": "2Ky8FTgmiovjxsPAuoLc1mg3zV9AbGZ8jA9TrodkAxakfuW2BQQjStCRMh5rzhrnKPSxEmuBWY8URXFyqTzbpE7e"
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
