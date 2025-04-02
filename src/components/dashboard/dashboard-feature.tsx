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
    "4Man7FMh2RY8ZpSNVRzpCKGvxzCZe5nbdL9Au9NHRsrf2tZ7WW6c13QL8j9ef8GJY1NmNXwBEvRtm9csJJ35BxjR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4miqjoVzFh6t8FaAZgwk32Fg5qyjdokatunNX46mvB5HbWmhb8pv3gCiKtBmnKibfa3zCU9n7kp8yoQTcqiaKimV",
  "key1": "3d8f48ntPQKZ2p3xq6G1k43io9LjTqLjGCC7pBPAhei5zFRh6XdLpRwLzWUfrjRfh73ss6Jga4cuHAs9aYPQzNz9",
  "key2": "3b9gz4Hybj4czVPn2FicQxXgqhA5a9YzqAUwtGWR4DCP8ZVreGhKQgfTKKcWjW9W5WpbUGA5f4kTc3eEPLimUNGs",
  "key3": "DbFwg4WXuuKpYapmPdKVuoNCJyRvwZg5ztAEMzD4xqSN94WdoF4j1si976BP7iZGQbuTjoQXDmtpr6j9R8wMPzW",
  "key4": "5vhj4XbHJtCKNvySoGEzwFB3Ex4tQicg5auDWMD2CULLQJnpVGLEGaDMin19UCeYVhafSmk9QV57pcqcew3hjtFg",
  "key5": "3MhuLYMbj2Xkk9hJNjNKpeEBd7qGndXHHBHGe8UiDqZwEF5zdGTAgqoi1Qj6uKBkFpr6puncX293dNUpvg3Q3L2b",
  "key6": "2bus4fDY9qxVT1vtPCb6X4EvJH176xkxwmEJuBWjf3wzAQiinFtj1eavNafd7TXv4UqGPQndn9gtxEWum7SVsJMz",
  "key7": "4wDUX4kevb8xTgxGX2JTVZrEy4rdHiWt3hHJR59pvqXwTGzxjCurh2Ks817brTZUPFdnsspVUNPKLaFE7DLvjrPh",
  "key8": "523FvvB4EhPGEEttEtDM5hTKkcqRQuefK81hzisKjtswc57zWrYjco5PWYeppHR9n7Bo5dK3nB4JpkaB6U4X9eaM",
  "key9": "3paMgbsx3RM4bPEYBfGhYXQSi1MmdDE1mbDeVnN3f32QvRVcB4FMsBcp5x4DAzdmQT1PuMsc9bPogUgGx4ukteFd",
  "key10": "3rxiWub3szyzQu2vTfgnEpAuojLh1UJAioairbP3wTuwvcakKdnX2pugNrGnw7AeXVJKFWoB5AzvtwumWgAXB8f7",
  "key11": "3VngZrRVvkGt41n1bYCzrDpRw9yjgMr7RwxuncGZDiT6YSEQF2mvRLzCSahSA9gbUGhax73JsRxogT8qCRupBtFL",
  "key12": "4NP1Patrf6kr1EqdEZpNnmxWDAa16bUGeziAZST2D19dAUkqNCmByQc9vdkB2ZxNgiAFRwL7RgJEYcF31gLT6UiF",
  "key13": "etL8f17tUge4DyYYSJJQthuKFqZiB1Kdg1RyF3yC4NNCRbGjJnbiyK3T8piwp3qJmmUiG2SmSikeNsh7VSyrdvL",
  "key14": "zshPZx6DgQ6SBMgHwjR9QEejQdvzNSdx2oCqtBHGpUkV2fYqm4jNwXQkZmFJTMmNaomTbCQNtan825j8xP8xQoC",
  "key15": "1rSZ3aAwTYsQ9GVuYMGAR3r6VEyuNJiKhVF2jUv59fpr8NMWDBs4Tz1CjcV6X5KFwxxiHNvRtDpws8fXJQTbkyV",
  "key16": "5vRLcxjxjvpTHA9wBHRFb4JwGhwXiLnFi3QEdWuF5DG62Xp1Wfv8JyiqgRsRKbWTA1ExLu5zCmsGTnb6qS1G5qcs",
  "key17": "2WdvxDSb1mhFkPa95YhAyjtmju5TMEkuK66tw1CLFkDyus6ranDXJZ2m734h6pWa2uyiHueLkxsXjMmnRoW5qxVU",
  "key18": "36raYzMc4Ek1G1oiYeQKtafx1iEZsH8ByLUXhDkaRqoJ79LMW9PE8XqPPhMFhTHn71cVtTZBLde3yE2hEU4N9qd8",
  "key19": "3j16HszbVhfnsJZqzAYpFfrjzd4pTftPuKHjpBhkRgdjd8d4L5a9yXPNXLkA7Bug5pbE56zGorCk2LQrhCfabKP5",
  "key20": "5qmHM9jr8WW5XEZTeXwcWmbaQGznLTCF2hM4c2jkMUe9isda94wSxbZohcxBRvE9kjFB2CfS6y11VkZhTHNFwATF",
  "key21": "2HjeAWUiq8dsEa3PRdckJTzZLrZ81eAZYEWrZix7nAfXc13hQwEcgYP1BRoUtbsyB12GrrtoxTuwwAKPZFXxYyQM",
  "key22": "5DqSrvVQcEvLLs1yYnWUWYCJMUFVeJkqP7bpojAEmRLWMmdCrovRxNPAXz3BPpukHYJ3CvNSfRJC3XL2sogKcy9d",
  "key23": "59iLebWdCQbYfEw7bXu99fkjT8WetGkB8a3gyYt8WKUCp43YXYiaQ5KEEhdQz4TsxaHZ9YwGmdqNVvosArdL4DoN",
  "key24": "5tJ4YGSezLqcREpRQk4XEqM9zqa2bop13H4Ck5KbouTRZAyoQTjN6yXYMG9cXrLo7bRWDussYQ1hWiBivBkumLbj",
  "key25": "54WWsDxKstgFu4t7KrJUwW1uL1nE5qjGab1oNTAW7tpgCm9ozzrpSzQKsw7nCGpUqTy5noF5QoNtTuJLdy3nzCc",
  "key26": "5eX2h7BS7suw5NAo8vFsdZNPe3tzj65epHPcWPTp1pHP4FeFWJqZvk3ZWCEjVNtPmR7Q4GU5tXsYQXV21WbgvxqB",
  "key27": "2wQyrY4srUbdRAgwuNW8ff8Y5SZ6Pvwp1kVSxTLqQkKLdC7Jb5vgME5HMPitBMkPWLisRZBZHJXZC7hkie338jsM",
  "key28": "5LjiyF4aeDSZSAgiQSHzj8eJJNq3uc2QKXPQTGCF2v5GVZ5zga8Uwsbjv1HQDSEt7Ys5oiegBALJ3LX54W5damaB",
  "key29": "41M9pfGbo9EyoTdnfgebsFnDp8mzgQjDtEuno3hp69RxHqcikixw5DFcJb8tZ2K1b8ddyn8MseLjAT2aFRgKBHTT",
  "key30": "ufHsCoj3FTeTDp3siiYottSeQj4ZhTZ7Cr9M2Y3dpHkw5D3BtTTJgzHgSKM5ozt7Zf7jDhAV2tz2jjpBCeE9EPV",
  "key31": "2DpnR1BYZBegTFCXUbZfMjuY3mimLCLfnv8Bi1pCfZ744evPnzbLKQDrjYENBM6gBRgx1vp69PDBu6PQKp2vmbLr",
  "key32": "3pipodNHzsM7sLrupQqrVKJpGJ44H3UpR6AHt6m3HvuxBKdmLzsdmApWAT1Mrz8ZgNaAn6n7rrMLn91ccZJTTjfB",
  "key33": "3PFwrKd92G113DMrm41BfQwbpAkhtYnfddH1dFjcfUEb4BoYFhprbACUH924YH6UZUuajHtxFW5XcWXh3WG8S6kR",
  "key34": "M4eSvZmwN5RbYtT82C1jzNw4ivZcNckMDD62D2f5HbNnbAFpiyuwMX2K6WNeeiwJypYoBFgEjiYhXGY5XLkfhsn",
  "key35": "vAeZev9kkSfujKksBQxthR8bJY1gewAACQGMSADTJsyzWUy5YQXXQh7975fiNYBxGsDRcDzZn1rn9zKhkYo3Hje",
  "key36": "4XzFdoU1LHgntPjfkMhPX5k4dWn9SbfWhiSA7Sa9WkdFk7CrNKnQy9vcF8Eb3ta94mz6BvApWV5ZFZ4T7mpt34dK",
  "key37": "5JPJE4p7Yr9khFTq3Fh34uuc4wy1nqyYAufQ6vmTRSCqYL8nWUvuQnUJsWQpXWhgzqvGHnupRaJ2Qjc6T9LJqC57",
  "key38": "xh7STU9g1VTktGCuDyZ8HHMTR5ty78qXyYbNnU3XVTTTHtujM2aXbZ7RP6UNL63WnqUV7rk9A8HRHekogKW2GiC",
  "key39": "62dvNZz3ANoUG3UP3aigRVeJtEX9xAm7QdzNJ6xK8xwdWkyGcso98svrDit2cYJJEeYt4fibd959yBLgQoXcqRR4",
  "key40": "5iX9U8dkuz1nw4G1uoyhcn731jEX9db4n61oGdcAmtpHeiFTocxtBz9ojJM8ysWcABSCW5N4CqDW2R9PeorqgLCi",
  "key41": "5wE8sTcFVQjD8jiwvqLrX6oo62szZNx3rMCWYzv5f572FGZJ1g1afKER28x7jSZDsuhwfWqu1Tw5pm8gw7pVL1gS",
  "key42": "b4FRJWefooqG7zSgj1FCSEgxi8xyN9XEAtAQnnGViggXL3LgQqPc1GFP9BDVAHjxxu2VdPBDH53pE6ijjtkE2B4"
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
