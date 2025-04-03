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
    "3TpzJnhrw91ohneyaAj9RvFTkdVAz96NGgRfMuxR7gGapfPxp4sx8g2TirtcrwV22b3TLRwoF9URK1fsrF3kXiiD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AopVhR6Fx24toGMu4nYZoprd1aAZXKUPDmMf1DNoML7Kf7RGBVtQyNn3TmrSJq8jvRDR3RKWNdNmjWVYWKgwTqG",
  "key1": "4rBjvg46PtKdxnHWFXfFvyjGYDiDbQFWhVZVRUseWQrjAM8RLYdy4ptcFViCapQAfJi4sbQrTvp4LrFXSHbxpvF5",
  "key2": "DQVicpe9sErNw7r4RbiKXo7H5eo8jgNA1UYg7QG28TB2Zo9FdVqyag87zZ7ci8uTkejN568GJh5Pv5HzjwNGjtW",
  "key3": "2zHPtBW87wjRTVXhe8KpZoz14QsVQ7VCVWWX5mr6bQe6P5bDPwQNUKcHQb1azVP8rUjXWgdbRaaM4P7BZv1VKCym",
  "key4": "4udWccDLN47ZvV9fGtpaJ7DLa9BVQBxc7inn4s5XHstjFRwmMtMgF1jSHqVww6cSCAriDE2v6y7xe6jJiwFCjgJg",
  "key5": "2D6Cf6S26YVDcddG96hJw7ATbNrh7tArF2SGSA15kKR2KBkZ87Yuabxf9GmwdC9be9Diqmb3qmQ937iYsJY8nbxe",
  "key6": "5LErv5pZsfdibUoV7EhS49Zhht5rBB8j2u5yyh71QQ7d5nnAxC9386Eu69kgUWtnNN7JJUbRAGnCwLXb4sX3nUEe",
  "key7": "4BmzrhN2y9PEv9KVhmkLSFsuoCJ3U4aSuHKUuf76u1p7yjmbTveEKHAeJrXADXPF9Vv36PM7FDBHhgMm8Cbmeg8g",
  "key8": "ar47z8j6Y7CNHnP7XYA9ikqWTwXimhsH3zQMR84tcZdBoo22WcyrWpCFcYFQMbw6zNasmmC7j5PL6wb7jJ1ZwwS",
  "key9": "2WwMkfSjiPmeMfuFcWkdFsK8JQvsf4nUH44J2FJjYmCrygXn9fd9Femb7i1a3uEZBZs6Z7ZMdVnfLLmnrnguyF9p",
  "key10": "5evyi3dfwsdAGXALv3rf5ebP4FqtHMFGZw1wQwPfEfsSc9DAApfjGbCcqKyhcohrCBMPD62t9Q4AQRpK88ZrpBkC",
  "key11": "3CLYFYbs4eRGLaHZ85YEC3PMF2jnB23FkY7rS5Mj4LRrFpC8gmHuaPsH7axVkzpf4HhtrytrRN1xFNcDw31ChVgE",
  "key12": "2GRst4VtNHY3hkf1CNXFS7TLb5S4Hy1hkq8oG5uMHpjiZ4pNLWL6JL2mWN5ZmftPmCyYE9swV2aw92zeQhRBC8u4",
  "key13": "mNgGT7vobAbu2bzjssA1Xz9xeF5jbAnh3XQaxz6dbb7w8eMcnzrYA6LyzzXZf3TkZFLb8mX7hmcddCJaxBTu399",
  "key14": "xJ3bFbNCbsKnFTguJUHtk9qPGbctHCJf7abtoJTBTFWVPcgxRznPSqWXrpeUAwLgkpPLKG4db2Xg1caNKxYAsyn",
  "key15": "2NVT6t9UhWWGst7P6U6chYTqjCwdCwjCgeDjWgA6QTdN1SVVd1ZMxTgZ2eYjdPkzsfHYnmFLPCQm5WVtgwU8x9x9",
  "key16": "2qWVHrTrMvrdhU8Msaze7MPaSAyyjGN325BoFk1w9NhCCCH1isu7Sr8nSi5GMUaRpTuN6begtE3Pm6NeAJ2Fq4Lk",
  "key17": "x6HpAELgFFE3kZS9qb9SdCZe2fpE1CCV8p9LXLBuP9d1JhDjUaGYqwTBd7er4Lp178nmaxhhAZuZ2KrH6XyPkqf",
  "key18": "3323NQQFTtvB5eFVRL9GxGujo6W47C4nbTkrrr1t48QhC94yEeNDLY9eVyuqcyB75vWq4HamgPZmVVNFHNXy2J1L",
  "key19": "2zd6Nr9Zfv1zj8uXNNobbwN1UMFZ9trdPvx52XUGgYaFvRT1RweL38A5EochBEkFqHhPLC9cWERAPFqXKuucbL2J",
  "key20": "3Qe9TjDQZnWh8LNs2ppDtairvrAFdDfh7mgN2VdmkDhYSigh3DUuU4kuNVMyfvA6ybCektw682ZRyDBfPFUpZYTu",
  "key21": "2gQEveFMEgyYu64EpEMJ7AEdphh2XxykXkCkopZxqQfuhwKJ26vALqa5D9YdDGGujzb1HDoWATk3o9d7XxNbNKR1",
  "key22": "4k9Ba7KPK9ZmghhgeuP6oA86xWmwd29EBxsaUQRqRwkbmaJM9oYrXir9K5kktzoUiAKXeTg4KGEyZp4dygYLqag5",
  "key23": "5Gn9A26A4eRhTDKRA2agUgbZ5bQdiyfUmZeQ7qhLQv3xWfCt2e1ktEoPNP3EKEtvoFjcEb7r7VjML86yJwQNMwDu",
  "key24": "4BLPKYT9Dg3GHuHtjjWSxWQrw6W7Jd35G2qWmXoJqQqixMxYdFmqQvRXfJjEungfk4CGJYbdypMHeU2b1not8HoJ",
  "key25": "3zm2FGGwNZNovVZGgiRP8ogQPtzDfAigsaSnaV69mxTBYFQqiukgutG5AkZghxBMEj3HiQPXGhCkBCoLy3vTSEUn",
  "key26": "YDGBAaZY95Ef4vZgTZ5pkcKUmAkY5MzSjmG3T4wSxjuLxHohEdyggrH4dDZjiUZvbXBiA3kMoD73fhy4iuAtZLx",
  "key27": "qUWGVH2Jo8fpNRMDA9sneNC74938vXdbU4iQCxkLo9rmGsVBKFV65Y9BKx4TTqGNMnvqS1XjyQx74f9qbqDMM3V"
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
