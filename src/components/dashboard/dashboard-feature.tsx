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
    "56SDeg9ySY6hbLxZXg1QBAeVs2tGK7rNaU9EB3XoXTc94ppKhShNsET2HqLHnJvL9XBcC6FbcZr3PjrEurzrHRjY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fNG7Sz7aHhs5KMUniCuymawqZ3E4RMkYs3xZenh5uVDRUFoPm6xGVtcLk9UrGUfV5mSxzX8YtjYtMgESA7m5TV7",
  "key1": "5i2zAmSFSCTroSWqwvRDt2pm8YWigv6szHEgBAsejDFPv2WXXNSAt9cPQvP1AKDCUeyTmmfj7Smt17HGUhaaLk6N",
  "key2": "2W2tkkxdiuhGfKUsvm5hpZCu1gB5FPsrk9VXNUss32EX188wCF1nybGeCUjbSAvVWy5tTpDvpsgubqBS3sKbGaFy",
  "key3": "3e7AHadGNusDtrJHJ7abxeeQRZV7xvavML2hQrNFZ4ggRx1NmY4QNFoQYnvx3TmfVEn8msSgAWVHrLcDjjnwCzty",
  "key4": "4Df4eb9bYiAkt9drQwe4AjMhdNNWpNJhVwPVvkYtyjhxYzeZBRAMBjCZ5xEC5DgTb4H8bKVAr1i9NTMd7avnAVQ3",
  "key5": "3V72Nn9sXfLBgMNqLn4XEU2zoy9c9QJpQg8QsLfdcit1rufK2yNCoW72oNTBQvaasvv1ATN2n538u1Q3SxKTjMyt",
  "key6": "66zBwjji6RsshZmij2X96NFENaCupHkBG6XU64KN5K2LTaRdqokjJf1xYUv5ZNebi9sMSbxPACZhm36riwt8avDC",
  "key7": "ja7RR19EGGcaqJTqKt6XiRok1iYhhdzczuwDA7iaWPCECkts5Xt4e5iWYfKNMCHatSekbDHY7r1A7p5ij8cSYyh",
  "key8": "4bJ8yZnZJeWP9ySc94H7NAhYSTMRi6qaXn5ZsbQ6Uw1Jj5C3TyJMgRSD1Qo2xsF7oUok3Zo8baUj7gBRPHg1jRcc",
  "key9": "5DYveB6knRrH4BYuJmT7FiMfwyUiburm9hs3P4KKR3jW5ERg6Cwjw88ynDKo97AE8FAVGzEEv8buWv9s6845gRRR",
  "key10": "SuYZfz5HpCPR56BuAiFeWQLbwBSeYQita7rYcEfbLAZqxcEcGpGHug4QGPtGzAJ5ggXBU55M5xVsBT5rEn3qkk9",
  "key11": "5zV9DeJFya68xqfdyt1uUB65D7QT2ivcWyK2ia4ojqfLmQQjL4PrcSUcvGPFQCXzQpcVkjympkMpXEq8LQsCQXRP",
  "key12": "5aWVA5KbZ4bSYzUtXa11qnKsdAc1z5AXWtMHEq1fGQ9EwnWN2cqo4ti8vKMzQgnk33uQSrzxk8KRvXbtAMx5E2Pn",
  "key13": "2RafsqzfYnpfm8aVbRVZyA5ecwmSbowZPjvfm8r8Upx1HZvW2c8kTkaCTwjy6u64Du1BqnwgAV1XhHNfUhN2r2uR",
  "key14": "4GTdpFvA6VDsQFo3pPm3hj6HftkvNiXdzKmh1BBEK9NCBg5K8poy8fahSMKmd9pHD6Wyt8EeDrwt3Ebv14wmkUEM",
  "key15": "3fsFmCEnZYQcTsg2QYAiWbNAKqaNfMSP8ThADbLvrKQqaeAh4sJE88T9bfN8dicQCR6ErmWXKkBt9tjvHM9xLeTf",
  "key16": "4E8SLwdM8HN6eWvFFftQzf3tAmSi3szvxgtBzb4JBR5KDDZFCLscWe4FAmTqYg7bz9RhzwdH4eMXkJ6YJnQHvZNM",
  "key17": "57SYQhYe2qEJxu99KLsxA7vVtBPU7MU38rWYw2iqfrr64PqSHtikgjscNLyKpTnKK6r8Fufdejz8C3ztbFXG8WQu",
  "key18": "3MTVfXABcrKeVnEqpYzCmKUTPZ99dG5qXh5wsVFqbGLa6DnmYkgzP3sn1cQNEj9Ex8T8ZPPNERDnswRgDr6CKoxz",
  "key19": "4dy1rw1ntqqEwjTdifwyQW2ToQBru2B2ZU5c1fHsQHbTtGdYb1TZPr2GL9jwhDFeBKsUmtU25evTZgyQ82ADEnFE",
  "key20": "4bbTqanJDovcqTjE7jQQ6WD9FwVQpbgEKGhBc4Ry2WroeMzBALjyKWo8woQYvumDp54WnJ1vWWKNzXGxYKoK4eN7",
  "key21": "4rAvU4DSpetuwiQrUcSG3gfo8uRwUexxDHG1VHATw1EEYZ85hxWmses8xektjKxJMtuGG3d4QR6Gh4RmWne5x4tn",
  "key22": "2R4Xnf5aA2skVp8D8K4sezEKQu4Z9qBxeDk3KPrXSyTb2wbXe7kHJHA8QBpYsA4gLH1hp7gaYoo4WhjfwLC6oiPs",
  "key23": "5vRU4sHcV9saciSeLKt2oBrJzjQzCa5oupreSKSjNz7VnUxwDHE5GNadNjasmqCqkGUKtwxaBmq3bgCANWLmGQ4v",
  "key24": "5X82Xn2B9TnjBTKAFdAXqSHN8xuJbVweoWxq8hVHjd8MYmGRgyQjdeBnmnWdTpZ3Zsb5jx8wovjZZXCqfM2eoEKG",
  "key25": "5HjscwGHX9oYdtA11k6Z9zLbqEMHz8k5H1ocyodhaBV3hjBycccxdeK7dMUaWbFEoZEVcs4ZYfoNwNmySWz79Z11",
  "key26": "2cXt232VWrQFwkQUcC9XBSAGgcmjrcbBNuxJsu3nLaPzpdQ3vdfhvSMsjHffJwzkBvu27L9o63G3t8ukdzXVUQbV",
  "key27": "5DYQFqoYEnqAT5apLdRzhaZK73USKnkGzr3gKnZJbQ8ZmCJ9e5amyTi22rJKN1zxwzJVy56zYPTjUy2dCGnKicnP",
  "key28": "aR8RknfYvR3nud9ByWveSrBhi1Wuud8MPxeMXQ7aSbrkWG7yPwCVgCrNfjscj8QVbrznTrKDfhv6vC41dU5nkYT",
  "key29": "3U5J2Gvb2MazagK1GcQcnRz87h2tkhP7yN6uMVpRytm5gQ8VHNLcu8TWubc2dsDp1BCsXA8FYUKg7QbvQYurJ4UU",
  "key30": "2oy4rYKZvLkC3Tsgp8u8rXF4AJJ3fNTVCKTKdCUJq5QZRFT2MrhLKPeUQ8RBpQvYqbKWTyfGkojdyFKvuuh314BS",
  "key31": "3YGVXrS2fo6qmfzf554nouexXoMMFjEAEKrVTBh79gyU6AVURUbjGcYQB6dLeqMUb3XtcbnkNJtzgWdd96cWbdVS",
  "key32": "5TSonxxQT7rt9vcLtsrWWGwbZk7vEYffGq8JousUdSQpfr9nX7aYDmQdz3zT6kfqL1SghEvRm4WJhDX4VXrVDoth",
  "key33": "42BeUtHYCBLrAFKF74fM5x7hvPDKcRcZDVhsDTv6LEEAEM9dtqquAvSxAJkM8MYJBYtFCedGSM2dMWHZEoe2H4YF",
  "key34": "jvrrYP56UfqYnnGfU8WEDQcMD54WCwRjnN418fyvyY4K4LDC3Tda7c3gGz7NDSrakQ9Sqd2bdsKkjBWS8UES26L",
  "key35": "22G1xEF59H6zATuYPkSP3MDtsRg7bdKpduJmBbACMcE81xJ9f1yhswoxf77DagBrAUWMBC1A3LPQy1rYGTZQNu8J",
  "key36": "5FoV3ZQmtywq7EtwC4EpnF1U9PzpTLDUMjqwYLbcJXRKmuztu4R2EZ8Lz9Y2HXb4qVohk2ZfoSaePtLucY7oMxY6",
  "key37": "RKfFmWDC415mehak4iXL3ENQyjSXtNQQfsqucrugQJK4ZLMqgkyM5Pob3J6FcjCAsMtbUZH7e1b8EH1DFERHJmu",
  "key38": "MeVGZNKo1hcsjXTgGgiRy4wYjL7PMuGcnzQy9cesy18oTHH1pzmxZ6xxFjtFd8PZJEbcv1oKaDcmPFydjekcyXi",
  "key39": "59uHmHBL2LKVRp6rwAbcs8pWFAfR5scAiU2cvTyNspMwXtatTxgjx1biDiDnKKySPrr1EMcomZ2GVLN8yTW7Uo84",
  "key40": "3Fua4fx36wU2rGdJWY5E8wntbH1dxc6xejgKbsvqtZUKcqEm6NaAN9k7qFPxj9Ev9XNFEJyMpye6D5YrDPASsk57",
  "key41": "o3VbaRkXrkE8suvrcPjqxfRXVCFXp1WwWFuCaSS2xYh9943PQFw1zGCkxhWLSnAgTAaxcEnmKoY3SqmSddv8z1W",
  "key42": "4YbkaGvnANd1iLyuph2fBtHj1ZnevvW4faMtNgxWF4NQUPGjcJtwsU7STngJq4fLfYjjBwG7rsUYb9A5iUNKqwhD",
  "key43": "fN9zZ8degjNoqeuPGSucHkAfacSFGA1yb9KhpJGCEpSmoiLgfAYQKKNrZozWEekpiGTzPVBkBefppGCgHmBeK3P",
  "key44": "4TEoWemasCN3PY3FBV594Nt86y2JG2atPNYYSDKoevQkibBFLWtJq1yX5QoEAkN1nAAsaNam4oLBc2PU9LRwU8rk",
  "key45": "3jo82u1GNtGpcRcQqhN5Fbic7Z9asUKcgN1HnLWLbXKaUcWfYPyD49MfxG2Gth6GjYMMLsWieNtTDtjPzjVNwjB3",
  "key46": "397Uci9Ja4u1qZP4RC7u622Pgc933G5wUtJjnwWGqQQrjz4JVvyZN9FELPyf8CUyBeVhzKkbZB8PoCEA6ZhabGR6"
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
