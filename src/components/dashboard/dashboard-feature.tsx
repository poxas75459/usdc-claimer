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
    "5UjERAXZCnvrndfQ1d9qw42bfQzoExEDn7Lvd1vx2nphjv7B7XC1fJRoeecA6QWyh39gTXy8ebBVs9Jjj2C77RLn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48LEV4xoAYwErxFh8SzJNVY8aYERPwwcj7vsbBgbkMz42pBCUFdYTXBdce8RTi2zXH8yaEPAfzdpoUPpok1QvcMS",
  "key1": "4phg7hYdg8aM2GQhAJ5zbNqM6YhAMyUo6mLmLuQ5PDXS2PBFoGJkVP1WYgBioUmGjAQgyryMhKHCnthnfvA2T319",
  "key2": "2vJM2bzoHb1dNJDcJN9tToo7q2UHG44yAYGssB3E9RA8EfE3pkaTeN8ad6DCQEQWCYbT9aG5PD4S9KNHcKkcXDaF",
  "key3": "5KZVyVB1P2h7azrZGcNGV3QiJD8qisC4E1Q5oejq6NdZBKyFJanZjN814v8MecpWgDjZWY44sXR1yvz2U2Rvt1js",
  "key4": "5RjnpFMSMgPEp2BX4RSKm7GuVkT6hGAstYCBruELz64Toaquv8QVFtu88VcwAoMkxGbsVrj7nsYLWdii2QMyvXxB",
  "key5": "Jj5Q6N3JnbNq2d6Ptfg6indeRrxosQw5KWzF3415P9vL4SqPgSKPTMQiyzspxuLVHXqMwtuWPXRZwvqDUQ4eUr6",
  "key6": "7zcWXR8NUku5mPE8PGktUXsqibPgsuVKseM6HdDmH5BjSKd24X1MHkzBbdqs6k1WjNMpmcurpqgyJQVr7WrWR5Q",
  "key7": "5roeyf3MJgApMcJbhJHLc9S3fpoudqPMPFskMmamq636iREaDW6yHaPGNq8kPeaaUY2dq1zMTN5zehNH6rHZ4v6",
  "key8": "5dwWnkXGjBawWuDxabxMHDS6GvwUu28VoBQSRufDbwVEet45m5Zz7b8Abf1hvPzfAdYgRMoYhxJRHzw34iRaEATA",
  "key9": "21fZcgNC3mMdoaU3EfwZJjduWzDZrSP7iUMsceCBVyNnVJwpeL26ax5hYd2VnKrUL5TgjdTmHnMsLvuPHW2FN9K2",
  "key10": "5oLHFXmHsPyMyUPcDJk12vxX13WBFx4MRya6JdUWA8RjBf31gexKUR1F2azxBMBoy1gvCg2vcCgguWXv8y5bCPFm",
  "key11": "3UbapmYhm24N5i1iMgeRa5jz5BZv6ywGVKv5hTu8YHSPRVBF9obSiXyp5Fm7hq4THB1NBK9QmwTUVuwNoRpzaVAj",
  "key12": "3zJBtZjvyq9cHUtWVs84nnY5JPthqHHZeUJhVJs5WHSQi6sjktWpLsBvyhuGbRd5NZeCsyyWZsXZiJhHJpVsszXf",
  "key13": "5uwzYwa5c7pYqrnczrgoBQ6hSF33a1BKR6WVfVJcrBeakkYta4bZ1UX8QuXe9yr4u35Af9EcYiyaibTeBuykaGLu",
  "key14": "RRspRw24AVpNp86FoLcwwmJLXrTC5HNH5w1mbDZVM3GpkRf6RPWXdoDL6VtShRUzULeXvu49QPnZiSyhxxnuQUm",
  "key15": "5vriHdSta5a5odJtMkwi4iKRtxZX8M9Q1qmUxJSf5VpeNfmJJTidV9pAfybgDc33P875qyo6gkk1NqcGNhF6QSh7",
  "key16": "3ojtJcncmiNVe9jMrqnfPTDHjSbkryoMkf4e9ztu8rZxrYVDqG3h58fGkoh4r7QaJag8hhvNaoe5L4CTuKLjb1XK",
  "key17": "2LwbS5u4prprVJ7q9b32r9GJe7gqriCL1Fc6MQjd2XXouNUUmtAgJvcHQeMVeSaDHTepmyyZXVaqrL6TmAFZ7cFy",
  "key18": "567mDcHLwsCqDDXmf8dQNAF4QkqN5spWJ6GYYYGouNHJ4rcYTJ4pAYsTALRYsKKWk9xeXP3EcaY6BdM7jpTzzVsw",
  "key19": "4WjsqzqmDXsA5wbHFkFDBm33AxTNPjLvYfNZz1jMV7s3F3mrMkpYdAjXMTHTDRjFgt6MYTxQy24nSzvhTfvfk7h4",
  "key20": "336Rsfg51uDan52cCwmMVyC5BegptyfwsU6VTreVoe4bEMfNEfsorLmBxRSr51uVwM4fCVWq9pH26WkAkxyt3Htw",
  "key21": "3ZixxPxhTxUDfqABbEsoZ9sTczDBJG8iiPTTZ65TsX7Rj3QtH983CL3zfH6R6hKCMyaDDt4K8jCFxAmygGn9rCAp",
  "key22": "jszYmqxm1VWVUbWzF5HhyHp2K1VzV3FYTAWiEemEc4eA7o6joucQ67LBd5EoRVQvLAbMsBqYe5pCxaTcvvt8C5L",
  "key23": "5VP4fHQ7YJZ7gWfvbThb3PinjcraTpAE2h8sYJQQx1mojF2BPnjSq3LHfFBR77FvZ9tN9DjCmUbtHrvGJWY1tQnA",
  "key24": "5p3RS2MRK837HzGJVQWQqgFwFbyRQjY2CA5kfcV2xas9rFhSahxp63aQdVWFajzC2xqG6aMNLVA7jh2eDhR8YS85",
  "key25": "46udtVwKnWhnZz9jufewa2YDo6fFCwbTnxUDCGxDmE22KDMYVGWacJ9xHDEn4EdGdmxmt5gS6ypd1KD8Srms7rED",
  "key26": "5MnFPyKULdywHsaEYoaYao5JZzsPU5bGnvo6uznJnDWueg1uXWua3qvppzuHPuGX9gGtWiS4L74edctWi6ckSGm2",
  "key27": "5uB6dEDta7SrAc32SfFN1d7qy16TUUeP3fJSc1M8N8VSbrLnpSFgqKtVAvsThk2NCV5F1KJP7PESgZuUURz4THTR",
  "key28": "3zKuAbWkB7MLaUUqwEdZbppr3wiEqzoQRWq6nUDNpjRJTUFLXDdaa29YHmk2m5ieCX1GUAiFtkc2zmWVqNsz9Aoj",
  "key29": "zuY3KPa3ikGxwrjWqckxtu1LV6Re3A8QLeH87prNYRdQRw2t7iEZMRf7zypSW6W9JwsW4YZCPgtKefHfc4KrAmd",
  "key30": "5947vjozFyi4wnAuYmcrXUA2LF16gwxV3Pr85ZFZnzYWowyxtsf8F68Npa5HUirJgrUD1jfwXqUPdyJ8zDkUoLC8",
  "key31": "5uzJujF3tDLVkoqGdkEdgGPvBf9QLUMDbjrKAn3uZAw1CgqJharX5cQCGiDzfcQWh61BCwxipFDUScqxHyDAWRg5",
  "key32": "2fFFU9qNuizjHJY6bLsUoThs9iVqyLtLYATZy75o6JEwohE5C1WpE2mc3ADe34gwzpC75GkjdKUqqUkstQdYuurP",
  "key33": "M8xez3t8pbpXdXkb9nc5fXvL63tDNz6NxL7cddVY75QfduTYYa98gZ1V4Y44gmo35W9iKgnDebTL2AWRLWFLQUr",
  "key34": "4A31ghi66ZEfadHWEStFMyyAg1umcBUC655yNHQqvQr9jka5yEHnH5saF5GuiWBGeUjsbeaP959BYazPXKvWTU75",
  "key35": "5iyAY6rjAHotHmwFsGzEVDezn1d7MhT98AiGf3tzUwHA7UbmPKSYGANoJ9CzzXaD8VpgtyDhZGYtQCS6q18iMq2q",
  "key36": "3LmfjZ4itiBEpkAuv5bsT7cfNeHEwY4YLftosnqLHKgt9czbTEbtsLX6poEoRHfvqDCCVevncvrfLNUCyoG83P75"
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
