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
    "3LuA3YJrELMTQLdf4mU8LgetWkkG6MvH8sGimuMAHKXEjY2Uc3ye7Y1nVMz6FK4JyJii8x2vJheQrkNwigZfgu2P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yr1tXcAf5bBYViQNSRndTtqnR5C8vRTM3PdTxb6AgtaDoqYhdbtuNARiT9ysvieGCHRGEsaKSHHnJKnFyiKCmP3",
  "key1": "2sbebASo4MYeQat49TdXjWt4wvB7oscwmFTTBTFGHwVQv4J6jeAqjuRFKcAztSbMhf8B27J1fEf7Jpb9zGtYJKeP",
  "key2": "3riGArBBJvLWEZweQsgSnmHpAWrNMsdTgXnuLj4ZjYomKZf8ihNd5gkrJhsfAKXXKct5uBigomtqbULHQEFXN4hr",
  "key3": "3ZmgNCZCC5mJ64JvarVSQHmVbQw9v1ENsU8SLMez7PK36PQUAwZm5ztq9XzMgjMPbATfGwt89ynLDfYP2QcCi6mb",
  "key4": "22CxfyjHQvJWfdogRnCDmEvSbU61aDw3a7NqksnMi5QbN5Uy7hijgmtQpgFoBGjw3VdY6T3Kg1vihm4xLNn4aVfC",
  "key5": "3hWU9H6VXzKXoWQ7gcRmBwQQJm8FJTawCasfxnHv4jBu7DiFHkh54Qz2RkpBXvvyzrbR46L6eYg78MT2nNi5ADsY",
  "key6": "4g9WsMZsJbNgp9UsN9bfmNd8S8QeEMC6NbJGAZtLCSbsLpAg5DWmcpzPEGNPBgKWJhWvaij1YtKyumT3WzirXN5C",
  "key7": "5d6eKeejgR4MVXLsjk9BJvaUP2mVWEAri8oWuhCjMvNJWCZUCbBmAX43f2jr6CK3Zshy8zS99QkGq3ZGxy9Gop8i",
  "key8": "2uGuHidQHR9JEYqgLL5Hg9aFQ91yKBaZ3TJkFggYHhaDNYpuNcW6oqsEuZQSEiehnBXb2Z6aXBV6ovCMm8Fu6GjJ",
  "key9": "4xWFznCatJRxEUtZrvqp3k223YHjiv3YHLgZSraCkt25HbRwAGSb3qYqLdHEJjax7wtCasWuVzk8hhcuvJxAAc4x",
  "key10": "52ydKALZ2GQ5Qa4A5qfLW5BgZZ8qyDGhzvUAFTTSx7zDuKhq4Z6dfxpVkSUfuKV983ycNoNxsjv3igSfvUg3nYiB",
  "key11": "3N1vzTtUKcUeYyDQEMxPfBVcCjfsWQBV9U1RcRvH5D1f1nx8ox5KG5dHLegw3HLdKP4bsjfuk4ikgzcshG9bB3sj",
  "key12": "47zo8yu4SJzd58ZSWTLpQNwRnqQZPuRrTAtyd2HMfjTMPvia8ez3YqTM4oAPyRA9zi4DRhW55DwCei4orChbNe3Q",
  "key13": "2vuHzPRoMaeZkaori7cspVWNfTUvChzn3rkuPSeZBn8cL9NTQgmAE5k1vER1PM2b7bSTdVw2SLa8pA9ZpeNmm72p",
  "key14": "31cbLCxcvFP5fG7bspuwkxz7jCQWSF38uxTEgqiHeX7NHH9Et7cE8wbuoYnBPVSPUV2ckhi3JzgMEe8geez6R5tv",
  "key15": "5Y9HijAoNCnqp3yfYbTzAgHxLd8iYu7D4BX4RCh34pTPYmYsB9GBb5bFzS1DwvG1t2jKnCx8jKVMR1emLZ2EBfEL",
  "key16": "554hSjH5nYCESDUZjszyL5dCJTJs2ESni8kTQcVyuP2fbqAoaUTXtKRiXDRVQq5QERouxpBdNRwBpTubuAEmsgPo",
  "key17": "3dC4V2nGr5c7xHkCniZ855Q6aa3TEkfVVBP2dtu49Nacc6dhXha9LkauwhzCqwuPBj6uTYaFxvBs39wW3jguwR7v",
  "key18": "3KdRmJRizgyDzTGL3jMYsgbo68shF4PuXvAwRjwSkX5iGZ3fmZCLds2eN8iNR8GYSAi7867hQWrnZScFno1moMyK",
  "key19": "5Bcpvah2CjSW5pToJw2W7Jv7fdahNaMDqp9JwKGjbqEziNs3SQhGgYvsPYtKLzZcFpT5RQAYzztw2aGWDQVG8vVS",
  "key20": "4P3sTP2YfATeDPcQvBizip9NUZ3VftmQj5hxa24nXRzYMe7dFaGerUv2FTE9EG4MvVpiEBRDHHeagBY6XDXSMD9L",
  "key21": "7bVzb4fW4Myen5FP2ddYyAkCKCLnBEUDCWZ2TbqzUfMF8g9r3uJQYNYPq2xCyadKvwCfDFXnc69y788GzRVWc5c",
  "key22": "66e9uMMpchXc5gEWYpyHd8am15GKy2bB27Kjy7jhE7idZM5KmkTCRJXBsssReyDwg5Hob6f5YiAGk3PQ4jVGWhMK",
  "key23": "5bUZews1Cj1ZdGWNPQWoVGMbd8dApQoaMm6UeW8PF9PpYsPxXvUx1epGxrMgkMVYoe6nekg9F3ookGa2fBCxUS9q",
  "key24": "4nTKFaUcpn8TW7gcEkU91PiLksi6WLuc2aMK7Jv6RMwY3A5Ex8Up3Mgv42LbkMryDZVZtor5yC3e665b8CHGU2sG",
  "key25": "4DUGG8UaVX72rcbZVTbQBE4ZSHXmpLuj9yGWkzACUMicXx7m4CFKB1Vx3tNKhPMDar2a6pAroUy3gKpZ97yZPQuK",
  "key26": "3iboPffnc1iyRkwXDWWDvXLcSwM4RLF273hYojrCysKdZp33L1iGmV9bzWzL9duy8bfDFAAQWgQs8qubYBDzYzkh",
  "key27": "2Ca4rfF7X4SuLd6ZGYk2ZbAPYghwZEEQQcynJSp9cxekUX9FnD54w8YAG4ebaFg4VTXsydnYxKvof9q1ytnTczZu",
  "key28": "3He5TuLwsD7m6LEXf6WEe8c1tEbjdmS9hbLuDFZsERrVgw2z99R7ibLekjqLvdFbojLm1vBMJ6mBVqxrviFVYZwm",
  "key29": "hPdWudjC6pHRKz5JVcBEpg8hhJ33yQcDKWhPLP3z4eCTGyyWxTSQxQt3Tdf3qERndCPNo8WDs4x67VzwcGDVBQS",
  "key30": "27QVCzcXiLFnViuHB3kfaFSi3zm6LtPBvkAB59rjk8xhh8Bt5sv3pfNC1sP9YTsLDGAviseadxRLUZw35BWkdFjb",
  "key31": "5pa8i82qxS352f51ypdXkw6HSpqMcpKJkgwHGVGEJXXWdNqEMy3HTcwFGKfQUdNsXhjF4hkpGMgFXeSBi5rii4WW",
  "key32": "sk3SJT2i8WikvsBtCNM26W1EbuvbZVnd3ojpcQzFGs1xxMjZoM3r3giti6b3nmgRadfe5quZF3KZmutfvozVcMh",
  "key33": "2BJmnSB8MfRgXLMS43wzzu7ABfkpvpm49kVXi6tsUyQDrH5S3hswRENqbD3BcwRUYzD3rtxGLDPaMXtRVWzzrd21",
  "key34": "WP8oiUbDCmTjhiveppb4aFywhDAdLBFKVxPgBxmL6ABm5iJJFmTtHRqoSk8smRfoBG3TQLyeJHt4oR9L42sGxch",
  "key35": "3s1xNt9kPVBhHKLNX4pET5XwpThGCcSTbbRMHCyGenKxC5AKig9d4jGoa6aNGfkT1hKsq2fiuAXDJgo6QeVBbVAB",
  "key36": "2PTZKUi4ye7JxfLMpa6RJkS7xHKwtPJG7SgtjUwjQPWx4kPau2bKw7G1ZSKLAM2pbx3HqTeTj62D7FyVrKS22o4j",
  "key37": "4kLMq37WdjPYBN2Rut5xmr2DjPkc1HVYN6hWXCCr6J5gyFmLte2oXFxtnLSmNE3uCXms8KiP1f2ZhNtVEbX6Wdsr",
  "key38": "4UM8day5RNbcSryaSJa1o4sSsFFUTqagvYbp6sXGbU1tni82wnPaXLYXbT9SHHZTFRymdwy9N9B1ETWsjaQpuxYy",
  "key39": "5USZm8SJiNWxvVANmKmTRkz2rPZD25e6LJdbBTtYmeYNCNPczSR2WpPYXYV4oXu8boX1Kn72rEyZtpJiAEZYw9DE",
  "key40": "3BaY37GcDKNva3EYfe6pn4ZDr8r2FrYdqjamn3ntEvYoiH9h8y6LUi8KxP6LgR5D2dnFMRCs9Zq8rty4vxNUctpp",
  "key41": "4KH9mmogR4BVxMyxFbggqfTA9oCVknmuhtTcAWoBEkasikzLGrpxFyftmdusKghVLxdGcVwRTWsn5nREFHR7ARo",
  "key42": "5FBv7uG14wJsTm1J4br61xWfYarGmXkp1GRAUj2mw3atvodcHncXbZA8bX38VAq2ySGz1Ne5pZKxshfzcxYfYavG",
  "key43": "4pSP4VXPjdwCavmbtEEVALT6qbfQSVi4R5VZWHEaDcDcz1uEs5tGiV22DZsh5vfEtzTMrbtYMMKSkEYg4dHhjd6F",
  "key44": "322qRJW6R9NULF2jFzYJM4iwBR8SScGK5Lamzx3iSQxmXLmpXaog5pj6rhC8qEky44ZQEZxwYTqSoeDXK3Pv2nTN",
  "key45": "3VSTW9Tm7sLSSL3L9JWjGV13jZYRQfb1MJij8AcLABANpUkJq2CyAjtbPZLmp8HT9ixVHkykVZbhx4TGSBkZ95PX",
  "key46": "2nd18nfnBHbSKVxSJU1Rz366HwDMyoRtYMiVcR9FE2XkdoLSaF8hZCtKi7mCbvLkVoaAMoqsgqJftMbJht242byo",
  "key47": "3KmDb8989Vz8Zuzd7j2cz8jxzEGdkwd2WCGJrUpD8AJLLTT9zosWowTCr2EMtYSTTs7jR15NkCTfHKMozXduZBEo"
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
