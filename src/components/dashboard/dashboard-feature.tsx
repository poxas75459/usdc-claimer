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
    "4iKQ2Vvnw27U3szzKeCnEaMa4nNsFyXkSsvxSL2keNFKSyyakJypudhogDAbo4H1NCiEFT5nQpy945tRsgpoZWtb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4swMETw3pqDGu63aoc8YB1E1PmFpdN2VNPLWt1raND4mi2TQ8ZArA1hpobhQjEWmofbXnDyLiNEc6SbCmq9iSQ9S",
  "key1": "2LvdLskRpAG8ro3wsd8js56Hbp1jAE1YBeg9CpiiPy5i7bMhnsArsBAfbDoAX5XdJP9yxEkb1GRZHy96GygxxhNT",
  "key2": "5ZkbFAGwuF7xSQTNzV9bGS8KKJssJvY8mGWA7cyHMKwHdxMiYpYoxgbUEs4STxuzKfZGC4BCS33WbBTHZqY1qWAd",
  "key3": "n4sd2FmEuDxRUhqQeRK5edT2HhsQnURkjwuJHJwy6TkTnkU5DNm6zGsCKVNMaP6qP2MFUWSREgStjNo3oEkLWnT",
  "key4": "JtzQsmX22sMdfsd4Fr1nxsfjpM6p7kFvEnB4zb5CJHmR6fXuBgqZquK6FK5kaAA9niDzG5WUKjATxNrKkhyfmaB",
  "key5": "5D8yxJLEAbn6tJsAFgG5VnM9rQavyPQWBEHJT7muc11Pbqr2inFi22MA3Cvr76qdbirSoXSdZ7GStAfwtJLvDJWq",
  "key6": "3PNr8pTqEGz3kqNLPiEcK3gPswBKvi2m2SkrkBpp1BYVvcdWTTcVsb6m1MbEa25Nv9GAQyBeh28DcCQdTBfgPQUR",
  "key7": "wNgZ7vUDXZDETDz31fvdJ3WSygUQevMkSZHfER4ZUgK8ozq2YAHGzFBrr5MyMAJGDs4J3oXbzmEMVLhn1hRx1Jz",
  "key8": "2af5UvFbrGMWFKJt9TSHnsiUBTJGRQ4uTtA2eKBs21Yn2wQBV9pTnf1zHc5ssJs9NPrAknpv1ckr7Wn8m87Q5DmH",
  "key9": "2nLkVqWV39ouAYd7zrGAhwcNqwNjbN5QiszXnHLsUkpFrJndGBvVkMS2VDArt1JXWjzEtfGpM9VxRN8W5NGpLjr1",
  "key10": "4GEsWqkNQXrvzmKExwXz8h3442MUKDVogiYaxPTL7287d3jXa1xdRCUgWXVgW1bjQVZKggNnMF8vS3hbC9Z2fPFh",
  "key11": "5ZWC6wG9jfLasXCFJMzxkTzRLa7hcvMvEHiyTrWQz5fxEmwArikzmeiuA4oSkLNmSaPBfE8PZcq83FVf1pSkgRB3",
  "key12": "3vRBy8SR9B4XmkNfecH1XiQ142ftRNh8gkkpCFnaLfXsbwsJkFBJVMVqZNtxsGQ2GF7aj9C8EgTx3UXCD2FT5QXh",
  "key13": "2MYNU8edzvYBFuh5RSMbNLnPtQG5xFZDTNQrGN9KeDZTHMeodY45RZeEaHB6idm1JcNBxwPfCCk8runYKePL3Ccy",
  "key14": "4Pja5ZnZSvTxFMqJyBPjLsum3wDt3BbREU9asWUvoXJdpwSpAfsAMnuEg125yjGTH8mHpTGDhrox5W29JLfz1DHp",
  "key15": "4m8coNbafuvoboQs246FdQWZcucZVfDFZahKaZRytEodKJPNisC4F8hsvxBFevPN3HaS9VycHDJ3jcE6euX4cfgj",
  "key16": "3AGiA2ftjEQNZktapyk1ZWongMQAj8HJHesd9r8FaeaxrPGsucJGYaavd71aJdFoxpBhCTCG5R61B6ZsqZrSDYNT",
  "key17": "588Lcv9Y5ycTav7uCH9JgaDNAUmjwmK4fnHHB89w2K1fymahGVEay9s2FjWxqSZxAZ9N3GbwRuyvuhiNQRi1XfJf",
  "key18": "3brf7rQ147DGiFHuJHAPjPcCz9TpCkBpaCeQnanwK86vHDEVBKvyERLUMv8tt6RYUR87MFm2q9p4orUmaPfqkKJq",
  "key19": "3ABTV4ePkpD9ZPQqoMqnKJ2q4kxcVtDTLA6N9CXYzumq51ei8WwoZgGeJSp8YYk1j4UAPqLitVFm6P8ym3BHhovg",
  "key20": "5w1sFConfGP7Nxr7ye8fqJqCtc24qnjCvL9wPAEZYUX9uMt8XKs2Te84mgaBCmaNYCFo63bn2YfY1BEF3RbKtJNh",
  "key21": "41fQbXqMJF9Lk7xVexvVxdq2Y3QKqhwA9WykhomBJLANYPB7H1AqW8PPJNREM1EbUBQHLPViG5BqzpdKbNZ44Qey",
  "key22": "4cejxRkHRcLQAbZvXTW11AAPU5LJJjBk6C4PxC8V3i8Rao34UQcV2jCEpUbqL7spP1iodSduHBxnHQXCt4aGYYtS",
  "key23": "4myAMiyBtF6tb8XuegrCVvEbE57Qgb3Fz2UiRH82vSuLzHQVHB1voheYXy5FvzpdMbZkwfe9RRRpgi8iM1VKGpSY",
  "key24": "4EGx5Hvr9ZwyyHPjvCnfL2ufJ8gvciGZvaYnUnB7H66DJaw5TQUqZzQyEHi4x8DzHtZscRSmS8KVQVwUDJnxWyJZ",
  "key25": "BWE2odgtcnKpJTdTqJtFNLDkNskiR8fP34XSxAoE3FRMWK78jaEkWhNSgKxnrqMcwma9BLze93egrb4dPbUuaxk",
  "key26": "2BXT1QJMJDm1j7xDy4rzBbg2HcPs7pJafKUgXamAU3sEe4jCoGetFJuNj2hrmDabY4mnCUhwcngvfF8zbKoYTnHg",
  "key27": "2XjfAHS1uWGWH4GuYJBcAZeNTjNLYbaY2L445KC9tPizam2HNYMXTy6J4ioKWb9Pqxf4n1Y1CSqx643uGUAd2KnN",
  "key28": "2dXCRhYxXsD9bjx2m6C8tN196T6Bin1QUeh88wc8JQEgRmD6ttWfWQYmr4KDGiiaU2XQJr6bH4s8QQuGT4JRHbNQ",
  "key29": "2ZhvXcPBdDrEzdEPk3v3goqehz3chi9du8imeG3ym2skAmxenntgsyBUUgmDfyqZgqhRdGLjgarujLyXgRYccB4a",
  "key30": "4vYufrVJdYLfViusTTB4yCDx3vT2vn85NxoJbeUZw6MbdBQ7YnprsuiS1Ced6MTfqp4CxjsrahWNVhCvQvDF3QUE",
  "key31": "3eur433CAJ794fXpDBq2D6ixD1ygAh8joZ38jwvhoUsW5cRGHPXRVVHS8Y6gTp18qEAdpN7DSANDwguhhrhdQod6",
  "key32": "3fT1p5jJtErUBWEe36Fa5BYj9nBz4iCXMH879535jjRe73vetxD8LmT9XrGLFTcmCjRhUpE9Up8N6f7vaeTUqdpg",
  "key33": "4DJifc8ak52ixF26G5fgT1VfptDrWvng3KDXo69NvChDQ5dAGbWQ7j85t7VxofBEJUAbcxqp8WHG7XnhLrfqCtZV",
  "key34": "3RPcCCnAy2JGjoa1BHgcJ8ai7vcydV87SE3g3EE85pBfqz1jPxUqHarRUZjHvR5ftao8hAGgB2qeno7ND9zPsdSo",
  "key35": "49fYLLhp3tVJc6Zfka7TBULRsvRKhx6e9MSo7PfNZNHgWJA62RGtNt1HKDZgNfwAsLVYy54knVxtjdpUhGqwcC1K",
  "key36": "4UZ44zcrQPvsrCXUjMCPyu7Cze8gWsjeD7ihQcyfJSE5qLwrZAJBCLrsykdJQqUqbLbxnJJzoaULjCwxbdAYrZDM",
  "key37": "4Sf5RUvvCPi8xYPFFc336wZokR2U7DzZ7MViZHaaB2UpUqA2uKPdPLJjnLFf9ZUNhUyZq6D4FsQ9FoHHm7mwrE2q"
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
