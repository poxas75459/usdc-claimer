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
    "5RynHreUxDCcc8HqQBpeFWQcZfTtX3rbpz5hWRkDjQSTCjC41FyFyX85gE692W9SJxEJFz5k4K5UwSAXe1Zgad3v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WPtcnaicWi2ZdTzhBzRRDi4LqhcKwrr7sVbJ1f15Vo5iC5L49VkrLKXuzaSf2157xN3C6w8JX2aj3iWoJsD1auU",
  "key1": "22LUBxtpjDmA3C8wFgrVdVa3CHKqguPEvcg7X318JF3ZP2sGqQgVcKrRBuCUcNUvqnW1GAFK5ikSi2ACVtg3YDNJ",
  "key2": "TURqL6kcb3u326ePtVyARsugnXY6RX4zceXVkY4KgpaArMXM4w52C1oYnT5RgqHU8dcqmdiKrXSUE3dU2MuMHXr",
  "key3": "5pfYxNVr7EEYAQA84R46Gs5zxJnoc51LwgUrm9aEsxoE1L2LhrLBC1i7L21NfojQj1WKS5nsXJQhEeTwpgPNf3qh",
  "key4": "3WfaGeLwbPqJVMhUjB6jLhwwbmHe6Uc9SZ7XTWSivUfyFU51yM16eN4TwdoRrvXd5dtqMt1ZF5uziHpgV8vUiEzd",
  "key5": "3BCYrxeUv8fS3XEyTs8bVeqHYL5UwG9g9JaBaFNEBt3KtuoyAyZAvUGN3UuQ5ZjPcxws8ntrTt7D4pMfM4c3DWab",
  "key6": "j5252Vk964uqyhsKrrP2eg5Ysu7UTA5gvwKY3EDJ5zCN289mbHYgRZqsWEKRR8inoyJbJxJyGH5gqgHruMg8d4G",
  "key7": "5Yu1iKPMG8xJHavS1VvM6zRLJvB3PGSsZVuNzr6yeYQQYgdph1gKhPTmZLCSnDC6xpwPANsn2o57A11Q8Mt98BTb",
  "key8": "5Gmat6PDt9pHL5x6LTbN5XXNq7oibRjKaq4uVYLYKRiWUWsAwJqyApgYV5W9Cdy2WuBVqfh2Uj41Ax1XibQytayD",
  "key9": "34atm6Hwp38vif72kDpPUaHPZ2AqbbKrTiAhgGRCNTGVm2SpCFD1NA2zNxXMrzviWHDmi8SqWp6TyBBWmScUnT8s",
  "key10": "YJ1aVV7tKRXW2RzMyKr5aD8ix3uTkiLkENjQvy2BDHE8yyVBTNMkGKF8HfD9KiY73z1UHXTCMTPx1m7dBwwCkUF",
  "key11": "4RuJrgxvPa2W85mT3NB3tCEhm88qFEK1CusdQw6b6AqaVoY1KwuEZuq5VBxSaMakLyqFuYpvcvQSwcq7XoBYiLHK",
  "key12": "5SDmn4yGcKVf1nC3KVXpWFqeAjYZf6Y4326jMWioA5bfahff8XV2XQvBHTkj9satrpSeUM8R8XusXH5Jw7DHNoyb",
  "key13": "2qAW5JmqzpKnhe2qgRoGnMnPV5GAbhTpEySKxKQ29bZjo4ShFCeNVW4DY5FjR1dtDHrdofMnDE9RUvdWGfHAfJpi",
  "key14": "ketUX7b5E6uHGFTQRwrUQF3bthe3WgTHWY5ptofqYoQEH3divzWnP58u9jcpC6Cw2tPLZjCYRZRXCVxmJTMugsy",
  "key15": "Kk5gToFUKgpeV1bF3bvunUwRjSf1wrgXC8JSKsCmFSXavDkHUEqem34Dh4F4Pq2WGoe692G6P5Nnd5JhaMGeeWP",
  "key16": "24Ci3gcgZAhKGsmi5h7fofT9G9TXKpyqGVWm1YtoXEkW9SGjYpJhM9R4MUE9WWra2zhUDfi5UGneZzZiSaYtiJme",
  "key17": "2y7QBLLKEbWt9GkxYkfZFZ68yVxV234vD4kXSfwwE2ykMzCZ9YpBHQ9rYbajq7gbcrcaZov9EqnBU14jawANgGFE",
  "key18": "ZrdzTRHhRCy8bMwvABB2asEYHDodgDvxUEgCZMWfVM1g6fm9fdkUZfazdKUgRgA9tZCtNb2hZHJDzkP7pm6UvRh",
  "key19": "tb641rSB5RJc3BXdc55rUUc7NirfvapSZAbYuMG9AqpmsiCsVMR5EgCKaQG3Mcib1zCAFqNNyKhkYZyjjxE3c4T",
  "key20": "5utnquANhANucm5gShHK9CSdzNiUTVnoXrPWTMUgDScrAt9ncVBk9BAFv1s2tstVfGKt6PP6Cv1YMj7zaaXAWk45",
  "key21": "3JokDdHRAUme8f1oYnnxBTtM22E7dSBNMtEyeAe3HAKrZ8ysTPBK8qMowUV8nZWdnAAE4xXCF75aXAqEEJ7esF7D",
  "key22": "4sFXLnFUW8vcZX4qeXjw9gC1rLcCN3v7fkR6FDGRKfATz1Ld2WP6pZuZhjsBSGvYXURZppr6zz9rzgAgNmiUQDNU",
  "key23": "5WGvZGfv461bCf4EEFEEi95atcUkx3LXuvKKJk8LyvmqM5D4CsHDp8SdtHQEuGSWDWP2Eis6Zn1M4ejA6YRJGFFB",
  "key24": "2hJTX5WCTaKDS3h2BBfL4ph69471x67XYJeg4UaR9g62MGP48fDUYXcRXx5BRTh55j5E1TDZPhEHkXWMjJ65U3BW",
  "key25": "3BkfexaDSfZrrPPSm3C8xV2Ujr8kQfg717hysJoYrnCcW47nbD1ZLzcQYWGRhRyJEsoqC7CtCHcH3zmQq4thBUAr",
  "key26": "4QQBXGSazUUwXU4n1sHSmZchtFJPXAz3wN83r6M2VVySTWuCK69CnJt1UVmdBczP32SDViAnjb4JoH3DGgxYR1Lg",
  "key27": "2mvtiaWZw6JapjzWii6K9kNBBtyeafZcSwccNkH31E8aPETSxNTGCr2a1v1sQju53s1cZiS3onksG84RhzUovTbk",
  "key28": "2c5QAkYJU3cPfVkyrBtoiVWA96qTWB2HEtZZfNAgX78x4GDWxriQ5peynQxseyAiHArApaEBsbtvGDGcNuXBhaHk"
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
