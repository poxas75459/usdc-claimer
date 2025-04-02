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
    "3HpVnoVh1Juj4ajPYz5dg3AgTgzgHYoxjiXXm5hxGFiZk4A1Rw92G6XW5e5a6qEYcekBdVvqhkLjxQbFtXVtbV1P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QnyLymtuBEEtMP1Wh8e7tmVgnqUUxRVcZF1aH4orsQVuR6v7zn9c2vt1Mr6AQwFuWFMpBtDxHtyKRqYKgAASo4m",
  "key1": "21R4C1xrkwjPnEfzuwEFhkDrFM5ygvGG7djULuCZRetH4BrmTqjNwJFhiVTQKZsRMHGU4ji8gr84Qwj2HQQUVhJr",
  "key2": "4JFdPk51D563RcZEHHMBgPmSavm5mqz3WgNieUCk2h5hXpnBvZpbFwA7M2f8kKiw1JEz9vkx2FUSh5AX1haAHWxD",
  "key3": "1pbwkJHUZehbDW3c4dRxzRLNLfuwvEBN4iavv2KmPwR5NthJhJLwZ2U8czJEF4yz2N7CxAxmWnWoDbRqgpr14F9",
  "key4": "2MLuJRFhA39YnZ1eFK1RNMSupBPfnqw2dqps56ipNNLfn52KbMnNks2f81s2rUaaDvCSWWBt7QBTnynFhKhFxB9a",
  "key5": "2Ezwd1yNPmy5M1Wi9Us9886kERfHg79PM7eC9Mn5moSaGX3R6xQ2bmDxUxZimo9Y5HEP9fyF2WBLJYUMCVNu8RUv",
  "key6": "4EiW2gXdaHtWRMcJ2d6MBwDKhVbZX1fxZuij5fuJDxkwv1aiJmTve1jsYATtH6h4N3DKLUGvwP5a7agN3VQJJpG5",
  "key7": "3GNGHmCtofCtCwUKvmVBhTLzFkXEiECGxdG1s6msdkmL5PA7vd9NCu3DXhmWNiggSdw47T4e4yyq39cnYAcB9cJS",
  "key8": "5TkUBDojH5mRRegUjkfAm6sZk4tua41azrojiUytJWquPbHaAjBYBwWvkoES8LY3D2YuXpbHZzYmyrfhcfqmZ9YW",
  "key9": "3bZ22DvWojhpABSBGAwepYUPWLLYTtAbEGBwtuCzoEYiWh5f9UbuZ8wfH3v6VgzNwjGyZ1KaoJwpNarS4SQftUqG",
  "key10": "2q62VDm2EhCUb2AeGoZ5TmQDM9zXFm6Msnxg9dETpY5khcDyEWJBwVXgMkhzRt7bVbZB8PYVrRvCWmuiAyGmffmW",
  "key11": "2d3wXiaXJ63SU5Q2RYjui1VPL22eh7sDqCcb9Q1cW68vndpHRcFUWH4MpnFJKk78DqheSzsYBt42iuzLbwncedRg",
  "key12": "5vSKKbjMff15uJomYDsy5f1vdXt82sS85XvFVF586Mq4dHko3eNxfGZbNfezxQ1E6EZTuH8i6R6DDAL2VCWU5fcC",
  "key13": "2t2YsCUE79u9kbXMQRGzfJpYH61xoBvhR6mwMqtuXtZpXUHvygb4Qh87qDgVML3dS5xkPTUuSE38hqSe3qx61hHB",
  "key14": "5Y8JEc8DuYnDPdNB4oegD5hE9o4wjMtrTqFHcgYZmwcy7ZKB4xdGnPaSkSLKZzgwroExJtTADdiCptfabdxrNjxf",
  "key15": "2L59FTeDoZ1LMnw3fUNZx6AfCov6oL8LmA5CMRdWU1ApPmUtq3ommSgEUVNhXtk4fd7jspbpYoSeDrMMbVroiFFX",
  "key16": "4ER4vsFsCF8USkZPpUMT9NzYYbCH6YC77h2qWoCtQzeFzjmuwV487HqDUtfgJ4ZVqqDmx6K7qi9jSseLQ2orG2tz",
  "key17": "4sSUrAASfibqB8dkxVKc3EE9nZy4yuGBGitaSSvuLGvxhYWD8CT1BqLHn2QuKZCPAEfy5oP6uQyCceqFwvxKLw5M",
  "key18": "5P8Nf8Pbf2qLnn3pzghc27gH43fFzGcjZ4hX98mkji5qGjoRJfBNXRj9vkpBw2CdjrPoveUWCxbEq3uBFQEiT2nK",
  "key19": "668fW5yh1tjcgjSSJR8F2MjJShxV9FvwmEAmM1EkstyJNErTadE2rmzqD8cRrP7xNWbqU7cWuFyd3xkhfDrEvcAE",
  "key20": "2PvWCVaheBU4Utkb5rrMaCHN28Kgpmf4bRxH8XnFAgugxfwFdczzubyPrErPzzd3BmGzecqGtSEeLvtGJkKS7UdH",
  "key21": "3uXYivH6Qpvwme2MnTgdWssr5QaPm7zgFzq3sTcQbc6gjRNf3quhFUGtPvGWHKJa1Pru8wv5KF9TbPjhsU6phjR3",
  "key22": "3HWWnNSWTwzmK5zkXzgSPnEyUGYrnMaDep6pQM7zTcMGcPHoYbeTdVEm2V1rJHDpAjgKpfDwoxDMs9b9ua8kJkZH",
  "key23": "TtQJmK26BKjur244noEELUhRFCGf7aYWwoEAzrWq7nygp4MhBUMKJG21BewfvGxXP3cuXvwmX9zQhQThMaHBDvL",
  "key24": "vnGjMamke9howUP2MjN9rbbeoCWYgKy3UZUjAkixePcW3NvVDYLVWnsoPZQoHJ6SVG6VRVu7iDM7UyvT8RzzNui",
  "key25": "5cQ8tXbmGQio6dxCZ1wuzo6Ss5sHsBihbyCU1nXWTzS4E9biYARiYUwiw4NXw7RGGR7J1aGDK61DCogBS2L5qPxm",
  "key26": "55UJAKKLj2gAXhUgi8Wwyv9iRmNpFMrcUCpgcjjfBJPVK4d6F7hAxQyQkcmikwzHFaGaQmSNn84Tj1weSVNkAExy"
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
