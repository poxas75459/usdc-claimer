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
    "5c9tDysTy8A58KtJH1F93EyaHtrJ9ZtMijBu6eh69BRYgyoc7TDFusdBMP1Tm7RWMHJX1qR6LB11Lu212pobqQsN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "263pmqqrbE1EnEZkU3UQsQ8TrreyyBVZXNRr6DUXu9WfrNFATQkKoT2nWr7rKTG4ShH9fzKQ9gnR1KFWphzN5co8",
  "key1": "5pLPh6nNQfcjfdb5XDTP1zEUEycStmKVBBEPK68Kevk1m6ii2FNn91jigCYkVdyaWj538tcQVpyukmE6Nb9C6aBE",
  "key2": "3PnF9tpe79aGVRPuufzLuBwntE7hoEkNK83WamMBDxT5TKgaXeE6GjPqRJL54rRpJALWLDuCLpRQLRK5MsonKueR",
  "key3": "YnwmG2hkcokdkr5wHvwA73JRFjDGykzxAJ6Y7jSpdAuHsJ9Mc2ViNWEngn8hRQBD7WxddRFUQjmunsWewbBE8Mo",
  "key4": "4u2brzEjS4gd2YBUqAk6nLdraBTcmzn2BZ5moZ5kUQAoU3omw56T1QnGVFth29ZoxmAdLjFiusxTJemWTtoanTn6",
  "key5": "5LLKkZQRZmWsz7XXQYBcJV5Y6MyMYrzXL95RqcNHj2vyCm9utzhJv5p6s9EM7i6aSzkd53TdhPL6uxteFtxuckef",
  "key6": "41NYPMSWpUC2rurfocLRVKhPuaQyJwMrBHaRFVUDHGNr2ooMDJE2A76GEG2MpV2uD3RG359qFmXAmiaz1337h3re",
  "key7": "33c7BqCAGkmsYSNAgvjvfrBoDeWmPdmYyA5YfMSjgSuBhtmeRZaBrUfVZzCAeMmntoV38BANGzB3KMxzdHmddFUQ",
  "key8": "3c7STv7PaA6WxQT7FeirrXterZrjszs5GPqqjjEFxKSBR5Mb8WRhox4ZSfwGJdTE8xfHR1fW2NZbEVDevGSr9sPN",
  "key9": "3rYen728DUkpcn49Bf8x8r4zhhig3uR6DLV5tGDuYgb2c2tvGgJAHG1bFokX8GDhwJ8RriaWyChokhFjpYUdeX9g",
  "key10": "2vrbfafCnh5ZaLhMTHHUByboa8QW7TJLvWZXEGyaAnVpWxtfSLpUa3Xig5T7PDyKFSfY6r14sFyrsVqcyCj8rnCr",
  "key11": "5EEjEqXhAp8z3zN4YZLHXCnpYJBdiaVUXVHF21adQCdC6zfbo78oUWbZh2TvpNC22Tegj9manEL2Q7j1cZodpE3h",
  "key12": "6zzSUewoVv2R1m7YD5W6yCKdUFfPWaiAy6BstGrPzU2qgRwsggLWyQxhFf3ahqnA1Tfp1eR4bpprEoua93ofJNE",
  "key13": "22r9EBhvHRsaPJzLkZbTNiKaVP6NQgCbgU1sn3JGD6Bc7qzfgiFty5yYr2sb18FZ5pFbbMEFmQ1eADbLmRhLzdjU",
  "key14": "5FZkD95ndviGM6w6ohribL7uJQPB99ayKMf5McitVVWxkZ4NQktKZQGamZBMCqvusPTtL75rp8tJn8NfMc4RSRdv",
  "key15": "3ZGceZnqtoUcZrUG8jJSE5N7ymRT4XsdjNYPCUuKcs3pCw5LFa6hrbypWjFai3mDrNeqV3iMi8GEx3Njjq4rU51X",
  "key16": "65Ee3m5Pn8ZVQvRMFE2D2HSKeSobCvyyT3ACGCiJJLR4ESxD4RsJz65nEfDFhXJxKXMdQ4zPLqDLvXqkFmmQbxA",
  "key17": "LUJy2pv8m7oorVJCQda8y7rw5XUxNuUoXDm9vWR1jST3p1tAJLgAAZDhY9whyXY87b3TC5CHyx9DAUrL5LDvv5Y",
  "key18": "Yx1Uob4CCXDYtZaTwxvt4iQjJ9ET5G4MHdibWvQm8k7Wnbd9YTm963qhkfrpG8cwQBivpWdY7KCaq3cajkYKJtP",
  "key19": "63zH4NB1yQVXbcusA91nmhSkEmctVNAD3MmX9RQKuesYPSWa6GWRwxzZgGdnNLYX5X4vAsU9HB9Xs8npdqnoVSRC",
  "key20": "5TWNsmnemvE1jrEgdFLWTd17Vp9v76oqTxVYP2kJEckyDeeZVxqoDfxcQPjQSkVFnuQbbFjY37bPnt6xeWWaL4MA",
  "key21": "yGEM3KjngRNVRqUTzgpF4kMi4GUGsXqYnJBXkJ7UoBhHNsA7S17qkf9LVN9EEeyAjuMVQwkrgEeVrzEEJAxWywP",
  "key22": "3yyWJFreVYwSGo8XrXX99i63veuVWiv1wjobvB413KNfohCeXHThDz92tAZnqrQq6gHcSrGwswud46rJbUhbse8w",
  "key23": "52953igME6cG1aLwhfHvzjnyiu8AoPdZv7MLusgmZCcgBNv5e7o57p6axof8ZtqGev4EYiteeMQBotNaYJa6QNjz",
  "key24": "67cJWmbWvcorLRxDd4gq9PJi28JKuRp7jBB8xbnho8pWaiNdwgpirgJjrUmKn4oNL1HSj9YXSdR1KhmXMeBULdgi",
  "key25": "2LkD2W5b3zvJRnEAYtsxGMBwzWznD2nJJwJz2tSgg8zBwYcBcJWCzohPBwMeDRKCqj9WuWyHw1gPEUNmeh9evrZ8",
  "key26": "gWbKhqxwsvd5W6Kuj6DL7S6wRLs3gnUEWmec8GypUL3haCxmKyMRPhCuuTFCAuR1pbWDYhb7Q2XYwnonqjvxK4G",
  "key27": "P89vKGR3qB2KH8csDEGckekb5LfFnnq3UWS5HfVTTCHKSxLzd7b5dsx9AhP9NcntXcsNBcyX2FXFyUguPAYxbk5",
  "key28": "5Da1q1YYJJbG29dFdRPH5ypomS8hN7tycBJpZ5AgfBqCezGSWqmxoin62SMZTh9EEZ5Nu6YVNd4qEtwoNxyNuK2S",
  "key29": "3wRHzaSoBmNB6bFSF5m7NupkydirNgG8aVLEY7NtEmzdYmcyE6BpzY1nfscwEGfyQcMy7Zeqj87t7PmQgtRguVSr",
  "key30": "3GzfWkyRAb32Gjv8MJvoUMcZKtkUu81Fcvex3LT1Vn5fERetDneEh2LnN2XuNd4dUpGa4HSNQAbszuwFqYjHfb6N",
  "key31": "57ojj4WMfZWG87V9HtYroJNPyoqfhQLQ2KnYT1W3on8cj3ihvoWuyF28F6fJ9C2rkAsVigU8Morj1x493keuGexq",
  "key32": "2XreFkUPoQa4qdXVNcMkvsLzyKBFNyxd4Cyo4uzkT3CkMLJqCoTTvj2Jjhgnd2dewKV4ntwTYsG2uQHWG6VNfxfx",
  "key33": "53UWVfus3MvaFCHJWeQiFChuUtVj2cjLc5eg2RBf82gtsXysUwzeA9L77PWJbhgikLtyTV5ZhtRnCJRBiFb9J9LJ",
  "key34": "3jiipysA3AuKHfXYJZdycBHrvR3VWTpduts8nSvMP5shyMLhnhWofEWxWbxNpokuxgZN612EHmjXsHWpVBc7izVM",
  "key35": "5atQR9cHaBoCqG6Lfmvhs7bmUwNkmnoKgmpFBmJGhvFnTMcREQE2RPqAs9U5XruYJokrEsaiJndhecGofstxegKx",
  "key36": "YBezazCNcE7ZVBj3fzRmsUwfALYM8uAp5s7X9DsPPkVYXp7kFsixqfRfx932mdo3HMSNpHb8zEPLrZkRE8Bgjan",
  "key37": "4zneuFzK9pg5iKB4o8yGnvkidrE3FYxbGc69bHx4MC6SNL6rCURhe4Y94hjA3wgR8Ytgq9U54A8woxHDq15rhDM2",
  "key38": "UDXes1S3uFDriLbKdJRqiY9UCYYdi7bX5i85WDyHoedN7rL6Gw48kR7ikHm64q26hSjts4x4mbUJd1XzZe1xzNn",
  "key39": "5514azdfz4XUKZ9XG2hPfzMtWiCTTjmgMDxbFr5jx5caqyBCPNicW529QdMBTRqhfhFSMUBZK9AndrZfQzjw9DgH",
  "key40": "VRHg9JmfoWT124P7MHfwDK7mURXkebC5AxtXcqVqX5j3eZq1DZoREZGgW6WXVrgsggpPH7JMpJXT9iz7M8LVZBo",
  "key41": "4HGG5rdhE8BYK3whoT1a1saxGmVDUktjP5kjQqDYjxB2Z6eDGGAPYJSQuEPjzRUagLQGHpvS9tWmDC8QGk6YJSms",
  "key42": "2mQu2sN4nFDkkTdXs7ToVVf9F5hr9FcG5mvLRsRox6aNjb6ipBEqnG9tzH61bSv6xtbCmpgexH8LdXnoqAAxJPT4",
  "key43": "2wfXvQZ1RMP6CoDWe9S2PMAoEktjg6SxgzMXpaziHQdkN6rXTd9NmqNvV3E8BwtMBcqLQTB8CGtrYW1dURFFDkRh"
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
