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
    "524jv5xmBTZSkV82EK8u3uuWNRMBzXyDJzhiPp6LfEaHkoqjcryhxCvw6aqqPtrSLXi3KxJaw5pxhV5jCTRLaPA7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xLAm5brxBuKtHMYce45ofUdepi14ck8cgwjH5jLMFRJ2cvs7MaQ8m45BRPAaxhCQVR4Gu8cPqEP6vLse9fkXRiA",
  "key1": "3qGRWdHbMidZGjam8KgBEB8izMiD5aF78v3AnnSsQ7Ab3LoqCVpaDWBRo5ntriwCAz3beMkMJBZTsSLYabuevSYi",
  "key2": "3up7WcyDiGixbVGj7yzUrvw8hXBdwb4QSTkkaTNWD8QJRy3mR4KZtGZScif3u524wjFUZgfMZJMb3cLw3QxiqiGM",
  "key3": "2UE7Ft3DPb7VmBKDKxfucz6RHoB2gRq6wUGLQrDAdeGgkoLhFL2Wzm4mmiiJq5AFyHmdaGLTzC2uWwm2kbowRD1u",
  "key4": "ikzbmaUq5XvCyDLAX3XW9EAsq9AdG5tqS26vhFufp7CFEKAHa8rtWxzzpETxn7QqtBuwHqjw73NCK84Vavpexe9",
  "key5": "3jK77hdRuditB1PTaJKng8gScsUMU6QwFisyQWS5a5VUZJXBpTazos3ZDQnyj2ajUD3L5YCJ9WhjHNqDFJpZLwjN",
  "key6": "2hWhZ6zQDvEFzRU8yyiwK5Nm2Ty3KoNbrVEAfW7qYD9PHV5Bt1AUtHTRsLpHu2d9CD2s4BqSwayFab7p3A53hCsJ",
  "key7": "57jx4iVESVA3uTEbpe6S9NPE7XgNBp2XVXChoqeZeEhyDXw9y8tmoD8HqB4gx8UZdYQ8kqKjCZ2NDcUsYnAqezhq",
  "key8": "tDj8No7xXQdWN6hkvnZqEL6KGG7EVcb8KCLdiP5ab9m6Ywnko5cAa7ygcnuCeiVXyUUVkPP7TkPGzsxXS2Gqwaw",
  "key9": "2YkXYdYoXxdzMYhw7fEVDHECRi4nW7JyhMsBoH5Lk5ETRdeAN2n7P9WnniAsXuQdQsUBnFqrmwCnP44BKJFkHbuX",
  "key10": "5hKMpFA9cTEGAZ78ZgpdrZg6pFbWVuFXogyTdknuVDmpfaYzeyvsip5KAKUhX6KwBX7Zmwf5opwPLjXt7mGDAq9b",
  "key11": "2HTrZuDbyjHZQDZXZasDjFBJVomnxTSwRPcc3NkVchzeFQ58YSGcpT4AoXsHe1Fo2TTnKog4q6eY1rzEGtmwZdEX",
  "key12": "5pJQCdp1ZVuQ3rPUBZFRu4eAMmaJ4MMgrK1ZLpRSkK5PDwy3FdRRiJGRSGUU4Y94HQwjGqcdJp7EaVRMVpd7AoZ3",
  "key13": "3ZxU3MpxPEUPrAAA4RtdifU3athufEmAP9ocLUxF1Y9FTWSYV1Ae9unLqW9bCxAKajx5GZQ6eHaHiVh9poa93iSq",
  "key14": "US9MwLYtYQpoY3sD5kmxVzgfhJ5NF5zY3VvwYQjjrPcTrwMeb7NoPtRvATVJduRzCv8MeJ55W2iRJcvVB8W9vhn",
  "key15": "5Tzfezx11PUw63c1gH4r2Jks13yq8S764L7Lqc9oJ6vW4aA5zrpjL9eUZjKBep7sKc8nGjPURcxfbjULGznrX66Z",
  "key16": "3fro3BZ5dGt2z7DoPu2KF4mwkPLvvFbDogvPSgWViK4XuoxtaCPaHVnexTZ192vJPuUUVHCbMWSmiFcD8Sm76rZq",
  "key17": "5kSx9vMX8CUHowfzVpMTgAydHcsFS2Yp6GwAiBQcG4QdCvYnfHWGeMccL9xD3mGsqWHfkJ1CNprWQw6jVj9dA6hT",
  "key18": "kRgRvyjcorj8qpHwbvvGurdnfejjxa44s8ytwH2mv8zktSDvp14XFu8CdcBGRKf5Aaai7rgWNQP384uV31MH97u",
  "key19": "2Csfc4mqvNeiSEucrPhtDDjyYHSBxKvcfbkNUdLJHMotpKQwzU25pctMnwDVKjTKDsm9KswK7pvvygvgDqFNpENT",
  "key20": "DVhz3Ayox1GNXYzU8T8a2bjw481CZFgb1kaoUehhW9gsBA88Jc8pF1oNFhMqBREzTZnJ1HpbPKvTYbX58oU9sCy",
  "key21": "3QUNe6TX94VuvNXdgFAoSYpevLSPZkyvFSr1275dESig6zPF5H879uD9Mj2LihrFffLt8dq7xA5cePKNhsY8k6WL",
  "key22": "5eoJhDW483Y7ZLPb4kJjXpQAHs8Lvjnw44tCsdMd1nZPXjjNT1HyyTwjf4tsdt9N4pXF6MnUaoT81rHFhDTBjdb7",
  "key23": "49qz761mAoPrhc55rFBfcUEv1LXQkHSBZEWg22Q72AmXtiiAnuB9hjaR7aQMDW42UganWGJvYWWpq7o1vGJ2jXaV",
  "key24": "62XB3UF8jED7Tmf5nRFHUpjXNEHAQmeDpNrHwgiaAaactKr6ExW1nTmYGr7juViVEpTKG7DJzr1C5Tfv2EcqZURP",
  "key25": "4CSWpNDRfwueWKtvX3pENALBmXL86WyNygkTjasLnnJMJBbosTqCr7TeemjCbJhPqgRKKenZp4g1x4gR3xe4Kamx",
  "key26": "63N6ptAud8JstimKW6t6HR6U8PxZfXqBEtj8zTsd38P2wPL5xkXUMtr27k7rSdZ2tQAv9bLU2MfgzCnSSH7ZHnNi",
  "key27": "2cu2pjYYB7NXgvkeH5g2VtZz8Arq9joYxJUXcUoMDd82J6aK3wUNUTrWJaYwbvEb1FZmR21jE1ZNy1Y1ZRjydmE2",
  "key28": "4FPYo9fVgWbot1BniD81MfZ8MqWUmDaWFbBvsZKTmMy4aKGSoniLKgoZreyuYXLUnTT25i6B1Vjgu77tGYpBPFFw",
  "key29": "4yP5Ps1UytsiaQ7CguAZruLQtDUyfoGq4mDBwhEL7NB3cdupzx4EbqxKWULUYUdH1gaGaiLb3pHeyfiq4SAwMNwp",
  "key30": "671pFzL9EJwzDpZESdvHf1mHvnGUZfzcvHupyjBJx2UaDSKeXrBkqrpjPT5ivX8vpiGnKJCZU8NSoLghkGoMw63a",
  "key31": "3wnK5KYDAtAqGVVKp5frsfhbsp7X24V8egzLagBSpXkZBUW6qRv4UovEinqorRqrCEdN9Qn8tutFyRvmYRS9mwgU",
  "key32": "2Eg21L3hAQ96UJsFJ91veWNfdccZnoxJMH2Nnq7re2FrHZgKzNyq8YL5NRw7BiPkVqUPydQDnYPdNUJqx7hTcJKx",
  "key33": "5UU4jPmXvBTEwm4sqGnVkhAzatSCET8MW1Tkv149g2MGWAw4zkTAPebAswisnCNxTZSTmC4CYQccrTyVSrzZZnS1",
  "key34": "45RSFJGD7hBcGnzJLmiPGDSrQhVwWH2RNXZ9ErWVGaUYNX17MzgzR1zmVsjWta1zFeRBp4wWVqohNvCb8cXrVCeL",
  "key35": "6129ZncLgsyNJVvBKqmW5PNFTLTNY3cuZNQuRwyQKuqTwKDfj3BEZNXLi1yNrrpUdGeadDVC87dAhX1CS6iqtM8e"
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
