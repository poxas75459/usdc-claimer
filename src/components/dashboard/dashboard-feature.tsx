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
    "5PMVMZ4RnD39fFkR4G4Lf9W1LXALA9Rx9Fee2n1mJ3qtvBaUm1hiqDYe4G9HW7WxfBBFCWRTJMtK5jYK4a627sSt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61ddMBfhYFE7db2xkMP2zwwb4Py7Ts32saFPDoYePmNb3rQL9c7TgT2sagiUg2m685YvnqkjP6Kzw7VAtSMxZirL",
  "key1": "3Vv4BikF6Py29Kb2fRAa4PbUY1FTrbqadYwbfYD86G42F9UuRexGKcGAJ6GpvFuFnL24799DQvfRwaxKq5MD5utY",
  "key2": "BSTXv37LiLGoVsJMAZ1fRj3nrVqkJRBXVMw3KKxjVycEd7sNLY3r7BqW9oX96BweptrYWGe8x4FyDnLnX2PtYsX",
  "key3": "4jAssJqEto3HecYfoodyLj1ktaxVdmaXzsHXqed6nKsHS2Eg2JtfCBit3HJ6bRYDLm9xPQuM4kwkW9wLsaoanAKC",
  "key4": "5XQmjkwRFJpS3gX4gNjZAQv7eKfbj1YprCckLWb1fH7AF7WxZV4dZUUkhkybVbsTmDBLw5tpzZCMqBFY8qJqYyAD",
  "key5": "4svdpay3VNGPJ5uzDfu3V9nmXe4fZ8FivwRxya4ZrcvkkvHokQGdbrB1xrAMpoCKC1qbNc1YmytD7ebEC54fvy5U",
  "key6": "3X7StcrAkF46PHVh2ic6GgocLgC4sscQ1uo4GSZMqYWcnqa9HXorTGn3qhGbv9sNzrSGzU5JBr2WCrRhzn5xYJ9K",
  "key7": "4CP2sy8K5mzFgohrdAHEdjtnmMpV7DN5HyUmwh1yh3JABkzU5DGmvLfKQXgp8oUbCqqGWtsot2CtwB5pfCJLg7pM",
  "key8": "52bqS3dcuzor1KCFstU4TFfSYkRZHNPLEY29Wy9dcjcxwBkXEG2HSS85fKk1uziXDJuKK4j26hRgRYcCTC4xm2Qv",
  "key9": "3cPLuPa1P4eeDkxcUb6VdhndnvJzJXZpikPvLGSiPwoTdx7nAm5Tqhht9Uq16QujFhUUDNJhh1NhsKguZpDQFXt",
  "key10": "2h2jJ9WuBhRJDjztoruou7Niaufrim5UyTTETtDKXvoE3yMBR2GTqTJGvTc7iPgvoi7jmomLamajaXoMYiw5WUCk",
  "key11": "3X1APBR9buELeBXy51MrqkUGRYC28PLDX7Sz9UJmzNyGKf1osdcRZ9E6eCLRbtRScc7PTUqQWfZAodt15z7yq9en",
  "key12": "4VQrV9xxY1w9i9X8kuZCJ7Lrgry7taCqubpYaYArRg9gJeJtxfYJge459K9upQD7HKXFmUcQkagTd2E2TvEq3dMG",
  "key13": "3VCphWBGmD5n6Pke9KcJDfLuiMBTRW9cKLiJjtxqx2PX4rPG4MqQtxzBGB9ccsACqc6hetiPi4JTRfQHSmtfeRYY",
  "key14": "56ZT62D6e89NenCwJSWGpqYf7twM1a2Syw7VpjT1ED8UghLDS5HQREFSopkvHcReJFFwBKpXmMYQygu96ygSbErY",
  "key15": "3AQcSrGMjH7cm7tEQKdQ2yw72dMZtUKuDWZASgVTjnJdnAJeaQgYd1n3VhjTLRTN4dLeH4icz5VWVJ7PE9W6P1Y9",
  "key16": "3oP1otAp1kodXZh17UUELY3zAUtjKFXQwCu2625i1RRGG3KK41ZCrnu1mX8owhLtnEq4MerMEA58e7MLTk1a4ktk",
  "key17": "2nsu1KWesAqNuwJdaFunYZVk4x7retQoy6vmx3gDF5hB3JgGs3uNN8wV5qeKkU5a9SQ7JYuHXjrtPZpFR7jmxvmX",
  "key18": "4ZdZEL8MJYeLMqP9TmSNd1SW7rdj7GTMt8LK7Ct7gycCMgfJmLN49U5BzFSXcSwd93oDABjH96pGXofnEGJ3CQoG",
  "key19": "RpCoEJAdVRbvNgtDJutjy72SHRWdC3PpzzXfbHMPQcHnEuY4YWjZFJFkg3SJxJkGWSpyZBKzbW4DFNTfyD3MV77",
  "key20": "5W9FChMPZ33rvUtGFybf1kcovGSymbJxZT8TEpDXwLshLKijgW6rYWrv9RTAjvGY621o1ZKw8SEuSkL9U7pUD32s",
  "key21": "5vYyHaJ9dareTUJ3AzSmk5RewGJitm13NSBvW9qcb4Cv4DndWRaQy7bTX5eP4HBigJD26PBPxmiGg8edcUeZs3qu",
  "key22": "2tQCHmLf1MjX5VFa7dYFrJM4vvWhFCB8DejcaXkdNXVEVn2vfq57ZatGDYC1A1uAFz7bRRNALYY6k9uUo15Nw9xq",
  "key23": "32Afoi6m1ov3dD2ftFaZm1fFwbTaYv51yGmowgVQE8bJXwi1xTjMcNZ5UYuB92zxvg4xdYo9RZsgimiQ2fgqizoU",
  "key24": "4PUoG8aMCqgWBP4zGSrjm7ManwUs2pwHJ8TPo8bV1cMPfAGHAMYRtSwtTm7fXV5NnTpSj9dEww7WmyfvsaMcCsn6",
  "key25": "3dfhQuRd4LymSRhEnbtMKGA9H5W1E9pqvpn6ZvZ6vtayVZFW7Jknu6qrStwBbcakScN1uxQWjwyCBEdpRyQSnXah",
  "key26": "5fu4c5AE5R1sLZa1fLLZ7pU1u7qjR4rw7Cyc38RJtBvWMgq6ztvujheyLjsE4cna1PFJfFS5H8xGHrYRPQngTH4k",
  "key27": "vCfn88aHHCuT1tA8ezzqiKMAQEjXUXTzoU9wdZiZNdPMtzLAPdkC1oeeDEY2iHUWR1WhM79waea7pX19LNQziKd",
  "key28": "5Ew7oBWjPoRLKZoZzR2BSXLfuQd2TnkUSiugGNyrdXZxJSVgaoDHjNV5YdUMKedtTofLfRw9dS7Y1eDQmSMQZVmS",
  "key29": "2qNGGYvVVeRv4G9z9yacC8f5UTyN3zoEW12YHmzhZ5ztxHdZAes1P16jxQwpdu9Hqc4jaXEYTpdCVKhqy33nWshP",
  "key30": "35KqdXY4tESShKjLja2UVrSsaQLz2aCXW4ht7EESr7ydvfTA1ccESxpfFLVM4Y3KX4mQmkAkBvahiS4AeMyv4GF6",
  "key31": "2g5VUhkRShKhbkNXpVCqvTTTBPw5TpRZFPVfytczGzAxTRaJ1j1kG62kfVbCYffGETuKfZD9ShAHss2orGDzPUcU",
  "key32": "4AJxqGAh9uT9daMnuxqAt6PQ2rt6LymdX5n2cAzZfXURLgvZfMYomMkxFtLnANncgDETCnTLRZikjxgDCuBYHx7H",
  "key33": "5nmC73ZGjUPERdFR3qscwDjWMzCcyURFafzbLbN6b5Gs6VKheX4wgbVrSr5TbcavrebWXSFoXaCsHhUCjr2BTaXf",
  "key34": "3GsWubSKs517hjMbqqYmQqgfio8V4JYFSmwujtznGkFCNrN4yYNThGxMq7yYNvCm5dPSzKEpbpnTHsyz6xG3hCw9",
  "key35": "4ZnCCX3RfRJ2KR8GD59saj142KKcUxitmhbLt7x1SkWa5xiQK5SkE8rN6pA9Vrv4txK7EDprYZnyr5BNyedRHTmM",
  "key36": "3rbA4jQSxDtSgRLqxSVaJj7PKo7ZtZjih9DaczSS5643ngKywhHj2bnirPTXG4652jaSdvgmQET1prsECdWNJphH",
  "key37": "5VmGoaKvZ2y3LcUbesvva9DMp9tD35EJxV5i3Wbpy4ZpoAPtK3XVWzPDiWpQS8DcpzSJKTLAPpRJoXTcQfNLKCiq",
  "key38": "2GMee7hfSZoRYu7ufSxDxoUbnXZFovDeFmqqF9pe46rjLTe4cCdEWY1hQuzpbcZZFuU9AhTM5zrJt8P4Gd3e2DdH",
  "key39": "2akwULd5NZNcLfuw3WfFzK5vuYMBYjYxw4F6vc74xQ3g3YiwVYCFEakfgEXYNqXmbK2wYhGSvCwKYBypDdcviow5",
  "key40": "dkxaLxc9T31sB7mbH2yx1PcE6MvsNnS83iMbziyn7jjyy1FE688cvP3VS5EQuYUhH9D8GUVbGAiMzPhCsEQ2MbM",
  "key41": "eJzq5nF5qAPrAoozv1YSHczftXrsdyxRgKyPU7y1eExMzirG3EoZ3AJwy1ZyVs7ch2NGTN6zdxmiqtgbztxaEBb",
  "key42": "62LBbvJ1ck9NU9uLoTho4C4UvTRoh8JmS8JQURphQmsDKGCtJxRKutgCwX5Qq5z2hQRnVZtfLW3zVvWAcVa8HxbX"
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
