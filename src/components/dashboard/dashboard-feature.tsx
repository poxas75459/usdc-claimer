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
    "jrRG4F3mx63VVRCJAcm4zeXhsmHWej8pt4jrNeqdTCx6YtAHNfuBqRXR87uUFb7SZjHZSUUjnUwjewvZU3EJeHs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "469x2Z5njGz2ajRLkCwpwfxr3zCtwUPdqPuqCTgBRbV7Kg7rJy9uyVXYYNxEBoGSkJETGDc2bUTWJtsw62GzdBdu",
  "key1": "64PUssLZCUuQ7k42tmusVxd1jsUvti6tWSLveyGnYu433Csya1VFQQYDFRANT5zwQyVQpNwjjksx6ksHKSrK7aBH",
  "key2": "2ZyzWy9A61YVv2rmXntbDf46e2VUSZcRaCSTJ9v8Rd4H2psf5gPn7qyVkiD6DK7CTppkiaLyXikuTxcCLanuDfyj",
  "key3": "4wbRXjxirCwBuRAN5zQSL1UK5pSBX1s5czSQzoEa42kfXh7eoFusPMAyzHT5gLQ4KSZ44EnbEHvcMcygRTRLUTqv",
  "key4": "2w29pXkVA3FKpjQRaoz6aMv5un4g8iYfv2VhB1p77wuvvARvTHZJ5YpEkRZmZXAGFxfkpESg5JYeb5BsyyLb4ojX",
  "key5": "5emjTWCmxT1kYLkmVxQ4DKRkHGipRD3xoZdQTj7peVmZK3qjc2DbQz9dNRpFsFQDWBJo3WWiJu7d8X5V2VCqAFPb",
  "key6": "4F2wC1pDPsWqjBMoEVhwV59sANmxx6RBcTcjmu6StiLUa3eGcJJyGza4VLTw2t99WAD5mFQfqGiuLgUa5z11Kf1M",
  "key7": "3qFnehFcRcN9gYX7ZdXMsRH5yAy5V95CR7bbh5wABE6yAS8Xi1vy6PRzT8vEVZGBmncx5kzJv2k67bYcbMvRtPw6",
  "key8": "4SkM7MQbLGgBwv7WU3u2ZjgjtVDVwYwCJgYMfUUaujiCxKrD3RdG46K6sswqYWruhcikWMKeqcTgdcWsCSsNPK6j",
  "key9": "4zoaAE8gqcHEDzkgZCkVXS1q146kiSxgBASaDmCpzHW8dr5Aqo5NSr1TP34gUaMAuT8p5pFZDyrTov3zBxPyusj6",
  "key10": "5iWnhq43V7dyH1nBnQZCfn5zqRGiBT9FjWHarj7J1qDiGrKYDkrJQwiaEWaGmqQ3xzY8FbxKB623MtJLsdPaj1uK",
  "key11": "4FUwaiwEWAchfqGBCmY4ncGVpqwbAkpW7rRAwFsGtRdqb4AiKKWrt18KG3Ce8zobhbQaTVm5GfQaXCWfG42B8ahi",
  "key12": "64geUUgZABeSorLh7Fg2UtphMkbF3WQ8JitDcG6SxCUaek5pF2sSkrw2toe9KEoJ78JimrxnPdhz64jbiWkizCrb",
  "key13": "3yhrfSsChGqpxh5zJcPY9NojgkLTtcbMyKACFbnHYyqhjANfGfwuEHwNpAjwzZMJPBvoRGm9nFd2z5SwbCS4SYYr",
  "key14": "3q2BiuqT3RRd7p3mhBTWt7vrK9CoVXsuaXrS6G5NwvKPJxULukCBD4y1yBQVBnfYHc9aKt9VDCLrDcvBGxrnziAr",
  "key15": "vDdpDju6axD8c9izGMoFWTb4jrLtiCcyvPZEWNqsEoDxVGuCnWnhDWoia2PyeHsdbY4KQJntZgFjbFDyGJ529GG",
  "key16": "59mFHy5SPWB6CYRTySWhx7qTR5bVCFQbEA3ZzED9oDepxdtmXXFuzNhqL5YnCjroBLEmyun9WV5SNpxM9LXdW4jM",
  "key17": "3Zm61dMZkXBJZNtWs2o43hFoFvvbFET7Ci5Ch8yEFXF47mp7AQTrmdAoPq1WAuSVFcRMaAffw4PTYexfyjEp8sdc",
  "key18": "4UU4iF2rn8LzEhyLiqKzG2L4x24eWzBcJPAcNBVDmyLPvNavR9QD6SzKsFZE1FNsWZNq9hcrNnVtpdKExXa2HHd",
  "key19": "4oz5HGpE63TqcUmHNTghy5EaRPzbJ45BNoNMfNYZ7Y2JraAgnuGumaTZbt3h5dzHU7YCtp9bP37rarR4Mv1ub3qm",
  "key20": "4K1MstT9MqsvNL8t32mJEiqWMHcE3DaKUt2AFNVELwgGFaZP6pDghJTVpM4DxbpR5AkdMSzVP68vnYsZM2KZuKy8",
  "key21": "2nFWH7YrACRXikbaeYXjCUz9Ga5YfL8ctc3KknYCfCHTXHwyhTM7d334yoNnr4j41xuaWbiGWcG925CrUzxUsdx1",
  "key22": "4W7rqCXxHvBfxCFcu5doFQNj4QLXWVfVdnkzMg5Qq8nb4ekDVPmLM29FBsa7WpF44aytkHLjMEFQ45tbJfdDeGNN",
  "key23": "5LFrcsT2RQjy2vBMsvxTdALFjNfrW7TEhpBfvR3nvxS1JqS4ME2uX3FnNttVWTrVVyycVMcWkE9w1JzZLY9ns7Ti",
  "key24": "3rSKUhYxKE5SPY4eatTujU68Tv2NYB5UZxrFzvjZaFLfcHyfc8SrHC7V5Pys1c1TG6prLAvMQMAwEHoMWfB2TUGe",
  "key25": "2Gz3gRMPiryejSzkCeayLy3bNy8xVW1mu71LoZsUTU8mjukcALajnGr3A7vCbNK3npQW97ai3WSjwwtomuvYVHET",
  "key26": "5TgKDW6iMDBSFrz7fk6ZNPaSk3hsoSLHdE28beBVeyAPUCQUoqGmnTwzFyR3HzonCRmM4gJcDYLBbhrzs6kpAJH4",
  "key27": "CEKkJA9RV3FvnWZN7D9mzrFCdGRKT974ZidSGhE5FFtD8T1XtQ5BNLKwVFepUDKTcPF7JHwDnwNAoN1Sxptpe1M",
  "key28": "2vT4SUb6A7sihgC7P49LW6UPBn6NyyzFW3LvzMk9TLij1y9rgbJiDTazHkTfen4QPqGir2aPJf6NKCJJrDvH1fRq",
  "key29": "23UArdvATqDvmjD83MEb4R1L2K8oen6WtSbsCpJ7t3YFwr1t5upKaxSJPCWq5HrfeeFJvqtb8VGck3J5jsy616g7",
  "key30": "4sphU6hGMfGh1EhCmvpac4PqsW5jFi8LTwANrxBcbYAGSYguqHc8ZCRVKeSPcW1fZg3oACCNDXZZKTGMvvSekvwB",
  "key31": "2WLAVFjjFS6r1vA3iekpxssNcoL2LjqLoH46hKuFUb5zN7MJ8Z5u1NVWzPCj5fysgHS2RPxK2NQLax9bmx5QWQqd",
  "key32": "5ZFGdefVgPXYLqT3wfePe6R566NaweG4S8rtYsZyWwMkLcGzAR8qc9m5Yx9rZH9TG27WhNcs7i4RWeuX9LdkK4Pp",
  "key33": "t2HrdD2wvPKsdSAr6BtShgBrw6FSrdCk4TXaXidMhRB2yYkJ4vePTZFvwQimT21MFZUonCgxRVRW58wJQB9ZqGf",
  "key34": "3KYB2PaDmmJBBmc4DdHzdpSGSNTcmtxDtdmsUrLBmE19wUJjoxvJSV9mxRDD9VtV6S6VevEx99wY2jWDCC4z5T11",
  "key35": "5K74uZTnuk2d2BMEFi54V4v6nv9pcBBu1aPksce1fdwsirgU5A8NpyBnbvYJaKC4E2XGGHAP9i5Ah8fpqQR5P5ux",
  "key36": "45Js6geDjGE6YxTkMagUjJEpGvsxx7YvBPJsPso7s2GxPGtMWgg9n4QJDMNPz2d2TGs6EW8892Lrr1wAeghVUvtY",
  "key37": "5HRr8r5k6geHgjg1ZEz6BAXnRxTPAcnySc7XZP4ZmYDAAqni37N4rcp9cMdFALAZYRaVPFhtfAjSR3UyY2QEB33x",
  "key38": "3PqVsQxiMEiXXtWC4dUuAhuHaxh3FfQ3nVm5c7m3KFrc4JGirwGbK6vtrMvvdoNeKHGkctKQZQ786QN51HWFd1jx",
  "key39": "3tDMicdMBt7PSkc3idCqHaTptHGaXptt1z73iq3gx6ukeKgCK77R141YArB1pwYd2kTrUufPzUmF6VQpyxQFiFJZ",
  "key40": "egFsKtGTApm8hmAM1fGB4av92Gzh2Fc7WDz22G4ER1LHHQn38Gbrbwzrw4XVqkQfPyQYNgTM64TyTtQXdK2Cp8j",
  "key41": "4Sh22zGgMVHiC1w1McgDLNcZRSfAcxgCntU4cGykHg4nwu525e2iN9MYv3i6Uz21pGZAuukAn7GP3PmrQn1F23hG",
  "key42": "49FuHEh2XJYP9YKfaSXcCX28NaDF2K5btdbJgzedfujLagEDjNhaEVXjZYDFTe3sMHHHCbt3u6pWjyhLkRBnkDWf",
  "key43": "52MRpY7FnyXdhjcFKvsjYr7TU5LxJbmxDpKmvFvZuF1goVgrgcpMLPBwaoaiFnqMUFie4C4ScpgcbQk8rkkGAugU",
  "key44": "XmwWXTx3rm8z3HaYHosGgcjkXN7MrvJ6fvyTZhfANF417YcQGPz19HLaMJUJuUSt4Y5rhN7X1CnRQVhZaZiydYP",
  "key45": "2iao8mQbAZm6UtyA3azo9sg1fpjq6TiBjfogzJ22Jx8z3VfiVoKA2NhguczQNJWwsCoTkMr9KQMLSEYWTPFcwEYz"
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
