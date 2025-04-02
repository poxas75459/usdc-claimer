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
    "31oqZ5PMqfXoNN536PKUCSa8bCb3pZz79iz5cUbF4W8bfanaLndDEsWmQu1vBf8TsAWJhPrAiVBzinK97MxiaQiz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bJDgTdVe5b9xJ3JbuqEjLXC3DyUU5CqmRWinNJZCitjW5zHn7irw33h3HvFKHV2k1jfFMVmH2QaRvLjMyt4cYXe",
  "key1": "2HoW6VKFgtuAfhZ41AYf4pyDcwc1Vg1xjfFXGu9CTZeJDMZjwj7pgYuNhgBrkWHrNmVPU2LzoK4N1E5MdzJuU3r3",
  "key2": "4L2LiWjgTANm2LE9Gip5BA3BJjotVxuct3bENQmtFq4thmQgdVxPgAXZw6PTkbRZQwUo2RtoK9mJ6kt7JZt4YvHK",
  "key3": "4yNar6YCGD2kdSUGHkMMiWSbV8bZ9NYLzzweLTMVgnE8RbCFWySzsZrkXsXuZSswFtWrCRUGJfeLBne9Am73ub8z",
  "key4": "3kn8RH3KrceyM8eXip2536rdCgHWpoHdv6NFHfnRaLw5LgSYNfeb8q8aT37rfFmFGCvrkEKEGKYVrGoyPEVZiioS",
  "key5": "3LEsrbwFVnx23Dii3FdTMRT6aT6r6V1ESZk4zTZg8DM5Poc1K13PmYMT67npwYqzeCxqZk5p2mcZ8j1JztZERdN1",
  "key6": "5GYDQzt3JiuYhLkb3Ps1RtvCx7EmUEVNV8otiedMaLjZMwJGD3jCU9PPovfFWLdbcYerEV2d1LABQeHdyS16sVnz",
  "key7": "5ctE2Uwzt7Qi8yb823U9XFPi5tG1mmpj2v7XtXbc6V56QvJoingL3V1TrpzuUgpiUneu9KbisnU2NMX85fqXzMSY",
  "key8": "5U4dSCdv67jLqpkfuY8ZsTmVT28SAUQxMJSfp6R5Hxuarg6YBfcoP1nuXUbP3VipaHH97CdqDNLp4tfNhE8dXsgj",
  "key9": "K4aBj1kt4eYzV34aATQnFESnhVvQa78La4Rx2phFpz2u8WVAsMLK5uBsGqm7o71yyNevy1mkN9jTy6PrspnomCd",
  "key10": "2F1itR6C3DNY3ari1xxu8EG72gLajxAofve5DAaA1mf7hSzk5XqfgHAEBFqEuScTbWD9h1gyEGhiXX6Wwrtg9vWd",
  "key11": "2YMop9SUsZ7WAyKfk1RAChnD15P8yTYDxsiX8RpVX7ZJk37EgY7RuVxCq3B759H8NbjcNM4bvx7gsuZenSQpCUZe",
  "key12": "43H86fBskswAXk9A2vmKsGFJUB7FMhmkXNvGx231azTQw4rzNRde28MiTKY7C6dvDsggjpqLWytArB3LKQf825QE",
  "key13": "2nbaTq2p9WRJW89W6xBQqqUPqkJW6S447UxeYb6LTGeZVcTqwhcM7TEUB2VHS8bc2DrGxpvKb84eqdSQUx78kXvA",
  "key14": "54jCvtX9ojiWMeHXezYjfZrPxQcbL1J4Edu1gy8quCcSGiCC2v3C3XrNvd2zy8QzpxgJi7aCcT4BJyLrNzbQk6cC",
  "key15": "3zynftx7Y5CBnzPabC23J2Ts2z5vNxX22H3P9PuhJn87SGKmAr8tX7JvkbRLPY98CKboxLZKHjcBwqh4Pcxt1qRY",
  "key16": "nXspf4kGTKV31CP1BkzGrWoXXhcX14Zsm5vGpn6HoNiGVhZMQPcExT8kfP8pyLk1cAjzDGQHrSA1wx1d8iQo9yT",
  "key17": "4vpihbhr2NMnWqcX7kqZEu6U97R3bDQqQs848hCKcoMNiuL37MSH1E6Yu4mL26Shy2FTS88e2kLCsdQZkBzNYty3",
  "key18": "amW5jEmJ6nnc8f7bUGtWC4HfdjaxQ7xV1rLVHcJoMZo44r1TBrC1U2bdmhrz18jPHaDYq6LNZCR6o3q8Ud1u2gs",
  "key19": "2JvQd1dGTiSJgWb815mHSiZC4dkDVDXhey9z7rpB9B6hCzfANkqp7iFgiAbe5SyJK5cw9VkxrLhjv2RRLtrvuWGz",
  "key20": "bFHb76ZybF4DF2mt2K8MEJp7qjuSTkZu8mJosRa5uXoRjTi7r1Zs9XpBFZJamLVyBQfqLkXDQoq4q31P3tq2Xs9",
  "key21": "2XJoj1kPG2YMCzMMTDiC3YC5KucqpYE6G4BTx3z3FKVTP6cQhQukR7Vs5aFjznhS86S6ysSniSSb455zQdZom6AZ",
  "key22": "2yBmf2yjRqnZTnRRjUFHy5mqtQcyoiT8z6TV64D7FZAm9hdaeikMvFdQ2Pn1jLKNDda5YVzdgXEmrfjpouYjCCBF",
  "key23": "5J6ZLxfgRCt5xEMCpo9y5qV4JMGitCNiktbESw2n8pt4CMDrR3jXWFbZC9mzLyemmvrw8SUfMAmvpEd6o42PikXF",
  "key24": "4xrWWfo49iUKfvGPVYmFWVZb6nSjuQYNZh6MazuXeZ1gXrGLWtwoJJaSPkRuvVMzSaCQdXkHCqxUz3oJmhoVwehW",
  "key25": "4qWQbVy6H2yNXB1BKeJWZm6WqVkDVsE9Ei1oNMv95sdgrP9J4HxinFAXAgptrWh2zzLYC9mf4gPtQ5JHkgV6hMhY",
  "key26": "3muECXhxgWP55vn5Rmc5d89iJcE4u853w45jHkjvnK7GdpnNX5VAnugZkCXKqo7DidxtKiFfRnqivExNL66d8y5J",
  "key27": "XLhJvgDNejaDKUc6ETAdCMTWv8STu3LYC87r6Q9Za8eRWfXxekgnE3JqGtTavsD3srGC4D3gbKCZ3eZxkspvCZG",
  "key28": "2d1DkntehGDTo9B3whiQgJVTWU2TAxsh5BJQzofN73kDHJEQLrPkoZysJ1XG3SRHiRL2j5c3DEaqxEt1YTRctz1Z",
  "key29": "3n92LD2AWJcqTRiM8faaJPWmdBLejKkHWgqkqAH9YXbTFyMfjsH6wTpdcxRjMWawhZiKEtFzoi2AAc884B92cen3",
  "key30": "4ALk5PiPT2gUZaVpeL11AUu55CAG6gggVmFq1SrTJHwUWwrH5Ee1QmZy9zdxA3M8XNCCG83vLmNMcRyLBKMuntyv"
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
