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
    "47W5AhqrV7JavJfbDPqTmFLPad5oddjUfbo2Ev2dnWnrpiyQirXCMTa6qkWe8ub9ELc6cqYpwErHjRFPwZZTQaRC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uJZU5S3Mr33AnMNwje8TrpT5sbCAhfSY5xHrEUAKx4g41rWKBqWehzaQbn9QNaMqTWShLxn5UnBQYgUjnFKRSV5",
  "key1": "3fcwfxARYzGhp4FKQMJpMCdGSR9REReqpsfD5D74aJYCzC7jEtUdhKRchzj3rgtRwyArCzUhEFpUWQLqVM9kFnY2",
  "key2": "5uhbqLkYF8kdMMrzhxFMFjNLDXzk33jonUuYohNbt4vNHsNprwwSST6SQUTpxcQ8ZfVZi5vmPfAtAp5sjVf8CJD6",
  "key3": "2KobMFrLNkTSNGEcVrPgcf1zxLu7vWUZBzdpjP7xG1b1VUEWLv6fLnvPFf3nLTFe2n5ThffJDvUWob3i3oGmKtWE",
  "key4": "4CfFD5Y2MHELe4hh9RVEhvLdFBwJ9ETDtc9kFQsrF8tpqbWYrxyY4opYkvf5MSDBL3LVU4mmgi2RXbe7nyBV5V4c",
  "key5": "3yaFA4sHg4HLjeKxsmiktpbeMJXZYFpveE3d4wtrXpLGuAfPh3V9vgGNVLFieJSQ6Ka7xDMpSDYztbqjrHrBVqDq",
  "key6": "4nYwyxDEMSZLmrjnDwTJmK26Amx2fFV1m71trHPQd8fv6tn3j7f4esKRscjcH13zRtS2ywwfYtSFsVcpLtSFJvZF",
  "key7": "3aka6RDvehmLAiqdyYpt1jDYf9yZLr8xc6QaMzftMq7nwnA8fX4SiCBFPEo8yooSCMTnKSayMmkfaYUQrwuaPmRu",
  "key8": "54MXcy5Vc3NjzHUqvbWA82BVRZfhxSKscVMtEPMotHHeHREonqgF2GhY7KdDoXXGtRE8LMVrNHSuLRpdxbJbWzBi",
  "key9": "2n5WPR7W9K8nCsJFLCu5iLGmWGqRzV2BeSZckDmhv9EYfgN92dcL3ynEBcZUB8rEMzsZZWGMFG8EWsPQzCKAREAP",
  "key10": "fDAPufv3rdAqTjZDV6osFCQknBBw68tkXeE2nCEbxxVnWQTvBidqAK5AEA3birDD7GKWNa87HYTysqrzDHTwDPa",
  "key11": "4aBhL3YdAZ8p7N1ZYkKk9KmS4RVfSZsQhNatj4S2eyguhfEGtKUrVZSRUxbMHFNX9nRE9q23Bardbgw1uSD56EjF",
  "key12": "2Q5jhWpHH38VvBAkEPWYTzwj9aVZon9Z1Bh8QxpY7RfX3xm2vuiTmqfBfgBpjNEGhjbZ9JRU4YYdp3bWFWR7kmyW",
  "key13": "66tymau8ad2tMSxRAT5wGQhwhhfVddECp3xnS4s9bTX4mN9JfopH9odsLcn8YweKHaS267ca98fKCiSJwWyGN57j",
  "key14": "3LNp5WWaYnULsLxErtxT2kQCr5d2oB7RKepPw1ASohUJ8H55BFG5LzsJm3HLxsvndKY1crg1JRjLLibsav1UPvK7",
  "key15": "4ApnSHTX34JkuTt7B88acTMoU6xaiAce2TrVi8x36DMZnikKDgzZJkuL8DTaV1KsuLJ4Y1ndt3kT3tKCiWzF2evg",
  "key16": "2nT7To311gC7NwNgDVu1Js7hLrUYMoYFU4rzfBMm7VZtoCUMpjFmu8eR4BwTbdaaZCYzdDaDua4bcpzcpaRFzfe8",
  "key17": "4kiLAkn6UEs3zsr4RsvRdJYrP8ZBJj1gPgv5rb9bfAygSQVTVZ6HCe6ZQCkLRCwRC9anxEBuYUPfVYKcCB3UGwKN",
  "key18": "54ySTZPwtQZf65bidAEvr8GiUCiuo5M3C3FAkMWTaELkp7kNKJiqGiNHopqA5pRG533caLzzhsUfR8RywnsvBS22",
  "key19": "2yVXxkhoE8pSw1vSbDZuna3qX5oPGNwC7kuCe19CMTcAMVdovTCRievpdrUHWC9qTiw4NpoJSjqPAp6brpoyzYBG",
  "key20": "2mYmtiw1w6TyPgvHq2AJ1tuhTqxdx32XDHgdTxk1D4CDoZCuJPQ6bHoMAe2YRBfhCc1iBaDCoPsLxDWKv8tZf9w8",
  "key21": "3TEnLfzaZGebri6XjcnmDmx7jzQnCZY2176j343Sy9dXGVRPB6XUMr4EArf8iQrpYudYeua9HaLdDFKufSsRWf6Q",
  "key22": "B6YXeBmqx7FLNq3a4CKmPUtYjwgvLozH67cEVtpyxt5P9mKCgxVQen8bR7MNSbfuwUkzTDhQphw17DkZKPKkXPd",
  "key23": "2ngQra44ZJ9Zqo5jYUkiBzKPkPAyvUWvn7T4ccH3fA52gfk7m1uXVnP6mRRkmPsLRmqL8miEH3eG683ouaPGSxtC",
  "key24": "58ZomTy4Lu96ipVj4KZf5ewfRyiZqrKHnX8JEKR46PyoRo4LMgQ3P8xMBCKrzQKZQfzLKemcKX8xpK3cbDMWnzAQ",
  "key25": "36u7h3DjSsQF53FTjcxVw5SVrRix2RrqhZRF8ABiA9Rn8X4ZLcNBs4nfSdegtyoFqqFkP91NEi9qsuxAz5yFqpij",
  "key26": "N6ib3uhnuQKkm1qB9tVcNRGvvBnYQi9TtdqwPH4KJueQB878EGBk3aqh9KJDPwQWu8kbL454vF7v7KTg4uQyV8S",
  "key27": "7ipgMSzYRaLnugC5dvkw9uQQ8GM5BBfJt1tYN1SWNKjkd8K6PFYopoHcFJxQcYNswuqdQJQvLZyLm8W3eFkXTKL",
  "key28": "5kQYXNWDi8jB4nvabT59FvbPqFrvaRW2Pzo5xdSSMfQWpfH9YScnCoxiTeAshZLHy2hh9ns5TvZvhLV5sdTTtvox",
  "key29": "5tAJ8WURfaNewQQcenhhts7t8MKiWtQCfbkxMEMPWEkUQe1AN22MSEKpW47XpciEZGTXNsLVGxqYfgkmWj6CouXf",
  "key30": "4bLYvomrXK7PXVkqDBzAaEFjsbaX3v6ofdQMnuoE37rH3WqhReH1Cqh6yNgj4JHFbnhMERJbaowWh36BTE6ELAsr",
  "key31": "x6TkUAvP6MYbW9MS6GHzaC7bCYzo8ARjFQKPPMkpBte3o36TqtKCSi2X9rDEpMAukN17xp5pHCNjmDkpazUoGB1",
  "key32": "4fWDm8bvAAzr6Z2MgJP2eQj45oqd1g4h3VXJj4BN93L6RvgbPncWZGX1cZX2kBDhJUSJtfjm7oVyYWD8x9j3W9N5",
  "key33": "3rRYTSKd7MEhoAHwUAR6fYob8FzwtLjMxabdFg9aXgUqD42ox4R4mW9Ucp2JiDnpyQoduoZabBeipxzXD3KEhSNH",
  "key34": "28UdxDKTqvj95vmnJr9RwHysyzyYQGkowKAhVLbp2pnefKeNFA59JwTVrqsERaX77RjLaTEVdqu4nuLBuEZnoK4d",
  "key35": "4YiKoXFUz9KMZeceMAfWDRKneK3msJx3cVmmg1GGTBWBv8R1titc9tqFBx89vc9ymrqazTDWVNiNEokzKWtTbhGT",
  "key36": "2Vwc9z4zDBMK8RLPJ4WduKsJ7TfcPn4Xytj1yeT16pxhVY1oR54ViWePp8hD6M3uDjUnVSbUYbTHRiXcBFQ8RTtg",
  "key37": "n9jwrNssQYSjz9zjg8nX2rKevUBuG5E6TwhpayX45HBKgCX6EjHMruecF16RURSNA6BkNccCaqGqhjMQzMziNan",
  "key38": "g16BWXPr32EVh75F1jS2QT56PM1ps5kW8rvbL6CpFNdQKaUAgZirBCvtf4Tvq1pNWu1QhUeTevoFTLLNvqjzMPn",
  "key39": "4ryD59jmmhfJSvU1hnErMGtDNaH2ts3qkAyyNP7EF2UoL8CKjdUaXWgC9EYZc5qEwu2MFBHBUwKCPTDVSSVrerKJ",
  "key40": "4qr63nSSPhvbhLA2j8qPLqRpKEWPic6z8RqjaGmag3TAiWHrxiz6GTG3zc9hUwJR8YvWCwdgh5ck9ixZutjVX92g",
  "key41": "5afnFpVEA8RknDBUexFtXx6UWYR2BngWYT9wssfUTBYg6RqM7guCrw7BPHnhkkQFtf1q1XmBpfJfdRikxdkxAWkU",
  "key42": "4WJw4hnNyLMvcFSxYPWRN7bnH9DttDxrWhNCA5DDAbEMJBkhHW1WVvbcLd2rj8Srqxco1zNCWJfrjwhDhV1noJVv",
  "key43": "288ddiuLy4e5UpK6JmTTJ3uF62GWa9XPQUgDWbyMUNUHUu3PZDFwvXp7nzoMcWsZtuM4JYPwz16BGbXQsNFNQuMc",
  "key44": "3H1qqPNTjG7mbPHCvczd7cEhrNYg8dDd3cE41AByacUp613UWcS9kVH4KSEwAHRX31KhjrEyKcCz1D4A6XEnMA5L",
  "key45": "hqjytPKRQ5D1UAt7agZwT8GLZsq8PvGyBqscgFMxUCiZiLJhAaUzP7TEFwHXjSXqbuxxVFkaAHMfhvGP2BqNPxf",
  "key46": "JkuXYqbFaBMwSSiyQDZwzKjUZH4L4vYphLdFJiWVU8jz95cmeJ64RdNdNt7GQBKEEiQsUkxS9RVrZZkUqVJrxYn",
  "key47": "3ni7CGkCnyA9qWCfVP1YFJk56FvDEiSomQz1d4B7q6P5FUueny8Equiaf5kfuJTSFbo3EzvdQRxcp9u4w1m7u276",
  "key48": "5854fBJBuhErzZeYBNHRoVMxPucVnj3zPJV49oQyuZZ4HwBPxQVAS4ZgGJrkNCgDNztzjW4gYpUhcs89hciemjYc",
  "key49": "EB4jcKaadCfCsxf6kFR6xpq995LT161wrbb6u3eeRSRJRGzqJFwmSdCD69kbMfMiYPMKCBQyBViK3NfxFJ3KBUX"
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
