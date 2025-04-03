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
    "4w5w82M2cw9RKa4tTb8gV9zEaYgRdTPSFue3vYGQ5vfS8pJBoSK1UdaA9XENznrFVPu47BjSxQSK4oUnR4pkeMde"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wyV8zBD6YCRN2tzXYG5imwvYPn6SL2cHZYaMPKQdbPptCL86zargJdTYa84gcC71XAkKkwKPvDndgnjhTY99tdD",
  "key1": "32QLtYBHfDyojbxcrjTAFLkHokfLPXV5Jq1Ge9vWCaRtLwHfnRuZoYpu2e7K1bCNJAM7EBB1KrWtkbC3nWaKA4VH",
  "key2": "2sQXSCh7w2wSugmb75aJkpksjSXzSu1Qs7sNdLt2eLXA8CzLHQxH7P95Prpwe2eLqS9NHzxNYiRciXfEixRvCAmd",
  "key3": "2tWXNe7dvwxuthn7wPuWE7FWfjUj9i9q5puUpttN4xrTWursGCAap2LvT8Ny3jiWvyYzj1auVRiEjSSTYhyFQoa8",
  "key4": "5qbbuv1f7RJSA9nTSzhQKThxzreVe1w9kf9ZsxHFuuhTPER9i5vyeQT6ejfsr9buDTrXxcSPTq1SeePVjiX2WjHB",
  "key5": "2NSLdVrzjDpBNnYfmH4LhBjthPm8j8x4uzW5qLznqP2CU2JpSZQTbgUozUoiECAijQgTbn2EMtLbtsPX69tXK7xv",
  "key6": "5WiUvbaBNNMME3sd84giBRJ7tyrwf3BK4KaM4RTxLdHtUt5U3MbWYZruZy4mPdX8k4xALvTcUEUz6DhxKmTnornb",
  "key7": "3xjSXREwzuh8wp4KSMu9kfdeoMmV9SZyxdym8YT9wqURTDZxjjSwVdeoDFiibCZzWm1wL7xfrgJLq3a9Gcvwmmc8",
  "key8": "2yqENz69TBg3BKmP6sbxiG7vHkccaqas6p4Au6Qon2cBy2r5igJT4zVFtxk3iT7CW8om3oxRmKKyZVHa7PRrKByd",
  "key9": "4ctiwuULY2ZvBS11EUzS97cPRJhXmrnsMQ4NhjqAuL8GVPz13y7UYDmm6tnYxse6KtFyYr3Ev34mDSa7VZ8w5HHD",
  "key10": "2atec7nnbJjTuSXQWpcGL64T25XXdA6t6CwaXg2NVzJ1CQV2mpPUgrJuhStqC3S19NhS5eoXcgd9vjUuP8YuZMnx",
  "key11": "2GqNrQA1qCw425nDThHFNppdtWHk3HMBytubS49J9XcMnnsgUyS7KjiNgYqZwNW7oyFHFweXtbRgdfboEbuLyskS",
  "key12": "3tjxdcEt4Lv5m45areVcZVnjykDVjDmpBbWCpXGM6r1RHfb1XBDC7AT86MoM6XwkQPBGva35duhZyDmAxdv5L2Um",
  "key13": "6GTeFibrpDi1YAdZaMPUo1bqFcckVBGE3bkct5Zog1g61AStzRqyuWRT3BcTojVU5uonZmm3ZoZY9wKvefvKEs3",
  "key14": "3bj2HqjVCYmeJJG9F1v9f9ks8mDMUeJ1jmCGRXkTmmKpyzhEs42yRTBDmWGm2DaP9SL2NKPqh9y4ZBugRFC671iu",
  "key15": "64wBKrynwmGKeXu9QnzqDFXoAcCPt5EUXvM76N4iJNLEy2n5D7JUnWuKyDA8GTwzAnUWu7irdPuEEL7GiQ6aydUa",
  "key16": "NXYHYmYZNu7Gzmf46wAm54APFStBgKXRHt5AbFKgayfHYEa1P1qkVbCvsJCA4QVbd8YwnfXfK9pdxey9Q8Y5SkM",
  "key17": "381uk7pJX5KoDPjApd9DkbqoATnYYbUdpQgaYYidho5Zw39r6LLpoos9mGiuAPg9Jdt6JJRKHohzhGVEgp7n7UaW",
  "key18": "4MBQw6Dx3s9Uoux9CFsJ3HGW3WrfAgGPjirSVZARMK4hTcr6mMwUBdjKy3mBUxM2k1f1VmKmcNH1xe8EWnrmiDUP",
  "key19": "5LqziCYF8Wb78bhzcEmETDcCUAxTYj6fwh4RfdwYEn7qspPvGsEYKCVEim7FMWMXPzcs5NKGz1UiKNHhvCWA524e",
  "key20": "6BDtTVeVLq8ZL63pehpdgEdP8nSxWhRhcHeQPFLLbvBz2bKpTxYEDbSGwafDtp6vUjLjhwyqsuQDbdsDJjRAiw2",
  "key21": "2mRNRkxNGqN6kHVz5SNuPt6cRDUYCeQCBAwJa7HwSi3mrpGJkHB1q8yRzcN7KTSeT2TbmjxKmnpUvteFCbGZh8MS",
  "key22": "42LFZaZ6Q4urJQMqeGNoVVnZp4TsnepyYLTF2vMAfP2U4BCXi7PWQHtsgfJfAmXYkwtBGWb2wxNHR15rQrZihRj2",
  "key23": "56EBtxN8w7yzYiGx77B9vHVno9uHsNHfQxyqELhNKgctTxADngcDak8Fu4bn4ZrbA8DhoVyAZgGBxnkEHKPZ9FJq",
  "key24": "PY62FRPYUg9383STKYC5EBxvNETY4rn65ovBrnKjCPtyCuP5mt64pVW95xkwX6kMs4jiiRZYgT98vwUSva1EXNQ",
  "key25": "64NmDm75zZuu6rPcKYHyRS8VNCWnpYpy2VuZVi3RPbaCLipYNAKZHksofXQCr6oGXpenJG8KaMEdbF8pykrNQ9Gr",
  "key26": "4Q2ZJqRMjz5ssmQHEjdyCo86Nsm36vtrkDMyZL7xRhHBrcE2GT2gjaBAXkBDfP4seCCe6zxjpNKoqy9PEGaHUNW3",
  "key27": "AJRnFNqhQEsoqBjjkZNipgVL5E4r3TqgoWSjgyUbUDwCzCy9jax9aREPWLvvKH9CJ2HARB5aeHXRPsRe4Khnp9J",
  "key28": "4xs8fCHnWcmVBA4seyz2oMecbmoNjiNNomVKK7yE6tAke8bzqXg9n35tfaeBM2m2niJMLktaDNctoU22NThny9Rk",
  "key29": "3hFj39op79CX1gWgUoqzWSVRVZbVkwcYnfs9YuaiotXT8jJ2FjAzGqej4j2arx3uxAjaExczEdExoJW4k5KpnG4F",
  "key30": "3ZjA79hu1AHnwfJt1w7E6uWA4eDDJStJEfrvV9rAVLatQNKYQxCprfEETNtcNxxsp2ZdhBNofCpNzDYVDUjbR18j",
  "key31": "4PkRhnXZZmH6BK6owimGd8sprU8PSParFtVxxZPdDPwkvTguCuCcjPYtqHYciGZHWz8veDgvVdqMU6AHjiwzPWp4",
  "key32": "5R15Goa6MQ8NVt8KN8VThdyMRqMKzKfXeyNi7Vd3KYS2w5twBJKbKqn2q5rkL8HMgK16jFpkSyb4MfXM6AL3bA2R",
  "key33": "p25yTZ2hCnzgkMFZkufHd3d97cCwZ4c2KhaVtBB7qpQevSQdHJqagBXsjESvZQwgdm9Cm7weqfPtSQavh5erHVf",
  "key34": "2jQkx7JspjYPPKgGtYJ9sERv13pP1oGETbjvhm7gtXCDGtDV6stGAYaSqfxpRHc7uGQU7uvvqRXkdw22ayCYM3b4",
  "key35": "7rb9jkHNXpXfHvBjiSxzpdiq4U5ehCfrx2R2mxKvRoh1cYAjXsck3Hwg3cPSuicKkRPdw51fQP94bA2Xq3Niauk",
  "key36": "2M2hgFuAdDz2UvMiPwCgKLspTkMAqTwjYZhsftZq8rRRjEk3nYH4SoeanfwgdJeGtD1XBscuTwNYYSLv6P1jQ1VV",
  "key37": "2yXKsbPSqqPLMAi7QrBoHkCZZqYGuLNwpMQT5f5ZXoN9HVFesaQUcp3dkCnmopivQ7bdo6V5wo8f1CauU3QTym99",
  "key38": "2nTDcFLYticEb9hvb6BKcPmRRKv4V75iFq7qKF1Y79NK7xqFjjbDqQu2D8PgJxeKqnr3jnbUeh1UMCtFdE5a9fa9",
  "key39": "5Wwu5G6b9bP4HwThQ5FCtvcNQ4La6QWEqkq95A7QKAkcK9K37WXDKSEz9CeP3j7R2qG85KSfK6Hmt8fnZgMke8T",
  "key40": "2fua3XJnJ9N4X2DGeUFmsW5S4FUz1zEDV6zQSaBmPboefk3eqnuXPiqFjv6zH57UMBqUAHb62cyAmLu4CHJDjaPb",
  "key41": "3E4rMnQTuJfF88rPYKYsUwLKURv8MfHMNa7N6FSVBZmYhhvo2gU5FzH12xQL4K9Bsgdojpwu9jEVwVL4Ei5gGaji",
  "key42": "23zatV8zYj1X35LzVB51PGhgxnccDJ73XtxPgXmXaRciZmFVTySQ6AKJnL76zu2s92cNsuFgPyKj8PosDZzfwdbD",
  "key43": "23uspsLAocwr5XcvZYTKkRhvSURG6QbGv4XMPg5sNispkCGDZ1rgoq32cPDrYPEg6iuzYxHTSmaXP1nMFojLPQVn"
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
