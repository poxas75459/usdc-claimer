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
    "2Jc7N1pKwtgJv291JA1e9SrZ1JgZ87xHsFQ25zHEjEZTscr1ZrQWAvjpUkw768qHMsLu6fAiCzVHuUepeo6oxXBM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v545m7ENBoBuSkk5dkoeaf9isaaRgMFv9SkvVym8HX8VWVCoMsWKHBdXsqep5uHtuaAtBZLiaSfu8qKFdzNF2BN",
  "key1": "533P5ayXQF2VXNdCHwvFG4jo3pqwWpJwzchAWfZVNU2R7Z8ZDPSXUoqW9AcSuQGEDkPJMPEfunEJqVoU67XkC9oT",
  "key2": "5KhQaiLP48hrT6E6xzzXcBmzfQGp5FdTUn4A9sS4vLfpfDbW5JyLn7NjMPADbjXnyRfC9wXuJAHo3vAmb3KNXvPY",
  "key3": "4j9bW3u8UjgWePNRGUJ9G1SAtViRJTJYKrT12buGT8Zco1F63waPbx79Jak7UTUr36msutuKTM9hq4wy5meoN6EQ",
  "key4": "5gN796bRgKzK26FMSF24wjECcu8igQH1gGnVaWAsdnrV5XFPKxdCkWX8k5saZy5aa5aPdvmcN35y7vkbc98DC21t",
  "key5": "2rfCYJRSeueqZj2xRMZSyXwnaNm62hDcjD751auZYwavTWMaDfJFpy2eynmYe8gMmEjp9EEX7CB2mp2MCaFTLYui",
  "key6": "5enyQkJLu3yJXuLcxi2RhFdhfRKqcnhRLyaGhHJuUDer9Kd7wPfeFhRbNjbArkZY59xv5n52NSXqdKEVrGxWX7h2",
  "key7": "2L1sYeXxRHLmZzbT3MhztG2Fg8PQuWRYzRykSZTJamtNEkppiBBXJkjcLKthxwoyi9xeKEMPCLzDM6MW78WTTYvS",
  "key8": "5R7KmHFpUwk5EJNyrvJSyxfGRqXSKSjeP34extwwz6EEJroWjN3GcXwEvEWvgHJBTWyex7NJmdvMcYFPt1cbfGPe",
  "key9": "4u41xWAoAQzof9T2VDMmNFSZ8rUfZPiRME8kD87ZEzcTRvWiGvGZzsa6NhbUzLQjyoEHkQKtGrzwvYiDkMhv7WN",
  "key10": "2j6aFWB1WDU9HRK5QyXmzvFSwKjuwqFXPHWZRPPscFSSrvhvc4aWDhk3k5AEgAuyWfWvMRjfdudRFEUwpcHtXiwD",
  "key11": "5B8Nn5rFc5vh58KeVBkfLt57ZLQKexqifm9pkLqtv2AqDKuqihTpoGCkmhmFPNH5KaGeCjCXdVxEJkSq87ZgB5RP",
  "key12": "47PdDUkDALYHNw6XyisCDCm152dzxt4cYH8Y1YEq9yChPL4A2tyYPTWGRB9BAx6t5nwW55DfDKwUwa3Xr1Kgsvhf",
  "key13": "2z3yd63wBWZA5VAdvGBWLLyLAo2ycRj8CHzMZGwk7GF24yPDkKWBkWpJ7h7PLUZqZ6xwRbHEWvDKXNN1KzCpHKQ2",
  "key14": "dH9rUfULrBuXowVztppA8QmCa75qpb7BJjF5jeQseA3yqN883UejtcEELYvertaUxzKM6usymt4hfP8CRJt5KAU",
  "key15": "5UZQ9uJs5frSxNPvFK198Ka6XRnQqL54JuUC2HpTshtBZTVAUKXHkMnHYPxLX6y2D3ggW351f9aJndgvSVFMJnQi",
  "key16": "4QcVuBbhWuEJkKnFvDHURpozUzo5zv1oCVgbDmjvRCoMNth2h77mQ8db1kpUjJWH7jRDDHrvJ98vn8n56e67wjTw",
  "key17": "56vkAmmXHEEP9opeME8an8coWNCg3QwJMWRoMNeLrLknfXxnad1kR3QncHaPoW5KCPQywbmv9dqAg492z9CZNkRF",
  "key18": "32T3vnLZ7m4QdaCz7CT2kPMN553H9qULiSbZZXs5Bhch1frjpYjtnfVgeNgHwndYeFtpm1J8kZNrQz2KyjPcJg3X",
  "key19": "fLNEKLLeqf4LkNL6H4yGRUDPM7sHikaipiDumJBLf2M4oFgqrSLzbqNJvT2x3ta1UGpgMqvhFo8ZawWFC7kMNfE",
  "key20": "3PRGeN5BBaHMkfa4uvPvGFBQhpGgDpNQ4BuJMikxLyVC8DwEhHx2ZkKUKt65tvoMj4D4WGkdj3uuHBfHaThPu5v9",
  "key21": "3oXCyJTpb9784TpRFDweQz9mvZeaMszdS6bARG9V8JQRCWxe4PhcWBuyc3p2gLidc2FeMMdkhssgXUxtx58xHvHo",
  "key22": "4DoGgMVV56s4L79wP55xvdE5o5KUw7NFDdjvMaPbRku3b8FQCDbiZ3xBD5iB1kQK3MTMsLtoMTtZeLfDrdqZpZQv",
  "key23": "ciQf8RXzML4abGWY8vbLZA8nAjJpSheNr36RNUdFSWJxtK5CiuAVb98CdaJWq9BaSvh1vVL3HAakhdXxpfZXZTM",
  "key24": "4cFeDrbDjWehkU97BVeRbhVFBbtzWGN5PbmnAcqQZCkzN6emwTc1LDjTS8YFkeTdDjkE8guJA34RhkMcGKA7An5V",
  "key25": "4Q9WZPXdJEHKTQ9GWGbm8n79s6hT9FLgNLSTXrp8q5iXWysq6dK7K9pMJF6gycYmiXHvQDzP4s7oCVK5p3A5nFqE",
  "key26": "3wWv3sPedz8AQbPPvvstq4wJAohTFNaYVfjgTPb58zrPuGXebyL9hPdCQhTg33FBqVZS5ZS7dVteinHSWRuE8565",
  "key27": "4vUi8cPUd3PSoKH1Lsee7QvzifcxwodGyVqEGb1jYJzAGmzfufkstEuFJmkuoPzVYwmcvkmwAbAu8wt2VJ6Agbpm",
  "key28": "ranSgufjgxs4mJLzpLKnMoetVDZNcPsE3Z59UXt5zNmqkiWtjBVs64QNF7DmjtBYQKLbdTzUhoX7A7PVG9pTHgc",
  "key29": "3V8DLWWd384URH4JghM8GDdPFB7cQSts7UdumKcjZaEZcjx3REPGeKajnfEavysRNPq77SvDNSPTY7srdkc8GMpS"
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
