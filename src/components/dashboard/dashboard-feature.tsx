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
    "4V9jVfd2CrQuAkUUwuTsYxdYwpTcjvnpw446EFS8DbkTjeZfmpwXM8J6RXoXRjTn9vy6NHzNePBhWJvRzXxForfM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kcngyv4qN3acJc7Tb5Xyf9mikpimcaMJZX1C46Fk7FfYdP249rcfukzuFNJDmYRAvUzDppo1Dvq8vK96xvDPQC1",
  "key1": "BrZNPQQJq7SuUHJZrQUNCHVe4vkKEnmjjLMKDTJsqCVioGFvzA5PwtezgJJHGmAXpvj1BZ5JA3LfbViaWPMS7FD",
  "key2": "5uF8ZN2Lm9TvKHjMMcRsgyRTWtKzJxq9pZr511dVc2gMR52BXFx3oN9WokdMKoSSDs4b7q5Q26D1EGsSCmRkZCKp",
  "key3": "4D1LewqeXAq8y7ornewL8A2n9nKs47iKkyQp5LUfCWG3Eo3gMk37RYsUx56RdYPjQNVAVEu7FYCVB9gMJwwypBND",
  "key4": "3c8yCoSB3Sfbh6QvWgJs2EixUxZiMcuPP71o6nD1XYKpFtLPTnx6MaahRe9qGsszyiX4Gxkp2xTN5FaiFo2mztYf",
  "key5": "3CJHCZRy9oGaFDJ2rwE3APQDEHkET83Dwk6bXc6xcBKdEGzF4H1qPexB2aaDnizJB9Y3FE4CTAd4BT31vH6gBxrQ",
  "key6": "3B3qNHnhmeHr4SUV4YvDsV5jgNUbNfVX5xjmc7V2RqFiNge7SjCy85BPkWtiEBSUCkJgoyA8xrV7w3j3gRed13CZ",
  "key7": "5QaUZuBwEsaYr5bg1sfg2BxXqpGemm26RtkEYJhYuYQfDNmRUU721WqsAdf8kAsp8xrQVh87NLknwABQVTuT2SVm",
  "key8": "5ik1DNJpfmACL17eueBUZgTTrG2J88NgN4AeJZDMbHGaNDJG14GC3MxS2qDtQDZmrW9yZPEsD8CwkSEo2KecG6Fe",
  "key9": "5fpUhDE39e6iizmkontaxYf5m1Y8k8DCHniPfGNwG4AX3BUon5P9SgNJ5t8hTeb2zPfA7wPMwCdNwR4b7erY3YJR",
  "key10": "LXZfYiDDx8bawYu3CDDAEVq5DDKB9kAAPb8QL5P3tLJEVjJyMdzGYBMNpRoLCq6eNDXo9bCN1PqiGNqbU5Gyy6m",
  "key11": "5RjTqcMmJ6mvrwQ5bM5MfAsh6gfcg2FD5GtpdnEzoat7dJbqLbSiB4Fh4DYtKvoEKby5QbQDaxve2vzfKWqG6vxy",
  "key12": "5LchXuH3L6LUdRMQqx3JTCnuEW5Fv9mBRQuSdTZPCjeWmrobghLzS4Dkmrt3JEnqB5qC3DmAcC9rMFdHdVBDf1oY",
  "key13": "5tZ6K2eMmGCfunvqMn14a1JXAFQSs1U2rqC6K8UjazPmDtfJrqReFs6RDJ4pTGDq4KKda378yYcUi4hcYpgeoAjW",
  "key14": "5SVFszzrs73nw84Ehs46mBAuZAyDhXi1XG6ZbHzXjdgHxpER1zQejWTr1ZmQoiFKta7phd2EnWfZHFgB4ztxNNQa",
  "key15": "y9GoZY8KvwEf4DSTCQomq4whoHsRg3dGYY3T7mq8J7qbbw1dAqGBXbsMTFVFdYWZAUzvqu3dQqnHQDxJ7GngkrU",
  "key16": "3jUdtvavbANM2eokcxbmtZ1fkrFjDoudbecGuLikoTDcjuMbC6SbZ1zMzJ8J3gzyRZU2ak952Qz1QiEaYpW1cv6b",
  "key17": "24bR59Vnwdrue9vwepxvHfjVixhojodqP2p4rw2mM3CmDvR821TQ8j2LiX3w3pauBWrJTDJ5GQ6mWJyJ1j7A5PoZ",
  "key18": "x1y8kKk3t9KQA2GC4EUXvQmtFG3uvXqbF92wEuRmHqt4rmw1ptieb4QyKx1KBVYtd3Fhzw3VLwUuY2hegcKxYn5",
  "key19": "2btJjBkEVaoygcW4xm8R5zzunLkcWsJD1qSZuiHmuvAPg18Vbo9TjDQZGwwUGg98iuYuTp9REbiLjZsrdxk64REL",
  "key20": "qCr5JYaPAeFuHQskaBgvUK9XbFKjvg4vstJpijV9N5LtXPB87M9Uk3rHShuZrGw8HHC9GPH4NitqbzN44WK2PoV",
  "key21": "29hizak7UUmCGM8hMs7guUettGH1hUc6HYQGw11VuuXkqKYb9HMA8mcPbLxPkU3spyk1VEYjFaetH9fJ9Ma8hU2E",
  "key22": "gvrj27mjjdKccf5F6GSj5tKTs9RoKnNALfVvwPr69C8nXpNZNmQi1TgxNyBfUonY7oAWLhy3su6tvtWM6BRzn2a",
  "key23": "58k9LB6XTNrH6uw74S1NYM3Tf7QZxpXDNx5N8t5MK3BmCqMzn4pWxNitnVE4fNXd1ao3ekBA3a3dy79MHwkSKiPV",
  "key24": "53gLeZTnmb6UZLVQA2vB4J9EoWu8Z5YdFLwXkFig1rbsdsjscYysccNNj6s6HXcLfWQTi2JKzGgpuHFBENEmZ1Kc",
  "key25": "4ZjZjQu64KbqUDZmdCHxFtq592ZMrP7tJ6Njq8ys747R1gxdwrna8YFmNFa1o5EGJ9G8XbPRVHR4utZMWdoZKrS6",
  "key26": "3RzHVd1vYKUYVJQHZkfT1pHpmjavZRtdw1FXp5tpXTxjyquRn4U8AEvu9en8tdU9pBmft9pEAdEhpzspumFY2egn",
  "key27": "4N5LcP5Ahr58bNTdp5KCkA1vFaJ83S1XCs5TC5euTD1mWkE1v5JVvdcjX2VWWUs3P2cDjVDvpWcowbcN2NU66dNP",
  "key28": "3dphLF8q5qndv1yyRJ5cXXnSDuLZCf7jxnUWVVEE24T1v7nUXE51RFqieHYPRzHYp3mA5ax5DhuHPfWHb9LbRcRK",
  "key29": "3kcH93w6i6UWUpcmr8JdBM9snVeCwu4hFDKH9nEiAfpZZai2n6V4UoUdAZTX4yUj2tKCbkyZgw2n9cnAAAfaDpCB",
  "key30": "3nkLNmhGkXzmco2gvJ1ptHHWX5o1ZTYji3dVokXj5BHstfHR9JY7df5SUUfQ4LiJtKHyGkdBBZ3cLbpr5S6DBtQy",
  "key31": "3oZbEYDntUSw3tZxsXSy3wCMqJhtpcgpNp6VtcHfaV55xyaz5GgDaXXrWFRpdZjV69DjTkhcpkDzYpNWgQpWjVtg",
  "key32": "QQh9yUddGpW39puiyDpTHiZSJQxPDqpsKuzQvhjEi3UMq7rzgP6Wfksa6XrSY43d3x9puCq7mGviYiajAJvypLU",
  "key33": "5wie4xk3jdhsKtt5iYiG5PSQop1rNnAMYkDnENwn11utjEHW2ksZHMzRjiWKu3MLCwC8Xhnx79er7nHWZ95EYey3",
  "key34": "5vtmqyEwzb3Pbc1cvJF5XjX2UXDq3c9jNHsobZatSGLKb9oXY43nXVwGMGZpNHZ7C8aAWw9JVQwiyyqU7yQ8WgNL",
  "key35": "4Zi2yLFdRxmdQrqU2dNiU48h1R6xURMvyH94xy98kyakFMRFBQveS9ZPTW8rKZcMtQA3rguqziLD11HtEtQnj9X2",
  "key36": "3hDqkuG964Y9byeELdpSRpB8EbmKPzj4JD1aPcCgMqyw7n4uZU4zhEKFthGKTKu17QvU8XBbctHiZBhvCV4kU2k3",
  "key37": "4DGcmrUaX69aEgh1CkyYNCtUN2MFqrvKGsDjCZrf8zT8HNyDcouRgekgwfMe4VSFkr2JNcY1MoLs6vVEzVgyveoB",
  "key38": "3JEMaxFpsiCgdobPRkZgSjj7rE4sDzcBeQQVAW94H2Wq3tBocUphd9TpqxASStQBiSbJMMq3FFxg77hGQoCmxRu8",
  "key39": "Myna1p1K6fGCyvSiQdocBxvRdjsgWeq1XLEAVx4fNaZSFHeuehQVofyANFQitcTymonkTiKZVfEAB99d28oYbqP",
  "key40": "4BdqbzEzhbv7pkjNFfvBAhjBGDBajnwuQL3j8yxVgMFhE3swWGDGcLWtLBp1kEq7tVGMWwWUKfEjhYyd4zFoC1RY",
  "key41": "23rniBSXuP6NQZhpQWfwM1dkMFLCUdg3WLT299DdeyG5brJviTAWE8u7nnorPhjT5Lg9Y2V8VqmoiVLaBHzKwXsC",
  "key42": "5sWt5ATHPaX1ToVb4UnfDx9xGPhPqqi4f1A5jdrQyrLvqB2Kq4WT89QhvHmgjtqm5tvAPPTox7pDShUGha4MKesD",
  "key43": "5P5Aecpgw4QTA8NfXUJCFqL6JoW4EGSR4V8gaSzWBCRhv1BmPmp6yG5rgyS1YMifVJGvnkyLovPLZWYWfrRwGX28",
  "key44": "jUpPD1bha5cvtZpTAWsmwmuKGnNoZJbdK2yN1XMcPZfw168ru8CZ9GJJWgguqyUpHWLG4ijDtSMzgpSxy6K4nKa",
  "key45": "2zSuCWespWzxz8enxLFF7QW6BPeHzsbX7RYy5D7KT98VxrtVJHg8ntYCTWbam65QDUezN9TPcDP76zQhUMdXhUqa",
  "key46": "4wJ18DybGYMaYtzAuqcgMF4gQpWmghN5d1GeczDhpQ6bW9qTXCFEK2vkejNDYJRMviCL6H718jTYV6DQejmmxa3Z"
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
