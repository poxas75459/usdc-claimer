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
    "5KRcSFcyWHKcCFtF379fuyvgZxqMA82nexeVaBis1GQ7VFda3peAEW4MC5hNASfYa6eNSaDoVYa2VL9avsLXxgnk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jnoobgQdHhgd4u5eTV9LEGfQ1Gxdny8S1f3n93qBrHmiy9sjG6UXTNDomMLx6HHAsJZxtKAFoTxGWXgiLM3fHLo",
  "key1": "5yQfrSuCn25oiniLXQ9UcS3HSwrzdRmsFHRMQ8FJ84PVF3QRHZG1W571VpdFD9u25wDs8bzsfgaoUH7enFupeSHy",
  "key2": "33m2hbJdkYjeExKYRvGH16fttHkAYXm4dmGbTWu8cR6Zg6fKCHe7EpwsHeryKjBy2TunMTig5d9rWmZqDAuKibQ8",
  "key3": "z4WcWvtCdz87gsieDEUTPiNYCXq1xga7tMAHsxN6BJYFF4GzYDS4LJto5iSuvAsUgMv1cktJs9SRbw8QYkfdHhL",
  "key4": "5bJP9SAbPJcUp1ZxHkqEBX22ANwzaCeTHJU6MQo6KT9FupMGNqR2faAFG6Ze4mKSpP2sL9GySzxJMq44Pmo7zWGk",
  "key5": "2dLgK15p5uzzd3Anw2WgmJWHeZPEkcy9rSdGoHE7HApiRUgDoN2JeCzcua7CC7nrtCEP2hVmTQpw4MowdSWCQkVA",
  "key6": "2NzVoVCsnvVZwSHJBLJuVHoVeDhiF8xkXVjd4awQsFw5LFcv9f6xeVheMnvzMPrGd325YEVSq7hRnTzTgXCKFA7h",
  "key7": "3T8LLzW5p6GzUKig97et8t36dejAQFQiCUU2Vy8x9E2xNzUQx43p3dkkaTiTHD1VfzYGbPUgFY37PRvuCJE9PaDP",
  "key8": "2negazTg8sx9RVa6ZhqChHmGiKmmBEMYCg7UZcTHHSUJXdBrjCoYnPD5sYQoXHn7oc9hBQXpALQYiDaYQwDuhG59",
  "key9": "3omPuBAivmPHnStmc7wJF42paEfuVwXpDHtu5YrnGEKi7iNVUUgXb527XzadguQ3jsq8QwNxybZpk3NzQg1a6AGM",
  "key10": "5KZYaiJLEGJfD9PRd8vQAgn4ixc5w5eMqumy7NzZKgakTxesV13izt9C5BQEcRtzbh3ZTAZzJTp7vUNSfWgTF45z",
  "key11": "4e8f75E6bGR9sD5uC8WyV5BeaCXihVYmq86ym2JXaqiBrGZgGuHaK6vvxz8Uob32hBG4iLRqSkPAJt6gVZNKDC2A",
  "key12": "5kYvFzcxFCaq3xwV4gW4QLmSQ2t9RP14HXL5T2NKNqzQwLjYcrN5EWBzCU2DWeu8XNyQ237KXFqT4aQtp8cnHkzM",
  "key13": "2gs9FxuBVxswHfWyCGCcCCAqUg9RRNzraXHLhxV8EvMtkkBuo2tDn4E8yD8n2ZbYwWqiEQTwTdgb18fMcehGtaN9",
  "key14": "5oC3v8wKVYZHSnvFjWnWpqoEyubEK6gi48PZfu9Dkxc9zYTycYsq99QWYMeaS7nmDr35xomRxT4Fbjf5UTTGpAoV",
  "key15": "2jsPS6KbuCRYvBa74whj3jFw9AZpdGmwwJ5yBZJVfts9YraKFMd9362pLL9hnq3gsexooMhhKDcZ9BqAXB2hxJir",
  "key16": "1Kx3FJGXoPEFj13m2PGHHDgTZmx3VTW1HrBHkHCAUZe3vLdSnSqmHoCUFj2CZcw39bi9KEWkrNW4zj9gVZ8vbgE",
  "key17": "4hmNykXv4WYuV3dPtvzeiEgSwEVMcPXGES1eLQvh38Cj8Gzf9nt2TN2QF3nBtNE7pZ1wBTwcgrYxLwKJDGYgNehq",
  "key18": "5ohUN7bTYfmXifDpq8GFL7YrZZgJMrYsYrAy2myguHybyiSYQwHg7FZvFiUJaZkXHe4WiqN5Km1J64XiBhjJzvox",
  "key19": "Z93vHxrXgaz1SG2uUACnVEteHxgiPMdAfuAUiAJhioJnx8G6Vdp8BRTzM6Lw2f2QrpDg3yWP8H4zHsJhvEH3HcB",
  "key20": "3nsiPQecrQ6Xifa5ipZbb8N6yVLGxYRhf4XfrgKZSW9CbTWYNTBTX6njjnk7Cx6UExvoti4TCH969FoQqYKnF6JA",
  "key21": "2uK1urMFMxzCx82WC3rsUtzonGnLRf5KvQEy8Wo1oec62ZB8AVies2FLZ1Ae1LxzzFGzU4GmE64PNR1onDUftnjW",
  "key22": "23aXJk6ncpjUr3wDkwW8t2hXRuzqD27kd7HqGRSNFp6R6Wm6VyeNMaD7b82EnYrRa5ByEpXcmGBizAsbBc4dyQhx",
  "key23": "2kAfv4knB9u1CG5D76RKDqPg8BiFpTRpGx5NzaVMkeFChP4HfnkkeKNEu7T6nj1EsBRzXTWqrQsVMGJgMmQiDksj",
  "key24": "2Za7nDXCg2vzRx7D8AcKvGr4zj9C9wKN1skSaVtMyugAPZkwANs8E32agYe26wmbtmxAwV1TH2sbZcvWSDoGzYZ",
  "key25": "4zp5AJp7LDGr1qhkEwSf4fUYJccfThtmS1RbZeXwS1iDZvFWpwG26RJ6YtsapaHwZW2xTUpSxD9SewhnFFuXvZA3",
  "key26": "2Agt61xhNCNGL9M4qk1hxRbohpxBsCFCWc9Yxo4ou2ZMW2DF97CZ6K9h1C6KDLrUcf9n3oPW2Z4YGgt1E6Q5dwMB",
  "key27": "3uTNDrKqodw4KhnP7ewdMCmCnPF65BHugRAPWopwVMKBWFdPx7x3ThyCYuM5kYp5abLQPs815Sg52eXPb2PHGrGs",
  "key28": "JoKuSRvbbdm4MdUgwmJCYSDTY8hxjXU9FegwHgsjZi7bTk24BYnX1BhyLRjhYGPowHuFj3x212muwgRw9dWGoUF",
  "key29": "4CBtipHts9kAiNtw1TMjBdjv2cavUFChvDfodXzHyirEvTVMRLtTjT1EKqiRYbvqVrNgsLEFMDos9yhmTzjzEJ5J",
  "key30": "2v6xQie3kNUWZhAN3XYnEAExgafSv2ifgCFVcKK8L1dkss3qnn4muYiRbdVH3ZtboL53YqbARVH2p6oayMXbb3Sa",
  "key31": "3dFV57kyuEEXvEoQzCjVmbjJrQBtBo43PaRJDkpmjm1VTpQfXmv5c7kswBqvK6USRBH1PYgyZooVLcNPLwJ7Zqst",
  "key32": "4xVub4bDhUwy5GJ3wZdg4auTsbGWYSjgQMiS9tmoNvYAw23JH6D5hYtHrdQZo4qbFXA2o6Bbz8E6JbCt2UhLL1d7",
  "key33": "5mbVVvQT21fdwjrhx8gwwFYDVoyCawiUnUFgWXN7GbvCQCp5SuhcKJRkdnwpxpQH7W9Lqws72F4c5RcdTbsipu6v",
  "key34": "4RSDqhqFqJR1uZCu9CmwdqZYRSQ6CnkCb6pJAuQ5FdVnR2UeBhyiLnzqx1b57Zo8iNCEafLH9jyBYBSdsYKGYnPb",
  "key35": "2jFAxFw6buyvy8N2MBartombkqdPGEUda3hiv2Q5XviNGzTB3j2okeeFwjcmMU9Tbe1qpzN46yaqJPZiB7d9Zhn1",
  "key36": "3uQXnYYbPq6CJPNQK3s3y8K8iXURXfFLsguLHf3B6NvTy3CqQH3sqHSCsDLfwBVd8uoeyMoUxk926uw1P5sKgT68",
  "key37": "kvBHTV71hnCWMqwqnyFjcL3qMiHSjvvCeNAPs1QcYveGnuGbX7wT8ei6QzjzfJegz8SLWrBVQ91xgiS1CHqZ4nt"
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
