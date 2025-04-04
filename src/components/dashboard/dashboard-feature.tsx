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
    "2rZcoNZE4aYgkk2QtpfueRTyQsdDGe9oF9hXqWUiKpcsd3GEQxycmaf76mWK3ow8otGWQ5XcxHrXQr1EybDsrJHb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46oRyEEVtpF5dsuXvHaGJzpNiUGQ42p75ogo9PYUF8KYwmBavaytt9cGLPpRiuWqKWYD8NydiQ1ByrDdSvuNK9NL",
  "key1": "2QtB7Y7dqdmQtrerpuH2RWvdkZQ19h3yFjpEtXKQciQdbUWMc4Jmf6JVLy8GgGkL1KatfCyPZVbAJQyfSSCYa6R5",
  "key2": "5x9HiKXu75X5ti62WVefVvaq6ygJ8xToPgSsVrHYpSkY6zJhucPUfokkS2Lw2rS3ZmQn6qa1kkgy3jEyfANJcbe3",
  "key3": "5YwBiPR77jg6jDBiAeNQK5Db6Hb78gvER16HeWUpTv6nYH71NyYSJjJ9vrVVo9F7w71QRmro6qpbJzxXGvqDT974",
  "key4": "4cFMQ38z8Mzj1veuhhyBddTKnKSo2cuEssAbrTp5KcQZHsoLzj8QLYPWeXRNzdvMohNx3hEyzCKc8P577a81Bntg",
  "key5": "5aNJC7GVvoXjg4K6xLAbhVQfQdEAykabG9Z71NBMMBwEWNy52PJNCokWbnMexk6cfBRToLoZ7LXBMQpKFnZ2F27A",
  "key6": "4urZXiHexHicQtGNkAqnWzzP22QjH6x4CVqsDNMohjahLSKu5j6zfUForgAfjdGmGnjfn8kiPJT4bHkk9J9XKByE",
  "key7": "2EHVwnj4d6REhQK8gYzmdFwNW2TbRnZQYVGdm73bdMUJ5BWmZWe5oD4gCmtGLErGKJvXWq89LJbHDyjwVjrr6q8B",
  "key8": "k9XAjXdsrCTj8dssjnGqJLZxYFJCDBR6H5eb6anfKHc4Tmw5izpG5DdtQawxSFkJoqZeeY5zLGSJFd8JeZawWfZ",
  "key9": "3iGYSGVNPoSgNoW8VUdMcEBXkpG8w6WFkm8SuxNyu3VZb7Bhii4ZbnUfTzZDajTNCRobfbH3Wwuw3SdhBWz5gRkQ",
  "key10": "2hhC32q9fFZxLy7QSjSSjcmM1X8abw9qP4tAeY7ryLMSPzzv9bVtkBv9DsP5bgSRhFNCQZsmrvk7anRNW4t59mSj",
  "key11": "4aoAv9NqAj2dvEddKBLsvPGxAAHsGtBFRhRcrhp5CU4pNx1CjrFjZvPWsA5cirneWnvGex2b4x6yCeSv5mq7xYXA",
  "key12": "4G6c5T6c5FFW9Xy6bua9t1VCH4g9nUPayrMYMtRUHaocHgQ4LrqyhtghZVAejighNGQ3WzqiaYy3Hs3YYoYjvwAq",
  "key13": "GfVkFhrjJfcHZJLv78ovskSpTsg8pjbeyFHAcsotRwoe3ySLHXiTyt9oh36H3qqjMFf6LStiwa7zR3sVcAipYfi",
  "key14": "4wLBSUq3WS2QMx6JeYr4cZDkh7qGGjmMVAxHSaQeNhmLDuXGevwwhfUKLRnAXkpvBLhcDnn5iEA1Zw5AKVvXhCMv",
  "key15": "1w5BoV2Hby9EFjrZGc7oQemFkNcJofRwmgP9ST9fCDzHAQnfqDjCLp7G9FufjZzGFVjwbtJSnaqxUUUs4vUye5Z",
  "key16": "5TeDNuaq3dFmVPnZeWFxYvsJ77rYNUtro836323k8fMCzt22fCHvGPivUCLshmzou8AHjxuzsTTHFU5DP22pZe5T",
  "key17": "2YYX8nSQtEEUvJFh6P91RWSet7mdqDGMR6jsmjbUEfJ1AuHNYd5Uptm91fdP7kbK6QvUMbrEETMKhqny9g1UkSH1",
  "key18": "5gzXUJvqFYRr4Vu9S5fkQW19gDXaKzum2i25LUZC7ArkkNiqTAenBiy93vaJvEWuG7XnuRRK4kaeNVNoBXmwP5ZA",
  "key19": "wwZMvwCtMe3MU4XvGkQsFYCZ8GJfJ8S4X45ntkenctrVqvY7GcHthN7iAEGc5vA4Ny8ZSRSJetjiYbUY36Lvmib",
  "key20": "En1hn2i4W34MBCrC5adXXADT3H3axv7Cm6omdFWLR1vMqrsuGRCeXdZXz72A1kdumMBTn6FjpDgKU2PdNe29w7k",
  "key21": "3McWaPJh8vkRMMMXGciCHh6bff5JByjeVBRbtARepuWMUu34rtLT5PqmN2izMqw4KMXCmH3CYPh1rKMEkMcnkLtA",
  "key22": "r39pgYrpWPp2eXTH6bV7XhZFHEVUh8tLzpjyzqHfG1NLG5YavmCpQgNUtMXX6XPR1oKEBsCtTqfiNzwU62ENaep",
  "key23": "5W7Dg8gKrVi1MsgSYnkaqXxXbWhabd5W57nxegzDesAEeP61SssCRBX4FkX6LK33ocDjgkpFiFuDVZTzWd6UixY9",
  "key24": "x4R4WxqauFfCZ5XDjtSrVW9LTnPWaE5VnYiv8NdAUVqWTffqHAnwzK7WbdNZXdpP6VEpx5rrG91mXuW5zoaiSEU",
  "key25": "3pqNNC1Xx6FwDfgbszcvBqftMUBJ1h375iSTgE9XGFgf2hYoVYuGSEfufmW2Tpd5z9vn5CoVCEc7e44iQUCuQdU9",
  "key26": "5eZgNbyNMK38A2zWFvCQqpHJRWQBxu1XTMCZ6tYrx6fLw6gW4DyJpJ8TayfSg1BndxHzSwnXTwY2rHixyCwCarxd",
  "key27": "Y1hZa8AcdQCuFuW1Yuny36GghC7Zz9kSqiRED2MzMTbAPqMYRYGMcWqWyr8dT2qUHdkDjF87PwNjhy9mc2CDbJH",
  "key28": "BDkJUkduLjtJcwWSehGUkzMrGUh6Z8r5S1eieacABqn3tVFMxzG8bCvZ2afTjR7qrUMucob3VLn7MG9G4wQ6sSK",
  "key29": "5grUW6bq23N6V7AD2TGJtTWvyZCxCJ87mfMBjAzSeaRA2xno8LserVW49Tn9JbF7bDdmwBezYswK4UuYABimtYFy",
  "key30": "H6yYt8kg4EZ2h77B8ovAZdyhV1dNej1mFjcxDEY24mFrMek6v8EcC5TBoauBVgUyHPBanFxHwTd8RjzA9WqjhQU",
  "key31": "u3UrxRuPvgGmD2XtARMhh2nGPjuqKxXdNKKVuHBU3t1YH2xK6X5K19PK5r7csLD5PUro3rkEtAtnY692YsnMqjA",
  "key32": "4pA5zdWqcZyt4PURQ48o3bMJFgw3LUyNT4aE34xychvMiLyv5wNEo43X8hx1SyPT7rjtBiG4GNXvc1QsPH2WdRuf"
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
