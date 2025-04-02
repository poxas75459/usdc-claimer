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
    "3YSUvkTDvm8BfZQVWwotVMqgYfqFvF3wap7DoA2SSBhFgn13YorgHytto7GYo9fSmGk2qFZSU3KcapymriJdKhJg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tPsVx4LpxbKqqtbrcWWikwvNWs8oqrYH68pNRvSLzxh5qoYD4zmzaXSZv6Hx1NBtMfcJn6GBNstCEV2dLPdLGo8",
  "key1": "7f1aBHuFpieJy68ekUFtjpF7V1qie5TtAaAmqY2wjfNP1nFo4cAR9fqcokeUjwHwrPZtAaNhyMF4BpbYi2jUvPj",
  "key2": "2nZgULooEo8NZbhMmAHe7RACg6FtQRXVQJdAd4fTEaKvwyjba1FTE3vKMKDyDz1P72ZWC27XivA8gEc5pihMMzw6",
  "key3": "2VXE8RfumQicCcGo4yUYmH48njAX7gRDBiKaoDJkvmRu4tNSFyeb9MGQnpfGcuPNUZuXjmBqdG9ANMhZrLXrLiWL",
  "key4": "4mCKbmK84iUmAdQoQCM6YA8brhvRatpvjNCLxYjLJBcGY34zE8JiGLV61yQSVDR879mHg9Crj1zbXAGevLUrvZSc",
  "key5": "2kCxPSwj9cZ2FyaxfpUF8xJ2snM8fmSN6pGH9oQXSZP9dBKkomQBVYyjJ71CJfFdz7v4y7XuNLfCBCtaf4oUK16k",
  "key6": "3vdovQg6YfDzpZ5bUjx5XaREd7fdT1KU1NEYwA5iDL6Dot6Bnn7w6WS1Srx8DoEmLDbZXMc8JQXW6gC88GjA4cNF",
  "key7": "UmPEu9ahY7b6DMz1TtYxtiY9f9ZVV67BwBZsT62o4E6vXx4kSCjfbjy85HpzP7WwHwMCHKjyQKDWmM9zcccqkm2",
  "key8": "5hEj41Ty4KpWfq4NnziKmdLear42AwFMJmyrEaC4NRUgDeM7UcXZt8MfmhAo5WP5YRVTDstV7Qd25ot33EsSFTvg",
  "key9": "4Bxf6FLYjhUWavyRtK1pXLqLdCU4petT5i4NJoUojTJjrJPGX4rPkLmh85RtmhWBSdTeBr2NDpNeUymnb1RLr16r",
  "key10": "Whg6WSpYJipoPAKYncoG8cu4CJ22c28mdpHgA89fowAExpHgUm4yqsHaZSmSrMcvjvy8scUDoUZK8J5CepiV69W",
  "key11": "4XpijoPG7fHqj1w8ortRehn5yMMhyo7ZjghC3wuBE2BVSBTVTz8w9QJMQGNRwP5WcNXtMdA7p2A3Wgwzwj6A2ZLa",
  "key12": "hbhYWyHqpHHqz6guKxK2WFoQZbaueAnZ74WFSeXLbSEzKhEEeiqiUcMDnzKNyCsdkBbzWFaaRY9paWzwWirggnb",
  "key13": "2VWsvooc2bEPRCPz1KHPxodg8yH6bZR8fSZWAeCUgT2ffUBQNwfLZj1SGjzYQt39eLD27sDSC5d2eARsbzeJ3bwa",
  "key14": "2Gr3sCwQVWQkNCsKKqJdQo2FeqCgxCFYKLHj1FVRbfGgrRZHTiiN8yLdYdTYguDzWi3s7WnYaxRMwcTeQvMeDU1z",
  "key15": "3xJyY2sNKcwkiixAhpGNeqii5XE9pGHH9UVh9ZUHM7qnKQPdnN3Z7J7LtyqRo9PtWjvXW6DEaAF3iBXKvJMDezef",
  "key16": "3F8rLdj2kLh56aiTw56iVy86qFScpMNN77oXUvTFJubWhaCeF6PH1m7DcdMsK7dtor83xqQix2NU56j3aDdfXXwM",
  "key17": "3zZXkmDFzp8qpBYBj7fYiRmWx3Mg3u6vnB6GHAtDoscScqyoQfkG6Q2LtQ6TUWtjZjwdMTzHaZwTNDfmyJab68wR",
  "key18": "45azhNXv3nwUhDgrdPDF6Z2sDWGayn3sDMBNNxH9tAHFosWmA9p24AM6LWh4cqGWzdeNKukpADRE684ozrRKCqeT",
  "key19": "5WqNbXjHPpVXigkfpMb62ndFjssywbFzuWqy1zQoCxGeFkzosHe4NFs3cnb9HrTMJxr6xTbdFs8WUuFBtnqRg2bc",
  "key20": "5ByonYCsyrXiPNtp5qiWSRL3CzFJ8xSAmhcXBzVuAm4FAstMZkJ9LXJn97WVLQ711WnMNe6kpWLREmXZPUPYzCC",
  "key21": "2bwu6uRnGNDbVh87kj5TFTY4e7HfVhiBfWuPB7hLvHpbZJdtQmP4ZbFX4k6nSPsKrZjYPCMGQPrWRHLAfY1aUhg8",
  "key22": "35rkZ9FS56DhGsGDs8AFGZVtFMp66ieDchbcM5MknXNV6a91gk29eonyxNUfs5BhXGNvj2pJqoR1ETShDBPW4iCF",
  "key23": "2caCXh4mtgiCEmB7zKtXq9frvT7HAPNJcEDo97tqwF97AySX7oqhn7BxKdrRjeJ2WL6vPrdKS4cEEvUDShacgb4j",
  "key24": "3DEykJ4ASjJm9FxqrhY4Yb5tHwY6Db56XX933GZURVVpN9D2ksQLi1V78mCjk9gHPhrEADgjdvqvCQ7HF7Ltak8"
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
