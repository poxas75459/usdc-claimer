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
    "3Y9y4oWtryoCpUf6vEuiCMhgMQbVbNDkMP81QA7FGYF28MmdcuwZss7nZMjHxMmaUKtfXXjE1DA5N6ScfHw7xdhg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35bxmQWfKaGvhVepY6zxVN6gXpkKxSms599Tac8FVsMrtupG41hdScyqggVQ7mJGgoLdgCJjBXp3Lca25KCTkdYa",
  "key1": "SNf6fnZm2jtwBzVsP9fhMW3VSPUCAbs4CQhsNZLNrDXewvSfHNj6g4MwGLFFxSbgvd3Aw1EaWiPURJZsgufKjsc",
  "key2": "4V4mRGuFKcJZAYQ77Wu9hRc2sGthSW2oGL7Vwi9caUW2ug2AqoXZ4qBUMARgGomph6MzF5XKE54aBv4nibK4733F",
  "key3": "45TwKsuofbzDMBHvjNXAuXfBWJ2YzsVvUuk71FyELcan1iyuLQt6LxnMRcawGeqiH1zCQSm9YqgnktXMx4yfkpoy",
  "key4": "2mYBko396Pkr9cwCte3x8BQXrXRKXNXwmRNqJE9StFp3z7jie1nQZkUum4kFEXQW5J1Hs5ppbS9rqmxyV68jw4YX",
  "key5": "2gPYZMjx4fstsAN5ANS4T9kqFgBtqqDbKsMJb2rpFMSqdVMHZueaWo1MRNDGSci3yoXTrYmGXetNmDuDSb2SwtSs",
  "key6": "FPedYkxCQen6Kk4h7N1otpx4vUYwLsRHisqK2rter4GuDEoxwypw7yth9eR7gt2h5QxHMDFqUL1oUqSHJP8GGDH",
  "key7": "5FrZTUNNCLq2aDERbU4hhGqXhdubT9wdiwxNjD1LaZaFAreJUpXJ1s6RL3XhNaJGW1yZmgAWmvYJTM9ChRecvTSV",
  "key8": "5wvmmzG3oZHBTVxiwg4S5y8Dgn2xBNmCpmduYgkTQ9BzD63KqFrZbfdT93zpWdJUvEqie6yXqHaR4kKENgNbM5Wq",
  "key9": "2AZTuT4i9Q8J14SEUw3EwsBHsLvzTRxmHYxPfJN7UmEamoD99mYBEzjh43EjLPoz6nv3mRgZcq7hrvyqAN2qiGa8",
  "key10": "4v5pbLRbUiPiSv3Uf9pDAV8Sv9DGz64wYYnJ6ciaPUMTxu73iFUVMiUUYCzSwzwLHa2horVSGe6X4vLVoKyP584o",
  "key11": "2UeHRGPYw8tvxgzgXpCBZx67RCryZFeR1F4inARcMw9sv6Fr98zbsamXQoNyvvENysFMjXn3tQpGXZAE1oAKWQbB",
  "key12": "64CM6Sjym1qz8qz1sYTCyxYdrZunUQ3cHuKwAdwh7MCTrMNiWLJeo2inbugEpkkeDsfggaxRWAAAckPAJtbgW9YW",
  "key13": "xx248AHWCEniuwcifw1QraucGBF75r3PUcf7hAwMhAZ5rzPamnff9oYcWwAPsGmrNofgSpkCKdhriCbgk3pRr86",
  "key14": "3hywU8W7RXz57JH7DubDVDqVc1rkM2QKVw68wyHXfRwqaz19DHPuqsDRXTMnGaDZPvAeJPpByQJNsqQusiDhqhJR",
  "key15": "PgiKhrzjdMtPJnVuuSJwJ63HNzbMRGmxvtaz16ke6zgWet9iTYfBDbjrvruji9hm7Ag4Fw8q185jAhdoFJHAEMJ",
  "key16": "2K731nt1jQuapA1w2hdgqgekksis5KayiH56kWkg6q4Febfmr6aG7iEssBm9hxK66ucZzVKowbFRtFF1JTaaHhd9",
  "key17": "4g9bZyiRqYUXgiTyVfVceFqLyFit6pnqvDHuoTonddST4dKq4aTzH8pGznZAPo7PaFY4nedLysBWpjrF28MeVnkt",
  "key18": "5sQzCMAoms4jn4YQQwBESpkFpZYPRpBrUS7hH3iu3QMdxgxRW5qVJp2cwhLSnghKegYAYAq1gkKuoN4V1WGsJADA",
  "key19": "3QrnbxbZG1dcwq5xzZtgX9ni443771Mdj69W1BEaN4UkTpFmTeukosaPa1KVXmUjgF5Uue2sr4jnnAeWvzeESAHD",
  "key20": "BrpuveQv4P3M2wW8fa41wjv5t5pPfvaXfZF2oWDeHmrmSqBUXbS1UEz9dkfdDtftnL9RSxvAhqghJXZBk4tCJeS",
  "key21": "WJbYV4CsGPAHFF55C3Ftk5mhRVzBtzxySkrsCeE74ENUVUiWJ8YeMue6dyc5ancp6YHMHGfW6muaA1fFTZJJw2K",
  "key22": "5oG6FBzWK8GhekWfUHQnm1dGoE9mNWRP8PGT3qdR1N7DEbLy68pjTzhZ2zd3aNtiuSssMGoRip1uHTVUg99VWiwY",
  "key23": "3NUXQsaSgk26cLNpb8kLNUZtya6EHpdzrsRgpLycwuuhMm4q1sCVRWc69cUEWzcd1XjpZZWh4MB9hb4S3wKuMneq",
  "key24": "5kXffgUFrqgb8hTkgwwq7zHEAEjnrmxWg7YNCYw97vsZGci6b8YgnDrehez9bzcneSybXL8oXaTU2w12TNXnKrb4",
  "key25": "3b9Gzd5SgDvJiuB3u5WNgjhYdp4kCMSt3xyXoLJK3qfxbDbDeBo6GpMoxjmDoTy3HM9K6J4QZ9QBG9V2qb4zFKmd",
  "key26": "CGpWQwfTjUyFmGxfAh8KKHUsHCPHrwXZDAvrNvRGkTmtqtBhmFEkFNoVP46Ti3eMvWPP62PVaJBEHKvHaqkX4u5",
  "key27": "2yHhyVwaWopdfud4ZqfiikfEbN8nd69Z9f4M37JAL3UCfwM7JBBYTiqZhxu11CoGjBg4XLpoCvG5NE4xo4CZqnhg",
  "key28": "4VQJfeHirvqzTzoQr8WRKirQZPsywNK4s14ALKHQY5pFm9QZqXiron28ERDgCHeGaZ7Q7BMBARZNUvsSnyZPp1Ui",
  "key29": "2yPu248iGHybXt1ESs3ZvmtyFfHXWAv5qjQUKVJA6FdnwGzzJ6kDeAaK7PPKaJMaSkF45d1c7CZ5cRHsjKsSbU7c",
  "key30": "4DZJx8ez8Z3i9EudfCgjQ98WRCPZjiVA9BTN7abMxksZfVsWWCEnMUr3GcG8kUVv9kCDxUr3vnagaZ3GAd2CVnqF",
  "key31": "2TZ5uUYvG2QKsSa5C6RYSajZpPT61DBCRwQ2SsrFZngAPxeuNqL4jmyBB7h3Zuw4xWuWvT4cwhPWnxwTbMwAXzPi",
  "key32": "4c7yLvnqjAZTfpqTzvWym6FeSznDcN525omrTrjtAUzukyk5ZGYCfCYy5gGaWBusbYkWdcP39mCwTg6K6fgk82KK",
  "key33": "5HKCyuFEezFEcyhNZGh8xaKCaCBfX2Uc9ZBL8uGRrkHWQ2aeuDudUS9sx3pfooMqmYt4PTXcXRYnPtML7c3szxSx",
  "key34": "67KcKeznWtsPwet1AYdnLc7NaCnhyJBm1kTnh2ueEiS91quZQgoU6ZgEvcoPGQ8ZNZgE9wVGN7M3yD3oTTGgGYS9",
  "key35": "ErbpuDTzrXi41xVytuuNpGFGkXEBGAScHaKbEJ6uVTUYh7HG6hv4BwuMBEkJhWYZNJuxCk9MwVQEzhLiTznJ2iB",
  "key36": "bubKpCaD72Z8ZV8zFqSQM6YnJhGQFppezNLzbY4XTVJmbqjnKPEQ6vwgo4R5dB2sQupqH7kGbzTCzKZWvRTXS7k",
  "key37": "5kkMt1JZAYN1c3w8siWM6QbCkyPKd4wYDC9WGveV5jbc31vfGJWDcmizAW13THeMe9YBaY4FqApMCFiomXyjxUvK"
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
