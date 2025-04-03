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
    "4LJykBEUbZoy1Wz5pQSNqxLBibkWmL7zmPBgt1YBeYDPeAnJ9UtxWULftCHLshwbY23bT96QW1x1MfAaEJdVxsXa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qGrGrFdA6Xxky6gdvVJoqBh8WBpwq5AVFBxQ65WfyeE8uEGjmofHwr78cVtMhp4tbUrjRba78BVn2CpBScr42LZ",
  "key1": "5cGX98CSiLSFrXv6wEpypGz9yML2euDQ2QyBFdfYo5PMx3koduCJGBZDfGs97XnLpUNYF35ibbNEjwDv9aLs1Uxe",
  "key2": "5rr9tTo6fy23RA6nPdM497jbZreBpsR6wf8bHQD5YGDsp944pF7jQDNUfxrYBDJjCKaHMGz8zZruE6GrVYAD3i98",
  "key3": "34jagSptvisjBnXouqdDgaHJya8tSVCRwAvkvfuTMfpMfXnmknTAMQHJPSHA5CRgyyuSoTZ81YpFHoDUPJr531F6",
  "key4": "3Qx4G9R5z199eKv4EFoMj1sRH47NFv2hFCvrRt8EmuKfQcoiTMb1cZaEUGMW6gdFhc3v6XboLgswACe7gRGe2b6g",
  "key5": "56VuHABC3Xqsd7oLvuexjaM8o8oQxfvgp6L5jxodPKBFu3aj2DryreABMGrFUzBhtkLdXj8mqBsqXyoV6uxWzosz",
  "key6": "93ueTv6t8tAuT8dQfwgjei8VzH5B1FPrYy5Ax7DaDdzK4A61Jh4RDvww5pyB9zEky3bXeu9ypSvjj7y24dSqN1v",
  "key7": "2AAx8HuZjuH6Q1EtpPKXDmZxPZXmvPcd5Zbz52LBFCLrEwX63UfBLorDm8dQfdebFhfdQfWuPMBQv48sxSfYgfhM",
  "key8": "2AxbtAzjm3b5Ru2coxSM15NUu7RHX4t58sRo2148fmsPPeHAB43nJuR8DvivApCaUPcRCVa8LkvNf3Q1mD53XR9V",
  "key9": "49x3LUzkWwY8vh8NHReJ2YYdy9gTTKr15hWra7fGwjnJoexsCgUdLeojkZL4DzLWVnAueSUTqA7LRo8rqRQ7wa6N",
  "key10": "r7SvJCEKnv1LCMBwuTT89ak573QWv33KmYjDPZL5G1baDCjjXan9t18E2nMphZ3AroBR1PcHMFu8fyHWHq5WUTk",
  "key11": "5r2tTX9uuTDNpTekuQiSzoPLoHCfYnMyB6Rys2hHKvaZ5NqTmMTuSakmrLrARH9NTpVCtB6A2LeE2HgBgPjWpfky",
  "key12": "3RzDBKb6PQk3WS7e5b8P61a1XwQXtZmsW82M5y3LfSK7UiSdYm3CJbm5fz4PU1DPPBQd5AM2duw4tpD5M9EXtVC2",
  "key13": "4sJWfYrvVaErZ99aJCPoVD81qPf227Yjfxei55rjHuktyHP4KujuHubY4WqX8Uvt8quzi7qGGomG6sQB4atomC6m",
  "key14": "3nsaAd31jLv8SG1aMkhkyanXY6Wh2auyYTDGCZWu5cUA45JAB31t57h5QaPufm1fcTS1eWB3u29MYAEwVm14khRr",
  "key15": "fcTQqSsyr58EaRwroibVJiPTBx15qP8NwG5UaGHBM1YjchNsSs6afCJPHCU7KK7JT4eVQQWNpsFKtu2Sz8wyNp8",
  "key16": "3B8KJAfz8Wuei9VQrSmGmyBEJzamJxJqf3wSvFEw2oB72rFMTc8vJqBWS1vQf7zqSseuiioeWWhPjKiHS74PVU78",
  "key17": "NkWBQbwJCfu7w1hjde4RWt15fGYHCEN2YpieSSx5SdsQdcF8YnCJVyaNVGK3UYxiXfAM1L5uUGJL3efJtxbrnXu",
  "key18": "3WBz4cFqtCAU1J6TNdBbYx74ThtmiCDVUnuZ9GMQ81Gkyrgpmi9t2f3XUj3erhPUqXJSTgKkxnQpg3YzAJ2pJJju",
  "key19": "3MqbujT4Bcwmfh9mrxDS53tchLj1nydksUpPHDUs9c4BJdk2S5gTe8zJVzA4ZosVa3Hg6vnouJLYVN6jy6nkGxGa",
  "key20": "2s5Yert1a7pktxpdzNBBr7K5qWq8UVKypUiFxfE8YF5dC1g9FUmteXdPNYpmQuZu8qaRko7gryBAetkrYQo4LfBE",
  "key21": "2t7yAd5vtzPvTSKV8VdrJQ9fdsCfd51hJiZLm3CkrpLRGq42YQB8ngvGqNPjE6i6u1kipPKPNGRUX4fGyLr9RMAE",
  "key22": "odTJ5NH9q9X9UYhagXPoVf9H9Nfc5xGD63cfmdH7d7tVbWCybDp1Amzad4gTpLLtFQTT4T6i7DVQhkAHqn4sPuA",
  "key23": "3b44aSsFAxRMFknL9wKTwc2irKRnxzWpXPYL3aL4CJ46HtiLCDB2HroDFBRpC7FHr9EqT5toh151JPzVrwQeUU4E",
  "key24": "2AoWWVNfgPVSL7JaCHFSSdLL348HLvY6r4aNTjMGUE7JUdyj2jFPrFKnhxasZmKshnXY2mVbrQn2wnzRu27Q5hVD",
  "key25": "3Y39r8tvck7AUg2vxrBWSsy3ykAfL6AzbaXdHdgCRuRWKvsEiBBomeeq6NTuH3LH3CCkpa2UipYwWdKLjpRDHiQr",
  "key26": "38PLerawagFmiaZZKigsooVyvLu14ii97J2yBs3rxBEjVjmbfHG1nqdJVpt3M5js6BkadafMRfuqghUC42F2jnTS",
  "key27": "5jMYgRVP2sGCb7LEfa9wA9wj3t3JPb7iZQdvtmMrKLhpZ22GPPTWnjnEgpCKUVyd99ihHfCAHFtjuhKyXAvUpm91",
  "key28": "3FxeRqoDS6fvUNLPRx3tuqegC2BsedyjwykjAEa6dvzadbjLzC1FSh8CJZSSFsjhGp72jMQGvYhM6tnn8FMDwzBv",
  "key29": "gKRHLrWGXeSF1w64hYwst2V2MauXA4QCLvYkqbrG6mdBP4MiLF1zFkzCsKPaSrZreW3eeAPXKW67dPpUj3fJ1QL",
  "key30": "61PUa1yt4Ed6mtYwCJ77mYFq4arE83FuXS5JxTihB2YPUa3bUHpZwpBGBJrFjdincDn3222ydJaa3RvMfFADimMg",
  "key31": "5wZrGaLZ4pF2rwWz9Le4UoJvTRivQ5mJnMzsNM8Nw7bcgDQRc5V4YeQaXaRCTGqSY629QTx7WMxgUfhj5HXwAfbB",
  "key32": "2sNoz3gt3Rx49dwcWFhRHrMmWTRJ4KMNyeZCwegWUMn6CBtkUto7vzorPcpN9ixfcxQ8PCcP3oBi8Wvwtk61WieF",
  "key33": "HnAEzojDHfG1g7QDaksgjWR74T9MBTixpQvHVBzsYCQWffrmq7wrwyfZSUgpkwGXVVidDnGrpDQ79fbWQhUmWs9",
  "key34": "4tAkKQ2wvmhs6BrgJGkp7xWoR3gr8V21gk6bTQV7T3E3Ebgt4nzEnXyBXy7NQ4khdJGJZfun9t4jehqVRxLCMriz",
  "key35": "46X1TbT5kNqyqzXdqnhi4CxUgob5mJ1xoNMe67wiJMi4RFqAvVd1sjbZ5T9wUoWos4Wp2Pu4wAYFqbuk9c23etFQ",
  "key36": "zSGhRZpJpHNkvWK2NzkM6ErQjGU13hfvRMN7oyAwHKQXHsWh4nMSSY7BjjwfuwBGZmsGt7MgGFYdGSSTkD9DCLA",
  "key37": "42L4wY6uSRwXWzzPnRq2KGSnr1sht5NCgA5sAjbk4fh63ub3RcuQEUuJ3oTGYiGJ59FEkff47mYDh9q6596JqLqV",
  "key38": "59wwE6QLzgaLiLdz4MqcYLmnQjyiUrEUr53S59BfsYZhD5v8AfctKdijk53Dnv8CDFvByTVD43m5KV3QdQPHXkLk",
  "key39": "26vx4QUedjuFrDcAgsXkV7wtZQXufu5S2zYhMw3ozCQGSjxoo8rqLvsyJXb8SFVLedDctZEpLc97HeUjsG9nz5g8",
  "key40": "2ASS7LWBvZYDS7TWGGJSGBMMTGxuwaHehrHwAWJyUiykX6GnLwf1hbmrJyJosHvSoS2d7MAz9qhASxLeAze7WJE9",
  "key41": "2j4Z7NohZ4NGd1nAF7vkmZk8htfDxZLPr76s8eLGHKesJxC2ZdV1vtAG8txcme4m3Ywq1HwT6G3UJNvxnbv3kBqQ",
  "key42": "5W6cQhxQGFphgwaseAHAthZKtZSykTdH45BfkEk745kUmpvqX11pZg1QFUfjndtQACzXWvBXUmuz9hGt37WDAgpj",
  "key43": "3tdmxNo2RSdcQPcRrgJKCeSD1rXQHnpC65v8sASZUaQBJR4LrqKizkawmjhURJaDf8JVGxNVD3EC94z6ngLnYDPP",
  "key44": "44rFu1NiargVu7ii7uaQojyx2z5pThj59SphgP1c66fnwRRDgyT9FxerCtgv7S6isrHs4sDjQsd24kPHV2fw3hhn",
  "key45": "2AWQNGEYi1bKD3HqM8p3k644TNxtPrugCMpenfDYMmRrqDriziE9JCStGHv446umWvkfTxYaBsnjKuL17FCFHNo1",
  "key46": "2KxxoEY9AUaGvmNKw6L4bBewHarVKAKsKSxQKJHddyE4QwSWX4cSnQYL4inKfPuqtaXvkTqaz5zwRQXcBnGGbVQg",
  "key47": "4rqeFDcMXAbgULYYuAajwVUAtcBC2vQPWQHr6ASZVJZi8wj3HoV2AuXfq8ehYJZCndr6Bh8naVeDMhcus8HiUmiC"
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
