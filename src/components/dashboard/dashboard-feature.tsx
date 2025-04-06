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
    "3Y3zK6PwjtGpBWnUyYqZDkHxoSyfSZtHh11Hn1mb7e9oKgP4GqoSnmwwS5XpN2jNGPvLWLBeVxuJELCAEE1EEQvS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54yrgywpTjH7LYdQCubXUpFqcBv3ZaG8H5Hk1ufvgSmjwFKeHdGvuY4Sdvy7GHwM5Uo3FqeJsJ45mKcWtECEGLgY",
  "key1": "4tENG9pRRA6REMRFL7D9KmHsmqewP52BDHPjPjb2nFQYEPMEdy2hwhs96jfYCsNJytokUAhZy6zac54NtppCV5B",
  "key2": "28hu9TNWfpP3NmcKsn6RE3LBuMjVYDSNTrGG7qLu3tCbLCUGbuTGCQ6ok81XA5qNbMbsXvkFmqZBbV6AHwC4iJAU",
  "key3": "564GrKkQ8chpGsD1cC57PJYRJgWvJ2w5JiN8bdY1kCaGPRbpwSLDTc7Eg6PwcwUFyNHaK2VDPdi5ec5oSJXrciGd",
  "key4": "3BDnrgmVyiBp1DgM7YZAd2zebxTvdTp7d6ZYFhMJgd2QhvjYgirX2j991x7Vg7epHgYCJG63W2Kn2piQSkTRTwvh",
  "key5": "h3LitqT7XHBWbsBXDgJWAeWjMJpzfJPjoobEbaF6NzRVecy9nVEvZXmhESMUcfhpr51jtkjxPcvArnxuAu988SK",
  "key6": "5HYqqF1HwduA3XUCX5fwHojwtvwXR3z759cHf3Yi3faPAc79REMet9schUxGJ2hHaQK4jZD8b5wQdSQCZP8Z16aP",
  "key7": "38iwSDjnBa59o28XjP7rP7TYxgqUXPuN6TzcCCqAVh7iCSeXBjnds9TyXX8BMiKTPTxgE8SHuHb6BdkWkfkvGk89",
  "key8": "bv3tHPWPhYQAFqzofRMid5V3AQtc412xw48zpkS3p4VLQvqshuBo4cchxdLp9ggp1oYAspnn4ZKVGkhnbPbDDfD",
  "key9": "4a4FPdEsTsFjGvnjM4eDTkcoDZjTJiR3549sBTEdxzYfF999pnct3KLCernYPLpfyr5LdNB3MXbtp5rGnW729hqB",
  "key10": "48fHbvuzm9yqEpW1ZrUJZPifwJQs2LyD89kSk95w6tPfib271x3Rkkdx7vd6fKrkoSZwYZT2MCD45CtMw3KzXEkA",
  "key11": "4mPGxjH9aLhXoujwWx7xEgmUFGzpsgf567TFU8G5wCjXJVWWs8unzBJa6C1ZrZ47uX7nvcCMm5nrQz7YDVdBXM21",
  "key12": "cxJ68YdoJJwk9YACgwuz6jmFh29tK4VVLoJe1DZfQnQzibs8Nrd2Qj8LEDDFV2jAzyxLJUsXMJVhQkXnWyJ7vtT",
  "key13": "4czTXMCYegs7P9eLQ5dMQpYePy1wtp2ubP2Tti3SB35mKSiKLzAgx9gAD89oM3jN51bd8oSxW4qUJQCchgLTAcsA",
  "key14": "5SezMZuaGR7wmzgzepFBYRubWk7EzS9L997oq9iEbPgB5KqZkoZFsWDCA9RiMsg5yXy3G8WrvKJCiQH4uirWNTMR",
  "key15": "2sjFHt6Q53bcPL6ky14SDz111EvmKaHPPDvqPFsxc1ZNFnnPqnXoUseap6EGT8gs2EWtRpd4SdEwqfm78nyaWQuq",
  "key16": "2QdWCMwHMxRkggpB6e6ztqiLFSi8bLHwzqSuzDSuBCrrxszpgSUBPy4aWXRRoAxFZXFtfnzKuEyj6oVPbp272Svi",
  "key17": "46VvZmDx9Sms2tLcWVcYyc3MWmmaq2xNA53bkxcnyzbDCGX83aypQYb4KHJKNyR3PFXC1QpH9pV25QJPWWzWnNXU",
  "key18": "mZQA3HY3dTK2DNFB24diSUXSSWHmKNhg6KVkwtHRPw6sk7GW3xwjm6j4dSMpNwPwEE3UDPt2FUWSpQDp9g88HqN",
  "key19": "62WqJDPVaPTtnHB368vjt5mcE6eJKxP1i86KBbXtpsu9qMAXQJm219YFq6t4Gmc6Jvj5auDZdiX96cT5WU6qj9mu",
  "key20": "44piW1k7hExah9rXS9jxi35Sm4Dgcf7v4jWy4ZAcnsoK1RLYpBM6MmY5qSr89WTaQ4h4FN4bBUQpGagf5KiVZeYk",
  "key21": "29EdDrnMpqWyatLZgzA9AYfwumZMG1jKVt9K8TLeNXPxN4MLn9z8WigB4FpWa23FVFwrqTFNnsnWXQ5XnhLGbv9a",
  "key22": "2xgM7aNpGvToxCjoQuZPZbJeWbA2DTUkyHMKxUKC6VPLu2bDWeLieH4jsw7i6Tb7KV9wyiNBAbZ21VbtoA3uMhtp",
  "key23": "4dW2ZrbkTbkjuEvr5hAD94sLAxJnNpXqqYyvHyiC5zJJpKkAdLx4isoYg3s5TCEZyQsDgoFyHdS6PahHeddHxmzE",
  "key24": "3APyiX8Jh1koKtfiDm3gwxkFxTK4HaZAgKuqRn2PMSxA4GZ3rrPqS7yuhGaop2jUnhfn5FirD8jmCnUL9B4Po83",
  "key25": "obb6EzURYCsEkb3fuMRViGLRgxuuLKcma7NVGrURTcjg9Qg5tZkUY6ndsfNgq9DTNV9AzBCYL5kKBntDVmjj8jK",
  "key26": "5iZ9nGKsBW96cQhsPvQaSCJ18KVv56DdaU23VAZLdyFyWFKFbor5evNBBqGBZEaNhsfTahD9p3psuv83TwrKRFP4",
  "key27": "5tTaCfuWX1XRho7f1yj3MFMN5F3ydfQH24Uu7aebCsCcBRrJiYzE9cU19hbML3Ded26hQttxiCpGKJhZVtwKHaWM",
  "key28": "5QKEDPzmVfVCBc6pUvmFgkodE1VwV112z7RDzKzmocs2em1TUW4D8tWAjGajivKL5vSVeHYYpCmNzQqfpNXQdyvr",
  "key29": "55MVgBE5HXpUeGdCYn4uYUCfSrFHYCPAdWgFrsxFFfENXmiQm6xajjkTN6TLNmmK34tXDRZieWaaremDQeCY8PKp",
  "key30": "CwGDr46t3fRrF3EUuCwf2ozrvMq8pKqv5kQMQKGeZ9QxhEjnTKaCALfseLJg264R9HgKoEaZtGiEvtToZmvCLAv",
  "key31": "3HeWpFrRHzRE7APWLgteM9fcAhGKGdaSEsHGqMzLqPQ4NT5ZwMZCxtefCrw38u4QyYwDU3Rd4GVwNz3M5ZayvVTs",
  "key32": "5hLZGat7AZH6XGnYeoF14jFbYxvKM849pi7typE5TTaQbRbXEidDAKDhZBLJmt4TkMRhoaCuZ5ytmtWxabjiMPqq"
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
