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
    "3nRKtVfkPh4XdmwAvmwFL45Eh4bxRmF9MG1Svdr4eSQUEsnppSMNduj73VZJoYXYc9d2xNkJ38saWevBZjbZNFwP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sFxLBcC4wEDdWXUwN35Q23PGpE8qLCrArAMWZ4QjridjmqiMGMqbdX4gWmoqiYnQ3KbjgydasXr4YPFePzwxs1a",
  "key1": "5CL7oFw2DAkRzA5V2TM36GPTapB5a2NjHt5MU9p6dq7UZ8mN2DVW6WMTRUhoeZWZDrkCbDSJ39YtnqGRPaMDBatY",
  "key2": "HBrPka9zCAdSdJJM2L53dMXxyrEQYyVLLk821cdBKZHttkmXpRRS4XJLurnVQsHDF4E2KQBabbsb8WvLyY3eCMu",
  "key3": "2TcEuLfmUJFvM2LuGFuAZwikFyWFW8fLAgeqoWJKBEBufJJwQiBoRb21qC3wHVrqKgUyZVchsZSqvfBtiLqAxdve",
  "key4": "sjHtduwEuXpYSTTfeHZwxRWVWYj4NYh4RWiabzKmqHCuPfywojJnPWR6cvEPSzssoDh8o2E2aLj12hwSDqYSWq6",
  "key5": "NvU2BJVssyUNdB2SWkdDFd49qftRJjNFaZT2BffYAoirKUqeV1HfCF8G7guYMf1fta28Gh14L9KhE7YnK2YLVLZ",
  "key6": "3tJ8DYHLT6u5zjivR5vXQyZhBtYfg5wxX2A9muRS1QYBF7tZnnS87VzH5EVxoPcQWymUhMzBWaBG1JwZPPX28DsY",
  "key7": "taTzqX3EkPfsU1D1NqmXmLhFMDxLmWNoS4GZVcyuMgBUCvwgK8vKzMYvLbkfnc1tY5UYmF28XbkF8Wn9FhG7uCq",
  "key8": "4MqUULPfaZzJLB19zjnzpWGThMYf4tNXfqJE21o9NMPfxpjtTMzMCJHkMPDQyjtcuiTco1CXMuvcUBw8fxSna4My",
  "key9": "85qKjaBJr8CPfmkxpvroEJ8ngoENBzTuFkJPmMUHtLdZuF6qQUq4inCCbhqBykRKR2zaTCbtymLiBudWiHE5doF",
  "key10": "3fwxWQhX1x7TKM6Y4JX4n9h6brcAoRRUSHdWHiNJQNjCX8gJDYX9xFZKadsJTKFokUN5wrprKcG2R8p2v183jrZV",
  "key11": "4DqjTdxpdbALdEghbpC2iKg9qCJ1JvZqtckYvBGBCSpKs7c48uYFFJqWwmhukoD18kA1TMXyC4CQSH1oGpjDytqi",
  "key12": "tK9YcW9F6XeuADQmmoog5JLsw5PtSfeEcYYCp8zhLZU2WsK9ococSAFJGpM96aXnmXLHFnHEZfVWTMiGiHvtrPm",
  "key13": "5fkg7p4EddQ8AWkRMDiE4AqZJNb7pX1AqThEjEy7nKYKn52MRAnq9PxB7yYd49DGBb19AtZnj5VjHYaJpHTez4V7",
  "key14": "4pCKCrsrE5hppkLpk8cZuaNQTdxhXD6XeFaZFkd9kBnTMqLRuSWgqxZgPxwQCkF6kg4c852rcGWct4v6YLQSB82j",
  "key15": "2BHYsQG7YJppDgaWgd2bY26AXvfFUgpFnE5fUsfV4DhZjgrv8NTii6VoL5JcHqhenesiKXnhHuqU7TzNoKhT62zN",
  "key16": "2tVJ4AdLkhkc7G9jYsPhKrzPRJe6FrFNmdGsQMSrhH6dQUMD8oDDdjFhWthGbFkhFSD6P4KivEmUpjudwdkgfYRw",
  "key17": "3uy2tq1pkWWYNsX1Jkgt7RpRYmZigWwk7au4Qp8yGEyiThr9Fo12PLhsNg9NEfYfUrUFnzicWQWtqgmMdPUw43FJ",
  "key18": "28zZ1cokEgpbE66X41nV36eQxnn8CHRUVkJQm4YDkH8QYK7ivHVdMbr98JxmoLHnkB4KAX7ucvqv9NQRrfzZTTG5",
  "key19": "2bwtyJnrqEHhQWLnFqJQKQ72xmLakrNHPDpQ3TYBJpNdv3QkefECfR5ke7tY4r4Rci9hgaybkeytk3W1rJ4ATesC",
  "key20": "5mJBdQRvgtwoaKh5rZhJJuaiPknqZPFmfsZKWtgqmQQd8NDvzbNgbjRY3AkAivU8kaUeWfaVowQgMAsK1KdUZRcU",
  "key21": "2H6KD47HgDaK99jpakrWasX1TJFPuN2V4DUtUNAvH4YrNJL3BwGY9BcfFqb669en1h6yKKHih66D6MTM9RLXjAdX",
  "key22": "2387mDJPPqoRHzRSS3zzmUuuySSaNx4dyx9FoA9d4fz5WDbH3Veao1XDb5VrLEALgQTXuh2gmZUC9Jcx2o85YMup",
  "key23": "3Rc5d4H9rDzc1QFzESuV6J6QCcHRqVgwkirLv2VnbgUr946aaxL81Q1iFqKsM1qsD2xUVqf5xV9ueqaSPWxvddJk",
  "key24": "GdKRQoSKKWcWoHeT2hh1YXfP5CXALFRM2Fyc66Muxatgwy4wDLYGMxj4t2T1ZGjJRxQgdijvmncnML4nbTam2Bx",
  "key25": "46SmC17Dv2fYf1vrjoctgNts2NrdCHoEy8NWaw2jUw2a2v6JMFvwQs1mThfS9MqSA7m8mQhToMTVQsT4vGFiw3x1",
  "key26": "4uoCmFxPY8zy2mXdiAY3gbMZwGQorxjKHK1EN76DrH6mTyrvVD7eGcTzw2j3JaHLhCYSaiXXVjDmLbGmNtRYFR9Y",
  "key27": "2dzWBJyZQqxqqWLPCb1zg5SUYX4woXpMKM1NM4myqgUKxmFgfr23e9ZpQ6gPmaCJtmmUviTXMpwJu8mZ6YkzqBc",
  "key28": "37YsEJ1adUWCg8Pz5KPR9zMy7rZtjcqwy81ZwmfzyE74uh9hWrkdLxw7C6LuTbdoxAKGvTqmTZLdcmsEkFuWaQyn",
  "key29": "3unNEEEiGo1CAfhJd3aC2zBWVtcUUdkH41iF7r7xvu5EjZG8S9Xejv3PAYNex38UDL2DMGnb19bysVHpqyvmomFa",
  "key30": "5wo9PA28Nhi49jm36cHtgUEx4h6szY7XLpYm8ixmavHye6xmRUbvAwyvPxzddBKL2U9GHgjw1p7Z6zx5VgmtHNiq",
  "key31": "FC4b5JPEXzcX3fRMCUSMPtaJNaFbmo141k6Du7zk6m9pndKZh1SHWWsviiTufTgAqmSkpo5WmYmsTuMXqNr3uEF",
  "key32": "5qfGee4uYPvEDQm6wsr8ajSg8Wpn9bbdDEpE85KKvU57jwaLtWpdNoZxhJRsVY2ogshVsnRt7HeWZd7ZP86vUwwP",
  "key33": "5W3t1UV7p8cZuywMAKSwNBb6eNEzxBQW6ostB2EZQ3nSEYdn5PfccEkSiQqj4xWTFLp3agrEtMmgGwiHYRVnLgSA"
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
