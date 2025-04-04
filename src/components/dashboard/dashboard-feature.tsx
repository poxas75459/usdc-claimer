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
    "3z1wzKx7Y7VWuHgyY6bjGnrzu77hQZVZVkTZyNWs2J8MYYcZ41ZZwPwKvRhCopNz8rHCJkznQomN8EvMsARHtSQy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47R9eDLAXM27NhwMvhPnjviCQJnVQbF5771jJ6joecanmWEvpcv5VwD7YQ5R8mQvJyocofDSvFcEL2JkpZFPy7Qa",
  "key1": "5aRS2yuHXsJQcTRDbyvVGAzkrG1bT6qS46Qhd57yc8qaiwVagATMZRSJ1GkPFR3rqvXQXe954HG6wE5wXTV2b233",
  "key2": "BsabB2a18bMAZxRhXrpMZpqXXVpVA9JYEbU1Fs5imBszFpYLa6TXgXdt1rXKU8QHpN4joNPxf4KGQvvzZkKpsXH",
  "key3": "otZKEh6UtcMMuwDzRxMNjyUhtSC3FEvB1swPKcW7VRzb6CVyk4eo9RniBb4bfkT4m5TsLW8Qa3dApepFwTwuj1d",
  "key4": "5FteGT9WY1ZRPwZYdWEEpxBa2NDic1oRJajKHAhyeqbXWZSY2dRMNLHYFRNnrDQqDVkUHVLakyhbmtfs4F7Zu941",
  "key5": "4DMVaQhu3EVJepgX2wNJi4woGEKkf2T1gvo78Y1aFmstKphTiHRRFhqMh786q4EoK3MfGzwumh8PbTsnvss9K6zX",
  "key6": "2WwL3bfuvoPAnrg6g3iN7ekvWPq7EX7rrpVj3aKsbtLRkPsKArkAXV2tS2UENuEUH1mdaqW5WBAUFX6fm99tNSnG",
  "key7": "4BC1FJk8L4UiWkiz9u9VVF7dLGCqTKE8pXwJ1Vj4PveDWZBvp823W1Dj58J5RnTCcknUrdiKSsZ43Z6VWtMZbSXG",
  "key8": "32C2FgRvxreb3bMTzJPvM9x5KaV1aF4kB7w2KB6oarkb4mB7dGZed45TLVkBfW2M5bjVfHJX4KjkkwkBRTNXqrYU",
  "key9": "46GcwXSd3toeT5cX4vuKLDdh22xj7W45LzDS4ZR4WJda4jz2PpufwkF3wGivcHjZ87gieBSVWC6eKNDCRbLwdYNh",
  "key10": "rGB4mcYrWrfWLWU1wj2X879baBoGNmav4frpue2unrf3PbwGSC4d3ERnksaXp7oPQUW36mNzYK8qD1d3wssoK6q",
  "key11": "23dDyTHP4D2bgbQZvD5p2GVVSMJ6YzKwUZZ9UGUxZz3WYxCuv8hTebAXeapruxkRATXQtHPjypFqrnLXfyCyUo3i",
  "key12": "3W3zgybmix1oaDcGpaxJ2hV7QA7DPhxWWfgQbtkY7FXvn4cYoBcCFg1uXh588hzGckVf3aSaTyJ9xWnv9AdMVjFw",
  "key13": "64Vi7GskMjkugk35Xh8rR5EUAAV9gSRQRQMLFTt4HvvnXdqrQxLGHeHvJr5MeJHNnSnCubAkc1e5AKr4kTka3hf4",
  "key14": "5ST2FpYZo5P4cMiKwQXAm9bGovnprp4TZwGau8GgwJnmGFizAcFsZixCLzUB15vCu4VshoRgVX6szCtqcJjWUg1R",
  "key15": "3VP91wyrjeWFAFvJRVM8TyZvE7SwRVk6JPKSGwRW4cE67zoMJSRjQpSK9NWPc9ZFBPF7fDfqi6A6YoARpFmYJmWK",
  "key16": "2trNw5FaMMqBYkHVQ7eCnAeyW8ZyW8BCB9BLD6YqPtkEFXc2D59THAsbMZEGiYxqupZCVQ4BYWSChAAkbH8R7hZS",
  "key17": "DQutFpYF8PovmUNpY1guFzJSVEG69xjRmXP4HXVkJ2Mr2J7aKiKfo5tEw5fPpCXHXxXH98gRueQncSqE8DwfWTY",
  "key18": "449nA5WuSFdME7cdZhPY24RB21kbqiXQVQb5HgNGvxEZPE6sYEYbDU8FZxJN5pkTEcBiENhusx2fPfTt2svoA4m1",
  "key19": "4xrC8bKzt64hfUjXcH9XancDPQmvYAZn9aLvrfoowYdVgphsJNoDvfyZw89Th7AvjxQvJj6Snrc36pQxf1L6457r",
  "key20": "3n13YLk72ry9dC8y3mu6Pqf98BhuZg4SDgmkhDsAvy5KSTn3SEvVvAGTdRtQH66UchuzHkYGEYkVtaS71uU3HoGH",
  "key21": "3Xz7M2RcTZYT99rGCT4NEgk1RGa9BRYeU2MXcT2ZJ2Gzt1b8YUf9UNGxS2sBpf4wizCHcKV69sJLpiuvT2qhTWii",
  "key22": "3FcVhwaPPQMWD31Z6MU6sVNnJXp7KtXpGkHNTRSdxqtUqCuPzSfG4jUv1BefW1pyg3MCYmowGzZhKLDCiDVuVkmv",
  "key23": "nhn4YeF7LQMth2Coaqy7kMEQputVZDn3uxzhPT7TRhgAHfiyBsswDU6RQUVpS4sp42Y8agJaR3Q4DVRXvSakjQw",
  "key24": "4h6G45pj6ZFusN92D3MDBchv2PoVBeCA1TkyjX6cGpXy14d3trrYftCRgm55EoquU6W8Mk7QF9ezCAo8FZDzgcBT",
  "key25": "9mDqenUpFNZsgkvn5UoE9qjwkCvpVoCwjb4R9v97vbqsKySZHYqnDWDKa6Q2gTudDgaLKAGv78fF21CQmFRApu1",
  "key26": "3vQXppZSMtd5xvPnsnnXo4SiKBL8rmqDinsFNuEJUoqvFKriiiVgBMcnK8EMUZFBnzoLCaWvMYbqrCQD8dduTzrL",
  "key27": "2o3RuGs5K9LDK5QPG9QdAqxTV38w5nBYCVKjymLPip5b5mVVrqipgNow2tQQKJugmDFH1YCDEzG9Q8kJj3LAAaa1",
  "key28": "2QuG4H82ZeLzWZNvUv3q4mFZpFSE4bewedXAqahSX8GWVedZPpkkstxSWoVEsUFGMuxDVEfXD8xoy37nz3zrHZrz",
  "key29": "38uBV8ksQtxBcmSw91vPL8RvXb6HByZJAUU3XbKwwKfSGUoYBzfUN4CBnHyvKZn7RFa5RgNsTBQgpqniSouRaZoT",
  "key30": "3TfTh8KtVWhZJVydufVWuZ7XrCXRCe4o2dvEzTEBnsk2M7DkKUnAqLNNt4zX3R2oKDGrx9YR1yHAT64yZLkG925C",
  "key31": "36phFjJJrdQENDNJUPNEvRLazs9nfGgFjKkbZU1f2jCoxrtKGKVG6kKfzS1pKoBJjiPg1eEiJRAyLwaF4ynRjuDu",
  "key32": "5wpU7nGzviuaP2bJnuCGG3Y3xuef8bAEeKDPqA2i2Hvba4pwEo69zMwofbPmCz8hCa2yXdcW9T5a6TmxvvNcvBz5",
  "key33": "2jj3KCRHkJbk3fcGMuX7mu72dSnLmSHaQ5LQaH8cCNHQQDm9ei1vzBgESboq1E4Ui3T2qMH7DHy3htVWTYG9NngR",
  "key34": "58Gc4yhGx8fubAYR96jzmfNhVZ1YtAXtaT9bsnrErKLAzg3BLmRnZ5gURBWSfkm4Wswkm3Q1K7ansshjM49Yr25g",
  "key35": "3afGRWupQjmDiRorxvgo6Ahmw9ZxwhgPmY95ZrezQ9pqRxWvTEpeopHRBiNW6uBQZ7xqMPbmnohQxxe7fwQYoasn",
  "key36": "UJQymJMo6rDne4EPtrNHuupo3MSi8hjMPNvDs5nyCMqAmGBan1pgWmUiFBTcwuX7ZUCEjaXtDbZHQoTJmoSjjJk",
  "key37": "5SZqqHbrRW3GTCzDazTziRKFGqTkaZpBU9usWVA4pM3dUHcWFqJ1uA13NmQ49vmaAsq6tKGD58rzaNJKx1C1Bqme",
  "key38": "5v1BeTBv1TQq67re8J6FLHW3vXs3HTardmNJdoXJndwAndnRVwhQKbEAZRbf4Nmw98LoxianvDrVjLFFbQmTCgAF",
  "key39": "5o5yak2E4wPpPR6iXLerDkzzZgZLmmpEEFMDdR2CQ2w6X6VYD9MeE2QM5EjurwvfaRDRgXd4CgE7RoqpCTPW1j5d",
  "key40": "52RmC34qkzCoj4weT8oEQGj9aMDH6VgEm5oyVRcGYmZqHXhiMkq1qZRPXPBykd5Aud74vGhPaodi6MFDoqdQb4HK",
  "key41": "3LicnmT95ZbUNGGJ1K7XBLdikMHtCy3FWpXeSGkR5ZMiQQu8nGF81AuxdiMZPYMstqDBT2jv1T5R8pJze8CsVPbb",
  "key42": "2jQvEGz75q2wgWGMtNetKpARgFGauGUfNPZnv43L1djjr7ezWSukvEfctDcAFmCFZgpGyYmGA5TLWmjinJgvyMzH",
  "key43": "4vDnJPfbFf67qYmdTD6vin9ZmrktgjFs85GoowFPPRufFVJuNjhDe4ftvzqDBy9ZLx3mNvAxzTKjXWMHCZyqqGaQ"
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
