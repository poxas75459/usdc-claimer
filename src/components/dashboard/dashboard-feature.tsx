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
    "4X6t58SW3RKPnedtWXh5uKy918Yk9m2ZrdEeqY2H46jmBP14rDsyrw1oQKKHMqFCXmKNbz8spASXQnWBWdfvpKep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FCdeJuizHkhwPLz9KyNdQie5DHqjdrQgFGmRd3tbhyuLxWBmjtcfEpzJJzDy4PGtjUzXo5qjXS3dQvWCQNyxYkF",
  "key1": "58QhkFKZpdc7GZdsGHRpSHhGFkJ23ornnYJbsEE3CQ9yHA9Pwvkdj8CK8py7sB88fzZcLyeuB8gNc98kTQ287hnU",
  "key2": "5F8UXTnLinNYdqNKDd288VebnBxnm2hCZ54c1UY2Ewk53oRrPKdERGY5fkA1psk8k3MjHuM7Jkws7o8yb4re6ECX",
  "key3": "3MM5adp15FLkocLknUfHvwcqsPNiuCQSke18siTniyX559nBhUAKFWdXC1yjcjXWg2PHo2WzD4TRmsqGfdHdYKRz",
  "key4": "65zoX1BGpgvePYA9G94gPPQr2p29dUN7Vbxha1eNoWw1aAow1Z5KuxvTd2u8U4TMb4rweXRWfEiDLPDEi1KRRosv",
  "key5": "27R5YqELzJGU4VBdPNn4fozvaaC7G87ZNNSqP4tkT5NmQKfNVGM1P7LEutJfDBQFF8bhtiQ7GuwsJ4DPNwoh8HXd",
  "key6": "91MMTA3iAqQ9mYWGK5aYyYxnfgD6N4NJM41ZphuqkafgEa6iMLYQ2C8UH4TqHj7EAyC7mu8B4QrYE3QYfMn7LYC",
  "key7": "4zwfBLqAakDco5ryhRQP3UnGEBexhWLD9t4u588jFixVHwiHPWXMKFw7E5MbcQYFKCbMgn2rpsxbpnwGRzVYzdzk",
  "key8": "5bEp2nBb6joHwCuJgbRScyCMwBpMqMUrP9pnHYGs3sRCgJbxX5Jgqw5x6YeALRKBVTzJofeQD8V9Mc6L43SmizZw",
  "key9": "5GUtL2tHaQfgyQFZFnSr6rqRkRcozJde3MqXmDdC7Nxrnbco75ku5cm1Y4wFnASQAj9S4rrRqfcVag7gXRRPs2pn",
  "key10": "5xCcd5myoVebo2jpkbLjHkt6bR8G9wt5nytYYUjYxzXj3JYrjEmBpF3hX1wQJb8ZZsKxRRDtaRYS4p5SF8n6X9KT",
  "key11": "f7g8ad8ibQtH9e7YVYCsM4U54ixcM51NcrXoiu851goqMjdd8Vmt28UwstaDaBgjhTZJjkkkJechWQdnyKFYFuD",
  "key12": "3gGsBdrsYYmkaF2Ainy7scfhzuey7XMc2PUKFRtzvnmKEhwBiqEPPPsfLVg7X8xS9i1mVSkPm191GuahvZgiPmr8",
  "key13": "a9P2EJyTba9giph25yog1zbjaNKb3EHxnCshdRqAmZUmB2bMdjVp1qEpirRoSZRuWYos2eCBA5kEoLN8ftqxfwT",
  "key14": "4pJm6BHiDMwdou52Z4YjVfHthDYi3ygP4zmEZSzTa5PHt9LZj32DdTvxBanL6XjP1Xgp7aYpoS6vFV1jhsqzkftn",
  "key15": "3ECR2uGW6G6u2mxwHyqvqDYE4YALrj2gDjqNs8rTH9CZcsxFscq97yK129nnzmcUajWgDTbhuPn1qggVFXDGcRTA",
  "key16": "24zHVwtkbXP65cRyzejR8qrUTEVHeTrc3JeL9g2bT9umS5sNUZ2dQ5BCL3tqpZtea7AWULVUpEB8eJHrEGaL3hmN",
  "key17": "3GchGTSonz7TFvxdHDNUn3AqSmNkniQwMaximEv9b22YjeeaZNXxYmmY7EaWNFe2hkALTzKCeZ5pD2QeBYy8cAw9",
  "key18": "qeNyCGnZmnA4FXC5Jzi7btp2gtYY8RBBWPcESeMfBCgjRNnACMQCZfuzLBNAkyKaaFYRmyaJ8JYx1LSUxZnZY17",
  "key19": "NcgpSWTddqJmnAPDjZu3SnByTuYDvqFxeFnZcF24cQwXkdv1YbcPkmRJqgADkvwjcgEDJy6PcQ5BcVj1RofpS2X",
  "key20": "oT2N7DHQipRjbVEL6XazFfuejecBkupiNFzvnpKtJef5JkMfxAtzK58yNXoPdyFTksjwHHxAKPkvbLDGH7QEoxz",
  "key21": "5wwTAQChnFZ5EYL1Hp7dFi5JM4yWauMSvFC7Byqm6JJEBtKKerZY3Uoos3zxPpTcWof1TRur2TvXDFkhuZGZn5Vs",
  "key22": "5KCLkWTF64PF3a4cuMHTZQCtdTdYagHznCxP7LicTrW3sAEVuM6bBTM17vRLH1pEdaFV9pSzPRi8oq6XhMFqjPQ7",
  "key23": "4bX7YCAz3hg5NgjkUPCT1xxCr7UPuaA15fBSzFf6oiaM3F1oow9LWnkJM3waFnnKLGBcQeGqcvS7jyQvzfLrGmhG",
  "key24": "38KuPtCgWjxo7tTqhM1XKpZvNodQXSEYLink2vnkhb4LzAKR2RAFXhd47162gWQ4ZeBDb7ceW3XRjQZqDkVJ463a",
  "key25": "2RNX8PHhmExRTsGvnhPoAeuJJmuXG7RwnTNNMsuaSiiyw3znxbNCNakrEZvF3gKdzCZrQMVyZUHqkXz75HU4eLyj",
  "key26": "AmttQVcncgSFmSgbvsXfxPnivE9nBLhA1RioLqjPzE6gyTdzZaK6jnebUdfqucruEpbSJ3P25EEVzz3YaQ2Esja",
  "key27": "5ksN1kUkwwXt8iDoPAK739d9NYcdhNMPR5e21TswPJkwCpGkV9mv9xHuuZ8uh8NvdsowVSuv3fPk7KzT62jZYJt3",
  "key28": "3AGtrzbETqetFoL8DDvZJZRo76nPN1gYRX6JURRpRvUJJfZdJ4gy38wjuvsetL8n7zQmHtYKDXr559jkbDfTjw1V",
  "key29": "grfWkFyimjUXg6Lf88Yrp9G6ciPzqJhvmW5feTgk29iti2yj6QjBTBVa3Z8FjHEJSrAyyiMTfx85xuDbXRimGSo",
  "key30": "4yHE9u4EZiFYzpjxDDjBc4HAc7kg3vnBW68MMXb3VSzh6hmnzvaqGGgry4RVqMfm3vWWknddfqWwH7pn5X4GCqU8",
  "key31": "4p7m6GgHzyNMaUomAKQY42WUvxT7QDKhGwFaXTNSnPrbCBfuWvDoad4QHJcF2BHAfmQfZT2mNUCrCg2SJaCHFAd5",
  "key32": "xxE7bPzdHrZ9uU48snZdQrnsAfnbV87HcvXDe8azR5sa8DzXQM5n3PxuqJjVrU9TDb5Yb14ZoGyzFfaVXVWFZk9",
  "key33": "dG4xKhvV5vVUTuTrxb8aofJvvTECCG14ih6dcQrd8FMrJt1kLf1HMK3q7uYCvHUCvpXxAE5cPSEeLBS8SfSk3XC",
  "key34": "42b65PPYhqsZAeTQyMfxpYgeefBkjM6bQJURizzYsguLqcQS8a4G3c2QeZPRLuGu2XxKZ1pEbLrWQeqFpqG418fv",
  "key35": "2CUMY1ATGNFFHBTiUaQdMFQbCXCyM3HX1TPWxhuQzayhNTK3gjPvkcMZcMQbUujGRPS3PLr6q3pWB4fehJL3xb5F",
  "key36": "BF59X9bGKkVpmeDcW2WD4gbv8ygAzCQFeRRAPXLEpWa6Q4UBWRgm2R8AvZ3VBREmEPEdQwbbD3eaC3S49UWkH1y",
  "key37": "34fn9xPnFXGTSz55Ruox8tKcGfrnrmTVrX8rqm3Uk13p7oqjE7ajJ6j7i22gDWMYUHHccWtJEtKjcuVroNddzexy",
  "key38": "3sbhV4Cpc276MhZ5JVuG9heSCwkAq6m5V3rm5XSzNYzG3fxVYf9tNVcQeq55KuZNrfy7at5jfdwE93MAfE6TQuB",
  "key39": "SU2rWdLuaJuBoYf9jkgj1Z8Lp736hNidbcx4A2BxbZqtrevE2Lx7PhRCDTqVM9BhPAHK1fw4Wb6415zWXaSRrze",
  "key40": "2qD99eVB6bKKZSexoThLkQ8uLpfYsbmEaJXD6Sy49qsY7ww5QZ6LzVRKwgRPWY2arYDRyUCXWZW3Ez3g83idEHqW",
  "key41": "2VZFHepjXPEMs14sZTf6Mj9jcgDm6bc27QZrZ2aT9gAzvripL1E3w7T3P7wj7qE39qEfx65dpFBwGbfhHmmGmjHh",
  "key42": "2ehhtxpsnFHbW4wZA2gLgkD9NanEJUxgvPRWhf1Vd6H5mFdryRunFHdyoKHBJMoHEozYv4Ew1AniZZn3VN6Qvzxg",
  "key43": "3BQSxRhvcWr1h47RLCpQmT1DpfXAqpZjqdFVtB36N1Mohi2vwX7NfeijWBq82jSMhNeLnPZJRdUBLt1exBC5ATuh"
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
