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
    "38eosT71iRNGdgksA8uZhckjQ5sq5YUdxhQ2Y1UQUxM5jSkfufbx6HGKQ4VpsFHrYjysZHfj5oUw4tm4JTc3m4Yz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NvYgmzyHywiWp5URqdf1DL3HNMGSvjTU3LyPEs7GAz7ArSpSwBrCvurqUsFXfGke8Z5oCHbQ1UxAhb3mKcaWusb",
  "key1": "4V12u5RXzb7RvHwoxjh9PZ4n3WpomMVD3pTddgQJkEhkLGiCRG5eNG4c1EWKMXAyc1rT4o83cAzuCFj1sGuqRTAj",
  "key2": "2oKefQ3iHZdobJuwKdjjT4jRWAuTqwdsm5A4tFjcUTrKvsEFWqPr4HVJqiQgGYXjNyqfquiCWkGHtHZn7xmMBBXB",
  "key3": "WCsUEoZP2Ygpxkr8zmbVmKtsERaPvWkAAdN7zbS6nMPQYU4EywmFrVVj4Kp8Teu3UjhCWrtqvDejkAvujJKEkcx",
  "key4": "MQ4W5Z5YmtsvSytRg9am8AM6v2FLhsaP6LB7cLY55y5cpfCNUbVmHGgH7X88EnEvZyq1gntdwkUstTJd1EEmPqm",
  "key5": "453JQzkhMR8DfD7Kz4xRpBHwJF6RXHcc4K4WJMBGGi64R5GBeucMBKkPx6aneeFEaZHgcnCYMbFkm1z9oqw91i89",
  "key6": "3L5cDqMn5ZvNRt751tRDVHWc7Yk77jkcn5vdSdXbeegNBUi8T5exdnqd3hzNoaY5iw6xVuxv9Mk8LDFAKgzZm4rV",
  "key7": "4JgrhgQe1LYfQSagQo3n4m3HHHeKc6N8pcxX6hVEvVGRudYV7Rx7F3XktjTG4sEXPS45P7LyLXFmmbfcee8rvm2Y",
  "key8": "2eQ7TEdw8nvLk4LWasUY35QJFZjUzZDBtfBoJveYB8Bzg8UD2dDPMQE7zijgMWwk3LwwntfS8i7oMiChs8JUxjsa",
  "key9": "2yBkuYdAsdTCTkPVRoRJecUFBM4iiJ2T1E2VhdtK8U2nwHpgezdVDYYpnNzRgZGk1WKqWjU6Z4tecf86nvUcjqRd",
  "key10": "3HMrZw42sn5bCBbmDVLtAtdmRTatjUawuPMsefxj2pm2doCyYmbooZhAeBoWzcnz32ksSEGBkjJqtbKq8AvgLDKu",
  "key11": "2ziSEHbWEsHCSbuQFjTj1vZ7S21foH6quN24k2qksohtSv6BY5W9BP1BJPbw6pZW3MZjHfeidjBZMtzu4p5mXHi5",
  "key12": "3dC2ArEMMZgxsckFZv1oy3Z4sFeYFDTawyNgN9pCPQRY94c6uCp6jbMvoB5cAQ6aWDGDQn5V8GbeGHw6nL6w2n6R",
  "key13": "2fNkbW3sSLJyLBBLgaUw1yWTjgs3EMQQeoPRFRebwBXFViGxmnGKhcMoG6wWcs6PeGcLU9iHPLwTWQu1WppYK3nw",
  "key14": "3PL9j3NUj6xZKx7qT1N7iaa6ZWR8a7b3RRsmSoT6guJt3aVdH9PeoPCWuRSSRQ4zB6j1rbr82hzuXDpJWkDWZand",
  "key15": "34Ghg7pQauZv7g66BAdrcXgC6rZogEo9AuSPM7BP9K3NhXxPYTTvR7cjRhtZmTqTkdXpzJQEFzChq7gXp3CJZaQ",
  "key16": "3iPSHW1mCJnquWBBNf52HzN3Kj3UW6dYykHWc8q36CBFguUFKcTmcPbayFDfTEsMDMMkZpDXv77rrZUP5Pc5z9XW",
  "key17": "4MjKrRYdm2UzEck2fLqZk5qKVi45DUR43sEZ5fjMUbpyEqWTXK37HYMyBa5kkZTkRtAGvhyQmLH1v9ASuoKY1vkz",
  "key18": "64csnUnXTVxiS1ejN3m3bdW1EF8GYQdX7V9dnGwC7E6L7i9gSgRJYZfZqXUMLoYRE9TiQZvhx7eQX17QTUYKpbnL",
  "key19": "5kjdRL5gV4iBWqs2ffLFDxXxtS2HBTjRwNGRNcF2egQoKeqYw9SRReiFCBTwnvuLKzEeKXYDbBnqN6jtYutnmNwZ",
  "key20": "25KrLBtuZvAgCoFpkxekTW8zJCkawDtfJeRzcc5mm7avVwAG6qiL5eoCGfhEyMcFEdEihWkKr1qDQahG7oNhHAev",
  "key21": "29b5nJvYuD3vQLEhgQxhD8n27SqCo6LajS6udhzm29v6ViKno1ooz7qVSXcHXu93kWaaFGubkCHdMH28WhTNw9ZL",
  "key22": "5EAWEimz8syqPiFrxAVZVtyVGmziUjTubKXytJ1B3Rc4bbDimHWkgLXXq7xKbyKy2na3E8SMqADAMMKEH1X8eX9f",
  "key23": "5pUXYAoV6fvU7TH1ZWqLoxXgJJcEVoyL2EDrxDppkg35EzCi6RSbk95Aky5SeF6JEmMP1i2ntK4MXxYtHd1dC5pg",
  "key24": "cssBuGrANmw6MryFeWGmqX6JLA3RfmUM1gBasX9PSBCURKN9rc8ALzxgaHkktstWs6mPo7GTxGh6CAZ2vYELehy",
  "key25": "51tDtMCpmZfFr8qB3L4q4nHyi8F5cEhtGfMysm1RpjzNMSsuir366nzuaZmy9YnDhGfuthoydpZE7To2vPVVbeAx",
  "key26": "3kzyFia7BNeEatSTB5QbZ8ax5JQX4bQGEsmExUXB3FnjoAgxzHsjJLg7F8b7orMoLQrNLZFWvTS8k4i29Jxj3H24",
  "key27": "2v7vnKkULCLFugG7NjJyjVhvCBSb3oEkjx21VwjSDt1d4eC7QxeenXyFY1DYGK7qDHLgPYtDfkU7ABRWFGoPFU6R",
  "key28": "4m2WofYYPWeWPLA9vtTWCR9xALqehxXUUG7fAioC4FBxAtwWFFcLus9dKr264zQWAT7oigN6YVfmk3NFkJLJurdd",
  "key29": "2Wd4iJwMnQKb1jxj6uZ6J6XSu1pSuj9nA4T7c3QETHVG9cstvf2xriasPaiurYyHXgwZRK9Rx3qHvwbrCBUVquUm"
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
