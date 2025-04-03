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
    "5CQkrDFBPehucH1vX4716njDEaqFYqcLWyqLtUFUVkwy5FiLDghYdrSo8uCTmguzp5X7a3Ub3G4bJNXdR2opGt7s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bixBzH8WXefjCVfbXwA3TeHSd4jxCZMm1XZSQf3J3KjJkHxLUq8f3u4QpLKqSXaTMvjujXdy6weRMc2B9q8wFLY",
  "key1": "QyPBN62QDb7vbvu5V2Axtjjnh3JdpNm6gNC4VeibUH7wu1SVLSADbTE1kaSwwLwjeJMDnRxoUdCutL2gq2f2LXp",
  "key2": "4ULJZSSBCq63vXtHjMWEZuyCXzSSjwFEddcH9c4BwQMgNdQrP6RHcCoFzSwTgU2tnveEVaAnS3VcyvxdtAAeDZxy",
  "key3": "3d3AF2E2uwKuY9aq9cwE4TuYg9zVGSWNkem3ov68TRqCZBTKBq5jQ9xPE8X6U6BPVcx42mN7VShqQjMB221Pvs5Q",
  "key4": "2PLhVYH55EdDNVKmaKUhnen3MSobyX5qCocxaZjFxuqrDo6hmXLZPmj7GUm1baEsUPEzeKi61tLCG7NFKKKnTNmh",
  "key5": "3iZZGFVY86XkAUwEX886xJ5NwkVTJp7A8egPh2ocb8kZYixppsDqM9pJQEZo6g23d1dQTdPrejipGvTta7CuQKYc",
  "key6": "2S9wjMyFT1NiCat6C3dAfbvS5427eTYXmD5WcKbXbDr8tBePhUbUrV1NLV9xpsEM3VtirrqALQxEiy9SbKqC9idV",
  "key7": "5S1pMJzVhUKwUoac1AmVvaBvKDzjKGm3qgKGawEq5JjJvSwRi7tx11NTdxDZvUf74TLVZoVQC3om5kXfyVgifBga",
  "key8": "3npqyvgihhDAv98Ep49byqsHZxJXsdEUvBqL9UsabijpatQyvqCBFKtJ5LEATyWfb4m8czrYfMxVuR5STHxXMqWU",
  "key9": "2CjfzLnrAviNgjWrYNgBLcsjzS78v7cMX7Y429rCjU1Zqh3hV44qukaVjsdfPBxWSwBr7NDVy2yCMvFUcsACUuJe",
  "key10": "7vSmwm6eTYFiuy4ZVpdYpUdRqYfqXo61L5WaJ82P8L4XV8vjkCPVts9YSvgzv285Z2xf5xSG6WBGVn3xP9ZG31V",
  "key11": "3iHwnGRu2kTFHEbA9CwQChfWMGCr9yfJ151stL6GMmEqp7jWDj8haqTLJq3UUYRrs9Kgr3RnV76oxaMa7xdL6ZtH",
  "key12": "4UQeid7vb1X2v81TDcmR56CSFYEQuTfon6xUvx5wUtbfTQ1rySvpK8xxo8rRoyS2p455LgC86MKjMSnTbN8oUqHM",
  "key13": "AKfFfj7tJgZSHVAPSwUDuCggmHC2Cw9RMU6afyNecfg68JAdTTzqpqGJPc1pUR85Zbs2vyK2EWSyciNqDzh3B3z",
  "key14": "4kus1C3nHKHCCGCPqdAGHEsoeXXGxqJXtPv3XnhuZKrLsmk2nzKRGxCEh3ZjsfAZ7NyVT2V4DPRHCU8a7pC5dDsv",
  "key15": "3tydB2Si7YbkmqgZcj6HY6LCU6ucSmTdCC4YyW2LAxsBTJEKRpS9ZJA15Sc2Rf6Hx6np2Gm53zNipjS18khV5vwn",
  "key16": "5L4vfgT7oBEMkwmzptMBzpAfnS5UkASYaazMz7Qr2z3w4Vtop8Mut2j91TLRjKJNH8z1PZbH27NDDhqyFGY9nQvz",
  "key17": "2zZTfLfR1eWnoZQ7CC1U8se8gswv8oMUZ79jD7NBUcwoEYGRUjx9VAYD6gwL1KK9pUBeD4jKyec5CNMoh7xjTR9R",
  "key18": "2JqC18RnxwkmPf2RkdQdD1LmQK7UVztmNCHQKQhVtXJFEUCCocYxCVbgh6GTCNJUDNuFPQjGSVh2VGbZgn3kZCeo",
  "key19": "26iSN1U2wmeRsJ799Cx3GmvhB1TsyGk3etirBpdyEv2yGtmCteVRGNZH2kYBfURVf1N6H3xnWWossiXjFnzeDE1J",
  "key20": "drVYvq3zgPhuUhPBAUJkGUiXa5xHCvFReP5f7GToLnGUzjCgjNGsyHEEd1eFRTe1yaXYchP97f1893a1RktVMHY",
  "key21": "2XtGern7XojVN4VqGEUdpgLM4Dq8GjUXoTBRLUa8uBDShGXpSttUH2uU94WsTbaNpZWrkfhGGUQLgQg8zRkbDy3j",
  "key22": "ffftGwCKBTbBSo5RUW69gvvTjFqFf3xP7Z7jhrjD9RvYwDmGumT4QdXovuA2hB3x3hSTgorUmvhbJge9dPYkZ2a",
  "key23": "2ReoUuSfApUwjQEBmiKGvCnHkg5uWat6LFqTr8Cb2J1VpgaYXLb78YBHxWcgNK1zWh9REpB5bneojf42dKazCxBv",
  "key24": "rqsUZEopWcUc32xiFkxQDYA3ayBkvTJwPCSFivu6KbT2H21VGmMhCmMXtTXQ19mQWgRB9JAYHQs3UvQYqQyYb72",
  "key25": "oUFhxjyDnaog5YkpJb8mTD8un9DYsuvFcLyQN5T8qGkbFhattV9EZrNXk2fPYifGA5HYYrPj6j6GDq5UyeEAuot",
  "key26": "exEvwonfJPQyatA8qLx9mCVKoW3umvNvUtvS6BLMTqX8A7WEQhWhdNayPcRcaiwTKHQHyFMCtMF38eB7Hp9SGaZ",
  "key27": "2rETJfhBBaY6Sm6KZR6iShPResE92zjNzH85JeHYgDVVpdBZMkQ9VwinRbCVAJYCPR4myijEmmd1soffmQCUz2dc",
  "key28": "3KBqF4AuF7aBaAxnnSTJvtMfC8fU7ToRh4n7JmyNPG7feUUxUvwKk9R2YaP9cbDeoRecbtFEExzfmSojg6UnpWgY",
  "key29": "2dkT3CxvuNnvn7XKUz3Jv5N7QyQmw4CWcZQFbFafjom9q4oc2ddeEjV2ZF21Ji4RHg3FshpmJ9NXEjD7c1KdZi8n",
  "key30": "XxKkFQS9WorUgaN8NkDMbrxf8iNXcUULUzvGDHCgreCgUCKnndkuSnWZzgKpBQKsJi8j3Rgk6XrQZqEBoBczQoA",
  "key31": "39mxszdZd5wLybUpHR2U2Lqsujsb9z3U8rcxhd8P2mocnnasM3mL7amMD3NXZ2AqopASM8PzmxTU5FGt8cSCwXm9",
  "key32": "5Qv6tVx1Y3bwkmozbECqNZzk8cWb5Fv2v5MzNjdGTeuefEC9DSCRhYfHVkwq1revXkQkmatqPscpDySYCUVx2vuG",
  "key33": "5ybxkiiT8DL1HZDUafCFt2XR7C7qTzGUieZcmm9KJvtW4LrWxgDKNeVwBZaQKhhjxXACP6jrLVJsF2PRf6jqXbTt",
  "key34": "RKRRSH26oQ44SsVGqzY3wkrFPT53qH8qsGuKCqEHXRwmwG5Woowss8wNhhk5PSESWnrPDE58tYEozz1g65e7j11",
  "key35": "4R3gZhUHrWXgFKZyoRqqBu45iKrjj7cYi9RU4HTpLR2HdUwLiLDmetozSHHFBTGTvxnW4Zp4WuCvoFzcXFuLvkRT",
  "key36": "3ykDUDWFFFqBfxhdh4oV8Ln2UG4G6NUYRHBc6HDJ1UnR397RibG9MJ1aicFXBo8fn9c5u2NRJKauH2mQvGyHRQje"
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
