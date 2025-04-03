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
    "5EzAeA1w9fCTcA1z7bvhvjgmApZf4tG4raK2zLctS3s1mn6iLdVJkm6rQn1hBdF6dihZwqi9ASpax512x3DxJnYQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xucFwjMzER7mfrsATB9Joqt2Wcen4Q6P4N1KM6f1xL1nQN6obcG64qReTE2k9bMsAA5n72bBxVnuw42MLmc6dEq",
  "key1": "Er9efxTaZGuy24ns2ZgFMRTnMNSQB4GNJZmyAnkXoGBUr5FR6uom5PS1yp68FYHpj336SM2McCzX5FXSs9otH9j",
  "key2": "4xgzmi3A5nxsC9ccZAUiVjjUyg3sLjgFgiv8BfxdN4DBSSGtkY3e4S7ifW5HYYoLmAa2VSFq96b5oQneAGTwTSSx",
  "key3": "E6CPsF3ytwLfokyazYqy572Zi2tVtTy4Jpryk8i9UecZGBJJAuSYny8Yb7HAwutAb8nU9pMoos6uCsz6zXeTkRL",
  "key4": "3HQjvh3rCq2hptxYHmawXy6ZGZzVHNuomTKGK3KLa54TnbZnKQwgocTwE7gHF3KEKBoxDRFWTrYduf94HPFWX6To",
  "key5": "5zLK4YPKckDfKd6qG4H7a6XaiaSpacHGMKoxzuQHc68bDYd4otC64rFzYi4XbUFbeKQmZXjWe6AhLSmKzBxgam8R",
  "key6": "5WDcYA3k9iaTJRdAaFptRheY3cPGf5csHnw7NQe2Ptjv97yNedr46eyqc3YGHug77e3Y2quWiQD7C7GoAc3o926h",
  "key7": "HTCYyuMXNzf7v5EYVpRW4FrQo2MgJxRswSLFjr7zb67U2rgYs8RBxUNXp3rP2nkk9XzqNWhp4LwuCWCVNNef92b",
  "key8": "SNBFR2Y2sA1QNinta9Fw1Tw32WTeDSHqQwgBjNE7Ek6JFEgjZStPss7o22DxrcE43JEoU8jxJfkQvEJ2S9GVu6D",
  "key9": "56bSTVCMw3SYhCv8LHhMkrp9BhMFBBxHJhoGJWnHjjR4vDjRYzA4gRbd5tjk2bzgko3Q3DMbdgsEP4uAv8ggZyKy",
  "key10": "3oovdKoDcRy3E6Dv5tBXDGfjfXVmJ27BUBECDLFtLVZ2uTPMg7VicRhMUmARaDQQz7uuKb9rd6AjuGKHzCuX869e",
  "key11": "P9x93mrqYvsGE4kHkchwTPxqoa8xntkBRwbsZ3PYYMi5YEAbNWCiE6FXBBGhXFRGe8wyxZ5VEGvdejhcMgP3fwb",
  "key12": "52jLbC22bEjZciWcgvEyszy1JRYKy92aatzWSFj1maubQi88SwxM96sBfuVt5L4Bw2g7h49wELUdyoWmrBFrEfwS",
  "key13": "3CCFRdvaMnXJh3BWkiehGfG1w8NeHQvEmuS9tmWn2Wx1gh6Bob9HHrAikD8iL7hAE3cK8eokwLiNfNGR3mvUsVXm",
  "key14": "2j6BFt9B5TBuerySXZpqA3Q8iLFdkXJpwExyypPxYzh6LxmwF2hNhcNv55h7d1busACXRPYHWWKz1W6FqunfgHur",
  "key15": "5TjLt17hVcDhH358anQWkjhdRBsVNMHWx2Kig4mYMXkNsEcnKnbXvW68ExHQN32EtZrandtGkG3SYwkj8X6njo1Q",
  "key16": "3oLQLGJk7Amt79xECYuS8LEcKQmM2erqcBgMKAfuJtxm6xafzPut4UpBjk4WuJGocvMRhgjQbp4xKcexHD8nu51g",
  "key17": "bj6bv6PDW4mwQxVTvHm4FxoUMvgH9FgfNnknjEWy2H6atuQaeFzyjFaqUfc9uvHurdNpQFcLMtvEqZA8ayxi344",
  "key18": "5xyKCCzE9W6GKvLyGGzWST5itPBj8T254LEcmfZHnRLfxDRZjog2iy2Rt47s2HJ367faNh9gNPL7MaaQD8mxqQaS",
  "key19": "2Ra7ep5zYHtCe6hJNYdbb1kBJpWSdj4wLAwKEBHijTZ51RCiK1RDhrJSdn5wEfLfqHrtRp11heVpEtA7KWiR6RFL",
  "key20": "3wumT3TeBnpjkihZYnZswWd3gR4Rmd1xKRKg1yr2oKvc7M2oVvfi9WLKZa5AVQqxWxKet6LM9rCdhKRwgieepvZW",
  "key21": "3e8YN7MsWx3orkfX5bqQsQceNWuQ3tf7GyVzB7xtVQJQMR8iG5HHJEiRehsSzXziokrqYgqJ56kCtzCx9GWa7oqy",
  "key22": "2YK6GheEbSpmuwjnJaM9NDnEGkUn9F1ZP4sZ4CnknkvoeXtmHbnZqLZFdf4kDdK8V4xtEAXdJqYnQKkSq4eBa6YK",
  "key23": "2kYy8qD7Ywc1jn6jwDJHuRiA7cD7y1f19BUb2oVA3YbzimxMn7uuMVphxgjvfncK6N4EYTMpQayHpBCSjNEQiZVZ",
  "key24": "43AP1E2EKqpXa7Wtxro6yish8zz1Gwosxn9RZpTB3BycXFmfioCkPQaV6kmDNPnQTRwVLzozAA3t5q8XnwRXwXX9",
  "key25": "rkks5tm5tq33vyASvJ85kxY9nFBMW1F2XGBS3snAPvEEZB26hgTxGC9exHJkoK75hssU8wPMp8YNW5DzrCghqbK",
  "key26": "2auSzgrfr5ZDVfPT4hJgCgVavVWrq47E3NgetDY9chjFFbnDMpEFmf8b9hqVZA5eGf9N2TZNgZaAz3RcB1LszfkN",
  "key27": "2THt33j9ya9eD5KdT9MCU6w7xNy2oVtLn5JZN9gC5xKm1XQ92kbtWZg7FUtsToewrdTukqhWrdniwtarggqf9dw1",
  "key28": "4RHGxAsiAYDv7j71JPTKrsMEsjhNA2GBTpuDToVi9L9U4usUdKEyZ2dUzqh1U2Lq86zD5LEP1oF7HuiTwNoVVNo1",
  "key29": "4CMnorRyaoKzV5ak6xTdnbkVqjNeRQjjR3zrPSXsBquWaQEik8RFF6CMkVuG9JVQ5ntaDF5Kz6qwEAzSo7RhK2sA",
  "key30": "469LMXD89uEt3SAeDs6nML2iXt7Qn2Jrqqrsv8kyJbF4oxcjvGMhDsuiqkZC352VeYtAtQ95wtqUuxmcxJxwkaKa",
  "key31": "cAQbsSiGwot7Ckuiujr5xZaFG41b3JBYTzWnigMY1DkUd1Ldas1fmtf1fJYDYM2BXanuuYtQLtrkGU4cmZF5rXx",
  "key32": "ZMUxwchFLGkrUGZWt4LWdeWrZME7hob3SFKGcTXufSx8favF2CyMyDftWYP1hkz7h5zQhiJVhEgzgT2rHHsX5GZ",
  "key33": "PH8zyEYKQqpi1mRD2fXpYoEqWf7mLeGgmp8HLy6v8mentQNpEUti3j8JmCf3dUbvfPBuWcaZQp8Gk9jJaetW1CK",
  "key34": "483gqnJj1ZVh9ZPRmRW2T4RHGGec6QygyT24RS5U7ejhWqzkEenvB4TwnqmyavWtfuQRWPE2TVymxRF2aMPtUnt",
  "key35": "3aoEuockTkiBTmqH5PBNsA1QheUnEN6SMmDKSNDmk9t51Dnj3t3ALvFtnAvw45TTToaQuzszJ9ETAExiXKi8cLeK",
  "key36": "5gnusQsW21LiQ2VPgSHeqzZQTShshGKioirDRrHaPZLJaHXaT7FUPCo6xdG62KxszqsXE8HZfHEooZHaSmS1xKzg",
  "key37": "4WqUE3yXBwiBjBr2cXqqz7FZvPv34SVkQcwDbexkZf4ZUCAKbTyd2GXeqozASJytZjsHL4PxHMPpbj2YHS5a9fGU",
  "key38": "5656eQCWTppR25K7e8asvizAesoqiD2gQXe32vg7neQKzsg4RHHGSB562F4S4pD7M2ypa57hGCvvFBo5qgGGjofn",
  "key39": "33HehbSPP146eyJDBwrL6Yu2DEH1tAs6X1DKbzYkCtMSTq4cqckDvGLM2JEfCwAXwHejGiDQdidBZj3HWdu61Uov",
  "key40": "2TsWapujjKYyoqDJgjWfZw7kGTnmRNRmpMtCBcUxFLJpuSQJhs46bbzX9V2WUAnnGM2dpGjWzuYVFnjbFsM7M84J",
  "key41": "3hrNgk4V9PGqC2BH9RWzZX1dkjdufg2QzaGbHcvVV9fPER9NRJSCy87QsxtBE8fEJsi1CMahhUCyDSdJUMPyq3cf",
  "key42": "4rH4xjbnCU3GiWzCGUGhuvS8gkMvVTwYPcHC554TaR9VxJVqsx1iZZvgCQ2ARtWEE4b4iKhsEMyM9ruznp3iQJEQ"
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
