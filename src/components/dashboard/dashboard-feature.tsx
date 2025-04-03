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
    "5XxLvUwG1tgyq5SL6iCN98u5E6CN7CWkCE8DRmqZYYtFj9QF9fixgp139ZxYawqj4gmeF9FqB225ejJvKGtUVBME"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HPotr8ZhTvB4j78NnEfCoNizdvMA4mCuvGLqfdXR4bbZF3JhsfhtjtcveGm87Ca2aBhxcMP5fSXuXsHiEpoN7a9",
  "key1": "2VCHnp9xC1USyM7EtHaYJ525PtJmEU7FJNBasSwXEeRFGUqhmZ7bU88b5R4CPsrxW98SHiyZPXPPiUrR3f6gYGx9",
  "key2": "5ooLEuvUQUT75xQKGmen6DkhY4znjQAjrQDTtVANLY2MSrmwS4xMrByGzcBnEn9CVrsp84bN9CmVSZxhYTmNresE",
  "key3": "2vLdPJBynAFYahhXQQw743Gcha8XQHLDaRrjBarunmAiRtiQNUPfhHvKSfzj8cHtRw2aHRvtECd3Ny53nBeDMfsh",
  "key4": "3GvvuzTiupnbVtcjbVLFcsvur6jCj1arVn1vB89zeSnzDHyZ9beUT1C9X7gEjDX7DPy7E8V2vsBSL1GSsoZingNJ",
  "key5": "453yzDApq5YzRvV5MXCLW1dPTpSUeXKcyq4xbkEroLtqMA3kSEeqfv6DyRPJST5Sj7DsuzKkgqKX26dWZwohqJus",
  "key6": "2hmf4gd9Rd4QpUBk9vXyogcoCYmRodaf1jDQMoEuTwApXr4dQQiZoHiJz2TX8qh2GfsJvX3VbwhURF11MQkFLR1",
  "key7": "4MS1eqHNbpMVx9Fg7z8F5jJMxhiuXn3PAkpdMeJbEDHnEUcNnQN9foinHisNai9n5Rbt3Ho1GDC9Mf7fa71HLt2",
  "key8": "3rTfXXdw8EnBUJG5WdG3M7LN4KUKrgN2yGSq3wfwukhaDB8h36yJEvjUNtZULq2EimxTrLRhJ2YjLj9zMTeUBv4J",
  "key9": "3g4horotrTbSrDsVcT3krLna81E2JhCWooZK6pxdGseDEc72N55y8CSRLXnKt5bNVjddKyVHxMJB11HJueQWr6TW",
  "key10": "2KmmMAHR6ssHysmqkZmVMTq3piddzJyHZ43FNVE14UV34Sf9UJyovy5R1W4xftc7ve2g3DH7vvtwe9AQZKFhfJtB",
  "key11": "KTYGBv3xWZWoyxiCfyAgqsPpyH7Ueg3XXepGvY2CUdubnL2QUSd7jvGGxGvQPF55d69gSbfFoFAA7xta6krqf7M",
  "key12": "2mVFmcFDyEzzrRKH5skseK88ncTKBEi6Ngsb58U8iN2pAXCVZwctaHS86TpN441rk6VPnvopfscRxCpqpijctkFH",
  "key13": "3FWgQpAmRfZeFguWhUB6JupTXt4w1pHdUMgMRm9o5ncrgGcYHy4eVZ6MyXqGVwgLhyDR5mUPCT78b6PJ5pK3VneD",
  "key14": "2GYxFv2sHLd2KXJJgJancSFSPzzJYwrWmZjXaP1tUg6iDiQ16gC6enzvP8KwYyRvWgMtEmo5cEXRDWADU2wvrzyL",
  "key15": "4U1CwWkiJFvXYS8GYo5neZBMr1LbHGK9XmHfVLWGDbLYjnwCqe7kgwkG4rZfQqaxpHd57K3qxdNK3egTxLfcYz6h",
  "key16": "4xkdKDf8v6LDMjxWnLfRCbyHmLCYsYF2BCpHHZKLA86zLZjyYjbkBAPSigDukfPNgdMtvsc2gb66hsU6ZAFAHw7j",
  "key17": "5SyxLDQceSNtDKrwkow2kKTqeQd96GFEjbyTWkQcngPAwnv4anZh6doEniGoYZsqBpgcCzPULDyy68jen4Dyu38a",
  "key18": "2QZdf3jfGb6GVPbShkbaJRq7M53DtaRiwusXt9qcfnv6VcVJYZaM1jD85Zy6irPr345reohviwoVpZs413bdTPxP",
  "key19": "3dhDEXz4tYMmkFZpkb9Eiasg1WvWsWUh19zJ2MxB1jScZpg2HWgpiuZoYey2WuU8KKsDMeiXgCrSX8VgBGALKMLF",
  "key20": "2AhDFCjjf2aeqGkvizvbwjgkMLqzywG3cTsw96dG2ndeFGdHtTLheTVWP7hCJU5xLQrNw18rJuTc25YTwkWqaFoz",
  "key21": "dTCkAJwspFJYt4f34o9wNWvbKmpaSy5noWKLwasMeTQc6ptPPfpgU6oRCRa2uxQpm72eWrBMyhAfJBumWDw82d3",
  "key22": "5bNHbXUZ7WSfZYUw85Qvk3g6XsTkFAXfYbUSex6cr7dQ4SdMPJ6zhSwM6f6cUMwM9ys6KVLp8K4vnjxDnEp2mVgC",
  "key23": "59T4gBLrv8m86qxJcaLAPoLRoXB3VVj6eDx6JJx38kjza1wuc3RyD3dv6CuoJpbuJRJFgtjVmgFKaXR6i78qn4YV",
  "key24": "cMJSKzBSKvSUEcNJzTtSaGJ5bdmbTuGbUJy8UZcvn1o1n4uJw8TYQDQ8rh2RbVQroCUJVLCXRE52RJxW7cZqYmP",
  "key25": "5WeJeaoSnAJZrhBYpj6CJwFpGHjJUWfyBnu8PXwR4izAfmnFjgZyqegtuZi4tT6YqV2Uy8mB7jAqYuYmYwS2R9Bs",
  "key26": "4sHYYCK44QC2CpgRkiirCUB4AF5iiQ9LejYcMENJa2r8NPjMxXNoQGP7Ccs9ArqMumYsjwXrFfiC7J8QnW3cNGih",
  "key27": "262KNNRZg28NEBT79Ecuo81NvVNeYYwFKKNpKdkzq9vxzeskDv12Tg5yzxnPsoee6qkshi7JYRfdHVZFqKpU8RGa",
  "key28": "vK5Gdevk96cSMC3HTqMwVqZz41AEfDgVxPQCvXFvuUnEkVb1PixTSoBPp4f1EJM2AEvLP6WuXDjP2Ng35u4Hq9N",
  "key29": "7z4dt7JzURLNAaxcUfNYkJLATxHZMac6ep6LiKk2r7sWY7kJah3U1J3RpMa3yohf7QzEq5KnSWnMT4wJVKTPZ2k",
  "key30": "65wm7QZ9FDzrwSTS1P9fxVKwuPcexR88ciJwCMLexZHkXD3frVjhRmMtiLb9SgpMYnhQEUMoKZsamQQViCJdNXVR",
  "key31": "3N9yjDjTiGwSaMPgjvJNzL5or2uHQ2BwUW7qgPEc4tJTfC1cuw9WuEYYjFxC69DkvBg2CeADRo2LAUTKDJBmb62Y",
  "key32": "4822Co5JAmmGJRPWYwCdG6Q9tU1v2c2ENECk9H32gUGxn81EtrtDAeXFUupid4HgpoKTf8M8aKrdNSPbWrq2GCRG",
  "key33": "5uEzgXwCW3oRcacQWmCYVppU2F74G2BnBk3xnuyTYG5CAoYtvKU4CS7RfkXVJ7YVbNE3hb8LDdxWqcTCx62xVeE3",
  "key34": "46PgHBGavCngy4t5d3Z7fiu7fT8qyB9y2RJQPNqoeyy1DMgffLZJw4Sqe2awkC2R6t3utFyhPvC4UgKFCoqZv1Lk",
  "key35": "ouWreinX7ur6gbrcPpunJhVC6a64UT8iPQyCWZhddUVXEV8gJNkQmX5d21RFDw5ihKU1qsrWycGBx1UdWynpjkS",
  "key36": "3iNzyQeTkaAHuc714NNezCqom8Y2kVX6yNfSaDq4ykBHjZvf8JnzT9BcZgpt5yVbWoiJRYzdBbiMGEyMpjn8pZNm",
  "key37": "VqQ9K81mC66v7dvY4u9dGDsAVqnXUuqRNLzhNfZe3BbZKNnH93TgAjqG3r3XUDWNZNCvimQrZTw6biZfkL4xJi1",
  "key38": "32pNSppXv4HYYwZaM2QCmcnRny5StNSQrRczkSpzDXnW7DgytzniNYj8NVXDarDcoZWVb631D5oX8nFSKT2z11DR",
  "key39": "4YHVpZMBT1neboAZaXiTcrVFHHyeAnYU6PETUXLJiLFevuVVXJtdz4FKrJVdmUk859Armifz3UFEq3841P3dDhbs",
  "key40": "5gFbRRL2BCbpeputAodMr1QHBdYMs9bAirXqZGq478DT5HBfSgHjtfzKXhhY9M3YxNSwzYqMgGbQo87AhDnStMFx",
  "key41": "fjHS9N1bzMe6Q1ZgjRBRLuwTnUX28Yr4rN7hSMZ6n6Erqj5MhAFwJXpens8PkEuQe1dTLE3jWmaVTWnUjHKwmLT",
  "key42": "3ATmBE3k9wzRib89GFE1S4ULaQznKr5vAadZexZnJ3iHQj7RncduRcLGyLpJNVXssFMxSFpaMb6PskngdVZCVJTg",
  "key43": "2SnrEJKkm3QZC9Q6vay6kvvsnZfa7ew9b1MeHMLpjhQiT5XHDMEyHxkj3Q39fCj5a9VJf6Z684kbqkS3xKyZkK8x",
  "key44": "7ib5SK7mDM2G88zjjEq2YeCMdogTxkVstx4skXCJTWfnnXMwdJr1N2GJY2dgiXgzZbxs336oFPHuXK25yFXwQ5y",
  "key45": "q65yvgBt1EHTP8QTuN9H2WqFeCPM7GWSPQrbaz8DXzx4suhYo3wZ3Bht5qCGm9XNfbbjB7tMGQrZzC5Q6g4ubHY"
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
