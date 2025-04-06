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
    "4ZEUhGVeMc3Wp8cFhHyVWcB2vbQERqdEUjsgFMoEWm35ZyXo9wxgkPXKnVHYQ4f2z25YSgGT7UkXthR6neSGb7oP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iGBSGn5dsUa8LbNsVVadGRCi51kWeHAKaNNtFkx22NVeWq531zXkAPV2gQr1i4hX3DYv2vUq1JPzAsDcm9mez7G",
  "key1": "xqRyXvQC2tyjJKn9mAVNvaSewZZNtneSeHeHFUtny8GviBzfPU32bKAFTJtwodbxvju6j53rTHxG2PMRkhPRDaB",
  "key2": "2nhr7XT6jbd4BAusDGXwni4T9Q3UZE5sP6wiZb2FLgKciVXA6b7k9M9gmP13pmxwWMEb82JobenZTuq6jbwpnQMa",
  "key3": "3PqU8FmeBvW79y8VihQdXZQD6J25eMztRDZwwcMxCNt2MaERZyscd5EmXTGNs768d9zjf2Bd5rzzQYuH9ofgSwG6",
  "key4": "4NESE6vp8WVNY8CEpCW9dgaXkogronr2qUrr3JneyzPBne12txTaxazexoM8aBGwL4GxrUgvWJdRxi753ZZkXsF9",
  "key5": "4A4veu1djDiKwAF2yd2eT8KdnpSkkwqzniSjiG3EU24YQoowfv8ko7GnFQ5PZMH84zLnDacXhj9ajxWS7Mn2BTep",
  "key6": "5ZJ5UvqxUWyUd5vCumrUkaFAAQmQMXp5t3PdWf8r7TnTYCWDzeMeDr8akB1d1NsD6pNxq1e8tXzHtc3rz6oha1Cf",
  "key7": "3k1dX5rynuKX4j9dPs5aTArMvth6B8Mr2VgphrTAy51UQKWFTKfqY9va28SKMTuCSvF3VgZwAhaEUiQGTN95LkHP",
  "key8": "4d7puk8yQPsXSw1w9xnt1UHXcMDBfJ5HuFip49PNV2GBBFLKNLKgTq5KY9Ee7APiAsQgvb2kjn39u8WrQ2H54oZD",
  "key9": "4WbpiWsHnVz17kst6iu9jAu6LvzRJKfhw2WygnLjLLvptNxHuyMWR4WpUGR7KPnnMEausy7qtfjqWEj4GnDM6JBW",
  "key10": "4U5ynvmH9r9KSX3S2kZcMrd6Cbqz7nYdrVQ3z5sbZYumhFMAZQbBVk7X1cUQ68n1hSrPxiY1xJPCsgT5dGYeiLRw",
  "key11": "3vtD3kfezPdnPJgHc4QJcYxphY85XN4DEBW5xhJxL5DxvrjNtycpp12EdsQeiMiVBTkHTqATcLgd98BHzbLwe68Q",
  "key12": "4P2tUgvjrHqUxmPUq1SdbszTHWHhN9t4dYjyGpKuZDhe1WpSydxDbYFMc8r5ar2Y4q5KyC6niWDBSd2MaAXM3diy",
  "key13": "4YrvQGeyzc2YiZMuJQT6qcyNbvrMh3FSTXhzguU1YMEqRuibZDp8YkKCqmWnoecMRWXbCLosZdRKRMCQgs9Lghu5",
  "key14": "5wih5781UCH1EB14wP4WwL6g57ksgwiNVCsAsmPAoTbTscytEu7Bvw78StjxnXDdioWJoEzxhYKek3tsWy14xSxV",
  "key15": "2pRMCf6i2WUsPCcN4t1Z6QCXhH9ZnaEY8X4tACNuX1cyGpkfbs211c7SRNjnAn8Zw9WNpnK4Ga6Pr6xbdAfkyT8G",
  "key16": "3Mdw8um3WPVmwzh5HKK7kdxAbo5RKhag4W9N1vhdHsAdzCv1U3Lqtzo9h3SEDagt36JWT2iNnvgPuDDoUATaSQPJ",
  "key17": "5Ke5piEJ3zwgYYxCEkG36LN3yzGii56uNTn4wcgyywSp6aZnWmS6hjdThmgtgewN2s3cKnRxx1RCSf5ERQzXYgj7",
  "key18": "47ubGFHY7EpJAJ2jHReRzbCMWUjXCcf2Jp1rtiASegbRYtRxo9s1cBweG695DiqAEVi5eAfnMhbqwUqjquLq1an6",
  "key19": "2Zw7CZT7Dh3osBMNpGPkyAzqCFmxbEkkJUWwMmxz3DtwejMWJPSdN4MnC7DjxM2CVyv5L7NGand2WEYLwRuKgqb8",
  "key20": "4SJ3fRq5MY1HwuPdC3vWfX2V2vKkjaYuDemQ1Gyx5SSgc9rUBbX1MiqqnEmMJ53huNsgbN76pXkiUCUcvfFLpqBZ",
  "key21": "2CtZ7NK5FSdxLSWTGjVFVdvryhNnJQUvix4t8pNxhCexbUJyNBfcH5a5gjTBbDyxD2EofzwocSTmihWynkTEKy8k",
  "key22": "443Saec8CoKiMyg98CBS5bmknT2nVj3qwRZPs9GVnsCgWHcconzN4HmGu5R2njsG2cTxTtfFnKcytbC7CusJXCYd",
  "key23": "5Jgya6kKmJMfjsodkLAwJPwdTy9YbHSWcouH4Ynwz7SdcSvrfz4FbVX2Jq7erfzrEkPAshbXvR4TNu7CjFXwgxoa",
  "key24": "4aPBHh7QywdAmw6WfV8WE3M17NSpcpE9bUB6hsv5xdUmg3A8HLD864jGXMA2fkPQ3RhJX6zQEavZm6kM8Qu4RNJ1",
  "key25": "ShZ7HJDsx7Ek3L3FDnyPZ1Q1NMyppYhx5V2nPBy8sHwUjvyE67MupKvoSnU6AmoECDUM9fwkH6q8uxfaUXgAdAE"
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
