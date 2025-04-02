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
    "rFXLnQvfA7viTYHCHh8S2Wavakp1yYmGmELekLj36P5VQQ7nCUJhqYrXG5GvHuNUMJjLwWbFeqFeL1Hjtj85Loq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Bd3ZtcCA9YHUTpY7JYqH6BXc9CBHs3Wy1WztbHxrjXukQeApJCGLroBHQvk92PBiNW5eqQWs5FmFP7D1cTdDX3v",
  "key1": "VH9g2jvX3gqqnKh8z84RqgzBwDmxsbsBk5cQqGyBrcaag78cttqNa784VywLVXpvqXzFTXrxKPpk5AGDHvKfip2",
  "key2": "2BfBMaeEZf5imE9JbQnRLxjZFS86iPmugdUBxpRWsgm6aQWKtgBXDmBZD7hvk34M7UfMdm5xPuuJt55dvyQ3Jg3k",
  "key3": "2HUhX1DpZrgs6QQKdNbqqGJMv5NVRq8fMh8sHgdf7oVqjAJrKD5XftDe8y5XAaqAVSZvP5B3b5QZRztg2SgDJGJz",
  "key4": "5a7DsppkK3C8YAqoTRW3KJ8w93xQamc861DFan9jc395cA8zYMvdvjPJt2kxN3c1AT9h1Xv7cfFxSDwuiLANALVC",
  "key5": "vdTpfen1AFpJppbW3jqyExy35qqemTMEQW7wryDvhNQEm3tU9nxMyyUYTxhX84xtuwrmsgJP9TjXtMDtTkjuSMA",
  "key6": "TLnWf9vVb93Rjcjadp64ZKDf1bVhRPiy7Zu48r2fzBpWcPzfRaYDSN5hp7Gt1S8a57EBqootbH1oDEtovUWeJqQ",
  "key7": "3tKNTWpeq4G8Zhk3utSVxQkw3hJbgEcZWHgEDT2TqC8XU9n3dhbufURJDv5tC1GYu9hA8ccboFbXMfkChFVmJDbE",
  "key8": "2a3Lb9WZhH5PKsijubjrUC7KQhXAGr1A3hJNYrkg1gBvtZ7pCVMF6JUk4kwEfUtHVZRKGMYGPi9WCFL1nD1RL2Ex",
  "key9": "2SqjyUrWfvKEFvdqGqiFPvyYpQMw1VhkA1BqhsLzEfmnyaHfpRUdWug22aBaFfBDJ5HbdsWQxwXM1LwPTB7dPbLH",
  "key10": "5RMsEGoELGLdH9HfJ6T4yzQdgHnZ5WS2vxQtoKcVokXg48vpducewE43YrvkYXp9Jbg4Xk48YYktrk6fpnfMHJhP",
  "key11": "5gsMoDnpbZ6pKvLkYzRT7DVw83LJCrKZQYQVh4RM46YJbKCSj3ZZZyAtHY5rS8j2T2db62xVguYrU1U6LD8PDL2L",
  "key12": "4rPzYsE4CKRq3EBAdYHSTdX77VwUwzKbyE8rwTqNUNPyp9Ld3a5tuoMtbsyp16AtKgP5wZhk4zM8FvA32DZ74W9v",
  "key13": "GPnF7NdFjnjtNtjZkB5ifjHgKhoJ7CUzDQVKwLxHFBxXMM5QbZzDXtNYkArAr1VAMJFkPV2acRPrrnRfoAtDSSE",
  "key14": "5L9VS29acJuzPcCKtAtkvtu6sWcpzeucGYPf8Snbxuf17opPv5aiFJMeg8nKYzAzPtRFmzteABgvpuuqVZzsQc98",
  "key15": "5rs6FeEkz75ZtguwtC5YDAqAT9zvvji51hWANPdx3X7Hit8yfJcAzfvfhvgL5mkwSLaq1SCU7tcJEKdZQvmJRDoC",
  "key16": "2PBXTghxYuSibuUpbUPLVJyMZEsQ5nty7z68M7hh5gadFqfmx39wrgXvtpcVRWG1HTQ97esBVx9FhjXzoNrVH1Bw",
  "key17": "3ZFzBwezEiejHZvasMarGCUhoM8iEg4GEYkMXQEDHkFyPhbusLXV2onJVh81zjL3oRGcL9QKESUjG3nk2TnasUCR",
  "key18": "36gq53t15HqM3vK7CFeeB3djswU41oSyC2SerEdrnsaYEjyyYgeUop9jeHrN7R3dg1VY4xD1w2qrx4R7TXFFnYfx",
  "key19": "P7ibw47qfWCBdYBTLNpeKQLkfQEBnoL5Vqu44Pas6LvqmSkBjWD23GWPqYNtppx6z1LeBAifVovwcYfLY4Bojo3",
  "key20": "27pXX3PErWvfxGS4kgqc77k5A9i4Bh8XQzdF2KRXtuaxr1uoUG2HkKAK2XSsuJCMwaUTZwHk3d2eFQeCzkFnkDN3",
  "key21": "2SDbJPpTK9gxxwyyo1X19LkGn17WPiDnbaUTKLzBuHqoFCkJabCEjCkidSfRBeMM1J5DEpSi4rPijG25vmmfgCQu",
  "key22": "2b1P3P1VK5PeZGmJ7C89vi5Bd9KpRFMr5TFf3ren1yGG54dgSVWN98uuzpWkp1S7hNkYtiHEx4ZPpFvR46fkPbuS",
  "key23": "5rgs9bzf1c8bzk2pGuGJ3CfnyRP5T4JHaLY6N9fncHeYtufay5p6nd1XFDbYQYzQAgfBotjDc8eAi1A7qXgtUwyF",
  "key24": "63j68Q7fk5wBjDL2Q2FRGhTj5jAcCKrY5VyZC5AgikcgZvkgzu7aMYcYBrAnkzbMwogrCty1YnjkNf2VZRQai4d2",
  "key25": "2b4JKdMgBpDASxUre5QYFVPzxdK4aQ7sRYfnuY6P3pX5h4ZHnR6FWEjdh5WZtRJaseeKFuveZCyebychRgD78V8S",
  "key26": "2qdEKBg8FE42qWPi1rAXqspMm4eJ8Frt12zD9e3duczgXssmCf8wKvKCF4yuhtDyWpJMNJnr2eNQx3o9e3gbVUKU",
  "key27": "2utQBoRa8poZE9XEZZQgqr8P6NaSwtXArAwgCRAZNyaHxumoMTafKdARGECJPvZBPqHNycmXLSzTgEtdsZNMKw88",
  "key28": "2wVqauiZgk93AB5rpjGKWzrVXs897jad9ZFjgrpVopzLNkaiRFJRr59fbvvG9iqSf2yfr4Z3juFZJCh5ko4kYRNd",
  "key29": "4qnBbQrNHay2ibiwsswNw6sAh2V3DH19hvLY9sNzjHoyvJGHx7n9MFeHkhWzu9qbVZQ6b6PemhSNRdaQz3iqttwc"
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
