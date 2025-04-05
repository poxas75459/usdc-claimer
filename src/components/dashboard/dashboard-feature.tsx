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
    "nf3QtG5GvpBph1h1c76C3LaRCLLxirxzCjmguzK6JxAj5v9LdexiuvwvtvDtF4BupZwgujU2Z49E8bStrwpZgns"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fdL6Ko1YdwsCd4U3hjvSKJDNP8cwgZEJQD2SznfPqZn1fsGgBTS9VeRRDfqK616jWdTNcc7YjXp9aCNUkGJcXy6",
  "key1": "4UdfFPnbdtRBENoWsZGgA9aVK6CU7b4TdtfD3K1XKucQAxq6rqrB6nTSfUEiGUtzhLiQAjRgXGpcPfLr62ca7Gko",
  "key2": "2Cxb4xHwk3KRXqaErn9g8hEU8quaMxPzCpQSG8ph3ZZA5HCdn9M2uC3j2uXowKqWr4brrJbCXdoYRJH4yeMXBEkX",
  "key3": "ZQ3EphgBiayjYWc5f9ziCcj2MHWPxtFfJyKHCuaGyFZfK2b5cFDYhuRSeVjeDvaSj6JC2FjMvqeP2TZPnmwqiu8",
  "key4": "5b4EYm6b9QcZJrvdxWfq1K3eX8K47QeYGfohaVSpcuUNxr8s7gNEDTcDdZQgcErPLSrRvGt3ZpQYNhmaAdgEy7wZ",
  "key5": "3LRHuxqqKjxQR8gckDj1pJgjRvDME2indqE14cYqdoV5KC2C6vbgAq25djiQxD7KAR17Rinez6vNUszTtYhNSUgy",
  "key6": "9FLHrh3mUjrL79fGcj4QJfTySdRxntyzXCkd6hVw9vZPM9L6e4CcAwQs9bQSJMWGM8B18haMaKDLZCup1RBqme3",
  "key7": "47tuNh8vsbzos4yEoe6H6cy4Mhnuya5hVtzLiEJTY5CpDBwGtBRYfmDGaoNCxz9c3QMKB2Ps3GaD4MhFPyvzfhfr",
  "key8": "i1icFSgZXoRgtFnCo4xffHoGcJdXCQTJ2d4QQDYEGcMveUj3JCmvcXPiF8p5qCBTkbWBV9dn3CStdSa6BXUQS2o",
  "key9": "3EVoDjS8MmiXX9H5ZW1V8XDwjtn75uMmwxm7j3A7DNcNjeokWHUq94r7B6XMVGcMm75t9AR9ENADBWmy3njCAzc3",
  "key10": "42XDV9eidzAQJYsHaX9A5ZHULHwDSWi6urrbATL8BYwvHwbUtqjuKQYwnV5JQpy525V2PzzKw269WqK4cTa6uJbf",
  "key11": "2sySDmB6qL1kw58oPcfD29ebT8CMPGMuCM4xHc7TGoXdJRb6SURBK8e3sJCAfSRNowkLczQv16rS25zEzYxma8V",
  "key12": "5YGggoWSbYCWzd4WxJ6LKr7Pbn3V41sDybAejw7BGu1qubcRPbyfmNMJnPNTE4ZpvmLUN5st19wz95EMMVBH6fPc",
  "key13": "2wy5oq4aizomd3YvDeuj1SLCZKeETbArRniD9rMGfeGqas6A3eHkuWP8rBdufb3psub4i2GdhfZpa8BwQtXPC8am",
  "key14": "2Dk8EBCQE2VYzySMpoRA1384Cne9weMhULZtP6FwDWg1K6kqvf14H4h2s9EiM2ddiPf1kGqgvgFxErRu6SDCagUy",
  "key15": "2WW4AVmViFYcJngbaHDS5pqfALQRqBDGewW6YsFuAX1WEnNQ7Tin5xUDGK5KEv4UdzruwQWja8SFv7jnfD5z9FaY",
  "key16": "46Sgj7A94jTnog1LPVuzScGGqRpGeRkfjjjvWf2uQYXsK2oDSzd43EMvfsaed2DWJteSfnYXBWrh4Z6MVH7b55FH",
  "key17": "4rs5CD7y4DR8LhtTygXpCMr4yFo8fx6qi2gRDKLgomipd6ATee2uHdSCGhRpcPrVTsPK2oC82mbziHP7z592T6KJ",
  "key18": "4eJSPDBLb4pWoyaVd7UMqPt67zFftai7gDUYN8zoSHpfGEtisZwm1JpC72FB3FGw2tb9ZduB7294MPntE5jGiHoG",
  "key19": "3s3p3i76xJQAK1PPVjRjvSSHzJcXYKyUJMXMZodB13z85FgAjpULHq3o5KiUf6xKeXshKoxusMPoRTdGjuN9kJux",
  "key20": "37bvBvHgJYw97Qzutuq4eyqHFpqcNj7iJv8vLE6DESTmzDmrCMhM4bLUxSTqou4FsABCFXyy5pxQs2etk31msSme",
  "key21": "55QwT1w4ZipAuH4NqVnnDMHGXDA4zY8KiXt5ZdhNTvQUT84qeSG49xd6G6gVEtxAAc4MFD8usRHt47yfSKudA3Uy",
  "key22": "4CGbfh8P5qHJTETWAc27xkS9RxQNdK54pjF5vA44k6hnySu8xxAdLvQpvoDDuwBRXWZMrXJfynQWe5BsQbNXmpuv",
  "key23": "3QoyZW6nCdb2eNSkZXcVjd8DtTyt1imkeikGxTPLWY2P1aCUK7gBVEZQ9cYbRnNzF2rrped4Jhi43uvwTyU7Xsdn",
  "key24": "Vm4SyR3dBRw9AiQKEmKgnZjqKmYaeqxsUKU5bM7MSfZLnF5ovGr8E5Wc9zmZhiiMx6LDwizg5XyytkwhqApF615",
  "key25": "25VGjdjXeCYKteqUqvLYr2LYg7m7prv1ahKHiMVJ1oYno1fjv9mzzF6EZFBcBcCBbKqcpLjWdygmh22WCtciqguZ",
  "key26": "5gHm6BL5FGfrL96rofkQGgYgiX7YZ5qChaiU7diNoYhScNFB8PwUZM3QuhT21ACUrbzPVpLCKfCUEqu5WE61nmF9",
  "key27": "3YGbeVF9p67hN1ttv3FrYRCgCvae9VYCzzw69NG9zK7SB829HNXNtWof99J1wn1VZQBrmboF2jkZ7peBmsfqXFEA",
  "key28": "3rT76Eai1VohTzsTyAQsBniz7Jm9gxH6uFHFaKMP2ZbVyADH5E3Whv3RMb1ZX7F9Cq3XyRWrnqspm15PAzx87FvX",
  "key29": "3R8bvSFQo17kLriwgCQR2YWdrpdi6xZxJ69zo8rd83nscyTio2L6KdiVhcygi37J6bwMQ2tUNGS94SHZipR2eWH9",
  "key30": "65xKFD666fBgmbmsDCph7LqvWMEmJkT6kmvS4n5H2xTFSk3AHdB7e7HPQXfGnFXzxhwG9FVkUj17QjWWCx1Wuzfn",
  "key31": "36VwZvMaTrM2XS67pxBVctLdW35wrUH3qRzXQ73gdDapMBTDd4GmNvctNAEpfzCLU9uVFt6KPPYi2QYkLWvRg6sM",
  "key32": "4mGHmbGFZPS89uZe4w8ZLTEpS1p7diQB9TUUEmtQiPF9ZpwhRLiZinpx1EVfpsQSpSrkRLNGBaGYDQJCNuG91j8D",
  "key33": "5SxPf9GXj2U8qe7BunacZA1jF7QZKmCThwtC9vPPXtJvJ4HLYBG9fRYU3zh2YxriziJVQWii5YVtPLxvUGWW6b8K",
  "key34": "3nVVDcjJPeNw8Meif4rMK2QYJui1mCJhs8GyhiBQTKnSRR8DAyLz6kQ2qbVSgstLjohJZ8UYzzsheKXTXD31sbJF",
  "key35": "yHZQKyGEtpFCcpbw1gZTLGy298Hhm2PPcnLFGPxWGXkqpwZgFXJKxyAtzDgmzJPbaEkMev3J81UmhXyu5QJkjcS",
  "key36": "8ZNiWUkVHvp9oTodNkEkEwpP67CfDu5rkVDZmSYoN8GmAxw2zapS1RVgGbBccFGDCZcbjYz6nqUTMvmvxryVnuT",
  "key37": "5t1hiG8nXM6S7xygzinbedqyB6F9pK7ZpXNj47K1V99cDfezTkwTua25X5reKM9hcjRxSQEur6eqvUwdPN6XHmys"
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
