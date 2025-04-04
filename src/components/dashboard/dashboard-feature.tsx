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
    "4L1v3oKnHYLHf9wwhn3PSjC6Fmx5LT1q7obStiE5nKoVV9GFoBy9ynjRRhJWXzFz1Hfg4kJ5vKDJrsw2tzgmTKBM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2htQNugWBf2rErx7yQ9BuX6mV32ChCNf8ATi1uTg42FvNfhByYZs3B2YYenafBVBGcBBFX35Rq1hXFgztcjXjo6n",
  "key1": "3ryPMDRfThLSvveBAorQJoS6YP9ia1UTzRy19V9w7rK4UGgTf2XQTxXgGmJhjUbUD9QvgNo1Acj1pmEZFEgC9gqF",
  "key2": "3FdA4ArNyiVpy6SXGmcur2T9TJviC1gWAuxMHKw17vX19SNuSxS6wLWniZaAPgA31krTHHcEtqMi4BZggK4UCVUs",
  "key3": "5SMqsjTgQLFkhSZMdxUpT6oVZEQKh1ZtNY9TchQ6cp1x1Jzni8knjZJHGCnzSUi4SyMpJdbR9rATUgqgshQ5n6oM",
  "key4": "53iTR7MWjZNZ5iTGZzpfR5eQsgXXYbHvnDRtxMrEqhZWgLym5vB5QXWBhoh9f5eZ6pxCntznzvJjRyttabvAqGnE",
  "key5": "27WaV1UyB2DELvbP4wcLLiVCkFSYCBdBev85ZK19pyJ5Zia9HtbaEThpMQKtM69LQdCXgtXLoSjucjBED6uBVUEY",
  "key6": "eVDBRMt6CURvMF8stXrSvhuraQK11xpiBihjBSKZEJjyZVQS8NTGgABd421QLTecDtmVuWAyzBB6ko5fYatcVH3",
  "key7": "2rzV8S4FsCJGw95hEvNuYqhotMnSmLo9BeY6PQF69W2oH8oCC3qA9E72s3pmmbLUCwVGRepEJVEmpVhRz7WKN1X7",
  "key8": "4mvC6AsR4VrCDCWYjp2TJPMSvXZ8oDeh1v7Y3dTMatkcK6JND5SGACvzaZnb68NqfRCBGUb852wb22naZq6AK1C",
  "key9": "4Uum3YTyz1BYwkTN9Qwg1wk7FgzFsuzJ7tJeBWsxp3dXCudnHznegg1wWE1pnpANnnmtYYstWSxvCwcSXTvnfza6",
  "key10": "hXnX2ACPYsX4u3JU9PxPWVTJdqP6Nt2iqUXsdUAA4GqKPFF2piLezQTwCeEviG9CBQvXp1QPmSKBABrVZHEfBqf",
  "key11": "4TQyvjzkwXXpWLMST4M7QoDfMjDWhhDWdJtq3hwV3B9gGzjfi5uwNDnNQENFVrZunjsULnrdEswLmoaKPHnUsLSt",
  "key12": "5wv7tXmkrSjuqajirri3Uw3VVAQWXqw3q8N5fYHSY5ViZyEaTzPHCA23S8hcrkPBKDU6vrQK77yypShDsQ3ZLgbR",
  "key13": "42AVCRpdQ5Q9m7vp7CMX7W8YrR3dtZjbZym8GLtNV4BtUJYSBa8ggmJy8WRQnvfLxxQww6mYGn8RgqzWEYaU5cSo",
  "key14": "4GQBBxEh39ng1nSo4v6WCbweU2fA7ZqAe3UtAJhidhAjaMGXVfhdHXPftNcyTSQH4VfRiPxGSwmgsskv9AfB2NLm",
  "key15": "22r4n5SEvJuSNd4PNhscB43dGJngveBX8bqDfgqynKQeKxVpDekp73Unnuffw4W1iigvMrUczGDNcWrGNpw6hHky",
  "key16": "4zrYFemGx5PvmzTgWPqDz2ByiZre3M79rpEKcJCSCoYiRrXRTSMMPi1KfvhrQCAcPWx43WDTruLqjuNbGEjLwvUy",
  "key17": "3yvVhzrsSVnoWd5qRQqyDRXGgiCV8LL75h9qs76xS9eXh3YQuJ4z4Cj1neQrkmfJXUem6x89MLjp4U3HikKSMWeZ",
  "key18": "4uhfRqfeNHtGH3phBy4Td1x4dXgQPvPNECTD6cjHAcHKZM8dTa6Q28hYJG7tPjF2vuF61XVzDiMsWQ7UqdeiHrJ6",
  "key19": "5RLijCw54iDagnRGQphfHCskUxK9rDFENHwSzXBvPyghxKSB1QjFWPNs41gwkb4NQvMkwPMHBB39DYy9KmqMJdHP",
  "key20": "3SWtAaRe12o5oQKCvn3oi9ttuhCyyZo9AocLmdYG2eDa1TKixDYmotnS2BYhjNGozg1KHddmEGevQuPUJ5e5MyvG",
  "key21": "5z5CNJwNGUosLprUQnWB9mWbUsBisFL9yZnrCsB2VcfLwfhEwLvaNxCYp2kbb7aoTyxHZbBhkiymDGs5kF2MARuw",
  "key22": "4PxJR6CiZP2Yj9nPwsmhj51zFQv13E6x6xj17Uchb1fxnJCaDyur1HycTMLB5rKLLNYKfdvMWYmisdeX38xCpdz3",
  "key23": "3vRz7AgKkMvnFv9WfsbxeN5ZjKaN35Pe527czXDaaGxiPbDPP3dZyjLnEJhSiHArU1tikybJ8TFzoiFSt71WyJb5",
  "key24": "5E8wov9vgBJKv6wJBSJu8zsDWoHCBGLe9KJvu8368SK7Uio2c9xRgi3F3yAbjToR7axoadANP5t5U6eF9T3fMtJ3",
  "key25": "2edWjQaxQC48QbL9pQtd7VWokzeG6GaTMmJzEEpjk6MYbB1qTHvzVwZQShKT9t4UuA3cARSNBWmUCFZLrHoFgtMG",
  "key26": "4Scyt36j39XVesJwJBTbfVqK1Cr1AAyKeM4vhmSyrSdrpzEJie6ebnbnnpW9y5dhGJyx23umQbUrjAPmgSzhqwma",
  "key27": "23bmrcw9RSZUYmtSvmQBXbjiYxBokpf3dEbVFBUGr6gwD7wQNqxV8Ar1KV43b3hsNeRHwaQ5KZsfGpYzeRbkfWrc",
  "key28": "2n8oJqESaDf611532vECXj14zApGf6gJ8qgmXu8jTB9sDSmpi3Uw6u8JUX6aeBeNpnGt8J5F3Ft4QoBo9Dek6sCP",
  "key29": "WaPD18e6TmSoaUJ9bqbVgnvuxXppafYMV8ANgfy3kFPnPUB4wZNBhgxeDLsykAytrRdfDHeXwA2QzTk529xE6NW",
  "key30": "2p7hr1TdJDLMyKNZ3DebnHFi8hDYyLhzg9Zotbaa5tPUhg5GXhB39jxfvyYeEQDKTHXYQtjm1PSMrdcvrYaNCE94",
  "key31": "L1hxM11j1xdHsherzhHxRnqyqMfuWvAvxruCaWFVw2xrBChVmiv2pZk1qLRciKVX2b11wNRLP1xKi7ueHiS3Ba9",
  "key32": "5ybZJS7JQRqsrsqjHm8gqDJczSpnesieZwLpoDMT45aZ8MWTsnxp6nDEL5xNstBVE2fDL27UsbEr6KrQax3Hu8GJ",
  "key33": "4n9B5N9UNJtJSiR6Y5nT9v81jXisvCbnuBvxRrhUgviaYLW4CF6YBkTrCLKuMeL4KKpsBNxwZGA7FdfWMj6hUy9c",
  "key34": "4vV1bzxzzRam2qPYU8BvwLZeNG9Aa2KpzWsxCcdT9PZiFpYW3KcKwFroxxd7TMX2yHf4FXXxJMibTASvUZZFfEdq",
  "key35": "5NrC4gRhZ7nomDgYECFa6BvwbpaYVYweYY9KzynVXBZ1fbNiwdG43UEJ5H3MmzAvodmrnJyNBBwhrBJhQai5NWQZ",
  "key36": "3cmYHtotGRSQwbB7GVCyaijxJD9tEX8U2zojq9K1eXYkmjGVWBYDSiwdajPZa383jzdV49jkkXK5agFaCHeuyhSS",
  "key37": "uLvMGbdaoAG5pdrZfRssvZCmZNaUxwVZaFVkerZE88VCsqdyCwbsfXErLupAPRFgDkJqbpXvPdi1n7AQsfoznms",
  "key38": "2XEjMRRaviFc2zDwajeyjMoyKBD63CXGseDq5GR1xpubDzhj1FpYmM9Ax3Px3dG2eokwdstRC1rQBP1fN6m8cGRC",
  "key39": "dyN2ZpzfBL3mSuuypA7pRyMQkb4XJGNWJBarfdLWPbdojAecuT6uiwLm1UAatZuhuwWb2dXt6oXi4vWyjkkefrw"
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
