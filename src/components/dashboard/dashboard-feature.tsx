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
    "56ML12DH8NCmGgPNq8PZqBoBq1A8SR6BSaQ2twdUH9wABHJ4DGLCvq2cUsW7QUKaLMtHMC3sKJLkV4K1dTDfhVLW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z9BcJLhps9FJeHvb3jhJHpf8zzirqqpf6MS5hqtPXMYLc2S9SVbMjC1znKUfDSvoqKks3MGzGHCF4QztuEyJQwa",
  "key1": "5HtpCGn4uzdr9RToYjw32V23T9mz5mSC3oSZNLw3HmZNXTwxvyn1aeq6DjdimaX43VgxCpquy8CMNw8YAAMruabx",
  "key2": "3CPvvn3jSLHrR3owQNoLvpEHsve7zB2yBxUmmYdZTdyDJ7HVEAzZ7HnSpc8U6aecXnfKQPraWKBsxMesPn3neTZT",
  "key3": "3rHSHgHJ1zjynpjoUASkx4gDfK8Gz2xKRvWdC8HFxp1gbdQS13MxoGechrqou9oS47oamAHSPA8r1oq9X5P6wASy",
  "key4": "2BtkeX3vvyrh8gfVi7CfcAjPXjmBAa3j3g9mBLPyP5ugRyZhm8LS71H8t6kc8e762qX1w9bYfnTj2gu5txnnoGGd",
  "key5": "4hHWkeJfJAQgkT811BcdNBQiqbxDZ9CfDPyfWHRSY5Bs4epWrAe39s1AiedhLQrfZCXV2HSYJ3UZ3iXHENk5yntp",
  "key6": "tSscz3MuYTWKuoZBGfARWWZdM3XwG9JniTewkwKpskEaBctLbj69rBRGQrnLcAGAfVHtWLVVBjDU5am88SJfEGr",
  "key7": "5ZT8fg3BVXJ9v8SFiy9qPYLYaFGobhW21HTeoevAcbTru4b8YWCwi1NjVi9fvgJsVfLsk1BvRrsQu1NvvA2fhsC",
  "key8": "2UDo45mzcndR6trZdcVGV2hFpmXY8gYUddbpJb8BWkFqRsxHnfFKgCb98qeRKdqCMvoMnEnWgporFseq6xe9SgCE",
  "key9": "uEjH65MZHwFqEG9VeJchfqoBAi1M9Mh7MaaN851TheaVSNgUAtgZJiGqvw7FB1TiUAkneeVVwq4JoPNQ6KeM1SP",
  "key10": "3t4WAdVEr2Q5KevYrqUAbP9fqWez21xiW7Z9KXgso7c65LaGVbEMRnnDtjjnGhkfWqDET5YDNrJEpjuDDHctNWks",
  "key11": "3nsstGAnASyjSPZc7NCW9phA3wzErdRbsBK8SPJxDRGMKBoH7F9Ww9GCkxzygmJAnewtDXsKVvcEpqL5pM7FEG27",
  "key12": "2WQ5B8qDqVG5sGiTjNhBkCvB8HXLBdvXCzhcE5PKqpb83dG4rTP1wiLSJL6xCs3mfj5oNSMoHcN9kQrvPLB3e8oJ",
  "key13": "3damKcvxoFkobkYRkajdAKRv3pDdMbgbYb3pDZCNPZ3imE5j6ZkayJmDGiizdwaTw28HDz4deGEEDYuHprBfj9Gq",
  "key14": "3HkbHwmBt15mm4CApzEd3eEz233WHNst14YVHnRz4X8AHKdZZQ2Q9yoFn2LDPVDHVhv9zQ8wYNWyXqScesHQzXUn",
  "key15": "4xRYBkyhQ9NoqJodush7AXYtYk7QsrkeFBSBQX7aNaFqMLVsNRp7PsHoYLLUL2Wj6VSC9mPJCzqDheuM1BPrZJY1",
  "key16": "ySk4auUfhJFch16hFDPkqRb7oaLmVuutWs8AMGDKHgQ3XjTvSTgr8R6dVQxgj6wK34pTgz5pKaASZPXzjgcPJC8",
  "key17": "29AJJ6F5tzkRKcXor6SfSQpmZAxEVbYp5Qe1MQ2h2c8Zb1q4qhtahtUUUK75WKmAAWSGbsDXmbdmD2RvxaJXJkE1",
  "key18": "2qF6uQC4QH7ZsLAU7oZsyZH4HxFVWSTFqvLs3MToGvRWagJoETmZ8oiB7AY7qqWS6Vso1q6xxzNhMncYwR3vtSvA",
  "key19": "mevMQRE8mU8ezsi4Ro51wxxEWtwMGoBE6U8inpKVrwUtWAiR1nGoNfXJU8xY7dkmbun21TyYcv41fY3zhnTkUrK",
  "key20": "2jaiCGrP1MhLZDdCNLPTzeQ2ifTLPKaAsm6oD5Hj9HcqYyx9ygvjLpBAyBYnVCuRiyAdpBPzpDrHKN5ZUWuo89ro",
  "key21": "53X8fYwP45k978KfNbnwWUKDwHsB7RZ9HgxxKTKnQxwbrzm7mdxE7J28XhGSXXQbZCkVBktaGnq6DrQCQZQYiPdH",
  "key22": "3YcTSLZggnrAq1tUUDiFu3KmpXvwJsZEfV9F32biuznvZRzehCPcGweBuyGyuxfz97qjJzwP96TLX99vxXco2uwj",
  "key23": "HyxeqzRLwuHYGCbS6iQbyV6pzJDfzVVRY1SQpm96rm4vFSaoadbjH5JqmrUTnFV7pfEPdfsD9Qh4NAWkN1wKpxw",
  "key24": "3FVFkKiYYQLRdRKM27LpYoAZprHUHBZp7UtnnzauXN3oTyh43mnFTTeMHs1f1g3CdWZQHmkACAAxksiqCs7sQZQA",
  "key25": "58JuGXQvqnwkyFfBu2KXaMwAmYxsx9R6t8EjNMwfXaUmvWt3sUnoqKvLmwmuJom7yRtsBkfCTYQapqopSJdSzd8c",
  "key26": "39f29b1MJeYmyWtEJuvvLwMf9UCo5MrmwZN7LT5yfk1hUGSPvdwYfJNUEFt9NqxnJHtGsw1729q7YPULkV8dhhtU",
  "key27": "3TNkUX7yyrUr6k5u76dUGcLokpPX2s8puhUJ1yv5v6kJKQxLENx4NNR13zn2xDutP8NBsgbkHRDzRJwK7Ksb6apT",
  "key28": "3EsooyuL81r1nN64MKNTw8NynLV5kvXVRsAbJUhU9Vc81rNpLuJQTnmVJHMYFBKBCVoFbTaaY4muRug6mtnpc1Tv",
  "key29": "5treR2uKzkpnP2QM74Qaq9tZWibTkkdAEeTQ7Rp1FiZLZgVodYraykUCbNoMprjio6upKeiq9uxy8a62qNDtt1Ch",
  "key30": "5w16Pi6mvqbKJHjFxZV7udGRhYDhQLBWfXWmmmBnkcQTSvo8gUjcms9fs96XV5DcPpC36vEX6XpiNMnUBv9hL18R",
  "key31": "5VJLP7k551nZeixmavrPFwDZkwqWgVYvFX2p5RUi5rWPfQUqtxgbev4LbDJgPnCbHan2eQohkXpnHBW1NtUzwLeS",
  "key32": "bvS4Q2GEUeEVQJhA8NDBxB3DDviCNddoA5kBc3ssD3fHvZ8neruPugXkEn6mr7g8cq73zpLdLbvkYU6LLeDo5T4",
  "key33": "4NjRcsnkUERaFUTQVpXmdpPwxG1h5JCvSfPmEiMHjvHLYwMEfCjacYzhzFtGyKitB1LTXo2HWmRdP3BA9z331ngF",
  "key34": "Nz1TS49GxC75pbPRvZ5nTRsaspKsSr1sPoRM8gbxzuF3GY2NDfrsTuzB6TN1GC28DUQ9DcpvsWqZSpL5Bh3gU6e",
  "key35": "2fBXx4YDgin1KZ33pTYMTf17PACFAyL7Z55mnhLAc3U6sTDhuMAiqUF1wGsFK17bdsjScwACq3TtqeNjgrMSugsw",
  "key36": "4PsQQuR4fFFnNNE6Q5eKeZ2N1kitmJkbEouQNHBigXc89CC7dSHm5fgHSRU7h5PuBibVtCtnCCEStNCaV5opdS3j",
  "key37": "3ck3CZkQAL135fA4gjy9PJ9McjziZ27KKBSfKsKADca4n2cNqwW7VYzJdbA2JRGh2cJrad4bwdutnzV1j36wD1en",
  "key38": "EANw3Fp1V9qQy6QriKtXAQNrR7V9CowwtssbZqAeAuSqVgJSRvFpZGQrm4evxZhRhNQk3ZrwjY6WryhTsLYGPbq",
  "key39": "4RaCSEgFgjtVfZa2iivLAzfnprQskWkhqBm3E7FhWZBqWs3gpXv9dvd2zyCnRzNTvSnXE2B9vZKbeWdxUczAyHYt",
  "key40": "3aH9WLCFcujHu98itzthPiKy9j4cHEetN5h7L7hzok1H2kNj3mrTdYqHxRLWxfQ2kgAR7ueeh69j9rRBJkKvYmRB",
  "key41": "1QPvk1jLu4288qBJMnv66C3aBZLMHWPvBRqVFwckffFfaig6XDL3HxBzbNA7qbAkHJq5XNZF6GJtBpySxXyusuf",
  "key42": "3joBDN9k99xW35ce69pYMkKv9SAW5xEyfRuamXzHkSbJEh5sdSxmDKTL9qzqooAiCNuA7e3mWTpDVtis5PrnFA6t",
  "key43": "2md63m1ZNkKSG9QEuyYPWLWZWsuomeq4dmqziMv6NowKRdhQxw51CiCTWN5NXamQjrTNpnL2WTqcjVBWZ4KjGRH8"
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
