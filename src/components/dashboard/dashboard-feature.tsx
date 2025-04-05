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
    "5UKRvJ8M93GQNcEbL2GAXQiayg55zBGsLDByPnbjXqRKu4kPMYWxE7hj9mFQi2WFPFaNCiskEpyjwJ6ZZox6jWzS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DFTdjGQti2FFhHtwoH5JaXZebvSPQHLtrUFpzNbZF12ZPgK7ERrFSX2SasNQKSfy1UsLnYc4khCybM4n6oBS7nw",
  "key1": "JXHUqoV2oLt5SkpNqQesjnXhHNWdZY6yamDf5sMHmfGGvGeEsNnHEwwcAbCZd4Xf5TATVeNqw4JBjWDDLVu4LsK",
  "key2": "2x6YXd8Se58DJe4QgX9nX6AEyaGgoNqZq4NdVkHNKc7nasNVB1q8pVHM4o7GScbfJCWG9HVzDL76SBJMkHeyfLc8",
  "key3": "63gLx3tQ1yVRGYqd85bs5S4Xyx663Auk57v7WuoSKxScnRD7MxmKBzvMoyhmFcpgQd34wcTUF5uRyqg3iE1j5Ajg",
  "key4": "zhNkpHJeAVgS7PJ54rdNnQ6zZAA1KVppG6VWDgK6QfDFnxpUGRWep93DveFEnPwvKUouiMgWPbZsqxpYDDkUnpd",
  "key5": "ZwbaghN7FwwwREEYae9M2N2LXQ8niieNNcKocgwmjUVrMyBpER1uuoYJ9ZjyS4BAivS8jfkYLBJfjnGac44L9FP",
  "key6": "XTMqZQvaqHGY5vMUZSqoqxqu2QfeJkkZ2aBaqHpL7RnPFnMuk7Q7aoCv46xRmT4f9YMeF5P67k2UYTuJwmpJQh2",
  "key7": "62U6NdBpg1WCqzAw7KLvF4zGid7nt5xxBZTVgCZgtktmLiVLJ6BNXrHvb9xLNRZjkBT5FH85R11oEKVA5TvPaL37",
  "key8": "2rhoovx4X8yHswd7ofcoPmuFSGAQnqBx6kCseQz88JCehFMu2CVrWmrQJwnVUuwUMvvcgcpaPd6BJ8JPakyjQH5C",
  "key9": "2y1KrYm5vGWzrq7Q9GXqAGxxw1dzwbx8muiHdj927q4Noozno8QFSXUi8QSbWj34KHaQ1Rsu1VmvEa5dTeDnXNGb",
  "key10": "5iV7pVAruYtNpM2unYgvdVAzpS11P49HvoW3EpYwtPQpXAFscoVteuTik6BWXG8ZgcG9vWcgwkGhcaPDpJha8p5p",
  "key11": "8ZmELA2eka6p4dEzrpGLNGZtRELmAMYVupmiSz5dzAR1sSh6LKxnx6aAjhVq2SQhXpZRCjDu7RNfXdSL6pSHbmp",
  "key12": "44GCpkmLBQbTFNDZz2pTx9S5gWTwVFPNrZaZsgSfNAbGcXrWpmTY7xTL6JZqA94JWH9znZvbZiYUQ3PH9A8my7WS",
  "key13": "34tcUY9jP7qCv9pR6Krm8pJszYPt4HzwZXB7N9NM7Y3V4Gpmr2CvccAfA57RBkrmFbn5k1yxkvYHVCbungHgzReE",
  "key14": "REgawAnMbH5r2ESmGAXK9yoyp4f7nsgVF2Qm2kWLZTVsuWzptLaiXHUDtU4U2pEjBTsgRwrmLeieobxqPW2VWjK",
  "key15": "4oMhTu2CFNzZUC16SJDjmnutBoCLWjXoPCEwEwJpjSYkqD6xyh8XcccQ4ZGHWJJndGvGJWHNJPNZLAfhZsKSjN8N",
  "key16": "5LqTDVyKLftuAX71yVPczdwLpMGNrDd5MVSGvJsSLGPM6PRm65a8soHdGpAZxLbWqrVTVdFbkj44TwHcBMkbch46",
  "key17": "YD7TP8HN4Qh2ctoXkSUgzH5X1i3iApEmfJ8zmV8xhyxHQMabfiozzzhaBmSqA1Qpyg7Ur5wEZG8K7wPNkE3L7BR",
  "key18": "4Cu9R39nexBzknJc8N7V8HhVPfzmsizZHwGCL3LJz2zGX232kG1eMzPi9zRLnJRhbp7q3fb6ijGtauHTSWfU1wun",
  "key19": "65AZQiPrUivSz4G59jpJvv658sggURE2T2gAxqKSQPGewNh8NxESMg13FXgcAjmmfjSdbRWmk7jwtrSB8ZaFqsPz",
  "key20": "5tswBMdAANbCoMu3NbDkHpJFQFutN1CLDkXBbsjsaEuKv9vEJNmkkx52n5SAHRdAVmdL4M7PaNW38wNb2rr4fXQi",
  "key21": "2vJrVegwG5Gr1aRu2zFYKEST7uvE59X4MVHS5V9Az49Udjxxb4jxvgYeqHHJdkAVb7gqxpzAVvHDJcNNWnZrnjcq",
  "key22": "4EzSXR34h7JFfi36cebfJS7y8wcnyvAYGNGVgSE3wqGsfV5UD6pcQ8WzTUrgJyv6HsaGJK3sePt4uZS4jSiUZ7aW",
  "key23": "4cyFpX72BxrJBKvUCqcb8sXEYjm3VzxpFSZEy1fGg6Vz7VXnLnYU2bhTDwhz4VW47dWdnz1JZTrdr4eSEpcvfKeP",
  "key24": "UZr5wmUdjJVq1bQxGDuwY7ejuXrugFx4tCFnYLH5Y2MkXz73bL28xTi3YdzqcXg7YC93SXAGnjuDXRrCguHpk9F",
  "key25": "5xBef1oTmsi8JLHPWiAM4iZbwBZfrWC7uYBB49DQzwXy1N2bcMhq3nhArM4WyY4JfcWNNYaaKZBSj21GPTDVPhHH"
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
