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
    "m2YX8QhEZ5QnxRnjNGvQ7nRvH5j5jZchJMkioKawBfpscEG4nJDqG1xEz3LjddNGvtUBAioaNhVYC67U4N6uRtj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RfEtP1F7SxvWGwrGf3M53RFjwJHkiWw2d7jPTg6d37Dx4aFq4AhC5MjusJjwbUyf73FBmcJqtaMoST4sgZsWrFb",
  "key1": "52jfCjTeRHXW7G3hF2aenkLiM69SdgBA5DNY41xbxrVLZUw5G2vHSEo4RZFdCvyyJcog9XmkFX6x8UiABqwEnR7L",
  "key2": "2f5VswDPQhWQ35wp8Ub61TJY8ottQKDTxPtH3HYtVpMXL6CHGFQH2hRvkSd9grMfCVJhMoE9s4fVkju31V45wf2m",
  "key3": "fo7aC1RFDnfAawiRbHc7D95iCnM5DBhh74yfAXf32vwc3Vx925BX6UkYbtBAYiQfRVLWMHLye2PVxFMEG9YBom3",
  "key4": "5pz5agZ31mVtEuNdL37pBJziZWo91D7YfpRs56ZNrG3hL3GY7SiJFWNXRePtTRw3zQeb4M4gunzKxvHNcaFEFNFF",
  "key5": "4BCnCPHC1LFb76R2Gzfio9LqjYsqKYyDe3neLxLHw29Gr2Qty9zLHy5gETqrDb9vRR2LnFdCEwGUgSRvZMpnZKMj",
  "key6": "3ueUopHHKwJqF6kAfFEFtpGcCyw6NFGufYi6L5ELXwm7ooX8xiJkFQLstnsfokCFf9feUGgsNLG7KsJyCSnMhJqM",
  "key7": "KjdkunhJj5ZMJTE5zwbU2U17B2dUQw5vh58iAnpEtMRwmXdjcr1XRWQ253x1gYQXQrSAnsr5gnvHjs6FqQdAPDv",
  "key8": "wVncDqn5arbH3FuWrMhGqphrD8aicZNympNXdpTrJCar1jFhLLFbJsgtd4mxFZvGL1K5HPTEo3ZMMMnBujp1ekm",
  "key9": "53YVGfwqVxushuRfw5iB5q6LdyQbpUt8WdDFL9JUuoT3PunzVenuCVSrwpbUTzSJ1s91fRyaSEWLuyeBGyiQERno",
  "key10": "xxtpqbEVNda2KXsQAVAyqgQrTX23RyCtu4NEi4Q5gNYnvANJKop6tV6oZ47RZTebqeqffbUWPyNF67PT6xzPnxo",
  "key11": "jRHBJqn9fTYqdnznXrwy5Kfpr2X64AhpsxxYUzdDWXF3UP5okUwe3kye3bJTrSbC2FvrE2Cp5mffQQFpKNG92bd",
  "key12": "5DVkBugbN1ADyVJk8541gTk7FJ7f8J25Bi1YMwfQb5chhbPcGatu3gg6VrTp1Y5QGvEG3syQiYZUn9XFwjWfH1cD",
  "key13": "5bHh4tYV4RaLKG3F3dQ6MQBEmDBXhHf2evfqGTEaud7jthz1T86pa1wSwEBppAhAQcYpQRA9sGvBB6oZbynmz96v",
  "key14": "35bZg5RErG2CuZvc1A5SAotJna24v3si89Wf4hGVfkppTmmUj4SRhaA3Szaf4dthSNPzh835rnZzCgck34s4FUVV",
  "key15": "5rBfCC8QyCeizZK8tyzNUBphJce9sc5HBxJzLv7utzdT9C9LniDVnaQwMAAtHnoxLNhUZn2W9hQ3fW29Uh8fZCaL",
  "key16": "55myuL87tMRfZn4R3dhCK9ERQEgz2gWs6MP3XSEpSp7ceyjeP6z9bKzYfDx4tm2yGEvE5b61v7fqxF7QTSufBa4R",
  "key17": "3UunY1o3TpiPy4zC6u1z8drmr22Vw1fkKTi3A7CqHeu7UxZUZDr3t6oBoHmCMXFQftjJePVyqeQHR2cd28pNvT1q",
  "key18": "5adYcvqoR3HnTejYn7JvsgbKs3GJ445eJvaa9xLmBkknUKFtBMpEAHz6PkNB85mYMh83AtrHJ7pzuPAaQckneXYw",
  "key19": "SH4JdqyqVRV5ZYdeF3T9KkcF9mrRyvAu86C16KHDi8z1BDBFuoWqXJJ8YgsQoWL5MwNCztEf485Y4LaUYqNEsyq",
  "key20": "2BMTJYeoMpYVE5xTZB685eE6vfBzvQ3tJjHRBwf3GBak9db8sXu7QQ52yUwPuH1kFaBodrR9xejoe8ZcnLNnYpUJ",
  "key21": "5pfd2coEWAyTTzALscETqNHjoKLJNiHyzpCCVwJrU8LcUs7K7HxmACEAw34R4gvvFdevv5JLYQXSj8Lr1ckt8bPY",
  "key22": "4iZwCNLBsnJjZXfmnGYHaxrM8cpopanti1REaH2XShag6suTeYm3JmX6nWPqJyXMscDYbuAv5FahenpzFaESPNRs",
  "key23": "4SQyRy7tCghhawBQos8EQCADgEid9VtTspLqZf8dJ2aN9oUU5zPGFugMVTZK9S7Ce2n14d8WEkG4hjz2BCtYwPEL",
  "key24": "45xRefaVRxzaoSaJcTPWGrmSS9RKQJRV5b3g1yVAy14E2QdM7WW2qt9PmqGdkN2gREi5sRSYmxRhRUwVyPTXKAew",
  "key25": "27hE13GoCHqCseh2cBxDwkKugFuH5RGk9vQPj3oUG7jT4MY2pG38Yyf3jyV9L8RqrkAvsmFPgvXfQhAwavNdSdMs",
  "key26": "4bhr6HxUnGgvY3XQjvn6zRJmJLGQtapH8Y4BuwsKJdkWDst4iFeaWQMY6WYeBF77ui89DixQ5ufMAQkXt6PLquU2",
  "key27": "y8XECHaMpqX61HP5F1AkKxJivVmn3nUtNywEywX94naoJfB7pKycXT8PadY3Y43hYawvfWk4una6RMDoBj7je2M",
  "key28": "5irctDWLmsZsX6suMvkn2qDgjap5Y7PkqJEiC5ZjvnitFbUnrKxiSMqBT8nkMMC4hSKaW9cDW746AmBv4opm257m",
  "key29": "2yhvgjcfMf7nvQMhW2gKxQK9Lg4eCzpY7TjgPY7HJVVyAyLrNBUiDo9w3ptCMbsP3Q2b8ZQWzpn1E4Dq2tdq4FGq"
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
