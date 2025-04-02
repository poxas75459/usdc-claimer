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
    "3QfsQXKE1bokQN32JHL954XPB94bk23oABeuy8kNPDhqMxqrx2BS8AGDZGRp6jR3VFfeGZYFaFXUHv432BUt3Cnd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29UUEiNMDQe96azN1oGGpmByUqdeKWxigpnnFgSQxVnERASZfLgnvm4gMUFKNPPQkwTPRM1fRQEBbVWPtAzzdmzk",
  "key1": "48mRpSTEujaJiZr7EDoFSpZoArCfeLFnF3wdBnRDF85T7y6WAWxDiNuzaoTAfJ9rydegiU313HSi3rttSBvVuMoR",
  "key2": "2FxykeUhXxMn39zQKVKDTyM2TatEWnNAN27rncqQRoyBnGCYBtvij2mtnpXs54oJ7SzLCofmnDtwARZCWSa2BtSt",
  "key3": "2UfgvrZLBq6H9Ahr2BqU3XX4YU3mbQ9dUWKurLeYyHiEsMZ3a2XfTA7ieqwQhpuPhhKB67hE6KxmgZFBDaU6f29z",
  "key4": "7gvRM4KAmC1Grw3wCc96B4GnnWYJnwWjTRHrJreLExboAhMSd5kwXqDz7kMyTCLPjVs8WUQ9eX3bHirkBN6PpPz",
  "key5": "4aPZkbHrFmWQ5jSEyRKkw1ajvGoTthQuSsNWGMoiQ8qtL4ZwaYvotkfk6h6u2cp6CeiptHZPQXDpM8caUMm7svVb",
  "key6": "4ZzpbKidx3pebJt8STdUmwtrrqoTKNKYJ1chNaXEAtFCQ41dtDT6LqCiBXhJQgq2BaGLJxXpctN34YXutHHPUjQs",
  "key7": "669o5CSHTvkzvMMdHARLa3jnTQc27nbAFJWM4tkUK9uJtnCGr7yrHXtdZLpgFRRTekDfohteXZ5J6kpcuMPy2m1s",
  "key8": "yDAehbdMf6tynRtBdSoe43AT5csozwX2Zoeh63jXdcj1jm2vbXpQW1iK8wrLN6tUZev6wMJzUqKFBbyYSVGy4rs",
  "key9": "5Yd1HGmAoZ7iCRcAWC8gRK7kqwUQh1AqiUhWQxTB3Ts5VShGzHQwHA7cpf4ogCnuhq5vcE6RyDPDUE3YwDGcYw37",
  "key10": "45NaUnaaCzHbgBMFvXBdikGPEw5ZqYMEJsHkcEQ71WwYVrPyhhPk73WT29UqTcALRYsrbS7YDYKyiUpy3r7SfNG",
  "key11": "4nxvjiunta8ytK3msLKMNq5UUM6VDGKcYea7KXXBQaFfXcYicKE6jziSGLqEKhuxksu1tkw6XrshCf42WFH5ASVk",
  "key12": "2y7XuNJpkSMnaGS7DRZm8ygiNzsJaDSSpoQVuUzDPCs51khvkp3zNuKRfXhz37Q73RSvB4T5LWi5uZYSEscfBd8D",
  "key13": "34LRC4jUiY5WP3fJy6UHNmVspFhoEG1MAz9JRfe6sPvhM2tY3azANyXUW6u6YKcaUWmLmmRgDZ5x6TRej5RfNFD6",
  "key14": "5Pnm5acAApFCL1LPiATxx4wfUT1NLU8KubziYHFDmRmaujAE9bBSnWhFt4XjdfaNPUFGBYiDe47tdRzEAwVg6n1",
  "key15": "5ngWEzKSAMwAjyzyBzzFvghmoj6EfAEfw8tyXfibnNvwu1cYdcsLYhtF9CW5akJTxcYVxVFvMajYzM17iJtjZrer",
  "key16": "4WgDjYf8ao5t8XWozBLkpc2VRQUJhX9D3Vf34Bq5K8aCGyjbZHwSiBNogBDGqYPBMqXn9grL2KxoT7X5anv1Mi7H",
  "key17": "4n8Up7esgxzyLxbMa9ET8reavY3CKXLaRQHZQGqhA4BRymuqx4bZ1347SipQjvbVpxLTpsxJE7HpvM7aCChASDrk",
  "key18": "3fgm7jc4xoo3q4G7HSAspvzfejhqD4Xu4awFsEPxv7BgFWKdb6v2ShPjKCxo2akL5Hh9yxyAVJWJoV8beUXxSRRF",
  "key19": "45zYxYySN1tLMqz8atZiaXKte6M9UFJETJzBP5gpam3epMWH2QrqxguPsCbMY6Cw5NbjPSrox3VXX5HrRqmHwY4i",
  "key20": "3iuV1GwRkQYzg9Q1ZFxRG3t8i7k61reaMmAU6G81VTyFzsFrSegzEDbvjXJZreueagdPaYmBm2vhJByhV9duVtLr",
  "key21": "28baBnLzXLcm26veaoZiSLvH8Zw7kCvWgP6eA8J5errpLPJXcK3XgGCAgR2Kj6mieAtUSTiJo2xMGwNafPzjtmdB",
  "key22": "2DjV9hnDiWww6U9ygAJudkNJbGhgWmERtMoFFR8d9uDd6CsMtp646wyb2rdw4ja8GStfCK2vxxgaPrNJyZhodCqZ",
  "key23": "5jw3mmqZs6fuWK7xwjfJoAS6ptNuHc7adDHZaKHPr8R9YMXed4A7ecsARvQTPRjGAwe8QqXcj2ebpBVw4hmRmHKq",
  "key24": "hqN2LX9AscHKp21jCnUS1QQRo1ExGfc9BGDJzRD6bKZMTyDQVsoWX6zh5PU2D8AQ4nwdn9syLvGK6Hn6fh1kcpg",
  "key25": "2fCDtbM6YQDKpWYefuZF4GnBzBLUjZ7U8HwvyxXrSnGbS7LkU5mf8pJvPef5MnMzLe8KsyruQ72zkW2mshkuuQ98",
  "key26": "3MeFBEGdirWQQ8LVsCmp51JYGs3oKeGJHuWNrFsRYGs7GQ6yYm3nRPvQP1G3KgFNuxs2273W8MbcExB1F12qz9ge",
  "key27": "2H24XuncksSUTrS9iPTNzRk5tPrQPyuJHGhfKKQk1RaRdoDMpk8JythEgvQ3LCyTNrVjME41SjNXxy5DKhdSfCPm",
  "key28": "5DMLHhkQVpiU6ZwrLmkPrj3qNvGDiPA6HbLpWtRUG4dULCJBHdBKLiMvTnFPbN82ymK4k53CqnjPKPRhyT7z9ngn",
  "key29": "2F8BAoQPZ8gms4dcc26cZWJ9ATMeHSC7zmbqXTthYBZHGvg8Th961wZ94gAwSCAm4hPtJgY9XtDRgzmUyNSWpV2A",
  "key30": "5Lk3vdGkGtVgKcbKCeWTqmE52r83DLx9Ki8W44P5TkuB4SdRWvPfMjfZ6VZbyLvcUMNdq3gfwuxMhzucKLoriNYR",
  "key31": "9uowtiKeRF5S2tu8PjszTB9e99ySRPabXzVJaGCGSWGWg3BH8Hp6JHi5mpuVG3s3N4edMxAXFUsc9UYmymi9vRD",
  "key32": "3To7bXLNy7aWcWNvJ4Z1snJYY12FyhriynfvGfjpEbDcMETjgjBw3NEcsWC8FeWHPVghYXg4tAdS7zBweoHabMzd",
  "key33": "3arXepWhVZc4vEVpBFD3H1cB3n2LU9FX8wFd827wg2oFVNfM53NahLSWfsV6zT3NvTC1VXJxc6t4t6U31PKifekj",
  "key34": "2FCEfn3vNAEMZ4sKJJai139NgSz1F1S3aYmhkE6tXimyQNBdx5gEjGY4HgaGidzgLtcTyt73RAU5wCNgsh9QTSEf",
  "key35": "5T5RsRzqEGE2Rb2b3566rajSUDgT6jgMFLMDCMDQUMY87FPFhbvB5wfcFTcvrfberkEZnfEpapk6QPz55pduER2W",
  "key36": "3rwrUTopBzuZJUdrJXQNwEAiYW9gdar59M2jqziFCXFUWNb8yre3i4WeE3UMxFWe1nb7UBqojqbaC2Hze3XKTGKX",
  "key37": "4u4JCv22pppYAdap8dVSaASU4SY4ua5CLtWenVKMUqVVdjtqpkjtnxreCV3K5L4CRJZDa98jcs8xdw7SUTKR52Ca",
  "key38": "YAffoRvyWEjMfy2eQjVDVpsG3tYzvqzvYMwYxcDaBEp7kD7tNTUUfpCqb8ABcx2ugJQ6gQJ6raX2NYLTLZmPTf4",
  "key39": "48dBve2AV8tQnsBj9amXXhj1rdRFs4SxquA4Z5eEbsJBYtf8eDKjTPymqoBVa4PPHq25R9KvaWQeSZYPFLeJqfr1",
  "key40": "vpTSgNjghGVGhWnKxKE92h7QjtRyA6zTDTpzfB9igUNVQ6YmXZVcu5MNLKBjev8921jS4bQ7W8BJx2XfnD5kHYa",
  "key41": "32M3ix8NJgJNiCH2jrDN2q7ZfqxbnUGfk2X9MDD4mWytBctikzK86FxiuH9zK1SiXVnQWnDiZ4q4H5q628fLPuSk",
  "key42": "2Ym4JJe5kakSR2gkjozCBmiSg3fjhAdmG8z1wECCL8MvWhFY4Psaj6cWtHUGmyF7NZMUgHH2QfDpBu1o6Yy8BuyG",
  "key43": "2Fx9Nkr9SgDndDbgMvWRzg33nccBWtq6GdUEvsWgwsLcwJLEAdXbnzdASfNbpnUdVqjqRx4TfNt38qPcXnDDRM89",
  "key44": "nBWGcLd6N9mexwnFSjFxsfhJhHfDK1svxovkovUgvUait3GJJwGx8tnijXpVupQ1sLRfhKamszPJqMhYU87SNJT",
  "key45": "355gzAqwUrL4uBK1KmJ9pQCNCuUmdrey2CAc7Fssj8ztr51FJ1ctujetWv7emY34R5nyE6dpTLXnBhq9vnAejoha",
  "key46": "5nvTE38vqXgz2wTAXgXaQThdGGhULMaNpXufZJz2Chwus5TCM7n2amdug5ytzLnphiiGFThKtLp7hjhZ24GqFuiT",
  "key47": "vrzyb6oREVqvhP62qTsL3nFrEw8HEVztynABkJ4pXvT3U1emReXdGqtzvjxDmzDw7JwNqPy3XVFExZXrUdebypu"
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
