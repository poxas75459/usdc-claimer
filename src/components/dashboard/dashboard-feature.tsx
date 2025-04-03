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
    "3jfcmGpYZeNTzRkCF6oSYQ8JgfWQn76UrYzHssX5M1DSHrN1CApZ9asH2ZioriVopnKgokYvk6cisG7NPTC7Dimn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zX57Hs8UYiaSK8t4kqk6wL9XqpnqfphAwedcPxSr81fLG9VZswnnzCS5FdFTb9Rcmp8122R4NZYU76Rfe5kEGYR",
  "key1": "BypK5CxcaQ29YtK1DBpPBAn6CcBxzJtVr9bR3rc9YkAedtfFJkV9Mtcg8CpFuAyRjJEwo37Rx441oFtHP7Xoxam",
  "key2": "StVfbK2N2NEv1MkRQtev59Q5JND9uFqfn1neAFw4bdTNpcYBPgqsBFBZtyZ2HsLyaYRs6mFKjW6DN43HZqDNghk",
  "key3": "24947P2jBZo7GEf1KW3C1YZa2yvzEDBErD7KUyEmY3DwHyE88m7CuB94VACrPZ4TqDd6UQLHMZFSDNDPEsYuuudn",
  "key4": "4u7WLA33iDcSnkje4v1iQDy8pYjGkhYGg6zBKYn3Tvd8BnEAGNMLBELSY8FwmUhAmENcmcgUZQz4VtvzMLh7Rfbz",
  "key5": "2yuQ5njixJXM5o1mXQTgo2rCpbfxn2EaX8Yxxjm3aeeL7gBWWpiaUXrzKVyYxnSKPUmH6YTetd5sRn8qetZKefmX",
  "key6": "3jLhRpgJfujGx63ayzbcLmZyiKT5oZkDfEua1cV8FnDjhvZQepXZKUgFSYFzLGTfzj4wQ5jfwkEVeciGXQgLvrDP",
  "key7": "2ZWNJba3kzEqorYUjJc67MDSV2wLREivHSXChdqZFT3stgTGU1AAUobx9b3Tem3ktzcFceXq2DaEZazPb6ccqBhK",
  "key8": "tSYNdLRmN6ZcEvAMKcNxVWWxKokCCFRSrQLpKsibnJqPAicQNyXB4HxamwyeYEyrPCyZ4zRczVVnR8tZc6d6xFh",
  "key9": "4rpReCYuHtXWs7kAWWTDUk4H1MJ3T7HdtA49KpeFdN1g55B2UtyKmHAPitpzyLVeCqTjtzpQToCEGYvicaNYAgVe",
  "key10": "59vSytWw8PtojnbPHhjUrK8vZNaagb4fAWP6E7QZp2kbG3h7fjrxZwzJcxDAooHmmo1jTMnxHJTucBDf9dTTAPBa",
  "key11": "62oqY2yTudLV7vfkcP7GfnM6PruydD1XT2rzxnVLhB3CeqDMBVBNy7BcaxkyEefy5ZQ4DNh9Fx2RcwF7eFrp692M",
  "key12": "29QyH4ABbNn1u2jR838veaVx9AG6gbErGQMwWjidJ7FLmUKFd16wPBtyoV8aac4DnAoxN9zYCc69Lp5WMEfUadnU",
  "key13": "5smvNywLPDtFxsiWdjGdFa6zixGgr8HoP1qS9boyJWGuCqtxYfXbGfxuocwnf2QVCCestyTUZ5BKi3EKtrF8x749",
  "key14": "2xihAq5bxqbYr7VtSqzQ4jENXFwG1RhxstE7fLi75Frt58bB3uDNBY4c829La2QUwxNw3UJkvr9VNg4vpPRfQoV4",
  "key15": "KNQigadDLAhtZyg8DQVzgArMDNoRUUQwtijiXn7S1KLBkGPuGBTKsPkkpjsVsuscsssnb7EejAKfv8S5bcyKWLq",
  "key16": "4fL2J9tdyxQA2VhxkyL95whLiigChMPLnFPL3FhEEqGWhPd1STBryx9GN7eQcfvr61zs5zKwU9ZazaUMC5Qt5Zft",
  "key17": "45ccDFmtvuqmJovHCM6smEZFeKEwWAFBKuTXRZQGMab9wUdWnmsuGwx6SV7fRHVEZuaLw1jwE74aLLAr6nnA7PQa",
  "key18": "3X642hTT56GVjkajqS8pDgtXn6hFwM4RzHLh1vzgZf9MWfVH661YeRd3gE1DZtaQSo2RK8yrJuwsuMc8iTEv3u3u",
  "key19": "52RkGUxtygzVuESza2RdmzpMddBEDs3EQFNtRMxP271S1U6AEEXNgFUZA9DL7LCWrmVqrNkymHJWMqkQ8wut3Gbp",
  "key20": "vaXD9j1GvNN6CvQ8gm4Qkgn4XBL63Ls5HS2SSsNi2Utqb3mT66xzj6FTzAE5L3uaS5LgPkdTXruwTVSQi6aaZP8",
  "key21": "2YvpGGUCqAWvYvfmd7SA5b8Xi7DnJqU6z5Tz6b9xJw8GUvN8fdybGmq1WZLqshagSeJkkc8YorWsCsdpEmpCQmu3",
  "key22": "2svATnpkM4g7HmEKy1X5JLUU4qD17FNWvQJA5NNEFxTujpT8J4c6hfzMriXq6ndBfCrwWf7yMSK8aAChbS7W7Xgf",
  "key23": "3iBttnrAcTTJ6LidapmEmmC16qfTPHnhzu7YmJXS5WaDnKEYTpcKa323v7Z6cUERQFJPgN4wFKh5XAFJvSjKCMNz",
  "key24": "2Niij6msqRfKzkgnKPssm4FE64kaQQdja3heYiMX2r85CRG1pYXwMxfRRs24NCakvvfutnxte1tHGu83LwHQzt56",
  "key25": "3zvzjdoUpv9CSZXg4H54EcLKCZuJdLJfkUyJbLbrV76vFSzoHqJeoAGp6K8Uzn4EcAdGA8EcroZPuezjXnfahomo",
  "key26": "2efn6SxuUHD54KT4t1WsfaqjzqGLZX5tWtk43ynxaDmTF6BtyuqDa1BxFAg36NNbChuk57ddeo8FpNFvbyhRA5UZ",
  "key27": "1TZr9HRGsLDuF9jS4QDNBJFLt3ZE3bwMu4sGNNajx3CgSqJp5WnRtbb96T1NudvQXwuv14AWdh6rcQTtEA8iaQC",
  "key28": "36FkxBAC11FRQvC5FGDEyuK3XWhoGZyGDKr4EkhNn2obWciMts7rZu1mwHmph8ft5ZGr2pxaTJCXGX8kkk1frFoN",
  "key29": "2T9yQUJrCurnDuDpqoowUPessuff7czvPF8qTVXn2dH1DLiHf5htx7WSat2sYjMwRjCrhZEatSAZJzQCXQ64nosp",
  "key30": "4LSdJEosjsompT1A8SxRG1Aq6LfsdZNc3vCAUeSrGBEYUpCH4GpAfWMihJQG9jTDPQ4BBZBL1vAX6ua9ugWHpB4B",
  "key31": "5VFGFzQJG8HXryV7FADpBiYsXwGoNd2SMCDuhZPfSejQwS18q7XtYctgFf1DG7icxfQnp6MqG7ud8eDt5VRCEQXH",
  "key32": "24BieQakZUCeNsX7Nu8uZGitG75sZpB7gAYccAYgxfK1sf2t2uVZgZSrcqRzQ4FtHm3WeWDuaJymRPkCABpPxV7f",
  "key33": "3soYK7oLQrp6CdKNRyoNM97N75eHBpjt5jS1evYkMv8ryGCZjNeC8CjyFELBHG6Sn82MA4zJRvcuDBFsxv751KHM",
  "key34": "3NsVar2hi2qZMp9Cy3HQumJjjrj8RT5UX48k7nPUedA4jHeYer2wd6iDsU1oZqtQ2KnHCKY2wh2X24LBvy98dGB3",
  "key35": "5y3JNqXaGgZBV73Fhop3XxrXRqNoYxaEas9cQXr2beJvQTgPMwfpgEDLvB3jvuRGLEu5G2eHxS6naQW1dD7J5V7j"
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
