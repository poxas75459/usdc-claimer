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
    "5iPCadvoDY64D72ypWbSAf75CD1MxbsnvcFxdSBTps8UXwvSrsGx2HVUCTbbLecWB7pizMyADK25rjnHcwaVMn3W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3noJZEpiVXsxQFGMqnppyVspbyhJK3garCHhCau6MAqxs11FvNKPMR6Qf4sQKde1hfkXAtQgQQokCzngvuTte9Wk",
  "key1": "62qe1A3BaQKZ3wJW4ejkq8gqtmrBQEXZc2KfTQGqUoEyHsUXSFxifGVXBV3ZFfgSbnouDgEL1v5WCYEZ3gETHXFA",
  "key2": "2TKuK9V2qEYgHDCQiD6m8biv7pAwMUfFbo9jhouByczjHRW6Jq1D2XSpKjBED1RUB4zPR6piXzoa6hRqwv1ghG4D",
  "key3": "4j1jMDhHmkc5AF1EHsrSF3kRL23NvKKA4nG6eG4L288NooJQfMouuh5z6nmG89wVrcpzdv3krYQQ4H3R2MC1xrb2",
  "key4": "2Rn3RCREVkAmUUCtGcnXG9771nBvnrKZzyEers6V9hxsYfqkYuNSymEE7UBPDVQk2hGnux9mHax1AYkAXH8wNjtM",
  "key5": "2cyPEAvjxxCG2V4PFfZqsd6TDJUpUSEBj8nZpgTnyvAe4SVZCzkRwNSn8YJTSLxvu6Z6ArePXtadAFyLKo4bJRLR",
  "key6": "44RzpN8AFhzD2nKneBv2yMZMrafuXRXVxQf6Yho2sbqLwvPvNsruvbbA5hDV23MbNbgAMZftYHMZVDxquHkSxE9h",
  "key7": "cKhrvgM9EpZ5VUTFr9cSsnuNLZJFvhToxSCdKtwWYBCwaVQXTZjS4hBTuPmykfyZhdiqJraGe6nQzEo1YTjdpV3",
  "key8": "4zLvmP4693zXEcUdMJGYif1JdnVxWbuuNsPftRtAWP3xAn8y7gV4ySv6mmgDLyfxApFsFUhS9XaCfPTN9KqZ4yfb",
  "key9": "5o25ZGK7mBW4HjEP9TiwbMGmfijMkxjaCzbjeqkL2cD4Jip1owJVEZKbn7PwFYCe2vLbjWRFQf1vuqqbLiJWKcy9",
  "key10": "2dwBLvrGzKKkNLdKeNeK5dqY5jTs3sjk1gbNG5bd8fKZ73ig8Lhd1yEE9YboRNLgUi3u96GJhwBAM2svAc6vshVt",
  "key11": "5A7ZgKcGwFGasJbm4fYzvZask1qJzgZFUB2Ycqiu18ae1RGVs57U8NcexPQyKDUt3c4vmzkd3deKQ4QcDU92xpQB",
  "key12": "39ysjWxPbYsmDjVtXBAKd8oKV6HRXC231kcyHcZbpDrXXr7gHwEaYF6QD9J4emEWXZGMShwvRCPeFUM8J6qtPJRs",
  "key13": "GB75ZunE3Tjbm7yH9qDjm6g7dYB8d6oTnmXLNb29PYVynGJRmx3xowgysv7S8sRsJUCX3Bru5M4oX1t4XZu3Yh4",
  "key14": "56KvL8ct8Z3JQjCAUkM7ooV4GSAHZYHDgnkh6bW56KmRL187mPwXuKfHWKgnStsnbtxF4NDrcw8ehv1tPu8dmrdz",
  "key15": "25pNYwqFy5MkvTdjZLfqWGWUJVLM5AQm1zZ4KWH8i8BXXA7PKahQD7bnpHdazZiej1qtywK7PQt5ucMAWJPCbWZ1",
  "key16": "pdsmnkxYxHbrqkuEyVfnzfSekaDauYFm4CKPBaabyro4dE9kmnWULSaSJiZYgL5sLYSmKa8EGwCfpDj1ouxcBUX",
  "key17": "2MLy8RMidqTrS1C6SMmaJ5QLbtNjeUHd1Ws77immwRfkAYGLE8GzaTnoxtbf3NLLQoKCPDfEkyBvUThHX6fAdfW7",
  "key18": "5aLNeKVe6GoyiAAW5vevhze7wWvAGTP2K6G98peRkXVPApZDaQ9eDWCFrzjTD1TdCAK72QAyevcxBwqjKjaMEc8P",
  "key19": "5i2o64WGu6hVpdTph5JomPX7b7s9D3tUQggnXXKFQ6pxtYcdKrdqc9xFyzR9hChmtDdUr5QCgrwJR9QtgfkrtL9y",
  "key20": "3UwCwQb4EhPK4Jcdx3WmuCG61AR3AkoymaXPfsNHvCVp2Rzz9rUgXAoWYdtaR3XvyUKzMovJBkEtAQdTw68Zxm37",
  "key21": "2L7EQ79fL2bnjMidbcL5q6pCvpTLjTRAatWzpS3GBc5NJfio7FBzzTCoA4eBMc4SxG1Mkxho6XU9ZdUAcwiKPC7A",
  "key22": "2BiWdGFdUhzJc2gmWQiZU6gXGBcc1HzE8JcCsF1oJCCE5vs95c7Y6mggn4jVCbeAag3gvA6v2MnNV9QQtrzLTzQA",
  "key23": "349AYV7vL1gLy7zcKAGqsLpH15Jy6tWpezRpWJu1YeMsvggbi5LLzw9j4ZLpGTzXpaQNzqDBCKe4TLvd7C3Wrc79",
  "key24": "2H567vt3qW3zD4vJAVUZzFjN5qTEujv19SPjief19v8WoiwnXxzuPoxVvmrY7FdY8YgdaMc2TiBLC3JJ2exzNSnh",
  "key25": "UWM7fByzrRdGWZub6K77QN5M5Gq8JwBxN8gDmboAd1ZMdLBfTq2neMjspjbuFZD2YiUpEPpRB4y9tKJgSzgDs2q",
  "key26": "4ee7ViBSZFobo3b4Bb25yfaNqT4UoqwS59BMJ4YC1L8YxrJbhrrzDv5HLBMDJYzUmZjck7RHzHnywXjfaE4tHn3y",
  "key27": "3ZR8tXS9XroNGQJrbFEhkcUSUwLRz8EN5ZFXqSCWZsEU7ZG9ebkSmxLHBMFaWMsW4Xad1UQSW9VhBtF132SHENop",
  "key28": "2CE4oTAfV7phgLUsZfb4U8KnZ2tgHfK67s3Cqf11RonoEsqaHn4XXiYubr9zp7gQSXWd5RR4QwnDUxfh6vLeVYHW",
  "key29": "hMK3wiwxHqy7pZPVVyuaRERmoVgepW74fdqoxAcWKJHvbfzKHcjUPkkwFzMvDbEpUYPnDnrsssxjds7iYHYcaSk",
  "key30": "4f1zKsH5SFQ87FUAVmW6H9K9WBnyxvgE7TBxxPgDs7sZB6ALcSfw1BoMVCuoFkM3GkJsmpcvgoTYeN5kat3QHXNp",
  "key31": "27zZUbqUPMCfQ6PyCDkUh2vkzFRcJzCPMLC1TjPYwkr7pgnkNhh3ez6HxAtc4JELJFpa3raHP5zGppPXtTvBA5h8",
  "key32": "4HRLLRFepG5uDt2gT1oDHjHtq7DWHuypW5rgyt5N1vchfrhWyfhJ4vRrghdw6soH5Zbc1LBC9yW4sKuSNtRrkvtq",
  "key33": "5mjf3CjEWhQBTYsGMBU33LvLrhokaS4N7ttM3vya8y9LekHbVLiN5BmhYcqQt8fRLpZW7LJgnEAXFPkFyJxt6PoS",
  "key34": "43X1yyCrVRLi5nK8LbHvapUPBtSdEm3t8c2Hf6w6zEdAAzEbK6nVJ9yGhYftEi7GgYMXw4AFUGEWXZvxSD6TG4K1",
  "key35": "5nUivQFfQHn2VFLY5yUohLeV5FQZjaU32a63pyVfhzpYDDd5kZp2hp2wu3ff5eyLZgZpPjesADNJmtza9emJkq7N",
  "key36": "4usxZcnYYzSNtfgTPo8AQ8Xwk3FVYcKP8dmR3MiBWuphnz9oCw38m8QL4yyBPAKPQt1adiUAx4SbeVfvFBoPTZUv",
  "key37": "UERqaNqqzhQgoqg7swMfbtH3vUPd4XbGUyAgwiGPq9jQVP8sVKhonHe3Lk9btp7VgE61YqgupbdgS2qMMqwjBUu",
  "key38": "5GrxcnF9BBf8BPAgLhP8WdeyDuq7vtHVoxeWrgEDiTRiWtSSWRUkgedhWP6GSD1iFoH5EWvLCdVdD7TQN45Fxhk6",
  "key39": "4ZB9J494TuUmnTNSv79GwaKdL2zpTLYsWexmnAfNYhBNJ8Xjtn6bG1GTN2f8YevBM5xmJF9VnE2QL4J94XaJsEh"
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
