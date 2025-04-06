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
    "41ZmUXBiCL53BjTnCE9Hv6LaHHCRzrR9dKqrTHQaDfyFUXez3sbXktxDZJ6yyEsVdUtrtUqJuWHJg3nx68XZnP4u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uxz4mhWNna6KuSf1PvZwN6ZRFf8hE72R7gau1KCxn3t9GYNaTN91G76ugU41qHECpuhwMqXEVRLfwTCwZze1dna",
  "key1": "PMY7vVHgSSje9ZtvZLFMyfLtHhv7n9eBRmLGin224NwbABwVHhqigXgkcyVjueEPSSf35BCTPj94CGSJmANSwsV",
  "key2": "2UB1UTaGMzcjoZ1C7x43Dq3KALY8d7QEPKBpBX39oHzLv5jrFgXCL4y46gWTvKX6DtQkLiJQc7cypfixZVNSQZqp",
  "key3": "qyo7eUP9qSC1WiyMKqKzYdV1B4ogrSaawmbT554oPNtUEKA9bXm4i3TpQmuKCHg6cvexsXdLg5ByXZWLNgk5KQE",
  "key4": "577fJRMhxv1MnXPwRsMhD9k748JP7WEH2ZNj1e2zg6UaRYkYHqUJdgkJKSnatU8aoUeWikc5E4KJEfRp2WzxUXU9",
  "key5": "3ccccnsnNcYKN53jYQyNPs3sAgAKcKZHj3eGA9Xhy4UYHs6WyLdiQdQonEo4qzA45va9pxzhyQTPnvjqzWokwSSX",
  "key6": "ESvzA5jqABnvYyBxF6KeEUsdKoApDDT2BaMc7w64QshrA3hjHuS5ofFjnJ7HeZbQ1JdisbeCYVkNjKggqguywkV",
  "key7": "283Koxce2tYGTAeFXdFoQkjSncUukJyEuotk8RRLxxj6K184bko7G3BUyegbzimTZrCRFz1pD3EqQcBUqKm5f3NG",
  "key8": "4j9jF9CCz2mDukcxNC1Pw3HmBYJSMSxFLZjovaEvBmjKY6LaT3KG3rK5F8jrbNaEmCMwkNrCRsLN5UoomzC1Tezt",
  "key9": "5VuY7SofBz9StZdzJycA1od3tQJa6ehwsMRWMEv5ofNDeqfbFR8UqwMD5LYhQBvGXp8yh6vggMEXKvF4DivWscZh",
  "key10": "5DuHjfNGmUG5W7JKKUavAxSWBciDBieKbghvpUCgN2kwCwE6L1XMMo4c67AVqo4xAu1zGswnYQyh3tKkND5ycChw",
  "key11": "24XKSh1NmERqDyqA6vdn7sCMfCDA6sHNwgCJkY841SZF3JpBsdRKYzhBnfp849zrDq9ZvUGvzinN6XVz1T4mpW6z",
  "key12": "3NNBnr5P7JBBMaHgpYy7Tq4vjubJrvofFPitpMa6cKv9CUjweaQPVsM5UR8kseksfEczJCcj7xcU7QMuV6vSmESv",
  "key13": "D3vGcKHYui6FHkAPQXBynHbWZUeZERkvqE8bAeRAmaK2CZVHozDKQgJyvBLS3hsPBeu7wBb3p6ox3sQUEE3wkWL",
  "key14": "3uQ75V9MYytkNw39YgfMvy6sUCM6UGN8eHdFZBEoqxrJ79xq658FQ5WoUme52EjPtiu11b2ttRz7WKX58gvu1ve6",
  "key15": "4cTQgs3m7qgFvwsGkiGy2zEEYYYq9WjVRhhx2B5XwJg4VBKH1Vpe5SsUQJvWR6qmCaPxoGkmuJwnn6UAUafQ72Hh",
  "key16": "2ETFuLq6x3wL1betjEv4yDkWzbsHK2iUFiD3hLfT7KfmxWVGCr5jicXFrdzYSjidYZDpd3m5hySTLRXiog825hiH",
  "key17": "xWzr5HYidWSj4e22vUTueiLqRyerQW6bxTmYjpZGvtK2R4wNrQMKsTCJukdfMBVfwmAVuN6KNQvPCuFzFvwafwN",
  "key18": "54HwL2DWL2PTbGQCk8UBYaM7fRAe1cq4HyLxHAqFM6eGVPREhBav93RMUeDjBszppcBkLmTAQs1DhDmAzYdJN31t",
  "key19": "59pYxgrTh3Vi4Qzb8J5QsRVtpgUXkqcHhd28S67habwxzYwExhavQXdnTWvRdfqpnifJhTbwv2YUiW4N91SDmMJc",
  "key20": "49ingnacFPXx4bXKscqnhJ1aF5chAUQfrrYDh8XpqEaNjJTESSRo6vwtPZ3FCpqFTDMnmu2jXjbL88NLBzzhYSYJ",
  "key21": "5G37DPa6UqwZFabw5Ejx4fmaCk8RfAmsDQqKNg4amGsNCPYcLNTzZizzFVu8vUtT2MMDfvMT6D8CMcjZ1XjYdz4S",
  "key22": "2GEjWbKg4NEwiNivQtSKVbJeWaQcqMdAFDUpHyKKwUuPVpheyMTTcHt8gAV2zttLzYAWBLKP7ek1NQox9KkQmfrg",
  "key23": "3mUaf1Vri1hdLojJaUqxaxTnfA4ypUzh7LrJqTqud8XBWjkvY4H45aAEJw55Qjq1JqzzrTxJCwLB3PVU5X7j7B6r",
  "key24": "kcdPmNzA2xFj56JYZwsvqg2DjoT1TDzFsrkAp3ycmz2c5BQHjwu72Xhyr6WFr9Z2SkCi5HLULbSJraP278kQSGb",
  "key25": "4LRZ8QGaCdghkeukS6EY6RgAygmHEDHP7Q2mL4MpPNySppZAPvBLsR1KgpHNfHkSDMenRerevk1sJe6xYf3E4u92",
  "key26": "234KXuqFRzuEgVhxCV9qZUtq86BBNSsYyiyqpeycBg2gvXykm4Lof4T1J3PkHRA1EeWm4P6FSVERGvUaXyyCsky1",
  "key27": "2fBQJ27CcWA6xpZjsmzw9xBuEMhXzDUh8n1vYKVEud8LNvZsrM2EwAAwWJpBxuniyTAZJJ9gqA1598LqPas5nYLC",
  "key28": "2td4tPZFvEQxVtoAJXaL19eygXYhUx2EcbwkmC26HSSxijNZzuNixx87PfYLrGqcgiLW8DXzdPD4W7NK4kXeswiP",
  "key29": "5KSFQqLXPEs4WApKrSUVoBgFRoAgHvsK2Nnpkr5yPLiFr4FXsEuTPii2CfG6G37TwaWe2oZ5YBsWaZNWxKVWdFEf",
  "key30": "5ivAb3CnDVYuEp4SPp4bemFFswrz2Trn6MY7ADKH5isE1sQFnLsAX8VWEUNpYaWwEsCSSG8cY3gfcFAjLsfuXkXz",
  "key31": "3Yxt3PPBAVcLeQJtXjFw96PDm81Yzq9asCGQgpQhaFYSYkzKYHnFc7MQgxWP5s2DVi7aHC2KwVfgJJRuqq16oYeq",
  "key32": "3YQLqoCapyXt32dLG8EXy4KNGUpix8h1aCzPdKpyMjBNQDQ1g1BFByU7PWTVwNB73P7QYmsPsvyrQKsgHgtKgA9U",
  "key33": "3gQHNXtCBTd45Ju6SrAi5AG1Qxssa3nA5wU4fQ1CzM7BpQbroPRCg2F34bmvb1DZHhQ1GhfF8tQi6xWnagvRRB5m",
  "key34": "29THgNLxS5A9mLW5UruY4tnhB297w7tcCGLia8MrjqLM24AbW9uuBkHqmkkSm5KPYzPr41mdppXM9izATdAHKZAa",
  "key35": "3cEa7zUedkaqtYVrQ7QgAaFeyg5U6CcSE8TTdY8vYHJcZKhhJZm66CaYCbxEKPbbQbsqbLhjzGsaQ6SK3ggYQSeR",
  "key36": "2AgzvJgBRSZfkBqSrjA9CpUHjAxeUvax1Su8yhYnamrsm73v7VQcg3EHfGBwdLXTWzQZj1mfsKDES4Wwrn2mq4fU",
  "key37": "w6tk2gPRexqNGqMHZ18hbgdiGM2jJxivwJ4k5GJUvAbCuajvoyF934X7Ku2wu4CbMWWaaQ6muGfvvtzrfgWf4sg",
  "key38": "5aU1687TfkJvkgDA11rYdVrQL1xepmUGwt27nrQJ82NpJUjNVeoSBBFhsYiSc9mgPGmZVjN77eEJnKTgWFN5DPjd",
  "key39": "2oCxBs1yYeBNdNxTz2dBMSop9ekb2iVfCEACUo2R28PQTYeNVov5f7BbYLacvofS4Swaxi3Zs6Wsqu29kj1VC2Lo",
  "key40": "23qGj4kvTKMB1fZnKxqfg2J6LYT2R2DTD3hHdSVZjcxwNg9BBge7J8HkafjwuqQ7bqjTb72zDULMBi2zeT4LB7qa",
  "key41": "3dL1ZKk9MrL9g83BDdF2hHq21ubb7iQjYpBDoixrANKmtbTatKmV7GSJ2Au6AmmhYLcXDormJdc5PGZavhM7Qt8E",
  "key42": "4ysP4baSjBJ3FF4KrAHGfjn347UDpkAfAppNaiM3BZxzp58E8viuDrYLQPfW2E1KpeR267P6ZnD9s7p14NHw1epo",
  "key43": "2iQQaM6fdER5vSi6ZLHRqvaDpBEZpYWdFiduVi1bvSr7MtyjNWJMtoH67PcQGrn7ngJByVz9E9oR4geVRm3SD2e",
  "key44": "5wvvwWZKptgD9xmAg2udspvhQ38LRqHrcwa4kD4QeJnF7Hg7FaZnJZMmWf8G8XsojJjBkbNYqTRgRKE4H34oCju7",
  "key45": "2T7b8A1uzhCWMbgPLu66HcLntmK6KGAfDJZaKDyK41zbquhfeyfvvF4auwxSgqDWaejz8RqKfiQs8wTT54n629Uj",
  "key46": "4F1LtbnJ8vXgmVZ8L4cM8jxVsY8NZdSrwqeB5bW1ZvVqbAm6yBczqNCNhXAKLGpRNaztcBMaAXruUHb4UHVesq58",
  "key47": "5PQN4wAgsQvC5U8DH4ymYDCqCxvhcktZb3c48uqFXfE1DbjvxEDmxnA2wMwEmNgMwNM5iuEGzqv4pefbcj2FbgNU"
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
