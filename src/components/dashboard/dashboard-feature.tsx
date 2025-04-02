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
    "Ut2697zdBxhgg2Y2v76nuC1RnxAF8axCuSvsYuJV4ZNxoU9AKDFsp9sp1NTvYAWBasbmqexVLLsQypFxtT4reuH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PHG5cW41TuUyu8C8ynYtc898G5xrvrYAYGnhYGYpbcma8zZtSvK8r4yikkPFgJx8va8X94vEXuUW7Po1rFwhqFq",
  "key1": "3981aeEeXqAc9gAFDwnMbW6CcTtNPAEVj7JY4pha1AqapNgzct2oq7FGNHEvZ1dhWd7gAkXhwtp58bumFmXzzMD3",
  "key2": "5dVJkPssYZGKEx8KjVQj4NLtcaE7quXZ8G94F5mwwkx6xjtbd2oz3DQzTyhBzUVdBtD4uRBTfCmDKvwqHjsQ1kLc",
  "key3": "4vEERWfSR441eXnS1XyjQVD4DYtMWg7Fe5DRzjEdEjEGbXi6w5BvJ8q9cvfqprcgZmdzKTrc7JkdeA2rC1sa8y96",
  "key4": "55jEzCFkxeJDwYS49rhhqtbJV5u8BGX6aEh1LYPYTVBPJyaWCT4y2auEgLBpnvX9HDjr9ipYy2Wpk35ZEp7DsSgq",
  "key5": "4JJvRBRRJvcK8QVddMsw3XbYrtHQP6g3bYrhCvxgXTmywe7472oWFXEWdRiM4EPZZVVWNZVB3DQeA2v6z4xbSt37",
  "key6": "3vyXGwvTs8Q5jbwHsqsBCfYfBqofrco4RNui8Zm9ronVMLK7j139RGc6yhU4odNXa8KnzracyNtFymA6oCe3X1oM",
  "key7": "5ak9YKoYL6cKWRjrvrrzDypnmqZ4WiLU5GiiNWBMrTBJJq5pw1mDH5PSNJZhcG9mpLunNVNeUDfUpQHjUaShu9TQ",
  "key8": "3KD9763LAXh2uSUN5bAPzwSnthD7dVFkdTehUq7N5tj3Bpd45xerpuoxvEqJVefyep3ZXjRizW1qpGSbLZfLf8GG",
  "key9": "58Buc2FtnphdfrVh9eUjqhGqNN6hXru3EzN44RQ1xYA6ntmentUuPom76aszYH8zxhtJRdVJ5KR2Cmg9XzW5DUjo",
  "key10": "3vYh7Ym9RhrnQViV4y47HTfQ1BnjaW8HmdgQnioi9wvsLxkwFkB8CV59pKtAp62b6eQcHdV4TE46UnkRHtCFSmnC",
  "key11": "5EP6KbvBabL1zXjU9cyRrmLmRQYn1GwWd2P2F1jhqKv2uDnKqemNSz5RB5gFCTDkFewp43zvFM6S8x9m7d2stX2A",
  "key12": "gLnpRKbgxHzAHzYcGuXWwsFsTL8gpZC4pgt5f2qKjRj47JATb7bBbLHa31JQaNcbUWFmjSnLgwiUVvY7M53Fuw4",
  "key13": "5AQ63PJTTVyVB8GSA35h5waMMDQjoKRMbbSdzfkBeRFbjdL1gACi6W9Pj3dEGStCtg7GrtgfJaooJTTdszf4rdcY",
  "key14": "5PU5iCv9C3D8UmGD7rnLAKjrJvpDSku4oecf4T2oT1b2r7ei88gv5pZzK46MFR3rDVVL3reBgHBQoxwfbNqezcys",
  "key15": "4CrQ7ststmY6NRmrtw4tnT3C5s8XHi9j7vBjYchHhNxoSHwj9uH3HNoEFjtsbC9AMgCB9W4Y5ih5kmf6G2Rhi6fu",
  "key16": "5LwoUN97LXoJPQNWjeu1M5MomZKVK9YCKDpFgBkGPXumqJW7UYs1PcQbaiGfSqzdU8prASRzmbBExNzucXx1inp4",
  "key17": "5bLQTHq4oKHLrsxUB4WmG86cbaK9eSAGXJ6fgPjojknbf81hzk2dMXjSAaqHNrQtKW5ptixzPjLgdkzhKpCVpysh",
  "key18": "55pUaEABqyGEi14K3B7yjBL2meazK5LETxDJEUceLE4nwHdsLoG7Nx96rDB8FW751m3CLd8mBqRM4Dn3Fc65xG4D",
  "key19": "3d67VxQKnrCpZsM7XibRUNwMi8cWDZGjbxzFGDKxVoCiZ4waFwno8WbH6pRSgqCjg5H3stD59j5m2g3hXcJumt3H",
  "key20": "4vDxn5SjFtF7bnJ1Wtw39wRd4hTJ8D1t8FejSLnP8k5MHNSCuziHFf9E6XQWcBeostwndFx9phNyW7puzVEp25mE",
  "key21": "281PZiyHDepEBgvfNDfJ6EyMJ8Uz7rhfSoAJwwXvL2DjxhvBaVeNDqgLV6VYBNFXqmgyZAXnFvCMKRzrQmyQXJvW",
  "key22": "2Q3NdVR7aBW5wDVJt3u4bKTf1NYddSk9Gymkzdvoikvtuhszg7WrupDMYVrznx6XkspR3e8MmY15NfTkb6J5Etp4",
  "key23": "3Bxby7T2FKeFwQKU48yoS2SwyNdb1bpmLryYVc7uNuoN32REpYsPeweMQW2YgbSQFuceqMY9kyVUvDjegwMbwhf9",
  "key24": "3hmpaCFMSBTfsqKyyJR9HifV5SirjPzo4Yqmfgh9e6mgzN3tejYBrJ75hg6tXZuBV7o2UzBDzTy5h3zPo7pHJGto",
  "key25": "2MzydPaTDDe6ED9wvRmF7BEjPNUA7NDmchm9bNoSAHMdrzisnrmrN7eT3iSvfbdYdrPkdm82ojAXnk3V9F5XkDbv",
  "key26": "3787o9XJYmzv9txFCPXPWCegSdsgmh9UXGjvwG2ZhsbNitCFygeiXWp7H6FXXmsQHYvVZRvybboAatvwNa7QNELi",
  "key27": "2T8EmmUUuuYhUQxehTYCVwdZvHF2CvY6yRAsGfskXpGLgj8iroAwoiyXdH9XDp8gp9vizFsp82hS5R4Xi7wmT2BY",
  "key28": "575uo2BaBN4UG98XPf7A3KntVs6SxxE4n614azNfQ5PcrUdEsDgksRw4sVeinZHwCbLfewiLTUceWNo2jT93mU5",
  "key29": "5aDyUSHRzLquoqPShCTfBUrbB1cB95hbcXNJsiDQ8N7kWxDTEoWDc3BZgn3tqHhSe53dJmtmuzD7rvvrVUJpz9B2",
  "key30": "5GcwDo2PnMSwGgYUARvGcA7oWmrqv6jt3eaK4L64XiwRsBTdo4Ue5y8yccnMsPCH4C2TKwJznQHsKWeUrkgmdKgk",
  "key31": "yR5ZEJSjYHx64Zfq3xmVLiZ6Gnt1NNttpAXSbqFX83MVuzNWFjYzsCmaaJc587pnBf44shD5rCkGoGQTLDVeuto",
  "key32": "52JxbwT7MzJi6zxj1QQzr6RLY1rmkukmFnyGs9GB1tH4E5wFSwdNTsQEUs7QrmuAngY18Hufrb7WQTWznDn1LDHN",
  "key33": "2hV58X4i7YG39RJQi5D4xEfgxb7SECkN7YcfhAsqe5oVz5F8M47YtRVS3dHRhY612NL9LjDpJexzTkjDQcAS9uQQ",
  "key34": "3Uh5QcFpGNeRLAh2YTAvguFQQfQbvMXbEcgQsXWPG7Bdc24E14noYLg6rZrYSGnM8wTjtziWe5f4BeS6pHFbDvzV",
  "key35": "3fvEVPMqCPWyUjxAUwei69aEaP3bvDPKLZo9MsBiaYtZji8SHTd3XZ6RVqS16BYfh6Q5gbMEmLRioitBfAc1Phf8",
  "key36": "1CB236favjYnKY2ynuafBnzx1HApqHpchU3mYTFzFwjQg7fZrbeXGLk5CDe8fVWKqnioS435BS1oY7pLkUtHYdM",
  "key37": "5so8WkGLeWPa2inM3Uwv2ithhrVV9R3tC8zxgSX79opphRzPqr4PR4Z2hXfbcKwVZkxNadN9ZYDdLNdp4omV63eA",
  "key38": "2n1uHVDfnVAZQp1EX2hqCKN4wHqkbagQgpZhSdHQqXFVxbQwEiMs5Xfmwjmjemhixny2cv1NXew4aRQrZ6P3uUUY",
  "key39": "65vEhdZdkJhyQejDYLJ2U1JUbECn6qi6sNUF8Q2Za93abg9cFRZCuLZeqZPXcF5zuuNxG4HTTQAAMsevYnkJZDWA",
  "key40": "24HanC8mpLJAk7R4szWH8rk32euD9r945pMeEcwpFDzMBMJ9WnzksDzsyvCtNNhMoK6gxX5C9K6KjDCxk7QHgpfP",
  "key41": "2AWXHghiNRaDptiQvKVh4QyD2xkPD7nq5dnJNVj3YNfVCVisCMTHckRxv6bguPBcQByeUguVgkAY7ehgcHTiiqWx",
  "key42": "5zv8qVGQN56v3fdiVkKXeiP2t7UCVrSDrvKwQzzCYDAaAst3mTKXVmF397VwqqBXLNYBGRv7BUUsGN39TfQu5MrK",
  "key43": "5w3y81XTULdXFNpTiKJzMdqdPwHRXhScL77R8AxuiyFoxmZVtgJ1njR6zj9xuLTSj65EmwfRbdhJvF3wJ5B7iYpF",
  "key44": "3vHUu2e2zCqMqg4w4MQ8i5zp3iBTHuBdHXw7XzbNLtSjKuvPmXd4aXj7YJL6z1FDgHpzMDZ6X2cfc89R3tVaxAbL",
  "key45": "5kyufXFAtESQVcP1EJpPtZpUGXX5MuKTJDsLHeMnXmsRF6koFtXmHPhFBx6qWUckVMBTeQZHtR3ZdoejTdxSrKQS",
  "key46": "2YWH59fvx5hFVCZ8PbPvH2JgLka97UQten4zbnxcptNYrfLfwpxcgdq4E7MZRnd1xwibD2MAXCSdPPSrA5FgTscb",
  "key47": "2gHFacEzAf6eTKZyyEEGyBwhsZhvEgYtGrVb1HRuXRhCSLMhdadEwbGsQg8n4SnqvjDSgGDK57ttCW8KwT5b4Lq5"
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
