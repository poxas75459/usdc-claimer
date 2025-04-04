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
    "EVrZpN8MPMWtLLMgHomtTi1C83QRGu8hqKAG2kgHX4QHxfyKpNy1GXfqcwK8VGv4LFD5ZoeMXtEH42eYJiaTnid"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43ecAJ5L4BL3MMNHttZAhQR7hJb7roHryDf9wK5J8H8uxfC8cg7jmgXMKB1rXpCkZXeTjJzNDMoA5eWCx2rTrH7M",
  "key1": "5nn7vm44i19f1Z5cyW172Rh8oUnpQaEmMBDiEVCXmJZRHTFp8bwPLu4NE26wLMvgKWqWyhAm2gsRZCmWP7k3muyg",
  "key2": "4ixgZB6Q1bBc4Zbj28bHE5TdmtTChLBebVAjckYWwcq5TBkfmWf5Q4KSS1xs6d9EgMzfCaXpUHMaBviN9quhd5aQ",
  "key3": "2Fd6AQHq998xYHAYL9e7GSvwu5UH7Zc5huRKBA4vJVGXuicLZaS9k61Etbsh8TLQf5vcGKzeGY7HTuF5U3mEEMgb",
  "key4": "2JDgKA6hZ16vHwEbKopoHPUrzhwSv7chgEB3xeiFwxHLdeVHLRNtrYGu26QzePNBmJm84avtP28iPTXiKXLdoXR",
  "key5": "2TDLfCh5TUKZiGKqUys4xMPKvGTqhxyWXxUPhHdPjHWgUbDyogxsrEg9nGDwoFXNCxuDBjiMiDnfKYaX5AyrYvdE",
  "key6": "2KKyddaEhMMZi7T5E651v1gYh2HSL3wN3SCSxEUkU3RRApUVZdsGew6Wg5drUYPKmgz6QUpf3PTgzQYQEEnmHbKA",
  "key7": "55uginARdU1Qh3SmGBKKfdrYmBrGHCkcYCdcD2tyRizozy96fgZT5uWBsqYzsUik7tUGwuUKZfkamqjdK1CnymKr",
  "key8": "5VC2VYXechkPMReUPKJDt8x9rbH9xpKAjge4dASq5Qiw36gCMY1UU1D2yBUefCWoxHaZid8VcS4wUAmzimMEWKQS",
  "key9": "5k7DagVYNtydcqd9pQWVEwZ87gVYi8zw1d8dpnoGheZNxcbbmq8jqWLyrDP1TxMCRjuf9WKV4wk8BmNj3gdsKxZ8",
  "key10": "5QD1RNVEK8m2ReYkgPKfZabqcppyc5EqDwAbUynaSEz36AP3RuL4EcFgZeHT44Y4Gi5jh5pjg46yRMxZCLzpPenZ",
  "key11": "4zxuY8TJUhCPegwBKEQzm3FvkEAmQzrzWdbwAAsXYJTRjJ7MsogzbB6pTTYLejMLH7eHUQmyAVdMqzKcDSXSbm8u",
  "key12": "2QYwtvcNZHfhxYoMQ7DLX3hdLDiVKMDt6xWeAT3h4ES2rKzwPQTu7FQbp1mmRYopA4NU6SQ9hJ4WdaXK12ZGo2m2",
  "key13": "5j2Y5mocoaBp8H2P5vrwXPhRCwd63bD3WbGpupBtU2YeaxoyyoKfP3fF2epGS7uKVyJPhKEv7rY3DmGb12NdjuXc",
  "key14": "2oAHTcJgKKV7neM1cjS4kR26khKgfrKWcJyYoDgN4NekW7CDHe96QSuYfN2ckfjjwkTwTwwrf9CFu3nz2CF2FgNM",
  "key15": "61JQKMRfuYVG8Zkwcvwx8xFoRyURfjCiYnJgkvSo6sQ3PUty21HPsA6bEawiwrB2TUHy9fZBcRU5uM22QsYacDgU",
  "key16": "2XtUdd9GB1goz8CXRaWox4D4BQArbdiKeD9953TVjbZZiMTwFaQFrvEipipho7sf8Lt2U1wogRtAS9aVPe6n6CpT",
  "key17": "5vw6pNFMtfEwFPgyy5XDC4PYrqxMDaobD6SVk4EWmePKgdsiPoSPvwQcWdUh1J95c3y5E2jBq8qANyXTsjok7bpg",
  "key18": "4xGKGnPfo9C8EXnptLW91Uo1BSFxk4zws9eSrWGSx7viGqthymwmgXqFs8yrvn4fj5gCxfWScGDsqw3SeiAND8CT",
  "key19": "3HwqAaJuy74hvdE6Cgm388PeKwWWZRVnzcTFrbAmdUL9QWfJLwNkzvLCmmBxb7r8EQPLNY54CP5MLBUA2Y8ALsqi",
  "key20": "4aNtu39Cy1zNtTYKYHaKXb3N4SaJ3i1KYsiND1J6xRs6DhFUHovqHohorU4fTUu91ysBv4JXcgAzX6mBJqy49riD",
  "key21": "2MATKJt2M3M9gsftMfwBMTRVEedzbYJekpETFiUXjQ7dmtNSomA4jVkFVYLFV1yq9WskdswgiWfhFBa4jCxDrXbW",
  "key22": "3XaZY2r2i89uqbfwgAjQSfoNjTVeD7sAzZWM1ZMUnmeieAWnk7SMfyyyznhhVcNdZEHriavUUKTcEgGT7zrz3wiZ",
  "key23": "4rPkUdmuhbMgCfy7MuhrqwyQVyqvhKQtgCVu7b8rXUWmv6pAEz5NhFCc8wWLYMhASEfTB6vRkCeFcGezMZTpn6yH",
  "key24": "SWRiAfL3KnfXhAr2JTtwV3cCJzNR7DWUdWxGq4j91EK4aXsivNaobSMusCJG8XX3DgJnBFMvqtEKAa6hsAvp7K3",
  "key25": "2hrPeTDQJxcnMEnnp66TUZ9wBKhLVrx4NwxNbg2Kv3V4cXH4VT4W4bXmq1Gif4nFPJufnnnUfvmKTc3hdiERz7jg",
  "key26": "4JA9S1HEtkmNT3YVLNuJpeMra6zQSHuEPUB6dvo8Qnosi1VcG42W8wHAgvzBw5KbQj3JwFt8t6J1EXetMH6GQPUN",
  "key27": "4FsVio2cd2b3aYanWTRzGkscHK5bvxGkzBF2uf3hDhC49FbaYPEfDj9dmj4t5onuTbFuRpCGLmXzdUggGn8Cqwe6",
  "key28": "hXvFNyZoXkWmcBwp8FvrGrGkqXjsqUSKbeR1fdaJVkpryjhK6tRB1km9yxJyaJwtNuLqY3VDLxfmyTZjtNt6TdA",
  "key29": "VXLAo4xoiR55DM72Pm4B8z856MBK61s1JH8WxtsfBL2wrUWiJaFrEKpjVHEJ5EE1JCtdk9kHv2MafXQ1ZygTudS",
  "key30": "nvy63gsaxN5FttwafxaNRo26Fg67VB3QEAxpU4fEY95KMDJLvZVkHSWmtG6NmYQuqv961X1LSUQKjBtVVb1tj4U",
  "key31": "4M5K55YbFUfsmQcrXehtc5HkpHNjAeLKL9DRKxh9UKKFke6PE1zgmZJGmCdLv3FZDkFKELEnd11TPo8Kmaga1SjX",
  "key32": "51YkT1HMcguZKfWz3tHRUu8BdPwfT7RZ2SyHWjD1FiBPRFPn5vDtyRMg13kqb7LLu8SMEJsZeAXukDfLEcgJfavd",
  "key33": "2f9tbMLWZwaxC34qkHdxxpUURP5nJJrZcTQoR7vT795BfSU1pLjhLiQcXUawzfxbPyp9wxLoBC9nVDR4PwRTt1UY",
  "key34": "3KPqYVtA1jhdZnr5BxrRi59ntdUzWE18WPEaA6eJVwTAG6RYqn5RH5QLVWbFsaUuziUpezs2rLNcnkfhZcJBJLMf",
  "key35": "YzyVejV6zHE6MphJvsJycVHsFHRWrFsqXu6yQCLxewYTEjCNhC76HqQYvS83tFVegYDr8wHntSScjUPXy31tAV6",
  "key36": "5RFqkqk7eakX21wbiRLQiFZLQTTMq21xm4ZLzR5vxpJNJAhnFxbWFq7exy9z2sLT7CAoNwyqtAf7fNPWFZAFZqPg"
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
