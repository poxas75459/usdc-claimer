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
    "3m3DKYQ8nAhMpHDKJcm77VKSEw2PUfKgTSJ2wTG2X8dCovjBQBjyfaSTLXz4igrptoFCEzimvnUXsgWDkcPvujaJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jhfTTP9feitmFjmXK5g2cyiimKkxj75uYecvntucrWAWG93gGJt1QPevaREGL8gmL1st1egmxFfqq4HQw4c5Tp3",
  "key1": "3X7RduziB74b6mWDYNxcuvzbHjiZaif8NE7KZk2CGTnk1hDmnsGZBcYNaLTYLJtW2a6Gzs8u1xyECNZiijNotH6Z",
  "key2": "41BCzmLR6DCwVjKFvY2B2nE4u28sLkVamhPSmhuZ2RH7RdwKTuLZPgq9vdt4JMysomWgVAfHZE1jdtCiCgXXqths",
  "key3": "4cmCyGb5MgWUsAaTp2NhvJYbhDXNypwHtviVbozhdHgcMTW2WvNWc4kJMZqTyrAPJYnwQNEGDAdwdirV1A62b89s",
  "key4": "3fpMB5tm4RSfTgYeztHEZXsvRU1MVvnHgtxzcwTbm5qsT62ThSP8vkqCwSmW13xGeLQAswgQ5qJo7bmyzpHFkxJ8",
  "key5": "oxhajJUMEQc3v3UWeyYag1ArS8QRrMvX2AmFy1rS662SpPo79ffT8HtWvNoGz5NhHvwafMG3qGHtRiMrZqg3gvu",
  "key6": "3G7wJwUUyJKfV4EcDEw64qc1J72Bvr8g9WmE7ZzsFkEDGLVB3FDuJHmoFJ8K7KNeZpqW42cAEe3kUtT5DWh3TmWU",
  "key7": "2fpVtCgvbNCG3AKiU3U5ewUHQc31hX9Fnt5dTQD2soQWifYBzVokhFymGjgczpH6xQaQNyePzKpMXBpaT49AyQKM",
  "key8": "4C4VJNqE1gMyMoXyLwq3d5pqqUF6bBPjQ6Z1bz3a2jw5ELGrq2oQ8Z111RbjSgtSpMt8M6yNDSEmrkmp5iSutkow",
  "key9": "47kA48V7QN9jnyZE1huzvrwvvc87a2iRfFEd6DKEN8ka7qGAWfPbtPb1bLrCtMoe7yEi2kuRxbXZdKwmcNGQsxYH",
  "key10": "3DVxYQbNUeu8bmsyULMVZNMiBZY1HC9LXfDHs9zFi5VgY6PJy9ctie2DWVkbZCy1YtCQCXqaCkBt9SL8s991MiRg",
  "key11": "3kCj5AnaEqpkMeRx2wttXcFcNbycPvaf4Z7AGUL3TmEiy9yfuSzxVZomHYTDyqT7GSxcK16yyFCg33Y878yGxpbf",
  "key12": "3NQBSjTpT17PbwPiFKTnGkyzj3RQxsZ1Suk57TWUUuf4MtWqocduNtSNGAmZ4qxYKBZSDfgxD79ngeX5dJUNWrtK",
  "key13": "3MiMnqqGFSnyFBxKYmNvTiTgeNF1xe9tKaJhBJ6STE1Ur68zbgC9hMUYtqn91QVwN1y91zJmASUqLcYYFLcKwf1i",
  "key14": "4nqK3bdaNnKUZygkN4eqB7P8j3xgsDdi4G6uY2NDGYFsC8xn59tk5TNgKbW2Y6gwcFiv2xJWh2eAVhLVeu4aiW6H",
  "key15": "2UEgmcKSNKNNn1vMSAy4zcwKpvZWDgNsbJWkZjjrQJfEoNkQ8FQ5GgaHDg6QffE1Muu5bmsBr9dSHukT9byBcb6E",
  "key16": "4vZoUswvaY7AAQJ5WTNS87AsqEbqrteqWu8wmSvBTrvp9ebVeuisAtFNLAmmSY2PFi3JhcMG6xNEZY69aNDSvrRr",
  "key17": "4ZAFgmHypboq8aRxLyudVVS21f6V7NjHFiwFy4TgmGeLLnPNbeQ1eSwPs5AKjKebm6GzapbSzY39JQbdFwK9Aj4D",
  "key18": "5j3fEoWcfkEiyXxkY3A8Q3t1H86Cdu2mNvP71ty4dEo4A2KpMKePVLka2V8yrg7SbQPZ8NUTgFNW5LfQkpBpsM9C",
  "key19": "2csFUPVYcvF8GmAZA7NV4Ni4s9zKTbSvzNfkT8wzv4gJMew4KCxqW3s457xSd9WuESUdjzm8Nqab7uedaBc5kYqt",
  "key20": "3GHxSLmiBBNBya3x64c84VkfaT5vmQGaa6bTCGtSPcUY8MBCbKQeCpbnw3gTec8vvp6yhu7VqDhYRQvnV3LcmAQU",
  "key21": "3zoTEjrN8mUT8xaQTorsmPL9xoUW5BvgjqX2715dYA9PCNfoS56JprbacoiDYhRViEEaGKwAqqsbP73ux2Eee2xo",
  "key22": "5TeitCMoYN7ex5h7EnQ2CDhhVgZ9E87BDXxsu8MVrnS1bAs5E8BTeYaJbuwxydUb2Td18kwfzUxfDfV1XH7mFpd7",
  "key23": "5mUM6dDEGjVbbU4fJ4ymxvVnfsTBJypoy62oPMa3XmKQ3C1W2t3dV7krLNS7o8esVjprHp2dYQX3pGC6dBmAN7wb",
  "key24": "4rA7EkfSPCxDSHJmo4ZqqtJJMz24Y3B2AwME9peSXc8qSw2bEshytfTq9KLsFChGrMQJ4LhQfWE39hWM3jvM5tDE",
  "key25": "rzhSh9caagMU9NJeHuxNKVvy2GiPf8WHNwKKvj4KGr1Qc4Wxgb9dAfeCvdxeYXw69J8z5KgcEipRhEevtfGJ8mS",
  "key26": "5C4gNet81yg1d2FqYTryHCWfbwSdCJuXaPUdBzMapRhB9ir4SVueE3iThFgkUEezYuWwvjdgVjDHQnJjNcKoCxva",
  "key27": "2HVv8MnL6bVD3ABfhZDhTQ6pnD7gFh1pG7fdzMZdLcgUtyUR5bg4izaUZFz8rqvVg2K2RkeAEpKpSoFxtofvvHgv",
  "key28": "3MWTAe85x158xoAyLeipFy9xYsjEUfdvfnFa4mWr1GdzHo13vwT3HeWiyBEjNduHcqMRaH1c66Hrqyz4KTSqMYYy",
  "key29": "aqKsAA9Nci7D3SX8fDhzr5gTHfLHpEbPBqKECWJrKSh2KPJKrJwhqRK6VgBjiwXXhunLH4dLS4ZvQgUYHk8kZze",
  "key30": "3circp5iyLsWmE5zS5qpb5RzYWpHLrebsiHwmDMVbgk3kqyZHHMNRN7X6Wa1Qb1Za3KHGXwWASSuYn7C6GAEQTik",
  "key31": "dcSz3oREMu9Axas14bK2dLdXrvGUkyekzPegi5oVM839tn91cgdvivDH2Tgu5dUxWgcVFQjcKpU1x9KyFHmn1Qf",
  "key32": "2Wt1hKjsbFetWErpKNDbrrk9GM8PjSJQnVbjRsGcTMKPbGT6e7YYEmyK2MEZnZv1sspB8odBk9vPFfe7vNv6ATY6"
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
