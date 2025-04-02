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
    "DYzUMrQMckroa8fhKRQSpFuX4qMPwfy7ke6z1GaDfqoQbaWjTq5KHZQViMj4fAgwwGzXeKhiiLcCwt4yZJ1YXzU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45hhQcAD5wmZiMkHXqTzaXnKtQNzAbdYERyZBKnQE4ZxipetCZfQuEYGxJ8mRrmwiDoqDh3qSwcR8zGzKDf8id9s",
  "key1": "Gws8bKgksA81qMVkTmd23qpF84XQof8e7GCNWhorqRS2xUJyFjgihq7yDosJd3woftJmh4Wfqo1gpYdx7H1f28P",
  "key2": "57n73tHNZf97a3JwsDUhcmxkoL7ujM3H5bSr9qej1eGmjakTga2yrhZe76T9xR3sxVrhjVCntuo6vwaQb5L9JWbG",
  "key3": "BKHsJ9q37ShA5a6TZ6AgivTFKXYRRJz9ithroeBzGU3W4pq7V7gkh13T8pbiAqWsrFTjQUFd6Sdnny9GXuZPub9",
  "key4": "29biH1kZJvYNWmsoFARHWbKtC8yy4JqZff3XWmksr2p1NDPrc4gNykN4mhkudPFQpdbsPA4ejPJHCHyQF5tccxFK",
  "key5": "3BMXhC71UJ5uURjM11Rs6DDVAmwnh9YHxzuVmAhjGYVzaNojQ9p7K6pTi7wgwgvFVmctt8Cg1CUR6c9AhBu5BeHU",
  "key6": "4qxokZkAiSHBhw8fpQ1dEUmzMcV8hpZrxwACvWTY6EGiL1ppGqzNQMtjLXPLRLTm9gCRFZLzogQB3wyj7zEwGPtT",
  "key7": "5Xfauz8K1v8KUXBndF5s7WsxwFj6wZdvVURe3ZCTB2tMVt3ajxnnufUMTyi7ZF2yKHgzbTA1ejTbYUbaNvQGkCvj",
  "key8": "2WfvNFq7zf6V8FGc7qf4zRes3SSpBr3JpPmT1hDiCQnuiZA9KZavfZsCfRV3xfpos6TRzgfCm8wzv6Rwxcnsszon",
  "key9": "2Erm8G3xE5v5xaMrBYaRgseg8wDTy3YJa2vjxCcVuxD1EGiANi757tnbyScjVtmpnR3bytoWi8vFd89ksLCeSQBk",
  "key10": "5V9hSjG2LDt8CnK9ieoA7vYhHaPgVL6BLCoXxnGD88ZBbQoyKQEMVzQFX8NQCiEZB4Mq6kwWrBqaqumScyoydQ8s",
  "key11": "JjwhaBjpMdzvrFMn7rdRdoGTMjkDCFeiryf8xGVDbxdhUQtgexhqAdR4emRLeKiTnjtkq3qEKFZpPf2MVehZxGQ",
  "key12": "4WnaRKymn84wRuj1WAjavn3MQ3sLWXa1KauoquxECfaqLHmisP6M2ZN8wUhiXG9mAxu7sUTVBr55cLSfmXTxftLt",
  "key13": "5mADUWAdbjSz4f2JWeWFP7thcucHqqkjoL5FAvwQmMboQxuM7FsFnX4tZKrDDztH55wePje9tjhQ7uWmaQvBVmKG",
  "key14": "3FbBmAkPjY1DzLMfboar99QBQ4RCieckjpMJd5kcntFkSLhGcwAy94KR4e2nPscfzQTDHdYUR38jxUuoDpSiEn4D",
  "key15": "39EPSkQ9ik51MQBBjx6ChcSYcRKF68V4zw7eZhWVM5KCr6cWcDuVe4H6t7M5MXB5MBoxThr8wR1jsvdMsZAQtS1d",
  "key16": "4E14hahBEwAJeXZrLSXSgKieuBEJXRHx6nXshqHyrYy8WcdxPiu7bUKgyFrTBKHH2NWs9CbDx7pqBwG74sh1zJAo",
  "key17": "5jQxXPqN8yWnMaZfkVaQHm9oiNwMKjCkg3rs3HVTmi9c6LtQmwHQbcBxPnLd8NJho2ZfyCB4bSffd2ncPu2A7rZS",
  "key18": "5d3FFYEsqGHXAcmwMa6zVCKQFi7QqBoUh5CkKzVieB99aaVdWaLQEdkHhzHdcNoa5Gmp7vP1JvdoN1k19B2diz1J",
  "key19": "4DbaudzTpe2yiKEMpUJzPTcZSVh67DoWooxXeVp9fmTuGS8Jx2acnXLevffZMaUZt2MPqLKzTtSgNBqj337eTdmX",
  "key20": "2s9WfzUdoJ1iNqWpDoaqHRo7sZYnD7Bq4q77PWvyhXCwA9V7XjzVJDAK6vzgCvUfHqBMrefdQJm7GYuq2RcSR4bb",
  "key21": "5dXwZBFt799ySpFaVCjrApoUgxnkMmmfJeM5ashTVtSb9CntqdGedwSPN66vuMycZwfpdMmGdzdSYHS4Bkt1o81r",
  "key22": "464gfNJ16vV7JJVneZsP5m9kMqtDd6VXp5CVX4XYz4yGep3T3RBWRMyUZngcnBoEv38u64DSXUN7btBVVQmznJaq",
  "key23": "23L9L93cscpff6C3jyqhGCkvy2R75qg32twTAp467iNTRmuiwbSjJYC9JFPqMcCdu9E3pvN6cWe1vSK3HQdvZiVG",
  "key24": "4VtocYD2zPD8KcNLqog32dvwUWoujKnVbxpXRA22ChuG23SVbDRN8z7RjGRC7xKMe6yxPKhd5HuJaFgHsavivvy"
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
