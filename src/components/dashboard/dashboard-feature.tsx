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
    "nPfye1g1YznCsLw8anj2zmLBRaCbkRL56bLwPxaofSGDFZUos2bskhg1CdWjLjZ2Rg7iMcoPej9pywUrKejPzxf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vEPYSWWUGwEJQGtHAihsDoYhUygpeio5uiGaFVngzeojc2T7BgzYKsPTpY224Ye8nAdEgtNsmGtn2cRVenG5bmH",
  "key1": "42oNekLW3Qnppno2FvunBUYptqwHHeVKHwJZ4QME93sRwyv321sFcncQe4BjdkEpbNrkbeLua1HLMLYPX4mPDoor",
  "key2": "2BVEkjErMCBvcvhrnD96vEEEB3ojkWdCJFQZ1s7o641tYLA3FhQ5ugSadswqPhzmTiNHbnh9kPbsxhQUzegfHWT4",
  "key3": "59QrcCoMHfzXQVrcCCekNGWcQtkT3P12SgrUDnMyo1NVy5T7viXSE8j5VY9i7Pd7w6f2nT88P6tjzhsN4GPFAd9W",
  "key4": "23DWsN5R3r2jWqGAfRWRP5yz21vrvdAdNheS7bCQT8b8KJjEPn2qavdvAQY649NyTapbmTdzdy4wLQZifCZ7hzZi",
  "key5": "9a8d5VqBkL7kVhNSDw8CJKRqf7nQku1n3m63GwesufJQfDxTELynmxeHkxCcfjReWQ9WFs4qJ2pthjnjj3bZYmF",
  "key6": "5yj2LKn2sg6Jj1KMYefYt9D23hvEwMAs6mQ1Tz7JiPjRbJCqRfWfGZrVNYjs3WzJuC9MekrasfvYifpR7Jt8F23D",
  "key7": "5dkigfp4y7tWVeFmmKcKZ35Jhscw8pRewgMDZ44t2TKejnxpaCpmd8NCYvCZtkSAMBaZm6EtHQ9rQLzH4fpqQxVC",
  "key8": "32CqnCyLpvXvsv9rur5A7aocbnueManc8qL84gpsCwq91vzSwuxsDN734dSzDZjpv4bHaFL5Q5bp6ZSdot8X5E2s",
  "key9": "2BW2zpuBfuhg2XG15vU1DYjegQnDen6wVaGiCySY2EhEoUXN2ctqyWfHJchTshYZ3a58hWEw5gEMq94ztr9tERJ2",
  "key10": "7mjjKRWFsxvouCeZRnd8y9HDWUEmyPpjjUddKsi43u6Dtc11Dfi66ZH7PdTj5pbUzMcqC8Kv2WaCWSEKM8iFh5q",
  "key11": "4mYfs8ZEzEnF5NdNmdd57kNhXGLuKEHX7bqnmTaPopGfxGdfx3kJkxQjgxT4CoQJXj4ZpybpoXfx3jXC9PG2AuSj",
  "key12": "39N7rnjNfmpRjA3cW2tY3cjF6etUsJqXiW1h8pHD6GCUwUcnCGK9quSNQbuxipuCQhXC3Fy1tnjMzXMUUY2JaX4K",
  "key13": "4gwtkejBovzSLgYCPr8wo5foGnM7sDGBY8YRzd6wNpPASvfEF1A2276fyMZVck1Lzp2f2knVVeqHHVaVp236Q9VX",
  "key14": "2D4wgEBoMwdYo6vo6PEnByGqvNGMvDHisrKrTNjsmqSQA7CZYGAYRoab2B2LK8hha69u3UYVs11rgPQBsVAHPZxm",
  "key15": "4DoAvtkr2aj8Jj8DqnAHaDBT5qdfwTzoi6ZfrjVVw7e5DoNbvGCWFxQoWWKRwZM3KnEdo6P5Jq8nd9xTvBkXegz7",
  "key16": "hap1acLEoZ9Qu3TbgFGijMkuVpVt2GtiDt6rjRbxZ3qFLcwbnWPgzq22mLhY46vnSFCqNa2NgLabcf8FDMjkb5f",
  "key17": "2CHEw8mxv56cxpfT3W54of58Fuao9J9iyvZNGT3UbboQ87ipQ4tQXaEqhDLKSNWWGEcW2EgHs7bPGBmKR8Rjovsd",
  "key18": "54roGxY4FaK7E2hQS4MvxYjZTETPJkftNFnnVdHEmDJY5SQa3T2joXVtN6VmPreK4aSQdH9Y9kEq8U784C24oJmW",
  "key19": "3ApfFpjUfn5Qaq6TX3XWPkmAXgFaYCCTczNAfCMUPWJoW32X7mCFvbEQhxhWZt8CW8NocPh7rt7kk61VNQ4JKf3G",
  "key20": "2KKHi7DBXMLy1g5DqKG7SWXwz4u1bjUVjDrfEVottZDJteC5yYsKqZbc3eaHAS2kUst3oFJ3MbfFgLeopft8bbWi",
  "key21": "4S8inPQESDPG9mFmbhjefj2EMFidvDxNnc4GxE3vBNKwWqPr1Cn1ukbZ9WaP7yQQCZsZakLDUdoTnZ9ECxX6eQwx",
  "key22": "55nWmzB4iyGSvGJrYGwYLeh9n7S1y8Fto1oDNnMktss9LksaB26MLDjiRRkCtFyPBPyPavRm1LKn67CJbrCv61vH",
  "key23": "dbAMm9Xst1ko5g6RhCJXVrJDU16k4biS5LJhXfeifA1cqeLPVCeB2KVAmLU5nufEYT2zSoJbZY4Znahs6uM3ciE",
  "key24": "zeVuQ8UqQ8qd8vwi5pWvehMjWWjB1PBUCsWUpVbqSnYVaeFi8uZaCiBodU1ib89nra4HJ14bJ8ShEb1SyeFXLsk",
  "key25": "1ibXLHzDEzoEQGkFpsg8TpX2MX8Gf3VYDTkX6LUrVZEcd2T2HHEZmRxrBcMhVdC8hCBcvQ93CXmNEVQJFBNGP3a",
  "key26": "5Y8UXLpEGRk8nyQ2gJMqWsM2Czu5LxVzLLVQPkSAGwJ74vSt5VnGRPA3XJWHna66nVbZY4ixs1v6HpjMmkEuDzUy",
  "key27": "61mVEkt6xJQcYXeQXWgzVknF7LZGmuLPQzYYA4xEZTkBH1epitWDsWLtF9CaBoAEXm4D926oggRkARzW9UfwYeuP",
  "key28": "2PKjueVApsRwEkD5T1GMG8bBjBWzg7AJzE3EobEfyLHQiGm6j4kqKC7hftNzMmWtBtV34QaNMhJmYLp6CtGZ8Dra",
  "key29": "3pvpU9ZbikjCuckBqZK22dZY8B4X8ZDXRaPwbntfzUQVkVUqoEMbDm7rgZQw3YXGDmriheQpuEqsW3pJBeYNmQMo",
  "key30": "2zkqZAV7ehk5FtbVQn1Cj5xD1yrNkyTzkUG1PvMqVj8tdzWjxcsyACwNeArJE9k2kNvVMY3ZEMPnakW3pVfwvp3q",
  "key31": "4CTnePtHSTQjAHxgBo1NyTUH6tuDAkHEywUToXT9RMPNqkn8EXdqrMrnvK6S3QccYuWEbLNugKzUR7vHga1vYgUw",
  "key32": "259BEB9AJHr8W6DbxeJX1eNQ3ZCo4xW3AfnkDAXUKRP671RZv9kcAJiUzUMnR8hwG5Jif2C5R5BSVjwW7VfQ5S69",
  "key33": "8LoXVv7EbzEE7MgJfSugHnvXhQ2vGLETgbwZPTWffV5Dr6ra8jRJ2ywZ7bQv7krpk3cH5jxZ5Xvh7APBmkxjDjA",
  "key34": "5PfWEuX5QX4KjwdyFWrUPiN4U5KRynhaXvrL3iyTudkD1URy4a7qjY1he1dfpC2uph6kY4X68AeMwAxB4nGtAXqL",
  "key35": "kkh13qJdyh963vMuFLSFt3h8FFL81YWiTmwsvDDQZCYcBgWUN67qWcfKg2Mi8b3xfAttkwzVrbAsXF2Sd9ExpsN",
  "key36": "2KQjMLXhi5WyW3hPd2QK3qp1an6cX2BwjVokSg2fQrnB4eborw99JECgiEpNGYHR9UW748nz69RkZHJ8CAN2VvWm",
  "key37": "3MLeVKUQ3EXvtZH7am8uqkLd2jvukNEt7punKG3jvvGgKv8Ndj5FpArxQeFdEhGn9iDvYtWtrCRVJdAE7cyN5KKF",
  "key38": "4mi6ktKKrjVr9UvFmx5EUTAMe9yoeWMDGjEBiUFvmjXv62yi928MzgKqCjrBoRNtBrPVxd4kjGZm81WARB5RT5KZ",
  "key39": "2V3rBYJpFnJsy8FjfdoiQR4PiCG2Utig4Ebvsv9hedcLADNFoYr1nSNwpLEK2a6wWistHUwReW4WzS8QYPdVBMDV"
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
