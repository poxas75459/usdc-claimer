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
    "5ssh1Pdqw6m61Cm2789sBjazHfoHhaS9aWePoUvketNkmXxF1z3U4zYveG5Pcbx4Hqy4taxdKpYBf1hmhrymWyWi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31vcrijkrHTfyHNN2YYp5XK9aHRmV5GurrbHvVvQv8zNC27EBhj6ybmftCqHD1HQi83KJ3xUyQUvKWhVD33B6fTz",
  "key1": "2WP74jdWAK1BfCHQYZ2Skb4tz6U4PGEmDSE6dP4mjXkDj1DAAc7Wbwbzh7ussB9Bt3L7zZ5ruWt1uQ49Fb531FNG",
  "key2": "4ghfgsc7aSbAYm7oWNdWqL4FSvtdjgJB1bin8wruDazzixq6tLmBX1d4a3TDvfeg9ZLnc2oyJk4bqnL51Qs2rkJn",
  "key3": "3FRJAS7oh6xgUwFh2JRp2hGkpiQfV9mfcho5JeZYTLZY8HRmqSwzdXzky7A8NRDFRyV36QsjoiurgfZuAYAzc6sC",
  "key4": "2bhWUDbHtcYtxpNfQqESSF2pPxwtmcbpjNd9Yii5QfuXpS1MV4HNCTZMStJTsJCMqBpw2tdm3RaqV8iZZGdudGrh",
  "key5": "2xAc6ScV91peX3mGMZhvrneYrxcUwpom3pF8fDst15PKstriuRfKCzMGPFZgJSRhjUP3nfpNXUCQZpgswGLfwB8f",
  "key6": "5ZRRyFXLXhgGxbFVYvkTzYraCVmRBmph4zwkoiWef5APVMS3h1gtUXxawDixow7ofSQDsGPRPviMu5vTRnab2eot",
  "key7": "125bN9Q2ALT6Y2jP7rqsGLXVJ9RhiDigMx4UuRoo83uPFwMjhEMaYy1XjExzmyLgexDbEwSX8WtzBwxaEPmjuh35",
  "key8": "2e8EsuzWqHxtGcZS6hEjYdfuT9f6u638wmuqTsVw5taZ1YgWcKrAUjWX6TzcreNraRGckfNRhAWSHzSLBRXgmvww",
  "key9": "SdfKurHDpxrAU93Tey9cKeamS1Tn9MZgKpSVcJGpudumgHPU5sjvukLNRLAxVyeGq9sucJ1A8Ly9tDYV62ZozP3",
  "key10": "3yGNd1uRj4WKAG5P28y3EV3bDxCj4MYVfi1nybKcXujsRkwHnoYZBUsZQeesUGpijVXkrvqYEcNFEEcjS1Tn79nV",
  "key11": "9U5pqmYRHRn5k681QtjedKSjBM61uePifKJvDtpoJ9MQW3wAiUkQBuHPmEt5yXhSUfJ1atXGk3YRQLWBTRStVUi",
  "key12": "TuU7nHXzbEEeqogZmkYyJ8b9tfHptNMeJKhviL2BEVVySnBxFNsj2HnSfxjs4P1tJs42nXR5Ee1iSpvJF2Z6Vm9",
  "key13": "4mHWd3QcE3jDfYSN9aBAAU2ZdBvgSjPXDEQZsk9mBRe9Sc3dMFrUeLYVPPSw9dFRFDMY2rfF63A4oGEakjDbwhCQ",
  "key14": "3mcTpKFMY878x1cy6MEuxooGsPw16RduyWtfJvbCLLc6dXT9TkD1HaxjC4Cxz2S2f6xuNTnRT8ozjB8hQ4CG7j64",
  "key15": "cS5JN72vFd5fR4uHi3rHiooa5i6CdJreYSpRyAcH2SVvjunDb6TVzKBQjVfA2GtZmyMixKET6DJu5YMAApm2oa2",
  "key16": "4L34q3qKJfCww2UMCPiKLHySLmfuDks8BbSSzBGrZoQ3DX2wXbTN5bcECwdH5kPWJPRvHS2TsyvmpQwaYfmP2P2X",
  "key17": "4k9wfDHFRxj4YJXkXi7DXutJATNwvvRd8sUrcop3CcvqMAqPbHSjcb41g4iB2PiWWhb6yopfmZ8VmF9bNfSGxMYP",
  "key18": "3CVSWe5SL9DTiAFJazeEPgSHYu4jhF3nieTnzaqHSwSMyoUzJMwj2UbmVx77mk8j6wJfMcP3ChaUXiMCN5izu5P2",
  "key19": "Ycfxpqdmr3pDsCsmn98oZzJKN7hms9Yh1HJdi82vsBSVFL7v8wsy8iVDsCUXi6Dgj8eKwyNL1AtDNvKMSzeUiXr",
  "key20": "5e8LeZCmJNfihqsAQc5xfgzgV21TsTziq7mo33MzmPzjkrkwxzXHWPJkCr57AnvNN6Ufrh7YhLa2MTSCft83XxQN",
  "key21": "CGzonRvq3g6LVoFRzMTy22yXBFkFoe2shjP8NMmR9fgvuzhg64GcikKw9pypmVKUtc91DmzzaFHXXgVuJ8grFg5",
  "key22": "53A6hkkfYQdEW8T2HYc6p5NmdrSKvFGyojGwmJGqaxpDBeQPcAdDqZZXkRDZkU3oDp9J2eSxvbucQSiqcRXLyYy6",
  "key23": "smKkLXfypRhXmFDEdSkWk8J8yndXg2QSfxiSFAkea8naSuyZRD8BsatxFxrJScvfoou5bVJfk6ur6MyPpo1ZDNt",
  "key24": "5i5KmHE2MLrfoh4Mqz74EMThoprdJEgde95CQvkZz3EKwMt614ECHyUAJMmM8VXvJpcpJdDvhywVcktdCvezZToB",
  "key25": "2FiaAPjZ9RpNY7MRUSkMgi3YcCFF5tAVWmeNfaSpv4nWBh9Z7yKgViTyuA3cszVBHwDDtvz8UkUCha6aMW21AcZT",
  "key26": "epkXtNxoUC2jwtKc9wzEPQ1mULK4fnk5EXMtXbkd6KEtYHen49vCg8Y8Vx2MPcQZGcEXXuzLtXRsDBoYiBsietN",
  "key27": "66b9jnR3VCYpKdBnjiqmb54w16PiLsevq61A2ULXth4tVuGUh1TRiDSid3aXgUG9Fppjt2Bkh9oUX5mrgPn3h5cH",
  "key28": "2756jqhcuc56rKfQhUjNzfiXrw5WLbcYfwRmW3Y1hd4ijUNSRgUzHcZYhn8RXqHL1kE75g2NHB7j8KkyeZQBDVqm",
  "key29": "3CimbYg4J15g5jtA4DMuDpQkPmnYF4mZ9hDnP8KdGz7kZjTzA7y6nwi6pM4uLB7RNuSmKygE9YZ34jCRT37b5hPk",
  "key30": "4cXg3a6aZbYYY2SR4gd6zBV2buH54SSMucmXwLKFNdaNMukQSHAXTUA7ab31XAetUMjx79md5jP6hjaRRb8maqSn",
  "key31": "4DkHZUaq36jmY21xrt21enNRATe6aduoe2J32mkEizfmjEPQoSPNqJzofhSfHfrj2NG3WRuwbZQAgfzkSqX4n5b5",
  "key32": "CbFGFVuAjCdYmGzgqxGSMfFVmRagC8na2WnCN7CyyVaUd6RjohD3k4FpE4nkce6Cce7tAEGieVSACgs2ndvwPaE",
  "key33": "88mRaMDTbqbDjhhzYqZD8s2JngpT4omFDf5BAGCcAbE9VTSZLm2ETPu919XjrQsRFhkwEdEeS2SP2PP1rS19eHm",
  "key34": "5KB7hKKmnP7942bFZWTivpg1M6CpS5W5pTA2zrdbAZkVkhedigMNk85yqVySgi71XmviZUKGgX5KgEGtSHjszWLz",
  "key35": "krAZVJavesKwn9i8wyKskJArzw7CBSCcVB3gd6SKwovXTLBnYbaYbMf8aaT2HN3zT6fpQLiLRDUehJhm1kFsRTP",
  "key36": "2fLpmsUtSRdNiN1n4aD78agw3KGfnCSDKNLUruPdp35NadPcrLepmtCQZc2tf5X5VTnnEZXbx6z7iGBXC1rx2xzd",
  "key37": "23uYxpwDru4Paz4hN6ofSwypNbsMxZZj2wNwWWDhbSRqpuYFo2Roe24mBdDAhe8AQCqxCLG2Th93P3dbtBuW4H94",
  "key38": "23k5qoqvGQdHgnn8AnQDJQWrkABwHrQz658zCy21UDanjLujhp1fBgCJzzKE3T6pWY98AsKhjj5QipPNVuYP4t3g",
  "key39": "5f7Us1kEwjT2qq4AjZc9cVu5qPpofATx67JsQiXY5xvWdNcnEaaejED7WQNgoL8fWPczgqgr9CKTtoAR4S8WepuN"
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
