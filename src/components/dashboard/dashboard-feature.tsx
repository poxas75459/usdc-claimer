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
    "3ZPAaaccu3ZRMRsVHEhaSqmp6vdtrsbM1r7c99PR8zrnfGX5Qe8YZEbpCCxnQGmjtctvUp7tWxsrGEFNPPmVHJMV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oAi7QRkag2Cx7ccuKaGhWtEBacK6qQarN9V4n4NXnSgJZAwkQg4kWBFqDY3HTKAQze6UEtDnRJLXXiTeKF86AsR",
  "key1": "66uhT2W3iNsP6cJSHiqLJj7LuvR1GdgTrMuapkBqxcxwZWZeokH7hWPcaQ86BrURd989fUa4NpfTr35DBwQfYkHy",
  "key2": "5aRrVYG7zFFYVjb9uHeCxMFhvUqAxWHGihdDj63826s2xTfzZmBpMSsm9E475urrxU8t4TN7ho4atsEJpKjLNquA",
  "key3": "4hzuQtLQ5fmzduKnBRwD8XsVBW45pT3vNWbXikSU1e9j12uzC5pUdpg1r6zhZ2ju6DnRYpJgtRwL8hV5d1ysCfJn",
  "key4": "4ubMtyA1Z8iHmkfViCVa5W6oqucUYzPxqxREEpTTVAxNvB7m5WSfGeg3R4hoEEMw5SajwfL9SooJJx9HfedC62RV",
  "key5": "64aHHJBL9waKToPknRzHMu7xCRrRDygFD6Y6VfT8VcT1uLJ628nnAH28iVrSNNYmDsE6SVU5zkuURYppVZP2jwa2",
  "key6": "2u2ABcZKcwgtvUpPE5jMBVCLCZyawd24Z9yChEmppstRVeW1gmXjLgkSik2ha1cBfWpGVHf54mYNBkVp9gWJmdJe",
  "key7": "2F6kkiVdejqKHQJYorWoyVNZfMXC1QuzU1rT1JgVNCCsJpX2bC4d93HTDrJ7u317NRhMVgKs9yWUYffCHJfxsdd2",
  "key8": "2B65wMGhj9ZvF4b49J9jtwNNGQyZEKJTKUxxouE5DYCak5tsdiYqnrHFk6zN6GVHpYRhtZBPFq9Hoo5Ry6Xr1BKE",
  "key9": "5LtqC4Gys4hrh44pppyvUYesnSCuaE79TmYCrJHbx2HjFQuZHcUSxbnfD9fRsMEQkLqA5JC1efaxG68jVh4u8p7Y",
  "key10": "64w9fYXcuE1e9MMX43DCCzYUcES8w4qPxXVc5S22CjWCCmVcAcUKURZeUkgKqkb98RGr6dyFyUKb9Ww5jqScCa4c",
  "key11": "58Akm1VFZGqGPhDCnjmn1VPuudpjbnbt4Y6BLXH25PWJ7dN4RkUN7MxrP7Z8c7yQL7JepHdUtr88tqNoe7g5kaUJ",
  "key12": "2bwVGcUQsQqwE8hWFedgeMJir3EnPmtBrpQeQQxFnx3QFcRCFZe8vkMpkJUFXgd22BSaiW6wJnS45Tcj9FbN8z39",
  "key13": "2U7MRMF36tBExvUEUDmsdrLikvBVVgJQ7i8kFF9CdQjWY1RkthQrVbwvyDEAaeqQwqa54aKTTkEVnasNzuECnbPY",
  "key14": "2mLSmrimDCNzXTBoXQUUivbdCT1bJH2sDe1p6h9M5gBt8LGzraGy2zmTqwmY3wv13qKho5RYpLDdXsQEmVRYmJ5S",
  "key15": "5wW9P9BX7XhLvizHLz4CHMjBRfepvta2uwqpxy391WXU3JfY32BHcD5LeiNfyfTD3zj3siFRsRNzupggsDVhCYkF",
  "key16": "55mbBCSCw9cabeUSUSPv62ZgTBD3yD5YDJVokjsuzZxgdXMUtTtw2seBYCU6m6RNJWQ346L3KsX5oUcaWoP1RMYa",
  "key17": "58gzQYdBtepFFzkNtD3ubvwj6VX35XUSRit852m3oXKBPbxARU7iHGqhhEZpuTWSRXTw6ZmbdzAHX8adyWNEGDsB",
  "key18": "66H1J3fGhyDnHvJdqh99UW9vApZNMwZs77eCJVo2KRLBBNg1EHYA9VGqhjXcSGh1zcByavWpzdXk9egKCwNGacD",
  "key19": "PKs2bySK5GvLkhVcn5DHhCJGCKt1Ud7bKai9LRpGhMtAfy9mMbZJoSAhPKvvXSfDVwErBBfF4fDoki5aHUByQod",
  "key20": "3CuwBPGvZTrt3WCdWYWNKk3HtaTbFE6CNGQiqXvS3MC5mYw4BGp3QuKyBbeQs8DPfz22XCRnjzatwkUaLTw8sFjK",
  "key21": "2haP7Ttv25vyLy7Bo2LXEE7JJ12qCJ1yLWSkeipjQZY6Eq44A3SPGRP7dJSwwhGpVTMnjdDM2bJwEj3VHX1qQGPT",
  "key22": "2gXtJZheSm3SA2dHrDit8R2T6Qz6dHkd6UHRRj9PjxZJLP2iwy4HZ1WJJa9F2CYN9gmANAzYohto6i5oxAVqNUpW",
  "key23": "2DgcsjbTkMpYYWpvmZquFY8vwTNRsBJk6o4jTAPnegaB3JiAc9AEV6ydsnMCtrMP4FQKfsATY69LKE7D1BKHED45",
  "key24": "TQHcfBbaQXPnBRWwV5gfVdbK7ysRim8hKcPRMDCtv6v6ZjUimoLHMKjZM4XSDabfm3UFVcu4111sYoGPDqGjzfh",
  "key25": "2e2eCWEBhTayER64Z88mixwe5jgKeAS3AjAEk2hTxpeSruVBByrchuAf8Av18dJKNvJqRrB4uXAKRncYaR4WYysW",
  "key26": "9j26BvawXuf2S23LJCpURvzsJ6zP4yiE6AziLumGxxHmeXeFWEDGPZgBg7LtakDZEuxohvK5Q3nz2Hh9MnZYe1q",
  "key27": "5ABVtgb6MyyGKL5etS7vkt4iScwaeSoDE9kF7joAfeS7UbpqqptnHKF5H38b4dkiAwW44VLWWpVvs2njuDY7qKcn",
  "key28": "3N9aR9v4oPmrpLiXAsfo2PoyGQpXbAfb6iXwULKyi4PufbzDtUcAGFkGLBsfqKKZfQsJkXggccDBiUaEVouRnbff",
  "key29": "3Da96SSwxyFRDNYm9Jn9ifHm91DSVsSow9GNjUt5aoHYHAnoemtXd7Tcf42yxGA5GZyNfV18tYFHz5FW63Nz7vYo",
  "key30": "2h9QrUZcn4AXhkpfjn1FDEFUmdvUBT9pX1TBuMmceKUDspAia24YViZbEzzoRegpP8Uij7QFvwEtXCDdibuekHhk",
  "key31": "2KAKQizufQLc9UyjLUsJ7dAygYSQtp7QzDvwfmPs6AyuCFn8RF7yYy6SNzUJpnKSiaYqQyzWsbfofpv5oVd6TC2A",
  "key32": "4yarjnTxPgE8AyQL8i6mK3EpPjY9LKYjvGGnnTPmww936eaDTvoFM74XuotoMv1yreoP9fShBUKjzBQUWfGRHQaU",
  "key33": "4Q85EZCsw9bKCzHNq5wuUyjfKQDfVQZnK2BawckpvrQkUgsFHhueo1Cqz8xDc9dtKoaNXPtoxFVSR9epm33kq2QP",
  "key34": "55rEGqgxokyjVHTQH9oFdi1dbqT541qgdZJvYVzyEZ1vtKrA8TSsvf7Y6Stz5opYEoTiC9ByaPsLxfRsei5rSNC",
  "key35": "3BfoUk9BwneZJ28RutiFUDYPiHtt5hk3NA6AS3SDcLKdzDKh27WhPxpNJju8KJ4NTXAXZf58N7gSKfwvgdyP7BRT",
  "key36": "2aYFaghZvebxP5sMx9QumpgpZ8RUH2H881WKfCF5RnSrCpTt549MybKRXMNaV2dmjkFSUSzGuk1w7cHXB1Usk3Wt",
  "key37": "2hk96owXAeL6HAxfvygiYoxFK2tK3S1kd6FNNkDM8tFQxrHgALsymWyTQKSnaNf29iN5DT1kivJuz4RauaV4dYvi"
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
