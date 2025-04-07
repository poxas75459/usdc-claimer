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
    "4TiLHJEot4MjH5g3BYViW8PMiLTVeMPXhAS6krSGzhXkt4aM5EzRD7NCvonEdWC6ZKv8Sxor5rYGzGHyqesvZgii"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oJdLB8dVsvZZdsX4bHJCrUTjrVnpAqmjECSwCDs85ttjyZREHJeXHdEqYARhjvB6q5TQQWm3u2zMbAW4TGjA4RT",
  "key1": "2GKftHXzr9RPuArAEdPFGg4LNzgyQQ5WgXrJsw1DQ6eoAMhnbCqnxxEr7UpBvmqaWzH9TyKPMeQ46rbQHArkgesw",
  "key2": "2A1QUpZmfdRLEQGBHJ5c8B5HB36AzRsjjtwURcBwuwRpkWYn517HamFUFt4Nzh1zum5fXXFxaJn3CuztLSTHs69X",
  "key3": "5es3QyiAfDoX5A7abYt31fwKwiZM2h6BDvS58jUDVozZ5s4TPg67eNpxPre49gyFwVkvVEqRVBQhDzns6iXq5Gvt",
  "key4": "4cHFrdHTL6DvabToRXL1cEVgqFU3wNYqWyCBmfa2zynDNDF5o2A43gkLJrA9TmLqAUoQs8s61MiTSnPGovrWpB4A",
  "key5": "4xMjaMj9QiUew88LHxSmvgmZtrNSNBkgCwxVmidJCHHNHykXbzUSLgUB1CpZqtcmCYd1opNWwbuWd9W8g9eZazSL",
  "key6": "2uNUUvcZzMCXJGbQJg6ug6PPZtwx4HcuvzKvMoSURY39UufkttAFiHykyCDPexHTrtsaoDE8MmQ6X8tcQi8FcdAu",
  "key7": "3fDvFWKLjfzrLaofPNNeDP8TToaFCSs2V6G3JgFCRMEnzuhCPG4hpQCetYaRHswj8SxnXSvmJszmKCWiButTY7e3",
  "key8": "CNj789jAYvENzqS3x21FrJadg3fTQr3UxQK3Bci86VQtYaeShrKhweWW2NYrs7A2sHhofiojho1w1TvRwsPJaJS",
  "key9": "4QYZwdjsoiCebGUt4jEbTmvg4UdVaBDg2DLcu6SHsfpPsZ4cfm4sd6UgLLAJnF9mXMJrarQWZ6wPyQ7vcHzMqgGE",
  "key10": "2kKTeJYcdEWpJTKH1rVCTbZQpAdkBWtvXSUyAt72C1a2jiv8o5NtQzms8Z8rCcYLgAyUJYA4UXNHg36xbbnLVx77",
  "key11": "5ivszLNWY2jSHVrcLQrWZ77GMZPvxohgXUPPjmNcJgab75HtmSRoivMnXFJg33RgcGVdi8sk7jT4EqqdfgF72YDq",
  "key12": "S41s7VmCa8dhbQuZDLpL6WRn8ACnH3wPZSBYhiXdDvXbE1DGVuL4vfPgXRh8B9pfZs2H7ZPL7k8F3YqXmmb6KmZ",
  "key13": "4cWZy2XuDLzfpPSt1fuR2gaKgtXJMD8A4VsxgkqtCjE6u6AzKy9vBTabQ6ySpaghZDu8HUjwxFZHGQTRtbZuYqXy",
  "key14": "EyQSh5q2spTXugwPYbfTfB5JJbLaEFinSKpCTyLWAg14Bw8nc31Qov2U4bAoKpEg5vumQmZd6dQPfmWDR5qz5na",
  "key15": "2vW5pX4u7mio9nBWWjzSmfryP3V1eqJqD3dUHi3zKFS4GXySUpw2xR8ChefNxqgXaaNBZWnjJ5uyz8QCkudBvKaN",
  "key16": "3DAr2MWWVcNSJCvcq2RUAws6hwUwbtT1BcEnWPkvr6w26HN6iAQQFybDZen4S5B9TLcmtweJqiBuLivo981JdC2B",
  "key17": "28jzwad3Rbhsn3miwjUE6rgdkakWMUszTFpfZkAh3axVGCEe4YzKz5MD35tUb2uJmefQ1gnGwKgNG6PzNyr1jVEW",
  "key18": "66TWbiB1tEvryYd6becB5Grs2QqGC2kEGH2T5ZKqyyTSn1wbtSwGGNDVRGUWb265G3bpiBQFtcDUXHtdjNStt6K9",
  "key19": "tMLyztR5sFTugLQmUP8VVmbeA14ZZH5R3KNfAsqYHzHmvJjBEFNR3jvcGHo5FJ3nXL8WPdgnoFXRNCyE9gEZttg",
  "key20": "5XA1pgpMqs3irufDdhuWPf77XqGeBxEF91b4jU1r5kZ2rscA3ChLyrvwCLS5qZ8FcJCrJGQiuT9uou2NovQmsjHu",
  "key21": "3PuhhhZuFtJDCiKB1HsZVYJwiEzpuodH7911YxhwDYSyNQnyB2Fc5rLnMf9CebGdwickGgPQsbBCGXtHiZ5U3vsQ",
  "key22": "4Arnwr96S2LFqXKRo8NHrQU58hTeUccWEHrrew6b8jzyHc31h7AuwTJUNrpV8sVsGzqRRJWVMA1PBFtBsTeHhfWc",
  "key23": "2mfDBjysPD1oircuDwzfciVHTkbPgCkxW4CQ1ESeKs8RRWnYNvHLew4Z8NiJAnmGjeYgcP5UfDSkSKw8drnQwuc1",
  "key24": "4jDDMzYDCBuVAhfs6dZ6uKJdvyvrPVTkDkmCEwYNiUNbCU4fpdnw4974J4wvAhUPvNGnhTPW5s2RwChRddEvhDoi",
  "key25": "ugMwtNhCQY9uU2GtWRtnWYpSiWuqHrffETkYuyWdZi27nLYnfKhpXarzUCkGMvpu3ez3Hj8HgE2JSpuqQohiUM1",
  "key26": "2mVu1VpycHtZT6x6j3ATs2X5hVnBjQqGXpAQahx3kNUgH8UGt4wvnz18XrZqRP1fMuf1pvf1PET7ziS8r2qck77p",
  "key27": "5iyrvsPRFDPfDsDmZsX3e9iTAJ8Ln2tF3UExYeF4uQ3nCUdN6NYzo5D1QhqtGMkHx7VqN27cbFsER3JFsdcoaGma",
  "key28": "3qqqJ4yap67sAZ2B2SrZCoSPiLjZ9khbEfp8bUrGk4YXBKU3nkqxY2qfYTDn7zedfd6U1mwxwFJ5YYEi5w4MZBec",
  "key29": "33e69u1133Fp8jpNRfwac1s7r52TjV3ERRkcrvwvb8qtVYWQbmpHnu6gYWCep4a6B4JZWw4HKNtpEq4MjtKEVj1D",
  "key30": "5YedUXzpYsZ5UFVYDSDRkUTxvJyDqB2G262LyZw2WfP59XnMDLK9RDvPuBSL9RVyr7BkbqxcnYAYKwNxGKakxkBC",
  "key31": "61QWqZLyy6k8LjrqyGoRAcrNdR6zLjuCbV2SDfhLyna15jj3Wi79fU5bRRLpju3jp6JWgWRoUdMvuWg3P5HRoY7m",
  "key32": "37JiN9qmyMv3LWHi6u79Dd8QrWWYJVXjbFx7EcBxpE6LGY1yE2F42H1M7xcz2EkHH34bAdgWKB1mfoEugaXsi6kJ",
  "key33": "3FQm4vAzSXfRxRUNexizopb1UXrsgN1XPMURZUN8jj91DbuFup59fia4fFTd934wdnKdadzTdsr2HUqiJK7P5yp4",
  "key34": "2D61MHu8H4rZFEt2QQP8r2CiK6mL5VF7B4pKHRaua4pqzX8C9NQeYaRjMp9pE8LmPYtFbPyiY2nsrXf83bsqqoAk",
  "key35": "36mQSsQ9vcwo3eGUQ3BJqJ1fn8YZ6v6y9QGmB7Jo6uyTC1wF2pgJY6A8PCTumFGaX7zJqQHt5Spo1eFZREeQUvp3",
  "key36": "euoCcK7ZMwh5mEEEp4uQrybxJn9TcYoN4xeCX7eFGF566YMyhhGMcArr8sKpfHCtPQUUyoq6avfjfuzVVnvRYbY",
  "key37": "2wPrtyoDgKE4Ket4xjzgs59JeB8Qm8G39VuFncweWjsfgJzVEsxkHJjK6MtD9efoDrV3gr4PMMpWK1ktmgz9NxFE",
  "key38": "5CAVLDZqv9KvVN3WBxrAL8UavcgEzZqBnyiNYZk8UUXr8tQ5e5h7w8vgZmQjYwu6weNhkimQiNswEMdvC2fiNA8k",
  "key39": "2C4jm8BkXPFNMbgQgvSQtNDxW8JrrkxNG6vxhnZaMbSf89VAAZw1H4M2FdDdS8nVDM1u3K8XQ6U38ZMha4GNoDP4",
  "key40": "4xxfEvqpEkGYP7GjkPQHiPqBMGhzf2UXSYFxzM9gQWzEW7vmvx56TCfJPTKDSkXiZu2gvawAxoeLSf98JVEKjPzw",
  "key41": "128c32msYBacm7j38Zy1XRbC3g5T3L6dY8wHb6wmq3dQkgTK7ZLasoo4UNjk4pFhSLA1Gc2HDPCdirrh42KDCA7d",
  "key42": "Qv9KG9DwG7JLbmyMUg8CkPKoCcYpAq1aVRYZCic9VrReDqpALDyN1JEH8FR6VGnjxzZhjuvZaNt9urgD4qSqgMQ",
  "key43": "4WhGWHZQDTPsRpdLShmizZydE72hYcuVDUSHUKENas5QxMVaR96UnZsUjNDRUBwWS4g7bEx1qNDpiWvAu8jDf8Ce",
  "key44": "5TaGK6VCuEKfherYKj5BiammoJr2WrZpfxeYdsnq6WMi4SgwStbEjKcW9wvzNe1JjJnHxRSKY3nvA2Q8zNJzWpes",
  "key45": "215qDzXg5tc3uZRJ6kiHAq2cz7EkTjonC3UBMiLkbuvmMbgtvMKSoKSa54FfM1MQvaaemSZAbi162M5en8N155eU"
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
