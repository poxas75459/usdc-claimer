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
    "2XC29CaeD3jfxhBbzVozCJpNyheUeJbKmqdKfUkfuThJkHudhMKapBwJ81H2YLXk6WK5f3MTUCPio7xNDYX8k3wv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dAJBDpp1EguTnRmfNWCSmJLWhgyuGMJ1vRUoxPHvturvJAu6fbjhxzNp8KMeDHarepTBVMCwVFcCYVkPx9Swt8H",
  "key1": "e5oMcYE29ce56mv8vHg9siPUspLAvBR6uTA8SaC9u1DTUFC6f67NvC59wVEXuBszT3qER7yEgEWPx641oTvY7ew",
  "key2": "2aVD1vpuEYBaPJoxCpP6EZtXYoeCQH78BCFxV9gvjG3aBj4WP1MqSBgQkXV7GB3bfAdex14B65nQMzEQL1DAr5Ta",
  "key3": "2pUaP7x5S2Tu6WTrKerPqeTUaXhXVSrQLKoVEB4hxHwP2D1o7r41BYQRBUhFqCPbL1kjsAkdCvF29H8kVpraCwkB",
  "key4": "57bnTUbNwtDwMQVVMcJGZnXxfT79ZF4uZBhwhLsiM244NqSyE1F4vS7wAWVJMgHEj4wP52qMJY5VfdamD6ToUyUr",
  "key5": "nh1emaXQDqHvfKhzVThFakYxt6cj5URTDTf27MP3dNfUfd2sExST9r3zXtTTRReScpZUpkJvwjwDnmLicuHHbbf",
  "key6": "3PVKeDMPdEFU4qBjQnuENxp4tFnEwLJ8tjsyxo9Rp8K8v5LX8QJmEkn3d1VK9hL4nfTxckdccJoxX8Esh5of3LbJ",
  "key7": "3Vqo4GbW9p6CqGTSz6uwWdTzpZZGfmsrFc9AyhD8gr7JC56N2J96quh4UkBQhXhmvxP1QC86dJDuY6MFXq7bFGS",
  "key8": "2bcMYicW6E5ERyQK7Fr2nxxmdNDthPehc7hAXYwUbgJcRWaPdGZxRqv7Wdhv87WZhbDhWGMNpbD66zKKrdsSsskv",
  "key9": "2mpA9Fr8N5aGTsssVNzNYytKKWr9G2yBR9um1aMojJw37s4e4Fo71VuLUCcFMVweb9FEAjBEAHUzPAkF5Mb4NwaC",
  "key10": "yhjMxL1BDthPKWw5Q7KfbFGCpnxJvV3TaRbT1D1dBEdpKrVo9ANFYSxCAYdBV9fCkWGEcJvFZb32Kb7BNc9Pcwz",
  "key11": "3yyMnjYmnFnNdSZc8Ti1D27N8k8AFfaRdNVZ1TckdozicDhE8dqAZiJN197SpzXiPR7YwmToNwfbx45ndDk4CQtt",
  "key12": "4DsgqUqfDzpTmA6jyeRmrvmrNKoiH8UkWjQgUbpYFackaBAkmamjLwHyo7jfpENhrZyGvRCrQ9mLpF4BfhBZ9kR5",
  "key13": "3fkFokcA8SjuBD4kakGYqM99VZquFch1YSBTpHjDSPH1AYWdiKX5jy2ntDb1nXRXqV2VyLiUDHBETZri7Xq1kdkn",
  "key14": "5pabfLsiiD1VNh9mcan9zF6C3R8zNzaeNoJDTs2VQqCCEGuy2QeZerPHAGdXEb6oQWTLGbJXmuLLDaHP62trszuK",
  "key15": "NnGeJwVouyWNHS7H1Pp8qhHJeJJ16f5cyfa2qL4zsXgbyR5W9x9F1hya2Fx4iNfnhJicyCsvQ62HCULhme5HGmR",
  "key16": "hoA6Y9oVCZAUwJw16Kdze8592XeYRZJq7EPS7CC4usnkCmL997JH285CCvKoJobr6AjAovYYe6KPQbXqm4E9pqM",
  "key17": "42okJAxWY12S7ngfibhfh9SnthDm1Q4eHy31n4cfU9BsQHyn5npcGM1okKKUFqpFXqvjk85n7qYqRBy6g4UB6CrY",
  "key18": "38xVMXBkSxhwmj37s4UGmGL5TiuWT9SCn3eXuf1FLC4pYdxxfuUjYH4EvJRGi998eZnzy889v6DnoRfAmnSXAWzy",
  "key19": "2rtMmFUvrKzaLvFqVD2nyL6TsZ5mgCsNyWdSpZkDMoGnbSmoLKCVAVnmN3K89zYTFpx7AmXhKBdkaLbZ78dmPAdK",
  "key20": "w4kbwTh2jiGzi57NDVy78Hg82oivVpbgS8EFMTuMFi1BgsSum7dKy7gdp353bE19pUfBKRyKkfctN7rSBCzBi8T",
  "key21": "61EipTZ9oM3vxhuKg5nNsbjbTV3hVEeAqvkNNVpnJwFWXwbpLDPZDB4yRhqp4ZPBXdrSJHo9KTqQHnQPvXRxrGma",
  "key22": "3gTC52CrbHWUREoYuzSEP6WVXj2JEiukyHvKLKfKPFie945bgsZ7qVpW8FJbtoN8izncdmsDx8HWovh8oiVVhV6N",
  "key23": "4wN6WNa4sQYVEu9C8iBCGhDuYTkLZdBtwUs6XyKXZFc4b1dYt8cHevfRoFAmJZdHhUJz3qj4QUcLBuqCLNrrRDaG",
  "key24": "2rPRpJmXp6dgFs1jAeZLMSUMJfw3PUPBRV3iyeX48wFM3bUZRirGwTVJVBzv9aNJLddEyyVVWsF5jqwLyQN8XFN7",
  "key25": "2zLsMYcN5BhX8f1v961xCAuAw2PkcL9obLWXgU1eaJ14V95PTdg7mnhcG4FKZS4HqHDGfAf3QjwyJzL9qLH6LzzR",
  "key26": "4bSBKoqEHiPRQrU2Paj6FNwLM8JAVWe4bbRVS3fxm48jSQqiH7yMvScSr55RyXJnpj3gg5XqGLEo5j89R3VCpLDq",
  "key27": "41BGqE3GanW8sDkRNXsBTSA7S1cpGPPLhTmKzG5qdmFnU5XD4kXUQzaRCXUWf3s7iTHeJmzyiourssmoAqzeAbCR",
  "key28": "4oDLTbi7ZJiHWfLt86hMevVQAuBPa7xGQHG6ScAa8SVrLFr3GATpVxdCWwazZSn7QZ2aR2ZMuEE6nXQXV1Vxaadi",
  "key29": "4BmgpuZRdCTPnPJX4XPpEgyVqF17tyQkA6vNWH7V53GmEvBw2M5krjP32bBVM5XUBcybDzG5u9M5vwkWkeCJv3RB",
  "key30": "3RDqXhVsKfJnBjZVKQux7fsgCsSAMvYbgBJ2TZj6ySD3pC4o6MkDM2oNMYDphRQgKeTa3Ue3LjDApgwfhXJCZQ85",
  "key31": "5YRkbTgX2V8Pm3rxpmGvVzpd3jCpTXa75ar9aNHX5CSN4QFKARF22XgirK6r5fRQ47ZnvvJiYbpbHJsqztExx5SP",
  "key32": "5dhwCrey4osUDpiZZ2YCi5vNrMn8zwQnuuWKtAFXdADHU88gQhbPJpcUmw4BCn2NLh1SUV39af5rs2V8YA7iAYp8",
  "key33": "YojfNujyeQcuJXCJnxzNAHvB2fbWdzQk7yGZCgK2ujAWmzFZZxnTwwSHQAtZ5wTjbCuFP7cP2kmjanjKoZk6hh5",
  "key34": "3x8DvWAydqsr4hXESkxFX93iS4HRkEiJKejSRxb7zpmi3tET5m5ogzQZ3L8xfdfgchaFGnmcA8FrjpdfLkrFqCkC",
  "key35": "p5eZ27rEjuka9v1Nh731Fe3y2teGhmK2fpiYJ8FSP3a5kk3wvoSJFJxS51g13w2jW4jnyNkqsE2ynqBg5GLBbex",
  "key36": "4j1yvX2uKJF1oeirxpk3FP7TsZV3QHvXCYs82ieGb3tJif3TmN7ahySZcP6xXPJ9iaj6b1QhrJiqSJnZvuLNFnY6",
  "key37": "4PY3yzFf5oXukM29cAzUAhpCgeD9czS3cfy7TQDYSbJkFHe6SLtyusxDwChKhmW3LvdiyHG7rtDodgvLrMSLqoyC",
  "key38": "JhBmYDracqnKvkMTG2NijAw49oHb41kMBtamLeA7skHesZ6CrWjFuioYgxPUj7sBdzdBQkTXHLzrupNX6u7UysN"
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
