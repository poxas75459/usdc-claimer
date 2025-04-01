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
    "qyJJkreAfMxnGYNiBy4fp6wZhQJm1eqDhRK1BeLQUzxDwMyUoaF4Pu5pchUq9xqM3W3AsnZpNBiD4RTKpjad2ZF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Mt7dqujfeR6VPkLxv11g6YAyRJBaogeeGQWfm58sZuU5egc7Svf7WrByQyyQpHKoTWeoyU2CommFyb5ibg4cuqs",
  "key1": "GcarTcRKnCKzTojRMaL5JdXHov7hzeeq9j89U8rKJXbjU13yvR1Cb4xrMrssiDhMEnUbE5jocXkrVdWVAK3aPo3",
  "key2": "ju6cTba6WBj4JooT8Bv1Sw2MAzFdkzwFRKe97qQ8bEWK8vjPgtda12dwht8jHtGGX2winvAkPEwm2TRBELjcs55",
  "key3": "2NZa4Nn1eNC1Mgqrqnun6DonXP8AyD9yptszNGswsvdEgRiqxCXKz4vMRJbXRLhqimEspwkj9xk9NVv4MyhrDnxk",
  "key4": "2swbMdV59rW52FFwKdpMCpFGtiWAZgaX1NYEon8ho4soDky37eWnBKiYSW1t4zJmSoydguSsZDc3wXpckRThD5Av",
  "key5": "4YVFaf4T4jQyMPxipRxbr5UYnXLTQXez7TSMiR6a4hGPyeUdUU9UN9kmh1krSnTwZ7UQkAiYAauTi4SBhEodhAiK",
  "key6": "2qoxpW9zXHssWHjDhiDjVXLSewxVgbt5wfYqAb57gLF6wAnM7uKCmfwzXLoQxX5FXSPvCYpFrJdJqkaEEKRqEkBA",
  "key7": "2DqZGnetLtBtKKyhKX3C66T1mzc8PUhaRKqrphdkxzKQU29WcVFJo6KsVJk2RqEFGbNentw3Z8qQataYghksGTbY",
  "key8": "roGvj5qWn5zJZ73VuARxFJZT3fW783npknBjbnnxrsdgKYZsRdRXeAd3fjABkSNH4H5LQvik3YtRAdiLrH2ujpF",
  "key9": "2PEBXESXhe16nh8Pue1vhwk3EDDK57p5NjwJirJu175vi65C3sgspL28n8ykCcXpMHHx3V1S8uRtZxzttyUvXg2Y",
  "key10": "2wagp3EoWtxx2GfoGXqCVziX8w4745pYioBS12zsiBNUNNmPsu7PwNFGLMav5mh7TGpwC5yVFWkjzvvEPvHpXt19",
  "key11": "3XDD7NCD9NqAtUMUE9pz3aC6nFeqfLPWJrdveiBTNhyVs6AQjtMnfhq5ANSKcMLYfiqkGRf8aVweRmWofYBcuR8A",
  "key12": "3yKfKGARYwteDesYV32SiwLufuPUbP8H97PwMnuKV9qqxmUEfS85kiaVHpGv1tW29bowDmbrqVWSKSUo9MmguBwW",
  "key13": "3jpVXwpdzZ6X1pB5Yk9hF3x6EYESVDXQuQKtrmCGABsy21HhGThWdBQ3GJbYJtYz7C9waNxwmPh8Wv8vjneFTdTG",
  "key14": "4smwAkhzMdqW9YHE9N9KP4FG9pm6jgTguAv5JUiqDrf6CgPq2cdvpzwdQkbSgZFc4Z5t25CbCgB3qqK7Q2SRTGNf",
  "key15": "2VXPVpg9vQsSf5h4xfjNwTzi814PWDmPikca9t8oYhHjfNMt7akGywGrhczqgFUoEQJ5RRqopVVwGqSyWoRTkhHT",
  "key16": "5z77fV6RsFEAQ7s3CeJPY4vkDKKopYtDPprYkYQgv5MvNm425i44ABo9kgwyP3fzAZSk4bUNVSzdhvxnrZHATUTu",
  "key17": "5zvoH8n5tx6ApvVznkofR7yTxhYzCNcHLsLVMEPcDUAYR6G44MwCEyP9EbGYJPcM21MqYjdi3XwLHewP967CPSNz",
  "key18": "QKtuiLiaaQ96f5EdarbW9kEuxSLyZjs8TKtcHPEYuLW6wDXnMUYmsewXEs1BMJ9Qw68apKkc92MHyTMTT57RGaB",
  "key19": "3SJwNJFfiXD9CAhgWx8QAvXshCkPRcmvbExVKPXzR6AdhELPhdnxFYAdMv4QTPcem5oLdvRjfjiF1CYEpBdHsHk4",
  "key20": "5m2BBvmCjk1uVtdt2Xg2SWSg41F7n5gPreG7vE6JsydDAFTBq9QVz4TS9CgLPmtM9GC34rmdHbAtDsnVSMGU71eX",
  "key21": "AdMDJqSvLgV8WQ5foSoruhRiGigWps2ikNEA9oPwRc83289RPj7NWzpqUeDosZsmpyjxrBupT16D7Yvi2ni2uCz",
  "key22": "5VSULaqzYMHBEH3xjB8TywfFh8WcSeRa8zb1TsYBMePE9YqYeqy2rWgdKQExB7hz9Yq8kfYQ9AsvGoY5VXnssujD",
  "key23": "7imzHzexWxqSYjFJ7uBAxVFinB9y4UEXSdSN3f5hmjr2Fq9j4JWtfvzA16C3tWmLWv1SCk7hDjLxFVFLzNy9dfB",
  "key24": "3d8CtjRkxTSvb9iuTzFgnNALiQhj6nH3ioo3ibS7TNqfx4Jz8cZPUG62SNamrK85hfr1K1SKgkQ9WjdLcpTASHSV",
  "key25": "4G9Dt7PsrdwRatRFfyywBjWVNCTmokBzLjf5yRm2ic2bbqz4bzmYgwc34RUK9DAbYU7cSiKFU8KGDmfxVcqDHVfC",
  "key26": "5zef4cbjKPfHkssQJ6LQpTawAPJXJ3YKrCYBSY1p8YXVoS6cHekmKQmPAFABHa1bqkbeX6SArKdmUhcuQRNq1wJR",
  "key27": "59QfckVVVLNsJQPXDZphgDfiRAvkmhmERK3pRFWyoVG3J5uTqM1gytSGpSDPkgnY43hnmCCYSgRkfdb2oJhFvQqy",
  "key28": "NKibNeijsWaCEnksxgLvARcvAKajw7SzuZTQw3gHXELteMaQDNQ2yd2M9We2GGZi4eSPaQKwHLeLATTuVNft575",
  "key29": "TR313pAb63WE5fM39HfquGCaFpRpTTATKZ8bjkZrjm4q6sgnZMVoiz9W66A16GYjZiQ1eYkTVfnZhQfMEB9qAdY",
  "key30": "wduzKxqFvaAhfVn6u9r1f9RfouUyFk6huoRZXDmUjG1TuxGXWr6KxzeUGKc2AoPyL2DU79mbZNFtVHgEEUaqMvi",
  "key31": "PALLgeDx5e21NaBbFX2s3nQ6Y78pBYuNngyPujVpEtUy4NpxdW6auuZCJjqsdsijmeBBMSM73NaLVCv3hGmkRSo",
  "key32": "3WtLRDz3RjRCBiLYMCE5PE37apjPZF7K7Y7tRMFt9LhPu9L52LdXUad22rzP1hZz4yVS2krDdVtp2fAakpGVa4d2",
  "key33": "4c1oqwRoudDmNpym1CSCaDfrrAWS4cX56Yf5ty9htiMX5ZGHhLZxLDffyUUeyfw7zsqY3k3LGpqNS4xFRqFGrDxY",
  "key34": "4XffQgFLxB3wPZWVr3T76DpRsGqZrhpCx8SqSVz6eds9oYsMM34cX9xmHtADnrrHL4jiyPa6BUWVff8n2PRRkEBZ",
  "key35": "xRef3Dj4MXpLs24HJDaBFguwckiRY2M37hfx8P5QH8ziwCGkXGHdGpMeGmVAQW46wyiUjt7Dc4ZjQK5PQfL8bye",
  "key36": "2ivizcJsdYqN3qXGSeepRkvLHCCHVu4u7NqE6jbuiq6edSi38yJrqdHAWmm5Jc1bAiJ5PSiZiaYU4GzYfXxKRMD5",
  "key37": "2fQhZyNt7zKwokJsPgRLJJ2A9ybXtQHmpRENKyeDHoDdwHb1FJXkeNUZnEVccD157137A3LnAtXZayRoah3jh3z9",
  "key38": "4owoTGFNkMCvrggbpV4HWkf643V1YPr82ca7c1azNwXV8eDiqNULgswGPdrCSSe4M3ChTx9rNLc6UVEoS7obCpg9",
  "key39": "5GdXo4VxsAX9C89UVPjQtzETLnvX2jWWfVKhGnTzzr9qBQ3jXJRwQhCbixT3i9xiJ5ZA64P4ny3PX6TybatWMTyw"
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
