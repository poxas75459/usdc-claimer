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
    "5YqGvNFQnur7eSXDphJduGxDmmnW1eLVr4JCPYaGXrZdNUcVvjYfko5AZKbxX13Ctb56rVES2SxaEth2ZYy55Zc3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sBAdKNLarzHsqbRSb9cKVvEE4SRLeE6LiEzGNcKCXZo9pqTbNVioMMGC4RdEL9Nr1Y6vrXvA9gB8it278mLutAn",
  "key1": "BWxGiszoDmcXXCdBQ1c5c7MHdEFfe9GPxtdL4DYJjJBA9iKhoaSeQuneTyBEA5swVcaoLs7TUuYWpE5JgrRmBuX",
  "key2": "UTHcBJWooKdZ1zcY4GvB1z3ChdxCPQk8ZxaK41ePYDYnuJbawss9MwRgQBb8Rod3rctEWo1H6CzDwtjrWybKfXZ",
  "key3": "5k5x2ctKiYaPzkMXRM5iRh8TpxSrYzukjXWnUALWa9BEeAqtrab5WXtNkc2F95h8kai6tvognqFezjYQgxo5Xdds",
  "key4": "38GdKcnJRws2DQ1U62EWVZWWtSGbf96VV7LSzfnid4JVUxK3YydkAyeZHxb9s7ZeYiLZ13Ksj6CA1WDtSYYGJ3Zk",
  "key5": "cV8ziEkfcEPND2dLEiuSHhPT6NBSZSJBFj1ddj5Dv5GCymEfKkfzcv12beWRaEgNPQ8GvVFtqWb2yZBzQoKksts",
  "key6": "3xCXrkpiFD3JHo6Whnxx5HuM6FcgaWeon1vxeArtJVzYuewPsB5aN4xsmaPAbJ8sfa9dHHzXpBXfviSRvNSpBk7f",
  "key7": "5BqNaVbUsx29imxYoWq8dPKsHmZ31voLTeQU4aDf9g61y3UGVJNYnKD6WfwVzbcXczciEMSq26RaGytMKMXFYU84",
  "key8": "3mxij6JBJfPWfcGzvm9QpPh3wp43ynNXftfPjB3zzznCJZJqs6Un8gHsXWBF7ctwxNU6tYP3z2qU8MCq5eF3qBWC",
  "key9": "Dnbi5uMrdR5zBXsZo3u5hLBQECbWUysh6hFuvsyjQnUk12xvn3w9jiZTjyAognBFAMzgfc9sETTQzzrtzBPpcNQ",
  "key10": "5d1X5v7v7cVQAaVsLWcgXE4WnHqRpY88hUwA4YRwY8LUC7U2F8JetZnLTVr7wiSL2XWoP4yAAfYaNz1uEDRAeyR1",
  "key11": "3FD9v9R2Fn48t28TJKRoDJLQ7BfXbY3qkbCr4Ea7Mc87RE5WseJWAdvoxuJCQksdXz7XxoNdToBymapuScPTP27g",
  "key12": "3LVXrxQvPrYKacXaxz8JNGe6odqgbqwuQ524RH8NZyHZ35Ddis4E5T2xUCb9aj5JFaBqALzkbKYwzSdcFvwX4tth",
  "key13": "3y3rDh5KkEcEJHdYags2vfseD3e44VAgcqYAdjcMnGnTgKiGDgE26fnNMs43Cd4PS6k5nSY8JdhCCdiXGK9P9RUF",
  "key14": "2TbCEx548MmGYodzLLgcqmZWK2kifvgDZMX5KncmKqvJ9HNfZz4Nrm9CXzcgk2jSTDGVCGCcBBVpVydcRLrDPRo9",
  "key15": "Cahmb1i52kQQQyrVi5ynqwXKBXw3tRapfcdbsoA1aF4Fn3ghLnzYHokou8mqUUZLVwK4AKuSJwzm9UYRPAbYKY5",
  "key16": "FQQLPKgB6XJ48EourLGgiotBjaxdw3KYZLSceHj2Zu9uvJPWRTZhu4dAzpd3TUH6EVjHkipU8L6wa3hWJWoR2Qi",
  "key17": "2rigsRhSViQstg263iAGYcRimeyfoJvT2zrsz28DrzbAB5hRmHXQ9s3PZQP5wGxxV5zbZmTkeZMSBUx1m3F41yMx",
  "key18": "55p5oax3rCn2MJGinivvbjbwcbzTUF7rQeRNRWLwMd3Q1wtT5nj6qa8Ww6Dh4YBymEWmCcKDDXmu9L5m9xFCNxEi",
  "key19": "2vhyg7MhQxXq9spU58LYok1CU4CYoqzq47B7QrLSt3RQjd4UkMXcS4t5NatqpTATHjhKsL5YJr4gw9kA6YFVhtLn",
  "key20": "4zZGYGhCkonLoRZx9skh3GNKFZhGQe4fyXuvdst3Mb7FJrwLEzamrRZzGxyejq5JM7tZVeZ8EUXFsSfC71pwDnrp",
  "key21": "5N4kmZT8AX71zdejV8LYaw6ZR8pXKmB1cLCpDxd9V6Vo3if8iuWqCk4aKYa7nc8YvnQA4RgQUha64QpaTcDjRZo1",
  "key22": "4rAPiXgFgNyEUKEfLk677MnR9eYGxtFpA8HKcu7aGfUgnoVwSrmUEzDcvtevT623zd5wxmorEkXawXvPtuZKM6FY",
  "key23": "DaEXZgQrpgF9seTAYM6ystyQ7XBcGsA91PNmix9BfJe8MKWKU2v4i91ifcX633LTsX7WiNpgB9Ldt5nokiBLfys",
  "key24": "AVUTswrFpYLPxPouJEWeRJNWHtQUZ7o6mvLUkbhYDLp6ckYGxbFXeGMNKfwBmNv8snXst5EHgvLW8mWb241tRmC",
  "key25": "XoU3PgBYNYHPcFritnhCLEg8pKADpwimFfbsbJEPynKT6GvXHKiFtw1p8aoDs1SA4pkD1nDTDiJpFdJGax4dA58",
  "key26": "4TMAJBAkJEyjRDX6uzGSWKu39aHQFSZzj3Ebv9QJGfxrUoeeQkiANpDo9unh7PVBGgSqrdZPpScJjeuWcAp8M37p",
  "key27": "4AxrcJfJ7ziDLNjrqP7wkcyafENve9QaK4bdwx7Li1PgGNUQg7vAyn178Z3TAE53RmghDfmy2NGtDcemDxvQFxBV",
  "key28": "5ZQGDFMpuPX7SuwaPmSAwNnp6k7AasbFFD3az3WMTNCEinMLmcW5bPitjW8xfJQemHyaQHSgofPvAhXpFdtfW9KQ",
  "key29": "3Lu83zwgQXAReP9ibC7YU8ZVgrk9Y5k8gDh6GDjupBwx6sMNqVvZeX6Cs2hktnmXBfmoG3p1Ktv62g4ksqgEGffX",
  "key30": "yLwehoVobrTor1oaWi8okMAq65shHReZENNBi4d9TY38KuhXEaZtU35YBqzKdragiGGX5mPkFWdC8KVWiJ48XK9",
  "key31": "22YLhNnSwMsHvjzeXPLVNZpEjL494TJT2qbqHt6C4dqAmfGNPf6TU7zYnewbuU1fkn2aL6ysqwcfLvyQAzGRoyJZ",
  "key32": "5ig3PVVdV6aNyjVVEm8ms5Ks9hteEonfwmqtEESmoonBdNAo5KHSdNYVBy9kg9wK3sY5WQmQj2dKQYxS1hFjUPZT",
  "key33": "zaBRzCwdJTbeh9KUkUSWfW2kXD3hYz5FcRbpLLcuVpmGbXQHgfg2bxrmJWkQokNfUoVaPqaCdd1s3aUvScAgqD3",
  "key34": "4XJhmJNu28JFNcLrMqrD4tSJAtdtTovD8avcdQZfZGPzfXYX4AxjxZCwvfdFFh9FDBdMsHAkkE7VN99UyKhVANLx",
  "key35": "45nHPP3bLYhSsDhbiLDBXZ5tvFqGyAmXux4nYCvkZupRas1CK1ReXg5M2qQZk3PmC2SGZz91yvxdMf7c6gGLDdju",
  "key36": "6RTFi5ALt8MUDPz1UxJ7h7SG3YzeVR5GtQvCLgTTGda8btLryeAMShWe1btvX7fB9CbZewuaiHHqrZ1R7eyd3H6",
  "key37": "5Ezng2zXx3VdeiCohktmFJemoVVjvRCeRn8cUGEMW7bSuTARxd6m7urPFvL7jvNfMFETH1UndPumsavihnAiiTHP",
  "key38": "2EpF3wcFZaurr5BtBJPefhiQCC69RxA81t25mcQwdzdjG7UV7zDyNoiuysRTk78gjtMNpeoCQoo6wCMesvQ3BD1p",
  "key39": "9uzE4m1KgP1Dmt55FqHSFUkpVVPhazPmYWHEqpjjz76seKUGVXSXCzY4MobxanMi7Ku4e7WgmYyiDGWSn4vUZqa"
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
