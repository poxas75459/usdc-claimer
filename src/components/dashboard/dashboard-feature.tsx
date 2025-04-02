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
    "5hwRHTTL8CryuA3gNewU7k76Gu6XsTFwnjd8ajsDy8qxx1WBFrthj96WcKqpoDyKzxe72Qj2UAds5Ub8WdPtG6aE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uME6EZ82c69jSzC4S6QcLhy5pEnCbTNBXkeELzWVRHtdYWPE5Lc1X4ZtYrHGcB4jmcFWaRNwuZU5LC5bKS8ok1c",
  "key1": "weEpFPRY3iRgK4cyQV3iQZp8WqGmjBNikynec9uEewuFGqJbfDxs4vT3rPKvYQeg3j2psjnF99KCMQxB8Eyi8r6",
  "key2": "234fpG1cTbctWmtLj2NJwhmukbbEaCTqhBSZFT2VRknsJjjjfm3msqfZVj5ZHYu7TLBJBb3d8e93uxQ7eCVAJSDm",
  "key3": "4H2AMeoedcdLmRxzCsiV1JmXJf94tMtdZAkVoo9HLC6X6B1JNgHA6Wi6EAEzBRpYVHqZeCi7efK15191ovvwMKd8",
  "key4": "dg3sRgP33bKzTpdvjCFSaswTKAqX38AouygJpxeAUVqz2wvybTqJeTqWT5maG3u5nPXgSzKdAzLT1ZYpcDPHCH1",
  "key5": "2pi2kQoLr3ZGTEq8o3NXQMNoiZ1bkTTujhLWVTCuanefjJLVuvB3DoyBQ34q8DDoMsXMGBSEEX8w6WiHtem2CzHw",
  "key6": "48r7LFev3DaDAD7bGNXySKSR7SeaWCFjGu9NA3uNMkde3QNv5pUGyvLfV6tVRiq9AYER8L9iXmtbjHRXCT7Z9MpZ",
  "key7": "58jbpUfjKV11w9JVjuiitkj5LrUxMsoUvJqgB2CafBmsU6E2TfcSU6WpRj5UK2A7xVDzeFQPB8ppQnceUe9Ao8aK",
  "key8": "4nR994oBh75SARe8KQ2m2jrsHErQC75275eSYKVdUcvk5wk4vKQgoh6Xnn1NkJL9egbV8oWEv6GZRM3aYuN448jv",
  "key9": "4ocExzkCU2MD13yjG9UZoQC5jb2HvC2WLEMvbANvTNSaSPothnowjExa1KXRqaxqMf7eaUXdVCzwEMjUJ7gx4GNS",
  "key10": "4XnXcPz1C3oxU7smKErfzDBWWMaHdSV9fCDfdsro84WpVfjD8BPPVAnuMxAW4SrJnJxCRJpmqzLzxasQvhyPTxVq",
  "key11": "2eEzkPhoPPE8oWeoPSkj2mQnN95ArLnZ3UskbVbCdKs1R5MjkQYRJabYVAYYr5hwDsJJWGjTHqM2qNNbedphKTAd",
  "key12": "6YF2cj9GQ7pvx3Q5B3GJvhrk3FYkeaRNgeJ2fFPXNNNCx13om5Quh67b8Tx4mFYopmaEdkxJYohsnXqcq2mbpZG",
  "key13": "3Skbui4daH7nVP7uvhKd8AWAFRvmZnZeGu1ThhQ4qmCDpbuJNCQFB8dUNqmqEyh2mjSLrRumtSY9SZPMd3zUa4Q1",
  "key14": "4piidyirWm8VvbCNkrmfj6Hunv5STtQW5WMty8YCVCSLiYAKachqz43AA15H33wr55KiuHhUTXD6uszUpusNCDFS",
  "key15": "2njx3kf5sNb3SREkuRKkrA7wk6rmqYFdPM5UjeRsk3fNBv9DWeGtDp9sABZoBs6AVfesSBEHcBu2Qk5tnwMSrZXQ",
  "key16": "55iBRTsBG2PTuFWj3hqHyX8qJD2Lw7UHuijzbj1sLWFVhjMq6EggiQrexqPSyPczqtuQnxEQD9FHeJPJsg2dq8ww",
  "key17": "5RQYmQ26KST49S1zAntbkkLdnE2sLi6t1bsGzN4shuWkN9bnbTpsCD4UXr8apLsnYzb1Zqh6KCB1pZpgEDb4CdQX",
  "key18": "3dbCJMKypFP6gAw7x2XVXrg7y9t5Yk9tpL1ujcfNeJJiAFjZMugS6y7yAjirTwNn4P1U3EmcEzP7w2bpVQCWTHJn",
  "key19": "3eyxPZhk7D2N1Zq2JJtZsHJA3Do8uM13pGV49sq1PT1hdTWyCfxniaLBySG8UZaDLF5rny7mRqYNxaNe1BFbQVVc",
  "key20": "qeY8P2xxEhUDMo87UJTKRRZsDChABEFQmgnVy8qPu8WFmCU8vdfoiyD8mFioQuL5mMrVyAiETFJpkJ7ET4PrBaW",
  "key21": "4YJ9cEbC1xCfUeYbEdoGtd9MxvDFCcJQn55d9xwdvu6KY17WbKiSimMtJ61hAgCWgykbYJLRQwmd5rxz3UiXR7SS",
  "key22": "2EAzMFzHrT2oYayQeHGrmkjW54cMMX1cwQvmypxFbi7vjAhigkstL9qrMcGiAfxn1rAfCNN2pvh6y23rm93uZeCv",
  "key23": "wKdudagsMQ5cpa3ZgWLvKNW4PK2N2FvUqGBEi38oK1kDWpt52Yw8wMM8ExFbgoqDfGLKg3ASMMpV8W3pxD1Z5oK",
  "key24": "3Stto5it465sHFjWWRMSK2CV4Ngyrdva5khHE8hQKEqj7JTWdEhCBfem8Pc3SN9PD3Kox6pnfH1DsyAEpKWL8LCG",
  "key25": "51nxQkNS5soXyGXxGuW39FuyCrPHZTfPBkoEaySASSBnpRfBW6U8D4GH76CLHNZYESZJ1gS7aN4UTCEAy81EQKJG",
  "key26": "5Us9K9duC72Qj8b8Kwerk7h2Uc3CBhofEKwwWsPbCgFtTpTp4fFtKZnrE8kbP8isKW1Fo3SPt7N76MvxeWCHDJsk",
  "key27": "3vWJEDzjjm1NipzSNKFrBWFYfbE993tN8RM4W39UL9u7fuWjvKVYB3KcRqNkZLQ4LaSuvWfui1sHN63uQEGNYDoG",
  "key28": "4YDB2fC5X5mvaZ7BVWVFBKuiZTUnxM8rdGSGj78jrJEhFrZKyKWDr6txvNspXLLE5fWADHNc3QA2Db9vZoK7LkMZ",
  "key29": "4o5v8b33er3DFzURArQVxQm7wWdnaUHPT4rUMGoRZN6oN5537dJqXFvUPEqCWogy9RX86uE9hrPModYsCeqyoQB",
  "key30": "268erJQmDutHnRWA32BB8kapah8eQz91N3xqkhqcnwMudyXBnhm1uqnhSRKRchpNGeKeUmXN4k1iRwPLHrJ47gsE"
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
