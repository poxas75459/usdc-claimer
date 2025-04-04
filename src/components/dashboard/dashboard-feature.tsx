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
    "4SinjiauyCj6AB2FywEJAKnCiuVdwf5GN9NKkAVHyCJj9jfLLQwSEj2MqVY8DHgdgEGU9XjnSqd9Hj3263ouPUAm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yUHB3Pqxu1sYmhp3YzEP2hE85X7WMV8tWWy4QNRpWrbxXySRYNK5RtwmcAFcLG86FMvfDCz8VA7j8rnU7wMwnL8",
  "key1": "msJ77HVN926yBT9uH28WC3ALUzY3d6efuaSNATsXBoLBDcWxrVRXUYvFyvXGuzP4Dum83KqDKEFRgQS4UMM4UfL",
  "key2": "4afWUWqYiVNe41kUZk4uHmSMPU3dF6f7bvwDn5qDsir9W3cG3bwcLFeQ2aQVxJeKQpYZiyptUYFwehT36Yzh27NJ",
  "key3": "5ZmL44ETTTw91edykw6EVUixGhAG495UxsHjiCuPuTySZzBbuinkfvyK8z4o3VMG147YZesz5ifRhQqTLMq5usfP",
  "key4": "3VJNECgihBMxkAEDfFv9RUnBHPNGz9cELEobnnFCjjTUqBunYNwqb5dCcT5YX5EFYFekdFbHQDZSwawKZMZt4xpX",
  "key5": "LUVJ6WFCahGNCto6Vee6pfj7zfFuULdJ3inibHJUujr4bYhyrSsBamSwf777hYefP2EbkQ54NKo7RTZUS7Lo8Qw",
  "key6": "ApZBaEe4iHYmt29PzXfovaPk967AZmi9irebeirr8CktRJhDy1de8Sa714t9uZ5nhBecSAZBHdh8j9xMm8sNQQu",
  "key7": "4B59jVfxWEPAPYGZ4CMFZqnEgBLdG6g1ph6AJ6MPJ6dKUkjJucTAhzqUG92Yygdf1sBBB8SQPgrXnHkm2GkbXBAq",
  "key8": "4St2C9hFk7K8eLUJq1FLepNK16aryW2XmubXrV6j1YifXVsd6Gv6DD8N5q5ngDwVbwn27xWP19iREHChX9vgnZVL",
  "key9": "3uMV4uGzYWEsfN1iM4SRPsHj6Zw2ewB33dR4bNybL4wLoThTMGCuSs3GgyXRkHoKn8chBftaVQ189BMHeKMJ7ukD",
  "key10": "5rRZvqTJWbiTdYMPBSmDWQRCHzdm3evhiQpMQyQvNvRz5qYxkswUoAGTrJv4y8otEpmLCuUbrdNFRHPeaxW9AcWw",
  "key11": "5BrqqFnsfGoeaBpAWekh3Nk9LXZfaWq3oZpSooFXTeDPrEhAZgTgpJzePWi3TRDLvevHqReQBfgyaiFz31vYnGFS",
  "key12": "5cJHNSDRNEiU1t95JHVezte5cxkBySfjVUzBFsDQ7VKFW4XYexHcCwiBfRdU6f66NHKDtxneWLvtM7ikwdzyEghi",
  "key13": "29m8NXptm9vdnGQD4QnPXd8FCySLDBUHyLBGkvQrYevxoNfqDKyTTgjs1nK2BXGXDgQjSJ1wh7yjS2bvwBypoxSL",
  "key14": "3YxDbduT7AzaPVG2Fq7GzmykLp4SyLAX2x64bNbJY1XV39gF84Br7CkAt2GSUrVwRCZ8C9HfV4crMiPsjmcDD7MS",
  "key15": "5BVrayHjYkSJWwgjT4wDQ7VnzS4Woi6Xwd3qRaQDdnBjwLSX6QUNikBUtTzVvgB9kGHF2s3KwoaejUPaWKJB58tf",
  "key16": "3sv3yMUeRFjRfz985vj1tPnmi2sgy4SLtJfYoPR2xbJ62ZT7p6xor7EzvdkN4ECexdayRF1h8gvGTVHmU73P9FB3",
  "key17": "65fTeRgeL7WynvZovk4auzeS6ePak8uLNmQoYw1CJB2aNUk96FvR9pSQnyiRvXrhgyzdMD5cBPSmu8G8P5ARjXF1",
  "key18": "3ALWkYJhdF5HDEPSiNuHuw7Jwk63EYKRUWeWdcLk5te3Zq3QcWjAyHYRW2FsLiAyqQKPFjYiR5qqwwpaSPuUVpHw",
  "key19": "htpQX6z6x5TLoBCWkxATDV68KFGegR4UDw8qRJRUSbqSA7QLkq55BA8aE15KN3wM7bB8GQ5mJz1ZgiifYLX8xXH",
  "key20": "2jcDTPUkuBjKbbTV81re29iFTeWMy5epZdjWRqHjfqLfgrfivjB2RAvwTUBsr9rRdPig6eeCNo5SRj2D194Ez9Am",
  "key21": "NbgUxQNirVJafHce4wPQAdEHxzP2zRVEjcnDtKCEZddviBdz7YTk9QJ6KLHpMto3gMFXg9uyuJkcqmrMynBmEJD",
  "key22": "5EsmZhZimhzUEnoh8csPU2pLPcYAdsi1uS8yqGnudy1SyYs2YrRyUb7DwwtR5ZBVLAW5J2pGDp7L1ssiZA66moGi",
  "key23": "395HQKdX1pBv4nfanPctnGFqYXof1pzVhqCKy9q26Gsk1CBqFb7UVHKcYm8N15nkXBChiuJQTvkstsmvmRunMVrq",
  "key24": "61QxLm4gA3K2RYERctatHSvokKsVQLSxdBMMFgvVAQLApb5aa8kvJL1K6LeJThqYXBpBqcqqLJhzF4Hgexv8Yt4",
  "key25": "1xP8VQoNdo8w8YqceknPwiu8BiP7bmA1eS4EgK5ShW61YkqXb5RVBZmF4abxvjdPT3MKTREp1wN5pTstfEyT3PJ",
  "key26": "5aWp1S61RpzADFfqafB8Ag1SWF9b9T7Dux7NYiuq8qc4QBfK8Bi3FCaaaZ1NNKW7cm4JTvYCpfBfKDpq2Cx4NMCj",
  "key27": "5hFbb9dTmgSVaFa2rgmNLBT51if6xokRKEpD5whxyDdXEWV9nNFfuptvbRM5H52yXwKr837pkJt8odYzgL1sBfh4",
  "key28": "4nyabSezuYHXEe4LNd7iUzvUQfZPfL8vgDhHTaHQ5UAfmEW12d95bRyH2An41QAE8ePxkM63opGBqoSAsBTJzbxM",
  "key29": "3KcvgcGehK916PVjymfP6ce3F7rUyCnoFZsG8p31G8eYoLj3egtJeJJNEDzpJRVrcnvNW1nmaYKJP3tP2dCCW8gC"
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
