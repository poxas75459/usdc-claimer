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
    "3Y9GaHNR9jaWmnpz3ELq3NYFizuugJ7QpbtCjN3GgKTYHywuDdinr7GrmeHDJRZRJNuZ5XeHSGi4T3aMgg2SGWSW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8oK1jinffGhcfQ4ETgifXJdorkK4xv8mqU6DuDJETLhwi1iiS2pULxbsJShV5wUtj7LhX44GPqAkqu2XmgpRM4j",
  "key1": "3KdKA6aPTbNdnNf571rBfVMjJJweo4zf5tJ81reQohE4LMn33E4v1B4VbP7xTJ8tng61kMPMCRzR6WitEv1Skt5X",
  "key2": "58j7LDgemthoVR6RUihZZd8K83acCp1ERueJRA4LD3Wyxfeo9dHTCVUKnc2UoJ1nNuTRgc1XKT6wbCgLB4XsNH4j",
  "key3": "3opTDSYhHyqinLYRK3NcifNyMrQ9g74jjZXzcvFutLiDfqexxnd6yxd2J9rcpmWGz7Ka2aGsFpQkLEnZWDRdrrJS",
  "key4": "xtLtRtKHDEwEXJtH6R5dpC3628SpBPYTkE66x4GBx4HAJmfVsxSEX4BMtpBjBLoBj1BNbC6sd2aia3sVJXKmJDd",
  "key5": "3nZCPmzeDiiNQVukZdKYjDPZXBNSQuUq6L2FFWSe8scNYM4th7RPsnc9xLzTpvqKfbqNWAEmJ4qwQaYTwwRcDtYt",
  "key6": "2z9WbyeDyAgRJHtvS8XG49qkXmUCD9UXw4GzSJUDLaXBWEwZqy6PhicYtpWGC6N8ZFxzR87ibFHf983P88qtM8d7",
  "key7": "3cgwnCeqrV5RcUjRxj3X7iiKLTLhrCSj1XmTHvvRvShM6HqgDqpEzmheEyyEPhCez7sQELZRogUnyqPh3NNjdK6m",
  "key8": "3D2BGoeX2tkshM5LKqCor3V7oJTSyNELP2DZUqVBdhZboe8wKgBzeGSiA5pfWFAgKmfavMiH4oWSF7JLiZqDWrMX",
  "key9": "bk7GZnveP1gkHVy2mYpQkGk9g1RxH8Mer2KoXfwpahbQdNcN2ZGbyLz5G5crcgih1Zv3PGG1G79uAU5CjtQwCZ8",
  "key10": "2HHkdYyhqUBL4EY2ah3u1F8mgCUyMqAaFZ7dhrtGwv4dPs57pRn3qRyQVJRjp4u1eNZAGQdCPkvLZepNJeLYefhc",
  "key11": "4uR6b5s1UAuSFBffMZRjshD1RPFcnsho3emhQAFVBPQxXriwfmVaeKFbE88igSaJLBhpzL2Urd2kSvfYhctc8eUe",
  "key12": "61rospwKckboRC6jXS4hiCN5FJLCsHMPPaNWKKij41yqZdqobp6kEpz4gswZvzJHEgJZJnw9z4gRTkMjKLtsJn4P",
  "key13": "4jFFmRbFuzAZ76iSdz7XQBCUu3qhDuvnQ1vPGc41DSLVErwEsK8GwRDSufHDkYby76U9zcHmHK3TtkFdrSSfL3U4",
  "key14": "4LP3N59BGEttDMGjQXvs9nnXgS9gmZJ1AjJLBEFvx2efoegcPhBEf19MMStbA446jcgX82gSJf65fd4P45Fm49kb",
  "key15": "4ZQxq37d4uWbqp6W2AJu8H9J5tjHa3DRSFKdxyVpkmPf12vXMbWYWFv5kR3DCLAo5UKHtXjFfwwvu1Bw9eEmNHYs",
  "key16": "3ho4c8ifq9puh7LdRovnA3AGNPzqNb55jrXPRs99kyVM9yv2QaiD4NQEBfFKdi7Qu93Kr63JHz7mKQyhtTUZAFzr",
  "key17": "2MQVouyt5uzKh78gf2n8LHPDD74Nfi8ATJJbkv6JBQEUwo9A8ijbhsktLZETNZtwe5NFvXQeH3VN1CCcnrqwmQQv",
  "key18": "4Mteq8JDmdy7vRV5SzCSY72exoB8Y5oc8wEXHKW1x2FYbSD2EwNTD7GDetmkcpwwVQxmRs6Xaa6eHD3EmBhsFTEL",
  "key19": "49QbiY1ib9zHMRkCFMEYAYorUfiKkaPMFgG8EonfQZtk6aUE8y7JLM4HpCi6NJ5jTkBdcdZe3otqhWjvKD7CdFZU",
  "key20": "55DChYeb3TyXjSDmykJR1hxyfVLSKSteUA9qmR6GB24nqz8jTdGiHfGsB3t73uPwTwBaaNdQBbwtJi1QAN3zwVFT",
  "key21": "4ffV6XnHkh42mNTAYPwppWMJg7zTnogrLPHdNW4iXPmBGn9S5iPmMS6RTV2FZ86oMnaXaJYoJXWFuEpjJvWQ7uZL",
  "key22": "3L7Sk7i8QBYKXrXWDGK7tQB1a6kwpKrCK4LhctGaPzh594R9BpNjuDBr2aa9m4tQErhgaf9bPYwt7Vvmyo3arPcg",
  "key23": "3j1jCmpD3BC9A6Lgbpy5hh2wNzjLiqBQPJgHBz3fGSzRHoijfrXQJxiuyQCuEL4ahq96hwj3Hj8LgfxdB1Fw9xyd",
  "key24": "52uJiZHhjmn7obw9pBFzpPw9sNm4vKS2PzKeh6CSoPkpZFGxJCU47fCLurTKCJo1FeaQeqWSHLX4pe5mmiVCX9r9",
  "key25": "29HLix7aEDb2fC7nMuPU7ehh2V2r5hXBGuESsLDQxt4bBccmduv7VNQf4uKTqrz8c95oUNWMm7NXgAbHrJEemPks",
  "key26": "3rRfFNRBzApHFgZaqWBKS4X1gzrqfYMXNa8sSVicNGYz6dVRXtYst7pZANoHEF4SSxxzGPG1xcbCeZcmA5ut6eif",
  "key27": "4cJc1jV2i3sLxaG8SFw7h2KH5cSa4zShieGhhhUhGbSJMeZBh5gnnxwnavnQRxZ53GkhsEMP5etTQGkcpZ83sWGG",
  "key28": "7r2mb9d1KyWErp2A2Jbn4WYy3TrxaAtFc5FkcWdy2i3cXNozvdgrzFwRJzt6UFr6k3rDZSxPhMTgTz21SFFaggo",
  "key29": "5JW8bEzZmL8cuNNVbj3hpnqDchH57bVEoZxJ1agFNWum3WG3Wwdt4nbvoLaCEgj7uE6GTy3CvRkvzZuFLrQ8J5FL",
  "key30": "5md9Dw6bVSFiTJ4x1K8LNQJ3skuK6a7UNgdUsv3pPoDS4mzqKt2FKTcnuVaaKbNJvJMGZzMrW52e6ciSBd4Lapku",
  "key31": "5DCu4XwXh7YcNhHXTEejAU1rkXZatWcG1rUyc5w7NJG3uzyyn7EKDGR1abLbf7gSXJUZQfU7wgNedrb7AgAkUGuE",
  "key32": "4Nr8HdFQcqQJGuP1ZW3yxmdgtASzsXR8YiEdr2HkzhXw1xYfiou55RGjcXvQn5g2KPtXNJQzKHzQY9ppApWJqbJP",
  "key33": "15dxiXcTWh6jMa17f14mBePd9gio5Chro1rM3YH1qVE9D1pdCyrH61ueGLBkduotXmNXJ7k4CeYCvYWigvEHXYr",
  "key34": "5REMd1Grz33RADWfH1dCoCDS2ZCekiPVvStq7GbTzs1Kp3Q1Wd3tnjwa8DN1ByV9XTTkD7fCisfYuJXxVVjgNvgi",
  "key35": "4L5vqreVuwSE2gzw8YHm4SLNxwCSPcvVKaaFf9iX8jW7PCMEd1SUJ3F2FdaHtXswGhCqW735FS5VzY64UP928iWz",
  "key36": "FpGMrEfz9YJQEoj6LWnmWVxFJyncQg2zQxyGv2b1buzSDyeDUGcDEARcj4WQ8JXz3c9uF1e3tyYQKu29XCNb5JL",
  "key37": "2J92w38WvyzfXqhucvXyfUzYgFZTE5V2ScD4SuesnR7ad8vnWPFHG1ZfipK9wwJddHjmX9eFD9gQtzRBo2C1Kyey",
  "key38": "5R2xhgh2z6dfthmL4dZtJfQa2zgWiHZ26c8GkUje3J4fYcGq7TDA67rsCPDgpSXrwW3s9vh5Ri55vEuNNzez1Bg"
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
