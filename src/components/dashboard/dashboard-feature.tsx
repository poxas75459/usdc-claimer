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
    "5LLMDoth1AMxBidZgpCQVndu7PAFhDvVfEfLdndX9qujYh8AxwLiBBogEr13Soa9ABYeP2vuBJWx37bErr7Bobvv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PnHw8x8ujQJ4PEVU7txA2xgt6YXtNJbrVtE8hdupNvZNT7quti2HMxAVWCcLQUHqVb3e9UqpBL1oMVLZegbyK1e",
  "key1": "2ZLNr5Ho4RnUBmv9aBtJi94Gp5ZNbE1ykBJeWdyDdchHZZErMEZikZujGvrfX38dskZavw2Mkv8orV7qudSquz8E",
  "key2": "2N1VVEN9aQjey3MM2xgE2sB7whKTE2GShsPiaGvpffmZXjmFWzbqf78rfWbJLMYQz83kWk11jGyR3BYLASn57DgF",
  "key3": "5JNgbZLqCNMXJaiugYimPvfLerd6LNUwWZmZSV2xduqAnNbFNSaRecEJGy1dV12dCfhoHGWB7zyrq6k8jV348cUZ",
  "key4": "43KHPDXhdGhNVHEUwvfxsht56DKqfHuvPmZgBjZFmNmqcj2vY4uruakwXKeBc7no33jLdZ3Foy43KnyZpqBuD6e4",
  "key5": "2Zj27T9y9CEZE9Fzhv59W3brfsq5nm2DaRDK27YDvuLYNXdAGpxLEMuuRtmYCY6mbCkKWvgXwMD17NzmmbnVVn6X",
  "key6": "G92LSCUkQfhYe6CUQjo6SwfiawsKMQrvbQfmuykxb5GJRrajTxCTmMWAysxKZJiVrtFm6tqtmYjr36USusrNk3o",
  "key7": "N6FECRzNCGjRGMLAf7RVTUgbFWVK91yzWkfchQY1keUTBiU1RaK2fadPzJSJbKVb4ysqfr28i6g3mimy2YYRaFM",
  "key8": "9wgDJhFxz3TaSPYYMwszeXRiGRmL1mEgoaXMfsKE3DqmUnGAWcMo5NVm7awmQjbvBGwtgT2CWkoBvsBD5RqS3Aw",
  "key9": "22stXmAT75SzzyX1JX84mdZBN8RmB9yMJ868Zq4Doq3QFdDbdBv48fmvyLQ7aNiFEVdN1XSyQJk33y9DihbieYnh",
  "key10": "t6BCU9CRFK14HrgLhhi4oqNcWCUap5JXdNC32jmRdrN5bykTsRCXRy2CfLDDGq888jK6a7LXFhojKUsjpWjCaLC",
  "key11": "3jmA4X55sqJTuKDKHe9rjYgsARPg7TDkEb8cpuTAhuRhCtnW9uvYQPQyAy9b6VuFEV1D5Nrqcj9DW1bBV5rakNwf",
  "key12": "53NmWR4kpa3iRyjLY4EEdzgg1JscS8ZSzVax6bTiVDav79QyYDE7jspGGt9CiYKFm3n7qJp5gQHutLGbqFqsoCSg",
  "key13": "4ejo3KjtyKJ2FQKLAh5Kti4LUZsszjeftwBPFWgHgS6oBZeeCYmoVNctCLVbTGxwxXRE1xZVaE8E8PXkFJVbBEtt",
  "key14": "2dbr2VpUrJg1MfjAhf7wF7cYFGXc7bwsR25VrXMdgTovx3U7qnFiSSy5gsGxkNABJy1X1y5pqLKWBndx7DY8CKNE",
  "key15": "4N3jLNePZSPQvEqGkqG3gBjErcDfKFsZtL4EQyZLJc6Pd2nf67A2MBKKCE2B9npyRMt6fTRuLkCtk84UuaD6gEJW",
  "key16": "5vHX4pnceu2PqBJwEhXyK28Lo2SANU1W6PNT214XL5YPSCZmp7Aa8Dh9GTF5dH7fmGMdwtghv3gNfDL3okSzuLpM",
  "key17": "5389Yz5a2hSzaLpy6Fzq7mFBMhSb6K262QXTL2nBcLyA44yoKQX59f32dP8h8ui4KoKsNYHewBWwwvLY4iWdPzew",
  "key18": "5iRv1SVkYuR3UCfYqTS3inaq6DkfYyhFVVpoMyPGEq9Sfq4sjfwvMVUP48WiweHBq193GAfVasYDqD8G5RqKd4Tn",
  "key19": "2fHUH7gJyCTxzqY58MQCFesdGnB4yb8BB3SHhpXtEYZDr753ErkwrK29H8rN5q2UFF8gUVqVLHmcWh1qc1K3zcF7",
  "key20": "28bc4CUEb3zTzvSDnLTc2ZBHas2EpF3mzrR3WnWwdHECyT537pMLQeuutXcAXiueqfGADF8okMvYbDSSdPrgAxCf",
  "key21": "5HDaCcujm7YRdskQsCLRgZVsJ5ncUGb16e23aC7NXq1fgp7AyWkwhR4AHg6BiaY6dJWGNtkp8o9FurTMrXUsuRVK",
  "key22": "4jNnpVAqem2FvqgfKcGhYFX3GDkHH4iYpqvGDwpuRB8W1bjfzESjrdSVoQ3mEnfTRsLLq2H2HW2tHAS3MwaLM8P2",
  "key23": "Rr3fQgKh2PNq5T6ijH98xnHzLxPhtavJABqt2zgKLxtRBigh5fxrADRYTkq8FPBL3x7bjqTgrZYP5QGkFJm2X2M",
  "key24": "3gsL6RpV4T1qQmKecgcMR6ipwobXMybsTJzkq5zvpSFosb8qdCro1jGcm1MXmkjokoSJZXEzs1wAsnaoFqVZK6wq",
  "key25": "4BQgzQZ1v1K6XJcRwXfV8tbaRv6j5dPBiEbyyaXUAQfpJLkL3j3QkVYYSjWcLLgxDEfahW3d5qyp1EYBNCEWmYxM",
  "key26": "44BnnVwfeGGgZkKwuXQuZVxqfFwJViP4iS6PdHhokXNLwmF2imGbD6UPNfaTeHZnUEaVjgRCvbNYVXD1f4eqeAvq",
  "key27": "4VEBvFPtoTksjXaXd6BBVo9aH8NUpDkeCuwdYdxLRBqkgZ7zmzG6UTSYrgxp8y7saS4C3zH9Gde3rDXy2iFoHqGq",
  "key28": "29f1BXUcMbTodykt7MeUNKkLeYnPxPT6qQ5Ht8vmheHxAErNb8emnD44ZgW7AmL8PAEAyzJ4PdjNJu8G8kv6hZ1F",
  "key29": "4BugUMYP53ygxExZe6ezkQCt4WHLo8NLHaSRiuirYRQyDwSFYwNfoE1npiW3WdcaEg3UqMfnYxAKVxDmngHdDxAw",
  "key30": "3pBR7VoYvFMagFCs9jEnpeQePG3nneqjq1nryPvKZMS5RNuh47NxJf3tVxEqkvSNeVeUMLMAd5BVaAUHVatLv9eu",
  "key31": "485hPkaPx5bQuvHDgyJhoqdwqeWBUrYaYbbUygQyQEyUhe8BjMScB8BayvwdfvX4MdytJKHYgvbB214975s6UCNT",
  "key32": "2dvMuZ5mj7CoqEqEJ6NmtrWS6cjDd3jXKBTA8iUq3sTJbuo8NxqHiSBaxi5MFJb6KgYGFseep4sXe1aaSugj2ALy",
  "key33": "4DGwi1yPBtbsQXc558WVFXkDnLgrrSSXi3uh2D7hob1S4UKjP5C45aMAJyqdkEy6qHm6j2SGmdEJJ2SheXmDT3Y2",
  "key34": "4tYUkNrrkWH1WJR5GXJMaCLYca99U5cXcoNgAKMuJBqsB39mJa5tX9LaNBaAhmCzcWSnD8c98tmxc92uZWvze5cB"
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
