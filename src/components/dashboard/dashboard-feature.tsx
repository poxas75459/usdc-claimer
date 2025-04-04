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
    "CxVKquvhAPmgqvxiKdU9uF9Qjm5YEbpq58QDWGHGXyjBAZoqN4MbbLXbTJQDfjpo3Fim4DUwfaf2uBeKDRCunu2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eM6V2sVhZdsooscdZHpZkVnnssDVfNjBNUvAVc2i9CydKNCswr1MaShCUob53pUyuSa23GhSfAbCX6S9UgqQFeb",
  "key1": "4Hr4tWUMY4VE7CPGaEebTNSUchCsh3s7iug67zPCucpP9KieWZhjAEGeXgtmz9vbuN3jB8Kn2NPXkB2ZqUQRHUbr",
  "key2": "2YYaSH2LaeYxUNnff2eNH32xxZUGGh6yQjCj4DugfCGNQ2CuFn4agjqrXt2bmg24fGjDFKLhEDnpy5xauHLSGeTY",
  "key3": "2kGtriZRH3DTtrSqXQXPmrDsADDP4khW3VF1GFqEoo4DAwX4tZ6dyYBEa4vmoZENbQw83beYhfxbu9pREX6JNpZo",
  "key4": "67dJfSPNPyfJANf58TaQxWh1hnuLkz88viTGLzCCWWDghBU8WM5LT48FM2gmo67NJJFvSseftcbJtAQmnMfevouT",
  "key5": "2U7hohAewzszAzMm4Nz2ZU6ZanBFCarh7GP9f5uacjPzJ5mqryi2EcpDBLJeNrbyctoGHSXbq8FyRcYTMrJdgJ5S",
  "key6": "5zjt3FmfzTtyBPk52mxUDttWrnMUZxb481MK99bjhZ3NMh5uhQt1uq8UvJ83knXDaXiRttsRLWL9BV66fh5FYoFc",
  "key7": "2GGdpVVT3jhghecnrw6m3bjWj43KtQVYGq4A4w8iCpc4zLoymFgStAprMFZ6dsqqvCaGEkGxkBtSNLubh7Sq4QmG",
  "key8": "2XAXRymYkyCKPEcDitXVutAFTsCwkUv5RQ8rNau8qXdteNkPQKkHt6kGe4yTr9hyLPvyNoRVpiQbPyj6KBt6uU93",
  "key9": "67HMSCz8XXLCTG8Vx4YMxtvsm9Dzih5LbG5xzHAGtCpnvhWG7jH7YmsJPL3753jrYb9FKKEz5BHE5MgGzRbXnqo3",
  "key10": "n8na5maj8vqKYJud4dDQrG8i38gbUjrhQDtMduhMJhJfJzYeCia3ybfreCkSBw7hnbpkRvHnznZA45t6Z7Sv1bU",
  "key11": "2ivxVJR86avzMkgNP6hz86hnzk97BP65mWw7FoR9yFc9MqNEkyDpMbqh2ybN7EpQ7MUaECpkM9g7oF88WsbSJo2R",
  "key12": "3gLZhRx6sTpCpizqivXxY393AEybR2KXJ2jmeWwq4TkvsSzkcivwnXTwfw2gw21V5PyxQgMNbsHpdz5JBPgZNqn1",
  "key13": "1EEPZZigoVKc7tK1wkdhcqDvxaf5SeWiE4BsRJGoKNASYd3dAsgjgMoNW3V8hocz3ibXSPPJ3W2zDtYquthSkGU",
  "key14": "4LeSSAYxrMrzWCYyznrq5JTqcXnqNjAhdHJecDXAjZnLwdisecBv2RxBkcN7f9rx8PDkEyG983Mp3srvpg6qHqAe",
  "key15": "2jko6PenFu2x6aDYefbs6MbNd4yukAqPZPMavQfYAFWULqrJAKSBWjzQeveaFbkZ7TbUFnCzZc6rdvwEi8oSDyvp",
  "key16": "3BFnxKH34VBrGAsf9bQL2hsKDMn95oGfqfq3A7drmby5zLkGzmTXGPdj1yQXSuPFmausM2j51UreQTXwEBJk91zR",
  "key17": "4XTwgPpy2AkTmtLtUwBoeBkY2NhaHTMCy2USA7emX7eWnomG6co7fkNp6mXgwSnmu7Q2Jb5jpPeYRr9YcWtN1qYM",
  "key18": "SxiJtL6HXPBsVs9UWACygEN69Lk1QcomTiCKKCDc1MvQCDjUEogfConYgT3fnoJ5yN7xqetPR4BtKR85PWDWPvV",
  "key19": "3fkHPea4DyW1jxKCvNyjZwrN1ZwhnsbYKxQdtUfQHT9HKJTE3Mo3yTcmaz5rkqJR2NzpkQBt1xjLE7VNEqGkPffK",
  "key20": "2YX9g1LhmB6puUMPQpuxdye4J6CEU7cjnfYcTc7xFdpDHy1RtJeSsAvX2EAEHkMjXNXBrwoGwZMHsLxNG12ABung",
  "key21": "5upZ6gmoh6sStD8ShcXrbQZDV99p8iPv8dJ6JdKQru8FPphkCcTkuEWmRuseW36mioMxjH2VYQ8rqLJT362iCFdi",
  "key22": "3XSDoLfPNcKoqoKaFjShEB8ffPfkMEiLrHZC4WqhnREngRufpwYSLcyff3oh7yTsLghgcKetkAYVbtacX2hpGCUX",
  "key23": "4GXjFjC9oKGLF644Bci3nnt8JW7Rj4M4CCadFs6w65ZuAQGkA8xfzKvvG21DAscoxntCEu6Rr2Vza8xMb6tc9XP9",
  "key24": "4B185ad6gYjHVwrw3pVMKmR7DN3YbcbnkQiiUVoJcB2T6DdW5Kh9KmjAPQFdswJV64Ju7haNku3vDEFJ3G7v27Eq",
  "key25": "2wmVCe9pHUXJ5xrtEr6joZWi3fruujBCLzptQLH8ct71J7hwV9kr4eXyg57wGmZqeNLGK4cQxwsDa118fGTzDzvF",
  "key26": "5keHT3Bi9sSSNm6F6PzbB9ndVL4dzoWNejqL8XHgrfaE3cyr1asw2i7L9Eh8LqW6XxB5EPEq5zdGoLpoXQf8vtZ2",
  "key27": "4JcvkQc6nXNuKDdCsREJotbk8TTNbHLGbKPTEM7h3pgWg2TNSGa4RTBXuMzgDNQqVCi6aQYuPAsWJskLyvNBnQ4H",
  "key28": "4s4mw1VisZsTzhuPKeTn2X4o6BNRxgfRFz4TE5ap4dPsndYxUtKqwSmqypQ2hnt5P9rgkNKDyYFQ7T8JmwhkySAd",
  "key29": "45PySJGEmLvpWoZL2fNfPgb2FTPPPKSZdFxU4JeoVwAGoT54tBZPnCUzMP4D8XjdxdLeHiXfzf7fZRj35No9BERs",
  "key30": "sqdopcECBdBvEKBgNmCQenth81QPngY3GzukvMkvRhSYBxQnC4ZSrLNZWXBi3ao8bsGFbotWjACC4AmTNezA5Yd",
  "key31": "2KbjGwJXbvWeKK3yatZy4P3fiYMEef79BQYhXFpzYWwyHcE4a4kkN1VbBbeLGBLod2znsjsRjViEZW4ExdNVza7j",
  "key32": "2G6tLGjjSpqj2oY3CWbqDJH6tTE79AfQdT2AcGoYvTbA5PHQJ8d7EmMw7X2r414BVLEjtCggLBS1fx6T4PEt7svV",
  "key33": "4veC9bW74oDA7ekNnrtMRw7H8rVo1oqsMSMc8ituVUAaQupTMFvEGc93PVCMTqpGkSUpSxvVhbJRjGDypvVSquRy",
  "key34": "53hSrppsi9ce3pJg2o2skWjjuje2T1f4TWwAKUcbzjQWpWKDLvqguq2h2Qdr8CZWjW8nsfXdMQucjJThH8HAgpa8",
  "key35": "4KNkbBLQGmZev72eoNrigWKYxM2q2u7D72fKHULCvv6sJ3Ar8WNYhkqXKoRTpjpLtRxXeGdgxjuktJsLttmH74qQ",
  "key36": "2wsgb2aYBEd8HvWo2jiSUc5QrmwwK6YNZX2nSHvY6LChXPG9LPSt55AgdqYJhD4Di9hpaeWt2sCfNsSu4zJ5e3pr",
  "key37": "62LqCiCJY2x9ZYATuGC3zaEw9DrrdZMygPRtrRSrs6AAWJgcdM5cA4iEqUmhCxu7DB8R7tSHcJKgk5RwCH7FcP4A"
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
