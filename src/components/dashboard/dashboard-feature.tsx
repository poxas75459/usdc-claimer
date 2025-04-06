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
    "3Ljdz75MQKN6o9HyNmhorbBGxEup8RpsbhEjC4a3TzVwRgucZ8QuX1XN9QPoVuuxF3BdYSZLDH9VsUdguiYaWtjC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fepHMNggi5iusMSGNsFUo4uzEZWX9A2hRpFaoLPXQqcbBhej4FBMtzMCxSTe4Cb7ZrreKRXngaCSd85tzaLhT4a",
  "key1": "2HTppdrEuDPpE8NytLdxzaTPcpJNrXTmoVxHqyw7x66t1Eck63JQkqesjVvJuU9LBaA6FmLggB3VDy5xHw5x53ac",
  "key2": "3TQEygqhsuC7fh6LNeUhAEror8r1wTtD71ePp1KBgD2tbHJd5vSQNhfDmjAAKSAj4GuxbcvWQVaM7mWr1Pbp8K8d",
  "key3": "5tJ1J2f5jeJWfJPSgfdzQMUKcJoauYdfx7P4JTPg38jGMi3VV1DiJqxhsM2ScJpLzA2vZ8FN2u6uBe2oTeYRSEWW",
  "key4": "Y8gYMdeD4kPS6boucGYZaSYkpBxANA2be9MvqXbhFvmcq7f7S6x84ZSUPwCk6AvM9TkR2H4BKPD3KqF9fEVd9Xq",
  "key5": "49qhB2AreqsGt8LdwNFxPs3PzknM4DwZUWZvLsWKGnt63YovNdJKqaSj7bkxNuq3QE7ushwit3K2KmtQt1ixz2H5",
  "key6": "3AVDqmpCw9JUKsEYu8dDgbbRWi4QA9RJscjZewVrRLoMEnsTSjAVhvBrBpbWj2nTBx7YhnsGoAweLozzJWbT2VA4",
  "key7": "3BWohc6zVdjbA7ts1DXXRYEZNVxuJjqDuFE3oJkS2aG2id1koyLLTbYp2Kec6buFa6xg4pkKnjutAsobjyF4BbDk",
  "key8": "36xb5TwWz1qsmkL9HW42ynLpkD7PCKJsPr4PGiVEnCDqYFY5QD7LNLqTaaRm4vujN42auj9817TEttzP1YnAYEoW",
  "key9": "3v9g11Hn8rETUuPXiiLW3EDcoNasKH4RSMLJQ77xWAqkvbUADXEdMZoDFGXeZAxFvnEGcKnuQZo5GRX42CzgrPBi",
  "key10": "bzWxzY3pD371QgF2tLqavMYG9a2ZNNufrp3LBVehAD85Jk4YNgquRwSXATcVx1ck2Eo43iRa3zGZRqvxWrS5YYw",
  "key11": "5SWZ6aJ7aXSJEsP95Ta2kaEPQffawYV97XhYh8BQa3TntJStuss9FYssQNp4NMkaWjEYabs1rfC6qvLD9T5nam7m",
  "key12": "5Z1oZMdXiBQXQ2aVHSvLWFYnYRDswdBTEJ9Pyv8F6r5FNoW7KHPAHiWeQfurSLhbXRxjsdtbUTFSsGmu6dUFJk4D",
  "key13": "16PTouTHXM6W5e8x6GxA3Lf5qiWRF8KxSS998hVTBTD5bHJWsBPZHVFkA4oLVardVti6jixs3hxsikRuT3JmErz",
  "key14": "5G8CJFPXYhWhsoGfi1pJPjEsxZWci2bDgc7F2KCtYwVnQx1URPGJ7dN5oXTmA5HwZWEXBqSqeogEdutLouqwJnoD",
  "key15": "3Y4R4ECzcoPrnQzKc7cG8EJMscnjQpQee9DP3jyhLVUeJ7HFXA8U9uV4S3njxLXLQ6MZPF79ffGYLgb4FU55gPx5",
  "key16": "ZkVGt6hRcyLzyWgXQtCkCztrNatsj2bMZvkkZEhD8gdNJJu5U8nAzvndgnthMCXbrb3JGPhmiYjX2MrWDAAWSb2",
  "key17": "4MvsrGEpo9X7SEGaw5r1rq2PWyyy5zxhrLCNhjxRVdmQmq7ncDANeNpH2DhWb97YoBDYpKk7vvCNPEDrB8Bv4UjY",
  "key18": "62AFQtsfrE9BZXPRgj1uLVK7n4L397fovL3qcSYymUqEH8izHoxkii4YMHAvCJLvRfCL3Fg2AR9YtCniDG8vwAuk",
  "key19": "38b29RovBunnABWmqKCGqd9gxBmyH5cD2LsMRM1iWaHVo1ZuCXGo6fJRbJ5jwPhzptYofG8tCQLBv6PcxamDK33k",
  "key20": "3vZs5QUQvVDTV3diYw3JJj9B5iezeDQiggujm86VHbaXn8YRtReZVJ1hNwAuJrgTSC4zPX2ftk6CdLkXavgmjXvd",
  "key21": "2MJus5WtxmYpxvc8hK34hLpruZnCc6uXt8VfEwhpFNppQSijpqokhHK9zTD4C34K4hURQEBJQ97Ngw6VFkYHTPjo",
  "key22": "3nomBYjxAmaR8HSdD9fzefticKjMZv4pvM9iPq6jdttqujePjjmKNfjVdTcbLtNHgw62Dyh2GVehnnT4h5dyDpR8",
  "key23": "5nMofNxQsRWAmoD2ZWDKTUJQEddQZbU13xF76EoofEYVku1or9jK4HkP8uhyyj2q3pyNGEHNZJdcfMwT6oBhmHMc",
  "key24": "5YLcDGygBfVjU7bTin7LtrxdGyTcjdy1faiHiEksxVnqQHKRA2QUCrpCHF3d8noPZkzrdDcyActf7Yzo7YFNBcpB",
  "key25": "648kkPCTXosMNX8g3gxvwU38xHs5K4wUF34jAaxZwcUWKNqwzCoKjTwdj6DGgJEMrmpVjt646BoR3nyEuCFqofJU",
  "key26": "2sJ6ioZkJTrydak4xBqsgAXwyfrMYJYi34RB4FKtU1ZgMMGVtEWBxEbiQjSpLdfH6wQgMcgEhHNS2SSn9oWmAxKB",
  "key27": "hGGPDPsjqKUpcKKTAwMMgpk1eW5FQbaCwxmh6RaEbXHY3ZicPAPy9XEbKDi7qV8MqPLfaJMbCkWAhyGUhC8GkbH",
  "key28": "4XAha8chwm1n9oM56zEcgB7HLEUT3kYzMs5FMPhijjwYDr1L2idA73kYts1Nmy1mz4Rs2gTm8FoRexM5DE1DM3bC",
  "key29": "2gVtx8Rsso5tGSJ7YqZjREKfSGgEUd4TXMYE5LTtowqx5u7qRBJNHo4BAJMTt14FLpUuBdBzymUFwtR4UaeQTWR4",
  "key30": "zrnqSSQsSW5BqpafHrp1vAH5mS3NAoQmgDwgQxesYhVBvjRV56C2n645UfPat5jLMqk7bNyR6zFRi1RZ7bUk6vh",
  "key31": "27Y3ZGbv9feWKCb5ori9CrgvxKNHBFEHfsfiMrgqiHjSiYuuDVPzx3WfCA9DGbeU6E3BvqWoURZuxH9sxLxxYssU",
  "key32": "23JbTvt6WXtN6D4LoHNqpbF1ar1syTwVbo5KZMveUbuGTxV5sgSsnVNcP8RjGshBmcTben3bfE3dwbM3jYF9CsuF",
  "key33": "SH7xerYa1ojACmtRQDz8Kv1uvodoikEHadXL3ggHrVcqHtPCL4zXFhFVGSnPXSuq9MPk1ZSrgJZiM4ZSNLMqyMc",
  "key34": "bz2SnUGKgKN6Xu24UUMDGQkXuLzJxY13PGUFxN7mGqyjZQHfCU8GkuuNvypPG24NxyTABsHiKbR3g6SEdi3tz4N",
  "key35": "36PRLWwdMtcnSykd212cqZCjvCesPf7mAwGUCfNb9XGtffUwLfgfZ4ZPofEoXLS7hhFmtUobxNrcCfQSaoM83hQU",
  "key36": "38RccQiEXz3YPhm1LSfExUt8HcjTVHYq3zPo6VDtFvHyRCExWfdBG3Y6yDLo7WFxEHV7fy3qFdBa6pGFEbUDhhUV",
  "key37": "5A7etVBo6LiDJz7jdrUPsVTkvMohbo1GNpcfUqisXfGDDJLQSXHvWCnT54xR381tmFpLK3nzcptYmeKdQN8CF1KB",
  "key38": "3VxG94aKBqdV4wDPrSNuDR6CLFTGBp7Zgu7ahD5QYnGUr79WkWMKCDx6koawjvA2f2icH6QyNXmmgau1u6m62ybY",
  "key39": "4HATjDYUgUJfXHFecySAJzWa8o3T1z9dnGXNhP9DykhJnDrXetHN7aJKAQBy1NAMzCrHTQeFoGVTuHDutHkhEERK",
  "key40": "5vJpKQKKJptkJFcuD1nyzYcANCAzNPv5CvhnPabCqF8roedQikSa1qNHgudcVrrnM7BqWZSXiWTgaSEdJPjWixoq",
  "key41": "3mpVR7aiYrQSUKag4rQuCsqRbHBgTixCWefdQNekWi7PZSANmXCXvFb4bXBBqQmgS1zoew8Yt1ycMXm6Pk2c4QCs",
  "key42": "3vY9Eba8NzcoJFkAySVhCybq4H2LdtAvhYqsBihYDbQ79hJBkrSACdZqocND4PsGNkW5rTy1PFDtgtknJdpXpGEL",
  "key43": "3MNKy5wr9hWddsaqP2vBsTXafbv4U4F1s1jAi9PdohGKdHJNg9SdnaKe6Vcv9qW9XACSxYjhk39NyZQwkYgZLVkn"
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
