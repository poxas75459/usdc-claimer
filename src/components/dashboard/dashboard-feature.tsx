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
    "jrGUi9WsLxq9F7yCD3nVNuHfwFaMt4VdpcgPD6y37rx7ixBrgRr7NwrZxjqmG8AoSqFzhhy6MDQCCH5wY9uL7S8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YwRZ9xrSwTKoB2tbkTv6PXpR1jMTGLuGyzJ9SqY4TZ2V1MRqFYMHpGbUPYcSNNJTB5K7zG6sSi95WtqB7J8sQeK",
  "key1": "5xVbrzp7T2m5JBt2zQVE3vuFTBhgSGFDUF84w4XrHdKoWFgPdHmGGYMkSf2Bip2wzKhMozpJ5LVkKVTVjhWLjnfi",
  "key2": "4sEBtqzX9e3GFrfnVNu3VL1YWRjS6uTpLV16jKjbppEzFzKJdYrJmDvvZq3beq2UabDuy8dFHd6cERaEwgfKnTZD",
  "key3": "3QtqqPMkwz9QsgWeybghPbvdvZxwUgwSoVUhLCHgaTc9mmMwagzVnPQTuGhpbJTTb4tGP7ReychEburaLHZZ5EEB",
  "key4": "4qYmc214RnoD3c59cWEFsm2uPZKKn8ovViYvFFGBK52EXXGApbRJW7aCMUyLbXrQDWXxd9UCtSA85SHNyCsh8R5L",
  "key5": "4RD7M5m4mLKfyCoQezkT1EP9YXj5PkEni725KMTywed46N9BptKMvWEjXfzgM1SBgLtsB2TZ6iTGzoVfdTaWbpuH",
  "key6": "3acRPfER7zUWGM9eGTNKzaMCAParfNwrhBQZFHSRggdiSyexF3YHNswoDgivtMd1JKvm3tG71Uhbptff9sY5uaxJ",
  "key7": "3R84qucgCdHgu5tZnVf9Em4F5XqDnvnBuHWYAQwbRALAVyHhCPoHQ5sCFisaA65Dc2PXsCP2i3fKhUgvEvMWu21i",
  "key8": "2cb5dUzsPyPtPmAzy2Y4eHsCEksRWcPXjQAWNNaBaUK5kLt5ruwYdhFfqB9hruFnmNS2DV2ThvKGpS6RbYXCQRWA",
  "key9": "27DkoKMGj2V8Ym744fvPi1yys9e4YswLsB9uBN6fTRow9uSWYpq8uqk76aX3YaDRUSLFd6M6yrsYppqGCG42ACdY",
  "key10": "325AR91r3jMGuosG9ifFcAWBnuvSyMmTTN1fVLf18tS865ntyWGdUzTmSf46topmVnjaZrEzPuU4Gom4JGFr9BJz",
  "key11": "2ifTJS8itYfvLTrCdUFh61YViAXZXGYgYbiuYKLDtyLhCDbuYvegPGyFcczae9rqKWqkTpmrnvA5MHZeSfTbgikq",
  "key12": "5ojNNFqdAWkGiqJhq1wg6rJXzjB9p9b7LtSaETgRbu7ovWXgVnVYskdkanw5dtKQzVJgTns5qXBYrM5J3xK877Wy",
  "key13": "fbXpz9sixNTbDLj56SFNQnSjV1TvjabyavBA2EeHLwJNopnDhPRC9C2GPyUnmS8SX5MjKZgPYzEaWFZy9mQD1QU",
  "key14": "3UhHGXoa7CqUrtd77rSg9xuPZ9z2viWMgERJLHBDKefbxDLnUiTFu2XCyBU8KxhmAxQUNEhXMZeD39jCrZbPkJLu",
  "key15": "4LPJ6fThBFT6a3o9PdFox5BmBZTd3yM8dGUnMiWpHuvav68ACTpMmVQ5PZXv7phpNAUNR15WckGcBzet8NNXZms7",
  "key16": "4W29fJt559PQJofaAgYDU6forPofB5diFgaLvqA9w5Dq5DLN8rmDV2dyrsVmH6TKk9o6TWoUzsyi6PDNGnoJgM6Q",
  "key17": "M12H2AApkBm2aXKeNk1zxNDKVRyf7ntgHjs3YreTmKxrSpNQkjsruQfu3MH49bFL93BnQ9HdVN47ez2jTxtoShF",
  "key18": "o61ac5XsNc6DXT397QMxTy41Uameis8duqG4eppsNMHr74VncGiYkFfbbMmMpXQrbFGRAYtR2GfDmvgJKYnhYZB",
  "key19": "2qWURmgxiQmeY5C1nnPY42rPSA2Gi9YVmohWJqRaV5WPoPWhSmCrRKd8woLNm51Dvmj5R2EmdBSBUaTkYcFZhKGc",
  "key20": "imS1NpyW3HFamzhToJ8JEiWK2xLHiiZYAAT8vBFG9KR3AB91irnDNc74gjuvmowx1rV1i7v491mZGRDKQoF9CP6",
  "key21": "3yH1Bv3T4Stbow6VjJFk51zVYpCp7jC2nmfvKEdnk1TSRwvMLbbgK69GFxfWwSKh4iGe658RFmB3CKBxbNsqD4zG",
  "key22": "5VoGUVDnCpUdS3nD3SrKUk3NBmspNFwRf7ffuvMepWjibJaBNvUWjUieHcS2jy6TeympBZGWLbWtDSdv91W6BdVb",
  "key23": "2yf3VaRFdsTz42SWvtpyNRDaJVYRqy6rpQp1dpjXG2usS4G1D8FovvRRgsXwmZ7hzrMSRQondEX3zGUUVkqA1qKr",
  "key24": "3HE1w5qz9eerWbNJXZXF7QmZA6omtfwu8mxTCW8d7SWq2DtSzyduNc3ui9iAQVi2dpj9QewQmvtgyN8y7wCxkAB7",
  "key25": "43B7LQ9ErrcvT8saHJ4sxABtBqzNtMrRKQiMUHwyrjkmDn9GgnFT68NeH3icUbNcCzxuqBWd6pfkzqqW9U2MtRVt",
  "key26": "5AehdeYuBfLkSohtGtF2zH16iMYwMAvLYTrY3Qm5ShLjZzACVv4CXSWkK7CHjUosGWLnnF5RZgwUHaLSqPhgYSWP",
  "key27": "4fVZaynhT8GCCEDFQ7PNAd1vs1xFez6ntco9KFg1KBDyicNSwckpPx15eu2jCEzDfa8r5PuFGubzzQFrqsrYtvVC",
  "key28": "ModAFAovCxkDpNAwzBXaSC5xcGWrQkpNtfQHrHojRPD6KLyHiXSdR3UPeGXTXWjZMypb3URCYjyL8shSsKBmcFN",
  "key29": "2J8uugUanSMprUekrNQianu6qNqWWSTVsYyAJLU53wc3bxf5WsCCofdRJhoiDRT5q7tP5dLZHWLFQNd6ymD1Q6GU",
  "key30": "UDRp1a3srbsxikMnTugW1iSLnyQmbqiQtNHfz5zvC9tgMMZnQRnwKsVHVTgjzVfXE38ZiPbZMJQRVaCwbttNcAB",
  "key31": "5gkThn6nbUQrZMRgqGhi5YEfabfPBrigr6E22CMSxzirUYrgX78iRYrGzimqncQ5yzCXHmjH2ScPnFWggXhp2mKH",
  "key32": "37LqoP7mwP7Fud4iNEaBLncwfUzPhNiYZqM4uGvcp9vR8GWtSMPhDb66wumtb3YykBgzY95yipF5MXvBj8343nqq",
  "key33": "VzmJbsDn48rs3EmnxrZLBxsU8RLkRhpQENbvQ4nPm8Nv7HmA2hTKhuR9aeof7aBUatRA3f53MUHDFCPmwX6upzr",
  "key34": "2TfUWr7yE4AtfuGZQRNedFyv4qzxha7tGJAPqzM5CBsxvQj8FcscVy8uUnGDQsvErmNVVUCamuoAbXg3T1XQx56",
  "key35": "45NjucWNDvWa4Ms7L78strM2EQoYoZC5GgSfJtoHFSocMxo4H19p9npfEPTLrDJMgs3ekjKW61SxdJjVNhN3Z53L",
  "key36": "oaKZTpL1f2YWrkjvFkGgxtZmopseyfr1CvWh86w5PGrWzSmGJyh15jj7UDpRMPMWY9AedizXM2yc3F8QNJvgKoS",
  "key37": "4nsK5AFfwXpJg7yNVX7Y2Ak3jkQz6R3zgMuP65KN5x1S34j8d97UraGwZfPoiPB7eSYmYiuc5iT6EEcQHbieryiU",
  "key38": "3mRSWmfnsSB6Yh5TSPnHM6HQyMkYFGZotot4SQh8bJNsNHeXjDdaRJGzrevM6bQsffUVU4JDgQKyTUxyhaYKcxjq",
  "key39": "2VodgHRXALW2xGsgdBLQr3jEnMoKsFoajGBEWVTzCsfUNdDURFADbG2UwEkNoGx9vjP52oiJhukX2Lqf7pWo9C2b",
  "key40": "vcEB1k2Z31HniazmK6Wnwdg3Luf7zheYdehe7nb2s8E5fqxn9M9q3mzNgYW7KQg8MvcCFSN1XGsinmCmUffuaeA",
  "key41": "3cxiLZzzGZeXgfS6WrdMs3iysnuCxkc3XafTm78g7YahuPsacstzBQbM9KvECggniyiqzZ8Qr4gyGvJXJpDwbLdC",
  "key42": "5pQLAS9NR9i3VD4nQwMMeEdupDfKtmKr3YmyByHNNCe6NhoVsCQAzRtj7m7XX1RMFfGQk6JBYdZKvDNpVZGJMiTJ"
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
