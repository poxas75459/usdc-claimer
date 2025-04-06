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
    "4fAJbXe3JHWVroZu5n4246vxduaJkC6anopfQGMR94qeGVnuiN1HWWXM6338Xd8tTYUeWXZVHRaiWnVvTMTPAqpG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u7u8MJRtEahDMsVXtmebMXD1LAnBLK29AQY83x2tB9bguU7C6H8ZEs1DUyZhNUV9u4xCqr9Qk2CWcRnVT3ixBEQ",
  "key1": "22QpxDkuBZgZ97UZZHNdxqR2UqTHezYgbXXePvK8ACSTSdLh3FWY272HTLNDbqgT3D1x62FsCYvxJv4wcPHJpmUh",
  "key2": "5oEbgw4j62Ud6nzditQgyskYxYhYN8rooKwg12Zf81YEXP2YJarcJeJv1QyYf1h4NTLorNSFDkETdw7nPSrqjzwq",
  "key3": "34huvxbZPxhiF1Yj3L1qqJavBLNdEuTJQCqq9ktPkzG8akhJD2AEZ5LUQXSgDJzcEiEM3qMWyYmWBzzuqoxNFcA3",
  "key4": "24xwi8qqgQ4S9YpqFDtnDgft2bS2RN6keoL8VF1St5VxMFP62oKPY46YfJYzr4TkQzoxy6KxYKX1sAHjCnVewLGN",
  "key5": "44KVwouYkPWEEF9Xmjy5rnHzosa7FyYNJ2VLNUPSJbLcxUHpB2XF6dTT7g7cGmd7NfiZ4g79Sy78bajj1snCWzjB",
  "key6": "eatkcDtoe9Q1Lsi6upBX8nHphx8scsyyHdYdjrHUdxzgYdi9szCQ6Y53GqiYedXXH4zQKdnAZWmyaofDnGsMsER",
  "key7": "4yG5jStmGpVmfyCRsEbm4bURCzvyGFEMb5xnRJCyjxHkV4NrbLaH6HBwUM1Yta3WJhoPTJgYNYz9FE5Wb5NbEitw",
  "key8": "616GZiPDLrDYnd93UtuhpwEp7t7ZkUp1dc8Mv5vxPUc72PTNjzAFLhuMcHQymp5ieg1abJgDEb2x3ssYwmQbmgPh",
  "key9": "YuQZaUy7GhCikgKXbChatfWKt5fec8cTrZG9kxnk768bnKY1B5YNoWTzQFKp98NUvdvmy4tqEFr1DWzHqZL2WB7",
  "key10": "2sYQshnZbmszmdLNojLxPLK83gn73jPsrquFaDtLX5mzYikTHLSPNyskaYhh681TmhubBeiRfP3Cd74yU3f2kRP2",
  "key11": "59jmqbNtKRN7eETFJSyevxNSm8iSoqYe6rg4sanStYwX6J3M8KjFMVCU2xKddYxyV18Rt1K5fqCWdfE84q3ER42a",
  "key12": "4RQa1xA16eFGfLorNWipaJTwTgUqrLRZhxfCa1rERc3UmmXWDiipL71iWeWni55CBZ4s1mufGvvHtBkg6BW6Lcd3",
  "key13": "4f53KBfvYRYeXw8BgYf2WEGdUGsvnZBTJyfjW3eHtVkYNL4pVRaq6uZVfYc2RE9XA4ry1rKVAeNXkTWvfVmGhu8A",
  "key14": "3oYKBNGNryUEtpGqPocq46JVexfLTD4tSwKhvDe3B13V7jw9J7esBeDPUakQmpf7zzDiSov8dsALBgfwHJjbHFr8",
  "key15": "3MfNV59gWrJMkUuxtS3ME8bN4WiLimy5zZqFFGX9krs3t6Dzyc7BX9QRTRVpt1xTT9szeSomjYw5kRwkKPKnEiMG",
  "key16": "4TNsJcCdKY4p8NDrVTTce1ffgwdKT6uvMT8PWQzKtZ6ovZExMHqG89LTQBJyXwhTMTCRmwUjBvDYoVC92xgpVQjZ",
  "key17": "cnPuyfzp2VFmmhv1YJgHMjE2iDThwyTdxjE7efvfniJm5Tc62mysTmVtvLMqPoEgxivDbVEyQtPoLN6QJVDPvcE",
  "key18": "GqPnG5QBMsiDrn83w2EgLaGtpMK1uKoEpgbGtaQpjuwc3o9BXj3frrZ14oL3qDNxjwN8KUCsoMfuYX8QhxPfpGC",
  "key19": "4un8hQp5Pwwi3FPv1V33gNf1DLF2tYndxiLeDww1n4PpUFS1GWuKGM8RczN7jyzz1b6DAjTqys7r8MzdEifgLD8i",
  "key20": "3cPnZXm6DumCdwDGbuAL6Pc1f9W7cwmxCwP8FFzA9H5xXXwsUSgDZ622DitTq6TQzwjgqxXiK83zYMExADCCZEWa",
  "key21": "4XkkzKtFAJ7VDJe4uU1XDjL3upLcN793cTPKFu4ujwnSGoMHvyyGwX8NZgcMQTgW5pEg8aTBFkzfy8a5aPDjvkkg",
  "key22": "g5LX4PaEQRJoMrdvbxaLgDbXH6eV25SPogFhd9B1GGdpCngobf1dYpGDpvstWTJ72kNbWC6eEf4UDxkHSF4KGqn",
  "key23": "2skw2mPmcfpz2FBuhSrtS46r7vPTtP2PPaTVmChR31SFKTwTapgpys9jY9bqbwqxReGeKF5CGJR4cXRAGDJdvfPZ",
  "key24": "LyWFzo3eeHNMdGWSMw3AkeH7kTw31exvSQW1G7Zgd6B2aMsHsAkzfRnPe6RCvvxghmpenQCY3a7Dm99LC7EQ7cc",
  "key25": "63rqiZpsXrkBgeJzRjdkPUTnAVXCw2amCvUKyqkQ9fApM8VNbVdJhMZ1TGftXoF3sTNRZu8FK2r3pGH6WyNpTyBk",
  "key26": "avrdGyoq25UPLCs6g4hRsZQbKHwzcuTZHTa9RpK8fgYUJLPAg2WWvPmBX3FBVHV8Ay4AQNfQ3pXnSWbrBtRdFUJ",
  "key27": "5DCL2LUPtnFX5zUa4FB7wC4QB67VhK9cFwXDcWKBZCcqWS4vRpyzM1qDcc3MtQj2w246Z99foJSCNxsaUApBXy5Y",
  "key28": "4qmWb1mRJK7V4pkTGcFNnbfMq331XB3tZgTUnrLotFMAqxsV8oyMtcCNuR3gjaiwszyDbzzjbsKzLXqrGLWes3Jf",
  "key29": "2cvUgnHDp13Fon11f3SMYVoeZDgoxvB32sz1sdqbs26P9Z8iTAf96dppMi362Qgf1FhZ1JbCUcUDEhmPdj7i5Qw4",
  "key30": "5ab9sQFLZecpd97PGxzEwjsbehecCfMeBQpjnWeDHWmXd2KLsCrv5mFPTA7hrKKSqYHM6WAnNPVdXCbgN3c7PPtH",
  "key31": "59cEuLKfnAV2U3E2wP59sXepoaq7V1oWhg6T2neXkwERUnoFTypDSG5TXt3VUTdZWeh6ErbLnj4JcTMfTXy7taY9",
  "key32": "7Kos9AUaMhxAvDR6qpsJkN63iw1zzmhfsCQRVS7F6zpL8hAx5WwVGonjD1Uy1XARzqkiA78HyDgKVND8kqZeJeQ",
  "key33": "5es2tWgWqC2kcgLPATYsuWWPTqF7hYvQZ8vQmK7AofzSN8zwPvYXA4uRtXQ7hwPRm6xEfxmKNFdho8XsBS4PCdKv",
  "key34": "4b45by4bBU54eAzF4XjQwpvSmkaP7sULDeGMegWTaHmxJmcqbzSfRAcFwhKaAxLkEFRFupcousicj9UeaxwjsxiD",
  "key35": "4asPSh3PHQmd9ycysAFv2T2wqWzSqB5uzKU4pBxWu4CW1z4Nyb18Gu8XT3XWvKFX3gQjxJBPavnFLcXEZkeP5uxx",
  "key36": "3DGw396Bai8P7eW3HYvWBRCTULDDxEsat8c1CZQi3Uzz8KfTyWkM7inCcZzNpKJqNzkXSJVSdqZQemNf1FPAdM9G",
  "key37": "4aenvCpFwL4VqmUFoa47gXvWvCE2agyHeonNZeFPLdjSbmyoWZ2gw1hSq82bKXWdN6tguPn4PFJj2KUkPXjjLRNS",
  "key38": "34ju5EdFcUrWB1Gr7XZEcbWHTtmY3PVvZnnghKpZpCyf68kNZkVUq5nqePM1CPPHScwWud3uETwtT7NtEfBCg5cN",
  "key39": "3UMSUHRKM2SbGZoEp6Xy62yEmWBoSBtCejYLHSLsmQPSekHLd9uBVEf2gbQhFDA9q8ALNgPMYmgzEqo7q3gVwBmx",
  "key40": "4mHAxsVStH9y3hdU8RfgLPcXXLdKM8wwLsdQmuH5sGHaDcqhfJpBLPSoxHSPhnMZGM3zuSWNoFERsiFBTRnnmeUV",
  "key41": "28xSmYhcZvU7U6g63GE45idp8jfTWX84avvd99S3WZUTr2NwUwLNx7RTCbMvyyMn3MgyDwYdayY4bX84s5FnMSxq",
  "key42": "4H6YK8NU7L5uNHi9aPkrWyaR5QNeTtMaMZ91ktt8W5Km1fmvubWagcyRNBzbsssUyUbyRisxXzC21Jt6XXP34tbA"
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
