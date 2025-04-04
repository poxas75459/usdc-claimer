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
    "DdUtLoVTXyGopP2BLFUN4z7Y28K7Gk4KAXdrcxaRsQXxKnevbVBJwAAzSbTTs6WXNETPxxR5yNe6gWicY1V9Fy2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38R8E6wVkmGhWngX6tgL5CeLzExz15YHtbZWQDssp5uoYhic6AyGQWMPRrQXRpMdZFSxQG39EHVp9wT3kFKdE3x7",
  "key1": "3jAJ8QWi4cwCEo1kBYiuLkudQEEznuQy2489x6vgVVxr9UACtLorWGDJNRpMFpjizXd9j9JmmwYQrFyeLSat4tUf",
  "key2": "5TNAXQa3E1k2qpXfm5YtcYHGRrAY5pAGuFJzgK2JT2MN7aKKMePuhdNQcPfckxSr6SEcRoc7aVYsCh9N34T8fDJ5",
  "key3": "3hicrTmjg8QhwpfWVbpAA2CMpmXxcc1MkZyhCxY5FY3aHTsAqzPFcbUyq6YJAZFfjrKB6AeNC12VQpRSzRbXe1XH",
  "key4": "sTLb4kwcyuwaaVhmhGDWydRMvBhnsRMH2iLohSzkn1mpukKE59jRkx5nU4yinidZTZ7gtMdAChTjh1mHwUrMEPa",
  "key5": "5oD4vAG2fu7peMBNKp9jvTTcdNyP7gguRRkEXxNJpuD1Xvd6KYZ7A9jyZyg7Xb3ePbz1gt35nL9mpTXovso7oUQv",
  "key6": "7WXYti2aSbfmiRobg8QVVKtSwYw2KT1WFZjnBTkS4akMRwEYmocP4Xrd8D31kz4LoY58LEBv8MTExFnS3ncxDXc",
  "key7": "4jT5DGVyutcdc8vKGR7pZVJS2bz6Q2pDBCiQGTxKdfo4h1qZAaUJwJTp9pTvgKPzM5Zxgo6TAw16ypyjiAtfd8es",
  "key8": "5AkCqYsAeoYRagmC5i653cZRtoXQqRXXHKYKEZWvk7459AutFWriKTQD6GYf3Qf5xhxJjmkAnb7dQC1xQSjtFSRo",
  "key9": "2JZioF1rJy9aCcYnhkSAYwETrMroNqbCRCK1Pk7JiyvEu61i6crmMFUBX1ecw7xCofZZCWBXCpdUkQGfEtnzhBUW",
  "key10": "2FfSZPjw9VwyvwtoBwhJ8kboc2FGnTZotPaDRtcLy9SAiBACGRnyBcqQX2hQCBjVbaJfX6zvJvZiUxwUL9PDk9R3",
  "key11": "315eyuq3gAHPbBxMLXnBcVraLuoPNHxCEX5ZJEdYSyWJXs4D2bbgc7oQW7KgtCceYWpdpakSqNS2pDWXEs5xojoZ",
  "key12": "2xwyvbvQbAPkezK3xHw2nFPsLF9Mwa3oCuTxBTiXcydtzuWfR9P5CXNR4daGjE9ow7uQy6MrXAdBMKs93oFLUqeV",
  "key13": "2Go3aAY8WCK8tjSzaqis4zWSLm8N5pv1ZX5sxyAxLugV78WKNYr78A4M3N4gARNBs8mCZVRSTLr6eyRbj7BGeNWe",
  "key14": "34Rsi9GWGzxjy69BMUN57XbtHdRCjA87GL22Wtys9GbgvcqQN4WvehawfVJ9cqYH2yPoDGyW6MkReTLqis5En3aB",
  "key15": "2EDRpvWMZsjTUTcGmeu8QkvkoTfzpwJRd8LgPq8xmWm4mmeqQcWpVCHhaQtCqGt4obEuFJByiW6fjAjVEZvEs3pH",
  "key16": "4joj8ckzukx1wozQvUuxv1a7aJeSZejendPsKTd17dMm9W57kHGtHqWBXk7Daimsgh4UGimWhE4p1hnvckXVFA6t",
  "key17": "2Q4rW4fRgMNNGEpbdGjsTzkDsFJCm6gYhE97NQbh4vMUiLPdCzXK58zKadG6crKuw6Fxs7h5J1fN3Lxi7RapLcDq",
  "key18": "66g9tm4VT41i9waef96LSywv5dQUkQubDGTBMVmMwLtNEYy8RgQpY33CgcJzd99CBCRWkT9iuKUkUWqBGrtZfJMC",
  "key19": "2GvLf1tSPRdcAf8q3jn5rLVx3UFjGJH2LwQpsZHjBVSC4UiHCgViAkXviBzJ7M9xA6SvyoRBzobp2Ld2oX5uRo6p",
  "key20": "66b736bPWH9xgZPAaTYahuHrrm4Tme3jqYhrYCCtoxxn2UT7zYZusEmCDMEpYmXw8o2KmtFA2bDY6dmByhJcoZpq",
  "key21": "QZS53gwtmmxvGro1L3ruXuTu54RpgwdEsEJU8ySaDZ9WgzZEVjx6M3wB9vmqdFLpkoprwAgbd1C9NdVmFstzRHn",
  "key22": "JFs1xVJ478q8nuiSmBVtg9fWZfwhx5RZeNLB6YwYNdCWLLLqBueosxqPm2nmesWa7y6EdEwYdBZY7jtLrbTjvz2",
  "key23": "RGhmKhaaxCosTK6QU6Fz94WpJT5qD6EbFZWc9pXhwFoySwXGA9Y6WPiwMURVU8cLx8X9TTXRyeR9cVzMtfyDyv9",
  "key24": "3x5xVfdfZayrSXk5Wjs1Ao5xSSgjqamRAtWwnUKRfUarR2dW4H4BXbZnTA89BFaKqdtJEcQ8t3oFkbzR9J2S5Qyu",
  "key25": "aFqnX9Q9FnTG6SSXYXULeKu8uVrUVPJMFQtCRJnUkoHLod8PYUfgdGqcXEbipa8tUEwbCgXhxHPKu1ytugQwNMK",
  "key26": "4T2sbT6KjSC8Hryvu6VVi3giR7j2MxK9qzzWEfr5HYCWZrvGPCqw97jYC7FWiiBuPAYboqi4qumj1foygkw2QFsu",
  "key27": "4iESicvmXatEdg4MvVyBeyS2M94Cmpkx2MVXqWHeDp2qKXLp8Ukj5RK8vaJG7D7mDWaA72iCVh24PfLsccmxRZRo",
  "key28": "4umBhphfPaFEif18pQa9ePFC1dpyjo5aZe3MMWduH25uS91ftBU4bNk1MKiYkDX9vXbi2AQGHBCtwvj2nxng8P57",
  "key29": "4Xt4Uye9k8vEYCKynuUekuAAVTCHDW7TMDh4UBhNNMkQfqB4x5TF5KHDsKgsECJeKYYiPkn3GySgPPUdX5JnLdDe",
  "key30": "4g2XbcD3GVfRDdQSjqPQvXstWzanqAqPomFhjFDEiRb1VGbnWJfgLqEF3LiWBW2i621aVZXzq1GnQzkAziu1eEF4",
  "key31": "37UcdgpRQxMrzkDD5EPivDKLCFg3Wh5raiZ2JbpCGYM9FdWLrK2sT9EK4inWYUwsyBrx2A4VEtaDVy8DLVQCdsxW",
  "key32": "3KSS7QYEPCswRFCb8ejKt2omzV2bQhdAZuboYD4NtGMc4beDHXteBrbBBDRhei1L37QhxaSguXHxbkKZpRGd9v5t",
  "key33": "5euJC9fHPucTLeCZU6UX1zsgBNd4JUodCg1ZhQvzLMt9TQkPp1vwQGE6fvF4CqSUAL1XLeDN5WLv1zQq6LLzWQMt",
  "key34": "2b5x7ct7LegZdaRXwsx4W8QwYZU1aPR9BAUEbGHZSnDVZKRYebMRLk2G4yfmYp9J9Xz5kX45V8HKsR2rBptj3hfX",
  "key35": "3tUPmTREU1wcefh57s7WstRAKYM9F8JbrCD7fW3k8jmwPapjsASUd2CS7iXMe7ttwC5CRPQUbt3ZfB7JvFRSLUMR",
  "key36": "5ZqHjfo6MYRrFjPRFnGrrHRug4m1rwigUcKDmPadjsxRshC6KcAL9QiWDYdpw1g1Nka7CaBCS5yXJcpRcRUEhYf6",
  "key37": "2N455PAvquwvgwBnkRcEauRxV1AS1kyomxwVc3ytgr6ndcC6NZ6kxwBYio6hmm9vpUrHtV4tdWquQume9n3Qp5iQ",
  "key38": "5jSugQNBVhJpWsPpiHt98sX99pvbJBhsqDMAHx6mCUFo9TJZqzMKbky8oUzovpuFV41hpaNe6ikHwX5ea3tPjxNK",
  "key39": "4Uz99X6L4ZqEySyLwkef2XmtpfJJ75mGdcs6rZG3HbYLo9QN8hzGvwbeazxdVwPdJtLsxyVAHSs4u1v8uqgUVrQs",
  "key40": "2hYTRgafBMWmvT3kCDepKgkbeRXXdfbRKYx9iEvpkZSz8V6pJUaR6MHd6Ta3gzQjd7mDisFejU3e1EhipjMGZgyj",
  "key41": "2tzX6SJAWug8HSJ8DaK7ahdgoKAzmQtZ7tugURvvEywT6Te6AuWAYnKq4zpHy3hZss6ewjKJhyC2Js6vizrbc9Md",
  "key42": "22bvEBySjoeqASpcnx9MJEWdoE2sXXFdCY5Kmdra3mQekD9CrpvTXxApwGDCwr29eteVfq4BAjw6t3oDWkBQJSuj"
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
