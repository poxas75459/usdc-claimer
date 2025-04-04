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
    "2k2uZnHTd8wBzfLPin8HHiYqfrKcQf84XFUNrSqppPbHGGu2Dm9Skd4HfLGCynuN41o27UJaY1LsDXWyC2i9ZXPL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BXHbinKayUm3y1Cn9kXMzMH8NeVZAsgDRtxALppiULxR3CLjmmJgKcFF4tzPVSj6eHV4jvsVpQzxPRN79JfD6Mn",
  "key1": "5CeJY9PFGqn1p4t5Tyg1HrdPdhiyw2jELUDXyJfc2HjoNBoHV8jb5D6iWtRczaBTHuSz6fvmGJe9Kshm2A3oojjU",
  "key2": "667TtZvKBc7YhCP5hgJ8VuEFnk9AKQQoFMWLRq3VxV8NyGkd6nX5cs2PovQ1X3qLx2VT5bnAsYNtoeMQ6LjySkD1",
  "key3": "BCe2oek5nBeYNoquRsHthFUHDDrzsmw2YAqdv1UHCPvDCMpjUb2HdaYWnVPV31bDT2vrhW3juN5mXsGbkxY7zcD",
  "key4": "qy8jSbLJjWFH5nq9VTiWiJ6NiqUvKN6pAkkbwJgCaMDfvDghxK4tVNuznY16sxkXsJ8rNMvjSCtJVUr3uRP2k4L",
  "key5": "2jyJ1peRYtAj1XeVS8QG5Ww8HJCFiBVhzh5uKjdizicB2tvwT6TEgRDis9tPRgQCU9rk3gF7i6rtHcaZXTQiEbaC",
  "key6": "QW1vZUAPEE9rgb1DHKPWBH61KfdFaS1WgMZ1VXUCe2xRyoVdqDzRTbR2qWLhAZSTzv9h3imFpmdK8gjxLfirwqJ",
  "key7": "3ABUYRnaWgrRPmPqxKMRKwDKUZcdCFTqKhz1RxWygrtYA9PGTHKBspUXWGVjBqMHUoysoa5Zb7tpqojxJc8A8QYa",
  "key8": "5AW5d1qr8aovtc5YT2Zcw58EJjEzNA7PWqwLPjeMGHUgFkRBJGDQ7dSkLrDV8M6NTw695wDTmiwTZrDA6o7TYh4o",
  "key9": "2rJX9robngeQXDcRtJiZZu4WQxRnwWvQRuqnNMVNEooM2aWnoLKZvCxHFg6dFuDxqVShGPChbKPjux3KngZWNt1H",
  "key10": "3mMQCN1Zcf5RHxT92kFwBfdsNjCwdkzjLMhRDX9bzcSGcvKLYwy16gmaXH1tP5LsiQc6Hjju7B4Pfgk6DFtgAhUb",
  "key11": "UmWfGzm2GZRqWNQUQiwyiBtZ7VUKRehgpndX1gyWsqtLkfgCqNYQAczTARGxcJ1qLG1fH8hcv4UJKu58KjWVnb8",
  "key12": "3rsjhy415okMqV8haCVsFGN1XRfhAZLMrmYoRFw4psi1XUvcj5J9pd57i1QD8PbpnkrQBPxTX7SaYmdxijfdKnej",
  "key13": "zEC2zYKzWqQEuMQ6y1f2HLFGCW4jzSKgvzzhQYdvYACjyA98ZpjkAA2U9V3eqR9qj7aXzaAkwf9uFuTCEpbLRHZ",
  "key14": "57GrdgAQyA3z2LT4KwbppnF6N7Hd8ZbY3JY6JCP1ChDAkzKuMfGarHkARgNovSx2bmBUzM53Y6eJeixV3d6coqPC",
  "key15": "2uSEmhDkZnkfhM5RdUhLiyNvSw5Zz1M1xuFcbP3niHJ4XGUVwP8eBdP88iYSpoARZ2Jrc2463ZbxLk2QCAf5mdHb",
  "key16": "4Y7BkxNdtNjKiSYgEVfyC392wgahf5iZ7K6NUvu4pQqjvnfEJGVaLEz9m4j1PDGtDDDhicSZ9HaurQmCkp3YLh4v",
  "key17": "4ThRLF5ys9ygsxxHr7LMrFW2efts1YNS6sKxLo68fxDYcgz8Na4ZYb86QBovzqHfw8xiTEhGcCrpHVj51GRftMy2",
  "key18": "2EuwsRzqeM3Ji1kVpCgp92b4VmY1CjDMFTqFnb8pms6NCSGXTcbj2YRNH3faC2z7FTniUhJkioCDyVY8wVUwJArM",
  "key19": "ZXH9vzfgQKLHPABLhaBEBusfPe15Ray6TeS4xsrb8P59tGKuazbJ8Dq74eGJ2Ev8RfsKr5YMFBa6PVqiBeJdouU",
  "key20": "2x9hSbZVADzTViou7brwhgNdF46fqeQH7raZF3k7uVpVsLQdsGJVb41fedtN68MgQBBJ9XEb5SiHANmXzfvf1ERW",
  "key21": "2rWT21uMV6guWPjbAT2x35N4Hm4STSSkPvT8RpppTL73AQT4GPkSs5LWExQno7yjJpZsFAxZSjj5PJucQAvKDQH6",
  "key22": "49yv4kvkeWUhHqLv1YPxxFNRoMF1Mtk1TMGEdyfDireBhzPFH8kWaBx7Ld8yqcowyF3QAM9zXLak6uS7tVxPBFPf",
  "key23": "4L74W5mosTnBVz8fKFifYboiF8ugXoG2ajsbZH55gTPxD9CdZPynkYRDX6RWzgjEejcEBHkZvhvzMZXsP9SLbTrq",
  "key24": "5k3xYdKGEHNecVFN8DRbirBDWq7BGgnjuXeCbZb5iQhdzHKSDdoXfcc7nq7rD9tHmuCeB21ZevdD5EKgnw2Si7o6",
  "key25": "5nANrQqivZY83FywbvKNMZ9Sg5quwAqnqcgs5D4AmsH5bA5MtQbuFqTZ99WFWb31X3yb1hbwbNgRNHCdWbfrdFfe",
  "key26": "4dmxMr7AxnE14U4gVaJ6dXb4hxaC4Yu1wT9M1KLS7gnmgHmBsPxAVsma6mW4pVN5Fx4P8ddsjLDu1ZhwJusiGNdm",
  "key27": "5eWwbfGrKg4rCfvg9HVkycqyQRzMN4YU7dN2KnDR8HKKkXp7tUKkB8G8txCSLPczLPnkVHmk6APHgthKwSfW7rBe",
  "key28": "61ursdwCngxqfYFfBCZZWBEbtAZ15cUdFz4YqTJNZjq2yzKZ6h6mMQLhfx6T6PT75gG63wkzTQSUSyYLsHZd4RXE",
  "key29": "3cHYUdBvRqXk19g4A56VEr1euWDGWt8yeXKaxhY69TqbV2b8mSo97t3HDzaKV3A1CDb4wZEHMBWFzgVogyTveNJa",
  "key30": "5KbKhiUDnchMnP2vucGU3z6cYMUqjPz3bNKWhrATgPZevdKgNg68uFFmwskXoyfg5e6wLjbmRrWyjXmaSxmFgAbL",
  "key31": "5s8KteFLSqf1qwtZHaNzDbqxLQn1SMNeJbx6AuxLbCm4UhJabHsB8L9fV6PdSbGik5irYFd2BWrnmXdAjzRJafQL",
  "key32": "nnd6ZzhPP1YhQdMezSjAhpBHKahTHYrVrLoLDrwndSPteqnBV2YwLTdCR7W7jkxdXUkz68GifkTA39jyWAfenc2",
  "key33": "55qhb21qXBaeftaNahm2QfPafUNfmKcd9yTtpFiS9TMrTQFGiGMVTd5CNfBMfEibig9junqz4ZjL1ShEANBdKmba",
  "key34": "23cMzgVYvspUnKBPMGvdnpk3Sm8PB1WPGwUpZn5hkaS7iRe8rbwBvCtWW28Wu7cxFQswtbcQKJTmN99SshgqGwXU",
  "key35": "23uhVNktRwNXRFTa8jmYuKWEDRPY8Ws1YuB7tHHAmptqsJbm5QdJFgsHYm3bKj8ZjvNVyZL5ayfneGivopE2xBU5",
  "key36": "2NYXG8Y6rdQxMYzmTDcjMQ7sMMw2ZWFhk5jvLiPsYXZfy5yenfoEw4tJS1T8rF8Gh9ieBoBVbVWq9h3BTGy6FkPP",
  "key37": "5JMsRUVRTYPHLL7eLEs5TCr7BCsHrvfpphURmvaiLmxxW6NjkiDdHgW32vMYNFghHvj9AMUgz5t2HDJxdSYfKB9C",
  "key38": "4rFX9xtBmgCiur8RkLkXWM7BwVJEXyVioNiZFozFKVMy97xnkU8ktZ99njV2VJYUqdXTu2nhGX6pvEcP8msM5zqH",
  "key39": "26LZomv9JgEfk59GKinmPTrjQDgNAciYpw8ioJ9LSCegr1EXg3Eyjg6hmXBPRBcZEE4XDazg5TExKeFiKMzRWiid",
  "key40": "8sFk3VR7xtct2WkGCTjBXoRusLakAUYpYKdfEdrQbZNv5hWpJWVYRnjVYzVgA1hzbodFEppBPvofp11GWsJ9Yoe",
  "key41": "2qqBMGKYPhPzTEccpp5zAoPJrzUXG44C88d6k654FLXdcsEMQDUupZuC8YfKbHecdJQHxfDeda4G6Rvm7EfZGEfZ",
  "key42": "4mrMMtT8U1PL64tziRYNDMMaAQi5tcdAPptxvR8dLBgbRfPyuMojHu1o5ekvDihe7gRPrCwoSW9bzcuoLuGbE76w",
  "key43": "612fbG4oPDc51LC6XDPBFydG2Ujd9MEjAYD3HV6ZTS5fJgc4aibM7HQRcNFpdyDy6vFfwn3fWMbnwvSE6kEQJjVf",
  "key44": "3J6h22ejzNCLXFvRKdAuwh6JrVL7523V254qcu39MCAPkSCame66yCcy4oVDZRUah5fBP7vd7sqcTkxHn4NoByVP",
  "key45": "2iS29LKYj8LfuwizUGsMtMZNyK29bqV2hca6KS7V5AesnGa42v6f2oGJU5QXdnipPUEH9AWw2nVZLnQunAfL9QA4",
  "key46": "4nfoF3cigrvvbM1zAcBPQYx4Er4khs88C6GcpvHhNSzu9PLrgv7jQxS62e3jKL1Ep9C8tibixKdi2xq3t3se4FwL",
  "key47": "5uwV6z1kJmE9ae2gsSr7cZ5QMnKnzFvmrXhTRS7hFw1i3EftJoGfS9gy6GnhnuFH9jadsAHvtkNAugWnMmmGA7r7",
  "key48": "2fjfDPpe2jiHsesvMUjHaAWb8bGD5ehFSzDGwb1wDW9ShzXMkrGtahtHcNzTcwkVHRgZyF9gRpb7SfVnUQfQZoyL",
  "key49": "uys91KYtZBSVPhzH4h8q4VxF67HguEgfUSoNeBPqnQqpo4SkqEWppQry4WAjJ65z14VMamNeQAVVCtHumbT9GUb"
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
