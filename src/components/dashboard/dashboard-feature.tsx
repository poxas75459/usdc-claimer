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
    "3s4Vca1YPRxhk7zmcQ9vfpJm1TsCcvkfXM9Hi49zhTakdC5xyAMHAiKyuwnTxthj5sfzQqwJeSjH8j9MWDHenfAi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y2fzpYR7NR6NgAM9X2gW7cny2JXyaQxAm9PAsJr8yqFFs35Q3DrE53f1HhPpHTw5KxLmn3ygaHn8a7DXL8ZdS3G",
  "key1": "3qfsWXe5hF1RA4ctPcdtQ6UfcpEd9LrpVNJ8GCycraUUGd9yLkfV45ycoXAPyrg35aFTjBMKGtxkT7FLEG32edWN",
  "key2": "37vPugv5fhpnU5TT3bdhHF3MFYRbQDc1B16xgMwGpaBkTwLKeCEKrQaRnuEfV8wjVWfP5X9eh4vUSSssGKF4ysDt",
  "key3": "4Gp67CGnokXuVjq2HvaszXgJaLVFH4Cbq2XpWsU4q57xB7YYXGC1SyPahhWsUEx1vxDB8E2t8K3fS3vtWDXZUFuc",
  "key4": "66xeLu6itGfqb7BtWNb5JcHxn7JbrhsQxDbMm7chDXDUwoDoyb8wijL31ey7mwXYczX6BjWLYh1fG3oqq172xond",
  "key5": "4oTRYt23ULExWE7uTNJTSgVpzXbYLp4KYdPtXNPjbttHbPWuzHiLeXnHWmxQBftcvcxweeqDjgbhRYisbqN8X4wM",
  "key6": "5UVcvztniRQMxmghNeJYZuBNX5pDTSucWYhz1FVd8upR6PJjBkTZXok6qeP3bUs8eq7HdN5Ag6VRZzQYqM6ZQyjo",
  "key7": "4A31YBW6Kc55XWrQcABj6hrcNvYZKRKBv2DC8ttSaHWrYXzBteQTUgFwgZaF8yTLBsFXy1DabEkNaorMZwuFLHGg",
  "key8": "5pdjSz9hAca5yExA7Gk821CgbMxB2yHoEzqGWLNhSa3saeGzAqzcdUXz3rDykoMmZMDuWmVz3cBvL8Cbi3whoNjM",
  "key9": "jEQrsKKZwYXQj9Hd92ojoKGLaWsrsmqQHWfk8TTXtLdPsbAZkb1f4117Rop5buVGiJRCHvqw2KSVRCfD2cvgs4y",
  "key10": "4xk5vBDefsDgbjFWZU2bM58SLDaRhYS76UJ5bPbmbdQSoYF9LKfN5US5qXAythCy8qCdgKCYHj3Me8j9NTqaLCub",
  "key11": "2CW4ZvAi5de7rdE1RnW99mnYpN6aCSkmwXvVWa1pKFZ5k8LqrDAbZcNC3kuANsbHR9CxZhJMsA29mh7fsgeordMF",
  "key12": "5bT8Ku6ZzN1zkRoBGYVFvkGXUPcLfMyRfadoUtyoNJ5NrjkojMJs4B6vxKSSbA1PZQp2mSKu8qvFnvLrBXydre5q",
  "key13": "2Qrde1CJY7iMgEzMpLiiYsaBh3cBHR9WwbyfkfLxHHs8G7sw2Mw8XTpe3xrEnXuya9XZcsf5qLwmn3cHdtjpW6LA",
  "key14": "489KyHnMZQS7VZjhyeCuyPAK4ziH8H9R5STQ2o1BCCyMqxtHW3VVjQvwJKmNAbDV2LAMt74wiQFA5Bavsnny1ssn",
  "key15": "dy2sRTCK7cYPrfkaqzx6DQxqPopMZzggXPUXzHoEmyL6oMX9d3E5bmZFSXiaCFQ7JRmRHhmM6BaXtYEQpT2BE9L",
  "key16": "3dypYD7t6vLK2maN3QYgAe4CBEDWbVyFspLwqnSkZh6QuzHEfMPxz8Xu7uZqXbSfU8tFw7BMA4EwhHoZiXC7i9dp",
  "key17": "47474eKt4T2bE7ascggLfdnJMg4BJg37hbpnNrmhpN1gVdqe2YyDZ4mRXKALjRCELh8YFrv1tJn3eU67gtaznHrn",
  "key18": "3Kcx4CfAtTCptyCPtQE6xSVSC4huG4eYpfJr1mAV3uDK5B3NSphQ268EAnUoXjYk8ZxJ35jZbF2LRgxyVQPT1Z8f",
  "key19": "7diwEoTWBZiTH6iTpw3xXJKr4KFWaSZqdu2x5QqhF9WKcuNcEXa8v15ST3thnXYxXFBkRXq51MnC2yodBj5MrZy",
  "key20": "5oPdSQLnVowkqQsGjmzsib1izvgU8v9ofnzeg4WX2rHuqKEoAz8puS9d83p8JVugqXQEW3aXdhLRwKZxad54cqVz",
  "key21": "5NacPfiBk7CvNkFFTccsihgfEnaQedoWT3TzfPGd89153YTSyHmZjBnVTXy47KrHnEp7WHqf6YgnftiAYmTbs1Sz",
  "key22": "47yRoWwYyDfgd1Ys35WjDZgMsmgMek6wFZgQmgXLpupdtyLiPQ7GSyKbGxr5EoGRLqkY487XqmUNhzSUyNYHdYNM",
  "key23": "42wdEJ7WY4tMwEGq789G4KdvBjAWSHMB9nybSepSUXejaeo7SjJQjnRc4Gsgr2c2bSXC7tGbE1sLJkvu2uxWK6A1",
  "key24": "33mYU8SEntG1wT4Dac3tfiHNNUcoYTJrbTKNRjA12udtCvMrUAD6ctTHhEm8PhhCsjUQTTXjexJnxSgYhJKUreQM",
  "key25": "4spzf3zDx5JgN6L4m34WZTpXUKy28559RYQZoVbmY5Q5yMgH9CrcjqSV2j8dbLZWyRhwSwp7Ao8oKJMxeCEKgLG7",
  "key26": "2AFqXN386Hz7CyhMyCkiQZsTcNmYLw5rim97bUk4ndCfvY9b8u8fQXTDw2YmAJTE9hkJdFaJAw4AJ56h41Z8etRM",
  "key27": "4NjqzYPYWRTgBYT8aP4kqk2Dzcf79zJPx9Dkws9WKj1ofGno7JZCJFQoLCxMhTCn1RRcG2ZFAhbaRXySvYDjijeL",
  "key28": "Ed8Wq45WUJzDW1s19uThtEik7fy1LGEmkLHY7cTwzg6kd4D4znEvttqMRX5htBkEs46wQWwfYAyjXAWbGAM5ZN7",
  "key29": "5v8V1vSpfUzaearhmjyyzDb9MdY1NPMGBSBF9nCcTNv36bqfqFVwFtAEgnMBQSBcng4oKh4pRzt5D3zEXTnKMRfb",
  "key30": "4YtJaKQRwPUVpiQdfzYNY7XoArKQ6QQLEsN3A5vuhaiKVVZVwG39dpvHE6SFmvvK49PWgvy3SKT2dzfL3UM5muSt",
  "key31": "5s8hxQ5gtZqSy8VG8sSvByQebbRk1S54WeeeR5uCdmVsZj1cyixu9tKiPV75Zf7sVKyZonSRL1whjrGsH9YuYyUZ",
  "key32": "2X9U1jwwHsanxf8MQfXcWpUdwxabGhaeu3WgWF4qK58UX1LrCzd5BxbXpCsm2Lfiq97hCDx3qaLkCugjftvYYQ2J",
  "key33": "yC8S7LZykE4raCfywo31557Kg2QHyaJTmyyG9pghD77kMa6q8c3oiLyaitZvyHFionTK5KGpZxUTEVSUs7rR2vo"
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
