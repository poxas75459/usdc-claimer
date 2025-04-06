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
    "4HfW1VcEyvPd45BWMtdpwqJ91cGGvGmg3Kkbg1uEmWG3D3CUk3zM8PXMJvtYUJbMHkfuarwhmAcs19fT1VAnVSis"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SV7fQnXV3j19axvD6XqJ23udySeWdY7G4XT2FbKHvdtHw5oB9BRVXZWdehGur19u3mgcDVqsgRe8jANgnB7GKf6",
  "key1": "2FRPRza5aRnRwWjP9A33vmKwbA4L5RrpkX86BYsZdo94GQxAVre5VUadTq3vfmq213FTtDjR9jbHGrBihQLWe7Q4",
  "key2": "jGq1BsyUuP3swA7fECGMmUiJ6Q7yGziFdPNCKAgrB2RppSVj7wJi4A7gvP3HpJtwKpjvx8C4kjvCjfUYJNCVEhE",
  "key3": "5JygPzwyhF2fenmhfTEj9k7T1daQnVo1JhEZ5cYzkkbkAYY6pkAqfkVvjccwmdfeCF3RbcfM3f54MiD1ANKHirAS",
  "key4": "3NfNDfBP8TXzdW53Twf9ocogt3hKPgCVWi7gKHFBBWcJDtjL96dtZ7k84WjMavn5vGy4yFTMncNjU4Wtq6swQyQs",
  "key5": "43eK8Pijg6eYE2VryQeSAMFh8N3ghYTsswwuFziw8yZRhHZLpvt5tYbWLfBfikEHU2btkoEJKmscJw5TVXSigbFK",
  "key6": "3ahDQteovdKMBuHguWKN3GKRXYDZ2NJM6wAuS9pTPJnTUxXj2wdNUqKLH3gab4kqhaNKafCayJiB66Q7WQ9V9XwA",
  "key7": "3bWTru7eDcwa819RpHxqQJKY7R9CpDrjdPPmrEzpBYfXgJF7Tykxo9MJJu2XeoesbQiN33ioEvsFb8MobRJN8fBq",
  "key8": "3pzEqeoPJEqM8vqtTV7pYz4JGazdzNXH3xTQdGMy6NctbdLNTNwVRhTn2vTmNRsQmMSHijcX5aGDZfQUvgv8mxCs",
  "key9": "5bVxjhuNrjmERCJpR4LauN5b6pmhryNJ32jXm98EjGmHQVY7XhaCJfTi87Z97aPB71ydgpzqQPFeaMi5A9CwdRXb",
  "key10": "3bHtRnoBkXJdnEs2mjzgPHTK9BMwRmEVzacRZabdACtFSWXEH8mBGSiw5jYNwWoog2Ye1cc96R3jULq29pi9ETPR",
  "key11": "5a45orbCE9jpFALt1CqQwPxwEgdjdrx5RnGzpYsDd2V828uBpNcoY3kAnCwJvntwcKyNw1sEaMfmq1fUEk1H5mjW",
  "key12": "2bxHnSGoBSMvheWjpBmNFgWgA7fgABHNprZJ7iUciQ6zLTd3QcGKsE4aGwcXe7dGPhsVMC7gJtmBij6ckeuikRXC",
  "key13": "4vUX4FUbe3Wn1ZGNh8VHFpfmjZEKxEe5kYRjWYS4pEEUhgL4grvqwZxZEgd6fxYJMvRY2xcLCtzKDUxifPKjUdZk",
  "key14": "5pA1VP52eF9L9hdHnTBE3SHXS3tHyHfaqj4VDNgyWbJibeWa1Acvg95RaEAWzjzddZrsPcwXGhFaWhWt5XqgmEHV",
  "key15": "52E86jjdWyrhP2L9ipCdAkJRbcriAGxa157Hv7GoEKSMFrXPWytzf8qec7EexG5XkuLhVvKrwRgQcMoHkyM6qz8g",
  "key16": "5eUYeXFqmziXhvMfY4EmEAFZwkJ7hSpM9jsajoRtvi85ePMQt13HsfDsKsiQVV2jsSQ2qWYxVfBnNqBKxeJ4Vj5H",
  "key17": "M6AuYDbwc6KNeqaSQEG7ev7M4p2voTUuTCQgj4THyWm44snEpjG3PUjUiGJeZodazqDELxNCxZKGTsWraFnVQrK",
  "key18": "4Emv3rpwEcRTLSrTV6pHYhE67mktSCuJCTDuq3ysAd2pQsh6P7QMdDPVjtQPA7ZNyzSk77B8fE7NhwM71rnLEv6N",
  "key19": "3DSuznjz4NiVHkNAbbJuGgTtQR6kksUV1JgRMFqLBURS4ZtHDpbxG2HLS1vN9PH15rCRNZgZ8XfshhCkJLohWYUd",
  "key20": "5zb8m8FUFigoFMrA52C51aVvjWqtnQoMswPiLjgNbMGqwV8VgKe3NM9sEvNW7mPD8QpdxaUHq71m5Y5J4epQhMw7",
  "key21": "3kYcddXKPkJH1SfLExHzZBryAVWixdYf4J9o5r1WHTMKHmi5vDZ6i2YRthhTxZz6QMKhEMctst7ZMqphSV5A8Kgt",
  "key22": "3TjvWhPKXxeVwncLNAua9NN8FVhf5zdyi1evX4CmApvMcfK8B1NXU9CgXUdpNRaPnnchSTpkx43k5re15NmJpDf5",
  "key23": "5ZjsYfjHyAdy98wEkNb9dw8g1XBbn8vUPwT1pXiXJcdwAmougqkadsg7csWfTT7q8to5KxAJJbsbHTm5BpEfXPy1",
  "key24": "4Z2pQCmATHDrHxbbv2AmwLZJUG2zAMq2wuuLYDiH2JFz4K55rDeNemdJs34h3s1ceM52aBvTxYFUkyqaEptFSomQ",
  "key25": "4BoTcwM9RHghKum5H8fwvXPkdLKwmrjmYfPz6XrX4yMeuCwGUqXYkbKptCN9ngd46Jt96KKCrjfS4N2vHVwePWAX",
  "key26": "2HeVK5rzS5i76friQNGu7HnFCoqUPaKZy2hn2wdtbV8hYDpdzTbGqNpuT3b7DzAF5VGDbstFCyVPBFKoHtjteH7T",
  "key27": "3wzufCQmAD7JKE49ofBDqxSPwCj1oyyWtG59dxrr34pTEuwBdmtruzEqY1D53vzLiVKBu44Q588KfLN9neQmdjEK",
  "key28": "3Han8AVah3hCoQDDPqJxpsCZMHurPMkxd9dK8QTVXyzTUWDPSLDZaLp3ikjbzVsV2F2bL6oNDJSRCqnNcVeGKqSf",
  "key29": "4d9zPGGepDxZJtTYTw8kr9T6t6NfzFn7HD74zpcBWsZbBh5sZdBzHMfdxVY4bqVyDbKToGu9iyzSEbUsstBCd74e",
  "key30": "34pw1tFjs1gjJFZg33EEgqvvDH9DwGvSn7asrrJ9dWffWszbat1TvQBRGoFjbm1edapdwywb7ZRQw3u2tJtMYDpT",
  "key31": "5YHhNszQJzHDC96tgUHci91Qrj2xAPdcS3P2WQUUCSN9QTwHLbNFAgBhHHecaHVtK5Ykeqk3og1wu1zTjdCghTEZ",
  "key32": "azp1X3LGzn4btkB3zk2oMkc5NBp9kq2KnATZmcLU4aXgdR6ScdSqai8rCkBTzvjHwWwRgQcG3FcCE31EQAzw1J2",
  "key33": "3vTs1hHtQa6KiYEincHyr5CRvqWV9DijPEP6vuaD7wUPHW74SWNtSAQELwHGuNvaG7D7Dtmv6akeSth238tK4Lag",
  "key34": "5yPFAoisK6RmNvwVwJscdtPNHQBsuWdAHRTGgs6wqqPRVRToJSdRAHYmzY8v1cK7DmhNvmLVvKQ2AjLuRTAGWGHN",
  "key35": "478rDMSfhCFNxArCgd4zUmuzdjoP7hAAy869kQwCXE2aBAMbXjYZqoDmtoKtUgGE73zAso4aE1oPPEhaNxsQNN7i"
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
