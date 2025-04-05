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
    "547xdLBz8W1EhTjhkwQnEcuoQSmxiDfMwpd2DYHfeak4EXGZwGFaXZwbQzUMFqtsXzspcsNXfErXjY6KaBxbwMRv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2if3ANQ2vUhqBZJNYvmvccaYCuZxkqcQqn4RMf1HnqBed7MF4EZ8MRxcuwqVwrhvVbbobxjGb9t3so5834MnPBB9",
  "key1": "4gYm3jC4o7tACUmGFE82y9CpYWQ6JXtT6amLRXnWD5kb9PVps3V4beTmZMnphMH5hrGcaYwUbZ8RVYghKJZqhFK8",
  "key2": "3EqJ4GjCLhMMpGm15YJFefsQd4qscssHwvKtfTTdJYBv7PeaBZNWqszgfkobUtpH7uPweXvkPytXYux6BxAg2Ppu",
  "key3": "5hK84JaQMSUYFYpCqNYnM3XZsdRAGQgQco4Fg7x9zWWqapthB4VQQuyxwi6tqWTV3wBixMdCz1ym6Jfho6ETqx3X",
  "key4": "2mfWxTvDNp42isRaTF5apKJYxpThiqkvtkpst1txoJLK2fRmjCdyXQbWDcb6jRwYtNCpvZ9wLDoKfrkkWrw6MvsC",
  "key5": "4Nwk87WmKgbfhwwr42BDWgLWv7kSLJwPCZKdEhMF8biZvq9rKX2m2wVZT7Eqi1CzQQRsa7uAKqGtvDMY8tYqmjm4",
  "key6": "5YPMHKAhfaCMmqwCqciMem3GF4icUF2cipRqenTftmcyR2cgDv4NjYCAcH9NdMfxpd5yTTxthEHJi7JbKt9mcttG",
  "key7": "wBYfjzqo4wWZDoixc8kucE2dHaVmpAeh5Bc5xJ68RwUukDkZJBgGx4YSDab6kj6AU4MrkVTLp4JbC4yk8sDWK91",
  "key8": "5dKU4ikmsiJa2fhuDPPAWEEDrk2egNnyRGkRN9tMu4Ln5MdQZKtaq1QJS7a3KjFZCxyAc5BBWaoZMtKEj1x9c31E",
  "key9": "5MESt3avyzAFS7A2smxkqedh69Mo8B2cweom7gYdsTDaGqNnSVyWB57ZQVCqv5BzLG6t8D7AZumeMfdkYKQ9Coxe",
  "key10": "4RN1i97BqirvogiqwnQjRAJoMRw8oN5C3iy5YgnsMmBhZ7RpXeP5nP4k28uXGf7JiSq3eteK5Xb8vxbqCYMn98z6",
  "key11": "31KUqddFvRQww8NMQn896g6ANA64sps3GDVbKkFjxWSgKGjyf7jBkhm8dj1MURnX6eh8iir2T8YCKxCmWCLA8qAB",
  "key12": "4Y5hLhMyt7wS4yQAxWATdpUKJa3ada6uynnj8hV9S4bR1fzAPdV8JS96AHFCdLEtS23VD9gpUBxTqxm7NSNBg1JH",
  "key13": "3c4tHGrRWFMMamMParKxmumpfMEFvBnymbiDkgAigkHrMrfcj6ks3U62om2oXYSZjKxRrzv1wUpiuS8V7fYCNTzS",
  "key14": "3Bu8ZVEvgNANAR4W8vPJ38Hyxgq5dbA2ZqPaKmEq7dCcZh1wCjhbQUJepJVhz1WLiFaXfZyMbqArePvdAY9H892s",
  "key15": "2j5EJdgvCeaDsUWA1xZahQarZgB53CWhdYYyRp9oiYdjKrnNvULcWcueKc8rUHVCPKFEcrnfvq3GhCbcGWjn2w7P",
  "key16": "5nZLbexitMf3h46KzrmrJrc5b6x5cvGbZ2UKhhJkFK1J1SAa6yao6iXMKnQNEhZaDaVX3QP8VPfAqhfZBExRsKV5",
  "key17": "6475QWo1KphPuDdnHe3QYdVHFpackJHp8demdV4m2DTzj6VW8JJaReQk8UoxagdwwzvoB7ufqWvEwek6bhqyv1VE",
  "key18": "5Sg3fuVeYRM477mSK7VGkAQMMJvpAq6SEfA5gWtssXqpdP926teKB5wQz3F6Xdy2b8w11wMkQ1e7e3P3ZkJoT8XZ",
  "key19": "4DNxTYCUghpBARnTsZb5PjEwR7YVu8whTAr7fPasAoZKik8xh1d9FoMsDMwNdqy87n81kvhCZ5p73SD3Hy2EVVk8",
  "key20": "46dT5HtVNa34T8dbakptrnisRJqZpSytpW3wiMCqgQdGNJDBbo96xmxXevyBdYN2tHXFfF6S6HZNczXsAQrgBbUX",
  "key21": "3Ejr9DtfAyb3ajqFiT6sN3LuP1vmns5VnRQnpaujxg1VkK8MEbcZXteEN3v4DBCsh48mPUaosgaSQJD9RmhfJBBL",
  "key22": "3GjMQMhHpCr89vujMQaZ83aUosYtYevrfQzQ2Jnxe4VwAENf1UAaF2hQ2e8B8FshqrwjBURYQH8LZQpD5tghnw5L",
  "key23": "37Wsnewv8wyHs2tTPbTZMWqzkXHYvg9CLjpEpK5CX4bv6nz1k7QHs4We12KoPsEmqzNEm2d269gF1fJpoy1BC2nM",
  "key24": "3BLSnbHZivQvhJFQhdvX9K7n5zXEJKvT1qFjabSrgZiQvnXwny3YWPNnjKzti2hq949EFKnvxiyfD4ASGGR1uEPn",
  "key25": "2kKVpNQkGMrjwD4MLpSW2rABNrmEYWu2aCgqnZ95fmoCL2FTUmXAiRMBdbqGEYwt9M71P2eKHtwprLxkkoCCBBfY",
  "key26": "5K32YHAq7wKD52trCkomZYRSswqDxHzgYYmiCzNoj9FFApUTCYWcQaZm9NXQr2XgytS2TSy33pEdhsASHv6ui99A"
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
