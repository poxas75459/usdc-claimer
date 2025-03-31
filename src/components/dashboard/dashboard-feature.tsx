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
    "4SpXsmz4ZzeZvnXN8h1xsn4mkzNY7p5cxt9wZ9y7GBUgijbnwk9x3Zb9nS3QsMGW9i7SzFS77Bsgo7XnMgttbLSQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MdisWV1cAq3C1iN5BF8qXAQ5CyNh7g7dNMEpPfzf8e2gmuB2GuFZ5sP4nDV1bX3CzVFpkytHeBJSuvP9aZ7hyFT",
  "key1": "2SumZSyLmauLGYw2M4mYoot1yZnoQHs4R5UEUGrh6qR2KwmUKohUqEBkbaNdEqxCymxi1YiNuu5kHcAAXsXXexPy",
  "key2": "5Abpq4eCCurKb7fmEtFQu4HLENjEcnU9hhCDaJWegeHtZxApofesin2xvEkBMbs8W2AhDHr4ZRimefXpt2yUV3tf",
  "key3": "2W6SECBcbV45Ax18PrHKybfEwaA9QrzFsdXfSKxcQ8rGrTTc5uwmvyBVWEk8856LHW4s86TgLULAJ8kw5aYLMr8s",
  "key4": "478mVfsnNZm5AMu4WwVh1uYdpRo211SzxZVuHiwV5hAS3W1EpDgCV5vpM6y6DrP1YH9xhdhbehV6vPXCn1b9t3j2",
  "key5": "5AAF6biwwhy7pT3yjZyMnQr8fHQ3VVDF5gqMGXBB6RdaTtVhLJ1jD4yvZ3UsRPZXKJqSwqY2Kci2QEnRWRqNrowB",
  "key6": "34R9BBMfv6ENs2AhL4cxrjrjZVDpn8JPkAMUY8Bbgkst7QiApAGdnGTspfCnuUeN4NPpf4rBCiT1ZpSqg2XxmX2Y",
  "key7": "2aqnNemG5cXgcBKN5hJJMGp5yTqvLHnNYhComRLz6x7fhssoMQiPUyLPBqMhaVWdPTiiLGZPmUNmpHrgrvp2S14K",
  "key8": "3WfvCRuuV763sS1w7m8GpSdTGxshLpPSqydqvX6FSwVtdwEMCgrYWefbHAJfXrowDx1KyR5yfnRVgkjVZ8VbYunz",
  "key9": "2nF6BdEE181NvpqNxbejjLEfGZqcQUrmfPXowBCvQjQWE7CboAfPtY6X16STX8c5scZQAtP4gqjo3AanRUgnBsLA",
  "key10": "2zyjXn7R8W2farHZzNausuXduoHjZ26kGPn1WC8YQoJnBMAtLDQEQLJnZoDhGcTkLsMrzTNnga1K4iesKzaPSx2j",
  "key11": "5xKLQejQfHVh3pvpYQGsgntNBQcXtbxyspQtjGi2TtgHGvCTabCD2BqwSdL8kE6JvNcCxfGCRn2EnMnagdZcnvNn",
  "key12": "3Jq7cWKbMYea7AnNJ7KVgvkhEzgDhchnd8omYsGy1xLpTAxx4WrzoisRRpFgr6emj2F1asZWPmaLa68Q1edy5Kcj",
  "key13": "2osa8rV8zkLufaSqHhYHQtAhZfpXa6G8sA7d86DBRyULWL1inBY9853X8m6YzZkYJ9dTA1tsyix4FnBRUr4bkCKa",
  "key14": "4hvmrU7kKsVGr9ioimvFGLgEWeiPJnD9NQonkhqKbeVArWj9YZ1ydZ4nEUrP9XA496sDCBzj158d3JhBUW78FLxa",
  "key15": "35v6Y6e8ExKfRU486sJgbhAutQEYD8MU5u5EzwHGsnUKwRQfgT6t5ZA5vp2wcKwFR2Mq1AJJMheoZvKruVwZ9G1y",
  "key16": "5h8gvPG4V7KRhKdv8zsKJcyYAhFGGNYUk2C4LwzTVT73h9H8bFRhGeTrTaLBdBrMcVMXfC9MbfDmCft9hc8MubKZ",
  "key17": "475NyHgu57C9wCZKmPP2ELMs9dRHDAFGVJMP89xusVLzQzebToNtVXUEXEf4bmQxH2JTfYvZyBVuD7orRix8ZFzE",
  "key18": "3moQ8RXma8DHtE92TBzs2gTSXvoFvfJsGQKo7xXfmr2t7Z6AWY2kGmGo4F9c1PJqyx4Xysgsfexbc7X4tgYUihRY",
  "key19": "36wnpKWzRcpDfAb5czfToLG37rNnBZKLdXoGSq1JVFFCbYbNLF2AfKAbhBhMiFQkGQ5AYcRwhfDr5sdR4UWjs8qT",
  "key20": "tR2FJmyNMGrnf7XxgCJDCgY1utTmEj1dWaePf1ASHrJh8kkndm6zeejUCARgiS1oLbh169x8vDuPk7KH9bcHh27",
  "key21": "2KLdsEJZRB7K9BKBEfLy8odHAZ9pxMGwr2XZLNNLw1jckd8jAA7hWncydPp6N7qqVqk4AwA27MutB65rwg7AcheA",
  "key22": "2LFuJaZ1ApEyP7yhLsDpLgPAzf3mDJ4fvMTCMpT5Y9MwVMcXmeAVmrrwBJ794ACsBvndqtPNApGidnGX9ZZd25Xu",
  "key23": "3pJu9AhS4S1xC8DtmRUyEJfzrJXvHn3ZaFC49tRPPHU1z5BREVsPqsNqWvSzYPunQj7pZAmQ1okNB9zWvRSfG85d",
  "key24": "2NST2NBJpch5RmQKtXM7c9B3fPZfcPi88iTBhTk37HGiW5T7ctbzt3hcedXi9j9nvA9eRhDMSnnhs9EX4YvQoqoZ",
  "key25": "29Lp9LgsHyjyt8dJdn1yZhJo5FZC6cuVRznUddcgCjVRCnY3vTXiNbpV2tBV62G5rY6YouTbnJqVDzwf49j6zfzE",
  "key26": "3PnZqnMYrK4q87YZT4FepJEUXL6nidCW7YxkT4mgvns6gQZ4a9zqcLNm67aZkY4oM4DoqeLFMXd7CBdpbXnx7qmM",
  "key27": "5JN61Yb15Geiuk2stfK3gBrxswKGMqdXgWzcYuvSHJ7zCYgtWK7Fr3ey4oF3M1JhMsHyMXKUEXY5iwCzypLFjLMg",
  "key28": "e16FBuXGCDBvqrScFCmyJ1VTxgtPTv93Lr4FA5WCxjgaQhVjfaWtbFYsC6p8nEMCFkuZhnYk2S5qPhkJBSXkFuR",
  "key29": "3zSpjqMXFjAJDVkgJXSqbmjpGEiQ3GQcBpkY5K8yP8PQP1tKVYgecCk9NgpuWNn4XmRpQ13suEufWxtyBsEbCPAM",
  "key30": "658F7abAPfppvKLFaNkvUuhepBJNKU1hW1rfEoBSaPwQQvLtrLZZiX2nmgzzxPgj4WMXFBXqN7QkMmem3j7KHs2b",
  "key31": "4c18jusxJ1Xq7o6yngMPKjsRkUhvWQFsPuRDqSxEiZM7qXJKzGhb8V74oQvuUCNNq3Cix4U7KuA9SVb93Qx8UwLa",
  "key32": "2zLajFJQX4jE4AHuqybcqYc1f29V7ugUuUr2RrejwKhpzj5etNRWucC8xf3awLn2A6HFA3rNDSp2yx36g2qJTQ3X",
  "key33": "2zYkcfnCn2ewFC19jT7VkfyioWVtyou4DiMgDtQQvjcYLzVRnrR3qiwN8XGiQ2CowUst8VsTMBTMsobKqrDoh9kc",
  "key34": "5ENYMNZFHtgfLYohE5kdtoZNw4jbMQRcPunyYJgBVZbbHov6kGxgQDeWuyXeFFHi4wJVjgMVUMqPyhEq7LmyTE7D",
  "key35": "3PvmR7iVaoapk8aFMk68iRDoSPMqBtiwfzn4Z2E14BVtj2457snzRgpE37bjzTUGnaGHJCxzgQddtjWFE2tmsaFV",
  "key36": "5W4stuq2kqrkEp9mtRpComDmt9K6C9Zquchk6oQb2D9bZ5h7AvL6keVSLsis9bhGrh8g36m1pS1Pz44bfFXniHRy",
  "key37": "4wouurYy7CPFH4RGhdCciZrxEDv23DE9LHEpNPa3kghvsa51sEac6QUhF24CfShxZT7P57atC1NQNeEGMa7WVg3C",
  "key38": "4otgXT8Jb1tfYCJ6unKAkF8BFmQNFxBDJkTVHsR4TQjHzuPnaRpuqq4LbMwcDSbxTbivAXbX6BY3H4eh1s1ATuJd",
  "key39": "2zdEYBJz9denTH3FS58VkW8xCN8EV5dL9ShVgAWdoxoJLKdWwoyC9Ceq3uQRVKzcGTsSiDxBCeNaJzG9wmjhCSTL",
  "key40": "54ZGN4udojySxQxEp9Ufv1QuXRxXHvhc3n5G4qJKaosbjBA3bpzV3aFP1XiWoz3LTHuzFrXg1U82x94PzQra9bvy",
  "key41": "2E4jpHoyFwmkDiSXmG5H9y2qQcQ3Y4V9t5w4fszbiH8Wg8oBvi3RXyo9XfbE7YFofwjJJzrJarsTjwWaF1ViABHG",
  "key42": "3np3YD4wab4itx7mijw9yTUjmPE3Q2Ws3xDM7JakJNBusoUuEevrJvWX4ft43C593jdZbCQHkeE2SwJgsWvCiR8F",
  "key43": "5XaZAKQmBcEk3bJYGQC9WZn9YG5DhqSBcwgmV1sn8bJimwhsnxdxcxuh3MJh13YfbT38112mzb7F9EkzPCv4rxsV",
  "key44": "4tTvDsivQdd7ckbWU3QyJX8bDxR6FLeFN6YpXp3ihkgiNPBdJLaha26TXGSZh2ia4B2f7UNGPsSfJXmC55vtKSZY",
  "key45": "5e8dqqGnjZHqbt6efbzA6V7uKHYPBC9tN8HcGgCVY1hgAb8HYd61DhqZ5nfwrivy5A6gbCnj5jo3yu32ejk5C8yA"
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
