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
    "EiuyMNQy3EprtD6mkXaMJ8DrUMQKWfBxA9BGME9tzcHVFo7obtw7vRUPfzJgjahH2SsryUpJXeMRrMbt7Dc53cE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X9u8CTSzVqDKAzjtBh1kNGr5TkMUfT5T5n4ZWbaeuBNwkzsfN68b3e5LE2syK7R1Pmaeq24MSZRRBi19JYe6ae6",
  "key1": "2JPFoEgQt36ZabMDG5WkjjZfHiy4md7Z8aPpdcE8a2JwM9qYMZcUV2MDeYzWMnbfqjzj5JUGp22D9v2D2t38JpwY",
  "key2": "4GKTXqQb8FJxuhh4G3Ax8jiJppxdxWPgyKnR9LsbEbnSF1gJ8ArFSC1DbkSBSJBXDcN6uzpFPVzz4S8T2nbJs1RN",
  "key3": "36j44njHLQEGZC5v7JKmAJWa8AN4QLZUkaT99smY1goPRYYKKMNUAwXVEPMX4Etjm8LwviAtRjvtm7SyPv33Efqp",
  "key4": "pyD3s1siSLn6hst8zQETTdYU3giKQDmFggn52fdZAZ9hHWUua4D5qQnSwf8pN2R3i9wVKv75mxcsFTsb8TFemzk",
  "key5": "9rBdkSwinDyo942hDYAHE2fSY7vpjEwzfoCbaUBSvBMxKrUtr3VaGgNPZfYdYeniAyJfR9nUPPjstPB5hbpi9eg",
  "key6": "42dSCj3WcmNVL1EbxQxE7U6QAeiNxUF3roe6nJv6DavccpmKkByT7xCMX4Hbw3bRK19QcwybT33rWLLM2pRFs7ze",
  "key7": "2o8tr2U7zEmXhJyBXKDFypznCRGWu4GdN53R8rLKHnMPBvcQRvSXZsfp7cyEtWEzMkeTqQ9gxNJ1j2ZZ7VQbWziF",
  "key8": "4BXR9ocvm9a9kzunCJzxWMHfM8zwZYTgR8oJ6PXBV3dPnAuBc8hnAsU3zTW5fB13vD6xbqTQ3LhA65d37kYE71AY",
  "key9": "64XbPtXz8Za16GyEBf9TrWDouyaQrniaA373fuy3QiTj9LKJmyB1hmRFpQrKSGZfe6EJyL7teZ9Dn366DDuWF5hu",
  "key10": "2RJWbrsgxnio9KfoZ3rP8YqZ694tq36ibuaNGYgihxEsjsRJHH4j5um6LKbgca28K78oHMy7fpyqsrnF9qRdgaBD",
  "key11": "4oRbo71XgWjJVmRNQgyGw86C4tyoF5Rxa6JWa3LnmgAzMpP6UjFnuz8KrCLxqPd9BRu7MTQmTKFKCFTDy4t7WACG",
  "key12": "4tCBhYAuN551boUS1gZvDBgEGyWAk4LSZ6PHKxscDQTrNtdVnsz6noFHiYGhwrWJZ83dNRDoWagxRBt8gGQgEH2",
  "key13": "tx3cExwB1ctvR2Atpb7aqxPhz6dNadbJ35HLKwKHRjMeaTRskxSZZadpL65idWHa1a17KJd4gEdCSrHnBXfAHzV",
  "key14": "ZNn9q4ZjCBe5HW7k1YxBE6XPL49tYhD692DbvttF6BJBia7nSnmPJc51PFwQSFr2ntzTZdUJsRooSkqKsd3WYSA",
  "key15": "4eZ4kAZJ3R5TAkBnvyRhB1pwp7sP6uEctydzEAgiyEkq68ff7x88eFE9bvdb9gxWRdyec8Y5rtCuE1hKSk9Yb7nd",
  "key16": "f7eWLdREhWZwxUt2fYP8DBF9E2yUPQASxnYM6dF2VSZpYtMotK3DkWGHjxU8tRThaXuS83bXLa7oaWFw4y5AUTw",
  "key17": "a8BXmjiuMByQU7xawZBSMHwTdDzs8J261y4NDGbMXSKH8BtLYTZdNSB9H2nqkx1i7KHDdSDBMdzCgkCR11uAi5D",
  "key18": "UJi9fC1Ef8HjSmSXwPjBYBAB4gxcGeYgs6LENFZMJckA65iSBeGqaxrWjxyviibMYp2zjpRh7cz7EiPeA4YiEyL",
  "key19": "2WmsxLR6AdZhfsjPJUxhgxgiuQzqHNksCEWPMWdT7HMxgTXSsqqqnTtsmqWWi666mZHtiBYHL9DY2QCyYuKoX8zj",
  "key20": "A29orVxrVj5Z8nQbzscVwiT986BdqtC3Cw5t2uYorGTwBSb91eT44CGXvXnzTH6okv2xUs9JuKipEtAuXTaZUxt",
  "key21": "34TjZG7ydCjoAEWjTZQ8diLcaietRTJC41DvKx7M9R8uMSiUtxnwqHMF3oghivuJuAFqR53i5u77evyzeKwSTVf2",
  "key22": "2H7H1FF5v31scmV2W8gerDLYpmdFVzZLqoT9UqAqF662RU4wJgsWyCfXPNU91mp7AgXKkbubVfUUoqdedxxgXud2",
  "key23": "3ajQw6xEunrRkwySN9eoG3iEHg8fYr68SArmj3xmzRZUyxVuzQh838bom9w3yrprQEh7gyFbZTdRckbo72Dtu8t9",
  "key24": "JskrGkE7YSDvUCc1ZW4eusJ9cNfX65UWEH2Sp4VJZJgzruWV9sshRHtCVTQjDU2g7p8BD3h4ZEt4R9PD5Ly81VP",
  "key25": "5PvHptyKapEFiCoyu1LWMFykcjsuMi1fAFfBrR8A5D5VXEtp9XMZmbu8wGfkpd4jkHiYtoq6pxCxJfDER6iA7KSs",
  "key26": "8EHw4p7yQuEoUZt7G6TKS7gfqmA78dYYcfLQkcxfN3P5gpc4bEbH2SE9vZJRhdMXXTczPr1xViZY5gC8saQXUgA",
  "key27": "3CPc55A16iLwYPXWsdigbGwL4x2KxNWZnS5x18DUAaYb512TiZZXRzNBv3cvk2wqcpjdM6K76tUY99qKvwGvWD6t",
  "key28": "2J6xkobJSSavum4qsBkKvosp7JmsYFqVd49CAbj54y9fUzXspTGfTb8V6yGNsMC3zFV7bP4UTjR3XWwzX4MK8tWc",
  "key29": "4efXsjcboq36JfDL7vv18gac9y3SSrtokQ4zR8duEHnNzcNpyRWb3hiWuv4CLjwCCvctiQQ8MQG55icdsHVAAYWE",
  "key30": "ofzaHwsWczB2LLRWaETJw5qK2vRk3CKAiaa9vHNWLs6dNjQPZKR4dx2Erhiey7zs6q1T1VfjJhTZTjv2RE8MLpU",
  "key31": "5WcAweyunqEnHNRNTSoY4tghVjv1PwVXetSLsNvzFF2B8sDDpQQ5CpwHiAnwswQdfB1VA7oWMQJ5AqNZczxAjAdv",
  "key32": "4YzaThi1t4vFNQn915UXsHgCiaKi6CrGWysRMsHeG7rwPC6kUmstyk71engJyPyBEvCzSgak4JBxpidd3U7JZdSY",
  "key33": "5N2R6pASKzNuCd3pyXFz3Fv65rLekV8bhWFPJfCDRuoUmX8wJwPm1afwehVNTJmoGhTLGFYDPVMNyiKc6j9JU3LH",
  "key34": "5eJz6bLZ1o4g6VDC94NmQaEHnLsfS6hmKW4hFVH14KErH92R5mF5vue3sguUBQBKSuCQMPnqdH5vqFkhuyVoUF9h",
  "key35": "53hB7ZPKyXfyk7UdwtwjGYEreH7xyLSLCx9fFH4TvZP37R4pocF1eZhdGnZnuyuC9giYxuvSi6iHKZqhhcZZ8xwp",
  "key36": "32TvCFdcG3G7rW46HDfZmWgRWCXVJ6VKVTwQN4n3rtiuor3rk26SPLVcU87VyoxY4K5ompc9M679W9tADEEALZ2E",
  "key37": "42p181ANGREgGVzJYKW1fLHLLij7549EjBoxsnGfpLpAhhLXSRAK4DJCSQWmE6PNrApBcEbTbZNApK1mEcrvoydx",
  "key38": "4zbxgM27TS9c93XjCBgmxnYEY8UFhJnnT9HNgCD99YqmpP3Daph4x2MnGvfwtcAMrcy1o9T9mNaf1MYKFZrTjbex"
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
