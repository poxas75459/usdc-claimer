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
    "4xGMrNXPeoPRjbupFC7djDMgJSGAkXMNjHQoRXRVoNcKXwLmD5Pp3eFHZihaUDdyKu1dhXcG6ekQLGjtkezn9A9i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bsLSFJ5d7v2fR9jkv9ch9hY29ikmg1FSp3QN53vL8hWkJbMjvKBAZrgrok2RZJcpe8fLqyBqvnz9Hti6v6wjDQC",
  "key1": "58sJszXGF96JniGJ3WhFQQaw8q3YW5pzBPGcMj69n4ixzp8oJjSNbQjTK8TP5HwNyPty2zd45g1K17GEWZhcirge",
  "key2": "2qbHmeu8AwYHmGjsPo9puTJhYxouNfgGD21872s573n1ofrdjNJc1m6akwHzcV6kjXDBki9H8rdYZZiimXDG91br",
  "key3": "3inVVKWT3hbpc1PsCBKeYtLPEoKZWHUHW53yDuzxZYjay8mJWpUn6ZpvS6XwXGhFXcojLuxxS77qqeb3VNw53vt8",
  "key4": "551FuEhvuKfCzcP5e4DPyFTPbNQeCWeoz4DmE16H4uouyNnsDGETNnMEguzTXyP7su3VHpQWLw9n5YLR1i1n6uWY",
  "key5": "G2iz6GgLi7kSnPSYKFn7j7kFompGN7V8FArR5zc1mAcjLQavS8rHhB5M8Q3f2HGYzgTceCQY4nzVgayqq9zoqKv",
  "key6": "35cUaFUstjzurnoPDRmJv2d9fpf8tna8xcdX3FCEePV9oF4uHnKTBRXZ4a34T3RrstobA4mh9ReN861aP3ev1b3H",
  "key7": "2KBUBzaWjA8qjT2KjQr2WBpFeqjmtYknXcjd7SfcabQdqu395XM8jeYsuDDfPxcmeSBheLXduUixkWkYsPwahcaU",
  "key8": "2fGx1YYogL4XaQhkv455fZ3QTB5ESDugkEpbFb8gMxHbQimmr7KPhwPzH4zZggRnTrpqWgi9XGKe3R1vYfaHyawa",
  "key9": "2PUBkRQSoowuRH1nQsApkuqdvUKW41LJz2qN8oq8cvuwvhRardGPwtah1SKu5tMewR96EhRis6Y6UUa5mXtYJ7kq",
  "key10": "63oerDtPBZ6C7dRDkv915Dkmdb3Lxx52K4s7b7mmZZa8GdzE2VmHmRP2P89vuj8hNTWmzYF9XotkRJEd4cChkhpE",
  "key11": "4TNKxaNMj5rPN4e4YGDVnxmEEPc92QY1Vh9cW6neCJUXDEA86c9j3ziX8FwRGQ2Ax42PsjLaYQLuAU89PA3L8yN2",
  "key12": "58ftHRnWmsBRDWTzuaP6UszVFfroWQaWoK7L9TGQzTJVqo7boDUB4CKkXA1ZVCeAnfCNdHbATrzZc4XxG9MuEJq3",
  "key13": "5c9EBtrr4Ebg32xhVPwGr1XqAVd1i3duv15YrSw8k2TWDNuk2NcLqJG5cgQAL69z2oLTcXhaLSqgDExRkFsL5xQD",
  "key14": "33kACtV6heaYHTCZbfWkftRsU5EyqZ24LjnfuaLjSNYxk1M1Ah2jFJKT8Es8vB61rY5YNqyVuNM5VnonNveUNpn9",
  "key15": "5kvNh5CsXtdJescAK5nS2RRDtwr22WnC33ZgLt9xBjMQBKMZft26AdTxgEVY951kYDLVdMeXg6wYs72sJwwudQFw",
  "key16": "3yhuW6jQU1dcpoWxjb2xqGbfYwjqhkWhjs2rvVbeAFadUX5GKqBd2AehPkefN1wMRD6yXJe9jdVx6LDykWAgDBUn",
  "key17": "z7Q5sRjPcgTM57cx1EzRQLf6LZPeov6UTJ1wNbACXUJH69PFH4tVSYR9RqZsZCRhkGHJcWRQXiPFBcxrHCkpEJ1",
  "key18": "2kGJrBmUzxkyyenUqVvXFm6d1M3jmkpFucWTMFUzNfBHmraMD4JFUfBmavxmc9gWmhwUg1q6sQz8gQ3HzwYJ7Snx",
  "key19": "2Rfm9vriwGD9pxC8Lx9frZRaPY9SdWk48uJfmcUUhHhpTwT5L2t22Y6DQWP7AvZQA2zsnVXQpRGmmmFqxUM4xYh6",
  "key20": "qMx4M7EBW2A8ybLVfrxKK3DqtxqXWfFM1Qm7C31MEAQQKDo7bYob1LpxHRTFVhA7zuRS4eno3kDKVuhLY87A2TQ",
  "key21": "2SjHjwETqks8JjT1AMEbK21fZ3hmjgshDAVrRoJLQJKk6AzCkNHVhj1qUmaTL1z2WMtRNX5xcDNBYeGHDg8qCUkX",
  "key22": "5LYuNBnU69d1RVoAFdR18kQKnRWiPgs518YtQbXLRuqpMoVfWBrfc2YQskpiibMRUgdR2vDTHk6sFuRNV84taz1g",
  "key23": "5dPQjHLUV3dhvcDJvXMysdZJPQgYiAB6uSqieoKPsGZp32E8KvBnvBQc8GMbUbrBnkKiDdYS5MvuiqQALEzg7hMN",
  "key24": "3KK9CS33dXJZcTMinbinbdgxJqnNyNdroVRVWx7RNGH8if3Ch88TV27HtZMszxVap6gGiG3Dz6YG6NZBGm85ib4z",
  "key25": "2NpRWp9BnKdsQ7yhYoGeyv7aEnT65gFPv7oM8YiMC8hewpBLWWS8cAfSPV6CF5dxRdZqkY7QCg6mdqnLyhhj4uwM",
  "key26": "kZAQK5NokJUaWjjFRp8qTa5rjaViDAHmFR2ieDaAxBzhPqHohZq6EDdckfghDnYYN9PjjW5tYaUxuD2EVb9rVao",
  "key27": "4Ni9UAaHdqyjjhChTR4pr3piicqqxGnHDs97S2CZBmsij1sK3snMmkdff71wSGsGGESfHqxb1yaL3V4f7eMoeXe3",
  "key28": "5QfGURGn17DyU2ctYMQeCQPMBfqsNzJ5NY6hWenyXToERdGPs8s7ny4u21eodFve2NcA5f8KKThNh12BmWniBfgK",
  "key29": "4Nd3JNyMp1WVFwdQdZxnRKDrJ4za7dzjWmV7rHi8BkZaMJMTtZecRGWk3Abf3D4zyPQAZkjVS2ZtsCCuPZc3zGgB",
  "key30": "3wseYcpbpfh6hVUpNC54v1zqLn155vrhMc2Yk8dXQefL922oSQJPyJBEowv7tcVQAYFeJFevCVZqB4hYGQ6qS9pq",
  "key31": "4G4quigHpXbJCDHCMXScjXsDKk7caHBGr8zKMCixeFbExkqe2p6cji9kSxqqydBxXVwxNGc2MenFxPXPQi6ksVdH",
  "key32": "4fU3XKf1dVT3wFV3PZG2Kf4pLM1FK2gQMZg2Q4DrYGwoeEVD2ah1iaLhjXdzMPW6Ba4WFEnqzKd6F9EW7HDk9CLL",
  "key33": "43NFZhwHxovL4gboru6WCyGdRnJ8WejicS8aHFbDpzgUh3CjA8QYfFzzQkoFA1duKMG9J7DyMJG7ZUzHYcFLkum2",
  "key34": "XbrbsZCQFRbenFQhvNSwgY7RNRQx3sRiBDEH34SLNmTfFqRgByEiHDEMFCtZZuK8sPCMyYaxefFfeifu13oJAaM",
  "key35": "YoBV38uYcS7chiyfMmCT9PyruBgnpsLFk11SUSKnq2z2qRdDVbfezoRp3FoMbtHE37HKE1pQqBZCQZqvzNKxZf6",
  "key36": "5TsRt8MjzPm1Cpgn1TA1AtFydKeE6diAfcqhSAvCkp2oP2pKENG8xxCjehxzEUbvHsJdWkj6VFdbAZeQCrHwCVdq",
  "key37": "5ZLtfjtpHdveSqia3G3GMkaP8T4RpbnC3ai4h8sz8kCvwNutSVyjKxzyEJApzFXtJSXgMTGUURpbxyfBZNcVriHz",
  "key38": "5DFjpfmVdPCZPu9hhh3ZXFAG32qh481BXxS1fZEEmy9nyBP2DSAPtpdsAPsAiV3Xp8HDwVVyFAEiWdcMojieoKmB"
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
