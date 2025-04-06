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
    "24e4PmgkM1mzz5fdw4iNJE2WG7J3WCku7XMZzDdiNZG76ifM7cT1YhQLo29cCdu28L1PVPerhxkRbdE3yuRiFZsi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WTgdN6xHnYPQ7XqR7qHyx6XmF4eoSdXeJawD9mSwqKPvYd4WPo1m7XKaM339rbSUvvfxMfwNAbt67FKAyP1X6yZ",
  "key1": "318AH9UDLPstJk8oLnfUUUM7QjaaFsBtTEGQBeMfNYLvhBNM7cdepCXGne5cLJRX4eqmc5XCSg1rqFpnCc5uuDvP",
  "key2": "gD9y1AtkRd1LGz4rsEnxbaJ5DB75DXYqvW3gpwXWijtk6i4QZL75eZt4oANbvjqBTHTjmEARykRLHPZYoKJi2Db",
  "key3": "2ec1tvzBAchExDMCGnLENL7ArbaYQk2rc2eVfcG1egqzXg6P1urnN76cNG6YAxRsSmGMbnegrdwtwZGRT3Cp9npf",
  "key4": "5wU9aPBXwcqjvwgcCbmFsVce5eMXy38ti8sQjeH6NwdgnFF8k2NWKcEKQmMcCGQUW2DJqc72zDFSUJV4hVJiJExL",
  "key5": "57dtvN2rKJbHF2bWfU7TLxFKZioUmTerarx1rdw9FhHLLWaaiW59n69PNjsbUPmBk4pgfFhBt4iPDqffwiLwMgmK",
  "key6": "3VVFZhfJ97LkFyKa23jUtjPcHEcn9kjcJVoncj2LgCWBbkTsDokFPtZZG8EhMJAwuykxkPSd7xJjP8ZukGGHxUeb",
  "key7": "5aYopgjasJmKsQ5FmYCRJ75npRGiqTfB94Wuat37qdVLZHhpjc6m4fS1WNMgaNGhDB5gAaFQ3a236EpbiA9gXRWS",
  "key8": "qVXPmZ4kAZ68yasWsB3RL1Cd3Dr5q4oAsd8FKqc9D7Ev6kt72zNuY94vyYruUABrZMUbSKMNcVy7gvjwYyx2ALZ",
  "key9": "2oZbRAFR8S1VDRkW23qoTnid27TDGhFSBT9RtEVu87TtLMMoUFNmZvpF8YyW9DAKktrxEa52FUdd4VQYciZkMjhb",
  "key10": "37Tsj36jbR4qR34pa59JX49sXWGsjVgjxNHnAevMpkHtbg9Pbv1jdhuqZLPWHkNvU3jBEq3Y6EZpveCaBzvAyNBn",
  "key11": "hcT7nDjf62g95EAUd6rSATEV8mrXDvnYtBbi2fvMac1VnrLLwMWayPyjvWgbMm79JmuFqGeofVCHuwwAx4rJSM7",
  "key12": "5qj8SZfNPawAemyNxVB8WoxCh44JQzkeUYk6znp4662vZnM1SU4Ws3UMvRaytvgV1ZxRtFyNMvdaKPYhqTcEX9aR",
  "key13": "3CWrD4bRReaUsYWiRQoQgoNaebQLtYMAovnWV7FrBFJK1ZARHDi9ykUpVe9vauMoVRcFh9PL2G8sbpUEb5294y5v",
  "key14": "3A1HFmuPjfMJaNgtaNwFtUuFfR86w5fbc8NhmpMA5fxkxK2gGfMUNp54reWrfNdm868xw8sPbtbyiZoaXg5NBcZq",
  "key15": "2n53XHRoGozSszuYn52PSifKuLdjASWfkBDcAX4GK4rdrf3KjhkNX2iykEjoUBjS2PMcEcxWmQPh2ngt86B2wpXs",
  "key16": "4MciGPtTvJ4ivtYAEHZYvs9LiVG91wmcE7ey3rkvb1RyKtm5toRoQNJhTjrm5D4Ms81AoGMFnWfh8UDTdJoBuFQA",
  "key17": "2xqbVoTXGAFTfXkcniKsaUr4y32rSPqz6CHv34rhQc2X4Fe7jfDgWzXxRwJjKSmA1b2GaFgGnkuXPy7wccS4sxxo",
  "key18": "5VYN2SKk1sa31GYbziQnVzHa9pq9rwJXkatJ29vBhZ7o1VLk36NmRaxzZTQMApSqEjwwr2ngMijt6C6yrZaGmyK4",
  "key19": "np5X1K2CuCrB8hnLMLAzf3Z7GB3rtAQRME9x3dRxHYbt8VBAkzM4i14HLLepFXvNS8HMNrgEMF7F4BTa4nGYx4r",
  "key20": "2rumUkocGpX1vQz1W6jcrziFkPFNuFZzFtGVHqJvVj9tSmGptSBU4ZKn3Yj7uixqfDMB1C4yUM2vMPzZHz1kUD8B",
  "key21": "3Eecih19fVdunFLJWzj68rqLVHx1KmzxBZtjf7sgjsniBuXZA8ML5sWuYEVWqP5993ZnaB87UGxfbe4nkhYvQNGX",
  "key22": "58KaUTcU38ayKZCpu9xNoikRcT292x7fdtaZUH1Fv5nas7EeERrMoHyoMJdh2QNqpgoTh9beHJeQRtNkZbJUzaM6",
  "key23": "2mdPQMBhWtbgJ6yCoj9m9pQ8o7UjPEtGYoTViHZXJXztyDc3Fc5rWYCQoH57EGuaUnnTizBYnyUBCZtnQRa8cF8v",
  "key24": "5YDXBrgFKZDDGheWJYSCySgDx8a1VxktRueWueQtxnaEixB8cqwssHCxkerqGvFRktDRJ8VcMK1pCXfiKLjHQisy",
  "key25": "3StmxfgcbuRTA2EUbcbFAVdGLp1LhdgYWteRc1MvfupXmc465TqATpGHCmzNLXsPMncem4W2Suv2XBovVa2uz6qf",
  "key26": "3mF5AR94JWER7k4SpnoE4L5k69BWzsyDEEG99rkRisCAQziFX9gJL9ADehWgV7bKqyEJZVKX9vUKvem6yaTfkrVX",
  "key27": "5tMTjYXSEjhWdFLd58pg9NJ9yX1TtPS2F5SnPy4HbFTLrzfqGiBYQcZvQafiiynoJ9jVp9HSPF7jkp7EkpiGDkH1",
  "key28": "3wmD2KBGeUvfhccxCgLGghDZhtyzXMrBSz1qLeX9uT7xoSvDFfDa2wz1yATyg7VNyhos7t24hLzCPb427gF2HbMm",
  "key29": "3skL7DLrm3gyXUjeVT7Hph6kQV2TFgFJsrhTtDLAZ8xhy7cBd4QjFaq53uTnzJyF7izr1vijTSjt9HdCT9kWvcoQ"
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
