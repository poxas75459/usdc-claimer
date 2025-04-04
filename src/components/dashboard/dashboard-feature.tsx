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
    "56eqjJB2xuaiPGBLLbVVcPPESQ9gMKDCLAwZC5zb7SpT9QvDx3dNCureMUx3JwKRHKBzqEcmqjEDLyhAd59E8Zjn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dqEhmcHDPcsUS9Bq28rn8T8Vra4VSyKDzVbgbWRmNq2yRE9eTfqV1vvYKhiduUky1pCXFYaXftpF1hrSLdY2had",
  "key1": "3TA3uafi1g5icBFv8cyu6fbE2tkhyakgBQtPd8hai7DgbvqQHRpyDam9tNsuQoRVn4nCJ7dKBq4PecRJuDwxjUCV",
  "key2": "4377rmNpXjMuAz1LM7ExKA8HecKb3J3ehqSNchVFFuLuzgLoGKpVG5VMkEkwYWJ9XpUKkG9QnxzyuYEeu8ppXUMB",
  "key3": "yU7tRQQZVjAiJspjJDwuRuy4cpnioBSViLQS4iZk1j8Jis8J6MX5cbk2KkmNazLCnFyMqRLBEdTQw45VhECYgiQ",
  "key4": "384oGdQNHU4pG1eDib4Sa24MankoVnHp4CGroMYDhV6ZPg877pxM5vvRvSYJV1Ei4Dhj2MqX929aaHRX8QimrKqR",
  "key5": "4V3H9q8QcADP5GnSU7b15kwo8GLQJ3objtdYRD36vcMUw2LKUkXc18tBzZMLCTDioKKEz3PxQZqadHwUmF6VZ4Jb",
  "key6": "2ojNVYML6d99qqGBZhrTiNXzV13Jh9Tsp54MRKeeqLw4DMWFQagKKy5rsBbdzeLBmnp8DwCuJJccvJYuvFYT95UL",
  "key7": "27wR5AoVMP482rzVMEpU2P35z1PKZQegXwD25tGV8r17aR1pzZXw5ukLYUhcEXf5Kj6LWrKeVpVe1taykkAk9Yjd",
  "key8": "3Phs2QhsdMRkVKzFEBvf23GLe1JTzLTyLsBLAq5LBrXLeAXP89WCCa3tSA2HZQiCtR15dMvCk2HdJQgTEuhPNEvL",
  "key9": "BYRoHHMGjoWyV77rwctHHqiS6SXnXFA4uCMAmWdrEGnE7WEfz1cSRYLR3k1AJP35XJsfJ3S4aB1iMX2qJRV77Nz",
  "key10": "46gTxreybngLuffHYmmFM2f7t21h8S43zPGWT9NZcS57694XgqJJ6tqfBe8ekLqGFqyozzUgfoZ7RHEdJLxS2Gfu",
  "key11": "5C7T7qCFKPRkHGDeTQnB1bieVesnt8TFvxeQoYaPWvfY5PAxeT6MfTFCPVJ81uctzXfo43v3S9Cs8jNxnD71xDTZ",
  "key12": "3Qe8FyePfYsy5MbZkajL3RdyKvMwD5Hgr9hDioAYjrZLPbJb44dCQe8PxDcWDMYvsgr9PE8rpdj4GC2ngQD51SFM",
  "key13": "4Tb8WyJXNN5jnoycch8aTctmTrUE8N8tdo3aufez8uFhjpgh2cggUtaFSwAZK4xX4yVyG4okUcKWhB4fbtku341t",
  "key14": "5oUqyhWRi5xnSDxQgwHX1scH7MP17VsfAbEBXXMKvk942B9npp9A6tRt7nM8HH8B37gzCq6eioEVpbUvhL2778tX",
  "key15": "3MNoEnHxYTDy3r5Re3qwnaz5wovxmebtMo9iHCeK6S17hNnggbhqMyBuxmrLAzTYoCrqSU96DD9n1Jg5emQTMv6T",
  "key16": "3s1uKr3NmczGCJ2ykDGrXAN6cK3zCJ7MEUsJqTHZAuLXLJYxJjYCC7YwP79ebBx7ZU1994ReSHh2Hdx5R4rqifpu",
  "key17": "3UisPWEokAmSZ9B3U5TpYwDMLaBtkznzP3BMfwRDLETLwJoBuV6UGvqXJH7cn8qAMwYM3krG8cCitivmY96fG9PH",
  "key18": "4tRt5TMfqbdpq3YJJoHpaLgBVQiRWzFRNaeiQutUAAscMKyNmizzREHDaHk67VdvMjZ1GcNAhfnbaESewhbnXX75",
  "key19": "PqLUA2LTs1j5zc6mG4mtF7pPrBkrntSTvnwNhGQ2PMr2d7ZDFZbtPXohXfkbPjjz1mir6FsqtjLXa9LzBJPhcXS",
  "key20": "3y4MPwwT58bNepJoPtjdC679Gn9V7kFFsJBNQYkLgHk82JtV2YJdy4oSfT3vkVc5e6P3RZUTdeLd5isndDvWn81P",
  "key21": "4MwJXjKxgzWj4fVyxVgikr2MeQc6pXEBS9QgrwYb6QaH6H5d1HvQcCfh7DEYaee2tusHJDZbJRpBRPdL1YpoBNsq",
  "key22": "2zHuzQvnXjqpm32xqBhwDoGQQSzu1jAzmH8U3c9HNrFVnKWSgeVxWs3fwX2Nc8shtvQiN1DHBZ71D5Pa6MjUfsBC",
  "key23": "5Ngm4niBeufktKDcNoLrJMjpqj2XMhz8gX6ayYwxFha6yHhimbVp4UwfbFcGMFDS9mAYvTKnXNcgyn1bNsTP4ynz",
  "key24": "5knioD5ta9deKCQSWZ9CdvcHtYZiPj58ijZdDSnsTLme8b9MnY7CaPKxoqG1C3rJqcPzkgC2z7gjzdZks4cScUos",
  "key25": "ZZA9cmSzwi5x9EFruThsMPBiZXVvnMqTiqXsVwq58NFT6sKJtkeJGhJNfFTXuGTMzMr2k1UpAARPNwYHzkLYSii",
  "key26": "tBZnH8huTZoiSzw57NCKn4kVdpGEViLsBiwMYHDeNJToUqdPCvNvsnqj8B7ytCJP7ievLubAd9K6ECzAQMwjuky",
  "key27": "2wHEzqNNvJME7AJWXUBmwH2CumTcVD1BkYQJk2WFzS8mzpp5LNKgXLj36RQcydE5XqHDnsApeggnQuzFAaouPUMy",
  "key28": "PFQV2diDtY8pAMmN8RWBUyzbsa7TYFhgNJonDssVuR5sLW78sxeNDsWCerhBXg2j1BjKsFZhJBK3onyZK32sYHp",
  "key29": "4o1TxwADjiag9FZL6mAkFCDRntxuD8akZfiDw9rvfXN5fCmfUyN62ve67PqNGSmrjARBDcthTwJoGAkmGELgX5kU",
  "key30": "43BL3phk8EYMYkvceNae8gxUWZFFoqaUxenhA8rrdifaphEKJ8DPYc1u793Si1w1fYToM98jKktc38mhVNA3XLNu",
  "key31": "3vHMnBLhpxh56L1tFJ9fZgb4MYHyfPsJxTugNGwCGBswqsoXdjcWKSDKeUxZXUT2UygwM2hpUiLkRuMMQwb6KmLF",
  "key32": "2yiacsfxsEyXdcynMnVigZSBv27KsjCR73zqopdDNfduqXwKjbqNqyA6hGdHN7KTLyRnoKnuqSitdtDaBmUSk6pK",
  "key33": "4kc9nkWwkCFFsZb9LPXjKrT8EpJPvXpwGpE9QxVPQEQBAbv8NvL6aPx2R9NSiZ3CVe8LGacHzLYPGfGaCSpViCzS",
  "key34": "2ckWqYVjjMbfGL3FoUNRwHJa6Z2AgkZMjZQFdp3m6KTy7vrYxnx4FCf2EL1CxWZDfeCzaCgrhxXd8yf6Z8gtRZu",
  "key35": "21BoAuFttjjRnVTXfcHCcPzSb8EYhnsLJnDQpuiGSXzpRTg4nixRoSwFUfzcDDR4WRKhUY2iBPueXg7XAXYmmYaM",
  "key36": "25q7Y3dpA6mF4u9RtiWsWjn5opNC4uZLhwCKpgqHT6xVgiy563SspoKrtkjczWVhpo8RsQyLHm587sqSBjXU733a",
  "key37": "w9YRj87FxvCjVHGs6PjV3j1o7H1LFHdA7guhfLuoSiqZxidoPNsStdwgqLdaKTYQuNWDmLNnu5n3GTEoBmJa2vP",
  "key38": "2sQ5kFBwf4EjRZtXz1MvxHEMVCkpP1fMuafVWNY4efSPxvRsv7pQShbTx89mPupgG9Xiyke7BYwBMaY7686ZeaQ1",
  "key39": "5cQ63LqiYsksdSnDVS7PppYBvD6DBAqRZpVHeSLxo5yNamRjLd28wQmPqnpAKyPMho4tDJSmxdQzyMHeE1mawcf9",
  "key40": "55BWsT1pKvBzM5FjgHbauiAaPgFKSALNFL9rfE15aaUaZbX3FSpqhi1yb9VTg4JaHi6cjtmDukwhJFoC49eapt2o",
  "key41": "aqynBCiUeRX7YUhi135GoZ1wWjaTSwykBE7ir5HTvMTueMekt732izhh6349PsVreRqSQTYHvHZEVW4DgcppN5d",
  "key42": "2daTUbvGthYNEJ5rjkYRxrFtLPhucYgGkr4bJ3LjUHdxzsBxN7ysfSxY3tqaKMoZ8sp5yWJXzZ5YkyyEXn1rkHgZ",
  "key43": "5B6n844u1j7jfavsAYkTEXLtDVGU37s7eaSj1RKt4tghktiy8zY7ocjtru1TcGBENo9vzoz5yfoDhoBXkU3zxYes",
  "key44": "jtTKKxLHoPAJjmvPPrjU2BGySpPCsFid7Tmup5nWSHnKkjzqUXxd5aymtUkitXtXJubqoMEdg12fXF8fMp4u69a",
  "key45": "5xiq1Hh345Bc3JUSv2mvtYSQG8emq6U819ctY81cLY6QwSbm7vm27qS29w689YPnxdsqXskJcSsaTAAnYwFb8dcv"
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
