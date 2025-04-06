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
    "3WevNrK52u9Y9dh2BvcPNcGXL1aEoThkwVyQhjKaWUWiE7hXJxPJSK1oidnpGt6PGhLSDRiNQiCCX3WpEh54ecZ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47ky9nWg8ufX2DD1SkYPC4msPvSRApbCryHRX8ueHFGsRpyyvLsYpMU537hwke2oda6FBxK1cssaicUCmxqpw7rK",
  "key1": "ittd2fSNLoG4B7iMrLQF5ArdXWPZ8Tg9B6DsSAgr6CjCnNWpd85nk1y6VKhL7rkwhtzaEUyxbaqTXTab7up4h1Q",
  "key2": "2v8UWH6gm61fEzHitjsiKBdVVr7FKkLZT7cZPmrQTzXn6AsHRhvybDaaoU3ATnqKfbE9vzmJgiT47WbspgbJqHd3",
  "key3": "2qhfqYvJAWmQKoJ66QMzrBn8q7LrwpUKktLZna4GEFxir3SQCZm7dQq1Hd2PZLzVq8F6bu2gRa3Wo5MZh8bspTMT",
  "key4": "2BHqaXPUhbMa4HijW1MDaWH8jcfXC7dYK7yeG9Sp9nvjgf8dz3VWHi9Mi4CqMHNi35kxhVt1zrQjfwoiAaEumDLE",
  "key5": "5i3LTTTQysvPohxmFmb2sRe5jJ82AVZc3vaQyFp8M2KfR5rybeS3xVdKvK1JRyvobgNxHRmazYTc8h6neJqQ1o8B",
  "key6": "VBEt7Y9yWuKf87HTq595sQTwYsNYcHmgmUZpqfhYr7wrqD8MbiynhoqahwkDgPsMkU7mo9CN88inXArKpakUiVT",
  "key7": "3LUuBzATTgiwH6ZdGAuQojrCJBzRzXpyRKEatWfUB6emE6HkpYPxF9PB9GbUtynh31pRdxkQcg3xnpQG7qX2rykx",
  "key8": "2sow6MndrshuphiSmCaAeyStcXLH1jJGiXVGF22qY8dEcC3xRUaYf5TLAQ4Ro9gDggnkXCUYC9K92ExxN71VvSyZ",
  "key9": "3utoQY5N9Mz37xU8JmFG7d9QFnq2MLRQjDzbKCjZwUadTupxZg1nNQukV9CFMDPJpDUEqJYK7FcG81Dt2cY7DLja",
  "key10": "qwDJTPY1JhiLh65NNfnC1C5gVLeGw198cn9ymUQwaFD2ka3wii12bfWkp5BUnWs8RKsJuDzZAvs78VeWEA54N8q",
  "key11": "2y6Lzy6c8Aq4NKYYWuoFmcUfW59JaZv7Z6wBittkw4v7nV6coZk1LySyvRc6vm9JA2Tg1oXr23zfZC53cY3WqsKw",
  "key12": "6QBTE4ujWdp8y2CvZZpxSchmqsPXaxMFLAZbUzTXgtaXqT2G2T1pZ3mXRu9vcq5exAQXh21xUYMwFgdsCDHiMQm",
  "key13": "65BcKSqcxB6mHUVsVKQNp5p3qX898i83jBMNfVdXSUvAsDkY12XEs2GhQLNTuVotLf24fpyjHwBL78Go6ScS9fe",
  "key14": "27otcpnaPFxvo4JhP2cCMdohGGYR3WW4CXhn9xYJsXYbit7BCho6B9H3qFHYg42o4ovpShh9jU73yyJZr2wRq6jh",
  "key15": "4rzn1VHJut85Nx115c2AHzND5Wqnjgnt41YvrpfRGz6fcAveXKBu5mpr6e7Nr8RFCM819H8MJMecH6FR7nzzPvz1",
  "key16": "2oWrSobiYoy5Pq2U876AaQFuoEcxQU5dDii1dEnyHtzjWH77KpcgZUxLZpFvsMY6kWuJX4BQKtvrCRGHu4MGPw2M",
  "key17": "35EvPsx26J1TTuz1RqVX7o9RWszT9dDPuEYCNAEXHhufsnMmLEhg1o9u8fASQ4TS3kXi7fDp1FAKajLVwp7QrVfZ",
  "key18": "3TDPc36B5MeVTEPzuEEiYcN8ChpAeJpC1HDXNmfwBt31sdzR17d7ntqkimr6Fscki3uhzPdKUWteJiZMem3iyFZr",
  "key19": "21NQUMt8gFTa9vBqMDiMgk8K7eVMSo26Szfugz7vwtSJu3BvumG4ZXwwJi7VKtqkrw67rKVNnctmmx3izrUVz5Rs",
  "key20": "2XrPeVF4qMLKbCgJUUYeE77JaK84zampq5kvoAuAXqj978sCN7avpMRSezqe6YfWyDLsCrqHBM3aS8S1SupJ8znk",
  "key21": "4UQz7Qi9pBgadALoDFRGDCCgQ58fh2W6SP3EdsAoy653dUiazjuefqpFf1DgZ7UvkbdR8ejYNrLmpbnzTVVvTeaT",
  "key22": "4wBSXUSUEaBtjHhRz1bPWp4XoW5ovyVi6ZUmkb2t5PvWRDeA4C31RsUrpbae4d5jyxjQdqRrM9pWRJWkYvry7eW7",
  "key23": "yEcxz64BYC8hiqcXFXbMik6ShpGFoGpSUsauXfQUqyytoafXZgjjn51hkrmUizVPTiiQRKf1YYxy3XEAzSnw6qi",
  "key24": "3WWNAu74WsFK5tbQrcCuU3EF7sDb7CTb7efVhj67WJ7q2bDtc89bZUrcgmMgfbLjdsjeM7NQ7hpg6ZvtHAzfBj4x",
  "key25": "3A67TYCyryrSEJ1CkFTbFXFNEGnF3tq33c7GZebjcEd7R8e1cYVxTXnGX6Btynmt3r5abxZ5bRbHRFntPaEZqyZc",
  "key26": "XMTfmCQMKDhHAFX8GL1EHEkkKZiYi74FGq47HYSPZW6ojXnyzazoRtw53ProuhhdxcmebFGLE916zH3Kd6ggpjx",
  "key27": "2NYhDBgaZG6KFr3vbnZaGmncRynhwoecBQHhCcuBFe35dTLWqG7xjcxcvdAfFnV4y24xy8KNmSKzftNULJiX5XsZ",
  "key28": "4ZAW4DbzaHvcGWWy4MSYsacWihADRB2JcbbAwADotBxZA45jn2cWcqatTNx4vtejkcDhTJKgpy6GdpoFLAciHjAN",
  "key29": "4GFxj2Y4r3gPvHK3ZiKRWLVpbmAXsSqk1TPi8Yems1EGyn7Uqobk8m1Yrn8DxEdtZG9J9134n5CrzNqf3gW5iV49",
  "key30": "5Nd8N1Yo4SYHtJgXQM9rNRhSv9HtuxSXmfdRCFAATmTGhXKCeekMNyXDj9i2mtpsBeCqrAVz8XRKL1W99ZNsgqio"
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
