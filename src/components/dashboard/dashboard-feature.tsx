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
    "5qjsCVahbuTpgFH2QPZqqNAJ7dAhmThnsZZbTjWVrCGKZ5avPaLgPUkG7rgE6aUKJfMj4QQf5CPd1VrKVN1cqucY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a6sbdZgV4yEJnx3s81RZQ6nZBs7PpWBzrANV5kfDF7VLaDywajiUG9Bk4ThmGy2tQMbeKAu5z57doRpEbsvARoi",
  "key1": "45ie9jVzaDSJw1JNzJ6vdo2ffJrRe3RWHV8pCZ6Ukq9LUzjFqFQZQCdXdahsKdMUcCogTmmnBTJrfcMcenz9WU8n",
  "key2": "pJ3rqNPnoTQ9uWeY2WTr4odFwMn2uwKKQBCQS2uj3hLMfW9vqSqdk79RbxwaCidj3pdHswKQeguUYyX5pvZvgyc",
  "key3": "G84pjdE5DdzLCdQfdKvAm8SWnnmNkBGQjJqacEjCQ1ju2SDu7hwsiDjEsUnr7iHpdVV8ZdV5GCKcz58KLQhtev9",
  "key4": "4SGR7Gik8mCRsCE4rtcDij9KuuiA9CiecUucgQC7qqsLmQdk1XbbAPKYqM7XYsgq97EdhXs6F2fCuvm5tDw9SrXg",
  "key5": "3aTskf9LFpSGajjUcttM6b5fnGrDCZmqVbqmRsARx8vM6m9yVNT2iqbGkcMLauKrNzyJ7diiYZcBh2yWEwL1jsRM",
  "key6": "488QBMs4eRwKgU46oipSvzZXothpp88r4DzPX5Uz2XucTH5XNxHKg4JgwM26a8fKaH5RioyxZqZjNzocbN8snhLE",
  "key7": "2MhbAB5Lmk3qWbAPVsSQUB3Ldkc2rsjpUzXuCpS1hziQsUo6j2wcqTYFuD7uiwmYBAirbNLHdvxw3uXr8N35vs5R",
  "key8": "3qkLCPHB1u1axeVPhddF1pjXfWQmkWXd2GdUnYihnS4FWHhea5JkDcoRzRuNPH53mL1Qbt1Ky3bCwHroSY5Fryuw",
  "key9": "4Shcgvo65WJcRDHV6vgNebhBvhPSezvp9rycyyn7fVC8nnAXWU1BXs9x1QE6d6AWXyisndTZ8NQ38u7qUEFWnjuv",
  "key10": "4q1TYC6TrKp7LbdAyA4ZWtthSn9JNrR6UuYxD8dpBJBWrTmCKKpxiseZjGcWzJ8jmvWrh9xPuadVxfPjDqx97tMY",
  "key11": "5xVKWftCEPxQshxhNYhmmzfegAMQr9zRLjusgCyH1DAfTCZ6JpW5xpi1EXoQaKgTytbGrYT4WMteh2dvVyqfFQ6k",
  "key12": "5AWZoEkNqPJ8AmEjTnXmHC8V1fLhEAXJohaLEWAEHc71xnZC6Qv4GdWg5KP9vzgAUe1HKopHsPRz6qcw1wNYCnfy",
  "key13": "3tHAYHwBYXESWedTrCHjRcXe9hEXnKscTVTRXQh11ZcmgSMZZLeHCbTz77yFr4wbD8xiBgebToVdcWN6KQZkwhoL",
  "key14": "5zUBGrwS13EX5mAGrET6z3sQRsz6tU7Vzs56KyHFKq84dE5ZDFCjBv66FB9MocwXq8wTHmekb2fGB4s3Z48CtWuF",
  "key15": "4FfyCqxaShfiT4ysTYB63N66qteUUN8RYhwKznoAyS6cfNrUNyDZ78cPCUALLxXXqc445VMyAG3da9EoMDZRJBcq",
  "key16": "66iKzEKzBW4gChytebZHT6MoZG8QGc1mCJLunL5tT5PNGqbbXDcLvH7Zsiaz4RGbCcq2Y2PQdr3sPCQtc8UQUL5F",
  "key17": "63Gnuwju2aF2vsZeLSpzKGwGe9AKuSzPJBcQxfbCYPUnbVs2SZ45BQuqMYwwwQewJrvUAXZgK7jqybHyRjKUgbpD",
  "key18": "54iMX2FhVv6cUh9LXi59yPuLPPSByxd3uue8S5yuWtXBzmawcEQH1cPPoHVctpFGYyovUFoXWAnjGUhKKF2Zm2ct",
  "key19": "2ZMcLqffxh9YGNVhzr2DXaNyD9t4at57EjHtEdMjrPhevewbBaj3LomE9ghbLNttyvu6EocZCDFW4spkMtibVPTE",
  "key20": "3Pt6BVqjEGpcVi3oXRZEbJBQqueoq7ysGDLNwvsZsT87p8JVbX3WeSS1KJ969dKRuAxJRGgbJGYdmoHyuXTffmu2",
  "key21": "2hjfrgeHrg3mSG7eAs2mAQhCoHRuJcCjkVY27UgpxcBJPyoABAE3SUmwVZUAokxPxH9Vi6naT7oancNF3bPQXn6J",
  "key22": "3xZ37s3QvrLav91XbhptSkTdaRnW7NgMFEa6mPqvcM8M9Vg74JPmJHRBFZpwoJFrXawemqzJM6qhxfoMJkidsZV9",
  "key23": "G9iQ5urwmCjXgcuptQozDVr6VfqeKxm5k5rWBNVrhUYPezrFspoNZfMDUTVcxg3MUwPBun65Dvv8FYh6uqdLiKB",
  "key24": "3P1A3RPfopG1axB6exWz4YbLLXS9PGVGG2Lw4vZBtLDLwnPXvK8wgDYzPwjcEGqGKfLQRCA8tXxjuaoA4EA79Mdr",
  "key25": "5YY6UJWoM7zYyLJEn6uqUr5TnN1K2PcyhyYLC1xLwYCVQ2peV34Z17q5zH56TQ1mXZJzQrJQiY15SM2BTknSoX1Y",
  "key26": "3pCiAWS1bPTsHDNH64JdKruxsdcdRJKppPr39CrvUbsC9s5KXsUcFVDFBnoaxhkAzU34gapdJ44LcBQs5U4QjD5L",
  "key27": "3wzXPg8cX9vMjVavGYSJDoW1yCPwiAKUbioq8DjfoPkcKZ6EFhCMhHd9g9Hzy2zdEvmC3daf7MrqmwZuu4h7HcZj",
  "key28": "5DojykYAj7gGQt7d3AT4EG1vusGB5aSYs7RXK5MTHE4UVsQPwdcvN7H6euFPEKZckASrw6M6pr85jmgr4vquW3ig",
  "key29": "RNDmuLhiU8E3CCtTLWHTWEaF38UA1Y9FAsrkpSJsn7Z3rkoB2jjTvHCdTqkDjnYS6CM9sPdtd5qK7vykTQuj1u6",
  "key30": "3p3uDGPfmJTsCfBBnfYWJy5uAiwdSb2FaRsb8Eu3jT9WEcDcsmj5vG6x8miANv8oHdfY49Dg4Ks71Ty6QWNU8gWd",
  "key31": "5SafzCx5cUZCu5pTTLe1DkKFSoNiXnqUQWzBkfnMK8zNqycM4vyvsh5gBk7RnigcW99hK1nyHAuUCoEdzX4CyNAh",
  "key32": "4fnk7jvAjFS8ActLNtUqq4EsjHaqnpmLNR3BEFFiFGct4DfPfHcD56Coykot7hWv4WxnDdaefNDUtLR6qQsZrWZS",
  "key33": "3CxCBJVAG1xJVDYgG9t8fsqB8z5NWUZm8EZ8TuDt7v8j2avoQvgEVEP9tYTcvrs59cacWbCoHAMZa516hjuyBmA2"
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
