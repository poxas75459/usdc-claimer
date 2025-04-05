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
    "5VtBNftDgGudwMRbf4XfGh1gkBGkAwULJLbrhWpdqbQB26bpJXTAGrhrGRZNeUNfDwUp8gQHahppCSPWZJcLLoVn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jHJALqbmyXKKGe1gWJVWKekTMbGHqx5P5f9FDLihyR7s2BoN6BUc2dbd7mqvWabt4aLXZEtU1EUiqSdva4k6HSe",
  "key1": "3X5LfiqhmN3H6uZFnZCpQoRg4hAgQ7ZhA6ZRi6XdZxyaTy3rHaM5fj2zSFGHKMEw2gC5rw3uwumGUnge5xpCC4o2",
  "key2": "4KTnA7F7DUYVXDcSYoUyEE3SYxo1kuUqBvsshewFVojcMWkBTMuRcPjCBhkGXCbmoRKE3MogPaCyePJrG2tGLSi7",
  "key3": "2qykMe5poRouS7vKmtMNSFdhbHr3EtHk3NaMeLQ4RJu8fhXgEKsXAsNg4Ai5ponALHWW8Dpq4tYQLDvHbUrt9p52",
  "key4": "58gqKge1DL7pPs6ZAHf7ozk6ARyputYWSnwJxfGCwEMZ4aPPn11MdPFeC6GVNWyYBi6rMJK7XMNnYw3iw8VWTSne",
  "key5": "4Lc715E5nNpoEDmRBzt4xEuu3sSseAWiTneVBFJY7K14Ye5VdTbTBdU3PdXhnREj6WCyME6PdFLM9TJNWgHLNhUj",
  "key6": "4iTW8Zjf8hDxADyP6dQuAevog3MQJcYRF2zASCfkdTvEwY6DCtMRB2jmd9M2mZ97ERrht6PN8nyVc9eSz4H6j96B",
  "key7": "5uERokyUZwKuKytAKgndnFqCY2jKxpJFPw4rfWgDpRpN3Kxp3Vwk7xoTVjeq2EhYH79NxdtJ1EegxGYgAzWX4DSo",
  "key8": "RXwpf8nzG9i4pHQnSBUaixpvVNXBYreZTygsLCMdFt12kxs6u6gP1fVabergNKtxvJTt9F4CibYDm13KQ9NCX3A",
  "key9": "38xWoYaMEdmD7fWy2wtjcpBTpSJ5hdDTRcfTMYuTCxP236os7CPpVUZHJQ22sSbPmNbXcQbRLQXTsowSFBbzfNAd",
  "key10": "Lco9FnDYN4QDm9TozHJLDLqiU9faM5p6x4tChpB1ndcRZsFRKRgiYYR8iVXJEkKxcpX8g8M9LyGN4DzJFfQ7vLR",
  "key11": "39rxwHPoDJkYt64hpNZmywTCeBtSitg6ySrMkCKAnz8pfq9y68t29iBLSptKLJvD8wSnjFB7Z3JL7a78mHCVxd4p",
  "key12": "21ybuSAPWX8Ec3SE1RcAjvBbXYX4MUiuERZuw4EwKSYtV9JHCr5atRETp94dNpd5vT3giFdZ9x37ip86zWMFq4Z8",
  "key13": "4Uvq9kBFtCJwfjFvENvoMqGHKKvfXCY8di25pnkxazeg3ECgoEdYhvPAbMQYx81e8jUQTzVjoLvDoxKM3kmYTeoj",
  "key14": "4x6L24PFv8Q86p7GzdtHULygWh7QhGwPZ1YFkh3SqqYHKonEh9yDrxQZ4btsP5B82YC6tpTktedA5uCsxwbbc1Vu",
  "key15": "nUipb4mK4Y5iTbTvypaMP4NGFbxctg2UijkeiAsgMUP5gUVrhKdZ4ipJa8pdnNTi5Yf7WJwSg9NZ5d5o9pPhFpM",
  "key16": "3QeBdMRKYVrPo9DUHUr4aijs3HKouTd7PUPyVAwq3kEjSrNHcFzpGfFr9HQ62UvrLSx63EgoP7jaMqV12fkMNWvn",
  "key17": "36S8XfSMg49p6qcUQmEGJhLzHMYoYMn3T5TZz8mkYNsfmAcbnr8q7FS7rUSAdyYCBzijvv1B6KoMKTeDXEdkAJfb",
  "key18": "Dwg2fR4AGR2w37JvauZD2yXdaYmVarkxSNDgA54gN7a3BLzJQNYkVtvU8pU3WhPSyF2LyTHDZgKfo3g5FhTDxzD",
  "key19": "t6nmivo8d5tUxzfvt8eGxgC4WHAMgdjAJm8TK3qwZcXKcxJw38pTPChU1Pe9jcNKyZDQukngw9xVWwiSXwsVp58",
  "key20": "45x3Nqbqaec6N18XPYmBHzTzjHPfVdauve27k4jAJ7khso8cFDWznbsq77f5g5DMXZUnaepXn9uxfPzcYE3GXR8B",
  "key21": "3S7ZLgeisjoFuNMcH3EqLsRLvMDFbbBfj3tWGsnERCaVpJuqRpx2QGF8GgayizbiCNezVTet2Q4HBMiP2CrNTkMT",
  "key22": "5NdPxCw5oamkzvywyGuGEYiEp3iTRPJjZxBqxW5F6yy5PG7uyPAmCE1CA3kCd5tpLyq1GUUArLgGzoM1DTNtUhWZ",
  "key23": "vvNKBPg8DCnUVbXnZXcSt5VKxdfybAEEEdHuut7vWkSB5Yz1a9yz7piqk2b6HyPLe7ihUorgnmh4FsVjkUWRrKz",
  "key24": "4fenqMeV6iKSrTqXUKJt6SHxaUxZeESUbQg5VVxa7EkZaoFn6V5uLZ7mBqpUmLSU2o8b7EBMV4gyRJiB5zpTbn8t",
  "key25": "2B5gBZv1y3dQMrUSx1Qwrg7G3ouwGEnAqJ6ZSmBSwWdS5E7Zq9T8V3noNG5EWM1TCoVvnmTECBDkmLT6cgo4yH9d"
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
