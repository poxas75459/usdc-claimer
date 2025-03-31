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
    "39cw6pisrQ9TRVvhGjDPJF4k3vUZAEFvqrsLaWbZet6PiGVbRxRVyzvMWWRgApEo42HX2U4nKWHCrc8WAfhXNgeJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BqQD7HScAf2LGrWn3R4jf1uwFiyHn2AX62KrFbY8GQLUkXZ2VtUqbuLBzpJQZJfPHznpiBXHwTR19EMKZQ5QVY1",
  "key1": "3xHWpvf51dnCSKiTrxoPYgHxmgLiMY5aM9W3hzivBEMBrzUXMp569VrbkWR7Pdak43Zdnr6vzcDjsvztj5zTpo65",
  "key2": "YrHjgcCjpd1TUmcTsfrCqrwMWFndicXzqKmWQEr9jVvBJg2RiadZEhUeneyP7oyvJSNjnb9Lgv9mhpfvhPeQgdj",
  "key3": "3ehoghJLKK9wF6oE2cqkAYWmdKMU7LSw1XNHWfAAkZFwP241hWFe4KSyUfFU3PrErUxwpUq9iBAZgEYTHvYff8i2",
  "key4": "oPm9D3XzQ8nH9UXZ7jc3Sv61GdpT2TZNAk9ygaxr6BzEwoq2tN1pzLB5JFd9rX8CGBArwgNg4kzGhi79jsUAsEr",
  "key5": "2WojaUrW8zej2FVHTUp41dqgLfWAJZ2tVy5hhEdMnVw5EdyQJRjYrZh4oYsfyhmmSLumrLoS8doZ9swMgxBr8NjV",
  "key6": "5T1SRFGAHjMDrp9VkZJz4spNHoMY1c3XyH3hDb4myrWYeknECGWvwzp5z3SyhTi2CPDerLAqVbrPG5iee9qStwog",
  "key7": "4wNafzLmeGa39iAc1KijqzNq1FXRqJ1F8XoNRghwwKjrZggH4FsBPJFiPqx4gSC4cUYHjWTgtkrpkTraGo88iTyi",
  "key8": "65S6gYoNEgsSTGXJYD6MsMNeWr3LRY5JN9jTDmf5eSuce1btaPqhjwRMPiw3SEgnfTdQSY9RK99Qe4HmDSTnPZLd",
  "key9": "2NeD2mT3NAX54cGDkAr8j3aANKiix6L9b7dcmFL8Vz99fpZbLMLKh9HG4M8jZdye4uu43MESovfNstPv7MUuHP2X",
  "key10": "2Sy2H9egL1uT6zX2a3ZsXVGhMz7fyKTpZ2VwQjzvn4sNwRneuBQxBS23vBMTxJM1bvMjth2xbJbQiQNYcBVPTNVX",
  "key11": "qB8QhpzDVWUaQu5yrMMbPx2dWMQWRJBK35CGRuRzV5LhNACW29qznmCU3Vpq6XbFdeUtiPcKRFy4ARBrB1idXzs",
  "key12": "2nLXvzRyWx7KpwNyxrsy17oF3V1TwTbJEMfwaLjUeqbq5ri9DGYtMtt95gdQzJesqsQkJfB1b6Awmb8T5Z6KyP68",
  "key13": "5o84dDo9nC8zCvQ9hFpzqUAK2Azri6VhpyPX6cic3NYZmyb9EBbcye1iWdV9owpRDp1Aw61CaeKR7fF9GRoWDQQW",
  "key14": "3ZeXJiuwkKNmPa27Tct59HygFPgyUmPGsrST3j3W79jJAeyxSDJ8FJn2h1RhBxbL1RfNt3F2vZ6PXeQU6GsCZ9zj",
  "key15": "32Ak5tnRDv1bbxDhdKju4d9GmAX1CmiH1CqN6tYs3NDDBgYzyzxhPkSRNXvHNfemm4wEnGesh9KdtoVaUyon1YCE",
  "key16": "2ULmyvx9AbqpFL3Xifmzh1PxAuHdJHJzYFCwsoQBhWDYAfWF8wa8kKcfN3ojzyM3w9UnAB5SBmCP4LbSJpuKqXsQ",
  "key17": "3KJbBKMXXM5FN2hCaiCjMTkrGD65N6ggV6Y6KSS1wRX14wqPaLDGt2L6DvPp7QVq6NNwNMoS8nttSjCTyW1k1bea",
  "key18": "4HSoFL8F4qWQjD6ThZ7MyZMC3LMn2xJ32TETiTzdepVLGqaDdBeLee1kzMCVVz7wSD7ZEfnfRgV38di79gapvnyM",
  "key19": "oqNqvaNk7WUCsqNA8F4GXDcVKQD8NDz22zC4WvD2JJoWWFkHSAMjDbLZwPXYq9DaUg8wipuQpr3SdNKGSQauWvg",
  "key20": "4GmWJpUR46MvNy6UcbLYjLXCXW95QtJbhvEjCe2xqfpGTV3kvWA4qd4oKJe2F3ZZbhCVu85mCWgudBpKxD26d9Bq",
  "key21": "4oEoVra63sPCcaQu9wgnxcfBpJMgzGDwX7cSDQy3c9ow8E6B2DQfYjPSKRVS4pyt7WpBmHNmEWbYVGWQTZfayamG",
  "key22": "ZDHxtSw4Z6MjFHqajuEkKTQh29Rp3rowyFETvz3qHvh2BJSQS5zKWP8DNWdZVVCTKBiTs6aXmEVZvGdkUEDhBAU",
  "key23": "21GgQ7tPEcJufdj11W1ihXfCcoRZndrkBHkydFWWg3w7MsovSQUzds3MD32XPJvA2RpDrt6R7eTD9VNW8HYVChGX",
  "key24": "44JeDT1GFQnGyZd8m25VJ5WyxszqSd1MZ4b2euG9YyV7PAJETLrfXEXMhSS9cs4Weaoj2MauJ7knLYxQN6th8evS",
  "key25": "5g3rr1jZNN6CBTfEoL7HEwbhGp6RBoyzLx3zUSdwPyXKxtpCRbB2GgUqr7HZ5mqFZfns8F8SsNyjRYPAEMvW1rHB",
  "key26": "5KPxt99t96HND6sgCR4QaNwpWUmvev2tcLKC1CTr5Vse4crRQKEa7n737JDmiuXx1JwtVoarqmtkuP8c1LJ4a7yT",
  "key27": "4WPHPMvNrBQpGJsiDHAcL3FYnvXqMHFdix7nUdwDDpYBbZjuZq4NLyUNoGFWMit3VBDVaxfLiwS6A4mC58vaSsMg",
  "key28": "o4qnYN9xnvXdYofwvkieg9rTVEocgjtX7T2GouEB9ceUc6tiEGctU7ozxehj6qaUSN7iTTM8zKBh1YxzscpwPwM"
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
