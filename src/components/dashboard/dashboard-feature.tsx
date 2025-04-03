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
    "2GpkWybCs9hAnSTMwd2GczcuE9tjyCm2K5snSv4fpCt7gQWjP7BhL844T1XjC88D4mkQzaYBNYh1HM6cudwD49xd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pjPC8CqN8z537urSrMh3HDSAMMjhhP63sZ1SZmy6HrLsYzBq1ZVnE4SeRmQMitd5JAmVseJRze9BVKUQHLhb3vE",
  "key1": "58M5GproRWNYohionxxp5kVx7UPCzBimdj913KPZzyUVYsqR5vXJ5d83rPsNqma8TJJi7b7oKQrpDtJdmJQ849Lr",
  "key2": "3HdJjuS3RkcRsXNG7SVVEXdMpDyHbY2qdRCB3isvnVA5N1kRKHveQ5q4HTJzaBSjeW5jC93wvTBWmVuFVHmpeMTc",
  "key3": "2uavVdD5XWJQqfmSUn5DPP7iAhwXvN7AxAhiusPnGyfodHCk34AU5nqyqw4aTocHEiM7MQMm39ASvdGXAzHvcZa5",
  "key4": "5SxGYXyKFZcujdjRQAVKtvyHL678ArEntXLatNz9UMwsWv9neRw7J8ieHZY9LdvpML2EAVhiUrW7haN83crUcWGC",
  "key5": "5tAfw6sJxDdGJr164Ncw2TnrTjgdJXfGQLvFrBn1x7ZT1kDZG1o2RLRNpKADbZKnGFcinCTUAS6wJhWC7i6qrkzj",
  "key6": "KMDwvn69anZ3TXrNMTJ1o35xyGLr7QFhDpUbH3aWeieRQ1x9YHmtzkTfeX9NUTxU3x7Sx21emPtVYzgRGNnDn2y",
  "key7": "3gUGwCHkmp6o1ApERFo1EJE7EqRRQ77DaUzhBfB9WrakLTgN3DppEnZUewjdvKMBmXvJApNUoBmfNDBMkJ3MVD7M",
  "key8": "42jdth2Bsb5Hkw4LcM8xYtn5FMvzn55iHtA7c4ZNzYs3Jw9yXY38XwoYcMdqY8Gcoenw7FZFNogzXDUCfgS6TNJF",
  "key9": "5vuBPZDzh5maiCoKaZwvVXAxrV9hxmeEQGYsaKtRKKzAdFfZe3wfjHNHGug1G6tsXkw16vrEgyH1UYxMh1R2DmBU",
  "key10": "5jGpfyfvYdu5P3qL4Dnx6fF41H69ZgYKP9ztGCTKYS5KPHKBCXFgwK5pVbm7N5Y64xiSmg1W6NKkQBoX5JiVug8W",
  "key11": "43WFkinmsarj5GYDxJTWZUc7EA8nn1ttsxENCT6AHYZnbyMt8RkM3C4oy5PdaDP9vKexpz7EvGeQrpBWRSHFEQkH",
  "key12": "4PQcukAisN8tmRK9PjqvrmoCBjCZhs2CNoBpn37Fr9cZjGCNPmgHiBAr8L1AxbKikjCyNtybC3PbXjLozpAfYiNS",
  "key13": "4SAZzZ43q3Nxceme1qni5NYipssX78xWPpi1VePFfXJsr7tD1s4oQpyTuJgsxCaGZxPhFF56uqRoYDcSz17NF8cY",
  "key14": "4uFVGZSJs2PrP3r5beRenBTR69AHZet29mKSEmrtBTNva4VKsSfAknS5uwVGmgM4XjRZgR3GtoyMUAqCmfRAFwxE",
  "key15": "5kXWu3zbmrLkAsdLMGWfaJiLZ2pszEypK9QayE4LqLvnRXFeevUcZKqP859j1HkhK9VmiRJiTDCq5dANMTcWucNu",
  "key16": "6VRGZ7fAbSk6GVxbpSc9xY4RhMmoeFUe8XaEk2hQHB6db1ofhmDmQhRyhfErnKmYnQPVryxkU3mY3j7uHbH8jko",
  "key17": "3H5cViJMBztfcbDVX6dYJsupasVtcQo49NmsFvCDDzA5HfiT4bjUXHF1JAhhyPHqGtUcbek6QYL29NbJgDJHNxCx",
  "key18": "4v7Kma6PoNBbvDJtw8fp3kfKfKSXJQz9eLYnEo74yZtxaeq5iR69FEgj5RpRsBFqBp3nNdgtCeVywS8p8fy85Fr5",
  "key19": "5MxEe3Bh8uH9ER114KhV2KoEBGkEj4absooh7myCU54nrzk3Ptt5scbjjBAVCHAadbZXP7dWmL9ctQgG8TJ5eZat",
  "key20": "2tXNtEgmRgRMdfiN4eihW17PrjLDjrGEu3mbrcoZnNWiF7VwcW8WSYGFBs4SQ7r5juDYTmVufrP93ZfUt3W3Dunt",
  "key21": "5zfCZL8bEAGr8vtU7SqVoHoacKFwyw5gU38FeLt19hjptwq2V2tzZes5xWboSVtjfUw9mAbRNZsbjBBrmrXnGZAk",
  "key22": "4JZB1H8qQ9FTLpRo9FC5dDpcE3PauC9FMvKS8G1HmBGp2niud6AUn8hBBLLnkvRLn6q2mXnEkTN1NFt72Gfb81zd",
  "key23": "3g9yE7PueURtJF4DPLs5j7F3STGdBoy9dB4DxXoensCrJWE4CAjypgoT9vvYdMUPdft44ABHzsqjsHU8bTFu8woV",
  "key24": "4WeFZaRhddcz3DB3BmMN5xogNmYmLsVrKDieufZurrA8uUjLr16kmDNQ6bVMCE38VvzUxrEPPT8rekLmdd3YxoxK",
  "key25": "VrV2ntvFccqsptHrHBwkFDee1VXEUkNEgZR4n91QEmCQDJikGtcMtbrv43WQb8y1qFneMVMAUkK3TnuHBy2PQ78",
  "key26": "5XtBmKseyoJSeQep1To4KKWciqHbDja4hQRv1GuwHzn82h8FsmmvrsvTYFhDuntcV5VDFTtURTqcrHWcQNskzPPv",
  "key27": "5aLWCJpzSY2gTDukTX9LsFPaBjrhyeZj7sXiFksXCE6KjaQcdFseSxyww2RuNooq2C4HiLduXCn8xg61fqRgJSih",
  "key28": "3wXQzP9JJW6MtRoz3QtMd6tUwLQ79c9CnC9HrnV6p89AeVKV2FgpsRBMRW5gqzLrCGYBwBKjExJaQEFX7jckMUDh",
  "key29": "sCMWf3NWYE8AwHtVYYq5m7S5gYU3ojdWhdwBye7aWpqzU936MJhZLgTU9B86YG5s7tjPZGJHAR9p3G95tWmY1V6",
  "key30": "5UWRjydBBmrxKf8BjMJwKGkbgx6CxFdHodeTj4W75isMKqKr4nJVEGjURSYPjvg4DxKzDKF9BKv9C1HbGAhMFqdB",
  "key31": "63PFMD4ugmV2GG8pWomzKDjTgsZjkv55xnhhi1uZANYS9zNga79AP9GdnFt6gdGKBXUobePYGnbPpWXZvbHpiFz4",
  "key32": "25VqJ4VWuvvBmofF8S5YxvSh16uTH4TgBR4xQGESWC7vz29WNxfFaFVb4XMVzvE8ucaGxwXxzpR5YvP5NWPpwwGw"
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
