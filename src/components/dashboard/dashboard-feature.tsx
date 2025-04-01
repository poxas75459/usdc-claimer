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
    "51MhucajVsmeue3w8fRfeqwTz7CRsuXiznT9HxqKhrjpmUM4RVfPmJrmHvkjsdqebcSistCmGNNv3ZmCBw6a443k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jWuF4grGUuFVzaPRpyiYPEj8qL9qnWD5gR2XcBt9uhHuu7ToyXP7Tsoj4mdY9fww6BZH8j4VzAzgyjAKo9oTZ3j",
  "key1": "5B6YgL5qdpVLExuBAh7hTvzW8DbnmfevWMpooeHk3Krj2T6oYNKVh89DKxxMhkTWXbFVKxGYoeBmjndy8yKJFbEg",
  "key2": "5nqM73GMXTWSzNzeGoBkbwsTNnNT6VqXVhhhL8UU65aMPVhPGrDgbTK3vAG491e5LBcsZETBWeGpawomv6Xb7XY3",
  "key3": "4ojZaaf9ecDJgiYZZ4ioDNJJUqphZAmPzZ5rGPYXw1qeCxXfTjZr9FShzcKhU3fdQCemjBCEL7egSgXn2v2hzWfT",
  "key4": "4eS7M3TLDXBJCXM2cK6HA3jMr89w77fS5b7s4wi2W7fn4ZBK43V7o6P75w3cjrX2WFHwXbxqMCsExtXkfDTTJ7Sj",
  "key5": "5W8Y3L6o9B4nsat3QndrWXRX2snS1KBDarzShEtgc4du8za4wxGtwqBsdw2DxqzWXe272fuC9fT1Mq89Er9ML9AK",
  "key6": "8EWEPBftUP4EmoYkabTGqqjLp8JXXtoMHuR1aN5yboKP3eWUTRQLFgZErV3UhaqW3C1D5dcXoRJVuJaHYJWZ5qY",
  "key7": "uWp31QGth2zE5RnHCfg8PMbpLXxsS9EWw2MPoG8r6hH6B5te36qMs5Avv2k3dCqauVEwZFxoc3RWmzB95VZKWKa",
  "key8": "3D1mxwn1bgRk9CQmyoghHMmLvLCkxMD42btLVzhbcaBhazmpwdY2vChE7SYu1gp2Sc1Rkt6fyTwmgNikrN27Q89U",
  "key9": "2bjcz7x5gvfT47t3D6A223SPEuRVCh7tRdKhfkAigXHaARfQMcWrKHFem33MEYBxvST5YN8uddgu3bxwBufEvnKw",
  "key10": "2qCVHxbiwvcjCsFaa1o3zA8rECo28s5BWUK27UyWRD4zEgYBxwjhTyu8vEa8SkxiV4rs2gB419BjAxx5pmGYSoTE",
  "key11": "2UtDdXfHWDsdFdGEE5tS5vN87axYL7n3Cn3Dbts8eiD8fJLhYGqDHeqPhjDW3pfgeUrSnQh9j77M2B6eNyn1hcRp",
  "key12": "4eNJ9j49B5QQbbh1LPuuJn28xT8WADNbfgn5MSjKuLzZS7nutKUKwTfGDoNvEdEndMwwnH8mKwbzmzJBipbBXNBk",
  "key13": "2mSYs5G2127KUtfeieJJBhyXxiUGh9kKyQgMhv2vG4oAoZfezT6NQgKJntpa9sfDz6pYBS8C3nQue5VxXZeXVgGx",
  "key14": "2G8HGKLdrDXdFTvxoDXGDWGLDQkk85fCm9ozegD2DEuqKMkw9fKWTqqpfqEFuTzgbR226XrxAFHmgZi25ma1nTfZ",
  "key15": "5AkLPVTBp8V2dHn8f57yQRgVQTnAWeYNsQYAitrp5ZmuUc4tFkqhf2WJabadqH6R7uizV5AGvbGTnYTUd4DVxRUn",
  "key16": "58syoFSVVyh7mLQBz1jse1NwpRzY8ppE88rQXsbxjA41cj3tKku5kzF7zUPsDGUkJDJE6ByvnxbJmxdVNLcgxiPe",
  "key17": "7eZ8mgqZvtrNSuS4RFUv9Lh84mKJoXLc8LDt7s1ZTKgWUUJUBh6hAE9Roy4rvJxKrM1TWFQjo16H9Ug9ok3rHzi",
  "key18": "5aFrH2LLgoJvgnNGbTyJ1tPuQxfJyAuuAPajcFBjnd3RhWvpNGzmciAy6c7L6WJybvv2xf9Q3B5ywJHnQnyboNgt",
  "key19": "2GoLW41Y3uYsdXx3WDyeu6gDcEVzVo7wmqAf8FdhYxvfsMnefh7sc3r3hVFa42QUCCzMm4L1p69zd7wZh5aGV6Tf",
  "key20": "7RDGNuXPGJ1wXjv5gdHkovXgWhPn2JHnEXgYDK1PUahg7ZNyf3qjX3Job2UJ932A2sv6nWM86aPsc2oKN5hfaTY",
  "key21": "5aYdTXkmsxvkJr96vRspR1Mis174fPps2foeL6hzEZKcCAt6bdRb8UCQBbTnupJ3MFbkmrByYYNqUhMAd3WK6BWj",
  "key22": "2ifi4pZC1c5KowtJ8HXfWwshcjmeFLWZL7g92MXvNkWE6LA2h2VQKpQkQHH1tfAyQniHNzpeLBrojzWN8y25VDVb",
  "key23": "2LfGo6nBTbrZQVRxzU6QoeJ5nM2a8bWDr5izd7wrEebic79ugAaFDRdCQ34NU65rnYrrTiekzJrEmH3PJaudw4eX",
  "key24": "3CGgg2TgeRQwhwmgtK2h4GsVniPaC9GVF1cqHDcxa22SizNT1TCBedN8cvgeh9C4ACjdDp73mKdWcUjCaTQoFFJh",
  "key25": "4z1136VqFfjmPSxc2c9ZezbLsZTbPdtY8xXFzVijuz3iAvkjfXdW111cJLggndsmKW3YVfPGhN2mswKh3TzTkrM6",
  "key26": "uHZYTryfMwwYHEV4X628HWxvPG8R4bD5h6hKqvC3MaWhmPTDSXWjFFQibjv25Ezdui1oupdm3uKhjbZs1Bn1nzA",
  "key27": "35ENEgPcZfyfCQeuMSMrLh5tfrqwkuuEs9eimfdmR3vteCUk7M5rDy4Zp3aqQwjLok5Xd3FdCfoA25r1oEznXuqM",
  "key28": "HfM2aawwacrFYPdafuhcehVb6nccuzKV2ZmfbkAZJEvaSZhCFgmvmSEpT2qGVUzdtp4WeJtbR5T2S9QM9KKfDkf",
  "key29": "5oiLW2xkFmKD18sP7VgaLUQybK42V4ZQcXmhbdjTnevQ4G9ipsnoxUPXdoXqDYWSXHm8n8gm5JNsbtNkqpvEQniM",
  "key30": "5dgsg75RRtenwZY1qanXu3GWgUZ1zyvHv8iWU63kRhms5QStmAE73AV2EYTs3emxgqYbVFiWrrTasJodFrCtSCTE",
  "key31": "3CXhADVPHKHvunVE8mgB8aSvYDUcbrjaYu5iKJm5uLoQNe8KnyjkhYTKvnNGHTS3JHCAU2qaBQP6ai6TTUPsozFD",
  "key32": "3vnenno53Ydso1GA5FaCLkS8fNoMMEoMAPVB35ErdrNhyMpkiyFRhLmZq7a29ktTSD4X4GPNWtQGiGRzpBp3vuj2",
  "key33": "2tPvFtC9Jn5ZvmXGRpiBCcxBCT1ewpYZdXojDKNsYd46RwyYAbM6aXu1HS1sxZeDzAu7oTMyyqQqe1UL8JsknCxd",
  "key34": "imTnK5DsJUrTAKkWWLgpomyWJkiZ1v7oQK9eKEbXRm5qRHvfHC4nE52M7FFGn1tSFS9Bx5jNyrSicdCG5uEtWgx",
  "key35": "4CVZ4dBio6GAS5PLFz8MFS9Khh81xAFFKf4RBcHEgA63DGoz6NU5DqsBRJH9DpMa7YrB7QUFEoU8N7wtfbv2eaEv",
  "key36": "21biapWVVhXBSk2GGgs75qEBVqCnNfchZVHxtSJfmc4ZzvjZMvLUR4FgyEEUcZixqQ4vQ6iBLEnuFbqQijUohaqu",
  "key37": "42tY2ZaeijN2Ei4VrZU4M7BE6Z8XAh1W81aTitQ9EfaLQmqHpj2LNZW4LvSwBSy7biV8L8sPBi7hMMQVw68rTLiS",
  "key38": "5Ycz8rgGwVcB52huuHUe8bvjjGVhqzdRvBdwzpJQjPzK9uGNh8ECsjmen641KXZCXCsjXimvd9C5HnzZAUNSb9pU",
  "key39": "2sKqic7T2rrbdTqPnDbhbnihQZYA7bcQP39rSTazpLXYBWFbNTxQrdJbQFNQk5KpZBcb1dwKCbYzAqWE4GFWtzEt",
  "key40": "jTBUee2ojNsY1ovnh7Es3TBGSF1b8hdsM8sWMgJP8ewE9NXGMNFY3aqf7HK9R6iHUoPkgYWyjjxNAnmLfjnGN1A",
  "key41": "3vdgEmcQR4WSkhrXse6ieWrsjnR2mjrVPUzeJ1WYRgeJGmaRmxqg8UY1Mnov2DBtmj7UPCQgntyiGP7GZhuPrQ3",
  "key42": "5tU4mNT78aogsaikGWzrTQVNaCUrqVynpKu3jAVxg2MikmjyqhA2hPdjv9BHtvDDsRi3FPmFRzZWVFqsfVicY7nS",
  "key43": "38PaWni5AzXjSQG9131PBf6VEjgrHkp4aTkcVpEaRSiN2ZsgHRbyS6ZJVQDNLem85BWogQY4CPctypEZDJPciKt1"
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
