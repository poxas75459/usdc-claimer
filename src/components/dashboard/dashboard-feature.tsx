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
    "4d1t7pwoYA3H6uhpqEwJTRVGybuLLpHtBr7CRuTtVY8rt5p5HqYx1oJbe8nj3fKv2ohqmgeGYcrczKiopvQVGLAn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53CjzQZexqBXCy4zhdvnwEqXmePzcyYAobvmz8DhsXyiBxfv7kLQ4WzSQytrRhZSbxpavNX5thdqSLQdoBtqzcB",
  "key1": "5jrcaQfN1hDTDqkhVcLqCSNea5qGXLqTsK4dV4KKy1Wz9H52QpiaY44fJLQjy6txDncAj6c2wmryh1E3ovajyyfT",
  "key2": "3bXPjWaMeuwNQQQbR2PGS1Uz2dujZLYZ4hwDMUFdmvVaaV9MeTw8Gkvaig5J7j72UiQmLjMF9HtdQw3jVzUBqUVf",
  "key3": "SJzzXtEPapgwrp3EveuUADPvp53gCZs9kRhxVSX3Hs4KsvaW5Au4QQjfoohjLeGvo3PChZ5vpr8ZRjR9DGVyrPz",
  "key4": "21aZtkaEvJ8nkyrnxfTdq5ewzQSv52QTyPTY5BNCGyfiAHkUmnRKTqaXszfhYvtiAakjaMyDBu1s3FaE2v8jkZyk",
  "key5": "4nQM2Xnpwpz4Pw22k96bMRbuRDmYnzN9pqnQ8yjuv42GBuGrrdYrdvhrcf8CH1XZ22AMNxh4oGqShUg6EivYoctp",
  "key6": "5z2StECKxjZX2gE86SUCZCK1XTXDxfuMANYh7fdicEVM32ar9E1N7b8gdJFNJPAu1ZzDhVQLxSuuKerTMVXRrkzY",
  "key7": "3anKKCWwUarmmuuzgesG7hYN5HVqfzmdANyt3gpymCWvpaJ8A8wZjE4dmEkHXrbhCBwnNUP5uWPszdCTyEprRFYV",
  "key8": "tyPkEPX7ZEzm5pCLX5QsUN9Q4LaktW561JgXgMDXEkUx8wfbdcQLtNNcGCFmUmi2W3JheJeNUC8KPpNjeCyScFx",
  "key9": "3MRmYUomSi9kDN8bxFuC4hmangwAcLbcrGd7gPGzEfZtoUNjQXMdcm9YciWaWF23i2X9SVwc2TMGuktFgRnZ4Huq",
  "key10": "3U52WQ2yetgqNRNUuQtrQCRV78ZyUqmwK3GcBgD46koLBvQdBJqq623MwW45AY72dfif2bSk2SJYCC2fxLz2Mv8q",
  "key11": "5ErgPd5H7dcQYqF6GGHLdaC8PRYUAQh9FmwfFPwyrBethmHECW4ZFT5wmwJT8QqNU6hBxxpTXH3wHhEpoxpeW9sk",
  "key12": "5miuNVby1TF7Qhcon5axYVZjs3eEpVcznrrVLgVLtpTvWk3BnS8w3sc3tQyxbi9uADjgeh56uFnhNMTHhC6XUb9f",
  "key13": "4JvDpeFTK29z28Bk1gNU8m157BZpjGqsPCVPeyHeaewy2gLHWGvDM3bYSDH9s6Tp8QheTDpxHLY21UvRXxaGuiWu",
  "key14": "XtdGor9sYjQofNrVkXCkjiy6pGu7e6GkpVH76CGpMi7wNqznLL2rVej3GNqFRKVpWuErL87dPGBqJFNQy4z4hxo",
  "key15": "634UTQpN5GgYT8GvBgba8xVqKhqBSj5kpT5QSyjFWz9U9uSWY8s2C35cJraPaJbZWDL6jSRYztZ4qHdxhJW9uaKC",
  "key16": "5179CZN7p9cRTrMw3FdQLPsQWr2SPNosA4whsvnKPZt1G414mWVK99eC2kMkWQfwfe6d8EKyQfJMi7BSxWw8XH95",
  "key17": "M5ztFHMjEGJQiL2ErLfsRzkpKr8CVYy2bpRFzPZTjbZqqDHDg3w27zz7hXtwhAFZ447u7SgNC7GnEPxGRD17ok7",
  "key18": "5YyJaDb199UgKwZqTnGscPxTaRe1tC22RNjjjRxdcodsMTLExdYTtUx51DGg5LYUvYzTGS2wgpWvcfwJ1nVLds2r",
  "key19": "5Sa1XNnqxrXAxMYoYwfwg8Zjv7ZsyFUVLLT88XL4aWgjShs86EvJSCoxDcZZ7QZGpa8erFzKRfxDpeTeQupnGdAW",
  "key20": "2D53yhvRG3kXM8vEmFZ4WX3Ne1diWN2xDjmtPpZGbHoxJXQt11G75LuEi6S9KcMQhYnc5iS5mMUwjfYxf4pLdafF",
  "key21": "3rQEgA9QJxJ3S8pHeWKshoH6kgj1eoTmorL6ktNnHcGYe59NfW2pUut3VuJSAK3PPztTMg8fxoakynHMid2gYm8Z",
  "key22": "4PFsYRMBqfwX2s1QoJ8SZqurFxUGkH2cZWH9yihMS6PEyn5PdK1hTA3dv32H4PYWprXJT2AYWj38XbAfrc6Tv7nu",
  "key23": "31NSEEcjC5vPBoWQmik5Q3sRKQcotghff7j2LVnMuGZqSTjP5x6wPHBb82v4SC9GcUo8cWRuGYqcQuwiBcXaGGZk",
  "key24": "RmNocdx37hVzpSwF6h9quoQeRwZXbetg16aFyabZqh5BvFBUrEXQRR4Y9V54ZdTzXh4bFf4tGHq2hAqJ2y9Rfpi",
  "key25": "3V5j9mg1u6TQ8CYcXJrhYRFfQoPQyNkM1c5guBZn5KfKnH9qBtv1HXYvVS4Fuxc6VzhHWfamuC8a7ziFeCPFcv9G",
  "key26": "RCwUFZP4g1Xy5VeCJR6fXfFt2iWTcRDCovjNVQdjmrsvaVWSjUdJECZaUUbLU3KVZZiLLaXtoPeRpyigyEbDEMU",
  "key27": "gW8P353pvMjvRFbFfYetZqdkuDXkyR53KNxC4jhUN3b5uTMwJLappZvnSzZm6SwGTsmVLEjXxCBK9Bvj9FFkpU8"
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
