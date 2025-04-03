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
    "edweCZE59WUVSDf49ZGjhy48QkXbd6K3PN5JLoaXYXx7auRNZ8K6xddaQvuXLP7f5iqCYRwkfZPT9iVnBnjmVsa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V5TLX7AG7c1C5Nd5fSpFbhvmnLm4HHZYD5dbqXAT6eGB9TraHi4cCqBv13XPvGopBLfxVqKjgULbnwkjjeJa4rF",
  "key1": "Tqh1BUM621KyqUMHs5SYk8WjDi7J9kNYYSWSaqmiq4dnPtHB4N4mXuWzBCH4UoyfjsLNcriR3g15JRULoDFFjzi",
  "key2": "qq4SPG8KZXKdGy7ig5cduSeGtsLnfriYxXfG1UiseNSriuVRCRaAmhtnVmJmtJjE1AM9AyMXvGTb4Jq5gdsBGvo",
  "key3": "3to7P5L6EvSiin4Tc66ZEj7mLgb4tcLUReYEior6gPNp2v7egkxsyaCbynHPNcwjTYw3xQwM5QHtFfweAkNvgwdu",
  "key4": "5742Kk75k8oHUSAnKyTkdThaXinQucQWKnWGxrfjKCnssJdQWU7ApEhowMPuqihB8HDZGSiN8oekCEjt7XqsU4Hj",
  "key5": "3EJube5nP5pLvBicUkhtjH5Dm1AzGGFAVMYy55f22p7rZze3HGmWjM2bMwbUoz9mGV1TXzWUcAHHnxuaV3YJaPJB",
  "key6": "WSS5N1XxVfwanUkmM6CAcmRWpAdWgm6owrYE6nWbm4W11HVgDJ8auMKQZTf2F6gk5pqaBcXToPzPECGkurDxAkS",
  "key7": "47sABzvxVkDmA3WE9cvFNbd2DZDftgXNFN913Qx1wec8WpqBmWJSSK4ajiMmAoVxZUMkENLf9pm8Lnn3PMMKuFBv",
  "key8": "5uTzHoHrVBybqeeTbduNqM8xkvio925AWJRDKeV9jvixwZC2qVNGHbKJjT8GSztGvonrRM8T57EvdhhPfVrhFSE5",
  "key9": "4xutPwop9UWvd8EcEoZyQYYeiSmTRXM2tPuQWe3b4HLusEyZA6162fHAme742WTk8K8wampiP9914rvxF71UFp3L",
  "key10": "4Ds1mLWZqPgVqRCpr4cnY33DwyH8DMUEdbkzhYXaKoCcEc3wdotiDviUBNms8NGFroNXT6Nb8nTiHeAiqwR9HaXc",
  "key11": "5tzybVE9dYZdWFUbUWXzmFiSTYzESxXsnMcfZtLbAueqbZApHrr5YeutfFNhzNj8pBxGf4U81mY7c7trMQQ8BoUD",
  "key12": "44YyVBFhZE4YGjXKTTSJtVxejpeaVoXLtbdPKyT8NL8hn9eqtNKWZg83FFkvURDu1Rc2795oDfjFC3oW5yDoBfBL",
  "key13": "3RpeZvVz8pY8Y1o2h4fH2Q1arM49Y6fLgniWJhPaBWGp5j6bsDRZRtCsdaMvpbKbtTZZDc2L41qVt79KrYBwcDUK",
  "key14": "4tUwRkZh3gKJWPKHAgGerx8bhbtKHao1EyToJMDQjgtctmueQNLzDS9mDGktzY3hT94BvXFJhmjpDSD7xwQEYiNq",
  "key15": "5jg3ZFh9Ey23DHspeT2xyXXRh2yauxR3twt1UsYCNrvxtb4JReUuJ8AwKkAg7QJQdsYcV8aBdLy6KA1QAdZwrDGF",
  "key16": "2QTjbAwPvYj6Krm6qt26U6DV26v28PavsFw5btvrKhpj2dLTv62HmFSeC77N7Zv5ftLLpq8T6pTTytgtzbTCyKSz",
  "key17": "mCnDxQgGiHrvB8XxkyUsegFCKEu2SaURwbj7pF5z6xnkKATrHuWvERfvUEzSwzKAMmHzc6rbwSMUp2KKgCM3vkN",
  "key18": "2nFBHx9kqMKT9cbwGRereBYP5EpgSiZWN3CvZyAZhQi2umb5jat8hKMCC83iQU5u92ZeoNF5GapPZRxTcPKX6dFP",
  "key19": "4PPqRbmTXpyuF6iEtNingrQ5qkTksqXqpJhe2pFLTz2wWV33Wau7B77CfoeeLnqUUrAknJvYEpnyvC7yfCEeiYWE",
  "key20": "2i7xCf6ojthu8uAQFgg929ayPJhqL5Dn1aafq6y3yr2NM6d9AZwEVY6r459A1wRWHVuvNSh6d3ZwXmfexBfZaPgb",
  "key21": "36pczdDwuuT3xYL4q3axpziVsXJrfAVLXLbrt63uiiQN3eAHx9wnuDDQDquqmPvZqSMf3uiUcVXvGAqvGY9KAnfg",
  "key22": "2TZfnX3ssshHRwrkKThGbBR8bLQ5VWHQvVf56CNYS8P43SpwB8CMGN8n9VzrTmtnZH9bXy9G45gnYs13qvHNyTaL",
  "key23": "3fvjXNb3kzQsAfXpAcYc664sjLnvD6tKjZFEfYfPKnYPr57xbY6ZR1QFbXa3EaZ3vqXeCjTuzAhCyoJzmpySiGu6",
  "key24": "5Hrcm9PJfqrZaCpS76tdib92m8wPwDbbnB9JbAciRGT9TaQ4x7xCy8p7AZAmg6jfgPJeh3gv5RLhHLS1MYuBkZvt",
  "key25": "53jk1a97bjL7Nd5vmtxB17txhW3tCwBqHtwysadocVGUXwVLfbfkgmfvTx2gUQBvT6Bno5hdcnZ2J4kGBduxkdKp",
  "key26": "2sQMQfXYFnLtvYxgdKFMMgGd6geMXoKS4eGBdwtpEiDNdNGufXPDHxCH6LF8TRPcb9Wj7aUN6nmdSZ2bQfmiSQaX",
  "key27": "3S6WiZJeTyzfWnB8XNgoSHbG4yHrcbvWmGPDfjRxyL4LyA1RS1sig4DRNSo6XXQj86dvJ4xghaEFUsKJx1MKezqB",
  "key28": "5Y2ZX9YqqQAgBfBtxvrQn4zXREdM2UU2LrA4zvG6yy9cXm9KP9awxKnyZ66gaeqJpjMAgK2BcYW72EH7BjQzXjr2",
  "key29": "36L1hKFXhbFvkD5FTiUFurQNJvCYLbW7cS1p8ZJt38WAvt7gfoymfwzC657YtX2goEQFsPUm1zZhysgF4r2RZmz4",
  "key30": "26kgM2qgJWzWv96ATfgUp7osysHSJMeZLwfFsyQVGVEmu7svbknfPEfia4qDK9KuSwRbysiaHf7ZSbk5AexPz557",
  "key31": "LcQkfXJjm1PKEtnFarxMQztw4MxFVX2xsFrYF8fweiKwYF4cSZmH3b5zSApKDHtK7x36MBgKfXddG6z9qg7g1iW",
  "key32": "3nei3r3aYgqAXy8Hrqiy5urPQpZbdq1EeWSqjwXR6mb5AbRYNhcDwzCr7FsDQnoRHeFmZGdt29TEWq9NDAsSCcKf",
  "key33": "2BqtgjrmLbgTruSaiEMvN2Z2qkteQqHcY8DkHjdx2KkFRYt1H8agRdmwXFdbymGUoPPRCUpp5QhSuAM9Hr8jGr2F",
  "key34": "5XpAfFNmioZWmX1Lxxpx9DwbuGTLYgp6rLJMCjHMEXL76f4mYL2hkgzhife94ygHuoyqKzpaCwve6rcPBsBYFHaL",
  "key35": "3ut5mCrV8tbGukyqNPi3ZSv7s1NKskTTggsXAbK5PUfSVmCckmVZ4VyxKFmGKo6j3BJ6ns2rN1hcqNRrPEAi2xvH",
  "key36": "7EzA3Hb76VEFDBZJA3mLU368pXcp8G2Tsz1ePCnPLiBYv9XK16fdTL4qLbBPc5dJVkJdoyDPUvWMwu4GhFSSrEF",
  "key37": "4iEkhYL6qZf2T97PevoLybLGopL8HEaHCPrWyGL45dyiGS49pWoLzqUP94cVGWjo1mjDWUUbCry4UbWcwrQbZBoL",
  "key38": "2t5fa51nf1dkmEuKhU7UDf4xi6a9ezybopa2gkX8jh4xoZJVpmWVvax6DQWHMFBBCZLMg8TwFrHeewVdWqdf64Tk"
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
