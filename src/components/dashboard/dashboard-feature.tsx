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
    "Lsyfcwm8xx2vgNeC8aXgrXueAMncKqxTLPFnWgh1nb23Rn7g7wVTcVDfVQDCwPYs2H1WHx5gERE8p51Cfj761ia"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46Ewxt8LqLZACWoDF9VFbq5LViiSdEbPKUGSMRbZDn2fyEbPPDQ1Z9jizPyGcWXm2FiWKS8gFYij2kBresAodXGn",
  "key1": "LFS6dYM462PRnc5igFDUagdyTTz7E2MJx1rDGn71bPyi8UskokAW7ovcrwCevW2FkevqFTMUkQAn4wej11DvyZX",
  "key2": "3Xua3vzdjN8JFYYT7D9kh7jVV29cJBQ1q68NC98LTK7tKCtqz3S5yWCCckd29dyN7W1tPShyxMhHhAiqnXgEHGz2",
  "key3": "5qgUf5oLx9B28xjzPb4RHxSjhEcM3K5pGNNFx7VMknQS4oySZwDLJ9SkvP5qMzjabftL2TPWFTFd4c7g7mSWx9Hy",
  "key4": "4yUrs9A3MHojgt6ZAWFUYi36Xt62Ec6RTCy4hojUaFAvpZ3mt3JwXMgzKV2tD6Pcs8yTroq3rByVmGERTjhHmFXJ",
  "key5": "3ATywNCz3YX8J5Y4ZqkYPvhkQTkX7KFvP9EvKFhQTFCkwRbWC5JDeJhXKzgBcLbDmTHc7YiRDhMQ5MJFgQQ1ztES",
  "key6": "4dgKqBCh4CcQbuY2UMQYkEcYeFhCvApLrmCg7YBvLpUkekMNeLNm6kEPCA5F78oNYWQyff3mYnXWs7GLhmC5z1UJ",
  "key7": "5NLXgg4RZ2aYCFJ9fXRKHboiRb3ZUrXg4q8PhqFqqpcbpJJugSLCaDpHfZrz4oFUBwHTS2tcEAiJaRgYghWvRWwd",
  "key8": "4d5Bk8eogXJdD6xfJ8rnEbvmiz59fAQynmR3jgQk5FP4B6sR7ftauy4v1fAp8Fdfa3w5wBFMeUdembgvcNvrdtC4",
  "key9": "TEjJ6GgietrMq4eLHyrwvELrhUCUrSeVouwoMBteb8au5xXWnzNXW18z4EXkJiGC7oBfBkXhgVxP7iQVGQYx1bH",
  "key10": "3cBEf2yJdpQBV49uWox5jM7dcYJrae6v4kmafdNLTQ2mRV73KkJGwqFXRtjGYfC7VvwvjNa1Xgn1PYTnh4UkQ641",
  "key11": "3NeD1JJbWnhaGZW7uef8Czeh6VAjuAatwHmmPneTdqJapk8hUi1Ae9xukP3Ha5SXawSxdQTqyk7UKWQt2SQ9KCTD",
  "key12": "2D7HdxWmxdc5mVrAkmNyHLD8vBqrN1SciHp9mdDJ9ZRFpHpW1GQYZ63FR3nEgdGZfKf95FwBH8ctde218tnZTFWc",
  "key13": "4BLqJpzisXxKMmvErAsupaLfM4LKEapN9WMPp7PRj2HTfAqLXL3ymvCLRxB4knXHd1fbSsU9sdyavmmWbgZHaqJt",
  "key14": "2WAT7SvfmweJ4bbBciKbb99QG1rniBzTCMd4danihzYhGCDF6Qv8Wv1jufq2nNQZMQdXD9d1DnZtymb9umVDykbe",
  "key15": "5QpCzFNFNnHyhaHkBJuNsnWZ3wHGMs9nD17FwQeXy1mDqDq6ZxeeaSEbXnfSaRGy4ogW7V5rH2as88vgiqC4fESE",
  "key16": "3YdMrX48E3xVACYHLw2Givr9bYjfdU5ZrqvDTBDhe9NgtE9NkUMms7unwNeekhUnPkxLEMy5LQCWV81SBgJDX4RQ",
  "key17": "5wJHGcAZHsp6UXimVPwMnqbieWgXxDSiLEZnXCcZDv5nKUfWCYJi7ANWuRKXoSKFA3LnTpHe5CFAHgfN9ae2zeVS",
  "key18": "q8A14MXwsWMX8E6xDWqrL6ssRZXaB5XkdU7G8Xo8qGx36BJQgp8s44UGziwAUyyvoNBTNjKPxjp8yjQ3HsbouLW",
  "key19": "5PesMFijc77zF6oV9LwaShNbJMavADnDtk1X3Zq8UF8mwL1iUyxSrod22eCqJPibJAgsJWyGjC8xosbRJkv88ffM",
  "key20": "2fMKjDTDMUSjD6ksYPxqnxiY4MRXNLXW7xTFiF4FzUGNBp7oRQ3owunQsNLN2AFTRuexYex4uY9KUBxCacd4Taa7",
  "key21": "5yJ1AsVxKk5niocHDS4e9jd7t2ip9xc6Xz1vt7ToaN9JKAUPvub3mDsGutm7nNgaRcnmDTfZUgSvBv6SZVDFzfmT",
  "key22": "5i2bwvy7VmoFoCBfhjiyAGPW2huzvnLvdgXU5yHMVqo5yoseARtpzkRaLVvBkHYAqdRb8vFbfxxUY3qaJfYCDT5A",
  "key23": "52bsuWkaJrYZncKSZRcSfhWwZMjkJZUhyzzQZ3iXasxHNKVcQ4eLjijE1v9GSR2LG9JAdn35p6TET8jhnuDJC5sZ",
  "key24": "39s58YKsiSWx2jQDDCsdTb8AzFMeg7ZaSud2Wu6TWGf5gEV5ZWJKbYkyPPzPrRe5tjZB1ejDyybzBCLW9fGm5BVy",
  "key25": "A8o5ENaPNQF5Lq8BVqeV3g2dx6ZQFHkJVKSs65fiCw3mT2xWmRKMdbwj5RQve5BptVJ8AcW5Qf8a8y8GFXiCakp",
  "key26": "3TPqcUa7iSaqQhKadPcKVxR6wvwXAh9GjKdjraXdgWSbWgzMyDkdiHCW4xCgcxAPEpYSSvkJk2g3jQCKMmQBp3sM",
  "key27": "4aHTTkK4eJG7ubmU1ZpnNUuKx9FbqZtQdrbeaWb598ZWEQc2NSxz6ExcWYsed1E6S5c3w4wGtxhMVJwMJAmSsyhM",
  "key28": "4aDVMNnAEw1tQwC4AeUtfCA4gKmqCT8EQgBxzVx6fSzbYfeEX1CGUQCDip9B1GfGvCXGR38rbhKdRXxM25UjQRVJ",
  "key29": "33iU1yPPgurmPuvqXi6XpfXPoHXrBnTbCaZLEguB5YmfBsTFMqgNmzxCWk7RcKQmT44XBrAL391HNwdm8NeMfrW9",
  "key30": "awhky88R2YLHGY9Lk4WXucsw3V7VzuEoYVEB9RwNYdkfD5e3yfjtAAHFt1BVGW3gHPmufnrhtyDqAKvLLuKXkWR",
  "key31": "3Y7LpR19HVgVLtWzNXym6dopZx4quyPZEmXDQhk18MGp5UoXtKL9eEJ2NxNThQs3JiRMaugQxjghGwtWehAm6bwr",
  "key32": "3Wu4bVzHHhXFW2Jd8pSC1TfArQwfWBGYiEJdsn8RPXYXzJvCS4QECewijH7B931wj6qEvnpP5HrEWinuHecs2RFr",
  "key33": "4hXv5NZq3AvscXz1UphjXbb1di3YQWKVjXUbqqih3VckKuZa39gE2irVsjJGqU4vSGRgiWrAvab9Zbh4XXCwGXGB",
  "key34": "3a8vB8o14dhDkXsWokqzWwUYtsuq4joRy8tfhgAio1hLKxrQkih9rXoapN1ebyQ3hFw7gb97jhZdwc8ywjkbs98N",
  "key35": "5bg6perTQABrFzzPhRvK7JfEd182TYmgKHDvvCMviRM8sy7n6udkMNcSvnj1dBqMQQqB2NGFzjAKqa2UCGPoWEy9",
  "key36": "3c2u5hoG6FPArjpumQTrffFTAEKebRx8mShefNhQxxtz3jmzhUzQbsE8a6E7jQyYaqxHeGVdYwTkpPzr1o1HayRt",
  "key37": "2trz4dfEgYbRexQtmVwgetFkL7tZM22fpVHXisPNrsbYS2oBo4UFvqgzMsr9uPk17Ks1J2bmwENmjyVCEYsro7QZ",
  "key38": "3a4yHz6BALw7w7ZAaX6NYhb7ihhcjo4Tenjx1HwnFmBEgRgGgTgyTPcWTihL6it6G3twcixkZibdQS8CcTYMaavN",
  "key39": "5k6YSMbwgvWkWjsP8g72Pjam8ecPAAE8YQvr2Hk9qoWiRUvwCZ2vCQ2Yfwe25s4BCjRE3cJrPPxM5fAwNXkrg423"
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
