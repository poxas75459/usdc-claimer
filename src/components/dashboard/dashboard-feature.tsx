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
    "xvpWBMxABzsN5Nsd8zA46MeowxsC2RY6oqZGpjK5nV6J8vYGCMoDXPej9z4awBkiTk4LdQwjjqSyCDqFNuwaZyj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J9mczwQzt2TXC6pz8ERhUJHiV1JT8ueiM6rYujQSCMvyzk4dfhD81XfJAxaDNFGPupMYr4Bk8s6aArWMzCp2ar4",
  "key1": "7tRTuo8LZtbAikRYdhzC97wEuEnRKhrvrJEZHxeY9jT8rerwRgvWh7d6vNB994QVvNbgodoPRnZaSBmicAuQK8E",
  "key2": "5uxTaAU6gSzU9xttD4wPNxZGUGHkuqVvjtegdL7DYZXv7HyJeU3GQooHCK1Bq8nsiLYMzYQmVVLj9S2YiJ64P91L",
  "key3": "4GxWM6VFtG7cKXQRvqvSy9iHm1fYNryDhSV536hL2T6CWJywmhtRV4FZ32ht79GMgoR2wfmys5ufAEbANrWYHL53",
  "key4": "5o7BLbWzXHzodqnB7RMRHpsnjaq45PPjzzazgBrcjGkLycnY2Jy3qMb4S2id2ajRaLDaiRXu2biDWwXbwJgtyEr8",
  "key5": "25HZCqr1TqyHatEHNK8MaR54WxGPEGGqC4nivNaPaYXZPLMrAM8u6eTwstqKhB9cEh2jfFBDNuKXJKMqCAWNU5dK",
  "key6": "54hhvXmGQzt1MScEEUeLQr2CoAoQ6c3UJZFVtjnfvqvXfVcH74LrGp1kE1oSFf6y2p9jZyhbNBL1L6KhdpmYSapL",
  "key7": "2Suu4edq8vqdFF1qiRkhT37PCs5FMeFiFu2FyVfnAVKcai5QuFdGuEzPNJGKmiaz28yYuJyxYN54bKwa3SsAPX6V",
  "key8": "5joYTnAks9V5YHn1GhFrqzkGrCTdhuwexYsacB81NEpLqoDrcPx3m3BZLHgNvtPbYKvk48zQHcNbJ2Bcs1NLF6Qb",
  "key9": "5kyRzbR1owHvYxXGVSmxquMcb3SfkLcGfHtzVHomvoJ8Vy8vmMKY4RR8cwDDJ7sFUgRGHD6aVFnAzNDRYzKjC9Ui",
  "key10": "3wEJuUcqBou3RPQ8fpsA5baZW4a76m6GHwqoVurP989QYxiGoBkjLjnSUaK8n8UCmxc7TfNoknJEYzXBYY3A8Yce",
  "key11": "3c8xRvDWEs7UsLHGv3SFYJRXNFw3ZQXrWCRzbh3DqAYjfmiaHSXBRWbRvjSfPRpJY137841FVQZ5ZGdmvbm2JkLM",
  "key12": "3hvs5Z6sqxDT7FAriWFHzPDiGuGtSiSSLDcxxo5496tch9ExiQR5DyG5v5f45mo47scPr7aYB74pnbbSUG9YSTCx",
  "key13": "3wvWY197K633eTyKzN1Kt7KXdJhGDU84fGNPLx9gvfF8BXvbbjmJgETV6oW3637JSoybGxByxPqVv26H7vTwpfUu",
  "key14": "3LMYUmtfsbYpG7N5YMLfDT4w7NK2S5X4HX8MeWwHkybZCjYKxkm2SMcYgch3fUBGk8Du6KKeLKGwYct9HQq9j98h",
  "key15": "28uk8MJ9yTD35DMYcvGbzqxwKdYxM1ygfCnDN67wurjoNUoAaqHoB8Q8HyPGruqzeoGpSMYZUtzmJQhBZMTu1VMd",
  "key16": "ZA2Kv1ZscNEGRbLmpBqXx7RLRDGevraxKJvKQWvfnTm2JfSNPxFNiM3eWa5xxyPUtQ2DjKaoh63RcujyNkfGwgW",
  "key17": "3BkEsZTg1oz5exw782vuioBRMdWgXgWuzcnGqz9bSMEaaAYyj7ByHxf4QnF1nRtsj7atnbwQPHSCjQwz7rhU91uy",
  "key18": "2QAGSPjQYuGLjZacDgvUc79oVueSiM33RyKQhxTEy81tXKVhkUWrBT89DEGJrPnjc3mfyf2z18m7BW78wHFPshbU",
  "key19": "2QK9FScu4a4p3pcAwgoMYPbnKdhYZqZmgxN6RpRk2mSjzGvqgcP7e5wQfJdzdLEKeY383JRv7qzC13dGqab6oyat",
  "key20": "23hDma7PMvkE87LTPVZTvzLi5ms6jjhpQYHnyCzC4tsRHopC5C3NLWykxtiJzdWjyp8VfY1kYhoU7rNe1c4Be7am",
  "key21": "2SjFwiFhSLVj7x2hbTmgLMxCTzXjmpWezUfVuLaTTbKmUgTMaf93vHJpJWGArdh8tb4W2ALywHJz4RGD1cdyUbdP",
  "key22": "4obpfWDyRgPiZZFQCHuJEkm2xrzfxjbGZqgxmzqKbCjC38ud4wkHhojFmEsKFumxUj1rgPxJ3JnXAnFq2pP8HZNW",
  "key23": "5XNQoqn15HURD9M1gS6CRn9kou3sVYWTjRZG7GjYRe3Jhg5AjENSgWGqK8jC3mKTvyd8ccTvsfoyXJ54ZQVSvgN",
  "key24": "2TNzFv2Ff21MEvuVT6hLf7Q1XiAUjCgqWvKbNxNTjBKHQSvYcLCrVJvQsnLsnyv4CbXS1TB6evejTjEhfYruNVnQ",
  "key25": "53g86FQ871TwVZm3UNW2dSYpimbyuNdHF55VrkEpG1ZuC2pPhC2NFr5VBk692fYenaXCLz66FEg3Ema3RXFpXkS2",
  "key26": "43zVpbYbWRHhnGdLtxXVZzaLCtq8uioLSxffgnaGtXayhn1sCW6wY5YJ5cDw5BSLADF2aX7LrFM92YsvsVrtkt1t",
  "key27": "2i3m7n7EaFr1fSyX8fp9kAyMAvfTt5mC79tVNmfG8LBRat1eWhvYHi5CRb1RZUNzxAy9bcrqxxYwhYNPR7MHjgB8",
  "key28": "2akcbHi9Ek8DeTXXwX3XyXdpWvWvZVwWZTa8KZC5Y9AUouFxYpgtUyy4FNLZcfsFyPKGDX5DtyqDTuB6PtFarHgJ",
  "key29": "3rwHGbkMFtrCCQsTZKzHzdBVVEkAeVUwDY6p3QrUo9WFiFTX6KUMQWqThCdHTbgDfsj7MkwSvLUXAWHaXqMadH9a",
  "key30": "2r884fv3Tz3sCi1PG43M7sKBiKjkdGGqnXJWFEPwpSP1K6LcYk3ysMpg6oBFQfnAN6bTKdfuMmvWRBgdHdcHEqau",
  "key31": "5h4Mb6HzWFsQxURr2DxYSeay3k2uE7ttxLir64hYWAsWKw7vSzKDisUjy2skHKugj2o8aegWsUxVQS12Lxv9yUZQ",
  "key32": "Q4CyWAB3dNrSAbyP3zwhsVa19ZJ8SQ5BJ8R54rj7zqYLFwNsyKcC63tMwoLZBsQ594Mc1qQQzfezPG3CAt2jXeM",
  "key33": "4MGWWzsb13cujs1qoFT6VrfoqH4JEDVwVU9JVp3vpwSvBNUDVd3v7LQvgtz5FwMB5Ho1vgTUaM7itNypB2dhEHB7",
  "key34": "3XrZXjzE7T95GejVjL3vEQH2CDyP6kxHmJs3rvEastSjJyEi4oc9ECXJ94MCrMTrERv1Jakkb4FWT6Bz1tS5Qjjj"
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
