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
    "4GhrAK6vzH82yYitgrggqNzaDB1jtuuKbzLfjChrqKkCJu2H8SLDrX5D6JqirUvnonCdeoFS4a9JuTyaW2qb48H1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b66kNV9gwuUCCBegRJ1poeNqZxiS9Hd8FGXsj13VpQvEwHEqf5yHGNtyjrczaTGMVVEAMBeg2itFrTUSmewhaC5",
  "key1": "XHMF8wv4SMroRP7phG5mUhFeeTXE3Uwp3ymWhSxMdF4eJmaB2jfHjbB5EgrU8wQAyVdkPHUkAuvvbj229SgfhZH",
  "key2": "2qyAzpKZR8GEEm9Xr2nE3m4BRtyY3YPCsWue9VQmJ7LhZNEWjPkATx7mfL4bDW9SXDKi3g9gitB6DsrD2wg1ouPR",
  "key3": "HAJvidQULc1S7GJmJzzqWaY4ESYgmto3CtRQgMh2ZC3GW2Tio6PvaPn2FeHUSrLcfcDWd4dV85Eaz4cN4Ao5ubS",
  "key4": "5uoebASZ5qiQ5JjGE8SH74r3327BmxmGVCSpVSNVWqHTDEHGq926nkb3CyNHK2APsriBCMMchwLs2GfHEnZgvsh6",
  "key5": "2YT7NGGMVEuJQoJYpZuNkSjvpuiHifU5uhRoCAKQk1TDhZDykrzayUTR76KDBFU84i2Jrhy9ZDyARf6fc2ASD2sr",
  "key6": "3Aku3jDH9hfxHWjg5J841jsSf4yEQ3pAXQcDjZM4bBiu7Dd8BMGfhxhPs2eLjgT1F8mzeKbtVyzuuxrCufDQs58k",
  "key7": "5xRs5eTF1Hdi6d5zoY7XA3FVBELz3Qs6AV1v2um6AQWwAAKv18bbM9miPBwPTpfNmrNCfWXrt7pJhrJy6ssC6mFH",
  "key8": "2o4LSSbYwqfsdzx3vqJPqRJwHWcG3FXSwXBAsgfafmT8a93CvxBCEz7QekaSuPBCf6FFjcAeohVS2CCgrYKYdMHG",
  "key9": "5vw8V86D2ao94wHJztCj961zVJ7HYtB87UtjyfVdySjtS2AUmiDD6jHULF3N7jcxxNMCrYSewKmMkeH3RHSiZp7P",
  "key10": "FG7kWohhBLisXxNGho1r1pENaz2TWDiFMWBBuUoqCkXqQVDVyHQQroY4v9piKKcbs4htjPLgouS2hgvrdgmRHQv",
  "key11": "4y3NMdbN3n6HRkzAjEn4WGjvzPqfywm7sx8xfibk8BZpL6e5boeu4Jwwy29VCrYAx3uodgTRugd9YKrxYXez8wfE",
  "key12": "4xEv23YpYRSkYMCYEH6cJEKEdSHPcayD3ZQy6ktnvaww4ncDitxahQB61Zgn6zPnyNwrYKAqFxBjJHiLwe4o7NnA",
  "key13": "2u5P3DedWNc8n9mZgxQ6WgkSBqD2MqAmpwwLhY66EmHg4sPWkyfZnktLGZ4Wwdf67F3HremXLbwLFLDmoqAmFRk7",
  "key14": "4mBBiGBP7gKbVbqTHURW5AcCGjTSmqczUT4zeVaJ37RkRGoH8FwhqV24Gs942QrsBMTQCtfSmdLT2tiGRW2117Ky",
  "key15": "2KA4uyiU3U71rFT3K6ybSdSuV5EG9VGrdb7U14gHMHbbsnbKMnrRLHsPLT86cxk6e4TU4U7jKbGkMHUJtNULd9cL",
  "key16": "DbM926CGA96w4oUZWC25Z41cbVMMdYgC1CxDm4Vpd8QjFRUBGArvXjtipQjBkxHfvk4uvpfcqMKNVoK44pWmAuA",
  "key17": "2bqeHgtzqfVwcYuPtMxpxn89SLPKwvqdB5vJoroGHJ4Qsni4GnHNnnL3Z6h8owZXy7cdJ6NcW7vZQBFAmjmogBNb",
  "key18": "122JwFXi9jgYEqXGamzJwJz4ZYj4bcHHHTrGaNfjia9PXZPYfxuZUQVMwZwzkMaxkakRWaCWZ2prroaxAdGmwhS5",
  "key19": "4qfamWueRQTfgTRKWeVqtv1WJVCqszDw6MY8LyYX857DNf8CQ1FveARMjionGEHL49divpXT7uNSQEmnsyLhvc2a",
  "key20": "3XmiSTVPSdBy4z9qx12867m7GN86DeQufiC5EvfRXTrrut3tJS7iJUoxDWgVJgRnu6C4JySDhbyBiu45PYWFCEcH",
  "key21": "4GHihTdGc1LMBBEzXqnVV8asF2kAoTwg1Ey6d4dypMXnyWeuMFdbwv1YNz8w5Dj5TvN2MtdM5No6dJWCXY3ZPaXN",
  "key22": "2NWobcT6g3u3A3WBaruNao6fUsBGHroY8dZs3eVDXCWbvcu3C545CAyCA33tjNsLpYApFAF7vZmZEL8RkVTqxAdh",
  "key23": "31jYTmjcS97WmKpeS9Z4W8RxxbGMtcu6NySP52RytYHJAr2n761B59ssJeLfp5fRd6S7FoUwuEjNCZNERJunvdVp",
  "key24": "32GfFegZc3SHNiYmvaSi5dMP1bGKBoA3tqCGZcDHzFDWXphbDmnpuJD4UrZyPVUCTTXYUKffCEUdivt77QP7WTDj",
  "key25": "82z8fbBoDCKTpirUkgUpTtTTyCD6cNgadtdgukUDoicTCCsubKTUMUcqUJF3zZ7pDUMdiy9C5gXhwfWQujy1psG",
  "key26": "oAkZBNeYpX7botG2AN84pZ8aaaxUfDrzTmTcYQd3FWUyhwMm2icVtT9m93kisV7AmdHgUXJdjVMubrX6Sfw1ZXf",
  "key27": "PAdobS9vPauaTw8SmRsS1gyCxpCmwi6B1ELAne1h4xGFEurBSUiFziV8skNya2pv7eUJuzMo7SMHoSDtBWSMAc6",
  "key28": "3YrZZhX4z6jbTiziy3sSy3L3UaToMRQNVq6P9h5UB2wr5z4wH8kLL3RRE51FM7b68dBVYoDhnwphmnhXgV3HcQJ9",
  "key29": "3SHp7qjs9UQDajomH5RMyAV4Qnat8cu65GwVynirkqEZ543UjdiwotPEqeff5Tr6PBEFzD6FmSpPAyZ61NfvtrFa"
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
