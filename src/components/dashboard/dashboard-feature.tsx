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
    "2DgUyjDp5WvU27FMLyUprffmZJfXNfqk6j6E3RB9PrsSvJJTGBnAsYo6gv686en9VY8KADw8W5ugux59wRr5Hrdy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bSDrxfzSQJF9Pn7Zqo6g2x1LVE4U6t7sGYBHDwxGfVnoWuv82SURWRF5CpR7EA6TN3d8HS4wkikmqrhPb9QHbMb",
  "key1": "5x2p1TLyk474BWTbpuK36AjGSuo1ZMKpuKRqmTDuY3dicdxGWyg8GtRnqZTHxA8d1yWYGrdf5JvutY8orPncwsEs",
  "key2": "3ycPxnEvf4kQbnQiJa1fSwqpuxECTwixpH8BhLbTVuwdZkgPdnF2u4QCSDQVQk6KG4n5p4CY34Fa9XvDqBAUjZSp",
  "key3": "2BSTjBEQJVbqMscbHjPikTcNM5Qvbv95LoY8ncRWvGUgQ2PJdVeMmZieE7Y9xqQ58bWaqJ51L8ymdkoGCebRhUuB",
  "key4": "hKq6tQHX4So2JM2iJZU1KZ1CqezEcK5aqGPCRGbACKamrRWZUiUzRYGPUD7UBz798heQkDBQDXG8xaQ3mvmvzyB",
  "key5": "2EPAN5PyaStbtoiX2EhFLYTis7NryLEZFUHYGWfmLyKHyxhayd6xf6abeKp16fPvDdDrWSKFpukA5Pny8sgDRreC",
  "key6": "3ejNVYW8eAVZ251WKNfERg8R3XXyZvkB5hhzy5k8Cv1MKxgeTNxYLqpDNJNVYXVuwAQuHYGB5G8abCW6vBfakun5",
  "key7": "3mZMhfKxr8pzBeLqkL7AcZNRSHmFjPwteoKAbWx1obVdhjqohSPkAsUfgx84zLhZfKycmEUVFLWoxNZAzfYwDNyE",
  "key8": "fT4HA25P1pe3EuvjjLL81ggzGgDUK3hDz6MCCwiEGGwzgkH5HumNBsv85GZkaRXR4UBupWTbRB6TDk7yu2tm7Dx",
  "key9": "5huG94jKcg7F5xkHn2JRvih7ZaBDnmMDpLuQfmetUJZroWeHVyjjdJttAp6yiikGG5hMwL9W9pCKy51cUcdPn9fN",
  "key10": "2pSci3nPCmDQPB2qv27awip2g5Bx1uxhJT1F5aojTtkGDM5wF5aN6mW9YM5qUjR6iEx4MRVhJMrwWQuvWcrv4pbw",
  "key11": "WPySxpor5mrit8jMY5bd24qswYNtydjTugX4JiLY2p8YHWP2sMahwxjegpSfxvKqWmbax35BBU6zUGqtQHrxNw1",
  "key12": "2etegBRcFQmNkAY163AFeQ3BKMtgakqX6roxRpGSASNJJSWYwaAW7ZeAA3PdNJvQqQVf8HtDVFfrLHnjYtLN13yi",
  "key13": "51NaYqN2sRqopA2hsDBgvG522T8pefyfLAnubbW3fyKNQuYT9CiF4FFoPyME5zeVAkcA85cdW3euZCKBfLZVDRYj",
  "key14": "4ttm6MN7TT8AQvQWv1J7ngU6WeWGKQAiFf1RtPLA8ygfDDCRyKtCwBpPExaLSoZeYajE3Pm2ya71vX6wHT2363tH",
  "key15": "558GdWBUmJ5EmfwCd8HFNeDfT82k8VXyR833wcRutLNisYoXsvBDZ4u8PdHN57ch44xgwb4xjs7ZhKzPmd8c4GK2",
  "key16": "3kvxpoVEBfMhVur3ufN7f7gLYfyCTr7EYwH8BjjqS7jKKQmWH7juYq4Rv2pZTQv7w3CNZfo8dUuNrGso7k2ZVxoP",
  "key17": "3VEVXHFXEWZ4Yj7GhbF9W1bFwMu6jAoXi6iKD6pxXW1RvZmHLxjHRsdwZrtQazsdxjE6GahgoFD6dyATvCS1729G",
  "key18": "8vxUfsK3HN448ZtciDY8GcYeMmsuji7LaMJ4d6BZDMHkWVoXEF7EcNbYpsR7CRtySNAxVYDiCEoC8pN7U7VuXn3",
  "key19": "5V4L3ei589xCxghsG5dLykXj9sUYzGrkTd2vD9ndMffoBKEXv7yaY8F7UvApkfZYAhAsxYhxqM1SbmxQ6RB8cd7d",
  "key20": "PrnnwH9xwN3TWUqtT6DrdtQjssT34vBbxSgVL4899N85FgsLhD1DrJwapfjYqNexX6gDXZyWTjNT869S8D58JXD",
  "key21": "2qWABPy5LMqeWXqZ6AA2iEymd4h9T4syKxPxb3QUYCTgUhU21H6ijR6C621zaNprV64BLFyX7dYDzuVuCtYB6Kzp",
  "key22": "A39xfPqdaEYasc9RkJabMZX1NzqLFDzJ9vKKo1LqfFtm6NfNrJBzxuhjhx1JkPg4mmkKrmnuTJXxNMZEpFPo52w",
  "key23": "DJWohnC7TUSghgLThBNf8kxKqaJrFiWe4QZU5zshiT6B6p3yrnMSSV5EQseG3vxiUtJCeR61cXzWVtaaL44buDk",
  "key24": "3MvLbEGuXEPx1EBkaASQV9ux6kJe6DjUeWNjDGfFSM9nqQ6adpCezvmwjdP1SD255dmV1uw43AG7FzQiKHasrJaf",
  "key25": "2PDVtjyau1UPhuEiU8MBkoWt9QYkPFP7WKiKL89YEp9wtBqaaHkrmgVxygriiMDs7RUZJWQ5gyx4h9Nn68p7PakV",
  "key26": "62jQk4xb6vvgeKQZxKDh6YGZ2b5yxFy5UX2VmX1yKA1g4auJjFQgyUZVxCou9e85JvD7kTgpkteJdcHWpufRWnmA",
  "key27": "Zsu8i4q7uypPnhJmNbJb7jj2LFoUPvZWZeSpetzaGEedt7Tg9YzcRxLg1sJV3iLqxBSGcgXLLwqKb38TMWCyG6s",
  "key28": "4gURGAt3dhb4Sdw2BrKn7xu7XrNq9UWF9usUfiSz4w3xXbCWmG8nBv9hVppKkmhWaV6hes6pc13zhXTcNY8ynfP7",
  "key29": "4EqakK98t5mNr5GJ83TiBxh3i53yaAtXNJbqyzgadrdR8C4Vx2pdzWbMShonveQcSbexAa9T5Cktyg2uuuWaHpUt",
  "key30": "2hnPaLvdnetazY1on8xo7DsvvYCgXvgaJax6Xv5Dw7ntcWi3YzexCcJKiDW17rVhycrCKpE3j8zAKgtTm6C69HNt",
  "key31": "3diezdffYVvNnW48B93Yobp14Rgtxh9oGFrk3gCGMMxaPTdmF6DSQ5oQjkZyMyheVvqMRBVRZRZnyVa8LfByULac",
  "key32": "UJqrELogBzgUUzwNTUafzFZ7bT8UyMw7t1TSwuXjnLYn6d2k2dVmfJc7N2Q1J3C8D1nDzKeFAgGeynzMZ7UfHhg"
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
