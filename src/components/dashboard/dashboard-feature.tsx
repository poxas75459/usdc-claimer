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
    "5tkxBk4nKHM9ETq17B5MbqcrCfR2iHJ194G4AenuRPumKocuDFuBWLnArm2Lrt21PvpB7Nns2jN2WHPr8mSdnamg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m7ywdCyKw8pETRjjXCFUaqmGuRG1NHp3NaYFUcHioRHtRrfN88zjvRdf7Fcqwqb87kQjE7HZodKaG1x9SGk4Usr",
  "key1": "wF5AdAKwoPkuDNMEzVNCiZUFsXrTDgNe9L2hNgStpCzRHyFqFW8UhH4h7WU8wo99DT8Ae6EymJt6a7JvqeWhCfU",
  "key2": "qJn2MiMQSQ8NXkG8xSVbioGjvFz69DL2JjvLLAyzjHdjcpEf8pVVZydRcRcB1eUMSCLxnm41PRczaZ7t3xgTqnD",
  "key3": "MEf2t8RJzT2bxPgmbegC7vAUFLqNgDDAVqtZTcnPwicF3gS5VraZQTiHKzFHT5uKQCE7abRBXhT6mW6DVwDgz3t",
  "key4": "33gCHXStSEws28izbYq4j3JhomVMJXE5KEgbFFzN41te5tMPwbpuEMqfpb4osudDSWv1oxvAxbijSjBAyUagAa3R",
  "key5": "4WPTTwKW136X3C2ZKxxk9ZbYf3L1EaUkrGJtseRokSztLmApcAb9EXC9zPHNpZWiYzYkLbcnE2mxpVw2DFj9Lj5m",
  "key6": "5bmbNVJ8bK9GHQdv5njtcDTQW4TpNa7UP2MLCVVXbgHkqkMSxrkahhatwGBbKv9g77z2DBUwgyw3spfW2moKtudf",
  "key7": "StpXFT97FtVV2vgLZnsNXG6TXUpidsQUS3fGUgKa9hS7qEmpCpEG3W3xVz1XZQGrzArPJekpzqpGKeidEHuAheu",
  "key8": "4BCi7pWuiH5UJ6cLcjT7XgpXSULGHNjcHDt2RVBrYgPrpTjvXh8SuX7HFX6LDnqUmn8CRxSQuPFux6rpvUQD1Nsx",
  "key9": "51MMFuji7k5EfuFHhhVAdhRfkCZ3vcfyEShzQ9egvvbLUNTiVntPYRujd9yDG8zLdKPjeyKdJhGvbJgt5VB1CPXw",
  "key10": "3Kj3eBneb77WubQZBajnbAXLjA1o3bbVGT6GMfYbK5Pmv7JuVFFMKW5eqJvepMobEFSounTYrt7sBzULy1BhdKem",
  "key11": "4eTZvJ9dzvU5ZbMR8FRrzZicycDyEMqX8P9jPdhUJ5V53dcCtJDHFDZKA25WwdgN4UmLP3DKniTTVnyCAUvhXh2n",
  "key12": "4ZLLKszFz7XFos2mt1KPo76UGRK7iNYegp3cosrg6yfdc3yn6PuLjJU3xwg6Hctg5EG7KwV1PkvtQ8TR7VMMA9PP",
  "key13": "21CCRAKwgs89JADMTeST3mSKMHwPjyv7oJ1FtwMUTCT7Q2DquFpAi3xwZoLULjgAGgrRe3P1HF9jEG43wAbhiH8e",
  "key14": "4CxVx9rhmZdsgY2RdzprhHvWFSM5XNZ9ECePz8KhvSfxFsqqNbAu6vPxa6ZsdX2jnfakRKjYo3X8DKQouDU8NPpY",
  "key15": "3CB83M622xErbNPgLed3yLQQ33qVsREK3mxARdLXeYvuSCuaNM2EuVLFMNQtq8bC6Uo5iQ1PXMBSAgPBaNpY6MUS",
  "key16": "2y1fWVRePGXrcuxU9UuqE1kioSrLuFUA4hnSM4K8RyzV1Jj1QPanLPxFYiE7XFeu297KycDP6VnD8YXp36gUZSi4",
  "key17": "3ZfFSPagFhFM5uFaKjTV9EKx22cugTJZ8gcBLqxTVqaVQuf2vMNLeMT7SfmF8iM79ixC8sBLMid7KY4b2jKfHQJV",
  "key18": "66zFnJKaASRuxxgWHGcD3kHtfPEvUa4w8YdQQAqPTUG12pgHbZDCmCobbNzNp2FWyWYNmkfjy1sA9kCUuXv8g46f",
  "key19": "43gVvi9Km8rJiUqPKYvc8ZACYEaoc3Z9NmvGgb7djfMTB785wzo381oLHjeDeiL1auDBZ8ESceusq9UADD8cVA4S",
  "key20": "2ptdw3DB9r7UZnv3j2TK1F5yFVpy6xMLA4nkJhGz4hcFuwFZDrdakqU8bKaf4C19MCkpMqnE8gSmpfSB3u3Uh4GF",
  "key21": "2Dt15yJMKwwE5aK1jchLiVmpkDDZ3E4tEEfVtN8rqTrtF5eGZzKXg9WE7NXdMdZsE69mTFSPy3HcY9hBvqeLjXZ3",
  "key22": "2MKVAWbBbsuQYzFzJdx13SANJj2a7DMztPdzMbYbdDGd4huwgGrAoJdA8v4x56LeHEjK8zVjC6ajQHX55ockZ3iE",
  "key23": "2pxQ24fdLU8DYTUD1VqBaN6hqTQnJF3doqvPQzc9GPAjeD5STCxBmSWtmdMG5W5enLhLwKAj6XU6Hig61HedXbvm",
  "key24": "2iAqWM9KEPRZQGHkGVFYmkgfRmPx2ywETkuggZjzoymhG9KrJUrgzSLfyAnidxT8dTg2EcS4hHJVqdh6N1zL3VHN",
  "key25": "3BPvitrJWUyMCWsdHHWVGL8mPSc3ePzURXpLowS66yh7oPYfdmd2j8x9TfRsts7k91uzCs5yGx1Hhg9yMAzyLTL6",
  "key26": "ueUx3jYri7bAw94GjApqV2nBx7ryFJNynVugWoiAx3M23XWX287pcPAnP2QAbjV2jU2JHQFJkgkALQZmEjfS3vi",
  "key27": "3An9L67YD1NqySizm8NRPfyayxDabZwxNhHzoxsqwpRs6tpNz1MUfcw52PQQVhwU5P7fj4cf4QdH4jdF3mpfHatE",
  "key28": "4brnFG5TbiYMJUuFwFS6xPKaiCeAqygA6o5Rtp3Vzdh1D8TcPwxcuV2qGkhiTvkunhAxPhPNx8ySyHE8ikSsUdgE",
  "key29": "2FpXPKRruX2zCtp77K7Fv7FFYfgXvxZLau7USTViejszQG54AxAY1FkaWm1cTahYpLY4rGDRc8dTrWmajhp8ZNRy",
  "key30": "4QGpAmk4fU5fLTMcnaoPvQ5h6qEpjW84Vz1BiZ1ZHme21NYaRvp8LV25TWMvXNAMZYXjdvYfYC8TW2J6fQEQ7Xje",
  "key31": "4msaUZQegp5L6nV5z73sQMZJop3SBtKqfJxnr99D8yUz6oRq5DaHcivQrZcRMYYKKMi9WuyZTeQEgEu4J6VNpk2G",
  "key32": "5diGJgp5yWFohqCsqMuzfPC7Qh2uzj1aHxWL14ZLjzWsUycxPGhramoc9J4448nHnxJq33RmMTxQ4rqMjT9poZvL",
  "key33": "5hBG2RMtHSQGuH1pcFiFk1XApWSdnfZGmM3KiUeAinjrFnmBCid16EiJRZZWZ2eNYhZeSHCim5sH54ZbTbeuSSw2",
  "key34": "2nGJ7hkZ8S17cgM6ZAUN8aNLy9CoW6XCSPsCWfWq9tWM4NQCrk34CAbF4Gb9bu9meJbR8642WdLwaeArhejgCzK",
  "key35": "GsTpjNprVqRmXMDAB9XFpcr1gguoeLoBEstYo9RJUxoUfeoB9iJW2v6TTA6zJe8UyRgtTiLfyFsVjr6Sbryn6EW",
  "key36": "486jFUj7t95KY8X54EpSP2RMvQ962bpe6kAWyVVr3xMfGPL2qChgn4KMQjWQbieexp8eikv8wmUHyqM3TTrNcNUq",
  "key37": "4KVdADmtjjgREWy71rMVt31XzsW2GxU8jsHyjyTtpDKY9NgRtGpTPFBNysiZkaTB1ZdfCAT8TtFVaDyc84urcnmP",
  "key38": "pqTiRx42mF9L7Kuocc8sC7k7mrpjYme9DZNcTCMqaB2vevNh1s5UA3rfybRM5CSNgiAsmoUwDv8teNAVJL3KVtU"
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
