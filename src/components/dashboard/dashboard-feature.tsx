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
    "4hFxJtwjjFj2JdcFLDQYpdJ9iCss5mgkahwomgAYH7U2j1GZhDgx5Q2JA5uhknERBMEwqR2o7jFJiytM36LkYKFY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LVk9WoTUQJGBGemjAL81B1MtbyGcRBeGyKBJdzGyh12HrsXJ3HojUryqKPptKEDiwi6RiHPaRR2mEFnBqjeuTsU",
  "key1": "33zXoscyaAWp4v13xtRWV12k2Q1TQL8PfVNjTSxEEXBkMHfPCcKNr2XKDxH9dWTBVUKi3i9SXUXMj8E2b6pvzLRM",
  "key2": "4SEh2Ae1NLhg82TcfyESJq2ST7njGcnXshaNZDBKq8hMc3x6cMmszZkj9qqdGuFAp7GDRZ3eFQs2j6md2ipiYf1C",
  "key3": "5ucNJ4w3Z1ncGCF61ANsygMAC76vDk5M25yqEiczBHoAz8zbFxrp4yCXELusDZ2rykQLrXXsX5a6495ngVdotbZT",
  "key4": "2LFRMaXX9CLawVLzTcJv7VH8kQ4WxgCxPnB1dWK1BtjAQH3VQHaGqbYr9xDxKoe77p1VUduaAEEPN7nW8YM9pczj",
  "key5": "5q5rDRviArfu7iPRG6JwbXcvE3AgEs7qUTaG9EXcso932FVhgwE3WojycsuJNz5yffgmVT1HZwcBdXDFjzo4wNQW",
  "key6": "3ox6wkWJfDZroW4jkNyABv449fi5rXD3vRL7eJoi32nTptDyUUBkJb5ZfmNRUkchJ1Vuuf98w6asaUpDJbd8zkkp",
  "key7": "4Uc2o8PorsCSjnHtEbP52xS5qeoZihdCi1yjjxd9bJvAReumGvM4R8pTUhshNYJQsWsXYVw6hujNrLyEQKtrWGfA",
  "key8": "4ArophJDt5WppZC2KqRwYpf6yBCbFnRQoNZ2H2dFpGcJaBz8B9U6WaJbN6K1USSvF56KxdVcWSbi4iffcfT4BuwS",
  "key9": "2cy2L1CTBHEZ4WxGrFXgbUzDc3XFiqDrH3BRpqsPGLTuoRHTewNNhEhFqwpjwPfHYMhMmjGKVYkAuxLEVXvYG38V",
  "key10": "57w32rSH3WrpeNYmmUHXtGyzn1uoGqZJ74jzwskXyCtz2D5YJmJq2oQ3nVfdyfW6Smp4Xq6KWjXgFgq4pEUG7U7E",
  "key11": "3GDp3k4ySdqUmcjW1qEAySJDoXCd5jmJuK2X7hEoqS3BYREavoZ5jgGMu2KcvqD5uA9gWRQrhQxaMP17ZUone7nM",
  "key12": "5ipE5SsCvr8AFpneAQ1U3kzzkLoWH5iaKCQYgSPiwY1x5udPfkTxBkjd5EnmFpYCZXCHHMmTHnmNVbESJqbGinmZ",
  "key13": "2oGw6bqf5yBS6putA4J7Cy3ALZtkQHnt2YufcuyAU66Rzn63DZcqN4gYQAC9AqFhLg9i2rdFTPh4BaWFWHmv7bxn",
  "key14": "3M6g2kXub32bxNvWTi735m6BkJvBPsmy6npZatsTBMuWX9N9kEHTkLMvNAhvNsKsbf7NoU6nj77GdR7tSVEct5XA",
  "key15": "gkN8i2FH98VH7FSfN7Hkvgh2Y9ajmEs8NL5GuYks7wemfo2jYrv4MSYeYpz62RZ3dr6LcnXMph2akMu8Qua87SV",
  "key16": "3aS6aKPPhjfPRjd5F8ZsaEMnV9re9fKeN3VyGsxms1Yz9cGaagqyiSTrqzVM9YG1baCrexC8EX8UHBLnGfxq3o2A",
  "key17": "4x18Tu4gyBwfihPibimeYD1WcJcfcDFYBHC6v3m7Nmt3TjNqjBhazfDD8cJAksEhGxFF9diw6vdhz2zDSuhddu75",
  "key18": "EE3SKPf5j66efBnZZhxbiZ7oKG42GxU3FvgQjg78FcLVEN5qdmwwzoeYhJU5voAmu112YHzPurc7g4vpw3XZcV8",
  "key19": "5cWhiMiMwMGUavZm23qzm384Hauh2r7xUdGg36GxgikJikp8FoBej4JAFQnudBuvNDyP32g76GwFd9MsFcndDQQy",
  "key20": "334HepsQpx7JcyumH5PvSWyoN6CkUxG6uzthZXMS1TCwogdsNqi6aptCPwTUJQoJ9uJWxkcgBym1HNzL4tzdwnvL",
  "key21": "CeyxQW5SDW6h1K38FzhM9wKvZZQbZYMzYepAgU8yRXg9XHLxvQxp9snAQm6nau71ctv2scrQxUsKV5fHLJN1aSB",
  "key22": "4UBNKsZ4v27fXQnNu5G2wAtKuKFKeE3GHyMZotaPSJtW5KV9es4Pnn4eLamDkhrunn7joubAWLie3eXQeTJXXNJ3",
  "key23": "61qEhXMXF2zh6DEBoNCpyVUqS7whPw9kXyFmDmnY916sgMo1V24TLcoR2A7eNGcgymgzPnZeWinMDmb1PSW8b9JJ",
  "key24": "5aohjjxtXvkooEkHg8sBHhQ84yQxKh9cHiKkDz6PTq1FQqENqnWwjmvQrhRU9QnDG2tLCMrYCz3NYN6qrE7eNVGs"
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
