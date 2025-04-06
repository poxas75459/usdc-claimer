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
    "93cUMndN5Fopn5VW4K2kBkMb3Bw85E8Z5kmNxU19f9PKWZy1N6rCgjgMMqtYgEvQiWGmBc6Kj7twmA7o1ZRbToE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MjxeaqiXJfqHowczQM9fvZEycqUHuXqqeyMHHLnXkfM8Rp3YGMEpXCvbGVivHcy7M2YxZsrevcPWZx3VEZsbGao",
  "key1": "3nU46Jw68XqTM6MF2RNpSAhGigEZypyipU3GmDDiszjqUUn6pk6cffxJpwwQYwoudnHrVXfX9L2XGr7tmvLKtax2",
  "key2": "5wioKH9FgE8niSDiWYd3rMbtLE8byRf1vSPxawqyJx5UxwRbxiNymEgkDuYuX8QwBWJETJpf7XmS6Qnyb6GxgLcu",
  "key3": "5QBXfKfLUpTfubgYW7QRA9sBCErtucFvDShVPu6GXaQTqyeg3ffsvAGtsSU4NEB9ENUXFXsUj2DbmGcoXJQoXy1G",
  "key4": "5cey2TymcoXRRgSR3NcJFDpULpGtZXDd7NKdhCvf4h8J1f2ioq4316heZ8hvo3P9bfvmtYG24WhWmczoyh2Cq5NQ",
  "key5": "pVrtpxF814asGJ2yMw9HXTt2unsUkSTqKgymxjMcZnfFh82aQRkF9uoq4V5tX5VHkgentytNNajDF1zQWWJdXYj",
  "key6": "3NuehQdPp9jnesy9qQN1AjPDwqqJcmDkpHh3Cx1eeZRx4MqrhhcRevKatyQMWkJgh5U6m2vEkBo4uGH5mgeiVLZj",
  "key7": "5Kpqxtc2qTiyo6Aqtg3xzV9NSZ6K1wybZtP3bhKHxMdb81ZuKUYJGMGs1wt5fbEdixZXvBmKS2cWm7ztUyYPPgNe",
  "key8": "4GoorG9wof9DHnBJ3iCHiYBt1Roz5DZmrp2K51MYc8NPkiQWzhZmrNEx4vBn2U8nWbE4WQ9YcCqBJFQL1Awiwe4W",
  "key9": "4n4PAqibwpEf4sTZ3AXrGQBGou563EruYuD9FouBBrkmYmmWBKcRn5Vfv7ahnx66UKxJZb6GeuZGwSAw4N7THFxV",
  "key10": "4MT1Gxo3CG1GsrDncCYpD9nDQMgfR5T8jxkGQWvjeAsBorDNC3V3sG2mEHPcReiMHZ2oNLBN6SbFWrQybQ4rzWAr",
  "key11": "BwJinU8GHbWVTh43ob7usYhwJFDYwXk87TisdghY2M2ELxCApemXyb3ktLUbPdCnbkSacQ1WErm3eUTzeeRzard",
  "key12": "4wCriRKHt2z93jvqAKRF5dUT4dNXjSKLfwTeBDkscnaE8Hduavv3wU7NFweNdnEoCmzWBHSguzyBgF8PuiNX96Rb",
  "key13": "5UJqY6wQXvNgUCbLzk13bPzWD4mYbaAdx6ad17Rpuif96ALY677f4X3htZoGh5k7ddQH5qBq6A68TQjRDvdduWcz",
  "key14": "3HUWj8criEWxFFgKQM63Z5VWDAQGu44rF824Kiyf7wAaVwRd9Tu7q9H5E7stjGcqHCsXcz4P6YGEBKQ1je6f3e5Q",
  "key15": "2ueYAcDnTurJkGeiR65PnM6PMLSXXpiWAzA1Q7Yxw4uUv1by1YhUEMAFLXKRTXKGK1bAPMkv8wh3qA3DafmccPLK",
  "key16": "K3RoiwnGJhCuzNQCPA51KiAzDrsUYyU9SAHw2tNeDhtRLJEnB4dbdw17By1w3UbWng77n667QwH3KFJ3py3f1Y6",
  "key17": "2FFErE4MRSEvcgBPkqzz4ZYQafFcARQ5CLVFAkncNUFuJbmeZKoZe3jPJWtu6AfveMAUHh5kgwujNDdXfK4VsEdg",
  "key18": "3wZSSQUe6yGyvcFRW5ujr9ktWNCzSH8CyY8QFS5dCU93tCdpm7dZnttufkvSzvxs8vH8mUX7XSqfWCEzbzkuZjtw",
  "key19": "2ABvQD4HQBGzQPTnVEXjAhpe9jueUVg4RKD2sYcNwPbY9K7A6w1cBt5h2xXUSeypMmmiAUjz1cL5z2hiNkDypiYd",
  "key20": "5ryNSTbmeCnHVziHoVhVXSHLpQxBGzEQwaDTjAEGS5sqc2iu1P1dwUmZz9pSNkLVdSaMXoViSUa6AuVj6qbZyiMw",
  "key21": "4mxoTxKwNhw5Jn58qgKheeiAcTTdJj773M5sqdvZW8moaMVX4XDf27KqjN4Bme365qRu9K96y73Ri13Vh2nG7Yn1",
  "key22": "34gLBSTHUwEjRztzNKWvC2A67Y8k71fVJkELPr634x9Z9HD9zchoteeLXP8KYDJAnuEoJYWf5ET63ayUgUAMNhid",
  "key23": "5UiWRyXUys9tgCcVq4mnbPSpQYPyNbo3y4Cqv1xoodzYeUZQtDqcTxEFA5prUbrg15wMH33nFgLSL5qQgrp8NFDn",
  "key24": "5WwoMA33yPNNviqTBa18B518mdf7ifLbcb85JpAUZoCfRfh1ohedXigTeZWLXLNCanCusPNuaH3uYTKyfmYbdy6Q",
  "key25": "2v9L9QMfAd1RqTzrMMUaeVirLJSNiw9zZsNu3s56VExUJBQN6GjEXN3dEjXczqu61Yj8Uuw1Qsgf3AMRYhQqBmw8",
  "key26": "3FH7UaPVynNgSsnMNFekiPPuGLiS45dvwL6WWzxT2n5HFzdSeTcw9oMSm6UiJHeUDvbjrU6TG3SWq6RTRiVVF2AM",
  "key27": "2LnxEf3uWdZ4tymMi2YPKrmew2GZK6xrkgRh4ywbaYB7eJomT5Nsrwddq9aVTUGyohWJfyduf2EnMVMMUYAeBCmM",
  "key28": "uzkBn3gmLru7wdMW5KufCd4V2HVf49KsZf1cKyQNLzunCixX6nptK495tgs7djr9PfEEcvaRkfBngQUncvmk53N",
  "key29": "3ADGHKCKJL3DREL1MoN86MitjC2qzGB5SMgyKMGGE7ambfTmJXunybPg7vLWmUD3nrMScRvBh7qTiSWNckRVhm5a",
  "key30": "3JjscXcLu6W4RRcfqJFhKt8RNEi7LXKZg7vW57YcAQxFFPmoP34fSVBo5ug9V8JssTxPvhtNNq5MR7hrJFr921ev",
  "key31": "5f8FheJdRLs7STHYtwJUTKe1P9rh3dqjDYnjhR1Q1CKMQbpPHF9shmLaj8sUhJkwU2Ndv9Kvx7THYBkAPrbEt83m",
  "key32": "42FUFCbaUpDaviLsG81NFCtJZyPuYyqpad2hNKgQPtwEEpNgdPhdXBnVKDuYktpoFkdSWKbf7YM29Fa9DGxQctqS",
  "key33": "57z8qoV6zCsihVm6Dsh7HxiCs7pZhaS2YmjLhVsS29BHDakEXvA56ugwhdc3LhNc6mKmPjaEB9RcrnrSB4n46Hae",
  "key34": "5Fw9Dyk8fySH4VVUEFquT8VxqhYYvfDyy2jyfLKjkHJVfevB62dfnM9AtGAiWkvXwKSwut9nC7FePg7F4VgwjRnA",
  "key35": "5arkGiThUJSfvDGBVba9hXaqFyskMxGoSwxfPaD8ks7an4KyRKgaEsNFAn9pJQghncmDPk9zKdd6M9GFbt2n9i51",
  "key36": "2arPwtzeGBrSo5s834AQUfgybj3rPt4gXk4arccVAFHAfRAWyimA8A1W6QAt62B93vbVEnrizDnoKmPAxYa9qR6W",
  "key37": "3ahg55TAvW5oMHt2sH1RNAFfhGmfnYxaGo5ZQSBKgoR2K4DswZJ1E4PPM36BxuDtdWrcPP3TkRFwqJSZdQuxoZ7F",
  "key38": "ditJPuYaPHjbLbxM8qbkjWw6VWKVePVjf199HRxeFnzakXgX3BbB4CRUSdDv2i3a1b75GFjbdkNMKWciQQEoiV9",
  "key39": "2usjYRx1iyKXLJL3NK2fsBzhUocFfdJaLXMLcnRsJGgEvBpCMvbGMFwqgJCbcswPuRmjJTp71pKBp4AkcK38BiS4",
  "key40": "eJDWFRuWv7NHmv6q9SWriE779CY6C5JMAeJArKaUpHpvxYDUUuKoGzoLBRWSRREabx3WhwrZQXqqxy2jpBqbNVe",
  "key41": "61hQPE3w83Z94cz8FDj3cWmz7SHJUa9XvwJ7tyLcEShLrJjCWn1HeHSqkYtXeK2MuXDQfKioQcZsroSzouoFPG2y",
  "key42": "3XXBKKWLBkRoBkKAmnCoQvCQVWMtnhbVhQMDANZ9gmFqXeQCtGjnHcrpvuMbV6sZFwVVq2giAmqGZR4igvL9ZH54",
  "key43": "5Ujb8phR7fQueT7kw6VbUX5X8EAZj3xAuW15bqUuEqspkLNUJKh4fZRNq9mUacg1vMWdhUZEtQcxb6s6YjnrGw2k",
  "key44": "3RHdPoi1k54o7f99wfh8EXP3rojGuKWvZML6eNKGtCmr17XkAQtrujA1ah2jE2CN3hhGcg1ZHaKfPoC74xTn9sRz",
  "key45": "4nKi6m36eeVZXdym8RAuSGLja3gmPo4LZaBooKBK1f7wth4gbm7o9msrryrCYXEhRZkn4QrLDoNYaNktsyr3Xr9n",
  "key46": "54t9cubEj5qS49KZG6MnZuR1DaF9SakYf5zZAyKmRgqa7oNsLo5uBoWZDfY7pycAYMbrckaikheTekd97q8oX4Gq",
  "key47": "3xSEHnuCLMzHJmZAikeLz6r5VzXpeMi8k7ZiCBPJQRAD2LQ7ZhaXrw8GTPT62Q5qb3fdoN4m1cheYUQYVF8VrQeo",
  "key48": "2NKPspPa5zJmoM7Yt6T6G2oy5cWWibxXZZ4ii1k7ikj8Z6WzxQynCsZbRTe2SPxi51sVyDPqMJrhuwmPgM9uDGe9"
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
