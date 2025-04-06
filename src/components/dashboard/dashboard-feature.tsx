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
    "usgSG8Gy3UmMDsfXZfgqFpMsurpXgKoqc7Uh5CVCVutMtY56qibb2nPckzQNhdXA4QS2oE4CDp38ZrqVmgZnJuW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "123cP2AT2FxVAcQmZhYfrMBPEkBU1zuvjL3wYKqem2LEJNsjFnFqwxhgdEdd4aANDMuwokzFaxG5gW7FdwCvxznZ",
  "key1": "3XEQFRnRDbZbLTG5gKBzzgw4cs6mBf5P3cc6cNWFFHoup9MuhVbbj9pTqNh5aajGr55rKcBkcEkPXPmgRgrKhceR",
  "key2": "9duXo3JAEbrsfotAVm6agaTUJnPy22mdYDRhJXbDKvKAbCcsAJug9wMYfU4qpyS7BK1CuwwknKpQdE9JY7SK2jB",
  "key3": "5rHBb1TE28nxsfK2Cgjso9THSxBa7tqwLgk891Bk9NF2s3UwtK3HCYq1jVTM8s3TdiCUeb38TsQWHWMzoFRx9XxB",
  "key4": "4C7qjpB8kSvFsGKLd1AzqLTi8b7HYmS5gDZVzikM92oa1ef5GjqDKYGYBVCW57LdGbr8CbtSyoK6UcjF9yK9VGU",
  "key5": "Snyk1xYB3mYALjDdB1ac53owyezw32R6XxHw2iS9QPUo62seVJ8QQGh9UXBFSoAfPuut5gPXSSd546pHJD3ivHx",
  "key6": "3yK6sF5FUMhwABYUSKQYguMucWP9PFZNZMrNRCH6zpBo9cd62B2Cbw9vjpYUuktVz1fxGHimWUP1gSVmdz5XaVfm",
  "key7": "4Eg43uQKMV5qsA1vML6PQ6XDvcvYhq9pUaRnQa4RuX2KdHRH1urQSGgV4rp5YCaL1eFH3VCYCJNhZrRFqaN6e7a8",
  "key8": "45YHc7ArGjuPN2J88pHwwTve2uQe2AvtxeLW6WgFCcFhAeM8fbdZeAtUEyDcfDYt3u93SaGzjNmXJkyjhkyJyyyN",
  "key9": "5as78Uv81HCir6BNWrHHjrCNUGCjWoLnjcdcJZ9U3RRnEDPpKjoRNmTusUH8Avsjjs2YMNorAHtPvFVY2DrGrN1e",
  "key10": "3dDLwXntiV9FnMqvwH6EnwDqCVG4ajEJVaGfncjaPbCTcUWy3J7txfUwPr5g48MSfwV2BxoYpDg4PgYgnfgArXuM",
  "key11": "3oXJCaCnyEZgcNFDjhJ5zVehm8ppvBbKTuYuGiCXEj3p1okwJxaHb2EJ18LEvEFFCCjSTbBNLyoWoVxM4fuvUveN",
  "key12": "24tr2ApTvwxVgGWsGKUPnorXbGCqCvmVgy9fWUffLCECtdNLLNKkuKGEzx8iVDKBEws5JbFJjDiatwxhD3cD3dTv",
  "key13": "5TGfXSymNdVNP5J5WKCvEwXQ3qWRJvLEwLzEVwvrEUEjpnegQJZRCv3epEo2MbYFkc8xLE26FJchNmgJjjMdHXhs",
  "key14": "3JW33rESfWkeNNM6FCHpcEJjMFCx2PU3bkVFHQzHSPbeDXZj2MAjvRD137uJeXpiTL8QxDyoNcDXuUQphyWkWdFp",
  "key15": "5p1oajszT41nQQFKNkJUzNY9urS6E4xwkKEfKzrP3s2wctjtSm6MroVg1cZRFicAkAsuKREYzRYjbD98Yz44T13Q",
  "key16": "3ewSVteGnMdvFvUaX9epqubDh4LVqndbHevVmAzEgvxkX2xWrkofhw2nRVJZmTz68wMXS1FAyFaCbuFrrr7Ymz8G",
  "key17": "4RM3PrPMDJNw5bAsv3SazCnKicV6rPgVDQcMPfc2uMnr11mWvB4xzcUF64mK5JVZu3uDiJC9Djuz18mu3BoUqVmw",
  "key18": "5YZ9FgPFSL6oGRfcLKRQfcu4QcQN21Tm9Yqif6n5t4RB6KvXDZHXuH7o9GE2XEHR8tnECzUJuvGnr9h3pCFgf7mk",
  "key19": "5GTw3gJ2CmXXHqW15awDeRtkYQdJDCxb1TiCNqSdnexTVXp3XqLnoF2obwSm4DUkoRC3DVGjYFKPGq99x8ixvMdK",
  "key20": "227YvPgEgNaLwzgKR3RiM3fRA5cHrDdSFF1ZDYyRphxnbCaG6fSBj73d4Y4YZS5NiDGbf3zqPMkKNDmk5uCoTbS7",
  "key21": "3UR3skDg37kwZwg6rKFFeUQji8WY2P69zAXkzjJBr4WQNFSU4Eb9ug3HNxrFA9am3vtm4EJV1qJSh4naaTn6mNgR",
  "key22": "2uH6P626YwK5JtCRQhywZc4mqE5LLxeFknrUMLLhkZiZ8KdYzg3vhHz169y6mNMLyL6qYJrBhDyGJNpQnCCDWd6U",
  "key23": "3URkBPEcfxHaFwZCcrgnJ15u8DqkJJmpXfr9mAzthpAsJ1KDG1ZARdfcbXo4tNidPMTu6BV4zHyth9J5NxyQb4YD",
  "key24": "23ewearoCj9JHdMfqEaFGH8pEty72eHBnV6gi3Y4FRZ3BBmRKVGxyzjQPqn3GzYCvx475Js5TbAaPnXC5VoxpR8V",
  "key25": "4eN1AefTLjvEjLj2fYUXgpMFLade5mRvYEKMqnAEaUtGenxNf1R2w5SgxhPTsihjn5brdxTfnuHPQfL9EdmBswgG",
  "key26": "4ok6T71YAUXZ8Yqribg1e1zL4zPm5adkUrodFwu7XGsjf8XJcLRnxyBeavCkJXckDNc2aEgrFZYtogrp3Z6vwFwt",
  "key27": "VXpWkFRSdV5PmHRhkr3a7g4ThmpzTKrkxqw7wGEB88kMzvW17iMWc2W1CXmmuXPUN1xtLLuM3K4sMjjdTEHVB5W",
  "key28": "yNBUEozUJEPhnX7QNVxRfoDvrDSGoFbeHGh72CHkCyj5nA98qMvFLPjyhahxSwA5B6SW9mwKxi9p6dzec7dLiWd",
  "key29": "3RrbNwSEuASco3khmMD9Rgt1Bc1CVzL2A3mJFhcnR61SLHN9YNciMMttW99fesXRjqpMXYZRsoPdA8WJCb7oNMdE",
  "key30": "484yyYyeB27YEEHtKmzxujzYWiyVVxYZQgGWMQZh8qG2xnwveGUVZ2U1B9mPtw5kGrYcu3n4wjxuowKxZPHtEACq",
  "key31": "4djNe1umdgngjqUyPDgqqrhw9Urf8h3FNksr8CUeuSXaGQZFA6gN45nRrTF16BfEgLTFYVytBedXDEeGy5n2SsVb",
  "key32": "4ExeV7bKTfTay3p2VvZnj6YLV5L1DTRTGPS853MvCBJpuYigUnmVwysEpuZ1k54ThWWqX74S4AkQvChaX49Lasg2",
  "key33": "4gCmT76VwJdcKfDKtuarS6pNQaReR38JuBrmSLPKH2LhhAnMWZPhqTwMogQU9psLGp13Ud4zZcXsfrikCR6qo9vt",
  "key34": "ogdfjnx89JbdhHLRGrVrFBfaXhmJ3CfgWDfCo9qDicpLfwnpDCMyiGZHqvmZiL9tiq33CYysuJBbZDTEcA7E55i",
  "key35": "2iZKcdmQbZq4PEbkp6rMBnhzfqWyJzE87WB6cyN1BAjtV8ixTBoGz7kuhcwXcKWtf48Mvfo516h6FxjjTgm3aED"
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
