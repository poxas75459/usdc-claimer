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
    "5vwvVWJjMQyMFtqG22ceDLmw4aCPnkxNBdzJcGJzQQrKs4tqdDcuiVrzdR42GkZizRRvmeFB812YeN5XkWaadHee"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YNAPEDrJHpYmLpFs9o5LBgodz7Fbpf94ULgJ8UHpW11d486v6sEx1Yd17q1za7HTWM69JqMEfSPimLFPw3VTDVG",
  "key1": "4b29KHfwLHFfW8fKnmdDZUVrtYt9hAKmCWAsSzThBRgYez56wHJLUuZbosQFg6VH1kPCZgo1Rp1c26oSiiANpYH5",
  "key2": "3b8CqWBJc21KRhe4Ww2uaTpp3NtBg3RCru3wTE5Ng13cBnNkS6nhL2wQYDQDv9ibpzE5qfGvygPpcvGV7twhVBxE",
  "key3": "4K2JQRQLDoyNdxW416BJCh6TKorcHv9Gf9AQJNwr9KXQ7mttB9GrksX2XA1adcqQpQnAFYc9JPoVPPdufQ6eRaij",
  "key4": "YEwArHYrDV2LizFcJn8troL6LnQuATQSjQmRjbTSVX6vjEtyDRoZXZYgyf3yqh3x2ioWJtsxZxsZGVeCeRdpmhQ",
  "key5": "4y5pAaEhWpQN3uGmz5BS1XiyYCxUBR2qcX8gKhtfh6zGiQ3MgxcCs1MsYbaR9rT6qzz25ncnFxWRErfwr1gKGen9",
  "key6": "5Q6jpP8i3sYq6VrGTrh5tSAvsiA3ubxPeFNokytgAbCFVYZNcEEwMFEhvL3ViPTLquukr1J2DDjCcgtXZRG5cpb3",
  "key7": "334RwahEpGhFsmY695WAXsostfkKeiLSQqETXtBgnGFhfa39Gr8HHdwYPZkKjDU6jF1PjK7CAg6CcA4Y2dxBD3g1",
  "key8": "xdBs93Jm9Jfo6kPyq7GiXonJiTaFwuUqRrT8cTc7J4Yq1KbUd38Skwstq3yBXkSQrET5QTZ5q5f6Ps4HF7EbKEe",
  "key9": "4uJ3yoK1BxnAYkeoTvbXGkkPgMZQDNZa3J2DbBuwst8FP5QCiftjRcaQK4UMDBosr6V87qfjqBvs1eujxt3XtYdx",
  "key10": "9feDNSAGFrtTZPXK2bkUoXVbiHy4hbkCQA3ioJHsuKkp3JsLqmK3H8P7UWTEDWWDeswMweDLQqNXgTxbaThZv5U",
  "key11": "wPU9a1cQUAYE8cMzqR5RSETYC91nk5ptj2bhchHgfSWUhNQTDa9Y3X9zobM8tGKMVq9MSkAGV5PwoaSNQx5at6b",
  "key12": "41Xfr4XcVkpisTfZvp59BiRsL7t9p7XMDomxM7Gnu8qWSuJbELmhmRRw6h3QB6b6Z4Xq4wC1Exw68vrdYZV9LNTM",
  "key13": "5tF3we7hfFgvMSFrYxivGy3W3xK1pfgCFH8cHimhPpHL7XisEJxvPsRVmKqAPMVPzYNowRXCanScRiXV8uuKKF3",
  "key14": "5L3JkH4LAUsefrhRm52EUANvr7v2vsVPy6PSkvgytnKiC9bBp2ntKN9k2SZHQY9q8mcEBjAynLCiP16xsCW3YPTY",
  "key15": "4vNt8jJFuj33PQLpfytgiEFTmAF6i4n3HTpgxUiSqEdmyxN6FsLBSy8RyjTqfkJVkD3V7Tp7Hi3Yif6fu7wmeHas",
  "key16": "4qG9n7erfcG3DY9VMcEYHZKJqZnwpfufYkocV7oqy7NPRgRrWUpiDrzmRiNuyJCjqmyqs9KhTdFLFn6W25TZDN5L",
  "key17": "4ce4B5V2uXRWfxxfwHQBgN38U55MnJSKpnkNRRtHov53KSdJzJfAt7eewq2q5NcJY6B2spBNueFsdXe8SoZgie9E",
  "key18": "4DUbcx4ZZc3GgpLcdiwAZA5Ccp7oqaL2HKAyaftHJfew5pSCpeaqr8ncEkHJaFhKuMMAno5Kyh3w4yXdQdwvVh5v",
  "key19": "3xvJ4e8HYXCASGNz1wLWgNHqJt1sfWE6JN9EnPLgtT54Bjfe9cHLMt9SEihG9oxMZwSHg3BGJBQe6S5xpaJHvde9",
  "key20": "4iDHF1RzXfPD92rTR7GfJAXa1v7SzU4qWRxwDWWnQRhaYqoHhBpQtrj7PjXHyQDXeajKrqjHA6YK8XzqFM2kQTwg",
  "key21": "44vsVf9TmANawXGKdGBSxrnPjoYShUC3ya8XbX6SxAgb5o2G5h43Nww8VqndCM59eq9Rn1SA33AYw2B9xc9stX1J",
  "key22": "mPgZ11LG2Yq8SHjq1SZjrRGVfUJkFTF5g5QPXJARNnwsJP2EnR9C8brmw3amkP5xrvdDWdwjqAdh73ovNM4z1Fb",
  "key23": "4xDECcsRSJT5hQ2cuUuAN2nwmYhG8uesVt6troLb7F666ovW9tjyjVqSna8FqRwvFsoZBxczz2FLFSCNHnySY5Xv",
  "key24": "39MJAKYt3Qr8WhatPbEsdbAVeUvfb118xgj5fwDX36wM1avdYq5FeVirpy3L4mf6whcNV2GYMHFfowyMg5EKb8hD",
  "key25": "3hxfCR9RsRgWzQwwPkLp5fA7TiDpjfTxmnUAUF4sYcMqRN79PcMBnzJh27na6Qnb2xwny2SzWWswjYgssqZCwuSQ",
  "key26": "4REK45PKoR9piBcxgD2rPYsY4YvUN18xYRmYwRkn2YkANniWXyVasqfv4gmNjcCVadefvNewrScJJs5GcmvwVZai",
  "key27": "4vs5uniqWPN62XKodonxs8TLZ3ZvPhx9ARz427C6vf4Dh3BBy5Kif8tTDYP6gKAVMB4nJjzs3BZc7vPZkDW36Meb",
  "key28": "3ZestJV32qRqkxzRL8QdJW8QiYDfPxYx6vHeShesb1fn98uXTQrzcvVNtPP3uAhU9wZctHa7w99GicBpJHZNABoN",
  "key29": "3DNFrnL94fKe7n2z3CZEgQtJkabvgpqe8QET7XYphZUcRJBcB1xhkCcbFTcDAUY7nZKAMpKxsJ3YsZugBDjNfzRv",
  "key30": "5aTN4F3NACoj1eW1QQDbzNXMUhdjp8sLF4qKsrVTQ9rc9SSEbtiNizSjA2WEXTEpdEEJYxP1qkufptTtUpNVatVR",
  "key31": "2LBYpYKAXwGYXS5JJp2Sxgi7qU62Aj6urNm1FpfT9uB4DFWfR1ZahdmZVfp8LAJk3ecuDB7A81cejUn1EkEpMmAt",
  "key32": "5NV8svqZjBopa5jWuQGCjRCKNyz1QsnwT1sG9trehqqtXz6sMqddMK7PMDPSt8BL3T9mHtxjQHiWmPqJCdmcFHkt",
  "key33": "463K3BKLzba8WBbqV6y9DPeKEnqJACzzBFVzkn8qi4N2QZD4CqEZ2x3V9Yjpruw5Uh4Ref1vewEngZ9mk7S5duwP"
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
