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
    "4g19tJujogLyK2TA5VzpY2zQBkq2scY64uTWNmzD1KBmE2rrg8FXjp3anoHyZfMi36t9rwaKc2nT1MDrbfXioKta"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v2qdTofvjGzeeFVKs6SMr5Xp4Wat58Ny3t8Na3GZwFzEMuxRuKrjSNuBqjYWodNLSSMKEPT717zKELFwPe7xj64",
  "key1": "5bQWpWXYww74EZEYfSY7pYpzeBLf4G3fWCwBXbwASchHoVWqf9LNNbDy5Lsf4HzGmSxdfQorEw119YEMHCMjuP1T",
  "key2": "aMPYUzB3diQX4f93rAVJobMUJYNA7i9enLSS5TVFGMCEpmzY5uj7WUFuLXFmf4WEPbw6zyCSV2S9cnp6V9oL1Dz",
  "key3": "2fExwYWmLWXLJojbsPVygGxjPP8wP3ByZEY9LoCttiQG1i9ExKpcC4E4Qx3yTDE3fbw3xquc9jLLGcGc9kvg7tBZ",
  "key4": "2418kH73tZQHgrwKmLcFJ8FdNeT4KdMjVU1baomLPcd8UJyJdfGqPXnzV3n2tj61aZeh57ZWPXBuLrtKcSsrKmNE",
  "key5": "2m8pGeaRANmM3k6R4hMSHJciMQLHEbCGeZWnbvCtRoWrRTmEtDNvmBVyjrXJBS4B8EY7R4sdP2pEtswjeA4wE98E",
  "key6": "59EQGsqx76jg97tHmsx8gjuz4d1VDxSC5ioooP6aaK7B92r6zk6rygyjkwhyVAcbgGuivpn3EE5iZWH2WNPP81wg",
  "key7": "pggQ7yCfyZFABgtdnzWWY2Lv2rTv8ftbeJqWmzQEcfJe2qjfUg4wpvBoS2AjjgbFYDKcruehrWFvmaWHxxmmrNu",
  "key8": "2i2w8ehnFMQtU6B7UjCMDn4pT4fim7jNnZ9J96QHnm1Ufxco56RiGo64Nmcwoxb8tDCp6K35ETuRevzUzhnzLzNS",
  "key9": "5zmEz5BaZFrrLu7uDEJG1rVat9P3ohMNYPedyL55PyAAboZRngbNzgB9D4zbezL7zGJe1JQUTVbeW8JEtvKs5FkN",
  "key10": "x3NByVmtUyf2TtHQn31hwZ8SncGwM3SfzzRKQz2H53AKyAhFQfBDdn13i7Fz1pDcvNQDnCqkEBcujVbXczMsjyQ",
  "key11": "5WSYNPaVayWx1p855wuEbCZXGAdYXzCgWdzTzvYiSJau89m6moabjszC4uoZZq4BJCfJYhp9Y6J2rMghcMK2omeh",
  "key12": "492QTXWos2sLJMGCXqHhgMp28DeMQe14tTmpNyTJ44iUYMM6bV8HwGbhE5cse61fe3NLx8NPFUG9G9R9v7KobPCB",
  "key13": "No9nmesVokpFnHDS8hP9DU9SiyEimpcQboeeSncDm6ipYxkf8W8UsA2qTxJSBzvmzyTccn9uU9CTY2z1cXAZBvp",
  "key14": "pgTSXCVc1DLcP3J3uT8LekQepHNDapyYuULA3o8hXxcnXfm4nJoywNouTRzDtvQ1sVfwcF8kQcWA27qPYWt54gs",
  "key15": "49nfW2zwRUzkYKBeWo197Df62HmN5U4gWftX1tKnWr9yMcBK8k6snpzshma11jju3WXeWch9uWiuEyixwzrv2YZp",
  "key16": "47PeAj14z4CK4M4UdGqyFpZTdKw34UcH7438EXJ4WJzeM5DrCsKG6PuQJNno46kq9yDz1CiScqAB8SASycqeDhPi",
  "key17": "41Y3x8JsveW71sjAVy5yWQd4h9g6F9MFBCPsdnN3ByiVLXuW9EykjyoENjgRygd3tKeimM2EMqb8QpC449poqmCd",
  "key18": "47MKANqJq59WATZdqSoTA52XJzWXW3y4DQDSDUdzY4ERF6ZJyaQE8Hx3VaRr42UbwwE8ftiCjeduiGTGtPQx7d9j",
  "key19": "5hjkjibHBsGgK2jWUNUki1nKYVKZvkkE86GB6fsBQtaZgWaaGXfsUvh7fBBza81ocrpg99KieesBdUmXXY5aeWxm",
  "key20": "AdX1827F9cWezV4nTfEn6w6R6tshzeUozwPg8mwiWSDGKJ5x61AKtDeCn734ideLQSycaa9jMrZJ8zpjDmLSDJF",
  "key21": "2d8tNiTs3u1TX81yzYAXtmcDJAcczLe9V2hbhDNFSardDnRNAvqELmoZZ9GSdnC854cdP5mpM2fSh1nivW4rv4qP",
  "key22": "3v3ohowbK1Z9MT7Y5eX1Nq8tf7Dh2qS6k2EnkSkS8C5tEDdza1SBhUeL9EDWVQ35ewUtzk7fVqkYEPe9EkyPmp4q",
  "key23": "Pzgbg8fDPwhugpEdu2yAQ2nZrUv1pFhjmHmDzimCixjYQz8Y3hvTpzfks5M3iDTKYF88pqQb6A6nXExaTTYs2Uu",
  "key24": "4wMb2ZCP5xKEwDCp9b9dqTkbGbRYtuwpJQmbyx1AiwpD159cPEeiXS8rWHo33DFFBLPb7osRrRQ16m6mSWhzq4Uv",
  "key25": "4ZfLZ5Ax9wgBJBKWGXPsRjdCtd6qGdc6kKYNxrPo1aeMQ4ihkkbg2vCeEVGFhQtKwU4NMabaGDymcSu9gVPPip2d",
  "key26": "2uDkSDzKcGHcgKzSPsyPk5ugi7TwRoxbTYrpzkNVtwK5AnUG2jYvLMBFxdvSVikQzrg7r8shSy3ShkYXBH64Rf5d",
  "key27": "3neqPqy768TqYgd4hmbPmF6DAw8FbQ4REotrsMHUbWdWJ4SHuyJpsMBaTNcufmvCMEApk2y85exjTcdAnShmC3BS",
  "key28": "3VzD5fD7hBureUFAc1qsg4t9RGKRSEovosP6X4nycHs42R4QZGG2pZKqEXZB7NGHQyMLorEgdBngcoDMijZ8gy9P",
  "key29": "24kHpWdiWzt8xC2WHRvkQ8Erfxs3w7ySAAkvrTCUrdVNoXRXbUfzHaFzG8bkCiZuW95dfRwKj6naj2hmN2QqhM7t",
  "key30": "5tSuvuneyfXmeo4AfuXXVSdtnxNcHY7MwC77MKSo6DGfkVLedhotdjUJHbG6o7rusTQA9ZfoKnZcjBjHfZiRkHf3",
  "key31": "43d1Gc1ZPM3Hm4TU7avGWXYQvtH2Ea6dFYqSFdBy2e44erwee867LMjCoC7hU7ntuUDWMJehZxChnmb1GTLaD5QW",
  "key32": "39mBgH9iy2eENYiQ8va7f3u1Rfm86uFPwncyepM5ZZ1TySVFPgN2zc7fpmW6bSmEMjxwyVeZE255g1F6LqgmBjep",
  "key33": "3gofhruoz47shvYVn83yCzA3eTxYVSGnD8EQzTs4mgDmnDECVhUkmJqVGtEj3Mid5DdWVcTnMPpsJfpQ44sg4ANM",
  "key34": "5MmngF6CMCHvoEfNDPzbHiCbRP4KA2uxRfvKcMZFvbUJvJezxmzELCjgvozqj3wh6Mch64voU5msqVKPVAFGvxXp",
  "key35": "3aaA1sqmVyREN1MqsxqWrgzxxfWzz4gZbBsRRc2n3TUsskDY318fCVSyfGuUYbc7mZdZk6SkV6hhxZ5G9eAsvW1N",
  "key36": "5Wj8kby1u7qetnuiZe8oAzHyXmZk8GPqpZBNwZBYqVx9nLimbsnZ1r7z17t1yGKG5GvLm5dSYa4G9tkTjc5txR5U",
  "key37": "3xexxMcNM6yPuEeSWhqEFfCZWpxVbfZN3iP9dnUDN52qduN87wkC1xhaH7reKto35e2T8nE7RqKYYCmxc1rkGFzj",
  "key38": "3MwTeo1PmZpRpQru2iuwQ5Cy74cbPvESfPB6A2gr8Fq3GYPjMFLbziiREVxYPkRAV2dKJgCDn6QDj3bNxSA8RszT",
  "key39": "tL7Emnt5m5JC8mFDeARd7hAU5G7JBsY3oPk2RR1VgkGrVzyNBe1WPhmSytejTscFCbFB96hDSNEDvWX4psbnZC4",
  "key40": "2yHtNcjVUox7ibn4YzrqWUaXzApfdjZ18MvxXJMQoFTG6Men451j9hgieceoR5RXX8C7SpSSP6qU4Ltf124MXFkW"
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
