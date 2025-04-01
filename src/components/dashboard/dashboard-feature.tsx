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
    "55kT87kQofaxdnoBuEEqWNJsr2Lvbrc2WNZjEv7WrZsvJXpEs4HA3XFgREQVhAoyw5Rwz56QzHXt7rXbUsMFKZoN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41HYeTjvCsJ4PPpbFfC6APgHVALq5T5ZrthPjQkXahc4LoBzE8iL4yx8ywQBDsEP75J35PWujHnc4KGTbXpEPmVU",
  "key1": "4SX9Zb1xL6EqBCEucePXmpXSqQHkNcdbJAruaCrKLZ2RL5kp5ycCEznMepEMjQKkH7yLt9xrvMERYesgFspSjxzJ",
  "key2": "5oA4eqqfVYzqb5nK7n57ejdkuj9RDQezyg4Y9PtWWrxH1Amf6pxftWEDTETHg5vp3au6qqGy4LDvzfon9v8ouWfm",
  "key3": "49k7BfbS5nESEVZbguXRdsqBDTQAojoB7KdSeGMSuzR2vq7gZvejixyez59L6zvmMY563zmH9s6tFNZYADk96hpd",
  "key4": "4dREx9yHj15wcwXhW2wXAk7CnhtUSQBBqeVYE2yghRbtqqxSbZAFejG6e7tGfRMxMwgkoQHLMT7FDLE3G8rG3oeq",
  "key5": "Zsnxhwfa4CAG9bvFsUwfE8mf6snyUj4cRxCFU1DdZR5YvLmkZg5jq2m25XZRdzTTYHz4emoa5gdsFCiaSTvACL9",
  "key6": "pA6NFB1im4S3TVdJR6fdxxrvto5tvcy3m2ssak2hEDqnm7LDDwUXkMmVgWdCF8rxPptTR3zci9KdwLLmriGvQLL",
  "key7": "3LYce184UyjKv9FEcmc5gtguSPYg7ADxCF2exJrEPaCGJE4U2iSMZGjvykJrDYG8NmLkrt9BUxxXD7CSsRtQx17h",
  "key8": "283h8hqL9bfu1i4p3a2upyfnkWwyUUvh31cQUNSdoth2nBeZe8bx6zALVo7HN9LBzEu2YK6dn9K7DERpPryxi6NQ",
  "key9": "2yY1p4hy7dnYxg1JhtZnystpJQWewf9Bdmko2sS7WHQHJ1UGULHCpMXeu6oNGzjZCQcxQqALt4vMfKmQv1svamXQ",
  "key10": "gmt7DLsnNSzVptpqpRi6VpkEh429K7KxGSvXKgAAm9SaDrbqBCcZyGFkUmeXGpFaE4iPX8XDcpUuEwKoYkfuxbd",
  "key11": "41dv9ae34NWj1hCLQ2aDYcP1rYHfqJqpHWH8mCeE8mpP2tyELMvyxs9PdbtrMbMtqLa7nRiq5UHLq877XQAfXQgJ",
  "key12": "514zf2P6DS9QxuKybuQ6qyKgvqnu4fjz1ndhFgzNcP832e4WPaDhvRYqRkb1wRT6T822Po5ZXG6bXY5nPoUAK9oS",
  "key13": "89qBjHSLSLscDJFh9Lsq3ZFEJP8sJNGT45QbsM5o9cPJ2YupPnPc1evyTQ9oEY3F86kdHAjUtEpbG3mxNLuHAbs",
  "key14": "2FB7XhySuq4s2pyrnAiAGo77LqcoDaz2sTNL3QgsJXfU5UF39zqfv9P6LTwV3bkiYnhQeFkMDH3TN7ZKUeKFhvaJ",
  "key15": "4CX7vdSQ8FKdVW5wrTRnngD58RcFNSQsdNc49AZ9ossrnCnrnoyKiYU5kDw5xypgNB2jVzc8Bh8bs8ad9Ut71dw6",
  "key16": "3KdNG9ArHpbycpo6igkf84r6nJ95B3u5aP5Cb5jgfshABz5iVqoN35hqonCDgNiNPPspEAGMXvY4TUCY7gGjdcA3",
  "key17": "5J6caCH6dwSXM7gK255EUnn81pquczunsKZJmdo62CsLadntkg8gBpi6xAoDBEx3SVjdtkPdiVENpXg7G7xbgKYE",
  "key18": "3MesL3tBSz3Tc2ZrhCRXeyhhKeYLTMcJU3GAioimo3ZZcEqh7QETCB4hwNNWf9BmZEmE92Y51FkXtWrY2nsosdtQ",
  "key19": "3ccTGWkjVPa1ceoPt4oJrojmZcbXNvJZABiZCsjuZX4fLg5wY1k5VQEpuXHBXsq4LNY35QMNS6ppjiRciSJduMkt",
  "key20": "2oWP74YJwnbTAPqwVQ3gA6ZdZCqWaNYYSCzL4p2DGfCzkSj4caZCdDV78yERu4voG4TNbHQiQNub2HwArqa8km8B",
  "key21": "46bybKW4cxSx3DAdkLLktvk2MaDcJ4hW6Y5qxXbM4bspSpGUbhFAYJcxDCokDCiR3wMXeSpXrDmL1KDEne19JT9n",
  "key22": "2GaHm5vW5L7CdeKggGBCMASukdMysKNimcsMAC4tvcVCjv6h6QPKyjL8xZ21wpLDbwJ5Wrh6tqQnsg3Ut3qxfZs7",
  "key23": "41X1ysUjzDGLteaL56zSSPEqgcSksmbhbm9XvRNfN1LJYnZccrb2rtWbi9nSdTbY5A247TAFQhGkZ72LgDCZJR8D",
  "key24": "ZdVMkcGNxnkXZw2pMGWizWdr6khEJXxRfjt4CNNycyZpm4ruoXT12GgDzA5s2ySTngypQEp9yopwMSc2kq97L2U",
  "key25": "2UMbHZsY8yRQWuYUpbBH1Apzgx8NaabsDFKmYVAaiUbrV6dUsecc9evJoMHX9v6cNXfScZhmkcP34KVGLuvbDMLf",
  "key26": "3DwSGXT9jZECZC11ZRR4ZLh3EhG1d9r8swx4yJYNn5JoWbdLqHwkXajerzxJMcsg9azHW17M5c6Ufpq3vDg2Xby1",
  "key27": "2CmVkNM9Czo4r3u2kvvQFQsF5nECnPmtZzVnCqRpTxvyJFHkZwWj72WNxwGWf5UtHrpvJR5ECGjXV1vrqg5oHKwp",
  "key28": "4GbSguPfoMr2aF6TCTABzLyWEHyYTwHxeBjZu4DUt9xRb2veDRkGGjisauG5Ybf5M4ySTQojzYpbpByPPxJEn32G",
  "key29": "3edxKHSpHXZY7GSnTBp5CskEi62MeGfQeZhDo5SAhxjhLM7DsRNpShk4Y1cqS4UXT6C5KHrPehMzVzipcqqeNZQD",
  "key30": "5NpHRRqgPhcAWgoqj9LzYcrC8YwmbFtvQn8yJ7WK8CYjrpCfcRWjbr6K75kxboCVLnWfWHvSZCQCZS3nQZJmYDjX",
  "key31": "3MWqm1cs5CeXmm9mks9CDdQcFS9S82dk9HHybEJgs1cRYnXCKUrLXF8WCxXguL9maBNPkg76hSpCJaKECdze4JAR",
  "key32": "5mL2CioA5Z25sSAqiz5dVAARQh9z8zzJd1KFq6hH4XfE6qjTwmXkH3yovBGqmA8nUxBGTKHWhy7crxUZeDbKMU1p",
  "key33": "2C6SS2XnFx5R2NsXYbeA351Q7ALTwLUF7oGgP4332koePyMt4QnZ5N3DecYy8v9DJheS8kerZ2LzGKJwjJwsELv4",
  "key34": "5ZHTWDtccmdmdLCv7Zmr93RhyZ7qj1Lci2bds8EjeDGH91LUdbvyrGuxyjS7gntRRrvZau8emLYU1kJvnuC2whPq",
  "key35": "5GFNuKXAjzJxruxY8rSdVyksfdntD77pwtiKpBB9ctxaRji1h3zHgEiUyohnHcSBWNAFe51H54a5gyVCoPxAGjEg",
  "key36": "41c33NGvWdSepkbJ7TJ798LZ7mCQddFGnphY7Y6Fthti3bDDX8wsBtGrW2HxbrsZx1DeP6qbPLVvdamrG3X1mnHk",
  "key37": "2VHpKhPHYSeFJXK3YmuAcRY1KAFCvL9QKQkbzApqfGKLfUoqjZ7QvQ2wfyMaX7amcewW9ouHyHJ5BMd8SdxUpL3E"
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
