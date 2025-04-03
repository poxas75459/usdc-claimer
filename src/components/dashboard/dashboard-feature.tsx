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
    "5o5U4SoKFniKkMoNgruVNAAgdcohNK7MLic56RgEseQSbJcDu1MMWCVBUzSfK7Zf8DrRuH1nJuzhUXwLZiDJcTCi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bay15ctkKW77jcNYNak12aqNBgwkuDQFzCziWD8WmYuWEYFuXHu2kjc1tRw9cKfzcA68zGNduTMS8uxV19bW2rE",
  "key1": "2EV8S6XcA62VhgCVuq57ytYN1BsQEoq6D8qY5KgCUoqJKgCqBLq46WePGZ6rey3poavWGqzBUK3tsUwzYUYDZ7ib",
  "key2": "3Z5axCDdD8UpouYvraQxo8QBC344ijGJSQdyw1VZkxnssC9kWjkC1FdyEzxZ9a3uQqokf3HyfwLxNucQkj7p4vd",
  "key3": "o2qcPDEKXD8Ukbxrni6cajEo1wrfsMsRjpvTCYyyygmr3DoiXXdd8UtnXWg8HkGxk4w1LvubcFVPtgwNHWnPoFa",
  "key4": "BVAqNTEeS1LE1vEy8yEhtTEtfpdQbsNyakMt6ytmUGnJHrE4EdWdJvU8Snwd9DSozP6hZ9RKZhT1tMYTwmNPadh",
  "key5": "TJXAcb3FeykLznGvKwxZC5S8aQNozMswBeD7GaTdCJDV8p1WGWfE7pZ4DK4V3qecyqwj4PTLMy3J6tZzU7nr5GR",
  "key6": "66rZMTfmGeirXcgRex3AjqjXqPiHo6YzT2xozRrxtEQL8QxumehKK3qoFoxU5zEZK9mEreApyE7DVBbJVqTsdDNX",
  "key7": "DwfAhWTcF2CZ5vPtkNTGXX14jXPR7d9ZVTMtaUkCbgMXQn9jDdX3CjwnMmza869EShswepUpiSZHgUUEhrcTsAA",
  "key8": "3tqen37FuvZbVHsbQww8qrYx5nbMc5VsA4exE7XNk2ygJmkduKLhNrTC3NJJoKdiSuBZNvAa5Gr8wgEKgUHz2nVc",
  "key9": "5o2HQ6ZDoCeXMbrAoRiBgjW4BvcuqM9nu2Hwdti1oHLvVa28zUZBrp7UwP61G7ogLyL2HDgo6KT6XAnJcHks7u4T",
  "key10": "4apzaAqsjupNzMXjFFtMKKvFGNtaUYmoswW5P4RGkkWYR4a6M5uZds19Tc7LAw9KZb6qEkKf9w29EKvk8UiTPpG3",
  "key11": "35kSUEPbFPQuQqLRu1NTS2ENnLsyop68AmbByatqZg4hncdrynMWLHs9JdQgzh13hFSnjBiNeDyLoQE3qVjfewE8",
  "key12": "5Yp56q5WnZ8GiqbisPnqMDb979kXJjwk3UBHmDcStadbU49NG1wxKLLQMCYLJE8mkrj2Kywx2R6QiUpiL4bAsU8q",
  "key13": "4dmBxyJra2zxZ2t5B78zkm4ff1zccTNxjYvXpXkafXwccgYQ1jBFfo9EPhoX4q2TEPhhLWo85D1NY7nNxyJ5Xivc",
  "key14": "5QXaXZrHnUtboT5R5eZap1guXrfDDdzNtKKhz2uypbzq91x5NPWNRDpjzzq4uopExqE6JZAKYB2vYHL8N2rnJq52",
  "key15": "4xJvLrXByF3MMFiJXPwJZ4ajnLqMwP3kLRGKXasfaXs8DjZqqEC6qobKitwRCpQiG66HLi1QGprE8MvdPugBwehY",
  "key16": "Fk1NC6GFeawNLJ8UhJhiD2BbabAtAmjQv2NGDf2UEg8v2bnGrBfwLESX1XVPi9vNcrqMDca6UP445J2cUuaf9Fm",
  "key17": "52pV2Qnvc9rpZBrqqPwvyBwLj5dYaYh4SVnfK7syB5uu2KbYPu9auigi16cjS4hMQ2MosEuWK9caNpM8WFE1Kdc8",
  "key18": "5hG6isPUKbYE34Em6QC9mvmaVvp1EDLGqrpVaboeoByGU96v1HUAp8LQZQKoEqy7rmR4XV2iEeZA7oK9cgDn882q",
  "key19": "5Yrht81a5MT8GzRf5M28X4gK65aXBJYLdcjjQNFF9i2UhUWF2gA1pYzi19NYPtcPoobdc7ApggcdsZzj2NnYE47r",
  "key20": "5SvM8f9eZmxHeN76XkNmU4Fniw3LBGhfqCTLiBAzXyY7Q6Bu5XsQ4ohbH223kQtixpeaZ8cVQJSgfgeeNYt2T1Fv",
  "key21": "qLPiFLo4BWhPYvCugcM2zVNPUzQENDZYdkUPS5gQF9kg2Z42KU6uo1KsFRtx4ewhPfVHrYVfjdu5pVQkYu2Eifp",
  "key22": "2eNsfn41nfd6sf9AMsKz4HiYutu3UcvD2pC78uoScHq3eYUQ7y6gV36guMGfWVhYnMtvvFT9YtGC7B8229r7QVWB",
  "key23": "4bN7oPESj7du4N2XuLaLHfnfE6yGaV76AxYVXzcKiBVQ2fby1hwKTR2yDmQU2BxPHxYw18zJq2Na7mrACtYuiZHt",
  "key24": "vrGiz1KMMefcV5kFxdxgCqWeDs6EUL3Cjd9jpBRfCGSoZ1XMZ6524Ka6VVn79JAFdMgLLBiHHK1urUhzGhrCLv2",
  "key25": "LEqSWwYn1d15sHsDgKKMYkBBs9wrALd1VBvUyWqUEn9AHzrgkPHDnQj9bCrox4Pxpa3XfmpbYtAnj7RYfu5zmKc",
  "key26": "4g1WmkmjHiD5UfbhDVBZKwcncpHqG572tqcNWd9r9ZeSF51pXT6UwwCD9pzkhgGJxuZqKESM99Tij6HMx4cffo9",
  "key27": "288NKe2tqFEqNeF4xr29qKnGb8Se2qozTR3DvU2dCW5uyga9z5pzaoWNFCr71L4AEavSRBSxmfd22NEkHkGWwpLf",
  "key28": "2csaYeeo75Hky8fQxY9TxATjZD4fuiwQuCKX2BU6V7eGRHuvYWPzVQXzxgAs8rRiCgmKW5CwNAJcZLcQ2cUdNea1",
  "key29": "SLMh83dhr9XHMQ2D1G2fqBcCDqPuKh8bNxNUxSZNco3benQiHGiY9uAL1u43LuUsw2XtsL3qfLFzkf6Gt9mdgH6",
  "key30": "4FKR32zW3L5rmEqPWaBwUWHWgZFnn5qTWRRLTFZgq7mb3tBU2ad5sTUrG29aJCjZjjQR5jSrSALHgnoVoCGYYN9t",
  "key31": "4PVS9vR9oiStoGR6TVtzt8gSC455oQBMeZhtDaopuNkvNjeEAadb5V2h683k1nHteLwVqFGNxR4dCcK7WEck9oW2",
  "key32": "3m1NEpC7oMvT8FgR3foYZYZ5hXVeNDnVYkCd1aFBtqrKbWBY1RtiioFkhRkzda6bWSTd3Ti7ydAAjXAU9SHf2Ee6",
  "key33": "3Z4GLcgxxYj1W36EYTJhNo3cbfups21FZJ5eVZ9Czid7tCW9NEXhCM56f8HELwzsN7jRQv2rXDBz8hFdVpEAiAh3",
  "key34": "5271oEQrUAxB6xT62RsiX8aueUQmxFpAyBDP3KScwuLfzrTHuewDh2Ct4HTbsCMkMgBYMCZpJeb8VsUMJtestZnB",
  "key35": "4Nb7mTRzepTQJjbFRGkQtN3ijuWdHdWYYiKjWMWNatsKn6wse7CxxVZHiJfoLV2tYaMwZgNrhA54LzUqY3NahaPX",
  "key36": "2p9XEdB49uZAAvoDUahBEG9DoFhe9Aa4qBHdiaw15hMs8hWjYKD7r4gaaCgXKyX5qMiVAGtvdQnHmqic4d8gR6YZ",
  "key37": "2WXDGhoWcUrb4v3WpHU8FHpeMW5tQ1STfrYQgbjSBRNMtPjYCxNjbsjwGmwbgkyEsQVwNdDUgn2j7j8XNQG6tvPx",
  "key38": "xFoSAzHJuCC27yMYE2skMcA36HAQRu34oqArF4QxQSD81sQzRkBF1oEWQ1Zz7wV2exqdc8dFaUN3B7YNCBa8UQA",
  "key39": "7ZZ93ySDvDJ843nshbmZc3FeEq4YD65KcDuKXuTQjiVN4bdEJuDLrobf1K2qUDsqmnHo8ryhoDkyv7qQPeLYhnD",
  "key40": "mkSwhMGSeE7CaqdgHRGGyyH5BteB6xS7L5nPLdU6AFz6B3XnLDVgqZbSS66ixDXnLqs6SK4nV1LYRBJYbbt7U7W"
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
