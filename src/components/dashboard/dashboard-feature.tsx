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
    "BSA2Pf7B3rQwpgzMRAsrDvkRyERcEJEqJFB93f44si3bgZSK9sHGUjgE81RVZihacL8zrneAr9zpvM4jC6PbcLW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24bNLHrm9eCLBqSDYJ7GgyLXm7nbtp7hZmB7KBr8Qe6UgyUamvt6YiLePbRqMZXu3oiL1Uvwbh2C4cZMePQhbx63",
  "key1": "4fuiSSPFdLooyxknGwoWZtH9cWh2PPsnxDMKm147jsnS2uC59kJaR5n65PHJV4Wrn1B8ga2KJzYsqRmw6mMpts1f",
  "key2": "LhS4NJEQ9kkgcmJmYF6cd9ruQrqkdkrbrsFcuAJ1Ui3xfqDWkgYJGZtu69gYPU4t5gexuCBGcM7UbQmNvxHb14W",
  "key3": "34LyUuiDz37gEDH5V18W9qktpviXjDtZe8Y7vCVhoCRhwoRQhaifcUbUmrpNGK4hKjcExDjHox3bgxHgTRabf3iG",
  "key4": "BY1kZKweeAZDPyPsbd9k4tXrb154ftj6DoTZhyEYosCSB8gitGkAFYkHwdiE1WcJQemTtmQgLczbgyHGwm21dvd",
  "key5": "4K9zide1ZWtMykaZKRLMTTNgPBtp3JTVP9Wtus6foD3qKqBkCbrUqeStp9yYCBoxt1tKe8myXYPeSjbBPNEcw9HU",
  "key6": "26oybTDTY25jEpUtxVJPr65eg4HsxcjtWQA4JCDeVZUaDywrox2xjmztJURpzCSnjfi6mE8jTusYj6ccyptjqX5C",
  "key7": "24n2ErKTjDNRhNPpjfsgAoM6FhT2eCm97CJ9Qc7Vs7eJZKBUbaWzBUWYpunzPE9XtdeXGYetdJngYLLjb2dP4hzg",
  "key8": "eXWBtqJmQC3CtcpjAsi3wcUwBcxjEndw1wtJvpJ7WbPv6Xf1g7H3vSVeCAnfdXDbBtR8mXxJ2WJZKJ3ZYz7TU5m",
  "key9": "3VGAj2xejRdeEU3DbviQQnQitUEF5kwgwZeYarbEDqLhNdMYyFrWL4VdhfLCmQL1URyxiAM8ZuTzox39QQrXiw9r",
  "key10": "5Si4BDJ3fDjzCy8NCNfMfy1DKaNmgrf5Agzoq3nQqCxDaeJAh1zTUFigtavVo4nnNaXZoeKJ67gPWCMoKgTQVFDb",
  "key11": "3XyUmi5gwnRJ2U7ywxo9dTHpEAoKvWWiEyFy4XW9uVf1YQdNn4mxzJfXr9mJWdTSctFHVjsjjKdi6km1JRFkbJFT",
  "key12": "5AEknkrGYsFtCTJqJffgyQY7vVu9FSGR3haxDJKqyH4nDW271HttDct2vGEktF4q321DLLChX2s7saGYfLGu9MMH",
  "key13": "5z7jMSVM2ePJtTo2AxXBywcLKeSrqxk4jiRspbzHMK6yV1z36GvQ75dAvriqWuXHC1wKswqsjoptYmwhFEnqkXEQ",
  "key14": "CQ499iqDZu4n6v4XDZ4qM3bBH5kpMXiuexZFK5T4A92S8i1tRA9sBSNqsAswoiD4rB8shqu4CGuZiwBkvcrFuNP",
  "key15": "5h5Gxkb2aqyyPkdusWNuY16k7LFHew8YA18EwuZzQQ3Q6UaqJmH94RGgiwvpYhYWof6QGfeU9kFZqeUSsV1qFi8G",
  "key16": "4qV7sc8sZezGiZFJLKpyYk6JteJ33pt5BwFU1bswMohrrvNKYAqdxHYqL8tJu8e3qq8LUUB24fAM4e9riLLeddU1",
  "key17": "27CxUS2RiwRZ4NXh1X6bNoirqAYnwPNK9phPVZHM6tZ4Rs1ddnGuXbMxEMoDWWzZwFnZ1Zn7BSsownNDYGJeVhVe",
  "key18": "4Jmkvdvcr12gccBCppXxnWkcwPATykfj81kEEJrWQaD2P7W1fKhdsgobzp3EKmDUpXn6CLUQomp4iX8LquNuTjtT",
  "key19": "5YG4dXzXRMMwELnGLHkEFm3rdPRZCGEN8ZUkdAqYKwWgbnkzSEfbDb1H1jC3LKXHNvf1fTDP9urHe1d6RrYCCvfq",
  "key20": "54ooBKAvHtm4PLEqSBJkCURFTGh6K5m7mNKCD9YC6HaHLPdj8P4naWJioVEtbAL38GTsf5SE9aoeVxErkLpxRVk6",
  "key21": "2gAx9awUAxVRB7q1v6ARt7Wi52XWoYx8tLq65iRPuijzBWuQFJsFmKqREMcagyQMMVmme2VdwepkwoAooke7JEyF",
  "key22": "26p569dybRJ8N25gwWTu5q1xHouvomN9Yk6tn8ne9UiFMKNLn8H4DoXKX9zsbcAphq7uYGBbMSZQzuk8Mmckmvkn",
  "key23": "4K4qEQhKs7TUy5Y9Q6H72M62qTruhB433PgphWbWs7joPuNA4ZyeQrr9JMosEZochr7SRGKoGw9Ne96daDTmyXdT",
  "key24": "pXANnRjmTcutwcPwQESbYXoX35wRtYs3pE3jT2gPEt73nkVn3A83z5y3Lhbhmogv3kqS1AMipuKj7663bweQFrC",
  "key25": "5AFyKXK8YzJy17igqHR66YZ5UT111JktGQiwUCtd4n6GZQyd7Wm8AULXmCS1oqtnMDvonF5qLnRQ42xNfVZ1pziS",
  "key26": "5ME4x9poczythbAugZRMqQivEHPooZnR3E9HN5x5r8ycKQaQL5zVBxvf4WgWwSegFqPBHkuW7ChU4C1EFUfkP5wV",
  "key27": "5doXeX2Jzn8Q6m3WsXaR8zj3HdMeMQ8uvXmCuxKQasAW4tnn6q2s9KDB3SZCzNQcTtvrZbs9TSxByeXNXU4CJmHN",
  "key28": "3ey1eB31uzD7v4Pi7JYZqFZ2RSdBxqy9YohdUbwPfcHnv5nXSK1eNrKuePqnKFBEj6iqjNr9mxi7CHEGgj2qqgqM",
  "key29": "38HUfRPPsifDpDh3F65r1GfVqw4ZghDLNxMaUdaBXSASpxAbZec3RabJsKb1gn8VqHHT4FSYHh7akFRm8it4TwzP",
  "key30": "MYdE24JeXkdkHieYEQTLUTMajU1Xy7YZfg9icRgU28zHgiZsW7C2J5rkWibnCEsteTPsrWz88LmfGad7iqMyDp7",
  "key31": "5r8HbELHnAoL5yNTXR5KA4gwduhwRP9S3mhF5LgpVDv5ZQugyBhjiJBxRwRx5euE11RzhZrx53jef1Goi6j7eDpM",
  "key32": "4NXcmiWZyr7w2vwYHbYb6ej1wKPdR6hs68BhHDTSqEMGDEn8wusyX7Z48EaRB3DyLiS9BXD5siKiasbowsja6bqP",
  "key33": "517ABHcVZMqEYHcLyeqiWdU2f49Xmobg7tRcG6h1ByKFbLrzoFGxQmBJtXyQR3qTLRSD8HLWbqVxPXUuv8dTHH1h",
  "key34": "4fagGLRazBJCJjkapcZ4W3J2ycX6cKGB7szotedvcVejTN2w61TAACv27sjkNhqu7BPSHNdV6n76HJQ3mra3DYtC",
  "key35": "3mYfTZfjyhXPn8jPAUAN4sSgheh8dPRZPe992uGWNFN8JZVxFFnWEHTbLJA9MWpN2M24JEi3PMhxM46EmHpNijhg",
  "key36": "3T263in8x6g8uJAWVkzB2oUjAq4WFVdhCcXtwkHWvC8SqQX6cXJX4rCMW7waQzvFFTSHBnH4dn4ZpiVfssYkcts8",
  "key37": "bPH5v7rAeQdJj5S6sYGf5xvaY4Gi8Ag8gDwadN7vsB9fZ2AuKAFfEsGef7QL8hNJXt4dJySkTXsdKDrDYauFwnk",
  "key38": "MqjfUex8D4Yv36jHxpxQfp2BhUs7ei7g22MdLke4gcoPa3P8WKpNCyGan63UTHQcWBexBrKBrvocLPJN25cGZNg",
  "key39": "3AE361JoN6WY7FyrBM9s5ri1weAsuGMPiHQbKYrFUXSXkAY9YoxuyNtDLiv7TqhundPsFWa3ogb1jihEJyhhYwrP",
  "key40": "2WxEwP3Wgx9h6oW22X6qbKz3ytzYYe8Ef1ULYuCkFUSWmEv8HYS8ocbiPw3En5vQtWJMPCbpaGy6bF31wZ1cyuSq",
  "key41": "2f8YnBFQePGa7nmBUh2en7igK18WTkfLmuRfhVFBj6ZrzEJ9EYSUK1bYCHpWRyx5RcFAYvoTZTfaxA3DFdwVV7oq",
  "key42": "5xrfGkFpFL3kHYgtEkv9pFhQZ7WKB3Nm8Y9FYaFRq2gFE7NrwFruUosqyVZtaEDQu8CjSbL2XnFrK22P4fcCykC3",
  "key43": "3taPrsa5jZUPSuhxQqv1XyhMvdNw49E7veW4Gvy8P2C8DoqApDw3wzC86tttr3RFZGyPgSGVRKM38yPnMfk9KjGU",
  "key44": "4NvSNnWo1H4d73sA21TtDX7GR3LVnoUyk9ysS7yqsQmhEoAL9at3KCHaS8sJfUnqsXJg9mtWwFYiM91GYxJ1Q91J",
  "key45": "4SPN9ZrUw1xnZNBSNGLFNWYRX3crPV9aE855zU2eViQF66Axg9d7DfB4orwmMmq8bh92bMjJxYaKuQFo9k4vbYfy",
  "key46": "5o2wHuzAyzLQoKG6XwSBBKs9M6anLM8uxuRZQiqtRcFkZCEk2PDMtdPm9cDGf8r5NiUu5wgg7mFmtGBdyXqGkqxb",
  "key47": "CupRN5aJ89VxVJkpwtR3m7xsnfqpphAZiCdpTiveQ678S5g3pc5Je3UMNpJBCmAmapwk7oXShsVcNAJPdvdWbZb",
  "key48": "5vn5yj9BxjTMTcHEgMnNRf6VgzgneBwGDnF1C9RMAposT5ANCHS2jdBLkB8spJQCE52t167EW9hbP96HjE7JtJ5R"
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
