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
    "oGJz4B3DH6xcqBRtNEdrKKfz5KWa34Q1kNQtUujraYpbTThXhXofGqEWUm3xCUybm4tR7PfYmxeCYs9NwsdDbi7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nVRYi7iTYUboddcVRqA9kZHQoWCbEdTNZZeCEkuudySNdiwm2MV1dTskxeFNTpdpiCY9Tu7qLtGVofhsETp1opc",
  "key1": "5BbD4Z3koZo4hb6WJYKCoVAAFFv3SvUvPZgFWVzDXHcvy5AMsYiBdpB3j3EfXZoxzCA2xkcbjpzrtvm4FNyPXaZk",
  "key2": "5WhVzgU9wkRTWGjpXTZrKAXeeRUMGz8A9L7TKLrwuJNEFxLGAxKp7qzEbJYxXjXPYThSXFU3A8svMUCQW7x2j6C3",
  "key3": "5BqcPC1gqz8FDkHvcZSauwSyun2Ea7QvFF4ZsrUH2sLfseL22SHPvUKBvNZrswG95Bmj5DPYUVABnBwEat1xNJ4F",
  "key4": "67pVmZj19m38W2rycaBcSH2ab4u6o1CH2icRV6xKbwr3JdaumnW7Gcj8ixv4UvLXcTPB62r2SuTRgVBbewiGwjjY",
  "key5": "3T7bViyk25zbWQJtg25wGDuMMnktsMu4Bv7PjRCrn4ZYjP93UXXoxhbXA1XFvPd76h2jAy8EfVM3HTHLhNACStvA",
  "key6": "f5QvTaLi59cpSvB4CTB5nTCRXQCwr7GGeSBcHQBkaAGV45Tyc1W66VScmiQiGJ2ujoLLHFEpbszn8qCVGnwKBRV",
  "key7": "2KSsUG62zrfRTjkEQheppckc92ZuCBjQZAit5KdvDtav5nKW5DX7eDfNnExEWZ25jvPbhE717DZE9ULzKdfi6fxQ",
  "key8": "3JnNbET2FWgcE2LJ1Tn4KwKvmk5jLy5FokU9neBrdYi2eVpFfzSFQaBfLxRbfQruSoB2pbFKMZow4z6oJVNKyMMT",
  "key9": "65UMWkwy4gJ71VoGcPaW9qCgWP65gie7KMN8DcELb9KxDzXUTCWs8HHdr64a5bfXw1ySgEHzNe3JCJkqRc1GMwx8",
  "key10": "3zKuKAxhmqAXV4E37HRwsdbGfG4sw7mGmdyL1QCbnff8YLeNHQSR9coUKXc6fEZoqnSnSYSRTmViwUZiWa7zjW7t",
  "key11": "H5S7nQyN6EXabe6tLNuPCWCmgwpZC8VfUYnCc2WbtyxAyWCCoYqckBuuHbjTU2mqtqudFEG6wNLsYxuQbJ6vQaT",
  "key12": "2jV6XRoviHygEFvC5dTomFYcR6nCp7d6ceahCfVWuFhGM3TXLXtSZLW7ME62ScpygBQFR4UBHHrxPgD8Lx4yQ1iE",
  "key13": "4tac9H9kJ3bVrv8SZmYJvA8kd57fi4fshGFMhDrkEQpLpJwvcKh43haM67EpnCvfcQdAasPba5iuReCxjfymNk25",
  "key14": "2xr4Rr5wj15ebLN3f3XHj1WzPgM9PDq11V4KwVj2wdP6ZQowgy3BPR6WXPWccbrSMiWgrYnM6C1tLHgeufte9JVU",
  "key15": "3CPvzRYJxcf3yhyPYFCS7PMSjqwbHavN5KQPThz9iDwYYMeK4qPinXtbuiKL5rPbUMPehaTDUVTLnh2jrrjqAZHZ",
  "key16": "2Q6ap1xjvBgbcwQemGXnTJrhuECrAsGHcGkS47FUvDRUFuQXCjS4uTGAGeMPfEU2yHswuZdnQD3zZc925QuD32Jo",
  "key17": "4Pgx2xMFRFWs7f26o7bBX1GfBT4CgYnrnht4av17qwb24i6HSNUhmdnzd6PxbPGHDcZGiYZgyJyaa6pVsBhCE7ZX",
  "key18": "5k3vBKjyQ72KgMK9vVgzM8y3HJD5Dh82NTd3A8UvoSy4XfDowjv5kN7jKNPMsP6qwjbEdtkbfbZaWakm1ffesb6G",
  "key19": "61CucME7uGusjXTH4pwZq9smX5ZeuT7y1dd635kgnuNEBvJXMEjXcY86bpS4TEPKRhgEpwhLMzBKkC6D7L5FSawj",
  "key20": "4KJL1CAFfQ2GNTsJQvz4WREmcNZ7SBmBMaVFaYjWZcWWDe8uVwTaVYYJMmAT5Ug4BtzRUvHTCAAJVTuwgtxXYxct",
  "key21": "24VQKQLXqWeNsLzVT1EKjenBqQMBb4T1bXJRDwtX3YCP22RZYie8i5ikp3DsEeQZoXVJmcyT9ndwXRGwmDS4iXVB",
  "key22": "4ySu2ht2MUaGLvdTeeQdMUoXkmD5YpvLkHVhnPSawmT9Mt1WEzbU3yHiSRfqtzMjuBF96yRuGt5GVa8u9yMtAyPX",
  "key23": "3qrL9rc5drbueweeEEvAido9Kwni3w1PYjqApJBExXofMqpGXQCmvDvdVi7p7nPwUU3kJMjx3Ex58MGB8TPEJBLi",
  "key24": "39sQtiToU7umfpgCY7bpv5zoU38kzWchykUSb91XoSVC9ooCHiSr5ApUqost1CsAyZ3LYWdQJ3shTjUjN99ahRVT",
  "key25": "zjb9YpScvkvMJmVw5ze2NDCpKJiGYzhFEL2DHJhs4uXroGfu2chbeprj3AHHuG5CNuSju4wSJnrg6VYRcvJFQGd",
  "key26": "MeXjnMvCV8CnNURCpQR8NsSsPZoWzYpK7Eui2WnwAbW1SGr54MMp5tDvkeMz5JewLyKDyzN4wRBDaFi8x6wgiPt",
  "key27": "4cit3u5mQ48nvxw7qJhZEGpMfzvjB1WXhvj9dQwBHVae3NMiVe1UDHqR7n33QM1f2NtWD4FFwjasoteRZgk2ZE5N",
  "key28": "P29WahExnt3HmeLC4DzSGjnkLt5LTee3kHs6YZH2oSiUvnAqRsgziQBms2oriXnDWeKGHVNmY6fjPz3F4ZJctUa",
  "key29": "34AyLb3y5wRKPS5eSq7hhr66pKDcpuVUbNrjTPWYoFsWYymEKuZ5qEPRvm3GA7ZJ8Zv38joYMPJhEmihjyogVoxu",
  "key30": "32cknHHjzw8q1c2xTD6CNH1qbjMpW9TrxKk97WXZqQ1jCQYHu9U6bpFM1qkW72b45xUKATP5JeVj3iqUaR5JueNu",
  "key31": "2FLGYW1ZAw7MUvgiCJRXAr19zpsUbUKotFYwwfYAT33nf6pKnq8QZyWCZUBduD9CHjPqkVuwrn6sYc4MbzjYmk9y",
  "key32": "5DB6q9a3Z9nWnfDVQjndxjcnWg4g6vEkXQE8CN4XRmWJSWKX2KXbpyAn5FjP8iS7gmjz94mmUTU9oakmupuYBnD8",
  "key33": "Eyn5dqdbPcVvZ8jjvQH9jFLZmdh4uFebtM5Z2VNknEvhmZ4BiRAzxzy7AeASSKhoxjNwZXFhaRM8ztMhj1fazrS",
  "key34": "2P24m2YprH3XMt3Yxe6UhYZ8jVrzyajeDp2LAC1LZ8MLEiGzhassnTxea5yFNHhM4JTtLavvKWy7rpLge8uqcBbg"
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
