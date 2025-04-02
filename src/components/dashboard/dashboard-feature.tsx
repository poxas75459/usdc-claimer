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
    "5VAvXg1i8PqBne7gPbQ9pF6GcHXmgdWdWhUYsqcUcCMZtiH8hC93rPjxt4WYeYB2H6AgVZufBzEnSGrGFYhseHz8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f4Zfa7Y35qABqfpsNm195dpm9RctjGr9oiySaTbTAQKvMVdNU9TjxdhZnN8rkiAgcfoJRkmUNwVPzaTnsL3RfJo",
  "key1": "2KkXZtYUEoTs8ztXxAKwP6ErRro75kZ8GfztM6wB7DZR2BhajuF61ST13u6X65aqioWmVSxYTT5sR9a6QVuDzDYm",
  "key2": "4YxKn9bk8oC7x9uGvzU366cVvSJBf3Fs8CAbzwra4JzbexamYPjs8wHnepkhTfJnLUoDAaViZSDDYMDz9UDv2otk",
  "key3": "bNBjHcDHKDREcpxBRo6H98FLTjYGoZZtMrPjhFobs7Z9WNNbWnjjbQRogVT2o1NehNvYQuJfXnL6bAFz4t1dFyc",
  "key4": "VZjq6B2DJ7Way4wr6v76Sjz3oUgMK9N3Y7q7jtwsLUh68Mo9Yqo8w4sj7JTsbBeq411kdzq3FYZ8HTCit93PJ2v",
  "key5": "4g1nufzMgdbqxmmcyNsHZ3TWtTeENL65XQZC3mhyQcEdj84qVQEVVjWSL6QVq7oGQMFyXF4ZFvzt92Mu3KopkpD3",
  "key6": "3GuanwfoMy1ntboo11ZARyu7z8RqdoafQbKbKXNr8HLgVYe1kMLGfWfZDwTCk6JFjmky7V3isKYBij5252xbRc2h",
  "key7": "j2tC32YKqmgY6YtazCA6cNN6GvGDpbgCTLCoPH3wpmVXqxPmc14bPz5sXZdEVchndttCWvM9scojiBWBjFQP3E4",
  "key8": "4UhVGFppAYmUqZCh9mVsb3uqAEgfpuw9dyJaBkEt3RkP4wmPSswB6LCznjiUgEBx47iZdETCGCvZjj9cVdkZh1c",
  "key9": "52paVD8ZmUpj4LnLTudXV39ZsEbqDH75WPcCs5CYywz7ExEvqSagieB8Zbe6Rj4crsBAtkJkbiFTvkTBYc4hCifg",
  "key10": "4jMxKvBP88H4Ub1Pd4iuCGsgmEQy4QwvdCEkPrtiNATbKxGsW2687gvhd79kKp4BxVeDiLLCcCWiyFttTVPhzNv4",
  "key11": "4c6dELhmgoCjmJ6f6w8y2hA8bEhFo4bs1PS6V2t2mEYHFUthJbP8LmoC7E1C9L6SKFRvHaBeRyWSKAnURt68SrQg",
  "key12": "2BfdvVMvdsCpQnViqcWS7kFebEawoLtcytWjzUfZM9hYkYNe3Agas6sMFrsL4JXMKY9rYYCsv2Le17nUNay97W9y",
  "key13": "2iR5DSrsByYRqePky6LvG8T2eE6fFPpQodRGS29sfUXCgbZwQz1EbBiUZSp4iCWMVPk2StbsUjqDTihNM1LMtEo3",
  "key14": "3cPnW242E9uqXMwaFGRJJKjFHcyMh49E8wNKAAncTtP94GtGUzGxvpWKDh3wwg9feRJKZqG4NhN7RzbrSTgwWMWS",
  "key15": "3rAfrUpF6fAjgBh4hcg3rhmY2SKnjehccZpS1nLykm8FWGo2jq3VkS7FgMysscwqJMQ2BEdTMv8Yi3LDamAbaGkU",
  "key16": "5iqpJLD4zofZseoGJN1wHw3r3KuCRq3ZGnizCD5VqJ3WRjYP6XKZd5vnJoaGLj3VFEzABySiWjb3RzZzpgisK1BY",
  "key17": "2PTuKNz8p1y3ZhQ5nAd92mnHaoY3gUmuaooeXk7HDJxVJCcpZmzC5UzZPPJ2XorCxuDMQMqqjLuz6Tkwj88VN7Mi",
  "key18": "64fv3wjEEuai5zGiS6fXvjypbLx6KE8rknJzfUTceUQ2tgNaJ7G9Uco8UecEUrNozroQbeCtHvLEvEgPiUotX3F6",
  "key19": "3pmksgwMU1Lew8GGqhaT6pvQrtJ9co3bA3DxWh1G8oyZArunG2Qa9vrBpgiqN8NH214tW4iyH7pxNs5QgCmB7pp2",
  "key20": "4YhfHe1aTeuMX9ZMHaDrgnYtAm2HJDRVWWeCkENThTqQ1L2nrCwurhyKsUJEGCx2USdhxsn35DbkQ271Fva6ntez",
  "key21": "7PqZaRHWwGBbcdbpDQeDi7F2P7kPGpv2Ph4dQa2hE3YDvpyHrwWNcfLtfghobWKzYgRVGzrKTmXpKxNB3RRbwWG",
  "key22": "2k3g1e8EnYRsrb6PBRmuZePCxQG68j3xRdj3uKz2eeqUDbR5kcDCPqmvWXYihgoEFWYNvX8Ue38xE66BxeNWYY8h",
  "key23": "4mrFWRurXG8kyJR9xjxkCw5hQZQ5Wzq4DnEYG2z5npJXGrWu5Qj3r4Y1gSTDa1GccVDFyfqz9Mph2mFHgAxgRE1b",
  "key24": "5nFRfS65v3LmgxxNAeu5QEB4aa9UjoPGJCBfBw72vVKTGYfK6BnuBr6z7sF7NitBsf4qqWD6ucZEx36iMd4NgDL8",
  "key25": "2uqiWej9VpAxqYAguF1LTqz6kDR3did1AjcYKHxoUTR7yVSS8AEzhYfXfZT3d9Zb6mG9Lqi4jxUGTS5e8uRGwSL6",
  "key26": "4HyqmcgXzJ8ZWeXJ1Yp2PxPuEpHJ8m1Zq7J9JLhhhjpUi7npuUcXcPDaLWypUNdFwNuHWxHh53qSzbovSEdrDo9p",
  "key27": "4vHxcUzcEnvQfMijLiJYJ4AmY2N3otvwvENpjdQe7Xtw1sCM49iT6TmNwU7QSVDZSFJoAGKcCvyhbqRFDj2Zfdgq",
  "key28": "4AghMJEKTwPGDBRz4XhUqickcFzhvAJe7wgtoM1FDxKj74XpbojQjkjkstscZgbE3Rb8iMj7pMokADT9aey1YwNj",
  "key29": "4UXSFt1XdSb3BWxAqy55LrAaLTeB215oKDFxzQpPP9GK14K7ik4GwVTYja6Z61WuirhM8acWX5M38eCEZHMB8JSz",
  "key30": "xpYiiUGSJLCp4kRnXs1UMUtPw7wDtydKh27hpJ4bqt1aEDL261tomfFeVwWx4C4BeyqwmgiCVL8cTP5mJfokaW8",
  "key31": "3PcURaGP3qTGGrM6ea6W26oCqXLVZXJuJmyHyEFqgJbvmhFzWJHQSYsDNRoEVKjVRBJP7Gx9Cx8iSy38mtyVhNVm",
  "key32": "5iuEvY74fB3Eb3ENpzvM1TDeTaMmMqKxzdie6af6mMYPN1XwbgaZasd8YZdMDvVV9y7exs9NMbnyY1vV8hwb7ofW",
  "key33": "2oSoPK2YhjrtsfPoQjnwjW3T1N4Ypjdejag8sMv6Fb5gyasn1F6KKb3iB49xED37AAwuS91ktyjKM62G6wG2kY2z",
  "key34": "gth744mcffbcxVFSVC2AoswVAN7aigqDg1eUU5dDYMfxf4qKfbYKG6VogC7WnPCMpzSBjGcgwvQ3TMgJxVn7GFM",
  "key35": "54tTMH4LKbjbV5iAS8RyVDm359GSA3Q34U22EaFyoJ3c5WmBJKDXWRJxB7gphBrLt617egTaBdWZM9X6mfQ9umvB",
  "key36": "4XyGs8pL8zJdqjpQKwL4Wti2HdWnLrGAxeNmYHwVgamTohx4hNEo2utVoM6WvjAoNjJpg9dE3cCgBz712FsCBnoz",
  "key37": "34Nj5aNZUBh1AT6EuX6ovYY3f9r7dsDdj2aHnVjYkiLiZ5e2WTWwqVnFLKJvMx5ndbL9ZWFFRMcJQkC8dZjCnZTk",
  "key38": "wJBFz98fRwDCsGPFHJpg7v8fALcKeRu8mim399o5Pz9y8xzN2QPvTyvDLBjtXTSHfuoPKgEqEbDdWNCg7r2MKnS",
  "key39": "4VQYnd6njbzmd8r9eJmxim1cofQxcm3gAp4Lwso1KNMdwDuGW5wKqGEVDrpqveD3vfHHWZMu1yuts4UMD8JP9pHk",
  "key40": "2DnXCsiQYh9YkpTdv4Pzs9ufwhhSyTXyNa3CwUmGjSU9q7reqsT9bC92tqx9oNaLsU1M6QWF8zdLdo6Hu2q8DYaB",
  "key41": "nsumVjpdPkuxUQUnaRtLMX1zyNBSzxyVFkGLJE1KX4yiwP3mCYxjH2Ts6vRc2Prk8KYV1xJu1LtgQhXKkFtbjCQ"
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
