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
    "3Kzr5RM1dnw2v3WonQTCLHdsywwvj8tcpcn4bEahCyF1Trx1gvbxXsWuFBs8FZqpuyk7eVxwrLxZwqLHioLLn66h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CZiKJqzwSXt2kSZaPURB4quZVpuqjxehzX2em8LNgskrWVk46DcXbcjJqrtHGqvP124a3Ss8dLsjNsjkW28tZi4",
  "key1": "3t97LYeh8FdaWbAZ4SJcf9qFK1sbJRUKXHrnUoKCe5WJ6xjuJrkbd12GzszRTsQ4uJ6hx2SXi2JAwDwYG64JVuLF",
  "key2": "fwtNtNczX6mvpXz1Uuk642EfRgJdv94PKRdwHsXPeWn5Rtz5dJe6UxYMZFqFv7YHNzbKj5Q4PXRrRYMoYzYEACA",
  "key3": "3SKGJCzWMVwouNN8FPCPhquJBFiZtPgmTzwpAJpQFR2y4XquCf1Xqtstt21W9fTPCrh1XuXRQnLCjar3LMfAkC1q",
  "key4": "4Qu49oK2QcaioDyQ4hJVbCgr7X8LugAP6EJJggD8zNzkXmiagbXeZAuY4JQpCYwGp9Yd4ucdjftYi4k4Br2ZNXxH",
  "key5": "2TYbw4LJwHjDMi6sf1kVQSt8H1UPZQa52kmrMh3FdWugrDhzAvs7XnJkdtjgAPmwkj7Knze4NzWxVmkywk6GUMgA",
  "key6": "2Mz6Vj4Sj3MEd52YMmyAsh5ChjJzF6XUwE5vBmFhhSvGqK6tZETVaPJKpjedCuXpqGiN6zn2WoTpaxxhjdDHeie3",
  "key7": "2tpknkm8tCkdy1X78jM53xBRgQ2rm3sssZLrr3qfJ88DJHtNLjJk6jPSjnFrceE1NWzEwiptnwKpawGq6QDjRkjZ",
  "key8": "41v6AXWpJuJMEYz8MmU2G57RXJtLaxeA4qhDduQje88nXyeLeseQL8YzdSnok2KbUTvFfBk3qp5aiBKUf632gE4e",
  "key9": "m4jbuamUG9aFeVhxeCZEEmDheJ3vJQVymw7TKtZ1PXCStDHuDmR1NAT6fHJPm5MqUNXCmSEsLfztE8xB46LtFdr",
  "key10": "2GFVtqj8kEGBCNqqBVnPDHZT8i2MQ4ZSPUQsY7XrcTLV9EEK3sXXHeT71WfrYvw3pJifnQe6KWcf6yRnYpk3bSkW",
  "key11": "3iy4KTBZAUCXgmqzjyvd7D227YtkDxnmb2kpV3K7ye6zdNCsfBnZeNmo2b48b8KuSWnYJE2PKhnotYDk46wUZv3t",
  "key12": "31imNTUf15wTddXdDthh9n86qLrB4jXXouyqLkM6Sh3etvsMLJaHED7Yr9odWAYj6jSsrV5jBXXg27qEWtHE3UAG",
  "key13": "3bKWf5AkHrPMuvQJzwppyFbjnt1oGZQ7pXMdhXGGLBQM6w5irQpYgca2RRTWHrn8aSLbkbj6roEJTJjGAvqt7iWG",
  "key14": "5FqAXX6yMWP5c7yDNewNpvFqv4VU8absSLNcpUtnz71gvwmL4KCHF8Cuk7Q2oS7PVyAeWbY5hXTB3GcaC4EvvYAf",
  "key15": "4gRg6uYyx4AhyZ84DftcmujgBdZe92UyGT8bziZZKAwjqAiPhB7UWPryAnQbWe7CZCjvBZTwcjZMYhQe188yknX",
  "key16": "5AgYJjhmk7czMoZdEB8qVWZs1h3LfzzCw1srEDbK2anefqYH6o6yEssPWe6BUSzPa15ptq3XFsug5bnvLyBqahNS",
  "key17": "3sounkhZ6sJTQ63tfSVnqY1cGRoLxxqVTMaWmaqtHv2JeYeaxXfJVWGpcUZ7qQY2dZAQnT7iTYcDJ6rrNvcH6sVG",
  "key18": "2LCbgvSEXgRPomChjLU5BuPcDAjo6xdgeDRmWVnBbLc9Y1bxyCu1LAAiePmV3gkZQJUgZDdMRt1EV3ZUeTM3L5mq",
  "key19": "5M2WfQprRS52xiLHktCYQZPtfDcsPi2LN8jAs8hp9TBTHc1wTPgSxccgw6aFyi4mDHNd4vchgiiH7dT4e7KKJegi",
  "key20": "3RXZzYrNWRHorgFB33cfo83FBvqr2GSFDZVT9xqkScMz7jNGkxzdNPHb4Fpyymv7mMZ34UAtLJpgojRY6iU4wsF1",
  "key21": "C6FKGEitRv7YMeyGKHTqrmVV7PGYsYBPsshDvPPrLM4RswEW5Cqo7o9cPXMKu4iKaMAXdsNRMgscRdTHSBQxUrf",
  "key22": "3uwX5cfjxj3c3EJNg4ZEMzpT3KeCoaznvTVKFe8EfDfyvEquLMeuWB4UKpwDZPTwyBuYy1jLkU2cpg4kBU36A2bo",
  "key23": "642bZYGZn7jRDQG5BQccDoiQa9eD8srgeec8oogWrdzi6SyfNb1qyWuC46o5PoRnGuqwTgAXBFcGHitJBLT3gfNv",
  "key24": "5egwCbHziGqTRqJmwzD6qoUSsp2w9M3EeVDL6CfXBRGSrNN6aMAKChfF7V1qkYWNTG17Jv3x3zyx7kMaiEBYkrMA",
  "key25": "c5BvUcsmkfKsv3nhjTmhmSMD6JcDvUyGs1SgsjfgkgPTbgFWoPEgCUBpF3q9sxqmTHG7PMxLdsQp73DkwvmRcby",
  "key26": "3LeS83HEmcqFnGfKQzbs1rMGS9rUwqTWgKpYDvoseoN9VMsCVmHWzq3shNk14UM2qQB4bYzrDnJVhzVo4uzurzKo",
  "key27": "32eoPeLPEkNYFgMg9Q2NRz1BPKSq76yMwv9k76pyz1hLf2ZUYf9JHw9SmehqquURQYAZoFwg3LUKpbUfjw7NBWn7",
  "key28": "5oYoqEgov6Hs6kNk3aDH37MeyU4gFrJW9uJXqX9ZSVDwPeNXFVcLFCedPR4np4e8azeo7vFwNjVE8dTHXFQbHEty",
  "key29": "xCea3dUKbQTc8MS4ACj6CJGuc4Rc2m5zjsmGBe44gjLDinTx4wtMh3zXJMkvevnnf3pbEWVcxFY4DEDTF3JBHr1",
  "key30": "4zN1Dbd4EfC5gKFNTy2nxs1naRSeZr5SMdVzSEztMUFDcc2BSop93tNYS3DWLkGnXSa2F4wRhcq1MgUUjrp3keEW",
  "key31": "2Uy73o7AhD9MMLsXkN4geAEoCkixKMyXmmFeJip1AeZQnrK1ye9wC4gTziJcUzwxw7ReCqWH3CQ9VmSWQAa7QtTs",
  "key32": "1ERh2cKBhn9FrpuTDBt2iq7b7iapR2VvkDDzoZCSyWyBJLC1cx27bUkXr2JYJ84pZSaHnKBUL8y8SfiTYKkyx6Z",
  "key33": "QDZV7ccSbL3Hqg39wbphchG7JXRYFztofm1eSfvzBXw41P8UHW2G2yfGbJdjmAcn7fgjQR6bPHHtVfDESgcV6SL",
  "key34": "FCpBpmp921kkrE1LjbXwigLVeeGtb7Jeg6HqMg1udKDEkADdNo81NdGWrQua75F3d9dFAPK5SFMMMmtrwdZ5MSL",
  "key35": "3RzYSxwpRUeWKa4ZJkFyrU3EDvCvf4fvpyX2ehfLMuuDckUhEUK9rwsQFmR9Yh4W6JWW3ksyAxWZM1VaNao8fmYf",
  "key36": "4EwNFctoAr37VuGnvCTkJZR8GfNjK75pYwtC53ai7nYJ3mNWob34mFdFi3SCTuL9JhHCuG3yj6VthVsZB6cvZHW8",
  "key37": "DY8dRithJnC9F6RH9dT8RAmpzH7agdkxunuWcDtrorQF87rrDH3FmzZJdqykt83CgrMMDYg1pz9tvixnUXRZCcy",
  "key38": "44tpWS7SpXb415taiXmfdwhwF729aeKFytoRix4o8b46t5t1wmy5j3M4pwJGbEG7hY7fibiiB9A2vV9g6GwstSFt",
  "key39": "3Xi1W9WoGjdDdHjJWm3R1xZ2rvU4kkz8Jx9dForPMuMcZoSSqfrbRtcaNvQQm9NPu3TLqrR8buWEynmbig1F2Cgi",
  "key40": "rG57niWahk1crbSah4g8UUA2kBZTKVf61FfMruRxLPjJxaQdxexvSisp4rArF9mJSoZapphqXDgqF3TocihisZB",
  "key41": "o27vMCNhTF8C8FRwTGE1tK5mwwitQip1ry4kJjjuTwKypkCgfLjaJcpztxwb6KXy63EE2CqHAbBvFaCgknN3Xga",
  "key42": "2nHhQn9w5UE9cSWxJnEMSYZMwBe1mJNRQtipUyPAnM89V8B9ebNADndJQnqvekvoYyeAxKRYgrvMcv4EHQ34LWmx",
  "key43": "2yKc98S6iTozsybXiWc9iFEQBtxdUXDyLerY1UoK2fJeRuugEGkyKSwLeoe1VmwrdVmB1zFVbY4XroLt2D5AuuXy",
  "key44": "rKCQmWYQro9n4A24zCpDr7cUkeggy9skBiiLxZgQ7D4UViBpuAUY1qFmc1Wekie1w7Vt2APTmbctHisVJPP1MrQ",
  "key45": "2yR3KrzWhRA9rxrRxCgSvuycJsJpo48qZu7QLSEGywMEEzS4PuHZhFbHwm24CwYEhEfh1GNgzxYddBV7HoaCowM4"
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
