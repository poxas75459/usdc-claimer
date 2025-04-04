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
    "2T8sC9r1rUBc1UUfgN8hSzepwDErUMVawJ9cA64YrVqGzv5dgZh6bkqVCYNgvgpMYKGDnqjpiY7mHb3nmEySTQnE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CKrGCBQSDBmuuauJAi8PCBug6cn8hgV9ziKCJvYpGJP256CrnXwy7bARMU7mdCqD4vHzNADCwWJs66aL5jB75Hd",
  "key1": "5SS53WNPHtqitNWQujNPojmjEgEnmQbUJ72MqoLBx6fndM3GY6bsTG9Zjv8aQLYVSYtysn6yjePPvMdTFf198vap",
  "key2": "fWSPuofDoD431iQkvDvF57opAjG56XhibrVzzhSjDKXrhy3g6ppNyozGC165Hk3s8ZvdewpWK9jC2yQucLsQ8HP",
  "key3": "3aHVmWnsZowPPhHDcCSrywuvberoKETnc6qkmd4dAnqgtVMVkNiiQZd2JSHXGLchR7Vjd14HDroYnkAdgUaiWanB",
  "key4": "3hw4k3Xc4QsthyTFVDcPanoxHeKS49bNQqfDRzV96St7bqTuhVpjhAQ7DtzTwah85J6Sd13vY4iYWz4jJGzyfyRz",
  "key5": "aBbQy5eT5J2EzbVssL125PE3LPw2bCWk3BT6cwZikoNodCUWMwvTKSmEYH5BWje3hyfUa7difCYX5TeH82bgfwB",
  "key6": "4yTdGWmqomxVJ8pMhiTodt5UNNkSEWix663fkt6J15Nkc2oAVUpS3qkCUyn1ddYus4bjJwg27SRkLktCD84zmTcB",
  "key7": "4ymTrqKoLHb3sS6gbm93Y8QN6KsJUKjQbKugBRB8UpfcX8AAyvXBgGSjLrCs4tC2UnoqyjsRz1Mbn2nmtdpMa1gP",
  "key8": "pA81ZsmhQa685vgejzRJRwH1v8QPu25tMXenFW4LY1GR8qwApawBQAktp7RdbSTFkXyHncaHKjCTeGMFn6Dw4E9",
  "key9": "54ZyrHtXXwZRENkTAYPUYH4MBa4yadecu9wA6cJ6XYjGrbh2WTTVTytT9bf1ELt29mdYaYbC3kgvm3JDfDwXswKq",
  "key10": "MmqFMv2ebyNK4jE8jMpHbYWZDNLEXacgFnQvwQGNeBpa1oSNhzXR2UU3YDNGCZ2ZDdaSZ2hUn4TAacoEJCj1vZS",
  "key11": "4No9qtRnbPWmqLPQkjdMEZqcYZ1U6DiFr5SrqDd8NfdfgAoZKRZYRyNVtjP4rq7jYfsgGmTpZF3XBvNsARYbUohP",
  "key12": "3AY1VqJGVZ3EB7AdgQcZTGbfaby1K85AUF5fAFVDZExtnYXxHkG2nCD8t3pzrDDoXa95wFg5NYvCzSmm4j8G1EC4",
  "key13": "3wKC5yqL1zC5P9dRtKofzqQK6CJjPNqSmdtyy18j36qg6gwtSTgRkt59SWeLiX9WSNhm3AyYXWuYD9HBpFefcU7i",
  "key14": "DoKEtsr6eSVQQbHsi4tFjR4qEFAQECvP4YyrgLSkVYyKG47FgKFerbgMthGekyWotMpgNbY5qhjqqfyZPQpDUke",
  "key15": "63bsMX4UTwTXJUvd7tQobcpTMohZc1e3f76KEWPpQ9FWmmmHFSzk6Bz2proEGWXxoXDUjdGywZuqkjDDN2566wZX",
  "key16": "3mW2FjtXTRNsrv6gMtcdtNBZ2TWw9mPwxdRs9j3c96KvZ5DReSB2LCg8qS4a2kQNyWmVcx4448YJjaGtKYM3y4qL",
  "key17": "4fNDMbhiyeikzoLiQwLyLvGik8JMpKqA1uDhE5xLcupSHNV4hVMLe22UpvNRZaqrSJ1zYfhh9j2A4ASRWbykmg7L",
  "key18": "QeszxY4iGP7JFxfkbwJNbjBoFcgyacCEiVb9aQ88KFYuiyrgMNVE8ZQKDaP1mzcbJmzRidqmDQrT1BTEP2dGZCT",
  "key19": "4tB6a28ihDnW4WEArZWR6DSaMxoGj87VpKenrRnaUv7nvJfqiAtqVvg7ZG2nkJH5ceYXMYweuhKwMRj8M5vwWTQY",
  "key20": "4vS3HYkP94XpUZzqUhFPbZcePqVZD7RRiHgV1XGzewYtKL6GzMcRNQms4WhYCmof1kKMcAWxmC5u4PcLj3ibv4YF",
  "key21": "mnuX5v47DF8ZgAxqWDii3JYB75EjsfPzCobLREyvph6BrJcvau4VWiE5xbpjM6G4vskFMppn5Jc27pRJSBNjGep",
  "key22": "4xLGDyiDtKpW2ZGSywR195skHd4kvUdUFnsMFWKF6tqdmksXmRaUc5MPxCGSKpG4yHw4Yw5sJePGVgND1Vt6scym",
  "key23": "3kLoC2zbpiEQxyBzvmPUz1N1fw5UdRpGzWKqAKeYQSDYK5h9Pd9jvCnkiKhotKoFS8AP1qrzA45vgzh7hdidsBfe",
  "key24": "jF7FT5AYUoxrr98z8STGBFvFf57ZLxNqgB6hvX8Sns4qZ8WxbSmcMhMwDLo23DKU4Qtt76eUTZmmkAMXjb5ouPC",
  "key25": "5UJzQg4uJsvLC5EJLLLxBWX1dXJJ7U4U18egtgJXeHGZ8ppJuxmkTHWmTxBayCBimQECQSqFQNJ7iwgxN7uFELAs",
  "key26": "HuxNcLNpqhnK9XhTiXxjGcKyjDwZ2v9ANhTG8DmQMP2SWN4reA3CU5TztCax2Lp54dH6MdLeqmvkorqQAcQnpMk",
  "key27": "2BWJ2DjLthpFigS7PbNBfuNAo9Pz2J5sXzkdbFgRfGsMvdbFfKQrPj89UgEkWQG6yYeGdn7Zmse5FncDKnSBuonN",
  "key28": "3ZCRRN1xyp5wXWHsEG3KhvEVCVQy5dmpZ6F1JvWYvYk8ZVQJt5agD69BoidnBCcorZx8YY9EfSeVWeHhVtiQETbB",
  "key29": "2uq3w7XdBgxBzAD8NEbroPsMKsbpvBAjsUVYnQ4gvMS11Tq3QVrRMwqCsYP3i61q6VRji8ADH2ZqS1jzThjtFnsJ",
  "key30": "4r6FrqDJpQdwqRyUc1UJdX4rJdZUgTkqwY2UV4QwyhEakD66oRq6xtDeGMCpKVR6hS9vrByKZert1gP5XK9HYqgd",
  "key31": "g2b3CiGgSHMD1kD57ZSGGdiFLaVZeSZvyLaFmhtTQAtGRjLHZLgKuqb22e1iDY9NFzgnEFmGMPNKUHai5vroeAZ"
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
