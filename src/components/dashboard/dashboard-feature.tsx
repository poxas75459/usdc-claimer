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
    "5GhKe6qxzzAmq98cKSsyqj24EerbkTJiB9j1YbBYu8oqGiUo4w2mMB3FgK8XEszoMKxPT6us7BXSet7XgXsQ1Tjc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uKMd9crcY9EtpB8T2bYCQM4TRqPEKKyxVxEKu6WjAQY1CLZ3N6msSkUJB6ZiUn857tr2GDkgYtrDU7qtz6cL3L3",
  "key1": "3526CCg2asNeZesaoggK8RRRWu7MBTSZ2gejS6qzfK4maKuVrqBK8ECWhiWEvywyVPaHYbxAiFYg8qKJj1CqYQt6",
  "key2": "4TKYR8cUwp2Vo8t5Xzcf2p4uCVEExpaAMUFteFwjKMu2mG1wHw1ZXiph7fDZAPa5QhDEsrLiULRSLG7mKnsbSwHP",
  "key3": "4JJmXMwW5iXdxRENYkCRHvuJuBtGAH55aDvtmE6LqG4iLeLrhfPVFrAbgrp8HNZs9DH3mBBWRMpNtkdxWs7rVaLB",
  "key4": "5CTuFcUxh3DwTYBb36pRdCtVKvPThadA7QZGWoioXixV1ZzcwepKqD8f2TUuGxLndzoQ74RLeY1MJzA92GvD2jzL",
  "key5": "2oqcGVq7mb2fzFHQhfwPEUKyTxcnLcD9wtuT6kcWSjviSTRV933cz2i9LmiXUGiDH36GnB8eLCYbrhGJ2WQ94cuJ",
  "key6": "125UK84qMArt7NTZBdbZCuA9HSvZLkqRZDsoQqi4dWxPwg5a5bWpt2s8HqNHGnzp4XUqb6haDt5JWGj57ZV1jnSy",
  "key7": "ApdXqu5Xj3ns45uLGTcwyfsFrLU8MmJ28mtfCRJRmJYK8Ww2fQFxpdXP9JvF7WivGoNNqkrwGV8ssxCKRsaqnsV",
  "key8": "4XFzG85P1VKgjiNyTxxYWJ66NnhXQmJvWQh2VCy7qFWHZ9mfrkzjMJTYfaHJzcQuZPH4m9hQi5sL2Z1kHtp8bnzg",
  "key9": "4zoHLdeq65VkUCPr4yE3onEu71TiMiARqjAAwb2kAwVsFUmkgyMGadUnax2bp89qfCktDgKEqeQp4rsYQJBKFhRr",
  "key10": "22EvdqSmBqhf3E2jsqqZgeCEhPYrGe5Cw3ejRQ8grFxDZqPsVkzTrSsye6JwYghRZxnFo7jFbWHoYmGzNMtMNeRq",
  "key11": "3kbn6xSFnjjemzsyEkxCqLfaBj2jzTPYwauodcfQ18UWxBzmAZBrj8bt3MUuUbwHuPCoVAocvtQWS9V8BrUkEoBS",
  "key12": "35dxGXWebg8LutQExGZDaq6tAjtkSwBiw2J6Wo2Bzogr7ZbCnKCa7CUc5Y9BhsSn4cfK1Z5WiQyEk1evLw3MUorp",
  "key13": "BCufVDvx6zDPuCvvvCoJFouisiE52LuybqK9i9PbaUnb1Z6qUNJbwwDY7x6oaZD5BMQibSahZJ746KVm5KzVHxk",
  "key14": "QQPZycSTUP1m9sakEBuyyDm42cPwCyGMEhpAs2b775uo1stPEbyDAFo6pmjqFWK4Fxyujd5N8g4vTikxe22h8k9",
  "key15": "5zRbGSQrLJnuHYStPEEn6WuvpEu1YbZ2qbX4heWdpawysyX9phZvFvCeXaPvPjKQ7cjqDz3etSyfszgkargMSAix",
  "key16": "3jZ98LjsVQK3RFMzNsydE99g5PxRAjRxLSYh1qGmibYDE8ALVf19uGuLbuqSy1AwHU4s551VeDmkiaHDi6WpEDRa",
  "key17": "53CyPAZ7eSpCMNH8C4UL6rRuNR758nNzQsfSzNPHvDuEowDc8xmK7DLk4bdqkztngQ9X9sq8RhHKKge2swhGU7Q3",
  "key18": "m5Tdcvspn5iQtz5u2KAd4bUVUzqdizWj3MhsVDFio42yXjBsmY4GMmGVW7qYL7JEdMCV9X6Y54iLyQ6rWyy5cNP",
  "key19": "4vTXmaZbubPP65CL4XDVyVWLMpGhvdP6GzTcDWqcC12qL88yqM56dJBw1cfoYc2E5u7fe849rpVNn5DRYrYao5s3",
  "key20": "2pxrRwjsrXNbnakqZ7KVPwQ5w3ZUH381qjAV1NKEKxu2U8wDFvXRi7sMrAUSw4rqPv7A6mqnoMapx4S1zu9avLr2",
  "key21": "4ePjX2bQYvjdtt7szE7rRDARhxZnUSXekDB73izhuMic1SLa7CJAbumKrpPdehTNP9BZ79ANHBL4627bJiqeLspB",
  "key22": "3j3aB3yb2GSCeTAsJYbjEYXermyntfdrne2RiX6dkmubVnSCTqTuzVFRYxeX8u8p9Gz2gWfk9SDzD5HBnXS3HERe",
  "key23": "39yuPaiS6KN2zfdtLo7Dy89cMPFHiU5afcGwbNexYzUmAVmUVWCccenLnPVHJPVmof7PDEb31ikVsFUpdBZGnPgZ",
  "key24": "31x1LEeCvsN6y2oeKt4L7ExNgaa9j9eDmKemGkZVbbFWpt5KFJAwgkGGVT4SHeo1uT7iQpLi77p4LmZNWN5fEAu9",
  "key25": "65AtDFVUJZExLYtrv8rPFRP1k3py4nS8UX2mARfejM4ZSZYzFV21VDEPnavczbk533SzWPwoPaHY8TZKUuri5ff3",
  "key26": "3SJJf439cMTPeU3VAz5sEPGCzS4QcMLKUFmLv4zTxJBUX1utZf8yv9yGV7gkB6JBfWHDY72Uqxj8TgcyvEkr3wXN"
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
