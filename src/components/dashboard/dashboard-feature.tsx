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
    "2daWgb1t3Z5NZ4VoKyYUCrLVv6QHxedSEJnzZ5nuwWU11RxWaM5teehuuhjpL7trRQoz12u6GkhTmfc8uDkAcjJf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YDTuSMWcxeG4iqNSKJxzgxyfarjrme7jvpmBRG3H2dXPe5FEwEAz3tBZnTNBs9wpw4yGpX7P8VhbgZUh3Tuhupr",
  "key1": "J4EaUgXNNrPM8PdDS29rtyU7vAe84twEeUMZ6KCGf925DmNzGxRWkHSV483a5Ytif1NMrhT221d5LuHPRHY43rM",
  "key2": "5CW99oCMuicjAhp7okAKVczUxACTNgwtmaa5kp8ZwYyPsvjYiaWsfypqHJaMWr64Jt6f22GGFLK77MmxkmDapWEd",
  "key3": "29CjavuEgDkznq5jB78x7jK1p4EsZjbA9K15PwYdzX4uFQwvZiHgQDCJ4YsfS72JvCLGGWm893k7d7fwttqG5ZFL",
  "key4": "42VenAfMKmiQwX6f4XzQNbSyiRKxAPSMVEma2z5shYvfDgxkL2iSDyyP2XVqPz85Cmzhj2tZMiuKm1mXXZDTGbDU",
  "key5": "MYvTgJdVTBYQWueW1MKH8dZRS4RajbEhLZZyWnjkXmiCnmewK2g7BU8ibXWNCqAa9Groar8xwso9zjw7Yf8pTv7",
  "key6": "5hG5X8sHVNmthreYD1RM1j9LrkwyNsVoMurE8TpYTV1aHyaDUuQDzwdqFX6bE6G5hCwcBX5V1ja7XFYyFSAcED2v",
  "key7": "29jNRDHZhuQa2NUmNSY6z4iaDBgRGDqzXfwDkokzpDf3ybXbs2Jg2c9VZWPvPDeBfrhdwM34ckRLkF8PCtSUjsJY",
  "key8": "P5Lt1o8aPyEJHvXqi5Dipn2n1hhiT5M2R5W88jPfUHvZmTvVFUPoGstUMT4vEwVT6Tgw9vgHSpSgCQHcZrUJDZ1",
  "key9": "63B8Mn1LFHzWy7igTpq2eBc1sRWQz99xjpDG75bqLwpTkFwKBvJFAAoZZncNPiHoYMpv1MUqFjqfvdxn2eVVyRZM",
  "key10": "3msLwuKjoC9McWhoiNzJQWBzrs6TiGpcfJC6FSkQvK3jUJ7YrB2govtYdiU3ykXd6WRjb9tEeNWfKsCw5DZYuEMm",
  "key11": "dwuuUFinkqf6x9mB3fV6bdVJZ2MwjAvoFBFj3CkogF81wTKXqUqKKJC9VQVoknWbgkSUBbtWWJjTidorQs5Kw4x",
  "key12": "4SuNqkP5GkYLb1GgNMRpm7RTjswmCYHGqBa4DdfHgzk5hJs96jZx9mHpWTcMXJSLPW1qoh1xKZLjYwr4bsc7u7Y8",
  "key13": "mLyqu9k99DDi9yrAMLoQXRU7yxh7gy7tUQGRr5qiN8QvvHqWqxaLh3DBY9fA6To5S2uCYY2pKEx8mZHiJj6jN6u",
  "key14": "2svPPtcVfZwuFAGRaMusMmpvdtQV9eM6pWwDyyGpNegkNb4TJ3g9AqSJa5zABRYNfynxSM5fHkq8jAiprHWxyB4u",
  "key15": "XkBqcBHzbCpAESY4Lhp4RvnL1TJTmV3kaYPMjvk8GuW9HdX1wX3Ysbj5r84aDc7NwHfNynhC4sJVzsPHo6Denrx",
  "key16": "2qhgRkCNQVmoJLw5yR7kJAdMwBJL1gGppnHFecZ7QSGEETLNvsuqWiBkq5dS242aJemBNcJ8wSwMJzaGvZX7zWmW",
  "key17": "5fVbFGhkHUtnzrtLM1dCsfEStbh3eeG8Dsx9gAaiD2pGcfuZef3nx5hDLDwD35k397iSvLSvs2M1AYqcYqnRpT9x",
  "key18": "SX7SNgVHM6BPj5c64H1mDTGB7vZiEMN6XCisLpeSLbNZ52yTZzyHBVKtpuYMvFp3osokrQCi9REdwf3Q8VseVK4",
  "key19": "4sqsC39rPaLadPexPyVRbHfgq5s3ua29Z8vTZuhYDjnx1wwWFA4ZV58KuEEZdzKmEk4UvV2PWdTSyFhrAGZYTvhn",
  "key20": "RAjKZs3CiCSyiirSSaLvjjQseckW3GFw9Tf4wXMEuLfG3XFFkeL3pueZMKWmuo37WbRDFwzh2KcrziPePjf1iLx",
  "key21": "2VY6Ginm8idZZcg2q6CUGD65UDQJSvYpBSRpPzsym9dsC5q33EDendowUyjXnbVaShHkqrGhssyr4fQESeLPn13b",
  "key22": "3gBCpFvD2dYQ8Tg6F4N3a4SV23dXWFjEP4whuaT7nhVKLTvTrdjdyyw4PSquov642HQNCzz3FWUsjWyR4RZ7R2zZ",
  "key23": "JEcyamuBzYRStDNECmD48HCe2GESBtvYWAENjC2fzyAE3CEWiShGMNz9HoHVm2C1ErwfCKTgtBRPbLcjAPsTqGv",
  "key24": "5cSvM3snPhWGsciQRGa4GMDCi68f9JzhzUKhJsPWz5tKACTzttNuRW9qGtg64gNQF3i2BaDzT36eHqpDaX15AUvg",
  "key25": "2EPz6rc94mw9A6HNtnvUyUUAQM59AN6FfowgzZsaTB84pFa5SCfrmgYC7i2FBMinYdFfePCgPHktL77nfTkRyyAf",
  "key26": "67WcU9yXeig4Tonef6toNfv4NeNfyAkQtgp22DLBCxrcZTGayt5mYPbBPJh4azrsQ86qPfMM7QrymzcjreyAbPCA",
  "key27": "4L1iYTL4eAMc6NdSAmR6inJhL9jnS6q63eo24sXX7DnmtKPtFKmFAXdzZJqr6cqPuL3VNSt32bpjg7Xhb8WaLmAF",
  "key28": "3UbYahvqGBn4eZbgHPrXsmo39tWd5JAYEP5oBffSD8dArrYDTw1umA8ZUqUYJYYZRyqqtMt96gZiaY2sSvAdwsW8",
  "key29": "QaL73JtnaQoM1qwiKYTgSuBNEriCNnRntyikReVFXf5tN71iF2iCkhVkudQ55bhMbjMR2EoWxodbtNVYQmAP6WJ",
  "key30": "3mvD9Nz6Q5s6Uz5qaDK7y58p6hCjd4U4Vtj4yDt6JGkaapmRHHnGwgS45zb72sNYD7qDVWBHAvP49o17Lz7AhX1N",
  "key31": "59G4eHGc49KK5wQAqYPCPGMkxuvavQFcuHcQD2U6g26KPfxjDHkyZsFEnMW9K2vXvE9qDtDezFJriWVX1ESPusQi"
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
