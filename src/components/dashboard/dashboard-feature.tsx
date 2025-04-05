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
    "4jWtQc2nYiLvQajQBn5FaQajg3zhWwDPpmH1JRvSnK8BZHQsLpSEsLRvbagwgdn1ATeJHGTmk8YgfzKV5WM3bawo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2c94P1yJTsCMqJyMV6KfmJ3fUMc3nxKCT5tE2VwXB23fPvfCQ85iXdj28HCkov6oGPbS7vq6hf1dDqBLNAP7WbB2",
  "key1": "2Mnq5UjYLdAqEJUg6dKbc9uVUtvb9TFAzbUtQ3diQYwsdfwFiyyqrS8vufYhd9JAEV9mLFfRAiJPRcjzaccCdPQ8",
  "key2": "3qjRQaUUHpwfJ7D1U936rXfaxjPgDtHxZ6sotUxhUGPxpmcgU3gNNz11wdh1Z2MvBA4JSoPfoUXnsXbqE2YXoWjm",
  "key3": "5YFqpG6DCE5k8jzM8PpGbWtbP3rBtyPwQmfrNQbyPYmKbNfLxA3Aa9KrMncv6eup4faQiNitK6J7Mmg5J7nkky7b",
  "key4": "4AjwJg6mvfUJy5B2UVY53UZbq5CkE4wCW2ak3DPXueXZ9KVrVAKxQWw8X9W6eiGJAWq2987DNHviWuMr8uvM3TCJ",
  "key5": "34Tb1DcXpsVdE4g1q2etFCN4ydvU95BmFNEBgY6bjJZdhTqi1AgQmjDSe5Qw9nXaCh6UKbxPmMSa8tCzVrFU85vH",
  "key6": "5vTyEcQmfER2ez3zWcegVvUyS68MeBPQY6F1nz1BkeERCeWEB7DtYBZpyzBSs2Tk3sv2fCgt87vQKDtto8npBmwt",
  "key7": "4bQMR1gbZqHzoDia5foTwsTXHrDkKxAt3v4sg7QiZBxnwQQ2w1g13DTspzZpu8nTeqrHxgJAEKxK5Jj5NDSAmLGr",
  "key8": "5TvD2pbsgvoT9FgNWgAwXATqfJ1sZCMjcTEmoj7MYK6tk1t6VgKo3FB4pKxcPW6TCNN833w224zQpLQo64KnBAF1",
  "key9": "4udViuAu2U9t63P9CdRL7J4VRPjE5GXi8QXdmeBidMvvta764AZeSzWKa9ndCj4JugXDDJrHUiDBuAiCz5jNoaKe",
  "key10": "5wjNwgLyGTeAzdNVfbEFnwVo43CqRpF8mBfBcZ2QcvLtzN3gzuTmZCcAJfzPJzRQAStusGu35HVj83ATuCLJfe2N",
  "key11": "61MHoxkguVedCjgJsiyJxr1BAg4PRrd5dJwqV8Rt3GeAhUHSfLrhhDBkUdVujnGaZmjNi5959R8KSJQKzr4s2jwP",
  "key12": "3DCbfoBnfbM1twTrhpia61zVRWLouqBtEbkbBYSHdqNCewK7UdUd5HQo9mxvFhnXAS8V9H62B77EgtGd8Fg8Jcp2",
  "key13": "3QejQNszVvCwJ5wpFyE3BAciCVfnWLvSf7KURTjj5he4LxvjguAYX8qWuh639nr9N53qw9gDEowPDL5gSWudRpk3",
  "key14": "4GqGDPzY82tjnKZqDMH7Uhsn5cvFs3AoTef6g65FfFQmQzsA9QhgDTWQm1YY4FAE4bG1AaoJSVNrgpt6DQHhMnU5",
  "key15": "4uYvqcbCc7eWySZrdFnTN9cCDi2VzC78qVG3QrvdBka4EXqiMCxMDe7npf2n9XYSiEhEHVJVRSoT9ogy2dJEuDV3",
  "key16": "3qRx9DhyeuZTdq3SSwLqjdeeTdTiTVWuXneJRvXzkwpXTkwzV57ELs6DiSP4gJwQLxEeFqqT2vE4bxF6nTNyGsut",
  "key17": "4KtxqEbBisMhtvLi5WVqKJiLjipkcgdbiLop5LZoRJHRQiFMfawuDXFSNdGyffeoGXcAMi6UHaHjgQ6CFii3F8Hw",
  "key18": "2gisWnZJLWoSMXDd2DePMFFYQW7vAk4BuHsdFwXTxjzLkucsYwxTjueDB7kzcB1NoCoo5Er5cPH7FH1Bga9izrRM",
  "key19": "4o94KrYautC5BXqgJv7oW1MJxWC8xhofaVupDzgHHoFuzQZZNNWPM9ScYQ45HdakHPiKcuKwKY1J3mCnGLcsuFKe",
  "key20": "53wxHr5oZEXTXWj845kZzcZrB3zoKnvtmiJGfQ77EgBeyTgvK5xweTBu1brDtbLjDzmbgrqq96mXJ7WS7rmgG7S4",
  "key21": "4SxqQSbx9yEG4yWNHLMLZ9JKr6GvQNnZJMGUq47xXkBmzYVrYqSEjWm9CNKMvuiRV1esCLCpuFkYUverFNRo3h8y",
  "key22": "2pbJcyzjicGTqTnqQmS4BRm6bKxG8va7H1EMLF99qtVuAV2Bj1eps1FNe4K9Q5ajnERsGU3hAC8UY8T9ykiyHBN6",
  "key23": "d5edaoNbG2XVy9zZC2rRcY5PGQywZ2psVRxRFu6Meu7qPXj9DuoyFdP9aAJsUTeP9BYPbPJ9drDBGfA6EmrMhm2",
  "key24": "67phGMQmfMzfwPcFmoNYY1NVNEQqSggHnwUSaS31yQ7shjWDXYahq1Lpy1Rq6WJfezqWhUsmc7VNRkQek5nW2xXM",
  "key25": "2fEkDLXeopgLkqJ1Pqiz3UxAotLyBXxwkSbtqqScLZkfijhR3gfpwa8nEUcWQd4kXgvKZL5Byz7n2dhCUob3RYDc",
  "key26": "3UoQc5wSF4gQwj7foaQCRD9m4mWaDQz6aJAGsyeHCJyph2kHMkPHZS1RvW8TxsNGMBupjT1JHgyFvNWq2EhM1FVP",
  "key27": "3qv17CzHGkGq4ANXkkgdLC9GrLdFJbYHB14qJfjPGfYFhQ7JcyLBLP74KJMzeeKQikiUmkq1Esb5WdAXLKotFZD9",
  "key28": "2z3aZZ4NBLf5zqtzVS8eJ8xuDgXndhpUKHbzpmNF7F4hDMB9DYerk6HkCwF51ETWzAFNUM7sUh7kyW1hPth6XMQb",
  "key29": "3UR4pE8ryZK2efN9P4HHj1JuuuJ3DTS2FMhvoBJF1utBhskFdFUE81297gvDMKTo2QhoPUFpKCJgRY5Rfvm7DKGh",
  "key30": "5p2p38QnE4AP34vWh5ufriHtaWMu4LsLAfzkSFMDRm1u9RA3T2uD9PeeLx8M2a81Zw7yPRUVGwYtwAgY91EvAuTE",
  "key31": "4BUbZBEknHaxp5Pk2151SL9PJv6DQjvuHwXXeDoRdncNKZCzWTNZ6AZKXXCS5zvzWjtKkED87pbwdSbQGZKUVDww",
  "key32": "23WkVqBFZqjHNxWvvoVt1TSj4Pi1xAwVdyjSA38WkqEnE82AqLhfjthLsJQzKkuPP4jF28JFFFpQ7aWfLCiRjfQr",
  "key33": "9GTpEUYTaGDBrYjKPjixbsmiKfZhikRX9cTzA4UHo3sH67LF9kbjg1E1C8X2L82kqrh5csUxVMDhVMzfqJA6SmJ",
  "key34": "2cm6GMQa7t2uhDtSqxBcVJNRqshxRxWhk4bTLLvmPSBcgq6MzoxQx9Uy82crMwWzNiRjSEvPToKiNpChbkuh4JXU",
  "key35": "5U45zbbuV7Zca5rCWnyTdNEhGKzcnHyPwhhqc8Czm7ZUeKg2RsfFikidiQA7YQ2QbENjmLGgoieVpG6Ax8UtCZBf",
  "key36": "3u1LzbjSYVVAKC6LFenwj2xYimxi1bzPD9FW2HFWMf8EXQFd9KZtFtPPS7BiM1297frH5vaGw7GyAdYuGRgH1T8M",
  "key37": "LywNUHjPaxrzoK6ejpCXvuu12NefxpVNkF1iwwkXBHdeB6MRncXsxG37YTFT6vjH4UhQoLEeykTWT4k2sbXmCDG",
  "key38": "27e3AeofYtRZo9VcJwpb19kosD1MBbyEY3WTSXJosGm9iaM4abin3W1gTXoJUpgWDUCdKf8S8RAsMkXseY4fMXn8",
  "key39": "ppQYLrfmWBSwp3nrLcAWz7QNue4zH9KmnSdqA19mmk4kZP2skAX5RAnA2SibamtRLAZJXLecx3gzUKwRjfZD6nf",
  "key40": "5s9XKaZXUwbm2ye2TJNzBBEnMNJjzQPgKoRSJF5bnCNyCXF8cm1vnsFWjGwytE7DxhP2VrxgLQ232pke4tR8tuNi"
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
