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
    "4rpWXNcC4oy9tGdHwEu39Y5xLtpArAiRvfRGCjojjdEfyUm4B6u1mWELNMS9MQAdVxZAirpuUL1hxqyu9DtwAVw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z9dU2rwxHyvncg6SinQoaRGKRuciVSJLCtgxfdLcQpGxLJFcsydoutXKzgXBd5kKSq2uRYPaVom6ZDFg6gCy7vq",
  "key1": "5i6RSk3Fsec7jE92EvEDNNGYiE6967Fu6zNoN6WzQfsMT8N2rbd2WYCNA9iNWQM9zdn4X5o7NaTabuhHEEqgiUoc",
  "key2": "3Jzhgn8xNtCiufKxaTw5zXPjVij4j8ahxGdFdVQkC4tKm3TJPV5wHvYNtPHng6mxnT5ZBZ7P65vLtMi2yFwQTEde",
  "key3": "5atCpANo6DAXso3Gm6p24fSvXzro57vBhFxuYGmxKeVp2c64fUqRpcHVPuEFiBt9vy6jdLuqRJV8xmwz3vtLSuxf",
  "key4": "3JajczwkAeB2X2cub7bRSEWVWCQENb9yVBgQHd4MTyw6BvcYfXxDkg1eUiEtNPioPY8bNF92BmGmyEtb45UnqTC5",
  "key5": "2KAKPkji9KNniircxNuVAkyuFaXfr6afocVtpkKhuh5Bo9xUcb4atUsc1soqBQ6UVq2yVfJ7rTcFQ9WQFqgz73VZ",
  "key6": "JKiVAmjLJ6WijBnQwASTWxfRKohVnxuzXrW7jcZvT9Mho86UwbpMckfswyRJ29N7Au4mKwyotP4uixsLg7pkVPd",
  "key7": "5onFvLRtSsWxpgQsgoLM8RaUQXnjSTNfcqjUDweiqkwKvefoSzWM1BE2ZG8ZFsXNw5BsEYJKFae9uuxM7iuHP5Gx",
  "key8": "54p7YK331XKAxaMmwisdCzgzRynMMS24qqfmyCv5QtS7SLLWd7dKpaFjLN97Zd64wCVwSemvdqjemEmwxZMQZEpD",
  "key9": "x9bFxFK9zRcweH4kRpbhMfYLZKoAj5rrh6MpoNz38PxUU3GBPMmfYehgACnwu3V1SgZj4TDctniTzUa3mHGNuS6",
  "key10": "fyxF1RBgPbLRdrVGhkgPNZQFtxQF8cJPuCTMDHbxM9nhK8NyUFGweHN1SEaCdh4xvbqs899FFJppwwiY7oYm6FN",
  "key11": "3jCtfUkQdGwsrgTNQNbezfTLiAZ9vKKWHMM6j3s9o4bERCySSGnhsZKhYKRk9JKJtBsijPNRNXNzgTnAs6G2Sqyj",
  "key12": "2ADGggBT7n2g5dSfqVc1zyEVZPdpJg2rtRdP3zSA5eWXEzCPECP5BFKSdn7E7jPHUZxiMwGtSWm2SUUBMLxZ1QQK",
  "key13": "yLjZy5PDgxycKEKS3sxapGMCzzGWgia32jqMoWaGvH4Z9cW4eDitCRVh9dfDWx7cfW3P1BcqDtQXJzPGiLKxn9H",
  "key14": "26Da8mPksH2Yh5YkQGTTqjwftbtQyMT8ZsjVbDA5VV9YymcaqoSqe3FFtM8UUFRVk4gLLaLGXmebKtkgCEE74pTP",
  "key15": "663adD5iJzZHyfg5TTn1RHmtnBDGk33mJ8p9CjizMaWqMiVhRaEVNMtPHfArvFCn6swecUGz1yHJ3KxVaVemnr1L",
  "key16": "MLjVVUtuwf1BTSiEZ9KqoyjJ5WB1rFN2svsC3FBQBwcghKBp9TXiMFxBNRiNjX5rgkpk54v8xELoXXbyRrMHw2F",
  "key17": "4BcpARmftGTwePkmfiaQTKJVwbSuzBQVhmVnYVWP5aqSb2QGHDkbL2DvKsCyAYUANyrExq7Bi4o3e1FDybYEAGzy",
  "key18": "4At3Uqs2gAJDUXdAdapUQTkJL9PxJhMmzaFsMk7VYjYfdVeM8LNQppAq63q3KgpkyrHHFCf92bd4k538VfepW4dF",
  "key19": "4GCLF4YKv5D4PXojHHB8vCJ7SdxsHZVNvCLK4KP5wLvBN5tTNJ2K7Gmd9F9SnsoYt95LsCkkybGgsnd8hYj9fW6e",
  "key20": "3dhbbuB5E4m8mUrVSJKe1yYrYsbkcfnUWSjyZpF1fUiZ4F7tyxKEX8xegNQmCwTohbo5vA23VuMYDxoDso3wrw8C",
  "key21": "2fxnTRYwvt68aNLUko81nnqX8yBTTuJWon3SadiAeSFqc6LKh7CAodCAUdSkoanHAizMPrNLWnGfqxzEup2nt9Yf",
  "key22": "qk61xPeTmwawp2gyH65azENXyXrEycarbrq5ikXsY9wpNXb9VjPbXYkknExaAEj9zZLmyvKEps9YdF9JGwJScVg",
  "key23": "4o6V1MQefEYB2o4dh5yAVQJ3QVADhrfcjvkCs4HPBkCFBVfSyN8ohUwFLXVQVUNjoabCSfCXEJiQ88PCCGNKwwib",
  "key24": "3qVBXeX4RZzTx5vr5EfqfAwRTfYW3ACLuRex8P25npHofp2e1ti5CFHqGwbFrC5ExjRQvpwheJmhLbd7ruHiwB8R",
  "key25": "5NEBrE7UNJ2HomvQKRy11u3U43DyTr5dGFshVBMqPAW1XPQ7BGjTNrFKDSN3pLjUkD1UkZMQYzKoDxNAX6bMTQe4",
  "key26": "3FX2uU7DZTrhcK84bzBAYRVCPoJVnnwFD6nNYbxUDmGwXvWdx5RFJrb3xT4XneC5dgWAqk1Uy1BBNnNG1rHidqdz",
  "key27": "2ySfFXLXy18FJjqQYeGs9BJVvSuESgebCRvmJ4sVdwVAbFvTVaBBSSwr3dfA2yKzMc9VhdocwJbu8hTuQwRwrpvg",
  "key28": "4ijMTeJZ1VzZR4eZjNz8emXZjmbiCHJDWURvpwqBTUMzRoG7B5CBtu7P1tkmUQgLGC55yRa79dW5HNcmZwXUxTvF",
  "key29": "61nCJQTDLc5NzR6BULJbZyHZDXNQK1xMwNyAnfyVqJjVqWK8HwJBWQ97NFXFCHC9ga4XJgBNyZe9mSwMhHHvy1vW",
  "key30": "5Mp5S46jvmpqiwrVhWEzMppGca2GzdcbFWQNNxts7eCtutTgSCE7S7UBbuEfJfmQN3Yoq1VmyPpBGnNtQJ69fYVH",
  "key31": "kyEMBHf4wqEPcUawgzJ1CB74T4hFFRNPuWFuvReKv49jRh2QxA18XJdvK8vDzryv2xMSCvCtrcpT7gUMpTb5Mv5",
  "key32": "4WWBiSN8dWbpsvVhQZGB13SgjffqE3fUqrSx5KxLbuEN34qa2Ws7uTXMKrbRTPVDZVwwuteATYrKxt7u1spcP5KV",
  "key33": "2ysADwPgeudgoiEs663ASVXSiM9xwG7QESMDmW5Dp1t6ACH6JGntBSrJuYHHGpjDshYAHqDF9NVESrSS6nvTN6iA",
  "key34": "4x3YaPGkLFvjc2pLorHCKTVdN6jWARAmPhPbJo7Bo41tpU9EGrnunrFnTvau5nf2dFWh5kchyjgoQjYehMDCX1qP",
  "key35": "275HMfWM4q6wCHK7T5WavqCiVQtP2P69aPDNyP1sAtwYENZza1FBqVrGV3K2x553XXM6xWDpWYZsUzdMaLQwBFyu",
  "key36": "37uMisFJvyaRfX1yceZq4PQVZeXkiafaHJ3wT54joZZc15JU2KBtXUPLr5YNK1ifEnHHuoQmLvm5GnnjNxfRgLBb",
  "key37": "5uPMtoFrgQaf2caN7reL9B9usTdU3zz3AKdu3BhDecYqPSn3LqFs7ELnjHvji7cvV7RVjJqSXiYhASQzJuo3kmiw"
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
