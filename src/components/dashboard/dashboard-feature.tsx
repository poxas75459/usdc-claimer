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
    "3AnFvLr77uDXeTYorg6ExTKEVcmDyJJBgn3TCn7YYTedk4hYoaP6BnMMLhNdM2SfAk3K29pitENGoaKM864TzY2U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hmGP3bi4VXieZwzK46yPm4pp7YiUcBLQuxctrH8piNM4EQuLs9huYNpGhQrFzZGhL9YguU5WFsVovK3EjnyMMJX",
  "key1": "5tXT8Q3nVpxJNLkvhNfcA338tF3aL4jdKuBkXsdkQ5ALv3jqgoge2bX4tY8hEQCRj9F6erBPwge9GL6GLTQeYGdd",
  "key2": "4UcZrgTdAcdLJu67QdEefjv3sXLtTXikTAwLMyXpQHpuCcda9NKaHUD12YuBFVzuXMYrMZNN8smQ2mn8jmGEr533",
  "key3": "24v3kDmDAAav751HqERNasPZUHmD2C88Bohm1pMNtA5rcuewv9kipzbBWpjmL1nELQZK7KNYp3tEvHfkuZtCyrJf",
  "key4": "3Wx3Fcww4jhJT82J3qmQQYGRmYCEG2HESKvMPrfqhqEtRhGWABWx4JSz2R6MjQ5dvR2Tt7vaa2Qquk2tuQwouyWq",
  "key5": "2aUCaQVRzdXaRLUenksLoWcaEruEgCCgoC5jr49RQJwidgbGSJY5ettRVBpr49LqcguNzSCbdT3foHd4tSHrsJcJ",
  "key6": "oAv5vMfjCeub9Pz9SPb5WXxw8D1tot8CpSK4bHtfjTHL2F67iDPyaYHRdWwJSynxWMD2wTU96RjAMEFBnXAGEdA",
  "key7": "2Ays9YiZvckEBv5C2qNU66URhyZmUMiUqt6kiY59FfZWENBSAna8wrqSYnQsYdQ8TU4Gq9rorjr9QrXkR8vMAj3t",
  "key8": "4gtBBj7tNMjctNhqXZNYuXpp9V5zWSopdbARrhJtjpCmmaF4tDX1qPpDhwS2oEGT3ymJ4vDXmBLFGgnChySoxZRm",
  "key9": "2Bb45XRwGphVmrfFN4bxbGJ5Qs29yQNjM8hBdwooFCn41dRFdMHtRBP5ttQ7iohhyerQXmP5no5Wqqyk7aKjGNr5",
  "key10": "4juCwABAtcFsLzwwgsey3k5k3CrFP1Xa5uJxq9EPBhM9bxSjPPxvcnTrdimxu6oWjEYjpuCZfpZXNwmJqqvwRzTi",
  "key11": "47HvbfsM1xvUK5q7zQDYK3LaqsVSZjs9cWGNTFW7w4ScmNKtpBvdBfj6TCrjKjPESx9nNfjezVVTAqb9f1BH3yBF",
  "key12": "3jKroQXFMqVK9AC3FBCzUtcsjV3R3PqR6d8CpuKg8e6kWzvrQgDxYUHeXRG8QiosL8fyRjHy91kxwMYGqoYnft5k",
  "key13": "2M9GccUVkW3LhrMCoL5sycGeX8bejREAvtZ9XmauZEAAtqqmSodKGt5qcY5qz44pnYcGLDue2jzMWYApkBkTELGr",
  "key14": "3YoGHF58Ab14CaV1AotaeZophNdvz5GoKktst8y8f7LfspMZTNdANfH1HLJ3EtSXKbn4zLTy9cxeuTpbQeShfjed",
  "key15": "4xRWuHUXauQtRaqaQas49bTvX31aF5NWriDK435guvb7bmvaNg8yRGbPXcX6nGreqfHBXpdhqD9YNCLSuRanXyCf",
  "key16": "2ma5AY5xUBDeGWdLSJGzGxeTMNypzKMTHBxeq3q9CCG9mNvW7ZMvVhFsCGwMNg47RxVSNvqBR5mZD5kuzTQaBEZd",
  "key17": "5RyBUBfe9TgKCv7yqRcygQfK7wSx9bbXcyTwMF4GpH7u2gL73cvNd9ZNWM8jHLvrMkkEvanV2oaNb6JCHit8ErMU",
  "key18": "54vmZuVYqYBEJLGmW4fzgYo94Crh8bAKhz2FN7z82DssDebbsMWoW2qEjxSHGmZsvqWM4QcNqcCG6wovUkVXwfWu",
  "key19": "3d6TKafoLuWCEDcEjkxYmPS6MsDU2uUN7XTi7dMCbVvoaZzYN7TGMnkuhCEMjKg4fzqs3HcaQxhu5MCcUUQRJCnf",
  "key20": "uC4RtgkrHFPQSgbeCH5KgghBDcdrB1DMuQ64o9DR4LDQtwTJvEF65miTWzxUVpA8N7Ey7fk3nRTr5apuCjajuTc",
  "key21": "ayELDX923Sj65gVSmtgGvoMvB4zGchaKJAK6qojS1HUaFK55p3zhAUgxxbgU4tnQxLn7xgRNCZdjqaeVX21kEA2",
  "key22": "3KHdHt8SCo7unukGQECf6aqvahBB9KLJoVR81oteaD22xTJksJnyBFhU2gWjMAon82dc1LZBQHnoimZfstbo2i2P",
  "key23": "45EqBkSLpq3HetLjGux4EY3PF1yKNAfKE6w3jdxLPg18sfQ5GH4QtEjaiGzpmRj3VXnGzpUbvAbNXR4NJ9WvCeKT",
  "key24": "569cvKk5C1NpYFA6N3wgPCnnLSmjZev4qTMnG8fq2HzkDwBWTwJiMoF2kLPgAx9wkguJPLufLMm5jKCLVEdhkuBs",
  "key25": "2ECsVtffHr5EC3TU19ArnYZdwVW5UVbZqGAxBkyWVZgJk9eDz9gerE1Q2UNSwn7uNnurvkMKMoXVSqXjPvLAKFBA",
  "key26": "2q88QHTYrohfLVf3qSfmeAGyPkx6mFc8kzwAKCenF7erom6vqr2FS5YQS1d6Uwgy1CJRdKrvpmh2sQXkDcSEDy6o",
  "key27": "65Nw6AW1AyUX85hG8DSWEooCk8Gn45QFbCbw1ugSGwXWmUxJVJ9uN5xQxbTq1ypUyj5Auva9wf452KNUMGFwyFz4",
  "key28": "3kJMa3VFky1df6fJjjnCK9GZCJmZwGUkcgSWA5ajXPJ5a1KjybACWrXrf2jDitZPMEuwPyj7tcFiYoKuuCcJeLcS",
  "key29": "57oSPYG8bKtKE2j1idWyQVGB4tcVKcEpZ1uvoKPPtTgUt1kAHxc2jeLBnwWj9Jt3FRAiVGLmvbvsw753xBsKpiUx",
  "key30": "28WwoDvma76TXn42omqMNQatDeXuraQK469TGtVxLFNv7bZNu8jjoYq8pVkdBq3BUCAPnj8MyuHE8oEnQXrrrg1e",
  "key31": "3DuAQzn1PwRB6NoiheVHX458JTvGudr9FBD8kihTSyQMNV4nA1yBU7aYC9juy4XvNCF9mbagvKgP9wLUKE6yXvVS",
  "key32": "5dkJHTjjrzRznxSrW6BoxCGdaxrFyik7oNembu25Vj65RizQVsP23uyWfVgx4p7nJDvmNY7pEZbEsokPYaRVFJTK",
  "key33": "5iLyaBzu3YeCdv9rmN1EeygCdPeFYxoMK7cQV1M2LyJztbk6NY5qULeG6kZdMwZE8aFxEaBo2rycXCQkjMmDqqSk",
  "key34": "4pGC9se5pt6kBAz6zbHEKZWiJQYgstqWWoofr9CKZA87MNUAyJHPbbXUeCWqGSr5upevRnoEX6FRPFVjxHfLq4KG",
  "key35": "5vN5Ae1YiZt8tqBxZCDKzdrbZtWHA5xFogJ1EMU6mkffppKv3Ecn8YHHxV9VXav1HxqGUjBXm3P9XEbEZdkQ8YQx"
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
