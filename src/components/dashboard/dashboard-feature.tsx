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
    "VSM6L2y2Mc3EBdHr6gfEjemdCtbMnzYZLQWRFCxiyyA1tnpy2kA3XBb3sedcrRAeMESJAZrayuet9AWkQBakDbW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LmJKVdGnwxZDkC42qJZE7vXnoHcMh2ycQMipa3FcvBFb19wQBYXnt4XQWmXmdeZV6FYwGtT9UAjmTqE8vWkiwn3",
  "key1": "a4qDCKwXopE1nW1sf3U7WZLCRFvpkML9cuC13uDrdUiV22SZovYevo2u3c64nJnAqvH6t9dZ1VF1aCHKi2V7qJc",
  "key2": "3CsuZJB2DXHLSpjP82D2AUCHEQsTFj5Yi9ua6epWbyut75yKGjWUDqcG5pCtzdaHwmV4u4Q1gGLqAwx53hpSS49i",
  "key3": "4t2vqd1HUfTxddoqXwg294fTAX2s84X7M4QPJsu5Tf6rPprP9gmsUKgwdAWeWR6N3dn6UPddn42MU889zeaXnyPX",
  "key4": "5AyHiLsaqAsvYwfXcUUk8LWnDFiLtCNqpaeJ8ZZsW8jmbC3LUtoXcX6Cfv4MzJKzkhjckSCDiFCZ8UyuG92YXMXR",
  "key5": "3Xe4X5ezZ2SerXWCdrFcJQ96dmyQfVbAEyXZGSwLfazNkAyzWddiBrWLbLPZmAUUiTvjQ39qAvE9ucYC8PS8DSDz",
  "key6": "5FXTUg6PEcWxwK4GcERpvVxoTDKbNpiu1cwvwELeCEyCg76s81Rz7fSvHbD5b54yaiD3FWzTtWd2jm92jUVrq73g",
  "key7": "5JwdNuz2LsyBM3pjrrdHBxDkmN1UvDCsSzvy4AhdFQDjWUoNUVL74wUAPnoD5yRaKnVsPipM7eNYxjFDEBaa5xWo",
  "key8": "3eoQaHRNbBWHK8uoyULMDV9BDaRvVPekZx73ubDJPA3Bdta19fETHGyKG64Gd9WzS1mkB8HTg7vq2DTeBKpELAAi",
  "key9": "3EnvesAjfz6o4xnW2Pd3Q2ixxZJ7S64vadi4JkDzS8xmxaCR6qXLufTA6GtLW146A5xPJfznf8nSTJvM1rWe4ATw",
  "key10": "2Ad9wUPNMd5peFGtFU69d7RmPEz54vZpiyb3UTgJLgfitKRxNUum8BcyTiEX3umSbZZ4VBBrfN9aHKqsGczDQcFB",
  "key11": "4QMJ8ALYqwqM2JrY6tm36uZDyT5ocZr7EzqDgVyzvuZ3aZ3jYHh6CVC6zdjLAAYY915c4ypcuCBjXEDSjTPsL6ZY",
  "key12": "5m1dsi8BSwgYfGjaN4kTR7xvEuprmVH1Nco4kjVoob8oDPnZgRg5uYQK56xPqwyQn9qdD5ThCBE3CWmykeFM7za5",
  "key13": "4WHaMqKr82ePKrLGEWLk7hiyCyviq3LLLRjbi6EmfRpqZLxQNQUaThpSHdMgdAPAL12QyWetBHUsKEGybNrX1VxA",
  "key14": "66Ybd8mXGgDWH6NdkpxfuWUeZMjrZkyhAmpFKB3HkNNndV1nE3NCkKUhQYkikm6hoY4pkQd6iVt2VRPnzqx2ZFTS",
  "key15": "5iQqywSzKFweX548Sq23bc3fB53cgSx1zEiCcFiXg6qF9F1h4WPeWxvHTyzQY39Z4GAFYGL3kGqC4wwfXYEFmNAF",
  "key16": "5EidhjZVUuoTLfv5MvQWAFpHhaZpjzjX1GxGvQiPxrLkhEvYmNVzhPypLZiKkRyBCYw5GXVxtY5NSYGikNsMQQZh",
  "key17": "35iXWQh6qmUe9Awr7dpySb2R3TeNwx4qs6SHrQ1bWgPskGjYQ1K7RWnP1kRE7Fs3PAY1CBDTDEPDAn1TdsFTPSU7",
  "key18": "4KFNYyJQGr87A4kVvEb1dD6VKyaqxMBshK4s8ZFMBpGKeaXzGYX64DZj2byMmBRf3WhRBhhsPHm3nvaQTZ42CSm2",
  "key19": "4YoSSvouDP4jmH85rboyQHn87VSE9dpeuD7exSKziBQUtAj8tEcf743FoZYSTRMGr4yKUtQEMG6Ai1naWiYJNsTW",
  "key20": "3DtMeyQupY4wkzpbAVUmy9Brziwy1pHWbMZaTxUS8TEgM8hhvwfYyeqTsQ5bb2jo4f3fgz9Qx9bYSDZW1F44sPki",
  "key21": "3cPsmn4siE9bEkvW9x6UrYKFSW4b1FN1i93dcvuBqiLerRHRWkQcDNDfV3CYsHZWQHCkusTCiH3upLYkmPRZ7Cpy",
  "key22": "4xaKfVfERmKj5TQQ9CLpXsMcoD1hDjbbFBHzVjLbrAHSZdMGwEwqT2Mz9E21TA7tDPRdRuwqY81QEX9u5Pmm2KFt",
  "key23": "2HU6WE2SmqSGkWci41a8xreUT5VtZJDWzBD4vKLNq2D8SvTJH6S6zRtP8GpTg7RurxzXbhA7hDHKgoZ51XvdtQn9",
  "key24": "488p3wSx9iqHKc4SR9HxzDMxkktjvj6w5uFtJMZELDNAooLxweUixQaC4CvynuQvsXEtfgbmreSu5LTAeHU9efEp",
  "key25": "Tuo58Ya5yFECyQeXXXtuHw5pTJjTMRrPAV1PUVVg66dDUZrAdeLnqELioodgznCv3b5ATAMgH1AqPiRsbAUFXuh",
  "key26": "3UvExDtbfgfw8gZThNdW1ghkXB5KsaTciuyHzP4rmRo5B5BGWWDw68iMH6aPcdhZZ4bnjhL52LDyuhqNQM6bvJJH",
  "key27": "5h2nGAENVCDuTck3qRVN1buuC9V5uXGNJnYAAtpCZGwFdpu8APxJ8bDRBgNTpHRdJUmcqsWGHZKuzjiQBiyc12Q3",
  "key28": "4Cc21HRbkyjAHV6oXjPQtwR9LhqcTA2xJyvo9DbhJ7HV1kYNx4T4iUhbdfihDggmrfhevKfJ9Q5rCLne4TQZvUZV",
  "key29": "5LL191Efo1i93vBtWV4sdGixdamDMtp5CKAf53HkS341RjRFYdfqPaNCZAJubkdj8yixSTN45eBAQFhQs1XXVg12",
  "key30": "5SBLMhiTRPobrhx9LuxCWUvUcYJEqusxcENZzQ1wHxNsU4UmLui29Vk4Z2tBCUU7d8AdW8d7XAjrFgGanqSrDRi8",
  "key31": "57fXhwTf3RJvrhe1MbsXCceGnRg39tvPkbUucqMgFR5i8Xyj5Mzru8xnVYMNdKpNYRcXv3cGEWdMtbWJsq2wixYW",
  "key32": "4CUxEm2tFMubWyKFiG4xp46HCUZiggxgSEmwje6xrBUYPxX7ZTmu9wCtYvLtQKWcDe4bngeV53WMU6xHx94yFuEJ",
  "key33": "3KoLr6A99G88PxGBmFWa5peUwRgoMnA3LHvNZGWAi9a7KT7RPkp8xb2y858KxYoRNtoSJqJpX55d8ToUy594fXyR",
  "key34": "hiB7TWMrbZmZNWXqs9cNazKd2QswvuXdqBt3w3vd4EjnXJnd6KLaHpHuynwnuYyc2yic8cSuQRm952ciD8BRHUC"
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
