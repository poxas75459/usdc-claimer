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
    "4KjUjAwCbkz8svnNsupnHbACTcMyxj9fkBMj8gK2cHdgxPXvNffPmQoP7MiqS5TAumNE64HoijSbgoDHX2iDtchq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kg24WUUJTAGu7NngcovbGmoRQnngwfXCDamB2BwSLzvR294a7txphYRZkcjr6QTxeisSjxCp9kouJMQky2WpBdR",
  "key1": "5KvdegCGgHPHMkssNeKaMGQwjm8FRpxHCY7v55ypTNdNZS1BBfUDUQWNdkxkaxg8Tn8tuFVtYs1due6ndiCnN4Y5",
  "key2": "2xmU64fgZDCnHPaKpQCbGNejjGps3qrNTvu8jkcxiuUdVvtoR8tkWZ7WxrP11nAfLkVoVeT6nsdKMCRPJ8Qsg3WH",
  "key3": "3nZxTAnZjPgVEeYYMS8mT3ezHK7WonPWJ9saL7Kvw2r7U2FSH1YGzRphYXtrwbX7zZ5nEKSkGTNRYZeG2XHRcaHV",
  "key4": "88199LsHH8b8yijCy5A9HzFUiuDGpb2ZcKn2jUXeV4oeFZ4wUJx2eKSFwkSyYatSN2jct7rmPYifBCWxPRdi3So",
  "key5": "5gnS4JG2fSUKzSAwVEVnyDQj848kQJSNRqt6AyJFw9kH38mNWzPPzJLaYTqjP6LzT9jM1zgGxcXNj4AWHL9ZcXBX",
  "key6": "4LeRvqbYnSJm1ptHCR4qTFnxNL62FzmJpJq4nyNywGRcUZNMhhgW9EBh83uXJhQp7okcQJ5Ng7wh8eudDz3iVhiz",
  "key7": "346NTY13XBqZoCqZqiVXFKQ43g64mcDJBLvKJwWg3W4vVXitXwMLE3YAvRWJ9B6ofSiLJjHPXg454cHqTexHzHh9",
  "key8": "2cfQFAD8ncgCrYX5ScDhSpfbw1DNGHWAxFrhiM4Ev76byCFXubH6f1YsEPYBs1TfFDqkYk2KWC9iTHuBSYozKhDX",
  "key9": "2jpmBJiyPcnEgBdsd48TGGxZQn5Yuvo41fp37c6rYtaxMVQFZGBZ6aymgbJDPUBzT4gmpb3gfgyf9xVwQH9cqXBq",
  "key10": "3TCmwu2Y3cFJgZsyMdGgqfvgiRBkGTtiMDFPPPW6D2j5HbtvFs4c4PiCFVvRqcVDXXeej6nDr6ZeNYWu5obvVYi8",
  "key11": "kD2ngkTAKw7rhiYFv4Vy1S6cQsQvWxDQ42qdfD5ub97LspXJVEdAYycUMyfSbKZPW5Y2zfUsrxED7J1g79Lbnm9",
  "key12": "mhsJve5xn5EK1ci4W6wG8qTqC7jEyFuynLxnwSQ24w9ydL6cv1yrn2cQKBDkXeRbFwdvUmhWmvMsP1ZbkHtZVT4",
  "key13": "5F1PvTETmctNd7xv4wGs5whNNS5R8f9JR1c7xAHM3sqch5St7BnXssEPjnY3wMGpfKwTd1P5vsF9Wxbkq46fL1qz",
  "key14": "5vxSUEwUiNpUrnrL6mmqW5Sce2kPoyNVwxVPqZuLjqBteX1hz1cYmMaftnrGP8ive6iEDSXLpRkSq75ubFtQKhFc",
  "key15": "513QCbsH2awMJhBUacuSbZCRsuwu7ShopwRJJR7tBxHQFY5rSfqvBAyZPJdzwfYYF8jX1chuzKh2f8ogTq9BNd5Y",
  "key16": "4GtvD5mbEXrQgS7AkUpVCzDXYYsDqkiZURpxMr3iwgNDFbfVpBVedz5mGaX47oe6FU5ENDNreCwjL2Xq7Uphi9WP",
  "key17": "5qLiXg2UfCRPi1mZ815yw6ihNvcUqDUpQwxuZUUrWLigF8MdhFmxj8DbP4qbdTtwpb7XymZynLvDs1NEr7xtF8je",
  "key18": "2phZ1pqb3Gp7niduAGCrqbKyy5betr2cjAzUxSxYUW1xhA7NfxqAcdUKwQfvLV6PNAePxCSgt7MMuHa9hruVSsny",
  "key19": "5diM9JkFdnX5TXoDaC6zSsAsQuSXKZQdGD13di5aFCZfSraLys55qrpBND2dzmu1bAf9DxTdEZXcjN1Jm9SkkcgG",
  "key20": "2HVWfxtGRC8bHAu8skg19nrbFrVMzRXWMxqUigeXzZssXS5n7ZyS3LLvy7kPBNrKkRRx7LLaKLxhvVATdsS8jrpL",
  "key21": "2tBsTbDM5JkKjcapYs2PsdrahhkeaNBuhUZ6H7EGGZNPZ7WEuVXJXFeTVV4PyAKXASxqs7C4tpQqP4EBfyUFueCx",
  "key22": "4AXr5LFT14uUJauwB1AycFvezfRBkSeGtyHHmBTbLA1X42o7qaxJjfMZwZWnckFZr9a45j3Ur9TpALHRmRWfJ3jm",
  "key23": "4RdKHwbBJGQ3WfVtXdyNzPTsobNEc2fLWj6T2iTkEELrP3sQyNWK4h3N6YJuXBt573iJJWUwKC7iVdXMARefLnSs",
  "key24": "bBMgCR13dk91xxYMWibzK8HTN2PaJxjW2JSAGVe4vVK2F5brnoC5LVjuZJ9YXTAMR9s3JFg7FVKbE5msnjkD3tc",
  "key25": "5itjF7k51E6MiwxamMUKiauDisug3P7E52LS5wREWMFeKJSGRMJhX6u4CCe1vhB75GrEgunWnGoj3PdMC6H6uh32",
  "key26": "sTKfWPfwgqjiUVuo291kNuakzYeDMtRrFFxvoZjqTEECDnL2LJ843UZwfE6hBb32tsvxoPCiVoNJ92L7V2jTa7o",
  "key27": "3pikQJG4gLnRh7FxF9WysW37ZP61HX7UFh5iKkDWKqWNibEgAbYadfX3VrsKSsDaE6Kh9hN5NuMy12RC7xSHKFyD",
  "key28": "53acenAuPR7T4ZNbg21s872wid7iyT3Uqiqb3KwendTgju7FacFLcNsV3ey6FryQmBLyhhxXU3HMF9K9xVCrY6eM",
  "key29": "bug2gVodcvzVrXeQTqGtSE2Ro3E6sDiaSyYygFdzH2xSW6PG7tZYQuAmCTiFFfFYpEJ5wd6i4fq7ZP353n3Xzvv"
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
