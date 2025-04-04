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
    "5vgdood3z59nLJeQPao7UrFHRrosxJtiiBpJH9tLryt7Y7aMjMsFFA242SVkz5puK6oNuSnaF3XC8GeKf6KiSSvd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27KebANHtynQGmTTVw1W4nKf1b85dFp9raxZQUZPgcaCQyHWwKNtHqjdujznucYbnWbfV2Ni1mCnBPm125r4Uf1p",
  "key1": "2uexiPnvp3gW3yqYZY7RUY7d2M6BcTCB691dp5xGawd11pXkcmV7Jb4CP7Ww9vcEJcby96ytNBXb1PVw8JVC4Fro",
  "key2": "3VXaR1Y6xENTWoF5YQ3dUPXoXJwWjuQfDuVaF654YiwJ1F2vrVDTwoJUD8W6Cu3FfXF4j4vj4XCPwVGneq7ycv23",
  "key3": "2CQEx2kKndgiUuhZhf7kKGmLdB1bbJPe59wRVNCiZB1HnoJbbodaoENx9UMqmihmP46tCZWndo7gJiTPsF8DpDeS",
  "key4": "46ME9q93aYjactgYzbC69Y4jJRqCLiMGMScWPCRbMmkVfcZaysPHbtaTPVWqfsrbg1tqemDERUcjQzLEzJuW3LUL",
  "key5": "b4b6CEDR8p38dcBxXCxdRAyyeHap1Ns8iz1W5jeUC2Q9AqZNHyjrmxJUcbLCRaMj12yvzyFMQHrApdgvAFCAH93",
  "key6": "sBEFkeb7JhaHGJpwuEr4tvJYP3e9o5vJWj4CBBzY3S4awFby3DN9eE7iDrropKBMCjGM9jJe5LUS1FPFuDWnWXG",
  "key7": "3V4uUKwq4mG7bDQzVSC9hSstoQSnZLidXCoGtkuUqjH2LN73awWYXEdTj4S8Qb4rndR5XpDB9d6svgPZ5aZmeTUW",
  "key8": "3jxc7YxPgreSNd6WJi4r8ycdc3APddPJXW4mQn25NoGcQu2YPKhWoonMYJZAy66efakhnwVnxGv572GF8yKm3LUZ",
  "key9": "5KLTcCa3feRuXprhK9DexLSmjZiTGNYL8tBNiXBwX7TgMgcQL1vtER7uRZatS6WP9whauFF75jeJEPGXPfe33vab",
  "key10": "M3zZkUDBG6i9Ze5gYfiU9YrJJy3rcJYY3SHZhfGMnr3GviuWhj26ranEVkJessQD6ehppYFNc3CLzqeSB8zb3Gm",
  "key11": "2N77Z2nQAK5spT8V3oAWi27MRZpxh5u8ZVaHPXgTanKAbY8VYLddry2zBa2Qbo8RiF86D1PqzY7vWuSK5qein2pN",
  "key12": "3GCKMpehD7SvbWtjTmvDemwypPUiucBCVcGssYLPH9bVjHxpWgn8BQCJMoDufxAmuG6ABjvXEsXAgCMto4BvGR2L",
  "key13": "3byE4trqm9hh5GvMfUbkC4L4d3GzJnTGsdrVA25ZzMKAcQPXNpJLRJtiepLtA4YsKeVZfsV9QRbWgTbjRNvSuGoh",
  "key14": "gFgrmkgsHxzYo4HcN3Z7Lj5kHvvuyMkFMZQWp1eisFhfruDqLPvYpzGKpxdkYdTaXy5jw8Pkh8QDKP1GuTtPjFS",
  "key15": "5sLbwH8KMc7RAY2TxMJqt18acj3Yqn3DMjuUjB5z1si2qpbuBcZMKt5x2DoQ6AvR3ApNGsE1TuVT4mfhSYCJHYqo",
  "key16": "4SRBgJGxhERv8Cjy2ZWgY3dYhCCk9jKpccyrt2iq13XunAz6xU8PwCUAH54c2ap8qTAe9u9DZQTWaYQAHW1aoXYj",
  "key17": "4j8SCitP3QPGxU8PrncCeGSARbLeKYbcx6Z5cb2TwXmmzyMYKKaY4sgKnSvmnuvfdNYYBcR7SqhVmeQNmgP8dcmE",
  "key18": "4BjkrPfEJmcbiZBJy6EPiEaazeGXAgNnTfbtZ9wFFPX7rRgyRLtsEN2uKWE5Eo3nB5smadFy91FSHEkHwBkwD6mx",
  "key19": "66B8UpsyhNafDU6BoNX9LX5JXZ42Sovjmwj5gd6cwTb7YZZJzzN6v1L1LBrGgZq31nF5mS1ajEeR6ED9S3592Avj",
  "key20": "2BMUvFSGgXwTMxy8ML8ji85Ku2APYoostHFJWGS1J7VisPT6SNtyZMX23idrXt5gttCsaJzTbXu4mDTPCK2h8aHJ",
  "key21": "4kSWkZc9tkB9ZmjwUGd69dXAwxReuejuPf82Y6XkpG6DJhV7j2yyuntoG6AjgTTJ5WwFFqQMRVgCAJ36LBTPzLnC",
  "key22": "3pQey3R1D2oDmqGf7YPXHPke9WAjMgMeuqxs8DqdzNYoox8pjDhKvsPWiuPnLGoRoUe2eYtdaMwpgndVjRe62zL9",
  "key23": "27ebCoHfhyMQN7QgJabV6TanfdLTrirKLY57FaMszhEXxGdUfjYiFNW5c5JeiR8e9Afi7G8SAK7BTanoy5oxM6jF",
  "key24": "5ujzFmoEj6dSFD699YnoxMBeSRLzqVoVAkPvKDD1HSFym1bnC885b1xHv7AdR8qsy7c53MQSPFhz6tpYJ64YRLpX",
  "key25": "5tHPEq28HNYqSTBQ5dM9xT2G7Hvw29hzHdcaktaxU2GVUYNG7TTM5yZudXA77jNBSp1U1WAndnnTcHtnvAv1KDnV",
  "key26": "3g9F5PN1JWiaUSYtW74rTfyNKQW8ioBh95EUS4w91uD8RCNQbqhnbgE1x65317mxLaX2BAhefr97bKhTJ5CCyHMT",
  "key27": "2sfiR9EpNzqAFoJp3PQJtuJ4u7m4x3FVkaw9vg6ZHAV4mRb68sEm3BhX1SmCWAsbDukAC4iwNSM5sDjvd3D5q8NV",
  "key28": "34cugZvMbXAiNRkNtiVuAxwWygcpz3zyJy7Q8CaRVSYT7JU59ULqa4wTxafH7BQi4pCZwhtY7RDwN8V39qcExLJ9",
  "key29": "41CYPFiV9TLLd3giHPXmhkUm7ZCWUNBwLuDCtZqiBf47M9RCZmybhbSRcG74qpjAHrpWJTqoxHw522MmxGQgofit",
  "key30": "4VQWyLaiyWkjVSNg9LLGnTUpjxcrDCijeM75XV4Rh3dHveUqPDifx5SAJr3spyLaRtSYjSgHt7ZphE7ovYxMyfWe",
  "key31": "5nxtSTev7wUejDvefYrzA8XSKDGdRccR7PEEw58zJ9FqbdkzpQS3Cfhmz7T4DZAnbBkwdnqHWjzFmKRXCYA5g1Fg",
  "key32": "JXhCdQJSYHLKP6xwuJu4N9ErBGx51RERtGLmEYv5YzdfrhNwasCagLRTtjrnVPBUmvaqbNi2E7DYsjd8an2xo3k",
  "key33": "N1SRtxbEwD4EA4pusMH1AFfMGH5fCaCHrukdznCrztjALiUPsPdjNa5SxDQG2cYw2zy6HBQDAvMwBmpQUWjM615",
  "key34": "2WXjKzJHkJNYydV5hocbCqVWXePQNSf1HvEiYCB2ZmQarTTKz77s2gReD2zUwnaQK1LRRZ5S57tPfz4dB4zaSrx1",
  "key35": "2sF4VYfrpC45i6ECjjQGr1YNntcw9h4oSHRSWD1HXe4aNjq7qVFKKJwkXcsXpq6mTgceohvrQ7qw1eEJX7tEfYXD",
  "key36": "2mdeR7BA2wjXBnmkN4ekx9Sj7wUVAU9mdH6aKV5HA34zGhDLSV8wHHZNGyvGwh9m8S2gVoZcYgKw6GwTxpGQmJBK",
  "key37": "49M7Chrgp7YAoWMg3EfMZX34JzTwZow2yeT1zmjD7ewH1qeptw11cyc4YrjMMD6bfz9rumU7cERoDL5PmBZydLYR",
  "key38": "2A1Kcr4t5s9zWtkPh54LpWAwgVqJNLAm4WhdSbEMWxMXXJ1sZC8uAPjC2TyBkoaQKLoWhT6SXo32M87LRpoPGaLg",
  "key39": "3eXyA5omKN2hWuMKesKgvtci8WSFLYqKLgKzRfZFsZdvH858NV63Fjo5oeqFGisUhr5U5CUXoko8k3SNDx6ErR2s",
  "key40": "wcAY5tSH6H2XuTDiPZMLDD45N2eNU68FZseYjbGVzgKv6jbS4VWhMfULMxdiGu9u4HAZohZNb4V5WUmyds1dKjz"
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
