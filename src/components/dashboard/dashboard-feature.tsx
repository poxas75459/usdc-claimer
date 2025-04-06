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
    "3mkkKypMX1TDiZ1LpDb8rxrtzeXBvJBjDQFzAewNd6uHd7yJHDMPkmsdPdzUAzVBU224RAchKxUVMWckULD3QwUe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EztRp98mzQWvi48CaP7vysCLFwx15PES3qJyBRxhy25UUevXkuoYJ8vmhvHhqvp7yXq4gQPDC8YV9zQmWYiRBwV",
  "key1": "5CHYixauQ5PrrAbJZtibY6uqqQmQYFhNjzuHaQCAKwp8aP3daNsmux8Aw5TmbjbykemNP5okGKSCVw5jHES4vdZn",
  "key2": "4deP4uNVH65fd5JkDhu3eRxD7LkwhMCrRwBoEtL3pzXYj2ePMFWkntcssDnshrqeWRJaGCzNSZ46Wk6pGprWXrdi",
  "key3": "3zo9bzykPWdbSjb1vHUgohadrcVzuaEbhNek3DUfhS25c3deU29Ww8oPJngX5eii7xrytq81gDitstSqmJ8e2FR2",
  "key4": "4zZshnK51jE9GnzTAbmmJ5SWbLwBYPpjTgyzeFeWuepkac1Tv7w99sBjGZcdxwVarYarLwgHYCyoARVyezFRZEqF",
  "key5": "27HP8xgWm9HqRVcJspVDceZT9bWzdGXQS6X7ntqMjW8aeNQAhyvGyzdjH4qZRyxNX2AMzD9xcZqk1YLBUGXZtgbU",
  "key6": "667EBUGrAH8yjjf8RaJ53G6fRrhQpvHAAn26kgdVTejbac8xmUL4MVMZCXeM3FKjGuuHY8QeWMe9UMsm5dXZHBjw",
  "key7": "HxtPQnx2FXMTVvFHf7w3NUgusAGd67jSY11XC2hY1rxHBU831aNFcL33t8KBAuRXgTUibxxPYeTJBm5HaNXJJct",
  "key8": "4g3q7WjssJ577fca5uEyty6uaGdmYDRMhmNVNmqfj61D22yHdXZq8cWUWWnrmwRGLjzxhxUKhocr8NK97Rkzr54C",
  "key9": "3b93rao4i5Lfkv8Q8XLaXWijjyC9L6csoDsoWwchrks9o8LPk7KWZcdA2ehGPSa7JdpFzyRRM6dnwQug5oekrVKf",
  "key10": "xoQoG9JTsgzugQtdpBXCTgjXqHD8hZ6M5tRMCBueEHHN1CZNgdpbL634k8Rg2zv3VSaWXVFq2Q4UFPstnF1P8Kb",
  "key11": "65hiiY823d2erPLyD9nnDukkatBUz3hbPsUjVZMJ1BctQLvi2svSuDgFJyZH93zzNw8UQd2iABqnHuhDxtiR7VtW",
  "key12": "5aDY9VWvAfAGmJdTfTnJjtiaE6HKNgcwsKWcPTfjWCEcmeGUq6qW69QqkxHw2vpcZzrce7TE2hhnkdsGyDRzNNxT",
  "key13": "38U7zrK7HjReuY3YPcw9P8QQBkMENCCXTodVDraXwREfiNZJg5abWXcQpUu3ycPYJPDwC6oQTANLqRArD7FHonnh",
  "key14": "bZmxzkRRUPMsz4m91NktpUttugrXiTkysmSXUM2qLrBEYVuGc4yJUbvVmbjHjbD7rGcyKUfkKFG1SrXiZEft1ie",
  "key15": "3X58CfkW6w2wVuYBgZn21TbBy3SPZMED5tZbVEJx4mLLy8UVGmfXo6W9YkfU9wFwbihUDQQxnjNL4von7nuY54jv",
  "key16": "56Z8djyQuzjyii4KRy6pzgbvFBJB1eSxA5UnbrdCr6WPNcAE5AVfSg6SKAupfPcBG1A8CJfyEenbuZzZZefPkL77",
  "key17": "5Hh8NaBwyLxQbezMZDs6DpNXjkqda29ThLRdXqJnWsdBReBXadJ6WG7vwgJBJD8yTXwsQVP4hsqK9NNJzr2Rkfy9",
  "key18": "55nqtVAT7H8vxRdYHBuUweaEwuWgfCHxjR96zhca4XbQcSkvbjqAKmmaTQyBbo2ADz9j167wVQvPRFxdguk15jpN",
  "key19": "3fPUS1CXgGZF58aMm7V5cFtwMEf27NcyLKHXpTux3QXVqzVgDqFzSJfRSWLQAwFSzAtMBULLKbcSP4FZcghQcTi8",
  "key20": "2K6SAzqnLvtRixPZTefG1qStboqv5YTGUfLwrKgUdc2dczpY59xBNbpaihPwq7gU2qL6zS3GAjUS72neRUZRxWzM",
  "key21": "CK2dJo9BF5i6ZFkojJBCckpCZdbyVhrbbntRPPbYPFHjq1szN4J7b9TjX55BRBhuzdGAPyzRNN3MCq1UHdGwfN5",
  "key22": "5WDfYvaEEtLwni8YdzNNot6YgCihgNbjaLLL52pQ4cJaU4UnDrfahi17cb9vQGg6ndHMoqcqfhPUfEnhV6RZZoqn",
  "key23": "cExfzRquaqkAPTTEQvkNM7gQhiU9Rf3LWHHohNDaKAgwFcekyqwNq1ojWZdG17Vv44yKzwZf418hnG42JPUuGTg",
  "key24": "4c9jaeVNTBwV8bjeemNXCuYgiXgpyw5gPry46qPhgGLXkvqYDgBDCHq3aDHtkcMAqfX6p5Jpkzm9GfJ7FnqZjFLm",
  "key25": "3d5uUYnZjVs1qPSNqwHj3sCZnibvUhXs8kE4xXNGG39ucxLBT4gEzuYHM5CWFsEPAdmG5BSAGVgiQjQLE4sXyEzH",
  "key26": "4wXkZzDB6PNZdWK36bpuSwFNsCjr8eq3TytWZmAM5AoWFm3zpHuGoMSE3roHcFWyzxSFJhBR9jGwGbrZnNPYk36n",
  "key27": "4EngFFsf3KqimwZTEbJLENTDzXhuNQ3hdDujteaj1wRHCc6oqL2pdjGk1N63WcCh6DgnBcUWynXy68kaBfQiwbd4",
  "key28": "4fwHxJ2Vsss4MnFwpPmx11AxA9KBDcetpYL5LbwWp6zUaVVik2YcVinSVqZxBcwsQSTBkTVXtrwU4LrJ8J7Cswei",
  "key29": "3pEucTfLCjfz5y4GVyss3ETXhKxymosmMfHmaaVsxqc1jCzozsTCom6hBHXZToxmnpF8wD8YNVfdnTNoHuKadj5H",
  "key30": "3VuXg76ECmAeDJmCGxh2fUTBi2axEo9F9AqrGyfE2q1p67YD8vDpzeSitC2NY9eZpy7W8tM5yW76A2m8LqJbKLzM",
  "key31": "HJFJajMHucdbtXWgQfmc5n2pwkVUsGyJF8QRqBCCGmdT2xRW72L3GHmCnMHPUQEr1SEUpyzuceV5XcLFh78PQZt"
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
