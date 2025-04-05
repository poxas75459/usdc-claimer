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
    "4pjG6CNS6KNLS4Pjdb3Zq4Cu4B5CKQCf5PS7P4Z7A9Cr7QU71JWJVYsYuUNsLJZFUagKdsb7qqcWQGjSLFzRy4fC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wsH1Acgsg7bq26zFcbXaaqiVqW3CaU2DxajkEvX8zrWMmSfA8H5s2hfNgGaLUMzgFeVJL4ET8yt2peL4tmrrEwB",
  "key1": "2aCy5zSeYTAEXsZ6JnEZrWHc1nc8K9M335L1GpVwJqCZzSXhrgD2Uf5TWUctFJtBuyKLTGJEztp7NrJKPTXGoj3h",
  "key2": "37kX3U7RjbdW2pX1XD7v4rpDC34ED47LCF1jNUNXX5tW4FeGSGRJiZbxyabYcu4y4ciNSsGhsJWVcoskkfj7EHVj",
  "key3": "3vCTyvTSM7Zg5ZaGXVJ7zRrvPxBDmYXXL7yeQcm7joK5iav3dqfji9GXUm4eJNZgRJAQQjA9arw8CuKrQoVcasJu",
  "key4": "4UkgmsAhMPGCkThp3G2vNf1VSCAe4rx6iTHoe4kGW7t7fDHdPVBeU8na5n6oEiDQPozGfBqWGzkFtxSvMm8gVbZ3",
  "key5": "4cjUuqXeHb8r1onB17cGLQxR8W2FYnU2SwwEvZStS1ZcnJqQ1Pi4S8sLortL22p6YFaLkbTfLbs5tdWJFFpV5JRM",
  "key6": "sQnp4pAdA8dm8hgnvGF34g7dnQrhCVv8cbjeVft1zRDe2cPRr9aLcBkzeQtQ8HpWPvRKcnzBMV6Y6AExJToxPph",
  "key7": "295zX3rJTAMG7gBV6EnqLNzme1GVVJmQxi2ugXUx1jfw8yeqjdDCJSpYEjem67FFLgy48gXi5nncQASy4NpPE4Kv",
  "key8": "5cN2v3FR9VF6UcRKqYkXn2Z8MbAmPhsYXwLt3naGidEtnx48QXqHKSYVEiWhPi6bfAYHVd8g8Lqty23XETj3Kp5K",
  "key9": "Q7eZxqorzNVXApmXrLF7QSSivUSn6gUPc6X3x4oofz7aLeec1czaw5hJduMLG8CyGtK6yXSLvsAjcHmaUDZNWa9",
  "key10": "E145W58VQZsV7WZutx3iNnh6u9g7z4yUWmJge5daTAMTpiw3uVwa1eGvroHuafV7ZCFdUGD15fnsambvqkAxZfB",
  "key11": "5hjMu83PGDoDuVULoqudzNFNYdv5p4gWgCgm5erfgK8r5YmoPZSPVbrNoc9HQBNekjej3Qt2HDCDq7zhAF4nkAZK",
  "key12": "4HUz9uZNM37ZRReGcGNefE3feDaa8qbfLowtqSHjhB5wpCsYtrMg9yHZywJegCsmX4fZckdq5DCYmtCAUkWjDGWz",
  "key13": "AqCeehxmkceZGDvvy5qMnEeoKEiT5o7aofzG6WFyKAbqJioFX8vrXvqDfamPB2iwbfvWAqxR6RBZmvUYmHpSTnU",
  "key14": "3cC9aDQuwv5tVmFQUdmc5sEvUWv1fCXkquA1Do2DVLW4DAfRhwq9SzzFuSV4RvZ8YB8umfr1ajcFj9m7FzQNpHm9",
  "key15": "28ierKjHXwC3pxAn7UtNu8Jf34hoikeJCr7YHTdPJ9FHqzKv7NZMBbxLgSLQi1BtCBf2tm3ZTagu9MVuhPGzNQf6",
  "key16": "45NKHjmdguPy3gixPki6uUWBfAonQi1NxSooR9UCDYQCXhM5QL7jHYPvVfwDRhZd6W333aCqBwKsyHNtnv6JaFgo",
  "key17": "HLPHePpBZ8Ppa6uix4aoUUyQ7geXg6fFjFBGTxpq6Y4dWiqjDyVUpjmFghWrsbrxmU8czHmdsMJa7S8j9KKbV89",
  "key18": "2EKXctNZUoYQ4J839h7cXgZRNPdJYE9rVpkUMUk6UjD2M8RXU6hsu6FjDCLYUbpQ4kHocLBYKMc8ABjqU19vGQyx",
  "key19": "5puTxyjDeAXRCgSPfjZ5FqHDEYwDzsW7WkrqQeZWrkMYhru8fmosSRB1iVsXnn9vmio22QVUpP6DZijkuVyYFVnk",
  "key20": "63sANDB1sFPV2AUBB7DDjoUe5DmSKXTgsbc1e22hLGSrH7vr2PweVZZjEijc1cGiTkZ5hmziiyefrwkxNqFP9kHc",
  "key21": "5wZmmug1eWnVFgUFpLu7mWNopGLHtpnxoZpRGv6Rh5wrtXquNWDePgtcPQSf1KoLGYDWURiAKVLQWVeEfn71DqcU",
  "key22": "3pc6zq196SqqU71ZKypcWMKRvwpA9nz6CdbSPMdKdaV4DM7X3CDuFtzFrdKYeySZsApk3hFg9u8VA45UPWwGZryC",
  "key23": "21m9WtTCmDfMpTjrQUdUn649HCocfoyJ61tKtLWRVXadYHTN9iRY7m78yMkbuYeFkiRKdf6qh7w42cxj5u3XU77N",
  "key24": "3m5oMt9YBj3LK8QVYtiiXE6H5FaVqzgbNB6sVjqUCVCa56i1ErSDXr6Z1P1grMDRtJWi4zzxQw4DdCzEgnTGBJwG",
  "key25": "3ywvncpnFS9Cm53g5Y2YWCAhJwREiPJJ1xksht6trvr3L3XVaGehD4EezM5Mmf2pYcf8FeB6KNbeNNW1Zy8A5kyR",
  "key26": "4ykeJL391qa8E5Qgc77qg7TJR68dVncxdoa4AyHRKkW3PCRw5sywcidhyrEpyNy8asE2bsS39spenB47YxtcYGoK",
  "key27": "5HkfsdWNpaGMG6WUEJF3PuB3hDpxBxbq7sAA2QCY5MfTwvLrMyVMfQ9riRFR8FFXR24WXDfxD2XpBuRQZ816KfGv",
  "key28": "2njoqnF2gE6snKwr3TAnPuxdkqZSTJXZoCepsZNqKHnYfKnLXMnzPK2Wh8qdijRFDUu5zt9o1K9PmnC4TMoNS3yz",
  "key29": "RaHEhhvv3zRj14tKRrAvSziB4zWFGCSSEhTc54JEgqY2YFwEcm575baU7JwPDfviPhNRaCFaKTbDzcMYyddPGSa",
  "key30": "5WskRWNBH1AX9RgGAZ38wyUH3S9wRPzHk88LjTcra5L6LB8h9KDRMgTmzirKmSbzgQJ9hwJf1MD3ARVXpzgXbDBp",
  "key31": "4tWKETQ2ZsWhc6GBjUrhdYCYeWEXvAL5QEFTaxsQJSypZgXVP4semMTic6kwR7uohcZkS4DQ1KSsEvKVKHgrzwK7",
  "key32": "46APM3WRpkLicMEeLbZgfrk5eEiRYcKcd6uxHir4Q4U33nia6mU26dHFcE37sEERYuYuARDUNjdwctJAWhZe1poq",
  "key33": "5qrL5fuh9AfXPrZcMzZ2jYxpbSYVTMNEwPewBffKarYriZqZD5KusLq7Lv3bqR9BMYUEycFk47bEG43svvR5iYJ4",
  "key34": "54QVGCPxXGMPHkASRT7HPjqh9S9YFWpPfJRkRqXMNSW4Go3aJnHrdUnWENebTCQ3BQxF93mhzwfZBnsPUjSYjiP8",
  "key35": "sgiUKrbAi21enV2FP3vkVjFJBqXAAiEwAXq1RCzKDLqnxANoXa4tMH2uMwaDSxZdVMyuTfbyLScVJU3Sp1TfRn1",
  "key36": "3cMFo833YAYKDAHKQZtmU3Qzsm9d5YVV6PuwZL6ZeWsEnxi4fm873xUzLGdsqwD4Dy7CDVVq44PaPrjkQ7Dti5pY",
  "key37": "4hegwYgGep7EL7QaNyke9eyjay4c8yh2eJsh9S9Mzucrcxh5e5GV4qigATpUgVWxMDTXiQBN7JmUsjDtiJUnw5ZQ",
  "key38": "4Vi1A4p81sNirzwVjDiecg8SkxmC89G7G5pZ5JnPWFQyWEx83Z8cKnXh3xQddxbsXyRMaEF2MojYcEAjXvzV6JG6",
  "key39": "chxJ3fqfYo1xj1uuAWY9mRVbhuWewgcKwZcDXSfawaacmzcb3nzFLjNYj64wYm2WkFovNAessj8kpCrWBsXHE9f",
  "key40": "3MHHjCatx3J1Lppdv9ZpAyL8gSmf5HYQNLRpfAUVWvtYFkn5hrzE59hRYVAMWrXizPqUGVbiAPNQidzgNhbxEV3p",
  "key41": "2vHXMd1bmkzZkSec6FZt2DAsMTEw9Bc3djbR2n8H3U8rKynDK8FTrpB7emGVZbfFaLNarvH5SAEjmJAP8nFNkVBo",
  "key42": "nZ2RTBULmauddf7hDYJHK5UxhKd1NvGtLPoPzinLH8cPDDz7jgCEXMdDNTHAbdruDjsQVdzfbKqHznYJp5FaNST",
  "key43": "3BrsYEuzpYA9U6NtJQxFT5bkFfjdsGirmXtPW5k6eN9Sotrx6y9uhXi88bGpUUohVufutqQEWyUZUoEpBT5oQYRH",
  "key44": "2ekCcuqsHqrEk6igNQnxUnLmodKdtxhEcWgvjAubueoh7vL6QPuQpQrT7DGqsmYWrgtJa1qNjAW4FieYbP2mbSfs",
  "key45": "4W1YQ5uW5QKr952M3WwDUa4E6txXDoTd6ppLDLJspXsW2Na91Rvi5Hfne5wRcPsx1H6keP5z9UWs6rFZdLyDv38y"
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
