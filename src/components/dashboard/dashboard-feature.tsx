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
    "4tVui9YZhZSQ4CTdh9VwA5UArvNrTFykgDsH69ndg3Vo4FdKM3Wo11rTH6FTtENAHHQhvpGZHfiMiVcHnKfto3yw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J4fiwFVjwDY68z4PrKXj2sP7zCuVcfguFM9EDFEJrwGoN1hbRmWoWzQQExaPzaRhf6zwZCDa3YoKb3NepWjzk2t",
  "key1": "5fQj7AE3hP73UmcAbHZoaBgebfc6LfmKBPd7M72MbgqKnT1p9DvzMWrhxZqzVjGkTWfhe48HR1MHAJVP6YwykPEY",
  "key2": "28TV2VCMiK51yCvM18faJMDkfMH1gnQ7m6nKmqwBc9RMYsyfuFKyscg9QC88RjbPZCymSHfS2Qt1nBkKu3Qd1V5M",
  "key3": "66zdnLmuEXt7HLk3vgUvJf3MS3CppVGtz5CRsF1o7cU8qrwoApfCV4mR3tmpmgqwMPCTb9qHinTE7ALxNR7b7RbA",
  "key4": "3gKVRp1yuTypdkKWSGSqQRBd2oTaLN2ZyaKtxHEQm4TxH7DmABifrE11UHke9USZSvmP4mKHFxjDoDDCJ4JvF7oD",
  "key5": "3HpjvwzkGYYSR5TzahsRnMLPQPf5omYDBRueDvseLAYj4naStxZ6kjL8ubHhuCAo6Y8jbauuBnDUYiJVWGCG4GmC",
  "key6": "gdv1TXp7TJLt2GGXH8vhBdArYsadZLmxDtoLsNkuvqitnQHjQBGNvVw4ZX3RLEDQk8WPe4Y5t5TAwVuGv5LTF9f",
  "key7": "4ad6ZPSATdTmmS8S9tpjQr21woYpsS1GXn6CAV5QKhCC4a289G3FBGjVbEGVQAQa71sJbE71aLxhmN71tSwk2gNc",
  "key8": "3Se7iEg3kEZkNQuwgyZ6Qws9Fq2VeBgmCbnEyBhSvRbNTPxnTeywmouoeMdgXiL4sZtP6dPHtMXxVb3yKXSvJPQB",
  "key9": "3UCbM8FoEcaqaikqXeaEcv8YAhmDmyScZy4LxzDmTXwv2d8RgobsrowDwNdTNDyowkqRq5FpQsgf1Lr6fCUKRr5q",
  "key10": "KrVKNNq4k5jWZepRhnfhodExE3DheFiZ9XdyY8UAYR7iUrVvfcHiiBuhuUXQeHaFgAaNZSJrs1V8wNvpNgLquPS",
  "key11": "31D93CqfEZidauhgQ51NSa6kHoWq1hgY6dFPJjMLfz3eh75U5SyAVCpDJsnabHq5XX5UnpC3jv4HVjApHyF3xwXZ",
  "key12": "5a62EUD3TFdKB6yGYBRTs77RQiCwincFssm8syrAwjcx8DLZAukvrtFiCq8LuYHptToKG4jpdepK2zikULd8jPEJ",
  "key13": "4KaMXAgKsgrVW1FBMFsUumd8SyY2wCkHWNLwv433NEqFtLH3XjvNF7B58EFvnoLkVGTH6xV4Df4APcRDW17mKA3G",
  "key14": "2YapVcgm5peRvKmi8nWVtTEQHxvYvngXgtoqeGMAzHUhGzVW99aY5LSR8VpnWkn8nRnaC9MevQFs5pEQQcnE2r2L",
  "key15": "4vKBPx3GPa3bbYGQpHhja4A2RdHkU67gwXWm6h2ZghJcQPnTxuSrcFfXqmAoTPE5xD7ScAAPwrsSANv3qVhJkm8R",
  "key16": "5jzr1YLCKpvMJRhYL8NxjMe3WL4EfqbjLsprWgbR5LfZaQgB2WgM9TxFWWNePj5No8VxvNxo9Cke9xFbWyAPnDg3",
  "key17": "4QLg2QsbxpfSyQUtS1cD5CKcCNLybDZVUYMKMqeN7Bxn2P86W9Ju2QE9iZLTpJfdxeRZUAJ6fswhzsQA9AUqCPYK",
  "key18": "4TBZYUMMb4ZCDDksFnRDADW6ZuJ9ZutkP2CyjzF87FhVYdqrP3MZs5qHwHkgtk44pVDR1ZSdyxsR46hMa4tFKt85",
  "key19": "4rfV3STUwrdEPxLo2SVX7qY6fXY2541Sq8jM3k3Z4QpCWt7nT98FPULfD1SRCV1FgZdYgFkqWABHJVby6xYX9vFx",
  "key20": "3byttW4Uirp18WuXGgoLMCF5S95uDfxYZJY5Luc5dEBoNTN2GQffJu13aKgKy1dEpkLjtUp88n1azU7gX9RgD3rp",
  "key21": "2voPP5cqLqESofjXfHHKqnFNzxW9n5TyNLSJnMxshFiKQ77A4mkCKGBLTV4Eu48Dj6XsyCp3Sekg83txLgj6hTDu",
  "key22": "4m18MbE9KTUBHf3hTbopxeGEPsAtM6rz29nnArPyehFmnJZHy1iwUsQLiJvaGXn1ahwCe9nuxjWoNuRKCQz2wdK3",
  "key23": "3ojMtQrXDrGkrmc9xvuQNPjBefKXtmfL3aVm1oedBjZWwi2PafXueJGGVeTNdHDMapLnvSvxrLQBY5vmMKxDvaMr",
  "key24": "4Bx1JfaCxRqcYoEcEBG8SQ4t2Q2B7jPUWHjeyc1EbbiZG7Sf1wcjYv2jbgUHZgSsChgQAmysBx21ehAMBKBCqzjx",
  "key25": "4Y7GE8QA7Gi7jHvh3h713kvawtri8MFfHUvnN7pVZrXcvwmZct8ru1LqxpcjUZQds2kqAgoeJMkW4cwrgMAZkDfv",
  "key26": "cjj8Ze1CGNukF9312Pk8LzCHNSucLGLCWRm1cgPafJUBgATQWhkw4bbcaKUUtc284BqEugVooUtqdx2PfGg3bYM",
  "key27": "652AKS6DP5Q1ra6wjNNfW1ss8ycjeUip2sqQnKAmfTB9oPpqKwQYj6EEKd4R2cYhNRhomYAZTMi8j5shidB43CK9",
  "key28": "3aBB2JBtke8oK2eMmGXuPhQULn2ZqwNowVPrn1kQ97JKr7hK5miecJAhtcgCrUvGaJ4Kz5tQtkxbEohz6Rn1prSg",
  "key29": "2GssEJMRiV6gseWH9pABZBXCtVr5vPwSTtou2ug2iEdmfzH39hiobJJeRLNybnLFPdG5vSx5wrFbFfkDM7GctPYZ"
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
