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
    "GjKAjvE3Y8AARQ3c6V1RZEsEsKxc6HYBbRPbZzEKxxZKXFpQWqn35RLsPhDS9ZL8pk9odrm7mnn89LN4jensrUb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dKDAGRbJTZxog8itKuC9mDGvGgo66Emwh9PBwzHsMcftWWUwLe4Eqb2ZprWUqczW2m7MaU8Fqb98MKnC7Y33eq",
  "key1": "4T1gf6ZX6SEJykQTQ3n5sHiJ9vUgKD9tEAyqFSA9YtKSJcVT1fzumCzVqjdwazQRqBBCtjMQT3xLEZmf7S92FA8v",
  "key2": "3zRakeb93ob6G8ySdt9sBXh35NS8w2XgBzqrHGcn8hwku8k99MqREHZfs7ueGKzJiTjJvGWMdHtsgp3UpV4hgyx9",
  "key3": "o9aLbFxBvR3XWWii8CNs7d2Unja8AYZDsXpL1m8z5aiSyVEcqN446jfH28po7dJpyZcV8GUap3yQbdWCeVHjABs",
  "key4": "suv3XFew3wWUqvDwvN9YMXbywxpjjBeKaD3vkPBhJiqLwXsZdKUPwuxGaa5c8fUa2URGFMNBsrYAqeQwwSFGYsx",
  "key5": "3h4QGy6BbeCXWfjbCdZWjaB3kxmuCZX5uErnbmiwJDQuimmoqvr5DhH6S3o1T6LjVTNvVY5cmBWpEy184ZrTwYdo",
  "key6": "cdmdJHLpKMQJVj2UTPe7QtdTTU3YL2LEsu3ybkP9VdAfPxEtQ3MwNaySdFwXpr4n8vpeurikxQmiazvfsqMSTff",
  "key7": "4bBoixhNg4dvuPDhtMutfWwfQKKVGRrCF7imNmAYEmBeEi7GgWb8rj4k7gbb3VbcJaJiZK7GuJpavd7zSM2aAKd3",
  "key8": "3bQiGX7YsgazmxCszGgxqtvRHAaqd7RUZrWkgBbx6PFptHJfJ3VBfnZ6c8URcT2UcyTpkywucybyViHpmBAKo2Wu",
  "key9": "3PZ9HKXJfpSYzDfyBFBBkXkgJrUhYBfP95EaEabJaS6xmPHEsnbJ2iNUzaCXTiFqTxZxq2CXXzo2JcNSHZMJ7oMx",
  "key10": "2GWvuv7tXjRoD5GYXCL1BLvDRi7SMHkkHHwDpkg9pBokoREQHzJJ64gBLqcXWJAfFi2Aw8vRh6fnTEYnuqxeEP8j",
  "key11": "35hnpW75usTMQVvvs9AT1BqUCm17biLLq7KssJC1uE5WerNEZfk4U6veSutvuyD1wxMgcNPXzjUXjqpHX3vUdNun",
  "key12": "5pF6tvYCRRDDuBubixm5TjMafUWDEhvb2vVzAiW2CjjrGXXjLYq3sqjYcpaELQypajz3pWAtRzmx92ccusPwE4BK",
  "key13": "23rDjvRQqYC2sk7ekgUs9M8RwRTLiYG8sGhc7YYYndua6312dYuv7w6D1dTvrPW2nuzMFJ3wGS4cJCXkUR19YJW4",
  "key14": "22oegPGVyKupjLERtWooXQNGEBkn3WaLsLs8rCbDVbKi2qCyuShbif18zeUT66uh1HAgYTbnNU3PQL4RR9879CqM",
  "key15": "2hx7MzL7A8JfF2p9fCjxwMZg3w59EkXaheU8qoc568cYbyTufVt5FExUiByVrURXfJj5PAPnLbeWtnaEFJGisDAr",
  "key16": "3qxNTh1e2A4vs6MUgBxPfLEdxCT9qR81WZM4ixbV53Wx7ZDiSgUjTmLuDUDZG67kCgvzm6hjAVrRaWZC197dJmHa",
  "key17": "4wbZpEaDXy94NR5gMFNrtG9szwSN3zH1qzq25Vc63fJTawTfoV2g118C3QMPKPsYUukrVrS9U61i5PqYHXrQJBkv",
  "key18": "5qeamTG4tANWdpjBzNSqxcA7qQKGVgrhKrSqxnSi9tcsTLVya49pBL1MjwyTu38YbCnLH5k5QH8hG9deajSejuST",
  "key19": "4Ymkjn211zYWwWGoHpkDv83vndyCH6z7WupvFYhvGCGfsoLib8LsFpn3LhK4TjGP1PhN3hXW87MxLnmZ8NGQmb5R",
  "key20": "xRsE1oSBhcUkShVxwDbsEefJwaxUXDZPZTd6hjM3AK3Jc8kvMdkBE1ESguzgNGAn75bNpHg6Xji96VxtGQsqZGq",
  "key21": "CdvQX7oQ1hxs2CneWkmSXS5FRhBbqBtGLgWf1Fu6yCE8mHuuQUZ2jFsoJrJaX5FwSxboEh3PGQmcyGkxHqfvXrz",
  "key22": "5NHoYKCrbWm5CJpFm4Q5jJQy5hJhLRSJuamt4u1aWNJhS1KzqxwKkKPNViScdWLAg2hm9nxhmoxDWNiTSSyiBPaC",
  "key23": "2tRVbpXBYXXUnwBXGU79LUoTvmg1F8H6inBZevrF86vw2mmb4Bxk8h2ZAktf5LwVEqHKv5NPYR7SbTPbE2rHtGKz",
  "key24": "3pYW57TPvkMTGK24wmMSAmZVQr6Tg5BZtSVUTKut7YQqcUJVNHuSqCbLejyurG4tc2oQLeKZYzxGxbrgsykd5jMh",
  "key25": "2W9CrsxfthXVx2pydYmJ8p12WRpnncGPNtY7U121fFTsMsSg2gCGtHAgU5quaLRuM3ZhgwoRv8GTC3w5wvJ34WUF",
  "key26": "tNzmUNXPDmKQEo8JKSfCb5cWdSU2b5dmUTA1SkGHPvvPgGFZf8Fn6Aw84f5DZ8fWCQBozPodx4jFm76NHJywV8E",
  "key27": "2fHtYKj5LXWeQEyQb3Qhk5xeg1vdzNuaBb32HCTqL9ApfsNwneKmxjNgCFE1NLhJmaUEFBsGmzDWwsDGjivzTo15",
  "key28": "BwuqmkCEgr1Dpa9twkYsYz7p3grknKDjNpxNTR9mDCnohzcWCNocLsTix5jwRK4NjkujQRRZtsfCunLuU89Nig3",
  "key29": "2LQhQzAYVoZTENPrLwjZebbnS55VwdjtUVcvPkSrj8hi9wsxN9BWpPrgxih9s999xy4F1Y4D5BxUnLM6vDnsaaZd",
  "key30": "RXL117r2yEEqqSTanny6BDRgYsLdrJUdqDUNFTU8zJjuSEm4x9XpnbLuWSH8BfQT1wjqF99E2k5r5YJngfnenvB",
  "key31": "28DWM9XN2aWJTefGrJWy48WADKvZ6otTYw2nygvrmMPPULkXw8LKeMWHzdRrgLQCtJms1RR1vL5VHNVdLseCKjqT",
  "key32": "3XKMnPj4oJCMwfQFxKvdMbYnrD8WL5JrzAvRUm5f4Mv6NS9DVXoNvHqcyipt6vKg7dtVLvSAgBD2ZYxBFZqbHqhu",
  "key33": "3Ae4JAfLy7JzCpSX5gUjgnuVqGmXoMXzM7E8Fn2R31EH1Y8TRGtWD9w3CBqAdaNuaaw21gzNK634xMAYyJQuUfLK",
  "key34": "3v2pdg7ZRqW9ibDLAuAyp97H1C8bQJHRNhWoSXE2EK2DZu5FDSKiwG1gUCZXfQgazpqHhkdVgVXBpDsETjoRz3ru",
  "key35": "iXeNmymeXgVK7R7BoLMxyFmXPa9vgpxHh98tnCkwBnQqJCYwbhe4KsbUQgdhc8peTHBqZEtfyyL9Js8V3v1rkPA",
  "key36": "7WWJ63SvYPKoWRzCbMCEuuQfxSJpPL4A4zqHPy7T4NoCuLLqdf5R1bezYJSy53FGeBs1dmpcDn2AHS1WYWacu5v",
  "key37": "3ra1WbUM9jCHVAe4QkFtK7VUyZ1EXtQUWQdo8Wt6ykT4RWXkUmx3Di3MEku1At4tEhWrnB75gfynm44H9qRxAyLz",
  "key38": "2AFftEaLXA2XFskEvMKP8rdGqg7DSe36zBVNwrQALNKt5BT65138ocPiFi3YZwgRKQ1JXAMyHEd7xocqp1DavuSc",
  "key39": "5jm5yrBhYmdKE9FzRUkMGYpsaWuS7Hwozii17nmdeTMPKaMb17Wpfs5J4xzhv2BZeDi5TLNaQJJ5KsD14QGjibru",
  "key40": "4u5xiVpVJ1HLTDgawxeqSHZoiCemttZQH3NnJPstLS9QHfYadyCTkNLBYacrvov5aX57W382YbwbB5AdwaLN7KBr",
  "key41": "4ED4mt7xLA578rHKpE5wEtSD1pRocDUFPtLUEL5oW1qzJTnVTUzMRJYL1NE4GZ3AS2mnm4XCfTLWnxu7bdpDLU8K",
  "key42": "5LGh6tCDAbA7SDJJ9abD47wNF4USwinMsjRyvXFBhmWZPtbGU8NTPJoiVUEUzcsairGxsd39miaWnfEehf4JpUNn",
  "key43": "5fqfUZaptvxfUaCVTSEaXqiZFiXVAwna2v8krVEv6tLqe9pBDgR3Dj8HxSDvNpZNYpkFtRYJVwopWabvAQNLbAK",
  "key44": "4adeEsjHR4RojfNb4hkvqhem6WZNNHtaqLRrghShXJHF6tWXdtDNcMRth11HV43Mi4sod6SgXnL1YPzPXEu42vYu",
  "key45": "2pq7HPUuUPAYzjueQyMjmWDFrqFLGkxEi1UGMovB6Mh1wZ7FKr2nuzRDbivuqxH8PLk4op6dZC94YBKQGR693hs7",
  "key46": "2jnDYiUBPdGYZheVe5LMd7iJ8pAcJ3MCDWwfSxBLMgS7FmwceKZnzneaRGPNy6miyypwP36iVXDDfzYFt7ZP4Y1Z"
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
