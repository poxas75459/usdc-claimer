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
    "u7gtJB2nRTjSwvzqmJiajDn6mHAuXwqvPZvCc3PJdiSk5E52ic92XH4ATbF3vyf4KKAZUyf2xiYSkbHo7JZn1fV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MqUB1wAjKKme4gRaX9v6R6yQgDznqfidfEZCDynwJcNtNvQW5kR4xEEYXMjn735WQDY2jghebnFPLtqxP5LMkbo",
  "key1": "3hsiV7EyWi4giYyNeg5jeFE13Ff2cbESrwWtFkiBkMrwLGjai33YRiqAQo2LRhASXZLzid9VtbJz8aB3aaK75c6f",
  "key2": "76bfYtvLuK8EgHTPh17VgJKvGGWQdC4fS9c5pWxZidagphDZ2DzPFoSvsN7WPp6svdbWqX8jMYyNLuxjQko7f5M",
  "key3": "3SWMxPCGhGCntHVTZThcmZPhhQXPvm41L46ohgyRKJme72Jxa79bPBksxPb4VcXiu6bRSNYju77rdXBPfhhUBNQ5",
  "key4": "26gvvvtLFvQhpoUnPxs55qS6ZBbwuqUUL8s8ukDuQjWX5LmXvXQ3bCMAVeexfQYVEkGmSSMVVnuMnvqgUU3d23RU",
  "key5": "2TLtz65PX3D9xtih8Mw1NF4aNcmR28xadYTfpZ22Pk6Mb59sQtDgdJKFSXT7PvR6BSbtuhHPBGCU86GFmVYeashM",
  "key6": "2wZQeiHeaVSfUK6Y4Y53FgHkou4y5GytrZu9THawv2CYkpL4sUg3i5o2MM59BehuvaWS6ohq2MUHiFE7YQzBC2mc",
  "key7": "4PGcMkZfpqpwejpGDd2wEGAPHMW1YticXTHxwwp6G3V8S6JRXjnpS5VEfiXdqpJqWXMboZHjgkQFyJLV2LyGRnQL",
  "key8": "AgeJEp1EKCnpEAwLry7V7csQhez77vukD4ZGnj784fepiMa1RRzAofwct4JLJeShHpvC8nfaMqwpHoZRPZWFBAz",
  "key9": "29TKZ3TL8sS8Lab2hHvrwLgkvwFZq2vzToVhwCZHmbgfMRQUNK3WBpBstmUDcY9PnfmWJKYHiPx7tTrYUPerBUff",
  "key10": "5LFD3nqhxjEFeK54cXE9Ca9nQjfRMD1r3eRT8ytUhtrP8oKZCKACb7Sd4QqpSMP5TozCAKvHpftPo8LaEYng2tPj",
  "key11": "2FYNBxjspYsWsPTCQubgkMBpws7ygPkC5rC4H6JpXdQhyEHxkus3GKJeH1VjupC66XtdVXoEc8Zbhzh8DYEvL8xK",
  "key12": "45AUDma5nkHzJVZ4yHVXZN5kuikewVRJtmocuuN42L8KP9XeaH4Swcddt8si8mqqLmFVMZQ38kZDVpGsCyRcdZU5",
  "key13": "22eBq8iVCQHxePPhNLDiUNrXwq4jSCDUCTB5kfHbu1rwVNg69NVXXzTo3wmgPYnKM8tT6mtaCszwX8VTx6epyKTC",
  "key14": "26WfLy7PyPgfKnAYzuqmHmZQL1ZvTjaFFYh97JHVzNcE75bsnX3oFT8f5gtS2n8GRRG6aQFGPVsVFqztHmweNJxm",
  "key15": "5PWdBNCr1BkeuD3yERMpPWczG3atK7skmXSCUjyeQ63YKvXRT3p2os5uxSBfyszzuHXq7FUATTgiTfxfLMCKY5D2",
  "key16": "2wBqvqBKVscZ9Doki1Eb9hDaTAFLnqjNuBKcaoeAELVd7rjt8aXeusDW5ep4DFwZjPAioxLpdeNcbRTgc3w8K1eA",
  "key17": "2mdyQhFAdXZT3eb4FJAmCaeV6EU8jKJpA9SqtxnriT2HyPtHHR9vwmT6CffnsZWVskbt2iuUb35o8VvX17QJ19rv",
  "key18": "4Ja91LX8zsy8csMf8bMkmxGaKe3sw4AmL77MTo2FvdmwqiEbCSeLgMqwoe897JnREwb1midFderVJJA4Ts37KQyP",
  "key19": "4G53U45mxPivLQNT8TziBX6WGW9fqkFdVF8Qt7uCt4LQgHvAosuJveVPSRnUAsdo7BePkPoQ9qDUGMCkH6K8Zwd4",
  "key20": "4mxLCcUgVEPsiARLof7ou1ya5hdMmbyiVMMR8TRPnDiLvjMKWEWW4kLB2ZySiogmwqxbagh3CzZfST1LdTtXWghK",
  "key21": "48EQkFsACDoJXRh7fWCEvp8H8ks4zKeXFquVy8XQTLYGHYtFMyXuSnCGptv5BkcHgQHaMb7gR6naNHxVwAdoia6P",
  "key22": "igPeJsfY5AQVRsP6WNpuwSP6LDJB57UNNCngxuupRnbWhyZyctTfhxqmaiPjQ9S5bJpEXhzELPRYR2iGykGUhwD",
  "key23": "3Fw4tqFVCfPcLrBpHSDnQysx1fydevZqd3ospP3tyJBifN6ocAp88xKtorM1YFgNN6CaaiMjijk6vt88qbpmrFHZ",
  "key24": "37iuBxYc9aHNpevtKUrtABh4RH4zznJn2CC9pXS7xiuK3McWB3RQik6puR2H195NhfcQcYkHJ35TQ919a7WLEsaG",
  "key25": "4pTKKPop1yxYBJZCQFag2kuuhindTMouEPbfXzMG4wnLoNDSGJWtGsRy4junhcK65zgQHG31QmsTgRUzcPf7dia3",
  "key26": "5KpmUi987YBSMCceswBKRENZ6Ee4J9d8hXMZX3e1nBZJj9VeGfgZPqn97TrjBCPtMJ66e1LXASCCEAgS7pZbndjA",
  "key27": "4Bboej7h4X8rgz7GeFs5QXHMgfhiJrq4JjbjcodTXbJUQKQLevVYFrcBqfEWCE482wmpiVe7zKihMGL13nNDunnW",
  "key28": "5a5Sj33UYmV9yMsMJouCcK6rPFdukjNyMFohyoB69Ut8VBC5v9nf8VvqVdB97kd3LR4twPM2tjysX69AahvdJ49j",
  "key29": "3tGTThKYspUDVb1Fawh2cAben5U3CYNhCtsNpYRESnjUCEL1VyBQNwqcCLVrdFbJ9ND5egKTFGo5yUEjg31ZQDca",
  "key30": "2rNXqL2wFYKx73a41TxyS9n8Rx8sZ8FhSMxTKKiK5812r1ikqo88iEiA4zs4tPCffxjrikhtH1v7L1sizxGztTvJ",
  "key31": "5LXE39DSQmFYFz6esGvbXQBjURC64tXE2epGNoza8vDRgVSHJMEjFJE5D9NLC1QrimES8xWYcpsXfTDtuWuEfJdn",
  "key32": "5ay3TtyS3g1wXn4EK6re1yPMrsXdq44U9KymkTc2AwvQM3nHRvMC68CYP6pCaVi5nkJ5azKEadVVVDaENeUhWtw4",
  "key33": "3hMsHXcDVFKYrifdnvCZdZYndE2iwEVpstuzVqPrKtyc1ch41R8Zs3RX9rDYiZjEspsKuaAnxjjwxxJ7Ha9yYRff",
  "key34": "WNZGgZLTcmrbBSzLVL8T8tSSX9uwgiDkM1eH2o5pHKnj17Q6kKZZHNgFztTv5hSCg2do3agoCds4XRZTiuhXo2e",
  "key35": "WXh5opK5jkmH6xYbRDYSaQF1oaVtRxduuYhBmHt31SGoejqceTJk4aVSoSzy8QagF5ThhdMyxcwttunMCxRiAmh",
  "key36": "2AUZHUUwYKYLziwXrZzJapPc2UbyTuSrUwUhLDhMRu1UMxSyyA2ZH5tw1V12Q7awCQQF4brxFmmV4cHy2ecEGAwc",
  "key37": "SNMdfswZ3CfbV4icdSbceJmKRcJGZDqfvpji6NayG3wHpxVqQcGcBqc6s72w6fn4WEgLuRm8pZrcbMxniQ9m2Ga",
  "key38": "2Y4baCg3j8LnzUZ3gzLw4YvzsX73mtzvP1c84bZ3hM8PKk4yjnFqWTAovN1y36zkP2M7t22RnMJcNoccS8FGoD49",
  "key39": "3gofKAPGC94H2o6dDTAtEhGFdgtH9vhMWa3kWHhYuCUivMzKsmvSQaUMTLJ6wz2XaRbnYzrcFsEw6gHRPX3jUwwd",
  "key40": "21ivyT6wGwQxpmtvJdb3AXSr7iRxW9zmhLBroWEwSS7AcSwYRnJhgYiXoLxJvxNfZqCbBsWpRUHwAX75cu5yNA4m",
  "key41": "4vxBGXbikuVDoU2ZsUHQBAL5msgCssE1bcagGBnthbvF94FN9Togr5dEgLEVik1dBEqcCiket8esZJbsmBASGK4w",
  "key42": "43dL7i8LXX3vHjBDMrJMimLhjCj9oFhsYV34vaRjuppGPxuEasa7rtViPpmLyTYJLWN6i8xF73dTvC9PsQ2y1zAP",
  "key43": "5EWowER9ZD7MAezaVZfDw7M2v3MDzq5GSdfQ5piGpk6HrVrom5JpjfJNc5DvNsoLWS8yhXbEnupgSJsXMWma4goS",
  "key44": "2EQvdQSHbJE1cSjxbC7c4ADG9RAsgviZeK8NF6kikSAxEWKVNiQEdYLkGztuf6fM2xAJepqNJrpdrnYwVEHX8YFf",
  "key45": "4cUtxvMCBYmKqZnWwVf3TjLMq8AE6XjGTRPxkZarkvg2MSEui9jjUS5L5XZp9f3JRkG2gNZP2M1jLr1BWykg1Lvx",
  "key46": "ZDsYdDK3VpKjzqRxtUaT3yUAjHd46o124PUosKn8xVFmyx1Bx5C8LG927mGpjTJjX83T2g4aPRfzGTF7ywkc5yx",
  "key47": "5bQwspQP4V9NLbX6JC2QXugafBZjHDf8oeBEtJLcHirTE5NzZGKCvjnMbEkBd91DssiE5MhCn1ruHwbvdYCcJjNQ"
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
