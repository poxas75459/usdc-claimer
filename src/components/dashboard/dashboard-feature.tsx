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
    "4ipiRxf1CgtvDc8R5VrvfNgV3SZswcdoU88GwXPWMkDsL9i8sC2mqVkggZ1WtdPfwi9HbsMUkbDw1zZtJzfrTkZc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e4GNtfWQLR4XdWhxb9YSZa73rUZvWjwh5QwSgH6mNqmoyCychY3VwCVySx7jGNyXdARBAFaWobNsAjaRtKPckcW",
  "key1": "5ZDMWRQhWPQogujYVsteE9Wh4j6adgGspLrKhHPFyo3Sra5ENRYETHJPJegM1FgqABGVWUWtVMmrtmxg2yLeq8G1",
  "key2": "3RPsHAXCMjMaoKSCt7WPNAak4i6jHpWVZAMNDpD7TJbx8F6cRssVcovn9fBcjqXFd7CYmfFyeEfQHL9gGvUgqpL5",
  "key3": "37sRBSpaE5PBC6A3m6xQCJCVaeW5BjnDkjsqAMQi2J7dK1QBnTBfKBQNe5ngLobxDCeoQ5YpHzTieihsYN5cdyik",
  "key4": "3RGi8avtQ1xAMqWQSRRL9yakjgrLxeB1FAAJZGi75C9BRPDHwrP3Gn8tSerBJsKkGe9mXC3V4ckXpx7jYUgUhQaX",
  "key5": "5q5Qk5pmRpFRFcvKLADF4e3oaP5oE8m4eH7U7e2gxuP7NofVpezfrakcgCFe85LNJPEZf3A8JmiRE5gtNSooaQb8",
  "key6": "55R92iJ2F9TpZ7yNkcjKp9FwHGNAdJhEQK1twcG9rosztHMwbhEXr2S2YMKtTJyWiDYGimn2uS7Yuz1HES9A7FfY",
  "key7": "3kPrUNSAC3n2r36YufVo8g1TyexKcACQ9zdPBnMDMWbJNeR1jiXU44MJkjXqS1NLPhvpo7Z8vbZe1Qxwqax8jcys",
  "key8": "2hwxu14ej91QLLTZLLGXPqeUwBmxoPdJigkkijL4RKLtvXdaNnTCimD83rcLzfr2duczfYPZhs5DzXYmmyf9194d",
  "key9": "5LhRZTB1y9XadD7WBNKM4a6rRmTuCs9qJCNiwgosBhqBquAxVEVSEbj1jw4YbmGqooHjHqLxf6Ero98GRtES4Gun",
  "key10": "3YW1ghi5FKWf5bxztpc5mWjGrD1oo62R6vNMke7q1MonY1qARyHJhWu5JbrMQWHeV3SAjcbKcJg47X8n4rtY6MQv",
  "key11": "4MxgyMCsi2VgtJp56sGDJ3SUWg9xjtmrFY39kJ1GWqPUufXcMwH5CWZqcW2y7ZhnAC1Qe8dKFbsDQMEckzo3fYpL",
  "key12": "63ABJDHRKCyrAEbNeJxw2hPSSN4izNzco2zQeTS2Rj3DGwgRWcXbq3Ajw2NpUhYKi2tDyzwVHCYoA9XoMn7oSX3p",
  "key13": "UzSCikitDUEMu6efEQ65LZDxfvNxyTfwoQoq15mTGe1PhBbYaHFdYLeT3mA1oahi8axWHGRK5uXHn6JDppEd9fm",
  "key14": "4XoUgRw1Rk2xxHK8GxeGggWy6BVU4MD8aCJnzFKhzpKwRtcgS6N7E3DjiCjMVfayeLzUokf6rmjRrZKikjg3K68J",
  "key15": "3NNuTw8utosiBaJQiNk31X3u1Ks442Quykb8eHTEWQsBdPvCYGfWQWtcU3pFyixXhFakGUAo72ZvGtkthYrzEgXQ",
  "key16": "3kpTJktmYK3dFgsXrtmgLFHxZkpbpB7LtwASCE71HnsMyY6aryiNcJDmD8E2skbKFqnsBbErW6b3Mj15aoas9vH",
  "key17": "4XPqidKvV59ZCn4xnJXcofi5ViUBkvJZDagzQh6XpL4f7dsMaQS8MPYkPX9Yvocc4A5pQtpNv35AjD6xTnHcRw8s",
  "key18": "3Tf2gbvMCwgBrkvEmMhetb3Knsb2ZPeTEo3b1M93czqUb2STCBSqALJ38mcnvyZ5xZAA4AsD9Q9PWTbdhaTcNQop",
  "key19": "4N9SZ2c5v87A37yYUAy1fYJtXJ8hsexPkzETPCnRyWEaVaQt5M5tuEchR232o6rGb7bvYnvPmYSWZTCYMPvaF7nT",
  "key20": "28n3nYBYzrC7JeAwjHoJgSVMcAjehRFeqqxF75va3AaFQFM8fm4eowZ9u6TMJCYUdv7sa6weJWXeuy2zMM8t3G8s",
  "key21": "3kF9igKYo9an4615JoQujCbkNcmj55egFWp2VJt7m8YBKZcZqE5na4q4GZibdE7kEDQBUDQak8dUhCjQ1Fezrb8H",
  "key22": "2iiciwybjCPtnP8VsRmhdkTPtuKRSEnbwjx65exTyrEiDcBhkWLWQfqpk6JGGhBBtKfgv1d4LeMGweXwDWHR31ag",
  "key23": "3zYGgGppBLs7kvRttoQqj6k6oTYWkWEYGQ3qy2w7PSA1RUyE8z9peAgEpAxK7z9TbcYRt1H5qy38n8Lryt89GaLZ",
  "key24": "KZ4F9JihyFafNGcTKb4CmPLDSp1NYvsSbpbgZmPA5WWfAtLzX2GR8qcRqYBy6YUdg8VzKQf8iFoiWgwSCK16pyp",
  "key25": "1PF24Mmb6tbU7cuYNsu4niNuTvR1jLd32R4ghaZN8HbRxRahieoSL1kGeELfsz2gwwJ3QjKbpmzoJdwTFpQB6EB",
  "key26": "2hNydhvKM8NaAKMuZWurTAhGdVAf7W9mvDzs6LvU6FLPimifWsEAVxt4ZXiqBnuy5d3ZTu5Yei1RqrdamGsP8oNj",
  "key27": "2jdJZxSSCvfBGTj5YW441G4jZQXAJJb7ZWEzaH2tz3jSvAF7iy4pVwcZ2YWts16Jj9a9rUhW4BMX686xeXraKdxz",
  "key28": "5X7rfQbPsHYhWYnMpMkLs2yjZJQLwqmg1qeNjSenu67axQqHwEpp5hvKGK5K131anpunH1ktpaix2LhQbvgdU7xs",
  "key29": "2DedxGjMHY4bJKJT67Mc51ffT9SQJLG1LpzujHXnbPYQUtqzKsRZcXoBfMFyCPAspsw8DSNrWxLKpUuqp6aifYrB"
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
