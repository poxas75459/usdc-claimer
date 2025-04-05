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
    "4UB6skLeKCP1rtKhR2TswfGQ26SpFwwM5ne8AyeLhxWj7NaotRFUTkqhaV4Wx5VxMNuNFCRn6jnbk3JXhuLLiV4M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Wwy9tfpY9Way1Uu2UTgDK5pJEcTXDpUjZy5zKkwjXyrEBN8YHbj1BL27TB5CX9EVtZR5M1gJppfvk7ttnfGJXda",
  "key1": "5RyEdTofL8gV4K1YpKy9sJdehcoZVrvrMtzhQsbXL3ixnusabKANWJUqGv7C4PXytBFhcX4891Q8cKokjjcfKq5A",
  "key2": "5g8PVMJTdj39Nf4yH8uSGp7vuBSQXA3MCscRKD84c2DYx6wTjrmFVALXKmGMuzbJC9Y8CVidv3jSa6294aCQod3n",
  "key3": "3wpe8yzsTKsVAEeHPNdDDhFVYqQUJL3h5nXTmTWfbVnCMQVKsbaHdL5LqEnzjXpteHZT7uxDPXAT1LaFiFtZCiTT",
  "key4": "4rXAwvWtwz1dqkhtCSVWEdZZrVsZmHr7YfnxbifvBsEdK7ZiVbLtTGnW8zXf1EzBY9CVz6Xcp3SVjMgbzuRZkjEA",
  "key5": "4Cz7XfEFuF1Mqd4KwuRYFLsBSa49GQm2cSceaWnTr1UghfDqapa7HucuNNEpdHnu58VpXCiUvwkCD9C9Lbu9uQUV",
  "key6": "YSmydBKTxfn5NYSamT6KzG2GY6zhJVu8pCD6oeDqePA5jFoUuLBFNCbZRiwmGCbEEYecRt7AZgVB2JKGhNu9ziQ",
  "key7": "3FKVXWAMHRqVT7uMmFNC3APfAp9x4RhULWRn1cd5aRGtAfbEToafK9zzt5JpYUmvKwFgd68gdDzUrhushiE3GnsK",
  "key8": "4tUPyGykQokjBsYyh9p5DwRGRi57hZG7vbk6BSEgMmo9PeDds7XtRAyRMMPoDyTUiLB9fZdW6jdsSVk5WSn7A6MA",
  "key9": "2eZKyx9XXHJZASYhawhW9NPmf9GVCYArU8wBTo6ZrJcZAhmxmr3L96KmxuA3q2ETjGMRTdeqfJBRRargS266RPwe",
  "key10": "2LjDW1HAGG6nTrq54Aw9ZM5usH1ZDcnr8LwZ7gXbcDDA5iA7USG3AAht2d8gkrkWUDQKw8UPeEk2SSMSh3CUwG2g",
  "key11": "4zHUfr6mPeessLLAcMSwTtfc4HFFrUReqBSV9GnoBk8m2FRQGtQzJN6paR3NUttUQiemD1gsBkzHwPdRfBCB3rgf",
  "key12": "63QRtoqupiVh3TStqYQ2jcDV8JtzuML9aCBQ2Zry5Y2hM7TMnvpGXf7wHJ5PExbpv8CyfKnASNfKTREDVuzvNHAr",
  "key13": "2K5QVcq6FLEtmkLAni5KY8cSE6xVyqjQBzjrXANLbbBkdwJaQaqUHySdwVaW7wmGUGhtSc1VTzxzdjQ3wBTpmSm9",
  "key14": "5PWquqWXDMFCPybgrp3UbNG1dpTJLJB13e8aUSr8K2PUP32Y4sfHFiDyRwY9n8yUdjxSyv1fy2R7xSfsW5aKTvys",
  "key15": "Mzhai8pKY39FvrRQGiDz3DpfD6tvt532puysj1NC948jbiPZikCwMfdqeccxiwo11xBeiVkqxg1k8E4tZDbUnCM",
  "key16": "yg1yv1HYEiUnmYq7yVWPdRy3RrgDgaSFcZBC78W52wea2LuU4bqwzrXGcjGCLSaq1crKnFF8RX4MFEFccLqWnwt",
  "key17": "4p6uKRwQruZpauTgeUfqrb2dy7CRraocwZAai1iR2dF5ydgQWQtoSYdnHbLnRGvrjjYDi4bxQc3JRBKXuoPUf1tJ",
  "key18": "2TyTGEWJayZs1zJ93M7vJu3MVWRLyMHJdBRoqMxHGNHzhFVL3zYbEok6vPy2kXSJbZXhZxWfJ58Pm3gdHbPbQV4C",
  "key19": "gZoWkFSVpvSUqXmtrSiW1Wu2Uj2BNWgz8tMgXsSgCwYAEDyAbh4BdKgeZ5XufhZRmQHZQaCYfvYTB6r65iTrBWi",
  "key20": "2RZY7mhEWLkx99z8KYsRs6X3wmJfFpvMTxspkqCf63XUvCizbzzdbQRLkiuX9JBk5nUSw4po4pEUMw2bRpyJWuLg",
  "key21": "n7QtuTcCF5Riuk88LYoydKe1Fp3ktVmDiNMbhWreyGf4sZpK9uDuDFYQv8p9s2FiJCzQhFJwyXJhQ3cGhT3McDg",
  "key22": "4wZTuYYdEFMXCA47U35M28rpGzucwi6SvrCCzXLiRtAqnBLHvfJopWxH5GuWRjw9Wt8FbpjcQqxxv8x2W46uVX9m",
  "key23": "5HbazaqKvUkhTRmyL2tq8rwUaiM9cY3Q1hyBiiBSVUGZG77PQZAMiFDxbnGGcvXGrH3zwqr4ruosapGfd6fJxjf8",
  "key24": "2zwzEM9CRoXNUaFPMsQdTybKbyE5zw9yXgqXxWDGS9myGZ6euaU6vk7j3dbnmkpiDeq8uS88aVQNaHaECNv5DYEg"
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
