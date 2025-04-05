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
    "BCe57yAtiemgpPFmhWTSoFKv2wQwaGnu4BuLombSGGmp9eiosS9VcSSZanheedhMGKzhb2G56t7Dku2VRypPnda"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BHY9PH8PUbJ8aFGjsG4tPGDyNno4hcRNzKgtha2zVFCAoWQtat399Cs6Gi2bA6AWKNvnSVmGVuc2wAyMiUuoHAv",
  "key1": "g9WDAv9FrzFsEA5PYkLtPJHxNPU3SD6zT3EJRidxN94g2yER5voAXoBam68QEXyo9FSabnUZgMqgfcMXqwYLGJZ",
  "key2": "2TWTpj6uY8WT6dwkKxuRtm2aWNir9MCT5CxXGY8YxFwP1jmvzVUUeDUDtBdW5jw5n3hE1271QXgEJuUBrcLmNSYg",
  "key3": "2iTjRM5XsdiJiVx3dFM9ktm3owz71cey8Pk3En5TR9PkJC2q39uycoGfa8Vv221fcxMxKq7rVtQvCbAFbdw2GQZ5",
  "key4": "2cM5f6c9fmSWzKZ8AJSSe2Fer3JhxjWCCXaq1rL9LzMngqpis2PMxjyFm9dGzYUVRaHtHTDENTVGRCL91xCuLQWh",
  "key5": "3eM3eYR5g1xCtJ8J68wTvzNUiXWaTby21zammCjze3aeS7V4kKhRtiD1cgyC2V6tWe52arjdARwJ3oewrBwwHiy7",
  "key6": "3iZFwP9Zut6VHxPmGoDYxpXHjwLHV8qYNrGyEcfyWE8Lxm7XxGQQSBSxfYEVGqryTVS7zYc4eGRjtgnNGT287Qtj",
  "key7": "3SD7jL9C9LR8ewcqWmEHnLaAQwY3nt7eqQRy5dmMKAaoMEEuw8USeBZo6CUBbefMvxtdFPjg6QLkbkbmVTiD9EVp",
  "key8": "65uwbMCMKJWGAJd3yyyHQg14kQ5LbXKvfMtcWoagJzgMxFcbJSKosLviX5hSB4mn9wNLYCto5VpCw5bhDr4dHgTW",
  "key9": "2bFJJCq6viZ2qr69tcs9urymNHMP2dqWan7SR5BwjY6dicU2TjhxnkscwH4Rvd3TgNNvkP7Hrfu3gw35QZss13nQ",
  "key10": "2tMkghWbwGcCes2SwBXgzLFtf34dfR4FAidoDUx5VG8hEowBBL8UyQHP8BkTjGY571e8tUwMkoWqXZDjPpggsNTj",
  "key11": "4EHfVUd9kzh77bbu2z48wRwgApMbvYybDzuMHoYoqZaqptoPKKcXMUu9Z5DpxGP9zTaFPeDqDBFQ2HJC33Hs1f77",
  "key12": "4hENDMgCHMZELByNbsSzYMHnJMerLUEQsE17Ek1BzZGivBgQVgBZhZuzwT7k4dve6VVe9EUnYCqhrQwsEhmiPd5g",
  "key13": "ofCPsXFTnEBGZn3q2dA9MuCGvsb1caNVqxqusghfJzPuK3aTRKybm7qAw6f6DEcPbRyjN9PBYz967XtHPVUBFwV",
  "key14": "g7g14kb5R2osAe4JwikphsU5CshvJXatPhf9iju4fb6fp5aXAkQdGVRnaBQ7scWUzq2MGFAnqGhG4x6nxvnkZKQ",
  "key15": "4NfyknSqyui429Eio4uiUF3hgd6ZG8RaS53xeKsq8Zq4Pq5hvxpoZefBgMEFHby7V2PEWvLP7TwAppzMmwwJBxHb",
  "key16": "4R8VPS6q2pre7bHJsUUi8MEGyoNkGFgVwUMnN2C67qWwftahCR2RJgFKspoa8c7fy5J6nS9dUkkyUzCajPB9mqkT",
  "key17": "43k5L28TvspPiuBa7hyQE1tV13oBmYC7Doq2EFYpUPHf6RkJFPRvvbMudWsDQvyz1p1vaigUTN1CAsri2MDaY2ow",
  "key18": "2TyeB7XV7f1F8zMprAmmwtWEZ151VYnng5dBcmJ8Mv3SejGjrn1MHhCiV9Rzj2w9Dq81dDDbBZQ4GmrNwQSUsge5",
  "key19": "3SmiR6e7AzuNMdTMAdurMfTdihWTjd7uvgtJTr83oDjRG89qFBweqm9Aej4Acwdfm4GGCsCDhCg1sNcptywxv5Az",
  "key20": "3RAXEvnG4M5ZZZd57YsDcL6rmqJDd5Ab8fkV9SDh76bQseRQkmiUpS9mWe7crHomtPT5CNmJT2iSfS4hBJfZd2eD",
  "key21": "37LD7bC89wjkvhBWUv7KmBekckbgrRzwQBwXJ1v2ikSP2FMnPg1wnmggDvxfVAQQJxrQ5vPZ7TqdXMSqCLQYdEZm",
  "key22": "63GWFaLxxmNZgoSL9vbGFSByeVivnY6DR624UuUb5mVJ1G3NSmvaZ1kXxMMvvVnwkBvrJQvFtBjrZpvXQsCgshtA",
  "key23": "3kx7wPZM12jimPRquMBgVtgp2FB7AwD8TmJLvLmz7ptm8hfHpwPwLFrtc9is4jEJw1R4Phmw4j4e9V4mpUAxRncR",
  "key24": "9zi6LwWReuFveZbZRPbqNVFSAEhypWpEZaT7eqmGVBWXpLcCJVF3FYQ9AZhErpcU1epLSnm8RYDCyGmXSWuyBnr",
  "key25": "5DSDQqzExML8X7UX92X8AAwvMeccDd2SxhvQQ5EEFuoB3TTBgLqsCFdytGmY6RApvbnYFXirknkHVAEu9JqGo9F6",
  "key26": "4RjHj5vGvV6sp6Brye9V7MzYoBf1SWPWGgWtgvVgFRtn3Tei7QGMfehvQ2o46WeBWUdeq6cVL44VWEMkgM95uTLC",
  "key27": "uQZbN8nnmWwCN4KHgskyLihuubypREu8QJBiYbvofh64LMr838FwbfeduoVfETDCpikHD8yDZuJrFN1v9vGku6z",
  "key28": "127CkUL1siguk2NpPxmBpvQRydYGFVJYnVd3AXUU7bbjubxnGxHzPczVEpatepKY5jQqzPnyfDYQnmtJyS6p2faj",
  "key29": "5QoNBM7XSAW4oY9rSWPLJ6kRXH2KZnbkaZfNZ35vu7wcxpWEiSrS7mqqWSr1KNhYLioHkoraidAxAPjCrPu9Rysv",
  "key30": "3uVATH1ckNueVD5fXzvCsqVskYX3WDQahZAt7BbMNAX9xpDgna4CBGdpwCNM3ugWodoiPccS2dVPpVcjPcfHRh5R",
  "key31": "4nQB6mKUMURph2JWiNtTUnRDgAdsZ78PLmMfyBXGrwZWUiSaZAq9ciEasXrnpDTrErAcMiH1CEaeLuLufUBPMjwp",
  "key32": "7CyvMMd76qKJ1cx44cMt86f1h7PieRKyR6ynU9Zh3JJGmqBu3ksxEKRmDvU84KtT7ptF82ResSHnbMS3oXkMBym",
  "key33": "BWVazP71E4u2dWc8ppHyMF4rnskV4DEPLkiMtRGxx1goY4t1zRU5mDpxyLMXMRw1KkVJWVih59RDNJi47Ao2X5L",
  "key34": "3iLAmFUrtU6oavThiKSXJmLZMCaF5LkK712559TpVfsqhQWnfwFx7azHbaFgTpijpoqcYCR1hjD4XowGs4mFr69i",
  "key35": "4LzDzP9MuSodkQJy3m4ADRigfBzg7DoAbT5bDgFszwZWVNsz1UtKJCHRuTq5g2BGayMX11rwbhEZyMwH6WhVAeZy",
  "key36": "3Rm2yTNEFfzUpJhFN9fhvS8ngmHudGwsAjQ53mYbkEWgCpNV4aAJ4z3qbPkokTcjXyGXrs2ARf58UXuzNM6EHWGY"
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
