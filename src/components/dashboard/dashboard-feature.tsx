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
    "2bLJW2kWkwkDcAJ5mGL8PYdT6vduEFANok9jsyELx1T7DcqTR6zMS2u9wn6ieof9T1U2KyqCorXZrpFrijaWjYTF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JAGq8MvDkbZ2abZ9ZXXd1nHmEBoR5ZVZ3rLRbQt2iAUBds7MCQdxYkpSiyzwPLAm1QHSRjTwg6gL2xAsqCipobR",
  "key1": "42kU2netdggxPQgLd4GSKCcAJNFbeqdAsYaVk3ypuuvZhZQctu1pvViBfWbEgXgqJEjBThCAH1AEGNh3vteC6qBA",
  "key2": "5RQxNavTVYCyCxJbQP52MAos7RXT5eMofAQJnb92gLQSiG3DcieGC41qHih7NS1aZYVV3woh3HzCYe1fv1ziKDVw",
  "key3": "5L9pp6irFby9eTvqPpvHS1PewyGJn1vSwoM1b6BZk2PLxdm7w5sUUqi1srWjLxy2fAcsEj6U5ZJbNKkUYMCNmcrN",
  "key4": "4i3fQjKGUdjTzTDmk96pNQdeuSj1Avw7iPhKKyauj5NjaBHjYpeBCrhNEcnNyx6hu4PPSfy8v2KMRpMaAPTATRsV",
  "key5": "36bEctCXPDhCLFdNtitzBD417ec4MrHVqZurTtec4GxtLtD7WG73FNn8QwjCnw9aMQrvk3eU7wdAaeM4tr5qYHFS",
  "key6": "mdgCcy8REX39jKcPPJxR9EKFpQS4NMRFyaQSfWGv2qk4HsTQvETzZ41FUh5mFSCb1Gab8p2gDqLNrd9rfq7pi8f",
  "key7": "5v5qjGcfWS4gWWLf8rQjneSH63YEShTAiGSVsQME1DzTwqyQHjh24B9rwc233CLNs6Y6PJryoucNvc4hbeb2ydue",
  "key8": "2AQWRKhsYCg5RHYMpzRAYqNKp1RfrAGY7dzmHqp5UUkAwcqCYxp78Q8kTJKuN6t4ovsE5WofRgd8moAwVgTDy9Uq",
  "key9": "4d7XXzscyFkzfjyPGNTp6tJDqgkvZo2o8ATKHe3bJyZh6YmjVukUDW3mtmfGGEN2GaChs4qXk8p37sVy8zQCwFqw",
  "key10": "2k6wuZYYTLDq8hjSRC1xZp2GBTXrRmuFVXcZR8QThQFdc5d3hRNpqN4RGu5fweABHGTtg1Gp9d1hXn8HAQVN9DXv",
  "key11": "kYNECk8qLSgNo98Ay1E1k9XXTX3HJtVJKtDXmxnCtFxDcRTZupXiptBC6BZmecNJWRLGXDdGekbpEcwwjvPb35X",
  "key12": "62WhvfF27wxaBz9k4pnd2VrxZUDKSNCAYJ2H1tkpS69AYRPDSfq64i9GqsgSxJA6Bo8cTnb9a2zeBeZWFjjsd1Sb",
  "key13": "5j6q3JiXGcQ2o1bfjZ52YtcFnfbQx61Fjb5UaDyaLCnhvMLruFECp8JqVyQxnau9DYSAfvuB91dkXjHD5tFMgWts",
  "key14": "4Zm72qeuvibhxom242CQdL3jzRh6RontxwpTQiU7hACSDtCaXBZtXEzGCqsZMHRjgiTxeCPB3zKZhPfJAi3GRHPT",
  "key15": "5Z2MwW86NeJpVtShiNLNy8tiiUTAp6gkuijj1ME5YbHkPeitPV8hJyKrTakb7KDJbotbrnvWsK9WdKkfUAik7mU7",
  "key16": "4yVTUZLTZiNCSmYkUVwnHKnUM6GT9cDgop84T2gFTUJac3rGKNxUoBXxnYJeLi31qKyk9co98bUDMDtvRf4A2e8f",
  "key17": "4yEDuFn1WiA6NXovVbGVgVQbVrjJQq4HQ4iacSx3rrvs1hgNUrFPLkhx4bojDS7wRKMm1rK2hd88aZfLwHQPiFWd",
  "key18": "xPQkZzGtUjn3sU4hgwtGHugUp3M1hzM4XppAvzw5D48xEogN4RNsucM3yLB1tATkuLN75ZgpEfxUbDgUJWCS2sN",
  "key19": "upNEwN7DTJvA4fCGtYGt9UeGFFzNF6C33YpdwiomCYZxwF8mqQuBi691EnzEz4MqJpG1YNJgvddmQqxRJ5wA9Wp",
  "key20": "4XSS51qdg5RXAsL5LKnnabF45PM8ZfXCo7SJuVK5oL5eLR2sQvQriFZqpT9w8HXvSgPoLDupZweC5EeXhhki7KEB",
  "key21": "57CCUBhPKe3E1hpCxPmgT7FsbdA9UJMiBW2wrELurS5mYTMLBWHzsZK6MU3HsusDLKqWrC2jpGnStA34Kn1zb8cL",
  "key22": "32p95oGDKy4veLtHtdh5YKLX2wM1i4ESJeoJsZna69R5k4qh6FNtwotT7Y1MLnydSk7h2qp6KLVywy6DQpuYfhGi",
  "key23": "2MAvkPKfRT9vB6SQe4o3JSLPdcnwneFp8ssfYN1qyaceGJDmqSgDnzRZwuQzqNp8ygb8nVmPE5nf2q9aeeNrKNkm",
  "key24": "Shmszomjo1kXW9e8apKmaxn9tnxJURLznbfG6E4oT6oRUhBJYbESD7hCQKcvm8DMUyHYhmLDC4Sjj8T5XGodwiZ",
  "key25": "5ZfXXb5FWfZVtwzt78hDgbmHCmsVNJfeSid7vXTyPMFxaFv575ggKhi6MpRaVURU2anVrTVZ2foDTnrKM7WSZfP",
  "key26": "GUcWmWf2cgEFoSKsgfjL27McJej9Lf9LsTLv6TSN9VoMsPXvScvrS7SsDMbqFPhsdL4konvveUdoBGysZzt2YfD",
  "key27": "62E3RKfTBEXLdWsvwpsE5nd9WJnNvdrm4MSSUkoN9D41B7xveA3LSG9whjKKUGSDEGSrCf8vf15jV1qJ4bXMU37D",
  "key28": "jeCK8nmsJBB8TWzwH3D1KKq4MBL28WHaVHpLDHGSao7Vobmh7opTCuvXpoLFmtXaepvMSzF8mSjwBQf9mJ45u4S",
  "key29": "5RuPRgYLc1hNCi8LjBNN86bEtJsJxafy8Yd6NgqDBWw7s7iN4CUhFPbK4tXHwh4Lx2C2VizMKLDMEyLuZZyD8gQw",
  "key30": "hWB73qiMKrYXcK1DU3iQQ9QNiHfZhaqU3etctpvtoLJ4GdUazNLYdjk818v1F3GqvgGWHeDZNPaLVJ35g1K96AF",
  "key31": "2d17Tw95yhYyHuvhThPmLfrEggbwx5H83rdXorkhdW8VptLamJmdtijEsEKeDAPYVW1958nL32RdzuudPAxzrcCq",
  "key32": "5fiQTxnxhi1ivnBWcL7YUByPdFHmtFgWbyZ3zoogJsTuT5MoFZq7eieBGKaoHW4UsVVdkdHrm5pAcSZ9zbsYTkLQ",
  "key33": "4cBh9j53H6F1XqsTogMMzrqrVRA9rnLmrZPoEYPQnAkoAFCGG6tYVJkKTycg1nPGnh6f9xbBWSzHV3KKjGsjdpaG",
  "key34": "62RRq2EuuU4QVpYL1DWNqfzWc7XSN6g27sFwZ8Dg72pavr9MkALZf8TFVhZfRG5YdjFq5TKJjXFvyqbNqR5nLEeW",
  "key35": "22i9yXBtiT6Yydy7j4UxCHoyrSCCKCsuXkWpkUqadC4HCkChcY1JF5NVGYCSWAk6en31odZiB9HPMJdxgEZeREkf",
  "key36": "2dDG21b5gr1V2VBeNvZU4kM1D5M3jGEed19xRmxw2zDAPtw29x8UzyChLBViP9hTUWMdha8r7VLVrh1Z4AmmWjuY",
  "key37": "4ek94dpURMk3eVt12BwqT2hSxdALZo2jfcPUW5LkZyvbfAjnudZXq2BBmDwcHswzRJWaiA15Cu3CQU6diNe51idS",
  "key38": "aoKKcyj95wuKjxz48u3cBRtZCwoJQygjzbeF8QpZVJLAu9f3enFSKQFLg6KB2eAAkX5pF4V9NRUvkFAaYavyiGi",
  "key39": "5n6LAodMPCioV7FYUQoqRovxA6ocCwHZ1x5hBxccw6tRt4wn1Yjm4sWSJjYe1yQq94FwdU37zwi3U7rvT5MvW4te",
  "key40": "DkBcjYGvUBfrnnd1bhUu35E2dqKtabkTHBi9doqDNGw2UvBbeYUCckrPXssQQHnwVd8rH9ac1DDoT3NFjdTNyHC",
  "key41": "2CdKpmNv2mgrbezUDfnouG1Fvg4LsZ4JHqhMT1djBCovDVixA5VVnatDEusVyyd5tiUvFF7nAWCwtK3DD3ZwA68P"
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
