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
    "5SvyG5z8mdof2wmnetvX67KL5u3kKbSB6MjwVq9w6f83xtGbjLLgVtNT7ZkMU3sxPQwNJTQBmVHKNhadqQckuLyr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G33Jymnk8kbAgWMSmQxVyFdybVUbKp3yjyioQTe2b6rVLYvBp8E3mha2g1oYChjHqwcfvhLFBhrDxnHekAjhc5",
  "key1": "5vhw3pCeJS1p9Qum6J8PJbZ6WK5SRVj4aVVAHkHZFudJ9nM6CnE51BjWqbQoHFDuGYo4ByJgzUQuHVUyyS42Zy7C",
  "key2": "2n3mKvoNiK972QyXfPxLL6MGumWv2uAtYUYxsi3gRVyrtRZj1fW7jibJ91i29zDEvydxRSigqjjf7FDVMyvGYmQD",
  "key3": "25oqPJNchdXX6io6sKVtbM2pWG2NUBGJyxe6vR7Wr4dgnApHuQc5TxFZbgc7pjTNANJfvgqURm58xg29GAUK7w1x",
  "key4": "5YPqX4JXZobQELTQ8hRuyFMHzZ91oPUzYAYLjm5DzKTGS4SDokjCdgpCBbrY3bFK3mow38CxXVspjp71kCk1Uy1",
  "key5": "5UYVpzBmAeB7WsegaAN6w3ZbLqj7jEEA2kXZV5UV5YL7PXfmqys4HMeus5ss5gknbD2WUieH8g9MUAr6zbwo4hjA",
  "key6": "XnaKXsfUSmVUfCqBJCyNTKnxSZKh1E5XTwFYUijihBtmkHQeuY7NdYoa84qxit46R31HKoyTJCdxLLKFRt4jrXu",
  "key7": "39aA5Hb3zBcJkhWAKf5FgPUDqpf69DUTTyGjDhcjNwER1mg27zACV8xGVpdFjUhFAVuxhQPLXhnEe8AMA3z6XqYj",
  "key8": "AgToA8smLzCPyvBCdFXj9S531jE8sWVBhbeNLSzbQKgRXdu8gDMejcWuHRrQWrgyt2PCnejEooWBoZhh1QwHcFq",
  "key9": "4WvL9nDySJYgPnwyiB1jNACHr9NWpYmcLMqzcWL3cvQbQZN1aEnzhtfVPYoeCUepF6H9ADUueSGCkP7fEZxWzBCw",
  "key10": "2yngedxA4fAy7sXa7uz1xoBeiHinW2Ec2uQWQHaed3bDmShCSEcx5J2yRzVMs9gddiTE1ZSJmbT2mSgZGGDx6ACd",
  "key11": "2f5D9bUJ4taPpifPQLEQQ3uSnYFUvtXnByycVmBJvx1yeVu9e8qTLrBnPW7DJGSAWp4gaHAFnzEwqa4pEV6tQMrk",
  "key12": "3RfiQ8qNKYufXEZAq2NpdQx7o8ALzbzFGNuxF8gv9NhLvzDPA4b1tSZQbzaEwLUdSAEzoBJJsZd39NpPGEU2B846",
  "key13": "2f7L99Uu43FkBdvBikvGpHZfCgg2oGLcbPeqfe5vcQYneh2MyF7tTmtdrLjmjTVYWHU4hLZezu17wvWaHCz8FyWV",
  "key14": "HBTa7feRA4RbbeWEBAcAVTtNE7yyX9C7BMQGbYwDW8G6GRUuLGePt6UxS4kgQcamdVzuSJ8twBnvwrv92Rvfuzj",
  "key15": "64fZcpLX5sVtQFtiKTx5sxtQy4dEs6Hum4SD9oBDvH4P51eUpGMDp6UaZDpFAtsgkN4QDNwvHtqMtZcSkVuUuS3e",
  "key16": "34TXgTqgaiT7nWPycqREeEi9eqK7UNVemhZ728CURu7zd3syPxLPbFpoxCj9LQEB8LjP472erQwfgm116a9rgaCY",
  "key17": "5bUDkx7ug8r32wkGqg7WAXfwFBk5z9RGhBehyc3QNAH3hKiVWmVDvE5ZLv96Sm5CHQrEEczb4qKFPR41KC1pbWW9",
  "key18": "31sK7brjwPjhPMw31VCYHh2hP43oXHZiXBt8GkBKJEFhHmbokRcCJ8XMpUoWVqThDijoB2omjQA8ttPZ9H3HUA6k",
  "key19": "4km6d5nTHoo5SYwbQVT9JpptqxxKeds5pT5vPudFiUq9hwXLrtfPr9rBxSLoq7YK8rkFz4EZNsVidM2yE8chxHpv",
  "key20": "5WuPUcHxkVPW9VmPj8pkHWCsuWJrBToTxdy8smFyH7AE3gDsXKciZYmEH42nHYRKhM2xxrszHUCQn2S67SDD4AtJ",
  "key21": "5wXLiA8fBxvCHBgzBrszYypWXm8wHASJZ7TfiLeTnxzrh8S1DdNY7qabuWDQ2kxg6mJB8GUyn26QDdZhQoPk5efm",
  "key22": "47gMnXSknyeif1oGFi2ezVTpQSRbAzoWrZFST1UmsfTPD6TLVBC7yJB2XcDAq7Ptz6ppvKAR4ksBRnmobJiXcou2",
  "key23": "4m84cVFjJM2PKWrcQNJZhDehdZmGQ3oyrRA3PgmP4b6LhQsjFzP1NBN5fq8U5A3qGDgs2mHB5nzzC2hRsRNoC9Eb",
  "key24": "5qgiUfiVyrtKFB3VSxW6V7dhT9H93JYLbTetbjjUuZGxPatG7AgkDKcnSZy13dU4rtS4KmexYyZpvNu1Kvy5tciy",
  "key25": "sxLZqxa1nr2UhXAyZZbojPZdgV8hUWL7EXFZL2eEGp7kcVdh6YwG6sc119xFhpSjAMfzqmQVpkQNsyfKinw1mR5",
  "key26": "2CFPShrSNC82pcTfoi4LzXapokSVdNzDA68FHE92mGSsT8ZHEofxqWgZ2KtRUBbgQL18mLMsPwRSrG9oJotFxSRj",
  "key27": "4k9HJvFtdD2aguoE9yjHvALCFCfXa2u8jorVd6rtMCBx1DJV1KqCgnoASaQf3kchGYxaaHiff5rbtt8P6tw35dbc",
  "key28": "5tsdxKdtpU54o3bDVqeWEpShft73M32dPHNfVyQQyfdR6U6aBdy6v9wTdihEodAyvuJ4wQzmWvpC1vMvuVp73Ri8",
  "key29": "JTzpCzeE1h9J9m3ktj4wbXqCUQv9kDxZt72PBEEqo2i2uQKWrbRAzxQCnED9U25nR7BbitP3B86GA74HnDQt53M",
  "key30": "3R6AWVTZbci97dz3bgCCwsnDQw8suucPTLBRo2dxpUapZPmEuZog4xL1ryvkyhZQEte7Gexu9UPHgQytZsNE5Vfh",
  "key31": "33stxpR6T4Da6SnMMmPPnsXJXED24kSqsvwewtQTKR6e8F4K4gJhveKEwWtZ216sUCJXTgjc52y6nAZ1b5jonEwt",
  "key32": "2K5MkgQs5PxE3rhXuJtix6FA68QgGKvizRdMK6AZ9Y7oXoX4ymMmgPubHeaBRD5LQbxmvdvw4dHrKtiWo5qCZgXG",
  "key33": "4tBg3AeJLar12VJZhRhsLTqCiNvqDeA2Hb9D2ubd5sb3NCBnfgGEiMRKnProHdGoSRVhF5caX3RJGgwzCjQTSouD",
  "key34": "54wd3mF6cSxdZJkR61bN3zPE28TeXb9XD5LU3t2xBtkVm9hjmAmKFydstdpNCGaVtVKNB8QkpUurW2QkjqehMeSn",
  "key35": "4FBiakHq6r5w8DiwdJ1bDzsLMZ2W3tGaNfLcCY8qdBjwasfVtVKbcDUYTFA1GxCztRZGm7SxaP4ei4e3nYngP59C",
  "key36": "HjnEsty23DqmYFz8jFD4dw5BLvghT5HXS3KxdNsDmEwLJTzPZ3BWB1crQ4rq74hVR2sJMdkCSxPcrxDYHUydbD8",
  "key37": "4aSWuUEKRZyHizS9XCdjg26ouaUUH4Zh2cJKb6PNG11jdV8cAQEewq2eXzWneQncZC2rrdmZSBNAVfa4gqKJR1do"
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
