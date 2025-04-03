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
    "cgPza7AHDMmrds5ch3piJ9Wz3GTaiPuTBShNwssbkBnEoq24A3NHBurMwsHuRkJg9s7zXPvxjvoPKMrxZQamueV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s5WmFmNSmkDWXnezbw12ruXzFTx4S7GxEQgvS7w4b6XUJBDyMqZTdPdwDZ8XnsErobpnUsTaqm3a42g1RvjYuMD",
  "key1": "2tNfHuPLkgPzr85q5NcVsXGk3CeNUWSc7rfzSnXEP584uKL7y1mmds7mvkHDick57T7iwZ5SLw14jKHXYzVxPP4S",
  "key2": "38NTB6QcFJXf4GiXpbQxZ3igEEz7yyjcssuM5kCK93HdJ9g3kR16DmoqZXydz3rFxQFA66bVmh2uMd3SaAyb9ubu",
  "key3": "nV3FPqWPHNjyUXaHm2XFuUVUpUoU2U36Y6SuP8GxaaaN8wFTA6tkdLFFchX3t7XLYVaDFEvvkPKC7A331aX6BXn",
  "key4": "5kNeKpJz1ieqkXebb7HrygAFp3yd7H3JHy1prvwCkmVsswHPrF6YK5w28QjKNpNWBWnM6QG6CyNd4HR4xrSw78WU",
  "key5": "2GRFYk3ujKiHHMzw7ywb2LR9Wme1QzevD6VQoYaeZkWiX6WobUgv9Ar78d1QCkckZUGXnoicj4XFJt1aE3qdGV3X",
  "key6": "5M2LeLG5DP3sATuv13eQq1HLnqJttMReu8Aib4aRmVkp9joJ4kiMDy4F7Rv66APwT9tLCSKESQsHxNAiL4QQkLK8",
  "key7": "48PZbwHzuChQ3dTcTBafV6RjtTdL6UwTbxez2oDH8xfkeb6oLZ3JsjG4Yho6456zYemefncnWNVtrYhMSsujCDdV",
  "key8": "32oQ9yBB9EBzHMnRr1kwwYo47k8jqdUxiT1cjajUK3ST8yA2X1dTCTTwHevN3URETbkgHfrztqS71eVgpqwRjQeF",
  "key9": "2Kv3y9NDPF66yzpSZKd9nMpxhGTbTEA9Ny5SN7B6oPePQFJsmWgcQSd7VVuQwdqKrLMJ17ptmT7X7ufR2zuqKt9k",
  "key10": "44QnUE17pM18PFjGBK77d2rkX2QQp1PYKJMcEjQdJ3juYspK9s6dNYB3HxbHhwihEHbVCRYs8e5cAmxn6NQJcgP3",
  "key11": "gwf8J76HJqzkcwSmdx1QauJLDYB5YUngQMZmx13rWtvv3Yp1aYCZqcPVEs2rsA3svrM8WdNGijwVCn6T3Cf2dqg",
  "key12": "2FZGj94MCFrdZS5LHbzTWHiXEnz7oRXG5d5mBWBtJuxGgu9PxXw6Kt56yQ9MQNDN1PosTAy1pibDXXSSdKuecwE1",
  "key13": "4F1rthj8F8Eezohctups79FTugEJUgx1ttq2gGUUPZca11WgypUFSD8J3o6P4GqQhReTrMct7EPBkA4sEgiv6b14",
  "key14": "2jj2Fq39gAEMspJQxmzwYYJhx53NybUjYZifAa6fck5nNX1P1NfM2MubXXubkU3Nt7762TvrwoSyRNGYvYDHmrXD",
  "key15": "2taXDRxqYNSarVgYD91zceTx3EiQNSCJVL9qijLdc76SjyscpoGZM2gG1tJSJ63Pz6M7pXwDJG7iJXxhmxxuRazF",
  "key16": "3godNstAfK4PqaQkVNTKgPdR2xgrGPFffK3hy8iQNmiTz42kxJJMVPBwfFtKvVQ3tu4v9e2zXnjaHUFZW7UTvPom",
  "key17": "4QNxhcwFbwvyuNRks2YcpQogzSwmC5fiap1W3AUNYc8tbCpM25bLCeiRT1thpMoxDFPh2zLivxAcHJ62NciWH18n",
  "key18": "67SRhrQczSmx6ueeHPtdwMQuzCTMiWyS7DJ9TdERmtJBuKrGRimckHSe99vj3WXgAzNEZmJPVJka2bU95KGY3jvq",
  "key19": "B4qxibjuKkrTVpJRbuGqnST6ZeDoXACyFTZvhXEG4RyhEgHyPJ8qttb8nuKRLXfdfCVMFjBMHnQYRf6AcbLivP4",
  "key20": "ELydnj5Ct2PAFvrPr7VqJWtx5G5Gvfp94AM3CQXqhZxiGqGmPQmpmJyjzDFVBEhdY3idQeJJRa3YH3Bn5KCMXv4",
  "key21": "57LhEiYhbMnHLWri6cipnc73eHm4wvgQWPTWhF2zCNKm87cA31MhsGrtpQDi6Mqb26qN8ygNmRzvdXBuSuq935zj",
  "key22": "2C8UrHhtRtRV1gMsyhRXf4jGWnHXak7rF2dEsRSVENU1mwbL6j2VGL5KHoF9AbhXpCTyDCk77TMutcCg8fK36cGv",
  "key23": "5T8BXzpxLNCKrome2rtY2MqPUChjQBYndCduSHsyYJ1BY8zQxFtjsMtdT153jnw1QEgD7utgm48E4dygGHQM845d",
  "key24": "8Gec1QmPedB1fffKwKsbyj6htVbeNHNYAe3DbqceG8AyncJC7bTc5SoiHTKusL4cpc6ysAbKHMkshoDszGvSCgb",
  "key25": "4UR8qTNYZodUrRgCUHYpUWifsHT5dFcdK5FZfeDnvqTkXCecMAWcAGj666Hxuf1ZL71u9dqKWY6djnYYmrDvmey6",
  "key26": "DBJyqDZLVnDL1azykG4GJixNaY8PhxVK6jV6ahJ2cv5zJnj2DR9tuCYYbM28xTCNhLxeSbgMMa8fgG1BaU8SWEY",
  "key27": "23hQBSM5bpgNFkcJLDEo7VN6n7paeHgEAh1fMZkdSLvRR6bNGJDvNczXFiaEn9HKnCAYEkjmu4HLGaKJQ3do295u",
  "key28": "4bSKwnySTfbvSyF2igZhGkV15nsyjQzqkMafaEuUxJj1nrv3GQ3NZQ4kVXycoDX2rsSidJZ87VxWqZZixjEpXx1R",
  "key29": "29FiUeYF8SJ85dN7d3wE6PyKYscTmG1Rfpqy4WUgKn56SdHuGpmQZKgK29tvHsrvuu45vntfYokaLGjsMBm6JGCg",
  "key30": "2NLifw8MmYPPSnCJ1HGCK1k9Jc5caVQYiGZX1ubRTfULaYHwQWp62uRTVUnibog3mx2QmHN6VbDb59ePYPbNu22x",
  "key31": "2sFs4a827Q3aKAjgoxmjwXxMMNiSpYJeYUWzsoERQvHFbuwuKB3pGNZfE5J92av79u5Y3cD5zpbU3eZAN2mcchzU",
  "key32": "2McxArMyLcABMpp41HyaMzoUqoWyktwSMuGt91G72BL3qWzTDjTXvtSGLLXzhQjHK793LSEGJnMU6M4rzEe7Cmbn",
  "key33": "2AaegmCxNeVqz1C9kvJgu2iLCpmjMRkJXm6cDZYGoh5WLVJxCZ9VbNZaYYWoMWpLLsyNrf2RHr1bNUfnFBJ9cUAM",
  "key34": "4MwL6f8jCRMNQV8A8xmqBrSK4XKPDenEz1chZ2smCkA4MjhRSnbdyXpPkFyjW5We64NqkoPsWR2haXCPDZ9psrbj",
  "key35": "5Mpj9Wwk4QN9eKQyCnqtkZNpr7a4rzoYnZXSfxHgLtdGLb6NfxyyfjHosreRckHECZi2VD9k3fPM8sJttQNaHyN6",
  "key36": "5EkmMprcvDWdxDDLYB7cHv5x4cVWcPvKsANHXTox3HPSdiKZiQe46fShyZdb3g2AXzLZfTeFF3iyY8dehUu3DCUU",
  "key37": "4SZLytgFev6bJePFYptPM5CB9wDMT5NccYmum1i85erHAs1QZ2F41e8kH8cE4HF6TTLGneC1LwAAXwDJaQAPeyrD",
  "key38": "5dLHp9p8vz2YYMQPU6TRoC3SpNWnQEfvrio7epfmZcHiqzA2bUSEs1VohDUrpURVJwQTch6wjR6kvgAdu6bXb4hj",
  "key39": "3AUDKyro8h99mtMQyQY7vhWr3ZBs9UonQkfU26snXS5bg7h83rmkrmBa34bvxHQp91MNVxxDjpTuJd8uQ6LvnKvj",
  "key40": "4VUD3dZH6LYXTNmhNHre11XqLYuFK6wR37XWNX3uX4jP9RuWoab5oLnWJDg2zdGqJwp796NR5PDS6bcuKebaE9iy",
  "key41": "4Nvd7usf1NHc7Dgy54FHrcrtFB1UXWYoWm6S21p64gZ9ugkYXSszBXtiZj4vHCqJxM27eSt2WhirbFRX9QVrVc4j",
  "key42": "4y4h1apFoZLtRMT3RCf8oKi4MzMUcXrf1QdnUKvfY6qbZuPjUg1G3YqE9auXvrR96tiqA5MKQyrLiXAHEHCpDBR4",
  "key43": "2yMK1Rj2t4tY8KFBNcBHmihKvjfMBywjfcvoHEKWsLzWikyQZ2fgxW2n1h6hCUxXHh5xUPTyMGSt6XrgVQn8zte7",
  "key44": "3PQPRDcE2hUEvjSzkFGxJaLAoYytvuT3o1599c4pM3tKvmNNbfRjMW4cEtaQxoheVQd1VB7iAc8sdpKhcGWD14Kf",
  "key45": "2dzEiFc6V7LtZpN4CfdpJjCARYXXn1ujsbxdzaMNb795CZPFZgdWf6x5H89rnzNyhT2SdAfJncGAUwqmBzbyqdFR",
  "key46": "3i8fcmRFwoNPQ5ci7qZiSwbg89khc69FLrhsdtopHhKcpJtoJqePdcATRJpqsHVYfG1DCfBN5sa2K1JeJqpEKNWZ",
  "key47": "56KNSc26CEujrqwWiZPS1RforxTWYwHgXjCybVqEEMJGXqRLkGxRe6U4FWtZYRFvZFX8uUp5PWxvWemmAN2h6vJG"
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
