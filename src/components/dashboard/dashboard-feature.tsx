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
    "3W25cFLQLe1VpBWanKoUTx7VzpH69Ra6GcXoYRcXRueqoEVnAdHR5ChAXgpjnLZdbfZJvMEFXXSh3BdJvU526kbt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63j6Yu4BmTjB319FrhBE1PUfGTXei3NdcJ3XuRN6XXi74BKYMaUu45MkMT3dNZR8Xs4urzFQ2z4LTuSnDuiTzHHy",
  "key1": "51m1wWLfwDhzR89cxN2wWi1FTSjQEVggsRbUCYPBjmuGXMKEba5gE74Q9GZRUQTbvTwxwcuoL84fQSyQfJ9uTg7C",
  "key2": "4NzdA4aMJohsCUC8eCvNdo7AJoSKS2TD6LSCkvw57jrXQnoZqWKHfkiuEZu1UBs56jdar2cmgJmTxSUafTWgGR1F",
  "key3": "4S39QNiFr78uhEYRinWbTAfFeyoJJXvyHtq58DTWSHr4TxtS3Gv5otf4gxWx1Rey6XaVb1wZwnraSE1gYRAp4FVp",
  "key4": "4DhCrmpjdN8XaKk2tSY1PwpJdsTiRXko8QSkCW1oAVKpBaVYJZPhG8KVvxiYUJSqpFLfmuYw9MtYJ3gNGg9CjmXi",
  "key5": "4bGryr8cvYUdDWqNkCWJhLJ6tRHKNrLsSuZBG2jtKsZQvAKfG5Zzmhbava4Ejn1YAuFu1JgneLSu39miVXH3fKde",
  "key6": "5wr8chip4HtHRUo9Bn7uicF7bksaT4M7U74hVUuYRxnKncWvTWA3vM8sHSsq9VH8hLqUXjZ1FnA6pGxJsiwjiQWe",
  "key7": "hicce7ojb9jdVQ1AtEvKB1D17Rvi2c3XE6Nx5FNNPVaTQQX5pqvtRD16H7cbUw49gZrfwyJxCJHGobqicBFZjJc",
  "key8": "YQQps7R4azHgNu8Z8xGHh1rrswzdMg8bUp1fk9TaQbXcwLTUoscWCa65t6AHsmmiVpKEHZVgDgc2fT744LLZF7V",
  "key9": "5Nx1ShCiaNqm1QbFnyNH1PgExrFiCQGcrmGvPtuxM8TxBEKby8QgzE24x5MF3GLz3fL4rmRv2vX83vZLujC7VJBM",
  "key10": "2oeMJY9pcLd2K9EX2oU4H1ebXTKLB959zZSt42ddFgyKndCfsFyQQJPJso3NuzZqXY3XJfCe7ZEea84arX6BFpKj",
  "key11": "5pK7Vk3KtxixR3GTrzhnfsTUZkpMPTGfwu1DYDvDjWFTqs2MgphxpmGaPfhJnswFgPPsKq6i1VihBwiCvP3s9u1",
  "key12": "rRqaPVcMFRUvLaCkvsNHwsC5Cy5sQVnAcXSShrCjvhpt9wav8PdZAp81wLEZhEsvkc6zfq4zoJUSi4zEjM2ybhH",
  "key13": "2MogonZginXuwxfZdD7bQTEj9ghCHogKi1tACuv7tomEzquq9ao9hUvdy7cCc6KLREuDtKKrf2MHJ1Ty7JFtVa63",
  "key14": "4AYqgMRFgfiu7PfDRr6fR95VuXH7VYbC1eoKZ674k8r8hHbu2ZDSRYfgR6Faxmm3s5DJRhNTDVFJ2djqM6WdfWxb",
  "key15": "2jAazQjWidPn4ZXDN1L1PyZ3kCqn5sQ6scNeUtRQBveSp9JJmLk1MonpE4A6hyTZoyyYHKW2oLcKx4GCEWYqnQY3",
  "key16": "5KosN7Cmx53nWiMtjyYw3xJhaEa7bTvqxYcgfbKdUQ8uZFuwcP1wEHQBcDib6wvXK3z6owk6EkteoKAZw2H3dNC1",
  "key17": "2zCNeFJrKGJpBKPmdHge5iuWWLU6AmezJVipAu5wX49CtXuB1K3ceikZCDrsvdnLpqbXuWJoWQo5k8bBwj7fAonW",
  "key18": "2EQ6Ko9bpteymwiWYzuEt4GLYzFen7P7WoUDoJ3dLKZXNSpUksLGocZ6TsiXtG4uef2pfcfzemjLau9bXgPxAVDy",
  "key19": "8ATrQg62P3yKU113Uh7G6q1Jy2K4eMRz47GfWxT2RGTeiWp8aiYS8LLc8mzUVzy3JmNqo6RJQ4HGMZVuBEeW5Gn",
  "key20": "U5g9cqu1nTf89Rh5hJ4SNabzNLsj8y1xwfNpz73mykmmmTS4amuQAbwS2wBNmuHi1MSYshA1S5nKZKAKz64LeWC",
  "key21": "oqcarYRuwM4g2AHkJru96ysoFwkUPNXgvxFXajcemTwgTuGyPDYZbXUvJWq4hKmVJYAZomHodc8AhCctJt1Ke1h",
  "key22": "5kKR6VEfdhgnZPYLAQkgdvum9J5etMjgbDgGZTH8tcQdKC7ttwNqxoWmg4wMwrUPcmS2iaeg4HsTR4G5RJadnwcp",
  "key23": "3q12DVbEHmNMZRpBEnNVsNjDjD1mSsPRwBPnG3ZGDnUcCtcYiMCvvQ1Gx9RUVDCM3T8vLhgC3XGtHTmrbYbYj9ni",
  "key24": "5FuPZw9JzVqbasYSSyQQZPbcdfyT9FrNwjAXz89Cfv6n6Y8iN9cP7PGFkZfze3XjRVXZFAoPcqDStqVXZg1EBPED",
  "key25": "483nFqT6Jgos3n5fQsGJsadw53GdQQmVMt6xCybKrQzs5xHskLNBoViNcZzPK7FZ53CjkfZAzFPsabYGZsBeqW71",
  "key26": "5rggRCAd8KKoLUSp7cgGm4uZ58mqjtY4EYwF5JS3eh6N5VQUdzpsXy47p6vc4rZsVXGUrZj6EJRpH8SKQrG8ypue",
  "key27": "3J1d9kmqspd3vgKokr6XqkmjkV1UiFSYNFZ1isLV51Dfi2dpTiYoAmfpjmZLddZWx3FgLgXcj7XnBtwR8gws1LJv",
  "key28": "32UMFPZ1dYq68G7vsfKYEhcFLHyj3NdYE8dqBTZLaoPbrmFouzkFgnyJqSbbbxCVtjBAMqc2Czyo3omfT7ciJwGA",
  "key29": "51EReQkJEtbb1suM8jB78CpQvuDUNB71Z8THeTPRcpjw5dPDwTQ17LR4NsZPAqztYPUrS3BALw6zK26iJvJDs27w",
  "key30": "47dRnmJs9GL4uN3hzFFeXPbBpYh6raVhTDEsZSkLJN45EQR3uBeUa212EBGJLJMq5L8x4gbAR2wx3b8e5RDnjVzz",
  "key31": "2F4ECBjtzjuvPiVQ6aBkLaG6vtHFpQBz7oPob12DRVvxc95UtKzFZJ8U5y671oEWqppPWaPUk4wmt6B7iz8ksdkG",
  "key32": "sr3WnTaLfKAKybHeDamkj7tcG8fWorJcxSgnMuFphAhm18okUL3k1DUrc693XTbMtMFZMEPZKN3u4cn3c9J6V1t",
  "key33": "65ni9U1D5b9Fh57LzuztJwxF9FydnVkXD2E1MLpzC9AEun2m14BKaPSmqpbokTgvn6UZvCM35E748g4JTa8NZy7Q",
  "key34": "3hS9cMN56DRuAbASvtpTbrpwZXqrgeYRMpZFVQPxun18onTPG2R74tFynLc6uq5Vwj9NEP1g4R1tAAPJLC3QxnVp",
  "key35": "4XT3dytFqZRpjvngrQMCiZeLaWXCgypWgkB88ziXfnkeZwsj4GGkvEgQaNUeZq5chTa8fLSKcAQfEvJyRi1mrdw4",
  "key36": "59EFKXCvngTwtCpWCzu261pUrrjTmsRz9XWxdmSJC9YiyTsS1FdQjnpMMDPEeUJKn9XJhLRuKbhBv7WDDsFRmUUe",
  "key37": "642fdWBWFTSQ3qRPCcGMgt2qkJacH1yDBpBo4DkHSGuCsB6JU7jobNxEDSnaM6aH9exgLsPSG1sqS824cXApKPnM",
  "key38": "3g8WnqgS92A2PJwYrU4kqHNKhJ4QmpVWPuRGjwfy1FxqCvfvnoA1aUFexuwiJknsnETrzv11HHPZbw9tYCHZWRJd",
  "key39": "5pfm3zDevjtrNe4GNNZR7qtS9odyhJ9H9Bf3wmaVMgqHCfrnUvCjVgErzm8W1DbjKqxh8kMB8ERwDrsTpT4h28Q9",
  "key40": "AX6Zjdzjg7zfDC8e6HTj9JPYtPwLfCbxRmZxmLHkFEi5vhKGtpq5C3ygKCo6A7cD5H8KsECy3PoQPutFQNWaLU7",
  "key41": "5JupprobJvMF6xxkPPWPuzT4Xopotx2e7bnE3RqyHPnAxy57ikCGVgPyYyB1Qjenzfo13Tan1K6Ngyg7GdtUbyg4",
  "key42": "23FTtZrc2YNVEyRhPsirWy1NtKg34X5fc14J6PVcuZsDguHuJLufFGszTKa2XkbL2RSpgGF8RVLxgj1WheqSbcQo",
  "key43": "3wsGzmwNXjPwvWD2yxuvywZeeHGobriYi4YPNfDDee7jHWJqorzrjyUSvg1zDWfkNkuH2JTURexFWXjaY8Cp8xgA",
  "key44": "4VUJd3UWAscjNxWT4uHW3ABs4pQM4gzth59vR13JZAamyeP11hUsN3SwL184EU8WjYbBnCVkQXRY1HgyeEYzuZgP",
  "key45": "2BnXut5m7324iXTYh8zVK1Z89EaavFssxhz9Vm2FgzEu3Ah3Gzq9Q2kxsSfXw18R3GLgFHbpXB7uvBbiuRn4DGK1",
  "key46": "2wD3Hzh8Ra6CCwu2TssfzpMfpMaM1oMxCPjdGUQf86jNZ6iaFsxRXYvbvkFpvsQ66uX8UujimfHQWaNJJY9bvXMg",
  "key47": "2pxbXSJfbs15hciGBwjqTUD7otZHyJB79js5M9hoyRhW6DG14MGSxg35faBL6muhiNz3NYQ5XqFaEzrtvWrVQYn6"
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
