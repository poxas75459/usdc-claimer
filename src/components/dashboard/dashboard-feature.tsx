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
    "36u7NRENEVT4swatNjKQUPYfHLCrhmFGqzHVZuceThHvzhM5uqVdZcnfvzj7imuq4EaGfX8CHhD2WfUGCjDmPbZL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WCfuweyQAZejWFCKeJPf6LY9bSkTooNbeAmXdZBf3czP14VJJueMEMzuVyjJi4HtK7c4mQoLh8Yj7fS29jTfkof",
  "key1": "2mLwj6kz2yKBNeVxZcSAVgqSWCm9ySouVi6BkgeupoGNxBjoVCAHyQNdvzPTfp6c7e3TMRdbgNCxhCXqaZRa9Kq",
  "key2": "3mDwLWCQbG8a1X9JbKHQUyGXkBsBYTCpupbYtYtjk4bL5G4o2VjmUuUuuy8Tr57HmTty9fVBuznBwPCW6rVUyFU3",
  "key3": "A9ErcfGaUXcBEmcx7WzomJaSkCbp8LqNR21LaAFtcyC21VVqSchV2VVtr2jrUMCrsDZYQjp15EgdPHgWY8ZWFnq",
  "key4": "62jR78HXgJrkVdKRoDPNVFa5RcS8hcVHCMvSLx9rmd7KiR94MWLcgsCbS16z9UUaF5LUQLUVWpweFpechXmfgWa6",
  "key5": "3j9wTTggRU8FbUnoHQgE8LEzDRvEj8bhfjBbFMbpZi4fMxZ7hP3RLuCwfRu1FJW3WCGZ6yRaTTptpGd8dCsJ8Uk5",
  "key6": "3Bu2Q2FK8B2JdESNVbVqr1VjimTWY1xdwKDhLQum2bcK4beAiAo9fJvEC46DQ1Qj6GCqFEC8CENtoYj5JauKWqtj",
  "key7": "j8z3prHi5BSKVYPvZtWEnyneP6MT9S3pe9myW9y5Bqsr58waW7VD2S8jvebQ7iWVWaZKDZB2dU1x8xm1eg94Ua6",
  "key8": "2P6hhdfNCQWTnsozVsQkxr1tyaiWfnT8uq8cPqQc41YbFA2v71VqEAwTvZJ77z8LqsFn5VZMFzJDXEKPbpwogcWQ",
  "key9": "2kUketuxA2uj2QCMD53CeRvHRMzZLSRkmvWS4dfwry7ethA2pK2HmrbzpziGf22SiRf4jjum9yrEkCySEngzsvBj",
  "key10": "4JVUNzwZdnM7PbFFpfqVXufxXsesoxsjZcEPzxuAZDwHJ2GayzF72JobusZfHVW1muJFEQZ4XhooukyVr38UXN3G",
  "key11": "2T1aRMftUFawyyoBeXDoMjgjvBYDDVxkzyFhEjojxDFzuhV5XLp3jSr2fXQ4CdQzjVGHGVshha3BnpoeZQD5YCiT",
  "key12": "4zS7hT9aWcSMP32dZvMvEXjXjbvmNwQnMzxchF7sJJ2hACUHDWRukiGt3KvqtrBVqjbd67defgwhkJG4owtZvgFc",
  "key13": "2TUzB5sDxd9NU8xDTficTa9Zt73zSZZ9iz4xAymaHZXxAQByNTrjE3JuVMAtyeYiWEURTWTZ1nAzWKv1ddiVV8vs",
  "key14": "2Zc8kwivgBFJSnfdgN8pvvpdeHke4n1jvT3P14bcYT73nhgdf3rC1qK6Q1dzQGMybi3XaA3dnEwhx6houPyrvGpQ",
  "key15": "2ndP1mxzfCD9xJ7KCNM13XVuDpFGx4jKtxb53FSX8xbGEaCqDCK1Qx8PyCyKMKYkNrCfvL9A65e8bjznMVnPocCs",
  "key16": "4CE2oc9k2Jn8JEKgBLtg46AyXNduEj1KaqAFucpF5A4mbTPd5g9DJfPxJ38u6yz3F1nGBQgo4wG2dG7zVF4TrLxt",
  "key17": "4aBS5mgU3nSuvsBmcgCtkfLmCznMneSZ7Ekq5zKMJRQpqKw4ypMpss5PXGn71WgTz4rRSfyrqkpTX9E5m2WoKFjU",
  "key18": "3znJK3hstKYBn5vBCPnuQPTBU8nBtVb8iC2B43nERoeU637k4ULnAGucgV5YgUQ5DCWLZLwagRbjVqC8R56gQeW3",
  "key19": "4Qmjkfk135RwhK9U9d65mt6X3E3okayc6m1uJqT45Boji1WfwysGWkhWHvVWrZmCcVrVcodRcHBFzwia9SRT4vQ",
  "key20": "3P75uk4Sz7nvxnPJmPcPQ9tmHLrYhZ872YPZMt1kyZ3CjySjM8NegDvgWufQ8vtJ2jkWc2aPXj9zvrtjiiiu68gf",
  "key21": "29bwdbT9hTVtpEiCfpyt8XoTH5FxNnkMGiugLmhaKWoCSbQczoheC6KKD3GXHNf2byP5RRxpJJoJitu7V6h8jL3C",
  "key22": "4f8ueTX6ZDE18exFHvPCkA6UGRdAmyhJkdBBCfG9DDjQRsjJJBBbMiG9kXNugFZrkBn5N8JLRavXVde3xcdYPRAb",
  "key23": "5SnumZujatQZa9GSp6ZqWREVgRLYqHoVQd5CYKa43Y8J6RbsVqL4KRRm4GKScFVhuRQxiZEDUjNgUxM6ahEZskZu",
  "key24": "59Xb9mdxuusKchEHvTb5chJ9LeB8Vn9XB9NqqVDBMtLquaVmcRxTeN9riUyD5KHwretvuCp73rHAEYhahBq5ajzN",
  "key25": "5qkTMSYtNy49zJxfMEg9vE9Z1n6ZCBkb4Zgr395fcawzqcbJ8Z4eq1Z3BQ7ZTjnsVG2Zpy4NxKknhK1jYptmmr5b",
  "key26": "AXLCkgpqxKJhvKe5baBapH1yt6CVTyEfuxKH15Pq3My9wBeuZH3GEGnnwHy7GHPVre9hUkjveU4bWb5iXCE3sy6",
  "key27": "5jL818qvYaHSNpcmA9ebpTZpq22fhSCQatYSryvMXANz7AEwAqyPXBBTwK7vwuGL6tC7AzXKkA9Nebnhb5aMuZGs",
  "key28": "3oKy5EurmZGDkaF21yE2wZBJbRKfuPpmmSrZSYyCP8BAJsME5a5UcGoF5Bri6zDyuhCkDZHM1qq479w624qXKsm5",
  "key29": "2nJNtsi8T3wHcnrbRBZ3SdTiz4RniUcG9uFUm9rjau2KCVDBxPuRvbZ35oMxyuUAGjkmHPDB1MayGegFyhf8Qi9J",
  "key30": "25g6WGcatpwB5tuRcQe77wirZqoMgowkyCzc7sHeskkfjNTzcSwjy3PsmCQ4PGvyDntWUjEoSAwuHfDtyCTSg4pX"
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
