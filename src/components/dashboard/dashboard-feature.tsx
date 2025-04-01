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
    "57eVUh96AfRbaMmhRn2jgWmj9kDjDRxgBioSaJYqxt1PxMtUJvvn2NUmka9XvhoXF3F99XrBmrHbbqwWhYEN6k3F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SzkpzVGfEV7Y4Y47QyCyUVsbGFiWMhnD6WToqbKpjPP2HRFZoUgqYHFirXFpNddqsVDNpUtN9QtfHUzxsJR2mDp",
  "key1": "4NNxorvuqiXrQdnadtpXbTqcQm7KNRvSs8moi5iuyURXamR38bKnf9B4Z2EoW5vddvDPi8P5iV2JD9gf1tFKEgH9",
  "key2": "3NzPKNqbzpSpQZ7qsWtsgEvwVHKcq6oxzohxNL9F5sQfCdMtLhTYAYK3bAqaNhsHAyy88heWDX3mCSyXStxLQY37",
  "key3": "4Zt9morcs8gaQGpR5zix2LB94jSDjt8sp3yAmYPK1WvppNPah7m2caLsoZWa8zyW6jS9FGW4pXCPBB4HPFVsVnxz",
  "key4": "gRsWU1tvKiXVusdUUgvxCjDsB5GZmJs3KdkoNHrUQvRMDPRUuAUHhMcdeoZF2wfuHqWERhbwUuUmRxxs1T7EBh3",
  "key5": "2AsBByTopb37CKAauXSo4v8StMM6NQF7KJfWEhh5gwAgW4VnXtEQFseXphH3q2UPpWJuqtgKXhqaf5xhPufUWEHY",
  "key6": "463Qv9wa5vVs9ggTKJGVA1fhV245GfmWwL2nZoPipS9oP8nEFnY6jykAj4RRcTypLw7r7tCo4qYFhus7cYXxtHDV",
  "key7": "3JhU2dCz96gHBRcVxeexcnJvLT2bsCA7SLu8aFcgJ2J5tsxw935uhmVrS8XBkx1VpKreitcJprek1rXvcJm61prR",
  "key8": "aNJ1gEh3KgtCCYfvsyLe9Eod8oBp2BdesqXvZENuJvGKid4yEigbWDWFCVgwDhaojKRbHXM55T5vsFhQ9Y7JS78",
  "key9": "ZpMUL2ixJVM2wujFAxYfHcK9yKjiTrqTdtSc2PvdRXCepn8xV38JmiPSS37BhLYdkqLMQC9q4pi3HDAwUkD9uUc",
  "key10": "2Xfg3dcDASmenqLzFD5n2qmbLQX4Wzz2ydavn7FmbCWDEJSkAUFYjAwJ7TqSegJYN8Z7gQJUrBjFHBpw9Nag6BgY",
  "key11": "2o6xtm9RoJ9GbdQTtk8w97qJ8Qpt9WqBkNJR6LctdpeihSxhku6aFkKETxzjkNJFFPN5z2McTKRUTzGiHWgT95iQ",
  "key12": "37rYZSjkPDQKGax6ciiU8mD36qT2DN6WAo3GbBz9s1M35pLN4Sam6suD1Nf7rcyfxQWvZK29FzqYC3UQBEDXg4Sm",
  "key13": "4SyBzGgcLaSLKYhNYHzA9PVeMzgmYxf4yKV8pjvS3aunVFjjJ4HXeDmSWk2bH5j8vHzcGos2U4WgwSqQFwgXac5v",
  "key14": "57Bvw9ArV7J6ZzoHy9rbqhuMpYie5797Np88BBm9SQEyEnwZYBjFYTfuMVkh6ezeTQGejdLjpXzsuPrdeQGMkHw2",
  "key15": "3JxmLyseoqGXeQP1xNYAeW681PwCR9gonBJVF5JQu3NVHuZcrSepzGMGmvVgbRE16pmYw4kjNQXZ8JvmqRR76m2c",
  "key16": "SdoTEeeEYGtnS6XrD1rHipuVnpM2X3w6eJqTkGEWEsj8SJYzniBPi7nM5gFMz8YdWB6L9NyBDhzav6NMCV3VCnJ",
  "key17": "2FEuswF5WZooFBNPWDu6GTW7AR4YznpDid6ZphVXFjvv8hqhHabcFK1hqrMtyHmakQdR7hXzrYCBZRhpnyF4NMFK",
  "key18": "4tMEERQEe1fWMwSq3TWeqpgrtKQPeXsJN4vpMUxvcjRsQAKKEQJJGRdamtYzcg1SC6J6N5bRPVFnY6oZGmvrfnb2",
  "key19": "4zNcxqoqFdmEvZPRthyqy8iDE7XzyKjQ7pKLcuQss5yCVrMaeduHW53UevyGL5fJeaKF8a9UjQWBQefFSP57TmM",
  "key20": "3ugpR4zvh2BcikJZWZ2MY5LDDSd5nkgkznSHGaF8EZvqk8FUhgLYqfKKkwLoiX8ZJXGtd5p9rzxwvvw35HJigf1m",
  "key21": "66zQxMhc6M4i7j6g5XABqc6tRm8cMJeynv2SGaCgX6n2YCR6CESu7pGuSj6u9L3LyLzimn6rdaFj71dBtq9r4Pk4",
  "key22": "4KiY2Vz4j6dx4PSrK53TEEcHwXgaqKQgUmjorSQvhkYFoNKsvZNszmv3oUSLbJz5DH7zmU6SEw5NyuR9XoSPTTKX",
  "key23": "5KpFnGLpUUK2oyVQ3ipSqKV4NTV3rxpDordrtLDR7ThbLukWgE8aEjbNuPYhYcmTzS8PgQuJrsQJnbKwxq8rUqtY",
  "key24": "gmMRuvsmJzksq65XCjFou3zp9kWNQAdFAEDuDgSmzZdBEDbfMPaYGscLimdpqENHRKsoUEEDGycmUZng6U9wkoy",
  "key25": "ghNee6h8kfJ22mUrsQVzu7Ncw8Vs2guAq3a4VKAptQF6C5czvmWnV5UneB3SLvhtpBp7B2mxzZRvjLRvbg4we4Z",
  "key26": "5KBs5wZtdV15TKFfZN4c7Vx1zPjWJyk6QAD69QkDwUctoKixYKSDjLBbtHWSo2RKNBaVpV9z39KK4NgiwqVnvVvs",
  "key27": "2zmg3oUTNeLmxbAAKHG9wN3fDDXNmZxW8p3F9NM1M3aaahT24ZFyrtQSScCuWCjz54PXV8gJ53KRvGzwepoFgymn",
  "key28": "4y5qUNj82s38UURKrGW5mBLapieAEVJGPsTELCopE7ofsuThpVwEBQogpDgWwNrjV4sbjVm5aZ4XrR7FDiJ4J13i",
  "key29": "5sZuXdxUFQGERBJbo9yiVmg2HMPc8KyBhrzekfAFv9XEGzQHRRBtmRCLB6mCwRdKAxdEo4jjpx9C63tKcUTFEL2h",
  "key30": "2XYgvVYTUoHZAiEbfQvoJFXJoqJQXMjea9oKABTAF3sfNxxGBpkLbvuQEixySEZufKc9XQdJhNZnLgFW66usQnZk",
  "key31": "nLUbojNLM2eNUyrh2MYmaQjHbTzYXK64ikhHL8VxCj2NFa9FYb2VgHRNpWpT44RrTJaSG7ZGG3uL41KVxCgPyfq",
  "key32": "3EQe6TCNPEFsJVLx1MecjPz1D4CwgLYMEiQEgHcnthpHDaY3G34V71b1YNCVzb18NC96p6TUw4pKAaVBxHxfZ2H2",
  "key33": "2aZtLs79nhmUtRV4GKa4jBJX56uEyH7epk7jkmFngn9UR6w889uupmtL7YY31pgXXSm7i5dFqGmGwF82rJMsKa9E",
  "key34": "2ExrxqidkNwHjPryQeJ5ta9qmWipEePpCN1tXG5fBxuhfRDy5kATAS6iCtWsJBGWNxmjZvyUSm87UuiVmSnD622U",
  "key35": "z4pRXSAMWdmV5DPZMgTKkAHXtRRbf5vCEw14gbjKWqapAmnYy33BKPK7N5Qf1ohdZBqmbXFnRNquahbvfER31Wz",
  "key36": "uyvvHbpcKmtjuoqwJoWku3LZPBbhbqCqM8XVo6sNzrGe3AQ4czxpjWAcPhinzEVmRb4zrfVpswvzhWTXPDvDSEa",
  "key37": "2L53FSdHaaZfZvQCJurQfgr51FB8868MhT1AVrCUJZ5kC221gT9Z1aDCXqbmB3ggq3UFWCHRn1A2r6pKbTBkkZeK"
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
