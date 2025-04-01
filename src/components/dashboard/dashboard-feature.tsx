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
    "5cmvQ42uUFfYf6nQTZiwr5pEQFuoLHupmGHCdNVscZFYb6DXr6KEh7DEr7QuPEUb2P5diLfMGDb5LSr1BJHqzGKj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LnF4YovaJfDafbtGRiWrEVxSb38qZrp1kG8K833qrjp1ZcUPb2aNPdU4HsEcgJai5xuoDrLq5aNSbnPnZ8hbbAb",
  "key1": "4nA7oB2bjtrgmKwxtuqZLVor943fCmH3T6A3YNvo1MAm567zFsPzVrLPSiG9DMmRGzmx8WgpJdaWFKi9wB6hFkL7",
  "key2": "51gDzUH3QLTa2BMxPpYG3pUiAR6pZeqSNyw1H22RamXxL4M6kE55QaeaBCqR2bz9p3XfphVAtjbac1LQ4F2zgozb",
  "key3": "31WTshKfweYPmq5nnhk8f4Tw29iBvty4CPjK8cFhbzcYdZede3pDbR6zzMEVWSKUk59LDS9wkUpoDG6yonTT2CdG",
  "key4": "4pSS9AzYENsWzw6dQYEKgKTaXLTXKUEDt71cC3i8ERcRF5cQHdWzzKQt13Uv95K3cHEgNJyLYv7nZ2tKDpARcRqx",
  "key5": "2TgQCy1DQ61PikMz7WyJ2dswQp8PSAhiQXMysnZdEGeHHJkZViUdfJ69ooXPLYZR13SMqAK4mdu29JfKoc59EE69",
  "key6": "2AEuuogSvJtnjAdqJpS2HuWzzZDeMi4iNyAcYUqXMdR4MzBpBK6gasjUYA1LFfuKH8qAijUyLwK94GYajaLr5ZDg",
  "key7": "576G37pqYpXaXokmwU3zJkWQ4ok2ehF9Nf1JEJhChWRXjokGFV7k5MqSjmYHYUiJaEvQqAvksNQP1oPCSbrYtmmz",
  "key8": "4eR3Apdmqu5g1NgGNG9c4UAYJfYUG9F4YwfcY3MkZ5E9Ln6JSZtq6P9CBjNbfMWA9TNUTXyMpdfJF9yoCxf1eh54",
  "key9": "yw74jcpdt4fxjpcoqpgoTrejk5J5NzwJF68ipzPTwTPUzUnYYnnWg49oVHq7oAHby2znrv737t9Dxn991hsYez1",
  "key10": "5mY3HE2LNzbWHmWDQpYCCaB8AYnkkVCpGjr2LzKVMAKzswpYiS5HJ9JGBGHpV8ZcX3VMm8osbJtCeDdZsWgB6Bg1",
  "key11": "36A5Y9wQRn75Gn7BeZ5AJgj8ZiJCzNTx9Z2rS96iYvNYo6NJQq2ktH1LdhBqUVWg2JkdwSAvimbad7szVEtEuSzA",
  "key12": "2oQvwmbVHf4t5ELMRjiPQPMnbdayHL4ju48p1dAEJNnNyzfbcvuaEyhoiWbe4E3rmAk6oeqz5nBnVXpKiqQU6QZy",
  "key13": "5GN3QHBiawY6hRdnMyL6pgMirwjrit1nuyyWcJPefYrYDFtf3XZwSohng4v3cpchPFvSDQpo7QxkZm6foWpyb7hM",
  "key14": "4zaiGUUkUJW9t2jadFrfhG4PDdoGZZvyftJKMdfyaNQY3AH69QKEEVQTFGJ7cwWAMgkFGaaY2Wk3xq7s7LrVSGVo",
  "key15": "2rYGkq8wd6QdFpxaC8vJvqh6ephzCBFmHz2shy1jVCMHGrBNMQHDwg4nxBH1gpMNYzhGxadpKvAdoDFxCcqGnHSk",
  "key16": "3FWZnwvz2cngbExPDxzrNtMmg2ZZMYQrmheGPUWk3zWosCCWrGvwtohVXAwAMiXk5GxtSMwY6kFfKXFa87Yap2Gy",
  "key17": "4r58Zn2j1SXeQsMTZpc1HZB46KMtbLLz2RQG6L6JiPShuJe83EpzGMYmxvrRVBzimUMvEfSqudNYSisAFkks5ZZH",
  "key18": "5NFKhcbLCU3NynADRoZ9E3f3rmohBfgvxSMYdMJyHXtoVkBMcdKkLVtdHPZw9pSXHNXkaci5ib9AiopmihYMD543",
  "key19": "5dWbjVxZyytBc24zwzrsaugKth3k7QU81YzXwGhenekjmqbtpHX4qpoyY3UTMmZ3yY3AvAYxnzNrn8KxuGjvVjqc",
  "key20": "3T4NjMs8DjkRCxrn8ohsAStKMfWu8CyxpXpxBMHDfR8c8M2rEg4fq4EZcMKRSLEe7TjXmRTg5JC8voKfxJLdpr2h",
  "key21": "41ULNXs5qnN1WQcWVSS8D1vDjoy4SFuyBB4ECqT8NNQt84qTXbCzZW4i24UFCUjjiHS3jBYSYVUakt8bbbxXiSrm",
  "key22": "YBzVjoGcHJD7ZFkw6mi3i4Ax7yfu8ApJ4BE6UBwc5dGKd4r5P72vpe1pinKFGJJXXW5pfv7KuCbKtRgzL8to2sa",
  "key23": "4fXT2Wui8EDXqT5LNK6kxEDdAJNopUoQrQEEFjqRsunT1XpL23AyTrvDigJt8uv1EWPNU1wiyYKewscoZBwTvX1C",
  "key24": "31viGcvvxk1MH1HcnRLVnbiMzQBuWTF5mwnpp5KeEZTG8UcTVsf7vNRuV9zcRF8EB4PZxuu8CU7UeqC6pHAjzohY",
  "key25": "22xtR1AzLyeAsjtf1NxXVQfsnwVGrkW9o4G3aYpwSy9RiV3ZyXVBkvyoexMuVxZrt6YSx7JfkGSUhSXZxT7b2s2p",
  "key26": "26FFdJScRZuRFN5nR4ktXzVG2Q4A7aQvps67fFpRwNCu5EPBbKdvFVVvqzFCoJC8yLbbwyW1a5SFWU2qM2ZCbQbS",
  "key27": "4bdhKZHnD9xU6q1PZnuFENzA6oKPRnH6skf2F5KQkbskL7fU2FJ6TRsdaJ2muneBT2MGCji5L7n9CXYojrz2qEkb"
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
