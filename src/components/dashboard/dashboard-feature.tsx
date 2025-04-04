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
    "52PXc8dfj837wDnikdVvKcpNTT11BMLGzSrzgLeemMuFhRx3QSpVQszUpRg4kF5jtBSZ6H2me5xrMbYzmPjDmgry"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fVHfa1PgaB6KNyBDTC6uMXqr5z6Swwf9729Xk5Tt89xi2DPfm67SfafjTqELCr8gAqqzEH3X1sNzVzC3Pqjgeuy",
  "key1": "qhs8Q4hHypMgopdRseRisdN25udKBYYnX7AtkFdEhD2eh5LZCUsRLMnK63g1J5LdtrhnaazgyvM87wCHv8sPV8P",
  "key2": "PQXKRCXBiyhxdi6eP1y7QMrLxwh1dDJvSfwVb89MgowqkGSLctN6dFE8EpKpV8bJU7BRBX14aBjx87vh3xGvdWD",
  "key3": "5FxTUnjqraZgnPttv2kcK7ihyMm9Q3A73LuB5f7zFd4Esa7aV5s8HzPVipqUUQgv3vEmeaAdyM2EWuUN1oVCWCv",
  "key4": "JKvLETrgm2NDeFa6SpTUXiN87hzUoRQ53HrPCgjaMU1pdJtuwH8dMudrxKVcSSCqAHjMYwYLQSNT4EkGzTFUJon",
  "key5": "299TnaXcaKhzRjmpFiMiKd3Ej1ibrnmsfabEZhaMqVftSK4Ecos7zT6GCsbgH5T2RKKUZNoYTTVW9ARH9CXb9BY5",
  "key6": "2tY2cdWgi5XpjuoJF7DFLNNh4hQby3wYFoVFPdHK4uD6Huvu2i51bS1Noyibb8iijosxn5ziXmqqS4agzxaVr4DM",
  "key7": "44kKGgBZm9U7kNk9bFW4Y7FyXwuGqQuzF8enBSsRvzh12MUudKPkJhP9ytetRendnunraWPBiaZyvtpqYVyDRYy5",
  "key8": "59z6KyAUhLVDccwvnhfZSfvrM1kpCsMeHhhkDnukB913gSA7ptbf7rNri2MgvMHPEwZvPjMmdbEs5W4TL2CZQnfc",
  "key9": "4K28JuavXj8nwQ5YwaqwpZkfr7BWxxTgWcar6a11vmQ9SxAvB6f6zsZ5chsjbZGW2s9ZBgRo95s1TK83qZY3n1Ph",
  "key10": "2MsXHJP3HxKCbYKGJiQzChXx9VVprswCjZkmTgxgM93WfFWkbSNid1BGjMNxd3b9SFNdGK1FDpaECKEVHpV8fGDe",
  "key11": "4LF6Mjoerbwrhf5PtM4nv5QJdXu8K9vojof3TYLp2Jv6yhQtts9nnn8Z2UHtDxzPQonpT62pqxqqwjHyspTjwjH",
  "key12": "DJbU1ZYCiz67xEBzCoYSVKTPAdoEkBkRBmR5h2FfcrGYRDpD4i6dEcqkTZKtRfG5aAxUh5nNbcNW7EzzraJceFD",
  "key13": "5Ex2S9tUoCLQwuPA8ubW3thfNT6G5wdjReGYJsoR7qLTSwDX51S6TSFD8xDPm9Mf8JXivcdgt7wxAn4X1SDhhHZp",
  "key14": "HpEmwi1juxPgg6n14PurHvXcDPYuTPgN6L9MM1L1YWmZbq5RRLfePfhpqexKUS4ZbQkMSYncbWcJgfGCjzoeJWR",
  "key15": "2wbR7R99QMkxDGhQoa188QXDY9ky1MqXVvRpZ9eLcRmPzc2F2BueermVwjKJijswWQcdFTmiNtYWKYiBStGNp9Lr",
  "key16": "3o3vuQV2CfCLAnbBbLFWJDSWwk6S7MADXyb35v4qpG4K4Nq7Sv2iEgWBCVZQUVm5wCxs3Bz8YSgeFVcbyePLoXHa",
  "key17": "3x28zva6pC6gNFd5xEvn3TN1fHhJX1oBGF4dyv1777LrtxTtAjCHXoS4y3twyKAF4MV2QbpKfb8E7QejZASEHbhx",
  "key18": "3ZNGTpBvwbRvddn7xfc5pYR4oGeZsMLPxyc3uD6EBDJgK9WwkNUk5KQeyZWVBfYu2Ad6f1R1bfnpLFf25dNJ2GxF",
  "key19": "2v5V1cb4Th5Fw64E8Q9QwwAgDgkx2EoR9t52gMtWfWuwEuXLfKS4EaKB341ceaaUUih5oj1bcQF5RGBxvkRxMhVe",
  "key20": "25Rs5Gjy5d2aTrqqoPNbiyweU8VL96jMT2ngCERQKjbB7YsQPFcSJbRqAsgqtcY5RFa93aaK6U9znmvRic7eKiV8",
  "key21": "44TH6QLYqPswCu8ejEyaV3k3urCbX9CyfQ2xXXKKnM3KQR7uWfrxtxQ7fBW2bkN6gxeJgUubT4eChZz8V8drF2K6",
  "key22": "5oKLE7EYMgMCUJh7vw6o3CuQ8dCMrmXwtLtaBepKiTTUmiQJE3nWSh3q6LZpDjw1rKXs3NxjJgynt87WZNd44oMZ",
  "key23": "5shRZdMfWv7mAM6U2f7kcjDUtNijoKhDxesJ8Jj2b5t5QwHJYk5HBaaxXF1hSGKJC9r2RbCmnEtbt2zAiYyfmeud",
  "key24": "2N5J4RrLhSG4ASxoUTRGP6vZu3H3LDyr1roJH9UpPxtC6WgLwsAcGndAWYkKLvryWUfGVArJwRxqHpiZo1DkHmmo",
  "key25": "FaB2Lrey7aHJiz6cp5yD6awc1kYjuqKoRFxRNE6qMXcb2LewCaH5f3bs2a5NtjgZ2MUXZDPsEa2m6ETcCehdT1S",
  "key26": "4gm3UeN1HAFsneLjsxbv4rhoyRL6EXKZrkTh5nNSLTXtDz4Sv3ApPxmkCPHXm26UNC3mTzhTQwHTPmcjXQBTLfXJ",
  "key27": "uU5JDK8hekzHj6pam5K7o7yLBwJhZjam2Le3VQH8fmg7DeuhhD2f8Y5ftiiqXG6v3jUQPCH6ULi2xKKVZcHRF6E",
  "key28": "5CPGzetqMD4yy3Mk7K7G3t9ak4hueyftTzYzpCdu3ifzSMeQpAtZtYhxNbyxJMg1chbBYtxY6y5vjcqSN3eYkpA8",
  "key29": "mmD2kYAwao6v1dsaBkMAjMYomN2EMxJEg5BtrVJLiyDGxzZjEJ3rkN7rVwHzw9GoN72cgeoPWLcsvCzdvcNoiBA",
  "key30": "5obTbLvNGZWph9ygkAV8ce2Pkz8VAoVjG8LWfhiGbgqNGR28LnACtSLcBa66g27mjxyKBEzzdz9vUcN6m4pgMdbq",
  "key31": "4D5hxV2thuxBaU3mN15uxQqiPFjidQh1cTUqJg3Eh9GJmDmKJkQ3x2Pp1mxLvCAD1nJbP5wJD8s7FcSKpA4Zg61w",
  "key32": "4Y4bZdtZeuKh9UXgEiVygb6dhFaCMctahvp978E8Sfm6cVBF7ih5fxAkFbTAuMppZDnmjJBfFrdpCLk1VFGcDJN2",
  "key33": "31ZXUUKampDWUE6AJWwWHtHdQCzNdZvg8uNxXTGYRrWdcR1Xj1UHo29zeTXasPhfPx7zZQpaWb1mGsEYfxAwvL28",
  "key34": "3f8fp3iYNJ8ZaEhsFtoaRhXecmafrh8B8osTMLJLMLdb8wvj6xDff5n4KvLGVb2UufYjSsUdnj3DKFmvM1cwkZ2c",
  "key35": "55koW1nWAftwZvDr1e3gxEjgXAxDRP9E6nvfFmSyvAb3iz6c27kEodphHW6DaEzjuBpePiAMWt3CMYKhBnxWAHAZ",
  "key36": "44RPvJ5Q9yXRo49Nbv7xaYarLNMfKEWU1P7Bgeao28WzbADbwNprUFNEHpPDiX2jzDPPFDoQKq71iESUKgSTvvC4",
  "key37": "5mqtRTc7DH8DCQf2KLVyY71XvFJNMU8bZaH6x9CNaRisyRzqBmZR8xF9WjsWgGzZaCTu3J1qwXvNZBVBNi8XXE1f",
  "key38": "5XvqsahFv8MwUK3QXfYUYj7qKPKigDHvQzwUifpEDdzQiEmpmfFj1BvCFzGSgk4CPX4TKdtrh9znCda5SxxrpfhD",
  "key39": "2W8NAaMxpUB7sMxHHxBG4k4dENDtq4RdwCecvgB2MeP9WaPVtcs4X9i7yse2amRiPZ4ZpsXpV6Azd7mEVpx7baeD",
  "key40": "3VQdmNEGpEUpu3fuAZRmfeEoPf4LrzXiRxErrr9BibPNtPEhVxH88Lkz2eA7w6AhKyjJyknNsrhJeoYHdi2UFRBj",
  "key41": "2XBRmyFytNWHnZG5T3UEnLjvP5QzVVQy4FT7BYmGuGZNauCX78RufKEm8j1ENTzAk165MAZooLn3yaGnmN4Mp8FZ",
  "key42": "4zRx4YvFp4imssa2yPAvUHvTDAAn1zbE97a9Uycxq7yHr3wo3JiZVrEoTeq1Kh2F8AedF416kK8rXzDKHXn63qxy",
  "key43": "jbXJXu3CnQCMXL1j5f41DQMd6pnxPDrczYhM1hXHiEGpo83XaUGn3gyYYtRAHGxLNzfDm811qarB9NvVpJPjq2s",
  "key44": "4pEp6TmsLdnZ3rYpXuPurVRTzEH65hH1sKuN2w5QPhYsGLW8FTydc3ctm9KfCiCXL2bppPrbcNNU8Swxm1Bxszhg"
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
