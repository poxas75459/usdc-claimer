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
    "5HEW8VrFPRspx5i76BaYGhyRWkWzM5vc2ubqw6Cktzvoj2diVAgyjFrENdcTd1qg9jrBEcoQ2b27pZuCvFExezZc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42Un9FVFb5sHM74iQJDvQLZoxLLTqDVeYmPqnWkJUmYzuZszqiiT31dnZYNjjZqwgNuSABUQhdBJWTap86Gqz8g8",
  "key1": "56FkkquY7QNzLzYiGLBYUSQhBSMBAQidrE2jy7X8g6reu2oxbSFP4de5JoTFEpKNNZyUUozvaYE44C5zhT3Nz6Sr",
  "key2": "kNQMCMJDZDQfUZZHxaLwmqi431tGmVxqnQqjtkV8wy86VLqpNt3LBnpCSa9XM8sfa3XAE8wbmvubsEKLVNkdfRd",
  "key3": "4Nyhi7ydsTqK499Kh2PA8AaK8s9GaGqBpSzY2QvFvh5Zb7vnRBcVqL8gs3aCVS2C9i8Ma9SMFysDFwMY6CCWJpjR",
  "key4": "cbR42uYhsbSV5FQ4RhgHMGvkSCYEoq78cJARXHW7NrUJDT9esAF7oF2KPtBsuByA8J8cWDaaZENSE7urBsfxdvQ",
  "key5": "3jZPcHPVx47mUgDJhLs5jgBBrzV4tSDfw9fM8H9NQiUXx5y7HDtJkTohE2HQEdni8JRKzZUaxJ17Kp9fzLsVzvcv",
  "key6": "3Vu8hkmGXxmvMrE5FbR5tsFhMydQEyCyHWcAYwkWDnkjSpx4cPCnp8H9P4hc3ZRLzfQFSX97BvN8hxp4KTEi7ZoR",
  "key7": "4befYkQK3Md29W7Vdn3yeRQiNpzrPVPHmBQXtFDtBePjBYaQfedFZjNZKB5kK2xEpbtw3hVrXe5vtSqLXaJMUwL1",
  "key8": "ytdroLzn5Ff23JGwfj9xDXE6SAL3KN8SYjHTnJTivv6NjJ3VHMztYbDCSsFtdH2zvmLs8iQBosgZD28c4kvUiDG",
  "key9": "47CLQ1UJYSzbwQr4swYFH441XDkncn8wQqmumKXAEqHSLNmFHzmkdWrsbzKjCksNByPb8K2LBBTJAqf7LNLRP3j9",
  "key10": "3CzydxHf8FyWT5RmGzbgDEXkmdGKjgksLfNzUSrHBXYZWh6GrTi8AuQY5HhJYbtJvnmQA7JCvNQq75Lg3FMJk87W",
  "key11": "y3dp2nxkZMhMQWYRTTAGCmV8uUdwbSnfrVgNxH8GfuZbWnYWRPwt487JDDmc5VD226VhbrgxNcPbbvy8hpfenaX",
  "key12": "62Z52oobsazRVuJ3tmkPqboAk98TFacUGXHbgMnLU5LH7qT82ZqJ36fDwGWpHuk7ccT3LDAYtUMzPTUr8JHVHX9j",
  "key13": "3cN5pYb54XptuccyRystsdFNd5sVqVybUtXw2TqcSTqBibs8wF9XQ4UV5coTpfd723S4yXqA9vBtmKx4yKT2t9Fs",
  "key14": "HeffXVQEfBk4fHZ8ZnXf54Ziq271vzwDAxiXtNaWfgj67tey8XLvp4Jz3UjzSxLWQbj3CSXCk5mPDr1h3omib9J",
  "key15": "58vkkzA8ocEybuiyz6DkYXSBmQWnkh5MRdz3H2rM2RPtEUFtSPW4sxLWSmmThVQE4xr1Gh3qPJ7GY8kJrbyA7X5S",
  "key16": "2imTMee2MdfMJM12zTdrQVpzdsbn2YHdd4FCHpGLDGCiq2wpkk3wpzbK9AHZAHhPGh322mDtG1thw8qgVcFHHbCx",
  "key17": "uNSroFvuTbCv7piGcY9hUB7SToY8Q1bVV4JnuwKvBXWCFy2P66vG8aibZ6wdePRUfJE8AkXzsLaQFGibczUaNvq",
  "key18": "3Ynjvdodwi9BeLsyJywfHUU2ZeKds9LA96rNapTWoy6PzxSKQpKxcGF4RHUdVvRA6pQWW351wUYkHHqxCN5PtSwr",
  "key19": "2kMcHVbu4MyZd1G39TQvouPYweFUkGsMtJpM4xYiXe2DGMpyEcdFdU7pNYpJkKFiPYAPkiGhgB56Vi6NTaQQHh7Z",
  "key20": "4RYduDYrS3gzTXxvLeqNKvHxUGwMW3GSbgPZRvuQ7DyTQaoyjJWEcPSD79ABNHGrvwYTec5psrxLjc8hXwH8AL8j",
  "key21": "27ig9w5hMz1FmzpEqJLwoffi2GA6TDzqQTfEQu44fuwELoGeor6syQGofzvpuJTdAaKx59uxMLnZ9HFRtr1vMqhp",
  "key22": "45LPHfpS6tF8Q6kyBKKZSQWa8BbZ8zg8jjcXoZW1zM4edFpxuACDNEkavzoK7NQDUv8dAUSTfFKZPDmJ17SCXsrZ",
  "key23": "XJ3AbJvPujaT2tP97RznrffLVxGbGh6A83dnLuJDHy73rfWZqDNisJUsvR4GMdApqu1qPJ1XoCc9D3xjrcanaQf",
  "key24": "4Hz4D68FEwdAK3RNTRADf2WrZb4Dmhe9RMhREScXEjuUuofw7mKyRPXnFx2iKc6EB5SbZ9DUoRPFKFa5o7XXKwfB",
  "key25": "pAH1HfawenzvVvjGL1hSp5FvjbJdHuoC2Ysr1jGNGD1mGR68pnkSFx1eqbY6PqWQXvFeoNC5m961smM2Ti1LHa6",
  "key26": "48SF6BspH5gRggGZB1Vt7xViZMZVbFYsNq5PEM3AE4xqCx5m8G4aFZ76E3T3YtgoZMy8Loy3jR7RfeKxg577R4Rm",
  "key27": "5sQghy69P7JRJoWgfRWZi4wR1nTmNrwswFM2puAqQcsFHnMkA5c5eF3mdf49hL3fmy9HYu2rcfo5CDoKMu3jtKZs",
  "key28": "5trcY3vYVJF8UruPKsSPZcWDHApUDJyWeYk99GK24BtD12dZx9zcLAmW3kiEtdpgRT3vqKGi5xdDASEo9UfSEdWc",
  "key29": "2deVKVeqFs7eVtDH2bBkji5VaRKRZcofp6CjK78kzc1nhKGub14X9nsq1Ekdf1bsm8GUfSYtfkgHsajqLNidvHq",
  "key30": "4R1p3NrC1g8F5tqg5xH6W89hqTNTXruMeVcMZfpvEVw9ZJdNJTrFWTPmMFd6d3rPGg5QGFKtJbBikLRQM9JDWWD",
  "key31": "2PFvHRSr5UQMkdU3VoHZ9pnoz61yV5ZEeNkV5DrUTgmh7uPv9z7dWco5EN3g5NfDST8xabPy3hN2Lv6aJi6Tj829",
  "key32": "3h3p47DuQtmTa56KFNhF8aijtUr9i1zZnyBe7aRrrN4bWEtGKzxovvVnq7NahUVWKtdrazUSWiwfscc6E7FGzJGC",
  "key33": "3vBm23b3o3oJQzyYNNeK8B5rHhFChH8TSyspZeqqJKsWsuoNircvZdX3Fhuu41gjBkhhEnNyRzqHUUbd29owTqZs",
  "key34": "GMsaE6yFZViVKzYdkxfVuhtvRvCL2u8WEA5gsZs7pVjGCZagNsFt8j6Lq9sq31HjhqgVUVc7tgfDxkjqtvuStxt",
  "key35": "2xF3eqrZiwYWxKh8aS9rEwxy8TMJzNhHJVNYMMg47UNUaFipTpYBPuDRDZkSLrA5AMX8QkDuj6A5Y1pDHH3d9ys7",
  "key36": "2hxhGxj2HPyQZVxZY2BcesHVK9QGomW15VANbVeKgafNY4y7u4qLQphDVDgkSitSky2nxuCKiFjmWvSYtcyGoHfG",
  "key37": "3whnUqEHcANSAwvzXgHyRqkh4ZHn5vwV5zdvVsMLRdAnZSi1LDia9x1ZtumEhDhDKniRnyBs5yQUbiMiGK9mF47R",
  "key38": "5cfxccDmgky2P8F1rFEGpaSA8MrWTQZMdwkjpHdc5mxuCAoXZo1YwRpQupGQHh22DHhbuUpLHhqzGTRxDjkqp9di",
  "key39": "Zvs7N4j2KP8oFvmcd269Hh4r7Q5uKMDzmatjCQsnrcNzPX93i8f8sQwgA9rLwsDSdNhbJERiPCdGqd7Z2M2L5sZ",
  "key40": "2XPmRcnEbtkcZdg9zN61N9EsMhtrMuq6QE57Dem13zJzG4Dt4gMq3SDWnCXDMva123SNjoTA3ubsPnvyCoQLxqi4"
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
