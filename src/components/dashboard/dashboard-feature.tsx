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
    "3GETVGhxgxzhjmXru3JgBe7eNNLHNAdHMnoM5KmLUBeMNRGhyqmPEXYFvDTJBoG4t9vpsSrYHNZtw9Uaz2Rj5xV7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NKcQ8yMSQZsMX8yBAK1FmBDC7UEEE5nhmb9M3RNxmytGWzSbiZ24vJYr4Lz9irS76wypNezNetGApSo4qPyDvU3",
  "key1": "2DkJQrq2gtpC7Gv95iKmFiF7L1WJMPZt1ZBujZvnaNXfBD7TBuuTGNF17Pdz9bvv4xHwWzsbm4uHQYJPjnpqENjz",
  "key2": "3iL67BaSFHZogRcwzHQCFBvJBJpGP8KhgghZdkuurp5asSPrRMJd1vQpaDAL1h5ZZsEnQJL5G2KH1x1ZCYDwCkWC",
  "key3": "2SaXwSLJefaephHxx7B89ogvRSkqAEkDFVkc3JyP5RtsBxVeGEfnt4Ru6i9djLM9LmXEpQHsdZpw11K1jZGLfUCX",
  "key4": "28eN8Dv2jTwnLoBaBC4HBLXDCysh74bEyE5ZF1vtZTis2TqumEMmZdJ8PQoMau56MP8PMGBoJTeJ5B5pqzzX7WTT",
  "key5": "5WFzgzVX4HpugcUYvFTAFNPwNSBuL2NeBFFGwe764NB3Lbdu3y8s7sZXDMnA8kfEzEmVem41QXJtPTfB769wUbC3",
  "key6": "58v926wX6gDt1SVv6D5yt57T7BPG2aMHVMVjhhz2XqQaMUihgF17tYAAmKZV3EnxjkgZspA7EPrKDYHSjwJRwk5n",
  "key7": "5qVK2DbWynEE7bwNVypHLWYqNMNyMtbgXp76xgfXEd6pqWRazgmTdRrgeYd6jawvCZ7ih5nshgmCcDf4nrQCa81q",
  "key8": "2zG53zqK5qEuHbX6pFLnu8czG47y2TfhpAHgbRb4vz5xLRHdWn3H2toYNcMUhGLPJLZnzqW3vrK1pXcoxS3uWTuW",
  "key9": "DSUQqt6jwFeyaoajfEGJAPxCDgoonQaYevf8EiUsECMEeKntE5KAZXq6KNjgPK4PTt6VdjCA1oQRA8X6gmaCMGg",
  "key10": "5JLcv7ZmU7n8n6Rn8QHVHNXUVmxrAEfVnRRp2jzkkix5VDV9jA7Be8gLCrNJS35xHFwL1gTJ9WGf7wZJTpvpUPin",
  "key11": "4iKhar9TUrR8V8USkqRtDzzFPs5empnqf9B75z8Ky5HmYQJzew42nnRPPTtnDGjWc7SmyuHD4RtjoA3QhzkTVVLG",
  "key12": "QJYpoLEbZ7BZrqdjoFLCH47DHiSadWNqtZbPPkBCyR8BNoqM6t57yR7HEGc4YyhjPSxzEvwdmLqYCfP4icfXgKB",
  "key13": "5bynsDEF3LYNs4ttome2yTbyMidJXyabQegwhZLp86qcKd98LEbeAFKiPKM1Zn1nGBHRfkFiHWaNYTZ7bBHf9Ls9",
  "key14": "GcSQReFvgSr1mnhncKndH6CCPG36xNPYsoL54gxd86p8FmBLJDFytcDZtuqe3PD3vsRf7rzHo2kZStBiHuwg3fV",
  "key15": "3XKEdnRnYHsvcZb1sr56pU8A1i7saS7AV4aTABzT3c3svq8jQnkJew9KCtwrvLpvWVLgYQceyFBP4xe5rbZkkG4A",
  "key16": "2wAY6K8dEf1gmmVtN7K6kj2BJhbcnRqPSMM835Q9dkFxdCn4rfKseRTEoYCCxPKAzfoQVMqbqGE1dPNYZqm6QycN",
  "key17": "4FArica3oHqatTajCacbnGZdfq8Rvd6rvNDzZGVZi6F2PP89x8owVEP5mp55YQacUWnQkPmeJ8KzPYAMHUnohcLR",
  "key18": "4uGgfChw9HggEtrMbBQm3o5bS3cR4WDbMdfmkbXR7qFsy2PCkRgenv326voBMDWwSWTFPddDFNQbcrYk93BKfN3G",
  "key19": "4hjGkWWEt7qy3SXk62Ev6HveDuvQYKGix3c8QWmRny4qYwACVfFnUeCzH7BGovNLer3RaPUnNFLpaAkkSPNQmRPj",
  "key20": "5DJGBSjozAteLXogdKHipBgNiv8V79p81rpHAWXZoiAPHXq5Cp3R9ytexBkdNDd8qMKNLow8FJbiEHesTxVvJAZz",
  "key21": "21V33CzRmH8KBRu4y4zATKZYHbcuoRmuzA4WRsb4Yz577wa2U6ZVfTdQjZWeNGAe2YbWnMJgKnb1uPfU737Cji3e",
  "key22": "4mdb9CJ3SasgswL1hwTTMisrKBxriowdrMfQ48qfLdrtkyyn4urNjqjyVA82YmCrsSmTrNjpQ56P69p1McbwbrdF",
  "key23": "yux3Gq72eKZtrX141UnpsaxFMvvLwhaogo2y1Rq58fYUfCNJWuVjV7xR2pFZ2Q1wkBUQ22kLgR3oi9e9gxrGAjr",
  "key24": "62YEXXAmS68aQhkcVVwvjxC2VxKJwYSE94drttAJ3spG16chMCqzH5qDtRNajzX42ChYc6vLpdR7eenjoSAqHsVQ",
  "key25": "3JobnsgMzcjXNMhAoxYAjwKJ1jsEFqK5ZwAttX68HSAkWJJberucLAkZ4zAU4U5SmjCBqxeB7zGUpz48fMbi37oQ",
  "key26": "e9K3FPeQfttmxuocT6gTzjiZCy4DKwGtBmAcR6roarmE11n9wJ2Cyzq5YK1iRDqJtGJZcTwr1Ud2ruAL1UfHm3A",
  "key27": "XuTUEsEcW2y2RqNT9oeJGDcncskhMDtoxERXd4SAZ5MxbCU7F7XmAiy8C4VbRZo5ivWLSLfbbfBmJNWLcdZnC96",
  "key28": "5QUV4TQBA8CJa8KC15NrEet4bEphXFNnUV2eDoiEfuJM3njRbCsa7vmXy3kUBpTAMWzYQ7UbPdB8Ba4dYWvusMzw",
  "key29": "34U1FvfddA5kU5hpTw2WJYFjHm5DPuSCdLm22kbi5WmgU8akiMFNheFPwtJh3Pin2CLj6WACxFJvMqtmVbiCC7gx",
  "key30": "4qD2rZHHpwFvV9ZLZoP1ozD1ge9xxJ9Jha8ogDbkqLLnnTYBadUdzYcJmBRcfSqfNQghQgN6BQR37Q5iGPZ7QxCa",
  "key31": "4VL5kgWVAfSrggKkCRUwYj5fzBgRfpGx9PiuiiaDHr5YKnHLjzYoCRcbWyJdg9KWhi1MiNzcuvepw3zRKVxvUcVe",
  "key32": "GSvkhtfUGX87c9Z31KLa9wti81dQnF37c2EGbS91gvE6j5m8YB58zkNvtFWArj4X84SZKWEQh5m5vsoGnaG9wzN",
  "key33": "3z9ur7cK9HqUQ5mHVxmwQVAygrpcr6uPv1uPDNCEuAnBP7hofsWXakvbfNyKZYaHvBTYs9rQMRZxVx8KEQmZVras",
  "key34": "34reZSi1FQavgfWG3NpLXNoUGhWAyaYP585xWBqBmV1bP6mmXySkUzt2zaiNKuu14LRSLrndPkJDN8tX2VLUvDow",
  "key35": "5USpnYgHnNSkumYgt6215jvieJVh1ULJYt8PNGsHMiZujhNrfyV4cxvWyi7ADPTPgCXrhX95eGZunrErsvrtLuUx",
  "key36": "5UiYYHkiLWx5TmZjfac48j3B24G5Yr325vaDiVZhPrwZgVN7RuFjazHBow242WCjUBg6QWGcynXxG7tiUnSFoCSZ",
  "key37": "4UGERHXBAHfzScY6qhM6JgF45yk4dr4FUgfF7VVbCCaTwMXmQE9U92NN57zYS3iE2soK4ii6ghnFMzC51g6YgJnN",
  "key38": "51LKdhzQ9jvsn7hxsXxBPX8vQ7CXM3ikZHCBZsnyekqQC2SPb7KaDKqXrTjb2wnH1umhFywdSWcZQY9i33pWfNLq",
  "key39": "4anMQKV4yhGY4Tc5LFsd7Yv6LzK4FuXjafR7KYUqGzCdPGNuGg4m4FBQc2YQVy9EiMAu64vwPe1uyXRqzzMwgBsW",
  "key40": "4nnabHCC3fDwGJXFWrroAxP12h92893jZvthgEPhtHbncQpfeYjMzDEKdPHHrE844c24D9K6emzgHDEqy9VDwxwG",
  "key41": "2pL1omW4jkzSyT8HxkAsRofs5fE5XRPJZcC81SwXPiFNxdmoyH8tqWXMgyHRyk439wAai8FZSCGxvY6gKgtXPguS",
  "key42": "5skMKa3zgkbfDJDfxnFrruj7MDy3ao3hQJjbeiUY699ydSqm7SvZ5pDtn8jzqHeK51FyYn2CMkGMF2PAQVgcBEoj",
  "key43": "2CiiwuXGTUAbxCVweewdoQLsX1ZCirTvvG3yfo1NvtUDdHTVZ18f4FHgM3KMv5HGjN9RMk9FUxjLCuGmoGcbsieQ",
  "key44": "29hDAv95GJbqbY3iacCaEkeytYxt8jQLgEA36VUZyiphopkGexFY3xgE6Agk4111DNh2RaYw6CcN6b32GKoQS3sW",
  "key45": "3CxRriZjVZ5BhGHEu4wv3cbtvZ1jVJU7f2DChsvKagDWAUasgTyy41qgPQenWhw2huLRL1pzAMWe2C3A1xkK3Dk9",
  "key46": "5Dh6JCtXHd4iQqZRWR7oCTkNuEcxftFzjxde39ktzwBgbMFPnU7bKPgnikmUwdATvxtZPNK8fbbb9vyBGUFnPHTS",
  "key47": "3B6W6pAiAnb9dVCwR3oH425mWPUAft5gYuQ4DDCHcvSa8nRT2hd7JHDWXBToTEntky6mFxJBAtFWxAjd8qRDkbLP",
  "key48": "jHQXzutcDJZDwb3qDrgti4mbiM6FYaspSx8BqvQ9G3MY7MXGx6CoCiARb26s5PhJ7DUchkJ9HRbexgta54hze2f",
  "key49": "3Y1BkyGinboxJaDsGhyiLZHfkzy46X9eLWTeUguDtG4xdGMnA4AV2jS5VQ87R1j2czsYe2od52ceCnkEdH4LjEcG"
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
