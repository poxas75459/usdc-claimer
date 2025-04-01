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
    "4QXkvAM7MYQrSJ6J8sQzfpTnXWVMPEaZe3eKmaFmT6wjrqGr9JVHTR6SCTdBAdNqwMyx32eee8oVLYY7nG1E4pZD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WtZWSCfSNpmvKZ6ufDmMJFCMWEDpFfxupUVPCEdLm1E2Qg1xASc8B6qUjgXbWoqVZTWrr368WadHZywWwqm1Fvb",
  "key1": "58kopZCeiM4FH6jcEah8u1My3QQAHeTEcFzXqT4gMQRaJ8z8CQC6yb4mY9UHujScY9BuvW4zrN4xuAY2WxxVuuhC",
  "key2": "4Vwe4EykxMjqmWr3gsGNF1cW3Gnrfkf8G1StcQmVt2Jd9eAKa7KQxsSyUgH1ZNU27rLBSLM6UjLcyqfVKBUcfxtv",
  "key3": "5uzrwH7kwMy6XWjyCgzmGmg6u9THabePkGwKHFzeFHe7e4gqu6DYVKEtk9E1Ysf5aYPmbH4eCsD2n1GDagkz4nd9",
  "key4": "59egAMTEifmG9RHJkeDhxfLqJhKWhhcpZocSEexDVPqZKHjc93RReU67MxEAAfkYj2ZbkBt32moi6gFCE7Pq5yg3",
  "key5": "2LwLbywAG9F3SjjbWt3shYMfdjWm3HuLCtTXoe38rmQq7ZqStmQoUsQXTTt7p8TNAmYDTFGirUcPBqpLGV5EDotL",
  "key6": "4Z4kpfnkVgYJ37Bbrcoxv3ZikcMQUp6evz9o3sun9cGaBUsNnpjGwrBoYR4mw2fYUqyLkGDoSYkJMHR4mMaDgnGu",
  "key7": "2et5yfpR5rYktWnNYrvjqHgxjqEcQ4rMNdjwbucg1GzW5cF1uLtV5J7bq5qEVedak9ky5Xq4aq8B3hCApcrRHEGM",
  "key8": "3AkEXLwDFPsL81EqxfocfD5Pg963CFTVVB8atACcM6DQ9Hh1G9gpHGfGWdKXfvYEoK1NQ1QctKATCxGuCPGSuD7T",
  "key9": "4nQFgHVYugKz2LWhmbrLSXsmAFahyKgTQysHA9HQVXaUcEwwamuEhXNWqUoK8nKmYn1yf32WBJPn2iuDtLMQeczb",
  "key10": "2yYy1Zqovi1nDbe2QKeH1VSYV4mdzvTbw4UoehNmV6o2ftvzDwh7vJm9rrURDKV95UcYq4598S8kaigeEaWbEYc6",
  "key11": "59ti3jgCSbFujBvzEw1EMHBMfrnfXh3P8JiPYTfCqNuaWx7eDeobR8Sx3JMLDKj4GLa2dS9YYeNCPYyNYfnpx4KA",
  "key12": "67jZUDJ3xL5xMiAmocbCboXPbg8DR4evT9xExhUxbZwztn5ZUBSHtjXmaskGZPNVcxUSQvzFNKQa5RwiNzN9TcEs",
  "key13": "Gzy9NPygo3jkoiTnqRTrVyXBuvhbzQWFPhyWXy35pn5Gm6T9z9AeqCGVVf5ob5TZZCDDyMKUZrroyVjPbdgszEY",
  "key14": "j1PYZR9RopmPyjWwbf1fRw4Pf4Dzxs74DDySobeBLiffob1HLfFnAUhmZM1nqU7ojjAYYhEsVW26pGg15oVKADN",
  "key15": "qXPyeJV8vVafhZgEaX1aVQXyxVyNG7tToCYpfKgUAKi48TDL91nszYYP2CZmTDE4uMGS5QMsHmUuDMohbWp4wUw",
  "key16": "4TnKKwJzMAXDKLnrfQnna6CDjNPpvGGJW8qQu5KDUVXfTtHZiC9TvzBewwQzNe64Qb9KSDRbhs733qhyhfhMsj1t",
  "key17": "3qADkNC64ofNmZzWYEyphAYcjFjajvLM1ic1CefBNFE9v5PnVMgmNJirD1nkjz4j1pu3rq8HfvAu8pMvhJoMkiwG",
  "key18": "38B46KDVLByaU2uuPhvba5qCGnGPnYN9SG4QUhH5NNTgD9ZPSCF49uphxkU1jSr4qfFvLfGZkQ6GqAMTiFevTVb8",
  "key19": "3FH5ahuuPp5UQZRcoNEmjYRoqvJ6KixpSEbrXBtEoQ98L8ZvtUf2WWPYM3pWkaGusQVoFTGzVYnLv4MgTRnvNdNk",
  "key20": "44Q9Ypio2g3LnHowsjboSfmAJheUB7Wxc3qahnwvPrjkNpDToshHN2dLteoyV83JJfxBRLxaGEr8FsTsUveSdtiY",
  "key21": "5csz8jAt4QWxiKZCJ2LpmaiX9WziDJ6VYLmQCos1VpazSsNx8KbgjdpT9JC58bbKzEBEUGwqAUD9drD6sVt5AKi8",
  "key22": "4o8TdomaYSmfWQwru8QBJTQnGez4SzyL1wncdfootbKLGnQiNaSPLXseLwqp22p6Ab75QnEs69zD3HCUoyEJfiEQ",
  "key23": "5D2XcRvYD7JXGUXYPRxYp1oE1xkoXNfth5H6FHtYjuLUEh9DnhZ2LdTgaTnpmi1NEys5arjRo5sigVnyLSr1FEut",
  "key24": "2BtHdpG9C2m9euzsbetQoyEQtiJ4GejjgoNBUpbEC2Rzpa9i2d4VnH6kL5SPEKmRRgcvsSnELGuR3cdyzstCAMVu",
  "key25": "44nPmMV1BuVty2K6WggjZfm9G7qqKBx1Xr3CRRHJa4Vay2PgZsVsSV2RsEaxESEBHzN1efAbSWs9eigLBL4zJ4HZ",
  "key26": "2hA4K4omovYYoQ4kNF5FQWc3hRe4LEFUMg3avo5eb24SVaXPCeADEYifNPFmLmS6GexfYj3huEWRB524qMiD8DLB",
  "key27": "3ypn7Y29wYRNRLyiNSiwzeiZFo75NDym9njkSpmeXJbULbKHaxPW2733NeyWK5xwJhMrtmjjofXhXwfJkw1VJGRG",
  "key28": "5o4odoNjsA6fGkpSbsMbweVy5itAzjfUnr7i74J9XA9ignLKEjD8udBRD15XBSXxiQY7kNJsG9xJtauiXNqBdk7R",
  "key29": "5zyfkb7uWyvjfSmRodjfFuJqPzqLx3gkJy7DpVxW8WHmVUgMHk8g2LbEsjWXkbc8Dsp7ng7MT2rJiACFi4M2C6Uu",
  "key30": "3RGp2kPJfBzevn4XhBFv7h9hzaGwpUTF6VmRG24G9LrmrY8RJR6y8c4TXrEtVtMjddNKNshT98ST9TXHHFGmALcf",
  "key31": "2Htgmqo7QCcDYaSv98Mn1vFmXTm8h9ajSkxuVQiPLEFTNvJBL93rFST2Nz6Fo3cXE2esBmc2Zijt1JahWALKvVhU",
  "key32": "42Tm7rqhVkMVn9QkjAxckfpK9A5e7mw2F7Zq1DgK3E8sKPiAPK5ytdUonPLZjvETfqkJgxRw3dmFAxPgs6i5C6UL",
  "key33": "5QSnnynUzcRyXmv6iQqFGr5d1itidkxp2zvuJoKffwLinF2UDRPHeEB8fUw2zSomsQHdbq1WpVcRjutvNjUkbBTr",
  "key34": "5gqfBqBcdSQ2ht9hrTSS3y2ngkKBoagJgQcjbjuadn8hfgu4LCHWt9p2VL8jQcpbxAEcSbGJU8h62UxFbSBp1TZB",
  "key35": "649xNJSLmjVM7mggL2N1xFqo5jXpbUWnMk4YUFnswLA9S5fYcEZs4F8TZtwygk977QKLVJnUFxfjwZW8zEpqngJP",
  "key36": "4j3xwS19cnT5b1pNBgVSkV2q31J569YWCNbm5FwkoS8EUyAvSeAaCanfnXCLPXEXtH3KrH6Uz5nGMTDnNoF3Hnpd",
  "key37": "5HNbNcWjKQVPNSueXjZQ593gMRfNs8fNXwchqnymJJr44kBWpG6gomVp1mr959cPiTBsQAHiWzSPU21Bo4A5uAek",
  "key38": "33v2uHFbzoaAhs6BgQSFKdGVp4joBFEfHNHxQdopguDit87gBPmXdGrAfJD3Sj46j2Tfm97kopqbiUACtnx85LYt"
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
