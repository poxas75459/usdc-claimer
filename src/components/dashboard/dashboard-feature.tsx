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
    "k6q9CUdGQNi6LJsvC3Gn7f48p466xKwqyNoDSvQQrsrTwhGbViDrDxXZ2frGTC6ZjJryHD6dQYsBzk5Ao45E7Hc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hwUTFPkSXdq1ShAaibJffYGiRHTp4fL1rNLWNLSwVh9zFVYrCsZgErFNevpFKycLPUHJAjR7Q9ph8PNeVKfYo49",
  "key1": "2UZnLHwNBTmyhbqxANY9E8b1mFVsVjpuH6XKZbYWsM9bwEfSqaCEyP3eungXU9DaQe13esZEJYRoghNzehywKqXa",
  "key2": "5c3bhj5f7X1Lhm3M8hsaxzi2bx2pAZSSDcKNCisQQNykS12Uw15ghsNqheWZJNMKcYwGtwv2zRhS2CD3j2U8X5Fm",
  "key3": "2koFA2eTJwxvR2H7B9MvXzkrAz5zeFCVGTog16DtW2HCba58AH5KGR2mictRaa76pi6JV7g9xJFdTE9uUYrGDf7Y",
  "key4": "3sazMK8ZMd7gbNzt99Vp2GvqLC5McQV7uvmWrNcpevyo2NNUzcHHJjZakKsdfQGvzjZcdhneSU5rQG9tDnWUP4ms",
  "key5": "5FyBzwdRp8nJKYJUmjbN46LgCRwVbudzN7JPJTZnpoWrbmsWSKTQba9KAHPe5XkN8ikKycf4ML7nRZCLuZrrAUKo",
  "key6": "4PiAJVhQZBzu6GUskR3N1A4c4vcQXp62jPJgzLDiiBUSUfDJmU7LBBoipxYAeJyCq8PGU64fretSftr6p54T27AJ",
  "key7": "4TZLDvZxmt5HokndrkDifueZ7SzMaxE2TgdRVARJiDpydVFvzWT8FEQCQtdLQ958VCeFagCCHYSG5PzCUf2yt6qk",
  "key8": "4RxoPmxbpGP6K2Cvf4FqmKdyLKv4Jf4SG7KsmNViXGHy8k8RceZ3RDqDVZUur2oD9ACAZw3fhd3GUJXhRUtuJSyH",
  "key9": "2uiVYDbCai5RVuY7M8qgcAHc6BSZxs8sELgHtq7cZXkHQJjbkMDptsEiCR9MF5DiozBujH9CV834KBfzr2Thpa6q",
  "key10": "3RTRc2zXjbNgMXQc1WdVF7EBZ1Rk8wuASwVpFtMLzyf87CrAPsfxYWSHpiYhvjxdAFnEvdvsfzxbbxwvzFcrg7A8",
  "key11": "5ziBQ6Yr6xuJvaAQ4GndyBoqFfAcESKuZ5y4WWvEA4Ye4DGnDUCSXnLYfsx5ijkrUnDTs3B341hBoD5eHa18YMUP",
  "key12": "4nMRViGys2BeqSAaKSJSmeb5F9Au1CQ5RkkjVAKKMUgrkwnYQxisp9UQ3QMvXbHsyCvLg3yheWfRdCDPrdHaVZkj",
  "key13": "2FivfwBmsJvH1KVyTTW5NE2YvGYcChtcrfbP13MMfpp4CpaFzYk3go1vLBkgVt6T1oVwLdr7k72Y9fcdNvQiXFVs",
  "key14": "4MULNuJpZ7Z5wM8CKXhPXqsRDMPe7ot7RjHv3PDXhSooAmXYToV8uTSoiqEXLJspeL1xiextkwD9gAGAgteeuroF",
  "key15": "38SvQqzf7E3W496XWrRwfyaRj8Rtiw81HeTzELsvCLAGg9JXc25dvobdFp5HqrjEMaTVNV96XEdCdpC2PwTjwmm1",
  "key16": "GEcxQ1NwqjM7ycpFeaai1YTAF7aS3QHWJ9UHToqB8tLvTNSKG9FEyw22Y7v5Ep4XnF5gjZxjXuB9fStrYSFAZeq",
  "key17": "35Xxk6DfUs9GByRsoKzg2kh1BGu5hSDBXriDs8umYend2hqvkjQzSwWcWV5sVwL4WJ6hqjsogkLodexUaU8m9hWL",
  "key18": "5jAa3WdQcV7xMjHUopGeJVnQTxvqivCaTuuWSAYQCJqnxbSnb96xfoGC3Yv24cuutsaq9VXAGbxc4D7Btcvt1Jym",
  "key19": "4SjMDF5psUU9NtgbGJsFEu6QUrnj7Vrk6QdP757nDRgxYYKJ1kgq76U4QKHiTemWg76nqgu77fJpN2ZJB35y2zBq",
  "key20": "5V6pC2VQoHubifQ6YXCU28XBpGZHNtj2mVMvvsDEotsFVRNuzqRuzK1eU7GYuAoi34DpepAUofvRtBfXcvUVXo84",
  "key21": "5f3SgE558eibnXdX4ytUsUSBcM6dWJ7TpeNvhSyznxkQ4NATCjK88kPup37AzFz3QWa4PxsNBQXaGYCE4YcjbVui",
  "key22": "47AoWFzXn8u13TDNfoaJGw6cn1XMd9f3phuP52ChsfTA3qgUGrvLTZ4erZTJa7xjSnQZo7znXkscytM6x9CxT25p",
  "key23": "keANAJc4zTHVxuV52XRGezR1kerAbyEyFjVt5imjJDx9cJuXkpsUePgtPMAg8b6oxC4FwQpdDZMUyDjq749D8Fx",
  "key24": "TMYKd7wJNuvjrHrVfXEZJZaRZGGeccquhFfXmsLV1fkUAaEa4V16NP8fy5ZUKoibCodXgrrpqW7fBLpDst7wPy8",
  "key25": "5p6NXrdayr396A6XUobBzXaSvVQXtxVTTnrtdYvfGQgUhetVxhK9q3EMsAmDhDH5gDio7HAMRsa1dtY8QkhELykk",
  "key26": "52i1Zh2rxMG1BWpZczRwdawmLxQSkJChYJzsXW47avF59qh7Q8aXvYPnu5aXycAjSjENfmk7Y9Ha9VNAMHQtSWig",
  "key27": "3R8p3x5h7jCFCfRan6j1e4fnTUvGHc4PpxRsf2VMAXQ2cdP5A2yWkSFMW7u6eP2uM6SZ8HsNLU3ZYcQVWj9tiueV",
  "key28": "4ZXdzp5r2VC7H3T7PJhvUTeNAU1KoeSbmRWh3xKhXfkdW9df8f4i7GYkiLRzcQ9wwpJjCqxnB4pAuGnw7VJaASVD",
  "key29": "4p2Ew9ozp1n9jY8HuYLX92CVUHUokYQMgWfTkBMhs48cqmjjL414ERy7SmpUKrG22TNuLUvegrpECp9rhFLah9VH",
  "key30": "fbriKfRDpkGyHGcYstBKRPrUk6pT5233Z3va76UpbkAiRgN9hxT8rZtcNGz9FquGEo82R9ni2v9nzPeGQxEitZF",
  "key31": "4uRpxDERyMgnayp9YVakwZnaPicwrYYVj8dJgVrCptvoviV2jaf6Bqvv1QoHVY9hB4GxtfMLj84wg7FwrAM78zt9",
  "key32": "3KgRqeHDGiiFP1ryvLWmtqJ5iaZUfQgsa8ms6JoCDEKbSiT9urBLVJrVpSnUNJ83R97A2zKKCNwPpUxRUm78XGGm",
  "key33": "FFHVBpzzTRQonuSsmhT1WjMYWH6f44F4ydWCoyqbFdGsjDBGfcwZBXTaCGBsC5NzoMAnAcV317Hpp1vwhRE6mwJ",
  "key34": "5qRX6KB8pZGbZY7fTyFxroZTPzhogsf64y1HLu87sBdTHdoxEV6ha2hzdVURHHCKYAVJBjcWtxmaFDeFZokx6m41",
  "key35": "A23sG3iAmLbUEqfQ6qqntFwke2dtDaDZCsjj31VPsYgrxiyYGRTvaKUdK3hMD86CVcJw4WzauU4FogT6Wo1p8DX",
  "key36": "53gVi1tzfqeyMMr63LuAX9rEfoKaG4nAec6hbsw5ioUeQzcUbH8LcSc1hro7TT1Y8L3WpbvpXgS9XFyorZgbP3Jw",
  "key37": "2qwZXD5V2n56XxBk8kZuPr5AECDe7mCMrASYAgA1KjftKi4JeG4M5gkQoZFqavK9HXFarJLPaN7GpvThbi7DMqgh",
  "key38": "34PRo9a4pDnetAdzA7PA532w4T8rY7PLjCFFaeFQJnNL5ajt4zWtevoneo4fHJpMRj7qDtPBAMjMcFXV8HkJBW2s",
  "key39": "3uwKizWFjNv91hMLPvNnTWiohsdEGYnnx8nwcisyGz6YmQyd6yrTuQ6gWV1jdpW7WQPbZ5PQicTyJqf82cp2mfMb",
  "key40": "54DSyGLgbiVWNRwLxwaVpQThcyFetBTWkDrJwssgiSCwwYCuh36nYjMvCb8r9D2dhu9dNc65KDXhKYVNewDXtz1H",
  "key41": "5m2nSKqNaUQHwfzVPF551XMPWbw7uJVogkUTYUMEyYfQuEjzDr6pzo2FcXvaQr377iV9dmtyY7MAKm3jBfmi6QoS",
  "key42": "4ZEhxWg6zZfSnPoUGixpy4QoXXuFexE5kzQtpEnFvur1LEwT7Cf6wg8E5kBLjT9tTVFHHMF8PUA4DagFiPUKYfDM",
  "key43": "2NJP8SKpUSYLDEEchUSkW5ZkPx1MZe6EQXNr7Zr6qFmSyhBArznpoN1ePjADrRdrfMiCXFthpzG2kcNFUNFdtt5f",
  "key44": "4JFMtQHSVLsRsTufk5MJ8Xa9CppthMPH3H2WAXB14VetcqQvxJxu2FJ4vspSzPRx48x6QWnoJMgsi9gpC713iNPG",
  "key45": "4igRHY4QA7znhzWSTGrEvQYFtYrmJVcbvjm9GZW6fvhhQcRW6NjQeazWmK1Vd92bcntBFLXthgPk98KVqWEcpa58",
  "key46": "nc9jRmjWwGgPRsufUmBiSj5Dv8pZ8EZDniy5iMZHxkcrgwN5p5gjAWwebwBqdjWbDCeytmjEM9faRQMFLLY2PUz",
  "key47": "4UDzJh7Sg96F8MzWMKeHZs1o89XTZQnPkADYLPuQ3dcXnfqeMupFy1tWRfwPPJBTEwxJywGdxTEsWAfaUvhqLVaG",
  "key48": "24BoacKZ8BgjSXwLUY3pk3SrqrtpCFcb4icFpv62gobrf4ccBY2teS3AQYF26RAepCMxUTy1dzySJUpSWbFs43X5",
  "key49": "5x6AtAeosivEyznt7GbhuTDXkpzptLz9dppQQuXXuho8GBHgwWCBB6acypfHXAShTn6XCXQmR7jZFRSM5p3VjzmA"
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
