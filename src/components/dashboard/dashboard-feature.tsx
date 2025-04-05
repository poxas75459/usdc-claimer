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
    "5XScLy5dCmxgoNz3Fp7ExD9UDHLXvruyYsMA5QxMfrxPkNdVf9u4ThqzN3CRcaK3knq3NNaJbAhoj5xYPQyUVig"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48DLBCc5MAJHriYNCY4TuFd4CAW6vE2bqXR2eSxLxQW6UrqJzbZramrgtQvBWGcSK4XfqFuNmMZoUzYiL8PprY4J",
  "key1": "2Jys4L6XAUDVGZtvZy72kzpFA3Bgaicun27AU7Z18pwiiUaRScnrbiw9hb47JQBXEzShgwYyYbZgLr5cjUtRVRaC",
  "key2": "6noXxnTzdzvUdrGDGr6YTP6TpgdaLVuD3ujRfuGp4dYgEFZtYkpTJgzUdafKztJ2CEof339i1YTVPkSmhQJ9dtD",
  "key3": "meHCiokL7RzTBGo53H9vpxK7LpXk29WKxV3mgJJBsHzjw5efUEu1rNzXznpmdDzisjw4uxLVD4MJT19BFBqm7cR",
  "key4": "2f6agdSPKJfnyq3AjYd2KAufVpLaE5TUEmJaLo93hvXuLLB4pAkt5xLiuhu8WiGU9Mk8ims949WdVkGtYwRYq246",
  "key5": "3eNRpVZf26JeoXZ656PQRFNYbCgQsnrv3D4V4gfHBQ76UHZdcfTMP1qnp4KwPS3bC57kAV2LDXP8g49H19hVxLAL",
  "key6": "2U5SJG87xEdmue8WjqhWzLbebemndDksAvkgUbH1HrgPZWEn91wXydMFXedX8sGN5C2QKLuM69ssxrcajbWPc4r1",
  "key7": "2C1A3noBk3fYqhESGBMhGsP3pnRjx1oyzkAtXLiSWghqzBEgq4kNn99gioLMWimYThUhkohvPn9rz65FD8AWMct",
  "key8": "3XD8un39ya93KojazMDquVQoyB25pUKfs2sVguB8FZejEs7rPiJ48ruDzV4JUPvsQybUXQaKuBKj1NmfQvP2SinY",
  "key9": "5mz4a6uAKHk8MDpRkDMUkR6gVHCBBgCPKPaPoXzhPcnatk9DphSii7ooWEFSUPj6myehjEyRFyhPh1NJ7VZRxuCu",
  "key10": "2HsjeqV41R92sLyjEAFFTFR1ig1xh1FQHkXmMajhD8oAKsDKnZd3daXPQBpoHw8TVa1swQ1NBycinVawet8FMQDk",
  "key11": "3vXeEQLzB2ootjxkfqXtRb78RbsTospdQvpaXGYiCnJ7XvCVPQkWgZyVAAEEuNvoru2v7UyET8kzFCWqPnAn5vMe",
  "key12": "2xYQKnAnHXwhTAhK2x4g6xJvLHmow6ZphRggLMkzqrdkkpFGM7enMheXbTqiaEXtRnR2ig7MjFNCAHumSCrKjBqL",
  "key13": "NHN6KiT1JtnL2HpCz8vNjvK7KEqAfB8ykqEGwhMN3tAXhGDJddbZMgxTLyssYyhghZ6Xz4sTeGfTCbpSc9tUDnM",
  "key14": "nYbX355dxFijxtCpcTUTiFZV69EyeyLMRFZ1XcJj7KhR7xLdgrqZzQDqjUgRdvJ59TvWPaWtNgayFFxRSCQRUpS",
  "key15": "4qPeaadqDbQ8LvD3wdsKi8caESHmDtWnxUHWWe9dRkMZ7c5Q21RHqAqhLtWeMPAxmqhLpuJrgZ7YrvFLRtEhQBZ",
  "key16": "3HZRtgWLM5QHXFAbJL3mgPjt8r1DxteS7JREduod8DvnFSquijCVpBXDdDviU7Z2NVpJZJKG6iX31Ktyp12w8CUt",
  "key17": "2ixsA4e9B4m7Pa1XGADtEvkxCzwvyAZFf2NpL8mifZEzyQK16pyXS8UJGyxRvY8VcAaXLKu483aUrcFt4mVrr3qb",
  "key18": "3wKSjvnRzjNgtXZb2Sp5fG4ftA2nNt67o4gMkerN3ETDvsgoaguEZRs4vzTifL7ZoBm1jMfzcvzNirKrp2sXKZHH",
  "key19": "2ds52CvBWYF49hfqTzn4CRahju8sPVDqSzp6ksucRNKr6UWj8i7XHHcPnC314rAp49m76kcpJKD3e73whDWGchUJ",
  "key20": "5c8UFtHCUz3RgHhxFhhHqJGG9sL371g3KeNywuns3X75QhGaRvKjsfYr7ZnWnA2JfxTqR6iTGTyesNZBcNNkRTeS",
  "key21": "4jE8wAJss4ztByRmQwJt7UqCU5AvqaKJaygXGwNCThZuNf3EGfHaR9XNpJZAKLTZqmbEhDk6rHTXFkZ9Kec4Xntc",
  "key22": "4gBYVwF2hn8dR3xP82rVPaBD8PPDbpd3aNAruLVwjNnhKUkSTLqhiQjLWArdfSTBC9xUtqftB1EsHYXtoToje4EB",
  "key23": "31LTZCM4LwHxFUhWhUye29LGgNZ7BqXebgKcXUhNWtqszCpEY9PEMxUpGWR5wWNsBiai8Jncjc2gv2jUy85kjpof",
  "key24": "osxQhjQmFJrRuZvx83UkBnMJV3xgmjiHssL9JXQxyA7GMcZ6xdsVweXp8CZmqCnE5cgtvcWN5giv6L7dDzwDLDj",
  "key25": "3pNkPpSrb1i1ktTimBNPhctU9fGp4Z9Bn9HihWv2yyaNWotas5G799dG9MSnxjaD1ez5csTRa1M9jZ8kQAWtscST",
  "key26": "3zyXp6zbbKC8vnSGib3dhoSpeFTVRzgoP6Rzkb8V92vmXt7dUNuo3ysQnEGp3F14gqvzJHXn6acUcHXKEMCAfwC8",
  "key27": "3Mjx92xMZ3RT1TsktFiBES9EYmxJSRY2EQe8CSCZt9JVhiTAhBxS7dZTK4s84FQCUniZJtCGbv9GT22mjuxiG8rd",
  "key28": "4N1GQsnRgyR2BjAkHvubgNzoVB2n5C5c52oLF5rNvbUKUMDcAK8RPDq8hHeAYiGDtau9zXuTPTbdcvBMyZYRiKfo",
  "key29": "47humHjJG7b7SAWtQ8PJVv71QmYmuJVVkwxUosfpLRuELCu2KUJFtDWu3kLQ6MXB57EkV5LePhkx77N1zQDZxpCo",
  "key30": "3VxcmbazEzLztz8fh3E4RprJDf27gb8Jo9CuUNxkjkNFGkjJvdyNaG8jD8NxXRf5CUUpANi1dFvJfFP4zUuRFY3T",
  "key31": "aTehSvN983CB2EZS8xTwR7Hn8DDAZsP7WvRsVYSZTbZC9Skp5j9VcxEk64eR6GrxdBz3odX8C88kSsha28aqmmC",
  "key32": "4P3kjR5yY3rugMuFvNY3E57M2K2eED18GEyYJyqQPS2F2deM67VY2zWuCgR9dVo9rTWDk8d37wZJWZJR4dCkbMTH",
  "key33": "5fJCqK6ugyU4RKKQjuLviKRsyiU6JNgxfmyUtD1VPBrpcQJBwAUtmU39UYXzgeHsNKRAMxDTQNK752Xi3rLo9run",
  "key34": "4cx4QKXnhBu6a3ZnPpFC61thJcDNx7rndCBqo7qxhgth1ARwDYEQYzmJwouNQmZABQSnqWtiZraLtFxC9H3UyAKv",
  "key35": "2pfSm2j5KhHzANMAHNEyB2TgLb8RYbS4DFGKz27cCBYERyW4v9sgwJ4Wev9nQBX2pbqHaeEaNK3d8M7QdsiFjdm2",
  "key36": "5h8SfoqcgyfhiJEmxaZDLFZLJYzgHk6oyrJ9A1WDv5gn29iYBEGNL7e5me1jnGbB9ZDwVPEHo4CdgHtp5HEbwSUP"
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
