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
    "4NhrT6Y2hF3XWdjPhvnpyyLPnPF59oP1UsXrM3acszzA5pEm8oUXmWoSGeoGPzJdRN8HF24eteyTL3wAnXA5g4FZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AmyafjLqKB5f1iE1vo46shRAzKNJykcqY64PPN8fRPUebrad9SazQwxKWzrdJSZKgPbHeW9mhvE4SKzP9dPFGVn",
  "key1": "gwF563NvjHFgXcsjJdofihVkyTjY3mE7SX32kvxNk3g2MF5Gqdif14DJSYXF8JtYvXGAu7WWRZ2WBgsvv3vZeE5",
  "key2": "3tw69LPKbsb84A8Xnu8BM3x2oHqq5Nh23WcydEaAum1LddfuRnqHoUTKNkbMEnH7d9xe4wxVf1VVs79CG8U18phK",
  "key3": "FrfNsuKKHsWsdGMGC2Am5B2zR1fwESUH7VWdkzRBcv2rW2fFXqzm25GMpLDQzmLWcZp1tpnZsPfwJqgoB7t9zAt",
  "key4": "36FTFpGaazrcYMq7rvg6yYhrTFpWADnAhWEk65SZzPWc7PtVvWgGiUaryL9WNnmLgFxStqn8G34QuxAgdbKXbRuc",
  "key5": "3cFta5cfweh8Bot7W5gAm3y433Gv1JjmCvdmxRhEhoKVxSmMDS4TPYxZcJpTq3aUFMwQSXXEGS1KRQfcUHXnB42e",
  "key6": "5kweFcz5reLKzQbbkWhHdmEGKF3uBNwwbpgripoQgsMjvxSYD4HYbx2Up5wnD8ARdJFcUrUDtcEoMA4BNY19rUFB",
  "key7": "48WN9VboLJiahvunisTksMef1yib6mwfex7bZWHjnbnrxEKjSeCyMAJvnm6PnZyEsqbLu424frR6QQVgx56aY6ms",
  "key8": "4a8huALKRQHTo63E2ViBzW4z2FJ5hmE9fPp4nuu3DFitVAVEsTsaEz2MeLFP5K9T4RKZVwMabydYX1TkpvxG12Jz",
  "key9": "5dC8dHHqfQ2cx2gaZpZe8YcdyV1UD5UWZ4aWkBHag4jwtyoHWy2sZW8ovQM7B97y5qUQ5MSsDDwrY33r38CnjpeZ",
  "key10": "5Q2WkePAW1nbcynUx93YEiBZvVsRZSF1TZNsUYZiQTCkHeBcmC516riYYtvFBmzazGyEcEzjQECYR6aqmRWgnkVe",
  "key11": "5Lu58axopnnFJk1WstUXhKntybYpH3aEb6Q67qw6RurzBeGPeN46Hfsvxh2VbMVuw3uonfgiMzLMQtW64DeV6wdo",
  "key12": "32yjHJCjGgAGwfodBD5uHyixPugv7iVm6dtVThP22NAX31dCLAxEdFogHRtCwPsRrU6wMjRwBcPrBP6BKHXavmnD",
  "key13": "66JDXgyk4LvoUARH3Uq99mNgEVGrjAkz1PZAzcqQW81yNcqDzLNPN7JaonDn7c2qxpX2YvD4Rj8Yge4kXC5iNwuK",
  "key14": "5Bs3K2GbJeMkX4mbhJ4etmsp4C4P7xsmDXZhMGsAYdw9uLB6jDExqYbpmcJhSG1kR7kYqJ6UujtBh5mSvr14sNfR",
  "key15": "6P9Tp5xZFhuf5pm85CR3HafaghK8dWzCQ5ss8eECt9DB1r1Tx35GUQvMZkzr5reZsyMgexiMbV8wWsFKRUJG7To",
  "key16": "5dUs8zRp29gSajJRJjqMnu8Fdj68sRx3uuvsDwW3TN9jkpfvFygcAhauYeRU8zR1xyUsYxFCJyA5d1roKcgPhoN5",
  "key17": "VsHM8n4cwxHG98NZEdf1CcW55JhZLvAEWEj4qS75YSvr33YaamBMVFWtyhGByMthpGrkRf5yfb2hRSydLgKedpU",
  "key18": "2uuRukdaYKja9JRW22uUEWhbveoNx6XCeaWwSMBWM3nARNQBpvP7NuxuToNPTeabk1x1QfeKApQKcVGLkda5vtgv",
  "key19": "4gt9ihaAeceC4cDtPRsA5k9J5XfWcecdNGL4ZDmjHr44GU9FYrMPYx8Thtrd1nUVauTQs3L16EyKJeTtPYDEQETZ",
  "key20": "4xzrcgJNvZnqhyBmLUtVAVk2Fkni9VQhcKZkQxTQPHfhFwFVYMGYavjUDPoLw8W2qwEEakvUn8Y3WGfRQKZzeRNz",
  "key21": "osqUwbmiLhN67TTog5UAScF1dEqDjAsu6oaU7pJvKbEADqvA2BQYKuRCPg46ABpVmgiwB8nmnN9PZEw718BDn26",
  "key22": "26pCWEVgRz4p7hnSEbE3YaadUWgSA1AwnZAcKq9mCv7SGFZeooCyUG5o7pCNqoW69tALzZm2PKWrYPZatwdmV81L",
  "key23": "3F4Up4mLYyep61kNFCBgyUJ6CVcBPTz3vSYWnSnTHrec7RbhmcBg2YaR2oTHHm2QeAVbKi53xoqK5N5b2C9Qao5k",
  "key24": "DEbXQKgQHPD65f96hKwFzQEttqFsW26aCAnJGzk79dTMb4FKhpuHbGgW5Sbt8Jh8atGCW6BNWoDGPyWVYmw4vLW",
  "key25": "n194eQPhP8JMPha3XaxnSMozWMR2yrqVooCvnqw9RYbktogCmR47vhR3M2k1o8g4LXJM9QnwidAzM6J5cb64KmT",
  "key26": "5YgYwJpUAamy35JzW9MV6YurzuyUmPVSxf9uzSCFVp5udEwGzAfHZG9mPSgbjLMFgSmQfwmJXXybTecw9m7zPmhb",
  "key27": "vnCjx6PdXbax2D8dPTMZSKwoh8ALp3Zcvvn1ZowjQcEhMKBTfBG58dKQb36uyjqDHzD6W1P27oMpZk88KhB2wwD",
  "key28": "4sWKkzMeRkA7fFDpqp8aRc6m3NFymVyE5TjF3WbyCkAHzzyzMnaGSoXy1sBHwbH8etA9vPGDQQTpNGb7ftHF7Ehm",
  "key29": "4KMNuikRtVoEFJxtQEFXMwUozwSrnAcQWiGNdyeGiwgg8Cp5WqKYi8ufKpoem5t5C6TMbwgjNPuDjRy9vLAUh9xg",
  "key30": "3xgnfsLkHUM9irsiXkgequNBb1gWWGbz8cvGDGP4Sm8nxLjf9YYw4y2iZyYuumofnuz6vALVscwBmNgAmWN8iBTm",
  "key31": "5KMPgizuixDQEST8cUhQNFcu69LfXC9Fp1K5iqL5XAczp5vWuh9Lo7xYUUspenskY5ki1cLZqKLjfHSCezF5UEaD",
  "key32": "2yjKTniY9JfM8VTVJfiTPXtSRQsd8Aah1NeJrUSnqwR4YcfyHxYUrwFWRecfBvo4YhovoacNfTMZ79jkc67j6N6s"
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
