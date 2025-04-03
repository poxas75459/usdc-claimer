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
    "46kcHFHZnkrp9S9fdYzvF8ur8ovano8N6i4iCEtqaeDcmriCMHKDF2sNMR3hWWZw34Tp38c9Jk9KYhzvLFBDsyBh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BQ8Zspy8sfJ7pn2b1DDmEZNXptzdtohrZJVVFtc3xrpU7Yq1sLWgaQULmZsfCSiWyfQsHx3bdWvn6FQsgoRiyLa",
  "key1": "2PPUvSXNDXQc2jzwXLVjXGqfg6Ws4itCXDmxCxMwFtTmviaNdz5faoehTJ87nWPi5wGZBYAMvuseFNy9DXsVLwDu",
  "key2": "4qM4Uo3LNLCRj7gejQ8xnMMLMG6kjsJSQwVfzNMrBH8SS8CKWN2fndu4cmvTZppdMg7JDMqV1yLyVWEzi5BGSSwj",
  "key3": "4Ub8bpmLJ8kPXDdUYbY25MLJ5u9ScgDQiQMJB5o5Qdg9cyXjKFySPYrx8zXeZmJtezZBAHnQo1Cy7Ck6KABqPac5",
  "key4": "SG3SAVHkDaga21vHGugGcBXnVkF1r5B2L512esgQQUCce8dCHPXLZViWMToUMPcvMST48FUnrZa12wGC26pJXMw",
  "key5": "2FepuciGqJawVErgWxnQdubr7QFbvPjCu7DitAhM3ZFB2UJfCg1fRRQDqAWU7FdeEJ8nFVpRgSxEA4GZCqQEs38N",
  "key6": "5bCEDni44S9Le1RfEux2W27MMABmWShzG6JteQxR3i343yXABivFbzumd7EEsGD1HLfhRqQmpAFda2NZN1brqrdt",
  "key7": "5jDwDDhXC3fbYJWZXYCsds5mHTwFKFYJPXhnSw6tSUrq5nTS2Gq3Nbpy4ovDAozaacMMmYMsXNE1mQMuXsUrvwwq",
  "key8": "35oEjiT67pvuqZu2kTSQHXBQqT5umRxpEbqx6UCaShWZvk7d3tSR6zy8tRnHBcdDeKEEVtK3Lq1qRmpbGVh7pxrV",
  "key9": "2u4w31TR7SBnTqicwBmjhw7QogZGCnXSvUTyXrhpSVy19F6VwcXiKPnnR7THFh5Tv6rLK2iEnZwQXkNoNE2HCXk2",
  "key10": "4vS3t32SDUf6ngYQ4LBptSjnPF75mgDGGDhSZ4GGFxRkPEDrcu7jHfEK5do8vTd8UKBZNcBk7cREosNGCqhpxv8a",
  "key11": "2ZBARpJky9vEaEMwNjchYvcQvjJzo4jzHEjQ7dw3Z5KaAuUBNeFkNJNUEfGBiH9kh8rnzKrTXpTMotw2xJmkSuQK",
  "key12": "2bz5EoLaAhkXLPHiDfQ9nByvzhuXxJSPyX1dByRvEvKWtE14vnmsxzyUi4H3ayoikJxwHmDvqnfXxZoEDGRXDto1",
  "key13": "44hgnRsgfCaZJDyaekPmZEn2b6v48ANqWws7m2fXieJMBXZzWaxZGqBX7fjXowmxXS6PpXZmx3n6ZaEmJr7kj4iz",
  "key14": "PDJzG46a8aFTR6Zwq7x9SBdJBcB5zGpvf8GrTaUkhmbe3oULWpaKWxdAt9AjuHRqdk2bk4kbxq2QH4GmFHWMtAj",
  "key15": "25MFjYzQdVLADnModUHUpFWKENgWn9mnpGYFFfwRrLXKdxyAaVq3vZECnrCy25JqdwqMnozvzKwQgJe8pbNipiPA",
  "key16": "54q5Hny5ivSvv1bUgXMywWbv4qPR9VgWdtZqfKXL6onvtxdG9kMMTALQ2yA6vRMcDQjVXpKecsooEMgq7WEb7DYv",
  "key17": "WRoYbAHaB2MUkD1eskPFrLJQ1EbeNRWbvqoBcK56k3wUbUGLzuiL3sbCLXgg5ydPpNQQ1kqjd6P4hcyx9GVQgcd",
  "key18": "9eC5CyHQC8UKDf63XjgSndAdSmWQCJ9J8nM5DRAyxpzPhMYQBNJz1h5WkRHXxyt5fWz1LDG2BZJdfCMEG6D2BLp",
  "key19": "4QjyRK8o6KirZkQN7LbcDGKxu1Ru4NR82X8XJnSaiFYmybPDeRJ3YpgDgzpSL7rkWoN6RLQ5dX92iyKGqaMPkq8s",
  "key20": "3TJTvQULYb4o3VUpy8RoW5bnLDEdzXfhhYFRo4D8chYdDxAaasNMdpWGJFyqdgnSRCbj4JUVdESSNLgEJkFwim96",
  "key21": "5romv7YE6sJhMnU9gtnQeJxJ1dSVRzUp5FbWAFbbC8cyYFK9ZWzwQpbJg9LZ9mZe4wxJR3aS3BUBYVnwfuByj8Y",
  "key22": "58Pc9iZmDBGJgvQkFcAZXiixjvZWag2LACueLfLmkPzMnxDNMU1BeuVibfCmLDSrnrQmGdwb83PxAFGM7spHYQsa",
  "key23": "3i2tzJSJQmdsFt2FTn8TaBbkD2LCty1n7naqv4thZ3JTYH73w1V7Njr1x9KSaymA2x7m1EWFUjBBqYHfSFfZSn5V",
  "key24": "osGEdqRQvaH3mmgM4aPr19Gnq8kWe9snW3GuE5bFFumTjrjCEdobVpEwPMmmuLJFxZFDawCYEHentCzxBVi1kTi",
  "key25": "2BQWwbVZedGpwHUfwfKp6PcF5iMaekBBRCVy3MKjXfgk1LVBBGQM4twDveBusdWesVYpCjD5FFYUcZsqM9YddopC",
  "key26": "4k2DzGGHXU1jsELgyijmWBHaShgxHB3xf1Tq5SoCzxHs9WfkMwkmbTJZ11WLBoHWGLT4ZWSRQKPQA4LEpVXzqzz4",
  "key27": "2Z1GiE8ufPZ6yVRQLaHdFapCjJC74bVErUqRoW1UFrfR1RPzQ6k952S4bwYhqSipyEboj2WCFRVK1HfAwcLQGz7u",
  "key28": "4YysWZcAxm3gm6YPjmUy4reBuuWvyaqv2TDvV3Awj9kBjNhLYYF9Pjhd1MNBu3VnjnRFJB9YvrpR2Ko9bhA4vchB",
  "key29": "48vW878ipdBKU8kqKaSDxUoXgtDnjWKvCNznYpJNQtYaCwXcbz3itGLWud5daLYe72GdoEvuF6MPyoW7MDvjW7R3",
  "key30": "5dfKcTisxjYRkckf4Keaxpr5uTwjTwcm9LzioC8ajrEKiLGdvseWCabPcQWy1ufeQo5rCS5qRKvK4i6nyAEojCvk"
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
