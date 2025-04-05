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
    "55FWnsiLu2WhE3JoYFEurUHHHSePyrLYUNSVwUPXHAscXRdXfuAfEoMYgKrh8KnadzZXWGikfPQoDgNn5hGSuH6v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RG3xzBmqrUN2uZrnM8aQJDvscuAZMepZJ1uZnVbYq7PpwH6kRcBtpDmPYGFyqRi6L35piJ2SEuXFd2Dp5YJDrm6",
  "key1": "J2DYfWQVFtCQV1VUAsfw5ckhj9pYShN9oqqC71yriHWt8sJ1oMZHmh3RnuWsWP2RGLBxBKzrg6WPLsBDSHbk15v",
  "key2": "47J9YvSrsgPwfUmMZqMenERxQAb2G1xrCLKJoAUxeY942nbwmuFmhRrHcs3VJUg8FJQEnrBtjk4MUUUJbjMHUrkp",
  "key3": "62EF89xhebo7Fx1sPVgpEj3HD3SnWmHRBRkAuiMWhNmZyuTLKT3RbDkkBhG7hNz31sEmtcem9SLLynuAr4WSLhNG",
  "key4": "3WEAZB47JYzkfrJm7fotsoZQgbSY9yaidsVW5KXGSWxfxn6dtRrZR8jG7cPaks4796PRmJvr56Lb81SnyJX36Eda",
  "key5": "4Qkxm2Kvks7MYBvNttm1b6QdhGgxpTWYk6sxQbi5vT74jsQEdiRPN5WUXS8U6FzFzLQGkXZ2kihxUCbUgpQ8cdnv",
  "key6": "2fT2WE8qS2EQhdgijvi8gAkZQcfn7sz7PbhCp11QzLGzwDZNcUZDrEvBF8K6LaBxxwqHPUmbeLGma25gK9ePMQ6w",
  "key7": "2j4KmaSzVsLfBzmLkRikGCfvGfM37MSSe7qzgQbD3t6JX7efyBf8gu3ZnnB1jgzW92b19YmWz5g8y13xkyr6yxFX",
  "key8": "4Yw9TKhTUycgNQXhjykbyLaB39mH2JxUFiQ25nCWtYnf1zQvXJUtf1vxjEjz5ERmXA3FxwTEYYKwzqoiNwp1VQgv",
  "key9": "3PYefX3HGx8vWmBTtKui5VCiwkzGZLqpEXcYwUruduXjjreMGCEJR36sGhAFTH1EVnkJMrUoHEKVmLBAfggDcKj1",
  "key10": "3aJ2ufZpJo5PFDqGBEMaqydQyNsoDjsxLvKh53mbbqEfZw6vHYkzv9dupnikcBJJfVQtJqinvVd81PwRnzB47kg",
  "key11": "3FisZTqPKXuBcQA2aJmyHddeYrSefyLk7wgfowKWosVaLEbr2rfzRM3WwrLt5jxha5mhbRCJeJzAiLJ4oBZUExos",
  "key12": "2joW4Z54KweoaDpVLjZz4c3mZEeRarWPVm5VjHuPA1giuPix1oyEY7hQPyTruNsx9H3fs1uvLJ27Xda4VSLxvNTw",
  "key13": "4sNG7B3YCJGDPbgVr1tufEVmZ53LhvzfpjVez9TvT3g6hJdgnoP1RN7xPLiek1WB8ocAcNcawLzGa7SZuWxdjuuL",
  "key14": "3WisXdwiKKcrET2hrQMbE9MCcv7UCrxZngZDx7rjos52qEKGBH4t8ZXey3V3qbA8i79sXM9tdsLxcZ7ERpGkgQHX",
  "key15": "35dWFnNNBh222rq3PVYhFGrbTJ2QnGhGNnhMVBTsPitRVUkTduRzJx4A3GWzavVfiqsLE4Rug6R8n2ByYqMyJrH9",
  "key16": "2mzNUdb1x91QPNafNMJqebYj61vWXYXLkgezJFn7xnycwFsrdbaZUsXxHyCBwpmyjDoi3CYr8xiwongzcnvztaPj",
  "key17": "5dZ5vTNCEMQFzhJRnWoQQmSCEBte4sBrvnB4ybCxG3bdLEfAyQgk8JqA9iT8piussDrTWX5643yVzzvLK5bk1dMv",
  "key18": "ybtWndsr3U2XVxf3bvZ8x4YevdoUbgPXJXkmur8PiPUH2F22iwgjQ89Qp8znA3tgw7YSUm9mTSVDuELHrkYgJY6",
  "key19": "5NPXC6KfyLAnMDrYFVunUTr1FmzyTopTgQnn8NXcKe3qyYpHo43eXPg1HR34fT2VvWfqr6D8imKB8NXE6xawoFDk",
  "key20": "R4jEN3qDpq5W3CUdo1LgVEVUuWnumpbpXmAae5zSMpMfCWamFaaFje1RUzgBbSXP2iB3ksd45QACGvGMaPJUgXZ",
  "key21": "2QutosJjpC9UpcuHk8w5jc2FMbWuaGCn25JuiV2Lvv7amqdspsxGQ8WQ7UEpqwhWkL66setAj1MZeECwNJh7MPxq",
  "key22": "3mNuQ7qsBvHdwC8C3q9AhdQoti8Y8WDVUdJLs5Y239cdq4L647TFS3DHZpXgE4zSUesVNgJBAt5o69NxTavHByr1",
  "key23": "5P8PvoRkxgiSQGXyzmgtsF7s3ed1oAanLTvUwenztPihtshBcQFZceskhuJQz14t3qTDdCxXXM1bxNgbnvgzeA3T",
  "key24": "5V6ivdsKaZUn5hM4C7MtgLSbjZvu1XZKMpBQH63hkSwQiy1eCKdSn9YURE4nUBaG4EzdSF6ZumjjQge1mN8j774F",
  "key25": "C1L8Y6hvLT1YeU7rZzFjA2PhtbkaqrM8zSdMf2ay77WXmgdyMvFqvesWYLAG9SCTDjVJ5qGaEs28a1GN3b3S4Hi",
  "key26": "GSyQHgWadFCKdLEW9pnPkvcMQZCdfSo4yFQe9jzG8bAQXRzSNxoHQCShHww6aSVx5BGGWKup4nR1GgmRGgPkD4w",
  "key27": "3U6A1aQKZ6VFmQ6CwWhsPVJrFpXCkKTUNDHUU5ZMTPWf7nTRKHq4oZi8JCcUcs9ySYNcy9VHtqSz5BBZCMrQbB2d",
  "key28": "3pB4dfWZzJBVM5yd4iQmK53eQGKmHNxu2S8ERHGUKLKEg45cb3pg4TyqedrsCLbp4mnAAcFjbTKxHsLqSyBPs9Nc",
  "key29": "3LBVHtxhLDH3NQVdSwP84nGUhgdwsnXz77p34U51MuA3EX5619fuqGAQuZyAciop4c5rkPm1dY93wUttsQEPhaLd",
  "key30": "2M8ZuiCzWeMm6ficzfK1hY3yyLJsHmHgbRLpHreCnBPPoENFqkf5yCFmvzw3XLyor6awQ1CJtxov8y33gwwJC5ME",
  "key31": "4kHAZWbx9EG6bWTrKAXKvkr87GwGrax4499LdRwxR2E1amXGYkrBVSL2CTMLaxdSKtw9Nh8wJHbxxGsvuAgcFep",
  "key32": "28BHRsn5MJ4p2WW81LgRM3DWR3Ce659kEf2td71KoTsrdLzW5hoXNBrvWtzuvdyyNero1qfTzaAi4T2tefJarNa1",
  "key33": "3VSKGkyTyHJCwUfCCLQrrkUSkBcdmwPqf5yqAQCRwhbFpgs3DRZALGysEfQRXr3aXRNX1d6agwQ9pK8i1N5CQY87"
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
