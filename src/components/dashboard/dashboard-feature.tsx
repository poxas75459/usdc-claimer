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
    "3TMkvpG8LWabVkonS3oJtXsEnSFtBdgJDJAQbUDsXJrdUhzFtvHD6SFPdiiX4T7mP4YMgxuZPrubsuwb82bwXkYG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63cYqi5PDCgLUhyT3JJ7QUqUyFfF3wEZpWZRGreyTdHHwMXuhrvjrWwN7oUxgb4NW2ZyjwVLkLmS6uxJhxviBAjx",
  "key1": "2RMepAG3sMRdDDRoUkcVJszTLepqSQbvvqtqPovkmx1KWBS5NvrkmxfyhwoU1gtUw4gJ9BSsPK795x1MqrGtyfAp",
  "key2": "29M3MwZMb57rjxbKdc7vARbGyiP9yhnyWaJm9mTRptnoZRvPSvBfuaBPUrD36BUpmY5MuynWQ27GBaZPWpSCr1gD",
  "key3": "4xznCPJNpfhuwBk7GtkunqeMHzHVCZ5YUM3w3hUoqn65Vz8ScJHdFvRMs8E251ATz2WbbqSA8n94FTuejW7fXbqA",
  "key4": "2KV6DymC3Ko5kQrnbWjZpUgnYkuVDRSPz3nFazt9W5shCZHhf9faX7Ykz1351jJEgP3FkL8e4XXqTkDdBvVCBHfp",
  "key5": "444Le4myDmUpzP8vwUf7Jnbeqpd3t6u4pKCK8fCe8pSEtYmUEUkTmfPpTncC9o1UBBY9PjPAxFk7dGZQ53KJjFTN",
  "key6": "57zShtHxbbrgdCe4TWqpaE53bgbkSDAZWYz99PhUst1hxB6xtN9TA1wDFUig8UruA81xoD1PRwzVU1bEtMdg5M4H",
  "key7": "N2tQgMgWacMH45bCvHEgRdFkkGadezXWkXuQXEckyYRQRmpbqLXZBDAH7SG2LA2Gio3YdfBUytvoK7UChJLyhEw",
  "key8": "1oid65H95Kv77ygvixXpFNRQ2SXY38M4tU1DokTgka7pyoysKXHjfLm3eYQxEc6isFfaEe9QNBMea4ZmYCFWEaz",
  "key9": "67jBVx8oj57yxSaAt7Y4zru42PV3FP9hDUH5FxWwWzhNyRYj7ioGK3XnJcqxZDSTADqEW6kSxGgZzCeQjgzSAEiy",
  "key10": "53q9TsS1Ax1koCsaycKsfydQvLFbeToB49z2wbHKT3zWD2RkP2dFffwcWW6sY4Y69WrExnr6FszKFek2dGfQB3kB",
  "key11": "43eRGoY8qAxFiSk6WybWYGjFzLzYSKK5kP6WUyQrEubok1mrC4cpbJdxKA1ZDyJ2wTfE2HSFJbjN532M4jsxXcxq",
  "key12": "4kR677AvquvkGWS2EbAK5587f8BefywZzVyAEptKKfoR52JYAzG9Mz1U2ZjGqAGy4C7T4bpX39bdRjb5vPB5uzgy",
  "key13": "2KD3owqVgE5j6x8HxF66pZs2Tsk9sjqkUoMAmop7k3F5GhRTu3d5YUtRHLZqaemUzaTVHtV1oJF4pn9J1r6EZNyw",
  "key14": "53YLpVUb4xUNDBuzWXbt2EDBhxGSHhNeR8ZbqqTf6nhRxG6jkyGJ1zsFSKcZmHAevdQ9LowBbLq2w2azKZx6hrcM",
  "key15": "2mridTmnuYCrDmdcBWQi2bdPr3saCPYpDmZfQYSntvgUV64dGgbCPnKrQxtnc4gpSvYhdw4ZnqZVrR6BZBQxV59y",
  "key16": "4zsUkVuZdFwZNeVYPZrqMYWQGUvpLNSubPQa5U28fXNoTBeqfJJ9Qm128q12fpZEDHm1vg8ujhXK4tAVcbSbwwVW",
  "key17": "4PGBxPRvTYJCrRko9SzNHBTHADG2BZZEnFtWRqCh5MtyGvLtUvT74NqpUeYMnKiTtuDxwFdR8VHsoPSuXM8xq7e",
  "key18": "5nThqN1qHUmviitZig8YWmx3j3VyJfeztVEmiYmnPCMdECEuYFxbvghc8mQH8UYT9ZwuDsjczeNWQNigjcBWSUNx",
  "key19": "4MAX4bqAjcLxyJHN1Xf5cA4TocjkHbuTzWXTHYoHNbg8fw2W4YUdqKHpy5gB3d9j85zXV933Z3sq1kTSkN7FQNG8",
  "key20": "vSuDV2NX6aVb5AmmvTD7eTAK7zSnmgy7T1Lg46wR5hW1AHr4tM7SUQ79NgmFT3PsBsEHsZhzJRXXDNwFjY1pjsi",
  "key21": "26aJbiE9qj72uALCnTtwcmhrUPEL8MpFKrKPy3AFzNJutWSiwT8Fu4YzrkqyoMg2jPpHRnhop2H3pue4eRRbjXgk",
  "key22": "2Ngh8noapnXFmzrqoRhnMtE9DJJeG6Tp9Jx7qf8nz3LhLmP95JMuXiBPyu61zi5FoJwqQ2ay4oBgGe2CnXqsG4dV",
  "key23": "5hqw383p6q9ft7nVV7ThExM8EGPYqHFKTr5XpdcztszZHfJw4mFxe8zitcqtseUe1VVpLnm6ijX4564pxgH8yPtZ",
  "key24": "5jmpEoASTWb7PbRxazKveAYhfR455vLcFsnnCoJ3iJKEGvhuDGvbGRYeMt8nexaLdfJk6fDXoG33fVduLj4pZA6M"
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
