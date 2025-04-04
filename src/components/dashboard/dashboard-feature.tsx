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
    "2Cma3tq8KbQqoRsVJrFs71KH2d85VB9Kj3jgLVyi7EHhZkqK9fy8BfbxkDnaHm89Ke8B9z7Ke8eje9o5CuCVdVPF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R62jFGCJ7Vjrcus4KgE5bdiJ7V5KimBxuBE78tWv7feRovQugbMTg6U5k2qskzusirsjhCv1S3VSkUtBjg4MjBE",
  "key1": "4F2VcPbReAVpKQv63fMXx6J3peyE2GD8U8SeHwxoU66zvbx85ZeDJDi7RYKuB2Y9aE4kA713v3kPDbM2sLcj7NiT",
  "key2": "5uZrLZij3DkEkFojirZWP2tXi8Y2jkKmZTrsBqbSEh12jEwE9YT77U4GD5KBc1ShbGtYXQBUuGmiiYwFkttFJEzy",
  "key3": "5Fypnq2dsVLqQyZpUACjG5GpxNnzqEt2oBfAjmEzuQ9LniGd83cXgVQGv6NSmm2yYvS8Ye63NeV3qGF7GzHUBZym",
  "key4": "2JMqCi4V4gnbs6tJAztZkB7ZW3yWuEM7XSysK5dv7s4GzrEi6U16eVdXGmBpKHYq9hN1jr9L2KC8KwB6WkcD2jX",
  "key5": "4rWytawnTm2vJ6t9gkCHEMXyhd9PMP9hNwY62wKY2aCmxhQdZ4BsXYVkVHvVnc2neuheGxTRjGutmpm7UvJwSLAV",
  "key6": "4io181YMs7vgfrX6c7EyBQCyb2priLTboZfanUhqcTRSu31y8ZDZ73ziWo8tQy758eqGTh9PBGNqX3K4v8MqZjmb",
  "key7": "3txuCshHGStPNBeBiKzJ3vwV4kqp5MqvJJR3YiiGV6auBZsmexFvEz1xHCv8fYF9jJ9p5cWSTJuyfWhoVQtAjpwY",
  "key8": "3Qc6VNiKoXJBaRNBxLZ9CTX4y4K4fLvzTXhRsapBaPwU4dS9Hwaid9ZrXDwbyjxThmF4xst5JyTHCN64C5batcqm",
  "key9": "7nMWgvKpfMqNa44Ur1L4VApMuSARJ82Um5sYajtZRYHUwR3KRiABFWykQbCyS423PxpttcNpbdgtBUGVyzUv9Kz",
  "key10": "3F5bPjzMHuDQJ3RQr8ZvonYx5awD6oRJEjbsY2FUCfKHzvRSAVEy6K6L2i5KGzqa2nU7Um47SywHhcrftA4cwasF",
  "key11": "5y8FMVtTSBCrtxr56NJYScn6eC9ECyUyk8tkHYuh6sHRYgyWvKyThbNpnKwPvc3gEfGbfxGJi7wB7Wofbxnjd4sC",
  "key12": "fscEWngRMwUzVtkVPLdqFXhUdudWLg46ikuoc4wNq1mnPkXhWW33NWD6QE9keTgAjWDqVxgqaTDYdpAMqvrK3bs",
  "key13": "3ymbAwDNaYdcrSmuEeut6BMLUDRByc7Gf1hHE7LHKYiXsYC5ThTvgKLUGHwrwR3S44roR61yK8cQ3Nd65hNd4Z2h",
  "key14": "5NqxBfVPtL6AfQKYCh78jfKPkUNVvzShq16GMfn75yWFbbhB4YrJcVr8rzmJZrVb5e7WE63x477GWvoEymF7niu1",
  "key15": "3gmf8zyiWsKXcvWwrcKcCr4g2KT8Lfo4CpfhPjd6U95p6rHhBjii65AyauA993KdwYMDjF6EPAbqePtsdcurrp2c",
  "key16": "4ENbTKuFHRooTp9UNdbSp83XtXEe6Ua7y4m1UBZwUQspdvrH7bYSysxqJd4iXt1pRQP3bLhvACEpFRETAMj5chFF",
  "key17": "2WtqgFwjyUtWANAfm9kmet474oBgbAkbhiWVft5e7wRCxLKtnNSDupmVrLvu2dhgLPKBpoCvNFFBc696kBAiNpyq",
  "key18": "3iXE3iafq4iw39HxyWrXuBR3ACdhqZwA34u9rXQeGpBLK9ojorSHVKCS1HisSirfKx8B5BDLVKaK9Bt81GnQNgZ3",
  "key19": "3G16Gszty3JPqAvs7SbovWG9udkBYsPo83q3PtMcjfNWkEHEQ1wKuCrDFjjqrRiPW3w1HkyC1WES16b32gmuUZTL",
  "key20": "3YovKmBywETcko5Brgadi8FnLvppu7vREbyjx4MZJBSj9pU1F3kKpRJq21UPceocp8gnaWxXhqLL339NuaeAfunV",
  "key21": "5y3tM5V937MoLdssgTAUaBkUiuS5UfEdEQCzhNNob93ndfCFAVdQwNQhhtMSQNu6H4R9ExSVv4NGTriEaCYQavPm",
  "key22": "4ens9wYjhuqo4TfqkdP2KNdkYWJM9Lhqy2Xzr76vgk7WDXGKsQBPXd2fDFGTPXHYQnescGE8M5TEhBE6HeNhb4fi",
  "key23": "274WKZ1f7udyf7gWPhXmRzJcy9xjQ93XzVj8GSrLmQxmD3ddPCiveRJ71SEpRH7SbqY23nykg5TzAQCGALHUU9D1",
  "key24": "4chrUZWkD7XTg8z9HsFKbjiMp8VAdnR1sZZZLNDRm2a2KV8A3RRXMPjKzXj6wk5aUumEFdHBd5LZNHzUTXN789AQ",
  "key25": "5FYEPDtxA3pEpGk3uXGEzDnWKZDSSA6zrLXJSp1tc3UVLD89ohF9NaBrLSxvunLAqTWPdwcuqk1XocMRm4X62WKC",
  "key26": "5HkCo2A9LeTcse63xjxXcUmQqypk26fVs9fzP5sZ8j76GG4n5KZY5yu6JEQhmXdNM7oUakWd36ttA1ThY3dTDtVp",
  "key27": "4C7LKoHWX2P5LTD3ckXo7SjHAU54w7hDJNZ6KEkXv61uwSDzKse1wZh97y2sCLFEKsjfXbGFf3yFHiQUShoGUmnj",
  "key28": "2heJZZxn3DwPVehJTLG8YxkkdZEUWyz1sNLm7bwyk8Hi3QfjeHAQEeQxMAzd7AhVRQkdzDefrywgzJXLQKYYMjz",
  "key29": "3oAPGbnczPGvLzN7Lz1oD1PupTA3uwpdHQcSMtX4U8g7Sjpq7fszA9ZdTmyqK4uTWk92dUQcJctYHx6C5oAzjyYj",
  "key30": "3Ld1szJMUHsGxN25sMhwUdDckd1oqoPjbkULrkFfcLWQyLxvSGSwHf9QkmkfLMaSYPPFPXxf5cWnUztiBWxsjPzS",
  "key31": "2ugRKBT4K5vcDw44SUN45oaxcBqXfWNUVfHsAD1KQGDo74qCg3at5sErsf2BNu4oGgWb3u4xTmaoMHqpntvJXsWY",
  "key32": "3y45tVJJgrp2gCmFYzJceLKJ31pxGzouze5ssqWDeeC92WNKNJFMBKNnLVPpKkg62ycdMC8NWTwtB3UpoTXpK5yM",
  "key33": "3RT985DqHQWZwPF7nn1f9QRkRsmHXZUuspEGveziSZZcaPHkNvp1FGJqCqY7dQ3y9Ws5rSDDqhWyqQSNvXYbXNbD",
  "key34": "yRrEy3ZsB2MkQoCrX6o2PSaDHQ8UgvcvETFBqSXqCwJdCG6mrC1E4XL25eTigwLr9d7RkhGWpgAyviXNQZwUDA5",
  "key35": "4NXZbSZZqaXAoU5RsP5iP77ecyEQYsNEjPwMKr21Yz4EWDHzz3MSuP4S5HcqcfHwrLTD6XA6WRTL2seUC165hzaF",
  "key36": "4Q2BsFaAjQB7nkSjuX2qPTc9Pp2XkTohjPsXwWdA9evmhxSSGhiWRRCyRzRZEwZnfLy1HGFN2F9Zxm41oqbGzLCi",
  "key37": "vpg8DfYxuHkdjXDDEWwFyN5fXTepM81pZ3zjzEZEf1pu5qVGDjfjZ1h5s3jb2Ez7byhBWB7CFCMzEnUtGssYV1D",
  "key38": "2pKBR2syAKyih3rwrae2yKzF2k6MDExLzFw49ESrnhi7oD2ssFCPhpLQzAFvAjNtypHbxFVJh8NjyZV5RrW3wLba",
  "key39": "2TyHEFT4HaxPcDxUu8GatUFqaVoCEPGgWfWskhCpG1yRrv2JNMqQZMgVRPo6a3pMHt5eodB7cCDjQNC6oAwjzPXX",
  "key40": "2pdJHdiP2qXikKGKeFivRaKUBYd3zfmBzs7Leg26fTKfEdJi7VBzgHa5fqumD58CL7kVDwksn1QydM93BivfznS7",
  "key41": "5NP2cecFkRLf8FNxtw5nQPnjCD27M3h7XiQ9MmSCjxpimXmZ6LjEGob99oxBXRbaMP7AMcmwVpQELUBkv2cWdmEm",
  "key42": "24HzsRM7cG9xvTLU5jx1Bs6u7ACs54mPLyEsAZbNHuYE24CZhtCAv7X9eMfFEpyckHweYNnFTdJgJHjxKVbvehNA"
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
