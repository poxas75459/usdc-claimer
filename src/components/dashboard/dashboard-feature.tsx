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
    "2wZDcd3xD9LESRAMTeWsA6YK9PQLJyek1aW5DxF9fxXSRUNjijJrHnMGoPskg92SHVKC6qfcVHb17xqLXDEfZGUB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VtpLvJ9pRWoaXKGcmewkzi1QeJGdXwtcMecEaneuFWqWt8A39i2SWjLrcGCQZAfdss8hQFTnfPatbM5zC8ifR8a",
  "key1": "4Y1mEjUAPoTQpeCD1MEsZQGooUpGnfZu5QhLzfMo58YhR7b1ty5Rsbh5FKY69AhjLAYNc845LrokwDg1d4aNdVui",
  "key2": "4KSpZKxbDA8cCPbT82qL8GpVVCB5yNErKEGorNj1R9wQvQhzb6SCnMXADZkX39SUn5aTBMxrvLYV2LCUqpmWKces",
  "key3": "C87C6F9BvSkLwTUdN7GT46bHrJTwPgbz6BfhkvvFWGAYE7rre9ShUFvucTn3Zesmk1u4ytKk98666Hi8TL5VxtU",
  "key4": "64uuH3wrosoUupgFoeXYzyrfnaR3rcu5HvDEhv71Ei7rSGXoWPCwXG4bujjeejVjFysi1weBjVcJP1oQ8AFP8Cb4",
  "key5": "5CSTyDUmJcV5eZ4PmCiTfZ4PNToDdGag453zdfb19zSfRpyEZBwVLB4ZZN4hwwzVTxB8SfBBUCrV7KbjPbtp5UXx",
  "key6": "CH5jH39KE4QH5v7tyB2WqKpLxt6S5fJUfD4jYZWEqkbRqg8YVrNs9BXBr7dmsgnpBg5qq86PcZqEtpLE4LYGpsK",
  "key7": "2o4bWZtFPtvx7tLRRybNzqUNbqdskihWMZ1CmErq2wMv3m69aSBJLLKQCi49pyx1mnRXdqdWZyfhHPqX3TMNxC3R",
  "key8": "5Vpx7iKpDLiR6Dd7SmpDdnRBYoTjktEQ3imCVkpsJLbMwMEq729rwY5DgMhE5rU1XJkkoG77XfhzgCd6gdWJYxZ1",
  "key9": "5cA16LXWpkqBEcQsi3pJmA9Gq1iqHgrBqXB3m9f8REMS9omFzBNDVi1K73LRA4zQctRwKNqrrQZNNsP5izYFpusK",
  "key10": "3nZ8qMWNPdRcyjkYGgshqFCpSBcGoeBLM1z4kAiNH8Af1729myjsn2vfM9B5vRY5NDonPWAgzY7pBRDJ9DqxyB6k",
  "key11": "35mHYuMjcmD2KnGjF3CD82tm6nCYfVPkQFHKpPtSw4uWJSZE7H2dWTub3Te4RpQRXrRicP4kdS18bPMc8Nyadj15",
  "key12": "3RuXF42KLsUaP2eMQQuVkbNNNETerNo5ct4eMJJCDM8XRvKq8tKCgZo88rMT1WGwSgqCEduqfYriWCRqSmeSXnXm",
  "key13": "2YQKm68UocejxhhodbiVHPKezXCBpmuKYuAwczkV1EsTGyggMm3ydMmuQHkTnHVgZY2KCs9mw2vRNGVqtm9zH8hW",
  "key14": "5pQUBH71AbdEoTnidD4TD3i44VkXamJ8czgyDAPAyLojEFNVkykmx4QhWfrB3F2TFfBKpEw5pDz1Tz1uQ5BknYR2",
  "key15": "2x2FevQ8xBsgKstipYeDX4qfgB84NqVwJtSWcwK8R8XRWdxeyv84sgzcgGQTPgf2b2q3jetkWQV3zJaSVcomYcYm",
  "key16": "4q7YYuTpY5kA7WxFCCieWRtv4fSAtmh33Ur3KYZnpLYMVWrxTPK2HH3shDyvFUw8Dhbh65GRjFioNF3FXwSsR9q8",
  "key17": "56iWr6XenRVa1njMmUGFN7ndw5szMf24hH5w5tom5xUmJd13r7eJ4yecg1YkZdtUfhwXuwWmZRWENEuSgUQzybZD",
  "key18": "2EcQ5SdfmYdpoNvq7WkSR1at3goTLN9Fo21w4wTfY1U9tdk3w9GVtCrEFkiSPt6YWxRZGAbQgjciWzpVoxRHphAJ",
  "key19": "43YzqxPvfmfEG8wqJFfgLGes9cohV2CfRMsScN5wc5KnDE5TB8jdbe91tsSJXasGeNXeskxT6W1HkRom6pGiQuzx",
  "key20": "5KA1fJ67EVvX3aKDhzRLdi54yhegkUat4R5nNRKxUTyE9FZ35eefqznYo7KQoa6CGBQbRgg7UHFQGnb7qEhBfTxw",
  "key21": "3bEtc17YMMEitvwtHvCV1mTGAmza8SXsbEnJ98o4hSE275ZTcShcmqR6zoLxwpScLozZ1hzaTHM2JfU9c55JrRWX",
  "key22": "24ALRUewyXLErpmMtGMR7vxPXPRxMug6aNXXZGvhushtk94WKCiitmMRgQEH3isrfJc4jZg5aYxRqmxzkkbGW3hG",
  "key23": "5HDK7C48GVV1atGYNNw3rQb6WDPiz7cZPXqRxtV1c6Bo3foFPhRAhcvB81q27LN9FEj4dyiNcnnCYMGtxWjMjymQ",
  "key24": "62pxLLb7ToGguhDCX1eFKLN6AJ4F6JC7XSpUL2KUBpZbussbhr6VKFbFRAHd9SdjC2Hzjfyt4skQsR8Ndfn9qoU6",
  "key25": "2omWyABqEr9quqBaC4jCyArfU6hNGmqT5Tmn1udRZ74kMVwAQEvFHSDusfegA72xXyagzz7CQRzvweXWyc4mSVyP",
  "key26": "2bdr92GJHVD3YRnFNZMP8JzhdwM8SMB2dSQ9aHy5hEMYSRWZkYzEGAaoQR3tFwUuhUmx4RtNDLY19tu8vsp7huUu",
  "key27": "xGeavEHFktWMLP6F78ZZu7hH3YzAFqx2Z7KN7c4aiuRhD8XBvoYqkXZp3HoDjkyxxXKgcHBr75JNyH6fgT8DyQB",
  "key28": "J9Xm2Y5dcTviZcswj2LqAHTRcyuaQPJ6HrDvvZeJ12ELJXPsMHJxFPbqycPnn4W3HZM2TrYo6b6pDx5Q4wzpVT7",
  "key29": "4iwBmrS6LQ5FM6eK7rqdwRBndAnBo1R7GNgCmp9S5gVKBNgst2GiXGyhkSyXTuuik5mNRhgbaeBGGh3u2o5KeDUA",
  "key30": "562eSikVntP4wfKZj294tUEi8TTyUDdD8qomKHagf9Vm9DLPuNu3LRt3PB2f1Et7GexQyzcMhcomfjrx5FBbGtcy",
  "key31": "4JeaiZ9QYSXUbdAyWFd9456sG4x4RwiZShPhsaqbnRnYdBnY5z82hs7KVBcUm69acj8dYjCSnYiT3H8w6yW52bNo",
  "key32": "4zPAxADK5qHzgXYPoCXHeWBwb7kAEDUjBaCuawU1CfrgYs83ZaqHVkcw8Cz8fxW4CF21eXJDo4mcHKtVPZqmWVaB",
  "key33": "4KcrFDRjLjqFRZhwRzHifQxutnnFqiZv5nuc3xeUm8swLCQbToQnDo9uWZ4trLFMkUFH8RkDYwAa3NyW5bwsBo6r",
  "key34": "UvgLLeP2uhcviZg5Xd2zVjB5fC2ALKk3xDqooJRiA2QWN7WVn3dnepvP9ZJPymzpF5qi6mEGidKVcv4VZnTeyEv",
  "key35": "5jmYwJRnWpV8xpVA5UK1Db88kZNdrGgBbmnQXqHQ5r5VapvNqn5LVWwoX3b5jR4wMNC58X2yCa7QtaEqsqCuqTdY",
  "key36": "2JDzvRzUvJPy7V2u7FrwjjUUF8rJ1PmtpKFJyJw3QX8pPCii3mvcGantibss1UVRS9uons1JdoPttsQf1PrbhydC"
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
