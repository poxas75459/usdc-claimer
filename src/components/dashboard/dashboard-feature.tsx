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
    "36UmGWWmDS3UQdazvpuLcoXsRVDLiwBTYwHUaQDixyri9qB86oaesWXnMK79anjkapQzVApDz7W4atynok1Q1TzL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ugT7m2jrPp6c33G3DtcqG3xhfZBqHAwPQgJSJ19x1PfLDeBDc7YqWLW23SozFxgjZDYQrPnTn4Y7FCmhJV9bm6G",
  "key1": "5tmjGh2jm4xasid8CDmDq3Ci6eDE2AE7Hy8DLaHnDK8SgJkzviidqUxrNtpGHdbn8537d1vCrUyg5qCSR9NBkoGN",
  "key2": "4bJoZBac2z8UAJmA8EaJdoVJJxS1nuVW6CeJj4ovCxd7DFuZiwW2H4UspX5JFzRR7HHhtJDjTC233FAvNv4BACQb",
  "key3": "QUHezyc3KFt28tR96Srzfcv36fosmPpwy2MSFuKqtML2c2RRTPbMe2TLdykcvyj1VEkX76QAbaou7Z3j4Er3Xr2",
  "key4": "2vSkMF6ohjCyqaPmPJqFM9G52nGv1rLuhjzdNH5wrb3s3oBBtNrtgtdzkx7r9c529W4vQq6Er1CkBSVKfrrqprbE",
  "key5": "5oKDM73uNaYWrWFqgeg2MF3rFSFuE5xbvSEQm5VCg66d9CCHpcTcrG5mFdJDqPXU3JjuMKg3z5UsYgvzCZzEK4t6",
  "key6": "4WYeCnF41iBFHoPniy1n1ivGSUfGsXMBhQpuW3gQ8kdSmKKHWQZ18R21QfW3z91S4XN6JV8cjPeAiUAwCtCuamEj",
  "key7": "Ghu9Mha6hSas7yavsHWWuA6ksQkVKR5htsE9GFiixX7tKTfzxetPyGhtY8gHfWPnvYNTxnMKDqML9nbbat57RZ6",
  "key8": "3QzxY4Hzmng36x3b8K1d2ueTSBvr3YFjSA2FZfxN7ZfoknxZV3xpVnSDJ73ozz5SminzFrkvciFgCh1mSFJBhym",
  "key9": "5xgJbhQLFpzpw9kXAe4mBQ6pTJkqKJgk3JTdexUwkhmH2fGt39zNzSQK72tjDV7J2gbzs7na2BxzifCXjJTAXygE",
  "key10": "3Fyt1WyjWhAPAV5oqXHRSaXyCBBe9xNU6q5eWvwPMRHbtezTCDHrfzLCGN6rzZMT5Nse1A8nteCizMLGQFFG7Fch",
  "key11": "5zu9yMmubcBWTzpDq1oxftjqitkeH4xWbD4fw6RFxPVrBEYhRNq5GuyjfdvbZV1ywAHmyweLjJqk72QPksGRP8ps",
  "key12": "cmxKiBmCx3sMApkP2KcsAs3j1uwJw4c8TKEiVPjwbLMRje8WpJVGArDyvsUG3cGo8LjjtBkVE9VT8MSceBZTgpV",
  "key13": "8WWdX7xZro6YVSbbR7EiuHJ4ZbT8rzW2tsLPb4sVCtGRLeBYNCyEzx7crnaNyWjLYoupPHh8f9gyxjY6rViDgoa",
  "key14": "3cbwuDKxhbpiTBG1WCcriHGau4xKiHe8fEnn4ebXsbSvp4vb6cBDVDhpuVDd2CPUti21n68zarhGYdkQ9Yp5PRtr",
  "key15": "328wub5T7GvYhyUvT6Cf9mQiKoe2fcyf6Yuhu5bMPP4rhXrBpMT7WxCuYZzjFxrAzqgg5PKYk5FjPt6sgpxSMiHf",
  "key16": "2B8gUcm7VYn1kYYDdqP83wGurTL1XDbhNsFDBu7E91oDgW8AuMmAqbB7K2YyLLjaGE6AWeBRfxDCLBN97aXB5oAh",
  "key17": "2T5pHzNNEuMwfBcghQFDk4tMpf2vxYP6BoVgnsrCip814w6VH9buAoZoSTgU9UDK48FjHHYAqjFSrRJzhDem8ELT",
  "key18": "2ZoYXpYXMzBRsLViNAiKLpysjucTBhqDNmkmtwdHC5HcF9xJ8ke6tWi26267JQMzqPh8J3zaCyY96jgrx2WCzPdi",
  "key19": "5kyfhcbyW1SVeKv9cdc6zKqGWhs6P1SpVFDWQe8Fgt3gmsAsY5949WnpVxGEBNAAhyPJYJFHJUnKP6oHktcJq5R9",
  "key20": "5km5QTM5Nri1xcMJS8DBes5sazr9oxLDyVWZKJmghkqVcx74natb6jW52moRyMzPJxumnWvanaibo3xoRCp1Xcxd",
  "key21": "bQYmXoLb6snUvZfhN1c81jRTb82tM6nCcDhNviku1bj5tPLwuCyCFS8VPvBJiJPWi4H7Tku6r3CPEeYcvAmKYdQ",
  "key22": "2mrxjp9foPhY54HiUTW41Bgzcm9FgbfoG4LHG35eeK77ga4adV3NkunHJjwHs154zRsf4So63iV94sUfZs1ZQGP5",
  "key23": "jB9sazuinFkrYZJbJkhAQpDhu96wCayjLcKexS9fiL2JnerhAeuc1CWsnHxkBVMqUgGfSXdmuTu2DdrZcyRc6KA",
  "key24": "22bwK6JLHwbwMcbXaxTjFFtJo4BGNPZwsC9MNxGMN1Jn7LLASPoDFdWWMAiK2bgLWPiUMSZfe2RoqoG4YWYzDrRJ",
  "key25": "4RFJFw5TSSyN45QuLzSXdVc1GJzsefa66CogvNgVXodQfEVkcHfDnftJH17gYuapj3rCqPH81Rqdiibi1U3RqW9n",
  "key26": "5C9kPrasbp8C5mgqoiVJHhC1KBQmpJdBqcFs18aHYzwv2LA5YGmgKMzAMXcQ2nezNsDcYGbzYSvh7xp3FWvALNuq",
  "key27": "PodX1GAjEdUvnavjAEPRiTZ9EXdYkHs58rhNG8PCjV2XAoPpcfS4DU2RkL4dowfgpKTLyvAQRJM5GZBCKtZ8H6x",
  "key28": "1gVAhJ8C8dXFHEasHxquoPaFSLB9AtaejPA9YFNBsU8mJHW6jEqSzwR9HctiiemgpcUgZwtvKwPQcDWRFaqwvHm",
  "key29": "qgMakvjZGJjEVbd584aYW4M8JSW18EXZpuniRQF8rYrFnUNATqpEfXo6AfEmb4sAVxdPahqd1HaJxunVoewjd19",
  "key30": "2ugF7F56Y4s6i1mgmM3YEGZG9L4H5Tztpk56vV3qfvBg3CWaciU6uxZWYvs9BB3TMbETaNSxT7v8cN4CNYoXnsHv",
  "key31": "4fFgWfcbyW4BsGmCCkQvPNKGDNbwRdesTkKswnLCNUzPqyXNp3YGKbB71BP4DcFkUspdYyj8zioSMekmuTZ95hcB",
  "key32": "5t8Pf1RdbatRYQomxAUPTsk6JPyanAySaMEAtXQbQBpk6ZFgFpVsG34pf8Jm8NgdmLQ5Y9od576pH9JJaicLpxJt",
  "key33": "2ERzFUZeMxPD8fB7gqTJpRM59K2CEXEWxC1xEmkUCLwQkByRiEv5YbvwdJXPQchkR7MhfYL4YtWnbePwNqHvXVFD",
  "key34": "4ZikatTjycWbSjZd1WuW1KKQmBkmEJXbYX8d8aKFQs5ZpBMJ8cW76bHyKDGhBToYR5LYfkarQZ91UEQ8pDFPA573",
  "key35": "mK3hACCFh7Fkn3gGrjtkxJENPRQf6gX8J2aSWqrMK8vUjBz7Zz1Xio8SVeF6cRBEWQRuVQyFnbqNGxXcmSLHzJG",
  "key36": "5HrssgrckJZ4sZ1qRRwV7CgdczXp8HuHHRgiX3zcscaLNbLPg7bHKSuCBZUjWzwaR5yZugory8LAzw5eKqu3qoLd",
  "key37": "4ZaoKfH8ZpfMx6LPvxnTvvLZv46pLJ7pfUo53zBixXrYGqotdvdurG61oBLV5sNvAwMAWpVXaGBwRRbb9Jznv9if",
  "key38": "5uB7evSa6Wg9K251xdNyeg15bnKnaHNaDgrxHJx6gHPpWCbmiMUqf2gTAE4nGVTrHCoDF5F5b1Yi7Su6Bd1FP6oH",
  "key39": "4oLs7kSEpcmFGGzKN4DikYvKgSoyHaLFDG4EX2wwWwnhM1YHwTQkfbksaeHU9GAqG7ghSfpmwr1F7Mn2iGy4TvsD",
  "key40": "4D4J5PjqevCGa6C88XpnNe79DznQoM2cED2aVx7tnwH3TaJUKUFEC5LcR69YeXotE8DpbqCHe6upaGYStjm6wGwp"
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
