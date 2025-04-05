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
    "D8z22NoHv3QK2yjeUP4LA4XRwsvFyextg9nuCGGC2eKC2KixXk1wk11Q1Grmj2sAWzoa5QNrKqXvVbxMcRzkxV6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61xmKQsaLjcZfpeQXRqdjNLbE6aPFxaixekr9jy7UTe4tQSszCJf7EcRVjT8vsxGM3FkoSVhLNEkWaZRYPHxmCLW",
  "key1": "34WeK3YdWXiAL3SFXNsoMeB6m2f2Dgx8xqdzAjdHTGTRcewKr2xnfk2dawHwE2nqkvUu7u5DCh2a68NE4ZbJ4TjP",
  "key2": "5MZeuuuUr9oLc8ApAPz7UmhUDF1EkJtTsLuSqRG1YvkeSgGYUzJ82cMQb1XuyfaNgRG4Jh29hxQoiK2hRH21Ev14",
  "key3": "29qEaPC6e7UzTQZmeX4fQBiTyoNRr6MnbLqecxGuRqqHY3Av5wNLcCkjgELjYMbYckarN2fHEzzH7mkG3735VNp7",
  "key4": "3YkzjLCGhsv28miUcXeM7egoPj2mKT5gTyDUTzYo55RDZe2aH1mra67oZAzsom8GFzGsxXcsX7NxZfCm9hFPwsCv",
  "key5": "5shfScUgj7zAG3C5nrfhTKzj8XiGfgh64AUgKeWByGcxD4e7gpWneuy5HRgPAvxGCaS26NofywvdcxSesB9Mwgxt",
  "key6": "2GWUAc1vQSb8woXd4WfMTuYka6a3DdX1o1bRa29bcLsgax6J2x79s4zZW6ueP3J6tWrNqnZFSSnLyyiJR4jQ2X94",
  "key7": "4YCoTrTjRUNJhR2FvzNKJd4MKbbiMwDbA4WsbabuemrbxF1BKjaqm56JUQ5Q7xVahjprdWSKLxTHt4GFdGjt4mQe",
  "key8": "3idhc6ikuz3SJwZTs6usithdHTtSSHBEZeBmj8yDUxyLkWF4AQaQeB8JozyCu8vFWjcGja5oT4LWLrsy3R5z78rU",
  "key9": "GXZn4MN8jSALjYNfZTpckkRj7HMsSTCAytUBiWxgHFYZm7v2GLAt2k8rDeLgQJzXypvXqoaRSj82uqmg7DkMKRb",
  "key10": "49qVhoDHW9FT8Dh52gDRxFssQXxw9uzk8gJftMxwtqAmsSdTFE5HtwLpjEoYfMZ14bcGcrxcz7xMmPCEtjjkPJiS",
  "key11": "4ELbmRMoQ9WXjNcV4zo3hiK2xA9HPoLpRAJQ2vRZvK75zrDqYvwmpom1cWFNRj73EY9PBSFzkcukaSJ3u9ADacD8",
  "key12": "52Av9qfNs9uXfUhkkhV6mGzD1zMhYzATaq4ckGVe4dkM6fvyEmDLDYqyT4Qp1eU3udiAkheMjoZZQkJJjTwQdDTk",
  "key13": "3nkGZpnVeg8pKpVCRQZjEgfSUsRuSLg5AjhdUsn6Fo1TFyaU8B3x9sXXJjjwAmR8p2Hfj6eyX51f2F9qzgtKJTTD",
  "key14": "27p4cwAj5ynMKpXiyRZEYEh6BDfkyQvoriCC518GrZS62ox3jhdhGvP59GiKxnh1kgj9dXcz18HiHcoZRwTSRLNw",
  "key15": "RvP2uLhGEV1ZjK3ojrrZgtMEeVdjcaHuDTTUv8t8bxfzW84c52wRhyYnBk5nSjdT6wii47jyn3XqW7A6A7nN245",
  "key16": "5f4TwVsfs4gXPX8B9qL1r73Ui6yVHRwtwFjr45SJ4q88fkmTgaVeq82axouxg366a5egyRLK1PGedMYz4n5QnWt7",
  "key17": "58uyG6heRzwj9ByYBtsanV13awoerZqdMGtaxnqreLFRh59r832c9AqKcLp2WwZZVPJXV8ZhkjRHAmBgFz933Gxv",
  "key18": "3VFRX6vkGTtCwosFyiUJJUjA91B1aoLyWcZFmdM7REz53bMPtaQeSmtMZafSS9Det3N9d9nHwDrhtv1Hpi9PUypv",
  "key19": "5wcbD3LqU44BgU1sBoEYxk2RxYS5a8dRGqhFPG3MeUKVLTvuVXhn8uF4kNWE66KioaGd6ibKXo68Yep7JABzWH2f",
  "key20": "5rY3uURkSDDddKqgutCCKdUvnwNLthuComGFPyvT9x1av8q5XJHkmD5qHRx9ntvvrPswvVpE33uJ56ShiNi72hYA",
  "key21": "2RLLBZjjLfYToShFQSsApBM2zERurtdw2nTF8TAYZ9BNh5cAmcc331cbt4zWeS7rDe49Z8R6d1pBSmopnZfW6Vvf",
  "key22": "LYFneQ443wZTmggrshFRCPLzWnm2p2q8uYfr7NRK2AMwuFfxEDUX9jCx8LGT2WvR8HEyzEn4ZLFvM3qrVE2JxkB",
  "key23": "2Grt22zg7NVMwXwkfWKxNjAfTwcF8jh6xzJ8AQAgSKt3tdQH7sjf3QG27dsaQEKCoYMisVsiXMApX1kVzWG2Apfi",
  "key24": "4Ci1Qz5yLYt3Jw81YwZAR9FP7XjtXnveHK2a3U3Jtp9WGgAb4zMMRBxrUYBT56xsHRaqhzkiwnGPH6r1gDPz22Zj",
  "key25": "4Sd5ZH1QTy2XENmuPouoYbzPm5tY7tUZVSm7wAFTTM27HovLTGaDSsdzG6UBujt6cRULHaqPP9pz765k5wbeP4Y2",
  "key26": "5sdNadMFpyFcTc9WiTUvS4yPjudN4aaoWMkkc6PCNkfv88HjrTmBdrjEaBeP6Q43HD5i8jAhd5xwwNf7u9PbtFgV",
  "key27": "4jji2R38KDVCdjikdhLm1aJ5djKpZczYkVwjJskzXnrm9q2fVUhkgj8N86wRmbiNdS2uYh4s4nLiFm7vuG5UtTwL",
  "key28": "jmwXkyf8tfopZAqVnQhHbzqeMKBpk48uR1VM1qfqcmQpZEXk96CfxM3YHdKUJCn5NuzxMkwqc4tnjC4jjyK4DSs",
  "key29": "3j4TqrECN8nWAcUvGQA2fyf5HKVCvM2NJbtjQPG2MigU5QHDgFu9pj9Risx8aB47pTDZZDmcnYmjZEgMbafo8yMv",
  "key30": "chrxpTqCugEYd4W3P8wrQV9ZJygokqsb3TrecirgjyH1oR9JhAVfUg2kEi7bno3ydRLnxgz2wrAJAErQtULZRqv",
  "key31": "4RcBnPZCWgeHNfr9u62ccDvMQuaknbqco3HDN2UyVEmH3xbigALK4oRZSVTaqMqUxmBJxA52zAMxRSN26PVbU1mZ",
  "key32": "FvQQpN7g5L3oQqshokp6eKj5UzNse2s2poXLn6xGNtEs3kizmmCo729kQEej3ViK37tW9gsETwrQb4GYQaFTa3G",
  "key33": "4cmicYjE2bf5uM47VPeNeVL1nYXagVxwvXpRHgCSVrSTgPkm4gSkcf18UeJpUE7v21ii9qcuACpcEgPLFrpST9sE",
  "key34": "m6ovUaU48p59kzYieriqgXCp6Mye7jPpcDs7bhqbaYy8abqzUQ6fVLTQo5DMzy1xAMknGDgfpghoshyNsUVzW1d"
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
