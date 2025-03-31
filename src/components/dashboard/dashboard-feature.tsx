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
    "4nmmLfNmhEVzRTcXVCYc1MiuYJxVWUHXLYxku1BKEkBSmh95FoWuTcZm9Sr6m4DR6bkRyCPVc7WEpdWAkkCJoaz4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HHsUs8n27Ty9Y7SHh2ma12DHTfn1g8sV93ZXyENotF3Mi1u93F7q55K4zHRB91xPgyAyxXcPkzVVdvpRDbVyV8p",
  "key1": "4VtULF6C1zLGwSUw6WZgqq4U7uV843nWpxBHU6uCXdXSiXED3nHaMTrsG5E5hVYFGZtFKPsPabaQGgLEEKMwHgem",
  "key2": "gqtQoncechVzHUMk1bJ2VHhUdJTBCyFbfC189XSbfaBgBxk4Ccst4XxdFwrSgg9WqAjVh9ib6hxBpGSk9aRMQVm",
  "key3": "3cfyG3niiRcCaHM9enTTWJk9CJTtr4zLBs9KitDyjXYkhFNSUYXxWQyyBQfXp5Y17HBCNJcaAW5wYn1jbzZ2vyjB",
  "key4": "4v95juD5jwyK4RpPpQ8TEeh1ZjdvbYmrNgCPNNbQVbP2cwAq3Lsi6YihcQyxLX4MAE6HgPQ7rcfwRkZKmjRnxJLx",
  "key5": "D2VRaxL3XbdLdqPx6CL65rYwK2gcUEDkhHmm7oK5mUHYqPWEbSUwaeGKgKe86tW63gZNEaYmACecUJ1qdXDyRuF",
  "key6": "5RgyTxr13iEn2fxT9ZtPxjwR9xQQ3St7jfjYb3BotDMm2mr7jMRAEwnfsUV2A4fLxtCocqnKZ4tdmpYJptSRXMsd",
  "key7": "iksznozaFVW4wtjCfgRyEy5WFCHHjVZHwbNJWxmzWNtuomYTBq35mY9F6zGXcVm8iWpTXYZxvUKAnuJTekwHZKG",
  "key8": "3jHuTZftRpG993pX84MxGyojTWTSsv3sgCwvjcTfhFh1i5coWa8YJUgJVTkTjAmSVmBRBJSW4okkwbs7cwndN1DK",
  "key9": "2GH1gPSzYypTJwXtkWT8hvPv4C5wiUxE4NQZiX58Z9ttNEFCnkHnJ9wpvcq9pbv4f5T5nfvEj2kRSStYZNKSZMgb",
  "key10": "PSLpMZuorzHx9UnwVoe4W1yjYb4CqEN7RdCUS7R775pWzXBW81Qxps3XGNZtzDhUoGQibzU762K243BF7XzVhqJ",
  "key11": "22bNG59b7LqCvx7w4Bv1hsvfYUZ6ujrVFT2zHBNFcRYmKevz8QSGUDEwxRMHHJFwUmZYiWfwRmdGiyCsbxLFG7oW",
  "key12": "3HDs8uav8xgo4srcAGLDTzSEPsHPFpGEDBQhsGFebSkvAwg2tCurZzeGuSTbhhzGPvxSkQJGQhRJEwniDRa8bn5i",
  "key13": "3SaohktAsvDLJgBrbvkgq1jm84bo7t4EtUEiMJUgeJooBCbR1JP7KLGbeGRAdDyRAv6pBcwiFq9tkFFLpNGjjxXW",
  "key14": "3msvkdYJyyy7s1TeVCvduu1Tznk37Jc5JsEMJyumMJSdc5qVNMjh91LZkg9t6TqqfQ9n3dtj3nHCQSsRUbQNuehr",
  "key15": "5skqQZyWgSRAwdtWug56hxcEHGEJ74cXpeyhDBc54BoEsPuQyJ51VFNUKqWaecJ3apUa5qPMS1PvuTKFyg53d25Y",
  "key16": "3TfK6Fzq2Cn9xrHsBS5A6BV4M2uyhjrH1LumZRV8xLm6Mn5i88vjp1ukt4qemzvzc7rKLLJYS47otviVs3og3CxQ",
  "key17": "4veGHHKCnVFzaSQ9QsbJtPpmKdTTQC3F9aGqLTaeX5qqt6KWKbVayjYroNartaXCnTwFP2zaZ8feUov55oboRSFR",
  "key18": "Rbh9C7LFdcWUqYwSctRpTC6shicfJxCn6vBms7tRxCkbBWUWJoZULPVxRpe4HpbEAq6a51JVBy6Xb4kRxyRhJcR",
  "key19": "5ZcXG1qSRfnfUhrsqyMBaqQtaQfdZBWjTPoeeZkuBWNwWKEYjsJy8iRJy8d2ZNMG9dp4kBaw5av1wtXvjGN4Hjk9",
  "key20": "5cgBUMBTRrEWZ7qRwrAJkF1dsNaqfeX2yNv2LFavEtRE9fXRAKCWVYanB1XmXpNNNrrGk5eSLcpR9NLhC5gDzePx",
  "key21": "3RhxyybciK9GH3qVSYiXEfqdLz1kDKcZ3hq5oU5BpAvjJ7NPHUkpYb7FgJqQwPUUqG9WU9cL8EPZaryW6beyHFsK",
  "key22": "6aSqUz3T5x1ga1VZoAQeatAgyxE5TiQUgpHWReMyUCW68auUgBvxRon1CRwXJrayHoRcpVNF7FBcTu8nfTdZPaM",
  "key23": "5Z33KwsJqtUNc5Lhw8AaCof6MYjmmajx4qVRS3rzVsk999bXp6sevswFVnQYrCUGA7uUWUCoRaquaUKaFC6jkvd6",
  "key24": "qW9RggNN9ZR8rtM1kc2EcHFpQMVhXGrjYWfbghTLraZCHXQbpu1EgrT4ySZFvmY18ZZYSnMsvdskvw8stSauxjd",
  "key25": "5LR1ZBL3iuFiCjJLmdFC9enjFwjfao7bLbf3n3wEsqBSxsuUPLYajVzCN8xoiMBgDdw6vXZ8svAvBEdostLgntqe",
  "key26": "2k9KNePvWiUE2CJ75nHuXgVp5WFjn2WZEh2M1uufAQCPy36Ha7bWxYHR1wGew7STpTrpEn2PipfSCUcdTprBLt1i",
  "key27": "5fM2xUrrQ4vYPexeU2GK9Y9jvHx1R797mF5L6g2qTy5manM3SzJUybyhV7tah3uw8BKPjZhfnj6nqt7wwFGnDsRM"
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
