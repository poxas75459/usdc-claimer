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
    "5JnpmTzKqhrj2tFf6Qu3EpDvxNVdDTAwH6qkhE5mSB7PtkRWAqs3p5zYEhQC6E46n4YXd7E7aQPRbGFC3Ph83cGB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Hh9ZEYvk131sFBHnZGYWsADYMG3Fu5xdUaVZUimwEvjjuQzCrwKqX1bTMSbM42Tc3msBmCcpNwNxU6wNrwG9NyX",
  "key1": "3ca4XCrE4S63C6eAUW6gWWFoigptBZwtRvbrqGKLwaFgZbZ8smHo6khJqtGx25QkDJZSXBcMvyKv2c4vQR1SYqcw",
  "key2": "31KV6s9eUbdK4KDwHzr3Wtvb9eUD8kTbVP2omcQqhHtiBwZrt2tENjh3r8JzyskodjR2ig8CY6sJiW3JZJ5wbCTL",
  "key3": "4ACWX3zuXNETCjobWNR7NBjJgbjkHH9xVhsnUoEjKqojKHLPMET3n4Z5YJfrjakjfZjkM6v81KmKPffzJrABZyta",
  "key4": "5G7b1zi26ti5s8BAgbWtErepjg6qPhA1fbKoZnEfN79BvofjCXq8yaByWMguYCF6cBfqUXHLE4YQ7pU9neYoz3vs",
  "key5": "Yd5oyCaJu9Bahuwm1oJTMdf8SRr9XV9ZrneZG9wD6i974u5qDN21MRSQ6XDGsPRVxfRFViWdCNAbjpSvUaG77j5",
  "key6": "2SLJrDCTc1NVw5v6Pp5ih1H2kr5qzaNa6KanE41BkW3Hb2LcUqXf2tz2xkfKAaVL874VdA2ugJygVY1tZvD2SfnC",
  "key7": "4aGZtdYaaPuroBSpTAhieYvt3Saxz8NGVTdFhPwmKAH3CUHhi5QeQMdcjJ7tcas5noDs41TzP4EE3snxKYJdYKBs",
  "key8": "5gVizG4yRn839Wte5NbusckJsQPMrN2gtroZDes8vG1cxSpmFp7du4XHQQiFgmGBerLHc7qJ6LmFzHRFQ8zEZYGF",
  "key9": "5239be2s7CGspsRKGcKCYsf56GDRwuW5x1VuCcNVjEtk5msGboctQXrm6wLtaxSyP9jpaJGJDDTmRgUi8trHphWL",
  "key10": "d8P5U62tpepZRJsn1m3V5FomR8yBfQbawJW4FLzSHUDdbkrzKGPeBzRm8rdrLCVSnB5otxTicMyzqpYwDEYvBZA",
  "key11": "33XvTkQdE2x8h8miyBGNsyVq5xHfy9WJLYAUKXbEq5Gjsq1iRHunRRmXTSWwV4VakNPWsupZ2HCsrUqCYe4vTKoF",
  "key12": "3fY8Rn8wk55HY317CjqYyuwGCeDtZcC5TJRqnFgUokiuGcyVBbYUkKZ9LF6sPm1gLukqA8G9RExANEZ8aDTVVUUs",
  "key13": "DiTtGAk5Se5kmsZYV4XQTPWLJ25zXTATCEq6cyz2vFnMFTYpSPRfzQRXg4z3maTL9iTC54zCa3nAxFzKaaBdLxF",
  "key14": "d8HsCDPF4tSJZUu7621XLVhbPLvUH2wbh8VDnpkBqwsdXjt8ycCc6Nqq6Va7jFHdgs2bEVEeUNGbFf42P8ynTeY",
  "key15": "2FGv2AWWYtkrMeJ3WfaXUQvKjNcpWB4X5W6E9q4CsVhAniXUnqsA2KwYeFcrgjgAPmM2qKfx6ZECkSXP95T6xu3x",
  "key16": "iKW67edBzvMPz2irhynYcdaKRRTdsUPP6kN46bZq9f4pB8Gz6ZRhRyezNJLKFKtbgXDZetho5DZga8kYuRo9yJX",
  "key17": "2gQKLzh8RdCCKRWXawy7F4ur1DA5gDYCf39YUNwngBaNoDUWtdkwBFiSpvCfcRd2KDF62bNAeCSmQGVEGZVMLSzr",
  "key18": "32LcAwWuo8PQa3ExoBxshvKJ52g6UDtpv5gyFY1BD1RK8s2BHpzeRDwfiUjRNrqcB4QJbJVihVWQZ38Z3b3159FM",
  "key19": "4rFzCxoU6rt7j5JxCWQHXU1AzbzbYo8rZ5yMrQk8r7Ubq2t3d25qGge1HUHqye9x1GekTHioY9orXq9WhY2G29op",
  "key20": "3BzXhCCveDT6BRVydgAXW1eu8X8PgLetPNj1m3nNPg6mcQ1LeK8y7QaUKguHYeGWtT4Loc7nJZbeLMvRbeFLZf4h",
  "key21": "gA2ufadsLiyb3xWmizxqCx3UV3kXjpyFS7bkVp4NEDQF6e8UThxKnBU9VJbdoe9eyYz86Ye78jfdkrJ2KVgYKXH",
  "key22": "q4EoRUAVYf5wYRStQzqWKM7mKT648gkSpG21ZYUxFDt6dcypByNBh1teY9Vm2uZwa3ednfXcZsfMohboAQgTLh7",
  "key23": "xhUXL3dggb8irGsZNo3CeYJujuRYK6iJSmiW9qyYM1yEbshwhYDwvZ2UnSs11rQXkVtvfovWUD9J8NwX9biYhri",
  "key24": "3KKoaVBZRp3yL3ienTFZEnQmyi2N4LyS8VW5qc2sXPpuR4LrHbzupeCSiyY3efQeXq17vpahqXCtbe8vrpeMya12",
  "key25": "3YoYHHyCLU34RC6wxbDhtM2tXoZDrXppERsxTp6WrbWGQhFWx4gmfCkTrsCKYLLVKMeb5zfJcwb5w6r6QkGdS8kt",
  "key26": "3kMja7xm6WSxyr42AiQHNTG4Y63VmP3LG1dAQ2Kwx4n6LJaZ4gAJintQeZf4TsjawFrAVhQXxUT7KwRaDLdqkGqQ",
  "key27": "2qVpgRAbhnuEkXV9E3ZCu8eUeg5327uZMpsfiZ71y1DcJ4s8UopiaNSec6xqPS4oRsXuvKi5Jx4RcwEDGTVEphvU",
  "key28": "3UYk6WK8EU2s5g4i9HkiWxbccKJTanxtVHm9WKSLoeuji46kiFzUFGSwUyLReHkRh5mXwYsKriNou3PJa3pfzaPe",
  "key29": "2zPbXUZwn8PMgtSssVUicTjo9G4HBpzgdrsQeppaGkiquyLVjYcPTpQj4u7QDJ64L4uzmWRYDw8onrph5qebGTdb",
  "key30": "3CkxW9Vkr5xMmV5U8dVZEeUpTPJ8dQpLrLuw5QbV9T34HqPWfDSmAbakMzKGs2qn6S7B4EFtpo1q5YXtBtKbwBux",
  "key31": "A5VCPukxxaArtfKBbz5AumuQAr9s97pwFdpvWBZk1pZwrkVdDynLv3mm8DqTTTk856FHZt4b3pr9sGpgahdLpg7",
  "key32": "2hnp8SFGQHM5B6LMCRK3YRn9pSuap6GuGcPxEKAcSnyKVnta5A1PtKNdxEJ8aUSZmpmYVFAwfyoiPuosPLfoKaeX",
  "key33": "6ivV86N8CKicbJahMoKS9bXAD3mBcSkpDfEqdsaWtGj4qDfunvZJDsZTVCUeh16f339dcCteV9T5y2LreQEuNH8",
  "key34": "5acZwM7uxgyfCooremvB71aibW39i9QrcyJ6NxpFw8boYV8zPW2pWqVLWBFo74ssKoYTq4Rg4F8ujo7tevXSuExV"
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
