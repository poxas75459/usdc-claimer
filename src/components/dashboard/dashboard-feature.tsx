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
    "2Bxh4MAvyEPtRdnPJeuybuaJ6FoobM3xUZuRPBhaf6hcSz7MmKvHUo6JQZbGTUE441GatoEXV2Tjxuym8DMvv74Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QgMXpQG3fhjdVfQ2N2UMDk9DiVZ6hiMzdTFV5GaUVvQbo2ccV1ipBRtBqwax7Qsrkb2uaHHUyf9dZ5DrFcsdRjq",
  "key1": "4nwFAYAUoXKta45AqZg8MBmAXKZBPkcg8CYCaof52Su1fDV2AJv9p1WYTJt92tQ4RzLba5EwpBAtoAwonYu2ycky",
  "key2": "4y7DLueWdmZ3LxtzsLEDp6YD1BujJBqJeRVDbUvS7QH7Ew9QDucKm92M5zSve3g5Z2uqCJJxzmsFEbgJixCxeuKW",
  "key3": "33jLCc1UzJU5WHkA5xSnodiHNe4USGU2XaAJLYnnPPni3fiCeWQNLFSf8pAGESBcNRPKNRWMytssZ2TVS8nU1YoH",
  "key4": "3LxnK3XTGKaYPjLjpao2EgfkArf5NBnBqKUaSEAhssvfNpPsMjkJkFBkJSZ29wSCAtJkDQ72ZefyrWb97FobbK7t",
  "key5": "GAeyPrgRh2hBf9YVsDg16XVejcjL8sn18TTvknyWKV8DwvvQPZsBU42wccRsLFn4yYshdVyiLCkmkjUDRqv5niS",
  "key6": "2nEG3CG315ozJ4CdEv86WrAKWWHa49mL2pQkGbnhtC5JZCorEvYYV8vwHArqanq6ou1jxR22uNsFFSitoGC26UKu",
  "key7": "52dnW2S4qT2qMLgPuEoYiUmhSdV3YK8NLLweCQm14MAgwjPdWFpT2uhnMMJyPJqaHvVbhNVXpoeGPVPfuyBaobZo",
  "key8": "45QGC1TBMyptx9pe8p1idh4gmvXKQf1AjbamG6h7TMj8YzXPqHdrnqnqjvnqMqHJf7bf3cEd1vW2WRDSGsiNsw4f",
  "key9": "4yiMdreYYNLusxJNsHYzHYb1bJNeEoPWmTt9nyJnTqPgoqQkzLVNcTbU4p17pfUR3rtNUkgx17Gh4UhzUAsx92sr",
  "key10": "5YyBxqgN3z9Kj2rgiMxUwzdhYwFshR81T8HsKgHCPRojzrivcapQJKWaCTKFZatCZwpQ8TNzajQhFMMmjN4GF2rM",
  "key11": "A2YBzmJDzmGj64Pe4rd56VNHqYUMpZtE7X8pssBy8gh2Kc426zVyFBrX5yWpbFt2DgJ33T2QgpMMBWEueTgzAWv",
  "key12": "EaxzWX318H25b9LZcHSBV4EjPSQL5jCB7CJPU98sEmxmns34gWoMtyQf491KpNZMiwWnEyzKikv8prACq6nZsGU",
  "key13": "4LFmWJi4iUgsmb2hamKEhcuwiCu2gbkdeebpuoYWZoWBnzL6iae5agnKY67dqMxknqnM9V85LiAPpedYSEnTHFUK",
  "key14": "5d33x2PByABT1ZcDjcLk64KByviRHLh9Wh5ovLxfnpGNvoLz9bdRWxH8vQGbhfcGV8LkCeC3akKcS4vAC7dPfKDR",
  "key15": "3X2hdkCqVepa8QchQ7Lz3ZDRS8A4fQeBvF51JSBZDMQEixP8jP5t2S7MW3s9ikwNNLCMx1HTY7hiiEtNALJWyF2a",
  "key16": "DJSzrDPvi3MFFCvocebvcDg6gnweVi27M2fqBycykqdKjSVa891bZoZQDFczYJKngHBDsW32jKBqdG7JDKRDTxw",
  "key17": "3wRRf4LeHjhFAKJjKeb7uuvrjnSdBthB8szyKmbC9kmcawo9NGHmUsfJVkZGtaRDXhpL4r48D8RVpt1AkKxs5hkb",
  "key18": "5heE1Dh2QkZTZZiPnujdR5jNMVnQv5JrYBNfqV6Pb42HXiQjMcSx7yrK7CGVwAH1Hp3L79MW1WhqaQczLhtPmLAc",
  "key19": "tjB9thRAQzTpFUp35rc9N9S1KPNjwyRgtciP49efr2FaHXwQWrGje69AuYsck3HPrMw98AewQq2r3xZGcKXLcLM",
  "key20": "45SnjXPfAS8BAWesw78baGivPxWtiMP4uWmg9xWyhpQAhtJ7WPPvvWTkK7PGw4yyHbZ3LtfpVRFYuqCVBMUfigsR",
  "key21": "4pgJUATcYECKQnLknEFQZCwjMsuj1ikwr9UsRAguCFkzCz5S9CRZDG19oZFBzD4Sv7e1UrDGEBj3TDWewWXjxZTt",
  "key22": "4syDn3c6wkoEhPLhfqLCTB5KLFDpxBjtgQabgXYjAGaVvNQz4xkFNfeSdeC919JvpR8UP7ni9uyYHjZ86x8uuERw",
  "key23": "2popQ8dP3vHivDgwqYMo6qPqCBYuVUWFRjwwYVpCuABNokFEq7a4riJUnwG3XkeJVtFDcZKU2HW7RmmXnX4CwrJw",
  "key24": "5hpqRYYx2T2wCtev2kMTC8WUTfRaymBStE24DDtAaDDYZmX7DJWkbEu2yDLpnXnaCAhmqwR9ybdFeUmvp1MsXw8Y",
  "key25": "5tjEen4H9XDzMPRnLR59AL6fZW7KUpWSsjjGYFFVeox4yZXkQcRi2WShdKnsRHTuYpZ9HEiohRc5UNHXXMdx5Skd",
  "key26": "2tdJ6dFLv1ABa7rtudU7FK9pimQxGbFDmJuryxUGCaUL1hW86x3ChvS55Y8YYMEFWeBukgPquirQq5WCZ8LCj7Ct",
  "key27": "3HoP9DZVTqHttcL4SJeSBDnVfpV6V1aQaKeLcukuRQH5NTyxfDJRp4UtLJB8YnNcYtwKvuZH6xn7JvKzBAP1W8x7",
  "key28": "5mPjtqQgKFLdoVaYUW129PFdm12DTRe7haNf1HbXt82Hgr9JaJmdCnsPrtxKrRk1CFzh1wagCm8DzVu3iEXTvgQc",
  "key29": "5R562U8usjneW52ZE9WWLFhCXFM9XuSGhy4atsr5d1zcqs43pzfYa4eQPo7Ai5q6gPGBYPr5gTwLbeBcuaeoU6zh",
  "key30": "2wWboh7UUTkq1nmK4xCpCFSi4fz7ieFMsP87BWz1MCTJLnwhm1ZsaVARnvvuN1h9vvgbdR95DuYAf1tsr7TAXSNp",
  "key31": "3SffxjNd9DjaFu9515ZLc8R4kZCruhcNtizDzqabHiiFztuqQQ7V9eyyZWoGpnGR7AhDLDEg4YEMoWagX1EboJat",
  "key32": "2dNh91o74VgpZih5kW1LA68h4wv4PY9kkHxzqNPnvfbRFjpTUyMYV1GwfNmeGHZh4TvtkRPzcqhCvt1krw92wzeG",
  "key33": "3moL9mEbTLRqCUxS1wjUiezkS4kNHU5pzztZyrQHVT1wY8W1NjYDTubZXPE3onVTeoGNxdjLFYbmTW1xY97v1z6T",
  "key34": "5nkgz8PKrfVJ9n5NVTNag1GB35ENCwXZ86oNqdrXr9NHb3Vw9Qt2nigfEa63y1Ca6bt8Jyfa8VLLVDfaX3K7LBF4",
  "key35": "3BAsynPP5VkcPPQ31F44jDmaBQAA8UBGA6rWmE5uijbtbF13iSn8qHu96ydtsJ1hL8Ek7CeT7rMKwb4tMSnj1APo",
  "key36": "62NS8n6HhgFnDBoH6uBMNV9Dr4gLJkx31ZPTutrSK9VCEq6kDCbDmPTt6nGGsrdsNiH39mrJvNe2RhMUGtrVAD8g",
  "key37": "5Bc6Rvr1Cm6VANkr7vrVPsmcKqXsv9CL2FcaTcrnD7f5FYXcYwgQPNZ14w67VmkLtmWm8qLSZU78pisb4oatFWaW",
  "key38": "29j1NcEexv71nEcRZeebkVfvBWDQ8pSi921uRaWyuLiVq38mj19vMyTxAe32wvvTZ5vmjrHc2t2Cd4PCRAyXhdbr"
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
