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
    "2eukYfKq7ooXHWKcRHkt17mJ8Ga1YqvTnPpZV7udyqySxHLjKmiypGyQnyTmVaq6ixMqiyjEpC3h8PgUgF1wLTzS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rN3swhL5mSDKjkmDc4KGr59fnpLaE856iJ7Az9KGVc6RAmCCwRdz7EZtwL7xb7wcN5aYLcFJjyDwLTkwthNGkQf",
  "key1": "59jEDnxcRLf2aEkwhkbMgYPJka5gNNxdzd2LRU45scMyaoBvQDX8uZsHrqJT1XRmK9F7GRhAhhJRpqLMVkE2UXn8",
  "key2": "45oebNM4ZdJ4pK1W9xfVVWZNPdAmmanRefRsjNHfqACK7LnY3ot3wTxfFtsbyYxBQ8U9HZLTi9aSer1cuHoeSXWk",
  "key3": "3CmzFiqzpYyvDdpWcpTdKXKGdBzzpatyLMHTEXkwLB7LK6eKwFtrFopnUj6x31vjyb3oyrYq9wuHVrkQD1QiRjCu",
  "key4": "2CYPq6KqwyNtmJQhe9RF3jc4WXohpBSBr9gBDqA4tkLX9cSLPHsADNVmJ4jPi1K9PbxdLyAvVCaYxy7odLPKvjjY",
  "key5": "48crVusCqJ8nHTHm2PeMq3Y2zHn6gUvnx6CJs8fJmsccZyFGYxaCCcuwZUk6rTWQRp2qjJNV5qupWwkzfoUGUuGg",
  "key6": "2rAP82MBkvVLFyoMYftZCzZ5kRZSfcpXnjPfSm92GpEByWZHYsynNGm5HT9Vf84ACQxKrQMo49SUbosyStq6bWU2",
  "key7": "5Tmwk3X9Ubq3myBeah7REutFpFHpQiV6MKrZNHrMTXgEQ9s3fdpyQ8C89GmknhFMBqswn9zVvJ5ZiExfzpSzkhTn",
  "key8": "5Lb7FNJdTwLMx7thyAq5fCcw4iKkv16mK2i7dc4715rKKyFYb1D3EQYToDGL9zCmUFhChLBpDK2vmCm4w1HiTiY3",
  "key9": "2EnLANxaQF5519tgXz9Pu6M2qFsYXDoULKwo817fDkjNZ2axttmiWYMxiQbQd82wHpB4wZzPEB21reAd1jXJ3zod",
  "key10": "55Qjqn3JvzgXqCbUjdUSUmf6AcZpmnuoBgyqECvDfz9VXcMyJgrpgerBt7W6UfvbFvdoLK9Z9uT3oTuZYBGLEr86",
  "key11": "4ZHxZ2YvSUh6BbfT4mKh2CQST9Rv5CurYxN6k6sXaBe9rThPJP6Zmqjy2j97BVqAWhDv6ybhP6qcBPAwbwMX6sBW",
  "key12": "8QAADBD4ETx9FHLLxg8JrmmnmBrHaPQo3Kykj2zxnJrDHSSG6HYPiMypokqkV85AKSdojwzozxYabcXqLgMQjxr",
  "key13": "32FUCACgpZsZsy1khqhvVnx5ZNmqtXLVoLDMq6NYTXyg89BPXZyxrDP7Nu3BJJFjPyK63UQM29iifwHbv4qxggET",
  "key14": "3rxmKevGgdQDgKXHuWMRQmnAZwpj6WEkG7Zy3hEET9iCBNexgQCktg1phoLTSvg6pxvdnd7MbtapKXm9Az537yU7",
  "key15": "QLkycu9xnKawomLPLkV1mkVV4dmaWJqKQy4DyQndeNEodCb6WFu5BCnSprkgmkCqhAW71FvhuwApTuRbehNQQgU",
  "key16": "7RaAxzEJ3pMDAebB8r5n7QCVawgxDkfzz9c9WAnM4e4dDaYbyiYhaeEznWd1YLuJDdgyCQbTNwHDY2HQ4mg2u94",
  "key17": "2gsVGqnqREv9TbmCsPy9G2ZJaPNmMzc8dLhvG5wHHBTVobLmUqaQWmBRYCTAhdQ5tYzEJstvQvYN3ewZsretGdmT",
  "key18": "3U9c2VqUUjfHiUHLVrW3pFvfq5qf5jV4N4Sy287DBPgFmo2yuZbejuZDQtToNxEpPmqL6nqw2qAnCqbD7LP82JV9",
  "key19": "2YiNR6JUhQCGPEHRdfVBkb98dBFPbt4oPzfiqJVkWapdLdN51dQdkAdHnXqbYYjnfNKu4a2vfRCSpu8JSGkxSLta",
  "key20": "wuDvcxGoDA6Q5o4dkiqVKkcpwAB9AUT8o9doSrSHgV7UauiYD6S66gsha3TUcLyEqLS8GfJkSLsyajE7scLFhK3",
  "key21": "3T6bvZqqPhSZaiYWrTtMswdTTGhtD79d1maY7titAMfZ4NAwAqWccUaispEF7FauYst4ixNrcjvHtqe2mE6beG98",
  "key22": "3CuxMofByx7gi3s9NeDT5NYxu3K9XtL5zFNnAekvae4ra1Mdyij4MDpdgrVXzuv2K4QRpa9Hm897667d3pmSuYNT",
  "key23": "5CVb4vyP8WfaVBvRNgenQpFpzbhE9N6Q9FpdsXX1ypExb8VSVQmbMMNqo3iiuTerEwoZ6e3HcpeLYLRYP4LL9yK7",
  "key24": "5F4gSV6A7hzbj1RHzM4R6SZLqNhYSBFPrhoJpC3Ly642m3pSbz2zs27Sn7x1fiZE96fgSDkjM7p67JFfDPCSWKMw",
  "key25": "4MNFswRS2kdD1ozXwU7HCUFirDGmXkA7Gfh9mTggxFCf53qX5iBjeFrkFnK5EieXuKZQQM5THwPR9wtM3AhigufD",
  "key26": "5Aw81NZwh4vuFYBmdfENnMEe4Cvv7aW7jLeV9CCKdNfr47FEiX3bSHQeUb3VMuwobdasxyrGQ9GdV33QrPYoqFHR",
  "key27": "5NejgBq3ZnFLEybzxEPrNLLZryTtn7MPq4XT4pS5tEwZd78pj3ebKRxbKzLVdxJ8nwH6asHntdDa82iNZQAr3y9s",
  "key28": "aAjqBaL9SFpTYMbWggyBzcJe7yVfJ4J8oVBP9J9fWmavLoZ93rFV9CveB99JMPZ8MuUzHJoECisZCBkh27erWcE",
  "key29": "MoAiUge8g9RqEc4FPhGAgDA7VqJ8JAZ8KvdXJVCWNRyGBcj8eH16og3hubASFgJQhUUAzP8ozYM6pipmRWayvXT",
  "key30": "3QvJywAdkrqEGuAf2CpLRtebwkkoG8CGW4rabVV7soAXn9hEuuF6VhUEPEM7DaAMk6E7J2uXmgZ8AAmkfutaY1uS",
  "key31": "uijbWfQiV7A11j55e5xuHh4WYJVcqYKtKCEqeCQKV9DgErkGweMR8ga3Cgq5pHcTq272wjRvd4h989q1HTZqxvQ",
  "key32": "5uywVSL1Feq4ZLrqFBui1sKH5T2ZaxhdPZY7tuvYckuBnb12SvUSZ9iY859fAwq2kT8C5hTfAYTXRo15NUtvGC3k",
  "key33": "2yshJXmKN8BBRRMJjdVQvoJgqBDbVWT5ntTCaESV3YbnEhsHSKo4qqim9i8VZqX96Ua6RK8vboM1GECncaeBjZxz",
  "key34": "4FqpzCsH9esNCurXKrEVLggS2859nr4Zketg31zX6bbpZCcywJyfaPHR91ucgcg6H9aikXHUiqGkurAzd2aTtQp7"
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
