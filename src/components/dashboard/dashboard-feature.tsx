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
    "4P5WJ73RLxaETaJ8sCZRf4psiuGzqB2qHDFLmtrEpPJDrNYNMYRvHmtkjPNGVJgEih5p9VbJNXDyNvraxv3XHrnw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "531sYVYKLKXKhd6si9Cb1xDhaXtcK4W4UeP7ZzsPLguYweeHz5Pv7xbzBbex8aLRjrSz8qmzHbBNoruPzUJ4AEX",
  "key1": "26mNpqgNEfVsjkFzqWWEFJmhE6fJ3CQEwW5tCQrDx9yAbKrCnE413azLRjBKWvz638GhWuCyugK7Hh5AKjdmugue",
  "key2": "4LJEJhpwF4GoJJGJAgpsTFHEBhBRqdEweeFHU6kyfLMKcpYN1QmsYbVqPMWrFH9pK67hAmFrch6KyoVxGM2Jyz8n",
  "key3": "4sRbwbAeG7FYfrpMYW8VNwyD8v4t1KEfannpeAF3XjdcoFvKQcrVpNwoBEjq26DzneFakgTB6oft4jZ8hv9CGK5m",
  "key4": "3BiJtmHaoMDsWQSyarmdbq3pYce7E4jyNJTNnyGEZQddxJuDN2qVw5FhiPeuQ7naPsQGho7SR9CVZsGXg4VFmyKm",
  "key5": "4iQq5YCLJdiVWRtX5pbu8SytsxRuHHMFRHCYCZ2TWiiMeAJFg92Dr433gcbwqyF2n349v9MKRkLJgLjuadzKv6sh",
  "key6": "5bkzRrHZdMUjr3HMvWJiVH7e9AucrJThKQxg1AWufcQ9eN5uVJ4Np2VHMNehVqYQmZ1Df4d4GASa6KiUC9LH954M",
  "key7": "kFkxyw8twNEUyBZRJFNQnwoY2zwXVHgR2yd7dGQnCa3a5RnuoGUoXf2NC8vbDs9Kf897N3wxJkJN3va6w9X9wkg",
  "key8": "3iFfStuUpSEg7mhYZ7vS94SRH9oDx5MPhkvHqbJr7GzUcDngF1Ro4DiaTooBJxVZvDf2BiQs5QaCy4NN2Ejc6xsW",
  "key9": "2iqR2hexcLWC6xUDh3vQoBFAzFT7GAnSSTxbbJQ7UAkSsGfdwEXKmQtHXFK8kFMrcMd9HfCeK5uDAzfQMePLjw5u",
  "key10": "2Lg3gV9UdeVeGzYBTJKWX1df43rwwDQ8xx1xKkuRaSabhULg3ekD8gdz2ecY58NQ8cL6yzP1nYPwMx4XgfPFFJEW",
  "key11": "3YgDNGW3eLcXoHaECC8uKLSegwFbDCRzhC7Us1yJeGKiQyREstbFYbDAyNCZqW4RJvzuPq1xSXsJAuMVLpdKv6kJ",
  "key12": "393Rw5Cie2ostmRXfGPzqkgLHUWxADRei5qW2HctmDzEbX5twwBuNuW9tjfLntpzP21p2LnjvjAHnvRKJh88ntum",
  "key13": "bUkzGL6fU2Gb48d9zZo79GzCReFGXuM5W7j27wguNCLx3trZyftYAP7jDpvt21v2sJSh8JGK1W9BPfND39gh6kB",
  "key14": "28S1UsrpUAFYsezrGkwTe5f9q8dJ4bEVXhiv4SRLB6K6ebLLfiJavPnTGDdEJBj5mAGQnhXAY9ftMCh2DpyBLvzh",
  "key15": "4BVDctcShwL4mWLkebMmdtjxwKutaypPFSDEHTvyoMSLswgoMKLx8MRcHuMJN59K7UYnzBaE836kvkDDv1ukjNk7",
  "key16": "2MZJtAhPbrnZH78cc17z8zJ2CwTxsk5nzLnWyFeaK4dVazVZFBprLQonEBAFnFZyRWQdRf9rf85b2E6ZKZuHfUPn",
  "key17": "4PPndKX5Vb2qcFinCXoP2Wv4vNVafpvNZt1TS17hPbEhLpcKimkEBsKJwEuMmkQhqZDm9sZtvFdFWQmp5cMGZUaP",
  "key18": "3BcEkCUmy8zf1CCZr9vC8DJx5SwRZ7TtiPLuRvYDSh6tktzJE2HGf5AuFmfnzXBukiKDMgn18MTN9xHFi8iw6rLE",
  "key19": "54sYJtqWiB51fC3wu41HXcY4FXb9ae5nfDBLrX1cVUdCZCTG8yYiSHTov1ELwJMQs4181ocLKrsTZZE4my5i8PWa",
  "key20": "65NfNZKq4EzwcjWpLckMxEvJgkMhNU1Q39tHukS7YTki8VR1m8KZWbbcG59yzupZ1ixscz5uJaSsyHGgpuZ4Vn3n",
  "key21": "2ZTGfxA6XFc3WaPKdWCmkgVkYtWhAz3HroEioH5XZA9wLDdFQnrR8dmSvWEC9h442R75cMyuPkF8aH2fYEgMaK8D",
  "key22": "4esU75q7aaUzxFQnuYj6KeyFcNTMNVR4itWiSm8ymFgxmy37b8L5yocuf76YezpDspm9jpjcE8SnUrafiwF1e3zK",
  "key23": "27jZGcyxEQsw5n1xTzP9PTdvbSr3eUrVaqy6FC3JHRtAEJox9KEA8ENrPtvbptnjLnDrJKE27Czc6P9H8yqhYbx4",
  "key24": "9uKwGSAwico9FVKyKSyfyi85o6J1WxRuba2eki5QD4owYK9oWkYYEzaMRY85vvosq9snCvHoVnb4LtvqVLzY3Wp",
  "key25": "cySuJZ8WJoNxKvZtQt6jz2ZR42bkio3U1sT9SbgkMo1Xw9eabyGGqSUKPxV25hWcSx2BaKdFkoDVdmSrfsczKbW",
  "key26": "3A4rgJpyoqsbXduPQNdfWJZzWQANb8cgYmu8hdnzMQcRXYvi1PNYPgRc498GcRHxL9wgBcTybN5EYGPaBDMkPzLt",
  "key27": "2d9Ze2xGiMLdTvkytBowtEhmR9qCYxm2mg9JLHhAsHRmHsBu9RjcdegPhu4hax9Te8gwGVh9VTPmA4p9zfHrSVKK",
  "key28": "49Wetp68C6W1wAfmq79ajnr5rSdrBkb2Ap8dEfdKkw1NNC3ULt9HZtr7LtuPvHPN5xCuo5jJTm99czckfk5sw1wq",
  "key29": "3KkZwdjQD2NWSXJcFRak85iX7ZDhsVaQEqae8fyTgaX7Qad8o1kbj3FjkG53cp3Fs3P1scYJkRGFFS7BtWAsBsmv",
  "key30": "3ecPQRm2VEHbCBULJMDCHBUgJ8dGW5A3HwAasG1nVD8xQPqTH9Hyd5CSBwSnGkYUqfMJx91r6U5KVKL36XPStyNk",
  "key31": "2JXRGJKSS4Za41H6qGxnMZRhxcQ5uJWxijYSTP4TWeMJkB6pEy2iuxrA5GQ7SYehZyhzLEok5ocUuGzQ75xDBVqs",
  "key32": "4qZKMao6A1XWPz67vrGeMH7PN4qob7Kn4M1tWDbwULhKKQLRsjcs2FK7en1qzqktT6WAUdDgGRVUwDx4MBpFLk4u",
  "key33": "2ZLp45gqreMPopp7DYZp7grTFNnsDXbwSnTV3s5juyMLDWy1zqY8infbkBMYFkv4yR2o7LpLa7EUwVJxWoQ7XCZP",
  "key34": "epcnk89M9opTq5S6hiWLDhkFT38nSH1N2cZrGFHWo7bAGhMmtkBsWb52HFNF6PuGQeWiFczvCskNCh74sD7dnK8",
  "key35": "4dLFw5XB8k51r4EfH8x6hmD1rgNh4gcFvoRstVjUxrCQdh1NtqQFmZ9B9zf1bCcepMMqPUNVGq7EDrnxGg2cwMFi",
  "key36": "4m9kXyxBfcwNVTgraDQTfYBwKyyiur5xmAHBjFoj3fPHXbzqMq1DCh56qPSCbHDpKFRmaAPYdCCkJjTySbyunLKS",
  "key37": "3s6CbKLPqt6Uyj4rmEJsCwagB9p16tHfzogvt4U32emmjVJRk3nbipKtztz2dFVJXHKFzMVZkEQNNoXyg6QACzJF"
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
