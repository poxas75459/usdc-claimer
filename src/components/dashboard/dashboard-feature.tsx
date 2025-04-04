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
    "34d2TWDdgxZz4jgZ6vwkYMEbd6nWGFJoYBqPF8whyVMzrrQKC3xhbUHMzepaSpXfHdT5i8Q72wUHRJ9QpBdNgp2Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FYBB2uYiY7jysqSxYFvdEZwiWRzWZ2pK5nnEdEdNkexnkCTTk3ggXZAZvPaXX1B54kjMk8RboXyUGMAypfXMSyf",
  "key1": "2PsXY6AhZJhtAjD117rtMXfd74wANoZbPscBzZBbUBY6WNCYCeDMSSq1WUhTjhAD9nHQAdhdCvp7SkVgowaEiqVr",
  "key2": "3F6LuUcsT1VWZqbgZpNGReUyuGTZhPcGW2rMjtxHBWPgdJ7KgMPqLKVDNdyfqeY6GVZMCtPH1WHcRXJ2vPtroYLR",
  "key3": "2cVDMfiDpcs1T1j1Y1RSGok4BhyKUz7jvRRruacYPyzsr6aNEyehUdX2v7de3kY7xUftUMuAirnTsEkc166xtanv",
  "key4": "3kE38GxTstp1MtFBZwovBncNGHbJaC5QPfuToehHiZzqeHyk5gc16FW3YiK77vCmVMtody7nTUgcFmvD28pEKeD5",
  "key5": "2T6eMobTtYExjMsaZTsGfo2ZQH647gNxxxVBwm4DqS61g94h7xqBPZnMKcPQN3PBE9u9ZEiTQeiHVrSQnGFMCw5T",
  "key6": "4JKdwu1yfptajem44N4cexZqeNuyMmZMfUM2PGuhn4vn5YtG9gkcR6pTLcfeg8dK1FyH5dgnHtKEjj5qFVV4BX1H",
  "key7": "27p7mCH6weTPi3ycTBdFwbY4R8H7e5XVuk67hVteiTAK4kadHBAYLswRbKKwtf9DprKgro4sVCzGy3kZc5YaEehK",
  "key8": "sFDe4q59bF6V1ty8Bs8F4WBB2PnJkBiCFqfsYDGX6JnB8z3P6cxbyQwDobMscG7gRteFZCFk85HvSv9HGEGwEjm",
  "key9": "4ZwhwNkuEQCXiiAGrMfRRJzFJc9Rezb3U19jxksNz9twJkRShi66RpM2q4HXcbitE9pBEmSq5fkxrAMR4ReBWfzP",
  "key10": "2kbkDihNHxCpKuZnAE15qgifKyWeCw2LguU6pjgVrF8xg1TQMqQo2fP7qYbkRH7ZnrSaeKsjc24Los4PfgFjoLyC",
  "key11": "3codptNcUFfDFGFY7dGb2oKnZDKbNkeMquXnxDWesqjjrS782uWJPG53K7GVvg1yhv6xcrbhzoLuWL519FuLbkWt",
  "key12": "3stijTxbASRELFL7N2WCwib2wSMDH9LBHnHkYjgc9u5BmZfr7eaZ4s9RzyJyyPw839C4LG3Wzh2WuuDgf35WKvyw",
  "key13": "cxMQqX4X4VyreYGX1FvTmPnLCdo2hscm2m7g9ADbmoJMMUdhrwEZZYjivQZSjUhkmEnS7mxGnyzCmTepgoKgxX7",
  "key14": "4Q1AMGqMgxCK32z34EEJvxMcd1qWkoVnkHzBvcMaK7FtjxAibdq96UY5YkmXoyeZAmBn5nvTJCCJa8DxzZpBwhsA",
  "key15": "5PC8zskKfimTBZAcCCjNwCFWsX2yWFdfWne9o7p5pGYZj7mTg9pr3LvodV81j5qHaehvqyjktwdexqztB6qeGFhq",
  "key16": "5Jvm8ATaqnrcBaoizzz9UAbHGUoDQk7m61uQ5rY8jou33MLTzq2aN88xYo8Y4aHWmiYgqkCKz77ncF9PPNvTzqqq",
  "key17": "qNxdYr5Q6Wuyfpy4QQZt6fPfJtAPEHF1hHbF1zoFUJVrBzuq1o62K9dWMj4GeK7jizX7hyBcZoGbFrsawMBNGQt",
  "key18": "gF4M7QxjK71LSexcF35V2dzGyZBjFxLuzXQtE1gSetEnCzSzNPJESr8CZAAFbmrHstLAFMYU4nDX7TFJUf6yeJV",
  "key19": "5ER3cvoaNBgUkuT1yiJ9sNg5SnGWgGDcF9HAbtGGSdjRKkTmPLLHkeBoMXSdTfvEatW3yHCUW3vpbNxLF98wMBhe",
  "key20": "xhUUPVpB5mt7yc1jUcshyunzTxEkxtLSYuXQC4CSmXX1Y4Sty7eN7L46wLsfX38BEeRFrDaXQh1S2o2bA3EKxju",
  "key21": "517NHKYHjfBBkhamdFUL79rEvBKppj1dkhbFjNuLMHMcEf3apwdZfdhHkhd7vhTt3b27nQddebPrZqa4MU8wJnLb",
  "key22": "5m1wPPEzNdxg9nxPJY7EwSqCVHseHj3ug3YuTGYKxi1CUy7GZTqaCxj1cWL7mqVMXnoUYGdK8f4j8k6xYf1yydgn",
  "key23": "XqMcQTL9RiZoAz14ykAEjFpbg24vCfqocvq4kKq1TMfje99xUcREJVhWQKa77YN1v2wjbyJKhAYFuR5zUpNniuW",
  "key24": "2s2D9KsxqwYmkKC2H9DfCrEM3kxWUtT1nMoPP2V4hSgmfPDdnU5nN4EzSYhmAz6wtgWv9ACd3jHZuzzV6bKdwfCq",
  "key25": "4F1pS4kWFyUTPgiBGzNvwWs6dhedYTZPaXQ3sDXcEbLRBpDJRxtc7GZ7ZjX9CwtgSw9L3C9PpaEfo3F6ack5n4KB",
  "key26": "54vMaLCN1uKQBSdD7nUXbaz1fGixu3CKqcBafSS1BFe28ZkaycimYKwxXoA7765C3VmziBiAXqHSFG6tkhkefp36",
  "key27": "og1FXTsLWbKgkvgLwVc77hUMzPXr6htqjnuviaPoaoQobovBMUNRcEWrYiL8jKwJspPNHM1K4QRfDFFyjLVRifC",
  "key28": "2DD5Jum4EGYyUQ4VfSmGaqT3x2w4wYCTLbRsSv4yXkwyTrAScwgrnH8BahCJhzpvn9AxTXtRBc7wHjZ9mUDgYisi",
  "key29": "2rUvcwyhR2UiNDqRaBMbXRXix8smx4p5pAXY9SkgM5xZWXv5AKoV8jzVUQo8bZFE2B8G15gWuJxyQcVUMdDXLeZt",
  "key30": "5DYgbGKACX4c4mfe776qQ7dhqM7a43vTy3svwws2fxpHoq1e5MXzYHhpjt9AJ6dsvAogS189BJtNFQmrbx9b195e",
  "key31": "38BkqZdxKNYaQT7pBku47BfW2XSh5EtYPJKVQWLrVHngcmQVU7ZYDKoVg98SjNPXYMnpXfqztsRqS5RMD7Xtc4th",
  "key32": "4xB44CbbRAadwvs6DiSzSAcXqTovaUsQP4ppq5519UddpWDoUz17B5P3hvJqgjmZwfLHBegWePqDMeCFQ7oH6w1V",
  "key33": "FCcxpmVQuuq2yv2XAvEs88x8maAuQyRAzHTAtxgYSix4DDBxBsTEP64QCKqDZAA5ZPqghXDDiBPdxB7TgKGX2Ti",
  "key34": "xhrjsxD8JCiC9WDdrUhuuai4JyrDqKZfPgYpRyPTZfxTDy7fXXxEsFZbYm3obu3dfJgydf8rKJYETx3ciVU56Lo",
  "key35": "2imJHDsCrWVSjCVUzDXKgAknT9bbDh5TSfPB9Y5yxkoGpAWkboiWmsymVQSYacW5coPRQQh1t9Z7xW7eAK1Fn9Qd",
  "key36": "2Hwn8p3RDQthAvfAtWnriwX3SYZZnjCi5bTeJ4p2ttzf37yyFVfyF1X9xZxH8ci3wvtVAc1LNZjPoo75acR6MLWF",
  "key37": "D6nn4cgmzdbq5gcUGp5m4htVKcuuCbsWLCzgmPtZQhfQmtwsaoGeBcpbzmDdCMMps3L9o4rsydq5ZhD2NwXm8YP"
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
