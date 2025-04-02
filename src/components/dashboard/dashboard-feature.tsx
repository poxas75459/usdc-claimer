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
    "ewxkEaiQyuD5VisHA2zEdQRtXv3ndiMBVeietMrTD4XPWo99SEQUYj5Zkjxjpp2intxyKPSaAofLnnkfSRtFW8v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5inncyfqDoEdVrcf8HtThLUcDnfW6EuGn1Wv2tEc526VcwF4C4Pm1nChFuqTYQRe2RLrQSyJonyDK6DRrLGbbRJa",
  "key1": "4fmqZqFmpvNEyvVVYHrR7UPf9cQb9VoSRxaR4LAn1GTEXNq83D4dWPsPXwV7wH7Pb5tMh1MFQBtg8teAMqPuVRve",
  "key2": "uXbepFgCiLJ7KhKwVFK8Uaa2NPWhQZZ7dUhECH5mGKYcSCxfFvSH2JQv57GeGwi4b81FgKhkQXMNABKz5xThtjH",
  "key3": "4R9jxtw3hiLpoQivX6sW1V4ZcojhaCZRbWopT6zU5YwsvCQiGMzCcZyDAPTyUSByvXg5J9eZ32SeC7CKfW397vY2",
  "key4": "2gGzfiTZ3rGmU1Z58ijHHrV7D1UFyebpzHKTT5X8cTZhUNu8gdmp2SNBsyPoHc9qJJDfkiRcwKKHtwWRPedQVsu8",
  "key5": "4QasuhprCo22XN4igKzMLrc1xrhxhvbUDZvk1BoNS3Wnu5QveS8GwcsxwFjFCwmebR17i2R8CejJ9xfb82WDWzuD",
  "key6": "4Nd8vSQEkr9eF7CQaGeh63rSi3FTMZsr2gFLABXxVNxBLd3Tf4tZTdfker1gXySb1T4EaUzYfRp6UAW9rZ6GnqNP",
  "key7": "DWsFWP7x1sjwQZKGfQtBpqGuipb1T5Z62NPqWKL5wovmbCxotFtuaAbhnUTqf2iV42ufEHv2whAm2Vpgevdtqxf",
  "key8": "46xa7VvmGXSbdr8Jx7FL9n9Eay3SjoAAQGgoAMdti3csFsVTdktRYkxZL82jtgK4Y1tPhRnADx1n5H9cr9qmsHTm",
  "key9": "2KHE1dfxW3LhBWHKTQNeGdGYMN2muKdE9MB3pXuBGtmWEX5sySkCemC5iGXzjJmUz1KWyY9xnnPJwwtf7mEbD3Tz",
  "key10": "4SuwmwoDzh56bgAeZV87Mj8n6fQovJan4A6fPKd4dtanvfXiHmiPdbRYQzZfcbMUVNDLpKh8sUNwufjLm1PVzVKw",
  "key11": "2WddoHbH3cE2KN4wwwxm6qxT118fMFTdStHyq3nkN32jUomMzpmC9349MM18hmcUjKWYx1mRDoqydiVUvTpLskHe",
  "key12": "5jiLpsQ9s6LPTUiWbLFhksWgUjEtHk3RD15UWZpsHg2x9a3VrQTyvKK4Z8Us9oxkvRhbtuStg5xhZAYmTLeoTWQH",
  "key13": "KWzWj1EfaJtQF6uVhzHL9sSYSZXA9wZjymCeDGregdRkp6YNJfsBHsi3JNCrvNwfj8tZ5J4xSse69wESF9Gq352",
  "key14": "KdiS3EuSEKWG8XGgNC1pey5YpVp6hGv1C7EmMN2xXNDtSRwMFLjQ4fLZRGU6a5d2Ek1LVT9Gi37kfJaqqYKN4L9",
  "key15": "58q89UuiNTHVGjHAhZJay8okQTJmcF7SBPsaEjFuEbgT1mLGgcCPSmLAXbCumG1kJw4hcqG3spnpBCK1miLzTvU8",
  "key16": "2w92a4nhv9i8MibRE5C1AuBNfSn7NPUVZRptxo6pkeZzkEjRroFR8YnMxwEp47ZtKHdNUTsAiFqv4jgMNPoL3kVu",
  "key17": "31hGXf4ZvDfGGJi3xMaJQPWu8BaMCczGZTkJhgi9UDZ9U7uvyCkZahRmsUDFjNDQSt3knXXXG6gLU9hQ88wmRHvQ",
  "key18": "61bBbicdwDYmaG6iposQbAH6YBWgb2TCjfhfQ6GV6EHp9pCxyPrm8UxBK7tc5xephTmbVRkZ5NNV7fKEqJmMrPzb",
  "key19": "5RYT1amYS9RsFiprTtxbEDpwFvJWt9Ch5HEJVoJoQTzKtWRiFNRbwshEeYP6ZBYhDerMUCRwyGnMbELzjPGSxxmz",
  "key20": "47wNuf9x5NoNQN5tDE64MdTerYNAXF3AfaP6GtAFAe7i6rQ76Htwd1k7wYt8XCzRrUkNAS88aXYf3bQQZ5VzJvZa",
  "key21": "2faXUmZaoXJz49k5udpkheLLByjuHhC2SzsmFCKXUWETkwP4PK7vWAdZPT1iLDvJScApH8rVRagoFZcoGx7UBF84",
  "key22": "25tBbfJ6BWSBMow8UhbSsnYNgVQfF7KowoGfgeEx3p83B1UfkvFESaEo6LoHPxPRm1utwFte7o3ZBPMTXuW5d5R6",
  "key23": "5AUVbDD1TJoJHcQEWVyGYtseXByG8Ld13L5v11VgiJFxpSz244gMPcvrxUd1dU9rbMrGL2jJczkLJM3PSAi98BJy",
  "key24": "399VyCcAqrfLijERjAYStEVo9vTh9GMzSa9MJaWEDDhTLng8jPkKxXf1EkffuE7wUWzAhzcwojdAj2ihZ5uUN2A9",
  "key25": "5VDLxsgG2N8ybvyaB9d4r5DshHzFS2971ZUTDxePaC7YHYxHJRP6KNKDZhGynwTL9na37ZrtrRgrzTN44SArrX6E",
  "key26": "3uiZerpzaXn2nBzxdbjTB4f25fGpZTmpL1537Lkn4P9ngY5gADYQoFoonfAE8FkyAVHWu1Xe3MYqpukdQwyJZBPA",
  "key27": "5AszDjRxvsScnB8DJiwSGXwDreYSkgcUg1NAT3BVRmWXpz4hvvomByFsmZrZW3nkR56GnshCUSEJY4u2M5jWWNon",
  "key28": "4HW5c3wsw3E44G34j6XsvCQbVKzQBVZ1ZwHVZM8Cm6L1QihXnfLaYhSXRY5B4FZ3X2p1y5WHotkEvHCdQ1fyCV9t",
  "key29": "3xZEWyY6B2nXZCFrjuNPdw3iQRQG4Mi2WBzWZ93idJjhJKfRWEj2xuKnzvMy7fXRpSqZYNLuAwuKzUvzDC1yF1bn",
  "key30": "yfgYE2czSPHm8h8Cus6nMbvhqnDGEr64EKj3V7N9CLWFkLgkrWkWzJcqtJWYPuduaPqrBnimDRKJ1wjTSAALury",
  "key31": "47Rp7rYcXh12pHqbxgTfaVp5P5EwVGVGmM9cti1su9pJ7kw8U8wyCe6vVzXe5RynwRdLJ9VZJiS7f6jszQRK1GYB",
  "key32": "5hNXRwtkxSRfjRSKjfB68nD9FjiDc7rXiUhAidxXjmUZZqTXZpe177CwKk5PMcrGd7rYx3pV3vT42JUmzUZtTA21",
  "key33": "yzLdZ3mJReLHLQY8ZU19az1oHjePMuJRZKWKg65pkZq8KGuKLpbJcUpZvrPPgbmkuHcJA3ngPRGJwiXWfZzCZsT",
  "key34": "41UGmsqrtnF4wSUNmiACJog9N85wu9gr26ijmwMb2qGL5bNogaTnMCDJYnpUTsAQ6G6a8mvsjAxY1sb6mH5yQKLx",
  "key35": "46U8mdPfF7DSTRQYJzcF6U9UhVK3HPzwAkGBoQUW7JXUhuXTdteqWh4znSFe6QrhJeNmCyfqXyag2mU6vSQTL5QM",
  "key36": "2v1nyKfrmeZxzTRnqaSzTuDMPGacz41jv5uMGBuxbADLnQTz9j1ignvdhx84PztnuFSbba61qPFPp6F622NQGydf",
  "key37": "2WL34ZhgB1obTrFjwBFYZ9bW5NioFH2Ey7UVChz9ZSiY59ppgHrHGh6S1ZQ5mj99bWJokeJPn9qZHUyUikZokGu3",
  "key38": "4sAQnDGKstmttZpVcTsVRQVXtjvxeyAyHjLqJ3fT7ccsJ9kwp81Ur1aQGF5QzsFjtj4Uw7LUyxikzBkbfDaMC2Nt",
  "key39": "2rJSFRBzj3PtY8Cc8AehBTDhvUp9iM74eXw8hKfCMkoVWL8TpMczCaEqCbkGYGSD3NcvYohZu41y8bcmCAHm1U3r",
  "key40": "5wdSHduAGB6zCnoKRbkqobm1QzC53PWxJzQuZtTNNp1gc8BmU7ELeVkqkzNPsLukafsZQsRrmEyGeWY4AKKSjmeT",
  "key41": "67gvnAXYf6xvB6dsmxV7VMR2N9wBZpgc8pZH9nuUxdcec8foxc1MnD6HnxgCH1nsZ7Ss6qaSg5hDmeWhihcq1ru1",
  "key42": "WSFZeU1RXnRqyqFnzpcLsv6AbyeUnxunj3FSb7d6LSHaW2ZszLBUneTCuF8kRKZiCEnBLMP7iJ7gHb9yAsQpT1k",
  "key43": "3H2LyHUWVf19VBGKVKFgFjzHCqENhHW5btrgC1S2XvBeSj1MErXXD3ZV4Fkm3YmenKmoGSKng41pBdmgszMz11Hp",
  "key44": "DfhmH1e7MJcXCVdeiuwnscsJRroTvUosZ8zhYFP74TbQaJZZ5CtPVUam74D7LKWqAxFbHw9gHLrGqVC13bP3H8N",
  "key45": "4tMh8cwXFnDVj2CxnyBwSdYanC5VfyHbBAQqPcHhhFzDHRr5ZsdKoD53hxXCg3PLCJZR46FKYZ252ZC92jGRdG6W",
  "key46": "TB7f59cpievbME1eUqjA4g9vdvAQwyPDBmwNuStxtwXiwvXuiPsPniTWMXeEXAfgPxywU1WNqyxYE6XSocKGKNo",
  "key47": "469ZZKkAmtSGiJd3twKKRin9wQJG2nfsFnNcNQXAESaDwWGQ9bxE9yrgNJLdLVs8wHVV6mzua1U5we2QE9m34kSE",
  "key48": "2Yw6aJgktpNjCzFH88TKYhTrnVaTNws8eYrXo3WgELbyPCp9JaHgZb6cWhwZo2oPEDZM1hdPqGz3jssK2gj5Yfgb"
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
