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
    "32nJyyucQmTuVbqj1ngZcC4UoqtvuhthrhMYDkgk6bS4jc3vdLHDhxeDzG1pmky79geWsLJgpqKzsbabkBFDPVJZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gKWBnMvPKpaEHAKLxK9BzhZ2FoDNpdCzceavqBZ2LsA4zDBnts8hRNEUkmwU84kPXDVixhSPXND5fsmSNL3e7yh",
  "key1": "5RLZqmwiERrvtPY63K4AF7w35rt8e1mJjPKbyeBSV9DQmLmQGcB7b3rq2vtsAAzk2LSWWhLZanfNzYqh5e8LPstD",
  "key2": "2BrB5SE71Jzoj5wJe8GE9KrNUVkAEKKE744iMWFZvVeEoAoR2hVnG4RYhdJpcjvbMVX897211q1oc5ZKyXSjixK5",
  "key3": "4R321MkJSzX7zGjMKRV4CU1ARwHiJU1QA6FKYf2ZvTw3UMPGAVoN92RZzLcyH5Qc3kGcVg4UaEvyRC96fmpkw5zX",
  "key4": "3G3wZPRyMwMF2DCpAZwv7tn4pb1CANzCffVPWaNxcBCKTTT9ufqTGWdyaWwbsRz94KZspTY1TqREgsgXfet9CHb5",
  "key5": "2SKrJqHYmbGyooRWKMkd9ECKXFCJGKdqL5QfbVFC34Lnmry8hAxnX8ths83XUPJtbssbjsTj1yzmhSHLTqBcwZ5N",
  "key6": "24TTudZC27pRFKFg2M6trjWuYqJCYuDNjPsTCUbNtD9ZGfUt4YKzWwKBntjf3izsBNS8qMC4NCcYcznim7F6YHwA",
  "key7": "2uoE6L4k95DT8NM9vAr1toEAFQHzDggMLjkhavXTWNeEYkoLirXNH89FXroR1Qpd8tPq4SdVkNhiL1Z6RF3BCvqK",
  "key8": "4TEFygGVo3r5xTMh7PxEUM6gCq8gquk9Z53Yrv5jysWZMVgHMrBcCZxnjDmBXPdhdGxbnqYA6yCfPt6WpQY44d84",
  "key9": "63e9N85vLpBi1Mr68RAX9aahD7FtFMdFLwkKvYsLEMjxHcS9WEu4PFrVo6wDQ3Pzgkhf8mFYNXGkhtCtP8Qce2sK",
  "key10": "46RWrCsZxvW1bNnF41P2XtwCwLxQW1eimTK9E6uhxFbScLuTmteNyJ7u4xKMsbgywdyxeqKKDv5ZY9hjgg3P5NDf",
  "key11": "2ewkfbuwDk6mTftgthBL9QG6iUbkSLevLZue53CTodFnAsi6wUfPMPv57mZ65j5jN8z1qz8MPk7mn5NTyRU3zBzc",
  "key12": "53EmqN2hGyDEjXLWZkLP7odjotMhvCwCLwpaM3w7BidER4thuRmsZxSkWFDC4PrdA99u3nkkerfGWqLPWfXDib9Q",
  "key13": "54TYcV1Jv96RFjrgQL2hBUcEwbBE8eH19deYYNwUwicowJZtw8DcwtU1gmqN43Enwdw5p6MjVhF3KdAtks4z4bJJ",
  "key14": "5x9fb6S17BrpUzF7mpGMeL5LuUNx2ZiWSs8j5wadPKnqdGYGoGcyCZxsNeBJMtPcAuFRywkLTCN7zkQ6rC8msQ8S",
  "key15": "2vXyXTsm7Quc2rowGMDFjJD85mX4ggo3t3egsgDJpGHuCDhVsGtTaVWNPVFCFy7PbMSRxguu1gQC4S9Fawmty1cE",
  "key16": "4kNAKJNPxaLNeemkmFgVZCdseyciJQg8FyaFCKsyH4ry9hkrdEnSKHm1W5qg5ge14XUrvDR2LzAxZ9h6oQygDap4",
  "key17": "3hcP5i4uKj2tn9MsVFvd6hLpfnnSsDMMXXS2MAjQLQKvXE8aR5AZBTrj3SFTacJrwNZcoCikKr1PRkDc9KZmtrZP",
  "key18": "4qdKcuAhZDjDh72dxSRUdxeGqao5V8f9xHLAnDMZet3PhTqgco88Vz6fDzAxrZW2gdNzXoRKKTVEyFv7aA7brJzL",
  "key19": "3QVCAMzUGGjuYJRz5mpuaRjL8rSwiBcHeNmnnunniRgAjuyqE3UcJt9xYFNweedjeGbaMur6HXTEdhoCi8HRTbhQ",
  "key20": "2hL5k4sVYhorvTZexLhttFJfGpNfUP1ZmjjJtET4MLJezDmYJVXjQstgeXpQkviPCBqyDBvLoSbCBgaoo9z3H6wW",
  "key21": "5aSerW81jRR2T1ZL2ViVVfdoon4By5y2RtTtzoQrZaxFEmsdtonU6XRKEToTqqHCLKvkh62sn2ziaMJCC62fpiqj",
  "key22": "2rXJEhTrD2gMJSqNN3cdh4VZUXvACFmYxWYGTKkMELkjK7eXx3HPMMzNAB5qaxfgoXUVNUtbbgDz4Pi4WwXEAqc5",
  "key23": "5Ehkx7LjNTzs8o56BMAnEYWkJcDFyHke4yVKKmLUAhA3HCo6AnJnpzBwsa7N2eQQgGsebod9Rcpd1ZmucRV5Qugm",
  "key24": "2fdgo2Q7nC5m74zfw29de3xucxPP4sksVVPzyzkSNFrPcGY9ybLCkEKBdR1LQZ2qHpqqGnxw4ku228bFEvxa5KAz",
  "key25": "5xheaTjvBuAqjwuwFAxqKQtgKUxjRdYCKDGGtRaidXaVHJ2TDLVFZD3hS3jMVsY858dVPh9nvkvoPChieNvPhGD3",
  "key26": "21qTQs57t7aABvD8BkgJTNF7d4GGX4SUehocfqASfAtBSu2pEQCgXkmVjUfy2HDHxuN7NNGRWA4E8pTqYPfP8bp3",
  "key27": "2DkWfh9RaZCzkSPxNywpYfVyBbi94SBN8Cna2AzgLYZNGSkc4aCsySC5neNKF125VL3ZchMXcGo5S8MnXkQza6P9",
  "key28": "3rSBHDw1zun5K2g2nsNMBQAJAF61SFmyfrbWyK1SKrDg1pzyuB4U1tTrDjAHfx1S6QfzuMp3RrRrrW73pVSG3FPN",
  "key29": "2qwhNfqDz71cHDRf7MpE8pbvMTQbk8sTRrdFPkwPfC7VzgDehrWfg16JwmefG6rHMdTK2tcNm4s1GLVqQcFXbjFJ",
  "key30": "34gr5kpZ9BYTqE9wEYxV3zdCNC1EjCTE2ps3GUgjqrhdCis8H4A7LgHre2g5an5kbLAhgZ5tyB9HofzZAwzeQoYr",
  "key31": "5fYFyX4ySSJisw69owyCi5GPXnYyRSgHxpMU4nMiYDz1ezWV6TQpqD5tuLWktiTnkWhmv4eYNqtsSg9UAURYaXDd",
  "key32": "2MHfCtwcmvhA8uaoVjUrSacVcJmaAs1DuV8dWUgzjJGt2HfhyA5oc9o9TfxHZhHqmrKf6dYxDmBzBjxTFkUwECCv",
  "key33": "2bcQaDREHRTSS3geekZnXJiZ3a2ogVgGbq281CFNTa9ZYFqRWTiHh8HhfutaYsDEwCP5UA2dSL98KQxqezmqJbNB",
  "key34": "24RscPJDnknR7VZK1zGzUqupBd2uvcRNMjNmaMwiVFGSVUqJBhjpRPMABwqQ4EKaf4hzjHDHFpwX2ye7L4ZmnkBf",
  "key35": "4HCkX2sFr8fDc7Nkvr4aJgMyxV8S9HUtTQsMYvC3owEciTG9t5ZByuuk7GMedQRgETpYhGVte6fEAWrnAfYSk2qt",
  "key36": "5KXCzurZARmMczsDrb9mvid9fWf4ZLEsaZ53hsZ7vkPcc4T2876Ve2LP8YsHBJuuc2q2mHqwHZVja4FcRdN1qmCa",
  "key37": "4LL66uLPj3cUCDoiCC98DPNbGnFJLp7iCRUrcrSMo1AfzViQFbP7yTa57EeUAhiQCVFJoh4qZ2xZxzjpXrfHwZQD",
  "key38": "31NaWodyxrkeAG74EeoKta1vGHdxex1g294RRb7GYoGPVX6Ccw32XbjkHPWooZwn3SvPVXi3b7Gdeo9Zig5Mbb5R",
  "key39": "5jqQFS2rAWezWQT7oYXsV2WrWkwJhWCWVPxhWG7DtTuuamoJoEP7xRHpgUEp3XeS9CoJmJJoTxpswYSDhEQbn3EF",
  "key40": "5fiPRtiSd7toqVxGLRqve6LLGus6Zi7V2zWrub37ZCaYeUECrnD1Krayvih121PGwgQnBZBxaUPJtKbNrG284i5y",
  "key41": "2rDMA8F47bEJ8GEVNd6uWu1zDLoYrceCD1XoFzpQCSwuYU3fnYLB931QwoSaASjPyeTY8zSL8P5JxbAyuyJuVEPj",
  "key42": "4SymMSrro79hpfaZ8MDhQQPWegz9bepTWDmzdUYpA7a2ZK1Fu1WLyYLMmWeZjUPNvp3ayHRHHKKxaJcsmSvdQPhB",
  "key43": "2D8FER3T2GhToZ1sADhQHWhc4S3MeM1QNNgvyQsYsrstEf5gvGz7UUceJmLwCgWF8PzBMzvyHNHFTMEnXSLS3aSX",
  "key44": "3P1mkfwkpg7EZCwPuvD1cCf56kR8odeqUEeQ9wFzsuKm1zFho3zevScfWcoJDARUuYzeRQaSztSVt6cqpCTPNEw9",
  "key45": "4F9ycVNWHWV54uKc7oujaD574utcWEydLy1apNxjyvg7JrGjGeFddskHMUjYqhzxt5RVaDSFsir7oXZSN4P8iigc"
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
