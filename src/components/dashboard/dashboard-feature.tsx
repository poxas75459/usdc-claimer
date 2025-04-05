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
    "4U4hW8hvSJXzYCkVYF7h4oJiwBED288NfapLdNQHBwdLQmXq9nu54oyRpLCPbET3Uau27VVjtPa3PfHfRmvSgx6u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yUaEy7k43vLWyDhgqsNF5k5MrvYZwoZFLQNsgfxK8p5nHHvMZVmGTnBqsSR9Lokm8L6ziM2LWWE7Lrp7tefqdLU",
  "key1": "9k884u69A4VQgbeC4tPJvTNoYTPdeizj4y6mNv32CLY4X5oBwyVfE6ZyDyzJUnadBRu461pvwGN2aLi1PCBFDuN",
  "key2": "2g5XeKXs1rQGNbTs9bHsdGGJWJ6tUaW1T5oeteaz9ZFCJaZtvgLvUZMRRXmAK7LFJnx2p8KQVg53UzMyqiwdacCQ",
  "key3": "2BTzw9CsDzNsw6yi1H1dJmcbykaLvBKk7Jxc7wHdgMf5mgHkgm9APPSYNAv3nBf1XDkp9nQonCTCY9h9X1qqZqcX",
  "key4": "4brAEf4DHjt8tV4MAV35miPx9FkTVKPK3cxDojVe9YStUyoUThTzg3HDQF5DR1nrBrMPxAskB3erYRS8zAkFiRfm",
  "key5": "4MNNJq3Ny6nuRoSoscmFgAVYgxpCYRZuTFsmx61957mg2oGwsdB917d86YVm2P71pHyBG8WsteYCcTs6S5Sgoav4",
  "key6": "5jWXJsGaEzJSzse63baHdXE4d7b43sJ4vGnbz6ksb8aheLhiE7P8nLhQedyViTXjMaHHor2doBCEAAaBFtLdjLGC",
  "key7": "4VLWNXZHXQVodtwAwMnBQsVxDhsjYDFP9Yavw7MnrAphiN7wcadHJxpyegQpe6VQdyjnyHHFSj997RPVGkQXhRhS",
  "key8": "5F7WdEbUzkGDqS6ytiAABTjT3yvKLVybVMFc9FPsU5VT3Wct3GEaMgMt1JMBodpGmNbVZdqpxtN9RXK1nYRCmZtq",
  "key9": "39zpnqUHyek4sZtVCYGWXMUBTPNRsVsGhehLMa7zEwTrsqhNXMGSwV4Gqmia9rfqmy4ttLKRyvfLUTxBQasKuKiQ",
  "key10": "4rFdhMFHdxavpbGa8oubDSSg4x5PKHtPJZRhfKBPgSFwMUTrrYiJLsr7ik4rgKc5Rk9aUkeUbu8GEyaVdKz6rAzG",
  "key11": "AK7MZHUzcTSUeTT8GwnhKwkNbXeVbwu4ihrimazu91fHhboSJ3dDVVKfS7rqdMmsYcBjtxzpqsp4xwwN84P6Nee",
  "key12": "3UVMDXuKXKQdNQPZGHoZ34mEMRQecBT9gFxg7L3jJ7bHdfNn4LfJAuSTbSMnvz6BaKhvNxNUW7LZGRRhtxXpH3ut",
  "key13": "5jwfdpmLbyz4Tvv36Us1CXDsZV8gJtqsbuKYjGnR28eFYxHvRufApZy1LcoNzWLCawEYxdjnkPxzDWK1NbPycqtP",
  "key14": "eYW4tcFDw8fLPxyYymBsqAHUv1v8MjbZB5Erbvmx4aF8BFgnD4X65KucE81HyBLEhEc4JVUf2YEBmCN13JoQbDS",
  "key15": "63Pvrb7z9B8ix1UyZYYkXWE7WdbQw5Mo1Gi27XQcp8MKHHhDWegoMxdj4okHzp58pgngE3g6wiLHU2AjWwvyhhES",
  "key16": "E46dqKvcV4jK9V6avbspw8YWAr4Tsg8k5yWQx1y7PDMmp2F32ABAbYP1mQGKhjMGH6ZHKs4DY89khrbQ7iQvEaB",
  "key17": "5R7cyoPMWa4ssPRcpJBd9wpVjccFLfnwNZjTYN1bgiRYhvSUiHRRhdAM2SohpNZTyXhRCVnekwFV7MaFV7AwE9UQ",
  "key18": "5Zw4QBuQELF7iAf1zLruDX1tP8c1yFX926ovT4neQgoLVaJ78foQ9dvsSf54d8wya3gXAc9m114zmVcBsciZGmkz",
  "key19": "51XqrNKhwmhcCBXvmbgC5gfQhdXkbdJfwPXWDMqoQDffQEBa7wLuTkk1WVa7piRiBb7FBm1zkUtVTgQahNuvsTeM",
  "key20": "2DbDRyjyfLyuzoTm54zVmCX3Bv7CKnMchkuFKVRNvceHa1DM38BqT2Ps8iZq8HpeBJe4bPZBSLTdJQY3HGFdgHcc",
  "key21": "4JSa4oTMKawJqjTLoZAYG1KjcrzxzT6k4UhjpirYDUnom2ywuLFbXvtAx2RYU4G8cLD3rsiSZUikoikFfzXbjbYv",
  "key22": "43tffB8c3AC4CEswvY83EMvvqwmWgiyKA4NNHgAux7GCUNPzHQbRsGW8Ko79kAYsyhjJxJ6iHTsuBxvwxTBg7uCC",
  "key23": "2xtspF8hAod6aSRnX9WdW8F3hSZQCY3qEEMfwESHxX5gAW7Sinynb95bZUJKDsKeG4UXQmp485jAQZkgFURh54Sn",
  "key24": "U9NSDiGBLx9ayks648skpLLbkyGpAnRxtWyar7Vm6xaQor9L2kQjKs78YukWhErx3eXh3RLVRjDeATaimnw6rbo",
  "key25": "2j96EvTKMyUsU1EfsoRwknYnXKGjUttWdFiYTGjbNKmAN9zCjMzD7XZ659XqQ3kPS48k5RdQnAcWihdXdpmQRZs6",
  "key26": "4EyG6mtkLxRVvswsqnAewxfbqQnUiGGsd9qF1oihx2ZbYywh4GiCnaS2gpbpNyKcwTuJfFW8x1uQWEvszpfFGFFV",
  "key27": "3PDWUC5JpAoHEXrEtsfviLFqLmAWuUhJo6yUbsXYDUKPSbSgKbqMdTxf3L3qBs9WWM2tE21CQHMWABU9MivwUXYA",
  "key28": "5ew2qACqy2vmsnV71LodF2dCpsCT1zjPo2N9hXSU62g1gPu4KWjyMNNG8y1WVz5Gsk1A9DPc3khdxpxJzqMVnyqo",
  "key29": "2VUxFDMnAN1CTpCKZNevdxzEK4G6wgxtBDqHXdyZ9tEc19HH17AxFgZuNLGF9PnCGDbGRwr473HbUgJYLycTKn2B",
  "key30": "4oFPJjjMFMdYDLzrrYXTxm1r3dvWtzE1kfBuF7RdHd12wCJs7kzokXwjoXb4Fm41XnEem8cHVuHiXoqizbRUVmHc",
  "key31": "Uy44ocb9vhiftasfEMF64KSNPFnuCwQ6cfwc91htFY2bzmcsFEqXuJcFwaFRwTMnotcbeGsLe8Gx4f7NpDysTBf",
  "key32": "5VaQBoYRcWaZiCMRZxzuDuyhRJ1DQL1qFYzWWeGrqq2hbi5D3hD4n2hraDiwrvDUrW9mTZe2iFxrJDokvxx4Qn4H",
  "key33": "5Xf6mCBfYYZFYCyYeLN9urEnkNuWrWH2MDuY9vjNDNdYzfUYbHCZsKMn3ca3efUBpUWJhdVHi6ydtLb1skP7Jd9i",
  "key34": "5gw3Eb5yuLMiYvuXD5Siepv8n4nCZjFg29hYjuCJDW8qz1jbt9JHmquq4TLzTqjG4gzoX5qqsyTU9KBjpA1ip9L",
  "key35": "4XJgsGtPaKVEuUngGMAPRyQtXQg2ry64gdYb8bPCu3eThGgfgS1hoEs75F2bhL2UFmqVP6FoGeFCQmxMEJykTaSm",
  "key36": "66yuJXCgDGxiqache7qwUN8kH5Cnb8Difo4cR5ihqJzYKX9id6iSGRFUwonv1KJhfYNAmSpYH75jdpxYXko2Eioq",
  "key37": "3bFiMBS2nNVbXMTBedBczN1MvwFY4zUYWCQHrcHGETKPL23MhRDk4EX2DEY94ZugKQ5JgoCkFyfMPNY1xzkPRGrd",
  "key38": "4CPXz3Cpvs649FtX1qThfeDJBhoXk9afdLtYqhLqvhhCVtui298NsGgynkThGteXZvGD7ZTzK3Ui59bGu8dRnB9h"
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
