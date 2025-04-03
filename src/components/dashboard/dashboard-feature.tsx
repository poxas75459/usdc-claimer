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
    "2QmEx2Uz8pJjjyq2nB15nYG7tGFLdygZHX6UKUuigWwPagjbrPTgdXJNaxd84ZaP5hoQ4ewnUsV5zSjmVrrgmZxS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LgoXAvQk6HBRFg2uRaMh7eJMyUGZYemjQH9rysgjoo3U48kCxKiKpsaVKtQy2erpy3EuJgbiP3iWcbFviqr8tNM",
  "key1": "2hP5YvKMP1NfiyoGXVBxtYmEQ5sRZkThAsYB38kTtudiYznyWXx3Yyb8YW84xdNuykk613rPFJogpqVEHfZB1MvQ",
  "key2": "qFyyBDE7k5KNhGwLkn33EnP2FfuCGXStG1rXctvFSXGBRopMGUTZRNNTvkgF8tJjUAbpLcVW389c2WoXS7QfDwr",
  "key3": "5UNUKvPzmZ8KQeavVAzVFKfSETvf5cHGodnvNPJN6uHABFFvnxUHqXNJmBLeZFYgwM6BJkGqNj3h1sRW98A7E91s",
  "key4": "5HkVdZmiy7DBu2yoQGHYK2CyME6gNfM5uH2WC1BA3eKR5Hat3kbTVCanKDr9rEStXExPKedyycEzJ86Svr2QTXFv",
  "key5": "4fBBjZg8JbLJJaXL2pMfiQYRhuN4xcu7n679xCfaqgoAXHEihpVYwvR7u2aRNgq3siEMu24DuWE3RhCgk9Nm3y2G",
  "key6": "ZTdqgPbNgRnpiVRcZP4HgFeFWdc8MauLyvzre3X8YfF9SEAVpmzfM2yv4wJEG5uv6Wc91ECm4gALZcSrtT2B8Yc",
  "key7": "zkwGAGJKxv5Q7Wd5RE6GXW7d4VnqEEUCsJZCgN6Paw2WTMk2CLLry9tuDcVuZsq19WhDAWpLPodf8L61iEZAw43",
  "key8": "2PtuanaMdcG6HFHvRgXxcfznTNL8n5s9jxJq3rSfFXST1U9FzzGKK7M2wqkM88j1Eh6DqSugF2cYVVTLhdgzFGom",
  "key9": "4Wi9KQWntgDLKr9VmFyJiga6pzePzspHCRvBff4h1LwcUr8VW8HGwgGbUprcFpXN6SEUrJZSvK6U3t6a1mGZGdz5",
  "key10": "5i98CXksXXmrMUWQKQaJ7BEhCGRyXEj1aCzXbWNWsRLywTg8PRzZv8kAURakUMmh9Nz9FqY2rrgMZWqsLkjJGBNA",
  "key11": "4bopXZ8U45gQDKeHhkPKiFRPvGfq78iphE5UTuzjXuf7RfqiLCGFzYoymJCySphXFKrvKEhVAUyQ8kivwY31CTcp",
  "key12": "5McKhFxzYbsCEZfqRi6XtcZubcZ25AyC94nEw5kuE3EPg4T3xFvhKFcdQpWcqMLMHpwKxhUstU3z7a6xD8fPo1gX",
  "key13": "L7xLKHmBSECeWiMBjJ6HyHZeaEzfSzkVyN8CPBSfkcMAzVWjEQLmoEh3TaD8tuBdUoEe9BuU4RgzatoHSpNLLgi",
  "key14": "3545AHRSAMVfKMtoysT3rRkgmNpQppkaR8134zwPhWCzhNvuNZJpnWimvLdrkw8udb6uWyxJu9RZCh8vBJLm54vD",
  "key15": "3prwS8Wpnx56mvQV6i1fM96Lb7stPhiyJewo6na2NkPnTa6ut8M1KMC2KkQHMLLEw395YP7YF97FEq2jwbWbeF7B",
  "key16": "3FaiPjXy5Sqr6wBgy9PhbmNDb4mkeFKwz4xBQ391QW28fYTBUkoJJ7KQ3ZT5m1Kfx6uRdWFy7aeyFwpHyFpiRg7S",
  "key17": "2w5Hf2ve1JGjZCrtoSEZP4f478j4SxyLC2KNPptbDcMN9Qe1BxPJ6swCsEVAJR8eyE8otGJppq9n8jJc4XPrfQko",
  "key18": "hd8thN5w7fm1u5kG8Cj8nXip6Wz4PSGh3pCHjXpFQH6FxbB88rvCS8yKEXwBUSjoA2rs6aHyws5UEX8m8KEcKYJ",
  "key19": "p3PDYvckw9mYukYSuMZYEkTfSs3EvP4Q2HDCZxLvpAbz4CRCtCvwRZ4qb6UySaTxd5uFoibXMT6bgtQz4xSShgD",
  "key20": "5ehoAjLStv8XMHrgZtEfbCWUA7qcRYMEz9sGSigzr2383v8bp5Lfb7dPD8Gx2ySVrJCuNnVTonETW4PuGp1U8XVU",
  "key21": "4KHcUn5hLyGJv4DQLNAV95yrZrXD8sM1PJ3BqYb2vKRKuPPjq8rpnK6pEQFx45kqAJZfLicu4VxyegdXHqqvzkVf",
  "key22": "2sSzxdTSKadvvUMai6Z7ReTqjsUK4KSRnyWYXYLm5fL3tqXGPEQbcrX6FhGr9VCCjVLfCScWdrxT3KBHzPwM3z1G",
  "key23": "xYSZwNbAvGvEShRHNgkkzUNFHAw46kGwTxZqCk7HqykBhL1bPcPYmAZc2p2GYLqJgiq9KxuFTfKrNYNyiDcAK9t",
  "key24": "4XxwdJJcoxJLNH6RFD1ruhmKxanWnoCznRqujiSKvpqc1Qc4nK6wYkkfpDP5XXns8CesNZmFxRGmfD5F6rVzghEQ",
  "key25": "3MyqwqkEDEgjPG1RBbt7deGu2h2t1FJtmY2GS3GzyuPbMZnqn7rLh8CbsGAyRcm57r32S646TiDAGGu7r9wwbA6T",
  "key26": "4yaoZEjkRN6uWwsCa4WtsittxdSkAwr3Lf6a76rc7rW3VxLcXKFvrkKCZZrDCZ4yKn15wibPbuPFokDq5EnhN1AV",
  "key27": "3S3xDJtWB2VUGHArAzPap3MiCgXxWHa5skcr3gAxDVeTTQxvoTv9ooffknE6K5fVrMweVGw9aqhu6Shh35DmdbPs",
  "key28": "7NyBi2nu5ivBwCHJhUrxyVyLQof5Bds5PEMVGTQ9r7Beduqy2JheFGToJJjsDNynxFyJuRTXaZKLv8HovdHxJjg",
  "key29": "5LZqg6bf9bfVmTAUe6wMeq54pC56bBMZg5hxeUxBopRJM9HXM2R2HwdtZsrWzB5DdUn4LxZMLauSLzYrWdkJw4Tm",
  "key30": "3fVngrphDZZ7ADs78awgU8VCxbe7i5dDKKe3hBLWMDhra6VgHxTtGFww14qwkr49yPh9HzZXWJiBh4q9ZmHVxq76",
  "key31": "5gkyYVU4GyfLiq2BmiCQTWq5qMVAkNUmfPwWi9jE3NEpWoekM9LqShXfW6XAofZN5QLDVKEn4gdkDgJTpr32M2wa",
  "key32": "2nf4JfEVxfiCYGsCJh15urzSk4asn7KbtuykQCwwr9vC8Sp1D5tVALZk7WSY8zp4wPWygZYwVT8zqRUQPNKUqiB1",
  "key33": "13F3bJW94DLuwDFWbm4kkmK1QxEKqVAo4tyDus55jmZDdLu9LvDptziZmwu7YPxcKr1PHQ6FEMQ5WprjaPaGy9U",
  "key34": "4xm7CYrfQLwf1nkUiBg9icVow7DtKq28AaiKWnJGgLcfRVQBTmFpaRfTn7hf6m82vteGfk3myPHCnmZqhjEwJM6a",
  "key35": "2QAHvftgkCVFgnofShMcArkRJSUJR3P8HG1yHinoYY4xDYT7FKZWsU26ez2EgPkZypouMWY8vAMwv7m2V96z7Uz2",
  "key36": "2LmzgRj7Aj6Daieva8L7AYT3rtmaASLazxoMxhnZGWEVBSAnGCxVEGXdgDcFypBGV1qisdLhYo53xRBCVtJKQFoD",
  "key37": "2X8m1kBnmF8ARE3C3RQ1NanzCBjqeA9c4KbrQxKZt3JynzHCyBUqL38o7LwQN7xrTc91faXZKYFfRu7dycL54Wrm",
  "key38": "4xoYJY63LdwLNRWhhpv8LuTNvVCiwtZ3NFyycXKFDQCsuaXNdsuUWMjMvnfvCz8dZPjTpN5umnuiiKqLURoZXRdS",
  "key39": "FBpd7c6DPGQV4p5Whwh7GihUyYr7aGSwRRFWTiaueBEZYp4wgZjDzGhk5FiBCMhGpdbfeEEsnQvmRbgi7ddasBG",
  "key40": "24SwULbDMr3ns7sJrd1Uj1JF6iTwTMNC2fRfwSm7MPe6JGo7deZvHDpZL8SWZxQpCoJ4hKDLAecRZHPMLzv7aDq4",
  "key41": "5cnNHKxPtoVscVsEH9LUnHzmBewx3nZKJXv6tife6D64exvLZd6759jbjCqhXQPPKav9FKiRbxJrQANg3a3Tiqh",
  "key42": "4TxjGgcvLN7jE1y1FBoGhvV8fV8ZrnpFqj8jCfXBpnMv4uZMveCbr4DTmwkXqaoeSnWk9pGWsDyi3NmY2HEWYgWS",
  "key43": "RiGZTpyrxSa3DSUHdvSTdhp6oY2F6EprdGkzRaFHDWhHDEAG6Gyq798irpT3UUS6rKZPeobDf4dWccck11kAtWZ",
  "key44": "44Um4dyCuEmtTfGgQnxg91mwvtjt2h1u9jdztypBsi2oH3eu9YbHKcy59wAumZQHpLE4jR7ZJTR6Rq6CSHeVDibd",
  "key45": "5Uzg1FYZ8V7utbzsASTWdLLwCDDpBmw2jfRmrMU46v3q3dpKpbvZBXu7n8yWzjVF57NaHvLQ11zitZQBsdoSsv1W",
  "key46": "5X376hpVXoEcAAXijMdjRGc78Zv6xSw5nnWZ4bBig5QSC6aQnudGQsVnjNK2FGcSFrbbnuarG5oq7voWbUXGiqfB"
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
