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
    "3Fh8oG11PZRsa3YSUEy7WsXxaR1jskq4oh1g9Y1f2fiCF6ybqvW7ZyzmdLkzNZzXc9ddKBmvgsWkr6sXUbuqAtoN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jQ4hNWKLNTp5LTJeZ8TvhzFyM4hYCBeqja8nyh4Q7Sur3vnJkSaMrdsAnaeN56nwLByk6j5R4kcwAWowqtPmgf9",
  "key1": "2X4Gw4CM69R7jf1VSynbgSxP1j5LTDPZ6M97LVQfVCwVDUYnvG1par4AD2idEZ3424BXhGLfi7ikzcw1vwBm3NT1",
  "key2": "5YoA18iCcUKXaT4uMHvzkCuhjFxYu6dqsi5ZMx9ZcWHxSDYcxcFVfvE2gEFmZXYvEpqSBjf3RczXBQ2BXBQx4ye3",
  "key3": "4hzjeW3CEbq1yY5ZUgx3YbUF49x5Lv4oD9pdkMN21vtZL8Jk8rtHjR2JrqpNHeQmem7CvmuqCiyGvsWQxVUaRYsa",
  "key4": "4hn2UWwnn8TtTwFcnPYHCm4ovu3D2hpUuRE28G8tit28pe6zUtke3MixJFv5STrWDU7VDSWvLXu4K3WuNKgT9aa1",
  "key5": "5kKnmU9JDzBeU3JkRmE1UuKX6Gs6FkBrCwt7DnZtqxMDbx4i63brQwrBFVmPgDBtWFRua5yJrRrZiBSeuAuiTnKi",
  "key6": "8Uhjh5Le2ttmxTJxXenVbgvTaEoJsy3fs7hfaRRnD9pkENrT7Q6au2RD1n5c8oqgeK7vvfz5EuDmmNhiaCiTRPf",
  "key7": "4uRkucNorymUTuW2e8StWDUGYmstUwU7YcCsJvoYLoPnUVFAfjxxMyv8KTbHj8xvuubHm6mZcrVKy9aZA9PKStB6",
  "key8": "4Uz5U6En7PEdTGJiTP4Ftafk3BQc5JtChRdeK7TT6oB1ygT1tDZDfVfWiian8yvhW6rv3LHpMuE3mQQcX6Vuww9f",
  "key9": "3r4K8v1DTtrbhqjP8J4cfjYzTn9w9m1BUvL5TBUYcDh2w96wLQT87pH4c3yyFTydvaT8ru7vFGYsdcSLQqaNrHDa",
  "key10": "5iYSXXQnnpjmqiqdTv1V6aBoC4YTJvjBabyxNXWGHq7kvogs94AUtHmYY4f1Gux4GuVzUNAZ2PLiKVAnxtP2VJGa",
  "key11": "3zeJnWgbzB8z3uiSZXPhRWFrrgC1KDDPKdrrXQ3VS9D5TxXFdEUZHaMzUgBUW1wH946MyFcDnWVugA4jTjRjpgfN",
  "key12": "3t1ZdzMh1UVbMhz2nMy1fTUvDvvZugHKATX1mDembQDdPhge43h4gUjgLXetrLSbUp4nV5PZsZptj4aQEKVbBkkB",
  "key13": "4PQAcEskX4R7nYp7XEK2K9o6FmFnznPgsDsDNXq2sWjDCdd81zB7vGnKfV41vkGkV9JLRZs6p7MCL74mdRkCxGLy",
  "key14": "5prr15kwogSWMHyfLeFLMBu6tTqyxqfLaj9wWetKaXtRqMB9BGuXNWytcdD7kuPm8nhUfaEWeCK5aWediEHuL1Av",
  "key15": "qyaPqnk8rHpvj5SmjxVQog3c2yqT9bwQ8JkG5b4cvip37cgPbnUeZatccSe7EeTi9Fo1kYLXZbsxzq5hAnmJ56Y",
  "key16": "8Rvn2Q8XHuDgZEm2eq1bmoHjtZMJLrFqzkTEepJvBZN9XDxtJsnnhF5jAkozQBrhJSTnb1fYrGFTmoKYDtrPjfd",
  "key17": "3u96QwADtRDiYDUA4cya4onBXcUoSWrHBFY8d73ZZ7oe6TWHAPhuX2EzjTdBqQrYX91BiHXbVWvKPo1jnJxXZyEV",
  "key18": "2xnPcLzSzJfnfxPyccsmpcBXTJCxQ3gtJEmLb877jvsoyqRUnUSNok3bjNtgkRjKzghwHqDKdiyX7q1f4EDdCa6d",
  "key19": "21Xs7HwZdmux69QZZ9yNKDDqzZnBYuA19MNj7Qcr9pRTunR7oaysBXZb4ia32zYR7nn8MmS3h1yZ2mGKodSGPAzo",
  "key20": "57ehEqq5bfr9pTmz4u2vTMP47sUmRX1u5RBx1NrcGSLuA9Y88xDUXpEvBVC3DjQ1wNmgmq2oZvKunNaNB3pUDrBx",
  "key21": "euicm9L8QVkjphZby3zWbqb5BaAE9B9xzN2DQjB4PW6LEV46XKHaAqjZjTPrHhVkahn3nxBYHXYQ8pACW72FuPd",
  "key22": "5efcxYVErjUJ6TU6Y7oqzFYzBqSJuTe2dhwv13k8Rt7KAAPra3Z7Bg4iYSZgUx8vHMV4tZ9Z152yStz1HXzLu5ZM",
  "key23": "xaKL9RbDnLE1F1DBahN3bdUwc4kAgk2dafgcpmwXJBWxkUwsrcdRN4v4GyGPUewsJk7okk6WwtNgZCwcGraDmUr",
  "key24": "5FbG3Mpzxrr9XeFjcJeBfM8AMgMsK7hvWycM98Qoo3jRjkt1bi9AG6DCFWBkcSqGAxAY97CsCrPi1SQsTqzroktZ",
  "key25": "HCtftuZAXpSWU3JSzZLHAsj7iiPwvqsHTBFdnHRHEfUXbHcS1ceyNtnivq2w8fBaZUf95sMXdXfa97TbjTshM8c",
  "key26": "4tmfWsrg1krWakCt7e2E5Wn7JBSZLxdsmax3ubQn69rivNFsBpHG3qn1dgHouAGo1MhFfPBYRtnArfrZ9MBGTsMY",
  "key27": "iqXs5gRVDkHcTBcdWT8QuKG7RZuRAiJ5WMKfYB1HYLowtgBdeiQm7hwn1b9U2imaPfdGwvYepwRejyFVTrTzyWs",
  "key28": "h3mfbwhkbCewcYXydeZu6nq6NZKQNiXoBn5wzTfk1t5Wyp8WCFHukzpBs2QnYvn3zWz3Ydqwmq4Q1brMGwArouu",
  "key29": "5HsrrcZpDayfGX9SFgQj29NMCd5f5DsEuAiNM5XVGMKbc49sKYWZUomGzqAMmgw8GiB4ZUrXHnbmFpVWj7gPngJW"
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
