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
    "3GUmktTbdGfGd8r1xwdTUePKpuJ4Djg2QzjhZJ2RghjroRv94s1YUVf2a5kjedd4LcD1tpk3Jj9hXiBTssFevA71"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yV4BjD7kSAFjXwoYTcBDR2pvxbKC2xg8hYgq4RVCy4EkBKAEHdpfNhtd9S46XKdS4WvzH9wTmBBbcCtebuY7tpb",
  "key1": "AR1c6QSroq1UhJABXX4YJVzQ4QHFm9o3HodknfAjLZBpFT5KzowmnLVn5qErCQ1Hi269dY9tNWuWA5TaCnQ8bDs",
  "key2": "2th6u76ScyCjzxznsysvMDUi8ekV8sY2ubRPHBqj5NEuiX8FwYag7YSXBLE1Sr5v6dc6TQfs181K6nPvFFJDaFyZ",
  "key3": "5qcCoB3AaHM52cy6DkPnZDccuBv9onAYmWy6EgjuyGzJJMT3B5KZeK3GNPhkW19Xk3GiYCxvJmkVZ7c2LxKUdXjA",
  "key4": "2ATDn2ot5oq9K9KS13o34X4WfDSbc9sDEXgRn5pr64M8rRTx8hEhhegsAhreMVMcUiP8ZULboengJEy6dU7xFePe",
  "key5": "4omjVfUQcvejsByPNPFxkt89U4d27kRnVz9Q2P4sD9kE1Fvin6cqpSLByDNxccFehG2F9gQVxMfZ9r6N34o1FwD7",
  "key6": "5aJ6Ah88gfN5tjjBUVAdTZGqh1k32SQSuQ7vKwJrte27Zes1qV7DqG7vcWm4RwBWWqZiDjtHYF5A8A6mKxi1FP81",
  "key7": "4PSaRVDKXpk5D6X5CYvEwUUzQCbn8JDebUVkSXB9w3Zvodijy9r6knbgwQxGPKZywmFaTkZADr5kFnnLmZTqYEbX",
  "key8": "3oubSHnnbL3rzUhhLgK7J1XL4Df4qeWWRBKHVt1k3SEWFSXZoj6Ky38oSavFRR2nCrHEkw6MTvVBXha9uysxyXFf",
  "key9": "3atgZPBT7EAAfa1FM4oKY4GZ3RSzcdS4cDkoYnR2DXggSpWKnqH36bJaZE2FUC6bp4vjB96HiWDSPs9ZUXAkgohQ",
  "key10": "4xcNqdqcaLGnydw2NBgDUChue3H1yTQ2Cs6WgSpgQeuP1UpKDCqR7dVeo6KrhNCDfQaikkUna6PMLAMYg69dEagA",
  "key11": "218tqVszLeFVsKafyXzxpkTMEvCJo8tLwzMFWqsN62bDiCeLmK8K96fBw3BdJimLLUDxqspdYFyLQHkujXRq48Su",
  "key12": "4Q7vptMVH1dEZ5nff24ERY9ZVai1JoTtGA5MGAjNXauchBR17kbcBsUxxYgnrkRev2a5zdXDUjzxvEj6Cc5Qtxsr",
  "key13": "4tHm9hFu5rX9jXY1UNsZWLcMjdpwD8rYMfL36X6Xn9ZQFzWoMriMGoBfAfwpNUisxUZ29hKRMufQyxYXM3kLBvvA",
  "key14": "2SEmxPPudYFQzxgL21MhhXPuCWUP69vDYkkfMSTGXhFjjHgiKNnKT8DA6kHuJWosmdC5RUhHB7N4C66uYrPBvrBm",
  "key15": "75wkTYzdh3WchUPswCY3MPTKe6yp8Gg2fUPDoDL9wKcg4To1C2XMSteyfN5qgdzkn3h6dkPS2xZCnC4mSFiTgM7",
  "key16": "2Xim2zTCMpLXwQqCFxXGvQq7BYGu7HYRFG4Z3dgL7euzy9n6mKiTa8eoCBLtpV6YUPT1kSatYPMr59gzANvmDzkN",
  "key17": "4SSbb94Y9WUirxFYc37Cm5Xiudwv56a2KZ9TjZcv9dtSN3inAqMveG1LpDGCoMMH4Mb28HVJk8PwKZTsyF9q85WC",
  "key18": "3qTdBv8wu2LjthvfVrofqDU2PPhTs7yBT6J4w5CpaL7bH3kpSfjnWBrePSBhnUSGa2h91Bv3fLKobupG6vGNdY36",
  "key19": "4MyxKVJ1UrMiLZ8hKxU7WyTgyerr4TzyiPgWGxsHGdvK3L5TtkkyQ5G98FtRi7GavCX1MBgqDNhH1oXSMrYf5LAc",
  "key20": "2AZazfCEfkhFfdAMLQfswptptxf1hNwdscRgiGQaD11oKCEMZJ2uYTfgBCgdyaGW5QZStTGtuA8JXaJ6WS1cMQJf",
  "key21": "54J11i7kzoQARoTLstEgV1MSLsLACH35yjsk7DhBYG57eEELSL5ygkTPbJcgRkm3Dim1MyA26TGXKahJcgWa94EE",
  "key22": "2hjdhdaTSFpboEe6d3jjeNwjR5uaiQ2adsjWKRnTfkdWaJvVTXFYyFr4WqWVJ11jBwr8w63rWPFeeiMVEQbNKzAm",
  "key23": "58AzmbQbmpaJugJyzmUYbZidfFUno2Y1wCLXsEM1dRPy7ekCntssh6G7szpotNmYMbN48p3XSXH6SACUhpQhX2BW",
  "key24": "2HSodYXnFoos53pQQNiWhTXBPQ25CLUBtKaJsP4hQSmxUd7zN36WyHuEKmMqYxzDJR5cFpw4kyiLqP2BRVfNZaLM",
  "key25": "5kjrWQP6Vt38hdrGnkgrFE43Fi9i7JdG4W3WYWk3WkoRfSAxdEMo5zC6XB1rbNMsegTPNRZKfWhQ2yF8cB2FidiK",
  "key26": "3TrnEyUEXSNybeCTwAqWcphHU1rJWG4zJERjYfXXpNfyQbfYWNC46EwuraXC6NzVrQKgH7VddoH9UAaZjj3zYRSQ",
  "key27": "5L9t7aKEUpzmmjnyXCPCTcNLApAeRWZRoPaV5pfLi7KH8YtwVmxEbakV58JaLtiNuJmxFLx4YQRGswkaQ9hAH67d",
  "key28": "UBT6e7rGjMN6cpa1zbGe1fmXcjcyeWkvmFSo7qKyFe7MDuumBFtmRvHobD585UzKYnXEequ4ih5q1JGL3nNDfB5",
  "key29": "4q9HFkRMys44wHbQK11KYA3cDEfdwMQ3E4vF72MKB7K15VrkajLqdwyukZ4xKTqUR8N9dBBMv35ZmNcV2oEdrPUK",
  "key30": "4CTQoZFfhovzh9g92M7YsoUvcBpYCemVncawAqCoDgZAWZgzPYsxbfPtAcYpqn6sP625iSCB7reXAGaczeXT6ztq",
  "key31": "4WgaJj2hZNssSvucp4iyUEWVji5nQj5H32AK9LBEcmxAZ7sfpRzGqvL9qmKrLeGVtESqBfYsJEAfXhkd7vbbwHHy",
  "key32": "5DAa7BNFRNJb6cygZDhfeQCUnp1u1diuVgB11QNTzR88UN9jdMpM3hY39n9duvyBJRWKZhWJfqzbRTVvtrwBBT7B",
  "key33": "4WDjDhgkaSZuhH7NsdopFuWfUR2zuD1GvEbuFYRHtCqvEe4eVHQChyqoawsRtF8hjoo2k16LFnG1x5momwnx1ncm",
  "key34": "54RiF1W76AmQiNBsqKU83sZTDqasvoC8YBAPCq8SBCCGntiR73KfucLG1v5XjLJjMGhuLcJfAbVVgUfFVWVW87Ux",
  "key35": "3pnxEeADHoMUQUj5fAdKDAz4nae3888Zsnstv2UY4cfYpfAwwfZiYkiXGUfTe4aJC78mLDEz7qe6mxZVVGZBH6VF",
  "key36": "56iM852rf72rtpAdxyb53gkq5fys2qkQieouenFnZB9FBCcUZPaheQm7WdVtjuX3fg8Wo6XeWXKdgdTrdwLm5iv8",
  "key37": "QS43TxGtDupGh7R3jQN9fK7MsPydAWZyToLMXb6jmzAApYat7mHQvmEortYdbmy34RzXL4hvYPxXWG6i1rD3Jpo",
  "key38": "mNSDEmh9QBYosCe1Vkb92bXWRn96SwKVPaswMq3epqzgsTg4GUBHjHoVcnN8gSSByUFSgt44WrnDcYs4gGFqsqw",
  "key39": "3mp4a42gvDQxiBszTiKNugcrZoaZK771NV6tgBL8QNPQGk5YjA2kjzMLRdGvv6qSLr5RUF74CMvPsnHzhNKoBWat",
  "key40": "2CA8Cuaw22rXtkaGFWBhiEYEZnWcvVnJNMSikwHc37a4rs91Q9v9LRBd2f2TxeK5VWZ6C94NNzhfgrgyUZaAWvVR",
  "key41": "4QDhXvhLVB1Tkt6vSiTaqaaSfVvWdrSWrTm8S3svyMw3Eggxcg63sZeTvpCFVo2JxLcG1DF4Wb8KQdWS8yLEn8QG",
  "key42": "3GxWbMrDjsZZ9jvpVEvL6fPkJCDaGtrYkvT6xvyyKeWwVbQaBVFJ359SjoLMkdqGEdbeAd2LK24LvSm5qib5w8nn",
  "key43": "4g4UqjYdgLJNVQWrqhyMWNayq98zntb1uVgLNtN4VRvakE2XQ5ANn286ZfT2tGuyyY9UEBZQp7ieBiPoZpfZTyCi",
  "key44": "2z488CMM4WoXGthrRNGRqdLB4pouu6V7JmJ6E66p9nqf2UcqKcRszpbfG3do5T7XNNmxEVdykBubJrd5HMUZKcd",
  "key45": "3ozguWe2gmki57hynizEPUqZeiebXqKsHPaan6HjfYQqpyPqaoRwQ8dNVPNd53k3D4eZ8wNkPeDr2jxCwe8KVxZA"
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
