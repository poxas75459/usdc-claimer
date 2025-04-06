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
    "3ZFWHyudVqbuPUW9nfJ4FkfcE2EmWGSeTY5ddJ8BGECHisgnCt2a98xqfavd5bicVRyimvtx6dSVmBEuBKfhZSKc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aXojHmHR6z5UALSXZPgB8vbLrwcjBRGw4a5wjuoYb2DNnJ5qvr9ToMR75xYwWgAHC5JJu52zYoP27DZK2jGPhZd",
  "key1": "4RQNLep7MiyyJzQy3uaLZv2FknLpSwZ1p3c6qSBUy6AMamrGHBBhezkAL7yQqaXNbvLiHTKD2NUEpwxN4wEN9jh1",
  "key2": "Hrm21mXK84rsDvRAFi1oeHzENNiiTCbmE7oNsnTcab7dDyaqZ8Eqh8kA7LuQbeNUAXisJ99Sy3WX855kpy6TbRa",
  "key3": "2z1YsEXihMqm1QAFCEWoQaXs8VNYpEQn5HskfgAKoUVeSyNeKizpGWjTwWKrB7TeDjr5BMCeRW68zojp3Ak7dxw7",
  "key4": "46kpBh4ndCFdy9BU2AK9MHzF4ZARJQTbhhv1hnSgwZBUBfHZsDxAwvrBuGNsNihcSfyHSuoD188nmcMXDrAT4iCx",
  "key5": "34wAavqGwsGfP5Db8fFcnvLXoTmBP6pJGsibgt1g3hmv2ikdnUKz7K9cvh6L2sNA7e2pzYv6KhMoaisbXfgHWt9U",
  "key6": "3i9j5RAQQ7G69dHCuR5mPAuieNfjYdzMfhYBJ5QVXJxbrG3YMxL8RHFJzsYxrzbNQHvPsR3geDMdYQ2uViqu3wm6",
  "key7": "EwwAZbnG2aB63nVcUDg1hXwz3yvtHqL342yHj6eUGYr7w1SWazsJtdqgzzBSGZmadhoa6y3qXcmv8upjdF8Y33U",
  "key8": "4TKgCS2kJJYz6faP7qBYyiftRtYqXTTUwP8QtKzssvPUMGn87uTpWdJDwRqUj5z3qQkdNNpw4L76T1zQ2hpEhARt",
  "key9": "5f37icyGeqd1CLqWQWDXRA3TEXiMc3cRfBmB5U2DPGK1VUcYyqFFfymhh4EprxrJyTgq9zhysVnYLMfhbVVBR2gy",
  "key10": "4KnSGqE4c61FwjQNmzvoSD9y5nHANZWL4xUV7on6CFukS5cfABNn7nKRUD36dxsDSAvPiabxWJ1DHGCHncYopYwF",
  "key11": "54Lfow7rE1q13W9Qe8ZfseL44VdskWcPoosmVr87a9iCakTqsQ3gRVxJvYmTLojFuEVwKJoRw5aR1fdNexFLwsj4",
  "key12": "35Thuf1vvRtBnBtwMgdL3BVXtugmZLj8aFRTZ21ZYF1W6Ag8hsc8DA3uGy7zLuhXCEqHX7d9LUwZdgYvGxG9vwYo",
  "key13": "5npNsLb7ASvemBwx3PDaxfh2A7gozUKy5E7hcG6XxaDtQJb8Fv2uQHL2Qt4QZgCHqYcxgZMrzEzMhtuQuLkFxNkJ",
  "key14": "4YUZPqgoFreY4KLPupczAXi6iz82WrjzrrNvbkR2QBe3h16rPypv5MTrkBeGcv3SCBwGibUni8TshkvBnQukR188",
  "key15": "56HqoDjv2JMkAmPrs4zwzh2LtpujA8XrAb4a6XfRhxveEVXgf89o3swbm6spM9tfgkwGPC1khY1iX9unKEuBCUb7",
  "key16": "42qb6m6APpDVqARWFUhXRbhTRokQashN5D7dvUEQuHa9kB67hrzgbYxDjzDAJ1Hc4AZLyz4pbJCtXe9xR1HRXR1t",
  "key17": "4JHYRNdrXfZnndS2YwgNFxgVg9EDuHNKwyCanvVgPheeTN4APqNNdYzPsBusTTvAVdUDuowfZoY3fBKrVpSiVB1W",
  "key18": "64ytg7zVHcbpdsJpqGrRZwTEHehvkMThf4SMeB7xBphNfdSQWdJDr4kEnyP3EV1bgaj8Kqvdn7dRJ8whB87fQt7G",
  "key19": "fXXX714chqXm8adjJRmtJUXxMRqRVhWgCTmB1WgyeipE8rhTGgDahPFsmxKb1tCPxnDosFuWTTAbkSrFPT9f9YP",
  "key20": "5M7BF5AKJj4fFvD94qs4CB4VGBXp3i9XWrU5DZq1vZrzFft6wdGfBeoKBAPPM2KiWjq7rDAEjZHiLKzq9SSTw1mf",
  "key21": "5Lpu8QhWD2Vsp1cCDo78iFPXRAPyQkpNaCnXNb9icNETd7Pb5tMpHz8FHcdFoM2oDdMFJmZH8WSeXe49iQkrRVP9",
  "key22": "2hm9KUGxMpsNDHGv4q4dQdfhRZKQZkb864GfmJyshFCeP8KGTXHxmVwcur7KwNaPGCo8ycNuN62DvbuU2dJbPDG5",
  "key23": "M5861vp4FrMKjKMMTerrRiZ1Cp6mZSwELF7CH3hbhuEfJvfBURXVzFqRohRpNuExXfQvQrnFDYtsgi2kH3zUfJ2",
  "key24": "4PeMnnNCv57Cgp6JsUAoL7376w3doTebBVuEhT1B1bNmgzkYBeeYu3YNNpb5vhvmnw4ZG22cqygHg8z5T8M5HxHT",
  "key25": "gt6xgwWmjMG5jkS5SU64eSjw6xqxy3z5n12KDRhDr6AK6m6Uef7bHMwvoYkKiaeR4cz9L4kkdA9GqWvgSMMtwEW",
  "key26": "3qCf3u4iMD2af3Mchy2NMWZ9EAr8aprjtAJmsTAVNE19dEuCmpG4qZpe9B4Wc3tcgzFkx7HBiibvxHFotgUPkqC2",
  "key27": "3wkhzLM7or92ydELCa2Bucjm6PGFy93qfv2sda5dsfydKZ2LSfZFf448wqcMCd8WWsDmouJ4ivH9YwLsreUeDG96",
  "key28": "3mj1gwWJitqNZZTQ7eB9b96VN5yBv1RwEMxho6jHSaLvxEHWks6soZ7J3WE2z9QXL7W6koYVufZPxbCvjWJZQ4g1",
  "key29": "5Qmoa3jeijXMqZYEana98zziZnXTaGc76gBErxYFzA3GxRHEtKWQLAWLGM1NkGcqT2Ta7mJMkMo1R1zCVf3L6Srm",
  "key30": "5ooeqBPxHJ64Em8k2Zb92yMQMDGhPv6tomKA3hu7JZBigQb9Ba6rS1keZTKwazCbK2JfBm3SPWqMvuJiYd2bzVZy"
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
