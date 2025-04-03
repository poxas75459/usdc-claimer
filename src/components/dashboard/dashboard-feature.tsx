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
    "PCoHyp6ViX9pQVzAEmpWBV1TpNScXsm1HgH3qf7zWAfFSLarZwfYc1w1BPPEWdL6cNTubv17ZL6QB37S4huEK8P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DJSe61khMCVYK8kd7RXGu9M7uPdBKvtdWrCFGFq1gjBbaNH1vP7eoSdYzYywHKT4vj6PgPPguKcJfG1mywPFGqL",
  "key1": "62uh8XTG4GjFyGUXie74PLmQZo7STeUu2c8F4mo8PWHLz36NHgEFxxEoqeV1ujEdkGbHdAbiQEVKoZLAdAjrnhLf",
  "key2": "2dEg2Jx4NsZGsFuYhCUvy2dczxLC1TRuqK47GmzePM7EzVY4pDXxxEZvqMy46CV1pAcGJkyA1KNtEHWY8rGVHVCD",
  "key3": "1kYawCZ8oETDBhgKBR5rUjTAnnCRUijtLFQQZX6G431f9Fm72MeBRbS42hab77wUz8mF84cYgwjYdYRZeanHXcc",
  "key4": "4Sb91W8T2unsYtA9z5kRrKqHNdoL2QjCYX1NctSKFAE8V1gJf6CpwXZBLZBsZfXKFqPQqZWxkFskWqiPi3uwMQv5",
  "key5": "4EvK8MYfK2sKq8YjMR17DCetMBaC6JVa81Ud72eqZzyaE9o4dR79K4iCn1MLXHjLjexRKq7xPLm3CSCBNr9WXLw8",
  "key6": "45Sa9WNtU1AzZV78up2SB53ufaUFWQ3bKSYKkT3FvmqUri5YjdRvRqKgYU71hL2EXaNnNYVA2mRhr8GScpXjusmQ",
  "key7": "4aPgQ1boNnChSE2DWvo6BZtNYCbtWJsR1FZVk3TpyowxmLLSmTwfKVsWyVKvi8iwf4Qn471G3CaMJVoXkEW1JdGx",
  "key8": "7hcUq3w6miuSk312a79Zn28rY8yaKL7LJm1Ht7u6VAiTQQd8aj2ZkUcXFHEjdmiooqCxo7XbhhJhsY3AXW3Df9E",
  "key9": "zvNpBBPvnE7Wr3opDEAqDkkvf2y81yWtx6ow2bqfFHyQ1DjFLB91zNWs7QjsBNntuYiUcmbAhH2oe4tgqJ7smaZ",
  "key10": "2W6zcNU24nt3vL4kv57SLm8M5xEXmGDauNQj99Yy7nMpVRzCYu6eStyoWzPcoEcSsM2R6NFWWNeNtg9hNxKDYHwf",
  "key11": "5AQRXQpHmge3HE3v7ZvxC86bRUV3wwzCsL6KkfMaSdtKf2jnYTS5zgegh8dEdpmKqsMt6oVJg4U3FvGGQqGuzZLg",
  "key12": "MuxV6BBEEGBbMEddgttz5JAd58HNSNaCjKCbSudzEdXG4zxFTQUySUjEQq4cgCe6LwnzvkR4GUSsbCANnEBed18",
  "key13": "52RG86QrfyzDPBF1zvL3Fe2X4XCTzYR26aw7ZHBtxTVcSU9cxpowm3SipUmDfZgpC1w4X2FKkbyoK2epWGbfbNvL",
  "key14": "45JDQ4hBK1Sj68cP8khm2QyUtqicQJRdEicGaax2DHrVojfeJEBkiAeBeREg94tZqNMKc1dgTUYVyox5VBfNPvYz",
  "key15": "4msnAEnwHHUPenZoELRzfgPWQv8rtYAmTM2y5ZYfcjtNN7Wd1FsYKn37rwuGqgw6oiEEMKTKoV5RVd4M8fnnPFuK",
  "key16": "57XUZUd83jzuwC9bFr5GK8HVpjwvzSz4kcxc5oCsufT4sAZZdoL5vrfuWouJYEMN2huDyo61WZUkZBiKP2FS5vfe",
  "key17": "5yTkdfzACkVseZ82nut63h2Df1m6qzkpvyivqxpPuE8z5PG98WYJRugcUattvKJPYBC33665vhHgAExw2vTQyk2M",
  "key18": "5uqHoqMU3znAgvcteAbeSTKZQNtCAchDk3kMJUaPbwVNpMKkz8TVFLbnznkZNWvBZfQu2449DuK5dRre8aPiBUp4",
  "key19": "4edGnSXbtwMv7sQvT2NKHSkbUfr2nkUrbhus6eXZL31R8w1Hb51Sq6KUu7eA5mUaoLcknQmrxKs5cK8N5Vgozi5e",
  "key20": "UUrjNBbj4qXy1WBDsc2uU1E6moQTDhWkwLZ6cmsQGpDGgZWHJ8VK6tJW5Etm8ja7JJ1Z5cXEqD8w3EfH22YfAQz",
  "key21": "VXS6t3FdYDKkdLBK8aALXuqeXATMmc5ET3kPAoo2h4teByhGX4aTcRy8PvqYyGnniboZiwfC7ezaJMFruK5Y7AS",
  "key22": "z4Rvnddcof6XwEdLGbXuNHE9sSG3JvNqMM2HgmxqvYYVzAyjLQXn19cWjCpGDKJoEoMW5BvG5CNtkHNE7RVG1zp",
  "key23": "2Xyay9kmdYrbZWw7RLRZTr81DSdixhcpR4oysNC5s7UfpXoteaz69LB3eUdRnDCiGrYwHhXpSUUhcQxPntUsNCvf",
  "key24": "5MJUQZybUpWUwi1iJGtxgJnefaTE9S5ybgWk4LQK7S782V3YNz1XPmTWG9oMTt93nwV7HcieEYL2FKWzvcnEPJEN",
  "key25": "2ALYPoyvC63L8jANwuLf9mZbKVJAoFJRSbVP5j4qTgZxcJSfQCXZo4PU3i1JFkQ2yZkb3erybQtSnDcoKDVYyGmX",
  "key26": "33CCRt18iwo4ETovoqA3AK3MPqT9JMJmmSzRBPqCerELLd5ca8wQcUvosHKuFzS53m6P66xtTxvj9VRTq8Yt4hR5",
  "key27": "2BNsCDW7EwrPCgjGk4aiVwuFaTfmfAsEakktiFKmFoXKiQ2iYyiVc9cUYUGsLWzeW3Dst1SJwo43hbtRSc9ASS5N",
  "key28": "quirUmNwSE3cu6JF95jKYvNKN5bBAjCvd5yXSG6oexebvPBnco8kCidBEFPccQH4vHnG7KfhfTTpvETRRUV9DnS",
  "key29": "2CbyxJbVC3VKaWDUgi7o2xug23ocKoavB7xYph3VtdvH4xxQAkfqhLZP8QjsiAuuPJAzjqX5Ec8SJjvWwWRxZTJT",
  "key30": "2SU8vckHt8mZ5Dk4tVjZXULkP4q3xqTW5ZhBoqZsCR28fEtG3zsiouEYv8kVrrJ8C6RqqFJp1JPkUh6nNHXH4eTc",
  "key31": "4xKybAc9tN3jzwoYkjegiSHokf1PKNVySoAjCKsbochbtwCtDNzNhzC6coCgTPsa65pg9kA2pBb6gSEqc5LZuM3S",
  "key32": "4xR6kvhqE4WWCX13172CFRsqrkVJ5zqM8B968WihduXuXZJpjuHHqc6Cb5Z5sGuuJsMjUQvPJt1XRweujU1x9TMu",
  "key33": "25vDWwSHkJY9irJYXJx6MdfbXt6LNq3NHTx5Ui9rh4LAHSZ5u99KkgBKfTA5dNqH8Q7Dvf9CBg9imDKPbZvxUsfT",
  "key34": "5tQK267pGhfUaRwue8WCbmU8XjraAALGvFknHbCjvBHih22T3Ry3ouYzHgqpk7eV4mxHVceiBwdVoiukEfaTqCfD",
  "key35": "65a1QtrHXUT24Uv7DKor54LtAAywbBRB2sSV7NrCWADovGwvEqmyMtUZH4Zf8Cv79WjCzy4YW6PSQtryMaKWQSEK",
  "key36": "53PL2cwy3ZauPeG6gYiHbj9SC8oXQtkWj62ChDKsPp4doNheGCuTVwyP96TbnS4TPxM71HGjP6ezvAFtH1mc7nML",
  "key37": "w4Vfjz3eZeN2PE6vzaEkgw1nKH1gdzMxsciajjFLZhnWpssP5JBHRuw4s2hHEEJ4LjAgv2tjeEPYLNghANa7Tdc",
  "key38": "5de5VhYdyYPUFfWyxkW5Xajf2AiDaiw1u4V9SaF5tkjEF5akN14WoBuET2PnqRb8MKoUHaHupzA11xoRmu31bcUE",
  "key39": "2yq8wu1GqVzsV5fnq9QiUfx3m8BAKmdicp3FT193oBqJEJF6ohC8ZHLGXQGRkcxfun9pT2RCi2SRmwXeoSU5aKbb",
  "key40": "3g4mEXGZ6hTr5txmTR2jb5sAsBtcNnhnrCzefo5DZeDfZaYuX6rRL8zvETzJCvAX5ijrFwnkW9JrbeH7EFNzAZQ7"
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
