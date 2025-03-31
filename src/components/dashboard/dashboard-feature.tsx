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
    "vAhCbBnbXCYfV1stiAW4nUdxMuMwdmuk3cYATknDNx4wiE8HUokJdzBHUiAPAsDhQrEFZtZ4QTBDR6bkwuWc95E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ue6tcFG3HphVAbBx5u1N25ZbHAt7xWTvWxDFYa4zMJR4a81Z3RVWbyyXtbEfCtYfEoXbzVxWoFtvjT9p3cxAVX4",
  "key1": "U16auuhidSz9rwBUmKkR613xc4QvuKQpGSHGAG8YRPzQdvFgAb4bjASruh871bdaVRUpNbrEeJHukKw41bYVZYv",
  "key2": "yLge16SumwcjvJmQtyg67ipcNAErzPm4z6ABDFtdNjBbWCHTP9CUx7VkiFCN55j39ubMTVnu8BdYiGtJhuKWV8i",
  "key3": "D2ZoAmErLjZBoNXFWiTq1iAtB6aNcNg1gzqNFVs9qGCM7PdKVyPoqAdHfU3e29YK1t9WAhZb9gRv3hwBMp16xDS",
  "key4": "2rovxNC5USdRybVeSwzkfD9DvupLezS9yGVraCDdYpwaAPPx2usNy2BaMf9niH8rwcUzbofgxoBTizHRay6hXRST",
  "key5": "4LyeiqQ7x84V1qYsVpCzPQUTcE5A8Zwf4g5hxxDUMhQEaDVhDNkjub1YWuLPGq4qPCWJqFxWNv4VAVUp9CvpC7GZ",
  "key6": "34u2MY8ZQUzb8Rziwkh4ZeQ8imeVVtJEipss4LbD5BYoRY3zJZSXjej1xcXm9oLmkLp7384cnKd7MUGmwmu9UEh2",
  "key7": "2PR2njhAG76RfyeuzoCMHmRPXw1oK2TqJnT5m9H1YQdG82eyWBdLy3ak7DTG2H8WNNhC3JXDcYpdR8vJehBjaBF6",
  "key8": "3jFL4MasKKUQLSH8M8TsrK4Yg6L8CXoWeRi5tFybXFsHsyGKdmo7oFcDMos1e7Pxd7bFJYLPhvztmqipaQk8fFrF",
  "key9": "56ra9dUpiXQ3HNRQSYeCD9MCJkzbvh4pBc9e8Likyhh7kmZ1xDc1QgGVoD4ueBmpGZxECUbxwqR6f2Uama3udUG5",
  "key10": "2koEe1hLZcxFDgp4aeKgg6Qmd91zntYRL8WtJzGDt3UQvmsqeDADhWtyJEYm6mXZ3Td9bB2E6FyY8qGitASimva2",
  "key11": "av7NutoHWF8MuUZLSDNqUHuEii82EfzjzB3S1FnUwRjvQWTEGxVHnxZmVBKmojdGCYZMeoY2LMZyE8L4Z6PwccY",
  "key12": "4h76kkozZ9HKXkpjeJoJF3hGEB8scxwuZ6FWjTZPS6nnwcVWBfZZVdgRPMdPJ8Gi4LW5FuRQrSuWMp8UmHkVUz8j",
  "key13": "odva6Cynx9mGkQzGFh45xdfMfrXt4ry6iJGKwyLepkZ8hUeokRNMa6vPRSwqSzaL8s9gXNBRw5q4tRYxKh6BonV",
  "key14": "4pFt6eu5KcYAC7FLFTbfsQNP6Af7aLx9zmAcJXt11pzwASaFSdHNkWZgCRSZ69W8TeDQgcna2WnJooGVsWGWPGpe",
  "key15": "4PBckZuC3BZJ4e1jYYcTzq8YTKo4ni7pghaJaGwjF3jg982b9Hdqo3Jo9quS1xjrFFFN1oQ83jYnywNM7eR1VUFQ",
  "key16": "44PzvAtnqsaciVhvLZXL9WvwvpWAHYS8RTmphrDY9TqTb2WwVFZ1MiNjn2qJHteRS9T5wKuhDWMc5QsgHE9K76XP",
  "key17": "5jxmt2iWKnh9rFKZLnVUY6KvXZa7nZBsbJiDApKmZjqXMPe4ZTb4RQfR48WgzwV6xKstZvJkUmRg9B9jERWjj3aY",
  "key18": "4z4tJQsTuU5FWDhtNFR8PzCgaCDN6KqpbeN7UgnHU6LSfehj2dW2JKDpqwVmuaFvn4WLtucYMQMEibMgtDNz1jAW",
  "key19": "67q56nAKJQ6FCWGXH5SQJiSP2qY5jmt4Sotzd1LLxDXanfy5Vzmog4kGMZyi5ipGmB7R22YLEZbkDKXrhFEwjNfG",
  "key20": "Ykyxtonr6C6U4wKQKwnF5PG1pFraifJRcQAit3trzRA68oxo9v6kkB6CMMdCrvB1VMqoy5qzLrKA1EfxxnvEPFs",
  "key21": "cpJYGi5crXYEf9jJdEfV6RHz1spC9PprzrQqPJU415TTiEAwsw5TfaSQSWXdE31S7T13E9C1gH8akbcp6q7Dggb",
  "key22": "4Bkyx9u4uTTuBDvzs3nsmq93UGyfXCwnokqKKpkwQB5v2BE9dnyjYVfUS8yhZC9GL2f72RXBEzbUjeWU4zkvc8we",
  "key23": "2xRHZuuRTL9kN8jCwVqs2sx6jFPcrHMBwZoa5yxqmRMXTZ3CdRB73AC3BEHFkAdjfurvxMhcWkSTtt9iun4sK82J",
  "key24": "M86Y5HpfDpU6Nse2YBNDgoFZcUsQXEG95y5ZUwfSkMwbRpTQTxrWSMf9bE4fZeuVLz4GfsBJHT6U977it9aQh6W",
  "key25": "5eQqBr47ibB92tWqQ8r8qjUKzbVnvFxdbzHaP72FKsvMhX52jz9cS8cojqChM8zZSGLg1AM7KD1AncNTWy7Yqe1s",
  "key26": "662LyskZ2WK8aMTYkueWnh5YFVSDh4edPrqTpEdxGsu4nnV3zsG4U94KfA3hVcsRSCm3h1AoPxRKyUDYuPcLswX6",
  "key27": "2UqEctpUkpGJYAPbpdkoMwgZxrMptGN3sP5HUrqJF5HWYxHr4vrhxJNmZps8jMFN33sLYDuGnQPpNhBHvaq58Ftt",
  "key28": "iNxYJXNTWgqShatL8hHXtYVGDwR3w2nZoRLnaFBAr5y3CgT8J36tUr6gFprcsaH2zhtXiQL1rngcCvVZ9d1mHVk",
  "key29": "qYuQG3FUSjjBbC8kcxvC1zHXUiYEwguHHeGdV1DPLHuVoT7p2rD9zGvLCtvy2jmdafrVTUqsE3RLXs7DN8KjafK",
  "key30": "3hBS99A9mR9WGQffZtzgiEjAH1s185pYgZUUEsfZNtZ94GXcG2TQGRCcL5ft6uM7sMYLEFNXANLsAC9N7fGeAWgi",
  "key31": "5CLqVQuMS6EZGBmdG3NFu8KgRVkHVBiwLWFtYDVZcybmyZD7iA9zcp3FvL58qx2M66V79Nr5H2TrQWLe3aY8PFwV",
  "key32": "2ZEuJZJn5ktqfPrP69oTA75LoFoNCDJbR6ZSSz22yrP38DTQZfNa5va7frcicC1VE8hKxuAfJQLCXpTV4VUMW8AJ"
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
