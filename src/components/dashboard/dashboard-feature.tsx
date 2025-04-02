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
    "2hEiRftroPeYhAzy3Q4aqb3b44QTNct2mGhYmAU5AXSAFQLrDSpFYnohqg5ohLhed1Sb8n858ao26xeruu2YynjB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35G1JCubzvmKdvE5CVJDc1V6p5iiX6S1VAG9CJCmMpfVURhG4EFEVhNv9amtYoZKXy7MKG7RjTk5qY3iemm33R8w",
  "key1": "3uE6t4hnLSynCsrfDsUdmGqGkFa9Q78eztBS6buCo96sLgGqBgZtmszUQBMLtcG3ycmLz1FMjxwLVsW9geg3TuCU",
  "key2": "SNn8g7tEHjcaqe4QoHfHmhPMgSP2XLgk8rCyWufRn82UNKNkbEHtXsQELsjPejWRXmeTYi2BTmTgoKRTHKnd8ZA",
  "key3": "2v6CbFFp7R5BeXpXZX3bS7FmqhD1VT681Yf3dWt7CSqnFQV7n9EBUbmrG4FjXNWATn7rvfnWcWkgYRmHvGBqEcr4",
  "key4": "5sZij4uqhcCyZ9a7wfNpwXNBzKBtEpRvvFAjoigu46Ga4e4r22dWhTYr7uyyRqpzhWZzpWXFYA5RkCei3oDXxYvC",
  "key5": "4eWNz3tMBscSXYYcgf6FETdnb5cVY6HaW3a4sBKX7WuQT46XdvM1pV1kFfRqLejRiryfGzPvNNiPBAXGFH5XqZS7",
  "key6": "2WxPLce7KkQufyhgeLxGVHQDzcNhEQwgsc6etmUw4heTrb17jA6zjPN2CJXfCkH7HNe3W1reTHtVjBc3u4uaXZPD",
  "key7": "5AffyWsoaHsQ2uBT8Hn1eANYXP7qhP5ZWjAWSkrMNzFHgoq7jYUrbmAyEKMLUVr5DoeCnA1owvGZoyXM9EpV7gVq",
  "key8": "3m8scxeepGCk6cesoKNFVnaa6WjFwLqbcqoDwt5UH9mCr2xgEXMH3qa8dX4SJeuT2ggRp9SWtkEAFUCLheLnzEDn",
  "key9": "ChPY8xXX95TjdYRdn9K5SQfMX2XKqQZcrj8mxBpUEVwsoddt9SmN3pcViJcw7hGWqN5QRPsdC1i5StgS9HxgQkB",
  "key10": "uW1knib1bjbWcpU8ZcAzsDGp6TjRukzLfYKDs5Lser4gHRJS4aFaH3MqfvPmdaeSH2JJhrZhAbM1zJpeHpokGog",
  "key11": "2uiHzxj6pkPWWVc2T4guAcHnXqFs3VfsVntPA9Zae8szrkjSGjRVeH9rMwvjCz2L5mFYZQTNNbpZoKB3a3X9DGp9",
  "key12": "265nmMPHiFhgi5kQY1A3YennPCeUqZVToYWWicLmu8rxUuSpK2JLfkrSANjQtUanHmohdR5xdh5VpxXgHC5fpM8g",
  "key13": "bjkDmHPf25xvwKdi3LyiSBtZ7sgMWzTszowwvmpaD4xSjmWMSUgD3bcWAFet4Lzzase8QEPp2WxBbXzTzPLnLUr",
  "key14": "2fJu5yCLH4CkRZC78oqVB8gmaiBip3WL9MRcWbeM45KDtdGdfySEJXrdJNMyJ38Nbbnq2A7k61u45SQxf2Ba5nwZ",
  "key15": "4BHYW4Nf4X6QxknTdFKWqUPS7EYqVdr6Pv99ysLm9kM5NUyPm3UYiapnoadV6i6R9oXKKJ5f1BScLcivM8d6DdLd",
  "key16": "4zWChzmjXx8ZUeTSBKYMTBbWYoWYXKbtbpTUpMFGTPhZbXCbPAJZaowkLM19akoHK1Wc1m3H52xDdEvqiDXWXUru",
  "key17": "2UGZRLurrfmUieQpJBzgzaFM1cqBESC8sQ9QfizKkwKDjLayprVw1uS59oK5Z4vjqwdtffXXmQoghuj3bG4VwxCR",
  "key18": "V2SFmym1VCL4VrUmzPnjikv2gP7v9uEKRTjqREbQTufeyuzw7FDpGjqBaQrcuAjbSbSwL6Th6koLgFyd8UCts3L",
  "key19": "fAu3f4aJb35zUYs2EJvRkZzzCUBnLbvQovEcep4DMsZxXF6uK97N6jpeAeYrwsbTyZqxKCrf65QGAE5T9CQHuci",
  "key20": "KBL1qHcVWC5T9m7yzvGMsFSSYf7Nzc5jFgPe8iovPwnEHwCga8LV2dBBQMKYgKkuK7EMzNLtX1UuP8EXRrgK5os",
  "key21": "646F11woHMDe7q7Q8SnyFXyeTHDT2gaX4DoNDRNoeFima4vX3iKktXhiPzis9Sa8vxTUJxtpnvPKCzxfxdsfL8BF",
  "key22": "5dX1u2teWBMuSFgte8Vja9oyfMcBZTNULLFVs2VMtN8TywjU35Zb3nHPTZoiqxQ3GgNh7crSCiVfmqRm92HwBcf4",
  "key23": "2MTQRsoSxhCJLbQSkNSTKDBBubJRS4v56hhyzG4AazbfbW2jav8pec4uzeQvW3UAQow7CJLK8m7zktVuB8MMfGzq",
  "key24": "21tqNUoPXRgQ27NqdZVb2wfKZHJB5wDdCJC6CNWi2K2PP7FgHdoNwokHDtAKMWwJBzX3txuqJF9ttrGAZJPY3VK1",
  "key25": "BBRqiimL1ZtiPx2b4L4dtvgyzQYUHWMrgkhRNqXbCsDXosxF5FJN12GQ1pxywguHdJhyQe9TFUj4zYX7U6SDxnK",
  "key26": "27UcNK56y4MDDeQZ35tNah9nwddWQ3q7PD8EDzs4Gz4s75YZiCH3qdR91bFUY2fv2fErErYxFXBiZF7keUrA4iNJ",
  "key27": "2cRc7B494myV3MfrrRBkXSxDVzG7Bn9W4jdFFtA7T24yw7zfedihzRbD4ymNHfiTxxEG5cDDdKUoqMNgeBaT9Kay",
  "key28": "2HS5rSVzFJPaWD9KjCNBBp5WqAPaqPxBXpbv928Wxmr4XFeaTFEKegCmL4asToCcATTwGxTYhSxVd5TW8J51h9EN",
  "key29": "58khqMkJ2N9Cz3GaVC1f1mbmAoyUsbdkRDBtmVqiubEkutMW2nfZyr5x6cnxG6BfnkiqmzKaka9MhuKERNhinEeW",
  "key30": "AQEGkGFgXmC4AD8UAKG1HytCiGdTsh5NVYwpZbKz5ZRS2w9GXTyTKZ4x3TDayLLhM1k6pDPvt5oGGnrgbduaLmF",
  "key31": "38vb5Z1KSKmrAF8tLX1SZT3xCgnDSSgyGEQfgEyCRMK5NYpxD55nU5GrKMRuGxSQTS9kN9jw1W3HhWim32n3mSFw",
  "key32": "4k2qWfKKhZCLKyAmdqB2FZ1mnqShymxQMAaj4PjxK6GhhZXykxiP4Z5C29ijHKuvGb5SJsTEhwSQ8SUuREJugfSr",
  "key33": "2MSztwqjZVzB1XtQCX1PnRiAsRWiXppFqWFcUg5zkA48PaAsqUE2MkW2j4gyUKzgKpgmTcZqYY1k2oKsGdaC1gnN",
  "key34": "61jv8eqYcCEhVLn5SUA1QLue8roCzX7FqPKGJgcABfFH38z9Lsowob5enVcXPoZ41VoynRgASgLoRpRNVLci4k1v",
  "key35": "bvtcX4WGMVcvdX2YTNG1DerJZBF12qESTxqxq5LjdSoZRXieGNcNXv9eMrrKmr3ptcqMgxb4TVuJeRZVk2CtZ7h",
  "key36": "2DDJWniDRpusnnfeQT5saZrxZp77WcBt455cDjDAUvVSE4z5zAJiAeQPRrngcmX1CkuEEpWacrViWeUBrnyC2vuM",
  "key37": "5c7qvKSAcagRu2KpJToNV8tGfRJA69Fevs47cTBCAhbFGGNQrx9xxUZDgrkyQdGje2qgegFjTL8rYCqP4vpyxAD9",
  "key38": "3xPNTSmbjNuc6avtuhyw9Mo333DsRGhriF9p2qwXVNznfHryzS3WTPBHe46GJKqJJcsCQoCGSKo7fufs7uHFqJHN",
  "key39": "7f8fHCa1W4ZwjXq3UTtzYyq8ozKc7vufTLj3JPmcY8pLpAfS2gnodGRDY4tVsDMFHzG4ihmSFegZgeSgZBrWjka",
  "key40": "d7iBYnSizwTrF1A5PjiAgY1aPXVUotiCEbhqgmQdCsVmPWKEhszmjH2pMYcAGE8tBx2HS3hjWjCPZ4SLCUFn3Xd",
  "key41": "3BuReXAD9n7v6ZAqrs2rbnAfagfm4XbCGo5ZJW5UYXA9ivjgX5z7yQUQ3X3t98BDitjumLXZQPv88296PjBhWqW",
  "key42": "wVjYkAr27J3JR8AeKuAHdBtH98qSrYGSUxfL4bWzVnByrZsYyQTicY45vrgnsxj7mPgCYCXPCgxs7XKopyNpsJw",
  "key43": "2DRpHHKgFAY8wdeonrzEvDwFte9kb1dd1YA722vdGJU8jvyCZrdd1GaiBQFGzac9NYYRvker1Zbo7ADYz6rhegWo"
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
