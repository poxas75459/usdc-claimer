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
    "3pzDBRMMDf7Lmy5jRqFw3o8a8Qhrx58oYXzmnGtpnpoUjZ7hN2zfQ1r2GZRAsL6pRCNkm1PxrqCH6nX5RwbfmYKB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wyjsV8hTCiyVMzPBa6sXTtFzQFH3eiQpjivZoLXhBmjWNmXTtHSNFpY2coMZzF3s7mLj7H9bfUKv9gFVkMWxJpH",
  "key1": "5SKhSUnbyLpiUXkrmULh2SqxMfW5nfmYWdGTxiQrxbCcPuZhP2azKJpHKwtESiDfTHiSsGAHhDGRF1VwFdXNzW4k",
  "key2": "5LC36FTKknyJSCcc2eWvuTUyxH7G3GQEDzde27tAJn5jTVb1iWJdAmHA1AcBYqGgSgUckTSSv8Db7vGPoNdLWi6B",
  "key3": "4ZEArtDK9w1bqiwy7YM4sNfR9Q86Mb4Y4A4r7cbZWJ61xrCerPpEgjmfnX5v5ftxsMJeLJDeCGhq2A53Ccd11jsj",
  "key4": "bm75TxJBoXTMfF7KG41WY1nZ4xhiKzPtExR284C1SuE4pqBtPP7qAmo4fpke53bCCikpAB4hgejpmDBR2AQkR87",
  "key5": "43FrVKQpRKquvXx9rdABZc5vLZFqQDiz8eyWecRKixpTEUhjjhHpgrymvsMtNauQKzA7ehmLwoHkAdn64XyBfLGp",
  "key6": "adccAG62GLCqbGvnXAcvJHyUh8CS3XAUH8gunFdTnRkycKJLmW2qQt6FWM2BCJzLPX9gKhVcrEiLUTD9jTemMZM",
  "key7": "3Fv1opEnR7QJCkUG6t39EbWqwZpV59odtSmM7U7DiddY9YtTMYsPP5MEx6b1o82Q2ALWh2Cn6u4Hv3Eq8SXcESSJ",
  "key8": "5FnHtpnF2DuGtNZoWriECqJtGZTdFV6vJeEcvGunF3RXquYKQwPJYhANeFqSvM7eKXboHoFaTqd7g4CUsaNYbUYG",
  "key9": "4ay9E6pRt7JnyYbdGHixMLcMG8DVHuTGyJDA2sfVbxHAzwGmSyEJ8MvES9vNeCdwp63oN8zSKHtN4zpwf8WHBgYZ",
  "key10": "5qkm8BTNGexDbyQrC1a4hEHqzsGGHPFCLeYaPTZsXYVkEZKZmfZKZsNnoe3QN85bh25aKrQXDDy7WPeWPJCZQFnF",
  "key11": "5r6smoXWQodKRBe3PKrFeB3j2K1qFD32gAvN5DUrJr9YzrD7qHxDDrVhRPRg4eGHiy4GuF4eVX37Jd1nYviWjCmb",
  "key12": "4hYBxQAhhM1HVupAxchVvGKhizrha9wad9sLS8gkC1qKhFxLpj5FURiYE5NNgw84Ed9dRTi379GcMuzrjkwwUr2T",
  "key13": "5j5P8Kxon8mRvYLo5brGNvQrGNb9vsMpQ2UNtwG2MXb9QtWyDeArPyQEPwne2TZAAjfwdA5rAD2KDfSoiQW7LKij",
  "key14": "2LpBjcBR9oUqv1ueCkJZ7ebywW7MDeHxEC5AUAqBkkyrT2NyPZ9ju5cxGhY1sb7Q6hB9JTAmVt5ySSc96979r9Wt",
  "key15": "2QeNbRcUca19Ns7YGZwaPKKADH6w2jVt5HNztNDXnHvWKmNc9UQZdXXPwnZXk4NzsVQhH3Z7HpVRNsCFjn55JSB3",
  "key16": "2YFkmTFmkatF6qgJBo6oJrFRgWthmvXZ3ts4veuJnzX2dGFJoQ8oE2m9rKjGrFWy8SntnvYJW8M55Y2rLDx7TUeJ",
  "key17": "26BAtEgqREHKYsjGVcshWMuPhcYuJbVE3cKrW2fp7ZnJfekR5FCGCkCsdV6jP4Pq6gHZznA74UGvS4h1kk1dmRbL",
  "key18": "3x62JV89ec4ay2MqYNmnd8yNbkR6Uu5XrXfoT6AY8pvRtXUkH9m9suNGJKJnmLj9QWWYMwGB77DWScSsruzF5qJ4",
  "key19": "2GC2ytUE18QmXAWQjDCUiJagus3iwpRXFSPSCZN2392PgK8LCeztydFp44hioPYHBLia48K3TZrt8RS3C8Bj3F3p",
  "key20": "2SVc24GjH3UgA8P9GVpnZv2aKo8UVKrMcP3L3emNdTbPG6gsL2v4vUcUydsxMVbrn91GXwHRgtBBn5QrrVogmYL5",
  "key21": "3rT8D6dJaxJe4beKapycvjKqT8PxqhJmKmdo1BRjndqFa3LQBgmmPHrekCtqSh8Hib9cRJSJyRsFrRkMNfGX6FUb",
  "key22": "2Zg8pVMa6QK6jKS3P7Srh83h2ZC7CJAaWTL7ELRZ8UhdQ9uV1GuhFnykTzcWJjBLtKD6V7bBgLGqo4jn68yTWoyY",
  "key23": "3dXgJ86yGQTse846DbSCEaLKwwTSe6mYJhbDGc4jShUgzDwXbRakqRbDCFbPF4NUvPgQbzsmMf1Ax6VfNahFfh72",
  "key24": "5NFopNSWiVQKvyvGwAKgEJ2jQiR1LQ3i5jCeihVYnaPHrkQZTTzqMLDUhzdTxW6yY8dJAeTysjnjnjn2RsE2jKvg",
  "key25": "47Ri9CeHE9q5xbnjz8cv8KZEyzFmkYts6L6vQq2JNsYLwG96FQxXY4NddV8HJ2c3uPzf82DXQx3iwbH7eMtQqWh2",
  "key26": "5vrg4Hq9Mt9MoFiK8otxv1qNjC8KvhRNfzakaJEHxFA4VnBJiGUSfnaucVtmzgyx41eP9kgAc29GKh6kGHfT5rnG",
  "key27": "5LX4GSfQFd1JYNvXtUW3HRn6XuqhJqS3NCTJrbzbGiDLMXSg4brL5mgTVCncYWLAopMo4FotW1wzF1whJu5CRApq",
  "key28": "2CAK3DMH7a7ErTArLMHeSeVpsUbbn5ib47aeFt72AYhegN4t3qzNbQxPW5y7Mb9TE4sz5a35F2fYUHCFskJ2oKGt",
  "key29": "5QXHaJ2tUGugRZdqWDzZaXL4xRyiZTwpNBhmNj7Asha53B1zPSiBKDnXKse3mgPsWkQhPmsMyApBdA3sAf1JxWwh"
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
