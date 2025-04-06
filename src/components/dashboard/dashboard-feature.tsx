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
    "23evDqBfSXbbfP7NMieqdGfNp4Wi4DLTSuLHQ6ZYpeLN6Rs4pAMNJYHSg5YV2o57GCwHAHHxNKxUCamw7THuv62w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rKDdHStHpLj5D4bB14JArFZNLAjyZnZrCHxFo9s7x7ZCerC9CQEcbfLFnxXcD6CkDHdxTWrmzxQQBViz3BXisj8",
  "key1": "2ixmDdVTkQPmfCBuTZ6enhZeyepVjD5x4qDd1Qp4ZuyTo6yLc4PVRQfnmcnEYT3TLXWBHYJmbETEzvNdx67EsA1Y",
  "key2": "5EMaDjGd9pDfnKdSn2fpjFVQdAHtZ2CJvCytDahRQUWAjqRpwmbwguAPhpLzLixfjcuN5y86RC5bPDjeFLgFSATA",
  "key3": "DSMpDJyXP5jGwEfbk7EDVuMePZ1xfZY7A7FWyubyRUbzyCWQjGwor8EcpAMfTmpmHtxb585iBVeabqk7ULJHMBV",
  "key4": "4jukwCGJrCScrurcb6WMTerBNHWmcv3taEFitHLj3Bccw37wwAbmNi7S1P47KiMKpgxNGK5Y34jDXEKXqnGzhctL",
  "key5": "2UoopykNscxdg7RSXYFqAr6Ue56BPpW1zpEBBepw5cR4DsMPHXkymS3S89eQGATpP2cBpsgZT5Bbe1EBiZRvi8W1",
  "key6": "4gH155jiemisKUVTYN48TtFKGfUbRmgnBYH3RN1VLPQWvAhrtJrghZA3C2iduX3d5wXywAkdZkF3Ki29zxfEKXAR",
  "key7": "3JJWAJ2qaJ1AuAzRHW3v5xcH5CTLLKZxNhjhbkakk4aKSjYqWC5xaW4SAftn1542K6Ph5q4yLpWQmx48UjeZEcm5",
  "key8": "XKx3ocnT926wUwj2tcvu8P4NML7NyreETuNGLh5bqC8jcxj8kctQSk5WAc3LQLwPWunMNdmBoVYYTh1ZEFmrXyK",
  "key9": "Ujx5jBSVVNKKrgS8d6L6uvuSeGcg3cUzhtnZ2eCgxxnv3zPYctuHUTBzqKU4gurnhkQjUU3FszPiK44HKB8Zdig",
  "key10": "5vuFmztbhBuZrwyU8HiC7FRE9BWL6CZZYW7paYcu14J4AjswLykoQhe4FCtJpJm6R5vEQoqVNW4rtTmpKnJmHGFV",
  "key11": "2SFHeQTzpiThRs312pk93e9Zy1zPWvh7QoUJYXTN3KgvXTeiUQtUujHYny9tknkUaPHNVJSABZHtz251uF8kL62c",
  "key12": "56sXHVf1AdtxEnE7LouHM8xWHG9ydU6uFncPGbvtVhSfkN3FYUkkzDSsQdZwnA2X67v9FprnpFu8yfsmrsxhPeQC",
  "key13": "4coXoEVgXxUHs6pWsshUJ5fEGcXq5wMXUJF6dQkHFD21GDuHTRojn37QdT5GLBMJy9pSg7idSBxndXSNhVzTzNr8",
  "key14": "5pr9o2EHiokRTXW65uEBAHVxyX3gFBddtGgCzRsWLXmFXVdDqz164MEnV73j4ChcPbDXgdC4xh56qBVQL5tSmCth",
  "key15": "61LJmnqGpNQTJEsTUAJRjsMTjDRDvKQ7fjjvHCDxKGhwpLQWCkAZoPqREBnWiLuvtQWjm3Zt5ST5txnKY6J5t2zZ",
  "key16": "3RqtdR5UhG9Hx21yDeQrPL383zNiDxXqx2Ut2jodTzyEwLyBQN9rLw3ZKSQwYZqa2Wg5RnqtmhtiG2fWkNNnfnDg",
  "key17": "4WTG2tQ5nPEeHsoer6UVWndFsA3StyB15BRzNC83XYmiWHXiYeWvUiX3Lh87SfryFnpTis4GYtprt9K1njURxpKn",
  "key18": "5xZaBGJGHo42PbfzF9wtGVAkkUs4FSUESdHQasyVLCqxcuKVuRb27zMnRUxK2MFJVV6HzJ2Hda5AkHEcRqo7x1xU",
  "key19": "5pvm11vHzrX88rUCpa6J9VjWiNuYfNZCZRdmhEEMhFPpbgyfGVET7ty4QwW6eZ2tXNGR19WTC7ypxEWViSZNSbNp",
  "key20": "2f8Eip3SkNCM1Zd9Z1Hydjd7mfRSFLFzVcD8e3qCAD2Qf7cHvndbeBWzJANrFvtWN7xDMXpdNQay4unFdu8cLM1t",
  "key21": "4z95VTaL2gVYW6GnexAhgiFMAiJ1LQqqFxa69R9n49tqBnZRKjdSMf42VfsnQU6amFqCz5pxu2TqXiusfu6NoczL",
  "key22": "2P9FAFFUBFbHT7tCDmorzdz8Jyvfy3rhZGmLDc29SKTDNdyGMWMaHyh6ThEb4DK3cVXqBqDephFKccCKAWc2aTXm",
  "key23": "2g4cpwVVLQRmUVTDyuoWMftuodM83pKqyScEujQjGgmLwe8J3h5crz23fYXqgT89Lq6aUm1xKvmDPWTk9yXEmBB5",
  "key24": "2jEpA7utuPawD4DK7orSbic2iMtw9UTq51rXjRMbTV7BPtL2hPJYaDL59eMvaCyeDXDpNYaCyYcW9yiLmWbuEgv4",
  "key25": "2YnPiGvkC2sQSDMKmiQYn1P8z9B5J9jcKgoTwmuk1ykt1J3oCjfXn5HhnLETodbLf8ngZnsFxuJFAyyQE3nXDt3X",
  "key26": "3Vn3DqUPSMk88kRHXf5oC3KeYfmeCoXCBR2Ru4bdRy7s2SCyvJKrKD2VEXuiRqfijMvASKD54XTrYQZ2PKptMa2F",
  "key27": "3dL4JbJhSLkTFnYh8pZtj7d1zmP3PJae9MTyRuoxqcGAuhVoMNqbxT3mHWukjVdmqhF8nWZdx1EbPfeyx7JHcgq6",
  "key28": "3sNW1WUoyNZsr1e8VMycyCYSPW6L61JJfg3uyFX6hXMMpeF6zvbYvfwfkihaLgUD4M8Ykvts8MbCVMW7NdkRfEVM",
  "key29": "5M2YVNxME1TA3yf79Hi8JC2XGdnnFtQDxMYy3ZRWsdxVFmi66L2sh33BBqKmQ4eHYLcpTQUPc41mySXwr7YvmZqR",
  "key30": "5W1hrqG4ftEqGLEUBUzENfi6s5NWUc8cPiAz5d3wn6z37ea4VrRaacdE12cfe8KwmGK3FCPYwcfwmyFuJUdB66qL"
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
