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
    "45LPS7KwQkDDSTRe9nVZjfGPhwLvX1PFvr5Lu6jemiSemHVtc8EoCVvCDFpzvioULRqVjgoh32KnAsXT95sYFqNH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kjRoW1oECi9EEag5YBWsPuMMgovgQTXRN4ed6chtfgqhvU8LtuNsTFvzKsjwQGPiMUDnXNHDxtx22DKoi1P2uVN",
  "key1": "4u555mQkUv8fBfcrh7omUDvYjdqpBdRoaVNffE6uDdhxDqvLSmfHizrnRL3eczJ8qyY22r3qkY34rkCgipVNq9uU",
  "key2": "5Q2jaX4MhAy6JrHJMTi864YbRW5McJgXTWNxeLMvLeDibvpg9LZjC1QGCRis2qjz4T1159oG2RGjP9e9iRMBrNzQ",
  "key3": "4VxQwACMLFzPN78FLfVtVniuZUq7aLCp1vaWY6cFneAA5BQBftgUg2rGUyq1BCuYKQPNBXXGnB2Dt8YULo1zw16S",
  "key4": "3maYLciyJ1MMoDjUvB3Ac298QKjAYcpfSDGGnxbc4Ev4TSyNMTeS44AYwz1MAJgdeDSLREFWAwFuXVi15LAKwv6g",
  "key5": "Phgw9JwcmnEcmoYY8wQZNrCJGswkZk56yxDzi1dkr6wQfgDE3zDc8hWjTPFJEJE1s7vkjC9b1kgTThtS7waX7EQ",
  "key6": "Qw6CkVTzgQK5J8s2a38BDvt7wRzKXX9G61Lo4aacoZt7Y1WCuy4rctTAqZJe5EtpbPkAcKeJxD1LKBLhtS33STX",
  "key7": "33YEF8beJtxbTvWvXpzVLa6bJH1D4YsCqr4FS3Wa2TCpYFszDH6JyLz5pABxVQaucdok8HV9gkWd5GbG4NVuGNLa",
  "key8": "3XU2NXUGV9imQ7m5xYoVdTA5BeXm45iarQCZkzTHTd2DXBKinmmKtUfQTNM6HpvcNRnRUV9HBzJcpJULNj2cLugs",
  "key9": "5CBXH1ythCZrhxWZbBn92ZyMFobJYXq9na78PtypwzB1tY6uTVoBMrhj7JGe5bBrAvkyLMbsD7184JXw2vCGeNaH",
  "key10": "yn5rGnhreT3QnLCeRkFnXvrgs3M6RpRHPvz6QEEZDyieEJvRvxCVnb8aMwrz7H1zYMxVMvL1mCY1KRFtftUWijQ",
  "key11": "3hhQxvLY4RtxmAXmmKCQnvNT9c5qdAQqRAWqVrmajBJsSTzwJN6MpGCzd3Qujo5g5btX4ZGdDRi2ECsu3etBhfzF",
  "key12": "3w6XR3drfZFQ7RmTWCxq44AP3TnhbBRmiJDHED3Ff2RBqBH9CXeFFnvvnr1HXA1qbiccX5GCbPGgRqLjKM6bmKvV",
  "key13": "YVoGu8tGXLNdvUhLpoW6BNB9Py6MZiNftSqNEia8fNf4zpS73S7rSZCXeQkaN2Le1EEhNpgZnHvpnWXTEy8CF5f",
  "key14": "4qJLBjXfzgNeSnT7kRfnQHa5BJ4QBUwtWqRke4N4xRbXVi4uT4bJGviCcV8QJXRtSKX9QeZhgQXuCPTbr4Pnxbyw",
  "key15": "5vm5hAVwtvJfKh3Cjq4dpC7yB8YGutr7jD6Yqx1xHXaoearaWYB7X6YgWqta57xaTwki4ve8VkYoKkWjsqwmkCKt",
  "key16": "LPFXrz7evQorr3aCWtUzZ2ShGDRD5GgaQyfwMhaKHR7Cs97meDSjgGPHAQyZAFXSrGrCQ7mi3W2iNNQbWLookCw",
  "key17": "4LsabG1bTWLDv3U2czsGsenHCHAKoxQYngSRddwJKAq9ynp7r5zEbekKrXZG2sSTVQfwVKw5TvpqVPSHzpkEyYp2",
  "key18": "2BvXz3LwXFM4THvvd9HUaYqp9kZzL8d6khFsCtC7o5PNSsog7ae279B8vn8uXgvDS5NADTwUZwUqLQd8i7kX3k6Y",
  "key19": "boeRsGYNM1sQNcWqrvZgR18iCaEZEv98umGV2FEHkigZ6myhZ4SeraZXkEKJBT9kYmzKzGTdLSx6Fe3Aeh2DHPp",
  "key20": "5TV8S28wjtxGrSuzwj7rdeCWgXGfQBh7KzZMaf2EqZ9Ua8JvtW1ciZ7NDFLk4c95TRfw62SC6sCNtxGbkJNjQQJ2",
  "key21": "2rE5Cn2JKh7FFc3XGXbLHvXZ7SJH8hSQoeWru4A96on5otsgMUQR4QtUBsR7Gq7GNMVq5BaTxCLH1AGEbTS8pWoF",
  "key22": "3zKMpNvaG86bWQj7zocqLrFucFFdqTVZDYTxEjMKVDoyDaWJr1wmcUzNYsWrDnebu4P9HTqc5tDhqmY7ruGF6Ebm",
  "key23": "4DwKfxqJUvsAZemHNR9knHxDkyuB6MPNBhoPjRF2y5VvMmjwBo3Fd2PyE6bzmGdJbvAuiN6HjFBKyHGPyzgkTwi8",
  "key24": "2a3QyiHob6zrddKKTcd7fo81tz5v6howNGUWm1gBjsRKJR3ceduGTknn69jNp1Y2S6RQ64X7AjTWsavoBEZnKXfS",
  "key25": "3u9a4k4cgs7P76pgmqy3FMJ9HRxvYb6s3Ji22ttzEwvoz4rp2Q6gMN8q9FL8QU1tFvAKEBjGfp3a3hHnvG11J7UH",
  "key26": "22Bti9MG4XL9ptRZgjwsn78c2PBa4dHCU5fJkSqAXb7jBRHEhF75nXuvkQEs7f63EyAvKYoSr6iyjDvDtniBhbF3",
  "key27": "5Y46jser1rMwZJ72Jt6qh3dL7K7bnB1C9YQ5axZnkkuAXYUmSXY2Epftqj7GeKojb6Xp6wqyHoBSEx8MeX9KXfMV",
  "key28": "3tjrVLK3a7oMkTRSN9PTzhUKhkLRLKwMZchTJAMXntK3LsFjF3DHoLWPpcJZRejZMj5mTsWsrAa2teNJwmvs4Lvm",
  "key29": "5JamaexUx1mnY9rRBKaJGfegHHjwfzi8zMUntDGm63JnAfoDYSXPU3sDdjLLQ1MxXS4RmQfNEGCBNBKMoQf14FJE",
  "key30": "2ZzSVMN2FV9brz1oKkNkS3jEdDPVgf6ruh1uQyP7156hjJaVGEL2HRxy4D4TB38NkzcaDpwGPS3H8ZNbve6fBEhv",
  "key31": "uyTotDAfngtBWxZEL99FdM7EmAn2hLY1eV3tsNaZKDVQAxHax6iJ5a4zapPyQFv618MCwR47VW4nQKoPUtsyzUV",
  "key32": "XZz2LbEcxLwmdArJ1dERoLqztK37xrgzBNPuS7ePij3wy4MKJ5Z8GCqo99vigKcE7R3G7VfpMURJUCfvEpmGAfz",
  "key33": "3d348q5Ekz1fvgdQt998WBvXQVRJCQLY9gXE8X7PdfT61rkj9fxjynf6D9eGkz4RJzsfomrwcwUVv59KtB57im7a",
  "key34": "5W7H6YzRF6Bct8tju3KAL7v3GGdYnva99RuyB9NG8mCEfNv7eLFS9Ns7eNoR9eN4W4isjsCGrDcWMC1cX5SGnwLd",
  "key35": "4MwZRmVHj2hGYwbPy56TDTxoGgk74Hec6V8krsKL8AUwYUfAyznFQLSVUy7X94vLrXqVaCp2K8B4qYjAtj4H9FHb",
  "key36": "3CaZhPBZXGvJUfnxSbDbmBvDpZ9kQNgkj12YmqvXL7Eckno418fmMBh9bTebwymGMibziuHEA11MTJzDt5RCRCdW",
  "key37": "2ddZL4uTCVoCGptbizDcRuNZ4e5aVaWNEJLR16VxbHh1go9P3UfCtYqLho8uq1hUACoaMEnaAxpwyWnN3HDUWUJv",
  "key38": "5k6942U8gYjQLNcvDnLNPXssZGno4qV39iMnwQHKjoBAvL6qzM4BmsnZh13m5KX3RJ538mnFkgdLRikLagLz1WM7",
  "key39": "3pga3hFNH5kp8kXMthxShGbrPE4WcubsecBovG3X7usuVF2WXWLhZqNppxVSwftGtLffWjk5egJSQR82MUM4934F",
  "key40": "32mfMXirAkdDgqMjCyrrzUdPZ7nTRQMxqPoHBbvQv6xG2RHoMsnGNkof4AFRABicov8xMPtSj77GmC7sc6CFfUmQ",
  "key41": "4E6z6dqjXvastGX8jLkQMxm1jJwr8AnDka2JYkqP8Ri56HY7LxjoUK2Gp9Nz72hsWSUQRwiBYVgNF3L7TBbzrPnZ",
  "key42": "5pBAoW5T85gSBg4cFbCwN8PkktLp7j7jH2a9H6zwid333PAjEUJ3mkSLLJiPLUPVPxT1hafXBwnmr5oACjDerqjC",
  "key43": "4aptWWGbZ2htvyeYKH7wkuUxR1Na9JK7J6SmrwffZALdUmNH5uaYi5vnWwXBubYzZL69hb7GUujt9ZbQ98uqc8L5",
  "key44": "5BxbZDYzygrTnq1cqGgYWf36b4FoA4vwahjBK5Y4jPbKgYGGg6r3kfyxiwuQMXC8n1DCkaBvMJ6Fx7Has1sU6Rre"
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
