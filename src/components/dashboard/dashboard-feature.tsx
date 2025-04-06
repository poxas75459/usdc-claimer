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
    "5HjdDadiwZMFis9QnhKJLM9zQm1DQaDRayh8mPFRC7WEFDBbJWYJuLw4K9sV3eMcC6qBJZGLXCD3ebAfbNwbGwVk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gfTH3VkbD9JVgLaXiEQx4eu811QDnr35myifzBZhhr9kh81Ah6rGfMVbULuxtL9tvKH82vkyPjKtJAcLQvrXZpH",
  "key1": "YCjXMtPU9humJ9RpPLR2foJZqLj9TV1mfJXvzfSbqkAqmWLCba5MwWANoRXK7J1qimjQ6Qh3q3CXVGq32LyiQmi",
  "key2": "3czmqvyiPbfMnf7he8GHvod1w3ZVdYHsyyLPkXEfgnythQMqrmSFifdWy8tDJxGGvXqUdZjhpvXmSBfB9e7iWYJV",
  "key3": "5nX1KRfWnrAyhUTt86T4LXVw48ueyDQ6ArsJJscoQ3wQJHSTCXwvTSMq2pW2ABRVH46m6C2qR6Sf5MLXpbCbLtG8",
  "key4": "dfjGBsdzAoet7Hfi7G6qQTxZqJ3EbhGVVz6Erk8NcJWZrQZxiEPrQxpyyJkQT3HgjAF7styvqmQVPvSayAo8HyV",
  "key5": "5E3JjydMVUcxDZi2cK656wRnynrseE7poA81wmv94DrEzDUNnAUo28b3Qr3rMStKuAngYzPE4iLcpzFozgkU72DY",
  "key6": "2iYotxMJC2sKasuDjRkyv4ZTs9UvZAyHxaPQPFRjZYd56H5pFT5uhFcpkv1xmQWUnrn7FeZcTJDaqyCv2LhztYZF",
  "key7": "5fypckS8RwdV8QDbdQYQZTYf5B8aqWkYinuYFA2keB7Wx99PLvcWNsoCSxGV8TkyDWXf3Xs9ZmHHfA9mWGYnEHcW",
  "key8": "2UuMTRZb67tjBexzGAFA9b9erPYh7Wrh85oc273oucRzK9HyDFM3nkHEp7BLBcKTvaEfgTqcb2p5VxPU9XRzW5fB",
  "key9": "5m4pZNX9QzkowLm2woWAoZ1nMKr3FYmNSihHJ3NjB85PGxrg8WiftGBi66TUxGPLxxfVJcaRsJTRw4syoPBxMob6",
  "key10": "263LNaWJdyMxNF2qswyuxWjBD9VQjn8wpLPk6tD7omQ14jtgzWWVkLRYPVmBDwk3K9XRAe6seCGAwiQyqfVY6Gp3",
  "key11": "2g6HvoPLsgnWc21jUfZyotwDNmqmkk2WK7H9D2hQDLr9dHrJf1AZgBqATCVk471UU1RRd7jqsQS6zzML7ndYwjke",
  "key12": "ipn4mrSGGxDjHJnnVa2Bh6ZsW42bneHRt2GHFxMMai13ttZYCGDRwNyHB7nZ8HKR2dghVLmtc5mKAzqzz2ohw2s",
  "key13": "5WuMAVrHY9Y1FyaRrLvuC6H9mLsdq27DxSKL9trdLE7of4LbWQitvteEHZNjXBvPBjnYUBaQyj7t61nLfhFUQ33H",
  "key14": "4hHirN2KcAfmxngM2UQzp896yj1Hp7L14EeYr2TQKWJEg2vYUX48ipNaCn4k2jLsDJNSggXJnUqgj5xxeMzfCgn5",
  "key15": "2c8jLS1B4HLqkCkzitiiu25pg3tKySiUDi2sd1vSRP2QCoZjkgtkLvJvVJiEZoT8GojsXpqgkMjpmUAcNghjcxoZ",
  "key16": "2ZgXUMfU16raTW7uNCz8rhVde2wHLq4tYo3APoekHtfyGxYqejHx2cFXrVW1QeDjfobJxVAvyjWmPKA3GXwh8xMb",
  "key17": "67RbBGDERamtazGXVMDgFwanTq1io8MpdEBamjAifRzvtnYN2ecs8SUvuEzBBjRLwxcbyiGgfbt4DTAU4rhWWbwZ",
  "key18": "4n42i44vR8nusYmZyQNnkCtixpSJR9X3CncpDca2QjYkowt6bxSbpPmjsP6CjuXn6PVpQHU8LzEAPa8bz3eKNVAP",
  "key19": "2DQwB85YF3qyE8yogq2SQUUKgYYMXMDeWEN6mmRNwELhW2BpjM5dyTfa9rnzhdRpjb4EMUppyqwfoawfMJyZQM9s",
  "key20": "44tgbPLWwkYV66VbY5thV5chcaahFZMxEfkip5FKGm1phHyxJHGXj1zwZB2g8rpjAZkxTAaNnyEPEwGqRjEK4iRE",
  "key21": "55k2qqgkd4i4bLfEq9gUgTGRdJiwzjohD3JZHmz5eRfoLn7btqa5inxH86C9B6VrSS8RfBkQrcDxf5CqmiUbKeus",
  "key22": "5X9erWeR2bMLWcqdXPRMNjX6GDzeAQBd9FyX82Udg1M6eCp5zKJ3e4HAfnTUjom5gXRD4i4aJgEUfNgKndHrNvA5",
  "key23": "5MPeTSAGfdvT6vovtdyoKd1RVGj1ni8UsuPebfWicxCoRwszYUZjKFGX7DWdX1xNwaBJVo9D2jW2rLqvKeGzFuUS",
  "key24": "4cDJq9ExWkjnHWfz4w7D88pkQ6wep4FUhWqc5Gfseg2VsTNuK4HnHYXadFTd3jmwrdBnraes6C4T3SupAYh1J7zn"
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
