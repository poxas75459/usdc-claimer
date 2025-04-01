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
    "2yQokBggXTprX9mQ3CZ6RjM7Sxf5dC7ZLVHazxe7SQbQUxQSdrBAdzjr7HVZHP5eTitmjxt8M93pgDihQK45ntuh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53CMB37ykHnKDCqfc1K1DaRtAbt6XVC3YmQQ3kXjZhYzQn4WZUqumCQSWQC5To9svWtB1B7f1u7LLyoh7TKVdNeR",
  "key1": "3zDsM8vEJRds9TMXwwWuY1KF2r6kYa2yFccWbnhL7GKye7Ku5CjHVHM6YHvqPUQtfwKxn1mQS5fuHjpDcA553jsx",
  "key2": "3ehUiZJ1iDjgvjaL3e8m77cbkaxdDryovqrvMAufKaLUUmLHahmJZrF42zAyaWHkcQCX7rWLHkasn8mg4uXopitm",
  "key3": "4vQJwEo4fCc7wwDrgaez8g4tfSbfMKFrQCZv2rYf7Pf4cSkdLHosXBMA8yraHmSs7wBhf7xz8T7yHPvSsZuCcJw",
  "key4": "4FDuwuNXph81hYBLoVQmiTXeBrQE5jA91F8n1GqT3nRBPDv3GBwP9D4MYbSTVHD328dST1dSwDEupMtK3qFCxwAH",
  "key5": "2oMh8YKeueXJKGBbRkergd6X1Hz279snFwtXGjnZNXAWitXHXezWFnebxhx4c6oR3GWV5Azb24X6twyUAMpkTRqr",
  "key6": "o9FhXW7ix2YMJmz712JfeFThDtcJMpQPjBTsAxU2SB7r9yUnCa4Yytin7Ky7wJxxBfagdyGVy5jqNtX45KfHLtW",
  "key7": "4h2tvnJgbAeELnW7QiEoHCzsLa52Sp3CEk97JSTNuQrjUYnyE5wMUMQ1rH6jSAXKd8XG7nZLXuBbg5h7QmwbTy1n",
  "key8": "3KaT6RyMcSGZDrKYRFCPEKkFj3SR1oG3NDCQyCkrBoGfn6yaF5y5x3Vb52XRFEiqmJGHUbRCifdQ6ZGqpeJWs96M",
  "key9": "Wuejz8DHd2Lb2WRZjELoyk6jX1wTDrVDZKeUNcDXnniUy4K1GjUAAtB4EDzpFYeNHNadGmC8fsnqBWmwJ66QgBG",
  "key10": "YWBX6xNnfKyMVzPMcFyMkbA54uWjqB5wXeQFJ73AsT6iLqEUUnJdbo4fLpLWt12DxkAAdSKnpySy1KEvLnFcvm6",
  "key11": "PpXxmVYBhmGg1W8YouRK7yyHNdAW7CaehEqSfnnCn7UAbXEHVMjSLKmSEwubdqKX4QPeaYjcH1VS6YAPbaoo8NB",
  "key12": "4kvNQ8NjFH14nyK6i5v4dddoJzMhG9XzTiU4TzFGm1WFrNZgnrbZYa9jWHkPCPnbWaBmUhaShBFDzx3xmo6t5u5L",
  "key13": "3S4fiJryHfvPEKEdHAdJ7W8QXtotWM3zPboDtnwyd98vGKAZSZAdyYUsfXfMiNiFAUyudAGKNLPqx74YCpW7hGBL",
  "key14": "UjdANTiFy8Absui6GC3A61HR6aWXvLxAY9pKhcJxuVi91eGnf6tUNk3uucNHCs4KpqjAsTe998KcZHCaGkEemJe",
  "key15": "2KhVRTxkqA6GKu3Fs8643zQ9DczFAW762bMjzb2Rwcs7kDGSNUpTmGSjni1w2KwBeTKF3s8op9tSND2k17yx1Yay",
  "key16": "5PcM9jXveaqMiqGTQ2amFKDDU4Q2mwVN55tPWC9SwM7t2BKLoK3xsrd6P1oAvsqFjbAVxyM8AJsJ8wL6k3t6Pvmb",
  "key17": "2wFBpT1emgw5GgpfbARiyinUNffT1MRcicTennTTiaG7gtUiTYNyMU6nsrhtjnBSNa7wvsmEGV9uA6iYfnwoTneQ",
  "key18": "23ncvoJT1adaWWQoXVwYP98SneNfn1JnaJcHTgu9WscTYbbnXQ2sMvqHZoJWCuHMiQXbYgEYo63mFZt6gXNMvRtg",
  "key19": "3oxSLqmJSbEkUQoeTni4i5Eb86jLdmwBCc6BGQ65rbbg6muscRXFHWvMcsdL1Baw2uUka7xoB7BJ9Yxvjxspvn8A",
  "key20": "3Yppx3ntnGqpBsWfkuJyo3GZExtFmeKHFn6dpSKeLbMvJNa5LoSRj8jqEDMA9Q1tuL2bLgsP35zRtdtEmQRoKVVG",
  "key21": "2RA26skC6vuwRk4hYugPuKHCdWQhQXSFrAtA6xMn8wm5S4rkfmTLUeEwJkGAMMwWyebNvfpnhKyuc5JMDkVHeYP7",
  "key22": "4ibiis9iyPQZuLFd5KYGG7pLaSWsxCEhA8cZd5y2neAAjtaCHCGmKwDBKJhLQMWeWKt1NPUns6CysbJYXs3QhyMn",
  "key23": "5usRb5d2dXQmsJJKsYjL1zKYrzoqcZ92ZtwjTAYK5N9s54TQVGWuDXUjfnyJ1gnUG2r8dRpqeHgQCadWoWeShMuK",
  "key24": "4MXgakBQFZRWdzoCQs8r9W9LQJCpW8HeiarbybXpDCLFpj7BnKn4nH6hNjuYf5AYaXzHvCqdfLZcAh2YnukVc2g5",
  "key25": "2ki8q8WSex5iG8L5idt6MKzZEKCS47m3Wi5bezZBTMp8G97ciXumcrz6qATRB99dHP2DJJAGv8xVfVmcsoorjbW8",
  "key26": "MjwQ511LH5V6YvhJ8QL7HD1CX8Q2BqLsHR9MANxVEUuKZtwDxNmVY8cqUsWSvaHrhQRRtaPjhgSbEutVPSfvp44",
  "key27": "3ZUj5Ze1LC47a4v87dmMj74pBEUpQifL2fG5xtXxLtxNbvniUhWzqkU22TGN76bZY7RzEDwQHy8eqVXYGUvg4KoQ",
  "key28": "1rJaUEiKCakbS8UvoUYSaFMaZCsUwHkkrefEMyxQYgBH2pXNUBuaNFYLATsrFM9NcLyuWd1Bubxo7w2d4DawYnz",
  "key29": "3QVud9aWGNf5hDoruU7CbLxJJfNWBC9XsfJGEjocnThLs1Fo6ZjHy3zEPNCAay4n65YyVj8tVVQsEGgAnHvt12Hb",
  "key30": "59HT1VD1mQEqYQQFtxG1qT12Ai7PVgSUktcmXFSzbudAu2VdDDSawotXWVfijDXFspmJP96wRyvKvyvHrwQF232s",
  "key31": "3dgvH3a2twxDN1DR31oupYMJH1m59GoUjDTiPpJFFPFEWMKWPJG8X7f9i2aSRsocm9qoP419ZnPZiZUpej5b7yuj",
  "key32": "3toMAWP91xMyoRZJ9eNx9ErUFhzWCk71bvUVNtgiuox6zoNQAEWk353xSgBfbotEBnv5MqXuzBvGcdVHEwkuJoA9",
  "key33": "22JTm56TATTo1iN6jQEFzvNzpEHtoDHU1nfDjkRju6CCXSadmksmhFmJa961sfeKmQUbTA6CS6U9rzNMYB8cbuGc",
  "key34": "4KCq5bXkX1Rkwk3rxctUnieVCrKJTgmZPbasPd1NDtg3Z6ocW2y8c72TVwxRGaJWqxrKtuzyf3bqWwBt8QDdBv7v",
  "key35": "8F6r5SkPvBm54Qgce1ZUb5b2Tr7z7iRmPLEvnTVJS34FsR75KyYF9ezKrEEGSU3FSL2MPi3qQZ5SBYBMXrZvZd7",
  "key36": "5wNxSvmjnJXcxs2xw1d2cfB1UHcuNqs7bfy6YWd6hC3fLSzh7NCvNgsXpFt46XKJXi7yS1vR33EecTCgWjaPBfQd",
  "key37": "5kUAzEvPVLBqgP9tmMRrNtn6vfEAkJ4jBck1b8sNG5jyD5tGA97V4bKFacgCzywa5p1ZLMwnsSnJFt4JVy8x88R7",
  "key38": "2KVuTPEAbscPgWwLExqXhq8V1kEpt7kQGpAmMv3gG5djAKmT5CrWSv8Acb1yDxWcHht5vknPDemawwT6yJ1fLwR1",
  "key39": "37wsHgGJkPaeWMkyGY9VDmuZ7hgUavqW3bHYpNhkHw2fxEBJKedr8Bzf1XtX4H4MLk62BMo3ev3uCfyxQr9CH9Do"
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
