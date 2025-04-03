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
    "3YaxkyKGQhNjxWc7LCmRhTMkzvi2Dsoay2dumx54pKcm9MQGRP9VW2exZooV4PmZsY5VbzDehZFZADzH61UtjL9Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3akRPXSv7MNGKcS5KJ4mQ3jdEwPKWDoppwPDGDKTeG88hY5J3uGRkPK7FJYDXsj5nRhCdsL68H18DcqJ5jU1VHNL",
  "key1": "4kT2hkpxLD5K3z1hoq5TzzDayZhNTSn1xSat8PR7T8RLv2F3GKi1VJrm38rNuUBpqKyca4oNxz8ZqhB1fmS5Aonh",
  "key2": "56Aqw79zAFkK18WktKA8k7WZrogyTbiGGPLhvEGqLntgjjnCTqGtgb9yJLn5M9YkeCcVkNiz61NYEwT3DfeJhfMU",
  "key3": "CDvJH7tyiic7y8LV4BYShn8PbTRGiEGCUzY2AWiKPaCHFFjo44hijQ9nsM2V7cRhxUKzTxG7Xs3BZtoFXqvP2rV",
  "key4": "5TLnK2X8bFLkBV3ApGN3j1ZQeXvEmKmwUhG7yqbo2MEiQSW8vmbaziecync8L5onoLSXUx8WEkJv4uPPVyhY7jfa",
  "key5": "tZYP5UuH7bDgxVU2mH6HoUmLGLL2A46R8UcJac94P3h5MJy7ejBhxLqK7gMR7ZQePkqpRvaoqV3dC7ifpa7AAzj",
  "key6": "2KepeyREjsBeM7xo6fvisvXWf23L7R7qvSuWehgx4jYtsCeC9bewyx4Qp7HSwBtwAfay58P7614SqjsYRNhfX3yC",
  "key7": "3XMXV19ZRxh2CPNgyQ4ULEZnLPRwh3VzUYJcPGtM5GxbQedcDwjTXzsvZyzCnXjpWVw6i2JLtdaqQqy1Yy8mX5bf",
  "key8": "NJZxB1SUqYJGD6CTuuSrDKaTKC8y8dwrAR6mGGiPKspgBQFuEG1ZCfQWBy8yMQAG2xrEQCJzEYCJm4im5PvLtKa",
  "key9": "4Ctg1EgQnkTKqXHeT32w5oJFccDsVw4Wrk1j7eBaeQUSxCavqW1u1sKLrqHsj92ysEDyNxU55ut35ZbYm7i1k5Yo",
  "key10": "2p4udE8cBX4p8H8oji88PpYFKD6FWiQTMYmmqWnwxoVufKBMw5wP7oQXUbevLXsVrSxrCUBv6pSPQ85kpjoS9YkK",
  "key11": "4Di1oDRgVGD89WuCtgTRgRJDS7K6ee768eAm2UMH7x8vggwSU9QWgodhmtra4BfoXkqSTaP3rytAN6Yvn8yrGd9q",
  "key12": "43Ak7AwZanMCHZwfztjjXkTTFGeKHZCkeS44vLrDCqa58MQmZqSE1RPmsay63TbDNr1U8mNbvRapRYrHFzM7n56S",
  "key13": "294ezXJJr7HcLmt1qXha3nHUDoSySxePcH9xR1kCN1JqX6JfxK6igKUsjXAWMkx2a3hntTWsgZMkBLvyRCfdHYjY",
  "key14": "5v9CWx5CvdadcoMpdtKH6QnMvG9Jb7eDEgDFqaYyiZLtYeKGfeAmTUZr7oTHSTNtGQTNUfA13cSRsvdsPfYgjEWB",
  "key15": "3UfHjZEKzdvbp7xQK8MoMU6pH58aBbEGh1Cq8TXtUB3Q1TzQFWWRiiCbkFNJ2t92bC8megcwmDZztyP78Zg4XTHG",
  "key16": "4m1zRumpzLKDBLK9KioXo4E8fq6DzcvdrWjuP7WFZdusJEC47yS18U4DSrPq3ZhXV3bM5ApFk8MVLFQgCpW99i1J",
  "key17": "FSxWEp5sjACHR1yDGRcRVUtYpzbtpTpwWaQQZrBpq8wDAS27TbdJcFiL9HhwdSETdAR2U4gX9YU5MFQ9b8duca2",
  "key18": "67S5Ht2k4iPvtecjcsa2AVRkknTqcpuxYfPRhTsVhoXTz1rVeMxhccJvvQug514j1a6u9AdhSTTpTJ1diFWt1Kpm",
  "key19": "4WcMQGwLz7BnfXvTqHFFVszdVg3u4CoQkMghhedBfuxvWU7jpKcjVdV2WYjM1AAWWAm1QVepg2mCEds6nEmPK8XZ",
  "key20": "3YrUskdJHGqxjKN9gAUvqwtQeqD34rvrMWJfJrDEKoMNkQW6zzy1P5eQBwqnV5dxzrW75Kv8MFf6MsoYaSCX6oW7",
  "key21": "5na8w8rCVpZ6gBv8La7G1LFciVm8ZBYJgbpFPb6aPT672DTDEHqKRuo11kCh1bTYdN94SPRH96xCKXLi2LX2Jwah",
  "key22": "4QnuNEss4ayMTWNQCceWwUAWKJfbi78G7dzNdxk2bwHF6rtJY1v6o5aKs2pAumRAmcpZt9SLKiziV3zDgbQ3z1tw",
  "key23": "3QXDwFZjRL3VdbgaZzHHbv7r8CZao4vSwQEouA6dgg5o5HpJX2FbQxc5ZQtYMUJGZAvQLhZwoW8UReptK93Es4re",
  "key24": "4mVmWFq3n6hPpozQit4xhSWuUDBqKiQc1qGn36kokXWoW4LBUmdmsrnZv7z5bX6UMbcYACYecQC3TkAVaPifCWX8",
  "key25": "3BQ93cWXDk3imNfVK2BrRsKXBXCcmB93gQ5HgG5dpiSMZSoY9HSeUbSegsGYyzDYHcvfRK2KissNXPJ7ZaeNqSr7",
  "key26": "TBEikwQxjeQb447n9sGidRBsyGUfotVBdaLuKyFuWJscHaPMdeeuavsgRHsZWLJvymzGDcYEAH2AZjJ8BYCQPha",
  "key27": "5Ujx1u97okfRx8feNVjdqfihNM95f89TRHEpMpfHAhL5Kpg7xFQdXChG2CTQJPdfuPKeMtkVmyuhFCYaMcct5Ehx",
  "key28": "2ZRjWLVV5zb7kC5v9fBUD8YM2Dq1KBpmJjRf9vh39etFRa2nRS4N2MWQztENTffW1AwtCDQGXXNds1UdQ56RL7FZ"
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
