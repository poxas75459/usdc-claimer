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
    "3GAwLVyGPFXQUy3VvFGPvNLLT6P5Z1W9UTQAyUqRSVD5oJ7LyUG8HbSQpQqwFu6qWJNKbQoXzjiQqG69Lm7vYwXV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GTwmseuhakckYsW7hwT6Sm7nqHjKW1HLAnnLASVLs6A6wWSYnnKa29tM7M5be3MP7GQTJnDLqzChRLGws7Qpr2o",
  "key1": "3HTDVG19u8QDDQ4cDCRqyeKLmdMD92vFUWCDY6GCzCez87DKhRixZgt7h8jZ9BaLq1Ka3rSg8eymtDFTJ63BFLim",
  "key2": "5dTyyK6AYmQnerbGREEJPzmAwdmN4pmDetChgLw2AezK6Dna2JvSEHmZNdMNUWxunznSL7szRKUCCjmiejrsdTtG",
  "key3": "3ViTzh5koZHVg4mCUr11u9jJJXsCdspYFtyouthLimYrwosfQHVCStRUMMpvcqZ19TwZ2LziGu3NeCzd9b5f3jhG",
  "key4": "327qkVTa9dGjVGpQKMEVX1XJzG6KZwCyPZCALJXHiCT3iJg8maN22QZuNz65vn3nw2pAqYwz9dmhNBpJLRgiK9Tm",
  "key5": "3FLBsEx6i6UX8ReHMbQjLnHvYmUsRWW4vtPdDnkuLvBVtRx3mFZMu7wCRRoPdj4C529YL8thc3Xi9LuspuPikKhG",
  "key6": "2F5wPRAm189CJBZZ5Fr9otyv7wrfrhF4nsFncaS7w8Wjf6m8a1nZQW5TmGuSbWHnp9ELdCWN2QbpZcMqTzqCxyxg",
  "key7": "56MQSKvbjR6KpbLTxb22p9iqbAgoUNRAPNVWH4JCpnyAgRDh1j79FafWURLBjPW2r3hAUY4p8oJKWWa5LXqsAAQV",
  "key8": "5RgD5STy47iCpPn4QeFRML81uHjWCSeXSYUwMxpd2enk83HM2AyanRdcBt2dLfH9kguR8C7wwPd7gzPtbgDUYWPG",
  "key9": "5MfmoctBHGVeExjXK4ZeJQtPDnsBY1HY2zyDP5HmLGySbaSawvRbu66vjD2mqXodJHiCmnPrt8zpsqGFnfKHfZzJ",
  "key10": "4bWQ3jNPk6EpoA9niKsQsc4nhSE79a5yGNmy77ApPPX4PcXYsWUYu749MZ8XYDJgpBP29sJvyhqAGigemiqrpEEz",
  "key11": "5xzjYeu1AQmATxuG7N8VCFLUjhH9QgGUdxoPiJ4jHK3ybNb7yuZoFwe19GZvVhQRg213z5PqaSiu77UUbRXuqzvd",
  "key12": "4sGiWUWri428PBK5RG5GXyxL8pvHwxAT5W9857pmb13hEU57tqjqGakoZeFwMNgLiodZhebfBNGZkFRUJzZrknhs",
  "key13": "4fHhyChPTbfqxjofDGpxcK33rVRZCgTT7TUPkQTLDf8cjdgFKghGk2crRCGBhxSN7SkxCTPVtQrXNt8d93pfuRMH",
  "key14": "5PSuKr6eeg1GiC5M4enjjbGRNb4m6vfcS8fRXyixsxuYhcVqb1rKkASDhYoFaXM52fwReZnEtpmqaKDddJGv9c9o",
  "key15": "3naTTis9cWwDyYRqy9UWuq1JJbMgzz5YU4jv9KLrVDe8h3KPMktkaCW4azkLrypnWseVo9f1YbgSMcnEXb58eZaB",
  "key16": "VSXPm785feJ2Yqy2eGHJUQC4AZcHWeSnp4yuXfDDqGJKPPJuMJGJ4ZYt5pcMgTB58fk2YPbNB2aCk6LkR9XPHSt",
  "key17": "54yevnZryy9ayg1LDmcpDxqVFK7np6szyFKXNsJFJZEB4jLWzQGvfiZf3tcimgaM9zcCTLYgzMYkcoPjtewocYfd",
  "key18": "2AaJ2NzVXKmub4eyJ3WgCmJvtqCEUrGeQwFiqzkRbHycZpgjtw5HNpeYkEHFn8CjJ26YMKRa3hGkDtkasQ1JPcDh",
  "key19": "5YR3gcz2aynr2CcJLx4eai1szDjJDaB2yWk6kHCXXxAAcnDn5yaZP4JGxYV5C7NhCjHSqUjZiFoJpyFR9SoxxZz3",
  "key20": "4awk3jkZYx15NSx4cV91BqKv1QYzzcdW7Y59u1SRVYkSfyKfLsQ9xZM5Tx8bHU1wcqX9U99c6JTMvU8baRWUmsva",
  "key21": "2sNZ33wxwgfHscKP3uep6s8HRdB3MTNPh96xuapNaRBVHrHgRRyPoG9B4PuFkqPbwzU1KpHU77jGHvZ5B3MqfMZD",
  "key22": "2iXZcvEX5G9wdsWXziGNNQH7rmcWWgKi3hgP3Eo5fjVPYjH3zJuwocqw8fMhw7L7Cb4jbvgvBQS5fdsHtnei4fzV",
  "key23": "5KuYp2yrFStKsAhmVyWsRH4vXLEpRJFkWkuaNsP2dNsFGjgGSi1LGruHWFv8NkBSR4srGJbhZEeXgqvJN6gTmyb4",
  "key24": "miqxEDABpFbUcRRWcC4XzRWcMcmSeFaCf8MmZyF52yWcKZczk3cKjSa3t3bCJq3pbxDs36QgBbpYUcnwEECj8dG",
  "key25": "Jf6gydU3r1mvMop5AscnSKbmsbahvWukx3J9habbQeYkX1VoJZyDd6x3fMYCwNkrPt78ikp5JjUUUiXamgc4Ke9",
  "key26": "5jQipVngvsjyR8LgvZJW7t2TPjjYZbBaN4fXPhEnYSgcgF2GRa2d3aGBXzWvJGX8FgBUsm3Wr4NcN6H7WrrtFw5K",
  "key27": "2DYGsZ7mhG559g4KW46crJAVmWgYrJFmrebVzajLkcDuE8RRqKP9wMCRCuPRj1dsnaSH8UhYjmvd1snqWGx3FviT",
  "key28": "5t5uvNeHJfXoqJaAeirryUhsKq1qLDnTKWnrJZJcA5MxzZgLP8ow1tD5L6HnBgVcYkyQJqmv2xDetMQUfKNvRYnQ",
  "key29": "CBhdvfK4VeijP7cSDgkADKdwinWKj1huDfv2qkf7CBhPnsVwJQir4TNTq8Q7twwPa8YTz21qSaZTPKmhWS8W9En",
  "key30": "8vd78iiv6Yv8XkPbcrZJeTfMDxd6zy7J3w5U8hL6uz7m5smMTZgMEGvG5fMHmDeuKCQpzCvcA4takQvcFeTZBr3",
  "key31": "5qAtTPbwLXDWt2M65hf8oFUTKYhuqPXWwK9erWnrG8hDunk2W9D7Q1zddvnKKdeWuGwh8vXf2E1wrpat1UCBY1eh",
  "key32": "289H37B9go8UKS1dVbXL9FukAAJXEFySaptPVxUWz4XMevSY21FACw3MWq95wf7MzAPA1cTjqomFoLu4aPTqBmVe",
  "key33": "5SvM5KUZQSsA71HnfDj39Ko17TP1czfNayoGHzgmFcPWaVKM7Ex9xDcNRNp1p9EhSfV52qqStad5AsBGwGrLxQ9b",
  "key34": "rztNWBJAeSmjcdzHRUi8Dp9NWqG4XQtYpxhAQawBhsnctkCB4F741zRWnbrBg6QyJZN8EZdDgjqksHMBSJNeYiC",
  "key35": "46MVYzZWnRY2s4kchRf781A3zbDHa8ANHwve5uYvJzcxaw2f4iyuf5wqteXsuJsu5MXoHeZMnHAywKtvHwEE5h7q"
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
