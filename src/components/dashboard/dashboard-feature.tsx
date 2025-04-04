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
    "3zaWywvJjpFeGqq8DBEgKdQfNTdWYWHp6hgmBeQ3vdphcUqWth3rEvRRym63FX5o2mQ4cS2dvW5KUDpfxUDeMjCf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qNgEd2bBQF7zgnkeY6cWWJRn4HmEfoErz9MA3c3DU51npyuceM3mXXCou2DiZvhpMH3eP9yYsjX1ZFSQfkFCoLm",
  "key1": "w8UXmsgB2WuEQPjNA1HZpeYSXnkhEpv81JznMVJV84NkHhsPz3cJ6un4iTNFUeima63K5vcBF2PUTyTSuJg5x3j",
  "key2": "3i5a7BSSUGztr4FdjYdvSZ3SwnxXBCVfcgL6k41X7UWyJXxQieCQDyc112ktKt3tdKsRvXxUuthQmJsYN2GrAYDJ",
  "key3": "5DaiYkCB5WnfBBV6hPXSArwrWKDnZGFRd9DKbA15pzNFkWCyR29b9s2GLt6DZXTR8LB3NUYxjz6KLFYtQ4naeb7p",
  "key4": "3Vz393w351BanLgvG7NUZjQcCypicPgop7yvAHTHpsMxnk8LFXxFnWjBk9Ach7XcCg7DqaqxzweqG6cr3KQXRX4R",
  "key5": "aHQYmE2zF4SNuPPdWgFDyaB6YKNzYrb69sa7Z7n2bcLvKohP5zH7smaiNkPFkswF78Kqq4iWrC6Bc7hsXAY6WVN",
  "key6": "3p82DZZMJA57kwzyDZ5Qgmvm3VrTytbX6akNy7HFvVSLGDuSS7SDytcHLH1hLFwFgmpaJDTHARKw4CpSg4RkumAF",
  "key7": "64VNhdkEsY8hyjAaFEmMUxhkNZUdya5gEfsKcmvF8wJPUtkzNqt4LcYTv4FQoc7CfHvNpMRP7NQpgH49ExzetDv5",
  "key8": "2tJJu2eELBro9wZj4SfWxHyWKNLC5p7uXNjiAu35vkPkTDABxUYpztnkBCGpxj6uNBN4jMCEojHZx6UWMgHkdewj",
  "key9": "53QqRExL6G28smV5AeQLKFobYhF6Hcy1D2giYvSWsHtqyt3D58XwaPUxQTvB1dw6jXS7uGQ6yZtu3gaCmVkdZa9U",
  "key10": "4Sw8zUiEi4XJG7DtJnLjCyuq55m2YYUkyMLB36dg7qxETX16ZiEx6bKLe6MFQnAZ9384kSe8vqhp2HV9t9hU8dAK",
  "key11": "5ZmJFtKhsBhiRfEn18jCwAD1XNogHQ4Hi2kc4A5pQnV11ymTXNyeKDiB6kfu7iftGdMXux8WVG8yathSAGHW8qjy",
  "key12": "4jtTaE1uEB2Pgkv33SHwm7ov61NiQnwwcB3RDRTJK9SjaULGakHWUtRuekgtq7JrMNe2YD1xgY46xQimp1Zm9Dcj",
  "key13": "2ReU9br8UgDrKHjCGeDHjR967gPMnFqF2yeyikaZ1Q4cfC9NNAxr9aCUcFeHn7iv2wQu9CDNLj4E93ta6fNLiy3a",
  "key14": "2cN6SzGy9zZEXnxn2TbgkMSXYAdhgUjF4Qj6yavMH1e6uitwExgwmp2oqXLLPk87mYcX457E6tbcYMPpSQrxaPuM",
  "key15": "5qbhyUb4qLQF3aRcyArqYLVJbNZnkynQkLeekoWkXfXHqcpfRoLHarmfxAqkEv5zPJxrANYS6g43ys1ntt3T9iEi",
  "key16": "5zhUkURXAd5LJ6BoCyHcRLtXCz6PiATpEXgsTJk1PwGiZ7sGTgRmLEhjXGn4Yrp6K4Nq7VWWNWfNhYUjGNUe6jPy",
  "key17": "4nxbjnSLpLbGvaySyV1934FrpvkQb6jWhwkDUTFN9jmH5eKvwggmth9BeLT1tgReYmkTYgpMvxtdECzJaYTy33HA",
  "key18": "3G4Hort7q1kHrLpPAvHQddjopYED2K6CBAnR3Z9TiamEBPbvxeKcoRr9wybcoZLhnq953QVQ6w7UBpBxj6igi99d",
  "key19": "3yy7689oVA7DDpnedqyWSAM2yKcFfBPYUt6vtyPKeiii68PniWDm82YgYADNwJdjwkEXHxxT813NDV5gGVhH7Rpv",
  "key20": "3NDQZ1dMagVj48S5X5M9gvNNj8UtnHLtfXspNohRFJmEUoyz7JkDf3UjqXNikmkS9uxU7byh7RwNSRvARqcyPyNq",
  "key21": "2FuexTnzDgpp4qKhMN1KwEqZcbBPJZ6NDdE62d8UMrUk5jHSiASVJC9AqkC3zmCQ8TAxkADVKA4nLRDpCvd3cgK3",
  "key22": "2tM1PT1C5UAnPBLSLaoG3dm6VvPAuxkKQjth8hznjsyM2DtchLdQEYrnMi2NKTLvVmP3vGez8fUR4GDjnJavNbuW",
  "key23": "48tqzoqCWAbJnU7W7xHv8XjSVZckBaqTze5AXKs2tLcjmBuQuS1ocbJ7eCMi6YanMndvtJ5g9tjdKyk9kFtzyNEJ",
  "key24": "5jkf6QVX8JuCRdE8xcoPaHUQdnQXWzsTnAkVcKDr3ygPc8qyQ5qjJPvGkrPL6d5qJxdtzJxpd2ZkM2KsUmwEy7vj",
  "key25": "3cfsYRE2xXn5kdLoU4WJ5FiRxpu4ANHHhWXg53RSXEQaC8MoKE7oXrjZzG8HNVu9n5WgqZwaD5mF6LmjDsND8GWY",
  "key26": "4sURXnBp4Xqyh6JSBRHXHXfpCsqGw4pTgTJ5hHDYG2ErdR4gmjaQyGoYe5Ma83CtCK84cDF5FffuJzKvSiSzT9cM",
  "key27": "3HLczgBLqfCMihxgUDqkv9ZATW8VoANDtuu8N8mtmSJPZibCNtMLy71PEU6ZfrdksCHj69vK7SgAm4ac6hNLkBxE"
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
