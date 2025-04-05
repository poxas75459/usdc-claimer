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
    "2Pmcr2arRDwySMbYtJt4TQMcy24wkF2pjngKEJH5nfDjHi9HXevDC5zF5y1WQpKxMVxRrhiksxds2cWQJMhZfJ1t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SGqc5Ar8B3cUjJpjgsoxnYr4DKPFzhRmKMUUv8qNpxQnzyaP2JKE81YYA8CGcGtudpF8hwgVwrhn16hd3WAuEqX",
  "key1": "5oVLshGK4UkctGEQ22J9uYbSdeR36dFFzQsf4aWs4x8Law3nE3suD5ukXRNfbX8aEsvTgz6FAJvcZPi15UijL13c",
  "key2": "4shvUR5Z669cq4JjpLnrWsGeKscRSSGUqQhyJWSpaLtF67CZxXdkbD2hoGzsydxv7JcpeNwnqvw36dGfTW7XdESU",
  "key3": "57a5pH7F7QvyP2FuXQuPq2fi1KKnQPQTrhPxxsMtRSLCixkL6r9ahmSx8Wjmz7B8t3Tz6FFCEPDyNECWYa21kn7a",
  "key4": "5vpSKhoxJEep1YEMz1vwEUjSyD3PZDfyfgp691N1EiFGsCqEVuZDR8nMXDfWDTnJUNfEacQRVXcPuRWW6cjewN8j",
  "key5": "4kGNhSU1F1JuSvis1vBXDvK3Gg3XW13qW8HRtBo5CR3TdB6WJZ4TE6KRU76Ea73Uc2ZBQuYwfRFAFVQ2igKnEhVh",
  "key6": "xqrTXCEkHvjp88UWQA3Lkp8jD68hEznCBCn7LGVBSRBzNW5dnyF2Cu1Di3XxbZTF4TWxKy8PghhrMJupmoC9jw8",
  "key7": "24Ko8KXkvGuGfUoWpaT7Qkwc6Wx3gkb75c8SKgzGMJAqqcTG6tLvyhoGBQmn9h3xzbc57M5E8MBCeKUQ4BKF4WsE",
  "key8": "2TkCpfHXdhRKxJCKtnfPx5wSr7QkNEKgnMC54axmdjEZb8uAazesv2fZq9DkQ2rag7HtEuj9Wy7wj3U8iPZwM998",
  "key9": "uWhoHBxFM7cGBzrXhok86gaKm6AvRyczSoeZ9taQGNxwMQXCap593KYJbvFhj4nBsguSruu4a8yDxEy23xvpF1i",
  "key10": "3ZdVJBFGhwCom5mLrahySvxHJjsdRZoNJJ9DEcJuegEJ28yVCP6h93hxNYs2Dd3an77EAB7ZF3NN82FhDTEEadbr",
  "key11": "yVyeyGGzftzCGZM18NukGRdDVbVKixFduft4im7r1M69Eajsc9KpeNMBjLQ8Eof8RjMx1g8gmV34sJPKfbEKkZ9",
  "key12": "5XueKc2De9WgdZPZe8RHHHunAYW43ZaP6aD7mqo9FG5dgX6FpKZ4pYcSnTj53HMJV3i6T7FFdXXeNUXgryqqko7M",
  "key13": "5NbE1Bu2FwjzRhjf4iGb4d2URQc6Sve7BwCLjqNSuWXkzmDMBs9BpG4aEAQHWn5ZAL52YVnGNiiCBGkce7ekoohp",
  "key14": "2AJoDUtDKsm1fwLM12cmgytpGnuLc61d45M6RadMo7WLcex7eAF3vD7RouL4DMRYRJHhc6uZgKGJNcqbwzi2ehX",
  "key15": "UxnFpVNq4BKo77FPsbQdTHCM9vGNsYRhLxrcqJS7ZjVrP6RmoxJrCfFonUNuFC74G8UPRp6zsJLd9RaN8RUK1yZ",
  "key16": "2rLQY1fCrYmh93BNw4za4qsH8iwcAb6rZVKAs4eE73QmFSW6GRavDi31NYHdvPLALmb4UgUbfyRBt3vWpDmNWp1V",
  "key17": "erUWN3pCmBN3bm8136cfjb9eG5sHrf9LAzbPWBb2t2R7eXJtPWnYBXME4ucfdt2HeACzp2a9VwZG9z5yakvqt4d",
  "key18": "9y8brBGxXkEbxAzvsizq2CaBhFemSuxBg1kjUM3R2AJvfbiDtrkq6i2dPCgS3cQEf8aweCkfmMY3ZkdixDAKuyd",
  "key19": "5DrXZNrNRVgcJkT2yAxLCpaDPA8f4fsWDvWvgPqe3J2U2EGMs2N4QYha8p4oG4qHcmhrmm3F4pqgKzhrQtE8ALVs",
  "key20": "2M6MgxMFNGfRqBJ2ZchT6cyCfcjXMzdMV567KbXhiFQED2EJFyUhZTZBYq1Rh8zPexc3Q6k4xaAsggZajwYoprA7",
  "key21": "2Aa11STGPQ4U6SSVn32v7cfqoBuJAA2X5xjEGmTRkcvtEFvCj73QJXmVpsUbQTUKxtfdSnZ22aVDKSUNNvz4zkfz",
  "key22": "2ZnyeaQ5o4mofQCaHbKJh4pnKSQSMwqY2ePjYBieZnuWeipsUHdb5zB3x8QaaBUwgJAXwNBwqX1QXVuxsNiWUbpL",
  "key23": "4e57BsGdu513LVaJmmLBBUnPkzjgZ84fxwLu1t2N2YRpRNCeutybGvuRHBPZYWoziJx742mW6sibgzzv6oTgxsMP",
  "key24": "25G3GwEqfK5Ppw5GsrY6boUYH7EFXjsLHn5eJcd547sFQmmUgS9LRwKVsEaVp5j5Es1H5otqfCc9YpQCSp5asfWA",
  "key25": "4syp11BwEssNmQv9V63Pi4pMCn837M6yn5E8a88tPW6u6mxD6pFAjPsra5G6BWcL27HYUjdxYwCFxDtXrMetQfYr",
  "key26": "W4Jhe1fquU7ZkdMVrKxiMKesJZv2TTWypj2GQBcKYA7FaYfu259qrZiDqNfPS9S4gChn1DysGNAqxsJGtX7uVmj",
  "key27": "uJEPW1BKUFZui3YMoesg7Amck98VXCWcXtJPEsZBabedrDDJYDP4qTkmdFjs7kwq8TQY8XuLZMxmoDcP1MCXuks",
  "key28": "5YhovtSHMrKvgAKCVKzaXgAXLdKZTHFCyDdpEFcC1aM5z4wHRuSf5mNpMVKWxfM4F1TeUcracgDAPRaRGVdbsVDR",
  "key29": "49i6RCkFsxeA7psHhV3p4teq5mkisqVY1Jb4mVRKWGqyTovCetrQgCeYJ4M2ikftC7VnnJBaYmQj9jU1qsUgADQd",
  "key30": "5HPgeGjBqVeoGXZzaKX3TP3bokrUSyTUSNUePnf3tx6P4hsk7ARv3na9bxVw4RDpzsyEiMJzBUqcW1SUvpvYG9pu",
  "key31": "4PXktEDWsonFPoJKXRTkPJWKx7mCK2p4sPpeUPDUDLree1BgYYEBoYiHexBkQ6F4j6mty8MP5mmRyEctxiqzQKdr",
  "key32": "3aUbwZ8iNdMougwZxsczs9FBZ293zzfpmhBG2x2a1jriEYSe4QKugaSUYAoPweYk1GQYX8CEaCWTFqVEj8wmyj1",
  "key33": "3mGerYRY1cTC431zR7Gudzg6SpfvvG7LSqwmD5yx55jrtb2dCGCFb1MX9Yx5upuU3rcMFMof2FYSeWYXkWy1ddrE",
  "key34": "3FcUAjHfBUPUHvK1h3KeZfC4pq54DRy9zi3biQXtdu1YNnzo6MuJ9rmLxjw8Ks9idTxVSV4fQo9Fo5k86xPLFy71",
  "key35": "2gNEr1zTJPHAE8At6wyywcnVGXSCsJFp3g9PpR9c1kFNs1XkUV46eMzfUPczjJTdBWbyUkJMmH6VhRtiLeFav2SF",
  "key36": "3oyXeHLGYAfJi34uZrWhmPe4aLotijEgBowdpWAMMRBJj9E69YaFVXgvbP7ipgsTfydLzqmRSCy42ujMqR2Jq8F7",
  "key37": "3Z9PE8M7hCr8h6dvexpwz7ovCnYfsh1p2YDpaZ2xxP3pFZvwrZuirL7NQg4DQ4VXnMmLzMZ5P3mbes41HnKhQX37",
  "key38": "4qwg2vaJBk2dVaSSX1g3DCZ4AnvgiqBVmbKX9n6AoeeMQRPG3EWzhyvFDn3LDYWGHY4KiL5MvGcFWoG18nDh2zXi",
  "key39": "2DZvjctiy9uon1S4Xnp5iV3DhdpbakGWytQFMMqAXE34EiqQiCkjpd1EADV5oFiesfWkY6fvyUWBbnxxAjF8xEpi",
  "key40": "SK8HLydFtiNhVtoj3uJxYu3HqEv8ndcSwuV5MuKAJ8XhLx1qxkwdvbjFfFPrVLkb49MhmS65e3uNxvD1bXevYwF",
  "key41": "3phaepAzQLgPCZGtJyv5LkUyrrbAk3e3i4ekGSX5ssrppJZNco4fjVk1gLGfJD9rg56HMWFWbxiNV5zaaqL9t6W7",
  "key42": "4MotyKxoNvnvhFCjSWcBit5DtLAyAweDtmfb6rcfk9Qr6rNkchmnL1s7fN8ADHaSibzn9nJoEUhYHzVozZiSBHE1",
  "key43": "1pGQsrkpmPV8yBcrj3odBDWgq4WU24B6hGrT9fM6Mf8w6y2ZLHByQJGcSD7rMvsogat3DZE7NuCK9Wp4XRn46uD",
  "key44": "4uhCxevK16BnJeJuJacgwoaBZebNHAxon1qkWFtJijUdtG2p1nG5PNB3mau7k3EeFYT4vN2QTcbE1yzKjEXD7vu9"
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
