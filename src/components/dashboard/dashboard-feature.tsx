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
    "3v1xFp7sb1djhAY7pnxq7qfXBcYW19fywYf77oSzNSRZc4xojjzwxkB49A6WrmA82JRHJzNeQR5UnZRpnn5pc3rg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5smR5abLoqdBDN4pMK93uZXR7uAoQjS7VxXqmv8EF3RqzkKQ1KBGYRh5jFFwL7Ger1FRtNBwUpeaSBvtowf4hT8m",
  "key1": "yf6V3QJC4t8i3fwTebhsZQrB6TWk3x2WsPXbFLPc5K17e7EJT1pLoocHPE24gdrV9s199CkwDMmCDHTYoBrjqJF",
  "key2": "5RsJniBfKdo3QCTtnDcPAdKRA89Jk8ggkb5XwAu4bPHpFxfiAD4PYJFxi77zWVa5AauuJhkgRUsTRBxJpakgeZN8",
  "key3": "4SfLuduowynxYp7mTgQY8wEU8yJxtuQWJDFbQC7qnVqD4jrVeTs9wATsKnDXA6Z3x3JhwNVa73CNzGJDYWbgLXcA",
  "key4": "5o9t9KYfpNgXFVq3T1kzXaCWENJq44Be1YkMWWNTjHJz1fjNcMjZ2LtgBAW5LnxGjVcALnzNMzgLVcax7nKvAwVx",
  "key5": "65PuaVgtWjJbbxo8JQ5mnt5Zi5j1NxDAu5Y3QwRS1ofJT4fbGizxACnBdtjNk4vngpVJhXz3b65G8tY3nuRqYgjJ",
  "key6": "2DbLDqJoLU5hTXFBCP6iMv73ffUzSasXfre2GuYuwaDJh3eWGZoUHALcw2RuiRJENSsT44Fof32YaCEvxbVQgxUi",
  "key7": "4VSZyn6uvkvbn7ei4i4up39TWgpaLjpCSMRMxGuUJs3VLea5QDQb5JJa6yzzBQk3qnrT3vHu8r6eufJHskSfBN4i",
  "key8": "6oAtjZDS65ubDkhjJ7KqQhunuia9ZmhZVhtCSczuHSg6tT4hFQxwbWXhgvgfyqsLSjA9Pd9D4yNR9npwZapzBYC",
  "key9": "4ZJWs3Rwi2C3cj3kz4Dd8iCf2jE1CS6on75frVgWdv1WiZLdR3L8HhvDC9ErLv7j52Te9ENpUs99VdAqWJRYDHg8",
  "key10": "32fKAGg9LyPtznJ6QqTSgi3vm7FJES6r6qHqAkvSR2ydHAwwbVC41NjY9kZ98tGpUNUdDPZ3KR9WyaVJgPpr5AhV",
  "key11": "w7as6JCQ4oGZn42jPEy6rFE82QQdatD4jzLJRckbS8Zwp9h1zPxk1ZcnYN4DJxbyNixBdC1ccEJwzw5yMq7MVyc",
  "key12": "3pm5aeXEJZsyLZKcY8yTgS1MZcmXY5WrRNKvK9nhQM9yDmUGDr5kPuYkXLYBGdUnaPmBiFhhCQBz49q6KrrayjhB",
  "key13": "ohn2hAQpDXhUSA87E9dhJnQ5KqmKy1X4im28UeKMbtNh1b4Ge8vYVVf7sF1HcvMmv3kCHGkZjySuP75LbmUcQkb",
  "key14": "5RKnpKtumeNevJgDeo5fAKvzsCXWLTftoawzzxk52yczH7KWPtT1yzydnDX5wn2STAVaqi93SDL99EpNcwGrjvbC",
  "key15": "3q1c5RxHX3oz2CUWXqQo4JAMkudAGYHeLPoM8L7TiNXDgwVxyBbTcJ36z2B3B3dRxVWQK5LY1yLG9wBCbftKqnrV",
  "key16": "3K7YzbEqVi24nUMmPWRbaYEheRw7JqPefWfBb2V7gyhYX1hk9zBftPbBLS9bC7eJS6NYizzHu4kz5HQQcNtph8sE",
  "key17": "2gFh2nKoMLrmx5aKeKByuX8WAtkfLxrGuXUZCt3ZGoQ2RsFNF6nygbgRXTE5NUw9D3tTkCkUE4Y4CLUJy8g8wAUL",
  "key18": "4zkP4Y3efCRh5ydPicLwpfXsKmTg4Pit3vRD5cBC3QdpP6DLUQ9YgSUiDb9hTxpZAMWYY2rMXtmpAdfHEN5dBq8c",
  "key19": "4Vf3Mu24TH83XjMcgtEjut2gsFrz26L5JM7qPNC9yrjJtZEvnhDH1v5PXjAPKTouvuUqLcpg67fz4MTqgi7MQeFQ",
  "key20": "3dzhDxpxFELLz6ZaT3LCNEEk1BZRnr7QQPxAnwzszoiW5XFQBTHo7RZDFwWLbcApm3DD8NMQQQVA4GVHBCCBbLAt",
  "key21": "b9zBmY3Ds1mMf6MjsPqE8iR3RDm8xHAXdWBBKPwpGucayNFoJSQsuyxZotV87EzQ9gTjvZKZQdtgdtS2G8omuMk",
  "key22": "jbctbVMqvHKz4e3n3qhM878HXWb1tEbecXJ2eDPDhHxA77L5vvzjsDiFSsMpevEbYow555kRngoGvkSquXLSTXS",
  "key23": "2i668bM2BRfJyZG9hqGZa8cmv5qU2VJtwakdi6xsoZJHqyuWyPCMEDDiygPxd51gsN1ZeiKxwHmnokFAi5x9cVQV",
  "key24": "5FW7BtAL19XAwHJWX2TJ2RRDjBpxMt1ccCfPjeNFc1A4RY5j1kBsxhbWavooY5NVevTgZEkECkPaUAhhLFRLegyT",
  "key25": "4Wmy2pEHctdMg8uDPBYjH3byfRSGmjdwwYiN8oHi2gMTPkWyGZgCGqsKPf9BbKCmAEywRouHqzAZ1ZqiBnBSFjo7",
  "key26": "4NQm8feZfB2kjguk32rmKNtXXHwxuoTr249gtvTtJsezD6gNuCUkiX4EGcWCiV7vKUBZd4mSj5ETh1gmFa5SQEfW",
  "key27": "39HAfaJegAUba5LCweddsLSYpbMz4kvc5Evn8nTWEcFV3d4VgtfTPfAEK8JNAjy7jG3KTexrTTpB85BVK56reJfX",
  "key28": "37hRiq3n5tranFCeqZcWiVMLJk8KYaxDJ44JRCg6PuyuFjtzSZ1gsy3WT4cef5GzmMJiBKH5pHYXCGYpoJD4qR4m",
  "key29": "61eu13MexFTCRKASNcLbaitco1zvyjAaKBe9b2QAaePE9t4qKNX5oyrNMKySmkHr4w9M8snzwJctKpCxtUh4AT3A"
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
