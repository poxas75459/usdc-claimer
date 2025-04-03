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
    "5wd5UJBrCHc9WYkN1aYiFUzAwN5XmMaoFfnXEzFuzJdEmFkyD9dUWStTCSx6ySqBLMDPLDnPJKyuDhoycMtiL1xj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eK6CxXnitM51joxRmM36jMFAwLNXv1hGmeQXu8oVDHEzJs9SvmKsWpbj3FEhkys1RPfirRtx5WiyEN7iHPXeUzq",
  "key1": "2c1uLtoEKDu1K4Urd7H5gyRkx1jQEen856S56WECMGWkpRDThtLQjKYF91TaQT4DNFrSx3pmiGidDMYKYKRXQwZe",
  "key2": "5k5FC3urFihTpcN3mB3kCCevYaQ6JsCExA1fiGFMqo1m1GDzLs26cxajQh91nhQViTUF4PWoHvgeezy2uhBTW2Pe",
  "key3": "48XbDGLmF1t5PCYBVCUpBXzZNQxDAxgvCKVHuqFfZKw3kCMZwmezdUBLUhsbo9NcgfY1L8mHbKWFYUEFQg77JnRV",
  "key4": "4t7jA7ZtT6ZqU2RT2knedbFry9EUPtuNofTVDzpiyzfn9yM5VMCJwpyXjgg7PoTDJhVKncJZheD8oK9S7xW3XSQx",
  "key5": "4DBocJh7Q9nUy8LSZaTdt6nqhvXE5zWRhXpEv5WoXcxFp8ZzukXXwES8UtbhahMswVGd536npqChV5DSKDx1wG8s",
  "key6": "3FHAzUJEQ8k4ZjNUf2iL3uA8vJqQXHU4B8gafNcEg1iUfC3Zxj3Z6bYToexWJzqBWrqyjbNdRFVHfSzRs26N8PSz",
  "key7": "2tD1NdpKix1JjUToWFuUqmm6RU8tK1SDK3kCusicwXk2HSLRBDkAWuP18xvGDmPJkwwggM8nLgpAertjnUPpe67y",
  "key8": "5qUpBM6LF6WwRBG14tz6pEfVgEXYgExYqaN2GCkZDeRDeh8rWATcPXSXu6P6yXHewD5qTDbs9sRB64F4iAYHRs38",
  "key9": "3RqxJssXBXioi2Rq3NgYGvk253T75ieMLfwnEq4mqbR4zeWnw4Krbk4AnJBQZfDLMC6Y8ToL5FqXCrV7Evqq8rb4",
  "key10": "hMoN6CQUGmy455BkcJHYBQhe2bFYz1HaRpiw1XGs9mo14EMSEgYTiVeCEEnGrXs5tyvrRx8EhmqSKF1iW6vG8q2",
  "key11": "4ztcQbFqbXRCdsQiNBvTaZyEYWKhzjBuYz9u1D44LayiYJCB939Am3RZB3rgRLzCPhJB5x81u5z5TDVoEBw9izo5",
  "key12": "38cRpTk4ivdwfkSLSCgbSHqNy9TqfMWhjBcFkYL2k5t4g9uzAJU6XTKguattYpai3WHA6BATMLX43vupoqtR8UjS",
  "key13": "417UKZxMHjbx6Ja83e9nUm6FV3XRNpBYRj4hwbXfKqs2Jv76JPnxm5AGUcUVjFyJ6vGuntvkKgPVM4zyLNo6B7Kt",
  "key14": "5wPLvnHGkzfaCGDrZ3JM7J1HmTEzGy2paUWsyBqQ7SU3DXMkbMpBCqsZUts2xDFs3zz5usZgKiqACfdN9wYVnMJR",
  "key15": "4nXDPFR5rdHbyHUtmvTPN29BjURFqLF3R7C2e3PYocnTKBhz3z73675Ri8vm91S33dKDQd3W2nU3Fu4UijS8Pfi3",
  "key16": "2coTk4Nr2kCWQsriec6TweGhadNKuvnArhvmA2qV6VEHF9Upus2dYTaPZo8r2kJSaFJt2vGMgNhYcDYZfJPx54gx",
  "key17": "52SGwx3NpvpiGD4iSQexdfef7xdvtGsi4FtohVcYf8P96ogRmx9ujXd2RawXMY24daPAFinXMUcvf5xxNQuUaosq",
  "key18": "67hjCfvrkuM8uACpGD7zeMwxRSCTj1FBNuuf2UUmXAuggg47qs2LRJDnjurMd376UJoGbRBBmpKNWvZ4gbPpyfbP",
  "key19": "5DnQtsT6vUDr3nBWKwwhxS41uWUsAPixc5gvxKJWEi2G289UEYRoSWDhd3qUdRjsVxic5yHL8cGTawzf7eYKDbkC",
  "key20": "6sS3BKNttP1V6Cy6tPJ53NT7JDbchB9CiN8F9XMh6ugqpPZGQPHbpXo6qCgn36pKhJkND22DiKFW5D9xMNSFTcx",
  "key21": "2DGEpCRAeHtfg4hxkqWayHeBBQNu2eLUssQTtfA3r9VMi6CATP1xpvmUEuAqRa1mUzF85u5sMm2UfHBmqJAJSuZ3",
  "key22": "3hM5oHuh9xxrtPhYxHMfrWWgMEZftotSXDaoo3CCWJVfcFwSqJJcLBRep4oK896vLQYWS8tJdScSCAbZ3owCPhPG",
  "key23": "4M3RTnnpXmYYTQGinx3b6QpJLhihqZPp1NR1ajMn64mUUUXyz1xfjotyUYTtqMo329Ehsfmn43BD8NHbUvnGWhXm",
  "key24": "2TiPmBUjEjUq9gwJCmvo7P15mnA4UA8vDnuQt2rVH7SbddKmnxM3nvLyLUN4reF2RQVj9fFfwLs6LEqWS3s9kjBm",
  "key25": "2JGnpGDiboABjpqUPmMXbtGPg9YiSNCY9Gne3WKxRKwdWuFWMZbPUFnEh6vfxwYVFeSTCQzfve3RrEBaP4mN67TS",
  "key26": "23Yz9x3oCk7nKrWGKxV8HyHBmjzxCtmCDR8z13grXFWRoT3WpSQeuRBkFLDijwyJUb6F8Tya8EshFD3Te7sdMf6C",
  "key27": "3onXBbgwDsDzEWPPfJER1w13be97nbtNu7o5dYFSzJGec5arPHmyHUKvZPrFWncqwTD2JMo2crti67MhGf6Njg3L",
  "key28": "2VteNSYGngCh6XeUMZ6aq959UoaTiJk1bdG3aexLxqDoWTPNt7FJbKvmgnxycwXWgHdH8idRpSf4oHiZSYiTkjrF",
  "key29": "4wqz6UhUhsH5LPzByBj7qXMvkdtukq7gXujLKZgHyc7BzKMgyS5R6WU852jepwkXrnvqHscfuQNdpaENhqphSBgB",
  "key30": "4rAVXM3fBu9ajSv8cgpYiDkuk4tdhdTcG2pP7MFTtQmpEEZsxNVVQTrvK6c8FdgsAyNnxaByXyKNzciygZKJWJdP",
  "key31": "GtiQgRCYddgRp4pt4BYvKMSMJuy961S3Rf1Muou4x7ghnXZ8RupKGQwh7qjvYpcyDEnsMLKZmnazhJpf8XGSfe1",
  "key32": "5pdsSWA6twyg4kDQw9ze4c78qdzfyXvQzFyegERVUz5nHTD19simaQGSypFE2DDwt6Xnb3vB2w7NaCkykAtYdQUL",
  "key33": "2t2BxPcwqRHK2WkoLEqpLHky6c8jXi9bLLuWYzqMXciXCx7PVVTAwHJo9YkacLLNUrLUeeM4PC48zGWz8YeCGPc",
  "key34": "5eSk5MsZ95zfRdUUmYvCgYVukxerpfqkpdoFyy4K3FXCUqSk9JhDkH4hvrNwdtaaPju3Gduf1zmqpS3DJLuBfn7g",
  "key35": "5uvcmyTb9UU8kmgZ2vdskvrsy6naGX87UUGEXMVdZNVQUrCjbw1DeykbK9rPpWtj5s3KUCJKsbqRdtapUBEETbms",
  "key36": "YGi5oiBacTSgiHG9FYizhQZhSPmQ85dHjN9TgbwP6Spr13JjC9xR5R1XYw6oHFw3tNJYoe2BGz9x9SbY6HNcxyU",
  "key37": "nLiU9QTMpYvrFryo58wrCUgND8FXQF1wfPCYZDYm5jfG5yoMKYR45Z89553NbMtcDHzQRAQPUtkPL68L3hoE2tm",
  "key38": "3p179fLXM8DSL8GgsnkZwCmRjPSEfNgVT5FMv7AMAJrtRjfd668F3LggXpy4MFspSLstmAyFaN1QMxGvrSckBLhV",
  "key39": "261AjiJmMRDkwH5DLB3GdDQT1ZXPK3VNREQ6TGKUH33L7pNW1znKYPagX6frKLFHCxCkqWRHPZQCvbBFhnJdXSSn",
  "key40": "2kSqDbukMAk3KLcg2BAQvpRsmZwTB4sE7zYE4UHktBaXE2my4cQp9jfeB3Lk23idbV3oGkyiZeLNjK41gtQz1BJe",
  "key41": "4y5mkaMmT67d172mhY9BqF3rLdqXSgbKvA1QKFxfsTtJo9Q1z2mXdNuMxQKctmqVcJM6f1hip2K4DduUf3ZmgdAq",
  "key42": "5pK2N1SzR8qEgqFivQat3Y9exwjPta9HVW51LcitT1TLhtdLnz8CG2Pg5aZdZKV87EVmk132ZkJt4SS6a8zxUjg2",
  "key43": "VRL1KE5wdwjR5r2VKNcnRffvjkb517MtQB7PZoAiniTBEbSCX7tNFCKtxbpFGxk7iANCPgt9zgsLKcgtowrNZek"
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
