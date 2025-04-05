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
    "5ZeqxBD17vebAGYQMQkAkixj4SpPXDx8qarSGPe5NtSEcNetgWPjQhYAYNKubYaHGkJ53D8CBDA8oY5C2vdpEb5C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tn3ibe6Y6TyReuFM6kG3vkrFWm1hG9J7K6ZKsuAQzxxikrngBXREeds79AT1r9xhSD3fUEpKHdbMnQ8SZYDHyoc",
  "key1": "3Tg9X4T3UrJr1WxwC4iDqRv1NFmh6w7FPJNTAhPcyMk2TFzHYPbov8ZERMdSRXLFZd2BhBpGxNFzfwXNm9uPdUnV",
  "key2": "Gw7eVfwuvVrHYHnAzVRQKHDaf8QpGHGNSSKgwpcF1Dgnr4cKcz5L2e12TBLZsT7yk1X3fe21d3S9cLTfiwrFVdD",
  "key3": "4m8Doi5YjLkgdtcpRPwhPR8KSdyynnb34yMfGY8MrvzrdpkEYt6QT7hbYWMDKW5DzrM5cwABeghbFpdPbJR2HmbV",
  "key4": "2xV7rnbAoqBAhHMzXRC4TXpQKwWUAuNch3QS3cv2MHzSpdunCZyE9aDgEnfXV77mt1gR8iRsxcepwrAWFYruiuGu",
  "key5": "2m3xdGJnnqsaokNUnQtJExRUPaGMqkZPS21rhwYWZuvUq3he4Z9um1mR3nA9w3U7tKFYyT2Q9CJqWkvkSoG1gpDg",
  "key6": "4mx8fERF3KmzpGPSGhEtzdEg4UhLT9TxSoddEVGqWeRY8ZyE1G3wc1M6S6z1Yk6MQXkDGtW45UpuPaz8sXrtmNyG",
  "key7": "2eWr1BkpFfwUAKw8nkkpxSpFLkx8Z5bSvqdncZkfwaWT7axhf1ojutg85NfQB9N9t5eJEeWWuWa6fgAqvzPr4rmL",
  "key8": "3ut7TND5dxai4fu4uhPwhQAWbZLSQLbyqKoRHtBewjezZyBRwAyyCix1JnAv1UtDjeZkeL2Jr8o1ZpM2mR8E8aBD",
  "key9": "NN869aYy3KSZ7LoQQ4cm2XASCpeh5J8fZdZsegNipz5sWP4meMWA34WVnGXtSPyCDv722Gxg1d2iJJoB1sRCShr",
  "key10": "2akahdrAFU8pRk4DptYLCA6s8UU7sviDvtboEA2qrP7rZqytkLAaVtVzniRJXm6H8GCDvLKYjA2aXpd24yLkcNm7",
  "key11": "3JCSg4ZrJ5jrhPm9dLGzpahmFHrBWfMTz9udibFpc2aJYqdsmUMnk2BAN9LVdGdKD67snfGsTJj3imoKgHtiy5ds",
  "key12": "4Lm5Fqywbg1bgz8rEc7NT5NmjeKidoys5nHYpnA6hDfwAyXuqwNiPant5FRmZKWr645bJF3MU6tqp7f6gBZT4hjU",
  "key13": "aSyqP1XAqZHnZuztEj5TxyxyeHpBTfqYi4ANwVMYAG7Z1iA5KN6thRgvczuaWZsacW9jBAxqnCNRxjXe6rGjB3H",
  "key14": "5DArP3pCArWw7f4zmV9AWiDoZBAWp7nkGag5vwHk9944YizXJN4ik1MHGy8UHDx1qERY9vpqukXAy6K5B5YQcW2b",
  "key15": "69zeqS2S5KBVwSw2REXowT8DPKcRs6uzQvTcN5JaFZEh7p726DLwWXiBtKQGWApriodtWXbJKZaQ4CaXUJa3VvZ",
  "key16": "5dM7RpXApPeE2YGe9Jfi9sJ38XXLTMTeLNQ1A7Ji3BPfLMRT1uurjJzrSkoYwXiw6jAYbmknECTuaQGvBKritU2K",
  "key17": "LDfGKjzG7ybFsagGpJe78WTBx9bz8N85RtiKHRfM4fdt8yJc1bquxdiJ5CecUbz9dAVbqSFdCjcsYRaKiqg1g6t",
  "key18": "44j2VsC7oXDxCPRe4NVu2rZZRzNRCJiNJBEWmNsjsppZRKnPCwV3C3cVgBgnxxXFy3GXhby7br8xEuycTafMLZcP",
  "key19": "4rzKshTSqMePWx4S7twp5MdscWFkjcgc6bhGipSSV69UxTTEpNufAu9f71nS62MrajcDo12kxt9zVqhHSLzMn4X3",
  "key20": "4x1oYvSL1teJwGV56U4btHEey8MSUfcmc5FL84H2C3h4yfrdaa2GdSmxmKa3vEL8hPJ3T78ugEUfoKMi149PtkAc",
  "key21": "36rAtnsQMVDQKPJhZoZL53Y2Anvq68TjWdEJsTL3ZAJ7sBvSg8tCmvRJSssWGyPSCzh8bmTmaoe4q1g5oFodu5Ju",
  "key22": "64FDh4ZuWsXGFnwxo9ng8vyBqJrCk3wwqQMbahQJgXC1B8b6EcipakhPo3ta5s58UxDw5fHLP8XeYiWP8jKf9ugg",
  "key23": "4yrbKSqYrHNVSb7oi1aJ24qY21Cwq5gbjdKEn6dHJ6iaNUSBnQQJRiMW6N8BD6TJyHN1866TsWTKq9FFcCMc4LGj",
  "key24": "2aNzop5KB2bPH2o9bHDdex3PeMRuMNShwXKphGEQd5GzMZVavoPQAPk8RKjBT6swxPxErqR1DQ4noaS99c3S6hdi",
  "key25": "4ABQFmb661NefuR82UDehDFXMz3jpBfEGczGe3kx4kYjs368ZbZsbNNYKgaR1GzabJpziw1ASLfDusN5D7hBTDN3",
  "key26": "2GcPxf5aU9f6taBe1ZEBM13qfSnsorVRvgo7nRsWtLXf7rYyRnnUZn9q5Bb7KvxCHDUWrWP9gUpo7hyzXFhkB5Xa",
  "key27": "37Y2VxwH5sHTaXTXszjYTa2j6WB5MbGB1dyvxv6BJxB1HKMBFBvinwoaUiCexdjP8jRDXyLaeow1LwxXWo6HoCGm",
  "key28": "2pfr3k6VkgR82xYV6d7syWnHacpafSbERX6jyFncpPEuFjv5LKSGTpoLanmAyBfXdZkgYfCZQAqmgbXKWNUYEMUC",
  "key29": "4GptByff7zSGFKWZ7xychbGF27XjgoCKmCkNjkjy1EFpJQLBHS3YbCA11MAZcqV9s7oDJCDCfetMMtJrpmtWaLam",
  "key30": "4JZmZg8cdbXsr2uq6StRJReVbuhShEwMnAzDUWc1B9nQVRBujeww8AvNF76svdvhLhVP5DhKTxqE9EizYx6jWBZd",
  "key31": "538SPwBFVPe4vnv7KvPkLBcrwMoMJ6h2KdMicjqJVstCtmmL6wAjNiBt3h7Q4AGX2WSMEon5ZTVVB8quc1Fma3mG",
  "key32": "3VMQaBtCHVTfMp44Mz9PYUn3amWyUDWkc6AabKG2y7ciBfysfVyqT6iKAUVJiQTdPq8MNMgPA54JDa6ywcneYCrN",
  "key33": "kXNJyYZGLc9FdAzQ3hMjBc8G7fBUnsSfQHkQkCM2bbVaF8TneNkzZd4PDoqLvFsiUhN5jhsm3FekibkDB4upZrx",
  "key34": "6TQ2yhT788GqvRHi8sxvJqibiBRCD15wZCpPxcuGDEJ2fJZK1Bd4yGYxbD1ZXeTRSPuHHGzuP4Xz8Azp3jdmgbV",
  "key35": "4opnqr3KzKiD4KJs794GciagbeFWMk3susn29GADPBExtiUyUzhtoKo3a37Uq4Q7NTnt3qrqidtsCFV55KmMruEd",
  "key36": "5HrfC7WjkL1p3e2hjvdMWneSXfEcEs87fZ5cMm9Wj8zVrKSimbDBTJ62u55Zf4iC1XbFsuJno4Ro9B4Y7DvhBnao",
  "key37": "ZBN1pif2Gg5AJxcbYhXx34ieDVHb54A9undZHMypdGXNVpopBBb8EhJwVskpw5KTHixm38xkKgLTwUnzFaaM7pX",
  "key38": "666b7rST9sxcRNqkgdmVchi4EskdsKJzzxEde3UaXvcYhorQcF8eVtvmjEewG8ZPLUove9tPZT3az27PhKpakqfh",
  "key39": "2WALHNvJMLM1i3pJZAdAGAGLc1b7fQXHAVpUsCnNDqTGLFfrykBeiwsrR8JxTmort4STCVC8XA89zWmw5T8GjWyP",
  "key40": "2Wvpa1yNBaFAAdnDrfeJVpz6EjyXpXMjnxpUy8gS9rgi5tCLrvFn2ZvdkB7r6t9YrWLB2F7X9zWfBUSWTD79sqTE",
  "key41": "WeEPfWwUUpNhyUyxeoaeFJXRzzFfwVP8MDyLZN1c47AA1VwvqjkZ2LRbh6vYxvAcnGWRbvHd5mmycDFG32EV7tB"
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
