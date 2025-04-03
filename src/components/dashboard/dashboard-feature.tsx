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
    "CqygosYhxMyqTHszsgYxkDHQgqJk9LE1yg7D7D8HPFXANaacW79FbQqRSsgJoYB9BZ18PfwUJnG8b1rNroJjDXF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67jATWzGd5KU9EJXzZkJQcbnnCjk1bxPJa1DdH4vU5s4QF1qPcqp584VMRQwzHzFAHng5iEQF7mZCrcQv9NZuj32",
  "key1": "39FrBNsTY9T8M56UCjZkeVHjBrgN2zayEVp1kvk9D9CQVCAXW1G5RB9JzKkzUhPMYgk9HaYXzNhZQ44eFHeDFAen",
  "key2": "2uFvM7Tci4ZDMpgqqWHPXZ2pq1rYLQjbFZYMQmFZfswuJgZGtgMvJt5AGdj6g5DFEWVm1jXgevXMquRYNkdBKHcT",
  "key3": "4Yrv7N4EixdeNzwMWabvvBbVUyATDsbB9cBonEco6o6EMqTdph27JWQJVS86Ye6swehQ4LKvTeVfT1DckudaxVgG",
  "key4": "3VmaavQVMtbXuRHqDDFEjPSSvXG2hvTKhdv1xHFAvaxducwMQcZYTMvHfWzZqqAYPzQZPPqnN2HiRNUADdBqFnun",
  "key5": "4vRaDJ7Sct7rRsY18kecereNBgUcNwaqt2i7SVDcnof8vaMGAwJjjCGRcJfMxyQFZ1HJRmCNnQ16h5wBrqN4ZCG8",
  "key6": "2xoSs92WFFodv8LirLFSyKiU2YLYmxhPG4CdzxEyXyXZuKGg13EDopsgSPFMioHrjhvfzKFTohVFiPFVsiHj4NZD",
  "key7": "5PCByMTv4yVvpxFYsaQo6Gx4dYvMUfhUFMRyWnAmv4tngRwE2MButvEiQZwxt7o73qtUBst3c9mYy6fBqmLvPWLH",
  "key8": "4XRqUkHBTv812zaxoAW6k4LYkbZWsPcWsXKUeUX1ByuPxaFdmQ5w4ptqrAuRMompPszb8wjSHdD9h7C7UwNPFRc2",
  "key9": "3qy6tMfvGkwMEmofApBvgvEoYwTB43Lu9GqWPdxuccK4hsAkbaitnk8hBWF1f7MaAhHrp88fwHKB7HwSJZR76ajq",
  "key10": "3VZthJqpMWJx6s6rPnFrRLAzGGTLZMW6gJGGoiunxeiBXP7ofKv5xtTcsbTrN7huYLk2Q7Q9DqMGoNHbM8BFZ5XJ",
  "key11": "Q7fM6Xgz4zw7o4jfyk8C2S28CNY7CRJyoHQVWgx3tuKA6PCgyrGD4VmWsuM6Czp44eop4ehF7BxTs7kGgSbaCrQ",
  "key12": "3ndQfaAxBfdrwdCfuCsYFvyQdEi5PnsuoJJWPT3r9fA1E8Yg7uk1r6sfPZ9yBD3weoBYS3K6nxEGzzjNCexXFFbr",
  "key13": "JKsx5Eu1w6Wf7x61UcsiztqaNk5K8j3XWWrYgT73vFj6vbo9Tep7FJBGyWH2qCvr9HCPLFq9GknsDf6dpdKSDaH",
  "key14": "4rGuB9QMY45Yazv2p1S4i9wTC7NfqGxtm2hAy2wRoPg4yiEZ3xQMyuMx3VWPwfuYbzeWyB4zVK7KEYw3S9ednPDg",
  "key15": "tsu3ZXJu7jqfJs66WfMaVgAaPXDX87LSJJV6nYCLzdhsA1fBrXNsNxXE4BM8vCETKrdWLRZxJh3eUZNfGT3sJwr",
  "key16": "5wPoSdgahv6VoFrngvCek7u1yYjKcDbfTFhdruXDa52WzWYAKhu4vB2ocLrgP2iTEqJ2P89sZVmygka8CDy4NLSm",
  "key17": "66KquKmuq9Mf75zA1rTFbCDsjfZxx9YZ8Zz7Vbc5j6qw5xohLPhQj7arHkgVNTw5rodGJ8HN1pmrh5R24dcuBBqw",
  "key18": "2o1NWoTaAvWHpYDNBYrffYr6QWdWhJg1ZRKzEXxLso7GnxBKuJWwxSqtK8xk4CJri7jsVwfiFgfYPRG2944Hs4j8",
  "key19": "4X31khSPXhjBCHr1QjQZ45BMDGHiyyXYogiPbmZPgwNuuyde6sqswWAgKudaXRH2dfRjMGy1fMfuVVnVcMQMZ7uV",
  "key20": "261E7huXQkbdKrLUwPhzh9SHpsguq6CpgYuXciaauzK64uUYjsXD1UGK7j5LGhntCR9ToGK8riy8QagqCwnGWnza",
  "key21": "2ropRvZu5qQmvpgtka28aSZTrvShkgfHLb9uZdKzohffnNjaDaimRpvZKNNnTgTNDauxvTn3uLE3fGp59SCHvQe3",
  "key22": "2Tk5mizhrpEpEhegYjqnwoJX1iMNv9R7wftKmvZQua2DoarWfUX7cb4h7nbhwEtTn1mWXUXGH4VJ8xE4mk9p8USS",
  "key23": "3vcAsM1LdiveTNpG15uWj8vDzaGNmzk6rDBUQfdqyedcDciG9W1CerfaLoLAmuVavdaWrwqYyT657E3brQGRYi9Q",
  "key24": "4DUSZCLwYTYBbyCogfqZhgqjd6CkZsKTX9oRFhk1NFKsvJBC9Sjr7BbSGrs6Evh5xsdxwhvk6LMv5yacvqvJREoB",
  "key25": "62vQ1YeDPdx3s7wVvwPV7cM8RCVkmTsgxLhJzuwh4qBjf8QM6aLdGgJErcYt9wMXwBHEJutotrwhmvigQDhAcxXF",
  "key26": "5qEkjWmGbSYR4qhseg8s7c3m3uokEgF3puQBTWiViQtLEAH9RehjSe2tczQZLjNNBv54sNEcG89qbimYfmPF6xjT",
  "key27": "46vrg4wbhk3JhwvP34w4QP3ucMbWCsJSiwo4WhwvRWak58fT23eBRyJxf8UZjCyZAuFqySAN6dsdJEHVPk8sVGnd",
  "key28": "4Pf9F8kFEzt9KP6qbP6q6QCYarJhuU6nP4FtpeZf58ReL6pJ6VXVoe8ZEwcpDeGknCF2Hp21aw9QAapE7w6odSYC"
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
