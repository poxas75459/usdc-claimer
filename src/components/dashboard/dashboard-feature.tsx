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
    "24cYiWzjsQXu4AYVbrUheSRfdohxsSEbTc26EdaGjDM8fePT5nzBWmQL5hoHKbHT71YPpnfzzAFKoVVTkbGGLav6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xuU3deftUA7up8wTczR5A5Haa1uD95TMuyX4TkWj8HuvkgcVaK5VUdVQo68d5A6tSyFcWkXyctcnieTfKyLFk6m",
  "key1": "2rgqgS6KwTi72mSTo5EqJKmgVnUrmmbPX9okS56EUjsyTbdiLbAvd9GuDzDku8Nk78Ktc1Y7rSyQiWur7kw8Aed7",
  "key2": "3oZ8YViPYqkyvatCDPcmGyTA5xwZqSau1dqohpQt4kDtcTkt4hJ2v87rtQybi9Nc3Z5EUf7JwccwCYYtPCMFgfvz",
  "key3": "4urPU6bW6Bd5cihwSxViehrx5e1maG6dk4jhZwkXxhAJJBQzoBi8GSMhiH23jNgiQsa1tM5rhaEf1LKrMMuCwE78",
  "key4": "tD2V7G7FmcAdfpKRtbX71GyFJdNemkEqEoRPTrR2h7No5DRPRj9uWoebBMj2eSgRxGosZASbKNeF9zAnjahBubF",
  "key5": "3SEQHimY2qZtrEx4JgsVvXh8GE5GcYMgAEd5X7LPR1zfuYEiC1g9kTKWSHNRtSp6RuWvwcJ6EPETeixh6kemBKp1",
  "key6": "tgS3Xi83Ky3c5UVdVN45ocScfTSZEue3JDEX97MoLey6sviEcnccK2n2YJGBKuAZtr5gQje71GHYc7Tk5ZF7ESh",
  "key7": "28qYRHuAKSkFXr9gmJ6MCDeoiGGR4PYKTBKowT2vcjYCJMcd1cD4AtB4U8FnV7oqP2mxzx1p8PNLupc2Qufr19Lv",
  "key8": "2cJSAYK9eakjZavkKcVAC4omHGsYxedbfKQB95zGfPFZKt1oy5x2AT6tLknNpHnNg6mjp1jdyNNj5swudKhnWzDv",
  "key9": "32ncSyCvnEi9htstPvGcrKJEgsSRC44xcdicPgJTdKXRkg8mjfgdcjFWETHizZBWuc9sciWfH7EHpBVNCFp4jukJ",
  "key10": "4pk99NpXkgDJtdZ7XCVbzUbCGSSicXWQvXhe2XKCsUMr9hRLH3pApmebJnvYgshMCL3pHcPYVRocUm2LHELeZPJW",
  "key11": "2usUuDHKmLLoSzocHeNAyqbRTTHMMsURDsm5XJdLUrDyt4tRFGJR6Z1nQ8YVn2aiJUyUYsWVQpYUf2wBoVXmz7cG",
  "key12": "HZTHu769ytqQXQSKqgde5GGkdY4oq4nHAePMKQi7W6WumCuQzdxXdQKWtcoc3LffMb4MvuBMx43BHaZ8UU4BY9F",
  "key13": "5pYF481wd4vBuUJqCH6Xwq5dEVuWMFX3wRKp3bNqZz6pDdVyWktezMBfr4WkgBArma22YYLzv3Gh2QqSiisnQQ6n",
  "key14": "2ZEqzpSi8zwAsGoCqzrJBEXEGqyLHe4GKCK8WVp87tZVpeNyK26fTSdoeg3Y166MTtiCGBNSPbKyUk4PWFy4Td31",
  "key15": "b3S8hXypYswCtEasRBBJeXVTsZJEyxFgo632TgpLDeVPbDA6fTXYW99HWX5YxgKbsHyHcN3B1JnDN9vJknPvg3u",
  "key16": "RpezejLfQA2f8vpbqe51Cvt6nQhtRumRVsdVeFG3RzuPkXMxBS7bhigMT5VnfEs1EKmSHJYZ1CCwSPQLV2gfgbF",
  "key17": "RSS7B1Qz5Z6qRBEHfPQt6CJ9PnqBtmXzrUGSMXrvGSDt7YBdrXbfryYN5vyzvh4Sdg9y5ciX1vV4ccxEVbcG5TN",
  "key18": "5XKGNrALKe5mAZ64J83UuJZzZ6VmDiRgzYAvEqEnRn3cZZnHaZDjNfypMXEEciqAHTG5VXzpSsK1AQ3iCffkrDXv",
  "key19": "3GqqA1AAnnbeARex8J4BPH3HZAQ2VxS6Q3ZRZddMuH1xjWem9U9CkCHdHdqYXCdoDZenRRDSPaBy9SACuAVvMsYW",
  "key20": "5bnFShVgqgKpTQLWJwQhP8r3QXVn249aVu31x721fai5sEYWkAhiyhHiA3TuYoisH6vmkHibphDBgxqDkLuRXeRG",
  "key21": "3JcS7uotGGbPkC9vfoajhDHjKZoWTtTWYUgoTgMXZX2iL2sgy4q9ANCxGAF5rVXte3dykQ7kTZHbwmwSj8iUDDXy",
  "key22": "z3hCaV1eX3NjkYVYc8NVQrJufNZ9rs2vsRCp7JATQ7GjmhNknj8aNNgyEGu9r9NNj9VUMtp4RuZWoAZp4XdpLwS",
  "key23": "322Z2B4vhm9MnasP1LAZ6DpbMwFMHzWac7KqxRmU4MiWjzgHqKnjfdekkd6xaSBDJg3WBwY1yAiEUhzg7tz2rhfw",
  "key24": "7wQr8MX6dM6qNxPQU4XBVDUaVmbEKAx35jBDyHmGFhPPLCsJH3fqFLsHD5PvwX44r8Ks9z4ALNK7iygqA3XyKpc",
  "key25": "34kGvwyVkjZgrL36wJXtY6VMP8HE8ip8kjTHbjyX3849xGV9GNXvwygZRhUWhc5LB8dQxz1CG9JdMP7dqn5J9iWJ",
  "key26": "5f8WizzXoYSt1gzaYBn4N1xz9uZJtRrQG8isF3dvqDrvmBK6WW2wah9WG2pS42VrqUBin7M9qJuUvSbnsxmLfyYR",
  "key27": "4UnA9stseqd3t9zRKYaH54CqThR4wwbx5yuWhhP2udjrLC7R4PDquU1VTimgo1gKbMSQG2RnYW4CUmv4GCwQHwvr"
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
