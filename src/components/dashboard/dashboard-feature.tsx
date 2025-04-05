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
    "262qpXoa1AehXkrFue1jBGbypKJSDmpMqzUSq3zz6cr3hEqfei26eurKV6EXNxHa97p1ufCGpV7cgP9Qt9R7nRby"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HrUBHYE3U9yaLrXENx1RYAAQFnePvmDY3wxMhs77pYRLiqrfkB63esJLn4dJfCEaUcg78sSRhRLWkygFAYjVYy2",
  "key1": "65JwhhvBUGRYrn39DQerZJGpTfQUiGMcucUP1fAw5B8DQCQUN4A61hHrCuAgDTBxBHfe2uDHsT9PQkGAQEnFmkmY",
  "key2": "5mP3Z19vuyzsTeXDhvBULmB1jnP6Tfre4DPkLdoWun5E7dNJ33Q8AEmwmbchcRSYdsrj9FAyfFD6VFFbWusdti46",
  "key3": "5ihQ6dq9s52EGrGevayXGfnHNvgtc5DxDNAZ7vW35Av5xv2SdNWFctUqjuQT8EafWhUsv6HrG5Zsu1Ptex3Mtb9G",
  "key4": "4ma9RkLxQPeo6fLQ9xXSQmz7pc9nLkSsE2MJjhFC8rAWAtMXXLHcQZWtZmDJpB7pXm9vVuU55zrHrSn73XHfYUcH",
  "key5": "3LRGm4da39DMsqf6y1nZvPJr969pczsbLBUyFRWuRp1mjaTNAGf7ovESSHv4C3i1XJeLAsjqZzpMHkf6Xy269BJK",
  "key6": "4KYRgt8BQoXwnYNcxZwRcA4XczyYT6DfUcdd1jrGy3vuDPJjiLEQds9E6KQJ9rzY3H6PNhR4ijhgzduFx1UhnsKx",
  "key7": "2LvMarT4yFs7xXrCCeyvFgw6ngD42R7GU2G8YwdXPXRjtsUhXV7MJqTyDFCch5xV2u6p6fy5YEv6ZtdwcG7GGDMt",
  "key8": "3c6gC8WVr3VKfc37GXmoJYBQk4ifSjkS6cMnf7qZuibRSW6pmgXa84qhyU262NpNQKfRwzx25VGy7s4kcxaiJKyz",
  "key9": "3RrteJWFLJmHi694WqN3mMqA8uECrXkzYzEk8FL7GANXzUs2KkAwnKaKNTXv1wJXSRLL3XtnSav1nHbUi41HvocW",
  "key10": "42CWGtazjmz96FsqXUG7qV6eCeESgyhJ7mcYUnAuTAvXpbgg7tM1FDzYjf21vAczop6GV4se29FRp6yjwBQxvdDR",
  "key11": "3bRzMQhq9GpT5zTWN31tEXaKNHKaNBj4rPM8MM9241u1iFiW8PfCWSwEAFq27LTryWsgjZhYVEjUnuZg8JYnmjWa",
  "key12": "46A1RRsroXm6tQMwSCZ4wh7FSPDwj3kkSQKdF4d1b8jZ88D7AvW52AQXLzBfhA7BdqToyJ71vw3p5Lb2MLhxYKK9",
  "key13": "GkkmgBfATpNN8aKspqqTAitEYBPjLNebZRVtw29VDvgeccJXcLBYN6QYCMA1JS71VnkWJRoxDyDCWxx5HL3v32Y",
  "key14": "67SEri6qHFEz9XmJy4hvkV7RYuAkWaJukX3JLmsub7HzTvHGp4qvZZFuzfdHEetgbBss288eGnHPE2FvStP7rwxg",
  "key15": "2YYTPKDKeiGzxHSQkvJ7evpka8smFXrcsDgEUYtXv4Nvr4CAvD4hbGTTxZrgjWcrB4cNSc1AShoo7HKZ2qbBuEXi",
  "key16": "2YPDXLHhUiR41wkJCxYJoLehaRm1rhSN9NWDMmnztqVFbBM5Lyu9XwxzRa6cdbtcFNuAdwypAPpwP2zFoydYyjYW",
  "key17": "4BMgeszpNougREyZi57fTCyJjEjxnKLztNcwREC64mb86ZarNnSKQjZdqQEFVuv3CsiT6mBuLAPSRWVeTqwsv7A3",
  "key18": "3uJodFYTSasPgjryzD7UBgYGbiLBrU1SaAbWxkJun1Uh4WTuHQebnu6TG48vdhhZc1US6pApBbVE8j7mTPGGYEZE",
  "key19": "4zFScojrAe6Liee3xZpcoFYGWttSMpDKFbxN45Sf3yMKqHRicZydMTz4RYGYbwEny7YKPnkFqubjTkBDiBZinGGr",
  "key20": "347hpMbdKNyLndQWy3Cw8MfUNZ1cN6qeYifG9GdogrDLE9UWmMXnLRjB4rnFoxQ8y6UQWsu59EtTAunQzyYPWMrK",
  "key21": "3JwcUepqUwy97msyPxczsQSLJWQ6wHU9gN4n32VUBVAbDS6B7riBaAtfXYmz6FRhM4pmSePvqyoxQPLzjZkNfyVz",
  "key22": "4avfsxLvAvt1b5zjSWznGxhsbCp293WE9Sv9GhBsXkBvRJSKEoXBfjZpQXXG9YiJGoeTVf6EcvK674tnjesGQecX",
  "key23": "5oxTa3b3c7srcHvbGziPt1za3ia6DkUHGzaHRr1BuXxXbY8gQTo4SWxG9JpUyLa1SFrKerwi6Qj6sZECh4CcuwPc",
  "key24": "GXZFbR8jaAM7vYWZLhy2HTc4ogF9WmsqkwC4RT8gNUG2tVP9NrfNZYveAyN1hLMWPpqV2VLbENc7TZqJPnGmx47",
  "key25": "5VE4yLXVh4wkcogNHvwnQ57XKedt8xMwvtzDr3d4ZuCXwULC5jj4mG8Cb2VKA1tgh5jag2HP4hVEwELYHmkvcscR",
  "key26": "5oMbfCK4ULktKttUjukCJPLHFvJESNtLiJM9D2EApJKAoPsYheaQbBmHpjaVQ8GS1Jv8EpbLmEMMrg49nAi1EVp6",
  "key27": "3sM3spFvUQvF4M9bn5hk5zAKuKKjhKRDgTPfQzLBZvqVb1STGWjEFad1eumgbT89MFxfXbM5oEvBiuBQ2Ug5L5k2",
  "key28": "5EpmpyjN98pvCesj1WKYnCAjmvtj54Whi6b3v1rFA9s9tEFn46YFsT4vd6rofGgVmM8jzvcshZT1B1bKo2zNaznJ",
  "key29": "2CeDVbmoRBUECGcrjwrcxeYitT7ZVmiR4w21bhzmkSFmYoeqZmm3FcQUUoYNr2oZm7247caUJgTSDnpnudZc6SX1",
  "key30": "4gPXsEPBT2iW12nHh4e8vuyMNz8nYbiSjXPZdCB9oNDQ1wYWzfebQsFcnqA1uSczChqyp7s7kKttztr7AQLPA6Kf",
  "key31": "21ZLS7LwGX3diiH5NFNTvySnW6zNVEa5s6TBuJDs2WrwHWRZSZbZAWTmLeS3AVZqCTxLwNnwZn2UNPetcrmDfwBU",
  "key32": "3avtJWi92jvrBqzYE99YWKEtf8TWdvjTjqUoCHrXjzrnQBZUVe1s3aAxX8UTxjrQpK1p5YeE2HJJC22YPu75UXqf",
  "key33": "4uWurKRWY6aA5fDRWiE8pYeNne1dZTbveUNDKxsTYUhmPnjAH9nphseEPQFHqGDNUiBmEvTZNa2nNpJD2zb1e9xD",
  "key34": "47NDGKYmwbUSk7k7pB4KLL2rDauZLEb4ywH63g16E9z1q52oAPE1yQWJGE9aQBvdGWP5FgzNkmoYAU9grkwsh7F7",
  "key35": "44LMDZopWy4cqGkNozCRvwQNAYGnuyG94zML2bduFMoD1UNcUYsGd2R98qqomHUivSvT5LeTTKrUauJPcwXHrvn2",
  "key36": "YhKpMXZVFUuZF3pzbm4q8bKtog6qWmVtwA1EZ9ACimvcZaGENA6NJep2YKgM9puJgjM8APpaeaugWuQ11bm374a",
  "key37": "4QDDLmZAaH2pmDKPbbS9DyL9Uaemb8f6ZZWck7YSergTy5Qzs6H7ykQRfJ8ar5FsotNggB8ar84HWGezE9vBfUuy",
  "key38": "54EdDAY5JV88XzSV1ttiaRs4FqsvNqQRAe1DkkSx3x7XdWi7RKZeoPRQs2BM57f5ToEzMHcHQof7ALEVQMQ9MbhN"
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
