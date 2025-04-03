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
    "2H5BG1MjFBFTdzNymyzkAPyyzDeBLxX8VJ99SGe5nF1HqbFZTme8Wf7uZQcfK3iy82wNttj2NsssMMrD7N9mV8Qw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xi8FvN3ibVXu5E8DEU5qpAwULSVrnkL5n5tz7L6WU1DoneFgPD58Gyf3ZMr1A1DSeDKgSt7yNcU56qVKd9BC9Hk",
  "key1": "qEADewr9WWgTNd38aPbZT6xtCWs83j7SqyQximDoJyF4u5UPRQnKePiN4PGEpMrHUyvmyWzAB3kfcHH528HUNVL",
  "key2": "2YpUWDmksavdbCfRBBVArKpmA1EPYYryTzuGuTHsu2SNqo8i1Empyhp6Qx26ge2HtELF36HminX2TcnYhEAixj9F",
  "key3": "2YD4DJAsiUvgoo548tigvqfMzwX23MdHGt879am49LeWHrJLQrwXweYm9793jkBK1Jd9Vi8bkaBiroZuJWjcF16S",
  "key4": "cd7anJQiDXcfo8nJawChN4iitwDEix3wJK9i9ocZzQwMZwSsCFaBaMEeQpXy2qbRfEm9yKfGBTFs6zN8z721Pua",
  "key5": "2BauiUJxVupk9ajxC8cb9aop8J6Cc1CyskafundsUXoxpmihPWGTkjiMfgKzUcpyKokMsxA9rtEooHs3fjBibt9c",
  "key6": "53cRYSczJnPbQPwv7o776b2WFDbgjkSDX9sDnvpF4XUg11SdPQGXj7uQ3cpsjXUbUnT2ixL4Dx2eTVKgqAtM23AY",
  "key7": "dZtvcghbq3gdsBDexaqBwo3neNibrGw83xBnqrcEjZmLyjkXYLiSHLJybumQYocKnE2KnhdFKqc8kLT3wiZs3mW",
  "key8": "5v1Gk1ranGenuXCbq3aWFwbqi3xXhvVXVMk4EV5wY4L4Dd62F5ZzgeJqSr5wXeAWVfwsxHQEEkm8JZhquVAHxtdN",
  "key9": "P6kZnxGga3ygCyRV3G9DEpiZYM8J8zhiRQG6KezszebXcaWdNphRXM7erVxDCWfdmhNvtXxDT2PF2W5nhfJJUQK",
  "key10": "kcTN8vY4xit1Pp9Bf7yXWMJ7BKYN98fKA1eAieWggWyGU7mV5jyhYXMmbbnaKLo1LeGdg4XDaVtgsdeAWmXuCdE",
  "key11": "2Nm8ZBWbQDgwzFcTpujERKxjj4jwdGZJqGFcnKefkFLbjBnmdHJUKH3fFijhZAL46RJg1uzBSDEM22Rn4W9DHY9w",
  "key12": "XYQAfRxQC7vGdYqC92sDqFjkyLLLYAR6qwnGeTGPnbm3nF4TsrQtEdiG3i9L2fuabUNMduLMd6cVnLaASnHYzyK",
  "key13": "W9GSv9qhUSUzfrAyFJ8G24RxDCCokDEVniuaQY9MZCpa3sktsS5gtLQM4NfLPCeJ4QrsWiJsN7g6orAiGm1au3j",
  "key14": "QjYG4ReupRKN4e8LV7qyMFkytPvEPxkGGWMDMNXBu9MU52PwLuCaRbGMqV5iR5SXw5zxMJCMp68W8s6vojC3Zb7",
  "key15": "356jvTnmHvkbgJKjpEnVS9owheZgEKDx4uWQ8yJxp6pNBiUEVPQ9z5JS22fnz4dYZRXUbcmUGYi1EmwwrPY4x1ex",
  "key16": "JHptKqgNhK8qXTeEbFwjsAQXPCn7jmXJ7BJ6kxEHJpvKj9ymYJ19Fhp13FGTCaU329QUDNUrGgS2bp5avJ9sApN",
  "key17": "8Z6Ncn5j86iuf7fm2uinWjxtrtramE8kN4oKjPrFbB6PbMfnBDzM86m2TvVvc6UKC5dFihnrqqZxbw33z1mGpvz",
  "key18": "3W1EKxr6MbxniQM9JTwYJBiE2d8MSNqDLctdCyhbbrQakC5RyzGjryMr7e8yZRMoPHfcCkAXLifxnC3vuonaeYsb",
  "key19": "5yFZUw9SzmZyTychDeMkCv79DJQUTHARm1tJQeKtXeumFXU8n5PpfFbX9x4nHFBUGdEeX7Zr6zs53GadDt7duz7Q",
  "key20": "65VmY425VTb6nKCUGRBnQRPH2wza3bzW8vZDodkL68cFySyYnEyYbyjjzHf9N4c46tfwfiEtt7KREKEZznAWSD2k",
  "key21": "5QTQYLqYwNzy5WhycHsu1qkDrzvtimAqR8d38wk914DWjv4e6zvxgKj3Gawg9hrqVUG7jMDpfjuLrfm1r33C9mxU",
  "key22": "2w8rHDfJfPiwPH2ptiDJZk2ws9E3i93ZsEZG3gffgw8ek7F6D8Vek8vhwoQpBa86zZNURdryDG6EsefYEhTK1J9m",
  "key23": "shkeWQVXgqtA3tAKGqfSJueDpNkQyneBCLQ582b8wpPPTz8XxGS8aMo4ZRBV7pmSL8xnDLoGYPhGqFRtFkiCVQy",
  "key24": "2vEU6PyxihjGVcsRU4Ts31mxwUPFUWuN6EaN6Essy94wyfC6oXKZVcjWYQYxs7ktWbDvyLWNf9d7sAKyQP9f22wu",
  "key25": "2QGKGCo4odV7iDA2sGea5wcZ8ANhuRr5yiEL79WA27jEmw22fPAdyFDD1BrBGeLQ6Fh4bHDfPWDWepeenQ5Z3sWf",
  "key26": "2xEQqkESGeunCS6SfHNmr7zVCybevdRuDEJ6caFh8erWB9B1312jub9cnma3ND4BRVyDbGZnfWTHgmyz54AJxVyt",
  "key27": "iyzJSRixy6JwwEqvFXhdj8KjyAUVswsbKLdToPMXvSqhFCkAwbQrabQogLxXFiuYazuavmBXxi8fsDwVRTj7zQ4",
  "key28": "5wu2Fia1tvG8YTrdhXsCBQULyijjEi7nhNrs8wmQS8e6KBhMT9ZV7Vk9UzzE69UKKJ86TygTRhRjgtSibBpco9RH",
  "key29": "3oiAbYMa5FAfyPz2rGFGjBJPwc9oZdnJks55hmcAjaJ7PfYoWgXzDonzpotNEnqvAP256YngTsAPLKWC5WfFsFNK",
  "key30": "mzT4y9UgKpgAF6JBRiwwMJdgwmzCck8pUFrtc2zY1GtixEEmTBachawsDRt4db45F1Gw2coLXbN7gbo1Yrfr58S",
  "key31": "3qMULk91xey9EyN7LKppMgGXAf91wYyKmxnqdTyUKRSCrJALJaf8ginDQEJo9dyCGAxCQdKBWGJyVPVUoDfLBhb",
  "key32": "5tFhF3AKZktnvtxbFu1ckBohbzaHroMSCTBsTLZW2QoVzrhKatKzSC2vCmxQV2umYuUenNGX24pxjSqm2a2JRSfp"
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
