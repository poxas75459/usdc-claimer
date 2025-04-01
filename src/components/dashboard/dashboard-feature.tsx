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
    "4ZFTBVaMVNohjk6RhnSBKHNKiEvPDvXqQcMupFyXw5MzWQ8e2JcoiwJJHVWTcUHqv3bKKYnjQKZ7UDW5uoJoopAt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42tQoneCyHJ1UhQytj8L73LER8hqDBjfP7e63ygMgzqS4X5PgLcmqJLGDxFijxfiHoXvqNQCauH1RYu5fES9mXJ2",
  "key1": "2V5iaVKY7wEA5rguewgXZYg9dJb9nZfuzCHJPFGpjgWiLSF4sUFwgx7J7cRYzeGJf9EiWjbZ5SxjZuGJnY3p56aS",
  "key2": "xRb98UeRZGZZNbmycYQrii34DuHQ6HDC7pZCLQmk9L5xZw2y1HRKU2gknDiQT9MeGrFYwY1fGEABidMXBFTnQ2G",
  "key3": "4jUcrQF9JmGbEshVQSTUkRo9gCXAv3ohbgVUYGaTRnEx9bh7BS3ZUsRtRFAk2sivgc8YVjGfvWuBUuHdd6EKqdVo",
  "key4": "4nytuBXhDQzsCQpap2SUYF4XsMgwDzzXjLyWGP6jQQr1MiuTXAWk83obDAMqzsep1Wja2peWh11XjdKSJw8LTMXr",
  "key5": "5nyoojhKLibQAYDBkmV2w7ECiiDX1r4UZCToBk6zo1SSUphDaCEXrP84TmhnL5jeeEyTjcjB7e18eLnmDpGohK2i",
  "key6": "3DR7w2uNhbVu2Tu8kGCrHDQg3onwj4Vs8HE5yweJtseZWGsbQJZEZYEAU2vyHioYinQ1P2Xz3Lkar33Cj2wU9prL",
  "key7": "5xAjU2sBmrx3UJZi6HaVhSBpGH4hPfFFXLdJofdFNFhEST49PuaX7Vp277yrS2JM1fVa3SkSPiFd5VzDaPCdjfMm",
  "key8": "4JgVKq7qQgzUFkSRfnSWRx8uBfwTXk1EX943SW6RsNEQnhverBoHy8nczfNn6Dn5w1JTKdi9vj1zWfquwvyf2Zt",
  "key9": "3AexUuEiLA4KegBjLiEXjB4q9ZQKJBrqUVsYeSaQ4PJq2HHmHADamLVfF3zwd3YhRF8XkjwjRuiQHDwmkUGospDC",
  "key10": "4tEJB3gwgEyxSPoq2RVSRu8YquG7KgvR6K2Yb7MvgKmuKAyCNNTPzuZH7aPYUstuqy79mXjZqBm5gPVdr4K4QEpb",
  "key11": "5FiBJwyCHECHCpJMTkiDKJoQgZwPRb4tvZh6V6jBvzY21YfPXykUXfjzvqkgaPwzrrgYnBGHe2hKRH9Y4xiXvaT8",
  "key12": "36LNkZpeP4ubdLyWF3F8Qqgxqtzycm5NyqkjeR4KDixSbmkZ2F4YasGRR7fb8wxMxBE7rmt3PLK2n7A2CzhcyATE",
  "key13": "2ZvSEzfcHyJStrAj3Pf7DgvZSJyziDRH6ikjRjbKmJbjSvoJBoBrbsJZEwfmyHFEjtQyZmkw9bwaa6RXhi2ek6H5",
  "key14": "5mgK5gZdq8MeGJgUgS7gRjBh56D2B2sTMRqBuWPHrNiZn1eAiF72ce1bJsRad7S8Zx6AhJ55VQ5yb4d8ShAmNWmy",
  "key15": "3q9t1BJLm8uKJFzPgXcXvcLxhuXZS3TqsZn9s8gR9XrQj7ARLPxWPYFVgh5dHb4X2Zg7cayNJ6bsj6WEZov2wYny",
  "key16": "34U7ZYDKkFDQyGhxiGxzrc64R5UT95zDjptQRRyv9vTW3DWNMn4kboZ6v6YRyS7fMkufwBwoNHnmZntXsjmDsYSA",
  "key17": "3KFAw6uqY65Pgthb43SiVdCxBd4GmYUUviq1wPP3RJhVoKxDAZBKL3jBbAirD1ao3LesJvA88qTSyMGVoTmDZCxZ",
  "key18": "4VajA7aQ84kXQSkgMKKhphJVCdptU3YcBBPT7tkrvSjp2j1jVTWkjLjpj32TDiWwPGqdCTq4krQb2JLoQjrcRhQi",
  "key19": "3yZQZuVPNeypdvoZgmDU8cvUVHd2yVWmM3gF4Noro4FJmqN8xfWxSsSXgm9gnaxUZfDaqFj8Qz8vMfC1z4j4Pux7",
  "key20": "Vb3HRd3fZKK6taXnX8hfUQXasDXcVioKaZmzFL6qM57orvvqKvs8KecBoJfZnkHBFoTYLi5ZUu8JWKb8Gy7NfTT",
  "key21": "2fZuE4JRrzMSEhpcd8jw7cgg7uDRpU298vpPmqHNw1rLg2mM4677YjFCikqezD9XZsDJY1t3mMQfEVomBF6bAJ3B",
  "key22": "3Kys9bfWNSL5jvL9vidVSkXwBC84QmqHp9q79w69rj2MpkxoLShZCoNXy9DUgLySpMvz1PK1si6h9EeSxyHUCeAs",
  "key23": "3BNrR7YBoDgrSdizRjtkpLGBJicVvCV52fh1AxrTcMNLhncXVULRk5FXU2GMPkkN2De1T52zZku7ZvKhhqXAS6ZE",
  "key24": "4bNjR1gcc3bi7oPX6SuJTggKLNxwiijQV9EwXJ1i26bjWYMVX9esqKhAV32BGPh8MY8S7jwaux2oeMsU5Vwhdzqr",
  "key25": "5s92DGRozCpCAtN3T5VYVF6BtLYwFZcgNU6CV6eofChf2kfR76Wd52nBkurUQyWbRBZfW2AoztmXXtdSjhTGeQJW",
  "key26": "4AKJvMwLtaTo35v4rzCqg1fbnzzyhQcQnbqwGYpwhtP5Nivtw8qrLypsV2dsLgVPPQHUYHWz8f2rHqbAYe9TyKmd",
  "key27": "3KjudtS9jEyhMg6XiV66AHv9N9jn6VHvh9UJFG7PCezb1HsAArxbxPU1ZeBduTArmvWpVnKUuZHmpxJj156X1Nco",
  "key28": "5HCyw9Xk4K4bCBQ2r3paWvzVGDWVW3fiGyb3J7Nicacv7NgMPVDWLo8fwkT5UJVvspQ7HW6mx8kyb8uxka99QGU3",
  "key29": "5tfpB1PAY6yJFo7VQSmfYCCrowfDRngWAtWkJdKyRpu7fhcQdcjUB4hBBLCJcPPmqt6PYiAXcRPjHHfmRvfifgRn",
  "key30": "3u3zejfYkr7PngpcJ25HRSYUrtnbtJssGkrMHxWfcWtTEBZqs32ChZX84j4yEyZmnNL72ToS3YVdcydmTEo2ynsS",
  "key31": "38k7xoVKq4fw2cbmSARQpHnQHQsQL7Bd9JU7JJXzZXaPM6K4u7GZ3SAQVpteUBmYb2CXquixxMyAKghbpYMeK72N",
  "key32": "NayvQ6EviGNWkpeaYWumqL3hBZgxUhj5zpYwooRXiPwmiiGAQDtE2F3xad1TJFL6UY4DYoY62BxmHQyKTFMxCM5",
  "key33": "ZTP9BM4YE8U9ZC7Db5LzTEyer7JoLLRd2DiQS39SU6Cf7pm7NrtP6Wx4oxQ71FDvZs6v3zWDJKeyc9p3VEE2oZJ",
  "key34": "52F164852jEk768WmJnuLhpjjFxfFHjURZ4zHn8ZkoHR3PzwBEhP9t75uPNBeTaCxsLYXe2QJFU5r2TebAec7VMP",
  "key35": "dioUNpCoNVyJZJvTDu7x2fUHECw4iBFtZ55NeGB7z2tcvRnQRw5eozfUJ8QgMcMiawoh8ys1hPTeQgk9KSfknA3",
  "key36": "rQ62wfjyjYu1BxVPzPSjzUjzAagUK9bkjhh2KXv5NnyVZBzPiaFqVyUkaHAFXWnDaLywV5FP3bMsAeYfHWdnLB9",
  "key37": "iUQXb5sZMpmV64CXdD7nAwJHhuX5SB9xoT2WqoDHZ6GK9KhLqDf1A3bXQj5KPxY8eZN4LCzgKuvGDjY2usUHvd6",
  "key38": "4QNy81sfsstAd7R5q6krkQmZHUrTo3tUH3jy73apb949UradSC5m8uVoHYri4r5W8xLTJWetKuBZZbAijiSNLDPm",
  "key39": "2AG1pRzoaaZ5VzrMgSqMwaJyg2j4eCChHAykiWLoknuLDyseQrQk98aaC2iH9TRnZkjGqoUja59ruMRs1n3CS1im",
  "key40": "5nUMdS6AEFeCKRa2oipNTJBjpBD1j5HdhpwyowLssFAGK9HydpAQ7eNWV5Cktg8cjr9EXVUGGUAeWgByrVmfmKH4",
  "key41": "39rM4wnM4GNyqFbbKGLcSqhwemkur2xYixDXEVUvvSuw3EgWeUACScFFSaMJHTV3UL8vSPmPT1QscjzbjsVTqG2K"
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
