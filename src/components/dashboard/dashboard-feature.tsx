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
    "5UMtAP9WtU5hep4m6D3wVhdgpBhUwX6dh5WWhTB3gR8eucZsTj42aSVeAGcaU92nr9XMxBNkSR88SxeHjKSnEeza"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ajf5nXh5RbH7kjKoGh3SXrWH7SvX4ExXcG32YiFCYyevUcnAmFh9bbT3bt7ubnWwZB1ydJDy1zXZP7w14w2JzfP",
  "key1": "5uo5sBLo7Wp3hfuEJBN7qdhT3q5cz6aUXYb6hBMsQJ7dCre6q78ZQtmNvGMp4hk2TYB8vkMiRStKpCb6VA8TFArB",
  "key2": "5cfkkkDKXUvPppJsoDJBto1B3KbocwyrentrMQqkiSyefNPLpQL6MHagMpnP9VFBCzRj5nWRTPeCLjqfeozouv9Y",
  "key3": "5y8R14915vUqZrHATG5GcTD8CpzzGzQVL442vN56SDHY6Zm7tY69jMH3swywvBKmYn9bZdETZQHWkRtJAmbBwzgv",
  "key4": "29pihn7yRFobmaAMy8z4ZpxAzcmeUgnNqq2K1Xevw6j33WHqshE8jWW8ZCNhdF2Usvx9Prujak8RyhYLwitK9oht",
  "key5": "4yneFZQ1RspaEBaPYGYrxZvFn8ohXvpAAjgmTJ6x3Skdkga7jjF3fB3FoVMRgEm4s4natT1JVaZEt3Ymvzm9eSLG",
  "key6": "3RS9Q94wBW3yTmu4ztokiin3kJ8ERdLUg3rrEYnSoNDW8PSi8kDtNHPBpjg1rLgWniDrvYYS4AC1dTZLqoGhDdXq",
  "key7": "4bYXGzmEYYDRTwVozEJr8GNGeT4CF5ajqiWTKjevndj8C44EfBZsR8sXw1a5nyGvn9QZhnof6TFfHFMSyNGvvfCH",
  "key8": "sZFE6K8b2HfqDHgZA9GWDMaYodJSYFXZVa7Jx1aKwHWsGEPqbYE1B78XSvLGQW5XURyAwtMKsXjsT8yLu1fRWdx",
  "key9": "52Gnh9QgLm9hu7E66s89ZhQmnA6HFHaUvJErsJhtvQGKVZz4rQkDB2yKiRkoCENZ7JdE22sFeHTFxHchx3MoFoJR",
  "key10": "26dtGYXN1CQpvhBFn1FwDay6KjFJx93cpDxE6yFVtF565MeHfEHq7tUJQF6RqijC9x4aAXa84ATRdgbpFCQTbEVn",
  "key11": "3XyZ55Ji9oPuJ7X4KWwRry3Jm9a4HqqHppgQMJz2HEteAy2314Gz77t4unhXNk82hdxcEbomaoi42APDq8V9BeCb",
  "key12": "2gr2YTX8kmDy9uwcyNVye9kfY76fVV7TAVwAvHMVweCHVuVHHTnDSF6rdHZeu1m79wiVCtCVzs5hVLCwWVYCNNBt",
  "key13": "8JynmdRr1q1wEGE8zP9EtxgvgxToibw9rgDwRxS7upYQvxwRvWCquxNNTvLmeSRtfzKn3JfknfNMQnAWhSo638z",
  "key14": "3V7qcWvmXjKCTPLHT4XJLCcVHhANV9thXnwjw2AweBBieUZeCspDbLW95tu8auFnCKkuibwfqVsq1ExYYR4s4tg1",
  "key15": "4633DMQpXxdDveZDujTU77Z7QLqczUavYAqUDyHrrLYHbk5DM3RjhSv7HsMsRKfY2LW8Vc8N1uzQLdVvcFT2u2S4",
  "key16": "v3BXGr6w2MydQfQmMqhQpE38VbqkQeWchu1Y4a1Lmfh9jNknf8a3TfBmWxHq89hua8qu2zme61v5L7SUfSsGU1W",
  "key17": "2oTvsXAVDQhWrS8Ai5riBCiryhm4TFoB6zXM4mdhyhLe5NgtwL4nfbduuUu71HJyR4xgZYnUaZouvWzNDN4ridpj",
  "key18": "ptukqGTaUqk41GND46CkNja6TJvn7Jz8rmXC5Gu4ocHVt1jEryoPhvLYp1KMXxMWfcJCjU79c2zEXR1QPm2iM9j",
  "key19": "3nNUSSVnbkMkGcg7dVh6dKaNEXYCoHsbYSMyviqmfQ5FdyFnbAYM75snTep51BS3LfT7ec8AnYQEwiLYP4eDWeiE",
  "key20": "3bebkjYAFHfJ2pco22rk9KmyBDwGcNi26knxh5o366rK3mdC93C6atfHRoVfUubZuMiTw53RDNnegDjrhwWiBWa",
  "key21": "2ESjaBFwLWSgFvtFbcx2QjRRrP4EXEMb5wYq5ZnoqMXKdyakck86opSNr31gTgNRAXcaDU9HCyN4kMzJiJNXwg9G",
  "key22": "3Guwe64TkTrA2qK29t1frSuSspDJUhPLBec1ZFAHKb9yJXpDQMv1PXVafd9DtWokSdfijw1EpUBsjm391n4oz6N5",
  "key23": "45GTZysECkvg9WrymBvtH3Grm6hyYnPBYsQmV5LtKMErMiFdrrEreT2YbmKLTkgRzCYiMmVxrUmA24DDHqLYszYs",
  "key24": "3czqtE4Q73ZdwEE8cxzvHYYYoDY7Eg3KynhX19mLVMBuigTtGqEajNkFemb3mt83MDeFB62PacCFGR4psDMEHAuT",
  "key25": "42ZJCixWDeYsmNfHrBiHiGisM6ws7iqRBusGKRLYuNYgP4KBdfbhUsqmEgkJBGqFXvR9Zw2j12WLVYegMXyCvLu2",
  "key26": "4wzFU7yXge5UyzKhSZqnUTfRuxbbn6RvLsbsTgrqweT5C9cMtU4DJzZUnKR7xpav2qW5LCJFNACwSPhLB4rNSTDg",
  "key27": "29aSTWk1hxRZTwZ7bGFLGGfQqNkXTN4Jj5tMBYEWcQCFiECoyCUUtxLCHCpzC84sWe9Wfa8QE56vKwtUJUnAe72G",
  "key28": "4PMzEfqxQd99NXtCemKTx2HRoLqLCYC8UKBh21RPY8mKnLi54ygpDCSDJ2Ae3mHhhK6d1Tmq3xQk8hHkf6pG9LPT",
  "key29": "2cC5WJcXp3PTauZe59V9pqPWE9PU3d2UoBRzigWNiJ2CTY866imeBEbU4AfANBpoJwPhhQtqcmV51mekLMPKfDXW",
  "key30": "374j93LqmA3b2hEtfmf7n2NhcVT8XnZM4XC54dMWnnT6x4dyANLWXWkrQmbyvgToG4WK2zVSs97drY9JZZxMq1ri",
  "key31": "2JaA7osTQhJYn66MwaW4WrTjjbkK9n4s9B8L7FgY6fGznEz4iaJNcReoG1opdyzGsfkXiJvQKs5edxcNBmux5Kx6"
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
