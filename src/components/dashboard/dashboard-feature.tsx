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
    "3TkUDWPL2rBxG4SJrwKnqTYcvi4nvjzQa2SYD1uA8nFy1x2BtpqC9bVvZao5PQaqzYi6i1UEErudhRACLprTeaoo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FiV6ekBrosmmMvzPfz6ACBq6xtEmBgDT5w3WrZ6QvWJtm2tfSqXHLU7XkcqYXb3GZyg5kMvE6qbPJFNSLyNWegq",
  "key1": "3AExfi3MXPN3UqYUgDQV7zS3VJDb9sWev1UMvoiUSKw6YYCiVvrk4BpFMc2CpKvJxqsiz389VdYdSa7jhgFG8Qvs",
  "key2": "4w4FL6mhNDAiL1iFKjb5tGKAKUifY4ZM6gobxyrGJdjWf434FrgY4NHjdZfrKupgU93ZQGK5zcEtNj4HyVXXGWyL",
  "key3": "qejkrZFDMjfmkRwotFQ3yqYdDz8Wdcm5qJYh7epybAf7kKVsXMDF9RtLvW3be53J8hdMknoBWCYTfvkki6Nzr2g",
  "key4": "5GTBtgypGEnYVNMvdBn86dVEZdHuJhtmrEKYjfcKDauiNbrhNGop592aZStGWPNDEszeK5ijDtMpAraSgdnzQ2mk",
  "key5": "4M8EqCajjRjGLJrqATs1caAbH7uYMaT6ji6kfNRJ1HbyRkyEhuGtLrBebELq75QUEQcak4afbhcXFANFwknX3FrJ",
  "key6": "3jsveoKSYVpjKhBYZ1cxwguTNPMYDrMTiWrFdFA6a4nntn4L2KVdKoZsu5dbvh3GMwq3xpDdjgi6uHh7w2D4PEXb",
  "key7": "5GizZCzAZ8MkXRhFvxJfr2G1eeAx8RjPkmaw3jZaQL1jCB3oumofLWn9RFhMPqv6DL33ncV4iYrNasRDNjk5Y6U5",
  "key8": "5LFuZ9aJY3fEuWdCoU7PwRoQfJPiuLeLDZNHTdPscBdr2JLXFCthPHeDLXNJMfSh1hQUpjtMDwdb6L1s4ewngPUK",
  "key9": "38yzuyzGGMfxDFAdUzxQtCpn5hQyeaND8zZfZU84zJHiyy6qbXskRWUzStyudnhyH8REUZ7LUknXXiEyNSYHNTsb",
  "key10": "5GPRqWb1GgLCj2Mcfj9VtL7CghPd6xv76wPJx2qMdrYzuf5TJvY6EcaYp89fA2J4dVGkF9TY6BxhKaFSFchapSrB",
  "key11": "3jz4NUzbYGQgjBRZGCDvCUMaougzokzcLCJuyBiC3NEdKFmNCgtTrX5Q6tuXHz6dxBVKdyPvYYkjv3HkBiKy5ubZ",
  "key12": "nsNSiJtKfKXb29gEKxFKcdZ7ShW7KDqnp8qjzUKjftKdtfXP5LafRgo56z8EP3shWNkh9EnXbvzb7T6cAEFBUG7",
  "key13": "3zK1jxcK4cJGEFnbyszi9TPKeTE8T35MJdwRLjZLXanswaH9Y2hqbKWoMJijaNrPzu8A7TNK5H4rPEcfNUjJL2gD",
  "key14": "WspNhxWCpsTr76Vo3TPsTo8882rMkP8apLFW1pEWrgePXkNu3KnM8YsJwux8J2EEKivn5oMFc4XJLEfmPc7cNXC",
  "key15": "JsGc1knAyA7Rev2hq27zVmNDMK2Dv7WqY6QyEE1GQjc4JDAszonobC95Th7GRwRHBtwnSdMrSxgfWRqVGxGJ4tw",
  "key16": "4xKBBa3rrbQymWJV1NvgD1KJ9p7GKGahNs6wyN1c4Lww7285VjJsX15Q6zu3Tzmk5Ez4yrRqC8P9n11Q6DCVfAAF",
  "key17": "5amLDe2gzphtybMGs19Tk98CUMsurgtYqidAMgQVax3sA4PizpURdL8ZkehWVvBYqvZpvmfs8qSNJbWuCE3U8uVR",
  "key18": "Pd55LXDRXncJpnPgYWb9HRZi2nso7YMmscDyEMijZPkDoGuATKsuox3vbgjP6ovUSJdSbAzihBm5aLS2iC9kgcq",
  "key19": "3yJDjMiZNK7wAgKYkTPKpVhGQ6G2ro2mqCwv4kCyhfRZUySCqcJ9z4xpuZTp1bJHgQSUos16NoALErixaVkVhc2K",
  "key20": "3sfsxf4Rm9Jb2r7GUvN2ZuSRhAVFhHopYRDiDYroCpNKUCMEFqYZyj5huqjP9ges8PgGBpahTfBhRNPtY1sSzNiP",
  "key21": "3eox3F6kBcEARfCBn5Ss8ATz8By9h5cfFEdqJVAcDm3icPCindcn6ubJKeRf7TjVwx3YttsQJBSAZCnmpTjeUWJJ",
  "key22": "2opu9Y8HPMhpQwNtQnQphUTD5qjY9UXDeo2x3kKptMWtc5v5422qTa8xfYthzzmCDMub5GS2L3daf4d98FNi9A11",
  "key23": "3wqM73KUkonFVYP8mc4ELhZpCVcqF2ZoeMBXWWf8k6hhsJ3rvUGjSEd3kU9gmfWzDRzVjbGJhBwkUsJM2hnV1CwM",
  "key24": "4Btw4fw46ciUqCLXMJAByrMnDKN9tzR1XULrQNJbVL2No9UiwvmnxFL4q2K42jAeQijosYYmQNLjmQbqNnBgAETA",
  "key25": "B6hcYkWxWiPowTTD2QatxF4tMqYCwX7ivjE5UDJXKwh5veK5pCY6UhWScPzzX5hXjowkaCxx1QkiKUwzn9AUqCs",
  "key26": "295TstYkxqSUub9UgrNM6cBv3HZ8yq9oPhibVg4RV4XuvwZTw7QEQRFyjkhij8LMuvFvJHSwRWrY9ZQcVWkwg36B",
  "key27": "4rMCcYgXabVaFCVXwrv3aqshFJum4J2QjoNFNfpLQe37sycicb9TfPM98AWRUAykF8vfqW7ab2mJNqaYiTAS9iar",
  "key28": "5diFfot3wN2oGH1RYyYBqv23bSYLiYSM4j8c9prqqqb3mLsCupKDzx3y961Z6Qj1EXQXoapBV9DpBTwbMNFEGhmA",
  "key29": "3r6VanYvFhRcXbwFyuxMMezEWf1QYNLBzkSJKDWV3tkPTyJMeoQ1boPGUhuXnJkTWXCac8FFX4Bm92Bqpk9GxjhS",
  "key30": "5HNq2hgM2zxUgy4HWyudTHrSCRkxwMkbbXGRta28bcp2j33xXLnj8Jhc3PvHbq7HVAt5EsD1XYEgXSLXp4XA2hK",
  "key31": "5HE6LTSrbaDqB3DBsoWJXaV3B6y4sqre7XxeFsaPxW6VEaSQDYLHHF6JTCEDM2fxNjNR5xTFsRTMc3G7ZwGUt7Cn",
  "key32": "3C4oMEEARWFnrsnTiGSHaC7Xrt9gqHameWk86kov3qjM7UQvhYGB1iSvXraZLcm5hinkvUpce8AnKHzHcbGpW5yX",
  "key33": "5jLHtDtzLsP8CbkdnxHrApvct1HPgad8SVA15hceJy7KU2o78Jbw8AxEP1GXU3PEJ8dsU4kfTgsJcpoCSita2Kyz",
  "key34": "5h75XnphpcCTxzgG8YL6pcWeRH4CgCYFjowB4TTmkBGBSUgsLQhSb5oPVfqpZ3rGitWhTUJvo1L2nxSoTsqdyd2Q",
  "key35": "4JJt9JCG2cqoevWNagdHD26qCsqqJzUHJqQJwoe2jAoChsU3puMfL3Y2pDfoHadTrg8xx56RwvmJQFyq8qMozBng",
  "key36": "41rjAMhcbQvfK6D2WgowNRVieuU9ZyjxLD2mtAAp6GXjjifmyVLG2R1UkaxkZMXDDHYWiGhhCV92UqQ2eU2eoLST",
  "key37": "59thtBN8KErBKdVbqLgyfMB5t78HJ4tBMxqLr9VeBW5Ty67deJxumvi9ueM8c57yLi4VjzxyuASH5wkK12sBLHnx",
  "key38": "3ExvtyT7jVUvfeb53DdUQPrng3dQSh5Mcb1nwrYpPtVwQqvYvmKERfHufKWyTNNPxS5DDbgfgqCGJChZ7TMfw319",
  "key39": "3gSGoEqiKdyNNo7Ya6Ef5pzbpooGmAv7Ymecj8G29G7m4k6NWPbe5SAZWHqiDqCBBh4NouVPKrUfUh4td4vPWHYx",
  "key40": "3vpky8cdp3vm5QjUmZRxLtEPynA2W4GqkSPF3D1ho19i7JbsvVDZD1Pp38pQJegPdgirUze8w8M47JS5oUAvG4nP",
  "key41": "5gTyg1whJN2XHqSWQWKo5CZNnF2fw68JJNS1cebtQc6KA5UL1HWRQvqatLfxUT9x2sDGYPrQnZ3p2SNME27xfZye",
  "key42": "3dE5UD7Y1CjjhPRTskQaV4V4VKhffgD9ko8SknTp87ixL9rmpWZCkDmnXy1Hr9FiikyMNfKhLAhVWFxkoC9eAifu"
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
