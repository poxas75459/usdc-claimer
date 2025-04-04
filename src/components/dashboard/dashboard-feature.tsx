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
    "LrDpSP3k9X3PNbQUpY6gLMguvXgtqC4Ko3HhdeMgQEiBECtxxjHr8yLoHebGQB3nNMtd2A9bZ26ek2WfCbSX1Nh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s5LgfjXHz6saaAb663WPfKbGFjTuyfBjKNfEEC1xSEurAQqYZiJbSA5zUGXtvMBVGQX5X9CjkzRDVXUdgz2qRC7",
  "key1": "vD2m8M6qsj3cT3FaN7psGo8W273FDzCJh4sa4xV11PMaSReFAsdu8L2WuzHvfYwGUFARQbxWU2kaY5gG1VhiX1K",
  "key2": "XE71WyJ6ghg7QLmS65BsAMwWnR6FvFJxaEKNHmAD1wKQug4vwMCQTQdq7hWEdGJrs9nja9NKUWNatTfJHD7gceV",
  "key3": "52t9utocx2s6MeFyPZtMpTC4Vb7vY57hdDAeCTbF6SKxjYWr2TTqx9DoTv1AwMYCDEjrMbR45wYCvZn2PLKUz9VR",
  "key4": "3mTVV1yhQHpJR5yfT2S5C5ikkDjaETQaKRJgYdPZ7bDcoecXq8CKx1w42DqpVVCJBDATKqqCfSCJa5oD3AENEUE3",
  "key5": "5Qks1QUSEyevhYCxb8ZJP8Hc3s3mXcVARpC3xurZXp9a9YvyddwSi6sLapztvSQDiK5UU573MmZPCVhB5XXv9BGM",
  "key6": "218LHRFqqjP3gDjhZLa7RksbxZiNmAYwca8LXVC3xKGhuFg7sySKxYd5ZEjYpHSo2uy5ff6vF8dqv1PfEDcyULd5",
  "key7": "4WxZ3iEbHPEFPahXQufkjFf5jEhfKXawiJpygRttEggudVEV4BXQMBNeQVfUDvKhnNQorEi9WFvQ1cruvC5hu5Fv",
  "key8": "33CbKUL4Rm5o87i9yUEsmwKteRrWzCGZQbq2XyhtutLxZDAhmxrr58Pt3G7uMp8dtKiEqJhum6Tvx88pKVZgAPV3",
  "key9": "2MnzMD6AuqTRd6tgbPgpXwSSqbiAcPSqvPjff5zDgRBCi78xQEoQYUPDMig3RMWtT9Q5pwHKXMz5hCqKgH9LCg1m",
  "key10": "2yksLFniBYpxvEAo2oECFpEFKJcbezcUp5nVvXQjLdxKcvZg7aHQ3cTGHiC2D8e8fxSxquKacw8SBpkcVGMET3kU",
  "key11": "2CP2srS27dySvMQJ9o9vCjxtLTJ8ZpdpM4VgBvunuEwXYKpDALmWLLiLMKSwRVEBx1kYvNoZqXhVNHmE2XqoYrVT",
  "key12": "4S5XuMHiajDKLbSc6JSwU3WkUD5ETug5QjrQyZLoMbASBdTc7TDj4s6erC3LNnCw53XU7XkdsPcyHCVQ9ea9jgP4",
  "key13": "63jswh5wL8h9cdPggRVnoc7Xf315hNc1HKp5nwpfBGPtoPi18FUfaKpNJSdP6PsLagr3QN3fRbxepEQPjwaQGUSj",
  "key14": "4mujrsGmvY1z9Sn6CG1VZqdY4vG1QqSCybMKGDRJkxe4BmZTUoF1r4VGXkwHZaGDhC3C6yAcshv8V2UNzDivEWWJ",
  "key15": "3oS7rEsPtXQUxKGkPnYFaNMrHXok2BaTK7SBXENUXttzVTMSvPV9JvigMzkZZEsfrHk2bYkZ5bww5mZ8sREpzWKp",
  "key16": "2RVxdRazzV9iVLN4FmZbbpwEyeuaFCQC2eEku2ZU7onUjN6DQrpdw944SpF5oaZYuaTjoG1wkDcPea5nieb4Xypr",
  "key17": "3ZG2eWi2yURybGvBpmqWsmKaovp2HhbDrMhyxfbZC62Nq2dpgBdUo9zJWHCvRoQQ5jDxuB9PA9qtStnJFjQJnefQ",
  "key18": "432duhfVUzkp1z2tKr5SVsSj89hWyVTbzUNmJqp4udd1gYYwqBWmQSoUXXJo8Yi9uqEzRgT2h4m8LxXL2haDFnxQ",
  "key19": "5jr8DB6dDctAUW8FxGFUKmQBh4YXs7dvVqZDPbrHzS9oXXnA27m9WjZgw1DR2ZqcnNF7uSNW1LgggS24pSy5RNro",
  "key20": "3ceZuHTvMqpFKUxxWh6KWSzQu74Khp21DqFiFE5yXCKySycMyeNzNa3GyJpcBcnBBz6zFvvdUuBynFh38uikrtvn",
  "key21": "PeNVqVBysLJDyYjL9yLscgcW92y6bCNDuDdDNmKmjBtWn1cmUhWwQVish2WnuwMRg4WcVdgrfwNeVLsa8mgT7WA",
  "key22": "61TEGTEDm7RdiRM1jbQmu9WtHVYg5YNXHqSea3rrmUw82LUon9gpb7zEAezP6hJJhPR17G3H19KxW6m1wroJBwPC",
  "key23": "5CEUGcTd2CQUKrsamDf5rehjNLpFFM6Bij2AGXw96698u9YDk1D43La49Nkt14VSmArje8axRDMDHyUuZGskmRJf",
  "key24": "VcmQAWgzetHpGvh16NcuMazeRQhK1hNzg7CDfaDHEJZCMGqXWL3xDKRhXca4kFx7o92AvXaMApNDtsnhKkG4LUo",
  "key25": "5gbE299LCgLyordHUpFfRhobvPQPfNrFazvBuYpUmz4JcXihQRTnCXoRL5y2UbUaPZ2RhnjGH9e17rY8Zw4KZvSC",
  "key26": "3vAVM5NQ7LhQpB6bXK4iCTT1GPMY3wGXNvfwGTZbaadWScrS99xRfGA91XwXFev3c7GJrQMasYGnKWJXQjK7jMGN",
  "key27": "4wdpjQJode97jLwrMnwQUNYeBwewYwKXsJGce99mVm7uAAHXkVzWaSHUMiMtgxycF28ML7KXAwz6K1p7WzMzoWbJ",
  "key28": "2XgiNTg8hMg29irFYfcVYPtFTERjpw1tXnK6jX9KrxRN4w91FZmDdpm1m1bucc7TjzfpDtNCtF6z9FmrT3UmwLqU"
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
