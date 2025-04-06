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
    "u7fPwdu3FD6LQZPDLEXT2xad1Td5JuQYxjtnMhE1vjpiSBuYLiHiK5irXJBj4JHU7aGJVpqh2anbenrExGSpUPm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B6h9ZAvdk2ye9MtAVrAzyenLZ8kXg6dkqmE7UA2ui5Fsg343Rv9BXNGAe9jPqwZYtusrsUMfLqrsVJ6B6P49E15",
  "key1": "4RbMW4VezYrZEgCj4xRJ8U9Qd6DHtcVQbiL8d1N1jBeY4YbFhUKHP83PqxvUbdcBpoj1zJKhem812L9p24iHD47i",
  "key2": "5AM39252YS9UtjQcYiUP2AnBhkuFuGJbfydxGxFvcFGgJCbUJJJ9GVvCfbmG5VVecLUKWNTtTrogo1JmEUrNrs8b",
  "key3": "4CKX7qUghfGWGwsNnbMQySwMVpY69gMMQBHnG43u5XJihCQBwgPB6Tg7EpLaw2kQ3992puD5C8TTMUFA9N1oK2N8",
  "key4": "2oqRckTno1YSsM4qajVWuiuynPJKUVRtmoTRom3zLFZUXqeQU3rvrsSJdSBYxNmtumYBJohx464NxaHaH5aVzftb",
  "key5": "2nfdhUYXMJaWqkjH4qkYmd8XPzqJXgPzPDRury5HBnMoc49SPqSRAP1sbdmjtZcaRFseyw43sXekzrvphbnPq4Kr",
  "key6": "4Q4U8P4tdJjLpkrg9vUs3guFoiuJo1ZoCTuwgayv2yki6gTkfLfnn8poXukiesBr8twb3nUgy7wa2ZvSzuqTDCha",
  "key7": "4KN6uXVQQPf6M7329H8mVGFbx552Rv92qpevhknYLr36BPjWZ8bXJicZdBfqPxbNPcwYnB2JvVLkKLtJEBZuqp1G",
  "key8": "4DNYnrkorw6GF3G2Gmx8RQjqhY7mdwgfVncpy9Rz34uX4Y1sF4JzF8wW5jsEHNdvVxeubpUDgCkp8sxTzjcUdvQG",
  "key9": "5mFyWtBaHEaUrmb42bx9PwSnPHupc2KxQVNbXhRSLiV1uadwJ1aSg5VNjD5S8UgQtbHnNYXLNmFYVv4jiZ4WYfBr",
  "key10": "31DLzrYqqNbxWMzr2whZHvzuDtcwLTBgSVV1frPEKDG9NyreCFUcfUaLqss8dztsz3UQ57MVi3xi2nV1J3QA7gVk",
  "key11": "rqXp2Zw7Y6fQSViomhR3sZoxdLCLWq2dwcamSYGMurJsT4TofEhatWKre55GK5JQ7s5jK3qKuWXzmQajTWhcw8s",
  "key12": "1aAjwZmpKkJYmLPeLbDzeuWfVrP5yZsMofMQSEk6seKNaCZJmmw6hPra2HMH5fn3rkbQu4gMkPLdvQPiRBHHc5Q",
  "key13": "b3dgkpcyyquSpHUQsRsRfsuA3KNestMpZkx8NMeqN8CGwLsuPMVavMFujgyTsnDfZF8GuozxGXXm3NbmPzq2cSE",
  "key14": "26rBUYojUdFj96GaW4zfbkt8PYfNjYdaM85LRVdRc2J8QN9eZfuQ3kUXFV3wGhWhzKpHyfGPbPnXxf9xjHAQnBjN",
  "key15": "3pT65nAYy9Cs2N9zVxrBR1e8ddUKfVehTDyDT1yrCy8ZGPLBHucTrXKazwk2iEmUcmzF83yt5iqkkHKDmzERV7QZ",
  "key16": "3Li8ZHm4DbvjRLpNcgrvCg1skC9ZVmS8aJwdWoNsrax76zv1d3rmzadnpsHCrYPr7UMKrqVL7oKG5kgXiUwGF64s",
  "key17": "35r6gtRdDNmZWHS47zD1Bctc5vbRsFLiwEZbMi7YvE7FF1558qHfANCSL1XTDfxQVEFTSRSNwyfSHkgew7HQXNrN",
  "key18": "5kmr9JzcfpaqmomiwvoHZcQF3yyUqPGrKPSP9WwP8iUH8YDEwsFVoFW5bNFEW1SEFWMhpxYzBd2KtVyhCuHSenaw",
  "key19": "2FExxZ53vugj53tQjgw1DNv6e5Xfh68MrDsYomFbWS856iQ4JRABiAqCBAYVaZ8KRGmbAftJHEjWzjtPBjqLrPyy",
  "key20": "JB9q4daPaAEmLVKgxRkKsNu9aCTVfUjoAACDH4ykxL74kHHWSCGVg2xTKHce2KG1rrmwsrsMUwkMVUDNXhhxfoX",
  "key21": "2cVTKfi95XL2VAzYVWVMLzFD6RJLQJPC3fSBAx7ajisCJ4EBgbmgkHmWYBYKZdvKW8qrHXWxG6P2xFsA4bQx4SGi",
  "key22": "CqR3a5cUkBJ1etXpuVT2utkTbLGAipKz4YGZ1ifmYRgJw2S1UKSD8LeN9YvR3dJVjVyBdErxRAywWLML7bE7gF3",
  "key23": "3F1RZU1GNZkJUtrZKs4BTPX3FrR4snVTd3BRTGVFQiNvzBiPcLvm5uWYjovtakEf78Wc16tgktMGVVh59ubZuznH",
  "key24": "44kZEpSG4LRcX7i8J44GnjhMKZh6sSXEcC4vp3orbzQ5HdR8WQuujihJXVybNSxwFGpvA2QHuJFP4hzU14wDKmLS",
  "key25": "WtXbXWExUs4MfhkDpG6QCfdUgPBns2iSfsNh6mxDeW4sQCiEaeAUnd5PP3LpTVoYWjrddkYWh4tKQqf17CbB7eF",
  "key26": "45ow8Qmnuk6hxdz8bbvyL4YtjS6KE26eSiADq5hkcRK3NFTA47i7vbsA6txwm1UZtm3iwkjsVqq8zt584pj59Ztf",
  "key27": "2qejRUrXMAok9HBmyVVxC82yLck2YJ8qDUpiaNeNA7WyM3i23hoFf9CRW4gVAo5XUB8QxqY6CnSWZDfW7ZKdnA6w",
  "key28": "5D9LzUjNr72WZVcKxz3n85NnJRyYU88dEtJ7EdY9Fy9Mr2CxKCtCbzR3W8gasHveRgfmedBz5d4jwaHJLvN5sa25",
  "key29": "BSC7mHJMNMeJeZ8guynVED3uaZAD7nPbH3ZhfgDjcruKR1u6QRSCA5WTncv4RtegdwCgzc6gYV4WyPSgDuW1W8J",
  "key30": "3Z2uwX1qB6XLWyW6M5VjnHvV2rDyEJ9hVujSpQL6DPTKbDWJ2RKou6Exa6JbnYp8tXHLFB7siGDirD7tLtpjbaz3",
  "key31": "4Tw3BDk4JLAjD4ft4VkvAT93a5XY57C2xhJqK6vZVHfXgg5arVnq8gPLBzcX5nGAesXyP2LeW48V1xFyqBbFCRVW",
  "key32": "3JepBgaqywoEbPjyswmzXzQ7HdYAKka6LMjeFKU3PFvKAhnxUMbi5i7n5tNjsW12oNtkkmGcYDPAwdLh6bsJAoBY",
  "key33": "L6JGdUuxTY6GTfJooVNcCpHzenJtGtCwTo1AiQudsSAN1JGLeNj1vmzmQrGk2kBakTdZcb1Eegxz4wyUy35TNUV",
  "key34": "5CHCbgFmGcSMcdsgn9p39WQXvEj36Mj96ZM6ekzpwR51HYYAHfHzQ19Pueti5Ch8riFgAAL8jL93Bnf1FPvrcR5m",
  "key35": "4gLmfLEdeK2tXXUp42Lzq1usNH3ZporWUrGM9Ca3HAAMhfQpSPiuHWWkSHsjwdkTwXhYVNjcLrkdFC5jYWYTpJeV",
  "key36": "2RqUL7puswb99fe1B3PMxA92gNkusgjkZ13zERneza4SkSehXo4AKywY4PR489AduMWn8BBxEfA3hYK3CbJ3exqP",
  "key37": "3prkCFE2ypwjn27DXsZYRBVhMLRTcT8ES9fcqXyNoke7t4XJAwFyqYs4xTGiMA2oKmXaZb4B2iWx2w6BtnpeciRx",
  "key38": "5kFDvKFpFVVnRaPiUNryhGpXxz4zPB2rxLsxxfh6dLGyysLHQfkZ9WxHPo6LKVP8awBSQEYBTQUg7QZfT4JdwGAY",
  "key39": "5YChotBLFeUGFWz38hrcFV9ba7WuyrT6n1y7FXaPReiAoCSSSjp9pvw6NfPbJpnmjuChhdCMXAaEhfGnkmitPbJG",
  "key40": "52BpA9nnUFMPWorCCH4L9cTVgJZAVoUoTgbCiaJobKxdk5168tNT5GTeQA3MsFSK2s6gMjYXPGTtr7xKxnXFkVmy",
  "key41": "4txhT6ngYFTsMi9YGzy8LjtXu8E79VB3kLUyxvBsCTx8Dm8c9deDnZEkRqFoMR7grssiJdz6MEntCfB3EK4QMQYP",
  "key42": "mJSpdg9Jmban84FWrjeiEcFgugawmePJ2RKFqw92boTQdXd5BfmEacCscfch6epL3je5wtbzLYPXf5EASpkgMTQ",
  "key43": "2TyJhYA5mcBaKD8Bc6P7vbgwKvcUkT24FZZiWA8iJvr86jpsCePkTmnCXnTR1BGJk4dRWoyE1hGoxsJqneHDMxBa",
  "key44": "3HD3u7uUAr2JYmAvCFTjfYoMF2RbjcF5YKBBeepSdviVE3QGwzT1Ed6cWi5V5oz8izaZhA7H44ZqF8bF13LkRwLK",
  "key45": "4PaqCM8eL2utFk8ghxED9eUFdA43wYNB55BknXmtbgvQ8PvY37oaxvDNgJxvP2CWhEtA9d8Ry37cxJrkUxhuYpwQ"
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
