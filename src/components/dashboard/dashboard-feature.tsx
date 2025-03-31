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
    "2yKswMHEMvZT5hMMt7xUjxjDrUtXCtHGq7RaABzC9BbpL6n4zKf4nNtn1sTn1nQ8v2zPJ5np4eZjwUcUZNwacFDr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Crk4K1YyHC9Ku7CRRnrZ267dfEXT86Yh6z8UVGPJ3e5B1t3WwucicXBFZ11SmJLZe2srsQfftsQZ39Qm9tWvQDz",
  "key1": "Kv528GHTpdeizgEzzWHmRc6ipsMsf4Jo5r8JjjsyLfAi95a8D69JiiQEBBjU4m7fmrdzDPnKeBci3PGyoDsv448",
  "key2": "3i6WpkhKc8gwydZoE6G1HNuKbNvGiGF6ZV6WQdNeDU7XawcZW6hBGahAWr5kqGQoWB5Y1ykHzjuWZAoJ2jB4FbJ4",
  "key3": "75YyDzFiGFvAPqXQkDRgSLEeybmhLTUYkkZG4kkwozQVTYmcSa5AxF8qC447sN55TruNfwovsP6YADPGJPuQ8BT",
  "key4": "2YQSmZWbTTUD5xkWg5RtGJ1TdU7e9cjGUuqA9FYC4jK3zhUbqAfxZfmKHe5xf3eQAgtCM2kWE3P3W3cpUz8aLVHW",
  "key5": "38GoUhSVNohfefTXA4WrBNnoVggohxNq5LCQei3v6sxqb2kQYB43PAnfnuzR8Q98mLAfjEvE2wyamQigqQCY3KAE",
  "key6": "GnaJKu5Wn5rCU1yRWoXAchB5uqNBN6tVFSTKQPoaBJtkSwBBkkw3dCmu5MNVLFq5MdmxN2eCowADC9rm9PH9Bf3",
  "key7": "59LGBFmj8yteEV7dW7sYYyK7DRaBTFNP8uSPiHrNeKv8pPrP3dyV3qtF4wTSUbrb8Qg2p4Uu3VXoj2W9UmnzVoPo",
  "key8": "jqUj5cX7XbDpuvdZKWdVb4sYc4HWc4adR8dHreNs8C7b94cNRSyBqSfWgL7vp6jKW17MmnFUEEHbrRxEPJGvdTx",
  "key9": "49n2B2jVCMNdNdfh5DHVZbxYmcFQjshjVPLRnXtUNqmb9S8i7gY184SM6iPV7sUAaD4QcVXgAHncMPM8aMr3VaYi",
  "key10": "5vKWHbmudJcYRDBpUAevbqi6wGo95aF1Bb2QcWLFGxcVP12EVbAEyEJeGUFk7AbgUMZky8Zqq6F694aLawk7GTws",
  "key11": "5W8cqZWLBaEsUuPnWq8oNmCfXVRZfwNwmH7fjjJqCJNPqrYFcSiZCzoi4RgEiX6UrXneNG94Y9aqVDcdGMR4WHs1",
  "key12": "2rSwqePPzvjXxrj5WQJhKbvU7vGwu96SXT5FjnihRtTMAj1yYLAg6RRUc9Lxc2VVqkYXrNSNp51kB6swVd1PYhzU",
  "key13": "2mxWjPu27M5tb2vPqnF61tTDxw4uLhMMTKqaDk3aJwCmuy83BxnaTpc9TLr9DG8uDMUex4GYcNjFHLyaXvo6b5WL",
  "key14": "bdXwG7cZg2ZwuDae6pJF1DfBq6h1APL78EW2ThrsbpL8V71oK65hcJpg9ZDvmZiQCCDVsXsKr9RiajBMg33eJkJ",
  "key15": "ypgaFmHThbxH6jupNL1tY6wSV8WwmzZxGRKa7qm6CKwpBSnYZcTxxa1HkeAnPfAZteaWPBdqRahgGmY9VLwJw7s",
  "key16": "2kY7x9ZUWyAkxChkR1x6FwsVuDM78X3SeLGXyRAKepoW4SgzTHRP9qqqgLFPkfZtLTTFroavyWx46kMQCrw4HVjN",
  "key17": "BBuYFX5QpcWydbwznqGsxt97trfTz88tvdeh28y9kpqZMgndu4n2qSJ7R9DWsHtn7tTpGGvKwXSeQTG4Z5Ln8d7",
  "key18": "3aZ8DBa1HcZ9z6qt4TjZg3C4m6oWvNmDu7uVZLN1gSNB2GHMrrgvjq3BFcsbMzoH6a4XSCHxh3dBjjM6cG2fjK3Y",
  "key19": "ZNxjErT6nfBErAPDchbAbEAzdfkEkVmB9ybr8XNPZR2umqZ65AcQM9ZcC9McMcJrLwnXKoBpoicMirGM5LG8aTC",
  "key20": "UQL7d7RPNTCikQg7957wmFJ8Sb4DNeCXBGudyANz5QXUmKWJQyLr2EjWtpzC8xT9Au4ub6XrQTya34Bs3MxQHzR",
  "key21": "2iHNpCqEDMgBGzjt1NhQr4D2XiDA2GSzXMaJGz8uxhSYp5iJ7xDAwY4MSfuMJrcHV6wJec2mpSZCT6tH7q4hZ4aZ",
  "key22": "9aN7xpPaTQAcJPzuatMqkBqyATxg5se9rQWfMrPURgJ56z5udGoJY39LK6bHXYJDyxRT6EihJjDtdGdNbrUatcC",
  "key23": "2Wqa4ZssdrycUREBbHxqp12qcAQs97JhPq565rcVFnNPYiyyD9VbYK9k4d9b9dKu6dtN7qyjXKDfGsoRN6S4p6WP",
  "key24": "3QbpMKwQnm12onPWa1ny7ovo4KeCNYeY99Nn6m5a46Lq7udsXfUBLvvSGthzcZNGd5UFDGApBdBgDpgXVgqJJPy2",
  "key25": "5nSCr1S8nwVoYgHD67sLrMMDBgg6wmgE1dosZkWhLYLuYxuqLZdn95ciRZWvAYxEg1mVyDqUDGh4uyUC7jaezf6J",
  "key26": "2ua2g9xFLTgN3kQN8mMHK6T4bAoKhsSw1HAzVQ2oDTGRgyQLvPUDh7Fw2ynw5sutykCKXrJCeAt6ry5K24NhV7h3",
  "key27": "44jcrhSa7xzXCEaDv4hgJsTfiAhdjdxfULApL4vgQzCcSgsdpquRzGp2oCcnyKrN2NeBkz9SeBoWAukPp9XDeNRx",
  "key28": "3Rziw27R9CmbB9PmqaMXat1x8dxsDsZnwpUfopFhQ5JpGokFaXz2ATyNZyiSpCqvQcoe4Pgy5hug9wYHPNju5LgF",
  "key29": "3jE6gRJxUQeqYgmAo9pxZx6RU2CfpbQuQEZTzy59PuME1d3shu2FLhd3mXGwKLw6n6i3k19A1tYD1amq2mESBwfr",
  "key30": "3bWYpNnwKU3NpSTk7XsowZoUGNz6gPcgveWj9oCBsn8Y9MUcQwSJvuDhp7XDPMSRw5EJdfkYdpnqP2kYXgKGtXdw",
  "key31": "3EfotFhteBhNKVd6vvT2uysRjQwjJaeCTwZYm4mPa1tyXPFCXx8gfMuGkN3YJZabQxC5AnErHqgiFddmLYi7bay2",
  "key32": "RLiHpoMvTMRRUUutsKM8YFZFgr48NYUS4tcSmXdhptRKk32VbmNBuHGZRnh7AbaHheUsgfBAZ2ucttdgkzwt4m5",
  "key33": "3agp15KX5ums2PygDgWuHyhG5GzPHjDhKwEHwrCHHGBvt17e77XCRawyqPe4PYKWSFJEt6ye3JAjSfhNXiHVThWN",
  "key34": "4XV8YrvYTQvqijM7DoAyDj1sDEdvbG8S7LBi5WVti4hTnCcSCEauESbfYcxW6NWJayKU9E9puBGyTX3Nkphv7rLn",
  "key35": "3cqsA41jBm6Wreh1HwW9CX7A1RF6QciB5QToBmsUrkruYUDGbrugnb3698diosauNLE8z7RqrphaoGtGL4iBbEzj",
  "key36": "A6SYGewPLHEopvknToocFPJBpNhTWMvHutwGgaJbwPegE7XJa6m9uVD3Nbm55VhcxnLuBJbn1KLwURBUiuxYLGd",
  "key37": "4uBQqj2tVrADDMejXXBerRgjqch96ZyCjRwfLiR4DS5VdxsgkBEHLF5iC3UCktuVJxFNVpEChTsRm32h8azZcG6y",
  "key38": "NUmqj2pGx2uzJDEQccHLwzQQyfepkiZw2Mz7smUsqNyo5TTSUC7V1SoBx89zcuXweeuvMvMcxhTzG6hdp6nN1hR",
  "key39": "4ka2SkSjsWNAQ1UkGsJtPgU4bztmPuUKNie5SBCvLvaRCApKvgfm4LeV6R9JJJDxrPSA6GFmHXSHXsR7R7e6NCN9",
  "key40": "4CwJrZsVLeYjZukAD4tKWYBmYe28KELshuA7H9sU4ieiEwhRMTJs7hj1osqFDJ9B6hs5oE5BZMA19QzZAo3i433W"
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
