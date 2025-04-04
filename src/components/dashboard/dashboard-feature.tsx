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
    "3w9cDTVUmBCSPn7zKFWwJXcG34inKYNHyrjQJZh2xJNqysGUcUPJLLeKmBC3i36t1BNNPziLVLaXWzU2A1BtwGJ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xF1Eb1yamzPHLtthoouHsdfLeFTAyxGdEpRmZhk4hLRHLeSXnSdSuE6GQz4SjzaZ1p9Ph6pofsLkvh8TBYdJF1g",
  "key1": "5eeVCrCQgDmJSThYdY1DBwJGXJgD8W3HQYMVesbDtwJSJd4vje95xd5UCqgGhAR2Vg66EwraV3Ra3u5g2MXpRx3b",
  "key2": "5fFbCs8R66zzHFcYKvHn1mPzztFFnpd8swxkbUunRyVijqpE8kaY2KjMSTTPLwqiEu29xMrcgiwJS8y39szjiuCR",
  "key3": "33UME7jjCg6Rn1i3SZpRFR7DoUwdY7Evsdh1uQVMEVXxseHsKjJypyrfSL3DeJxSBf6RWTuTttbwV7KBTvvMYCra",
  "key4": "4iTjkGmKoxMcbQhBUktZpvUWnmge9JDyVZ9cpZ9gtPcturNrvfxnbgSHpwEUYzRNcPcVtsxr4nj2wJt44j2bg28F",
  "key5": "3qh7EUyqSp1byzxdm5gvozt1UXcew5n4u43c5h3Fagu8UFWBBK7F4cSJTJy3gJ5VWRvseGPhsNqJwd6NFwxjBLeo",
  "key6": "2FrwdkNvchAN1yeAN3q65ThUywr3snCVLbyBzyjb4SxYKAAoYcmTLedpAi1QEe5SeBfhZfQ8SNBpzrgEzZEtgpEn",
  "key7": "2vfJyU5H8RNSEk6c8TmuiccJSMd9oDi8uZ8rmKQefApdUQaKRFVWgKYSKcSojJeSTbkTqdWQhmcMiA82FVQrJbpm",
  "key8": "7CXWeWEFuC3giyDFRthJXqsan5C6L9YzoSTXzU4X1uSJSZJCV5C4iKaCAJp6cExJZrHMfMeutu1KAhLUNf4gef8",
  "key9": "53Ex7iRL976eCVRhisxnQE1thqtJKjbnJTXjLNoSeLnEsdrTwNfHu9Toq5gmi9eZiAWizzM5LSSC73xj5Jdbv9m6",
  "key10": "2eukkS1wKx1WxjSFDcDWn7PUFB7svnsAaW3SMZpWU2pAsRXQ1Euxngz9rL36v6Ynvz9f3qANWTxFiuDg7BbXwAwS",
  "key11": "2fXFqYJbm3c61qrKWE2ToiGmRperSZFYk5QzdsTCLwRCzWwYb5S5BgUwz3vuWGH2YCazSbzMeDYvrpy1fK2FNgiU",
  "key12": "33FzrfK9iaPApk15M5DuG5rGU3YsAYNRyowncGneZ46jVtrRag2D8PEJsXMeHTSfcVK57sXJi9eZq6KgdPBHf2EF",
  "key13": "2JPxK497HHpi8ynu9vERpt1uuTYYqoVG8mXSBhU8pqiq7fFBa1hcP2KoPMqY76YiCRFVkS8Aaz1nPrcoZpdAAM9H",
  "key14": "2JGhhZg2qsnKvkR7ZKQokB6BtjV8dNQcwXw9k1bgvhEEwtTYGdBqKrmm8WA7DsXaQ9ftNQrbijnNiX8DyFyQntET",
  "key15": "3sWynQdd5hXgaz7MjcHmf2z3fiVwsTXo18uqk9ip8aHGZsi6zJBkzE1T93guMYpnosp5q1aMWvo6GTpe3VqEJtut",
  "key16": "5T6aGs5Pqk85HLBZMkyMaCUE6cr3A2vRX6N9rb6f7LvsMr6jpNVxnDdWfMHrD9qviAL1QunmkKx65pSbfiQerC6u",
  "key17": "3xq5WN8jRR4DrwPAbPcNnZy8TkwC5eW3jrKioqqxMTwikmXionB2W9gYVQ2jPH3ziqLDzCHvqAXq9wcMK2cnHujm",
  "key18": "4MBCr82cndKjw3tnpMMdxXzwongupnXEN8r3dc2MptaJvySt8Z4Q8Baf9vUzUGZJ2sfGqxLqf5XpaJhDqU6bx3Ke",
  "key19": "32FsvX7oP9teTk4Uz5Dx7gNupYtcWZmJW6bRyFy4ducXFFG6hVXxCK98KywCCi5NxxTSHsfBwhqUphTuepvaAQRt",
  "key20": "5Yd4BbTeUCYLk9Azhmo8H6kVwL1id3QXf69tJdUynUwg2L5tB4gUrcbm3JXqgNfX7d43r3askVbsb2dQdb6xSB3h",
  "key21": "5qmttfD4oVT5A2JyC38b4rBUCu3gucYJHDFwfnSk5WZyMBAac2XZcdJNpreo1XEdp5A6E325GUg37ZpYZtc3sHgC",
  "key22": "4Q7ZEvNavw9fDfMP2fazKuBHSdDzsKpFQadBTLGjmi51yFtwwRvrxz8UNRG4LM2kDA1V4ZW2wpWCUcXrn65VXwPD",
  "key23": "2dejcxjmjEZhWaLsPberubeuHWRKFQ1RLo5mubvNvxo1CJm1S9APG1x6XEcmMbhhPvJFpHzSc7A3WUJibP6o2iFX",
  "key24": "2e21Bow5NNmZG1hRbX63LKRKE1tGLydjhMxiAoo6gZtsmfMKoxWhwhP1wMtwCPSTTMpZsJJwzgmLBu6jqroWsb1t",
  "key25": "31Fn91TTHbk6MC7MKMUoquPLtfMXmKpZ94hQzGHtV5Q8TQKhZ1ddXKvN4HE35LtBhVWHhaJfRDxhzANb5KdUjZHA",
  "key26": "5iBcwSStzdx7RkpcwaGuF1mTJsEgJL6kYM4ZUkERn9bCvGPRpspJngtiUnhL6AQ2usxnhscNWjrTg1SSvDWrJ1Xq",
  "key27": "Wo6MEVvEvoniFo2hhB2w8YsA2xHhBZJuhxmyzX1NmsEhZDSEF6xUnjcmctvsuzsME7L816NR9ELhqUpPBiCCa8f",
  "key28": "33NMdUokFhttUQHKNwQds74oxwhfTP9Mb1JsNVkpyqkprf5jwGW8Y7Jt89QgbcvZZkYpR6wFghVfjc1MEWjQv44W"
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
