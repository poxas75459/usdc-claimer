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
    "3TwSAv2VrveHNjXEsFJvs4SiKSoie4WNoJe6KpsvZ5AmPzXfabYiYtyxHtJ35SgRgZpkVyPWvt9sVd5nmWtWz4E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FXxq5uXkCeH36rPdLN4XN1HRXiBZmFn3eyBjq9ByJtbycQc47tZSBZC733sXiSdw5i7dG3Q6iA67o5FVyALkygo",
  "key1": "25mfEYnx6ACWxBHMxrL2aNEAc7S65KXiotVnER8anCMwokhBPuMjibTDeDbGkhQX9dk26VT1xCwaVvFHZvoGKDUE",
  "key2": "4AtpRAgWTTXVEjCKA9YRr48bw6BYbpSLgR7iNDwxKzwuGhUGW3HmhuQo4eEidw4Vjh3bryozJgwbG5SURyQ2PPfu",
  "key3": "5C4JzixJy6vozcC4W9YNXmXW278VDZYDsaUY9Jxj56v1APh5t6fYPph2Br91yrThWerg79P9WCUW5gUFdMA2hyny",
  "key4": "4MB49k4ugmQYPTKDiszrgZceT27KkqbevU4bhrVWMMAq19GMtFwDjTL5MvLHzwBU7GDLdnXpT8oGxjihSwRD4qQu",
  "key5": "21jQuWGy4ksaTgZ9z34L1GhLGYKPjMDb6KgFyQanJ6aRTmguMzdqcajGF9aufvkuqWEkZWUBdE5d3WQAZ4ivy5Wj",
  "key6": "3HydPdWumTeRnRectEbY87TRnSkthurcSvJwUCEzHy2yzEKAWgga8rGtvPr1Ex3N2tGnSNrgH4tiZxSyRV96atzK",
  "key7": "5dnq2TsJsgMDgxZEU8HHx5XWqMGawuVmK6Su2PBDPNGJDHYBchft3TN2CwTUToKJ562HHHJ3hH2xrLY8CAHAHja",
  "key8": "FMFdysXRkxdz55nUcu68VYARDczVt9TrgDKTE3wubk7ezcrRNBxhUtG6FhyqZ8QK6zw6mYdk1BpAp1KkPBx3UC4",
  "key9": "2SzLDF7a2d9SF4FsguumBNoxchFgvsjkr1K5ARfMAfYXgwb1S6383rcuj3BBbKLGrFKJF4uoGqCEKHdSiSsKhLhK",
  "key10": "2jFhJ39SnXiwXtqmj6g5yBhrR5T189LVkLKtMUTWbdrHUG9sV2AfDZt54N9F47wZrSjr4LYSzXJwmE3nv1MycEnV",
  "key11": "4uprZ6tJWaGS9Vd5SY3i1WuiDVkx6h4WFvdRQcKoAKxu2H6t3V1fNbqGHBQX5mZhWYMD3xv6gKf1q2rpjyMxMQ5j",
  "key12": "3umVRAxyRioXumjPScN4vfCjbqBdA3JstcKMSBTnnrLbNtLFH3yjtd5h1MwxGAnF71AQgSx58iCs8G84X73EF65c",
  "key13": "2ufAREUwMGoWx2YeCSFnQRgQdwpngGVgJNRwPbjwCjKSxJsPsocVDYiNfy4hc3U2CCh9ouMcnCrJNye6rzBpCx2X",
  "key14": "3dTs5X8HEJA3f8Hxjibf729Z6Zm98HA6JACMV26MhLYRyqWgmHpGJWt2HNP19vWf2RFLULgVTMU7BcrgvK6AgWQu",
  "key15": "5b7KGZvv6aW7sWAgn86fhtwqBjfr6zTdLetLiy3f5hCwwuVCRixSk2x4jZ4WayesuyzWCoheHGXJtCmUg9V2CNgo",
  "key16": "kmy4pGGYiHgDKoX7uDPZeNkCMGJiBxx3jybuc2XEi9nGSKnRXwY2yNAyYj9eGxB7d6dQcpA2JSnRFm12kPbLkxC",
  "key17": "P6EW8hwG2DS24NsMVQaaBhq5DB21sma8oCv6tLias6TNsvUFTsqqmWKHGM9a3GTz4EwB9ScfbkNHnsiVbNpmibe",
  "key18": "3fwPJJ8NDQLymNPQGGvci7fFnNNjYH61G7sN8x3inXvxVzZzkhEwMx4s7HMN44Q1LePpAMkSpGjPPvP5yBLRtHhf",
  "key19": "RJqJCmpXHBDFzCGpNQVDosjUPAQaCFAyfqPYqt3J3GFqacq6R9Xecky969RQzg2WwSiuNBBrHXuFzT7tcffZimZ",
  "key20": "2Chvxmbh8gCCS8jVN5RzHJ5QSMFt4rjuMq25VZAGL1pNz2SbMtW4H9YF28LSHL4HgTwzUVmFuahvGLj8sj2QjeAU",
  "key21": "3Pc1APiaDbxSY7QnCsMJ9adEJLuNB2MQBkC842Z98aG1RSYZkbvQvmoFctTDoctAY2RNdnY3BGN9m7gkX18RcQyh",
  "key22": "2hMsTunyZgdy9BYxoaYagdHD2nSKUbeEHak8tyZzfP69ZAtCUQZjGrxd9MhD3krnnxSbmiRW2hvYBK2XKiZacazJ",
  "key23": "2CoXkctviYKQGh2kkKQXbDci7WtuKidLDc4TFHBWrF3V1XPUCJDSfxv46u9P8NxdeV3BQRtSaxnWWFZDXVt2V9S7",
  "key24": "SXuLusXicgVDQJs8NvLroMT9tVsMddNN26SQUp29VwSUw7zB94FhCNmztsXFW41rBodR6v23hS8pceQkZoAsP4q",
  "key25": "5SsXyUSGtGutgVxuLKKMwLKZqWtFTLBp3r6ZgXpxWQKXScpLzcY2yUeyafjXCh7PwwRYTJsi9g1zDNMsFP1qneKr",
  "key26": "32nDJjwyh8XUtP9rrButPKZx3KtwSN4HMTKoFtgWMVMNKV5vX4JN3STsRnHY4nvEPZ9ExpqmJdAAYwrMrEU6o4qB",
  "key27": "3YwLajd79ZiqDiHShVZLWZr9gUKWWgk7oLxj8pbo7pJTaMLkqQMiW8sUh9REtyAv1tdkTVBH6rDMai1z23GarLYe",
  "key28": "256DtzeTyG5rZxHypqtZUTcogiEy7uAttpXKhKJDtC9ZQuTtBGaXbvkxXVfxsBDESora1LSFH16aHPR8scQzP78q",
  "key29": "2xr8fvFMeTuD16Gf5ZuGtHZvh62Y319YQh7wnmhs9LhT7uTiYJHCAV2XXVHYd9hty3MQ6JhjUUshBm1NDeeawJNA",
  "key30": "5vwQgQS9ThpmmLAi8P8mZMSTjd7XrC4C8zccGMPaEkdWsrF75CmcbhEnNmz5GhMLNevFsPCqxV61SPrCQNZ98orc",
  "key31": "hwMcDXrt4pdcKo9S38mMMbNzJvBWivxryEZgwH2RB3cci46EDznzt7TzbmfKvhvnAtCssGgpSbyBmdBYiMwadDv",
  "key32": "2zS1RyGLwaAmZ17VPpttD6fjPe7uzBDSF2tcDHoaKziNYA5v2Xenu8p879z2kxYRSi7uxQS76c1XVsFY9zi4iWwT",
  "key33": "5Kd7FSTGMtgYqVSYbiBAVsF6ZrHg4po585V8nAV8VukignDKiE4DayuVFAEEvAVjZPbjSiTn3edsGCn1H3xroCTS"
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
