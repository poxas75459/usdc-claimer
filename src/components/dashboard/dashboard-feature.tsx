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
    "2W5oiJFStWTko36DMqCc8f3QwvQgabBSkjiazRSCoEwH1bd414USucnot6XoKVBXRSZEcdHp3t2U9URKYmTjLtcW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DJs87MAg2KfZWscTvqj6X1pLmDCAB9Ea6dh3Lw9VDiDm8FmRZbmFMQ75UXva8jwWw9ioUJTFLwGpktSQzx1dM69",
  "key1": "2HABH4cDJJaFV2oeghKJF5S5sX2R6KQfWe785ptR3FZKDEXpoXEhUcfXWvquX1P9StdLHqDYo3errmbcr3JcWsNy",
  "key2": "655LqK5QT7NvgLXf3oLC9tV4cw8RJX8z8cRpe8d8pzykNGWLJEZErfjwqv12uGKKRWGi3LNM3bvk5E1DjP4iqH9F",
  "key3": "5H62o34poLjfiSU2uv57zW9uh56M4s3F8je1KQSossD6cwYMjLQuwATWY5yXMW3EgVoGTmKsUTuUTkoaNZh4ifEK",
  "key4": "3nF5WehqyP5fVnF94TPyqAP7u63nQjQxEnGppZZRX4F5hJHed3w7nkyMQ6n7rU3ATrMRo8zYv3YtbMy2riNddZWQ",
  "key5": "2HfLFT456HsX2egg9G3fLeQ5zJLNKWXXdF73D38NTCFSQ4Lzw276xY6ySzgEbVhDJ6GfpipPEAymddbmcKLmVVjM",
  "key6": "47CMesAxRhA7pnvvtVT3wxTYtPZ1sxwFoesLsJhSDfvggXUL2B3rn4aUFkxkSMpBEjGZ2P3jwXtcDALERe9c5sED",
  "key7": "3cNWXB2Xcae9JL2g9SmenBLfBTQAQET7SBghUtoPY6UBEApiKuJShqbpsatueUo81AqctFVBmtf3orNByb9Xgr6R",
  "key8": "4qAdW8K6cEDtSxoTEauCbjzy1tQgKqwm9hViSvjwvGxEvAaKfqVYAAAYdTX6hTWa9Xc2rJE9oznLXxQjHfLqrqUK",
  "key9": "r6XsyFso3uXjdxvyszuyJF8yrDH8VLEbeZPTFN96ZZehy655R1DXqQEYy99w4ckfTywvtrPLALF3jxjXcjH8iR7",
  "key10": "4piu7wiK1kLuq7x8ccj9pQar3XoGauZErwLEzk7hCqJJ2FRPoqQrjLme2unLxZbv8iA51i5pwMctMf7FmcfAcCNH",
  "key11": "35bAKkvTkARBjGU6LrkCUNxuKRLfugG1JVUEtDCGd8GmnNAUxTG1j1VnJXQLrMJ9pac2ZxmbtcMc4R6D4HGjACWm",
  "key12": "5ijZPKLGFX6jXtkbDh5Aqb12g94QZMbKFMGk3XqZbC4JddoKRak5mnGZ72UhZSBpMECW5anr7iMw9gV2WouP1t7N",
  "key13": "4K5kFpcopju2nnFEAkHHLtmCtLaHRdBqrm9XqpCGEoiW53bnAjNUZnN6a9gLsrqxbkA42b2gUb8kvY3iHo19wmNw",
  "key14": "2yeu7oMdnEjLYLbo1ewa7gcy732byzdPbRbXYxsqfSvgMbrN5RVezPJ3raB3focoasxGqD1ozydbE7TdBErcsDNd",
  "key15": "2xFG89A5hTNcRwJbKrg5ZkLAhjEJVzCB5WUKrEU4tDot1JykYbwG9S5DWbnQ6hzYov9Rcq2YvY95FTxT6k8TrKU9",
  "key16": "4SJbArJ6sADH4xA6yNmbtPenxuPCrrPGiAn9bXCCJMSA7RGJUshEQ2NiYD7LKMeoZRkK1t36mVmrSHk2jLZzR6ZX",
  "key17": "34AbDeufR877TWCtGnXHX4t7Az5yxYXCG31EX9CFqV727B7CDyFQyAkuoTmTsZg1rp44nCVRcoKYFGLFWcnVYPun",
  "key18": "2p2BmpEie6Fr632oEx4WsGDq8c5XHppqVgb4cXG2vSXHW98xxQtQc2HpT385Rsbs6qEPM7WV2MtDnnJRWsPUREy9",
  "key19": "3C2KbG7N6RQkRMb6W5URyyChV1hoH778oaEYbowQcasRjQdfJ2BucMe9KtGyxYLrcR4KELpWoqtCzkG1SHjvUzob",
  "key20": "41QJznVbrR5co91bVCW4b5KGNHSWHffVptdWz921YvbwFZm6YKPPNeYSLG6KW42Cd9RzBAxapBpRnWDuhAiYjJLN",
  "key21": "285s24aNACdZMnCUZzWtsBUCcauNB15NBFyuPoPNCcBRsSY9u2FMHHNCYAFTBsQnGsFJHzEvXQWzTzcRJGUR1Qwf",
  "key22": "5Huctwz21vFiaCsyXdXdnFxmXwgn1VM4Jr73SgMi5m518Cwhw1cYsWKmoEUfi3ZriXHRifxrktowngLLtC57oF1K",
  "key23": "4ghFHGHXZD4rWBGgj7hstZ9dBLRFQcxyBj3KXF6RbJjQt7moDxxEYoU3TKX8dRjSEnEhYE9A24QG1pqzfE8ByphY",
  "key24": "2BQ9qFBRMzimimKoFSG7vU1jVBieQiFxZutS7sBmnfDU6GvDhMQCPcPUGPbVoJSUJf11R4ncrVS7ScGvUg5mTC2",
  "key25": "364wxM5qJ9sGAXp4DFvRgPsT3A5dTYEW6o4FpG9p6skPqWcB951SkiSCccAvunBS9Jb2jF9hJ4LYoxjzp6bDCehH",
  "key26": "3A99BacmEM2Vj3csAXLhgAt6WgTJYW7yrttNSEz1nQXg3YuxvWTf3Gb588mNxyVtcpqqBi6g2sL5AEHMsD3qmWve",
  "key27": "dBDWTFp1eyMwbdDgo4JQoLCdxJRYUxQV7MAaG4KcbF7DCmLHbBM8UXD3umWpFvQD8hJSTx2rJhAiFPB8wRB7Z42",
  "key28": "3EnA3vnX7CuXbx8BCiVoUhEuS3xKQDMGUpYznEDzxbQnZYrLMsgNNuohrBCPS8cxqy9yAqKwNBLAhYAPHVX5agUM",
  "key29": "jFngR5xnaAp5nvQTciYHKEJaELw4kGxszSPK7EfwFL8yANzgYHcSpzbipucbmCXVwY1CBAEHebVcGTLN9Pne4u4",
  "key30": "3KQ6wdKKMdu5o2WKif3iy4m2U1bTvdT4wXK5qmcia7R5a8ohYmGNHMAWeU6jtFvLT3213RWUZ8CNXED7psTTbKN7",
  "key31": "5qP9sJUTryLuRHrcBDspppjxsdx1BJV77ffi59Lr6Yn1hFNrRk8LBqTdakAT9Q9ea81YacXNiKEnJJmF4B3VTwG3",
  "key32": "3MzukbcwaRaFS2isyo2j6kAbbSgku86FkaTVm9oYgTwH2KqRN7xGaY57sj7Qug1SxYzHq1dVHt8eMF1ABJfNHjn6",
  "key33": "3yKXfJafm3boKmWV7bNt51Uzc4ZcRN5oSM4yLgzd1qfDr4ZTYrMUH1LNEoXTCXrpTDAWwbmEri1cEb4Vx9MAnvy8",
  "key34": "33N2soggnnmpRLsiyYk7bUWbc7fwthtcyTBsm9wuTnbTH1tgy3hexUFf7ZKpWVDv9jTTvV31yZR2YNqwgiJDPLVR",
  "key35": "5rUXBaUKW4CNiFqMCn8sGFjMnUthd3At4kGGZmdaQMe2vQMJRrApzGDsHyMiHhGXMPEPKkoqcSJPGgvZBJn8eQs6",
  "key36": "2e1E82vSUkbJk2AxdEBthDvUbrtw2v58kej8rCUAB1k2aq1YvhAxdbrGZ62VdoNp4JpTzsWx94tH9Etvg6iMacRV",
  "key37": "bwihFb77xo2XfDk3Ci4Bt3kYi9h7sqSAyP8TMEw5LwNNoFc7F9gsZA53gGzDtjCQgW4jC1Bu3svGBTL14tAQ2Pz"
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
