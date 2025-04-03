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
    "31rQcgYnVyYcktvMTsgriVQshmL2boAjGCNcrcq78YWAEPYyAehaqjLoLXGRRYh26k9x4biktNSpd1cLsPoodS7w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SosUazcjdwEN3FdbQHi37xswZn5LMXKrSLbgJjg9BjL4M2C8EP9i8B3hC4GJ7ufBSixQTCVZUkAzXjXYVBV8Egb",
  "key1": "536Fo51NsrXoakAZ1q5nwMqJpdngv6o3HuRSUEshibzo1mqX7FFYyUbtYyzRxNFHL1ETBtT1AL4M47s796cGQxrs",
  "key2": "2uBkrV6xBEgUNFd9kvZ5UCGcneYSkkzPHF9uGXsZy1LEcHgfcatATkX8L1FH6uVVPWWEUEFD98pYXQ5zoWEj697D",
  "key3": "3ss33VbZWLELkwsTRTgpQMJg6g7FPEHqcZDJ6yJXRz9CgcHF6rbUoDGntMq4fUJm59y2h1MBEGBakNzt6dW1nvfs",
  "key4": "3Kpd5joBcYTU1rVWXf77p6GFKbceK6asQrqaTbQGE38HBwz9PYqcSJVijPiNYyKccfuvFCXEm2Cd1hQC33kFYgj6",
  "key5": "Pa41PiqzpMYAWqwMYjwq7h1Pjic8sddKePxZHEyZad5rtczLYbLsvAVpdVZibu2SXGiqrC2hZfJkFVHezwufZv9",
  "key6": "5FDmx5WqKyknaiGGfC81SnFapRN6mXUzcsVsEDvjd62h8MvB9FUpZNdEKETL2vVTZYa8RGQrsF3KcdJaktpD1kLq",
  "key7": "4G7nECKW4XpsYTvKXEAiXuhSm4sbqEhdX7S3gLX4QKE8sWnXa6vEksYgU877itWHRR3SBsUHjtM53eed44dc9xDP",
  "key8": "4XZ3r1sjhsitMSTf6eQK4Hfnmn7ZGiJ9TL4bz2Sqe2oPVf93XSV4RhLCiLW99JigEuoceaxgVSLEn1XYUT663FVC",
  "key9": "2BUGg352ujobs5uzqFybwqKtEKyQrnkSkrZA3zF5HzDybqq4D2bEBTEgcBwNiukBeuYsDWDsoZDg1SPWVURkL7BU",
  "key10": "3xfimoe6MCc9ikL1hS6RFXGbmiNPp2Tz3cRr1vcAgXqqhQuZ2UHvc2yhkFvPo5XkYntcJHpRmMea7PDGHjKNXepZ",
  "key11": "3T2wT6BnAeUbULZ2gVhAA3SuKLfw22zG5tKW1daNaTWgEPMWGoLLfo3PUNbWjAgqDu1ia9ZDbBHHiGDxMMBakRL1",
  "key12": "6TWQGLdFbhdh5TmsxqaUUh4R1ecs4nNBeVkPun4DTFQDP3SaYtJGZG9jcMqzMXdGKDcdQUmjUut8pKcBJp8QRGw",
  "key13": "X9EV5rhagXJFSiwKZRvPpVehZzw7BJD6C4HcCSkEYUGtkeCJZKDypxNLpxUk4LALFjt7BboZzGQqdwBj5kdBaK8",
  "key14": "DTqjDPATv5W5eSG67MEAQ4MnyfcfUa5NqAu6MK1xEWyf61UyAXrJZTkKkwq4hYLCMPrdpSdRLHbv7hYVdD2XrZx",
  "key15": "bhWxjRWWnreLznAmdF78w6eb6csok8M421xh76r2bbfZsvp7pQaeRFgVDbYqHKn24H24bsovtXvpHtMxcZMjUvf",
  "key16": "3PoNThfuDXWHf6qKqrmcQRQgLcEwp5pWouPSh2Jt1qkzzSbuCCt9AhQ6K8o7mkzqN45FHa7m5NMoyMb6nwSoA8Sp",
  "key17": "4TAocmk7BHoiDHTeffrZmbFsCzF4LbbxfGBCEYvaBdB86o2M54oaGM4Juywprj22k9SfuzaUX6FRCYMd6Pyte3oK",
  "key18": "sgnei6aJKrQN2kyDNHwTCnWhxvvFbvC39aC4X2HNGFekmczuYBmoKF83dadn2CbaoY9SEzUCPjh7xhJBSJEMSWP",
  "key19": "5Yf6jNQ1nJzY7ovhu9XZPHTuuzaX6CFDxUTtfW21zs29VrP29cLTymXVUW4UEKc9MV3s5EjvVKHM7ZM6C7KEUCCt",
  "key20": "2KxGkjLfdzQC7J1sEjj3nMvwmi526qciddsBUAkuLr55U9WN5uGyC1tF9uwxtFkkAZbZSHBoYkB4ZQpJcP79h8iS",
  "key21": "2KPuwinSYyA9revW7GcyTXJGq5vevnxd2TXvTRcD1gKCpUVzzNGBYwn2WJSTTK9hYepNtgkJRzau73M6ZV9g8am2",
  "key22": "2r7LX9oiLaDWGTemiyYgkdP1xWuhdgEtEUcTE92YvFkF1uBZjkKqk7QsS1324gH9wzvuycoJFRLX8i7nvzagaVbk",
  "key23": "3hLL3SAcKoEVbrbdsSWupZaSRWyQTUvWkAkPM4TAKAdJ6ddhx7NDA5cspPbHrhAXFdF3p5w6wfm5KGHnw5ShzV5A",
  "key24": "4YKuL6NsyhjDckJCThnU7GzkWNVN8mqDpCGb8QPCS4eXt98gapV3BUutSM87YyG2BwZABo2Z9MYN2aNsJvJhqcAG",
  "key25": "2bd8wLQ5TuGjBqiit5S81xDaihgkSmaa2azNd3ng6koHpAD6Tf1L2WpigrDP1pWXXD9scDfjDQZZ14FBtkzvUsnF",
  "key26": "57VxdtizcxJFxSvk6Son96PCmXZZevoaE1c7bVX2VJjSxVecDBHJWAoGyf8CGJq3Ama88YAWFWYHdDBd3xd8BSoy",
  "key27": "4JV3iCcCATfWmCKgbqqndAW95Ca1ekrqB4gykWH91zqKQMCwahEqzsyGvoCUNZaBH9QDzXJgWqwqN3FhGXWZE3fi",
  "key28": "2XB95WEhwU2jnc6Dhcf1uvP3uzyXQXWUJhvw3RikE8NjiNpWWEAg2a3zUnAv4bkgLrobjCf5vdvEjMKWWcKBhWPp",
  "key29": "5epy8rQYdUXGVvYv2TtNPs3rBR2YdEkuviL3eF4nNbCpR7oRFL5dc7eHi3ADzuU2bDv3SMeGUzWKfqYxchvdcobN",
  "key30": "6yfTqGcov1Vhdg2EUDtXY2Mzn7TCcw5n6pAasDpg5n2DANdr7Kz6tqpHEdh1LdpXw7ZL2fFtqeXBmRSLgV9AJij",
  "key31": "6csTXSMtibnB5ppfb2r1R3PoWXmxaKYMwMfH5ULJ3M3ydDcWCQXgAuA9EH4UGhT6PPYK1kk5HHtRzFNWGJYWPjm"
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
