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
    "4NyKx4TU8kz4p3hbLtyo8tcbav7whBMkprJfAYmRYJomxhVuPtJ52CWh5VZfeCPC5qocJnXjQmrGtCTK3e797Wt4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43mZmiFVvjQgFfjDdNQvhqw9MdTQhXCkNTquw3sTJ6aoZc4KahMW5LPXAmfgjyKCBQiXFoTk167WExu9bwpue1H1",
  "key1": "2P11uPAM44TxQNaPDJQTVMhpggGQkDks5uSEg6pfRctEjwMWPBiSG2qtT4xPWa6QwTu52PhPv49s61sPwfyadbxN",
  "key2": "3o3j7AxQVz5vZFeL8TxUstxK3hmqocNb7ZLo9torJdvNZ4NQmaEBnSYDUmuc36SS77BNKNhzHhFTXeuWiMrRzohw",
  "key3": "3SkkAqEjknNLzdf49eRmidPt9S8BWTaFgrUiEj6PJkMMPKHRsAXzKERf34e4H9Gfp79ZKHsfUSZLMQB9yBSpD74o",
  "key4": "3GzRz3DPUMLZfNjqFUAPsrwL8bkrbdKjowNXohiRyxixqB42hkB7jKf5YCejNtjK2UHCfdzNxhtgSwnuipxqEXY3",
  "key5": "3gGENGVUetsTqeV85w3RiszGvn1vn8dSNj9RC7296YadPXXLmGUqNSKFQoJkv9chzXTUu9uAHBUZe5vpqukTJn1A",
  "key6": "2RHUVn5hrGQMfz5HkzwSKLRHKBpfNRdXj84WZtQmueF2bzQvNsoeveYebkzWB7Prq1WqNij3w8LyX2GzMfzcpfme",
  "key7": "4xDT8e13tDHavSDTwBGnGD7x4BmitBV9tqCtHDkUKDi4VHvVprNgJHaMhGNGDxfRU4PAjgnE25TMeWZNQc7Pxgd9",
  "key8": "3rxYvrQbMtpFnxAfWAzRXishtBxSnr8HdHAyDWi53hQP8wDQmoVtrPTCBacp5ZATmtgyBfSV8ZLmB1VQn9XSHZ97",
  "key9": "HNuoSvJwypvCYSjuFQ4KUkiRe1NP676a6KEd2yaiyTmqdTRvcNCgJmf3FYTZrfNp2iJT2rnoBFDV6m7xttwPRfX",
  "key10": "63sdtGFFvZQMzGXGyrJJ8A4z3V9YxhbfFJ3Hy5o6GyH8GKYG39MYBeSsBYrmet2KdT9imosGejqDQ1MX3GTDSK8f",
  "key11": "3WC6hj2zKkB7pjU4pmMQmepcNGwPCzvpNjTAaBL6wUnDaipKqZhKWwH3rMn2zznZB3w3obGxg6KudkZNkf6AsDkN",
  "key12": "2WBfn1mbj5Fnc88vTkimQJ1RDSNuEkkNsXFyKvNRu6BFXxe4ZyYXbUg9Y5CV6sikETUVxP9Lpn5Ky9w1EoYXjvTb",
  "key13": "2CWgc6yABjL2fXtM9jgHZDZHkDovXayog9Rb3WRZAnMKRQxSevtnQCGwCh4ZnJWYPM1SgfkPwZNfwG8rueUCij8",
  "key14": "5iZsqXoRogY5hXGEmcM5HDX32oYe1uGJKoN3fQmveXLEdSNjnq9ai4NbQwd6JnRMcAfLx6YN6uGiJyAwX94M9BMe",
  "key15": "3fcpFpdczeK8HYxXRUnfHv1PzgGnt22J6eo66mVAzbzW8mRTXFX9zGTLFsJvBWsNLSCTLv87zkcrPyVpo9fje8fu",
  "key16": "4NA3ykkc26ksLwgKa1BnwbVW3p6XGXJLrkdhMSMwK8f7exGthkJjUNoLaviadU1MTaizWLWznHgGKp8Nbwfw4JJe",
  "key17": "4WH7t7VjkYukDV7WxcoNSfmi5KYwt3ystCB4MnR5DMmuo4EKYuqJrc8JmmdWZS5TKhzjSVPPZjawwQs4BoagNTfC",
  "key18": "2HSrkXqtnQe2RXTm4rBbh5H5cyrbDMPSV5MWTUyYmFG3eHsKMrcqT2V8uVwkHMaTG1ob8DcfeMKT9HZXBZnmXsje",
  "key19": "GLd73CL67J3SAUbgLESt8ucS3R5vM5vrn1ESWePrjagdRU3oZYsK3ttGYadaJ56dww1DahXM5u8zqDU49W4NPoz",
  "key20": "2bcjfh7mrdSP8avFsMxo6Mx487gJ4VMUJGC7w7vHL76ZtJqMEiyn932s1QBXgqX6FhGHmSQ9HQg3wHB3KZzps74g",
  "key21": "4do8hBviDGXbxzKMkyQzpdBCHVkx9DZyZ2oxkzCvKP66rkPghZB1x4FCeST7Svxy3QdAiwhsj5JwVqrD2RM2hqAM",
  "key22": "21jJsw4yTzzkWFzwpdZd8SpbjCYosGruf89xFDmCdaZj5rCcMbMjRjwAsCX6aQP2S4yrqxDGgaepCJtL3vxthhnN",
  "key23": "isSCxBkjzeRcEKWncrr9UEfsY3XpZVpqFXpgVENUnjgHMSa1QWv6dSCjcvpkL63sKQbeJVtMDsiEw2bEq4jAHBx",
  "key24": "SLLGuwsdG2N63DU7P88T761LBrMytWCtMTxniK3hSQS3bqkrka94UUjU8wFDrk7LYtNmNZc78v4aoponcUr24mx",
  "key25": "Xdc7nb13xyuhyA82aKrHmmsp6BSqVLA3K2RKAE7GJHJhWR3jV1oq2SdkH5uq3nVZktbGVddYrriZ1B8KkECWFKW",
  "key26": "3Cq7KFAQ94LsSTi9tEe1uNz3CL3ZzNaV7u9zgKk1yPUja2KzpwvbVREec7jy6F4iRCVgq8AD8me12SxdgjDQ1DV1",
  "key27": "2o4qK6ro6E35jd7sDuATShPYnQA1A3vsyxP6grUMQoyP6FgWDf89MW1byPMsPLTdjqmNRboBXAofEh9j7obEeV6b",
  "key28": "4dzgam8mhfLiKcRwfng5ALhkePU1uNyaqqsz966KRGotiWecTbKmyFUXSKYU7XP3isVavc4nAqz1rxy79uDAPGrV",
  "key29": "2giRBdnVzTEEJASvrGxhvHeESoPbUQfnmHjB2p6cboRAdWRcn9XLS49Heewfa6htVVNirNv8hSDbXmFQTzY9dwQG",
  "key30": "3padCdkBUWSC8gRjBni7yD82QfhfGiJmsBfArDkXXb5CjtNTbGpgxsRDz51k66BMLtJaMzDkcfxJFYYVz68SbSgX",
  "key31": "3BPLUCncGUSEhaZghPPzXqCMVqgqGeTrnAADgGMFaqd31MBxisvFUEJ3Y8BCLEBoNMKub1tWTSCD8b5ro3TfNQne",
  "key32": "4RyQSCib6fciP4XXyfCXhZtdfqH6BUcWoLf5d6KQ7vQXUzypL9K68XsiY7fsWbscSetHbyYkg2jhQ2pFtudcrWkW",
  "key33": "4d7bx4Z2aq5moyyDwGt21x14DNZdpDuk91Q84EuBDomWgLLdpVvwWWYecmZYQjyJf2mJGZGPfVdKeHTwqbygv1X9",
  "key34": "25YjbVuHWS8pDBXew6coEnqjr4YBRjBjsDyJ2jpjUtCvKaNpUu3PwGmGEGCotJmb5bwf1utXQrqRvvVGNdzcFmgD",
  "key35": "F6a4jLLoDPNqyeNakTvqNuo437SsvVrTwQG2pV4uMf1kFSAQQXny7gL9NsV2Xk4goUa2ZANh9x59TeHan13rzxE",
  "key36": "2UukFqFGektN84AXGgfh9tco4eMwX9hXUTU1powfnihF2QjKDmmtLLUDG6SvRhNEgpexgZNGrT4obTWc2o8EponJ",
  "key37": "DEUsZ4nvdza6dkEWCKJ5mFyreYTqCnGHhSjtYw3Sf6cneEuXyd15K5TKQG3Y3q3JBYdDfCPUiTD3qFd6W1cRTX7",
  "key38": "2hVs2KQHAGbPHhFWzqN5Gxsd9vvaDFPUCFFGSzGXkBCs88tbMKQGsB7V1dMhVLQeZW3TP9syaaQjk9Jb9vJidn4W"
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
