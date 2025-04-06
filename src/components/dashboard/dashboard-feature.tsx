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
    "5tQGbfrLbS3k7Bm7hHPatZikqb5yBxhvETVcCskiSfJwXvLHwcVBJAS97j5hPHKq3xwqrnUwBQgNuiAraGuQGxeu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DmiBgF77ZXYCra6t2jhLt8hVKyiCb9YnYFmrVApmLovVdmvLALH9eKvM3orgCXMqEJCc7SRTViseZumAag9zJfk",
  "key1": "3dM6kw7CrRmcEUxgxdwTRvuUEsq6qRwd5PvhpHtt9twPWgLhzPcJf9ua3fbinFcmK46MwKidwxtZ2PY6ELGNT3cc",
  "key2": "2mXKSWKmximFdSPbTGTAkbXaoCCpgNS8o7YUP1JGYN2kqaVtZNyod79AK9cB7f18U55dc7RmtcenRV96a2XxqaB4",
  "key3": "5opAFQEGeniA98cEM8y6VfwAEw7X8VcKXeGstLPpsKdkUn5B2aRRZo1W9f27UiyjgjdDfCjB39Qs8smDRkdMHQsL",
  "key4": "cm69rwTodeCbcdfbSLBfBszYgAryqL7C2qs5d6EhmQTxW2VkDZWN2gkMbQ3RNqtsjgWBWEotPELp5TNadTGiytm",
  "key5": "ijgtKiiLbhyxBAQug2VjZBkzyQ7AWWvUwJ8eUaho9LBpsDkaa7qiLdfdkXrubjGQEYwpF7b4BQerSnuLqfKaR2Y",
  "key6": "31cyoUpgM3dCpeR5RmTog7ddrDYWgmYpXHQDnQ47ZoLjA57vnKJ47H5sTuCiCo9QPCwSdoNujc4y64nL1CKSHjCM",
  "key7": "5zQsPeWfvJBwWaabCJY4zBt2gcBVhm2pCJCKsSV5ccDZvx5GaJkSKWcKftGthoVhoFvfMjwVyAHM46sD96zdNs3E",
  "key8": "3Zg7c94XDmbwfhsyL6X4z2QXSJrbguNa11DwKm3xTGqtKyZA5u2QVRwkBFW41HHZEfdsLb6afU6hmisWgsBTmJxn",
  "key9": "3MrmTKWAX5wM2Hc1bP3VAQr3dWZo9Uw2Q8XPrVzHN1ah66avVp121ZzDqLawKqtxj641URse21dWU1va8QM21xBJ",
  "key10": "2B7xTQNbTs3Qyj4ca14jcHy6xG9Lcfpqh86crU7sdcVkh9mVGTfY9eZEdZrvo3Zs14NjQm1ok4Lbs3uSbPbP8yiQ",
  "key11": "5AyfAr3vdpR7x1u91UVWZw34uyzioQc1U4KyE56AcpoY3th6Fi7aPnnotXkXtkGZkywkc6A3b2Ue83cffTmzxgwr",
  "key12": "3KAgB6qDio4RTQWYntW4tjECzG1CYNMGX9sMnE243pxNFv2pnbkSfr8Uty4yeo3fvoTuS9QbRQ5kg5gYiBZNwWQv",
  "key13": "3bjHeCvvGcLSGVLFV9qycyqVKtZ3GxGNzNfJNF17db6KRtzMKhsGQKBbHUvYgz7HU7Uze2C7W7YgYDRp6pqehd5E",
  "key14": "4rfRyETKDjv5izDMNDJKtRrANvPudNSLcUBDvnED3upH4UbVgEBqZYeopArgaCiAEA9Ahqdm4zHunbHeeuwZUwby",
  "key15": "4oXqDKc5gEB7c9tWMkWwGZHY49z1dj2ucc334vDQ85EGGGzXhrQSiciq6dT4A41FG6SEzKYHMXdBjuUXqpanCXgQ",
  "key16": "3G41ZFE6iyQm4kh7KnAJa9jW4ZwNTSym1f8dKc2bgAnM3kcKw2fg7doi4zVLMwWvtW9mwDhZqrcm7NP72bF2M4b9",
  "key17": "8S7e4bszj11gdXWtVgNL9ctZu5QXVq9shCQK6HuZXwmR7XssQ28rZ16jt4rLfiCHYP44FbPNxXA3e7zpLM6meqz",
  "key18": "5guBHpKtUw4zDdKqbD61Ru9mR1wLhvLc1Ca2S8sgjAdmycF4efWp73A1zAsHasEv9WTs5BBdnDo58bcvWK1zcbC3",
  "key19": "3gRUU423a2PYTKGm64QHWaLsAiHKbtHMTAz2FZryxSAL4BEGJQUEoXSnVJVcXAzFeWTBLkDexuvMEnSeHNfYQAjY",
  "key20": "iDjhXHKZambvaMFxz6rQVQqyn2UXrNf2R8FZGZAYAQ3y2LckFQ5JiNrW6CLXtF4CBzBSadMKd6SLHW7v2wabgLE",
  "key21": "58n6Xsni2GuMLRHzyKBwauv8LTqybkKLJuaYG82CS8fowbRSAJYqRsV6CbKV7uBdRHBoZq8PenqXfr9kn8EW3Y5f",
  "key22": "2rHcK1wsG8izEYue7bZFvAet8X7FUD7s7EBxpcSTfLdK5LNLv1EQf5nfNxxweZPvhzB6rErGc2Gjyjz28ZE2haFQ",
  "key23": "3Br4rJrjtqCFcf7SpLQwBUtWQNZDoWaQQyjSvo7B9DNbJX8zwZEp9b7fL71FLrjfDwx3v1Ksc8buqQQY65hjLwLY",
  "key24": "8zGMT2sG6ekizq7FMG5xWJjxhNjRHYEub7YmK1hkEGeKT8d4Wd33WYPev84jDfgrSjJL8zqcG4hkcF9cvrBSioN",
  "key25": "58q8SaHtxReorps3KpYw5wmJhAEZDyGeeYs5wZ1Rjf1wPSo7ctRmVzaeGPAwJ8cCQ1hQSk3MZTCZDETwh8YppZmg",
  "key26": "3i3zWPy91LskCqYHFfnBhNGiTYQabPu3Mtsa8HreizCp4rA8XkqJZpBftGuegY7aaLHEmmLQ91A2eA1ev3f4yxPj",
  "key27": "2bRGr6PJgXtpSDvydiEr9sicJtacbrRKpfUr5La6XGT99rY1NeN2wnN8JwzWHbSAvtr6YKymCWuLitB7LD9SSxcM",
  "key28": "3pwGwWMg4d5NRh6gNyCR3UYbUbNXtTNUY53vvRHm91v2xW3mRfKgJuHWDhwNQPQ3ip2QEqKC7nqNQbXnknoqCXLi",
  "key29": "5Ye75g9oMAC9GaHswv8qQe1oTSjVskMmTfbQG6KawTxbRLjVkBDDojiHarcGgn5h7F4WitsSkFRWMEaNeQ92CuVW",
  "key30": "2wquUnVGSTyzrQQAJ6GPgU5qsGsiMyXaFZfsodNpJdF6kCDShrEfy1ZfiHBBecnWWhsjwDynhFmT5pvn5BQWK3tj"
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
