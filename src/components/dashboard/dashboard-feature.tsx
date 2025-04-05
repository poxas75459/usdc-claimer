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
    "GMbDEUrz3GBaKQFT7QyDmK9dKQaBmthsxFEecrkgvQgupdJL9qKeKon2piDXfCPiWjmeps7QgrcyxpYnd243E3b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pLKm3MqKraQ2UvY77b2sXyAa5p9f9eVkhug8TXFcGeB6jKtrA47uZhLkYBzNMLLbjUPMASfcbRUBCF1oXNRGXv8",
  "key1": "51CHZcxU86412oF82nCPzWr4uRE1PGZjvsK5zVNsVGczdSvP2xkA75WJRe5UABmyeuuYEu81NNgY1atCwD4U3wuJ",
  "key2": "4pFMj5XSFBwpFzT7YfpFBraQ5B9dQAtjib2S62gE3ZbFXn56yJLdj3RtM3Em2AnVCtzF7YSPTi7LehvyfEE7dBFa",
  "key3": "dNJKn7LboyDysyd5pUdc42jabWx6oxjXkZ3f7ez9QoCH4NqNt8ceEp7irsBmBKuEVpz74aJmyNezNVsyzEYvsFS",
  "key4": "3eTnjQBL86y2YBHdnMzLtAq6GEHAHrAngrVUoHDaL1RRJju1o8ZsAMYE4VLAYBgA5t5K5HYHoPfRK3PeLK8L3coJ",
  "key5": "5GPim21XkaoWZmQaYtJv8i4gdzjsMRu48vKt22gp6dkFjgcha7M32EAndhFrixB2zvF38FiABRZMmSPgD2kuhDEh",
  "key6": "3e4z2YzKivnLEtKz1FAXZijnSBiR3DEMn2N6yobg5jhrRYDJZLfzHoEAeirfGZD6xWrdMU2rHTPwGGNb3KgRLyEj",
  "key7": "416y5DKwZfj94JWHuSqePvev1CuWHrCSpFLsW9waG8WtFmtxFSUzuzxc8QxkecHF9aXntnaqzWjZKigbvbJ8LeR6",
  "key8": "iJjSuWhNtMfZYuLLHVSrGdQPCq44Nux2xxe9f7PYQTNrg8qnmxyqtbYVA4CpMMUP2EBpDqgErHV2Gp6F1DoxJXQ",
  "key9": "578zcHc9a4QgZKsYDei39EmGvAbyu61B4VzVjkdrzdkYCXEcUvnApdgb35AFaHQyKkajSXoXyZX9jfvVTpSzxJQT",
  "key10": "25AJXWZcPdT26zotHanfHg51uKj15QF45amqm9WrPuxZN1cUkvcFB5xK3ZKk7pGRwVkSuh6StaT61sSJTXvknC11",
  "key11": "2YedVUvR7VVNE1RuncFHPWfQAPQw9dvtbvMTAMaDT11gAt1keZKzqquk9C5KrWMJbVt8qD1BzeQowvs6ytpxGd4u",
  "key12": "3Am2jR6WwFybsKnnwwMivCwPvRsP2kqQWjbzhv5JRB5VynsPjFuCeuZPLM8xFJpMt6nMWT1ejUL1mJQcC68ze3qT",
  "key13": "2zgxgkd8Jf7VM1puZ5XirjTBuvS7TDxYRVdRj8hKi5CfnuHzQo6hmMBeRwxeiA6MgXLz9PEpmh9woLf44yhcyqGy",
  "key14": "2vNRFGt19gVNmy5V28ZhNJTQMHbuhBPAPU1K1LV1t7nkDtEpytLSuR2jDvHDiUKVKWC8jTaaX7pbPR5gCEmCZvZh",
  "key15": "3rpavoDWqjz77CcERFQbtMWAt178JJL7ZwdjVzYZNGAu6vEwauUpJE1GJuSXCRARp7xgba7FXSXVi2btGJMUwA13",
  "key16": "2rcweXB1JigkBfWhY8BZAdDtcVBqpJEqXK6FcF92yHL7QrvSPnpruiksmaguBF6jUafa79cmmEauh5PAV2v4mrHG",
  "key17": "5NBYq1JQWzQ23pcyXWaV6WPykCMgK9kVhAWXe5AT89rg5nLMqYCjaKF5yGduMQaMGfdKZus9vDQD2KvqD6v8gMb2",
  "key18": "5xs2RDk3sdDkRzYx8d2QZ9FCbWy2saPwK3wNQFuidQKW2p6QLJqq1Dgqv4vKA3YTeRmMgoFdgKc8NQ9hMXgSQrgQ",
  "key19": "GwWTj62Yx5bBaqskjtBrAaLjUJNDTfF9jFS1udx6X3HYV9eQzFtKsVZ3GDdTGgaDpQUxKmtA8JEB6cHDowqVqJ1",
  "key20": "4TE8pr9jmjzhsxBKQdBB5jwVcVcBoCKJMBiWK6vQaKU7RBC3sKxM7TKEjcoooxKooB1etG7qNqy6XqFZRJny4J4n",
  "key21": "4tqYVsdTsaW4fKqhW4GLdkTP44rkEcTyQQ63v1YDLSVNxrAurvXbZAp5n4HLSsppbSnzrNjBrVsB96AHko5tNiqc",
  "key22": "3zAmnjcVoPffxLxXsKxr8pjUAQYknAZRvTGjqPhdeG9yuwPqAY6SLgQTtHDhQef2eKpqqRAwJkatPzwncRb1DgHf",
  "key23": "3bfGLtuqJ2hqCuusJBuWDDwHPxg9XfFuKJEvoGfDJjeZBpBUZYdcWbQhFmgQynrS6bK7RYue7BqXwc2CF6xWYkdg",
  "key24": "5GByka6v3HXj4KqvjmH6aR6Y6aM3uAzmUWmwJVYb5p4ChzFLTyT6ZL249LGZ44e4BkFSnzmHSZSkWSSrAXy4bDZA",
  "key25": "zEGjBfLkL4ezQRRBGVD8qjRH9ksehowJgUG1pjxCjaQ4GchNZve1DiYMcXseVMH9tH5gc7jq8XPjRGH5xbKdF53",
  "key26": "GufEQFuzpfxpbPNHUSEXdoNjvajUQwiFoMyTuNaJFpc2koD6V22YmhhKyw3kQV9teyDqyVRxqJ1kBUMfaHtHYZw",
  "key27": "3zca7c8PgssLSoGcUCUcUhSWLi6hF3qSfYpFx55Y2RMdMWkcnfTcvo7ShQa3Dd9qKzMzi2qd9mfrf5SUL9Ta6Bh5",
  "key28": "2Ppmki6qk3NHydDDY5bEAtdvaxoTfi3yR8LyBT3wm9AUUzEmWRCZTmXw3a33y1VvxwShN22PZac537x2xaStJGjN",
  "key29": "2zLmnE2RcWvxYmuwf4yZKpR6ZpVCuoqKsqF27vwky7enR8uM1Ac9gUFmTptRy2AtcC1u6Xc6XD5pkB5k6G2wQAoU",
  "key30": "4wTjoYvFSS4rv7oBaAzXW74bAXe6AgMyosEPyCr9Hz6ga4wEQaDgpJGGZhqLpj8VkEaj5yipwf41P8YBXhkJZPqi"
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
