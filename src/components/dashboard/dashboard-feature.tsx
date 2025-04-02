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
    "5vntwwpwXbMCEXnqFH8k63ZYN9tPBkuSria7ebGHhtzLjxZjwgj6d5SnSRjdwJZ9CRegzB9VNqRnjmeW4RsEPJfU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "urFQ9TPNbhmtqFcSsXvZFCuyLMW7WkzH4xUruEm1UBeJcerL8Da4eQ8rtwUu2yJiApy3gmsd2m6SUtrRBCfLxu5",
  "key1": "2m6FP7Y4i4Fx5TqdPKGS5YLViTLxQcdPyQdRTXdDFECrP1ZR87XEbwCQuwRqhutHKrzfaWYyg8T1BzYRJWgMQrcQ",
  "key2": "PW5Cngwi5fjVNMUhncfZdG1csL5L1KKjq5T3q27XW89Y7dKZxHvDH2F89JXvMN6aWdh6qudNhzo8niPE6fCTrBi",
  "key3": "64E2rLacdQohbwiFhjRmzNUQL9ZcbgRQivnmLvmqJm5Dayao9DrF7JouxHJscTt5KPEE1ybwpmgDGXnHrpwG3N8c",
  "key4": "5TL4au1tLSQhM6AGTZvw8SVjDCTha1vyTy9Zsk7Vgrfg2ATpwzKa4ki8y3FrKw1zrZhg81dgiSRKdwvgp5w865Zs",
  "key5": "zWNrLPrMhxGw3jqmPsZWRJ3e9x6DiGn7xm31R5Pi4MFN63645vWDBbqjQRSeBvRWJTfPKYB7YPgqESfLcWJvE6S",
  "key6": "5Wq7hWKhK99Tw8Y996uqQD4iNwh3p5AHHgMKy4tWUGd6ekRVbg2svdJP3EomrpaMkRR7JckVmcAMYSCyMyjjxERN",
  "key7": "4BpVXFMRWiVzvsZwYg1Avc35kPgEdoDejJGuXEJbR9nQdsoak6RamD8KfdywZkwWyocM4qQnWmLV5u6RNzukWLH5",
  "key8": "C6ate9Js9sMqEewvV3UxJxZuVjPuB2y8Wa4gh44QSaKqaVd21dYnqqh89NvgjzdckfEqvooSCiKN4bJ6PLCK9Ng",
  "key9": "4tVzrLLaXEDtrd9kFMjvRdCL6SFBcTsXg6sToQQ1Sy8KP9nqbj1A96weAzs1F3pTMNHRZoYQf8CAgM9fCmkJqo3g",
  "key10": "4orVY6FUWd8KF8NMUE4eEYTzv4ZdHmsJ2vwLqbGo2q42HbSS7mJDFP5UFp8TLkjHujANHuUiHRZ3WLnhZCzh4u4i",
  "key11": "3BDU7zDqQRM9yB7iupaRJYH3LY5dMpmiQcMpsCnKcMB6piCHj9pQugGBwYE92a95VEjN1Hk3uM9LooDWFoNT3jUu",
  "key12": "4UiyhcDChqK7WaWvX5KEH4KRNCCJLEEg6aaire4ohkJfJnZYJFmDX2dQ2BzbS1WY3X13HspDnXFYnxwU6J1PypPr",
  "key13": "4ELHR1EheYNj5ZroG7M1iTa9gG41ZLzToyMzbxtDK9eLqurhXMk9QiqAeUPmmjY6JK4mzTYLD75PCBJAoz1jritx",
  "key14": "3oEKHHFA12XcXwrz2QcEk443GvWo7J5WVhYHeKVe1V6awsztzmuBxGX8VE7ccurzbjd4MtDuNfvyby7xvqdq3DDQ",
  "key15": "87Mcnt3LcwfBNqp8EhzEj2Pt4Abr2h8tVfEvrBgnhPprQWXRXb4zGeGeqd3i22UfwDqMPypKybxhExQWoJurKix",
  "key16": "3sa8qSQrmgusL2tr3fek7qcvWTM4Komwdecc4JJPxr8Z354h9gcK5Hk4Zo3tEhdbQSadq21JAftaBd4mBtecbfTx",
  "key17": "3LA5xVqv7HJGh8Jsazaq229pBvjBMY9FJsVogvkMWUcZ5F8FmMFN8ZsJpL9aJG7TeUjpskHfKHYVWuWBhCDXA4V3",
  "key18": "2XJXF9EVNps8gmxVQq5eT9uSVRJQ5edYB2Ne6dacriChjXzKCp92bSB6sksihnr3w12mswBkiWTvMHrSfZGCzbbj",
  "key19": "36WeBbvt7JniwKsDi7XHVKXegsFHxEdZD7P3jrrh7RTz1bt47w8N21kuu6skQ4RkiYNQNn7TSoub2wpAHuUXNnur",
  "key20": "5W2RxcTyzFoRVgK3Q9Ze9jzuLG5nMi1WUg8UDz49jtMR14fwsKKBt7mPjUHadS9ca1my5C8AauseZgHrL6FDQPPD",
  "key21": "55FihkwMNb3kZwM1vUCR83tj8wPZ5kQdeYDsYzVFfe4WKCnzcq3m5PjsNW5N3v6HeFjtrE4WTyW3WovBGoRf373U",
  "key22": "RqpBfzwxcx3oGdaA9Kgk5nP8bH3EsQq6QJyBMMT4EyLR1ykS3EJPfipLYbQvVXBv9BLhrbkdcoD7Yebg1JxyM4A",
  "key23": "3XsGbs1WcPFqFNCWwLoZhaX3wHEdwTUJrkbgK3ZHeyReYEaoSfD7h7q4bZiADu8pMTqFKcYjVPMa2ZXJBrq4GDkN",
  "key24": "4q4Z6aTwY6rEiXVeFPsBD3ouga5zku5oT9ALuuSTwLnVRsby5rqbC6Gs2FzaZjEWRueuwDaLSe4EVHDbeaBvcsBq",
  "key25": "cBzbxrrBMrTmFXVajpuJhKpaCSVQWvfmCPyeqV5fCXzRkMLuwfrbLCTuTgGEATnCeT7rHQZT5zmKBkejjQKmo9K",
  "key26": "3qK2C3CnoVTfXQrh1YHGzGgajjMPDK68ea5DcdpLDTQQw9v3TitAwnJ5xEjkCs3hXrK3kXHKWX7mXyXscRp81GC8",
  "key27": "26bCjjWm2Zaxbip1hGhUifRFGo7uWwRu1ccxhDztNs6qTueyMcRtkzqiLYRjGKQxbEjUD2WXB1ePYt1ZgudRBs7Y",
  "key28": "4eCbhxFmUSZ96STAcinmgoqLkuvt2njmFEAT4f3zKdvQpNX1Jt7Kh7QUS85gfxasFWUBPb9ihyr6WqXnNsgzBSF9",
  "key29": "655szDY8zGofF9a6uGyGNMGMdWKsNSezQtL2NbnNBBfcgenDCApsG2cCwe6KM1A83gQBLAVLNtc6NRH9XVKhrA7D",
  "key30": "48SpFBdbVBkPV7Kkxey8QsiUCtD5atfDpoqC4g7TjWAfW2LkXcYEGdTXMcfT2J4zD2HK1WHkwBUMBEf6o5WyBQ2m",
  "key31": "38MQymNQTTn4FfaTJ31a31pc1nHpTwQGsquUzappvcPCxyy2gmCCDLZ8YuvNBeqdEwX1X18B1i5qX32ufsieSRnM",
  "key32": "2jrHfYtqyYvqWXtc67j3vtUwzsXcHmjr9YLU45dxvoLLTJXA6UAtFMs38BArhqztvWBnF4sZcuFA2P88rZWT2dFS",
  "key33": "2jTiu4yLcdh2DVb16yQGNreqpeC6hL8VdUb5EPpXh3dqHsCZgsTZw2iMm6mrudDMLiu4kGAcusX2LmwKZmXxQLmV",
  "key34": "626f5TLngCKQNzcw43SMxPWKN5HjeX2aF9i2h7aV4BgAHtZFbrFMGc6cAFBWsjRcVtFPT9Z9fBXksDkFnvTw2Y3x",
  "key35": "31YsA3zBgzPha1qQzTE3vqT5M8FZYM1HYLAKX9TQXh5oiLi64j2eLtaPKDXV9pzKSn1nFHzuiejJdbhr7Hzj13zj",
  "key36": "2cP3uqwvjSoUdaCQHFVzLV8aEEmcUwWGSL8gY2MMn7jy1Pi54UZzSp61hU6XBTNnxjDRZpZhykjoPtG6V1mjBiEd",
  "key37": "3oSCSBr9gKTWmtVmyBk4xUjBADTwj7RPtTG4xLmXaBdBLVNbuXwcaFggvMtszxvVXRwFXug7rCK9KRDNWHJsu2mq",
  "key38": "2wyg5jEfEjRTBfdhTPUAjbYk8Y514r1bDGMSdnmbhseVCv2pWD3RFryAaLhLi7umCM9RNK5AG5AHA76isQFPRELh",
  "key39": "36HVkvV5X5ib5jpjsU4XJNBhEeyXQG8oBeJdi9MzgbtxgtpvFueRySdpZZNLYfpVSAJTUEWLNQWBMgpGnAsc6Pig",
  "key40": "5LLc6Ps3Tf7wwfuAxvUX34CGck4LxizhdDfFXY8AjF32jBzZ5rvC679PoptUi9k5m7SiGmSYKmFDFDs4ky1bavX4",
  "key41": "z9jRrMZDvNiqLemn38n87bS1fxLrBY84NRTHUPx1wvKyh2CZgCThtEwR7PCmKgJoejTL4UQNQ5UDEwABxQdMCw5",
  "key42": "2wypMLMstYGvRAoKZiFCUzEgANwh3pJ66fJs3qA612Resit1GhreK9T6JtyXnhEaiTkhgGreECqwjhLcyx6beBRk",
  "key43": "4zcbzDKYG8J36WQiaRw73tmKTdQDe3DjFE7vk8QMsVTMqzM8S4FyJhefx8bsTfnL5CmzeGE21ToFgk8giEQCsu8L",
  "key44": "5V2hzzPPpqy5yAVWX7UPAEz1jZ3BcHUE5AwfVreCahc4ytXZUC7ZCVamGhssz9gjJkgDeWfowfkcVQZS6aviCPkb",
  "key45": "2pHCgQcv2vNJfGHMW4fgNeZgF1epYrWkGPzzYu6ftS5P6MCnFe6pRVWsLVdvwgyW3yy8bA9Kax7VnusbY6Lwn5SX",
  "key46": "66Pq7WShiEdvDQCoXiTWX5tTQs7tiRf1r3VubsGw5ouuU3rf7mpy8eG1t6TqayLZ3UxLHTbq93cQLEd2TYopNq6v",
  "key47": "35sEdsCosqziKk9aHb57CSyp2vM7ogz8HX88hBsR5b8TB22wrMHRRd3dfsZUR3c951izvv4qNJNAqbD8Qg8uicNr"
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
