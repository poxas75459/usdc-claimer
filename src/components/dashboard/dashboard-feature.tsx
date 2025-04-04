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
    "4kcGUFN9YqaVFh3fF932fGHeQxyeNf2yoqnVUqgUCS7tWZmhUYGYwXzmcEStULhgdrvNJf5moUsD1NcD58qEKwxj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zgWkAFfbmZVJAtWhyT9pBNLAGm4L1JuANDpVR4GNCeWpQx6Zqe9ugrbGmmLCexpvcNvKdTBhKqjA8BiqxirxWLu",
  "key1": "RYARNmq9tCYu1bAnd97YPG7AZf6GEJYzy7DAruD5agmUFrBzDgHmkKwv4eFG6DsRXjeC8Xezm3W9fzmXtB3BM7E",
  "key2": "zs7VBWPdZEpbgYq8dM14tQuhHKq1MChRuyQsc78VYQF1WrFgwP8XmrM3Gr3dvkbES4RriPGjYeqbmYYq5iKayU4",
  "key3": "FBYPths33XFLFNAErkSWF5wXvpwc6TEqj4eR2nf7mVeagkrncBBnZo3MVzB5NNfmuF9CD82Sz1183ZJbqwFhG6Z",
  "key4": "2j79rJfgMSJDTGxtr1n6s7CSAbzpZNu2329JczEx6AGNJCyzbykisUQanWDd9wwQRawdfVqnuEDJygjtx46vntHm",
  "key5": "5xRaYj7bTRbXN732TmZZS7JruaiTx3CUeHfPnUyn6bevPhF7zdsBxzsK3Bc4zYVNxhT5FwgDv8J44BdVHAi2xGGE",
  "key6": "2eAsx6euLrMebkDxx8BzoEf9dA8ppFX37ngXDQj95PLumLVCoT9dh6jX3uGmcWJBDZEiRcMcg7Hv9Uw4iYowjRvq",
  "key7": "6Cu7xSEn5DDWqpEavTjXUx6gerGSozoecshi8Nx4twWWGc7HVuFP74UxodQzwNrTYM7xDxgC48hAc4PjVnmVFu7",
  "key8": "2ViwuYxPZ9r4CQnXxDT2iuEaM9NmUkkSE3U6dpCXQqXkWNEDc5p9nemqEez99TuC1VcCZ3hfyiGQnvZt6qytcyuq",
  "key9": "2HNam8eDi7LNz5pzS2ubZGhoMPL9aWiPmraYPSnrHRVvcznZqVhknH6gG86Y4y3M5E83MBLiDDQtGcuu6j7adaTk",
  "key10": "4oHXbRufTSJUDBFL4S3udu4c311XSuRxdKWnxH5xLYd28bvtcNS98SKCom26WNx2kcamJbZEiFGR9S4mNoPnyFkX",
  "key11": "35X8q4gCSkCyeVoQ1EHKt9mSeJVaWUsVf3UquhYDUg3T67fxz4d7oWwUiwhmg1iJv6UC1Ko6eDw85SXJMV7iNViC",
  "key12": "2wwn6rkfktqrmcLvavtN1PhB6ivDxCKeKgHcw2jkWLsbB5WLsNvkvk1BzSv6gEqp69w9wniM2gHx6T11VP29aLvd",
  "key13": "59ffWCPsfpTk7nQzRjwLHsCux46SCC9qsNtbRyJSSve9Md9MhSKis8yFWL1NNSPqrvk7VfC3fy3JoWiSrUrK7tDj",
  "key14": "5yAQaA4RgYaD2Q56FrqdPBM8pKwL95CWscSdyq3PVXyycHmS8szpV7HhNrKi3kjhhwjwMAbWG9MXsuMYgx87crdc",
  "key15": "2b7rQqYGRi1BhgixWPG7LqLdBAHkMmR526bFqBYKCWtmJCkHZPo5m6ubTxJ1WMwxWFYuJhE8d1cqx8npxqjT7tVs",
  "key16": "5CPSCeoxyqWdHKYb8miWEFWmFPFGAeqJkc4YGuo85mHbkzHdVc6XdfDFL4Va7aW15wZzCCKnmXdP7tjLK93dMgjd",
  "key17": "zSQCw1UEZwJYtBWX1R84zon6waLicVXHFie2YsVB5wuvtiEbK41DMry8GQGQUR1bi6CvXznwctFLxVrzsc5mnLM",
  "key18": "3XkB2BYFVXG5uZqDE2sxVsK29Umq7aojxr2pLmhVmwPrMQXviYxffbVhPCYLN9j1716iKFsePXfU5JNKVj1j1vPS",
  "key19": "wAqb6o5aMjSKBb7dxfVRTLbdUWfZe9GtQY8MyzEfGmcwcjmqRJ3XKNzGrVJthmwYoepFNK7S9YLQn8SPJEcEqHZ",
  "key20": "AqDnEpfcfoyeVHyuJ4LoFU2JT7xB9hKP7yYchTXPhKRAiFGPZS9M8zFB8j8uh9AvqRQVtrvNvyPzTgNuUnf7BLy",
  "key21": "3Y78SK52MPYBq8DFgq375SnhhaG43gtfm4JLVxRR6NF5jQNSspr8GU3J5idBMHranj8ADaCgrWDR2oaGR7AZmVXV",
  "key22": "2c8RYxxWNevSJGgReD3QxBKCQdASmd4GUrnJ9X2hKMv7xcfE6SHskFVCmTpvBMSnHqUHxm9y3CRTJJunVnMmTxRe",
  "key23": "5hzMdKKjNa2AK6YNdd6kiZR3wLrpsQo2EjsrMiK5yJWmjJFcJWHfDiQRNaVFh3nSYuLnp8mtK5ddoMTAQgHBqMA2",
  "key24": "4A6fLAvWYUvB7mKYrFXjpDaQ8uQXSjcFc3XPdw53oAyBUfboDgk5VPQVii14KW64tis1Mp66WWhhMiMrwLvwyJME",
  "key25": "282p7x1z92Km78TjYoCbejoRMqovEKXh2ChoNg2JY1dkjzRjvL9YfvEu2xqXrzM8uW4aG1NC4zpe9Z8FgnMneAm1",
  "key26": "5iSfzyffWntoCjqZRTgWovvmqPAjKmdj1AuYsGqipZGETD5PTiEteYRodm7okhSJEDoSxKyF9UMGKFrQQxsMtzYT",
  "key27": "67pdYYkkUQMxhmsje7qTeDj9sp9MQgCSXP5NJ8u9B2cCEz8GsGLyGR19ePBbSWuKnvzhrzodXxQ8mNExFnqCoLTP",
  "key28": "2V2FH45hnEnWZuDTRt7c2GC3pYGqnfCGrgNd2GQk5AiQByL23b4qyqvA5bLxVvEn4BXboNAMCtfsVxg1EwGokunY",
  "key29": "3F14NYXtdhLp7yg7Chuxd5LgaMrpeZaCx2Wo3P18ETVW8xhgA439xRG5A4V3ndABtUrhbyRstBS4stKntkJT8mjH",
  "key30": "3SnEuFeYXVh9xNwxRz5sRh2NjznWFBXXc1Z29SJ7WzCkfkFAjbZ8XnFkrj7DXE3nK6cgWC8gZMw85xfRmjN5utmV",
  "key31": "4LVnrxfYoYqoe6zzT9jFbzHrk7o8Qqh3KMqCoHrVbZozL6piLsr2vapMJjNn6rV8LS4ZEiaPT7YPmZAZWqeMtxyE",
  "key32": "2HdrRJBQdJPppx3dWxJgFyCK4xAtY3LhjshgbDfPXF4onsLg7YJrjEyfUx8xxba4kucgu9gHN796asgovuFGpSLu",
  "key33": "2oJxHArMxnzBVSxwdLWQJG58aatBLA6wkumK7T3f3DpLEVn7Np7q3PJhcqnNaJ8kgAKHhGwnQd9BBxWVwAmhErPM",
  "key34": "5ANWTrWiehffHQ4jtdzaCgos4guvfFsDHwECxBdfxbnZCv5Cc9LATqrasZbP8hDpgVgQiWezwGA9Kcp1ohNmm1DD",
  "key35": "2ahk8muH1eknCexAhDVGq5PiQa8tDhkmi6AZ6oJBciY4g7d7zrYcuVHzJ2mBEjLBGoWd2nwTCesVA7BhzXoiMpcg",
  "key36": "5a2roscvTSqDPMYXvrXBtMQT7hHCPkZiGjANDzSX2k5GA8ny9Qk56hgZiWrA3VTckMWX19rBAtDa54WS69i3vu14",
  "key37": "4UM3YhcpMcM4rwYga1xZfgS5bUV2trhaUJPZa4jQpWLQFecFsS6qLX1tYvHNJhKWdjNiim6sqG2raxquFrFJe1Ae",
  "key38": "5ZjdKnv36Vg6ywhJRvoAm9Q5DAb21uZcKjZXp7F8aFX4wTabvRaHh38SuzdYSzXHNfZdJJY5EsMxVZjFtfhcoq5c",
  "key39": "4YhRrwfKvunmnb8YNUmzCxx7QfpZvrs8d7ooeQxhWmNyviyp54GLCrKTSEL5a1VJTk6os6JGMCyEmcHC1Yas1ztJ",
  "key40": "DtoYPXaBGCryEeDkwLZJ4cWcH6mPcqPWV7sNiJAXQaNeZiBuJNPQ6V6APar3HLbn4tBHLV4K2suUkyGiigyrpDC",
  "key41": "8bRfobMJ4BrKY6eMRyEoocj3EWuCjao5v1ynzJkodh9UtRxwfzZtcCVrqygW135tG2GsTBdEXQ66UQ5FbyGYwny",
  "key42": "47bi1MQZZiFhZtCFDHMRqyPcd6pCPKrRAtxTvG8P2GMuzYmNpH2mtEUFsDVCny5mJoA7QdoRwa58tcHXYb5RCmxf",
  "key43": "BuP68StWRTDGsqkv6ZmSfGJNzNSW7KTX3Zv9fu7zmVqPFXDGBV8HLx1ffAXhkuvPgKdcMEwftN3NSGWqyaJngSM",
  "key44": "2k1ZZycvgNv3sCtpiqB6ueybPvckidwdeyXzZTPvU2KhnXMqTHEM1vaPERxjR8j9n27qQLKvbkgjyBoRn7TE9zF4"
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
