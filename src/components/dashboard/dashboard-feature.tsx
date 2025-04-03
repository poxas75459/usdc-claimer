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
    "WEGQD7nhjAWrVLEh5vPeUTdWBjRqzMNC7FJsQXx6HrhbuZtNaks5T4GVAq64QziNL1h86jji1BoUCTViQg3ig9A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pmfa7uqVhgDsHpHYY48ngCH5HpEm68JatD6ACQZCtqVXazovDgWRtjZuTbFqhJMvQx9mPfCZknkAXFqZgnQDoDC",
  "key1": "54AdJZazGyL4VA1JrFBEAxTfguHkAGKgx4jcUVJbJhQk9Tg1rS6CgwP5yNEoy2ek9M5rmEQc6PjxRGy54VX3Ubu3",
  "key2": "rssgv6LMUWp34hWWLAuh3PqpDTAhUjMKGt2yVS9aeXxW2NaNBDjhJ73ajFjQoFBYwMpBudaSTLycBXhV8HHM8Tz",
  "key3": "4ipxznwW9r2xBXcMmDERydqLoJcQcQMRayudFaTPFupqzk7cteD5rUQiopF2BhaxavuFB9gqNe6BLaRHea1EP62V",
  "key4": "5E5eEXdUiP78iqjGCeCeidnxWP2Vq7NYgZYs9Vsq25JHTBcBKEERzbq7H7U782J7xCu7wKZu5MdikY3ZX5NsTDg8",
  "key5": "3XgMf4GmBH25m8R3kZDuS8FvRtPEuzdhR4aQoCgRqP9G9z77LhUJb32uv23CC4ecQPNCURz139NHYad7ayReHpqs",
  "key6": "Fjmx1Bm4uvSo6NwtarPt1rFK1myCjDjGo62N8X156KaRhybTkSjVUcVYYeVcSzcyWQFnBpAN6LdHMFCuK6JMrR7",
  "key7": "5GaLhFfD2V3K97PFBYqznxsGvUjumS6ZYsbCPHDWt9rqbR1B5MHVec4TbC6kgNdJAGsbPFqU728KN2zPtxkkw6um",
  "key8": "JhZ4HZ5Ds3qHs63i9BwZPc9CB6HFPyHi5epU9FyKyrTkvExnzLTR55cviazyTHPUxWtvTyurGDENsq4CiqUp5qE",
  "key9": "3KMHkpnKFfGuP59M8ur46jMvpa3goP9tXvKmaB2RnMW2nYqWZbbkQ2xva1c3XzuW5HAmWbwKPTyd73SeYudXky6V",
  "key10": "3SEhH2iXnjBCtuEAZSVYViCbLXnnzGXnjJMwuvZ7wG9gKXzybZoQgT8LCvjy1wXw9JKA8c7uf5w2DM1dD99uAi2Y",
  "key11": "3n9MPhJpp4iLFnAhrevZDuZ5cxiqGW1wS4NzsjQgyBjHzLoaZfPr3BZErevJojpDY5BULAKaEyhioFqgYW4i659c",
  "key12": "3Vc79amG9iTGgeZBfc5FozcyKWgjKJio8jw3xqEJkfEEmiu3PfNtZFdsQLTV7uPDUYHQFm4bdnNEnY1Zd596Fr5q",
  "key13": "M5ieom97ZBikgYK7i8BEpE6bfpSNrxAMo1Wd8tVNi1xV1pnA3hjiECCZKYQGqsKDYf56iosX3RmDrjvEPogTknv",
  "key14": "5Eu1GUv2LE5DxLh4ubs86KtHCLJUGs7HTvEddKEpHi28uZviVYgGixhAcDaR8YjGxVbCCLkvZSdhNhgb7xranwxZ",
  "key15": "4qFYS8wf5424qvBcQK5bJZbScbC3yCZkxo1kNHQvKVhd8eqh8x36XQvfp2sADSYcid8tybRd959nEeBwbByquCLR",
  "key16": "3f8u21AbgBhVmS4BpGUbcduqHKHhT7DZnk2F6UnMiYgmGMVzMXUpW6tz6kqiVLNqzZ71ichbd9xZLqtRq76QjFtf",
  "key17": "64Dn6zXs5Cz9q1wDG1HmqX1g5PSb6rLwmGHEwCqv47WE98bMp5Ui5ZMFbmLpu6ybQRcm1C1yxmCtt2A8N3fnYVqJ",
  "key18": "5RTn7uZAJAigRwvFErQNSRShcJN6RpyPG2RVr8CV9e6umd8phJ6Z1WzxYFVTYafoHZ1x64WVcivp7YonEZioEp6U",
  "key19": "52WkTKNuf8jHRkZthpUSp7qrXuNX4zNeMxAkBg5EmjvW6L9Y6qvRteXv7n12o5a7B5GbXTRFdVmDVCNceSqzrZ4z",
  "key20": "cPPvT3nJJH6tUMNbrLzmrExtQd3VQTqtX8LMJxHGD56SpjsfXRmf1TFmPsaKFUjgdvjhsLLiZuK4bDLCnM8buZ7",
  "key21": "5zjL5T59uAyox8tqFEEVj59RvfLgtBqGXdug5wJUHe2eMhwCeuJb4eMCzZyGq2uuzvH9Eb3tqZsqUP4Y3qYCPfV",
  "key22": "61vMAaimMP32Kqm3aAFFtQ2QVC569K1E4WenQFHmgT9VjzNkqaQ3wfrrUVpoSLAApHDQyupeU8rjFdjks6oqnkG3",
  "key23": "44TYj8ARiuuLW2NjXSJW8jQcsg2TRGYWjNFkMozv1jPq25zcDKWwtjY2Z8BnTL7fUSyUt1A73MV7U8jiAaNb49k3",
  "key24": "5WtBGaBT72qD4NBBZZpsDJLnZzo2bpUxfjRsbnjQe1HKjGqbhfUdKkThiPyE4E6sYrJ5MGMokZFw1TUuFjWaTFt2",
  "key25": "4rU1VAYw51eaRSrrXK8vzePTYaSAxavQ4s6Hv5PS58EZsWUmQsfaCvEXThD9xkbfxgrrX7ipQBLUgBjdTUtVP2cg",
  "key26": "3QrXB62eG9ANSzDpe2gMwFJRdhQU3RQCrVypEoh4LjfEHRasToopdw7cDQLEdfyy78fK1djQM6ex5TwCqr6bLDX1",
  "key27": "4TQR6nRcSfbeyv8qEcuHib4zAUxkAZE2kMECEBcPEbCtUku6WQRxjiNBRyUPfuTNPg1ijibSBpLAPmdxGtZa2fRT"
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
