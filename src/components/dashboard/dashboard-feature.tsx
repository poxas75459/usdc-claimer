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
    "2V4rSqS5S9jrYTSc89HWsapBw4pcWBRgmVvyf6dW9ZE6N4f4KkHyJUUX2AC61sNiNbSGCRkdg1fnD138ZwyPxVsU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HZFQwgVABYifSisLGmWQsQs75ezqhLHELfYowQ6NjfWLnorojoUynq7xocXRZkDxMK8LAxpcSXi2XMq7gWiwjLm",
  "key1": "45TKhqXDQKZLVD5npcbsDyoj95K4o3UZukfQsxCgEpSSZanUgjkRtHBeY3DU3773TwoHzim1E6eaLjbPhaJLYVGG",
  "key2": "i2uNRy9A8UrjuG89pnXgeHg2kgmhEG5q4NgwZE48MrwqwzgBRNoYoQWyVtkJ55z8huzYJzzpNPZdPhCDESTTCHZ",
  "key3": "4qfWwhFtsnUFmTJRwJNLFWaj1AWUvk6Mjep1WwbEtyv92cySZgMn36VB2pAY1UB3YZfchMWmM39RwTWcgABKxHCZ",
  "key4": "21gcBHsBEwquktPVXajYVDKkt55WdhD44UZJJQXKeCy57H2rGGo5HGbtUiY8WCW4wCxwoFeLmX13qj7mvD6jQeAB",
  "key5": "XZgKDBf8PUNCaSTJgtgkKgQ4eRsrq5mj1b1LvRWxykak1stj9vhyuFnso8QmrdpJj2AJtAiiYecJSRS2FbfS3DV",
  "key6": "2CVVTbJTMUyKSj1sHq1bJAU7UY49UzrHX4j5gjJgAJiM5M2EramPVKCF4J4kdbGQeANJgArDkb7XXWEKrGqsgtqG",
  "key7": "3rYuhocGuCuktPn5VKEXSeNr4xZfybtmELVWVyfCdBVzU3hP8DRu6byibVtY2T8zzxqJ1AT6wH73knwXipsUk1zG",
  "key8": "5xzSYLqeTPzUDcmMUqV5aEaqid6SsEqPEnMqhE8Fn3DJ98bdXoxpQsznxKPMtf5vFm8gzDoKTYbAnPiBBj3XUn2Y",
  "key9": "2w2EN2u5HygBs2VBgnWySDPT4cdwty7a2vksWdgn4K8Tjvih6CD71wrKsZK62herF8dQpXp1SQR3rXwXknzv31or",
  "key10": "3fAUXjrcvbp95mVwEjTu7FRCVNyeiEq38BJeThHK29kP6gcV6oRZbVjtg79icU6Hs6wT8jjuKKLDtVMwKrfu6xGv",
  "key11": "2TYSLKyBvkQJD7jVWyjjjDJDnnATCBsTo3JsBFoZ2gnVS72rz6gJmQEYixyeAJweznGDDXfE6y6FdKVBSbnRUVFF",
  "key12": "4inv7RJCguERSpno8k3jAgAERL8tjguZZ3WWm2srstgHA5faQbBg758a3hz4yP6wbD5GbV8Q71rBizS6rqpAyisg",
  "key13": "5jnWtuv2dVahYvhukHfCWgjM7emdMaSrF6TKkJVRWzuuvGcxiQcft8Dywk8JbKucrJ1uc5KNAXajpKPx2iQLtLGq",
  "key14": "2X8YWwMUEXB93CSKjvw4zUq9pz8jPEQ4jWPee2RNA3DcVQKBA172PBHA6YKccUFYDPWqGjNeJDDTWJ5qtM4TTFaR",
  "key15": "3q2B1HRRS3BKvQVnkD9FbsdyGLQvgYTMsrTHZRiSmQkC9FEHN1u5saPcL4YnoNiWcEJ7r7kzPtFj52bj8EcVtEKr",
  "key16": "5y9Qf4xG2RaLDmcWLnZDEa7S9dCLk6dbaBqc8EWXcykeozndDSJRvRYsLzGDZ5gxG6kcGHsewYxfRoSJcVysKyuT",
  "key17": "2VTsij4AswZDKZBXj9o9KeTi9q9Vu9pR2QAbu3tAWeicefwbH3NaLqXDrUFstC729upxzYMBxc6ZFGFr6uPjWi6u",
  "key18": "4Gqn2krYmk2gDsz6xZnEc96iYYmMFe3ocsZ1JoLVZbp4S5fyAx9WSVZVGjjPoKP6W2hbxCMUiHqYJrsxB2fVoT5b",
  "key19": "28RHS582W6L34opoeWcnoMo9tHepzD2P3swHiMAstLkW2dm3yAWQCAo6Gj5X7S8obgMdFyDSo2Qhvx23nvoZWzZ9",
  "key20": "2ktLsPsVPuXAFqkfJPbM99DxSH6pB4MRsowbUzf2WR8j2H21JhNbF4LmGQNYDoJt9zMGMob6f2z5nRKz4ioPyUBW",
  "key21": "5Gu9XR5MA2S9tHXrEAA1Riwc8cuSbbDFQqMkM1WGWZCyuhyBJ1iZCHdj9Ddm1GkxRBkDY7hsb6Xz7fjoazzkW7TT",
  "key22": "3yxkYhdZug4JknSdgbtMMRbotQgYWRpSYu6qvZAmqYvRWdV5n7qTExqfs3qL2nDwQmyF2whbDfbrn7L4NiuTfgd3",
  "key23": "2mYECkE5rJxi2oEiLbDYJ2papv2qBjxaCeeFdsSmsy8xZ4Yijxy3tt3V3JNnhnksM5prnMXrQ33Mqixy5gCAcrjw",
  "key24": "h2q3JE9FfYfdXn8oyGg9s9odzfHhK77ycauenZC9gpFfrsxnEmE8bdXTDp1kudJ4hUPzr5JARHoWRBvTYg7gDKr",
  "key25": "5nEffphrevsnC8Gr3L1fbdYZCGMRbvkCcxNK7DrjDczA9C26BNC62LhXb3zibh4tcU3yEe7LtoyF6HRxKc7zwxYJ",
  "key26": "5UQVWfjimjMkpcTuD218XnGsUe9ncEw62485ULCNtD7UJQoXpeSzV2LSDhTcqWsxze1EtQhhnFYJFhiyfVEpaVTk",
  "key27": "2utsRLMxdpZExiJNsBzfrMV5Rq9QJEh1APG2aZRoiaWThn5pEjBCoHPsFkGsgCeG9hYMpnL2kwbXkWda9NZQfTNa",
  "key28": "2vqVC6KxEgbiBC718MeX1E4dgBmYERWWFuF2e7j9ye5yrKhZvyDiEP35wevUEmrMK41UsAwwjxp356dVjsjP4Jg",
  "key29": "FyrFeuMoitXtnUVXz2MxY6TLA8Y7GjFcvCtbvvRE5Q3LbnJo1nWGwmsPmUHFCMnTXdicMwsHym66YhiQjCKxZry",
  "key30": "5cMttaWvGhJFCU9kcbEX6gmuRjdwHQbFZMPyp6XQ1ETeskS2q6cweaBMWZ7Db6iLNm2iXUyS5krTAuGt1WcYTqdU",
  "key31": "5JQH8Dx4yNyFzE7PsfW3jao7n6JYC47oMDqgiNqLkJ3xS6FLyNwCZJwjTdxd9rh2CT7eVvAdUf66LsRQK9KsVbih",
  "key32": "5RCaRZETC6MLiRmWxHakdr96inWgNnsW3ZyG9qgqUGSuWWXNaRFPJSxGNsPhr3EHgrgRsrtZXMrVqz1xe6AzS3iM"
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
