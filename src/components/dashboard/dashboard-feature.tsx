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
    "NGiEk4u8M6g8MfEHegwR9ozva57EHw7PtdxLiWKERysy6zdA1AaNqCpuV4kpvd3rY3Ssde8WQKegNxAHB455J4Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yCWARAfnZMpVzuCdsuW5Cc2wwFnrDfno6yG3iKktk7XQuj2BuefgF3DsMbMzYMZeZGKSc55QxWGnqyW84u6wef9",
  "key1": "b7kiTDzqDtVY2hoFfpUNLQacDTxtMfjGgLbMnwTxg9ivkjTU7QezuEsYZxTW6VRof27uDJpCLPXTTrQ1qWonXZ2",
  "key2": "F9F4G7NrfYWyHQKaLNQKJJqoJ1vYKxV2g9F6pbb7J5tCz72qrmyX3bvxJEeuCxpDKWpVmfNAE62mnHNb6gU2oEr",
  "key3": "5xMiGTAgUKYAUejvWPhJrz5XkrJ8onHP5HCj5XQCNWHhpCDigmPWDz7R6hFBC9b1HzyXVFViVUSQ9ztdtMuyUGvd",
  "key4": "56J6SJcv7PBjnmUvSoea7xWgqNZnpEfEziHfT7Nmein3JXjUKgpLzPdMboPPViTiMGeWuY2JmQtKDptqtbCfyFEE",
  "key5": "4GmFArZ4Tmv1p3T4qqz1gXVfCh7oUYp7irJmwVijPLrTjNRFVunM6PiB56YQEZ87zBHMGhPFqHk6aeTmt1mQ79aE",
  "key6": "Ji294gUdzYDTyZ7fBrjDaHpJEUba5iNYzvCDvBbetDH8qZLUi4Bgmt3H2heBgjh81bpjkmDdqEJ6e3QWwzQC1R5",
  "key7": "3oxz6HNk4XbgqCgvpX2f1szRy5yWKm7i6v7vdYyHMSThxAsYbuhYNqF7iW3yTVNtAwEDwxBL5VgH18roYLFNK85K",
  "key8": "3p9YqjTsermVDi1DRaGrYo1phmJRZUUcGiyQYmbVgEMQwWAdNhAobYoC9AbNeQVqoybuDmrGbJd989AW5mGZjEdi",
  "key9": "2YYpczUbSH6hbPthiNLUfYrAQHm6DVvvXFioQYQjyejEe94LNhuzhxnHbQ4YLuSSJz4kRRYre3xv4LmVHaZXZwUz",
  "key10": "43bqGz4CHwLbn71M4xVp2E99jECMSWPijyF1LWm5xUxKNmJGaY3n63h79FceQ8D6LafdicNvgYLzQS3pbaXbXEJX",
  "key11": "49Mn334bsHwiHCMm4FnQiuYLgdUdgFjbpyysCoYGSJrJEbZQLuzGqCpAxVFRsW8Cs8Lsg3Gp2SHwMR6XHckWWPWf",
  "key12": "jP9QNRMdJRKjmBdQwfwmnLpmoZ8J3JkxUYSSwTDdDf7iRxxFYoQo9hw4p2oACzKvxKbwEVGLx3m74YYVhTF4VCB",
  "key13": "Xk3eQrvLtdveKtNTHRwaBg1UcxgJnrWY2ZvT3Lc9fGzvu6gxSTkZba33xxfSHD6eNAksc6VD1cBjkFh8vfLbGQi",
  "key14": "21VJqPeJYHnXRqxxSW34upf5UMA6DJDLbYBj3rj133MoDFGH8p1jqx8hAT2jqQB8tu7BZPwKrX5nCetZgyQnBRco",
  "key15": "5Ygu3szT8MC4aJdA5aQGXXsqrG5MuzSPQLmb4fTu7rrqS12FkHfLrsAi3SoZKeevShcbWwqCMECDnKD6c3DHUZ2T",
  "key16": "4LtLKjprQHmLQXsUWfpQy2UtDQpoDPYsL7wfMeZVqWGKszstn5PpVf29Fuu2WDqH9LEFtAe2tDNLopWswKVAQwCa",
  "key17": "HGpVPe87q3vho7RDEybyTinod93tc42Fmff5MZbR1gSdAPhiLgWGqRzJ9Cn3hV7oCs2KfyFiCjcx5oKFSkWZ5zm",
  "key18": "4L3H2x2ZCPnP9JGm5NXpp6fBUjUqge936HXNwQkHoZV1JA8dBixw9dJd84N61jyGWfun1fkSR5BFVoDe7whPcjPN",
  "key19": "2knSZSDj4ZDRr8wZM8nqjc3EwX4S8XcXpypLwKAh6uZPcHxPGRabagacEXSae63gUtRjMDvnx71NJt3ZVS8d7Bua",
  "key20": "yThmoUTS3qF8LerwR1M6D5gt8SYYmQxEn8okyktnPhquYoNbmW34bpdkYy8YRJQ7cCcyjeSJXZ17FGEkTNGLbse",
  "key21": "2JREHyCUxxSsjjwCnSfEJarnU8vwrUmrmvy8mPtK9WsR2qSavfKvLMiinY2vhUrrpZYLWbcmnHN2i1paL58sSJPT",
  "key22": "48MySLRTLd6282S7h258amDH4toJtGVpFkAGq3a2ZTGS9rABAg4k52koYMRZ8Wz11zNuNYUuT1s9vGLJp9TvTeX5",
  "key23": "4sK78bcyXwtCZxM7qNzZMcodPigKbhN9BHnSBDVaDCEmgfPV9bSQr1LybXBRWmbzumSDL977wofAtXcM3X8xHFRn",
  "key24": "5PKm4BYbmBL5afYEXEoYCj8g51EnKvKUEbLCVAv9LQyg8CEtVCmCeHjMsyCKSVkY7zwmDGaSrKQ8qwmbJCxozJEX",
  "key25": "LtyfXw3TXsYoprdqgQbD966e1M85UDtWvazCMTrNb5bokuhY5EbwjaZcxHjZ5pyf5DS6jApvxH5A1zeMt454q7z",
  "key26": "3H8MAfU6mP2TPWM2DaM4yp8ysutXENZ3nLtWLfoDhQA6EkGmJoyQx1exJEXyQtxoieZTK3gyfgVvBPshZyHRpKsJ",
  "key27": "5sS5XQet4yGTn3g9yYJfp2jYz5bz75jG4SoiaAwYDx36n2kFExRunPGzdYsaWDeCdkxEyRWwhAYATTSDqpuvMxEN",
  "key28": "23HYhbAXHdcNZtvYm4NhxnhTf8ytvJqs1iPwx5L9BaZ5jKKfWmqjHQCHjxwgWoSxH6kA6yz4YqnyAd7pkNePfk7A",
  "key29": "V6aha5wGhpLgMx1215f8PvgGN1ksYwLqtVKbEPbTNFELNGZCdPfPmr6goX6kcSatg8Cy6ztJfCdAzDmFmJDP7JH",
  "key30": "47y2UqNK21NULWtydKNrUCekQtiWaU4UtPDzN9hyXrfTRbTwr2RSCPFExevnrzRSZcS7J34ubmN3Xz28DNJ9UvBe",
  "key31": "3sSzmfJ8MZ5UJt8Q9xnCo3kuW7BvY6NFWrkWka8yMfJEMDoufV9A6fx3ifY8uTVLns6XtJ5b1FotRGTFiNg1gHft",
  "key32": "5yz3UQfUXqpVBz12xyYu23fke33L39rvk6sYffkfFcumRBwaFA8CarFJZHCXirJx6Kf39PDSrb4ZAGCMKnV1dzVj",
  "key33": "2UXMW9wVXGLCzrtgZFQiBy9yhQUQFhKyddByZEwqZroPa3KSKwMPU298YMfWiCq1Xe6ycvFUd8BQWkqbdEAT9Y4A",
  "key34": "2i3wqnA9pfg14eYrTAqgc44NpzMaQTz9Md6Y5q8fbU9rVsYZ9vysJQ3BLtbbmVRJmeUc7FXB1ZK9YnMJi1A1kmfT",
  "key35": "2aSdEgMZKSjxLxQLHoUdhEwjWFVJ2dP9DM2FSKtFvUzuFV6SmCpBVRKdDE8HCxDPGTW1RomGyqpdcFw1MCJaEXC6",
  "key36": "4sZxm9xChi1564g6gAnupzQ7cY3Dqkg2LJeR5ZDSncWTuG3yctdiQZkJ7rggFnVWoyPbi5475qYbRnTNmQD7prHf",
  "key37": "32gjHCBjCmEQbEaAz8ewJyFG6GX6JynpdML5UTfjDZTxdK5hnEs9vwFpsqGndzXuVuDVyUAEWMWyqpzodRHHPux2",
  "key38": "3Y7GBPnF6ASKbwJpUhhmDswFPAhE4E828RA1vwSSqdLsWKsCxU95QqZJ8WEoRJWoRdYxq16z5P9tDHC3AGPap829",
  "key39": "2oEQy5UhqPB3jrEhvEqyCi1AzkkUfuNXaEQfkFEHsxoQHFVt2DQsDoKzSXubqzwRPmutXsStVgon5u9izxi6Dvij"
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
