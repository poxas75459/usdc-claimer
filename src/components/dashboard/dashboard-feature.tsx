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
    "4UpvBoydH52Ldf5JodZNN8w12bZz8DBfxhMpqy2LgRQ43hnuz8dBGEY2uNTNCPcMRXhV7JRHLBtQXTfK7ZMoHPJN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VCu4t3XLRrTP1y9tnEVv3eZTm16iRmBH5DizGWkmFvKzmDUs5aJDqQCiVvBVkoQwPbsrXv1MCLdvYWnDfR6jicu",
  "key1": "5G3ZQrxxbxJkt4wcd8FTds1STk1DYFZcihzLMx4qVeecatE31dnZ5HNBwbhvr7qSYVhiuXfboMWnxVELhwDAeLT8",
  "key2": "5Shsjjdd3DnteG78dHo8VfPT3GeZmqGBU8eNe4BhatXZ9E6Gfh8cxDT6Cudb1Rndkt3w8zysuHF1J6TaLPFFjjR1",
  "key3": "5c4NHALHdzpTkELjpympQqAwCj12aGASeufy4bK7uz21R5Rruy8rWFJgprFfEkQ6uMvbqQ2agFbex71QZdDfxL2d",
  "key4": "2XcsvBy9qW5y1XawzfpwpKqsVBF1Hu7C37X8jLiMTEBT6HssbjUtnXVfguFbPnACjzGzmVqNXg4yUNbXTxqzbGmG",
  "key5": "2rUZvFM81cBysRikoUMvTqAGgbYMTb6bJyohPvEzTP5rq5sxdw6zRx2M9EmruHRQ3XEjCsJA4cWq8uSojRU5GrLt",
  "key6": "QvQbk7Q3hU85KeX9eAg4RBGU32ZaRSdwvXGWnC2dnvaoQm7rcrid9U76tot8nPXq9SrpujBSqWAni41pXA5xoY9",
  "key7": "2JXvqmeQmFvT17EekcwP7rnGVxywwCsvGPE2PsiJYgwcbgYFb5K44HJ3xDpsoXhr147qBk7QNxUmd7e32J8g65rz",
  "key8": "3Qro4AEsHW4nBFCwxCU9cudAJQ8bSbySjj4cTQM5VgevQwdkirDzxQb2UJaC9LpBM3CW3Acmd38UA7kYmHsTypBD",
  "key9": "2DfvUnAX5xMG4vgYGZJC7UjUXfFFNWNo83jCZ1yDN8H5mBNNFL2V7tBdGuahK2ZeK3sL79GtBCu3xx5Hcak8GGrM",
  "key10": "64dgyTbDGmT4nfR9WYUxUKaifbVtTL2f6hrbSrQsP1i2tKsoWPTqoMGPBkNUCFhe7ShjiKjE24TwX4WVJnc5GQiA",
  "key11": "42c4Bd9qmwdi51pVe7SAjQjAjmHTDQRafcZgubtk2waxt8oNBeXE8YtB6LrxuRxTUTS8eByyyzSrok2gRthpX827",
  "key12": "3qpXsLq8kZ34RjcTXzgbgFYXniYQLn4WJ2J1mNR4WgExzJHJbL9vR6NAJbn4tsd4ZpffhCrjXkhbVzsdw5ssaanK",
  "key13": "3dLWguNuj1a4vcmeEWX9eBLEC4NdMNRxj1T1hKKko1dB11vKJY95cr11Ue8i2WrPz17hrKpUKziUNUbj4GoqiFf7",
  "key14": "3ki3or6VVR9e2rRajmwM9Q55xBXyRcrLddhSMix6yspTQzqvP8XdvRTZi322EADFXWCSunas6wn98JE6tLWzWfK5",
  "key15": "64p1BUPuwCTbgThMCygJ4imnRn8H6TDzBiZguvDaz2NmAmV4ZVi4jhkBq67qtcG8PZfZRCZjxGCns1ymSf2G11dJ",
  "key16": "3fvwgkkGfyqjSg3j119vWjJ2bjoPwLYfutinCVLLnPP5p26siYSwiGBjRZDSvnTjJgs9HwuVb9SW14NpAddDKeiU",
  "key17": "3WJ4hdRA9mphV522RfFmES6vVGuAnT27SAnG5k3rySRm4BPBLQo9H4F7dRphuaLutAeYDDHVNcNGPXXGuy4WS3qD",
  "key18": "4ozhsjnaWk9qyfQJngxp7yVinpG1aNKALCiNhkHgDQ9xqKJ1A8QfFfqefYaWk3bruFkyonGFa9w3ZpPEWwh85Bf",
  "key19": "63qGdQWQJzwqaastB3XxZM7seZCCQMg2DdigCp46tFoX8QF8XwHFRUMcd7oj9n6AKzgvsb49VsC7XmfT3XMWuwhv",
  "key20": "3YTtF2N2SV5UkURdexjqHi6SVPzqDUkGgG6qxNiQqKK8xXM22s3XKVjpe6cPL4CZhSkK7DcGxSwrBU4PD9Lpjodq",
  "key21": "2BiTbd8W2SV63nE6erHU7KKzURBBcBaF4sAQcKzaFPmt89QqJLKpA3ZoDrstcGEVKrQboVFwZhy7pxVk8TpSyhrz",
  "key22": "5L3enBhGg6jv4yNsHPND2dXHBqTmKRoK41F4HVbFMTT2st9AQu3hQ3JHRVPS4oRWAevCBViVdXiHML9y8FMyPTSx",
  "key23": "2b1h4u7h6nBNWQYqbvZfz4tFEavG23ytENUSjF6W6mQzywB9kDYoJwaGHGvoYcynM87859toicKAWqvGWGpfKSfw",
  "key24": "NwQFapjxb1tnoVz2Hq7tHhFTKdTfcFtftMZqVJxViJJzZzzpkUddG7mCuMimF5budx8EoJXtypBhaLmm96w9vMj",
  "key25": "4xdLG4hW5fm6j2o7HjevYs3jSqQC99RGve7ChN42P83QW6rsKVUJD3dHAj6DdCGRZsVPUvFV4L9n7ts6UZZTgAF4",
  "key26": "4Lh1sw5GEyWNBHS9PZUZwsmzHji99NABQKsRbbrGrcZgn3sPRfwHNQWbE58zjrPs5ybSeZ8CWTPqrDAXsCZsFDk2",
  "key27": "2hNXWzM4cXLsUJfnbcM9sgr4DhfGUM1S9gQ32q1apnoZmVCKHvdz23Wi9mZXHgAjB24DFZSEWRrmNz1PLPHA856V",
  "key28": "5dwKVNpmxvx7TjmKpo1iAwAWBxyXtJThtPhsmXWsEeswmWFxVuELcWtFeUUvZREdrKbSRYYft6edA3kGYrUVMgyn",
  "key29": "5TRKxZh5mUyhAkVei7kKbcEbM6FfeFCSfsrXcVQD9GFWJpY6XRUU2Ectjgfqp8k1KqT4twCBasU3bV6hWa6WgBbb",
  "key30": "3y29FR1N9S4p7dTqynRVNjJM8H6dhxQ2gCboJ7HbrLh4q46sKWoa8G15ZL6CjJn7tSrunm4YKozPLuMec9M9vB4J",
  "key31": "3n6KQ7vZWCXQ1MKK2y8w7n4ZKaSk66DKQauJkNDaMg59MDoMgVHGCNhMQ68vFWS7pmrCfibuszLBVdQRBkKQs2VW",
  "key32": "4msYEpEX2XJw7GmKanAXZ1KHga8K2REV8WpaX7xj7yCq7sd6o1uAEawt2gFEfrD1cZDCKuruwiMUqmhfNTthU1UV",
  "key33": "2N1eYC3RJy19mHf32pn9TKzQvTwkA124dDR9NW2k2LF1Uc9c7NcaQ53Y7wp3pMwjveNU7keCmDiVKUp47xdtJG12",
  "key34": "41r4perAtHBXCqvkH2Qhij8GEJDjQfSGSpzHN4XjrqLvPf4oRyt5UQLoXUPZBdPTCfKbmgihnSQwrj2LBkpdPtHK",
  "key35": "MDKMrTNuEC8fkpqksBvpiE4WuLtzKc6h6NeZo1ewL5B3mookEN4uFqAHd2R1BJUrpwaDzzwMkepuV3BvHFa7Zsr",
  "key36": "2sqozTNfxsUa6zkkU5J4aMjmdn7GD3xsEnkJmzRdSR6MKoG65Dz6pWbcomk8W4KKxbCqfq1MfvNfLgxBcjFpE5cZ",
  "key37": "DECNam3zkkTxbcE6DkeqYeYYYgVcBUPWzKCfrQdJHwtTvJcn6Zt91wDtBL8B8Az9a68vWJDgNudV512vyvpam9E",
  "key38": "wdxowujAXTXW5q4HkJGzwpjhiao1J68KkA5FcST8SE9VKAy4bvAmnX61qsdmyB1etRLLsPJ1At2wv2mZGHi44jg",
  "key39": "2rknEcgvYaGY3DPkvrp8918him7mq1qD5Ro1XjGLuUXBZ4qzCqhPQ5WhaDzvr4DPchEHndWUxdYjCA64tru5x2wi",
  "key40": "5R2DPsKU3hHWNHvdQzJyTYfpa8fuu1HQxCNY36ixkt3yVqQWkv7Q2tLdJSPX8R7cDYLcvpoUZrmpt9L7zmLiF8zy",
  "key41": "33Ga2NJ7ZR4gKCH4TSsXmSEqDPthtQHYVBGoCw8cqT36k41rdR3W2uoiiNW7SVkuyu7DC1GsZ3xNBV9BJFqyyGRw",
  "key42": "bEw5wx2EimQ9p7wyVcN61A2tGCut1RpcHdemiGWHryWvNqJQ1r3Vg98NukSPoiX1yRZWuXdAwbk63va844adcuS",
  "key43": "3dma5wgRXfkmhoj4zftuL3HuZm4HqYYdqEY2siHtS2nqkfBs3Vvjnqo5c42iRzDqgYZ29sADhuvBGRH93XtqBuvB",
  "key44": "5sL7rCAFmkj5EFtM4pDfSHAH21tunF8zzpTM4mbMAVSbWreD5s4yS4ZqgaX32owsZUh1nDzLMJCceviBBhBAJxw5",
  "key45": "5zWxRWK1A6WYbFLAY5w2yXHmaMxD4Aqp52auCtpmSa9z5S9g1R2BM7Xra1XZAHjj8gVMpsYD8VuepwEC7YqDKtgb",
  "key46": "3PzBAmWpxYdbBWRRAtanGS6v9VpeEQY6dPyjzpz6csFMGev9PNrhC5KpfrpG6tRjJjsKdP1U8n12goFU5srbqZTT",
  "key47": "Tap2hcdouL8UDCQFu6vH9iXT7v8guYWd9y99th5Ja58RRD3jq5tZ1mPev7tqDU3ZjWQSscaDQ8Dy44yLE2VPVhn"
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
