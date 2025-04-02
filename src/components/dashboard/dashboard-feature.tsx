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
    "5MwXEY6wT9GgVLgtNouyhGWuW7jZxQnGSdhRCChUxNfSnWt7LVzWD8T6tAA1XCBBgYmwYAYfxTtFsjftghMvUGiZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t8G6c1H7vC2n5xJMHBJ2AHDsuytV8kr8AykvK6fbqRo6nbzKvsXWLVJ5JvXyfjhi49E9nueRPX9h1t1mbqRVZYn",
  "key1": "4U2XxUtr6pGkjL1qSQqD3xM2Zon26pB13gdUeP55bUHVKP4BsEmTJG8DprTQDoY6FknBKsmDUExssTDLHCR7Zbd2",
  "key2": "4BpZSQ7PKrEsMc8htiW7MsnxnFq8Jpj7ZE5sApHrGQsVviuCjowLfuLLZdwRz1vWkGiNAYhLTuMQorfHGnVy7ZVY",
  "key3": "ng7b55wxYqgc3mSRDKZ6MPMWCprGJC1AvreDpSvNn8r6RY7HsYvWjixShXgTY45oE48bLuU8rDND7nxwhtspEhJ",
  "key4": "5NYNFByZAtHYbpuL3ZxpFoHvfYxJQfLPLCyhHA2DDvSZx1PrcqvTFh3KxYWn3YRLJy4dXB3FWTcGFCDRf4Tbndgq",
  "key5": "5k1gq3YHU7nGtwVxVoayZubzNfTF4jbHzi9uDwaf6aYG2FudPGEGzxF7xAFKjvKNL6mjmKLShRLRZCWywpRUvmEw",
  "key6": "Skk35Ve1i1R7gLpsczmDNsAJbYUPLaBEYNTGjZQa6BDZVsSVEvaVCNuXt3RXKqeZyC1yVdU2jAwQcukr6zSUxuz",
  "key7": "n9p2bqQxqy6p1oYCEiP9C4h1S19CrS1kPbEmoSMXdwBdBgzjL9C1C8v6qCWUB4giwhR9w22ipdQWP6VLsaBCx3N",
  "key8": "3cRivJ4tX6tQHuzRMT6WyKCc4GActYR1CJTUcyfN7xLgpJ4dajfPDF8oZziKPzPPeBsw5pdn1ZWvreJQxWs7E1gK",
  "key9": "CPqt5au8XZ5vc6LcTD7iT5SRmDzn7tmPu9SzcJpeQG1PwcoMb2LNqzXZN7Bgfz9aVHM2JjSbQm7ZtnDZerZuWnp",
  "key10": "5e8rD2N1a7xcNKFyqLwhyZvCqviGguXZwvqpmBhfg6tpVzr5adXJvE2ThGj3Vjk8RATdpyDK1sb8EkqvCcr5dfuD",
  "key11": "YNHBsyvA9yEPkF6QjdWTimfNZdqqKFAH4Bx9JXvqK4YCC2xX1wR41vuYzctL8WqvEcvTaWxBgeWmxonxTNUAiQP",
  "key12": "2kn9oY3KSsMnhRSavoAktLAsJuNM2G6bjER15WEe9XENY2jvJFWkzD9L7oTYTBqG73uq9o22V7o6CdGREqzDS4F2",
  "key13": "4dUfgZMU3hizJ1hTLS3EjLSS5CRx9MXfDqDJEGQ9S1gpz38z2fQtvZFvTjzKyCHDSAGeu8jv3vkLosu7i2z6cufL",
  "key14": "4iyDpcC1BRJrPVmYg8NuhpTwspFz8gfgjzeqwzUUrBGv4TFhv24NdB4YPFzScpQKQ2ZxUYF9Tq7CcGn4youbA2Vk",
  "key15": "49DSwt2vaXj8bEwSgk9DxybsXA5f5rnyjNrX7SZ7rBJ4M3QSyxoENJkjriZpH3FodpsfTayBQCAx37ZUvgme97M8",
  "key16": "2NCM4x4tPA4WAVG67nFgfxDFSoHezUTcCNGV4Et22srBiA9744oP67qqHG41VPMswohhvGsUMhoNoeKfj77Fg26h",
  "key17": "tUdcxD8EAQWeaArVNcBPiqMh3cEPFVqMgm6j48LQZgRszqiCZqXeTzifhYm7awiT2KqEyhdptppeAWhAF2zCJXA",
  "key18": "CgCEvkRKYcnMtsm1iLc5Q56geoojQYLJBjDa25pyytXrrs9hCWqeMwAVDx113uuNApt4MLosEy7i721ZKYJMLBe",
  "key19": "5isSZikgbFzor6VRJzoe7ARUQStym6tb5TU7dihq8qBuxAXY3iAVfawNjbw3ddqsu36ab8CHhwgugmQYVuSTCYHD",
  "key20": "4Hk62H9o3wa677gr5yMuH8P7DuuCKAK6MCcjfQdisJyRVGvF7Kg4uHvEuob9f2TssLQU6jYbsm43gVKtJ5a9fCEj",
  "key21": "29tqMyVZH6xHfB7Xw78rbyVhvvFFyxbbkq343p1kYRCNgRrjcWmd2BzcNo4F4YgSTmVJYtQ56mjnbyALGFaZS24d",
  "key22": "5zLPJNBJp1tyqmQYULbEmDdPWyW5VnuYizKCY9pGweAmEHCCtNMVMUPaKgDbDty3kw6uSQE58PouUfJGfcaFu9S4",
  "key23": "2mtKAp9pMaki8ndA4irNYKKxvpDGwbdEhaF7NoBifshyt6YSeufgL4oPFeD5z4nD3F6CeLH1SUBnxF9rEkKHAju7",
  "key24": "4cs12yMCTGMiR3cb6zQ1pJytQzh3cbZJAZ4BfAuCxRFvgTMwT2jMfiwWqw6y96Q3CAwmHikuXp4cXw3n13RJJQuv",
  "key25": "5VvoLhX88FLjAQAHWnCDFP7xTVBThbEai2DcYvx73hBj8SUu6ZCfYVYAVsN6Tnuvkj6bVfBMvTdANEYUEUcpZiTw",
  "key26": "4g3drBbGj6CT5zUMC5g29BitVpifRj1RvtJy815QdLTpkqwAKmirofri1oXgHkhoXRLrEfD44Z17bf2Aa6RUpP42",
  "key27": "39Bz5qERHQCqbUGsytkr9FrGHkgiHSjoHQBqUJCMjcBHUVht2DtW22LU1i8uwCGEXJ28ksaCY5ypsKFARQe2yscM",
  "key28": "2gSfhpdwfnL7CyRPJCqk7baPC8Qf2Eqt8UKv7hHx1zbKyPvpCH8waopDX7V4Z5UFTyR1dgN62F67Tye64hgLi9uK",
  "key29": "2zcanRQ94EXYntoeqSMQJivAXZZC6CNtyJhLHMXH6a6mfmk9cysAwkNXG4bRZtTTCdTrjK1Fk8aL5sjvZrhVmYJL",
  "key30": "57hoxSCVMbXRJWsqfVyQ9h1ULDfqi6NWYiZAnN2deU6qBRpWYSqRKLyavkSNgUS3ekac6RB6AQRn8ka47S7zFarq",
  "key31": "44cSRdYZHKk7hyJi7czxP7t6rv7Jvk19fSd7hJWra5cmfV4jq6MFgvjVqusWha68RrzyfRrcukFi771ZwjV7w3od",
  "key32": "3d4LaXvb14bt8rLw9ueJwXUg3GSvMU9JuAYcgdfjfXHt6i2k4gePF2Ckxb8dzE5SBoEELwFHnnQxMb3o5YcjYN5j",
  "key33": "5z5Yf747EEBDXYEFBKC62vpi7JAVSqKzF4erkVUPt6FKgLm8cCwk7vaTjkf6ns3XGYP3kzY1TjJxH6ud7i8hsEdv",
  "key34": "5EoyXvGkq5ob6Dws8p5bYPuQhxBUQnF1qukzdrprpdShULZgLGPqqDwzukP91RBxK7UPk2xyuJyWJCHo9PvJZzEV",
  "key35": "4asWbULT5LNsKYEuA6udoSgp6csi895YRhvMYjenMREuqzoNkG1LzvPPDE1dCxx3FDPUxwLWQT1Kcu9qMiWwX5Dt",
  "key36": "2fNRX8ww1fNnYBSuZYvLT3e96Amf3dHWT6Nujv9FBky7SuurdQVqeYBLWoKj4xoGVK6HrW5mY7HRMaC7RT5RK62L",
  "key37": "Nhiqg8JRjNtszNrmnkssXxZWcUP8MaPVVWzyzRhYS9HFsyAuwjm3znQZXFMcfoqfYTP3xzJeWxG6cfQNovz2czh"
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
