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
    "3UaC5H4PfUzbhz31xtM3Y5oyaukW7qDAUDfeHbQdbTpvLpxL1bBVH4z8bYQTWdMriGGuoUzyzYw84t55B9CBSLsL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eFzHYCN2MsrjQpLENiGq92jVZ6mYsDAXXBqH9GqQXWZgTLJWaR1hdqCxQ76beLQm9621Hzd6cm3QGGc6cKk1JHC",
  "key1": "24WbEyKfTFSisYGzsAsfHrsnWDJuCYWsVuyFvYrCvbwsW2cUw6Gax2fZQnbceHAspe18BWKVxdk1XS9a9nxCLBst",
  "key2": "3rEiw1TwbMUigXEM9rEJy5HK9vMXeSB7AaDzE3guYxqHSfjt9D3c6KSsMkzNGg6Cr7JGHksQABXkdUa1EeAsMgJs",
  "key3": "255G7oauZ9HJqBobbXvH7FCosgjKngo19JvrV4sfgamVZHnMCbE6y7UC6gv74numCS8bcsYEQoAg4hREi3Fo2FqT",
  "key4": "4XMs8hfMwxwgEL1iBNLbLbxEvWSijWobyTnAAS7GXYxGqVNHS3iousDnV21HRG5kvPGegaSenrxQksm3q4M9krzE",
  "key5": "5qbxMLuXwijM6i2vvZzLhbzKZEsJDUzFaB5PbtC3ffkYU1JfxZ6F5dR8BcrWyXBpGUtLwZgVok2gzhkbUR1aNXug",
  "key6": "RNh3bW7HZeWKT664uUazuoyNsJo9S1SW2rNNqhXwk7bzddSxqbGhfdc7687KGDbpSKZCbf7Kk3FD2oqBYQezVJT",
  "key7": "6Z1HZZgvko1omT1StxgSWExqC1Gc8EbQG4mtVkuUTvTN33YHFVMZEZoQYzT1k4k91YC4KDd4ZtJ2KnEDnwE5v9u",
  "key8": "3CCkydmQvy5LUgLNTqTGMkXQJxBunEaCXewMrDcSJZRKnWCVNj2Lo3jkXn2BeyxBKbqJBFeTCgWh2s1NZsC6o14p",
  "key9": "2ewfNwmtArFRsiZGMB3jfHSGkWeS7tw7yW4QbTuAS6iMvVKiP8wqKLTZUK8TcRDS9rK2G2wCuBAD4qSfR3tGQ3e6",
  "key10": "4Fmca9ibpnAWPwrqUyHoePQ6ZLjZiiSi1fvEaMu4rQPSvGcPFuoVVYeTUkqkL7xn2MWRXkc3NTQwsKgB3TyLdMwC",
  "key11": "8PARxt8vBNqxrzuCDx8rubugdzXeHozqPbRoAoeKFfj9WKy9yAH3qMkxu5cMwGSTGqzjCovfHowcKDtFaNDGvwP",
  "key12": "2pymEjRfPPADseJ3wxbne3Y8hM4UwNDJVYGqefaEqkLV6ybZxZf3wDNaR5ztRRpFYQrMJgieC67sutjsroZz7Djw",
  "key13": "3eRZMCJGzPDgw4U2w9uDJgURE3p66Kz3pmqpCJRm4tquzCdVokEeDwcYXo4NXYMoBfWxhDvZUoJJc7qaiAnA9X9E",
  "key14": "4BAEfbGsWGuS4Jq7uNU2hCGYd7YRxWGmfyvvbnjDCMy4MUGGcGm3r174vpa4BwuFKGRb8AfH4MtgiWGSA7ynzSPG",
  "key15": "EMtw5DxPzM5UnFYMvPtsywBitBsDe7EJysbJpwqnMyKVrMTmUEqpmqJpYaHoWrvYeDsdFYj7wFgh1GJKGs7gB4W",
  "key16": "3bKg52RZvnkEczyNZ9g7QuHMZnCqGVvwmrAq7R7kgb5xWU4rTL1xbj2Va5g8nTCUHKkRJgfHTieBT2LdPvuVkgN2",
  "key17": "35oEn1oSE5rHKUs9EnWiqU4crcX79ENbNGoBcrcD5n5ipdTnqZNjsA9twPepeRd5G8UZF8pXAuEe7HFdtgZ9MXyi",
  "key18": "3fUacmSNPZdEndQmqNeB7rQZzioB6VsTHoupymjrukZuoGuYso99rpHMcu7u7qdtEcKhc3huRg5jbGYDqBevVe2Y",
  "key19": "2CCx7YJgASphvViL2beFLA8Dre7yehEyoXFcjJt6BYAUzzicdhRTA9AyGJ2C3nTgGSCDWvnanigwewseEc1osm6T",
  "key20": "2SA4n28uFr8GZ6kuyJqXkwzPujok3FFha7DF49eFnBrRUgrf3GES55NiqG9VjWzoCUDX4Utua1ZafsdqjU77KcKc",
  "key21": "5qqpPF1BdwEAr5ZWidLCHuZfju9bL1TiPEt4mpr6V4sbSjS2EUXN7aXzyzWcaPZMmovfezGCRanzoQ8Bae5hJiJg",
  "key22": "63FWiXLQUpkwYmh927oauUA4b14g9h8stcDibAnS2Uwr8nnqssAhjhrEfLeYr1CdJG1QiK1cxpTvFvXzCyDe1nka",
  "key23": "2ABtmQgQSthnqeHR7RL29qGKp6yHVjD14KaWccFzoajscUphbNSv48JwkBvcExqbFuFhdGBeAbjJ6ksyDUbktUtc",
  "key24": "3U2jwdM5QwkhV2iubqneKB7dkFZcLBZCKc88CFb3Kzg1khGmfCJmUQUznHKftVdXCPhvbfimnX2Mnpq4aRDbGK1a",
  "key25": "adD46W1hJKCzEL7mAze61uVVjMVnmedUGd8B8bmf7EWbGuN6BCidDNsS3PVKtwCpQKK7CbsdRcMcUfXYo3NEqrr",
  "key26": "vBtS8JexyAQxAecXXaDzSJA5fLvmPxTRZUKqSWqScrq1xQ32vsg4yJPupW3e22Z2XELJdcoqyuXCfvW19TEwFng",
  "key27": "3cxKQTorXsBDLcQtx2hiiAasDujHfRnFy5mqoBCrvkZkeD48VNfUThi7YMEGXmXC1wfn7bg5R6Yfizt3Cc8kHaio",
  "key28": "4fDJTQPEmSBA2snymffP9g2kRU1R9b5RJ24ZVouWMyUZiHAkvSF83KiavmDge1zKCj9eVNvvpTdwX6SvafS25v3P",
  "key29": "3EUVKjYceK6NmCH8MWjxRGQvsUsj4CVdscgJaeV3kCpUxynjAfLPmZP3u7G3mDhwcCKeXuEk62G2sH6wBEUbtU4b",
  "key30": "3TZgTP1asNFmyrj82ozzWDhFEUMdP4h8CajaFvTafbtyRqTFx5T8pmcWkNGWFWMZmk5fmEmjbn5s7LxvK6QPwoSt",
  "key31": "5VNPS5AnUuFXBUKRur51BtFpnriS2rncUcPcPNVV1Fo1taYi2266r2L5z5nEtCtXYDWZ1bTFzRsjQTxPhHkjUK4b",
  "key32": "2a4Qf7TschBwbeEkVsr4egkNTJ2pJXmpgvm1HHgGFo614wsucRMoqgRd7wE5weJYMXASKnVDyV2crUUcDwRqHmLt",
  "key33": "5eHn72TWUdY8LHH7XkTCzHGdQYj7ygtqtGh7zX1WTW3SZeTFvwEq9uDBvZnoYXS1r6zCVPkm2T9XAQmi4X3wXf9q",
  "key34": "3PSaA81NF3zWGtGqm5qGrPUEMoWJ5X4wceH1363nE4NFz3ZyMjEWRfTwvAxbqjiMJL9n9SrXPZ22Ae6QqGQYnFkm",
  "key35": "3EGcL9ckkGBx7ou3L3wjmSqDcYQfzt9NL5Js6VdNLShjwe2o4jaYt2oEs2B7e1ZQJJaxFfHPnrP4nXf5oRKtyANA"
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
