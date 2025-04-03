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
    "HF1UeM2XRvFpgr6ekhPbGYtGqkwh9Sjcr4xVHZn1rzPZA8LdD7beNQwsssQmV3uDgbbA9pfd9QrYGvFcT3ynZj7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hxHUiNZhBERmAUzmXS4RpbKtxBQkoeQ3XUzVVKu9BAAgmyoYoQiJjADcbw954ov3k7te9qpEANpp8Jt2guR22zZ",
  "key1": "22kDr2oF9iJCKuSF1vRB3izsP8CbGfjySkM6rPpyxh1QJWirx3nsNuNB1nGQEvfF5hGqaXhzb17ZD4buUF3RwCtb",
  "key2": "22QAFA9CxDeTamrShDf21qTLSWXcKwDLrYQMUnRTiN1CC1ySBbfDXqcKxdkwpHBsbSbfaxRP5A5RK6gk9KFaDvmR",
  "key3": "2drpbYAxUpHz39HRwc5bP9bxFhAknAi7f4XWLZR4jum7bfgmXsboVd8o6LXE9m4GFGDW73Uu3KRmyatiJZ3WtKQp",
  "key4": "35Yvm25q7AJ4QfJeRqdfWo3p2tMPLiduzvJ8snENHCPMobVkBDQH27Csf5yDabquhBgHEU4RVUPkswLmdx4jzkVV",
  "key5": "46sFj3oKyMPVDXSF8qpfcZDMUEw4mRz94oYRt7jYaDYbwbU8ouC3cwtnB7QVpTKzuRdHbDMQR43AR8MoDYiDZLKr",
  "key6": "5MPnn6ZyAA1zCpxPLQKhn8PHq5K7ARe83tD6Zbo692sQJvJz3St8EMLZK4zSCqMZ7LVrZJJexW3pRLVH9UXbtccL",
  "key7": "2Hr4NQkUG524P5uUxR8H1FKymaUM2TB6nQiRnpHtnt2DtdVzrityMgv9FmigMLibFRB9PXG9sbMCc5bLTzmZtX1n",
  "key8": "5yHt4DascQzphHrF1f55j5AoKQZnBiNjDkmE68vDG7RphyNiwNXG3wUMjrM4wUjJ6Rh6WnamYaBAo1tjKRXgF78B",
  "key9": "2GmdtaReGEDyo47LCPEU9pjiHsyYdfyFizipmBmiZTGMMN3wtQnDcZbUt9ZcDBh47n7DBiJMN2CRQYz5tVvqTGKW",
  "key10": "nE6YsUvna4gXGTcZipn2zFrBzXNDxuPxnVYJnaU4nSEE8apz9LrzfrWcSz943NJN1S1Z6yyLiCi5hNmX1yrJWnr",
  "key11": "5qEjEBecLPpAbBiGkv7FTQCqXLmznfbTDeML8b9uweQjPRVEakGuzjkQXeaZRV2Bey5ewcdvVxL3gyQjad8Ky662",
  "key12": "2MnjsvXXu19sAdVoRJTRGD4LjDCDRbDBLNSo59CM59XwsJ1d6g6cQnmfmVyUtkJjaHwL8jDaGNrXzukw8LE1AXKv",
  "key13": "4TnQfU6ZM1CPpnAtMnxkgu8GftwiZ1y8QFiAmh7ZcG7urfwnNhkXPtJLUAP5mo5Fw8mQnnSEFKJHsEJ7xfuQYXxb",
  "key14": "3FwXbUNxP4WbHHBMVTGh1QoXC4vcovNRCZF96QFqRUbAWRrjSo9ZaXNZ458VXNJ6icEV1s5WjZrF98Hh5q294RQv",
  "key15": "3aqky9wT97aHJz3kR4PYELZ6A7FhqkJfdAjrD5x7moUYqqD54AcexYhhCbaPXG2Qkc7TJcJdcr7r4ZnW1gvLF2w5",
  "key16": "221nW8bBHEgQPZavooLUYDM9mxvrUWsNEWtEmPrGMKpb3cyj4HjJhNbZjQFr6pfTs2RwBEvmG6fzd2NwUEF2QhLf",
  "key17": "3hnHdxet8cSZdNtzYwrqyZUoLQt79Pirv4eYHBSfvuNcHh5TMzLbWdFiprY5S3ab7XdkmRSKQBuP1JhSmnyNpbaV",
  "key18": "5jgeeSXXs4g8QAEGc2iJBWro9Sbku9VbjM9L4eG3QFW7hkabf3u15NKsuvwSRbGNEz75zDD9ntMwsEwnf8VFaKfg",
  "key19": "so1QU6j1bZz3EuWGLub3KSYY7n6GiUDa2Q38PEPNz2mY4YV3gP12aYjdstVp7TvRLbfUxdmx9kquzaFBWfhd5x8",
  "key20": "5fQTFa1wNWHyurciC3F2jCBjpj1gQ5ikfPFDA22kmhfr9oeKTcNrBpcxktxTWQTmReoqJi8cYR2L63c3ZP2rZo4F",
  "key21": "5MW4QyHNwnQyyRedB86rowDR7pWsJxMv45gXBKT9dYvVHNDTMWaJy8DwGtMN76q9wR4WaGdLnhW6dDtW2RSUZ1tg",
  "key22": "2R9P6VemgAiDuhrUXRCwk3WMPMxXtX5Vd2qxLkyenRdxNmW3yt8grqgbqdzxyp8qPC8xUHEzghVLkkEDZK3Eyegx",
  "key23": "353t92SLDCwE1uF6QbGkUhkrAPLpvCnwboS7wqvSweQE8gGAY3EzJihA29FuLEgniBoUVYVnqd8zZQCc88gWcLPA",
  "key24": "1tH1LkF2CXi6ES2APwjspPNcixBZjvYcb1QGroGRWWhMqoEM31FzAWaiKP2a9yNNdhWHgaNKMLZXquifYqfqFH7",
  "key25": "4WnQ59yrufnXtakXFymj1j3ef9T1kvaLpuuikYiW8NFDZtdcYCRMJUqE4PEA2KsDqPsLgmqusiifP7aPGqER22nB",
  "key26": "14mugPzGMfGc8EfiSSjjekr6qkDCvdLkCVqWwi1UstFatuUFjK4cdNYXngTnFUHgBjsKPDAaqEmCEeqMKCjpgSM",
  "key27": "2F9non3oUadRxNK41D49AnkhoEKDx1mZ8VTnEZ2AN8n7yzQEpJfYRMnBd5ZWHkFAqvinER15dmKryohc7VZZc2Z5",
  "key28": "2uWMtdhyQsJDetRPXHjJeFuCf2JSronzsUPjnczvytsoGkuM1ikdMhg8mfF6Yfiq4yPdkivnJMwWND2596KKswqa",
  "key29": "3UKPob4LwTBx4BRiJzoS6Yhx8jPsVpuRGifmopSt5smkTcC5b9HKC1Y3NCvMpVv9MwXjLhL56nmPAQ6fyvAU2dyL",
  "key30": "4xANvTV1nVx2w6McCKXs6eauQEcM4XUnsaXYucf5FYKZUqkjd2qF1PTm63SmiXTmz1sVUYNNbjcUctT7yE8ypRkB",
  "key31": "bZmWRnNcRwyKF34VBpdemCT6pGDhnqzWm7EH5tjKfaerRoUxrXRjVmQPAVpnPERkFP6Uwp8Ko3s9nSRDUiRzbNE",
  "key32": "5wESLgZBJ2ozXaLDBKx9AbEkVmLR9VPsuf1ZwFPpFozYuyaYmcqR3AXv4Hm9S67Dcwx8gL63mtxBBDWV2D8qsc4D",
  "key33": "226Rodpt57LNcL9j13VQ5akUT5kRpjgigRX8vMT7vJd9NhnsJEpLc8bwoVxNs9M32egDrgXbd1UBA1suiTtQaA5h",
  "key34": "4zGJ3dR4nThcsoYZNXJbS4y2SekdadJraaoLbar9cp9KnLEqBNQARqjs68ZvEuDcw75SjyL5wWgTJMAZDeEBcbmp",
  "key35": "5HD72NRxuDc8ZEiuunZKAEaaYtcYzTRt8NCfHoDXnfjJ77xeycUSQ2mfRoUFiRcZzq1DmrQVMjuEB42Exo4Q7ud5",
  "key36": "45AuFJVuiRZbmCbESQ21eQLyfcVcUZ1uopHpmg99tgTKorVUphPpSgHiwce7tdMQW1E6wHVwVqbhZHq7ikZhjXA9",
  "key37": "5vBAisEAVPaBNj3n4FXyiYRAhgXjJPt28imbB3VThscCag14UJXMGEMKaMigUqM4j7Y8jjpVBx7o5WMgrvJWYcyv",
  "key38": "5TJhzAdxeHYeA2Q5yq8VymzN4HSKoLMrPSBCzur6ecCePN2dMoGtNQ2h5TMXJEgPTEeMxYXaf8DCWSwTi8DXCp87",
  "key39": "3XRDKoGhQHAFsr1awDDNmFeLWnj4d7YhKLskk167bvambziY7LVMbeGpGAMnhCMZ2fno3cFcMhvMaydTaJUsAY4T",
  "key40": "wVFmQLskHXTCs1xNF6qK99WQmVwAAdUk7NEWyrC7MvY8UChUaG3zrKtBcPLWkMPsuJJrTxRtEPsQAcG5cyER1ea",
  "key41": "2V7e95VaEtx6EF4GsFX6FcSTgo7bpFKHrsWY39UhnvSr85xLWomEsBjtfXrKAXhTzZk2AFbEGRcCXAWjUDnWWS97",
  "key42": "5iHKfCYUcv9sfzkPeP5pNBzwZm3Ksd8tpN8PgmZV3TswnmcDJKE8tUgc2kpkviy6ku7WHPbuC59QjrYa9X6C1oSe",
  "key43": "gCEDUP7Y4WB82e6UcoDDoVhyNT6eegyP8peZ5iqYA7UE6mYYJRnq4m6VLKDjrjKaLjB5nx8mQAMUd6FKP3uR5sr",
  "key44": "kA139dwwzwPbah84R8Mpp5dCmi2EmAPHe9gMxQ4YffsuxVp1KsJyBUcYGhFwgfXT2yZPCjsuQKXrUDBVE9xf3uK",
  "key45": "3zu162TscvFMQFGev7ujysZegLbUQFiK6dbb2g3jFVcFw2b9MrB4Hc2iTWsvuhqiUWReTpSdqBiMPyZjSdowfwRc",
  "key46": "sMjFsWuFMiFqgjTqKXUvh8Fg38WHrdcNk4CjQ2smUtdoH7ySodN37To4PFzoJENmg4Qsssjt3u2JspH3FFUZHht",
  "key47": "5GGmhwVQvhGPddA7Mpv9KTYU2zhMbCCPms5ycP9zzsHyJddRnWEc1jL88JsYWBGq8fSR12uajDng1rAJLwgQeBCd",
  "key48": "2tVQgpYaPWumGYDg9NzPqmFz7qTk5gC7xHhvoMLSrQwddTah3C4mk3oDXzRdafE2KmCgiEmLTmEUxuVDKmdykKri",
  "key49": "2fn4661rV5wrJVYoTQSAVAqVYoLRkXy53hStztxWwTgubj1X1v5Y2yepKVmBTTxax67hPHwAVKAhLBAfXQHpL9hV"
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
