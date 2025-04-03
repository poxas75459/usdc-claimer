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
    "4L39EHWv8PAmWtWy8D6p1qN9F4nbuBZayimc6BdRbBCwhD4jsss8eTmWLZqXKUKkiaeeXmewvCNKp6N3aUC6iTKr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TVBNDJawHpkGkqxJppb66EKM6q2ndD5WWuLhgKRMjpavBW5rjVtjEwNfMX5zqKuBFZAVYGSMkqTjUviZsakBKwF",
  "key1": "63DaEDV8rGFQb1rZ9W4a6YvMw2wTHA8x33XGviiszvCeYTW5aWDVbUgRH4QBte6ro7XGqFT5MuaYqwvXs5ViJGLL",
  "key2": "53odZba4Fg9eXXCj2YkLEY7P1CYfNvGzraJ7rq4GK5phbUhX8VtmAnRd8c6maLC7xrsBHmHJk9G5k69zQ878H7F5",
  "key3": "2XpzqUfwTYpkjYidSGDuEp5F1s4QZs4YBBbngEiiiXhda5LigCAt8qefMejU83aGenPPiMMiESkgGAjkXjBvNkFa",
  "key4": "3RJVARSjxfqkqDDyk8VwHmfPQDEqvbAJraVPc5gKcNxLUYJehfTTUh6Y6PszXVBCmaVTDLGWHCxpuVkgHinjmpwR",
  "key5": "5isJLW1jXKUtzCkaNMMfHNbGMMDzARW8L2LgqakegeeLcVTsbkTcKpr1PMXco3cnozQibiZXX6E5srYtZMMh4S2r",
  "key6": "5meTM3ntwf6v7reSgxeyizDLNcMqiuY1SBB9nEen9eHDbHLhVzXCcCXp745F2M1rukQBrkbaX883aNJaKGuqEZd9",
  "key7": "4fJtyWb6FC1gSRuLSoCQBWNCAYRMgboUXmph12sqif692DKdpu3LFcd31iGYuPWQQQopFHsG2cUnexgBxpM9pkdx",
  "key8": "3GjwgX7kaT2r22b4pP5KktgiSC3aykB2BiqQWGVcRJNB3FhptjSxg5JEMgLqVJuGg2YRRPhG43vHWsg9bQJ9GWzR",
  "key9": "3uCmNGEPxTrAp17gcnTR2CMm594i3X7QZKUt23QogGfSQnruRs99mEsoSBTafVTo63tYrFgnMRJyYMjoi1jtmwNH",
  "key10": "3QvgzNNVfFgmzHCEhabph88t3j2pMW1TxkVrTMgczBn2XLrfWty5MfGos1H1oSBCqHTGTFBL4Sp2sDD9JLi8fMaZ",
  "key11": "49JcmgCPkMCXtPghqarUaLbLKqgccm3aYEtmYr9HZMfyvz8W7n6BrSsQDy8phrFENoo14bPjigLSsbQvUUkUoTf",
  "key12": "2CfUJEArvwnJioiP8LjpdrWyzvB2MnjJ1Sontv4rBdSqNgHmSyjTP3HdsDYeEiqTD613kcL7ML4Yt4VHWeQ1EC1C",
  "key13": "5fh2y9sbWZGpPZnkMBF5pQGmGvhSbsczj1CeazMvpkFffMuzNUTgc8MstUxD9V4ZdvkGQm5GRnVUkZuXAH4zQZww",
  "key14": "MJfa4Hh3BYvY4sofyyVN38XTiRbWefqMxdpGeGCnurqA2paiDBhjs5oB79hVg2cTzKnrs8wZVyLrC1LmMiwjzKt",
  "key15": "5paqw5xk2imMrTACTxeE7JVBota7PxkmdUWDjFVTQxYMtYacS4TEumThLdXWH1bEXVrygfEzKNN7uFL3D5dzUvD5",
  "key16": "4Re2RviZn1RwoHWgoNx9cfruSV5g7tK215nAHn5XFWF3Qpnh3L7gKdTwnbCdhPA4d3hx8ZJCe8LKWQNMNqn9B56w",
  "key17": "5edMMRdbtwnHfeiRdqimzMX6Z3VH2hwtTjyw9AyxSzUYQhXoZN5DkNR6yx83bc1CU94LdaAGc2WMekcmU9ffYpvG",
  "key18": "cvv6mRH7FaKoqEztaM8oD9kevERSkWdrkNXDvQtM9hWaWkvBHr2F9Ad7oEgbXH4YgMB7TN8wRSb9yBfMzXPrPbv",
  "key19": "enLuUGPo4gghTN57Bb6NYWL7kWfgYHymRZqy5BYgCfsYjNGjpYx26p61tyJFTJJRLCdiVLp9cCSjcvh4KhWcvKK",
  "key20": "KRE3Cxh9za73B9YGELhjkdfa5mKwyx39eBnwB5HY7GLxcguvaDRf8x7T8Kuz3a9Hemm3xLcV1GpxLnsSGPGH2xo",
  "key21": "42dw2cc9BfXHgqqZ5c7kKdUYq3iTyiDbdGNyUgMBVLK5YZ5DGzUqQxQ5bt3q4wKFPaFpprfD8rVMwR4pmmNq75ro",
  "key22": "38ZJERT1VatnbvgMfZqevYsemoyb11u6iWFSp1XR3hjCjrP3snLdG3pWBdLxJ6bwSQUGuZt5M7TRZdihXpCo3378",
  "key23": "4z4iLsWmrkLG3b9nFLqtHUp9JqVk6ABqAmGjZLBqZmhVrmwhV1VE3ChnSDFLJgqNWyYXXYahTcvh9cnicSW1CACJ",
  "key24": "REuLUCYEJuPUEWe6jHSS6npSkadwGtF1GyCe3zJhou6QJPNwpdCMqczvN7UnQ195vCgKenAFpe7pGSouLdLKWVm",
  "key25": "5P8nmAxL7WGF3HpP8g5Q2X5MAK4MmnKshdmt4G33NXnCBnwjuKVNAVHjVyQWiGvn99xd3zim2t79Tr9thTFPxXnC",
  "key26": "3FYDEQuKZa8FLE97y2VgsnSiUkkWXeuBg7zen9vkcjJzvGb61QEmzxzejEiz65Xfe7vfaH6PqpMCLVVVcW8EXafm",
  "key27": "5MFSD8jgoPFKjXC3HiGhDnjUZbTyuxuFh6kQqPH3YNoRLHqEoKLbcMhuEH6MDihGb3mZdiHwhUw2vysvhBk3Da1k",
  "key28": "pYB8CURo6zjZx1V5wPv9UtTFGvnNXc3gURNiF1252uMPeTGuaHw1U7FpaVhJbR3tk6UJN7n3Ss9HGUAWDs2Ynxv",
  "key29": "3eHPU9rYfPenfuNqt4ma9Y3AJ9T8579g137Hd3SVTWqEhfTih6SczrgLsUgixQ5qxpn3NUstt8X7xiFQRER1b2C",
  "key30": "4eBRXikY1wCP4MNkjR5KnXtuaifdpWUzGYgcsTta3vxvtGVxQy5UdmyJfVmLbetFipFW9qPmnLvbwtMw4L54cUNL",
  "key31": "3NfLMkMZ5cmZtAFgPjbpyzWf6Bfk5AqkH4k7XmJJxqwMtiEChKDWZhY9vxRLB8dFDTEnc3dcd8Dq5LEutzcVg3eC",
  "key32": "2y4HPgNGiDBtnv5k5F52FohE4FtSnjHoSnis6nMGBcqdShnXfrE8AqVZ86XzVqPdgM3kYvZiLj9e3vtW9kgtsTwm",
  "key33": "4GAV9ziGEWv7LYc51GV9KrgYAS4FndH8kk1su65xxKgFFK9jMjJ5FqJw1syqMd1i1im9D8CGF1fvH4S9CMhMb3HG",
  "key34": "MoE52xTBZCRujjuETbfGYnQFxGxGxcwNmGPzapBX9Kby7Z6r8d3h1ZMhWfc4E13WqsvY8qifYrVCWspjfq9H78d",
  "key35": "QXgZjWmHhmtpqBKS59i3PMyW8vtkHChk3dD7BB1v9eh4PFMGZhNtiUnZw4gLv4obwxg5zaecDQkcroYnpZiGjF3",
  "key36": "Dne3kxNQypoYtNNJHCBtyAMd6XN41r5ENeN27D2dG9vW6h2rdfHQS3uMLUF4WAxZpKzW5adEJXkE6B4nLNsKUSy",
  "key37": "5GdFF6crtUPPb9HTUqEg4uGUWBcXLv9jGbQGHdfFb5CdTjDfrriHc1CsmvHcVVGQxaB5jmKErC7hCjvBq4PCz9Tb",
  "key38": "3niv7rx3g16M5FzEawehXnjQWnkyqatPHQz3hx4YaZzcYMXoyuRi8uLXnLrjs1hBUBwmg7Ddw7rYJrtxgjYJFsg4",
  "key39": "2Z2yRXorGfpCcrsCQsP9whk6awUpfXmSoqjoH1WyvqFppxKmgbQizTFnQ1Bpf7yxqqHPm1ZVAry2ksXneshhb5vQ",
  "key40": "2SV3z5mJ4LWGLdTxiUXgNkbJ7TjqBZvhPkWf8om1EoxEx7uj9NzrpFkd6n7B4GqGDeSStav3atWjS4jHFpVGmvjM",
  "key41": "4mSy2xky8RadeqpEVTNML1ntHN1aPVdBZ8DrP1t1X1PkCokh72eAAQ8bDnedAk2V1VzrBnxDf2kJJtwnmzj65vZe",
  "key42": "2Hz7ejsom5hFStA4nRzo3nDQpqkfZy9Hk56pzgGPMDP6sPXedChHMPb6x63L5U9oz2NyRKBcC8mkZq2ScR5SV5iG",
  "key43": "qJKwKaSGTpqAcxadXn9gpzGcJVS2YN8dKk2TJi8PoctSNMNPRf228HbCXV7EcLa8ciNydkZhijhb3UeWpxZQq8T",
  "key44": "yXwQb5J9aYhrQFSWLCf6pW7SN4f5CLM25ZWpkXC6w62Todo5RPo1aHyef1EXGgtvKvqm5HqEU29pV4e6NT9oFrU"
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
