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
    "36DaNL3Y3sUf48PNSfwF9HCcTuEhxqhptWcMXUuZgDuGpT4fJdcaTDPCWtTXbJphjZLj12E9JLyGehMgNXnvDtmv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aLrT3syzGKBTuZxJpqLQcX1dGFLxgPbuMVF9Z6Ahpn6rnBwpNbmgnbrDCa323h3iaJK5jYKGLeyxqLxCZJ3o5XG",
  "key1": "6JKGytHP1M7NKa14XYgVPKBpB6789y42ugiAfVWq5LaSZQjAhCGjt45CAPUSmwaSomFxHsJVaLjyRq17FvqJf6q",
  "key2": "3ChY6j4YWRTy5tUkp8gSG2y6DJ5HLTfPQiQrmbdoeimZsF9Af29irXxcnmCWBHtmW84tJBGxn2HfHpbvc4sHMgrp",
  "key3": "5nqFBmnsvMwGVorrV4RYoPHBBmz4dqYuFRw9TjX865q4mEhLt2kfNrh1FbYh9fMibo7amNHyahYJPVEz3xpWUqi6",
  "key4": "4Rg7qn7HHiRyk6TYfyTTT4do9zuuDQZ2APoq8YatydpYipxz3Ex4Kor8jpQdmfwjZykEvD2RMFJbJ3s7Zb4PEehu",
  "key5": "HYpNPNfibY5nc7Qddw582F1bUwnDmuSQ4xekTSZTMgYSghMdxNVTJCZXPKjGCsyhc7BV1shVuuwFLMz4ZEdTLPt",
  "key6": "2YBkmD6TKGawWnRhVivQ1vvw3JM46JjBciQzHHSyt9ea29t2aZWejsKksVC1zoxhmfWV4XCvmrHoK3YRqSz5fdk5",
  "key7": "5X33zwLuPnM2wGxRLBHXMp4dhzttmVFwiBLhwMJoyDmd7FAy8VVD9y7Pt2tfMUFyLjDBT4LNXPKUqzeobFY5NEFf",
  "key8": "34Hv67aLJASMDRnTBgtqpATr7rL4ET3UY5U9APFUmjjZ9AoLnfJqGBqzmgZdtPLLGzhajzcwBefrJKPFNcMXRZa8",
  "key9": "5sA1Sza1i1aYPi13q3Ms1LuAUAdXpaqmZ9bvkFa6GeEcYrvnEzP8VRaCs6EswpCcUfnGTAatvMJ9gz9AkxERUN4M",
  "key10": "464j7JEf2kcawbe7vD1QQHrgkd4yZ1LMzCgfXYUjFkq7EaERSxYvTK1TvVCJcYaUPty6E7c6AwhndR8cUEyxGREi",
  "key11": "2QaSyxkbGZsvZcFQ96BMdZbeyeEps3t53U2qPgiVS5oNv5vA3TFywH9z2PcBrh1Dqd6viUkaDZ4T17uHG19qsr9u",
  "key12": "3j3UTkL9jYQ52yRHSVva8ejjnQdawzktfX3nwjm4eZCeY2AtLwjsuphJsj5KaBx2xR2R7Jh6UgmjT59YBwHmGLba",
  "key13": "2CtoU5Va3JF1tNMJbYQ12XkSG2k73LKHh6vuznuxyeQznnEEh9963CsLAQms6TSxgr7AhacLQNv12QbFdtsD8cFt",
  "key14": "5exUQPVi6pXUhM2aa7PLyDsMxDMYE5zdJpqKF49pzwQwArwxd9nzmDuZVCDPeguXCHJzQDpRvdccVtLEu1wKChFu",
  "key15": "VFduYjXXDWsidxwyqZB4jFetktUPHcSUtmYPhmN5SQoujWoDidPL7YawMG3v449gurZhZpdP4HrVVML1wysKDPr",
  "key16": "4S7KxtPdHQVbATvFoPkckMXmNTiefrBA6UMAZViiuFFygVRpvvr6VbndAB58hopw4HdbZycxPas6sABaQXZrh3K8",
  "key17": "2xYRUBWp7Mgu6NbSrxikF1JWZSpSYA4NzPwNCyGosCd8973r1gQCZ79MzcehgfXAXdvD6kMBSLkAUmKtVE6QAUD5",
  "key18": "5SwbUfaJvwyoALHQnnN28YMxjqLQMsY1Cif9nw5TzswXR8JUJJqa5J5MY3NmjB2RSnCn6YBBUHEPFSCG1mvgmqzy",
  "key19": "4S1XiyJA8vJoCVYa8abUPN7pDzZyctZvcBzuyeXtFVKYbQufnuQGSjrVyvT4DjMyCVG3QBdTiRmxo7jdGBtSGJDK",
  "key20": "3D5NNy1C4dupxCMwEqqRHShM9jQiJpBbHCb529M2wV4M7Y7b6K8XhcCQWF7U69YSYwvZ1hFq5zfzXu6Usx8PBxKc",
  "key21": "5hpcFKhYzoptVH5m6cvzRaH5FRry3u87axRwsqedhUvA7WFbgpyiyp7tYhisHXySgM784FEpDP2FvmFJnfy2jMtj",
  "key22": "5ozDrD4HW7WD7pkGjFNwetCYBAhsPvUbA6q6PL1StdSjmvQ8LxzjqKTS6N4yBJowDJ4znHueGxQ3Beif4nySTuNH",
  "key23": "2CDLQrz7S3HdHQY3WU9c4ehLrF6BPzKnLes562r5238T8q48TGsaUx8wxmoFLDgLbaHnG2xZizeFajLaPZKsUp4v",
  "key24": "32c4rvhHeeNTWkvEVDhHtnLe1RNQkVyGqJrSLxxE4eiuZNmgbFaTTqAqdnQgtyM2p5vGUDPh76kFBa3adHhkLk2w",
  "key25": "2FL4C3r3yBuMnhQhGz2FUJoW2NfUhf9xgq82juC77TYMiQsSKShC2c6mFohbGQXveYQ6VfEMye73HFvPzTc2XNqD",
  "key26": "5ZFT4tz8nmnpXtTcFECcHrWCsWonqgTYCxK8BLAg4xneZBopMrJrVs1umzEovBinW5RxKPNafzXuGmAwzowR7KZL",
  "key27": "4N9eWWh3kV46xmuvLSJkTqKX8HtkxjJpwucFdZRh5BtoPYMqvTwwrE1jJTTgTyUQNGnVYUcwTfxaYHRAnshx99KC",
  "key28": "5sAdKdjmZx7gqmKxyUk7epCuGY3U7zjhC5ZXb28Lq7ZMtAn2kN4J632ZRXSFxKzhFje8q25mbk25ACXtZCCKApdW",
  "key29": "3EiWREiVXCbvRYxM2cCm7Lv1AmeTq9bqE4f2g1JpyrWt1SpHMxBC5uazsSiTwGW4x6rYxLzw7RSznz4s7gnhp9Xb"
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
