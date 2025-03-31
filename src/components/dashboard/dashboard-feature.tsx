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
    "2msvarKEoyphfYuKNWgx4NRScWDRNaf2nwSRkLvXviBvGYaYE96cMk2iwtG7gYzxL7SEuCTxYNDKeGVaoujX5kMU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZPfk52L7HhFmbaeAPCJqwoeVUYTY88mb636C82pGM2baqoSB8cA5kUKypyevT5qyQy9Zcj8EhsVngWjfNAPEXPV",
  "key1": "3t35uQYZ3zmNaoC48xKWSHc9cSTn5itr6RXfBGgwmVRXP5VxpFkbCHLEx6ASvUBSvC8EYqEfZsrJKp8tvbHjQkYZ",
  "key2": "3BXEhZPhXCt4H3LyLKNqJGLj7M6LE1K1dMrDQriyjaTeugmaTj6o9FrEDAmQHvR3PBXs7QT6cHYkM2nehDS7fNp9",
  "key3": "2yo597rvRAEPXJRcXoqgHxg49yr9xzTYfrmarjAgbBaDVrYgD1W7q8n3cdjMuSUg1QZ4ae1HTjNVc6RZEsAwV8Td",
  "key4": "4zXnxYbYbtPKHGqkjb5kKcw3PN4f43hGMGR6w3RXixykymB3JmvWmvHoqmTHKsRDSrDMPsxiGYnFtyc8zpc4fqqe",
  "key5": "5rhui8opZHVaDpDt92aak8djV7D2odfbmsbQc7TTT9EgQrWaNsYR77mAbKsBs8PZNTNXZnqrXQZs9RxKRoQAxtcK",
  "key6": "4EMsx3hVSRPbcq7wLMyMFeD3Gwj9b5Tgo7jgQyk56mmYJrGz1YgQzNQohTih6c6grBuuUJ9bB8rHCkXFVj4vgTdE",
  "key7": "4LtTQhBjQYz67UAA5JkHdwhUDam2RRU8SHStsBKbtT6ZpmiXnuvCmpNCMxL2sBFw6BjVVfhEHEumMC2w2m2Fxh73",
  "key8": "2qrzdKdWfxDoRPkgZeqxHmDLSexcJVHN9x4m6yJQ5cdNnCg12KHtrMKtY16uQACW3vjtjhFdSKDPGPKuGe9ycUMH",
  "key9": "UKgkZpXMzh1gjbk34QukR8dy45Zed6NCZUvyNfERGTjC3BJMvTwLAtmSxFc3m5maCaQfk3ZBmdGk6FCPo6scUPj",
  "key10": "2hNwKuRzgCRNS7hP34paMdEVEstwbKwgaAd7dvUPHLKd9w2cjCz5BZmhHzVjZtx5MU1XkGU14g3kTRYbazqfZFmP",
  "key11": "5Mwb3vUgkW5zvw51u8nai4aMDpu7MU9s1bADdrgEXKgTcZ4qV2Rm57NwN3tjYjfDYdEQjH6UGJT7U2NhhN8MjD5k",
  "key12": "5msGSdtYG76ooXgHmGrJKAWHFDEvjGPxn2fF254qCDbRo9dUAq5vEJuetLA9kPFWJWJXYGsgvFYbzUvQKrdKLqm5",
  "key13": "2dwMLwcip1oSiJc9Ju3U9Qwg6gcvAEmGHWooRj9gdjGsaT6wYBXN5MPo2D3v1MNjNk2P5quCSKSToo7S9kTMAm1s",
  "key14": "53tWZQkxxcT6DcMLpbt9dAotwNumVNivTQUb9ww5qzkiJBjfBJhRmoHAF1iGuS2RicuUee6RNVVAnSo3sgVKJ63D",
  "key15": "EmUY4u46oyZKf2vWyvJM6WN5fAqCaHuEtRGcFaDhzwR2Kw8YWLuP3yXkvXQUj1A2txkofKZ7hazzwybkvAggxV2",
  "key16": "4ezw6VQcRaZR2uYE3v4rzuwvTVmM9hAofNeEs4JnXcD4P9yodQAQmzDSAyXzePeU1UkUxnLb39CCZGzRhaqTc6TH",
  "key17": "2ZjC3u3URuBDftwQmP86XY7tTHLm3nNcMEzXu3HF7tciHYy2WTRcMVGSAdNtNPpF2f4N5HYTGTq8qy6qBm2Jv6pa",
  "key18": "yvWSGVFpBYGAjkEyEvGag2U6znCMaRTbpmap68Ktu1ZQQtbEMaYtxHA56Mw4cY1GAVJNb6sDjSWEu4VFGS2NUrX",
  "key19": "3nEgVm2Qn4c5adSVetUvRR1L5WYr4eEiiALwWwxK65QaEWSrG9aJcQB7tjCCs3eCSsvAFPY7iqsj625ELBTnmxd8",
  "key20": "5Syj6ZPDTyoxGPAxM718LCaeUWAyyriwHnYH8QEQfkJLzNNJ3N6XhUmdDQxLi4eNQn6wzUQLasm1p47R3wmTAr6",
  "key21": "65vQyU6PzjzMuYoXLVuYbd9hZRx8PYfXXYwnhcQyDn8N2G98FyZ9RiPxrmu9KRtZEpxARDyMHv6rViK6YzENLtr",
  "key22": "2jNUD7sk4DEDMr15KXW8d2XpB58kYj47szHD37JQwBU7KGKX24riPLWjxaCRzPzJXyt3bQYdPMaz77imFBP3xkeB",
  "key23": "5UYUoyibzEtZJ6SGVRJnX2CoEKwazt9CkzHrUHnorHtHmXyYRwCA7eevJcYi7VpPkJHefC4tCMVSEKLBsCuxcyVV",
  "key24": "3LM1xXV9kbrhikd6jbGGb3GYdsxtpAPXvVcegCcFDdbE67uHUiwyE2x48LdgkAkUZoZK9VvpCBT9JYKZ46YhdTpT",
  "key25": "2PEPavPqLfEUBFRfDyxAxjAkSaUwXXEPKfpPZq6yBXDoxErnj2NY7cfVcPHrVSkiBZgqhEVXtvhXFBgX1GnPAZgd",
  "key26": "5AQ6Pc6KoLg7pZVJvzRmmaB2hDZHZqfWAkZF8SRy6RXYdvqBSeDP55F3LsZtWxnZNj9dPr7WP3i62W8vc1WLpgGT",
  "key27": "3wsBTR1ZHbcy5K4jBLEqJxkaP6nMVTnCwCewLbDchxAuEVyfFdGxMyxUL2MS1QHiP3tnPoas3ZLwXo4V91AfhMQp",
  "key28": "4qbje1t8pFWsJ8PyGJRc8pEhuhj3U44QHiLAJCYVYZ99c7rzfEytbS54vToyQirv6msW4Hy3PydQgXEthd8qoDDD",
  "key29": "3xexbSjT7vABoV8kWRqvT6v1qyZG2B3hZRJx8DhLhbJmLy7oQgXvGYxgWTy2i5PjK5M5sQoV2sF6k6wWua1RNaeR",
  "key30": "2no6EwXbnFFc4AYCqkftot76wJw4hiMAdbx2zXwqFzbvLwYXCoK2p8nB66hQqU36xrqem9nC7zHQQAJYoUaciCh",
  "key31": "5zkMTpKQzC9WfHh5e58CqpJuPwYzpXx7xNhAfskqeEoS9XLuCUQiYfDNZzhFWC5QPfgh3caFFK6w2M2fWwLCL93t",
  "key32": "3i9B5PYd8d5jBZhrHPTymFQ7Yc94XwDZnuC8q44QMLFrg5GZgSSKtd7Lwot5wuDxDRu7mbQ7ZYoPrQzTPiET6ecA",
  "key33": "2e2KvoB4adHMS773J79TcEA4e14xrVN7wuGXU1EeBLDGbA26H9yKZM19XHRyqQhrKMMTBuEHu8pZAQmh7tLjth11",
  "key34": "2sheemUcfJinPBhmnW7mhjNdTtUssoEEeT4vfUw1zq75jSJVMYZyYPWfCJtTCkGqrqMBKikKB4jd5sRJ4LZRFUt2",
  "key35": "9w7VUKJGEDL3y6GYeMFDaRYCA1r55DncsyaS4aQBt65qYt9PeSEUHTxbQGaAfpSWkBXW8Z6ifbgfRHNhazByLR2",
  "key36": "5VsgMyaR98UeJPw8cCnEAhT6xHSMcABKoX7WTysxxam7WiTsebnmpT9Xv2hJikEBvzjunoDziGAcUm7L4ASf3f6t",
  "key37": "DRoyayKYjVX7vu3Hv3gs3FKFXNtsGRihwcqKxFS37YaiRjsUekzPGLEgPc1PxgN9ayZKWED2TNKMyjHrMkcSnTC",
  "key38": "3FBev5C9TomsdG82qiqJ5Nh5GFrK9vpqR6PyNwfsoZzqoZhttwoWbAde2mJknVBSno5EJdQdZaoNmZ7w48KEkmaQ",
  "key39": "3RaeMxrxKdxQU5u9JAMaGvJDwqpFtbQf1g9AuNLr4wJ9Kf9mrov5bHgWWcVFKqUbU6tP6TA6cVsEmbaocGpm6A56",
  "key40": "4tMABfCHRnEfZb3UmaqkzXwEydEhnDGejT4L9dcpknrwxcU693JUdeMTjJK6B4C1ZWzwax7ihQYStaSP3Q5nvUQk",
  "key41": "2PgdFD4TBW7yPpTG4u38e4RnmP83o8h8nE1vzWHNHvX6UCRqzFCDvEKAGvjhGSrC4mXg1TnSibq8bzL2uDWKzrjQ",
  "key42": "31DESZSCKrU7CVkfuKYe7MgSgo4zWvyQAaU1HvrSD8HZAtX6RC4sY65rpaLuNPUJCamSQh6QDKrYQA9TB2iuBZgV",
  "key43": "JqnzBVtgtWVDXxjYksAdhEhHXuQEwH1aaCoXHkjPqptU4LqMcRpcGxg71nbQz1PdffWn9RrMnPzeNs25x79s2Hz",
  "key44": "xWKCYsM9gK4ZLnUEeAGTEVH7wffFMdXBrEnjEdVTHkVNnD57h8QEQtuzKbuSGHvoi13NCTAFLhkjKyXJauMGvxH",
  "key45": "3A85zaWYoJT6NoZrGdVSAFDUuFq5Air5jY6PwH3JGJDPkdmHXM3PmdDbyHouqHCcRRTgX4rqQhTZqfkQXZ9L92Fv",
  "key46": "2tRb2uqByevDPcrxYH2bte8DpWgr6JJNUgK4jrhBbpH73wV1r4CzyAUMA5oAgYG14JwbFWDXwgYfaRKzcdy616s",
  "key47": "5nvJEKeVBEr7ZqhSFNxXiqsQhWLGQxUxiYwQ49SPT7z1dJfqazMYyhJaANnqf3vEongyXpqB59n98DCMovc8ebMh"
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
