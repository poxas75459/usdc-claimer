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
    "GeeSPkRExTQvMtSg2UGBvnB3nDTh6oqeTBQuCGrLPfUizvhrMfWG6LqSGqNhR6XXoJXpiQZKD45kzHPGgjxYgbg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PHBLSiyPop1UeW6Ai9WeTKqmfpKJXhDXrNv75GtNr45kxMcXhgXUkAXd9QkqBabJ9WWzwVZ1nop6v38RvvuXXGa",
  "key1": "2u6gGhJdoXFzaSKB7KV6qsRitX9bNgctaVVgPN6zbzM5eHSmomeDvZ5FYdQiKpHxLpftAXjbtvTUbzEMRCkXvxak",
  "key2": "34h8CoKzLrE8p8XfVKDAcWgrqLiPRGM3ZMrPKEJk4kXNLTfneNDhmhU6VyT4s9rp7huLh7Fvq3cu1JTzHvDTdFff",
  "key3": "n1KJ1DCsayPPcRM3rC6MJ4S3EMu9PZz4SGmtWXUQ1ung3iuk98T9jDXVhDKs3vTvz6CJFvgHni5HAaRwEfnBzzB",
  "key4": "wFqhGJXC37YFfGqu9PayAttehBMD4VNNsJf126KvqnyuuU31MZdr6TaXcazXnzc6Rsi7xRdgLKL6JYANiTpkviG",
  "key5": "3B1H2ZxuBSJyUJufkdtr5CvxSJGDtEG2kmApijTori5LtBsVFsexB7r69EWienFieMZKCFLtqBGhUoHLX3aBztBD",
  "key6": "5SK5rSMLE5upozq3gDVdW6j7bTvWmeWxgucrG1AuUTv7rT2LbZTiQKqzqYAi8jFgtFFBthpqYv7TQ42vZmRcyLQ3",
  "key7": "5yNTEJb6MUGbyqJqBF5mrWRSzWWPFnfiyGWQJW9d63CqMaGviJNbnttYCA3G4ALcHEm1qur7dA7PDm2t4TAnPDZz",
  "key8": "3ZLMcv4KGcn7Zb2ATMHPtLPhGAnNdoPu2aQyhtGAo4vyd5pUnK9TbXzXvB77Ck6B9XY18EHJCY7UJE1hPY4yBHaS",
  "key9": "3i5hpzFo3zHrEhVMxn8VUWqgoTLR2CGkurx919o1ZZta5F2ko6nehfqye8NJesQ1mpmhduUaSu69ZMWwKsQqDuF9",
  "key10": "5hj7595eorCvV86M7Y14s3Uue3EkU1aqrP9vb9Vmhkhu3mJAYqSi4W7wY4KNXsj6VaKhoy1EH5zYTcWACJmXyTZN",
  "key11": "5uR2upGPgmZUHmC1KwNdAwmMTSiL3G9mPhhGHFaQsSReVpMrJY71fAf322jTEp5BnpFNqxmGpGDWZrGXXryZkseH",
  "key12": "sYn1ucXXziWaCWsYj7ci99xNkVRGx97BeZcjDsQU5B9WWXqbB9qvsoEYovaBgCDwHP22AMAhEQs2W9XAo7ofmTZ",
  "key13": "W6gU1PkUNYjUmBidkA3oPGm3qieFZ6DYBxMt6P8yhLT9iwt88aq7NUca8MXffK9GygBQrC1SqUGYxUBDGFDh6Yo",
  "key14": "mJqP3c5oq2XPWJ9oUEQeDVCdDDrMWkz9BksAHDuqx78DjmqKGcPReTTAqZ1DSfZKqxCPNMRyxhWveSj1irjGQE4",
  "key15": "2DanDc2xQYhaZ3gnzvsbZpeKz3Pe3i1KPKGEfKvsK6YJGxGbhggbyUBYnurov2caB3PtkYaJXmFezh2RVby55EGM",
  "key16": "4EVf4jM2mFrkvyJ1CGSnswXXPL3t6zP5a4etbByc3uzyPkK9qS13fnom1uNFT7QZYYjajmdSg8Ti3EpEra8esRRb",
  "key17": "4ayVxJD6nafojFDk3HJM6TVZM4K3a1TCRWu6KAUjP1bneV3bZbYy85bBr6wgt68jqLgAtczGRqLqm68TYoF49Vfd",
  "key18": "59z2yoVFS4Z8339HxFhdCrDuPKXVe4Y6G9B8V91MkStcCWjjKuSxtg2JFqs7radQXYoYtuhRhgLFBkG8smPSCwDF",
  "key19": "LEoPVBn2c44E7nFvX9xKrtWyLwipmFzgxfyGuHEW1Rvy1GZPHdUAcKSVhvwEBLdvv2xBY1GEvHw4bLjGFCaYuN8",
  "key20": "4K6CWZPKNuDrKzpa1EY6L3kXKK7DBXKi3cNc85wuhkVrV2oZ4gVBhqKQdnVfHkqj3Rw5h6VuEx3k6g3fErKoh9rY",
  "key21": "2foZGcKgbfUgJbSMg8ZireJExHZ2PY1PXQmX3XtGNRMvHqWQn6bLaU5D1N6B7zGXjmvCe7yb5j3uLQVRR8ATeNdJ",
  "key22": "4syz67S644DzxKS6DP27LAhf5ykv4B7XPh16R4FiptRBZzAZq8PZTvZtcbaVq8unzccFq5kDkzt7FjZDd5tTDje5",
  "key23": "nXZgf9S7hXgabU9XKrRGfv1LQ5isQkmXzH3ukFJHyvfoeYDYLVcq87PVyFZTRHmf3pDa3YugQrtsKysrffNGAFc",
  "key24": "49PzyHNyjGTN677TY6NHYNMYu8GTBFLfjpoCFTDq7JhZeqHQgtmzhumcvSNihxEEMv5GscMXVyttx9BHssgLZ24V",
  "key25": "3QZq6VYhwuGt6ytVvQKeEpr3xAhuHz4NdEWSz9jiBZXArAcXSQ4DyCY2UwMDabFVyhbDFYqyEJ2mRSj5JGq6JXU9",
  "key26": "3rLZj5RBEvB88YjDnZF9maBJKNepMS6BWXwkpuvN6LuEdhzMhefa5R3AFi3rRJ7fCjVcE3n6Y2D6QyHTmDu8zSBL",
  "key27": "2MuQfmDEmcMaGSNdzfkxjkB3G913of3xfiJyCANbP1EFTYtL5Cbm99ApdjX4McokE2jZGubsiK9jrLnxD9Cobx5q",
  "key28": "41V7L5eMNguuhQMna3fPFH4v5yfrAfQBXeq1dQk8wAh3PbVTQrvXq3NB1wrR2ZiyfMHkHLSzYMQPkUkFnanxUeLT",
  "key29": "2o3rGJ8xC5ZM7VDV8ahkyQ2VRKHTmaxwpC5UUv4wiYncQ3Xsacpi1skbPSAsRb4XjLTLoTvrwmjDZDMkyaXDMaGH"
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
