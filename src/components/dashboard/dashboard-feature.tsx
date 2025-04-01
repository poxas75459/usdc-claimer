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
    "5aReV4bxPgoyP2zwGqDTFG6CoQMBKD9mg5NdMjvJcyZ1no1ZYgXVKpVJ7qEsyLFyydwe5oH3Wyh4EXteVKDEExui"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MfuecXbxYGynxfb6XLwFhiawFy5ceC8zP86QzBeDEaFezvwryecspqBuSjM5MbSuphjkK8dwnkQtDjtuXKX4yes",
  "key1": "2Ga3k1hVi6zYXpoFwynFTu8MLAqScJcHkijVhhkL19bBhHt5565B2QMhnfjqJc12pq6UCHQ9xD8iYMP5DECr4jUn",
  "key2": "4NEAdMxiGkTyeSDHtyqE59x4oGwyjALjFeWmUH6t32cwRAQzLdfBna89z8rimZ24ttBZf1oGnuxWuPU5j3CffVFN",
  "key3": "aZ4ohjmfoLPxoVqRQFUr7K8fY3YyEH51S7SnSdyfAmrLdZDs7v6GwT4hCLKn32gDUDcQuJPFoxUvKqcASVjBW27",
  "key4": "4eA4FLLDBWwvgtUKEkdUYViWXFymn5RZHS3hV1YWU7GjRPNqLjf7FBih4G7bNoAx5nsxqmFsojUEpfp262Xp2xx4",
  "key5": "2LJSGzN65v59xKDNqzwt6iFdK6WC6Zdvwc9RAQzNK2SvmgvFuhoyYTLLygBgbxrNFkcGyWaCmeWfJPUK8GYdEg6H",
  "key6": "vRY7j3EWcSQwMMeSYCCmK91i4kzLMeqwawcAUrEDCZPvmDzCjwCJuL5hmZSVyvHPQSjDvukgH4PY8fZ5DzPUcGM",
  "key7": "kFFFtJ8eFPr6Ym3qLjbP2DUcuR7HzGmgfpaVz5t6Ju135Tbgp3owReoY6MCNBV2wihXovEybLH51mi7uhdpxGNw",
  "key8": "53NAXMNk28Zd83JmX9tE4WNPcsS7MtcWP6Skv19t3Tk39avNQkCyxU4hHaMfKQoqyyyiWKveFGzWp3A2AF1BY7vj",
  "key9": "4BC21Bcx2FycNhcqqmrcsHFAvTzAoKr84y1Z9Gy8M1tkDhydi5uvznN7iPV2Lb4B3ZoeqnF3GZ4hMdUPVMvdp3mQ",
  "key10": "5MBeoCF35zTX7GdndkNMZDsTyU54oXkvBF1tuw9hgPY1EDr2RNMsRbu8GgeAfE7CfbhxPKVKKmezuuQv6gczJ7Ln",
  "key11": "47Sj9vV49KXtJZg7jjnW58RrX6J4DErdLgD2YzoXJ9B7HimgDjczPPa7vLTpUMzgXevEtoArLLd4V8RYwHNY25Wx",
  "key12": "4tMfdsm6qNVyTB8L9Ln5uc6s3ig7NN5ryMZ3QL87nKNUgszYxmzphDcXaDK436kMPqabj7eVxsgMsnrA2WnoqyDZ",
  "key13": "4q5qYM2VYiM364eQSnCAsK71G5skxrXRsrFyWrMzJ7yU3tcPpVAy6CT8XXF9pT2RDoPefnC1oXjMf6Ev9PER3fvE",
  "key14": "4MYT2724MYYzcgeUAYE4axNsbQaJrJEpRx2jyYeXQkAuMkMVSVS5TtbCviEsEANfTm2kjZ9VEAEzEJ1P4FNGtLmk",
  "key15": "67Vi29LJDpdZnnLtFGnYj4xLuT5MGgcnJLvkzys64iUjiBop2wnuFubAnoWe4SnnkyDvXSM5NpKBtLpCh6dHuoqN",
  "key16": "RhUgd7ASnc7Pu4bKwcd382oYjQ8oyfhUtY9RBojzHw9u41YAVfYNt1hMrFQYzqj134HgHtgXNiEKHMUnJFuswXe",
  "key17": "6KZDVJnNjWHUyamqqa1BhRySAjXTtDx6Z8Xh4FViUgoRB1GLqaBNMz2yKk49Nm5KoPDgfSqyi9jC6Vrtj4BtE9X",
  "key18": "5rW733NoEpHvmRp1XVyaqB4gdMVuDqHMyK9BWTWS2srBDLFsMwZChokcX1HNLbgULqiZ4eLShy4echevEN7Jsys",
  "key19": "5iT3EWSFmBxKkrnujpNuop1wiiXxuaMzT44bWW7FvQUSa6EKA1Mpkqm3Dk25eJhSbZDYPWbrV4LwkY658hJbMbsv",
  "key20": "3icmpUZm46C8ADNDEZ7q1EQ8Fb1BLScXiPczA5kTeh2LJDXQPJHcGwM9QnbFeH2CCCVBeWKVSVv5X6FuQeEHLSw6",
  "key21": "3TV2yo7FK1JnTQ3U6Ncs2ERpFHadZp19kfk4heAeP2v32ha3qN1tH8ASxFYzi4j24i7Vx85jt4jmPKsEbsTFJHbF",
  "key22": "2itZF1XECfoHSRhDsf3QtcWRYrQBPyY8ehdEntr1SF6YbAsqcmZJ1Ha9mCKfnBUTVzKSmd2PscbyH7Q6eMRmHKND",
  "key23": "4aruYVjibQMBRr6MyMPJjvfLL1PZTcC9D5yCchTNHo3hxQDamnBEEWhtDTA1YvXLsuitE12LbF1nKp69GdHtdwMg",
  "key24": "sYDsxLwFUs3ZSwAfPPcUUApF6knRg2N2GkQGXpeRcN5JSqjHNLRyR1pQgPtP3mJvJSaBuxXHDh2j16u6641jYoD",
  "key25": "Qi2r6onZqQzidM4JwMVQzihXfXfSXqrVSNtNop7CGwixdntD3B9wRJWmXk7CPgQtATzjWUTDdc1epcShegkHPZ5",
  "key26": "5uwdtndMHs8AhpwYzqupGV44FSUQipnY2NVQQSQCZkBEfhAMCiVexQQdVxq3Bszo1jCcT72zY7XHrsedfe3ScNy7",
  "key27": "4zxnsjDzc9VJ6jd3ETzo3WShK4uRHF5wRRjTzWkUu6GkpTL1U9RJzgvVtzz11yuy2DqfX4Q9iDYGUWpQGDgnznov",
  "key28": "453rtHCHR7EDu72MDp2UbMwkFkHnhSeLY1FrKbWDaqLAjjoLoBgNTELWG64EjVcqx7UbSzdAi4cHr54cPheaQPpw",
  "key29": "h3WiKKwErJUWCboPhC2Xxkhxq4QTdwH2uXmirWEAQvCFz1xTrisxKUcDqJUES3aGwW8vtqKykveMWw8aZ3GCr9k",
  "key30": "5T2A2NXSusXJ9x6Lq5wVuBW3oXpVhtfHHSCZRya8A4J6YyM1iQpJyteF69cWYvJG3a3B1sqKFYfKuNrCn6FjK2XY",
  "key31": "2d7c6Ve1orwDpUUg9AN9GZEph9m3QcKzY7XthwUAqYkLBByZVVqbpYuY7mj3M34MkmQzGbqb7irz45oKogQAJ2sF",
  "key32": "3mJ5E9yTybjxRWVXows5dGiVkwPaSwFpwcs4TiWyQXcCfnNjnVa3GMHBD9bcTjykAhKm4knjEo4JJ6SkzBaZP8vS",
  "key33": "2pyJG3Qvigdw2haBkDY2XshHk1VEUHZTA225J4FJzz5NQA1MXumwuFnqP3WdWQeJMs6yrq9nNaFr5AM7ZtXWN7L1",
  "key34": "5a6ZDT4t1MjX1FXVtJZ3ssqoFSxWCBoTNRCur9o9ipnXr2pkcp4zJ8DcogcnyX4VvK6fn8dojWeznECPtSUfKgKa",
  "key35": "5yLrjKxmYUUCzfCWjdXRzsWbdNHcVEAP9e29zxL2JNWj3eWzGKgD7NfudefBxMuqtLb8S1WWgEZhPzFGmNY5CWTB",
  "key36": "2EbVPu4cMsGRG818hJEweix9ohY39xUWD41bYvwFiiJe57yozhAkDHmamhrT76gYu3iBwDqYbNsdGGpnJD1ayZn9",
  "key37": "5ZaXfnrCWJiqvYUVUg75HdPyWLzhUdYc6BmAja8FST5TduAzme7diae7vUUyJSnK5dx2LMdVX5VUh72eXRqv9gSP",
  "key38": "5XDsWk9qrHAGym8S4r2KdoRin8zaPgFXWUBG7GWzHysfxiEsNYKzxSgXxMqSBgj5TKrthaZNpE7X1htUPZynBPx7",
  "key39": "2t2wkpQH9iGUVqeRmVi71XTo4X5WpKs7MVVo13AJAk2U5rxBhfuahwC3STtXd9m9e3zyjiamospXp3uYvumNSypW"
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
