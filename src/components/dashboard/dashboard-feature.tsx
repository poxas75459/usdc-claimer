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
    "2MYVaZsstyNqLhyJeanNNKvwbhfVDNmp1Q6zbzRruib2Reo1T8oSKfNnHBRo8U9aVFoaeqYKu8z5LuBbMNLbjig2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AwfpyriEKkU7NzJ8TytptvWmYSGhKy3tWErELBX76sVhmRS5m8zLJ1MDqWLKkqBovAZcmnxR2TiX5dziQWviEgV",
  "key1": "3cQvmaqrpyb8LidtJ3NZGvui2yWS1xhfVzoLJ4ev2PLiyHwBNSn1cG9eyJpi4xe5HxAQ3SLatbji1dffQeYp9RjL",
  "key2": "22sZoP4C4or9ZY8r6XAxkRdqfmvrrTf519NXuqGeQZHsR6vL9PmA5221zKRrzj1usdHAE3y8gw4Gw6ircMN7K1KD",
  "key3": "2FgyfUB5VDSxxgrNgUEreGBKXTC9VmQjYiJ7p1HCgKQRmDjivjvTsLsoL5aCCdV1JmKRVoBTPiDzkiBDWnv7wqQy",
  "key4": "3C3WKuZK775CFkoJFhpF1L6aa8QCpLwnzSp2NgoiVLEBpiGNMLJXaAcKBuSaJG5QURDujH2UoDYkkhUD2qTs6ppD",
  "key5": "2rEJ1FDbVHUYgwnJT1Vw6XwmmmLpakWGbSTJydUEx6PnYHjpDrL9LgSsAQ2TozdkVLoZA8X2ABaZKikTYHuov4fR",
  "key6": "5TcAbtPJGuCFDmR7bkJMr5q3EgG4cahqCoJQPfFisnvVzNgxNQat5MrxSe4H5ZffTHV5kk4YG9gWv31cMeYvttaN",
  "key7": "2LQ3FpuMxpz6Zrx7KgueXjHSSgUFoFD1W2fteYaRmb1avQQihztDorv72X6gAgpx5GkAnL68qGEqUzRGkkePcQuE",
  "key8": "3LCaXNLg5N4DyAmBmAVcbr5s8nRYdUGCUcApwb6Zyk9KjUGHtBZHDaoc6hdoF1jq9RviRKyJJNbzUCY6M35WKHKp",
  "key9": "2wTrv8TvCyAwKMATabq8ZoyJg7iDuXhcmdGKdHjSELs2E2D3Y73YpXzECKKZR88JRt2BwMT5xbK8jL7GSqM7PEF4",
  "key10": "sFtRRqgoHKDAtBS37VihvoAV1RaMwi2NBmDLFVrXSf51ZG33bCEnGpYcBJoCXqMTw6gMC2QKJd2BvasZ1twczMu",
  "key11": "47jXcX18nhB39emjVq1E7kmVs4PJAzWfrVnbAbFhv4hpdd91dGBHXnYjW4Mx7f2tzJxnHwnZwSaiUjsaJW3keUXS",
  "key12": "28WjusntQSYSVmQ4u5zyTuqGjmTUMrxfErHha9BJzcCiizPsFdYWa5qibrvGGWitiMjUXqN4wb56YefhRZA85pPz",
  "key13": "hAjkDECAigcWAiJ3jCVhnqtnFWj6fNG7KbiGGvoC8Q6B4NKAn944o1HW1AzTzQeSwrNxgGkKWsHUcbfPSXR8Quu",
  "key14": "AQwybErqkGdcBgmHv7ErGXbPiHCWydU8hZGXCQPDoivzEVr9oNiZFrSaj1hfoDmCzfGZSB3nxfJrZw1JQWukxHa",
  "key15": "3959DUpaJ6AoRksfrrLwfudSVbRtoo8Jpok4imZC5Yc69xcTJZGqrtDjArs5WRi1aok7v3SCcuYp9UR3zbjbcS4e",
  "key16": "3mPYGHcuJhT5MuTDfrSGakGnDejnSjnpVzno8uQ1ZPBrxyuuvpkNKXvKRWnYh6tCJCGL17X8ZsFZ8PD5opTUab3H",
  "key17": "3CnhmmVHsYNk56rQ1gqyFeaHoEHtQcp7HZwqVusG9opzhUZfC6FL2C96XwTgrXtxqBVLnUazJzbvsJCGZJ61DwWo",
  "key18": "3RvjmBXjLKpfCN4vPptJtARz48JNiwQECAM7NoUknrUcd1mEixF1KfjB2WSQ2xM4fXcBA7Wp7enK3NykLH9aJcBd",
  "key19": "TWG62qigtnfazBWLX2yDVEQDk1vgHYbGAzy7YLskqiJGSY8oq2R6mcjtXEPbPqLWhhuid9cWawgMemaZXQcqXYB",
  "key20": "3au5rPRTVJXVibXsanBc7NWZM8WvXdgGzSKWUJShfFShVyYQxKy355FPw7eEnfVNy1Ys53Hn9cAapNwMBFjuUkBe",
  "key21": "4kxVsxVYjAPca2rEFEsQvM2aASiTHbxJGtSBgWMfFoM4aq2J1GDvuRkQnkzmVSf6YuUw42s7VHD5MiA3YrSYj86Z",
  "key22": "4kBQVSHYbzkLf6fHaDFA8wLLUDUgBQxKC9wE8uzVHdL5P4rwb21DSXRDyJpt4F8scqFBJcB6DA271mAYSkiYVq21",
  "key23": "2AxQ8mgVprFhsFk8jrgrp6Prj4cqUamcdNn2d2zLAw3g62LG2YH81LvFjRf5FP9aHPL2GZGUu8Fx6b2oduBaKu7e",
  "key24": "4Lsf1pEWM1DS8seEzwvDE3xZuqd5fLrA4tzgYEy7T81aG7qKzJRcp5MWwNCtwxV56TMhu1JxBJ2UmwrJuXqXj2WR",
  "key25": "4Gs7og3oXhVGvFH6qCM1PCXJfxeJ8hR8s37RXh41DooTen3qZ8oZqbBN17fdAnGuEGQWd6Jc8WfvFytf3V4nWJ7J",
  "key26": "4Kgjg2TUub3uKs6t17xq8NK4sJZwVni1LmALUS5RHSeCY7hAJgBy9FDSmqiNwrB79KzPzLszKJSq1x2ZhKUDFvM7",
  "key27": "5k97PQMjhSY5XHToqBhm5TGfkP3iKbMuJmdFnbCiu8LMgki64V2vPZz2C9x6NBMqGRN2jpHk3GWRdnrtJ6o2Fm3m",
  "key28": "4T5b8Y6DAJGAkNj9UMNUfZLCPWSWYxbkfePU6C2p3uw1cFxyDafSqycvf6tcdKJgt9i8EhL64YAU18C6hyekvSp5",
  "key29": "4FoK6L4urSByhEFsyAZ2NX87bbkuuYLFNGkwoxJvhK7yDu4vKKJVqxedXtxaUdMR4ZdBgUoY5VXv7tFvp4JFhfeU"
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
