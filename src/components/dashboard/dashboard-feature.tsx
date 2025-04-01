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
    "5FdcJARtKszLb262kQueqMnqvv2MYFizqAeGbhB5crn2o9ZtS1Ur24YXYdGcoWr6emsKVWZGnWRPU1KYW5hJT2dg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4heyuWbFM8fNhPZoMx9M2JVQf26twrQPrR1gM66ECmxF3XcFxKAKLhbJznNUUUHWB5RUegpjSxAH71A9SFhC72Mv",
  "key1": "5wU7QkkboXEpnRM7hEMzjjXPHbPcpWsY6DsSD3uMVdomT2DVewHjW1RrG8zetZsQiJtL8owpPMFH2ViJqzJbw2vx",
  "key2": "2FoEH9ocaSMcRSFWD32iU2Rx7myYreCkaCaRey7N71XiEfGj3D8M1E44SxMPACaCLF86SbMt8feHvQuHpXxfDq2n",
  "key3": "4EH6KkNNSMCimQqKEESKvhQnC4zsgsGV1CA2kjWq5K8PstYyZh9bvFwkGCoaVacRmAoo2EY2fC35MDWKuvCj3Xen",
  "key4": "YiTFNxJF3a35EjwDa1Yig3hdArRKYLF2ahFeCtQMFa5UAMYRpNb2ZyTDipMib1qxeHsWYrGvzD8YX8dKJETYbyH",
  "key5": "5rV7F6X4dSyvuBYqnbscnFbmjGZuYQswiMATEA64N61xVd3zb6cXYsimqp778D3DUEattD3hPFNKRVMXCa1RGS4W",
  "key6": "JVSFcUGRaFTRoRv2EecTR4Qgbxs8BVwCaJfLPCHNRBJXszeWXWtTfiMSjJuZzeR91xdVj1wK7ZyqEN5VLht4N2X",
  "key7": "4BeRpeeY3XcNGk6a33X8D1ajc4gn7fEcHk4QYfCKoM1y9egvqUYAaT6B2hkEvrS2DPYD1vYepYqLrzoy3PoLfxvv",
  "key8": "DDusRYwSDJRqf8L4dAXCnF75aFyCo5CJYK8iz58bjY1Woid9VbvHtFSt7QaHejWoco2SyJqmq15H1Kk3cWxbMor",
  "key9": "34Ykk7hEoT7WPtgtbr83uzVgbY8WBVs8W8yGFvhcsVxhNQmFDyWc3DYPVHFKmBizR75NuPAh1x4fTuqznfNXLHCQ",
  "key10": "2HRJZqQHyEE6kstmWkPoAUMhyZL8KP5V27htxYVbVYYMGRhD6taYyZGAvSkJ9wgZv9eZEVF659hvrgt8bUdnB3qG",
  "key11": "2XfiY1DP5tBCnmyGXZXiLZ546yaNeJYfpdjj5ogPHbBwgBQBHdW6ChxzKdBQESQrKw3WWveh3KCYLJwaNRCSGjRu",
  "key12": "4z6HyUqDtqjM4NZoFDNM2RJQkAWDCNLzND1EZMSdH64UEQ1yKAgGh2SGeW3aJj98zCsh8rdaAVMoAobUPjzgRSLF",
  "key13": "2CXWtWmdUKS3wxxE42YPRMyAjX9pd4Gkr5yryr975zdWp9CRoVLhXE4Rv8skYXDgnqVsfWJFMTMEbzHQeuDLX9a1",
  "key14": "37zE5qUeXwG7nUaHokgULM7g4Ujc63EqxMqivC47vJ8Vna2f9xV5cXp9ZjJpGdLUjC1yhAAs65fsMHsqRnkBeGwL",
  "key15": "212ZdTWv5iRPQ9bTSNBvwpCrmcA3kFdhoz9pemnHo79WwAp2bnzBcx7HJQCx3s79KQbJPFreMMKD24JAoSJDysng",
  "key16": "22Uj2pxRKzsZdgN27t3fKt6GpNxdJvhu83a9V9jqxhBicJ5t14HWTgWy59N3EqE4bqopVTzSmDSXayuoNdEJCqcG",
  "key17": "4zw5CA8hnxQZZJLHziaa4vKtiaL4chcPRZQFGfhgREUac5wthLZA4zTfMDCyZTQLQiN6hKnMY1dwPTzs1sPNEGFU",
  "key18": "4av272k1q6gLxmWDJsx4qLtHot32dhaAoEjyJacxa3c12bHXx4hUz1otDc6X4X2rS4SguTY18YLqZkoga1YR7yp5",
  "key19": "2w2Q7A7Jh3y2QMQvHXKPfMrGcSi6JHwUZKKFmSZP3MMn88wQ9sFuTMNxkuh28zP65yvCdJATrEJEvoZG2NAuUZJm",
  "key20": "4gmGmRC4MRaRirfvkUWfWmEq89KuPZr2UqdbimKBqLcqJm4qyM9bsnXhfbNm5DAsbt8KvvAx3D3aspqHRdqrwdnG",
  "key21": "2ysXYeZQiYKNmyzkKFFD7bL3Dq8169TTPiEk327Y8tRZ2Pg9JMXCvZjUq8EKEV9D9mQQZ6zmH1sYuS18FNcYkFqG",
  "key22": "5cdSJkD9f5nmAfy7YQfR6Ed2tcNB9oRQtxVMeghL2NeBDdMTHB3dNs3pJgBvv23TMZJktur6NyPUr1HoCUNKoN5z",
  "key23": "53h3mCJFnyi9C5X3Aosv2L8ypuzyeSWUQTVupXqo43WS6C7ti4yQsi1WHM6zSKjMaTMmnAatcaFAL25s6YQVxVHb",
  "key24": "3QVxt8H9S65EH5n5LA4cHDmAoJfdKNtcg1KqGZKPuttvp6x6ajAxUGvH2TU4QazYTwCAkrWguH3Z5QrgDRhXvKbV",
  "key25": "5j94FyLk8kY7Z6qY5dGTxWP3bbkKHtDnfuDkfzXjNSzVZA6mWkYkgV5icpPNk1a7MTbb4wfCa945E2cC4KpjD32h",
  "key26": "2xRWqFucvXhWmiPQBLdxhWSUWkaA9R8Fmj1x38d5ecRi8qqAmopcoQ4JVgRNUh3oiYduXnwuECBH2HUhpKCiaVMJ",
  "key27": "5MkQf8qtJqi6rXYLoX6uFt9dSheMB77ukS71XkU11y2SHN6qFBKvDYf8WGdREegiePwtbar5JsWrwQAUieoJfKbG",
  "key28": "3D2YSgoJoynhmF4EXZHqpcHCh99G1PN9DEucumRHTt2j2i7wnUgpueVw4t75FPy3wTcK27WyHupNXwmm1zLmVzmF",
  "key29": "3oKbxsFvhSYQkmHcBoaqckd5TsEvWXemcm4AjRVxniJmDsnWr8b9k5yZCsAma66GAGt1p6J2jUZTBqQAMj4ddeka",
  "key30": "5WCB5yFnoj5UuboxJVHMwJky8zJrkLZmJQjmPdoQAQnaoe1JJsUzYiTEzC5CGz3nbxt3S6ASfP2c2SBojVaWvUfp",
  "key31": "2iR3nWCg3UuztYbQvzzc9XMEvLX1xKD8sNT5C3wxzjinV2kaSayYBNY5KXA6QBAGRHY2vm4LfLJECAqRVWJ5WqPA",
  "key32": "2hm7eXanwiTJsW4yqQ33nfBhzmt9pKYiH8MYR5zv8X7EFLr3YjaWR1JKi5gSRerjCKvmQL8dXra53cc43vN1BKqE",
  "key33": "4RMDJo2E3CUiBCpdCuMEaurdEg6fkPpKfgWUa2kmDSyVv42XiPspc93ePXULpvWJviSngH94CUUh41UM1JnXnkVb",
  "key34": "478gKSQhLUURsXtFYecEJNwqNjcPXFjKhFRNLHJ1Yyykth1PEWbApSf2EwXGycyYoEBNAuKyD9CGNDc33VdbLh6q",
  "key35": "2tA83N6PvBWbhag8bMxM15YUK9T95wxCv9gFY7327YGJFyvcUgUYDhJ7XTfCwaufW8fSxdnVHQXwHaFMgzKjew9X",
  "key36": "3LnncPV1Ag2SWDEtJz9AzcwLewTRXmwQkedXP7KmEUAnGo9Z25NpiZqwdk6pwLs4zsPKJ3vuxFk8CsZ7wfFaf8CV",
  "key37": "47Wu2LzbSV96P9PsDvUenuSTatMwFnaf8jESy1xoWwoW9zy79jV357N2Uc5FUmbPtVezLfyavXp3vkXK6CEGfqLw",
  "key38": "5UWwRVigPDJYFSYGaf5teSE3TwhRr7QBFX559Yiev7J8g3AkzNPemaASYHydHLa1MwTLakQKSX7ybjvcaXP14DuJ",
  "key39": "28HgW3Xbm723p8bbiqTArJpKC3GwJGkXucYqMDeaG23HnnKsbBZhE7SR1jauBgrbms9pYFheAzXPqE3iXr6XrpWP",
  "key40": "62JiYMSfH4amHxLrLmL6i14FP9aXFRgyYGzu5XjbEMwC1EiXcbm45Xd22UAK4oA6yJ21oTLApdXUv5j8nE6kkHuo",
  "key41": "62hNE223h6To1gZgCCkmwkpryQ2CUJG15YTin7PtPbaGSEGPGGJKJQ4dagaFVZbEk4TdzTh4rABA42XkUf5YAUHw",
  "key42": "3wtmKBVKu4bmd7XQcDs7ctA7ur7wiL6a3iB7AHpehi5YYTrkqrBzRNHRZYBFFVz8NmXQ8YiMGsR9tTYN8nsunAUu"
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
