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
    "4wcoUhk2qWaBJNarPctqLMfb5ikQ6q4GxLdPQnMBKzaUMAvVJk4TwHQV6gVHYe6k4cdrVxvaBiYnpjXSKPDLXT93"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sy9DWZ5XTcWd6izFJL21nMqSCQgFNdcPfFHY3pM4hJYo68RRVYCoMDjai2jxbHY8cBeiJFewxxxfpRS79d97xY3",
  "key1": "2T7k7tC6be5aWW93AAgSQcsjJu4PTYXwQ3v5a2z8gAjcjb5o3x8T5rjxiB95KNsyJBMUAwtiB5txkwrWc8MRtQkC",
  "key2": "5USbswsWzbb8M3rHzXhurRRweeeRq37L29kXqN9akznp4pfDHBmyDDevHV3ZbZf8WFGg9HccaFrqGw7WosQLzCqn",
  "key3": "35fA3kujMmYEnBoPqkNp1VSAzq7UvStmnTYmuzjqdbzqjrYc4LSbArcmNP1c6vo9TgC5YCsGLZYpq5C8LTvNEEJj",
  "key4": "3Ka8dzjvhHntBN8zqFEzSDcjSPMiaDGGbaepmPYVuEc46SeaRxVovY2jppzPwtMWXWoXWJMZPxvqqYjAdRaYN4iV",
  "key5": "2bUj4fUokRFTTaE9bCy7DTCrT4ERR9QXF4ZR1p7U7sNe94mHSoumUvm4wiyiiU8k6CDEGEJXaW7Kht6QYowya3nX",
  "key6": "4H8abTW9KKHo5eXA2MabGRghTJYzmrCVJyciZm6TzjGGZTEbZNSLv2gUSs3s8mpeJheWBKMsjfppLya6ppXUmbK8",
  "key7": "4q6NyLbSVxSzapStN1PHo84tybWqQb4VxKjqNaCS2GefGiV2zuYF1SURYK5NN3dRMTGyrCDM7UhAoMqvJVyhxrje",
  "key8": "3ZPgpQiUR1RwUXt65uGNqyq15RMDTLuvH3dvgBJW7D4nTUtbYsBx9Z3yqA7AEbR5HR6us5fDNYaLvLBjeitN2cax",
  "key9": "47Sh3ULYXfCaJ6s8DLwVj5aYFgs6gXEiRdtMw5HLLHnPGuXPjnoqFyDCCCMbpQjPxxfaMtfhmwkkMuRRnMK62J31",
  "key10": "4tjnfPRrv3gow553okzvrhHCQbgvbeKjb6RWX166urKYtcgQCN9YEZ16TiMRuwVCiifrsC9zD55PJfKFZ9zcfiNk",
  "key11": "6UMbmJkPz5HBFdzUpxbvFoDQrgFt274kCTwCzm7kwgtSQQX5hfT8q7vm9VXaFkT8BRsdQBYSQiaDCSP9NRgRsHs",
  "key12": "23jWpBJPcCLJ9CCybSyAyXwSzDr2eE5iR6kAvkb3NzWpDpFsumXntEVHaGhqf3PVRJU8NVMBUNXRnkLYYKswAR9q",
  "key13": "x6A5b8ANszZzh1FMuhkucSmZaHCC37hShwXGj2jR6kueHgfqAqLGrLQuHKQPp1w3LnabpEsVKf6DoTQ1VKhedkz",
  "key14": "3ouhMFXCBs7udqhyR5PuqJGKwXzBCtgXgrD15dG4qm3TKgvmWVvCwHRoPHfFeWSLM4uRKHvXv3Ca88t8JC9dzXgs",
  "key15": "3ShdngBumz4Ph33E3hMUFetPYsAqMiUShcX8mSBJgroQ1WLmiFw3ZtShubc2HDYywMDp683TWMWy6Wach82F5MA1",
  "key16": "3HiEDAhLDEmPYxZ3pq1HKFN6Fesi29WianYmyF5jRmUztibs8oSW5Xyf46S31sJ4qjcK523eNxXjToSGuj6R5nxz",
  "key17": "2aT42TJDgREvSwcyhyM2oHR1jWebkpKB9FQWs2hiyZvTh68nV96CSixYN1McX9FtcP1TCH4MrRiC5xE963jjXhK9",
  "key18": "61LtNt94SB75XtAxyxxg6TBo9VmNB8RVPmzzq4EbFkSDwL8LFu1DYJ3ZqyfzY1DfsPhECPA6HPvoPVVC8AqpTpsp",
  "key19": "4fHAKDxXp6oDikRTWUjDU5a5DoUirHQgnJjZJrbxKDBGwfU5WEemRZEfcQsy1SzFHEyNCHQded2LmyXQJrGCk2nV",
  "key20": "5zM8CkDMxJbfF1BVBw1eQdFEDGgBD3SxWocHcDh5NBqaFAqAwB3HLaDwaNuzryNC74UMWS1jNBmbLLE2svPZSGnd",
  "key21": "3C8MAh1N87rh8fuSCcyYz2FypHM2YBzBEjobTz6YSHXkkDQ3vA6K2C3KpZzqLdDciPDYDc2F52w2ZiYmEjX27Svy",
  "key22": "3FWSZ9sRYRnt7px1fkjfWSNLgcc8hvZWA47s85Q9TgUu88PXHyqAt4UnPLadpmikmRgp4ism2BT1FrNgav5adCa4",
  "key23": "2GGmqv6DnfuCvVMegCgTymjhDGqx2uzHrHuBEZsHpwy78BXbxPgZgypadJG1dYD2oDpuZPsZkK7x2SQoHe3A2Wt7",
  "key24": "31AypwBdjVSs2po7UtEbkVGDpBBJPHpEqfcHgPHH5UyMzDD2Hh2NyALoSne2ZpBhZ2J8fpeFP9wbv7vfedyZt6Yb",
  "key25": "4FGiJTEZSrgZWiEu6kESuH2J734W5CxYwBKktSEshJGMYAqC67C1aK3bkJj4QuGEMHZAe1YePoAJroUHmoKW1Uzu",
  "key26": "3oQRPouC7i5DYjCF3d46K2kvRR7bkdLtuV5PKqpvUwGQ1Cosme58njVtPj9QqqNnF5Bxb7qDdv3HyuvCoNiMPLSo",
  "key27": "5tfdKW3EeHB7VWYMDLhq4PTSZ1nY5EXAx6yZbqSR732ANUs1CtFxMuqGpR3Sn5LMssoFc25G8fyT9gNem5Dj6ymJ",
  "key28": "54yGV4iruiw1YizVH1cAtYkeWwj8KWAWLe1f2MZ6mC3rW18zpR69rRVrPxw3pbJfaA9SE9B2FrHBAQ7tJyWUdgvr",
  "key29": "LLVzSyWmfVrH6s5t54Bij9KS2ofU4kV5kWRbEY9jGCkWsnpYZFyv3QAMhZJCHK2FnSp9wexDih81G99aRyY79tu",
  "key30": "5keMjjGpvNDvzVnYy2JmKPsX7ZBLHwMSbpx65GH1gnibVbtXLUZCGtnYjESqTrot3EFVUC7uQCYd8Zgqb4JLMtEz",
  "key31": "4mM88DBKd2UaLqY4mpCe1M64Z5cTt7js7UkA8wzBrigfmiY4UbUDzBJdeX2KRMdYo4UZPum2qbK98RoJVy7LVrwA",
  "key32": "541C9qFw9Nh6dPQq7cwfTjj85kkr9aUpYC4B5rpm8bfQqi7yMysKzcpR98xwGhoSJPvVuBXo3V4izj8udwkG4JpR",
  "key33": "3iABrHtHLBx4sHhBTv6B195s8ASPdYEeYWwFqJEZyDSDf7n5iMe9rEfmsozBhdwJtUUSrh9majg31FY1xtVhNgbv",
  "key34": "2zBjVJZgmxDkoqX8RQzfdfHb5ghWJgieDSdWcxWu6dbx6jDn2RhdH4iMbXXjzYc9Ub2juYR6XhA3MFCufzD9Y8kH",
  "key35": "bkujvZZWHWNnRQM9ZJ1ytb1cSZ9BYUUEzwQXh7PNrL8x85mXbHpAuKbXP46R3dNwiaAg33u2rw4wa62hX6DA1wR",
  "key36": "4WKtKSKMwovF3qe5Jwjw4561QLjQMc2ieGEbeQuT3xQrA8K8pkLiEJbSABPQZSSkx8jdUg74nLWDzunKRwviBKmp",
  "key37": "3S3SZRkMTzNmjZv469R28JJ26nXYarxaDxBn8H97dMDGaNwoB95mzEmLZ7csfJarqCG34raz9XdxQ8DnnW1qqqXN",
  "key38": "4knYQFoJHZfPSf2PKJZ8kjU6hDXNEUUK41gMytRoSWaPNqs1J7q4C6fNitrseC5uXF26AU9bahunaWjs39gKyE1v",
  "key39": "3bxL3HSosyReeobMg3tncidFrtkqszx8G7Mf3f1BAt4VDzUn5GMqBHBoaakN8sSDion1oBDAwRqqZUVhTghWpE6s",
  "key40": "5LfdRBGAv7MZKUWQ2hY5a6t9tgNGib3tHCu5zhEb5owjCk5uUM2tjdyJNmdpB9mQxqRFe2HzyfpX64DXEwf5D6wJ",
  "key41": "54U5VebWCLyPzU7RDKRpfZMqCfg2dLeQewaN9PL4s19jGcQ3ftpGZfF4WktZFZ6McXJ3Rtmv4tbutNLUzypPBLXn",
  "key42": "3bdMPb2643D7fS9Ub7YNtegevWhqGC2UJwJtH9J8ejaz2dSoqqQDWzreiY8ijNTw85zCUhDhLgLqmk4kViEQQSia",
  "key43": "4yEfe8pp9wimMKRpqL7H1fXjXWq31azHN3xzZokeG2n6ss7cfMPNHw7HR4ew7iRQwKTdjVcFXQXbpU4RfNqDkwya",
  "key44": "5DwtEzCc39Dy1PTmYdmXdNfceDrQCMbzRf5WViBxmru4KDDBWCix1E9ntrA8qn69YmNKuBaMuffugmP4ki5ZcAA9"
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
