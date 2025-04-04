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
    "4aLFYoBbCo763ve5mVcNJnqoyF8CzbvowMtWqLEEzp3f7sZx9nLDzbb4B3JcRrRcyLgCABeE2W7JVMw8Ri1eqkji"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zNADykUNmvqVsGS3D6hJ9U9nVboP1n1gdc8yoGGXvU8osPob9zhisgczXfTkNWM4VWMwESFTUcP6SSLiNdL3Nco",
  "key1": "2t8MW1JFoiesvzsCq6eWtKvWzbQKPUm8575bxD2CL71iMbaNjZFQcvxqvHWnXxdZZo3ZqmrefabuA3rB8q1TNb4t",
  "key2": "2S9rgMnPRA1R3w8ganEKRwfKgPZKtUNk5rKY14BwzbHuQn5dXE4QKyHn1zwQHMKYuoHCUZYKuQzA7B6bpFuHMiU8",
  "key3": "4RwDMhcv5qUm8XY5PQ4XrLrUayGFDWnbJrTa3JJCKFVp2QV7X5A4X13zTrVxuyZ8NyMT8nvxKJRmzffoudw9eFTm",
  "key4": "4ra7mqskQpVZyvFazmDaRMQiU4YN5UcehkC8eyR82L52JxE4uCnL3r7y6T8BVsSWXGxQhAjzgquqyzqDdgruaWWg",
  "key5": "3ttBQpJBJQbQBKCaEoDMz4S4C7P77u1ATuBfjaaxokgj5J9t1ALuGC6WExLyNkpK4APk4JLGUH37uThtvGziv7A9",
  "key6": "3K6MUDeVUFqxfZe7eAfs2P91tV7VhDZ8sf6NR7KaeZinqgynjdDiLbVSgcWJFjFLhAJYkFjZcurzEBFhP1JezjMR",
  "key7": "5MG7bNuox7TkJ7dfu9XucyJU6i5QSB9kjfgGUvLBjD2uTKptYeLTPqvEMmKugddpq8XEwosFofxvE12oRaXjgFA8",
  "key8": "47WTcW2vyAbZtsgCDDXd6BrLkpsZq8v2VsC2SEXFmsK3FtaLBEZbkFRfZky7CRmyjoftUqEiarRLTtph8tsCzBjY",
  "key9": "5yjCzn5TbC4eWNkHw6zVHHtiVfubCxWDqmNhbMqogMurdDPN9eAZCVe16gCX4rJwtb3V1nqPDt5r2uK7NDyiDC5q",
  "key10": "ehCMJfwcRGSjbvzAnfLfuXFKVctfZY4wQh7RiEb2KUzEC1RHfghGhG28sYUW9M4PFVX9GQnnpMH9gWVdL1DeLoE",
  "key11": "4tHAmj8WkPALrFioxUcoK7k8AnPxeZPkjRkmtKctPmte4aeXANbbzDASZGdz1mUvA7FEpac6eN1JMrX9thxFpWy1",
  "key12": "3Lwp2on3jfbUhtE7QwGhPHoWQKHTA3t3SGSue79A71RuVEAeXdpVxVZcXguLNHNx6mxmGTRT6Tnfbxxa3q27Z97p",
  "key13": "5jDPR9ff1QkJpUaCueivzWMqrFQVGKDiryXHUffZy75e25aNq5Z4w6Ze2c8JfMqJZKQ4mscPVQFaECVrfgyQ42G4",
  "key14": "PyPfScJRMbpLxsyjeBZHPV1135xhdJg2ddNdWcPLL2XP7Kj3Fuy6XPoj6rez8wDsNT6U3QmrgENs4q1ZWa1wW4g",
  "key15": "3LF92vBcBbzBQSmvBoF4vaZeHLWEQZncKTdLExUsrtKtvdTWqhgWWgRf1UQKwrDkN2ChGCw4xtYQAWgNZbWyV9jN",
  "key16": "4pvrqapd56Z84tU1vc5sTrR16tNzPpDRxX6oinYz9HLXECAR8dhwfgiYfrspdsho5y3746wNVTQMcW5hfj9LaMAi",
  "key17": "FSHZxhHMDf9noP41NafevZxkie6khk68LSAZx4cDp3MJnsdbSHcn5aok3JhrSBawCJrwPL8koBFu3tK6L4NuNbA",
  "key18": "TMMmW5sXrLw5oQWqyc5ZtzQYG3bFAPb7M9NhhJ8X1xQ7WCQj2UnoronBuUSNRKLg8Qp9mb35J8bSerd9ePKvP8d",
  "key19": "tP3kwFnrvdnEAR6poZCr3x5fScuhd6pGxja24Qwuui67ePRBuNCp8vwEm8gvLnGemofWDxpYEj3teNYbttEr2zh",
  "key20": "53FzQCcbWjUwLTnmVj62yLmr4iYdv8s9tJi9CDXKfenasSUEjbwvSwSrbrpBF7sg1yhD6m65VHwtBJUbQhQmPmJQ",
  "key21": "45zvrjTenf521YHjqa5pUHSWyF2t17h72NuPCBUvTFdLx8iMMTUamL6fPiAHh8xa97YHS7c5VciSQeaTh6p9rjF8",
  "key22": "3Nf7aH5gZsFBVu3rACyz7gdeQ9tb3RrTK7dWNsCTbtYxCozHDmjrDUrJ8kDeLoNv2LdxbbmnfRFTWioGqDTU9mPt",
  "key23": "5A3kHDHj2pJ2DpeCJF49W6PHhbjDeUryRv6H1Xiq5zRzRxk6XtSfxuUwyPW5VaX2kYuE7rxrWSj9hG9Xid4NqKhk",
  "key24": "yyZoWvjk6ciJg52PRNQoM5B8qAw3fL34rBVcim67tmWQpk2HjPfdDNA7G9z9m2ea3Y98VPTdBwpeBwYefhb1Ax6",
  "key25": "4CBea3AExVNbt2U8TpT2chgQayXY2x5cfrXWf8o11wPktY3JXAYCg3XZ8bP6KrneiLxmX3rujAicgZAt5gMspu4t",
  "key26": "5Gc9DwemgKAvUbjqPeoqA57xSAwxTV8amMErCdvTuqPFRpeBfBufFbPyzfGd9v4V6dFGbVgQmKeHmS5MuEjWbyee",
  "key27": "3W55Kc1KJ2x498qVRs2edXSH4HY4ubFBtBKA29VNDv3sWafQtNGMiYaKiWrwXXy44Ee3nYekwRVaFDeGmTov4vqd",
  "key28": "54deLB5V8P2ynxiw3N7cTLvWHrig633fRFPUAJpjuk5CTEvUcHa545KwqhuJ6KVd2oRQV1wfQo1YMRjH5wsYdAdf",
  "key29": "2AASRXerrXfmPYJL2B8X8sqZa4woANx3iD2TpoeZqPdDUBmkjDx6sv2XoDAoHGARAiTAPE4f3U9e4YdQQYxv9Y8L",
  "key30": "5g5d1r3f3VbnQsw4d57TzrSKjLV2WNz8gjEVBNiwHfhApGzSSgjUYmZRHwkZ7d4g4odkRXxcvifnKU3gVkd5rhTR",
  "key31": "4g9JnpE6WjwzG8qrwyR2t2k4gpH4rjVojqfH5arLJpSZBNQ11fjd7oEPp2qwyUQQYdPvNLoUAW6FjkGeyrBggTgh",
  "key32": "4jxK9nG22DgEWUCYaJ23KrKof2e6EW4UfmPub1t7kkBmBhBkV9kCwT8Vrod5cWoxmJVYFJVoobVynG7T6tU6L1WD",
  "key33": "TqdqG4CMqJKXeMiVf5YMbuKxgfVpYDgmrQVzaCatUHh9Y7U2Ru3p8xaC7DFMVq68XHjW9yagdHzZrNc6iheN93e",
  "key34": "5doeVnrYCKM3PLsqJcChDsAEc6yUdLsYUTwKkw4fJcdLV4e3WcM4ZXaJxpu3LmXPsGntCa4ZETn7C2CbptSbBUUY",
  "key35": "5HTi5mXMJBcGEARGWYZxnjtbCtgTc4spaxSsifxbZMwRDbSAvk6upSBJk3d1ut34Wmk8DLbiNixe5newo9qpiP4r",
  "key36": "4K4fVbj9H8J93VCBqHyuokmw6yyvqV2GKV4fSwRVU5QbgFjWA8PgX6K9LTp45up92TjZm3io7mksrBBdKoZp6H8Y",
  "key37": "5DvzZfJ7Xh9ssMEYpiVbrBwoUCahAxab8WrYeRUXSwLC9evzT4z5ZtfQNLGZW3dbdXsXMnxnqYCcqBrkuiSBRgBT",
  "key38": "2TChAit6EF5GMUTZwWE5tgwGxpeMHmhfc47ChndWSbouZwGBXvBENaitsYbyiHe7rBRq5r2pq533KGmxjxN4e3LV",
  "key39": "643c8gGXZWihuapLTxtAE5abCvruKXTjQgy2vSGBEq1yTaKWh9xUFrTvqqkXVvRLeQ3qV6ry1shgEVnXF3hk8DwD",
  "key40": "58o33ZezkLhbru1Ky411cU2adaJzhy8ExfnEPEwRsQmha67bfTr9qZp6KhvuxvTTwfckSTtFhBPb5BjW4yqdiczC",
  "key41": "4y9vZyf5xM4kRLL6MomUueiLXWc8HdZ2cmURLGHo9XjWuw5ZiiyeaY81L7mgU4d1GFTw8kgkNTt1cpewJnK7HK7A",
  "key42": "3ESSZA6qMEhA5gQqfxk8oaL3sYgY3TVVrRv6XamJZZF67Txrt6FvAqUc9SSu4V4fo9LPJK8HwdWJrtWdxRnbotNi",
  "key43": "3oRCXC3HdGDdQvU2cmyuYvn9mRsnggM8AJegqM6QkFXmFfjFYdkPm29t3aDcLW1xSBTaMu9BVLm5agL9HzbA5rM1",
  "key44": "2ubANWKg51p7GMRfH4zBDGYegZC43BCk8vU1Avis4tP97bGcS6jzhHnYEptM1TpuEcgfdp3e4J1gJQrh5xUFXhBu"
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
