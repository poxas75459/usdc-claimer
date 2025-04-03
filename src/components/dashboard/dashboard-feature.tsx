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
    "j7HS9jK6bffrtwFf8VwptySztCmbQjT5fAZ1cjxo2UgjRqwVFzWcibfJEtqhhsvKqHgg2mgff15Vjbg6WVzTn95"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4otpuWXg4AQ5WpkN4u3ExnAHQGdEJWC5SebJK7yC3RRXeYvFhVdw6aYbPh25vD4zx4eJBB2kzYtc68LvjxDAGQXj",
  "key1": "5MpV9W6ZoSSjWzpehutqHEJ2fykGDoWy9wxUtxzWnS8it7JUgx7nRo6hYXHX1fFqAXiSWEzp71LB9Pyd8cfhLVjj",
  "key2": "woyypjBtzDKG4yz688FqCRA4gR3gFukqRJNpsRwwXEsENSVJmJQ5cq8kGp61zRU7wozz1VtQ4QYJWkDrkxwA4CL",
  "key3": "3TRP1xg4pUGDiuwcfMkmAak6UCrWzcMfAt5u3ynAZwYgFUiEmdFarrWptobiy1GwfpXbq3NYEM2h1ERd4CBVeWYW",
  "key4": "41n961Nhmuo3rYVL8xLteA1SryuErGwMCWXCzuTpKBJytTmGejJELXnX7yuvBSRkf3W5tRT3DnPhQJgSX4sLuGhu",
  "key5": "3nGZ8KSSc89dg7rxcG7A4zmNkLiqtyjfCiUTxxkVWSaLPfFic9FPY2jsAxatv9XoouNvbXoFLcFMxS21u7KUJ5K2",
  "key6": "5fU3YoaPYAvUh8HsFCvcDjaw6x71qSVYNcuJVYaFESjFce1NRTX9csTz9XXKzfymhakjmNi7aeRpKkFrVbbvdsyJ",
  "key7": "4bDJNiv9skHZjYE3ugbQTBKyGr6TDmxJFzPSZDaVTC9useP2Jf7tVBgDcmGqFq4MPk6ZEXmzqec43L4fKwjFY9Tk",
  "key8": "PfSfbcWEgEAhJdizrabzDzpAWcpBp2QaWiMpzvYU8L2CTdnGfcY8EXX9umcY62E72MRihv2SFHsWZZB4tFMTewV",
  "key9": "22zZzrpfSrrZR18yaMoyjeAoh813CYQ3b5Q8tyt8iNv7GCrcB9i7kybk6H2efQ4VgteGyQLM8ducgLjp8QrEdo2f",
  "key10": "3oSTNjb5Ywp7z4T8wc783SxFwRuzTPvgzwKhnTurp37pLFVqsdRqpDoKBbi2aWQpf939RHQcE1f47Sc6XVwnJo1i",
  "key11": "2ikbaoranfxVdRFcRprJmSJGjkD6oivtMwwaP1WJdXo1bYe8e9TFhLJ1UQzA6fAYTLoJY65DKBymD4wp38zTipCX",
  "key12": "RTyEU9TFpzspHhBKLAsLVb6SFChXzuu4P8kHgHpCgwcswJ5YaSFBh9o9p37LFUtAWUiZSAYqmEkUNfm6Cj8ujdt",
  "key13": "3r4gvYfehxk3AhBX6Ht19N7egWS1Kcjw7fygYHRxb9kLz3Xyvp5s3XfesHim7vPW7xw3mFd61dJSP8icvMsnPtu9",
  "key14": "2UmWqy5hB3U2MjJuZ2QGnEnH3kmst2b75iKo6eWZf522xnEmpwrJ9USB8oyKmG4uRxZdCKrpSy1JiSbay7pjwmgK",
  "key15": "2aJ9FGU8SJucH98jVo3FjHKVoTYdh6zdA4GyNjWJNPXdeJWxb4pk9pZ6zoK8jukuT9nBpJLVd4wHYXkpS31psWwx",
  "key16": "4vTD3vkUntQW2Rgpb2CmsjkCZ8bTbBrQ5UTBEkhhoZEn9rt2dhQU4MFDrkNsXKAd3zmm45JvEpQt3mTJxCtgjX7q",
  "key17": "5kNhcWTFbreSsvj6hXMkv2aS3nxNy2grgjtwJR7v9SM6SkWLpp4auAdRU3N1KXfhoh4X6mniaUd83cGbyxcsiB8T",
  "key18": "5HaMfRKTR7qNA3PBtLbTMZW8pcmaqRyUYKswYPB2CbPmEjFBtEEE6f6k6miQ2jEo9PNSFbVUixvNDkUFdJMPabdQ",
  "key19": "4fB4YNhbnX5NGAMf412FGg7CmwZgSRr864Du5N1uEEhxWpXy8K4yArd8uDjkVfzbR2TW8u1iBffXXHVYaEyawxas",
  "key20": "3qKHgqLXh6uWaG1q177ApyPH8hYeLDpZAd8bMXATKPMK5hacSdH5Uhx6suuHdGeZw29Seq2h8RuiErWkFqzX8XfR",
  "key21": "3mWcn9E1qQTDatUd2KQCD167cgiUcX8xqAXB7V6qQRppGEWMhMJgnu7BGzoEGc71oDNXYgyg1Q4xqcLDZwLHtLxn",
  "key22": "2Hxh3k85vZ1xqavk337fSnMCQv4B1YmZew5EgsW75EGvd71YibybMxiuyRMCbWGyj1tcDj1EFMwvLRmZaibQXvoD",
  "key23": "4JAJJWnKiS1JBkX8iF6gNU2Ae1KiG4cALXqqePvKqBZYrwyCTPAHQMsJjh5jaEb5RQSwmnYwF3xk9pWNZnc1msCD",
  "key24": "39czoF19d16FBQcmcH6FXbVa1C5QpmZhgsiFbaqFVXm2tBNMjAR5EJ5jwy4oU8dXEMUpadAHJcRGrf3bw5i57aaN",
  "key25": "B6ufiPCeHTVU5aWgCiKdfb7S2EGNAErztHz1q4ejVsQUvMbt8LPmMYvejHpfNQyZYvV2AFiguVvfjhFXDnmYvAv",
  "key26": "38NSFXzdPJ1K7dA8ErFDY9ki5Fir2WZukqrVVqiSx9TvVQb4iQyGxBmfZ7VrrYgjoPQ5NikdajSRkGL3MayRieGp",
  "key27": "3eJrdzebVTH5q3RAMrUK2GvxYw5VdZ2AZLR16XPrGWNJHtYF3ehj93ZArih4aYid5pXnbkmaPgb7jHSLNJJodnyN",
  "key28": "5cyEoNjrSjMXKoqA9hLv7uQi7MD9iawp437YxBkCTK6QCaQpTqiXN97z6x1jydETqkrspGLcUBg7yQj8AxGHpVaC",
  "key29": "46inTuJaeYrA7Sc7ym3ysE5UYwiZgtVNTzUu1qHk5DPhRLwtcQuqbZm611h3oGWBW1syuWcsxEkKANaDuae2rJWS",
  "key30": "2NgaK9m93Z6imy2VGDY58i5KAMHpECo5dU1tkihUyW34gLjBALBCwNp7Xvdevmg5erVmnrxuG2LhKNbkzpx9M9qy",
  "key31": "2o3mraFLS6Xa3bYC1GGahRQPJ3UEXuFCEavL2nNs92qitDGEgA1ctV2SSZDG8ZnzXrectCj6f6db9VXXkuKyDePA",
  "key32": "5Gn24DBxiytwfVMR2gZGj6xs53ZQn2mLcGby1RGpYYXPBjwZgFQj1ugUiWHw7rHWDmQ9RHSWCmJETAKyRQGWU8XY",
  "key33": "2S7DtyF2E9iGpmY5vrrTjdiiYKDvwWPgnJnhjhWBG7z6epPjc56X45QHeHcScNzaVwbs9UGVJwmfCNQ2TAZMa7tv",
  "key34": "4ZMfenAWgycSkgiEwqVczTicctSi3FhybsZnXgfpmvXxpC2qjK9u1EB444nczRbfwW1tW2aU4xBNZMrHVzcakcTq",
  "key35": "4r6B4ArYas9JkZ6VbHbCPVAbVV6AtDT7RiTwRpwhxchoVx2kTS1hizNpetzME6AmaBCPRvMEMpNre5iVNfUKZKPc",
  "key36": "42m2LTkDukAdAQMUGL4qrwEKeZcGKnpdBHebbMbgwbEgx2MnRVyq6u85Xk38Gx8xdWz3kiJGrkgH2kSWPn3kQnw7",
  "key37": "57Ag8MvKzA97Uo38dyibytfzqxdNYqXedYhwH3NJ3Zsb2xMgmw4L8BYoZQnxoeYhkvAdLypqBLp7BzcBexiRfubM",
  "key38": "2EEzkKfZ4SYJcAqc7CxFMzVVteQHxopX1oEbAfa7aoy2ETJVw7LGHNdHx9Zf3HrnAGUPaQmp5ybRT3EqTzrHjetn",
  "key39": "2xWMTPAFrfZX4apHG4wxuSkxAuz7iChVLAt9b1pfqRnW26xYNWE2AhoPhmEE7LbPUDwSL3rbeLAGiVjTWqWEv8KA",
  "key40": "8RkQdoWFWseiSbXPk2rKWCBRdDLjBJGsBwQjBBe99aQ3hgnXt1TvDqFjiFVPAxZN8jAYEX9WpkeMZQL1dcaxLNQ",
  "key41": "2TQEbqkNVUYnUqBMgY9BRGJBdSpwtLSAWFfcm5WKMJ9qz48pQC5SxdTTvwy7BDtDYDXuXPYi3X42tMw5kZY2UBuG",
  "key42": "3TFq5qdthxCpsLE9xoddjZv262KrfK4ymhwUGrtpJcT9qeGM2zTHV1u7jjXJfDtVedXVdvW4itVxdckG8X7B39bm",
  "key43": "4f2jQkWSbds5xJc1THaodwaoX5sq5qeoqc6RFrifGcVmJ4dYQ3iwQKXqoHa5Ht28JDit6YwL6QXMHDooYgc9KAb2"
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
