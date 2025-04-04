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
    "57vUxyBg8r9JMbwQEQQLvt8bZFaLfwtkndy6ZGy93VbaUhchvoR7HviLbb3UfzFBUahf6erPiXowK41UUP2YUCeE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fKDHqWbTeGCYKgA8Q7Qqn6Ej6AUqUypHgVA91A4H3qsK76AYgqDwsWepydAqGpZU51GXUBEzzbNVZJqSwaJBZFe",
  "key1": "3MvupHJAMEekCdQmRkKjm8p1KzsMgiJGB1oYk3EQKH3tQnRLv5HJDTHYHFDR4miQyYSzwKqWjdKr4rXHuXSeGcjV",
  "key2": "4fiq7rrrjBDuv1rvFiTocno2NZpWewgARv7JCgMrPrWwNAYTRGEmQEaGa9NoZaWHZ2KR8RKyznNnzEcDihnEnCPr",
  "key3": "4CrrpNxkZyRFUaheVCFhvZvZNotD3xmbKMVeHr1K2jLJ5nwRa7Rv6wrGTiwMYGDRzWiZF7ooRpVSrwtZpWamCcbP",
  "key4": "Y6ecmnvLsu6gdAwZkJ2Bu4BDVB72t9kYdjR6giYYFNfanYzN1yEQmyxPquQ4YSpFzVCp2DXNFzfYFYTdXujbPfs",
  "key5": "4fyffToQCU6ZDffSFw4btC9TTBxCEaovDjEAb5MNQUbXhYmDbB97Dphr5K1Tsu1hgpih8YX5fTEVzfAv5QZeyodp",
  "key6": "5FF7ouT978KxgjekkdY748RJQpbTorkrUrmqvVT81fckfNczaUDbRhzGUUi4WhpA2HJM62YC6WarFSKopUQGnH7H",
  "key7": "3Pao6SL6Vuvhgp99nRNHcxzr7RMQMn7u8nuWuBT6q4n59oJotyTUYhngn6SBW5vt7183m4KFHYEK5PMjhtnAXNBL",
  "key8": "5kP8MzHVJJFgmdvBNGChp4MNqUeMy7DdZtVPLfVM24dVMeJvDPGgFmnTEuoWdvzLFCvHdBGV3T92h5UYTY5iCrd9",
  "key9": "5biB3rxWjHRiykK8Mb2oh5fn2yybvR6XDBTWfS8BSg8yMiZZj4LwsDSYP21KZVqZXR8iweN8B6iebphnYPPZyeKU",
  "key10": "32B6LR6FhHJsoX8oSXpsJXRWzMfYbt2KXsUhDo8wmjUZUoJLr6jb1sRSbcDuX8YJA3kaSEVAJ43VQEZRdVdarg5s",
  "key11": "mee8tyGdHKxrHnVahdWrQvkV6pQNxQDeuzqZR37uQf8DqbvjeCPMncaCpLz48XmST49tzhxjJMRLKsi64kyotiD",
  "key12": "536jYbGmA8Ue7HSogNtXoN8ir2pYRnTuswSYiyceeqb4RBf7gHDdzNxdgpM4RsBRHfgfXyjX3q9ZAHKjHV71ydHL",
  "key13": "34znWWvw6n4eBwXDiL1jwt7YYWocpRh5azCwsjFU3KCge1JhMCYLARnbdnb5Djurxuoag57gR7ngcLYGm2ztLHaT",
  "key14": "2Hqf6ZkZvoHVajVPnJwtMpyxP7AwhAonzzky8hjog2X6JftZ6FEAPYHaHovhzzHHEpJF3FsWkd6zrSti1fuZTKRD",
  "key15": "5JEXfQZdFChAqd89D4D5zuzcWV7XcDnvdR8MrvNJCTdEV8VRxWyyAKQKvVEZbQy9eUrrobLxqKqesH6Rfissb8PT",
  "key16": "4QQVxMFJCrVGR66SVmWuvgJADKbtiZpBiSdPZo7JUCwQUkaXcufyTqJ6MQM7H2RAHBTXB1EGhUbb8tf25bLEwZ6C",
  "key17": "626Vn6tS9RBmNareeE5ZSkewhVtA9juPRVvAMKyu9KfSnbVcUTMUt9LprTm7hy9BNo88mTcFYWo2D7bd7rfbwvhg",
  "key18": "2e7kB9enPPcWEhCKjG1jWLDH9zxTuFRsXZueHWoQQZ5DTqtnDx2Tib6ujzAgpXvR295xep91Dm6rqjUKCJoUM6YS",
  "key19": "3HdSH5ywY4UC7Lh4keqJHCCRcsWf1y23yPr36f6P9wvA2eThAPosy1NMZHtaSbnut4aYAUY7Ck5N9D8n7qL4Frtt",
  "key20": "3dU8kSGNGjmNpE83dWhqBZhrHuKJ6yRU3NGCRjQKVtVvXHntU5cRrCPTyJvbs5PR9n9D2MkaviLd5tko4xystkRX",
  "key21": "4FhupAD5SAQXZUZkJTnsxQzKS4XbsjMShmJene3Qb9tWHHdReENWbiFvj7ESp15GDCYSdPgvP9hL98fhx158mzZ1",
  "key22": "31bDi4jhjoV4KDHpyvKLWFLXxaVb9Q3k42JXwN4efdQmDDb4fjfoA879bFYFChduNMDtzrLwTa7N3TXdEbGQM6PE",
  "key23": "3p588X73JsB3YtP9Ef6R8KqEHy6hFZwzZaTHtY4HTminYhVDuFGABT7L4ap91dXKHonvhk2dmYH2FPxR5VCJVYda",
  "key24": "VE5dMGgsT257VExQV4cyT8U7d4U4yHytn6zUovTeR8EqoQrWHjGZWtqcRJRuLp2W1H1Ffeyu746f9JwnztJsubK",
  "key25": "5VgF7DtvyTLb1LxZ3tEntNb84H16uWSt3JtbnRDan3BZ1jJdaybzBh9nNtRcRAerbEY8SBkM7ReWRwzBjv9mhscF",
  "key26": "23Nf9FoN7Sg9MUkYsyphiJWj8cVyNN4uPXW2ne9Y7CDwpAzc7yuiUcWtbPNTarUuaWdBxgzkKkm6qXc61Bvmjn4U",
  "key27": "5HiHEDaWhX1MeoMfAoqXLvCgSD3qisQp3fH55vAaCcTYyTXgJH6NYbScAyf2cpa97joJZ7adqaQJtECXtiQjCxHm",
  "key28": "2FcikqCpt2k7MBRJTPfkXsvmVvmk3xBZHxi63qT4cXGpjzYyFUyzhfDeF8QA9cB4js2gnwA5Y3EnvEMzx5WrakJK",
  "key29": "34RXN7RkNXZoGFTwEKT7CkHZfY219ABPRJqrGi7QMQLSGbYtrQ3EZaodAzG5ivDjhWUpLR5waUyuHkUJPf3JXgni",
  "key30": "2SiMLTbtJ4gNQTymqDqqD1ousYrdhTAfuR9wVZ5g1WKQ5BvxdBAYapUrgNSgFUbm654AyVph9mCrjkXn2QM67tdg",
  "key31": "yDJ4wCsYJ3v41ctYVvJMDeiF1XAY22kzmJhWgWYh7E24apbejDithbvL9ozyXztjt24rJYHhm5VmK1gySAyJDGd",
  "key32": "35tsRQF2NeMmf1ytHazcJA6WkXcmUgXmfkTb1Cm8NcDX8jZWEDzZyKFgSExjGh8FxejcL6hXfboGqpZdruu577Mz",
  "key33": "3fCRvVqPHK56fBb19iu4ngNAuXTWFvPAgtSUKkiQcLZYiNK3xfRiZBKkLEouoTzJg5bAfxHRibShhtBzc45oyRyo",
  "key34": "5Y8gqrMRFUmjGdst9MWy5JvQb1mcNbFFJssyt7Q7wDPRx5dELPJmVb7yqon211Fb2ckYdr2YwkA7cLxUKpCf9acS",
  "key35": "4y1tAb5nRsjWfLneHBRRGJMb8tcPEZgn8zaQXK4Kw4y53gT6ocST8nrbsFYaATRwVK49txr89TwU4a6CQsj6ZDWq",
  "key36": "g8HwVLrzLoqyRw8NBVbCYzmKqMgUrwn1QgMrYSJ9Vhzga3BtpK5BsT1mdm7Pbm1WQ2juEEHRMXThvyFgD3UyiwY",
  "key37": "2NH4eYJHc9TTCcmA1taj1pw1h55VWPfGynsxaZsBhCFJqtDXm2VyseCoPCWGdYwW2L28zNohUNbzjWBG57eX2XJX",
  "key38": "5ikuUYFpxP1RLkHw4A4rrSXWrRkkqPsMW9SYaM9dzsXSTKKTAz2QepPYnJW4hzCfuExGn3M1L5ssX1mNqEvx9FjE",
  "key39": "4AKUQDUui9edkRYmn1RDU6EpFpr3e7tgPDuPQg21my4V98y1Ds3ZqzsZcmmCEp5ghveKzGWRmgcLr2PjD6c6ABKi",
  "key40": "4cw3Pfwqw6BeZ7USt2UcF8Sm3f3819DuigPEe9iqMraJKFHVyQSaFXZQCvQ41Fx32jJENJpdtKEjtuauhwpMZup1",
  "key41": "4uopZnnuLZ4PWMyJya7Gt6kwHK6A7dPu163e6ywPtXVbg1HJUj4oMrUHHXvFqZnGKmEsF5bGVGZh41NQ5gWKd8Ti",
  "key42": "juVrBei8MU6kqBzp7JVrffqMnqMq8NXB8tkzx339YqwWnahztGazRhZM3jrt7T8SGPNEvNthR1cKmkTwzab4a8L",
  "key43": "3Xpi43XkWXtHnZGbnZSHJEwnvGXYDScqQJffnugP1CSPVvnYjuvrXFSqbu4tbHdBfNGhfzUekNRW6sqU3zAqDe9Y"
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
