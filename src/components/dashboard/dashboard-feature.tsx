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
    "5Rf7AsdccFXLZJB48GtocNhpa5f7HqXb5tw5jm7YwuQRvDyYiQUBhhNuFFFvdv4Bmg9Pt4HettfT87EqyZVbkzRE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BacZWUvd5tXhiBVWM5kWwEu9zocFYa8Ksum9g6f6BFvR6X5phZAYikrxJYVHvhwvCZkajmKjhDHm98xz93S9a4H",
  "key1": "dv1GucF3hRMBhrbDP3VSg2ELruvJ6cadUaLnuM4qmH31tNEtoA3G5FdHhzUSx1T1oDift1RMaJ9WsQXUtqapSEY",
  "key2": "pLEdLFQWPTgWXYGZQtLsn42z1S3t3pDqfVqXYqdEEqCYu3W6GJrCVDztMvn6NXqEb5Yzyo7ULBxbxB2fF18ieD9",
  "key3": "42cXGbqdp5FN5xqfNHfazhJyyQCCkuYZ73am9WngbFAXNeWQsGLB2i1jb1GoN5wncNHt24XbNdjG8QXmz2NuxWrJ",
  "key4": "CZ4k3iNUKwhNpbVMJzwCXxResRq7uhzuvQ4RvuFz2bbe2hmZkpBi8hksPKuQRMS5vv4hJQMSA3bs65kJRxcHR9c",
  "key5": "57GZKwednTtkfRhPfG58gvqc7ANuiMV4RZHSMxHU7iPQFyeTcE9b6C7ZQSxzWe5V8SzHxByE98YMYU4BfaefSdkH",
  "key6": "5deaacyTjaifVWCZsn5BJiWuMY3WqgApqUcjMhh4SmH672MF6Get5EHDCNGarEfx6KfLbBCjAS8tnZZ47DwJS5R",
  "key7": "2rmvwGuaVd61EpRGGMqzkkCHTXkjAw69b24hGhQyP5EAcDgNqhdF6V8nKZvCojZkGmS25BpWUmavy4gnJ1TmR6H5",
  "key8": "3b5CdjZGnp2JQ437KAVSYGDc2EqeY7NyMvwcJqtbjGu4z3KW26qsgChGcDQTvA65UhJY8CQ7MKXHwW28sqwTRDEW",
  "key9": "4QTP9ASKAfxkg2pLquYVCFqLAQvBybReyHHJ8HCWFy3rdp1Vf7mbcALWnqmkU13pNJxuD1GTDaq5yVLimynvRnEw",
  "key10": "5yeTKq8vpdDXyYX2zUGagSUh2phg1JKqvL2SE8N5XA6b28jahAieHppEXASQP9hfb52D8upCgkEUJtVQUZtRU7fQ",
  "key11": "31zfTQ6RXa5YDwoUYth6arhybYvYZx1kLXh74gEamG8qz8mbgcsWj6VMSQ5UQQNt9k5MjY8edanvCKtRpJ8RuVy1",
  "key12": "3tKfSw1GnAjqmmUmfknkggrQ8GZEnNBLo8fdQo5btqzTPjQsAat92179U51dbpkPa4raLKKXwKKyWFYZ3npA9Z2G",
  "key13": "5qJddPF8YWKGLCvPcp2miMLE2yj5AhQwg4mLDqoDvDK6k7idRMfxq6MKiq4jdDDKASDSxzzrs1GKQdedM8GRZSfQ",
  "key14": "5eCKBfgU3WmUVZ1qc9NKZsqU334Mn8uJGjfHo6JFKsPGn4XuuBs6gLewPjG767KfRWMtWzNveS2JaSKzWy1GoriN",
  "key15": "55U7UWjEeSViVA9Qb1EzWjXj7E2mwf9HR4qtueEy9zCa1Qi8R4Dg1menjyqr1Avwf1z1XQT9yogtYuZA3BRzktR1",
  "key16": "4wns54QYG6rss8wdCiqYn5ybZqQSwTzt7mDjNrnSVEzkvZcdsDqCpYqwLSmVvR1QDehfFTzFvKJyh1ZZFHobFjNj",
  "key17": "4AvNpbDVDMWCecuAy6v8nGd5XtjfTuuFqmCUmqRLGNkTyHyGakXyu4J378rzjbEW46Hw3E8CwxExbpELf6E6dbRf",
  "key18": "2kmAW8PLDDWh9j5P9zoJkjRoPPV8Wsn67jsGadwUUgFGuto3o6cKmreAdUnJuimefZ9AgXMFDVR747mPD8eXwg8A",
  "key19": "2gTTTp96JbA4rNXAFE1rKaiYY6YWzQUkWkKhzAqH9rnATRADsZTDY21vkp8ktv6xgGrjVUkY1mgk3krYAwLxJ1Ye",
  "key20": "4jof381uNjsF3Y8abt2yS5F7qzoATJSLT7tr9gBDBsMbU6ToQ5B7kjmjo12c5rr5rCS216kV6yNHHumLwLD9edof",
  "key21": "2fndgjJ3VF3UDzqYaF45VXjtTZARAF2H8NnJqeE3CgcVwLk95ws85diTRNKeFgvbj1mWwto8cYhSMVzFHSWR1MSS",
  "key22": "57ZfEjg2SFp66TCccqnckD1VYH7qf6sr4wYwvDEb6LxSrZc1k1YJDdf63PMYXXVz9xJaA6RHdc98QD3tfNndVpKy",
  "key23": "5QsB89UXrC6DYQcC2bzbZsgKSZs48Ad8fG2ofxviqzE8aPqHaR5h3QRvNiB85CgV81nJkvGJK9GGszGk9xJ3zogu",
  "key24": "2fUSE8mPFhkENsSbaUPCG8hkZPqvzEp1jRicAzRc6eQcVhKvfkUNDCdDCECcnVa6kA1pqL14os4smWikf51WSNMw",
  "key25": "wnoWjCYSbgab2CHQRiADLNxXScDw1M8QmHtam7XCyChfndRm89RoCtSZV7uyPdgAeXMNjfBRgXc861skkbrgTmu",
  "key26": "5yWML84kmDT12KdGEvJZQeoTerouEfK9jnFxW8UPAb5FofcbXgk6zeFWtwTEyPpoSdR7SCjWUgMbTRHoi3f4UM62",
  "key27": "4uAQjN2EdU23duxjyjGy6H6dEVjdNMfioD1vux6XXhVfFSJt4BLdHWM2u1CovsxW1k5NkamEKoeYvwdRUMNBJnta",
  "key28": "29Ads7GdUp4qjdPySkfgPruBW8YEurk7Si1fviAfCHhtmmo7ajWUbEQ3YfjJTx6yLvpAYFe7GdrebaJb69oRkz9Q",
  "key29": "3XnoKDeRh7VxZiSRk6kkTbcoG6mGJTBXPUqXQRUpGdsQod1PsLMQnDPCbhKVFBWYrmBw6p7BSshx5JsCoeoWmfEV",
  "key30": "2F174okMmtZ5ckE1LmcYobSVThRYMYDtmLZ9uMNbmQqDjGE9v1pTsrJgA5PyCDyh9CAx364jd8f9DwLGQYnDde2E",
  "key31": "2hVrTtnmtaghWaCwAJ79DT3yuQpGtbzrX9spNkoZnJH31nAFcNfguFnNuTfo6aCUmbGfcbvUjniN25C78x7jWig7",
  "key32": "2gpUXzjf51zqhbwpLXJL8Z6H9qhkXM2DJ7cXRRFB6dM2fwipv1NfNToxFxKtfnNN8NfiqkKRZ9Xg6hW9vtVkEXWr",
  "key33": "5XPgtHh1dUvuFPgj68LrPZf4U1zZsej3SetbAPborjzEMGCbVp49Sws1HBRhhij55gH1gVCQqNCfoXTXiwokkNa3",
  "key34": "24Sort7uzSnpmwXZ4UV6snhgnkkzsf6tip8ucjFE2s7cWDNCHwjFcZV1ZMkr1gZ5FJSdWKrA2QsFh9kYXvvgxVUg",
  "key35": "5L3hYNS6MkZ7kfHhTEBJXVdbAUsAG8zRtV3XA3pPqZrAicmchNAgbzUcXeDTJXb8DnoXYxShGeGaq7cts38L992n",
  "key36": "4BKjmMeXoCxc8dk1GyfdpVm9y7ynAtEUeYw2yW3n3hATqA2sSKYP8EGNMvEp8aXmRFxTi4ThNKBrgXidKNSZF2My"
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
