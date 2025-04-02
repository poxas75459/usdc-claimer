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
    "2pVsBXtihPTJTCmhTuEMUAaey2mpkm3hiBnmrfXTG5HpDALnR7arMWJ4etsRHuLwWd6DFtfqzR46hfFo8Jagrp3r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QBjYnzRratjNM4jdwpFXHre72orb77Fm2svdnnb1McGGvupuC4hMq1GqZiHbqQhwvnjGjEH5kZkfjuX9Mg6hPKR",
  "key1": "68nB6R1PqaFXuHhv8WVhJErYz4urkMVYV5yhasf7Rr6AMouLKuiSu2YSU5v3yskbdA7Pca1qn4YHLzeNDdBqTzg",
  "key2": "4nPdLX4xksHLF3XuYtjntFwEgVxY81rdbzp9UzNv1Z7RJu46WgaWDvqMPbqzziY7qZFwUMAUNdgYMn4eburcvS4Q",
  "key3": "Cm14VWPVoqDbNyzB6PKKvK1eEdrj27i59pAW2tUD2DNNCiXrvC5oLymzzeJ4ztibA42BRAnGainNGKJPvaz4qwy",
  "key4": "36zQrLZE2P6u1jdz6xYvKUtdnCHB9Nb6WKT6avE3qGGfMhf2xqALyuSnpRWcN9ynJhM9RLBC1xFHAk9YFXZN5mBx",
  "key5": "XA7TSK7AKPh2sbUyLXNxdnVRRQrTv4Qhb7KAhi9ZBNTqntrXQUpPPHmwdKQo1a9fFWbSTf7aqhdU2v1d1kwEWMm",
  "key6": "5TPBqBBksNsdM8aHT2K8yZgSVQfKFXs7g5GyxvebGoteXWs9FdRCqc8HoAD7vaYFffH6vg3F1RLV4wyZYgqiq5J",
  "key7": "2pDPSQPTEARh1FFDEAf3FCDvFvUgRntCVdbhVViqrzypUbnF8Qudc8Xoatu3rcHaWrqDFmonA9jcPt5pbtn92cja",
  "key8": "4xxsXnw1AabrR1KEgo9XvFkaxMyY3xYWWS1z6L9TmBSxRH1TK5xvTRRbkEFt4x5JVhN3kU3jpXT8sjKLgFE2vpz1",
  "key9": "53Thfz8VTCdhtzgoksb2FWNkGwrFTQ51CMSo6LrWZLvHFVRRpA2KiAFBqReLppWU5jewcuWvkbtpBskyVKKcykEX",
  "key10": "64wrGMwsSjQSTwABU7zCQkKnP1csVSCMbaQw8XZgFEgyHvBLT6WfxobAdUV6iFtmsAZVfuf56ttHPzZ7Fu81CoSr",
  "key11": "5Gtcw3q5zZc8FXxBKkprqyLGfcbJnpSQRqhmBscVPJ9RFSZ7DxhSR1WT3ouScAQvzCZxEHbcLS9jXd2kvh2Kcrth",
  "key12": "39TyrXhZCgMfm7JjVXfpawdxsFQdNd5BHYv8Qznxq84TY9Y4mZiVr62HY87EcevyKSDCxHv4Jh2dsRTMXewuZwrx",
  "key13": "4wwnHRkjqA2nioMnrz7SxeMeUgmJSQniaJcSD5p1mn9uno5u1Ax1KGVwCSBekovZMLh3sAMbLceidSB6LMcutGHa",
  "key14": "4gSKxn1Gvs49V8cX7R4Ho9f5Gjz6vZ1muPZCEcDvRUiAXkJsi5KCBLaUThZpKYc5Y6hv926NKST2b6Yib8aJxnY5",
  "key15": "38HWbfbEVA2MSENEanyKAKNReKqu7neFSDUDv2tyCDkrxBfYarHG8CLzWi67SoD7qJdU63nSG5M9RsQRiW15Zetj",
  "key16": "jgpGdjDHmmNKBzUV1A2GdpR2Ct1RQ3ZWdWMmAjT4BQ2rqKdwjeSi2zPzdLocofDrXdadNyweY6uSp3PtLzFSJSN",
  "key17": "3qdW3xQzuzdyLWyDHMkTW1SNgduHyAkuFnmnmkcj2mpPRyqXHp4MZUMUGYpS3b2w5pJBEZDoKjDtK3SyLN62soER",
  "key18": "5F6X1ajBkDJKsQnSBxHSRvrM56Vj1QSe16nE44wmXbsnRqEb22cz6mGra53vqkc1dDXMU9bZb5Jzy6N3BipgPjpH",
  "key19": "2ZKqfWKPMnsL9XAxyKH2eukchfG7hvbhks2gVb9dBmsEV5JRbE9yUAsEHGMnEBSYtsyAuKuyXGjD55uHkb6hFSkt",
  "key20": "4Pf3T16XtCtq4qpikbRG8yjmBfB1NnziNG2nD4ZAsHZrNeDqiB6SxwD32ypzigdYPeu6PzNScbuoftAgpDBq9tMg",
  "key21": "5TUXs7dK1ANA4cfJNyB2u6aqfrXkXExQRUUEzX1BL2BZeGzYB9eLy7sbmHHsczPMkzREjmJxU2wZEYyBJFDrBHJ2",
  "key22": "2gV7YZVZWXr44ZQzNJX6AysEB6dbdfLCd1tQfxYWYCi7QnEGWfNxK1MjQJU4wXiwGPPHSSzRVKZrRwTkhLy55y5Z",
  "key23": "fT9SSJGQiDyyXdz9JLCESj1W2zizcTqHq8my9qNG1QxHoX2PRzMkrnQRbF7bWnbGAnveLqM4BHspZbYw6yyFJmq",
  "key24": "3DsWSzEjz8oXJAJiE4e9UCjsV9QVuYD2raVmeN9qxcmpJNhFsURMHFF2N5GLbWBTC2UVfTzvCXkotaVYMaE7fBNg",
  "key25": "7nqUHe6AH6My2KjVXM2coAtEdkiRncaxXofwu2p4PKMnjVckAZrVesW9QPbW4xd6jcvUcRcgDtayVHjD4BEPfEr",
  "key26": "3NbVAKUZ4zCYnoAAtXuQND3he2VjmKwyKjWWa2DHBVVxccpa3MPHfwTU1ZZvMWCJgYaEL66FXfTeZkoyQSZXwhds",
  "key27": "WuYAMuALTFTy8K5evdUTxbnS89UNigWZnp1P7c4ciGc2C7rx25XzSDRKx8o7hVKwfNxrubZTfPpGigsrqjvnc7K",
  "key28": "5CTQ4KHmmngbiHRsGhpSicMvN7LiDTZGTs8AQSVq7UNRUbvwF2ZMevHKHtC62hVN7efRbyRPj3Eqxg4R3S1xpsbo",
  "key29": "5CPg5YUGNkgAPA7ys4Zr5TAYupTamRF5ENH53FCsEJarJLFGvtU4XNnVZzWYYsD7fkQuDds5T5BnhvrRUViavKj7",
  "key30": "4es1WMjH62jYf8Ro4BYigUkCrtXd2Jb2itZ24SwGeVDZQ6LnzVDZwdfWnV2zxjiLj7fRGA6tcxUH9Hc9jiRHV3wB",
  "key31": "5sQVpSGMG4USwSaECTwMeWUSZHDfopabPhc6DQQsQr6KJqybWvxrPynhoemqYx3bZz4pTFUjtwk35xA9eZt4fvRy",
  "key32": "5SZsLC7Emv4EkuqxKLzKK9hmqkmBxpKM8fGWbhK8VQENeJwD1eqPj8oTgkkywbNFEHK6y74LrTzqTzHjGD2vnygM",
  "key33": "29iz6uKEyzgJR1aZYb1Xyjn8234eYdyuXALRiEfvQFPXUjiXLoiA7KYm2kH8emhzwXi1qEPpPHHXeJeTcCf1io3b",
  "key34": "3pCncKBTNvqZHYmkaHay1Yk7uRV9QJ2NY4iw6UMfZWVpaB8HaNV7hpTcCtpSjqTdBQbYvaxvXrLoZiMxRe7opV6c",
  "key35": "2gJFdGuF8B9Ejgw9rTeXGJhUm7o9feapDRJnmipX9sYnreXQuM5zZzU9fVyt5Fgsf9vRZirZizMcJE3ZE6nL1CDQ",
  "key36": "2zWyEWfs6LfcnTnUKEj16sixXmWor7qzQcW2bDRCePAKAjCug1pHbeR3ZhQT5C16XE5nU6M5RauaZ3n3m7rvbd1i",
  "key37": "4yVCeL8ntQL5jM57QB1JPhBRcnprU8sbLswRKeAcfQCp6WhasT5utBdMXnh9UF4eZGGGoryWyto1kLFL2UpdXRTU",
  "key38": "3gkLX4iUuLKfU8S2YsN9QuCGNpsvNmbgm3YXBuquM6uC8t4CEyEiBmsdNaoruoTwa3SS6frtZ65fQkiwY83JZ7j4",
  "key39": "4tTdd9wqpmKAxsoV94SG8QpVfif816DssN8tXBYn6xD5r8PCQW4wGpFgCXLRLUPJ9dEeW2boSgpMhewN5qUicPDg",
  "key40": "4CHww2XTMweujeQoGpujYUG3AYHUTNhbPU9cB7ukNvfae1WiM3AHJdewhBud6cGm9jrZ2NezFDkoRbU7EuQsJQQg",
  "key41": "41nVdZZU2nYE57ptuz65G839MxjN5BdVZRQe4JviSXuuvYWwEPiXzY6dD7CM8c7FTX47S9PTjTXKCyze7t5tmE18",
  "key42": "2Me6w3NzTRvHVxaXuKTjz42diQzaT3ockNRsAEw9iFh2EqTAbg5dzDAUJYsNaxZiaf5cLqg2QHpVDDM4R6wQwDdx"
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
