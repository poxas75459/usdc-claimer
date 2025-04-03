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
    "243TJQLcNhFxLa2USjcJfP5HikEut4jF24b6iP9Dven6CSC2AjZ6PeVgB5nxY1ixBLRKh8KbFm3U2DcFCuyiXp98"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VB97wTFnQiRkd1CRZ9JQG7oNqpNfa8WgKQEyrDrUcH8VfoUF5PqPaA3VevUcZ2rDu7VDj4hy4ts6DeQbRAsw2Dd",
  "key1": "2LCVMAsSNXmYwYKCcim3jPzNyxeaE2vCUycWYeQjQnm6nHS3aYAdgE69WU2d4xjHPsqnq13yDnMwZi9G9zDQZvoX",
  "key2": "4b2dr3Qq6jMMtaDRmDBQBQrsT6aFEFrWxYcRbAasEM8pDs6KAFBqyjRpP63BmquncJeH9ysbasHHGVrPjiuPxF7C",
  "key3": "61GSxvokSbNYkbNgZW5he3gQBNEVatt2bMsRJSEh4XaTC3R5WgJD8dDoK1Tvkqguy9XooWTB8MKNBpibeGpAHrT8",
  "key4": "5LZ36VopuMY7zumoi58DgRxnZ89qTL5bqgdmk6x89FN1MnXHYeJe4K1YLM2YiBXnL2quceYoDkBngeeJr3KLyyj5",
  "key5": "5w8PyMdxvCbD6KwQYFxBow2dQkHuuvowtkJ7Enm1oDTjk8gMGPiK9pCaGqPRuz6eRX9c9YX6KQwjQoDpTZoSBv8u",
  "key6": "33UpJJKGdevY9jBX1fJN2SotbPwyKhfNE4L62KUQajwfQPd3GLk93mqTvqSdSYR62uKiyVbRxq95vSWYRq8WkEbj",
  "key7": "5AZULdd1Uz3QSVbfRjp1SaMH1Mcw1anjpNG67LPgh1bPg3xoz6ehrXAFtXn7KjmS7RXSrZj3xEcFenvrMHLFxGq3",
  "key8": "3KXgcejBmjfC4o2nmUroh3dCxt2wE8ezahoV741fASYV5B9x8nQcnt3R9kTnR6zVEwdFp8tJJsLXute8VLsVyJSJ",
  "key9": "fdNZHzzNNBvFRtT1swwwhS6oSmZLwRdCbTJkyMcjebYQLAHMkJ8Eci1x7toR1xUojE8T6FiWv2AoeWwhtLNmayz",
  "key10": "4T9b37PtqyxspZMDkr6cNWeocG2nDWJdr8fyccm8fHKz7UPWubNcDnGio73SqiB4J6ToDfP9qRzFoL9g6hfe7ApX",
  "key11": "3nZALGPPovSPRUp3NEb3AM5dtxLMaBo5n2h4Ek1s1bhKoVxJwoAvizSCxYZrEsag1JfK4y6mu8QMKDmuFBqzxTxu",
  "key12": "3NYW98dqeHpwymt2m6Ly8jqjRGY2y23q2nLk6Z6kARQ4tf8kRRVLwmA1RiGPSFngi4yUqJtfvGwzfmuwBSToseEX",
  "key13": "5vVcwmjeq9nH9JGpAx7qT2WuNvxMBfWmB4CsBSzY9au6e48nAXAvNFp2DdakLdFEF1y6M8BKxpfMaKAVzRcyKTei",
  "key14": "2RYpfphKtWAvcFsBbA5uQnA4LgJ9tbNM11eMazsGpSWrn3nCL4r1aCpWpzezhvnZsY4usHU2Pih9Z38SsxLJnmHp",
  "key15": "2jgqTtriyQggKes7fH5iGQTjeJ7qXEZguPF6CVBhD7ZvMCGTJ9D7DXMHrKgXaGPh6pXTjot1RdVyfd5komFn2FQU",
  "key16": "5UDaA3r7i1DTAavcZNrk6J7arMN2gDTZX1h97SYVXGK18nLtjS8LqF2jZGFfpqBBSd8zVzVyZ3UtVMMtrQ2uRwPQ",
  "key17": "2zjpEBQGMpZciqPh1L4nrtEFKz5RiU546qBDgJ1r6mpgW4bncokW1i9gdmZsMsGSEjtGnr1FGGfvuvCQ56HYaYR3",
  "key18": "5C3pcTv3kvM3kzG93adRbTwfMGFKHUkKoHR4Lf2fkJ25jBG3RhJjgF9CXnXSC8s7wChuV6tQm76PQ9yYqp9FLkyM",
  "key19": "2CrwfiNyxjED2XgDh6avpmvdE3iftiP4zKAahchmGzvvMywRKvUGztcs9n3yTe5rjthRFkkb56wx2L19saEv3bQ1",
  "key20": "5mAyTXEtX79RSCitHTEAMaFMNkTMoNJHFw6mTtVZ5uag97rVGiiRwZNnZfF2xPLdyoAPEKb1kASX4wxVXRHLXXQW",
  "key21": "hiievtcoz8BrVjrC5gG4Q9EQx8Dr6PuVZ7PfmP21ET9ZzVc4cd3YKzDo2txZ4qGzcgufT9KXTTpr5aUmAssr5xb",
  "key22": "3AXfBQdoGWADGyKNAAR7SdAyet7QJ5Ad6oZSExPZuMhKRQ46SgGz16g9bWFUoTQPrfn39RrokJtavXHjXvq6dPVv",
  "key23": "2nMDtonupuLfKf2C7LJVhiYJkGVay7xyBg3fX1rhRT7hVUgtei6H6G3jLvNG8fr9KKsSiNtjnBfsq1zJssYWdBym",
  "key24": "43eipvdWqLB2kriKo6CoGW3gGhzbf67NjhW8X66VVsTwQvbWnpK93kCQXfPK1sQZNUsd1jmcSZUqs7PEki2TidCt",
  "key25": "4w15nMyXn5n74SUCtszHcZQtqAU1ZGaY4wrueu1pD5xgVhL3D1sWQGicdceGPSHDZhEiXUnXtqKr86Nv49mpagrJ",
  "key26": "3fVn2ByHzQvBqzhWgPNVukbtAJZxQw6PFWEsCpVS98Rc1vkF1dLYdT7HVgJKf7JopnhFgRxwrSqoaTQ54PsfhHky",
  "key27": "2KhwBF32Xr1SSbHmPjpp8KWYkSBPCzg6mBZTLpqgAiSnVcjoRbYwKhbMzGUtavYWWRJa8dftWdNtaQwMGrLJrVnc",
  "key28": "43zjw3KYcJCWv4NyaCfQKoLZNWKNm1a8h94kaCEJXX6awEap2tDXG9YTxvmq66GJoNRPSKbDsxxTU6jVCLazqB3P",
  "key29": "2664F6JUD4jbqKXyTMRpcUyq7KUCwfUzQ2KcA9fGHjPBYeTeMZgJ4DiHQzUXYCSNdsNiDWkibbK7BaNTL7VwubiP",
  "key30": "TbBjHTwW8GpXzTfDVws7q8E2zFUxsnZ5NUkaPybCc3KAFVKivGxV3Af6MNbefMXBf99KvkHUXb7L1ctLmrguGJF",
  "key31": "4K5ZAUzjSAbs9KxybzzsJHTBEMKHwNf3gC9ofk7deaYmJXB2K193aPSgj3RnE9prRTqycRyht17ZQFKyP6kT7s2E",
  "key32": "5697unN2vUDcmmktqgk9igYmzzGNzF2kPGj2Vik3wmPWXKE2LzdTzV7FhFKvxZYvRJVPrCpNp5bh8JvLythmt4ys",
  "key33": "dnNwoxYq9jp8mA8jAdtwDdoP9aKFG5V9NzpSyfJDvQocz14uAw1DuuUQU25PYi6juKk9QMPAfSomYcYV7cgnvSo",
  "key34": "KRLBxGQxccafjg86CdqoyYJSCDgPVysRLZdyNznafLgY6o6oEnkidLGZUNHjDAwMn6BZkRXegoQjvn7C7S1F5GF",
  "key35": "3x61j211mULQuDaeicx8VrMNyVhVRjPu3HSnSokqcoEWZ6V5v5o5UAx8W29tNtN8XMwbg1kt2m9gcXQdwYc812D4",
  "key36": "2euTTTgKPgbBwcSZWhhusXBg5p7PxvRBZ4VVhs4JZ4jstah3kH3NEzNpWLiK9Lts8258rKXJLECfd6efo6kQqzM1",
  "key37": "534jTcoNamPPWfoVUbC7xKf82WxEs7HgvonEssnPnz6Ry8NM1BsxeUyXzLr2iAUygLFqR6AJZxtUTJSaLGYZBSmj",
  "key38": "2tD3osjs2CrCWPRq5FUe1btYXe1uUZwoSjGAVEAXSnAEFZhvWanvES5D9WhrBnT4isSETJCiZvk67hgiz6nFf31Q",
  "key39": "4B7ejHWTc1FcoRxEhvJU1WhQsBNDqY9XatFng6m1qXRmj6YvtHYH34VJsUuKjLxYSV1zHJN3EsAdVfQd7gLmdZvv",
  "key40": "3zFNqwY8y8t1n7wphM3SYfnD5c1dbtAFDLgUvJxeKDkYo78EyVor4Cbey6mS56zd6GsxAkxz5bxXqTmn76WCWiw7",
  "key41": "5zz82HHdLvS38Z7vqvY4Cj4aKpVP7Lby49AM8nUjWeH8ainFcPCtskbHHWZAy63oPoeFRBi15YdJou2dwhhJ9pz8",
  "key42": "3wKu8mJFwuvR8jR9v31XTJaL9Jn3qb4ansKjxdeJhzgk9PwdNmThHwYjRrswkx5gWAz75892wnQGLqgRZL8fntDE",
  "key43": "5C18b9VSjk9cCZM9nRH39uWLjCYR1SKGhubiuPqXCFMv53sdXNwr9oYswwh8G16b5iMzBtxWwEvEuohzaAdiLF8U",
  "key44": "2dn9uWBrCy5y41fAgRJA7Jg6gPyHjPvsiJPE3QLiWuoEPuQtdhTjjDuj1Wputmv2ipviiaK3pn4bt9Ht4bHnRHBd"
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
