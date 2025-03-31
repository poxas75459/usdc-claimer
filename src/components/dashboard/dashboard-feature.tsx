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
    "TcJt3zCCjq9MkP8W7rcJFSvZkXmsMVUGnXW7z9pJNU44dtGD4p6NtVLJS16DYCpdeau1HLGnvaxRCNhQPuYU1SX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vrrUU2g9Yu2bjfjcCoAzAmz51VuHRwS4KWCpoAGTr5y9SowHkEwRGj5jBNREAhLdBqvByPx6Sp49a64hwsLC3ZF",
  "key1": "4xoYRDGYp4HEKmjcjbyqF6NdQpUDuXn5PCf1qGnfp6BDZEMu8tWKE9emX6Xyx3W285NSaswkqkcJ3tXB8qyUUt9t",
  "key2": "4fs6hJG45sDaX9W5CNUmEmz5D59cvFRX3Z3yaKLSovAztitYSTzXUtn78j3vjYEWQZfG1hrbMgvURNyipWddJFVk",
  "key3": "2gRQYpTmLd6TxntVgjkbdjZr5Dqep6N8EsyxGkBsXNvtvTHWJoaMrZ9K2jo9iSi2FD6BQPMqsSBdQoHRapT2Rn7X",
  "key4": "4rGMNEbX7iFbbUqXD6gA5ZRCSnKgPAVt3D1coL5vtaBZybuVaakomXB7pYz42zyEi8Dm2aiVDG2abunyhexNbbq7",
  "key5": "2xKRpdfT69UMqdbsobzGryEUJCWr1zjPtTrJU557svTh3a2jX82svAAD9xTwEA8uA7HvWJT2vbiW4BakfA62feAN",
  "key6": "3W9txKHN8TCFVy3nPf1pvdTsevmHHToionTwziJeGcyuPrijSPoVWdKn5UBN2c3VFNnHU4xx2P2gWT8DAmdBPsUj",
  "key7": "4bnp7zyFzUnrh9xtw4hWrGHQL3S3aLDYdpj4zRqf7TGX9JqzhD9CG3VerUKNSQR61rXgpjMm7LWRhZNLBmotkViE",
  "key8": "592h5qtU7FsH7DhLDCjvi2vdcM977pgGkbG92DSUEmLtTbjCeGW29PuAFfvj5RGchxrZD2oHkjtNQ8Y5w9uZYoXa",
  "key9": "3k4Z9ZPhSNpWc496fSp9J26M4VyLVW6kqM3frQHe9dj8edsGAcydqhjWcJWcP6BNZVYFCipvLnCfFinAxt8Dce5P",
  "key10": "4Wgx4qjZ4ca5XbupnueRQEoVBLbGMFx2VXVQPBk1T2vuBNdFcKg5zpLUgR6p5bUKJNi2bymoCCupiufjM8vuGS7G",
  "key11": "5iGMwCVJqQhwsj2YLku9Pgt3X6U7hG59aScueod6RwqhUZtU4t2FPU8yqbvKgu3jSh18zqLvgLDa7mh82wQojeT1",
  "key12": "4yRfWQKygCvhEVVrvZx4mtMiASDpdrir3McNyrrqmDsRjBWCgCawkM93M4ZN7XGHF6ZHcVDPVkeq3ape5ADoR3EZ",
  "key13": "2LvRx7fgJAzMnHkipRDb8T4sjyNMvxvjstPk2vLTJ3x1vKTBN3QmeQAp7DoyeHB8V5YKp3jf6JARBjGtb9UCbqA",
  "key14": "2BdafPMpQbxJCjooxkraB6vQ3YcoSo4AkWgni1NHUW68XvUiKaEGVn49bfKrrT6zsaPvqFp8x376aqWHPtMGUks7",
  "key15": "4CmULuz6J3YWoWYExQvNGZJci9dir9WZ1oRZg6rzMFvAvacHge4vHwPvxBsvcK4FaUmWGzq9kB66NQFrUNF5D8uW",
  "key16": "4rGnJtro2SVDjthT7WX1QmAUEn91JnupgFQoKPLeERkuUGiNH6GzwSCPfynt17W4F5gPDtj3Rm3yso43maoJ9CEW",
  "key17": "368ntZXs4RmaLRRk3FkXoURiXw5LgMhEQdaLuuwSshk15sq1Aenw3RdAjfUgtgHjMLWxK2Jiv6L2cME5NDxYsro2",
  "key18": "3toQhkGJ2v9gFVBT1JDEUJcC6U86MkXQq97sH3Djikpo4d59b41gGJFgb5owcnxQD9s3PyoYer97amtWRGy4Jmry",
  "key19": "3MVTZSWZWyV796PyxgVxeaQHiymMLknV7gRXgwFCAwoTgnmcnZ2vLv9vaumXuNCijLyCvWJaHf5aP7V7jJA2sgGr",
  "key20": "4kxhSw8yyQX2fpHXzkRJZRcMGB3hq4qA35aFNxpDUSWfjQ7xqgeg4v37EWATiEYYekXkKW9bQ6zp25n2KBLDjfGX",
  "key21": "tcpvg3X7j2Xy6wsFGBaosTiFv7JUSSxYwSyUs4bB8iEhY2ugGD7xqmzsGP3EUtTbZzS6AqLLh19QbdwSoyjG8CD",
  "key22": "2BxBByeL27GLQMfcbSapNHVooGHUQiZgybzudcmLD5qsH3neWvYbThfbVrg9DNW7XX8dxf6em8dtCPbJnfKZ29sg",
  "key23": "3Y7ny2QqsWYjexuNYW2uKNVd6kdmCcNd61EP4ZzZYAKgpkNjSm3BHtRCbh5i9T1BDZyN2zBzAhrNucnf5YZe9HvX",
  "key24": "5Y2orEYPifPupiHcLYXkqtfHxTaKA9PXRsEzqymo5rVjXW19PnnNE7aR3U7dySzHHJEpwtZG6zZ5zHVsWv5R5rjA",
  "key25": "5GtqWjKsZMtmYgiJYTVbXjDGt2NNb7buE7qXy9fMewQqpGi4QBfSMaQE1xs45Ys5RSRrJgNLtiA17634vk762yji",
  "key26": "5q5PfahtK78bQD14oJnGbx5CK9SvqrwYKwxT6mTZwVgiFeXg9JLBb6rzvcUz3k19KD1g1BJBx7LBcDVaQr5YTsob",
  "key27": "GkHoojiNZifN4U5rn7GL9iXDb6adTW7t6huj41qXZhs1Y3RBa5zKpnfi8F2V12j45gSbxHfn849uvUmHpg14bnN",
  "key28": "35NtmqpPumRDtSyoqWnJczERQShZgzuqTKyQUEHqWAfdUjWFkdSgQwDaCe7Ndt9aP9Dd11cW1opvK42S1TcWhTDD",
  "key29": "45ibzba9KtCsqW4mNgZ32tuxRxdBVC7mVUTVuC4EGYk7HFGgDMwnCtzSwDqqBq9KB5NUUyN39WBXJkXMWnmar2Pn",
  "key30": "4vp5FpJQyCkby56BoxUHQ4hNK7pzVt4Bij8R1Jk8Nyafw8gL9Zwx36VVZnBJUTniQ9DxqZj5gzho5FtdcNobVrYa",
  "key31": "2Dr94UJuCG3xhJsEoNn9qsaz5SQdvjWGc3ECNGwDQMxW9sjeEqFPsQE5Tx8xuqRrpuiswXJMX2Y2ZXmoitrGh98x",
  "key32": "2Jn5DsKcYm5tFT4FXnrZ3ndQkSHqrGxYvAhtQrBnoHw52w2Ye7BECScNzTXHegtU7nXciaDM86WZGMYQJe9TkJG2",
  "key33": "2LHfpYKqKx5JsRGCKYqghX6xBQxhYUELVSUAa8CFr3woGYu7CwwMfxAentG8z5cF7gjTbp6KBBjdEdjKjq6cq1wV",
  "key34": "3sTrUbvtRkajXf1rv1x3sokB6xSv8i4R5D7DrbSs291Uys8dVjkbRdbpbYnsqByK2WdrP2GvZc9oeMpSQtagqUH6",
  "key35": "3HZ5DthPCK28wfxnXcQfoqLsSk5kSQQXPTMZJ4275XzFXrTTRge4fAVXBXs29W1MfHdhES5Q8vR5RN2Ac9ZJePDN"
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
