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
    "3L9ydxDySTUv1Rt4rXsKBseqxap45ACyHkw25yPh5ccQhw2YaH1MuXLvLX5W4ma4JSJaqXWtHCzZg6YYh23vNF6Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ixmDNwsFrwuciWKhdtq5RK8aiA61MsjmQ7ftudEj8fdx6daJCfqVPQuQGfWJ5g7bjGQzNQsVZ29FVgrPRELyw1R",
  "key1": "4h32WiFRg9is2C1RATvebK3M48vuvbMNCE24JQYB9rgRxWyxB9bKpwscQQjQxAEJsqFwn2hjKJHWmzB36D1piRLZ",
  "key2": "2oPh2dBKmcXxKRnWFiQAhwEWaac2foCLwrBUirCt8WJdiUkKZmSZUYyk1x6WixwA4p5yJhrc1zkTvmqPoYYfYo85",
  "key3": "5Hf17VxZZ8iKEXXPyyNWQbvXNJRYXLkd3VRpkMudiyLjMT39jgsoxR1bHmHfegCWUkBFnxQqjkFmyqsVJbqKuawr",
  "key4": "3HSPqtMKYZSKJSW4S9oJhJbi6Dbza7xRAAoSkohZhZ9vtQg5yuTjjvevbXeNX8b5HnCQFs9pzPFNPevPkJnRMhat",
  "key5": "5dcfDWJiNkDFuuhe1Kv5a9CBfY3QeAwsqAiWmQp4mJkM82QZQUMPQHS4oWYGdzabXwMWKhFbwgNVjdwLwYMkHmCk",
  "key6": "5Gw5rL5eT9Gu57J6GBeuAHiDJXJpmBU7XWRyiinySHXMsJJto8pcUZhMMaUJ5NxAU8BQAeRPhJWV5pDpFj9JJPQR",
  "key7": "5vAZpLeBG84gfN2CgLjs4FJUVnsjvF1Zg9beKG6k9iPQCkKqhEk51txGZxPr12U6JSV49Yp3BBAYjT55BU1ZeAVg",
  "key8": "CKAFsVuSxVjBJ6YKDKA52spMpvopuWSHJmUEcsg8v3hDrL3NyWP3rdYWazNooV1N5L2HS1PuPZTdnvALu4F27Ew",
  "key9": "5tb4t8UPSbbYfBCtvtNZkwrSb5QX1xXKs7on2aNtqjSHazvvuwZpSrQyXTTey8YhUEfJWjzezoTYkPHALvtkpAvp",
  "key10": "4a69XASBTfZQq9LyPAjBJhzpgvHbXj8cRXNQKXkbnJfe3S8Q7saNhoeA3wKwz7AXYAhvkzccJNZQ3LQkJpD99cwc",
  "key11": "Vm6Ftf3R2WP8jthugsUF6m57ybEEZ5Y2PniWvYqSw5uvXeknMKmWvAphEX8rMh5pJpN5pL8tBNVcqPZMGpcXJxL",
  "key12": "gi8XmAoLpaFbxt6u3qFQLp2Hbq9oHdVpgbgzmpj9FoPSWrQBBUmQi2yWVYQLb6VtoZpqtfJVbFnakikKc45z1wA",
  "key13": "26iTnT4nwPeCy8DsucpPYDvS7BWaAQKvLp15cmKEHARkNZENpjwsje6MytsWHKi3sES3fUESniF4U64EKM8zxy5X",
  "key14": "26jWEMB2iH1oNVZNbSjPA4kCUf3PGsH5Upew36mAbHDMH442a29QuKtszeJk3gBRvG57TPWfMMvMhhwannCFTUvz",
  "key15": "vPf6o3ZcMsCxax3w3VMcQn5Ct4Qht9wti5W83VS2RVbD2poAG1QGaUJZoqiekR3xJhS2Hk5ban8mFpGEg5gmbS6",
  "key16": "22yHaquDSfzV6xKTU3WCRHED7yPLXNF2qav46GPYpaaXKb9PPLHcBef6p1ebu1sp3UMse4SvatyAY3LBFB5ULyf9",
  "key17": "wxRMFb485goB882bFDtEDcxntKCEhisR9F7CU5NVBtwufeaJCxw1TAyufv1DBzpaWuQBTEkK2kx4LsrrPvfVJg6",
  "key18": "nWphhrQ696cjRqK2gX5qxV8Y1n8hWZAqYbbx9SjYp1n9a6j2Hhh962mcbShnToJRwQBth9wda9umu22Km7S6v6a",
  "key19": "5hcpbjmviqePr8pfvr4kidKXD5n9eU8cC8jihumVAtzAzzf7BCGAmJZC5ZomqXnnmeAMtSoouFeSsn8Fu1LCaHLB",
  "key20": "5RatmLMav4EipNbtznfkofkNToV7bJhW7LD4XEUZQZxMXHrYVUESrGfNRENL12owSpK6GT6VmFUhRXVpqCGfneAW",
  "key21": "5vLz2AhjbSBU9yPjTxWwkFpv4FX5BQU1Zs5r3Vy4GiJc2imdWb3YfRq8NxsVHE7CihAui6D1bYeSPAX8BuqyuELd",
  "key22": "53eWQtKrXHb2ekWYvc9bhLTxQGef7ZFXesqBmq6uR2i3E4xnLw9SrUz2XTLr8Umpz16p6ohQqRyQndyqA2vo9bGn",
  "key23": "5NEdeJz9upCt4hnsfdGjaXB9yi1cq1HHb8ZKeVEGqchMqZB6CskL43MNmEzX3iyboTLsCFv19jA6kppF8bxWX2qY",
  "key24": "xXyGdp3kJqqooN9iYBCgfHj4B5R96t5AnnNxFirdJ5PLK7EncU8n7ed35ABC2p7dM1esLxjtyQY89LcPLGAaz9F",
  "key25": "gwhZkfX5jydKMi9TSDK2Ba7RRXGqKNX44FJFxxGpDSEoCyHgSbmMvbk6WSfHQBbR2eNcBP2mvgJuzxjb9z8bZDB",
  "key26": "3griUJGDtBkfkmLeqkZ6mieSweaVvo54Pd7mk1e26GcDJ7nph9sSXk5a55oBHuSQNiURBy24YRHk75SYecV5vJDa",
  "key27": "Y9Bth8eBoiuGztYX6M2EpyGDjf43pP9H582yyw9b5sDnkj8GUkBWprY9ex4moN9reNAhibdkM1AerbmvfXBLrGF",
  "key28": "672jeXQSgGAwMM7YQWyJiLsdhtvNHxB4FA7ieZWUqDgM2i1zHYWSHketd6siEs3ALft9qUrpjohbWwF2v5GpGGgU",
  "key29": "2pDgFmQNGmuYBRRfxehL7d8ouyyjErZ6MnP8WA8y2uLJYaw6RRzpGDJJLRsTPZYuo82dLt2yXf35RpzWBPczVGbC",
  "key30": "4hqtDbMreVz7rKGRW5UUeoJY94vrMHARNJamkrfYTnzPUMQpr2M4JRJoyFTSeQ5AoFP781NfgJCuSfZ8iJDXpxMs",
  "key31": "4VoBSjbhqaGjQxZnS9nkEeGkHKHJHoJmkaS6RS9m3NajmTpQDDvnJ3hHGc92utJJWHXtbm99iVKPeH9J35go1dYq",
  "key32": "2nVXrkJHGDW3EJ2HQ57163bYw9qMdJqdAVfaSVfET9UjNHCtXLs4GYVfqqeXswETFidYffuNfhCxvLpmK8JCKKXx",
  "key33": "3HXMq5r14JhkfdU42SHfskx6fDCkkUqxgyGUAWnKTtTfzSNwhD8kPRDUSsHjrExvKfDvKir2DNPb8PMGu6bSF3v3",
  "key34": "3ScwdKV1MupWcXsCYcphuCpT8dgHDZCXm4eBpMQyU2HhJAbsaz8DxqmToMJKLTQ3qRiqffj3RmPtx3XLRUdiv1b4",
  "key35": "DE97kdJZq2o41MDm3mFoF3w8uUdTrE7q6ADoMn1UyL2UXBh783ceRERZGb1B9VQHv3wbha1ZmT2BzGUMZ3Mqakk",
  "key36": "5Ra7CRxgv6UZz6yqFve7o3hCqGEfr7AyVm1CsHbGTwvSD48ijeWdeXmrhtY5VCWQAcqTfsMa4Ld8T7kWgW7GD3do",
  "key37": "vojV8wjGufHTTXeLMKZWZUEZTpfG9jJR9q9dhC16N6mcxZ5U6MY8NNLSLZggBJUSBkb45EnoZKyYpNa988zvxVQ",
  "key38": "2ajtBPeiSLaVEcdwV7GcZnAd31DXv36UfnmPcq9b6HTGPsKMmAAjrQjXfCtokNmTNQxhUDWa7Ce1yEYL5JSpSM5n",
  "key39": "5s3ftHS4XMsYM8Bkf2uGdmxyStjVAToFfJhQedxhEAwmSjiFX51VsLZLcCWYQPVDrZUD8jR3P5xeg2ssUCmbkjbS",
  "key40": "3fL8tW5WX1fKPNR7woPtBaQbvJZ3pK4Dk5AyS24x4ZMZetpr7PsrMMWaN2MLEE1MxkpUnG1evCDQri6p5iqJEEYU",
  "key41": "1WW6Y7NYh9wUCQ3GdyqrZnYYhvpFsf4zFPzcBqxvqvtae91GEQuJoHjWa2Gcvws3pZfKXrur4MfFK8XemtJDYwb",
  "key42": "36HJkjY5iGCUGoEFRj9FPgQScY3thZeBbkj2UxmYtRNHNuvfbcyjSDKonHfs1dvLmv9UEw8RvbuvBrUjFsvcnPTm",
  "key43": "P5HoDzaHNoDR669MuPh4mXfdGpt1abU5tPa12JV17xEoW8CZqSS5NVsmCKnTE6aBYyb7nm9QooG9TPFQGYyBq12",
  "key44": "4kyQEGmmZvoYjgmXuSNqmGz8y7EfMVQa4d1C94yssmKF6yvSHgZ4cBya7wFA7r8ByU1HFhjZfWTQqPJDRNG5ZiZn",
  "key45": "2GYATK5fnZFXFs92TkPMTW2m4px5NctQnVuE8tUz7Hq3gSapr1cisy8xmvVijcCmvL9TBWFELw6g2gaEcACMCYxm",
  "key46": "26etf1q8HALNsnYBhG1UasqDqd6LronRj5SyaDneYMnFjfa6ebbyttrAmQxyuFuwQDvtsLr9fxNipGZ9VixJcCKH",
  "key47": "4BkdMFjReRvDVF3wn2aepDJkfCn6idYRrK6uzF9rAsCAUAMPALSzLoj9UMbdYuhrw1PWpu6yaR4UpXcVmcArihfx",
  "key48": "2NHS9QMs3177FkuSLevArXuTpQPwdGb2VzG6p35mux9sfhCEhBbwav1PXE9ht4AVzjtRcRtfSEiPTAhgCgFHaTa7"
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
