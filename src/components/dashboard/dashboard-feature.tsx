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
    "5UnZAesMAKMd911ZRqqy93y5pcsf53HbkkHjmtVzrPqKQTdqpyDenhxuz4b75woD244qhq26g1qgc5qXSVNuo7eS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kqTjmXbUhRWib4zS3RFqxw2XUYLcC1eRJM8Gs93hdveB8UstSgQFtAf6DSWZqzDF8y2jPc7VvXzeKLJNVtuqgfe",
  "key1": "31ttuG4q5XtYqRfXoUWPPwUHQigT222cH7CpSXe6Ykt4HcBons4q3L3m6zvNUMVgFWxj76g5NM6vFdmPhSrBd7A9",
  "key2": "55Mc5yHH3xZGWEBUVaiwKYGZEnHi3rwmQZcUH39rZDK24gUD8KwL671RVHXm7ik6d11QfWXck1vMEUhrVmqbNocz",
  "key3": "5UA8HEGse54YFpPp1yBhRESCFRUttEJdvjxUoQxX8nsHdaYDDVyvwUk4jH39VW42oQD1aF84zepuanhdViWCnpmo",
  "key4": "4DpN684mDStTamuX9Mj3qW9RH5rSEQJDNPNxKSskHDRvdzBEMQfrKnNf8crEtxeyBf2um5frLWFmi8df3wdL4BEY",
  "key5": "2yX4ifNKMs66ZnGih9g7HidgrcUDGyguLAjyUkdiQXhjsoJDJmrXSLGneSCdVBEtd6tEVYvSVqUSgGxiGwDMuHvZ",
  "key6": "5hxhqq1G7duLo6AboydMUtePnWvXmaxfdC3VwmVDfvg5XioANu1ovTMs5S3w3m4isFJCdFBUdLt47kPvRGcuSS98",
  "key7": "X5vmDAxXAYhCnQn3VK67oxBMX8opEn72CZV8wKkvQNyQrzL1ZUYdCpPEaUm4wnt2pbgAmLvTTKFm2hGgZJhNdmE",
  "key8": "4GynxHZv2fw1BTNSJUGSWJGUtD5ZRTdFXaYopba7emaQbnGBbjYi8TjqSCGjKeSVSCgMjbLbPxDEhJ41N8LDFYaD",
  "key9": "2TyDDq3yYqx5JTmxMzoCz1An8vEHoHsk7qtbWbRKqL26wwho7Zdzdq3ZLnBPHw6sRbkQw7wfEqyFB5YV1BWRhhBk",
  "key10": "57g63LUz7JmDS3ovj1CeCUKtcrsuscHvm1chZ1rRoMUA4dMy9ESHGmvBcugEx6LSxCV2ff5VpdzfXUYLktFzWVbd",
  "key11": "4ywUdoTm2oEvgXmpshvnhpf4ZKPpCyZnPVA5vdJVHWsuyCCdWf6qrPGne4jhhLkEQbzEYQ4E1ro986JcHXvLqpVL",
  "key12": "Hh2mFWvm75ib4uJk3seQtqDpWfkNodcvV2UDSxBJsHUQbgQJHFp87KEXNfK6GhFTzRccfs69wiHi5RrFZrGe6sc",
  "key13": "5GXhSDr7Y9svKBKNRXJ5TT2j2FdF4NJT4igFBGvneHfwH21rYS1Cadoxd7z3W3BMsvBTzfBJqexHx9yvUzKrLpBT",
  "key14": "67ivgZLqJhVvfcyT3N4H5A4RXbER1vshVfbHdmz5DGhkVTjj9XHF3HePo7up1fPv1djQjbJ6ym6QPqw3zH6Mu2Uk",
  "key15": "4KdU2tKU5qnWzKmdHagTwMDU99Gy3GHt4pS9mYGCW3reN6JWRZFECjgJ6d2S4Q4osR1LvppvtPpA68eivNc9t1yH",
  "key16": "rybwWExLCXvsbno1vh1Y64uCDYGT1kg2JBCndAEgZGayBujKdrcjk1uY6E33zpS5qzUhihQZ4VJub8Dk3WTunh7",
  "key17": "5moeztMr4ez9EMw35VgfaYsxT93VawKydgQckYUEkFhWx29W8hrF1rFutVXvaDAKyr6BYwJCeeqxJN846mn3xXYr",
  "key18": "4M9oCUYJDuvWfEAZkB8feEQ8A7x1hSTVMDa2RnyDvmY9gMRYHoBGD4Q9c6KNjVux6XSoYXCetu3gWUpSA9RWksdj",
  "key19": "3JpfiAxL2tyL5PtoHcwSh3SG3vYYoStZGFUrau37mWuB4z2FrDJZoXMWMSgPPzMX8DzyBM7RQgobNpQ6swTknc57",
  "key20": "3aZJHQg44fpuG7eyZuJELFNtn8PZXjuXw7viSUpGcDThPboXMSb6aUYgPpyAptLQ1fWHE86zCwmrF1opdXZXhUcF",
  "key21": "2E1hRU1MAFjBRypekYzk4Bp1zL4WqcTo1SLopqvQY2u4T2PQS1QEYjGZKcut9JZ5VyWJcCkFiGcTNJkADN1wsSWA",
  "key22": "5WJwVXsd4PwdRchbB5wsS5YEXmUFosjyTBoh3tWkPAPTYVxonmLiXZqR1vAezSvE2RTXJu8pBQQqotvAbVdBDpiW",
  "key23": "3Cf7cGfERerpGa1EkmEkytXPAVGv3UiespKh7Gh3gU4LyiSx7RawVHNuTy7S7zqJDQMpRTzJRXdrLtqKj1WUy5gP",
  "key24": "2pgJ1GWjGWrfyCJAf84of5huhfkeAmVt4aEzyvHCHSTyeWJ7oX5NRFNRjUNEZqAQnW2nXrZsN85YqtrBkkXHunfS",
  "key25": "49gcEMQhbyB7Jp5FbxSD2wDu2TcxNBmbSCdHegGm6r5ap7yhP9hSvtv6d6z4cjxWi9C9ybhPobsT9tCYvg62bdQm",
  "key26": "36HZAmJYqJoVJz2EuUyfstw9pqk5dooAkHDkKtTnejyLj5BZSux1r1LyksaEVYxrZSkiTGbx4iBsJDv32Uw55xWq",
  "key27": "4GGm3L3gYsU7WdZvZD2TZ5U68jQ9baQ7TTDjoFLnWMDYuCEytFDz1PNwtt4k8hEQsBQYkyAvmMKTi1BFtnCG2tJe",
  "key28": "3TkCYs1kYMy1kQ5s2eSd3cEkQSmyuHybQLB9E7t28ARScouPjU6BhWDfbDf6XA1vbuXQuJtvBqyRw28rQKjDzueK",
  "key29": "3P9VgK6b2vYrBaRGLhGrvzcrDdHzvAYPGLzCk6xgnknyUYRVYXQZSBfmjut1ESAkmp5QWVQWbwMqavNJv3rZrMMp",
  "key30": "3ewubtnhHByVKn5XAPUM9FfQqEGLP6sd6cbTYotwYnVmsmjJkmLtPU1L7oKco43ZW9VCNaZX3D7MCccjmbMuEeTT",
  "key31": "2oRkVmHMBjtzmzoUpXTxh3GrvHbU5opPJZ5rPBM4okmCd4Z8fdsoW1EXa8ivmxkhSYLEeveYnXzVr87AT8sHpXo1",
  "key32": "2SSqTRGJyeVDaZAY6FHmgF9nS68vW7AXdN7naQ5Nzi4iPpZqJiAoLUsNczpcaQ7Pvdg5jVxVvYkkMU4tEfbtNRwA",
  "key33": "asCYKMaNYjqVjoYqT1hgBaVPEJkYjQxjVxws4d7PVvD5dc8SAMBBKMfxr2FLituYPd1cTStDJC6xeP8cRaQJKqP",
  "key34": "5BSWZ4imdYQ6A6JVvvoP7g6rWyWjGBKtJSrkp5nbnbFrpqtqZJdoFTqGtTg23tKzU393fQQTvsBDaSfaQ3EX8sc7",
  "key35": "4KN53PcvMme8HqKRNLGAqaoJNwariyQwG1zLqE81Ye8DECgyMcmnncAMHW8cpHai8va2f2S6cEo5YCMdv3TUE85w",
  "key36": "58F4rnwEHi7PTJBrddRxJiaqUSgHWGdJQofHywrcuzBGcRzTnBKo7XLukiv6xMJ4F7EQigYFrcPrd5M4dtHmFKTh",
  "key37": "5sRkU5SK3AShC8CJeYzYrUUrcF3p84UKmaq3zGDuuscQnq55xHBHhmi9iBbYdquxPjsUKk6u89hyzK3eFk6EhiUp"
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
