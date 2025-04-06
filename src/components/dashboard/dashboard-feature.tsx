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
    "34ZLfYbUMDcGwJ7hcLvKCJuwB6j3DVybBmZDmJAPSHUH1HxKj3oNv9KdksgmnrrT2opqcuGHQNmYc9zwS6Fcrowv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ov4R2F5kajhWuSBWHuEecsYAUd5BirMGKu6c4Y3UagLxhZMPNu24rngzka1JakTE1pijuQqUFh2GPdZNLYPCCb8",
  "key1": "3UsaWugR8rvnkmU1kKH1iHCML8cWzBNzCpWkTNm1T9XGuG5pyUeRNSh4TFjpBaUYdy2dnuz2GpVHuuiDY362Z69n",
  "key2": "27vTCVLdL8GLPGoY1EVQoGDKKUvMX62AXBraCxmhdvk1oUwwpZy6KazykKfWnt9vtyY8AskFuyLyJMgLDN4Cy8pA",
  "key3": "5mYr9UmscBzN1QUREe9yeLNhxbVnmrSEswmLbqZ6hEZfWNgzpWHTWX6ezhvMUyDf1QCQq4xn3oxTxdPHnSEsscuh",
  "key4": "2Hr7sCnrVRbR3PnGcSeqdPjZ72itEfkaSxUUMsQ1fhqodjCCgC2kX7QtTr9UM1vF89vEdUBvhPSoh3FY68WfKn5z",
  "key5": "4R3NTMHbBMRekWAiDJD6MAwKfqXjMHDGUHTnmekhfEnFjLmr7dVMubYooLbALTFLjSjASMdY1ZcwFrXAUiSAiAwK",
  "key6": "2YyNrtp1xd8j3cdb2zJkUsZACTH7YwXoyjXA4tVcp3VjkAo4mFW3BEzp2FdCqG7u8TU4awWPBgt8gY8jFL5qeg3N",
  "key7": "3cJ7Ao3RAhGKeme6fJpqgR2X2kN1s6BRHZ7A6ztdoTjwnFVm8ufNRU8YQVHxUKxzYQ99dJhXEEAvqkMQ9oN2TNCH",
  "key8": "qsKrqmqiYTcpSHSaN56dxxuXEPw92wQXsYSNgYHQt8yY7LZ4TLzwkXkdUQ46ms2NUCpiYa3xqxgc7ED9MZRqvvV",
  "key9": "2qLdF4Aq7JJZc3ThBQWLW8n2PugAUMghideMpamqMNL3YnmdUTDEDe37GJEZQeq71GYFF4J9wxWQsuiYaAgv3VUK",
  "key10": "xV4AfWvrtTpsmubzZMYt8GozpFGvWn2NHfVZ2hrK9vtMa37nNAsPhMe8S8wjuYqMjdx19AF6M6WfMuobiyrLCdM",
  "key11": "46h2mN3CfCsswM3NsxechcC7s3ooyo1UewUdgQLQYTMBNPDD7NBpvuFFP6BntWauXc9dazV5jWjk46AtoFG1Qtc8",
  "key12": "3eHwuLPhQNaCavKQZLHVeF9sMz1ixyHZD1U3vwMcMfAhw5zmio8wRaky2Vj3q9Rh1df3j52tijnTGkmzRrPPpkZY",
  "key13": "5xgYxNw6ApYQKP1BonRryf2ktrm2DMYanpWg9ePZ419hEuhrjFKJ599rUidgua1orKgUfSbJjmqkPNiZbnLBvnbZ",
  "key14": "2b2ap1fbWCCsbUMr44Z9sMiCFDD8Hy8hvyvSKKKKxU6xFvLjdsQaQzKGdqW2LPMPrcE1bSkiZzDBCJcMj7cEhVYc",
  "key15": "5MVkbvX1taC5xYJZaEDndeqr8LjpvAuFajZfZZYq5aSSq8wxwes32MLJcU99LoAsQ4u1xazgxQMyCWnwoCcJrSx1",
  "key16": "25UNJtzYd3eLRXLd6rWuckXLXDGAwrbwVG7HtbFzX2FXwa2BkAnUyNrQxxR3caGBZKtziaerwEcJ4Azq3qN6oXSi",
  "key17": "3LtZP3uRxzrvz7EHBKMj6kbc1cnkQjGxpNkm7Gi28hsns47zLCFDsLYygQ9rQTGvQXKbofVfVS3t4XFz3ZWCN2YN",
  "key18": "4xbAxE9V2o1JonZ7J8QCFgx7j7wD6wJfEKrGdYDXP4rCfnaxAyYJbJQA8aZya4vrjnPfYXhPwQuET9y7yVBFZsd",
  "key19": "23mwSFbdwG7LxmdbHAWg2s78QuqHhEoHP9UyhqimvGfiLGHZXQzdVpAcREDmvCHXEJofMiAiRsWaUGmVzSpXh3sb",
  "key20": "4fxhZ4i5icNVAHh7ctFhyLDazdE5Q5cFoU3GCZxAykuEtU2G4s6iP2wrntaKJg3XTfseE9iSf8GVZnqJHGNmXfs3",
  "key21": "2pDqAqWjxRJyC52Sdsw3uXPLCQWtU8bEhsEGAMe7bxeuEmyaoUQrs2x6S9QYi5RbNgyoXNYUiAcm2XvtFssR3vtH",
  "key22": "36Gf1mKHurDoA5w3HNjNSzqTKstp83YnZKA4GbYKCZcFpzr9qBYqvS48F9XnjFdypDeFL9fmcmNepUevFzNpnvX5",
  "key23": "63pmqt9kDc6A2jZss6rgWTmWU2qZ5e2x1v8QQmkAEw9rdwaUSW7dfKCzPdGFKFyBjye2PbqA1H9XjzXjYjXqb8Ya",
  "key24": "5zMrJdFpkUz7Ms39KeaBp8qB7HT8Kj4Uw9YYo6nVFpB1WMJ7f26ZBZ6T3uczzC58QNxyQm5PsYDMZAT6TQdsGorz",
  "key25": "5jmtqHy5EU6X7ZqMWzZaX9uTtYAkB5N2u6joyruvqSQVJ1bem7ATZt4KhH2vuRgw8vP7hXChT5UqyUHPJrc2js8K",
  "key26": "4bn33FVizimu1EcdT2NjPp3mf5BPR6bicHbB5ghkWKrNXuu5cCvYke2WTJKQLmbS5h6ES6UafgEY2qJAFP67pkP6",
  "key27": "5tnZL4kE3nbYz9S982dKeozk7Q52JxjrLpiEs7uUpHNg1zu7TLENsECqmBM4V8cXfBEMujzbgJcbQsCiz44Z6rJ1"
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
