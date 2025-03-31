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
    "5QYiVtLUDh14bDXNq7gYhBxMAnw8wbFpCj1vswz6AhmxYYFzyoJTccS8EoCugD92wBr6a4ZNLTLqXA7QCpMJ3gpj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ubeaaBvR4zAxJNiCLCzrY4ZqM3ZMxLoTFb8kFqZYpAcwcjZFCS9z553iVsvAkNyC8WYdKJ3S5uB1zEMNCvjGCST",
  "key1": "ma27HB1G9XRAEZ5bKKju2PeZEURpiSE4tjFGHyxMxdDZGK3f5ZHf6kh1VVnbdVhEiKjrTrzBbtn9BDinChWEBxc",
  "key2": "3pdTwjCmtRbN8a41R8DLKJMyuUaARz9sPh39FXEBN9sK3mYu62YtjBnY6kamULHfj6TJbi2kGzGWWMV1rxTCHMYt",
  "key3": "5ii8n3e5roDBPdbK2s24nE129qpQFt9WEc7NQj8FXmXbYSVQ6G4wpmDnRM9SqJazy6ioZJmqQK2mU8m7KAi4KVfL",
  "key4": "5CQ2ApTQDWnsBn6j22qg7ZYuNb9WJ9Yn8U6DVXLbgQw4LRiTKm52vb9LgbZk3HVakhgQ5hcW4qqtERAzMEdLucJf",
  "key5": "vi9qEpYLwpVKq3R5hCsXhJri31LPVC26Dbuv9fDrXCtZYj2SXHD2MbsM21eftN1ceN4pdT8WTM7ncJ7MakpEoLN",
  "key6": "5GFSo55pYSm4S16A8SV3qYTYRHqBWwRRWMeGADr6R49y6SkvCyYkArixuNndrtULSGm9vXWLdUwFsaeFnbWZjP5s",
  "key7": "KXMixKhyo8Vs7GNnPavcb1yoS7svrsfpHD7SC35DjVHwFsnZK71dseHnLoj7pwujfwxUGkvxmtpjb6U2vGrfc8z",
  "key8": "YEy3V7koL9YBysD7teSJgHdLRjuP8zxoAnh2YKrR9fJryYakHMTJQFTDtyaY8XwzX92wvD6nnXurz8fH46Sw61w",
  "key9": "3cNFNmRtoXYpWBf5kRUwRukeNe9yX1ZPP2nSwqTfdgU1TWmAxB4NHPTF1RZCpJ78AFRQL7sg52e6d7j9R8r4JgM8",
  "key10": "5YgrtCUg6m22HTY7QF4eL8zny2pjSQfprfqL5mucMZWtTA6n6hkRNjV7pDSBZ4coibzsfKZTnEVMSBek57vTFkQb",
  "key11": "5Yrk43sQxJNVEbh77Th5tdBk1TRCPPYiqWDJZtTzt6bnnbZ6wm7FHz84MxZJZ5C32pN2gpFKkBjXz74pP5WuTgbm",
  "key12": "4vUcoRyGvzyGGjbG8wA2VUAGoxdApZGxtc7RBYvzfv6EtfNJRYenMKbXkANBGFbwn5avfibAi1HQPB8CL3krUGc2",
  "key13": "3K7qQjX2kAEZsLL3WVzenrspicMc1qE6BWSJ1VNEZDyu2KdmV45YdWCFLsxJH4GqkJWaFNQ3kzgf5Fn2d7d1Knmd",
  "key14": "42VuxwHQFJKSQR9Bp5vm4vNuVxBGXAqBSS4T2n8j2uXo2fDLCvPwRNFtXsQcUa9FjUGjyienZjVpZNNFpNhAMrDY",
  "key15": "3ygciqPRWjdwawNHKtZVkZgMwi4uEdVAHzKFhVR9hjSy7BDPjukfXeDdZzBWQDSBTeC6zCKxf6cdgj1wvDsdyesQ",
  "key16": "4MT35eJYcyuWKktdaoX7GJXB6UUjRwWxf5Nt3JYBbk5yXtSwGmGPwz4kQ9RJ9K5RYzgfpwwTTsfMLoTkSZdGvyA1",
  "key17": "46n64XTPpqRVejBnzSDBjhi1Ehgb7BFA3ZkcASRkf9qAimiKnVgVtgCGEu9hhKCpmLSa4sqMYdr7Qcdgzc34zo5m",
  "key18": "2ma8teG15ynhkuUmLtuPsjWndbXUz4hLr3vAnqn1GCwNwe9dQuZ5ABaWPEzR6Jp4xS9hXTfHk9rYC9gZ67LzhHJx",
  "key19": "3J8RmsuSCdXcBzZ7pR3hN4XcaEubM7xhcEAey7H9Au51cm9FNa3L9g6zrrjD5w7ZGBQ79gcuQPSsaZkjTgMP4Wc3",
  "key20": "wKP71ABJ78eqPJbBH1U7SuEejawo4FLc3LbpjWaYuKRGKFDM9NsEnDGJjEB87pCPnwh5PcPHPTQkZjBE7TPD5Xe",
  "key21": "3xcTYPQ9dq5gDuYqeddooteRmRjJvDRGbXtmXwhGq4yE6UpK9xzPj4u1pK4Vdfcjvb1V3U7eFKM5LBUtCK8RbMs9",
  "key22": "4ATS6MBxRKQfC2xCNnNQy8psn8z5CnbCQrq24qc3jiYuVeWKfM4wUsmEN7VvjED7ZdTo7LEEnzGVceUWN995b6BL",
  "key23": "4gtRtA3NiyW4FYtSVWDDvwLpaxvAt4WRJb44BiCPWSj87LBrrL38HZhosYbzppzrGLy9Tff1VB7LesCMB4TwxB87",
  "key24": "29dhwuNsFbBTp9D8gZDTNJZytPto3T2iKRm6CSA3fNuWMixdFq7hY4EbuZnvuLG13FaiK52sSWR4xmZmvz4DVpwC",
  "key25": "3s668CU3bHoKFKGxk7Rmcnha7WrQLjmp5sKS33Em8XQPGaKqq94AmyR8UNCDbMkaAiMeTC6GPcQrHcxVkgUmBW4c",
  "key26": "Tofu6Pqv2gJ5BC1mJWrpF8FiZ8yHzv4JRAJRZiQwRjFkTECpgQP3dCGFVL7c9CYa1KAXe4qCivYVdppQLB3iJpZ",
  "key27": "2e7Xxsc3xmGuEvDZhwDKX9ETvg8rmD3GHQ3jtXvYE57aHMUtxnymGhppaUGdw4SVvrb1AGfa17U8RMfXH6S93YG6",
  "key28": "3LPPjfV8V5rzWR5TC6yPyXEGJ7BXkYB7W6v94rqCRiMBayWGWuQD8MNua7swuhRMoaBKiRyxokfzB5DMhUUj767U",
  "key29": "2ueL1DbGC3m7S1pQ4N3cPghbsutm8ygx5M6cGCNdUEyZCVeByQu7BiWrkw6LKsfghbMSfZWKd3nNSwJTb2QYBYMD",
  "key30": "38RxqCNyzJvedt58kzSaY8GAzReCyBA8km4et9zp8i65XXXkjFQdUDhLGRQtGqYP1CnxnDqaizDTt3pLVK7HFC8o",
  "key31": "5tdqwjmFmdUnN7aUKwjH7sBs5ymrPHYd5jJpyVRqzNQae6UnxGqhE6zFJvibdTi6MEWqRmg6ziu7XfLxQ33hDeZo",
  "key32": "2ZULt3niybSA7PEbsG373NcpRSiP1S4dy7qcgw9f26eLfftbEX79TXTCAxA9NjeTrNrvhoY66G6oWSvMNqhLFMKs",
  "key33": "5PS6MiWpBUNzVaKeNfQKaa68ib24LpuGxuTkHJER97QJkxeQdruhAUzX343JUY6gdhiicZZGCtNYzGuL6GMWReXy",
  "key34": "54BafYmYAWvmiBLSnXyRp4p2LZFHeodhhkUno1CSNhwe12yiYvaLRQrYgVMC7dr35Hf5V3BcFfmSvw6yJiYwvZj5",
  "key35": "5eUX8MKQLJgPQmfjtXnnSVCWk2qoXxU6oHVwkcFY3ARXvggnqy8zwHzAxKrwy3LptdqRK27R8nnk7LddgRVuRZ7f",
  "key36": "2sKypVbqzZ32pK8FnHieuYRWXfKvzbDH5FY8ZJhfjEmB2Co9ugX1LupxGHosqyMv8BvnB1VctbQdZE2dsBfFP7nP",
  "key37": "RJYCMzY6qJ3UeM6qivbt5WWPYnXsWdHcYcKHjDgTSXCb31fCZnTnBukLWSimChDX3T713eawivCKHQ3ioXMeooc",
  "key38": "3hpGMTpg1CrfP31kHNv9pCtWt1aexPsYKZfsiqj1GXrqTNofF3fw6b5vNMMkQ7bdY4cRyrForm31p5h7Cg2pxX4i",
  "key39": "2KmWdHq8sJokUYK8C5Mk6fesMVQy3EjCAKS8ZYMbY2JZ46kHZYGd4Lz9xvqGTLDyxPznMZrgyukcYuB5HCge2fqz",
  "key40": "5JdPprofJ5cFJByencTj7SR2QttgzETDwM5FykutrRQtfpHzd2q4HFa2fYyr8VUCJAHZBHzq5sbHm7WGiX1qBJ1C",
  "key41": "61Zoih85FArAVgkQTTZRE7iqaiojbyQXjL1PvWuA7ioSQwhRgfDtMcm6VbWszybbKdEe3AFZ3yqT8cE7ZwzQicZo",
  "key42": "38uZgiwtkfo4YzUv3RiBC6HHiVQYKK2h9LJGv66PhFNZQNip4NhcpPKkxe4YAR7RSKyRzNZU3DKWZmRdpHq7rBuw",
  "key43": "5meKwvRsgoDY2PNcLhJFtybwDLXGjfLA54miF4RZJMKmTWBXZ9epy9hYxH5Qk88BYk1EQC8nRwdbUChLmbZrFYTS",
  "key44": "2qEVD1q9Yo8osptv7ZTbX1QiLSx57jAo69mzHfWWKwr1EYVky2NAWt2HnZHvm4UWZn525wsfpehVJ1X2p5nEuWLP"
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
