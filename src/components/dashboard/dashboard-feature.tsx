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
    "3s6HyXoBPJ2hZNXbZe6TivR7D8peo3Bs8oWhrC88Md861CLQ6eTXSaUPFokWeh6zN4AGUB1DX5g1j5s2kK3eewmF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3euZwJkNpgSVFgow758B39XQXuWDi3XxTPtKdmEU9MJYMR6isZAZMCsm6AQnihMBWSpGhszjRmgka6hAaKmCZ2zZ",
  "key1": "3uVzf8WBfSgt5zHsn8jZnz92r2TC2msjYZeqZoKHgUy2oEu4YkXnDw6fYkckTdwq11gkqMV1fPy6xazPiRaiGT4F",
  "key2": "3gqv9an21NaCiEWFxvfYBmPdk1zy9TpzJ9i4KHJYpMn3Vmgo2RfaqgdPgcyxwhhPhqDsND7RCMRVB7orZ5YCidCc",
  "key3": "3VdHuSr6f9D2kP7qR4tQ2yvL1pJNGQP7XYRWyv4YL4Kq6xxotHY3AAevNs42efZvBrzTLtGNsLAXL86wbtwXHY1w",
  "key4": "WmPm3kpWQrU4cyJ6bTHx2nAoyKqA9n7hfa2soKzMSJvFJ8E3HHqL99ZSr5ZCoeWVBea3XBwYrVPZNjP7tRjSAy7",
  "key5": "37AEBuBbL2dhg7Lmfi1RXQatutfoLJW1HAAHFUHUsrxLF73LTNz8fSAFc4LJidKdFeyjRS3SeDD5Fq8ujQSQ6PG5",
  "key6": "A1aEZ7zsWAZ1BsqeFWK9bf6EizNgpwUhNGrUiVgy8ZsG9Y7ZD955vkhXooZnrxwGoUNzPFZRacQbLFyyLqbKHbC",
  "key7": "2HcLvc71jUx1LDS9njiTLWqVbb5YAYvz6vGh2PoAWndRgcNJbkxNFNKmjyxuAnhvxeowQLN1V7jbRcncADwF4Svm",
  "key8": "3yLPhK5g6hFnYDsohZ7GmpkqHG74FjDuDvV8cB94eNWbZAB3unidjqzdCixCnsWSKVkGHgGDPa9RGHyxSvibpv8P",
  "key9": "25jZe4WpitpCEjeCgQpXJz8aVq5Uj3iqyJ7jLC6f8fjSEp6UPoYDSrAP2MthQD4GcTeY43pGFiFkjNa7nPEWvDW4",
  "key10": "23kpJRuVBP1N5ymskeQZsikC5RxQrkQgoqz7Squcr2YbSXS2snCN2nmGhX6JTEqydFirQLerXQLpP1TczbYMbG2Q",
  "key11": "4QEBZKT1u4RoUixGKnU97QEKeFRL7fu7dzVJ3eN4ZGwyJhsG1f5XHzZXLXUAeNU7o38wKYDhd2H196LEQmmQ5PFd",
  "key12": "4dfK54aqDqM7KiGfrPoAJd6yButBHCsPzYmacQRREnJQw4rFktsZtUweTG7H5PVUfRMAdp5Q7LmoUjpSPghxxknG",
  "key13": "3uFMGHeCh9ZJEBhs5vGAYfwBhm3xSz8rU6p69WFCU6axeWQab1TpuT4KqtFhLoJemF6gRzCxw8YsWE7vzdZvvQy1",
  "key14": "d7Y1HeTE2UX9ZYDxyWNh3h1dnrX9VNqDui6wnAatMGrPogtLbu7AucfmYr3TWaBM8eTJzYHYmnasaVi5nZ2eeSs",
  "key15": "5wrh2mzyePLWwF43fBSXtixMaDLeNbgvKTaDLTneAei2B71USQtmU4Q5ao7Ngs2A9rtpir5UwmdL2aq4H9EKJFAr",
  "key16": "3mmHoNwEbJVvjPZtZCBARDdwC7qJYqaPt9menjPbQtbGWiRPkNTA9PHtC4urJuBHjMufdm46AvNfrFDkT82ckZtC",
  "key17": "2avpNmzk2cXQ22HVmCoj7UL4VPnbmQMm4Jym22b5Ea5NFXTcczEogLjPg7PnDGFknuTjRCXsVniCJb4XqL3Cc8yN",
  "key18": "4UNMkVx2aRHzyJodmFZaUgPjcApqkSRUZ894nwVZGnJGueZXYNJ9fTWqSay6fr6UaHq6fuBPKQLXFj92zJMP8DUZ",
  "key19": "2PGB8M1GJHoM6ezTt3i5DsNRY7Ziif1tJpqq5WU8JQfnpoXaDQRWTjsQLhspWk7EDBePDJmopfNSrdNsX8HpwQ9X",
  "key20": "fTm2ijp25tHxuqm591mGAwUr71Y6UU38x7TDV7x6MhnQVrrpF6w5qLDF4ULi9uFCukCSjbvpuGUPque6UyJSYsJ",
  "key21": "4fcgty1rsSqr7F6wdK6QEewzSWaT9aEzeye2kmnteomQRuWz8RXESSomzv7wf2c9CXeDAAE3V1Kxyu9MxBPUMWuj",
  "key22": "5dLym3mhkjGvGvHLGy2Qib9VBckJfDKpkaSH6wnQHMhistUFYzFjmWAGZyf5r34SZjdndfCbDF1pdonPGLqjrQ5J",
  "key23": "5fA3KXzK4tMCCJcjRVKzE17fS7S16LRyT4VhMg9uAsBF4ACrhaFPWxXu7ZP3sZxZLD4pudevsQYHqvDE8EXoBp6N",
  "key24": "AvFUC1ghxSxzcSrzZoMGt7V18z636TT1oVoW7BzjH1CEM9QXeqYunnmWYv4y5KH2FX3KHzjgT4a2YHSdSTJ9ckJ",
  "key25": "5LpzbUUq3dKwp6HVdYUerZgUBrLeHrBM2sgXnxDQDL5qhkSdD2ibHzk4cbMRz4q4vEvYzcFonE4uGchiYUgi7usp",
  "key26": "qs53WFTYoDxbbfrCkjUAs3LF6WiC8UdjsweavcLaVkznkn5f2Pbmyk3d1aAQjowrJohHRSCa2VcGijNmnbeewhJ",
  "key27": "2vwy5UduuaM1B2cwoL5gphzbjwApNKDUwmn2iQ6f3hDNYMMcENR8Gqv3wweFi1Vv7SPUtDPC9UwRSv9mXcs1vzNa",
  "key28": "54qB6NJtir94FzcWgNnhdqs8eqDEGMxQnh5DFspHKUZf3BmjbJtitASrgCJ4A6S1syQZni4axzjhhELGVC6mcEAj",
  "key29": "3jyacxNtNsM3dHZtip67QSQCjqCbiAbUn5teM5b3Pnh2tyn4FgUbJKzHcDEKCc2ECkbiR58UdYHLAea8fiXwggGg",
  "key30": "4Z7sCdPLMfN99oNwcpPeCLg96sSMiujyu8rNyMwUXAQZSffbZ8xufTZ9q1fXFr46d8rFHuzLBN83eqfNtvdULMQs",
  "key31": "4dAo52zamYBBKM3U7Thyk8P3FUsKsRBcdHh9uWZRzwctECAAb4aN3FoK4dpHkfWVRtiNk6tUhxqmz1JYMhqLsBXf",
  "key32": "3owZzpYK19sNGYo3TFAExd61Jik6MVDuqDYH43z4UV3QNST2bWvEweNaYSWjct4LaEhjyLSjkLkgLN6CAJgjvTGc",
  "key33": "4hSQduKsHE2yvXZeG73dWWwQGmyGAWVVJSLNzo3SsP6Y7C8LBUaxGcQUnEJ9nW9JzRFkD7KSfw1VCij3vx6re4B1",
  "key34": "5ckXpA8w8Y3pRPbKiRF1VryKhSNbXSrcAKayQxBPPyjLZoDzEg1JQAnNZW88VpdotRBHYDLBZaSfrq9vyqG7kUpy",
  "key35": "ahYmztENp2qrkGNX99XXkCQfzQJCae7k3HpqAcKoeKb4M9T5sC6rwQ1miWrQQziZAmiZt2kLSzgn3ZKZfyJFYfP",
  "key36": "2gm2mv4LEbSKUAdMgk1tDRvvLqiXBcrNPmWkk2rJo3THHetB7eUVohnKPcGT1G3PXPH6s9uAKpVS1anbHpbmxtsz"
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
