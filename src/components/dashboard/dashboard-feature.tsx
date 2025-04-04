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
    "3cDUBH4AHUCKMDfHsLrkqYAXop25yKGRqTMhjB9dp7e97yxV4bu9pPUDtLzZTDGH5mQ66HuinaqiG22cHEqfm5MW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25BpSVpEsjhvFuqA6L32vsDzyEQvDqfvNV16XAJPVDCFC8RYPsuUDfycYyGQwFaMggFpkdeLu3Dgk366vSmA3sog",
  "key1": "2jzTBwqfcHCFtHJsdwYy4FAiFeHVsM5eA7uECQwMK87iLnE5BQ9XUV9BV6MizCWScqyBR3GXsmTuLkMzNNJWbsbx",
  "key2": "oZJkCPuxmcx3hPHiNDFivZCV76SPwRMmTcXpBG4469ynETq2tnXkxtVwuvZDXtwZ4iDKc9eFpeacAeuZuknzdaK",
  "key3": "21zjV5w6kFuZf5qvMqUyg52V1s9gxh8z5hhhQPVVkpYwB5W86NRMstUZMFsyT6pjZVSNZNfyAANrcShmR4eSkZjo",
  "key4": "4TALhBDT5yUjqU9knete6apgjMUshvzXw5v84VFqrzuiZ7zdW9xJavnBDmQD6pXdFwyNd2BJ1zKMYzZ8JN8WRZif",
  "key5": "28pUAefVN9auccy5jbXnZzUJ2yfLhYyUmRJ62sRBQiWWRpS7SDmLxJkBBNiSLwJDg4yyhwpRvtux1VMxYtHxRJAJ",
  "key6": "5kZgjaoaSZU6B6mNkNgLXQvM5wfL5d4z56tGjEZo73ftqpWNfea93wn5mf8uFpdwXtsPaCdaceBrSDY3pzbXvRQ9",
  "key7": "5ZNih2bm9xYZzedTyLcHdzA1PAszixVdEu9TFFrqqcFDHLkpNu8ANnSeprAPXQH9JoUbzUJ1JS9pXZBvkgszWPNY",
  "key8": "42gKbB9XvFHFwb2qjtRUgL8qbubM6gd3TJ5GgaQPEB7fY7bmTFZP6TvcLbArJWq5c1f7JQ8owW45B83AwSp9PA25",
  "key9": "4hZxa7tzqZo4u8ouSc9MTCK93FGHKTw1p41XMYwZQavbix5XR9KiUT4HansoBQrVuvQhqyXfzXKTtejA2ecdWV1k",
  "key10": "YvHCZXucZzuufWRUvzLUTtfXLygZvrkMYMfCQ1527htPKVyKqNz1hUYJ38GsKG2NLUmwEJZy9aTBWn6QFhUNUj4",
  "key11": "3CXjikQfQ1FVqYF4UWVvj8srEbL8LGhyxo4DVUBBBEff1j2TbS6YDHFeiXZP7jnMViarFgXJRNvVkVEk4VkwojA5",
  "key12": "2ChEKGi7MCUcoo84occrAFpdikUjvESj9xjA23bRAybK9CtymdkMPws4St3u86gUjGAH7dATcvVa8j5tgwMWEPbM",
  "key13": "4zdD3TbNAn7BUWRoPE8NYw5Ccs5xWJvdPGbdMbeq8PxzBFqT83qbCtyFw9qxuxFmGnaE3pZAPTJrEGkzzSmjJeEq",
  "key14": "2P9RnQuFB4pJia51cFhvUEHTEgQrsN9Ce1RCW7NdEzUvjCtUEL7jfB9SyvDhRwjNQCfEKLueZMhsLjAB15jMzwdh",
  "key15": "4mXdemkPrcAoL3tZbX3bQwP5sDZc6Ms81eNVNJFXy4XFTVeMh8t3uapUbXow16xm7aHQLVCTEp51TikdNHYJtnUM",
  "key16": "5acoGUp8JEbBN9ato2xy5nksZzkwfbKaDWmFb34gPMjWtaU3X9bs8MhqKcb2fZVjhSedoY95Kk8wpt8YdNR3hpQk",
  "key17": "4t2DG3M7wNtYSMypHny5nJMRP6Ux6du7oe1xR61WFfMXj37qZyyrSAfNC5PFEk6DJRMWA9i1KcQbz2jKyApgrZQY",
  "key18": "3ax6Qnb6fA6ZcaMgD3g2QPYUmvXJN5xZ3j188kAeqjDYghB9tmA5bvDuoHqMPEMZyLVuo54kcKcUGrR75grNGNRB",
  "key19": "2dPmt6xcorMswpA1YG8FCHNstG6GrJyZo23VHF6im3uR6NWqapj8YsNYvCQfjbfbiZ3f7T2Wq6C13xd5VzqXYoAm",
  "key20": "3JywZe2duBUuNpUMjYbFwcScnqwLRfQnetCUsF4x3QmBDypXb9R3839Wq9ATBcCWqaqiBMXsEbeVurcV464eAtQp",
  "key21": "5t8VffA3da96K688mftk28AwBw4btg6q8uSxbSCFEbkymfq1AhsZFuwUBb6yxuQiwWg7VWqc8Rf7AxFryTwnbNPy",
  "key22": "3jrrVQ9J8bihEiH9w9khrHcPXtVqRHBZvdrAaG8tL2mMyyv5oEJ7bXe4jZhbYqxyACc25qYThCeeXHuEaGVZ7Tse",
  "key23": "3hXUx9tbfRnSpdBvzeoAtKXhx3buyVygRW1oF8ixyMhFNGMn7uUZSFAbcpY6VEGbyzt6gpaGs8YN4UNvwrUvbQ4D",
  "key24": "5xHPGkHWy1m53RJM6CnCzonRSzvwKjKiDZcsfbYaBfVH2YKvKYHyDP8q3dqoyqrrVhUQdJF5JvXtZLYWKLCVphSp",
  "key25": "4vxoTL8RyNZvUo7xocMzHwpx8SXB3LKnoCgjkfTTHCZaoMYyC1zAc4Dh3H5n1E6tNhbEqTCcFEi9oBuE4WsuStid",
  "key26": "2zSUyDAUQHjQoW77TCFuRFHGeEJt7sGesdP4Kk7nB7Q99CwghcyjnFDsQNb56hsmAYavpa44b8ZwfX3kTzmhKF5d",
  "key27": "4fJ3wDWLveAz3H4CxerR4EtBqUXFG4MGvAfsmeYhY5mz3sfGz9uZAk46FU8W15DZGUPBvWVnGnr8wymdWJCwt9Ut",
  "key28": "2fpBXSU78HyjdBRi6FX7ByqQskLs1shhuYbfUvhkHHMou6g55gncrK7ewzgF2EJjGkQnRuDdWe54TXVCJ2aKEqQi",
  "key29": "5826KjvaBmr9HJKsKxfmXkpBfbFaBHk7oveiTwW1Ku3QVBcEHmh8feCigzeWjj2oZPXd9J2wsYX4QZWEJtvrkxdX",
  "key30": "4HX42YnTR4d5HWwmLD2q1Bu6xBn7n18wFQxaoTHRAdY2AMDcHNAXckzTAwkXwmPZmUQuWrEoPokTPm5tjv5Ka6ev",
  "key31": "4bwjta8K5kpP4mGzvyHwearzKVAwRVHjFwbywsgp7NCSyvAms5cvEYbPLocspw4xdw1Q7T1xtfDKDLnsdqSFQoFW",
  "key32": "5T5hhaHv5g5g432AJ9k6s7GJZ1MRTnFUd4k5FuXYUuXKM9sKnjwTz1fkXw8EPdaDRwQ6H26dLMWRTsdPeb8PLKnK",
  "key33": "4j6DmGpjcBekdXv3b1qZ7Y5AKTw1Q7XbygGbYvw7v4svSELSNZq3Rm7Ffrin2dxKWgr6AwrxUEraGMRmWpWVKdMv"
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
