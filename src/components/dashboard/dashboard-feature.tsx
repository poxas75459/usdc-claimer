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
    "USCntH9Nnh7aKBM6bXfjvRrbKcGqLRwSXMcE62xJTavSv3oJm1Bhvkibs1KEfwHhBDKpPqAiTGec6siSJeBpDoL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rdD9iMjj4aCT8EMX6zkqFKnSy1VwZAGVEGMcR7PA3b98FZ5UJuQBmReCAAqvwZf7FBUSwtZrfTj9u5e3UR1pELZ",
  "key1": "2N9x8JdjC4crm9Hb5DA29kUXE9UzCEGtMayZ1TDr79wxUhX3jw4f5WvQyeLyQ576VKyxYs9zVhW7b2FAdE6ADHrM",
  "key2": "24jM3DpDdXynrZHq8nXUG3pBSQaE7bNrPEEC2Sz2AnDqN4h8MrBER7hmMy79N3k1kDg1JH7mzgQBQfqa7JUkeZHK",
  "key3": "2fsiQjEYWcHtzPPZca4wQTXStG62dNqMFsUwCMmqZwTLCsPPR59AgCVMSt23q313XgK2eQPwFdDXB12ESUCtaPWc",
  "key4": "UgBBhiPCJ6rEhicgzfkzWPR493iAz9R5JCBJdxewjoz2BUzDiDdcXr8BRrAYfYctoDzzS7dvNSbkDnBMuJYjNHs",
  "key5": "37HrbkzYvbiUGzKofrBwCYpGTbhDWrTcMhvkjY9B6JiBXnENCrRGxjFCVnJrAxS6g4hN8ox1rHTC4EJbTbDPY2F1",
  "key6": "2Svbf8jLB29pANbfdfjgG3MvCoaAcjggiSQeZF4Xkp9zFkxdvyJBPoankjuJYWLWhNWm7d5du6dWmibuexseAkaF",
  "key7": "3fLk34qL5FgNxXoStbk75GC5v4WhvYgyj2jWNciBozeb9ZH8qEkBK2Jae2757suRsGMp6NQ7JdKhizhv531GAiat",
  "key8": "2MyJmjMiBM4aTv2Ls81yFFasVdmvVzW687qDP8Tf3AvKTq28PF59Zw2odkxan1zsysd4xBCDoLJZdnDA7oFKq8Aj",
  "key9": "29R7CU9ye8ZDFnzHZAvg8piXpMBF6nohY9Jpr4B4uuqFgvX4wjEF8xa64yZBtCu8VLD88REs5C1n4ZpMagSbBEZw",
  "key10": "Ajo2zqyRnzkt692HWhMfWaEsFXeHUHYw2uqY3sHqp1BZ5i7zZ2HoDyAwtz7Qp3nHNv3aoTHBHU8kapC9yCGtJwz",
  "key11": "5FuB4h3ZiHfgSrE9We5RiFMyrJvj41xrN1zf6u8uC9jni6H7ZWSKkUcwYhD18wtMe1QAmf7ceokkRFTscGYjBprq",
  "key12": "3oSyxvvZrP9sXvPpF7ZYCpcm8vay538X1RqXeknEtKY1WzjHR8s9mGaEgtWDFn7Z7WCW4JJYAnFe7w6fHy66oZwL",
  "key13": "5Tgi9h2tn8ysBHBqXErPu5poAgbA5HFEC1KSpKDT31JMFAJySGLakV6yEbVovnQFtgVctFrMhGhxyUG9s83kdPCK",
  "key14": "3zSjWN7XihtQo6XNVpu22GaGymHAqZ3183mc2C4WhBoKGseUetcEkAvt1cZMXoHZ4gJvpBurH2dUvc4XQJifUqFN",
  "key15": "2fg35V9uF4y8CPni875uQKzvqsbyrkMm8g2TFUimp1ryJHURz7LKcpuQE8KDRrLWQqKdFgiro8U3fkJDQykXrZ12",
  "key16": "2kHrdFuohNeC75orJfbyz4f3VvXkzcGtUzbRpeKh3WaXJLuMGVJQV5yDjUBpYi6bwyS9VNs8cpB34D7n7MoDDg9i",
  "key17": "4RV5GCWPArgEFhJSXAP4yxPAg7E35e7o77VeKYqQ3YM2GspUhgESabUU5yxm5vqsJPcyQrn6yV8H3Wc1uYWLVWXJ",
  "key18": "5VGs1bJSQLeUihJNDANYKrKMG1EomTHp4C6PuEssJbTJk5fpMDW7LmHhiKRcD63HT6byjSiR6u9HgUPsNqgb9XrJ",
  "key19": "4qYHnpcma6ANdoAgFyao2k1P4o9fdV5ayvj76yYPUT7GDSSiu22LBSdCEogAjHBuwjg4oKnvCTkW2vCWQ7GH6vRH",
  "key20": "C1WVBisUWCWwFKN3XqNTfzb5b72VFZQQSAZtPKA4NWhZB4s9ZsHtRCxuzDWckAq8cVJx8hw8QycLXo7bZgV6eUF",
  "key21": "v4zWDo2RCaZDBDwRxNoAopdNFNNK4UL7c9Nxx4V67MtoNQUYqmKUWekfhaNiabuV2JNW3KRADGyLDQ5b2vPCb11",
  "key22": "5zFZHLYPmuXAQjzMDf72HrpJyTYHvmztKZuduGnJZAWaSd1ebSARoVeaLbGbjmEGaY4xypBsUzNJ9SdauiKH5so7",
  "key23": "276cr8MS7wYVgy54LMyDY9FdVRqeupKDuy2uwP94TRPEtLJz6jzvu5YS2KfFCtB7ECRSrUbQhgqCR2mhDvem6qCL",
  "key24": "5mkTmzkFtfYo1rX2HxSH4ANFR1rE6VuroZWZYG4inFXY8RpDu7wwgjCBhAQWqQNNpetnjvCY9uhs9DBYtjmensJ6",
  "key25": "28zQiCuq5DJ6UEUXDPg6j8FpNU7TjfKuzR6WUancqYWXfRjP8o8mbAhbhsVMVphq1L3E1jLanmBTAmTrbxJQ8mub",
  "key26": "zA73MnYo1uUnSJLGaDWrS33ExF9ock6fuY41eWjz4B9J5Y6TQYx7ZVuekDL5gHwJYyisKFSipGrYkoe9iWULhTp",
  "key27": "4JoGqhtAZdU49imhHsBjTMoP2NEd5utwxQBX4LdDbjWV5p2pbyjrn5UPjii1tenNwzhp2NXrWLBKxNgE3KsWAv9f",
  "key28": "5a55MBDr6NBNUTveFwvx2xNaimTHsBoCUrRaVqSjwjF1WzooAsfUEnZFs6ZLJoCsrwPQMyYkJLDYjYLCGkDwqHTi",
  "key29": "2bd79kYpS4MEWZFceSF7N5fJb4oHTbo1FkmhpbXJz5CBtoc6rS2rvvXyaiacuGAy58JDv9svQt6fu94jZ4CrjfmH",
  "key30": "3F2CWdNzG94VAuwRMfWrg1VHe7HHxKMek6cNAUjtPCtEr1wKN4drdcdaMsJA1Wmfs8Gh4d9Z1A74NeswszsuVDUk",
  "key31": "28XaCh33XzYvtKMNK9bGev1tfJU1eTeUyFbwYPHKuxLUBsK6zFKw5nDy2QfYoRcHeZtPrU6TgMGkfw3cpg6AYqYD",
  "key32": "58T5xgYUZMzsdQ146YhBxbeSqm7JnAw3p6BM3QaUWAHVjNi9W5ChLRwG8reqiwywoy8bQARHh9P72WEMrx4EgVsT",
  "key33": "4ZnQ36dUgaX2vvqqRk4kbJwk8dhfBdAu55R71fXfuaLCvxsipizns2mfEgqLTLZ2CLqg7GxQzTMqMcGb9p6shGBa",
  "key34": "3cSj8Nn2WmjEGmR5v5mTMJ8iLsEWwLa2iLSSgUhQRAZD5CGkeemwDKscFavFxFLBp9UXx5kACHtZkGyNi3J7repz",
  "key35": "6JcDC5xe4hJpHqfh2ZdB3YbDzZkaY8vxEorNfB37VZnxrvMDPqEQm6uRmQYq2g6m6smbeS4nWjbuZSgfZdDipF7",
  "key36": "3uyrzXXBfFpJ8iz7mWUeCVu84ouUqG5x7mtfKbXBBb7jJxS8ZGKZjk7Zc12gXAmzeJpn8nneAhucdFt4cdBYrUrf",
  "key37": "YqGKPAMsVSp6RWAAK7CKGjPoLPmcMrbcevVf1kKf8HN3NmFNRN2dYjbrrqCzdShZ86dXtGjD6AhWS9qG2CtB53B",
  "key38": "24paJSo1p8jXBztgm4JAbYqmDnUsb3NtLuoUbogHM7AczYF7AXRZQJVNJzRatYRD8Y9yrBwA7x56xQDEktFLtgfD",
  "key39": "2oDdfRrXazDew95cqU5szsFXW8jNKh62qYiTefoQjgaJazGxv1Xmx3WACfKhduxS7JbvmjS58DTxwX38M19cjbG3",
  "key40": "L3bd92uDf4hh64Qa1UzVfLqBx8QQkXEkQmYYHZbL6J3Gaewrs6iPvfToaH4hEbmhKtPNKR4GiomH5EXVhHv24sK",
  "key41": "5x6mB6Et1fM38ERAC5uCdpKiD5uiqCYhNan4B3fVVePMZ6LumxCZYTxkKsgWTf9Ytwvhjn1EjszG6dABvaw9pR1p",
  "key42": "3Z9S26fosRLzZ3Ug2LgKL4fcDa6GhMFuindacVbZJREoPphtaHTDxWy3Ri8XJAg4ivsha4RmKaqWSNhd6okmzQ6D",
  "key43": "3WK5tV8Jz9f4HbwNCSxhxwFzV7sriHxmcjqDbGVX4yqzqWMxSo39tBSaMeRS9UC38Fs4RotTVoZxtVFH3NZAULNT",
  "key44": "WuwKb3dcqgfCbjaE3jT8quCR73Y3yVWA1A1WCWcbKvwb6t3nKD1vwZrQQb95Ci9zG5RmVYf6HFU1mphFny8mVoP",
  "key45": "2ovCgCQtGuWAkhqBsuCaGx1LzHsKUAeDdfSUKRfXocAKefZsFQJp2ycjJUhojWJAcNMWCHEyWQ8RsmKYcfhxEfnM",
  "key46": "2Y28kywvEsWPmWhtEMmPcdnAgfebtj9meS5ntr6QqqY1re3rsdyTdHbVgGjcweQkbscrpXiBf3xGXxHt3p6fMtTM",
  "key47": "65mzoDiohenLg1SDg4vvzKMbBtdNaqyeCfX6c6xssmePnihBfJHu69G9s4UEyh2TV7fXDQXVosWh2HxhZKGj8ccx"
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
