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
    "3P3Yzum8HgxFyrvtwZNEWvgzfFoizmCThLht9LKBN9swG18abqzBqr5H9S3cNiVk1RAtK7DN1RCKtT9aRts1LXR3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1FJW1kDxznzrNamADrZkUotwBzy3Jw5ZUGsQdgCiKNyxqCbZm8qmH49VDoo2n7mUJhiBrZ9PmHFFumXo5Nrgtuq",
  "key1": "3fsoFSJTPhVdzp59Kwp4vQqsfG1ZR8vZrYW4AF1vZ44ph7wGcukbcwei7UTtTbqWdXhqMpDQiksKP811dmYxNpWF",
  "key2": "2P2gpTrLGSf4UcufFHBpc2FYhua77934KAdfQcAUhY72KCxn5GKF2ut2GFCvAXRb6gTpie97Utp31wcc32K4ycfT",
  "key3": "vN1czuUkd8u8TxuXYqkp8WtZ2yVxSALk766HfWaiFVWyADJJKj6JfuXvk81dTLmNQ2WktEBYPtUqe4mwdWZZctE",
  "key4": "p2AZ6cX1KPyShAnYrGiobjBBrJdNqZRnXHUUo5VjME59KtzD963sJripRHjaaf18mBm3S6FWL5YtHwCULNZffMA",
  "key5": "4WLB3k6VTeoQMrvAEDw5JH4d6GKAZ7XXLWsnYhyEx5e5xRT77tLFSvvbbD3GD3i1mq36FuxuiTZPAc8tBDGdfj5c",
  "key6": "2kZGu6pZS1yrCDd1wFgy3psa8Lf5pEPEPBjSLg6XR4VyH1S1QPxvMknkjrupsCWjwLrHatPCSU84LafFpGeaZBse",
  "key7": "2DqV3tRAsGonXXXkvg3KsziGSdxC2ZfjA1THVZcdJNBjBspRqKdPqEHw7AZF5j3GLzWn7Qbu2qKyMBsZvnawchUe",
  "key8": "2fvEj19BzK3o8NpdQV3oJzTxtcNCDRvNoJpSvEUEPGTFB2hSGBq8kEMtE5TsTirhjtEaeh5XoHZbhQHBrsExmbSx",
  "key9": "2F4tLUnM1pxpKw77hWuxqvQ57snb5iAXBsym53yqZxAVwnBRe12vWsBjxNR3CGGS12WcLeX6pbSN1b1NyDatkYqb",
  "key10": "4WhVdkxie76GUinvEg3C7sbWeSaVkhBFfDkTysVD28cDG5PDo1jy7PJ5KRSF9nxqmwsu7GwMyyvR5D241PuFxNLa",
  "key11": "jNkPLXGvwNRSWS7qu2wk5gn3JHWCM8k6HeSepsmD47BvgoFHcap6nKnASVXxQGpYr7mj747G5PsXwctfqHqa7QZ",
  "key12": "sCidxt4Dfjg2yRP4FFmQdUjSb95bKwMVr79LXu4qocQBSJ22Et6co3Lkc1E63hBuYD5bncLTUZBo4RpnaUbiHZv",
  "key13": "2Z8MXQa2y37RgChbPWecz3trW1b7y3j6RweiLxZHERu3nhuaHMkTaHWkWqBfZDeEE78WN4WxmCioS5EAjJ3Ue8j",
  "key14": "3fnXNsrD8yiKagzg6qBDa8kKdGt7mL2ugEGZgZ1bgYNvb4KYS2UHcf2wkSBn77vjsLQEQYConzdtZfhCYY7jiVjV",
  "key15": "2fdwy9N6B9S6jFu3GdP8iTdFN8NkoEYKjGhd4tULnW4HvmtN1fkMyPcXKP1jRb8FefV7Q4VthJ45n4afXzfUg3Y1",
  "key16": "2pQL8vtZEKQzp8LhKzpXdgW7D9k1XPfjb8ib3cwxCZrJjv237U9T1viixhz127qQM2VYTYpb9SXgbA7sLiUr3bh",
  "key17": "sB2RmxMf8D4JWxgUwdreyzwwtaaAiJ87RUucZMCWPE5hjZ3xT5oQRFviqpxiuHF7KMXM7wPewAvoByy3Gk1oUq9",
  "key18": "4Uh5cTfyq8YUgSCNuVKC7nCGcMEwRs7MeGcP9CmXxUJM29uR25nE8k2ncoKjfhtiaNJcZo3cGhVXYNRxGrw8eCbK",
  "key19": "4yzJxutsoDmuCEpcvuPqDNq7E57UkXD2Tau328F7ck7VtGeQ855xzKTp9RuQoiGXiqDgBUGk1kXCMsin8Qnjorzs",
  "key20": "2wYYCeM57AKsoAQ58bbdEvM9nyxwSVUCZGQyj3W28BCkUPLMoyNnkYvHgBNWL1oiT2UypRTQiTZcRKUE1JP6QGsS",
  "key21": "2f4rr9hG7fqq664SXKWL62KEhM1KNQznjaTAVwSH8ittvMHiwUjSZ4qbtaTdDoKe7BCtd9XN8r6sPZBRQY1oRNwS",
  "key22": "5t52FSnyAoZTpZQeZCzJoTBCC9mc6mM96jgE3PpnxHoxLaEVTsD1DDz4qo3LRuDEEisp6B2RdHEGb18uQfj5rtZr",
  "key23": "3at4CvJjdENGXXjcFWT5AfmQuZMfyPWpXQpEobMtxAMU3R7noRYLM1g1oykq3UEscns7mJVx4VfGncmdSTkS6iNC",
  "key24": "5k9r78Gi6YLJ9fGQdQGLBQRSLwmbJvvr4rK7QnCjXjT4vLFUD14zYgG1Ev4mcvkMekGQF3Sj3QHnYnd2N9MsyNUe",
  "key25": "4xbErNYAZttbiHR6inKREzBosehycMZGejFtCNdFQ8MYmaPGrvSMzQe4Rm5vJDqg2Ay7TgZDjphXhdcwGzK9U29P",
  "key26": "2G8RRSj22B4n5YG6MZFtXhveyDkVXxZxbDRYwue59uGmhX9k4yYXYGWsSZR9uiXoTB8vbLuTap93ZrrRPHTMZ4v6",
  "key27": "jLurbwatbgfs8AFz59JNgfRhG5XVacqcrUtFGoN2VpbuJY1eg2qp2Vap73mKB5W214evYmMaMwJTLs79taruFPb",
  "key28": "TyjzRzyoFL7GTwky18UDyYAggYgWqfMDH9LBwk7zxAPaGL5w4J6e6CoLdVdvERw47tVaT5dc7A6P6Cu77Saa3MM",
  "key29": "4oVA1iAfEWmtqRWxSDe3Z6r5vykXVwMBkRiG4Mh27UFiCFVAuNgqLVkR9xpFgcc5pf9GMRmoXHoe1Ee9RDs3tdMK",
  "key30": "28UXD493JdXbt4iQoKRWGAkeJYhNr1QSrwiEBR4HvEwf2qPwJ2z5MAdXbf4ZtKPKxJeAJWC43ocoBDoVMhpA6Ym5",
  "key31": "2Six4DhqfkhkwZw782afEbtQf17Mi5hACvvVWAMvUU7WxUV9zYaXTN13d32Qrbyjr6fK6p2KEaaSGvrZg6ufsNdm",
  "key32": "2J9HKPJZk1gA1bsnLtBA62W66ee3RHdkWRXyj9y5ECTZBwbxtvH5hVd7vFvX3CRivwYXTqDxkbGF5pyzimWhCgtG",
  "key33": "4vGCftXbC3VTq7BVR5Lo44qw8qdZnZgAT4bbJcfe9qbTf2AZ9RPVUJRhvjChUft9ZJko3yrBc2GJfZM6YS1yYETZ",
  "key34": "5J3QX2oiWs64HU9z3pkw2zNYimhWoB756QpBkNEXa6WJQSRbnGGSJiUjyoHm4HMW2yC3tWdDSXQHr9eg6ahTDEw8",
  "key35": "2dW38mx6nrCKNN5B1NL12amF4AzSRoLxMN8R7S4bvZwGn7yjGjPinksAjCYKP946ktDm2uNeTErpK8DFUyH8DBsM"
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
