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
    "1cM3oLVfuFbZzbho6suqxZm9VUpfjnF9Fxnfc3ETSu2xFppVDoiEZA6N5uRp2Kj8FYSd4yx8L9b6yEcQKDHsvq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6aAKMHEBugs67xUkoE3DmD7JxnbUyA6iFT6kxLERkPdvUVRf8wFZxv2vosZd15fS5heG7QT8b8H3HYpczEW9PtB",
  "key1": "5MyUWtGYBb66QFA7zX2Rm7Lw31qasRroy6b89MWsD9qauT4LqmXn56eEwkENdJX1Gx257AmdG7KhijQyUdKBVTcf",
  "key2": "26RtGmnbcAj8VXArBKBQ9UNTu5n4b2sR6U5my1NxHwhbBgijkrkxo2uD9y2qRBRF6k7FBqjjog7yHKjEZ4FQa9KX",
  "key3": "5sWc3sVta9EegJ4LgfuEa5M787KXmJVGMxsaC91ai6gUoyz8QbpFH3QKiAhAzFvUakEizzcQaBb79indg8YeD7NN",
  "key4": "5L4g78VZSk9Cpev3ADhd7ZGZhdFGxgZCamRCk4EDKcT9h14cS3VcMWsUjRowjkzKhgcXRRRbPauQFvCC75qWqpou",
  "key5": "5tj6kQwBSVKik6az4cN9WNN9NS5uF7TM6VgdzKs5XMgzJFoRBCaaT5D5hG7kKsAedjUQoMT6sedPNDvoT24UFzQ7",
  "key6": "8pkwuA2fbSXFWCGKgaFcMgpuEPyvhfARv97ujNfBFWn2uwSRkBkC1JvPPBLu7sDU2ngeUawfm3MD4xRPZcuyQrs",
  "key7": "4pVdfgHbWakbi758SYfgDFzJEJKLZ2oEPJLfQENkgfSXBqc1RqsXR3djRLqfV85c36jEgFNy1a7tE83joJbfpW3n",
  "key8": "3mGu7V8ZDgByAY74dM19vsB6kqyhzACDsohg3q7CWZ2uxEN8SBuAZFSyYjDkfCuV8jBmQGcgqr2yqc6k1iTPq4Lr",
  "key9": "2edwLqi4PA9w7JwEPwMTkNmj4eA3g7pQXqwh7kyBKEDwVtAtxU5m5tbgM9bcMKCSaF5ASaCRdbpX5fBAA9W9hrUS",
  "key10": "5Hcrer7HGskJPAVgVkyUhk6tvVtUJ6dKBCKBRTtA62LXxB26QWDzuhZGs5yd7HrQnRAEwhREypdkiMVEcqkhqL7a",
  "key11": "3JWLDEcuX1wMSmaNKPxY63swR8RJxKHHYYyrFvTApSDtvQukkbHDXSzvHSL2ysxKka6Z9gGgruA6yeH9NrTkyrzB",
  "key12": "5MQe9EkwkFcR5q1qRabWhqZef1g9WgDZyRXxFeTrS437Pd9TU7dSudJZsNDJiJuMpupwxJVQEkD4uAoJ17eD1sbF",
  "key13": "2BvXbD5EudZQ4FikhMSwNiGD2P76xW5ahJjBGuSTTfQz8mBihgAwZyoS96TSFycsQc1MuTGz6ghBLdMsmvMcLZMd",
  "key14": "5NVPYmuaWT41GfWGUUq3wj4XVMn8Dr1c9RdrjyPZB7EDGMjenaM1jFSSeRekYs1LtQ6epR4jFjbWenbkwtivdeSr",
  "key15": "2eQ6dYYBouUWPArFd63WZxV2Z3uBGdHUrJSwBZGw99z7u3YbuBX2wND8QGkfgfYSwduEdY4JuEhymvT7dXaeV5o7",
  "key16": "2rwTW6KE2dsThetdQ4CWYXpqNC97ScU8FRGVNjpWA2xpQ57PuWQUEjrfWupqQ7VCsBv1VoTRQ7YzKnCFq8qsacEz",
  "key17": "67bwrjMT9U8UQHLCt3JYxLJ9wueYQZ9kduEcZBN4rNfYeB5amCaoKZ1wga4cgwVE2brz7giZngqxjHgqbLZfFegw",
  "key18": "4gFm8qE4PDXmw2UFwHh6GU3xzkB9UzrTHTzEgfNE1Mq9uTuXx6zBEDriLoF7XePvgYDBHA3ZaoghkGzusPhQPJFY",
  "key19": "5ZU6m1L2nPCzzTWz4dEvghdJJoAMrGrZYPsqwM3WVhyfKM7UVLxkyfJsWUhEYWrEhkLcLyxfwHopKENjroJr2aVK",
  "key20": "2wAKP9opGKpfvBqniNeRM1EZAWKi98ACq2DGqW3FqR87YpGFxpcayz4pFFY8HtiDML3jh7hHzvFHh1XTVXeNt7dd",
  "key21": "4xMLrrLjmvLrsgZ47sWFwTKRrG5RsSqYzBcCMUtVgKEWKn6TLHPBsdhAWoRsKVxFKT1QRMzEEcwVRYQDLtdwn1vQ",
  "key22": "57zVvXJRjt6k6J1mzHGW6VAaT1EPhFGHeqJciSGpmDfqbdzvHdnZgRwPUbeho67NaLFM7LEiAunCzbbbwMBvq91E",
  "key23": "59iqcn4HV1eXz5FkJMs8dnMCD5HafUTsDnhQgatEoVbrXGKF4rdomWo2QefjAihkCJLh6MgswECkpcEyuBr4qGEb",
  "key24": "2gSG5T89ovxSTYH4QBZfDMuMcg5WRgrx6QXGAYuwcDWoCCY6e3gVx4YrjJUZx62PegVcPygT3HU3dsG8mQpTY5K3",
  "key25": "3Qa3yrX6rbFhEMf6u9u66uPFyCvWXwoVuZbptGKDNjUuiG5WPYFpWYzBoc4tweDUf9NfeAQUovq2RdrHsMrV4H94",
  "key26": "nmZewjnarEd8hMCGUJo55AkfhyqBzNGkyMpJ8J7JTtq2Udu7yZGM7bEfr8KYwXVrbQ7XSN8oJmKMTBon2E1Px67",
  "key27": "3HVs5zLATGgp6EkZp7CwPeLajNGJjAiFdb9taXvM9ZMhNhj3CcxH2L3Gmpe8w7vzF12Z5x8BxxVD6iPNfF2A5EEE",
  "key28": "3DF2Bj3BQ422poN9t8yibVGopK4KbJH2dnyDZ5Y87HgxNvj9ivBPrHiTR7ED3o2h6kQMMuaVTErfrETh1VbjVTx1",
  "key29": "2frM4odpG8LbsDNJjo1zzgckhVgS5pBdt6WkbB1tBxakq9US4qNHAmPt79P1dan9XzMamF9Jn9FnvLUeK8mLzkmT",
  "key30": "32Gd9ubDmJQpBHMfdevrioC6d364SCzmmqQtayuBaQmMC8o8ThJRS3ZS9bDvpkD4Mms7ffzRtTsfVkMJg1VpCwXQ",
  "key31": "3jasPUY95HQTKKv448orFdy1Eth3FFgHQv5CMs4bQefw9GHD7YA8P2y1UctHbfQPLbFcDJFidBxdVS5W7rAuQkkN"
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
