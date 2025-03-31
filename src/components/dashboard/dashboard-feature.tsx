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
    "4T49j7etc7a1ZV7QJSLrHbJNJtTRaGTPHnMrrM4FMZnkrgkSmPUFYY5oUupY5TYSz76Sm3TQ3zob6Do5iTihSVPD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Nz81zZy7kkUah1HnxyfZs4BQERBuV3DpP4r8SrLG74U2DZgRgxQXZUAWgXCpk1yPJjCkEwZNCyDin9UB5zSKh98",
  "key1": "5mUeUV4DR1YwUiEpNx6A49oeSz3XpqZfiHc6X1YaptyZwuDho68S17NJFP41Sv2Lmp9G61qYidjkMu3ig64GRrVw",
  "key2": "cXzm3jmYEgGpvSEDApExm15jfRxJsJWUBdKYbFE4Xwi4SfjCVt6GVE9MUqiwch89zLqaczfKojAaaurQvpyErim",
  "key3": "3XGZTamyJJcxaG6x5uELLmJjAcUgEhxXLKH2zpQYm2Y8gFPCXhyCJqDs29ZoUMQFTq2M4g4xgc1gQm79DtaoATkm",
  "key4": "5T5HRj2gJRjfc7gmBQKza7VioYRdg3pwBV8VVyW62uzD3MKP68BgzTCRZzB3GeTtRGFa9zzFhgWkJWdGrCD3mfnc",
  "key5": "2oiQa3xwGntkxvnJF6ykhET1QaVmN2tvVoxeH1maEGzm76Gacq4xSyry1CRfP4TJ8Y7NQKavshkDCxLHMjiKxxsU",
  "key6": "3bA9U9BCZmfZmjKrhD1pGAp7msqWw9qubhiSSpcePJhd9atcsH8bKcXCED2wciA7ebBj4h7gR5v3S1Cg6xnZv5KH",
  "key7": "gv9RMDhkhbCf78w5cmYRptRnba7GGEM8cv8Lt7apkhTjPo91RambGguGnuik2ALS3KcWf9TDem2EN13JbrEM5ZC",
  "key8": "5u1MYkpsVS3v9XtUhiWQ5zHGvSteFgzS1qbpCPeUZspMjPUgrFHZHDS4EQpUcXZZh1AhWoUaGYCW1sNBcffxZHDL",
  "key9": "2i4Ypv9HT2D1vxeWCDh3vaXbxDYijetWcX9CJVC5icgN7n8gKpYKTUFvhmWLddWPoGaGxJSdYVqd299vPLbrWnuT",
  "key10": "3kMrAvVBy1h8aDFAS398A7pYAAwqxPTdsS6DKc4CU5kvNcXmHfucMr7Z7Y6htjdVWJHU3mM6LMj4pxMrENX4T8Ue",
  "key11": "mkACp5fM6LyhgLHc8JK1677jgPuBzPVRnJAuG8rfrhJNDSicUMctDxLr8ngpfmCCHP59FvCfGmq6vnDKvqVjW7x",
  "key12": "562rFevwNRXvJ1sDKjBay9NuGoTyE1WkP3RnXRkir27sJ2kwp5UU5GEc8MwQViv2K3C5P3Xpx2nfKofNit21aPyp",
  "key13": "5GANqqkE1KiA3LUVCGQ2nLhKWKPuZe5rhrZr5RrNrGvwiiFZSFdGim9aYeicYxUYuqmtSgHJ1b3kJDUHnMSHRppJ",
  "key14": "2owB4oegBRHnG23zJtHC8Ldf52LASduYXeXCqUUFaBP4KBPuZeQuxpaom6fvarg56PvydrWCQ8LJfkTRs4zSP9Hp",
  "key15": "51nRrRJEn7jpFMupixfL3qVf2eLawivNgxHicUxUuUjuyZfmWYw1GZ51VmcA4HgNoKy3xhwZAbrUfngeUUpYfLj3",
  "key16": "2W64WGFYVMvdhDRYjyjzVd43CrbhghyqkMDF9k2onxkoi2NJYJiSxN52HxR7jNdV78mVR739q8RZ4qyvVYre15LZ",
  "key17": "39oQvtWgDTTAvFaZ8A6z5pxr2UW2ZQoRzdVZBguz8QV3ELiqz2S9uDfr5FdArmT2h6xLftKcBtj1wFt2ocseJykd",
  "key18": "5PrRFfkKiYoyo2Rk8RGmJBhokEJ24mnyQSQaaxtr61jiKNKqU621G2SwK71sWVb8KGSrU7vYExpQKHHKsDfSroBg",
  "key19": "5S8UZ1t4UEFCtGY5t9AZbKqLBBc3ZuTLu4UcfVcyQkVUvn5DAjjX2JhHSdvsQXr5AJgS7ys9CbbwYXzQXsqwtw4k",
  "key20": "2YVRRYoZAm9VnXqa8DYkX2qrT6wS49KBxbV14fcKmguzDhQQkVwtgGXXW5qZtpFsyzwyHZqVdTdaeySmCt5BqPco",
  "key21": "4Y41uJAjqLuae6tyu4qtnR7eNq378fiavtZPYQ6EqM5mC6vLGvxqhgZNPvufB3UR4a4xLJpoXUBT3nEp9WKK69yy",
  "key22": "LbMYnyGQu5gpYbq3xBzj3hDXpKFZRLksQqD4TGXytJcqW1w8W3QYNa9uJ2TSR2eS4q6s6gRU6zxKSG4Dg8sjzHY",
  "key23": "5Q114kuUKBPQr8QD4RrW2EgybES81TkRowZ7PrUZJMA8LrmhzDZGJ65Fswq8VyQ6mT214kVy89EyU1tRPZWANu67",
  "key24": "3Pre3sQVVKbUNqzv1NcZ2wX8Jb4X1q9bXyqE1JTrUpBzgcMv21rbhzVTHTSsDC7sYDLNH1u9wT7rT6ydJvsGtyPG",
  "key25": "5gzJHJdDwPpsPJT5ypmJbgSThxpYX2ut68tzDyqnA8e1YANhR1RysVaRrM6rd5T3WpnNTMmEt8v9Cg9mVukcTsyL",
  "key26": "2rpa4Q9g5wqrZytzQqgDhtovUqEPb3ju5rSKywCe4pUy9GUUngPubcoh1EXikpZCRgcCz6uvxjMJsFdGchqLA5ae",
  "key27": "3pqtCvc9eoX47arP9kofJu3umxodEWts7uRHE61oxMU1a2ZjvCvede6kYaw7GF8QiuMHvuFDuGfWAK9pNcK1Kygi",
  "key28": "FD929VxXPT1CSQC53qcLK5cMB7sFdN9NwgycsnsEAoJGmVMXpJ4xerFygTdvCih4Z7Vck12Mr7fG4EhTKpRK21G",
  "key29": "39gz3wo77rtSZJSX95LpsGb9LQkcNhjKJeNN2kdwH4vGmfaeRhiockkUnQKJdCnzYYtSTRA8Ez9GYSsNEzDhFmDv",
  "key30": "4nFCS5o7uZuA1GiS6DyEBNcV2UAWdgu6fzppGcEfeF1sMmeFrb7hf4pvXCcxTTimGBkd5Jivnv6nn43wjMAAzS14",
  "key31": "LmbTUU36u8pXTw2DCksmeWRr1136LH6W3hq4MUwWuAdcrghEeSEkXztVqVrTh9rgzCB2NRmjys7Gh3XrfJ5Fkf9",
  "key32": "3kvRatLdnYFuygPSD3r6ZH5sqwz3UP8cTA72uwvWSASevtaM8kiGBqYcS3pTiA7Lu2NGhkWbNyKGfG4xVttrzzRa",
  "key33": "4LWVCNNnoavCw1YJdec4Xs1o6M5g9kMkemouqZrSmPXyDUoEZt7qfAW9Vi23LezkVHH2cfEirNQgwKyemp5wSECf",
  "key34": "2TmQeb5DLQ3L1tyQKhF57nucMtXdLH6D3u6pxH58VPdo7VXsDXLBt2QgtC2EfiAnmfTRnAANuBZvjcqbZadUEPWL",
  "key35": "4gA63iV2JcQfS8vypGYJcNmP9k9xZBZ5tXHGP1UQFQjjRgztkqyNYhdumMKMmKYiYMyWJqfeETNFT24VowvRuApF",
  "key36": "5fsgUdaMtBBhD3fGeFchKnce1beTr652FwgPqBML9i5PmxJ5CiSLHN7KLBNFwRF6Qst89Hi1qJvzkHiaBBXXtzuy",
  "key37": "2WutbxwhZGfwVp6TXpeDSutrfE5dLWD4dKcyQ5d4kvDpTfYUigvQcXE4wkVERcYnjCZMhpYNXscBGKurMzyCnb2W",
  "key38": "3upp1Zcm6eg9apqAHbwfuZDRUX2ULaHHQCdA8VZpSKqSr6RBndKujdnvEsAKGijSQcyij76CM2tkDqN5h7Vvtecd",
  "key39": "3Ykcjfd8YipVfA7JdNQK6kBQeUyJ4v1usqowGPjpBWLZDr8CHFHyQvSgEDXTJuytxqRpCoX9edGv4pLizS5Tyz5a",
  "key40": "5digF4eDwv4KHDxfRGqVHtYfNJ8aufwhMh8mEc83CEj2RiqC8ju7F9nLpfYMB1nkXz4y54oLbY7jnysr8tczWiPy",
  "key41": "5QK4r7WGPbwqkXikVCCc6wAxkoZ91vDxCaa7xVWJF44Qu1AAtezMUPhNZ7DT89rx7A7ASjbxGVvM8PiseT2nA6dw",
  "key42": "5XLZQFbxRy6LkUTmxCJhRbnToSH6ZJpGWc24fqyQYp3SXqKyGAjZNegrBuR2N5hKS4mDZyKVH3aJKXJ8wBPCbBSn"
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
