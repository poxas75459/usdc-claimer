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
    "4qmanWzNFcDtQ2h7fafAM2XKVnTo6MkCaycWRdR7towrCBeJBHLLa1Ej5NtpC3sxyoHdgAEphAhsWYPe1xkRrEtK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ai7mgWp8r8DTyckz5dh8jp6iMrQKvGE6sdD1DayFoGkUcFxrAQZeQnNJqQysQ2tNXfUghERc43LuXBWQWqrRAV7",
  "key1": "3jHsvnzah1XyVcTrJsxeK5M2ewp79fvZx78SbEKHGaQfcvm1MsrjTK7XCGVeqt8QpW9FdkBNZP62TXpmn45av5SC",
  "key2": "5nE43SS3MEwU6qRFn1b67t6riXz6CfHcu9VCJYdx5coz3M7Pn3Y5kMt1cMPZ8vCWrbzPcxDRRy7ca5vYZfx1gzMW",
  "key3": "5SH4DF7dzKTPxezpwTQDk6HbrLtYcQBVN2byLRvr7sQ6nuMjUYeJScrDL762wMyT9ipuP8CJrYqAcPAEpaS8m1t",
  "key4": "3DkBUcxHo3hbQirZ4z6jukeJ5k6GfKRzzVqkQ6bkJYxakUCWJ5gKnVpgNS2End7QK8KikK3UMyE294AibnFz5YdC",
  "key5": "31prLy5KZYzSQTC7eiG48GijuFBypx1ZkxKqAFdDXyge6tVanbsqX8hvRCDjpqoUpdairG9ZDgD4GA4KN36NCjXy",
  "key6": "2hgq9uZj5yXC7hjGuqoauPK7x9h5CZ9vGfxA9t99weZsBW9ao2QK9tBWiWLGe9mqGHLzvv9BDnCgvjWki2JTPwaX",
  "key7": "5PWJHd9EXguWg4iuBMGL3WWy2pfzDfkD54bgGTSD7eUWhcGZSwvKUFke4zaxGhqi8pFwkNyX6V9Tyx7wTusqKscs",
  "key8": "4xRjbF5LoWyUH7x6sGD99uywR7xtpTh9yyTNBJcpk4fc4bivLhFUenzTVMiU1JxfnVCPdFK6fgHbgWn3gMvQVFR6",
  "key9": "rk3GrYjb6NNVezeiWmo87pzf1Z642KmqtXK8j82r1bWGsRAVPZ2LijpZ4mAqDyDPpxnRtw7UMHZcVDVPNU1eyNF",
  "key10": "3TPPbd1mZCLZZ1BcNS5zHMe5t1zw2s6BQFYQFJ6vvaYAuctGt51sJ9way56kszsY1ktx5ViKaVa9HRGXZhrJeh94",
  "key11": "294bFjPFVmFixzBX8qVJBAzbKedw79c7bThVeyxbq5Xw7VvjdrUx9SDrn5FmZBPrFBL8me2aC1Lzo1At8VxbEUaY",
  "key12": "5E6DYzXM1Y4zzfssm6qVGcib5byGrrTJrkXgmjALZSyKYZeAuPZvAS94KLKevghAnkshvfpZ449irrKxxkvfFFzS",
  "key13": "4uyfB4xmckHhad5orsamnCsE8YS34tpURoK4h2LH7zUfG8ZLRXd8rGLHayysSFusc5CawfZ8V94k7bKHPShSAkjU",
  "key14": "42cnNT4CF95KBTf3PYDHKb6qrQManhjVt6c4KohBAzYo2HeR2pdjBVcYvR9RiRVo3RKmzFxawwmyHHzWsFHwYqbJ",
  "key15": "ZRuo2EmCp9tW6hPihopDh94z7A2LKVryUY8Qr2VmXrrMsV6c9aHu24XF2vLYehLzAHfPhvXzpTGMrthUHaUMAMy",
  "key16": "35G6bneHYjUcvYQVdMaXMhGLAveZ4UCgwYFN6sAGqG5pn3cxVTmjn4dvNoXbrGdai25C5aXWmcyz6mTuKwS2bJdM",
  "key17": "s8kk4LFouqQF4ZQYXve2B2SVjj43k2W4TvvtPPnccz6RvtMdpGjCKZg3gtrj6YFhiP77wXnASv6g6YfS7PeJLmH",
  "key18": "x7LbwrRmA5SKcLe5sDn95k8GtJF8SQSxtaaDk9qzrntPVubMnrjxEFxF2xMBmgAavwERqZeMfmxN7ohyvucdgpb",
  "key19": "5ebCKVTZS9DNA2yLkbZ7CEgWfhFyCdq3c6US3KF9QX6tMxDpqQKvEfU7odBi6jgmiJYfpeADezzmPnkPQdVrjQAi",
  "key20": "2Zsy699Z7ZvzsiFHpqAuBxFMWSAsFPsgdu9WA6bQaguHCvb8idn6zvVakBaALhCzQddbFBFdkC4cWpMrL4D8j1cy",
  "key21": "3Baok4HCo4QqV3L9fPyTBnAdrbd2h1q6fu9piw2d2vcyoa5KgZX7R5o6FTTin66wwi8fKd7vuMkDxXXGMLB6vu6D",
  "key22": "3SZActwukvxkjQ1hoWAkHjxsceWr2dWCaDnp3eyn1BeoMWr3stBn2R6wmdo5gJPAYsYqWQewUkqjJpui2aDJT9au",
  "key23": "iZ1Bk1WAiRVyhWbB2Ly8CUcuNTi91hfFJBedHe7jScJwJz4gJY86LbufYtNceHszjrhu8YGCmkWgUc9WfajYGeZ",
  "key24": "2ap2B2C7V7Qbx9xrw8g4vwA5LN27suPAu3kfv4QkZzzfvcSqmrJ3koiBcWHPhWXa13vv9A7hFteb3RD3BKCafCi8",
  "key25": "4BRQUUCUCv3QK7rVk3YoWzkbXaZmcur3nG9HaZoRxtfVULdhfCSYwkgsTze5kwXEyoA36xJcanxSCnT9EhAfx7z2",
  "key26": "2oCzk5fyX25j6mtSWszWGaeaS2AJeU9rxfAG3dafW8XHn7CSpry1bMT8RMTH7Jm91nr7S5hGS6L6Z7BDLn3G2uBp",
  "key27": "44c8JUg3sKavH4TDn4CpPVrzuoThyRnZEcKA49ka9SmERzvKjkzhv1c6YuTGbpqMLreF1uqsn1f553RkjUB1wRzS",
  "key28": "4WrfqhSBJJz6XnDxY7SYPmNLYB3UJrr1F9wr4fDyyS1EenfHJ8THAjGb7eefRmeKdThCuVRi8XNtCXmJnwNE7pKD",
  "key29": "5Pa7teAs9s3exFYpLa3dsYscRkyFdUgWo7RaT28uzfoX26YRURxfQULuZsLmMm9kGr5cCKkPzPhHvoiXgsDCHSRw",
  "key30": "35vLgKovp3ZxnVoY4Wea95AUbxqQMYbuCYxLLjC7f892ysJ83dgCUoBBuFbRmmMWd57dPxwTEqLEx93yKpRFfFBS",
  "key31": "MC8FtC4d3e7wd1Fxi5ex4fMc7oZHjaQFTR5VrRJfdKfiEJHt3VD1FEXySQs2E4WarytydNwGiAP73LVf7fC7KHA",
  "key32": "aQJxAmvnysxLgVJp3BuicjggwzzTEWt7mH1Ge6q6t1o5j5aTFjBxMgfDFhXKxBNMr2wA6cZZmcK8W9LaHqiF5GF",
  "key33": "3EENgFBdwtYC3cFQFuwszvD8MWDjfRJpmgB5obf8vr4yPZc5PoQQrDas83gsUYWDLm53rdKX44PxP9xpGnJaEsv5",
  "key34": "5gaLNG3NeYDCzBx6opKg9vNhp2JQWRwB2yuNBi2EzR76HE9fYFT2DaNHqeT7dyjLfF4XxJeaLtFuBPycULhNq8ba",
  "key35": "3mijkbVHEwNBi75WuUsJ8nvS77Haxf9mhvdaBqJ9QAgyi4EDdiKo5wR7SwYffdadKbMdtbDWgH9y2tLfnUNzmnnS",
  "key36": "5pzjHwTcdz439GCRrDnhrSpy5EykynzvMVMWiGjiN7wUcYBM1KKU6ZwMqnHi77XTk3y49nXBGfctD6hM2dxgDZja",
  "key37": "2DfzDTMRkZppVmVQ66TZYkVsH84cvCvyvgJYbAg7m3fFRYYtz9uaPHVg2YLJcdnmmk8GtyiDLMQHBVBV47BmNC35",
  "key38": "3x9GnueFbmeA9cGU4XTNoro6QoDzTv8zMdQq5MyCuto22ox8uUzDmyF4ey3W2Btj5kGSd6EDdNFY6K5zCG74Wz92"
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
