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
    "49VbwWPuL2HrGQ7rbedo8PCs1YkHLztdPH4xSd4xjNZpojcDNLyMR7nBkW6NhuHFJD3xbQofVYG5BQSUu5LK3Qyo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iCXt3rSdEE2tC9a6U68Wy2WvB97X5wECyd4BCDfBXDj9GuZzRp4xDxL38AU8EeojMhxNsKydpFgyoxHSDioypi8",
  "key1": "65rBk5bXtz9TA6HAqjvMfmA6x5V2rYdDXHf2JgDEGzueQnr5nnPAoNeGqtdDh55iYPQdv6mHZCjUJkRv34Qkfo2g",
  "key2": "TM9zJtZgzTdtQtV27RRbuWfZGq8zR1HgVjqS3jaPhKS8emrT5uFfWJHbiyoEDgKH5w5dFCjT7tjiKf8AUjSxUTG",
  "key3": "4eQToiN6GnEfJCMdjDAY63Znf6Pv2wc8jRLEAoovE342AtvuMmWz7Zm55uvHrQSPFvrvqNc6cLFC77K6CwcUjfF6",
  "key4": "2bG4kthZMEPca954xPW12EbMTJWFwBYXasJ1TUy9zecfDzEkfqMrpMNNHq2GdHNkjyLVAsg91LLqXKowH1yECJMv",
  "key5": "5pQkY1TMEJKdVB1vZnbihr39NTdrtMqtYPTm7bzFQFttk9bKpdnhJiDQinb94bkrnnT9uuBjUuXwhUQoq6rBQtLP",
  "key6": "4aPkAp7ToqzttkotkeWB7ZkBV8gEyojtmm1U1vAuV9k4mtU6cuRkhb5Tspib1GBkGV1DhjrZYjNU2UyyJuvJtZYs",
  "key7": "dsFsxtjM7DXVbSR9g5oUaZnfFz5XtrVsRBhXvaYBmVxtuzhdMUQuoPoNdghYMmtmAogJy35KrGn2wK7oTsaMowi",
  "key8": "48y9SGwwoxA4VmUhm217wrqhugJHurpxkArrKQLEgizd9fttahxiksptAf5xvHstrB9zjjNrTptNWYub96tKKsu9",
  "key9": "4L926TX2U8es4t1LqHsauaMjkrSNfjdSEEztzGbBZm9Apk73WZC4ScL7qQXefqT9JQ5XALW4BB3QYHgFFm9CXUdh",
  "key10": "vnVzYtzTdnZSx6C2qe3F1xkviERFXASc5sfrnLm6ApxubJ7DZMDvHWNzHvtpNLR5BXsrB1bGghnuL376vfbUCMi",
  "key11": "5MwH2s4AczuW2aNmCW2TJLPGXnBQzcijh43N9izQVdumATihzf5833DvFwpQJ2F4SF99SbBjfKyeDtkb6xC3RegA",
  "key12": "HUptk9pcGE4fzposQqD9UxkuKJWNEiA32komeKm8Zxn5f8dc2EXybMhfTbZRcWrkam9zKiEg9G4qd5bbT2bCaTt",
  "key13": "4YuYW2J2oMWugLJsVmZKamPMS2Zf9dgaVwXGnizDLvqjjJq49RMZKm42s68ErdvdEq9E9h5MwtaEaWcct7SbNJ16",
  "key14": "h9fJNkDrJ83Bkd4fwcRUFXuJD9HRv4rgwqJTEhgf6triQZHSNjpehw9cQREazxhD1i541oGw6xtdvB1Dytk89yt",
  "key15": "5iPpcmk1c9dRZjjh4WQewqYjSjsuYj9ZQ3bsfM4GdotLmQYRLRMzNK1SwiqaCYGKUndPuoHTTQiiFMgBwefz1uES",
  "key16": "2g538up71draF5f52eG9uLaf58Kv8273WcyZYwkhYmCBxEpjaCbGuuirC8XXoy8BsA7BbEL1xpWxpgMqTd9EMvzP",
  "key17": "oLULpLEpF9vumgh6xnpxuJsmazp3QEyErspxvnvT1t2rY6eW2oyudfpU5tRxPnKR4h6ZScwepVtWm8Wt38xTNPQ",
  "key18": "2h3AuyoMCP3pTVzdFHeDjbz7aWkYLzhLQEUxj9EzAMukC2dhiieD2g2L3EYpp99w8G5mp3eT336dMvGGENhCGyWR",
  "key19": "CYng2im7dkmd8sDbvRJmqbj3hSckoWg7z2fXGrD3rxAVyZw21Wci4Q1L5cV58qXFNC6pKzfCXDVqPuqNjdto8kt",
  "key20": "2YHZeRvfJQvmG6Qu2QrNpmG7PWriRTfTN45rj3iZNyp9goSvcZ3SVi75PrZGpyEsM177GW1N1qR9RPxtCUqgBcu",
  "key21": "4G3jmUcqJtvZq6g8dhjdxDq5r5yv62PY4oMbB7d7p2KDGio8DfeiMdTqapeRrjuWgjZYbWjbzttkgbUX9MTfiEAk",
  "key22": "3hqHF7wyQ1e3P6rrVKUvkdTE3FaEpss4ksM4jRRKZ8rJJRi1weFdT54gHu628Qzb2maD8PLc7W9PPm9ZethhPzwi",
  "key23": "58AzwjzmNvsQ9aPWYcPtQxQqBYEHjjLMAhRXz3HD8kSDCb5U6RXZpnFbMuwKSFdaqBQ2VVvUDVoUCocG8gCuYTVc",
  "key24": "3ciYqanqcyphHKm3nUFp8Gemtf11NaK4fGSTcrKdUwgnSbXaLTeA7c7kUQw8yEiFFSNqf8qrEGsTiAp8QcWQUsnL",
  "key25": "4CmyiYv9rx4n1faiYZJiQ7F7go1cavUbFbebEpMAtbct5kYXC9Jicm4EHBeDn5Y9mej3iH2qysREm4iHmexccUng",
  "key26": "57KU7uMfBpQemjY4rpyPB9ZL5cgyU8wE9S3q8MGSjjRwdMrbQHKFyk3ZCyir6KyKmyNj8DA18YJUnHUUBotVt5D7",
  "key27": "3mCZ8J5RppDAEc5unVZvYzx7BuF9PhCtQaFzDxnJEsHmNHZZEbXHtWFS7ozM7CS46if8FQhLbSqcaVgvicyc4Kmf",
  "key28": "5so5gJXrmRWmWToif2eDwupN9VciC83C4kBg6MLkyd7U7yu62tT9ohXCbXMpEPuCqebRhkYohu6hu1e1BozN3VXp",
  "key29": "2vTzmtvPAurLic1UBqpv7gMPyXbV1E4BGuqAaYeZWwQTgkjEHFwgqYNqUUKwudjfNyov7wKewEgnyKU2cryme7aS",
  "key30": "2tTFpnxGa5RRoESK5JVachL4fVmwkAqR6YTc4dTacJrNCWtsicRfZ5ZgjLgWjP1Pb28Q5JewvFWxoLy2GsJxQMWB",
  "key31": "4ETxbFDPV6Z9TGNxc2Y8bxKWxtC4LNkjXxhx7C9eUReuQHTBQxoYnAxqqLvAahopoQY7bboXtf8LAhspUf1vdBEB",
  "key32": "5o3QYgGixZXizc98JoYhMtHBwfXmCWUq78DudqdV14acGqp6ZbvxbCf4sPoZbZ5yAmh97mx2XaUbDZbHz6sEdzvG",
  "key33": "5jJF6HPajcEEAcF6Q8hQXuDdHdVFy5ccgENMG2xy3fjNhQ9PuHg1cZusZ1fLQUvTHe6q5KanN4CpARLM2SKuA4aM",
  "key34": "pEYGAZRGps38UAtf2JxcAorsTBwZP1kag3SsX4j1oNhExnc4QrrXDAdpzhsNmEi6VuTr4KMZfgGNNd8XHCY3Xsw",
  "key35": "Yt4oJjpvcFbkae2nHjHzLHvg5xyoSGqLHihcq9sNGLAUFkeLLmKzaFhF4uQ37qp1YVQ3DL9wDR7Ln5eFJyHS9fx",
  "key36": "4b2msTtJ1gt8hDEMum581FqfpfajDnvj3yovHsTdKeHpEKoxDGtS9fSxaxY5Yz7TU5Cu45VDVxXd68345K1mbvab",
  "key37": "2QKf2LrueZRURBXFB5wSiBeqXiCiJRCnnuKBVnYp4Jg3jA9PLb6zg7n4Xfj6hvRTATHkwBeJLNdSUZ6yq41USuVx",
  "key38": "3CBuqQsJrRrHEd1nnzi17X4v2Gwc4bvGaM4fMNM8JWBriEoDNqwkNaB8iADXy2AbY8WTLVnwKyb7C3r9R2BANY77",
  "key39": "jbdHMc8pdyf8jbX9MrLPCjX4eACwDYMXzpLiUWoSaiEaYyf2SNXn1gNibpwDv6DC1hRGjLfNw1ox6F94jkagcG8",
  "key40": "42Us7TZpsMdYw2276ucudsRiJ15MvPVFLXguFggpLfFq7QwrDxh2FRaFX2QETY6Z7hTHrwC9K6hyPVyFsaFCv8i4",
  "key41": "5zWzj9VQjnjwgkeLegCyhnFrDmFhmBSi1zNmvRv9u3z56P9TaCubVPsnDzJ1WsCMgFZTTqHPZumEpRkbzGupU1va",
  "key42": "2VDP7KdqRWXHByLp9bDgiXBaFsQg47k861ydgeqg4wpaQYBqKErhWNjFmqVFbjzUC9pwxbvd13U3zkbrbGDPq7dH",
  "key43": "2c448x9MRSf4ERWg71EyBSiQtixnryWqhDXM7tB4SSc6X6emQugRAJGPBv994QdHKGKTWXymfEfLjrTZv18vy2c7",
  "key44": "668raGULwKvWJAQ5NWjBf4vwxoVeGe7KutPG5x7DoDjoRHA7rNv6NZZvcDZCRiYho4r21sHqFLtsRvkAvuBgaSAZ",
  "key45": "odPZPeCdh195Rhm5G2cSeEWgmWqLvb1zSzMFLhy85ZBSFWzK2U8ZdUafBujvrNhVBGMJj7fVg8ARnUa6xuMWzxJ",
  "key46": "5tYTLQoaoheffWy5PeWYBH9HUbk6FtVHLw74MJDKYBJMZ3Gz38GHBMJSpBCjX8t4VueJcVCXVMkzJcpo9bUofLBd",
  "key47": "3kB98f5GrGhVRMTxGkCMHr84ocPQNWwoHQj9ifTZzwCEHbuAExJcFWJRuvFrygSn9ZcnPvWKdZNWvbZJA8ZiCcoF",
  "key48": "3h4ifawoJg8RG1iNzZPMc8HKv1Yao52xHpUg7ESuaxCoFtex1aBFgwuHuGCpYyfJ5cA3wNj2CYQYPSTaGLnoShXG",
  "key49": "2V4PLhazxJW6RBN5UQyfWhDLwUHzRxEoEbY2NnTJg91Qu1ahmS71J8xnJ5WcFGHVtEdVJ8L3Zr3C2cWRiH9ejiuf"
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
