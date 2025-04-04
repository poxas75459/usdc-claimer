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
    "2XBJPvxmS8vCnVh2M2No5ebk5XF3fL5bLkhZh7MvobFQ7u4L1d3t3WRBCM1DHvnTgYcbzxxaW6w4Ng3jRzaE3zGx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m6ekjYQxkFKF9Z1Z4x4GpQf7aMmfsyuj6dgc5viPivc5SuAm2NjvngD5i54smVUAaknf7qPWz45hyH1a8mN3uPX",
  "key1": "3H9bnfPprc1Sg8UtWjCJASfRRf6HWpAJ2vYCRmaeXz8njNjtqdJVBpG8miunydC5teh8LVjWvUxth8uzdfduJpwt",
  "key2": "5SZoxW2mvMAWAh7hx8pKXWYBheWxa2V5NqBRvDeAFeh8xXN8kyhTsXZG3oCzm7P6GkAtY5U5wZaXCYxv8EN3Cs3r",
  "key3": "43uxgSvB5jSfHjD3GTrsoQEnGTHqnpEXxXKjfUwtbxoryz5ARNmV5JvvNJuLfKLeymoyRDEBWbZS2mPdhGmXNeD2",
  "key4": "5AiQ5xbRWUTovnzG27GboLpdvVPEqoSpr3r1uvE9ExEGTqBCrRiVFLhixSgKZZjAr2tZ39dMmNEfrCwtuULxZ84y",
  "key5": "2ianwXRKXmKT9NZ4AN2CAM5gAh1f1XTj4SffCXJk1vxKdf4o8BxHbnacyxQdZXdW2esedcSXvKGVdf3S1e54mCJM",
  "key6": "4e2nfpA384c6V5oXJGyLHyUpP8Rk22XmiX9TwpWhqcezfMHwGGpx34Koz1rRdW6T4g1w2qQvs4Pj5ijNAh2bCv5z",
  "key7": "4qMEYLx1rxgu18yiCAUprGKRAM8gxAFZEDJA2wGu23dWbmMHqZkBKgXxgymrXgdq4ro2FxNXgydB8m3akD2uDkS8",
  "key8": "32SRc9i6arntSkAoSuYnUaeNxfCBtgYCR8qGRrNimUAxAeamVY3eoT5ZpTPqCRxGghwf7aNg93aBZybbujZrXV7Y",
  "key9": "3TPcssbwF7MiWxoUBTm4gHvh3YDBYrguE3iDsbmGQnBMkt4LcFfBNBZ5hsxy2nC7d6rJbBdoQbTE5dqSKzUp75Wo",
  "key10": "2SsT9taJDdLPopiy4WXHrXnqzjEBTuD9DzEYNMxM3sDiKszBy7qhTvVQpruHoJz6LetfoDRjXCGoWkZUTT9uEVyG",
  "key11": "2Dx8XabUWZJQCUkLdaKMJzfqqMh6Ezum98t2uAEXBGPfyKCLK7sAokKyqhzqQYA2WGeCx14kusQCmNVMMmyjUwAX",
  "key12": "5skzPVPRkQNMMiRVNCojZrEg9FxoChzLQBiYrCxpKUbegFHrF2Bbo4DQGjXW7xSVc66ryP36ABXb98hxmwkebhwb",
  "key13": "5SHVVbrxZpuMxN9idcs9QUhpykuH3Lei3wZWGnGucBRtPFW8vZEHo6poSHS7VSyUzo6a4STJ7GPH6T6gpTgkhSVk",
  "key14": "VsMZmmpEwQtVyRVFn5j9Wp8RKXYHbjLtHKDskS4uJyAeNWMRENN5KUsrErAtazFbmVL7picx72Z7sxFiCpRCd3H",
  "key15": "61v8kfzySoTFypFY3AnT7FAHMLNKH9BPW8gqLyT2sgXXavZ9yuPPMaz57jKvMwKvJTxykZFzoBDmvcTwAgA89iqS",
  "key16": "4AMCei67eVJJ4SfrQ42dZLP2aJ78oYs7hMDhgaXibz6EzFSfWSsor2GvHHE5Mif8LDLXQTSwy7yuVzSK81XjWN2p",
  "key17": "2XXc9mcnHcR5LtTXLtAnsDpyGJ3jGdQ8g3ffKV62sbch5N54iYhJDBbwDuqukpXFqaJATTnoQPDMdPk3ThTmaotq",
  "key18": "48SV5hxSWjeDiuBABoxUnUG64TnYabzxcz6FHeowhuTbSsCec2YYiZsgjrUS91z5YZqTmTVv2E6QCxRSwHRU8VAj",
  "key19": "4xBs1Um4SPu5gUCnQfkhYJoN2KTeju2HboGc4zTBBLUJJPTV7oU8wmxJsdLMd3pVkfNjG5ixjEUezMtistJxs5kZ",
  "key20": "38BbdYA3yqQTJLAD1S3EVj2cswQgBgVkZqdGMdAfYQkmMPPDSEpoS4hG8gGhQ5FznR3N8bZvHYU78PCw7mvb2ijH",
  "key21": "515xYwfkD3K6Qqow16bwoTvpBWvFdbhyEJ7dGGq6jURBpsPihGJA8SLNxcyM5ZUuyugdKr9YwC62E3C39BibGW71",
  "key22": "4cdRkBLpc58QBuJAtgAMua5EHjkVkqMr4Jen8JqysWFywcPxyBc7Yv91wSHDnW1zJ5az5PwAAK25ZMnZrsfwX849",
  "key23": "5rEFK5uJmtsmMqUMYwr9jwaTwj9Tzg4F5t2u4LCs2kBsc3HMs1GwHhdDp4VEzZERBhM5CRUixAocGREDUNEDu9Sx",
  "key24": "4mxQ6A2K7ntrFhg6kzBnnmF7sqEo6LGFCxZjMcd2oBgJKx98hVUCvV38BcQQnpRfgZd1s6LPxF4bUT53xLXqe4F6",
  "key25": "undHL39YezmzrnBjGwRmkhTB2FTmRmi7TMkaeLcMZQjgCMt4mNHHcwD6t4ig4ZLE8YGip2dnLbL1YkEJJYpyG1E",
  "key26": "2yakoUTC2eQRCHNDLoeQNQgZ36Cyiq1ivQ55NNySa3Qqt8kSYQ4ZrKGeYLVftXZWwZ5UQcPwpBnLwhRcAsnEBU5i",
  "key27": "2ryyz59XU6Mw37U7txA9nj2fg1VHzMm6KB1powhQWxUQ94MdUx5Ku9iQsoahsk4C4GBZyYkTYf3jAb3h4LcXHnVc",
  "key28": "2TubBw8JMW4x1gARBrU4zty8w2pcRWmR9QFWt9otN7Gx5AKgwzAz7iAifV4HcU8tk6XkR4onM6wxP7PSfu4o5qG5",
  "key29": "4XRuYfuqHESSVNu4VQQY5nvn8vFK1GoTa1P6G7vvame4daTSVmaVFZ43vUpCNmSoaE5ZDhHrHyzRsUYsDAT57DBc",
  "key30": "4QKRbd6sGksC3udssUruPmbsn2isWUxhk6CA42NWbfoZd6kJqQ3hYFaJRkW9eyXRSEveL6LZUY1CwGTTkah3Gn3U",
  "key31": "4QJ2mBdCwQdtXpvEuRMShrMWcHuDR3epVRVQZNxhytu521YtXLYotNU7s8fQFxpUcEPX8L5xxCXjPpWQLLdsRupf",
  "key32": "3p4Krwbft5fH65qEA2T2SDgWJtoy6JvFRkgFVGm4KiK38wJNdKUUt8DKoT5YAdxXbdqDoYbZroZw1uoD1iZLkG5Q",
  "key33": "3ZmfC5izcetWqMjQNCdQzHBBiZCjtTaNuKSJFeb39ypxrc2hoJf5s6UeLgrpjmUKQfnnKMowo7NjF8hbhgdYg7c8",
  "key34": "4ReqvKu1Mcg3nM5w7jQ5GNjrK5ABovmLRHDs3fvLKDZsoKC7J7hTrdAiqVthe5oxhN3hKmnAu6uT7QqGKQw7L5xJ",
  "key35": "5AXcND8Y7F9EBdvxckAo62ZrvEjJYXDZERttrG5QkMg2FbNfLBr9LXyoVibQuabPWXtfa11GfBFdvVSzF17WQQc9",
  "key36": "3ipajxNT4ZGZ2DUQxL1UoiggearPT1UtTwJRQc6CCG5q2mfYGbtYZS8vrfWQk8asDeS1sF8PrvSau5EU1a51Zuex",
  "key37": "Eiw8riJxf1xV4Qqs7ghkScdQ7Yyu8xMotVrHGRLSd8Jpwsn2E5Tv1hEfuZ8FxpcupkB8FK9PkYRBNzzbBRVArBa",
  "key38": "3oc6xnW6WCmPK7v8N51JF1XW2j8MGYLDLM9xCRZoeJ17DG5fcJL9rwqdCgpSr2Xt2hPKHznYJYEFDYyCkkuUE7E2",
  "key39": "3ZW5h21acQZrH2CKxZPcCcseu9coUWrHtgwdabq2mhWdyoVBV8HLw3zC9NL1dsxR5d5jjXfMxxsfbQ5QJZT3dqm4",
  "key40": "3xS1iEKKHMHXivUKVLdTnsQinvUaHQ1mgs2jbfaH4hvZXHK5fXd77HndPAooCjZ7eSKdQ4jmSJpUECJ48JQb6YEa",
  "key41": "5wPVox2jV9m2tAFfTAfM1J6MpW3XThYnFq5NjmZTo72FHNRda3spRNqRcVvzu4y4BVWMLLR2iXACzHyRZs7uJfqV"
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
