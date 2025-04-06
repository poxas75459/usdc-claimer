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
    "5nvnYHc5TtL2bUp5iR7XsVx2DpNHSF7jr1WSEmmXCLENSUY5SGVoq6tJHpL7uSodLPjujmizLUerpw8ewQdGDeFN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q7UNwnPtFBnQRqg5Vdzq6w4wnQw4YYBWaGVB7WqvYN2ULDUWPTFRhHLH3aGUWZYAh2VM4Rhbhv7rKxEUNSgJ9oy",
  "key1": "VU6vUa5S7gNCcRm1sKBx5KCuHAJZPknudF89hDcoprKMRnCCJy3mtgistDr8FZYSVbYFYav9juV8dNa5YwkapoF",
  "key2": "5rz6joaVCkHCf4BcavT4vgzUVtojsivcF388emTpoLnPm7triYoEM9xeHqWQEMkWTa2Scn7N39yKy9PTGdRjQUHR",
  "key3": "2fMu63V4ngnDKJw1qkkq9ihpPm5HsCyMoS2uKj7i63HfuxeyH34XfU1JbA6ozTg7DZ2E54vMLdQoZZFJdgcLhZda",
  "key4": "4962RHz5bdJdgWVUkkcuWxaYYhrvPQ1ZjhmzbYH5Bz9sEHabo9jNGzV1k5SnGoy8SqM9dFVW7mGvBtqcEt1dRHXR",
  "key5": "57ppyrVL8aHUKuhj4vAfyu8MQZbDXgugLx3e7BCaNJB6T9tcXG6udsS4PPW5C8kGhMtDWmNeY7djG14hCWr1hZtH",
  "key6": "42cH4fZwwH8n3RhaiudjWJrLfYXK9M9oyn2kqLFTPQraRda4Br4o7TEaRNgAgsMcsMchfCshVuF1iAU8sesp2GUn",
  "key7": "3CYfxTFXg5FRyNhgS5L1dMYSaduhMwewsoKRerJEmqdqkP3gQi2EDSukgrJBtXuSJnnuiaryYvvNLBUhyM1Q4zkE",
  "key8": "mKDqu44qjmfZFZEUvCwMTuMBHbVFybGcY9o9XeJfCbrpMLni1XjtAYcKrbLyxPQWUqfZTU3DNZyua7Mu2WvFH58",
  "key9": "2t3NLiNTaCDPC7eZgCdMzhafbfWvGUMube1QUKFojgUcjSDHDPzRBJ3prG9vnL8WWBGdpJi3U5YmpUaVbNcLeSuX",
  "key10": "2yBcU139fuzwkYmD91eEcCdG9vAF4JZac3htFt25VJnL3NEQQXEU34Shh7HohbXBHKTbzdcikcAnVcLJqTwfSvbB",
  "key11": "43pfdpAPuc9cZHnfexiVHLXgwzUB6mGz1mH263S2Q89ZzPQoUKEAdmkLmxCviPpUdaeWd4nzpCJmujs32MVujJoH",
  "key12": "2znjMp1hkiZdVY8f7tE7MZjyhGYJX4s4nBbvS7DNk4A6kVKv2L1fxPhdvhPEvbKUR2hCRXmCtLLnMZNx4f64X6XH",
  "key13": "4FBZXVNUyY7mBGUC63iQUntoPkKivdpKPbTkTYDEDY8PAnpZv9hJs9XeKLPSLKpyGTHJP1dqvzXWCE4nGzgQe7AQ",
  "key14": "28mwbb2RSaDVSLGBc77gzSDprNS9m2Q7XPXzs9VVjSkRLUUsKvkGcnkbdmqB5k33243bNUYaARb8UKaQpV5nQCDD",
  "key15": "3c3Bopbxu2HJwiRrW84umwBrBJCJoViqNq7CgfCbzrFKCohSnxmTJWYMH71UYFd2UWuDhY5SEVyM915puYjTwzCy",
  "key16": "2DoQZeDWgLJWSEGu3kTQwS5j8mR3gL6rhSZFbLoajwYyRzC953u75L17gwY1FztqazXF15AnYdUukWwQ7AMegaet",
  "key17": "66Pkpz1zM17EfVESPKfDM277LGoGDeU6jv1FVYMrj3cZz8HB1xrKtySeoQqvtqLjaRJwoTJaQAMSUAX6FYMmCxue",
  "key18": "3qHa6uC2a8kj4yf3abuUECNpXYviK2997NXu3W9zKo3Dk9JDticwr3pU8thTwGB51QcdUWCjL6ox2Bs4XzNgad2Z",
  "key19": "SrcBfWwtjPFoG6KxdqZ6szdqMrwSAFdaHHUQ11wBotpi78zvLXALv5YLn2wH7XxtFy4ewuSnV5PrcMkKzeRwRKq",
  "key20": "5aALb7hDPL7XcvxemxAHT6qxz1SuEYLCkrBXQAvTwgvirvgCXokifmgzhffuW78LUuhcbdYiNfJ63rP1LsqF4zQH",
  "key21": "527vcDchu6oKWFpMzGRYghujdbwJEhGU9cJCpUxhzoFdvqeJP3mAcbB1SCb5ReuModxMJ7KNacXNgm6RXoQHhV4G",
  "key22": "2GmeoXt6jyhMKwyZ1kq9vcQKRBn1bhvVNyqhGTgAziMVMc7g3hiyZqCYNJnauxe46APAVV5GzXkcwSz3L3JbRpbe",
  "key23": "5T2EYHsrWJWPiJiPjWsfnm452gmcNm5PmYuVd2mkCDQxXG1nYTT9RE8JX1jpXvWQ9Q9t4HHRRbbNT9KgYHGeypLZ",
  "key24": "2beUgyMUQttMxkpAoLvFaaC5GdUM6mqDdHivRfgGFb4zvQzFhGziEWPidKicuVNR3AngdhiUoEHkHyoXextb4cck",
  "key25": "4jaCv2CxdrQdQJQmQ1sQtwgfTUMVHLnrbbtjDoa8LdK3LSPmpe4JKnVuSWpWpDytbmcS4uTnxT8ekwMuXxzcGc99",
  "key26": "559BfHBfhSswTSxSUYh3N9vN7tPp8GZqqq8TE4aA7qAVNB12AqJdtFQraNYKHDAew6vmN9Ten6KLwnHC45V84XMW",
  "key27": "3LizXUJDZvdYPukwYk3Z2R7Gjm5WtTQoDmLEPD2yoFo5mTzbPwk7k3UL5wgGCcqsuBNJaEYVVCssKfZNT6781AZy",
  "key28": "5JezBnmGYjbC5bt1K34qmrKt84aiZUvaqX2ruyyQiicFsW9neUP6rUjYfw6k5fJQrxvDrtoGPymYKeAH1As79uft",
  "key29": "5Y2ptcaV8E1P8jRjLUeb4GBKLiXFqm1NPRm7vQoyQ4XZg5dKCwC9nSsG9X6xJHfwJAsodfzpSAVCdM612sSWLTGc",
  "key30": "4QHKXhznxogGLcc5EHYua8on3gZZSCeosg8MGMggRvjbdVaM6c3dZGs72QwtRJcYXFSTGJVv2cnrsNj9WE77du5W"
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
