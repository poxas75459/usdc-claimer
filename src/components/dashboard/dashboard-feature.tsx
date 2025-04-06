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
    "4GCNzao4VCMjiQs3Egn9hpF52X5yEjCup5ertuZKb9fJPFKFewApWCRpqKVS4A3HHQpxJ9FJucG4XzdzhQVXdwpY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hD9cjE2FAmiUVVYvRyZeR9cBk7tpBngTN9mVygoEbczCiqnfTQZBfHcxWxMdqCWyndrJSWv2tkk59unWu5h55kV",
  "key1": "2GNc43bmhxmwQmaYdYbzw1YfKUrhkyWdSzH1wk32KFXGK7QTwaoBHZhYDcRR8JBLiWgQuNZqhd4GJNAQGVnuyHEL",
  "key2": "2d73LnLM6SCZhpRJ3SLqoN4kcxUEi7Z5tBeBTUUfss4rezomg3VJewRovrmynGcyzfP5BVRVX7eKVhuAEC6dN4Ah",
  "key3": "52hxis7qRMeqGmN2vweVpJGp3H9oQuxV35NSReiR98DT4omtXvwjL4gzsbq7HQrJ8n1Evq2QbPvZRQ8S3twTURdG",
  "key4": "62ENDV3evF6TC2CdN8wv4VWpYDNw7nNtjSAiJBPqBmHFfbuYbtvJCUdKJbjARhBobGYG1sGK9arvnbTAheUztHnB",
  "key5": "3zMhH9x4Gn7xRAL1X5899owSGSHjb4PNW1KnTp1AGGB1M1sufU392xvcNazVj714eZ8r345NpD58jmBqnoYASGDa",
  "key6": "wvkjxHMSh8gBmBBvHjtL5LqSBhtPz6h73VDU1RkhHxH4LrHc5FE1coftKi1aSjQWr14ei3TZ2HeDsWogFEzL2fh",
  "key7": "Xz4UC8ADjYNQn72rhBQmQit56j8naBHy5oSwo4CHiA2VeE7YvLtZH9FXjkT4Fiik41868AwqiNC4CYATbsGRtag",
  "key8": "TxrHJx2eZWHvoJ83a2DM9wrkk9fDPRJNH3aznuQvHBgn3eWBVnvSmKYXTX1aw8jJwyJjbL4aQVR6CtPjK5ZbbVy",
  "key9": "2wJf9zXXUTnMjfDWdS19U4k6nxxnFt4j7cWUWoXKJ25iETfwZzTgMZHrDFZjfV69W9FNbNYmUajXXupAvGG1seh7",
  "key10": "5jXyLHJJDStTLGZzqgzq67dto5mXbMR2tJacqTN9bKZZmfLpxMB7xbQD2zaUjsg9imTDtKZHo29YYk2w2D1rwk4S",
  "key11": "2QejEz4MAU2T7PnsDXXuj93M1jhHwcf52KwGX8GiGFHHgbqB6hckPTbRvhQavVqRVVbhjUTdFeZNNtN6fbQazWky",
  "key12": "47BgYSYgP5jiPHZCcVPcSiWuFNpEm7f9TCYYCnGi3Ux9mPA8jvHpgjkh1R9HAvubg48RvxGphtgBin87MzwSP5BS",
  "key13": "2jcv6s2AfmzzvwRBfmywN9gYmbjy2ZULig3Kw3AStFapFKRpPjwY2E9u5iF95vRV3TK7a7atdeYqDSZefSaaeUZd",
  "key14": "Zc6zRx7uAAFXxjVU4qjZacxWDRFxKD2c8xU21efaYAuCxSetdYdDpJHGnN3QMkvoXCUmzRquLoFKSnWVZZohNwU",
  "key15": "62G5sbCqrwYUUKbgnNfZHAG4cPxD1uG6BN2wzvSPioCXr78GnnysfTmMhdD5jRBAe7wbe9dvkDMG3dRqMNxQKFgv",
  "key16": "5HnA6MCb5VUJeacy7R6nTintkgYUyRPzopEMxCKjBi7ReCTaVuxgpyep2HJXxCxL4HeD68S3DHi3tEV5amNxDcX5",
  "key17": "5LorSRmE2d8fgT6JtdK7JcwZcqZsv54bFAHcgtYvtGtfD8itEH3bG6sbDzoUvxQxmDBodocCCTPptbDaboZoYZhd",
  "key18": "Y6i72QAQSHZBWexZFTkD6dPNh1kyAafWDAcJMNH3cEzkMo9bjnik4npi6YrCTREUyHZCW1qJXauG1F83ckUbqys",
  "key19": "3SuZndJoeDgkVHmSh2HPGWCPkbeMpFydSK5RSiRUtuHVAThsFejD7pM89uKCKNox2acjAmLHj1ugw8VV6S1KN3G4",
  "key20": "3CHdm43XDkW7QLoQ7kuiWHhaeLjWstUgnMzZngUyv7qcebZQ7ychdTxLd9d1sEoSPX4g8DYW935SvhPXGMbGhMQC",
  "key21": "3MUNiCxqFkcNgHXmYHAyssiJHx3rGXqpDA2ZoqLWiWBBaSS9hPFcTiFrAzuXthe73UeHfu2NpKugBgZ53Y4PmS2N",
  "key22": "5YnPdXyyNUFLZ9CkXWcyv4rBHg9Deqn8d8pQ8dj1rZ5j7WUR2aDNvK8YV8JqRjZxvd3HDbXWEf3YBQdDqnMBgiiP",
  "key23": "2yAz9owTtuWmahzc7yZ5URkXZGHYR1JX2N3gEnMzjwcNW5d2hyZvafEbzKmgyfyma6yHyp1BnXiaEp61aPmSTfMx",
  "key24": "419WZfqAJq1gjQFj9jjLKXdWfizKPm5Y6LtPEquHqpWstEAfYD3Lk6X5PsabXWNriDXv2qPXgXYZL1DBZXkXv6tG",
  "key25": "2cLFLFgNpfjNGML57FTWaXu3VyTnXpaWuUE1rxgA46dmtdwUH5rLMJi11HDtm8sozUdrattRwVAniQwq7nDQZW3A",
  "key26": "X4FmR2PxHmuPh1NgMq6yeaq2sJtbwH1kbqVt6qBi7HYx3jPQ1cSgNyVKPgQQQTvv6g7F1Zy2CG5scBkPk81mBxg",
  "key27": "52r8EJ6J5PcP4XUc7NLbpCkvv6QEpUdzEJqUxdcCyepy8BMrYas63e8VbqXERZrotRwgqx8r7Z7Z2EbLNy1vehmE",
  "key28": "QFrUJ5evsZeGFxqC4gkv258zuCfgJTsSqzfZ3PnyYhe2RCvH6mNxCWyeGzySJxCLAPW2HpNZN8m4Nimqa1iM7EM",
  "key29": "293Ro5Ahg8FbANQqwsq7iw8Re2UkSCa6W61CaKWbYB3MJiAL3cw9Mgnfg672zvZNGtUhBmZtUGFdJ9iqSCvWe9Gw",
  "key30": "5BgZSKLnPtFXY6EPQZo5FcTgNEyZi1mYp62nUuTipDqEpKxYehymYdKBhrn9XSYArW5wZcKkGYSoiLaCVboAeexS",
  "key31": "2ch8ed1j5YJ9H4D6iDUEvrP4nEq5w24vdhrW6ds8fyyeqZ9DCGGFGxVfvfpMNYzju8thkCSwgQgFjqtf3BeMWC6e",
  "key32": "2pk1K3BNEjFHKJDKpm2KpLCBjfuAgseU76vbfNb7wJ4mGzgT9M9Eo1zpzNQD6VFao2Ze5bd4CetW1XxrQFBYrwRD",
  "key33": "5CsSaorJns53n8uFjVx21QYkMHRN8vZLD4QRU8wqcaUyQwwzq8VeTejdSYDZf9EtCmmmBT8Yzt4qqv5XR1nkQCcm",
  "key34": "3zbXu8sqraP1ntnSYdXtaYqG9jzLqbaq3z75auEYXF1yExQir28UuGKZPqMCDmDDKfAAGaptCNe587uCev6fQLb5",
  "key35": "3uLzzBdk7ERnCLsCAAkHXoHXcvZxT6KkzEcYnDDGB7LyWTdwZaGgyYLLREAofa3KYxX465HAwsyiausGRD2dNaCR",
  "key36": "3AFPYidDDMFzMHarnCqCSJbWhscnRgrzmrsJvSQJELSgzELraVHSJR8rSS38UCD25YhGwADR7mnENp8kamXjSJHL",
  "key37": "kjXm2Wv9nfeWXeTKhURd475Dw7AhUZUvi4RMdrTqxFUar6vo2mUjQ1jrjC7su7qCt9riix3D6zUSfp4eFm5fVMh",
  "key38": "4Loo5NvwPaDD2Fc4Hkb9Ta5NLtnYJ8MbyGdAtr6Qj1PpHsFBgJyoq16b8Uzp2b1g9WQWmCPRVfF61mpGWQC9AXk3",
  "key39": "doB593eqgUUHdVnP39QEBBhHUhYR4pmB1ZieH7PymYMPpmk1qgGM9eM3qErS1roH4KhQTNeN4UZvEV8rT1coWDB",
  "key40": "5UhQLPqYnPYbxd5G9QzQfV5s1EU95EDc5NXXheNn8NPgvGQUntSmh3zJXCmUmWt61S3Gv4C7KPMNoS7hNDXHFG6G",
  "key41": "JCT6CjxjqkJx4H6ga4nwfSx8A4uJ5hKwutoks8nPhtiM8GnRgszbjksTihnPu4F1QqTiZf47rEr7Hs4Q9sma4Bh"
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
