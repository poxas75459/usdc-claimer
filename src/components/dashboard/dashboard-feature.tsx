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
    "5ii8NMzbRTZXNVxAEKsNM3FkbtfwBwRGWQcgzJmujPHA5tb1mey8785mv16JX95nSJJBadbEieYs76VHRrGh84Ef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZrypLuVvvyFGyVrLfhff5YCbg4D6rBTfUZAen1yn2thCNHZeBqeLUQerBujMY7RWCy2VHCfQ2yjRFM9wAVviMb9",
  "key1": "4PiM3wNLPvhY4GRWuqZqAAtgyD9tANVRFg1Tuh3XUerLHFZefm1LqfAfQpDKejQUK34v87ka5q4cfU9bmK2cv8QJ",
  "key2": "2gfqKphtTR3gLHnGw2KGBLdumR7EtN5zmXpnKmcmipH4LY9MFdpNo1oTQVxkj93cJypHZAbXpRqEQFdixPd6mAoV",
  "key3": "cSSTYm23biqCtZ16qCRFKJHSMPRxxN3ywsk2v8WuzSqsLnkNWUwL4sb2pW8ujcpjVdMirjpfvtPJtMRDLYQBDZo",
  "key4": "4FoijLNqAV7MWXwAp3P99wHg4naXwmHNzJEhHneTGprwm1NJUYN63E8QjxfZmDEWVTaqG9bMg1TeexUn8qyEExu6",
  "key5": "2FKpgsfttariRXadxGgrMvmqZwnqbhBoGHChT9GgfS89ce6ZnYPrenXiMq38SdDsZgJ2mhBafSjK83gzDwiryLNE",
  "key6": "5kLJT4KevjM94mYFVkyWaQW5dWukGfimi2mw4uXhXHQZtKK5SMtJ8tBQFQWnm5TXwfZXTkrLDFFhgFE964whtvLS",
  "key7": "4FfonbgHAiaYsXKi5bDg7CvBp4FEpt8A1DhEs7M6A6zvEh7tHhp2LsJS8x3kjoRvGuNR2GFp5xfKRFFuvACA4rER",
  "key8": "5SsqJLv4WkcoaWFwCbWwru2TxMWDCq7HecDk8AS7Zc4EV3mCSfMVSBkE85WpTnGCuUMLnrEuywkAGar8ma6tf8Yw",
  "key9": "mtNKxS1uQn5xP5vpXzLJkDaJook1XsVtzNX8NAC76JW3UQmP85opy7UCu6edAUFaibMc4uyfXA5NFS7RWd2hcdA",
  "key10": "5Q2ATZ2QULAtXbxPj2GFob1iPRhYCYe3aufxKQmLgZET5hPFTcbjPBgNaNEMvUEA8f3zK9mhFxrU9QjZFQrdnvy8",
  "key11": "284wEfj7W4ihZ3MtvmzxnSis3sRErPwqBgSXu1fnJkmEK3C5sgsJdBumEDa2qphhfdmjsdbcjMLgNMEGTpeQL6QD",
  "key12": "5A62C4Zcke1qT9ZE53Hd9VdYY4c934AhZiFNt3Wp5G2vjHE8nS55J41HR4RJeU3cfCbro5PJnhD5U2o7ra7Re7G6",
  "key13": "4y49m4mo1JwRXdLabtTd8izoggD9n5oWpBJ1eLB9bMM1MSaJWHqr7xD2Eoi7MxUxycrkFuNqMZtYe4JeAjvJ6C61",
  "key14": "5HYEaR8hMZjTyB17wHUNeMkcWyPdDj2MAeFdJWybW19k7Ap1q3H4JHvV88CFW11myVSvEp4XzDaYSJQwc77GmZTn",
  "key15": "2qX8RcvP2MyDPsUjCVHep68LKKA9vpvqz5acqi6VkbjWHkU7zVjyBXQFoJzTmWaRupi5akfusb8dMXkmuGvnE7Mg",
  "key16": "3LTnfyE54K5p4YjvVTeiBG7SNwE69Apm5F9c7cjLf5j4HGQwjCvB71Mg8TSU5DeexPeMKXc9RJG2u1kSsmkbpEJt",
  "key17": "2RAnJzMUY5nhQViVQ3GgqYwzDh8nGTtf8Qopq5HD13xvCDxueFWayHsgFPimuS6LDzdXCZA1SVVKz78Ku2cuzY9",
  "key18": "35rXQZnEiQLoaaji8UELh44DeXQtxW3A6QmCSzzTd5UxnpKTcYC5k7S7rM6LpGA4kfST7mHescvCcG4ayohTjafL",
  "key19": "3EbYAsQ6iEarL2YFLBuRDyMAGzqBTeXy6nC3TaEkJsJ7kiPFGxaMjDkoZ6ev8APBMbrKf1HzYaCTVkRJZXm1pzLh",
  "key20": "3jqD4cf5GW6bWurWjRjUPXfnRsQsi3fVaz6UAjnxkYsGbc6i6CZfnZ2PY4DizmQaQDqYwZ2Go9YZsmHkiMDubvRA",
  "key21": "akPeCQ1k3nSuv8axaCTBN91LY4DihRMLVBFJh7d9HxpSisCmLFdtARh3zGLocPYpuHFKL55wHyJ5nmgbSta8XDe",
  "key22": "4ur8QEbENPK8c15XaSs3zwJNTbbUX2ddASbwhfGcoizyjqqBLBRMiSPU84a3C3ZFNxFhbyPfwGhgrTVctieS6fQ8",
  "key23": "5tUCdR514jXYX5H88jzWYEcbwpauR2QhsxKdTbC58DzyrQ9oqxDLsoJZXzV8Z1sND9HimUZCTZFEVkiZebwXny89",
  "key24": "2kvmkDMQE5m3wKA1oJEVBbpbAiYQrPSsz7p2wFQQnnjuDSE19MzXDrwpZUG6K1HSqm1RykQGS51EinGoKkrdmBgf",
  "key25": "5tZ8FrJLpXpoQtmqr4ebcfR5Y3HFQqeuhrQzPDX2eCAJC13hFJ2KMBs3PCd3Fj9sB4UmhWH9EugmTLMyopkCCXGD",
  "key26": "5WEa4knk8gLcWMbzVoCCKhrHr7zwtMzk8y9tkHLBzcLyMbUWa6VqLnSmXskWngjtfS5zpQM66adML4zdBQN3Qovp",
  "key27": "4WZH6ToMBAjrWdCjVAkWeWahxAACArfjtrdREd94vde5fqqeHodannHyQMYXhVzwfXnFJEeLH4h7NwoLx3MiEjhH",
  "key28": "3SvgaZTuAKD6JajJS7iCzU4NjfBE3uHCK5FYJURx2QyM65PP5bqVztReKqwnhBdjsoSK9topKWhkWXT3bh22NMyL",
  "key29": "2FhWt93JPbHuVyXuTgYAqCmRXWbNmKcKUhgL1D1ZLiv1YJkBjCc5i5CWzC7yFJLCLEvqUMcmWpv2t5r8Eo7LBH36",
  "key30": "4rcyMP6kpKk7Smv3Tbfcv96SX5dRBey9s9ZUk8DtFMonQVaB1miirLD8Tmsu2f4GunBPoVC4i1EMt1qKTRtF3wkU",
  "key31": "4hnM2jQwWLMwAbGRWdkQhZvU53VsA8oGq9V7chHJA1j8JpZm5h82srhizoDzSZFXqtkncFXh3N3tJ7X33StQJgLU",
  "key32": "4WjkwaRBTJLqtsYhghVfJaXRztBe1VfqimXVjHaTSNhYkjxtdkAhv7v9F4oKUFkm7t1PQ6ikN4sjHgtiyaRjjRyo"
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
