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
    "2Et98aazowShS5RjvuVzYfsHZPnTQ2EHXXFBhyB2T8CYjfFSUXqSu3hPFuLWotKvY99JG5qr6GKPNznUyZzWAdfM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KvK6SZdaa9xAz8QTriMR63z5ZHB6g1i9RdoT239JW5VnuEtKNJtk9TKZV6drBHecErR3UwdUhe5YTvUVWTviQ1W",
  "key1": "2U9nUGqzyoKwcdz3AXGusgBxQfLT6rwcK1ggD5yxE7BwGKQcVtBjJaNE4UkzWo7EWzrm3nJi7PY6zdDE3Agze3iJ",
  "key2": "GHZAWZPr5B8oaNsy8Cv4zEmgyQeJL2zL13Tx5t9XDf5z6n9H2ayJLEDV6YwoAEVsStxquHCCAaiLewcHib8P9bd",
  "key3": "5YConkyZo1XkLLQPfx7C7rGVLzNB616KfLuczVEntwyim7MNzH2emNV474r2oC4mRvBzEGXtGxZE1UJY1LPPiHZr",
  "key4": "Az7j9mo1NT4k7bCJi8SYFRgRhkw76SECv4o39PNNv1isw28vhVQyNKdmadcjQzpu34nwRJWidXZEEsqEMZbJV6Y",
  "key5": "61vrFW4sT8sAieRbKZHgskirbcRHnNqFTJqFVELxABtwVLMCe9U4Mx6RNhKq5373yoHbQzvauGjaCLZ1vL1rQob3",
  "key6": "4Ka1CzVmdycZvf7hr8dm3bfqKK7t9pcPbRN45JvXTR4XYcujcgZjsuEMY485ZtEejjccXLggV1hKX7FhGQx7dSgX",
  "key7": "CfJAKdvHQA4Tvb74t7a48jVy8BvSBgUFWFqKDxfqHjXGNgh6fGtjvuKjbTH34Fko1Uqbce2PdrtK9oXD3NP2Tp9",
  "key8": "3ZsgR5mYugHiTryFVWUGzKgYMzWtXnLpZ63yhyoxfvEmJ6hZFnW2cJDZFaASNLhpM4DdJFGfp7q2tuVtiPPdjUeg",
  "key9": "5kkw2VLHBFJouC7qtaVKY4Sv9p13PcqrcqKL1XgRSuwdUvqiPtB5ujq4EuEM4argKCAS9pdRR8kAMkDVVwGu9nJz",
  "key10": "2pJ2KEZ7ygaKV6sXTS5tJ5XbN7U2oBcTvSWnSNQufAsfRBXsCDdrASgoTAhdXtyjccpcAN8VYZSspEdpBSkKJ9SZ",
  "key11": "5MHWWmndNWZgYZsBZzhThTWgoRBy1jVuzMjECvCcm3osJeBGJk8s45iahtP6xv3QFaU1rfzqqYSZCV1wFh54osz7",
  "key12": "3AdHpWdz2sbmgozD8rqMPikG3sRWSZmV4zgYWcM367jTafZfkBAFAuesFr3sY7vUEjh9PkEEGdtUHHeE8antuGhK",
  "key13": "3zEzXcwnd9yzY7iTzmgvCdwjorPzqANKo1WcJi9PhoSGnMMUmzGUsdWf5Hgxpfsu9D8emHEnzug77aUuorQm6FJd",
  "key14": "3H3C3hvpjfmecvjbYXJ7mPQfFZaGoJnMzUtLm2EV3MJENNRJEVnK2idQobuB7ftEo8d8fBTEDeeqLaz9cWzFrtHG",
  "key15": "653iMkteSmm7CiMXM9PX3LaMcbYzzmYo9AAZ99kQwxnMbBG8g1HjvHH1TistbvajFW1emaLDGDJaxzp1U89bKqLx",
  "key16": "5GFBwdtm4RuMkjgtMdDVKBzByfsmvhwn9xsCnkkfezbcN2GK9jZYD9WaieosQttPveCtAvxiH7dgjamGiXH59F29",
  "key17": "5Sv1AhRM4j9js6j2QvSYb7FDAAxtTEzt5Hw6A5dQBZkXjvEDD8H2kQc9tg1F21ybKEupiVYers7KbCS1CVtJKQpb",
  "key18": "45iSRtQdp7NGSphpHcXjx8yZ2EXFndcXe3ua5y1rPSf4y1So1wqAgRj12r4U47r4ojBqj4mSNuWZxTMFCZ2nCwcD",
  "key19": "653Ufu17AW57V2KLLWhBNRJVCXr1FDo3jhcXacnsQqaVLyMBFGzYisu5MFWYewH61M3JXcsja3pEYVofYMCzBfA6",
  "key20": "5VvKrnbCppYYdf6cZMRjBYBjotCancq8xGCqWfh6dK9x8Jc9vh8xttg8p978Xgm3yjVkbyhyhbiBHhAJvqjQqCjc",
  "key21": "3KGx4iGgMQwucwDPmQzqDnLKfA9X3t8xxwFa834Wt7uZekFu4ko9jmzpogAqZBuFLJmdS4wRb7c53B28NzLrLryr",
  "key22": "dn75eBmPXHSb4TShVEKEdj5FVaNixVjC9MpNy1xPzjLnqeFwhpGiHPFB6GB8CN2JaDy7sWzhbGdDb6BF4mVfHcd",
  "key23": "4Yno31qHZzodTUQAxgtTCi5YEviG8vr6NZ4MYgcKi8p2NjzvfmUa8nTemCfh8qruyKnwPD7vyLJhmeEPMsYCuEXv",
  "key24": "3bnKWeZEr9kPZdjvxyNK7NE8gbtjWAAaUTVWC6VJ5NDdv9y8Une8xbTKBe5gsCENDuzmqTvnu25ZrKHjXiQcj8rS",
  "key25": "5GUPiSguCFYhi8LJwzDZqczWtS3baof1vLKyTwozWZiPn15JSBAQwxRw3bdLtcjr7w7gYbKPkLRhrPjt29EMYYX9",
  "key26": "EVjEutYs3tPNC5X3PJiZFBeEnF1oJqnMye2qGap3TFMzH6tNqkJAFxFzXgfey3cXr98LoNkJjMYpS9GGSSEJvaP",
  "key27": "4naYqK75AzeWAjT3NtGkKFxpkBfx9aBKLL9x6d2MfoLjwDHQGrEYNUPZwNfuzkzEAmsgRHANWnbypxgDc5YtzaBk",
  "key28": "5YuyTE4cjLA2vL7KSgqVpmBqYBA2eDn7N7upeZphiGXNgMueAjN9iYfHYdGAPMpJdRCox4YPmYtrUTCHr7qqr5ii",
  "key29": "2Rsy4vEUk8ori2uTtBnr4ip7CRjjVoJcofG2LEmjZRabsg3CTGTvjB6GyaQY7gi5vVtfgssnJ6Uzknf5WR6j3CeB",
  "key30": "3Fa9pQB9eGWtRW8neMqsCE5sxgdi5Ah4VDMAyF9qiqiUzWAc4Vd4jK6x4C5eEu6D8K93VW3txzXBnVs2P9Yg3orM",
  "key31": "3xz9TBZnnUGTErXxzbXcbnpSyxhY2LF3iWLLbCWaKsxNzJqcuPr6pPZtgFa9uNj44UHhMewNTtf5kjdfakCf33q5",
  "key32": "21ocnpENyhEc3GBKXPK1dcyNS9kB2xQ1ez7aPg3NdtSmLmB8ZsUgfsWnydEdSAvyWp1jH1iADhaHTYARRVVEcrE3",
  "key33": "5Kjw5GSArq9PRKjDRdwsBSgmgFGCDMUzpApR228QfZjqpDJFKJfdkAkJdVYRdmLpJjoWENkZGibVBG8EwmarJ1qn",
  "key34": "rg5F14mL2jaSpBAzD1N7ie9HnmvcESB4HoedS7kGPQEwALu7abFwRvMUZcb86RL66dtJhyNZdgP5LWitVNLyc8f",
  "key35": "2a7ngaBfYkiZiJ8KwWjtXCLmwRFWeCFg6QrAgXx21pufgyqSzXiR8jLLESMrtbBvtEoxyWoxnpk6e6mWv5LHWgMB",
  "key36": "3gfrwxMsC8bTpT3dU5zP5476otRWtT3wY3pngLzksyUPii2JbFwVY9ZipitU9DhRD5km7DDgzvQjxk3DCHRkkXRF",
  "key37": "5diNDRNCAbq3EH92fw59Kws9o3Thsks4BroV4n6q2BGZSmwR77o8oNaP9o8BRechW3XwL6fuJvorvoH4F1yXv2d9",
  "key38": "5mZKLyXJcLfSrPRRQenTJjSR5gKgCkSeHVT1ANCZdSUgVYxNLGYHzezd4wK2Haz5Ti8TSk3JziXGhNYXTDnKYaAp",
  "key39": "2n7trUn5m5fEjFR7rpckYrie9qcorvaYnHVBSaMTAnCAxX5cAtBispwVjVjgCrnt9kj7PJnofrZmkbz8tLjkTdiB",
  "key40": "5PeDDhLkKbWopLRhuzXojfuQL9iW9AjoUJiZBePiDtupyrwZRLBKTvz289Hbn3uu8yzJhRQSWefdtaWyJ4bPu1yw",
  "key41": "2xNfd5SYjzAFdjtUaZ5uC2KGDC2XVwQn45kdgek6mTMmS1ZJHxXrtuqa8sLAbVuxvzN2qgQUWrCYn7FQXpNGmNda",
  "key42": "33JX77CW1os8Vw9qGjoL3ugmqXZXpEGTfEKwKu3A8HAH8mG5mDvT9HcZFGpNXgCSidEYpFhZWckckFr8U6QccZYh",
  "key43": "3KLZHewcfFJpQkSsjcf8MWTRLn3hhtmM9qSdV9SVnj1aDif7Qtb7qiGu2YNvtuCqWtJt7sWtBWeS5eaXhEu1a3Fz",
  "key44": "gcehroc34ecYiNAbNh7chDx1MDZSyHPyktyP67seoQpxBLrNFNVS7wyhNfdf7eGZjp4uVdB5AJobDAMUpoLAqjR",
  "key45": "67TErcWgRXrd5H8JBYB6NfVpUnZ7ezgXx7rSuz6FAk5BTZfwHVmbLxwzgtTqMjuDUoq92xALjyuGh53MC1nm7YyX"
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
