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
    "5R7zYbpnZQegRfkYsjffjoLLhSxeGE7r97RA1TaQpj2KmpCphL6LBB9KYyDagnMnDZBH6TB3CRQ59EPT9kGmYQFE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mYT8qBUus7ctbVwBqoQv6cPnLwWpTFpsThrVeXni5tSSHJwPEVZjujWT9co3boUzz3jqs2VaUnyoDhok3Zygac9",
  "key1": "4SLiiEC3rb42aBBWmxPQc45vAQw696UGfB6iyjaqRpFkSjTw8C25BvfyMWnZLNeDQQS5KiQYYUz9wYp5JzwjAHGj",
  "key2": "31CboDm9Ec5WzMCdaughgcVb8YZcVpRuY5TmDKpFtZ5DSgYRrRotHN6prFGR9CpmECQCpt5b2KgAMC8vZJhEmGC9",
  "key3": "4pEhFnYxLKdpmhBu1r7idxwcowq3jzKeJQBZKAWLAhSJRKKd2RkqRQ6rFAwaapcnBN4ACmX15DEFpAtSJ6fkdh8w",
  "key4": "3L41egCuuFMQTNyEyD8ji3yGTizdaryZyxkNhZMTqEbqBCcTuz3Wjzbs79WioCx5zwCoS8YPT4311NF92qdztuhu",
  "key5": "4bnhtWBysix3QBp7GjPLFCr6Kz7FbMzcxNYk5bDiasmTxo5EhZCxrmJKtyR4WUNHfZ758ecGaMLLpBTWgVrHPPEQ",
  "key6": "pb2kBLo18PNhXEgEEKMcLg9JcVGnKj7MFr1GsmeLBTizt2oWKSiKHHzaJvGC9Ts8Zf2F1gDXhX9oWvgTbbwbpgi",
  "key7": "5qv5Y7FTS1Zq5ACaNvGYZ8XN1eeR5nq2CPYKFpbSeYyVm7is1yvGUdHZuduszpzgvBS1tdVBo6XGm8VtH4LjQjFZ",
  "key8": "54hdcpJBHdUPnpYmgQPoJkBjM4mJg1FJ2XawHL34K842yLAyShquzMhQzEtr9MTsaJAWNrJ3J3WCEzzXWSt3iCMh",
  "key9": "5VsS8rGHecki45x8BPgR1wpskMJREAr79a4b2rywjGw2u46zcqPAhsxk2AtQbsVu29ZHeASj7MHEgH4jSucgJjrp",
  "key10": "2TGZ87Z4htqAXuxaEiti3Jv8F1VCVfmN84JR12NzRuhjJG4t6FSb9X3SFhkvo1ma3TjX6iEef6h4yMhdoqmvFiZ8",
  "key11": "4Sh4E3axRKJKSomN8jY5txXUuMhh8gJNjSzmUDrME28FtG63LwnjxSx7NJDGDDYzX7rSnkBDtwv3zEodkkfpXMQ2",
  "key12": "3AuuYAGKxGbunthZYK8g69A3ZkVRnujS8oFpTpBt2E5iDBrMGCuEduJSvjwk2nyHwTsZinRfRZJPNx8fD4ksmZYK",
  "key13": "4gdkfWaat3wsgLuCBkPUMXFQNtUwx6ut9AtVeGwQsDoqpawJVCVw1WUR5k83b6aDKMWLQEJcd4stNMHA82tHEpSP",
  "key14": "2PbCW5SjqcYkTduuLTQ3cL12zTHwgzuQfVK5MPvqfcPiY7PuHLyJ52Ydkb6X1ZZSnL3ThL2nXRaWe4QW7V4Xppus",
  "key15": "DDmJUpgsWn4QXsjQ8C9s7GyY4jXRRrnC3Ea6Uqag7oRnXmroB8ttYCgaHCaCh4xcRDGTH95sK9PV1gDysi4bqsZ",
  "key16": "5EY2h1n1PQ57DBYxwEraRtde7TVGZ1bakNbJbK8gCwSZnfKTvCTrNpPfY3u7gidxxDhgUyFxQv4aUCFhkSHfJroc",
  "key17": "2db7VAHQqNXgtpae4YjacUkMMVdpZVrZEGtL9pBZdgdMDmSzenQ5yKp9iZT71vuZqmGmiYADddPANHgSdeUA26MR",
  "key18": "rku7Gvt6ExcwUuTZwXz3maknY4X6NoDtwGpzv9pctLEFUkM9cW8W9Yd9hPrpoodrTV6duJSrgXYHztwB6HyheWc",
  "key19": "2uf6tARyE6TseFFUy6WccRrTh9FxSK3ZXkP6gvwe7R5dTJMfiAAdKQKi5F6nsxRZyM5rQeqc98CJjwwNWf6hPeT4",
  "key20": "3SChjGygSxWLrMHLP8May33h2wAAyycKFxkEvX751KxGk21Pk8TTAZNFHUdAsjk3mx95bVyTydkc5oNwpLWwfhjX",
  "key21": "59vi6WrQpnE2o8BbiPsnymVuT743oAv3L7zAu3sFXnjLLRUnb6ipWhz9DyLZKbdJG31ZxvdY64YkgwXRwdyqYoTk",
  "key22": "2NfPAf4ovqjskW7K9K4vZFShKyaddF9yUofUkVLev4aSRAdB4DjTz2o9mBjdt1ZL6fD7tCw2onvnZfeoic7iGNsS",
  "key23": "4vBtDc1LcqQfq8iEsyh7gzAwWYA3j1jn3oZSaMWSMP7GuWUSL89vv7kfGsXpDyw5wSLEKMzF5xNfwCos7DaYSUDG",
  "key24": "5wAFLr34GcqymoNaJ8QS6JLsAjr6R6nxRx1aCZg26THLv5MbniQfeLx2FB1gELa6cS4wfLpNs5JY2fdTKdwitq39",
  "key25": "36MN8rDF6Wh5RK3f2RwvGiXYMHv9xv5LFDeRdsU4c1cnNGE4LpvXcDP2gjBC6ZyWdzBdkDiQHnAxX4TbYTFkCw7g",
  "key26": "AtKbGqa91bHYH7R68zt9exMvk8V7LsSk5yBqN32zJEsjVW4jDiEpyJHkWNwQwmxhsYxpYH8oQbidGBpHqDLsjsC",
  "key27": "2bFhKN7WPdFboiR2JZGW9x3XWKkdXh5w9DzbqtNboHBJQkyrqCecVHgQDTiyE5Yv9E7u4XSB9tgLB4p549FWV4cA",
  "key28": "64jy69AsCjvZvwpvYjgAEFqGbwMhLRZsCqgq4PUSd7GHhdLfgo4TSJ6tCFG8uEonYLxbvxiA5cHnMUykkzby8Qxe",
  "key29": "57gsmWLnHr7qZxL7SRGD6kBU7HPugjbaJM1k1g2LQ8Su5gyTVXQFWPZreZvVZVkMfBpd56xvLmB2XAAS2F7mtDZJ",
  "key30": "4qsewufXgTaxV9YXip9PnStJzpsZo4jVGbGQfaKZgm9SXFXRuUPLPGD4jNhGRg5qr4b9ybnRyACd234cBS7cmBUW",
  "key31": "3dM7A8omfmiUwg4Y5dCjDGWeZkW2KxFc6xtjmvYmzVA4JsTEBE3dbcv5fVGga1S8xHUCD86aDNu67uE8Qct9JJro",
  "key32": "517wgYrui9tGiHy5MrAL2UxvGiX2MpevXWKbCnwpdtgZ27pVo7rhBTbAoeEKZDGBCQoJoHrfC9zVBkkAxTvj6XL9",
  "key33": "b6UkD4CM3dJvAumgimUZ4NGiNpNPoqULuvJr4hhcgDKTYKAmVCmSee4Vm5cM1hHZNS6j2ZcYzCVJj5xysyGByJK",
  "key34": "mPQRmJTP8M3s49Jh2gfqCSYVyhrtrqwXYb3s6z8tUSp1k8Ny6junTPtgri3t4mcS1ZqnL4xS268CYMZoUxF5Nkg",
  "key35": "5UrMhdLSZJEk9spuxuTAGVEBZV7NsdHVbRMwCDuBZ3VDHe9DAmXkxwZKq8aQbtpK5zemXrVZNSapbTmysgta3SsA",
  "key36": "5vQksFz4uWipL8vzrKPKE6MTXiFaxZrJ9hEqRbGGULvxBSQet3QoAoUqUhwaDw93Yia5WXZSA3J1PT99CE4bFrAB",
  "key37": "3b7Xjm2RWV3rms3WfiLumX2xhVa8nYhm283XLhcCUg3zJ3uuyj8vy4fTEZ1NRHf8YVLVfU6JwegpZuUDjzKRc9cn",
  "key38": "2A2Q3X9HGeZjpRiznPyuiEoDJjM1uzytHx4q4Y3QBKh4aqeW1V5wqNZ9pjq1YRkehE8TUWYtmxwfZAdeBvLAcoxy",
  "key39": "45Jg1qZ997SyRomxDyu6tBJke3A8Fyi4FQaQrtjpiFLmPpHwvc6capvQ36iFmEFRYMpSdADbnSdjq8iHkuE81bFy",
  "key40": "3qfXkxD2Wb9n6UXtRrruQhq6MpaYnG3rPFCiAegrxyNfvBszEtLeTYHWWW1yTrD3rfA9xV56LWKmVCd88vLLbgLu",
  "key41": "yAx9raqRk5BiD5WeTf2321qNXbPMEJb63Ld9kS73Rv1yBrUDAzfwLqrHFXXy8WBQsVNQr9pGWSx5BycPJ4d2sa7",
  "key42": "3rpcTRvzPnzbzZbJcuZL249XwtquWWkUasze8SFtV2sAH41iC5pFeu72LJEwDJ9ykvFbKMSfnR4vYpnmPPuz9ckH",
  "key43": "2ST3Hx8jeqiUKjipkJqwBM9dFzGwWmzML4X1yoJqTo2vuULTmgVcMhCpuLwh7m9eq6m2nq5cwpsfYTqnfcLYnTux",
  "key44": "XhUoYyitx9BjPMHPDVn8DoztQ4ry761EYrTD4rKNknvr8ogHEHnik3EazybSBTNnxLyPaoZT1J455wkTgniPZ6f",
  "key45": "3Wk7YBmbNsZPpKR7ChbxhpXLRC65um1o3Z4UoDHtvKsjPMSJ3NgnqxNpGaK26Zu5F3c33iCpjjHrmV9XyfmcE32g",
  "key46": "N3d3WYtJ8vD3c6MbQza1obC1y7dozKaUBdaS19nQRsGN4NATWn8eZb5nxsdf2Luju7TNPbE1VXifdNZsqPiAS5K",
  "key47": "3A91FSyeZZtkHFNgthYf16kU4QWkYTaghdWwKjKAj7sv2tmjKut6fxKMVQyYyijomspz4ABwXXfi67HfRKuVJuVY",
  "key48": "2E6KkgrVHqkoREdEEnxFMZaU4U96hW9HKFKDUqYJ8pKrWB6KYLcywqg6PezEpmG6ZQhQmsLi2eGpxQCYcT4p6u1v",
  "key49": "3GfSr8vgHDwmj4movNMzGUHvKs8d8vGvpen4XiLG9SD1CSUp74vEEa6TvLSZ3xgzAWao3vpXZGwXk3cbi9mUqAaR"
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
