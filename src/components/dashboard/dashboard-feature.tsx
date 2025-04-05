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
    "jazWuZwtrvz6TsXXVkTeN7dWEq8FcVd9oFw9h9SBsPmnhARuUqvWfPvNDdeCwaZkP1S6f1KTUXcXMc8MuUjxeqW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "643YqEmGpPfAnnxxyTcnuW6KWtxKzXB6hKjsV7vqWuo6n89n6RgNQmt67EUf9VyT8Y8RTdZkw1Pyy9CRAJSEzkJM",
  "key1": "66VN5ZaUSXMtfYcsJ6ccDQ24WpxyynHE6DWurtChYorX4exB6Rypp3b4KFGk52sYi6M7AwP45p8hqcD8rBn84oT6",
  "key2": "45sKD2K1FYooRyeFwHbYkAK5xdxP1vYrBuv7H8qLxL99tNQcyzQq2mccndnQz4KYGbEhRBCycKVyCZTe57CCKUWi",
  "key3": "3pusoFyNh9xeStHd69qZSYccmQMBnEEjoXqLfGkNYUvEzb4hfMQ1rLHjwZk3tYtRRt6u4hsZrZrhjf4qWXvdnsTH",
  "key4": "3po3Fzkms4d4FmXuEMbKfNUFSRG7q2oXKKjyBYo2EXvNCA5ueW1ZCEyk3kDbgho2GDadVhMWDouV4MD7B9qtrDkj",
  "key5": "4mxYSsFy2eLjCt9yBRtPDXJCE3gZYKFiBYqiPzJ4rgvYPJxJyUqNmWDAMYpQ7jPC5s8aBAxQtrUpbAkCHsdeabNQ",
  "key6": "4HeKZR8iqhqtfpyp2eU8PNnnFHBrZVynLcqDNQZqmF21sptWjGkb1g59sfwmhbngt3EKM9TM4A5tQSanaT73xxdb",
  "key7": "5EEnf4PdV9MxzJVLRSmHkg4a3UjVvtbfDzQ7s9ocDHGmMqm52fuQUqqsFyFa6ERXwfjXYYxMmGt7uPNq7ya2EfmW",
  "key8": "54eDpg7WrLYS1wETyRsi8S7WYtDop85m2MxCrW5Y9M3RvFxYxnfkxoMGb943cLmQMQNXnVBTjsHZHeEwaz5UheY8",
  "key9": "2VgmSqZ11TxYTcX6mCKXYF5dk7kKaSRvZQW8iaKnaMp2Z9GxfacgiEDozhGn9xbSutTNdiQ67au1hzSdc2NriG8k",
  "key10": "hngfdn8g5RKoDMDvy5W25iPidYasrLrf2WNRHQqad3Hdy4BjxVLoGACu86auW3FFJSZNmiuDi3MDkqAKx2gVok4",
  "key11": "4jVHsuDxazUJH4nZGY6SQQoQCWfotcvBaMG5X7UXVQZLJmdRcJZWEssPkumT4i8HEug5jTvVjSCM655qw8LLHo87",
  "key12": "5yB352LvEitzrtaGLjjN1NYXSp12uCLu6A9ufLYkmqijQGmzQwNWFfftcWmN8fV1N5CLhYCz7kWyH8rXe85Zm11U",
  "key13": "3BhP9k4Dzwi1XXzD9kGBLPvtRg8fFcQHuBqwHQLy3RVJb63X3gnG1PkWpgHnFgZHUyRfLPqUZUht38sGwUVMoUze",
  "key14": "7w99o5gA7V4J2ZRUmFZB7eCggYmeu3cXX3nas3Bw9kwK9qkvJCJWGodkCGeoif8QaNXUsKYXEAt8zHGnSVkxxuC",
  "key15": "5Bi4PhrM3Y37yHVMT2UxUxUQnYYpzNgKoaPswtn88vNkPQfEUeUjj9k4KbMB7r2FZbt3n3XBPrngo7BXL4StzEg",
  "key16": "2SG4cP7sWyz1XLbhDUFTL8FwERp8jN54CMCDGPiewfhaJhKpFhrHL2yAjWGnr4op5cs7gKR1VwJa2KdD6bpjqk63",
  "key17": "39SiBz52uvL5GHT8wKPRxqMp3W6eKTFs59ynBArguauPQVAxyxmtgo1t36Amz2RajLYVKAWqPYjMiBZbCxsZJGeX",
  "key18": "5WKi7pmzLPgT5i8PRgy8dYmS54J9cUn4WWbaEB7Cms2whJrxzZvLPyUXbqhrQ58ZkWgFzX29iERwDaossxwUiUut",
  "key19": "oiKQuscgM7QFT7Fg2HVW7rHfNKtUyNyRaXdWky5LPADz9cNywr2LvXhnS1MZJrjojM3Myasv1Qkc4ckYDB6tA3w",
  "key20": "3NN4DJnby5pd1a73DXGn2rfXxBWFqhuDBURp9eEnUxAEsPVBpY3oP9ixf6GeFHvnvoFya6vWFBaMLFjzZG4F4NMu",
  "key21": "38HnuPpyFuZeNnqjPv5LvZwvjp9utHgcMg7oDwoDd2wp64QVN1jDDz12DMnfmhhHwvQeRDr6zSo4QqkXBrVBB24E",
  "key22": "55CQxizPV64TUNMgqQXswNJcHypuD7ZBHuB2MBgk14UEv9k8znV6n1LT7RUE6mK223Y5SqWLnW215gFNj95P9YfT",
  "key23": "5yqTT3WZFDBMxDYDT5KqDZTLQATxMPaTmRyGvACWknCnLt824jebg3ZWgDGeJUD2sWSuC78raDJjQYfwKSVSYVjz",
  "key24": "35NXBmiT2PMmADM8Tfamt8SJDr3nS6pc7goFx6oywbgKCZwG544MuPqLVKqRFGbjGt8Que489UQNFU3qZ4vS1QZW",
  "key25": "2ja7Sy8MWhpHJLrLR9vj3EeDJaHQNjBdzys9Gg7e9tZrq9cEqmwbbfQWtsPnr4TkwmopiyG2Ta3voyAHpDdkkHp8",
  "key26": "5f2qEPw7zcvGPWR34oYzjBrtBQLmcZig9r9uKh9vvyx4f6Q5etT6hQMSmsvzuDapKwHXkk51RjWvtPCc33Prr9ay",
  "key27": "q1AGtUgamXVoQFHHDsYT8LX3YxvkD2WuogJcxvuGcEAsgQCaqaGbskZzynArDzJGoUG4ksFAkKkQntyuygaxrV8",
  "key28": "2J9aMk5oT2YzyuV5taUVa1qYGoZM7RRW8bVyM3vFUdc399ayHaoAMBN828QY39eQB2My4uZGJQQq7TTFmoDCon7p",
  "key29": "xLjTHTMpHDAMpR5b6vVhMXBBLFE3FhYBtdvw8jkpqhVi87UXmnNDuhJRt36R3EpgXQ7zvXPWyyVoLqekhgEakrR",
  "key30": "2dJnsH94h55gvcTYr2fF6kWZZ55PZrqK7K1ZH2zqrp7AKvg1XzonziFcvXBD9kSDMFbjA3F8Z9xi884zYPTyumYw",
  "key31": "2BNgwNYv4RVh9LKXTbnoFzDWTymEhcDSZA3G9QP3t6niw4Pnza4TynU2fLKDgs2KcR9CRzmUBz7mFsLEnUpwwGyC",
  "key32": "3xZpVKe2owE3RuXXZtybL4rkPZk8fFb7LueET9WxQcHAdjALwQNHEqgrVQBZndpUyKgdsLsDz7AHDf1at4NbpUJp",
  "key33": "12dHB7ULRXp1hbdcQtPGCcjBLbdGnEc3hBDKUcDKUbsPsqmsEgQBUTw3pM9MSGyBNyPD4LRhEdMX7rv1EXiAQsS",
  "key34": "3Fsgc1E7TNyeAam9XWkxkNbkioRQAJ7eHEdUt5Nz2LoASTJ2N3FD6DN36HrPX55hTABR4mzHz7TRWM3Zf5Nk7FvZ",
  "key35": "5JZZua6EjvW7vzrj9etgXMwhNhkm11VEahAH32ksKzMmVpKFStGsh2MuLAZjoWu1dfgjw3nNL3cwT43P6pm3WKH"
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
