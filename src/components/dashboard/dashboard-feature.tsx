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
    "4Fc9a5DephRwNM4nVWQxKknpqceSHJHxoCQSN8DHepRQ3tA9hbB398VQrUwK4tbWgVEcXSoooMb5ELTvnqG2LBfn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nAzFKJbR1dFDop7eydpZ4VYRB9HG2qGTiv5GqgTRCekTgwSQcW2sgv4VKowBuPpwvRcXwwnci9E61o5pWGzHn1a",
  "key1": "46GU7HgBnkM4RLDg4NU4y178T9ZaVAWURtU3w6ErGqsQkuTRuskFcjaE41L4RkQp88g4kJFfeeDFd3GmWL1P7ue4",
  "key2": "54szoEBMR9sCcyrrqtAU1jgo8dZcwDHYKgtQpFczqaMaP5uifwWnrc8rEDnqdzFzzU8xhCx8FnTZzf9WH6B63uyc",
  "key3": "2uWYpWEUZ4sjtvkyCn8wkPaB91ZEgkjRReoujC3Ba73UTQmxTSnv31uqrDKkjHufftQZtRESaNiYx88dNwzxV22U",
  "key4": "4YuwaF429nec5FALuvFoNoYTQ4VjxCR5PNVFBV8HoHc4p7FjQT38goHnnwz6PR5dbBM3UymBxoQS86NeX76ZhMPA",
  "key5": "5jVicW2RMXSFG9wZJTFA5rhkCNykP3ZM2pE2V181iwAs58SASRe2xJbzpy4fyGV2r4EGTXL7eU91aDVHjSb8TJbP",
  "key6": "2M32xSYasJHoBLW5WKdY2u62DMssRn4L2dgBzVF5NhA8hc1P8ocLoDmeBc8a54KvZeQEGj3YhZH3EhdByw6thrYx",
  "key7": "2UN2FNxLg5tKnaSgrJMvV4kLJHVNVtW1axFTw8Hzvnz1g2J6uJrmd6uGmSsyoteHdPJcTMetDPnMGystX11KaSrw",
  "key8": "4zWmPdtne6diFJrDWzTYfXMCqR2WLTPAnd9sGcxMr1P9Sjp7QC9DzGZEGCVK4FeBeMAxoxnotUkLU2F6J7haTdjs",
  "key9": "4zST1UqN11Nz4C7M3sdK9CiDgLW1uECpdVtMYcGMKxAtabMi2j4D1viG2ofnoQ9WvCeJBjctCWJunHXsHdwQyjr6",
  "key10": "4aFY4wP4U7YQXeN7bPZfRrGqLxGsgFF42tvKJim6EWtGN6HhoU1eyoLmKsPHQe1ixYSHKvATHdpPTeezGboJxH3N",
  "key11": "4kyyZpqbJ8LGXE8Tait2cyfMsLtkzxfKszZ4V8mDQCLZYo4UZegqNjQAjhtSMNDm69jbygXdaiSz48JJqaqpyL3M",
  "key12": "THPsH5rtiNzA49aStWBMvyxnkp5m2v3ELmFXPjbzLww6cPczcogJpvoQUUKnJit6DGocRuyUMViztUQMKgFT5vW",
  "key13": "56hSWL1WTcX5Y9UYwZVFueNA5bhVWr2scg7Kw5AXEjobK2osfsfB9eHjG85sUg8hYuRvTooKUhQXHxoh9DejriAH",
  "key14": "4zyWBVdf1JrTLErAuHcWWzzFhQLW2sYxDGz61qefiS2hLFui4VTokgMeFGE6qFtKnRh6bRDy42y82rnXW8MCudwH",
  "key15": "46H7Pqr1P7wC6jmBNBdkDuxxww54y9xtRQaH4ogmb7JzzqgtDSbR6qwUVL9RtZAjnPYXY8YrWB5WRBRpD14VzmV9",
  "key16": "5NXPqcRcqmHL7hDBY42seWpRb9xt9TrLT7LjaFGAQ3xt8C9SyvqFGMEz9RMQB3CGKaswrh2dZJq4YRhnp8ktj6q6",
  "key17": "459LEY9NYngxLcRfte8YT7MXFrVAgJyYpC8c2HZtUEjjMbS6Zb6GCxg3UaDMm8EpCDcNjyW4X43stLqGXbz4VC3c",
  "key18": "3wYgoN1HQcWH8VGy1aAjW1MQdZ43iSomJKxrpABgL7DHXgs3qorsJUrpoW6nYqsiDbgcaP97d3VgFgNGoWYFx32n",
  "key19": "5FT1wnSSafWvSRQfq8w9Yts6v24Bhq43kj3TqoRBoVtZZvCnErczQNAzEcxFKcBkToiKsYVCsvyFMd2o3spoe8L9",
  "key20": "3jgxtaV79yZV1BEYiByLXkiavUuA1cZaLfZmYWvtY5avryWm3DzM14CxU5G51C5DCp6ZsPDNH4PUpvB9CYbZDRy5",
  "key21": "fxJcsrCSpBTdSBPVu4jtgGGqkwJ9Dc1RJfLk8azEyB1HMUZyEzQE9EHBcJuvwqWXK4crHprF23MWcKUtu8N3j5a",
  "key22": "5LuNhbfCe5j1o8vELrjSAiryG12VfaX7rZGzRrzXgn94vPCh8A5ZwW56NPBa5Z6Sx6EqvgRwTYrKdhZhyBVq8N1v",
  "key23": "SM7H9Gyo9YiYnBb9i7RmvM88P98CjzsDbWrDjN351Gu5Miw1WMz2W43JB3iYjjRNtGR3dQvFmpawaCJLWbiairf",
  "key24": "3TW3ogRhMt4QVneSZKcWKU5ZEPpCEqh9XQ13m1M2p49MyKjNqpX3A9QLo3gdr6piJ7rm79L1J5MBvKBnAf3Dp6Mg",
  "key25": "3djLbkJAWxWktqRrZaXiZAgcUJb82WkoV2wojGcZDZuq9Pe1f5HBziaQrMYmv4SrduXZC1ksgJxty4qERdbsDXVH",
  "key26": "4bKNw43Jvaann4BxSFtZXv8UmFaUS4bhNeyQoZrXJSCyAtZS4ZsLjeneCu5VjZtH7rz6UG32ydygRRCvXp65nbxE",
  "key27": "3EEDbhaoCwVtAL3E47Jz33gUzoz78h5fvQ2xyBwEp1gKcBMXFX1SmnVFRVcDFYfoAyovjbSgDwZyeBgQpP75khht",
  "key28": "5v3EPJq1VakuFQKmFosEykfKD9zzLcGuddwHYwzhpsx17LmxEN1cuGNvVpPmMnsFv9p5dHrA1sTMiKJJVa4CHyzA",
  "key29": "3y8yGZMzfnwx41EKcNA3jV9dyq8zcguj6W9VbrwuksSakfABHedAYHfk1s6iVT7ZEU2itTXYnassPV4njUcJvCkC",
  "key30": "3EYX1JXK6Rzc9zpLnk6YSJfBpY1F21yxKDyRNJVkh8ajuiPo77mWJntMtQ9UympLWweCYiWeVreaqEcZLQZvJbke",
  "key31": "4k8SoFhoPFJ9hU7hqNMkqPMU2985VK1nghhe9H1nHoinozpDJCApaKf1ev4VwXMsEi4iQiwS7ga1t3kMddzKqaR8"
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
