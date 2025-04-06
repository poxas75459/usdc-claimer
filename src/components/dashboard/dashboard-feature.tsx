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
    "2Q28HxxjYuoWsD5VYDzPpiwMqRdSQTjwGWdMYqQfSG6V3yxGzv2skc6TBbcc42kZ2Di72GeAGsLyzsJ3Zcn7buuA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KT5noDspzr7dBJGGVNiatJ9XVZJBDQGKriiwYvm24hpvYpsx3iPmLxSttVRa9U3EyT9mq9Eiku6uwx3oh2DWJzK",
  "key1": "PrRa2nCWGUenkP8aFLcnA7x4W7jATXBjpSspAhctXKncNyvbjhD4HDqNEsudaBUGwihBmXAx2pKAYP1hf9YUe7B",
  "key2": "2zVfdzE9Ro5Aetw1Hr5g6n9kbukWS9Wn6iKDrGJGSnbq7Pru8NJGMnPA5mzw8BGx1ddruwWvTyWQDZsNbQMFBzyX",
  "key3": "5aoSanwSYKvLguJYuNwqyHgrXnvjUx3LW1L68wSmLuVwbEggWDHqeHggxTavQUVHQpCoS7WH58b5z3HjzUDRrGd2",
  "key4": "35VFK665ujnz6Fgt3tzSZ648pMcWxhDaw5NCoxg5mewVTpNTXxjfpPoAJGfGsLd9p3LAbhY93TPtiGD7LEk4tm4a",
  "key5": "2GFY1FT7E1nPf8S8W8z8N83NRrX39waQbCTf45bdfvDo5xYMmB7qbLnEEdiA4fXynT9dJSfKvSTYU2RKDRHcBi7k",
  "key6": "3NWHMfVsXSJFEaXyEwgT4GBF3ytiWsy48MQN7DNvULiKV2fHXNDAciLSAX5j5xj4rJ7J4GyNUXdbTVaWGfoFDFTm",
  "key7": "4CakoPHMWcCQKm8ZAjjQazR8SCQq8FhZWBCxwqQJdc8uHySnjrR3NiXL8nVuPPDBwBpQhFL7z7rFSANzBfDK3UwW",
  "key8": "3suG5hrAhd6enW1XRe9qDthRmgzFjbPHcFcmdP8qVYhJ9FsQv5BFCn7jyHYD5qn7k9M1fJ8pRhcHRrNABSbk6XxQ",
  "key9": "7MYhgaJ3ctZcCsmZJyULb4T75MivAaxc4zTwn3WyQrP6G8WfrXySZNLk7SSv3QwTG7yQVDPu3uATPFATrPfvtL5",
  "key10": "62mtzezxPPUUU5uWNHoyVL3YvWfqDe4XqJpYLZMUp5UGUdXahkfPqisvm6yzkwhXKjRLtzm5cDRLSFTvgiW1VUy",
  "key11": "4BZMyszm3gPEHU6dHxJCNiVrLAYcriNyUbqsgG4WquZRSz2jqE2ZeRJzcMWaHA9JT9djfu74yovJamHTHpHCRn65",
  "key12": "2gfjpFNvfucy47GYjMNFKcajVns6bBrzoiqHe3qzy4YAPNUUNe7ckixFjtWxzaW3jQMorUkqTDNYYiztFyTdY2E3",
  "key13": "3NKrSLamVKZqFWDHQ6LeeF8v9WTxL4xKAxos22oLRtR2TuwLHXBHv15GPxAGKC4nDkSpAQtPYnJSJRF8fqwwrAyE",
  "key14": "58QeHGUnwm5qcp28G9EBFeJnxfY3T4NyE3EpjNwfftM59ohYsJMDWJj2N7LbKa5vUxF7ZrAQAM8TA4EJKvm9Qjc",
  "key15": "R6nzSwguofmaJLWvZha6AqC3LtthJUZ3ctPacAkwbkQ8wjMHY7PeMHwuJuFcRavDM8c2aytBZYHhee9bfMbjqZa",
  "key16": "2jnKATGpDTUcseL2SS9RkpvunxuHaXhngAMBf2DCAN7JVTxsFrS9hEmaFc57gbva9FNy2H6WT1ngxdmaWx1eKJvh",
  "key17": "5CZEcgjPc17zg8iyHQsqqNYwXgUHmKG8ZpGELSww8y5RC5iYQyF7jLqFbAR34Hyg7kGjwF9RpK9ckBbmMNTDptyy",
  "key18": "5zYYcZdykr7QAPQMBFPfQam2aRDfrZQi4bqvRg7m2M8L2kaZvxDjz4MPCmyBSnNerULwAAvPNeDgeBBDMeo4dXrG",
  "key19": "4EWmNPh7gknHrUNCpiUigWnTRTLQJhRfwJBSvnW2xE7jtW9jxipxaL3ZdN7cNyj9Fj5ZGtJkTezjL6oqUcy75oXQ",
  "key20": "342Av8ybNLZuGK7Qz5iP2nJXnravH4T9AhWBTFbGUsrj53GcTUbi85aXKQNkRH6KEUJc3Z65pfRJbukx6cd23PWd",
  "key21": "2mDAatBdeeANfeQDM2R18Dby3drQ1XSV1MLMV8w4EC4NhyN1g3At8ypGn3UTymDk9m6weDYt79ZmHkof6uSktPvc",
  "key22": "4V4BMhpDDGZmaYcBVccUEbRdvQatTEYJSFh5H2ZrP4gtwgEsmLk7xzvwRaBgqSrWJTo8AXh5k3rLre8NnJvycMYL",
  "key23": "oPXE4h3kHoC4uRtMrGLHfANnrYgmFeeyCDVMBjgYpA6GjvScwhNc2hiQnJFqX1ytXrMx3JYReyxW3YikNtBH447",
  "key24": "4K34k8Qhi661aprty4jFhJG2tyG31B8k1qoMckzkdUCZWdGifpJLj97j74q4gj1MP2fCydF94eW1RzPnDAy6AsWN",
  "key25": "2k6Cj2uLR21447uXtE8Dg8nBdABFjAPhooA1js6uvmgdpBfh4EfRGEdAadXgnDZjjox7BCtxxbecmmatePorqC3J",
  "key26": "3Nh8m49uoUHcir5985wWrq2ErbGA2o2D6R753JKfMgpedrn15wo3Wii8ttb18RC6TFa8LUxmoZA6hV2xgVkfNWKL",
  "key27": "SKprwqCm49iLHbf5A7QqwrKYdcgZZKLdiYMemUkMf73fDB8kRWwzAvcGhBS7QFmx9ziG59VgMKM2opxidy8W7Qf",
  "key28": "46V8BqReinfNPdrRwRorF8M2t8KqMX4LTdbkdP5rhd6mxUnYm2euhxJoJhA7m5oHCsKaTMKi17stmHX6Ktfvd1vc",
  "key29": "2Zt3HfCe1CU7AwhtVCs8FYZJ4TBfy45nYKdsDMVTF9AiuGhpjSVPc3tkZxUFrkXgi1K2K7cEgGaNkPJZLtxdKsoh",
  "key30": "3yB7vkZCzV117sUC29Qh83zPR72ttXTSUN2ZQJdrg14heBoTmNFvma1h8TnyhodkSLHbfGrTh8Wd3dnkqe4sJcE5",
  "key31": "3xYXNfdmy72AvptTdymYR3YoA1K7TP4v1iBwC3HuVyhXuKWDsXp2pQFCrJKpAR7WsnHfuhT55gzomkWsQKu7ruT1",
  "key32": "29hPXfL84mektn9nrRUnkkS14ToU898UpX61iGppj5ZuFfKei81UJt4W9RyHot6Qs2xnBQp91rxSqBhmeUQjdu2w",
  "key33": "2U8pt4zPyST1QXWFPPemF8EszdRkccQtEZHKmtUh1NCAyiQMcAuTYmBs4guj6uV2wJkV8B6u15wxTAJFiwQPoXjW",
  "key34": "4pvbAtgVwo7uUHVN74uQfGiukiDcVxiCjPJEK7CdEKDXgnG8KQTQ8jNMgPtmvSNEbasjgSXBifHeCtR9JHXja2Qn",
  "key35": "2ccQEUrcLAnLx3GDFEP8JdMJ9oPVpfjseXzwbV8QsRhViFdhSVG8KKSsXkWuDGefyen6pc9QN1GV9HMB2dDh7LU",
  "key36": "5GxkptJsciN4ZMbyqwhzc3HmCt7DWiH9EhuWZGSEYWSMf3Us2pY5ynuhiQ9moFmLe4sPsSYbxfuEsK3uShKDGJY9",
  "key37": "4GB2HCAGTwUu2h7L6gg6ihuP8v5iYaWj8hG2RfsRdS9FRmoGQZ98ch5gnfc6i8HiwqpqHcugsdqsYGf2zGAnLkF3",
  "key38": "5gVDpC92GGN6929QoPhvxmZ24HHWJZzkPX1mfK3hNrSi33KQRQckk4qY7qBA4yNhhVkPquYxnGVv2KZKtfudpPnR",
  "key39": "3a9NF2eeFbE6NuobNpsGQZzQn6aGTGxi3dfPGwFz96eqgk2SZSPUCf81DHMkzwGwZES6HjQr1oAFz7RoVqK3emgS",
  "key40": "2rawGUuKU2LfCc89MMcdWbkh78PVFR9T87GcG3M9VNAH6XGLxWytmmEsp2jKuy8uSXKLSkcF9TWojttQsAqT1KUU"
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
