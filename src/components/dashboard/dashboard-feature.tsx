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
    "5q6rU5FZ4tfsMDdPSXxHEkZrdMv2pVGScxpK3Vqa91xSfXeJYU188ptyvu2aTN8fJAtGXjnkS6ekM1GRwbjLWDBa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1Vj7P7h18eVPfovzLjgeYJ5n14WK4pZkiauWfpK5vKZoiFfPjqT9k9JVGmP9GD2kXntxjFoagD62B8rYsXsjFyM",
  "key1": "i5cMDbmc8YLYDwkc3BfK6PksBvuA8ZHMUmQC6PAR6Ycqe5L8PXovZVZtbiXRf1a8Aqc7yWrf7ctqRaivem6PM13",
  "key2": "2gBin5jbVzCnJBXfEtLSyiHjQf7CPUAG68aMdEdWSRmNNz2Qf7urAUh1H1bxAzUHeZhK5KTkG4M53UZjSD86Nr2D",
  "key3": "64vuBfmZN7SUM7otWeVj28aqMq33renAQdU6HQZuPim8qkjA6ZxQTzqx9JZXzwS1sFj7XxtRY8aLR8DNEaTQPFKu",
  "key4": "34Uy9BASxtUnZWKwkFbJ3WMeyphqzspt7m6VXKTfZkgpCuP4VigtEsMsDojbXkSRJVAWCijkPPoHaEFN89BsHFWi",
  "key5": "2KxxTQWGjZpF1pySRRj28tT567TyZdMavjPdBhQvXywQWoetwTkCkXPRoJk5gWoWHtobHLYWVYQwYCBaZHUNc8Ta",
  "key6": "FRUcXNmgpdSE7KraJ8S67kkcqUAhKfPnVZh8rf8Ej5UBbS78z7UjmvU5kRx1KjVhZ6Smx9n7PYieSia5EuoD8uT",
  "key7": "4SGWynZCPxDebFdL5GWsjATThCjWktb7JEhPMAhuUpQovU5vignfQDoz7SHndazpdbGe7C4YUeL4DzSNsbjbrh3P",
  "key8": "5LSKSxTvKoqqTKd6khsipZrekKubzPjZax6Lc9FqS7bmTyHtPJtkwvfqTkGWzLNtyWocXvzNDizJdP1Zy4HKK52n",
  "key9": "3gvvcYdHcPn9bVHY3FHb8PrhSaqEzqdYDGctuMh34rL2PPihh2mmbhAYpqwCCR9p4ciVskW4HEUWjjKuPV9yfeit",
  "key10": "5BUyR9f2CAxa9iBrBE3Kb1qn9xKqd3JCSTFg4yACoLMF24DM7FB9DTqWgWx4TQoRxoEyeYtzMm3od4rans3SzuXL",
  "key11": "2Fuxz6xX4HthRMYGN26KxHRCCjB8TP3D8dBPAe7K8BG9BfnGLKQ5qo3pyrYX8RmmcLYExcDJwPxoHeMmVCJ3yAfB",
  "key12": "538T391d6rcQj7wvJFRJrr4fDTg2uUrrKudb76N2AKcTbkV36orLB3SRsWSjV8noo9R2DHKLaAxdATY6Um8jXYV6",
  "key13": "2mowy9oFLYj1HgP4HwBHHjDmLzezWf3QceZLyTZdVmk6hnwJbnZRU18CDWUaR5bgj5X9ihK7e3RC6P2UwTujUaCT",
  "key14": "3Dv5BJDjBuCNT1epWGqhkFAudqSWbHqwHqtgxThjdvqnoJSb7Ldst9BTx4iNSgcek8owgJMWbnpL9XeHY3Prtwun",
  "key15": "4qJq6V3QjhwSTEx6VLHmkAUbKBG6PrhQrh6ooiLBCwEAAdiXzXnVbAkA4aCNN4ogHuZVBzkZTUqJ7EpLzvBM4A2x",
  "key16": "3fQ37GqytmeDv5JfMc7KDHEtTC3MPRMbghZQy7RiedRfWAZTJs58QzNS8sLMNFCEJhCz1t5SL4gWBSnkCoJZqqkh",
  "key17": "4q5LdVN2HhSRPqhC7cWQwWSkPgbd6qUVfokuwBRqGs4cd52TAgKgcpwGqnZAexgigkbaHh5Zi7StrYnB3FVNXuQo",
  "key18": "6599i6CdqQ6xko4c98ZeEtP89kwi3Drnt8YVNi2JBmrjXzna7fV4xeSE1jC4tzD3RnK6VtprwmEnW5YivnoWHpdT",
  "key19": "4ERXc5AJQPhuZJxrmwGh7EZrdkvZ76VQnt6dtfUAZizbjgWNRHj8LP7vLga9CmttkxLqrpXPyfDEsRYa61MVTmur",
  "key20": "2Xq3KwNU9ce8wZPQvWbPdEn8qd2mJbxNN9NpnksMJcisTQsiuEmvxqdTSXTxV25RMTBDEVjMrmRfzoLYfEbogAzd",
  "key21": "2JQu3srzr5Z28KcQ6RhoDXnE66PMtJWB52MWHFksjW3HrjgxC2AUxZzVcjWbvxgJxkjMEZrgemCc8FDHjibht8pa",
  "key22": "4jW48xsgochcEr3wCFZDaRju9sxPpoLs3AgNGPjgPrWKK28mwik4chB3QkBgAN3VLgQZwzx6uGpzv1sQdiCuCBuy",
  "key23": "2H2upBhFQek6WXSyFia7uPerAhGvzDm9VKBs67hk9dmSteqD5r9rCsYfGY5Q1wKK7S11XhjxyZSQUf8CKujHoajQ",
  "key24": "3zsGSzqUTg7cgsiS2Qf2X2fiJv2n6FHFuH4szpY5gNm2pLSYqRPBYG9hGNFKq71jKWKt45zqf7UdMhokQyfqZPP3",
  "key25": "3poCCvJNL5YyG1is78E9X26TQpPU9VGoBfmnF4tbDiiNeZd5dn6hJFSPL5ukSpDTrtvUj1hKsY5RsD2RPwZ2XLi9",
  "key26": "5akN91GCCL8eP1QuUd3moPDEfnx1cYCURA3YSLfn7b58bmAk1tTNTUFuMHV9HNruVRwRL9azL4Kb2aq9FsjvbaPT",
  "key27": "5an8FbqM4r3jagPBFdahZjp34So9oyz6mCRgC9eWMY8AmVQ8NHsexVv9MMkDzQGHEWYTiCNzoVHcNBS8zMaeuxGc",
  "key28": "2d6W8BETzhXFKRVcUrmRSJfHtmQduUsvNVmq26LWd3z5wGKFHdWVTbbk6Q7hNoR2ynP4o3UxkSvn2dUeLi8HQzMe",
  "key29": "4VuBfuCMQjTvix8PgQsXDUo2ZKLLxusBxdGMKgFabb7gPvqzWEtmQUHKKPPfWd2YK1KJdSU9e5epmkfUt2Jf19pg",
  "key30": "5b9R8PKDmhTdBtP7TP8Bh17hiWWUn5N1yuJW4QWyRLauCW4tM4MZn5SycrHDsUvCyFB3gKogze1or3PeWxXDP4tb",
  "key31": "2WqvVKU335CdFJtwRyR6GPw7YTJzVpTmBKDrSavohkb9pHk52VLRr1x7afmXWashVKUrnBojhnac8aoqAXktsyfr",
  "key32": "2PYNdF5JtzEyEFcJT8rXaiMRuxPQhYemryQHDHxqCPGadVZVSR1Ym62kmWzBJFS6q988yywaqFhAm96PDYgQ3dmR",
  "key33": "4euU131e6Uz8yr5xC9AxN7qE7gBqnP2Bipp5KEvvHx64tVJha5pihbKMj3DFmwAxkXWRoDnVgi83kDrRGgWtRed4",
  "key34": "3ZMbaYpF8UXZTSPbNv8LiQZ959JgBLHhRmjoymA4Dtz739a1v9TTBm8k7nrjShaX6GZb6nHmbWgJJQJcjV6WZjfg",
  "key35": "4o6GjM3iZWfroT4foiYbKDrx94nNNYBh5s6NdXLzVneSuWvxmPYnhbbWSrQxjLB2MD2s95dh7pHoGqhpU833NRrn",
  "key36": "4vaDG6kq1srH9AWZPY44Q4FAP6AjyDjQWBVLNBtStypEYUBuXq5NWzzr1GvvxJYSkEHz3zmMY5frLL3Qt1vcyEM7",
  "key37": "A5VXz7oqRbvZb1XqxXc3AKQYpZhJfoeabhySHuv5CQYH5JntT8hHJGivsh2vJf8EpY9yjDHTFuicitsY5wFEStx",
  "key38": "MB8uFPm3mCi5CuqY8rQur4pa5shVJxUPKavzbk2fr6r2r2diLgQBTRuoy6Lcj135eDHuSndMKWdj1VUqi4oBTzK",
  "key39": "4bNG2qX16u5zqzEuzLjHCzfFJYBQ3E9nkpDgZgXtWUz9BAkSxXucY5PM9hb1QWGWrhYKUve3RybPfbvcrkfQJ1eC",
  "key40": "5A46riQtHNw4WCfRGpzBqiLR34bCjkH89UMFdnTDj45zTQHu1yPkknGj6MywfCDTLb4NbsyaWGzwjW75s8gaBpZS",
  "key41": "5FdQvo1zxu51DEtzdM33LKQRap1rFo15AU8SMRSLSNWRReK8Rj8aDi37UgeddNE9VBwuU24N3XB4akGgtPUsQ9QB",
  "key42": "3ZGyiowDahZyA3mxLcmSB5Bosta4EHNya3rn3j7fWx78zmp5t6dCWJY7CRayNbuFzDJpFqY72pe29ksuVga8mMiM",
  "key43": "2qgssCMTwz4yDQNKLVN1pAyKh1H2JjYWwsixx66tPEPT3vFXR7tvAn5R7bKcXuzN2YUu7bWYWtrFCc8PEAha6W1v",
  "key44": "2v3xEPDc2kRk7jCMNHeT67oetj8S9KZpwcBi6NXzb6HuFKcYvLctzUZPHWuvxZx5LWbfS23QtZuRgVYm9SEyEsoD",
  "key45": "3nCZDQR1M1MBoFiFVXwXkJriBCXjXidSpHDGR6gjCohyVh197bNwvUjFinBdX1Ng3t2Fby1ixS9kd5QokwSAqYSn",
  "key46": "4zGAft71iYFbGiSS8jez8HUqR1m68eLMKHt323cBkSE4VNNQM2MP5boVuDPoEaypRArksdTtyK34PsJj8CfrukRe"
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
