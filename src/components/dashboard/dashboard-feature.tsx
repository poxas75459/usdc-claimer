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
    "4jhkKYCg3kSFoeZaWEY2a3qRixDVPwMTbfYGFnHotwi2icBcbbjhxV1EXGRgfPtDWVQCe1vRdiUYGc76EceTotMa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JZV3sUFL8wMWDxduzw7YYQo7gRAwHRDMxSA7TVJ8B9xKMNi5gFKE67CuQq8AXTXWfkcPf3VPu31LhRD6mAoKuTh",
  "key1": "2zKts7uTWG7NQTvUjJZXQrkjGxTv9bX4GpdbkPjfDVBJjHAXpa4pL7rETSqkodNsaWGKuBioEDVihuAEkjFtweax",
  "key2": "32y6DzDefFNcnafnqDUHucxYPdhuFKEpLx8mLzqp1VcHPfp1qHUP2kH7428zKiLDmPWUJwVBrtN8UrxuGTbGKjP1",
  "key3": "38HicjhERoZYmhsdmdTDjXz5A6uYS2pfkQxr38vv4xq8VCAWkcX8BUtAsSsGkRmEYnZcmiwZnxuGbnyTdGPvkxKw",
  "key4": "2GSigjhqr2Avx1YFv8nUSaC6TBr4fVyHfYn8h6zkaQXK9mqp951rLrofNrQnB19SWxdyU4Lw3voBohYtUMrbyExj",
  "key5": "5ADCCycPay5vmpEQpcU4D4APRu4Jk65MYXxGgcxki7eZAFAxV9R3QuWHkERDtYsaFC4KKM3Sjt5GvGne4DgjFtZx",
  "key6": "2VnhCcKNZfQUDNnjFUkeocAYHog66uKCMXr1NTsnqvML8T4GxwTwWRt9nBps7M8G8aLXFdGEzgjw2CNbMDfXYPVg",
  "key7": "5PNa7ojmZF1PRoqJsJpUQwo1E6W3fowbAHqHDSHwrRhuTjBJLCLbc8Yeo5Gtckpw7kKrrSrSA1L2cDZyzRNtJg4o",
  "key8": "4yyjVCcN9mGf61RZ8dyXswBaCLFZCgRsBXHcGNg2P1MKdm6x3rL6H8LNWormMec81bfb58i4Ba86ftwPPndrKBne",
  "key9": "22D8JRR1gW54TVsANoum8YWihY3BZNw4c4sfxbUB94zxeedqGmKQPSFpHvLoZXTMA6rTu5g96r9wGp3LL1WAmoCz",
  "key10": "5Q5rk69XkpXDjLuJb9sRdPaHveLNJrEAzjJ5wHBB1zUVEMbuEYPcR2PPaiegp9arjxngHVRhSi6vzpnL5puAtCdR",
  "key11": "3Wx2ZvDrc8TGnSN4SMNCD6xyzVkxB4Di3EnUeVNdXuhqskWsYfAwVymTUK7Po6D8H6Dyy9GDSuhBRvLh5sjq4dxW",
  "key12": "5fL3roECDXKMtBNoNANAFvo4NRvGqrSecFVRVD5Nhpm72k5nugLmX3mpRymz68BWsRRdg9yJ4442dtHSHBTG5AX6",
  "key13": "5GiqgzkYuCD1qbsMePiYRSoniTGmaDYyDfTJbFXY9fWg6hxMyJ5UkzgYmqcKvBRvqneqXtdAZwK7WC6RYhUMAJ68",
  "key14": "2VU1KrQi2MFVdVfFkVbFcpyQSjdQCqor8zSYskaYGeRUhdN6LfsHEs5EkHVhMdWZRcH7KV9rABiBB3R1A8yVZYfj",
  "key15": "4oYK8SR7a3Kfxyi7BHzhH4uRpXdb7HzwR2c5iKvfAWXVhH8payTGG9ijW8ih2Ayj6JVginSzjTmxFsoZPcvvAbhv",
  "key16": "2PZosh1gMNRGEiHV7Jobwu3fwtXkEfE2a7VPmy5BHvxXFd9ykzMPFtr8YKvU6FtCa2W5aN5UtCwXmnjG1JBJsrrZ",
  "key17": "4eGVt36pKxbPXQKj1JgajYHYkQ7quBQ8QnGwAJgvftkNLYNToCL3iWv27BpnFzQfNTWFpqR4v7daJbutAD1yxn4P",
  "key18": "2yrj88KAdmJmdgNsfHSP992QFpbPJs6hMZ2KUj4hE5pDgKaiRBNvuTUfzfazHwK7otAg3vALjTwCvEaRBKuhyuGz",
  "key19": "2jkT2CJVB4WFUz6svFGKEHiCYkZyCp3q2bgGxXf5HqzyV5D96ALeanUT91zpwiQCuHMRtW3ecKACfXBz2uo1P5oc",
  "key20": "4T9Madz3NJAaYRYbKCSRtuxTc6Titoq581xCk38ZAqWTfJUkTFdSRSCHTER8aDeYLZw11rQjojNrLE7CnnFEYReF",
  "key21": "5Go9G64Fi5smMNFDWmYZhuZ4oKvr8kmAU8pSYRMvdZ7sYjenJR6AVGjbcoW7Tda1nfxCsHANeaDwasjM2UBtLEGm",
  "key22": "57gnVzt2o2ZuJB1eSzjfE2fBgUF2E7TsgLELpRkRju6jU3XfCK1aJcnopZmGNDmUeKPg1eV47pk9vY5gYPVtdpU",
  "key23": "5WCcTd9SFf1LGGPQfbMSaU1ip2esEQE9jPwzGzLAYxcudHtiutpK6SVXgHctQXF2BvSXZ6SfXAzKEe5enBQPBWgP",
  "key24": "2aEgKscAbrGUi336xqtjsVha7ea223ihstGLHCgQqtqiDE9LMGvqEXnm8QdyQ1d5RDgb3zj9rK4tZnvHgvRs8xHN",
  "key25": "64sz4GCDS8Yoj7wFbQp9Q8uYBGvnNZspBnjJhBik4P4jLvpxfb7xdYVPrhhgnv7XVD8VyefbC9qwwTNexAMB2n4S",
  "key26": "2daG1HjWhob1i9Ee9VYbQXjDtWFsNVsK7mfYaARJCmHbL97hJ4uiHyHmxJVinLoaHdt75Tiwe9c3SvqHUeJtDJG7",
  "key27": "23yFm1MoxVxFNPtZcDWXDG5cqMxXi2JJc8biojhQSbh2rg9eonbV2fjftV7PBDzkSvopheSw35PPA1rTjaGCt7xD",
  "key28": "35cgzx2EsMmF9xEoDCY4s7are9wGgyDxqWGUJmD8NkM92P7jeYXhtx7RXhRHNUkXWe1bL4CVm7rwSD6ftRqzp8jX",
  "key29": "2KpsdS7ihPSCXTpWHFQdG8o8yTUmFkK9sDNbmasnWw5GAh6kPReJ7fcFF7Ezck1TRnc7ssG6m1HL9Z2smG6kPiie",
  "key30": "4EmeA6GHgnEVzEhSou5TZsMYFKv1R6G1zsyHNSzcYWRbeuFPHg2mtyHGQbtDfnrtr1yZgmRJ6ymKCnfStAhhAmmj",
  "key31": "5CskeiFWXAFZDEtd7Sa49WKLRM3xxnuB96r3KbsKvsxPnMwUhVpBH1VKj7niFNRkdBzhEcDHz5ti6RxKvYYD1f8X",
  "key32": "2dfoAiHDNWmcmSYA4uYjD6WeTXa5Mi6dhkNyi6KkfKgLHAdmPsazVZhQAV3rtyLYT4zPg8RMX1VVVVeaeU1mrY2X",
  "key33": "2WrXDzq72rBBQ8JeqpyLwnAvCcruWQCjDoYy47e247e1wqYKPj8u3bW2xYuKYybCHwWpg3ZCBSgpXZTKW3WXC4Zm",
  "key34": "rDSqccdS2kDqD1rAG5aZJvLTrYzHPwJ58Nei86QGwLw8qCMxrCKRhV5X4g2XX2FjtqZqQFFEmU1mBBn339WkVJr",
  "key35": "VKF6TGg7gXnFLcab8Q5h21iM5znZHYyojB7MebJ6DqGHo3mV34KAfbJmyZZEPZZw2jqn8CeHr4pPPbLAL3LpisW",
  "key36": "dvuy53QC4YxcqbJoNkBZSjf4pMrvjvh5EmmNbgDsVQ6wJCV29oG44w88hxdLARJKxtpkZDNaiCkrgiAfgSUfsFb",
  "key37": "5DgLE6iWbY3Egwx43aVvvp8hTfo3noYnmJE4wTfnsuz6hhk7x6RvZCzmY2kBz8jfA33biAxajTU9KnMJSUFf3fVD",
  "key38": "4d6MNqqD9BPhXZF6uPxSGV3fH2wSZDvAbF1kcNfyHn6LvWjDnpLrC4wJa9zaEjmeJrAVKNqm3Py46RM9dpXH4g8G",
  "key39": "xoo2Yc2QXgv6cYXBQCcKeboq4tyChVc1siFMFYEv49mSJ4FKbXP3QGg3YohaCTb6jxg4au7YoFKmRR4S8eNh21M",
  "key40": "7UeBoFWueo2pM76DXrmM4ZRVmUuzjH7b8mBWQn5Ku2iJrPbWjmB4vfxEcdj1UY27Rq5uiWkhFj9nXsjbAxF3EoQ",
  "key41": "39rHktns2LgswMKJLsC9kKyAkaB8UmxcFmG4dZ9NrXv78P8LnXpqfQLvhJyQDMZDEWzHBk3u1gKcdZoQ6jsq6Uo",
  "key42": "5wgEe5UsakwVchUf3vy71kCioQptsGwVj2ByA51SHT42TNUey53oQUDoWnPEA4hPti113kwfCumDcQtTTtnQaerH",
  "key43": "4M8KQSGETwdniGWSwc1pKgqLWQbtwRTmPzPG3Z41tPuWGwfeknojcYNwvtR55pgZHiirdaa7J8BubMZEsWfxtH5m",
  "key44": "3VDB8z38XhFugv37R4khXMPHgav3E2g7bGqn5v5a1jhMAnaCnbe82jqqdszHBhM4FLSpUvP3G68UYA9pcC6dncmU",
  "key45": "3qZqdivCbj5DxQxRV2G2LDmeKykwnEmGcnWqTm16ipbJTsMpqZvka2wL5RqVhavL6omTouQFqZ5Wb3nFx2yPMt6S",
  "key46": "3GFcokCzWgi2yu2tchyR1x9b4qtuVmUqAdHe4LckfNH2aFjotL6NsuJRihrMZRrcf47mceYR6Ut23ALGvF21JUGm"
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
