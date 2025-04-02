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
    "Xgko8vmyn8FaTnEDsYeSNgX74oAXz92gCY3i291sRPAo73j64UArsh428xj7P4YzooPTzh21yZDgj3j6hPft8je"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mo2Ajw5cEQbtURF88MoGJRzSGbZ7FhP9V1KiS4VQh1XexRHzTuNpk4AMucC9ffpDXXNQG29Anf1QpvVWbHKQ8e7",
  "key1": "2x3GF1wTqybStdZYcDMVGFWLg2ZaAGGaaXHfmbFin5Xcqd5Y4vGAdSY6LGc1Y9rz9yqmUw4t2cQe8fZENTrcZ7hy",
  "key2": "2fFCXWN3K4zR3ZB3ohYPc6xPDi7DHZDwVLi1BWih62SEHwZcsFJJHeUBW4fhDH8wstwy61N9cgDRPtjg2QTV9u4C",
  "key3": "X2wzWs2RZfJLntYUkMSsC1F7mTEsszJ4xyhqGjkznfZLKN6vKrNE2ip8Fv6coTATXiDjRgAbZ9syCSNmve7bHhE",
  "key4": "2uu5yRuJEgpUP3Jhr8vvnGsnkJpXbXJr2KFmTzaAan1b3rFvAd9VmxCr6dgcKZhCJGetgpZD9QhLGKuz32u34yAm",
  "key5": "4TDj4tbUD41gfuBnPs24ZTKq8A4SvKHA3oPfRVkY9Je136MRjUHW4Zik1XjXo7KG3HNcGrrD2aGQrnEKj3V9vKPb",
  "key6": "27UQpAsWibKJD9XgHBigcHUaAQi2uuB8jWAexpbvWaAuHysuNwjmJaVBTkNFAHsoZCDiathhwxBfioztzRizpgUJ",
  "key7": "4pNy51Vx1QkaheEHNqFXz7v754J7c8YRyupU4ijY2qDmz2oVhBWt3PHLFZJkr3SHxFtNhHaVYMVLHXxupPLEWMSf",
  "key8": "3w4SLfiDz7MwLrqPE9GifxEkS7LnDNa4AERsoMVoaQqmJktg81q9ptMNiRBabSn9bcSdaNDGSQQ3nmJDGfTars5p",
  "key9": "r1KvVZL5vdgzJgkx8LSHgz3rLsUP8SEiRDeVcxRuXJW2BvGL69LytkCBWFe21hEbZTznoqpeV8yWgPfSt7n6avB",
  "key10": "5T71b4YMVVMVsDPyxrW3gCWE4E2isAKrfHRbVic2YRv3BuusveDxV3eCQhbEiqnEiU6fRm3npi1GCyqEQoEGsVAu",
  "key11": "45eD16gCQf3sMsBocze2tJcf2iUstcqg8fhBG13orSJYgYxfe1C37eTn3NXdikaKaqrHZS6iuDFgML79ZgzVDhc1",
  "key12": "3SbuMEasz7YGuayGziEjscWFvg6tT3NMKRpmTHYFSXjNfvvGE3AkrAHaaNa9iU7jo8uDDP4DKXszkZGknaLNbRSG",
  "key13": "T371HXEQ8PkY5axQ2hrVbyeFDcSaKLnoajgcoeUrXJXWFxACHwizER9RmXsnKFU4FPtkZ6v7qJFpAhWYJiUcL54",
  "key14": "49eTqKiqHBdWGbDtqV1eGJXjJ1UfckeNGkj5qZ7MfWt2V2VCwFVR3vNd2uQnYRpoQMyg4cm6EfJPRfHt1Pxbw65j",
  "key15": "3uMCyxDgRpX7aB7o5AtRC7TjmiCCYg3k7YpweHFcnck8i8vb7qUXm9S1eszJVy4SkL4S3CUCkYbYBCtgLB2kQy4e",
  "key16": "8hcqsMR7AK59CaWasn8Vbn7n4GuVYgaHKdj3ZamjD9ErWnomRh6BuUvFmEwJqzN3k1DkWidPK2z8V63BXry349b",
  "key17": "5ayMMEYYhzr5XUkxduxMoU1wGr8XeCnuQL2JLCT8KaJyA5Th1a7eBGdQNHNSyyPpNtafPoPcjAm7vwVwVBR1kaNT",
  "key18": "v7UVt1iR2izJCt7YrJ9pvRBhefhBECz267hPYnysb2yVDS4ucwr6KZPxAq14jUz2ZL6KXd2F3ZhVNRYp4s8SVj7",
  "key19": "29y6D6LZpNcGPo2Qyir5voyBs2V41dzbbbLT8m7CG5Y2MHLQpsn1gTcW6yyayA3VanqBZEbVRKPWxnnryZdVKVxs",
  "key20": "25gtNbHcwEEYn3VNVR54428nWC2q42bA4jVkzzJoZ6Wtr3Bo1HRRrdnZH3jF3xxvaMnf2sPoG2hiGd2DC9vKePNS",
  "key21": "2bCAQPs4dxzupMRHKDGrjcp6T6eaCUccrrShB4TDhkysWiCFEYYw8b5pYZAQPqzMPikhRSBARGTAEMSVzbhmWGHW",
  "key22": "61mJaii1L4C6DroonkYEzucYukYv2D5sMwfx5tF31mHxcoBuD2JE6BX3FPRu6gYsL9EM3vkM1ZqbbGVeFDxZtybk",
  "key23": "3XUyVpUZBubLnipgg1RhBeqyCcizJZdDH98Jt4p1jJTH4dw39qW36FPAkbF7MFsiDXnFvusdrUbixMfbU9cfMiGR",
  "key24": "2hmzXWqc3QN9ojXbhDGDGcXwpJK9d2hxQf9EDYpx1HayWxTVtc7cV1m3ig81VybiZ6EErK1hzbME37G47GeetkAr",
  "key25": "4VB9FbWEedUZLVeepujZPkCeTgnD4JzPuipYumQovA9o4zjma753MKZ8TKMdRoMVkyAv6kjjS9KFi5HGJFw2pPmY",
  "key26": "67mY8D1F8rUxD8NUYSXJZtbJA6PLuUzrkWbUuqQWm82puTm6RRhaj88jSpD3ydUywuzC9hGEkAzQBpcP4h5tKZLQ",
  "key27": "2CLvyvP7xXsWooXZkFFQanF8Y496CXFkX5LPi4qJojm6pWmZrm8ipZZHhwnz3mPZrw3wbq6qPEq4zVrs7Gqf2Apn",
  "key28": "2PA9yBsxgAQi51XH6CynGAC5b9RNbqZmJ4yQtPD8YhDwdw6w3VxQqa2or7Faokmq1Py42GFVK4f7RjdUyS1BfkNH",
  "key29": "5pmxAn4KsH51TaFVtcLCVdHiXQ9yAZgbFL3KLx6YDDFWqHxpWaJgnms3bvftQGKVQ3txkj2F5hytX2i8VkCX3v4d",
  "key30": "3JVke32mXhX2Qr9uBmyAieFfjBXQjxAfxim8tG43J89DbXiuSdbQ2VyWBbJwMd9YwEP667L4wV5H266sDdC18LWd",
  "key31": "iQyTU8dfXVZTHMH4wcPE7G3qL4AZVexbBgGq6pFgjyyZUfPNbtEboTSJyPMnaiAtxvP28K4raGnVQA5XbKNs6mB",
  "key32": "62uPvkQ7mrLfLMfM55p6UaRAG4MpapjWZP3M3DgWmoEZgdwKDw9KMCTi5vz1GsaKZLKAM7CKRqsCsArqmQMfBN4X",
  "key33": "5tr66dyD3zyTw4YNRHmC4cDgbB1c2pvH3BfnNBowFdU3CKQ64jkXysuw2gp2SqLi1B5PehcCBQyQSxMmjzkawWrs",
  "key34": "5JFjBWHUrX2FT6NPeiFYMjdEj4VQ4XK3uNMkigG3AFmSnsc4DRwQZNAa4zvoHxSSrA4ayGPfmnoWzzXeh5jb2FpK",
  "key35": "wj3Td2jHnszGJWrHZM5vFDfegjqsbH5Pag5pXxCWqn3B3vHFDtvjTW5jD7RCui7A8CmErKfBHProCNYADtFfGkx"
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
