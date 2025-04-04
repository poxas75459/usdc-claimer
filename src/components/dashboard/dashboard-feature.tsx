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
    "3ig2CthnizEP1rNzpgXxh6aVN6PG29aYbSqpBiowxzBHKAToU7EXNcoNf1iGMTiHTWTVXEjFk6JkfoWa9GVhtqR5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wdhH6gbtmdzGUZxM9PktmL1RTU6AbEytBJcAR8m6zv7r4bVUhmTzuanNQdEPoZaVCWZ9ms41dRiyr3t31dBB5Yt",
  "key1": "2rmoVhT9Cfxp9oQDWwwDMvFDFNWDECAG4FeJnWr1qWrKwA88PUfBvyRnwE1zaBvQccDNjsZcGoerC5Tx5K6jzeCH",
  "key2": "3D7hDbAFFkELVCe8N1NA41LRd3dKDLjsDpkmRztT6QLLZYC6HKY3MHxNkgK5gcWs89KeujP3LMY2ALuo38fsSxQW",
  "key3": "4FThih76WcBhVBdxBFxheCAUQrvvcQ91Nz8v3JU1kPxUELvjxSi5fSjVdBauEBnJnMGi8FVuHL8j78Rp7zPiehQw",
  "key4": "3kbBjjqaTTU9ZZhc5CvWePsH8ACnFmtP5qU12FHtbsraYa56rsCRvKy7z3iYfGaCErNkxjARKCcRnd3Z6GeNBgvw",
  "key5": "2vCLcrP6XLmxzNZxi9Bmq9SVFTQkYBsbAwCGj4am6vMdnQDVed4yiUbcvJHbPjKCT9DQCWUV3bWpmdsdTUxmgY5w",
  "key6": "2NYL9ApaysmHfGBvi3QjUFnAcAyq5Zes6koZ9J614jzcbdJrS1ACFXefdrNYKTSZ6u5AaHqT4hZfhz8zWQsbdHN5",
  "key7": "5qHfBMmDsoKbyoFmV5bqPDHdY8N8iMwHXmVAiPvC2ARDzizqgjR6b22hSpJDRqchwFjvZAtR9FLVRvMDA5EdTkuW",
  "key8": "Y5aotKBALoaXYkFKjhWg5qisgkbjTC8g4DeWg4Li7gGKyuPU9F1FPfvCycqePh3GWncA491YzHGUnKHAggBxifg",
  "key9": "2a7JuZ4XpHUsZNpSQL6718AxKt3nygDYk711rPp65KTkGq9mKNDHgawHQetKYeWeM5bREcyy2q73MtjdnLPXgjoZ",
  "key10": "3fa3iJyWUBkungZtm51TqaR9Zg9eHDSCS1SrFc3KA37kADqcLGZ3ZmnZpLJvQhyFm14so9iacCB4AzYuE5Jk6dkm",
  "key11": "1Zss1g5BvgGiyDCpjFpDp9s7eEbVoQyYa4hoenGThbYm5XEBXcqNKXe2FrkzGXETzfqKL28RxMEkrykpizxSYg5",
  "key12": "5DeQeUWaTLQBhYjnwVbHF5XRNU3jm8i8nLKvvCc27B9cyubD7wHVrfFRR5HFjBmopZpbBPZrW1dWGyRJXjBQrFm6",
  "key13": "9xxVDEuoyAMuUGGoCkHYWTLvPQftEQ1RsXB31Q2v95FJJfok4Ekw4weebYos5YBxkKNYH9NZqwmDrgxphxVE2Rp",
  "key14": "4nYLXRtybC4GVPpaxwWYDwRpH96kgmdZbaLssSZ7jyobUNLGKNF7oTDXusf9AJNDSeexskU96M8gpBqAQVFRCeTS",
  "key15": "cZZSDkUb6Rwgvn7UhvPkmRLWcy2gPCJrofHeWX9eCYhQGZWTXGCPCNLNRk3CyhWq4ZQrYxmdqhhwi2dspinVRYw",
  "key16": "5DShVpAFta296mmgpmm82qpfFX4z61L7xk8fR5BWfN2j4dtHWsRfk5zkVSaFSMjn9nV5tz5a5Eha88frnsqVZSag",
  "key17": "3sJmsE8LUKF9Vn1yXpiM5tnaSXAEFqPBnCWbw9BQtVmQZmssPXGKkw7iU332VBZoQ7rro7SViE48skL3QQWaT1X3",
  "key18": "4zEf3aMWR92tYuo2u2nQCDy2wXT58SvvoEK22KNuoYxkG8riHrGyRGctpzfSfh7oZDhKj4d5Dc2dxfQZffSmNAWg",
  "key19": "5wwdYZuXEFbvC5nF7S5KssudMjTCQwAXiLfZYDF3kFdikDqixuRWaY8Qy9p3xhPnch8SSjXL6yL9pZZYypSj4mTG",
  "key20": "3u3tzwRyvKAoxpYfEQg7UHCpigUBL98wNcBz7AB2io5CdueDCEwgAyzQ7w2he4Ny2y3tMRYpy3vNutPPz3VrUBpc",
  "key21": "5nCD3Q2rjDz5jR4xfvGa88vSGvcWCgAnZP1hGzhfngHJi6i4ihDkjDXLvobrbpzcw2pUFXczJ5qYBU3XewLigKVL",
  "key22": "4Yhqx9dP8TG6VboSdELyBiX9iPvCaZcmY6wNDdn8LfSSzvWP1GorVYWFUtiLVdf2qsLsYBAR9rq3x1JnprK31MKR",
  "key23": "2G1wQ35vULtCSsJsPHbTczkH5tDyiuTdQ3Y1B2azhbKke6BkBGPccErGnu9jwdi3cAJXLf6DV8Go3Hy3iGK7cp7i",
  "key24": "ebmjZv7EPzM9gZGinXwia36WHe492w6eNTYFHewwmti9A7RwSxSxxBVDRtGHiBkYMXrEmc6M7qmHRMGdqKw83iq",
  "key25": "mjAfgGyrhsLTYtd1gY7TyVDgGh7NUTBWsBjqYRNM2faaZXasGYHbPqx8Mkrpgnto8XFe2EBRx5Jg5o8TXr5bECN",
  "key26": "MHjSna8LXXuUL3pWQe7xGQTPW7FWWPGWmAdexhN1T2g7GvRVbi1vJQyadVhqdHnY3ZTruvY9n2yrfxQHLjuX1Dw",
  "key27": "3fBZkepAyAPXxWGz5TCj4HsrCH8JtBsV8qXj92K7FfwuCkYuuZTog2bKBCNv2kTkQvf5zno9WMB5NfDfRSzmHYKf",
  "key28": "JMQ3DKDxR5RyUcynNTNba24adcjvgJxQYmeeQr4L2TEYgrXc8YzwRN5MVtrnBJHQXyseg2YRsFqr6cHMiQUMrgH",
  "key29": "2nP5Q6gX965MMiqvxADnWEwEtmaZioxAeoqJnRPxzP6wzbc4JffgAnJfwoe3KfE2Qjdez5X8u51rJ6wf6TvXfDD3",
  "key30": "4J3bCaqfkeRnbFGA4YaBRfxdpM4W4cQL41yo8PtEY5v8dNMaMTV94pzmJmg3DtzySHfZyPGsUqvGDwb8V1YBeDuS",
  "key31": "5DYjV1A1rZTzxSX8o2L6xvcGVoX2SfvvfEiBUee92EZToJFbRPZhvPxS8EJmMzhdNHVewDCeD388f8yS5rDLMWsY",
  "key32": "44kSRLH4US6d8Difn1kErzVZvrUHbNRbxF4DaApoepJY8uNp3wLyYwacDKUp9WsNduGZ6YfHxaka2N1MqCVYCxBf",
  "key33": "2uPToxJhPagPvyLA4ErU9NytQyPDYu8YtJXyxc8DWtH113EfzFK6FCtUgF3BXc2u2GvDVshhz4dkSevXCTzc9vYT",
  "key34": "2PpaDAX9r56UeRu8guaNdNRwzdoi46kXV3NtvNn3LZesyDLicPhdikDs8mwpZa9EJEr6QDa46iDdsu9J1BGdyJhL",
  "key35": "4so7H33KxP1MmJnBeb2mecC1p4qDCULmqaHyMx3NLBnhkWyb21UvSND5XucTGKFRJCPFnMzVVU8qc4438tqUVQsJ",
  "key36": "zjLdhutNd6VP39vXDG8YF2d6Xz5EKvtP3YrZUmzE6VryWBchT97pyZGJyEEXT5CZqJAYwKafHj1DoB1gxbbiNeb",
  "key37": "5ee2S8jY5gyCMaz2XdbB7ESxzapd689QMfE4KjgPPJv9d1DdMYhUerhCNgVnfs1EdjL4CrzT3dnQPJciyvW6Rbcm",
  "key38": "Nb9fEtsrWr8HBnC9KYV4HvSAU8GpXSVBHoXycsY8tyGu1kEBb6UDxguFbZgC3Zp4o5vRvBG3g8mZEktuj8BhzMU",
  "key39": "3LxJXk1s5xvQwgxPpNL9axQ1XEWM1F56Ack7xmtTsvzGLv1gxGKYrYxgMKxFqJ3guR52s3PiLU7DgLtsPmR8mnsF",
  "key40": "3cuzv2T3RAH2Bp6ewMUB7o7tBFhpbFQ2qiVCCZzKjEx2Lko3HNLgmFQQ6poiD4HBZCg2LJ1AiVGj3H53xe2VT6bD",
  "key41": "3ki36mtRELtkjufCs9htE8e3DoSca6iK2FWng6ZBjiWsfWvmCvx8rZtnVh5Ckw3Xt6AuVfTKMTiuoVFSPzzpKXNB",
  "key42": "37XB471CMFP45GvYzGzK6HyqgEJ8xgkApApqLHK1Sxmb2xyH25wtyifWqxx9ywuSfcwsCDxxneU8p2es74QoiYEw",
  "key43": "3bEwdVQXkdJ8urrkFn6YvsakUwiwVdSbMd7trgYgYBh2fe5uyPEUUq88hGk2D1DSx3g8qNGoLpK4wuJyYcrmzX7n",
  "key44": "2zfCdQk8nvvUmbF952mSYM4QBrTSs7pcZxbPK5uAU3spBigzx3uvvgmEoJMMKfTzgE1pPQk8utxCcM8TqXRDnXNM",
  "key45": "3VpfEAhEe5o6RNZik4TVsJeDtnxvfMzaYRgzENZgRpFfVmkkkHxdWNdeNhQHhBDMzV1znXZFQ2CHe5PPacEhBEK4",
  "key46": "64AwZrGHkrB7X8ixpmuQaGiRDvJhm81aMyuyw6LSWZjjGum5rGNyGcyt8s7dwykTPJWd5XmPLEodmtkbYwfoeZJ1"
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
