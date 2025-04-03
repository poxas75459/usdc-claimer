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
    "4jeud15kDW4BVUDh3NdzQgvF8a9hqH2y4AHfhFhDfSJyvrfPGPofdNoqfqR7n3eiqHwg8XDAwXsmpuXeJP8p7dvJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m4rfL1suPjf1UX9rKvAZj5775suzNrzmzCE8L2uM2GzzBb2vNF7tGScXBQp8xG9KmupN5WBd7qvN3gaaT723rsK",
  "key1": "26cHgs3VZxdGAfLsxzTAPvXiYvb27qtiGUbKYfWzCQT9bSQN1sQZiiWfQmjpLiRezPoJp1onDHVMHisTWcY4zP2o",
  "key2": "2qGMVvmdJyTeUz8BFSDNeDdyav9zHDJZ3sW5dRuZxHJ7jd11QN4B4WJdu5CrrwU8VUfQQ6dMcTbq8UJ6MoMgHKfo",
  "key3": "7TdR6nA8yzbakB49HmDWumt8kmBChjiveZFNkrvBbpXtCWdrnEurVLNJsPdCpyuL8fWaTyrgogncLaweGeQNdnT",
  "key4": "2Zq2sPrpC3P2ucEyt6BbP234gzoen6KjucbvhVW9AyEWZDoPiJSPYh59ca2uPFpTSEfmmY42VBb7Px1jUfAp1FAm",
  "key5": "5U2UFCNs5CW9Que8UH3L1gHWzPXPPxQe7hhWXf1hCuy8m4b44raEHaBpvUgczGaM2f66Hcv6ZPYyg4UGNLwpbH2M",
  "key6": "51hrAZ4L5qZHi7rXEjantEjp4NXYvmZPvjA15PwSr7PeBdGnGXAvDgwB5hrz6rW58F2LJaBkkHZmELQbzg5NHuPL",
  "key7": "2qxkwgq75DJGSHdeG76fiRU4hoozXmYiMY54HzDwkuRrg2YUKXQPE4xEYd6pyHbzuQ91twhpbEF9WVx1nksuQUYQ",
  "key8": "WTnpF56nMxvcjjrRs9N9PU5awpTqpC5v1YBm2y9LpNemBdNjmEFrzY1ikYRWAPBBTQPpPjvkBVh4RJPdBkru4Ko",
  "key9": "5Z4xHRrqpJwDbJWekrYAnxPgoaw1ZLMRBRsNkY64Hw7gPnXJs6L3XhfgVFu4mymGDDCDAmpVN3rNcPm2DSKhP57v",
  "key10": "3WQZ3hfrgSeeEV6bLGs84mj3r4vwLVC4nt2Gk1TV5jnx1ZYXqMdhK4GV9PGmu9Hn1LbthCxdDtnPgYa883jBwpWM",
  "key11": "2LeT11LBHXjDruFfSfMXaT831fbLCfCmmKUHwS2SjcT3ZoBstK6G9U3omsLWT1An3mJhjphgKp6Z8jqe2b9uQUyR",
  "key12": "2Lg1aNpFPTC6dw65fQMDyaFcdxJt3oQL8PV2Jar3RAUTdG5mAvM22whNCHg7jt1dztFS8DRfqERQ6eG3z7bVXvsT",
  "key13": "4bvwNLVp3so99rnPJ3QtCvfkKSy8JbsWGpSwR39trs9dFSvKPAQ7Vn7R8YC4A6xHNcQytZSiHxCP2Tsubt1PPSYD",
  "key14": "2zviFmfJiEme1MeNDyNKzgX8mn7nd1viY8tDx6jw5bopFrtpsoZP4C9ftQCRFbxNTLrWByheZkeEN3SdojAuFvP5",
  "key15": "5AxtAEqHuB3ZaL3qXwvDUEMEbarAFsjznhoQ1gmwJCPj87pSZVqt9tbYczJG1USehSGqjSc5QjuSHtADUHeVMjJM",
  "key16": "3b8vRs9eGxLaRCZ1PZFRTVPA88tWAFasS1FRV1ubHnXHCbeZPf3gaUWLYdb4xv6P4j61WWCgMrto3cwLucsQAe5W",
  "key17": "4jGCMaRj5fXejpGs2ce5iVrYLgndrjsPGo4JCUGyS56dwKqhYDZqaDmAwg9VVXKRz2WfyRSCgAH4dEaMEhZrP8zW",
  "key18": "2hkfUBnj9fNH15tGANWdA8Jy9NRroSUeBYb4PbKWFdNCR6MsqwtbRAVhfXJNB5SGaVuib96nUcHAouGDY4h1TRzm",
  "key19": "63RxYB5aq83kDASP1d34ptXXA5j1vj6DQqwRk8ZU29Fgn8G6WTSfEz75xPhY6PghUqoM9JJSQpzXec6HMyJPppBr",
  "key20": "3JZqiMxyASo9m5rHsQjR5efV8TFSDbCCX7P8wRX3AQ2qB4nsjDu2hLuYR1gwRZFXqTfyk7efb2TfQT7eExHDv9UH",
  "key21": "3uK6MVhMT8yWk2rLBcKKLi41dgfBPmYussSbPNHVLfB4mmbDszp968qBcXAEQMtT1eGVqjcViSp6fe1CFt7NmU4o",
  "key22": "2vimeXHkkW8HE9t6maoA5Bndw1avojXgFGfj2CmiqsXQzWu1EbKxKiE1X8z5DuVZwtTZZZLvtaNnLt8v5gMSfz4Y",
  "key23": "3mJGgwxBdygJfY24d3hxuATzkUBzGmp2sp69Z6cgKkJWoqxNMbcBxkm15CPqfV2skMBVtucbj7hTW4iP2HqzBvgr",
  "key24": "2zgyYy44yXEf8VMoJ7AyY6p3BwSHdBztjY6vFxF9UojFuk2yS4acmjZSnCxbiSfq1FhSqZai3AvFZoY1CEXjazqD",
  "key25": "4Jj3sYK5JyR25pPNNpeHamdKkCNHZGBYYidca6UQwDhmpif8SqwXu1sAVPcuZcqoTcHDcjfN5pyjPsEJAUC4ZEb1",
  "key26": "4tp6Hq8gXFadrTjN9P2wsmVJ6hAyH1PDr6xnxDzmASaRY1nFcm3SwtqMdoKkSAdVwb3QiWQqRaCQT4rsE9mynPUA",
  "key27": "2gFRdUKtT9xCK8y55Z2UaFG3tbWrHumyUkF6eSrNhyCZRMhAArXsQaWWiRa6XpzkVDPpqsaJJndWs9srot3wkRxV",
  "key28": "4ut7zKsX8rMxCdNB8YqbJfXyczDJ8o6ABk4E4Syo3odRioE3kLUxfzAK2t5V6HumruVfCmmbfnhoZ5tBYJJMjfuk",
  "key29": "kmXkmUtoCeiU72CyKHVGhjReiQdiD4YoMg3yJ6LcyqPGhqy8NznFCwpX6gnGM8wKPijuFNKcG5uYAHSfzUdRjNd",
  "key30": "2748GNKnnPhUy7NyRv5nAxkebgXkcMGJMTGMdJ1CgXwgv1JtpbJyRiDEE8pZdPCwApnUgR4wYNqdmruM1UPs8J6r",
  "key31": "2Zj1oW3ZR3YkZPM69nhhh4QBAs2MWeHVYriXbGJG7JXq6KqkVtWCGfegHWgAaQL3d6VZymeWuTAE9L9G1Kkn516Q",
  "key32": "36HqT4S9NAjSAzoSRvf1hgiGz2dVF5duWVdxwvbjiZSgQyH6dkEruCBZyiyajEMaTDqkS1Hi6n2YEFTBfuVRyEU6",
  "key33": "34rQUekMaUvmwqvqkPJpxBZzoAYG2DQvSohUnDG8RGsAvnvhKLKNvUNPC2212uCnQsYJM9xKXRMecwaavTHsHXQJ",
  "key34": "bn7WTEx7uE4xxMNuZiuiGDgRFgxwAUsFcm87HcgYQ8bpqTYGPsgYK7qJeTbAAi1eVf175YpphJZv1tCrKJwDFjV",
  "key35": "5vi8kueJv1cwFbzgh12XJQJx43P2i2w5qpXkga9ZjqQxEGbwXuQxFoDw6N7nznSfXgDYqX3PPGas9DXq7bbwxQTm",
  "key36": "4qogMTTEvXQRWtsAjtKmHSVDUsrtMDw6u5gSS1Pi8gCVK88DYFGLJxTMsGt2xpvAN58xVffr5JSSy6mgjxBe9JY3",
  "key37": "4LrUFn6L8P4g9tZAibDrcwixQLsvu9ijbZyh4nDaCPG3xpx48JidbVRpKV8hPc26RzeS6RNdKpDALzahK4Ljh4xz",
  "key38": "3urqW4tsSpgDtyqiQ9C6Du6vuo6UhmrXuhTcPeS7UDsfMm6kxH8gaahooCi5LtQ9APqKGVyYy4ZozXzt5eksZqLN",
  "key39": "AeeXnwcuW7xhG9dhxPURcDmFPvuqEcN8FwBm1oLeFPjp4Jz31R8zpSexJ6yxLXFVdrQMnA8mrdjwBTXY1QxQ36C",
  "key40": "28DuSHXXu34h88ofiAxhYfJubnKGjWUdLqaLsedKkmYcChG6qHT36boSMxZCY8Tcw5Yqt5FYzRkqJ7GATakxBcvJ",
  "key41": "5rjxXuuUiEtCBxCuVGNTpcwpMgSPQbXPZdePMjZLTFQvKuYfQkYLt13nDmQ6fLrfDmbYF3vK9REpHr3qviYAKfBH",
  "key42": "4WawqyHePY6CEwvSb9whakyqv5J1TyRnKDrzKrncnrNNmXGmKpQT26u3dFDhUT8TssBCmLh2zr6PPmnNZQbujEfJ",
  "key43": "gnKtoaum55USZCosEioJrqDKpZS5T14GETaH4Kf9ThKoUTz4CuYL4TvX3CJr8KrSEdLG1z8f6tJN2va1povJTJZ",
  "key44": "4hULEKbNaCFX7QfAgdfsXKmWh2Zue7zKiMsqUgLPSw2Bgy81pfmGE8sTNt3iBrurzBpkogwt9xnWT9wxqwqW2ExH",
  "key45": "55eovqgGNZ2MiP6wZUJm7Lw9Sr5mypmEjeZ2CWDv4NxvPSkzF6YYh1Ywh3Q929hzf1sPBu9sabw6aEy23wHXLFsC",
  "key46": "rEf4jy1NrUpPAoQALqNM1JWUkjgAJHCZAMXrAJxgWLQY46a9HYDo8MnNHXNXPqTLuk59yoQJbEc3TeN56mYf2vx",
  "key47": "HTr3Vdbretv4m1nrZsRVRvxhMJmWENzG7ZsmLXEcDzWJQPwwpVtmrBS8957RnAioSh9cFdBuSEVVdJWN1sUzfbV",
  "key48": "62pSChi2vEFSusL5bFwwgP4Sk9NtJvypL5qeX2Nz431r7hXgrZsruaKHEceSkxeEWacoDqearZvLHuZ2RDKHAfMz"
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
