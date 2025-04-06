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
    "3ynERKriS392wwAZhHfenF1DmPcxH59akRrVNjjN6qr2pkyx5su8mJbuSpBmPmL9j8V931P1EB2usYxFZ5sJJLsn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Tq9XN5dCMmQAndLg8LTS8qA2xRzHtmsK8KMih1ZhYvo3LzuA1nR8ZtpQnswS8SW149tTXiR85wzTTXW81oof3T2",
  "key1": "2tFVEAJ89AUWPvALC4JgB66WVYYCAK15Dbk67zGTKbVu7C2PmkGGN9zGf7VNfJh9Mz1VV8FBb4sJxrsGpszstmVW",
  "key2": "65e9SaJLx6JXybjngxLXgfMFVbkhbow4GyrpjYm77UwJnbU1fVnNXPQ41Wc6Ue2VKfzH2SnxNSuJ5xzvCTisQvWe",
  "key3": "2CyCL45YkY5sK6QcC8wePQaHy4QGBMqHjQ5cwDrtSM9F5ZYtdQ7jufjmqMsGZ1NbiDuNJbNixSR5oku8u3keq7CG",
  "key4": "2YAfSxkcYSDYxErr21LyF2ofGStgUgGcNmzmVKM2kcNDcnm5Eo9m7o9X4vVhRp1FbK4qeUuVRHzDvDLeJr6DnKh8",
  "key5": "2DVD2tiUKvVtakiAhrwQeRL6y9fYEjYo33pfoXHW5wz1yxLqfmiAkp1KBQTpxPhuSswbb99YWXkqUTcJsHAgqEBq",
  "key6": "5sqxNCqSc7sH7AU6tvJ6kw9mYHqDxn95Y31szKh24Dpm4jurVtnJznqoqQU7n9eDNK9kCjpgvPtEzaJ9kvwW99aM",
  "key7": "Lz6tg7byWDt8ht6T5omXKXo9VGBd6t97BVvLndY6QTmTXDwUjXfJKqFEUGeJWokVoJb3qui9XjhZFMg7PEoWr7p",
  "key8": "5h8c5f3rMomrhKVHTKuF8JfaRGxQtNKF4fU1n81dhMtdeKiVUZVsHF17F5PbRBaBGhPHrJFRzHjbxpkq5ekmSiVM",
  "key9": "ftwDguXWuAxvyj3ULY1W9sWh95sREGNk5s8jH6FJKwXTemsuRxxBciaU1LBvZQAs1U79ZyqqZ5jiF7AJXbfGhBa",
  "key10": "5RYhi7XduaCo14gp1pN1WYYBUBx54iRQaqK8wgGF8Y7ZqSvspeFC1sZG9BSbcZb1QPSrxPbQtxA2t4fHfX4qdpMQ",
  "key11": "4Uxx4nDgeuQNi1nV7nJq9DHy7SEPb3eXbQsjDBfWb7GYpqihxBM1YmeuFQEuDNXrneGxP92SJ119JiqPU8rmtFM4",
  "key12": "2AnU7uPwx5tkpJXJLQg9ZaBRFoLK6RxyqidaLU1GoNen8KciNeRgRFYbZGdTMF6jrFrw42SYwsbwAUCFxdYu9oeZ",
  "key13": "pLMRepBDKNxNupzV7xkf6xfWBxxYQcRYydL3i6x1DUpEMv39yUYyN4r5H1mRMgGeAj368BHZtBv9WRLrJ7TSKsU",
  "key14": "5uRaMBUed8e68Jwz2V2aKbMCfSxghzpSDh8G7FAJPyvV8McAqsHrGQLB1gyjF4Myb6BefsjQq8tVbMz5q1TZgTNt",
  "key15": "23J1yiZczaxoQ6d37HtrPguvmjJjMWkZ9pYdbSGWZVkVgsQd2fwL4ar3vVMbccVMatQLYo93qLKpAoCGSQ6RnGee",
  "key16": "5aKbf7cWdKGiEittR573WTHrPneEKEaukaNERpV6Bs49gi83oRqfEEbYn1fww4ZBH8LBoQPmPcLWwfthZCSfsVus",
  "key17": "5NSzYnurb8gPtP1W1YUagZLDhRMrttBmTnFT94a2JnzJUrCrQhQRByVuzfLKc4CpmLpGshwpTDgyTo49pikw9ktS",
  "key18": "21Yx96DppdDYP5NH3jwLyjTiknZqAHL8jEscoFV5tUsfktCcYhTXLbueiFHRoiuZUHruqMfKS3DzYiQd14YCY5DF",
  "key19": "4WXgjG6KcxqrZfBgwJTRDuRt9JY9vZhaM6y4zn2vcmC84t7WYH2KmNdPNRpMHfuZLwFuQKasmFFWMcKKcdJ8UHqc",
  "key20": "3ptHGTxnEWKdm6F6ZpiCFdchBg9J2gkAycnPPV1oqQGBvhrZhadd7q1LADc3QBa733vbN6MXGXCWxJKKy9p7yvxx",
  "key21": "5dpSz5gxq1LVbiJKmJFsjmLjMih95awKwLJiZKKtxUhEUWxtefdvxJa8oqRGxNvGGN9EezSWbrLQx81FnL3mThHk",
  "key22": "2P8zqcPU4U58T5MTimJEVtPtT8CuxJwcd4VpenTVpEbL6DMSiui66c6dTUzrEa3Vy8sj6yhRdcck7EAiQ29jjHzv",
  "key23": "4iD3U5qmLErMfe9pg3Gqx1dJfSk1UDkMDnDZBZ4wx6xHHqAznuYq7X7iZXwmxZvgsrLMTWJhRwgdXWCVsKBhh4bn",
  "key24": "2ftzS2f5keUHybXx9nnbeRjWC92xfpEk2wU9McP7QD3SSorNUsqdjWtY4ASrDD9YF7fDNpAh55Z4Dt9QfmkSodHu",
  "key25": "3LUa9UEfwL5hQc38BKoPt7pYiyNPSJYcjwk7qvksvwmb3UL9mikSTQbXNfk3k5A6AVC9eM4VFq7h5zSV2xdJ9QrY",
  "key26": "kQTiRYw5GE866Y4jsCZKvtA3SRGmzwCYk1qcjSdqVxndvPQUBsEdBNo2WoPhmDTazTfFd5DkgFQkXPHi9aujmfq",
  "key27": "4SHaUcTnpWJqFoK7Q7CaWsP4ND42ZK5RbzGxZmgUsTUrBrL4ccnNyVhzfgQyXCqTp6mCaftrXF4TpvFiW4NSgCap",
  "key28": "3o7pk8TMyo7BZg9FWo712QWV69YGBNwQ82XL7fY5rbDzLgvzjnE4HwyV2EFxLZEoHftyKBxkYbZ1wb9HEC38np4K",
  "key29": "2eSEckUrUVyiz6udMvynPYjeTaiA6LsFMJ4XZd6NGP1cWn5XGDWcEDj1kXCvbb9E7E7ZTBEsZo1JrxWtETWxeqzA"
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
