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
    "3uYkakJrMtoUdopApoWQEPjbSQ4v69Cd7XHxBxaVQ5LUttbUELdMdQybFrYMzzxxgsuA5bkiUvWKtkRzeQZkgekz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PgRgcvACiLBah17N74yqthF8HT73k9iTE21cHSua39jHfe5s4yrG9vAYbUtbzc1XTkPgsV5nuz7H5CZV8AKWopa",
  "key1": "35zT2RhnQEbReshUimYdNyi6g1RhNLFU9EvHqDmrjMDk7kkjkrQgqcn6CzhE9oi7PtuLrFMK1bSzYeMXFBfFmYC3",
  "key2": "3sBkWdd1kyvBPEsTLeKMJtF7bpYNCrGu59vArpswtCy2tj8mQCHpMjv9LRHTLgP3xKwAhzG9MHv5BvLAoZg82npd",
  "key3": "5fN7g9WHesqmeZztPNKFZzkxrYcZiMbAxCPoAHKdTzW7oqJjHxtbtD2261ztbvkMtDGiWFhkE5pR8aFDV9FeEzAN",
  "key4": "3UqdxoUPKgv1UUtTnBibj2hJzizV1euab8zt74tSku1EjnZcF5kXjYPcFWSKBhK4jufc5Y7n9ANckVWVSU9i6cHW",
  "key5": "279HBWxbRFfr1o5xTKbK9c4nYvGpVh84boM915KnXVmK4fM3Tifh7uMURkXsMevj49cByXnWSDTo162uQ9pSfBZ5",
  "key6": "5ZyaTBve6ZPXUKrjC138NyNVo6UBGbg3DyFVJsCSiPx4nHnB3EoY1d9EfN4oMxZtW8Pont5jY2WusRZcQErJGVto",
  "key7": "3ZoaKp7oPvX6KyPdw761WMFsvMYbYoaZo57YXVT42spTeC3cjtnhWBRDisz8ZRpxafbL2iDGnvVTpjxwW4sEa9pd",
  "key8": "3LPdZuxGfFN6VrPRMWCHLwBLNvxUSmmr4ghqp8bgz8zBC1pdYCtwjVmRAzgADbci82A9B4wzEo5EmV497RUMPzaG",
  "key9": "438bZjptfb8nXxjWNPhyWnAusPcyXszn21y8BenDmGKsRppcZLBY6xq2HPnJcxU1SZoz3qXf85bArWtaaH8qaY5W",
  "key10": "XhQS8gwTzGNwbZYrDPU9hCQ3aBgw2SqPJ5i1MJwNKcftub6TgHknonDgHYDGJNyFnYzhLbHeM9LhNuhxJWngXmE",
  "key11": "5QCN2Kp7sUdwUAVd1YGhfDLos2YXSF63ydPCDHhchnoWhaJGgiWf3TP9nqdKermDMTMYZmU4SWkLaHSu44L3Vgrz",
  "key12": "4bKqeSpBJFbFSRUH4cMDtX396ZJh1h1JKqUN7Qu7mxr5RYEbufb7qcprUeFTomjkdsev3BkoYHMyFFDzKqyxvZkR",
  "key13": "3jA6agiW577WtTTMEKYwiRgZagkquVWcQ4WPXnYZmfht6SqnLZW25PN7dVRDf3jAXint21yRVmRKm3uUL2TrNgxr",
  "key14": "28QdRqtYBrNQ5p1D7hdP3xB59Ce88i6SSmxABahAcdcdHQi5zdk5zugZSjewKBaxr94X2XZxDQPTkvTcNuPYLryV",
  "key15": "3rehMheT8AX987Zo3ezYjW8Q6fujkqPcGGfQuvT5djsXVNfYF1FDexXiKEDXkEKJYR6mxdGbPxGnix9duL1182ho",
  "key16": "5M8LbETMfG9SEXMzYkdhoowqbLt7UqadKqkzFBhgGUSzFYovzTZJU1yrPRsULCe7V79RwesGAZZTeWwarNYXxGL9",
  "key17": "4VodPy7aBsFcvAKJYRyFhV9tnu2NJGAbhovZheE5P2z3KU7hKQ26m4U4Xvdpatos8beafoGZKTthSWZ7za7saaiR",
  "key18": "5k822xFeDxKEA36jtDBv3qfhFbJUjxwNM5zsc8LSSojvQp6Uim9ckBtG9PZTutweaeFu8ne8awDjR5fQewJBiMK5",
  "key19": "fitSSvApx8v3arpSXLWMK3fpiZqxudPzfBWNN1BRt9crRxZLSBjwNiiJWsT5ShJNwwcNQR6JodfCpvYVbAdGVxt",
  "key20": "3pr4suMVi6M2nWSAm1V1yj394svTC9bbd1jkHUo5TB7j1o43K2bCJWe9t2zU1cozHRUqKHGEEqvhQwH5KvQ7W2Ve",
  "key21": "5oUusxLAXqhn4RyocQRGjKkbrBPJd8p4omhDH6SCr7dZEEHtHKJKLoqUjQ3hJtXprumPrjZLphLxwHuNrzqZyrkv",
  "key22": "3XHmVHoSCWnGKA51ipBCv43ArJop5MdGX2YAsmLP2cDaPwEWZtTZG7TwAPixApCxwvJNj6oRfiWaYFZjjacTrqNX",
  "key23": "2mTDxEFo6HoQaHJyLqo18ExGkpE3yKaLxRwh2tusrDYD7ZEj1ZHgywSg1Rn9dYMrwChJKPBLt7JVUTzdfUpGv2RZ",
  "key24": "MPCd2YAQWWRDxf6wcK7U9gRqmBVntYr6wvK812nPA2AZxTJH3tLy5njirRe8GDAzgP8EM25GU8pZckc9oQXqsRu",
  "key25": "WYDu9wJaSDhpGCc32ftiy6wfLh3DLrv31RHwytqBqbawZN1eCEvwvbfNzioUKo3jk2awmjLVYNjYqVbeYcADMDP",
  "key26": "F4hGieLQDoukxjvzMy4QiMKiaD2BKcQCveTotaqRNCB7xRWiJgmDbzwY92KV8dcBYnX25Sy43TaD2L5PW6Ps3xh",
  "key27": "4ziNjdeZGpyokqe2eBHHzLV83VKhZL1BGwA1DQUcWkeAGiraHrHNaLjhgpcQUKcAhzf8VWCJS7dHSVUBuLsDfW3n",
  "key28": "37ZNLUhxyzoGGgMRzDQfhQbhEjn1mpCTobGqUmMpMABaWRRiYxLCAykcMgXTNhyPwBpRPwg5eKa7fiSqzkxQbaQF",
  "key29": "nBcB9airs5tKJJGHRC11t7dv2nHtzvF3BsbcWEnS9aqB9XYjd6ADF21BKoYKG4u5i6UAU8MaDRCE1hjo3UQvRtf",
  "key30": "4DWW1amiCo5nhgz7ZKLo3ADbRYMRwBymfndsenmJ4oGGrm5j8d9qrXVG8QC7hugP11iTYChY2HDN7vUu9ef8xbeu",
  "key31": "3vfKgeN46DfQbSPx9fAsHdddyL9pu2DN4Q3XpkwhqgAkBZRcNNSsb7DM5aghw5qJV1Ad1MzigRgPHS6XXPgqkWdW",
  "key32": "36mUAr4ghJHFGvyUffJPqR3uKXcFGFQhs9s6XLDrU4Cak2jT5JFeuNcoMkaraK93WwrTZZQpciLV1m5EWmG6iwhg",
  "key33": "2X67MbYU7PpK9FKj4KmraHNQKWYdgwohLV1BT8oqX8rU6kXeLre6iigYj1a1pYCwqJEUMuELxH4aAbHyF9xrnHkK",
  "key34": "3JsdYKLcb74U3LK6meNYdR4T4nqSuKGALcLVJd3WMtAjz5S3rX8aRi9Rd4MiS4q4f2fwHkDEq4hNNZeWrRFRdarX",
  "key35": "3Cz4LsRqjJote9p4f3V3nx4mnbcy7y823m7XR7Pzydapa599QWo7GhcueRXJHQKyd3q4iLY6kdjpsHvTofyBNBbX",
  "key36": "riRLunhhGt8ww7V2CdJGw8eEvabNhV2sRbbuZpXhpWjEoacGm8FbmEZyKK8UeEhFp7mcRFtrnWJT1MkMd4bFD51",
  "key37": "4vGW9aE3vWeT9Le4D8f5ocXZokFj87qWX2uguwUPHQ7JWxtSMcn3ZqGvjBMbdRcg8j6nxztqPTNiu2bhzPKZaQ93",
  "key38": "2YbSVQ3HSEQL5mL7G1FEZsqZPYfBJbY38hGCGUviH52DZ5LCxQ6W5tEZqhwJBRtStQPRxUdukZVPvZe5X2u9pMUX",
  "key39": "2DR4DrWdbNEGFuULHiGRPESTF8baoYiVYECHXkZaquYpGrZgdzno8QKAa6VgDscaDgsZ5uBBKFsiB135BfhqeB21"
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
