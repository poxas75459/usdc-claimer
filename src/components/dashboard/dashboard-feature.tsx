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
    "3cgBhNj7HaU9iDpXyYyWHR7JDqho1kJqrgtzgsN323thSrxr3Xt9syrqjYzx9XtKTdx4u6UrXcuPDFWdcxNpkUEA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2drJX5Keey4rUs7n4bwmv9FqSsTMytLCAdqh5p4QofUYwGdDuQirTS3e9yrBKQNaLdNdLyfi4t8q14AgC6Z3uq8K",
  "key1": "4jUtxB57tJ5Ht78xznQRE4TAjd18gSe6kJWx4kuik2RecZwAaUvGbHo8PWvcz5FfVHa3nT6SjD9Mxc5JTLH6GC1",
  "key2": "5z1Fc9vtytxE9ZZohZXH3ZXUiv5DsHmUW7neXGVjLt5HBFrq9wePD9hXi1V8tqcwPxy1Xo2XQARnevJXJ4193HRS",
  "key3": "35SD37uqyCnJqqMGWHPmx4mvCML4jmxZS2ipCwAtouhgFGaJV5N3GMcwb35qyiNxu8c5LiG7HDwr9rqwvpFUgHwp",
  "key4": "4yXxbXEvEFBteCJis844SkPyTeUjJZ1z7SNSHhs9cN252qx8RVxca5Fh9KG5RLHwP5XF53uhj89bsYeiNfuuheDa",
  "key5": "3CY8JahPXa43ZFUDP7v7crQy7SVmiYmC8UoKcTyf2QvLeWnpW4w9DCPFxTQdDdxFJd8H7vvuosB9NJcv7DLbuvwS",
  "key6": "w68ch9TX6wYikdqtBpRTM4K7zFRaLrrVPTF3PtxBYaZpQ6N3c6FkVtRDTVwxm6qhUkAjRgWPbWPFgYMCQq3Nnfv",
  "key7": "5K8t4Y78h4JbSRyDyacXpEh6FimDWqfTBy5sG3qrkUHixcMw6CPJReZSP9fNGEc6nFDx1jd3PnLooqmrL5Vwg4P9",
  "key8": "5pcYDP4kZrqU48VrXjhphx9eRuGC7N4P2UHqJy7YpVXBjFzQRQtY4VnDyQfzS6rJtgB579Re9oiE8cBAhMJctEfL",
  "key9": "3PP58nztDm6QaeHWWmjscca3ACRig2tVQEVJwnZr18rcjaaWYisFef4eKzmDf2BrXds55o9n5jqFtDeq1MqKQ2KX",
  "key10": "4CAVGMMQoBeyoh6JAUj8yRCX21BSMhhLFCYsesJncQiZUD35GTGcu1dJrtwFU6fdBHMyf9wi3qUBGMZBWk9T1Ssq",
  "key11": "5NwSeTCK64VRfuxcj3X8SfsA8sYgUUVP3vhxKxifjj8QR6iazJvkzTecbuymfKfkbMrkHvFRVqkWTmk5EDXucgfa",
  "key12": "3RgrHUxo9ZwGf4eQxnPma2bvB9uoYkHk63JFgf6sSvQcY6KhxhzQNVm99rkrdkFFB6hP5aHoc7Rbx9LnL8YxLUiS",
  "key13": "5M8YhHwSxtnpwPsZZviaAE6Y9HxvhDmk36nNpcc2DLcxDHmLvRqdxQrkEwvfxFQosNzKKFsP6AAiH1HH6JqKhQp3",
  "key14": "ynn1RHm3UDxw6nZTyK74hK3kwrfttSu2gPcDH8VqCoVbhHqv5G1H9r7coBnuBbpaCd8RwTymgeS5mGztAfAqkC4",
  "key15": "Z6YyuiqdLE6VM3Cp4w6DAqhH8AqWFfXUHUoeGVddxVNwnpbYgAX7aFe6uH2n6DJJdH5rhJGqq56pfzmyNaDJscF",
  "key16": "42tAJz2nf2GN7jLDzXcN6uKdJixZEjgJzaUyYQ4dUYoixXHkHic24S7DFivXAzCAzQK4Vhcdd3w6ZJop7GFbP6gV",
  "key17": "4xdUDTKYJ5AdPx261jq2VLKCAuzw3q9mC9pDkJnePGZN2teBXQktm7RGGLDtzY4PT6YvSukNxDDzg5ouYKusd4AL",
  "key18": "36iPsPCxFvTn4fivTrP7fCbiz8eMErapwXnScWWSwqbgXGn8bbod3tEK3qStJ7sijTXCCZSysSDwDXcFiGvP9Gum",
  "key19": "3Uwx8xyGff2jBDByTf93Q5h9AHJ2Eab8gujV1wkRBQzCZudKoBCwgcZv3HymwzJWrCwuEM9kdHS3CopRDQmXfRxL",
  "key20": "5nxBeSmchppaSWzBp5peeTWMeCrGwMXoixGUKQ3JZ8tQTri3Knjep1pjpzCRBUeMotS9o5TeXy7LEK8xGA3Hxnjh",
  "key21": "526jZbdUN2Yc8LqpQhjXY1e9SZ4EEnGDuT6QuiFHYHm2omJYTrt835yxGGKB9B5JP8BD4UKSHQmNDFsjaK5zFXj2",
  "key22": "4CZ9g3ff2juzrUWwkFYVRKV6hDpSqZFJrvivzHtXy9iXyGyJR1RhptGfB3LcPCJjvjcXzdTsXf1i9A5gvKS1Htb8",
  "key23": "5FDFtQYLEZ44KqV8XFBkTm7QxNhPmAggz3SaovEQc4Cz9o9PCbirpN87cFd2XVCjTChCCNESLzhrgPx19Syxcv8b",
  "key24": "4f7BtNj9jz8M1tDXcMch2N1eptdxx9Rz5DFQbenYJLGSbYVS8N9F3vYC1TncJx7gfiWpp31wYouvv7jqajxJ1qFW",
  "key25": "5fgJkZdytrM2xoTvjom6XcC53VKpiHSqKrzw188s1cnNEdsp36oNqHi6cKMuVR4VFrXVAcXHwJwvdKAmMX9FBShK",
  "key26": "5Mqo9jx8bZnbbGBM3Q5D7hFqj37NVk2UzegF7Aoz5qYWMSk9k5s6XFkvKwmaJYDRnUdET1dkZzSY8pt4t78mhCia",
  "key27": "5h6f6bWNL9HtS7YuoPb9PKunM4g2W9xgjuxCMM8zPYsSVL9FWGNQwPQfFKmZ7NYuTc6v57JGu6VXmwRWMM8ntzg9",
  "key28": "3PHgDZ4GhwVZiGLvn1EPuipr9Go5fjv4PixtqM1TySqAKFq95uLiRe5p6974VjtRqxPXEayQCKYgHM5oEA7FCrCA",
  "key29": "NXbEYb5VGSREUeVWqmvmfu1UTrbraVqUaqCbCB5hJohPzoSqGVF3nYMZztKndChSkMYgBBuGch4HnHvysqAdiTu",
  "key30": "4hZiZvyNpoAwuifWvQNjcES4vETNoTxEjZPnDYLgXt3vXkkKHrWD7CbuxECRC4DwaEWaWBD6A2dSn6dnSwWdEDjy"
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
