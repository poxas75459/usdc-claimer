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
    "khaoLJ97T4dtyH4TYSwCWVpQb6gqiuVZnjM1R1wv7XN4wcnBgoSFrgRo8ymHAAtnqzKzcbkrW26xye7jSqH6sqa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35CjgPrAnCMZhyzz3CRLYMtN3PTvum1uRprLdM2Wc7aZb9N9nJ8iiszHCygJnvTz7Dj9cJdv2QR4aeqpfFtGYQjC",
  "key1": "5FB7KXfwnTHAbTBfVLMDjdvMX8LrnRfocH1x9zCjvVDg4LwhdJtGzLj9KTQdartcnJ9paE7nDk1NtApEQEcgWDGK",
  "key2": "42kwX8xoTCbVu3RejRzGnDoSQMzpxYiRqJPUtEKoS7c7nAEq441D13xTnWwDmdkjPtkq5QF9hwHDLp2GkLe2eMf5",
  "key3": "2BZp4EttxRSbLE4VqX6vmrNP9RNCu6tEEPst11zdGf7ahJRbk34dy3Ms9cvqaj9bgG9VHvubJhRxapoBbBVjDYNQ",
  "key4": "2kgiLV2vR3H61EEZWJXMtm5tk34SMM6CRnmWu4JWATkUXbJtTGbE6wFWyfhrRwr925qFtJmY1fgC9BU6obiDvtT2",
  "key5": "47dbqtUKxa934Qe84WdfpY98aH555ygLqvVfiB9HdQ6cnV6QEA6jJ2TwDPQe3JgV8LaJ9XELS4mcxSLk2K4hSfLM",
  "key6": "4QcohZ7AcJZhZDQHZT2nQmDjBDtQEbHShbZk6DkXkjmXfQL5B9y3rUNSCGzwWzKD53MNv4Dh1FD7BoYRJfXtBeeM",
  "key7": "5a45EMQBNR4qBEXJ61Twg71mnSbMx5b78PZFhzk9wrG94MykmFWXBJheAvp3DB1nGwiU7zxLRFCd2EbSqiNzsJrB",
  "key8": "4ez4uvnEUhNJ8szS5AD4SuTt8PYasEAXyBPKnMTkCHJjz78UeZXb9zLkvmkVvAAFyWpU3Xczr8fEC1AfvpCPSEwy",
  "key9": "2j9FhAamZdufnV6qKnastj7xEv5Yt2VuHjBrmhSrGrdZS7StgYYtwz4CH9g29PgSYaV42YmSo3qV66LDCYC2SvAw",
  "key10": "yQSbAUbzD9PnvDF77qs6FVuynbzPSSsjCJAoQx3KTMR3YkW1Z7wpG5FRyFqcoydsgPWS9FVcMrqVM5LNZ4h6cxF",
  "key11": "2oYxFhtHXtHDfzCiSrXW28yzHETGcPFA73FVWqhBr9cowLCTkvw8PZ6oysJgd6KWyP6WEyWSQA9YUhxMJphfXTZr",
  "key12": "4WeufL9NcwS8wwHCkPWZegAD6fxbk2Pm7R7f3YBV7H2feR8hRhAzhrUR36h5B2i2dk8JpxAVbJukEJpeUeULZjDU",
  "key13": "4fTd6Drg8DwCeiRMBitDfJJ4WusKQjMwKc29cbJXcBkzhprijtoHaHqrkmacL81NXmrYSQXoe62YjMWAKqEWsm6z",
  "key14": "3F5UQx6o3nrXezxHnoxCVP6sDvTJ7LuuqW11njZF25A6RWHGAhqGQRuUZrBR1cW89zYTnK51Xq8PY1XujimWaU6f",
  "key15": "2LQtZ1b5oKoWy1WPMFinN7mmgQP6EucubvHeTUbqNbxkCj6U1NP1R7ABRURP2D7bxnqx4TkjtuMBsuUKYxSv8wUm",
  "key16": "2HFw2zsPv3dRDhfzHr6Hcjf73M5M5PHTkKZcbb9Jyb9fAaUyRGVeGdh84iQSyvK5yxoUeCGJNFH4z9Rs6JRQD3UV",
  "key17": "4SaJtjPowrJYUwKgqMSMAxWzPAwWkHkHGaMKfevtKynfq1BBedhF71pxzExcrwnWJ6jwS9pYTtAij3EgHropBSqB",
  "key18": "2TuyNDm2zzEqGmLujYuofGbcYSzuVwbgeT3rCVnvvAuLEDfFXVGXnshK3SGEUZJbeKt81mrBTzU9X9NgkB5hV6WQ",
  "key19": "3B4iYJMJs3FgReQwTqSYApWFTjaQeDzUyaorKBqxbEYXPg7fQkYTBq2cmU3otp8m8ShDKCfN7R3s97ggiCYtKtxk",
  "key20": "2Qp3rPGPSaMVk7s3WY9SkrfkJXftrCyjXjTQpFtTutoXMKC2WqEp5aX591HyviCED5QL2MXUtPCnqAaa7rZFfqts",
  "key21": "3rjh8wJA8UKkpYbV5k3TwXX1U4YMetb4hLvHUzh6AVP8pCjmxdM8nhts2nyMdP8tGQbhfe7SzUjfUEeEWdM2gEY2",
  "key22": "5HDgT5DKkJhskX23xQugNj39RSUpt2ae1ttCFhvGwR8woMzQYBSYNkuEJTDXDRUosKVoTdoJrSfB1sXf5Bx4oMjD",
  "key23": "358qqEK92gbqyFRb36pta8g9qL4MN5LADoCiRcYCAFG6o8aXp6FN8KuEFcTGhLM4miCTRbCLUvT2tf6D4n4AgKro",
  "key24": "iwa9NBnM6hYaHdHi3N88dzTSWT9o9iwocGXxL7yN9E6b42GvuREToxYRrB4hRoW6t2xzFjj12Kj29oGg5pNFvVV"
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
