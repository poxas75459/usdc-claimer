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
    "5ctnxq2Usy2eaTwnN7C6SUBA1rFVvF5MZd6WJacyiQWbWJeEEupD4BKmdN7QAnNuoth5nyAYMz5c5AZQnP61D2Qa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PAMX117FkH3ywKMjmqmGXCSpVuJePu24Q6MBHNimPpLdpxmyFaimdMwAYnWjZRk9d2QydBWTskKiFfr3Dku8Y1v",
  "key1": "4eJwYz15xB2G2vneg9y6dYHPtHzoGqgs9r4V7iU7m6RFNrL7mLNgDCwemmh46T6UzwGUknRyuDt6m25b2PtVT4tg",
  "key2": "7QFytQKdZdffpHNB653YHxHim7sd69gBNbsYff4tur2PVrkkPVJBg5MkkJYfBwWb8wPrRG3F4zdQpsbWyKQh9YR",
  "key3": "2Hiq3idt3bo2A9wnPgha3dikXtvwnDVCh3CFRpxpVR3TQPDKgSxyHrYbaeBTVXEztfKMAUeFLwQXgbzhPDMsv3Co",
  "key4": "cBM6mKVp8kNxyjSmkcMpp7TnuKGBpPXxzgz4uipY5DrzVzkCT82y73vTsodtu1RV5r433ANL3r4vsEDzYXoytu8",
  "key5": "3u6hAvskdMYZx3jxB1aGjgt3jBpAtx85WvinvtZkYTH4rXG86C3UoM7HhRxT14Em3EQKyxXWtxEbxs1t6A5irwW8",
  "key6": "m4kRR9JKegd3jYecJDtU9cRz7pao3XYZMM5yQ5FfbebcibWGUPYjJdJQpN9dLjRDCrS7X3d2aWtKLeAoWtEgs23",
  "key7": "4itHBv1hLzdeSrTtCFR68ALqneoNv4vWuKN4erTh6PrHGwBaTWtAXjKDWfnqMNv7LYeE4URETg7K9TzuDmuJUouC",
  "key8": "BBXz8YeJD2iNwsxCgP3JTQDitQJpvSjPHUfwtHJg2Fdok4nuKiaZuk5uTaREqwXhH9Vum3UXFJ54SM9mPNR8jq2",
  "key9": "2ieZDrrChneYwkgdyyCHEgRNAMVzxncJPjfmatMxyE9PTvzKr2NqTWjgF3gwYAHZfFCz8FT8xGDxaZZTA1mEvJSW",
  "key10": "wBhKWBrza2YEgEMgmMfnAK9LNs6xhUWNtn3H3QhHqkJsAhpqYCPnTFwK16eUUufbCPi8BxqFxPmkmC5rh63EbTJ",
  "key11": "3Ctj3FHoNAgYTtRRpbxLo2JqrEjioK1w1PsG4hEQGkyJbKTqDzz3f2v1yctjmC6knpzc4qLakLcvS4etjewBNr7J",
  "key12": "5RduwCywHo6wAuFDQ2yXATYdFMWpACHuUGJPGKMuD7ntECeUtboJ3FWEeRYMXr2ykgefAzVws9m2nwnCaw9ZgzZD",
  "key13": "21vzbGGfhciNvopcHeZB6yYmPSZy4ZQZxkTLBnXWvEzvVuDNg8ZxZt5CDDum234yxmc6szAZvcqUswHeAe6Vuq4y",
  "key14": "3AZfcafjrChs75n5jeWHfrDyR8d59jZKXKgfK1QMR892ZzVduogkN6XNnB55gA6PhRfXvxykWnyYGeiRhhCU4Ctg",
  "key15": "384161m3XvCGiNV94geoarGR5CRcSZdmQ2hGCCV6HwmiyGzpDst252VePrYcnNpVhMXjZowqpWmMHfBooC9BJiyk",
  "key16": "41BuRpbU7pNvg45excd3EuDYo5dVUNnP2h7WN3VaKc8LpbPSDut7ji7ZGaHtqJdQ6rQcaDn9b7Z8EG9NrPBwCh7b",
  "key17": "sMDAAXzzDfJwSQ9RJEAAdTiWMrWMZA8GK76VE1f6RjGcVtKoaGtpaAnGiwuffJwHgYxDhF8oxXcZKu1cPvbz69D",
  "key18": "4CuRmMGrah8MufyTQxynixJzqHoAAtcjAnPTXeNghynSxF2TBoGrZjWWJtNeKvpcSMF2ZXHXNUn8PHsQCkkde8Lc",
  "key19": "5uWqcirGCmHqhjuj4jET17pXHSwNqXSh1BeYDYdRynouBhYWeG5UJ115V3e8RhKsuGaQc2vQTa8sC9MGk3bLoE38",
  "key20": "2aAj1r6264pjHztzy3mEyXu8HWiuX57wfbgxSwxJD7HVyqv9PjYVaLYjVbQzzLfS6Cd9YVkQx9BRNtWrBhHAJmnR",
  "key21": "4fmHoqAgxbHv12rQzSWpEkLQivaR6LvHUMKyPTbWktwk9pH3f9kvzNGRJEVt1regKXX8tJeSRJw2Rx44URUTjApL",
  "key22": "4e6XBUpP45r4bFR56UP3NWznCqcogoCH5LB3qX6qDTKc4ZRdmf7hj8xWuRxvrnpBf16VSAbujgsNaHJFJnkkyXJv",
  "key23": "2WzT8i1wrPxun2fBM4MjzGT7CnRLu43ULo9ELQbGipDNSW87qTEmGrRMc1zF8Rg3G9TnHSVxMDv37PT2VKNeEroH",
  "key24": "21ueTdmfhUnz6oYDLcv3uSUkegwF5Ske3Ddf8R6XAwBzRsYwP2J3HPJPpbSYjrgEmTmTyEmZUkMNeE5MDAVDnRyq",
  "key25": "4o1s8yyLk1Dy7Rh8gaLz6YptxSxc3vfkfGBpRaW6EUFi9cTPawxBwiyhbPpCDR5jmHZmqqu1RNZghuPsGxHbJn8G",
  "key26": "4S74WqxEyxLrwGyi5TozphmqpiUBQ3w4Bms4vAbieh1zFR6QRX5R22E83ZbguFVWbimSNqHjbSVPKbfAuma4qsno",
  "key27": "2tXhbgyvcnUPaTXHodEWg1z2YKMhzKzfyEMMSE2U1EoQ7h2TkdVQMExcjGsT31QX9WabrW5z5xni82TMmfqyUc5g",
  "key28": "2G7y1wNYukSMH2gmT8FfFDomhJtNXKkkUMs6LNiV8BKdjS2tJRkWz7cmyDi4QEdujwkna8nyqoTiG6myXYqeqWKs",
  "key29": "2EWHEHH7GjMCxz81UVPbj17FJB1SvceWRZzopcd3D4aPPqhWfybgYJLUFkwDqgUVvwycJo65mCEEVdXXNJpY4FBy",
  "key30": "4ku2HtLABPdm6WrL4cwPTbqL42dyV3bNPB9K6q4PmPe98bQQ7yErhFGRRMhDCsxPmoMgiZsvdUXnRw8sTWcJBsDP",
  "key31": "4A52rxAKGir8CwcwXhKKwYWCVU87jf7pv7GvvzZFXy3JaEKpCNkSyt3hffd1wJUDcPFF8TYfZXUfoEcbnYb89tFC",
  "key32": "4RkPsuADTgtmUSm3jLGQ18PZxdMnouRkE9BpKUctXqNgmqiAJyPdkRyYSmUJ1pmEYu6PGa1nkDKC1aGy84AhYct9",
  "key33": "2rpfzLNp77iMXVBdAVcm7igvHYWL8XZ3zeeptp9nTiaDLuWbVXL9LNo78Sy8ZfKcHd8LX8avYqu9cgNYDzGMuuUS",
  "key34": "L6Y3Wah6eKipgiLpqacqMravrWzDmihRCbsZBM7cDuyPTVw89PmrWM8Y9gWF9gH9kvuRHptjiEqVETR7oFenLH6",
  "key35": "4VyLcxTyRM3K4DfjW9tscckgnUXrEd2BRbb6fSf253ctD3ionn1wD4Tsw5NdrmnkUB6NuZtprX75Lgp1RuusbaBK",
  "key36": "2tMUi9qr1XUso8fmpzSnxs1HLKfc3UeY2iHqjztQUB3oSuVZMgNKY4zQHt2scYJRxMwi4V1a1HrYFfFaD3qwbcYr",
  "key37": "3P87EuzokT8ca66t7hbiYuZqhsuyiq7vTJuVeFLVGKPcNiYXQEb413sERiqXi8aDaFn8ydmAffWxmj2mnaAZDo2e",
  "key38": "mf9PDu6dqxYNzypSXXpyLVNuac1GLAhftUbKtNRDY8NdEyb24bmaUygtNhgaqWsGCPtLTLT4Q1UWrbhPrj4vxQz",
  "key39": "3XP9RwAWmxbkQCnm8JsMpJnSXFeoGCbrNn9vfiGM3c4Yrmy7S8LVNuytaARg7r2WP8d5RYTw6112YxwoDRg9ZjJt",
  "key40": "4qHvneo9fvRnQyHVnPUyqgaWbSu76mYXgyhHmP9CuhQ61mU5r2qAE3Xy4DNSnHvkaQ5V4azQPVQw4oNQC6YCTLxM",
  "key41": "2Y4DUCQB4Zs49aHtLdTMx2ywj91zpMbB48cnS5BenU3eQWF8T3Zpcf8KnNRcnLXSJYmX746NK8HNwsprLu5bN1rV",
  "key42": "62TZ1hUXK1uevmiLnLLHAvy4L6x6m1nWK6vA6RiUqPzBHCYiJcx1D3Gpv57YMJinsLZWCRzn5GG8zBnY8HKmutNe",
  "key43": "4dx8LT9LCcv7orz98v4Axdk5J6Mgu7R6tuxKFK2EfWZJX2N2FbjFJzx7h86oNpw6gJQWE1NZsm6896jYzcwqLbcB",
  "key44": "3eBC5XonehKTX9moHTk48voJb3pFrGVKZGdMd28D4YMsi4W8iihW3LU2Q1bA1jQWwdSadKM87hGXyWcMXBo5MYAG"
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
