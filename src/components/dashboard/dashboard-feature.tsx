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
    "4X1qKb8Eu2VYJMg3n7k6eDz9yHri3YRLbHQNf9eYZQHS9Drt2JoBTuRe973dotpow4y3hZ7cnVc3ZRs3KNe7Lbhj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jJbc5n1n5jiNEHvE3YWsDB6wSFYeTDkyk4cngTcQh8q9Y43T6o77mFXHUKM5PNBhCc5jjFa4L2hnH2tQ38L5Zxi",
  "key1": "qea8XMxWXiuxuQV8UyC91sVSrqLWHcie4oYN9oPe4LfJYFvWkx16fdDVQVGcSy6XQxVHKNPELzkEDwaZ8t7aMLw",
  "key2": "4hQaKKyJZfzhAnsW5pWj6a7wFfAG7FVJRRycPpSKD3vUqHCASDeKFvx5ffDRagYMUMVrtQk6gfFAoY4dLNig8Noo",
  "key3": "2y5u8kMDEfRj5kkL3eyrV7acLdNVv7ocbZNtmdQETKLyotxGnvpva5aBmvBFJ8ifWRps5nYxkWpnExrS3XsTBMAH",
  "key4": "5W5YM5N9KjM8i9s67fB3FM38j5R31SyU3G2DTukRLwvBwaXKPmthvN4fB6KE2cXVc47ATAv372z8GecsSPoJYnWV",
  "key5": "3R3o3wbYdJ1Kq2BW473yUuhxqyx7L417CSQB56E1WG9xJNgRz8S7QEmEf2mqG87KdGnXYyrMsscaAnFoYbJp8f47",
  "key6": "2Y9HszUnUXq4nRQmU4BJ2KFSjBn4hpLZyqBhekwAmXefA6jn7n6FGdjzPW8nZhJbPzpj1UkgzfcQMkhfoCFGPJwi",
  "key7": "vjtDRHTZ2obgSdShcYWCspnAawd4D5L7C4KvUXZcXEDQ8XzrH52NKeNcUoJ48yV6ioqWRzF5tgspLWFZPdiM8ob",
  "key8": "4D8cuEtWYUUv8yG1dMDC7JfWWC1fNZ9caqh4ANbWigKcuLnG1UqJpkHqnCRTM7HSMxipU2TmZfLb2En6pE5XRSaa",
  "key9": "5HibNCn8oVrRkPfAzUbr4rfRYwDJox8zxgf83huBAFTuMgy2AjYguJ3z6xrSd5oyueJQdzo5jjQ1tFRLHzruK5xz",
  "key10": "2XA3ztUPghHNZfR2SSQDJWsykW4MVHmPekz2hwvRAJezy5gNYTrEsxR7PbAJovoamFzKyFL74ndNDWbsUUgqHXVj",
  "key11": "52dRouQjoyz6syC4UGpWE7g9fc2PgSFmWw8MdzBrJvZwWfi7zu2QcbVYPCYDzFBBLAaPUU9tFBwEccF35B9hUm6u",
  "key12": "5KarPWfm4FbuRWHZt5dYmT4gd5uE5frPHuefBSphH7mkGjXy9uHhr7osHA7QoFpMZ6r7ZCxm8kcqw7NkpgWzjRN2",
  "key13": "2NRmUUAUFbhtTaKXJyGU6JNpNe7NeV5gTzKdtKr6V6CVc7dZkT8FCegJByYmbV7jbL6C6iBBw1txkLokZWvFbTz7",
  "key14": "3rJtCE4rwoP5nKBGySd6jNFhVZnfyKCxrr6EM8X42VMHFhbNLwCcFiQz99ZNBYhXr2GWo3Reb5nWfkhy7KbdTXe9",
  "key15": "3kZpbkYtx6i2WYtGCiFhiCgLYAPofDbjf8hVua7MiixQmCptjoaNwixfwvVohbUMzprFa91fmXy9jiexDoz1YdbD",
  "key16": "2cAtisjsXtzm9VMnTScQ7ENv9DQ3cmXJPt9DFhbH1vuHtVDAeGi2aX1XDDDUAg47NEgnev4VWfbXwqCvPGK6iUAa",
  "key17": "kTRto9dfGNYauxP9sHqGF5QkbfWUwx8dwPnscCAQVvoDSkEfNE1hDYLYCnWQMK2gDLkQ93GppUfVPjUe4Es2J2y",
  "key18": "5rpj9f7XH7HB5i2teNhWS6mpdvSdKM8N4CYqPVbcY2ZSXngmn1ySAJKLyJuCBHZxQognb5px4uuVCkfASZjTctEU",
  "key19": "3GNgeugcJrzLwjFXp3vQ6LuJ5REaetMdu1oqjq6s6rVD2nGpdz55wLhnqXktUGe86fMuRVmHoogS7iHv5Nb5zwfh",
  "key20": "63JcfsUXnTPWh2e8XWcMJoJw26pTjWMqswaXbAgcgVgf8j4rzYZ3YjPxYcDNJDrRv3hLLzQtM5LW1pVJCESwNir3",
  "key21": "4CWuzPmhaYQjGE8T11TtQqJm4XJEzjLNtXcfDUVJJbwwhMApMy8ovZCiDFdK3WhBriNi65KGmsKq8bYiwtmfNFGg",
  "key22": "4cLhBTkywX8JW64MXMw2TrViaaXQh7gvG8GNk34poH91KEdtXb9GDSUyWfknxsJ6mo55Eps7ksWsQLLRmk7MSpLD",
  "key23": "3jazqF9yWENbr4eoQz5VUBmiXaSxnjV9GQSq95DW71Pnba2S3HAXRWYAryWKZwVEXfFfQgDoBZKbZAbNHhwqNEdp",
  "key24": "4rZjkM6JALPYUp3vKKACJvK8BNd3qXX6m62qmHcvCSXnaTTSEQXqNKvZgPgqZofuWxekwfzZtgVAeErHfN5zHRqH",
  "key25": "4ohdkwNoTS1x78ELkvEKWFTVFbvyY3m2Xh6wVsJtSHr2ejY2iFpmRpLkC2ai1Me9ZYbD2P8vcQxZKKaBJFh83KHR",
  "key26": "3aAacw2xtmwZkVZ97qbVfTd9gVHwF78PyeFdkP8wjF62Fjb4WLtemqupmENd88zPBFp23KjhXWuWUDKxPgFqdKMt",
  "key27": "2auFYUJxxKjwA1kAUoerpUaZ8KS9NyEDqQ9MoK7PVs5tid3wkse8SjnG4SrCnP3pbsfYnCLvgnhqPDMuZVKyv93Y",
  "key28": "4ReijwX1bkQySH2KoeNADVzcd1yTftm15ZxSxQjTNV5LpA78vVidEMyuxgCCbvXEazUnr1futfgfP9u1WhSy21Nt",
  "key29": "5DmdJxS9TpVZYP348ZTU5bDejRv9ChTN97cjrpk1Sxuhdsbqnmn2cZ8PPdkQnq161EUzVZSpMunEqoX3v54Bq1Dy",
  "key30": "4pWBdx4RBL4kHUK2VcY6DBH9dfzCn3gMPoKUWRhK5ZkfGpzTKDMFrj8obioDDABkzGqVUG2pDmNxdKNBYm1NZb6P",
  "key31": "3A7duD2Tt7NHX8xBg96E85UXx1BqfTyGPECYbzGdFwKg9qAWAiTSMW6aWnUsoHxpk41LSxjC578D3cGP8GzEgPHe",
  "key32": "3yn4T9v8EMjZi495sMXsUfsSvAj9DJbSExPsmGYQghUb3DcaFwY34deYLtJ8VXZshUAHSecNRbZmwi27ZNezBMcq",
  "key33": "5wbCjntLc4ryBYGm6pnuCLKJGpQ1jy5vvgtLgk2MjEoJZLWn2KtzpktcfBzoDh6Yu1Dzk8F5ZJTVrkRJKHYUd755",
  "key34": "5r9EeqyU8q59TrezxSR4wmkeudUVN9PkKBRnxKXENuGpoLUyjinQD85h6vAT3rzvfdfREXZrYsiSgqYXeToohhXA",
  "key35": "Vt3SUKWfTvohrvVrUkWs7G8FHhB9rdNc1GwMmvRHGGUS2FTuQKbQDUAhTuNDRqCR2w2Ufpzz3iW286ZrA79iyb1",
  "key36": "4uMyGNXEar8HTUF3vgC67KYbTSJ3oHX1vNWditUufngHKwU72dmyYd2hJKUwJ8WeAfNejpRCQ1mXTRaporaRbJfd",
  "key37": "5yKEk7cHa86hXvyLfQfnDBH44YLUcqRJqoWiEHRkcrjmjmhK4eknWjAJTFLbMTkhmDAqEmFmGbiurXEoboUKJCye",
  "key38": "2xtPv5vzRjQLaf1xMFwaMWVTVPmKNSf3jLuBjQMgM32rryHXxBcqubQUhfNm4dLPXoGaPiSFtKWZy9jWrCvPwjE8",
  "key39": "wzP15Aj3paUUrYnXXK6DsbdWBVMADn8dk7na9Zoc3QLJkcnfEfPEDvSuNGjsJwdL7TD4JEZzxrGXprHK2ZZkiS5",
  "key40": "ts7oob9LK4fXCNpCWAkJkGYkBPCdEUjz3iJMYuN5wvw8eqVbWD55XtKpS9bqpodKXhvhLvZNBLtJBzkFpT2ZLwW",
  "key41": "2JUG35hw2hDcsAbk3b8qQjz6VDJhZ9nNRQsRC5bMD6DxNeCenpZSECHBqiXNA4KLSdKRnJ92Z5GntUUVcGZZuGA2",
  "key42": "5zwWxvZ8y1kcV2hBLNZP74p36PEDeu5Rg5NYJZFHHdLxmt6Jfu5baviuVy8dHF1e4YfgX4DN5XHfftFaMLVfBXc3",
  "key43": "5M7GiLqNWuztcmDZsRkm7yvGBzavLktM5WM5yWT7bseiWRtjVmFRQ1cYF6AHTmYvf8He2kk1bMrEYQwz9FH2CTdN",
  "key44": "5oDMQgyXj8ppqS6LoYfz5ZNei927fyGkfJ29bD6bfTWiSQzqzH3LzbsSM3zg56TjDcJy8KVert1dAt1vFdJfN2Wi",
  "key45": "2hB6zNAuPuBx8JvDea5syiFuD3wM3EWVYvvagH8ZxN6VDxEiVNfrqgZ8TVhTSjoPw8fb4uwyh1pcsmV1X2UAe77G",
  "key46": "5VHPSE4Y9vZ39VLbaEcGgNn4LZbficn2L5cZN2RK6DZ4xBLRGpzyotMmT7rhRcHRiWNPck3b8tzWgiptq8HNrAik",
  "key47": "3ufZsHJnWYgLzmXw47EiNbjVuifqC9jVsc7qdBhAZvQHQiD83rj3pDxs5xBxqLZ4RgJ7amnYAkRXqSjDt1ptRYgX",
  "key48": "27MM6m7eG4kHUXzo8YfZ3bFkBBYW4g17mqXv5Wr9HJ7YyvdGXHuLbRhdTH2cW5WFBRqBGQ6dAXvUDTgK6WfdQRxP",
  "key49": "2nuFG6kMFRzX1VewoovT6Y8i3ib21GTBeHmAdrncuPojVm5tEYENraZnkBDSvUK6XXyiFv2FpjZupJbyd1TpzgM"
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
