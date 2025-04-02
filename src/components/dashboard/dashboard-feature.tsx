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
    "5ZvBmfZ2ytTR9gUq2yDYmzsJBN6K8T1oFBuwzLTHVuWL8qYeAumzfFVkoY14cj4jpumkWSHf7sxEUEuN58Srhs6J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4778Dy9UgBYuWE2LtWPWxFA8mHbkGD8Kj45WuEQr9G9qKLA7YHQfnMim5sLHxYmsuQpToGtDAmhuHkH3qgowjr53",
  "key1": "3wmutbTkUhQABhr23qBYA4WfCQirDMiXmaZyFrqftWDL3UoPZb3dyVenEpj326Rnoes4qmm2X8LdJMT69QCRcxj9",
  "key2": "r2acD5Z98z8a8mxMQE7NPRVKTNC9oJwX3mB7hvzDwNQQEwgigKk7P72HTqsXxKBHJpxSY1nkHV5MkmvBMtmgSBs",
  "key3": "3gRUaeriD8hVi8JTJkFYGZJ387seBU3MRchp6FuuXd5TQxYnUShCEgoFUXh4YgtBHRexCXVgHfAmsf54y7q1bnMQ",
  "key4": "52UcLQvMkzdjSxkC7ZVw18ZWxaWuh4uAnGW8Jgt8LMzpR1qot5cpd4BKNRvknFN8NmopkqZPfysD7mX9H5TcDEJt",
  "key5": "5WzsacpQN7grTwU5ibs4TG1QkDv3HQt7T2zn5AQEdjNntj3U1qQ5yzi6SfYP9nrH5Gnq2K5QfJfsa6A5ss13Gwnm",
  "key6": "8AvJfDbz15kapnmZdvD7xnCPNQb9LHhLiMVWAKGGeyZ4rYg5DvYk8mot5ZPu76XYj8UQBntEPnCviVEyGuKVNim",
  "key7": "63ZVLn7zoYToHga1UKFKx4H7yJXy91hpX1yWvRvTFsimY8AtHw4Vwg9J6SPeszNwNURABa1yrZ4MJgc96Jt2Exut",
  "key8": "2scuj8SG9mh6CyXYKCvBhz4oYzZr58LDZXaAerzJSZSQybUxtywSuY6QKKdyUH9WqAWeiAb1wPiRkNSS866xbLZh",
  "key9": "3U5nR76Cub8n72ctvaCErDZFvYFffe2jRyfr35tt9JirnCS78HbH1hpvC7XF9Chtnssmn8SdMEfZh9mgKN4i9dET",
  "key10": "2dNcH8rmzXQQAT18UT9TW7w11DMwdZbhKHaGFk3KipbF2yuLJSTzTjom3Rr9M76zXtrcBp3TdNoJJ1icfM1fUxE7",
  "key11": "3gmA6GAJE7yuzuqjGNNhyqZm7jXKrLeaJeEbvPAQcbhBR5G7FSUfq9UnTsEukJPDeA1PErf5Sf3js5tNGxHPT7y1",
  "key12": "DhbNM9p6UDfAMguGtKr1vzmXSghivPEa1VYgS8RzAMkYJMKv7Xdi8hygevvieiwSDvBvrW2dfyHc4eQJNbCpYS2",
  "key13": "3cPYSiJqxrv4iRHjRF97NiXGRvxhTiUmbhbwfd6qwj3ApsZ46YXMn1NGSfoAgzD7Hd4njcG6NNQfDekj53rmEuDd",
  "key14": "MPWqGMhekyazYPHEefwLc2i5r92F4yBr7xHMJtFXNGdBeUzChQiuFnXYoxLMdyzmXRQvWiffSKffybm3gRRyGYf",
  "key15": "wMn6YijC8Lb1gz1fi7qHiJEsncJcYwCCzH6BKjmvQKjMoDfMBgqbneQHEXRHfEDtYUkUnSSZvKyAi8t1k9WuJUh",
  "key16": "3aoWJQUb4wqxXJE3WhgqUvvHs7pa4ZvLbdRN6ZM7eTCWyeHNh3Ja17ooiVq4R9FhGkFjBoGT9JBpFiUmoqET7p4y",
  "key17": "2SNd5aN4Ggq88ToMgccXkC3rCkDQPTWkXdPa7QzJRhHKdPgUrPG2L65Dows4eT3UJh54nvpCVGqgyU1pfyDFbyr1",
  "key18": "28qHrJg9xxfTsmHf261DhoxbVt9tb1vuZNsTQynwiuxzQW6JBP9rpBoYnqwgESogBZ11UXMkoYZdf8oF7aMSE4yd",
  "key19": "47qBcm9gC5nYhZS1opESNtebyszY52ACZNeG7Qd6kxiehPCV3Sso6HTvkyZD8G6MFbE2Y3xsx8JrBzM6eL1XcQXB",
  "key20": "3HmCvpPhyuScK3nrT22CxxcX22KYHK2p5Hd6yQ9Uc42LwpzC1ZqwLGNmg4o4rr8KQR32iRcw7i2gFakrQnx1T3Yw",
  "key21": "48MSV9UbGTHKVsNrgXEencwRmGrEvnhYU96PRXGEEvBpCmv87XthUXHE2Gq2gLFMTL5ryHMFjj4oRg6KgF1MzfGX",
  "key22": "4bxFWgcsfXjoPJaKn61iG9vCxMM9RaPfgW41SYVYg4gCYZ8BXn32RSSZUqNnz6B6Skm2WEkLHv7zNjSmcbAeQN8C",
  "key23": "4XydioDEF6qxmAvsqT969dyLZMCPBMXuBNGB6vUCtCZmHU1qvTZXQAEjtQGnuKFcuHJ6PkPFV46SVXq8yH2kamyS",
  "key24": "3cLyatyGuJ6fKNc1qiouzuSbiv7PcrsCmnjhawGTCx7B22nNtM9JEpiSBHRdTb29W131ipqqG3zCmPwN8rCGcQVA",
  "key25": "3ehcp9Hv7akMw37AKkiE8kQp7bBJ89HRvMrXMebTirid45dWK8YBatouSk5q3XHDkyra4WRj8niT97zaZubTXVQs",
  "key26": "65Em2mr8A2QVfmih8DMYhehdWLy2Bki9jCRuRkKyksMrGKzHKP1aLLwzqjqdHDv5933KsX6nExrJz9Y5tPYh9eui",
  "key27": "5CTiGxsAXYzGRHdXboytUb9vu3yN7CWCQFD5up9oJEL2evK1V7JTWomUsSrYtSwQX284C65koTCkJXiBMBFpiA3B",
  "key28": "3rMXhAPuBGbKnpxhn6wnd8sLtLWFbrn1PqgwRqZQ55d6NHfhrjV6VmzQB8onb6ECnsyWANKQWPztBjehtvJFMvm3",
  "key29": "2wWtWPpwrKwESgTcgryFzVrQMXboQmkBNzNMnHKGL8mnt5rqRskxcMRkqXveAvHgfrETsSngsQJJFVYba7ztUNKm",
  "key30": "256phAxETqYdc5VVoPzGhQXUDWnsLASNck7Ue7MUSP88UipsxcNjntKFsoXdPK3Rcny6rm4ky9ab24aa8gYhgVKw",
  "key31": "QJXpzdnGJsBv6uezsEvHzZrYK9ShopyhGJWm1p2ycNLkfKwxcsdEaDELgEEdsm6p4rHufwJ9bj8nFtpodNpVvi3",
  "key32": "36hfiiMtS1d8UUSrHUCvA2m5y1n4kmcRgUjwDxoCVuPUGwcoz3pzbgdd2pk1JeVJLR91qeHcNwT4FW5t5fkb6u7B",
  "key33": "4BRA4R8JGHxrNACcYbMsctrAHH9qWijE5ifkDJfaDguzCfkdnqsj8FtKhtVJSvnN5kZ2vPCzXe3FRYdeyLk9xZk8",
  "key34": "1TrFdEjC9J6R1zK2oJCgSus7cZe8pL1pkF8ARs8uKuM4fHp9EHUR86SN7C5U6ddC6efewRmg3qfijzdccgWKMtf",
  "key35": "5XBAYCnxMoitTF4nnEgtVNBFe67CVzNGrcasVvRKdPgr2XYWPYURED6GQGv3TsHQaKM1uE3MFXx6AbcFxiWNmi9o",
  "key36": "5MVpw9swPqCq1fzKH9yM9LUPwyr4gmcb8xu71yTocn5BrpxYew1aw4J4psYJCwKUbjCJKBTSuBEK7YjxihEuHiqW",
  "key37": "2GEgBsKdKSCFrr4LiE3W71ucXDae5ao7XanhXF4wpLPzY154mNrEymzbwKCR9GGBqzFdNLT2jjzwgRMcV1w9mfnG",
  "key38": "4MFzpxxqhTpi3FPn8THZiWXbN5qfG9boGMAVrqgSVZsA3mm3kwVRxm62j4RWx8g1cwAKD1HgQq4MeQHgGFzpDHfN",
  "key39": "58GrrD5Dsh87rL4T2zbMqixDXv46eViaTGdgDwkGUjCsXLZEHMoKqUzxecu4LHpvxiZaW2LB37Cjo7KascLVHXpX",
  "key40": "9sGZg48nxd5BKhH5hCMVH331XoBAt86LDnuzsomdQFiXk5De9YgtggFMZxtuKjSJdtvxjtZHM89kyde1U8vVgmC",
  "key41": "5khBn6iBUHkaStjdwtBZ6q1UHAwak1vd2DSrgEQLLAjRD1MNFPtCwQhhg7eZG3Z32yKmmYuy4gSNKa2bzB59BZjX",
  "key42": "6WfDbbyzYx4HRbMgeLxdKof8XhJbtC2hFN7XQpP8w2hbJ16Vhs6ZmduZCtvCVgfm8PQLwP8hYy4BVL8nhbLNnwy",
  "key43": "2U9U6k7Bf1KGyoTzFpfDhfzCi6EWQoZ4UXMeXLri9Www9fvP3tdupwdqzm1YQyGVqsvAr2uz6UmpF4UgDG6bteZw",
  "key44": "xM7aC1CnLR4aT4d5DgD1n7bjhdXXGhB2YQ8tUyWDXSD8WDwj72oQ8qb2P9AhrGhFeQTa7L4ou78pXbMRE9uN1Ao",
  "key45": "2CoegEgdPTF1RL4Yu1gzEYBgyQYPXV6hBB4xWMggFZ4EJQDNdojpSwFP5phPmXjmS3A39DmCWRVcivjvxXwfc3ta",
  "key46": "2xscZyX9bAvFwScU6Uah2WQj4LgV5Q38v4motroLQME716d3sNGoRnC2MhmkAFbY6xKJdMWymynErgdvTqezCMti",
  "key47": "2pCkELfgYMZpiK2ht95BPRFaJtNk6Wp9FkazHCAqkvfrjGG1yKHVm4R21XxnvtDvfpQfxzocLYEro5h2H7nunA48",
  "key48": "LTVERWuz7ffYdGmXrHobfBnT5UhdmQNbgfQ9pjhLqwJKaFmrxRWvAF7NLaKfASkcDhxwJB6mzTyzRRaMMvU9ijT"
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
