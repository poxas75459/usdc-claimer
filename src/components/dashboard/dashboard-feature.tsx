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
    "TSgfWWxNudszKZ3w8Sme2hp5r2Kzzjf4EFkEoknBkwC9wJfTbKCLwMFDvy6yCAQQ2KYhn6zoyF234q84q6LZEKo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HMTjhUrTJ8CYPYCuSVS3Jh7bvy5haUNBw9HTBkqvtjVGSMXuLwXLrpfjwn82oAEcuPLHGvGbvj2f86zMEWm26oT",
  "key1": "4cHS5YZH8d7Lg1JNPURWJbX1X6hjQwPyb3wduU5mj4oMH6KG5xjfweQcKHY1tmUxdnV5LwBtfymDyC4jg4iFpwYL",
  "key2": "2KCiG8T62fPM6cCWUCT8bq6qeiNpDCwybi9wfCtV17EDz7vLd1Loz5kSyivwKDABTcABxMLpJQskVDStXXqHHwX1",
  "key3": "3P6QwYPToFsijicExUB5uYZyznDXG4YPjLBaeVpW6GdBAeQxaL3petwKMC8WX7LZjQ5WmNpypeVUTw5xBD7pqfpj",
  "key4": "5wXCryjjCuwKk6kYFXykQzYf9zM3ehw9uS2DtjMtd6j9FXiDawbwciQEKusq4bQQPRRWnBVQTzdkqmhVMpDSP5zC",
  "key5": "3SCNg8RcF36xJU4sNSiJtzU8ddwmF5GtAT2fA2xach8Z6vecSoqJo871W1EFqyQh1LWRTy5psm71RS9g2MQ9kAQR",
  "key6": "5S9HxzqNrgu8is89jdGd9BJRLRZMUkPn5ZV2eKVy1wETusA9r1JewLUxYWHiDsiHrGo18cePw8va9dvR8iBmxGKm",
  "key7": "2SkH7jYFBFtxFtyzhwXRab9SaLUZVW2BLwnFFTJrErspKoeBk9kA2xJ5S3y1AD8tb9nwQEjbdVdyFoxWCwuvurQM",
  "key8": "4MqnkhJvMChwPWVq4QAwoRqsQarnaenabAtQUXfZsrwTjdCvFX3FQCg27B1xqduvtTJmGGTy2zYTYPJ13vQeTTwZ",
  "key9": "JnrNZwscH5ML7BRzjPDiXf1gnrbMVJMVZV5vLpZmXAJmwETo832W5ZELzas2wz5hLHCdzq9GNA4EVEb7hGBJpdP",
  "key10": "2yfHsDDA4mmWk8BDSZWpTgEXJd9q9mDPBVgvvCgxTLgUVDZscDkp2NgDV3rR426BfhCdeMgBMNwAvFrKzZQ5GN9u",
  "key11": "3hg8yWtpBotgB7NpYTVUdDy7BeK8hL8DiKs5hnC2qRDNsZpwE5HbDp1HBy8LdYv3vKfAEb7B6uVPrnsbitz3tFu6",
  "key12": "cTh1wKUQTRCjdXfBpAHyfwR9S8NfLTjxiwwjKoGrdghwvGBPDqswu8Sjfo7KambXL2qKs2W2fLLpgiZ4TtctrZY",
  "key13": "2MCw33vXZWtge7bzPkHnxSeQ6KCb3JgvQRbeLJbxkBubyddcUhxQDJCGVFDHDB7VqoTrMorxT7MBmBXCCRKqEQzU",
  "key14": "2V19wV5UHGpAagw5sjeQCBt8C5oAyyqZDtQTYUovuzX2dzSdm8MiEr1Fya4GkPzZto78MYdgSGQo5F3dKenmgQgV",
  "key15": "2jcpkhR3VvpcbR8VbcbsGZKppujZhCtQcewDq3uDJ7Fsc5HZqwR3h4tRRNWHbzxGLzoksGQZWrrEECg6f8VS5bBa",
  "key16": "3XZwPsFqswxoc5Ly2fq96aT7EBpuSNnwj2HHg2T5NcFccryQgBg7AMDjbsgrzM7obhdWxvzoZxxov8dqG7xcSR6r",
  "key17": "cKrWq4Taw9Pgjjcs9cYFm4yAbZg8xUfShcWrBQ6XUsqYjC7aeRGbH8MmD1hMSAJV1891qNKn5EqAtsCnToHHFjx",
  "key18": "4ioAmALnH2jhbMgyCFcuYSgtnvdE1bRjxMegpuFmcfmwdepDttoNVtWTkxxU94SuMSYkW6nrgXyWutJn8WqVgMgC",
  "key19": "2s1381WpvaKXHvApa2g7TE4mCoHCzVecaxCY1CjBrFLvbWEnTr7f289iRmRsZdpbgsexnv9oAGjcLvaE8f9Mgptv",
  "key20": "s8ZM93ojrUzjDXiqe5ak3dCMrJM5d7saULAYY3Eh5y3hHYfnWgwLJc78rSogvD5KnRcy8bc9B2UvNdvJL9or28S",
  "key21": "4D27jrXcq6TodqHJgMXzmWZsSfeZTDU3JqMCqKviJ641FJEDunCC7xb7prziUmNc3weBrw7Rit6GkgciFQWMLMiQ",
  "key22": "3sK8M51NDTxwHqmbXQ7K1ffeqLNZURdRKJH9RCJ3TJDL8g7MM9CkS8bDDVMQg6Bvsa5MvngEoyWvhXQraFFS3fzu",
  "key23": "4ms1ptLwKpNjyviXdi3Du4wM7p4dcpKnNQVDESSzbfThKhgf7t8wwhjFhyzuHUBuQibmcNiRLpK6FXriSQs4p4Hj",
  "key24": "5iaiCjzPice8Rn8Ds3TbmL3b9cstPA9ydnaJ6E2ZvurgC2HupP6j6EgVn2FB3uvSXsYQFnoZTsskUekaQpM92wYC",
  "key25": "e2pmtxNZNiJqHvT9c6w4oPRhNco5P9uF8Cihku8yCnGyiZorfc45MpCyz8SBZn2BYFxLFMtgm5NDNsJzpCEQ96X",
  "key26": "3mfRZ5XHSECqXqePHd1SE7ftJDncutdiXFGXEaTNjfpMo69oNGKh7Dge3nMzjMKzWJg9VnXw3hDoqNQ6Q9DG6Lu7",
  "key27": "3dKQxWxeVT1iLUTvAZ3D8rSyRnb7sjJCxSSMvDAD4J58nfB4i46jgQ3Mc75LE1Bces24eaHA4ZSnPKkkAKMqQaRa",
  "key28": "4rqjQEGX7zbNkGsyKkrERXPcvsAtwj85n9UYFUWV1JnDs3ZM3u7oPuWHMHxPXetWHP3h2UsmoBCreZQmoANgGxKT",
  "key29": "2eDTpg3wXQVJejJaHJfM9jjQLdggGaUnVwy4gbBLx8MrBmkk2Zm8CZwRrodaybSHcSrqeDuykb965aevTrsAixTE",
  "key30": "cnkNfcarruLWKaGx6jpwuyhZhQm2yGBfvFTJN8BeA7M5kTDnoGSxnSG5zgRxJAoCj6vNaaBqbqAaPKT1hMbZux1",
  "key31": "2PU2hxjgS7hAjPpQaPriDyrxgfthYNBVcXtaAaAiuWDq2SzH8anJxrvRzNnEhxcnZ2jSaGuMzQ1jJ83aEynVE9Rh",
  "key32": "TUiGFkrTqaLpnEhAjjWvEsM8AEyFmTeYVqr4EWbA6xus6CWAW1fvQyWREYNhNCFuNJwunpaSSCzwnRrW5ZGaiDu",
  "key33": "5ZVpX3USmtewAJb7C1X6nD6bh5XaHgthKUminhoidUxwKaiUsktkBj4nopqzACi3pdtRCZrA7EaQe77E8ZmcmdRK",
  "key34": "4dDmBUVzMySZ69B9KiJ881XUkbmGsaZizZbBJ8mps5iw72iqR1vRgiG2rSDb7jDtVdGY31fuZobnQs11MLiiqaXW",
  "key35": "5JTV3tG5W1XEQj2kvAinMQ4C6j1pvMNRHWKAUSURFW4bJDeAyyKSWNmSB6VyL4qq4z4VvVwuQavNHxddvPJT2trv",
  "key36": "4L3dRLAMc6Go659A2MieGQRj5PHMciYjJRwGJu8UHhhjDYNsXAJ8VsUMc1zLmQwJgVZXQfi6D76Nwk6FzjUk2Lo6",
  "key37": "3uf2iNvcpcdY5yHi4d7BUtAvbhUrWnkW3DDejYyFqPfJtRcR9yXi2fopeWBPePSWGCoFLFghyekhFqAPVrFccgew",
  "key38": "EvQhVr5H9BXtTCUX13i3rZ6gFfa3EQcJ5y8kMNx9A4jipoSnGy6M2QEgLRCZWosq8MX8P4YMpWi1RGPCCVtUntW",
  "key39": "3UcVReu4pg8w45EPYQnTVBNAZoxGiFrUJghq1R1XUGS5uhBZXWxJuQa9FRDt1GJaDKzHmmKTMxwuBfvz3SjkUD9n",
  "key40": "2cDEK79cEkHj5jr33bGFPoceXaugDZT85EFfMsV6nZDN9wZMJ6ZiQFtEjhGuDjwq95jHLcrTfTcPuSSJ1yRy5ECA",
  "key41": "52CyCFRWP2M1sDs1yy491LuYKfU2LWsqSK29iK2397CqpJGLWYLbVp82nwX9D8ie96zqUzvz3dSQ3w7gvdUKTiVp",
  "key42": "2KdwxpBDwEMJCyCD7MPvafh38fSFSJidQFWCs56ZmaxH5WNtec4rBuE2bo5fbP57YFwVP7oNN2AcWXRDn6XjHpbv",
  "key43": "2ebiTsjbzJXJvV5Ei4BcLC22HjKdeut71P5PJnEUtAnpdPT5xfrrq5rAkvDgTDRNFpUw1mz88GTdUeq4eGytzBXJ",
  "key44": "5PrNcwLTbrEkCisNCSrq1U1HWCHqTqY344VQaMNHw7muwDrt9EUXoNrSyyvGTDdGotzh6sZNL8q8nxLN7PCgeB5k",
  "key45": "2ZqABn1ERUQgo2tQLvCtPRMzLCe3m3BCjDMxEiJL8Z7RNPPdTFGAZfwVzb7VGD1k8ReR1VNq6dcMkpgNemmfFyyA",
  "key46": "38DQEjc7FCPBDCjPXR6NANBad4bb9gu1wqwnSSSWicnPwWmeuZ9PYQV3MXY9r5tb3eyTHXEvkFKU3YWZLUDVVdA6",
  "key47": "5PRsgQfrpG4mfZLXHmyYRPWzarapLKsaudbt8v65Vx2udfcABradbtJ66a5eJYaU4aSyDJBav43r5XAdaPmJUCYT"
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
