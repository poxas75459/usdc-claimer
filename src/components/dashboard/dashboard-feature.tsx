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
    "icyjDaQAt2X8u2ho5mMYM3ypYuB5GE7KoADbi9vDGEe7FuM9Svy9o4pAfP6h7ixVQVw8jdzpoHP4EkhYoC3wU4y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49mzXYt3Lww28NogtQ8bsfvwYLZP1EKFNZoKFv8zBgwyYmyAepXNGC8D42A7kgQrgbUM7VYdpEtTwmGvr95Q2HXU",
  "key1": "2ngs7LCQyiwhhRXbBSYGca7g6pUR2bHXUpv1hjjKhdGXTgrDhUetip7EL4FJFte25TjT9p34sjNoAzpnKq4F7RD2",
  "key2": "EUVCS4Vjgy5KL4eC8S6HWZQNDaMu3GjD3H23qF6Eij71BGusrXEBtq2F7TG4KHQ5CCCREkTHMDaiwyqG1zT8pPh",
  "key3": "aiWdi52xuvzmZAX2UoQA1JKwo4E6AKrQ6wFvCJRKWGnaJf8PFcrwbgTfNgKykotBnTZ5AqgUyx6jEGqErsEfcpW",
  "key4": "5LpPxCf4jbkFUEuGU8Lh3FZSNMLycNr9nMpZRD8ExeFz9zzaDYjCiBMvxq77ScfyX9EJMZEg7RAvycZXBAeK9WAb",
  "key5": "3NbkpgLfeKAeFqbxmoJhqFAnfgx7ALKsYequbYJFyyzeKhhQxF8hSTsvtGrQ9ADLjmqBqHrLgpq6uiq1wZfbQVvu",
  "key6": "3ShnL3vX98CVu7sW1pftvEj5sPKeYGA6ezBP9VmG2hYFdGtH2ofnFBV3esPffkq5MHDsKttb1h5AHL5ARnRxgjoR",
  "key7": "2GanU6eK7Af4CcUg1GnybB8h8DB76T4MxSmX4fC7gdPmRYqRq9b47kNgcCDQjGWPPYyYGe5vDLzc4UqGtphT3EHY",
  "key8": "5jiamaEhERcGYSgLFkdEipPkRogHaADd8CuWArEuybSZAMR1LxTQnuT8eSnN58cHCLMYVcpYmj9UQenZDJ5PXrkR",
  "key9": "2EWVBS9wsPZp69vEMCeuTjRAAHAXHQ8eoPoyuEQ5PJDmJw9DHsjjNPzibmMk9BXemSMec7adgFt72B9rTUSs34ix",
  "key10": "AKJzC1pj9h5maiMvF7aP3HRnZFnnUmhv3fboKEfYouU29tmBPaKmiZDBzQWJNyxDqh9RDb4Fr4VpYFsVfrENurE",
  "key11": "5mpB6Gfz8sVs38RPYsQ5TZZx7NmXjVRUWFTHtCoVrM3e2TtjaNCLPxm7ybQWYXECCQQ4kPvVudnGv4DRsskXXh4n",
  "key12": "Ctx4RvvZixoQ2zuiLMAwsfYUVpbJhXptCWBgJkrdiUFpYvBJxdPczmZLrr97XkNefqNnRr5BbRhdVHkdgnYU6DP",
  "key13": "3acCeQrKMJWbJn2vvgpxhC423ji2Y9fhkuqSt2yd7XE8Y9mFABBxB9fXrfnWBjYzvBoNLmwgniGpQLDvfEPDKnt1",
  "key14": "3DsjV1QfNELhCASpr22AhwGvxW3uALmNDafU4hr3kVFH4QjYJpPWwVEDJQ8d1KiisuGQSpxL5t11mz97XUbps8Bf",
  "key15": "53jWh15uqedDJiAFrbp2kLT5ezknLsNaexu1VNp72oU2AxWg1uHRcmgkAQR3oNfW237DEo4iQjAVSo9UCavURyXb",
  "key16": "5yfhxrBaBCeHR1D4dtsqEEuZx9TsxTgtY3GjtEPAefqtpRxi3U6smLoZJEnK8mBLh4kTu2pzoKn18A6aqiPwxibH",
  "key17": "41QssJaA2VuYiVJ3kBv2EMqVBFFuuHdgDzi9Qj9V8yuc48eRjgNP2KwqJPotU2vKdNCckzhTAfpGCRQTLLYTenmX",
  "key18": "4MiUNgBdwMEv4fRra2mgi4RE5bqNqgnRiwwMXwgjFsMdoyXZ5uEnWzRcVRJFYCm4UcshpTx86m8Nq79zRVN7PAPY",
  "key19": "59DtLBnHDE8xcubR4d8h76grxbFiPSvHco1v7sVqTXFh3ou1FBQoG3XQ4MdTfCQVCSQ5uYz2nqHSPifYjTTYjSCw",
  "key20": "63KYGWhjjX8zK7kspxtb5ofyVwqN1TDPuDkuT6DTeKsbRTqciMPjS4FkPXbSvMz9YLYeB5s1TBc2KZaW6PXCWi11",
  "key21": "4QdCbxsEAbtPQv1feK8g7dni4xhj5qQpm65zEcniEoFoXaVD7QzsrbePqNzYGCVcdVH38psErkt7krZZmdBX65mJ",
  "key22": "288jLJweqqv3iu6qwyhCorMNCraw7yENxqfBbXg9kdsWoWoUH2wxYgkvnrtukVPt8pJfirh4pDC468XmWjNSaxNS",
  "key23": "5FRPcJ7Y93DLpjULB4MoRoWDyCpmYZ9c6kZTg9x2wWrppAuZgJSc5jmh1Zg76WxHQaGA2pPxnto5vHtWfVer8tn7",
  "key24": "47KFP3wqLFAW8Pub1w2g9jc8nezvigLTLczd2jXitB9GtPUgAFWhSSJP1kebYSnfMevadxrqzwgDo6kWxHZ7LV8B",
  "key25": "4bRsVrJMwGDqAd962QVqkbEoZhJcWj4266amjRXmvvmfemvjkqcoaoMib8e91H8CwbZ8iR87dntB6H6iV2G7YsDC",
  "key26": "4rh54sEnjZXmaxef4mLW97rUbDae9Se1CmAcPTz8CVDarP166bU7tEgzpLwWpTXLk25Wyx5UJRf4E4Z4rEGjWWx8",
  "key27": "3WRneW2s9Bb8t3u6fchkwEgPKGbKsTsmxtoP2QxPGsZC1A1kEVUjWGhVbKNcS62hRmNJTwfw72EAuzk8T2NXTdEN",
  "key28": "5tqGPoBnGmB9DWfbC7fiDmVq2G9tw4zqsAuc2sptAWCUx7LJXaK3g3hMrrDp3rc5hLwm9Fb9B1WaCePPKNZtvkbi",
  "key29": "mxQaq4ZT3hsWeaJNTUarTMVRuSvvdGxiy6SMwqq7Xnm9LfcHP5MVwWBZK164Nc4wKpNfy2pUhGS7hya27iZZZBR",
  "key30": "2tieb2eiJDAxEPu7VCtjipRCSHuG7pUSMDjc8FTysi3WCEW5YZH5CfyoayY3viUzJP8mNyjRzwmbJ3FMkHze7WUu",
  "key31": "4NBmDM5xyL485iwENgbJxXDwkVmdNGi6iBRoR5SRzKvwWqX3goX7jsNNRgPViRCVH1xoWUHk6uhTaHuvcwna4jKP",
  "key32": "5kyAhHfHWLqRhfWFRnhsRivP3qyGQeCr5xfdrACeyLG9zQY8HMqX89nmR7ekjLYRxFEcpkPNMXGdoWUSZDaCXof3"
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
