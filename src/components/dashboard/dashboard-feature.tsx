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
    "27dsCH7MLPrd3vFpWHQnTu8GmA3FQQQpe49NnSeGN8FhkiZUdHR1eSZQaHkJjb5T6Kgvamo1jC4J1CYJjjFMtUb7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q4NoL9EQPFWBdCEvY9eNsasXb2itMuzp5mKRrrfBC8x8mVUjJXYQz4ebpeWSBJmcrtiJDK47TfqpBwEZfCbVocU",
  "key1": "2SkdmyFhghSr1ZfFTFoNvgvn2ebE4jZPfYFRsQAaftg4cGPt2HCuetFt1tAqzfLFHkZHqX2RttBydeUME1t3E45j",
  "key2": "4Hbi6Vzq82AvQzvMCba9FhwdKjympH3jxCRkn4rvoP25VWY7X4TrvxXuYDZ9ppmQP1qGuyi9hXv7rJavxYPMxqs",
  "key3": "2RPHBychBfR8yMrZkqR6hh5ZaYKFoUnhzXt6k7dbxtNoQqd1BXkJN7PeLDZ4dwCSveohUXj5j1NcxLbtFhK321JL",
  "key4": "4wMqBqx3mgmbJJDYZz51pvJ8hhSDsRgpz7v9pusqB25jJxPKMn2txQBY7YZv6YaoVJD6zgxHJMQnbErB3FQaELvX",
  "key5": "2Lmd1biW464U1quHW1oT7ScBTqAXfbgp6cw8n7YfCwDdysv5NvbrMqYzoTqqXiKZQVkbD1Nb59HT3s2ZZjRjuZYE",
  "key6": "5MchXWbBmWzN2zjdXCatgzE11PMjmhnigAgqpNUYRbdj2Acf4LAWcvjHDxoFJzNLopBmJKXNnSJ2Gb9nF5Lc3pHC",
  "key7": "5XDDsi6HHfhpPANjbRkykgFUAzg5BYH3rwE3c4TYJXPNRLi6Z29EHZaeru8QDuq2JmxUHXE8j1FTQEGYcf64deMa",
  "key8": "2VZV82h9QjSXWWxBzUGbVrBaWq7s6xABB2Fj5K3f7Mpz3TbK9jwVFQjHc41DkyhNFXG63espbbczoJJCSn9uAZqC",
  "key9": "1cDYAxqp2iwaxzYvmJx6x6b228QVGKsqUquZJBRyKgDwcXpAh5EG2NcLoNHLir2vuCLFfippaTftBRanSWgkGeA",
  "key10": "VjcGsFjJCwVwc3Z9c15TtpQY7jpafd9btzUbwvdzaiFk3MJYoHfPpccb6NZWCQ1cuRb9Sm9ochJJnVqA2HRFECF",
  "key11": "2tQGmh7s8CWKgPj4MeyXef8Q6UqUhfMghGZrcNncybbZ1JMsLunT82Kr2PQcasBFHpDBXmzjdbFsUPZNh8nbpaif",
  "key12": "5ptaPaQjncG7PziHg1LqG1pixLRiYWQCNfaFNTrqgDtmjjCfv8AaioNm7SoavZvUKgHR9ZiS1Ud49icjLyVBtzYs",
  "key13": "2CpG5f9eonvG8tfGpk8W2mozuuWvNJauapLagLUPKFjQPSpFzrWSrppwDJ17doiPcMjKKaVfDRmBAocZ2egVctow",
  "key14": "4vJWxMDLMjWiwKPVTvAP9zR9ay1gcCBRjbiS58cnGSRXhfZQi39KNhFLfdVTHpGjG2Etm1FnBi1HfUiSKBpvfdyU",
  "key15": "ZWBgRQunJu2aynooxAntJ4EGSAvxwSSqsvN6CJaBMNJz2Q44WA9CGMRaF8pB2HJ9zunzxci2vBDnsjmCwmQJY8o",
  "key16": "2Nvfoiv7agmnNHUuvktXoXtk52kKmRw14H66N75ULVa3dyNdX1oYkNbYv6Mstfb59d5kc5d3D6kacarfTfewamDh",
  "key17": "3uXMupTTNbzLZN8LWNpJgncExnScM23boKsq3wGWRmfPxmdX3ZE5f9BX3sXGw6QdSDisvmXcxgmeL7pfLd5crGTp",
  "key18": "Y5yphU17nB3c2iBPk4UKD7uZ1tny4qrPNYLfXetvJ6aWJEQYtXyp9TpHYK6ed1Drm7psoLEh7ErpkUxZCFhVUiz",
  "key19": "5Rv9Qpdat3YYuEpocz1pHrWxXTAHT9iT8BbFEv3FaK66cpoYREwhZDpPU1WGKk2Ni9vpZnEuHdVdwN8Ndp8tvmcw",
  "key20": "532AURiVSXBYGENAeenDwx4L4aU6GsAKKBYRm1g6YFyTP8xBGoqubxyCEmL5KCLBEW6YUkeUgnBsE2shJZ89gYTm",
  "key21": "5VWVXYDNFUUcUYcmunJN1rxkzrBEdqgspN8oMjgVFkTdtgFG18WJpaD84zW9NWV4ifRtGFXwpnyQ6bNSqpGuYgTD",
  "key22": "8tVJ4xWBT9AadejJAVatNdxgFqNJuhcvb8xzC2uq3eXHxTarTGFFS5saZ6fHDSGYUxFXbYwcfZNPtzTzGiFSDa1",
  "key23": "37wVmgU4T296vH5z4kxM8Xtmx7eK7k4MszY7K5qhwhDdduWuAtb8dFx3TR4PyUK48tPiE7AAXEKvjA3GHmcwaB45",
  "key24": "hmoVPxWxJhsnptDZPXsw7JqtzjMj3RxadpRnCTGFcoPG5zocewb6fdvTcPCeHTpvBg3JbTWpy1HUcpAGC9mQF6a",
  "key25": "5kRMfEr3fZi9shrwS7bkC1E3gWCvREU1xfshdm2kLuH9ZP2uQzoqPfCGp4ESVZZBnfF6g1eNwhsDBgyEWw4Ccm6y",
  "key26": "4oHdsv6jL9xXwau1CBoC1CPUR8vSRWNpHicNgjwnaiao7Sg9Q6UD1WysCTx18K6Rn1a7LWmVrPZLJj8k2SNRPyGb",
  "key27": "2aUcp6vpuzmjdyteFCxwdJ2ANvy6HEzTUBBhqf1ZABuzPq89f5EHrAiFuucgZGPuR4XiXHdVfWKhTLsBFUY2znin",
  "key28": "4zzaTkN9nzBt85sgpphzw3sz6TTX6kvzKhEnqRghSYGpNFaosKdYq6y2iADwMcN7Kqsvhe8PmDqYqem77Jd4NqGG",
  "key29": "5mctoM1hCTXxRaDMpyUCdG8y4nzob9h1RU9pvN6pnv3pY47g3xRgXyWmUzPB9a2eNeEyo2WMQAqJXD7xksw1cerV",
  "key30": "3pGQQTEPxqFXNd1vU3N4whCwLCvErmLG2rCxhWMfFN6kgTF9jPuZtTD6qA7Pw7wpK84H3ZygYp82Mk5dBC5CekUT",
  "key31": "3i6LYkTzSpNtRhbBYZ5P49CjcToEAVpt8oSJksFGix72GsjY6aRxcj3h7y26Y4XUTMdktAwAZAaL1UC8M7hQB2Zu",
  "key32": "5ftRpGug61813d19iEN9KMtKwhF3cEZtCdoGxD6UzpKUHA1tKXaFXMi28vvmGs9L7XWK1QYfhK9jpHmQAdzWH6xN",
  "key33": "2PnyMaD2EtSQ9AK6UMbAbTmzMvMbrhnEpZNg28SXNBtYyptdy7Ru7sMfitWQdMrtiU1tKJeN7ZjtrJqxz8qbSSr2",
  "key34": "W9TdjNKpzm84njyatjdaYHGiQtVzG2HqML49QHeqZ53ACseEwRmx4Xu6Yqo49i5gSG1nZYjWNDyT7oUidD9AuBM",
  "key35": "28Ubthb19TZHMcHNaeRFwozFmNhraqd5GeeesN8qtG7KwpQjBoeNu1xaDg7T4snCB7FC2pgkYkVBys2ZBbq7tttA",
  "key36": "5ySSuUebhn3uyPyvWBEUMeVZv6ZutzqEo2UEwKpQCLyYtJYQRzM1g2ryNFShrEr5zdxtAGvZdtUfUCWyUenDrGmH",
  "key37": "4fQcvXRHAFBKWf86suhpacsRFQvN1eQAqBkz66g1PtVpLdupm3MG29uijLqJLfkBhV7qMBaYkzg4wjv9z7pNwwjm",
  "key38": "5Ngk41Zwchyz9oPe5PG53yKxJK7wjfZEjQKVLjfbrM8h3vjgyiAe4wNX6yF6XyTWNLgFGhvgGLhbFAAUTCWSLnBb",
  "key39": "39U4hmJ2Mtc4KebMzJQEFPJySNojgY9Lw96GWj7yqHHFoYHncTce9nd9Bk5jnsiWC1Yg5M8m2b6uXokcfnomujzA",
  "key40": "5JPBCo76w9Yu3ygaCdT5erxuPrsw4XobzPUDFKspC43Aht1r1VxPmzFzxoFfKKn3S3EL35udfLfpWZ7evPFiyUNG",
  "key41": "2FLDW7cFZnHPxmxrN4XVokV3GUfnRsnU1rzmANVs5h3j4sbyD2sZ1reaRuQJHyJHwxTGdR8wNE5Ueu3s7hA6xEti",
  "key42": "4Deq8ccHR5Gsv9C2i57Ek5S7bTwgjwmYtU6M9igt8kjxvFsgNAkCAH76xvQjEbrwkDV7YaZZyAnjqpxnZuSSEg2t",
  "key43": "2vM9DPJFrNUy4jbHd8ikmf8Ey15wvtzRF7NRME3C5E5ivnrZe2kF83EaGnZyGDSPiUB78qidiHQrMPWHfdnM8MTb",
  "key44": "3sq67unq4bCzZdqM7zJCD1G7DgscpEE4GLnU8qb2uPTdBw1rPs6jvqFzPUvKUEYnUCsHPwgkRJtLoXXSNMYV6oeG",
  "key45": "L7o6EgYJjVE3XoqJ1MeUZ87wErbymERe7Xh9NRUCNUZZdtGv7eeyT3X6ZGAkepYxn9goFFeKUfTahhTKtVwffMn",
  "key46": "2ZEaCMPjbMQGN78CVWp5t3bD6xmc6Nvk9SmWsxANu6mN5QCoAttZirQe6aY2dSTPchvRRxNsz5YV79GP4uoPKRSt",
  "key47": "jzrNM3EB6gQQ5Seka6dMeAQpWRp6CZgr3ZT6KvHHwc8ppzYyTNAH5b9A6KJBkMF329J5Gz94iChAntvyuHhdAg2",
  "key48": "3AqddYdFVrTAGRGbJkrKaL6xsvqKv9BqUb8soGnwcTCg1wvNi1KLRzHdX6Z9cvqpTNVhdJr68pnXaY4t8KMaZFUm"
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
