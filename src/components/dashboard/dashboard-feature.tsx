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
    "Jk9W7AScogCadMa7A6HNmGECcjNpxJgLsoiUY44uTrM1m8BCRZfhD6pvWfmFerYRmFtb6q2Wh7wWipXRAptWgYh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aQ1ba1BHPZrqXQh1cJzcJShQD7rS3LL8TVt9rRGK82eVz7iW3WnkqLDD3Vq41xb8RzivYNcwDWGqvyaqvoCrELW",
  "key1": "4PrGqMqzENem1JFS5TGirnjmdZBPiMy4xFvTzWqUo3UdEX9ZwVN2ipJoCamT7HGnSuxGEnpxocCrevLu1oApEePk",
  "key2": "5qTF89ZhKndmytjuWZL5VKxQ1XqCELeENMqACcyCLPDGMJNpmquULTtYZQZrBH9aF7jisxyniXjsBBzueA7jpXG6",
  "key3": "439VcARBmoBWVw3HcDKXfnwiKLvyGcPgyBKAoZ2WSFFfxq5xB5Z9rwP7qYeEsZaAf8PcF3vWRnt9cxfJyopcCe9z",
  "key4": "2Ndd1DpQTnABt8G75nwdkHbcKLnLEdZnEFCMaKsREYNzNYr5shx1NncpDvNM1iKAMK15TKEGb6xo1qt6KYvVGHwb",
  "key5": "4GjvXAd8JwGQugCigRBShpQKg1hHYXgkBcz7yBmdZfi5fzQbT5nUm9Xk8KHinv7p6PQuwvTpMHEFY3YZDPNL6ACX",
  "key6": "5mYyaXHMzADuz8FwBa14j28oK8kVbSqcXLNkHtax8BScYyQBsqgSWMPm9GGb2xPC43PuhB1iyyUmz1N4ZR2TsMCn",
  "key7": "5hK25ZbGn2UG4W5iMVk9CQkUXqxTt5urs79B32gKYxfQB4pf9VmiqRrSNdYRMyCuTu24KBxT55r1suwbz6M7tMfk",
  "key8": "3LUJpWaXAqBovedpdT9L8SWLmCf5SrVEgr8TSdg7xjecgGqLQCucpMjqY3nqZEWFrYHw9uzvhpEyrR4Kk9uW9cdr",
  "key9": "2dva73fTvrsFbhu5iUjDDR3miegDm1aVV29RH9hwK8U7pN2pvUcVpuVWELn5XkHM1deoDeJCvfP2B6N4JqQFiapR",
  "key10": "5R3NaEtm63MGqvDDWeYVeZEhEbKvb8h5Apc3jffE3mFBYUnjyV8R58SXu59pjgo7vX4ca9NYRjCVjpYVzgqeutkB",
  "key11": "2u22d6hYoGeUzTWapWNFVJV1qRiP53ycj6o41KWPHHZnQRHanBzwFx247HpUqHzfwdYir61qwgmo2hYHnS6nhPw3",
  "key12": "29GjtKoJAzM7vVAWrLKu6adnwDxvDbm8xqGZxy7iVsNLfzugUbZvdFD3DDtEQ8eTtnB7cJXNWdcVBKwYAf8HvHBM",
  "key13": "294xgo1Gdv39KD3AqMXseD2WKoTsgzJwKfA7gU15wK1dcD7gXxX3Zs8Th5hNh8JfVKpZfQXp4JC8bkENBbYS3Ubx",
  "key14": "5NuBAQMDxJWCYzx2B66tQ4RiNCTXudUTk8yQHxUAkBqmfRVcHf3tBtp2sPfnBu7RyTYFCdyoxPyuV2egs5DH5AHA",
  "key15": "5WZvw96UySMc76ALv4kFjFWPSjq4HjkcbYPgcLH4UdSttiQdBudPHywTXwzyPgtbpmY9wBy7h1UUTfeoq4viD75w",
  "key16": "5Dpt89DMtdyL2t4kBueLRCjFwxqD6DJzFYaXhiJYojQELrMcUCta1tdE5icHfZE2MSXh9KMvKin8VZ2jKmpwz7un",
  "key17": "2HW7aKZKKAatBnUoGFjQitDySNStbdtqEBUC8AiidsBjF6j6ovcnzJVGGagGrjHNaa9Nuh5Xkd93TGGCVest9Jd7",
  "key18": "A3R4g7k9ZjEeazB5nJ6RBAtyZdiH4JQuQGFG2njoNTAavDwBZZ8ghxKZBMFaD8x96i2seSSVaMDtYQyYdDnHDnd",
  "key19": "4hDE3fo7nyWkW3qEikmGaAoTmAJ48Zmq61SQCkBshRvk772h4FzoF78umpMNWrQkq4UC7wo1aNH85tpMyd7gQK6o",
  "key20": "3vtqLnf6aEYsS4x98Wsj8GEbMbqTaDe7E4AvzQGqVXQzzUko5vMtw3nJksLRjWFPJwjDBTb4P7Yrfsf26uwz7yU3",
  "key21": "4huFkJrw7H4fwtQh8Uq1KZKtHWUpzZ9abPvBzKbCc5eycMATGoFszgCfCad4FCpWcpvSw9yoXrMwHLj3PRwRFZrC",
  "key22": "4xS42WNxca3UBLiBzL2DvUCnoTNb5woJKrhYcAyMgCSoyyVaxJqpxTMqYrbRnXrFEippuMmkQVHUYVfxwv55qaDV",
  "key23": "HpbyPNadKVT53T8zYtKuKrF348Xqs71eiyWJ5YAeKTzPzKciP42KQsgvaYfLY2fPC6zNyPy4Fsy2a5KvZoEun3e",
  "key24": "59uayXN3r2BvtWqwGAqu6WZweeaRWVaUsrSq3eTkQYG3tCw4kAvMQaFo7Sk2mL1bSWAHWj5CfM5TbEqWKsFyS8mc",
  "key25": "W1rwcHZTTXoeubCXNHhRXKwNpkFMvXtoU4sjLhi2aY4MXwPQ58932ZJhbgrb8UseXqFbKr7L5GLqmP1dUiXFCTd",
  "key26": "65Be3x8FDKG6AXiQLKEu8AWoHc72Sn3DbXL47cTbBguQQnJsbxXyhVs1Gz3kAEy7DzWXTzC2YBarbTRroJSucxid",
  "key27": "5abL69AcPUm175YW5fL38C3jwE4KbefmZKMh2tAchybeTS9AtWZ9Ci8XjiUEgqE22tL9KWXcWAvA37Sn17EaDc5L",
  "key28": "2oU9TZbH6S31LoiFXpmkyuvivQ5o9n4RGYr6LASFdKgbppLpsBF4KLpdJ61r3X9rFRbHrPdWFg64RDuRMetKx4Rr",
  "key29": "2UkjDKrpTQcPmQA6nEzEMxprg1P3Fa3PCHwnyeTGxAh9jPdA3mD6Ce2JfnJKfdYpktdVAy4sqv3THu4LSiADaPzA",
  "key30": "41K5zNCywqWrJUCFPYM7AxpstqknZtAdYDbTDMyj5eqKmiajwH8a5yC9TNcw7CUdKBQZS3R2e44N39jmrPB43wC9",
  "key31": "3KA6VWDNwXrvcsRjhgvvxW6iUqgzx4VrZHnPaEkg6VwbQmhZGRkE5UXzaNfNkGAcxMQX4G6FcbVrXoAeAwy12Y4N",
  "key32": "2eguTwz3esBjRNXqsEPfnwEnnavr7hVw9fioVxoK1CxWVvzKy4oZjY26WHTKMuVGDFQ4SRqK5fGz2sTzD6tuWzTZ",
  "key33": "3actLWbTTa1JoSj3xreWyW81CkVfd3fXuBfRJnF2QvSav1qV99nZfCWv27WHvnWB2AjiY6xdi38ToZ7cfCMNdwBv",
  "key34": "3BmbpYYjGXFtgAQoTjiaz7jXYm8mRbngxA8hnQsPWxyyTfyqsVLgCdX4HC2muEcMnC5fYPEjFAFrGVqHLa4Ri8Vo",
  "key35": "2aCQcWnF5GbXJdcYxVfpTNkhBFgRctVLLTi93CT1EJosVUmdafuiwTmQq2tTdvZUTDyW7Ha2e9iZEGMd5AA7w7gX",
  "key36": "JSWMFjeDevu8CXp8XzZjJymYxdMZgHQVkYbamWy7jyTeDjnXSv5AipwgJybUK69XdZv5WZb544o8SnpvQcGMDow",
  "key37": "LhjrFBkVHXsRgAhHVn9g3eEgjcUYLv6DtrDH2xCixr9SxyJpZKezqVJRo77u8L9hDeKNJZJdvsov5VqJUv9ZW9m",
  "key38": "2tmxA1XxqnxeUpxEbdFAAJfKZXzD2juo9gNvDJe1W8CNXXksKBUcrixay5KezVdpQtH4pP3XVKdhy8k78JgpcRkN",
  "key39": "4SJbJzT7D8ZVaqMGwhKUVqbK2QHNuKPB5yRCXcdVGsqAYioo4LcWwRfUG8q7gR9wtaaJ9k7zeE9p7S2wrMSn2rgv"
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
