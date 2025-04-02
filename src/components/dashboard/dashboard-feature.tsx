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
    "5j6PLL5Jr1PnNLgVCdWTzDw78hBkn9iNtv6PBchPD4Q7rV2CZVHHoEyF6cXBwq5CHb3j7hHNatUPJFoNBbJQsY5M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HAEbXjrngA1iSkeixpnUioF4PCH7zz3L7JZkcwfAHoArAf4KgcVxzFRRJywpiFvjGVpqwmqLh9dTaJhZSQ7Q8Wz",
  "key1": "3Qvaf9qgukyDUEiRhig51StAtdaFwTjtJH4D214PYB8fePDQ88dhAzBJHDcYgjzbZd6uGg6ViiSRCzLWgjdhVhkp",
  "key2": "BpcmwWEFKw3Y4KJeRVuqFP5EGgKq1ne9wedFq9PE3w1C11R5PSMd5iGMpBtDtXd8hRBJxCEUT1SDJkMnLc8RCbL",
  "key3": "ZFachwa3ZcLYcN74XJVmPN6rqihkY9k6UgrEjy9KtwXLzn9SKxBYq4LKavCsYgfGow7RptVgmSQV73YytQCzwRh",
  "key4": "54DByXweq2vE1J1jtwCmF4syZRj26wGayb4ANsRdxQxVM8W7tiWbXMhLFdDBnU1cjR2P57A5RAkGytQmghpyqa8w",
  "key5": "VsqLsxEYZxt1MV94xKC5VJhc1CJhF6oNADwR3iNfLMsTQJ5rt8fxHSKdx5GGB7xSHt4iN2Be9P9y3tc9wrHjkhg",
  "key6": "4VurzNRj1bQwNhujEDi7LNiUkqdjcbUiyKtxBBQauJAkM9pU8f6oHvLE4nhstSKuUuKhyMfh8tp3gMWN3BPUw1fN",
  "key7": "Jd9aY668RaeG8mBjY5v2Wv8WHnUf3QsaZ2dJThpQHQBdUvXQib9RQZvL4w9AVXoaMFNS4xMY6a2o9GaG22CH568",
  "key8": "39NVk7k86BP1BRu9STaE1YxPWpxY5CZn9X68TRq2vWXUAzNFF6xsrCDJWVVsFggzDriZMmLqupRts8a55uDwwB7R",
  "key9": "621RbD7agbJRzjknjdvs5fmH119LjpykuiRHRDDtUQ55n1vdo982hk7fDCMpXPHv4yHhboXnoiN7Cum58R1YUNjV",
  "key10": "4j5yG1jNPuWZpxXfVv55nuuwCn3kenDnLwTAPnmiXn5E88xRWTZzRRvon9sexruMZEfvH6vpRqi41Nswd6XrufPz",
  "key11": "21bA1oxfrmUstynuUQevhPB46583tHVYbyej62afUMXLRzHyGHXH6doTjF7WSBdKaKai9A67mLaWZQhfeu9xJ8oU",
  "key12": "tnv73xiDada3xzjf1nGU3fUofZp7BkxaRN9QztvYP794AA3RB1FQn7G2xXWqhofG4fmWmH61euRVbrkbwJQoyAc",
  "key13": "5HPohytjXHcHvgxccujq8B4qSjZh5hcWEHVgnV78m5QEYVyNGqm9ZvfCVAzRSuiNanht9pyD7ujV34UCFYhcZ32F",
  "key14": "5buawiYgGG8LAhj8XoeQE8H8j7ETJs6MrPsBCuCoJD2ZhRqi4dMKuPrEFQ5oGenL7FJswTvdocjgNNox8BFmFX7e",
  "key15": "3BSKyPh4qZ6rWcrnWKfLiK5jw96Bh6QuNtGWBUVnunZWaVD6H28t9nHHXAxBGJedYgsVZ3NAi5FGnD269NjBVwSZ",
  "key16": "3owgreubLNBahSEExU4sNwnZbRCuHqn9XFyEZQXFMeFo4L1qTBKJwGWgcH8ZPo2pEPtqCzDz19gcoqsMvNKQbRz1",
  "key17": "36E8akk1i6nESatBf24wp1uNc16w7JxNqfs3Ne3RhtJWe8WCWP9qnQLYkcxU7HuyKZaCqTfpaTokTi99GZ7Cr3Sm",
  "key18": "2JRsmrNmoACwBiFbsy71eQDAcruYWtWgC5iYtBKdvBN7eTvSY9GcYcKnXFuJQhujcuJbsjYHxKdC5snxkLvqMWFK",
  "key19": "4NQzvhfVm5tnEpDVUwHzPfVV4MTZBeCXpqCcZzs5i9YbGnvnmEwwkgenBXmjMuqVYpnKEfnm8CoQKnQjdZJByhQK",
  "key20": "4j5qTMJNCcaigiKUMpmQyc4CUy8ey1U2QaHGamekbHQvfq1wAjC18mjCrYxd19ha556WFiiMt4Peo1rM2Bpshrwi",
  "key21": "suRCyp59JYBz43VpgNYC9w6PVn8T1tYb1UDvBhc44xLxJLrgBjzpaqxydwgYPHX4wrr9DPYsSy8UccGepj8ed6N",
  "key22": "3iJzBYkeTxxnnSsM5uxuTn9PPqxmNrL8oFWVJRJ7qd2quRUrxiEHdB7sRxjNTm1SX7eGyHr2Rvv9T2k5jhZqtf7R",
  "key23": "3nDVVXSDqaQaGRVuX4W5nN11GdsbcsDdzvern3QW6x4wWVsenmDfkA1CaYF6Q4VZMuUx7n1QhkM2zAJQzAqveLwc",
  "key24": "64cRzjjz4hmttx98Np9kAywtg7daguV95XoWhyfKEdVgz8K2nB7pq4fmqGfsSzyjpAcrn2qQzNyMS22pLVyDUmyK",
  "key25": "5x2JUBkEqqcgGzgsXCBdTLaniQeTjUGBg7K5GfLQ2oMMuydBGPSoEeNtd7Mrf23UTjmQnKMTUrEU4xSbHW8ZLLjF",
  "key26": "74gyhojFyrJ6K35f6S9EpWdS6qW8ga3vYRHY3Hj7SukuCFVKMVyRjWBTrWwSnq1tRcrzzSFfiKZQNpN2KdXhyz3",
  "key27": "MMufqwXhuDJMbn3JxNzkzee1chzDRUtWsaKBkHZv9CN5wTVZCEfP3cossHGHGXkq9XPd8KknivSAhm25EcnAJ4W",
  "key28": "3cgnmYVUP1FBLyxwX4JvVzC9gEGVJK7D8zMkF5E2PHRZL7p7vWgEkRMRc6GvDnmxYts8HyCwWypVQ5VFVHxqaQY5",
  "key29": "5qHgu7xKxWAt31rcugqMtD4apDVb9bXLJ2Ez8RdkQojv4WdjWZckVv3U2PfePywgvFzzWuX7Jo3PRjTwWUymFBX9",
  "key30": "B16cVn2soq7rM35F1HrR9f41FMUXG9DKJEmST1DVt3o4H8DmqVfSNCoCDbEu5eLNF7XqLTaBYocsFMNSic1njWX",
  "key31": "3xuczM1w1G8jpXWU9fV5vCVrjhRaZQka33XPJ8sDs8cy24Ri7CTTkXRB1y6eYnWKf89iyvC77tAeYTACS7XomKNd",
  "key32": "4XSTgSmodpjAS8Bzn7RaunFQGXCZQa9tbqpTYc5wLEyETNDg1sgxUwZamnsiCbZLF4z13iPJ6Kcd7PaxWMRyMTb4",
  "key33": "4wqDNKzdb6HNgX8a6MeWUcfePUh4DFvX9un2ZWf61RkEbKkXwwonqJ4jXbqXrSckTQeYS7d9yAjNMGFmZHNi3DH",
  "key34": "5t3syuJMmaqKY8VeXy44AqAykpw1LFrZRdTjfVtqucSbsyHuuG8i7Nn942rNpA46TCb7Bsx275wJzypSR6i5uH8x",
  "key35": "nFkGhZxUnYerx1afHPiGMp2hASHV65ZqY8vUycUCBa8b1rMCngTbbwdHq5U1m1g65LLtJUTKTU4ueuWTqALYTRC",
  "key36": "5zWDvHsK81nqBFv9MeuSXoGKLVBA5RokW8khQufN6cjkzYRpSobeXcw9HHwqD7nSaYsgTup4tuQJfMN1MaUTYVT4",
  "key37": "5oxruKwQLBzA1duwoq6oKkN8V15FpbBuJv1QZCEekw8jP6GFWpbgsjMLKtjga1KKrR6SRo54mhVv9G7tRNjjrXb2",
  "key38": "4HZP8DZ76o6ACcJXcdEqTNPRedQDKWUg1EWfvfWbBVAmpmNTwB2qkTz3ZuXPueyjFvRvb7YtwMwL3vn3gr9L4pRh",
  "key39": "4EESY7SuH2sDYdP1jPVkqi3z9DdfHnbBfUrZ5orjFWfF81uAfptNbrkSyNCAd6SZAC1ZsC6u8gnk6pFhF8FvDLQF"
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
