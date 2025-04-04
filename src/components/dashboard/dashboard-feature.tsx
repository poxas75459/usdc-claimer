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
    "2G94sa28qydEzTkMstqnraF9UBCb1BHd5c7wCqSvNKC9cMg2JzAwQuCuhoHgb4Rpj6s6m3SHe6FyKwPmdJFzsKZG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31Aig7NsD4RfaLbeQuaq5haiEBJ2rXvjmPpQsouLureT1QAHuc7wqFeLWtFbx36XW8VhfHHXyxM2DA1ToM8LDDte",
  "key1": "349nyCc51hCH3g1cNmLvn9LXcSoAqVJbTMULDUYzFTLqZ8h25hvvmKm7JqPvMMDyog3eU2JJTatJXAZ8VvyHTSRA",
  "key2": "5jXrGifMbgmgSyy4okGk9YrXiJNH5i59fVd141SMwU4Yhh6pGETWoSMbiz612Zgr5evH9h72dQ6EswQHcQaTfcfh",
  "key3": "2H6vzAUkfjy77DLya6wUoBGrCLAFoE4g56tyC3F2QxMf8xvxA73UxgwTwfpKGFrfxQzF3Mw1w9ftTDi1jVQ46KSL",
  "key4": "22Mx6MUosfwyyNKwjp7uhwLviQSUTjb3rKtNQXqYUtRi9kJXvgn8knYVd9eJTXZyztmKL2KzJuk6SZMvAm6TzdFk",
  "key5": "3kdXCKJSLEWj4S1xRvPeqH7qwGdGUPoX1mCoTqotjiyxG8yVhvZKNLYn158oS1KzpoJdVKJN2qm74eU2hqdEqdYr",
  "key6": "4NSUMS4BKi7boaAJr79p2X8CeaKQsxgP6gFVHRWUiT5tRAJe4E2XYcw51hefPD7C4Y1ZDTxkUZYpz6bB95XqMXYM",
  "key7": "5PcB3UueVTttncznbqYR7nBD7pVkfHSNNGDM1D253eLdU2q93ee63BXmZj8ADsLvwzNvExRhZf3B2tGeM6fk9AJc",
  "key8": "3S6rBDBatsC2EANe9grEW5uV9kccuMQcDfupFxC7UUKU2UnrDofcmwUq146ZEeK431aNNsbyqMKnyL16Vjytnzsj",
  "key9": "2hqHqHSy7fV2QhVpS2y83GgRU34APCLYB4f7s3StZQA8vZP7P6EhYXcSyqSNocfKX89q5KuMy4BxLYHvaugbPemN",
  "key10": "iUjqsS15hgB8FPofrgxKtt3FH7dkaY3QLFyRHbzYCzdKoJJMoVysFu8B5jovcJ9UXmJ9MaG9vEnaLnZNLoiZJMC",
  "key11": "5LEyjEVzRtWSwGfh8DD5mi8v8yR9Sd7caa8AihxzaRPwuh7nEyPtFY5LGepRBf7FAMHb15tEnrYXfS1wvgWLfi95",
  "key12": "2V32G5ksN2cNQwD9YZVY5WBmg8MVMDmt2XVhh79P2wRbKVR5q222mSzSGqn72s8oEhxRRLmLDDST8AWBNDRKEB69",
  "key13": "4uV6iJ4x1kX6wZhqKexgEp8uwysmT11DSyiQbduLzyuAxjnZcZg6GKYuD2g5Tr6wvKFFbZBgAxhtBhGL4MhqVTmK",
  "key14": "4ap95ZKdczxbeknJBKoZMevHZuMJzjmQdSjHSQwpCSvZeubLtSPvVjhFetbXrjKnwYDKo8W96AxSYqQ5PwKqKBwX",
  "key15": "SyKVFQ6GHQfF7FdeDzHUctwVJHvJLXQee9SA5AefQTfv2obzoUrpe8ZU2K1J47Vb2LziDQEVwVB2qcvtauJFT7a",
  "key16": "4J8Z7H11rzfykGquXQkCzZmKPQeAKMoBVEYu1GRYrM3V7bAnoA63rd62aB1ZUPvzsfwjdu3LFkqa4WGhYaiBc6om",
  "key17": "3XUu9t5YzfE7onYYidi4LPfWvFte84BT4YGw7nSvEgYX7s6CYYShFKzSDVoSgtYrGvvv9usnHrFPpVtiuKtEiqcZ",
  "key18": "4uF9RCiW7Gda6YjJ4LqQufK8zh8JJ8hkxDjQLZohNpqCywsP1gQDJRAWEPZn8o2pPQpR4NkjVQrwgkbcrUr3vWTA",
  "key19": "5kwcsCck77yVrHo6hEAZLk8Vcq5ZeM6deZ5rjs4MAeQJWXRuYs7BSZ6d6fV5WVLGTc7Ri4BUuW6XWuS34pgwMSV1",
  "key20": "4YADRbUT3nfvY13uJk3wqVLbbfrRvkcBubhdEtKtFkAjeJrJY9CiHzkueB67PmdCpiob8qL9xhtB6Fjkbw8aUw8X",
  "key21": "eKsCQKcnoEz4M5gTmBNu9Z6CB9Gpo5PjPo2ZpFpFa3bMB6tKf28UWHg8QAQ2ULJq2xe1i5gZRDUudS4djPBPc4h",
  "key22": "3wkatVDtjBHLKJU9PTPTQs7X2wcN9E2LfANfN47gHx19LHYAbTqpDCeg3Yxw2nCHvKTYVUcjYx5JJ4b5EBKXTFoK",
  "key23": "adRbGzm9P75CXdRbxqAyf2oAuEG1njsDX1JEDgd4p8VBpXJfL6Q9Vv5w8JRqcqY1kN8UZXPcdFZqmneRksaQS9B",
  "key24": "5XV9ceyR6HYZ2nWR8mgGcrJc6g5pXSExQtvQkRUhGc3rmkjDJj4DqdTpgnn5949dv82hJmDyKKjYwXsYquWrAdxx",
  "key25": "66JKWa54tdXV91M77p4tPWSrJytAozoKSPn8m5uXexvvZyK4BphuVDbZAR5Gh4YqYquZUjSipjvRREH7jg1rAgBc",
  "key26": "2AKRuvHFFeKvRLK7EDaJhYoMHgH26sNyttZSmFmvXpA19StTRCgwgwt4wuRxghb5RiSZP4iFyJJgukCkWtQauaJQ",
  "key27": "5tGQjc94bJtD552jk6zvpNfGiTP6kYgNxszfVz7bUDs2AxZg48FMBrXULMmU2ux7rfuc1pPQCUPo1UwvZvpYzgzp",
  "key28": "49LJb2fc16Gj6Wha41RLkAwW6SQUWKgB95SuygVusxAgr7AB7HSrePhxmeh74Ubz82yyL29i6LL7jp2C9JftwS5A",
  "key29": "5JArmwYEncDCC8HwD8TfHLsiJn6KpVMTao2nhmM5LUx3zM5aHXDTb7zo124nNAYjvV7TUy4B24w9DafpM5oTbkQT",
  "key30": "5231mg4kUUvYUXqiaTS7CWjyZytdQY3uXtA4hjfT7jFThVCiGPTg7tPDMHLVzLSNpxJ73LYHr4ApzuWr2DZMFcW5",
  "key31": "246P8XXxoq5LoYAFLnH5chaNxueMssgwGEskcDEnseyXzjhWB2kXdZf9a9r72Vvg6zW95X1gjH1479rzfGrTVAX2",
  "key32": "yyga8H65Sch1YTpZH591vToNrm5Dv3J7YNHEPnyFTazYsMFMj1irS6sEe8UUYYNCPw5Ku9M1g4XH9C7uBphcHXj",
  "key33": "H1VeXPMH5UwZCjX96NDuLqZSpGpmWkrNoFdh5qdcuVYh5kNFiq6XLu4qZFV1uznQpxJMShyGjAizwkwSuDMxVFr",
  "key34": "7RF1Vcpwj8gtpCez6teo9PVHznNQG8h1fhTGBnE3iQjjeqHTWYunRVkFoUbLVp6esNxRwpDYDSqFhFNW7zW4HSm",
  "key35": "3QsaLmKv7MEgHjqfHaJ9QbN1CTbqizdFvZJ5bf9xetfWeVfNQBLeksHxHRYst59bPwvv17GLxjp4q2eiKNPDHcqv",
  "key36": "4cRuQauv4Q9eN5JwanFUdgZuj2GqQNR7P4MN2V3DD6RTjj9vAYoad2TG3WYXVDksUNycgs4VdFX6oxioteg5Rpf9",
  "key37": "g4MHkM2dGdHA1zQS6McAZ9H3caVrr7PLMiLGmhiTGEthrXoERkcGvSSVnSwQYmkfh7v42y3s9PNs1akteXDjD6q",
  "key38": "3fHA1FRF5zwmz6YY5yyy6ZhGZHCzEUywgjHFEykiMjyxTDN8JqkUtC38QtXK4z6niVB25MMfF7hRUWbeT4M3ByLN",
  "key39": "2royiZf6BifWw8Jpc3nsqNBcNFFj69EHJwMnW74S1pBCEsej5e1FPCcgo465WQm8mdF58anEWGR9XjVjTwHeVeca",
  "key40": "ZnRS5DWps9gABC4H7QhoxvzvZiTgyhPaD8zhqPbWAWgApvEtRTwhZDkLg1gPjCzfxxSGVapedCaLC3Fv4bKiZaY",
  "key41": "5Ti4EbRKDJRpG9b6cw2uhdeGwxvDRM15nGHpJ6g74aUkR8eckkqKBYYhxCKAqTjz2k4v9ZkMcgmFNNLxRtaJCjQ3",
  "key42": "2R4TSvAgS2H1qurM7deMTzhxDGPBvrrYEjn51xmUGJMYoXecg7yrDDb1fYWXWLHxV5TJDStzM3RwgxQvtsqpa6cU",
  "key43": "5PTNRQNNTpH7nK696x5BjGu1HHvTHBwtQxxpakTsS57NaswPiHw1uiCNq1hMYjER59kPHrzMpnSPAumLrsu2pvCz"
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
