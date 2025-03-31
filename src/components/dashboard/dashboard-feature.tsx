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
    "zRtz9TkqL2x7CfE9oEVeGAZHMnbv3xkSuMGMYg2zXTtHzjQiTKiuVM9b5TQXwzaX3uxMGY7phckinr1ZdeCFDic"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D775rdBPjdNYCRbRwJrGA4GkK4uBzECVQepTnJc6MnHiCXQezA3d2KmTBuK7qnWhKKwYMKYmrNBQERmzrj8K2pw",
  "key1": "66CdktceRykKUJZiEbL3iRgFTFKvR68dFUwz8suGVHXACpE8oqmNwTckbUofd17BvozzjGWvfsEUTkfUiyzpC78e",
  "key2": "2tQNC682a5aoyUz1FSWdeW2NedQxUuWNPXioFP4FiZGJCJkKArz9iiQ5SrJbdHncnyMGiRCQoAZYkM3Gf2s6yvvJ",
  "key3": "3G8B1118mSU4M1s1fBNXUMrshKZbcL83rrpLUynPz2x1uPjvuPFLCfrKYuRNKJFFPvcvK3qME8R3hNMZpZocGJAJ",
  "key4": "34WWRnL15AiQGLPSoFigmq4GNC6vTh161BYgzEHpTpEiMZM6VzngRixXeEtDcjwqne6792tUnnrjQHkHjkK1MY26",
  "key5": "3BWK4FVi4DqhQEZiLJfFKgP4sesuvdJW36zhA4bx4ABrVdwnFP1GKiCL5MAAXmGj8i8xtGr4z1VnMGDaQQ3S1kmS",
  "key6": "2sbwt2vSfvZrqsLHjjXij37kwRB3i5a7i7XaAkHiaSTUqN5vrYCvAq8j2xkSKhjS2ZWqN6Jquh2YzpqUi37oPm7k",
  "key7": "4MNSMn2QGNjkDAG1Qx1QqNcyrp4wmtVmmk9u8SWqzbqXfL95SNRQgYaYWo4w1zxMNMXgt34vpiZTQopyDFLfySKx",
  "key8": "5B1S8VRdLbZmJkCU9mrH5bAZN9vDL4SfHAG6ntwAKxa4QLRADh7NA7PFssXA3rNGXahrmj4izWRnevYWrrVTX9g1",
  "key9": "55DJhTsyX17ENicYhQ4pDPznGQv7VfywG2ruyMfKQ2Cdp8fSR8keTNLzYjJrxQq9X8voMFSGZdSRvPcyKDkVw45Y",
  "key10": "5k9PZPdKYyLoqjYjsEY4vNKtpwdfLwsHczZ9xDLX4EAYvD4ekE8TSDgWYWZKemSWfy6wVbSYRDvFtkfmS5rod6hZ",
  "key11": "5HMw9ofFWSqJeLpZmk6GrmhaxD9PYNL6Qwa3TaqFfM2QKYwnpUmwo2NZ3HNNqmB5ENT6crAq5WBWtPA3xtwdrzq8",
  "key12": "5ccM9yisi2j1yespdvQjGUgFxi8NTJwDCNZstgLZisjSMJ5XnzCMEYuCs6emgJc1C8k6mcWGpXrpi7dvEfT8VbMV",
  "key13": "3VwdYiVnKvecbWXYYHmkSZW7whfq8YVTHmrYVu2PcfXC47JoFNhkzRb9pehemPcvNafUQGpSqStsBMWttFt1Nayu",
  "key14": "5WLvxASAipE1QLfUn1k1tuK3znKWVYxyQWZGfRtV8vHmjAAF94751ubwLgFjF7DcJ2TCSVm9238CKi47fY6JCkSf",
  "key15": "4SjChuNeaZjny4RQHvaXE1uEQwvfCBdGa5A3XfMvd4G2M66Li8A8r9Sxu1EGuUjNDfQ2R6ZCDLdJUCzUUWhPZKSE",
  "key16": "5yg7UpD5Fuo6uwdvMwiJzFVoW2LN1dtBjF9zF224qRW1BhwgBLHmqaK63NWhY7K34KqEXFbAe62mehgtVy3v9AqS",
  "key17": "5uqUVvm12XbAnPSyo3JAKQmREcXnnHf3HvuY2UA4eXJy3jDmeA7yRXSmbjiLFoZnBVf9WbwHn1MNo6z8KAT9Zsp8",
  "key18": "5bkQoQgSG2GXDv4YJ1sLHqRXkXzmrKGgrPQtRw6nk4ymq2tUJHtv6z4ZTxoALZhwmovLkAQuJdxumzZeR4zTiUrm",
  "key19": "rgod14xztZqov9Kh4WBK6iepHrP35CnHvnhKKvvnUzTS5JrSKJNbpRNu6m2ohTqYoFG8uEHaUB5bHKHntxiWHtA",
  "key20": "3QuRS2XEJCzsCUKKBEEq38GeQVPcxPXfka9mxm8a3TcdBoZBbgc1rXjaNYXkUfPVE8rKNiFxBWfkUB1gFNzuXiGU",
  "key21": "4V4FZULysoXD4B6EaT45buZDMSzwYYyNDqjVArmBwDWD7LJgsyfi5dzdqMd92pMe3JhX8CqGkRDPwZeuqfyJtqNF",
  "key22": "3Y51hDaaa8jnd7BUpXn2QhqR6YnPG6ENSwb3BeZQ6SSKDv81EbjAVUAAH5KKNAgHsJ1EF7HJpbjvDjGieVb5GmtM",
  "key23": "cpx9MgVGhxdYf3KqG47N39Sw8V4FQNZJkSwvLixP5ZEc9obL69Efp4EBpHNvpd5cSAG2beG8F9ddUb8mzXzrcB6",
  "key24": "2W4awv5CSSAXFmw3dUPoAASYLxk2yHqHh6R1ZkhhCeQy94izQGjmiMiDq8QqosRFPjiiZXJH6wjJQMBUUxDkDz2K"
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
