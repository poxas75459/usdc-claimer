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
    "53aCHyEskX3wWeznLoNVXsypXWW4scb7ZaFdy9sZCqB3fxe9j3XnAQXkEFbYc2se2PujfNwDqo2UT2MSeAmsL8h5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ni9gfLFibPa2EUraARVcv3iXVYFLRnSy6Kjh6W7jsuSDTfRuYtvN3eRwBzz4KeHYEanaSGGNiJquWrJx5e9wmxZ",
  "key1": "Ffi3UxC9whvxoUUDSRWWnNc7wPLWJezW7R1QdEhHzg53ATc2nUUdjU2caiCnmgSoE6UVwJzEKorybMCMt6AVjX8",
  "key2": "4Avi4AXemTGCepJhEwJ85du1aGVqwfbpiZ2MDadYaNE7bgBzi6USxTQyE7qXF2MGxdUneJN5W31vzn2XRA8K7SPS",
  "key3": "MNpvx5yNsSVqFLqX7n4b7L8ZY9zYY2kYLhD87LYbqDozNtwRVpy85q84uGkqHiLj5nFYKPuMeeddfQEphyaovKf",
  "key4": "5ubLm2nHFezhuy9kUZSypQFJJQbeBtYZh2L3kTRQDVyYHw6ZckeWw1ys5edsEykhmmh9ZCXdN21NgB3fWSCJ8skc",
  "key5": "5FoC52ZVgVTx1Y4R5Bq9naQbu8FX7CZh52taTivsUvCa5Muyu3fRZrvRqLurNjUJuZPfcgUBXmgCsAhY6CqnH7Dy",
  "key6": "9ix1z1ZiaxoTeQKVmNFXox9HXAmNNE3nKXs7aUnPojbPF1cxvPjFc9pmsGmXmhAMtnXA1kQfonyKmA2RC1HLmtq",
  "key7": "3JqgVX3W8Tk9Sns4aYXXPbLJf6zkozEMu1e4yZB6wdovJZ3LHEG6MEnbAKGEUPmxBr2g9GMhv5prVnvdhZUj2RNG",
  "key8": "fy3DHnj6tpBJX6NcfJiP4sxZXo5JbEpfk5Vr5HKP2BU1v5ED58QNxwhiEEDEdE9gfWLHm9yHsqbHqNjgwfh5jJ4",
  "key9": "2takhsTHzz1Y4z1TC378ZbermwzfqyGKkQ7GhM6Yw8o5pgwBuZnJdxadh9UyUgfkoMjKZpeLwsDV48MtAbyM1Shw",
  "key10": "3mXP8Gej7mVpUVZwR1Fa3rkmXahbQdmTUaYKnhxtLekMKSxDLRD6yEpN1YJGfqi5Rnz7YmsdzNLcT5zkuqFgqaCR",
  "key11": "3sSKt7hPtEgCewUG5fVCdVusynXDiEke7j2UWqueNbY8pSXnq28kxBo6AZNaNK3nY14ds7zXe1BM7zbciafxzXp6",
  "key12": "3FArjUfD8NSZNM2mxVoCDmAKsM5TPRHfm7GJXd5SgDonMytYhAf6ZtjDYbUD56C1Nk3XSbjZaMVZut6iivJDMhy9",
  "key13": "2MySWiEQ5GqRSFvUtk7TqPDFLfwfpKzK7nkFPUwSAjY8oT9ivtSKQYKruvvmfZr4M3uoezbLZQ2kfSAZVFDHuCBr",
  "key14": "5oYm5czooDhyxDM3KGPycDVaDm5ENnZkMW1yeJTw9CC3mbtaa54Sn5nveUcLtNK42XsEQX55z7zekpgLqayWocyA",
  "key15": "4jzuxfzd4qaXbYfk9d3SDg1JnjeHkwoHsnNfXZ7hzSjHywFC3ndp1cFnzLA6DB7dKG8xYVegnCDni4ukecLFCRfS",
  "key16": "7ah7oGGL3QaZnviXww21nJXkZLa2LANoeAFB6KaVEeVT285cxE78WagWCYKWNi4t61mRWh1uEP2uSjiJvBkEmLS",
  "key17": "2W6F4KY1eESKV918Y46iZ5MNheQXvHPjcF5oVLm2ftHwPneVvvfn1VtNrdJtsQsvFwpgBQNAkg2LaKmjnujQ89c5",
  "key18": "3mp5vW7sdQZrbVFfQDz7BniMiPyUMRqqVKAekp2dahzemTjwEMhQeiN2FPLv861EKWVN6aZqRizwbiLx1iGqxXJp",
  "key19": "59nhSyhYAmGXeUbzZZreKP9rpSrzs6DsimpEATmsZc94JpRktKQUnJQqxPuPy5uzLKjmgyJsic66oYQBUtETPKP5",
  "key20": "SSYRbgXs4KYt7qMS1q8CuFs1MjycLwrw8Jdfi1n9RBtZzY1YfNvrfapMF1VtwHHPehAyedekVr9t5Zv3kXkpCtR",
  "key21": "4nnQFsxUCWiroMRZhq3ZtkYiNrJ5mJsbF4cga8qwM2gVLXftxg4Az3aFC82LQFgJfbbroL9BqFph4NuvMrEDu1jd",
  "key22": "5DSxtwAcArvzktvJyosFN9Nm6cHJ16EWtbUXHt5wzQVnddT8Mqd3J53Pij4VtE1NpqnNzx14u1QvXcUD4K5qFbbk",
  "key23": "5T8dc2aK6XGjBGZ6Sytj4EcgtQsnVVHBACMxsMBBVy8uoD7Pnf1JZf3DBuGHxT4qTWpA1bU1tGcE1QNQW6kYXL6w",
  "key24": "38MujKwdUFJ5sCs4eQfg96CWb9DCegosJXXaxtR3QnAA1QARRNDEaEsnShqTpJEstNimtrgWRGVTvoHnnipNjnVW",
  "key25": "2vMuMGtY5cxEn1gLnYugajfsusNTDejCU2tBm4dB3WEte56pYVz92NS14yz2ujfkMUvCEJfa8QHPZQngnwqhYQrY",
  "key26": "X2KZkFE2uFRMSEWSyGHxhdZt4yuMYHP71Sb5Efncoc3vMuow4vmKBNpmxUTeuCpGvaPrmsKFEuWCron4CtVmJLc",
  "key27": "5dVN3MqyEQ1qjQEBY1Eu3UG9vSFiUvRKQbi1BsymtB7ghCFP32AuwR577Um1tf6KbG6uUvRFCt6pCzwoE7geFWTK",
  "key28": "WjLJffRFxGH7m2tvtaUdEcyr94eEXQg5PxRPZaa8doR2GLQSBYxPFLYcbiR8ZyEG9srtiNFT1SAvo7Db1S3STPy",
  "key29": "2HL2GcSSAUFam5AoEQGoaJT2gipqX3qBAPxVSjGboyo6KjhAbUESnWyvso1Li8BqYzfmiCugwQrmmnPJULkHKxAT",
  "key30": "2iLJuvrTtCBB2mbBBHb3fmG3dcQTzN2dFZqQfgv7uLJK522NoD45K5gtzz1uXvxbk7FfNHPq6yrmSVAgXn7ywZr6",
  "key31": "5kD1GPmdHXWbpfymcSE8eGRkPeMSWuP8jnYyz4eThhT6EFcHMY4pgoW3pm8VzbAhEhE4VHT2BpbP3xTHrnTR7Fvh",
  "key32": "46jB37as3EoJDk1B3K8nmjYoqWWi5SNbusZQq7Zzmcj6scnmdxEx356kqfhPsZApff5xq8EqbWdHvuTr34hSoKC8",
  "key33": "3FBU6GLSfwGzB4stWvYazEna9fFDJngZFKQELkPDLKsMF8FkHE9PVWcKkN1B62VvxzYBP4c7oNUH5bgpYgCcX56w",
  "key34": "3ZFZycZuYhVREVvuDDMTbggKm8AWBxBtgo1QfSqPhk7d1jLN5z4HTKrkpNS6XxP713FxXkZBG53jCBQELxCyEEqn",
  "key35": "472g9EySaZF6LSSgCGahFgHDNj8bTj51ipWPdFTm3CbneguaJkhKSqajJksSGZDp8n7vPLfxzkhmbxzRufohsk1y"
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
