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
    "Zf5BCjqXqn8dsQ9aDfvfZM3FEBgDzvjY5HP3n8n3KNz8gS4RzeVsqe2ZennkDq93RVhbgkm2gN6uELgW1vZGTuD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38Xq6yNyK5m1iRxGkEM8qsGQ15mBwfTCagib9XzbvR6RkSBsTFWi3a3Hb9W8bhYErmtWH8uFyMUSbADpLp9HZLUz",
  "key1": "57HSgP7zuN9Z5KR5VasL3YTqVydQmdcbY94XcAkmHqMzQsEtZNYayqFEGsMemSsRvUD9VTexYFh4nNo5XaGSZm1s",
  "key2": "4nKNJQFNNtmNrudvjm23T3ZgFwdLBife3rXNn2GjY8VDH1BosSBi46M8TaADdf9k6Q9whBZEUQK9HW7hfNNxRoUp",
  "key3": "2R9MtmtK1F1B2wUsAbwBGm1LvRfCKGR1aQVRR71mmjhXBq8XGbUgzwFBJ6gEPLFhFTRfqMtHUQsr27AipHT68t29",
  "key4": "3KXcraCmPEUyqgVLgAxUzwzSCy3WaMxK9XLQQhMkzPQjXfEymZoao568KDuprrtNf7EDyReLXGd9LmSNTNfnxhgF",
  "key5": "4TJVLdhk4wuc2WFXNFciQHBBqFD5WFvtaWJ6dAxhaMC17ioMGp2w6ogEqxbsKt5qjASrNtj84kAFX4yd4YSvkDqD",
  "key6": "BcPKetcch71iyWBgo44GpJpWQDzqXq5XQjdzPh3HHubwdVAA54CoiTCTuQB9CBn7mirQeADMU5hG2tKoqv5ho46",
  "key7": "3261LSHNDvNewa39EXArbW8casjYDani4Ux2zELJwKgwqtsnsSYKRNwPw7bFjkGnown1wD94v7naRwdWPDuf777K",
  "key8": "sTNYAXsJYzVrENn5aT9F4cY8eCgLseUQp2CyVp5c3LBxkPBAdAYj34xaFXXvmCMat1JWZAqtYXK9DGaKQy5Hg1L",
  "key9": "2bT3APX21CcDSNdGcWFVVRbcijcVYnA99E2vDu2n2zBW653T6Lth2cNddY1ouU5TXcXHHHeeQ8ZLWYFCHARzQmwR",
  "key10": "4A2yEoVwb4NJ8qQJXJnBV2v4J6WfL28p18iDBfWtbQ3s4mh4BnCsdVJJ9UjEpuEcnJEu4kh96KcoJuacht49jjtQ",
  "key11": "SKiXg3WxHnwHWXtSCLAYjoauzymaagZCH53mwtm6LB3n7KWTmqLx6iSZb1vdTbeCAJtRML2KSjWVcZLPQ7Jcrzv",
  "key12": "GV4cRoUxzzPrur81uDQuu4rX1N9bk1DY5FKcNgmWxu4RnKS6GjFmoauKgQSSoNHNfPAs6oFCxCNgMz1C1SuL1Vu",
  "key13": "2yRdsynGNUh1qhah7oWP9aCYaRSKf3QraaBMa93LH9CHmWnHpeNpzM4bRx2BvtHUBj8AuW3HsDxLndSvrfWhMDxX",
  "key14": "5fdbQKQTDHpkXkbETBhV5bv3ba6HEd6xT475aJhhxHzeasaHQfN6aVYjeDMwHjHfeRXbfAGsYhSHgzKYqCCVjYww",
  "key15": "58gRRVoDYaH1djnaG1MJ4WWrtRsMHpm9or9txW8ixEuNZ5HgiTF4t6oz9jXivYuA1kd2eygsnXUoTzsKq2nQ2ExM",
  "key16": "21JDCwE2Gn6UWYVNwsTE7C5uvkiSEV6kdAr4xLAftNcpvnX91apcHEyXwHE8TjHa6cs9UWcTW8pkUuFxcMVvXvXS",
  "key17": "3SaJc78jqGBhPFoU1qtVYJsD4fXBuq2CpQnw4VbpZjbTfTkieTXa2twptiR4cupFL1su48HrvfYJd8jpLJuSJ7G6",
  "key18": "61WvHs5s7fQzcTP239hEwvMPykutESd4s2Ze8MWpTRfkdT39i2Kk1SoYmffQgrMoue4ygiB8y2WNhqJ3SJqCEm2p",
  "key19": "2nVed6Ygy4ax8E5nJyCXTveN6NLyXUZJox3rTfQJii4FdFsJkXkHqTbkn4pXmWukzD6VtMT5etMU8yxWVkgf1SaE",
  "key20": "3RvQxviqb8AZFcwwRyBj2vwHehrn9uaN2L16VkQzjkNFHonaEKskZhHbcfzuGsLeBcG6kZVo5ZRFH6VAN2FyRLw8",
  "key21": "3JgNPydSBCXWqZXCQULBvvv4hzUvktxALV3vBV4yMx4adPMz1FkiCus7uDiwdhtoqrXZPAVL5XxA4fvEsw3uxz3p",
  "key22": "SQ5Dgftc3LnAEPno7fyWEBTkxh13ZW2c3toGRZK82TWSB1EZwycU8FuSDZtSkYb6CiJdF45XWFdFRgd5o3ikx3x",
  "key23": "5FAjA2vD9kjQ1eGqJGubMgFmfVfY6omXPaNsydixpV9CcnrNpEY9eLw3UMy5Lya53Ci9iXKvB9YfsbF2ySYBRko7",
  "key24": "2BSHwvUHJt5bS5iSvxBaUoHRNk4tDqDm5wzsorajWP78vyD9hpJsWAVatD9H4taxfXQeYvC5eZf9brMMGUqh9P3Q",
  "key25": "3ArvcCJAoRBQKPY7BKNDzxas4cTKYDgLSMvniFXkiD5bzvDWAUbQRjjR7uhthGuCGQPBhwF2JRiGMDcNjQUXg4qk",
  "key26": "4ZaTdcg6khxfyZdCTBpr8tQo5hFZ1GruQuFPLibUG9LFEoMrXgdGUnWPCG8BEFfdcRzzhiVEUNUGs9TkDk1ULrsb",
  "key27": "GV8N6zd6ftD8wythm3wfGCmfikv1eJEGrmZhQxmN6xmD1AvuQA9kdcTmxqRbT96xSxRwbZrHkJt6xKS3W5jSVNy",
  "key28": "2ZiweHMJs2jREQFrNB9g7RzbPSj8WviofRf1wYYpLTwCA4ZV8gXZf9h2FMCjh9MmdqempE6yGD3M859JTxgbfY3P"
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
