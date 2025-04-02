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
    "3T8DSm3gPq1QwWmPS24TqGxoAuwDHXgajuHHs5pV2FQUcgDbtKLtbpA9W6AFAKQvNy2eChaTWsvuEqPWKcUNLWrk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31TxsfTtCFcz4ZSMKmPWQt9idkHLCFNHG2JF6nqo755hAnMdqSw58v1NGdv1v6HmD2EimvmMTchWHNFMmvP8mhVB",
  "key1": "4dePfeoCka5sYPNPLnxMdXWxEEQGrrkA9f3Ne1RAG8ZzX4mF7Be3H6eEpZnG6PHBiVzBMTSUcqsCGhspBBcLQnxg",
  "key2": "28vtKPSLPPhVcXdaXfQX1TLVQy51uTsYRhxkuSTvEdFLCyYfwbAAg9kP5PHyJVjVGa571ssLcckT76jKD3xBkDxb",
  "key3": "4cMeyKub61udLsf3kAoJfLem4uXrbtzPM3S7raZPxy5HRxazXVLYzquKJqtrQzk6ThcfoM8v1RuataZAqve7mGqw",
  "key4": "5dNWKXog3sKcGqeqXHmjgDJ5ANh4Zctgkt2fXCbN9cu62GLfL4LBHjXJ27jdLjExzahJDYojYzmgcgURFNN3vZk6",
  "key5": "hCw3HKHP3e33hPv7nVQTFZxcgEYL5pJzfwDuViSZcNNNiK9TaURkKezLBKz57kP8YXocmSpb3e3nQS9hCJuGwap",
  "key6": "5tw4m9pYHfJEHTwfyg3NKCTnubocSuPWX3NfJj5nvtLbgxhDJ2eshpUiASwNrwBCLxKunaf8Pt7LfsMPQpn9wcnD",
  "key7": "4QCEPFQ595qjWqAPR8BuY3NFcrGbiUx7eM4oySRDxK9J4PeyWQWqJtp5WxXViKyw9fDCm9xpLravhqFUPkeuqiyJ",
  "key8": "5jcR3UQaz2rkZ9x3npQC9yVYYV9GAb5zLUSpvqM9WpWPTnysoeu2xQnKEcKgsSh9nvLvfkQ5iNN3GzF47zfbT7km",
  "key9": "3szzz9G5prpM4gKm98bXEa5K85R5TJmfHk7kjjpV87gSjCEz9oQyWCVbNKdmPvEdCHDd9JyzM7WpzA8A4LbVtPsJ",
  "key10": "2xGwbVM3EXw9V9suoRpMuXfDe81ywwSUedqUDXrDkG2Wt7Fb4BP4E4cJeU4crcCc3fbaVMMWzkZcDcPWdFYkJ1bh",
  "key11": "3JGB3QH1iDK3FnD4BdcWRNMUw2tWuaKeamrFdgP3VkYsSY1VUWYfd2K8oLB4HbSbpenRz3JAThAPN9d3HDEzdKVU",
  "key12": "5MCFJtQAMZRVZHpSdxCLqmyg8oSwjwupEpo56sgta2LULdYFvkwN796FTmQX2BYwjXfFkqjxsZC2fZrswcVXxwVM",
  "key13": "38w9B9jbitaJF2UzCqxwDgpDZJRrXUkvYBEGbzKMpWW7KsrLZsQEpsLfYNY18iPVi2zP4gH77zjDtSK3Ybmzo9MB",
  "key14": "4Kh5hrDbB9HpQM34eykMkZEhfhoGUezHg1MBQpmoEGqsqGjQbFn3s1nWeXPvJKSkaoeYN9KyoK4mMUc2YTYYX4CB",
  "key15": "HTMk1zreoj3LoAAv6KdqNuCeWofGLg7BQ3Rs7tdmGaQUYoEM6TzENNHkqhxb2Nj5R7f9Lfm7SzuxayWyQ8B1WnY",
  "key16": "4sUQbWPFBAAJKNsB5c2RkRa3TkqWcEnndz3hG1ErCFbZ85q74L3rfUUCRiR9m58RkEwZ9jmUnFnj1eiX9Y3AXPvM",
  "key17": "55zRW614m7tMzCYBvfFWs5pV2hiqtFftb3jaAgpADXDxZbP97CFPfZQLEjqXUtz6PJyB56VJQP9umRUXESzsTfQ2",
  "key18": "BQshBeGjrKbrp85MoNckT5LHtMG9g4CZRtfW2RjeqcSA6u8QhyddMcvErQX1kED39CVBCffsgXYcp8qKTgT3VHf",
  "key19": "4ctoEgRxjPR3uTmeJYzHMjRPNe6SAkKoqQpGVWbJLSrHcfeJEsX9BxXBSutCtwTsAnc9WBrUnkiX8Gf7sToJrANo",
  "key20": "2Jbj1WF7yyhBkmSzoRm5eYZgySNJ5gEi5rQ8iEkkPVNq3uzido2fiP9UaFyBMk5bh8hye68oTCTza9f9qK19posa",
  "key21": "5YjspSWCSkpwc2fkFFeXj78B2BbyuNsT5Umv8kKMRGn71rCNFobu2SyTg7cU1XuLg63BuLBD6oUTnA89Fh5MTDVb",
  "key22": "38QJsXiFevtrtC62yLQGk3U26xBc868Chx3Dh2gvsEFSWj91rioRhioXq94cYFcCHuuLgqKDkuNieF7dg45aaBRK",
  "key23": "JfTRWkcnSM53kHtLFKnzM43q7WU6B8HpV7VdbaNp1C3YExjusKWFjCaYpjG4f3GjqLdbHs25Tz2PWuGkcd1P6pj",
  "key24": "55hLGFGw39e3v9kjb8jHKGEXK8CNfmmvqxki9Z2FW1utFteR8AU1ZcYjKGvPvFo6g5sEweJR59rtGeixq8UkEo32",
  "key25": "gk5m1jQis1Qe8MTrHKDSK6mm4ztSW7tKU9aXVbXELfCCtpMnKz9tSqwNk7LyRJiXGo1eDUdTE93j74Wt4ZYxEbm",
  "key26": "4Zfz72vX5ewUHZNAKVEY9FRchyiJMEwkfktjTezVwwCqCE68JXDwAcuh98iAaCVrnvY1C4xSuC4Lnz42c6pgrza8",
  "key27": "2sqXJxEfEUXxvuZCXW3n4ApafRZi9wUkXPKco5WeRm5o88VFVhujEmbm3FhP8JQHdbMeKDiwwDcckZLeFBqzq64z",
  "key28": "3t7tAvCqFBnQGg22ySTEV8DQpK3WT63XVhaftGbduv2FBd5QXdwFkPZbjwK3H5ryN2pkStkTqBogaiZX1SaNBYHm",
  "key29": "35SSHQEQBjvSUSxSojRJ6vGN6PqDL5HQ3GQdJwnQv5tWLqc3CaV18c9N5Hro97xx583xLM2vPykrCu7Npg3fRzmd",
  "key30": "4rpDTD8iuCM576sV88xCEeDgQhPzGxGq2jSNjeANRVAcpxEpGWbCuW4wLzb6djgCxbVg6rGKyL43EbQEokRBDc9a",
  "key31": "5jX8743sUjhKRRfgNF5Pj4Eo9Yx8vV7JZz8NCEHXW2niiaXbcTqT2gQsUgP82YgUzbxNYiUwjJCrReH4gnsmGSbG",
  "key32": "QeAdwNA8quanLiWJ4g4zhaLdgrRxjc21bhG43QYWXhoFnsnfpCn3Nt1Ky9wPDHEjgwmn7Y61To5nsw43CvkRWqh",
  "key33": "4oiKGH2z5cS8csd4w96ySXtN1pUvbqwFiCkgfj8ijqbm1bfsGRo19v5x1AGHFih2rPYjLyHyyomGxLKgyqAYZcjN",
  "key34": "514j3kUa6wY8Cp9Av86N19NWKhhpAEo5izHx5xauVW1jnmWAZNHjPhoCMdVmgLAdLSqqg8YSqGCcdKCiUgHod3Jv"
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
