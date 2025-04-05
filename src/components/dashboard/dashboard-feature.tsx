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
    "2CmYzoVbXvX8bBnSmcysbcjc8FXaeyMJ9aeVd2ynfWU5r5Q4meFC9rDvYKSDLeazKWXSRmwexWuSFcoPUHsLzZu9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DsfZCBVKrbvhCGWXvkbBDv7jmn4GSx5Foh7tAcgKs7cmTYLaeGJ9bQijGdUwQtjoQrjJ3sPqMVA7gB8S8yTn8tc",
  "key1": "4AaHoAqPq5MMVp5vJuTVX8aUXKnfceHam5YNWv6rcz4HCLTCptrN7dC2HH7uYJfwpGLzoXjjt6wBhnWqztac84HE",
  "key2": "4fgyQD4JLDAoq8Svjc92AqLArMEiRkHzg2YKQtH4dVf8YF5esVQc8LZNWLaGD3DgCJbBfhUim1qpL58DUCr136Vv",
  "key3": "TR8VdGmDhB69Ti7qN5q4QTXmEL8XAQdsKhCo1uwAh1qNvohzdZoxLskgcJTLi8mGYdVAvXjgdKbfa1MAC3C2uFa",
  "key4": "464stk74ByvPLUc8oc3h1Wp3SKRz8cnjKosu4VKS1GWEAwrESZyjjCbXAwEML3ssxDRudzNwx6jxfWiYins6SZF9",
  "key5": "4nt5WC1vQVx6naVWd3rPvfX8VKLLEUnD2988hxVUhUYDe8QfrXnraQz4JBudU1SasmgMPn9FtCt5UnCMsd37MQm6",
  "key6": "28LG2Cfnc42qEtFVHUBDbLYS1u1xpSX1FSUwu85dX3U3tcGJPxuL7kPiGAeZDiV1d1zaGHUeXGs483wciF9iofet",
  "key7": "4FpMUcNnV2f9t1hj5DdfKd81HqgyDjwoDrtYUbYgeJjxs854nKLe8m24DTLCCXjHsAjazK2pgWiTCidAMvXSa3ty",
  "key8": "3Rhzy6pV6NKSmDvW4TsjFF1CePrufxkx7cCx83RJYq3uLMb2Ksf3npHurUQJKPW35ibrC94AauJ4nC1MhFg7GQMw",
  "key9": "54SEv71k5BZ2amycyLk1LYR7yL9mQZTgW8TdePHK6ZCYzKh4TatDZvTxuffjMpW7q32ru3VFBgAc4CfRbEGAbyLD",
  "key10": "4iuSJoqadp7zW4SGbCnPBsoWU6fovjRUNqXzGpRHzuGb5Ub92mxJdkRnBWg1arXSbKs7pAJWwDW2FrSdwPgeXtRb",
  "key11": "3zQwRHt7fKQ1oGw3ZYKCaSm3Du69e1C6mbi5wiyhqnzWZPkLQJiibUkFrTtTUnGB6Vdozsa4hMF9hu32CSF8mohb",
  "key12": "4467UzqK3G6xdaoUkXhc6aR4bX15UEoJRU49UDRxaVm8QsQjoi1KBUpiwsJkGBS9bcCtPtZYYSUsYAz2YkTp2hFN",
  "key13": "3ymWpYrFBurrCWcrMjGZB198pYN8nDG4Ch9QHQ9V1duEGfxBdcoLwxwu57P1YgutoUyDkrx4grXGPzXqM3vr3Jkv",
  "key14": "3V1skdXHU76FmiZXxEvF4whbkdYUZSp2Z9VTGhnAUiT5NnrFvQjZYhJAsnjaYw14fB95Dhqx67vNsTBgwHr5DG7a",
  "key15": "3dHzTuRw8c3NHRg8JhYVuRwhb1rJpGsWrf3B19qfEworqsKdEPFThNTnetXhRNKk2MaTkqyg2NKhQ3KhjxUgYL8D",
  "key16": "4tDfJzhstX4jhETyoAjMi2majZtzDJJRT63aDEUJXFszLQEjxzSQ54nfU4XF5vYwQTdQuE1YBnbGWETBEx3cPEnt",
  "key17": "btK2v2UjQrRmwebPZfjacaW7tahT6DMGqDEdkE1Z4t5vw5S2kv2KEyESezpu1tX81CN2h4WkypEhzdDMaq2p7Hq",
  "key18": "5VexexHHwkEeFt3k57vfq5TcSoNVe5xfyBnUeVxzjjX2xEEQedw45uif51gnHv4w8Fd97i6LDGYV7NeYtZaKtDC9",
  "key19": "5yiYk9zQ6dZRLtjkwLrKbhoGq8dU81mZRVw2gUMznEFNh9BKgXVs5k6kESa2rBCQ5PuqboVspmJh3qSmwDme4mMi",
  "key20": "b1TY4xYQsZbj19z4GYVAdJmMjvZH1SRQkYqapagdQUwCjkxuHc7oogp9uUoGA2sf4r1Xsyo2YbDfNE4Ncju1NLs",
  "key21": "3g3PZ4KShrYfVNg1gNu69CAH5BdwnTtXinwvatP5u7huqzYVpZ7RRVaP8wooTLH5nfxFRvBhA47dZGsoPCnRfHN9",
  "key22": "29cu8xE2Zq6r4w8Y2ACN6ParaMEJ1UJrGAHqeymX5HHAZG16Hu1snFGsLYpkbC6WfTo3CnugHKMyH1u78tCvXdFX",
  "key23": "43Ts8S1hbHUL2DChMYDQUU2ZbSwQLr3Kv4J6maLGP2hxaMeX3bAv9ZUGGen6RduGxutGZ4Lkpkk8BgyypWTybmm3",
  "key24": "5opSe1knGBn97LScTto8z553gDFcNbuhoGhGp3rwhijRXRFmDhkWSQdytAsYJCRYG3rjYgZMNcBFJj2GCLBSvkqS",
  "key25": "5nAN8RnsstwvBvTkXSiDiojHP4xGCg6syjoCPJd3hPYsVy8rZuomFf46N1XovNoz3WbNALiYDYfR6Ydoy12CEWmR",
  "key26": "3zfNeDthbZ4JXxKA3xGJBvNGGvJ4ATpEZvvegxARhhKDC6f9HwyusgPsim6dRXfRQKkCG2VzmJLFHT9gBfs6aWv9",
  "key27": "5a7xXhYeDoG3wkc1tKnz6fAkjGgeHsEzM6WExCJk5ffUzYa8n7vxdAfAddcZeqPWebKTGcnmpnRauXgGF5RQi21d",
  "key28": "3TMcGowAWi7J1u5kMCewJ9deT3HkgnhrDsccwJSzarLoV8CpWHxePG2njKSznPv7fRpxAVEBm2UBoTdGWZv52aNH",
  "key29": "22ZejHBj2eYxN2HiPn16hs249NdGsrKjQtUwc7f1CZrkPG6QZhjiQoczqLCHWaJZ1YbnnF6fFhq6gWPMm7mwVYbX",
  "key30": "4AaRkbTDoMU5vp3XjDEXz4Ht65VCV9GLPRR3kXFLPkWTxFe9vJ34oHXRtawe1pUBBPjaE1NPeEsQhKFVUdmRwUud",
  "key31": "PgZn7kBamaq5UKqx5o6khicq8C8zMFYyjLqkQ1XgxDudqtzNHgt3AegWoFFAmNiNV8m4dgkmmmsLUJJEVUBSJH8",
  "key32": "5KFR6i8uz9yHHKR2VFRjzUoW1ZXPdMjYEtE4Ph6DTupiVmcXwTMkWdeHn1R3ELmMQTRnNiZbo6UA3k9zW9gDzgcD",
  "key33": "2woB3K7ZsVm1dxMHMEvwTH3bBW5d66PaZ65DP4HwDwTA89YyHM99w7LsiL9tsq7fbqDFMmJyVVPK9oQvzk5TjT88",
  "key34": "zR7KdefV3JyBrdPBeeSLqwfovAqZLciqQ6t7f3ik8xd2uDrt9pvAZnvDEPrApX8tKTsSyAdAV7aS7tSUfqe8S4W",
  "key35": "9YHf7RCsUrYyAdPguQmRVJQMCPfAx6yUbhW6hpBaqhNkLPw8Cc56KWax7qRi3uyiCAffGSytNnDzTrKm5PGPGaU",
  "key36": "45SD9KnYMnANd4XYHnB82f4KgCRRsFEPYNVcUocV9d4TRRwhUerk6o35gCxf3qt6YbYGJ2hvK3n23Q2HoVDr87Pf"
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
