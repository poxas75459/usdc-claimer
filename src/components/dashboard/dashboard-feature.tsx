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
    "5tqXFa3BYT7DBCacZnmt7c9AZs6niMcfM8h9F6mCKVMmttS6bQfCLZnWBeVD6MLQiCvwq2S3P6yKEVzwy37HPeNJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Pb4q7ceC6jSf3mUb9biGYjBkBBvJRq2sPyL8EuFZUTmaoYxD2erhB6fgfBMu6JU6Fw6JXLYnSQbNvHuYRv1fz5f",
  "key1": "4Rm6ZfHhMTKxwBndB6jBR44Na3vEPfeb3fp6Q3BrfwD8oLMM7RjVL5Z1NpwPdgDTLVQfQGYjkCMK577XsvB9UezB",
  "key2": "42c1qW7YujMcUjM3QRnSUsHUZC4iRDAPdLHvPs7JqBRk4hSHxQGBZ7EpzGGHasmmFe63tGUxjEmGr1ZxNX4iaXa4",
  "key3": "62QLmDhLcynbenYDLFFUhBvqK7ZYeYq7g8N4JApzEaowaSqqHqYkm7G7t1VdUhvPTN432T28tvDQ3UXXnVrH5ERw",
  "key4": "2LowHcGHkGwGC2yFaDN3iPMXQa2NeajFhDwofEJtckgGFoVtXGBL6wQen8b1LwexfmMZLpty1dnKC6wiwcGPvJFd",
  "key5": "QiW9hZFBgHTVX5K6F2pAvdmMM8mjRYpGbDLWxfRetWzY6GuGaL2EgdKiM4gNm1AiXhrD5umxTqQCbyeis8qrsqY",
  "key6": "5DBPs2nnQJokcbNqLHEpEB5NfpuuSFrv323K2WAbmZjYPmh6onBd7YXVQpk6iq3YshaFy1xNPrdPJBqZUq9WT4Yv",
  "key7": "543u1xLkiobfS4PSr68B3ZBLaSEEVKiy9WxtvCEpwPpWBF2Y6XsWh3mRUL7P6K85Gm6JCjzz8HfPTgmFK7Yb12Ro",
  "key8": "s4JHjaMGDtiLNc1hXm6xYrTgj93P2kB5DeK5SDZkrHhQFsGJQjETCPC7zV4w7G8QxD7BjgUAWBmWJoUVeecj1rQ",
  "key9": "3WCfxzDe54nohaQhdvTRrZLhyy5ZZ9FF9u1MVjARrWtYBXDgDdwSsRxyt2D6XjgNA2gEgsfURgbRjwXTXnwGFoCL",
  "key10": "2KbVb3NXcKVn5QERng9a9m9FQF8FqYr8DLwgG3A68TeE6po2AjwdWrrbvwD43SveMM8Ms9m9ZrPp1yBYcHAbBP8x",
  "key11": "hwDdPNyRubGGqEMJ4jX92gqM2wp9eYUCV5F96C8MqoKfErSxbSy9JqiV9zhHs61JrQXY9n2RGeofSb8F53H76Wu",
  "key12": "3Mzqv1Ps85WbePCfZQDwTn7iovEqGzP5Jea6VVEA11j3rsex3tVX32G7uW6HicqvhQQaqJjUDGRT1RKGzxkEq6b7",
  "key13": "23qJGnZvfUhLNvYsjwHhZDfSL1mqnyvWqD8zoU68FRjUWXD4J1tzAip4xWPDmNnRuecjpqffbu1gF165WyH98dgK",
  "key14": "5RURQ61RFnbS421jYBm2Fw6wqRfE4LQQgbPGLMjputwJmwM9kZ168fXfXBo2hKsyVFSacMRZ4vGGu7Wwuk93Xotz",
  "key15": "2oM2A35BJXsUXGkaDvfPgX1muWCivPD7zhc8ie7qzCJHMLno3Hbt4RtAzvvbzfEofHhvPQCAfYwTouyqtAQJtfep",
  "key16": "2HJ4Mc6zxJYZDDhZ1S1jrk2UVaAn6mfmaXXn3nucE5KfN9jowon2mNTwomUDxNgjKumM397gf6qfhP4nT4JourfH",
  "key17": "x2DJnRfRteocFWi45CEPyMBrr5VYXxMJ5YvAE4EaeDVrfiPVEbqe6yQGvYAKhNXQaEUWNvwwumZdKGYRMkCzLZc",
  "key18": "5Vv42ZqgTJzFFSe1HykBw5A2JBXcgVx2YyKW7WzyT1vfHaY4UQFRbKYK3kk338LUfZp8wrEH9iqEqTcDq1aFxiTu",
  "key19": "MvXaDMeZSJWqtE9c4eeGz7T521NYVUAu5RbyTYnqJGx9yNLDRmagHbZZfdPPYFYtWkJfq5wUp2aTmkZxU6Fv7Yq",
  "key20": "MdErnaTfb8VyvcV5TBX8P8jmmwEvGoAnfTc7s8JGTjZM78tA5eEis15PmMs4xEfiQs2Psv3N8B1VzY5hZT3uSVR",
  "key21": "3Udeq3yeCCfPTqEVUMFwDTqrXgJXTpnmCGa6nje6QHt3orjRwX4jszS8sGyhBigoLWtMqQY612dFvyMcbakgapMj",
  "key22": "DUg6UdAMvo8DSR8Qw4sojq2bFXMEkinJiSCS2ARbz85QNGDCA9xH9iT8MHcwd5NK3kHRE2Gp6kidYa3J5xCaHL2",
  "key23": "2oZYojVEGx84ZnwwBd9FfTuHT2UM7rqAKZ3e9oBTd9ykCKGVoukZJK2CWdcShnQ32oTuv3PiE8c7mz9iX4Dfuusv",
  "key24": "NPNyzCzVkSSp5DB3c7QPbC65LZuYeZk6FEnj5Vfw83BS3kAmpFrUrpnqAiBYtrjVeGYzUigZ8L93iPjNXcLxSDp",
  "key25": "2HUtuFigrYBj9fwwhvRNYcg1GGVRhJxYbaeZfWxQECXKUcUJteH8B3PmujVMWAknf8Sv9N2oyEdqNiJi53CKxipS",
  "key26": "3ZfmGmA4gMDXmEkqViEPicL1sAfBcKeJVrrz9n5vCccUqyb8yGeBNMkZdd7XssMfrUpiid9DJo8JPCXgkQqTrsga",
  "key27": "672ZmKZ34oFe7BydXEFuB57WZbfNgEokALiNof1WajNUTuBsmHyNhBhSux2bKdPsVjCr86pNEEvGLn6hdwFpJ2V3",
  "key28": "FfJazbNoqZEDw8F9FXywKjVgyR6LACfssQmppN6tv9H4o2x7pAqBqALtaY9ysS4DwzHj6ouKJWEuUJPsfQsFLSu",
  "key29": "4Ecfh6nMUeeNQoYDBupph3qvmwENBsKG9SpE4R4yKSE1gFDJjxNPNSqsBsmL6Cd6FJAKH8ra8WC2mtLHagmGthii",
  "key30": "gihaXaCXMBgyktdnBAmGtCtgF23915WyjVp4nM9Q7FdghPQwHnh8AYLRTfdWmEDpDR8E4PQNXY7YuYa324TG4UW",
  "key31": "3pnuPJQqeXL5FBUrvTpnaXzg9n1Toe1YJriy9AsURYcFrFZP2y8kQKMTRN47PM4C7K42929gML8Dj4cdUFz26CHQ",
  "key32": "Zzg4DBswXkYQhphtCG6HMhxtYGBuomuMzFubrT1H35hTeWSRmvHAo2jLvh4V79Q51oyoLPAwyUQzNpsF9hUH2Pr",
  "key33": "4DddyPYMonzVLjHNJbWhFzCVzGZtg4A9fKXNKEzGF63ketrVCRZgkQDHgLqZSNtjJB8mozxJsRj4RzYkvinAHw48",
  "key34": "32idDtFgAPNbfkurdP7XjzWEW8KkEiWUmKH8oipMm81382fdkx6eCYvcps4xZqj3mdZktJZ3cQJyUWK9fXXyQmjY",
  "key35": "4aBCAu6D39W7s2Ge8tceveoDLraaHsubQvVrCCe5J9h6kfZHyFTaV5ydw52rU4kYXsMNzmfFwk4ettgx7cV3qz2D",
  "key36": "4iiyQRzYcKsLs8eCXfgFwXhxEUX64LmGu9aeGXuDLBhbfD3oZiZy7Cv9Y1AG3EeXzoKN8Dg22yinnCjP7QdVa3z5",
  "key37": "W5v6GWxJBa5UtoCmWFQbLKSmpJWSiM4LUSChhfFfP2yTpuHJ3asdevX2JPqMMhaWS5pcMaKyVYGMF6Lbw9t9DEq",
  "key38": "4vR98zAoFu9hSZw1j83suFsDvpK2HEdCCQEwTPBZFGobe8BfzJT16n5xX9otyR44broRnMCPMfpbbzFj5RSuMx2T",
  "key39": "41fXNVfMgYbGDk8NcBKu9q8R9S69pyZXrPfUsrKA1RQ3HrcYs9FVN6SXBx1zM2NLW9PmKrzfiPAoCZZByWN2xiLt",
  "key40": "5h11u8mfch7eXYf6ecXPy7MX7yArVguw9Xprhx8XBV6snmcfLJ8rVJKwJNVEK5e1YK1CKuiY63aUqhvsL7ygrruv",
  "key41": "2A3rVro8tm2xStX6Fokg6mvRfnA8FP91h9VFKShkcSPxBYCG8nFpgp5WJgZ8nLR7cvhAiUwNAr4B9LzcFd1j5ZUT",
  "key42": "5kwHSFG8bYFY28SqKygpYUENa8YK4ow9XQzLcR2G8pa6rtvhsgZAofhFiGAtuALZNaBY2XkJDN7LKtJkpE3t9aJg",
  "key43": "33cK9tcs5AoWyH9owcKLp1ymP1MLMfYJqYMFL52QoyKdr2Jejg8aaAuifriGYbQPSa7GsMhJV4y4gE55bbSSJp33",
  "key44": "5ugzeyxKzv6BMEy9i4gGja6sYurPG3ymwbFVo3zbDVVovPN29qVWjxyaCEBng17DsPs7nEEBf5YFaPfDCvRDNuux",
  "key45": "4G9QAn685xQBUCjvepNFR2EAAa1qmhu9aiam4FZw6VqbR1vvQy6gZ3EpGo5ej5yEz4eoqefaL9GVy5AwEpGBizdz",
  "key46": "3sqTU65MrPMThzjw1yvD3vFweGjd5bmsqoNH7JwGeFntkrJiPqS838j588zX26EbkQt3mJaqoGZtKKyfvDJ7EoHx"
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
