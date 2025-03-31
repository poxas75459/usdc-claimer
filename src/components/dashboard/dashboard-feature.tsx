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
    "2SZ4HvaMjeC3YxgMWpd8TDPbDp6eVxxh6m5HeUDvrhnUBNubbVVRiD3UdHGa8rHfF3iP79S1MgxhZeW5EJ1Us9bb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31eF7LuxviXmCFjd9GnzRkqGu83tKW2pycGPgJGMa8QYpKAQA5UdYRLUanStQUt5h1MAt86wvjPBsgKHNxupvUaA",
  "key1": "fQFdbLKCXtecXxpfZuzQxE5N6RnijjJwnDYa9aQfL4CWpmVFW5Woza5Dwv7U5nzeffi4XQBuFAAEy7ECATZdiUx",
  "key2": "2BCm6qqhFRJtwiPpBMHt8wqzpkm1GCFvEGVrb5HBfVqBLX1o9hpzQUPd9wxFemYEZqUBwVfeZjyzUEYu4g9BChoY",
  "key3": "2AHeb4nkGCVXaWnbpSyzKWzJcu3YYLg4cTAG4dtSk1zgDyj7rNNAcXMS4E2eQ5mpbLJDmhUCZQ7nf52JMLVEueAG",
  "key4": "jKJe4z9LXhwVvQJSfsK8DyMD6KCPxDkw9Wuscnr8Uwff4H65tdDFMgAKy9XSxhkMJgHxFbA4JMjprEnMdu9p7i3",
  "key5": "3jt8wX52PBy9dSXUWrnpeygG46WkZA8dC7EYEFqyw9GPKUexLMZA4FagrFZhUA32DtMYdw2HgdyDcyNjsRMGaZ8U",
  "key6": "5f37SBy4uvX8WncNBFsjiGfZZtJAZsKFX2evbecYdurkLSa7nXBAiKp6oJm1N3KXDzxE6JWJk9Xx9pC9SJEtXSBZ",
  "key7": "4WHUXjGhveVKkwTYAofeGbCx6mArWtDZzgG9DXaxFZo2BrutHVdjayo1fEoQgpCBjNtpyqNpn4PDGg6K38tU7LDg",
  "key8": "39kSr2u5xWeYVVpRiEbVkEE7JKZ41pBiCzyF4cgJvyjRhQyo3u1PJSTLPRSXpxdh8uyGhStSHFJVwGAk4V1iYvgw",
  "key9": "DBEhXRHk5M2w4TR6kCiYWRa1cvSWHDi889S5BoaKHqQemtbEc1UwDRX1FUeqGQPaFuHZ6YwdTZVMuDs3E5EfsxR",
  "key10": "z1hLRHo3SrVTKQj1HkHxXfKXLteoDsUPcJ2JAXq1a1o63UkiEiruCVhAsXu1wpYDqfS64Qm8v36RMmsdLHqngw4",
  "key11": "HVxnSvhhNvBdMLPVi1RiK45YR9P199vDZjs2xTQ6N3GBGzMqhPr1ZchqC4vpLA9bBouL5Xehp3pgBiZya1F8Xje",
  "key12": "51bTbgYEXZKWcGjFBB2aUUtEX2SHogpQsK2nW6GyMc8nSLE16mCVf6ndZEH5kQi8RPXxvPiB3miW6zaGmtPaujyU",
  "key13": "2DhEwLvAvisPc6QmHqxkcDz5gicbdqPCa9igvAvw6KEy9RhnNGdBfzi62inG4z2o3gBbkWo2oQSgGEbKNG9ubvH4",
  "key14": "2jpWdThFDJjX1HQzSVyknnZ2K492FgniWvj1TojKs7XroXryVbRmSNUzK5QNJ1RHb4kKfjqhqwaav1uq9oXSJsTc",
  "key15": "2ddAr9vGzSZYXQcztAiXgwBd4sWpgmwKSTxnJTPuaEEbYwuKMrqX359xxAio4Dmt7rxEWM9n6R9rLNuZur8aqVQZ",
  "key16": "Bhhhk6W9MSRN2Y54mbWFGPKpZ7zwQ4M4sCaT5vGerdtEvnN3qnwudu28QWVubi2Dcecvb3fm8mnM2TkbzPdeqDk",
  "key17": "3J9WL1f1Hc2HtdwLQp3CrRv976xxQZy1pkndSsWmRpxo5tDdqfjGRhrM5t9LEFsJN1yEp5b7CeFJgXVFLcGUDj9v",
  "key18": "2tPeG6BnBXvFbRpnsYmUjsP27DUBnZqhA7M25dLGDiv7KsH5HDP7byw5FDkesVGLei9gvHv7PEJca3aJrEYD6g8s",
  "key19": "5mvm4y3tLAjiAdQgpBaQ7tDGa2N1CrhVytswuv5wmwzNnLaU2fMyk6zStoE5iJEJXJ2N3LoJJs3DHwjDtyeBwc4P",
  "key20": "VriEFU23EAyppPZ9TQz5Zg7VRK1ehaGNyhvcnd4iV2d5s79zAADmM1ZT8HvfKNvJ4KBjwzcF98AR3RtBxQkpRPD",
  "key21": "5rqbpnpPz3LFfPBzMediRKbxdrqkpENp72KhJdjwaAUaw5qZGwXEbcJQP88kzeXXgQVNn5ERChwvss4778KxzQ92",
  "key22": "2yo1qHNZnTE3bgnt4THjmDs9FZtT2P4bCnx2uzEzfXboyLZhcy6YKdrUrbQMU4xtQTc73jP3Jf3JUcSTRAAC2LXK",
  "key23": "3Mj9yvnPRELWV6GQJhyfRbncu39dSy5n6U8PEkwrUS7DRsUMU8kX7TFkEER7gF2zKy3wYVop6qrUM5jdLgK99WdK",
  "key24": "29htgt99UwwRmBxo1fysYVysTwM8kzQBXCeekd8uzWJzy6X88QGAxYUh6jPdSqPFkU2tjtp6VF7CVxzE3HamPs7F",
  "key25": "3tqNczCPHrMAeDPUo3eiTiXf8sYdfJcwbJkvemuaTjDFYw2GZwumT1Z8Tiueyc21kV59wY732j1utN4apL9U4XCC",
  "key26": "66FU8j4vyy8vXvCEsMiZHKaFPhusq5zjdHBwb1GD51XmyNN7jWRbXpfhNXM4rCfrgB13RTGGj4MFg7va7G8z1qhX",
  "key27": "2TPMP7dpY7xX7j1NufJZip4UG6YqyJWDF4GZcaA5CzfGkcCGVcMkbgwsU5rhfVkF81KnjVh6Vz1CWKp1gApVzsnU",
  "key28": "5rBh8jkr8ZyPDVb9e63PSRnFrn4YsP82C5aF2K6N6u6YsoGDftRqHtJkktj5LCsB8g1xumQgZD9G8dTVQdwpCBL9",
  "key29": "2wWsrRNTY8DaYbkyi9G8mHMM4MsnGcF4dWYPsi68SNgVRnFCzDvhaUAiwqEk3ZmW1XjfLXM9f3tk7JmsoZ8jqwQM",
  "key30": "5f2edh5XnxFFMa1wd4NjXYfy6D7gVGe189qzyPKCRdQMLGR2F71aKg5APnmcRedk3Zg6RrKtQk6ygioXHPdcePiA",
  "key31": "4UrKjQm7ir6nrR619AAvBS8zXwTw3y3Y2Qzb5gr3BnC4ZJ2BLsEhHNbaXZELZ4kFYMRjPPPY69hjwL7DQ9Zzwmt6",
  "key32": "4faWyEdzVsXQFj8BzEaNroj74DRUsDjw3Znn7kRuZ76UkWLLyVbSk4xHv8Mu7PmJ4ZjoXdzgEqJFJAVPRqHzdB5Y",
  "key33": "bkTqvoFJSTSasQbUQxyRp9nT8Vjd4Z5f4ghjVZrqrv5pKyVxsP1MxkwkQkEm6JbBy3AtND3Wq7BWdn6Vgo5rbqC",
  "key34": "3sCGDN2xQUCBhmr9BhHzv3qiEGqHbEs9NDtGtTRaLhBvC3aDHbxS4UbGYXGhNeGGsj1UUo9AMcUGY12296Wkf5xW",
  "key35": "5BxFdY6uGH4DxCwAFRneXhocXXwnsRvzNQordUfsFuHVW5Fii4C3oqheuTZDQC9WhwS75otqHXSUTQ98wEKgANY3",
  "key36": "2buTZQNxGLsDdsvYEdW7hvpUMSLE8YHYUdxqE3so4Exd2xD4Ee9whMx8ghXXXepEZXNvPND24SCs353Am9Z7gCjE",
  "key37": "446sebRrTtzojDvqJJwBiws2ozPTKuawwbPuqVZNJrxXZovTs4W7iA4pfrVXMmsZ6mT3aYENBtcVtYRz5zrBF68q",
  "key38": "Ynoxbgqu483a2h7e9YnYw2mRBZgc5rk2ocBZUUXpAvh6T6e7JCPsrQxoD8VnZp29MvpMBcfjcA3Nn35EZLHcfcf"
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
