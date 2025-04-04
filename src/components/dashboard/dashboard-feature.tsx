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
    "2H9hp9DdSQRdjk1VQ1QwctnVebMmEPbzkiDukDLAtws3hbcxDyMZJQWrQfeJUM7FvQ8sHbyVAj1VPqZyBgvj6wgb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GimzAB1SSZYtRrh6U36GJJFiE1vcFd9Q9sq8oe6W7gjz78jbAv45SxdKZZ4ZodUXs2eJqufeBKgL1Bao6SxF2r3",
  "key1": "387U8vq99bpzYWzgT64qwgt72F9awp3yU448bJcnCBBVoRJ2tzSYfuHvKsK88cpN3bvBdRxv1tXPKtqXnVxhJyXR",
  "key2": "66ciQ1Ww8aBQgokcs1CUcjjs1aoQVBxSkt4gWGZX8mXeKmGu8tm5Aw2tFPwkM6b5xZCRhfAKWL8Mp6pGCSsdUwgb",
  "key3": "2UPQGg4pDCbrtMusPsbKpyHEuSKuPTTUYtd56ik9L8teSomKAvPFMVC9Ft1XPPZhbYYJUG54TzgAZ1xH38JRctAW",
  "key4": "4rXwthDT93xW7E5rFJuADrfnxZjYJ7iWaos9HTgiSmgLcNpq8o8T6fSLrXXGWY6845bZtbEf6otyrF3URqfUsJrN",
  "key5": "2iLGiA8UTFfhGbQJoWHARjP5bEuMHqFKkshBWr11juh5t3CxPbxkSR7WTpRmXPgqmjEo6F8vJLokU1SMLmxd4R99",
  "key6": "4NzRTrNNDfbQ2bqyVFxHs6j3AAupkUgyafqssGgdtY5JqSdgKWC16wBbamre6LHU3Zo1RWmFWkWUiiHW9iNcueZG",
  "key7": "4NAAyhBTz63TFMavVkHRaHyxaNtNDmhNaZNGHuMSbbyt5ahAvr3Gn9Ec3AEdbuinnGgcmMsdYe1TWvkDTvwRwX5S",
  "key8": "2uWCL4Cef7iiFFvigBd7B9DeorNhndo82Jcppr6mKLegcKTQVyUa4ByVdAacyJcxrDi3TtwVWbaq9N9MTXBGt9F4",
  "key9": "5QchKCo8oqo1GGwt5UqpWNkPzwPKR9gSLa5eVsDUgrF3GYedgzmVQ6rNLRxg9fAticAzKPSNVE3gHs8DsVHGoiCs",
  "key10": "5yfcj3LsNpPQTLqU9TKZyr2A5qdXHgSrANjfNAexQ8VqRMmseFjX2zqcdvgrtsTdFqMaiLdpAtnzA1SsLQUsH545",
  "key11": "5UM4XVzGpDnoMmp7G44eecZwhKLn4hSueE3mTmA7z6MzwcX8TLkMsbu4XWt7PftNX785JoBowgNsKQN1173VuWWS",
  "key12": "4gpN1Dq5eCeDdtuGVDVEMaGaARp74KHLbqj6z6YCBZpr2o8ZBTjmmNJw3FzsiTbPh2EG4j7q9DUXFVCwC9ZPDw2P",
  "key13": "3ZqUEEgbaWiVZDLd6R1A5h2tGv27wWaXNeFtKR5L5NKFx8cQUG7UMEWPCigowQqKHSptfX37J8WpBbeiJQs1Svhm",
  "key14": "de5DZVJUEGFuPbtLkfoRGj4sYUnrEzpryHd5nYvBTMXoYXgwQgBQ52gF2w1AhViQEAP2YLQhVx4gUN2K2jrTopD",
  "key15": "PcZtdupw6KSdEfw6etAyrLZXkHw2XjkXM99UuPwt2mcQtAAqRTD3KZG94qyKTFUY6iupCeNnsLFFdzrDNEJwUaK",
  "key16": "25ym5XdgGSh11QRYov8oJaxBvtp35LxB9UbgbGQkDoCFS842Xm8TQrhp8dD5G4oHxXJss5jHGeRrndbrHg3fKthU",
  "key17": "4vZVP1U97B3Cnp81ZhjQY2AUAKUT4Fj7DKdjpbXDUfpZxUN1uzxx7BjWoCb3idUuvKSUx1homGJ3HQW3yax7r8cR",
  "key18": "b2e4pCJvyAY9eu9MfSdquRXx5fWgYvG4YMxgfmGQzcKKwYZdcumrDZ7wSFzyJ1kMYoE8W3VDbfXREr9YYypqFgg",
  "key19": "4Q9sfCxyzovfMjzH2EzLAyxHqSJc2ExhxXeofbEg9L82RVrSdFcpTAm8YFkczwPJhxmttDWxMXJLrsthAQxNGinT",
  "key20": "5wbrFMfeXoh9YTGPnq8vaXNfHSqBcHq6jxRtpEyA71CvrG9xatzuWB3SLpay43mhubKZpPeGGhcaacoVMvRYbxsV",
  "key21": "3NA9whx88FnkzghRcjP6ZKx4acyX87RoSA8YUPLX93kHnTachwkUC69FBHWdKRK2fQepNh4Dsq7wkvPviVWean2B",
  "key22": "4VFSY4JKDoxUK6Rw42ZmuDrgq3Czgrx6uuut18giKFkAFVky3Eho8p3Ehw3zAjps7MrCmgjrbL9nWJQqgQ2DPGBB",
  "key23": "6mY4xik4oTfSgh3z6WUUV8worsV4GAFfGJY4CT8iSbv3jHLg5oQpgFRQZUhxQ1pq6jZbW1GKdNPcUipT1qAYnHg",
  "key24": "A2Q1gwe5XtykqMz8RYNWypjQdL5mb5UWyWrXnR2bx9mtHyXiAGCqJckAyYME9w1TbAine79uJHZ1KmC9N6ema3V",
  "key25": "3PKjkBKugefpuTf7ohj1J4jEyDptTru8ZBAXiPHxPsUFW8QcF9KoqfAKHzgG3Q5W6vr3C9uXhSGTxzFYAVk3Vm2g",
  "key26": "57UvkXaN7gzmcSnHWojyNfzUFBc3aLjrhDAbr9KPGyAoSmfCs9wjFsfniwv13AdN7jFKqp6SdhG9igpwvHK6rqSg",
  "key27": "4rmE8ogB7MW3mA4uAvx1emLzfe1zcRbmTEXsjF9YnPqZByhwoyBLEthxibqDKnQXrK6XUZoeEJKAGxLbz4iwbaCF",
  "key28": "M2NRLzLRWhqEAjxQM6vMVjzrsyh1rvRX3gFsC4hwoHZWKjWqSxVa3V4Z2KiziB6wHngSMjP1afyWEupvPQyWfs8",
  "key29": "5QfVXKfQKSw2nXEoEp2NUStc8tTX1y4u3EDhtBrjswC1z4aH6kxm31eBvEbJct6ntvbLNM4BQjFzh7ND4USihVqX",
  "key30": "2qS4tGavB8ZKDJKQBo4cibhVNR1g4a73EdGtcDxtBJWq1NvpvrR9pzqErNi8kHGFtCvLH218LcPYBjrWAC3qPS1P",
  "key31": "5rcSykRUeBjpvnQCdatXEEJZTVsZMYubcQDua3ve4PS3EGPCTpEGxEJk7ZYfLVgdXZB34qTUqTV5Efu3KUcYf1T7",
  "key32": "2dJPND6RWQQPYmo4UoAPsgkhQVZ8tuMaQMSoE9w7TREQ9Y1Hp3Wnu5wfmfcD5mrPudkvLrAdCwmvDxzBSsU2JWh7",
  "key33": "2c9QpL6YBxH1tR6XY2V5KRYNe21VCvxVvq9ryXY2Hoi2B2GfGmacw3rSti3f5HF7bcvmTsHPEJzzdmuq1w2MiigM",
  "key34": "4i55JohTVBVdWdfMYNSRUWEo8i3wXUyQbusR7iyEMdBJ8yUT9iYqDWtJuznK3zA79KGACNRAgUzZhagsq7jooYqh",
  "key35": "4bZCC8exVf6H7VounjB91u1ETyHiZGnJAALugWCUkmYP2TeEY3h7KdFFvwAQy81un2RaEnSh971DWUzUh76NFpvU",
  "key36": "2BZvUjeonFDjTbWsDBYoCCvkwx7CNFUHynyjpJoyGPq11QTVJzfDC1pZ1BLd8cxeVQttvxjPP4rrb9GH41o4Ht3d",
  "key37": "2RmmuqMBa3JiyfZHUa7eM3QcATyeu5MPTY5gjU34QVc9RdQAK1NLRtxU8R67nYRPk28zGP6qEkSkZLMbit4zjcDM"
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
