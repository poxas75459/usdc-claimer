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
    "CDGBMTaQK27UcvLoHShJJyFo5wcV7CdMZ748AaVYZt4db3Vfx7uctgCkHjiQJfY4UnNkHc6tBVStnEWWRGWr3wn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bRx8yd9YJVV4fiZGX473feqsZ1BmiUrvQaKThx6jXDSyeNdw21EopvHhXWAumZCoYc2CSVVwogwNZxnYbd6VAwc",
  "key1": "Y1FjqENoRxSX4YvEcMpTPnR7Rj5vbpJsbAZjbk5bP9syirAwKmvpaQuXvdANc5WS8PnoFPYxTgbSaNsdfubHpRY",
  "key2": "3MNGcgvS5CgLQnW259UcCP7nB5hML5BN8HtV1gbNsnzuA27CKcQCggs4Fk9jL5YTKWWB5wiUYSjz61inUTyiQ9MP",
  "key3": "45irZKDQgUKoyLMHWXQsbcKTUwbffxb9DTjofmrFJGFySfVm6ijmJjJYMiZXLS3oSaF7GWgJjupJJZfgjsC4nzGX",
  "key4": "P681cTiJJPb64Zb5Xo878vHv4KuTthyi4USQzgXrn4smAXCHcMZiNizHKu3BZRtrQexg8gUCcXHp2hvacBwVPft",
  "key5": "3FUkmNbpnQpYaNS2GbmnjctLBRF5z9daZGh4iL4ZtxBQdcAAPCAPLD134JJePD9FXek51UeER7b4qsLyUftuVucv",
  "key6": "3c1pDwfL2Zd6Fi5sNzmrsoMGh94X6grKRMgbBxUhuLnaKmvTEBJKmSX7HFMXpk5QmacUpzJDD4fZBXMQNhfXGHMc",
  "key7": "54Zi6j4vKGphUfjvB3QoZxujvkHxmYMr1tyowf3fzbDQwcXmtj8XbX51Z8P8kZbKSn6iorXUKPnqpVwQwhqsx2gs",
  "key8": "4qHy2wx69kzGs1uCH3jMVH8oaP2E3Y2fbZK5aTQP2h8zA1Mnxir5XYujkhWBXhqPM5ejUbgLo1cW2epUKhrtZAqW",
  "key9": "24yJRUwQ6KVijoW1PJwWqRPfgVeiUYrKDjaN4AzkfvezaYuJdAbtCGjfEbaTeD1Tn4pitAPSbnTJBSMwFR2LJYxn",
  "key10": "2BG5HgbZWUxvDiv2hbPmB9smHtdW26S8V9eA4twp2k6Bq5bcopMpRMtwg4nWiTRZGA7ipNiaKHbWPkLtdMDfzLUL",
  "key11": "5XQg3BdSd6UDEH6ZT5MhzaYDTM2GxQx13bqXVFa9HCpyECqCofUMm6qAkebnDZ6sSzHRm3BjxK37KawfFgBUDvnY",
  "key12": "bPsEgHmedrQuhX6Q7o1KpWKJXKyBQNsyykyrUgXi5d2UE4KJz4DYs9Ckmj4pn9iuczznESZdrnHLTLySJNKR6E3",
  "key13": "61tqZbYDkm8ru2X8z74xri2sV9YpTyZBEtat2XxmF4gXdji2WKRz8UUAds8gayER66FL5J3faHwTT4gfjePBmQM1",
  "key14": "2BpdhedWjeMhSk6oqdQSUUScLKBqGKEAttjf6rK4U5KWfM56msfVbfuS7YnSziy1z34xB9sK6bKfKDbELWeUtHgE",
  "key15": "5PRhHn2Aw2mZKnPtQUcvbK67pgUgpMyfkhWft2MK3qWWRfemZVg5WTdtTKtDxtk37jj7ihH6SRp338r58QvavT1a",
  "key16": "4FUMpXDkEuVK6ufmvHzuEQT8vkE4DCbNxwpA3Ew4HhXnHQoTjriHkShBy761YZm9U2az3mW1Ub5xTujoyywsstci",
  "key17": "4bGm1a7NyRqb6emSP45R8fvT9SqvJHPcLLARo3oNzEu44qrTf6cNzZuM1wDhAFjCR57vk7Dd8wRbbRkB9vzEDfAg",
  "key18": "4snMeiiDqhsWRVt55K7VPY9X7rhBFPhP6aXdxD2VkN38NjS37CTF8pxFftqFPBJKQW8eqXVUUpTRJednF3fsdQwJ",
  "key19": "2QBo2hJ4W6bWMR3KRzqTFTu96fekdKpqJKiNc43EXdbUYvGrbnseEoYLVWNRpSkHbNB2t9Txbwio1GK99ujZBZQW",
  "key20": "3FqRBRQ4wCVrsqFYAHkpVvqYwKtbvtqC5NKYYe3tNXn8ivDxCCC49YjNwk8Zu7cZ91N6Ev9F4Ld8sWnH5ZTFnRc",
  "key21": "4C1vtzpmco85y8mHQFA9fbjVk2MHmEPGPX3BBKCRNjBDu6GUjZXiDtZpcZ7u55ZUBp7AJ4zGLZXeqf6g2LHZm299",
  "key22": "3pJB71kdJkSYTohKyQtLiDDkSqzuoS3P1dBJVpXRkapz3jUvVVqb5wsDPWQYwAvrWQaGyANp8b1xLQohu4DQBq6X",
  "key23": "3V9G9z9k9d2riAspnCw3x3n44ayPeuPXBQgcToADGELKY6t4Wv474a4UimkbM4ASvA7JaniFJF6d76ztQsSYfXmk",
  "key24": "61qoQZ927Bmov6NHwje4G5uhRT6VHJgLik2bwsc389aj9AjyVk5Zwzs57oYQQgccNjwXhY3DhMoWdvbXm9EvAy7j",
  "key25": "eLbFZCmauEF33Kh6KCg6TE4kwbPQvUm473VLmjzQuuGBaZwtsL1SuACSPkhUmevmoKaqJAF87LMmLFDvWPKK95y",
  "key26": "41gYi5NU3MX6Je7zpvMa2fL2CNu4TMHMPzcVvKuULzxZ2Bb2MJsQNB6TbKvFt6hqnCDeyKhBh3Lqr7Qf1yooincV",
  "key27": "4ynFKEnXMPgPwyQQCG9QXjvxHhZrjYiCGRE1mcUfV3CXKszuPZfEpKDe9YDduoGCCYacQVmUMYKtYrdFomujXqnr",
  "key28": "2npKvRduDBY6W3bBQtQoyiNDyeYdRm8UZrjqoKU9LwrABrrG37181Ha84H7zU3A8qzE9KThgDPCZunvpJHwfWiNo",
  "key29": "34fQT9xqB8W9NLsheFEhj83B9DaPWcS2tp2eXiRiChHvWdMVBYeqpMdCLD9ntXWfQmBvQXWhok7962wKuxytwbxH",
  "key30": "2QmkP9GGVHajGioonp5jDh532L866YzEG1kSLhb5CZJvQhfzvmyKUvrC54tz9L1r4XHeP5B9PRoxewm1UWrWpUyT",
  "key31": "2gTb8zxhyCG1nxXBzgsverojmBBQUnuDH76Hdqv1L6uxZefyYyB4rsgytUkNgDMJSRQqnNTjZWpY91z5LKqGKC8c"
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
