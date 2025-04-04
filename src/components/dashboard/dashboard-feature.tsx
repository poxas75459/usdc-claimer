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
    "4dkqUvq3G4yKqjVEt8ddotimtdaduCbRaHHHHZ3Se6d7xEpmbs1R4W2Uu9u36KmacP7qRNYmhxqwRCQuhAnN6QvF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PjrAP4wnJtRTtJQt532RAhh1zVbgT72U5KV9vJXPwtxvR4HTKVak1q3wEhixkGgGVfhPZnam8PzwrVPWfsvqrdB",
  "key1": "2e2bqzbWJmJdQdXsCq7TDSwh5xTwpAPSqmW1ndmHtxu19ABFXAraXG7YxfpASw5CHPQw9s8DmoUB7kRFzJk5AkBH",
  "key2": "63286fe4uTVnCQNTgkZd3WNrAfzETV3MgcRtWdw4TEsSWjKN7rSFojX6t28dZ4DHTNEoMCzAMa7noeg6kQQJT7PW",
  "key3": "43mbGxrct3b8PW2zqiPncqxWmPizJ72bnr7HK7AHStSy7QSoUUrDdyFA5FMM3pe3aypBhr86CchciXxr3FxtWNRQ",
  "key4": "4mNevFJxWuBx3YL1poxe6KC2tP8jmwMVfeFEwZfHoCvqGa8kY2vtGWp2Q9bP6CqKZkrCFsj8LAePqoR3xiDWHTkE",
  "key5": "4fPAm1JQD6nxbA7FjAXH9ggC6cWScQ26kQzhireqvNsoKhEUZ79X34RRFMnfuWTgEhsnxsCB2vXaqVmWEWLkAT9K",
  "key6": "5zY16kCnuWgbZaLMxEezfeo5HKsBqTJrnCoPqEpzrCMReia4H2fMWzYgfugpRLc3NfQecvX91xX7efxC5CPPrA5x",
  "key7": "2egfQTRA4QWJcjNzKWM1rkEQPfb8chwDUPVCdeT4VpGfwTfcPJ8Ux45GUWU5ynoFDMZBNFGt2stG7cD3NqQG4ApG",
  "key8": "3dnAFcQPkmJikKAuun1K2b5S2MyUnmCpzJVJ8SZya4EDqW8mntqCp5j31oATZEsJ6RNxVKnYx1392Ee6cnECKxKV",
  "key9": "5ujm2JqP5T3VJVtp7FfDS7yxnkh7AYtS5LXb3k8AZ7xEyvsjmaizxHw2paP4vEcLSh2wp2ay8KrheEXQGp27kXPj",
  "key10": "42sjQ9u38LDydwVt5EgLX6a4xcqH5Y671PdQwjAuJ4HgHSKFidxJFXzYLTa4qQSJdZDfd6d3hSGKk9PBJjgKeqpN",
  "key11": "2x22HSjhviLuRu3Fq8pVcH8timcLKbj6cDojBsRfD8cvmAuTsSpoZvrjWJ8BjjtoncqPJgvHGJrrxMXHCkUqix7V",
  "key12": "kFDu2GC4zGuXebSrs5GKXCoJ2EhuY5FKfiuJsgfpT9eMNZ27au6sAYcKwQAZLorms8KnMdjpXMb6WSKX8YANSgm",
  "key13": "9LRnVu744g9jtAfpZdEJ78NTVYn1CyiiESjJBcj8dMDRu3G6KdY5kL7ikrGRR4VW1ESm7qdk7fT5JhMcePoda5K",
  "key14": "3tzNGoD3hT8iE9DEfqe7iUwdzM7rZdKHv1xBQu2QcnqveEqVD9p2GdqMTxfzafq1VFPCGMZN5ZV8GYpg3QkAMoeF",
  "key15": "2gTVmN5evkV7evu161jYvDwbCUH9diwUn7CyEVypyMLEzHLMn4itr5XqmAww2Q15meu5en4q45nxjcpLwKTp9kiZ",
  "key16": "3dy52fEYoi1NpRJrHrCXu74TjgoZ195SW4fAabpKnmrZExLqpn4VWQQwKk2kjHVVzjy596Lb9bs4ojuAY2KaAPos",
  "key17": "2kRjvDGx6M38dJH7VwSQFngT2gjC6EgtTXS9Fawj4tHVnhn7CwNhWq7k4VcpVUCpNTecTpQSff6ARJMJkvLzB54p",
  "key18": "2w5mMaWdMLY16UqSEGUds92Zmbbh3Gv6oR5SxeeyN3sn9Ti7bmLuVVijReeoXDMPmJhDJUs126sXBFkScsrjoiwt",
  "key19": "2jAM3rWTNcn8K9zbd4LqffNHFzsQnWvy892ESnJF1JCyKmhhDCEcBRGafdWobFbqcT4ipCZHExTr2epRu2Cwsvhw",
  "key20": "uBTBpJfere3CBspbZwEcgp4jLTU38NAiZd6edWBX6AXgZ6n6ZrjX5TTufoQKAuecQi81HGr4M6fUtKpoXhvRuPH",
  "key21": "3vYxUzpNHmUvXXDBwy7UAnNqnskwv5ysbu28T29CZzjaHnmhQww2Bz21nuApHjwk3MiKnVrHDRPD6FmXJUU4G3Hf",
  "key22": "4Zx4sjp44F8FCGouaSvFimnVYfP7TLajrmUhNZFCJ9qfxADsYbcFaPr31Z2fakc4Awhs7j5K6ecC6iaiPzqT8CsM",
  "key23": "5wjUHwMTDBnvTnchjkWk9H8uP7gGizmca75s5dHmvVf7KGFyiWWXQ2Ep7iKVUZkmdta6hsP2jNXRdNDw6zCoH5d5",
  "key24": "rTGzJkrvYbjdTrW8A7Kt5ULLkCrUeKwCrsBFxHR6MgpKvKKMSVHoxEb7BDk18HtuRDeMjKVY2MhWdopJbXNiApY",
  "key25": "5K2vs24YezBuiYrsDYZsvSkusufaZqTGpomy3CMJ4BfFNxktCveAZ5mGeSUQos37AzUsw48Bo8swiDgBds32sFBi",
  "key26": "3SuwDp9GrRQpX4MibT8kN8kebwXUWSML21CkMjch52hwiuqDnGzhdwUmhCxsWH3uezqKPdxNEK7ZStfVjcxgzkJc",
  "key27": "2uTjTiF19j6hG4Bpkcwr1GcY2BZb295qvMBrFdrBAMq6tK91cFR4YP3W4AJSfLxhwJRance4kMHQjcTJt5YeGqFC",
  "key28": "5qXEj8a9FRdirTaWrqm7FfKcBPjeTsn8FidAXfR1hP3uHcP6nmqGftmX3MazPUn2ScLdnmmpgjrLSs2gBj6KSy8c",
  "key29": "KttYwiUTLoCWUmY4HbkZht7zrJL4CQG9VMZ9BT2VsESBcmdtjLP2HN8CQYhtHRmCMwJ2YvW3WkKj4HzaDTFVbQS",
  "key30": "2tsEKS9TahFDWLymr6z1VWZxuBQyG1htAfxhM8n5NYRk6PZWxAWEbS6wKtiTwMoKSLTWnKu58yF4N5ou95YgYKV2",
  "key31": "3DFXbFbcTPYe3Ve6tW11VpS3bH2q9zwnYg3ffRU4Hy8y42eTEczWjWSp5J1Liu1oXiU6Rs5f4UmrM4b1QMy6uyQz",
  "key32": "4y5pnamrqFGtntqA1gJZ4PFqWwTAEKUAGS7NdCzQBqU1LyoSXVYLsD6y47Y3u8ukwL68KKujivMUPvyYQaK6rBGd",
  "key33": "5Wm2m4vczD5AvMuKcJszJTBKm4YPtzw4XHPgXbqBnzZLAHeEjYkSfpVsxhhd24FTUjEC9ZJaucJj1HBc4gA7dejo",
  "key34": "52p6bHVMJ8CgLGLDos8Sghr11HpEfi8hGVDZWs4aUBDgdf6oY8AH6TSVsgwBorGGbHv3SJzGXQPsb58aBn1D9YxX",
  "key35": "3nxwerNQC4PnzAsRMpVqqMgVF5QnVpLHt2bgLHHhZN9tzAYxcNibaj6Pq9pm85uyBZRBARWNoq3abLtf9yvxxA5m",
  "key36": "619q9AzpjwjBxFwtT49R6jGnALfJm8jqEwvtcCSurgSegLQh4U3U44upFk7TCVTQLBSzVa74CRDxuoRaK6tby1X2",
  "key37": "3zKgf3RQukB9biotczHf6bmVZ8PiiyJsvm5QiFkrQhb5pyiNJSknxsT9272z4Nc8zXCBxYKZ1LJceMmBJ9i9xhqG",
  "key38": "57H4JfWJznxDJnfi5N7Z8sGLdpu9MarM16B7k6gs62Pm4jC2Td1fJfZ3fc2eujuPw3MVFimLq517eVLXbPpXkYqp",
  "key39": "4WeNqvirutV8nXrcKovvNnZUtLdQaYv1x9iQZZVLTLJokYLQesSQWkaPuiZBmUnaWoxdSmjaPBTC3d7YBDuhspWv",
  "key40": "61ZRhN8c9UvgTxMDb68Wvwr3vgYXn3G2LwAuBXxPpMTL36GoieFPCR779HvqciDhaNtEzsgCixBfQ7tUwrXd4rU9"
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
