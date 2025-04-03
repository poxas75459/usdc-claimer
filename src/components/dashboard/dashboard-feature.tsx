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
    "53V5ZAkmbh15q2eLaS25A2Sv6iz3jmU86CeNSHDrvYcUAgxqHeBwuBRxiQ5rzdRM8FRztV8Y8M6bLRcXyhSQoX6j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PSmHBpBxdWD4cPUVjkxKK9DRvsj8X6pYDXERsM5ew1RW6mxmEd7UCjSTxyZ2wVj8rBGf6fvc5pf3u7YTBKdfKqo",
  "key1": "5729UkWnfhbYWyUzhuqxjhTPDse1ngUyU5sgssbeKaWSA2CHxcUrkxcWf6wiWn4VaxfGXp4arj3vhNmepMEf1vBD",
  "key2": "5DaVV4cys6LSLYksm4QXqvqLMCCZztLj8Uj1Ahe2dQnbTW85u4S1tGsAYszGMhTuSzquu3eayvgFumtvaYq2Z9Py",
  "key3": "4fMbDDRQmip3FBPLxeHTfS8z1nGvp44VRJiMV87e24sYo85EgQK5uAg6MZ4DyABWToWsQWfj74VXv1NarwKLDZeJ",
  "key4": "KMsxQSshdJkh3VZK98tJoJAFvpbfAvAfgw4dpQeGEivncahNa7bEPRSLgfbxCmQWBv9LBh5Q53QZBCrKVqJqGQc",
  "key5": "FxYrySmb9f3QsqGPAQ2pcVcMDvRZy67gmNfmm8gGt5PayASZjFvengRF66NeeCRNYfVRiJxLk8UbMvKTuW1hQAK",
  "key6": "3LqeWnea8GmPgegzAPxrK45PytW9Xm3TcMytEV13p27emQP573rJAKutcdmybtstUd4uZkdnw712ADVetZ8x4f1w",
  "key7": "4xxpnHMbTTTakBtK6gm9ynBjYiZJUQtsqeEjtNsKsbWj9epwnbgnCTbZgNDk6BNCKyHLFd6jQoRmYvnBbvGrbJ13",
  "key8": "36TPZMwazNuj7y9n6nvZzfnntupjdonf81afVmGL2meHWRk6waS4CWGSJZhJSKiNtYooKyQjp2oGfbqgvxAUFfSc",
  "key9": "42FgJYQSwTJ6nzhPQAUJWm6VrEDEVpGurm7NBKonQEX2myNAkmQTvPP6RvbxQM5BuyVmc6i6rvsYPaMZX6KVup2r",
  "key10": "6CmaDLY7dcqCszgTRb8pgoVf26c32b58oXtCf7zJDA6dt62YieAwoErmdromp49DXAkjZL6ngiqFVugTPUgEzSE",
  "key11": "4JBSVWiSxLJJU8uYKW7YFHowM2CD1WneH5Mve6Hb2PnNAPE9z1zsW1MmHPPbp92qBKrXc8i7Y8yomgCYc6L2mfud",
  "key12": "46LUdDEQrqCKJezXAk9qrB4KPLHUKFRjMaM5f6zLXr7VzjTGDq8rG7HqSAa1XsZvvMzvvKN9VqTg98u8spTt2wL9",
  "key13": "5meCvwkoxhFq2A9tmrLqAkhDeNGTYeDq3nVJHKUH7TuMy7SUEdZbu29sYuRGTz3vJe9RVcBwZ2v2pAPKTNMn17v9",
  "key14": "5t6muwuQYfUmZDDPq874ZFyHPwGtk5oFZ56FLZKc3Lf7TLhKvnFC2cPRWajdxMhGrXaUmXe8Y5FAor5o4ppWiwG1",
  "key15": "p9xy8aA5X7WmwYWxQvTa92GNoiBL5EGNwAddkWewRmoJucJjYTMyJMPfv6ZzuTi6YnnGnJ83mqkyup1SssQ9jEF",
  "key16": "2Bdr1sFCdPJS2tXQTo6iRAcCJF4N88pRXnVEqJbRgGLB7sgnhXyCrSyEo4uHmHKECVA22GTHYjsFXhd4mGXt6YeM",
  "key17": "So7Ja6q14AcAPaong26AKTPr8DcrWYf6iTwoN3rqaM5RE7ySK3FVWNjcjMnrbgj5rmrerpNzTjZ9CoiNF8Rp6VF",
  "key18": "3btZe7VcdQqUDnztbyztYpbAYJaYWJEapMNhHKZuivuQAphRfhSdN5Hr7kVScKbDa1FyovrUU4MSZ1h65qddACQp",
  "key19": "vqN6zT7GtaZ14vi5hUW71PMyzBJTJyRJbZn6ZM1cNTSctbYENxeLU6g7JvjUAEDksAK3Bv8GHgN6VZErx4ym78Q",
  "key20": "4qfCEobwt3y7g4wtwtTzFEs1B8aJTgJJMnwgXRnDitngbANB14W237C6CY63Hst6StcReVLzjBqCqA7sfe8HgQiq",
  "key21": "2EXEAdaJRFscTwXkXED5jDxRHZNZgcGmFAvyYzL2zaNeoUiqEgXVj6QvnMpEcf9yLKF3oJ6wH95FU4gDYFqvYnnj",
  "key22": "4CKUskPGyqsMU6qhaEvT64VQHFhcQZD4Kxq5k8RMYxYqDgaHKgUq24bckjHcUhexM7FwyraB5p8PHvrKoto6Wfo2",
  "key23": "3aEq9PDK2Nk9MNAWtbJ9B1WQXASaoTRsmX3D2yrqa8uYZsbYhoo1nA9XGqR9vuNjYtGvwcth3mmNGgN6AXJ7mRSk",
  "key24": "3WV39ZHvzGFUsNe3ZTMMuxTbaX5sFXoRMWTYeRXzu2kzsEWZEKHuyHM1ofrAAQLLYm7jug7MiXnkKzKDcZZfA7vr",
  "key25": "4LvWgiEEkWkPLp7hfeY4GwSuW8zPiDBdaPhTEp5Aw4nJGRQ9trbMAY4CnEBvhEK7ZszZ3yrBKCvj6Z6nKQ5ZvTXG",
  "key26": "24bpsD4NnhbF6xvXheuRQnGcgudtokNBBuA8agqTWGLxCMfd3wqW3bvKLYUyoVmcgEGzM1hQ2aJLXo8rMcp9wQ2M",
  "key27": "5d2B6urohSBcpb4dRJZrixZ9veXqHnwc7H6mQ7tUxhNLcAkTzNvzwQ5xG7UyLa14fYi3irDShj3PFtXKuFNBz9At",
  "key28": "2qVDh2QnDagRHbcuGx9Cmh8oBQdQeyJMieSYAq9cP36PAGp5o6nc2DRs5n1NYuFUS2hzLwP7h3iLAwEXe3keDHBJ",
  "key29": "N2ajMXni47THX2NmiNxs8RNTMqk1HotEQfz9c9uzjotZZewnzzVFDqKbHuLvF3j3aTcMWYNVsj9JDWc9TD13JPL",
  "key30": "2V9P2GijdejmKwvbC98dQpcUMe7z7USUqf3PkXykdA3mM3PwtFvabxwbcND28k8FSrbpcfQZxLLcLXQakuAtXDvW",
  "key31": "E2VkqU5M1HEgRTW34FYeFQRPotD6azM4Yi1MqTS4h8tqEZX2nmGUBN5r83ceLMjFCCftTC4oCqnthLnSf9CEaRE",
  "key32": "59BDHD8T5AdPMv61zYxq7o5qkyR2NKSEbwKF8sUEc9wX1Kh9wUQ7cu5Xa7wL3jQqBknqgTLaXVuGiMsWiqgbHys5",
  "key33": "2wvmz3zFvN1Ve7ECrB159WbtDuvmdKkGtEAKswfhN14f26hZt3rHXUmsmN9TtYZEfYQb7auEtsgi3AGY7Wv3k5TC",
  "key34": "4H1xAv8SeYP2diA2Pv2sN75TFq9bL4tVRrktZFXmSN5hq3X4ka23wD3MrjTKJAW5MWD9zZT32LDcDpRpnaJTcZYH",
  "key35": "5ey5hhQeBweEGqCJ2L4TV8jsMQooNr1eJzgW91DKnyXUCc99QchFLbhPw8xw7awVxrffoMEHKjz2ZgVX8HdJ83Yf",
  "key36": "46HminS2chpC4DARoXfbkf2wzzhrjoim71Fg42iSqqAHc84NDub6gdA2gDH7pgB7egj5neBKQEev43zDLumWGmJv",
  "key37": "4F69JCUCptELoMUJPDVgfsG47FjCa78Bz2HMuK9fWNDbwfLrj1DWGA6uJPbKdssBE8fSAuPQYcqz5sULQuxT2kep",
  "key38": "2bEvrDGWxQAazYdL7JVGXggtTkE218vT9jub6Y6i1xSTR17DXxuuM3kiBgP5yrLtfpKFkX56xxmMc2msRGVxNGoM",
  "key39": "4wiVHbF3hBE3FLKDCQYvSxR1EWN1BLpUEE5svf8da3oePEjgxVsz51REdVYtkTr2tWHtiEWh7h38CjYbK5FWjiLm",
  "key40": "3qTjDemavb7QTy1u38x2aU4Xx39ge4cSjvEzzWGQtvJ3e22zAQWmCyp2hzPRDrzJCQr3MvSWsSFmLQBhSxDFsQY6",
  "key41": "2DEotB1Wzwiq9BshQSroqXqvPz9t7N7vyE4wsYwRH2dXTBBho4PMCa37b7nFtFZzLWhm6TQy3EXaRbuYnsqdtvju",
  "key42": "64UhsMUJA4kPQgyuF2qzG9Cj1UGQP2X7cQmye68FQfK3v4T8QjppCuTtqZJZLn3ja8n7wGFdEwJsFz8FJtLgwgc1",
  "key43": "43yVxSjZuJpf6xC7LvKAJzXbafk1zhJmdG4RQf3iMdCJrfFRibiW7agUpbajSZXajnrUaBfqJ4DZCGZSkE66rntd",
  "key44": "2AaKPymwBxiQEkFxk3y2DubL3FufDPgKV2LLWwNerCd5AhS1jL76TvhKop2WugvKCnTmksGSJCG5mSJVvYo3d4sZ",
  "key45": "2krd1P6ZK7ybvEKDMdGakGFY1ipcZKUNEu5pZrQtL3UVjLWC7YRwiyD58Qv3feFnc3VBhqb9U2x74vihxnrvQpo1",
  "key46": "45NzryTFFRMhziSEzqu8k6CY9zK7ectw7hHfqZfrt4TumnC6J2xydJEcLjf8kaprEc8koYoWcBa4AWMs26UU9BHS",
  "key47": "VBcDfNF9eVZR3UUFckkw2cooSYckLmf64yQ2SrMX8SkJJAwiHFC27L7Q3NK7uNNinH618ssRQgBZAfHSoVrjNZ4",
  "key48": "3NYj9ubrd4gJPcQ619HHAT5UCFTEnKY9KqZZ6m9k8r1TxtedwFspnPvGDo2n9wtZrgpqL91DpBTfUXY2Rey14FzN"
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
