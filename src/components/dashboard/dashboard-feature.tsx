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
    "3LMhsx59QooQ3s8XytRBWFjDL669ZXF9RjzuaNo1JGcjuvRJuVWnYqVKbiidKam1CM1mQ3A3YXWgBTanx5f9qDRb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xM4gR5Kc87euNRshg2eXF9QPYGLpVtHa1XfA6ZCWtg4MaWBedRxgfBddN2TNDZ3xUtA8J9jpcGMd4HAT3o7Voze",
  "key1": "2GvGNwsW5XM3a1UujizCLoybHXbcCxWmZrcS932ckXoGFJ7V17LQAviFNhL2dzgHaFF8KSVpXvQNYEM2yNiWH7Ci",
  "key2": "5U3xnDEtaKhSv5yDV5zuZQDn7PBqwRY2RiaM2WBBXFEmFkAigTMKCHxR6a4nsheCfpfLMUs1XQhJBjLcnwpLZCtX",
  "key3": "2ggHvo6ftqqrnnDVPAUqaBrqbVAruFhVuw9bdccLSDLPZYLhpKsqxJCv5AZSgb2HJgLEnsRDpoyodrL8vPpTRso1",
  "key4": "5LjMC1AA6u74jMjRKb74k3wFMHLjsKbYQWmzEW4YqjEFoUGRfxxwzi1te5LDoH42XuAeyb9aL4APQyJ3qpHCU48a",
  "key5": "2xrokCQcjM6sqoTpzqe5DiW2jTiYKMTmwMZPyPEx2PkqSiTNiGKwkwBe4CNKctXpthLJzw3ghnDM1bzgijD3m1xz",
  "key6": "229wZ8jwzjfAmFRkqJRWwE8p7Lr9bFfnJgzPkPC26Y3fUWGxtTtx1JDGSf3uGSLDt1Xp4GjnFLHPFHNfsWDaEsA7",
  "key7": "33UkRZdG4Cu9so6W8bvF2EJekdNfZVMaoT64AxuaXHrTY8JqQ1EY66jBukLQZG143MezVMi6VmpHV7VLU32TpwhM",
  "key8": "5Jw7aPKodiq8dTFXwAbPbFuRXA5YWKU4XfD6KF5C2LuGWQBq1a2AvMcYYshsB73NqScbXKAkPZtnYBS6e15y5hLj",
  "key9": "4fFT8hA1BDHA8ykjjs1xeuJH37wJhbuF9LwXbUYzt7HunyeGvh8ZtWoX8hEcuaazH6zBrATEtcZPz38BqD6LJyjt",
  "key10": "GH5KA2fevf9PRZ5BGy5TPztE9eNoCKgjDNQ8PvdH5xSAhwtpu9wJXqmD4nRXkFcrEM2pksninbzBBEmR9jejKyz",
  "key11": "7pFaZYzfzfHhMkEcSmG38xYW9ooZvjf1ow6FCRumJekuddGk4Qz7mPnLtVRfNnPvP8VViNEbhg4hSw7FfqPoaZi",
  "key12": "4YwCZSpuD2vijqFGmHM96NwEoogDKGkVd15eZRrDfhogKgRFvfNUfsJhJn5oupmoGKAH8bYXnCzW4HRLAcYrzdVb",
  "key13": "WtKXknyqCk9obDY6e8gcvZqpH8QYP9q1shJRTQ8u6Kcfaxu7FmXmLr2CDurAJ6h8AxVypyS2Y7c1tFCkBr2Y6iY",
  "key14": "3DbwvnsXKrwpQ16Qh9ooKFM7msX6ZjJH41QdSffvX4tpVDcWJMKdt2j6zqLWN9PrM1yzSpqHoNEcPbUyPJD4ehSC",
  "key15": "3fdLQjpBWPCw61VfkDbjVFKKivF6kHV8Z7JzDKCWCQarnU62dy1yE1JzjFyJZzVd9YWBFXXPQeKvySgyDAsaVvww",
  "key16": "55WGrg76CKLJBwLwqYZr4UZVKhuhcRa4taVQUKymFYMGUo3yCoZq3EVDAkkSytVW2qMB3mRFzHhzWN29iB54RtbD",
  "key17": "52noFVcXg6Gw9bVWyFSXLZNMBPVEaQNN94J92gQNzazAFVfaCWYr5Cbgv6w4SzGwTFHUfZ8vxHqZVLQonFrxzoaH",
  "key18": "Nh32Hpap9qDdmz1CGFqHLrkgW36MhALB7aqKPQxhFbiDEKq6eZuJ8X1jfGh4F5kmk5knuGPNXn7S8wUSmZRGFv7",
  "key19": "VFBrhPaaK5xjUsXU6ZzKaWuKaqDHKYVWq9cNqpY9ZrYwuVJiDL7NdBRm8mZJ44WPQmriuwRjKkE7HRUnTMqMFVh",
  "key20": "5ZB2xecgphZkWebjmWqFHVU3vWn7rc1VZnR1G1y8BTp7V32T9xky9DYrzco5uriprUZci9VfdXftHKaTNPERvadu",
  "key21": "22NFyMbbx1AxnSAtot4JY5SB9y4E55pBDj6dwarazWrT7skxEfJi8ih1a2vhMrRjSaed51qUXbKnvaDX5P3wPUwx",
  "key22": "5zjn67AmBF9MMfNVTUaYjAJcJSnTesHdCADzWt8rNarJScuGojk1nGMfjZvyRcHLjEHQtf8TfHm6XqoruAfBXuf2",
  "key23": "25ChtNQBYM9AueMD5nSPvRazdH5qoZTQdQnxbPk3wfztPzV1Kq4xuppMoRaCLx84cwoJ8foiTi3RcLZm3wVMMJGR",
  "key24": "4aeuxTS3FuNiidrhavRE3ai8YChH6FKUzNkJqjQNMRJfAQeifFS9655jiDSAfDLusHgQNdixpdscudcD1bc7uSCV",
  "key25": "2j2o5gqDJbMSLyc36sDxSUntH9zsLbKNCe225rgXLifgSUjRD5SQET52PrE4RguhawruMoh16VodHhPMRVbrzpnB",
  "key26": "o2oaGH8YznqF8CqmTfZYxNq3y3Vhrwk1sLSo65BdCq2CnXoD8D7CQQuRHw1ajRvynw4jj4Cjd915eADQjvAVoth",
  "key27": "28gdBJhJiVWoetKv6G3rB74nmNdeC2gy2cCqmPdWW9teAiqbbj2CDqXi9cZf9TZq3t4y2AKiPTk6wRh8Z2jpJjUM",
  "key28": "3nRKsA2fgemzBuMuAmeY1Yyw51Asfxsqs4fxrVjB62SMmFsniTgbbeEJZmDnLgW5oVJ2z8bzPe3Bban5vx2kQKDK",
  "key29": "2e4g9nEY2hysFxniEx42AdDY5QG7EVnCqUhXwJxi6KKjHvj4oMR92bE8YyBeMgwKAc1PDfZaaTHhygPMQqrrU3dr",
  "key30": "2NNoTwVvFdLYBUeJWWSUGfv6yDjR2TJAZVzkjJH94T52WU4MoDScZEePNsF6Qz4ARCE2R5NYZCkJRQoSfAJT9qgM",
  "key31": "3qmzVutQ4SySJN2ZCPfbmJsRSwdWB5BeyPNKQCuRg2PF2QhUKyhdQPfrhSz9as6kP44VRPH1L8JHCYegoMvkRfsX",
  "key32": "3BRq6YZU3uNVqHYGjqTGbKpRZWQnnWiQnXsk2ksWq78E3MrVFTARRBzHVS7qQ24SzkyCXSczPGLZjsdMoNoNkWCN",
  "key33": "28kN8PH7AprJBUxsQi9Ean7sKFvijSgv5edogUMyai5xfJMff2QoYA8S1oD7xGJF1ChqFkd1RmHANNu8sFvCR6Ye",
  "key34": "7FYPmdPKsAjuccHQtfFSgkQHPvMcKdcgVXZ2YFfgcnL4yV2ifW7CsZJS2qqNNXrMa76eEyn6i3sf7S99kEWCoxM",
  "key35": "iZbVzYkcayY2kMntC2Fqh9YwUwcbi7k3EtvgvR8YVSHakyTmb8Tko6tnoVjr1ZFfdBzyqxeFvguXk1CmAzAutoX",
  "key36": "3XgvrGb13r1XFcR186RQaRNi6GLvbGo68c3yZrsXqhi6dSvjwmSCFW2dehYeLSTXGuhHjux1J6o3GJQ7QuRsKaxU",
  "key37": "5vuDEHUSoNaew8EXgx1ji9h3rSQyqqCnfeheDZwbzvhMgurZuzBN3xyjpLb3wRDR6zGn8i6C8vfGTobnQ2ZX96TY",
  "key38": "654CaEkgEVqCCnkzXs8S5Lw11Xqkn16jdRrDsKbE1TGunvtsXos2kfTnrSZEs6cHSUwLJs9WjTAopaibDSFDnN6D",
  "key39": "5KwgjgnpqKrnaoDrQ5orkdrcZCW19iUJMiW1R9HxaqtCRvC384w6Zb8P9jfZaPnCw56aQMKX7BQ6YoWRoHQbSgUb",
  "key40": "5cBtHwein4aS3gEU23HT7Jbq6TFPgL3PSmr2TQAPnqmgWsnx97smPbDiYo6FZgd2f53K4EhfmUBdN7RgfuG4SCT8",
  "key41": "5sTJqsEmgVYyo6NPjjsht1H83Fo1fvYMHErAduSf4SXpJK4aCo1uiJYj5cK1u3ARoycHXC9BmEMCS5eQPxhxftYY",
  "key42": "38H9yK2YfbvU6BRJ7xShCpJ4x47PxhYPu2hUHkBH65ZdmsrF7JTWE3Evr3AhksVU9uHukeKxe2SDxRdaippcPKEZ",
  "key43": "RoghMSYATcVbH9yg981aHhHpcQizvxhHdYRcCvJZ6YaYQufYhtpH1fagiPLgP2RBsL8aVtyB8tZUEXxiD9QC9ww",
  "key44": "53a5b8G1PdjDgqWEMLgqFVFGaEFHDM1cqYSXsS8oVf76fu8DGwX52grbdVSrm6yZYBCzpd2JqJcPCAHVUiC3CWqe",
  "key45": "2ADQtYNfJHQuRSTpMAQUrk5pVxSDAUzYAwLkq4ox4iXyZj6J8N62RAxpj2swkmedezYcYh15bHsq6wyFMXFrWwwT"
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
