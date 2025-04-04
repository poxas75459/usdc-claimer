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
    "4soGXeArvNv3guH8ogkB53yQCQVPNcEpRs5skFSkGTu3mq8421xkcfY3YFgnXQ6RSTtPW6ipbjbmaQddW39JoAHu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59i5HKArTtaVdfpCXVx2mriQdnDKTtErPz4cAxtmaq1pYsqUSBFAiiLZvsL2z49nuzNgCQuGJCRt85BMbxTqCRHk",
  "key1": "5WRDmQvv9ZaW6cJtbQsrJA2YWquqFUWpQJyjs5TpWcevRpyCWzyPYMvV7E7BbS61c8wJewEfMxZ8rQmPRKWcq8QL",
  "key2": "4nneNhLU6GVNNo1fyScghf6PpmFGrn3V1LPnGGHDfdJJdG2aGZuGLPuD37WWEQ3YCUonmn2vqViYVtRUacs9F9bf",
  "key3": "6PUmxQnsM58gdEs3JVhdG6WSY6wjUxLVqy2rpcwHhA6Qwh3wdwy4fwsqACrUfktthR6sy5dUNuiA1RyUkhQPX3g",
  "key4": "5ubJuqN1MQGBbXwZufp8oCKXKAXtcdrLwPJb1QHDiajmCMJSWgpYo1hJ4BQDpc8FgqP27g1NgzY9M1LAS5ZeYV9i",
  "key5": "3gkhuyHFKCfFUEp5DWaXQCXZQvnuSkYHzttRi7minsBJpVtc4AKbTUy9njVCixfyH71FTE2W9UUM2MEMjYmbHgqk",
  "key6": "2Kc6BPKCAUsP9DYjZUEFJqNwXT5Gu42cRiHRPk1DLkCcaS2BYPkt3nzpv8w4CmNUw7WkFoXrKqkzbEyfkE4tEYZG",
  "key7": "tqzYR4tTZ9KYDiDbLtXfEqMY5EaSGGoEq9p2oxBxMXxmKhBek6CsVBD7iv8k52YrqmXNVKvvNmBvRM4SnLQWGbt",
  "key8": "2p1BXDLj2xExLhGfYLimAPj5YnnJ6yKa7H4ghaB3Hzadh9s2BmmLLgKE37nhWE5qaWVmQ243vxbcZcgFQRvTS8b3",
  "key9": "2W3U1qXwjrDGvnwm3TA3q4do8yWPkrENhn6ms9V2oNaJgJsQfQbZT3hYJJhDcboAouQ3EWthPUPZo4rk9M3QHT5k",
  "key10": "4avRWcqwU6czR7iMwnf6n57ohGeku7A9sSYcQFJZAqWLeyKLfcHfjthR9TC3zQajJCnZjQFWu8zrjX2F7bZXDE6M",
  "key11": "5opPRDxAjhWFgXt33hbA5T5pTnfpNy6aabpftMBNPgegfcLq1YJJ62VqYiiybDY8nXXX2yPn7mX8TErdYh9EBycu",
  "key12": "q2c4iz2E5q9f7KeZGnzj7UuLoT3n9UNFzaYCwwu9cZF3sWaJUAWD1q1ygK66ax96qxhKiJ24bJ9vA4AJvBeWcBv",
  "key13": "5EToB8zm9XTH8GNC9FY8pGhC6nbPWv7hQjhRW6Sg8MJen6bozC3VVGv5szNg2c9Xi3Fx14ekJyoZN6HuiSmw4tsq",
  "key14": "Kei9HLWMRCVM8eTCkzkRFKyyAqxKxJjymnKQ3LoehXdY1fpx2a7fH3oJLS8uWBATToJpoyvZTwwuqXbriQYAVf1",
  "key15": "2tb1NFq4dieLnhj1bsFZq7qShStqcuhTE5SiNT4FZd8uvrs7unA9fK8PSbUX1aorifH1EVT1dmsBwkHbwrNQxk9t",
  "key16": "UGZ1JYaRTpUQVbxobkzj3sjnf3KBTBrdgExSRRzU1rkRB3eFTmuN7sdXKmveQagmJas14JR923jkhZ1YG1eYk5B",
  "key17": "tAJURmw9UYExDTRNLXMfNsvNGXqvxpaVmNMex71EjsyZLnpd3VGbKGiSGgoNPaqMSYDmDfpSZ6o6aTascArwQqs",
  "key18": "4zi13fUmS5zCDxjbprXf4jCVdAEwbYRFQVBTsfw4joxHorH7CUaNpkMbwMDY6x2WzyXzu8MntRY1QfBW1c65zXJ9",
  "key19": "2iY61Py7HsvYgf1Nc5mri43qhrfLaB2hmjX3YzYZP1bRDEKAmk8fMr4C1ioEuqDP4nFNeH7fkhoYC82mhJcxQbPV",
  "key20": "4dt2Cv1ptT7SsLfzMM4prjX7fBLTBJGV6HtecSiVzMhgXp8iki1uCXHHj16TS2jbLW41dmB6QWs26hjgtSqDngBu",
  "key21": "5K9dchfze6LWhL5CXcn8mSs65ULoNvzgiZtTkTrXk3Sfgi3t52XWdHE2HB1cCH98Qxd8EHzMqGgcZCyNXcRcRJCD",
  "key22": "2iauucEz6qFuvmrSGQttM2pzvF4f7hKg4YtXJAGSZe7s5e2LGnxcAiAmPfb2C3idoLafnqtC6jDPNw7PfCZj7DMS",
  "key23": "6fXsdYeAHveHumMZgYYvvkZWySFG91Dp1CQMxRJfYbM8RAybsXejYg7cH2Qsg4mjZuWzfYxLrjELSJhB9wFcnGW",
  "key24": "4R1i1DgZBjDvVgt8JxcVy7C8KWEkPPjyrqMw5g3mrnRYT5fjU9Mofp5rRPLNBSjJtL3iYgqkNiSxKj9veLwNVG9v",
  "key25": "nMZETLiiWwhKbYqDMuvKNztmZSfts2yVvke7dcQCzvj5iu4GM5k3YtYekqRXeaqJzngx8iVu3UprBxq2wMkC4Ye",
  "key26": "3zpQZPosVPAkXheRPPpPWxEBGQQhCoUcuk8fbRL1KcaDstUsrd6LjsgzLUqxwAG3RUUcqnNYWyBQBy6Z1BYhQo6x",
  "key27": "G93s81ZYr7EifaPDrseyb6cdZhpWnsmXrE7PxfH53UVTs3ZtWSBcVDhNYan2nyzNJTHWsoRWd1LAaTqB7Rx9qtp",
  "key28": "AReDz24xUiNktUWhvDmsTr7j9SVgqzZKtnHJndmQm6Zb9NJo4YUVm6K1kj8SUbRh78Xh52cjKPqCdSpZENhB4QJ",
  "key29": "8YFyxvG7NgSMonKcfWatySa56cVTAk2M1T4pqmbUvLcCMdwszneaHzPuc813we11HwWeLkvjCLZbsb9pdu3FucY",
  "key30": "MsWzyaQbsaY8EjvZMA3LTetJxETVjfWGugnadtKPuB3KUCBVZadGC9go4VX5ptBADGoMTJba2UW5wgR5BKtV84w",
  "key31": "2dXdnuainitzDCFyq7HvepfJvR5wt1CpAqDY3NKUAECMMjf7HDmyJhEAFZvJZDDhsQnyfmEvLi5Fmn5vAFkQ4WEH",
  "key32": "3mMXfaAFdoQCE8vFvmChPNULpJfo2mMmhVHdGZzbSXFCU3pAnzqaaTYwDdHuqVAarFhCAbPzh9Um8TRmUn7nGra2",
  "key33": "57hb25XySfHfjekcuhKqmo5rkuebZio9rkQdS2Yo3TNuporQy6qWbaHYfyduADHVWm2ZmBVjFHme9TioURScPGdq",
  "key34": "vGCssurMr3oUAn6FoQerZ8BJNGYqUpCYt9cpC3icxx5G1KNN2Bv8dUoBScTCndEZNU8TL2Rc2pfRVybt5BkKiir",
  "key35": "3fiQbHUVh9nrdih4a3odkuJmJaEZvX99BkPxiq2FAUHNv4iartqTYp8Z8YmmJNJbNPqk9Qin6nLPaPAzq5znJv4g"
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
