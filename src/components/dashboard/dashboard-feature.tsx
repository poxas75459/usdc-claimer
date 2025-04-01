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
    "4pBDYPzES7cjJWU2ByKBbg8HBBLUxNFDBHqBienHGCuthGgwKdBR9tMqunXaEreypHUkzScVz9iNriGf84L8zN3q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UjV6SCYL1g9QmV9ZJK6HPU5pcy7KnpzkQmjHEcGuA4zm7iQqPYnvHDZKiPUycUWawE8BMHqHGsVRLWhuHGwVuXH",
  "key1": "ubGkDMJ422FUiqheF2W5Vr36aHc12t95uPL5QbfLbJkpxYrpqwN5jzqdFv4Gy6JKSypvd98sjmdwD2aNHkzRd1S",
  "key2": "6677be83CJGfDKgMfvHk5PpXitEciRxHerScEnq71otqmJmeFQ4zQPTPWARLcXoifa8iq5aYuX6BRmdgYYaj1ef4",
  "key3": "4t1nd7U8fMpfW3isVtzNQnZWka712bQ1GwCd4U4YMcoduSZUigoWokdwGnyFDdAffnEk652w5yjs3ZftRjUkPnUQ",
  "key4": "GGQ53N4utWKadHJHH9DyMNRiwvd8HL5MAzp52gQJKwfRGAiS3bgfuhbahh5BmiCY5Yg9RGZCYE3GAQ8kqc1jVS1",
  "key5": "5EXfaqjPSyGURrhV6hyFYgn2CpD4oeFS9WrGWTWvZy3ewbj5tPK49ZbLHHQYhyQYZHQCcwttzduHL9pYFFJXioMM",
  "key6": "4TvHzjRZx76WUXNeL3FjRL6DzzZCdC9BMtw1tSHpSnTXTj3TuNhaSqwAJyuYLTk7Ua1swJSGobJJ19ydXGdXLKt8",
  "key7": "mCk3CkAbS6Z1xx9Zw5msYaJj6bCq1y4dDSyPbqXSaBc6MDcwAAcb6xRsFjTKx9TVW72FLJfverAaGMwaPZAYC2x",
  "key8": "4pB6UpvnPPV1XSeB7Jh8HkAjZD9enKGKnVbc5qkRiz9CGjgRs2qezx85oh3wz83Z6NNRZHNEJ33fc7nRBV5ksLQP",
  "key9": "3uCNo8wRFLf6JDunAiLf89Bda8h23WPpsCZzs8s5HgDZv1vEhiNz3iZ9W1H34b2o16fDNU1uDX3AGKZQefFDn9zk",
  "key10": "3DNkCxxD7ArJLnXbYo67khxfTH7k8rGwDs1hjuSQQghD6tJYVvM1f9o4x3YvmgUGzHBibCCL5kvo4yTT6B8khPxT",
  "key11": "26q4PbqJdMmU7TqqFK6mpY7C9XrxbmU1dUmVH5QqBupbwQXP7edsCYS8MZw3v9S8bea8txt5jY6HDj95y7fEcd2o",
  "key12": "3sBj2WNi4mXt3Sup88jymmwL1G9oTu4PhYYoxBHoqZVTAy65HLibB9oXc4pkeA7qagU5zgAreGSkq1wn94bm9LAn",
  "key13": "V3fSbJuMQU4FMGvkp1Jf5NmjWQ64CtPtSemoqeg26n1T3nHw3UYRveyV9rWE4S9VmuXFEw3Yu7BYnD5NTCtgZbd",
  "key14": "39F39JZumMvvNQJt2PCZACE8zFjTdXFYdvbmCfuKKfE7dTagXBG6JNCqCVVUkhHZt8nZMMcsxNALhoEiyPShk1Jp",
  "key15": "3zxYactrnpN1hXA4gM6YLWSm6vH6dZBCzXEpQ9yWS6fJvrjE5idvPFCuEYjf1iRFNY8bBM25FvctSFS5um32tE8W",
  "key16": "3SSswYfVMSm7BZqFXtxqcYKVrx3FDJtCxv8suHoTTesPNXz72LmVXWqBEXoyrEQyay5y9fWKQaBnxNS4vhtWv6h7",
  "key17": "3pTiTwkDUpbTwmB8YJ5jzUjsV53aJHioQi7qCzh1qRLDPQi2gnP2B1Cg1gAsVvY8i7z9PsnrWzDo9cfiNrDoL5ok",
  "key18": "3uowpbJKhRYHgnwWgQM8sC2w9AjS9nzqiUGZbZ8RzAUkQ1H3qKs73wA7FqyhgKGvzQmTnPntNnKfBpb6enQ4i2X8",
  "key19": "67RXfpYmv7ZZJUB8sjpWByE4D4KPsWuJVz6KbhDQeKd5qVKxE8bfXHASjL8PKorkaXTcm1grMsY15neqFfx8LF7",
  "key20": "5iUgXVxTShpyLAN8L4BLn3sQYdo5hq9fVbEJNywVhRkSfgSCT9cSQfoChYs2ASLc64J5HNpELE5ZAPqpgQm6tJuu",
  "key21": "2xKgSnHmKBKG9x5xjznZCuKHpVzxMa47FzamBiHWFPwB5QNVP2z6hNoU6DD3ZCyQiEDGBp9zc8gX89ha5ezehCWr",
  "key22": "64zG9gyewcrxfWRX6Q6ukxMH7BhkAKmqxMZ2Qbz8UEoEzgda1hcs9oSPRFuNyAxrLgo6vLCzUPQtUvBzsgMis7y1",
  "key23": "3mUqY5D4L8N4VVhY4iBoN4M3vbN1dqZb6MMAXLtsRKHNB7G5p5ShbeiYEAonFWv7pyVkhAZA1gbvZeKZAq43JB35",
  "key24": "3FAXYoqkmhnEmrCQdf5PC8MoNkLybAJcp8q5JZtgjRgRj5TUrtSBscsN3M82e5isVrnyAN9VWroqVgF1wmcGfVJk",
  "key25": "2faEuymu1TdBgh8Ti6aYFshX3o6HRWBJBdMWDLMrzap6N823vh9cP6GeofyYp322iaSt9AgBpoDkMF6RniK46TJ3",
  "key26": "bpSrxRoWqXzh4ZmQv8fbRajbBUBUc3Yaw3tznrbQ8E9eE2sc8NkFF9wMTg1UH9fKvqESW93w47W749zWaBn3vux",
  "key27": "3XY7nB7D3b3g3staUhxCs76xUAPpZiZafJ2HnyHwPxPrANoXg2teQbVwcr2jenc8s1DXzzNDHenDhmAhSQBiQRmn",
  "key28": "4VZeXTsZq8sXhVCi2KTrNooVV51xVjiK8jVRmf5kqZscKo4yMjXYfbFV3qBjEJk8UsN8XAtDeqTwJFteFvvYowHi",
  "key29": "61enRnfUqT558feNymaA2AwZaAi4x9bGFiMnk723eY44CPs3mftMopnxH8kWWu3VUkzppBgzPPqopNGRmueKgu4J",
  "key30": "4s92m3tYn3xE7ZAaM2mysqkEeU3Y4g6UeQg8HqnPtJYAju3jW1JEcLYi8u8Q8x5aHoTx1qokixtraAmB54YeAWm4",
  "key31": "j2yhGVe2iGYXLN6JjG3mLQ2nADFBeX6VUYEiLwe1mNjKgnPDCti9LwFoWL1hwFpRWG48WiznF1YNncCwxVWjbh3",
  "key32": "4ZnFjmiWUSkBdUBwN7qJomSbvNjSTzzkdWWZYJPpqgLhyCpY1AvxbcBz3am33tgAqLgfmPmt5fXFMJGGytMUt64T",
  "key33": "4Y633N6qh6RXr9XmtcMYNdhJkh6deTvFNwURHWfronjwEtVAyHmu9L56W5tv9yFxf3yoGcb3bubiMRmVXX6VHBUC",
  "key34": "5A1nYYRZo19j4MkpkzJU8FLeA5rmvEXC3JaVqhMgwcs9ibz8tWQQBcXZr3CtLFNk75bmK48QjaymrfCQXo99WY9N",
  "key35": "25epFVV2gvEy7dtQd1VKXBKTLznGujS2JrMG1sXqxLjaiGYyHKMTk5JiZSGEbj2ZcMCsk1TVowkUG3MJupMAHyx2",
  "key36": "HgS95gkDQviBVbJ9p1tudodz7x1fPpapEpdxTxwNBmE4fS5oFjE2UZMdroiZNCYfbUiKCY5bCauEtS2yQZPqBXW",
  "key37": "4rscNYYPmeUFXo5ibeacnBZKT95nN9p6GRW8CifsvcbDmpccHXiyZCiT7zrq594gLJ5q7xtcMs3aX5a1oe8Rr6Nx",
  "key38": "63G3qqPUVgjZjSyohKEWGYxy3okkxQRPbGXPNpoh86VAySzKzUURJ29niMaySHJWTqZE5guATotNCXAQagKjkfWz"
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
