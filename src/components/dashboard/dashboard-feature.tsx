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
    "T8vKtSJF8Qk5vbH8F55iWbWGV4xMEtoTb9afp4cvDrP3gTjTBTDAT2csCrkeiiGbRe5NGNU7dXoqg2GrBNBUjwW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9jr8ZW2oGdebXMgucNfGoJBe3ceHRZdU6Rx256byoQKgv7dM6w31M3nWNxto1BUpGmMdxyGnGAUnoDf2zEdmDZf",
  "key1": "3wDMELB6s6CKDyRmoYbC9ugidwXJwBbRUVJADg9ZudGpuZVSEidynRRAToPDTHaPMkEcaEuwHbRpxbHE2dxpqR4x",
  "key2": "5gFRQMvhQCnVRSZYCXJdgakrigknuzkDPB9aBkRQVspu84XC6Y8JVnChM4VnuNLwccFvgQ1GpRfTQGb2b5usgs49",
  "key3": "3dUrnj8jwfAZf9WWU6B1k2tmogyiMrXFkz4pdQpZBmqU1L3uxc3E7gawNFLHshqZPB9SHzxSAVCpb2u7nhNFoZn7",
  "key4": "4yGv3Lb7REckS2zNDcTShxFL2qgqJRyYTzJobdZW1mHAHJNPwXg1QtsAaoVCwewj8wbfurmuxVDbFHW6DSeCGv9f",
  "key5": "3pno6xzrW3hBnTaHgiErGTmK4V6tR8ocRtbpocU4T7NqCPjMnKPrtQR8VfghL2bg3MYHYF8ovcCBFpLwhX43eumw",
  "key6": "2o6iQKTMcsxqhpwXtyg3d44gCikKsbGRE6Y9TLhhjSHBnc3eZuremCgBz2x5Haq25LX4kvw9CrxqxwXvp8kPhrjY",
  "key7": "67c2XbgXG6oiqSe5AUXsWuapNQHZptuew6sxCAB2zR32K6eMzYY2cUJVrK3WMxGQDERkgM4H4M6FnrHQrCSgeRj2",
  "key8": "2sXf1KnimjVcSCsAZFsCtzg1grRp9EtREKRmb8tfa5jw4FhpMWmU5FMZT21D8UuyRQsK4GPs9HQksikVZWvMd4P9",
  "key9": "4WgRPqv3xrvjvQov9KivsSnQSnWi7WBRKWdjvhpkZhRKDh1fzzGkE7PHe2Dn4bqTs6yzURhfr1q87t2BuBN5b8bq",
  "key10": "2353t3pybCuA1VgQxUmg6SkbswjpnJFmcrzstxQwswDf8SFSsb4aDpBfn7GcMa7tpysq1vHCDYFzcbkmfMRaM6nB",
  "key11": "QJ3PWyCiumpwF394CXBvZwKjx2Gdidm3hYehKHiJrsjEqqZveo44W9HkVgqnwzgnHRnwTfYEPKCvPy4WxnxmvNF",
  "key12": "2RveygLncq7WHpKSCRsmVw9m3VSieoyztsap9Ch2y8ApwYga3qxcTFE7QixcaEcTuVZoAwcrnC4qZLfzauRaJtXM",
  "key13": "495k4XEf53vHpJeFfYhkVVjWxN1gqsDbEqWwzNkY3pHiszCrQN3RjJjtD7pcbyDVCvReUrXdQeKZuZ9Sp18NLJ1o",
  "key14": "2S2pi3jsaLuXZiav6thrGJ3CxJ24cJendbUmjFhM7NKn1GZjDaJKFdXurwfjDHH4Q8NYjqqqC9UXkM2UPdnM6V9p",
  "key15": "czYHkg6CgbFhyPWHccYvayzk8vWfH78zmqmPX2QYDCuB5Wa7ZSx1TMAkwmtXqAknsXnyHZVhUCwYWa1EGe5ZRn5",
  "key16": "64pAE1xTDSNYSqco1crNJgG4R4D9rZE7q5LZCyvAPfuStDP6x2aoPTSGjLiQraTrLe7jUnjp7cSG17jWxHHiJ46X",
  "key17": "3XS1SLSQTtob8SbwSeCXAZFh7tu4MsMJo8QFwLQx8qPykf2L2fLTdYKosyuFejNB4xP7gkYnoKczRsM4Rb524FvC",
  "key18": "4wufwMePLCMME2f3cDqVwY5Q5C7kWAF5KWyWNg7NuLvUSajE8sYD5jmnQttMYMRfUzQn4n7yXhgaNXqobAjt7Lhw",
  "key19": "3ZKSDsptQVEkb72oSbcj3uPBkq8tQzS7TsGhKVmoWxBcwTskcZi9Qu6amemWQfacKw1SjY3MzTWxhzWu5gfouAnt",
  "key20": "4y1HSySWLd7SdTG2JWX3w5Ev1nTLNHNyHtEtzGPDFf98zoj1wD7YFZEjgpMcKMorbXo5X6LJisEuyhBof1QttEeH",
  "key21": "f4v27Q4JXw1x1DVid6dM6uYTRbWfoFGBzCqYggJog8TYrT71xo7c2GLC3ApaiWnUrcpkjQrCkf155wTZag77F7f",
  "key22": "5JiNSTQRSasZJYeAdbGL8iMvKjP94MbeXLRHWoUH917rfWdLGbVc7TUpX1HTmPcZXY6WGmGGi8srqcCsEDWbfcrM",
  "key23": "3isjJf9FgNFJksXavZ65PupFiV9LMZsGpzFm3dAPk1Pk4jCBThjngwLc7isKmjwVqTm6RMcWc2tb66sfkp5JPrGB",
  "key24": "P3jQNGPp1haqYk358yZ5BgCXPhdLF2k9rjQ51sgLncPczLpRprVbqM26mSbEjQy7aqEx6Kn5UGQorGSRvU51udS",
  "key25": "SDHULjdPfaNuv8XZYMx9NMwKdRFDbhNGSiyStEmfMkVHBPWhu3zwahu8HHQjjptsFTpxJ3K2E9NcfgnKFjeDyJX",
  "key26": "3wDtXd669vupzxqfhKUpbTXZub24DK3GqHWq2f9HxrGYQhCzhKFx4RHda7VMo1GfB8kyBF95ozAcAmzymgELFqSf",
  "key27": "5kBH9vsaFMXh9jnZKh9zHQwKjm5bqFuhMnY81tiA5AMv35TRyNBaLEjsFgNJTPWUCWdVjD3T3WHkT7F3QCksCcYW",
  "key28": "5R99M8fQfiueWoaMJZzNNTo1oTu6NmopM1SgbxEzd7EgCT8it4THEPEA2jFPpFqGgr7DkpEVBWsayyKQLGTKff1b",
  "key29": "5qyakApPtuU7xMFGi5B1LFz5rwt9LwpUhQrodLmMkea773jdkCxfXCJgia21xeLCnrk2PVUf2GzwLeNY15FZ62WT",
  "key30": "5P9HeSXhkLqbYXxjM2Vj2D7jQrkF4ij7RrRJjABbKZgRkGv2pFfUZpgk872TBdMeCXuAhYayeW3VLhxRp19boQ1c",
  "key31": "285g9DHpruk49XMihc15BVoAUBbwdoZx8KGA4Ym18L5zSL9D7ZFAmPeNHA36WwRZDPEaJyidhQytr4WsG91P5ewn",
  "key32": "2NQVUXnDoR9LfEW9F4VeR6qdKrCVetgeqZJMLQhz8bVpKZM3nT64CijUkh3r3r54nNnHYgrMQaZDt4hgjsKuACLf",
  "key33": "2SGmJTDebgTZ4pX1mcbsmAoZeNaSGo3YPdV71oCtvqhj6WrvYf93G5SikpYiTg243iLTBpVPR4Bi1L6qTh76H9xb",
  "key34": "5M688jBcyJSGrGapnoZZPvWzd8RSpA7oZKvGA96KGvHmwPNVGYeftMADeb3VsfYmpUk5WnEsEVwKyYJTUPdK7hdT",
  "key35": "3GjcsWdcFoFbuhVb35RM8hdm74oE4dGUSp56i5Yu4bmzqHXAwgdHkgQCnE9uRAwBy9WQ22YqRU1AGutoZ6D2fTAV",
  "key36": "2UetXx7MgozREjuNDSPiW4XPTWf6irDZSuwvgY6ZuF5X98PZWzm9pf1nJhPthbCytVCNQiLjs3MXnDk6LoZmT3LB",
  "key37": "4ipD6zhmzuCjGxetVpt2LxZAbKTLL1UHd5q6md5qRduQHZWB5SszbLRVXNwZYK6D1xXTk6nr9orZ21uDD35KMnE8",
  "key38": "63u4ij9yjYfapoGaY9xaxXTc5omovb1KumLayVz9AQ8uMo24Nn6rMep6aiQbWCMwSXdsZqJjw6hpA5FqciM5NHo9",
  "key39": "341RQFFHgpjcxdCLocux3XSqok6NWYbAvFjvgQiyd93oAft2wMuv7Q2uZC8Vek6Bm5vat6XAVKnfLiVZPCTEEryB",
  "key40": "31gbjozXbkAXoLweHL9EPMiWUmVpJCWSWUMDTxtiKPnNjbT4LnNtVEsQ1YiKmi5EVUoorcyGYx2y5Acirq8jhxXc"
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
