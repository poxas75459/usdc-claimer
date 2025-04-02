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
    "4B95qUnKdZ2Yqaz1eJpePBLjcz7qCuVzFbDYhemRon28iWQZqbEKB3gkTQKC4jdiTb9f9U5ZH8yUJC42Mbw6uK34"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QKaejZp6kD8YS4UsuxREcFeskAd7ohFhVyUsWHJLsTd9N48VqMyhtqcV48uuLvghKViw13ywEYLAeshH99eMdiE",
  "key1": "2qBi1hDzAd2Q68aENEkNR12JdGsNdJw7g5GPBUBDr3mm4rqyFXB7ZLPSeqTRZb2ELMkztP5XE4927W8ca9rYW4XA",
  "key2": "4FaTqAeLrgtbfNCprgbUyi3m1eT6wRhdHgp7wWRBFKtim5is4QZZn7ZFKPKMWs4Q1hyC1rCLEzyF2JzthmJ1GQHc",
  "key3": "4WBRhS8JtfJjk4AfmFwsZnTshNDbPy2gPTKpXmbCQPPk1Kpf7VdU9ZzzjeG6nsELJNsPnGMk5prqCpZvmTD8yqbb",
  "key4": "2gsQe6N5vSZVt6mAS2SHxPcs91VW1hLxwrH4WF3YEvA8Ts2k18nK8SiSJFVu9eRqP7axkG8dXfvxXx5Qa3FgAfHX",
  "key5": "3YoKzaAzxXNqtzko27s5tgQ8THHpBBtTh2G4AHWFZxKP2wqC3mwCZ8tyjmrCkwsWSNLhxWyVrphvC91Xbi19R7c2",
  "key6": "56mtmcRXVGMn9WdHr5dWzdaCAhfKcAVAK5DgEUfWoosJQJkFhxp2Uqx6YAZEMiJPmWaAm79VEkgX4Zuqs9bR7BGF",
  "key7": "5cnbvrKLk7zhEJ5EMXyUKjcJicuoMiRizoXBNRK2ABnGBpFWdMvimZzwJCME3E9bMgk8smaJJRteesedgxAgLPUm",
  "key8": "33ER7QtJrt6JZvQCfHY6rK87xem1DNW9ExfKuSTKwcQijL5N9jQeCx1cu5vWECXefBegYjz1mEHpphZPuUaG4xWp",
  "key9": "4Pd4tPXhrNktzRcR9Wv3dtB6FDPTTZp3gyzDbsCppM9rFQaJbV7bZzT46npEq5SEqYjkYfZFaMtT3V9QaZh2sTGJ",
  "key10": "7JxtQjxHZit98g3GxHGdzgFhzJk4bjDZu7XJAhbWZqhCVE6E3D6qTA3JEMowWERU2ZPiZSHaHzCRAC1fAd3V47V",
  "key11": "8VXAwhRHeor7FL63CbemBqydBoeBxWUQqEVGyYQiPAxBEWbERcneRudRXUta1ZL4KXzEYvujCSCZbmyUG7VWkxB",
  "key12": "2QeFPjqBJ1rehWm1egAQ8CWeSDd1ht6Vm3HRvAMfQTv3HinTCVS6JqKPP7SK7rxGeTA7LWhjq7oJYuRFKMfizV1P",
  "key13": "4bL11gPZp3VRbhETmrwaYKEK7fpcLEa9EHEhd5W3E1N4vwky1cZBiYf6iGsVDfdXXowEcsv2jMmbPfc4xengUCeZ",
  "key14": "41RSBP3efuAL9dNTExHLaB4bZ4dhqW34qcTf1jotfFSZtavX4fqFtcJT6iAFdBQbe55zHAG74AbEdKcxMiyzWXCB",
  "key15": "p6XPnsPEiN7YfjzYwm7v1C8n5ssxvPu5WfBT9EXmNT8f9L2q37xtELZvdJ8ZB9pEDkmee4HdHXukL9iMqb4HgjX",
  "key16": "2Y3bTgHx7zj9UhaQRQzQdo9uxg5KFF5FXmeWNKM236CfXXu5mawCP5TvKdbu2M6iCk4Xr9ivw5NwkqrgVqXCGsda",
  "key17": "34Cp12U61yApsQJmpYFycFZqxQApTuSsfCnE2KvNKJRpA495qdLwJ7VPYkJRBmoYzDEMFMobVSkHvT9Bvsu8V2Gr",
  "key18": "4Des1hAbixVxJB2qBX5DfPcBWS4dWmFpsj2RFAM32F4UNxAEWG6VbFwoX7cAXjYt3Qhxf5RzBS1tKyZ4yARMW55Z",
  "key19": "5No3PXh53nFDZifZ8YKto139hQKdv682iU7YygJ621vBk5Vn1hqsiXdiZNgh42aJekwNfj14nT49fde13mEacpHS",
  "key20": "5d76AEtDwA4ZtbmxDADky4WejkcHfduEca4c1nvi8keU6UyujEjEPoEQUAvyJYGSjw181TY7NbNbTPT3nS1fU5NQ",
  "key21": "uUgUEZVJiraiaV9fuvmWgoWGYy3KRbsP5zDpg4oHexGvN5S8BXzeiyidi92sBmXCwcu4vcuAUeLtxkykRY7gBze",
  "key22": "4SRcJaA1AK7sn4TJmTKNJho3i7h4g9gh86cNQFW1gwLmu9egNjtbCce9v8PMRnppakNkH354j3deVPEkzPnZy2q8",
  "key23": "2v6wkfyj9Kk5K5pTSayA73q7mzZh6uJHwDoZK2mDgJzwPA92dXq4NW1Xa5sguPbUZrLRZNNJXnRqCD3SZmteecq5",
  "key24": "4o7ft9FDtFQfgx6oomoS2sGTU9xQk753fQqenSf4VZqztJteSptpM25HX3GprfiQ5hkL4pkXmFo1HZhJRnrK3iAW",
  "key25": "3TJLKui28Xo1S289kWSLjsKqJBWot96DA7cec4nMtLQKKvgVhV3XpoLs8asi1g5EYMfYdTosqMupmLwHXUiDDUw7",
  "key26": "5zCL8QuyxLstp8fViZyEpXYCcnP9W8w1mvxpRjMMJEayVpLUhSVYAeHNZr9F79Db3MmFAssx2GcELakm4cURBY3A",
  "key27": "4r3HMJ3Uz4TBtTgo1dYkm9u5xsWpVogkXsQ8eCGw55QtVKf4uFSmPjKh3VF4vZT5fFMQgxGCowSFvHdg13GvVkMX",
  "key28": "5iGMo5v1M1wiEzJDHkRFLxonehBVDRwFsWAYsx3qBtRwAmtAFTpQssVsmSQk36ikCXUqv5DRDV3A9UunGsarQsGC",
  "key29": "Re9k6iXUSUYG3to4y8j23Vg5R9wLkeSfKcwQsm3HKeTQJdRbzQqMDHHLVyRexvzSADX5CbqCXmYKE3fmgoLyZ3p",
  "key30": "5QQdBvaoYLQnrS65Sgp5vD2m6bdLFHju99srTuQFFhYtDweVQWvXJQp8scTPhsCtrEHW2eSJw5TqN7PmGs96Ko4L",
  "key31": "fKrgGFbSDgci24yafXfM6SG67xNCcX5LcR6cDrxtZ293ZVC2Ytunp7dt7iiaSGFS8uMProAjSqzR8jEZvmixH9Z",
  "key32": "4sRUD8DDLSqzzMnHov6xoNbwwiP5DdmQePcadPfPQP7LkbFYaTdqUpFapJ2xkVd5hvYUNurYjhZDwvytMF5MNwz5",
  "key33": "tJCq9xDkTP3GgA1GomdphjupQBqsMkTeBDN8zKH6Ru8QGsQeyKkWqff7guurzcDMV2KFR3b5LcKDgVdk3Znca9F",
  "key34": "ZBycNEYdCRQ9yvLxvWzorjPWM7eNgWCp7FbQ5RR1e5Yyyo88YaeNoZhKvwzfjTaVU6ZqdaJdMasmjrAihBLfNMW",
  "key35": "51CzsqScmJ2VB1YFJwXnCtAwU5qqpdyugkSQXiAWRcAVM4dnpDy46mMsEGiHrLZxe4wcmKuow8DHigHoeqTDKH3V",
  "key36": "VRSnYuDhqahvEE1AgbBDvCz3UqxVE5LxfdPXCuLj2AicyktY7MfUpqjZgWYAhh1VU7YyZ7pBken8SSNzWVS5c5e",
  "key37": "nGRQP31BJGq9tTUCzwDJhvfmxTqqq7fF4rKHdbQ6zqYruSi7K6D5Hzg867uBg1BAemxqNqRv8hitWZZsK2abr7Q",
  "key38": "29BhQHPfBAAjZU6HHX1fQvCT4cFd1m1CcJMYmP6fLjurxqn7CaQrn8A6uuZZEbgQbhEqusqP343D4mnx3VgW9aR2",
  "key39": "CRnshkJfnAHLc3evAqQkJMu6mZ4KtmwAHoZDYLMifHANkxS78npGSAFfwh9ZA82douJP9YL7n9UkWgX2qrSPn6E",
  "key40": "YYQ5WgCnbnAEWZPoFTA1Zi8JatvNb2JfmoLMZK3kZryDfdYERxZFoCDdKGbgZ1xvAFqfE76arp54wms1kTJWLxL",
  "key41": "2qeixBxM1jLdfR2jFRQDjnc8171qr3viKX7EhHR8AggPf5hVn8nGHYnU5JqGSshpCWNm6DQ3djZrBCnzFVUSqMnM",
  "key42": "3itqLrpRSV4icbfyYBF4vYGRHXoaFdptxGF4CneC18aW8BSmFUMvKy3xtq5dg6D87dG22B6RScxMRG1DGmcbf82i",
  "key43": "116RhAvEtKs5pqkhRdr8H4xgvEVHamcaf6ujaviCA6QHtP81NwHSyiy58ZHm7FtYc67fGnX81grFuuM6CimKGjc",
  "key44": "5YFsAZz3jqcTSD5qnNvpr5Uh1rvPZxByAvnm8rrjQdifFaWHZXYXaXuncEYiwJyisTkDfynYWUmBwN11dzwWsSk",
  "key45": "3wBnny9M5GCvqBubbUviqWMhQJNjxUiLxfq8LgxXiUVcoLJPHp5iz9W2fPDCBqxhqfDZd4Fn7f6zFzxWXzyYemgV",
  "key46": "4SDb5dudsADg3rj5jCrBkNhNeT3Ja4e2ZaAg6DnXfF56qNJexjtM4mz98NAvuRbqPLSuS1tsA4qJrhxQfbMFFE9t",
  "key47": "2fYcESoPWdb2iKw7n8FrhwLWjndAQfxm1nykeJ9YF35z8nLMmd8H6uENoAdQrUK9fz2C8a7qWzVAsDUdR2rH1mdY",
  "key48": "wDZNx4HvXZF6gorey8s2tjCLtqSUExirE4aDkmkPgwjL2aZLYMwp9iQHfBt7Cb88K7mYCh7kcPhXCHQWR8A9WB1"
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
