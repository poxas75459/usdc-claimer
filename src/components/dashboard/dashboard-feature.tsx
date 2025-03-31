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
    "3tDECs9eGu1z6cfEDCeD8cnvunYvTQEQ5r2h7XyEHCPmg4kxptkEdN6Pi4YCuSBb7tid7i7EpAVk9qeKQafgrAY1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JqE5NxThnDnNoBVF6oLyH8Z9d1qdeygeUAXsoExXt5GMyPDaXZSSPEJYX5ZNmcw8rmFyfCXuSUoGwUuRso69728",
  "key1": "gQQLFZvC2Jvr2TZMe6R2kCUdBFX4q3BEaz2CKGEo6iojg4CwLuuyFZs21L7yyLyiN6vYWzr8s9ZYEJPpmmga8qv",
  "key2": "3kGwdYd2sLzeLXnvecAecNJzKMaGdbaJhAMaAdjWJjj1PezCLeZuxFSJxRYBVvPwKPCvcCsZFECfzU5h2XJgchKM",
  "key3": "3BvTEVEUa2oxpZk2KMoXYqujxQVXRdnS6VSvCeL5sy627E1ZJ6ihmnXa4bYf53jpvvaKP3FoqtU4cKfKFBj16bCu",
  "key4": "7hhJkm1btjJU4V76heFQTNA5VRY9wXHe4xjgMuFX6vLoCr2GB9cJGUqRNSrMxwU5RBDSLJamZwbBuNGWfTPCLz5",
  "key5": "51agrkHpFCTNrY2skCMUjU9cUMZfm9NypnBAziFdyHvwpVNWFiWob6capsTBrN7t5KWvVAnWNDL4SDYVEAtpsrBN",
  "key6": "3e5gsLhYJRm16kGxDYF5XdWoYmasBEkVFhTvRyLJt27gwvomM76mW12QrXoUHpsqGEkBgyb2GDcFP8NR8oycdyyV",
  "key7": "2hA6B3HFPyYS418K4xfWKo2GdSxcUorenSYkhHUDRmJkbbGt4SQCG9bpktt7HV9d2AFgFHfCNiNoRtnbbSqFPdMR",
  "key8": "3mQKPb1GPnp2aDh3ZsLfbgrryUw2KaCvAo4pRGrQV9otFGMN5tdwveGxgxso4XyJwR623wvThQPyGc3nPEyG4eFX",
  "key9": "bP5L6iHFRy3zLTaoEjYevgRmtXZpx8CbcXJiz79p2ARkbVp7c3ai8BPsySNVJwJpxkhbaAYqPtVEGb1nnZdRYwz",
  "key10": "2K8iDfZGKfqR5V22W2ZPp7MU49dq9n1RDKhcghbnYqhLuaqb9wBqo3ThrGhkMtCT9zuT4aZRavm1V7P2T4WbcA6e",
  "key11": "4VybvoVF4Cm864UDJ3ogmE2RvaUYVD5sWWtQUmtTXXYjphDgD46JzfG1UPEhorq3DdGUFj4annKYK3EiPsHzskXc",
  "key12": "2ejM8VpYpewBc2a5HKnDT71GehRCU5qaD8KFeG5MgTbWyNuKaHWy1mwVDswWHgvyqspYS8NbzKco82YaNUZtCT4P",
  "key13": "2jY7mq4UxB8H5QbuJDrKtaQJWnytba8J2jHbWjYHXxqnT9s6AuNMMz4rjurGe217rHsHiXfciQs2NKWm92UmLnC8",
  "key14": "2rog76HvoUyaaYK5pAneVN8c1TprvhhbX1HmFUTmwT4ydNU9EK1Z7BMyXKg1HoqzdrFhYhQL32YZqGrrZDmEHCci",
  "key15": "5pfenFt7k8rcQY3ov9UyvFPstEPAvGNSHpMSyecCspDKzBPzkj5sX1V5qjwGDPnyQNoaKANcP7tXRFkccJtYUazS",
  "key16": "4j9QH4qEY9WVmnJgoNthKhgTZgBudsA3KhR7V72QQKGbW9YW6FGNHqL3Zz8SNvjF2yBVxBV64HAdaKn2wVSxGHu5",
  "key17": "5xXiAoi5uK5si3yNYUkroZr36XHGhXoPrZSeY7Jh5qW6cpRBEpPbXinQnWqBG85XNCX2yu4apnkRZMJRt5AqXNbe",
  "key18": "2kB1WHTA5ZyLdtEJu3M8BjVYnQYcqwbJLx9aMbre9z3MEE8AaWCFWpBWhw3j4PtmewqhYZofu8CPSqY6J4rFDfbk",
  "key19": "5pLDzmNFtaEN2YhFYkRHNAxjFt5Bj8vBsatk67vjV1LibjRFn1kNmkuBy9oFgbv6LQzG6rACbpfYXvLpkHgyHoZC",
  "key20": "5UJfQYXCydzZNG9puP6Qkd4p14Q7wuc91Er62KqXU2JUj3zAM4WdVCstTUxwwMLhRpvQRmHm4yqD7VF5kBvm2e2h",
  "key21": "3bJfKznCGUs9ts8dhdfNdbkSSwjWhUh5xnAHagcAZBtCUxQwTckPCTVMh1qSC9VxeVNM85fAdegGs6YgZF2pTjD8",
  "key22": "pWeeAKPz98muhjgqA1RbwY7veFuijYa2acGRA7s7KFp2F3KvFygFiCALL6PbTmeQ7xUfwi3Xt9tHRxtr5JGpQV3",
  "key23": "4DD9ERRHDYopGJVxRpXXgP9dPz1bH4XiAQmChhuVSebiopQ6ek2EGoBS1GgsNMpVWoY2emcN9XTLBGCmzgRvjqYy",
  "key24": "2AoGgoX7zvxv59aAPGP4oeLPgbjjyoE347gCBCXvZy5MU4nrmgEpHTZBxhLshDPzFonjoCv2eBvJ6Q71qjV6hj2v",
  "key25": "2kEybUXfJi4e1HJyvmF3MPM3weMKpU1n5ZyruTVb5Ff8CD6fnj2RBMquYd4s8uPmkeD6tbQkXqZPZhbaNKqC23gk",
  "key26": "2Zz8DkRUf8YTh4tFGKWa95i3VWwe47wZ9YQbjvjgZNJoqoA3eyUWWpCnFeUjeMwwSHiuG3peKrbt2MUy6uzuUDhB",
  "key27": "5R59kk9EHSJ6bQ7NcP2Hm6sBPqpeoEqnZKu7owqTBigkgT2Rf2rQbcs8QkQE7gPFZZxjBzjjXzezhumVXHgG52MW",
  "key28": "2qCsPA55RgTLfuAzwfvTTQMuriYAiBe17y6rUP4MtTF7hsyHpyxgVE8QcEYrE7Dkg6G9RZkv2usevo5gBwNuxG9p",
  "key29": "4WNhaX7sQsW3qVyG4sgGWrdFcwtVFvTgVTq74j5p47MkSyj4161F8uoB7z4x7RDtSAqS8gSJ8ku8o6b1WwNga1qg",
  "key30": "3cNG9iDMzi5nHLXpZcZCBRSiJo5gEP3UeYbWqTt5q5wAV56G5TaajRMKXwnvj7UcdpGCKuWDu8QAtRikRF5dJF1y",
  "key31": "5WTTpZ2To4b9RGDHvjLXjY68cEDqcpHt6DF6HPJT5rKmjv7xWGev6hWymL7pBDXAAgcKsHRP71LSgEuEi3xPgt4R",
  "key32": "3kQydsVnG7VJXz7Fm6CWiyBxqBujDNnrv6UJLC1gMZAjvNPpXGKHc1CFJMnLLutiJMSWdRepZUMGoD2GvW8DG6F9",
  "key33": "4RdPaqU1xakdiJnFL8GBTxHsSzuKXrke6rq2vfFPocanR23WqJXKmF6yW6qPtgyQSErA2gwhuaDxoHzK39HYu4PQ",
  "key34": "5ZkS93JFxtSzoKh3keKwGcLZwp8PRLNnds2cqDKMyYVb148K6qtrV7KthJoiehLas1XZ193svbfpLZEhozZMQBva",
  "key35": "5CL5MWgYH2cb9cXnxaSRcX7JazUvZkHmMfyGYvhpSw6DqWte4ekWrZ3nv4sZvY2GFs9Cd7fLo13Sn9PUKpta1NFX",
  "key36": "4rNNTbkg7LxgToeTwbLYtRLgpTPznSjVFmvoZQEnuE4SLK1GLHA6mQHgsQyCAjJgavo6X69VVUsNNQwknyjskycF",
  "key37": "2z3KnSs83xxxxktrNofxVeaBGkAYK5xqGaipJT1xMKtwUa9QuU34hNMXXLBJrLic4JJZWQDAFm8Jh96bMHomAn74",
  "key38": "5oUMsZXKtPKK99nsYs3bh7k9fTaXBnGBgr75ZREcdaTZLEXATxaQcPsKwrNVENwqKY8T9Qp5XHKPAzZQ2mrxQtFL",
  "key39": "3Tsg4bzxVtCVQEDU1Xqq8qLPpdLZFipyEN9JCfhFTVg9GikCVyiMPHQh2UYukyffxwz8SohEXAAModE4aL7KodmY",
  "key40": "5GtiP5XQFZNPnN1iNncHLAGuyrcQU2Dc5ZtMQaeaNPRNeuFk8v7entMdykWmhxuu81vmi5Pi1mpvCtsfsa8LeG41",
  "key41": "53BDUrCG8xW2BVkCs69Zp6cG1P8jEgvHTSo7dvhptUsGAkMUz15Yx1CZQcZhEXsm2M5aQWHZBLPV189hYMBz7VWg"
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
