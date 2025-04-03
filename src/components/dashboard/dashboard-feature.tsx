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
    "PFKKBarUuiXYHjznqytm338sswKXvZQYF6BdQypXJiXfH9owaiHxyVtfyHmbp2aDxV7uwFq2Red4KcZ8DsjRKpd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64ygRcjP2kDckE1GcHHHyo7TXAPnVcmwWudYmG7xDY6wyRVE1SByGqdr5xJUqyQSLzsJ1YJj2LwSn6qU7C7qypAc",
  "key1": "4wyBtvSP5BHqCHtEB2WAvhm8L9ymCgzKLeKMgUTHc8AkHgWJH8Mi2hxyWPRaN1Z2SbHq15mRXLsngKgis4HUS6mU",
  "key2": "634re1eBvENbmX6oUgGtQmTyt2Q4z54k8ejiH7sYt7Sj6kKcShUKct4YmtZcdxY8stoP8N3Wcz88uQbKsBCEVD8W",
  "key3": "6Mzve8vPqN1fzxh42TfQCJJbvxtnuvbasvQUoBZSvLJfzvvsMsGwM3jqK4i7wYECLHMLKCpLokjLLmRE8sov74r",
  "key4": "7AtkwbshGSRJAcjoHLP121cwdmA25D9FdTXApxt9a96KD2HZgPKCMxzjBdA3NrUcucAaWH97G5o7WdAfoMCpUMp",
  "key5": "3Ru96ZbLCZbg3v7AgzYbwFMjHYuBqxVFVkEsLPPEDGEqtKRfRG15hwmH2usncEKL1eoLEAic5V3CBXqHxuC4SRTN",
  "key6": "2AhYg3vYN24T5nbw4zoSMnZvwPhLNTBfvUZBCJk7VrPQekCL1UC6TXGbfjSNJ5wTzyEQyXvdJcwRUzzhsEL3ojY1",
  "key7": "2vpfL5rpKPAYFSGUyZavKFz5mZYd3zb8EA72U3TRNJPUGiVH234WgvAGosY9w3NzL2k7ThFkbwmvhP11BsHeQ3yN",
  "key8": "4CMdmfjikiUXKgSaMTYpG8oJR8p4Uvh5S1vyHaqZb8a3scaJGQvQus2kAb8vfVxBiRjTQymeeAGKXYoW3LTJLdY2",
  "key9": "4XQ4b8SV4D5yhc3j8e96D1CH16TSn4BV491RNwiBcavJ2M94MzhktqGDFugWzRSx9Y16DCgC2JPFnUCWb54J9Xy2",
  "key10": "3wNpWYS7jH8wQjjHQgwutWnaiKc1Ejrf6DBs5NWqDS2sU9hbQYF5DTfUJEJThoWXeacm7TS6VbAzUZasCKjR9G41",
  "key11": "DCW2GrUCzwiMzsrKDwyhsdutwiTG2qZfXb8uP3iXQaUTWbsfEdrdihkWeR93DrDb9vfpUTQfBz3wYuma4VxQxan",
  "key12": "3q64eDbvtytVmfcEuR1BEujfMrEy42MnmrFzGR8qLcyC8EnfHhKKiwDypDiQxdm7JVyKzwXV23PYqkvJFK8qfdCZ",
  "key13": "5fAkEDoS3QZnkquEaaPqT2s2ibdVikSDzMyDkYiUG7Lh2wfQ8MfvPVJr4Xp8duCuzwP9xsMSHtbuABm8TFN8bu72",
  "key14": "2tXzCNQwdEYn4zTSc3UWygpJLYBBRrC8VzANtvJiy44gVfa2zqsMNjmc6A5tVBWzJT7FQTchWijKUNzXTf6TMTLA",
  "key15": "6d63jkyYvwgMGKVZ6DH1xv341FMmqt6osyRec1E5ATih2tccbX8DeKmNjmgEmMnrC894LVU2ZrrShrPWxYCYZQs",
  "key16": "5iLUVX2iKfaSNJamrM4dQu9QyRYxvMqTvpVhyCuWDooo2L4npyigfwekHpvec376bv3TuQDYU66C6mwK1VbNuH81",
  "key17": "inLEnfG8vkgAUxKmuFycVpGy4JVCBFGFGip7uWBDJfAhBNNpR5FMhB9PJVpMbjigyY6DLy7GuGtsxRSNRz4BJkB",
  "key18": "2L8MfxU2584GCinaB2m4f9Tx1Z84raEoj4c8NiGkcD8uT4kyLXh6eB2ZhHGiVNgXJbghYTHUrRguTapncioRujBf",
  "key19": "4KsWrD67RsYKQtKXcCsi1JXgkGRYYWQN691e1kQQZoyam5zYcwoQEFxQYxbam1jb7gTSLmzRjUjxhYaibmEo8AK7",
  "key20": "4sufWjeuAVzJtJi7pUaT9bk28AEYNoUtMM4WpqLanyRf29bdVr9NusDVjgAVr9eQ6WZ1hu3jV9wD6knCrW7JmeJi",
  "key21": "3RgnjUmCpckVCtaixEpcMi5bkjajo5KG3jE6Kdi1kxq8dSip91W2vCWDcTG2BmxKvDMAWSUidggdLrJ8ayEGTaPE",
  "key22": "494xwwM5BeZgBApfiikwegmP6CMVn6eq2HcCfmEpjCVs7V9nesSVT7F9DP1e3vKyaPJJdxqBy121b7px78dj8QGk",
  "key23": "2nib3NAh9tAzEdRLbw4HEYygb6dNHd9wMzDU29ScH8eMFynvZY5aB3YjyufdDZtC1L5aCvVxicYvf3XQ4V4hPnXx",
  "key24": "5MBNecxkcuC5ytjHDXxmp6E1rqGymTxYJsvFCugcWsMMMxZRSSUJY8VvLHsMnFBqGVa4X7YFSpKQq7zM3SZV6RTp",
  "key25": "3VrQtnyMFBfsXgcBdBd8qQQyhuaBh2w1qF3VaJAGucrgvLqrBbzjCeQpVutz7uvQ69Awp3oRstiafzh5VRU8Zi9K",
  "key26": "UWQLa77KvwgZS32fLurybcg3UXL9GauBeZeffbGZEwKTRe7b7nxtBxrRttiitDkdEpxhDHxXfaBPZckvtkwqS13"
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
