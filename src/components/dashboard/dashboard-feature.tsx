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
    "3GRjcPHuHSHvDJijLRPUfkGmgY7td1SRkYSytjMRc1cPsFq39DeFfeG4cHfCUvD8KBdQMRoVr4UsWLtbaEf9Zx62"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zLQw1Xkrg8y2wWv1D9JDURJ1oL4TPoYNWv75Pe5U5CgmNQNVf5X5tQHcqy6Vp3Q29Pvc5w2XtTGi1yjSoBH7KhT",
  "key1": "4LNanQtbjo29gmhotwvzZeavbtcj4DTD4nVqqNUJH8ezZwEaiNyEmwEUqVdaH254uDRJXNBymkG7fgvnFANQh66F",
  "key2": "2w9qNhjYrTGkm6NFevahD5c9BPQcAD4rRA1KyCy8VYVZ99ZWhRNZpfmr5VTBNqj6kkvmJaSkCg1WSaKsy2q5PXDh",
  "key3": "3gEACTREEcMfvTyAScgyER3z5AbLdtyY39aCRhBq1F7Be5QWDEyLcb6xnZts91GkUFEkXQA42FtpPdBkL6E39eFm",
  "key4": "4D2gYGD6RYyYNoYJNudYD1a847ii18yAkXGBGGsgYBuBYiSumgdqc3kPHNfLR3v5tkGbWUDKasasC4y5CnptsiQK",
  "key5": "2FxFCv9DfkH6SqgyFaVCk3LFBjQsn7aa14FYDJkXu1NPzDXR8RbbtpWwkWux6dwc3beootiFed9qZdb2vverVc67",
  "key6": "21GYUvrJ3t56XeFNGp6qTbtsWv6WVSgg4dQgyPDEKxdDVRthJEuEZPhK7MdLpDjSWeSB5G1BUh8Re3aUbgDwXab4",
  "key7": "4qckXRcpJTZfEKwJECsPSUEhWS6SqMEBiJPBCJb4bq5sUBbrCaKgPuJ5G3v3w6XdjqXbTMhrbbZaBJiVbJFm7RLC",
  "key8": "36W9FzTG37nCT87XG9fSPjvCHPsjstgZvNDCFjcDeJotajsiW8eYg7Zvxjbb8ebzfWurHS7CB95bBDcYv8YcnRPR",
  "key9": "4GwZ39PbYPzZGtN5KehzkNiHHm3892dZC6Pbp8sUrtxKqGYLaUUijxiacvmcZJfTZXaYmF3dSZGpj6x3YE4Ux67j",
  "key10": "5SrPQAJh5SnCm1B3iBiPdWoMTn4xY8uL91DuJsZfKEw64apePCNfXdqfALeEUkzPU7P7oF7hJD7NGvNx4VDtaUA8",
  "key11": "5gWLbeaWAEQsjX2U1BHSr5RUXvNaEhFxB3r8gHvAUMpRg3PKQMsJgQHPMsWSQxfHWbVJXvJ6MPgAC2mJrpsxkzND",
  "key12": "257EU6N9mRL3UpxhjahEUQtZ1opBRTKdowNVEBGhYyxMwZ7o5Di95TVeRtdAoVaejMHHLcZxT35ZocuHBUnCZQhR",
  "key13": "Xmx167ngaCfuMe1syoJxqDoGZ9UCgyVrMysf2s1gNLsNPQYcsVYr9o3yJKajch6bB7Wy7UH4pLaS9wejMy7T4Er",
  "key14": "2MVvWRgmXfi48oZAxDVRfVEeseBuJ3vr4FZQsMWWqdVuBfTouRYmdU3NF6FePNBQCTCrW8ntEDjig7CMnVPgyXok",
  "key15": "2YquKP7AXQK5J2egQWQgzSdrrkczr473gGmQRRicrgxjRzJMdF5oNrYujUjrRgL8Y8JHo9Q8qBuRKL5YdV2tWKeC",
  "key16": "2A9bgXmipQnLbuxYnAZtAvs9Z3CTMFt2oEBXHqgz1ATTPNSBAcBAZSxe7meQPb2a9eVhfGABQcTy7nHWaT3Ewi5q",
  "key17": "4JQHT986oS7j432gMfXYZAc3E2VtuNCjHtcLAkTS7fqKiW5UJ914SSaEep1WzkPRAZ5Pqt97pCdvYz8T1vJrg7XK",
  "key18": "3Etd5cg64aeRNo5Zd3p7wdbEYwBRWcxwPqgSJ4cThX2pLu2BUjR1GDCFsfEAQcx4e2Af1DYMrWJ4jbFT1ddhHLaa",
  "key19": "25axrTUHK6vcRhQJ7we9HKMCoTmYvJk7FJSgGRgJMeiXYjY72S3QzCDZzmm8T87jGBHBa1qpAV5g3P92AVfrMUhF",
  "key20": "316AAA6Bqu9KHQrkfANnLCabWATcsL8aG1ac1tavAvhKETfS5EduNWTwZCUp1AuEUckjYgGF2om2o2ongZJTTq2",
  "key21": "3QsCimpMUmrZeNjM7RD2bDGJkuXshpRnF1PcvZqUV9znRKpurRvaQ2WTCKx3RneVqrcCQJamaPwseKdJjqifY93z",
  "key22": "BAVknoaQZwznPvNYVLmnh8X9At6RsJ8SULRm3p9d4z5P3hbbetJsLHXdPFynEsmMvjeXaLouDexAomVXDahAgWa",
  "key23": "3gjjJdEjXweDPR2HzqeYpuDDpEMNVjVfmMtgajxEHTb7x1fZNuk3NVj3yovRoK8h7Vu1yavHj5BJVMgxV8c5LUVh",
  "key24": "5gAe6AuBTi1pZ3FUSQS7TtDfyphTavorTdeDYoMFpnjLz5V8qTXsAeFUFcfcMz1t3oGdhzHUZSf1pFiXaGGPGHdj",
  "key25": "2K2NXssKJhX1sUuT6dR5nc4pTHhXTaRDhKAsqMw53ezWj42NgZ5rzqvPCpYi7xbvY37PY7ifT6snmDpg5L7RxXr7",
  "key26": "5N1ybeYxTyPn6WiMD6p1botFXyXc785ZXvncLDvK77mT6Feir21MoeEitYyeWGSBrcTR7AdwoKBw6Ctn252319KM",
  "key27": "2myqLGCmNtCYphe1bqmj4fApqSzrgZaTKY8EG5ju9UYqThc6KggaBwzwt7vJDNHXA5YTvaQzCMvQmzDs8acWj5qT",
  "key28": "5R5E19TVrvNcjLSpGazCAfUPdJLgW7V9V7XTLkP1Eib1wYZoJY9UrN7w1ekqF2ABTAaR6CeXufE79JVgdspH7Wm"
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
