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
    "qKLK6sbN5Wcv78XutKK5ZMfSX2TzABo2QfV1aQaatAN4o8Qyhqf2xqadYTBY5ENPaXH8ciVkVc8MY74GXx5Yyzv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "azAMSM86Aq5nvjwMkFTMJvi5Gfj6EKsKpnozYY9PyeSYwuMLBFo1PqBztxTHqqv1tqLdoY7bmgCPhkPCBMKy7x2",
  "key1": "2HMfFCZAr3CMBzobDYAiUbTbV7JWwRV7knv7Z7y8YyL7rCqKd3VGFavozRhusTxVZaRJHZcgMjtnLMRSuDkwfBdV",
  "key2": "64ifFAZ8SLyZn8reCzcksDC7oHkXof9P4RE9twfHvKSwMiXovJ5vguueWV2U3LGdsTgiWzjZtvSrRx13aCX4mHaA",
  "key3": "3KRpJHW9MqLKJwJU977nYSiAduXVGZoRTqNzevAsDMx2FJckbPLP3ekK8QEgKDSPvBFfSPu2pMKX3UmjRXuBDCT6",
  "key4": "3vBBn156CnkvLQoivbEpFPfSsYwBwNP5XVeKTpfqSiQjcbJhF944HjFkwAQynsTs1XEa9xZDi9o1PkwPPpnJwHDq",
  "key5": "LMinGCWZQwGqmi8TPkPgurDvKrhx26nEUH9U54Fd1W2LrZLxhbrh1NmLThKdHE6NKJmcv2JWpinNwjy1JJ469TC",
  "key6": "3K2QW7kVwzuQ3JTh3wrCChZVCrcJprGXnNaLgRMFrDVq6xWNBUbN4CDJ4fgbXqcDoY6v5F2CN748YDMsLPtxaUrH",
  "key7": "3raSyjCapVdcDfZ9hmYvgQ5XaQqK8K4rdnK95uNUvvtj8yJNiWQbyJFYGerot8jvi3iv68r64j9kzXnDMMNiaWEB",
  "key8": "3xEN9poGePBxTg3jUy4wFoZ9zYBC9Ku5S2kjBjPPLNrEopDuKhBLsGkL7NygUVbD6otNaZcupcuYADEBQtvxseTE",
  "key9": "Ba6iDoTbY4LzZ1eSexdDWSwLY8tarkcNEpwqyq3bpfniJco5cXAb6wuwHL4AiLVGQfURm4bw54zymR4m7KZQnJY",
  "key10": "4WP7ezLvV4p4cQdn5YqmLvmixD2MYZjCypYoC5xEoor54WiWDkoxnyKRkm5C5UYyCed1vQSUmxqQTkPrA8KFQqM8",
  "key11": "GhsLC5L31d1Ho6sR5wedrrzUBqTrAFG41PggZ2BV8CzmLqVofbuFKuxUACDwmw172tye1w3oLDrikssfwtDNzwL",
  "key12": "2WrLzWThHjwN7VidMdwjKFeYoEpcvPhhU7AsVvnUqhnP149ydPkicaj3rd61zdwhpWDoRV86uSkUNWdLzryTwkYn",
  "key13": "4vdwETGGhgDHhfMZUTwA4E1wX6vEoe42DnsRPucjCN6zV6eFUpLzre2DL1cWgcC7sfsi4o3HbiWsguxBexbhe3SF",
  "key14": "2wNuhpQrMMtk4q7KTTZqXeG6tc4LnwfiveJ5xda6SyRTWT6GjnDAhbsLxaHvwJNZQQPJrvBuX5zp2hToG4o9gdWu",
  "key15": "2UeuauAt253J1TYD2JkQYaNJHfKUZdn4x4nJ94QGCbX3tUpWtPDLjJEW7aFePrz6mfbUyAaQ8o7N58vaioX7ov37",
  "key16": "5Qor9WqRHtTrkrJBcNegTLJREcJP3PmLpA19GyDjNXWp8jorKE9arakbGYrzwSYdUEhoMPeerWJakeikDw5XT8vQ",
  "key17": "3VxvwVyrwk1ebMhktA9tr6qvWofHAKcZSGDZdq77MDTPRkmnKVS95Sws7MWS2acGkJ6B5LmWu3UveMmTW3XLjAyD",
  "key18": "fR4QwN3kdgbSNnkUEYrRNqQHwaM3aDUrewRr8SDkdpz8FRXj29KPMQJfyoDdpswBsJKQ7ondcVPPyY88E2d6Teq",
  "key19": "325VKawQRu5C1jYVPt3Py3aqu8piRKwSsx438SdgBhnnsu1mBMUMQDqYM74yFXEBCYxHVKcvdMKd5FNYpViu9ZYM",
  "key20": "5SLTH3KPoJcftP8u6FdTvqBUSUc3Rz4ZakJoA1ncoKb5cf9DbSGnFqZy9Mtfu14Te7rAuTJU9Mvd6gtZibUe7v9w",
  "key21": "WYS35rAB7GbX5qUVSDqt8GkreGggZoRVP2kYJ8NZqidGKicWBBzfbHpQAJT1y7rNLMxYqmYyXsWzRicq3CddrrE",
  "key22": "2zYox2LRwhMSKzqyYY5TW5LxBzamBSEPanuHpGytuNGLzzYj98H8ja977Sq5VpUAhdRr18yeFcFe9eKEyUqqi6zK",
  "key23": "jYu9ZYBkcZGyXqXYjqdSyKfBWsq5Z59KiPVRtBBkragLDL1YH9LyTp9C6kAALssrH3JLSE2JggsEy15bYozA9yT",
  "key24": "5fK7jwgWXiUWdkqegekwAbmquaZixFTWM113YfVxMXmFhB2SwfoyLFYe1WJ8Hny7DS5QAYfEooVLc9Ses6ssW1ZW",
  "key25": "4sfetMmNqKUSezhkuY8mJVyUqoJwFcdKPDBDLiFxnc2goSt1Ht277gjpBQNGuuyrnCQzt9Rv1KVfYKg2DbRFCeH9",
  "key26": "2gMXfqvR192jPeq3qwK1XHupvJF4aRRwpPCG54D2KeeGC33aEjcixiBPindfSopzEASWveRpm5TivGaS3YevJ6jd",
  "key27": "5CGN5q6VRxToXAKQyZ871RABCbGjZuZTxg2MrxJCU8A3EYwJPdfd9EcNfk9WNhokjdZ9fSvgzj6BoZ6ezffT69g1",
  "key28": "3YTr16UJof9jFeX5YDXgB8o1ncGEXaH72pBnSWHAxXVmwmt25TwnjrrBvGgCKmvWEGnEmgabMPuE9sjeGenveV4b",
  "key29": "4GwCRCaENeUPMQq8Zd6XvBboBbZbqXwy2CWC35gebV7YMH4y6b9UJ2aTmGPqFptsgx6FT23P7jtTjYrmxTrfStfq",
  "key30": "4bxgH8ELNaXFRwwVyWN7F6x93RmaSG1PGvXcbquV6Tp7FBS6p6fiGqrPpnXsRxBzSpqxwMxSLTiHvQM9ViwuCjLm",
  "key31": "67mAHJdDHg2hC5vG2r4Kxp2Zn87kqTG9fHquVfgEJNEy5cGUuDKheT1PCzjx1X1ZTzfMkiuYvhRniGPLpmrAaWKr",
  "key32": "3FB267bnBANe8K8JhX5iCCd7jq7DocTF7RZFWM9y8iakw316txA3jNJLjPw2RyXNwgLJ6cxZsZYMgno54yxULHnJ",
  "key33": "4rGCySmKLM4Lz5qGkAasETh1trLGuDC47HGsRj2HETa3YAyfD5yYhWuwNWnSq1JwBZPxYckLa1Rh1QypaAHzJfUt",
  "key34": "iqAwQTd3poqQaUaNew4i3DyEUSY6FwiYDqLcT8U71wyuW82rYCDwejiikQyoW8BccALMHSHexba4jSnFMx2UHkn",
  "key35": "5Y37tLfavGq5WJAtnLZWnx4z6cCMZRP5shW3e6nGAZEKFxuRcn3kuZ6jQDvsVzaFD5jVdCUAsnTPDZkfWAHLqquh",
  "key36": "47jRFEKbT5dyb8Pq7q865AvVvBpq6vsEfhxTwQZL9GrETEsdkGwNJhmeU7BPQjBBpEspLVWtR5XNSGHU21qGqvf7",
  "key37": "5E1NS5TPQZ6DxfUYmWNE12cJXmMrYMDwo6YPVRFKbwA82VyvWwR1jwW8kDwhnxEhyxaqTWhfeepoqQve81t6eBb5",
  "key38": "4qP6bro125dAtiNwAqmLUpJ78MPoui72WVhXcj7hRxift1kLjTTwqC9XzCyhRYa5hCqzxvPj4eEzniBYdq3Zmgni",
  "key39": "2WCCz3afz9vPhpdpwzpQG8QcyThQSEMpzDgM969B9nzkPyQ3u2apA2qVtLK7Pe17W2VhzfcgmnGfkBmBqLVPJBPE",
  "key40": "4DNfQXN2PXy6sH5jXtmx2y91y21wdS85QQx3e55DRG2AXJQejNdFfu5acjBvXqn9QQomdT4A6nJ7TJJy4MArkCTg",
  "key41": "8mupdR4ABwz8p9BYMdUwisNFHDUkLhZN6aap7zzJxxjCAi1dgJ5PXvS8RZdsGgRH2kXB6PJWmsdEEKYiCd7Zq8F"
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
