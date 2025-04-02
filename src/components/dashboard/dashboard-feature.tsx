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
    "2TicERVjUD4rUnnBFHWrmkuKGac4GnhhKxxXHCU6q1YxYJRcKJyrz2tExEET3uiKRdCiEkrJ4nVxphzTfEXgtTvF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J6WgA8q9HKPJTtZ1SaSvDD94VpQqgN4ViJxo7zex3S8oFPiTMbre9QU3tmGDXFDs6mZvfXqXeE4DATuyYqxt91Z",
  "key1": "3YBcTNeagcDmPMJn17cd4SVHcCHkjEwpRmCQR76vDwYT2MzuGMKc1NhQZJoMKsuU9RXLGB9reg8PMHT8DUzs3jq1",
  "key2": "3E7ctWiq19SyBHnbgGTUbHMSsLcSVXh7QcyX3RSZFiVL8UqCgQq8J8XsiJR6CcijmemXUypxfVo9pTxWRAt3Zc6n",
  "key3": "4mQ6ttxCFJdpaSc1nKsPW5LBcHGRzyizBFHmU3PxqGuk63VTFsfYdpwBAV86VAhggoYgZxTiE6hYxWR9PSEtbDuA",
  "key4": "33ucemTwAZ5QvoqtQKGmidqZW6xspCr1Mmm4FP996nwKSZbykTU78KTZgkoEKEdui821GKwSrcSeGyb8XW1QAMHc",
  "key5": "4h2H53H1xSnVbRSiEJkWcdW83PMnBj6S3jJQo4xnZoGoaYinUAUUgtkukn9bQ56qQAocU4jUrv1itKoF9UG8StLP",
  "key6": "yZnTSZgFJaTDxPNethRKBWKv8eKM83EsKDmbJyLwdwEBhTyW4na5r4wSLvsDypR8kP7PzgrYaoFFfL8QzhsUpN4",
  "key7": "yDeMEpxJgXacN46YQjnDgdNs5Wbq16mndBJYLrL8JSPoWzrod5KEawgMmys83d1DgZGPnu6TwbbdgnhkA7tZWmX",
  "key8": "5jaxw3M2uNdkAwwYbn4hXHh44m54NJm1d3cKvALtiGze5Tnn5kMswA7mZYqnsbmZpmcvWVLxsFaXye88cjbekwbv",
  "key9": "57KVmzhWV7SwBJK24pAYWTRE1bDUYb15nK3MLdZ2FsMZJHqJy2BAtjWPjN3bCw3xL5VaCKyqmhXjd6xhbuy2aMd6",
  "key10": "32htB4d8WC7qoiP7hSTGSj9vBTXvMzMBJXnnfHQA2ixxU3VfG8X5HivG68EbFP46pUeXF61n1jtjGodCCDjCvPEB",
  "key11": "52pPe9bTZwYmtD9bBAGQsG1xV4iJ5BdYuRQ1TZ8jZdiRQYquvMpBCTKfHkqbqzhKD6YLsnzWRQSnYq4vDb58NFpK",
  "key12": "55qCT6y53SBry5Tu7LVBqE5CQR4mbFQyDZrbiJ6Gsf7M1DQKRuZCry7S84ZYo7UQjFSmECuHdsBiNA1EeopCpme3",
  "key13": "38qSAC5PkJMjNppuA31FwS1G3JAb3DEgb7Pa8ggBrN3UanGkx5jdbnSNhjCbEWvJhQ5XWweS3X3FDo9v7Dedmvz4",
  "key14": "zUWzcRaQh9USA2agqY4Hdxbj1EdzNkZzy53b2kd4UfzUVbXJgzL2A4fB9ULX6cTVDEWwAgvMX9EaCzese4AnUWa",
  "key15": "2rBCY8MpX5uqQi3mdUhXAkxFtBUsjjWQ5dXKoQYgFA5841ywPq4tzxV9bwR6mPM23oz4xzhTVYoeqvTZzjvVjKMf",
  "key16": "X6BqfjroDh2WCDmBCLmFBfd9cD13EtCJ58upoKDn3SnfJWkTYYaAKbimirbZ4JWL3DeK8WSUsa9v178PCkjQZAz",
  "key17": "4EdexdiuWDExSDsE13aaiahhTXfdJY8hY486nUgzSNGYYjivfsH8hHPApfntGd7dMh7NCLJmTPRM4LahUFu47M73",
  "key18": "4Ex9UUbJ4g4kCyzkFvYAjMjaW8jP9cGEnLZrPmyFKpxyYdaGEvxrb6bahz1pcyK7Q2KhEr7d97LDz2wSQX5h2xsL",
  "key19": "6eymYnHQj1hfYsSRGLoUMYA1MQRfUDScivgS1u2dESDvQVbmuLuGJ3UYs9AcdcotyK5Zoe8FetYkdR7fajrjvhc",
  "key20": "4vXch3wzkGqhc44utpAoMdF2o3MwypYbBtSxVahVrK1aodU2rGKjkQgxLyNrrfnqTrhm1zdjoB9ZLZVEmoqS1SeG",
  "key21": "64mQ3LZG5omtqeZREBpZsjkN6db1rR2bBwoD4y4FdLPBjbXU7YRwQd8fZABAUKJpGHGjUmpgkrpvHTb5nPpXWfR5",
  "key22": "3un2YqXFH3QxJo4Q8ShRbyrzysGtMwGbccN8WGKGDLM6Y1uQjrC8vaQPWfkyuzsr7wBTTsYZhH9K9CCS4FHQMtLn",
  "key23": "4Bpej3pcTSgoZ3RsJ4jP9ziL4XAnG5E2cQdrYkKEQ4VPFHyrjEqLhUkxVBjyJAqeNCbznQjPFKCiKAzGTAx2zPH1",
  "key24": "hEKUtR1QeCTLWKiLDGo5qTLcERoZ1v8MeHHctN1xJC3bJ9AAaBmUXSMgvsdXy2dGYuYsBAeSjcpi3Yo4FK2gzwN",
  "key25": "3BMtTWvHHDmwaDHvHez3KnQW2hiZFaYSKUz97F4kvB6mCV1zfv5YJUsrkapwVpMnFWn7H2vgDeojK27LAoXimYUR",
  "key26": "2apEZt2YzzMQiYnGypUK2qtGBmk3Mj3ZNggXYaR9Sme637ifMKjCSa1pbjWram1TSJVStD65he882ytg6aP8BXcR",
  "key27": "5DVQG8vhMJw3vsqvHzEP8XPpf6NyZB1LfG78idoxgCVaG2Li5LkMxc4qLhbRKseNHHr5G44c89TE42TimLR341zr"
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
