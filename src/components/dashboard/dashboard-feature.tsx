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
    "5muAaMtspmYwA8Ey2zkmqEcchK9TJqM4dQ48QnY1j3Nb6cNVd3ZLpLpHRL627hPFCVsLTFW9jPwAY4ATvsyfobv7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "668zW9XceLMj6va8sxTQsGBxP4342JvYteWDKGRpVbUqEvWFmkW6Gmpv7XgfUxXQAjiEeqfKkJPtvP3TnJMVruvf",
  "key1": "4MGrGo6731orLAeLjv4ES6fP87P7zgiiqWjPW81pbtmCjWkktmcax5Zp79qX8UsqvumSKYHHg1RtAF8NrXoMud9q",
  "key2": "5aYNgZhEoQH6dWLF4MbpcPfvVxhrDN4apnqgZiertM35qkKM1ZH7GR8FHbV6dSJEYZ8UwXikSfUYP8DCzS14fdnp",
  "key3": "3TLpYizWeVsAHaFbKGcxSfDcgB3pH8KPvK4mxUTe3BbnG4ScV3joLN2gWEE3PyBacDQZjNgMYqQQHyUvAo6wcYYU",
  "key4": "2MVsa32FUe4vCX8ftxtF4zdQKWjotCQehnJccUicEukubtZu235pb4VZV5LWmnYEkC6Enh8dVPJQmibYMKyBTNVC",
  "key5": "4eWEaBnZYkFFY3q2L8x5CU52WkoJAqwW9yP6zbEzByVms5TLpy1CuPqzR9nC7sKNBwu5ud8oddxVQBrfbsBs6MT",
  "key6": "4VZsBW7hvt4qJKLXhQRzNkbvKwSGgUBDJJU6X6FMH45Q22Z6CoBTZyFeinUwNbjUKgbLgvXzjFGVAr35apfyyStQ",
  "key7": "5z2R6h3CrQXvxDvcWPa8DWZnZ112qcDv2QArskfQgqKhTsQEtkFJBdZsAzqwdjaMbgs3wYcooRkNMTCA3DZqvZBA",
  "key8": "vPLj8Z2uXMoJeX3Xm6cskjvxbpGoDtCHXe6iZ1pYVGe78EXCmHcBg4Yq9ht825ZTPaXBHVaj6DJs2TbtyjUZR3y",
  "key9": "4dvxcbTLygFq5nQjJhHf8Pu373WhBCtU48DL8TssDMzXKNpjAndc4CVjKgzV7mm96vw6a4Ko9bxpNp1TW8Uhv9NK",
  "key10": "2rBZB35CXLvXzYTUZVDDw2VSWutWwfyRQQmjEy8hY4p4obGqptadsJLtvmqHFBM1Mztj1G1ujBjzncre1AJAkyDL",
  "key11": "2hXM2GevrGBzzmZuP7TZhKmm7oZyEQyEhcuoEUC8CKa8a7o2uitYP23ZKshN3H5e9zZKxXQeMxP5ZTframs6CQz5",
  "key12": "2KV68kYPtoqY7yNAmdkaugnp6M4cdDrPHYWGQLAdELwWUatgdLAjvykubfwkQ3zUj6kniEUnfmX1ind7HYWhpmDu",
  "key13": "477gR8iv1h5zgnbP5fJEdqJb6xuteJikxyoTfsogYYXGBaXS6pjFTXjPj4mhuM7ZbpDycwLyqiETY6fDRaVUmdie",
  "key14": "4H1kvQude2a1vB5bKP8sWuPBnfeZPTfbGd2UFZHng1s111egCG3o5ULGvQPNZqf3b1DSLeB5HnwV6GKuZeW9uN1N",
  "key15": "2Yoj8TvtqVZNguNqr8ETvC38ZMi3vFzUABzMMV8vdAtSkU8kmTCc3bzBtSKEcjgCRErd2LX8UD79B5ou72H2eAgi",
  "key16": "324xmhDrpxUyTR3vvAao4fV3bTXvRs1aQYuTtC8bTSoJq1p1CBzpCqMctJzxJAtVrjdwZLWSPmk4AWA3UgrNLXqZ",
  "key17": "3RpQ8KD2FmMHTtUWpH7Ro7Fn4aKSDQzfVh1SXFcLTaxnFyb3RFcvvv6QvD8ugMmMGoT8EYajgaXmiu4JH63idBzN",
  "key18": "2wmqurpZ5wkVtgGwa6kCqwQndmduYzCwaKAz9ADmbkMDA325nQy2pxkzpXbfgVDmWXf8Y7mRX2B2y5SFRy9GUp5V",
  "key19": "58byiTewsRzD8t459nqxgAbNwVv4T6J8t8SZaxhvZAq8dRZ4Bg2N7VpjR5vx53vJC6RDD5HTgB1BiCFcUYPHGbzP",
  "key20": "3JN2ccC7hDeVh4KFNNe7yPPdEjAiPn4ukfGdgvjtegcgtyku6QrWDBZbS8rhdVajX8sVEChiavKyQZCHobYgExHZ",
  "key21": "3iyaw2vdYHffGZWmZ8xYYopFQBjZmQZtZD5whu9bnre6xTWfEkMYwh45p7VYya1yoThdTuhNjn8s7yaAxafBbXEz",
  "key22": "zzVndCxHPvMUevqbwqVM71AQJmQYNfKmS9vMqEmHtcr8PcSBsMnSJ6uRmJgoRf4KmVj6kfZJ9AJnqRFyuFaTMLi",
  "key23": "2GRAoLGEYhCtk2aXcjbunXHhASiQVKAPFSutvTiikPhwmyzXghWgNo1pkpq7ytmAk6gKx26mY6Ds6LMDPpeewWE5",
  "key24": "2fEHLygjGV6kF3CDUkThZok5k8vCbh75na2mporgdgY4f8AzLymirgpGJUTHpib3WCQPrPPhE5dfseAWpzCr4aHU",
  "key25": "HfLwTZDru7CCVkRKDyJqMf9RgbXutvQxUhdDsALzKji3HxpcgWYHb45eZK1pdemjTfAve8RF1H6uChp3oTW44Gu",
  "key26": "5y1yrCrrhPQcspNuKoYz366jT3xJfjib2gFzHs27CaNhKQDShD7H3qqtAXikrpMotkYToopvQqektxBEMh9ZnXBS",
  "key27": "22HWn48dHkwtzVJa8gHN8ZmRpnnLYwVc2jZMDwgUWxYo9XWhpuggC3DJC3EcNDRjCt7RvSqPja8zfJppoTpVWhsY",
  "key28": "5sQXHPNYyux1uvdUa5HcXw8DMSN66iWbAqQKVFJSaPi7E3dSj4eYP9nNbHpLNzfRgRADsVqaRQFmsnSqhGdJgLMz",
  "key29": "2AtQkDJSYbdXvmMuTVU5PRYjAzrzc22Az6V6B4VBe2Lk5Yd88CfwafGc343y3ZRF3z41SPD8T4LYRQhSqegc2pyL",
  "key30": "286XPnqj77Sm3eqB8HDK4rBhdZwX2SsDdoNdg4JoTBfRZaL3C5fvDrRKigXpFS7NfwHSWJaWBTTC7mR7yuZ61Yhw",
  "key31": "5N9UteLavwcQhp5tRQCEdGf1bSwyRMirUo6R1mmF5x8j6EhZdugW7HyaMfdu6ozZZ1FH9EMtRE8gnGXp8siBPoVX",
  "key32": "26JazDZWHHt3HL5p5URvMovEeQ34Fg2HG9Vu3pGYFUpas1HYRZDTMvnLVjqwXwtHcG68WhU2mWRZYrp6hppQEpQ9",
  "key33": "3AHCGD1b3bqDfW77td2iMgckxtXmfsYJgJdzJsJPXE7uuRucaVV5hB6fRK1ZURoMdpU2BuE1B3566M2YNd91gcfC",
  "key34": "5nMxNZiYTCmzgReKjqpwGw41fpbXpqZGUy5TVa9mFZTa68ELnmmmdBr2Lh2KAUqZLkzqECceDN59a1ayJnD5EZL5",
  "key35": "4fUJg7cyZ6DcHajw19EzWj9sbDtq2LVL8UZadi1yCDnUmcm3MocxDjomNSz6ZUfkmDNHphrkTuoiqPUN9DYnXsJR",
  "key36": "244ouc4pq29WtHKxTg9ERhaQKbtWaNDLHYKcNwGmuaK4QamGu3StqooiFtKa1suLjs52M2SfnoETB4k5Kh544YiK",
  "key37": "4bKZrzKuAnShQDBJHu7gM28TLabuRQU1Z4Kk1NqrzYwhHTN4f43fQyNpTwUxSreUuzQXZAhHRCRPc7KoUmzT3PW2"
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
