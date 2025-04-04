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
    "fAYHHwezEaaQNHH157brGmYTCw5W4dvwSAPaToctugGhmdrB4BptfcgMJgkaJhv1YtQ2sV6Pmy2pti6JUShCkeh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F8JuWqHYLgg8RF9AzdKrzjxkmPoAQvydkC45C7ZTT8PjXbcJfgiyx8Jrg1Kdo56hQDs6kFmzoSaWYJouavP48Qt",
  "key1": "3S9QCA4ezUZ4tMNYuYWnatnr4NeQrdXcJoczxtGEvsRPKmvYY5AtQHpLQUdQyiCVZKmx4Jdp9UB8MVc5XWWyaMhr",
  "key2": "YFsuF5AgkZQ4r6n82dwjDs8AHde7UZe3yUixd8URuxuLGCxSCVwsSfjwmQMnimnKzm9f1Uy4d2L9Vgb2en137cg",
  "key3": "5ghN86LpibLikqnyLzjVZDZjsce841WGPzbDZnztAm7dSHYbJtKSCCj1z6HvKGAX13qQscTZXxyHnn9yREegjqFN",
  "key4": "3ez3bgeyB5H4JWb2DE9gyGUV6VFEbakVnqFL19CuhzWEr5aAdwVjU6UgB6eYkffG5muqe6rT22gJL8uc9sc3qkmo",
  "key5": "2e245jkh8iAGAkFff39jmxUvAqfh3KUfEm3UcDj8zUWFLRMM7xjq5XEBYwLA8VL3dmdbktX2ecrjkSWwV8jXkUWo",
  "key6": "38fqN5cgsibGVLKaDiGgrGWnHkqkcBK7sKSFydy5iNgTPTRTKGcKpy81QuLJezs9A1N7j6Pujk16H9at6ez5tZxv",
  "key7": "4GtiBznxHgn4UaFSFPMZUYPfb612F2yyfmQYG4vi23XzrKgJkiFrXQD25xChMBQkJUzUzChame1Gv2F5Xr9dFmWg",
  "key8": "1ss9Re7kkceyoJaxRSb1C47m2oYrVZ8q1ND3XZ4aUZDoMWug3wTxpXyn2w1tKMi3J3ktuwaqBFDZySHMczaxULN",
  "key9": "3Eaud1qhLWXz4yQDrAVfXZRM35MjoMyuRUHTBFE9Gj1mZgwg8694n5fTRadYcBVZpWvEeqn7h5ZayidRkAfzrQkH",
  "key10": "3NPA29sWcxZSUPYqNbXmb949cWNAz76V6Q5t7QKfFFtnUuduMZgAeoEskR7SF6wU7xsqdfphNKsXgveiSa1FXNoK",
  "key11": "2yYGRFp4YaDqpeuEe7oD215DgkZcoUTpxpVnkVLvGagJuNPAW1kNQq1Qy9svRUmVEnGdv55A4DgKAqqgqtrYNhfu",
  "key12": "aYqxoqUEXnS31KnrKgJbZjTGFCoNCwnhMzY1fjZenh9NfK6MQZUj3ny5eNLms9oiDCLyfutYFLFnTd2eP5ZeKgk",
  "key13": "4wftJy2jWXwS4YS2NPVTJnnPAPXpvyN84aQNnpc9AfogCkD1FSUZ3V1dLUwKmj4tRQu5rZpkNM5c4rMag5sX4n9j",
  "key14": "25YFM4PrNKEFmyRX8JWyQsfTWiUyGeACRdRxkYpKiz8M7MzzP11T1ZgcH4UycTXKf2NQfXFd885V5CUF43Jo5yHM",
  "key15": "5zML1vJJ82zDD5npeSDpX7NZEjXktxW96TdySyHAp3VnFiVcA8QmdNUsfSfEH4qCH4apKmFHjRjExGEnwqxPEeQ1",
  "key16": "5S697eB5pAm6wk9kDzgfrqx9CUrR69PtLfzh4MnLMHcfLKafe2No1juEApQ1qdynS6tzLfhSBmx6zWaYFrWowbMR",
  "key17": "5Jy1VPjhYtSVW5FtWQe2nrfAKsf8ki5VwhDA8x4wVdwoyM6cmxRMb7msJQgD4s1GggsAAYiz7fASxASYoXprqqF4",
  "key18": "5Ar1R3HZEmM9pK8oAb6bwF9BMFFAyJ2U9r34SzUuYkEcwZ5cc5QfZMw7bL99PBshxgUFyBiMo1Uk6APXBjwZw66E",
  "key19": "3HMkrXnGzWhzHWJe9wzkZHQGisJYF2AMKSMMHKJpDdid4Qo5uWEiVaMnTpY6xV9PBmUcaqF78eYcQmB8UX7DzXfF",
  "key20": "4St1XdNx8rzSJETJ7hGgD7vT4nBkd2S2ojsnKdHxjWb6ZXpCHgnao3KHjfN7MtuPX7ZXejbGypMUuMyESQep698Y",
  "key21": "4CSz7VLUKyZsz7SzJH22vHGLSPX4A4yqSDQZedvmVz1JV9fqB6JepwBJjGrCFioaWh3GhmmGzZmYJm47MuKYEHej",
  "key22": "3FvRHu2CEqNEJaqqUQZ9rtUxKaqTFHndL3qSD6nEekvdLwpFAyJ2jiL7hT5q2Cn7qeAnn4ezsMrRFjMvRtD9BsY5",
  "key23": "4X7cCJx9Dc2tUsaUg5NNeJWdUBrtMTZqu4fRRJTJ5GxSvw2FH81dsE8MH5LE6vQs5M5h4cyTcHiqH2sep51tAVan",
  "key24": "4qTGHJxk2Ha52zQj3Layx2s8XqVUW1vHoLJt4jjnmRiJiUFSfaz2kbYDBag7sUeXm5D9K8KwHbUeDoZdakcVdYo4",
  "key25": "42JVVG9iLLZ9Pgzi1S4GcBxMu6pQbrMABmrzP16RrUhF9i6xKQtLpD3xyWdhcmPqioPwpAkS2wj67yHXhs86XLhp",
  "key26": "273bZDUgCKdCynUE49YLxSgMx8x8fehu9rgCNp5dCUvMRtaonQRevcVfbXwd4Uiuiw7KPNWcH8zrZiXXUQTtiR4u",
  "key27": "3KUDNYyvpjps2WojromTGJphxsu9E5PcBYP9KSr9bYmJorZQQA6sKGPJ4vKjZL9RCsgLTrUFshPaLT3tYgmSY3ew",
  "key28": "5wrJvD9msnETSiJ6bUjCuTMsn5yDXBHimtYUywM2tYFhsVKi1nC1dTvJ9XD9wApmGpt956QBumKCyjkXfkHbyCX9",
  "key29": "3V669JMyFAhFCP5a4M1G6FXSvuDJP76d7vKVsj3XnkNAdVEWdsFZuccZjS6ArNp8rviqv3unPdp2iHhfSnWxP1WY",
  "key30": "mZbbfzQgQtT3ZUxaamAKeUGwTzPzvTGACkgYJr1rTt6PNGNxiiLkXzy8ns7ut9xHjNHvg7Gze6qw9EpyBXDp8hc",
  "key31": "ymxhXRx3i6NEHovTJ5reS6puu3tHYrRbeGSmyegooQ2hGYxYTCButHXfZfuX2rBTZ9tY7mfRkiQPjrhTszUTGfA",
  "key32": "QJtcPzYZykgspu1QmzLQiLuHeEHiJPeP95SeY9YrTGWekcJSjUptvERi7g9qdXuBJkJqMUFMYwrspyAt13wLXBf",
  "key33": "uret6KpYYpbSNVY5hNJXHwnhQxjkKYvDvC6wGFnrDyZ6WTKDUrDeLdo7cjdVxsV47GpBzCXNMMrZALyHvYphctg",
  "key34": "2BfeiPb2BumVCWqy7MQgK4bcE7Jq95kgnxMmw2YmsYgqgaW3rUcps6ssPBVnd7oVX7NgtRGrMm7xVarnMNTtmjgP",
  "key35": "3GhD2MYcvVNFNuriB5uZqPVr38d95hocy96YajYwogNG2B9GUjpw75RaQdaY4BT4merBAMLdRWW9GhdLCcxLqPSQ",
  "key36": "5GdyW3UfPjAtajQSnJNsHq5E1MrPKYdnbuDhGWiqhFu3eHnaBfbmNNT24951CM18xnH2Qg81bNZD1cW1znG6sTvZ",
  "key37": "5hpW1R4fsXqAL52GMZJz63BJ5zX9Ngt4WmNRC3HZvp4aLYSi7WqtmqHjmAy3YzwR5mxyifqUE5aqyDEJ47rH57Xv"
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
