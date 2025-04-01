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
    "4Jct2ACFLVzbywiZSpdC9S6kwKsYWm49uoFbErLFMGhM1VYd1vYZiUh8vXcusQSntXcAncCzvbjSPFj3ReEJtVGu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kr9P2kFAeG4iwJSriU6ViUw4VkjTcSqe9xB2u5Ey7NXB1BGTcJxHUuBZFU7XVv4DJho8x6EaLTx4BRhjvFuyRLJ",
  "key1": "v3a3uBUQYXhekzxDw7H8ekm89sHzVis33coWFFCdBSsc9Fn7fhgnLW39BaNvGaDQb1zwGXDqxEKaDdKhEXHsAMe",
  "key2": "3ixhCNkPrsBxq63w4D1nG46a6yQDS3mqXtqR6iV5YiuXSmc6x13Zsh374SzFRGPqkw9VvsJovaDzzESnYaNULQJ9",
  "key3": "5sViEn3gotKT1PNVTFdQyerw8esGvnX1r2zA8pE456EuBobYrw7PC8FgCWHfGMErMT9msfZnH5zCCX87cdesqvLn",
  "key4": "2VpJpcexrLgFHrrJ57Dv5gnbrraMSufLbV75tu85M7huqLj8LAQsDSL6pEb87zfvQpA7HeZH4YWp2gaJtGRQnRf9",
  "key5": "2f4nwCHdyMaJGVKHxiJY9cy4yaiMffxuVaXArEAcBESsR78UaNUJS1MVHD8WDk3vkWjM5YH8V4xZsAnkf3z52BWF",
  "key6": "37uBK3GxLCFPbWp1uFq48VtYWbhP46RiYsqbYN5Q4gJPxgwYU6ggzKPwvgXCVRCVXmKccvuTGxQ9Wm443WZsdeZj",
  "key7": "63X7NGbNKkaZ3JFcef61E8bHTJZhAzGyGu1kq81ZaNLMqKBsR3n2dGYsH4qTvR81sd71vboMPRxRKzTBY53WqW8q",
  "key8": "2aAsQ4PQwN7X6gxhbCwEXaTksnsVQrK3NPj7eiqQsc9WUVDrDCWzvjzEFLJSjEWsJs5GXxBHZ7NUxnhBnPm7iU9t",
  "key9": "2RXVR4ccVXtWAFNovPtDuGkUtNCEGvebv5X8oVoLFmnndz6ZEiKu6W6FYU7VsEXfyGJ6WAAvnbxA5goRVwj3y9uk",
  "key10": "2mkrRxHiwnQxHJtXgWjRwkFdPY2ri9cnk7Zv2DmBNgUEFh9fpoWhFmXuj48CTBGdtDgHke1J6GhYnC5GyV2BRvu5",
  "key11": "2PJe4CrzuV91BEwKYkqmbaqgEnoqm2CJ2fNWANKojsXHPaaZqYwzzv9jnKpypiiCN8ZyY6ogLUBZo7Qz6djQQDmm",
  "key12": "4i5qnPcMEVDeyvmdXn7eT8Ft1F2ZfuN8FkTwynYcC9X6Ybbr2K84qvT6ADsxBQrdtxaUD5C9yGgRuTdDTaSSuqpA",
  "key13": "DTNgycHzYQSAeULGCgLgLrS2mk5M3NvzjzaQvFVjBHYVvg7mLs85F1zU16Cnzc5bHfcwh4kqbJpUj5YpGHAfJDZ",
  "key14": "4RCynXnDWBQV7irBk9mnYsPXNwB1HraAc8aLQwUoDNHXzo1D5y4Uc5jecBy2xhKEHqrwycrZGw22skFXEjQA9bcQ",
  "key15": "rKrJSQL3J1uJsS8cZmhBEwRmHZfe51yJN8n6tbsSnuZJbqjpcbzsvajizSd9L6wvYZeenHCoaRjZJousAkHdYh4",
  "key16": "5PHvTq8enWwZ4yqNhRBYk3mKyRyjrtcVKi1gd8gGNG19RR3zLYnBUur1Ryy3UJUrmJDBa6jXEMN3ipo6eKgfRe2x",
  "key17": "4zW52DDDwRSguJ6uT6EgXbWdk5vEkin5xmBFavCsQBGr7bjiRUDyDpraWkENi7HAJmD78Q6vnP8VaUQr3vA4dimf",
  "key18": "4RxaH8jx4iikYY3ft72MEupYEtfmTsoywU9wWByghkTnmq4C6i5aN2Bvkjx6vuEo6ajaidXxEQfnBUNFhkr2VVFg",
  "key19": "5UoezzrJ1C3osU3i4Z3dt7Dp3xXxPkvdyLj8BfRiRDiRWv1TXuxzxX78Yw6DqPKDQ7UKWGfAUT3kTTHBhQhErc9L",
  "key20": "4C9GkGMEFBH8BQFBZ31Vs4qCZjrEC9Uv2JAd5yvQgSV2gV35V3CRQx6JLsCmUfGGscgBnwjNXzkFgtkhNwspDbuj",
  "key21": "4kgQCGmZwkAyFF3USeh8kYAEnbR9QsGEGuN8kLkseg5FFcR2A6PGc63ew9xtKxhgxMGgK9hmVkThi6MERfFGowzA",
  "key22": "3AweTSMCm45zMbHJsvsq31gPSZ62MwCUmS6YAVdDeyyrRwVm8rNGqyGYabNJ2VzkWxkM9PtpZfmxg9JQGFAmUi5P",
  "key23": "2Zkj7kCiQwjyWQFac9yS5dUcK1w9nVk1AE48ijqpYnYfURJHBXGVnMwTJySP3oBFCKiGf7pCAN857ScivNFkZzge",
  "key24": "3FchS3y6hkeNf2XKrdVZNKwkLyvJSYvHKfigx8S1UFfoFevdM66pryWhKGr6p9AidSmGSuSUPkzWB2DgLtbyEp3x",
  "key25": "4a8KVWd48ruQcxeCvFJTkXbqyS1h441PFjejHz5SGSLpVBdegx4wy2f3DHcbuJpJSKb8AmfShubgC7duehBq53YB",
  "key26": "43414sLQe3LiDUgiPgXicHSARX3NoLrjcVNPht2oYcAWvCbGMWJhEKPWy7ci2mB5WnQeGKHkGXwvQdHT54ssDrVf",
  "key27": "4pqkWuy17xSdowCxS3XoaxstYgz5CBy8fWGzQ4Uw39wKxScVDkkqT6pqMoSGmWmJ544sUo8ZHRyaUeQt7gxD3c1F",
  "key28": "7er1Q1FCULshtmesko2oWxgViFExVGHJ6WW2WEv5ATFaWWEwuiL7mqteiTFKESEXPck69L9hDYTmbuM1f5HKUeo",
  "key29": "B7Y5VgR9GyErvDnubcEWdKjxPzDZEyQc4XQnQZbhdBxajCvDrpxGQWuQ1XzGKjadz95MAwdwNMaGQnn2c5zhP3u",
  "key30": "3fHdn7zEwLZoUCr3426v5fZzNyqQsYik1fUqWYnKXuJe1YKtuaiQuabJnPtqmrUZXmf73BHpuZvziiv4iqyLkTgS",
  "key31": "5hxUQYXyD2t2HBCLjaSgU7vAjQwSuz39PzbnBRo5fGbsCa66bx3LrNdouvzV2c1Lgka1tisXXh9JU8araCsUwRGo",
  "key32": "4fTWtXmVbHnZXdNi2vKn13iEQWkh9YiK8NE1Z8Ypkqvf1ef5n4qiQCNZCxx6yAcD2JcxXSnv6yqTFfHXtcShP5zH",
  "key33": "5V9SRc8jcwFUDhbRh4CMhuZ3gC4SfMJdanQ4xmSSLsVKv2djcRG7DYFbvDk5PkzRBPCncYZ1gShopahnrXF1z71E",
  "key34": "3T1j8yH1vh6J6sLDdKKSY52y5FDNvq55rWxPrnyyHLYs7yuur7SSBmpfeSAjdiNbVruSnPDNJViXDHCHWac3nstf"
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
