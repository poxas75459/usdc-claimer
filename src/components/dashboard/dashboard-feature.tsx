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
    "48UTtZVEpF2TzBAafQ6WBnenkEebYRSnKsDniEdNSKF1TcNadfQ6eJT8WukpCi5FHgWZigaeH6148srFxX9vjQZK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bfnQB1sEjVC2KNZ1Cr4Je4fJ9uTy3ExxtuctyEkhpDBvqRUWj1TTmqXJ49p28pQLUYuXWFJoAAPZRYxZSHBF1Zy",
  "key1": "4FQHtAX8kRcrsVdpSj5trhQ9RAw3kQfwPPQK3KGtyzYubtLLSHTMTJV38uzHi34FE1jnZ7L5ynr3Z5CBLDkXqMa5",
  "key2": "tJxrLzhKt9bgMxfzQHoFmSzkRftGfThXYC93EFFMRp6iRm3JF4Qn8Yid4NoP1okoVLPwTdqBRvmZUMHxWKAZyx8",
  "key3": "Rtd6B56qKZrqhjLFCkVGXvBYx24xZQB7yrJdYqSUhKtwMFjt1mi4sXdPkT5dxwEorkRzdZicELettbwTXyMufNG",
  "key4": "213TpabXHoR6KkF66Y1puywX3g9ZEdqSf2z5nbGSgHkJVDZskWNeMtugcP9GjyETtiSmTbhsCGNkDNJEULWiRUQK",
  "key5": "4wyKvUGoXaNchzMqZSay5D9CfvwBYuvtnCteFrkXKbVk9DCqHfAoxVqe26xCmMsP96a9GrvDhovqVdvPF4puNJgW",
  "key6": "5uY6T9JGFDqjFxn7ARG48rghBkjs54Th9VrdGRVTQ1Cmq6X2c5AvVs2dmsJgn4Z3uUkJmZuPthfV9czHm8HeJuht",
  "key7": "5bYF3Cz4Pty9cxQRxXD7YAKTW6tn91U7ewa2M73FTQVUzrvqFXYjkf4HH2oGQRProTUe5CvbFnMoHvvizvZviAh4",
  "key8": "4sSYLziHUpZP2YC63oqYEgRjM8EtkfMiDL2UcCYkdwt12wqAmSS5EzJWRV45M9ejRkxXh1EPZpBzkhZqXF4re68t",
  "key9": "2TbHYtq8LZnKbN8Cr89cQGfi7n7dmHtKUdC8Qhn8vXieLazDDryE5V3QCPuaNThfPDFtgzPuPFWgGBdCJZTHFyb7",
  "key10": "NbXwdRpH6MRYM4aPceyvq8z3VWrEwYEpvBecdzxNppwAcGCvKDMebCWVDK1Mi4igfa77WVHWaftbBSxNhgFan3i",
  "key11": "UiYMiMVEQWA3Pf9W9d8vynbjgUmSkkND7hVGh6URLa8cfkF3LXiSAY1EH3nAmu5KmderYdxysqakKQqqmG7NdWd",
  "key12": "2jxjvz89wkxjEKaqW69DdwpZTUZ3zBQk5ioxjAMfxN8Kr3Z8ZEVLU1r8a8TMPAzXHq6mXcwPWKhuXUiALrSBYzDV",
  "key13": "4G9HN2DQ7Ddxt1HvooJ8nCTEpZWGmjbXgYffQQxXsDRggH2M8dciL37p7GsyomJJUKaLvatbbqfR5SjzNDjHyTwJ",
  "key14": "4MXzNvvFn7ifVGAYzrtgpYTpH4V4DRNJQgEi7cduN4FQWz5qS3FLTcqDpW3aBavq1FAFJKgzXC4D9raB1BGqLiaP",
  "key15": "Wkscwj6imy4vqVsMnRHJFcQyA6aGgu1VziKZGpsrTSQfArit12LzjFr2dAEWq1i2erDvgoEEi3a8ZV15EmibjTa",
  "key16": "2x7uTvcEpArQkpSTM6zUJEtmaABbcMYS1xHXgNfv9uoJkHTtj1Rk9t96Di272uJaWoBSwt9U5Ag1gKsvSqU8ccJj",
  "key17": "5jYZj8kEzeCJvHvovP5h4xXAkkxR9rJmBY1EBZrVf8ksqoS1kmidASDvdzDQeK9dhqH1BHv6wcVqc8KyvAoptLYM",
  "key18": "nTD2fA3wFkENc5RaJ6UwFgYVcU5Bhzd8vCy8piLj7EQYdwKywiixhFt5VTMJ8uD4BoPJDYaprHJsjX5Sn4co9ns",
  "key19": "2bpxSa5LZFsBcvc6Hp7bDDU4iUakuUVx2cavQnPe3pk6b6FM2676ypyaVjEtemXcCyNJXrVsaK1p7TfXcsJdgiMj",
  "key20": "EgdMptqmYPwXRCcNaxwt7QcHhME5NjkZrkYCctxUw9LQduPYJnEZkLYVwkfBSyQBSzFiFs7ThX5ijWn6NxWoLBk",
  "key21": "3b6irzHrD5un58yUZ5zKZeeSjfi9udPbthSGPiRKmX5ZwWNdmwDi3mCW6WCnZcEEEAJHnvdFJUXwxi1WjKUNbYGw",
  "key22": "39SVcorBkvknjwJcw1dWucAjdqTkbDwupevCDxqink9LL3C9NJQ2ytqXKBNYgPqvNGRYBUBkfVFDyD9SVeE1A2c",
  "key23": "2dSqf4dWSDHzVgjKajgY65eoEU26rVUxCEPvT6vRvRt8CzCH16UdnxNQf8utGRsNnW4GryfmJVxggqNUAZuCJmgz",
  "key24": "63aeeecempY3bNyntyaL7FwqEur4UFJooNComqFisob3Yj74GYrPerus7iwhMmskuheQrwoVJC6M85bthMHNc5Cc",
  "key25": "8J3iuTh58TU8j5WHUMwwQ3qQe3GpSqHrjta7iqkjjRyssn3DgE5XjXiyZzzuwhpryEy4dgst3Nu1NR1mZVzmxxR",
  "key26": "SdKNuuQUNhQNRD1LdN1GdxHsP9ue1akWTSK1H8hBDssKSannaB7HBcG9y4aNfyoygKcBrEVCkCw22QS4Cp2CkUu",
  "key27": "5PLeHjeFcwjkKYJsBT8akgz39HJLZkz6FsU6DCL2yC8mjt2LQVXmCsPEJ7Cd73fkiC48MHzdqtyBcBjmJ3jsd8SK",
  "key28": "5d2ueytbfYJ1gagGkg7mi9ZhgPPrpwzeboJh4hbgqEKHcipvSMvFcg9myWnXj3h36A67yKYiHLgnjdsjETqJoXYJ",
  "key29": "2LBUAtNpCDQUoHyKc3tZnFRy7Z9HEwfX38r34U6zav8QH5Ci8yS8zyUUFhkCZXXTBC51eJ1E38LP2cqy67PW4WtE",
  "key30": "2Zhs1c1n8Be5MD9mzdXzmaYLNkXggnqhUofifEqjxpoWN2US8RMrAcKGgnWgM5H3Xyn8EvThTDYMLFSSz6vJQELC",
  "key31": "JHHZVftE7KR9HMSf32WHZuMu9KLXwokTNvo4msq1GCkRBASF8tt7uGepGzS9u8DJvVnznwuKzzoERrnXJ6C2bJA",
  "key32": "5FAcWWjsfCaU5B7zkY9iLAbFXnbaq4jKm8yo7WJAHJAWTAcCHDBYphYZx5YB4qdBZsqLW5eRbP5pt5sP1Cs7XT4z",
  "key33": "5SxRZQyotZoo6xmEngkaftYPrefktLLmbaLYJPSugjt5GgASRfgQgJPoRHDHXhRvXhr9JwZzu9cCAgCS693XtPWd",
  "key34": "53UHS4Dsh3BYvMFVggmntwyz8z7QEZQiTJ9rGkRxNrthN3mrzYP2hF4cDT7Ez1eHxpAecTSGSF1Ss6k5yGheHZf5",
  "key35": "5AYwBcoiPUfn55gkvDj1H6TJU97W7BetkC1BrC5UaekR4ETTWynSEDUKpzew3YJZYttj3UmXFtHDakczW6FYvCFk",
  "key36": "nXLWp4hai2stqxBZnfedhA1SW23QWTbsCn2GwRg9GNzv6JaJERoi7qyHLqQrDmYUqDti41ntdMwmcXh2aKLPpYZ"
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
