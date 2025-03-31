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
    "63gvDw48mQwgds5VUREn2bjjqA3bfUktqV2Zy6UwcT1Fw34z7mSPPhEhi3rK9s8Pgkoi24Xjk9M5ezUbpQFA3w3b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xC21j4ECLdk8Kp3oL77ykt2KgJMTCbQbJayWgq94NCEd2ESF9HpGs2hfyswjYn43vCS1xSiUPxhpzVYChygEJd8",
  "key1": "34ybkBiQdiGRKk2eZoNqox1sSNMNJMNXZi9GPSXqp6mSJUD8EmDFUWsgtSkWVFhxxx4AgDjhBosxE8GZAjcoBKpg",
  "key2": "2joHAfzdMJX39H5DVkMiUHgWSR7NHJUemeYSAW5iPYb8M3zSwkEYxUhiqS898916ssAFWzZov9picy4zSGZ18kYZ",
  "key3": "2k2r14LTmHUQXHXmXyxqHzB12cyMZ1DBn7ftRQcaJyxdntgp4FXZhLLAqoWftD2MXgTpNYt2Lj3DnpVzvcxgB5ot",
  "key4": "51zPyrJELkvXSSgE8YxYgREcxu3mo3SsSjM69Ye8zGx3XeGvXi8eLpXbqVrDnL1VuZJj1eZU9Z25zqxQHi3Li4VS",
  "key5": "3RMPmFmkj6PYTwfvj3MtjfKg51sWa9EoscmnXNqrc7SU9ra9dg8vD85XLfWVE6Ss166K9VqdKNuFHaEMrLMETv5A",
  "key6": "5s6C6NQ2Vs9QTkkmyHLZQC8KNnqySRUz5gTkNtkNyRmG5pnGVnTgMQQtGjWfRpaabBDYJeeULLYqihn7CEhB3Zh1",
  "key7": "5C9xUoQ5kdLz1BZvAGLJ8qkAJ7RWMN1hD7hAd5Rr5ZPfR5HpFzVWd2DLneCqtWpzF9EfbeLtQ4q67gucbBeVepge",
  "key8": "4mWRkHWQ4KAKu81sGT4QAB7LWouSdMdioxSHq4xk9i6Te5LFYoFAY5Y2HyRnLErYr3rDGV5wDP5rGBBg8tr4MPRF",
  "key9": "2DtLfv9r9ukYQFau6eMUQL9VdZbnfawifNRffFQPgDvDP9D4NTXNyJye7HdYwwBmM2FMP9LEYEqWLr1QLcBqhFo",
  "key10": "V9MXWtEWmdRasdVELxNhqEux13KfvAFZajDXGPwBMbmRqthwhXknkSQnFMaMVZL2sT7wMVc9nfNzdQ5vzNpdLY1",
  "key11": "5aF3fRwBWHnFSNavowphah2Y1qZNGVY1XkD14vECR7o97g2MNL868CZVjJhhtfwFX6Kebmpvk322tFC1L3cmfa2X",
  "key12": "5aisqytxBYXDw41isMGokFRnfzyYnWhCoWErNDsxS2PXumXNb5dvkacAzuoup8XJsAHjxx8x5sXWafUYjCF1iXy5",
  "key13": "4McpiZnacoSPrbYfWZRTqmqHHmhPx8tvUGFE8otPoothGPSZPdbrB62CcgxX2Hm6LxH68NDip9honanL9YYSQ41F",
  "key14": "2xAzg3RUgUjYEz7ZXVtppXfwKZPDYqYWnka2xV4aPZ95nEXZLWv1HW5bRwfDs5kHkhKueuXqHgUjTEG96AozQQYi",
  "key15": "2U1ggUyh8hxReb1FUSeN5Sy59tZqwChRAeEZfi6R25PohwPjTdBQAPwViFQApkYb2Ed9E6B3jLKtT3UqENw7mTKa",
  "key16": "5KneipRHD5vFZE8HmJht2vMb1fAd6Zz2dcLKK4KDcS8vZVcyPoXPnvTtNraEBsvah9FmU98gFSxK3n5SQzSKZZWs",
  "key17": "2CzhPmAEeqvVkF4obQ659kbnSyawB4yFEYz3tHv7iqP6WkJEymibbYdYDCFAN46QnjL17wRZRwL8nBAfxhKcUV9R",
  "key18": "5fpSuwMnsYEG8BnrcH9iahQEiisrTfHsqEvjKMUDVWXR7R5nNwvpEUWHb3KydqM2dDadMWScW4i5EQyZpYnMXbt3",
  "key19": "3SExxYptqh8fjsKxdF3VAR1Mwu1m7Q69s4NkFNg7RE1WhiLkSx7ebqR8tgPsutJqPMBHnBQVPBJiMiBA28FqXZkK",
  "key20": "437EymFv7dqSJjYTwS2b5tFH5oaYDFVcnM6nLPjgyjj4PLrBPGedBzjVT9vheavn9UxFi8Xfh3HytnvCsAyG2cRG",
  "key21": "bAw5sdkZ7LyXo1rGxKG7t4NQWL9dyB3eMHp4N6DwekGZyLFwLn6fKCvetzfwszBa2XaLvf4v5JCQVohqYgQQXrn",
  "key22": "2jeV9oNtWBot8ZyWftm3XUcwRKBpYhazywMtMtFerdvdftoaNubGiv7sAVg23rk2v8Xye1yhhNRvUmeiHoBgJyEc",
  "key23": "9tEk6atBZBXMYs76jqpqVKoEhv5JL1eeewVi1czP7gZg4trj4i48pc1LCKreyDHxjBYxVzjWE1PRwPKeDXshpPC",
  "key24": "3whNcc6xukBj2LyDadTqinRZZ9fTPs7fSB4gWhUUrQk4nL1VHTRU2WRbpUZTfS8QQXKwW6ZkER2yFbZs37178fxy",
  "key25": "os9hPji1iCrra7NYRYpMAZiTwX1rKmnUeWbm7V2Nx8LFfMi5VngJsuyV9yrVR94h8ViFKTjP1Fjs2vMBFxo9tC5",
  "key26": "2MSqXADVVadQYtXtAedUe5N2MXwbnttCk3FqmsNof6uMzEP3mB8DkiwVGtUk2aUjiCDRnqUjomjTXFKd8XJttWHV",
  "key27": "5T3noaPaSUxW7Pk3zQdW5tnU2oWSjG1VEQGkStSwNRJk7LpRJusEAM6gbAHXka78qx36gqXWDTLimqZwmwMB7TXg",
  "key28": "BuLZePkfRPZziZMtFaiV5iAzPHG14tr3rQ3h9Mn5LCSi6UoseyBJLikYDX7QL4VM21r39UC727mmMuAwq9K3vBd",
  "key29": "4bBe1SoSC2tyD1PDKja8oNUUma9wpFVW7xZSyho3SJWBcv4VBHPjB2QkL7SoTR3jZLNGgW3L7vjWQNrugMMRAEek",
  "key30": "2Uu2kJyFqBbgmYdaSfdirqDV6Ww7tTbcCTAMSceLtyoU9zXUQaH2xKAqrHUELDubKkv2ohsmJUr6wofzFBoyYbfS",
  "key31": "5je7RZqzs2z4d5BMoiGUH21ft923M8bDS1Mpui7Zq4t8QAWtvzRzUJQWfHCS6AXFFmJ1peztw332ZKTrrCQv4PqC",
  "key32": "2GyDJQnbrj4Y35DhM7XdCtSLL7cen6CQKzGNebJQWdU3UEJNCaZ9RqX6vDLbTJzSx4zHeP8mWUUngTJ5W9rr4wAf",
  "key33": "jYLSF2Tc4DMZ4rp7VpNnZSLNZFu4zff73udCvg6TUw2LYykZubEWr3HYAgdgdtAHmHM5zKGTUgbX3v3LCK2qMDk",
  "key34": "2MtdaJVJdzwkErtC187mZUuF2T2ehfrZKPajCxBinekmRGgn4EHHc4u67VLTFjrNgSTxB5eiCZTEBqjj4tkGPnHb",
  "key35": "2mF7dySVV4VkP7caiE6shQYpPe16uwSYPPmZGy3novSRHxqRoFfZoWGyqEiJ5VqwhayxhDVxWvBCyFQt2B1rqHMi",
  "key36": "5MoiMkwE72peKCwdRaZQAKiQDzwJfvZa4KmGjYV6Cmgerb4raUGgro6wdUZinJciSAGFLLyqDAFezwJ8GsYks9mf"
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
