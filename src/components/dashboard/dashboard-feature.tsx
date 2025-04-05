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
    "5HquVtyipMVqA6JEZeuTjAKrUC8FCQXr9rSoaZGcXituUT1gbvx4SALTQYzMxk6C7Jexig6sFdgCPTK5JzfAAdAU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QP5yDY86kKnE1eUQQgrp2PkKMqCr1eUGMt2tbMJtPVNQVu3bsaUC2aZKTifUpB4YL8YXPuF7v2mptjZRru1MXEj",
  "key1": "3VCzxGhPcaLb4TqSbeMnxLoFm5AUfc97SLZXGj8oE4kxYDHE8s6BWPjpWVDUKKZfaphSqBoP1jERNXdv8Ejg1Ztv",
  "key2": "4LBuePm18tco5yZBhoxywNEAhtALPSAw5CnvyHJLxUUQzeeFYozjMVuD6srpcycQneNb9Ap7EQy13EzB1rbFCe8S",
  "key3": "3R6KkKHkNutgpCM2AmxGc5qSsJAx9u823Hyrop4XU8ZtkaKdH5Q7zfGNnmNTCLfPSwyYWjdQBnx8FvguFbcd5bdd",
  "key4": "4Mz7LNNybNC7gufDA6RpE4PEqqkqsXTFZLMqivF3KB7SaU9Rod2MydPLZYYTrvGRjo4x8w9HXB3evB3hGbtWZQ2P",
  "key5": "5ibr8Zx6wqdpprgn8zZ2N9jzqimTtSzx9GBm5ZUF2UY55voakrUfgRR4oDqUpxtc2hEfbcmU3ob7YSe6cK6d6aPP",
  "key6": "5LCvsfW2xKAPf8gW3sbVeuCM932fuuBzRDFUWL9JH5k2Q7YEPoHde6SUjnGGyoqtPowyXYBxDPtEEARVyRzpECgs",
  "key7": "EbYu7KMXaA2nLqknKsVm2FAe5xGzSh6z5KJtYqBeATFR5xCG1NebpSn51v5fVXnT7tAmcWBHMN9WN6cAPqMeWyH",
  "key8": "zgU7bAm8WEm51PfrAo84YKkBeRx8rWn5ABYyD9w2mYkpJLbg8XdcHiiN9iHpJdGRA8xCwYvSgWqdyq4aQ8YvELo",
  "key9": "s2W6RiDdPhoW9WzD7Avu56iRZXtFiFYupEh77zvs9vX1zUiEdKukr7bCu6LFq4W9SnmakQsJ1MiMwcHbFZS22yn",
  "key10": "38q9D1qx21f3cfja1JjQR3wKCboZutYiwZSrBoGREC9qXgNzvei26xUZ9pQDwBW9ehMxA7pudqofiBAorbymruMp",
  "key11": "5qmZNSHz5wFssATqzyaooPykEGtLi8AmKs443MNUTDLkWViJhp2Hz4xjffsFo9apJH6GntpH9NFA6AqWPbPxXJTE",
  "key12": "4G4xD2ZrtzRWRPCy6zW3KYgqP4iQ38BYEzdEEJMC6mntqKG5DAaY4hUAyBHivp4jPTyDgY6Cr7E7fCG2y2nKqzs6",
  "key13": "r16Qkp4gGHLA8XJ5Xy8erqJ4VradJGm7KE6ZUXgm75fFZvhY3QaQ8MvUWqxyxWgtGozj4H3J5H55EMogVmDF5T5",
  "key14": "4bUnksCUzhAfP6TyKanUAKcsWnVUESijerQYKc3bVFpdMtFgAsu2tqAJbnMy7fRqJjJvrmS6vUpjjNLvKq5jHgYA",
  "key15": "3MkHELtvTRy7uxE9r9wx9FRCPvhbWa2afvnstBiwC9BzH61veRT1FBhUDBNf6VvaHqwyG7tagyg3phBwjMf5saBQ",
  "key16": "2b24whCRP4gtRcMd52xbsVuHoFWJpeid9wDk32AN856cb1HEHypsWoRJJa4Mgw8fsGFkHjniyc4cyBNQ6BJhMexH",
  "key17": "3yhKgfvKL45isNjeM73vtby8dY88Jxy3vS2HAQvN8JZFBJ6ikSsqceWNVsJbdJZvDg6rNMj8e9iXjvEYAgnWk8T6",
  "key18": "4MysRQtZiR7Yw8y4iwSjZtLrCc62W4MrvuuKEpEzvrNu8aUbunvtdrafuHEFC6HNaEv5Vt2xabzSnz6bAqZqnkcf",
  "key19": "27Gx4e7g56a1FcBwwxQHyzgkynaAjVZkEjBWEg2s3bbNUcrYfmbr5ewEpziVjFSoichJR8aRT4he8C4anSPNroSf",
  "key20": "4LCV2ktRxbinCF6s5hWSpTzNa9hQMXHFAmtRipE6mwEVk4cBNPtzM1fqJwQhJKPfN4YRyXMJFzwd4niTBvcXudV9",
  "key21": "2zpdDfam8VF7oYKQ4KeoTdiyoaEr8heYiNbP8fDPbum16FdSpm71UFB5bvDDjCRZsyygNR4FepnynPaPiaVFxJhb",
  "key22": "33VqQqiFHHi3znEPwVFXzFwWLtZQgj3QxHMoVSpP2kQN6m3JGx4DfCPHsVaspzPDNqbVVs9xZXh5KizQZet2hs4b",
  "key23": "67mp6yTWco8PpDezo3CprSAERjYL9NKayniR5gdZWt6L3GTpgNe5MK6498PdtCzMAm8xNGZ3xk4am27KYCMobcQi",
  "key24": "4CLYsPCmoExDXwmm2b93S5rTMGnQJHqit9dMjcBgFBJ12ujZJEhajEkrh5dKvJxm7Gpx3QhFNJ88WsEZR9gqqzFe",
  "key25": "5f94HBHce8wroa932sbasWMxqL9H34wxKkDbAQjYKg96CPhFsSsxjFyzsdVqt6H13zU53vUH4tmqZBiUsbKCkBeU",
  "key26": "vQ6DuUEUgMAWZ4o4v73RYCMNPJnAazrwwztx9Pj83VWxbJxwmXpd6hwDdSGh29Ud4uye4KntUVSUqJteRYEAHKx",
  "key27": "5GVHTwAcK6MMxAP9Zufc3cmFVfJJDfZFfGJLZw3ARc58LCZMV1xcNQe6odtFkhGgJyRHhLH5nwKyiV2PJNvbp16u",
  "key28": "56uVpH7uEaxTxmj9fw9R6fRABEgdGm3grH3Xf2urQxEsQRxm74s9ND15ZSBNJoPZxUxo9TUniu7XNbDqXRyedEbg",
  "key29": "2Dv1r8npb5ZfGCtV1FKucXYNWKXdgTQGGwxZPyyZEqVuwFZxuNMXH16Z6J7PTuEoTGmtMpUKHZ4f1ESjxYSwPjeZ",
  "key30": "5Yo5ymvmVku26KPqP3LdU3eNAeSZizF9d8oFVGBWqpan1NDZdQS91UoqdqA52vFBLjwy4gcymWuR22STje3QR3Kg",
  "key31": "3h4TykGJSfqbts4zHakT5fFfhiHSuTD7qL93oEUVMLPqpKMRdo8uMan8R1HHyEKwgBjrKzLq9ccYPcoVtCYHg7VK",
  "key32": "4GvtmXqGTryZc2q99ASJVgYRxiDB4UiX4sEpuvea6XRhyHnAFJQtqcyRtKFKqGst4jfp8Fm6tgXupt2nAeywBkpT",
  "key33": "qFfvEAcb95Y4RJGVhHTeFW7eM2h4cEnBSDmtiTTfj5CG2pJyVzCWGLwKn3c8NJDuXugoSprHdnBMwDtGtcKAzQB",
  "key34": "47a7yCU6g3p38BmnTvqDuvH5xbvyhSWhPUmkuXqcg5kufC9ToHFbcYCXDdWuCuY4oZhDy1dbUbyvBdUnSwRdY4X7",
  "key35": "XKfp3ri2aNRuxbF5obWZjs4FHPb6gWjtKcwZw2zgNC1wkemxCJQFH9iTBxqXUzrdaY8RsHpYZqLWxNXVQMNc3qF",
  "key36": "4Ar6Wbk4wCnNnW4znQNb9czCnAthCPXPnSys6s124dbqu8zcoehRVxALTAgAmsmdfmuihSGNnWo2ENHLMMxmEmzt",
  "key37": "2PjYWcMS9whsRY1edajzytDtswqSr9PkVQFpL6aDU2Fak3kn5jDeLaRf2b5ohpx49rXyzZE43HdY6xjjsFfj2X1Q",
  "key38": "4HQeuHqdY5HHi8X8yyiGztbWYyL7Z921mwDFvvtdYK5r5RNyEp5k4nv4vJ8nRTmFt4aDiPp4woNhdtAsrUZq6xMd",
  "key39": "3cbM9mM5zUwyMAeHb7hRgAvh8T2c6LJX8vfszmngyeZzs9m5DRr2KimnyPWUBxPXiRy2a7mLxRGdr3xh6dVTagW9",
  "key40": "2wsnTDaso9RJs8BveKkk243FY3LN8KLS6nm1wSqUpYY1jQqCtp6i29fsHHtq76XoG9MKycMstv6tZ3pm5inRdXVy",
  "key41": "3XJTXWBXULcD6UgpvUys7NEhWrDbV2ngewC2VL458AnWqUykBjCAeYyPcBEfZDhHgahUwLZka96un2RhPKsmFnSY",
  "key42": "GoQZYhskEDjLLXwgp6tQQ1de3PNXLmrokibMUeWDzq1JmwjnFfo8uRGXCK6eQw3rkSQhoUYdEArMpMiD7AG3rDk",
  "key43": "tzUupiGuNnCaVvZizRdGEMWjcr4WYAXSR46uX2mGSg9vTpCPbvqWmqmqSh1wqLZaFRz2QbyX56aKycbE1vLnGH4",
  "key44": "4RsXzrRJ7VEktnApQEx2QK3pk7DaY5Xo5SWMmpoAnKcteKiaHcv2khmC3AiTk9XQ1FvDygTYUvsCXKu831DUdQmE",
  "key45": "xGTxRt9hFS3aUFN2k8GR8CmUyYmzVU8fKPLkhdU5BYzEpFtSHtX4CKzdjk2kKKEkCPveQ7YkyVbE1fQX5cKeKzE",
  "key46": "4dvEDoCNzUtvPBbAUC8yMvSNVZtXznUYWiyVi6fKRzHjvZHbQ39kiz1JRexACNnpigounaXGNxgxBdY7Ar3poxht",
  "key47": "62UgAqEbEQpDwmF3f8Ju2DemGobo45Rw5hRvb296azVykxWXmiLfnZn5bTzfjuTqPB1qAjh6tzc764vuReHgUGnd",
  "key48": "45bDuMLbS3XtZmjbAtTZktBuV5ahm2PsjpHa9CJUxtbCMCK2tUUu8jBrvEEutNMvQSxhhiJrdQHDP9usNPHHf718",
  "key49": "28pNVFBHzHNhE8acQckFz9d1DLytCkh2B6xSYPYusm7wo4DGwkMZwqKk3MFWZdQepg2tsQ9zUR1uT7pbfUcXAhLD"
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
