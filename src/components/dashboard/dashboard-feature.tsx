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
    "2RpQwQX8D9nGV3HTqSh7TBiGztoCAGBUr4yUERH9ckAhFAn3DKrcqdT975aZCk72SeBojNiBRD8zHYDzD7D9yAXj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EYEuoqBLDAB3fRGhjoScfHrgK2fxGG6KJqED12FD6fLawQjSN6dV3bXmUfdGZ5NUHdYUx4HCLs3SfaHkmChxX1E",
  "key1": "zsBkgEUKgrH7AJgsLgNRaroBjxQaht3FT4DrzPNMbBeXV9am1agNtKwzs83BXUFFmcpUcNE8cwRzLAkRsMZFiQv",
  "key2": "mDvzaYzWFUcka3q3L3NCjEVcTnmhLy1yT7kAPrivdqjgpKcW9kgdYiCeNHxazFTwQ1bQK5vJ6CCMreyhowkA1P5",
  "key3": "5YPyyUgQmm4N4Rih5oBRuPJAEskhPKqeStZSnJpMP1QUCLXihmsxy6GyZRk2D8QxBvDdASZ27PuvUmWgixYek1vC",
  "key4": "3vmAP66UPqdUiLPDpmGJAawE9uJ1SWqhqHQLb7rjTyg2HyiXui6qYeXCPgdAkjrDcgVkdtXYyDLKmLozkn3J3fgK",
  "key5": "sUAchMgKLpUxCSmddDwEBqz62yo7YqvfzzKSwKikXQQqHcmh63JLYemRcwzqBBR4YgmV8uMgSgjD47edoUEQ47B",
  "key6": "4CRGyagLeEfsLbj41nWTkMiW6vWKdLmDpMvj373nZ1gtvpnrAYgAQt3L6fHqiGK8yhieDGKyiYopWKaqScH5Mofa",
  "key7": "2EZNuajL2WzgR8pYAkxN2hj3bd8s9eomjBWsUgDEq458SNH9txLwsA5YivdGaUKjxqb96WfxGvvJjyb8mrYS6QjA",
  "key8": "2QWGGTWvawVPszg6S1K6cWGvfA7KjAZQxBzGnT8XjeE8x3DTiEzr7JmicybXozYTDBtA9uw6QQ5LQqkKZGPYUPTm",
  "key9": "BRaf7iSR25cv4L8ApoK6Boxtw8SNUqUk9MCdtjQJLfYi5iMKjrk761umKY88TT2TwrbjCzig7yS7Qg7Na5qDyp6",
  "key10": "3ygSHwe5ULvqRU9ETgybwsmLgGGdFrBu4NEqxAXZPtcBKPLJzxz6pMEv3TpaBSneSZ38WtzewMm2BJ7Rr694LgP",
  "key11": "tXqAz8m9HJEDqUduqHqCkKqKKVkjUyLnujF53jaD2KfZu9s2DWm3z2r9eahQetV3h81D8vNnQPRnvHHeuyVWXWT",
  "key12": "2VFpPrmP2NARLWL5aHLj8dmhQE6Un1r5eZdSsdEma6g4r4zPXUXhURLxH2QhuKgtnhrcBxKfz1RkWQm57485KfqN",
  "key13": "37Db1Q55aTgjAgEQbpDLVoypcJ9Wpqp7kBeLdFwnQLXFYuA7jgfjyH77cbSY3DCWApYuHEmq9iJmxGHpFiJgBkgP",
  "key14": "3iTxhQsi4tr1deMyPefU3ZDhVToJPeMYHxAWd3mAXo3PYFFSmSadrSznm7cq5jWPiUzXhbVFeZw5jyi8JCW4zbWL",
  "key15": "4vXhSUyJZdk3V4fk3BVCvxfEkmW9rzm9p7Wyxxmzj6fTnJMBNS36VNC4TqQAZ7iMSGG1t66uk91quPG4RkDBSWMr",
  "key16": "48ZEEBa8ZQ8uhfHE1sLpodB22WHGKXyHD6gHnpoNgvfYfAByzQ5KLHvrJDLU3yeoZweiThtUZ86JXdzT6EeSxAWX",
  "key17": "35x6iwa4UeCA8ZNUA5VH6epA252LhMCUkDc4EnVhteZzU6YYySBMg7ma3a7fnhrqp3rPGtkHRjrSdPH5w1VynEZy",
  "key18": "5a8Ch1T9vBzYLG7ehEpjLYp91NQ8r6D9sAX85cy5kjBhoiX3L8rnGxJ4UUp2vMGMeqpd7wcfwA3QuhHcNgqiUGue",
  "key19": "2SsJ4rfPw9kJyLunPre3DpK6mEMn8Cq7K54YoQcfq5AqWmW4MgEBaHZdWjGmJ29HLu9nd5ERNiZFMg7t1VzwKMJs",
  "key20": "rK9pbkEtrWpoMmwf1xATsZ53TZVoB85rxfeDmrWcCDwBqNNLUcMTGRcN3UGuc9uFAjLgFcNmoGJ5MUtvrSJXGkf",
  "key21": "5qgPA4cNTKhBTsQoTr61LmhZE81S8cZNmyJo1U2qjFEJrkYymYWcahKUmuo9k7KEDrWqPS74unjQ1mEPkSzMRMox",
  "key22": "3XUis26UVqTo9w5tiZ1dY4ux946virGyCRi7EDk5E4n1CUzUeAaBGKGnM467QNbjdDz98UXAKZYKMALTzAP67PdY",
  "key23": "3TWqWsSyMBFiTKQkXQe4uu7S9fa8Msuf9JuyxSgeG5qxYth2XYukQVJH5sSqSuvyWxUofXPDZVsXmpzjuM3evWw3",
  "key24": "Dv1TYNC346vEbn1vvgy7aZmsQPPN3W1eACMMugsz2thew1enCJcczUsR8i88XcegkycUXLKtM7JTAYeFqBuP4zL",
  "key25": "zE2Uz9oRunbQ6nTWgDXtF88DYhgWgbLwWBuFKYCxj5MSrW25MoLkcaFvnFR1b39TLCodtVC5tTWKPGQ4dGUxEaa",
  "key26": "3dvdiDf4BiA2PFfSEMTU9Ge75uNK4rFbK949m66f6hgpQ7eFbkt9jqQxaAiunr2pREKg2wuFTira9qc6m39BU2ni",
  "key27": "4z3nqNtNQSY3rgzXhm872CpRwnnJGvsxeBq9MPRKRbX4vqWyBgj6MGgvJZi8z1y1jy9TVtzzm2HrRQmxwfCp77TH",
  "key28": "2M4ZptRdKFKwaK8pH58drV9DFBJknEZkyVESKbvs6TtxxjPmWkJWPPBYewDLKxYvSyYFg2R7nGJT9NLKigypfKqW",
  "key29": "5kBySDRTGFTu7tf7L32CpKsb4k4mywv3nwkbGCDbGdUvkifmBshQWQQCmKhtR41u4J8rxiKk4my28TJFGfcZej2g",
  "key30": "2upzeDYUddy8s7KEXtAm1WhXWi3Yk9JzLEPZcm88ogkNGv7VkDT5EctZR5hecQdshYBoVxMvBvG3MRaZrEjNLN5Q",
  "key31": "26PHkYGKbg2fKksbLJQFnoPCQ2TgLko5B9JAtNS8J3exdsZC8PY8opje9WpbZGkg8D9UMGLw8kzfjUqtrgxoNFoY",
  "key32": "5hzHz3FKrgvrD8HAHb5SYuKav8XY7urmA9U9gePPPBZuomjT1iunWsFCG5T386b8ZzJ2ZuFnpHB3nm2WUpAcERvc",
  "key33": "2qZ9CUwSxSNhQJYuYCR8ioWLWkPnczwujzV7U4bqM1mXoLSrSRskkZZ9pgEDNENcDgS8AWPdYghjjpVuA868Pkgo",
  "key34": "ko4rGF9nsvrRmpvrX6buauF7W4xmVbUtgFZTnhoPb8dQJhmQ986gUJBudLD6jMpoThQ66gfLB7HKzGdKJj697HE",
  "key35": "58Eh1ybBD5oAsLErmFSZocntXVWVE5SidzNVXcFExas7sGuUBoK3QSWAQ4ioSeho2MjQHFKAhKk6sYV33AoVkFQb",
  "key36": "sxrF6pjxgSNTfdX16mpY1NLA1Nu3u8RtvrXvBV3h35BtFEWMtRdoovRNLx3XwKiKMmCaYA82rmmY8AaB47CLQ8F",
  "key37": "32THJ6N7a6hAo8pzTed1pKmHvVXosdCmJfctsadPmRRwR65pJu1GD7P6yKbqJQEsPPKZTTwcinDfjPWiLqnwk1QR",
  "key38": "3anJbB3ZfS1BB8ypCf5zSvEngtavDyRaszQyroGoqq64Zy9d5mE9Kxj9WswGdp2LZFdBVL67ev6daTDzSWtT3pLj",
  "key39": "3HENFSXnnCwmaqe3cSKqEoJJD4YeD47DYZr49pwrEJbeqGp7r8JUp8ztCeYAgbPMSTfXtgXtCrdpRPYWVpTpe3j9"
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
