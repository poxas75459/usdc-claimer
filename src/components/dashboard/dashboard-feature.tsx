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
    "DEz9gTzbDNAaSfapBRoWQkruQdnLCrLMXfhvHDTc1vJa8t8T3pFm3LFbxeXvjxzUpNmeLtYVaKgxnD98JvxkFTx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47pZzzekcJjWRgg31wFGxrZTjhbBczACLPyeuW8KoLYCHVnmhKYWP8Et9EKTvuCZrCQRrA4ZwLjaYm4siqkxVHzh",
  "key1": "5SjHREPyEtjN87LQwCM7i2qS1nvErokz8QWwuQwSrUbcH8RvLADGE4htfFP5rsitZsBEpMbg6VPezht9R9Mdmk4F",
  "key2": "27fSVEThkN9nrbPsDffV9oCSBN8BtdtaNUvFBCn3nXqtvpo34CyqFNcLmkKkgEvEqBn7oYxLZNSvcjZzcECCjHBS",
  "key3": "24ffbkL7e22UTA5vWEmPQQ9X4hBUQ3EgS1uXnQuS8J7JgvtKGqSxttSwhm2iuCupEXYfXqaCD24vW2Xy4LMWKRps",
  "key4": "3c5zRkci2Bm46xfeaDFruQYAy57nAh4rcSeLtWHyu9mb5NHwoJXmtAYi6batwBieu7o8Kiu6SxikwQmeNj6wWS2c",
  "key5": "497CjX29d8ETUkdpCYyM7qBihAo47Zda6rfR2u48MmB46WjT9XAerMbnEJjX2B6VuYh75pUHqpsxH3tPcvGXWiah",
  "key6": "53wpaMTJoxB2fmEv9Y2B1ouQpcqLQHxHxCD4DhKJtw9sBMprYigAmapRHgwvHiLt8CoyVzFZgEB1JnxFBGtVLSHk",
  "key7": "2nPguFfyfVJsnNCDfQAZZNncVnpJ71xepAMw2qSCFhhZgahrkesvwrDnkzvZDErPJhgxbfAUPktLYtZMVAbycFfD",
  "key8": "4q2ezFJKZ3hsZZPzjhGJxtkBT2EbUdt1mFtVKVEKqWLJHAD7FXDX38V5Kx58B7UNMTMqGVaWKNw7RK3V1PEnB75W",
  "key9": "2xnZGCGX1ZuTqi95ZSLjgHh9rKFZmxZQQf1dqFCp4AptKUcf7oTVb8GAcb2meV1jC8P43cAJtCDQjZ1mRY96Zy1C",
  "key10": "3VoRGRqBWA9EPQEDVopgrWWYtkYuagfdXkCjJb7RgTVUSPGJrwtL5zii797XvEmL8bmkUhREz79UcUg6SCMCjHCE",
  "key11": "32kpurYp2PjtLR7H7sCVF9k6Eziy4T7nxcauoUnAisxzYh6KwQR4JZTrhk8DT9mgaLxM55TXo6vqaMtFPyzYrzHM",
  "key12": "5GDEqFPKFdkwYACan5Tv22UxLjfrYuRzmqFf18ireXBVCJkRiYgNkQ5NakfTVattot3opMEM5gQVZoWcHz1sKQ9V",
  "key13": "3qM6urtWKKKWc45Aaamtdt7DFd97aig6e1Sm4RHc1hfahSQFrTNHvJjCEm3RLvZMDn879p9pMZgudupgMcPSvhqL",
  "key14": "2R5paBziNkgLonFtYAVZ5PAwy7Y3wuzLqyhMMUKHMsEHJR8SFKQ1JiRhYHxeuNXGH67JH9VPfGL9AE2gjRjktTUb",
  "key15": "5dGaMSKMUz5YBNGkWttuyEZ6p4o9fiYMgbqgSmMQ5ih9aXiafSf7oaUfGaQM4MfShQXyNpTBPmBf3ZuwEnVwVxV6",
  "key16": "37nd99tJPX5cPnT75gNnrYjvfZgxbmUiENCYrQkRww9WKsDwnQhw3snDUH45644Pq6aGmPgJF6JRUeD59hVqQxJy",
  "key17": "4yj7t87HDJPvwvBXhmHzvmKKMCN89XL12ZUfikScEBVzzt5uSJEq7qpXU7R7TUXVamkQuJe2TUCQFkedVWnAUuua",
  "key18": "3kcjyEkFkzn26RxYAZ3VfVMgYumZSm2Hkp8FhxGTA67isE4S6i7hnituKNjzszvKjQ5rtnFqTeempVkM1Kw44sQP",
  "key19": "27Qp19hjFuNuQUQLChLY8sWgjzTLPHu3giC2vTM2vA9MZUy4NTNVGmUHA91234k5dJM4K6Hv1tyLPLoh8JsFmd9Q",
  "key20": "FY8bHAdtTePVvYwCfukk7hJ57L88cXM6BUMdDAK7tRiXHw2KwRFCfVyTSWzUnDQnExajCCKyvsN32Y7uHTDprNt",
  "key21": "4WAnwKxz2sy1f2gzwk4fNn91vU3CPYfxDXgNBR6XtqT1MDyzVonhq63Zc7xo5m6NygkiiLQT7GaBsLZGTPZwjwdJ",
  "key22": "5wogSNU8axrNDVuX1oe86fzqXFLB5FpFyuF7q4WFz79Zrq69b2aL4691NaZ2pCYsRtA6eeMFgo4GPnkGbHRoDN6g",
  "key23": "2QkFzz6CjpBdMNL7kPGvMncBRTLSWk4Mwp8ewvgYWW91n4BZv4B7M5FfCjLUtDpJy5tuHV5qC5HznyuUDX5zqjUt",
  "key24": "ufM1YmK9Q44BtemY5AZegT1uQxYtniam1MYCQdEF53be5J5LbnLwPUnyLnJyc1hiWzwuhzYesDh4dZPw8xDxgYx",
  "key25": "3sJbqdz3eQQ1Ab6PjMpfwrpwoXCzNTxqmS4JCF1NF3Kn8stcUYWUoP9inPBbbTeZe7NfG83fetPoeL5TFMwj6qUB",
  "key26": "67CsrLPRfyvEEyzLquZ6VWHm5fR1EwzDqJMB3QfziKUEyxzKCqZstL1HYU9nQy5DPN12kztTojta76XyLYTP51h5",
  "key27": "61xM1sYsiw8cPdudCLvY7dVEniJtx21L1aMSfy1p6CXn6jf44wQPKb6rbZYSgcYyYHtUGHHz1sQYXydbYoTLowB7",
  "key28": "3vuox9sCbQhHWqGoYLiq3gB8thycBLbRkQDpMCKkCVdN9cbdesQ8DRZ8vXK1NjJSr5idiUk5EXzPx7SaC2Qs4wnY"
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
