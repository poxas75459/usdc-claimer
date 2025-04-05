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
    "35EdBVSVpDc3skZTxMr7afpmZBGQxQ9YNuYoC5kud7TpqESfa9sJL74eLEdvZSPvkMGD4EoHdkzchaKKGVpAtkeX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QzTf6KfuRMeDEpZ8Xah1g3M15585m412RcRoYsFLZcEwSmWTxBEMc8xVxygjf8ESbbT9jbCiHGrot59PHuBaJJY",
  "key1": "5hT61R9nMCRCNTXAA4i3bRgYYo8JNYLfVfRx46GQ6r9wc61Mo7aE9o3MxkBVwwJcMyZT5CYdw2nWZ1L9GvCsZzNz",
  "key2": "3jCeYhNVyRYzdBYRSVFjuFJpR6QFXppsbhvRfsx9ERzmoWfu5TV14YZ3vqNd6UnU5rWumSdgV1NmQNpM9GyzKSLC",
  "key3": "4dPhsXUZk3aWigf2PE37dhQGcCxNuLUsr7zHxJnpwN8uC49Vxp28xMgWwcMCCsJjPbAFbM9HT95unNTPg4G1kbk3",
  "key4": "3DuHmnuW9tqsLwj97Sbm2V9UPtG4YevGLZpCRVSbchYHdqKztQNuzfBZa9kuHyiUmW8MECdWTbLrsowe2pgjcVYE",
  "key5": "4FjNj31b28eFoYcWxMenxgJFA7zuBTVicbwesEciBRSuYgHx9f4Xi6Y9wyzW1vJH6pZ9o4sL6qK97uz9z3WMD35F",
  "key6": "5eLDMrXRzHZj1VGhYbZeYBFNp5qU6kwEaiKxPHTAvz3eemdZbatxGErYNBtLjshgWfunVF77aqDqdM6CYBu4VA9u",
  "key7": "2yuhU3LETJ6dVMChN6bv5nbvg3ua6sMvv1rQddqszRrgtmtTmeo6nJg1uX4ZzTrcceQShcxj99AidKfx92eLXncq",
  "key8": "5qiiQ8ZKfRBzkmiwuY5pBAYox4jZPEGdWQDVK8vBqED4PRDhfLNW5xW56KZoHU9SL1eHvPbjaLPKDy6rfXAg18WT",
  "key9": "4ijQe2T747L6iTyEaY7wTUWZXdtyiwHgyTqho45A7x59wPzY9Cc3fJep4PLiRW58iQvNxoPqebGBgi9xch4JuCaV",
  "key10": "2Gt2KbL5xuJuKkXpdgRhTnPBJosiGWnxi9EfAR89pzP4PN4zLCQYw8fZ1o3QEZ3r31ckkCC8jXGfrGDKJbuHMsb5",
  "key11": "4jzXvGjThkf7CLt6t7Ym8ceuazVndQd6YkwZu2imUuJetVfVKuUo3sFRXBWGN9UaiqEJmyq16qwRdt1BQ9vZcf9e",
  "key12": "5kP6Uz7fwZJ8sC4fNdDvti16SLo935K2hBeyjd2BsYKkALFB4YU92o5faN6yxUKcXMRvYZWN7Co5W4kCwqqecLmy",
  "key13": "VxWi9oskNXz7L9LtgrYjQUnHC774z5SnxXUqkCmBosa7hgGULVxnLzP5PvhLNgfNDNXDxejpgcERuD2ntCsqKaG",
  "key14": "64BFq2JjWf2vMUCvAXw1Lz8iwyPNmbrHfp8K7croDehtv9oZeALcqxBbNrdYWUFs8KhFtoDNa83StzFhVDnb4PxV",
  "key15": "52JV6ME2TjJ1VFnrSeWEF6iU5NnmVJ2Gt4ttzMVDsgL4fACTv3qkjxqtGDDB6XQDHnSa8ieR99FzPKPWDjfioCQD",
  "key16": "61tdFiZS1itwF3134vv6guh94TqCsaVTWXZnmkaefMwJPezQZzapg74icyD7UmK6yTSEtJb5J1Yhn5CkQMTCKhwr",
  "key17": "RQLJvmKBHadpJoYWt8J3yPPV9jyVpGhN9eR6HA7ui8k2zTvHGsHJ7yLBy2ZxggxgDJv7gMiERGaiSJcevH4wv4V",
  "key18": "4cAWg23axkXUpf3Srq7M9putoQdeRJmzTN9fh5oanoqib1tqbnvVeBcKfyVsTyCAdJHEAjvd3W9UQt9xnU29YAYY",
  "key19": "59rPGoQFBuwuoWBCf6toFN3ze71HaWxZkkqKTsCe7sPPpoEfFEmRKggm3VQaBDdSQ26yViiNtiBXU6hNK8kQVSXw",
  "key20": "4a9q4HE1Hv8yLGzJjdaqtXv1hnaXoKewfPbuv2cNKYECSPfrZ8VYE4m1nvfQ2LNDdHA9moGvFdkfU1r7jKp5KQCX",
  "key21": "3EXykQx6P47DCErhfo4ApN2Z3F65WKcXhwr4mx2vwHGr1bxqnreexbx6tATxs9kJytp7vHRUADZ941QKz4Q3FvWY",
  "key22": "67Q7Wktdo6QSthLx7bNGWbmqWUWVh4WUUbEdJH1nQpk3WYDHELjyzPHmTvRv444B5WnW6d1jM55GBBmXaYQasXEz",
  "key23": "45FkAwzXsX8Ai5MqGzPWcAUWf5h1jGoMnxHDQDHx8syH9GgSXkNRHGLp6iLuP7HUuHQKwUrw5m1cDPjK2X9A2y1s",
  "key24": "4Gq9bpHkPGeb1h6PGuo4Mo2tAnULYDyC3DRv8iy4kp3yweVQyTp6sHJGZyUJwjvLxajcfZczzwNnGGFyK3CYXrZs",
  "key25": "5DvA8VgKKwfMQThGtAeVWhv2PXr5KCkJ6GkzizsvSC4qzvjJjiVqNaZPAH5gfZF83vgXFfEGbsPFoducgweSGrwh",
  "key26": "213EK447g4L1zLEUrWgDSh1Ln18ge4qzBMK8FqHRfJ4FJAxRXWtHFCtCXjBAqsywz8EuwSGvBtjP4CasDqjkuQvG",
  "key27": "5giHP9rLSd3yFXNUNfxnFPhm6i4iBy2Yrxme1Y9KUwauD9BQddPGEgoEmxDHs5XDYMJrK3oTwaoQBhtiJDHxna74",
  "key28": "4nAiBgJjzzotS2oiypvwicJ2MU89btzTswq5KCAZSzBAWUQoXGnK6mrmVxSr8gX4XW73QiKBkCFVESoWjC9NX85d",
  "key29": "3tpSv5JMEsateWf7xCCUe74imHEdSBREYMYRSgLCrxNTAMZ9Z5Hr4vr2WJKyTYcJnXrY9fvDFKFejSmN6HzbZVet",
  "key30": "3fsjojG3fsQTiaASSBYeSq4vo462VSRszWCpbXVdukYH6m4KqnC68vCoqTV6nooBqzgz6JPzeisSjuZxsMX17No4"
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
