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
    "woYxGd4MU9DKrKa6AEi2zZouoFRAQQXuAJv4T3MBQv5tV7vx3Q729VDYaNzKpw6La2Z9nnedfPXYD78ThnkzqKa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7nLu1WHs7koFQrnZFgX6pKXDZSSwVVz5tLEXhkDe4h3XtCRi1YhBdjBxHWj6YWzaXiCYBsRokmDgbJ8uvXMLd1h",
  "key1": "4ZsBdwKPWvBnRwMjMUSJRQD9t851SxhgqYeXYCsCr7XCZhNjSkDBgCokwMrowGvKUbBcBrjgeWcee8Ci1zL6Hggn",
  "key2": "Vq6wVstcn1YuqTQq4HBq9TEnD7mKn4un154VfefcbKhQCmADjFNtGzzTgenXWZ4q2vuMq2E9wq2VWaXuWkntR3i",
  "key3": "5KSWvkKLs2sY4z4KkPPs6YQ41vwLwzyc7z79JLCENj3njgMrGScYQKejXx4GsZRFmibBkpmUWNdsegisto7kfKW8",
  "key4": "4roMqHaDgbqdCUBRg3EzHvaHPz64tKC5cth7mf6zB3kJjn5YSVujfb5g8n5gR98dUZsh9Gfqdg6QZaCTgW5MESN6",
  "key5": "3rVWhD52d4wxGSuRmr6mz2Kd3Pf8U7KgwRKXbWqHfCTv55iFBz35Q1MH1dhqYUwLRg2G3gsTK21XQqqt9KA7ZTPc",
  "key6": "4YSnbVpPr6JsZUtrg2UqKpdw41neP5916ixMBVBaVQ88PbSbtqLaBAcfYdKRStzWbEe5NvcNmLoaxEHfnRawodyX",
  "key7": "3w5hsM8c7apidPtJiJBRTSTuVJ1pThxpvQMzvjwrAiiiam4ahVEKcbmXzn8DWyLnp6hnGzTaLRhoTYH3F4sta32M",
  "key8": "2LowYsckM5wJrKnNs33Kw8LXixBHRB2eoZSHz9CcreEiw1d12Nvxfe7tVLWXfyAth4Bd2Z5NFGwjUQp3NzNqtve3",
  "key9": "4Czz5tpiRZLaZj4aKynWUhhZhfKiPiqvCsVkZgK4JNm6YCWk5y4ZVKPzwD6SeaKg3K8m3RFELTGyk94m1UgszVPM",
  "key10": "3s39JGhS882A94LeLGenvmrncysJhePR6CpZQQDvybVWU9i1LuaP6nBXESW2q4s1hzeW7mmihjSc9uzdyeKEbBAy",
  "key11": "37oeay4EqqqZedX2C6QLT5wJzWnkcecjVB18SVHSbvwKpzZwE2mzT1Bs67n8J4uqJmqXcxvCS62rwQCVfzHhZgNd",
  "key12": "4TvGx2hEeDvTHmwYPmyhY3u1gMSSujBsNzCoYHnLwjGCNffR2R3sVgC5yTKxwhpGg6LNxnkoLrM5FtBAkLSneWhV",
  "key13": "5EtSFZK4y8XswBY4aQ2thgX8KRv68rLHnLeUxiBhZBoZyEnAALDH7u5HbEUGUNHcToNxPQ5Lb4S16BqDCnLeiiHe",
  "key14": "4tcA5UyPJuFyuUfAP8wKdHBdJ7K2Uky5dRFF9pVwHf4PkCCe7G8kfTdDqkXTHLbA3MeGkWrW2n9wo1d9qbCzTDtA",
  "key15": "XcuXAo5DBVNUfALchwT2gfTVMxagdzEqo9U3hWu2yVbNucbq2GwF2hGNdJxQyXyLfhCLauZowjUYiqqn8Ny2pbC",
  "key16": "4kTA3w6qT42HcL9iP2NDFtx5HjVp3hV6b9qHw2mDyh9PTnKdNuqJqt1cBbhoM4gdT79y4g2CKNP5e4gSdL8DQDm9",
  "key17": "g2QHVT7X1K2pQfwc6RBVsQ9NTs6mK8RT4rzFYUXecFxAEbpQaG5zHdUoBNBrn9ngNuS5BtQjVSoZThk5h5qscxk",
  "key18": "29PjMao2stFgZekhA5f44bQMCvjtiqt3VW7MB7FhYB58e7Rv7oWwPtpzmgXkGD7gTLfmw3KBj7xHKCWd69EbKVz8",
  "key19": "5SPK7SbLrVdQ7EByM8Ri8W16HodF1kPrr3SPiunmpFTbNJCis2H3ALJiXXkNd2TVTvn7ycLJBvudyg3dvNGpkfY5",
  "key20": "4Jw1uVKoKdFPSZtzMbU7gURAAtn2j3tFFRbsRze26ta2Aq93dQ3Lzp6CfTjpBLia5onmpZrhVrgWsMmcZmsztVmH",
  "key21": "4hMZ28t16FTE5N3axo4mDTWxupwxnFj7g3KHy91Dc8D2xoNRjAYeVHWHMAvmT1qaCvbfZUuaBMfVmyCHfHcynsYL",
  "key22": "2BRWiWZWE8wnCvD9euUChnBGHRVkANKfHzk3pCR7fT7oZexdEYzxYAKnXtTJWQsewnxCNAwhZ4UfvvyPE3ZmLuvA",
  "key23": "3BvtqDaZrU63TxvEuA7pvyFzmTcuJtHwNL9RWuRsyY3RQnQRixeyJnbqFvJSyXxBmxZ54Z53J3YFZiFauhvHNieq",
  "key24": "57g8eV6eSTVmEXkUW37DqtPdDrt5Ky8AG64A8BKzyeJUESD2i6fjxrdGvbaiyETjuwdnQryvB7LXmiNFmntT5kY2",
  "key25": "2K7QW8Py8XVd7CriuVRtJUwiiTBUixQ2RLHNtXuiLoaS5ksBZ17d7cuCC8QErdQmhgKtRaE994FwsVUAvzuxxWQG",
  "key26": "39oNjLD9oJMz8g4QR6dEJmjbcaxJdgxYgFTjfRuz3YBoBR6RT6UofRL4n6MBPC7r5npaxX6rkhMajT5eQEtpmQA4",
  "key27": "3wW1BjaPSSf8Bcje4rz3GFcQJ5jWUvQyA7xJ8CuardJCeaW37vKRZfbQsbLEjS6588fy38SwEw2TgubhQj4GfA2d",
  "key28": "3ATXBYhySdBe1MFsCaWgmM2xpkM2i6Pi1RZ6bHKQT4W4q3EfBUg4rNtV6uBEk2G697XZRGWj2K5u1hjSUKAEzHSW",
  "key29": "3BBfjZomJCaNALUKSV83ZU8s5drcsHn6iPMrqMudqAwKQGmFYp1S9RkFynGZN26WeTmB6bNShdVpZhET1uVjsWGC",
  "key30": "5CzX3GpsYi7CRntkKdf4cVgCP38UmWQ3BSAeZ6S9sxczsn1ojQ8GTqGjmrrdzH5qmQJR94aKLAhHHjmZorWUgUhK",
  "key31": "4xXtkrvmqrvM7WXm8tFwV3JwGUHQjDZ2YnAxK9AZithfBfYWxYyLNKxSyKCPjZcDCSEmbMt4fh7XMk8PbgU1nJqF",
  "key32": "2k5M7yihhriftK7avrrsmuNEo3WGK38i5FejEKi7uE7nBiLvMHtrCXu8EqTkmYJX2FsnkXEiUtYGg9q9qG1A1HnC",
  "key33": "1GHQ2B8JMunfgsP2qsaxP1ATkLkutWVdx8LwJyomni3xtmSc3V8yr4g9y1meo7WybVXCTmu2wBCFBxJi6hL9zae",
  "key34": "2YTGwpJZnraaQosm3D1znsfwsF8UoWTkLoYvBx1x9xcwxEUGHp1AM8ZChY1D3nKww5WkEmpuHxzo7ZsoWkWq3aEH",
  "key35": "5n8K6A2yYrLiwKmj7kDwVzefaqbNdaiqZrZ89L73dNqi7HEbYWbWoJphAjNS9ZEwriNhpSaV6jcYdcj2by3oaLBj"
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
