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
    "5RzLkvskPDNd1qPvyqBzX5eMmhnCiMMQwWYUMovxM6Yqfizuvq6ZfkzkL5K96FiHbgJcQmqksz2V7wRUffkepYAd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gi7bJVyuKdDtt65cQC5nLZgbu2iqHybyb88MWq1fKD8gJFuDYfVKQjJMX2nQjXg3xgjgSf7o3SsLDT5EnVHeaLL",
  "key1": "5gSj4NgFaeeYZK8oy7qzM5imE59F52HHwu7KEtgQ5vQtCvW3wa4BVDLL14Xi65p9t28qdgfnD93RmiprD5WNxfye",
  "key2": "4Ys9D2CRYXHzFyhkUEibFLmdngXzoqfbBf7pM2kzHbeL9HtN2JdTrEVXunKQmKrvkGPS9VBqe3B6TAmTGiggaAy7",
  "key3": "4mFyNJXoiV6U48ihzt8H2F1SK5cXa1CfgPnpeWbJNj742FhU2Tj8ZH4x5wRw7HBjpqZruXGqEREd1ZwbsJ5iQfBj",
  "key4": "221pD1JhrgY7ftjP8acTksXTZc6iTuhYkuCBLsdgfJTU4aSHmkN6oCk3tuDU6UbLjrvsBB9d2Yf5BcVGv94xa65Z",
  "key5": "4ZqSpPTygwfxZyAJNRS3HGd8W5RBmBbB671i4w5BHJNa4BrnpKvDKu9B1CbSks1dMY59zxNtCb5m6WzbwvHaFVBT",
  "key6": "Mys1WDPct28c9Togpz3YNEd6SYMDYWF9wno7mUj43mGVBdcWzPAgWcw2TFcT5UtJsTgE7D9Mab9LK3P7WjW3PsF",
  "key7": "45tkTFZeJedc6wFBYz4za46AFx98RYsMm2PXPS9q8BnEBEdSCDMHQDmp5b5ccFKDa85gvGgUWHJVUx4CnoGwE7Gn",
  "key8": "4XEBzyVCJS6z7QX9TZoNwbgyycLjcxUTqKiEfiJTt1gKexTwz9kkCm9ZxmnYg5YrMWmQQg6igsgjxLBcsvQesWv",
  "key9": "3WcDfRdnnCZxP1H2iKVKrFs2Dm774WATM7PD8jmvfVmKsq7DdQe1u4yxbp9JFjDm9fW18sdjuRVzDrNWDrWTGv6V",
  "key10": "2PCnxFBGAo3LdKbb5xW1Szv43QQRsdh8B4mFpBNiMXr8tqDDqPxnxwUqNvQNcr2ZPmaCURvZi4ZSMbxmxgk7xR72",
  "key11": "3fGYYV6i3PkZdoEFVQkq5RdwanoAThTqouhc5qTth5XidCtkW3zcxzTCiBbGWPWpKjJDrb622wuWmUfEPxyzTdnY",
  "key12": "5ooqpbsLJEvsk9Tzou8FD97KA9HAnmWKmVLYKg3WCtdkZRQ6E7L552AMBykzFcwSYi5qWKEBvnmfmFPPvLzYHZep",
  "key13": "4RTai5pgbFo4FwANDc9z3uJW36oz8t2AwbH9PZY8TUFMnetEL683gt3Cx4jERxhAexpMvfXTr84ms7sS1AUhaV9y",
  "key14": "4U71SEDSzz17d4eHYXk1LcDzbMAbM2o1yd77FRRUx84eQwDLAHnQNUbNYP4isrtMgdiPR955BXmwidr5ZksnXTJA",
  "key15": "Us559wo3YYLcuvgxeBdJ5ptbuyUrqGMJEQKRTfLwU9DKeqsALV7gwcyoG4sQCsiZ8wZf7urv5iWMmJPYZBc6xXu",
  "key16": "LY1MEJEbP3QncUqmMMfm3HSwN3PUBkXnHy3yJeKDXMSkaWhtXKL7kPqkw4pHbL8o1MmvD3FwJwkKxi2RpqWBPUE",
  "key17": "5fYQH5nyZtPdnbY7U1AR5tBDUF42A6YZm6sjFn2kMrGEiqPW8KeenhL3Kp7ePjCigh8XuxfUhWeQhNNVCKmxXj81",
  "key18": "24hq2XiyTJ5QDwU5Zq5zm7U36BGUNWBdaE3JHcHYeTu9qfWf6WrocrFXmtiTcEAHXnNamgMWq4bLYUdua2orwGMW",
  "key19": "3Jd2XxzLkJuzPkNSpmvVfLBW4SQSRm9yaWwu1hiCXiJJZMCCcETHPVhzz3pqmciX4sxe68heirZKXBH7rcgChjd4",
  "key20": "5NBEaEAXJb2nFT2GEMSP46Pq31jiT2ojRrGjYykGuXmE2nbuRczDCnMbKDNEXg6WwTd9XXC9edF6JM93hzP1vgEX",
  "key21": "5Qwr6MDNANc5qTLaMh3CQKsUfXUu9ckz3EcVLoDVumxHdcWAj5LoJQzPWpz4iv4GxGBaskwybLokSHvHkJ7iRjKz",
  "key22": "2wBLQAHnMdywu8fvbwbbomzTGK5exgE9Yvu37xeDT79ZmnCgA4S7Zy2LGyh7wNhDKZJuc7tAsPs3QEUafs36SZAt",
  "key23": "6xkg6warcGAiZeg9gDuq48iLsedKoSfS1QMvmaoqowWDdqW1YAigspxU229Gv1ByNtFR34QKmmuwswnXwSLr4qV",
  "key24": "3obiZiwTGo9RNKnnGkbGe5oCtn4WGFSQWuCEemRGTFmXfXPHCC7LowpB4p7jDpnqsRCNhb8xLJQPfvcYjFfdkmrh",
  "key25": "2yzxtR8x6HGTgXYtMUVtCWeNYghCbEzLjmTNbMQhyzSn5igA922mgkN9kKSrhZ7ch6hE862rBjBKdQockFPxyaMx",
  "key26": "3KY3AQ7stgekvKotfwJBbM5Ks6b6fwLRkgS6DbsK6NiUQe2zKagWEkWSNiZPkdfo79262S71nnTYuoDb4SnSY7zK",
  "key27": "3xb18ps5sV6nB3PYEymkt5QUwHJ6VFZ1ARN7sEb4q61QNtLXVXBCVN3xg2aksKGY5ZEH7U2KZWrUuPUwRqZooW1s",
  "key28": "3BbT7JTPj8eU8Vj7YRHkLHcAU5u19xUHXy5kLeCXr5nhzEC6CbqoGWNNBnA5C61feLeWdKz2SdnyGemhfd1V6qmz",
  "key29": "4Z2DoNFVa8ymTCTGp4keXEpAeUCpoFrtj729Cfn2BWN5jhbapjXgsSv85uG7jzkcsSBUWb34baDDjjP6vCWi2LPV",
  "key30": "EjvJxVM7yarb4weJq24XxGPmQSCGhJy2e6CkzjEX3JmwRLAmERRzjTHTohPTsznaGE7aGgP6FEh7BtezSErU3Ye",
  "key31": "34MNx4HA4F7V7kDQFF7p5qqqgo4jNDEzrtoKZGr4438Tv8ZB9aEqjcQfgN6AVSjvgJ5MJQEt8gTdntGHEN76Z1vU",
  "key32": "59obWJEwNEtqY4YMfpzYpbBxwGvaznsKvmoGDqeYK5rqLqL6KttM6C1i6gLu61f643HLxStCxJ6RVcBjzU9SBJHZ",
  "key33": "3gAJjmdfqpQDHYqKnoMinAiR6hDbAb6NMxFvqRASUUrr7gySfqbi9gfJoiKJr26izUHB8AGoeBNKsLwHAxMB5dGN",
  "key34": "bpEsiGWozfU7bau9AXazCjs3dnBptoKSURMeEjaFj1SKtQGCWSwAv7q741bprToZQgjCVkdjPjURsskU3BaZpff",
  "key35": "5DYPszcbiKu3VDLN51v4gvroDaHzxuhpaMEiRgtNcXZxKpHZ6KGAiWz43NgNfqjxsjik2AQLXM6QBNiSYPuvGRfv",
  "key36": "3V2efSS9FDNXjbu89FgfgUjZYm9kVx4HybFsYvA1oJKgFyik3XehEnXHVnhAdchfpSpkPMb9sdnjM5jWGvQAM8Px",
  "key37": "nZjnYCUsRYUV7kyMyhjKoxVmqeEh3TRoAang4cb1vG49k4GVatBa7boZPonza1xx9XiZrDR8z96s9bhxQn5Fp51",
  "key38": "5kxmaZ3KkStGyDVsCKG7qNsQENKvNKXPnYcgAegXTFwxQDR8G6vJ2S1rrn4fpo6rVdjzVwgaFrjS5Tn2m87kHJ9Y",
  "key39": "3kh5kNFDPgXK8ZK9QFZ8VbCvK9Cn9R7dBWNDYiHrFYzLj2MDC5a58HZnZXkkh8pmRpqJVYAST1MnXoeo1ByxVtrs"
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
