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
    "43Bt7htzp1eYAEkSTW2sTV2wyLRjnE6Mhec964C6meTmfFHcxmGkUZN2g6okyU7WJkrYejSTqhY3kEhftaV3xs4b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e2WgXbK7NzoEEHVGmqJJR4k4FzWiVskdvB3BP63DtNezRfNkkzNppZ1FRx8zdYsCF5DqEiTADZiEKResuAxxajn",
  "key1": "3k5PW8YQ4QjzwJ28mpdkEceikXY21Amwo8FJzcGSezqSoprgJarLFTrxpMHRsMPB4bvR1UMQg6bt1KJNRyFD3ffm",
  "key2": "36iVeu7C1RyhrukHheJwLovquDHpnh3cbHsPvoCfAj8pwtfUXLuzGm1k3XJKg9cmaf8bEFgfbZrxFFA89LwxViY9",
  "key3": "PbVDfiuqaSpGDMgNVSGjnTr14szwcr8h2GUi48VLM4f5NAZbejA19rh4Q2YpXtqjyveZEF84sRYdGHZw3DorJDN",
  "key4": "496UT9gsSQAUz21oEZJE92gRpTSuXPGK1UPPeMKTvKb7KHCMSFfsHSD1KMzWe6CuKeUxkPrY3ZQA9CPxyRftuxvA",
  "key5": "5s3Nh1vT75sZUCg23ErtSpSMeGnDMjxysBNncppt1pjMLQ8TgsCv6iLr8t5KWPXEuinKinevEFqmvUbDY5LknkN",
  "key6": "2PSaaeYZ5mC9Wasnb5NMGP6Bc3qNQ1w38r1zPY5Ung4mXKWRaHihDgg9tAgToHVMdXqCefnvUiENuHxVPKpGdyi9",
  "key7": "e8x14kuxkAMzNBajxdD3iGGoK2CUU7Vz3F3sVNJjs4qehRhxgYgspvRjmHJRUnk26egRYf9g4ksCd9zTn41kJSD",
  "key8": "5iz9ZLzri3rfD3VzvqJHJxdfCf7sBDbaNS5Ddm2ZjSxVVGr4eATU4rYvd4fq2oiidqZN3eMd5L7hxbYK3nYg7oPM",
  "key9": "64kLsaDodY4trj46qyNTzH4ToTgUZWBWcwopm7LaHtck27ZJpD9JSejDWFuWGGd6bNowM7pjq1QX1Fu5B6Q1t4Vx",
  "key10": "2CUkEys7FYKwFMHgXLsNVbCqK2XnERZwT5GYsCE9BuBxw92uSxeZrDEEBAcAQyhv6r6mYKqRVVQsmk34jKsY7tRS",
  "key11": "5ku7W2ruNCqVM38YQsrHVBuYYokms2YcnEJzwNzeguU56bwMbJxGckmP245tw2sFBCPfWAxUkXhRi7dXPEqrNJzK",
  "key12": "5UKhEVZy8PPaCQvNre9sD3tFt69XQewC7hsj5uwuRX7ejHZ1HhREprumsqGA9qmK1B7HUGRWxdenT6Po9K6qcUUj",
  "key13": "sKCT74CUyX73dssW9fFkZHHiZxWmgesQZszZDsTea3QbpFevMjzfhgt3dYhNDCKif1Fjh8CADYVcSZiLHf7TN7t",
  "key14": "pbpYTrK8PRjwYSG8HA4ZyzPQbDfdk5EkNCfYrrWYSknNCcParjaeeyJiFCAMhHZsUMJ5BwmvxwkEpmow6VNh7ch",
  "key15": "5ZHocCfAW5CRFKSQcSAJUAoRYvGucs1rjyowiZd3uxACRxtkFE5qRE4q6xq2k7xsPXg2Yj6j6ACyyxxm1BvxPRM6",
  "key16": "4T5VBWBfVHiN4VGEEAYah8fVaR6h87YijCnzhieBHJFWkNzyDvuZ3PjCEVburyvvqh6jyPpSWhxZwRK8HGNjBTVd",
  "key17": "3uLgPo9vWncxpWi88Dph6grEfR6kdZWrr7j6ecUpo6S9fcm74tvgh5qAZqxb1a8GtpXP46MG2USZYFWRMdhY2rGP",
  "key18": "2vjvSLj8c3WsJHz4B6NJkfM3rbs8UjeRWtysDMZWnkkFk12mem3kEhmcz75UqFJiamvzb1NumScGXt4VuEPgFvtG",
  "key19": "4Lw9BoWcfsTHTmbZ2FdYHj8kSD3Npr6ZjEEcHdddHHQx5JSUJa78hL6HZEfgNzA8DN5Fbiyx7ne48iJCYn1ywqiu",
  "key20": "25heUuJQk38TLbeCbaysryDgbBx89UQkYTiuPD5ccW5jGaRB87N5Q1xgbCVR2BkGgBXAb5y969BzWQsyjoQgX4bV",
  "key21": "2uyzWDQ3LLfCUEFZT3RuQbphX4GT4EGtWUvWjpijhLnTBoGdJkKZsJDjvkhGCedJcwMeVnpxvrjbufijPwG83qqM",
  "key22": "4uo8Pa2zNwkP7XPbHqM8sCvdbgs5gjEG3ctY7nd4ztJGNx9aewWdvKRTvosatTFTYRiA9oCaXkNQZUjf3v1EZzqj",
  "key23": "2CDbz5pQyMqvPuvHM6JpLUAkBdLXjSJR7PdmdjaiUtTHcS4iSmBUkiMbyGCEZfdkUaYqnXCzc1S5Kv5R1hBhiMG6",
  "key24": "3A5RPdyRBA6dZxdo6FrkhLwzwHgTD6vGE4fDhn2dUZAPaiT6dHTXCsSeH4j4evVSz3UBumee1oQ2JUebNvwQiF8C",
  "key25": "5KWLb4iGu31pY7K5m4mk6M7TEtLjAWEbTPRM8rzWKb8W2h8m7iEJyA7jpDUnczdKCE35hfhFqLGxcZAhU9JBXfdz",
  "key26": "31UeiAfaNRu3y798eEk2Vty9aJp7taWnnMWCz3ojj2BeyggCmyTSjeNgeKWzfqFQXFuBuANPBgsp8qmoxJRkp4WL",
  "key27": "38kdBoZRt8UfFsvvP1uteJzfv8o3pP9Snwd5dKhBifRLA1eN26VJHAApPyEAiaCYmgmw1tPcXuED2Lp37duSWxhK",
  "key28": "44PvmGj9MFGJgnCL3P9A5gWLmjv1y1X8udoauYioFWSQaDcfhvfwHpSYRZb2hQ7qsRxvAhpdYvU5ox3vUyPrf8Vf",
  "key29": "47pZFY1FsHxp7CXB3hwVY6VYm44aNEWpaFSikGLp8TDKGCtHHdyHNVLEJCDpoBPKEZLrrEiJB1YsEJDyYaPAUpZ1",
  "key30": "22MQoPFRir8UAR52suXwEADHjiTdXwhBMhxoQMa6TAPMsgpFcA7c8nEtQHMvtbdgzExvrzYKarHkBAeGP7t1vnmp",
  "key31": "qdgbTGwYBrujcLattcMm9RNvTEfeuw7d4ojyHuRHDRSrdcrPF37pNBej4f7sR4gBZjz8ATtLxxz2AgBTgHhVC5N",
  "key32": "54iyLZwUmRvRDvLFwAP4LRRRBVKgqB8xmBRpP2fc8yTsFMBGqL9JVvkeBA5nf3eUwU3b3ZSajuDEHd26fYjoaWBR",
  "key33": "5kMHZMYrWnqmnnT2rbivpsayg93FXoFX9gyNADDpR9JsvsdcXeUAodjoJ8msX5Z4F8Z62yNxfAidZMhcEhHpdqjw",
  "key34": "38yyDwtCsQSmz4WZfsCJxRQNuh3jtWudKr1G2qoBHqv9ZxyKdWrN7AVaJuGcLTM1Uvwfd4wo36XVzSVXtkUdeFdu",
  "key35": "3E9ryewhnPwvSEAgrxPgGDBw6WMPe4yAF3moqT3z25G1D5ur8vKGR5NCFQuFojtH66MFQjr57vaTCkLL1zjbMPvn",
  "key36": "2BbBzsqU1rxxP6jAknn4rX1CaTx6NBsCzDkmBMcvzNgWTii6qe7y2mWP7NxkmapLzeWENJhZV4CBVppT7ZT6bTKT",
  "key37": "5FDkboenhgTGMZztQZGgxomeci8XXGUeEKSgyZ2ZzJwzYSXHRtRr9UzN85BNLyNwscoDer6P2GC1Rj6XSFeZDJkb",
  "key38": "4Qvm4rzsZ4Uq2mgi8SVF34K6v5hLv72crKetSsv9G8amk8kPuv1Ea9qo5WUtZw8sVef7cahL7ksAiS1HkQFLaqPT",
  "key39": "YmgvPfvLVix46iKSQ7p1DpKowka8uMG9Pnk1FVXpkMfdD3MwuLAgbL1RysMetV8fXKngu1PmCveDBaxiyng9CD9",
  "key40": "5qfH2nF3ACK6A9nTa4XNdtdbhBMKiVWjLRFjQfR7bDt12JdMK9faz27XDdVFScvWhVnaEgpPPC37AxykoSc2cL8S",
  "key41": "5UahFfnLESeMzp7gmHKdxUekVcT6A8rZ9w65qNNccU96xfCqR4LivraRwBVMYmkrD4JaS2d4YFkkLesie3KQDUwd",
  "key42": "5W9bBgeKfp75rw27dkDZpZ4MAdVVvbZHAitGJ595gQCxNWVFTxzm2mG6J1FGPugucuZ2rtEt7tQhJyzMuZczZ84T"
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
