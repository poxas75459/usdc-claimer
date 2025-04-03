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
    "332dcFidUaD5rDp31V5SsrkqGxQFRX1gnt9ghwujrJWLJBkgChWfX4TNu9Ckszs1M6zZtD5hAFyLDEsNzbiYrKYa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M7eHqtoPDTcxK4KCWo8oraRD1LUwKnA9zthkMuC5BGdA4WS3nQ3Lxsp1FTjVW222DyZJ7cZ4nUPKcVUJgvSYJ28",
  "key1": "3vK9uMBu8F1cKbKWdy5A9YAtDLeNWnXccoe2WBEdCsuERFHbCjMbgU3NqG2q2NQK3pVEc6i1WFpYhFx45kUfHUjd",
  "key2": "5K6XS8tebv68hpFxdNvxXhwcQxzhnrSSAsexbkR3Hh56nqoWp8uMfpCLqd3goezRzLX2TZaTSVdhhSRjsYi4tWGV",
  "key3": "4T9Q9jHBJhyZZcCNkzGJ8MADVrmL1Ph2nDXpXQX1ohM5kkFYpN6SyDCTMUW1hRPLaLKgqFZ4msRSGFQPtVV92t6R",
  "key4": "K2k2sq3Jt44daMGy3a1cfvEfWtCyQgq4jsk9BPHtaufybruXQW9zRQa3novSeCp7U3gMXbPFTV3RDgPcapiGmrm",
  "key5": "4YTP1hfZKuDj8yc1dp2XUeLD1TH5b4PuLmns2x7cKxa7c3fu5hH9gwBVUNUXs11SCSGkpqnWRttL8pXE9KELuy26",
  "key6": "5ugryn6J4of7rc5J3NAp2Szy999G7xwFowhCwHwZmLZXy7MmCckT5ZvCsu6bCSEJFHtwwE7UPwJW6mkW5K6gWCSt",
  "key7": "3CK1rxeXUFNPZ1niCZzNAScs9Pt5NYJVdzg3hy8X3AWbztmXEePEKerd9MPmt1p5ce1B3exnmSvVejvEAE91YTt1",
  "key8": "ZKpdfb3CVYvn4oRPSVLvRk1piGs71GhEnKb6x9upT8nQ8siKDFpRzX3ygPpyoVWWWQzfF9q2BqgMGhcKZiXwKhJ",
  "key9": "5phYAF17mAEGzQzcbmPSP9CkcDujyJhay16dH4hkJGrP9tw8e6mGcYjWUhjJWoSnRXBMZDaEMbAhpEN1iMvBBXDJ",
  "key10": "4UdG8Gd5XLf3R88sGPCXQN6KVKuCjuEsG5xvRGtLBfH5LrJvj6p1w1CZ981Q2bD5mVBY1A1PJQsfMtWjZWpChZqK",
  "key11": "4fxW7BcBksJ2enurFe4PUzhUH6KDuzhikkPoEgEQBYZLLosZg9whov2qeHAcU3MopahBtGrVaYJJ8QW6w3nPA8E6",
  "key12": "49vrnbXDuWeyhitBHS6PqscL57KwAX2u3Bv9XtSEm4hjZTLtMccJ6N83GjncN8W5sjZM8b1REmjm9CHVdGc6Udn6",
  "key13": "HsoEXWopxg7NRfNKQVDLHwzh5cMemrrQuy3s52negqkuqfRKptEjVwcvJW1wm8ed1ngBPwcHTMH4KyzthtsqFCo",
  "key14": "5MkPmiYPLQGv7LGd12LJokabJbE4FzXZEgfTapkakDuKcKCZHtoUnTGHR9tk7dLiK47vW9HqjJK79uGYhGcJ4SGr",
  "key15": "3u3nVDj9E2Rb18VLVB3oPWnfBNWWonzTep5V92M5vaG27sJMSfzmAFXnMsW8PdvyV4ehG5bYjsJTX5vtvqQPkbj",
  "key16": "5U7eMQCcvkZMHaKK7DyQzqFgW5AW3nBL3LcfLXxhg24KL1vW4C5H3bJQo5P1hhVerA65AHoetw999ep9z9jjuLdX",
  "key17": "9i3FKWzy8BRW5wjy272cQ8kerz7HkUBZ2HWL47hP17akZPQerqS4VzmrshNyVfnMdz5uaQ1P7oCKFk1e3EdQTsj",
  "key18": "5mK2RxxoXqm3p1g1uqX2WHxBTCt3WAd17hDuaV3zwpF611mHstye9CpfZdQWb4YHbyDPzFX1i52W4FH54zKDAm5s",
  "key19": "2W9nwtstVwvcZCUCjbeqCafEfuePYE516y3Np5V5yZ6cC6Sz84wQXMP2kxff7Ce5L318jBGegyhTfq15Lh7TJhN",
  "key20": "2djXxxYLuKGba31SZq1nWuwL5B3GYhtT258caWkN8WeHQ3exKxogcW42hMv9ahF2JPmvpc4VPfvw1JD7ZdAnXsv",
  "key21": "4kx24nFiThBsHtMNXVeYN8AQ4ysyR4pFUwL1qGbLrA2YmcyVT2qpmcGNWrYnm7jfNHwHnJ6bmxvKwJ2reL3HK9xD",
  "key22": "5CTgH4SxGhBK33gqxAd5yxEoXNgUoZyBKU4kaebzcWotTrZR5T9gvmTFLuLGvaNiYPkk1k6ZssjCrd73zE3NQ27d",
  "key23": "3VkxpNN2MrwQGWgmoyQWRjM1UpwDqTi4NAkobtnzgc7sDeemGtb47JLpNBXDFqVQFBuAMq8pdidY8RHZH2ch2BFP",
  "key24": "5NuYWNkgpeTre2c8NTGirMHvcK3z59zW2wuRVbLCcbqn2oRYSrueTbxAEZhcqZLQctXoSVUht8bpRarx61eMDQoo",
  "key25": "3rTyNsK9FvUYD8miFzbW7uub3KBQxzi1SXZtqwrgAERdm4cnhR8dBoP4rx6ieZPZnTbPTWLQ4G24Y6rLZWuCTHje",
  "key26": "2UoREXb25xSbQ34knVMtxYN5ENVWMRNTgubMjyeXoKPqcyQbnLe69FWdWZpEhPCQM67CtEr3Y2qPP66oXPnw8Z6q",
  "key27": "twx5u9fMh6RQ99JDBiYWT4QLdebBkP6eukxwGkUYwYTV9Dv54jFvnMVL7cqz54egfCvpMNjTpizvVXQSVymrsqN",
  "key28": "5d7j6uv8F6nDo5aVVCFmdKb5ktYD3RQeJgSr8PWXEzZzEXunRU1xdn7vVmh7GqUmdTStv13nUdpMjgpBep7iEBJ4",
  "key29": "2Tgcdj7LYMg45UEm51SzahCdkAnaYMhuJquR7kiAkjJPaPHfSePwpFKHdpeM2Ea32Rwg6c6FJ6Aq5hkt6yQh6oLH"
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
