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
    "3mEMhk2GHxv2RoTNXVXkKoVmjekeh2YZw9f79tn9n3JQWrJi7uopCkq9A7gbwNbj1YuNBvcm8Gj39vyoTuPPYVeT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NAaAtYUyT6v2zAvjQrjc61KMPCpLZ8fhaec9AoEMJgnmzppTLk9JJAPdryTAEaNq8WnWfFNCpc9VHsxm7U3MsGo",
  "key1": "4thCnCEZQhKh2ZEWt1fReHquqW62nQXtzx2sgTQqkpgSXhEvimgDcD8da1Em8khgSbW6Y7n8qXK76va67amzCF7U",
  "key2": "3ajk6DQxUoYYzNn9oznE1B8ToxRvMy3qry3AvV4sQoYRYTkiN2L4nQxRrBHpyD1hoWdZUErXvzDQem9qr8LQQEto",
  "key3": "5agEKDD1oeaBEK7DTHBAShuPiwERMVdMo2qUequQ5M25YFUaMkmyuTiBVLpLnWMigacKfkmq6QBQuimg7tU6Dw2U",
  "key4": "3zmqficrWDojgYvZvPZTBFuAd6CJc9S1uZ3ASUwdXBPbsYDgxssFRrSnM57p4u56c8qKgQCH3GrVQQJN6P3jGTk",
  "key5": "3bW5yjH9cj9FQd9QPaMZ9bU9zb1fAif8vTwXZsAVm5c9mJtdtJ4RuMFD8j9Dp635iquhaNyPtkZwTNpTwgcMYhfD",
  "key6": "46QgX8V72GLYD17xx1iBrqKANaKedvJwmSmyrjU57iAB5UQiG4b8jJUTZurxfvTRdSjXzdFe7RkBGh18CQubi3kk",
  "key7": "iXr5RMjue3oiPYJHeqzxtNL6WrncDakDRUk67o4bRLUtMtK5xLpncR7tLzPBbQhhvDuG1qtmnyMcwXttg7zVumE",
  "key8": "3BBuJ5zpALbJupqhtc9RLAxjURJeGjBwwaHwWh8kWBKcdYFfB4ovEJAscongjZZhSKPgFL3gUM8dfrYQHfvK7MN9",
  "key9": "53P9jk4dWxYa5Gcqi5qD2uPnh6V8DCxq7mnAYiB51JgqJU8aMwg11wvFy6E9ZaEsEzgo6WvPx9hfdqzTGoQSVydq",
  "key10": "4fF1h4LW7YPPYpaV1nQTg5XXmqRcxdZsue96Gg774rBuvXCHvrgi6EUoQDx11jtviQeJKMzvPvqmfLtzW6ijTVaw",
  "key11": "5WhfsBvFWZ8tu5iqmC24Ln6qqvjtf9XgzcUBaZqBFtr7jZyvhCyjGg6oAds56HxHxYR4vCpjgUcqRG8dJZmEz5qQ",
  "key12": "mwZv7hmEWF2o8TiZdE7HyZXu6W4qAn88fjrszhiYrbznR7LZKWNtUEU8xKLRGHSsBWc9SKkSn34Zh9ETvu7P7Wn",
  "key13": "5a9F35U3KpoTGCMpShJWw99Bo9bQbFAdV1KokpGYWeSYZXZHcxFM8fB621UBnCkZDDhQuPPM5kqaXvZTVj44y7oj",
  "key14": "2vEYEizQwLgD12Q282mBKiCXWEdtERhDQbhLfURPd6qsLqA9poXuWRjhibXM2i8293srP3bmCjrX6eFAbq8R7npe",
  "key15": "cQ8JtNC8668URZbPsn2EdRi2mhagyDbDC7JtLpRvLEXbZzMbSbsGB1vPQbmqETCCFVMYZxSjmCY579966tn8tiE",
  "key16": "2q1bV6s4NFd3voCqsY6eCHrD7LSJFGmTMhT5ebNJNYdjBY1Y6jdsm25YfahwmZnVtv7npQ6bAd8PsWEQicLjmDeJ",
  "key17": "5eoYHaVVnB1AR6NZ4WHALAVTJcBWyfxaBBz2czeVJVjdBk84kfLxGFA8UTK18ej35d48XsYnh2yhQabQtfjANYMd",
  "key18": "5ose1BUHKyFNz7XN41YhaKDErYRkrHhWgMceGyYRiWPGtEb4h3oNnkfDNpUgszF4Qnu4fGmGgfrqtLk8Ue64HJss",
  "key19": "4mLCFvaPap2eVcezQDjjEyFaRVH6eYGM22TYzFFLSVn55wmrP6waiATZwaoZLCgac877WUPVcUwYK9qCxzUMrvMF",
  "key20": "acveX6tGk9YW27pZ5UwEWWGJzVQNLqxUfBvgEiyZWtPkdu9mxfbqjkndygeNSvKdJ3oQDg184cWpxyjy4cjw2c6",
  "key21": "8GXNatH1E3a9ZbZ94oFRCCUVUa1Ze4bEt9JhaL9YJcfBtLxXASs6HKow7XgQm3XaEjYUgoMqkADfCTCCFhU9S9Q",
  "key22": "63bcfjb3qEVt5TQmhSdp5PXi5PMLCiH6dT9ZDVZxSR5i9hFkgY4TCUnbbiSKicK9FV9HK3QbkP5WxgwURXzr885K",
  "key23": "3uJSdnK8K6yCoB52gC3qG3Xuz3mzAF1w6wMLTCxmcNdPomHDeYgMQMJ1NV1aVzyZfusmb2XPdYfucBRmkqkFH1SC",
  "key24": "5Ng8Kko6XsXds8e5mKhHoxKnUvmcRTn4PdtsD6raANqu8NiqFdk4CdLkkVktV8LhgvGqC7bmKAx6Tje1LymNzquF",
  "key25": "8Q9pCFQJd449MpeSwxJwG96eL2zpJWQAAfTyV2mUPJRcUWcpDkHDEorQeFYER9ih3YBYLSnPZUMLFBMZBWCdjCU",
  "key26": "3LWyYXxiSYvtZZTb8gW5xtT2DPUA42eKnHNx9W3wXvjt5jwePw2iFUAS9eozfVXTVboTr5nm6E3kTTC2qJDio2F1",
  "key27": "4M24eN8VB84Lsk9xMgD5EYqvvhwoHwxvCsUg8fgnNG2xHhUWb6U7P7xf8xGzcRGC5KRMPP5neTNRAwULz6jQk2x5",
  "key28": "3m6MNjVKJ2PMv5bEyidQ2Nw4xVhgUG2CnsQQmrLgUWh5udMhvCSLiodmRScW2onfTN6xKV6Y69L5kT2Ac3r2ebsM",
  "key29": "4X4BRr1ACazSRUyBxcvTjQaiU1EozaW6176REtLGxgjXRS5LVSb9MVs5X2N4LheMGB5PdR2TCYqwsFBWDM4nd4Fe",
  "key30": "2ZqxY6DJHC1sVMPZj6ecbtFZ56hzfszox8Um1BQfWg2wKzu8S2esrK977jW77Gz68o725PHGbWnXwaJHu13zBv3Q",
  "key31": "4zeWrERanzwUyiKY7yfRkwxanBzSWBzxyG8hN1iHU6SHVcwxDUtjhCnDrJoT2N5BiVcisg67aLZr3ARpXjTSeNVg",
  "key32": "4SzBU4Tr3TTBEomAoc7MQdZozwgTLkJ9fp5anmkkSEkNvaA6hKF7NXK3tX93U3RnSxcGojhXadBUiXbyg5Zymy4p",
  "key33": "3LEiaRikB7zqpbniD5MEe619PVLuCMZjhVBaPcmU3kTmtcNCKyM872EhCTFfU9v2Uj7sbRA1RYwB3DRKZA1eAm1c",
  "key34": "3UwyAMMb8xPdVB8JK4FNzWv1KvZyQxtTJzVKn5cFMLFuA8v6r4XKiWKfj63dhzkPeurTrMMk2gWR8Qmb3Pj1bpWe",
  "key35": "24SwyHYKycaKxYJLK95YwRzru4TRD4ABFcG7bYGqXwXtA3uhRrHxUGwh9YL5DhiSwS5mJ9BJGxXMBNDgN5X6fS5E",
  "key36": "3BNmyPqy2ZGR6ioNQ2jZNhwoV9d8ak9D26wGTLAwLz7R3bgcJQdg9xmzmXLRdTvtKi6dnCBfAY2TWxrKH1oQjrb3",
  "key37": "4eWtjrZmXEzMnUgpL6V9rrksHUeiPbQ3SM45whLNAko6hEjMERtRAmd3QRmZbmrVQihAEvkPCaRjnQZ95bs4GoAH",
  "key38": "3RQnfZnATy8ksTHwUkAH4UyRZBi7ajDHChD3LhRm9rr2NzfqYmrTGghFSeeus8JCw1p2ZQ4P7m9ybM6CFEhKsAWy",
  "key39": "3Ax1MVoMwCJhnZgqizxFVhPpcti6gfbFQzFnYbFaFYsA6g4ZkNpAzzJL3sFQiuEHXjCeNoSBGrtp5NPHcmgisuAq",
  "key40": "3SqM7tf3r8R3rQCdt69VTpLnYr3kBbc5GG1eN2Tp4quGZfi9BMLbJP76yKTVSkTHgXdidnCtqZqQnHpCa1hSGotM",
  "key41": "5yu3z4yoq8NfzPs1xCfrqnK8XZKfSs69pbXsemYZKrMGhvBBwRQR31WMVgSytXGS3YSVrVGNWiEbmXAy8avdsVex",
  "key42": "5mhcm97aFW4EHbNJWqvXNCtUYfWB4MauaRLBDoo17xAE256M24N9iSuEeeNhz7pobv4iQcshVGMUHqpqJFuGJbvB",
  "key43": "63WisDmKAiDexLPdAgkBzaJjBZcEKUjBeYmTUFdMZys8Y3XDUzhCBRW6zWYDcrjxVqNyVDFAZ3NK7hjPGWtSx6y5",
  "key44": "4ZepzPMVZVATAU5nCrkurjM4eHYeqjPRrA2W9jfBhhKNEwjLnExFgRAuLp9EaS9msKJiMm4tHWgq26CNcVyVbc9C",
  "key45": "3q5rsvucSnSiW88EaTcP1bvUeAoSgAqKBwJUS6UxuJXTTbyzPcdYz82V6ADKyZvrbhRmM5kqz61Ldai5MnLm75DD",
  "key46": "5AcrHYbH9dYAHXEeVJxrqX4aqFVNeTY5Hjda1HZcC7TV29xr2CuyyCsDq4NACTxzgXbJV2iBR1RtmonexxptsPnW",
  "key47": "5GhhC1yuDnc8qrVwLQcdcbRKugidQVWPiipbSSPUFMq3bY5J7pw8aLY9R8pf2sXFwshByC2rgY7N2PbJhyEBXBmE",
  "key48": "2XBd1wYnBCas3vRn32At5WcD54Vt9Yh8aicNTozLAhy2i5EEyKwqiot5RoAhnLjM6emKwNJERSZ1Kix3hG3Nvuiy",
  "key49": "biGdiDqPoorihZt5cKGx7bF7XzpoJRpVw7eW8hti14NYNK83HSaR2Q14dK7ocnLKVyirMUq9v5EVXaE6hRj9RrS"
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
