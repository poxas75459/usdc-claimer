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
    "5tbcbFyyrzc24z1513W7oRPCSfcnZ1372oJp2gD8FcZTfU4GtrzJKVUFstUq4x7M5UFZfLf2pv5utPwqqPhRvmvQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25CVGAYnhnEodQedk35KCrdvKzK7vFvHuG6QFtH5NpmnSMokGAmJGg3yrwfFc1qZhvwyr14XrrGbXq4iPnr3gGnV",
  "key1": "dbUyMtm9XJzSxEjRiBrowSj1PSiX4AWDJMzpKqweBAh8ctjVJ9ZqqhnXe66FQdALhvPtJyYbF4s8mMg3qWctyGG",
  "key2": "tc8yCGfvRSuAL4fTZ39hE96Q88PGqpciLig6koDgb7AAXbV66TVV5faQMBh1Xk87HUTuCf9nD5BmvVPR7vzGY78",
  "key3": "9eYMJtD3vrYPuhdQ3v1ajBAQyYA8xWzMhuwJMhBCWCrAEz91TzfQuVdPwzLmSVPVW1aU7hEkdrqUaKAyDFNTvoN",
  "key4": "2vGR7AUVwE94CXrxRemrraqUHskvWumVibo5CcbZe1nRXhsT8Pdg9YqX4fEPuDMNostTsbtxM3Zy7ifWRueyQj1b",
  "key5": "2fE4ekcmpNUup8ot5FcwTdMorVDHZnQDw4T4erJQtspEXN8xuseCKW7NP3iTAcVHCrPPzcNzKMb1ZG4ous9Z82Wy",
  "key6": "51wLk9jmkPfKnYtvSy8dhRTcu53eJBQrufyTfZaC4CqSzpUCMrokq8VN85xWoZJwjxrX8E1G3ByMJryaDrRk9ENn",
  "key7": "2ihvv3FXQvRQPbugFt5QPBTN4F1DYw94TbXZBjuEEA7JXNfGHWer3y6dMwrWB9PgpfVKDKPEvSFuhwdF446cJgon",
  "key8": "2mxaQtS2Dao3ihNMBkgK8QZMtvoCeyBYxZcNNobtfZKs9rcXZrPMKgdfH42PTaLe8mjZZ3yjVpvxSRHQKAYcJxo4",
  "key9": "GrZTT9mBZNMyVs33nN1TcLTBK8QJ5ZRxA4fzv365EkV4SBpUqtPm1SycSSZrJvAqeo77fqhzWKdiatJQfo83q33",
  "key10": "2YiNp1cYsf4V7cyJP8gwPANV9hNnJirhNBkH53gK1TR6v6QTcJHcfEPvPqFrTP493aW4mfJRPNctTDp3FSpgHmir",
  "key11": "2L9NSpqymWKVt1CB5dDgRsYSGj2VdZY6TF4kUDz7kAkUKb9XJnCXzJRc2fLHxTbNiMFKQKmE6ULcKRwGBihd256W",
  "key12": "5CxGbEmeD14LBz5pzZaMrpxQwiWbqWeW7gjzhzgAbaHgwn2LDLTZoB6krEDVrKfDQ18eEaPk6ZmQa6a6mFq5xFpz",
  "key13": "26nGKfR7X2cJyiDuactg2fyPSryj3tD2o6uxtbqL4xKYefjim5XjG9LvmdqsHYVdu446L9mBRo4SkGJw47vpGtb4",
  "key14": "62XkptXSQE85wVC3rn2Ccg3jUfzKvMg869r6UTrembmKXPnKenzMH2scfM1eLkLLKGap4DyXbyMzmuA4NPXgq1uB",
  "key15": "3m6K2p8qcZJoq1BRTFV4tbUy8XdkMGTWuJoCz5FV8csg1YTiDfpyKizR3EYMcybZNy7kYJxw8qdgDQ1kKeBLsHAo",
  "key16": "2iSyG8tscVjieyzeVdMsgvnLBt93N11Advam8sKnzybHYyn1tNLAmHCWkSWbk7zdvdtZkMT3RqQMD7zWhjb63zyn",
  "key17": "4gnohZUg17jfa38xy3ySEvLs43bBX8HmbJrCJ8hhmcdjfFXuVxUst5A9aGuF5hcttVRVs68QZVpmVt8RoHQD36yn",
  "key18": "2zwnuDZdQdL4DVX9K3WDCPWHkaq5Hx9uqZwEs5wPRyQefxV3RHh47fu3msnnBu6o5X1P9Mx3oohGMp7xh37D5Hcq",
  "key19": "3yB8t2wp4tfcthPSD9ScycbRsNHUnjG9EZnB4n23urowEXSk4Tdp5ktQPD3Qg71rjBmroboTZnYdmVZCvHo1KXCr",
  "key20": "CiELRbW7J82A31hMMvM2ETMkfzCYYFStdssctxZfPEuirayqeDgr8guoEs4WMZL5PuDJd3oCdYrFBAQqYW9pv5n",
  "key21": "5KWFk9rreQ65fepB3XfmDkE4T8xgaxVse57jkq8Ng8SFrm374hffnbtqPhAS9nCutiWo9twW2tUkw5UmkYHJJkgq",
  "key22": "AuVWGhyUX41NnkHa84ePu4yuRCn7AFoVAAi72ZoSVEfjSd35GiKtBhToCKY3GioMbXhk7r8dLsxtcU9ehiAvR3z",
  "key23": "ehjfck6SmGEzVygbRa71qzXfqpAqRQzjE43T6Gon582SvniL5xRHLDvfnk1tH2WFWberZY1k4szQRuLvVomGNa8",
  "key24": "KgRt82hkfEckXPLMgsGj3Ga8pVaMdEvKJQFTqEkktUWGsJ4jHJdrCMkHyrm2stgxKcSjo2JDCgBzFSVdc4RNyK8",
  "key25": "5zCHm1SXcJWvYNNT2bBW7FtLXcsNjT83Ak2sgzn165FfSceWXFyoLD824VhKLqU7v5rayPCvHh6FCP8wm89hBS4J",
  "key26": "aDjyncXAK75u7ivTaWUpXryXcVNYrGaQKq5hi72KbCH6kr5CuS5UNbgk3AaQMawkrSgfNJDdkgNFM4CkTRGJWWM",
  "key27": "4xaiEiZwBtiuEFsoXQMqtBKMTUE4p53ep2bZGwDtkQVMe5LPEE6syvZFyMFVaJZWcn5ZDiKQkd3CRMWo89RiJjHq",
  "key28": "4aTwKAKPkeUjF1mAAehXxJSKt7mcnEFcHWo6J43ADyJp4er2MkDG51UXJcXS36eRHdMDkqfJBZrmCYvb19NRDrwo",
  "key29": "2c5H664S6p8X7jhomQV8xF4ZPBTtjnmLRceCpXACRKkLNnABTXmL3oK6DM9R1T2bxEHXmxessV5k42rVRwWaktRA",
  "key30": "67kNAoowu5rz9ZgpLPCKpvXFhgR98Ych6dGwaEYVwby4UooX9ZnyaEjE9XTpBjM5ktoUVJXiHzKb2wKkiBwtEf5r",
  "key31": "3XReeQLL9acJGuWDmJSdECk6mmyiYo3h9BADJjb1C7YgCkbmgS4hXGLcruCT4GqwfM38gu4wBQfGYsJz6axJmmGa",
  "key32": "3UUyeyFDtDx3AySAdw2qjpF3Mox2ieYaUhwpvQDpbbBP5tzyXcoXRENRm6qqc5Uizn7ejGZinGWU6RAhmYix3or2",
  "key33": "4EsUwhwKzqVuksytn4f1EuB9rGR9PGtbGiAgZMWcyB8o81fNVjDJwUn65LFcu3gj925Tj5KYXYszqzbAH4WDfdye",
  "key34": "5neZnX8K5oyM5n31ohHbZcBkkXfZUojPubirK7NzwJi6csrqqCFrUSNhXRCtzb6zgZWGg6N7vTLu1UEqCA2g3A8g",
  "key35": "oSXBNS2HrfMCwY3jppAktWQPJi5yxVykicWT2Z5qnL5tqMav7FQPBAkHh6XEExdhEHqinQohYGuu3A2e8CjLMwf",
  "key36": "2ypJGZHZR7SJuZJR4d3H2GbGcyjTm9gANpJo6Ww9CSgDSo8iZ37sUsG1AJVnnTjAdR6tLxzK23S6P3e3u43XyZjd",
  "key37": "1zrwy7vxBbbQS3TVqoZWTWKMXdCdL1UDrxTNdu597bzSXpcWG4qtDEVTuNFByTLzYCUkTavuNmTdLaRSYE8oinz",
  "key38": "4BDhWtmQ25dDWfy7SY6rSQTRVqJGqXWtbhgLX3mYeHLhDfFvEHvtpoqf3wE7YP4mYjE63ZGAP6gscStSxo7wRka9",
  "key39": "2hMZtywLWaLFpXr1hb21NwSkjuhq7zowp6pYyX2431yjgkpxuJ7GqbgNCCtuqPhtP1i5UfeKgKisQEEmbPrH1xSR"
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
