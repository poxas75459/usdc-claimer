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
    "46jqX3VUn7qhrP5EwG7kvqxPbvuLnah1f52UkzThHss7eWfwyR9bVcE9KNfiqp2HtpYJfw2QGUQuM2oJSchVxjVZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aEpqNrVdEVEpomgzdswtDjjiTP746N7H3wtU6SQZH9L7zkkX55dNbjyBmnoVmTeWx9PfDrapzwGAg58ChQNkJFN",
  "key1": "64J3e49GyxJTofgPLU2RnUkNq2gLH9tGPKKFFHhsJAY2P4CpdyVZhUiDboqgona3pTcQ83cRvGJGyooQz6YU44EC",
  "key2": "4sJvpbrkwpbqcSjSc9ueSpHgFP3ruj8oBDH796Dhki9enR342MNrGBV1f9ijyGfxPKX6XFCNWcXoU9rLresBrwzt",
  "key3": "5EKmAC7auXrRxPgEjdvJt8rchGjEqx4Cu2Wxso9FmGDVE56gD8fqCC21KJGSGrnqkccUfRc2htDJPccTWkA4mfUb",
  "key4": "4d5AQAEcWiwYHYHDgJPiV6W5xWnGWg3ZqMm2DoZSSWBHRRhuFz6hfoWDdHmWmGGkXuHLwtwJ3WMyVpWRvPddZRx8",
  "key5": "Kpsggq589E1orLruFqGRZ4Gie7Mbvszk7oJKq7qtr8SM2U2KWTFqaCkCrYFjvHSe4ctM1dp5THubiAiCNpN7HqG",
  "key6": "2Y3yrooukiu2e2SoJLXpjtqKNBUnytS4nK6Tn98AnsBNSGZgLDLexNxS893Tq3k36q32rovhTXkiznRqtVHSdSKm",
  "key7": "5dkdnqBeL8CmU5i5JhuqHysnBud7EfMGDVgUHWVJgRHCouwHmk6AJhNkdUaqHansgWDws3gq9jNKr8grYn76JAJB",
  "key8": "2eeDaaNtNzcxugXRMnYeLK6uuK7iNGWLeUo6VyjcbEa8fBqJX4oNjKHPN7Gp4Uez9MqH1HBQRqABYfJdHX1tPcPR",
  "key9": "3FQJrMwehYFRaQ5g5eGFQzM7wJ5PYjqZvyBNjLG41i4ADYsndoJuNPAo6SvGyEcgjJFqtYVwgGJirKgtzioNqxFY",
  "key10": "5euzt3jrhKARHbj4tmwXpan56EjwnALFJ2C8VMFQBWK8hVjUwLwNYhnVmRgUhHw6Wma1KnwDjKCZ7BkUiPPY165f",
  "key11": "KQ3s5po6k3i4uVtefxo2gyWRy3xRMauMYKkPKL3twHTZXK9YAzXM9xwFyzi32h6XzAwXMQaTx7guxLmJB3jZQ8R",
  "key12": "3rFbPAzAtuzCQi7VNPUHy4dmvDgNeuzjjrMAiM3gaUg1ZR1AWiTEGeNwUFzPwmL6AeL2Bqq9hRXETKWokBKjP4Yf",
  "key13": "2x46GszZWfUyzX2m5UMGBm4pe1Kc3XqWUCCJDZDAJMUuNjbY2zGA8mCHQWzYdh1dbCa3Qs4jNowx3akPDumnQdpA",
  "key14": "4t23j89ZDabA7wZZAySksqZpi38FbxKo8QUBa3kUHfp6sRNR3qwY96gnGD3oowcTXPypVLkB5BQeyAV8NfiExK1j",
  "key15": "3tW4cWuXBv6UxW5CW7b1fKGi1XBVUHVMuRjwP84vayV7MNfZcGVyYUf4QHyvYoNpL4FKrrnnQNoinSbP7nScGQgk",
  "key16": "22U3pKoAsj77xJvt4A4a3GuqWuaSzs88M1ZqAMKM5CqTRQcz1WhbFtc9r22Drv2pEVLSWoKofk8D8pXGg4qWuA7S",
  "key17": "bwoZXN9ffGQ8j19FEZgDeYmacPnW7M7wGqVxicN6Vvxcw4DagbmKkSZD5mxpWnZbd12YUsF3i5YgnUphT2hgfsa",
  "key18": "2mt9uKDVGrcPPXR473xGsi3rWMuGeexueGf9aYf69zjq6fmBCwzotoKTru3c3CzRLoDDTLmLNjUw1PMCmh3cxXdJ",
  "key19": "2UTKeqDFeKQZc77ix1PZJQLPicnPPyBv2gVgWDCq6Q8wp3sQoMBwpvvsRDhgEp8mYu7cgiCcHnNAZ3oy8GynaEJL",
  "key20": "5RJeY37UJZxTfrAk61urG7dQi5Pkpe21Q84hwHXmdiymUhMipk6Az6tDEEwShprF5Zmzfind6tgMVG7wB3Yc9yvG",
  "key21": "hJTu8FFwNKfj64mHouRyL6kZQMMKWcSWnaap7zE1J7b7vyo821ZfCjQKRrNC24dqUgMVFUnZjS9m23QcSwVAniU",
  "key22": "55X9mpE2GPhkyddRcLg2nnofUBdFYfcPjMS7xH4Aze1zi79JSnLrxyGfRvpRCZbsFvtdMuv9bHHdVvvf4mHSERJ3",
  "key23": "D45Qc49CzzW6ig3GZN1kGZnjWyZUEwruCRhozhBknEzTkkFqNxT6zKNzLkvB7SBXA7WSjtT8YHWHrVjreNeF9AX",
  "key24": "5AKx9YZ7mrtJJ7KLpTZt1e8wkGHd8cNsDwoy8Mao1rseqytqmJhKmnm71QU7WyLf76Z12FrVEHM1kJUeeKopDJbK",
  "key25": "5maBta3tX962xdAXpivpf3wqpy154nPZd9p5gUM1gd9WFMohwNn3goKGEUedjCF6LTd4xicfPqwv6KxzsLUuevoK",
  "key26": "uyhf5CKng48LaSSWjjj9k1uiygUCqVnbJXBFAnhdpGyMxkKmssxqGwmpJKPXNQ4ZKktTqSaKVz36AJK5rftFkFs",
  "key27": "5DvioFxnSAMLfmHdYrXC1qVAobE4YEsA5QA38V1bkAXqibFnaLsFEQGd3aQmgtZg6tM8sHMu8vR24B5qdt11WPu9",
  "key28": "5E9fWo7BdRE2An2DCpnFRbA9AAt1j6RRnsLRDTS8DW3ouoSc6wQrk28ha6op2DEyyK6iKoUsMoHHwfbNKBcs63X",
  "key29": "5QGd4CisM75UA4hTQUVBQbnVhSayBCTidTxADgNzFJLNyh9iZVPTAnoH7yDBnzcPz7mMgD7qsUq4Tw9dg5HctXND",
  "key30": "66en6TTibrs8w9eJJEfncuRgwbKTsbHgfmuMZ7yxqeqs5YRCCCEMMdTt8e1vq2UVrMtRcvir1iPZLWpTQzX1FSLM",
  "key31": "2dn6MwoQveGsszph8YiEfj4KknUG2Adu36VAPvXRabMnHTUR6hq42cQoTw3rYLKZDLDpzC74V98rrwPE9mhxYZz6",
  "key32": "27H3zUsfD8Bfg12UXisdS7sLEMnwq2jH2DZqbzJ7pmdNGP3gbRWgnXsACVh7vv2HJHfSu3tivKzbBHkejxXyZ1jg",
  "key33": "3qbA8cUxsj8RrhTtE9mcAZgrUBc8xjUFkJGtnWM9bSYYfyh2Pt37WFAoUHqnNfBaheZAZ5ErYeZfBoQ6rJr51xdM",
  "key34": "5MGp2YtZwq2ixXcmS7icgKAwtJeuisYMrkrVpLJG4CYCHdGj6omqFm2pjutwqUNy2tfZTme8JvSoicoEsjMXyU3p",
  "key35": "EvvTcWa43hcht5QBaveJnW5yfrmyUyEv3eEM7rrbnSr5J82sH55K4sjxjXfKKJbgpu131H7H47HGHu4GYw1vSuY",
  "key36": "26vHQgksLMYFvejp7xss7d5xj2o5A4XCRdMGqrGuGK2oTexBmqZ2FSS37XW8ucjGEdL9HuS6Xq68Fve2WMN1DB39",
  "key37": "36WvHB8trJCXf9jStMhSec7YbaeHWSWAgnDxdBpnXKvyCt6RsfnAttjVzQhYPZEY9XV3yPDbFcBiQPUYg9DhqWy",
  "key38": "2aNUpM8Wf8GRmPQ1FV15Jk8VkzyyujTdyv1gFRZormL81VoNMNqXKupxZgWdDEhWGBrgU5vMTCUTXxAGiEHhNRcd"
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
