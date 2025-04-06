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
    "qNkrrQH8RZ2zJuPCL3L36T8kA3HrwZo38Yz4mYCbAGdHg3Xgg728Q4Sg74SD6XsEMxf8NZiqEjPrMrfv3a3v1nS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rM1oDwyM8NsnbvLW9UiDPEg6RwvJKxEfE38R9wU31J8rSfC3y83opocRMZJ9ThyCpwPWzWaJe1RykRycv6XgypG",
  "key1": "2SA9x3hGPPF99SfrZBvAfwy17zE2kvdofwTZmyg9huGqid1Sn1VLt7k5NxCbpf66pMTSUVxZKZiih22krjV7tuic",
  "key2": "2XBPBAtrCnckdih3uTZXrvAo1WavYPEmcB1QwFNGdYL8b9UDKdpXph1uxhvSHZVrQnANbtGbdfzJhHkrn5qHU3hr",
  "key3": "5eBSFLxUhgySAKCdS8Ghe3Fzv3TDPLujpRnebnbg6gjjsXsuPfnF5Ts75phGZpN8JEooXKz2JzeREK4uVcjLgubf",
  "key4": "4FQKLh9XctdMk1mak5iJRopxaTbAnKAN6vc75aAAzRMscxAZHtu2VZPfC98Y1gCZoR6P1VUkCpK6K1vfNUVUF3Y7",
  "key5": "3Nqsmru52nWAXr7YyBCyUNgcv3QK8WQbimYqXvydLBxQd6sL1LgcZQXCT29b59wpM5hRE44YD9qrR6Ai8tE9kr3n",
  "key6": "66fSqnohxUKfLVBgmUFPaAnKuhPmNYQLCvi67VXNSqkKXFxCVC2R7fZdapUMRc6vXDrG5xZ4d1bBfygtAWqCVnX3",
  "key7": "48L2vDxL2YiVvHwHBAmDM1FjwbxzdogU4HNVqNGMXf2A7qPkZZJfKtbHKrgSo3FBbbYEpF1CmLk1bRdJgTC7EuCe",
  "key8": "4fg3Xotig9AubrTHAZ5fobXiznwYAetTVzxw2WeWcYz9DqzFKeDeFk3YUc5K3jZTb2A5kfMP7m6y7bhBZXkd7p3u",
  "key9": "5DaftfijLndGKNMNKQn67ET2ywJYDuWXPGaroFpvTuGw52vB8ZiAtCfjMEYYeNY8pQPihW5eetiXBgynzBxn3Bux",
  "key10": "4Akagx6Gx4TmFxL94wxC6MtLrxpiFYgyDcwumjF2ktKXyefAwfna2GQ18zQ5HS6XVxsEn8Xsmsk4KdZ2vPTDjQXg",
  "key11": "2hzjEDNJw8YnoBS782Lu6s6arG6bXfpHPtqVk46tBkzZTY4aLGAPBZnTMyiXKArpYzyZmm2XWbK5YbHmqgyEHM4F",
  "key12": "muvqewLHUoXZjZ8GrJVMCEBzVKKCLqPKVKKSRqVvA79VDTkthxX65Bcx3xcshMdrnWsT5mcqWUVDhRj8R93Drp7",
  "key13": "5czozuHwGQ2wp79VZ7iBPtPGg58nBN9D18AaBZJtHDiSjEjjL5CzwnPEK6ZdphbxHYZT2ggt2TAFWdxeUms5QV2t",
  "key14": "2g1UPKCJm4z2pNpZ4yULXCKbape5TNnMhpZkzkss3jz8jAszuhi2rk7qhm7nqBF88WFGEDzyJxuGCmPQxbRGv8qn",
  "key15": "4KZKQJujZgLKr5pjjHLQaYMePwQKCYMuKakk9eB36LRLppBukuZjMt59MZHNxdaxuXGaAQn5EDbkTEjS24owDNRM",
  "key16": "3MisSAnxhS8rnCLWZUUzvtzU5QcCfea22L3hZr41Qs28aDRBYSYuL1XaGfMuUsk2PVd7cJ6CHe37h9Sn683vuwbg",
  "key17": "5YRwqkMAFauPdous4QfXHGTqE5ywhJJsjqGVvETyspcKkPwbh3KdjErhgUWcL8D7G4ST88VPFcANioFVi5FLLvSZ",
  "key18": "4W13ZaQHEUSdrjL1dGoZTxemJe12i8JGrXxN1jt2Mc5ascK8TF5ttcdKj2nXg2bYd9fQHqeVr3iZV2cqFM6qc5yr",
  "key19": "2ncuaF2Q6khH8sJ91Ks4TCMKuTK6WgQc4keGxqv3rMiQmK9gEv2J5Qp1udgtonYxknifX3BsLTi1oXjJvaQNNK48",
  "key20": "4n18yYC2Q2uxTBk3FNkgdQRxk6Q6f7YUoXEwAUmQdStxDDa7cncPk3GbuqGSU47n6vnivaM3XCs11vJDeAxRqHxD",
  "key21": "5rangD8QAX9KKFUYs3eewwN9vMHLzcVSsZBdwPpMdMbHC9cMbUwRjG7aezpqNiN3WrmXPK1Q6fuYeAcsaedouGV2",
  "key22": "4H9PtfeCERbHaYAbmG9DGRhNo7u3ut8wCLePfQuhXh9fBh4Z9FDCzR39LwDBSwnYeCXiMJ9LdtpbVecPPhwFyYC7",
  "key23": "2HaYCLPc57Px53NgRiUkYPnu9sR8TKHgf8ipM5dv513s1qSHU18Bvjdd4TwQkCo7n7r5FVMUx9rPUb7YNtij9PzE",
  "key24": "5fzcRpnTLFPB7rGAzXces86nmMcG8k5NMBpeiGapeiGaJYJijtz9Fc8eL6yuVUcxKFJt2HWH6WZjCmsgvbzgZnQU",
  "key25": "3Xx1FkysfyhQJsP7ZnWi9k14Y7hwNSSGYFEmyV8FtTgEhDsYSeSvb5dc6Psd8YQcN76i5vosKfhBAx4AjsvoHeWs",
  "key26": "4DJCT2auy4CtseD4SC6hLEyN8Lyaus9JsdQz5FTcLiBYTmtW9298HVimwQMAehMTxByoDLhZe3MxBMheiLk3d8pA",
  "key27": "2eWW3Uy2XKgJkjWEmeaw1AiTBN7jW4xvkzKNSS1YTwiQKSBDeVksB3oM3xBu7RAWTqHgsX2XK4JzSGVMx1K8oH4X",
  "key28": "QaQmfReh1MhCCdLTUXXoGhbsFLEkrVnQwEHNa26usB791oG9UXSACaBxnCSAaSknmstz4qjBMNuLvxkxYiYELG8",
  "key29": "628YcHTrDg4maxnb9okcWMLTTTyjxgjohKMwTvLx6rAakaHAUnGtRVpqV52DCuEPJma71xRVXD7xUSZJTzhyRJqT",
  "key30": "3PMjwKwBWWY9MxeSqRj1emeiYtEJxxy3P4xQSjj5HZ5VSgnS7zE6g156yhd7wv8zBGGja1CQ5D5SFDVUnSf57PPe",
  "key31": "4sAciMJJGwxz1u62oKzGY6ftqrkkB2U2CXUjD6msFdXTGMoA5DSsqRNqnnCH2ZaBe8Uyqfyqy2xt3hnq1itEa7nV",
  "key32": "6qFw9Wf4q6ZArTU1Yq6xwaTw54qvpxHbNAPkrf5bbHE3GMohrkT9VkiARZQoknhtPvCmgCUfkyYKoQfrkN8BmJT",
  "key33": "emibPCgBezaAknW1xxLDdGCrd419B3LCkXhMYtQfGyxiDT8e46JymQ5WMviUPV3QHDV8LqF6iDkcfBt3CXenPQk",
  "key34": "ovk8fxsEn5JNrKmTaq6Q1GPMuBPkuofUjf2MVmgRP1cqNqgL1HEXD3PugdKwHaTZz1usB7R5H5rSvnRm25crGWA",
  "key35": "QNdBVskPYGU6Amjj6ZLvKxR3Epy9TufXdyn29inTf2JqQLgE6rSuKtX5Fo2Vi81HnTXCn8yiipnctgSj2cpTGau",
  "key36": "3nHZTGb7Wk4ua81u46PnbXeBsVhRwJNWNc1i3CwwVAg632qtj5vK7hjUFGMRvEryjGghLJ9X6s2xtaUsUb3tWLvG"
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
