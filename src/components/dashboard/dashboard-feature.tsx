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
    "LLLN5RPj22gEzCHfCQijB54XfhR5rziwBmRfFnH2nCdN6cgyGnWmTR5mgUHWppg4YRZTQYQKPZWfUQpUfDgy2YD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AZj1EHDXY8VtMoZzjX82NtQWkXw2aKhroW91jhfy1ff4gsWvEhfVu5h2HEF9VwLxYm4axas1Fvwe953n6fhZGu7",
  "key1": "559uFyKUQ5bVBDUGdxnkc5B2eC8kXBmCRyBpKpgaHvhHhwmLknqMXHuSHRiMpme9s2iMuzQJwourSw2amXWowzWH",
  "key2": "3cV2psaSqDW4n9bV2S1M5DW9VEN74mx4GQexKtyzqiWTgDQsza9eSdw7zMyXu8oi22daqEAmAvST5zPk9TxtdEF6",
  "key3": "2MCYUefLormuXfVz6YWGYVGtgNoUJscwdLSax48rMsqqEmDMm8msQ2fngGC5HnfTv7LBsxV7iV7ehNzxbuNuP5hn",
  "key4": "55M49kqsBFZufnT3UMbcu3mUK1vxtPgxqkVzvNEr5ryS7yuWim3koMeGhY7aZ88HjFGm6pbneUdLSXzfmSng9DXG",
  "key5": "5PxvvYJDWtX3srvK1SS5PSwGmZv6n2DKHWyowH3rNMa97gp9PYGV3zcjjRCSu4P9GCdUz6UwvNyFGpP8rYHeMRAz",
  "key6": "BKtv9qyUMdhV6L1JNyVG45aYNR25MyTMx6UYCy3NdDnh55GwEtGHLYgXmmAeCxrCzcZ7RLCPAUj8iE6Z9yrmcHP",
  "key7": "5QSfXLXXJckcQzKvLxHBmo6ASGy4tbHwW5gGfLRvZZLnAqPfUBVrz6CtpVyK9K4vrLdeEp4rRqQUos7bSsbQCckw",
  "key8": "418he2Repi9JSNzgbvPdwTghkV1aSUZ1ATR7PMM3BF6FzTqJq9JjwucYNCs2izV1oz2227TV6kJ2o1P9dx3CxwB2",
  "key9": "5FPM3jVzAqYKhJ9E4tPjA8TcEVm9Mfiv97MEcZxX5Bq9Y7FQNULwuqqbZe539tvtKYEAhkkjqSJWSq1CYj5t1ovz",
  "key10": "4MXF6EP7WxFNbtMuhQVwz7gD5RyYZV3xT7dmvXZSYb1kH4HJsxXyWxAFXLPWXSTQwRMJ1YDdYBwzKE83t2u7Sq9s",
  "key11": "2G9DmeNxpua1mBhuhVbaikppiJtCu3qPsAM87kzu7A3YQkEYWuvR7fww1uEjx41swzPQE55P7KmjhgHq7jx1jit",
  "key12": "eE7cumm9wJQ8WYQxgK2bybi6CVMEVncGmVwBd7KzVmgg8trFTP64Awe7W3CMPDANhJxX6eNa3KYrLioKLANKhKd",
  "key13": "KmzALSbFQyXZ5jH4HkAWcbThSsML6nhejnvk5f76iCdhG6unqNaTYAKjDAzs8ysVXcNca1PAcDytqKuea6sfpQm",
  "key14": "5SXwvVkcssjyfSxfqQVA4ZmVuzaBYShRuRGYUC6BEKua1gqXt4TRK3GnhyCuRAPkeqqUwC4Zs6eQ77tXHbaTr3X5",
  "key15": "3QKmzsXztgCucxg4fBnBgw7d6zcMCZSfTsVXz8z8EfecR2SJU1gNPun94wbqV7zo5jvPfhiLiPoQwyujpAybGU7m",
  "key16": "8tEAEgwEwWxSiFecUR6XoLzDTKCBkXTX6AC8u6ZMxwmCszSHUdqdEcZJnSfmugMxMFScE3USgBtBvbGFVugP1xx",
  "key17": "5337W151Tnqdrj96ocX1hZkPKQsQJLujZfUwEas4WdJ9nZpQMRS216sJ1QsDdepZVpM8PWYo9NPr6tXXTt1mKtCJ",
  "key18": "4QJWCNcNCn54K3bgHys3wFCiNr33wjbok5NG6UtvRTgtmJaR4LCC8hVsyeDGmJiSCHWQMwEDDhZq8FPvc1u77p5w",
  "key19": "5pmuCkuBTf89zuMzi73wpgV9Q8Vd26iVUBNbkySuWdHfTwWjP43x5gk7B6PQbqtNcYTUe513r97J7sVBrhg4g6wR",
  "key20": "21t3mzToAc5NigGyj8z5QMsmFTEUXjDDRKhWohA7T7LsUYUbT14KjpeZd9iS5sr4534weC7wJ48eN28oQXA7ArSj",
  "key21": "3anVATcB9xpSV1o5TfZCDY1MX3jEg2vMwgQLDmZkNEqZRzqjFbtmMeBX1YoTRj7dtNBDkYB2WdXCNfcv11NoAN7A",
  "key22": "3HcxeKd3fQokttGR23NpNx3V9tS62gTpviYgv88ZEfDr9tv6NfxyVwAabpUryc1DUSiQ5jAFnYgLhtCmGv7X1q2q",
  "key23": "2tZULmUHeW8Hgc21VjkQBEPMDMrcFp6WA9jJYuHp5eAGCmC38fUFddzHdz3MnEC9x99ExTnjFejD1zVodFC52DYe",
  "key24": "5cvBGhdFp3TkHT1c4uRSLoBiWxVf8gkTSy4bH1ycjvuhBJZPyfCHYBfL3WY9kLNGZ8fDjTP91naEtybHY2xGt9P8"
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
