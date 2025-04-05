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
    "2a6mAun5rrS3qCYBBynMx2q8ZJiu3JBciWrGoXoFP2XiYfCV9H5SwDmPZKEApmPkFdddbA6PhX9hBXt89JRbVJuJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K7qG49GVYhujt4t8TmHDxz4xNJmYDfBRBkvXv99ASFgtTJ1cfodDrH1iaCmg1hWskgSJNr87uoxdSzXCCi5SzpU",
  "key1": "4eMYfuf8Am4Tv6AaUZnnMFApMcyHP5xZQhybhKuTpTmgbrJEUsTHLFprYbhnLP8Rh7gB78s7hQnW4HPZa3AAH9M5",
  "key2": "4ftABAUh7aWAMHZycoqmHfWifLL9xHzdMQK5Bfh9Ge3fz6fSgXTZd75rqE1jKhtbsf9GoYQrmnH3x1Wyqq4NvAJo",
  "key3": "4ayB3zqyuq359iMCmC21voa7q7QZ8tiRfuo5yc9QW1MHu3rEfJddT1LVnudUtF5ncWTwKHrNUAg9ZWkZR6oWXmhZ",
  "key4": "3MHb1BYKycKkSdX3PcgUsZvQbqXNhCTPCjhyYG4FZgQATNEsYb7aADTPBHVvHq33YxRNuPH3Qz9gfrncyR3Kxx24",
  "key5": "3BgueuJB9uzqa9MNu1P7CobFi4Vh9qQWMFmV6Bgy9WtavWmFHwTqSqp6WDGqvzxA9c4QM1Hgx3ABg5ufScpoFNAU",
  "key6": "4KkSzJGFDGz9oy8y17NJa2vRmaCynTDojV7m856wF1m35u7VP2wrgAGopvBSaF9V3Nad6AWqZ9vW6d5cQawtEkFR",
  "key7": "3niRbTEmragL4KFFkroxevFsKJiYdZPA1EdjigWE71WtgcDUyYVhhHGvwQyc5vRd2xaaQse62DmsF8ctQ8r2o3cf",
  "key8": "2shsiM4xCKQWF4n23ash8RLKVt6wjFU8HWqaAFpXDXsA4DGvWKGrHB3ye5tARUPbn4tWsUGPCddsdbz3YRuhqPPG",
  "key9": "vUTZpbpL11eUnYu69qURH8p9338W2k7nNqRbmPkK68vAG6iyskZLhyw79acoRUTwutQNnW2Y5Zs3yhfHLvspWji",
  "key10": "2MH18pfF778HU9Y5kbBaF8Ruz5VjvmyEdxR2c4Z2QcdupPmPmUxcBQsNGbKoeVHjyk3dsaimWoqdzksQ7x3s5MpQ",
  "key11": "48qCryCrUbdHQoxWY4Lt4QpSGycaDJBLi8y7vhwbu9VXicm7rKZZcDEmLpzT6ALcd5iEaK8dkbfP3fEWnS6zjvYU",
  "key12": "4wabVj2UEnqK9PtMpggMzV5R4VaAmqG5X1wX8JLvLJA4g1CnX1vGycVYosTfxEdhXmK7WUc7CBojxwsJYab9qJK1",
  "key13": "2mV6vJYCn3CvMbXfq1jBvHtZbx1KMLqu8cnF5B12JaDVzwJK6vkaULebQu3DdTcN9PhVh8GZsn7ZzAGTSuMLk3PD",
  "key14": "3RpBUE9rD9jLG853vwMGg5bGrfFuMz8vp65vYiSVXLSuS5VYnPN7s3iVV7VHiEufjrhicZF7KLnrkBZ1rkFanWv3",
  "key15": "Jwr443HWgSCrjrf6VBdZ1tWUnRJECGft3wiydaMVAKu8SfGeSSEN78BdNnZQYgyKzBwj5gKgfLE4aJZwMFGRTJR",
  "key16": "4aPtKtVsrWHhKv6WNyapEDgxnbLWYpMoyrJU1P2Mqk4fKRU6t9n4hFsmawjn9iQeKW7BA9xaAmHM8agw6qdS4DY3",
  "key17": "3tERLZUHFh7HvCB2XkMqWzeBfyqKECR2SyrsuGfu55u3ysv5rVbE4Gb4fvLxTZbBuZC9SVQ3sDb4ei62VVTeBY9T",
  "key18": "47JjC7Wz5CEJtKCgMUAXmdRpNq1F8GHy8XawDmPUbr1eD1avwF1CNR8WQXfaBY1Ynoe4YNt6fQF119XvmADVVYub",
  "key19": "43ZNwDd1YfBMk829ci68LQ7cxFNdYMqH7QiiUdSJHN5zFCr91u6YXze8NXQoYVW7CbDQAkG41BjAdPL2qFL1DMmf",
  "key20": "4x2cnbyF3Cq7bXcLyvdgfGXVbPun5B8WXMG5yWgd3JAv8S1stF1znxN49AxcxkvFgwN6FaQcYvcddWMgkdKiCJmm",
  "key21": "3MpZBcB8Ca5yePX8ZgPd5QwTAPbAR3J2MFNnWFdZTa2v1AzhtWeopvfdnHP7WAhZiTPQb5svUncYTdwSZZMuUpMW",
  "key22": "5cQhG4q3zmeuBRfCHoYsrBYpgoHDQDdHmn1jA2CQqUDFMkgak6CySHtyWQExZeYEsxB8ztUb2HnFg4TveG9p3mMm",
  "key23": "BvSoCwMws6Ym2STEFeZDKrnk2uD2zVVH73c6xfDUT3uLc4DX1SKq2SC4S17w8qdLQmHJfWZJeMaSQQMt6Tz1hPp",
  "key24": "3dYaSX1Yz2wnMCrCbYuBSEJaLeKo9YTouwy2fSLFmXNLocb816iVJPjNmjEsVj3YtqT9pXPZGkpxpfBbt5GQfDbg",
  "key25": "hzjqhSttV8TmciKnBhopYVv7akK82fo7JvuMUPvvkDaujwR7FCfP8y2mPx67dEBjFVM9Wbygo5Bgdf3c8QYXVF4",
  "key26": "csCrNaEut8wbhZRQDmJGQxUhUSNEPXgiQ8mB6ywYz1USX2SD6xS9eA5Aw2JpLrUKN3xLCe1JXSadcdf7uroqyoL",
  "key27": "2WTB3jExrMqzVKC5RMAft9yRebSWtnMUbRwukhQvZ4TFmmtAGecyryJC2cTYvryo9QJuyc5ykqeH2sYdAkDBmYaR",
  "key28": "V9qE9zE35HgYhvQYGBKdjdbtgUrtg4AdCzErC1x64pf5zQ5HV21tCr2S3rPGdjhdA9tyWWQ8qBhPzuD2sfauYm3",
  "key29": "5F7qUBNyqgg77TP6Xuch8Tprvvj2Jgb1aRtVxzwzsExtVZi7SuJhUGWMMgU9AC69YPPekgTK3rRoCxjf2ouugetv",
  "key30": "5PCEiJ3Hjgath5veXSMBW78wPT97r1nSFhhgeyfJYeiqeWE8nAWksHG7jHWfNZx4dNjm6vfxKLLhnuaqwXgKcy38",
  "key31": "4dCq7514tfnmuuThWFL5WhfFGe1grXZdg5jNe5usYjARQm5SX3N1DwbUvDd9eHTru5kTLHG4Z8t5G9DC3bTVBMc8",
  "key32": "25PXvfDiK7vhnZnD94LTRv1RARVJDuKdf1S9zpmxq3HmJ33hrtncNNM2en1CZztnDQY3nFrSvVhxCeZDYdSTWa44",
  "key33": "8oyVJ4hQwEWQYFMkzdE2MGoZsnFoWHwYq241wouRXjN2qmLujVsuBqFXqsFxUZtZJSkPxZHjYysFHYEGRfwLHww",
  "key34": "5AuntwoHHSv26FnD9ig7zVuqPnyLFRj6rSZFb7Qmit4LaHPY1cGYSL7wpyedUm1kZ4WAXqBy9x6uqgt4rRg3xUbF",
  "key35": "5ChQhsp56Rv6m7eZoGZx3sKaJbjuzk2UU9etuQRJEpy9x7sPu7rp7WkwhG9R8LBhmFVW8jo3YcarsvLicNVCMmGz",
  "key36": "2JDk1TsNL8LfdALWtPHZTgcFwX5KcZM6rE4R6qxKXtfVmshcGxiuJFgs9oi7P7svGeivNFxFwJd4ZKpT6AsmNNjf",
  "key37": "3FDJkrTH74KxiBQ8UGBEHbHHnkGabNcXc38iuJVhFpycmNxsnPjeYwK9SqGQYo2FDaamBdJeANDQ68FozJSQbkB2",
  "key38": "gAiikP7gAi89XDtPbgEVzFkvdroRvEoyGcQbHkpAXDGC5sW1JKz5AVFc5UQzawUybmeKayCKoEn3gsSc9PYWHjV",
  "key39": "4hrhVzUYWBP62wWvYsy2LjWCRA5NWdnRv9qecvTnSkm1yYyE3tsTB14PYpdKwVSJ1kDSQhDVbjh2LV1NoyuL6FUb",
  "key40": "4wCvAXvYfRSsB1fBaua16vhKFXSwEepPEajfPktWNTogjsuEVtH4MJTyZYRbSkN34ixEaeP5LZ3FRumbs9qxD97R",
  "key41": "EYVJnnwAyF88aC3heHuimrEnEYz2nkP9795cjT7hbA9ypgtgW6933QxH84FXs94DLpsaRWgdFEMZpVLgAqxQZqA",
  "key42": "2iR7XLtwUT7K7SsnPp4epJ2bvX7Kg4n84nUp9V4TfhfZjhwPriEgYfzM58XaiA21JURQmabudhztT6qNfmWsvztA",
  "key43": "3y1d5RKuTAjzczhmM7TrUtYpgyHDh3gPiPhFsoCNDi4B7YPvdMseCHy3MFs2VmBLPBuw8zdxyyCr5LSwB8TU4RSU",
  "key44": "vKenLKccBLyuxo3kNCD2oRuXPoKPXpYf8xgp5EqdZBiJadPfYAt1u31T5Gj714cpDXiaVeSo8tASoRwa383YxWj"
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
