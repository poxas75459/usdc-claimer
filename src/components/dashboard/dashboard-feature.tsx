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
    "4DJ7tmzZosvj4yRJzbhjTEdKJ6R5wzZUVWukEnbbj6Q1hZWx7w7qasn577YtfoUQabjAHHZcHf6Dnii6CMGyLZ5a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RUhQu5nMrzcz4unNRtJozMKeYRsMZSJBCzAZcWckQ914bE2PuqLU2KeCN2cmEAHkDbzjViGmxAYdh6tXiFT8euH",
  "key1": "PKA7DF7pvcwibtX8Y7ebs6wgAwdrKjPCzqpBwpJmTpyHyotkFia5RYcjpjWTFeD1Eja673B7bmu6ZbkrFa61R48",
  "key2": "5yyYmN4DrHDcfaji55Gs1z4cR3gGBuKcnqr9vkTbTULY7qyLZPSY2KF92ukXL69rTgd38ZtbuofZXpYbZ83miQrr",
  "key3": "4jqk5UDEAxXHgS4nvMbzqVPqvnZerJY9WwxZgPiFDdz1ERctXitfsrPcmTLxg2mURx3bTBnFce51Uaez5CrrPUnU",
  "key4": "4bmRVjFM7BDnEsHH8Do7JWW2BAVhANdTEKvF2a3b81Mik8LKY5LPBBmUpPSyKYmb1cPmXsdeZ2vtdvAuVBQG17FR",
  "key5": "2SUuxU2BHCLKspj65wxYdiPZ3jcnMqttmxssfJcGCsheAi98PfY8k7XCt1F4RGSbjfyvpAaBfJQz55cGJCzjDBTv",
  "key6": "58xGdeeD5dYfTEqA1jgjgfBFFpQ4F7uK3qm7AyUoukrjH6mdXdaKDA11sX6UFJAuLvX57DmdLfLHYgeW9AWKmjg5",
  "key7": "4oq2dNZobDBqSsoQ8ZBtdTTfoLjLTsv865mFjA4otGHwb22NDb4cNdMLih2VKz1xcnaHk8bhproekw3bCKnqKtJM",
  "key8": "6pAyvhfLWbg7omGPFaW2EWm6WQAtCnmnVHVWqAQExZUzUQstj8zScVUcJxsFAtUSqmFMgK3eZWQzpVhYGpb4HRB",
  "key9": "31EAZCzp2RYCcggLdMDaBcmvRifGiXotSXk8PgeEPhqr1aA3XSnset3tcTvp7rkS94Rbe2Dc3qx2d617T3N8kvLS",
  "key10": "4k5WdK2gq4zefYhNJr4w1x8j4hS7g3t7XjhQH4YfH6YMtuFFXfVhpzWGPt947NHQDpqbyX6viyavefXh1Ug5VHYw",
  "key11": "28JX2FbXjJriHrG7ZEnAd3qSWSd3w2yrjudFcaUHwfh54989coiHaC4KHAnTk9ei2YvKB15FQJQbye7cbeTs334e",
  "key12": "3fNxMfhBhUUCx8GbkrGKqCZryhhpNS8DHbeBPiJehYhBF9aCTHSohh3Mvt4rzC61T89GdAYgB2X7hmsZmg3jNHtF",
  "key13": "AMTMfhvJv71GCTSyLJ9d6FNJ86mDQpZET8ypJNFrUM7fBQRyj3seEQ8kb6AFzeZT3D7yzNwAiga26h4hgUDUkGP",
  "key14": "29F1YoXF9N2V2rL9aYi7jYfveDx48wDBrzttQ2KwneSgdnTPtS4RFqsPWGLcTqUGdgwaLKp7JbBb1m3Bv9fefiA9",
  "key15": "5myeDKGHrH9WR2czX9Y4VrRLs4pgjqyCh5kViGR4GWAx8yPjk9EEvKDFB6tLoz9KmYQHkGVxp8L7T3tfYe1n3qii",
  "key16": "4sYJCkixNZVY4GzvHRgjanHFmyXWrSxXLGUsRgEsDHjcUhaM8FWcHFyCV6u3GiAKBuiwBxB2ZDWf75mFUKis6Dhv",
  "key17": "2oVjhYSuQZrPTLexdXYizvUc2AEWfDtQ5J7JCAed54QEc4iorDvL62HuSv2cDYmJtbHBhFDuR9NC3pZjA3Mbqfa2",
  "key18": "3ntrB2WuckUo9zyMMi3xfpzsrg2HPDjzhZBtyjwfk4MAKBceZerB4uYSSpF4qjMFL8Kn7UAgDeMk6bnaWpTdKAnc",
  "key19": "62AAH7LwoDbVNjJSEVB8sFmAncoY4cx18a6XMLKvaHwtWPYYyx5zL4yRw7u6HE5MXTALCxkjB8dTsRtNdk2zVhHo",
  "key20": "2vA9YXW4n3ueVAv7Qfzby5tVtg95jw98CyrQh9K6tmqCDhj6jfbG4a2NssRiAhrt3Cm3qrJRiJ4F95Q4Dvd5RncV",
  "key21": "5jTNH2gZzFgZEnQMBnxkzMBTEgphUp5i6xQYE9e3FHXv2td1VvN1wjBsdUjUmoHHhojDc7hWeATmqKtM3cwSCeiW",
  "key22": "4LjuDsqgoLmfhfBswm5fvEiZKycg1pctQUsBEbZwVDT6ySTQr3ddamgsA3wUZnpFQu1uLiVH68ZiZftxycGqWKuY",
  "key23": "2LewLnzunARtT6DU6kNwgVJi7ob2mAVBt1Dpdt6ipHvRhBVj4eMReuZxSzFQGS7LFve4rg435ja8yfoyffwo2dyC",
  "key24": "5DHZTCNqKdA5bvj78ufbHJjYWiHEvXC4x3ZB9Eb1Ukb1yYX1yZjiaBYu6hCqsAx2epJ6zwbms1SuVjcwu7oCWSuR",
  "key25": "2cJYs2CryfV8Gmy337RAAgjVdMawjuxPpr7F1iD8Ey2H8TzmnZZCbnUVV8UapY36nEHBxkbF3owLQMLFuNBzwTfj",
  "key26": "3KnNkukNjzGcd5fWhvDqYbQMMsf8G8Fwu2mKMm8nS6jtxGS39v7HtFxF449RZLpaaHqFVDdFkuJWj3FfFjLp2UF4",
  "key27": "5uwBj4RWzAemEmqY4JqrNgrrvLAJ2QFizfVy1g2xkGPfa3t333fkVUEB79Nc7D4id2mU95N66JEXy4FuNvDqL486",
  "key28": "2B4Z5AfyxZAy6B1FN8kj5ehd1j8raM26njQeJ7YLBqkwi14od9Vhnkt74oAAeDVbvEdcMs7YNWXyvEuLzJFfPCos",
  "key29": "473aaxFxgpTJuhXx2rj86MoyvxAK7fiSFs7okez9xCTGU83X3h3efxCqLYoUt6kVWRhkeXdpwFK1f24x4eqSKkV7",
  "key30": "5zwdrARnoFFG8oPT14Qr6j1CKpDPoYarbcvackinyezhuRF5n8anq3zhfu2YfrAKdFCZxqcLMDKzxBUnCj5XwLMf",
  "key31": "3jnq7DkTz34hCBLFKdx9apN5bhi9ivdLPgRxRRbwb5fYUoGyazsGPpR7FYSU1DtrUr13wFoPbMkiyV3shhwiVoBU",
  "key32": "5wws3JBLjLzq6nbSrfRmUcRxw3vFGibWqXpYaDqM6a7K6VuqAe2g1WxarozbzcNVRL9bX8HjRyN1VwHutW3z2Aw6",
  "key33": "2GMNevNUVuikooNSwZdqnopAS6sUP88SkKedHgUEEHb1t6xw9vRdwMaCKVgTisi4NcWvYLB5izumG4kuGdyqxgHf",
  "key34": "iZtBag4AtyJ8mzftEjPfkQbQL7AYYwEoPaoia5FaA7ergEK7q7oP3FYxVyFfzEVmJH7p2fCp6ZJe5KhvKQuQTEZ",
  "key35": "2MAdUQsyzz8sBPUhyF5ZCxkaqs3VQsqJtCjrs8DRvf2w3YaXDSfgcLKGTrshojG5yNcomdsCN9YWAymaGd9fQSC5",
  "key36": "3xQrTekkoG5naXG1fn1S8xmkWkhKrB3vyDPGreMN7vp678VPgv9qT1CfLtBTS4Sz5zDXibkMaon9XcaUXaRZhdyJ",
  "key37": "2HutPc1t5v1ocUerbNEDurbW1VSvCUShyryLqoc7peXMRAt33iyQd8wUZ5c99WGcmeueQAtuokedghN8p96o6Npy",
  "key38": "2mKzrWwmjT5pM95QzYUEHpvMeUaagDimWAYNUgkkfVJSC6JPiZY2dK3J7T97MxonijmSTqgdp3LJabqgcLmMGg4w"
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
