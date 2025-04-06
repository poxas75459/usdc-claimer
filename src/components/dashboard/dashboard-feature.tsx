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
    "3oyhGwGW3JN7qKjyUXus5hTzRAoZDFPFXmgrKi8oJGqnon5n2ShazBPtHoy2wUbcyqUM5XGs9V1Yaor6LL3Lj4Bx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "McaSF9Aiz3veUhaqZQ2FhKYDGHdT3wBgzZdSs6iMBVbqoPVJW1fZz4a3XcLM7dU7MqvMfj5Ki8D3DgoSAzp95F9",
  "key1": "4zCRL7EmCjR1A1ovgXaTwRiZHsv5nvNvx2WKf65RzRnnmLSk83BpSjYkqe5jTng1XKSoZyUz9qXK7GVh9D582icZ",
  "key2": "2nErLQWKT3pdKkppiZN1thsK3bkPyHnGSqAqt8VohQ7wVUsJbJuXS8qXS5mPr7i2ndcq2Q1WYMJvz87UuSSnc8u7",
  "key3": "4M2hhcjR7k26yM6aMnW5vm913S7GQtLxoFYmNKMNQd66tXddG93NDqhU9QpSacMRyZa7vUoXSN3ZkevPBx2ZCWid",
  "key4": "2ZbLnspZdYr2kfNyHM4QLVMekZJRgzC7wthYdWNcjzhe6XCfQNFxEMbncXfZuLwPgsptjHHGXYCjQLPkZJARtbC4",
  "key5": "2cfbv5wqxWDSY5nXL5xUMf3WHGQVE8hXgrZzdBGmMJRFEeLwQBgq2DmcUCW1CcKiqTEugF41L2QVQf6Wppjw66vk",
  "key6": "QVwP6MvC5xN7C4CPZehtnsxMTijTvpVbJQ9YnxSnGmcxm5D1crcBPxWHZPQv24oEUySjfC1mmELAjNFdAnDf7bF",
  "key7": "3wBTQee9wcTpLsRoeeFLKk9mnnJ6mWywcg1ymE7k9R1kciU3eikzAMeLfrLNv8csavbLJuwtWDf6zZfQvFXZYprP",
  "key8": "4EMgJpQ4ZHnPfJwfSiDyZpgwqssXZmWCBCxmQmyr5ZZ6ayzrVeutoH828swdzQTNXaH4oYrN8yS74DGYEhCAF4hX",
  "key9": "C8eETM6YHBHq65Uh8qznPnVPivkB3SY6HttXknzDz7aqZNjap4pfMYTco6QxDhkZWhA9VQRrZ2ejSw1dUwKCCaY",
  "key10": "4FhJpEfAFS93CiCjRvhbopQ5QMfZa4PLApAhhW6z7ZhAYiwE3NEDnBa4T4VteSauG8ocqHreY2rNyzSSHMmUPevr",
  "key11": "4y6wb6E3Q78z3jGqMpiq9eUx1k5UAhZzNZiumkTjPxMi6qMyyyzp7njmghKPqciV7URYqZc7YuRgeEURJMZgK8mD",
  "key12": "Df3T7V1eNwd6wMxnDtuApq4eKeaH6gpb3CY92HNMewkwkQqZXjsvyD2xraa3DuDiKSsVR2va9YAep7u5W2ihU3e",
  "key13": "rdDJCiqqvwPmhSoTSQUrZFNKyskCuLGfoZyPCGJUJuFmceWkKf2gEp3PDESs75cdDtZpMiTci3MEFE6MTnsuUKD",
  "key14": "55rEmu3FUCKnhPzfrbGUvLbfnWMjbcEfS2ouDoCwHmhgaERzNCXXsgtPK8gGAHVxBjZ4M3SSoNmvbCrreZxkFhTh",
  "key15": "p8cMT5FXWSMhf13qojo1qyN56bcRdJnaACTXPKaSmKnF9K4AsELRz5DTV6V4a9294N5EPEGo2855xt94boiMCZ7",
  "key16": "3kmgDwBfB5Wqc5vL7DwyfQ154FRwxJN5SmrkA9BHLFNGz8PSykz2kqkDmMwSpd8AiBQ2ykahsG1PwSzLZN4vkv7E",
  "key17": "2jDKYZr1YodhUVLgz1wpeN5zk2UVvBtDUT9AooEhRWSNHpzg9GZtJsJ41ExqwC2b5jajTSVEvUboyBTM32vm6J5B",
  "key18": "4JdzzZH7iLjg89JFp2zR7gH6dMbUrmd6dcMtgcdEUR9V635FWjwiox1Uh4pZ6ZCJAX8ryXio9hfSqaqj8CgiVv3B",
  "key19": "3ur9kD3GahusmF1XcQM3CAnTPdUqxr2utMFwf8agnLj3pom5KAC3HwGQEu4xvHAzxyScZbEPuEp7a3mzXDDLwsHf",
  "key20": "1M5NXf2e5cdPXj6cNdGQzRxx4D1tszjUoonU3jN2DFbEbe5w5Wy65YUooB2z9wFV1fwx9j7NnBVT5Z2qSUQ8hNm",
  "key21": "tVswfrYZyPWLS7SudzyxzFnLjsC519haqYbH29cfz1ZDMMPSrYDQNpYQhsmQ3WhLZdZFV5rKBaRdYeuKXpCmr2M",
  "key22": "2MwHrcPfBgUGYYD3Mm3SiVDuV55ryvCCrE7wNAcPwHRkb4ZzktPonZHYKJfyhpRuzQUUKDfDGyBn2BjyDcqxE8nE",
  "key23": "64jfs9zJd3FpqbuqNQfe73tjcnNRakSgbunSR9WGVLcUJchhbRuXafpMznMfJnNsAy7XEiaas8WZ2dJFadS7mnF1",
  "key24": "6AyqNjFSQL2TNtfJ59yjmRAqjKRufCgFkkJFub9ezqNCKNfpMWjw2gKudQGyZUWL6KSkCJXSfv7t4tRaPLgEztC",
  "key25": "5h5PVZbCyapr5QkWuC2zwEAKkxsHFg6zefeb37xEXnG6tHr8yUwbRnPitkojV8tBQ1hhdEpWJ9jRQvhhdyMLoTKi",
  "key26": "5CeMCscFBT4ecAm849w2LTFxQ4cGsWB7tcFVS7fyG99X9ymh4vTw8ZXTuhzXq3ENcukNF44pRcja7dkMJ2W5wHQc",
  "key27": "9kFyPcvb6YyDYYQwDFL3V1mCRYrKU9BftDf4i2ueFSvso3HqwY3oDSZwNnaLUkKbwu4kqGUX3WGG6twoQYtirYZ",
  "key28": "5cbvQ3YkpRfrhB4vjAfLiwetQ4dNh8CDTmtkPx93UZMbHvAXCmj8Ghqp2Rs51KitSudxPUJA1tbXuiZHhh4qvm1R",
  "key29": "587EydHbqsEK8cecYxv7hF4N82eMGLi2knmGAafBxMtP5MLkGw3u1hi8FzbQ3NFNpxCj9BxudAUqSsbNADp9TpeX",
  "key30": "5uFjhRqBDF9a3FiEUBsgBwDJYN1YHKE5QZQjmGqGzPYXooGxkTdc4fJJNxrW8d3KSAsGmWT7VUmLB8V4qbPEL5Eu",
  "key31": "5WRbX8dD8vuugnB5KfPKinkCAtQ47hmjkFRHz332VZyMNfjYePRpEuqLrJrAmCEgorphsXUWNdwfyLZ3AF92wfL6",
  "key32": "2JpJ75TRqU5eg6ZnoeH3PmWgvjGf1vsPmDdJ59owjBydxmruTiWGMC5FexAB2yj2ShD66oZAeqfbzqpz1gZ45WHp"
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
