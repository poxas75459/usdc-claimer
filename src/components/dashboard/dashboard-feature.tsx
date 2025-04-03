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
    "3k2z6HEZuu1P9zCVrxFWrto9nrK9AzroDWRgiq1RqbDHTt4vPJMdoeqiEpxZGVSrGF4g3DDUzAWCKFogCX7vUbGm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "15va6a4GZKhc4ecdiBGNY7r57sVSTNgxgzNMeP2rXELyYW2RHe8bPvizk6kqbz8sPFZUDCN8hQKAcn1RAk8csDx",
  "key1": "5R4h6Kux32etK9J4SrsWSV3JAd12mrEQf3y6yK4N9DB1XigaKre9yN2ETMpRpmjxohR5hVqFxPrgwNhTTC1chML4",
  "key2": "64Ei4Bs1aT7TKHHP6HuZ4EhNdUuyGM9wDQRL7ZruxKs5sy2nQgpTkGEzguWCH13DgSUkeZFyHA9LxgFYdMQXQYxK",
  "key3": "3umZ5jvKrTZRaZzVMYamrrqvDTaJ9bEtpkbrvuFa57RKDbxrzrYs8yzMDanRGNkMYztbQtpaUAzod1SkoYm4E433",
  "key4": "2zRJgYJ6Tkb9teGKRm1Ff2ZycKT4M36tUDWiJMWjBwKrP2ocwhuEi7ny3uZpZknEyasfrJgttD5EGraX6Ejcv98m",
  "key5": "2JVLKF7Fe4MUf1SeNbk8R8tN9qJv8pvK8JzTCePfM6W4h9Y9DyZCq2zLA2JWSTfJ2813bZA9Q992j3LRhD71EB6e",
  "key6": "2hYLANVZynRK6TaR7xy3cjztfdNZs2VPitGjy6WyyLsY31AyLmsu2tTkTohFABHcRNjPKsRoGT5c9gmRgtExVTfa",
  "key7": "4SYjywJVT1ob8Puar4UE7GWAj1ntynhNNbhkHr9eLBt8NoCLmsMT6gVEse6yoj7Rt6Zb9XMkumnGJvcY1iaytoi1",
  "key8": "2mX7ff8uUV2pA1MQSYE4nbBXBMNi4Cvau7HtHZyFLMJGNUkwDCTBrFhTLBYMYXFTLDn42aSAbrrB3TwH6CRP3UiA",
  "key9": "2wnzAgX1SmP9nj4Ge4mt8xnPjSwx3rtgDbH2sw9p6GzmKK66dPRRy4zT8xg87WQsHShB3pHLospZuZbPS34VgPYg",
  "key10": "2JFB6jA5keVSWaugby2UszzN6wBFBJmFgf3THqLoazMrdgySNYFhdmQJ4uUBwZs8Uy5HVL8pfiPovH73mh5fuYG",
  "key11": "5tmGJDUNjw9rGWwer2AMDexk2i294NfumwyvU94Zo5eEs7n8iNcdM47XwEdRJrmwsUCx1AZTXFnQrigdPbcuPFpw",
  "key12": "2NeEcxGYobbCFMoQoWf8A4RYGcUetP2MyDJbNEMxAgDK4FwMUU74DyHvodfhpvhb812h1FbQQ4dBViYE2G1QgSE1",
  "key13": "2qd9F49oPp1ykRoLots9Uedwq5yU6EcSnke55NTijpoXNC68mnDFYStgKnSsWZKmVrYZqMR5UFQQsb6EX185dtm3",
  "key14": "5QkJk8Nk2tMiA2q3Q8TFcRMei9PmVBy4mtHYsyJkMerbGLG2jP2G3H93XdMMEVoq5cb4zFgPMxGLWgdjdjB4zBS",
  "key15": "4Vwx7i1eJhJAPB2VCdW1s6Cwur1eCaD7fj2A3VvaPt7nUKkG3q9LX2YbCd5xTtWywnqksr8tqhf8bVabj6Q6xCAE",
  "key16": "65uKbDHPBS42bLTtAekydkMMTB1QJFGNvevevudg47AEHxPTmeb14ir3dN4hki6W9DGXy1wedM7L71seRSqFJKje",
  "key17": "2U9YihzhUURAi9vz4RQdg4wsQWcK2LvEu8Qj7mNPyKZCP4jFkso8w6RyJsbXboik9AdKddUb5M5dm8cZu4KNb7xY",
  "key18": "78D4htKeSPsYNN8yjvTyQST5fQyBcTBAMn4CCHDAuiP2PSW9bLXKN2cG8VroBL6vUWcobyCuNAkeQnjCTko8A1G",
  "key19": "3heYMhTMwq7ZNnEqGFrJ5wbbmAmLESqhYxBCRAKZBbnEm8x6KbpfxBMXuFzUn7uiJTYvuPWxwg88CAVq1XrxbPxE",
  "key20": "4DgR4nwYLZuAueJUNND2fkPw6o4tqMrEgytEDXvFiuZrn9SFqeDCaGjGQkyYL55jGj33BCvWDftUsvcBsWCRQYaC",
  "key21": "2kx69Ek4NzS3zvFajdwYbn2zutA3RgHmKnJx1Sy5ThofBW1po7U1eAwZKbzcCkgkAeWVTY6XwYFTjej1vxNrqMTy",
  "key22": "5jXmW4Uaqa8K88GUr6iVGKERW5RmWa4XyCBm7gcB6inwVKQ4CqwFGKfAWwETJfTD4e1bcx8kzdAdsjqjaHjh1o8Y",
  "key23": "4Yj8LJte7C3KbgQRos6YMG9GBKR8dZ2NVKXfFQobGQ6U2ohrotavjjYeMeWqDJg5gQYYgcpBfdj2Q2FHeiqGSP51",
  "key24": "4qupGwGNPBHrSRb26JG4Jgi9y4cfxyYsWrPc7XtMYMpi6kCSQk5epkP4jMQq1nq4JmmhQnTAyXzr94qXeoT2qfMw",
  "key25": "4ixhhn7x8pjNivBV6goScBXwv9mhbSEGw5qwD9QMCJZssCoHVHsVE18iv2AmcK2jJN8JWxDnB26UEcC2FuVBiL2W",
  "key26": "54TQYsh19zvD8Vqt5q2YVyqEYaYNZap1K2BNVsgx6vaXqTdAhn4BxqES6d3VwmgdT3xPng44JLmYUQwUgGW2Rvqo",
  "key27": "3P6gL7synmgSEF53SpbSSsJJLd2CPGzS6KbKLk4ke4hoywA4BvVqJcoHqXeDedve768DBXv89qXUFZfzf1KcjMNT",
  "key28": "2D7LSp5Hr1MVRMgCwVjfzriUXnxJ5BkTNAKcS3VnMsj6h5GoEpzQrL99FqZ8UC9BPJmmc8BL7o6WB3Gyi6MQzDNn",
  "key29": "2Fzedzn7Fh3NMQceDhydDUF1tL6i8TnZGdNQwuGSVBm8TeT4ccDJeUmnQsfmsc7Nit8twm2sQ47WnYAXMC9VcTp2",
  "key30": "fZV5ZvQw2wtVAvXDuGWw791Rpn5bJcTSE1wnkz73mvhDvuwuA7xEbc8WWrAQUnhfXJ7jsW2r1vrRfq3B6VydqU1",
  "key31": "3RMuwLHHKcW83Rpur6S39ByfMKPUQi7LWQvbjYh11BzviHpwbm8odYnTsEpStLQr9a7Jcz8e6TMnNhqUErEhSb7u",
  "key32": "5jqTBS8BdxhJ2UATqvFP4f7dYxDG7AW7fTLZZMSv7x9Qn79Z8R3pDJYcG1EHuqaq1bBhnhEmuP18Vrqr7qHxPbBA",
  "key33": "2QyrKBsy5BVvY2dqQYoGYej76MnCB7zgBjfF5zfouy5a8dcLweuKhVREUyRsNKE9CAT7eRhuxG9YyJUnfL5tQQ9R",
  "key34": "65AYFQeAeNMaiyfT7vxGxJLPEFmkwmJiKFNNSaZFKffWhKn6wDRaUVGnoB1x6wDBwMEboSjbZZVMnK1upxaNK6LS",
  "key35": "5Trbegz982NDJtSA1qWpLGczLj64UVwUZ7A2Hpq4KwK5HG5tJYZ4GyAv9nXXvNtuJk4YnszQXxNywwV9tAyp5DPx",
  "key36": "61WJfRrh5u1ZTYnefnbrfAbGBzZ6AkYGbpv4PG4uy9CHQXXdQXUWSaZ3DWfNQVTXxp1kKvVmBEKiKdwuBmSWT42J"
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
