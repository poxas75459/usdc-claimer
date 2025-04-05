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
    "53b5x1ZuUyrHGootQqcgUiKV2KTPkM2wkQdos6ymr9C16YHRWUnrxhRbqVDUD7kRoAQ2VrCXFvNLAM1Gfb8aJ4aj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59cC1mKcgMNjyBfBcsqSxaPwfkEmLRLVMpp1V6JRcHk533X76i73djEbZiQL9Hgd1T7i72WE9MPxAFJWHjGKPNjX",
  "key1": "2LxJf7oN2uarLbvkAe3vmeCdPJywNv2EubuZcqkwcopEFeZCLdsWVdFvh2iZQTpRnc8ZX4ZQmTt2sgVVgu6Zr687",
  "key2": "kUHPPnXCGZWL8rNwCiX272ToGddH4jtKPyGExeYcH8qGKz2g6Z8ABZWnv37tSadqQjjaiAfs9mA8NJsDqFv2qXD",
  "key3": "WEYRZRyZeTp6JksZ3PANVG9jB7bbmTpaNaRapzpiPwpnpVwvtRFhjKCrSX37gadMpLNjkj2EZZHc9GNw5cF26kZ",
  "key4": "6cmy7rSq3qnUtAJ59yUYpqXHub2rVSXb3yrCJ6FCKRwtmzSYhZmW3reHWrBGd9LsA89NXgSLax5pCq39w4dyPXQ",
  "key5": "CkUGE2mnPZLjhPK1xR3N4wpp986AGbchXfw9jfvY71cxhzvTCrtLSSnCPqk3r54f6JucLHQX85gyF3NKMepJxwN",
  "key6": "5LyyAMmmMzzkEVC2P6y8RzAWJkj9rPeweYSUdh2G5krShcb14G51AAFKmNtMb74VXbtyqXuTQ9sE3FX9wRWWvj2B",
  "key7": "YXdwdMm4c2zGaxguGA52uX6PA9HcfkvWXnWUSadmWDWtYQMMePgAhzvi25GVT7mLdonjBuMzLFtGZenvPyX6jJr",
  "key8": "5tnZJx97xj7aRKfQK5FWazVp9acGs2MLLbRuVJC3F5dKtQfBsu2uNxwmcV7yyzibpRHD5oGnkDrfBjxmNcDx24wX",
  "key9": "2gNm7fu3sfkHxQwpW1NFJJEF4mfptyXWyc8x7SV3c8vGxmQHFRs8fi7ngSDYssJRKGKFVogB26FaQDhHV3vX8z3D",
  "key10": "4eyfQSeCRk7KW4xz3nzPuuMzceTE6AKrDS6cd7d8EE1gS3hbz8bpowQRzMjktumKT6Ye5A6BxwUNNPcHebSFGHn4",
  "key11": "5NKKiMj9iFfBtsPcMgCJyYXvPeA5pdxeRgQh3dNmCja82QvFK2JbzEskULxK8YKTi7fqhN2SuSYLuLohHxgBXeGD",
  "key12": "44GYYtcegALz4vUqxmMDX5qPZTMzCRm2u3hQcuDz1bWk338Cw6FR5RU8QxtqnorM1UMazMbk6JXf1yE8uK6KJuhc",
  "key13": "SD2gdNwHd8SPzVNLeaBxpEHdtXLvXoTq4Aii1dAGqw8AwvfLTYTYDSqGJniVuNo1p2VWayxpPtsCrwWXNP3rsjT",
  "key14": "3se2kzxRvXwiL5sMhvDhg14zCRL6YKGarGw8fRGabm5S6gR7GKAdnRjP8qdjnfaVAZdtzjvVuzGpjbafm32Mv6aU",
  "key15": "3xDEUgyf4CsxXTG9kfZDsQzUhr9h8CjhvBKK8qW48FwCwbYZhFHX8s7EZvfHuUAkjthUm1FFdXL4cPo8bfKj6MNj",
  "key16": "584Qg6vvd9RcC5J2RfcofuRUjC1bZwySf1WFd5vWAabYNBH5fyj2Ek79XUAUBC9Bv1kwRQBVXqZWG57QXxN1NSFA",
  "key17": "63jnUU5bKYKM8PJvVrbjM3pxXtP2SuzmCLxnenxrTgSvfEHUbuXjGWyuNPmtj7bFGUjjQkwUoK5cvBvcUDvxtya6",
  "key18": "3HGtFtv3xTmFTANJbYK2dqDxC3iNCMNaSFGSRG5SKw5SkLRTm2N5yEzzLjruacKQukG3umD79UsK6VuGzNBLqzu2",
  "key19": "qbtBkYUaLFuNgZdMRVhmyxkDxBhXzL6p4NFNh5Msi3XBxDmEQmpDnoXzwoDbJLjNc8A43SVvrTFpZA64P24avVP",
  "key20": "3EuP9gbm6uj7UbT18HZEXPdaVqMCocdNWcVpMK7VPzeEj4fAG1Qf3j2bQdbXUKTUkGDF96xGt6UgRSjCgPLB1xmy",
  "key21": "41Tvny9bkyxZAegAqm81YLse8VzxYDCFGmFQnjF6nXtuuJ1s1SQDcF8KREuLZ1RiAJMvTNgKYHeebd9TCrqoGcQG",
  "key22": "2HUUC9emXoGx8bVgCNKLMRc6cceuHBwzgEWCrmXNoNVubMfXoAB5PT8S4Xd3D6mxNcoBRmegnoUkrNUVuchm5fWu",
  "key23": "24KVbCataSLWJwNQAt5C6B1HMYmTRyHh2gQYPEnSh8iSTAcMFNqnMZhnvhhEx71JihGjBbG81VWP1HHWpSCrtpbe",
  "key24": "3eV9UoDfwzm28HzESKLZ5tQsRDpc1iahjMCEHxUTwZuW5wvmcfHgtu1FErpQoYMEQosJM8BDYKrW2hTe9KYu6omV",
  "key25": "DGhvWXpkvKzPJXBvfmW1Jw2QNw5vzMTNKcGV9tQ7RPPMoguB8TN9bZVx2WewTreJ153aYY6RmvbFyCtTz2wPNJ5",
  "key26": "baxqeuQ6pkC6RJjs6QJGRro1yNki7HKCAVXLz9S5HNTQjyXyZhzQYNteHBbiUWWqCaCkiUaNm965QYhPyjAt9jB",
  "key27": "5F7SgFw26NPxbxsGFBw3pWqyzp4eATjgkH8GB4Q9SgEzAB23p7S4b3aHYAeUy58q5n1d22NtevvFUCA3eCgzVM2",
  "key28": "2YPQxg5tr1g86mgT8PZNf5Riief97eHDcnGy7QCtmbpA4AXBvRbgfdbFeS79kSYiJkWr1imtxdsp2mvAcTFA4tCB",
  "key29": "2ms4XtM3aWftU4rPBbfVxSozx7kWg5esQyNtWis8wLrboba7du3RMqUkpx42u3WATDyL2JLkNHr9zdcfUVZQVNXi",
  "key30": "5TsPkwLmE2XaSLaJZbPz3kRGBvbGQP2R3SNEwxyzwqn9CSbVNiMGXPFTmLdB1FWshr2SeU7KgrNejdQMqVNbhz9e",
  "key31": "3UZuueXJP2zCjYYMyKhfnYwW4L9zHuW9vfbHdPCE5yEC5mprSicLZhrCigp6yXnXKjpnQubv1D4ZSEyZtqUCZ1GH",
  "key32": "4HDzXcEm5YTLKU8ctYLeXKFbohYug7r9qhF52keU1SP88Rf5hLxbzeFKTZZ4W5ixr6PfwzvhouZWzqEXdWa1yAXp",
  "key33": "4TVS4jWmfGXJtD9uZnpnXq8ksNmwcygz3UgbxiYkeUrLTpzEr6NNygKyZJjctjbB7nGiT11Bacw2dK7Cmg3o6jXw",
  "key34": "5htwL4Hpy8HQ6bznFS3XDb6ti3mLG29r4gmf374ftUMHP9h8KAxBCWqC9T7UFrJXp6b3XvTh91kU6MGWZJ931WAP"
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
