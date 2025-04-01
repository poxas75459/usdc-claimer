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
    "3zB4uuPyf6AiLBacv4nGTzXMXtwWGM2tnuEN8bq365ax7DVqfGZsXc3UgTn6oY1qPzym1GCGaU7zxu8NjFFVHB89"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27ceETTJ9j6dbDKjy1N3vtKGq2m5Wftvju3ChQTd6aj4zwtzs5Tn46LUYVcpQuHut1u7W4rTgY9iAsugawRThKHG",
  "key1": "2Jg51R1mdHmveTZRx1Z1Jgb2PPusPtUbAouimJSaEfkGQTjuqpoTGqtk4JGJb4kM2aSagZaK8h552wyMCc7jaKi9",
  "key2": "JMWTDcFVwL2tCDfwFA1obdmiLNUYJJRMedG4FCRuvNCWy5bYZJT5DXreToxwYaVi5rEEffiEbv6uXMAM7LcPzW1",
  "key3": "4GqC29mUhsMWqQHBJzxUz6PDqB4z28KrvpvjmfEqEB4FRQyhkxSzkWBJcMn8hwPs6ySnT6SCXLkhwC3PDR4dK79x",
  "key4": "5RZM8DpmKmnfDx5muJ3sKChwKCTY8Akm3FKFQWqwQ9siPCj9mRA5FgCNp4srsgysXhEpJEqAuac6WvEh2AW5Er7P",
  "key5": "2u5EkA2Fm3dYYrNteEGJ5ktQAXEjRPdWdJsVLC3wcM8VxkLYy3Jf5JKfC4mwtip2xJibZQJokFuzCJvLM3e3DYGj",
  "key6": "5NYX6CCUveEC7Umg8S3xZTx4C6PKhCkqdjsUCDBmxGwrvKnjM5uXSNVK2gzR5vD1PXSBn1njjwFqzV63cu4Q6cr1",
  "key7": "4LiFJbXKa88AKYrMF62bMVJcmAQM9JZgvCpyJWQeHWvQLU18YZYAFQsfkrBprfH1FiJiE5QrM62gX3qm51zZwAhP",
  "key8": "23BTLaJSfxX66Pf2uPWNVxuSECemWHdWTZA3byh8uMFAqJGHVoLzBpGZSiUMm3aVAibpFvPmcDByuR7YVYH29jbD",
  "key9": "222Vn7CGVmyS35mPdUjFV79Ej4zoWGmSGEhrkzqM3QuSoobi5DviaqSoX4UkGVeFQk6U4S2VgEv8ejuaFZKPKR3t",
  "key10": "3AZ79mWjg72Dv3e5m6VmKzEf19ckiWqXGDqwPqMouThHH86tXFNHVtFFxVeCdGNAJEgiYYh17NEVFtz85xeaGFRc",
  "key11": "5eKXZ4kajXH3P9V7Vr6yK11AYHgfp675qUbQhynoDr5ExKr67P8E1rXfdNrhuUtxpoH6xbGJUoZGq5XzJXc2igz9",
  "key12": "41rvMfnVqJyfsaSTRfFLWsJ9RWCgHrAhnqHHQivSyrWKm5UyyzvgCU4SSbi3EoK84Wsc6qfZ4dBKzfgTujUu6DbP",
  "key13": "r3H5MqGP7x1SfFper91weTqPbytkJSVARefLD6JbRugxDKqgBpHEEpGe33t1easCadMjoM153qT3QtgVhLZ2FFc",
  "key14": "262HBgpLSsHemkygG3yPBgPVzfyzXg9pG2EcVEndMwWuUSTfJ3e5sffRQzF46ui7MXZxg89omejhctE1zqvrYDA4",
  "key15": "4Suyf8j6T1VXcfcranHtfc3orG5RM4JK37EK4KE11d64acMvzpkNQNc77q7SLqdx44ngacpBknBhc65eKTUXEaBG",
  "key16": "5AueN1sj5XmpLwooxPNCTBBGJuEd9SqS1Lh1Mm6F2MyqHgipewHB9PQVbAFFPNXYMApKzKFJ62wC3KzDZcYULyG6",
  "key17": "2aAL6uBD82sXTvrP3cwFLwfubfUmtMaf7wJRM5CYvTFzC4tufxy93EJFGCrXcFRXMtqtMCYiK1rG6fg9etJicN6W",
  "key18": "24hVyPRQJCkfEJWBy4B2h2AspCBBa9EZHAiTFs6gCYFxbyFFrfwbjhm7tQQCyJwHtbdd1Em5M7bh8BekokdiqB7z",
  "key19": "46sy1Xj9QBWTBGKUpjc8ks4hTGwmppcVtYwh6dmXY926v75PKkStBvKyw94nnREWyqT6CLWjyf4jpFNeTWWHfNZK",
  "key20": "39JCCTRBAj7U1FffygVjLVL4BgwbKKkxJowhGyuzZWsYbs55MQCTJDq4yoTSsqmq4CDefJdBjWfeJHypGbUwYTwe",
  "key21": "TMVuZDkUKJoQSiHhWoigGTH6cWdeQJmZznLr4rK9NCsjqaT3ucWx8WmpJjvyPmaG4HT7GyfNgtnJzwgaoGHGFy2",
  "key22": "HjRTeCH4gvEsEpQkURWE1xDXAbymH3bEWg3myuiUh3Wd1MaVbHFLVGuiXdfPdbvbejhqtEZcYc1kUDkZQnVfAEj",
  "key23": "3AWhHFMXBT4RQMNL6vKj6VhgoDdrs2KgPJtCEUJBXPBdTqnERiahoEvYmAwGBsSA3yWTav41jYazbTjnEPEpYHi7",
  "key24": "2UnVFYZZdXeTWqo1dcbfM3Cigeed748WMpVGdKKPZcZPS1bWpojNJQyWg2hfEqg1LLjU3TMNcewYPZWvFTmUCx27",
  "key25": "2d5PZW2dg5XtSwpBCSKRxCLfgEuqQNQos67D31xJKJbJFgXyCnDKo9KsdruR3xaypdsjeUbwtKu6k21K87dv5ZWe",
  "key26": "4knG2VSFsDSmSXYepNoCymnypQjwcfD3MwkrGmdSoX43bFgndEpq4xkojxqWncAL4Y4P3V99kxAyYkVd6AjMSecw",
  "key27": "25QmWMGVUZ3baX7VRfLmuNBkGgyXn4iYJuZHjB2twr1TxsXyUE5NoNSY4MMSiNHdTzFLzQ6WmDPFt5b1fURe3S54",
  "key28": "2GsSTg5eb4fKpXmpFj2aNYB7t6RUFpcHmjc1qT2VUgwMRRJv92FS2idWfTQT9JwjcqQtTgiWKVUoDCZXTkU5ivMh",
  "key29": "4UJJsxahaAZxT9AwVvnYDta8fnMRTsrk4sWKgNAr8Ssxyiu1XKTQF7EHThaPLm7QmUBLCjLgiUgVhTPB9Fhp1Vhn",
  "key30": "4tt6AV3CDaDhRfJ1RsmXvoxvRRmXrxTjeiY68WhpeS1Ge47WMjksqSEzbY6iGgBAc1H2jKuvQf3t9vhreZXvAmHt",
  "key31": "5ixfre3AExEGS1hxuvLRQ3LpsuSekRz4UMm3F776Z9ZwJLn3B9uFXpMLS97NbJLHcuAwV265ktHei7kHbpLGWRo6",
  "key32": "2vQTRTZdS2avW7kjs3PELQtUjFFqSgbHw25WkCnPZ5yJU5T9GPfVywnZpG97djXNW8id723vNLuMiKmhKBcfD212",
  "key33": "4owuBNUkCwN2PDSboBNHwWyvNXHUjzUkS25hTd22ZBkX1DRUGqW5v7x8JdD3QCF9ojCoCsGJBrHJRRN73h88YMFi",
  "key34": "5ZFMzYdxf1jBxDFeHQSSnBBTgkwsMck3TYn7yQkYExRfyGpoWDsPWTSEAUrivkqmLKrNuUf169m4sWAaUAv1Gdsy",
  "key35": "2YNkA8RngRUiTQy1QGqrcvEi7HsxVTdWCW7vcdENxWXuwng9sRT3Yy7peq9CKkqxpruoFm7ezSZ8pYWKFfgHSG6j",
  "key36": "53gy8GXLEnj2qBwPg3zkJiU7HukxYUawtH6uvEjU6trFYSAbfRxyPvCmhkvuMGpxqVYLKALCLfceT2WdziWTnJYK",
  "key37": "3nyQsCTUufVssvMxxLCh47GioikXUYVm5aRktKRLyJLiirADKQ9kHs87sFyw2ehVo4TUEWsUrGCcyBDGinKCFgPr",
  "key38": "55hMS8kU96xSwiTKHp2WJiK6NYn683x4DKzytcFkidPV555jQ9fUopnCV7Rw4yW7FF1xzm6MM3az2byozAVMfKSH"
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
