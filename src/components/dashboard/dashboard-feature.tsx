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
    "2n1adqfCzpY2H7vydfbi9uit11xZUwV9XxcykKGoxdpUgAU1Q5czqY2ELt9uyWeHVtfMW2sdk6mqUrQT5mtsy7Jw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qACXxaznU3HbDhQudgNVpPhMUrLmMWUy4D3hfZ2EJZEHjtqbhd13mKesBCzqeg2394RjrBhi7RUGSUnQqTGi6y6",
  "key1": "4iae5nJMiRG6t2znD87Z6xZ1udw8JrPyjAKxruyvqBR4LtCJNfwDiuetDhsW4ZHykxB7ra7U97KKJJCYqeJKe9hF",
  "key2": "5vmi293k2VF3bvZgt8LhzzErJStPJZuwfJQMYj7JoF1WSrnudoW2gjA6k2cX744r7R41D1eanreBgUignztHd4WS",
  "key3": "5H8dRbhqqCiECJRRwKHWd1Kwve3hzzeGy9hb95dr8YEmf11gNZTaa6EyzCbL8hLorKgWgvLeewjH5DVgkRQqNA9p",
  "key4": "3JqP1JaHmZiHDJHuaaxywJXNnq3hLBKzuyKg68iLNdtdYvxJLHXidqcKcS3sXm27SJy1JJ849EXdLMiPc9sS8hUE",
  "key5": "Y1wEQdG6hvkgGpLVTsLwGeaBMXkNC8ATNUUJrsRBmGuMnGp84Hs6eem5E3U9nfTHu1AnJVJmWMzY8JkKtJtSj43",
  "key6": "3i2aagmJYURN1LiLMZd3PbLhLuR9DTTGbrqYFEHTvtsZoVLCgLtnv5GSqoUWiJ6bQpnRC3h2XsvBSDh2pWANGqi7",
  "key7": "51gmRKuoZkkNxN45bNavqZhrgAdWAAvH5ehpnCkmSQ6zPr9QGjKXyqCN9TLF5kgyCVAqZR4NYWeUhCfwdfHijqd4",
  "key8": "4numLdn12KoZ5kmka81Lp42d2E2N9WDnepQAiEMQSA8WPAMjrfU4dcKVE3bE7ukc2U9TrQzTqUXVeYRJmKJwBYYw",
  "key9": "3GG7EdhY3hK5QtyCoQ2M1KtiBokosQm14mAU3MvBVZ1LKMy3aBeyNEAHwWWXvyQ2LRR67XrykmVpGCrhAfKze6Ed",
  "key10": "3CQMNQNUe276MBanBvgkhowCspPDjEN82QyoBshYK9ACVNKA9H9wPJxDafkJpqGB6Qv85yhUJD5EjLzh5JdsAcQm",
  "key11": "fYaoSVSFNmWPxzsxrgPBC5fvPiUeFoXpHf4fvwY3EWdgeAFL6A6swXFq5rc7psztJbYV4zrnRfhvEbmWqSATBpj",
  "key12": "4V7zgkurm4NUigAhXN7kEXFowCLvdXprBrVNszcJiRnYesX4YifLSazHYACDK8m7dJqvX1e8PDTdkbotTYiSS42c",
  "key13": "5WBLRcnhn9ZfWaqtW4bY1auuqhUMAEcyFVG3GYgJ8x9Qa24uDAb8D8VacnH1FPECTHyUb5TTGudPvhgvdJRfXHgr",
  "key14": "3uXiWo864nFaLYhK4kChCX3LeH9cXZ7xzCEubUQ3VXhBDTryJkQPFaCD94txkMtJU7Fyi8LLqhbCLUdBqZHWyAon",
  "key15": "57qS5u2UqDksLgAFQs6E3oChD3F9FANMHH2R7RcEHJhPK61foKkGymKr8n6UqQ8ddvoo8M2Qnnv9JyV8CLhw82fU",
  "key16": "33foxVvFNU5EaZwMj72vMVkgRHMTfkdYU463vDfSSnA1igJsybYkaTqStJFHi3mLd1j8JziHR3MdZBEuhNFnWXLN",
  "key17": "2zzK6B4gANTb2wJN3BhPt7VmQnFaXs5A7YS4ptQDbnY3WDJdPGJM4J5cQ1Uy2wRaEXFY6ZbwXkmsjqYVr5raNuSM",
  "key18": "5rRjCGWpEXrKdHDCRLjYtreQ5NMBkpp5GRHFnfBgBUEtQt2HHN4Ah2estgfvqXPErk22CxMdknMTPZW1yzyBsd3b",
  "key19": "KqadzJZBFbbLEAvjHbnuCWJWXK7nxMWYhrzTQFZYsn9WxZrNfwrZerftFfEJzPhgWjthNHWsK9Kr64mV9NHw1Dt",
  "key20": "3jGDQbZEeVXQjvQarjDY6j5r1kJ7ftymwRGTVRyfzBp7W2fm5mL1wdZhP1ppfzm8Y5VJsyVtoSnLXG8Swrsz7PqC",
  "key21": "5eF5gzds9zKDitGmWry8xzfunHch5QXDkjF21A7o2oVYvSeDC5yiYuvVWQ5n8JtgdGkDCBE5nLf49z5zGLFBGyfv",
  "key22": "5GH5cGDU2xzBHHCtKBi4T1mPQNvQ1QEcKm2ByvY9puqRfyXAUK7aqA8E5BmwxGKRaD6vSPSmjUhysHpwRcWBAZfU",
  "key23": "5b7hD4ZGJrSHR9ew7u2uR7WuVzRTgww6sGrXoYCZMZa84Jwae9FFD4Qb756iTeCoB2CP7cFWGfFA5ayKAZ1wiuAE",
  "key24": "3nEsioTu3fs4JE1Rs9UwhbJstCygEcXSE82GfCb3QV4QpvVxovLdTUeX2QDzdEsyWTuVFo8phpMFxHC8tSMMhige",
  "key25": "3NjjjZLRVU8Ev2QJn9B3QkeH5wWncnRER6aZWqgnsG2vgnX5V54mQWFHW2ppKefykBbpnnjUv1oZ6mGz4JrQxauN",
  "key26": "5qLpU8tuvcTYb64hS5LT98CvoCprZgVjSkLeQbwAWUaxFLqdVdaqwHYhDuwieNwakBnx8tGSeBDfFV78gpAvkaB4",
  "key27": "4SDRMuf2S8CRWE3B9jtdoPU7HbwzqbmaEQ3fHhmZbMAxp8oMFXiHQXtaZj1nePppCyNdEDqzE4BBE11oGA7ouGXS",
  "key28": "5owQrWtNP5H2dq6AVZQX2qSVkWE7UWLKgStMrhYQeDkNaF2fQUhanDYm9dbaVde44eYjQeviYTonbf8kKTG7mg4h",
  "key29": "53L3SWxduefskqQeHnzemzW1RNJhJ5sGi5R2yT9XPJN9Cy4vc5YTu8nmrFdPh7cujHQ7G1QEb11A5iGUVZNXMikk",
  "key30": "4tMoFv9rXeCy6US7K4HkiLNraJJMtu9R7i7YbHoJkpCgfp2Aufjg9VQyEqDkFrKjzkWcRM4b3x7thi3YVChdhEvs",
  "key31": "3y4cM8saQVscvxdHQfE24BxPfqAzwqMqkRNU2jc5kTfwQLUvLpR2krouDjskDLtxzJe2hWGYreYpahPS4X6E6wZw",
  "key32": "3skuTwij42k2ZCvPfu9K5geXCpQwritaanoDKxqHG8WLi3nNQJF87rf2h3wbXsh9W9uybtdowoF296gr4JfJKDtH",
  "key33": "3jfFyTfzgQtjYFfY12ZxshKh8eJbNfDL92v8rr4KjtoRUiu1VEcY6xqfokbh6X8smdyUimXkhqqR6dYQC1vMpaTV",
  "key34": "2iubsNhLEm6DuV2utYZeXRa2jtEBXWZTjgVMSt9iuenH4uKZSKAi15nAziYHWFeFpc57EJRr2XxGMVxHG4NmCQ4H",
  "key35": "3vLnvSw1FXNiCndGk5ffdNUU4cMf63p1fTTM5CHh4R4DjjJu8rBq8pasRyNapfQ43pLKHyZBLR9674ahG8mrbWer",
  "key36": "5KwL8DzJ6jRNv4ZiAB5pkDTrzVgohwZfdBAoCPZRM6gKQzQ9V5WWkPh4YiwMcyhuoSQbwx3nHTGgH1EmurpkWBzX",
  "key37": "2pbUoipYwz1mh3AGuYQqw3Q4vXMkhU6u6o8gt3VFMCvy4Js3J96KXZccfnDBn9Bx4JMiQZjM5fBwLDCKEma9BBsU",
  "key38": "2EGt5S7k7gaDDJo7J8mzBRXFC94WT4NqJYHpebNK5drmhPanCzq7us8cbDZpUVTngHmHgShceN3SLFgVaZoxdTte",
  "key39": "2E7atgD8bTwMTRyYUTSMRmxP2y5xJjNRLtg4gL5JLNoX4gF4t4Bbz7dcr8QCrq4fK67zkC28QRCcX49P44dRWpUj"
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
