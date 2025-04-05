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
    "4C7CqMKS9rDDiQjApc9bwzXjrCnhVPSHYdrUt6mY2wvsZ5DqvA76fq1TWitpbubuZeCWKnhaPaE5h83gndpF5hB5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4598wHsAiHVFng7F6HC3hhPTRS2pZuba2DJMQABkCDnf5r9t8NehMexrWhWnr4vus9iUw6Q8U6Z8WpVBEEPQZN6D",
  "key1": "4Ck7j2hoUPR14rb1dKAbgT4ABDz1RdXGy4qXPQchiUfwnNqWkAHNUVZn6z1q9rEyXpkUzUWKm1DtSaLnKbVFNPzn",
  "key2": "4Lcizw92pbj84w9gZF4JVqywDZEpEaS87D3xDDCqWjTmY9F6utV2kTijx66nvMA9ga7uKcW4G68Z4q9G2TgwH3td",
  "key3": "2cxHwtpq6kTmnfZwF4HWzx37otaJhBp7bYif8bK6joUbDrQV12qmJJXzjAnD6CXfex2bQ2oS9NyG3cKzQp5Az5JC",
  "key4": "4953b9HPFRQ8KnQahsFHt9P25cwKfwmk5JfAC5gSLPEKpp3YHAvUQadnRmzUZPyu1AQw2bAAEsRF2kD8czzE88dq",
  "key5": "4AdFeZySSPMyjkiQ5dqhxrVUhy4qjFECz2ZvtGoRhhx7MEzTs59CVFzvuJKWX3wgP5vk7W94R88mx3heuTyLurTk",
  "key6": "3vUdke1fKZLyaarjZcJ7TQXBhBW1MnkA6cFZr9wx8kfsRZSPSUUYtXhuk8iuLJxhdu9LkYeT7QBgLZ5aUJkUwd3e",
  "key7": "5WRow1JTKmSXMRhBfb3svTCWoHJuRm4Wdz2bfsbyuY9ZW1NAVQ4GpqXirWkuJkWb3kAvcJsEnkZJ1HZBNXagqmdL",
  "key8": "3K8NekJssnawARnJ1uUUXZu7DqsDPrjXpsYCRd49YYjJ5JmvGmykYjdHuNu3eK4CnAZJcdpsMNbvAGNHHXmTpMaP",
  "key9": "42i3TDMJYSuVLLWP7nhMmF1AMR2Ja64g6oKLknmQpD8mhY49jrV2WbH79Yo8G25hcn1LVZzR7WGwJhQF1shkK7Qc",
  "key10": "399JSyromu2BT2oHuufWgVJND5bEqMHPT3aaonyjKZnve1WJA8HHU9chQG1rwEifYJ2tvNBAyg8hfr6jUCyPvUyM",
  "key11": "3mT2BUVXMUoRhLDE5ZgjaeCkc3y1TMx99k16AzoxN3sXTfMHQkKrXjUAnfDFPkoeScR3gEnxxPAKArsoV8eufMoV",
  "key12": "4xHyT5BVZetikPCgsfJ2evE5ETSAGtNe4sCr8SGiKKrm2B3kL4EYyPBpqjaUVJxhSo7WTmzX7sLAipi2DwWHPJr5",
  "key13": "2XaXXsjySxqapDSRGGRiGTHQZJAdURAEe3xNcwSHXAwgX3vs7Ppa66qs3uyqayX9ACzUoLhMHUGsCbZXzUYoYNFX",
  "key14": "44hfjjAqscNqf6a5NCNytcS7nYispr8snLUUUwo15p9mTruRHHyNu4SJBh74FZ92WsGUsHRRnCytoqxfGgdMY1TF",
  "key15": "2YQ3jA2EpXCm1rweko4VECjqzqm53S25pUBp1anXYHXzM9rJAmQJep9Rjvp6KDYnvnrqf5WRFVY6ZLBSdxwzJPyz",
  "key16": "gGCWkgvYdwhhTxZZnBa3JQqAGsYKFsUVBHiAXQF2LdrLjTH9eKPW2imjw18MG5XgcxEYE2PEkMr1CM7LwYR5Anb",
  "key17": "2rLWyWq2qynyGB3SvAgsTB823V153Fq8oCJCcWjmJfnwyPNNErRgPxgK584MGKAWxQCLGNexDQiWB3i17EFjj1eu",
  "key18": "4H2Zr2A96tTofh5V9FzRTaNQxgm7S6wLmbPqo83rRmFfvbyy9tnUhFe9Pvm7r5QkjduzJJWu43yW971YpX9SP1Lm",
  "key19": "2tdMRHzJai4im4yYtqFVCfRW6W2ZMhz9kjDQSiQDXvALWcGRDpdZcETm7ZNrJ8nTxij3sNnZ5QoPazrAAGpTb3hU",
  "key20": "59U2FB1b1BDcWf16Qpr1UhecoVDdX7acdSLYVw5YatR4SL9o1U86R6bYGPvp146Dtf9jiPxatF9y65ZJYo5afCpb",
  "key21": "526xjtuNDjNyFh3KZcJNW2Z3xfDNpLgygyVtVxNBB96NzXZCzt2Zr93cv5iaFn1c7mML6W8ShjXRDwdPbF64KRvm",
  "key22": "5MDaJZjv4SE3jzZt6LJTee6Muq9LnwmGFNWN9QgX7xZeASFEjwxKLqk3UYqqbSiGhF8W256cE3nUgmTTDcGmm31Q",
  "key23": "56CuF6DBf55QpM1o2bXBQDvPvKjRVb5NBFLmyK4RbHsNzecJcHti7PuLiDMxEkfyiQy5Kn1kXiTaHEwgC6yDufmw",
  "key24": "2RzNMRQD2nPeDDWCfLKPpzXdvnxaFTDrZZUNZhH9tFoeXZpMG27VnSzX93EkgH6x272EwWKuWQfuZfkk9ieuS4W1",
  "key25": "4TAYc3vXXLC5DVCURkxS6Htid4thPwbF5vKsHmV664QFQadJyGvDPCrRWYFixR1nDkTDATCXiGQHMHfbzKxW5cDw",
  "key26": "4UkWAppcRPrxR7Pgxasmsd5Fz1fb5PurdUR9xXc2cHHdV87SYb2zdMCFzucGhATwbn3FzYpQA39zL5qJtR9SfrsP",
  "key27": "21VxZwQpxasmBUsJqVdSMLbummx1UzEVreT2c7tniW4FhcQKwNjTNkCXqPV8g7gWD8qv5k73MqB6DehN9dB1pWaV",
  "key28": "nMobZA4A7v7RJ5M3UJ8kbjz5W1LzosskBj7JGraj8jaNGnvBGymgv4jnYQ4uduQRrkzBWfQ2FaaTr9mtaMbTvdp",
  "key29": "4GPWEup2xRDxnsnfjEb9FZzc96WLUqrnShAzdfYxsbdmTpQVSuje5xJ1AN81u1EVCHJ5v5XPynQQijGcoTTLSKJx",
  "key30": "5y7V61K4k7PHkb2VAcQsvdo7uMHyFvV8VnMzPWrWCmz89Z4ueR34U9HXSNErKYB87q7iKJWuY6iaW5fM5HYSdSdV",
  "key31": "2ZPcy3jArNLkeM7icz7745ns22btfSBCUTZSZJ3t4PeX3WQLnib1QMAW7KYZp64eU1MS5B3fYD57GW8Mgw6UdjS5",
  "key32": "5xn5ucBS3AgMktWhrKsE9JsCJJ1MkC92FKpodehR8sa6GUkJcK7JEaZ9Ms3m9YHfx7UE5iWcKwuUMnV8muwQYJoP",
  "key33": "3cQARTrkHgbqyPKNbMkJdh7bSpB4wKWT4oWZnTpsEt581pj9KzqAwP8ze4CbKRV2kUsfFz1QBjAg85A6s6SUSnEM",
  "key34": "3opVHq1gow27bXe5WXJjtsJCwfbJWq2GwSoKQYM47BqTx9hCbTxZ79ce7BHcTNEhoPT1ESe39bQnVe5oqtShfoi1",
  "key35": "3Ymg95ifnTKUB6mHLJ7S7XtdsPJLTyFk3mxGtBSMbqeN2xBXC1Ubz9cqpx6ppeXYecNdt7mPJnp8jozFPLtEFa4X",
  "key36": "4rVrvD8R4MrnMtrkrkPFiShUVvggY5FZk6b79Lkh3o7BfRMhBE43DkWFpbSsqv5Co5ijJUxL4gzkxdLAZzB2KcWF",
  "key37": "2JtCye3LhAjomy6TrF1SD6LezMXtC46oYVFE9m1FPczkrbLKavzLDNeZi4pPNLvA91kaVriL1hub9qqD8zURDq7R",
  "key38": "3ofyzevTPZZoXdCQyU5VhpygvqnMdbf8Teyzyb9hS18Bc2HENN9aYschVEk7c7e7P2JQVjVrmzHRGSWWDvSf1aEa",
  "key39": "5ZjCUcUhX46fJLE1t98fBp7qUp3cbPWyijxvzAP4Tv1SPnR9hbmeJsBKWNpjZt8DxwQeAqCy7AP539KjTq1GeCkv",
  "key40": "4s8Lr9F67UWuRDBA8K5AYkZ5GCBUDFotA9dUyHFannkFcngdnHCWn7qsvwTrSJANucFfSnsGCmqaLfcdP6meR5hJ",
  "key41": "2f1gFEvs8rjeLtLhC5Fhynr6jaGcToMUh1gwrhUFQNhCiLMzC2SEKKXMWJCA3FxbfzstGD4xtNmvHS3WHN1nGBUk",
  "key42": "4WuNivjFuttE6kofAcDyeMyUghJ1Q1Q5ixZtRRBMYxYMvQ5geAwDkfUCWUY76H8Gmkc7yFHmS7YCgVVuVj887xip",
  "key43": "5nU8d2xgjTs2v27vtuphEJ4Wmzaazj5EcsUSvW4GpJ6NnfLHhVCF4JftBXhArG9PGTS2Bq3GQFg9ccoj43QkVXYh",
  "key44": "MKdN2rcDVzgXXWhziyRFVL6MPThi1CsL1EGTnaPxQsb4jaJnwESMvLgkpfDwTnZNCW2xFH7J7mRHdExHNT153Hw",
  "key45": "66xaMjNuHsbTz2CgUjCrrAhMSKQZLFnKXCBJ8cR4WzzTeu42KDo8799jtfKdKDod32hfLRrQidkqzdaAXrz6QCAN",
  "key46": "5UwSB18isSqgb6F3UFFNpAX38aJwLT1CnX2FGbZX5rqkQnRiAqfd7ayH1s2EB2fDjfc1VhHA5gEEymidYdc3sktB",
  "key47": "oYbattLiGhDpVVKpskcLPNhC2oxg8CDEyuFkNYpEhDhz87ooFanPgjYJUti2wdZ3zmkun7P3cxsgQm5m8ksZf86"
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
