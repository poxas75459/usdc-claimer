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
    "3AkjJ5D9ysLcgxRxuRTdPJiRbvaPWhFu2ViX4K5GRV3kCjkHmgVdD8ern4rLTFCwJDSx2DnHdShAjwL7UkqywgoR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pDoCvLTJJNPAYwJSMMSRmgVqdaie4b62Ffb4Z9gZ1tmZXVEECEDBqB2rvHTn7HSApJboy5k74e5eTLL5UPfTvVL",
  "key1": "6VKs7yayECPVN6LykASswgzuwNRyXwzgjqZJ3HhEpHX1cMUNNoo5JQXUcCETJuGLi3ZYHCwViXWg7SwMtUNP5xr",
  "key2": "4dxwbLLGzVZNKfWZcLSnmSdG14tSb6DWvmE6RepnEPzmzNJk34sYtyMRS91z9iUMe1MzmM2JMXAYSpmUQPCtEuas",
  "key3": "4M84jp2GqhNTtLYiJuTr9v9uLjFz2iaVtwx812fc8qybztn2e44D2zLdPbFxpJjY5EK6fwn26yPuQoxJwTeC1Ghf",
  "key4": "4cEzHTkmiHVKstoiiKz5QDWFMZuCRimYdeWzPu4MJMt53hjQDJ6WFPC8WUMoPCTwuC25rMMi71VKDw8ooAB8cgoH",
  "key5": "2yW6H3aDKT3omnqJpZ4eexQzmBaKJRvFZw9hemdDSuxoU7BZq5Xg6oPioNj6zh6wLjun6YMQkf9FCcicK3pK7YZD",
  "key6": "59zDyjTJbcvQmtkZfSFhm8CwaTWPdJq2y71Kxi62C2HwF1VMcAPE3oVUxSKqq51XcSbntSZqofKmCYe95hqag8jB",
  "key7": "4oB7t2gGTeTE9KWbUnB2cuQzfzEo5h2bQgKAZh9TNDZVhmkMcBT9pqzpyecriTNmLDjBCVmR5M8xhULKkjXxjnAL",
  "key8": "3qDh7ATkNaytoeGynvJB5LUs2SQG5WYj8uMuANdyuMnnzGvvMcMdzgAkpMuzsvfRa8CTjG9c19iuyHmMHjKmbu9G",
  "key9": "2LoBVyhxgTThX37pV2f1XABhkcsxL2TQZrsu61T8eu8Cp8qzayDBQ4BewQF8jNbAEqhUokpw8s6A35rW3mJ6Tn2G",
  "key10": "2DYDPQj4NaEhsDzrgbzi3qvoYxGU91HXSQfut1Zx8K6nQR4FVTd7KVxhvxvEhUQmt8bmD7aFvVn8QaqiEVxLDvyw",
  "key11": "5j5MRPGSqURpnEnDtryBNhbXqgbtnrP1bx95Y9zkJas7QkJcyn7YfBv77SZH9rATVgEaSGjmqPFwna8d16za4dko",
  "key12": "4sKMDitcqn8fZSc8GTrZQK9m47pSTAH2eo4Nt2yVfZie8jycV4WtdXhvVeuN4gqjG8bXwXuxNY5QVUYmRcgxzycp",
  "key13": "5UUNkhTCDzd5r4gmQYRr9aWsWBPfBLCD9MLEHGEYbtgryc5wffkEAuCAJk8AGGCmRdnas6vphK8rMqcnUFtABrrS",
  "key14": "Ln89MpZnhxNNMTgPKjCinpscYFN3aq3pCUH516N7Ty9uNHK78kRtt1tb1JqwjF9sFEmQZUTrcD1oartnzJ7YDBE",
  "key15": "39CUQ46M34j6Ri5YWCRLyhW4u1RDiFydCYWv1zS7zJ72ujdya1pJ3DE5cCDGH4ZRK3zHtW4ANt98aUYaY2LmJzjQ",
  "key16": "4p7MsEpNZsfqJNtTxv9Bb5rLDcM5ZWWSxnEHVAWxyJx4zrBkxYBWWvMnNgNaVnwao69pqAfgWFW5yXsiVoeui1tr",
  "key17": "43Xajf22gaACxccJvQhPV5gw1sBNBqPkDp1CdRM6ebzD9ZXJE3QFVZoX58gKgWQHmZoPeX6J5ApWibzNFMrusCfo",
  "key18": "4MsQnNbXSucwimUhqzg1WNUGTwRVH1MXpvvvsppiZh5Z33azjosMdeiumMQpgAiKLQRw4KWYaXWPtVqNtjU1KEHF",
  "key19": "3jJawQ4xeUyVg6JaCvXRPRgnAa2Gk4SBD46CPnNf1rPGcUnurSjURJ8qRwwgeLdKxyWb9nLmpnYSVbHT7ba9YdQH",
  "key20": "3JtcENSvx7hooEHQ4ukJhAYGuBFypoD8GnuUYREhgJDNNtWTRZpYQ8brmhiqAwPFEYpxCVN3uVVH3ZDY6URaazEX",
  "key21": "5m7MRyten2FmKngwuqLp1ThdkLQWps62AYdTBLjQ4ziat6WXYRGg7TRzxaGaUhGM7w9bBQoSmspyAaXZHJSyKXCL",
  "key22": "5A8dtYE2bhVLZY218k6G2UWtYJbzSEXUF5UfriHSCFaTV8tSedSjWus6sLZ7qWKtsrKD59fqSgt6eYPVHcSmvkQb",
  "key23": "2bjfUFCdfEqMtuhsUSkhbC8pWjRGZwXthLqpbGJ6RgMN9adtzdtPHnm3d57LDoZraqhoeKiq9SQr66E4i5Tv7wjc",
  "key24": "2BPG2JoJr8r5m9WaJFbtAhMWQqxAdRp5yVRaNMmJxHfpAtUTWCtPR5mX6WvyG3Hhitpnat7yybSc1uCp2wmLxnmv",
  "key25": "2pKic4V7JsEFVrTjwFQhWuHsu5Lbm9AEC6XtBf5tvac1MzAEUVvR2cYhSnsA9ovaZjsHdSoEq2ZgYqaNugwFxnD7"
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
