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
    "2tpyFBgUEunLd9MwH96ceb9ETYPKvKaNq91V9AD5UojwnZTCn3WeAWb7oAzDnk4SjDzkKFwjkTxLiDTWVU4pKFVp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AbfdJsogZ3AiJ15AxwDkjwMQ5FzbQrAcqNMSn9piAxVVon61SRXMQmWU7K4ffQujZUwEZm8oURDBYCA3nC93pnv",
  "key1": "3a4QNEKvwgiVjF4QEA6ZpXLkm2uUhaSqRuW7HJmXv7N4RaQ3xrbqzfgcX9QfsQbf7zH9DKtVFanu4Y2uNmA73gjX",
  "key2": "5wp1Zyx6M8pJVPZL5narrVaHBRAFtKRCqWxay55v4Ch7xmzsbC8gWWJPwxKtDuYBxzHpQEqo15soDTXtdTqV9RHU",
  "key3": "GMFarXkqbfnUGFGvzANo5eNfDhX5XAuWLctJKVbGDMA2GrpKvvkadaHGwBKfkVTguLWJSEbb6YHWZ7a76Cood6z",
  "key4": "2aHg7zKLDCtktkfTS1vhZiaQ9ygNNv4gWhxdax6JPyoVJ711Rn56iP3uQHE2SS8HZcW532bs5XhNbrjgQrgdw48E",
  "key5": "Hsjcdk8yiesYyVvS1ebiPJXQYkeSUsKTQK2qu2VSeeQNGjLGA1gaea8bpetLPyFMtQwdnrmC67ihhXvU4GU9DGy",
  "key6": "3yrLGtqc2fHKsH4pgcH9CpKGLrvTgpe669uQzT8bN4c5vgLvgofaLZnFmjPa735CiuUvgkgVBh2uGEUk47YS1fVp",
  "key7": "3kYchTXrGYohzoX19k2jEFt9vrob548YjiW7W34jCmbEouiZMMyFgSz6hB5QxPBWkQDZGDEwA9tBh5dXnwni4Vfk",
  "key8": "2yj4NNicCaEiDu2YhXS32weA2kGy7czVEEa8ynDcujtiQaR2cceTiiJ25y1grMurrW9kSbnz5GjSGZTgoXkhREdX",
  "key9": "2UGib9WjE6BEa3PREHdVEQvs8r9sHPajdh653orTqLFjmFoAZoHLRqJdZCcj5pj1upPeSWgBqAtAux22AH1ZMv2d",
  "key10": "4zttwCkMNLWQe1uzoeuwRwNgvUvpvgX4Yii9AgUPoqfnenChaCsuaSeMBJQqARyhphy16mR6QnBYxWLstDU7GfPh",
  "key11": "5unvnsgGQ8SowhK3L6oLiUUfapyCufNmA2gE4XFWpJ8UFb1wDyfy37en82xHxsKTE2BGfZtPSrctuFLDm2w55mNy",
  "key12": "4J1BiFCbXPGQHbrut2xsebGXGc4FMftd31YmiL9rnHr2ouQS8s9dXKWTm8bpoSjCcPb6rj6heNpU8r8rJgVYMkqV",
  "key13": "5p3nwNkPwvA4FS3epqxtNgdKJjTWv4zTLUYrQmZfrd3mgTkXXE2tvCCE2U6DW392sKVuTHwrYgveKr3xTWoVvkYp",
  "key14": "dTnQSNvtbGhWCsLQxarFXFesuhVVVdTxkeMqTumVXeDzzzghtkv7Bcy2XWqiob98vzYkon7fMmW3LnpwpTzqCnw",
  "key15": "64JztgYcgT8XspcWRcaV27mTjjD7DTYX19kToWBCLL7LsAgbmScxAPjjXMHcRhzdrUNr65bnV8dwjerLrvqhGw7j",
  "key16": "4KeGEr6VSLTVWCDaL55SEkvoNAXXf51WGKzWDM8S1S1TwTNkRwJ6LFNCqjz9a1ZCiZXdxiSNN6vFUcQ1g2wBmkty",
  "key17": "fzUWWhjH2vW6P9ZGH5ZqwEyu1qSXkUVmg3DKQXzUnQQ4ZcsPgAuYNKPMtbbVpjWBHTFmDkguvXWm5guThySrU99",
  "key18": "2p5PyknhhE7iexpVpTcWCCSqVxPkPDyK9wwxoW4suHPAqM3YZ7w2eAfrS4f9q1aqVCerb4LTpZCEw6u93K3YrYfA",
  "key19": "4Fs7fVrdrDhHw6oKtY5ttL4NFxJWkQigKVs8kQzUYub544poABuZUJ4ftEHnafJfdAqJvCBaF9AASz2W4LnEWWeh",
  "key20": "eMY7he364iiBcUkGdKrbmvSwid6WCahj6MpAEANVX68jcs73avDuVJfGSB7CZWDWZdDfamCvtn6y3qHHivBV9fh",
  "key21": "Pn8w19QgzfNHWKB4LG1zXV1oLBcRkm8nEbVNMXme74UcK5sZMcP2X7jtQHbvrhgp9JW4YgsFVFt9eM2S2K61WDH",
  "key22": "5iAC86irhgQRWWB5W6UonndCoeUQLKTRUKJYmBcxNBqAjBf5LowKXjwEPFSWSBNniTGcgKEoj3mKEjvmNz23KK4g",
  "key23": "2GDtsckHkwWKEU5V7k1iRxBjCpKtzyKx9ZTp1DnKdEEcU3ekgeZW2aeBUfCUBFvU9TnBALcMm3RMLYDB7EA7apu8",
  "key24": "2Zruy11KRN73riXGTRxmxhoCSZaTfwFgv91UXarmX6K6xokvqpQ5BhTEa4pLdZkBs3jKdZnP4ugnHAp4VyfJ6SoU",
  "key25": "4MC1oJReLBPWEXHkEng6RpXxWR3EpLRQ3tXDWL1T3xC8wmLHGR63yZYfm6kEJgCBpSuKLkavvc5LM3U6uty66qZS",
  "key26": "n2k62VhfqBjgGKKgumBAp9GhCrLbXdeG1qYB2rjvwvm6phCWvhpE2acuhUF7AjfYMn5Piq4TUEex2uGF8dq1PBp",
  "key27": "4uC25UgEWzkVe6KaVEbaU3CPWKQTrcuc7Q5DFcj2iwzCpSy8zyzmUAbJYQgK9GW3V2tLddZpVJTVUr3qmb76aVHu",
  "key28": "2ApgjVWDmyUCKJvZcCwvLaFQg2ivb9suF9hbiAyKEafaRUHNRZcQm888YBT7MpzSuuyJfX9qU9wvxgcZm1neMksB",
  "key29": "qgvGwuyS3sVAP6kV5SnCHgVqeCcqZSUjz3gGqKMkEJCweoMRW6MyaN9W3CnSmtPH7BEhbGgKfPssfhc9nPWT91f",
  "key30": "63edoxQ4CmN5TwjETbimV79imYBBoujPWhVq5oKe8qHJKyRdE1ATrKSMDezJwUGwVL1HUxDd6cpD4LqxVvpoTBj7",
  "key31": "28zwnKumugo3cHkVH8DPMmCNWxGTUmaF6REb91jCjSHTvcJAMZfWE3tCD3L5Y1w9QAXTxNrTEwYFndCcecDd7dxS",
  "key32": "5zqMWZ3ECbVJP2YYdo9tKJWFUz6dK51v7yS2xHEu8CYSBheHLbuXzqUGwTeZJRLrhg8sSHYTRDNY5Dm8kKkM4H9k",
  "key33": "5BGCBDo283qdeRTRgELbKPvP2mJN5fMjaHGCZKDcM2cb3c35vvhUjbL9uzsyGxZR2CDXZFmnV3yqoSHVWt9awZJe",
  "key34": "2Py9hgX968ts36pVuoyJ9Dpek8boCHtXfJx5XvNFn55YJwYJ8fb1eFnqpnHKF3rbaEUdpDNz9iqoGu8m9Zubc2LU",
  "key35": "29X5EQ6rFmWAVmqnAiFoxULCwzpkX6vg7Nu83dupNFWLtUJtdZfSFK6kmwz5sH1Ayk73gtNNNangaCeSqcJXcMjo",
  "key36": "564pAb6WpJAxsM4Nunc2S7QppQskBVfg9WxL9oLwLwWTTV8WRVuQnM4redo1ejAp3iLXDEhfx2uh9gTcfwki2DP7",
  "key37": "62CTTbGMnVD1xnnv88gQNr9JszeFpRDgHkUFszoQwBrnjJA5QunmDjKdsDuysGTMYo59K8nRHwzJfrbe4swq9UGd",
  "key38": "56D4bengXwhw6hgnuo8S2Vw6RWKwUWkXJdA36bm4BPbCFcPntmrTrXnsFvuXW9uews1uBst9eZi6LSXyA5uPuso"
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
