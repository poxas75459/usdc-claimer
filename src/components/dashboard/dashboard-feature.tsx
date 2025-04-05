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
    "4SqAionU7mLqL3GqMKcFmo899VKVCkLjQsqffXyea3QbeZ6JppsNAUUqEuzL6msiB6PhZbrHeVpsLYdV9gxUXEHb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vpgJgqq12g1XQwBvgMEBwk8BRuFtVw2cyT3SpwTBYKUu68Wt5SLBNUEXZF7xD73bdsZqt1sezpPk7R2zkmtG927",
  "key1": "3LQBVpgbUjsUiDkwish7yiob3uxCRHPC3pMiUnV5J77azoK8gH6bVmuSgWoVF231WaYfddaMghW6KPCcdgdPxVTs",
  "key2": "4ZfrRCSzCjzpMDaB26zi3hSiGfYqHJgqjq7kh3TRTbdwfL12ohvkKZhnDAheoDmTXXkPL8kdCGg4trFZ3CdazCRS",
  "key3": "3xoZo6boey6cnkvXQwfAXV6ZyhWw2mabhoG854zJvwjzZs6fde9YGtsu49qakTPvDiYrsDJfccFUUZKXuhFeFWgW",
  "key4": "JtoEKTBMCHodgadyhgUt1poKbHS7RSwPQ2MXGkjpD7ZjoezFfgUnGvdL7fLKh5NEY4rhBYtiTk4V1YMguWgKoRq",
  "key5": "5WJvZYUUmJyuYFa3xgyJhE6yP4Z95LgFh2p4h6V8BWRTwf7ty2wUUDGZZynDmAJG3KBxXQ6MguhMTDGQmRpZcXPr",
  "key6": "3b8NuJBMEXDHVb3ReRhTxxC3YpBEHLJxQHpzBcwT6t5SY6xvzQUeDjcod8d1kFLqJ8Wn8fzWRysBAmmzVvNk2nvg",
  "key7": "26KiXHba4ibjFWUHrRt9jEDnr7gn6sQyEuMdw4qeF5Rms5e2Z3dbRjPnUCvCBPgE1K3Av95Knf7P27izTp4WTvxE",
  "key8": "2mWcjintt5iNUnonJjjJwJ1HECLq3rzcFTBYNFd7uikDzFnC5gbv7mi2n7f5xoKc6eEfb8K7Em1cRNCWMAXHzdLg",
  "key9": "3g2zRDLaXdqJY5Jjg9f96P7MxipX7FTbNzm1UJqK2C4xqNVEzhbno4FB2zhTsGZKWYWM36weh5ZsxmcQdboZzcgW",
  "key10": "3pU9LzS1xpPXqm8PNyeNDzwTroB5uXYbydpqby6tMqvNv5VopL962LCaamaKUZfC6bcujbv6XEJQMnviMYvXpqyZ",
  "key11": "jTVT2JDgpd964JmR4ZEYYtWCDv831qCWr1Ji7MiPGZCfeQXeSvxxYJmYbmsAKwg316QpJx4R3xTfbvWqY9ymwiF",
  "key12": "WaksMnpAjMsKFrSQJi7iLwyVLGv2YDkEHkhUxfd8SJTQRSEzd3qbNDeQShGe3s4MCSuKX3VwAstYCVTH5BMDwGq",
  "key13": "446rKPeBeMnqZCMV39u2MDhafteC1KsiVvrvCARx8fh2cZTZmgxwo48EB9K7P28CyoRNLJAEBatPka7NArWsrES9",
  "key14": "3cL7qGNvNSW17yPQQmXZFZSH2GjE7yLLsPYctAtLgkD9csiYDS8BaWw8tzga3p35WpT2eywt4xftiHpQMj16GJqt",
  "key15": "5BuioKfw5NGGrwfFkLxF8Mhyub4fAcrakTJ59HGHaXURSqD7rcqwmNHL4wnbHkfdVLQNUSF9qPVimpbPVphdstph",
  "key16": "3UsZu3wgsr5pEMiZ8csM2LDRPbt5xPQ7tPHv9CmzMXnFxLRS5byaCrcSoCA6Miq6CupojCgyV8myae4VKBKt7Zc9",
  "key17": "3mdemjsXizmmVRUP3RfnVbMsUJ8QDE4V8mgVQRqrBbrjgwenyQ8QyBYfUf8C4ZE9vvhq3rjkt9YwRfLaL4aNoccq",
  "key18": "5hPT8gvtVx9ktCigXepDv7sqiva95zAfoAyHUAT1cAvbtybzuuaHGPXsZnRgxzhcB4wXA3H26uLLrZ283jDCqZLp",
  "key19": "4LeAQ1ZYPJzKRGUhULrhkpu5xkBdqKc4b4kdUhnjdQPQ8LG71HNzL3B3HuwGLqY1qMK4gXzf1QuLL3KR7Rvfqk6a",
  "key20": "4uSX6FmjTRpdbXZBBo2BMHCn3yKrjjYkV6zDFGwDcXjAJehTxAqwZWuTr5nHK6Qx4WgjzK6y9G1897PRcutJ1oXV",
  "key21": "4WF9CoifHVGYxDMRyM7c8w2KmcTHP4WbLa3LAR2mqURbsHFzfuLhoBYovjLSi9eKP1ounpd7D8tZmXHP2MS7RR69",
  "key22": "bDdYuKgEpawBQncFF3X529UQVgdtRiMdVRbyxbeD3vXZfgbcCMxBUTM6RcUd9o83R5HUAuj28ejW2vmqLCDSgfW",
  "key23": "JGkr7Fmg5WUBL2fovuMaCWpjyzrovATiFbKfUD8xgTZ8AX7bFLF9CQ9FC1gzJXMSsigQs5eVHZbJMcjim7VCNz2",
  "key24": "5DXhCyjAgwC3mxHYAKJAHrEPcsjhLbqMZfmkAGahihBGd6T2w2LtRXbQirGv5exGkUX1HKwBBWrZEjvwddGy4DbR",
  "key25": "4aDUwGQeYFpSXkw4xJL6E4kuH1JxTdzQA5JZ7J3oofxcdWcaEVxre5QfD6XULqNtFu3Hvo3oGnmW99792wHRjrZM",
  "key26": "5ukRxrQPSty455wri5Yd3Fs6CxyYvMsdTqgA4pe2ZpParvoAcmTmAXBo55sDdNXXFJa6JeCWr6AEJqUfFP3wU1cw",
  "key27": "3yE9Vx6Ff3GjKCU14QgMeLinC6TmrRjtUcPsViHDFuQcoYJ6rmmZKcBDpjyXRTfJsCj6huw8AC2ggBkds6z9TdSG",
  "key28": "2bkivzgeykERMGu6jHPmzeUvr73aDV3TWdQs7267hgDekT79JiBp1zxQtdfUvwUYuySr9QM7cdtWzL6iSZZGANB9",
  "key29": "4vuYW8gVG3vaNESCRvYSHbuGRkTf7Vtyq3ciCSnrGf8CcfrrkLPAkBoeBmtsGAyTT9bURLLxozWnkyxhjUXV3caZ",
  "key30": "3z6PLVoCQmnhV3UAP1QjU6mw6JceoRmVwZuVFLP4wpFAkKkRiiVuJvMwebETXS58rWfjutr1BNK8rNhKSECL3Tkk",
  "key31": "4HsD7FrVHzU9tkPZ9tfaR6mbCfXG2RgwAVjNPjqURjSkyKzA75ieN3kx1LrGvEfjqbYrDpuWKnBXQnCkWsjHubdp",
  "key32": "5S4vbnj4iuo66QhfXbNjukJf3w5QhV8uUzD52p31K1DpMZzJbNEQTZFMawKMCzsuhHLZVSipx42fz92XbKgrarmb",
  "key33": "2HedBX3F6TbaBGeqtoAxFgCBtZDEGC63vimqu5DZsdqFP2xDyzwUuWyNeGr1o6rZ2oYqDkHk9pan6oqpfF5XT4P8"
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
