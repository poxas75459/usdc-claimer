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
    "3EMKqpKxaF3bPtmip8TvoE8PvL6rK5E5EXvYTMycjFPvaQ1XztVmJtsuTve2Hi1V81Wf22aRd4LtC3wRyvc1GZLD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YLbKgG3DVNydnUWBi3YfWQcEsRV2EsybzPfV5urLwrt7oNAWEab9rTNcivPuaCNir85evdaUKBAnzFYDrv7AnWv",
  "key1": "24uqKt1tzL8pgF8xnfYWwXSNc5utT6riHLsZSe1HyMFmsfv8E3vHxZmuKyfXb2pbjYRzEnHgfKaWXjyDTaohJkzt",
  "key2": "jQ3G3kd5F1Q5nrjGGdYfXTQ1qr3sFSgLjtPrTsU5p9DPQy2bLYBNJ3ajq5qfGw4WNvegisg6Nz4rxyVbHczTi46",
  "key3": "2Di6Ynzybn43pJ3Xfoc1Zrr1msTDxdUhPHF8jdAWEyFBCxUBRbZFPivxQHCAUYP64H83hzawDct6vGCzbcXWgh8P",
  "key4": "4MuddcHppXGgVttFpuYR7yG7rGRmCjsycQCSf1vYAf5J3krb2he5rArMxTXaYZWNtkWU7Y9rSMDjTn4HSqruQpGb",
  "key5": "zYwuKyQ92UyT5pKTh6jyA3qMMiKc1QDrQHjSKkRabBp23ZtnUgxPjYCfHHxYS6C1vUVJSpPvdNQQcCvhjwtRtw1",
  "key6": "2v6hfhEUw6uZydkhkKYkwsqX9HUnT1W8GzAcp6aEctkiewnmKNSbYxm8ZvBthE7UWGdcTBkAKGnpnp2k7FhZJB6j",
  "key7": "5DCrrKR22THSXmmdRUt3ygKhZu3y5s1GnjQXX4cm8kSCrJcC8dSbob6dwWGx7Cf7PepW7zt7QfdqU9RZDDM1MXHq",
  "key8": "7JVh82gLV71yGmZw7zbRtQKe53cZA4ZDBXV5dcRY2sS8yD6fzQQaMCZNh2jzXcoXUWqMVhFmCCBLmX2TwcnW63y",
  "key9": "2KRAzsuK6DJybU3gvzqjL22ciaHZwa1JwYkqsd7PsvH1m8LzEXnQQzD8dd8nfv2eVRTSHVa3KrVK5Ua7idTMTfsL",
  "key10": "5nd78v6E3bUgUbPpf4ieb6PH34efBfAiUpzEdi7CQdW4LiLHxrpeLDZXju5D3Nt4PKqiPQP9m74QfDmF45t1JFmP",
  "key11": "51P8gC6wYXgZCL45f7hozJQJxE9UyCSkBrZMLpQhFVhg3weGBgAaKkxZirCzuMAGsj17LabTrfwK6ZDee868ijk2",
  "key12": "2AXMRb7Nv4pAkmAi3KTCUeeUFGUNqDXEcyFF9fYFhhEh6v6GETAVauzdMVbfZ34kWnagmcvWkbcSwCBs8WrTNGea",
  "key13": "5SvsFfYbmJKffdyWhsCPCZJdM4WLKZQNkC9hzZGwcNuzAc5Lyc2BsLrSTsCorzF2LeEPhsWf4bxJXtiAXMN2ddYB",
  "key14": "66Wt3XWPxxnhWJtVX6wQpXGZXdreJ7ZaUQ9Auv5yzKPkA9mG9hFTDgE38aPqK2saWAsvZHpSsDw7giEbYWH3gptz",
  "key15": "3FeLJPhqNbPUhcAYp9hbziWnMV6V6HFJ49zBsjcM3sfG5g2WcWcGUhr1NsnFKUjV81WZFNdDWSCCQyHh9ZjEBV8h",
  "key16": "5cAEcyKGNKSaw1gpzMa4D3WJ57nzvGuq7Z69KqPQ63WdABP9Hbj3PDBzxCmrWMwb4eQz3yHazJ7Z614CYekub8xG",
  "key17": "4AG6MV4TzhqJx2FUsAgJ3516zyN3rmEJN7vvAjV6P8k1CT2dtyZ8QsSBvdohTX8GAqQ9uTKubtUai7ER8TkiUGcv",
  "key18": "5UBRRdJuLiRYScHtvEVs38d5HKUgeFXspaKgtdRH3BGUgF77RyeEgzJSP77hAbFTYQa4CUdMKWxgMvwZVn7D2SL4",
  "key19": "5DcxjN1xXqrip9MwVPsSb2qxB7zjeUpKgEsUKLQsXbFRZNei78Jp4FwnXT91YJZQeMYXE7BTWirS3awU9T622VBU",
  "key20": "58DUbpMJ8Y3HwsS5FrckPM9aeBzHrWcZ7PneRg9Xi9msU9BcnCTTVGnDPJWr1APvNDj5h6AqatjAc3WmxriTYfUH",
  "key21": "2cYtHqgQq7uhkEaewG969zFTW7FA5qm5iuDuncXmhhzA4sVZQgDqJL2F4Ck8XnQvbmbL3ArqLG9qKJp6ZK9R2wRL",
  "key22": "2d7t5X5qyKT4mQy2GmpRaC5T9Xh8TYmeNCaDGud8NUyBAakTvhmbYMwKCq6FVUiMfwkXaATZaKKH68jXSkVSfSdd",
  "key23": "dZCq4L54XSvXRwQSjaLY174DSw8FVd9k9yzARYfnxfVRYeNn3j4Vp7tZBJFZb9DVmRnRjQWtJfLzCNaEgKk1Dma",
  "key24": "2HakeagLmbAedkV9WHfTse7Qbvrfw53eg1jAqCd3byszwcSQcfZoT1eVjuWN71xcX6qMDJ3ECLH3FMMXib4cyMTg",
  "key25": "4qWVmvzAX97HFR3zTgMXuX3yLRt1bAXJJyFFuseGPnGvvEEQTjvrK7DTw8V5fErCfm2R7KLBE1rvamDjcxSpHbfK",
  "key26": "3HHcHEaz6y5nRdmczefpRfJNzxF82gqF4YQAvgLogyyMSeaGHoPdqBNyKjvxBx6VusJLZTFZRegPBTeYiRg4owfF",
  "key27": "5wNrKEw64w9hiSCUtVb2YC9bfSSLkKmRYuvFrRaHq3TNaGrpqD2kwm5EykyeaudkSBZamU2w8Es7P2uuTsgbQXv8",
  "key28": "2nbA1y7vsHzy8J5Dhz3wMnQnVNw5NDbj2M4M3s72oQT3VAWFMJNXQVmyGFAJS9eZQ7GFGd6KqBr1REPuvRyxPoUP",
  "key29": "4fAo86G28XGdi2QsFHRmu2RzF6qoV5Msu2zRrMPJEoGKyP4kWsPt4uju9AVyrisTGEomETe3cPyYFijWQrwkDuSR",
  "key30": "5LbatJxRjmrLu7Hrye1Caz5NF8MJwvZn9dfH9DdCANm8kN4P7a3QoafkwzGY5rEMd4hnEqCmy4Sd4MCYqG38AQmh",
  "key31": "5C3TAJbXxfXih3zLgPssx737AdkbqP9YyXbRgcwGXTdDdXuNasdrWE4GcYhG8aVeiGpzepYEgJL5XGQEWZRQ2ciF",
  "key32": "4wMmjguUL4puD5eSMQjFBKF2hWoqbushTBXvAmRvUWgebLv9KJSaryS26Jdjys7rktWqJmGhMNp8ma6ZbXD9jJ8a",
  "key33": "3Nmbw5uxHTa9tJYWgpnQtCpHZ311vLTi2rLbKBwZXXktTXkNE4adXkfae17qhr8dKQgy5Kk4zsFR9Ltb19kJg2QD",
  "key34": "4iSTiNfDxFF8NVDy49cov6MWbPkJKEarA6iqz7RW5MRG28GYZAKWiudjxQZup1UB3nSt3UdWKjDNoQWVzkY9Tpn8",
  "key35": "2XKqQueukUEwa9P9hSfuYPpfTX9HsD6ULwuUAJzbuoHHzdN2eJxGEuEsX1MHTeoKBuiUgiiBvYDmZTsNXVr6c8C",
  "key36": "XfXoYS4xZQxdWi31LrMLvyje9AAthKMuZfuN8b4BpsRhSvxstQwbpBki61w34rGfVF9jzJX6QBWMF3iMPdbraj6",
  "key37": "U4WRstg8q9jeKJrxanRwHSTo6gg3XV3qR6EBdRPScPFeNnxUoy8ZJEvS5Rux6ybXjREPgNDibWQHG3Q5TPPjCBW",
  "key38": "1K3vomGy429Q9tK7d9xaqmYbFkiyXGLH2iqUh6WZaMfA5Kd35UA1e8ii7vm7KCKXMVQT2TsBQyL75WDeQrx615o",
  "key39": "5UYyTFGjdK7Lj6WE72yb5WoDKEwTeAKpWW5GVZMzHMfTBPqKwj4v65gi5Ay7WbZTuvDc9gyaVABuw2hXUTrbmsnf",
  "key40": "37thKSPTGkAEJeb62SQZ7nEHVkfU6xfCHF9svoexM3fJXQBx6hoKtvtjDLnfag36h3K3U9xpK11DNrme2NekUZEq",
  "key41": "45pP4T7TTW5KvCsPufpQoD5wix1s1WYky4YDTKKwcJABwYvRvSJ9Kgah95KM1NRStzFjMgSKEiFhggipVHrboc94",
  "key42": "45t1iUB2Wed9utrfzXxLCrgS3rCHUbUHaeaokwVSqB5SQiEavZTPmMHxexq2m8LAUb91f28pjR3H5eCU6VHqZkZq",
  "key43": "2Gg4vEJ8AU2yXtUK2iRJc34MLHBshC3nrZBdiftE7TbHAHNT1MQ79GG2PWzZaarTywCfd6qugrfbLJBsdo9pqRHe"
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
