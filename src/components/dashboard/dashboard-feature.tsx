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
    "4EjUETi8duv1uvjMZeM993LMyqaU769bbJdeGTXGS7QERyqha4xQApbyW8rBoTtf5rAyy2hBDrXkc5GeA7ot1fR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yHb5561BVBUkcf2S6nKnVqSpiFha3vWsZ7ZLyc62gXpAiCq4HXEpYT6LeXodbe4E22stZBQguEsRSGMXHLnd6Xs",
  "key1": "4mqh96XAqrjEXgunzaM9bea8nQThhaUvLQbor2rc9Yu89jg8VXvkHfy9kgi6aMosdsZFVj7kd625cFxXoNRcfz7X",
  "key2": "yjELiNVo1BGnRmvJAc1qMYLjXisaSHRmC5gdb5Qqaj7fZbSvmHfvndi45Juoz8VpeFyN5xrwRpiuhpUvYoXCfkB",
  "key3": "3Ub8CVmAXKnXFJUXf3KcTwJVpwxikg4XbxdMLjvzEgEXU6HEdUD7xs7hKPthr5htoNN3yb9GqPPQUxJZ1udEJJtn",
  "key4": "ugjvhG8HQ45GsTqegTPwNLEVw7whvDQzEBcyXf4yMryrM5135w2tA9br9pB2omdMki2rstS9ZpUnUUgh9EnKb6W",
  "key5": "2HmhqYoQ7CNLmqVVNJgSigEip3AQdZ7nM8Z23QgrT1rCoMQF1iF4jdD8MyvzRQwVrasfwQWMw6dw7M6dJSGoWBVg",
  "key6": "42B69N3cYGhnmRwCtkGPrSQ6eD7BKpe8E8QZmMg1tcLK37uQLiJQJ4fWxqKXGWkaydMs6GYa2yfRmCsDRNNf2EZf",
  "key7": "5U1znMtJ3KNJFL98y5NtU6JdiGZAv6hsww122UKdC7pk1JAd3GCeuRY9wiPWmQsDAj9WjM8bjfJB9n1dRbmkYwfZ",
  "key8": "2usUiwqRQMwbKAXAeZfRVY6NJJYgjCi9P76ma24Nkkimqk2Lpijm1hm6fL5Qd8z7oa4aqbAu8YfxiwN7ozJvDnMt",
  "key9": "vtz4vGyH7aatVusDBU7XPsjzXnD6gvYnn4yJvzNP7RUh4sSfZTneyNknvEVvBo48L15jQJJ3FRCQEarbtsSGxHR",
  "key10": "21eVtbZWt89BNNxPUjCk5rp6tmi7H7CSAZS98HLogjwBcR4Yh5JW6SPbkULvoEqEvf7UMdqWDi5e9nAuafRQXXdx",
  "key11": "427skFwjXRPq6y4eJ61dgtEgX1Qn153N3XSe4oVM1WnfBXe7GSvrLDmh1eEzL6jj8stLkWGptedVzAGjh5PMfsZG",
  "key12": "2Vwgdt3g4H1WJgoRMcirthbwBc5C9tw4cHTriwhbSaN2srUKjHsZo5978zBA6aMktBVBy1HjWJ1irTLJPio1Ltwm",
  "key13": "4MNPRYvcr7QNQnhyLp5Yd3uLjvmtcMdv5nwqNckqd3XGQPu4JfuQHURwNnjDhetrvtp1dXy1aVDJfxCoL5pLKZy6",
  "key14": "62Mz1umWJMF8dW5jYQaQie5SsNzgNruLAj1dG8f7oQn1UQB8ZFy91EbXb5MGCkJGGApZ5HYy3rUrySuWCxB6jA5e",
  "key15": "33Gm7okptA65KEJntmTTfzrmpchLWCNFgzwtjJNDHvB5yxAxWQRoY6RtZ5gN6rz9ZL1YfnTkLfhgisnQpg3u92V",
  "key16": "4XebwmSm6CaTJ1TzvjQDj82GU3TP2gVnHZZ14qHV1MZmi9KRM2F12BuBQ9c8mo7qbW94bx9BbYPwTaUAtRiB94xi",
  "key17": "2tmoGCXFSRuKAp4eQK1DT6UMZnXyKtx4ck2xki2WjvD95k4V8PBkaNz1ren5ZDzULq3SLsTh2o8Qmn3xSd47LqPT",
  "key18": "5mPyzoRWU8aV8y72rWRx1tPbFV4VKAA5D6oBJ5umr7KKFMaESLEcJZbE2SSQjdhAEYvdPso2pxR4HLJMVsMY9zVU",
  "key19": "2y7eS4wxbkhGmTNgJ5QdYDp82jC7FMR1bWPByUFDNs7s6aqBfBJ99qvmERLNkDQo2EQKuqkuDV3ivvrgJo12TJ9V",
  "key20": "5cnw9R2b8Rh8m7RPXM7VZoX4B2XnNcA3kvf5H3EKWeZrMyoZPgj6ny7c3tnPvmo1Bkdrqb4X1p1MmzPaY3g32DHJ",
  "key21": "47DowcPRUwkZjyiScFuF5ASdGSEa5X3fxVjPJmwKu45yTZYUKXcNBcakBFsmihDEzcRcmiTKUhRLgH1eGiizCZNs",
  "key22": "3bVKRduayaRatWVvTL7m8sySwWmKpgdBXFzpy1N9Vu36f6QtYt7aXdzGcQYbRASXKwjL4nwxwPgSer6qJUj6aJ4W",
  "key23": "4TtBGYNDQhXZCnGRd21fKALXrcenVSaNkTSVhEJLhYYaSePDQnSuvNM4MLFWv7keKoacjFjho43QRb9vZVVcJX5E",
  "key24": "RbLUpBm5YNi3atxnectWihJ7q1qtig3KWBAtuYbAzNvJBqbiE2y8s9Kh8gVkXe7QCeFevGCN6nZZjtBVFG9zej7",
  "key25": "3i5Pf8i5vFW8jKiZnrJxmp1UMScnqYq7MiHnEMNWpYZqNjKQivMdtnksPLh5KZEdr4d2iok7DFTwt6jpjykZnLxc",
  "key26": "3iCDLkFAawzuqVXbDUxQQ4nYPdf69WAkDQyk1o7DJFeYrFSorsegZwAugVHFjoZgUGtjTrHzT9xcrMFqwMjdeA2t",
  "key27": "2Wwk7HJhSqShzEavVgL8oCjTg8AzyUPBEit6NwCs3oWgLN8t5RFjJ6xBkihCf26gwv2kwdct4s3hyQNgsj5Pktq8",
  "key28": "2VPR2ick1ewc3JVjzP36rzfxHaUZAfV9UPzPX9L48kzF9B3oaBdMp2fGSzq13VkAzcr2Dv1cW6FMKMKS73XX8qHU",
  "key29": "Af37FMoYatRyeu5rpbf5kZcG8hz1fducCdGGwj1G94sPbAwi6JeshwztfDeE61o5fYnzMTPhFYxqT5HY8UAg6jc",
  "key30": "4AzCzYPkddEAPAJym433566Tcoas1tZeUPeYjpLxvc7rqhN817pb3jYvavAoxtdsxWRFxYDosxanis1ahVBCThVY",
  "key31": "2XAoFwPaf9aSNhJTmCyrRNCPuKuZ9NsHfNEc8rkNPLVgjHVK8a3ahzoQuHvJkCvcnW4jFbLWoGfckHeeWesVEfvu"
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
