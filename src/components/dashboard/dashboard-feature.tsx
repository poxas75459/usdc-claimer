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
    "5sKvopzLtxMR3DsDQzQQtPH7V3JtjJ3CDthzeVu8hjGzQnv3b2jPpVoWtFhCJu9mJHy1nCKzuuiqWutDZBEsGmwF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GwuuxigNdxXqydHVZaLarerkHH5msnFvEAYXfHHqAMf4Xqp7MRbTfFv6ABBz8yL5RcX8NDCDRx7aKTjWjqud4zQ",
  "key1": "Sn8nkwnLPUXoU5rLj2KR3KUBTm9aedGWCSB4Pnjjk9HEfnX26z2pvEgMBMyoE1EfL5A3afVXiQZrxsRvCcuBQua",
  "key2": "3bcL96CuZhanxM4UG7YzCBGo5E1DNRGUzZsS712VhZrjoPSLNMisS7JAikmJRq11jKNZqATphrSG5aTCZWnKzzfP",
  "key3": "5pUEiXjzTKTGXftqX1q7z2Jm6wJoF2bRkpULgEpnWobJ8punhKXgcJgKybfdNioCJEYqfAPzpvjWQXVkwoV7yHjz",
  "key4": "4QCYqJWqJcjnm2QoJmsFd57z85ZP71VRnKFzUnnPkEtbD9X39iuHTU3df3TBQyFcYKTbvnLXtsW8dBAsSmaoxQTj",
  "key5": "4xCeY8qAuQQMGPjMd3orsjv44fGZFRQhU7qmtqbQkveeio6LRZjY3TmpBFjyFJb49SThZe8gHBgPsJg6jPnypKZX",
  "key6": "2yGxkvtvDFfiZoy2KnunCfnBr4hqUCNZ8r9at65rwZCvBppzhpbs3QVqxkXbrz5nAoRMJqDk1xuAXQ6KtxKbx7op",
  "key7": "4ef2rFPsYtd3hqbApE8Aosa8f7t9HSYQCsK3oQ6xm1ei3XyEuXvUhXg6y1ZJ99xHQenuYxuP42DeTEEvxFyEh5gZ",
  "key8": "5MAdDn8JwF9bYvkVex21jzAS9sVkSCrbxQdunw4d6SdCAHrHbzPNfXiBeg3Ba5VUAAp76q9BMikAGkqLoWDpxoQ7",
  "key9": "2S9bedeY5LeJW8kwMrxkk47RNc22MTKQcvhLScKqNq2d4TdgpDXoW6SGeWMG69qXMrNPhCgvczZyBqqPQ6vMFu4",
  "key10": "BkpTGBwvsnhSeQxC7hfFgDqmHjJ6YZwWnvJTBW2tkVynMpBAdhuQqME18CmYHyLdpVtG3eo1eUU2ZtnnRszZ4JN",
  "key11": "3dpdTh8exxNqEm3aAcMED1hZd27XxysayinhmVWWcjBp2iR7JDJwBYrmaUHTTQ9KJHrmaQZPuXND9fuJU2Fbxzqt",
  "key12": "5FfvxQFvQY2dhrnHVHp6VVVKeUtzErPaVFUGBLVHSwqWKRQrYdVCQgSHZpPgTVnt5T5YYGcy3Ue8JuhKdVjjHwiF",
  "key13": "4xA1aFCyM2XYSH2GasdN83wzHNoNXRP5ZR4LF5CR3b3stLW3x8xPMLVeYRBXhkgb9DYLHVhvHUjQR382GaUDF3te",
  "key14": "PGmWaXYJ8BHHRWRPPzofakWVf6ymjYPAcfkfhJ6MwHCoXkL63tsTJn15yYLTaCkx1NLkFLkjbVk73wJNQCyTQzP",
  "key15": "2jejEJDBwQ6yedChuXCpzPcMao72cxpo1v6vufBGR8MEEm8BmEAsTpK8ZkNEKrma17xiXb7UYiNt1tNk6KFEUrMq",
  "key16": "57uJ3Li1gFQtmPBdo1aAPiCaDP9djj3CWPi9KxHUZfn1ThqEsybGBaWY63q9f5DhWH2dSbeEhWayxQHkzgr6qoKj",
  "key17": "2tMuofHuTmAzUfEkx4ak8oU5GM2fvpoujpkYcoUHvbTphsX25MPrvXH2UREhLHTRjHNJdGGQCEJpMpsNCtNidPvU",
  "key18": "3w8AWPKs2Ku398qCvFGHpRHv3pugW5z4homPF5yszmfpwtR81yn3GsiGeDryf1QB7oF2Ycow6F91FELa1azAWnBb",
  "key19": "3o1ev3raTK56BAE9UeB1CJu5B2sC5zroM7EmHteASrPrYNSJMUTQADg6uyuMSLpfMgZRDGLkxkGVYGPrZDB8MhuR",
  "key20": "5Vw1kY3JRccruV1mQ7ugTTwsmevdhg7fZgvFyK7Foa8Aq52TZLhxyMNy64SrFC6KBq4xVGZrYSrNwXuUmagpn1k",
  "key21": "54FbDP4GMT7v6tA8MEeu4xqfb2t2bwq6xSovpbjR1rcffBMSeJHxb9akyeUcMhQUxJmzL6EkbZf8XGcZjaLqpxRt",
  "key22": "5qiDRDrGLXgBfFDhioD8Pv4ptPBtAJT7R9ynRLUFXGsk9r7YBvoLH6H1BPRdEwnwgkxeb24HgxCBocoFmVdQopYe",
  "key23": "5RxnR1Lw9KXoGhA7YcNJaWyANe2nQHa1RuBWMzvwoLsaL7jthw7Xznyy51AivZdqVjppSj1zhAhKW1xmAkSbZTAY",
  "key24": "2nToFRciy1jC8tVPcykJayC1DpS3wFfKdeYguRV8wxcSrn3hGgeXSqb6HdnoUbfb6GP7QRQ2BVc8tWQK9hSjyU7Y",
  "key25": "4pYz1Gh9VwRh6ZHT4nfKHkmqZR46J6BxNmQzPY442TDYCr9MK5y7ZRaB7uo2CZyjkyX5BAXWZmRwsF1sGr2Zozfo",
  "key26": "2Yq4g7V758gPYMmcnSopqcPWTQXLiaxUPn8gYuYaDoVacgFkowjcSLXnRvJDuu6vXsqSiYTsV49rXPEYkPEW1Zfa",
  "key27": "3j4f5L6kTyf8QDTo6RLj6sqDdTddjGnqxQqgK9UiZM5iXYhJvsUYXxdemwM81jV78qCSCC7A8qNjTezEVZ3v84LN",
  "key28": "3WQFYi8VqJ9Vm5xepecFDbfb8jSZ16BCpqnHTbZWfvERJmDZ98ZPqAaitWU87zEihqUdJoid65hgMDRbdeFU9Qay",
  "key29": "4WxoN8raXwzDuZQzTyE19xXmtYPwqtFijueaDoz8sRyy8nWDB8LtoHVNL36kk24kwXJymwHLGNWVRYL7mF1pCLCe",
  "key30": "2ZqZwqHKxuE3uKa1981K6p8bXQ6v3UUZL9ymb6a6VtU9igFnnD8u7szgMD1PMvyaQBZdz7TtiVD1vuB1gD6gvitK",
  "key31": "32vtdTB6e3oYM5mcQeeDGnTu8VbA7ykubeXurtaAUX3GU7ikTzYe5B8s3dhmLoNATXvXajYuEfTdFoCF15Vi7ttZ"
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
