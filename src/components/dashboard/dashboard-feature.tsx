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
    "2tP6u84CpTbUXEaHqj2ozRyXXVAqVegn5d54KabmZs7FaGdmy3RWSwZsUrJnTEeX8oFPeAQiwFQwUPFSaeYzbgeG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ySydj6Yfu5ddYHgmpusVSM1gJpaUdbqpuvAgzjoYE6d4VjPqwRsfA2TZ9rMCLSDAJ3y4VwFmMWs97zv2Wp4veLu",
  "key1": "5d26q4ppNWcCiFZRMRM7WJJTB3fqNsSGVmFbWzzveHGc2xHzDwpJbqztcUnE6kW7yRU7bVr8xafAvNUSfMgvfyoS",
  "key2": "4atuo7DVpmAVD4d6qtdpmMNCPMS8CV1czbAXCWhPrpqpnuqE9KrQrW7Zmm57KRhAa7oCQarXWuq5SeVeCqjXiqVy",
  "key3": "678XjrhWEzD3hCQrz7vdBEyJDmwhtWP14AJNnthDwkmcnXX2XRAugDfgQfN6VNADTkq2orfYvYyo6rbQQTDa3Jww",
  "key4": "i9bD4guka1HcyKJcFp36HKQ6c3T7DqQLQGayMqok1tkfUrsxUzrKxYb7M5uR1pPF9uSaGca81ywzqrnRNZg3Zrm",
  "key5": "rimXbmVC5SxaPvF9habyku8ytEGBESp7b18hCgWfe6UhZQ9i9apFn6zLwfimw9V9VGZrTQS3opPk24fTXwveyaN",
  "key6": "3EZdvRNRixyWWWVGkRMCjP34WTwYDQAqZ2CR8TdEQxiwDwki9m7hPUcegM1fMgtsyAA11RFp63kktEGMLa7q1tHi",
  "key7": "3nUD3Ax7vsDJ3C7EmYQMAK43gkwDUmjuzWj636RpKwp9PC4vqjEr7XPhQRm5LHvcHAgWqYSfhyDfGUPwVzdzwQYR",
  "key8": "LCiWBCKe8iRQws762GQQZGyywoUAMEFSrr5EJTrb8maZnbEkpmZe1Zu7R3qX4bkZbtX1ZvYuBuM21b3T7gyTHuy",
  "key9": "2F1ExUNLXV9GYNvc47FUkyRCu8tHu3n2rGX96VqyrPMmxTceYcfh7C7qrARUA8GzSe6PePyFVQo2JfP3qfbonVWu",
  "key10": "3sUPHqYsrgNjcexcnqEjwhDLdzNnD76abjBZ4JbX3QMc9gYzf1GCEDTsLEKFeqK5SjehsT8sQT1HZ4zwVsAJygNC",
  "key11": "2Qo4r733TggZhNuaHu79Tt5h2CtnsVc9QZhDaycp88hKzgJHAnAXMM1jWsA5mGanLocAYkwaTySdNYkaguRcWVUa",
  "key12": "2qHBnYktPwzTUxSayKioh6xhWwuYqE4mZHEeXvqPRnc5ABrXMLrfkznMH9fdtpvLCvDfnrXqQZzsw52bC7ZzPo1L",
  "key13": "2Gj7pRniZ94rEGsPaJ6pwf2Apguy7a4RQsRoFcVtVRJ3FdtDagD2quf45qBkhKPYitkuc9puJUtDoZLf2fvp5Qx",
  "key14": "5DKFhFqcSnszC5YSuhqAGmk3GxMs7UcW8x8jFRnm1AdeCT7HtjmbZGwBn1ushTLcZhso2tD8G8ThkNviiTXV3z6U",
  "key15": "2xZ2w9aJS1PuP3Hqn7QDrNcxfgRaRFh3vHywQhCBVzTuGuEXv6HBVE3KRHXQXtSrG9TwsTGtGmz5ySxddA8U7PdV",
  "key16": "56NP6nsaxiVxoq2qSvTb5wb53sn99g9jda8o1o7ZDqmW6ArauZ1p7zpFFgh7KC2cizom1zfhoFb4r8HZegxZKEZQ",
  "key17": "5ioUgMfryof8jKRmhDZybQY8RN718wsXNHcXUJWuLVqbLHsCZShzmsy7xK4hm4kkJQNLJdZqhu9seHzynSVJzgqr",
  "key18": "4vdqD6qLdyDwYvRdZrN3dPKoTo7bT3UGvYpF4x8d5pWip7Xe3wXW2Xy9adtume8yqr61CiEBPwE2QjyWoYKK5Hc7",
  "key19": "4KxfTAR66BSUL5m8V3147nPREVueLuUFHAhWHZ3Drjec6rzD3giokuqaSbz6kL2cAHiKEpSUJYPGiv8K1fCCM6yX",
  "key20": "7AoRYKkxyB4xwyMAVsHkSTWoKHsjvaupUu3eCPmBqWYYpxzTmSH3LAAJmkJQfemPN2YYZgyLLXJYt7agpLjuN7e",
  "key21": "591f2UrxQAKNYG7PtddKoNXghxnCqu6xMcRkEB1TK6V8ubdqjLbk7r53q4SeJ27g65QsHBXXwrPLUYtbzvJfPAYE",
  "key22": "5n2XwLnH69oViorYbbrFNwHvRjG2hyUFUsSSCj5uiR8BwEYvqDmp6wrDgZvmCdR8TXinroqQ2Y5NwYJFGk7xLQaX",
  "key23": "3euERyeHnWqLeVA2i2Fy5JSiXvjmEakHdJvV25ERZdXZrP2azeiCLH72nfVUieRkniqb8SFnBhKbZEeYnhU8DmVo",
  "key24": "2eaD5NEJzz67WdwmKBmoNMZWPAPKyTUbHgtcCTKJgiyTDwgC8AGU8FciPQjxSnjFgAiPXY9BuPftLu2GPgJ86kyF",
  "key25": "2LyYgLDRJakDWPdxMLbuDQnGUz8YfLicx97uYvwSnMPJjtBwv4w697vc7QNvmK75LicUSUAysFnXSBbx1mPFYVdp",
  "key26": "4RpbgwFAUPMHvcH8HFcLsAnWQcRParv5tTAVQAryiJ2SHbapW3Z7cKXVXJmEmwArDkfYJo6PMan5ivAmEANCtfSM",
  "key27": "5zomNgcj9pqaZJoaFA72NEyEGYfQJYc67jvLy47AYighyAPh8peFSUVxsyWoEZjP8otVXDn5wM9rHJAT7MRgZGpV",
  "key28": "DW5v9qnTpShAMmRNv2o32H4rYVDtzZkE4gUHQARcbVrunv85ohddwKjMCK25B7HJNbWzNRoSGKMFhEwxUBFsh89",
  "key29": "2MqPM5H2vMtUxTFaAMLUi9kKCEV2AnxGRDa5hq3JG8SHGEEkq45xoSVLdNrzhT7MsFhkEgrPKTca43udg8MVSCMz",
  "key30": "4TDTpGQvPB271pkvbZFZnAhvj6BUYxpfkLGePynaeMCoqyiw3E38HQHbiXvt44xMgQZ6fFXTfRr9LCaTpeR3K2vQ",
  "key31": "zUFGGoSe9wWuPXX5wyjssBZ3HVp8BuhsZTJgs5LaSStfGWZ7Sm2LKWYtqziDimPVVcY9vX6eYtGJaWUKXswVdEf",
  "key32": "5GTpfx2WJHZxJnYvbGXVjjyTwRz8DFG9LNiW7kG5qcKyUiNgihbePzp75W44oSQNaFcGwqZ3aYNbtxbV4Pd6oLBf",
  "key33": "4PZTB1jKsYUSzWbeSoRau4K7sXeLzNK9yanVsiDKxWpbySCUyNE8XtJPkQqesc9kCt8bp3832ojAnPdPuTKvdpqA",
  "key34": "41okYiw1Pr8GtUmtJVmWeLmRm96vKqDW62xkh3uEGuvjz7xdxMnGzHW6GCpFVLLmLmCdYMkoqNkAhAFnrD1MEbtX",
  "key35": "665FTnKSvt6Lg9BFpPzxCJnxw8VzApmAfSGBuc4q29gfdtCEMbam7ohrSEUiAi5uRpF2ckh9qBQNKaXWD8BHx13K",
  "key36": "34C9vAZRuu5Gs54iHGGx5oihfLMwShgdDr1Hp76cyFcXxRJCdUD2c5gmmj4yVuBMv7RJEK59qfszCjKpE6mQnxdL",
  "key37": "54bUCTrr7uzAsDhWfFdc1fLzhLbKGybZr3LTynThKM5PmV6vaSNuPDJfU6tRMwPig9KS1bG9LBBDEaE6fx9kGCkz",
  "key38": "YXp5opZLNe6YETopqTDAe9ko9iDXa4AAHLixXRQZQHqE4PdAbLJ9eVLK8UkGvPLsxeorPaDtkCLvrgGGETopQcm"
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
