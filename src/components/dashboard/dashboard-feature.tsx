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
    "5V77E4MvbLs7Qb527emm2Cwo2BQ7P9ho9wkWdcbE4xUBYF6aTjGEU15R7rcheS5MdYbe5CV4QMxNRNiVvKDzLFAJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HkAy3YuNqo2F5F3KzhhAy1xNxDcJzjqkog5WGhyYCnt3XdwqTKd46TyPst6eQqGcCLXnHTnopBHhYY2rcXEduzT",
  "key1": "2MQ82JUA4gP1DewqbtX1Jh7fvF14ggk1rcmhqKUrx5d7Zgdh2t9PUc3oL77jTawpG2SXjxR4sMy1e68fmgF6A6np",
  "key2": "21KSUjLTH7gX78wBnDSPg2ve5Bz151J9tcdLDCcMJRLmJXKH4qY3hzC46F4n4nPHDK98aqK3iTdKqPtQXi7opD5P",
  "key3": "4f6aiG7R1u2hVgLJwPaWT8BBFP99FHzs3FmMUpAy4Z3RhcWD67iEwMxaU6GA5c5MgVceQt5QPHj4redrvmQV5Gwo",
  "key4": "4YqgYMwZYSdVy7zK3kAbmnz9tjYzRXe7vrQ9AuJDgmLcJLVSoFY9k945tiMBvNXjQYmH6LcCMB9XNLWAefFkTJrr",
  "key5": "5AsoFkpuw7troZaTuGFoZM6t3aqH6ZW5fhQjzVrRbcLiBkJ3vnwyvdbGCDNvFUt6QcMEeTjU3Lh4fJfx3LagPyC1",
  "key6": "TLk8qaEMF39yZkc3c8owj45Kbc4KNqdidNm33a6YWhMjGBvarMvV6Sff2TdDZsn91dhiam8myTKKoeqsbPrL6vW",
  "key7": "2mrZMPwjHqmJQe2J23VxzUZ9PvUxZp9rLuf2sKMvSNK3mVBEYgvpjupGwvBKZFMh11UFqfqhiiQ5hkJBjHnkEirW",
  "key8": "Kg7vMhnjPxFubqjfkYC2yHyKM8Cxcwz9v1ea1qaMoZX2UW4XXm61kZDH6tiLd7KYwgVyZ8DxzcrH6mYJuPujvD8",
  "key9": "5TcYRavZK5CvYYkth79WGAJpHgiZFRe1uqcB7nCrYPqQpiKr6Ajn7Yxd9ab9Qg4qr4W3v9ahqRPef5YASaMVppM4",
  "key10": "2FEAEBTc6MG19kf2x9Qcn5rNbTQLPfam4ptvVnenmL25WskV7kTaG6MbYFonbNkSaLvCRcVob3SNBWRfVHjbDDdQ",
  "key11": "4tYBTmjrqPhJU4MSEvCEgefGgZ24k4fn3mziiSwQ8WEcbR8Zr5G3CPQVREXEfQ5daz1VPgNBYczJBFRRwi7iGZJD",
  "key12": "26kx7JctjdqeWeicYKRRrTDgQoiYiyzcG84DN2o2mY8HEfyyLvy3tYffF7AeytF5VZuB8AJkfvEkDHawHfRNReEb",
  "key13": "q2daWC8ZtkrbEGV9LwtjK23ntJq41kXJew2zfBHAQLYswk3iviRrMbKR3j2MZ29JS6yXQWVq36WKXHdrJaVermW",
  "key14": "61Y1bgXsybTDLJeBYREjjGqXcjuvH26H8pR7wNPw2MHeD12bYo2rwwCDJwqRZGWf2Pd1cbT68Xcwbx78zd8HDXxe",
  "key15": "449fLt1JB1FQfHyVc7A8eFi7owea599DstgVvboP9M79kYSZhRZ9Hhn6qSDYw661wmDm8uMwxEk3w4wKoYm2JUXN",
  "key16": "58xtvqfnj4GDjqsXVozwjhHBRfZidHhFY2kE6UXaiJvRefAYCsbTm79xhwHrRUh8d88vdyPUYvnbxe2kA4nEiWfF",
  "key17": "4a5zRg9byoCkGuo3vBaXTKWmwMmzDaFkc4RMECz1igbKAFSFFiFsE3DNSzKNhZrhGA2ZaSb8WDL972WGZdJzBQ3i",
  "key18": "127RNTm2QUAYvEJfwgRSHkM66QXumtQkhM6Wi49YsAE8vMJoEUSg9ekd8oiJa99e1f3qc9aghGBJrLWnc2BqDtiX",
  "key19": "31TZ3zH5V8yPkXnFCjQ7zyGbAguyJ7mke58RWBAGR4UmoedEvftNT6kd4HiYEcdXpPCsNWUJX21oNE3VK9KR5jwG",
  "key20": "2yp9e61gxCgD1UoC2iUboDyAo7JnDA3Z9oTxWtDCrnbVhH5ywNqyMVRpbrGRYsZ9ShYKsccWgBYcBgEzR1Jvgin8",
  "key21": "3psAds79RtC3FJBPwBtwT1vyxo3scFWjhJHaZGaG5JZ2i4zfXEhrKtKpAmDc85gRiLhTKvmYLUK7PcTzRQx8Tek8",
  "key22": "29ZkJvVQuudLTSaobCKLrKJAJGdmzU2xi82DDzmT2tnznjusViURN46YK8k15fzzjxxLs1imcnuhdbVqJk42fDMD",
  "key23": "u5F8uq3H8y2XNUjmmvFPNrZYpiW22c5eitbFneJSL5CzhG3SMBYSBHMH9DjiXcGeSWN46RonRN5M8ewNVPc6wfo",
  "key24": "61311AhR2icRw17jAmuAMLgNRKjgfVG3XKgpKsFepv86ftYpzpe6Af7CAquM4iZ5e3NG1bf1qo9w3RdSETTzNHCa",
  "key25": "2ZBczyB2A81eeto6Dtb7uFnunekCA651hyKpsfNyqPBJNotN6MjRXzy8SaQSAVAVyA8N4FTxcj1tswTSbt7so51K",
  "key26": "3DSMFZ7eKQ9QxTQ5pMBZjTeuhdpLDKFHdCPvRHBdoLAdDQ1fN6NH7ySjF75LeYqKyL43Qejy4qWWrWnSitJ5e1cj",
  "key27": "2LdPzn7HNga6ug72nch9Dc4CYn75zxUX1caTLCTV5JfCPUiTxGNJSkf9FMJDEExn7M9dvaWhNGTW38EN24rGHEsV",
  "key28": "4M2SkvaBQt7Df8DASXskgMr23mTZFPGoFsvtpmhVUoofmT8R8v4PLGLFp6dENwhcHRqFGjNbZnM9Kt2G72jqUed7",
  "key29": "KP7fbiCLQvMK2ZQxj3mEpLbJ7AzVKPS5rzzK59dovexkbYjLYbTH6bP9omNErjBtUjRuxU2QutKuSxd9qNUcHkD",
  "key30": "4gtMdFunc1CPjeYBBYcBt97wVokP1UqMjEkjZWkHs1RuCikme1FAgBjvSadxZVGQ7zn7ZJMdUL6jcYsagiurUV9v",
  "key31": "2zckq2JxSan8kxg9GbHCxXXLhDdyMsPEMrAStibsqFDboutLb27n376HBcKQKSxpbSdWRbtKr6xFshKwSzjPNghX"
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
