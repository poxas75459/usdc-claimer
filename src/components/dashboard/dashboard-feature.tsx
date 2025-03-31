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
    "2DPRHMm9p3rnnquJERywkiP5p9wsCcFxBPokN87Uk3UGK2rGnoDkNqtF8Cs4zLCYGbb6fsg8ff4ePCPTuTUH9qN5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nBhH5Sb4ZBRYHX8i9sDnWHcySk78qDwYjb3uT5xaJuxhifdtqtpdggPHVsakydhkxKWfM3KTyB3knYYMRoCrRZt",
  "key1": "37H39r9h1gdBXCenu1kZ23zrQW81J7HPTBDntywzgzrmLzJNFBwZLrW3WqbSrrmvVhwzngYbFfGtr3VE3mD9mrmG",
  "key2": "3KpAAK7pX15Lx3XaKiVPtMHjfDQeLaGzTDf4eAbCp7BS2ZuL7sSMmBkhngUjx4sEhggJ1CRLTBJZGUBo1Nk8w3Y",
  "key3": "djJrdfV8hdcQ4y7iSAQxFCGaGt24RZN7hanJhp4uGMcWuLNkZCmkw9LzD8D5EmiwJdDCzBU6uLDhTDNQ5uAs9se",
  "key4": "MnFDT4bJeAf2f9ikitUQnyVEV2n7eEMsX22G29PVRnV7brbfsiiSHp3MRrFSGTNFbE2eemUhXqZ4V8GDcmYBFyh",
  "key5": "ZSKEcS2UwtemC3vKsrecnPNYzFEjppE6kgikuj9qTsny3GQtAisw9XwqzTUNMbcutLsprwD4b75fX2ecgtNV2Rf",
  "key6": "2GZdJTwwEjjfVUgrTQX5fRMNnZnFic7hW62ZWjgx4NuJyDPes9Q1fhVTwHZd4XrPai4fGZS9vPrJ6cd1npdHa94U",
  "key7": "5G7P16rfuhN5mbtZN2CLtCoH9z33VGGx46YFRrbx9K3fSNgZQsWTS7FBksZvEqik8qAidm7ivMASKJERYgXYFYYd",
  "key8": "5X8ZQvUmkm6HvUZ8mrAbLgHquszegxMkadsiSnAV4C3pvMj8ATJhS3jZCjCm2VX3PJyJR2fHLYYWRQnZHywDUyFY",
  "key9": "TKwAhTe4HdcdXA6DLmNSrdQSaAVHt7sF4THPoT1sPuvGh9zskfvVhogAP8b37Uku7MqmxjyMdH2c5J9jjY3Napi",
  "key10": "3RJzr7XVXtnv7WxQX46Uxsspe3sneQQ9JK3YBggPwx3J7RbSNGiPRYDGLC22HMsvWKMHafVeBZa8e68XJE4BKzj9",
  "key11": "3gn4fiPpvSGuWT473WM4ggfqUWJTqiVwqHDeukxDZFetXu57i5pdFnWda8LWXyMvLCsZF5m6x1ApWZFzUXd2Pgou",
  "key12": "GZYWuQc8cw1AW56jM1NncoVzPg7uS8JrJ1LkNR4NrJqM17MYYdexJ64ntVh1ZYuuj2fPrvfCeVkBGHXMj8SYcw7",
  "key13": "2uQbdUVut1xGuZL3k38E7DVYzZzu95c2SEZo5sjL5DQxbegd1JxJwK1hhVod3CmBXbtMSEivr3SZW85pWdg9MQJN",
  "key14": "58VMHAPffiYourAv31zdJGoSVdrBPjNWjKWJ7ExnJLNArXHMHadMiwF4tu4d9mdHyMbcNHWhrM1PmqXRgmUrN6QH",
  "key15": "4vRhvbKT4fPjaMjjebMEAuyk17ZPo2an9xPwfz51qwqdoGxP2pJ4NBPAgVx22zCojtkA8wQiGduMurmjYHdmFMgR",
  "key16": "cc9S24iTZgwipG5kmykrn85KgJseSZ9YUkzuYq31aLs2dTz16bPZSoxYYLeDA8Cak3VPwp3C3MModzRvqPfZHMi",
  "key17": "3bCM9mtLmijdfN67EG7qUGAosHscdhEsxAqbdvXJfYfakPrU9wPWvmK48TijDKEY7FKrQhnn5uZ9quQLNkidkcC",
  "key18": "5YXpTKKMpecLAyiF3j3MJMsZhMpccP2RRExf3xoGQ1ocXE4jkA3J4nupzLEExKsnGaggtRNGHvCLAgdLzR2LEGKJ",
  "key19": "5SiWJn1EgDm9Tkg6hDJFouMzmxTo7kHffawLGbKmRtPJYtf9BhBkRg5jpcWYdw8sTYrDrJzhjUP23CZNKgLsMVpD",
  "key20": "5CrRqKHu5a5uZ5dbEdxocQ7K9YGnBg1wPXiHGmrMwLc3Pt3RV76pQ5zM4q5sRgTMCTeBs1S4Wi8Do6Ji8uv3pGBC",
  "key21": "3M1VQMpBcm4yRj7mGgCfsPwfLFRzP4QJXfiCiXwqLzj6j1ouYabGHAuPHWZn6kZnRMtcWeQicBsKj2UjVFTGh9cr",
  "key22": "UHTLRRQBvRHeEUhLEjvbGKuWW9HzRMjUZCYKKVrzY694ADkUZxntf3NoS4qxybXWT6cwsjDuLMobGQdUFiYtK3s",
  "key23": "4hhx7Jq4gP8xD7i6r1rTvrEhUmsxiQsmGV1gB4EmyBi5fd5b3dHHFgU9FCNT6SRrj9BcfMHjvugHMMEbML9z5izf",
  "key24": "4guQbabwWkRbHUEFBtxmLbJJRM3SCKJEDFoG5qaHtbWv3iVYXcTvS2riL5XRVap7uERiv3xHWkdVbT8x9x6FZeWY",
  "key25": "3fZ9qD6WspN49Uxfvqx6FCjwmTWaYTqfHgq7souXAx9AUSDHXoGKfGX5RC9CscqV8dgcHLnj7t6ar5qNbBKq8Jdb",
  "key26": "ZcNYaCbSYyZwVJmZ7Vvva2RU3wHJB94dPrkvBuXzdt8EFjL9cD43KCZWUhSGsE5yWnzMGcQUTpre12guZCLEJGj",
  "key27": "2SjvWPUKMxn9K2JFZx4oW2dWNScfyCj6qbpeocXoNVDXZHzVBgTcviWsDqTT9GL38wqyD6FdE5s8BTFwkPujrMKK",
  "key28": "5du7xQr6aNKT1A2L55MXRz5sjvaZXNFoZ3mSRzbvtHkuDacLDnKthg9nAiwkA4WVZYmth64vFjpV1wQnVvjEGFXv",
  "key29": "5VfpoiKqQ8VuriDbNjgiw2xFs4j6suNGZRDnho9muXA6joiYYhEbM3P7u1pb8VQRLsRj8BnAByNJbTCRc7fMwXuA",
  "key30": "evxtViSXXqT2gGjEqvvUaj8TU3TPYNGGjAF4iTBv3rU6Dx8NdfwtMgwdUFRePxhgbhoodQRMZxcBugaAxXiSvfC",
  "key31": "4GC36yY3L3Ur7a3Ck5qniLMqJMfgJK9X2Tse5AdstF2x6vtfgzAEkeWcSMHmfAkAJLTknYidijYtzugSokDB66Z1",
  "key32": "5jo1UmDhYJojoeCiU3HibrCv6kPaMwS5fnSSY1id4jE8HuuXM9N4qMNE3xxSKaPya4x831wb3svNTmAqvvLWZ8Gp",
  "key33": "ycKrMr9GWQbzfSGkXh9q3L4jHZCQPFEk5nrpepoEPb6Xsx2odo9B1QdVVqq3Co2EUXMdZTDsyGji7sLztvF4dLh",
  "key34": "4kNHGx8Vxpr59b7Ju69N9bXVcpDPniCcoR44RmLt6LhAM4KLHzu65c32C4JSPjQgh27ESXp9xYiNhJGHyUDZRZED",
  "key35": "2uGdqciGXDoaX1Kw7DFB1usnrbhhQrriu5H5jYRG7DxWfB6rnMr987z1uPjgGgH78EE6HQpkRMUcJSdHv73mWDYo",
  "key36": "4DwzDxZ2ZUtsMdxAiFgkesKTUnSvpWUBCMHmeu77RtVKto3xAiu5DoPR7HVod6JzCh3JtsZeyMpXjf2o8rgfPEB3",
  "key37": "2ZAAbLZQ72LNbreSaLyxZrL9xqTDbQRMK7sEqw9Np5B4fjuRQ6NSo1oGW4YQy9BfT3sSH723BqrsVDBM5DhGvckZ",
  "key38": "3CzULtnkyuvdoFWXyuSEemoX74va979mfeFTy4ha6cvCy6np8d2MfkyS7mLp1dTUxcmiJUeTDXEhzoN8Wz1W6199",
  "key39": "5pAfyvKy3zZLsZ949HqER3b5SZSU5hPkdZkkEUhDgbQyyJyA8zhChE2v1UZJvRs2eTnVuWi5uLnYAnyeEcdzXjg4",
  "key40": "3kXUv7fqJoLQHqyLHQd8FZRTFkvMbqWv12Nar4cL6wtXRYVMKQtVdoiiHhc4FZCDAEcKYsXjY5etiBmdkK2gWcrd",
  "key41": "2iV99RVbBFaMR2GcmcqJbp8DttuvsB4yLhGWtoxwZeRf4WDeBWnzbUegvaovAMT8weDSnz9g9oCKKe4fRfEKJJms",
  "key42": "wKBvbiPzMNKtfcwCJsk9FsjNxFiRbMDEkUo4TB1SP9pDgEbfQgD3wbWMJsk5A6juqHMTuQxxr5fU43U6MgzUfZW",
  "key43": "3pd7gH7mBDY1CT1VZ9LhedRdMugsJg9sjUD4CFKR5yhmn5BWw4RCbtvji4AYbywUKpqxCx3mhYxzj5HnJ9XJHWNA",
  "key44": "26EGMuaAUPtBGgMzG4ckE7e8Q35gpX1NhcUT3SWe1sL9pCbboJnyYjgaRKjpv2Eynj6QWD75MWXe43yPXzHd1qj9",
  "key45": "3oBhpRk3S3rS22FuBzFvww6wef9pMSuGostyPKmepnKjBkMEeVd1fbHWvWjGQvuUHc9ZNsNv6j143BNuqPsZVjCm",
  "key46": "2aoHQscpn3qE5Eg1pkTAWmTL48pUqbQcXqW89vSqSq18d8QTo38GFfrk36E5zHyNqoo7VnXwaDv9mtwdoxcPg8CR",
  "key47": "24UPBEewTaBQdcfLgFXrM9fmVPdpHRXXgXXKXUKriJ9bUTjZcie2pc5UQdtYVpF42WvvLQySdsiwtzdSwXynKZYE",
  "key48": "2gdvSkLZjiDDqy6s3bkEjffHvJa6wazYuzWJ8Xa25jgbb5gtTymCLJn7dWnkREwDjNzizX2k4vzQ3ky8s9eohgyb"
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
