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
    "5NiMjwYpGoqqx6sfu28kWneNxjW2Z4HfnAMqXAecnmgR8PacZjSaqcoKUPuYh4zJwMJ9Qgjh9bZjY35iojmwFtVN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55eQhbSt4RVPfgCaMLYkUwr22QurxjvKs4rv4RnTXcQ7dB5vrzxT7K1ksKM3K8wbN8xMKPa8p4963xc7X8s9ffkK",
  "key1": "3abxmJnWnRxAxiFMCu9LLkuZdnW9M9ysqkUnGYUGsZm59bJ9m1NAnjDMwHi8jKALbPL8o2jrc1KhG9pPatM5KHCC",
  "key2": "JAnKDxfvePDUUm33JqUKMw8VYAKxoroEqkNv7cdxeBREzhbAcPpNLjhk2xN8Gtc2JputjGJQcPfPMAXt29ZyXdR",
  "key3": "2kXwoEKZtB5P6zygB97nfEAyLriaqbxPGhF4AEpK4SZCDwEF86uqKHgJV7CLysAu8dV1Y19ZffpNNu67K288VSST",
  "key4": "qphdByh3HfZcsjE4yqe8bd2qhZptqgN6vU7GLPZ36e5tMnioubd4B7R8kiNUJyYWP8nFMbD2Gi6x4nf9gTPguev",
  "key5": "45yUbcQrct7LunQthGc9pZXdrVvzBTB4DDmGUNFqRT9kPzZdFrbKzxwub1pRPmgMfFA1oFpXkZdLoigczEA54rzS",
  "key6": "3M5Ub9rCr6tSt2UfQGmPojdGAyHvQ6AcMY12GSPUrFDCYjtyRZe1D8g4jsTdVzt4VgtZmjRg2kr4L3YwV7EngfCV",
  "key7": "3bP4PjY1CzCgB5jkMjJv56xBWD7b7X5EUSB7JyrwaoeLWHCfU1KiyCYVqcZNT2KUpukSseTCXsL6SrexfT3UnNc1",
  "key8": "5mH4BCBxhEFSbbG2AvMdUi8z4nrpzG55N9SCQtS8DBVdQqLNh86raouTiwEX81fSsxHM1Y1maFZdftQCNHqTRipk",
  "key9": "4ApsGy58y1YJ47UBtmtbbbYX1HQ32fFEoCZpVnKKLbXtpM9sEg4ebWdrHJyadFRaUpNxg2jwPq7tdh1SdYg2mBfc",
  "key10": "kQA8ScJvpAgdaZUUZahsCy7hP6taQUui3wnwvUXrjWkg8jBjrn6qBp9cBaV6aqX9jCkNQpHfkDJpnLj8Awz42JX",
  "key11": "5XGnckMzKvwFbxxRuK6F6x2yYcDZhkbTp2mhfC4RGaKW6SB3NmerLskLUxXxMKhBZqZkP7b9j3wtP3cuPUbLCMsv",
  "key12": "54qxLkTf55uAPY2cQEqfPqoCqLrxMkJZYQmtvvLc5pdrspDhPt8pVcMFpcVCuramUb28QdhGhmEmhNua9cSk3MSh",
  "key13": "DqC2hakZ4xLV9SVyHGXXM4M7La9h2mdUZVUuDAjGdqT1uozyBCDk5ug5ZqjArbgVySgjN8HLBo7E9pqbu8T4XRy",
  "key14": "5v7wKbvhTFeyrWKAAPWPMvMnHHezatXR1ht21upxKFSKqMkkQD2cUtLQ6st5c2rXTh4ptxFy1cqNSrphPStt7wvE",
  "key15": "2U4oPi7geyhwpqD1BZAwPpFnBnvEAwpnFy2rX72cNZNo9y9m6u52hnBLsxyMaphNktQ1Ndxe9wDKognG4tCMF9UT",
  "key16": "5Ssd2erRpwYqyK1MN6hpHJrfHuFKvt3fXMpaCtjsYYHXMaCNAykKBMYREYkimVikvitGjEDDxyGic144s5otPj4L",
  "key17": "3b7S3qSQ2Pf56HWm7SsQ6yB8r7BXuYrWFCJwS7H82pEKygqEWi3MpNbmLYu6CMQRxHb6Qt15Zi8kDcNWDpFkuhoJ",
  "key18": "4jdGNuWLDzoS3nQrVwGkr1AVtSbjpAWWh4ZzLGR7Rr4vzTGdvKmUHr49tGbAPPCuD141yQPP2QitKUooX4Mezck7",
  "key19": "64nr2zLZG2VK9G23Acx55CKnByEaqTVUHjkDXCtXREFpFtiPTHU55BVd8BRRF1hqkuJVGwQ1NUQ1M4TLg6eKS2Uq",
  "key20": "4ZTp3g3nWj92FRhzEUPn536u9M42tS2kdkyU5XZ24ie7iMik3GyaH2Ygdkt4SjjZjWyXtmg4ACtukY5cxiP4S3Fo",
  "key21": "4iKvN3ysjc7HRzM3rdnuaH3VMzwgFB2aFaNeXfNevAhdAhnV45JPUyNRAaBn69CKnJninVVk2znmhonJocAM56qj",
  "key22": "2UtwNUviZ42D843JVWLibMqHYuguCVTQL931Yd1rAnySrhP6GMtGEtEEZ7c7bu6stRjUXc8MVScMNjckSvi9JmK2",
  "key23": "zgedY7DP7VpBzA8HAsEHEJtgdEoQoTNPar19V68T3wb6zFYM76gPYBLATApSBSYkqjJVf2o21k1MLtK7igFgk8K",
  "key24": "5Ymf3AJLiSzRJhMoLJQq4i3gvMotPqVKmD8W8Rsmhcw9H9qXV11rXdFBsEJetu4wnNfrjfQVWu5wFjvNJa7L9y2h",
  "key25": "2vtCm8fb8TY6CvWtiejNnpwh7hWZZJmYjPM4ewuisieUuZPVPcx8DvN3cJdVCM38jxQEtsTTZkZ5QFyEy2QPzsnp",
  "key26": "2EZsjw2ah5aQc5Mf3cR82e84eo4KeUdXEi3962cRPZeoruukdhKt67gtTRi47uPYd9kmwA7cfcswgX3KgXHPFhQU",
  "key27": "5jE4awtSbRygMvc5WzT9Q7hdiyej1Fby2X2dm52xUzxN12G6YsMDUg1smxUUT5pQULgFQMU4DsEh8CoxtzYf2NZ",
  "key28": "2wUB37APYw7ow8ATfq3mfL97muJxiTTamUvD2wT7xgHVccSALfcCJUb7UR6ssFpV9R98Ekw1qe9ctS4Sti6Ng4fv",
  "key29": "3n3fAQ2cfok64MiZCPFSRHQe4TRNVaF1Z1qnXnhPLHKSkBGryQZGtk15LBDiKFqpixSce4Jf7xa8VRTyUyu6hhmG",
  "key30": "2VK4jfVtd6ij5GRiqd8qFkTRz8P7Hy8ZMQ3jK8rA9BqHYtUDMMJbP2b6k3TT91MqwFiAMiZuHuYbdLMSFBpEAhds",
  "key31": "44KCuqqfADr7M7xguXJuvvS6PdtNWtmiKdxLFrCM7PmRYYozK4HkksSGzUheAoKsM5fMJpSsH9HFtzGjD6fyDfdJ",
  "key32": "5KaK7zfHBnR3vQhb5HtKF1MSMZE2dwguhG2CJSFPXXCEPEwkBNTeBeU8UEeMfAeJTnJCqsw3xbEsSJ4fk1NiKWMz",
  "key33": "irQNRkRxREnWb5MKdZhzwJ1NWxNu2E49AMCkS5JBC2VsJWFhoFjhu9FHTiCfdpjasAZRoLDTPsJjTuonGy9C7sZ",
  "key34": "4spodQJriAPnEQ2MkXaMXaZDBjMLZJkXTC18vvkPDDwTYkHQn1HAw4Hm8pBx56suNHaFHR62esJpAjrCHDRF6jFA",
  "key35": "5ZeamCShTp7bVabvoxA6A116xs5Eh9QuKRs5XJ888cXpXXJrkcPD6Q3VBZeetU2jVHebqbTnV1QGst4a468jH1So",
  "key36": "8jSduYqRPCwwWLn7k6Ho2vNefdgnDgWLkkTQSUm44HZYU2Yru9tBQzuCAWhg44PKNjDoKrK9tA5j58RWABGCdvH",
  "key37": "2PYkexKPcgJSvGKKyexzo3BxSxoyTSgxgHLUdERvSX5HpaW5EQiScWokYyg9tjWT2woDbHoqdi41AbEBVd6EFVs7",
  "key38": "8rCdWUQF8fyc64HNHC3FTMCvSmqNRjoEVswzkbk4ud2uvJ4Bh3Aaz3RQiY8wy1eECzq2FU6gAq3hjnE15JL19X9",
  "key39": "2EhcCcufz5bq7UgkKk6XR6RyXDRDA8MzRBR3eQMjW61DxdUhbnWr2AcBMQDGEeitgv6m4vcWVXWYr9mdESDXiWS7",
  "key40": "55TbuafLseKDAiHuTmQNpy4juBRmWRNCkda8yGrAhjTuEV6MQownXN71JesZCJGbk3r1UbPbjT9LbeftuV51qYYQ",
  "key41": "vCgMGiHo9b4j4uPdGRpCHcXq3VkA71WD3pFuHSpAHrYqoGc4aYf9FL4y9x63nWgNY98Gqun1TngAEdiymfALJLF",
  "key42": "3KCcSFFVHwx7YuiG2GLdRBX8xA13beQ4P8KAc8kCadCE1iEEWDHfcG8ZVrUsqt7sc8qem1WA74L9ok8EuobUyHVE",
  "key43": "8jP4fovBUrcZy6UvsJfN5x4z7XG4scF2P4ZcnxVRmo6kGGdzspnwuDZnG8BPRDiNPab2YFrGRHaoFfkSf2bBu6x",
  "key44": "AnoREPYbWXqVMpFqvuf9mG1tDvvECzwCZYDFksHcoZ8APfYkaTdyCuwkZCd9DqTtgUCNEvjMJCyRTghAMV25Y3T",
  "key45": "2Sx7Mq14uZh5rmnjwrFLZyj73xHb4XM1Us8WK7i9RvwAZEegg9EuQRW84dYRWKMjAfv2CZNabDGSNvQtoHTq45x"
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
