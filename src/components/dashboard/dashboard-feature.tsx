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
    "2yuMRRXzAuaVRs6j34rVgThPcEC1Agz1RakvY3ShZD1MsRYsbtS63soWZHzZwZjyryM1stVsZz8HJrgFd6n7VhrT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ft3cY7y3qqNmUWPpjUJAYL6qqYFCKuEPcsaXaou6bG7nPwVMBZba73fS4wZh4muqLYYMBcfALykdaCe1ckFbxbn",
  "key1": "9SMnibtZudvPnNctU5gDEweuhWYUviLRubd4i4CHArEohugSeS1uBdsn4A48ivw8Y14tDr7kDVSNVcENmbpcsmw",
  "key2": "2qkgpecb3ghuoj8XAxBwDPUa9T1v7UNSkZBt8Mwntw6D7Bfb5EkH9yphU3KmazgboBuWdcC79jYoN4FsyeAgDRaZ",
  "key3": "jYC2dihmPKeauJG3unTCFX2bA9i6R5CMq8aGNADxJ9vCYrxhN2MUM3BMdnMSK2TraUaCngkrmzGZnZWikw7EE9t",
  "key4": "4moLCrQ9gRMqAn373aXUVM5UehR8i8VJR2FwwYDrMpV9q7QcNjffCrtDfySEUUrgVH2Mz7fBemAHDJ6bW8Yr9BHL",
  "key5": "3x8w8pQumZqkVq5Fg5iKu9xTNxjzjzxJhGwRDWSc7H7hAAZ2N4U43awHrAELmxJUF1xiyE5YdfZw82oPZ22V9hA",
  "key6": "3wzESPpHCoxDYagarsgus5navTbCrHz5qw5ZYF3Zs56coLJAh9ij5S222wHaXLZEZYCuTwHsCDt4tMXpywMXrYSU",
  "key7": "3zJdgDefxrSRTysZBSjjVUTRsUxDse2Bqjprkpt32smNBR6TAC2k7GKCLB4TKKjhJvF9HYKXQ4uAj2Ut9d99gVmK",
  "key8": "5vwbdxXPCSy7ZfFxFSmxtc7C2cdWrFCBmUVD3ogAuyb1R4XrazVQeMSQyRVpsmCzoaKuewkJriWgS4cVQGdWnjLg",
  "key9": "52ewJJPF11havQteRxvxp4i5LHVB4Fa5Ak69vN2zQBbQgBaXfJ6oWFdze5A7Zzy4zzPkkzY3LkyNjKyH67NRFDJA",
  "key10": "B3vJuRb1QkszT4Ccw9Gs6zmWprEJeoCDdkKCr9yACmboGWd6hwSz8N3zjKxUbYpovDAgkBCMotkGvf3Z6rQaxoW",
  "key11": "5Mj6HvfehGzLCbUxgMZDaP1DXGByzd7GcDuyCtxLxUYj5zBd8XKpBgKnS5AK3VFBh5eAJxLtNjZ2nqxE7AEzMJep",
  "key12": "NXF6o72i6EQ6Xo3ZWowZ96h2TTC31meKXAwB4iKVuikk7ZQFiYTs1mdUWC5t3aDRbrjQJwSK2kgZ1NCj7LiQw6G",
  "key13": "26Lrauayqq5C2zciug9DBDCw4BRECBpUNbcmh5XZFh2djajEjEP6owN1KmKQmUK6SRX2hx4NznacSGWSHFtQqGgL",
  "key14": "24LEUEtgbB2W6iHy3dkf9cisnse1d4nWctc4T437hZQp125kYJvm1ZHyiXkdmFT6dZRynDGdD8JmvhaLYbtJPyHT",
  "key15": "4vxRLBxbu7STQ8YXm2xRGTGrt4GKFXxwZEfVawVytGFk4Ggre8C11WGutSrqVuyCa1czBXhsCzDXxUKG5sW3j3tN",
  "key16": "4zQXx7Qy1kDqrEDJd5MgrewqzTTGggdNQeGKR3gGQtVX61e4aZJ9fdBMmRHZXZFjdqpMRjhNZr2VUa2B4919EDhR",
  "key17": "58twVFXjuKTRZTNTZHwhFQZmCWNer3YHzy4MkXc6QemthTPhjsMkxPU86EeXKvgS3VSYZsKp9DhreQeU9ZFsRajm",
  "key18": "37oMTrYPn84rU4hzF9G9fBxf3uRPjy2SPDjJ2Fm36vpMhZrrSthzfGJYk5Z1edRbLUWfnhwn93hZnGp16Hv7J4iW",
  "key19": "5abDNpMw7NjWGJ4LPqbEJLUS5ebfMz9PzJRgJDH1fJQs4QDE9qeSaZ4dBnRY75gQXKDzTv1vMK596CSMZzqygJ8n",
  "key20": "5f8ReEYTytWtDWZqdMZokjGFLX2mqz5UjwgFhhtV9Sn6wtSXgxhcYJrmksYQz2vYaPzfaEoyoApFXyAcv6K9UMrL",
  "key21": "2sYyxzqcveDMN5r7RKjJDPLUR17fffqiBYHMJ17NdkyXKuenDVeRfnBYiV9axoADvBphDaFSWNzEgmdUioxJDBst",
  "key22": "kkASPm7MKgnzZrEPFG9cN6SDqTo1y6MCyMWzJZaWW2jmTbb23q1t4C5hCkBNhcw5egGDviZ3jrcbRbcQNv15FWP",
  "key23": "2j7dWubUxTgHxRPE9iAVqcKNn4owatHtkQuycawPpQC1hXwZ28v2bbQtX9aQi6YoomTuB26ghGo6isoam56urrzG",
  "key24": "QcZs7prjgVX61fSHdZYXbkqQyNeGLAfEKgtLujqiNiJfXfbnmvaqCWAnZB2332ygPdyftkPmhZVUEke4QscyfqE",
  "key25": "5NLDJ26DjMQKfgnsQmsieio6ckmHyp4354eYGNBGR6ysGPjThpLE2At8xsVAi2FJ6o7HALKQq91G7QZPshm4enRt",
  "key26": "uRGaHVnEhHGu3dsEp4FAkxSnYtZuAYteKLCQLhmWoHP9tgRJtS7Z7CEqbJMpsiKtPYx911Ki5Z2pZXAuhgWFsmv",
  "key27": "3z6S4fjCDrrRZtyLC1LWYh2xCBKG6HWyPRYFpRaSKVE1Z6fZF1KStTR8tmDMP7mS2sv3Q9xfr9eDXd97Jiu8Mxik",
  "key28": "5BGpTwXGyfydoDzrFuQFcwBZ3Ym2QfuQkwkzN7ZJk4XXqLSdqLDNzWA7kTTmzXyJd9eqWwPyrq7A2J6T5MMnMY7W",
  "key29": "2Yw41s5vYMKkrX9bFgPKZBDLoGwju8uWt1pSFwrG3N5Lcyax9Ra2j1EkHYRqhYToRF3RvCXgKK8K7BokioXG98iy",
  "key30": "3rFSuJmPiUi2Zh87ZwjRxMrdBeB1wJeqxnyBfbvu1ScYaG1SrzxuhMqdoednoQQEFP8DF1PS4arJ8RhxUpNKDSrz",
  "key31": "3YER445AnannzYMYE5yYhtfLQvnFmbVeg8cH42bxwfxAm1tGDgnJyjZe5Dc8oRZapNxphhq7T99WeATuWwzuKjMN",
  "key32": "31MYTqKUbEnrvPpefv1xpXNJf4eXgnoc8pZo94afXDgVwZjRKo8F8tfQFSgH9QVEeAV7k2WE6MKBLLLoNQj6eeNv",
  "key33": "54ZzC7KRv3B3mVg6KMDx6A3FJ9Hekz3V5gYfdwZRWLQ1wbHW3bHo9KB6cRzHmh7yzoCUCDW3pq7F7Dhc9P2jCFpm",
  "key34": "4nNF4Vdsor99R2JkutBa4qxeeJPKWfFEpffDR4qP4oftrDvRLu7EJFgSFsYiKJ5zKPVnyfrFfKDfuLVop4e2bTaQ",
  "key35": "4hNqFERwQiDANXnYKTKpz4yYrfkKfyB7r28acuF4pCq935hMJhsSfanSFv9DEeViLUJHcVQnwc52MN5MpdmxT8ir",
  "key36": "bTnWMLr1YZNgFtMZQurk2cQ3ZSKoTmJdZ27yhgga82bRTXCjWaxPzXrDs9bVdqfHJeK6bRWm1Cm9P7X21tDdBZG",
  "key37": "54V9SnY9VPb5BufF5PiubjX92mef8s81bjLNhzkN1hPcBeHsKH8amhV8mKCUqhyQsiFap3GYSB9uiBoqAnjnVvHS",
  "key38": "4gHJibMQ8D3oWh6yiB9XJs9dz2p2hVgeFbz6QMEg6fL3TkPE9cVCsbGiLmvn34uAYvM9vzSwLf4fPDZJsGt3Qy7f",
  "key39": "4wpD82bbckTGDSyPEQBTxJB5FsSHFGPoEEWU85JKts1zNVMESqBdh9QqmW2FY4LBkodbPnaGgjTDUZ1AEA5aLmQc",
  "key40": "2axaKpNCFjfk5zAdasGDLX7hKozzgZ3JWEiyBaiNJd6adP5udfqz4t3H2hCZ4a241572ptY9pftv4JHLAXNdQNxK",
  "key41": "xsPERMRKpWBR8eqLpxfjdxau8kxZidM6B7k6ehwHGhPHT3ocAYrf38BpE58RenmSgSuygKjviwKo6rbuCgv8h4U",
  "key42": "5jBa9jNishBwCSUGXGUcqUPq5knYDGiuuu2zcv818Un94czy81aBUwfmopjFUHa579hEyGBBHM5twTqkMEVZKDtR",
  "key43": "58uXxnsH94BRKJehSrLTCios4FrzGjRXRxkdrRbYYBM8w8QaXtGUpc6C7AUBJB9jZbbNmM7wdpPJSMRoMszr9stp",
  "key44": "4o3P9Dvo4bouRS6M1BRLaQmckpsk1YdC2tWJAvNbAGh5QtCYCTJ9GEjXCb8MZKWVUfGQVSAAY5eu4kjP6e1YXqS1",
  "key45": "8BTiot8yww5kAe5bJEuupyTYXtRVngM1egq4JaoXht2ps3SYNLDo2FBsYLMA7ymHZLAo7teToCWcJtrbQJ8TDbD",
  "key46": "CEUA3Xn1LXiSPSqHwU5t8PGFjNRoj76pC2bmDXt7W2FnZnHwW2t5JmsahFPRUtF8W6VX615RmLJBvqDjsGWXzFk"
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
