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
    "4HdVwHEzFbWHZrapUPs7YzMYbzUGsonN6xYghAc3tNFoqjbkcFSZd7GcG3Y38R8Cm6ku1DWRWYpTbuj1xUTXASX7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Uxr7fnksEtKf4wfnhBXcx7Gn5gfY3kz2ohz7K9r6yFohCzpXxfBrUbtYVwGynVWBfba53KSDR2iUen3QHVbPgMq",
  "key1": "2dvZ7ZaV1hiAQizwLdxAxSQLF6yMX5aZ6buq8QrWGeH2ePVwAeX1MLuSkfmGC7JcjBFA1f94HQUGsA24ufMTCJ7D",
  "key2": "2mQLWfrh3exPFXt8tuNNQQJhbJjqq3sf6cir5WcuBuhN5JeWbmSirzW9tKSJ2sLByBPfhWgRSQPESQ8TAoJzKiJ1",
  "key3": "2Du3n8jiSy3oSDp1dRuoSCYwBRuJFtXgivzs72CxmQdPU6BRKmUUMnXYZoqLRrJSANBpnBKKW3V4NyxV7z3AW9s5",
  "key4": "5yG9kWho3PrNB3nUHLxwT1BR5kFProJ5CWwgxMJZVzSZ949gTvB1sHy5ygv3G1BLmePxtYubpkNYPuKG11tBzfbt",
  "key5": "BFQJ87jC3GFM58wL7BF5J2qBYuVrqXhpCXFtnUVwx84WvkE2rMHh9pqPPizXAZjKWwP6t6umTqYghJwmfATMbrn",
  "key6": "3ZvGAK46fZ9gNvU15Vae6ewjity6BvS8XMSADFHrNdDqqoULu8oXWFpiCqC6Qa26k3LYD1VeBqbjgXWSmhLuEhDs",
  "key7": "BfpPLoxUcFFBDN5b81rN5bxJnCWjFL2Y5sNSmvniWD14Hz7eJiD1uttS149Y3PGzhJwJCoKZGgp8nqY6Mu8at73",
  "key8": "4Y3jnCKQ6fNJBsqDG8h1ebHT9tZo5Kbt5X2ZsXKs79r7mJFAWjcX6pS2SQuLx1HKucmJ2KS42XzdC7Konqw4kk9e",
  "key9": "3Q9K5rruEuKKC7GzXrU8KerYHrDEWmZLv7Y1PhyHvRBVNue3G6MiJ7u2WEFG7HTt8Lq3cG4uoETbcnrSDVaN1uw7",
  "key10": "3SBSDDRie2evpmfuKQWZJj6zLfQsodfDmwGV8AYfz3HYQi7M4Ybjf3KLoJrZau9pWGQ13HpZzUf44gPHFPoZPcxh",
  "key11": "5USTVCQDmjM6v8TFPEKgLaCdnNvnAy1SPT7LMgEyEf7ymERPXHM1PqjaYXzEX8L3JPzz6Mi2ssjLUGZJgNPn5PRf",
  "key12": "58cCeNoSd6k8w2W5hkAG8shFJJ4K2qXQaDGBWwdZ1Pyt5sYgmbd27iziVQ6nV4fP9bkJ1ZYPg4sN7NQ8V4yzcsU2",
  "key13": "5PP2YMZEbeQfHu6sdfjnmHojhqQ11hzFZMv6HnHdY47VzUiEbDkg3WUvsiS9xJCFgYcD9Av7gyiaVcDpYNEHNEeo",
  "key14": "4UttWg1JccqXuVqxx2sT75JDHuWP8JCzXA38Skg1BgRrrVUJ6AoFZSNqwa6RDTVBCxgsYJRRqwiemRcWVAnQ78N5",
  "key15": "5HoBojtJLkjpQRtgjaP98A6HnuHyoKZQuxFWnRY2BbArvYZARnN6T7WeibEXUrax9p6Kat3KW47nLdEHN9RVUcFZ",
  "key16": "q1brmnsDyjLnwENLKspVVXjPM9RZaz5Q7w7XC81vPvrhnJ3mf1cNtDUUtnD8QhJD6tYYEjRnuzgFNgKb1NXdsr9",
  "key17": "22ejrX63E2o3fjRYCifwZncJHcoAEehEniiMWtLHaQDUdeFD1BEMM2ictjtgrSGdpNGfoma2iEcUjQMqbqqKCKvw",
  "key18": "51w7t4L6bjsyWpQfEXuwGyR2447Y2CwPn4KqMmuxMbixMAxG7RkpvwYNXa5n7Kaknfi3YEYdRhzqorMvWt1w6afb",
  "key19": "3hTyK1NuXYHjYmTNbcEwwvAvX43eXehqUaTPt6i8WbBaxLJPqsxrwZkq1gHyRHgdvRmDpycEczNRYRcEjYC8uYma",
  "key20": "344AfPbgoP31fG7GT1fVx5BJjtY1arhZu5t7qqSK1K4FWdaPYX2EtMep8Qa6QTmuaSb4pdcii43Hu8joThubqYPP",
  "key21": "3ft2qUjFJpdxd5zdpHUJ3LYxiBVopQgFzyAQxrLFpwcYoPgAdFovJiMr3AKx2Y8J6KQyTQN5nqVAkFNJfzX92r4n",
  "key22": "3kMT8w9j2Qsim8xgKwbLDRMdrkoFztA5Aek7AsnnHNeYfbEwLq7aTpFyDPtvmeqETzanYDw6Bs4QTYcK6C43FAxw",
  "key23": "35KnEfhERG52R8vcSJDEZq5r6bCM7HPj1G2Y85sfu8NVRDmrPpiKBfqSyC8aYuUd7vhQTCMZD7WmtThcVeGgv1ck",
  "key24": "bLDXfYfwwHxy1Wa7R7ndnFLmKJ9fXBvzgc5ENwq7ZogLccGdoMgRiMagcjnJqHnStNHQhH6meo6fE4JXkGjLERv",
  "key25": "5ubHjQ8DJM8jQLHQCsWTZDcDwBCNjiuA3foX9gtMLG5ktzLgSmgPqTBpWmGvUS8xRnyifXy9L4nrxvuFmUMXM311",
  "key26": "2uZFxo8p1XzNVPdD9Ext3PB7s55e12bW5J9M2na7uqWUBF3nN4sruDQX7bmUxFEfihUXx6YZUFCCoTkyvsA6ti8z",
  "key27": "3HnV6WcFZQX2y3c5r1n9duM2gMV2boUTC7LaCZGAyzDpB2jzdfMLGbakpYwTVaz6sjFGkAZGtwLvv2sUTYm4kDnn",
  "key28": "5hjn8vjgNrErPmRYXgHiAEfvxu3jb16K25PXPi342iThmQYYeDiQmd1C8ErXYJeGgFTqxjTeU1oWCX78JEs9u5CS",
  "key29": "5GmQEuT6PjgF8C48AEq4mrfMK31GfST76TxuHfMWmG7hQzQLWfd9nezxyTHEh52uJR8dSLKZ47Js53mx9at2U2u7",
  "key30": "3zzBryF9E7UZvwGSPxNAyM2i211FPgwKH4q269pa6a8481BzHgAo4Hgg2u6hZ2QBpvxKStRECS3J7oDrAgz5CFsL",
  "key31": "2BpouJqgQP8xLSCupur21cA1Kt2Tb4r9zDXZSDzPwsfXG1Y8ZfnadGQ5tGcmtD6usNsmzzfPAAkvrAz6JH3rTjUi",
  "key32": "3teRnwzWHFWo6agSXos8A85K8zNhd5L7u3cFb3hFxHMDexfYYdFvfRKtrwTZaWZ8qfZBgcsDW27ozF9jog19Sg1n",
  "key33": "51vgQ4vZFgBig1b8ZNX1LTRiCamQcBqiBvndcXiZyZiY4Ndener8cGJaZg3ShJqD9ic5kytdZFhu7XbmpQnzF8zc",
  "key34": "2BLKEtvPiTZmGWn2SW99nH42FZJL1RSvdEPSt3HMTQF14q8rKP1SGfvxb7DVPUgCzRyUAnTCAWvHEEDoGQLDJxxD",
  "key35": "5Hzro4dJPpnvJfwS1aatsJ9PcW9FxwbjNTws2abLWDyyoym6EpxePfUYBy5MJumEpyL9Xp6P1b1LXt4V88CxYUrZ",
  "key36": "vFxJx8mBq65KRF7WEQikM3MDf4MsEcxmxQitF1mT7jhbdsRFLKi9ZtLzLcCGUZ4UG35GP4ou266xCLKTefdngT8",
  "key37": "3BUPZXTKXBgQ7Ydu3v8MY8krxw9qGmFaAptUBoAbKmcwuNwXXracSqzEJ69RytyfQ8yNDjbVP29p28Umd3t8vLbJ",
  "key38": "22MKBtZekxYSXU5KagELDuAzL9QNMursTzGKYueQA5k19caXUeRWQph5C3WtJPY4ThubX55mkP2AV7DxSoMaot8r",
  "key39": "Mo8LVEKLPYpgFSUytL8vKgpbTni4Ttug79Rb2M7zu9MPBJKN7Uj3y5NSJ1rhC1B78nXELies27uHqTrz4x1hQbp",
  "key40": "4MBypwEJTdYeocYcR3XeeaGtPRrR7Y4Q3W1pYkLmZZA8dothGRRzkvNA8DrcuLfbksyA7XZWFLB6VvnrScfrFVmf"
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
