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
    "3HiBhpvmC4TWAqNPZzpqwihPr2TV7Tb6VAPyk9qTCEyxX4MxqZBA4PPAuyLrNWQPCs9F4UEbkoQZXphs2cJPz5dz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C78DSVceoDN6jpDFzDVBLVvbFgyk6w2bfJKK1pWj5tkWwxu5c9xNZYpyJK39czZdYS6ovVx2jAXsR8KASz1mcvV",
  "key1": "2GrrKWBTMkiWRTYo1YxMD8JuNzxkUTvULYVrLvSFWRDLJCQoVafNMz8WsnMD2t5yPLzLMJLHh5XgYoyNpY36BKzi",
  "key2": "5mtziPSHtXvv4qNzhvVPcPTbHvWTHtQzvw5Q4McxeJhzXgqDEYvdZssGsTaSHx4qdzR7fGNbgna81f9EcHE9drPb",
  "key3": "4TC77Y66uetARbvynBtFbwoPiBe3VWLvqp5E6EoygpuQwRFeUgGY1sCSPFaYBfEoJ3o2xJR5NdaJCD37ytwL3gUv",
  "key4": "4Tx6dqdDtoVHpHGvvP1FYkcgTFdKjF2qD8vbAQrpBAkAyoGvg39iGfRpamV8DWGJCsdFRdAdJUZQCBVhPjPQmo5q",
  "key5": "vxpqWNGi87bcCVpevfRs1QMHht9RY6rbVvZLUYxQozXzbZ66Jmh8TfrZ5S2sLq3zPwXCuBJR3rm6Pvfz3jBcyjc",
  "key6": "5SgMq9XPh1MY6FgZy2RrNSmEb7hVAEaiASNmZTmM3NwNTcydHWhTFcfPn7g9DdUNJBZKhb9o9EVjacmbNh5Z52TC",
  "key7": "KP5uoJDNkFqZ4BwLfZhLoBYNoVD2Z5WdHHxdNXybMHe3hCPZYh1317SSLL9xp8G4rDSiDDN1r1e99Vz255e194Y",
  "key8": "9XtfpBXRipvgB8ehcpinmVvdazdk6JCb2y27RkRQxSZL6HhZf6AdRBe7M4tdVBLy64ZitmKUooTCo9nnAjrzj1Z",
  "key9": "59pbeoher4BHy3umN29T1Xj1K5TC95WiuKnVkvciaj8rT6pyWCdCeLqcjqzwigUoAk9paxJ1Qb47RT9GS94uCtGz",
  "key10": "4Xkk7QpBkjrjqjv9BcWEjHDspAEVYip3UPtqkx6ZW7cFjkG673nRFZbLryqSR9xojvRr4nLJnEM5cM8BT48MtV4G",
  "key11": "2qtrXJBW6RSFDcKu6esq9rPntYjf6FxFb7xyGBtFiCgPnox5EhMHUjBW6Hyqoz2WiQT5oFn3RG7Psn3TqcSzx7Df",
  "key12": "2s5iThhenceMUnJCDKhqPZ2ZCJpn89iAkkSRDBUGX1BmoW9x36syK5qySbq1nzFg7LogN8HqFEcVYD7hxYKmRxFJ",
  "key13": "5sYbjkPmkpaqkMR9k42GAbWSuaWfa7UZUZHQ5v5gHy9DZuwxExDPpYeD5sCLRL1tTgGp7V5YYQYhCSp1QsWxcRYm",
  "key14": "53zYwT15v4EoKwe8AuY6bbUAQQsq4RJpXx9ozmSGaq7XzqUjJ6qAMDu9iMQfR6QMMMiiJZoECEvhZYNLJPdPi5Df",
  "key15": "3CusBbL1226YHV5zeTj4ytCNBMFUrjRrNyGuwaqMntUuXUnB7HspLzxXojJWsrLZAsaZuA4xt3nkZ2VDUdUNpJMU",
  "key16": "3aCE45Knp1Y46hGnLmrT1KSDPk1RNz3ySc82jyXaENPASW6zVUCAUcLFGX5hTfTsqoNt8TggUVHzNGJGeaZwNpyi",
  "key17": "bzYJmNXKxhZyLHM8hFQBJp4AzsNmT8zk5bGHpBjjaZDc7CBbqaysUKGQ9jL1UnMv4h34APBWhhgGt2VbqiExqjk",
  "key18": "3D3rrL4Pzwwv1NXtAgQLhRg5DVFgTpeqXgQ8gVzU6Vd2SR3arLzjwieVzie6f9ev3PExcwdR6ayShnJkf7qqzZ7X",
  "key19": "5pp9F9wQYrvLXPhETVVyQrp6egjMYhgNgxBbqtb6CCFitPEYyQc5ypNpCEGJRstrcwMbjUMscnN3ejxFYELx12Lw",
  "key20": "b1PYE3bE3X46nRAGQGbJeYt1cZBUS5f9EJyvA5uFEMXfAv9NnkJZAem5taVU3AQjeuRXmD6kXZMXv4ZxS54MT9Z",
  "key21": "9cZyeLpjDZDpsg2YCcwHjCg5gxuRVpWpUaZA5nTn4kUPnb84tmrKCsPxeGj3thWPH7aoq19owiaQHo2syovWwrr",
  "key22": "3w3cHAJKGP1uuuNwpfySeM3WoxspTuucDLYdKd6wpp8odcnXN1ZB2uqmSE2bYDQyJyxBCQyNa6ECQrDnga9jm6i4",
  "key23": "2VAqMmoh1KQW535wQcvdCqD8xjUH5c29VwQZK5SBRdBX5L8d8GxFiAqjJKoo8G1NXZUsiddKiLSi3veGGYtdBYY",
  "key24": "2wVrkmZKvRoqmT8uL4PGvak8bU1E45iRCqnAG6bt1LK2WBceMKcxNb53CDzQ4wAo9UbsuzvcmUgbWdyncDy4GsCA",
  "key25": "4h5UJTGU6F592BPNWig9LrBpkC8aD6FAzmRPRL7H5mhrQypFthPfYbYwaHvorUx97j6etShSrardNmhbrdQsnwGP",
  "key26": "4xTiPyaQZ9SxjW6EcTfdry6gZd4T8UW2kMjdbNCGsCqHG4XS2zRn8brHBwwihHWPKz8bpa7d4uQfwU9V3gzpwpj5",
  "key27": "5tmnWc67jwtMB4MR6c1LKiHruroQKnuJUm2hhBzqRm3PtHpGbLbM1CKdp3iUauCBgpCP761kQUhNyRVTKyockMtt",
  "key28": "3AjCQvrQfMxJUuutJRWRdqW2hw1vkNZWqfRR7UsrtUcLSfM9Tz2XyYqGUP8EyV7CBiz7gJRErgRE6YsvXpU1jWJG",
  "key29": "SAYb7GLLYNBUcLwfudhoVBpL8u2hdxcwMrVS14VeS2Zh1WqDhJ9Pm6kgM4kfKYtfQj12Bo3LWmAxBRbvL376LKx",
  "key30": "5LVnLJw7bxzBpJcPrUeeDuHBEJLjHLNXJ6FuXVwKJv4yrzJ25M6NXM7KoDpYYWQThKtGHZVceaozzqRUD1YmGWVn",
  "key31": "ZSegm9cxusDwhBrj83z5CaRhTWBzMmXKqbwq8BdogNUXYPUN49CS3dwJeBp46oDxxCWsqquKKFiN4ksm4DwU1R9",
  "key32": "51cX6m4c3AT8GYyViM5S8YgcmAhXSye4dshnbAXyjEzYqEbudmMqoLKUdKCjfvnPrt7tEisDMGN7X1urAz2LV8Cm",
  "key33": "3JKYZif9QPebZx1LVC7ZjDZB5GPgQcqpwjszugxaxQ1khoZWAyNAPVXbYz4F9EBeQxHK8ab3cDDEEkYLXnaB52i2",
  "key34": "5yodofzeZCDRFkZWbKHr7gxcJSZm3rbTvRLb8tD6muPvF2mjDbkUTu2orEUxnFpwkdepYK5Jd8iAvYHKufhtnX2k",
  "key35": "389nuVMH1iJ8HkmizjWjK63mdWDPjYN8pTYF8X5jx6ahJ2vEpo6u7CH7Y317EihGFp5gSHmxc7vcujwyLXdif1x",
  "key36": "3NHMnihBa51VAHPhQNhgsJBYT17cVe26DWCK3XVeQXMdEPK1mqcMaWmoPpZmNXntdWhfT7w8ffR6gmErGF2tYpmP",
  "key37": "3NBNsJipwRy6h5hb7y3DHFsKfxHRu8kyXusRUM3tWVgWz1Z9Ku6K8i51mHbQDeud5LRh6FeKppTQP9Tra89WZyCv",
  "key38": "2Vzyn8cCrjAToENyb8fzGee6HUNh7uKgYAr31Ft9M9LqmjtdEfDnhUXKiWuTFV9LwSruugdLov5h9Se1qDKLybh1",
  "key39": "33mMhSnSxdYj7bGYDvzojnctgnHcsCV4E5FfVjztRDhZe1hvhQ3YyK4MubXi9ZdFpBaXEaeXyMcqf4FUV3JnjLRM",
  "key40": "2kabMBhWmQXc2gZLPDTogT17Baa4u42JGznUttm2ZnqNxoe2SmUhn9s1Yk5iYXaC9SuHstUSVwmE2eQeZKjWwkcF",
  "key41": "3PDqe5ULjJAoV2rfVnGEjkxqk4PqooZDyzm7ME48zeX1NtuUuYp6PsRgUGnG6jLtFpzJgZ8FarF5D4whpGSQZa7u",
  "key42": "4kocQMM8KN7bxGUKg2LjzL2wRAscBzS9JW1HqJdFvespwsVrHtn5LoUWzKT89cm5uLiEegf5NaTfQ41jQVXosgg",
  "key43": "bgfMQeaFZi9xCMZw21RZKDxbTyr3V7cbgAsnqaW1Fx4WubdLB8PuvYKtqLp3pUvxtGHniFW5Rpk1xaRA5r6t9gQ",
  "key44": "hBXeRKcMa9VUPzSQas7NV4VU4wy8TaTb2PJL52AuCBCtS7goJWgjD6VcPUTb9pq2fttiyafo93MqJqKQLGavASm"
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
