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
    "2UAveAjf9tsaRqKoK1XPcsEixSFZA7Nt8rotdSppfS3Xr6ko31xQ6avumPKNBTwgL2DTk5pBEJCtyLNDrcvdGkgm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bwPdCMFXtEpqfmcDh1sLQm6Xm7esEYdfeDVeJkkGFKicb6QwJQGGJM9R1HGd2GJAEuJLUbAfQcTJxZVt8gnWy4m",
  "key1": "4cuAn6bWevEioPAxevTaVv3iVwoNqKtpSzerJmsawxhwc8j9ML5YS6PkztPcp8216GRQn8priTkT8u2h9sBZE64L",
  "key2": "2qKsobHdfSLQ4xwfYAjFijyjb2zRx9guMFiHtLttHqhxpqp6SH7jdUg27C6qrJ6ZaGcR8tA5q1EpMutLs6Mt2kuQ",
  "key3": "5fXy7zJtCTe8cTnjXWUZHdEN7ZvJ8cyk7dRQzWZQZXWw8geFGzVfJBH17zJ2S3QGFayCZ9REVoECymBkmvtpCstE",
  "key4": "3Zm1R9CCF2s5Zt89vDcvbtBT7skanAFredtHDZqziB6oJexoqCh3fmAncB2U6SUKpWdubJKCfgtQQp5vg2WQUcT1",
  "key5": "5Bcqad9CwVF1mGigiBsFfX6AM5rccocw4fz6LGbAsEd2tnfmpbjH9h1KDMrTkzdb7HokqbxXM7QAkS4t36KmbDoZ",
  "key6": "5xA4xFZLsErHk9ZEbR4mBTVL9LE47ocrPh97duZpJoTpJjUWDPYpTYGXfRL8Bj4YjKP5VJFPZo84XNchK4GiEkYd",
  "key7": "4ieVTAkynReRhqeoEneN4PV5WF75rq8wJmDjNwY4rNxdaUZk2FNyKNdhLx6hsfh5DMDQ7YN6taaZ8MXhwrErERFH",
  "key8": "nX4izhMqJDjkQM5bkLZbhZNzJGKPxxcipHZXra7EythdDumfx1Y8oq5J4vCx3zsgSXDaayhcZ17Z1QXvUt7xQnt",
  "key9": "2b6aUpWj5e93z6dMKpSmnhbSTcpKpWgqimfRKL5BR5sSEMdrPL2JTemB4rQwM5HmTfpjUHTFUBoz6aPxwhaHKqmR",
  "key10": "2h6aiBrYi9tMQUh9XrEmZzVtVHyVv5iz4veoA8NsW5EFUZAW7NTMLbj23SsBDN4GC2JdTRZEKercVJjcWkJBV5js",
  "key11": "EHghyQaW1FxHcugjU4G8BYHiZCkUwEk83YAB2a1DgHoXi1mcWykiJzH3j4wWVauyo3xUXWKKFREtyV3WchMzYcd",
  "key12": "2v6npPxh4VHs5TwAFddf5UfSWhEpymQbVYyhNevydUHA8cmMC53xQsZBiZgxgPeuC4Q4fXEB2xjVck4WS7SX8pTu",
  "key13": "4fYDDVNzf7fmh8cNGn6HPbfva1VCcrBYeEJEyJDf5H1dVuuumG3h4beghExbjYbvCy5SaLPgJpzD3KCawNq8B4ot",
  "key14": "3rTAD3KiSxMxramwnB9CTBdTmyV5kyYyBuzEynnVF4zhNTyGYxmEXeTJJqJCmboxwv6xCXduUFVCa2fy7tDmMsgS",
  "key15": "HSHEg4AYXwXU8VNqCuKTcGrU1RubXEKHjdEVap7fENQu4PKKTGMFouAer3vRDx2TiLTBfbnkvjfr3DmmUYLR1rt",
  "key16": "4NRcJKKW9EMqSvV9LJfYW42bUc4kkB4rh5VgfPaiuc6Sj4ViUtvjKgkoFX1aVR7B8bza3gwhUgcmjyBeNEr6jBJr",
  "key17": "2usSx6Es77LHsxpYRkMYYrfEvT9nhy5BrX9rSySjrCs3QjbsJqzYKk31SXFaXhUyVZ8Kv5mcjpRqwrRkguvgV4Am",
  "key18": "UaVTWEAPgEWR2p1yRJxebcRrtp4ZReVsJxmXbtzWQgJmCDALSu4YSMMGanxUGF6AEWo5kx85tSmBKi37ACKzryQ",
  "key19": "3s5K9ASrnMUFnXv5EthLUb5JGhmbrirWtAfNg79sM2JQ7DaLKWY3XtvrdJ1C64vEz1K18REREv9grboTKyWf1XV2",
  "key20": "3HxEAEpLdRKgfhPPPooiYEDnaoif1m4MEqk5dKzwZM6AzeKPeo92vriVo5k9GhbMcD3VjFfoGcXm18jWw8RTdENy",
  "key21": "3mwJZCVydfuJxiUEGHSuqsmk4ovBfQX9u5v5eyTfG18njoP5AzZoqkuEWvVB8PBQEpMh3ZETTyS2oUtzDPKtTg9b",
  "key22": "4uBGXCEoF6jpcjcVzDz2ACrvQFzPSY1VenHLsHbAHRxvCHzW8un7HufEYuTeqRWfH1LBLa1jcbmHDoSMwBb2u99q",
  "key23": "3t1ofJjzySRJJoU133qzZj8PZWhPbCtKxhDohatY4SsvNK8rnLMnbSEtta7vTR3WasF6eh7pF6vWuAVYwBu4XNS",
  "key24": "5GA7Fy4UdDgfT49MyhbdwHX5XBhQkMrs8rsNFmTsyvZCCUEeoTJDSQaKUtQYwygn1C7ErNQ8LpkVETmPJnv5RYQ6",
  "key25": "rXRgqmrsVdeJz6dBsvVPkhcufLGNpL2M8heCFHD2HhF4AyGBq5f8CyXvpUg4WEqUbwjJabFJxnM8iUHKgi2pSRN",
  "key26": "57EQE3F8J1aNWyrb422XNoijm6t8zZNRyxGPng2koDfJhmTa1VHsmSNML6wbyKo64CYHQEar2JJqG7WYL8frsmeo",
  "key27": "3uPS1RzPjXxKmkbFYqGUYctvbdY6Wu8iVvrGNiwyJkAzuS4ChwzDWSxpnvS8WGnaBeWFTnh2siK7dXHSGBBiEDwE",
  "key28": "4xWWGjg7xkBBWmg38ZwsLMBvvCMtRsiLq4KcZtWjQ6Ctg8V4zrkJGdZ213SgB5rysXkhHmZeCkdKwEbnyeMiB4Q9",
  "key29": "3bzc6KCjfJUK2isPypvreu9byhN4YceYWposeyhzzniLnQ3Uj3XUxupskQ7M1Y3XBAK2uW1P16GBX5uoP9sk3FTi",
  "key30": "4yh8SA1mVoV4XHFpfxLvxmLq5xjfoGz4cjcjqDsbkxe3kytAsYv7HTJ929aqKeYdYYGspkVdVtUqiFHLcpSkZ3p8",
  "key31": "23W9Wa6tDqPMZeYY3kezxg75XA9E9GxfFM9wVP1AGK9HpBXq7wZY5BxZwbQHVoPfLouzR2dNFurt8zH5gYuJvWKJ",
  "key32": "5UpMx9zyuNSgfsWHvEan3rUiGUdSDgqjVZqLJq762yYiSven1Q5ExVQ2rihkNormh4qtfYnDRZ4E7K2QURb5DZ88",
  "key33": "3J1NVP7eyzL3e5RcXBx6SQghcoLC66tPJDGMnN5LXRJ7Ft54i3EVJvWSy83UP5sFKe5hvNfoet2XYunxRtsRuzaQ",
  "key34": "3zc51aGdsygH5YvDUtFg7pK6vYsi9FyWz6SE8d34JoHJVgmhNheFeqPswtoymmxq3Qaw2dsB7oG1ANwn35XZgQxX",
  "key35": "35dAjrgPLa4J4rZbHmbWt9ZxkewagjcTtstC55S2taquXUxs5zvTnfpB5RkWvitLuQfXyzdQydpjTdEFijfWL8pq",
  "key36": "oDhyt36n8CWsHtWQkFRTruFuY6PzwNfpJkUGhjiGETruHYiJNc2LZcR4jiDYhAPkNdbiBoErVfqiSzXwJYGv25S",
  "key37": "5mo7K8jzgj1kd1Yzpb3mK7rVRKUTMmwLEsMX9f9n6qF4DDVUWaphe4HQeuJjZVssea1xiuqty35HkeXuWvMnQD5L",
  "key38": "2hbw4vt6Jrx59Kvfu38h57uLyXpByJsQNjjAfXtrhnBDny4c7vivu6NynVa4xTQs4qyCWSvFJEXocTYr27LHnTCt"
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
