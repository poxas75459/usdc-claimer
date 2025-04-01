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
    "424CT7NUFoaPBcoVXv9StdsoznU4eb3yK27UUkQ7UgVhyZELBg7mBHuxS8LsKvJb7RdDXRmx28gD6jVu5YY1SPCh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fkP7J4actpivGPCBtvgvjNAvSevUok6Ansf4C9obgxompAsXPEN3ssRfQp3t3oBZ9zZfDwwSWDTJ4LejwgqEBSX",
  "key1": "5x1ds6KrhxMgRwTgMyFyhvAQXA2HMWv1pxdKe8dmZ8eg2vCsBakgX2yuUDZQfsdW76rQmTH5XQRyTSP3udcfu7gE",
  "key2": "45VqwJs3GDUkxAVzFym9zFiuYXpjqE1aubUUFurBHpRJVgGNvCnLgTAvp1qXdoxMoCsvZJXsJYxLanqPXC63XcGK",
  "key3": "4iUmyPp2829C7ByP6xVbfcMgNjWQbJZRzAJVwLPTfavFEszoCbBUgYKQcufNY2iG2qW4LD7C4Nk1YtqyGCHm4eSE",
  "key4": "upCBVPnbU6rQ13SJhFgvArVVuD5xP2hRxHVi8BEswbGnhQev9m3xYjUWnoDnZEdA3JcHRiKRUHuWogBdhGYiGN6",
  "key5": "4V5jWi7EBe97RGd1PVhDMMTJ2SU8NJMkQQGkxwKCnmokzMjonDfnbY5EuiVpT8qk1MXiYCPU8yxtgSPo5TX5fQNK",
  "key6": "2mNgaGegXPra9EE9mMGg7NQwiXMKRfrH8REdBvZKEEpJhvGrr8Fjt6kVHzeNPz7zNxePEDGowF9uaLUyZdKMtTDD",
  "key7": "vmBNkrjLv8cFoaxXR1kWzJyPvvGdpotKyJzPoEgPtAtjRieNiuWmT8NAuWoyQdYTjVaHBogDCUMPpPWF3wZJJXs",
  "key8": "5pQJ8GKJyVgN4Fqhj6yCpyf2BBuGzTkUdMzymqP9otUjEnsCnKqJQFRoHoTS7CAZivM3nN1YkNiw4mfKRo6WX4qG",
  "key9": "2EJ7VjR8jb9ZSBCRbQDnpEjQpDcdmQGf2P1PtzyvYZUQppcWz1h82fKCwqVDhpbqs2TGbdzNrSAk5EZgq9UKiftY",
  "key10": "jzfp7Cx3Z4aQLrStf7HQfH1tB9QvKhtBDNn85ke3n2nbNZb91GqaQjGjZkxogSiFm81rmgxGR63UgGV2JygamoW",
  "key11": "48NCNo7YVUKGRSJtkwtnoY7T6GNAbUkN1FecC4iqMcmR5ZFBQtKsfmC5Ep82xqZx8VifMjTt4Mio9CCxPAiMHcAL",
  "key12": "2F4FzhNim3qFTj8D327Mz74GqpjTDExPf9wUdPhJjZZe1nUYwrMBh2HXamRqvWsmaiXovueUCeqJcnvEUCheGE6P",
  "key13": "3SQWXoRd7amL4rYfjhEg6vNycbTrWCPQGv4P1eGyDkyFvqZmm9SzrXuk1osDxcRwuMXXfzt2N254qTuKLUeqaSwV",
  "key14": "2PwW2Ew8kL45f8feDbg9hxpRkUhmLsnYZ5PAKpvbyRo48gsuNPF87NPU9HYGRjX3JK9MnEayhARvvLpAdsAsPNk1",
  "key15": "4rPTopN4qLxRFgkrnm6undRFAD6HSamMBFAxuNLxbmht13rkesa4vYP1CqNRE5Dscji7mZYp2HxgGd8aMEbzWwHU",
  "key16": "otSrP9CYLj93YxiH6sezihGGPRb7hHmzceVhBuz5JfHfGLbnUoqFJdeQP76nqTNqFdFz43Tf1pcMV62gGNfbciZ",
  "key17": "56jUmBT5phCmHdQY1hFWuVsG4svaVjYSMWRjUrNDyVfiPdVvQ2yYturQQk4cDJpcytJyGte2EQkN8oj12z5BdriW",
  "key18": "4fDpPFwyLXYbgFMUn1KkJPTZkq7TdQFVKMeJoMrw8rcBzpGTQBazV9nCqSCdQrKHhDvgoZnyx3ifsB41p5UchaR",
  "key19": "41NhdGCvu4eL92Ey562GobqYQMGM7spuXc8QEfRYUCYjEw3PCDE7USSPFQCNtcN7WkktZ7xbJUgxqsc2HYjcEtDj",
  "key20": "5HF8pozkMbkSbRneKJw5uR53QeXpfvtnDTM38TVkv1cG5gp5n692g7NfbYKfkDvx17ja1spuyzUJXHNTEkusp6gJ",
  "key21": "4DAR3XEEZpq8P8CTfRuuvp5yiqQUv4kiHNettdJzhNZH5BZ9S8iiZ8K1oERL2E4iZ3Rven157bgMN6bxFsiL1PFa",
  "key22": "1g54mTtNhbbuGRrwctUsZx9Mk88BQHQyZSemyuAUiqFNyHTFxaWGHCUoyC721DcrBgqe91PYUugc65YcF3DBigh",
  "key23": "4zraewi8PamjVdtEkVyVs2Yh9du3A6rwNj2XkE5LtN7vFKDhmJcbPvQxQKekHfeQihKiDtKiwhnNiDVBhQ2Zn1KN",
  "key24": "iU4f4mneDNfU1WBNApCwyaJ86arrWeyTYCK948QnRLme1ENJ2mxJeAcTMmkgokGBjP59EZA8vas4sHiGA5jEEUn",
  "key25": "9ZbQZxTYb1BCWqs82h8Y7jP5NME3gerLcfDa8kzPwHVx8EsZUJzFSpgJwsPD18YRzeT1CwXFJNWnfoKV8JyvSgE"
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
