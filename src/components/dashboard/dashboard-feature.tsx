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
    "4YMP5iHTnutAVAxJPcpEjVnY4J4mspPcVggjJuao8Tc4BMYDniqiwGdCauJRkrynQ8Y3zMkKzm4tWErb8TXmKkZa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m9XFXpNYpen4NodQda4PkJxQuwrdcV4qdBPSfNwhLFrn8u6jPHDAsU18bEXaSuDZUYHKkk7XpVyz416zTj4vi7p",
  "key1": "4fyEBqXXWqiPzuS1X4CQFfEAg72pdxP5mb376Gd8jvWwLmzEWvrGuupiY325LuEbHim8b5rur8zivvuH2hS8YfCB",
  "key2": "5PU3VdoT7o9wDyff7aWvWXpvHVrPHqn2aHpsdRh3CGYixTzeBwygSN7jFxoDkms6CnvnBriovdva9qHVCRnBvZmk",
  "key3": "4rj1K9rTBuPqjpme6LiJgHnQUkWQBWGttMLohjfupQNFf9V5d4TDv6BwL6vD6f6NF6iZCLGLsxSHXfKD8yyYoLmT",
  "key4": "3FYFMfzWbgAb2YynuPSCUBVLUavbEABmZELmXFhDB35HFjf9XdAgY39KXDDEFjqAthEUADGTEw379sUtFqs1SwwX",
  "key5": "4srb4TwzU7SKgFpPH4CqaW5vTFQDvCmu8RmJWLqcb3YpX7CxPjndx5WrebehbFtPdwqajKZhwGG8unkUEdbSBvFu",
  "key6": "4uBBg4DYmVhEwNjaesD5duqM7Dqy7BuCKaMctHm25dvFHkek3QmKYGqxATdvDS3EeJoDzeVhpdx2mkoHMtGeESue",
  "key7": "thfbFuhBtbxbwPhKDQqrgUhf29KQwKhRHSacYeDouTeMF473QHHTp6ZUxQKidtjeYhRZPk2uiNM2nrJagnXrdEk",
  "key8": "5XW6fFvoevPEvArq5gCsixRBb5sTxaF6FUFFGxMBAQhNBfwVeVcoeg4vnfF9SSLD17QNKGmGShJzwcay93XssitS",
  "key9": "4cwTWxScUGw9v1VVfFdBYZm32oxAnAhqShZZifMxMaSbpWjVokSkkjAuAotn8NFKfA2ZnjUDtbtt4nzWzTTXagyk",
  "key10": "2fmnFWwZjetix7R9JkvNyCmHc1okfLZBuxZ7XpFkQCDkyJoaUtGHYxYji6TERtdDjhZbrZxoRSPudkv5b9VAzNZH",
  "key11": "3JAD2YbXk2rx7sn6RQMDwi9sBrfJ22L7eD3eYS57hNJfcPytodXbuWPmqepDzo7nHsTWZBHTyMwMC2YqBpLgFJxC",
  "key12": "4QSSVKHmS3cZ5vUftpqVxmCfcsaXpaQVn5xvWnqGt72XuhiGVi3BJYgu1sLL9tRjTCyy44ebBUJqXxr1AoyV8ZDy",
  "key13": "2b9CQq6ciFZgv47HfFAgN9vJh35yGiyrfie5ENbcFkMefNkEkdduxFf4QaKgVXcXHjDG9oCaixrTfap8CGKudcsm",
  "key14": "3DrhpK5t7tS6K3Gd8WXs6tTey22eTda5t1Vvw2vnPMqiwdEGJQNHeUdYVhA8imDtxG2FEg7fki8UGmBNu8C7Xvso",
  "key15": "61wdvtB1q8yVd4tzXRv76foPCzQwr65V3yxb2T6ZiwkrapeGxLbdqFD5AnMWB14WsYEML6hAkTv6soRxVjwhvZWi",
  "key16": "5qMffdPnH45Vc99MvuNkbAUhdaCv7PdxNLkxhdsQm639YKEoy5Gb8W8uccg3TxZvnJhWwzpDcCoLURaxzZNLy6Cq",
  "key17": "4mKWTq4mJ8pe7Lm31w4GVgvTwNnWcNTtaDy1DvjzNcZxruh5jGHRrk52iD9f3X2GScved1HgJZGS8UReTfCTDKD1",
  "key18": "EP1wRe1BDD9W9taQskpuTn78MCToS82bkNYDqD1NpJsYo9CGMmLJYeWBWRWSfVNjx6EsyARqozreGTfQEWU1YSN",
  "key19": "53cqx9yrQxhPqJpkCiZkEUkJuKwnbVYURkRjJUn861H7LneKosPQVp4YJxw5g2Pny25hQLcFm3JEfj32CYkb4gJP",
  "key20": "wwQY6CoLBj6GcJaMjX6BPR32UVj7t7wxPbp7yH8zU4Y5YyuFcCB5Yf4pw8PxAfv68unxeTM2tyawaciUAVoS6Jq",
  "key21": "28Ter3riUFApYGfZbeMhPEthV6jwVZWkKh6aia5SvSbGXZnQHjgRT5HG8cHo1VFJn35sBd6ZdpGfg7oJRv832PK3",
  "key22": "2LNhAfABbS4ztiDm8HzVpcNdCN7f7K14mtLCgjSkmcb8yZLaNUgFfAqfwHKX51PCDUpyfNjs2rcbhZCFJEESFN13",
  "key23": "5fqvpeSbNfwwNT4kCfB4utRVTyGU5SGNWxsGrbPYqHq7HbQFW2qNwKebZKwsCcvVM2QcCuhHDT4eoZMEEEUWG8cV",
  "key24": "3VxPezav4ASHztDms2x6TwUoDcmWizR6cuh9bM2x9guJ37L5myrzH4PDekpsr4SvBEmFBYeWh1P4pTyFMG2vzyJh",
  "key25": "5dqN4suqgvSXbf65NzEnsfWHDYv7obCsthxGTmu9MQz6d13gXdnr6ocAt65fGRVnf5SApa56gutU4NpKhBXV8CLR",
  "key26": "jm5mA4vmygzAgKmDTJdLMKvTvNeJgFdSXvCNdCdbEfmArw8V3TFACqU8NXob6LpMjZVGvBUGCEKiuyFGHRr8ioA",
  "key27": "5kRrJtRF3kTRbdzD4kian9xEmh3bdp7C3QGLdgSL7FXBofpooibpDQ75y38xzQbZ9J2PSQxYFzW89BzXBJP9Jv27",
  "key28": "4hvUHnAxQkQqgVvMA4vAteLFCbTtYTbD3SpPKvR3W5YwGewW5N3bVuXrfE2RzwLTJD73AyWPgUVsuGVnWe4CuTSc",
  "key29": "5PQAr5an3J9Kw4JgSYG2mwkMAi7FX46vRgKxxiY3RghFUjkcDyu9CPdRJidfMwb18mFBWSxrgAWwokVqiiGidGQp",
  "key30": "gU1rKc2NWk9XLLEajot269tGxbSjQ9x3yHXTPmKxHaQsJvpNpRJYsTXiNEV5iF7V5EUUZQQRnCJbGTKBefrnjr1",
  "key31": "xojEwuLHRHqmTSjkdZhxFMsmMBcnVR16G5BfgffNkZa4BbaDFe3dyza71Xt6qAKepSTpv1gA6mf6ApwiPT9nDPS",
  "key32": "3dvt8eijYDzY1jg3FJrxV2ArcPYwMPqX59u7AdNQVdeVxrwLqdRt4y6w1aZQ9JHmt3JUuhcUAx4aGFTUthN49EaD",
  "key33": "41DmrV5ikTZZFcMyZ29jQGuqLi9Cap7UWyPQTdNfsqi9RgwLfRdTrnZDGaMXaWdhoK8VXV3mS7Ks73zDrAp3cr3m",
  "key34": "4ynTJAVgjnq48c5nLood5xNhXmqaiPvs9vNm6cUVGQgorQ5NKv99XfFpF1BvLHPyBqzC1ApPQWXxyFrRkfxFxkPr",
  "key35": "3XMzn4oKpCgR2pBsdwW7K1gg58DKJDwXhg7C4fQhLoK2Ts7BbBe76HRPZL4mv2ku4EVrQ1qi2ZPVp2CKDmHZxeku",
  "key36": "dAoLmSSbyi3t9V9m4yZFcNG8ksFUuRLwPx32jQZfjFrm3ttkE5ekoH4WRozdbww99ZtdLPZMZEJdTvJUNVpJu4w",
  "key37": "2VpjQWDzSMgBdwsS73uBAQwyt15G6zWVHVnKBs56EaAtbLmqP2VFbjZ2tZTnT5f91xzGadvzAZEFcpDyXdXPepKT",
  "key38": "5sWFzn935XAQpYBKaDgC13YPN8BsDNjdj6m45GVbvXVVyRREhiKYWBHx25JL2smVDr1VzJKU5Zeob3KQc6PzKE7L",
  "key39": "6YSNwyk7Z4ffo7CgGidjywdCq1jaGamyYnQwgVSX3UpaGwUUzb9R2ZuDreehRTN6qtZky5FkN5PNhqBcVqdMt2H",
  "key40": "48N2fZCmBHDcvKEgCj75nAbdNQpECEiN7usb4xcqrwgRXQTMBLk6aAV76ZKMEwWBTLT82P6gMZJgnpkkva7Byi9c",
  "key41": "33tRfBHZxGcMZ1p8hX7EQABKvyjHvoD58SksmTxwVHmKL4XVguwChMD793q4r4EKpajV87Dobdv4L6KS7hZfvsnZ",
  "key42": "4NwG8GZB1Bzzk287m4rUEhq3FVEtH2hUTDfTbZp35mzeA2JXjcjV3CveWmHAMt7mbwBJGx2DzsR1jJg4Vsqd4PAB",
  "key43": "4NBfYoMyw9ViDnL2Wd7Usz4rqcpuWzkpx9EWM1p4G2vmYjCyXqztRPxfn1c9oTtVyCnDJTvMQDnoKuYPrGmuxWB6",
  "key44": "5eyyMmATfCSFvbmhiVXaJcrbroB7X9pWovTXJR55NTMuqRfBXzsDbVnXcqm82wmPP49YuLxWjGH1y2g6U2nLE7AC",
  "key45": "SzYzYBomiy93SaDQuMB9Qkb9HfUuYx8mokwk5S5rxTbs7dLyNUaTJUoT38ASFPQoQqcbazJ2T2WvcrtZ5G3PAfZ",
  "key46": "3uXMXXj7nuLMkWYKLGyFfrbgeXyDhVgY1ePmwkMqpiMmxGRMgieyY4hTJra1w6akZG32FWy5VSBAfjdYSp2os9Gj",
  "key47": "4VxUzkDJuS5EFT2jaB18tNYgux53kSG4vhpxKxDu8SuFYPKeRPgtYcq6o7coHw4aburdvQm8mFRpAavWpCKvbV7H",
  "key48": "5nAsvquHz5YBVcAdK4rJDfNexYJzbJwJ2ionAAJ2HqN7pc5kk7UgZquYAgTrykaEXsDgUk1u77h1qTMSr3x8svAA"
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
