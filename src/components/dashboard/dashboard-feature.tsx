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
    "zHaVyvD5z166PETzVuwqg4rq9VyMMuwZhQJzaD9e6SYtbDBFjrrZJdkkWo3ArDqVFFCTSTBEVAVaMfNpEbZb1Zp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oUhgyTGv5XJ11cdYP7bREH9JN9TsxvsH2MAUzfz2dSJAFdqnp3oTHAKQACRhEWYUcSx5xUxXG9c6E9fHmSBnkQj",
  "key1": "3sL3U3VUGu6M3r5qUzUtmT84r5pnr7ycwYjXu8XbDTkbSf84MxRS8puXi4XXSzLZTMNXqUTWbso6uHeBou5jf6p7",
  "key2": "3bPTeuokM34HgNVGVKRWXHuB2zTfEsvib5uhLw2E88Vw7jTMzkuKAwDxSuWPcfnX6bmkMu4o7gjv1H7uZU4mLuxK",
  "key3": "33JrhrKN1FaWUzqLj2yNudpNNVy7NsfjgVgpY8ujMxeKoSwKnbtJhTdjcP1pxF1YD5XJPyoK3U4kpYrsqfehWum7",
  "key4": "62Z3GyrEKSpHv87Ry2XJbEFgiaT2rtz5uGhMjUH16tZG9ACjMNPas7k7SjA2rs3DTYmtR6psFNEKk5pVV1BK4hJG",
  "key5": "QEPUvY5BF9RAecz7ndKQjs9HjemqxJxS5b6hUiENAVJxig998XnSxyeX1AQrjodzEPq2nVHabpyKHe81EGMXfw7",
  "key6": "T2vBn1L9fFBWw785FLzukbriV8tRBACrRbTBB2PHYBfjdN3orDZQfXNL7QJAS5y1Uu421A87BLDa5qGF4xe9usS",
  "key7": "3G8zeabAk5uTRPPXewa7dUyqUbNo1gtgePnF1q6JmR1fwbeUEAfQTEjn2LXyscKokySyffyzTKyYxM3msW2yUWSQ",
  "key8": "3eoF3wZE5dnHskMUny8HsDnpX5udLhDW6FiBYmtpqFfMrbJrGbkzrdiuCsGZQZtbqJWbUJnzwz8PK9EFK5bSca3v",
  "key9": "3iYX27bLPcwQrxggHHDpfdCkjWdEW6mnF2dXuNoZAvuFMWPHNXKeYs1ZQxrgyp7ByBrTPtxHLbc5ktaqEGz1zDS8",
  "key10": "5mnvyVgQ3VJk5X6hXdE7kzf8po8oDEuYBwqsNLvvz98cyss783etNxsBVrQfmS8vxgrGerTyxBwMtR1s4dZHwtJ1",
  "key11": "2gscvBLyvSkAuU3URsrchNY8zQzbdi9bjkhdHiNs9vd75B1nAqZ1mAiTiKDyrwqCFiGpysYm87Er19cNoLkoUr2B",
  "key12": "2YULj658Qiqx7JnEUo44GiNwViU5XexzwRW3JpPsT1XwkDqVNyCgp9d5h9akgE7EASXbehxuNKwDAaAz3C4Qn6mh",
  "key13": "4x44WQuMngP5ckPuUZtjpx2hJC4qJuFetHnEZ1W45QLAU7sWKq473uNNBYKYEmTvVxN6qhVKUca1f5QQh4duhGw1",
  "key14": "481X2Zdf1RtxzpniyfQxw4Fo2XdTfSTsPDJzqjSVMGJFRnhxdQCQpDwS4B4dbpymS7M5KwGknbYkFaookEgt2tyu",
  "key15": "4WjU9jKxqzYsydo81QqSCQkad6CcD6cv9vz6v8a2N5rKoaTYgsnswZLQ2ZixeKr3VRYhZjuhwndHEQAnnhQrQzj5",
  "key16": "3Woinoq7TFeGoqMfAbt7963buRg7nvpM8g8iV8jXcc3kpFvKUYztoenXdbPVWTG7dZE7iB5CUtnpaESKddmvo8vb",
  "key17": "37vPzaSjvACCmuUpkezorStEaEkLhitTWgGZzVgkKcboYjhU8KmLVeYj28jsEDTSYZkAi4jidsmYD9iRR6wBEL22",
  "key18": "4roZgM9U5mz38GhKePQMJcyatBekbJ8r1Lp2z3v6gozYQnPcsg62wyseGEECngufvxf5HiYz5TXJVChmD7BAZTyM",
  "key19": "wcmn817hA5ee5Hw677apZc6EV1bYPS1obaXD1ns14Hp9PFwyreZGX4GKbto4272Q4ZAvMpd1HFD1bTGbZoCbNv7",
  "key20": "3EgH8zoqhEE6VyLmZ8gSVQaLY6rxLBiV59YCRE2JSMDAtAL4a3UYhM8jK9Y3UwGaNC5FRMHeYg744sEbERdKdWTx",
  "key21": "QgHLEYb8XC2HMkMGA6cufRTqagWevC8mqYEbRg1UG8X9ywszs6KAGN4CGT9uifCHR6AGw7FDB5yo8yeif4VXaBe",
  "key22": "2QBrfpgzaRVrHPuyXcgu7yjn1xKjsCBkvYaQe84vanswgxYDs6Dy1WhxAhcEJh2XqgvUwrChZdXxEUsMqtSjBg7H",
  "key23": "4sycfUvfbENGzCMuzxJE56qebtuYhmBxNLA1o1HxTTkgEKVzs8FDePNtnQadRxJEnQPXCxbF5sLDdVAL5j2z8xxV",
  "key24": "29wPUUcicpJSQ8BFXkdxeer2j2EPcwx8qodgNBctQXZVjqw5TqqenYGRnHtiSjicv1WmL1N9QJPQcC8mPDftcFhd",
  "key25": "26KSMNcD5cDwVpDzhZ9xsF9t1AkeQwkJYTYmbC73AgdN3WA5vquQS4zLtBVFqB75pWza3JT5gtfLqJnZn1hoPVsU",
  "key26": "2cUtvUfZWHPfbpwiW7PUd3YGghLN7ygL6S38mkVtiqWyW5MTiKtUmTwprV9dhGsDfyYSsFm4zWyRK76jinLzjZML",
  "key27": "5uRUKfshYEEzDGVjwNW3sqkUMyBLj2tDiTH1cXEVGDN27fXitjZZQTvhhQp4343wSR9t2jAPh8rBMqarEpoAGoUc",
  "key28": "4dr7jg5pUVgzydTZG29yzW7jaEKPzuSboH8fa6xN4L7YdyUKcAxt3j7mEMuPLJGgWjxXgvo2Q3wksQS9FKDjYC4K",
  "key29": "4xnjnmJH2nU2vC5GQ7tMLt66Kmh2iyAuvFy1fMHKBxFUsnjxxGRMjddJrBBTKBtafQPcZLCfkb6o8XnMUrx5crmx",
  "key30": "2GfEU3gzF363DkSLyePJ2mawr7KR2MEG6B4USzPSKf5J5RPonkuCyWAHkQBtx8fgnPHprxdrHZThUULkfNdvA8gn",
  "key31": "5zxxVbGgN3f8mV7x6rrVd5sjZXPCNNZdVfeFxfD3GgDA8oK42jkf8f4As8YLx3aHxhHNQqcSMFnVrPSxxgYXYZFX",
  "key32": "2rsxhXisMMj2DCe6t6rrYycw8NUALd44oReTVfpLHwYp6d5j4JAE8TtUfw7BdSRma29xfLiSEzNka85aHKPZS8Lp",
  "key33": "3qjkDcQ8GZ8Rtjsg4bQJ37JJD7Vdw7E9iSTMivAki5mJmWj6Nvfsce5JJjG56ExpA8FnZ24pD5YwFr9KGM3YFgKU",
  "key34": "4ctiCdRd9fcYs8Hp1oTo91DSu97Ss3jPufhpWRKUirKfSkGpXi5faZppSvJCz7PyVVu2u4uxMRYY5jVW2SPWSQsA",
  "key35": "4Q8rHhgty3M26N62wS5P1Tuuszjkt6MLiiE32vrxZVPx7wzaw6jBgjcGUAWQXvjWFHZUzfLFajSKrzDphAMjs3ph"
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
