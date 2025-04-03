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
    "QZ5EPZupXtQSR5jayYf3SvfkWMnpEupakwFwdV9hQwTkrxn4GbLaLYZRYqsEKjEWfhLdD3YTMmMxpgAYHB3ZhKv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wzNx6Kd2a6XNcta9wjjcXAEseQRMvAiEQ51ZWMf9VossveaNWoM4QBxjSgc4LXeyKarL1xC4J8r8UKmNz5UzysN",
  "key1": "dZ87qippJcRBGv5RcrqmmXoRV5pvZpcHf3G7uukV3qNyESVmVzqWkEiSgSUXAqBvrJb3FNdVx436u6m9eBi9kCi",
  "key2": "2qMRyhdNTDbNZoPwVTqTsXqtLPwgwwjkdDHMkdk1dakLaVoER2juj6EUHTon2VFn7ax2j365Z5yNDpgt94EAknbL",
  "key3": "2XjVfVJVeymaNuDu2LEpqXfayHqYqvWkXfUErswQverZLYsZQC6hJe4FFvMDxhkSL7QyHrWhbDKAQbMxvNsYBdqP",
  "key4": "3ehDtJFfEUnFQLjcgXuLSAmiTkmxggAPwt1zXFJHkWQDVVMfnmTAN4SstVug5ajXcCNfkcaR51DUYtvCoQLiSNuq",
  "key5": "21KrQMmwfYRJhocnbPuuf5jEPtWkcX9uTRUUKoLu1qmCcdEuJqjX7GMC7bGerCVSnrzTCeP849hpJHdt3y6uXij8",
  "key6": "3WsysetKj915Dg3iQrA2CtLDVtWko6MGdevfLHwSui2vNos8TDfogXga7x4S9GH4Z4Ua6p1HQCqpKNkabRD9jiXJ",
  "key7": "Dm2aChHjtoHJCdmudT88BKdTeT5VptMYx7uCyJqatvyAdwMCWw6jLVD6X6a8a65xfkJHQLB82Un8AqCZtgr45gv",
  "key8": "4My7kFv8HCceBjqEtUzVr2cp5xyS5MATzgXERVuJXHCrB5QrVU9rnU2eaZeX6N8bzU1EjEW9EZTSMwr5yyGDShUe",
  "key9": "4V1Y8ZTWRH2nP9FpzuAgGPhz18MKSSfAcy6wsEtzVfQ3o9HHenP1pbzqLLLeaNMcLGnTGY7jwxRmf7WZqWPw9Y4r",
  "key10": "3zbyevvBVpAj3Q7Ybz5ihNK7qv1u4tn7cxgQnzEpXK12mHnxpPaan6i8FJeiUKNpbtgWeFjGcGwxcuhpjvJBS998",
  "key11": "dm2ZD33HL444QPEcBGo29fkxUbwyJwnCSQ6HDgpQ6UjafevWdkQzHu1pLEWferdRVNpCqyUQrSe9fsvXkJnnjzW",
  "key12": "2ZJxBkc8a9HVD9ZptGZM4qvYb2An3EteLWSZYWUq7ekRhgBy276QzygGi7G9dwxwo3Kka3h2ByA4E8hWLqtyVzr9",
  "key13": "4cLHNVtBNCxdiJLUmzZhN1F3s7gQwXaXDbbpCczAQqmi4AJgLCbqAbTVKKRAC4d4rc3ATwikGd2iJ52FtChmpNLZ",
  "key14": "XjP66XJBpoywSwpwu29VE7fCqoi8rspAc8LSY5Anhh1oz1R2GWh3U21CDi65QAFa1ZR2xTocKPDvLTBumrWSVE9",
  "key15": "42E9hkSY7HEeesuxybWAw2nJhDLEuVUkt7shem8vyxqegNKUZWdGShftZLBxugDqx6KmrBhYgWpyPquqnchM77Wv",
  "key16": "9oAUTs8RtwdLTENiCP7CzKWmz2gtUK6sRigUdhaDGvpD8riz69bUsMmahLDiqx8ZykjStsA2pMtnhwKPEsEZfHe",
  "key17": "4kbADs2U9etpwKXtahm4htmq1Gq8wfnLEsyw3q1kP9zKcjkpuoFdBxJcuNo9PW5PpNyGGcLQtrR5yp5j9fsFaF6t",
  "key18": "5soyz9188gok9ds38Wu5EbXTVFt9CUpWKn382M3dUbZYFvT7utb5j3HuC1ZoupC9LCphAaquAA3k7xjTx73ukFzh",
  "key19": "4ceyWWyL1ambQQisEKy5Lg7T9Ghun9WdpNbL17NWUPPhwFeZ4zDBr7MFzy83DWM9r6nphzW9zZmT59QhHggNj4SP",
  "key20": "2PZJNZQwCoBC1vu1drtswFiWW9BHfBTnKyCrAD8G8kE6r3jn2qpGdYAsQr1XjpjQ7UjwjeSB6YkeLp6Bpi31byzu",
  "key21": "5TRhaJELg98JN9UMenvnEcmDVw3jWiBfB7pqdRJeEBjW9PZvgCzP1KM4QE8JPz2qhM2EVBCJUq9gBwim54KTxC1V",
  "key22": "2kTEc32WRysHNDtNU3GAfjD5fzmqaHWAD6FGMBFAPmZNhYmp5F6aJEzu3F2Uj4fb223RruZWJfaoRjDS7w889rR5",
  "key23": "1UXiKdCboveCRiD91xuy5KuVri9gEX4BKDdvGJbW2PbX681NdVKwTfhi7gurJtbB6XzAyvB5LzWX8iBdP1FGzLr",
  "key24": "3f3SshWHDBiHcF98iTmQWQ6g1MxRGT7V3oS3jdS7TtzyWGPFQfJRF6Mk9zZAkCBscT6vsAvAyvM9vd6gE9JL1faY",
  "key25": "4DfQhGivhUZoVZB9rjiEbk8vyUuodxihhfg7jGMEnwgArnDakYq7zy7CutYpeuFM2GPf9ZMqygVC4z1iDWXLmFiW",
  "key26": "4yvUGxzbGy8EEEFqTyUY9DjF5SrUc4iFCfNMwYjQoftv1TrrqQASJtvY3ehaSBFGqiGk2ZWK28x2AgbuPA34FADb",
  "key27": "4bdyPUUTwDCHkrXFSL1vioJhKf5deypkHvwmsSz7udWvnH2ZR8vcypj59ySpspez4n7Y2NihZh3KyAURUNtN6gw2",
  "key28": "sBbwFg5aJiuhfJEPg21prRcNLLRiMpTjp4b6pyqUjb1kCXAyQSfPCmSRV6s2ZQzL9xCsPV1mZSNkbz1SXpstXQT",
  "key29": "4p2Pg863oYNyKiqSiqAJFRZnEYfLKWqX8BCTcHPLkN4qDbjnQqBxpKhizXPaUcKuF9oYMtVD8ii78Qdu7or1n9tG",
  "key30": "4ZtgP6JZnmehpFaj51eP5gGuaFhnzmryEG2VKcVBjhV8n9wMNTwSqsyEMoSFZTkGDBcNC38AiL1KgabA9ugZh8AE",
  "key31": "4HjcJ9pdsvjhSQ5wB3poN35mz8DvQ29tKDm3Er5zP6Wijx3NkDtQ93xRrAus8UuqRySWL22kwEbAZk3EUgxdTRs9",
  "key32": "LgvowJtaemBWmMonqie7WJuHPuyQp1do59mxcqeAZaiWz34888ZfRDPDm3baZZFyuoUm3NG9PfQrxepfLACUGF1",
  "key33": "4Az1pgiuot7bGqf7ySuojfaqfhbyaqKUKRgpFAnuqoeF9dxREn3NWeGZdwZ9A9j8ggqQMuVsEQNALqbkd9YJdS7E",
  "key34": "5QR7SEyM6yuggqKDFUvfRJQt9YbUq6QwYriw6o82dGrLm1zSyyxfeWszbe1NdYz7auQsw7PDAoJeoBKdtyovGZQh",
  "key35": "3PQirq6xpKRPkDESUntLWn6EoyKB3syMTb8cG7VGRJCwpaBCcHD3tQ65FwWErdNhpFr5Vgfi4AwrjQfHpCQoG66D",
  "key36": "58JLzEwrUNrHXZqbXBtvUqVSAbcukV8AuSszxRinCzucB5E1oudi67CcWosRZUPsh2KxJMviLPFMkPuYPGuHpHpN",
  "key37": "2RRviDW8HQAje7SHc8SBmFYdp2uJEEAwzo6pvDnoHx1CYwuBoufHWDoLMkgtxmm1tDcGLbSYPibS31vQ7wfZXrP",
  "key38": "47pXrwB19dvzNcG5k65FByRP5WHV6jbqfg8dXCy3e519yQzZAGJD32RAVn2K9TDBMmRv2rrAoGSTdxGqGnLm4ZGZ"
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
