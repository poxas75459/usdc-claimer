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
    "dNe1s84oR1L3Y9FQHavUcbsRYNd97NrLcTbGsa7NjBCdTnutMaWW2wthUhSgEuKF6Vbr3XtaDJe8B5Q6bJxDXQT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55k5ogu2oDY2dJfzXw5U9HqKh9ogJAgWxsdu6D45o61TjGjVwgzjM1gd5196US87Fk13gpvvCHcYAUT8WwYahmNL",
  "key1": "37tv6UcGpzyNrUhBqvnA9kvPyuazMUMVcJaR5NjZb52JY6g7LuYchUutoiUHYKAornjpwrBhgn75qdntCfggBoBF",
  "key2": "3C281cXcx6Rq3dDzaQQvvkxVqa7pvC3nwfrMS6RL4nQ2bf2ZMcGxsqztciRn61vX9QW8hEwYMimEkPoEgDtTRD9Z",
  "key3": "5LLAb1u2knpT8tV9VyPtyyeWA9czEaqPi7DiNqXZ18LjyDsEcqDyuvKv88RHTSHZi36Bdt4W7w4dw6Nya44SvA4w",
  "key4": "D1h1arGeaTkUYRq8FsMXmehCC6oCzjH4cSZuDXRnrirKTvGMUCZE6VswbR2DcHvjSNvEF7x1ozZskfN8PcDkSnA",
  "key5": "2aurLtQa2vtWRPuCtzfWeoChazeBXZp68ffbv32eHBpGxUhAGQ4CLR7PBxCxzL8BZEUbAdcEVNhP3TKsPXyNJotG",
  "key6": "5xruHTByjaRJtqTUVau9MMwiv6HZUSoFSbkXFHoUZKnZGi475tfvWtGtXwweLgnEX3HY2usu7iPePVcpALrQhrcd",
  "key7": "5x9GGM5meuwEc2dK2Ym27NmEKdmb52c2CUkEALGyTkAm3qt5WKUjKq13cFnVUoo5JuNBe83dBRind12Aap28GVrr",
  "key8": "2gqJBsYnco5ov5LenUSwWSZJtogJQ41XKPFdEyv2dk3x4uPRGVpVzN7CV4GzdScNiBfHBEBszSkTnLjRvD5L5MEx",
  "key9": "SmiywJGcPMMxurobL6KTdktfsFQRNh9QwSBazRfCUh43juA8Cr4nkJiX6GfCc59pT5135z2f356dmRrYAc7dHqt",
  "key10": "3amDVdXPUmjvLwDBdxJDFZtWY3W6ejH812byRdjBzUJUY8qGEkpUaLZ42gnznrTFRrAJHTaS1cbnFHsuTo1YpR69",
  "key11": "CoXDcEJNDmvt8VNDzxQLuLRL18M5xSvHhqfjcrQepZHXckd3nvsLxSZTzNutpjFyTMCLfYz4N3r851HLitctUtp",
  "key12": "2CQeBUfxKPsTBVWp9xndzHuzWM9x9C4K7wFCJykPWzEKKWHq4rcYGcTGUPxgqr8CdV3Xwg4L16wx5NKywWmgD9uS",
  "key13": "2t47RMmTxZ6aMthrekLuHjNyXBsqRaiU5fh33jRzgvvzE5yFacySkUKwcjTfRxRxHzDy9dMLtndVqd9CSn2ajAKi",
  "key14": "2JbtWbtQfUmA4JYm7KiRktaqahRiYNbU8fN2gz7SWbCtzPvHjmXwMJXxKuwbMooxKe5eQ2VhS8Sy7gciG1SknGtj",
  "key15": "65RqdsFMnNW6kxRy8tk3kcBj9kQ21xyxs665kx9rjdTPSP2MPhP4UF2CY4KzecCtU6H5qzhp9tFaLTK4c9qfN83b",
  "key16": "59ZH59qCjUtPpDzq3W8wpoudBRJHWprmREJW1eNxhrVJ93fkqtYfR2Shb7CgwzS45mo5HvXtHPS5FCh5o44A2Beo",
  "key17": "2bDNfUU83kNpKo5eHXmARSEEh1WtWs3tQR2wzh11Wr8Z4Xo2bdqTiUGZ4fZHwLSDzbQnejkEPLrdVSy1YGHhaXEu",
  "key18": "22ddbvdVdYf2B5y24p1MMkL8KCmaVEbMh2V4Kx8oxM4Ypcte3kAt9GoVCfraZ3sYVwbHe173StbUAr3fWy7r7z6b",
  "key19": "62Ydo1QEtNbZ3xstBF8p7J3A1JmBSHVnnMhBz1RQCy8wowdLeDLwcuNX2To9AfTxqXqU37upiWmenfApadGmqCYr",
  "key20": "52RjDaN2S9n5UhXucixnj8JtJg3NF4A8JnZJvC9nnN6r2YZ7MUgHJFNUunviBF472hyRA8wUPHka9ycjeHUgQMAo",
  "key21": "37ciAzZBhJD6yL1XPqp1SfGhB6Ugt1fk8aaf6tHJNuRAmw8S2A1V2f51U9KHAki3RktRMC6Pqo3zdpC6Q8wzyBvH",
  "key22": "5BoQ91F61pVryukwbQWowMxSnuapZuoZUeA4bjUUUyFn4L9UoQ5p1TUixuRZTmd82VAPtmCTwGT8SpNrB48grMqP",
  "key23": "2BWSQPzg6U1n1go3XFW5y3nKBCEiGZncCfNsz4HagcrASvu7Z6VpqNyfNE1szEjbxhc1iLmqZrGDJBRm1y41oG5S",
  "key24": "37YHoeKfBPN7JqP6UL3SukfNnjyvYpZ8Bmj1gDKcGnS4e8BfcA9R6r6j1pyDqAdD8gdJcFjXDNHAAi3HPox6eLN1",
  "key25": "3EQVFnjtwX58YvD7o4XrLuRmxxGACttbHALDzRQ5GivjTHg4P9y1K7Ne9gYzSjsaYDY46ECniE9HKyhXu24HXePA",
  "key26": "PDqBvnBTTfD5U6jCB8jozehaz8U2E59BpnibtLmCNwK6RwY6H6fEuMGH4woCkeAFx33YdKNeRdqPThcBzAy55ZD",
  "key27": "GqJhQv8ybZmtouGqnZ9pc9tjKHCd48KZP3TkHCMbfHhYiGzBQX75jc7XgV17AorqSE1mixkqtQokwjWHbXtneNS",
  "key28": "4ojn8TCcGBj2jJPUKWVhFarmhYkE7VfYHHm3p29JodQNJQpMYLyBdrQVMzVK79HJ2uvXz8srmsb5SXWQdZ1uvGsR",
  "key29": "2Ms4d3p5RsZLgEsibBK3CQ8i9iFCNvZEmFUMf3azNr8tD6tnW1u2BVPxbN6vuMusXubwu1NP3nxeP3kKkiDrG84c",
  "key30": "3Xc3kjLGs1GA2rjwctYpsPjsVB12DdAvTwJcxRy4bHKN7fi1Rv9RKJn7ntZm94nqVufdvqw4SgoAnckfJAXf5sCU",
  "key31": "4sub2WDjNLfmbSBDeFTU9vMj4c1i8DeCLEeWqnccZ5YRSPUSyFzHtXiZfHjyiUrLXqFf7xeQ5UHif4SZi7UUVsaD",
  "key32": "4UzqWKzH1rxg4z9KwaV76aJwjeNyWSVHBkZSKAWWzXPNSdtTfn2xeBAS32eiVFJJj3BKLu7uE1FAG7UV6YoshzKE",
  "key33": "3UTFiqfvmKSP25ctefR2wC1hTF8EbsL7DxQqGFjGD9czVNk5oFUw7LXhRKAyUuxk1iPNkG7q69mq4udapprdAUwC",
  "key34": "5DPSsvgd9GUUwQHexM3VBbewFk4ZcJCzZHYVMUQiWEaTDxTZFmR8Fth14Y81mfiUk61eh4ohUSrqSuAjYiAF9pfs",
  "key35": "2SELCvrW8GFJKDvWF5Y53Bx4AjNQ7n6N4QLqvPbwZoLZ2fqd2gSQ8zf46krBBWCQaM9qbY9M31RxpHeDQAYcsQyP",
  "key36": "2HR99Ru4fUM9zmHxc4v5ohHYLdXxUPoMTYXRJwZDDXA5ntAywUHMiAGURsqxbtbx39nD5ujGBW831HSHYgyKDbfZ",
  "key37": "JGYfaUEmbc4y71rXayy1mVMwdUknLuSoE8wCyJYg95xFUVtyhetSJz9U3fNHzxk8oz1H3Sr96Aicagx1dJpA8Ey",
  "key38": "2E4CuuS4vbwSE1kx7aPNxPY36GxFitWAm4MbtcT6y4V7LTGDVR5B4NBYf4ub1XNs1iKRT7nAQG4Uj7EGByG8CZJU",
  "key39": "FB9y5v2CmuCW84cSuAgWqdupQ34Je1YY11cQDbTvCDm3hC5j7xoXFKjfSGeQZTwZpizbtvvboSoqfB6PzybXAR3",
  "key40": "222xGrwXvEarPFJZK4YnJjAfePCiGFCwC6ndCapdgNCAfbSg1nm94JAJD5hDkK7Z5MapVeuaCha9qz2m1LVZXJQ3",
  "key41": "5Q8Zi8rTXHm3uADV1wLLrNdbfsQNGg8v3hWWaHaC7NGEScRUZmqKD8wjkpFKWGdkC2ik9JTP44VXoNvNbqnRpL9J",
  "key42": "3Ph6kjSguvwUfozgYB1up8cA6rWWLVU9VQcpggdBSm6eSmjxzxzuYsuoqhRKAYq1uUSsYbpuXx62qkTKXxm6vc5V",
  "key43": "2bzuS7VrEgx6gQo5pUN5RNEY3EDexhtgadHwDtjzANDBTmLzzWi6A1YnLzTvpZh8cd7sY156HHujwghfd6mJbZz2",
  "key44": "4Db5tfwrojdB3E4eyos7NK1bZCJS2hKbGXrVMdpLFKWCqTtvbhSCpwph5runhAyunoNwXz2dptzrEsM71tancD98",
  "key45": "3vfW13GeBbU6SC3NVzjD3P9UfZHn7c5QUed7LK7bMTcZ2rU6bxUyhM3c3kRAix3FrhYPMAHm4pqtkYZx6EwBEDtn",
  "key46": "2ydYz8D6pmdyJNLQJFhEPsqktEHUTxnuhyDhKQyXyD7qjGS83x8oagS6D2PkUZXsmSeGfBXf6rNWRXJatHV9yurk",
  "key47": "5BcFsuKZtzLnwDcaUS9eRCfE8BZ4dTMVQT26ijCdHPWFTqKiFXGR4RFmEJzajcson3YXFBQUNN1TMhjemPoykYe5"
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
