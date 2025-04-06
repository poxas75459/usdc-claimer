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
    "3emzkZ6g65ZZKggvjpP91eVtfnrEYcVdFbXLxJvF6DaJ48MisNunMJNW2KppGU6Srbsyq3qJ35rNbK4jjtDYJJaU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35Xqhke8drMfaypP2DbyhsDYx5AK2e9WwP668pyEufpcvZG6ufficB9uibxuV6gHrz8fDf7zCGyQAhmRj7EeyNwg",
  "key1": "4frPcaLtrRuY7MrzwMgzes9C1TZX8kvLFogQTEnoskwHz7cARZvayU3XmVcG6GyFmtGg9CKjEH1tjv7XPTFp8mEn",
  "key2": "5jUcatF4uQRLKGV8SQmQY3Var49agb1RFKSjwmwkGgZ7ugnrdnLR8AovX9WSmvqhX1c7iEbTs7az668aZzgM32HH",
  "key3": "3q8yjam3wiDuf4hk8Xyesre8HX3H354KHWkv2xbdeJfrao6iN5wJhBuJ4FHDerFGpVY2FfBn2D1b6gsguxbBKmTo",
  "key4": "5bhbKeVSpRs1dZWVJqRGs6pWPMvL3NdA4rNqRWvUpjEmc6c1xXC3rGCJN7TMiG89EKyuLQdBTPpsmAV2zpt9NLVh",
  "key5": "cyfFFbnX6TNZ5QUQycWFWQHE6bEmymKZ1T6VtrnAitEu4JGv9eeucGjh93iXzos1Gt5rUwrbz4acDeMTJ57dT2x",
  "key6": "2dLjxivRrWjQNcKb2YsYH27P9bBnBh4B7SDHM2n1FaQyUGLczBbbqx97XmBFn24uiMPxW8sdS9YjNUasGCMshac8",
  "key7": "4FNQpcLysvB76eSNau7r34JXxPXqpApMehGgThV78jZabQYyhUuZ84uK8pAZADMDD44owhoPGfBajaKiztfiXBNB",
  "key8": "48JAk2aZ8dcCWBvTeVAbQ1iwUVarhEekREiaVNRMaXqhd672atdece639wc23c9qk6dF5eq5J6rDTo8Z5oxisuza",
  "key9": "2g7Z1MFmZYiJ7VNw1PyoJnAmkiKkdQ5DsiwNNPexBotFSjVpb3QeasprFFGHqxMtRJhnwJDgmaKzRq8ywEZ9ZA9i",
  "key10": "4YVkTf1XTRNZJuVsPKpeQ6TprnpoSPtdb74HJpRWchZwGWcUfa2KwaEYXwSwcCmNcKaw2rQShKboXVDRjTbRhziu",
  "key11": "3nVznGNUUx8Kuy57ioFVfLpKJt8kvvPFHmF2YeNsBRcrZdaQE6eQGeNPL6ScTxgMd2ftMT4NJoFvZAhQcU59Sh1E",
  "key12": "516XYoMdZVJiwCnFDJyYwND3KyDbJ7vt7Coo4PJTU1nH6CHp5zex4sojVY9AEMgwfXQp7uQ35Zxtno7tiF8dnST1",
  "key13": "2vbyP18gBrvRW6cYdwdF8G6wJw19VWDrt2Gst9K5AApGuomy2xA5xUj23HYeAQwhQqAHjpHzrkSstdNwbeg1NQRH",
  "key14": "4FZMBKQL3QpKVCh8rBvjsWFyPFrztqV9ATcZ4A5DFAVaiAUtawXd2esqje9TYuc3hCppZkCqsR8vZPSQeQBgDrs5",
  "key15": "3irmPmrsasa7idCY6mmFKUpHumF7s6YYZfBKDFMr6ujHBPVTHQLYzq58UuLpxpQ5BjPNJRTzTML4y8efqWtVEQH7",
  "key16": "5guikKtNJj7wDDhEeYfSMD639RAavRude69t6NZLgYKGLtuaSJYRdzXYC9Ln9ckaLQhhhqKMJTo4PexPvequunbw",
  "key17": "4ZLqgYXG5GaZT8zfhu9ecymCLn1a5HZ4DtzQUb61GXjhf7Q7hVMBrTmABb9BzfuAdgxWTpsfLnokJyAm3TxNHDKH",
  "key18": "7Zu42bmsxsdPzxdbihTbQbNxHeopX3TdAURUzCUr3T4kckqNJpheo4L4ai1oeGYT6ebtY1vhY2rL8g6obqAXLZn",
  "key19": "YoqBJHTbvKC4F6FRNuMYt3W1YbKXC1avawQUqejdfswy1ZZ1oXBLXGvbTidt7iNSUidtqFkzoVFmodaxNteC1tY",
  "key20": "32KeFVUr4uRths7GVp4chf4MdugRv7oQ5g4BieNfexT4SxKRkT9maDxTrJQgMmF9hp1xtfouHz59g4zvTEsFss2e",
  "key21": "tyHT7HjrspofKKPNiRp1Cz9Fs4Kknea6tT5WSAsG1GCdP4zx13sTSUkTwbzvoEbSEA7GEjJcGqDhBW7Q4Ty18Ci",
  "key22": "vUMy4JKhjRu46a4j5ZHJ7WB9bUfQmDF7aASSNsYSsfm73t3CZwnh1vbkKPfbZjjXfPJLCnrdUJFnB4ZfrPsTd4T",
  "key23": "5HKbzBtg5MijhMZdumg9GJZLGuu2TGb9sj7Wx9xDavU8sEPdkz9ri36SgYeofT2ndD15AxiFJUc5kgJZxpnYVctk",
  "key24": "5Ky8qDGC4k8DNqK49E7V1btnzTaPuomW8qrvBckqB1TbZRPmYJDhd6vX2ajuZRixQYXyxFXyqeZYAf9K5wvgCwg1",
  "key25": "5QwZkEpKxqQeehEyGfm8u2aJ5oDS4i4ht3oK78NTjzknsZ8NG7gKAcLkryUTpbaZhuB7ix9CQ98VxJ2B49NGWthK",
  "key26": "4Rn6HpPvKYJMLeXjiU3nE3CY1L5rL8cDDQHc9BoyBMV8xkCR3eYyMP9k3bqyiKJrfmQbfhCC5Et2NHs8qyu54ULs",
  "key27": "23vhdFaWDP86Pa9SRWXhWZP7GU7YEr1THbZeka4f8CBpiBgLpdjrAYnRffLZ3P5i1gu5dPLYncgriymuhjTygDap",
  "key28": "3cno8xjv3JE1eTWvrgiBPQJUjbQqijq4GxoxgHxw4FR7u1RztgcZ7sL5qv922mgnBWXgz4qvS2dRb8MDf61wv8Nt",
  "key29": "49oBvETJjudAYv7D1gUixZJ8QGU7XsL2A5E2XgK1z4mRd9XRKEtqRSTDfcpsEngSdjsePdc46bexHYEyGtqShaT3",
  "key30": "2B5PZSDfNpJWhjazLw1Ag42C7NVaJH12n1GBEWpMs7eA2qfSYkszggGLWFQgnjSXBN4mkABgg9UZK5SnmpusGeXq",
  "key31": "51D9wvMcqTCAar3QkP5MWND71TUJvehE23YsBF32XoiuD7rRJjJDvGn4iG1uXVKvzvv9KNtLkqm5wCN2SSeGLEgH",
  "key32": "45q3AAqx7XdH9JfGgQVUTAPAV1FB9Mq4UY8tZRbYt4TJnyqidzKpdvvxbBE2dCFwuSwZSi4U3ZZhghbTjZbQxnnf",
  "key33": "46VYkbTrNNz9DcGc7CKRPKckRsAxGExza9YQncYTSznXxjTDSD9yo7MPBzK6HVbYbGGL6XCyoH9fF2qt19GH1wVv",
  "key34": "5eU33HHahymiVfKqaNe3YT6yuCKHQDfDMox1VAKvZBTMuGzkXVx7C9Qeqa6VQW5a4zgFSfwvN3Sk6HKkZe1tZSky",
  "key35": "2ndJzDdmYPTdz4en88t5u1kPKKFP1SKdevoWeCXwT2s35mvYVbrV9CsWCK32UojiSwGPU5vpnwckj64tUFFadrst",
  "key36": "2fVho7tYoiwjHKdv4qa2hpWcsqBRcyERxaaPvRWff91H8qqfMcekg4nbDE4Yk8b3gsbWwKkcgMRThzpVyu1z3GjL",
  "key37": "5RLoQ4A655Sgg4xnzw3i36YoceBTqEGHsTaY4J3enqZvga84SFXUiCZFWJQxzasRgiWKeurBDrwZJDunT5xtxoU9"
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
