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
    "useqTCLnvT8s2PCXmk2yokKcMwzZxgYNzNvxBrEEjkf4iHk4WyGguh6BqvJFM9pfpDBjTvKmVtFVSJG7jFC1eza"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UJ947eS9MNfye5vptMkRcPDDXBaof3PXtLc8GKgHSeiXboJ11qZRmQY6drMfLrfPbZgTAgRXer1aCMzXVecGqSG",
  "key1": "juJBGBya9nbsMw7WFFFgVtacGZoYcQ3Af8kUbRd5gyvzVnJQYX2e4eXt7iAunzHZ9Yta3kEc4toyeXjsHmdNgcX",
  "key2": "4NMiXTVZQLDaK9CQqfErpLGqfufoAgZtxsHCgh3zmUyjhXws5tq3nWhckX3BcYMVEvXEKN4c9K16Ag3sYEL7tRJd",
  "key3": "4eMHh1HqZFxYFPFDNaLGiUSurjX7UvcwaMZdW9c9J9bVHUrCTCuxr4mdB7ST29tJjPutd7fs3utR9BgDe4Agsmdq",
  "key4": "4euhB6LyMk4KdFH3kWCsguDMKJjM3qrE1oFVr6Lor6kEkVB7aMcDBWvsyHh3iDuj9wNeunmrz8zWB6rmMdzmLA2P",
  "key5": "3E9eKoeAb66NpaWmfUx1LbPnMVQAPYpRqGM8fAu2DkU4mXQmRekptBowm2PSPAPBrM73DpaapGN6d4duZL48TQqR",
  "key6": "4bq1r2pdUnxp1Az4JWZgYnRCb31Wv5JnRsxgZCHxkd7AXY9HF2yqdzkhvoyW2Y1phAzZF9yEBerdo4YaPvgUpRAz",
  "key7": "24Pm2GhgKqC3j9ukCEWXGMPWbbDeV7d7JqsLqUtNWfWfURebiLQRPkYSGqYM88c12Yp6wzgkHA3f6gPQKnNxmn34",
  "key8": "45Lh6tkYwXBc7gicpqDESjEySkMHCTq5VrfJA4rvLpjgNYpi6KimSLq8m7jPtg2iq8PHnj38rDrP8N5FfdRFjMQX",
  "key9": "3ckeAHcp4DSCfpUbg3QpXVNjKpmUgaaSn5aZJYdhkdWx61xB4PvBrhgwrjLxayyVQV6FWLtxa4c1cMiohMJaVK8w",
  "key10": "2vgfWTJEEijK4VnbUn83qH9zZE2BHz1zw4nb5spLgDX4qFSDjyHtE6kEZGkkC5eCdQfBZDnfCBCA2UxmvZku22aL",
  "key11": "23hFSyvGUSEDw634cNvNHqSrUwstxKM9qZ7YDStMbzFvELhbZHCFbCWiCyApkGJrtxq47sutvjqh1sXv53CHqpQh",
  "key12": "2ouvtY76pXcjYtYJCyJk9vSrReFpT3CYuhggZD3pHsJJKnZmKcDrDcSUSP7XxZnuicuZV9aAfDKxmSL1Lw9U75CG",
  "key13": "5BWsDB6J1Y9mP6ZQo4unTiEjb92SmtiQET4Xn6oiZMYaDVu5KiLrsmWE272tYQQ4hf6rRJa2FzeQbRRyBCqmuv9S",
  "key14": "2SodCywyVKT7kXZqZ3nJzDHGAN2RgW6tyUTppeurVNyMoWBND8FtQT71r3REu1Bp4ySSQEMemfKmUK1NEioeutoS",
  "key15": "4f6S3RSUraEFk67WPM1AbnH1Kp2wSLDF3iX41BTJvFBAhBeGEmFAeR9Uj12FBnp3qdie3bxusuXeevv9yJzA5xcW",
  "key16": "PUqgyhCCPvbfBQZTRTUVDFR4RHeofqx9LmcwLeJ8mxCm5DWBFZHe6NmcaeVkuJc3ahGjdXqveiWpAQpmSy2yDaP",
  "key17": "mTKTSY6xf86j5YKEfQRZAdgRXQQaxQNxo5DYjrk8bhoDJbGADG4udS1J7gXMWH3C57EyHv5q1zxmhP5btKUQbc9",
  "key18": "3exQhH5wWwjCGjkK4J3wxEJ6aycrAGaqj4UrvQxyv4hj6sH9q7peEgvET91bLLZ9pALpmt8rSGk3YwPEX7oYXcCB",
  "key19": "353Edm7BUVtLV8gf2S4KjVwCcm8Anbf2ZP4e4oVNMTu9fYaoyxHRdWNRyznQnjGykZUhA6JYJFjqo5ZdiusXzQ9",
  "key20": "4FcaUnLeWGzGTG1CEBszbLXvSqFBxdTfFQD21grkF6pWJs5B9jRFPBFV618o6YodAsZvZb9X9YTR85bNPq1RX4Uw",
  "key21": "6687Xk3Wcbgak89Q48YAd92bJWziTEku6bQmHHfpQbapLzKqMHwtDjUHFBvTmwAfR8v1onX4A8S4M4RxNxW5Swbo",
  "key22": "5dCw7cGz9a2LoTgoJH6iodTPVbraSXfGcaxu6wSLp81Eyh9XqZYsFhe9cLwCeo9MCpS4VofsZkFYTyo6UrKnydmw",
  "key23": "4PKA8Jw4rg4bY2tiR3Bbwk1oFo7aML9JtQTpjirXKJfeYiUk4nA7Ho81Kc1H2KLVUWLKx9EtEsKRqgLq4Nt6qABf",
  "key24": "4i4bYrAX3dE7v7SqxQyDRr2J46VZCcLzNwzzPmuY7xrEUJbN5QxwJptz3F3xJpJKLitbLPP4cJxjWYAN7Wkee3Wy",
  "key25": "6jJPEim4r12u2mrUYcR2tZVsYSkLjTbFM7Kjqb1Ct1Lw3MhK6P8JUdcLsPj6pzpppjkr51efX5mc6fZpJGMJCHJ",
  "key26": "3faKtvphmxYQ9wJidVY8fdjYFZ3UACRb7gWrGUWgfAucDTwF11W8MTJKkZb33cDub146G9jVpip3w2NfJ8F6CFKs",
  "key27": "23RVcG1EfDRRsVhYJrmQ9FMYAScQPYvKfNVMvE8EE9xuD8UmXonUp7deBQyev5Z8YTNskPjNTdYMGmhUNoupRZLN",
  "key28": "5bMsjRsduKv4P7MoXaTdF8gRyVpcccgEoc2uou4XUhM6qVLsDNZbsTt5TxymzvexyPFMZ8Q9pKVsQhZrkWo2szf3",
  "key29": "2ec4fkUxLfLFCBTVgSnPAPhqUGAapSTLUGvPECfgVccXyHBaNYdVvDJGtrXH8wQwDTVWDB4cV9XNKAAnMn6anft7"
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
