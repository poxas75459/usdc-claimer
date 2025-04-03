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
    "pZuMsxfjMLJUyV1RsoDFRBAduSU4yTsXAqNe8WaveEtti2DDyaphwedmGbpRKgbQVRVeTP6cpCE91qZnnc75hRD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fxiXF6DqNRfZVXt7URT1b52ccsd9U6uxF33o9SmGFe5hFGfP8ogDX4f7Aev4j8veQEhD2u3Y7u11KgLjiq9SPgc",
  "key1": "3oNq2RvYoLYquDz5Ms6iFVGArvwnnHpgKz19tVyrf6JoNnVV8TmdubF7oPVQVztM5mFXrWoPXhjFtNDnzuzaj5fu",
  "key2": "4BFfjWX9rmqC393NH2DKkQPEKDcoxx35GwpKvtTPBCJT1BZPhX4XWTpmNZtKqhVTkkGDnJokbVjBcKfQ1YPLHyp2",
  "key3": "3pDXYHmE9E7BNPmaQT33HnYFBWXGFQq5S8YawmhkmovxiBZWrg3CZddKxyGoikKbd94rKHdVnJ1jsyj4gEenN8uu",
  "key4": "3d4wm38vxKLwSDG3EigaVmDbE4uP8SHYcBsA4xoSF1Zen3hwKed39yv4SZ14an64QUe3AMRCPW6DkV8L1SMPuGXH",
  "key5": "4RcbCtRCvRdYYKi6QpLWwJkWYmZ1P9jwbdjngQXzGvMhD422rBaqT6hMJvLbmtyyF4KKzwgdqc1bC9Nhm6XD3U4z",
  "key6": "3vFiePNENH24HRTnrug9NW3gnZDTzpJ57nD5MJ7SSFVJ1Z2A1DyA4UpFBNAx3kXHxNMuReXkwKk2aoF9NiAiFi9r",
  "key7": "51Nb3yx8dDaX6VHa5inGsDF1LnPSgPhxRK7pQBzZp9w7JVyhovWeQCAuUt6QVtwKff4o6FdCy3sftj5W2woeohxy",
  "key8": "3UeWB1ziCfBATcATMXFTXG8B7RGojKtZepThiWoeGy8EubJdpHiouCuiFUTfHK9Hxqtgd1xZkHwmjH2qYixyQwBR",
  "key9": "5Y2DTJ3e5okfKXBBhPQmwDNXgQvNHc9812DXELRbnU3SfxsgPEtpfdWy4bmJnxyo6APBGpkvgY8U2UQr8ZYMj16A",
  "key10": "2pRxnXbTiBJ7gWcmsF2SVXDQkrZauYfH1pnYjSL7yf6MdCmbkSaqyMsBkB1nFBEG2BeSy4FHJD7ggxjiRGq6Yb6G",
  "key11": "4vCUgWM12wDYVeL62x2cHNBuz6MSR2zt71GYFLo9CBDCNZDumnLY1JNdGFW6mYfA2c3QDK1ecKndDjXNoPZeENUE",
  "key12": "4NxYS1mTiEjQfaeQJzCBfR6VvJ3vVs3UWfuM3djBWXmavfDyaJiRztAQXH1i3L4kWgkJZ77weimqwabju6MUtTgG",
  "key13": "5uQMCozqLprjJn4cTfJorKxqLbKDCJHqFCCWyFci8ZbnrvRs5QA41uvUgMrKbdpm7Dr97Bovomg41CuLk4cqeVtE",
  "key14": "2wYc5V69yreEoDLGg8WcAJjKuBHseYhk7QdmYt2EdHr1QLr1riJ5hVGeJBb6ejbB8EZYfF7tLt9vea6GJAJmD6tU",
  "key15": "5iykziECwFVT3qLMAQys4reAqMvY6iTCxUFnCGoD7YnPGsoQBd4rmY2rd5VLmb9fcUbBMvSGPakzaj6BmK8v3nW8",
  "key16": "qthL6FWfrdfa5G54jBZHYTSbrzUU7s2AatT114uKbA2UaDvxKPPYgh8kTTE8WaR1kByThiyt4YnAKWeE4kKZo3w",
  "key17": "52q2haV3jFh7xUJ7j7vBXy4adwZGqR8CiJqVhH8Tj7Lq8RRaVf8kuHfF4gA3gw3ZWpwZcys7jz9tZ9ps6vM6Ds3P",
  "key18": "5FsNp1RNRZtYP1c7C2HggBenrcyRxfVXSE7jK9gCJjAD3au5m5NNoif3wVGxEEZ5WodxDZ8yWFyfuUqkAqGLLQtp",
  "key19": "3hMeuSsmU4P21wSW43M7CMF8v1AZ7Y7PtVzdyrN9E1SEtDF3czaynsG6eiLHPH5xp8HNS2YgosDTM76FRJeSWRjM",
  "key20": "4xXX8jzyncq7efvbknvVTXahza9YBQrAiHWeKftGPryQb7NKarsBD9nwhPNJpgjupp8g6xoDRHuS5uEtDX3VzxvX",
  "key21": "cPWcyLTzPtPT5LRijTK2ndvVLq8fL1gcGJYwE66tCccp7ysEYb2StbLRtjCvC33bDJG5aU2DtvoRfxnAEA33f6D",
  "key22": "3Zzbi4aqPcw9pNbRHRbXcuG5FeMFBh7kSE6V1eV8qJcPE3KzzwR8Te7g8n1jbhu6vZ29sYHD1gPdb4NX2oCY1Pom",
  "key23": "JRHuGTpyqNX2zGExDsDzeVU7Ekxg8hxBJZsuLXHWDGW3Q5QMyVjwXfnQDSRsTj9Yf5PT6gPsPrCehEsa4SCN8oc",
  "key24": "27oG3GZ2u4GdJakXrRx7YVVD1yEiiYxU5NY3R225ysrC6Zvn5nprs1BpNVvs8v1awJQ38ekgdrdZgcj3Yvr2BYUP",
  "key25": "4UhVL5fx9qFUaNKJJJZ9sRTAKj8rBdCPMVJy5ufqcC4NVBMuEK299XVDdCfYLBkg6JsEyg52zdQ3S1bCRRDLVGTb",
  "key26": "3kbYzcgrcmDGRa1ARwH3SfuhgH4L1rxj5u2wY7tmtH2NpZhGWTrNhkEjUNgSZ1xXRdnsXW8oXJPRb1bAWdVhtgUa",
  "key27": "kqxb743WuLBMNAMs3ifxWp5HgrZSjivP7z8WzapWKhiS4CF4oaGcnC4g4WcbE96GnEAPk3ewsc3hQWZaXgrp2Ks",
  "key28": "XvQkqBgMcG8egtWmqz2eN3HoyCw9noRwjv1ZCF8JUyt2pNnvdubrksdXkNjp6tjTHKUUVg7xMy4ch1EjaKmLVQN",
  "key29": "5bV5AgcE7X4GrPZhm3Y1ShY19xXV7sC9JHkxDWKKRZjgNqvfpwoNVb71VzMMAxHhCoDEbBWaBxtv73NjBBY5oMVD"
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
