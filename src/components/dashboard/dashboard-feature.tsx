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
    "5Jq692ZMEUpLqWdN3DNCMrzCHVhYV6jjvvR3hmQLvqeTFTHNT7qxuumh8db6XBWcYJ7b1NqrzCe1kVSsaG5sXtRq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xbDS9LAzC3C4DywLdhRar7kquvJENayqv1j6kQBN4n46GmwpfAXdMRaF4obKnqVbgsaUQFgQRaKJRa8eAKg5X1",
  "key1": "UNhAc3ZexGDSTT2GXcLSdvMLyaEn2CVR9YhsGAMZgFY2UPXYF1JhLgXAmMqJMf3JbSWzoFNApahormrjKG95YCD",
  "key2": "2aAKTaWPGA7q4B93BcHphpDbWUsqibHUR5M24u4PYyzTd3ruF3bj2naQc7Wtv4XP27FTKbu4G3mAUEgcz43F6nQ4",
  "key3": "37ATVhEKtgUbPZdAPyqZQB1hX6YLLK8GEARZH2YefyGit3zGx3FtWP7eUR4QXHPbtqEy6K8Z4Wtzo2A4mYtUFhVG",
  "key4": "2wuNnfhXKAREjvmUvsEG7RDv5MJAtX3UWyn27kJGwai6GEkRZGJC5W7XuBjt8vTua7NT82LZgVSJd3GKbF4Ti7Kg",
  "key5": "3E3rmNuMco81RGgj7oGX4qxQc5JAYanifFpy1WetPtFVE6G6SgXkQtdDHBGxTBAnKAiDBCK4R6Hjd3qTFrguH9G2",
  "key6": "5S4MLYH5woFUa5zJyD2MMf9sYFqZHCYP5X3N8Eba4N35r3y3Aw76hjMmYvrWFmqWR3rTEGxYDT2hW9ydDgU4fAMS",
  "key7": "67KMqkHX1ruVjEcfehXhaes5giXm58WyzcCa88k5vjziPCxzgdMRaEb5aWQ7cMM4enj4Z83E6yNKf3Dse6LV9Wri",
  "key8": "4oykkMZXXjyxYVss7xFugjN2eDHjjRzJEeP1c2ahU53BD8pQJdfm6KvC8nMJx62Re1atfDd9ZG3PbY5EToWfFo6A",
  "key9": "4idYwoaDj9HM1ZC3uxHnQ8kLxrSJtSSMRrHKia2Co4QNXHbJKYchUZXxzvgfdK6ELEtjdrJLvH9QnfSXVRb1TeTT",
  "key10": "3hqQkb7moDXaqCykNR2SxZCwEgyNLCUzvmDb8QpRKSRKET5YfAu5ZQxhDy1cbGkmP1eLaC9qg1S1hcPAHfpKzhKH",
  "key11": "2UpV2HMuCGk6u8CBa2hZxZnsxTv8oomr9Jzj51aj6EaB47QGy93sU22Wuy2G9W5k2Zb4xFjNzG1ciynhNK1id4u4",
  "key12": "cheSzXpt796KTGzu9MPnFB5HKYRzaoe2q6C2oDZqhxg2Z6WSA1ixfhMUyKsk9dL9Tsmm7fdhJXpDdz4wD12jrQa",
  "key13": "5HxynR6KydWsNVG4oNJieuX3wR9G89c9rqLms3LnosDTtteX5H6bwS43SEHYrMTAaZrxU9fGWue6NhSQtjP4uLtT",
  "key14": "5oVHvmtzTiBj7PAupuxx7E5NUXh8PUBmvkNAxsJBc8K6jsr8v8QRcUPwCS3WuFayChbrybGYtJo2SRchbiV4cuKc",
  "key15": "4Dfrz1G3okNyqFkXA9p8ayu4yWhsPVD9hKxV5hRZJsdEjXPxo5yLy1PNcjTn2TLQUJyqYyWznC7ciqGphxuEuaXt",
  "key16": "4jV6KpyPohmF2akCLaF9pCVsM4uTE8oHzjZKg7jAjKHAskz9eAA9aTrFAaXixpKh5GqUyYk18XUxDyBaoFc992j1",
  "key17": "4nNRrqZ9Fj4wLqnZ3M3P1rZcYynz85BkxddFDaXYmqkSKAg2VjihfXWCjTGYkmrwYXxDJiF1WWqd4zAfQVYgduRP",
  "key18": "5aBVumKnwLXH3fspazu4tSveESbEb9iYK5FDJr8CLDK1BFJUa4YVnkJBwqvQbiY2Y3MZPjJWZc4A8qV4btnfwi3F",
  "key19": "my9KWu8aACDNcqGtQJrDJKyjKHpYGgLjtsqbExyg7aJyWiKmPT3Vty2R598aBd84hwUAu3fsCjAFTPG3ZQWwrrx",
  "key20": "wUCwMkRh73KuJ8ZXqBmakXyLPKG1YyuxaLaHF1jUnNnhVpCKmsWd7VefypgWXrMjPzBLuVA7FeDbWjMLyqKiAaF",
  "key21": "G1KX5hwJYoZ7ysbr7WdT948zVquuM1rjGYCpPv7Rp72wd28gyKxC1ovoT5wGHCQk6hnkEFQ1Ec3fzKbrRNEK7DN",
  "key22": "NUjgvVN4pD2NwsV7pY4msjrcUWeXgLv6m7TqmfGfBQoqQLVEbtyPzJLdzkYU39n6tj1RQmLt4JjQnWYVk1GTiNh",
  "key23": "4EbFp5JQkDmWR5Pnhd5AVewdhTmtsGk5idTbKfkSUjgvWsfsgPk52tSgJnS6uBcoGFaZQS7w97uw3xnTpxWiHH8M",
  "key24": "39xS3ERCLKsu25JK4FWQL4oRsDnkbK4EKTMNZ6mNDyP9rt2iWoqQuGvfFSjQM785DneS5CRkk3HKzxeKpKiTcTuz",
  "key25": "YXiYhLo2PTLynjBkYW5wT5Q8fxUv7SizCbptWksXdVqrL1ZWiQNd8KSUYCMGxK9U2NLKFzA2ELxbCFCTLQMHhAm",
  "key26": "5vZgJdLuXEXUbTpdLCR5N2V1tAPqt36zdHQ6rPvcNi3AqSvoT85xKuQUQPGzqfYPxEwZ4diDdCQe9Nnb1J2GbKmA",
  "key27": "5XXCChot7w6Dht2h2CaeuDmeCsWvNqqxszEsxdPTL5AkXdFifYqr3KeLaGs8Yfo1pn6ePpSmRTjS45MAe3P5aZAf",
  "key28": "5kLcqr794DJ7oaJNaPiqfNCgpCeS79p5q64fyJtpMqQUSCdZ7V154BcWGZQqkpd1Vad5B9V9MdFqZuLvFJk7yZqG"
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
