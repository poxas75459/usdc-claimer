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
    "2HChXn515SjwBiZUi4wvRUttN1VQ1sTvxvwnBVo1NDvfjTj72qF89qHa87wdPaVvVWT46f4u6XaKGMNs6HG6TtFm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r3rsahkn5YELsnPuSkbdcQnZXXS6KdpWYyXevYZr4vE4bfxsvAP8AoHa9q1qf86G7KSJoXkPcvrE8z5pC1XoH9h",
  "key1": "5hmySHNdV7B1NntyC76DNzAz8o8XgMLzJunndcN13rYbojVKw5ZwNheHGXyr8vNwENxdiP85yhvS6XUksHiWpf5R",
  "key2": "3gio2SDNQoSCxvWzVaHvVDXVqekFmQKJZC1xSe5tUwA9Ht47R6zeJQxshKp6V7N9VyJmVW51tTQ795x74ybX2ark",
  "key3": "3uQDPgjsGwmm7omX59oE4X8QcyKzeBEr6FTYiqsG8ZtCzJHHyoz9oKBbE3WqBfTNf6u7byEHjUqQYLLJ6Nn3XtP5",
  "key4": "3bPV8eFw7kcq7o9S3NZCDj2up8DXt1Y7Z5kcdjTfnGY9LdJNpZ2RnffEbTU6ygHbwUj7tDEMH7SaZbE4qjASRyjQ",
  "key5": "zHQ1HePit2i2BDQGUbQAXg25GrWRBqefvqF7duVF5WCWZBfuffFiPQjJGGQx8UZAtHhmzTh6mHijrGYUJiJxpps",
  "key6": "56m4rnyDt3Nu3CK34623sc5k5LQVLfVXzKku5XmD8z9Kg9DUAe8CpL8nwrWwmcBae8o7NE7RwFMe3GeTuFf9F3dW",
  "key7": "5TL4DKfaYyxWufkvgTvNin5hwPzG8Bwk7dksdDTRkhdqsvaaaEnfkCMmYbXvTFG6wktrHWmX8xtMjR58qkozR86o",
  "key8": "4kGgaP8hF2zwVsSk3yQ6nEfntAJHqN7mUZPCYjr61yjHEU9zkPzsBu8GAyCR3BqA2iSWutGs3kobC8moFqng6rjs",
  "key9": "2YbkvzLhQ1RYoKR2SXLsuZNPL7jZyMBx5MxGVfyCbBfrjE92iyuohbccUJYtLeDoFXLfm2kCPNvPre5eVa6oa29s",
  "key10": "5eru6uSexL4Qun9KFZpXWFHuNeWvonj2qV9vXYusLHk7QG7hWxgVhrJoJLgKLiJUBaEzUfa9SaXAvDguxivKLESL",
  "key11": "5YLbFzhSQG5EhUVYysiKqBbSC7xGuUexogWBQqmdsVZtQYefBeVw5xCthWSos2Cd3jfMdnFpKGaPHU3rJYspXcDd",
  "key12": "3GD8RaifB6zrBw1VuV8aJnyobCQnzQEQPqgjT49xTrRe2GR7FpDCNs9dbVmQMCaP6Kh7tMXzK1Nd3pYKz8j5SmJ2",
  "key13": "c5zAzqrtycAEbEhFok691yAjgtH3QEnun9TrYTz2pLPKt427StaPPa3FRcG5mvMXVLCvGAcwbLGyN8w7wCiuRBX",
  "key14": "4siyBRzFNkp85wq76xNNbEfPkifYiBbYEdFaANerbG2bKUgnc51vdarfLXJTrYzcTv4MfTQErMTaQ7PYuzTiLEvE",
  "key15": "4zRKtT7k68dbtZE59wBpQNiwsd7pyPVE4TetFYu9Z6Rn2PVzgopwcAsVoqyKcr1drmuwGxVxLTWWjapiKYE1epcd",
  "key16": "2CMMz1JfHNsj4Nt1uV6umC3PkGAFMCCq7fmvwtNswv1FRG1vNodoRL6zWwmzS7SEAaLVU1RXsx8RNFcJB4GfXrjx",
  "key17": "3Jmp7qVPKwNBA4mNizNDzWSkzAQAs1DzPGKW29m1eqWnAuwj3of2oJqsyEq1DnJYjJUo9qUcfMs96s2fr7zb5a5t",
  "key18": "4BH1gjtVWUNHgBHrugfVhZrohP4CKhvzkxDhZPELQesWTWT4r8t2NJQcQChyuWtTyQXnRKDUHSzv5xbsr2WGeVmb",
  "key19": "79cvSy8qWYnEjE4Jviw26xVM5uUL5DWindg4Y8ruaoDwcgxS5f7hGgeTFnQgNaPnmnWP7T1oVfTm8pZ3F8PFriz",
  "key20": "5v2SJngoebt99qiPqiEdWw1AVsMPH9By8xTcGN77eieH96TH3Wn9jBmuAQKB2C654riWLDJf3XXhSBfY14zbBL9f",
  "key21": "3kgzFDwWzn95YoUKatNBXd9tAp3y6iy8BFFMfws3GKRXLedPYnU9rirRTsheAYsfymi4Jx661yC74LXRqBtraPbV",
  "key22": "64zKCaaaWBVyywdy4qTs7pV5PzFU5j2yBTiZqyp1i2M6FtjNcFSeMyZaA3MubYcwbgDoe4bd2vCz5TLXhtDuQT4r",
  "key23": "37AdyjPinLHUVYGwBz5tj5U6RV2eiz77ePvAo1tJw1U1ybjLxgFMHhAPmH5cWz351KvdUcfgF37oYxuK3HJdkgG6",
  "key24": "3X7zNeAyQMW4SX55vp4xTYhuZb4nE8SxF5V4QTwG2ejQysQ4k3gCHdZ2ASEQ8dbQq7CzWCoDvWXABCbwe4hcf522"
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
