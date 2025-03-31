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
    "3QXViCZqss956CKowA4nj4q4Hwj1zo4FbWYLbsYgc3oDG28v6E9orbGk8ikjGHVghGmmPeL4SKDc6HiPVQupiBoc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gqv9VRjthR28k3yuzGr6Kx4Xztt8vt72S3V5v4Q7aMtzoRSeEaStQoicphneSoubq9hopmtqmxRgsDaiJFkMbUW",
  "key1": "LPYUarL621zopLQPqaWpdfYu8w8x6GjPqN9LBGgj9h8t4xbAHr8MheNKbQx8sQnikoMDWGUcetiLoTwBko1rKbd",
  "key2": "629waDXRY1VfMSSbVtuimiqdxctoPLanMnUwUD9Z6ZKJG7xMYzuFCzvS7U3hX6rE5L8V4Gjt4upXVGW7nUe7MMp8",
  "key3": "ke7V46RRLi19Q6pwJJ9DWjUAqDBfM46AZcqSCCm189mQHaFsWSJn8MjCjxb7hU3XZbf5tMTvLDSfw2jmbUmPfYQ",
  "key4": "2PS1V8SjxtfPGhBCgD2U2pJarYAqCXXE85XSqv3hyaSnWc7KVT9hnt8FHhhN5J96kYzj2eb3MUSLWQJtJnwmS69r",
  "key5": "4hhwX58JnT2iFPm4hxze6ULJJo8zCLmtYCgtWQUUvp2aNcvF7HphDk4w4UEkWjzmPNWW5B5VhoMD7KSY7dcVnToz",
  "key6": "2xUTqgXPWMF8EF7rjzCwue3sCHZgSRJSKJ9mZu46AmD6EQdLBCUosYrz3QT9ZSWTCKkJJs1DWVkxB91ajVZ8Z49Z",
  "key7": "4ApWJHibnTGZLdJ4gDcAL7khKrqNE9Y55X47bF1dVT2X1X7A9sUoRWp6U5VGb8wQv3FrVR9adxD2fmXKhDirAwbt",
  "key8": "3MoeDs59v7NwbMWz3JaUQfNTpWQ2eJWmzXUV2Gf33ZJqJnUAPdtSPzj8jK6dCvLDxQtwK793vkBw53SnFYdWRj2u",
  "key9": "6373wLdKcsR52wvSigqpA7Gv6Ry1hnKewGnSsGXqkjMZRVKQzUrMB1cPNWNar5Bv4KDJz6pH9ruj21XAeoFjeK6w",
  "key10": "3cWKhZ3kH2Q1xeA1Lr2gAnczmsNqUmcDwc4HeXvc95oJc9r8mKxQXY55j9zGXbyREFrRa67qav8x3XyoYfPow1tE",
  "key11": "2xR7yUeY9ViGpHbE2mffRkJQs6n8Hq8FJY97tbSZS7QnFPVQF73arSwV22BqecyZD7xAyhsxQ1tQ2T5u2GktzS36",
  "key12": "2oMR1kaz2WsnbraQa7C1aYWXi4Z7yGmtaUSd7CZMeBsn89GLKrW7CuQQaG5tBwQRue5Jv8ALjbgJMXfsQ2wcBrJi",
  "key13": "ay5LuN4XRjThorWsUKdZUtvrXUiEd8rX7tiLnNwLZgiE3yTuCrMSXhLNGbWUhomuE1eQSQx7saK2BdSe3ECC159",
  "key14": "2aT8QCWPs7bVx4pGqS56YTC4rej4n5QyrsuqhvTtCds3duYGskQ7uoX9cLauP5HZwBfDSfBggv123jfd2nA8fkAu",
  "key15": "2AkH8hbR4nyYV6BG4MF2pw6XL5b4XwDJx27XVkLPLWGjaEKLwVdSyzD7LkYt8bjvnQqWw8x8coKJvncWswS5YJph",
  "key16": "YBNTP6NkHWpC8QH7CbcFkjoeQsPwVTZxRTVRHBrAY4Ni9ATH65hAtYJ46of39UWSDRiZdtdFX4Mqzgk6YvAJd65",
  "key17": "TGzhyZf3tWh2Qckr6aEzhg5WsoRzGYbnd8Tp38JmW34FrCDxmbdfRmXk6er7MHjhXgzBz99C9Do5WhSnoXL42tK",
  "key18": "5hLN7ePjxA3UsE2sM88nDEVuysC19k2UwySfCA55qZbcyyEoohVcaW3KMdonC6ZADEx2zY5c9XnyHBiXXyFjwhZP",
  "key19": "7qpgXTQLgUWJUS8ekC4RwJtrah81u9ufBkB6VDvSpDoy46oLy9ronFfn5oqrVjAeNrYejpbs4TuakC1KMCfXWWk",
  "key20": "8g7Zxo4js8uHc1hFUB9h5mpELUbVEjUndDRSWyWm8VuCBJJ22b1cVH7PRDzKg7kUu5U93JiEvmCP9gR4hp4EK7N",
  "key21": "3VPWYHkz5jmvUedWUQFgDBKzWv46CZTwzxKSBEX98kFEhiiFeCCrcALC51nqcaQaqFbkFWMVVkkbWAZ7sF9fyYhT",
  "key22": "3nwvR4GfYct4oF3tRVsWdaSBsBXna9fVWq6U9PMsoAiEquHhjCxhsRQxYFtrc7p4gx7kFhoxKft8ZV4fQHuw7bXB",
  "key23": "428YhaDWezxwxRsubCYrmzcQhuVCnr8co4fuRQfq1erRA2cYX9sbscAFxDsydkS29LmcZ1iZb6sJPHM2QwzemVgX",
  "key24": "4oFoEL1mq6N6pmscY8po8FwmNbD8wTMmhsPwph2cbd9cCCmSe4a5yPPSnQ1RFWaCVGX3E12FojDauCVsX3PZqEbH",
  "key25": "5Eir95xKYjQ1h1rNGmDP22zXmTfbZa3GmZFJpwiYTKRmQRJsoBNwyJZRtMAd7s43RVkT8NP9qp8RpgPWRfXMxjLa",
  "key26": "3RrfeP4PwnAivp6ZT2BNABw3HK2aqCGwcVWFPqCgyMH4aybZrW1uuEA5MJtvB73FD8PT4Y4UBtRZC6CNHiYgEvkz",
  "key27": "5oBWM5ez4GY7stUHkgy4uGDhhumj9c9kyEfaU794RNRJLkTpXRddXnYASLgGQNeghheGJZCihdk4ijkSWGXpWRt8",
  "key28": "gQdxG71cgzUnVKe3Xckr9icLN32vHELRJJ8zyrxM573h2tbGo6j5qD5fpFE17S8rsLACC4qzZWeuP2nMkmXTWHG",
  "key29": "5EDnUDEbtnutoHnFGgoPh2iMRduxTUsV9RFes5ThYr9DqVxLgcHFidTy4ud5MR5TRU3sfGwqMerm84b117gSQLgq",
  "key30": "2k1yXvHaS7fz2qfXfhtJ1HryVVmB6MbXbkG9zNmwah8ERtbGFTyKuxD2nUEJXk4197ivCaYLdGd7uhjQWGAhVhxy",
  "key31": "5y9GFXs2B56NCAyquv1x2Pcb5GowbEymBFGmzJxqDFD8qspqfMR3f8RPV8f6Mbc3bsNRsm9ow9fyV3QiscSWRnw2",
  "key32": "rfQmgnFH51jP3uTxJ8enqZHLr6VmBkmknqF8bGtRDfsD5m2bf5gqF1pUSmd49F7XR7VB9ZBtv9avyft3cXkrcrh",
  "key33": "2dctvTuCTx4jQttnJ74mN9XxiLtTB8tBNKMoHuMsdVnh4vWbXyLe7uE6rz5HxbD3yaHmM5u7itF1xzqjUSHGSmMK",
  "key34": "4L4nHRB5ywe3s3GzC8J1pTLzRfxA7Jpyc5FRudRnV9vPEcpVrH1e9RSx1mrDF1M3LXqpy7ku8nBvThPFZm3AWuEu",
  "key35": "3zsLCDsyorQMANPCtybd7MDKXgUMvf9KmGss4y1rCcsGCENsHdTqYkzjTyvvyvxHarxDk6rj6bk7f4r3PsgqgVk3",
  "key36": "iT4YCupHUEfqTaepYBLecof5BMVxT3gqgzjQsSeqWUSu4ZUDdTpNzYn3SXCNfArthY7ZAK4TpiYxmLiPP4Hvbq5",
  "key37": "2ZKV3vMENiK9jqt6Ve982ctHxucWbz4Ec418ugwdfxjhABRZJdneg2nuqZ2SVb4reQGVB5MEeDHE1Cz2rMtoXpmP",
  "key38": "4DJgBhMJbTGhjX8wZG6Gy2H9EDM9s3zBtbtnH1zLs32vGqKmXBQramBCZuh9uMC72DYBxUC639tqSTdR4ni5biH6",
  "key39": "2Em7FfGm1Tjbt5dquizsMtmyyo5d2iTdyBqheYxoSG2AoQwzFjS4MPmwEZB43yYNeo3JyDtYTKa2UY6e5Uq7pRf5",
  "key40": "Z41Jgzj7vX3Kf3pqrkpVYrysFxCPUJ95B5McP3HbL273kTsNvELbWR9v1UTRVMcb8KUj9vemeNLdTMgdTzTXpH6",
  "key41": "5G7QJdPFb7icovtKhuZ39J9Yyx2dqpgcqe69qPSG8SEBNJcA4bo6h3QMvrWUPghXnxAEDizsd68ChcNTNiTx7uH4",
  "key42": "56BfX9qnh4wfSbECib3euE6XX4tbFHGwyUoT75zxf6Y7mDUs3iqMAbQa2gy6Q81kVtuqoYMvhYxFiP5BcZHLWgM7"
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
