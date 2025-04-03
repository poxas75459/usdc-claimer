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
    "4ydCBEXLpfVbzkdKYeUV59i3z5gzDaiX8UfqDw3G5pLNXf4t8VC2AUMXNCM1Ek22c5zy1HEZ1zqMBbwbZFECLXAV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GvgsYWypoYqDjMpYgSWqSKhPmsdXeRNPDoYJpA7rMwAawGBhqZwR7DeG71deZxCcAGPUZgUVadvDhDfPiQS59qi",
  "key1": "66WofmvNeHWRnGHvvg5iZTZHxzBDAJWd31coxXZVgBXK1Fa1DHxGLzUdHL1FWB33NKkHDwcfm9ajK7SXbw4E31Sg",
  "key2": "4D1UsBmhdVDUXxoiyYbVEGocECZPeqL1DERk43srKbKKvfmzYUWAwKPgnSzQT2TrArW4Ru3TVDnahTYz5wCdXPL5",
  "key3": "HyM9NZfwYiBJK1WRpziS3rPHtbUJtiTKJBNJcqeaGXqrbjvjTSSyvGiqhPrxuio5pzDPSbkowyzDVoLoqsrWCHZ",
  "key4": "2FNkvaYKpNebx5iGyuGLqXZ4QfBueWqTTQhkqAj55By38gTbjAnCim88vH9bjvSt1mU8mrRawyztgua4L2TDxebF",
  "key5": "67XjTiJ1xHqfKMzqheyaS12tVy9HoT7emogGXiNfa5Qq2nfhJ5Xvd4D52gfFFUvwucWqetcA2uxkwcVEBDBtVY8Z",
  "key6": "M86fRXqE2hL7vEpEWNqSRgMEJDKSjjY64P5jvuAjtBL24uFyqYf7ASyPxvQSnuvsBYwpUcWH9kzxtGzqYhwiCFk",
  "key7": "479dkwWuqTihH5PbhXgADQvknxvM7q8WEynuKzFE9on9HSDoyxyQ2PEetCgRLZgzAcJXUJJTgvob4sVPM73mabe9",
  "key8": "4gBrLkB5EQXwdTwMFy4H7aMx87JPz2XNCnjjZ154anREA3BqLS86PyV3ovmyMrqzBTvH8mfzUZMVx4jV8Zksw1Um",
  "key9": "3z2GBSwcNd74BnmqRa4FXB9PaFLZHCQDAnm9CA8CkzjoHpTw9WnUFwVp9qLshciSwyXsSkZ11dDHMJ5Ft3f6NTmK",
  "key10": "FoxfnLFMFtZahFL5DuUsgneTXLZ15FiN8xNQXbUtXuk4tcxpHQmjfdHb8W1muiBxPweHtbQXkLDzzwKisJpu9iM",
  "key11": "5EriEhQ7VEgPLC8Vu6s6EJFvcif9taeLR8QsJss2uUonDEZ1thAhqTmkxwbeVn2vN11Jm47M6sTq1bJGFequ2X3d",
  "key12": "42kYZoXm7uNKpDXKyxHqqi71jzqeiwX7oGcBeJZTgeHyLAqRLUZfMePAza9RfMLrvENUtJ3sjUGE4GCk11te92oG",
  "key13": "KALCLn2JyrpnPik9Vo5z8eH5NCebJ8mBPeVCD12JNS9mMf25A2dUKWsXkiLofEBoYMGRX7DdL4dZtEuArc3Kqji",
  "key14": "4Cqy9fHCQnh1uQ3DUGr2wSwdhLLEcVi17dkSqvvamkFjUNKzPUuLCtnqyQApq3qUBkBqbTEFxKNVfTcs9bgXJEHc",
  "key15": "GKgx1qpAaaqaEXsBmTT5uMKBev9A16k7hNyu3X4ZUxfipNvqNAR3s4cMubh8Jr75VDktF6hVMLTFUqcCRvJ9jTc",
  "key16": "3nyTP8rkkgw4WW6cezHwzijmU1ePUWQWVBZS72fivVdRxXayFt6anHeUaaYJo8XMet8NjCSafW3jtaGynDgNecrj",
  "key17": "2jLKV7hAnQpUfCEWXNEY6QdoSRDspPH1xuKiTyncggyoNYtUT44j5gaZTEy7F7KRTxxvZYfVve3tMADrWwQukJGf",
  "key18": "2mu5FzqYdtb7ByUC3YswdF65N4WGYrbsJKMhPv7eJMYkAwFdWPmxPd32TyLCJWo8LyeWooBopt879Vi3VA5USAAH",
  "key19": "4Q2J8M2z49Z7n6rFKZBr5eVKrhSeHZTYBYDYyVZpQf9DeUByGR2MjJHBr8yx2GpaYs431fr4DLJyi7VfbiWQwdxM",
  "key20": "27hKseCYeb77p9HUXynYZf8RcxrH3qGy1jYZB4jbZuxeHRvvGziLhnKKU1cMrj6jms58rpern38vNNb48obmLjFi",
  "key21": "4GG1FnsdBd7wSLSTsYKzBvVzxZataJGTM3SjB5wCgvfxk5eiEDGs3635JZwAdmnDfjeVdf8BXL9BVPutBSKcookR",
  "key22": "3XTFZ3n2L9fjwxsr1H66GLmM3xtcLpvFd9Z5gu6bjq3PD4wVcnNpsWyVSPewvJ7cncAnHqAQDmQdHbqeXNXnjzza",
  "key23": "2UoWd71GnQ7tQWhjTTnWQamG5UDfBWDFSkDnX2yWwL4T27u4cJHBL1vdirAL26LHeiQMQjEF2umLHSZsjLjy1pr8",
  "key24": "4y7gNRuz2ZXY6d7Ju3iMavy89YJ7ZciBHMrFSFV1SJrDWcBLxon9A1FDyxPnVzJYJiKrHAi4ZCZBfQXdCAcH8KYE",
  "key25": "PmVJiS8k61nXjtFnUhiHLbYAaRC617ECqmAebtahqd1LBtRHKXZkPhQeRSF8sUcfLUjyQJSYpNUNw1e3jK8b4qz",
  "key26": "4UcAKFkHyqKrqmkrt5PGg9Ce5UfBCWvrddDuBr1YkxVf7VowUgQ3vgJbWvdadLKJMoxFz4aBqhUkESamTNTq3Ssk"
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
