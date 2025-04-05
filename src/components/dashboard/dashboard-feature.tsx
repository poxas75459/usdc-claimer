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
    "3CYXCHsCXdmYVjUWFEzcJ92UQb5Fwb8kokuamazari81yRkavgAW4iz5iqVLG7iyJ5rvMzycHZCScwa6Hiaenhwr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xSrgyp21mo1FaZguMbUNiHysMUiDSFyLpnzx96s7zGq5kPrFVVVKcPmbHMdBGjtoHaFEoc8s4r8dFMr9sUe6xft",
  "key1": "GM2y3fxadSr9nWMBJWzcg1eeGqUebQoiy4ZRrq4HXnWNvakmEG4kZ8c2umL7pZeiUuVvVgZkRSHsZsyN4uy8EmS",
  "key2": "5x6PsaWu6x4UJA2cWPRiyrVk13yx4xa4JQxDMdb5m3xupwSrUQoJR1ET5HKSjbdy7UNFfdNzUaTbGKGtXxe1AuuR",
  "key3": "65TWoHm4yr9MEiZjgtUzb1fBN4x1F1Nv823ZRVkfa8iWiEjD5hYwt8Bx5Lp6YPJ47YVtcTKMj8q6YGeCXxR8LWz4",
  "key4": "4jv328YvZ7Lf7TFjTsn43otWo76Vctnxyd6LamY2ZbmAu3L78dpLSr1otUma7uS7xgmYYD7owNfQU5jZtxZKhLXa",
  "key5": "2LFcj1UPYvCbJUavJJ4BkY2BW1QEuyQ6ni7XtLQigx7GgQaPygAfHes6dNfGt3f3eJiQKGr1bAXw2nj3ftFQnsUL",
  "key6": "3VMoaLQdxWM7F4MuR8wAaWVCxH2aGiJ2kJr4Y9i86eAUGXNRC3gSaL9pyqsYriHRFQx8UKoatJihTUWLqLiApnF3",
  "key7": "2iGFWBGiM261Em6RNcQdP2krVYA2Sb8vKQgHwSYJ1B9tASyDf64XiZB3xymzXeisH8YJ1ZvvEszeFzeEopd3ek7d",
  "key8": "5omCQBduED2bpm99CAzqtRfCLwae7ksciusWtt28JNqHrytzfxtB4QsT6hKA7k1SPGcsGWAh4x9pTx3qSuw2utLr",
  "key9": "3tvU2qpsr9GngtdcVkXSKDZeRekeLsF9uYPdDpoCvY4HLfuPLhtP2B1uPtkFAo1pokVWeNoUdgokt8R2Cp8yVGUT",
  "key10": "4tF7SMS17NjWdAaWeQPNN1JKMfo9ww5WMuJM7PjbY1ycE24yrFT96wahgWpoYyG3mW2Ap2tNxyXUGNDUVGrXmdAk",
  "key11": "3x92fuojP1WKHtMoWTR8XznMysuZtu61JDfbvfyJ4v7Nfd1aEJdkxaRp2Gx856xThmBRwY3vrkfLPWqkgCSa3TJ2",
  "key12": "5Hnz1dDmN1Q9jfLwBMTq1JwH3bpPUhDhnbCL4cU5Fp3FAcq4A4QGGxNrsUijvoALgBbYAQrP6zkCHhmwmxoCpKhE",
  "key13": "vqRYAFqGaemvTfG5Bm5aizrLAisH7tyUAyFS4WUnhNFCsU9yY4AHJy1SaSetrFviCqinEvwY5Q7vLBQHgSKCdFh",
  "key14": "3perWqRLcGVGRY1WFyAhtnDRPYjbHUVSa96xyfVRFpb4MTKdBtdV8jojTkMPgroZJcrR8kgM4LHUJtpNuoGxKGpR",
  "key15": "2RmAUgY3oBacGDHJ4GnfiXHxo6Vf8G9KA5DYSCkk4JeqqfbFAKrAbsb4RNwGcjBY84MxHhEzVJCgDLU3U5KptPve",
  "key16": "4tRLtGkXXJZ9VyX6w5SLWYU2zwCL64NzAuU6avoABB68UYjM2NvVVtq8PWQYwr7fpXctssAptbq9R8Anm7W1NLXt",
  "key17": "55x3SfEcD9BpMGXT4Ddtjuq1npzvXcioDgJcS4EVj4a69fJCTX65XMfcF69M1mGTNWu6u3SPUGycCd1LH8u7q2Tb",
  "key18": "5rsZPs6WpwdPHsFBeqxSeefGGsBdK8UQBCVd4Ct6GcyFshNSx5LZyQ653gbBw1zM9BEepvrR7K2an99TH4HiLeAe",
  "key19": "31vQ5jgJKV8sW9rdzVfWDjkJB7tzyDkfDp7LKfz5dQ4VUZT2FZt1DZym9Dpe9efck2RGCghL7G9GQx4uw1zwghNQ",
  "key20": "2SmsUfm4bvoxphiw3AUqfDpfKHEsDvd7uQMzJ4L3eD4QhLAGzjtMPvCrfohfioeij1Qr2f1A8jpFHbUZwMMDgwdB",
  "key21": "2Z38PFRjK26V9J1UZzqxUeFRGLsqYuB9aVeWy9nVEDtBQjh4kcc7qbSgoURyEGoA467aNsxwbDe4VfqPQMraLTxW",
  "key22": "26aoAXLxPVpgfXsCe2eetbJeAzf8fPtvDpjPHw6LJ6boM8dVcwMKq3cMzbds8gjjJn6jgg6e2jizbyXCPfMwEK5N",
  "key23": "63PmdEMmPri5CD28jXHzi3X6JDooWtFdzSg6WVPUbpJ2ZbXe2wCWuXxTPwLZBDnL2Xy3BtnEKKyLpVUyjWcjmvPt",
  "key24": "3WCw9Ms1DNbhd8YBSkSxa9oD95HNTeSLcHZmkBh4rvT5BXsg5Revh7B7WAmdGLifkqZwwukQ2vUsp3hzZWZ1bjhK",
  "key25": "4D6UcdwjDaWPgXxUaciFuwcUZXsGhDKgZduoppBNxTawqF7MsC7cqf7r9UELiB8XjhKHTGpvUH2VuBDV6dp7PPPt",
  "key26": "4JvHzLeyPGbqirrsLMPeMe7CoJmJdcsSpVG1q5rAKtMTyqaFqCVmQBeouGrgzoiuoYyQRjy6nurnLT1arKfujgdn",
  "key27": "2T4FPGJjynaqpiEPNMoRCebcd5xUb7t76so6ctBk992k5qmLFSe3AumV8W9t9EfAGCHhXhM3XoiSVA3Nu4wcDD6E",
  "key28": "2cnrT9viHfA8ryysUVEgLXZUwuSWtrg3L4GsqCmfeSeMG9rmcwEBqdmhLWJ5pEZSd1iuPkVA2KBcb983KYNpNo1B",
  "key29": "4f96UtuAPbs8c2SAyDX3mUnNLTXykCqpJiMcEsQ8pBv9yqhnsnmVL5Wj5Ss6zoVfQ1jGb6VWax4zJsKyospwmbow",
  "key30": "2s8UJYj5o6mCU9AxNByTnLP2tixLs3YSEZdhbLx959QFKvr8GxDtzirFjo6dChWjfq6k6Sk8ijVLKr4vWqqkcYMm",
  "key31": "23nLxGdKrsKDubKSU2Q9ZkLxRrPUUm8xB8vaSE4X3PGDkooN92xaEzmuXGybQTHru2uKcGbtxs5eqpMfsRBXh7Qi",
  "key32": "2og5u6J9yuRvtVLjqtaQ9F5JwBRwjHLPws8XTnSJcX3J91wk7utCWaKBojdyACyBX5HZ2MJ5AcnGcEpsRgcfvAdC",
  "key33": "463XERm1eTPf7X7CcNDpMeB9THN18CTc5SVCo88uwpfSqsTMtabdJSGxGKoMs9xN9zTzSJe9sx38tANQgnaWAZE5",
  "key34": "5pgHhyYfwLqcVMHbSMMKgCfPgLBogw9DKJ9ogusDWihQnvjDXmWV4Z4S9SXUEpjffizUmWLrNjGCdRfYDArGHKcW",
  "key35": "2smJM3cQUip5jF14w9ACfwGk4YNgLUCme1TgyLE3d7ZR7V7a3j9fu7xHS9QhdCvyU5LoQRmp68dLYMFnHCZgCFr8",
  "key36": "3pT6DC1Qmou7hkdpCNkJq7anFvopfQzZqzHTYjiPzG4tmX6ujc9DwJE2fbe3zW29oRv25a1W5JZJpQEwK5Kd63Ct",
  "key37": "2N6xVWb6S9BvNdxhP94GfV4V5J3nZxhYha9QQiBcR3i3HzaNR67takU3unCW5QxFfKdx7t9S5XNdu7wd7rRTWpJ9",
  "key38": "bnwN2UEEd3S47i1MpwFzCmz9cKGTfPZ5QwumJkdt43C6QQT9UPEb3dLbW75tZXHUV2MXuLiHQ8Vi57jbyGSUeTc",
  "key39": "Y48LoNJ65r292obibSbQzLKDJFJTyAgS4eykmSM1jnQf1YrAzyNdpwAneg9yoaEKebv5gw7PsPErGRGrva8cFy6",
  "key40": "4US3r2zvfCVzN1ngyN4HHfgJedCvVh1SGFgmcaZAwPnHxbuFkcDPcw96aBFmQM2qvfws2ezsXbRUharFZCRMmDp2",
  "key41": "D2KwxXtSsumqqM8XgHFd1VA88MqxwFaPDykcPf7WZPZBVqKvrQ2NfQShEQYJevEs7cs3gkKmrF8AqsWTvrwujW6",
  "key42": "4QzHyic4WNeRrvwGzRLsmUUgYFywk4zKJEdcXKTqSTw4uaEPSQFvRgVNnhiYTLE89fcX3CxeWagcQL9msZiD2ka"
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
