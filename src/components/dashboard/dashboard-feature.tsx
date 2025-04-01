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
    "5yobvsMW8EQbv4cZjGcXbcLSqSewWBokSe8J7pgebaikzhGaSK5pUSAkedZyow861ueaJsLQmhpMYyRyy3FSFSTi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27mxRs8JekfowoDKSAXmi8ATve5EskKTMjgSuhDgr4KJxxVoHDZzDissLfn6XQVK8R9JzZK8qKdijFRggjprvb2C",
  "key1": "33VRucydcqp2M2zmXjESyTCrmaGRfFg9Vr4doSj7rj8VCGZCNCdF4Q7VwVrG8BgTaqMA7uSkjpezE7vYoycunT5r",
  "key2": "3xDpHLpgEiTE9YCWaVio9u9pkt1FF1fubV3AdJmbUdRYu1VwwNrTq6Mehcw2YD7fyrzDJQpq2dbQo29PqYUB57nS",
  "key3": "4wpPcCuyX1cgzaq32TVXVWBopw2dvPstLNoMwsTRiQo6JsTRETmKYdhthvYBJuQv5Liu6rdfVBrdBCjatMrC7xAf",
  "key4": "nzaFKLQovaZ8ZoPxvjj8qxgWGwMSE9Aa8JHDUnQQzStLqccVS3pY54KL8oqsCo2zBNhKSnD1iwxr9ttTVpduTAv",
  "key5": "3A5VDbH7VBijqesVp6aVz5S6y2TkY17VE7Wvb1DBtLUDKubbpHKMyDfj12rDZcVSYgD5ksqxvCBEEX4oQbQjSvt",
  "key6": "5ZvcR6q2X5obmj3XMi4Mr76UjgCf6ARGzdpHMP4NBgfPFP9KG9QKJjJ6FHoYkh9Vm5hKsmX59tGSPXF3pp3T5PLn",
  "key7": "4MZFcBfC4Xz2wkVubpxarz5kYFsChpTKuwLxXjJfzq9Rxi37K32JL9BWwjVTfhRNAc3UibzVQfCBGJh3LsZbUdvR",
  "key8": "2hV2TDSvnP1Pxd4vCmYzaycMobCwdtpz3o2kyn693U3pygHQDA1tum9J8aZJ7XCLmcrpamxa6TdwN4tPAabGMu19",
  "key9": "3PEWNNaj5EJ692tP5xtRRECYNEmGnR7QUKxoEQXjqo9cvnkb23j9uK8vANP7CwQWU9uVCtUnLH4TsMrCuuMVfSae",
  "key10": "25SbbFngY6dFvboagjkVjYzcCuXZmywset6iLbwBi8pwzspAzKxN4tG5En8FV6EzzdqWEU12MCxA6RmkL6xuhKvD",
  "key11": "4KmPSUuMdfoycevYiPJgafJ2ZeoBTERAYbPweJWMvdxezpMou9jQdNrWV82Cnw8SRjrC3nHb7wsZHApMDSZx5MH",
  "key12": "4qQ5PycDJ6xJwdDhZEn9YjSMmix2x5DYB9qhh6VZirsjsdGdaNV7kjU37F3cQ8Tnvc6uX5TRECjr3MJ9mPfRZFYE",
  "key13": "3qRdia4RLMSRQgvxezf732TVVLAt4oFWgUPgz1uotiBttcKYy4pW1hC2o6wN7qKRxdTpTHRj3tUZ2zQm7diZEpSL",
  "key14": "3gCbyaVpJbu6GhxfCqpnqGX75G6NrNq4kbPDDUF2k8rEWZ9uyhGgv7MiRcmCfwV9kxLYnVqQiu4eZH9YzjvnujiM",
  "key15": "w6g4M5cESa9NXkJcSwdYoxEd3pSCZpxwDnjrVhAjs5bSqsMyAQgsfyWH38fQUGhRkcyKVe8AG6ZfPEG4osnvfyo",
  "key16": "2uEyBU5nWaqVNhnf3yiQbYf8bSmc6EwSbwxT8RaU31sV3V4P93wm1ETxx217eBYHNohdyoRuaDjwuFxE5Lf7jBZB",
  "key17": "4KqhM5h9NEJpgF9bNvnVzXQdEF87ssvQkMESHjA14m8QTyo7s7f3cRtagPTVzNKy3AkkZMK5uG73fiJVVkJXwZNa",
  "key18": "3XJS1vH4jJ2e5hRdEw5q26z8GDWwGkLHkcdB6FHsG9DKuiVnPzCEizpHzjCitLWYPMUQdeSZ7UPeW4CL87c8NZ3P",
  "key19": "2aLX47QBbSANpMS91xgFouMhoK28KtULw1ZQ8VAcpZGskt3B1otTD2pBob5AjoCoGAoASZ6p8LXvEBC3SDep4PDR",
  "key20": "QK4LqX8Xu11tiuCdE5zCCx356L6rCunbjEkQVGzmtHrxodtHB7RSeWnVPra6D7613C3yD43aDSXoXBhRWywSYtX",
  "key21": "5mUtJr3CGsJCRpnZrA4NSfqbYQrNA7hxuyJPrzEakzG6RNkgPtQ5HQQZ9SrBNyd1ufBtuNGrvDK6DRkHwZvbJdfb",
  "key22": "65rRxPki6wQrNKZ6CVBfMuokwSQAYw5J87MwHzX4rHkaFYGzA7VaBAM5oZLN2oYY1sMnvsZnjG16DHWN6JKRSFe5",
  "key23": "5Smor9Mfuy1ajBRj5PzZvznFdocx8xRTwZvM9axi2LMyxeqWacDmFMFi4EHySNnhTUt9fhPcD3zdb9Q7LssVvHxU",
  "key24": "5CCFCg1KLtqYZo63ee1T7aGpFzQxFExFKwMTeM5b9qJTDaGGV6rBbF7q6zuRw9WzQH2YeyJ7VvAimjQpHVwfA1e2",
  "key25": "4WVCK5NnT3VMyiCvZRcvP7pfVU972uLKHi16hvWSnYt7obAZBTwQ15nHRPm5QCARPe2vJ7eVZ2chk7ueKFAtBm3d",
  "key26": "5jqotaQXy3LGjMP3g2DYHddxeCJcfW1K6rKJXsazUDD2sVoYiTRXtcrW6qakwVGfLbMpUvWsbwkMB4ruFhNSJEfi",
  "key27": "uVVy7o4Lupi6nWen52oFnmvXiPPMrnUf6Rib4hqqMubdpXFzyvUqJtqx6j4UUrj9bNhyR4NgtYehNYD4k3BkB31",
  "key28": "5DNUkGcFAkbANpE7XVmbgFN48goJGNuc3ckaMeP7cmjUxiZeySVUV81WxKAs668bru9gagA4o175hHLnst49i5BM",
  "key29": "3vK76EJX1Gpy2v8wxWDuGoVy5sjemvwNEPStQrf5aHwBcYUCXm366pTTu9dN5vHAn7dEaBS3DWQQfomY7Tp5UsM6",
  "key30": "HEaAM7X665EL5R9E4pLpyjcjG3HjiJkdQpD7WtLPVrH27rTkR4Vbj3DtxyRAGzaHgsNxzfPoSSj7E87hKiuEp8S",
  "key31": "4fwURSCi7nTjTdTNSXKK1PM4ERfeN3s4eB1cjzfbRWpEhv8HcssRxCxbWdk1FNrBfxYBNZTpgJhPQ5uViFzHx74f",
  "key32": "2NiahBN4oAaaWhMRnFDyUGPNwhcLcXZHWDMeqLY7dKS81yMgynyjbibi3kpLu1c24tziqZMCpJ8JoNyfAsFRifRq",
  "key33": "3pnEgDLJwgv7xuUmKs29D1at7qdiouiFhZueRo1wnznoca238M7URV5EsHmdqF7aBGr2S5jKwjR25hVRtfh9piKp",
  "key34": "5JQ5KUEk2VYFg9vafJhq1KuubpYFV32qKFURFeWab6yzrM7Mg8qy8Q4aukxconsuRVyeD319pgvZn5aTBNjr2zFz",
  "key35": "3oSGdJzK4LCmC9Ngk3Ybi7Gh44GDKzRgCdbrvA2hUUatnMtLWfcfhV2RCvzqsLrfJKEw8aAzEAq2o8oASRYQdYH7",
  "key36": "38tXtG7ftDCfzTjsVGjNFiLJJtKTRSMTMYcnKYGvtkhH6vq38stHWnHXEuvvkwqocZ7YacUcwPEnX8Ns8p5iA6CF",
  "key37": "3qnhkZ4fVd4YVbcFbaDPLRDAPAcYyerXL3HCWo5Nvh7nDTbs6kBrx6rxpChHx9yt33FaGhk4C8WvCe8unxFVJnCo",
  "key38": "3j98NVzPuqrW8Np8r5GcjqpTtRuHfWsXCmbB47ozvg6EoSCXr5Pg7dQLAc5S1WKKdzyoC4xYEQGVAFeC6FyJrYT6",
  "key39": "4quPNgMxD2fXqEKRRko5RSpMBsrDwLDBEjTbUeVt7wNcSNoGr32DHWp8Nhu2nUgvdVpx3gQnF2VbrPeVAXhE137n",
  "key40": "31cuCBfRwqz4oSTGkhSCQLRZR9FzEZDiSyFRDuDGtsAMCd2BvxvNbi3pe6QC1dn2PrtwPw42Ycpf6XTFeuwCpZbi",
  "key41": "5h4ZcKCHCZfKqwZvozcXcas2C8hheJDYE6kq9YZZ5dAnr1BnRxuj14H1WRosk3JUvZzveFuHQVGVBbDFL8Q9gEgZ",
  "key42": "2pcqCAjAxii5v7nrZdBzTB7USpzpH8r6p9SebJyDaD65moSJTnxNgKVopaN79QX3s63GuD9CvNgffeGrmzMzhy3v",
  "key43": "4pUd9kqzGkwWT2d5mkrwN3A2EMNBT3YVSLLSJJjtGMDeUpefwh1feTy5JZReZFntH1D5hrDJBhefA7JgE5iSJUjr",
  "key44": "5yRoFa3JTJVWuPUCDEfxyrRH2u33kBU3nno4FgRb7UjNeFGef13MX12N6oRT65VimJ8xU7STbXVtqnJjbeutYuPF"
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
