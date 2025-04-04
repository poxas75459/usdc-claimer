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
    "2h1FuPGT1cXrAEMp9MVgnRuEpiH2UiwNNgDdcgCs17UgYPUsPaB4irPYotupFZVy7LvHdayPQjvu3JbN9njtm8dP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KT5wUGV8uMr5ioUV6mP8Hk9WmeFEtXNqmGBoLvzSP2nQ2ZH9SGLCQtPYnR8hDGiUyPUxNqUdXcQxKS1xC93NoQC",
  "key1": "2mxHA9X75AJ8nBwfm3imVAy6DMh5fVJXwZMvZCHN6QLFYLyZoUXBsjELgNVaApFWrPA5WiFzWSZDkTHi2Dnp8rFY",
  "key2": "3DNQBuWFHNc2Ca2Nbb55LxtC6HifiycPEkS639MnTrkhq22SdNBtxEDL3UH2LtcD5S1JriLQZ8JoVwG8FzntTog7",
  "key3": "Rbt5pmHWdg5M2tM9bLV1PS5y6S1CKTUQJDjdhp1XPKrKR1NDNmGpxKPQL4mBskW617fBjemZqU935fccdr1WYDX",
  "key4": "2TBHFAsYjELLLnRiPmhsPZg6Z9odQsJc8Q2uCiStd7vVFGtnPtjwS2uPStnQvWdbkNsJx9T4pp9PjpujM6DE48Es",
  "key5": "3gXbezV53ivJFgdQDiGEo6ugtfVQJBobTJo8BNXvmQjyT6N55eid2yjpfnFX5bfSWHZa89atNBE8ZUhVJ4N8MN5Y",
  "key6": "2JNJy9Xyg16SYQdNmizKsjsvCTeVztyKppW6FcSUJqTWkb7H4akXUERNGKBZoXpsVVkErXzDKkf1oLtdfwhjfpaX",
  "key7": "4UH1C6TQvzLb57k1wRCDK4CZLnws8kFxEtfwyXWYLgggH2vTJT3m2Kpj38tAGnJTDecwM3DUGeJGeSJ1A4BKmAcy",
  "key8": "2y7sCrZpvugjxYWnrXbGmZeEVxa3VFD37a1Ezcp46x11Yy1rPVwugwhLFxEdr5Kjb4Srv8z4uriVKdzKJGFyhnGR",
  "key9": "4QziMrikvLjN2xVKwVbvGqAfezcNU4P87PoYykwtEzVKVM6sHaBF1bC2fyD9nDCBLYEu5RPqBrqMjez3qoFB1XqM",
  "key10": "3pCMo3c1wJcp1kP9qG9M3HuivQgkXmZmtBp5i6wHmAbQWZTySmWqPzDAMHKiSkmwqXS8F9msZkbopHF2t7efv2UA",
  "key11": "4pHEFgeTCiPTTWrfsi4FTpPQdSVCBAg9RM4BXKAQmssr8G6uTuxMG5gTmASPk3WyAY7bffq2dLHMAuMrqiQd3sqK",
  "key12": "3CNkWRjQWoKxHmASo8DysZwhQJkQGKdwR1PQobuEykpexbPxSVWRHLxqLKc2SEmeg2Knm77LW8vMLxgRT8WzDHNB",
  "key13": "2L6Ua6zdUY3DDSJnqAvcCkFHwnnNPF7iRVYde5DqaqqJw8F9E5PF1k5f7otUzCNpmrsAzgXpyzeanUju9X1Kw3Xu",
  "key14": "ubRyFJin59aauedLFGhetL1QuH5SnBsQ4MP88c9Sv1BGUn67AhqvFJ66hzNtsRbpBA7vcN5x1ku6hTnat3MMv9e",
  "key15": "3r62z19KdEiw8EUjZJHQtMcroFU368suvcT9N3QRzM9wn4EnY6hCuGXuVKZ9fgahnHd6DFsaer5S4grtATBmh713",
  "key16": "BixxcmAod5yo4h9bFjTuMDu72LvUyk4mUwQdM7r5tFR4piFxjgpVyrLz8qDAgEp1xan6TLaSzPSyAH29UBQdKRX",
  "key17": "5bLiLzj7TqfK2ziGtBRFDcodspChYa2JA4STy9mxRbgwk9mCuRSGYh6munH9W9xfyL3FPFuDaDkmvQH7DSaq8FMz",
  "key18": "5e4WNYiVUYZu4UvsfeKgukxvRrkGfp1GcMxNH521XmeyyA8jVu6RtVMpHTzD1y1pzgMr3tDR6shJd2JvnbkwrUH9",
  "key19": "3aeX8fJVrMHd3dsVG21RGepvEYAyEEEkehXdE6UdAcdM5zeADwvD5dh275SyM4bPt8MFXJEbSqMa8EqFjVx5gWoE",
  "key20": "3QB53dYApDLHeBZGLvvrXXsapVBZ3dECchCy5XY1v3sNfP37hqyM6FquSkH4pjaCFQY2W4RnpVh9fYxbYHm7CQwm",
  "key21": "5V8dCDHbY4kAZKdMxSNmtGogKhRHbC7CF8ELi5evQMCfSvp6a3CZ3g72MfKw13D1eS6WdqWrrnU2Re2vspAsZeW",
  "key22": "5c2rg4e9jZbuiyxJzFrw1qTnMfJDxQ8QPZN1fjnBU9rsCfagyGhZuaUun76F25gDXeE6ojEwat36hA3tPpjxws6Q",
  "key23": "44LjZ7FCEVtRiET21KamTRfBRQHfhP2h5u6Uaqa2z48dwEyhNRV1FtMvsekG8vPGx56BWRzi4LhY272oiF5e6obk",
  "key24": "4kN2WXF3LBQsaS1HmnCHy5b7LHwoqgrrsnEXWQzss1iSUWEAjC5f2heRh4NPAnQzKHE1JGq2W22Z4EGdPxbD57FF",
  "key25": "3zSdJNp4LxyvYJhB4S8Na4iBmuNfEjYtJt9NiSBqUu7vUCVYtRhiyQNoXKTjqAXWC1Q8DRp8cYyn7QCNm2Ub2jfN",
  "key26": "bLyrVBdS27q3LFJKeZW9nWtjcR6WoPoiTyi79My5n1R6LVvvK6EcQdgTQsarQEmeJWPRFQEX2aSH6iA7sMsVSAk",
  "key27": "4oPpTMTy3yvLZpmyQHUXuTyy8XhvzA3XX4UP2SHkHEeDPo27RxYYim7UNmW7i4DiifgWgN2mXf7wqQChTDdYC3x",
  "key28": "2ATCjULeuanh2f2szgzZV2ojPSK5sdr5LCEnScTtr4X6snGdvroFgnucZBLQ3w1oWgqVFnX1q774oLEXpQrN6x9U",
  "key29": "4oYcCAV7RwxKcZ8m78TcThgLwMt1gQjbVTNRaWQAnib9GQzK8Qe1wdMCA9aGyoiwobx56r7z5pxZrnpQcrSKtAWi",
  "key30": "5DeaAfhRqoRrqFEQHwkDiCKzj4BgLMh26PjD27gZAYFxRbiy6wQZerWXuJmRFdKM48vumERq8RzpF9YeTvYsbLBY",
  "key31": "5arfLCsHhaM4h3xheVwbSi5AC6J3nwyTcenqopnQ4WR2D4qowcyMePbn8tKe81HbnvwRkQTJjqsYRkADMBH4q1N2",
  "key32": "3Jq5DPXAmWLuYS4eQPqQ9nqzABG19o6YFBKY3sFGttFzbwgN1DyyyRRahvWt6gutR91zQ1jG6a4ULQWbYE8ur2GH",
  "key33": "nxHWakjyagxVNvH5NqVvLuuTyb4bbVDo9gePoVaYLKv4rzwhwEDHDiV4amrvJiJwhWZWALKihcgDRcokhSnqbcH",
  "key34": "5iFifNkr6FNVomCu1m241rFHGk4BFqr8a9tfUVwzpB4LXYKVuiYxAFXJenMUpwKdkbdLWj5gf4LwRGCcZqGPa6hW",
  "key35": "2svk5eEQbr7LByvB97C8AipRLMsNP4G4LSkQr28Uewu984LBQ3dFohLe5t6XZgysRc7YZMKyH9dCWmveutL6NpH7",
  "key36": "5XJvciuPdwp86ocX5dREVS8i5Hxsv25GqEpDqD5tws8W8GWaJqwFm16AAMyajRBHbkqh7EA52mZvJUFCLn1NTM57",
  "key37": "5EWXP6EubpTaUwPKUihYyAxEoVaEBKALd7QHn91uMTJwpuWhVCJD8ZoPp9e8R3hsf4yvJAQpGzXfDL4AF9CkoYDB",
  "key38": "4rcUy1SHeRdcX1cv11WpcHKiFuicEkCCERJBHras4diUhTXiGHzbvdF9adeSSfMBpo9YamoqjLoZGDYEC6Cpy59r",
  "key39": "5MvkWsRu5G4UxaYFdY1iHagEtZ7uxafmJStbxshQXgXdHW7aoSaZs2GDfy45cYA8RQidZx8ExHh3By5mVs2dkw2c",
  "key40": "55oTFYtmfpN5hUFeCzyYJqbS9J9Sg7rNTRAy4uHva7VML8D81Tsf1FMoboWjzT5LZWmX7gg7hEjhBZhLR3G2fUfh",
  "key41": "4CYovBbGdCsMvMp5zr5Qgdba3DgXL9L5Pe7zCFtzG2W5j4n8jJf8mL54p8HPwmyKLpzCC1yRzxg5Kv63VKvnfS1r",
  "key42": "21wqgaVBLdcYMjsAUTCsApWBQxvBomeuXzrY4gStGVzKDfBfkMrysufFxuHYYMhY9ZxRNPxQYZicMGQWvdgTPNcE",
  "key43": "5YghMeJf4Q2FCFwrLTeVvB6Eb9k78sjwUSU4GVZULXmbHiSUi5fG3kkrVWamz4h5vsgipqSoBDE6rRUNYojC59Xj"
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
