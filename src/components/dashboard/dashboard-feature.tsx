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
    "Fq168fEr9D4Uptc7sAfw2fVf9uvyrY2hDgfmnThcPvgv7QFcKgwLFsNXNddzXQUeJqcrTHajUm1tWHWaLDgwb5N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FWXH6KA3V4MEV9vkRSHvnMZ5LKbV2wCfkptTXW751CxSf6ogwNRk9onew4kipxkmf412oPvdqiGTiZRkq3oPEYe",
  "key1": "4kfALuLPwLY4eneKbWQjdXNWWXNicxUSnXNqRc9m74uoEPukp2FQT8SAAuJKyEn2upSATVbXpvHksLzdK2tkchk4",
  "key2": "5a8KjfZBEfHffEbCrCrxjGsuUvdQBVxwYHvmyMY1u1QU9BMT27A3Pfuz4eeUd5qrUikfm14vX3LXZ3iUCmXyHKNX",
  "key3": "AJfepXuFhZZVDBc1YdunDhkmVA6hqsWdAg5DRUZ1wQDZTHDXySTcA5NVtFSGJkPHM222CSkL6Nygi47GGMnX5bw",
  "key4": "4CJaJXqQYtwSvXwPdm8f7P3nUxfg7KZzKfZNKs4FT46tqeCq2WcmT1zSSMqkEvaGKWe4zBXhHSQ15u2Qj2aZfaT",
  "key5": "5jgvNTmtz6GneyAtU9zxAipozRfwWp5UAbM3ZvGZxTmr9FheWwdf5VjsHpTkPvpdaXQPQBkdW2rHKwg46dz9v8zz",
  "key6": "4bwnA2ZZ7HR98bbHsyK2ZD1ReL8hAfGQyTLibSHyCEviib4j2AGYvANiWrUPSzch2fCZ5PbEFAEKoLUANbFct754",
  "key7": "2WgaxVYdXBMQALYgp7LJShhowN5X5pu6yN3yTAqhFhUw1vPjQoTD9yBoC9UjvSDCCeo1nfwmacBWaDtPjpZB2BQ4",
  "key8": "2C7s9U5yvQNtU5fWXxDAp3gCnNvJY2gH88W8WbfJQxNTwJ3jKQLyy8juVxzTAkqp6pQzoKxzASKqohHU2zyM7qsD",
  "key9": "41jbYv98VAF7SpabGVDK6tXzb7muNv71wmww3CcD3W7SYYe4B5j5RYXmdwZ2E2JXDXVhLmEuVs9qybfSYSio16o7",
  "key10": "4FjeDATjT5LgBswDBWmxRvmZDCgwq1jJiMTh2KmhqFHtoPaf8FjFx1wAXuyPZePYctsoW8seKrnXEA443wg5ii9q",
  "key11": "5g1GHSaC5L39XahvZDRkZDK7T6DNA1rgY2BhDSw4dUPPpWsthCduCSvmqmcqyW4nFohLM1a5qCWPqHaJEfAnwLbw",
  "key12": "3Cag7PFYpzWH157KWqHqXa3Arzg8eQbdUoEcKcYiwadgcXxrVhSV7XX8369HAppawVEevSJW8E5MDoJSssspbrWa",
  "key13": "4BAAcmDbYkbrsDhqBkmsDNvcH9DK2GR5mUkbAA5qbj134hUyQrSwL1mUR6uvtSdUH9nXJEbqWqWTu8uBQ9FG4oq4",
  "key14": "4Ykv2fZVUqTUpTr7mVVaEfoTiHRcjpMNjBwSqdqUgSWRzekgpsKEbL7TgmRHjiJWfkXTDC9Ag3KeEZNxe2oHUAoL",
  "key15": "47H2rrXjaoufVBTjSRazZwG6x8mMFAgCYSPXTz21MWZtdA5EiNaaTdGVxAykqdR4uxymWczaGmFZ7tcmnsmACRYy",
  "key16": "5H47Qs17oWa1jS8YH8MmXZ6gnKZh3ZFweR14ekEq6oLB8GjFTNbW1XoUat4AveGFfeYxty1w7wnwnb26WsAJmuB3",
  "key17": "5xUGusYL7Xh1V2T1nc2ixZNzoufWcF7NxT3JrL4kxEqoNGn2Ri7yhreM7QYGjcEaCsuaTxsLSHwHhDXi7UhxkZPd",
  "key18": "3i6ySHTdaeCRjDS5X2NpBmaqHgrB3rYqJdU5jEu5gDYzgibeArES7PtJjM5vZ27PSLrZ4TgmDCirDMkYRF9fXUr2",
  "key19": "5X3Vu5fNewtkazEpPKWELxvjuuxiqfCEVvfRTt4XKHpB4YYZ7yExxsyrszqBwVJByf7HBVHU5CzEiBNaP4ZMsX23",
  "key20": "5ts6j9SsmnRuVQvZLj19kYoF1tXZGux2z9oLyNg1WgyvfQoM3aYRUkYsAnZKpqxKnrxHWrS1wnmjbWrQQ5ZtwjrG",
  "key21": "mCXjn27w1gK8VR3vsPbHFCXN6BW64rUfJkU1XotGWtcPxVYPbLAeBqZKKvkpZ8dWusoDmhJjvjAF5HJDmGLKEVA",
  "key22": "4N4nw749L4hDBQFi1Ze5zam1NMQ9PJSzT9D2oopd1Q3Xzsj81Luun3Zoo14c5hUGYWLRdbLoSJT4aP9dcEXvFJgH",
  "key23": "3uxY5RFgskNv6G1kFnR3siAdePzYrw8TVeuf5vGztLTbHdzfrkTktq5Q4PCTQGXhNsD9dRFbPyACteQJA8vFCdRN",
  "key24": "3rtQdah8fTSY5M8WaVAqHobHD3PmSRG5pgxcdT87JZ84Q4bgCxRvUKi29bq84cMmxFr7PFDmsvT74N4J58s9z1MP",
  "key25": "2KGqyDL99SmdHxvsza6Z5ug5tkq6Mi8HWZSwxkzfxfkWxMztQHqqYrh1CX9pTJxTbfYBtpAHuvzbjKHB1jTQSYE7",
  "key26": "iafxaGiDgVL1E6GorTkxCGxPwqrQgYf3jJshxuYafgpcRahwkQ3roR7yBynr6cZSVzWJ3tNsFQfnm986XaDTBNf",
  "key27": "5k6wo36jsNixUWU3bJ2TRHq3jDUiTD6uNe6MTdAJFPDXQMpCZGiEtg56zvJu8GcLTv211ZGJwB4qMFgrST3sXaAk",
  "key28": "5kbzwHdZKX2C53zzR2neJtc1W26wXyfh9RAuY7aazQ33bbD8V43js6Se8az9KkK5xFTYKMAqGc72sJN45sFf43zc",
  "key29": "3NrqxsqhQ2T8Qq8gJeJaWgyt6xVZvqiuJ3KWWmRxDPtHgGpk4aY3o2PyMjdNNPawcUQD8uwFcAuYhmsRx4EMEnQM",
  "key30": "3QdUKPwYLaEaodgHBwKJFN6MqaYrTA1Wzk9anxXRiixQqKQiVe5G8vWTqrDrhpzwZG2n1eYGngRLx4LdLC2nDMMc",
  "key31": "mEVRvwkxFu7S3d3Q35Jv8xj6bN5iCNu5yq9XumUvzRX2iw6yVymg4qE1oXpPrwMTgeuvwUSkeyru6qMG9otdyxR"
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
