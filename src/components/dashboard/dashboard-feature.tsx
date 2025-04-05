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
    "uBTNBuKz7ht3tu2Dm5FC7BoFhLVdac6reCBvFdvFhJdiH7YXc2KVLiqPidF1DCNsMwngDWGx8gBVRpDJRaYMHxg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sfN1fUXjcZty4uaJYoiwpVi4cKt6Lv3NHxqMeayMK8pVpbED1a462P8k6HMqDxt2VpDXc3cv7kGCnn8hBWCzXcB",
  "key1": "3tt3k8f2quZsTbwM4N6oHqr6P99hmCQFhZXDcGWvKohWYT8FcKhcbG7LUfbWGYFtt6Myc5SztcEdh6A2Acwvz26G",
  "key2": "Y5RZPDdE28cxeLm6hTu4yCUwCY3s8Fj6BU6kxU889YM5WynaTCYf57AA85SMgmKwDJWif4sJNjsfGW1GSUgNtHq",
  "key3": "3usVbmTQQ4kY7Lan4oxgKnXuCfwBwkNRgZttwaN3cePG1cj5o4T4VU9ENMYnKF3KqSve5y9fdFe4zkwbfNCpEUbS",
  "key4": "m5QC5fJJxCVD8eGWA2nT5P6KMTJQHdTVe8bUFPzB5m1AVQV7VPsZF7h4MifmwFeX8EVoL24M5cLLf36CcoAniBR",
  "key5": "57TtQrSwfBuW4Zyw8a7zNQYUAxnkA1haxcD7vGt5Q7CwUmoDMjcFFjawdqmTukN7c6ff2GdngqQWLmLT38pxXNzH",
  "key6": "2CWB6NZoUAhTiRWPcH3aXhiiZydLJpnGj6r2UimUYXfmF8hmRRMrjqGxiaszBCa2E86uWQNaXVhjMw1o5noTVPcW",
  "key7": "646Ya9MtF77KCtR1KLqgkMDPVaCmu8dV86nCLKsTkBhnzAg5E5w2jC9ZWiMMjJV4S5E8eH5iU3b35eyiRWaCAEyF",
  "key8": "4PEAVTi5BPD8KjrX9AUEGnR1WJrpm2zUEuxgs1HzCD9P3zaupnKVfrpn2Wj2AxayeE21jBPjtTVRMVxpSEgg7ub5",
  "key9": "toeFdvxSG78cJW5Ukqj9tT9kUm5iN2eErJjz7UteheLYuCPKw32PjHrairxSUgJ53rJFAzCveDkDYbSjxx81RfF",
  "key10": "5BohPSr8w8xz9aytc2t7mSMojeNitHS1BQ9jiHscJhJ1X5CzkCUxkotKHLies2WAmjxAntVXUeT9hqKLjGvnHPyV",
  "key11": "2DsChLMa1MdH9RB8vboXnapJNb7acH4Zeqx5wrmL8hHx4nBixCcK4tx3pDiwarzNGHEN1Kbunr7974SFSCVmtXfM",
  "key12": "5iUGfu8KPbTsSXE5YRd4d2ieU2yD7wNUuzm8Hbn79qT3A5LJSJanoGLDEHHvbaUNMwkrKkWSXiuuwzazELihgn3C",
  "key13": "3GHvhrXGYArgAarU16vYcffyxUWGwQNz9wdNJHjSiM77KvzLAN8Q8PLkjXRdo2abtxTLAGt75ubb1XwfhTxxmh7d",
  "key14": "4KXW9L9d8aU48pz8sWi6fcCW9L2B9PG9PadM47ds2qJeg61qtTtiyUdEbgRGtV6uFEAppkZhqc2nXRagkYvnMNFf",
  "key15": "PQBs1Vw5AhDQH6FMF9AoqaMY7xa9LheLTxJjFtNQqyoRh59juTPuK5bGrvVGLdGTPJDN41kYx5aZi14eWq54dYB",
  "key16": "3uodDHcUG8Dnd92wNr29ezbLiXJcQxdor9qkUJzsGDiAZD2cwygMos1JR8yEJnwn19EUwAgn2HXxWc6DWHqsWFGS",
  "key17": "2GpxemZnAMxeG8rBVppMkr8nV6rdnutidDksXvP9q1uWBs2UrUM9pRjW5Tfj9UzDRcYQeCyJLxs6EfDoN1DMGCQ2",
  "key18": "2dEnwHMfnSviqfzMFZxb8Gzi83QL498Nc71QZUkkfQbtkbz6CNzbaqWXFsPEep8vpicZnBP5gsQUZhfhYvaiTLsc",
  "key19": "4EqKG3aK2yTZefRCRYhoKSsfcw6bnhPc7UinNrj4fZ83dSuZ6gz5cZajHZ5nU7XwXzeRXxANXUwA297irmdoWHse",
  "key20": "3gb5BuYUS4bpg1SarGYUWSYrygA8SV2Ckqk3b6rMQmHwfvVCeUtNUCTVKvkS9ekETNPKW1woznx1mZ92K3UyTwom",
  "key21": "5KdnRBEf6CDoEY6CGbA8pSdkbpgTXybtr4LPyU6Qto8ghVvFWkmH5TS9RLwKigJoMz8ZbKiMTES4ZjPkP8wvgDWU",
  "key22": "2AayjfvufB4GtHFC3j4yzwTYbgV7RN8bt4er4bNn8bkFcK37Guofit5PMZBTGhzeEEg5qUpieh5LBNFWkvVXX14e",
  "key23": "5pNLUswq3FV9UQJJR9eBjBkZGKVHUdZuFtDjyuwL5jNdo5bAbG6GRHSsMhJkhb8nuRNFLGzQL44DaaRV6EZzSckq",
  "key24": "2DZd37PQRxhfuexHKRztPrhvf5LnMwNLn83A4VThUVa4oSGY8bY3kQc17FD7c4cUaSevPvi3QEnUUveEKPWavvqy",
  "key25": "37WzDkYixbYj2Ua1hmei8wzYQK3SkbGSWAkKb38uZwkXqDchJ4U6xDEHVXnBg5nDcwSKgmFfCWwMYozXmn6mmEWg",
  "key26": "4b86zUe1s6krY6hyKKMaJsHUjF2vzgP5jxHPNEF8S5NM22PgehQ85QvKg4GsoJhgSoXdiTs37hjLJbCxA7kjUjHE",
  "key27": "41kLCGLYHLMrSHUYm8EUQFEhUSXTTzEisthbNZf6CJT1wx3spDTnrHjRmN139qdifXnb1wDAjpXVuPGpvxQs3ezU",
  "key28": "61bYiDvteFoTp72ihmhF5NjQvt3cA3A55J5zuxrg3Sq3MmAzLGX4CAvHcEZiaDt2dchfRPvnk9cQ5XmSXcThGGmH",
  "key29": "5MihevRSxjcjGzhSyGeHXkZCvJZX9tD7tKdfr7Grf9953yZakt7eF4oNvcyMVBrSdwS6cVVmaL5wceXMh6AG1pBk",
  "key30": "e65wdupuRipbDdBRqGvfL6s7eb6gG7W3ZyvU3J6vLCdZjyuuhvmRAiPguvW72KvY2G7b8J8RyiKje9eHyNvyUgm",
  "key31": "VbK9peQmmEZhUDUkSFxc9uMRyJJxZEUSfh41qEHXpMDnHTdNnFsUm8Exxfsgg9StaUmzHqSEHffBc7oVi85BeEf",
  "key32": "4WbxoiuPEwsmbfTLadujGzqrts4n9wSpaZZUuBiFoa9tHevYfUmgKS88zciCgkH1e9KPFNobu4Bi4UVqACaFdAuk",
  "key33": "CBnJ1XBAoc8szrUJfC6LDkSbWxZYJL4oEFvtd6FGUnoHKjjUens4YHocDVCXg5y6mmgF2FrvFCnVGomER3yJgXJ",
  "key34": "5MnNqckT6NGQmjDMAJfVefvvS7eMHMi8FiG8b1TomzznXQto9q6KfkqNdDRVpaLerjRNpbEnLpSEqYSBQUYqhYgQ",
  "key35": "2haemmktQULTB9MS9u2v2xUw6mnWqTLj1xKUhsNWFq4yM4HZYF9GHAKgKPBqrh3ifweeS5Vgnf1srUjJiSpMyC7Z",
  "key36": "4DMsuPqk8soTwZDDuBTNXT1cX7vi6K9hXaocSph1CSo6WZVyzWWsNNeHiFjPfi2P2aCPngBVvLkJ47JZ6eZ1cQPA",
  "key37": "32zt1HJaRqNTXp3WagW8iVGiywmmtkMEQQUKZ14t297QHhubuzfRqcTCT15yELN4VBC5mZm7bkkZNnFK9QwCArgX",
  "key38": "XHEohxeZe7dVQ7XfJJzxUDHpkoddUNd9WFa5eh9Jfwkxw1q16gS8GFk5PmdeicCa9TwPsPEQcAwUL1JWttRJtTy",
  "key39": "5qJjbAwm9J2tyfp7EfrTuoNd242uiKibxz3Sq4wi3QRfsvRkxzWWKXsBrZZUzBKVkfnjaTYZJ94kDhGz5vtfwWL9",
  "key40": "5NDrsKik3G7JXrGHVEW4jeyKMQmq7AakYkdZUgthdeLGEKuYwGMvvdFESvZtoo9uGpeunhjvGtuL5N4RFHS8DC2M"
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
