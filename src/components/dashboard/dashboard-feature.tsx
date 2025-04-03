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
    "zHrDzhQzD2zDFfCCiwyJGrtwznSZ9h329Nu5U2vZJKX3i1CJofhTtYos6qByarQRMNRjyHGFxkmjndJrdEJh5GS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yrrHy6y5gDGnSm3bZZhPPcVjL5H2Mcw78WW9ut6EbZ5AV2pu4hVN4MKQRZtGbs94mjZJW9mRxjKyjvm741JiXf4",
  "key1": "29p5gEwZRaUAU9tG671yaitAHairUm136F6rKEjKAm8HFQpSDfacDw6puPQvxUTKGnPda4dHfRLYyvyZk5tZE5L5",
  "key2": "2DnZXe1ou1MvMu3xM7mePQ31tMFGrKbXPjWXrAe7TJmchNUFfQYNH1qnzxgVcuCHNJaxwwQJF2hZMVSjQLFGCKeL",
  "key3": "3QtYuHKJAGTcCgLLNH8fzT9d4QnsBDmC3KMqJWKWebvGHqjYz6VbPEfmDf3hKz55xt6oYFxKTSVLpNT1TvFmATRL",
  "key4": "4bFvFwA7WWTT2kZEiwHab3Qpani6vbrPfP68pUiHMedEwoyQ1gRiu9aBWhyWLFq16uqeSEr9wAVyfyNySupXLTan",
  "key5": "2K7xCdSyRJSyYeSq8HoT99MxgHPe8S4D9Eak1fDbxXN1C7JER9BoXMyL7cCi5bhEFGTNAnEdQe5fa6paojDQWVgL",
  "key6": "2NAN2rbfaTECkiybJGZ4dpBaivdRKERkRqXXHwBavBexNEA48pFgVSaT6kEs1TdP2drj9gidgfcAyq1PZ4JNfEBq",
  "key7": "e5c8xNvcVBSsD2q7vpgmKWamkBXCxw5PvhFANYCfsz7geTj6mVcs3hatJEdWJ8RGFxJ8RM6gxGfQ5FqomJrwAN9",
  "key8": "trPYZddG7s7jLRTDZ8t7FsYtKsd4fSwmCB8eUckvqy3pWhzUfrAC1JgCemBxM9tJQB6p31JhKXensdTMshw5GoU",
  "key9": "4YCyvBEuhj3brD4kQqWBRB5GskQRhHSu12HdDsdvy57G2s8wCX9NgqWgNAWPuTdRdKS3EdCca3wJpCs2efqgG4ZA",
  "key10": "3jUH7a4j6kqyk8huQRfzfpSxAcXYugK4kYgnfbvJRTPpkjFdyrzHo1L5cqjKSAVXLyKFZZqVgjxXi6Rfp1B1EvV8",
  "key11": "4xKXc5uVpnnjgX6jFeitSq6yiidFhiUgZtjoERFf3DCWwpTFEWU2v62HEV2wmPDvDf2GKHkheFusMgHEaKkkiyFV",
  "key12": "4eniXYNkJKq8QRzjWR3GkaZHK1cxKi5HuD5M96HmsztjUvVpBQByvrHVpnMUugmd4Rrj81rMYVUqGUsPhGBgPJSP",
  "key13": "gabHZnGkqj8K4hkWhwtn2givojHismRg9J4u1xin1cdSBL3ERBDFDWEQeSBFMMtghrNuWsqbBeCcqw2akWSSLFz",
  "key14": "4qQKdjnx2mdQQ4oeckqZE39jA4JRjPE5pbGQZgWEww6G2C1qi26UpNhxwcpsMhuGWALS8nsJZoXziGo2q7bd6fMk",
  "key15": "4GWxNnLWiENSYKgK2F74iLSDSJ6hzCdQcPb4iURSRTStK9A93d6MQmciP5zk6Yyow64Ei8x6XF3PafoCj3J5GCQt",
  "key16": "3MXGn4A3132iEvtcBK4SsrY4E6mBYpzPZPSuWHRSd13WFkv13n5bhJY8SpiwJdQnBC3TVhwuPgPygP5X2X5yuKiN",
  "key17": "5tKLfk3NVvyCL6SZUj4oxm2xCkRry5XYfnP3u524xt6n7EKxjQFLfMX8aJrc3VrwBKcWtmmaxtziW4V1mKKLKNqW",
  "key18": "GtC8BSFL5JT5CETJRBucu9op33GRoTG4tpZu8jXZKV4Xj2r28f89fzaPTDh1s2GUQ7J35S6LmPisHf56ToCe3Li",
  "key19": "66p5aDCBaDW1FXRvwasFaq9f44NJDu7637pmj72oENzVA29aZX8n5o1YShFvUBDQk8isUXQcF7wezZvdd8uc3FpA",
  "key20": "4hmtR6nwevNSJ8AZYRuXwkAY8X2CjFL9r9U5tH4G8NoRCw2NewWDGsRhUxBXduEkkGfhdL1ukhLfofyixSnjJEMH",
  "key21": "3FY9DneZMuut98uWasFjVHxwhcP6PpMLNUyZEAHzPjnjqXbRRsW2r4QoxTTB6WZSMXDccwou7gSLLnJbhes9kkKa",
  "key22": "4J1M4tShS56QnHNJh6LQhXURagpPPBKUJLsVFu5NrPpn2xtQx1nMS32zJAmWQ7Cthcax7hMwP9H6HkZFtr2qTYen",
  "key23": "3nSxg9xSgsafpakh6LZL2e38xfhwtfteMGiiUqXaw11m1sXCQ1jpbCacTNELU7E3CSNnHEQCgJHXTfoBGaMBrJ3a",
  "key24": "5twUReJPkGup8aqJBsZG2Bmd196xBJG5ii5hWGj6VDYoC46nxQYj615xxoq6pbsKbTRUva6jso76gP4do293DvTt",
  "key25": "4XAH5uMbYGLzsgSr5NAmVNvAZea9dTTzm9uATG2k5syykyM5WLWsgvQtPCfSri1Q1ntArKjQjvoVNj1JvrG8gZHz",
  "key26": "86AJnz4aRzshx1mhxB69C5HoWkb2kevUYcKvDPaR1TBNUF47DEWSQnVDKcUhFtgFQ29EUGqhNUh6qqatFbYtWAv",
  "key27": "26w9pvrG718rHWr4h1HWFWzbApnuZdZGGyndFhpZP3gjYCk1wgeMPyQVrYjGNZCCcTeFfftgmGa5Z5WesJePhKmc",
  "key28": "X7SVkckqiqkYdNFrJrnMchK1TxFAG5yaLg3gXSzuPnMZyF9zRnZwKwZ3RYUTZ8zriUqnNNciqkPeo4V7CZidT9s",
  "key29": "bUtknbbCragbtszDa3s8Rqx5r6tmrioVYxcr8LG5D88MNDA8T3QTVXhzEdCjhw1P9cd91NoUx8PAbgqmjY1HWUu",
  "key30": "3LhCCj8NswAnYccesote7UmUvcRBnYmy87aNc4M8kLvYFEBNaUsWMqgn97wyBwd14inCwjbaMcXjxjNH4NTaWSzd",
  "key31": "3QAD7AKPpJBiRwgqPoohFVfgy7eXSGQhkLwyZijnWjwdWpS36mdiN2RezLiz4rpeoSHdrmFcJ8jqLApgSBByqbmx",
  "key32": "4RthNkRkpkCHMkYySDqRxWUTrcJkWWfLYabFWyDFTBuyWLfA7jgXZxS37qr8WMpt1nKedq2bLcmQz73V8SKKFh2T",
  "key33": "3Bxc3RV6znukoceLUQokr9wkDQcPdjnp1W2dax1cbhjA8krq7QxNu5UbQCNC9qwzmapSCgvjwydQ2i4y7EVhCY1z",
  "key34": "5SPhgkhEuGD1k4zy3s6d4qSUqy61XXkfphtEUufgUuXdiR9q59vmmBJqWADK3TbrbThgaquNeQH6vdixXZmn6J7J",
  "key35": "4wq2QrxmvxcbmVoiGpWHWN7QvFg2gWCBMv9XrziWkHw4LqG1EZfBgpaRUE1C1ZLvx3kFCgLefujpp1HLooyrHzWk",
  "key36": "4GiWpshHbUejgshE85Ay9obSTuzmZ9pVvJAwyQJvx74ba3nBD125LmcofDstr9ttANd5WoRQcoXrQV8zsnFdwSHp",
  "key37": "DqzVUQx1eZWJqZKTucGQFm3sy13U6Qe5WbaDfiynTrXJkvcvMnULHVXXu16w3U8DtwU89Qqgopdfqqr79J96rLc"
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
