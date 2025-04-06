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
    "3mxZyo73wyfbr5mF9KaWrDtRmuEHRK98vmzXiUveehbwCjfN2AWExHbPDynjoLVg2fSczzxvQrcqdjPMicpeQJbE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KE2Kkc7135ZFKu5BPSE52C5TvJpZz8wZ4zXMfBU9tEf7k7wsxptPR6Q21PzRSV6bMbCAzoZaqSjCnUS1pATyztr",
  "key1": "3DGqFVPttZdQHtXRUVJcYviyAkt3ZtzjVndoBDX342vpSCfDgwFcauFCJzzYF7vy3J9ab6yDbdCPWzT6D7E3r95v",
  "key2": "22XiXRmEvyrpBjR3xxRFCUnVyENLjRbPEQUP8PkNw4ZqaZ5DFGKkfEYn1HxwQEzjRV1bdyyx9KtRwXte9XsgrCjt",
  "key3": "58iMtn1kdqbG8sphezJn3rm9Gs2kfYCA3f5DgaA9AsQ9i46vyXVxUhFmMZF3eJ5akHRWtB1ESpeKGkAPvEm7gJPQ",
  "key4": "43QzaQqz7oH9JHwCDHkDnzQjSZqi1L8nasqamBs4QVF2JLdY1F3DLECLrdSTtr4AY2MgTtgwHgMryWjkqBRQZrbV",
  "key5": "4758rvXJEyPDmjRoz2LvK8MmnFwoMymucCKymLpx7wZTYYU5SrR8kaX5XFV4tV3mmSoz73tx6dPEYJyKKTh9YLsv",
  "key6": "4oesKesLHqG6L7naPLToLK1aK6uvy8NP3pg2A448whftKwGbDkqkj6WxUXkToJmvhgksqJgWJGKjoZS16s92pJFR",
  "key7": "5WbEq5FQUaoQvDy2Hx7QKqHFSm8vSRzPUExYNNLspY6DHcDtDsJ7HhNhLhq8ihN3oBcU8cWK1Z9pKt7tTCmFrnAE",
  "key8": "4erDqom3pzp2TFYXxe6ec8AKjBN8ZDqHLNME4WvkJkwsjpWzeqhuRadFMt5ZNpAFxrryPwxYwotWL1HzWjTJ9Ks",
  "key9": "m7mkoHc4KED8W8YRGoR1Lww8pq118CavhX73pauJ2i94MWHhDw86ze8oHHQeaniSzUqygTHtiCTc7mx8heoFuE9",
  "key10": "3iviBvhSp8TWZ1KCVahRrb9RvdQ8ATGKKe2RRa4XRBoEQSRvGeB2Gy9sbot575YhKRFwUfbX8cSPXYtPTJ1YUciQ",
  "key11": "4ZWVcP4AN9vQsQyLkRiXiAMgEKKcYmMs82J7qxVsALJfsWLNo3fEdjm7t8QRXUGa2WxRibYjSbDtDBootgPYtqsJ",
  "key12": "2XjNTqyJkuYuK9uUhovZt5rcyVfg1VgcUsp7kS1zD4NXbVro8Fiyvqjg2VKu8MM8U97guvNMwxYoKAaxDyZAfHfm",
  "key13": "PFnLzxQfzJCn24iSN9bz9y8hXbciffkH7gFuFm6nkoKyRMgVAYUd94qaTT9SqMHyaskwneFFfQSp3cejrdxHLhR",
  "key14": "5KCVJFNRv9bvQZVTpctR3YmacYYaq7mH5kcjMxwzhacUcDKi9mCY2EZWPtUpR76SU6hjw4VaGA7zVXZs75uERgn8",
  "key15": "2JGD3ZoufaSVT4wpKUbbg98jDgBMpsQ1eXsjR4ZbHztNCt9Bq7uwS9CpyGeaw7Ze99PvSmx1umQtLzWs3o15HkKJ",
  "key16": "51SyrpgTqJxTEG9jws97DHfhbEwYsk5QVa1Y6nkeKupa7qqYqVmKxVPFKahbe1b6iuAUSCYH4KvyMBJnRwvDAySv",
  "key17": "543yYLCDkC2XbrSD1u5Lz2g1XSUqBwwwez78LtnZJsjALEv6LeBqmhnYbJGMDgfZeLSYBFnKWk32n6Lexdvv13Ek",
  "key18": "2yVUYV74k2Udu5zrRvK9ZR5zTGjB1GPaRA4ehe41SGuLrUDdsFYXG5GKFeXqcspHCFr6NxHgXfJyS8oQCESwGBjb",
  "key19": "4ZiKH6ifgGtaNmuEcu8zCmmEtX6BS8RU8263KFVosCvVqPSL5uoBVod3BvbnAzv7GTzvPDF587ZDsRm3zKF7JsiB",
  "key20": "5X3LH8XjNtNkR7sMfXXXP7BVd13w5mNZJoy59LFueV8f2EkEjreF16gB4oZAXg6ayNU9Zbfg9WgE25dLTzm5pS6a",
  "key21": "in4egvpEfuCtTVDCat8Na27r7BZGu6fXeWyGdHPzjXgGMx5bJJoZgsJqg5swHg4RZ2njkM63KDeKtFP3fXRYW4U",
  "key22": "sRJ4a55T4oSFcHAUTwgpFfoe2H2hzfdydqqfuSKp8gZ5TpcxWSSVQkUXvK3eZdRdh5bUEKJXQmqCeqbBccuSjWT",
  "key23": "zU8K4oceZBzLju3C4KWDZkXgL3LwCnNYnm1uUPVavBpjbGb9P9ca2w5bUaZgbvTnKgdFwVgECpT1XvewL8ZuwnS",
  "key24": "3riFGd8pvRcsWgm8tmerkctbHmJZj9TD3wLSFuXWUvGNcbDeMCHWrJTFomyyxCuKiBxE3fnseScQHugY4iJnvYXS",
  "key25": "2fNrZ6yzFLgoGdWhvpqKkz4gaJWfSFUDL6RC9AZuaaz7rnSSq1kV7GhrDV43wc7k2egJNT9m985jxKEcrCExtE4f",
  "key26": "23uui6yi9koHj1oRftBvvBcLUeT31mfQy7UWtrPsu6SKeitchVAKHhgSN8HXSqNKrmFjttmy3K17vkWeJmgNvn4P",
  "key27": "63d9gTwffzuf5XChN9T6uDMhJD9rJkLGf4LGM847VnC93HyAPUrxeqbF8gWLXg7rHbv9mcNSy3np8bTZ8SrsBkUR",
  "key28": "5Knxvn4qCmE8ZnTyepN12cULox93mdSXeMuwjcZo4Ppc28dZPhKF2uqzwQN8YXWQmi2usb9ZkXvxgVrALnEthsKA",
  "key29": "3SnxTtUw8VsdKi4FDave18UaydJiASN9JU7cSebBYXYPmYBoKJkjEDjCLx2CfXpZjJWZbdK3tJ8PubouemvpXcFN",
  "key30": "5CJw7hzi1ZWFLHJvRtwqnmap6rVpGejUioqTPJMRsHkPpeKTk9DK99uwodmezXGvUniZQr2qUDvqr6mUvVMhvCnC",
  "key31": "344dkTLZCnikh3ceu7wp1y8PnB1rWBhALCaUZ9nayvy54kD6kTnVVKY5tSkthj133VDtfgpuRiznihrcrsCbfXeV",
  "key32": "5wnqF7ZV73pzWG9yQXKG3gRyq5trNckmFRGco7zLn6zMTojQwGSukQiveqS8YCtzmuRYqj74eArh4WGGLucipq25",
  "key33": "2KmGYcRZDWgDduz96xFYuTaWZtRjJ4e2Qct7psduxQAkT1LaoDkuMX9EwzfksWFmQCkUbSSUrFeEXShJUa7BMABr",
  "key34": "ArJzY5L2iUf74PMsmySsu6X6H8J9Pa9gWgvBAFbmZs1KfJ4a3rHFXPWfuL5QQ1sNKAv7KcXPwJ8n977NUGvfoYa",
  "key35": "5UpRhwgZr6V6bguLybz5S3zh4dUm3qFSdQqnz3Tv57iRdAGegiEGfT9DSTX1Bzyp2S5hYDVndTfD9PKkNvb9rYNJ",
  "key36": "4L52VnJCoAiGkBbA9LP5nZhpVUAHxKbvqQWJCyhjLAsXCV2Ym6tcFZNerA5FwzQTCGda2jhanSxbxE4GMbMvdiHF",
  "key37": "56Uw8HzYtA8BY5WVDA4FasugGN18xojNi6AvL4wEHWNitgCsvruGCL3my6L4iyHi9yssvn8X8e8TYPyRU2KVcAHQ"
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
