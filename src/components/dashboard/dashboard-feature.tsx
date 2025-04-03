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
    "3Km7J7Yoqu6fUcfB4xBQxLSL67WpHNXDYQuHXwCngXvQB4Qj4TktEqtkrZBVcNDpJGVQyLpVAXHTEHf7AQa5nAqd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zTZnfjkm2PwG5FkhX4UFqKNzerK3SVA8hoWKL3fBpQFWkCMisgRkXA6NLUL486HdxTjBPtdGEEae7mQY4ZYuQBW",
  "key1": "124g8WdB6U59c8zKKm2w22ADDmUUcNDJYJnhtQbcufkgf7oejjyr3MrL5VoH3mDjaxVcEfrv24uZi54sn3UxiiJB",
  "key2": "2N6onuuaqNUxQSZXrgECMY9go8xyRFrcy5aSN8AGThWiZ4aUFejmMmseJuRkL7BYZxP1iSijKq8bh5ebGmoT8z2h",
  "key3": "QajxpdV7qHE3czV13T9ZtcEJ3AXxsBYc2UrurX8LA2kaAZL4WW4z7s1gUpx4nmT9vWUYA43EYh2PJcPpAQdut6g",
  "key4": "2hb2YNVQUywfMNStFLWwnjgj6XgUZVUkEBwrvhkjhdjJdKsuRPE3G19Po8kmEjHu13YNKf6uwGUyzygjHgPJzYGg",
  "key5": "4vzHaSNgfb7eNMkuukEGgqcQiyZyERu9djpBVhTR9MmTdkgGeHMSsVFp5gvaow4Z1282Y9wbWFN8R2JcekAAfmLD",
  "key6": "5NbrpCy3RQ7xxJQZZZDRbtZPfLsAnjbGUYQuqDJW4qELafZtjZXg3E16Am3wXQf3ozBUWoqLLAeu5EQCu2NpW35K",
  "key7": "5iFTvwNeoAkoTHX9AXbzXbdtbfpJ9gU6haXFUFxJrneavUuv6dk4rP3JnrfxGUh1VAA79RPvcgRvTTY2V4Ga38Du",
  "key8": "Z9H7UySDNLfjEPqsVMNWHgsyhGUr1LQiAHnw4N9F81LSHmJj6T9y6RscHL3kzpojhBcxbwzTphvWGURaa7UVXf8",
  "key9": "3BNpMFCB6Bb6nX43tEygnAqiwxkY5cvVDdQyRASieCWQZzb1D1XxWT9ohbBXYieReYQCnmH62iocnZVM91P1aMw4",
  "key10": "576h6sX52v3cFB7per4Fb8UJdQ4sHUYXvHHRHtD6dUfgdQxiJtHzwLF2EEQc9jWkR2KXiEqBodfdtaJoUZWYuha6",
  "key11": "59CCPNw6LuhbjvGu1peRnQAChP8zE3HeRQRawRwcH1mrjWZesTHG2EZyJqPVqbxCF7dn8poWAFbGqm4m6YRzVM7p",
  "key12": "5f9z7qy1ChhYrSRwEmc6WdUwR7E9KVg1uNtqaH9Jwq4cDpTnEZaTNKEBsUT6gvjeMLogX6BYU1YG4Z1uLXGEP5c6",
  "key13": "5rw8skbAyGCev77WCjtfLNtDDWRyBnxbdQ1Ga4iPA7hAKCTtHhxpZcBZAgwWNc43ph7hyn9fouKVJxyCi2XRjgvJ",
  "key14": "3pWbVgkqvKKPatkkykHEBGVh9Am7SGAato7doB91Lxbyt3r9cWtmcBP9iHGjeoce47q3QfLzPjxov1RdsMTJ3Jd4",
  "key15": "47msn7VCi7XpMWTXzqniSWL7jFnT7EvcP794ic4BKLJAXHCXWN2Wh2oUTurNVqgATWS1Cqzs19HQwBi5poCnrzd2",
  "key16": "3aYAw5DiKoDW9U3QPN4XQmfeDzjBGDPfTRnzjSJ4fQQMEq3U8t4vaSJJooAXXc8v6HLZqV97BJtHF11AxPtcL9tK",
  "key17": "2bG9KTZADQ6kg4zufwVDw86kZxvHaTotXwdeWRU56nWXTyWHsG2MgvPJPwBJiEWwqfYG99LiZNHg8or3VZ8EqBtV",
  "key18": "1LjS7xZWjQCbxWwG5p4jXpa47kRtvgBxuPMtJpMAZGQtRFf1dXpEfKQ6NxoK2sRDBuhG9o2U1pvHfGQja8bFZ97",
  "key19": "24kSXgZMRjqPovCgAYntWzUTDdqwLhTy5xAUVgPauVgsPTYHXw5PjaXVSYpRzmYViu9VT3f1YQJzD9etKqEUU6AZ",
  "key20": "28XetWvq4LQqY3qz2hMn22zWQHmYX4fHf11svXZxXbPsey13xD6m1R3j4YsWW1u7JdabbqH9DLUXxETU3rhPViN6",
  "key21": "5devsA1qtqKwwkbdWXEzXvrZmXdTQ9oCyyxygbo5dKsJrM2WmMWTrtjjyjep1L37XmiuQiSBVdLkwHA9vhLVen97",
  "key22": "2v34toZJwqFZrYWnCfM3irQHbuhkb6ybr6iHVvvfRGdsfsbxeeVcQSzJ69VQjDdCDHweG27mmn1s6mesu75ASaUG",
  "key23": "2QEDNGWxZxcfEs6VyaCkwcuQF1pECaGsgJQBqWmmkRJwRnEb95kF9WsYJczCoGPWJaf4T1zhnhtJwd8cjeTMrKzU",
  "key24": "5gAhbtSFrRmupAVNEtGeakMkVcq2ciPpjmk8ev6BYXB1cYNX49AinaSqFh7biDSwfkRqDMtPbkF5YkCR7oGxhCuA",
  "key25": "59Lq23Bo6QFcjXE3Ao3tMprA5aGFxYznXNjXFg55Quswis6VPyxTJnpRoLg6pJFguPuuCmV5UrohdaGbz44LT6L4",
  "key26": "3H13rUVYrBr7HFe8Kakysvvr1gYZ5BxrtyWxe4GYsrHRTrweUeLCqERHWQ2h5mT7phZj2tN8tGQdN16ZSMVCE2CB",
  "key27": "3Gqxvx4UL61466s3GUNns4s6Di9pzh4iaKCdBGX9MwW6R6Ecbv9wWMxef79uNPA6cVyfuJzuRHJw44AbSGYW6wiv",
  "key28": "58toxpqLxg3oBWoeV6dLXX9UWTuQ2x4WDYGwpA85FPQFakudHWp6JxfA5A84hEpQZgHem2nVrgEG5p1SuC2QGV9k",
  "key29": "55NsLWJRwKEp36VUbYwoYHLrnLkh4oe2QmyxY2CfHtY37CkbKNDU6eNRqKKwFgH2Mc9tgURFJ26dNnBpRMKE7zqZ",
  "key30": "24y15JuwNmQw5Y1qSdzYXFoM9QktoxSkTKmRitw3mZWxMs2HdufdhpXAGW2ZfF9p98UPp88gStWWmAzL2PiXfXAy",
  "key31": "2rzaZ7NN9hzDvxDLvbKAtTKdbF8J3G4yvcHwhRed6XdobSzZsDyrX5VVEvS7LHJbSiba7CcQ2qayneTDJME21AEP",
  "key32": "EGc1ANQMf7TZ6coMkAepX8yU2DpkknF9rZrzjKN1AFxUgj6MPCfspMDyX6KzYY5pNV3tYzHWvmM1VxYBsjTUoXa",
  "key33": "4DAuY9BeTF9vk2PQPEktXddUJq93rgGhmcY6PyfESWyABCrrQHhaKmZswR1hVcJj3CseKWYfSY7g9YQKJ4EcKS8r",
  "key34": "4Fp7v6e8oHJCn4Bz3RuK5UJ67jEMv4MTJHgdbJ1n4TXEmcFeGpvucvwtrxSAcgEdE3YNxAN3rZ7gYSeW8LsJVBi4",
  "key35": "4eXKSXzn2n2xJcWg7xcymNXDT78cAPTo1L7HH7e2x9r2PVT8Sv2sFWLsGvV1SAZWSrzYgcDc83Qk8ihTzUWUU5RZ",
  "key36": "3GQhpyZcN7vXhz1bH7cHnwBXBo8r8W6bmUeJWEeL8PUedupAei7sdovqz2K8PERohCqRnDRC1qps3cqmczvx9ccV",
  "key37": "3bnLY2CgQ4SK65haFvjLA3ezDnx87KBUysANqHK9M9MAe5UoFcWVDo1d1FJhEDETWEeFq1vBGqHo5Us61zp48pdD"
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
