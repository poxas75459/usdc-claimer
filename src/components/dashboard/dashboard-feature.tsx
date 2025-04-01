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
    "WyxBmQGq3LbYrVVVDkTskXZbqhE6bDBF6BsbCde5xXcu2T2hf8qgpJwJkCT9WQv2xxoq4qWUmCQzECkDjWvTXdR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XMh74VZvouAP6AL4cFT4QycCyB5Ji6cEqqfKftAGeTdXzmf8NyFH2u9UjpgHgrsdhYNwTHRtwYjP94scvPVPhRu",
  "key1": "4YXZCd33bxStCbjZ5B3eZSFS6Q7GaMvYMoV3WRxNmKoZS2gRDsm9jJW4Ra11XSzC69V5uPZGJ86SqAwEvAdqPJ7E",
  "key2": "5p95kttgMVukPhnqVaop74b7jRud7PN9bwQy31KHA1VLtWmbdy8YZNuCju83BEZKsyiZ2iTcxnTsVWuempDta4XY",
  "key3": "64ww6Uz5BZeN3vUZeRWEU5ZpmJLUxU1coRUoqW2VVz3hgg5H5iMdEuFwadb2FXJCyxzAwFkd1EVDV8NqjTMjbvK9",
  "key4": "3J5N7P2od3V9ae5Edz5K7jHDyQFd68g6yzvk3fHP2e3nspHudCy2DQRofrdESb9TUrauKZR5UXsbAT6XhnRSxbQz",
  "key5": "Vkb8LG14vrv3pspK8c2oTuagmr2GZFVsUnKiwpNxBFQoyJDnVDETQ8g2BbrzZNYmMq8hxjMdbWQ4KcjkVKZdgDA",
  "key6": "4PKxnbsNF3voToSwLmZ358rFJ8BbEyXE1JMGrhhay9QYrGh7AytLS2ULgq8KwwHGdSKRsVoSSesfr9x1QD3sRtaj",
  "key7": "63gyYwE53AbhbRfWT2TjaJW3attBFbJpWcMhJzYPMJ8kmQwYU3bUUne5tbZTu4x7PZoxwX8ef1NJBHahQDjB45Pb",
  "key8": "32PnTfzApxDn14EgpDYUjraJ47ffi7E1ZPDiJ88PeyNckY6onFKTxivbKZewPi319NMDbDFu6YxzLj1X8FVDYwVK",
  "key9": "5kse2DZR74EjK8r4jPucS8UKh3yBsY5Qz2S5LBBTrygR7nZ2zLqv1jhbprypptHgzjs4aCgycZwNVRfY4mPtgvor",
  "key10": "P9t5NcTnqrj4iKTLvRTr8oqQXQoxVaCyPH1ws71WdLUP22KzkDWBPyhn7SSWoqmJhCbpowrcbQ68N3tbavEdnRC",
  "key11": "iup8fLsewJdU8i7cBwXhJGyZ4TwULNq6eCi31NP1mNjQzgZkt6HTJTaxexoaPPe8jHbuFo6SQkMmktJi8YMCimF",
  "key12": "4k8i66JjZzTNtMBWXfvN8kxjmQ3sJosJH2pE4C127TTMTi9sUuDkRhvNNUgAJRPhB1D57NZB7etkcQE7vBNmjTn6",
  "key13": "2sKY88uRjXhtYNhcj4mocFCxh7NuVYPFjaQ8rbYMC6rb1QGTQTqPJSa6tuH6Gn4hocrWzCHvba4Ci3NGnZJHKTct",
  "key14": "2Jx5HMKEY4MxG3x3CCEMzaBtrhqSFV8baSHpSEpjb41fgVcupLC9rXfU4Xwcsma6TwSGVTrH3gA9w6xwP2LD7rUX",
  "key15": "3eAbhmcnymX4WrHsmANxLnzQsnCP6vMofxF89Kt2wzgjrdRqoBNVNGQMiybWSRH1pzH1FzRFZ4j16A5iXyRvoThn",
  "key16": "Nq1PEnaXk22CZDPmvEWVafCbNNpQX9yvLkZnQ9AeFGx2Uq8BMfT7SVDwJTz1d3gdGpoXABRoB1TVj5vdJ1a1Ae3",
  "key17": "124kCmp8yqxXfNcT3Uh2afNzDL3JsmCLSYhVheFqLZptdqtunypE9dsGoTEd9P3gqVEA7sdczzDxJYdVArHHSR66",
  "key18": "V2jmdUZz5yfJPHVW8QC7sygaXUA3HVViPqYePeuJQrgpKdabMXk9vjt4Nn3BAvYGVBZJL6uxn7AWCUvL3D8JPWN",
  "key19": "28HtcQYSLyFAcZBm2iPM71jU1ru7DRv7T8PpLbMJT3uc63VDnzN3BEddxfT3p1NZZoiyS3sZQiVRuCLc23Vvy6LU",
  "key20": "5q6Mf1qomjRKQANWK4qmi5uZX2oTrd5ae3dn2v6ah3KTC5QpLW66NtZkqFgQ2ScX9ijHg5udb1zJBA2CdsdZjbQy",
  "key21": "5c8297ahMxs8deFpHLXLiM6KFTzD5Ldm7R3YrViR54Q1yHn5m3Ds8UaYeziDbZpNcj7aeyKxMPpFwMoML9vCuYr6",
  "key22": "4KLt6MNsoNTWHtxApeaGNbVMWEYuQTX1fxamW6Hdc1BA7jWzzGAQGocJQZeYWnrp7wCFAZUFakq23T3KyqaSC16D",
  "key23": "3rCWGY2y4P9Z7xyuTWWAeinVWmKTKJPGmmPSK8bzWuwmLAWjr3RPaWZNpLeGDdNAmRfufgDXhhJjRgdUG2tFAAdt",
  "key24": "fyDD2GKRBK6LZDWbFvGqzWmY6ajo1BDYsQLxDnLQThph75gYNSxjVFSURGB22svyicZFi8iDZHG7YwvGKQBRhvV",
  "key25": "3wyyuTMEeLhcXmd6pauUN72ZT56SSx6Q7K2mnFJJYAc6sonAqqVJtmCyBHFGZ6u1vcPL4tSqS3kuJV8incYNTXRy"
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
