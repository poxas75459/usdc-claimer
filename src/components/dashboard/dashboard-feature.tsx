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
    "D67gkiDvLP1m6SwQrqn6guHAxdPoQr8o72VKXF5HKhD8t7JgbMFk1UsD6C3dRe9HqdW4n6PsRjp3sEHx96RJYAE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y1DMQQtXUE4Q6ycooxKpeWBqBGNeLBmJNiZGoyZpunLSCG9Qw7ZZbSWYBiYY4PBjmP751kodw1WCPbsD9a4EKEv",
  "key1": "3aWd4WfE9KxpfFdTkhQB8Ys3oCwrkJQ2EASE5TMSB5VAtLnYMunLE17NyJy7GshnZNiaAcM2Dk3SYttnpRozpDLR",
  "key2": "4HXqC4PdvUzXkvxXGTnEsRwxFjgyMbgwwYBwZ8hDQ87kReX3JA412S99GP5jrirg6Njwi5j9wLHp4u2vqps4Ffdx",
  "key3": "5GKWF4qmzcEeDYLdatADYX5vz25Pkb7H2B81kzRBzan4UhHh3V2rTeaEEQY1uwzqFfA8UjYLMhSqT1wHHU5T9SXt",
  "key4": "4zosp1WjiBx6818CXByhMucDCuGBGDiQayao7KeVZ7EWRkXCJsckMpExsyzU4Bu5Sq8X5xbUEzDAeBAHati4fMmQ",
  "key5": "5Y9YZPPQcRDjKBwyV7JmF3yVqgNKRypuz5erQgsxHvcFZ1uBLzkeYsGYpWtiZkonemX36zB6UQSrY5rk2i7VKSwN",
  "key6": "Cto34MDtaqgNjDFBnWd7GtTEmsbuX7J21qxNpxKFPSpr9bTaGqqsNWyQbuzQZvhnLCVrAPVzSsCVSeMnLjnUMqo",
  "key7": "21DjQahYYBVbz25MmKK5DJyAyi4FhmiBPr6KxpwjD6ZEQYP39sQKkiUv8W86m4NryXsPWmyYenHsm3sS6uAibEQ6",
  "key8": "63UvKg6tPkPXqdHXDfegUeuKqhAy3GB4WGkXtVR7ckRsY7ZtqDzrquVEkHPAHogNX3af1FFdKchP7NDWftB3e8Rc",
  "key9": "3GEjvEjsrV2qNseMkXGzJsRzr1fC3JP2qbSHLPWSDAQ7y8BundUV4ZyHsTLM3UkWFN1Z2R8nSJWMTn5nGiWeQPCt",
  "key10": "iKNUHn4Zn6LvgrzkK5EcjXhtgKH3k5NdhKyMNQZurbpaz6mXWSxLWv9WwNirgry9zYFVdj5fPEyRCjRPb5uiQUE",
  "key11": "3RYabAfK4pMDPFUGUPVnmo2wtkP5FNP1iSfSB4ygdaGckTgZdjzbXmqJLyLbZM7dkFPEKxCPeqxahftAWh1bejp3",
  "key12": "M33SB5WZwZy4DrjZ13fikZnoz79GjGxngprLrjBnDMH6G7jRMqxbS7QNU81ku8XAKWty3LtFmVS7RERUrUUkdmk",
  "key13": "5q4twzMr6o2xo5ERTaFsZMKyYL83FozBscbNjKhvWD2b1Tz2ToUBVKLy4EfboopS5UvVV1dQB1AJKYoiR2HpiTDr",
  "key14": "3WSUYke4y6G96Yzr3srKssvnrekWCJ6DkaNhTX4f8JQjqG6NYU7w5p4B9hhihJJWGSQ3149JVGJTXaqjWpii4E7s",
  "key15": "2V6DfYnZR5vtQbpzjLVxFKAxfkS8AoSoN65PbamHVTJNcuEWukYuJuC3ddTrNDhJX8Re26zTrfttfVJCNeTgQNXj",
  "key16": "T31Jdq9c19NUpNM56Kr5r3Gyew6nw8MJo4Pe8fpLjs6Dk2rco8mmzDzE6paJEbnvWHHGJcC67WTAHnZPSFCB95j",
  "key17": "3kF8XPcvVGo4rnTLrd3wk8HrTgKkQMu8S1D8GjJbGvZg5QmQAj8aCShsk3nymg3QkYnUU4nEDHtVHHti6umFPmsT",
  "key18": "WWYjWgiK8ndpKgii2qDUfgFngZ7eqgSM7ZbE88PJRa9hPmvn8BE17gT5s9kkqaeQDUYRoBxydyXbCWBJ4296VCL",
  "key19": "2uY6sCALgkjBRh9YiRbRvS9tym4xZyCDPFQE9F9qr9Hk7ojEFNmBrom7gceWXrZB8XAssrJNbbywT5q6HkxBBY6i",
  "key20": "2ehT5a7GwhvYetSh5Zg4EmMY5YfnV7AT1AmQx6TtaoFMtUxFTXKGGjYBnZHByN5LE1P762wKUn8NR2VKXyfK8iWg",
  "key21": "UToUykbZd3MsDdyNvVCmSp4Wkt1QSmT2qPk3d4P2H7b367aNRnQBspJL4CpbvXTvMeosZCixcHftfQUzWNHZMNT",
  "key22": "HSDUCyyFVPePXc2pjjRWPH54sxWhW84n8R4mK7Urf4hnut2TsFotLxgo8g4X94LQeNYJAcxJz83p6JzRZbHRRgP",
  "key23": "51JYrxr9jx4ck5jxvMFvDAErKZwf34FE68aBxFeKakbxm2AKQvSJg4sH32fc5tnqK8WHEvwCkwyi2PaaNtnZPkBr",
  "key24": "5YHkbqmEDkHmsvz5FgVgW94rRMVEZr1VJgisMaKSEfMd7tqL66fLxpjtk1woQVoQWKc2Mkghyi8vYNeuZUqEmpC8",
  "key25": "3fpnG1wpreUMKQmbvw3dSvssGADR3hDWAwTt8HMNznSY2wMBCLjQJYVJPpEPYk6M8Ax1gwhEyLdqcuBNC9MivgaF",
  "key26": "4u5i6QiWBBHfrfbkiWEwM4udDKtWUVKsHxN9XvnHypoKieDdRBohr1NSady7tk2P5GargmmvKrEy51NwcFfQSuj1",
  "key27": "A9CE8Ck9CB1htAnQjLV5fgbkZN6tYdA1K4cZpZQUPu8vJMTtcYnCYhvK9zB4Q41VwychW9AEuJRSFGMa7EGRsqc",
  "key28": "4PzCyzH7VxByS3yRb9rUxLVtfsYGYpMKdE5wD57pnPnN4uY3xQ4o621E63qdYJ5qLt71ufiHEsHcn9uBhvr5Sb3W",
  "key29": "4zt2TE9DRYQtudZB2jZaA6LP1rnHnuPLUyVdexyiS23NW2wTPP17DDmd8SphLKsvp7QzaCLo1EgKcUrBVZwAbRL9",
  "key30": "4igwBLqawN9hz8RQn8cUANkZUhU7YfRz92jbfCzMLo8DRLGPYm7dTLVaLtUek5MkYVhyXF8zpf8LRxrzSbFK1XKA",
  "key31": "4Mxxhtmeq3drG3Ti7HMr4QproZuyBEiwd3jJHeHGGCXbRjetL5rfCj7pC79jd4fgcV97VjE85zXovazWYLBSP6ZX",
  "key32": "5mVKeCPoqwdBMEjiuw7ag5a4LMCdx13Ja7dWbcqeiPWdzCbfiAodqRkgA3kzxpnBDSiwp8FxFkJsi1XHmJnCi4SA",
  "key33": "4Gg6aKTHqei6UqwJSQV51cHX86CMwjgfVGnzCjZYj5TLow5i5t6LUmkV9PxXnhpBrBtWdedUZWjHcorYMXcw3vQ2",
  "key34": "4q1z3AFm7QS9dtbMW7g8fvP2FLoKTwceEgEdM9tPoDWa8F9eWRduR6MKgJR5UUR96JbHi34ZCjiiSVJvHGP7j14L",
  "key35": "3iYe7ffCP69MVG4VesxUwFMJxUnLoCxneCdtWqbVBCqxoj2mCy8JBRHBrb1EswCGudMweY5gTL5jQ9RdUTWvMhmf",
  "key36": "2GpPfbtTx1q3MBRNSvS6pKNCiDNyYuDW2mjfunrvuTS8sogJszKd57w4WbQPzZ47dCek9M9ipoB29DUfUjz6A69q",
  "key37": "4J8R9zAwetmc28tqoPDuPysG53UopGyb1Ebsw8M7mDgXBotd3pGVZbe1SNMFG7NpTTAiG1EjWX5R641YccXUbAeL",
  "key38": "GZaBfPdcbpFuKJjEbM33p21kKyqB5mcMqGHnvtQXvQeavdPBkLeEmfzznkUzWfRrdk3SPeqivkPi3nSkcCQ75gq",
  "key39": "5CSPyhqDCMUdJn9jj7PF3Kf29Vvok2k7p5Acss611c8AkdDyzHeifaoU8U89nqc2eAGwUxvJXx54DB9Hcqp3o6Kc",
  "key40": "wUpWdeWsxn6ua2G7VKL7tM2b9N4fRPSwawHi1abxpR93UAFeYQgKSP6AYhogmxj88ULJ2s8kSD2s2zGTG927D8L",
  "key41": "1LmMik2JgEcitMxQyZeVeYkPFQfVde1Srtg2yodAp3mMCU8FStAykLLinPE3v9kh4NBLPko2pQCpj1AXPpx53SE",
  "key42": "7dLmaNqKgNbeN6VZDRYkCSqMweWi7E3TDkL7fGxucuQCiHTSvCUmqkiVeW3cqQaHWX8hZe4trRcATXhonbhkW3f",
  "key43": "33Wikfb1iJJ4PXSoy3w14U4AvR2DKGNWXE7mgeVUNkgQ3eBwLStJJyaTSkyJiCX78Fyb7mwHojj8hUpoa6Y9AUVW",
  "key44": "3qY1nv3yktN2we39jPMTWFiqubn7FVgjj6TuhDVEx6qrbtpmrXRa4Qjw6igmQ2ZqETnMHa8G1X9jbyxYbP5qrsev"
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
