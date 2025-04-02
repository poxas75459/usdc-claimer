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
    "5h6FqNBKDvXMBkJKrNiQJrMyBZgfo9gXR7p1JaGNzRGKx5Gfa4zHMYYeaEySnw4vyeHJxk3ZiPUudM26fRU6wBjj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nLTbvnNWeYiHL8VpgjjWYE6UZCff3Bqbb5yWHFDbHrrK9ESBMdEPqHN5YAjKy8JnxYbCk2kkMuntgutbP2B4rFd",
  "key1": "4ncFz7EKnUaHxs3KpRBJPyAZbQUbutzG4KkvaNbJc42v6DaAvEaCqxzroamjQaQDKZPyWW1qDRYT3VZXqDJdLPD2",
  "key2": "JcdvDuFULr97RXuXRty2mwwVdjjcS1EeQMhtWMcdgrZF9Dm77bXJTShAvNcs6Pi58ftFufxNQ4DF9nWuLdaWxg3",
  "key3": "cMoNkdEMCLpC24jBZY9tHK2LvniN1ibPgbkqtrweM4Q8uE5q15kqXE3t6BXGe1Tmsu1SmtBSb4zg3KNYx8AhW6D",
  "key4": "62sBoFUj9stAR5kh6T56GeFQRH7yjRhEv2PmVo8AkSPoZHCQYS45nbFzyVMCGN2uoXJZHsY7U2PSGTaDvjoFjz2Z",
  "key5": "4UgPrHFEcvz5DmCpFDMemZaZP27u5DZSppMcSonBZJXWyN7X9GdhXexz1ZdUMMvs7x3unKcpVkgg5rDYLognCnis",
  "key6": "3buxdPuMwh563eSB6cHzzgqSTNG69D2omBr6feg2mqn9E8HeA844zAVbhx5X2rmhvJWbSN9qKBi2TXkWZvw4EPEU",
  "key7": "4oh8ioXsGTWCNLaugN5pXZD7dtBojP5mtqvFqAeT4XRVjZnY3P9YeALuQutqUJLuZU6FBEEsNJANuEHbMhPnQ5XJ",
  "key8": "26ZMfvvzJmsAXZfrnTj8WTYNKVhYgbvBcCnwi8KrncV25ZFUbbj2QA3qp1szKC2dnJUgh6V8uoCQrX7wmTcqGah4",
  "key9": "3EcqPTALpx36mdYbBfRrbr1kf8DCvuimurTr84oMUmpcf5HjQjdcGnnPh8PMrcCpfHqXZyRdXqhGxb3SxUrEdksc",
  "key10": "3yBmPU6UoR8fEZKMGKvfMSt6HSmF8QSwyqtpwDUcCeHpgsC4vYEXu7eJnukaoNHqdWyfKgpkKYYE89RXH29L5dqd",
  "key11": "rkhKY7vs2NpA5XWhr7MLZb1aqP8SZYY62gR51HuhTrjwEwyivQ9u6bG45uw923DiYv9jo3DDbS9oBtvoq2VFVsy",
  "key12": "3k3JaY6G4dng8DRYpEKGAgERb7dJe5EGKho76xDNiNaBAhRVDnNcjo9ujdT63whsMgeXhJbMGRuSM86VXLr9rdE3",
  "key13": "4nRvL8T5dw9ASVcmsHnQuvmhg2cvAFPHtD4FsyoRRvEP1kSVwTFoRyMENe7z5epqN7soFHxs9aUSkkxNoe94wzXt",
  "key14": "2TZAXbEJGJQaeezDtFmiaZsTikaUZtHDtBiamj5w1jNYsVWWnK6So9PMK6xSn3GDzuQvj6QhTLmgKYVQCPfdUsWb",
  "key15": "5o4CXyMt21FmfhNzaVS3sXrWUFE6Rui6EwHNPDhLwGfK2zLT8Q47JfV48W6qz7BVx17wqqQuGJ2b6Efr1MqAQ62y",
  "key16": "GX9nHkSSxMA87A16P37ZYq3qQKYAojc1htZzcrk9bXign42CaVGSUJXzTVecnhQ57s7FpXDJQf1AL7pqj5CLfye",
  "key17": "3XvWdjZRJsUdMyaiCdjZvAvmUUh8Dzfj884jsScYY7Lu33uM4PPNqNRP95Pd2qjehDJRzt3664BonXXwtX26vr2p",
  "key18": "31kJ2BEiNciFQxk9qzTDGwYkDjPHUctnALmmXjyKEg4Ap99QaHe6SH2BMks8Xgtv8NwbRDR7RckjTwDxDDYYFN3D",
  "key19": "4u6iZuJuegZZUHWuahmwNftok3W6AVGgBBwueKpmPYhKqFpN367caCj45rB2V33yTFtbQdjxauTau9Aof9uHTWGg",
  "key20": "3WxWWYVuZxguHfYHjShmgg9fQPhPCeDapFgSNaB9XuTRVx1wezXUtmptbhA49rxw28DrFxsyVTVa6WQeCGkRoAQe",
  "key21": "bnyEAL48XXTb4RJi5EYzCvmkPnqMQKT7FQ6YXUB6UhJdYDKqiiAcRbYcLZcjRYbH5vYUjasmYrz15619CJRnfyx",
  "key22": "4BjaphqbtabfhC73ps2wfdKX3SaGwV5UHdvLxPXmQtQzs1tfFNqYmPywYqA7nXELJgqF2JXE2r57gjYu3non4sRQ",
  "key23": "Ghn2JKweUioDgy3TmkXSk7t438UCKxMQJq3asWrgCn7vhcGLEgZHe9aXU1zt4WXDez1gxfXhNgAwazwp4Cr94q3",
  "key24": "FQC4Cb3PUWngiAvaSnMVGqD89oMrBtjR15cWuSfprbdDViA4LZWcXsa25zXjfMjt7K1GFD1nk2XBYvaRdBHRM1h",
  "key25": "zMzWnu5AUDVxWhgrBSV4EvocJiq7fZ1YSBTXPUvrUwsyu7v22As7XxicLRTGYw9guMisxyDeg94tdiVSE9XBhG3"
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
