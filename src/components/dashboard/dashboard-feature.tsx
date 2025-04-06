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
    "61vLtUfoXxPoDbi5m5DWvxSwu9ri6VDCk1Y2A518FecxiHHhHWSULoEzqRZEpdXMgQJpuCkZKiC38xmczpz7Xqmg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CfvN51KGuXPs5rUSKQyY8meXk9HLRhoYLFRmXKzggUTVvmn8L2i1rP43MpkWCLiWzFhZmteLaFTxy7b9rZdUZjs",
  "key1": "5rGFCVahuGtre35itwQPUkBok2gBGWrQGZm6mwJ4jCPeFM1dvg7pDf2uh3EmR8e5vCoQTWAFgmfo7dSVpGcMCfgY",
  "key2": "4SAZNkd2jKRdkHNWsX4wSPkkZn8eqfYJBAgScENyu3eBFYU6E5kutqGuxaVshz5cber6FZ6afcKBJwogLpTPCmdf",
  "key3": "265jPwBN7EZwpn36pnrvfdmCLJCwmrcYtKuARSqLGAkPm1zvnwpg3cy8ezQF6pgCFMdFvRaNukwApcp1gHs7QeU5",
  "key4": "4VATDGL8QmXWykkPLYB3hykweL9NMfeCsBRhbMeWevTfVuDEHAoo3Aw9XGFBDHNypFeqcsWk18c9trzHkTzvmbjG",
  "key5": "2h8SWj3EBrx1Q7rqfrmyNfAZ5wyBn5LXydmPZBzdbsboZycMdAwuwSt2oFjXukjVsrJcrSY1xqSjNPrYvSqcczwS",
  "key6": "4i2tZupb9KKVqgwLSHgukXDmuE2Z45rVQ5P9YpcVHRzhuaGbykovnhGr4UyzEQNsmZc7AyqyDCKCxt5AGkA8cXkw",
  "key7": "bza2uUJi5PPtSftwa8iYoZAS6CmBxmXg1Jj1pHzywpKxhauiSQP5s9yxHc8YhnkGMRB83tGy8SwWDywkwpbrEz4",
  "key8": "JNWXhJF1ah1eiqWi7veLfbnacBmWtjttb9orgf2Zh6s5CSHpxKM3ba7JkLSUcqpsQZT3FX2QCzqMjZ2yAHHZSqp",
  "key9": "3qL5gPYJ6pZNL3jWSFDpogVmuHCvy5mBpRmg3kA946tPAs4oZqKzzXgKULSpvbDCWHw7itt2L1eUPRNzfBKWbRkm",
  "key10": "3nJkDrM9YK1fj22EN3z4Ld9r1j97ZjYem35cxXGa2TpEHuwPbQQ3vdaDG1gtp3eihZFi75BCZVSwe9ERfd5SoEWm",
  "key11": "s9KCcsJGWCmB8G1JGgyht4a3AkCobiaRbfdkbT5e5hTYCdXh5YmQ86KtRMEt2V1VSN1gZroa7QyLDpe4yfDCCUo",
  "key12": "5jXN41PBhyBF8xnSXbJqby78xHptZ7rddWdFbWFSJeqVhVirn8enknjDEkCaaUU95b7Kymn1HAHwbgSThv51pf8S",
  "key13": "2PSpVzZiLpQEUef7Evo9muB5o4WvMdrtYQnLRaVSqSZaA1fKevwkZEf3fD3SczRkSYeZx6LXYDW7NuA1nny9KFsM",
  "key14": "5BRzNo3mkfFEJn1gNxCdwRSxWg5PFmPgHJbL8Sc1CzGiAgSyZ5D5hXP55CHm4swjW7RG4KjKsd2qNjHETKrjEAom",
  "key15": "28FMxTDo47z6vU4WYAWi2xYSxahGjnsniybEEM4MsBMnQwdeA8EeXdGjnqhPrz4hY3ry6USGuRe68J4TdkdN7VEN",
  "key16": "B72sAwbgLKXEp12ygQZ4Bi8diprVpq8S7wnwBGeseGv5iKj6rSNw1mnskR2rRUgPPP3ptWP6KMZR16HCQAsPyAs",
  "key17": "DxQhwCf2GmTZnacD7UrHX4WM1S7QUCa4qDWzb2XY2TsGaeGovBrEqyBjqyVYuZ7nmyWxBYfFBo9Br5LhEcSH2qk",
  "key18": "2K53c8j2docXR7qCTQb4pRbZLyXkB39ZUd5j8f3VesmZ3WaZbHZS38GjpSuxuG88Jk9CPgVzxTgxj6VsZnhbwvLW",
  "key19": "2Cj5ZVhbwK364NEa7o7kBUTUbEupvx9YU6K8trv3EDehTpzUwTXLbP7fMDAJMv1ZkZKACosXjwUScMkAKAASC6P5",
  "key20": "37E2jzdyr1d1YWrXrFdErF9JEUP1yWxWt9h3ZiibjJxmqDWkYwyYbCKvMQLBs7XKAvGFJZyQ8asVBPHH47cJ9ApV",
  "key21": "Xz7mkDp8piTe5tregCv85NjCwEwT13mzFj5D63kHGvhwPNHbUR5k2f13efBvoqFwNRaPk2oVQpxkVUaSRGtbTab",
  "key22": "3ssYhGoRgJpYT1fg8zaZymRsWHEcEJpvQL3eemwdhpKcv8z73RnGhNm7o9jrCbSoYNiHykYECBjojAp6c7DHr1aw",
  "key23": "5bbt6C4yHRkECRmCvVJ9hEGBP7p3yVDskgvTrxJ1nENXppidbJZVN9RyaADBsDBiqV8YKeYn2nNtwXcwuwq9YsJA",
  "key24": "3QJ58NjMZKHyCRUYqMy5HM7LTMw72kMhW41eFhviGwy5wp2r62SeC2qjcHrA4Ud6YrwpnX5MLpd7zHVYVSQagji7",
  "key25": "Qr53qyCnDBHwPBTxSBg2qeVWp7WBfRjgdHsjzSxCzoSa5iPAC4m2V76uqYxXtfkeqjeaGSsFFDfXr7DnyoMkaQQ",
  "key26": "DKohxnYuUc7YhdPoQXD2msWKwi9aKvXwQPeag3kLL54sRvMFvPfq1iGzPZM889whXjt66qhG17HPKTkWD5ctVEt",
  "key27": "5cbwRSBzQYUrs2VLpLM2xft2qWw2c1Z3jXJja7sTc6mD2Kyfh7eAz3H9gSZPF1Mfh9GC8Y7gaXc8ywfY5n5tWbiA",
  "key28": "DQtw4Z1yt3pojwYjZdsXe9u8AUZMLnTX4Uzr6cv172JBD3Pq1RVmoiFppLyeHbHT2TqdUNC1Nr1GCcUkEkLAo3R",
  "key29": "egiZq1kjs8WXT2AWALGj45AQJfHN8Mpv38GNjEuFVUkWoqfGq1F8tcYJsrXqZQwjw6HM57P5K5V5cEDK6oYnN6Y",
  "key30": "3MQsVBm4UxXvQPHhHUT7ktvFJeXwUXbTVxifedkFbGrfv7nCBm4rTjsebJWpYHmTApn7DKTxFDGitm47WSykUMFL",
  "key31": "3hpKcKTP6aJ41zny5zQdAt6CJD4o9AoR7jEhU8DQ9QirxYkbvXvu7G13XWmMn1YDTqsqgJdC4rnLupxxh7T64Z2K",
  "key32": "5UKPCRGF734hUFJwS5kR9NxPxa1EfEYp1fHzUWpeHtHPQzAmN6zpCiMuKDUP7KJ62QUMnfZcvQQdmxK8zjaFnFef"
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
