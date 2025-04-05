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
    "38EaY74vvHSAYwx7CSrMUq1qSYqdVqJRv4M358fvH7dwLpaEBizpFR44x5ku9ZVHk5HtJJUcCPVzUpHFcJzKfXbj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZegbHagfa1riK6yFuEtHqWFTcv3wXWv9WzowEGrWEr1E9qQpVm2Pbz5yPrZPdLLx8rPNbaMmsRiEKRyr9K6xyob",
  "key1": "251rMgPwBmZbU38NsbmknMF2xBHkRtJqmJwu1yMdouEy7FBoQe4p57uMvgRuYDP8LhDEHZMR5mnhvv4Vb9u2GgY8",
  "key2": "2nFc3RtdHwseJbkLzYTEcxVLsLgT9GQKC3EVaxyLXtkVBhsU1QUxBKJ2J2ECx64DzqNJiENqWxSEJ6FcSB6Btehg",
  "key3": "kp5NGogu8YfUu1WxwCGqvJeKoHiPkGLbfed6Qn7jswZT6G98WhoDKgA2517actaLbtdLqUBcscRcXnwkxeQTcd9",
  "key4": "4HY24WMAxU5Tg9gqkPMBfmANU2xfihZKjTjNoq3t2VGorGndJkPkZsK3oYMcWu1aojitwrpFsArptMjus6uguZLv",
  "key5": "Bxx9W4WNVFuKHzjUceMFm8qEjCbtAeYvmTYyT8zT2ueA933W6VNyD4YZt9HtjyaewWEThqihVNu8GxcSssMr9Tn",
  "key6": "45z8CVGHSZy4XQqz1K1V1L76ZVcM4kQ6q4Z6PfcS1qGonaNC8hJCZcPiKRxMBW9z7FXRtPExZrEd84tTQW4fMgNQ",
  "key7": "3xctqCh3e6o4bUFDw3itFNCaco6tXXHY6q7RUP4M2zhTyggtAdusXYELG32orbKPWa2e4CsymMBvwsssakPJKAXQ",
  "key8": "HkL5PFNdMQsydVL58He5ysBk6NhB3XyGfoVJoLycBV4DqvLxsnQSfGAxd6vrDk41aNaYLmDTRTfMwZrFtQfPiUp",
  "key9": "SD6jWTS6gGgW87gsP2miaNie8v51RPnASvNy7b7ceHTWtmRCAyhF6PXCwr1fDfdkCYS6d3AGsAkHpHm5zppQi15",
  "key10": "3xkPWfiQP85zU83n2jaybqCR5cSzxxv1gpy4wCHvh6uouZTTp3zkv3nLNasYzgc64gcaifwLrzScsGTpVSKekQxU",
  "key11": "7qQTFKbAsyigaSpYhYFCYMGxabEoCDpCkh86P9w2mhEKt2QfqWujzThGUzPRAey2nRXvaycXFjhXyoPV3XBcsaU",
  "key12": "5yKKgLpczPmiHhh7Lv4xmxa3go6FHrx2FXuAQmhbLCp9MDebsMZCdUx57BD3JJ9odsy5GhnvW9AjgMdXPRrF3js2",
  "key13": "2zipFze3aSeTYUekSJV33zEYHd7gr7SCopX4ZmuS6hw1hCMttoSnsr3NhgiH747QoFxds4zjP6QTbUhsLxUqTsD7",
  "key14": "3R5PXq39Cp1th9QpZ57f5CWa7cXwFvtCpgLCRoYbSrLA9r3oNuZxBfmvnFTiEux6BwL2KdQV15b1wmowfQEGXaGR",
  "key15": "3Wt7EfWoH7BbirHoCet7Cr5W7Qd6HdbVnxH6VXRNbbnpC96U1DekFgBofGFqiCQbTsvfNYS5LbduYmXNt7DMNPyt",
  "key16": "3x9JV7ZKakww3XQkVDsDNRpSioxwGJAc7xc25vYvsSt1abLHA8Yde2ove88jW8iZ1L6AKqQdt2pGDSi3P1VwrDuH",
  "key17": "65VPysS5GChCDjb3FSJdLVwZYtnSeieJhoEVLrFYUwkwrLNC32NVBYqTfM57P5T5tNbeUBas6UCYHEhkibqvk5yc",
  "key18": "4chKrTQ54ec8NMsfKBbsYKLgnegHtmAkR363qQFXjMdFCbPjg9hgbFcezKnAFvuZo5PfKHQnSYrBgx8bEUrQv43Y",
  "key19": "4PHo9S6f8b2heWRuzA7KkQbuHy6aspiq5DminRdb6CLqTLGXbBJuWbRAurzi3cY5RZYjuxSDkbgLXBcqSAYPNgwu",
  "key20": "5ig2wjU36SwYJkX64B2fvAqXSQU29tdZZZKX6rTZLy58pWPF4sWZi8GGEfnh4NCZ5ssPhmzYHZxDQ7aDUcw7YKHQ",
  "key21": "2azb8D8zx41w1SoKCQkfUBPixCEWGS2zkcpgpgnZYN5gJGMhEXTmdQAzvqj6u6CtvkvtuLs1h3QepLcPbY1fVkLw",
  "key22": "yWQSNjjPae8jxdKgCTJ6Z5uxqnNUJdWB4zJPYAuXNaE5bnAfVhNqCnR4zc6U4w4vA7vMLmPgAh87rLnTVnfLgHG",
  "key23": "586diaUbKVW8tpD5Bndfg2TfmtBJFterRWPBuDbtFnrrS7y655Nt8nnfTbe4UDPqMuVh7MveQTv3tB3NtaRvJu9U",
  "key24": "7NZ4bbDwyuZPRwEYaqdJyYnuBcSTyHotBLTP67Jihqx8CEVUpvDnLxgTAz3pP1SSDzuUFgedeKjgasBrzjBmFee",
  "key25": "2gdCeBjUz7Nv7uBz6DFGeE56iZkx2TETTiigGxLyrCdVPTBxDeeKbFMM6pFTL7NCHHfq3BuDMdczhB7ZmeUN9cTC",
  "key26": "2EotAwFbSBqJs4fyHA9zu3yt8dQye6qYHjsdUbK8nSLzo3bWdNH8jJh5xyo6hFtuu5Q9y6fLzZ3fgtCZewueyb7H",
  "key27": "43FvQorVNxpKvEnWvSd1QPLa2NgLDTMUR1dYUD8vuKrUbosNumyRhUtRQBCyRm1assSnohHW1GELAXn3HJ6i96F",
  "key28": "57NhecASie1J3UAGwqkyLcZaUrGvAC9k9MqC4uRqzgiVF9xk9wEQ3AgusrUg2bbBbSHyAZ6TLWcTst6wuY98seku",
  "key29": "3DHbq9jHXbcWtBPWVZnaHdNq2WDtcPK8Yk84hUUsffefXLA9qdbusmj4WmcaYr58dNt8Yx5SEkywqzLXKswZsRZk",
  "key30": "7Vmho7fVHMxm8qzc2YgLTkfZEdNmsKpidGvAQuycqEMxhRcq2mbXtyqXZQgRXzDpsbPni5SUU2gtAfXwJdn1ywE",
  "key31": "2tHMfv6mcgfJ7AP2c6SqiAb89fLWzaYibJKfFJn2eqH4j1osHshAazKfQTxFozW1J8uzi9eNnzX6iMZJyK8JotbD",
  "key32": "m6WwE6CEEyS572Q5CcJm4VzKLvZTfLKCvijaNsD6hJKUYxKQRzC1K9eXWwmJUBk3R3SotCmD9aUzu89UNrSwSS3",
  "key33": "44GXLrVZ53m1TfMC1N5nonfRasRSqNL5CNTmj9nXUnoAtgTVKKGGoQsdwgRKzRoUvd2C7m1zfiGjkg5EJhA8buw7",
  "key34": "3pt4UoL36MQL6HDWEqhcrmRGRJtKuF5vbw4quEU6nujPfa2hs1nHPwvKePa4TF6bo7GEYn999sWqDSXydrV8BK71",
  "key35": "3gk5zXqA459aZ1QCsZ1E37GRFA3kJjek2kKmX2pcft7NkJURU5KXzY1NoUH5fjRquP8VrW5dpPMikME1pc8p4VWT",
  "key36": "3txxoRRatphsAiEbWAAhZsZrw1T75ZPSLnFuoCUjeVAun1a4REbhNbhYuGrkA1J61LjnctbHbAPHURQacN8HwpcX",
  "key37": "ib2DEWWEBkKaHwW9EaaztPRBBMwr7Duufukp1DpTRAUw8EYJeVVM4ivmC8DHfbdvymyhRTGLmwT9eLz9QCqXCYN",
  "key38": "3fQyrouCBu22fUkCzahAongB89Ky4gLjDswTzS3nwT6jD9nACikkhoTPG783TZipSB2SuBgVLiw6WicdPSk8Fjjz",
  "key39": "bJzzxbK4qQyTzY7sK6G7oiVmswbYKzNkT4maYQtLEnUp55rznGGZRVAdqqLpBDU7cFz8JhJr3FGuoyCwwXRTrUL",
  "key40": "3grPwH3KdXxKQETEAuwVAzPNJx8EhKURn3M15YXQ5eE4V2GzeC4t2ZqCi2d6N9Bn7DTZAHGyoeZE2VJwwVw4yB5G",
  "key41": "36QbDeyrDMP8zWaXxU3gR1NBNyCqg5uZu9M1kSCEapB86rcPGTtYdrbmWHeSuLyh7fxEQckA9wYVgiHnH6LsFH7a",
  "key42": "5ZPCNmsLeuotoaNv2WScwKpAe9nVW2hi5vxJ3xyDgNrQxQVGhDcG58GCZia68LY5eyx4Sca2cUjAMkBqzhLpCSYQ",
  "key43": "7BLxRHDsx6WGbtkovWVjBic7zCesVTLxASArXvj459EjmhaBSzDWRmZf6bB9xpowo7diuBUAQV29u77HL6MjAJW",
  "key44": "4xnpWKy4u2GLxNG1eyeoE2Xjmuzg4MtQWuH6wuVgx27EVmrANAqt3vr4uN2RqWksuK5nAmW9aQwXrHmW9G3Kp8En",
  "key45": "4EP979wWPSpEpJRwsmqg5bQYvwTnVA46zBTS7cgJRYTJceMyyqLwZTjoaCBFvNrVwCZMaUm9aYgUGGPgEcC2qC4f",
  "key46": "29FChyzqtT1tJpxxWS3zE385ChLtMbiQwdukpCwePdgskZasbdJZT7JrzE4UteKUqmBYeNAyccrLrTYNAY9XHEV5",
  "key47": "46XkYVsVFZDEKQMzEVTyN6g7Qo1v9kcANofoLhDRi4SAk4p6Zd9Env7Am8VSY5ZTM8WF5dFnoJMJGLPM9X5PT3yk",
  "key48": "4rn47pHoNC26hBkLYs7txBdf8TiPWSWj8Q1wPWnbs463a8dUQqHJuK3B4wsaA97JcVHaFz9tz4XC7z3KzGxVagD1"
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
