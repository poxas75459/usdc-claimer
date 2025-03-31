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
    "27YM22FL9FmU7idGqYn1BaVHb7xCxpgRNzjNVaZ1TNTsGciKwus4uEwUTNKm3FsLpY3VhbM6SrVjfffi9LjxwGt1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cvWHspoLCg8XnHnZJQFhg1RDqh2pQZGA5MDgPRWVN49nxxSbXqREBc7T5tXFDPA3tDgDDPkyopyvzN1BsXhk7DG",
  "key1": "19zWmBFAoiQJjrZWuGkhvo3aS1pSwDwZk4ZaFBykgHBRYdvREwnerxZB7kaBDDPXGYXPZhx3SsKD5eWqtiRpDcb",
  "key2": "2JQpzLC5cs68uXMk1Ym6qKb8SqaokSEfvjeVZbQgB4XAyXVZQ3SkokzbPQwNReXjKLrm4qj9NJPWMdKUdBmPdN4Q",
  "key3": "2ZrsSyjhAQk49xQa91WvQcqAaXHtGoKsWhr3W7ymjTa7PoeM84j9LZdA2etszPnwxjU3xyMNZVtB6jQozSPWf9q2",
  "key4": "2cGi3JSgQNUUqK87HGyVegRdwNnzGjnqgS3U1ZtK4QDL7GoDoyTM24N9DLJdpo7zh86vh199dNW6nFmqS6fP9eYf",
  "key5": "52PHNxCMjygNGpMQNr5LPdEDTUratZrAmzcJUaCRHLEVKMVuA83A622gjLngmJ4n87n5CkZ1M6VVT54a4tvVARLj",
  "key6": "3CxY816Qqng9TwUXTC2THSnHUdDDXWQxq76vzdiXTZDoR9grtHD2B9BVM6yiVpm6rJ7WEJaRu4sLmKvf7bwLjrp4",
  "key7": "5AZB8jUubxVVtEtbEtoR7iZSAQWhexw2XkSKNCqgvA4Zc27N92dny2DPmDmWYJJbpdgW5gfb8KqExx6t6H5p81y6",
  "key8": "3YcRscFapi1MA3sKDJkk9SonaNgfjcU4ZTw9pA7XqzJKwwPpG73jPrQf5YNfQ1P9Z5QoWoekcS1UMZPATMLuaPTW",
  "key9": "4jotr3K7Kr29M6xoVLha5TJk2TAq8p49G1Zk85UTjEcEci7jnxaawEkSH5v5YB3B7FajgM6B2254y3BoxhFpxacj",
  "key10": "6KzvmVbUairgfpEwjNJTEqTo2DVaSxfXz5QMprzieWqjszko4BSQ4todaaaPgickwC7Mo9jvKE58PdD7yqNmNDH",
  "key11": "uNQhpfZ3hLFVRViaSpPMK8fXqXNXka9m55jsLY9SjpRNAh4VHR2UcQehFUmd1oav9VMzrRockBDUAE77iTWkg2D",
  "key12": "3Rz5aDV1RDWMY5fSNeyK3e3b6zxvULMaEuGG3qGgY2UpMdYDxFjuCqCiJT7buYj3dAZogn8Xgt8FPAKvGPC4BcQn",
  "key13": "hYCpq7vqByW3tK1r4evyE9h458yMQZ3CqebszqQxM1XaiTq1F7JR6hbmvTuE28t5we59dHZeNywFkN7UWKjo4vB",
  "key14": "BfznZQkjqadaPUEHyBGY3PAx1dtro3KdifEx6ZmXashy46pyT1G7NQhX2x9tGNiXFbAM9EbT8RTjMDzMLshciVm",
  "key15": "An4cdLGXDMoYonC91JsRp4zSYFS3gy2SSfKfk49LPA63AsTkC3GNSvqWuh1gAQKf6ram7x65jbKPCLrYVhoQLTq",
  "key16": "61HtCAayJtA2tzEXA3AVZa6zmHg6LtG4q55EevRNYb1boH6uFVq37nEC6xqKQHEweAHNPmW99YWNvWEcKz4Yn4XG",
  "key17": "4cvhrjRNqv1GFR5qJaLhTshoWcky6KCxNd2SWe878MeSiBDQeew3CMbDEikSiGeL3Qnak9NR8fUhJt5sFU8MVE5V",
  "key18": "2BuWRc9a1oiP6RzN7c79Fw5CT9g8naxi7qrh5Nk75yxWLAYTVvqo4PKTaivBnFhJCGahvevrLbtcZ66eD3fefqRw",
  "key19": "2TB2Wg8KSc8UvWCKdnzYw6tFjLGuN7uNaNgWRU5Td84Sc7RjRkQST7R5ehTe9imwai1aMKmiQEjaUq5igq4q17zk",
  "key20": "3muD6jgobGgC1yw9Cuqjv8XH8N9ykEDNar7RKqz45uZk6tNCcBCguAUQLLF7SAWNMRHJcLAbjz8M39xdgtvAYrrf",
  "key21": "47FQdyMpBi7KQDQ5uQfgiXijAmfvnvgjXCsE5xfQY2A12KjXjZ7HjcZNsvDXprpSXz6mmcXzHF7JKCa9kgttJMMf",
  "key22": "3ioMJGrt3ZTr5TmSZ214U7PDDmtoSsngshUC2sAnXxte5cTnPpWFPhvDYFkcKFEe4J2Pgu5xkLuwsDm2zNZjJUCR",
  "key23": "4T1RESmBTHHyMrLbFLgTSPjuMzGZ7PiaTcLU1FDc57bdyaZMYAWZfbJtnJ6GHcDSBvMVUgZAMED6UrEg7oGkQhjb",
  "key24": "mDAbuEZC9aaUePdPQjKqGi67vJBoXDogfgFFEK5vjnLkdMqYbbCob3C2TrLECdmQC3q1mTbeFv4FD8wCcjQQwrE",
  "key25": "519jURmVzNxGW1rH6ondz3zCzmBhmPBx1bo91RjoaN7FN3DjmENmB3fkmX6JGTqnvXKLPyfknG51EzFSupgz7XNm",
  "key26": "3iQZUFvNbW7XUBa6nXt8bB7ZwFoBkRLeXwnjSWbFpbz7gnEsUyx3CNP3cTc1geyZgBKd8gHPEikks2KXwwimstEh",
  "key27": "52jA62qTkTrLbZm1bjy8mWkx2vYyLiBoNrdu6N8uSZy54QcT4m3vXC1Lqe3uS3zS6rrEXswsbmNfsCeVh9kdTJNU",
  "key28": "4PrQTGP2QtVqp7t2tNjekbgjusjnyRsLoQzizCXHLHp2kRT6mWLpJfcjZfAAkoVWki7HicF4fkPfrrB8ZE2Mg5xJ",
  "key29": "5D1KTpooUntDBW8CAKkSp4d7Y3SjqzeTHngajpP2g8FsCcXvYCpaeZTmmb8KnydJGrAo2s1uy64B6WRs3tir5KEo",
  "key30": "4Z72sPcq9wJDDHRJCGN6sTAqW4vin4xTk1ttxeSfA3HLUnURr7pnxkyQhA8aLguvuqEQ9mbYBPjdLvt3EafpZ99r",
  "key31": "3da7k1ocHjrFzYt6gfgp1m1ibReh8B1sVKXQvCkzhxVcVw9Ec81JZHTyBeb4iqcqoEc56JcZbi9Cvrv33obrPSDr",
  "key32": "45QkiW7Q3uwf6qhad4gGLTQs8EkjarfLfwRNM5hCByBrXk7RkU9DhekrMsBz2iJZRhoDt7NRw2GBgg3LbzHQZXVZ",
  "key33": "2e3Tmh8xpAG24yzJVeoKxAL95JTnT4isJbfUudN6mfusMmFj5QkGY9qnewq6fL3yLd2aCXqb5iWDBZfKqDMESRsw",
  "key34": "5XEzYoQjH9e9WNGuMuYNYLPc8mPEyeoeDogUNYLj1vBDXYPTQUhtetCHUL1MWJTx64RfShw3A8cHeLRPHoi86iLb",
  "key35": "34EGm5rLo6avWvmwKN3476rhSxXpyyHh8N55KAdRVHR8rsCgJdTSWhjWFLBGfTU2H2PN3NxvHY4Z2TryTg1fijx6",
  "key36": "xvqV1DbMVgSwYzopU6vucebMN4B7cDmZN4HiHCXG4dyj2UaY6GmznqkGg4F4eQhbNgceNK6vThgehnnBPDry2yT",
  "key37": "4Mp1pQGf86YbC22AukNBWjmAdz77tGFShbsaRuz3pUNuSeJtpoGTB7fCW7j1gKBviu93SR4J6wvUw9JXGX1LeqoE",
  "key38": "AGYiR8yFfUo6ebtZpkcwcwEm32RnvsaXgya2rkQ2VhMNpQzwMYJjGhZoqaR22N3YPKaUnqdnC3NCYMkF3bYAbwX",
  "key39": "5ipjYKT3qvwp7U9nTAhGZeqSxZLdXCURqeaWxpSpaUPoJX1RTdofPv5uqSPQuB2MyLCi5b3GyczBiZYYnYgx9faz",
  "key40": "516AmbzZhHtqBsCwMDXH6PjgkJQWqz9u6k5YtUpXQxt5NqqrnCqZWdP6BcmcPBJt5q54mS5RkJLefLsurpLUtKQ3",
  "key41": "e1Au5RK2hzs8Na6jyRtV7h4c4QoPWkcoASE2UVtRKRg6C5uyVqM4Uk3KPFcZygJJL67PBXqpzu8AZPFdkEWk1NS",
  "key42": "2Hvg34iX7q7xyQ2ksw7hcCnN1SFbX31Jvc1vVyeNTYttH95bAZJUnWgprD4WnHYPEbtqrFXMATSN1SG7s1cGAhxm"
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
