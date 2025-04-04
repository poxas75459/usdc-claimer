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
    "3oEj4jVd4wehjDbLZkwk9uuz4JshbEh9jJUp4Afm3hqEbbD1hJQ6edRmcLxsC5FPqzmxzAwDDDe5x3w2BwBucYde"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CY877dnLPqJZDnhnBH6z4R4zVoi17WGr6c8PASMJtK7WxhWrj7v7BsfQ6hcpMKchnCmd9A6q1oUSLsofGG8DzKB",
  "key1": "28bJFm6rzYmRyQA42MmnJDpxfU3T9Mtm3zdRbGync5sMJVXBmDkCFMeUA9AqcVRvqHceRoUPVrHcKMVqykAvEn9G",
  "key2": "3Pc8TK917FKWHbFHvyZGB4ne9EXnDaw3L8j4esz44oHgou49Nwgp7dSdP4tCXnEuVW76vXauMKVXg3uVWMChufk",
  "key3": "uTSy8viNyqq2DcL992oHian2uvTr9Svt2FLvXMVQYMb9mN6Kbm9Bd4YtqUbXNmA5fVD37U8E6B1Tjf8TmE2vMgq",
  "key4": "4TZShW26rRPpBy7jjD2SFBJE8cNs7f8DwcXEeZMXssLMK134oouHTNam68L1P3xqauomYq6cDY9p2ynnwJVAcKEa",
  "key5": "2n4ayL9C6Pw8og9DpYTwhYgtcAGN6mK5mMzQkumF3nf9CdzKPHibn4xY52bfy4p4ciFmDJvocDtzJYCksC7Y8uMx",
  "key6": "3bB3xr23YftSLxf2YSog8vABZ5foqKTxpDMNsTeupFaXYHGT4oovPWgqN45ZRt1QPJEVu4w7DSbq1DXaRG3Gf1x5",
  "key7": "54tX1e3RKCb3DxiiFaBgjhNt3jD8jMvcj62C667fokwVKCk5rVNvjLjZx1ZUwo7iMJzAeiKfoKXh2QYKrsd6i7JY",
  "key8": "7qPFTZTfmPVvZrA72mXVugMbDQ6oYuQGmigLHCFWxDVkv3w7cv8NAgr11E42mHLZYyShWPvA1exxJPbGgQPLBaD",
  "key9": "5H4dP7QWVnwtyyG7HMb6KHyTLn2KnKwoLqZGKy3A8N6McdfYrGzLaRSJ2Q6PxqSYEdDGTcWknfSguap5SgbfChAp",
  "key10": "2apoju9jbzoCixJb95fYEYJgDBQJin1gd6sbYCGRfsx797ei6X1ce93vYxYnNA3i3vJzk5iSQHSqJiwhsZyMctq9",
  "key11": "2RzoaXZcL3w7Tc9DGCZrfuxbs9qHf6bvHgTMuyQWubEJW3sfDiGNE7CY2YW91eLhtvFsSGizsExqraEjsTweQqK",
  "key12": "3cxugRAKxSYm28jDy1KcVKoVAG7He4A8UgjtTgFMKunGFyggNsyQSikfEq9g6uxg5vB8FcZMjW2sXxWc11AzzhaR",
  "key13": "42z5p5737YrZDn6as4FuoJ2nxUiByGdGWnFWz3nDsACWvBCT78ZKWUFZaBnLps4xgjLDpL46WaHTDrR1mNTXMhFi",
  "key14": "5aLUDZKw88GfTUm5NsUGkEBjTHDkG9otzkuPt93FQLWzZPQPbMK7W8KqaJRveV67k7WfXPpacFKvFS6uB8dB1dot",
  "key15": "3WZ2UgomDAw9bRtW8C6cLLYHeN1XLTSuP7ZyvXvQ6bck4HaQ4g8fZBHrqYaHDf9wwJkTgxcTx9yEtkrZhfnhmeiX",
  "key16": "4G41MCmrTFL384Ti3KdQFkEedfPJX6XdpFz4JNxUeQic6yqk5rVwr38SzGU7E9HDr4gcbV1jZekZ6LH4GQGDbPEK",
  "key17": "2AnrKTQtMxPEYE18TpNRaofuXmJXLLRU8n1cGKVHkCz2HPZryxVRMQPkbzMb4dFo2TK6f99yws7vUAu8o7qmwBMc",
  "key18": "3euNJ6p4ngRT92Vof6XFiSLwPevBshhZZbWqeM2hgu5ZUJH4W2Zz378KaccWLfgJWMwELdj1Agvz6n7ASnSr65px",
  "key19": "38XxsfnZeZuaXrAp6DcRon6xagiP481XTgRwZ51mjaqYmLZq5tnEFVuwhTWxNNknvChNGDb2Agg4amPWQjAxEE1a",
  "key20": "5b7NFqpvH2p5vTTPnvdLE3Gyp8gEA2mEKV1WYoAPXmManXFc7rZmUdrsnzi6MV2MDk814DWzBgYSXtbshKgjQE63",
  "key21": "2pom31BvaMNaiVWN9LjVZ1eHqGxHaQaHT9sfDExycdU3xUYMVf1mqiUxRqHP1ME4M5TbwNHWep8XqAFJDgGzekeU",
  "key22": "6133XieXTm1m3xpL3hf78MmJVF57ccRw15TSr7QG6Ztrjkg82qJCthM3tHUk8kWX1FUce567vzmditejTG7mJPYr",
  "key23": "5XGeiiY38PFqu1HJSiSSRyfxvMeZqKAEVVWocDCFxThs27ivtYXQZedZqp1Pg9jUzEQUUggwVDQvaeMA2aysr2BJ",
  "key24": "2pNPZn2vbGHVffzadEZb5DCet1vdRZBNfcVi9fCVvnmkfWnVeHZf3y63YDqt1RXSzc24DbMrbgVejCuvKE8QQDTK",
  "key25": "4LDrUNAovQXHmi8KdW2oH8UncBWpWKQy58oY7CFMSzV2rt8ja7oJoki51s3GqGPxB7bFhCM4HLLnUF7bJo3pC5Xm",
  "key26": "smq2LfrJTXq8ZBrpSyq5ZmJFivJ7GpgtGY5Kp5fGo5jhkEjbB4FQHnetYL5zKckjuw5J9VQ3wY2B61uyx5Reb7o",
  "key27": "K7vRqkYurdT4yXFchkGi8FfqRg3aK7sgvAcNhe7SQdQ51xF8CMVZeSswbSZYoWMBDUBjyaqJYGNrggsTqnGJxTF",
  "key28": "5vLRfnay555XuDi6b4JCEhKsU9GF1RFxj8jx2viXuwixWg9Y7mXtHAsiRqJJZT3jrgLZEpbBJ8KN4E4oywCBLR35",
  "key29": "83eNZDgVw5rToHsygYwv9i9vZVzHhzbyHqQzEz93tJvjJziX8PfXkeuZsDiwZE56pxsdeSUG2GNk1XvpLcUBHpW",
  "key30": "2V87g1U5LVnXvM7pf5cFtgf6PajTVNW8KYEcjTsxy17GvYKyUNFmXRz8ihpmzBtGDYhMewYkFFxX6bfeYwpUEX23",
  "key31": "5ayKPLGNBsthYTTFDAQrxz4DvvhNLMY6S8rZQN1tyMRodkvkE5oekq5SexP3x4wYayQDhW42Fb7Ruh2ZuucrpC5a",
  "key32": "4r39kTnR2CVMiEcozo1QQaQgpTcJcrcqkhTW5Hh7e9ios5BHYDJ2YdMoth7cDisPLAeQiJfZnr5uJsnq5LZZN9hs",
  "key33": "5nnjLveeP9kNgLKkhdG3NthvUhvVNbgvXCN32kwP5U8C6xdVrkzdRaQjvHgwPrRSVZHZt5omnDckdG2J6NDNKDWp",
  "key34": "3xRZfRxrQHePShjJo4qJ7CEV1pzYGE1Pi7v8AUw4AH6v8Zvrq6Mqo1k1PkikBpF7ZnQH6b1ErLszGASQWBCbKMZm",
  "key35": "41t2zWdDigrGEJYsgbF4Y8nhu7NQiWmBGypCcBfGqQSqxK2E9TD8U5BWmVqHcqqYTmuTYN1isEiUGpX8wydjM2p3",
  "key36": "2s8zSjmUjF4hvwMvJfsTqufypdTKySvquGtpDC1ohJnLno2QGgo3VQ8BXvQsYkqp51YqoBp7xeut9nMvgJshfHb5",
  "key37": "3DbncP2LVqDJCYz6Mdzy5CkB4nLCu1VBkA9uCZWnmKFvB89LaoYbDhpRuNrqUWJLYgcQZhMfTzV58UtXzYmM175e",
  "key38": "5x2o6tTJJKTSCVdZ71ViFSG3GKdgaNpZuJU1xoZrVTsT8G2k3sjsEM3Y8R9JZiwnfqMHCba5DcsUzL8s2Vkx5KzH",
  "key39": "3xjQvRa3gWVNh72YreYyYDkrDuRYrT1JVT5to5reaHhP4VedVbpd541XS49ytJK7fhEjC6HBhEfveeJWwugg42Mr",
  "key40": "5jE9Avd6KPt6tVkfhPMu4abymc9SyVDgUtV1x2RGZf18xGVMZXvAvfktkY1XrxejLY9kbq6FQwJd1c6eDb4XVavG"
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
