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
    "3dA1mYUB7vf9o69Qxqeuzz4GJJNNyapqVPvqTcUzKWhKv3Tnb6QRES2acSBJpTjaVbKNsUyFcvxqqQxXsYvB1XHc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y6gSGQ3FoxCjtjFg37hczRxYgDUQ7G7VTGbji2HneE4Dsa4KJryx9nEcaGrocUAe5WFhFjxA38J59pMudw7LGcg",
  "key1": "4qiKP17kZokLZkWx1PsFLXVoVZfy2cpFxZjxNDi9MWGLHf9Qydtdkcy6pMG2Xqe1WTB8csthgcwjX7iCBdTFqY6g",
  "key2": "418rGw3hbtbGepc6EFqSVyXkX6j3Veh9EDYnXhhiokuQCWFWUzc7CUo3pwXyCzhVYftgcMmVDEF6aaGgjxJNQLh9",
  "key3": "3psg7ejX8YVzUersnLz7DY93EMcZMhqFa4Cpzo1zbS4mw2CNQqjax4xmizhXu9nzAHPPB2Kog4z9uvRgwRQMcBj5",
  "key4": "4KMsHtNVphuZ8TDG5ZgbwqDQypEmT8kwdUGprwpotAFjMwFhV3tggRHLiboWYkWAzYoXnBpwFinjm6oH15BRhiLE",
  "key5": "s66WodpRy1vuArrMMwbjAHwzXLygoPS6dged37Katqm8oAGumzFSZu1Nxd6Mxxqx25Ktur66LMLPNfWuo1xne9y",
  "key6": "3L2b3786Ft7BpneYQXpmbW37inqympZBfsvKnBSw2xo8j61cmXaHKfW3ZwVGjaDwTYYvsx2jHfRWeFEkRguYdNz6",
  "key7": "5M6hF76xfbRrdCBfM4cN941W1prtqq16mho5DAjAvim7kPtxJARzzxrbDeotUjaZFYbW4eNAfhW4NjebUoUHMDSQ",
  "key8": "2HHacoPF9FFYyzsw2ztMZwefUVf3zFUz2xYuGWXcqmzbWTqXnXFh6FMNQLTExFijqkjGbBwsVg8oUkHrSK3FG2Gu",
  "key9": "4z5bDFpHQKNQHpn3e53PUu7R4a1qzX9wZoWh5GPYgCfwNVWjCZh5fcpRgLusWH1bFvaq2ynRWm1cL3QfVnMj99fk",
  "key10": "tuKvLjFcwzjsoTTUBgyHj1JkA8H91Wu8krdqnQiqFny4YwbETSjcJR8yTJRv3o7JXpNVtEuTFueYpCTd6Be7VXS",
  "key11": "48bFUBiuTHWXWifmgp4EdNx6Nygm5pmPmJ9t9pzobYqWPqkojcM5Eov3Twvm6YjqhedWzt3q2VtcMtyMjDzftSop",
  "key12": "5kh7oCa2KgT8ZDD266F74yATDV9gQZ9QD9dAgykJtmNNE8dp7vDyn8yNF5PGiUneDU53E1yx3v2eqF9pGWjVB3Zz",
  "key13": "3TDtHV6qRmzPn51K5SMuiomdT1VYbRCxMeR87c4or7jYnA5mYD6usyYNyT4yfXQpRJS6DReVJfc5rmhU8gxAGh4j",
  "key14": "559UaUXjHCCWGdENn8SpD4TwXPekqnUHXjgukAvcPuLmsqZNcGdyiWy262KqpHyGsy2TXDdHv3duMhHfGr2dCShZ",
  "key15": "o3KYGVRbZN7b19ZdV22FsUzQDFUFRDGA44hnyHACEhvPTzeeuG29xwwmqXTqudZY27c3hBaBic4JU1iBgUPzRwo",
  "key16": "5ceJDEWxkJVFmWqQjcnWpxedQ49hSRK6GtvBSuPddtrZZkLzQe4sfxy4WvKLKzCQ2nPzzp3whZMBTGAUFYwmoRXy",
  "key17": "4CXR3w3ncFbBN44PABPfLm4XGoh5d7uuWbau5oAazDTBh5FfS3iKT6pKZao3AmK54PPsCKp2mghsvKKz1SEMhwiX",
  "key18": "4FA7QyyhSVhfJvxF67pyLFvn8PbqeFAxNfP9WPUf1RnveL6Xb8AZ3qmD1DYGh9GWAHnYE23xEWsMB2uckTDhfAeS",
  "key19": "ZmtKyXeLSucKzmuTnRWoepeRUDLChuvoybaTq7f8wohkdMeHwJmQQZRLv62JkuD6jW94QVbDegk1ZuWCzri4B9Y",
  "key20": "2JgV4ZCmDHbDVSSMqwN9Nhys1bEZmjNcA3wfsWSYzLFQPJp3B9uWkVEt41gh9iNwLcmMpvthHkRDUedaXTFkmuNx",
  "key21": "61xetZuPpYCV2qtDS6Naqfh2Nnqf1mHPsXQRF4t9yuHP75GeQ31JbtXH4zAmU81YDM1xRRJuHXvfAL8F5ZDN7rMF",
  "key22": "6SLJF54avB3SgqGsZvK7zKUqQkAWdTcW257qW2adX2SsMx97RM7xv1RtZDXS9CQBPRLuSAN4W3hBbt5apTgM24F",
  "key23": "2VpK4qpwq9nrPPyqM13ta477XTehVwPNXr7u16u2poDDY2wX7MEVtSurEmrXyjQfmxpAoi2yNZT1bEubqYQTVbzx",
  "key24": "4KvprVFRd63wu6Zc4Gv3hVobe5UfYzKXsM1do7XFZWTuCW1MGeopMUJqCJAjCCt8ATTpErshx2Fb4Ybo9w4MzNfP",
  "key25": "2wd7jtcoWyLbLZpkWq8XtcLWbGJU8Sw5iwWjbSvrya4FozrA1QEMrh3o7UiUGwE4VTBpNVPUbNi6mVGuFkvc5vbg",
  "key26": "5rfuMK978HxZWQrMPuZe3RPgE7rRNswSKapqHHmSDt9yrJxEADQBpopdeSwgRFMSsHBxuKqXQDEHPs5NzxqQibfB",
  "key27": "3S34jnTPumsAZ5mdvDuizwx5UngJXBzqYbab3hK3Jf6fWXBu6PB8dT3GYkozVxP2gEJJzHit2GzpywiXymm8Ubm6",
  "key28": "2frcauw7subux8fYVvJVfzEghpRaDsgjxrnKxeMBnS3zzQXKM3a8TU58Yf22ThSATqdCUKALWy2W31ZjcWqr72Q6",
  "key29": "3cYv9AEpWkWqEFm9SvhuciVW1UmoMg5W2Ewt4Efe62RLpbLNC1c1YRX4QdPHEhBV4NGmh5scotPNNzWL8AgtxtgE",
  "key30": "492Mo2YsS9NMrHLzPn7SYTh9xegWWjsNDG7pTHXEM3Tv4Eu64jDgBGDeK2ZUVBy8imnW3i2zQH7TEca7tZeYDa4g",
  "key31": "5F9x5FmSaUSdJcv671F3ckoPwECuNh5wbsz8QiHzTwMNiDkjxH621CZuG6JmiQnoLZKDarE5tLiYPmzxpVfewbN6",
  "key32": "5WUyYQjxeGp4VxG8SndiJQf4kHV4B8GnuiDiMKiwHw1c6Yx5pxx1ogntTHNmevm8bfrSVM1KrkXqGkwQaK1xBQCe",
  "key33": "5Q7Mc54ht1bVFdHfHpPKDPd6ZgD7y4c6UwJyS4E2VDyDum9Hz3yR67g38MQWWyGqjxkVNZ4oAaq5Rekwso5zfKBe",
  "key34": "61XJchnJASuW4eHXUad5wiziDDVCfCwwUJRgLtgFTRBUXmEH4ncAchQkopsdCgbX7hPckQmQFAe7f4FWmU18Ysoy",
  "key35": "FP7fne451PWDpk6rDqnuTEhT2XXrwehmYiamHTZnfVgg6F3DXkDsCSojJ3rcYwZd9xFy4kU9xUrm7asdwbRKyWc",
  "key36": "3aQ8Vq2VD65zf1kAb3QMHWz5cLRMwtsp48NtcDwT9jJusZqmiGcGZWasWX4dorzbMTnWG6J3V3FrxzENDrZtmNP1",
  "key37": "BVE4H3vYyZmgiBuGyjahDyDbKAdmy3dnsXXwADKz8Yujh45uQmKYH3i8ZEErsT2v7Ck9Wa64TMuUSoS4qyV5cwN"
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
