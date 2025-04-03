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
    "5gfru72Ynt5dcNMN1S6VRSeMDPyEoHEmGzVnyPtSa2jmX54GHvuH6w95zsyqK8TZMxtnpxVX4ZGYqki33Xhn5ABF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uL7j9dcTghRXCV6uMYZDVPDbfn4GqfHZ3RQssZa7tcipw5onGaBxniuYVFX9SJ3aLFk8XjXgNFGDGchqaB1N4Dh",
  "key1": "4KQ2RoBzG8y1Lf7wfL5J5QF4KzJk494FnHWYjDriWb63qrPm18ARoTGsGGVhtQWkaedRhE63TU6PA6gcu9eG9Gdy",
  "key2": "5oRiKAVQcNdFDiVA9Dud72cPnJ5FvT3ofbLDEj1bidHsmVgWEwddoYaLGJdGxEieoXrKVL98g7puRCM1ZHqqyF8v",
  "key3": "s9C3zsimfpuo5WJKXiqEJXkEyaxwbL9CPxNAQiy6Nxy44u7m5TNarexcM2ubwGfvtYZseobKQNSwb2d9WFQyVnz",
  "key4": "3Zcfe9wm2gZhqmATshjfTwSkEVS9jyFai6VHThfCjxUAmKkbVrC3TfrCiMNfmxLb8UQPwJW9S2HYJBospFh8o1Xk",
  "key5": "3KpJa5DtoJikTLJBvnNapdHbdLV4N5EXbP7VGBunaSx4R3pA9yPS4a3BugwxddcPntRuQQCLPRfno9kc4HLSpNwg",
  "key6": "5PmN8YXHKwQbfkSXX9NFyZkdSiQNRD6dpehfX93PTUt2usvUpk6M4JSTqgB6LP1RtFPCi7JB4zSRLxFzUtFT7th7",
  "key7": "yLhrjhpbsjC1CJzEoJ56CQwHo3UZ2bMPhEnV9C4xmgrtek7oTwULWqrs2L8GSztNrMWpgAX4N71Lgnc2C8uxPJS",
  "key8": "3y8TPZQkA6Pntp6Cyrn7hEUhdrjPtrm8zZHVCwyLnsUTuwQ7bNEQedDeWZ4d4FUEpUJVbPGqLRLtpjYd7Uwyw4AE",
  "key9": "WpZRXh1ZeYCKpStbJ3Gh1ZkX8yUXR7GN76BeJGMQo4NsC1oZz1xnLwnjjFscD59fLArUTmPxemwPK22iunTddTX",
  "key10": "54GyH6pp21KekhsHvMHgatEV118A33JHvrQkdWY1KJVzR2jXM5a7RATHHGSnaWQzqiLfzg4Sxc3vefFBHxpyHisJ",
  "key11": "5N8QCyJX7Cr7wtRY3ku7NzPDjdPnFYg6b2zgiJZsw9zGLRAKP5SQ3KfU6G1qvoueKCFdjsdNYyy8tYBLjvk8yLwE",
  "key12": "2CGihZ8xkeeGiztrsi6a1RrGBCKsVCZBpPti45DJSHNJp1BUV4nW79SvFQxDRWKqWakeR6Twmo6ej4W5hivVy3pk",
  "key13": "oe6zkJyetoUxUNf6gGvZmXupTHD5Bi8kp1KWAwexGGxwN8rUgNJBzdw79Sm6HjUAfayiKDZY71Cs9K6HnC6q7mz",
  "key14": "5jDdoSSyeEb9JbzLxrBgn95K7fSYjqoZ1A4x9ueV2kQwEXfqsMYVfN4Be4cPoAq5XDBMDeJWxd6Ry1rca42cYGsh",
  "key15": "VvdPU3kbcN9ZSHurjzecgFFNTkGCUfTWM5WfLLBL8gV5EvzhCjyAXeepN1qfxjn8D95j5i3eJckKX8wp4zi4LWM",
  "key16": "37bqnuiGWkq6e6nLL93JZBgpgVbuByAqynxyPSgRR8kLZc31o7htCFF43GGnNZRAzsoMfZSqUQRxez3SWLcXMcPz",
  "key17": "3bqpxGKaFgZEapbKhrB3zdfBR8hYXquCoJU2ijNkZDDxzAsdwcgQmwUxinLQnN5R2676PF14auPz2gZJRSbH6tYp",
  "key18": "pJe7QPzuyFoNc11naq5ySNd5dr1u52qSbg2Kd9e8MmvqHyYnHv8nXbw8NkrKnFkB2xxXh3x5UaE5QW94KvSMtHE",
  "key19": "4A86jG9xeCaA51gARMLLqaV9M7JAZuHZio5Wt6Q3PRfbAKuwasrZGKqkfTPQDRpM9g4PuZ7Nv7wetKFH8fwYgs1k",
  "key20": "3upD1XwP5ksy1UzvK3tfCsQFBzz8xy3GrWzQzVQPj7w94NpueNsF53fXK3VdEDM3zQa4GVKzm6Rs9VHY68aeHaWG",
  "key21": "53hi8i7nGhmvf6sbAeToftiq2QeJaKRwiSG6EhMNtP8zGwbD2XxZhmmgcX1TvYuZYgY4fq6afqnb8KTvNtbNRDmD",
  "key22": "3PrSgGJPi5vAvRoqEzR2Wh7MZqbMNMZPZQLtGrnTjLs6g8U7tunm1PkwFb47XfaLVobzfPxF4oWYv3PXqpg4FqfQ",
  "key23": "4Gw87AKF1fDve4P5bmU39qdgaN86EEJPSzGNygfvsJoY5i1vgJKA6wxB6Ap3bXqRtr3dw8sWBvYFSj2WnnN4LQyQ",
  "key24": "3WNykGcPmJ6Usci4pcjUp9ze7UG3xnoEkjak3PkEDpHi7yrDLxZZb95Bw8J4DTRRu3W1qHRTgKaAkB6DHdLUQLn1",
  "key25": "52qE378ZBUchqgMbyFcGNAYt3FWHG2XvdJVNvLuqe7DizwzSj1uiJYQqLRnMt8PrcF4k7E1z5Ywf36QC6BS4APBT"
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
