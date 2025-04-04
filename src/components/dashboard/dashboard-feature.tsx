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
    "3jXeFvKB9bT3njUMfwpdBiRZStsyWD1viWAgqtc4hbLfTkSJXgRdjJGArLxaa8DPTaHig8cD7ZmoKtjqNCRrecxB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QrkkTwLCzqbohjwWzu3JZmgM4pTUG9ihfHiTNWRMcEiHgSHuWo4hy6LPgNtQFuDXcHt66hne1Ks5fgvniE6s2B6",
  "key1": "4hLhgnM3E92po4GsTV359boWzNdaNhFAxNFX5sdGYrCuN9z6sCzH3nCpUoitnLX1tZFaLWH8BszkgJFjYgPYDkZH",
  "key2": "2UYUPH2zjdPLvZshEtAo14pSFeF8zsuGyhH3qAdcsqegkJSZd11fAbjK1w8QnceMWpiw9LYFc6WRda6FpifbirnH",
  "key3": "UgKhKaRda8Jg646GwzkCFEpJJLTBxMBKmyMz2t773cbUppTKaTs76B7tDuWrXw7ap7wo1oCLoNaA8j3KHYjeb5M",
  "key4": "4aUfZcvQqTfXqSQF4RhdkDJxC74DFU6QsHruLdk5VTwFW44a8cyCtKgVfEjr6X9PAadXR5Uu2J1NoSg9iy4x1xqD",
  "key5": "5qwN5tfr2WxtUuUZ9v1DCEUY4kiaUEfbiyrrhhviziZTdAGkJFViiVYm2YPYhQ1QkG1U4YETpntghuxZexaRBXUB",
  "key6": "vS7btkcKZ2jkcC5Dw5zLviDbScVCvDzxjXv1FyeWxYfcQivu1FVWGma3wLdubN47nyS9epLqemR3py3s3uoHTia",
  "key7": "2XHRo8p43hnCpWD444JPwYB4xKZLuVzn9MSqud7ibDkybt8wTYHY3h3dHfAhEQ2zWyT4LZ3EfkWf6x9uoGZQDBaE",
  "key8": "39TftjjykehvuwPHh4KoHUPmtzqzkUTK7oyjKKrttBsuJUiSRMJrKyf8hG5rMTWuJn1TYqcoHRNaWpxN5WNjwqqh",
  "key9": "2CPeNGg3PHvT9fdbjZF3fJRqZDwLAhCcfQKcegNxedVr3jRPHEJPYXuftbr52N25AdiPM9iE1n5Zudr6Ycb3Js1F",
  "key10": "BKmTCzUwLo6ixiFg1YVhNNrRR48vzpHX3mTkrGJY21WpS1mGj5KWqcdVf4kDghK4xNvVumsyDet7XGvottrrsVy",
  "key11": "cYT7HnTZR96rGjRcx1SbfvQTyYgJ28t7kJXqZr24PxDkG5MoWxZgRHhAZrkXxkD1FVMNCQazYPLJbRGkz99S3uC",
  "key12": "5BZe6fzoBWLectaj565xAeXCC4DE8SgXV8NhKMjC4nN2tPzuo6kDy33JxC147hjBfCMxdhbJpHGrZ19HVB6jHxV8",
  "key13": "47RjEiAcgYjzNeMtr9Rmo5UVVYdDJYpwJEqYApuFJ7jMSwLYCW2sAEh2npeub2q3bd4PNhhq258mecC9JJoBVFGy",
  "key14": "2TDsxQ5RgoLnhB1qMioEjsK91AoEHk8N9WviuRiZjsk6NUpYkRkbDULa7QTyL9os9kg9kvnJBjQrYp6xYwM1PyMh",
  "key15": "5Vm8xxwqpPqFBqXxMYbJvzn7s54J2i2Lk9P2UZuRDcFXPANRVesuuwpiSrFCHnqhuHfrFPz5EgxqELBEaRJLiZQ5",
  "key16": "5yZq6KNHfG7z4dJd7v68v6mmKN31t6VQZBSMUZm2f7jRfvexcozzBGZ75yYSbg9aFiUgdeXUYFMQZPwyLCYFh7mu",
  "key17": "3PuUqsQWLSyanmxcEJkazXnCCe6Vnfu564V6MMdNsXy4DqyX1rAz6TXEJsixEKaZNReEh7LnSs1D89nPMThVxezq",
  "key18": "4j751BBNu2VT7LwLeguWCvY9cXgyhBbPxw1LhHgfTmXRi1cUVq7GPw8P7PCUuwFjgVkkx31kScRsPXV62iqBszRy",
  "key19": "27RM1CKybeHRGeRLf8r5DBbG7s2mQhUf99ukA32LRuqN56XVDocvrSXTU3XxxdyttJbEwZztXc15EcM2a3LGtD1v",
  "key20": "5C1WnRaEiSRuQA1NLfGR8eabzCgG27A3tWimte8i93oTRdkzKUr5xzDgUf6KHndtMRRFN4LudkMtJETWBMD19hTe",
  "key21": "5m1rDFWQyhM5y7x6NBsjAz7SpMsdAB16nXSuEL6R9sGzVodFzoZLe8nqfJYpZ5SXQrSDPPaDiyWM1zkNUpzF9Ktm",
  "key22": "3aWVaeTHekNU2Li1yzRPBqEky7DNWiTPN4JcYD1LysJSM865dR81jFrF8B5R6ZkLoGWs1fmeTJwbfmJorzbQv6gU",
  "key23": "4NDWnzNU8zsbBBgT2N4ZpxgNiVbqNWWQn3fpZAKDz65FAKvJkFBM1rWyJnuobazKpCtBjVvJ3W1VfBngix6wzGCQ",
  "key24": "5sMZXx2TdjwrPgHyzt6qWaTHgZJXG1MyjgMDi66jv86J3vPSpMHacsUmo8oDfuS2wbHSBdohNo8E8DJ6F6xLcchm",
  "key25": "jKQuKW5avntKnBCd12wrHGdk6TJ8ZHhkfEfThZMvyjCzKxzYErdF8mHG6fyZ5JR6c43JJp9zmbT24mi73Jkuv7q",
  "key26": "nVxzEaCV3NrX8xKDxmJLxX9eTEvApDDcmTZoEJf2276mbYpfRGx8TjBfTguMy76R5RS6Vv3GXRdcMfYuGNiUqiu",
  "key27": "3wATAhiDqW37sDc7PJnEbQB4z6QJKMQM17BSf5ahYcz5Q9vKq6MHeYKYcQ5tHVaGm2CFXDFHBHSYqcW3bwxFiXuw",
  "key28": "3nJhnJzpw1ZbxEiLWQj4cc4DR8aLq8GfYHaLEXDMDCs6mfUXFvJQRJoYoNosXJWGG5B1qdeBYLnwXDBpW79gk2Ez",
  "key29": "5u9UDcXntng2NNuj2kyzScGSGZcPvbHZpsCUcYDtjbN2DwKxtHR5Z2WpaqV2qN32iVg6M9H4bBuDvRCKwh6wfVFg",
  "key30": "2R21YZ8CVXhZM1deQe6drGu97pCgWWLku8s5eWPukGFQjCejWYhptKct5fQaYVmLqeRnKBDwgD4pFCtr6wvESHeM",
  "key31": "5tefNHsXc7qmk6WePJj825UGYQqkr6rmE21Lf4G9NoWMdAtotgKwE6YU37aKndqmsbC5HiX4qsXbt99T4QPPUq1Y"
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
