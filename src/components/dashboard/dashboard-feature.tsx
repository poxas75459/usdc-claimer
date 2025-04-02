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
    "53zG2Fwm9fFroonZmkiwHEfG4cmcCxMgWhDPDPqqa5s8vDcwaa2jkX5SCziFL4oCqGYrHBNoi5NQcmhYKoKZ9bFc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q7zAwcYbK6vbkUBdjDUezFPefxwKwjuEnFcCD2d9LjWMMhWcFrDGASNC65yAWefi43m7hZ8aFAD2vxcws1q8BT5",
  "key1": "4jFzL9ANUCosnnWSbKy2r3BD6hdpNwT6B6LfBPPaL7NUd9vXKAqZmBszSiQHCj6jP7gpPxGiJU42hMe9dxdoERRZ",
  "key2": "2u2YMbKh5z94r1NN62C56TXSkS49eazPGqWVWiTAGoXjnvEUumS1VJuE4PHWpqvRNaUFy8UJiW3MDjDaoZ5hJapW",
  "key3": "4zSM5HD6bc7JCAHDrnwi3Xm64EsVZLFqcEAcSej87a71e4fan9mt2cXxSHkMnK5TNMSZfWhWj9ncn2LjGTFavLAS",
  "key4": "4oM2DmSqFaWkGRsoJLEf2w98cB75zM53EqqjMzm84kXLCNyUKB9fzcDYiRXskqCo6Qu6BzncirBAaU7Ctigm4M1L",
  "key5": "2nvzpGwzquUT2i2u2Zuni8HERLijMgHVAfEtpTq8zZBFDHqTEpf8hkmypErx1GxFwS2EhkwUJeQysfTDNaZ5WDKZ",
  "key6": "4qnHYSmD3434bqzptAwsGGNh3tfRkLsiEheqpEq3nosuU6Eke3Loig1UmCXaAHCnGjyRKrG179DTwHdePCvGygep",
  "key7": "58qwnSeRa4z1ChEVic5G62LRsz33gufHxuPcnxWPnCasL8WJphfzeBWK8obL95TRK49H679Kydouh12rNg77Fvi8",
  "key8": "2KfDQRCrNSkwx8UQqj8KRkSU3pnCZXfgVmeWtwPAeLJN3zSQn6yMhsZTEB1z3y41fTBF14iJTiDQUne9u9cYnkd9",
  "key9": "RCJLkQr1Lrx7oYKnxXZd89VCzwVHD4SRDU2vZ7CSFgBCnaYtuHjhScbj4mRUyZjELm2a3EowGNCcM5X87G1Zk8d",
  "key10": "5Adtz1q31fokWDbxZzRQPQ7sgW5PEM6otXHbAdXocxiyC8F1jAaJVysMHYa53BPgEZWTSitG1jURsRipw3uSHhsn",
  "key11": "63wAxXfwVXK7Es4ansgZGVNGF3g2wx7n8Eif1eQmuoiXZiBrSzAmcXzksCgeNRYsKJsjRLjntaQLKYRtRBfJzqWU",
  "key12": "571ULUotbKcx9LHgiHvuZdVc3DgWRTe5wvaiZMGusBKQ9LMmFJW2TuWF6kN72gekv4EyEZgbTvboKHgRo2Dxnypo",
  "key13": "551GP6HMJNkQWqhtemCLWJXhMJ2visV8HVd7QZMTe85FFCybwQkt9zDTtXgRZwwxeBPAq4r9oMzmTLoQ5PK7ZASq",
  "key14": "8FjVT9JxLeE1sfx2MubHQvBJkHa3JSema2tShAPf3v5dibYj6JQNjoKd1qZ4AeeKCfeoziNh4c9myd1fm1xXWT7",
  "key15": "53BnChY6W7XzvuZbwVyHa25AWPaAwU7SoJFmgEo8LMfEzjXxxhFSu436vYYtUS4pjGaB6eZ6okF95wgHpKxoBYsF",
  "key16": "4jMTEULLBrEJ5R6VCtuQbN3NLydeUaR8s2hRHy9TqpHZqYP5Rm4BfXuCU2XibARLBSs859yTyxCRjEYGhxHjpfU4",
  "key17": "4s53rDov1iUKvSPEaCyF2VBpkjn4uY23kV3LwzrrvAf28jmYf2TbAGPwn3DMAfMbQxKPTxhbj5mi8qXvmt6HaYdB",
  "key18": "4efZfnggEdEe6r2DoifSrmiLC7S7VXorZBpfXwR6zbQecSnvt1Ki4QNmMfkfvoXBJMRjMJ12dTRQ6vPbuAw5ftvF",
  "key19": "2DctD7ZrDY3sRtdDnzffsaLKr2myE6zbaXsneSboG95Qb6UxvBCn55reM78d9XEvjDMYnVQnSP84Rzrtsv9Z9xWK",
  "key20": "5VEQtaHPRBNYhkPZA4M8F23YMnzJkWZL54AuSUBzacPmgGu5oW5WL7haFbc5XkQrU6c2ismfjWQtCnpsgkPD2DwF",
  "key21": "2dwipKszoQbN9ewsPY7PNnrjFakAxajvNkBGQH7CP7FoLaUYhBjck3MswVzn67HhT5HjgQQJG6m3dPrdoouM8LBy",
  "key22": "o32bAn9CowV9A7obqaZSGqnX5VzkpavKe7YnzLEhZcPnUASUrcBe2qyWvSoxvL5Kz4eNwZge24djLGZv88o27yv",
  "key23": "2Zj7oXYM74VT71LffafWHaANZyqS6ukwiDsFkwx6aVmaj2BCCDMfaZpG3Juf7mcqa7kiQgSidjvrD6nHq76XLw1u",
  "key24": "2vrmKwAYGtoq73MXTCSgpq6m6X8CQqGys7mfh8mFuJgGSPAmHJNTcjWaRzCj8QHJXqej89uZ4qRbHqotNKpXXHi1",
  "key25": "2cLXwkmaKSZTnM6QjwCZYaQYrdxxm8JCsG5VW2LGHVeKPPQ2JiRryuSycQV3PueZZxvKzMrgi7o1JXodMsNay4TW",
  "key26": "4EjyCQ1Dvm5FpCQigubghBhdNupystsZauGi5TWXVCP8mFHaCaqmuS8KUyjp4WyoWiCu7EqQLaxJ4qqsbbQYwUiN",
  "key27": "33vaxCwuk1P9GB33XQepcN8Erft1sJ8YJFECFCJ8AhQBFJCPvX2MHseqvTF2K34euZgq8bMhXtShYScu3L2TxCSN",
  "key28": "gt1ffoPAmRNR51wA29juH9oYUX53VHNo818tRUXvKkicPgTsSLPQ4KzcPAo1hPRJvNm6qZnhQe1jdNzpJEoBxqe",
  "key29": "5qwU6jvNUGnKiXqSnBvq54n99rkR8zScoFDSxpmq1NFgK9MaAzhixTRArki7k5kSa3wv6rx9A4jSge5pMyJQdJvy",
  "key30": "4ffz6aYuXMkd4WWnDgbMR5pLGJYxCDBMrv25jU39dT3wwYyU1ozrc81FjsQrYw52dcx8df1E3DSzsqFNJeBoZ5MJ",
  "key31": "2r9Hyd7cG5bP43GcAEsFDX2KmyMdVtxBVxyMGXYZd5EGBFDpr8mUyj9nV9szP6PAQh1qy6LkaiJXgyduvQ4xoUDR",
  "key32": "2kNfHphvPxkAZEvnuCbQhV1n2LRCzh1eGowtkiZmchaGReBqzAjfbwEa4TtdjQyKRU3kVn9VkY2k2J1MHZ3PgRwq",
  "key33": "3BxaKWsDYG9DGVcRLsez2PH4S3QpeLGutG4shiR3bsv6TNbi7zpT3EVznFDBF2vMpAihqiPJ29JpmeaWQVr4rq5b",
  "key34": "y7NYGcbTrSkacdj1hP9hDzsPcmNmF7vi3uaWgt4opxf6DqJgW5rbTKJ8DyJw4bkHtRRVd3H3aFBVFoeCWh8uMca",
  "key35": "37giWjPDNmEEfug2vzVZxACQJsUzTSp39Lz3qz7s3BYSFg9kdpLNzpmyG9uZccvRJtPuACYXwTGR6PfRoidtg81Q",
  "key36": "2Tuyckk8QWCzibQgwXzdfG4XGan9coAd5wrkynjTYUDTP1oaf5K4gkU5gyeVC95gfctt3zerjvYzKUJkUEWpR66y",
  "key37": "2DRrBe5SnB7FLnrXkaAhUzxyGpCMjGCccUBsN1mUEPXYFEdaZai82JH8ckbR1in6cQxNPLXKTk9m7354pxVz4FyK",
  "key38": "34B3XLZeUrsqfrWVS1xC4SEepDgWE5m9MqqV6g9P43roc2JQS7aRZMPs6rpJQat6hBCL3eKaHbHjttWbbVa4nNte",
  "key39": "2rSrUZDH47VekPzDAd6JnirvgAmfn2w1CuA3PSrFjuE5a2tAQ7ksWqCbNi6J7SQ7ZQVH8ERuurEe4rEfcdsuwo8y",
  "key40": "5NmCLRm8NqwVQ5UXZ2eNLA3iFMk5YZDAANfewF19qPx3gEmoHgbf6KrdF6C2qwvjg9UmcG6aFi8dHw3CbQdrYY6Q",
  "key41": "29Xraigy7e5PLpvKofmJoviw6EZrQUEwZCvywgfQJq4hmAxeq2tSzbpfuqUo1KvKRKzvLmnos41JqMx5jaVqypwx",
  "key42": "5z6gZzghAViLVTTJJHNaAyS9MnGbvpBK3DR88mrm31D2bPLajoRCJ7b848fqgkAh1PyfedVYfTYiZ8bMG2BXQKhk",
  "key43": "253CHaj5imHeTPRHisVM4UXqDaTaoLB7DGH75hXpGU1vSrf6kFGA45eNGVcPzCnLhLMDyRRLqVsMBNopLcBEW1ea",
  "key44": "ngXsFsjc4PhAAma1Uy9bnkakcXeDQKvSKXLMotKugBwvB6yQBiRFFsYAC1DDfCU5i6qiG6SojHoTnuw9jCnoHMB",
  "key45": "3CGA1gPrMsuATZL492KQAQvg9H5rivop4KdQn9rAZKgjQGCaiYmbVzKRTqkDXCZfW8wcWkdktUr5fcuRzqaPB47o",
  "key46": "5vqdNLNtzZDioUfdNdswH7p3zYLSqHcxg87arsfUeeWH3qZEJxLnr4aVpZkDBt2kqQcrCVWuxBqgaFKC59tX1DDJ"
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
