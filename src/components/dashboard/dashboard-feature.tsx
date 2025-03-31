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
    "3Xu9bpNM3VZKwPnBecFXwbZJQAnLymkHvvTSnpimipizdKXMRAgrCauB38Zt68STHfifhCBqhPgundzgFfHBFzTL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HZ5TFwU4sFg7NfCbE4i4PPJdqFkBVwmGbJczhFD1KoA3W12jBfGUA87ZfYgtYJAJU5yaUGFzt7WtxeQGgd9DXwg",
  "key1": "2vEeWEagmuDWJCZNqWkv9VxsV6Yu7y2MgByKV21kRL5wnm1qdY9m1gZDBqoWwpWQb5hqhzfUnUYB1Uf5BiDC7VHC",
  "key2": "3864qAT9grZGZ72oMry3N45oEVe7phZcoG3aoZjzgNcC3GwNeGxuwsNyNLMdAY1RtdfpgJU8FuZgp6HnMnZqZkkw",
  "key3": "5uKBgEwmitqEEAaGrvfRRm3GoHLJvKBbyw9zQgv4zCQUvCvnKEXMpULGxq9o6TDvj2Ur44aHrZM7kofSwoquqQys",
  "key4": "wxSpvowganvQXUghB3XddZQtP96BREejEZs856QQDHhdVZDAcZb6PfWMur5ifFjxqxquVHgsjuNbxsdv4zda3id",
  "key5": "4HEzoQRCXxTVZ8v6MaYhSwCvZz8CTSwCayjQQbLwPHvFz45F71pnrnb7CefcUVVwSejYC9zuZ4DqAWLbFVPvPLf3",
  "key6": "3yHouBXBn3hE5vBmcD6T8y4vC2VrbUB34SPXjQDPgGQzFDDwUbeRWKjvAvM4GvKMYGhvKwsKLjtHDdy6FvCKrXvY",
  "key7": "5eoEywhqo2jCZFuZeYwN2YTF8VX3kgxpUK8HQsFMsQeboS7Zv6NTgF9KGYEDYTSZ8WWXGDDoEfWvCwyWeSHYiLR6",
  "key8": "4jAa5T6qxi5xvLB89QXygFVd9uKUQkMydoYMfn2x5WEakX4VQjpXrmDqSRR6sf8roCwCmV22dgkNNvDVhR1ehKsG",
  "key9": "4HoASiNCyooyA53HCAzv7pqJ9vWEDjoYQwu76vvDH9HP1GLGcYHqJA2ZCKQz79sgBuLWzPDJZkkunTwtpxeWtMkG",
  "key10": "3gmxcnmPfp1u72MMEhxQ7viJyrdr6F9Ay7TziVuhcBn3jVCE6gP9i7wG4E7wh2fdmVwvWApG7P1qaQ3WGAazZ3kw",
  "key11": "2SbZHzmst6BXW4S9TWsaJomToFKkkt282zznYEBzLkip7yJ1PJicpoLiPswKP3WJifqoMjM3SDHFyfif1a6uaDJM",
  "key12": "2xzh3kM2g6BU4eN9sn3wZdXzMcs6AgjxZA5MQZxujcx8cvSvSvQDJsg7BoSVnEV3eJzCqE65k19mmaqdJ9WdZyNb",
  "key13": "Tofyfcqb2iuDzz7PYP1bMmBAkZhhEzRmNq1Ax9vz1vbGz28L1AHun88SwULpJnHRZfArLawbQ6cTbkBGMkMZYBT",
  "key14": "3SAkmFixKM8weS9YMT3Q36GeNZLjR7FeCZSVmHh72Gn5hqiGhHVQy9LhCr9zXEUTPJTW5G5NSm9hpdnBhraggKer",
  "key15": "5VNkdpnnsqks9EPCKPumVYVwv19t4b9UeaynqkPtghhH8oCmUgDy2gHGCPYVPgsMapgpuq9JjQL9fGVUeNbPJeuJ",
  "key16": "2XXf7azMJtvR7cqQMdBYAfHQn4jBt6YXsL2Y6VsDtfNizcHWxoPyHD4zkECuynA87yme7C9hBoqzQKLTwJVjXziA",
  "key17": "5WNcwrqG2zXHfXSmwJok7XcuHmTLKd13hyNS3bZ8xgV9pqMB5bd7AmW1gofmYFnsoKS2cMZXzKBycje9gRSf76Rh",
  "key18": "enGCYqnku7aRm4z5KGCSaBCdzRxwvsctr8GG2tzxpjxJaN1e9vbTuCJPd8E2Y78fyLqCdXTf3Z9tM8C886XnTEW",
  "key19": "2yTWB8nJF64tPt21VQwsfZb4F66YZTjXAdTRZNb4cr1GAwXSs1b2HTSFvoSrjW8hnqMZqxKJZUHPxerjESgpaFEP",
  "key20": "3BQ7Zka1sqwKyqqLgsnGDYWNrJyS6NJGB3Wu43ua7eBW8WsDu6YBwAAGFGxXareqKPEF6VQTEgAPYxbJrptPTsDa",
  "key21": "264wS1EdgQDhcfXwnbJKo7MxG14eJ89F6xY7ruD7mX7AcyZUExHXt9h5aLq7ipXNcJLjpofVQ6A5AGQ8WsXUQtrJ",
  "key22": "5TuQJGJZ3xRP4MydgvCZ26sHagwQEKunqFfLRtUUqBkiTPvMd6w8FiaiLRZCqo24QXsRYhJZUgYjfSoU7wzWNnS3",
  "key23": "4Uifzi2RxAxx9mfjrgFVJYYLKnnKSPSKsUxsd9ynSWhUAfbjJ2aDk4Yfks5waSWSE82YLS6PxGmPMubCScg7ZUHX",
  "key24": "5Di2xYDEGvPoM2QQKnzrMV2qT4KsaExvhpSSV1Kv1G4etaLEZHHZJWHfU5feMDX44JQyM91wzpdBHyWKQ5HnFESh",
  "key25": "4L1E4gFZJj3A4QNjEVQa9K99wGwKmXBCSVFJb76KRTTYt6ZpZMBTf7GMaYTDDXuyY1LQ32VMZjNhULGqRuM9yuKj",
  "key26": "3YDWDyF9NmSUJYRDUAPxbwodbW7QYKDkCbecHdomqGC7wnT8mkmM4tt82vpezCmxLxiGaZQZxXWrJaZti4jKT44a"
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
