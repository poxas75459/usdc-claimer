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
    "42i3LyiNp3sxRVsdhFX7YfgqZgTzH3SpPuRajUAVenwbRnV1YP1iV2S8px1rfDwLUN8i3EfUYkWnjqEPZRjuigWF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E42giaquRUXrWqipJB7LJF6BV65cHAjFQukMdN98Zxd5o2mPxVxk4raJQG65KvxWD2bW9Kju5a3AhPL3uHGKMuL",
  "key1": "2p3kRaoxDqLExtSGYpDWVJbJNu2NbiHtznHu9UGtz3drpTFB8YLmovddLyHXAnV62BgR4Zph4wRq3K9CKYumsLU5",
  "key2": "4iooXexzEFcMnmXBxq3Bg2snxY3GUdU5CFN1nnS3hWuVx18UywStVyiunwDmpkCii25apU7hbSjue5rfJrqsovfH",
  "key3": "25BUpH5nE93aT5942yjXxMwcrhcCQ3TzaypxGJBGaB9xWwKc7ktEW9Fn4uixEdf1ovK9ZfjHUAu5a6mDfxk7SkMb",
  "key4": "5rAsVcDqa7EnEUwHQckQzix78fJRxFczEzD2V5t7VYpmeFrJRAHjD3oFZBkHWgshL6XNqxruvW5THmTN7Sap8WzY",
  "key5": "3XEdZsr1Pwnnh7UecaLwTDpN1Xe5fBR5VxUQhaNaEWiTnz2gFqZ7NmnLtKTLuM8RDmkmvwiwnYbQzmeXZnFPXR2d",
  "key6": "64udoMRoP5DCNZ3Twd35NpjCgRsEbHymbbdaHkbpU5TFipwtP9t3RmiZdYwb1m4y1tAp967WecdBFskDDLDP98NJ",
  "key7": "45ZUVcpcxsKb9x61yW6tAb2TBn8MHm5t8X7Vpff2KmAbwoybhFGWD4DkFxXyzCt6W7G7iypqwKfEXx5geidPMMJr",
  "key8": "3Xe6aJt8heCRTZWtwPTanTgmZiVUcZpAxTEcsYfX4qpW3hrB4TBYYyTXtmk9gUsHNaR6HS1XsdSaYJU2nFqDve1m",
  "key9": "5T9BwPtLiiHSpEpDYpWnBYdynBG5GcAysU2WED6AQqU9pYBjKU73zjVJYtej78K57YqeWUm2w1nNXd5xF7XnNyYS",
  "key10": "fdk952inb1veqjCZkcSKpSNRsR3xfeYZfXk9DdV7kgAEeoF4dHBfZXMh3HUXa3gZejray1hghgszrUAvuY2xwTi",
  "key11": "4LzGhqqQMySoampHdep5nNDzEwKJ444ZXmQH8DH3ntmoNbgRHYHtD3F89qQ8qykVVXBVa5y96XoxveS4BBqYPCza",
  "key12": "4KE1jL8J6FKpEjXW8SnqYDXvWv3bK9b851xZFpp7eGm6swTHJwyz3JPqmCEUubG9KcRuZLEN2zWMfsvcWHR1ngHp",
  "key13": "3Se46aYYXXbCeHpd8nyN2rc2uvGPujQaDsoFyNrwCMskVySzxX4EbZEiLu2W5B1HyZircWKb7SrXJb51Kq8kGgxv",
  "key14": "5MNDjW763Df9YmtNuTrsb3Ew4rzdcZtgKFa1jTHPWKGQEtHWxYug9uCWfLmgRK4auLzpGxJeP5j7Y7FGG2ZvcwbD",
  "key15": "3LjEPJPQoqE3FeBjwuve5gxWsmJXJBEeDHUsEzU1fe9g9tYDNxSjNhGfhFUVwcyCrGpMV4HC5xUZnrySv6C9MJXV",
  "key16": "2JfLbZKKVKsvjurFZg69eXoQRfJsqmg8PjdhpmQVDmpsLshEZrwW7k8sMt7egpFY9tBrvtVe9QqGTbwSxhNc1Xez",
  "key17": "4dannXx67m1y166AhTDk5cyZTrtTKHv4YN2CDQVpdwkvzrbUj7VYs7tTxBgjyi5dZ2F7bK3UtBP65DYzFtCxCjRz",
  "key18": "cXFh6KrmA3dbSAvCRJF57GZMhQRwAwrLkhic2yguJm71vqBowK3QXcmUX2G4XMVGT1KrdHJM2FvMjjS2dXzAoNi",
  "key19": "3WKp3Nw7WhZBxrj9Wdn8qphD1RAZZ7Svi2uCEXit3AQQqyaEZjxZv1HX4qETF5DgdPpLkWybxnegiu6yDabEem6b",
  "key20": "3h2KVnwFZjXbUegnj58cedNXs2tkg1ifXGVVxxf8BMiy6BW31oRKVLgwnqfYkRnUDLQRJ4UtqavaJJ5rxYdKP74c",
  "key21": "32jkiQxmrpxo24szJz7iYFd6PJiPoq8Jk8ftzp8p3yQyDGVkwFiZz95ZPQNTBft1ycDHjyzPixafgFPvVyFD7MYy",
  "key22": "3XtRAF7bYTwuGCcxTz2XjxTK1CVRrew5Zh6zpQ6SYAh7ouC1N3CebsXeC4TLnpppZnHGfGrMWcwVx4UBVHjkE59Y",
  "key23": "638k7tEKcCgttasmYcSkbnUaiY4FMZMExiSfE18Wmh4yhbg4JgD49XWiW1fwinVvKTV6E7WPUTE9Ye869mpjHg65",
  "key24": "8gvPy3vzrgBAV28D9fnvKuXwF1Yn6BtnqT8LmvhgsWYt5W9EVkqgVJjyNvVWKVoiNVgT86mTgTdEowkmRt76rJt",
  "key25": "2RATfEy6jniKJRQf66EUWVhxCSowZnpFPZGpwthmqyHKLuhzfZsFDB54bLPPGG3yy8iqYvi3Ayy4ChMWBj1KXT9T",
  "key26": "5EEuc2PXdDDFmfYnvVox5M5CVP9SJ3xak71aJSHk3fhRwK4opV6Y3gkQbgWGZgXNDtCjnKGd4q7wmAcYEwjwXeEQ",
  "key27": "5ge96QFGDQVBYxtPV4zKxcw9sWMdvDTZdG6bbo8ShDHdTVPM8gphzkEJeR2Bay3KFEfyfV92LsyfYHiTY6hR8zgr",
  "key28": "o71GJiGJEUSQF9o21vmvnvSHJX3TjEVb8S8XqJPTJPM3C7ZcEPSvt37yfUevW1wmpt5qEieix8YVd9E3m6TQZHn",
  "key29": "28qmTkvrsL3sZDNZmbRC74ebgoAWubFjW6NyJFxqM92b6pcnREuExaXHSN7VruxovV3QmWEzaZYEEbCyEq92E4Xm",
  "key30": "4QhqkBKYEZag6g3uDWH4fPwVAHiw4koPWVTaa6PJuzsApVBFAP8DvWCjSTparpLn7jHRdmxKuoGQRW9piCYjrRAb"
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
