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
    "PLap9kUVn7syXjpMtBGtY74ieDDhMVoxYzkwss1Pgfcewg1sfMyCcLoiU15GVLJs2gYtHnhxZMLPLfy4ZPuBM5b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SGB8hsxGYkpwV414Nq5pdKXVqSQimX1s3kTnCUfZanYW8VEy4mbTkD6cTd4cZfUV9znNygYiE6U1GzdtwEXy1rv",
  "key1": "5aYUCWk4YCPBPnppUpr1ut2QnJsdrxYCaJAx82S1sqxeYJPUdJmpj7GyPoi2fAsrPXLnXCteAh7XDMYeoH2qg6e3",
  "key2": "2icCp98szVo9wviAzz4LGPMzKz9gu6gnKHv8ASAwDRvck8ykFmawT41xmvyHxQDeDQXwUPAT7ehgERhX3QQpigdh",
  "key3": "2aWpYV8RgevPvdF17KWU1seiEXW1hjqBypKxFrcCg5VhnmqXCTCSJD6NYtCfNVxb5GG7uumvs1NXTSrpDnHYpEni",
  "key4": "4ocdZeWHE3AfwUbnN1BAPZFaL8A9nHs8TpkXRVHxe4fvm5SAe8rPB6hGdWC9x6WbFCyVguSmBkxTqNgaLMJjnYoo",
  "key5": "PkcvzwCP2xwcxWmzEZz5ZhZ1TN6szgakQ65T3WywHBp7BNuSnFxc7XTWAjtfwdanGjfqgmk1XJzY4zHf6WpgLVL",
  "key6": "5ojo5vzn3TemgqWopSQw7Nyo4dy5SZL6W9on3bDCgmFK9gDV1iuZKrECto61ESNmoDuKv1dX8VARmuqQkzXDkz9k",
  "key7": "65Q8bFYvC16JqG9huz1HNZ9Do1cjtQn8A18ZkcoPCJxNvgviCW1sNCM6Bdzma7CkrdwCqKJRTShnyRgGY2SMFpJj",
  "key8": "4A5ECf885yC5EsWdLEDik5U6VT4FYj2XWU7xznN1pfzECL1vXwJzTghYdgzqmYTFKqq5YP8LmBFSNEgSQ3oh5Fna",
  "key9": "44m51odQFDA1LyVVaJgQWemHZumr7G5NWijNUK6TNkjFA6wUL3cmZfrunC4VNiCw1cL9RZKfgsHuexLLm9AWsawy",
  "key10": "5yKVjRqcPsBAgBd6nJ2JNwt3jvF6j8QAPiTAiUfvbjDthty5Y3gSBJFBRxJZuV41DeFYzaAYbUqDKWdnTdFfzqbh",
  "key11": "2DnuoJfh1HwrVWZDjuH1VN2fgi2LduQxNs1x3w87db6A4wcqvdtQm9KiyUZZQdvYfLCuakHDsVV8LFo4Y9RUFhba",
  "key12": "3RYrXJcoDNLrHoJiX7ztfsKUn2RVmcnNQtQBSmdMwZ4KQhpGsHJqTM18dapxeHdG1MxLNoXr6dKt97NVcmKLR6z1",
  "key13": "4vRNBN9sHuV6x971LM1T1pZHTjBVQSSpu53S6G6NpKXAZv5iv1wfgk4KuZVEF3gBzPXXyNV1Q3Xq9zHv5JogrYpG",
  "key14": "Xtg4siDTfaAkN8J879qu2qszdMhyjZpwyZcUGRjP5oQHJaCs7RUzGgNt4sdYyq46RkgHFJKozZoq3nBmrHooFP4",
  "key15": "4vVkaqSVKPvzorbRrTTVTz9QoCS2wmyh8KraCNam8X12Y73dYx12bz478dmJbxRidDMkUBLW3eN9MAvdSzpUheWJ",
  "key16": "LehqyEfddHChKK7jLRtta2dXyXpzXZ48e77JdNYCGZVJSoweuu83PSo8DH5bMBfmDVzhhEVquCmNUF9vk2vHeqm",
  "key17": "4pkZ6PuUkmytHtrydqUngQ8DyXDAda2VbRGiMGQB9kfXvGP7QLzejsbYuzgZ9NuRkbHXz3xQaec68jNbCYFWJm4S",
  "key18": "3t9NHznQqgbzZAFbhDmQswSXbcBh7Uz9sqFnqsN5ZuVdXCJzJTnsZxQMKadjdcqzU4PpS4cVxsJL7BNyXHUxvqnv",
  "key19": "2wyPvTtTFSt7GWUr4y5tFetNdhKNwViDD67DhNRTz3zwaQ9vjEmv9mqow3Dimmnm1UaMgrTqAaERVsEXojkmJJk1",
  "key20": "5eT9QvJdgMp47TqYArXbnT4HXdP6u2txeczVupw3UNBWCr4ZRXeCopoD4uPQow7NrDmgKc9S44N5TkHN3NyEpqv8",
  "key21": "3iozsRCEyiDY6XQqoamZCukRpQ3EXDdbQ9W7WhGiYnuL77hFJGrJXfL5ufESXPjg4CuRzuxYn2AC1uy1sH39DzSw",
  "key22": "GyA7hqFmChUWR9t1dQkFNuuWQAJ9iC2SLp7SYRLmRrh8iirRe6PLS1CoTotKdYYFMSiERjD3prU4QJtVCB1PXSW",
  "key23": "2jHpAt5FwHHA2A6xqSFZxtpS2bNiBde13bTDjRq3EfYpXt4c86Kbvjeafj5ob7kVhs2GcJp7xVQFs8Mcwc1ptM4n",
  "key24": "hSBsmBoCxD8vwAyxqFy4AWstajjwsZT5nNjsoAQ5A7T6bz8ZeChVDJvhCziikT2a1NNnxs2sHeFukpTRo7pzUCW",
  "key25": "2VhniYaMx3jAtmYiBkwskcdoEmbECWqX4VYZvKneV32VsKiijASaBVVhRMcpgNo24TbD6EzFzoapES3URcGQMWKs",
  "key26": "4w1M6thvDJvnnxAfJ4Usu4RwPYmWkY7Ffg7FfeG7bLxY7duqk4YmDs9uNSiJhHQN1bLcL7Jpw6zekbEmVUrD2aDC",
  "key27": "uBEDFH84kCW7oWqUTiCY3aJ5n3oTHhWmYdQc22VTEXrseVmZ8PQthYHp2KqxcTABxzPPTzyL8CHhLaN3GkXHmow",
  "key28": "Gdujs9XFaZhJ1nHqviDpp2dNB7x3Z9ME768iKqAQHPbuGiZ9rxwZKKvLwfBRitWWR9xd3kVx3HqyCHjPePvfmXp",
  "key29": "xB9eBWDsJVBw6kJFeLsYU5cSysnkpdF9MPVQ5kJzSKdeczqTukxATqqGzNf2dtyC7GPSaNMVx7M4jxR6MydMFgH",
  "key30": "4C3u4mM7oyE92hJS31ea3E91kMsBN4EsZdbNnpqPcPGteZwLxxuKPC3CyZUibzUpEioNf3fp1jJH6Hmq3LX7j4Un",
  "key31": "3Fv2JWD786Fv8kHEofvRjTpGku4L1SgCFnPvUw81Y1vZdYiGLzmsQG3zqFWfo7k33XPXDqUvMHjxkkStvBR2ZNdh",
  "key32": "5trMes8HzZuWuqvWxJyNbuHnQLfxpaXF8zQbK2cjP15hZtiw7ypZSsNCPnfrEMSRBVWdrKQrxiMwSgALVqDHuiQN",
  "key33": "59Cfztma52umkjUpbkJpsU9XrFotCnGdmx9rwdgsx1AGbqwJRpsVQY9rESkdMMscK2V641xANKPPnfVcr6BkWYqa",
  "key34": "3shur5keUA7AABb1GZbGabnNvnEdX2QJ9qgYYFqTUufnd48Mk5ybQSTLrU2wW37HLy7nWYLyxbMZEabKHhRKuFbi",
  "key35": "67g2dFeHKYtoRv1Jc8rP3iWFSQarTaENbAaBAFSDJnrEwmFANykjnxeeMGC37ocsEmZovDe75bB6HRSS37T7drdQ",
  "key36": "4oY6LYxhQ1Ls1pXg9xn1VzkavQTvjGr1iyZA28HskYi1RMeum8ahd2ZxvcU1E8wsNKDwoWsMUGVdWqc57NAQhXMU",
  "key37": "4a9Ysn4rJf2KXSTkUPDMHvswjeW33RU5Rn79gCtEgiFLdV3ptjsAM9AoXBaBxDDsB6YT6pPgbJCLLUhGrSK3AcjP",
  "key38": "4n4naYbRYZZrHBWBu7sNeeXUNaQddu3PNvZmcw2cx1JNRPd85s1Ep4yRvPgrnwj34amNvkEDEEGVUVMzAav22k6w"
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
