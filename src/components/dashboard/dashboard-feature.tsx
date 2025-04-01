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
    "49QwkusXzGcUcnDoCXzEUgZYczf3UfinJ26QY5ET6jHcciCZ2cBvmErDzfhrdEZk2nyV2xgPSytu4c5tVZd4jjbj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V4x39adJigkZVbQ2Phg7joe6hmpUDyviJfJEu5VYRUnEKPDRHzpZkhPvkXarjdNHpeyo3wu6brEpFUVS25nwkT5",
  "key1": "59G9om8cDYg51EutekL2e3qzgDheDoAZ8s9r26PCMEHJYUcfXbhCG9uUQi7pYQnRbXs4YDNFMfEj8f19JzbwxmrN",
  "key2": "2RZCZxbmfb3w1AyJ71zFeroBXSLcMDo3S41PG5rUaef9Mnr11nYYDGprqxhTARSvVLx3zTb84Rn2vzQd4L9JSEgj",
  "key3": "2dJk4YHCC1ByCnJCNtGDusY11VEXoxVEySjXbuYFNjCqNyvJ78VpshfAZRzgLRcuJdrVvF2e782Sji97HdeAY4qf",
  "key4": "5t8poP9M99RPmNzPr2s9uKTLxNG5bJNvfpeHzGdRsTf6jVPnccjY7K77XddmAxVE3epMqFGVg3U3SekvLaqQ3HKz",
  "key5": "a6ichHCobYWjMwNjS8FQUH3LhYVzNjoEz9zZaudnbok8kvnLtvjYpynf9pb3mT2EzBZYKWU78JQEzFJFdpCxxY7",
  "key6": "4eLL7RDbp8W3rS7a2QRiVVJuzf2X95G26bFPewD4VWs9JkLUbV7SQwQBu524xmDz2Y16rEaEh6TJXsBgkJYMoytC",
  "key7": "46o9ajjpHnMPCxNnJmbwcKuak2ZE8guXtuU5Tvh27e9zjKDynYAZydjLrHsFbVMM8WaiaSExmkk8tnjMXtU74jm6",
  "key8": "3Zj5PQLuvWZBgmsvdDEwsr5AD8mSCZunuE7FsQzqAaHDKteF4CT7oGY1su33HR4fG7UepeRDCeQR2iK1VXQbiCgq",
  "key9": "5CtvkYBeMAF4ZPcqTPEQywiXnt3fo3g2wZcx6Auoioc6Xi33fuJLCofgXAY7WdSDgR2k1DknWDf24QGFiagjbcSg",
  "key10": "5F6KGxiVefEnX2mxW9MQi84EMVE63nFd4qBPhPCvjVYcn7d7Ei7csJPqwSKQL7WGdNW4oyPaJSLgdHSfv7v54hN3",
  "key11": "3nBCgyLbw3BMqsw9Bzg4nhD4F4o17eXpHVVpASMdi2foVyXerwXViSfataMJwi1r8zLdAW5GQKKmqjUqvWmoWcDf",
  "key12": "2nk3sAEqxRenzfbnQ2rEStZciPqHjP3WSNxLuF3UgTzCVzZFjWRNJivYB5Ba4K8BKoWa8Ao6VSjkSaT2U6yvxyMz",
  "key13": "M5L6EK3UBBrN1vffe5qFgeZqT8F51a8T54LRKbQF8uRPKp1SvpyaT1V8WUJQU25iL532MMprZApbRWrwQjRogWD",
  "key14": "3phMMW6KeR5YwTHaMJaNJx3E1dNHdxwN2F72S84gHTXqoe776B4QkduciteHQGBZs4dxpQWEL8Y9wtmECbajsMQa",
  "key15": "3TrmHjgPt2kUxSbSndrrGL5v91rRDVGCQDBgTgkKjqjkK6nBSSTZZpPGJ6mSRSDQ86VDJ8ikBS8UghpNDPo2oKB8",
  "key16": "2Aw4b7AqceWjj84wn74ZzRpigew9KGRT8PXoQXcN5kZgmTYcwTKkzotXBFQu4eU3HZFGeaiMniN6MYZQkDVCZJrS",
  "key17": "2EuXHW3evGGaeiSBMQX5PjXimanV5PkCNDqMC84dc1zVg6PFqk1cwwhCy1nj6B14oKcEpKzBM9KFbTSgW7EGC4jv",
  "key18": "3YLji9K5ZryjZpy5s5u6HyQPMiBrnHdrytAHFtNv5uTgQbG7QghkckMxBMqoQcKnRkNcp8X5rkEM1TCuHFm8SWvr",
  "key19": "52MZ6y2SPdSXT8EsWWQPovZhCm58jVSsVJCLZkfA7HHiYkTHndgZ7fQ5KZ4fk6smQxjfP3saqtCYg5TKJrmWkCR9",
  "key20": "32QmEfVxbsmxEPDqyr2Ku2ZmBUoMMHnaT2x1uZzTXumTdR1wj5vL3hijwVZPnG9PQWPhSTh6NfemEExihFk6DK6G",
  "key21": "3tKuwozEgHa7WMyKjR1BTVAR4bcitR9NdLjoCSEo79LY1BdoqEkDqL1cUZEEzabDiEi5vRJDF1cAixGQRKAFTA8o",
  "key22": "5HUCuNi5bRF5btPZq2CQ3E8bpuJHxKFCxvF1wu3rcpQRYjVdUNxREFDzXStWRNnAeHu2EQukLXRmHzHFJzN2RCEK",
  "key23": "44dWFZPgBkmf5BTTHzBUKcYRr33dzTgvGWaYbwKXbSybR3xwoKwqLyAcUtyUtHmZpJb4qsmAw6WQDHCgDBpVCSkg",
  "key24": "ffw6h3wtoJnkPhqree2dWDNyaTDrRPYhcZpFpfYHKqWtduyWh7XMNW4HAE2T6H63pBp7UHgMrfYWDbd4PT6oibv",
  "key25": "sjj5S7oQPMGD8Use3atiEySxRxHZvgXa1VGorNrwJoiJKD91EHp99T7edXr81sKHaux1DjvWzwuJNjfpkvKoKm8",
  "key26": "3TE2Z6BBTn6haGN87LtTzUZrd7FqJo3m5g437X6CCKzcPLZb3SWrimtC7myndoYZEhNFCv8gNYLjFo7fFfha5ZcH",
  "key27": "3ckZG9XwZBrnC7SdaoNbq4xXJSxY21GyqpDLPWcgY5Prqr8B3BqXeieziZpqkALrt9yq6YZiRWqTDHrpNh54fvDZ",
  "key28": "63XvfvnjcULwcdebWn6RFEiCKqmhVVbXJFD9wmnXrsog1dFm5HmGKPjGDwvTzJu8CzvsjfKCPtuixzCvwXsoL7ar",
  "key29": "291zHJpTr12c7p4Ptpc1jrr1aNsWDJJL5uRdXg81CtGtZycXVszdpfYingKR1ssdqTwBBgiL7zXphwGkGiZfrbHV",
  "key30": "rocEhjDeEty36iForwEHpznmWmV6Hrinb4sYCYKiAuefX9jMNugQCBcuNYfJBEVmoiu1KVu6crBqV4DJZTukvJ9",
  "key31": "5X9PhzDpC65pGu941zKMunhEvwcchRBKhTY4KponYCe1GyBWxBr4tiSsCw6rhaxpFPMrx1gvPoLooySPM7DVUHkT",
  "key32": "5P2inTjYgJJo5UvzAYwXa47JiJZXr7DnNwzrA6M1eqQ3DpN4edu7eWnMHMWxoKccsrzQZzTUgwYtZiRQsF8Lcpbp",
  "key33": "2ZwemkrSPmwvgjz4fNTtRCBrgr46WRB5Kst2VuPb9XNkruPFy3UuKB38XjSa7g8PFJhi3v8yY2rtftUYHZXtDAoM",
  "key34": "5cBXqDcRCfbjyepGbzVZnW4toXSNLmZ2ZDGVBsH46aKtB15G2wqpPW1EhvH5TBfutju5oRaxjn8kXxnmEX5dhDq5",
  "key35": "EuKdFY1V5HXiDBBm2XXN4aW5SxRPoXKZSaiE1zmqNBN5P1iTKboVwL2wicW9M55yCRGwkJXTSaZ2PzWbCGYDaE8",
  "key36": "2CfqD9UvBX7WL3wUYED67AEA6FXDg6BWsYHCDmcEXiR6TxRFGB7nJnqe7qLvaFUcHz1T5vCgjqydqm3z26BDkt8o",
  "key37": "35FWc2GsJjPq9XY5AVAQG7zUd4PXM4qtEbzQbMgNzYXKw2HzGNVRdjvFfQT27t9ZMo6LAwdwhCFa91Ab1SHMvH54",
  "key38": "4cAkjt4hmexXjT7wpMtDDAzu85haX2UqXvMgFUuNXYMoygLW4Ra7tAbUXXCG3EMt46zc9RetW5NX7KjrKut1RVvD",
  "key39": "PEjmk1WhbACpg3mWwRBWPJDi9VEieF12qjSRUmHbQc8vg1Qym72eJ1KKQWPgp1Gm4TFgv8GEACFrHipmZAP6LJN",
  "key40": "2Wp8UrtitT3o16JL7FYBzQGha5KF3H4ymSgvpoFPa8aEZFha2rY5oyWLMfVbRrZS3NbqJFdzGiFkc5o3eVi9gThw",
  "key41": "2RNtHCmSZgpRvy8VVv67KSUfii9rixH638Cc5CMQeJHHcDbt621SmSdcXthWy5v9HGj2TwTRzF83ft9qk2vrTtNF",
  "key42": "4fEW2jZWGRUvP3tpNZjUTeCQb8Dnrbr3PFK9XWviupad2WFrRjU3GGahSsPxSzSvVHiLKu5q71UKv8B368R31ZXb",
  "key43": "5VqsZLzars9kymUZvP18mG3S7Bjb7avZTYsqvQKJcQ5TWmnzecNZPVvR4X3H9M9v8tW8RnZUjCeRnsNpxETMvW1K",
  "key44": "2xWLDUZzmVS7JbW1n911rGrTL9sFH6AGWZujTx8aKPG3RtZsFmSJLSkqQJ1PQCqeMhGVFwQoVnhvWRHdY28w92b"
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
