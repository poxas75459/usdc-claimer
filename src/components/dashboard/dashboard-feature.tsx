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
    "2EAL5vaHP5ci3HRtcyVTVK5fPaz8H7Hp8usghobAPnfWXa4WGegnX7NL9d3zs2wkFw2Zt1EsMRHXGvBvRLkzQzMr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B41LHC5kax7WtmegkeunDLo5NVE4BiGu6oXh1zVWyF8mMiqVWTnoJ6NSMTNnyZFX3yLEtT7ZY1SyWkHJMY3egCW",
  "key1": "4PDtfNg4QEtn7anVvEUZqL6kQsbXFQtPrcimYidG9rZQN6hwsrDjU6F8j12DZMbqWbDEWvtKvEVtmsZAcjXprTdc",
  "key2": "2v3nRvv685uQXhtqTKLdgWut27TRmyWCMXf6yCRuagkdNeQUZopixRaF9ERXL5kuUyUBRRnjW5ZLtkDJGLaSBCBN",
  "key3": "3r8NDBRNLJ8PFGESTwayWkbkXFGTLrGCAJ1XqiK1vbg9YXEoEogBiqhjXiQKpBgqX6VX1ZX4mLxa7AUZ3zL8kjj6",
  "key4": "5MiyS2uB3Ym5ahD4SaSAgCTV31M5tYLQkwssP4yib1d2yb2DuaZvhedgCH2417GwYy4XeuUsWRn9TFMPZRyKdkPi",
  "key5": "5wZj9nDUugZWxFzDqzZNP4fR2fASr7tykzg4H6csjgTJMckUhnNJE2REN3pvHBfxsAJirhZjTBnGdHnMc8fCGHXL",
  "key6": "2k5ZNMr5VKrpdeavuf1cM7uRRCJxu2a2VnWNMspvEvuvBqgZ2SzxSA3wiiRwGwWmkUFcG8PRgQNxSRvQs1z9qS3p",
  "key7": "5utirRB4SdzLXTWh3oyK3N1yPQhs2ici2DBvvyn7aSkgKZcdDjrz1CVZ2o8tGc3Mfpb9uGkguQDRGXdPtvkjLb3i",
  "key8": "2ysvqSGTjbwPWHoXWbJBqj9iP1ZuwrYsPV8UfdHuqHK7QbAjPaqY4csjaAqxgDnWMs8J8BNDMv6sxRMVuykdk22q",
  "key9": "2TBuDBHJWzTi3GmQzFVCvaCjaRFAS9pdXpQQUokTbTfneTxnv6FAQoZjyjWRjgg5YRbgckgu5KFiJk2xpWTGpMNu",
  "key10": "2xrA8d6XhzrFyrQEjLqGuSs2ax6G378tVt6fmJBgXDAMdhenNWgFuPfXwxrqhcrVeGtwwYj1DPa1tuWCb414FVNy",
  "key11": "XfdWwVaWBz3nuWw6p4UmrkWCvHLLeTWXaUFzXEj7125kmfNoaRHVEibMorgW1fQETvUqCWnKUTSUstB3m2muBrs",
  "key12": "2wnhVCTQod6T4w69ubiADeJpzrmaNbnTFY64uDvcfAUUjyHPHDeRhNnfKXx1feU8et4jFEyL2hGwv292DB73ciXX",
  "key13": "3yRLVD7PWeLX9FqAeoyvfh3KSx1tq4ufTSFATnDniH9ZnJ9sjRVmVdXPP7PtwWadojCmZZQGrfieBkmQA9Fbatca",
  "key14": "41hwY2yy5mLe8v3DbYXhg5kcL8WFNYhUtTiQtMaf2HPPovDgGmNDCSS2dEmKWPiijCfb8UpfZehwbyXZd844cEuz",
  "key15": "3RJ4cL393yXcneUz8mj2aXTjQTmvcdRJhsjvs38oxyb4fbKQV6jrCdZbvSNbsniQVWy2sJC1PsX6oC66uFL1pn1P",
  "key16": "4LpcrFiPYDGgU6KeXaEJtJwZNQ9PVDDBdZxKS4EoCgzg5oXuyQ9WawvMiCBzguHMWjogqrf1DgeRmz6JKFytM65g",
  "key17": "QBqEDH1M3kq6t3CzYYtRLwgpXD4saNtrbJGE6a17AXG3JDkW73UsNxNN8K2f2Sduipyu7LxZooyXPFxzSsjdt6E",
  "key18": "2uYbk2pdSYzXeR3aSxNPf7PSTWpGv2HLYSvdTjTdMe51rD5oqxgnHRSNEUzCgMa2jYpbq9mJw6iC8PpN9q69EFvK",
  "key19": "4fu1iWSHfwh3Lh2LG8Q8PH78tqS534MsDnt4RMrzje1mMrYXvuTwanB9RSUAtLHq9YUzydRVk2tHTXyT6iuUP7cA",
  "key20": "2P3Fqpok4vpbHYTAqbpV4c6j6UXfnjYuSTm9TscmuQpWv9mUwwRp9cE4TDT2ramHoJZwGN2J2BDLrTbRrRmCJcTs",
  "key21": "q3cH4fJqCV6KFDY2XVZf3FMtwMTw37JFo9PXdXcc11HHMBn1azA9V3WjAy8vRsu8gVuUfjpMd5ETVh8gtCLzLjU",
  "key22": "3bhSk5JDB4c288gQem86qq2mkx14Z2B4saaqYkRbXN9b51wkXPS395Y9XMFsUeVLUvHoREJ9rLVieHESW17LgDub",
  "key23": "gUoapdRvEuNKs2HrgdyLE4wp8Cc7kJATg3ihpyEyyxPeLYy5UiZZkoan941cwF7Qq3mhyUPrxNT8Wdqyc8iyAwQ",
  "key24": "4tTxFjeSaQXjvPc3RcZqNoptvZv3rYkyFwFRbCHE4dv2yZqtWcNSZvRm5ct2775R6MnvUm7nH1ZNFexyQ75omBER",
  "key25": "4u6qMYLjdRLrLjhTdR7gy7zgTUJEuY5jpeHRu8GJrhJ9kwkKkd7HHn45GMcxW5qm9KM4WtG5kN1usFCfmV2rCHvX",
  "key26": "2EkfnD7wNsAaz5MhobNzX4FnVhSxYzU4upnNkDU94QyYRxDNtfVUfBvosPhzWWCxSdaoqxwL5eHDWSB861PVa51y",
  "key27": "AN3rbAaoSDoCmXQNwJHEPwQT9WqHHi2b2Pcht13W7ARY1MXuvU5mCEzLFVkrVE6oF52CLcJkmBfL4ZCgdazEGQe",
  "key28": "4Rr81oFzaVsou9Qhtp15ECxSbaUTtQErEVFMJMVKQwBM8e7DR5GxMK25rGyp8EDYtgrn8Cq7QkUf3ckm981BMyVL",
  "key29": "2M7vQydf8mVsmErt71ffRanKeygTTuPWN9SBY14JA8Naketzf4UkXBYG5hcwAr92PMNxzwaKvPevLNFNaZ2qNXXT",
  "key30": "2x2Kgy1PWHcip4U7Aihu8vHWEAryLqzXsGpEM2reonHY8a5KwSStvfaWi2oib1YAwypNn6n2hqLyCVcwi1drAd3b",
  "key31": "3EHiaG3KK47K9qfVwrAbRFkWGcofdNeUQ5tv8NtaZRMo7wENJR6FQwCsynhx1Jzkosd6LhxfaNxTVtAr4SgPwALs",
  "key32": "3ZHmNwFx9e37oiCmWFtbt1ti3prArpdfs5nAAJWAeEUuy4GgMN2dNyMPV56ph3NG8NwyVF3m2yX18kQg9z3GCbix",
  "key33": "5ENennCThUXGRQaRAmUS3QudzCXUKaJXP9MPrbLLGt8vmoRJyET4X14XCooXM5LnRyFVdaVMGPntf2JE7XY26LSj",
  "key34": "2b9h2vWMf8bX6SM7JZiGGWaPpbDiNRZpCpaZfMpruFwrrdqBViK3x8BD6rs6bVajEad73hAtyijrkY5dZWSWcoRg"
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
