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
    "4kSEfJUhyGiX1eTQcpKXqYYz2pDEjgRBhTiCw41VGL3KQCjqeWnDt9fzWj3jbHgGZC7Npty6w9bGiSte9u7kgy1q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DucowCaWtRFrA1haqQhSpfn5Xa9qe6rQym9yde1aDsYrH9bCuMphdEvySYmYqZLkPbr3UzsPDmGe5v9S4e9cmMk",
  "key1": "583YPkJGjiEDRgKxG2yF7A5Jvt8HCHFDx2AbuzBStaYCEakGVyUvUUhaZophpnwKoB7v9vGrvzU2cqKnGJbCTPz3",
  "key2": "2KXTeWjRxUJC97vJJyCaJD3TbvbdXJh5GGAn4hBAGgj8L12DZDBM8AHbS7x4LAnCbyg5Lcq9g5S8umFN8as5J7Pq",
  "key3": "4DRKmUjnAu24cEHTn9VjnH3mYuQ753uEwePyMEDDw9vuzufQAvEPHdGYEz3XqvhPBLhMmQNEs7DxXBHXFaomyPVa",
  "key4": "2xqWBxvKNqRQMBz7XcuEVBQ226rYbC7zebmkR5WMk9ecQv3pHVWt9GD8pFcTMMRk2ifzFPQX3iFHdaSUacNkFBn1",
  "key5": "4MJFbHBFpXQS6yocPRwD83xJjAcdD5e9FReTHzv6KbgosPzyjDk5AvHaGoSUVNyik2Eh8zrP8V2mfNfun7o2EqTU",
  "key6": "3gk7jXS2wbp4DLRAhoNpH1gwxxWGDyJ6fFUsAtwHv8cYwFjXCcKwjufUgNGMWLgLguQc7BksWhYkE6rm2J31AD1v",
  "key7": "5t5MCNu5Uzn2Qp6CxoZwLEm3EuyvsuNyAuF3cfRnuZqbQYWEKgLsHXXhWeyErJC6CwuvBGADTdGqhy6B9LaSHHUa",
  "key8": "2817c581DwBnjTxEq6pFBrwt7JqeiUHXn9cCRXaGKYkEoCN7y3otf9px2haiewus2Tqaz4JeSJGVSaV8jThfVSdM",
  "key9": "4n4NCTYkDrMpczg7vzxRkFZqMPnY7LFpqnMaiWRPBMv1M1GfudzPTKq1R2AYdT3o37AB4PpsfXPWuCgNbLJKtMpx",
  "key10": "L3a3n1Rh1NqD5b5q9wsbSckiVr7HbEMxvvP31ziB85EXGN3aGe12urZupHXwJoHeQWrfmpb6fFQ7aGXGaJz3XvU",
  "key11": "8ZZJkD8uvShPWykm4ErYAJonRMYxkqRhjsj6c5bgjKjv8FoQJsZi9edU9a1mC6QDJwtwZ4jJQU3S54R7yEmDwtd",
  "key12": "4CEi7DkUHP3SW2FTWQnS1FnoSoPPEabB3jKThqJpdspVhNmyfES1YBFfjdxhJ6QxoNxGf3QNuvvC57EyLYjQ72Ct",
  "key13": "2geLYG2v2JjjL3es3pFSQU4RXEkCHdUMSWRzEJAEgMRLNVMBtbZ9MqUP7xWoKZxARHdwh4CZtXP5mgTfSowZMjJD",
  "key14": "wFHHHBTjz11MknDHgZcyfMWttk4Zd9Am9TdkVGmXCFdWFkxmZECoTk7hRWvW1C267HEzxaj76cza2yTq8LhVYAX",
  "key15": "9QEpt6TdsjuPgG1M2sGkRzuYibyuW2SgHHAWWGT6kBdeai9oNRJp3NojvNsfNHr2CWK1JEudZqsrZLP5rxsEgCK",
  "key16": "2j3JdDaE9SQ8B19FajCmBYE8NL4ESFwZzCRps4y83DZpgvECfP4FieHGR7dz1sxzsV7r8XtfAkfRTW5fJfsTM3Wk",
  "key17": "4ELF7vJrweCJqp37pXeVAKiVwUX7XMkWMBMS6EKLxgjB8aFWn5PApdggvHCZDawC8HbJVwunfpy5ujpZZeNFPNYW",
  "key18": "52y37NsQYHBqbSwiQvPpsHogf8DnhR46LwPAneavCayZkWVXRtTLw6mLFqMp1e1efuN5zzpCYRZFVSJCyqnQHVar",
  "key19": "Q1tHdrmhxi7wEmRtcmiZ8DaVxH2twRB5AZ4ZQbnKVtVetK1LTXVVbLz3FJ9SGzmvfuCgfjkBPSU1MP83knoAzfa",
  "key20": "2YVvQNUfjRfBaX78i1Br27hcejjMbAyAprHwbCHLbdPm5XuGUs9VUxMRnDaFuynfnFJPqBmSj9DLxGwT4rLYsApd",
  "key21": "3aSX5yKQg9W9samY8qCPGbNpbYkzjY3PVR1mfZGpzxrkXggtEWKVBeaMshZfHtbKDkL4Xp56kow1nQAwoYwaukui",
  "key22": "23Cte5pNq5v9Eh33GnbaKVv7jLMzjcKm4ptBhUSeCr3aKcn7bskxWFjkMchCfSWub9K21KaPHXJa6k8Lb8z1HtY7",
  "key23": "47d7WVSN2Csby4Rfo3PesUKcNMVtEt9aEVbi7kkkN4QkZFWmhR9Byt6vbhz9tDKQgC6AkPCJP6qCDqRpp9xPP6je",
  "key24": "2nZr5kDv4UeoeTiREWm4cMyn75J8qgbPvBL33sXW1ev9YWdJem8nCHeyqnSN3LEQGamCPkD7yp9QWUTWQSHekEey",
  "key25": "4Ar8zq9pRtJTzeUbPLfugoTNj8bFA3FNk6M5YmJeRZqxM6TzAB6MFDCW9ZBVR5vTaix9uUAL8PDyfnJga4TfdQYB",
  "key26": "5z92Z2mgB9DvvHsiNiKrz7Nnv46FMX2H8LkhGyt9JiFa2yMUyTmGrajUD61B5Ct9CCdXJTwAy8AJD5tNKtLZnpJ7",
  "key27": "2RwvTw5J4fp73H9dAi9CWCqVNX2oXs19tbUfWHjtj44m2UzpJNMd4QCrEy3zh6hXZ57mvWuycRjh8Df1vzewuia8",
  "key28": "2znizqAaPJCjjAwrtcUCjCb8odx5DaKRyQ4GjeF927zowsuiy9HBUiPiobYrRQQ8URBrdta34GHSEEqKr9xgsKTu",
  "key29": "5np9QYoLAhuaDjfPxFwcHuLZssv47xyNHRr2HQ7uCvCQ5PnruGmynnkKhkqWC6SWGsZBWuTY8pPTeJRrPZUzihUZ",
  "key30": "2dRQp2HmThdn2aRZD1YHgwyUqshjXtwZNDZHEVxM2E7Cxwz9wMrtCAUZQQonHKnLvKcuCJ2LHMWsAznuXQD3wHrB",
  "key31": "2eHHZWeWyk9m7Rhn8X1Msu1wMSCA5mGFqHLNVnaLgnzG2a7FDabcokSgTHYwBFMMMdfYtW9z9cYQ8s5G6EMgsRie",
  "key32": "57W8VXQSNgAAEAmXfGEY7Gzt96i2bZcxUrZcxoVrbiwfgzh2XmoF1fEbXzhgxbNiHKx2QLWPRf22FjodNPdshDXZ",
  "key33": "5ZvAM4nehiHVSs4DeHjWiRxyQsB4bnYnbqLCpKe1GzZzTDstXQsUTzXWU5VNFjAhcwESRV6opV6HV4UpX1UmkLdY",
  "key34": "5kNub3ogk1AVMUwEhBTHtLZX9aT48kxjATVWthiRUMHegJiV3tvrqcFxdaRJD3jZ2NGxesfP5ESZZxSQWwh1cwJL",
  "key35": "Vtqq1yuPwsQEjeAYa5h1RnMF6mjSSs2U2Ac5YJMywZ2ooKy9M25isYdQJ1VGj5Uza3ugCrfA7kUjegHeTa3Kf4f",
  "key36": "662b85B1XBp7DXMEkuWycV69F32qqLFUWyLjoBEDfuy6K6tdi8jb7c81bpNEm1o5dfHn9AW2M7UKJ3C2u4Gvb82x",
  "key37": "2Kst44prn48GEWAKY7g2XPyVcz6Fz4guYcJH7PkZjnXQUpczPYdrRLmErUryCY8QzgCzZhPF9xmcEH9UCfkV9b6X",
  "key38": "4qMMZemESW1K7eGcMeKdBxmY2e4ky7itQXFonos1R8eCR4ek4wBF9NScU1yn7TC7LjZKXBWikyfK6oFmZqZs7u59",
  "key39": "57YASrNtJhU8u4SJhfXXK6ZScjQaCVmEMfNan9M6PwRjUCjJx8XRka9X4Q3dUrZd4ywm37Nv1nQw5UT1qh1Wr83e",
  "key40": "3k1zzDYBwHmCUpGvcqNw32rxnaNdN8yHG1CaSQRtQkUzCsevrVAe5FjYm83gSYcqwJkqf82yzEQ61tbyoraKt2L7",
  "key41": "3ANDqNQKbyn3EjeEd8UsCnfreu9Rhs7UEuPE58B9N53ft9uMC3tc5ENhsjSCGYd2n9ATrN1B7iMrpcbWWCDspJMt",
  "key42": "5mXoT9gsYUoQbAv9WhonC8Lty7BxXRvpX3qMDGBVyizbDWmGGhNoPafh5bjCGQv5ZUcj9SfWQX2kEe3xAuZeDG1a",
  "key43": "w9hXfUK53vrVShx1aYuogUuJmGQ9hZoReymPudnoDWMfZjhnHtdaTX7uV2kuERDyoD6wBPfZPmabXK2WQXJMpsK"
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
