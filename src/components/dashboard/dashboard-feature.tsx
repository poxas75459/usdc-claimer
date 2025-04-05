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
    "4MJRbX4KCE9iKEwygroEQ8QSbPLkXQjhQnDTRRWDC8bqSgdtGMEHDJ87mZKUoher2wgpredCbSAQJktft6n4TqH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LFUnd83s1m4DZKPiB5zfNESj3X6o3YQ2HkwC6XyvjHwXrZrmsCRDA5ELkADTWU6F4x4aqywTnwDVf2wbgz33Trh",
  "key1": "56jswueHBBQHvRVqb7oc6SB9wS4kqsJGVZdCbaTw4oESovnPD3Ca8AhvP6VzBXQNmXLFxutUuJFG6pLtBdnYBGe8",
  "key2": "33CqW8QJXJNNBY9sXYEZMWLCbwqXosejEKzatzrtqjJBVsYqtTaBq8T8icH2nZdyTwpt3PrrDZ5U28zQc3eEW3D4",
  "key3": "5xSPX4K8YEJZMSYMiW1pTEwwkmnK7TjdWLhJRoPMxCdGrpaPrGQdVyvW5ebJGthkv7NQFSfnMrAFuyYFKmFDd6pD",
  "key4": "4bmzpGQzUTDJnsB2mJG24pz8GYYPEfqAGjwbMqWt19WsBfQcv1LToznfUKcKCefLVU5jJrUEx1RMemRn3wiZVhq9",
  "key5": "4W7oLEZw3sndMDNNGhaWANmoci5TPy5qK3Rewc9Ro1u8RSaQq1mNZgQHaqqd36q6DVCL5Q112CnDQTY2j1D6GFd8",
  "key6": "3Ver8wq8mXTmmRrDrwjeg7bBCgZZm2eiQTKyq5WnRxDKefNhNT9rXPvKXBU1zhsshp2rmrKrv2cYLVKPom8Y6G9u",
  "key7": "2ytdE8698bspiypZ8Ay9KB6FU15kn6vVfqd32ZkuKE35jz662f645JZFLCRXhQ7Ad8GYiM12pLnxTdGU6rghkJDC",
  "key8": "5eVETBJPjbmpPxMEKo88Mvd67LuhfprPgAJGqbD4WTMPqHhCKXckcDVADE7uuYcY5fo3r3fMtGSeiAf7Bpd72xXu",
  "key9": "4YzpWKRfjYd4bTz2eM18WWjzxoSABpWeGbHMcV6oBYaTZq6Qy213V9LqpTvBaJtswfTXnntScem1HYvfvAsqCkzK",
  "key10": "5Zk9nLJRMuyDKm5x8iijfVQzNscbMtmQYvfnWjtujj43FdM8t7CwQfVMREsiXtYBYawvhEZxrmAawGgFLFrAtVyD",
  "key11": "di2AmdCcwF5pSHR5qWykhaoAKF7xDT63A81S6B1Dw5EEcL6NgrY8AG5LvesQs8VcmSr1CiP8AJsPgpekLjjUT8d",
  "key12": "5y7NGUrUHamRttbbTwStBxLg38T568e4abrSLsYGsekdoYjev1JzrrgAZCLX1TwwRj8Hcw2WFifQdujEEDnARhy5",
  "key13": "3UL2nodxPkmJcJW8Qm56RmLUyZBxkE19d2UmVSE6eYWqvK7iFQqwRmR2oKVHFfePTeRDmMptMgABujTcW3YpDKSU",
  "key14": "66kQV54Rfm7kT4edg4ABfWixZQSLA2rgzjAyq3vypVRktRYeouxKY3AN7dWmLmq52WJaCmF8Hpo97EGP8gnWaCt8",
  "key15": "4T25jbSHaPtNEFumaGsF3A2mZ3Ub2dSM6h9DDf1LoxKvTRJ57oDUUoHB9VzWbXVrVNgQqJRBvbNfyaegTPpKrfsY",
  "key16": "2L72WHqDVDSsaqo3nXNp6vPpZF9rsbWc8GZF6YGWNaQHxspzP2o6vAZhU3Naa2QJ51858hFie1SdyVcn8AummZLS",
  "key17": "5Pi6nGKb4yTfRvwzYq8LaVSeBALoBptPyQcFW8JfiDUrfoMg73Uen6B6jxaZfBxmYCe1Cz7yhHQGm1m6smCH1gvp",
  "key18": "4Q4Dfmmbh6EpRY7dMJXWDQqAmtpYacvfoVEBwpLKqZwgfFK137G6wJg46s68pz3ZrKicmhXcfhzoQc3gAdUMWqu",
  "key19": "aQ7V1LKug3NDL2TGMTGvMjeFAVCs9wC6BEKp2WjJJxLqTWqbYGDBrAbPLhyWYNGaSoHvfPcRuNdXLbmAQPTQ26h",
  "key20": "gJNzBDQHSfUhZ8iqpNiFAsPMUEgkMzeyjGqCdKrpaBzBpfeFm9jnbZ7k4sctQNd7jgZjoCP2LczXiEtCHYHCVhE",
  "key21": "5QY7W4UseZeSnPDPu213xdf4YxSz3W8j4XJ9QbBXC8i1otaDNsJzwcysFmfvF2ediKCJSX4BNxCJdzK4dZJKFzBa",
  "key22": "53WkoPecGjDTZn6TMKvdg8jcgpghbF8kFuqmFZqhSJmjyRWLzjgwjBKpfHn1BGrKegcEiHAXqgWoNv3i7SGo4U3R",
  "key23": "3K1gB6BAD4YYTqR7JjauwngU4BScvPJ59PEAaVnP3wt7fQi4CYxQDMmyvaH8k9zQfUscZXfp3fvBzK5jr2UBVzFL",
  "key24": "3WBDe3EEWXN9wVpPqfEu9FKT2ae8wKanpEnYpfaDB1CmFoYUTet1ngBRCYtZaawwNSVBGwLm9dz4tzLZL7KNf3Xa",
  "key25": "2xaG2HqvHYqToGhotFh1HvJVATM4tz7igdU8TDZ3YXeBgFthYYL72gFsyMUuAy5aWtTcyt7jVJSc5XAvPuaBxjQG"
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
