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
    "hjDkZqkHCXAs6ZzFtBuWkGLNVGSU2vYCDAMaht3St4YukSUdZba3XcwFvPmnBHWBFeo4EukM99Gw7wHMMGPFVZn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mC6pF3cBqwiFyPJRrcfZ7paYy1RbP1yutxjJrdFxrZkDjeedajsQTfKm6tKM44eM4KffcDqtMYdjVeBnWbHcnjz",
  "key1": "4nNEqEGav5jNsLzrWX6zE6i1XY45AoQsJxmNvCvztHgyCiB2MLBnpRabtQoZpZHkaQj1uxMQJETAJQH6MavwBi7X",
  "key2": "qPJdszdgjZ28xJksKujf5f6FvGLFAveB4UX3S89Ciy7ZeHAN6gHQziTe73bXfC7CX2dLERxkkaET3D4Q6t7A6ca",
  "key3": "2nEtTWxKgBcaW6C9bPonqG3SPhftVK4VRjpq3goxQEZqKaapdGXTCMV45e2TivHfm17oBJM7mMnAQT728oisejfu",
  "key4": "3dcfdYnoadf6ARBJHQTtnQvxCEA1qSBXHrAh87DkGS8pNukxvY59JneUqYZCBd3e5d2jpQ5RsxNRYpbL8TJc5JRD",
  "key5": "2RKSuMeRqJXLdELYatLvVcCVxtphsWcppPEWELV2TFYRm3NYfK4zxPvAtZjFzYuBG8oH8LEhDkWLrXgBCeozdFYR",
  "key6": "2G2ESeQABukS8yPYCELvZPJL2EkFH7KKc5GJ4VZmmDRvkTzMLnVsS28AiKJHV7WnAr45U5c17MtrQWDcGkkT9AbZ",
  "key7": "6fQaq6ELH2y5xf41y26tpgAEc9QaruNZ8gMWNiN8RwXnUBWeE1dU4jBEUSAaK43b6rPqCisTntBcxEdBHud3uYa",
  "key8": "3TTmsGZk1fEGsqAz1uQDfkzQuj9W4HgLuHb4W8bUFjZPBo4wRZgXj6Y53zsinbqAwLd8bmQoWvTbBY4zNS8dLyCN",
  "key9": "4gKwk3Kw6Pn3a8iUi8BnrW6iutrk2eqr4rUZjhLghA9zdYdwjQDkVsnoRCdDRuhue2pTSvAHJXxUahMjHFAVwZav",
  "key10": "28XxiahgR9U7spVdF28zyFW7WBjjSaQD6oR2XR2vY3rk3nsHqSJQPwtuK2jLMSeZSur2WvK7pMtjusPN4siZR9DA",
  "key11": "4xUcPmUrBhgvzxQgrXJLVLojkKe6nkzZqpyS9NyCLurxSYcUYH3CocU8VmtqTzaBHWdxMXBJ8oLnuMzPfECuS83b",
  "key12": "5P1cj76gmPnf2ZnCpjbNSPQW9HE7FqMA536sJqfAgeSj4G3C8hi5f1A2yc75Gtpf7CkFTLDE1VW2QB4CuCd5wdmo",
  "key13": "2AS65qT6TSNgESXVLVggzEUK6BBYXbRozvqXZinWPNiMzRCcqUFYBvGuxPzbQei7uND7CwCLBf1mLyMyor5fNuBg",
  "key14": "rnMae7B67kboV8FtmaNe9eidcfeiPn7vGJPzc4eXxAb99iArhpoqvoaGPar6xjNbdQUCtEF581JqV3PMbu4PB9g",
  "key15": "hV1PSzNysVjKbskPccy6fHcpLWWqxDtW5hM5roj3jqTiwhwYBjZSmL7v9TyZtJ6tKPNq9ridRieYtuHd1Wzxvmh",
  "key16": "5nhs8gMtX83ewhuAaL54N8jBgXLCqjUWWQejPvYKBeWW5zMM4wJ399Cm2RfGWEnFqyrMFAUVXWzLe1oBBeD8BpLd",
  "key17": "48P3EMm9BwGwthdEdiqC1WEpGXbETDqnX6gbSjnM5i2mBHRp4BmpaQ7vMMddYPMSB1FNmJ32xafYBwFW1TvbwFDV",
  "key18": "kcowBHMVWbnREHBra1zaB7Z9d12pXHhFSJzD3s6qZBBMifwy7XhBxHGDTZtE3KTmWR47SutzmmSTtLE9bdoDgDN",
  "key19": "51dQyx72cyqHxoAWKqGZSGvPrN1B6VF7G2UfsB7zE2tvX83sR7sJXntBatZiBPtKkKDX2rbK8cEnMoohDMhouCF6",
  "key20": "3DEduMRoxwMLJGZE1DVdVFSkbhcZeeTWRfGfkDY1urnN4go1rNuNedrymVvjGQw4XPFr98ytR4AZKfDdTavsr1vT",
  "key21": "2i3ojwNgU8VbrigXeGsqVvUUKp1D5NeKJsYHAdeXfa6iKYRg1GQKy6W3kyra3Adt4k695aoJHDb4pwLh7SCiFeBE",
  "key22": "2L4mY8ffdyU8BzxXa97H518WqpXx6ZN4NbjDTfnHRVqMB2GKQvhNdHtxt18guGRBW6Gdw7QnhSHtzsDf7rZn7v6w",
  "key23": "4prwLAtBBwsYxKnYS5DJtKkV1gUxn1JuWYDNZoTSpX3GweZXAzLswK8T5yQbSs5tmtjRQgM4WNKMqX9eLHqVJu3P",
  "key24": "5FQF1AscPDPa54DaGDGKDn6f89Q9tND3QMz31N7YHAL355jxz8MUcBrmKDTRWDiEiG7VnZYk83VwccEwfS9sqFBf",
  "key25": "3qQttmMG3tAE9FpGAJb1NXRCsxYRZrNVhcLybNwq1eGTmwwsm4fM9QLPPjxKuZBqb8FPK7goSBpA9TWGn1F8atGz",
  "key26": "3DLnRVzeM8UQY6Wbd6YL4Hwx4L59wzKuXwEAEdiMRtxTDEWfH8XVUMAwpqoAUEdz1JY2xaFhzpFss8x6piY6MBRA",
  "key27": "3QyQXSvcfF5bKyF6xhZbTkAJw8avWhL6uCdZer3QNW3LBrN1aZL7JNH4KdQEBU2s4iGicxCJzLPiEQNciCm33VyU",
  "key28": "2zYyMaytX2GXCEcwv3A2ztuAn4eUsqvvjQK5uetZgcHjFst22VgAymJMenXVuAVGer2sUoGCbNZR6qH1AohtwALN",
  "key29": "5EsWESZpoWecawYEpF7VsgWvXxMYwdSY5ZEpvQfYHU4ygahU7Ze7Ppccag8HUcetshq6gHuodKNVCNnVhcc9GL4x",
  "key30": "4brPqwbdi5Xxw4SPabgRncuBxyF79JCRHavB3RbFrgk6sntDN5cN3Ecaq97rUYhkg8gqbAU4rpoaRvdKvBWW8wdt",
  "key31": "4m5PCndrrrFZDC98g5EjfrvJYKeTkGiHSAGf9styxkveR3Sk48mcyDyFrApLSU4LaQZAPqob13DsFM48kxhUZXUF",
  "key32": "rZkQPFGeaeB9ajzcDihqeLRWbMC61ERps2hwUQJCgjMsC5H1XfJGkMZW1NqYsQntEe8isvxVp5QNdZNHitAsufE",
  "key33": "2Tp1a4zEi5zP5M8usyHHGYj1VFSAzDWPrJywKEek1XXsAben4NB2ww9j2KdwGmKkezPd3RdbmhH3JBqQJVhnzxKG",
  "key34": "2vtxLVYT8B6Jh9JvAiYhV3fihYBYSzAdZrKzp8XyCGWH1QzcEEK5FRrEuMkUqNTfYYQKnKoSKU85ZETWLFZKDTcx",
  "key35": "2detAApVrDL9Uq74eZpJu13iJjhCdHE5w6sCUMiX7oAhpYXYvSUNny8euHy8ZyUgeiD1xM2vgtwKNJWwBNG427dn",
  "key36": "4vDoZRoabr2grJBPgs1JQRv9zrgDieRpNSzNurpDvWJaa1bfzVRZZJhcUDKcFeWCofwtDn5F35y46H17xE6wV2Fa",
  "key37": "42v8UoUT1RNex2QjFCpk4Mr7ZrsYkUC9EkjHr5KKHnudVdPjfDzPZwQQtWQmFyxrmx9NWMYSwm7oUR4DAUKoRHmW",
  "key38": "2YNWVDbFcmD6jeJYGS5DQ8hoTD6jzDFRqrADhKoVWHyHAg2teoxZRAL2kTqydE773HMLucwHfjjevKoUyDkFCBSi"
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
