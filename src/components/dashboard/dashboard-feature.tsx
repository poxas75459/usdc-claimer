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
    "4tFtasGvUgfPbZz4SfCmWyd8mKsVD6Mva6XzDsvEFwKYw7Uu14nqjSDzXubdrDm4BR8Q8MWgJr8We75y829JDtMm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZkjDhq15zFTSGJi5cRDYTUBoyzhReyLB2B3GmKrvh7URJ3HbpUeJowzchHPefQqxo7UU6RyJo4GAcLJ5kG1DbmW",
  "key1": "67MG5ZHg2LqPLiGtM3ysdfkwpdqL44xXX7GLSqKfgGTQcACkUdzuh38ofx1d87kqGn63cVtNz4nvzergtsxpTLrB",
  "key2": "5DEjjow7GJon8mdptktSnAw7m754BeLppKHWM7WMkE1jJu94shUmQjrejf6zSKbwEmgLZ8p9RbsqTGTUw4XEudbv",
  "key3": "3LG6UfqTopFUEWyDA2YuvXhvKH8VrJw7JiGc7enZhhoC4odqSYzKBz5d1cBq9waaPKhFp5BCDzAim2i6MSP3GPTV",
  "key4": "5y7TLzdbeFzrBxMpFm4qsHWE2zsU7igqkgCGqTDquGv76VXGb3SEZvVCFSbcUJ8yxjk1mNeZGoBBHjd7NkPuuHJm",
  "key5": "5ZzDgCRruDQMKXTkDcsTDzwadQfMKYdBpMUPhTZ2FmFbzuxGgqQndierDct1qvpirW8k9zQSVytzidAUsVZe2Ctz",
  "key6": "3Qz1BUiovCvEbWqnGbxbC1JbjfEE9RiKfa4qSKacVHdqPTHMQ8CehQr6iv8jGa4rCizbxFNDF3WS3pndRNtKuaFc",
  "key7": "5C3EvTULxFuWU6PNUZnaviAwzLp6w4TjBtbDxF7mD67qysHGQK3BmynqYWCbyJW9kzT2Fw9Hx6tXNyYtSVkpy5ed",
  "key8": "5dRdg4i5nVU3doJHy9DgVWtx9t3aaPNjB3N5ffzFqsASmmsHydV5ohCZKoYbZzr1o9Bq7tVd7Q3tXF7qRUH942Ar",
  "key9": "2q9yoPWEN83ugBL5NuZhEQqSwXkvzSs8KraHHDu46A23NfdBPamm5fY5HWhoqVMF5pe844dmFQuDYn9yNWhJw6j5",
  "key10": "5Sa7hY6cgiWmv86ZAm7YBt34yBmBthmjb4xS7eoA2iGmt1VWzwCu7vHgeRu9pnh7We74GgUkHhE5zeFKgum1h9HB",
  "key11": "4mjcFijMeQhZvHhgZ98Rd5RtBPcyyHjuBkwjewXmhUUx6NotCAR4q3haFC1EbEtuXivNcxw8jQSxD67cc4aRrPXB",
  "key12": "5sMfFKJRYXjZKwbWpFwAfvgg8TfatB3oM9tUpBnaKAHBh4W3uDRX4oX1mcN2kchNfpsBvMp2v3PHwkGqnFgtMEqK",
  "key13": "4tYm9tCWoXFExeNfikKwkcacwUcF23m5Bga5RZzDKcDtHwnWfXgkaArcKFi9DevbKcpzXbpEMyfTMp4LJL4hvMyN",
  "key14": "3fH5eeK3a4taz7Y8HAopkgywMq1v1TBxTc5w3usvj9ALAYyMzpRVJDACPRU9febfTBYiFy1GQkfhmE7XBDDPoK5F",
  "key15": "4zTQEiTkXQ82B1UY5tTuZSk2hWRrfYjM5hB6dpT4YTrwwAvxibbvdrvWa3FzvDkra1aBmeGDqMBYGYCRn9CVU31J",
  "key16": "5Nqrt1UchnYWeZsgNWGmzFfJLeKv8ry13CENbdyivS2PayKCzKau4oT6P36KN2Ybinyjn7DCMuDZauh5QpEyHTTg",
  "key17": "4N4d4j2T4kFQcwN3cyumj1a6R6RpLgTttegDaDFurMZNv4NQXpruFm8LHTGJbC66cznS3zcBGXR9GvvRDDRterrs",
  "key18": "2w16VL3yVHWUVCSTuvxakGh9D9ptM6V9Q4YTcYNmmFxTZubzNrHiApWTMpciKQA5So3C8zD3yc5QvHSB3HKuUPKU",
  "key19": "2B65NRyuTkBxu2zo9vfeQZRUmNRdjoA862kaftBpm3WUPMuFEjo4yByBKXCPR7VoQteN7pDZ6r4j6ekMTojtz2gJ",
  "key20": "CL6iSREAjHybdZa9RBBdUpLALvA1nvwzhEaCCB981zzSEvSJUabLLTWRcQuMg2jDdAb7UqkKbxnkfwDJXARuDz4",
  "key21": "bU8uTsTNELFM1qheuvTNLFQnsRXnaJjAuiKuhVkNDhQWWzcTDfzt5aHSGAoC1B8fnNRtrvsVw29EQQqKXNMDpLi",
  "key22": "393UATdpgZSp55bLwLachTPd49TKQDuuTrMDbSo55JrmjshzG4nwWsLSHtrxo7qjunwYbHFbF9Q2YHvVT44BqQoz",
  "key23": "8AqcWFCgcfgzUjTWQLWAsC2mvZcdMgeFCNJgvDvVkugup2gFQqCRtVpawW6u4jd977dGJNfbr7RHQLWVamL2cdU",
  "key24": "AnjtTJ19wvTWAYjV5t5yzEtFh9vSukJV5jj99MewRsnUc3met7YoKK3PuBs54DMMsgcFunbYkyHqpPvMNC5ZzgH",
  "key25": "5vvAk4PBP3gcgttBMDUwas739TZ1LR9g28ds8uRVs4nebSfuRyN7AWvC7V4vjW4DUqEi3GKttCj6PUrpLCY2MsQo",
  "key26": "41YGGDjETw5LXAm3XD7T3EV8pEExjbtA9wV6UYx3FoZ1QnFKJzUbLiD9RqBgnJURNNm5wVYwACEbCBqTHtWeQhTF",
  "key27": "4zcZLthjZnZiF6RaT6CNPtQ7FubLLzkmZ6BDYCnCLC9RmDpRjFwRQyw1iJzr9Dt5PjWr1xWn5zsefisLTgrRxQ4G",
  "key28": "65VMK6mtEUuGPXzFWtFi6WyrrqYiRhKmTmkiNQd8TyKQnvURDgbcrLMLVNPg494beb5q3pwdyX5xv91QrUVQSaXq",
  "key29": "56r5HFTdkBaUWhhWWq1ahMtHwEFYXsKMyF1jopHRiJSbCZVPcUDK7e2zx52zpzzsgjdGPoLsZA3rvvq7RaJZpFpo",
  "key30": "5cL9Y953yVAbzASvgcb4aufvgtxebXoWHHiUB8USCv1r4GVk8ULADukFGrcbECvUTvRqpHYcZ2ZQBprtVjLshRZx",
  "key31": "3FVHWAAqDE4ERtkNqmRvGsDu5nqMxJxsEdgFxL1jJgqgD9BjbsByQ9hw8yTu8ADB5UxFerGxVcz5cpeXxzytxPYz"
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
