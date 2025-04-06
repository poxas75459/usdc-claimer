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
    "h7ydyycT3FW8TGaZ9S1a3tJ49sbYWAb3iBMEeRjL8PY5Lmk9dhFjgujQXnKPvw1qfUVXNJ8od9z7kiqJ7H3W6W3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nEqEWdvpHriWhSKTXijxvTjx7DLriaJ2w5d3buvPctVPdy1zVnM159gzo7DAKGDe5cdy3SgXPHhGAHxSqEcJzj6",
  "key1": "5DLyTpxym1vTHuWX81eKs4fevkcsbH36UHT3zutEsGGYuq4Fwtx6U8Mgpr7K8nLFsM6gZutWX5NdVi1GCh2HJN9M",
  "key2": "3kP3dpmWBBoMkn5m4RionQT8RuSAeVmz7GYjbST2xfHGZBRfERJ6hMPp3q8P3oXdspAdDyvCpu4eXSuzYPT9Rq8L",
  "key3": "3Gm61hd4GLD9jJSZNXYZK8JGoE4s5hwA3DWmaSHbA8jjxwzrAMN7T4HMbz4MbhQbXyAGHDnd1bQ9nDV73BYJXPt3",
  "key4": "yC5GfSjpGej51VjYxrvhzGL3EbaUaPD5Rju3vtoDxSsZaMzkhKMAv4F4kydN1yn53MZbQacQwfBC9o8LJW7Dtef",
  "key5": "3jLMZK9PGodEGJx89gyPhpuMRcyoEJtTZr5MrGTjt3Sd4bJnX8xoDags13YSFAxC3LV5kiJDMsWQgSqedgTRsUCT",
  "key6": "3nTZhNMaV8kwmHUbfRm4d17cGGNtbvdvYqL3RKRqibizCeyfEZKfkRcZRmfVNoxPZhg5rTkt5zAdtrMg8WjsXF4J",
  "key7": "41C5XiyAweWbjsz6iwEMZ5pwPRYYjDBv4TSn6iVx4tuCzxmGDytYo2HkEz9EH9qrGiKktU1s3H5YhMKMJuLCkdD4",
  "key8": "33rtmHb1nveP2XvuHMoU62sdErzWqwJSzvtdJGGX4DVVPkswn97CucaZZq9r9yfqG6ZeZvUL3SvQqAwWYsC4kkF",
  "key9": "5zg8m56USVwXGwiSu3ufKA3VWZQ1C5B9xqaUVWGUh4Lw6PzHJL4ExQruHyy5wJ4XnJU6WU2r81cMAbNqGFUQULoF",
  "key10": "4nJbkbdM6jPBQUL6Ad9hXkFQwbSKCQ7zkAdf5vdvrA5godff6kiqYSNnN8vFLUWoAxW5uefUfYfBeY1kSUNVXYip",
  "key11": "3vpXBM7AuZ82ssV3ScFn4CL5rHuyeahQQHKwrPisZ2vVwmA5nwRVLmpvkkT6sfjPXDLsBarszT9m4Hu9V2pM7rQX",
  "key12": "2LrB36Q93A7XFmK1KKC9YaXrjXx6tzhu4KdpjHPzjG37McphmQxZwLsWXU67on6gsdrdsz2wFLz8BkbroQD8VEsQ",
  "key13": "4mVFdHVZgqLVcJKsfp8F88s7VDK4iim6qgaMifxPzRbCcmja8YSmzp9GBtaR9h1drEZR7tceQh2hu8F9pkCk6rJs",
  "key14": "4Kb9qRVUAjgkECH1bAPHnDJdn4Y7vPtVJYW97iM9Zm4Kb7YQ8Vxc4zWEg3PkMNEzEkvTJhMKQd3f2nWFaSHBiDQi",
  "key15": "2T5y7XxbvLpNs5uomEHQ6cMqsPnXSdyrocToYXoQFnSykHGYsETockYsL8aHqwqrXdAYh8xBe9TgYRAadAfVtp8x",
  "key16": "3ebzF4KmkneHVqWzbKPskWUgCJf8UjnWKJWuStEAV36jtVvbGCLMnc1hS9XF4kFyspXs9jYymZcNPX4wntkzmBDJ",
  "key17": "2akK16XLUWhSkccyAMpAd7WQbyhV5rf77cw9KiQtYbDNnMjj6mia8VgmkD1k1UjU4qpQ9R1YHqs2t67bzXNJnMec",
  "key18": "4wRQpjbWN9WQZDafCiEcmn9Z3r7wx7cqxc3USaJd552kCW54sa9kNMuZRZHGcNHwqThKXqmzt28t1isZsqc3zFUm",
  "key19": "5mTiuw8471Y1qGGW4WQuEzwQsW66Rond9WMuEjZ4M9tv7Fw8NWNejmRg92yZdE3ZmMYQW57CCASsGv5i9Qp42XV2",
  "key20": "w5WS1mQA7RJJQZJSV4GnebXQdDEiRY6YEegrcycCSYq6VupQYhR6ArdaNYAoRYi7fMSG9uTTeZ9R1igssjUPkxc",
  "key21": "4ZWs7RzkEjuLK1V6tiYo7jaWYkzB8GNEXK9VykaQMzywGEyFUYvWaE7pn3kom5GQ7Fg82JXWfFRBBz8icRfFSjMb",
  "key22": "4CSz85FECvsXQiu7NbL6JYcujcardh68PP4ghj1NL6k5xgUYQVAx4RMkPE5KaCEuYejFiwpQg3RyCDjAzE3i1NL8",
  "key23": "3DrcDtEQ3uihugVATWdJYN4HaQeAWMZbPigpxKcE7yyNA3PUcDCYbcpys8HS64sB7KWffoXjwgtg9WZXd2Eh7kn7",
  "key24": "fpJnTiMk1DX47cUCcHNbdwRLLh5vZHZ5HTtqVD56PSobkxDc3H9J7YJLXeEUBnoP6LEeqDmuWSjxag7KeztUmEa",
  "key25": "5mZDM2EMoZoFFdd8EmZWbkxbv2ZT9jeKaU4WNrz1D8XfQrReQZpVUBzY2FLt5qYMai6UMErYbXfCuvG9EYTLuszo",
  "key26": "5cDdd1vjR8gr51kW9sKBFKHDeXD1hcnaxpqnHAjeKukDkfTXp5UphPjFTTZ7R6WpScg6JpuveX7iKhV6tVbuJBvR",
  "key27": "3nWQzQnW9afTMjKqLmYE3E3qfMKEmygzj74PrL5VAscgKNC7NcWHGJYowN3psXeo36h83TcNhP14dSNnZcmJuXZ",
  "key28": "5QM5XMnLLijdKW3FScVbLLnLNpPWYU5kcgqEgFVNo81Jg7iYJ1dQUx8ZHbZ9XLMXwmDiYRrBwQguFQ8M8Ta4Szme",
  "key29": "4dc1avLuHojGbFxJu3HGCraSqjuKR3uKpyKQorwkEKSVLSrtE4eYnWAtYsN8Vt654CjBDCYLXVLuN4xnN8NhoxFR",
  "key30": "4DdpbWa8cihbDenC8r6ztahd64W5YDPEAV7HQbiZ9cP85mam5hTEtKt8KZ9u1VMMWECg86UASoUXfKVseuC2xyZ4",
  "key31": "6417Z5PQsi7MaRNGrhxcTFa1dzQTA7QaVhn9h579Wyjo8d3r6YxZ6sgVHdsbkyLbNtRzrDyjVjxMjBzzQvU6mZTe",
  "key32": "84gurH3w4yW2U7qwkCiM2feaSZeLaWDXDzgTEj9Xh3rXJ58G1s7UozY5wF5XmcmGNvQDexUK1V4BZ2tdegMYQf3",
  "key33": "4mJ6j6wTrruKc832xTiqqgaXaigxW2R84TxF6v23tXxaCQJe2tAEJLp9oLm6RdyxhVD78ouMTsotU4qMHKmoxgmG",
  "key34": "37e6ncu5jWxpzEE562khRpZWsbcrnzqJHzndEQ2E3P8SWx2qtaGuh6AyE8Jj5SSnMgQfvhKzDzGDb8fhE7f3nakX",
  "key35": "3kum76PXvAVkorTXhRXMTT7cPYbgCKXthiLAoRQxCayEGVJ42g1XPkJNA6E8YndQXeGJXbcHHXzh7KLjNeHxjvKn",
  "key36": "uTn8nyxA6gni72MbNkxsh3MjxJDBu2ksAP12YJ3CaWJAYcbbBMC3tYt2MbBzy3U8B6hHo8N1bAjPfWanfjVLLxg",
  "key37": "3aTg7LYieqZWvCDmxbpw8chWw1Kr2pqa7QUNbM47dvUz5dovGZwMD7sHj54eavq1g4vZhh6zzY646B1ntwCbPqYQ",
  "key38": "4F1zVodAQVoLHkavTJgZqsKusHkynLZfTf8KuNv86wGoNakrHCxuEJSuxX3EjffjrP1kfvJnALJqGGeGJfmFXnxU",
  "key39": "2FmK7QJYAi21ihGsf8DGxBAtspX3UHcDdUjbLX5TWQiK9N6BgQKm1GVGuLYMMdcbezuuuSgWJoWeBnjXAZrgeML2",
  "key40": "49kBxUWxpmwarESq2HdpBPHfCqAhoydU3mW51J1PQMxMTppHzoQNkQ27DTL4RkZB1bxKk8uQgraxGEMBccygJmu3",
  "key41": "2bnHbZV23MFR5zf271wuWMJxzzFfyt3KYKGAyECMTKPmWFjthT2vyKxMwBwnVJkiYKyT3hjLSTruA1tz1ko8yaNW",
  "key42": "3ppeAhNDBfiwr33DmXwCdjwdzpemv3GazhBdMSeBnJPuwo75yC2XzFwZsGESVeyAKP1VLQX686hHBVsPxLPUYDBP"
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
