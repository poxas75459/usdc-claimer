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
    "53V1WTSzxENcPtABmQsnJf49W2gDc1T9kb1huZrJbZ8dbP2jcg5fxqFnvynCVp5m1RMDYh3PZWoxjEs2MQc8rfA5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9Sqy9MHsWeDj4tDB1e25SXqtn9cbW8b5SDbZ3CzN9oDDQhXApwf75f851fa8SKqy9EWKthLZRFe7sYUjb1oHqaD",
  "key1": "2cKWrMjasjvWVctdcG4kT7DP8xyVNhYsvVts2ZcirmegKHiTMTuo7i1owoMoiiWTQvJbyquoW5EcbtuCvP1aHHPV",
  "key2": "2XCRGE4ZZqpHbmjXTamXgSTRxdzfHadNrWYb9yRQZSWYzWmbYVDar2DU7g3AAgWh3JT4uHfa8T25ucYSGMUbtLqA",
  "key3": "5y78A4GwDcuYYWLbnGxkTfe7x21TrwD91A3yxBdQ41NJBnZQTqHZMHAcCZ3fa6yd9dvxhEayd1T42iAUMrqAMKgr",
  "key4": "5Cs8hXpLjxNeLGXJuo9qA3BtnFDymbJX2d5rzKTzodpuWhXtnwVNPb67YBbwNmYkDvYqLAb7oLAnw32645X8VQSy",
  "key5": "2eVumPJ1m4pKYXQuKxS3634zTJgKMSY48ieKoa7gYkKDdfBnofR1myjR2TC167dggvfc2PCjsjk1DTUujDDBDC2j",
  "key6": "5V7r5LXEqjJPmU6bBZS2NwruqRwjaUcT5HUGw71MNZa3X8QHQqVAur57X4driRbjNPcQGyFm3LwCt4s7qsPRL4gi",
  "key7": "fLqDcovEG9KJRvxfQxr3MD2jK1NpMNanVnAs94RExtty63f9rRR65BtAGiynr7FC4KrjRGGWiNb2Qp8f81fMjcG",
  "key8": "56XtYb5pSjHj7Eny3tCjwqN1QuEkTvMtwAUhtqdqfMj49t9AYwUEoDtg5hhacPZJ4hMP46V6bGfTpXyvMxDCN8U3",
  "key9": "4KtUbRp4wi4fxNGhApuQ3jaweyZC5vXNXuBSKz2WEyjcSyAhNei6Gg8EEnVNrUR3PgeznixLm1nGNHcvsqdpQMGk",
  "key10": "4oKVcuoXtjeubHhToou6HFzKriLWaRUgq5aH8YNq7ixGQxq5tworTYfGKDtvy7pUfwZpXKvwjaBE4auGkziWX9NU",
  "key11": "37SKrQGhkfUjwmWcgLqC7bq2GC5zJeWQjTEHhbSQp48GzjhE7CVhNiRWHwqzTcNsjyta2z6TZ59bkJEDxHimPJvv",
  "key12": "5qyLtYUa6EfiX11GhyQxnrNKs7eUh9JaUqJHDvMCzJQ16JYKhVec9Dxn491cD5NbWFfGNfUsREHXBga9yCnfTFXd",
  "key13": "5s6FZ5gKdRGRZJVgQoem6JE9FU1aEEQvckt6pSXrbTTovZHyws5fK3dxnNE5bJfTcGyeT7HiQ8kC7a3wMxvfYxDb",
  "key14": "5boG7YGes6dZGw11ZU89s6MRw4HjwzFhNuRa9f9NfoDTmje2cew9EMsvJbWZkE4z4k78t5xm5WwktmTQ3jiHye2q",
  "key15": "2dFh5tGxz9uQMhU5nscur3t4kAAye1v87VwH6CThKGbCH7xwdCrjYaV7yowkucbmoKU4ub1zv24PnnABTNAmqeD1",
  "key16": "5TSxwKYXZgYbVS13gevczfna1YdLwWCQKFN1bkryXLgYafHEd9b48rtmMKwDZNxHgMwdcWH6TLaFxWGHoRNaBzCP",
  "key17": "2Zoat1v1CFKeGwsgiFfAoZxUREsEKmfhVRUP5Jwtct3bCJ2iG35UfsJdY2QRQCe3ySUmXpKpHqSFTPZaWrzjEwSc",
  "key18": "4PzibHknW4tQMLzhkftUpzv1f9FUmYNudxMQryFs2k6onj1c8JXModoBNscvVibfE8LGcQ2K1hreJVYvpsXvCAsa",
  "key19": "WymiX6Pc3GMb3f8wxJLRHNQeu9s68fkkkeCKzihgSAFNcntQDByh9b2Raf5aNe2YSRK8dqwMQgVCsLyKQbezM3G",
  "key20": "2ncxTqC53p2AkqegB5tATU9MxjE9KErVcubefvZBjrRfcCDupMPr6M2DtHSfmtjnhKFRV1EtBPpvG4VJBFwT67XY",
  "key21": "3G5CX9i3r2JWoTVXuQr17yYd4ucVuYA2hGA4WKzwTepJxQoEBE3uTCQwzTDBBDGV9Tuc1ZVJ5WNn4P5wQFs1ZSw1",
  "key22": "5TrHnH6dqr9uvZeP3UcxFVdArDh51YSuarqKVFY1DAuMngfjbHzTkF8quHDSeohXkUA3dAJKMz5eEmM2fHMijm6S",
  "key23": "3JLAkyTYsLQFFBbcSqAGSVaXdN8XGH3XkRAQCMLAf3JuopU121xamJQnzi8TyEdvJ7Hqrjb4MEHQNHXyMVJVDjjU",
  "key24": "45fgPy4HrPdKhU6tXTUF2g4mEEhSYcNB8hHgz79s11RrD1xPrJrKkEBpBRTiK9Jins1V3ykQhCpgQXtC1qk8iybt",
  "key25": "42JYXEL743a446VGCo1zRLEKAatq4UZvsUB4f1RxTdRyTGN9XjzCMffJeNwZVBAnxFLgQHKBLrLYhNBJnW4C9Yzu",
  "key26": "2mn8wDwgeqdscW5idL2ut58qjUGs9HXV9L32XbceNURDGV3RbsQ3j5Douyttgfgh8ViGVpRsJNQm62NTAcKh6dVo",
  "key27": "33yrXfcu9n8EcrgCoRe1MK8sBYujLowEVW2LNDmezDoE28eTKtgRB7EEvJh9tDHyBufT9MyzPfynrs54kAjAwi9k",
  "key28": "3LLBiwKqzmENrXVTrfhWaeT83eiMATdUSgXMHwM6sxgYzKjAMuCweEYGcciTopSyBiEcY8VvVsAYTJ7FG3eAQNA8",
  "key29": "3BLe1i6QdQarfSg8pPJr4VQybLjr4YUzP8qhQv8rUBs4LXgpNcQMcyxMhYwaQSL499wp39yRBy2uEiTqgBKtLLib",
  "key30": "5LYBz2HuW91psvVvBboS5wuYQ2UNVEngD1JcwAhmR2oYDKAM5dacY4jir9H4kTGTHVJc62b71yVwWczyctb6Q7tU",
  "key31": "581adxoEANiwkZpNUaBZFR5z4aq9RTact4ZqD3Jt3xa8RFP8amMMtjJKGggaZyyWuXXnMhz4xQKDGnh6t2b87zty",
  "key32": "4p737doxevDTgbxCoxoZgmtyAiBM4HuUepHfzozzKSh4RLXRKZzBDb9GVoErFop2bAmsHLU9X3MFhoZFiAEFWFf4",
  "key33": "4aue23TgRF9cTRJiSroT9KYs5ziLeiBRqbAsyaRY4HdfgzZ7C2uKN6TEWN6JpbbzejUnHD9k9nhaNJwrbe7SHuTB",
  "key34": "5aTkThKjxa85A6NHCJLukRhSBgMoqApYKw6wQbmzxVA9QRb7dGzMadHSYs39tktCtWUE7HAFH7n3TB5vNWqmahia"
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
