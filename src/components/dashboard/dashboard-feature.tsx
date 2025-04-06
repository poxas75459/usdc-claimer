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
    "43H7JQj4KWW51X483ATbkSUzw3z67GtDcX3ATxZrmppvdLD41WwtwNDuAFm6uCQuBjq3smpL3MGXiSFitWhZppSQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uBmJCkgYyPsRYgLxbbyVY11KcGpzJLeMq3knccwwMU2hBjrVUonbJRUhw7zcwYuRcSHhNNx3YB1GD95HNFDd4rk",
  "key1": "5sgYnnLHXuRkpEzLufExAb1dZzCoR1jijQChd8wfnZspDrfR4vBuMS3TXqaBP7pdz1BvFULjwwuirNSc8jJjQTwx",
  "key2": "3JuaV5DjHypegaVNaRWRHDTGwjCcnVJyuiSPJXrUfhhnecv6s34iUR9RuJcjYTZgviCmL6FGzRfj4DeEPZVpuUDu",
  "key3": "4aTXCyC35j45HvtuuhfTvWYidfTQTGQGPeaLErjsrChVMPFLriacktTy2zfnb427i6KPbzi7e34XHpsQ9K1tTkds",
  "key4": "38Sa3ADQJJ71HXLw7BMgB5M3TyfBfQ3AQuvxAeArgkwhSizVWnq3DmqpdyPpjXghHkqzLqnn7FLtr1vgfL1NVSTi",
  "key5": "US2uuqFTADZdAoHvPG2iByoCZjejZDRzpFYgQu3x93pn178wyKTLdjWd6KLW95VqUxStp9azXh3TpyoNSdsQejG",
  "key6": "LH5Qs6Ns7Aj5KXjXQJ5KWkRpogUk44idgM8S1J72wyNfjTna2Ku5ELZzWGpWPQATLxEvfcasQRi57jxQCJJ5B7y",
  "key7": "67MqTovq6Jdjs28ep8RDDSQ5pCMnwB9bBhzQsnFduZgDo38vJDjg8E992kbzdUh82JKmceqpR9Cc7xVaEJGMKhDu",
  "key8": "5LY1WdvafR6Mn1Hxm1ch9PWxRi4THFYyJgBfvem5CgfFVM8PF3vV9iFyM2xmZLQgG5uCYG7bvkm1kjhNHF3Qa6JK",
  "key9": "4weciscZrBRaD8aPf4FdTAMgxYB5YqN1odVeryfFaiYqLKu4TYWjWFqQ3zcGX3NZrvtXqCndxJLJoqmY2Xhzxgur",
  "key10": "5ygNgaPVSGMRFHioM2o6grx1rdg83i2CoSHdAgtPvgeW1Lje7eiUFZES4bNcdHphhsupvBNkDgJoYz4NrnEfj8B5",
  "key11": "3GJ9Taskp4Q4GvDJGKyDoDRWKzNTchr98EKzNAitBYWy4R2Swe3fXmwzAuvKy2jWSZJ6XLbT3E74bJcMDk1CHYVK",
  "key12": "23xm8cRSNXFXDW5SJXNzjLrhmw3GdZaKeHaVjUjPDr6tnAER3y6aZVancKcwjy1f4dCn9SN4dAVEu8X2Aho3duLY",
  "key13": "5LXZJJpE5VsPeTwCiG6sUAS4ALomG6bQ65Nk116ocQMucFpMZKvRZiFwqjETJb9pn4YoZKpX5YMUqYyXL5FG5BRE",
  "key14": "4PZUsz3QRRrdty7LbFn4bH8xhMX56HoHNQwQjzeFYMmFPb39dLXufqVDWkHLE74hSYmc3AkAJemgTWvfmcpMqm25",
  "key15": "x74HsAcHXZUQoGQPmctZxNUbzd3kToGFBmbrFE5x9y6RikLTydkSdbtEHLkMkmB2YZCjpDm2o1ZGnDx5AGcrn21",
  "key16": "4qbF41Y3mguuwvXeEVMZKRpw8iXM5H8shvQ4cy8Ye9Q8Rk7yXTXnNdsGMZM3UAEk9dLZLmz2vwGAPtRkkRAjWgTs",
  "key17": "2BzjWVdkVmj4AUM5BoHJ5pS8W4F8XHRwGtJ6qsB1qviykPoYSvKjH1c9Pry3rHfrEKhaaA5tqkam6UspzHr9prDt",
  "key18": "bf3ajaFEdP69QUDrMqecBCc9FQaLznXtwzErCw1FgCuoGZQ64PHJzt48rTL1mmcgB8qgFEJ8ysvgUUmJC9FWHTf",
  "key19": "3pcBg1h7VcyqHj2yemFaDFnr9foP22CJo6tjtaMdykvzU1Mo1ARxk6MZAF7wbdvxiEgdZt9c8KwjMkmcH1ydsPkw",
  "key20": "HscbGMisZd8FcTfdxWdcDxfegCvQstqC6qUWZEMHb8t31JnNWaK7MX1hnPUkAfsuQfEAJewjrkkMNy4V8pd8eeW",
  "key21": "342yrCiCWq23STuuhfjh57ASceDf1wc8LGHY6sDMrWm1PT7KT6tCxk1vmgnCpnCbHBJusgBQpaMUwFTVbNCdsYKZ",
  "key22": "5zGfeBug2QGX8bRkshHpBRiQg6v3ai858WS2fW86jDayV9NwhrYB4SKVobiAMofAasMAsZgCCh3DrTbJD63hY156",
  "key23": "3dbBLbRWsfEdSRJs4b8XKZBkGu1ApDzgkb9jT81oKGy8t6JWLNo9apVYHCstSz3mBd94Em5Kje24u7NCr7YySwbM",
  "key24": "3qz9QS4DwuKUT6skU6EaZmnV1nnetaH791p75jXvNJWxwwLAdgvwg8ipZRyKse9aqGPF5ePV4SsWanUBnRnmfrQV",
  "key25": "2LXkAKBnY1i2dcCXAPVk27KEweRshXNgiu7pSyS65r6u6Qi1AuZ6DLgxbUZYtjvtqkPRE3M12ag6E1bZJRK1uo2Y",
  "key26": "5X5UdGvLot3YPmeGF2XJgmr7GBhakkmsm6URkSYJCi4VNDhhF9UFvZApEzAg1CsvXCNsAxbJu8J92KeooGWptZex",
  "key27": "5fyXk1pShXv7Ai2kB1vxxaax91FfA9dPAQYc8B9rw2sWkT45XCGFPRvFsnUmm8a7VJZSCKit2xdyBgKY6kDrXkEv",
  "key28": "3tweM3y2iF61RnjbnLtzN3Hr6Z1uUWCJUG4o5HcdzaEqHDoAnT9DXnCWUioEjNrgzdEqX914HodVcBeKZD4diieo",
  "key29": "3yA5PG3CKaUcik3rNYi1ALfvDa9A3BJdM3V4SdyVWa8u7upHiFT1nePY6vWfkqMYp6waspeuAEwf8839iR6p579n",
  "key30": "3Mmw9AVZzBUHrH9xShRqDLeaumVCJmGVqDnzS9ndQbNFvdzodzWDhigE8hXR3SMTswGHBQBF7JRzYT3gvFD2Df98",
  "key31": "2qg3o3qvJxKJKviyVQEV9AyUPoNqCqKgWoWi7DtyXPNJVR1jEeRdzBQw6WbdFaDN7gKiv2481BazkNRyXsrJNxBj",
  "key32": "5mqA7R1qXLk67H8ukztnFVGkSX6AYCKvkiUGmUSAKaXWfV3uzKtjMHVYxSazue9EXbHsVZWzpFwodFUoefhN4euF",
  "key33": "3s7S47BAGpZL7sskuwgjxtcV5AJBdUvGiSGN9RdBzrAscYDqbJyr7EkXyfMPsLeeTWJtt1i8heWLNvxWJGekYepk",
  "key34": "5bqJfbF7ZKSku8hfFGWmvNJd2SgMXjzmojvvL8nV2zU36B9qkn3yaGwNkNLm1HWn9jZ4WpBr5uTzonydibi2Y6rD",
  "key35": "4gc2vj8q759mX3hAUtw4QemtXzQwuH9qrih4SCB17wKFXHqrbaagNY8NLLqs2h8uht3ya8AKVnPr7ktQwwapz3RQ",
  "key36": "4YTXMwSMQWapBei5Apjd9BHtyDuRvM5hxAsvsHPAiEY4o2skaS5MWB7sL4TS8eBxiKkRoRg1XbxhsfhAB7tfJVKS",
  "key37": "3s6rkwyXg2uHo5S2M6eHRrSNKAMXxZUKWzKe1k2xfJ1dqRYune3uJ3Tpw3bLRoVR14FVBRGvFwNwDxmkTjmkYYdy",
  "key38": "594EjucRpoCFqxm3RK3VgwTNuGArZMVYmmoG2SyaafvtPyRV33hoztnAFcNjB1DNfhopfSB42MebNhLzHVwaiB38",
  "key39": "3iEVrhzFVxphqPUxcABbma6SmXh1e2KA3MHTZQKbijxPsZs2AtQe7UQComwNgGH31jqd83gWaKELtYU2HQbvFG4D",
  "key40": "4UJ4mXsokZXZWaUKyGT4GQSnsp3oCfjztqTTvg8XcvmaqQK9Jh92yZ5StGYFsZP7V2VYFn6SkPo2K6Hvw41et1q6",
  "key41": "nk2PDSPRj39NaDJVq2rZcsGXwHGKFmZGSKSMy7MkYf1eKvVnDoFH8chwaZk7q8oYTdGYUbioY6NXosZix3HELxw",
  "key42": "2GqZhjGWwTTVDh4neyLGrw6nwhysGu9gXYU13dvyZywr2NRK68PU1S4D6hPoSgE8PfxtWSnE2C8cXfwy6YLyZuT2",
  "key43": "3LKymAGcQ9huZyq72t7HpzoEKgV8nx6M1h453CPerAPFjejfoDcAAuKc8fnKtJcpjzcxTKZSf16X1dcvkupWvmvL",
  "key44": "4APhJ7scsd8767QYmuxEAsFW341gZcAX2WsgdUHQfoLwP3AivGLHC1JavGW9JgDb92ZdXwhLidbajCKEYmTcoz6T",
  "key45": "5coFtKqepnb15uedgoh3CtTaN72zgsxYrRAGGvEhGDJreE8zrQf1FXuTsmpmQJJWQJchWr1ek3iBidfCqKaBkyDB",
  "key46": "7hFfbYC6pk1qrfrEtV9a2vQXASuZYQgQFJCf7riFePKaDMpoVjoYZY29DJupeBfFDpaPVzGvcRpryjzQsGeeTeE"
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
