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
    "5AyG1GJZszzPtWiKAjFm2xdCuqHPCQvYoZKS5yTkEbh9JqoxHDBjrH3hHxGKGc3NEy1am7vDZZ5YgSg1eERkgBgT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1ULhNBFvPN59d8xqarKU3itSbPLeCGw5baQexKGmkvriFEbN6gGL4sFe7SjMXMwfVo8VErMo6XynoBVJ1Kx6Uyt",
  "key1": "41YY2GdaTrxRvQTCxAcNztxU6pBaGwUC8uCN11pBU3foim8WKZGx7PTtRDNjxeLFNj8BdRZ6KS4H5gggK656ViaG",
  "key2": "56pxs8aKJvdvWcZgzhYbx8zg87M18dVxXGx8qWPKFMqEuN866wjdq7Py8tzjW9cD1koaAy7pL7ZvDUteAh2zbUyE",
  "key3": "2ZWxKH8YQ3mHRCyYqxhGkVDZLjqczoPYX4VF5Bitey9MmfYQrLzpefXPTTMjAEsFGUJ54MmdxyJcsPNKVodejrcq",
  "key4": "4DQyr7qKmJno3Y7Nx3VtXsBK9eAfPSKue3qFswXLr4XZnsDnBaTVobhPVAKJ1iMMH3YSGV2ghqswCvCm7MtMLuvn",
  "key5": "5ex5vXUCf3cBxrgTLeMvP12C7kD6KuQVsBcvgRS7ccuPc98rDSjATvwjawnSkvPH5cTuVF3KGDSqfzejkYAFmkXt",
  "key6": "5UCSsteJ1KcDYETs5tHKXVrGC46noZk2fVURzxvgcg9SUZ7vAontEeUiWimU86uXMduRp4XQToCDYukcptRxNNcf",
  "key7": "3qKLJUhDbtuvh7nwMB3CBtBWnccq5SXo7eZBUfxbxrqmTVEwYppJJ1SriKq2vJecejyedre8tebJcBJZpTkkZ7Qp",
  "key8": "5Hp4u9sr4NXawoM7hzvMVTjPhCc5gGduv5T6smADzPAE4wGpdHQL6Sj5AP6CnYjhthP4KcYPDL8atA9adKQzSXYB",
  "key9": "25JxbsiRdaH6d9Z2MG4UggtPiMq5Aws9Jh1SFHMawGdUYhrShf652Ah1oStZpJSJMdz1CKvrmFu3ay4Agu8TztTN",
  "key10": "5tYoaDR47fh2vQ3qHmN1VNMT2jGa5okKT5kLbv2g73Fezi4nFNrNwYVtP6Zu9Uyx2Rz7fnkQ1wwaLCz4xj2Gwb2k",
  "key11": "4wrabEtQNZDyZcBC4ecFXSmvFL952WmWGFqd5gud2WmFPSvyVfdHMZquV3YpHoFAs6QkY3zgfNGxXez56PFRMBrC",
  "key12": "4rtJpwmHAPnNfEsU94NuY3Xs2zfR4XjtfJ9pSNMHttuX472VRpWn2wGCSdzqR6c4jp9qnFumypi9DGAbpJEinv2o",
  "key13": "5JU8N61BiVtr7VdiPwi5mjbgjbU5ViPxn41KZqi5BXcLSDRbq31hXcsJhZkSFjc2GaoM8u37rFA8FP2r1vW9mK3e",
  "key14": "3kQc61cRwegSoARZSPe21oojNsa7GVSjfxd71c1hir7Y3zmKF1oqPYnT6ti8TMDD3hG1j3nWKBj9oM8bMX3LV1aU",
  "key15": "2D1bP8ycjWA1c2S2GT9nytBnVUgYdmD782umphSk9hT3ytyVTu4s9TmYEQk6MEF5fFYiUrtZRbj5JfaAVjqzjZpm",
  "key16": "2GETT7RuxmiSRv41c6FhyTkEcsbDAhcrmecsspyLkyJgQijxiK1BLKhgPgzGsfH9YUyChJaM4xVrXwC26Za9bnfZ",
  "key17": "56gVUH11dZajqXxPQ8XoWFesG8GhALjW3uCHuhYLHegT2xihSRWpLJebznSZ6dG3uvmUn7qMXg5UAegkGWRq5rDf",
  "key18": "5iAf5UvER2QXgqaB7JE1iFcdPi4cwCSdThVqpyoqBYdCgv4sRNeLUZEJ6FNnwf66mZPusLQMdb7avvGbGSjCqj1j",
  "key19": "khDqE5zvjBRVWFK8vdqdjrircJrxuA3RUp1xaxM54WUweDGZdBNLfJERifwvpqC88Az5HfTzoajRYZR28qAPvGn",
  "key20": "3o5MPbDC46jksJ1HMeGZus4BpQNdQRRtJM7AokKu3kTEpCQAJZWBJEfTSKEjkGneMJ6VXE5iZMTwCk61LcAorTMz",
  "key21": "3uGwbrjn3LxBifdYwVat6CWv53ubjRrKtCqXrSNX31AmeafQcYoU7ApkUgXNHY9KEwnWuN4xY7jsMXhRJp1V969q",
  "key22": "5wD6jCm3Gk6yt3qgWkGmG4xrUavYPKVBrJ8s4WpaiBE5MnjpiiQzhfX8dTJfvHdN6xNnYGxEEwKr1A4fa4ubLAS9",
  "key23": "3X4kxNtBJENg6DvrVLDUKNLacNV9QN9H2pbfW8CA5EiB7bSYn7fmpgHTHZLHmch3zk13uEXnzvZH8jZBPdU852Pg",
  "key24": "3H5tmvvALRYkh393gSMiRxLhFVww3HNfbmVUjAbbMfbTQ9CEnLhzSMKWHW49UpbZ13Lgy37vgrNZoF3yBTEwrsdB",
  "key25": "4f83G9N8qsdA2sMuwbALJ5Ncv4WqZc4jxVaNnkYfJASDPjB4ipMAzXBjRTCKAR2dVBrkbtv27wAQWQk1cfLyy7sF",
  "key26": "36jHo5XJ83gN9mEVxwgSiuCXSY2uYsesm5nCeRNnRtUwzzEPAoBKKuHjwB7aRpzUqLfBCBvQZrMEzNxXcZNH6SeZ",
  "key27": "d9gofZur6YSTDxqpGGcPQXYNhJmKNVkVjNjDyKqH3JexRSxWou5DrtrrsD8RFsi9zXfvMKq2D6GmEeL3XH5rQAm"
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
