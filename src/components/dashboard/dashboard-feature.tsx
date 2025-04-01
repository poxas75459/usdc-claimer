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
    "65UW4Wkm5yWE9zeJoma5jYruuA8V49Pxx5PHphexvMz59Q4dg2SAoBD93KGAL1Ppbi2oBizMSx2H2SXnij8YHkeg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X8fdV1CVtMobkUKzwue5imnY44y7mC8aopZxzRwwuLtLF6Pr8yzDm936ksYQKbTLQCYr3aogZ99SELQBJS6seyH",
  "key1": "4w1tw6khrc7RVSbmBCU6fqs414dcGqkZp4ZEGQDVP5AxCGiVfEpmaH5JRDYYgYHdzxWXKPWHjJLGhCxXdMcGHgTC",
  "key2": "4nvDT4KQq5hoxWXSQgQg4d6HPxT7X2z3zedcDJNa4hxSutNxgZQUCP2waLdjUgacS4J2XYWizmGyj7grPZjPVBi9",
  "key3": "4AWzSac7RDbYbNY2jMqUDPqiVigjWbbyLHR8YJwp6zegjjxiCz2QK3USpWnNmcy5hUBA5sAa1gV9i9HHeTTN2fyc",
  "key4": "3NxELgTN5ywGqkg9R5mFd6D5EHXFT7jib2VzBXVMEM3bFTah4yrZRXDhDJqvxPuovzpGGkmLTq8PdmFenC1jNpyZ",
  "key5": "5bKxR1Hqohjwh7zMm5CDdJ3NANYm6nE3eWkLeFNt7d7aSmWd1hU58BH3NLWpk1WCmpmaU43KBtc7JtnVYS8rQ6vq",
  "key6": "5Z91ap3eTkb5qCaN9HoXfursHnyMSVS94Y5fpZEgqe5xrWCKeyPzfCLzp4gJZpH8JhdEtCtkhYrRrWaawqtQgf2P",
  "key7": "425XYpsctCMvTVuwC5FMzgGJvrPwxjkX9up7wGv5UrL9TouuoQr8k8ogf7z883NZ7ipA9TNSNyQGW7qrSFZo1WRJ",
  "key8": "55mUYAL9PT8j1VbTp9ALkq31sijaPQ2HZWawKWpVLrLrYZvj9kJTAH72jb6vZeR7ACU9iUdTUyKdRX3AaK5wiUju",
  "key9": "5SsNs8WWXMiWF5xRFmvZganeWpNEdZzHMPwHtUrTyH5PGZmAHwgtB9reR4LFGxSQj5vAzNzoYb6BGyZQgBxT8vDo",
  "key10": "23jbc9rKbhoniJ7P9zXCemAR1Mo6ndkqFN4oD8thzZ9xGQiRxM7iwryjyvNsRKH9ymdZvXRRZLCJJ13XZMMm6gZD",
  "key11": "h9U8xr9mBNi75giSUAVmJk8LDDobZ2oj1AtAwcxghfwxQdHGKM1PvfANpmQ6nUf3XhYnNxyxUwY6rYoXPqrDt98",
  "key12": "5LcqYHDx6AT5S3gBWTJTbGp5MPx9h6oPTEJFuDiE3Z7hZLUzds16wE3qYu4KnyWnxZctYC1jTQGD7E6DaHrv4h5d",
  "key13": "yX7R99DEs2ERvcM2s7BHZYbrN8wFUkudp3hfptUcyMijMouDguV1iXhwMwWNtjTftWxUDnhMrAJhinuxCrP2LJQ",
  "key14": "4cg3JsEMz6mrHCgW7RMMjoK7fJ7BvyHeDQqu78Qq5i3LKUQJj2rF78e5gj6FaafhrMNKgcrhfVXsirWodmLbV4bY",
  "key15": "44cC2MQUrWP3P8nC298ZDuZeQT6Ng3E3jiFEfSHkRTb4sVSAV7UYGBWhAsiKgFHghZWsEQ8pxKjRCmB9oXatUKtS",
  "key16": "2onQCxp7zp7DjcQ2iVGgnkT1tZGPv9CG8AbFrCuj4AoESREb35vtZNErRY54eW2CbPcnxjuXVtNm34i7eWFwCrH",
  "key17": "5yLkhZdNWPba1EjyD6UASXfnuwgXJU3jJeniaTxjMhhVXHJyqp7MqLTHa8C8RYLFQwQeACs6AnpQC8SXKg3PZmcF",
  "key18": "5U3xqpRWmMsb72eZayjGd7CbPZWu8nZi78T78toR8rD9H3ZKzakrQbX5Shfwe5txMgUwTM7r67iBpvfjbyoZRist",
  "key19": "5fTZEJ6h2zkhxVFG99YHEibUPbg5xodkxN5cZjZfMpF9i2g9DLbdE23JQDk1ZC3hNNczP5JzQXtWSwQvf6ffPm19",
  "key20": "2e4oT6ZptZZfxBpa971sRLsVj9Nje8xFiTm5Yc1G69akpfipjYkRJahksnKVzSESMwgwqe3WHwMSAk19xEDXyrxz",
  "key21": "2YB1rrLC9hWpKNp48MtqJDwfXVCfxcn5cDUS65qFtxLBtCu7Wd3Y6JthZdRU3KZvMd7hN7ybQHrqd11waMqeb7td",
  "key22": "3hnjwGkV1Ej8HNiyGJAi2ojDG39UuAM1JWRpJy7JrcKVAkgrHJFGtTVRmjokLNTKuL1QMMs9VGyqw5zBUZivmroq",
  "key23": "g9N1cQp6rNJAGrC3jKEmWqPCMhtjUoLR8Cegvm6UX56tG7krVMyNDiwEy3swrfopb8Ned6DRK38uoxTceC97JXx",
  "key24": "3RgZJJrDCvZT4yHVYuLQApUvii28HME9HZvDKeZnznwb2kHckqFbkQXYp9gGLdbxFCTk53h1LyYebVj7Qk8bv6PY",
  "key25": "P5Yr7LwFJY8Lvyrew6F9hhmXVvzBB7c7tKbibMGx2cB8e3kdZAepDTmjyPnAEBkkXgAowcZ5TfuitWg2c6B6RZ9",
  "key26": "261Mtg5aAnS75cyMf6tAFiQ3cZx9XoaWvEJp8kvzKeL9HLFgbyFVaFVzJCseEZkLrcSg5VdUWpuQt4dTkMbdRn9D",
  "key27": "miE4ZHbNW6HWHybibA3B1P7BoG5j3uuFz7d9K4gANVVbMFfAACB7cd36ALt9v7xmLEt6fBuGASSqmB7wrUk2HW6",
  "key28": "zkU6u1fYuUnHoTAo6DpYJD3KG1P2hkZdbwh7zbyeVZgt8f5QoPdNP8xeBNmQA6UaXh8vY8eUXiQhP6fNz6zuoDz"
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
