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
    "5hVoUQBb2pTtRxVieKFrVrWjcQtRnzUFJUMMM2UfHwRW5Ez8uPTG6SJVGcCoQh877PYXbopCwwEjjxuydEK4CFX4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wGvHn9GDALgRZX2QFXrQYpSMGfqMrYSWKJULRB4qPQUCv8uoXey5QpoSF3uJXpigegrhsYA3YceacTVepdXFnmq",
  "key1": "4aLTjfqLVBVV232yGu3VGPt6Huj2eEFQSzwdocthMCyJ6i5zvqCfo2NuqHNgtc2zxyULgnggUXrsruB8AAMN8G1n",
  "key2": "3m6ziB7RfH5m2RBLN69a8wg15PhdYWnQRSd4F7F6X9sj2PV9jVMzUBvcf1uFPVigk8KREKfnxjohZeqCxh6nuc9C",
  "key3": "5wNXJUu6S4m78HETNyPkWNiNcKNB45eu9PyKy5NTd6iBKyzejfd8BdHPr9MN6C3shzobA9XmrLV69EmYNfkWPg3t",
  "key4": "4qFxeLThBbpw3BfFfx3GXJKJdbPcFECrR7oeyFh7YSUBcAuH5ri7rSGiNUVq8iRAmqrb68stCXdPXpx8NN4LfNP9",
  "key5": "5iVFkuybSyREp8pKM7mKzCAqSr2ZACCXspgVAZjBrVsG47CEb4zUafvYqbg1CNxjde9f6WS9X1Azp8s5VdzRbBKs",
  "key6": "3Sh9t4V3zuoPsW8mUoUeMKkRLQaGfAZE74FZ26ZxyciWMWg7s8wqL43vQwFFQWdT9oXvvt3puyEPCjTwvnHHoM32",
  "key7": "2jGA1AVe5U9FCaLE3d97d4PDCPtT3FkEP53pc5n7TrSHCb9AhkLyeUdKM7Sby2tJZeGwdcQJ3zxfNDbZ8CLMy6gP",
  "key8": "2VuzPbhvin9R4EyR3uhLxSok2C42Qi1gvzwcbC9G9cX4W4XAzcUiLJq5yYzkH6zKk4ckvMsC8AMPhSsyxrs2TXj1",
  "key9": "j42dJF3vQeFYvabwsrpAgAva23WZZzyxvzadgtdBvEJuCEUWMCRNMcK38AxiCUdZAh8wseB6MAunTzLSfWGgxnv",
  "key10": "3DTtaPmTeQ9AMPxsgZJiGujECPspvwDhT5JTaQHt3iiESA1jznC1dgtfCiG1iXAPGZ2DphvqPpWmAQzvv3cFBPx5",
  "key11": "u6Y6naYX81y4Qp148GP5LihD22VHnKL4BDeVZH53BUjzXwc9Uwvi3KUs5DJ4dTR5Y6RC2JLP5Ra3XpbvkmS6LrC",
  "key12": "3r2cEBCTNGKjY1vZPetEnicXZv3isdNJYTgs58qAzgDWoEAcM18jK2XeRftjPLW3ZRL1vnTVLG2Ru43dhfSZ9SEq",
  "key13": "NB9FNbks8dWV2MdGAKgQi3xhbgnGLUwm9NvRy9pf5NXWrvP2yPrqvWgDrDCyPPS3icphVW1vVEADNRNkfwejXNb",
  "key14": "4wEeVFVoqJSZwLUqvM9jaavohq9Q1kxrg73qouWyypP5T4kpSzfJbBpWoWGJAHUa1JmyCrnZGeXdDHdfbDVEAVWr",
  "key15": "36pGMLCNads1x6FJPuvrHCweijyQTHtRSmAeEhETeCL5BKd9VKvfhdsvj9QSt6MGqzugjFXqk9Ggs9Zcafn4VPu9",
  "key16": "62Yu2UKtV4aE2Dy8HiHnMSu1KZKsAJg4Zz8DHYB71FKptee5ET8qcJYjiTTJheW5pgF9F8zDbBtD2Za5BWb7qMvQ",
  "key17": "zxsVDkBZgtuFdQLwpZWfuDdFN5HsPWmKW2fRw2eB8WvDGxsrnAWwWWoGQrTq5KkZ8ioTkH4aMLtrHNF2yCb3ByG",
  "key18": "2VHApVYB34drA9sJcmW7mhNyrL8f3DswKJo63WAqXQYkNrZYFiS1bRikJ1M59ioPJbv4W758TV5h4j4ZcuaUCBgC",
  "key19": "4DpQrSLTxFEovxqowo834jDYWcNLRb4J85UX7GBywBgGVWK1aQCfYf5Kb6Tan4pS4KDWbdKEVHZCts3RVpJ9QDCT",
  "key20": "2SELeQUisbfocLtquXCWMhAU8vr2SH2HheoME91tKQh3L6nZyr9gsBewtZkafSNP3CMJMKTgTT1cQYZde39p6bCn",
  "key21": "4ErVGeK2aKLP6GcBSQFPjbvgdxSvqY8df31PBJ2NDBCpq3VovpMWKeEVtr7i2nmDrBnNS7rbghTm8S4o79AVVXqN",
  "key22": "2EAybJMWBV5g6UwLKw2XMkVbZoRqJTk1GNfsqHVU342MYewCCGLnQW1Tvq9zDoc3T7z1XAzTEHVjEu7vqiN2MZJG",
  "key23": "7AWofhnACRZ2L7aB9sDSUkpb4w5z39WWeAcFd9ri8cGZYEQjeJd6mqxgs4RKawtrRAmMCZxsRtGVdfRLU7QMJ3h",
  "key24": "4PRi5tJdigd57q6mzuGDDDyCAA7uDKwMuJV4A4CnqyQ2xGdCu59ExT84115JqkK6EuiPAQ3v3dHRMuHkXUfwYKjh",
  "key25": "44QMWgpnNCM1PHwdmtV8VwL2BSVHta18JuG6M5WPQrdGKgyjvXSRpdUgAruXCyH4pm9tKD1noHXw4k5j8fLiTDRd",
  "key26": "eZt2gwR2cS4TS6XK3pb6Er35WZ4LafwUPQBTYuwsvH4TPUFQ1e7QXLJLF3geFz1CCxLoeKYodceXzWHtm1e7R1Z",
  "key27": "5n2NNoXo1sWU2Sb8SDx46Mb4wR7oZaiDh51cCpAopzVnxVjagviuYNGaKRTHGXziSKsw6R3bcKirUsH4cyT3qvTj",
  "key28": "3ZtZ6zKWS37zeEDgcvw5ZPntpytKEK8TeawmJPvWta2hidGEumiig8QQzEKCNX8HJaj6M98Wrqf4LoB5K2jeitvY",
  "key29": "5UPkBJhgJT4f96HZz6AHWiHycS37jBLFTjBfYs5ZyUca4twd3smscDEbprkvdNvC8ERh5YSiAa9k2DDrscYhBQuw",
  "key30": "2spyNPbnxAaadWjkLtFhRS4HCj6ndJ5nbvTWYfjkpN4z8u3mE1JBV7vx4YLwfLoCZP3udhyvP7r7f7yFYoy5UVUw",
  "key31": "2x7DKXh7mrvafRgnfzLKyx6rEBbGuFEaTAAhe5TyfexQy9N9EyxgayYJ5EnAX4gLi7PjBcgMLP3wg2jENMLuxEHB",
  "key32": "5W5Yd34d4Z9VzwkebVixHeZd5S3cUkHZgnVvfnC64HMxZ8aLuZQoEfCjCSr6wqdh3GZULgZq99NuBZj4UnLuXDz6",
  "key33": "2GKkjWxtxVy3zdbkHRYpaDcN3xPkcrib5WPKfKse24KfhknxNMXZFZ17u6WGi61gX4eqNjPcz7YoCJGz7qaPCJhT",
  "key34": "4d5Kmp46ygyutUeVNyewfeRV1C3iTxppdUe8V3v2AMCBrudZz6v9MyYMH3mH4cfcjcXc2i63vzS5DrRPeSGdceUH",
  "key35": "pxF5H8sGMDJ1AMD6NaMsLHmdjyCdan5nVGfJMd9nW5uFb6n5ktSfzAkroNJFDPX2gpq14xv56FKABZ3MqDhWz1y",
  "key36": "wQtTz6gjS147YhcsMXAADqsviQ2moKNa2irQJCyn2dpHoQ3td2zKqNcv5CaQQtJ6XdfLVNYufqPKWPFU3mhHGPH"
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
