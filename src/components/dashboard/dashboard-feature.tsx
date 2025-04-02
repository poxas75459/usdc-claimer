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
    "4JDEzPHNrynVrWMyzGTZqHBiSfnMzsXFGwrctAk86RaGPiTWGs94EfjcxNtFtqAUkarCSQG5Y5cbpoTfkSfskp2C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "frzosjE2vMMQ4VKgAiyuxKSr1k7gog9Vuv4zz2XrLj3Yg747RbXiLCcHiGzWuznm3vBf8SsfwZthyL9nam5KrWg",
  "key1": "Dzf3BRjUZGYiViJWKwRpLmK1nP6fWvDhajoKq6wv567H2zyiEyznm8C5xXXkHExhHyi8z3mgygGqA93eNqbZmZD",
  "key2": "5YmFyH4dSHCydA4GqggyEMiQbLxNZNa4NFvbxkMXrHYa4zMdWwKDotB5H1PmLNDvSs6pk1YSov7rgH3AaAPc8XT4",
  "key3": "4oBvYE6yHhSv4yG7aXVL1gRJFiuPtgZMKjcEeK1NqoHvTmhHvPjwvgksZYCekMH5iFSnr151D7rJ4KTNSTyf3iD8",
  "key4": "5c1umzScMVUkNdiBQqEeoSJQKPbcKKfoCSjS1aQpK3vGSYmi9PFe81nF7BiDevvnpq5vAYvFBrAVkxv1Mrf3T2Yy",
  "key5": "59e6HbkRVd6tSmPXiYyEPH2XQdMRexJioYZ28bFhFnabyCZS27ruPXzJyzmVyxEjd5dar88tjSLo4vUoLr9dWKN",
  "key6": "5ZR5eSJgTYCvNwL1MVtku6aSBXRon2cQUMTWDUyhyXkMXLUEGZDEbhr4ZmDtkZzMuu4iUg6MmyVyec6HTc7ZUCdQ",
  "key7": "4JXYxzU3kErYqyyXV2xbJRae4FeEVGmasjaGdTib6mY65Dtj6cyVwUAW2R3JJMNvhfAM7uTgUjxRuTpqEZpyjaW4",
  "key8": "4sMaLesDKZtbethFR3SByjYP3GNQQssBJutfsyuCaXpWdJydeZBVPXJDvRfdAUyys8Kk8mcbKyM9GuwhdZamGjnC",
  "key9": "51UycaZaXSRSPL6aWB3cyQqssQQUE3gGEnChq5VgbCRYdqKqwGmmQYo26nevLykzezSvATTDNWrDC48X1xfRUcgk",
  "key10": "3nNUuD9SQasjg2iQbe69MNQJuJhgtBys6YLSyxFwBNXQS1cPVfRPLNCRCni8E8AkfjqQsAQqoyyoZeSfrXmuRzNU",
  "key11": "5ukti8XMbyeTbQExdz5UkBSpgwypC8sXZxwf4VBwCBDKHw9DyZebWjB2UvDroJGoM55LwoxDxn5NrWWT861TsCF6",
  "key12": "8ZFd5gWhDTG5tcfH4YHvYS9PA5FDWZGLHcMeEQKuqzgcaGvKcYpUCCtVJ127669ArWtzez1rBqwCJxSdPNoRESC",
  "key13": "3uKHNDDgPmGCm6Prbfs31PpcXeU9nx9YVRdixeFz265SGtB6caRxs2xthDKiZaRTwv4VSbPhciAATa3mz1YfPE9e",
  "key14": "4GE1nxmggU8JwrxQCtvxMELmSpYqpDZJWZZ5LFDKgyQEooXTzAiHMemZRHmC7KQbX5dTeLCsDnUostUneW7tBFcz",
  "key15": "3UFzGN8yeRGzLLFdmjsPkqEVmjuTLc26YS6ZP8UNRwfwYKDTH1MNzw3t12rPXgzksecXMYSAQwzYanipDL19rHY3",
  "key16": "5cRtUdMnZCKmB8o8kMoJQ5Bj6YxhKG7nZBEjZgLavPv8sBEB4YzpzxW17aNh23uBwpT4nqAd9L1AMNFK5w8pwU6k",
  "key17": "4BuoT1YLaT6xhHCFDGDQ1ac577h3VUH2y4fMiZ94wo9P9RPawEmTZ2HDuxvjcTGNkVaCGcoJrudMv517MEUFeAaH",
  "key18": "4t61ghMqXp79Guou6PK6Bz1zdwyK3BDSzhXRUdRjUywcuiE4qMMTSZyZhnjmdMmkcMqN8ytPSph99ghshV5ygpTg",
  "key19": "5P37k3SsmTK7c3govhP94h8wksqDNg24zmX3B9s33cQBg11h9wdjNzpHsiprSuECgWwLRGNA1Ef4nno8biUcaHK",
  "key20": "SJ5fHHPdhsW3aKmA6z5ZoQfr6FhzDHvyZxBiAxPVJoPCjUCftDrZCDiKLtgAfptAiWzYk5CAkyZYr6fDLAe85Xs",
  "key21": "2sZnamH77JTwuPqve8smbjqyTPg9UHNYjArSce7zxq4Jn4eaGWC57dmRc9gp15r6FaJjRKf3VeyRNwX4pVGEAKUr",
  "key22": "29Y7xxnPtKF1uWyMR7LM78qdw58NvmTSB9FAeqTsbxoKUxgi7UMNstmqaUGCiiGP5dUJVuwwGEPFjGGfwxX2tUep",
  "key23": "3irkPdXhuTmYZDNm4MQNkaKz7Uj4WeDweXRF3a4RUBKa6DHD6dXV3mcVzCc5gpwKKZdtQ3pzw24C8ppVK8e9HPqz",
  "key24": "4XC6E6mGN2hVYaCJHzE8xivMDnu1qiwUrw8Yog4TZTGuTT6C2PzBEvus3Kvikcer6G1CrsNm1uvwwJ9BS3V4oyKg",
  "key25": "5HMUdhC67mZWVConMXBbejJfCcLnrMzj75kD9zQjPPiUkM66qX2krresW4izckQJkCrKVbjT6FC2SzKEpKyafVwi",
  "key26": "WCCUp4tGHBH1vg5s6kjVCCCgWnEH9mc3w12TKyRknY5uZWedfzrMNGMjyzzMAor9aFF6nbiSKkuKUrubiNYLkFu",
  "key27": "2C3ir67w5uJonTUka9uYBQsEowxx6gX1jxsMN4WpE4PB8fLwQwho9iRVwXKJyysvLYc63aepoiUDL2HNh8rYDCVY",
  "key28": "NsTxuzeE42tj2ZkkKELoXrLQR5BaNk1DeBQZ1pB3JMk86mTcwKQrMpMJoniPJS2k4jro5Jb8rd89VJzq8FAQb2P",
  "key29": "3sDDdWo8VzcBz5FjymtDGPGsFmKEqXkqcUHrgxmPUy6Zr1CfEwJHUq1SVmekXPU2ctWGUFC1FsvLJ5RMXNxEVNP4",
  "key30": "5KFa2Y2cbjNanL2ybT3VhHvjzWSFDcYhtpvhyb1FmJU7j5rXiYFCqyWvhUfDsPRRrky5EAgjoWmddU4QfpRZKjUz",
  "key31": "3uC7Y1vQCGdtorW43UWjn77r18oFNbjDc6Ue61wVc6VY75sWJY9ApXn1aQj9YeX21xkNb1cYKuHUzSwNaAVcYhXs",
  "key32": "3U3EHSarFKvWoCfCrGVjTr3hJAzqxvzJp87ptRKyTPDAgktahVtFr2XYBtKmfrThQvuN6hFRPqKrV7Uy17p2tKjB",
  "key33": "3wikmQfXkJGQJRQfNajaraCo2LGAmzSyTbiRDMgfDgyzsMpxwMQG3qVpLST15uMKCcoBCzhDkJQXVsqm184hPXn9",
  "key34": "4SQcFMjNxojhx71Qd2vz4Dq3TTCWE8sNrNGXwL1YkLH1z5sQe1M6se1EL22gmLaNDSjiDdPCAzmgzWXx2Wa9vAto",
  "key35": "5FaWdZgJXj7SkqbXzHkS3HV5MWdWSGcJMyNj9Miw28rwdNdtCVPoMbapQb4YRDvxEjcRASUHLUkUZgsnC4p9AkpH",
  "key36": "kD6Vty4aFxwhsWeyFzd5otAxpNVwoqBSr3U6hTeLphq6UayUzLnHG9Yq73Gbnv8QADMgjsPTGnQmwGbXRJYBRBc",
  "key37": "5aG56pdicRs8ga981pZh1tNV8Z68URTMh4AWe3rWnRnhCqc5Gtao3zdcqeNifXzRfVWEzz3YWmdxtJYj96dcAUQr",
  "key38": "TM9WsKDeFpJeTCYob3C3aiSFP5AuSuwUVMzVLLGCJfdQWm1JaqGUovzC4hXbD4Rp2DAHK6633WsTxoRrPVfKH6f",
  "key39": "55fShyEqYaS2wLxSmbzD1XTkeaTwnQRPg9FYUayaabA6sjvzpuLtPagYxJmon4Kv8Te1h71zvgUM1Uz5SaprDrKA",
  "key40": "2hEcJpZrHAHUrqUyxSXX1ffSo3aoyTKwKmSLTqYqqAaUz5WqT6SUzFiSKGBgmKFdYuYQ5tJwaMu8Ew51Uz44Gvw8",
  "key41": "3UUDMJX3qtnG4jqVA1S9R7qWk6sMLmQsQRcHMEFkjqf9X8p7z18TsfXHpuCdip2kdpYXc59oD5tfLKdMJtvC2TMp",
  "key42": "2XxbURUSVaKbktJHudnAcdFTwhDeuWJG6o5WD1wqbRDtnzJLdfCNVUp1z63vd9XASzX5eaVaWMK52dYdtT2SGFw4",
  "key43": "55xp7ATyXtsgnnWKcxciVCeMETdN3Nk1GJhZciaZRq2zKGTiHXXz3THVqjUMfmgZABdvMP2Bk9ckMx8DFjsftShZ",
  "key44": "na7aF7W9dn3nnBMz3oGtzzAq99BtQbj4QXRBvwrRiFQqZpv4nQqbzVcKTCPkpp8oTv1CJBLJS7i5APMJki5Q41n"
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
