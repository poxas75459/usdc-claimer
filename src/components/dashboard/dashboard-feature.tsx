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
    "2DrVpfV6kLGFwV96qHfUvULLhV76ceJtLDd1gDGa4KDe34z3iqzzmvY7XdrkqPXUwvPeU9FAPQsChQAbn5EkGLN7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YqPD7iLswNY7PcBes7JQvDV8Do2bjVQagu4HwEQFvcyc6iGPNfvXhEgdRGWS7oBrMMfRctzYfZ9aRLvTke6KhDQ",
  "key1": "RHRhHb4k73w15ZX2aycFJzyY3bAF77bzxmQehQDWUtq3hy7zDNV1mF5wwEtHkHWkgEH7eskT9z8nQGDvpLu7dZS",
  "key2": "2rJsMGj1XEEBRb6doii5opc1tBgE46kxEcDjKeFCzFFi2pt9zSWDx9o6ApTrEC9SgEe8Z8KHKkxJpDADebLnnYHT",
  "key3": "42Qi1rgHSw9f1tpyD3D5eT4GiwbD42se5y4G9kTFQgZJP7govvNRm4CnEy3XVvTmi7HFkwsmwPWkHVSvYzewSpYd",
  "key4": "532Fy1Pc1uzahcUwUKqZb1svYTAsyQPkM3RxDmToMEDVpsmC4CGGtpMzkHQdfAZYbNitwBvVNxdZuDzzfycP6YXf",
  "key5": "24E993b6HZpSJZRXsf6jKDjLeL1ZZ8KxWwSyj13V8k9Jtuw4roagmAMZoT1fekY6d2UcZPFf21S7Mr583RcfXzf6",
  "key6": "5bt8ATF3PKk8zXL1QCZcYef15xnYTeVremY4mA9cizkcZEEh8erfqwyvBMmrCv1VryY7bfGRK5ReubCY7KzrALTK",
  "key7": "5hLaxrmWoZXUVPvbWjbcw2S8ygq4bu1pv83QxFWttHRKf1cv6QpU4JAGdPXxFeSFBG2cB612sSX1wWFnxbDCnMUv",
  "key8": "2k7YNQFAgDbwC8s9rvV2nk64Rsjfuyy9BjKYvVJgAcRqTkvEqqL9eWiGkishRAJwysAACTrmZhFifrYt3gE2qTbe",
  "key9": "u1Y34r2fn3V2E7S2CTvuFckavKASjPX3XYHKo2tfhjTBBmmRwb6xgjvtisAapMzBPVNEnhHNKeG58doTzy7iSwx",
  "key10": "5grPQeCULJRksAyFLVMfjbUtVLX9anK7XYE4eWADvPU6bmc3msgX3sXdycTwKQcHcHEMdSJCVsr9EcUJzaq4e6KD",
  "key11": "2HyPgEmkcVZabCfsVn8JEqmssLFcSkQr8tABxrAdDTAD3utcJsv1PzB9LV1avrJD7dTmC4Wdhvnr2gryXMyGAYdc",
  "key12": "5wGKAvvrRmsvF9WDaitGw1oLPwnqve2cnHizy2uGdyhApHnhqKZSwBFZBgBKSTSv2GDpenUmE81LxQuhz9Y7GDWK",
  "key13": "5KHRSBmVH9wJV4G3eJY1vFTonYCxEeUnS726AMnrTxkr75AY1QZF1Bs9epmWmW2aPLtRAEABvWU3WainVjDEjfB2",
  "key14": "4vcBzrD6TYhsh7862gCcbivmDTCLcpnvmT2HGoFDGmGvPiaUBwTx1CV7oyX3G5mdDHs6K3dfhSmXcGs3b9GCUBaS",
  "key15": "569PWyeab6RHywBGvXVJFDCy7jw9A4ziSJe1Vo85Y6GeswVEsKsnB3JLsDdPfAturcU6zv5dHxzP8z4JPChYgutB",
  "key16": "5RWxRtezwGhttJE3m8PvGjy8UiKwQiJB3K2c2Zqs7j69mpMEcpm66LxhDh6L85xwMhJZpvuShGR2DSbRivQ4zFQp",
  "key17": "YQRXUg7E8rGfp45c8xbw35QbWPac4BtTaFLPXXjQmADg7SLPmxMatH7mzzpaDNnb1jpAKgdePBzPxnDPF4CGwKX",
  "key18": "BQYcKFMWWxmQTcJUghGyr6AjipXdiERk8pKevpa528EiZ1S3R6chmYZyN1ghZmp8AYFLsPTaq2s3eXsQSjNdN3v",
  "key19": "5XEw9ocKmUMsWpKLALkEBEqnQ3Xt4df6cTQr6TRNTMFkc26Yc932JwdRLttdLVzTja8EARH86MjYJpTUjZLFyMvk",
  "key20": "5ykEDYvG8vus8bggSLirXWAVP7z7YTmdNi19XQ16g72bs16sbp4B6vNBhbremTpKN8CwGmpdRmQAJswgBYpKfy1Q",
  "key21": "4hXZrEecr1TtovvNngADqVRp5ohM9cRdYw86EuU3VGypjyALH7iJc8JgLoKccQ4rFDby2uUhBhYnCQxS7eS4v8ny",
  "key22": "4QZHQRPRU9kSxw56pPba2BUusRjwMcWykPijt1a2ueCXqyip5oU3bLBAtYHVA4La9QuoUfUyAcz8EvqsGW21WaJ5",
  "key23": "5QJSCiMRW3CKcz6uWgNRyi8phx8KK3f2Zqb5kSqrHuFvikoTqcdDx5nrFDHzWqjh4mGrfWW88gQ957PvjAxSfZNr",
  "key24": "5wX1YqudKnbAc7WsKSGyFbbC9yZJ2gwHHZXUCmnb3mehNy2JjgeRDXcGyTcfapW2QbyiwCSFS7EekjqGQ5MiStjx",
  "key25": "4HSJTN8YUAH9uMncX6summEZ1yMQUorByYbfUdUpxo7jNDRo1znWdYdbWRadPqZukFG8L4ASHcdYsWv9XzFFmjv8",
  "key26": "59n2n2ZoFaso6AK57ZWt4JhyrofswMrzQ13Z6Ndfuhzks1nHgYmRdJ4ttY1PMy5KqHu2s7Ud8bELesKGaYqEUSnj",
  "key27": "3iBu64q2vMdmBXDhwEYoB278j6bDQRrKDEuVsMMgtFBGZt9tYEpiLQj6iWxGmPi415bXvNW7h8uUV7PBvqMDHktF",
  "key28": "5So2ZXkewJJKRSF3GQRSeSHFNCFfQHsWF4EREiLRrpZAEEM2SvzDSiQJMpjLi7X3etfbM9bSr8WatK4vLtYqJzNf",
  "key29": "5XVixAbGvbFvGsPNDFpiGg9Z31guYiDhGMSWj4bjytLKJMFAMVjs1rCNWLnt2vh6hQPdHxxHPt8UnNfB1F5o2syw",
  "key30": "5NY6GacXZ1RAwoKNkVzgq9XcFBLjrXSXFFqgJGdEDWAQfVdgxpcSUqS9n4B5e8QvwjpCiqtZsVoZKKMHqvcLYanh",
  "key31": "3J4C34fBa2E7ZgBYGv6vLdqMRCjaXVuP6yLVUEY4T6exuDk4iwj2T5cFS6biEU64dFdjfDpmStBmJzpUF7VGQYiJ",
  "key32": "djuLodXmBBF6JLjxCHbmmcgJUE5NeMumFUyvhZ65fEryrc6Ti4fas779K2UnujP6DumdpkGXHd13rE2cujKo6DU",
  "key33": "4x7ys8areN4eUyqPFVxPa7NFadban8JFdGsGKTpL5jM9hUL4Mq4HcC8PH1FPDZGAcE5wBqEsTB7TFhCWge1wWwQt",
  "key34": "4jKW1aUZLE9m3Cdx29xibBxhTFK1j7VqaK1KTUyxyiXxbE7ZXtNHGXAjTpNEGuE9inGa4ScQkE6BvCxDGoDiphkS",
  "key35": "24Uq6KU1S3cs7vWDc18tgp3KtxaDvsxHsb7fi4jARDEeudiHn1gsZHjznxQxvS8YTMrFyuYTTybcVZ7pPerNrR2m",
  "key36": "2MRXjGepSpHUYs6m5AQnW1TFmERTFWURs7AkxMyes8RBsn4qs2AQjAzDq6wtRuyoHnGxW2uY3NvoP7d3de8Pg9gj",
  "key37": "3m5515kUhHwGQBEsHPESJ9mTm8beZHrW1WEnBuSN2A5JPMzcLQPbbhhBTZAMxEWXeDnQ4BYSz2Syd9c1KJDZooxu",
  "key38": "46kx1eHsiW5wfgpPwD1MNBJJ7oe7uRwgTbRjDcNDPfadzFfkJMUgNgk2EU6abJSrPqCBRJQ2AE4RodwDGHcEpbtJ",
  "key39": "5gUCsPpK4QktuF7hnCcDNHz6Cb5jYQQVAZUmTc9FYhUUESjdeFBNwLkxFjJfbgZiygkoN6Eqb17dHJrr443iNWJf",
  "key40": "4iMgt8kg3ppjazYfFrUeA2dMeiVx1eaYbxHxWZm3aSe5VXt38AznCo9WfnCQ9rqr1FfY6tniR3iTQSvqB6q52ax1",
  "key41": "2iTjjTQtRjdhtvASRpvt3vbXymxhURK4Ug5LmMAUt9aomx43zbJJP763CKKusJgjzWkXsSasuocQeubqnJs1x7VD",
  "key42": "51BfaV3u1FBDoQya7UvrP9hs4c4F6P98cDMM2qnZri7o4H37gQouApigoPbgsAAPB3xjghwbrxCA79CZXG32xoAe",
  "key43": "3t2CPV1CmwbgjtmkBXoU8Tfi2LUHCbNmwy8Nj9FyMgRpTmYpAHLqsA7S2AEibevHfxePsHGuiLdVz4LX9PUKAAF5",
  "key44": "5Ax2WDfPrveP4tZmKxwn4TwgdG1D1VezKC8HV679QT4X4CRgEUD34PQEKo4GSQjWUREYAQeMeQPPNHiPdsrdLKmZ",
  "key45": "5tX3i2o1e12pyABcH975itYQBdxUAYPsJGKKJnh8mKSDbX8DCjjUx3jXBMEWTxzWMH6pCa1Dw9ubNJzQ9dCC9pbP",
  "key46": "3eZUAy8vjtgMinFVXBRSo3UKz62iZJK1B7VHm9ViDqcC1hfAr3bxHEmuiVqdadyf5kAdVKAis3YEZwvH9aDAigGS",
  "key47": "5Z1eUtgHskxmzFzSLRTNkNjjzBAz2nhGFNpeqUfKVDTF5mS28WEannYfJnJYUN69wCMt7yxL1N98vBvZXaQf7Yuk",
  "key48": "4SRrWXn1RpzRW2iKDzciPhoNC3r3hwEzrsgYWbi3TMgnEQxmD2TixNytudQUiSVMGQ2BjEyXh8BV2xHbdgPJF9D3",
  "key49": "pnruiDkCbSiPRve9dahfcvFN1TDyyhpqwJxRWzkGKsbTMg8jMk8AcJA7JMBMwBHinGLzjqHvje1MhZyFeWDcDgN"
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
