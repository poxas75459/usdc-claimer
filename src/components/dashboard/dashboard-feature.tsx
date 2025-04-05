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
    "5UWehSwdJknKyuBR31FHyAp933J4ah6UxUnZjm2968xHeWzcL877wmdU514KqX5vmGtC53hXLUPvKb8JaPYJ2Zye"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qf32oCTFC1mrmaai7zARQBvx8GE4XNoYqXxhLux5LarUVmHcx8XMSPjSEyJFJ1Dkn4SEM6vFc4t5XMcHzwjV2o2",
  "key1": "2zjTMZeSC6S3xVrBJuUFN8oFYaEyhxbXpFMJiP4TwoQPYZe5AUTRohtL1zdvtYEbN9jACJVK77G9CuT7zTSyvFSv",
  "key2": "2kKN39CtvauGKKye8aUSDRvfaySD5a2dAn448jvef2eCFGbafoSWKs8KihJHDjNukKqNQKbuchUXMWovTNYyLCns",
  "key3": "3aKSzN6yckQYswfwppQgMkV2oCe4HPAz25CJFqJ4vaf24bwmp3xg41xeMbe8Lrtzt6Z97w3Bi9VRNHr3Bp9sV8RZ",
  "key4": "4o1apYXExJuuNGckx7WMq1MqDgwU24H6aWDqozpYgvxk1pzQCbumeKBaa6TNUM7dX7HcJZvB1eTfbTzV8ck3YQqT",
  "key5": "4dkoxdNSsY8qVidFPdmthJmqpkEMoCSUz56DhuFbjhMNSuiZpSisrXeUYXhc2j76SXBiJqMzyc6PMHxmvsWCCz3A",
  "key6": "z5CZTyTrYmjUAEWqgwyALXhWEcNWPv6gHRRWs3qSzL6VVPWEhsQjyq1FVDexLg6BUxeQ1Sz2Cs5fBSxRUSp2aDQ",
  "key7": "4QTGXz1gxB4nCcwihsT532emXRKyn8KPigx8UrbBptzHBswPo61Bsf8WCn548ugySbsN5qjAz7zZAgJ3FbWDg3sa",
  "key8": "3kyU9zmPn3bS2YsD3KMFuRkM4tP298Sg7AUmnLWueEQEeM4PGrjZ1Tuhp3tmx7X5M24UBPqEG5uRtCLDU5E7AcX9",
  "key9": "3W4q8ciJLqYCvVTVneiRMbSkxCKervWAe7iTXYz1rQpuoiLpbFD4h6EQ6Vkf4cgGZJgHAKptN3QSdF4vkPwU33Wt",
  "key10": "5ikvD3UWEz1p2RLLZuaBQM4mnryodcGSKuSBq3xdHUZEFfds2XxSwn5d5aiJUttNY9BwYXzUgfyFwhin8QfTyXGt",
  "key11": "5r9MWEPKPR3Ca1e8MVHLDqn9NxaEAHYSQGJBjAyE6oV6KPqdW2bwqWaHHQNSyBPisGSHUCJJAywmM9ETm9gXjLYW",
  "key12": "NZVzMfYsyMjLPX8F4E9qhLMmmHTLnrizJvXEjzgZFT31k4kkeazj2gwcSUEqfrpCJHZUuqbJC6hzoCwiuRX2ytJ",
  "key13": "5eJagNDnQpS3ARRM26yPKMiQmMiFznD2Yu4VP45dkDE48Ka1jTKhzUzmahTqvn8oN7azsMC6fBKwB9Dq2P4ExwNq",
  "key14": "4PMY58twgLjUvtJXPbGsnmm7q7GD6qeUcFxPVRbAsZ1qS8GX5Gw673wkFQBJd2q2sTYn2VJQEWJK8WUZ8eUp3aMP",
  "key15": "5hdmcFufCP3or8Tfc7xxPukTEkht5TRXH5bxcNh8o1ugjbTQ34sDGXXWu23YHP1nvL74jkWWkJwTMHgsxBFcoXXN",
  "key16": "63KQCU9uFnvsFFFDDjksyqk8tR3FN5PKtFjQXvYRXQJYup9bei7YdytCH61kYfz494KroUG8YLPNu48XjMsW7SSw",
  "key17": "3TL219VqbXczQ1CYCGTzck5vi7FfL4ZXcWVpRScyuy6TfvN8iyUYEkthHewSiET3YriyDfgoLez5yBJg5EivyFS2",
  "key18": "3yZLyRqnXAhdvukq66ZCuKxmiHaNAgPMYCWBKtc7F8W9395jUCaaETYcDiHyZh1WFbM4XxUEjdFQ2mo18AUPg2zw",
  "key19": "KUmFdA7ktT5zTnbVQTW5KC5jZB23ZjCma8ynk9Ey7P9RufoJyQyaSTg91ReDqZwZPXM6CmLbqTJXVQnKAW5ZEhD",
  "key20": "31dbb1C8eMTPC8mXvwMN1SL7b1DNdVfL1wCkuwFj32ueJJAKVBFXDqfayWLe6sTvzYz42cocaF2k4EngsoMDhC42",
  "key21": "4d1qGMEk5KqoPYRydTzU7seHgwsjoX9tmEPk7BVZaEcnmVkhmws3n9P3sEg1JiQAxAzm23p6xSWSRo9YEsGuYdwQ",
  "key22": "4tB1n6Qdfd6A71NE2qwNxAdKxiwkjo1MDe6fRX5LuZ1u524nanrn511FoLJQfTcrWgUKfiGaTR9U77bysU38mbtL",
  "key23": "4wR5TrFZooD6KrYGzCmjt3uvjNNV731y9ZBBhseawKFy4ZfPWFkUiBx9MA5ZJgqHCiJMvmBFxfp6q68QmpR9ztJ2",
  "key24": "6R7VAgAaWKpbTqtV1Jbtg7Pxa6sBRR2RKDmyqSuSNhbeb5x9MuAb3XPQ8aVuFZKfgxnZHji3WvDrNncSwjSAyox",
  "key25": "q34s5YrRUULgQFid9etXPd4t3eionhgMFzzMvoGhYsV5vysmLP9mGQZYX5QjyQcZZgPb4kHhHb53vspiH9o95qb",
  "key26": "bQaHcCSv2onUbzWkTAYucStB8Wf7qfruhqJQbvrZznNSNxTtsh764YeBKzf49Rhggaqu7mr3QtuAFX5gXcCVfiw",
  "key27": "56ZC1EuxU7e9HgbVdUAevuqUwPa4R9oZb6KCb5tsJnCYtmCqyaMCBHL7YXZRDejXuCGY6LxzbsejuX2Ff3bZpHxN",
  "key28": "4nDNqHoVbTL92aTLD2MmPNGZU1Z3T1x57TC4MBwnrV4Gvi6JPH9JGDhoUtfVABCDWGQBPfbm2iB2XYyjWUjHbDEe",
  "key29": "X6XS8fhz8WTHvNRMUvxetxqtRErf8xDvSBnSQ9f5N93Dc7hoxEeiqF1eBDswf5GEQmR45N8FU8W7SzuZM4cPYSo",
  "key30": "4Mv87Y75BMETzNSSFjzEoxnfr34nMqHupbaKURa1V1bLts9cdKk9mNMDf7Teu4sZPgHjGwYUxLSZq19Xk1kwSgbg",
  "key31": "5xMu1bgJxqQVHrNQuFxtrB9aXfU58BtkrJf1uoL5omMuK6bGzGAv6C8asGN2NfDgZS5NDFo2pDPp5TKwzuso7Y61",
  "key32": "4Pt1X7wmimyADYkN1RR8DXsTk7DPLeN1q1Muke6nSbPFTKAjjeQTZU3cckW9X6f8ZKzM5saRqvomE318mXsYrQDx"
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
