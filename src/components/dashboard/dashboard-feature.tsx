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
    "4YBYoFEeCrtZBGfmJ6eG5uTgPkaTkymXqx8sTqij7pk9ikFySJejVYPkmU8KgLt8xJQ8qqri3QvVZpuuFnCA3Ywz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "493tK7XyyJCFwxTZZcgc9z36nRTZsz43qQjjx2BiUuLnSqWxBq13Xwy8DAWfA1QX5SnWaTjCxCuUYfe4t6CnMquh",
  "key1": "5VmCyCWh3SdWvPYw8gQhciiWeiqdR6LSP7tPByum16cDHGyz9sfzSLiQkoPLXpPb6ZHR82YYckBWwJku1YPFWkn8",
  "key2": "2UozGDb4Th8qP9tFM1qB5EZTy1Mq3BFYfcRrQ6fncA3KGwoWnXrvmSE4Emcri3UsfavJ3MoLKRj6ia4VM3iuVRsP",
  "key3": "52vmAFTm2BCpPdEStT5pDjfsdTo4EuRrr5iAarivYv1w3FJ8xmw84Uf3AKkLfRWXi5LkyCA4NBkNPkrC9xS44JAA",
  "key4": "357YUbYu5h6juzh9mYEhmv6iuUg5pxKZjv2zZNxsRsn5FU2cs9CfRpkXZXRLbKx68CcQ6Z288Qx4fSisffe5E5rq",
  "key5": "2dVqwmz6396XcoDAiieguhL1NRN676tX93oGJk4Q1PHe6E7VQo2YBwfdR3D7S9qMaZq47qxr1GPaKmM1QD2Sj555",
  "key6": "2YweBxW5NwZz94bct1kuhV4KTjrUWoiQ5ticB3pWi9tp6ERcqSTSj2CDgKUbeR7vafTAkc3nTrmUFVJoVvACdUTH",
  "key7": "4r75xmLDZ3iTJrxSKsmkyP2s5mN4f8JjX6hriCiC4yk8Br8jS1JV7T6oFQVjmb3gdbBHjVrPQCoV8Q3Mx4L3jbgL",
  "key8": "xVrj2MLgkHg6y1H9jbjBwWkK3sZ9Ftwce3Jy2bzXRBUhD3moBfPjprKD9fCsYngmU1Tr4TM9zCNULa4ZZTbG4C8",
  "key9": "TauA4jGru68kv9Y2CCDznJ4Z7G6fMttwwa72w8iAgTo9yXqRATTo6cmVFWTAx5FwbWumEnnr22Z7vbh5chM59eo",
  "key10": "5Mk8Ny3d5PHYpJ3tHLzY7DwFJn1V2eGZBri8gWisGaaURpDfWPcaP4i7Cvw2LthqaNkGdR1rRbQxnQRaAL9FvLNg",
  "key11": "242AZX63jVGE8CgSLTF3xiwYXbrDbZNvitCvSwjUGg1VVGq8DawoYJ9HkJoAsywjaqNkGcSAqvUWhaxSvBLm64ex",
  "key12": "45TbC5dE3FKuY7ckLsYAZjRaeEnoZrgEVdsFPpDVsv2Y873aohdzMbbK8Lpk1miMAHj3TBTWEcgkiGr6jM9fWWpw",
  "key13": "5kMK9TNbojpJMrw34791mXgZES6EZpcKgJPMzzVnCfEjiLTLFQmgosUbMb7BZMA8rSCdBDtb6nY7choZENJXrrLP",
  "key14": "2ieLUi1AuvSw9HVkaAmmQGsa41JT8BDWUFRtbYjwWEzMFb5qoExKKyMinMjjyDUu69Nw1A2gHap2WTDYdmmP4EtU",
  "key15": "5jUKMzhVHigepx6EXectbjtdpuwF57T5sueBuvtEKmpPU6aTFU9xHrfTksmMg7vSRj2bP9ctGbwDLH9896qJP5cj",
  "key16": "uG4iUboNi4dqCqzmBa3C4xVsWtJYw6GU7AAprTvHGugWR79zV6rehkUVUPJxGoAUqNmdxhCKYRLbpDLbrKn9qS5",
  "key17": "5vwSj4jvWepLVwkwtYsArUoa629sjdgFPvokyUGqu6KhPjaonkHEw65u2qrQ4L2GpupSwAweLN6Db258xKkmC7iA",
  "key18": "38rjPVZ4SZdhhgWqbaKavYj12M1dtDYWkrN7JCvteyn8wEfQJrhC8fAKfgKg8LEnj6kkVVkSWeSNSuizgEHXb2AW",
  "key19": "47fLsDpVZ3SpoKooBmNSV8sgRHtNGLGgvZRT329JpurxM4BsJNUh2WM3voEMm2GLzXAFhsLj2XEr2rDgztLU4K5r",
  "key20": "5aSavXUxNZHoSSW9F5AordPWWGT7qU9MbCJo1ndjtogHZZdaj8UwJ3dhREK2exZXQ5TRW4ToW5myTpHp1maUcZVv",
  "key21": "3uGnCbSBUVyYzzqGpvVvQpR3wzEiS3za1xwjx1Sq4dSVJDRWMidLr6v4x6REeY2F4RbY7pbBCk2NNx2bfkNNazGf",
  "key22": "6tucRfVXY86A35xoEdDhLhEXwRjtqTjEVu9c8KsQmWfiZWDySTHzYwEGxKXq7RmjUtCxXGGiRPb7b2WESUkL5mJ",
  "key23": "41VA7zALxM6Lg8JzQztgdWEaQbmmjsSoBnMkaJcE4VHietf75VQ8dsTFe5SYUerKvurpSyYDp3VZSwqfqUrjF6wu",
  "key24": "2A5fUXcFBoAingYQEKkS5iei8rN1yt4YWQGdCLeRT3UaAtoAS45jqrHbnjEYSQrCqqQCWZbLAY3UxSZr9WeKbV7G",
  "key25": "4dNbRG43nnUvMMnUE1Kg8ti4JeD4v7ddbQPJCVzRQJtHSyfSTahMdwFNVne9scPyNU3Q4sJMRZcDu2orn4G9tRkP",
  "key26": "3bJmPZvjTkaEHEaEheiErg96JiREL96GEqzCsLKgnpSXfKB1n7nYJp3iRjpsN3f3hfx41RqeW5sfjbHRcVwPqjtW",
  "key27": "hP952DnUaYcg3BiErefisbLJxQSdfVLUTBoM4Xy8YTDgVF3oMq634kD1Y1sVBfNL8K6e8xPhx5GqXr8ssKTXe9p",
  "key28": "4Bk7tQxNDkYbki9YP8UhJ8cfBzdBFHbq8Bjfsbg1eujijn2ceWiQdx6uCx5FN9w1NLD5rpgj9hrLUEs5y7mFWvSi",
  "key29": "5QkFNstxkbvR1jCwjbVGfdjD5WAVomzKZ8aS48JXzCjyBaPsmRwkxSB5MGwn2faohGuN2acMTLkyAcYaYXHsRoAd",
  "key30": "CmUJysFmofNUw5YAeGsAc5GkYJ4AqmnxcNYrXi2eHQX6XGHH26XW67uKnXPPBBhY9n8TgyoJWRDpdHP3G6jUnXi",
  "key31": "4RJA6LBw8eYChu1wpuqrM9bptSNyTQDidWEG5YkCs8P2VcJAbUYvqJ7mSo64LD4dUjek8VqzZAoeCFhTe1vaFM4W",
  "key32": "3ckyQ2f1Fme7AP3storLNtGBeUJ6SWCkHJakqP2jvrC1dAg1n9gmeEmWKsjgTQtEogyMLQHVnnMxgPWkP2smwGej",
  "key33": "3E2gwjfTPhYnN3zFqcxLWncS7G35PGiHoAPEqXABb4hiGwX4mEDrKRay6bgbBiEWoHa2CP1iqMrkHJU1nZFWmLwE",
  "key34": "2xMJTCNDs4YeNh8oi43JMv9F8vAyhTiYoQzMDaZtNrFKSNnazhiNVLWasNwSTySoT4iWszcjzWRgjvogYEGBgPnR",
  "key35": "3NRQwWs5MwJWNfFccPRKoc7tAb6hCJW7fb5cEo8nuEM1KotpJ4reDHuvXYDkzLWM4jnZCWfYeQrKKcXnnoomZ4gu"
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
