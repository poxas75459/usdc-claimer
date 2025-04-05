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
    "3KV7v6FiaabroztFriuG9W4t81pQxFJ9t2G95HnVRNMcGZfKZXe66bjZ96qNZ2NhSzBCwK3s3qgTRPBMkxXyEsEB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HtDqU5s16wFTQtmEbokrDr8ZNxvQyVBs5gvU2UvGdX4w2RaD6U32g8pfeWgdrWFpzNtG4gKVCqD7ALdZ6aBRtch",
  "key1": "3vxZuZMQGraEZ25MVHqvUsm5Dc4xz8tHZiaP3eh9ESyYho4P9iVCo9PKdHA8mz1uKVL3cGPKMeaGMGZJrjPpqVdM",
  "key2": "a8BFbqso2QEvk8eiS3pw5waHEWNK4vKfWT7JEtkUnpVBXg6xaLmCxrSApc9yHKqTZBzc5UJ1HAHdRGAWZxg3mZH",
  "key3": "2g1hHW8PZwmx883d2AaYYFvh2wrAztD4s9pvRn1Gx74KJFZs6Yt7jNFksfmGnef7fLNVUCWwmT9mUpRgeeHRPv1V",
  "key4": "3xEtAfyianAiLp8SsqsyGcN6mN7Ytzgwx5vjKwiAAocsBv96GvH3HgTGjfQYwDWo477uBhqohWPxKSmnStCaYSLb",
  "key5": "5ETiDZxwCGrJYnnoUqjDyhS77ahxwANY4kk9qAqTzKBYXXeHWYhpL5oDg4QyGeCpx8t7ecQMmyKbNRVxoooj82uk",
  "key6": "52sTcsxPTKk4vPcZ3unHFdGnv5wMub1KqnnouSQbuM9z9zcp7aJhAFQeHhT1FW1wkXegiViETgWmM92zBYZVmE41",
  "key7": "5NPu9EENpmP2HDdqrqToT495U4VmzHTV2ucvXCb4e8sK7x2gMaYwQWBmcdxfzbaffkZSSpTVop7yrUBcpN6UCiKh",
  "key8": "5EVXcCixXPeuciYcZpuPJyRhf9wn3UnPKLoVS8aK1iQtc4pJ3P34u4ZDebEPgZ5vffzzL3ogFEV9PMAANKB2BL2n",
  "key9": "qaToEnzeHLFzuqs31WnUuZfaGQcRJmuYFWdZtAn5bNUQ8zoiCqtWvVus8H8D3sLpzJK3UohA7ZUJFDivRdSZsZM",
  "key10": "5322WFEMXH69BxfNEiP2n9jjvQJknaus26tRkFkkNKkQnJV8cjw9mPGxtHJoCJ26QmR4BdSqcHiVBZcCLQJME2js",
  "key11": "mkMUEmgjrxfTmwEgKtCcJg48AHywydfvMn72zQMKcBeoz8YB5uTMwZFwgsEwFT9S2Ye2gbfVGZnxMvFB6Wqd4eE",
  "key12": "547LMwSRs9FVDY9T8qNswfE6LAbqAJZpARky7qRyMJ1FRQvMKAoK4csb7NkHQkq78znFS1jyJdHbRa1rYLS8BQE6",
  "key13": "3phwA8QttFfM6ppYFs41vLLjcbVzBnpQfAYPfsFaXwyfuhFSQ6bdyJRWWB7vESGUXqdRPUJMqoS7CCM4RbraCBpM",
  "key14": "5nTxDwyLi8igKfzqM1xwdh9ifkqnUUi3GMat4fcZjDFgb2SQX1L2FqnFSn4afsKc6GkLyRPA3pS5RcFgQgDMjGE1",
  "key15": "5mqURFB5NbEWbAUPcHZiR2zweciojt9dgiVUCxj9KHP3SYKr1K9XxtpVJWvDaLfyw6j4QbiFdtdbMdLYYKgSVLid",
  "key16": "5LM1YUZZHpWEDrZnV3V5gmzepPYBTcDeiPste8BGaaqupQhYnTxigFQPs9FChzbeLmLiojWKrNE8UN8A9CZGWbbL",
  "key17": "38puYKUfbvySCZHNDYctjw3ZtdtqCJcpFq7qusRLbxFvfmdHZ9hY4Sx7E93x68jePn8c5rkKtxde1qLTpZ7ABAGR",
  "key18": "5nBL4sTvcEMj8tvs55PCDQ4uQzkP5wriWdb8eWDT3xVYnJWtdEBBzRRY79auvc7gnS8ik7hKcHdZBX86Rhp79s8e",
  "key19": "5JDv8nDJuhxBr4MR4a3NZmeSSAKs3BAXX9DxkjKqdAgsoi1MPa7dYTUHEHg4PvG6YQtSCHp3EEegCyKqY8P6yx7P",
  "key20": "L6QYaYe8qtFZSJ9S8J1kUCzqvG4jd16NQgu3UtV5B9Rp7rGLU62yhYfxBEjfQWQ1zqxWYryGpbZeA6tqFD1ApUP",
  "key21": "4jU5ZRYTeqN9mPfNBueq2hooR2Yg1uicn1dJXZqWewD1SqkbW8rHort9MAnekrrRYwcwhkhoPyDmDQgohdpfuaAQ",
  "key22": "3QfMrvJPN8Bc8sZy41Q9f8ReTVNXCDX9yzmAiC2YGtQsM3u63i8MnyddnMyn4jopMwZRHb8MauKAdQkSUuQ2HwiZ",
  "key23": "4eAYorKBnBHsi3Lzarwq8piQNcP8LUNrCi9ZXbWe8pRp2M7kYmeMqFCVTZLJbhtmTqvzBaujgfcRq12Xz4KYbPa6",
  "key24": "3udcnZv5xViaGDsm3hx3aPmoUiFsHDpecsCGvBkiHwTtsmZRiYzvR4tojkMYAezpdNjfvKQvjKuM3VLvFsU9Xs9Y",
  "key25": "3FGvD6S8B4HEmeG4Djo4eBxTWmNLKyTXirSQHUQYD15kXhmrwRMhf1L81VFvAnUVT8tg426DvmW4guKfy2z2Rpcs",
  "key26": "65g7wpjUEAw142mxCx1oCQ7YiFEap7aHBCKjHwYpKGKut9M8thpvdirvXy4iHNWs2rrQHHbR8ADp1kXbtDJTBRma",
  "key27": "2NZELm4PHCPyXds9DR3AgZn69Qika8bSyE1iDK5xcsGDEtg5Ja8ogKdAbFvKC6nrspqoWShEMR6GnYYPF7kqwQvo",
  "key28": "4NZ6ZWdyhtx53NSQMcAizaLk7FecDunBN2dyUPoK5cDVUJmH8G1nkAYscGrinykWpcDLqHYdMwvyfFjYmmKx3x4n",
  "key29": "4SwhHsiGSCj2sTxYZan4KfA629FgT3DGey2i7uzHfmNGoXAdmvVDPL2FH5bNHcxdx1j89dm9asAfcVFtjp4YYA9j",
  "key30": "3SdG5rjPkjNKtPX88bND3f7a9GTpLJepRh5U9rjxUZjeZEzYcmRJZBRDpHp2QqrhceotC34mBsDBKYNfVgPE2nwY",
  "key31": "nV18HsTtQZ9jgmkCytLutRZ4jgFErHDXMfbxsUTvvaXbSBWYxzpa6Uipffec85tGiVn5H3fAePK92GEcC5QBTgB",
  "key32": "4UA79yiGemUMrkQbkSbCLRR694sLgezhCzeCjfsu37S9szGs9csy1R5v852SiNyZw7Ph6CfWJToNRtFy6AJsntiP",
  "key33": "3BpcGdWveZqgWHK2B2sN6HLiCFRkDoatFqAbpVnDB1qCfhLYJVc2DfSfWVquUjrMcFHKRWHxgzjfwyF7Gg93FTGW",
  "key34": "6HrWL9us7yx5uWrRxHVpiFcnhJ4sMYJGqknC3ECSjT11VRgbNMhrbCYAy8zmyabsmtXHVMXu4kctmyEWfW63voj",
  "key35": "EzfWg3uZoPFzYQbAo2WSQotAcLzEZEk51cove7c4WtDgzc3eVYgX8CF9MNx7YvAdCdF39DegD5kRqG1SrihWbut",
  "key36": "5wqKVJXvgpgYzC5Ai2664JReoX5DivhTrXoLatCP6Uepm7LwDzetKeauynEa4rdFUcmkwSbVvVcyjUt7cDkUMjFv",
  "key37": "39fGa51mCQHgDNsU6ENGkRSHRXeYt15VRybFkDVARKVxsEeJXybqcGPUSXcAjBvtqHR3SnmibeaoPPYm56q3pKMM",
  "key38": "4tbziBt44XK7W4oSVvkqaHmDNaaFEqsaSdaRQGcjYZXk1ZPqhtsqZEMGz1PwB5noMgZLkkEUCUszYEqK8sJWrtCH",
  "key39": "2Fa31J4JYKHrKu1HFdFzxitUwWWmNkj5CFbGq3BLvUdV3Lq3QHio42enQx6qkeAdZPmtrruGccstxmYUXSdpPYn5"
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
