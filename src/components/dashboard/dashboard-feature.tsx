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
    "3WNnoYNhFAzq7Z3eknTS5V1CLCwDdDcP3vyNx9ekvbQvutsCWzAhFPSfEUFgMpdFSNUFyQo9iNtaE9D5Ta9eGfuz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XnKUztieCyScbRRhuyM4pEJUTChYv9osvMy7cC9m9hE4w6gQHG7GWj2crvo7wxdVVpcCBJaozPVxSjZVr7792tm",
  "key1": "35XMMRhjnYvoL67mMuioqp9P8n9RphUKSSQGCSJZfoZLCJCQGV1RwiLrF68TdnZTdpjQguWyHaCK5vStjFRCsJDk",
  "key2": "5TmZRjsyoZF6ep7p2nyrJRthF6R6TWXmpQCxD1LuZcnigR1HxC7wXiQ7eQV15C6PBNbctGM1zDvpA3VUuq5Ni6B5",
  "key3": "4HasSqYCMybm45RLmup4oaqiDvJjL4hLBzn821FT81TtAQXFxFbcioBFdRA31BfgZMzj9YrxRQV3GhMeVbVS5m7d",
  "key4": "32PS62w2boT3biU693oxw14hT3ryyLb1EEeWwJtK9Qj6evdtbYmMEsDVXvTETo63k5aXvFNHPDhL7bJfakeeSU3g",
  "key5": "iQSphyMB7YgKcyHXZs8H4EK2afj3zwVRFYEcDTwpgH5MpzFbVfU7YnGwJQUeD37GbpSw1miF3ufV5qW5HyGpwmc",
  "key6": "5ySabRwqsziPL46Vx3G9UXm6QBoZnBdn4PEdKd3immP2fJCkwkNXmgV92CsSJruZH6n1EB7iLtTdBKv57f7GHrkg",
  "key7": "3ipi7nujUKsQ4wDxBpdGLsUYfVRHfDWPRZM3zxF1uVvv79nGH8P4JRRdyyVR5WERu8qisjWqoHDs1rDQW7tAoxGG",
  "key8": "utrz8s6QrwqjuLu6DacGLsEvBXg9WFkrbReh3gytmNsvWut3DREPuAn68xGk35MNjUTBAm64PJGQdSuQsXdaV73",
  "key9": "62eWbgnooPiQZpaU7DzHy4zqHiroc7geZgZ9W4GJGDaqqwsvSRDfh4C38oBfQSo6jd7jofWi5eaCgsmdbvpNuRsJ",
  "key10": "2uxGqKoYX3HqXjLyfoHvmZ52W2PA3QK7KbVwFVAPR1U9TukGrTVWQWmsFo4wpV9gxw8DXuroavbKD8tRbmaAsTJ5",
  "key11": "edehKLJWrSDmESJAdwBNiSUR2ByTcqTX34ny8kaQvu6ZAgc2Rzj1Ax9vFojyrWetTmgyzodb23HPyCkDMsYrrx8",
  "key12": "35GahQnhofg6z73af3rmtAjWVVEoK1bEjvgGaeUucXmjSpTbfR23S14eXNyP3t5dcdVoEMaidKqBo9aRNpsyBRtU",
  "key13": "5KxmrZuQ41Qegec3yRgg1xUafRxYrfAdBoVBAA2jN2Ctvrv7XTwpTCXw9nYCWu45ivhrYknY34XsnN7dkaiR8wyA",
  "key14": "4XCNH2fXGc4TVADBvPfAucu4QiirrCaRfoB59XPAFPbL45f2psa17Zgt7NHaUiuSyP3QmsQJGpx3nK2eaUhFc1ex",
  "key15": "3A5Q52wQZ6A1n49TwCzYUn1RDxeLMyo8HmJ6tU2rj29jnGaVjzkxrrmLh6iTgTMhVFJ9VZqYm4NCzg5NGjTCLWrY",
  "key16": "29tJCfeHtbubvyKbnTa7dYA6ZHu7S5R3CEVhfM9gv6j4PQmYCWpq6xuJt4Tc8Ww9GD9cw9bKR6qaG2gGcuuwqGc4",
  "key17": "2wXfYWj5H55eu3TZsxRsAZ3P3z9THGE1Ffpi5bgK6a3FVkRcZTCncPyovQBmunVwehYydygewJLnBvdzg6AanHxr",
  "key18": "PwaQ4SPAceHZHJoCBAjbKnek853UuwRL3WWH4UzQ1iqbjxBXPNjjXhQzwcvcEyr29sRDvsmTyjAoxmNk5wwvLBF",
  "key19": "36Pqe5CKJ8R4h6FCY5vZKZBAwJcA6YbKoSMWvWQuXnmkVch8iansmZPiNLSRfjuaDS7jygEH1K81fFUw26Dcu9JJ",
  "key20": "4rZdXYqkrfvARyaZFNt4yiux8eBZQExkXffksQUAeSV87yFBCxpNQuWgP4WBCtpVDbiUkbHoen52rMamQSrYZMNw",
  "key21": "3XpzRyRtCbdbbtrPdfgoZ5ttzLh8Vv6fmF1sC4VqjjzjT2vdhxcozGFZbQwGWew3XRzeSXgUQUD5BjCrV1gNCeYx",
  "key22": "4Y6ppL291uiX43Y74U76yoqtPHQo7BhKWApzjCW5ymG7f5s87ATr5CtwWcxx4CAD9XXh4GHN7hBSqavdPi4aR3NA",
  "key23": "2mi8G9TopRgxzUavR2zxt1rvezVZowXksB9AdvZywp1uCuocw3DtHQkN9PUaeaPechNMz69uEvavhhVbnZckBkrN",
  "key24": "4gYN28u1jSh1cgEVuVYzJcCpt1SXKAsPZ4aQj9d4snXrhXZiabpMdj3ngiyhcT1xrVEzgwXBJprzAw5KSns3PBcg",
  "key25": "54rXn6xu34CngLDGwK9xGka7nfmMaZP7YPmtBo8pmWFCVW5aqcNVDRvGqZkWR2RRajSbc6ss2hxEv4CCnBgWaqqo",
  "key26": "4BYkT6zCkRaxRBeuiLcaC8YYNQXLyCsFEsuDNqhkDZhR4DGDLKwrxCCBSXkmrtF3PUKTkJHt25GtqaApyunieexy",
  "key27": "3MU35RsyTyrb3rPNiuPz7ana1JxsnYzfdqCvrhMGoPzEgnhPwuuXsqBX8VSxzM3erJ1xa2hXQwtxbxNXSJkzZqsJ",
  "key28": "XX6pa8BQVRCXWfDPXxcGwDLVxNvxXMTtuVYTS5Wd7Daj7qSwU3M447fhSY3Ttg2dBAKSUGtzz2gNQJ18jadMX78",
  "key29": "2KmDqovhE3Gx7votJqPNrDqfQ4s9pzCc7seng38qh7tJDDuqgTb9XgGAuvSGZanKgLmnTkJXAC9vSQ5cChRD3r1S",
  "key30": "3seg6sVD5gHt4m1ifpXUHrdUNn2uZcABvH5bfH3VSbpDxHbt4mrHgTH9YZH3P5CKA6WvmxjR4BGjYg6ixbxmgC8j",
  "key31": "2wf6BZsEgQucSz7Xg5YPaqd98Y6KR3X37AnNSEoAjerAXPNmtqTf1HYk3NsLfVsSktHm2UgFogFkiqJBZnNb35bq",
  "key32": "5Pnsb9hc3ik6wyDheUcQf3aTmg3wYv5caCS2VLVGKhdRd8f7tXVUeEJpsytXeXY9Z9sYKYWBTRv4DwbNZGzzuvQZ",
  "key33": "3V8eR6GXJ7pDF91wN6xUVQZW5U2pBPdoGG6tH9o1vTS7Z2nYpqzBu9zNn7VEfqXCq7fiF6EzgsttXxE9VdDuWVUo"
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
