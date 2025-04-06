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
    "5fYKbe23BJmJj9K11TzDFu2bZfXmyuK4WKyVLnXvCiPTpxoAgrjYisCFAdpazhQ1F4EStNt4u5FwpxG7HCcNUx6P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39GZchE7sx8fuprQbdP4gQS5FYLxQ681fxxBdtjhdkzz2RRjmJqjChV2kdYZHWjCkX6G3HDgQvZs8Bm6B1HCjtJp",
  "key1": "5pkt64sGcB8qQ1xp9ppLD7WiMRia1PMZW6gTtioi7u9XzqtgbD6odEarpJheh9KJKDuHaKXW5tT725Veu11y8TCk",
  "key2": "Q6XNvruHJ9x9daJeNhMgNZKGgNkULkjPgJ9hVvfP2hHQvdtYUAuXsrru93VXAzg5uee2PAnsynwseeVriE9VZk5",
  "key3": "2Nu4HxaeQgWVGuDnYcg3NmboJpYZoCq3pvYWjcK7MhUk6d2Hjgm86KYXDWiLEvnqwZPxodn8W9KNr91NXNfnHsNh",
  "key4": "2JVELQReMrhPABm7hwEZY12dqTkHMTXzGPLb86hdQ2HTbPd8aLKa77Kju4i9EW2Mr3EhduKQVWLMJ9Nk9CoiKEev",
  "key5": "4aqmg6nbDkbLTwvRdrQdvvGJxXinpPuotcxSndeXMBiZeUcxCm9sQVbszozmy4LSFXwFTQksyCVAVvvTKGBoXagQ",
  "key6": "3V58GZaE5Yko38MUai3UpPfKGMjuk2p7JeYLAtaRJv9TM9JEZqPgQb6YSpiQ9MZJWMcsWwDUwWFEm5PFrjkNtL3C",
  "key7": "46W3wCiBhtFAaEm1oAmqqrwMULMHjPCRwmFgcW9yv5JcUAaQCqmwCahEY7wehQZNxMCXZoUmx3HjH1r4VPhyLbbk",
  "key8": "cGRCCxz95ftk3kYxknxzEPBiEKRSAggSr54FomvKdjmK6omZnnyEao7gDrsho5gMBA7dqLoKsSSJqaqpQHKLD6W",
  "key9": "2WT8fffbChk7gxZBM3VraPowu4kbAsmgydGsttmtxQdKU2kpaa2E68mSNxQty3sS6Dd6wWesUuciBBtkYn5eJUsi",
  "key10": "5LNyJdHrbgrsjE6P9MNYkdmZopDwQRwQLhUcJYLe9LQ5E9qzU7F6Vv9LPxZXvR17fHnmfhkmQQjbQhEWiFgQzQi7",
  "key11": "4T9V4ACB2rJGt9nyxf9GHmtnatbYCPkaEKQzFkpQHPUqB5SrGAWfmXdNRLQKtEuCP7i5XtNDR15saRa2rM4brtEE",
  "key12": "XZgi2sFVQevyX6t96a8VyqnFzjT1tgaKcCgQ7wDuoetUuiH4DDobgxm4KWF7NXkp7yqZnL5BywC39iUeM7TV69f",
  "key13": "4HyYr7xriK6QFdo1X3T7FL1U55YAyCEjcrfnDDAB4Bk6zrzvrEcPgFJ3MTaGmRN5x3euem1obAG2s38s9BL7H51S",
  "key14": "2CApDga9mtPoL6zeo9mTfgYiuZdGtmXeZnCNdYymYHcMCyiB51KkPK4doSRgvTmvj6fsg3ScJvB4QAfPY1NncZRm",
  "key15": "38aAZRF3wpaBjMrrVHatBoTaHUUfrmhUs7dXjFadPjgBJr7bHn77JGhKyHmG8Z98uEx5uq3gkZoXYaDsWY7KoEMQ",
  "key16": "3DawxyB6bEFDNtSycqak12jS6E85guBDFZZNGi1ZodGUJHbjDvaXhwr4u8BVfhax8WYcG5oHvPsKshFoJRb8mBgU",
  "key17": "4G3uK1w6DDd5fwwuvfRHe6eT3p4XTgfi3QyohnMeh2bRYKjdQHco4eDSXYgBNx7tNufHSosZiTmvo8X3eqgJz9uY",
  "key18": "49sqkiB9T9U7SQnc6m2apJiLw7ZmAGzksbstx8hEzcXM2EA8Ex2HGBEr39L6FBei4eSewjdG3YMiRNzP1R2nQWZy",
  "key19": "2n4hm4xeapzZV3SdccncBiVsk2Y5gx9BQo4rZ8dYhpoHfox2MXSVVZmQDgD1mEHrpJNUQ4w4MKS98RvK3ZswodRt",
  "key20": "2SnEybnX3SiTLMJz6zujdUwfBzN2mT1XeBTyXuzeq8UdzAk1EJfSMz82RgdgV9QhsabENCiYKVqaRenhxqt3JmnP",
  "key21": "3zVDNjdugWYyXr3KAvuSdSCpPDT3KtGqwqTAxYBERK3j3ZTFrCkAVZxbfuZNJx3EvcnLhtLfjzDskrpJrG7hj6Ff",
  "key22": "5WLWqZf4SSEY1hChwkL4RUim4n8bV7iVa3peiMpjcqtnxJrM87XFqqFnckRLmNpJByUqn3xhieEZ5Da6RycrQRuB",
  "key23": "4hFHUEYSTLNTU17aU75Bisu4xJ4Yo6y77YhhAiNXBYBtJ39mU9KnuoN6EYnsocaKu3ys7KCSxAeCkfLMUmRXMaPv",
  "key24": "Dn3VHxEWEyfqjcdKHJqpLmmfZBaJmNzS89q7wH2KM4v1pJ54CLxjzibu1sMsoLZnScx5CqC1YWaSpFYniSahzjj",
  "key25": "2DGSVX2XLbowALASVKBfvpBTqoVKhhYWadCmXGVJEVXoQmAqCXjewe365U8iy3vstCwKukYd67K8p6awSLiW2iej",
  "key26": "CZRGSi2rsHkAAMTjqBZXzVcX5TabXJUAvZDZd9UCPNWMgqL9f2tWMKLHXkKNgNK8vDsFjPUhmPd2gXd2B3HLdiA",
  "key27": "2pNtbqhShtdnHDhDqb13UKZGQyeAVHdbwA82FntMfAH3NeKKfjHVBvamMXGjxuCqbhVD7v1kZPTakR6XEEQ4cuMM",
  "key28": "2F2uT3tkySoSfJDB8Ka88VGfx9DtfbVfRHJW7TfmczqE6zjbqmgVfyVkEMhqZej7nU3kwrg86vg5V7Sqg4g9EspW",
  "key29": "2bJLjxRfJntAmTz5MgpnuuxcSrYV6bMzaRFMBzVEHsrttDMrYrsmXA4k76aT3T4U1BzZxcJpVu2EVDmxMbj3JM3Q",
  "key30": "L4rEUwTiFZKzNypAMkTcEkfKiqR7hTmq8wX9kZBCmY3LPZkePfpjnXBZ51wS2EHajLeDVGepmcmho24ak3xkrZd",
  "key31": "5SAr89EdCUKpxTnXanwjpFFqkTqYCUaBkMKdnZjaQRMK6t7s7rThxFGvik37xXgRXiyM3GPbmD7BVq1AADwDvNHg"
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
