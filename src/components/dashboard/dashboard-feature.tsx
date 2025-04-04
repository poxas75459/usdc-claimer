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
    "3LKVsUp8V5MGLLaZLdGu8Mt3zXS223LDPLhW988u3VHQwGe4XBzrsiSFEBCxR7BdBgyzayY3XPRo3ZQ7RgHtNLAz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kZNFAFjD3xB7cbaBVw16RwnZ7yJJXdgp4yVwHAVGWUTRyQwVoyuuqsMtWpqCKUxD9qpEwsGJxNrR1MEiqpbqw4V",
  "key1": "4Tg8WrSYkXd8sbUNrDFWXPY1295TqvD9Rg6BA4qeDNupMn3oWsANcLyceLgwbJnVWy8KvDWd9BdP4TUyxii9LsHx",
  "key2": "3zCkFHo4xstc6WFfjq5iEPocXJendreCWq8GJzaGEEKymaFEiEfEiqqW2LFRAMiBRqwAzmvzNSXCKBbA1cEXHLiF",
  "key3": "63zF2zVhGYBoqoAEAUnTHHLvJnz5u8qdCc1MpkDXQ9iRbG5UwEE6SacryoyKAcTVCvKaS93Y5fGcyGiLM49apkNz",
  "key4": "3nT2w9XwHt4Z4uECdQBSKNWb8KnggmCmZHZHvs7wPukXqa88QkCRVhuNdtv5XaZzPurhvzF3cngG5aLe7B1jSPbk",
  "key5": "3Az11iwjuvr2ETZdFsuy8zxgk4FrBmUXQDZCznPG99fWckdEoMdpb83jWbcgB3BBt6VPas5KDdT42FDx4ozBVF1C",
  "key6": "4RVw9J6UVUdzwkzoZ6Gsyb4pXgexy2smzBkrVvnkLtZKR2Kzo7Yw3kSFH9a4uEL5Qh2Qn4rRUUuZaudzASUfJyU1",
  "key7": "4kNGEmUGAZGfqUVAmdpSmnNBHM5q14SGH92VcFwgNE5w7Bc9iZ6XkFgP4wRQ1Xxx7twSwgK691Xf3xUWaJnoEj72",
  "key8": "2hMkTB933Xq9fCoqUVpv7yC5uXnQfGqLZuJLofbdikzYdyXFHKwpEdeP45dFEd2RBRryrP7CZu9BWF79HuRp9aeA",
  "key9": "5LNQzPYWx8p9A9QbbJi4jAG3YnR15f1EdnMn7j8AzoqRcX4Z2csxXUtmsA1Q5vBxNDNRcCz9hdVQR6LDkQZ8fNmF",
  "key10": "4SHUexUBfuGnqeytjc6QzvPYx89jL8BEKmaV89GSkhVYFTKRVL1QVBBBBZ1B3285EiaLKzybmWyn6oSW1X8n7EZJ",
  "key11": "5TixHey31YFESmY4VrBZd5dGttMu93ZPiaeA72xXJRgz57RyD4kFezZk9WTrB5MahVoy8TcH4yHxZmQAgEYWXojo",
  "key12": "3e4kBoAMurBfQusaJxV6QZHnAaEo5dGFGqpdcf46KL8uF4SEspDD4Y6jXq9qVBkroG8Qxt5xwFrjVt8gAvpqQ2Qd",
  "key13": "UXmG8jFA7wSNXzQC1uuMvFtPXz3rDkaaA55gJBHhBYqCtUcViK4WsAuSDDiKWFZM7iAnE3AGr7P5xfQBF8C2ckN",
  "key14": "2mozg5FKPLxDhYGkVQTNfTPQe3APZNrngEtZ3aSsdKfCyHefBmcDfyosCnVvQUHvfyTqYyuZPc2mmpa2NH3W4qPP",
  "key15": "5aSoG1gZUnsvYNXyJqLPcUVHTySN92NHShy6PsLFcfztAaNCdvbHjHT26B57mk9FaqNYtRP9uYU728edx92Ngo6h",
  "key16": "2T5ugv632Q1wNAQiWGuqiba4sEr8L9czdPVNLb2jcq9vncF41iCQYz9tNvPeJwFW5VVrg5FMADUtjrTXYPKyVg2s",
  "key17": "4YjjbvUoMJeMRcNquyBcGjv6gxD1PSEejWHNneA1PzV34N7sD8bc4e9BrrwNc1iSEfZvemvyH5dBTsqK2Tm9K2qX",
  "key18": "2r4q6mvXgnoph37ZDJoYbXnYXehEYfeXp3fH6197uusGt93ZTT9aVfnjC4m53G5BfmLS4tdbnhHM9u6i33buUg2Y",
  "key19": "3L6DMWB2kHdn9Ho8HzmfbL4FoTY34UhjBcV9meJQJ6WQFBBzd2WjmCJXtBVty2HBvFJLu3kudW8ahAeitspmvNGg",
  "key20": "4cs9Ln1THyCp6M5hP8BE21kNcpwKmTZLggAhfwmS6W2xQmVVNNmVdQLKRbCcRSLkyxtwYwrvff4zqTTy2gu5o6E2",
  "key21": "2Ucp7TXfowgYG2e5ieNSkpChZvisGAPyVgJM5dRBySZYecUU1yCrDCyioJ7tdf3o5ArkhBf8MrKXW4dydQes6Zvg",
  "key22": "58Q7UnN4kA6bayt6D9DjZrAuM7WfenyWKs3m1EpU5AqSPzC2EHv3DU3Uq1RXWd3oZ9GT2BM1vBY8Kj1Xs8d7iZXV",
  "key23": "Jcri27AG98AknwECaVv8jmjrPLVYpNiY5LjtNjbgQxbcCuQrDmAtieWjwjUqubDX9w5kTnvcvp1QDX5JniDU1U5",
  "key24": "4ZaKkKmREDJD4ZsLkRzopbfRDe6mZ6cPw4B5rZ23cs1XMQN2L9PEdrGbgc2WL9nV4mkPLnW6ZbWfASrgYP8Doyx1",
  "key25": "5eCfdtvVMcK25KnrBKEjaBV216GGGVXaRAiNcQykPjx9qrZ7mjPqHnxsNXi2bYy2bsQNiXG6UZyfEZ1UrbzRohhq",
  "key26": "2gE7qNV4fB6nxk6FxKXcV2MmWcPJM6Rz9977ayURVSwrNMMD7d2zhPCoTgPML4yMdt4CHmuAujKjT1nayXBMsPxf",
  "key27": "2CsXeVfbQECzNKGvcESNfWHGraP5neWgnL5sxPkVwLDukX3R1yvDDbuiy7gGQBPAWKCAMzbjXuKuFcLRvtPxMQrW",
  "key28": "FYNMd7ff52V9tJM3fgxZkLuHt7p7tuRq7R6XiVFeod9mUTWVFbZFn3uovQuMB9Riq3X3jLRgUuoZ4sa3xUvJcdE",
  "key29": "4Fi2CHDjKcfwuzx1gSoBbeVgpNfUe7RqrhsgK7Cus6mXiF9LtqqxAzqjgXCfDwkaEFkty6pVQumrGc5cpbsX4d8y",
  "key30": "527ZipZH4pnfLz3fsGZwKJt3jTc2BisF4KLhwqGPqLswRojhpJVANwEMm6Ejg6ZRxM3vroEAesTpCfZCEAfAfbgL",
  "key31": "GRCUhh7tTmTD6KiKbkKpvAeBb17i8QHAABzYsv7aZv7KgQrxt63bnvvD8MvdoRK9hm8o4Uqb1ALT1wmhBk8S5Ws",
  "key32": "2JbdTPWqgdafm8CXDqetjxGfTaodxep5e933LdV3q8tQdKXE1xYFXWyXrwRFh5p7JaD74xFhhMZKT25DrZYJUurS",
  "key33": "2uhtDLzjpRfpG4CjEgNkd8BaXQTQgBP1MZzbeeVnkw6DBN4d9oBm4MiRoWNHuG82ivs9jcihZh9nfS2wRT6fULrf",
  "key34": "2H8K4VJ6Li3i8gZ69fJHGoJS9t9Yyg312W2W4ETE1LRAvobtvm5jZZDDBp3HfLP2HARkqgHTPeq1p8UxwpjvnYa5",
  "key35": "tUcavNQHdf8Fvo31xo1GNF4QTd9FLvDpVFJczwkzZfUM4kXgi7FFhGUoNqTwDFQansqh3FjpHz5Nwgs8YGe2BKK",
  "key36": "627p72ZVvB1CupeXMwL9o5AqQt82S5LTnZTBBwE4cn4VDgZZt2wbHCiX8uD7Wo2oEK4445vf989QXCTZVNeEZBin"
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
