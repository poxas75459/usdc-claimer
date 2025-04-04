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
    "65kBufek3gJgNeoTQz2E9KnujomS2WU7bibywM8d95H2zzUDQFgNbknTiQHyfc2U28u9Qdh8JhAnkB72JrhfFSck"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vYc877otz2anf7wGMhKiQECiqJpJHRhnkeXpXM1aeMVw9pn4VyMqVnnyXr2QUx7UY7kCgRF3xXK6xT53h6Qv7GE",
  "key1": "5QsjZK8Am9xTUFdst5JwbGPDxkGcYFvhj8fzVBNPCbT4iZQgwUmK7QfBGwcjoYUriBT7h1jvVpxgtbXUe5h3PhES",
  "key2": "5747Pgp4TzDW9YiAu3tKmu6TwtjWJ491knAD1deyaEGYRZYs9hmQgmVTyW32iZ13NxjMrfpRm4FjTicboBaqgch6",
  "key3": "3HzNUD9N97yJNcFtngxedJvp8ZgBBHMoGZdGb8qkwXtpKn4wqD2LzdZSnDnHGUz1nYE2wKRzTYNk3vQ1T5xbw3TG",
  "key4": "5pYTkkdEbDfctdZwUZwdJbrS7V1kpCDGD4Zo2hjM6fgGAj5rMqL77JKNj5CEbYKKymEF46nDSn3JBjXPaZ68umsZ",
  "key5": "2HwRn3ffVUdBjjWNRLUttjqvRJ6bxMXeVkzSDpntNkN2NqAXBGCKQ2gDyjhNv4y44p7AjJXyn8KsVLwTScf295nS",
  "key6": "GETw7A9XmU7vv5cWpXxX51ZcV3VfXkkn9cRKdQJBCGZDMrsW1ntzLh6qLX1jfba34ZjAmr653Tv1Ltb6DWmmgRa",
  "key7": "4qz1shARqQ4n3dejSxqeVXzHS51Q5Jtv5abyJKWgV9GfZ37HazAo1jFCPkF3ZedCa8EHqZDPzDJVhCeKLrk9z1xX",
  "key8": "4o1NkvWTbZviMcgBdxxzexzz217tj6pqFDzXJQWfYfKHbrKYbY3wxkJBe8Z7eMTc4MQ867bDYuhJjbKhsDoGa7JJ",
  "key9": "4WhSJEuTmDDLDELjQEvj1WAnZEFoSpFnLYvtgMUW13izvqE8xEiADftKyAqYkfMd6YSs9HD6NYGYXvZgMU8UZt1H",
  "key10": "5sXojx525tWnmE96WbiUuGYQEMpavbZJKhwhW3Zxqb1WgMpYnMGUM95Spk4mFyDtLnA3GgR5YgFgNgA44B9CSFQh",
  "key11": "3TzmD1zjhyyM71VinpX57mz6TpyuqF5FFaGuFBDj6uXGzWb19c1UsNooaqykF8vdqa6HEtui7gCKEKxQR2FYoaam",
  "key12": "f4QZeTUVezCGAu3RX8ySFQGHxreTpaCoUM8QQ2hQEdUdsc6M3AUm4GPidzqi76ugyDCZgFsExDT9933snr7t7oT",
  "key13": "2aGSkA9oeoFWe7nNi2dH1MpmE2pibY3Vz5vG2G1ijamojnB2usmmaoumMbD6fMNTWPKgJy2ikzJLtc3bU7KJmnCd",
  "key14": "67rTz4nDAhNjPX6j3xjdq4naskpn5BgVPVmdHXMWqWKu2NUnv15CvjJCBm2UKH6VLPS3UEikCvHAcBVRLJ9Zfgar",
  "key15": "4YYvC8kFWQ3jY1J7ZTQNd5hcfk33kkvTczCPnyKd16L6oDWHYMnxs466swpdaoyRkiFcDPV8EXNzmehimv1t98DW",
  "key16": "4zC8PYjyPmnR1opg5f3TyGndW5K6JQUTUmksaNJm8Snf6u57qttVZNUX1F2aYQtYdTn4X3TpgAMLmAtR3mJzxLvP",
  "key17": "3kHaPzCDLf61U9m3kqyCYZHZLLfeDNDy8Xx8eveH3VdUEJkjg88kqX6EToE5zrf99hAj2EuBRmpUVen6xmP9L2gP",
  "key18": "41zoWDSbWcTrdP7c2buhYMi4ZF3AQC72d8AXfqAeJzHxcmm2Qf2zTQYMcafjgkTAqeDF9DS5NY9y15N4WUZPm69V",
  "key19": "3U4AX9QpDtTnn8HRTGijY1WkVjH86r62F4J8h9ioa7wpbjj83Cz2ghfuTSFB15var8Fjc7hQGQwTKKEeHxBp7YN4",
  "key20": "2cpdqz6PP145ojvXeSgCCkxWzWUjsbzLykv8Q1XCoMV4iCWX18V9PVWdMtuDg23T85NBU1s3ikQk8pYkcjkKQqps",
  "key21": "41uEJLNpYJon94cYwXGJ3toubxwRSACSq38AwbmND4Vp1oS2aZ3aw1x4VfTGMv53hPL556GpzJh1Jmc7bS8imuFh",
  "key22": "3KJg269T4HgSTsJJiqCi1Jz9QuYH1Qft6bnfMnkaxL8AKkzbbmrUPZVr8r9BsYQthjncUUEJooiXbZVC2fP59uwq",
  "key23": "2xXuQPcpdNzZrSjFPPhWTdVEpMiJ6wg5L2QbveEfDyCmd1wAVJs6aA8FPwjjd77dYw6mBA6UUttZR5nS795F5URm",
  "key24": "54qUKq9eQeEbFBsYBCARNz3eALZ1Abkzc4fr9SaXenVPCCLK7bAQUS9PA5quv8geN2CDeED6FemXiymKJF1Zce3E",
  "key25": "2XTXzJwoZvtwV6mcqDUFWUFaT61Qwq4ca8WVvkje1qWnGDu8bd6D23ZM2sXkqxC5UE7P1A2ZJUiuPSnnpL37W6VA",
  "key26": "4dBkSG6u2kXL6LTn9kwt5dXXKaJcC9SHuAu2LnEiqNupntm9yKBXzmS3DCbfTq82paw8Myuyk1NW8C38fwjHHMWU",
  "key27": "4TVvCMxXCHvP9S2uWgNCP5CQVRyqhEEe4mcg6qiwi3i7ReDbFTKMRb7FtiHCxCddmF8cmF3kkckgrhGHpog4CggW",
  "key28": "2antnBiY571w7G9zwb1xABqBziTyzcuNJw5XSVWAs7Nxs8RwHPuVgB5vZpB9mdvAi8T3zLfEsKL2gu8Yg8ArhpDm",
  "key29": "25buJfSreUS74xKaQHvEFiV17rFGBksnaFf4beBD49SQSfPRQ4iZx1uQz1pBy6sVvthYw5MhhfADaQmgsQRMt6hY",
  "key30": "5qgjv61yERxNEhGWhCu953vqro3nQpffxWUTYez5vUEK8AYD4hTpkUwjjh6ojhN3FsDSeAc6N5rdxHFNAsceg71d",
  "key31": "2ZfkUgcwc7A8GpCEQaax1RscMh5sqq2FrYJonWg4hEisy6FaHZGmYLD8PoX7X5qZmCwdpGzcr9ya6ijtK2VFEaFX",
  "key32": "4PfNsGRaPj3z8iLxDKxG7PYxuCrBkgMPzng8MAGV1VqMv2KMnz5KUnkpH6agiKWtDNmYJdBWCzS7TgeK9f47SNa8",
  "key33": "5FvUTmA2q623XiMfUwbqDQmTiedsAwbQ5HJJhLkP7uwXN1XDv8qSiAs7ndwTRCH84cPsdAkPuRP65kCCyLovukkP",
  "key34": "HL1k3qCdvb3s7EoPiPgpbVFQhE9bgp6FR3eHgJhcvyTVj46HSMWUxaoEywiZ4ZtafiMuvjPmCQBGJgBy4t5bqNs",
  "key35": "24VN9Q6DyPD72dBJbLwnvMWWc31oyTXf3ieno3DrjwzPXrKZSWUKmXbqEDTTjz4bUXT6W2ydJXgp8ZZirRReX5XB",
  "key36": "75VphdPdyauKsjVDVwaz4vURokCPSJqn3PUP7cW9iN3iG7WA7AY8JD8wkCXpNAoq6BLUcJEM4zhJLYwKTq3kYrD",
  "key37": "VZo6vT6FZJvbFr395dZrYsYKXZrhugzEoUM1S8Duqkpcao2ri7EJUrzG1yBAX6HyYVVx3oUMdVbhNoGGQpKXc1a",
  "key38": "4XByiBL326UxFq7hTsazvWM83EjxwRkAE7haoKZCuikwWpDn8LGtoz91zPnZgmHPMs3VGUD217LHTFKksr9GanGS",
  "key39": "YwQfh2suotqvUD94ETGFwnKEc9sHC6NYy1HxW79vm7dBS6u7gqv5RLkmkC6zo1QZ1S4RNBF9eMQkHoaXXxNMHUh",
  "key40": "27LWtSZA7FoMoWeHppgxzXa9yer6xKFmkj8UneXmgtmCh9WeW6CBNjqwHngvA1HryKBV3Hy6rMgUyC6hKL3zKHMg"
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
