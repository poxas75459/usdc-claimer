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
    "TfHPTHmZeKdDPKD6fcPG45criSrizKzY9TNec2SnQddJyPbraBK3DChrrjCdrj4yUfBPY5UfNGoYEDvf23cyruq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42tB81E5HpcjaPviTbBE56c9p2hpYeTrrKbXm2Sud8y1cWNhNvRzrBm6EKBSqM72hjyqRf1KgF6tHXruvnehNtXu",
  "key1": "5xE8Me74Ntc28yLgzuNVThrXjT51gaEtakyh5MCXYZAqk8RNsPmHUC4x4ocD8iQfK7ZrvtzFLkpFFje1aoL2soYw",
  "key2": "2mQpea5MHVnCNqQfo6j4NY7QZ7N48srVtT7hTtZRHvvJ4BRzqiCBtBMti1ABiKaoYMXT8TuBpww86n5nb5emAGKz",
  "key3": "535sjgJshQvvBfTuceNiL4jaqPdp3CHZWH72LZCazu7fMsgnFDfwgtf9Le1fW4ZCCSV5CUaJWkfu7tLRLuQ8fTaR",
  "key4": "3jZ1SLAWmamYC8vaKycuUPvEw55L1u2St87kWK5LnH68taLCAYhKE7imzJZi7VWoK5mvciEtRfwte99Kwd5w52Pe",
  "key5": "EufnRckPT7jTnRFvTKKZZ3yxNRxHJBUn5CGvahrCHZ3xYJj85UaNeUWeYX29D7rrTtrVnaVRH5fPC3JHUKNmsdd",
  "key6": "4LAkpuh5qLx3H9eYopfvtjJaef2oPhhBLqzwUJudoxAAoYEGm86ewaXjSpn6HR9PC56QKDXBiciDoQMBWUkEJ9yY",
  "key7": "2VsfkQLjRsPfmCmjRH1q3YPY5QHq9jLqMuaNU87JDBMjfyEUkDT6uQqcMAxyGH3fvTfFPbzv57AB4W6HVRGbjWqG",
  "key8": "62CtwpvDMCGJymzNzeMHebjLJ9zkR7JWfEQjgFrpeSzN4r69XmsSL4zCNUYgijLvisFRbrTEHFPt9KzQXpiPDfJr",
  "key9": "3FWJCT1cr6T9GpTtgMLYFHvaoDJVQEZRk6mknXuCJwoVygZxDSLXp16c43G1UQFRGU9EE2mkbmp3DaMQ7LGqDa37",
  "key10": "hjBkBVr6aWB6FWPMM3HNbnyvW1kw7tTAYGYu9vwAJf8WZehBJwUjJnnTPopXjWokivE1QaLyiNnJuLw7gksDMXN",
  "key11": "5jRChQXyrQs1zqF4FgTvXdmBJ4y2ebDBUWH5hv1T1oDTHteurGqShGEkFFPfqwyi5SDpYMvxB5gs8izQPB9VtC5Y",
  "key12": "2H8qRMSuF8gRmqsrad9Xyrt2GavSS6nDkSXkV8NghmosAvzMNWT3RWrCwD8CmPDZtLsprXUMy1ooayY1PJ3XHMHQ",
  "key13": "7iLkjGq9jG6NFsAdErGrvbho3kCozXswgiaiSnhxwZNwT6zcCZohjkhkWBZg12qt8VAbqLSHJU2t2J7rkjj4dhk",
  "key14": "5nsHQ3KsYRzT8iYRdfemfY8SYDoRcG97vbh9FW9Dc4AThUUehPoUGxcA6FzKuYcvkJVonDMfn2XPJBVm6iqqvwgd",
  "key15": "LVv1xphWWi4Az2yb6gV5hxjDrEDagFe2N6HiGtjgziwCKGiLHKoFBPUm9uVBxQBjagxk9KQru26yqzNzeQpjrXr",
  "key16": "5YLPrrAzBggnUQCEbXEyW482aovmTjWfdqx66fGJiabKfKfXZykYPS6gkTjqTBvKt3XTQQWFCo6QyUVoaAE9SAKn",
  "key17": "4XK3x7XRtXHFauoc5WQj8uFYwVEEJDmZtzrJQSnAdp8teRtRLq9y2FfdTH8ZdrBzgHx7ogNd5m6pzPZ1DJXoeVyH",
  "key18": "CKy1RYHPqgzv9LW7RJTicJP9immT7Cmz97V7BRoguvpbpW8jQaNG1pPomrMz67GWtRD96K6CHr1oz2VWj4n99YK",
  "key19": "4ASdccNgJ1rLjQoQj2kscavaDvQNg69bANPivED2d4E2zyRk2z2VyaBFjpC4WYC2WviF4nwg2Qr12vd5GeW7Qegq",
  "key20": "3S2xDMvhACQDUwQB7oHYcpaj8ssf6WJRu2nLspZx5DVarfoLupymMSGxg2LEdJYPXb4aBavsXjYPBoZefYiHWgWA",
  "key21": "eExb59P1fyqpMaUM2ozQauY7XvDq9GdFFSRsQPurUygs2KbMXJQcPdd8iQwH1zKLaoANkuKT8ntw2jgLRLnEu2Y",
  "key22": "2FL9R6VJFxn1292S2hcthJTeCZay62mpLrRtHoi95AZi7beyYGCL5zUisK4tnHzip4Zfh7hi7ZhERbphzSZweeP8",
  "key23": "51fWD26gL9owiVpygivto8vmY92Eob3qjZY6o6qEV2XnHAZCJTvzTixjgCFdvShRhB73py5nqxXoLCHAYQ6c7EVm",
  "key24": "mGBjmBya5DJj9NCm2XqrUG3GYEnfsG7MdaNh1K4TZxziBDjhcJQPuJ65iZKjV7X8uhaePXxMEKR78MjfqVyp3b9",
  "key25": "4r1wiH723Q64mRbkB8G9bW1s9phf7zg9er93mV6qieTAXazeSH3BmhxLTovqx7sDAKpVPYzcF5Hgn8q19XSabXC7",
  "key26": "54CzmvztKRkQtks3spuSCPXnieTcoKS7qnVLC7Z9fxbDEXSAb4xnsXWY3LSSXgdn14Pq2rr3XhkcsVNyg2WLR4du",
  "key27": "3pSbQgvoox2Ct3rDgA1pPeAz6M3NnW268BoEXTm3Ptgnb4usFqpXrTySpoFZ2nN2rYpAZE2A6PuR9pjh9Vvcxfnc",
  "key28": "5t5Q4N3FHRXqWt1tCXbg27TzbNboseGZPa4TPTHtRVQ43zbTLggU5dNFoLNBaz76iqooYVqisopvp71ikcbAstyJ",
  "key29": "v3k8ouTFCA3R7RZqF1jRDb3ZuTnxZWqV28jY4wZVHSFsoWhdBpxFLAe8mirYtQPTw9SfpmME36BKk9Vq683XAjN",
  "key30": "Ra8KxEKVsxzEv2u9VFN9X15VC7wCgxyLv8bd3K6sJb3XY9HvgnTuviiufJXNFb2Q6GvkQdzKdvLZdk9pVjLiMAZ",
  "key31": "3q7sys6L9dKhMnynanwNjFL4kfmo9rD89m86AjfsB2f49ZorCJcL2u6AovWsJYJrH4HgR44R8UXz4QCgVZssepYb",
  "key32": "9RDrUyqeqF2NPjNKYcXXfYmPBjWJ7f7XgEKRMPKGJzjdkpumqL4Te3qadPPnsetQFWWTrBgDu4P9Loi5qeXK45d",
  "key33": "2oqvKY7gpb4R1J2zkSpyaaWfUf3JD9Su38m9WwSDCMPyaS6KH9Hc83C1fkvNMk7ZZiQJgGn9DQnojwiSWvqMJXDz",
  "key34": "23g1uxKXv2JPKNCr59AvpmWwe6h7PZwe8YGGhhugnhi3j7DjiEXefQsJabsdKpSK3gxDtbwLBjYDwTPkNrWPaKKb",
  "key35": "5W43mkkBGvHRfn6v75yu5J32Hg4MJWs34bj5bTucAWZEZDQmAnc9uKSJs4xMLbXdkgDZdt1PQWBodBw9bHhzzWq2",
  "key36": "m4mDKfrvdF2K2iqAtZuy4S4Mx3Nc8GnmwCRX5JK3N5yfy3xA5jDbtJazHRqCvAEVgkZYdNZD27gMswhmAks8U5o",
  "key37": "eQvW6XYV7B51JrPFx1fEGvVEmywbHUQpfNs3DxoPL6WuJ1FboP5snhaFSvwWiF7LU2zHGLoWEmBnmH4b4kR7Jia",
  "key38": "bUv2muF4sa8YM3ncDhkSMFfAKvyWCNWHuzNNRuz7Cucr5CPi6ABhbBtmuzKHY2kgm4tkv1P2deieqexPp5TY43p",
  "key39": "5UBLKCijx85wXryy8aYjd9sfNuXFB7jWUe3bKN9LwCsKQM6K9Gif6CAGhDkhH3GgQawhdnDt7sPz3oGDhgHWiCVt",
  "key40": "29a1zrCP7esLew4DpPiKNT7SbF8uguFX7SPazGRZkD5ATDj4ukzPpMfSWVj6bM9H9y2foNUHXDXv91M6YqVgEbeA",
  "key41": "kaEd2CPkb4x2tJ38sBDMJsDbfAnqTr7XrN3D3JDScc5n23YvwvHQMmN9dUqtUpWAv3u774pVoESHGuZ1wJAE2tR",
  "key42": "5EhpAbaMamWpST9uMAA3zYsh8R4tnC4hrE93VZ6xprovq718khX6nJwcrJMjHGYjCq8ExPGheNaxiYLWk3QTd3Ah",
  "key43": "o5vuqiXGJhptFUF6gHrcDNaAchXHH13HeRnhwpniXeiaJFsuomKqNk7JtpW9MFbrMjo21c67EKVDTxmMkb9K7dG",
  "key44": "4gKHbu9QYsq7KWVWwpvEk4SCqLTtjjrqjZWP45beeqnC7t5xbC8eDoQqsGtSXEzKirYtZhYPzAc1KLaRGXKSAHe9",
  "key45": "47hqvfU8y2rFqSFrdNacLqWMg9o9KtWMwMRmvNBPLjRW1YukMbwd6dAcmf8cxosNsGMLxT3WKft1mKCxG5KqdKBr",
  "key46": "3WNxXVNyGM5rVuFHJUHJMBedjTRjXqZvAPkz3Gbr1x8uHk4RqvGpLCavPzr9ghTWcp7g3kNFhxxw6VnUinT9qhvN",
  "key47": "4Dt627rkDbP1BZe4CGBABy1MaiURSSEUqWZ8nA2NUCM6nr9ZDe5o5nc2pxdZSCFyv3Dwqwwg8csnz9Tbgti7Qgpy",
  "key48": "9XTLmgSPfozG4XnTShMuM79GTGTZpL2KzzbWgkRhUCWnpfTg9Q9krBfKNLYeAy3WKyFuVRcLGNRRUbH6k4JaUgf",
  "key49": "4oDUNcoHMTJLijGikRhtG8o3uwEpUJmFGkBJwzyR1NH9ivG6ZkWeqQU3bwK8WTNFKZKmG36WjeXQdpXtJsVaEuSN"
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
