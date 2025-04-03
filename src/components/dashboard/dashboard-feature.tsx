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
    "2FYDBxPGJDG8Nai3GeibQwFbTwTRzQwe1ihem7pzJT4C1Vyzftru4vLSY5gUR6nfZfjWyDvm5Pv5enHu5qB4y8Tp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gxtsjDKvznWUXg1y9XGAqQ6oJxEN5HdtpjVoEa61sd8ozVjPhEwqpYG5WDqYTCXa7m4KMmQw163DtSVDwigfG8h",
  "key1": "3umJVtVgokgzMis9nDFtBhEwkn8tEV6oyavr7JardLMqHwmjeuBhkGaLMzxB1nimTVXyuJdG9wPTYY5mv5uNwjdx",
  "key2": "3j8Sb1YxuxWUWhh7CvPLd4uqBNLJJRA4Wv4ArfDxTTbkS8GHbfYVgj8Ar4RWq5efoYXedxHExPGMjr6gnNfmR6u7",
  "key3": "oeZVa2KUrwJHBzejb6H8j8V5oQQ8JR1BFrwG9YzkvVsGkn4sHfnnwT8R7HKQ6DPTE4NkcytkBFWRy3WUxmmjQXN",
  "key4": "3PmnHJ9yQR6S3Ezyi1XL9G9tsz2cmGP4wW4VCJgNiw3zq1rsn1Ptqdb5EiEPxLfTTYgCHSVmPkPQV2bkt5xWgpNo",
  "key5": "hiHa2EkL14rc7mBsvpXJyhUqStaRqdA8SwY5rWhMcXuKRw5bsNofuN2UN7KTGrctdgkNKGGyj9owTri5FwjNYrn",
  "key6": "1g4xe9mmQhKjWYHCutJYZEnwLMANEXuV8xvX8ftdxu2ou9HhU3uE48F9on155tb6qf1t15x5xqq5JbyE1frAumr",
  "key7": "TmHsRK1qdDZcQ3M1Nccmh94CFWXrJsBfxtHXAxDhfioBSfLuHfgte7jXNMb2hbhBq8P3jeWqaaFowSzGdnxwyKr",
  "key8": "285cTVkHrVrojyJEUNRiVd4FGxPvHEbZNB5Q3XBhcfaJG2AxdwAZMetZTQzbnZCkEZcHMYrrVxiQoBgrbnkCmZ75",
  "key9": "PzjTYymc1XkLBd7t6nTYoPwovhoq5fuiF3epKLbCq6Dr3yrRWz9T6FeKhbdpexkJr7aqLaUVsiqzDqgmKk44tig",
  "key10": "zB8Ax9TJvxH8gwvTJDvqtnB4yMw5sSD7C9yskw5qUew7xKv45bvD7C749CrWzufe8rnesW1EPDKUxEGzM789V36",
  "key11": "3hLXosuCPUU46S8Vw9cWTQhh7KLj6mPMBxpHyBMPUJeREKWQFqbZUrdm5EaagtAqCZdq8QLEXSR1mFSE3jBZGTYU",
  "key12": "2kXnvuknEJdBCNTvSMtDUTkcDm2scgHDGftsEB2GXi4MhswyX3CUG1BL9pnRekeYMXipM3o9faVz5JGV4iKxrUW1",
  "key13": "3tiCdNH9MuvbYgoTR4jSSzD62JLbfFfCArhvf5abNaijn1PEyqGJ9zTo4exLUNGmDwB2uikLcYymVFnwVgCreH3Y",
  "key14": "5QZw3NQjQwgGKLm2sRA31Sf12rR4tVxRbN9LTkjqJqwcLY9WvVAbJ5pRGAGP8sobEXVJDGadaPp9dGKCDveEGUje",
  "key15": "zUamWG2rAgoVLpYUKNMchbw3r6KG9XNrodkBARGwUew1dwHms2RQ4WscF6aMnPnh62NhQG3YRsgcmuyRfVUEojo",
  "key16": "3ay1k97udUBzRciznyd9pHfnK8kEh2jvhzzKN3A8FdfQWztJvsdtAd7TD2e1KqtvuBY9Rf9fuz8FXRomLqRHQ32Y",
  "key17": "29KsubgiEy76MnjboCoCsPWUmMauJv97uHjTQTuVSJTKSAbgqPZHoHqYStGixDyUzktPWtCoa6Ho44uvVXWH7VqQ",
  "key18": "2GovhaHQFiFHma4Kg2MHd6T5hMBSA6s2UJpqXS7tVFeiHK2RZQdbKD8H9LQqZEKr8ZBm9bdRXfMnnmf4xkEzQBnc",
  "key19": "5Bp7FVG3zpdeKQpm7GcsfDJPJ6P3LwyMvJRsg8A3pfSLTm4pZTx8kgJCwmgnQWsrx4MALfzkCbh4XqJ1teLVBdXU",
  "key20": "2AY268pZET4Vwb46k2B1ZTGfAbnwa4h7Vej5b57cg7qK9JhbEqN7cPi9miCx1EiVR16ApQQem6XErvpAB3CccaRx",
  "key21": "2RBFsnteBc3a6YiBf7b8VKzCT1yWchU2mGLhvayFaQHWLSNtdPqXkyZPbyG2z375EVDYwmCLZrnFLjdTdLoxR3eX",
  "key22": "3xKpLV85meiZr5u1P5pDYyM7Syd3dKGdKnTdMVXvoccBgVXWijheWxK44vWd5ncugpb248mEdK9s5RxFaUeiPTwG",
  "key23": "4GD4NRzNTzKT9yVWbzaqW91bQ2RYgbR7QVcza2yfVzHo9XThQ8A7Pg3behy2AfXqa6RtEd6VGp9wQD7tbP8XG4Dw",
  "key24": "33QvPgBAEakGiLdsqorfgpt7awWrNx6FLP3zuRWSdxDA7yRKg1JJnv1xBRFbwcF7vdfjJsBYWdtyWXodh6mPxxbm",
  "key25": "2DMUWfhGZJzw5WsW2xtKic511MritJ1AxKJTRtHqEEr8avHAbPooUT6E9xkRhemkyZbpmh92wyecFfLWmqs8jb1D",
  "key26": "2B1gokyvyaCYZC1CtXszECpW8uLuAVFUdp9GRsqqJ88RwsrZfdF2dpM7enWj6EyUz5tupMpKVM4kHX5oRdaZLi2z",
  "key27": "3xMRxx7q1jBxY2GymDRMjxSxDFNoVJq87p8fk7MnuKxti6PYGTznZj7pBDcmfMEJjgSq6HUa6fQRirvTN9hD8FSi",
  "key28": "21dPAAjig5Y6XnQzRmseoAnfNokS1RaRVH8Ks791hSNvgT32m5FUbTrZjRwFcJCZv6aytB4foAacWLrYBV4MJR93",
  "key29": "2rvHBLGUdUzPbtAuzdp3vKHxwWEvz4XnhrcwRvkqk4xoo8GM96oxEjtfABnAtLDNwZRcPzm1hAZ4xGw27bUT5sAd",
  "key30": "486eEHvwKxHRXhFh1GBfsHuHAnsAWpPaGsqMUjtDpjMuu4576YuV3C1nJ3LNhQGNbzfzJcrQmgLCm3r95H1AQ4SB",
  "key31": "25aznhYr1nCbpo4eShSxaXDhQKLay2v4pYQrRFGPxY2bQfQYsQRY9Gr52uQQQABhNLrEuSbsyYeRWt1DDb17g6jk",
  "key32": "ngcD1SdFMymsYDVTTXv9ykM2hcv32785TpFAirv2WVCZGxPbe5ira3QYX1jBwaqt7mKTxiwjYxBgrowBYLzTxmJ",
  "key33": "5eeLL4Bs8UFZTWYT3GYMxDpKBbTFKxWnke9mpTAyEW93iM3rYHZEkyMh6fYAs9ySV9pXBz2WC9HUuyYCKFQ4XyXi",
  "key34": "3w7v8SyDe47aXHejQzQqzRqHgrvn3zhdrkDBPGiCH96HL2WSigr17neu2Ac1A6p5K1GZMjNDboncRi35QZs6FPV",
  "key35": "4WBBBYZXJpphqsFTjJo5Uq4hjGUhNTRgv5XTmx3NAdHjmvP1gag9BvgM7fJvmYmh3qjn8NsiqzAHR5bzvmaz4kaH",
  "key36": "3FauEbyDJpfcHocwA4yyzCRparuEPtbaP3B4zuMpZcXqjWQ7kU9RmazTBuRpHNXLAyNZWgGtEqSXTJQazcv7qsiP",
  "key37": "yxmi1ZNwRGEJvz7WZS9oBaHe2TETARDhsKnq33LPCppHBPGiRfNYVBLQu5SuNdQnNMZ3PubVrNLyVZ2SiNh86h6",
  "key38": "3hAWSuNPu9fqKUmrwb2irrLS6Eg2R3geqrdfLKCo3UgY8iiUAqqkphxUyKahWqkzy1LnveqHmSHrcvFQicTKKpi1",
  "key39": "4Y4upypHb9qdQQEaiyGchd3xRnFiPScnz3NQSGgrgcvkKCo1BpJfLXAKLCH6gJKFKdrgz1TwTivRNYCPh7paaSoj",
  "key40": "4m6QViwSPzCLvRhakEu7c5jxd6vvyCbUF9ijroTmZwj1o6z5vA9fuCqf5BZuqLP1BsDe11NdNyX1sdEkrzomDKQi",
  "key41": "57DqrooJQR2siUC3Kcj3oPifhdBQsSJS3g2t6uiKD2hiKWvj2TRadQpmtNQn6Vi17Ln8ZnyDqcnzWGTDBMCNY83L",
  "key42": "4eW9DgrH2SYpiTgLPmMYF8oB25LiYfopU2mZ4dvPfjZ4JVxeF12VXmSuVdtszDffWH3dwKsWUdPHNNny1qeLy473",
  "key43": "5MLmKrQqpP5pRgGeroxGCZ49rnSCtQMu5SzdqpujakdYfQc6a385HSiSQBbgPQMiBuwNm3Bd3hdgP7DENCo24rzY",
  "key44": "3ynBQDS8Qy2V1cQu8dxxzkrsikAVdsvsqsCx9HR23iWRzdDsNAqA8CE7JHo2B2VoHVcXTSCk35VZaKT6WG1EGMmh",
  "key45": "2sTXKycMavrUkvf78wX114oiYjAcjxjqAKm5SWsXZWNawPjTPgnRt6uqudWZs24YDAKTAjK3dBEGHg1jes4sqAid",
  "key46": "r2QeWnBoEG9dCLWdLBRwkpZ5x1yY3TC4hfRq4kigGRaHDKzGoqT9WtnP2MkUVDYhGJQtnwBDb5GGBZfHay3JRun",
  "key47": "2Wrf8JUKVPkqML4DLuvseVzMsnxN1qyWtRmCHvpDo5VBB4L739yd6ks8opDJfr98TRDckR1Dq7Gf73tGSLcvVWUW",
  "key48": "ov6m4nwdVDHf2W3mLngWcA4EdRAUz2o1c4gzgc8eY8RVMEjggFg9RQuzMgwUkwcsHiKQ98kY5SgUzZsWkC71YBF"
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
