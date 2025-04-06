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
    "2z5Xx6iMPAjvGoP6B9AWFkKAkeHwfHLNsYHZrLtRrP7JykGhDgTs7nemJ9Y7NYuwViehdgy1Q6Ry4gyxZnpetEKZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RCNfVcNERopwRF1HLRtZcTJqvqyEfrFTXDLhDUCKDiLgDJ1qimZjN3JrHEfDbvc9gU5oNgrmftEAhhB8UqCwUMp",
  "key1": "34y9KrszzpyshDg5NkvfRDk4Eqn6cSw5qaVWzymaZrtNqe3tRGqqqmAH1V4ee5NRvW2RWfmotb5Bhvq8qgen9Pgu",
  "key2": "2tQniqiDJmwfeTePDfzqsz33PpDFyMxkFsc3gVvbUcmpExmoeLxCHudNcbxLeWDWvS7dhCi5UVUDRRnt9R5aMDJt",
  "key3": "5QYjwFNgR9cpsJHJ6AvCqAQ5oH9rocaH28hWJbghZLyCFJ2ToFfdQBUMrXVJqp5uDNAjCG7By6QTDs7MppFNE7Jc",
  "key4": "ungNGYN34f5gRUyfrjx2JyUuECByTk7WN5jJJzoTwhpGqE38HJnVHYKHhofW6gm8752ZLNz43rxVteJziFr18Pg",
  "key5": "4UMQ93s4y3eWvxuoAYqs1V1v3iQRXbt1rSfy82c6u4wPFeY3kTo71BRcupmUCgrhpG3g6wwhBTgrgiU49AjyppBs",
  "key6": "5zqFyzDbwN9nEXeobmg5CS8fz9GNttkA43jf17ZaLuXKQMHunTLc7KGdeEd2jE8VaqF9s7FGxNwzXxCouhhqEnSj",
  "key7": "3EpcsF5oVELTR3ScirMY5HpA6Ze12Utondq5DJ2DdBaGtPb8kzpTdSD5v3Go4kLbn19w1SUzTLpfp9W1TGqTMMTY",
  "key8": "27MLqF3qU57yr3ixJvMsXmTnbkKG76XHQw32bidX7uRLgcBqJ7ekbyXbhRRKjhXuGiisK5ad9tCQgHDwyYuR8tG5",
  "key9": "3BxPDYUzRRXgoygQPeRHM6fPXJUvKNB8nFM1JcvfbAVmsvncguk6mjYjGF56CfdfrGA29LfyvTLyahzPWFdcgUXb",
  "key10": "2kNS2m2sfZsBSvtC4CyGSZqL7Dg3GBWFtgZJ5gutKq5f7yc1tkLuAGc3fRQctwBGAX1X8qKppiLxkNzr1GEfN7eG",
  "key11": "3Go4WVZ2ohJ8xWN6QbS4TkXcaZxGWA4Zqnk5zFek74PUCqNgknJ2vKd8qX8SuvhCvEJ7LqRjcqfEerQtdeUo9Lfn",
  "key12": "24auEnCVTWEDR1xyUJ6DQd8r6TcruqjEB4Q6t38AqPmG5Bus3NNyEKTrFaZ3bUrTJGb9DtLqGx6KWRuJdh83fY6P",
  "key13": "2yHqN91AAydXE1mvekg4YNhsHNYzUrEp223u9vZ3DEii8QrbbcLVD8kwniFaG2KJL88GdHXG4To6vMf1V4xzBqLy",
  "key14": "3eLM4mAZkFFVS5RbSXC3LwSDjptBwHJh9uCNBguRqrRkxXsrc3iHRwjEwJN5gThiWb9qvwcia5txHWJTgDNsnh52",
  "key15": "4Fy7DFtBt5c2YRruw6wS65aF5nNGYtbHJ2W7rwumUm1RjbkDp1ZqmxrvSonek8osbvE41iSf7qy5tkCfoj9C7Zgk",
  "key16": "52Hvqyi1UmcM4NGbyR4GFYgtJu1LsdZroYzBjW2RswHoWzBD3vQ8AxpovWai5DWejoJh2nSV5bvbbFM6o5Yfwhhv",
  "key17": "429cUScGYgtmZRTzs2z2thxX7cWALSUiSXvg6K1vxoPUUFrPp1cmjmaXDrUdXg2ewGWaDACENVtGbVqcfPegFk9M",
  "key18": "5qJu97hjgi2yga3mRUGg8TNg1eLvL5Dqoy9sZYfEUjbH6rGSwgBkeJJECC9fETwc1ERo5kM4L5VL6ah1uKoPuJFu",
  "key19": "4ekP7yrbqUQScCocJ8Sro7BbqDcADuXra2m2yE1ESYa3AyK3Hn9WhaMTmgKBtqqFBy13YpDvPynkWtidWnmaJkwc",
  "key20": "ivXR5stGiQQHwbBJ3DDLjADczB1zQePKYfMZmw9CqFft9QuijFQWgZtwHdExyTceXaedbzqfLWa3Rab3bQztu9N",
  "key21": "4zWfR2yr4k2vkBUbTfXct8Fdtoj1AJSp16nMmcvb9ghkJdiUYwyJZhRczih11cwGpUEkaCQsQ6LhN91CJeBmmp1a",
  "key22": "59CbY3KgLQZ58GZojRMZWuPZRVT6J3172vwbExs9nn9C3DUbLTwEcYZxWY3VenTuHg2aKMAyHTear3Az2a4YQyYP",
  "key23": "59DXvyWTWkmXQyfxRF9WScbPbqbWshZXAmju34tr1yyQFpKTZjKKGEUxqrMWPXCvWDBFwrqJg2kypHCpa2vT4CYE",
  "key24": "7rgf3oyd3UjmqZriCjScMpPDkKEobD9xbNGcgsCFhMDeZiNnHCm8W2CABYyu5AvbWwRhFjL2ovv6YHMS8ERkxyi",
  "key25": "2HJA2NfFhHmZyKfvW1FVZx4yvpvmvEqDccPsth47SdoCSuEDEZCDMx6qndk35tK5Xnd8n62nGmss7DLMZuSLVt73",
  "key26": "5vaNVvx5wW8rVpzbo5XnAWMDaHKRutsQtFqnuaXN8wZtFjBSp3mtZCotXVdHR1jen9YksdvPWmFyrK9rRn1xBH4g",
  "key27": "4XxmRvEgoCgk99fshfAYHp5EW5GMmzb12QwLkiejnxQPUzvp5BbuEDCPEP8BXgHrwZppYXRsgmtj4vvjysMpar5X",
  "key28": "4WjG8TAVScBFFydw1hApcSsV393ErqfFJ1SeCFAnmhKqq2iKcAzBEaSiQv8iet3Mbh4KzRTXG4CXTdP2d8BB7Fnt",
  "key29": "52kH9C4nnoTEMcrPkTEojxgcqBFL3ZHVNnhQH4bGBunjCKq9YkNjCzT29EBw8LR63CoLgH9dzu7CCbqMSnbLtYJr",
  "key30": "2QTetC73CFaXxZ2UXHtqgTBeFF3YBTKEG5kRzoiufEKK2ydaYeGfYYK5XUqr8UbdX7vP7YWtk83NRAJNBYdMXgbb",
  "key31": "66soqeYH3LvVbH7nLCqpAirEzFkB8i5vDcxCKeV9a9Ke4EgPonxUVQ1ysdKA4ss223jwPMwgWSn4kZEnHwJwSXd2",
  "key32": "4mJQSnsqRYqYM8ToH6ZQSV9LD2tzGEPjbkAECAFbxpbATgaEwXoaW6u13vKkXQeHQ7MmUXDNhAY5kgKexzRqaD9A",
  "key33": "8BmReAcUNjM1v8RCLiUCHRLunXpD1JLHRWL8YJKFVpRC5YH95tuN62fFZhE5yNYYMr8KPKZKVDPMvNTeDKPqX91",
  "key34": "4nuY6kdDrNicEBuu1zYKYmgLZRBTRLASs5t4YqXM9FCqKSkwF7cxCFcTA58oG2y9SV5Q2HvP79DGvJTnt1S6YvNL",
  "key35": "HjBfznCWKrYnTJktYdcjbhP7HhHSUUVGCjZgfB4pWMU5oyS5tRVZ7ouWsRY18v7qZXhW2jvFUTrN7UCUhc7YVZM",
  "key36": "66pfDzFWcJp2bLaKDAMHAy5RPTja2GgqfXdHT7sLr9D7LJfsLgN6b9bFu2MW2D8p71Wyt1TZiquTsoJW66XvHpAm",
  "key37": "4BRfM5A6KBB6yJrPM2W8DrVNWzkzvd1XSdCZhYCJKem318PBjbc6CRz3pA9pFJZna8ozJT9HyxD9x6as4cc1uNYr",
  "key38": "41sVhdyxBjn9dGTSPcmbRhFA46xeLfDgGtjZcCo3eoF9Vn5jR7xDwWy21ddb2jUXJWfAGpUiVewSUDQTWSerefSW",
  "key39": "nbmVxdakJVYjzWbFkGx1xdHgv6HoyZwzJsYvfMYfN5dtDiCiF1Fq6eP54zVnGiXWYEx4Y3vs5zErQPDFJbVqxBm",
  "key40": "59xTzmuJVpun3t3vYzZEuCBsKHrrEeFj69E6kYC356KY8VcrJwFNpTWayhzwu5xfxUg5zdxLvytT9iWM83CbQskm",
  "key41": "5WtS7UMzUZTRtGPh7oDZ67u2tTzE97NYo1XRawm4KwvzDykTR3RuNp4kpHNiMirexGweSFtC5FxiRvmnN6x723Ar",
  "key42": "29PqmbUcjRNUnUX5PpjTChN72GAar192tZ7xL7qveKjxqktCVGZJbKbp9tHLpVj1d8LzjxZVSKRoRuUzP9Bdma6k",
  "key43": "2WTp4ptsRjifNDCEKqGQcjizsCRCLqSUE1SzwBTJv6pu3tCLmzSmzaJJt9QHau6QxXdNEtivwjEifeYc9C6zGPA4",
  "key44": "3u5JipQWf64U5hLxgT9cHsV6pmrymn9fyHu3gzxDfxGywiMs8RRtGGF59vvnp6KhtWzf179Nxg6VLFf73ZWvsuBg",
  "key45": "2UZEkEMgSTzZRrvpdXFvpsStaVixAkXPefdvAvK4oYKihLW4XfXpfF1hD19UwrMNGHrcrr5urBUKH8T46yrFr7Ao",
  "key46": "caAiBRtZj5wYRCk2sxFRru4c6uHp4c3bUnnySHn2We4RkSBqhE4pnFZjNQp14cdAKxqErVnKGbTpQnUai1VWn4s",
  "key47": "rmiSEjUeFwPzBwLLUYvKkbHduYM4FAUagx8yMwsBJ7jLnAu31tjbwHYLiryQZpHDwYNfAeNJAmEwiqn5cftEa8V",
  "key48": "f9xCs1xAWgDULAzZXtYkSdCADRqUAELwe3j2LoaLHiMF4rn61yLTjhpBNbTPZcvgkGysm667BU9erujYBJFtD8C",
  "key49": "5CsCnxoGCBXpUvsuv6KFGQTYQnQo3wqwP9APzAVE1kpu2UoSRycSLJPvMrBh5WiNGTb5yzqM37T9TbuotCD2Nx6D"
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
