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
    "4r6yNbvLKhELixpi5zgW8fgJqL3nBwJ2EERgS2NFZuQkpGH92wm2xffdE6PrL3WBcWa7ErkZ1JP8Z2Yxqs9jTTPp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C65AxWaxGy7CFTGNCtYb2hSYr8RcvNkWg1EB6rsNWrfPQAoSSePdP7J9S1EBFdZ8u7cwqokyHF8QrHsL9psuyYd",
  "key1": "3hknjgGQukUjTQyUEX3zE8K4H33q1AzsoX4ApY6h1bCNXFhg225Rh79zD19tA6bXVnjF1WKSa4Z4MB5jHC16xE5C",
  "key2": "5riUJa215Yb8ytgegwguJe3Xu56BHeSxXUmdPorSWonQgVQ8rcTNabEJcF2YMsqDWcvx2ciVXfHWz7ZQNyUc4QdG",
  "key3": "2wNkctP189p3ATBY4MQwQjx93wzTecqjh3i7huAYCsLWaAiA33frKcV5Bq5AbmxqHHjYQRznEja5THLESiLFiK4R",
  "key4": "5iuDmJq8erHRBWQj79adnGYSHKNK8pdPWm28MpgvgNE14L4x2u3F39rLMdo6Xtj7pQbMmbsdxuQngHmJAoo4z5YU",
  "key5": "MAmRYii3hiC4LJZdhLGuHPdXSypfZbDoKCgaT9CapAB5aRVntLqrWLBdeW13FxLpKe7oi6RFQdC1McU4C6aXqDN",
  "key6": "2HCfbCbPvKbsoUFm49aC1MSi8KNPkBw39CmgNMMwnqzF6Pos396dbEC5rWtaNUJiVU9VanFm7drdYcuXpuSgmMdd",
  "key7": "273Nj86ZQ6WJCzQor1rm4KGv6NDX7ua5JFK7VeEAWQKnJeydo5uQjv2nGfzrqVn6dCEpY8FDdZMj5Cfx8h4zL8vH",
  "key8": "53fXHmP5DDS4UkEuz2wJdnw1Hohgg7Vba7dmnkQvyQoyW5ruc1YkAubcrMwf2APYUgEzSqpdxZx81rBQNhfsjy5C",
  "key9": "5MSbNLhyZ6qbrxVG1C74cksZfbjy6F5naT7guasWoVuRG7NyCbvoaytoidrfHq5QBNrPAvbtKZ5cJRdfNgZguJD5",
  "key10": "7tfrneXbFieyzAwhRyWKqoVny3oksqFSzCpk6kRZtTs17zqfMJRRFQb1cdzqGVLpSLxSUNz9msnSGkjqkXvtFmS",
  "key11": "2Bf4hghqH788nc6hhqcsgU2ze9ZdJB4k7sjdwcLiiyZMwajaCz29mwmWHcxZ9u1DCuGVzodqF3XuFrSL4bMjsQx3",
  "key12": "3k8wubj4ongP2id3NpHch2gsk8uHpjsanLzmYbi4YnbiL263m7BaY9MKWDRMypxp5MDEvjgZqAmDfrjzsJtNNyVs",
  "key13": "2J6DpQUCB1FaDDxVWyNopcw4TKrPHUukby5ryMLemAupHKtdjErJLnxdA4LKia1H9QxZ4LFhyiPniF6WJvg3QZcy",
  "key14": "4T4GUk2LcqbwzmSCsPr6VmKL8Jcdra4C1ey7bxE9R8phYCqBwB2ebC8wBDcYVDR9bWdQcG3TfQiYREhTG3T1qDZ3",
  "key15": "5AW5DqHo2pAGNE5qs6KVgmQfWfpHjzZ2ZF3fqcAD5XMaasvfdAAGv3k8grCkLVTJvYjKTPM9W2fmN6jJsyrUt4mu",
  "key16": "5xVsDvYGMWqAtTgPCvh7Nwavav7M9sVZS6XnePPj4UbdiriRyUQULaHy3y6SNei5TamrbY8x5h4dn7yrHzbQBCKx",
  "key17": "4PX3XSzbPoGvBwty2HQsXWdWEhMeMunaYotNFYkSxs8qhd6j1dPqKdFCAkLpYTCThjxf1Urj3kMZs9jRPba4832Z",
  "key18": "5jv1cHBeSMhp5A4bTDLN9p6pKLPx8NG5QMWehWtv7SRkT1afevqQ8d8FMdaUuSMCkKoBHRL9FTMnWVnnPz2XvbbU",
  "key19": "5dZbmXfnxZiEeHww9oSzboiYJw3ynew4TjhF356k3Jek3PmPy724vMfNJ9QVmWUnxgRmT4N5L5ta7djnNDAmzLu5",
  "key20": "4s7SAGKcA8Tuft6h27HP4RZyR2icsXevNaAL5iZQqfJUcRmKyW6eytvL4koEr2LDiXdSFyEwELT4fKiNQKi9jCTV",
  "key21": "wNyRooAyQUayVLPRexhWmDzhtg4oEkDiTAPiRGEMmXCgw3kjGCQyTdkob6WXjFQ8QxzGqno29KD6DJgUCq9DABp",
  "key22": "2KPDjKg5vYcSx9SSVHYnnmadvaYG6c2Umn9FvmE98BY7WtPXTsQKM9HRKR8BXWx1UM6ZyV5sV472iQtikp4ThwWs",
  "key23": "22c18rfMVLpFzsUpWYiQW82ZYHNaBcwbj3vsyPtu9ELbQK4rdfrrx2mQeUjtEA6R7EbdroYRhUr53XUGUkeS3G4h",
  "key24": "2Q1mcYsBKWywAqYDe7x9eUDtT8mequE53Xnp1umt5vzTmBE8oZhHUiVephCqaKupfDto63eVn5hNhtP98w5pagQF",
  "key25": "2jJ3U281Kd2gjAxQQwjYhKd6BfSb4AJnd94GEd2YjD2CbhEakwrmcSaWV3qA6XhLXGvT6Xs9aSLUGgXBDjjJYsGe",
  "key26": "9qaGDmMbFgR9Cpgz5L3eN9meAQmDUndfvigvHYT1r2RZ26eWEzv4X8PF7RSsWq6qT6qisAAybYXh6FcbdFf6sAu",
  "key27": "DGkFcBxpJGsdD6CHV3RuMFgK6AfYyTtr4j1fMXALDWG9VwYywk2jyubiffnD1rmpJTFu8CXcKDku7AVzLTd7VLr",
  "key28": "37zagFAmAuTdUp2xbWCfAiDDiEH21WUWBRhDLrSYAsTP1PbmAVgjcZRwtQTuz3s3LPZtJk1jkeK8FGMCnGRqCoZR",
  "key29": "67AFM5vLcDBQ9pMTdeybVK1evXVLzsWFJC6Df7CBdRbwpBuZPyEYiCv2hspAENN1vrNnhVwwsgRR6Mk6hEwK9udi",
  "key30": "5CMNp6pEDT3cdYLu7XNJSgQKsGdHjHefxmMxqjRDCBcsFLr95mFQN5ujZEPN1yyDYJJfb9q5h7WMh6UYeaut7zM8",
  "key31": "4NoCVvxsqvPmnSVVgT4DKCREUozWA36tYQSVHeACa1Qo16gfzPNfprRriNZfT6wgd2TVtZyQF1LLLdJUifU7YNmE",
  "key32": "3pP2x1sQi8rToDqatcZtn1xqZa3oma5owZe9qHnt8GB9fB6mzuBCFV5iLoxYheQdoL2A5CHJdUj8JesNCrSPbXcp",
  "key33": "3W8zrtcgPW2fkqXRkNB4CS2qxq4twB27KKE2StbTFNd9JjDFQLeFyfaF3XoABKZtnsbpzgYnn6RHZp6n7Sz1T8di"
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
