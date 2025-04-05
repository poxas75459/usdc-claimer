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
    "5vqXqjooYzaoj7eLFsx2YFQzjT2FQ1Fpi2ME3N72AgmRGp4CVewdP7VTD7xvwUHbgQRzsGkyvn2PUpPcwSHkSBsf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DeNV4awN4RxKKAJY9z9J6tt4ouGtdLZ8savRK7eYyaMfX4ZzsVZurNcLDNqNBqyTaCacqV744EP8fsBf9NnbvpR",
  "key1": "3735usKEtHxidiKw3CkSFv5gGTXZsgiBbvPWEcZ2dQfJf8tMY3trrLjeb1A5iw6oovFLBVWXRW7UnzwBJCuPjHRK",
  "key2": "3B8NFdYBUSrhDrXXu2grJcxenZnyH8843snWXqW1BzyEBqA3nrYqx16jdsVdS2sDDG89du8K5wUzAE9a6dqfGUQr",
  "key3": "3qkuiLuBD5cxfuFhYzNpYBM7RVi62Go6Je5E9yrfwpgxcYzGERVhZn75gPsbSxaU8L2ES5MtmVcLbauKXPkFEeHE",
  "key4": "XraS1U5ZWvoUpGHfurrinmNdUH3n47dESJvKJcuMrBhgUpRhHVDu8oQvcoGD5PMEecrGPVBkPxSMxH4TTYrvvVZ",
  "key5": "4WL7DCnYnGtjCkWeoprwkQw5oFZccu8aMWh14WryjiUot4JakaEAemB1hpVDc43gZjLrL1Ew75kW465AAwVcopuE",
  "key6": "3CAj3MoY3tM837dF9aTjEqojt8VNSRhyzE8VwDLYAm3p5erjnWroiSLKitUPvuYykoWSjusUBLZJRZG8kZcfdaub",
  "key7": "3sbLX3j3hkD8rAzBR8iK3uegNf8HhYsw1tmBwCjJjjSPATeyQhEAkAiyo33kb2TUJusBRmn1i1n94z9SUC3JWdcn",
  "key8": "5rAsEZQ4HeXFy5WqGPjqNcbgaRKS9QbGkwLQkk4nsik8e4PMjkaHUPeRdZ54U1xUiv6xUa9iUXdiJ6qQjDuJCTks",
  "key9": "5u9Ca6p8CwAj7VVwHXcebmq247h5LSqaa1WGi8oQCrrv4uwxnRzanug3eVFZMW5cM3WoNSo7egKiY5wBuQRKF9F2",
  "key10": "wmKbxaCGUubq1ickwQYGL7hRqR7hyCUX3un8U3Eyj45dNHpsJrKitfQ3z7Re3dJfiSGes4PesjMgxXRmNet2H6g",
  "key11": "4UXsobRejk4eBw7ZGPwmPctXsWrDFNc5E3xrJ41Rb8YtGHZ12vtFHNRD4MoWEwxFsG3zLR6ckPjR3GB3j5qQQp98",
  "key12": "4K5LWrzadthGxbyiPBjJhaDn9UUhuCQFmSowjLBapWuhqDbG6ioqh3iHNft3Sv4UEc5GFmD2YyfH44eNbCnXRoej",
  "key13": "y7EaDgPsAkLY3bRgKZcRqMPcVJ1BtxMyWDuKFgZ83JGJBLgEQKdJVEhsSFBm5Z5SYMrTQzhTwJC8aRkhRNdFQwV",
  "key14": "F6GVdAh5U7VE2Q2DdW2QEVffke8Cph7nRDxgbEwa4xWiLLHg5RLGp5TVck3dfUBa4syHvzXRKydyu4qXKT59xeB",
  "key15": "2xqSmBVvT5tZYUT71sDZzr5JqRNfGZA7DcftWPsu45qq6D9PEAE6bY1sLb6QSMrBwmsqwU8JFWBR8YTgDQn1JY76",
  "key16": "5RMw4hRMicRdM5JuJYW5BtdnwRcRruGFceuPp4Q8ko3weBMTc4F83KxwPVDRmgptrgqkVQvQxh34eQvtxEQoUp3n",
  "key17": "iDkSiR9bQepr72AEbbGXY9gr74Ff82KtiNcZu34VVerzaPBKSWcxJsz3VU1y6feWNh5cLFMETWCXZwhoDuK1RYo",
  "key18": "Sy1jFMrsgRLwXNqaMhLgqjFMvnTiLwKzRQcUNSF3oGTEP6TMSFTL8JhDy9ZyGK63TuPUGTboXWomfzWaFadPoeq",
  "key19": "4iCGvRNCx1CsjcZkpiRBQT8KiPD61iTbTpi45ASctRrDhuiiAGch7kEjUXCYiem1CJApCAqbnxxCFZ4xssVxkNDW",
  "key20": "5PFfRMZwiDFCu7SEzd2WvJ8mDVa6RBtejwUjJM9i3vheX5rDkMT2jpTrJsotVeSWuzDHL9vW3ZBwJNeuxPMdmMAS",
  "key21": "5SGqJjK3y8kCY2NJz7rSHGi22nnpaxoYG392iZ3SYgmMG5ntXEwfMn3bvacYXrgKvtGmeAq1jwkFxvxyTiL2JNy9",
  "key22": "49onKyLZohcvR4isazo4CMJtkD657ZCeoLmiv2sPK6CRQ24o6WMx9e5pEujuZshLKuYEYqpCo4vdnSsiSSSfs7u7",
  "key23": "2S7PkaqrbWmU2LbQDptb3AQUF3ezPfVu64AC81imJKxx4DuKdPUzpURHMAacGHKPbU7j6yhMHXVBnQYbaoBqnm9B",
  "key24": "38zPXY1EDwKhc5S4dpWuyttNVZganv5TtHU3apgmuHEu8QtEVT2yZxPiYiGzPggqsTmLreJkNfy4pAGMWSoUPQNr",
  "key25": "ewWcMvZeFjTBFdY1a1uJSk3oEKermTRQFm3PjQRCHPARVroddfjgDZNRhBro3GDgsgHJGxt5YaKfSm9563DBLG7",
  "key26": "2HzQruCE5GyK1nS4GpbbWwgEoc23PgXxuqqnYsxUKnF8qJ5oSUeVSUNxW3R7jr46ABkQtpMKQdPFnZmLCBT4saaE",
  "key27": "YZ4GUDx1qgQSeL4j31JqCX6cqbqbHPrWch6eWciyMHjm1rHS44qWMhe4U2Cc6niXRpKEnEq9qPWXLjshFyv27yH",
  "key28": "5HJK67fbL5Br8baaaxkBxgE1X8bP8sqWwtWbct1JSeiWE7iSjfWerjVSy3XC8WsYnzKS1fUaqxGAQmwLEabgmS3f",
  "key29": "KbCHEKutuxFFv8utmJm39B1bzsXWDCQk3z17mVMVyEg6iXz3EpY1yeM7fnWhqX8Sz8ReDSdDh39eVsu9CbpToBd",
  "key30": "4UGe4oE2kVfwxnt7oa1tRkXJiCQpCE66u2hq7cbJBNcRhD23xYcJD5nXE6QUfEYvCubxTt8LAjLJJJLZWXTFAuh5",
  "key31": "3atMfp9mjbAdwYwk6G7ZpnexQPcG3EZ7RRnPkbyoCZjwUjuXH4onr1MxQSYE1jangQbgw8JFQA95yscv8BiwkHX7",
  "key32": "2N8J58dEduXoycqV6G7H1WGdbYb9fMHwATHHFyHT9v3Q69C3n5NMbBKNM6LWfXHBWQUtGzRqeWKegVw8XSbPByQ9",
  "key33": "2kiGiSYd3iPwQmPU5W1QG2YXQLGPxvrhei24f2MXQv3g5fdpd6oCPTLEb6XUjnUFMXVmHaM6LzKpbvP8nKYDKquJ",
  "key34": "3vViU2JB13E9kWwj9FoY6zwVgGncw3SsKwZVZ18UyKdaujkAcLYebQNSFbtfzvWNZWuyHDQnPQa4V3wrcMEiQu9o",
  "key35": "gKZZwBqBhnVbQG4RZGn1XwbjMJp9GBkhW1L5QqomTtffW4RcgF6tPNQEeamp5ohNQ21KEzKTfCE8J7f94Rk24SW",
  "key36": "35p3usXfYSirGehFYXMraXVFV6GQ6t5ypPLUYZP5JbF1jpPBFGPUCiReQNoxMbC4uR27anhzV9ri3EYu88z6Gxri",
  "key37": "54NqUK68MnjxrWZEeF6svEaogqgU1PRhw3QS9CB3hV3fVVRxGA6Km9VnXnWnQBeHVRmJaJA182aCBHYg6iMKzbKH",
  "key38": "5GZuMRcJqXVpnu3f4m6iNXhpQ4xt8tpvPfEd4tdadDKPZiURPSc42Ao4z5pcTjFi5hSXhbKDaJBLtQAxj2iDEGJT",
  "key39": "5G7gtAkjtrtniJSMkHuznUkY6kSP7zoUFob6WqgFv5QywymDLv4yjGcMPtRg151TN5fYUKGouN3mQ3ZYXGTMmBx6",
  "key40": "5SrcYHTBoteM21BMgvG3sTakEAr9BXuTZmqGH9zov2AhCRAj5ycyQcs1KWjEKZ6iDLn6c8vF3PFEp8wxgPNLUdbJ",
  "key41": "5PqZSN6ZHYggwHE3RX39KeTt1RSjQs9aFhbJubbhiz42kKfZxUBti7Qzq5a7tLuizpF3iCiHvUC2fy1cTnhJ6Sys",
  "key42": "2qnneJ6ehe5xVe9QMRUAARhec737hFMNfsonHXcmRxMmTv6JNwiGdhAAosjGosRaxh278DtZfLfCVcXMd63waxFQ",
  "key43": "5Hn1j3q4Q1vuonBK3S5iumrar44JtoVDD9myFUZgWWC1xEXYPRarbMv6j4uPvN4smJhizxiTr8pNAcBMH6VjLG22",
  "key44": "2FeZD3KkfncJZhqru2PHf1Nqt91eY5FTfyXo8a62iFNJSSUV2JaVLsAf8BPAuJpNHP4t2kwDyCFGc9MDjP82CsMT",
  "key45": "4z1EZ4ZWF2oXR4nwY1yWwevcU7wXReB3wphudeSdD6punx95txyAhwVedeLBkCciG9qKYe91HMJHCEoqMkyGtZut",
  "key46": "su3oQXmhCwBJYmNwaTtdGKkneMYPv2oh6QZoybrm3PxhSu9oX1U3v8nxuAkdJnPPSY9qh5civjFtUvVfRKL5Qxi"
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
