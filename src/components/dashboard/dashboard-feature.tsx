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
    "2qrkXJvEWixwBCW9K8ixzyYp4NL8Ra5eZDW5kGSh4p4i3JsqaxRXkkGFxWeywGRfF45dNa8ynDeNnkcTvewXwrGa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M3tPxarGtUmuMmWyLUbhKUdTsQrGU4TzmDM4VkokTkv7SUv3VuMDvqBYtuF5hScj3UvmRT7Z8gbqJmF4mf5xSwa",
  "key1": "4XvYRZ9tZWQEXpq5tjAofkZxKXzhmhYz2dfGJcaQXcxuyYsVMd7diZQnWsxgk8HgycJZSj75jA1stvxhHALfMYyY",
  "key2": "Zu6L4DaJUMvYy7dPaY2LahaNBqFpS75qRYWeQbXb7x8G6wWacYWoWLoY994F7fts14f8uSdDmS2m9p8tb4zoDDB",
  "key3": "RcYnCP4dJqVongBEtn897YKtZgSWjNRe81madaJfr1W5z5VqVg3Q5REjFBhEZu9qpVeYwyZ9sRTrwsLCjqwvE47",
  "key4": "eBDUSdp5VNd3t5U5cXVtdZBPPycFHSg3CJwwBZQAaP4QVRxk7SeA16nKwQqeeGKqNfCXefQ63Fu3MNUZAG8iHjU",
  "key5": "KQfNnu9974ccHosaywoXziudUgh129BQ8Sj9t8AxmJq81gFKE5RcmGVZHwrD88nG5uSA7HE1D7LDsuovMWRSDcR",
  "key6": "2boVYK28Q1dmi31rLKNsAQLDXC3bapWUw6paqRdGYLjCdNF88UatXm97eYRyXvaGF7WoqrWCZwSaVizKj4LctnaG",
  "key7": "3CSRu3RVGDfaAyPhs9CTxNujCcucTTwHPNg7Go7BDEhpG4uXGnWV9wmCgMA2Qs8aZo2bWsRoopcLRz9AjcZRHeph",
  "key8": "2hy33zUNpDsp94X7ZUr6ttwUUvTuk997PWg3aXAGnHhUBwqgDEo1bSfbGS74hMmaD1UTfYYiiJkoB3Yx6a6ebhe5",
  "key9": "5Xm6c83LWTSXKLdBCAnzFmfpw7JH4tUkWhr28o55TMxwGXuCwXY7WToZMSGUz8ByNCUBASYvLfpEJBN2EED59KVB",
  "key10": "2t43SxknWQZDTRfFdgx6b3zirQ51adBLrABDGXvXb6S21zansJKsfp3222KNmkhNtcdTm5ugry8mPgEZsbk8koHs",
  "key11": "Ya3HSNyHwfqirnSjKqfuBDLUyD8xj4EG3wHn8omUC3oY11m2zphT7Lo3CHVLD2XDtsrreJX884gQLHQpEMs2M6B",
  "key12": "2x6qtmGbYY9LwZTXpWChQfedzaRksnC3kDLLpRLre5SmshtPyUKGmnrYkMDCw1ZxhPuts87eepDVtRXsRzuCk2Po",
  "key13": "46QtLyUoiDXBhGN2R6KfyPb1MEENkwHN3LBiBu388FdTibJjLfFA2CwvdQJp72yuxYu7cohPAD9osL1s8YBMwQ8s",
  "key14": "4uFb63o8mtjuGC9rcdx2KDpRUUr34w7BtyNzVV1irdJ8UTSRAw7BVVooDT39mnTbeiHAL3o18RVagm2o2yb5YRVT",
  "key15": "42G8UKZRfvWxECK1WJ1oFKZi41e4WaneJYURhca87obp3kAvPuiTWsPYxjAPBWxVaLm193bLHnxqnCVsAgetce3N",
  "key16": "599p5NNo3Tc5hREeW6gySw1PKut8gbNP63BCrXezfNCtwTfexe9hrdbENQ9SdzbC1b8ou9ZQBnUz3YWPrW8RG1BC",
  "key17": "49MkmBXpFhgY7eDTYXAJ661o4yaVQL5qt1QkfPNps5WtfKjQaTrJ6yLPUyDMeQ6MDu3s1U8Mw3gSvhBJP6qXWXhc",
  "key18": "4NMZHroTekDkQN7vMy5uJMMMUPDJiWH659SrvuXFoW6ws9xYzL2Qvcgt4hqenixEvMvSGeJANg3ZuAWoBqeQe5Te",
  "key19": "3EkDNwAiBpFnjyFfMTuVjLDxELs5XPzihmujBM1G5XfNqWHGzD5LUHXa7xrZo5sMuvwGpwrG8pyaYHtqCLHqGgqT",
  "key20": "5NQavZKj2GTi19EyVdhNDm3E3benT3rSmovLpLdyPPXyDCUAkwRkccMzM1qrcVnZipx2Hx9av9yhwCKmduVB3CKb",
  "key21": "3yXCu8E5AQtDge1jybmMiSThaXTEabrwq6rhPwWXf5qtXRDXoNYRvHDuWFJHpYjZoMfwnVvPqxFiMMTz2HkZEXk",
  "key22": "3M8nNw22Cphf8Mz4zkvFFhv4uKhJ1ZULs44uQKYKZAdzn3foJnkvi2PNQbkLExS7Wo3b8VWUAHbHFQocf8cWv2wH",
  "key23": "NuU7cdQxZUEUyYcVhQsqgHs5EWWqjwe7jJw979QUrYXKW5cxoJkdX6znMbpnEobJsrNNS72Tm9ZZSZybHZ5QLSP",
  "key24": "3YhTssyi8nNzFrUG5p9gTNBPNu1YSuKhTXCcLZrjeHZmi4LGRAVBz3Wvs7DQ5KdF19ZoXEbkhq2hkiX4D62fyxer",
  "key25": "2y61MnSgsiegme2EFUwBCwJEcEq2cgji8rANakbFVcdMFVYT8NawSV3PC64XJsz8ULdhZ1MTeoEGFHZmWuGWGnDd",
  "key26": "4NsGyFXiVUTsPkeke6oTmPuk3yTLRaLbC7L1oXd59AsnosHq6DgPLbeuxrRpUfzia6YMkePFzDGhLdWQLkqYkzSK",
  "key27": "4Bq5WwmseSJTYQFFYMvSkWzDB6ssgMQoCFJHHXWuy3hP9Kqvor1CdxJHGw9kiGcNaAGt8Q76NCmLS3CcArUX2ESj",
  "key28": "5yY2iVtpyyW3HrVz5qrHHyrjZyAcp9UvkuXm66JEUWdFyE5TPRJJ5Pv2wUXegk7Xb3qbmkjShdnnUKfYnRS8ULFo",
  "key29": "RccUsAAdsMSmDpn3jiUThQn7BU3dnh2rF2b4zDLWRbZ7GPem7b8c8RQXe8Lfhm5dUJ7btEUC1swKkvnSoz4crbE",
  "key30": "3AKFRLywFnxxg53azLbWTLR5rMFeMFeDzrNfQrSGkD73b3Y75GXgv7WwwWNXhm2VQ3AuFsCtqVbyod8HPdsEakdw",
  "key31": "3pJRnwKHWuagU33aJTUmuNCypNjGgWPwkr74Me6urEq4gtMMeDcKAGVGkAJrqtjWBeQqpLUCXbbx2pE3Mdt46v7Z",
  "key32": "2ffAJJEddTVJ9vkwc2CKZqV25kD3tfF3UiJbJp4zfGZYd2FE5YLG3ZhYMe8625wPahejRpxE7rQ6dNhiDfNmrBfT",
  "key33": "22Re6TZpN5phHZgPNPe1cALYJUZpXyv5LYDp5VewMaKJAS7NVZNayrj2bdEb5Ugtg5HncRryRpjyc5P9BBt5RHGe",
  "key34": "2GybR2BVomLcNe17FfoZB9CGDMNhipbs9cBy1iGcPZDfZ6bXR88PSGz7iuRmVwygbsAqiKUZSK7XhXM1whpt7G8w",
  "key35": "3w3DfUHaCmmJc8WTtQJuoFnopK4uha3TfKBBLj42ZXcMkpLPrYLDTS1a4nwKMfNEwimtbRJtGWg7B4sQfk4QvcUh",
  "key36": "4wPRJfxTktu3M1meg3svDyFwr9PbkvaTGdZbKXhBmjrVSRrBYpTtEspgRhhbbQ2XJ9YoN5d8B2qpAB2xtA8mncFd"
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
