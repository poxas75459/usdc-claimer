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
    "5LQ25CvnjJgUvf1xyjaNtnUNHz54oYNSkrXep1wsK3XnY6DdZY4RVG8K22JFbHktTzDefW7KChZA9FqkAFhgwvvn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63FbwbYxVsRVzVxD4LSANNxWhSBgGehgUm352oiRFtJHskjVENZaLBQQ85q6wrAjiFmSQGvZ9GKgvdGzZKgB8MQr",
  "key1": "5cnJr1HgaCeKGMDju4n9RVTyey6H6Z5btCDzE7JUwScAL98CLV1fihuRSJhU7KsYxoZYqJ8S24KDR5RgMZwKXYA6",
  "key2": "5yFMSMYam7dw3ueL1eNTBzaUqDqoKrMD8GwEbcuyHgDBi75dBnzyUTVPXjtXmLtG4RX2n31yCzAWKthVAzgGyMg6",
  "key3": "2suqjq497NXCzceJbsukqzNTd1Ay6Cn6LnwdxgcbzcWjaBKAbnSs6jqvD9ZkSeCLoD8D9Tn7hFB6237vhKQwz4Zh",
  "key4": "5VHkio9GSpEaJ5xuEyYMwUH3A8znKioCeZ6NkD9gtbv47Jq87zQQnNwVksV2TcoeceffRhYrjj68XpBd3Nwn1EbR",
  "key5": "5J7nv92JJEosQ5yrP2bmCXTPxcjnPDcEyrjpzaNzts7QUwgFZf2nRUZw7fd19gUYbZp6aS5rehBWazMPKid5KAxd",
  "key6": "5X4no3vZQT6ZVUZx5fYJGmwXwEGioz4M3dQddf2AVUHoT6kR4ELDM7dNr31BRF2v9bi7BtVTgx5g8cyg9JRAqc84",
  "key7": "5r2yvMBsiFvjkT6JJ6cHyRosXC8kofdwnmvJGndcM5oywJTQPFZZDvb9dEpoEAUFjauNupHNTop258HvWxv4qCRA",
  "key8": "2jY7CXbxS8FUrb11ieoS4b49kfecwesZS3PsfwRosH5C1yCHSBnFzVbEjJxUnwNTPLjxPKwT2A8UzevTLB6sbbfa",
  "key9": "4auqEagVQbxR9pZkdxA4d28B64i9EkyApDvYPZWV2dwPhnGEbLoCMwyKwf1oRAScqW2V9MkbJJdFtWnjBE2NdvNw",
  "key10": "52mV7CEQqNf9xpwtu1Bxg3ya3Tj9U6oYwEfQp4x3ubX7o6n8a9GMhHsax3PEB5bsEwMwWrFmxChv6AZnJCPZEJoa",
  "key11": "2DPjrEwUtn9xc9fuKb1DvoRBL4QixtCoLiF2pKr85gh3S4wBjsNKxo62WqdnjwJRyWn6ZvANGaf81SZKHm9eieXk",
  "key12": "5Huoj2qaKTZ8vuwD7xf8wRDGvkrcJDKBj59ZCqHaj3Ev3VQwrCwSk66JxBqtie5UEZ4SE5UCPXEeNaVzajafxfrF",
  "key13": "2NGsqyYDjjEgHSpSZcq1hH4mTKKDpp1SEFeuu68XwE1LSdB7rCZ3kgDRN3cgn3PMSALaT5XjWj6cZGtiVP1QBLEA",
  "key14": "oCoqEsSBkB3oBXzuJSsTj37uUHA5hjrA5jUMzPjiWCHA1q7NXdUdDRVZwAjMg5GveeM9SVovbyYcBsMitrQGQwt",
  "key15": "358FCEAPJ6HBhpBCnfRYTpWywUHxQWoyW7X6sT34NVBtFZhjqQa8F9Mm6uKZJ6SqnDwKgsVPfxDYVzv51GHgtEuQ",
  "key16": "53NLWHrC2LmWQkaW3kasphJHkY3krH3ikL8xhPUZK1HsCE4JVE6JYqjiDKwWhFk97qustzHpwabVhQ6rMPpYhWJ1",
  "key17": "5Q53HJHE8AtrbxUXF6iCh5qntMxjeuVNEh3Bpxt1LtSbtbCjwhaTZ2sUvse73aZTcVih2fsaa6fgBePgLT8bnonP",
  "key18": "4V27vEUYgBpJPvn8RVXYTPrXwZXeoQPoZWA7H9CyVZZMvx2wJiCM2K9W6BrHd973XkyMz3ZwLKJtyJRxukdyP6Wc",
  "key19": "PES3KCoPNM98YcUFL6uHKTugoLtQyhxT57VWc6izxsTjCf1PYUYnvEi56XARW9diq7SsRxxBoBtLPRJT2oaySBZ",
  "key20": "FV6aUihWt2wbyyAjBvfmntXW5bSRhaN1mc18tq3WKt5bhdskBVHBczLHazPbrEnRmuVUxJP8f8C13FMnMjV3z3Q",
  "key21": "2VB23kM8SLp585kWAcSr3rWtsBdKrbkV9zh9koZ4vrH3JX3XLtg1V5E1bCM2mToY2qTeD44TCmFyRqRSqomz7Ds8",
  "key22": "4TtTryf43gV1hUejMLJJsfewddp4YF8Ck5seSWjXnZGdWe4LbjTxQcfp1ZNDbqtw3P18RuRj6LRrEYdpv8oqANfE",
  "key23": "gw3v2WVYhFaB6yjqxRcvVpTH84drYCKoj18hmdCGX1kHv2nwXuJqMeS3Z8j2qLqbkQsFNiSTn8Wj4kDTaWAKnv3",
  "key24": "2v5Vnp8ETzFkf75iM11HG4U4ynXGQqpRqpNkMTThMiGghQMCsYkV6dX4YzezfaNHizgMvBo5HaFsrgGsDS6Cq8pR",
  "key25": "4pxENcZvoSk4R3GAgoyGimgW8HEjqBsnCRZdbgc6o5xgvQhNtAio1vd9PSn81kFSf9PC7g5nwKHEDQqEAkRA1sk3",
  "key26": "4mzEBE8MFUyugctw9Sp9a6hbhmGLKRtnSdoabYCZN2fKUak8QyiqdaXrr8xBGB8NvbPFoodZKq6HpST9yGRhohhz",
  "key27": "3Cet5MKQNmMFmu7neGr97HXXAV9mTnB2TWRiM2YHuYbU1kPic7Eo8PTkmhRf9Y8DatNmSWizNorxka5evVNM3naB",
  "key28": "3cPGH7gaxmx4CibDmGGxndhAh6SrtARym6sFtQEdvm32zkJs84H52948iuU5qgKozs5ytKmupbtsiqZ3UAwDrXws",
  "key29": "4GoxxbiG9W3UpsatxUAMr5aejBrmBySG6hEVTBrxryHKnE6U9ZA7hRFfpRu5E5hF5Za62WezxtTWVeccj5vCMLAr",
  "key30": "4vqUeFYz4xVjLyhLM2zwQKcrYbYtH24mzZKUb4hfKU3i6UmShJ1pxH8zmLM7t49QoeFPe6JpgyfmWGAeR7bqKKnx",
  "key31": "s6BoDrzJNBXCQHcQQJ1SkUSbBL7NYZ4xRi39WLK7sYvTxC9JELCpxyLSm7dJrhHsuNJkKyymQZSiMNc1pCzMVKB",
  "key32": "5o9LejMvBVJYsodMbeKxpQfQPBg8F4qsQzEEXHf9GsVSN3pNYXPc2SDpg57do6mmvrJyZsmgX128UMUSBL4YAvLk",
  "key33": "5yBt6Y99kHbtRfHM2BhfdY4HifmArq9AV6Ee2aWoQWx598X5JUhN6ZeEy4igtvpUVw9GXd4DNpDRQKE3ekfL59ru",
  "key34": "3jE8LFQnc9H7BePHn2E1zJoyJWadEgE6YFh3ixpChPb5cxqxa4oBsWcjHz2mb3C1DBVQYFewvRhXdnCy4cenMZcQ",
  "key35": "4hzXY62Bqwu25623X9LgW7UxvDrF2qU5VGsbKXoypZ12G6LRQUs7YLtcokLSBfYoGLhi4tqS2NMoNGEAp78KrPYt",
  "key36": "3z6jXuTm6C6K3yLWahXAZVRSFCWQhLGw43itrq9tk1daVXoNsufAcprE9tWNZnSwzPGXbpWtX2wUmyegzPxrdKX1",
  "key37": "5AhjWtu27W9vc9ACubodrAdBx694s8mRrJmCGH8cuXhx4NEJEg3Yu596sS6HsD4vYnun5e2TB4AaZt4sEbpvxtu2",
  "key38": "2vAt6fCN1vhUWVtxkgEdfjuJw8vkNn3dikfwNpcVyLKbN76gnYg456QdZ3RV9dQeg4D6XJn4u5c8gFw8xo9uLiJw",
  "key39": "2xBegn1aM1tHK4NfwU2JnFGWUFkwBUDz9jAZwig7HvzeLBWusdL3Uo9TnCPcuYvfE8Pe23kUNi741GQ2GzwBGPWX",
  "key40": "3U1zfuZkiyDdrYdSrX2iZWd45scttkyHZavfpwfjxHKJXbQmtWTsXNekcPjBuDx6WYrxyyUaHgFW8nHedq13W2Fy",
  "key41": "2FDcJQq9PXrFNKo5BUTFzfefvWEiGKoRgEzZUGru5JEZejoSHwfFSVfZ18jmiJNs7oJBaDT7SiGmC9GpSaPaN8s4",
  "key42": "2WDWWa7cYcoipTJcM65MtBcGvtyvpjCgWYiyd3yaVXaXCKLrdXwoWK9Key8hSsW9UhA8dZoNWY43jNap6awmc7Pi",
  "key43": "3q2qihaxc76DFMAYTYGHP4RMirvRbc2v36hmu7ptZ1FK8ew7pfim4PTPaaRTgPdqfcVEEWoXbfwZSSt9e3TrEBe8",
  "key44": "2JksS1S4LHT1KDC9jn23jz6ZPt3tHmwiTjExoK8YF1HaifxAyDzFjXFsXgC8Dh4HP44m2nq6aPyv7WUUdnYhMPEp",
  "key45": "48Nno4V37PmxAXPVbZATZVwnsjcmVoRyTMJJaYdPW9tj6MFk5ytN9Uzb38UxnZ2xCfMVY3ZQAYEUgXtyQeLYAhLm",
  "key46": "2B7DYZyUN3muigQgFZaVVSpAEPQMQwxAnEc9Xh95UeAKKNgXpQMZRhFwhFYrdpcHqQNKSE7R6b6iCDNDtLzAZ1Uh",
  "key47": "5wnsAedep2YPA6P2TqDLGpM32tMNYoAMD5TJsamxNrWdti8uy9KnWgMksWP4GdCv1dn4KTDgfKFf1ZMmhc9FFbqY",
  "key48": "2fFcjR8V2JjrGvXu1uX5kSYK63E8rwws8QGaaQxHMZpnMq97R7SGpDaQxP3nGXLTT1NPrBN3G6tHxV9YMKyx5EtJ"
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
