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
    "3xitptf6ZGvkwWsGLP6cv5Fan4gEkr43zvVryp29QLFdK7QyACSe1K1k2fShL3wsxVuHUkroc81rtkpe9TEf9xFf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uXJAmtNWctyANNsrgPYwjqNs7qbve5M1sSPsFx8QzrrGqvMhqhwDwbQvHtNhWJQRYGosF7hUg6iZzuqpMAhkxir",
  "key1": "2Hf19QuwqXsB7ZHNaxVHPVERdoFDR6zJRNsQfCkcxCqhtQmNvhtS1JqFrkqmHwpgHgXDsivqz73m9jnDRSW8u85U",
  "key2": "59Vc4rg1xP6QZquS7p6t9otA3LDk5pA32tEyCFdPUN6Q4yVpzyscxkBtAAKq9qUXHM25bFJjbkSnvchntF2UsU8q",
  "key3": "4cv5EALEnbsMKEee2oCr5tjci9cXNgStx1QBKJ7TmSQd4DHaPRcAx3jAjSGVPNfEyuDXa69RVDWsi23a7MJe2Sf7",
  "key4": "2NGjQBqd4WZR9QNSLWrzbpMQbVVGwg8idxG4pW53NJPzz14mcrHxYGUNzrAXAV4rPxfAF5vM5f4fpK57uhjtfhJ9",
  "key5": "TGvVZ5JjzKY9hB5W2sQawoZSAc1aXRxpWWUso3xi8v1DhGfdek93ZEfKngj5BDLPnD6mDNZT84saU5VMmYzCbb8",
  "key6": "2euHw6Y6GycnwguxBQEQ6Dc3XQkfRk2yjT3btPPgfGAQimPnFaXN3o7xEZRQ4W8AWKTPJUzgbDphC8FrYk83vPBH",
  "key7": "39H8PVgyRj5wEg6yAJoUhMm8tBqMn3kExd7ckrN9iFPzzaJxjPNVe8NbWLpWCxxJBAbG4qDxnbCwAbUuBW3SJw2r",
  "key8": "5gsf1SiHFmdMBeztr1aYNCTyrKkmXRcWWXf1mnBnwrieSbUnodisTb2RBK3vxWuUDDDCMHEe5xzwKgkzVz6meJ8h",
  "key9": "25jm6QpGYhoehsm4bxQ94UpnbBDjDtCeDQMA9hAsENhz5oyE5K8WhdCSXRX5cJbpYwUnQTUyUVpwbB5DB9AtFa4L",
  "key10": "ga42EQkuMDQfh28pvmqJhMwm8tKgyfJnAM3FALBQ8yvZjHUHsSFcGQ4tWh6on2U9aiJeVpjpR6uHT3Tg5Ud7qwG",
  "key11": "4o9ddeZRGZEbmYC3bkcAwwTwY8BzC6K6V59ZTbQn6B3rTaz2qeKZSmSPWQjEK4ARGeC9WwyspPCwyugmB37JXDUi",
  "key12": "5WEHDTrMV46jzxYcXXHfCYNfyUBbZrFxKcDmPJvEAjEEWVhKTbmjTaxF1fSbu9HvGvEZsorMuMfAZDZfFSQp49Su",
  "key13": "5GZ7jMXDWRwHMQD44bcDJ4NtJ3RpjRT14621X6NgssfFha5oPzuMVz37SbMCuUuHCfuN1gEz3j6YcLGGe3p58ASx",
  "key14": "2KMoGMVEn7dPGS3BPky9MegaMhGKMcKe5PpgN7JMmvbnHy9aNCFjavgYeujEDsvper1dhM2E17ULUKMJsBRimvcz",
  "key15": "5yj5ipjdfmRqnHt4pUGpjTDsW7wS6oWRBsFbTaUm7j7RMiUDtcfJFnVjCG2RLAjoqGS5zhjMw5p9v9hauoCNvVZG",
  "key16": "3jidfXpRuD6VPvVmCFSAG2ZbgS4dVM9cnRs2xUztELAYuksUiLLaSjqkL9Ch1LQK8ed5oaimajbcvrSk7KcGT1bp",
  "key17": "38DFtnQ2qDWtVrKXH5T7fNh5sJCH7WZCwWAUdEraSF4a9Jjb5vX4RSPHi9XTUFUQGEU3htEzXRVRoEMUhgnJeeAy",
  "key18": "26psXa5iqczFKxDD1pr8u9kpgqBtPdNAE4EXxeBXU4fJkqH9dxYGtD7qBtTmvbQ9kid2VWPPt3MGREt9sAkq4J5q",
  "key19": "537H7jGaCGb3sAxidX8U6n3ikEJTSnhH4U5RZQ5it3FTFBqAAkqWW4YYyyEa4noPqkH2ehBcq6LQyhMxYC7PUwfY",
  "key20": "3151m2gNtzD9bivpgNaoNqx9NYQ7kbUZp8jrbLnyL1PiodPYWFV81Ebm7RS6TvHKEgiHYzjYNZUXK5GebCsqzmUi",
  "key21": "212Nn2txZyDqJ2eonx2QJKEkU486rwWgTLNGtWfva8wSn1KvGGqamL9zP7yciZymeyYcQjD8vJodpdaBFj5j15e5",
  "key22": "5aCD9SooCHUsuZA8iFCE5hzdKuM4rfA25wVTdBuQy1uAYvvYkyc2DQzs2ENG8yJXjC6utQeoXSeLrFMeppHZzP5e",
  "key23": "2rFVbZoVKZ9yWzt8jmNDmAAoMN9tLejRZpZJXgzFmp5Fv3VsXsAHiVMuPC5dLMEv9JdwwvurWMDWzLPrYHCp5Q6P",
  "key24": "5Q1aaGMSk5HqJrvvtd4xshjEC7M5E38DwGmmfN1MTtfJrn657aRhwFWDNaSRcZ6xy5L3uCyUctDA8gDK4s8HveLW",
  "key25": "2wAgagsGu6MRhbq4NwQYyXRcxgEzPDWe6QH7XxDznQnWVWTFXQCtzA8YhEUZXE9FKxyVvQmpSHYHwZEe7KuBp9nA",
  "key26": "3Wb4NUPsPbsqcJiRbgKYmGWVdtwJ23RJBwyH5kx14XfSXiMQrbCbFFqHk7UgX5trgP6Q4ktN1wNBVNxPCZUZe1bS",
  "key27": "4RCQ55mVkpaF4i3chtPguKQ3FAUTdwkH2vKm27paHEz39ytMEAtfHgSSrJa6cYAEGwdu29qoDrFwoNtdsqSwfRPn",
  "key28": "2cqGBwo9prA2j8kegHPN5dQDgbdnAsAN5vHVAaSzJa14xjJc9ixUtoNKzbYoaFdgyGSKQwiJGERguqVnrZyebcWk",
  "key29": "2EbgA9diYmhgXieiuTvaQ4Y7f4GtQA1gYptCqTQ7QAtN7AePyjDx45KTT3S6fW2cY5NgWexQVEoYTYVmiK1EfTYC",
  "key30": "2HdHPxHSdi3DhPq6khvWiz24QmczWuVcbWNFY3o6moFLnemgqACPzMjXmRAFdUXsfhLz4wnC7YcsFmnAh1Z4rZnG",
  "key31": "5vwJjCo37TxyDufQg2R83J5mNr439nWRmQtZVHNfa9YnS5g9n7vtjWjahouDZKW99U1Kx63d8wFQVzvkaP4MJJBA",
  "key32": "gwinXVwE2pKm4abt1LzBLmE2qHMqCWa6UTYHsNGqaWd6w9c8gEJ5ByiAkBHi6uew5ZQfQZ7Y5chVch9HHPjinXF"
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
