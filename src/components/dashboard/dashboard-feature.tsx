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
    "2KcamMtWTAuuYtayddSKvPu56hQdLUp8RTjbzvfZAe7Knoff1tm6935zjMqkbzpKMob2zTffqjinYTjvKWK5VxhN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y2iWmExUYe4xtb86m9qpKAeCdvcjnXadepW9DoybKRjzmxzSXutKs7ah7SzeQKEAoZ3EaKjwosHk9oJ8yC7sAR8",
  "key1": "2bKxVJKhY3fqhBPRwoKCuQsPDHAycYyAkWh7giPrh8LDnZKKLQh38ydRBfm5NCnQhixddj2daGdWTDJYq7mU7b7S",
  "key2": "3w3wybwUy865MF94voYiwRiGdcXVAPpzmMHh358n2cvW5m1Q9f18zLcSxqjc5D2GDG9xpH25abitVoTC8WJbaJj7",
  "key3": "dn1WkSCkVKToGMBw1f7zFyQkcj1yLZKqnRot9FySjPJEa7TY3gGVJLWcnMYsVLCA1Bw1DHu3s3hMnXSrzpRJcpN",
  "key4": "uKSjJkBwm7JwjMHi7qvarxbsKMNCyLvbJmvhvfw5L8x4Y3XsBLe1ki5F48qc7jDrJRGPnn7ugfe4UNUjcAvrqt1",
  "key5": "3VumQ4hUXteS1vdw4fouNvoU4ovMfBDmkKWHtUW5iGRHzXQGgBMez5mPHpTDscnf2eEdNUFnz1eGqePrgFuap78c",
  "key6": "5e2vTQjRbqnhe46Na2P3HgzgjJ3hpcqn5NsbY1iimC6GzzW6y52fHSQeDyKTndFog3aoCtcJe33qjRhfbDdC2dtq",
  "key7": "31rKdWL1XT3W8E1yEDefHeBD2hru9pgJmc1n3G6UfZnLkD1V7HVX9YhbkLtyJCdzruYmJHVUnY6rnRqD8qScKrRc",
  "key8": "2sMc4TBsddTCRexEEb7Nfhvy5ewqdhrDEtxMYGcw2pGR2RZjxsFMsdb42tKVNuBLvqoCwWTmQW1R4hk9ZNehv8rb",
  "key9": "3XQmAdE6ZoiLRTh2B4CbntKSU1xt5Bz6KygFg95UKAzETo1xS76c1jfV9xBhFvzSf2ZL4teBhm5tj2Ks4H7wJ4TV",
  "key10": "ZAU27tm2tyzSJUT1hbTvgPP12Ek2pn5WYkgn9rQXbZcHdpcri3rfTTeKop2LeVQbtQiFWZia6QCUBEdLLcSazJ7",
  "key11": "4FAwvZjg4sKjXCzSXCLisjKpdAspFkc5KkJTsL9JQRVjZekT63YDxuTZu8An2zbpiyUDuggTJocA767HznqS8evD",
  "key12": "z3oyekWuUVm8XvshpkhAaYMx2feu2KD8a86vRmzRZpQZ5MsBVAEFFJkuxSkzEYhPUuFLot32rDfaqfWboddU69T",
  "key13": "5TWEnv7WNzJg4wXWtj145ifwDJHSQUX4R1fBtq6Cj69rgtuPgt7W8VCKgaAjut3bA35e5uJ4qxmKDg6r7T7WHFmj",
  "key14": "5XuRvkg4WMjZ5z3E2A3jNazvypuQFNGpsJkscwhatzJF5WmPtVNPdNBsMVEFWhVrETBQd4JDFY6ce4nm7hMmhKmo",
  "key15": "5Pvca5QN7rrPBBy7kzDuvQx5iwyTbtfVGhSimwG3caN24JUXmr3GiFz7zg38t3xaMqzMJ6ZJAEJ7BqvryDQf21ez",
  "key16": "5w5S6f3nCCt4dnvaCXKzJY7uhTR5zVnWBo1JT38ufxfRk7xZiSfQ1szy5Wf5TfdEjCv33ixHfRQWTk3KQnq6bGid",
  "key17": "2WqHodX6sVUjT4eYeQnyA5bGXMq4psPBnYUjrb1cfocmtzwPE3xkAWydQW4Vz4SsUwvdsy95Ch471rCWUEKsdV6G",
  "key18": "4VYpzjBUdeuuNkVp69t8NtmzpXxCFDrYcLZSpamuV8GhbC9hish2nuL9gx43waLnojS6h7tkDF3WjGXYKmBMmGe3",
  "key19": "FCM241rRiscztJz4LfMj38yTsr81m1Nh89bKcfqpUgr6MyMzC28EAUAjnZ8VutfadmBdxTy18fwdWBb4sRj9NLH",
  "key20": "21nkcrEVMYFbWfDJ6VApfoRz6QZL9n1N3j8nqG4xHmqYUcijfusie21QiqXsho7pE66e237eXBoTJNfYhfEwYrUk",
  "key21": "8W5qTwQG6rLv6k851ss5U6xznca5W9SMP4tJsibLsWPWC7DVJcT9vfZNkAZiMG36GEoTWsEeeXaqdB28zXrGs5N",
  "key22": "5iTgtHQdukpdm35TK6BHLheFf2VgbcL82eLg6wfo2q9gdU5o1CiE9B8VFCQ6D8W2nzdadKKovYukdjR1wgUmccz6",
  "key23": "51rU4RDeN8ovpdWMsPkZLY4yC49DPToY8HE7dPmjSfoyUER24Xsbbf9cB2RFVvwUtyiUrHQUptTmKTRLmpHqJyMz",
  "key24": "5Z3NuLASggxyRkMif6627cf2VMqdxvmJq7web29nFU3xWKV1ANNtLhJg8BrFQeHhYXCgbVn2sKo2yV87JmgW6wCB",
  "key25": "5jnDSsxShzDxeKfkd2MmKdP2dPzbJ27z1dPjeHm6iupkynDKv5jEhsx9kYks3yrLuQXicgyG691gxgTcxmvAHAqB",
  "key26": "5MFW8B19AgCh8cEi9q86DxEFeFdAtSLyBTVqhTv2UiSyXTMSp5xUb3HFzAXhGuE1QCo41TzBhTxR7J8xgL6fBCAJ",
  "key27": "X3Prttc29qykN3WVbqWwPViGkeve7bFsPH7LE8SxmBWMxMtqu7AFTvdXoTaFHwzXZCUkL5DKP72791xfSdrEG8E",
  "key28": "3Uz3yStz5ZxfC1Wa1i1aZS6Yzx4AGgzsqksWiKxmgD8AcK9oHfPTSSfyzydU1FoEByoHpQseoVJmbnMZu6Pf6mpW",
  "key29": "4G2aUekvFBnB9yPSXYj5CM9UBBFM9qpDiV3Mb6Xny2zrwJ5JhDvyRdYmTWnkvWzCqnhjhq4Ji4FcvF9EnyCoFaVf",
  "key30": "3yqmgyfdz8BwN4UeMCVDvVPWXdxwyahZVDMNDoFkSBuRgPMZTkkPXwPytSRnzJAbq5mf5jgB4jGTt5Nc2N1ZwNkF",
  "key31": "36g49gVeoTQX9p2CrKQZUmPfvZkEoLPnUEYLbqKAJEr7kkJHhFE2e5wkQppQu3Pz66oz67VrDgNqhsMU7EuuzuHF"
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
