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
    "2n9wEu35Up4gRRGtoh9d3KX8hB5MgL1SEvtK7bQ8RrQMSsWGbNCejkA2RFVjo3vhYveTyZcXnWsQycTyHquGxuns"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ErQYkUMgUjyj53SxbBSPzMxRh9PZ3qdmKDwbk9NtLEK8VmUPNQ4tV9KFKCEJNJreS7jhyvm8QoecXh2vTR5iaDD",
  "key1": "5GsxvYEwGvrgrsRXgbo3rhdnrLAgARKyyEwBGPoYhiP3ozN1MvqWF7YLnfiEsRBjFfMTczNjgWHNGjEG7L8X4ECT",
  "key2": "3nqZqdmYXuRhCT1vgtFajL4CpSb4gN9LcCW5YpUs1kNVBNFQLnpYo6gHEpFbWwbc2a5zCcFGEcd77yPonYD6tUHv",
  "key3": "4N66DoFSGJggbdm2kfjkXHVzQymaNirSS7Zq8xoDFyJKwp5jaXUZRAA9t95uQjeNUnkmREsf3m1BYUbwjqPq3Lec",
  "key4": "4zP3qTqVLJqMQEHre7dh6Kr3YWj5f4Sv8Szeu8PmjJQ2141F1gQYHjh8fdgTJML575KU2MTawToxJcZAxeXGGwqk",
  "key5": "yHW66bGmyd3q7xJxBXjdZnzdtB5HJS1NxCa9fFoCYtmTdJRnW5L43KW1e8Z2AioqYDB9GuFgv1fc95jzxMGwDLH",
  "key6": "3Jv269yG73Y3BzCkwD6rt8t5GnhpZDzsoxeYHxzAC4P55zWdQSD2AWTXvcaZgXQN7YMDf2ctRpauCRBXJEiXhLnW",
  "key7": "2Z9ugZQD9y8Fbq2CtCGxCAXR37XqJZbxm9WiECb2DgxPoEnuZvkBrb5UsBLMPGt2WNwmqvNQKJ1JVeSA3Jua2iGF",
  "key8": "3iLjGD5WjRxgom775tjEhXFnWd3gYL1GXhEiwPfXzpiEPM4dwpfTCePFTFyatDjMpJhi9GLRw5rk4gbgoSEyAufa",
  "key9": "yqqGC7xXLAAA3u6MjhUoWbrme3CLRhYXVGsobUV5yrXnnHuvBMR5cDGnxAyiCHw8gpzrMwvU5TuW5zZCAviBTCN",
  "key10": "3xSNsEMkECP6eSrGv7fif97BCxpVh7XKSzZWtdt65u1bYcMPck9DbFvKukmS5UYEq5aSQySef8eVAG9agTzgX28v",
  "key11": "4ywgEY8FFogi66EXrLEqWn8HCQ2fCQeaLiFnivWSCvopRt3ZfuDStkHMiw1PTCu3r7EEmvgN9nv98QyeFHfUDDdC",
  "key12": "4f3f46gFMPAJJpVDg8ybh3zhZeEmrZT1RLezgjYqFaZMP9woi4LCGdWERE6NESMWjRctfaAhx9GKqYH2qd6qNj9w",
  "key13": "3bb2jWD9AaD4hN3WnV7Rc5bPwS4y7DQJjNqsvvZ4KoVouNvaCBt8Dc9ZCpzat4nqHwDQHKYKxXxwHvsz2faY9nmE",
  "key14": "4KErVerLxJz5fnEWLEWNUueVcN8gKZB4sme5jAGgR4CkxLR17EqKguKCQ8aWit8ufgAm53JWtnftJtEymUdimodR",
  "key15": "2vnRco8HG1Gid6x1WGgJ8bMcmdeVF3nsPfxq7V4VPtRhsfqyts5yRFixxVKQ1vWZyqkhVo69mEGJxY5Ti6PRChVy",
  "key16": "5WoQLnR5Bsw5EannbCMVRrqa912PZHGpR11PtZ1ihhbMDHtQJuQxyLP3CfY77BCpwzNfsE1LZYKovoL8NeaQrWye",
  "key17": "5GNBKsZyezpMHZVLP5Yv76MFdFB8MgmNrZzJzvjXBhoXZwDRSdiHJ49DB3QeZNGbzzNZAq9UNgs9AKj78FHBRJfb",
  "key18": "i77HB5y6LZyUmGXct87X5pAiNyNDF2CT33itAFMSJvRXuoAbkqYj29wNcJmw29j4KR7V8ML45S4yv4kesCcNoHE",
  "key19": "29oyP17FktohaAfF9zWjevizLbqQMjh5oYqbCv6wG35r1KL7ZP5PYMtyNS54DsCSWfxbTRJwCAqgjPnquJfW1dqP",
  "key20": "4Z3Y51Jno1cQ6mSNMGbLVWv9VVk17hcoLP8g2RxpJPQ1EovZV7rTeeQPyRn7F4RRnEDGsrMWGipE3vTT33K8UhZE",
  "key21": "3Smy6wvXrMx4RQEsxbXTtqYoCzreSHwsA7gnYuv4JAunUkq7YDAa7S5KnUZV4af8rV1BijN9FijkQT1vA9wyMDtL",
  "key22": "D9H1QSdEMEsFofeCZbx6ZAJ9K6K86dAhQq3f2vgskuiTnWNANQCkmjY7e68VD8j6gcSAtacmBbTwhfjUfWcTFs5",
  "key23": "c7rjScsdp36WheYVsEzUPsf94xFPyrwDJBJijTKUPf1pyaCBPoVr7KpktR8fUwMc61Ny1dR6cgp2HuDygczD3RL",
  "key24": "2CZZmryhTAoJRAiUd3rN1LLmAKYqozXfAkbkENYx6C1g446Bs2P734LKeumPuLEE6zZcHKYL94492uAt6ZmB45we",
  "key25": "4m4mEW3f81p3DSLaaSuwAZthWWxWvwVYu1ixgPPpVaqKhEuRsFtGngsC16vVY8N82ZjBUWMmRbekPmXSSeNpr2QA",
  "key26": "3U6L31gRNiPTfCvo3DdwrGAhHuBgnGAP7gCCUN5ohYVZgX3vUECHU5Qqn7gFgRmy2uUV7cECGU2d7sRneXv3kYAS",
  "key27": "5KMUdDxBAX2HCZGyMSGHbpreYKJnYxL93dSp2wdgsvruQosEvSUQ7Hr3c5LvVw6nj6N8YnPxz6dizYSwH9rjMpK3",
  "key28": "41uhKT2ZobMXP6azzM3m5TwLZZ97K9rtdBjDY9crSYA8FBWgBHtVL8oXcJBVtLHZWZKdx9RYDq4y2EmGhP4H2ehs",
  "key29": "2PezRH6uwKFA3UBVF4BwTquYSEHjuRrZtLjuuF16EQ85CNrovoJbf6A6PEoPVqMHmN7TTAg8MJxEGde2zPZ6Hz5j",
  "key30": "2Xs6uy2MNqhVXjPnKaHTU98Ege36iypcAH8jyzBhNZMF7KXeWhrhQcK4UhXHTt9J7ubmFHhtmuyJYPm1XWy5WPoK",
  "key31": "4d3fsnnCyhATPZK1JiJxQNz99nKWVaJZMnfftNuLP7NhjB8NxSaEk77nw9fTBeFFc9CarxH2ApxeCP5r7ZmF24Lk",
  "key32": "4pYSs9NKKyHrvYuDLfb8A7zmqBDVxroFuT7mbUuN2TU9LhmcBwR2ZXBxek5jgFGLpqUhPnTFqQNX7zrLDBEt7ryE"
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
