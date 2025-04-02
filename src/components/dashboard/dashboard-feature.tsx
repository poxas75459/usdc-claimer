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
    "2dYTjjFuPfkgsaPwUpJHy4v21nUrYbdDHVuCCWvLpd3dWrUYUE1gnjDAULW3TCR2f6PjxYPR41AYYzf5CnwwQLgX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Pwjed1rfXM5CtpnzwUYstRY2ujQddgV85oEusDC7GBGVQwYWfkDBfgqW3afZ6eJY7aZ3rH9yWwBsYUdZDZjYjRo",
  "key1": "3uzGE6cra9J6KghRqXPZAbtviQokRHYJ1tpUouNedGy74t4hn4dcVHrszdpgz4DpSUS22ymUaSM3jkzh3b7M29x4",
  "key2": "5jsDWs7Hz4VrQceffbXzDqhNk8RkKZysNmFHb2erYbY15Gbt54NmsNrjbpQxM8ewjphmS1UsToRqe3Xaj265SpAw",
  "key3": "5oZSCj6ky6ivmwg9bi246KSmxXZM6es5EPcRZSPMNMQTiDJKQr9fS2NEgYdmtKrvdePs1dpkGhjEBJnyWPr5DB6A",
  "key4": "5tjiRuZB1P1f6eYk14JvwPsbmFhbrLwjkdgfDwaRxjs9cQUw2tw59kGJNxdJR2pRVxyFuqKxUaSdSfuJeH9m7Agw",
  "key5": "4WGqnD7KS3KVcRsfesMoi7ZHw6S2N73UVT2hd2AfXBuRYQpP5Uk3zhbPz1qHUvTWVXMXUvU82x1awFYRWgKXLpL",
  "key6": "5VcMatc8yQ8Hfb4VvD1k1jmT2tyxhUZABeDE2F2re8e5N7ugkVa2Zh6APDNCL88ZfYcnzYogSbyX3MefmVPpR69T",
  "key7": "314N6uJXdorPyp8Tv19h3qz665gmgrauBouDFXyAn8s7KafgG96oWHwgZRpbiStiLdADafKjCxyS54MNNPQyb7qy",
  "key8": "4E7Y9VhPod1z7ka8LX9mHVKvHAZG1idMiSeQNwEtcqz3KJM1NaWrTPWoXXEMELqfVqwJE2gPz64BdN8UP6K48tav",
  "key9": "vZUzSy7Ma9PFunHutMixTWqLSCAbLbdWsiZ7MexwWXMvyM4XrMypq3wioYDvsnMc8J6VYwPMcDkd73o6FhhUFjb",
  "key10": "5m9RrJVKTRVUE97eCd84zkHYCj3knfWfZiMTnKs4kNH98oMDBzkmVM2yFtCuPbDSJuZADcsFHtS8AsmH4spUais6",
  "key11": "3vpyZMqDGez46gu7hkLRudgpamHTJVCYEGBZ4jZ9ULouFvKLYYDrvnLKqeoNNZNt4MaNUTWQy7MY9h88E7Aeoocn",
  "key12": "4o8tfJfVATHoRpn4gEfLQ3HDiaCwuAsf9tBuY1Q29mtEGT6Lo6N85pfLooXrhXaQUqnyST4kh3fx1JbVnzjFKWY5",
  "key13": "3voC3hkHaKE5K96xVxDE3ZECbnYXyHvS2yayb5e83wrEXPWhVG6ay5EtZGBknqSMtBfpscjpdzNv1o7ujS2RmHs4",
  "key14": "3PnfSBp7rQ4NS8QFuW2GvoZEnex8NncN1WL5jCW4gNZXXiADhPDPHQ4QJgd276dCxwK2S8QZBZ8zBZPNtywXqZXn",
  "key15": "5ZSsuqDwgdRkwFCLJDo3QhzWJff7t9ByyCLM9bgT55KLPJzmuX8YXZxd8rJuEX7LZxYxNqHHeVGBxHfzV5vQUpfV",
  "key16": "5iMcHTYHNbB63nCWAZod8CKnDs4qPqaUuCggmMsYTMCNz6VhR3Chy6HnorMoMAZndWS1H5UXp6c3iFU3QWY9Kkgx",
  "key17": "2TPL1kw8JJKXDuDeZFRLMQiE4pvFmMAYihWn4Ey5qquewM9zWs66uU3vr6b3KRwZ3jrxRYP1jbwcQC9K7RdmeX95",
  "key18": "3afBaezsC4XqFVe2raMjycWKqKJfTAePf4VcV7ELECFiUmFsG8KqyCLUMwyAPrbMRTvErAuVW72nfUKSJ8WP8qua",
  "key19": "2CTQwkQkXmfHCTCX85tDY7abaYBJwznZkZhMnWfXKMpjEGx8cYydiv3V1eZRSv7DpnKVLK2SbokrEakpdFomfqV2",
  "key20": "4UKXk5TZmvMuVw9Km4zShBX6ryGNoXXTZmkcGXPeJWUfuUawh7pap1st4dqf8yJZEHxBy7EpNq7AFZv3ES9a25en",
  "key21": "484fuZL4VkTzc7Zw3X4dpRCdbvDimy87yyacpQNz8y3rX8QwuTQWeMg1p8c5aX9XerT4jhedV2RXvcdcuVf7xxFw",
  "key22": "4sUQeBbSLv1PLbEVCRDkhAhHKy7r4gWc1tBq7GP1pbufpGVeVzSVjU7UxfYv8MVRmDat2kzyFA8hqUcTid9CDxG3",
  "key23": "3Dh5F1i1m5DTXnPqGKk9zLyM37xarYCHnn1BuT2NqTwtF2ZccfacgFnYdLHtRs4SGVKSi3qenwsADnqKFXEqxNAA",
  "key24": "3nRWS5pGjY6fPzEqyXiuy6cTdXjiNigup5MkGiLwjjYc1Drcc77BoETzZJGzzgbFBA2oG8ZRbdauLzVcG196RXx3",
  "key25": "5aifZyHEk8X2Z5416czRT7P6aZWGpCD3RoZMMbDENMSpDqDqeR2QWjXQM6om5q1kh1CkLd7RGXnv6NSEjFg2u88A",
  "key26": "64xnzJmw3Mgx5WsswWWpzRzw6RWb6GiRNJU9ncYUGt9oFScn1nNQUc2QSYX4Nyk7XVvyVenDQDsQAeQBdRBnAZtq",
  "key27": "FYWrvMcXnJYGo9LPL5nVFpNGpxZ5fEtCcZauV9TQE4ycdH5Y57xWnpmVq1SGpiYEr3V9zrZG8xw7qgxWaX15uYm",
  "key28": "3AHAJgaNpjr9XM4AYtE2vpkYmMy418UA6vo982B7TsQav6FUF1BJk6EHH2fdvkEf45NAA9hzLRBpB3o1C4WodYHa",
  "key29": "3WDbVYyJ1BsqQ6Me8X6m2Fa9cqJJihQxt1wkCNv7dAdBjyR62R2Ubj6vVTpDgtCxtTfK1eBuCgRTXsD2cWXPj8tT",
  "key30": "qFYk2dkDhWWzPgs2XbQUCyf5jEmfeLBJutVPXYkkm27kT3DX6kBicBinfdWLZtu5Yv4SW6rof5ajKqASJatdnv2",
  "key31": "3xBhNpuGooP4Qf95YQHQEyAxpNvSdaCXgwcAXmoVhZoJ4tR4QXrzPx8L3J4jJRAq1rVsz8KiojZPXhqMZegtfQBr",
  "key32": "2Af16MVoehHkAwZ6igX5F87QQw5iSGNpHTsvZxtDnNZt9YZEZvcCm6WNVKuV2ghzL26u78iUvvUuevQhgJMunb9W"
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
