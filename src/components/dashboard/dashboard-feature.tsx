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
    "zNitt4AWxdZ15tTmezEsemRhbYGwFJW38zvvBW5h6NdaD7mEmXpNVUyggzkiiAy57fSJgzMuCd386Zs8j49AUjN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LzZr5zqWktSQmqN9dGqmSM5Eqyh8tGGv5HTwk9H52Up4Xi9GGMCQhck9eFz3nS6kpXnrAK5485qZdf37p4fpAZu",
  "key1": "2zKAe4Kz2r4qFd3PfyYxpb9sSzy4ZUZJNBjvjjkJTPKPQTsevU94T4u6R3kEYTpYb7NsoRR3FrFHcrJku5QPdAKT",
  "key2": "4th31vqsmUVF8JPN4K54Wa4tBRitPfC8VHaGS18RUW1WFFnvmiYWJS2sv1YAJoCtekxVk4WgV8xK8bQEBGEDH58S",
  "key3": "38yHdN9d75EG7kwfawtUjV2QXhUuW99JVPaUBJHH2enEhB5oroxQhWNYvGYn1td5tLJcQ2BYDLbjwQyFnEqNgwnB",
  "key4": "3QNF8Ge79RZcxi6KSUEkU7ojGaH6nhnz2mobmNSNzLoLKh2FTGPZL9gK2mWkJyid2CRuQugAtJsCK3UmQ4JSYNPZ",
  "key5": "4wBBoVYM4BHr7qF5M6TgPgNv7W9d3wM9fw1LSToJ28tV5qa4ZxMrKxgdEvFEkSRApDuj1zGYwUNGWLxbjYsHN7D",
  "key6": "47tmZ4jKjdJwNBXaE4nWzXrtCsssQ4A76a4UYDHNUJxXHnWriDrMbZAY1omdaPsncNfqZoS89maDam1ZrTqRMrYk",
  "key7": "4tQTBHqFaaNEK2K2NTicqqgoHWTexqnv77zTJcGqBxD9brcd7Esb6emL892k7qdjFXZjQQBycnJRsJpycBnKnhLC",
  "key8": "3rWYjCnQWnVJZGurhLGiHQBDHNtU4eb4VmtVdWu6mWpnFv9wAbJz7HxyXdZZWngLtdMqFh87Fnt6guSnGyiKdp3Q",
  "key9": "3pBSaSmwFSzpfgKn69JbLuiXPJV5uMgjS6coMq3KqDaSbBWWgLKB2PqWL6kzKiHPKj5iUfmiWao2CEgyeWEpQrqc",
  "key10": "FoN64y3RXgEQrWEq4qUDF4cvEKh6pj6vAurekKn2Yi9PZzBPQxbEqQUDJJJdkjM9w6VVSZUGpCK1tujwj1iAaLZ",
  "key11": "44KfdTg1tLh2FDHC1amqaVXjZu6Hr96hDprPbSTJghWjnUxc82EUswGPezJt1W5hqitmEVzgcM3L3s232Firenvj",
  "key12": "2BRzmRuWkkTA3BXwsuyzvU8P5CL6e158pJ3V9HVxoG8i8txCsjcTGDT3mvVQnHB9qvEBwRPKS2FEJnbGMt7VoFEM",
  "key13": "35fvF6HKT5kr73EBfYDG5K1UsfRqX2ctVZjhmwndP8kt7HAdm8QWA1Nqb7Rgmp1T4s672PnGboqh8sCjAmq478qF",
  "key14": "55MDd9ktLfaq9myiXseiNVnb211FJ2Mha4CmnKsC7idJGvYEeQZVuxdVzPzPakfZiTZZM8KPYeMBeZTBt1sucD3j",
  "key15": "5oebkWjx8iqoFj5uKc18RrqYMBhGiv3ridR1FXq8hkQzxb33TxUvQG8L1SmAEidRfteDivdGwfHvogAT2enDEAud",
  "key16": "2TPpqrLbMJxDjC25ks9eENtWr5cvcFgF7anF6nDCT73f14cNC7VaDaEnFYob6yeSuWWJbsG4sghDWbJiuq3A26rL",
  "key17": "4jLjQ9j9xV5hUHuXPWk3KQMRSZicPWK7bufPS63YrVEzASVYvKZ47wcZsi8Gjjmw6XN14UYP2zXwzne2haRWzdHZ",
  "key18": "4dHNiWBbMgJSwi6pgnaHFppSMjvEfipiUiD4ipAA94pEJqC69vtwiUxovPencQbaSfXUrcz2ac9EyLqZKHuaZ6d",
  "key19": "4ztva7hPGW2jZajbYWcKx7bvTVGiCWBgau4C8PDL1rRKvjrP39uQLTGQazd8UoBksnkNxbjQyJqPzRhfdEPaKEfy",
  "key20": "53PGL3phwQ2DnTJq2RA58x91ivoNyLboNoP8o5Q91FWVNR9g7TLTNwQWX8RtjqHyhhg4tC3n9uoqVKXCzuGJS1nD",
  "key21": "2kfcdLVprUJZzgerxxqztXSczuA7p1ZCUyiuA3t3XM6HYsGjPDg5NP5W3GoD16FqVqtfBcVK5jh2vQtzdXT9PzLa",
  "key22": "2zue3z3KyNXZBZqRoCcVUbQvcgPnzPxd13WJK7urHpiQtrcWqUCZpHf8ieRwwzZkS4waBRERtGWRFZGsq7fMh9wx",
  "key23": "5orWEr5wdEnXdfHXfXGcZYSztg7Wk68r6dXz5uhAuG5N1T5n4kkqvnJ8rohCVY1ven8dUNk2oHRs35YGPB4XbXa1",
  "key24": "itygYWLgbjn5XURMXJVpFBwCEUHfK3MUCSjzxAf3NqL7NVHRLoMJp8uuBbCoZ2xxvAe9YyQy7dfjt6XjRExCgLF",
  "key25": "4WTWdvESDRXqstyXvbsUpwBgqu3dBN9REbqzxaZrxSuC3R3ci8bmbP7n6ZJ6JV2DHcYpqmhLFFiPUq9tvK5G14hj",
  "key26": "4BY7yBArsf34cRfbVq9DAwumMM7WRk3iVbctYTTVRpsU8FLsbD4GQaGnC1DfnnXgCaZDeutXLckjieEHH1dwwznv",
  "key27": "3i4nHvUXMu845Mu7vfYmzUzeihxy4EEBp1jiE5n9bpFHoqv2RaFrvtKeWaqqEE8NyPacqK7H9BgLEjZWDfrP7HCo",
  "key28": "5V2mUdPJgfxXzLX6GcEJgGA6r9aKfPCg55pMJxqFyvAZYWt1kqtNTddWbxc5b1Jro11QYZmp3SnzT8i2jhvWsqYd",
  "key29": "53N4EKxXGsKq8H7hKztbm4QFBkgqT7DofKoa2zN7GZMaT57AwDmhusoCxdDQEELXzUHaQuRifeBdnpTDenrgY1EP",
  "key30": "RShLUYB4ypLiDpUcH7LifArUjx2MdyqZEndHpuwW4RN45UWBgQs5PHVG11eA3vr7dKxZMcjgc7Ey9ifQfmqHVL3",
  "key31": "5i6hFL9NK8CfMNjDMhgtaPiKZyVPNszRwAQ1xpaJ7DuV1XBNAqVsGMiiFghH3tGYEGYLNBxrnRqvGLHUKs9WX78k",
  "key32": "ALSGqPYCexcCiEb7YYHL72JKSMXgLTQui9HGD2csCSLuTpWhmnbj7pXns4LZnbjavUdqGf2WzMQ2XKwpbYST66i",
  "key33": "3t5ARRLRxH2V7wZnzwSr24EYMcr37fXfYNKVaakVcyNPiDmwGdzwQfhvdV3JUrxddjWTguwgxbFeSJ2pCj8y8WBw",
  "key34": "4fR4FxN1d8AsfyW4DPvuptd8BKtfsruoWbHYW1raLZdzRcFYcNuZKuvzwLJnTSVW75gjDfR6iLQEWc9sPtmatCQ1",
  "key35": "ZJTEA5jMVyAVKnZ2ZWDZFThMLsZtgwd3AedVKVd1k9EjAEGMdVcvA1V9VD9bGHqDq4yQFCeWQeX36Hv9WrRa1ai",
  "key36": "2yoeE2N3Q2eMA2oLkAqVkpEr1v85vynRa7u3NWEa2NJtyoBzhHBhn9Uq78zUJN3MgdmtVabQyCaLZY2gByTv4ivZ",
  "key37": "46WJwJSXZznQSGY6DarCrA5f7uV8ejgvFchBKxeGqksfGgJPWgQsmfNyzb3yeBB7TFUuKt2sovZ63rFe6B5ocRAT",
  "key38": "2udXwhYAoJW11USwUtSciXYa6KYFuSu5bT5sevDKbPmpHpUBumtFyiEPQ1mMnGDpuW9MAoKVwoxXdyKC3scTNxzt",
  "key39": "4MLUwk8pqj3xv98FX547un4A8ePpRScLCYT8bPxF5cLx1Ji7RrpdFNmcHtMg5hmuUrQBbVLUbU5pdbe4esgj5wSe"
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
