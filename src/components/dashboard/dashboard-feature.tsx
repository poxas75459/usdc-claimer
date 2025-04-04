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
    "2pYYXs1T489uJoN3bw15PemLY4uPKSQo4zR6MecKjtVyWrtpvg5DtBbNzQadcPrXvmyHmUYenFnuD2GmEHZfvBZs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Dx7JCuCawKc9BqNtSBH1ghrCKL9Z7FRTixZ3W42BiAuzSsHrrqxjEEWBVZFbHoYGyppZq2oskLxTMSepsw45MFG",
  "key1": "m4SFjdgDAccE1NSrCzPBhnZCFbNhtLh4hWmb3tTudWuBqhCqE8MwBQVyFnaWAfGeJMeHV9w1F6jPrV3Pj7mTyUL",
  "key2": "38sGPTLRraZqeRnh6i8dUHdrsA4a9HyKFhUWH6McjA2uF3KqsbLZgWeDxRV5VGAT7Jwp6Wu4Y7fESsFgqZV7hH6p",
  "key3": "Dp6q5YN3b9PTze14xzTjXpeoBci8hXiPnGfqir3Xp3NehMzeQgvJVEkHZExqa8YACjZFR1RDCzn4DfCFoVWRMUk",
  "key4": "47U7AnkHAeufY25xCsYUGB8T3zwJctF8Qg7AcLLMqYfJLzKcv1BK9JCpYx9BtASXihjBqEbt75awFjDYirn3Rjht",
  "key5": "jGCGdNk1XJXK8zjnkUbyvXvZLedLTse4kmYVNf6NAdUAxSbzSKkUHFpQbfCcXEzcu19GEYxLJLgnUZNvZKu5HUv",
  "key6": "2QbJGYk2oAz7TPsbJwi79nYkgFzQxvi33utnQJcjmHh5hMibKryUrv6NXHDvv65d1XvDup8mPuAWJvRkK1eHL3Xq",
  "key7": "3GtTp3p3nEFvDwjDT9435RxW8fb3AYEQSDRq9hWuDyfqDurVcm4JKcCdEbDLvZDGdPBd4SPsRcvdZzjtqjfHyeNb",
  "key8": "5tD3AiescEiNLTgrrFGx5UfDyNWTZGvq8CXBwygS7LJexnBejypppxqf9d9wkWNQXCyPr3dDCihA9q8aHz7zPBjV",
  "key9": "2RcAQb566CNYjzywPjzLrTSVa9PeS6inEmpVTUwP4Ku6K35TsEADrZvFb6REEsevKp3ogMpS6QKJcxW6grX2JgJM",
  "key10": "5RXLSbv3bXUepBR5iGzM7Dmjrs7i3684arysMK8A95e4NKq4CuFeJjUi5uVfMR5aqgB2REuTGTUkJXQrUWWnTpUu",
  "key11": "SuTQgBA4JL4zY4Bkn1WbiicjEuwLSJAgDd6zuc1HAAiJfWNXiGMGMf8chXKMSrKkXhBzE2REmBhGuix12YrcjcG",
  "key12": "3y9yyGLHdAqRJed9mF6jecFyTUaeb9dYDjtGgt9A1FwPMtBJUKym1u1UNkQQWnHcuN54GeYb7UGAFGocq315EbSm",
  "key13": "5vYTgunNfnvCidU5Ufp36iGVPq9p2ToMZ5e1eYYSCecjD91W3S53WcisPjSieEyB8nADnuVdc7P42TjMLHydqstN",
  "key14": "3T69Ki7nV6MYo8CmxmmbtbBbM6gq7Fpcizd6JHMLxfZuisMnFuKWFgBXcmAE2w5EzVaSQ6XG2Ns4dAg87n5UA86U",
  "key15": "MGXoezhAU4qeSz9HPKARaVgYkt4NtqwW3MiFupbZo8MqBvSARYR2VJvX7e5etXUTQv6psxJbwSRe6yyvhm8DJZ6",
  "key16": "3k3uvKf8j6x3Z2dbyDWAkthhk86GJVkbwtNSiYpK8ucQsz2njvdw2uu16jLH4Ys5NaqF3GDa7WZHe7o8ZJfdCQWn",
  "key17": "4hM36sGMDoQ3UFZwpoHLFX5PTpJvXvU5yPoqPi27FNoMy8Kd3YwV8tZPDvTUx5a5ijVoFBzoPgw3Zxs8v5YS4fE",
  "key18": "3zUzdKNmXdAZpHdsuxRnNLz4Thp6f1fQ2BYmFHnioszyEHiUCwwkcCHKmqEzDc2TsfyAMFohMo4UxWWJERyC7YTd",
  "key19": "2j4BFsZjXeJC29DuZMrnNzQ7HFNsjRz61ZgyzrjEzRHDkaTQ5FH7EdgtUdRe4LrrSssRwJREmXrD55qJv5gZ97Ah",
  "key20": "BrQtu1vbDkKfSbz6J7Px51u6hFG9ztQmCDG3wPuchy3a7UYDNFtFf7zWW1M7yAwqZvr5wShYbPc8RGkLrGKpQfk",
  "key21": "2fWbf6WGLsjLPSigveetcmYKBQNziWb2KrQui2FLCgHcwNEyXYmRQDAHCGsdeQrq28cPASTwbL2M77hcBxmfyZdc",
  "key22": "4As4Rc5d6Da8sgvspTJBvcnJ6bFzuxKGPAQtBz4RsL5Ho9WT4KmqxmQA1CD6F71tipMT8jfTh8NeLscfzfgicswj",
  "key23": "3C8nQEPLaz9K7WbTxoUYgBgNREFc4dsXN4rU6c7gJz1fcLoQeQ6fb97pVWztnGuydqrFWbkUtEv86GWZq6bchWBH",
  "key24": "2NGego5gCGj7XSsDfT8hgSTZWC1EhN7pycCPXoHoJbHR4EHzvqDBFENxpvoGiJM2GyEJZX876MLyzfYhcfsbtyNs",
  "key25": "uopoFjx7n2JHWADotrjw6F2kiSM1vXUaQcAj4PcF1tHdf9HDTB2nrNETSBF7KjWW1JaZgY9ttm8JBctz6vAoKAL",
  "key26": "wqj5RRYkNjhC8F4H2wmaxKTg6NqZpSQFi3SU48N9jHpmHCJELarBPvYXsg8NtNr9mrFbEK7j8foxygTy96VQ2nP",
  "key27": "3ScUXnFHVpmv3XnmqzAhv1QQRELbuQcXkPy124ouvJBBXtDJPp42joKTtExWyUSvJg6ngfvpeAkqzkQbvariW9bu",
  "key28": "3o64uXoWbBNudRrZ95or5Ss7D3sPvaQ5GRcMdm2nTomDNdvWm9pCgz3EBJzKbkx7VeXFpnKqRcpSxNUkotZgBZvu",
  "key29": "qUjSHUg264NDoa3TurbQXZNJcRj2WbFqaQZersspsDpXEvxhD1riJtokWQKmCfJTuLMHJ1LtEtNdygHB3oPPfYe",
  "key30": "2GcmS9a5jLb6rumn6uWzJLQWs46ti6NtgUXEcuU2XrtYJTxzgA1q6Cb1LTPPk96gYGfmRUJk4y7u5tj5oYezbMu7",
  "key31": "3HwdzQpH2dMaqg3srzKdnvfmLdoCD4T1x4ko3JxcuMjQobnvpNXjmVxkuMcWqWkMEeWcvc1snLEi6V3CdsFFCZnJ",
  "key32": "35JrW3bdVhBzC4JQb6iKQetWfxJcfpA4afAEK4mdGjKjG1sN6QmHCc6dua6Ki6TjB8q5W5o5uhZB9PiqW4jEu61r",
  "key33": "63Ajw4hfpxXrA4qeamqFdPxuyGoAGihD99AwGpMiYFBsUbZHvKgP5co1WDULmhLgWkK98yY8cQs69DYT8B687Qyb",
  "key34": "4E7bNxcYXshA3VDzFm44f8AnomzDbGBLtwjqWXkKz4w4pD7hEs82oAT6vscE9XGFHvYJSUGLCqDGeKDcjGgoUBiS",
  "key35": "4wXxC19tKDUXKnVHRi7inFxvH9PbskS5kKTMSrNzpuFCFtkEMph1Z2G25j9m3j5d9VW73gvdmZeYqrm2oUnm4c4G",
  "key36": "2SeZogarKb9H2zPhDPYMfR8F9GBeNaZF3jxhhQsuxKdt7xCf8Yq31FVpLzpNcc3cS8UFenUoofWLLz7u1A87EqZx",
  "key37": "2DuH2LTPjVMKx94iQWRPiMQE3XUogVNysH6WenFLcPLa4kz56n7GP9sprqu2RNM9j7PvfHEvFCZ5qDVHMb5kxX6x",
  "key38": "5fsYqGXcPXDu56sbxKKmk6a2ZY4tBP3Lt1u1Litk4SAEsULMQrHnFeRB1Jffz2DqKYA2eJGYs15guRDzNzXZDvhB",
  "key39": "3tq1ffwJUZtbFzySoR8e2CGji3LtfoV5Z9wzhGAsegBfm45jX3mGQJbcntzHQQzQbGZvwUtZtTePLY8kC9WmiDMT",
  "key40": "26ANvcaK6qBbgptyD5agmXFqmiEiewum2kSWesvAz9pdbGvJ4DnJPY6oRWb9harKYARC647rHXwghE7a8vB9Vp1z",
  "key41": "4k1giFgBfyNUUpXhHxnC8PA2Arhzn8Cdqrd19LgUvtashG77Jn8Vfk212bTfjHvgUp6g82uCMWv3cXoFRtWav1Gu",
  "key42": "LrKkNTRtSK75r52koy3BNQnZHjAtL4JNeiz6amU7dkuKwutsDSTJBTLTnfx5Hfns2yPGpvVpZcTD7iUPgxHbJ4c",
  "key43": "3ETq4mnBMF44d57Wv72WojzPtVPMFWzDdr3dMesH37YrM2hhkHdw1vnBGAyfAZWbNNTrVzvLT4DGaMNxHV6izpmS",
  "key44": "4vypSo7brdqbZQW2AdF2Kypg1Y3qADCvSqTmqF8N862Tnkn6Upgpm2zBMfqUjhYxXjJhHXmQQJmPUCA1hDxKBE14",
  "key45": "4MvM9bwdrskouCwctJ6gnRgK2caf2Q8i4MDZnR49PUBfLdgvCp6yxTVxexzidBx11kDq6PiS8gavAq1BRunE58Na",
  "key46": "2BhYc7CBzVgyAt2U7Y7YrUb7yhSy8JR3PLrZ6yZJmb8QUyn8vM8bnDBBYVS3pfNoKW7w1H76xttkhLv7aEwTCvBa",
  "key47": "2taB2VDgrEg5XHVccP6UkLZYZVXbqDms1SNp8QLMaH6RmnvR3XdBhzyr8ZxAyAvYirZxSF4mya7kbn2d5RqEHsNG",
  "key48": "5hHJsmtQeUV67aZF2JE5bWHLbjcuCXEwfD3db3KFncamKsAYQQVPbe4ftj44uPmnNJPecJMwFk6A8Fv1RhHEAEJr"
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
