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
    "2WgA9riicFrtr7saLvZSePRgXAb6ZZkNiJNthAE4YADeQftoiDbxfEsxmo5UZ3GbX3mBUhgxTMpSKwYjdtJcw969"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EJxxNpxq4YRQhijbix4LvRSbDnCyBU3eeeLKFWSLRqJAeGVR7vVSoYpGB2mHjriQSESAP91JucXEfkLx1WTbZrm",
  "key1": "4anp4mXb3RCjVRijt86LvKBN2YMkZPyvpVmjd3JJ5gT3xrDSZtgwES9871CjkFaKWBWVF4BMUCB1mpT61T9WVjmp",
  "key2": "5h2wXWK6rCDJ5ayqNppVap8z8brCaqkRU8rKLBSKn9Cth5HxCwTk27P9fjmmtDfJwFWNVjZ6syNXivphsEvTGxui",
  "key3": "5n7sz5oJNyLkZSgtCDi6n6WA2o5wgD7rMuyAN5VEBSWDh9dJk22idykUPv2vjA1uDoJ9tAPMiynz58vAmhdDiU2b",
  "key4": "2rD3YrZe7ogzkn66US8KSFcsqhuKxR4vmKR1di8znuTh8vewXqomuPgFEDTcqSezkmpaB8A1hriCqoxeWFeirzk1",
  "key5": "4V1dbCjsDFAJ2wZdoSahkhdWCjqFVXF9fUe8D5oABUZgxpCrDs1S2XVxt8vxkXc9eypsyrMafbwJqMR33PQ6ewNp",
  "key6": "58t9WGjFJtSBjqRvxW1TtQphjjonD3DhbijjoNndfGf7FVZREL8KFgiBFKLwHaGVVekn4nVaw4zEf7MMGzMNgDRb",
  "key7": "5AU2hFxGVqeN2rMxrfn9GNLNBwDkYTtCPVAn4kg5DBHHtRm727xW6h6pKDAtgTBUdxTKUoxbcivqW3LDg9YdDgQe",
  "key8": "pz1h58UuwsgSRGvqSQTVexC61APpQ6nziibMHbZqufHxkyPMKQ79va4XyA8JeedsHdSBHEVSfGnVNK9DZ2Ar37Q",
  "key9": "Fg9uQLPiimP4pivHiP1XKeDSBHebx9G3iqMzJWgXkNGZpbnGzp1SmVTRz2y7Y3GbMbcE261kY2YZr4ys7ev1eYD",
  "key10": "QKxwr2gMDDs61pNzy8zdpDMV9XEJF3uvV9s3DJMPtEBFGPmfVwkRQASWRJNBy7uoEY9nUP5pFuJmsB5LUZTXcjj",
  "key11": "5DHvm2LXj85vn3Z59rkLvB2YDWvSu8NxmhWj9gDvmSyeK7AK8P9qks266RCXafoQ81jK9UakCfXxT6JfBWqLdKBW",
  "key12": "5dbu3vbpCEpyyhJ5kXJb53EhRB6CW9Mw64KD5BNMRVkrVFdzNrmpj63FxopFgrAy1aV8KjTrpY54XU8rkqR3Wxn2",
  "key13": "2chFEqKbZHZDFi5e969KX2aN4HcThdKNc7n34G3ciByZD1LutbCk1F1xQZD4i6hwhKi4P6zNZcdAEf3xsvyaYj6w",
  "key14": "4TYZ3wKmHwAvV3H6H74r4SawhTfPGy3koPpcJBqnpXXyoqvYBbRHPjHpA6rTP9esEBsaWzxHWz4Tgh9SgkkHMFVb",
  "key15": "2t5RdRH71GyovHBAP7uVRUDJoWfiBMkimgqfuFAUuNm3udzfN9Y8C8z1SLEhEAQR5oNKxFtX5WxjpkvAsvDCjMd",
  "key16": "5rGaQpVf9ARCEhcLZpHqYT2rJkaBxwy4P3JHNTJ6z2w3LwGRAHjvgppcFYp1Lb5qeMtV7m2G7xXmq1uxCuqh41M5",
  "key17": "35GtjCcdiYiz3UM7gyNn8RcjMhDQTS9zWUsMd933dE4LpuwaEV3xqaARjGzc11tsihjgHyVm4eHThprnkvPHKVKL",
  "key18": "2W9ZebX1EG7wF6UuZzAjMQsECrTjeEKzZsxfx8svLjKdk5zvU1REdvSNc9jpPRNMwkW29faXaww14zonLe5J2vLp",
  "key19": "2JvztNv1fryMUDFvt1hYeQFGATPKFHBpP7z6Q2vW9SKFezKg6xp49uKBJ3hwqmDcF6AM7mGCfszBmg2TLpThAEuH",
  "key20": "2XSMW65sip1YXq8C872T3bEK6JQejaRso9xpFAWz4g7yy8SR14ZJXksm5W9s1sFw8WyqWL8uvU8ErYMD5ZHWnrGp",
  "key21": "2CPz5ijgSweBhMvmpfuwAf5TYaUTiF7NJQkUxLFTdzv12J4WAv9KeWkS6Nf3c5MqFLhFxMHHABqRS2J9e33NuQyQ",
  "key22": "1P4H4D5c8BskcvR9yeVWcCiPWYyaRUaxoJhegDTj5bgNKWy5HrKKbud6Kbn17FSyFbTypVn8VADZLndiik9Xsvc",
  "key23": "4vafQyt5ueeSUji5Sb5btKKkymRU1xi3t1wxwAo2RLGhd2FnEYMNtQWPyzcreoZaHY5Bk3c3cgGeREDcXn9qbVcJ",
  "key24": "28GD7JEBDxTVxeMy5GQquvbzNpsTzhqmkS2SFkcWWBnSAVmySXuJBB1XEgygqixTK5Jx2Q3uHqVnXr1q2Y6oz1EP",
  "key25": "3bMhPUnaJ1EQqJr6tXK1mH1ab3gDXvhMaPMJ2hBkWa2jJAqcZKv4J91Bpua75QXonRsu5BhUNPzoGKkSr1YULVNA",
  "key26": "3RsBBPAG1GUXXA4GmPQ4AhVA1vYF3NZqAxTATAZ177Bn2uwg3hhhJDdtvqvpj35vu26NxXUeSZEBq2zVpFBkWR8H",
  "key27": "2KVPoq67wxPP2xgYtfnBU9shn2vKF94Hp5gaPL2uB3nf5QW2C7tcdVBQR9QAgFhG2vVzqC3doKHqkcDdmHmnq6Pe",
  "key28": "47w1TFBYQWPg7bbo8VLf31gfV5hJc94Ghpuht7hgv61EJaZEnZZn9Sku4Zp4bcmzb36Se97pUA2RnNCWS2UXX5Pu",
  "key29": "HVfayvDNEjtfwyDAeYeJ7siZv2QYW75uG2oUzkxNmp2q2XK4Z6zye57bKsqCuNvJPKAd1BL7jve1CVsxmrY6AL4",
  "key30": "5BeTpRcdVTE13EasuCHPNp5GTGAgbEovLXiLuimEJheWDMUJPfa9zwqrjP4vdg6Ud73gjszptrYxya88M3zLZPwx",
  "key31": "2QccpQadsecFSY2CyBVfmJSN4CLAne5DkQgMW9eQA22Ukx6QpQaXJyQiXvKDr9sQTMGDuYRYd1p83FCi8Zs9Je8P",
  "key32": "3jnF3jn5P4zP2E2x5j4FSxT6uuw99zmgoTDYHnMRTrFHxRDtNqy6xJXE877ucRpdZ4hwRF9M7JkSkLf1Vpepy14C",
  "key33": "4ozFzK3qrT5AY7hHniNVbqL5Jb1jm8syFBkxcLynCm19e1cXn9nbPZheuEz3kbCossfVuVae4wECES5JZvEcYnQH",
  "key34": "3jv8Ae98RhfxVEoxMvqdAuBJ7Kp2M79gdsCou7qudp9PxXDzsMtHC4wLrGMXYJ5fJfrCbBgyCfjpB7LgoHR8NCP7",
  "key35": "4imXqNkVhJqf9k7br3kaEsuzebiwMaa7VmXorH293FV1JJNpjuk8prufeqmP1mLZKyARiYocVQ8aLPfGymw4rLoi",
  "key36": "2S4iLrseFhXd1LUFWfdA67GLsPdK9YYrVtq3ssjkCEQjpqH5cQKnE4yyZCWsry4SYNVJzmTQeJM51CxM1sABVFmr",
  "key37": "5q535WnrF8MYfT49ejkESPwRgQZf2kTWqfZ9oKM1ev4CA8n7v9MyVrtwKZUNkGziqje4aRUuVDNAeqQDEK2kXv9U",
  "key38": "4gsrZsq1KL4Uq3ASyWnaucxfzBfRTguuun4WytsR7bxRKDefxvssntEmd8mGnin2fnBBN3EtL6G2DWwGXBT5bPjb",
  "key39": "4youvBc8ZPrUrjsiuTSDsdbgcPDgDuuvPcaCtDsuRZoNQsFKMW2Rvoh1TqYFfvKJmYyizshb9g8rPCZivUEoBYWY",
  "key40": "wVUgZ3AG9zF3ahp4gyhhBo8uLdzvCGkEYKpmKzc7yXQGFp4JzRpSPHt7F7BCRkNtTuREP26WzMd1PsqzcF8JTgH"
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
