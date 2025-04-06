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
    "5iQUrj9q6bnpmyvXqj52XZ7bnVym6GxpSUvjFNpgHbGXjmHyTTpUjFku2Q8rdwLapXbiUug23Gm8j4njyLGHmeuX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C56HPkAdW5qajGS2TTWdZLVbDS89WA26xcnBBJay2Z6Bor7p9khwWJm5m33nr5Zr7BrsSeL3qPPMjTWgBS2bVRC",
  "key1": "p3qM6sfJBp3Hh4QHYXtKJoHi3qBHrDkuC5Rnp2gBxgnAwyTDXLRNDaxo1eWMQpNkSH1FyQnMAYrSSb3BKaUQiUK",
  "key2": "33FvS7acYfMZjW92TMEPB434ruZrrFSHZYK6UYDTzwYTB21g9sNsQhhLcPRC6JvVTdxSArjQfvqvyB4UKSWHNVup",
  "key3": "4MeibBrZEkhqzoj8BZNsBht4Xbw3Xg45B4CWXf1LnDBJ41K8Rv89bvioSNqaMBXSUJbH7zw5KjScKdPr217cJnmZ",
  "key4": "2GxjEug65zUHgsx5EgkVmsmkbf6Do5DHQVRLT9gpvziYEdsKwRDLujkYs9SmxymYh2pHTuJSQsgQZohP7acbuJj8",
  "key5": "U3bKXrCb7ZjjHZHti7UiU2GoiipUHhUnysgByVjVZf5q2PDMU1JsZDciPZJWTsyJzooa4A88UQq1Vr5meH3YgZX",
  "key6": "4Nodh9VH3XVymSipZC8TLPyPW1NrYKkCUQLUu5QQji8kSALG5wLk8j7YMbMtTkf2uXFjXrxXM8DXZhSYeGkaDqHL",
  "key7": "4WmiuaFUhaXMPBhPWv9WayEdz8qkfoSHtP5CpYf4nsn3p7f5TMjUaiFrbmaQB6wYbEt1912hEUk63ogSYCX6rg8u",
  "key8": "2hWPqmPBZeTicK3DYV75gPrYbg1TFCP2rxgmjShCLhvnWMJSvNgpq2jxa5urJKD6debiv6sz3VVR1KH6VgZQqXqL",
  "key9": "35NQGL5H261sEFNr8tQG5iyrXqWtpezE9FH9CuLo3vRLDLuUhrz2H5ayBdyyxW1NCZCkH6ESWx3q2r82xFuX4waL",
  "key10": "35UDmGJVKS3xx9gvjypqonHi9UtvEPF99zazcRiUgodAtwGPoSznaBSYSqcNmnaVFkDC47Xm4yx2azZ45ye5wBtN",
  "key11": "Qa2tCRhnSgnpptVNw3MYQWMnjcHdmqNRMmULTYiiv4Z47SUMjS59gWzZZ1BMshFBfgpb6xxiLC96Mt1BUzp6RGf",
  "key12": "kJaEk3V9bAuxQQnwD3uvXhTzd77j9gEbz6zQYe4ixJZjjA8fupENiTJVQaUExudiRQXc9wDTVPDCjVtGweAY98h",
  "key13": "hNqZF5xu3RjWEXi4FVrFzCYzHxWoFgkwGPvyNfsur1iw6beQirrP9rUDPf1vXbdFpoSVczTJcEj8wECgeJotYah",
  "key14": "5j86p2SxNb15ezH3KU1Kj2KVmqUBb8PmoK7rwThZXDa3eJAUbzDTjHceB9BKBx8ZgWCMknuTYWt95DNtrvXvbKeV",
  "key15": "3QwkV9GLtdw7Lxt7KMDQ3aFqxnQrL3GpnJMHNf5YuJmxxhHQkMSdwnnEjBFpQvAvjTnXrZFXH8fLi4WBTGH4aaXv",
  "key16": "5K1WWhqx3WnGgCArsghjw88MwLvQXt7HGaVCEvL3TrPichfSuGY9XBou5WeoxTLPyospDKWYjsXCRAKxKFZZPq8b",
  "key17": "5iaibpi5kVLwLJPJXovzve1iEoPKBWcEc7EHueiW5De3Z5YP7UqgpkNGyNRLZqZ7adRGH6RzJBJNtnWyStwrReJ",
  "key18": "2usi5bodupEkHn6TYK6he7qNnJe3TZBHhk7AKf5R4rnjyCFHyNFFctdKAjF3QfBZR5CtWqLJfHk4ekwTqDw8M7Ts",
  "key19": "5bUpfZ6MVT2bTCEW2QVPRR81dLWkXa7HmbkXTGzCJUQjR65Xcr2XDXNdgmzaLV2QL18CwFNGZR7PBNb6Lu7gbUvr",
  "key20": "54GbeuJSsAZct22JmqftR2H2f9vsYWz9DFYVczKzdsMAx1gYYC884QuZhiEMUEaS4U7QppHZPhv7eSpAf4ZK6poN",
  "key21": "4CwcoTvmHcMrBfavkcP5vknP338GyJXu6z4uwJBHDs39rx1aKMeLNW8xXzkafMfL5FBanjdriFSUjA356t9yEs1t",
  "key22": "3aKZV8d7JShF4Zy9apM4VuR71CSwwi44W584yFySc8qTgbyStJsN5TuAirpdpFm5ZrgBXeGMFkvxVc9d8bzg2ykX",
  "key23": "3q4QXcaGDV26JhL71KncQemUZTGJ4hDvRm3imgj24DwvTkVgVfc3tR1h9ctuQGVaKwUvME2d6gq2GFySRCiTGYRa",
  "key24": "5AXErABNifs9yAMsyPFMVtuTakdZVex1FkB3MgEmfNV7emeKypF3iDdQDZSbayybuP2DxHADfgWpV63zbf4pCjbT",
  "key25": "5xw7M2rHM6BayxeNxCmA249FfvaHTaKNH3KqwuXa1VJpyXdMbNHr8RVF9zMSUR3gqAQJthgv7Fyx3r6rPMDaaULc",
  "key26": "3L7UoNz2VL6pFnqXtuYPMfnvYeoaWwBahdfyeEZii1YZjyjsmMhrth3tLuDqmNj5UMyB4zLxnUFSEBHT3GtMEeS4",
  "key27": "5YaEg3nxhqExp3UD3coKvhyCvZUb2gJgCTz6UhvEzbGg8gJAKA2H5qXzJqfjBPqCMrfyCaKhdwwLD5jYYaYM5GaF",
  "key28": "2arcQaqnUxK2HTnqB8U7yiG12Tdi4NjBKFatTRVC3bN2KFwEv4ao2xXVupJGWREkxU5RUegbZZdBgfn5FVazPaYJ",
  "key29": "2H43WqVL754qQfdg5i4iPQ1UGgYsZso7vdttBTf4SVZxSLs7JMyeTbRvueaTC7GjEJr9p56es1hUGDzqPxKX4cPV",
  "key30": "2VGYRb7VygEzVekyRGnsqm1WncfNrY3GDfedTAvxHBaBUAbUoj544e1NwZHNWc35SBGyz6u7Dre2ZjfrDgXkUoYC",
  "key31": "5yR7DLiaJ3vnW2zN5p8NdhgHfgS6ZX4MbdSphKvemb3gfAvKBMzqfBiA4kLAKPA6y6khVC3R7xKYyyfCVLxdoW6L",
  "key32": "qoRScwZ3K9TxcUAnESHNRB4ZkDkovoBF71wbXk343qyTfatcZaWqKxs6CoNDTFwaUMG3p4Re8a7ueT7NqukHnvs",
  "key33": "ZfbyXT212pguMZTDazSUaW6xhij3BBfqE5CNDHPQtp6HZ7djTFpahRjyPFNPtSKwn99nKD8ng4X9bgqD5Nr4M7E",
  "key34": "5xoitrPQfKfJnCxf5Q7XSaA7YuSzEtXZVgydCe2h2ZCfBogaUr8aX8UkZ9FbBqN8GJ3J25H3beD6GkbH9RJHQhx3",
  "key35": "ekyH8NC9ojDJRGzuJDM8RxKYa7TLmd4Hx2hHDsnsWDzPzBEfXQ2GymPSXtanvm1qGdPw99RJwzhmRynANbF61H6",
  "key36": "3zazcKpbXD2qSS62YQPxfapir17uchdqyCY47L16NCQ5zKqVCrJynYfxESoS5u4vZU5tAFUcjn3qE9TajD5NDkDa",
  "key37": "3uESFVYQrGtEsfekhAVdj5ZGsaqL5uaXCANZ1cwSjM2gPXasCwEQsLb1TdfV9yHPRHj9qsYtAH1KFQ2zRsRtBAgv",
  "key38": "4UBXwSZR1N4PYYD7WmZ59mgDpmjJDJtNZymZTtBVwzgaQAfVkh2CJzgP1oSw8S7E5by62S6Qqhg1yNWSLGiK4ahm",
  "key39": "RtczRjSdMWSqSFeeQCFSbkijQsnyFeDVZLTUW3W7eokftuD7zbCJ3AUWeaAtbDaUuUP2c3tSwt8wmuCAnN24TpZ"
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
