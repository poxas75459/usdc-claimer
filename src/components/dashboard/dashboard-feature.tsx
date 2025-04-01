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
    "mxMMj4hH8kYTNoKx1QajVv6gXwSymv8hm6JcmRkn629ZBbzeHcpeW3VPK5PhKtpK8jmse5aGwi8L5cpq2BwEtKC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HiZv3L9hE6vZxPJtWqdoAAdJXudR7c7CHvKAUvstpAu7GMqZ5Crd8SUU7iY5Asg6S9U6ojeXHYjj16WBv7XXwE5",
  "key1": "41CAy8CUC6tWykTnxEHuvmAajDJV81PaCJEs3BpL1heNSFjGZMrAJGH69spAkUFgmcsoLKtQqYhwAvVrswENqwua",
  "key2": "3wTxYPKc5WYib5fjkVoEWokFkwsz3mnVvxz5duQtXbtXSUGKLFrYs3H8eqFAziDta81fTRxJNS2BSKd7uazrU1LH",
  "key3": "mj5PV3C4ETqBZJyYjd2L1PBzCtY9wtmWGe8tXwygaree8aQFGEdBe1RXUYh2ASZ23AJ8MVVPnXvHiSP45exbhZT",
  "key4": "qEEocTPowCrGFfRFjxVDcmzEVPKmYu8HK7fVM5WDUQAJd2oBc1vCB7PXZc8fGaTmuCJEwpJAfbNBiXtTivGkLWj",
  "key5": "5vncADoRvYz3eiM8gRS7AYGDTPtK891hEX6pwzCHBcQ8Tvxy11sqqwN5b5FfrMNWyY7oatu6ziE6Jxb9Va3LF7iY",
  "key6": "nyQQYG3MXM6fWUwVam4fy4yHsCEsoBmFFcKmsJpCJ42jZ42MLBi5CHv6R9yCCv85StwGk5NjLVngv2Z4cvPLeCw",
  "key7": "5bo8vc4vQk1AGcF9VovASZnDTP3GNbDYXXJxvMV5vXEs2jW46Uibn3qoJtguX3nhGcXwuB5hBpK2QoRugH23NWrm",
  "key8": "3qPnrYtHR1j7vgYaKnz9y6NHotFE67uybUN8obfEbPAtawGitgcZwELYLF2Zj4UC7aQK25NAXt5zhy7r3yFq5nat",
  "key9": "2TVMqhimqBmtvstYAEN4qRaveMwpt1wVdASKk3B8QwGD61z9sJ9KEHUQtWPtA1XeYtpbCJ8HbbXbPEu913R2hMGP",
  "key10": "gz26PM1HYWHWi5eh56ksJPNMuNA2aqYdtRvFUNmhQfnmmWAzNNi6gSofZEo8SXCJW654VXbJ7evvFhX5ZkigCvM",
  "key11": "34UFWedKEjA7YLVnd5WuAzom4ajygFvKjcpg4W2tKDRTR6ZBDzK5rGgiuenPd8duW1pJc9zHBU1fURRT1BABWin4",
  "key12": "5ev677YrJhegYgLLczBVttPSnihAX5JKkih1zF2EFWxd5pnKUaEx9UjghAyndSrqMRS19Sk3UTVpJVSeBfDmpUbF",
  "key13": "2AMFzZLvE7kg1oDBzBiPkvch4LJvnydqkhnjAUahdqcK2m4wnfwhQ872JBqWt4kXMoNPVdYYvEbdiMP91wEwRaPC",
  "key14": "cgB7LzWS6rieBxhhhbwnWtfZKuJpqe4uTn3D4ksLsgddUHgG2rxvWijuX8m6kuvJpNqT7fq839zFYcZ5DpP7ML4",
  "key15": "4tSmMMiWEN9oxEgpBHCJ18su1dvD69NcUBaPJc3LghcRgKrfsGDnY2RtpLju2BBajz61Lyz8bBwtES1ynC2GvLnd",
  "key16": "58u3p2LE11LcrJu71DhihDCL7ostnYci6jqq1tZfjVEF17MUip5ektuE378vrraD7RMWL1SuHkjcuCX2nE3oSGs1",
  "key17": "5n2divd8pHko8b3dkAYgBpb7qDY7kTnYHsNuoELdM3MDZPfaeZ5ePhXHzCxeeY7MrSSc6Sb6ysYk489WWWk9Y2nd",
  "key18": "3R1ptPuEnN9HxAWLizrXWk8RVBvcafArgzgGAVSdgmAnLJALvMZZxwq8PQjpYnqUuzC6uaJDFMfYHbYvNuzJb88F",
  "key19": "4BpjeJM6cKnSWjXmNeSz4iCpx28m1d9Jqxe186UT5BUwkQn3CxJQsrL3vQmqMX5G5BWTneqtLNChtGBJBWqjWkmf",
  "key20": "G6XcW1evr8ytGozyXXet7mBz4GLtiLiQYvxjq5E4q52v85ryH73VAqPVmQ5QtwBF5URmthZi7MiZS4LKwpk1w1w",
  "key21": "4dzy5heYGpPiW4vMTK54Ceuu2BiHWRKdZ5DgEuKcC3bgmtNd7uzXPLCKfGUeRJDLbWKKXABF6iuvsD4nZXCAFfZc",
  "key22": "fPrAsKpLEgf43isDJQHKSX2J6ZphxePneJ3nRRdQpZk6ZvtrQUuuvC6EUTsqL9G18TtUAjavwwQmqKYUuGp7Y7S",
  "key23": "2rA1qap3rin5boe5uGAxCNf6zEyypWqoYFraFLXvQQiKmqSmZK2D8ut7P4cEGJaBZwLiDhYnFx22GLoV83e9y446",
  "key24": "44SdNdSAD8r8EA3uG4W3ADugSjqgp7Vx21BL1XLtBnT4CLsxPzmuLQtFzMYxAMxa4hbJhoqJ2Hy4LW2BMn5J2Jaw",
  "key25": "33E1kB89GhYtNr76N4YPzc9TFNM6Kuw1ao9NHT1HoZnhYR8fZL5Azm2cREQb48KRFF95TTMz3gHVHaQs8XvnSBVG",
  "key26": "5xL5pwfFTxXeaHrgRJLB2Yhp6GNzHjw7sCA6emxoojyNMKtQ7xyPGzAYeLiZ6J6WGc43bKGN8vyWaxLypkwkaac1",
  "key27": "2yrxxHKaSwpxhQimGWCwMAcxbHy4NB54bPGSeZURb5X4ZyT4YLaSHvkGfzd2CVjwYcdAcjnREkrqsduXUYCAgAhf",
  "key28": "3kWanqZnJQhJDHDt9zX7hLSvtW2jcXNXhXBN6227AJVeAinC55cuxFq5oXsDUchCFbxHwKghuPoN3MussHssBV9G",
  "key29": "3bf7kN446XrEFeiu5unCpN7pjwsGi68EmQgDySPyAP4zbRwpeToVgpHGQrUp5YrHScLNf8asKBhWFqh83fuXUszj",
  "key30": "4mo1UpV3xfZrNH2dnGfhmwtRgm8N9Vqt9cwDSjMbwaSDNribtM1SPp5fC5EbePGbLvnqH4uHEF6j78pqfFxA12L3",
  "key31": "3Gi7sKiSSNNpqMb5nJBkRuHrDDBK2KFTijV5ynR3o99RF9W2KgJjn8EA7t9KeTg5F2P6Twwb5hUjRsoYPNQ4Umb1",
  "key32": "DNSdvEE3McoZvjLX4vMHndhBqUD2YPhsvb1WCDLEUQedQUXHtSmjhUVgAHFse625sns3XWqRDUCBuRatgbAcTWg",
  "key33": "2WWZPartw9ahHo2NbDGMUPaNyLivq9Ug2LyXPTvpcvGqzn9WfDDFzQW3uJAy8qmumctmYyAsFSynUJ53F4yv9jRZ",
  "key34": "39gxCb7nokhfakCVG3v2k2cosszKz6JXj6JhLdYY97dNces2AoCWqee6VPn1vtHFGxmEZYFbnD2eXSqgaxEWXpxX",
  "key35": "DpMezt3JmvHNmZ941qQzoLCZgUfWW25K8hdDYb96fQxLBbxb3EXhpV3N7X3V9otSZXAyEnVqLsC4y2vfcBUcMYm",
  "key36": "2gxW3vih9vMU3KwSf5YEW5AWCHNvx8Vu9dgCHC3VWDeYa1ersc3hViq4GNRRTTCQDT4WCgUqMvgK1RUh2x9t6dWE",
  "key37": "4Tqov8iRWqFgZjmkE7aX32BRDp9d6JLUnaz46C3kjgCX1cewYEuUa3VcwHvQGVc1KanheuvnWouKu7T2toWs9mHU",
  "key38": "5uu2q9MDHv9jkvkf2nAjT27DqB7UeivXF6pTNDkypmSKX1tG2xpXqvxcCrxudUGkg6GGA2rkFcj7eQVKYATViCR5",
  "key39": "4yZ7YohmtzvxAcNwDjBMU3FLjdA4fQXY2D7SEF3G4pgq6DuKw3xxrxxDaJ8dVAFedKAHYhrKDRCX2psmPwnbq6Ku",
  "key40": "4MUou1ckCJHwo7hVGhQy8Urjjf4ZVU1vfvAkM6X29LEUZxNGihZDPcAW3YxsytVe1Us8vhN8pTx1nJifmDgmWqpN"
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
