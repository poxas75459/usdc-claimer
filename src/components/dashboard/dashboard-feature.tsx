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
    "4LEL3MLuHTz8rzLNjXShKhytGwRbJhZcDpG3svc5gDtjHLSe1k2dboGsg3Ek2WPVKdv227e7PgomrFxm6zzAESat"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T9tjrETkAL4PXT3w3pLh551RdB23JSJwRhXXCdopbaUkUBpKMMVVMzUuHigEdc2e5WmFbM3hHVaVmaL5kZgKibh",
  "key1": "jgtJDj39dXWmfsLk4jy7o2Y8e3oz5WiF34tPsu9mgEBggpotcnSWoZuE2NwoPYPK3PWTY6pw1NfBiUYZXz4XK2N",
  "key2": "546rRw4einVuSvVmJto55G6r647xoAeH6VCuSSGxLjt9dbN7fRhwL7GTu8KSHno26zrLfZ2Dz3wkQnoXiqBLsW34",
  "key3": "35d3F1VhcDwJjRg6c5B6MK4SUw31N1VU9PEcz9QGfM8eqqBxhqohrBQd2cisTZgdPLv2qLYJbNfHA1naXWDyJzsV",
  "key4": "9tMMG29ZmB3ynQa1Qpz4eveK7Udw4k1sbn8t6juexZ5uW5mMxQqUvYXDPMNZ9SnXyRcAm3cRktqz1gxSN8t3hyk",
  "key5": "fy9NvtJ7x1Y92tzqWmtuDjVpHuvRpZZaEKkDmaPBk6uqXJz9Nm16vgDEo7W2Ui1HayYCC37APVLdZ7AT3BernFZ",
  "key6": "3UWWPm7ZPiSKpEj4KJm89hNw22T1dft6kBUmUxMeezDQfSQXc77BLY52WyPYAfUFxrVpmai2RcFUgs4GMWKS7vua",
  "key7": "2FYPNxUUyBNHwccvHWZYfkhtfFHheQWvQMahr8FSACaR4s19vpBrZzdAhsfx8kkiFkEGS3WygF46SVHYCTL21YRX",
  "key8": "4iPEuvdiTnvmcLkCE2HVC9ucvDcvPeUztC7DCuWd1mcZ6dTndoMNExmUQQrocnq2XE5b1WYiTh6ZYktwwzF6bRyc",
  "key9": "2qT8cXZbUrWSozbh5vAcMNz91hnbxfoKuLHujazpWUT4V9QEji1xZ4tB6fLCDuA4i5wEyHS9EiT6nkjFMERE2DoY",
  "key10": "QoDhfG6XHDYqStnvNNxRUDD9NGkMqHZmoeuMmeA7jQdBHSwSCc6GP9HJ5rgbHpjoC2QhJpQkemEQfqEdZGWniu1",
  "key11": "65qsergifZnJg1VkSKUHJ2ckiN9nEfrewtGrZTmpDf762GC7Q67vZrxYF2aYPySddvmYxRvvq7D6aUG56TSs1AEv",
  "key12": "4ckq7TKShEdCDZmFnnKcG6J37L5GusSqmsswp3Ttt9sC11ygekXxcFiLsLS8C7m1vKUaBap9m5C7nYRiVCVbKR6f",
  "key13": "3MoKxQA7eZE6LGF3oHeEpWQALbmxJAXQLzKNv9XkmD3tE9i6iZsvJJVPJyBhsjRVQGuTePc3bd6dvmH1v6uWGqJr",
  "key14": "2xSujwoUr28YpSPTFF9PGtpebf4oYnTHLJnKmoyVZJ4KmazFVRyAZdaSmiAQgCHHVTMCDBT3PViGjyTGHMq4z8qr",
  "key15": "4KYZtReodwem8QGASS8MxG6uJAdcWL24EBT2HRqUUXTSh4GhkHTUYPSN3eVXzDtN86zSatV7KZpbEz5ZU2TxeKji",
  "key16": "4CXw6fBqdfV3LKSGQ2Yvk5Qc4cNBwP9SniA5X8ifCAupzK1QeVFWqXHhFrW8LzCiJsQYStbpQ5ea6aZXjjhyaKZ2",
  "key17": "2apBG4udsa1MsdLsdyHbf2vfNSsWae35bVcYDR3z7UwTBr5jSgeSiZHkpFiLFtN5gDJ719YVBTxFw6JbJzbdUPXh",
  "key18": "2xkECBQVCVeF99jLBwzVRcEwYG6TFZQxfT8711HWGZQqN8Jq8YQnjff8kaZuFe2PBExDyRftPkn9CxbyhcjGyuNa",
  "key19": "54V4LwKqqdUfKF93aXBqsshFDJK2EvUNJe6oiBVJhn25YtcnuoJXKA3JTULvYiUnQ2zcCHMfhcJFJEyoFmX9Z3FP",
  "key20": "3j1TNHo9A9wKgGxiNN7kYK5GfWxcthkzq4q8tkDcrwLoezudXDjDBQK6YoG5gJCMCD3GBPY1xASHnBtjCweLrJHF",
  "key21": "4FCvmP15Rc6poY9kU2uioU8sQojKNB2m4aTzqf5mYxWF9CrheGd5kH3vMjD3cJQu74Mp1JvYiRY5JkDGjfiwjVh",
  "key22": "5e6Hx7jxhjJkQwFK5mjS4Zz2zckwEtoqWxiu5imji55TpLcwdtBYysnqb71MYq44R1UmBG9b2C7R5jFhThMw6kNM",
  "key23": "3BjbDD74kywEBYfFRY9nWoG7VK6fLAaUTRUzem82Tg5yZ6PC1aBAatxeN42RCUojTVnBBnSPNW8QyNeL3nBrrPXR",
  "key24": "4N7Q65sEC2C8ETjSvFE6EGzVBEqwdVLYNaFbtnT6HLJyyQ1NrgADbU2BJ6AVpAfmPwDu18PW8EPYjsiffG8zU7gE",
  "key25": "3WzEvJH9K3jHGsShotM8hSQrbnhaV57WSqnNE8R6dGu6ExYqn4tak6Z5C8taLv8Vniqk1APnUNZt7FSfs3qymGc9",
  "key26": "4MJsPF94J9oy4boJgiEBx36hcPcs5jDE9FoZBZsamPLihrkqU8kHzr7P8NKEhgJKrcRakfcU2e4wgMMXEGmbM3KA",
  "key27": "24wVxc6k4W6G9VuQ15HXq3mCaHT4YMUMoEpcybbGUpuZeaUWFBwz1XfiHfE86ptdgKkUS3EzTkWNoTzer53y1Zep",
  "key28": "3dXWp7WE3wVHSSaxgEipEjQKYZnLBcLCYcWDMtNWLg2ABRX9ARoX9yBZnJR7vzeZ8AGKKmCZBgrWAZ1mRAaRj1rK",
  "key29": "3tDXrKh9KquAYMYJVD8HKhd5B5hizoB6D5bWqa7n3RJ8fCpjLyCyqHCwUuUkKyCmTmrPsWpTXTrqzLDWwkPNRhSi",
  "key30": "HM9fLUpEL4he3iHxWp2QvEHAM9iYfuDbiX6Wo7tyVCGeaYyiGxxAep8B73fowvTmR34baGhiF4U1dx6TpY3L3MR",
  "key31": "58398VbfwTuzAyte2m1BY9Qb1XTGCe9Jzb3P5j57BmVcn5cUGiJ6XcqTUSBrgELymfBVSfG6Dw4Wis7CvRUrHnqM",
  "key32": "5j4yCRWXGRjeEFeYHm3zt23bBCMtyFdHkCR3zjwgVBsmEF94TyD2LSppq438GtfhwQ3B2GMttGC5ZrjETWN5DGn6",
  "key33": "2aK59qMap3kL8hXaZg5RwAmb66sVcPq69VBh2kUogTkVgqSJYJxyUvhGHQqfK4SrCi8DAwUnUAWbPeSXkujeiJjA",
  "key34": "4fE9LY2rAHaeQeMLX5UJQ7F4bJwaywHprwxTF4RT8v9fTsqvsZBaXL5VsvwB5UUmi1EqY3uDUCTmFDWKhbEg2e74",
  "key35": "25Cqg6mcSWYGCpp5kTt1H87VAXUxau9EVPpaPeVEeTzm3VRyM6jTDbJzXN7uZMi5EEWqtU68vE66iuRmaMZCNjW5"
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
