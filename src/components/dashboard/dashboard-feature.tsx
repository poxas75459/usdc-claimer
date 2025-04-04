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
    "2LYexe2G5Y645FTtM9nzriv4emRYGpthSRRpGVFHRQTJhvzXGxsVHLD7iFFMXMTrv3cV85iP24u3AsnPbAfsWhuT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y7bvM7ZD9Cr2avke2dKzXPZ5UQzRfESvSBV7EShkS3X3c5mr6cgB8Jaif9hCNcrHKKDwYmhGBESuSHPCYqo4AZP",
  "key1": "5NRywsrovRodXnp6e6HWKXtRiSgqsM1UEvGxfQn1X4gjAgw7tEKV1EoyhpCfKxCzfxyByJhWiazKCGgAKd6rRbGU",
  "key2": "4kQFvAou77DGFwa5rzHKRhTVHoxiJhksxZa6D5rYkMCbjiaiYN6zTqiGnfiovSiPXTQqQtnJKxFHbEYwSCh1rCkq",
  "key3": "4gtvUkqN4mqfdfoGCK8kaTNkGzjJxFa4adK9EUwFUjbrP8HjHycQiA5hKnDiXvQugS9zv4V431XJ1bi8AeX6NCB9",
  "key4": "3HC9gBWyRzQRqabNmxQpobKm3sWX1wLZGmptJa1eU9Kd2LRawaNFaSTHD96SwxLrTGER4M5n9o4vXBhWpcKdzSFs",
  "key5": "3rqL7TJmnac2vBhgcEgJKfXShHQhkZLMPw5SCnkEXBRGdf7bcAY8jA5iUzgwFAtJwzxmqwDRnf5mB6Pq485s4GSp",
  "key6": "FQzYu8CuQESaLwPrB8rKC1vQ291LsXgVZiEtLZZpVxsgajuUx8poT1GL6jiFxYCY3ivoKnAPyfguBHbbTT5uknk",
  "key7": "Gzq8FzwivsuZxdY9y1jQrp7dQaYQQheS1DmPgJn13MXubvfWP3geaNuTvKARSMm4CLBYQJH3F6FtpYkduYoGdpr",
  "key8": "3X22b8joJHgCck6HkwLnMHeQ4NPuNNqaQg6i5TvpbGhkeWmTscuj7NdQi23E1kpYvpuaB37oCmxT9covSnAhnHZ2",
  "key9": "47vZw3p9Fy5wdiCgZXXmmZVxppFitc7gFC6UEsvDqWdnkVPr8eu5BbcS8vzgRRv5PfsxV1Y1CfoHWAXVZukwsmR5",
  "key10": "5W3f3xwju9JHSdGMYX9HS8QAXcF295rQzuqvLpFsfNTvATyyX6jpxVMj1HjRtZpaVag4xs45i8v6GzsvPmXHKyf6",
  "key11": "3m2xzeJbY7hAsX3SQmcmA4P6gWT9rG4goVb61R5MFe4nrr6bHneViUfQiLkpTkdjyCpWCpzPV82SNuADxpzpjiRs",
  "key12": "5j3HuoLrze2gVoEbBhD3NgpHccH3Vtor8bdaWX8smVgAaSsigmpqpr9EhvqRLn7ZSWxqm7MTCsGKPbe2FkaS8Lun",
  "key13": "4L1vjNUAKSLC5mdJs5rEDzxb3PgG6F1cXaXPFyjZqu9n7PazqKKQH2HKJ9TZCxRaDTAz9B6r5uNqBHQW33KEcVGH",
  "key14": "2eiQSi1WhphFrQtac5fKUTQShqBBQ4BhWPXHStBnDDUG3kRFReWHVErayNkpCx8CacSgDDWK7snRwKrNT2HRCuxb",
  "key15": "3qhEZTKjTs7PBW57cXvUQoz6ohZBs6ibZN3MPFeWHdTx2M1xy9uP9dN2YMvUUrFVmMQG4PmexpoLnLMxoLDYzntH",
  "key16": "3ghzhnCWssJEmhAxAShGsNJRKshxHKjBAfQDQGbK5Gd4cwhp24QjyrkemgKFV7nEz4aN43s8d91PvbSua7tgDg3",
  "key17": "4TNXqmKAETeAgiYtTXgCpYoJwcEjHRy7Eqb1FviA21dHpPN3HqxjXSVin5boM35M7QPvhAwJSZUBscMpLQbunacC",
  "key18": "5UM8zSsRtTWpmq1mHdDnm1AwRDWfcU5b6Yt3mHx9vQTYVLqJmSw3TnX4WDo6iw41WvrHEaEmR7yU2xWPVjBtu6TS",
  "key19": "bmdBS8jocyzhRBU6MEMU3Jh7XhyYT2cciT8w417khNuhbK7WUwgw5oEzCATGuHhNvqSwQ46L6sv7RF8PvcaKXK7",
  "key20": "u75DZhR9ZvAhDAyeK4xBHRGUGcpwoCuw6dpwcQdoEWjAYokYA4CMZgq6hitGso9JY7umwFKkfWMvJUCipmDVuzY",
  "key21": "4E8u5xhvPQDiwqRFwg1Z1myemxiEreQ78WKgdbfS9nfEAFP9xiKKHMogttCsmt6ezSVM6GRPpMiFs3mFUVau2pnk",
  "key22": "2YuubWE3FVWWJwmSNr56geB2KWxMi62vkkJLbQdzTKTQVdEBMapvsYk5URNtbQDx2tnQoraFqbZ5ZKxAamZXqv28",
  "key23": "5rDafk2upvYqo7HhrHBoGCoQC6RcGBts6RQEa6VnCxdzu2Y9uhhw3WYggx6FTN3WMpDkMtxU4mYqwhNbZkaBXSNU",
  "key24": "25g5narR7ZekULUe88JoL89hr2i86DetjcfFWCJsZVqpiVz2Ln43p9SxrCpG8a6gXZeVWb4Xa2Wc6b817jckbSpe",
  "key25": "62G3y5dTkbxeTfp283sy7V3MmCKmX2vSFf6UzpcqVgVQVagbN7RZ1BMQBHRns7T3vq8hFrkMxR3D95CdQk4WXDPG",
  "key26": "TiVM1BcqP7tSwuFes3roVtwXvJ39N3nPjarcGaWSFbQHMuWvtBQ1GZfTxvVQeAyqnLaUeHwnQQpUH1Jd7Y8gD4E",
  "key27": "465XPKmSjCwAS8nJDtUb3p6WADrAYVNnn9QB51RQBLAqHXd4cJJ2p5vGVHfBh5PKkYsh8fNrKY7w7i86kxTpz2dE",
  "key28": "3NQpEfEtwtzjDRRLhypT52kPkZ2UfwSUTpSWW6yW8WQjc9qDLQfKjVzXxXfvCZWuLAugpA5Dv5dZ2MKLtLfbKST5",
  "key29": "3Xpav2mGDrbVdenFU7oSHPd4WJMJFYGxTQZb6GCsRzBU8Dbe9qs6wV27wNgHAuf2xEAMbkT53FSM8qvfoQpcgN28",
  "key30": "5aiFsK119BEwmV2bpEX5BHHQe1uiyUqxww9HcVpTzmDz6x8NWbRBa278Mnt7JBaKdtQAcwQtygak86jgFhZv22D4",
  "key31": "5dGbJPc6ydYFgkshbcjWqDC4mwzpRfAWdQKZFzUwu3WcF6onKoeT8ya8FLcgYwfypsQS5tvLnSXYCcuvtoMbFgZH",
  "key32": "2kA5dPMsLi9K5ftKmFSU4Y1M7EaBonzHX4iEXYmTS7WYhSDyBoxmrCXCxRwei3AHiT34s6GLK3V6sy75dvSpPq3T",
  "key33": "275UQu525fF2xw8vEFnvjvRTTbzt4kNNd2EBbioz1TStGYE8JMtrUhBqCuBpnGxeNyUg3mUDeTLa7K8vyo3DwYsR",
  "key34": "2aCSBzwRBpDm1PhxJQNmbatSFuFrQ2Gb4ARr7UauWM3NygAgYJc13SJkH6QijvwCqyTgUSHyMGUCauDxgxMH6xDT",
  "key35": "5xGEUvWmH2cASyJAhE9PxtKeRm74ZkV9Jy2UtM7ydkNvC23LsT5AbiQkfefTvHuYrzqGcqqxJitRXGN4yk6U4cjW",
  "key36": "4qJbeW2Qf6o4a7VHWc5Lj87h5j3ZdQ8if8f4STS7bEkepj9V5q75ATVR7Sposm9t2ok12Rcthk9QrPi2tFq5wQkq",
  "key37": "7628rLJMfX69CoS7jccoTAfWmpfg1U5M5HA5jRihrfZXaszSkxUefP9TV8pw51mK5Niz2jetN19fVoNMKmTrMo1",
  "key38": "3oWF1rLfhXmq4Tsb7GvHyWebtYC4khaZu6qHqFfgqYfn3qgQpJC4dEYAQCZvMALrKBZNv43kbpboN3KwmixMmJyk",
  "key39": "3GRPupmRsLRaW3ydAJsZJnUsEnyWUh8pnEoP7neLGYxxWCCQWet3mSyYBeVWNHroZZu42trDCvtBbHkfe4Zanduj",
  "key40": "5aUt45y8pNtTPnq6JHfxmQGkJ5K7eAnAjqEoG5qZ4WaYjyja5A6teoKfuprS9sFSabJMTaGQHdXPR2paVENxi7L3",
  "key41": "vkb6UdrfXVFrSCFCYmetvR1ADVpMqkqTH93Gyw8DquMUYwj3vhypYXabTuuBCdc5bcUULYY1tQKyPYMZic5kbj8",
  "key42": "2CXTv6okAeFfej7ea7SJHjwP7cQQMyXUDCt48Rh6PJ1MUKU7zxtgagnzPGGwU9D4rW5yzK6Z5AmZSQ2dcYTArR9k",
  "key43": "ebrJbmf2iP4HuhTgpMWkAXU7hTo3ufXqoLeCB6TzjE9RsndhBf976xW9KAPovhNg226iGzCMVGGHMw28ntmJwB2"
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
