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
    "2dxW9XCPpDvuPL66y4hHFdgBrryDrk3hEP3FVigsUsBWyEjtA66FCd2kFwZUfL6obdGfNDQ8F64c3KYHLJicQi3w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uT7NZMQmmwHZs351JzYeLVoJM7MecUXJRMSuMRFwHrv6wspnMVXCBxWveKqRTLMCwU42HTBf1z1sqkDiGYp8vDb",
  "key1": "4bhw1yMPYRFoXAFof211wVfopdgRaPYXGzhTNHwEcArxjwiVJ5CpVUcqof17g2WdvU9scLS3YRB5nzarZ51ubSnj",
  "key2": "3PqEafyeFdeNMeK7cDgZm4xyNSnfmQurx9vS5H9gtvYteMi4iXKwX8Chuz8b6gCuruxwKYpR4wJEtzwNMy9i8T3z",
  "key3": "3F3pYxj7hCUJXHR5KkdXKrbcSsDB5JAeEA3aSXjJrB9gyS9EHFRK4r6c3Ztf9ZvR6aa7dKRbqdijtfifSNukcTZd",
  "key4": "62UJk2TU8ULzpPMbdZcYDkBiEzr19e2jttwQ5QU7mc1FecwCYkAPEeLmq9V9tsCJhUiW9kxtFzLdWKemSDv6yjYj",
  "key5": "5K8iwgy2pVufvW5mWRpcF3pGaVZAa5DPfgMJfKogikyeGEdLpERNyUKfEPqV1qmSRVcQhryHBBnLdnRaD9BEjktk",
  "key6": "3a2SpgcShRXFxKKELTc7RrWLvQQWwUkeLSbwp1nT6SyFsBMLUivviTQ4rCucryXVgW9wUrzqnUmVUGjdn5LiYaX4",
  "key7": "5wJoZ2qkX8NJBfZHNxEqr9PE52R8aXBpKC3pswLxQBHR2HkyrepXaiPLMtFtQifoSJsysWpLcUYv1hUCcMks2BVy",
  "key8": "4D1ohyJf1fZABy9KTfQ3dvrgGdgc1qng6ppeMRaJnsxc6mpz832SijfE6uoyAEFshSXwkTB7s8ZcgGSTWGUrBb8c",
  "key9": "4u6vod4aSRWFMJAhzNSc8kX7EGTstDiUs3uk2cPwXkhiGLYqJRQdEBGFT1h1mFJ8ETQ6en5BJ8ThwMiWT2z9MBc",
  "key10": "61yU5B56TjtXDEkT8sTYbd7zj52Wy6aT389QN5qDXnUxzQP2PULHGpyugiPGUXH5VZ46RkiP5oXpuT14EWvo44JJ",
  "key11": "2r3jGVzLxJ6ncrDUqUZqCmNgZGbpDJPHp6pKXLLrU2tZTjpzgYf7RCdq6x9xaYQBqN57wSyeEbPSDmzuVcAitqPT",
  "key12": "qWmdTFK7xHZkRh9MLDzV5wTvZBkQQctJDPKxoqevFeKDpsyLZoy5Pb8C7hpWGPqzrH12zQbhTKhF2u3Wu23TNGa",
  "key13": "4EXcPcNH53JWtirU74MGHFyfS5QeGGQJS4Krw4Dk5hnDUHawB5GeVW7HFPpq473pJfjfdSVemvf69LXcjtzU3Xib",
  "key14": "2PmjWg37nKLEwn7SyyuXf8qGhJoHK18BTz3JvYcu4FJvo2cxpHA8tNJQtTT4y5WVyT9peVsVSiGjUL87TS65mHGR",
  "key15": "SkijGeshZhZUPaxnEUsmjaotyXoppfQ2wUp38SDuwuzCxZLiNjDRXd4sx3zNg6ug6N4HwQVQDB7t56M11EF2q8L",
  "key16": "59PvXdfCjDamRHXrokmpzo6Dr83LSeepUuugejs6BoxUxunDu9xL6jZJrRkdHU8J13vhQ69ddGcaNNHfbMSBMd6",
  "key17": "4oq5XeRCX4TYZWmnTkhGoJFGd9c3DjN6Yu5bR4KJMpEK2iCgNN1j5SvShrWNgpkHh1UHh9LduRvqtqD3AjYE9eQo",
  "key18": "CdxG6ND8Ei1czkoVK1iSsHKhX4HJ14SqPPwqe9VikX3ZgptD89D2TMz3hiYNUVWuuofFfFMYbTgQVVJJj8qjt3g",
  "key19": "31sJQcFj1wTbkBvKq1XVkhMmHdcmYRmfXgwTZ2FzoNQfZeAQN3x7oaPSADaRvYxrw5D6SCZi8KSkNTkxumgHyMaS",
  "key20": "4uDAfTrNAbyESaVVmAveDvbwoJoPvA89DoqyaJeTvCgEWvdtMEJaFcbj1XEPdbbUuDfQr3rshebveePcorZuc6QQ",
  "key21": "62UYLM9Lcs1swknzmFx8GrWg1g1x5x2DZ4z8aXsQgj1NpNYFFB8yHGSpDh69EAapcAwn9ebF84cHqMre1s8cowL5",
  "key22": "4LcY8mScuuVRRDXPVv3mEanXc8f1p7G6rKK3GdXfy4sdyLJFssmhZssj4FDN9nqwJyYPy56GqQ9foxp5zr43FYX8",
  "key23": "22e8mMXRPTBcjV5JYbrvXQfGJD8yaqm7V8YjsVxqHbtPEshuRJTubcnheY7tUJshWCuoNJWMFeJm4tffLFC1dUU6",
  "key24": "2w1kCsPFNPySsFeQQ3hfmDGwyJd3szTYSuTev3UG2QnMGozECKNWHXymk2KQKktvwDmFyg2tUgUjz8mtVdXUA3ZL",
  "key25": "57AkgS9jFZ7YDSt2mkYj8xwgE5s9QivwgnmY2t2b1NtQxrJeM8J3Y5TewX1ac3qqpLinyQaZdCkZBZZiDRcPxq9s",
  "key26": "W4enGtoeLm7z4oXv8k8NSa5HiiRP6NiptJp2oQZ7kTEcWMqedg9jgEzRwLr9eg8HiotuEJoyZFpL4nohytkrhsz",
  "key27": "2GHXwHFu3KcottuagzKXv4nPnk8RTpw5inLwnRshCqZokGJF3x3ceoqHZaSZguMtrh5hZFzfSXkRxpMi5PW3e8yC",
  "key28": "5KEs2SGkvzacH5PsB6J8EcisLzBeiF64nyAxQtBFRQtm7VLHRFP1azfoFKP2PQpfuXwbDNJhKNnLMXdfWe2qakQx",
  "key29": "cjJmhNmTyMSVLo9rnkdB1E3AHn2XR6QoXPUihLz8trsidV4DuNqpvXaKdrwbWe5V9jGXGb1jQecT8WcrYgqAC5J",
  "key30": "Sexh2PVbhMPLvsJhyEg5WR2RUYdkQmz29rHzFXhBcYnVMumeRKFqq89dL8wHNJK6Uk9pfprp4vHG6yHHC9p3qea",
  "key31": "3dkk5dbRpUY6sprSiC5QhVg9RJBxwxAgHxowAG9czYDa1BPbZud4cEVdDTt3uYXN8eixfLb7Wu135rhiwqWbv6Vg",
  "key32": "5WE7FuoybSBdwNPHgh4EeFU4kHfRHHinqmZRjXo53jfBYZykqFbCP7sCU2XomjRW1hfT6P3fXTzAxj9hW1AeTwcA",
  "key33": "65j1wMXBH9qP7MQGSMFKMkm2yVAkofyDQEtSMpKhrUsZEHXspmtmUEheFsxkQPRLkHvAu1LTa8b7LXEdUroggLfc"
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
