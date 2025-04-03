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
    "3ezsXRaB9AqPGvDDBdbKLHxVrKouDU7RF4qGMxoKevYPRz2jKMwHtaNq4z8kNFg22cDM4K6LQ14b7CVALseqLENx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yVMmBGbn2XTbRwRB4n5ZxiZFv29suSeF35gRz9ooQsY1oReH6hXb6WnnnjCfJnzSDoBLr36jE859Qe81PzcQXpy",
  "key1": "2HDt8Pf3YXen3h6U2bEbDfnBkCYgWgvtUQ1B36A4uawp2JhCK3qTZCNWHj7avJPDbUvRKi3WckmLzUZMumNY25k3",
  "key2": "NMRe6nvpEPDU5ExjEt1ozUTc2uK8xRd5xiUGHw1eRhz99oxrsehBd1Szv9uYbp59rzHDaiGr8oaFJJowDRYA2u5",
  "key3": "uB7dkarQjDfjBhFxXDxL3HgBrRkgAX8qN7WeHjZ5DSsCTYXgNqSCnpEFgqgA65SWUud7TYbiPCEAAe6u8SD17zi",
  "key4": "4wQrWRUwMZGHGVx9R2rg6uXHQEajEu9UbPw9ahSXx4xzEn2JVtfB3ESsdjq7iEmyQU5xCfmfCbQQobQmUo4U7JsD",
  "key5": "2f79AauHrAfYkkzxZvhxZcvBryyJnFtmMPmefZefSzYriL9AC9HYUnxHGH2yGSm65NGMud8kWRkYrX9uWTxXCTVY",
  "key6": "pY8rQw1LS4vhcy4KKrGPZQeSNuWrb613jbLzqU4CTaHZi7VjH2sjEStiqso8BDwfRdK9ey324AVZK29UdQU2XZv",
  "key7": "2Xkzo2TEnT2E8oG87ma97E6V21TuFSYTBmGx6t2NVTPpt38JdBoGQRaU9goSEfpjcaBQbwfsMPpUyBMCr74nQ5xe",
  "key8": "4mb7WfH7X1yqD6vpYY91FX1Rm9oixpzzKukTh2DBKhknocRB8LEP4PKPRB7Rq8TQx1qSzaraE4XmS5ZqUfm75cr6",
  "key9": "63BuzoECQJavuDimPEEf2RFSTf4epkz8efn7ouAsPUryhgh1oV2iXHPBBUBYBSr98X3SV94pgATkm3wmpSjYTGp9",
  "key10": "24ZD4K5AxzQp6LKTeTdBEp1Q5xQRapzeraRkS3hFuRPFMLFCZR3FrWm9RkbptxE3nJKQN5hL7LEH85B35BS8GR99",
  "key11": "4feAF69HvUiEdSp3ck6rNRVYC8SCgNzFXPsoPn96pjQeHAyQQ9TXCe9DXbLN5LG9cGUDMCLwUhNgMJHHqTWirtoy",
  "key12": "3pXwQAawaQdadgken3WZszG8MsFqfGomeRjnpP2qJmt18g9k6hCRVqtbZjHveCkSXJ7cM7vHbeiz26J6wfv3MnAr",
  "key13": "3xfg4AFZT7ZFKpLB5Jpcj9T3Cv8E35Uu2KLaF7Gc7UzT67BUU6iqL7x52pMWHhiCD3CBzGzbE7qS2g3SByQ1WWLb",
  "key14": "3Gdj5nwpmtW8JaiuZn8b8eXj6wRusNSvEX6DE4iX4N6LStnUs2rwcWojmBm4RhUxgMqW8wNweNsteZKxB61c3UQK",
  "key15": "sJfYdWbtHCofnDzQfY3XgnqiPC45TN3XiTjjaGU758hwxHDNC6ALhDXAtCXj25qne4inmzXa2sXN6vSvBvDC6pk",
  "key16": "2TvPaD4bb7Drmdskz4mM9gyiXt21igLPHn1huJV5grcJHn82WXGz8nnT1RoXx1Mi5ZN7MsNJzTgMvE57NXkofn6o",
  "key17": "dZf7MrpAwWS8BcLs9715bEgD56SEx3tCvoan8PDVDfuZEbYCh3XwcCUzmHXXJfSb2vfMTxqW59EpZjotk8y6tpo",
  "key18": "5DRVhBn23WT1HYh7EyJZVQ2iDpitWgLbeWtQwxRC2KMGFtYGikoQ5SEBRQnxHyDtDi5YnsZhFedfMEJtRJ6e5SWi",
  "key19": "WM7D5teMAdHaVk41iY977aVi6c5mhtiqyX1hdiKJMKGsr14SMQ732JWiNsXSDBW2Sktt5WXeYaWMjq4vUkakk3d",
  "key20": "2RnzizoNz2qXBAmomr98TULKf3SxxuTASywbTokL2BwqsB43b8E43LJJQgjqjLF48sLafpocQkvUYb71KFQH2Awu",
  "key21": "5qePJkqHt2416vxNWs2Dynu866kHiPHnwi7q2mC4actacaJp1qPfGTn7HJStRMKA9JiqQ7YE8fWqngaoYgBQMVbx",
  "key22": "4UpEdGXBr6dZkzqtZ3JCUvbogKEfgb1ho5u3mRzpn55mMqMCUeSkKgoWS7FcbWHUFNEsC7NmxHcvmwPv5gNXC6L5",
  "key23": "3zVKjveGkSLh44CCj71wgzSg3LoiAPBKLbPFeiN6McNZY3eHe3atPtwhbB8CyjvqpaTnvnyPz11U6FSTMHXybUzo",
  "key24": "4dmWryCPwKmFtg49duHviZ4q8zsfqQ4u2BmAP7u7oC96DernhrE8rNUcpYqyh9YgnNe3SVB6zMTtU8HeggLArUgc",
  "key25": "5TadMx1PNDNNroTyPzsGVVReF53DSLgfgHcf2sfQZZJh3itvuPYyjJ2aGxBwedstF2WRwfaBvrWAiao1VPowQWrs",
  "key26": "uoGcdo29hmksE9zYaTxqNbvy1t36QN5YMemN3qBTE73pAgy62gZtw683XxkoHwPjJLr7rBWuAU7XdeJtdSw2qqx",
  "key27": "ZMBmMaGgSZFtZ4sWQvLrWqCPxZK7oW7JYjxWntcjunUSCPgewaPzRQB6LSzkZ1bBRReGFkre9cPfSAmdDMZ8PtU",
  "key28": "4j2K4mMH25DZ2Pm2iu63mvtQiLjhfZbudGSErJkV2srqQH5GATbH9PyiLeDWFdeD2GpxjMtuWhK2ZNF5VoXFn56i",
  "key29": "RVTd3H8noKenueu453WQp4igDyENDFE13RBWZQ6yNQxaecaCiWZuqxksFNcaGSXFgM1DKLNGmYna95JDDDp72RA",
  "key30": "4QnLReq14s1GXYiT8EvJzE73ixDXAT2r79A2cafonLUgHvMrBipsxvqRLBHFGQUQzNCBskGAthcbyB6WoMV7nBFN",
  "key31": "48bPLz8QWd4tBqdjCTkvYtxj3MNZm7kiZQ6sxJWAd81orVzGbWinYQNn8XT45C9f3ZcdELh224WEqXXNfzYqGHJS",
  "key32": "46gSPBxLSyMoPLpvJcxAEFx6Vso44Ljc3ZEz8rnkxZUE5ykgUrbnnbgwHxKWf4BKG7ACs68K1WwCryEPHEAjzq1G",
  "key33": "25NAmuXkH3s4cmRTCHJ3syAqgXzNuaCSDAEWMJkLRP73PFJYLCzd3kevKmCw3rSc32MyMu8V1t7HMqdv29rdmdUJ",
  "key34": "5krm9Jsm7BvSdmo4mfrUAKKihhu6G8a8YAkdJzK8VR94agvKGa9y4dMdPAJ3FrpvPZqueCLrcB4HigvX3KdCF4Ro"
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
