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
    "43GeHdrsPRD8RUCbxCYLLNb5dAKtYgi2WgCB2nZD93EzvXc61JjgNjFLxfqgWLki5Q1jSo9S2S5iQyERbYRWbnRt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iMWpfVK9DQkdb395QmercaGc2Eh9xQYRWqsC6UN3m53EN6a1iVbs2zJCPM7PA8b1JhpkgcmDXXwyWbtbawEzunW",
  "key1": "PiXm3K8fJPUPAb9ptu8XRftHQTfmbozUS81D3tHNmhpJPg17pHQREeX6yrkJB2ZcfwKyqDd3AVBygdgvct5Mz4m",
  "key2": "58JxxDCGXJ7xNqyLw7SxiThX7d9CYEfL8kFKYG2kR7NeWfb5smYjHRSRLFTnHt2tJCkJFsqV4JAnFDuSZ1u97eWr",
  "key3": "5L8rKQnT2Fq7bTh9YgSqzhvefbXcjh5RkGWCd2D39m3nDqH7QpTrymHZhu4RTCP21XpysSXfBZ32pakt7MkXzS4y",
  "key4": "3B4kKryLjBNbuCXjCB6angxvDXJ7W57sarYdfqf5eoDXSTBryNmNZG3hoyPycD6k9sSxVND5FHfo1V19bFcjM5PV",
  "key5": "2ec9cBTJTMPJ1CumxRD2GyCYRVbaucXXt7dgRX2d8CmBaXwiUJPCKYfqcjDdhKnRoRN9TcNRjryEhgLyb6Xg2skq",
  "key6": "2ziUFZW1mDxKsWauk1yeXdUvrJVvJRMFgaTTxwmrKdtm8Ut4fpTirdJXx7DdnMVVdovJLRPhSsXffKWH1xTkHV1t",
  "key7": "4RVHxbXF6DEZxdjKqmjGqDeSPmMtU7ZYiC22RN1jJ73bcbFKM5FkirtpCrF3ZESnAXtVwD4PPuR6gUCvFPhhtgni",
  "key8": "2qG732mCMtdxunNK79873J3BnzwyUu7AV2RoCh47KiNiXfXShzJFVh8uWL8gPXQkriVvcRNMepHsFPCitewzwczW",
  "key9": "51VUV9sSForhzJP2bRrM9yhPYWYRfUdJJTsqTMzoojQvvoo6ZXCAXaDe2ueJkUYi7BhPkVrcwZHLrXsHAo7PQ8yN",
  "key10": "54u5onkXVsPDVWwbuf3iffdqp7defi12TUKSr5kLJinPkr5VgB6uSvw4sCs3uj6uY49kwHpnsmeLU1wS5wgcufEe",
  "key11": "4SVQg6oHbtUXeTVtcMSdqj2UYpcttrajSXXEmuPoLTPXjQQDbG4v38ZxCyW6785ruegbuFCxWRHZR2xTubnnskGT",
  "key12": "3m62pmvBsqBRv3HVTHpMa2gU5ZZbSqkrNx9wARDdrQB5Y3FBsLFswDqq3sbPjj5iZ5z5hNZyvyABYmrVVi6LyjSs",
  "key13": "4dyshgfzM1Fsq5nhqTPuYnJ1SAncfryKPik1mx74UME45UnxaW1uJyxBceweFJqqugtwHXGb4ArPkDcDG5oaVf3",
  "key14": "64PytnDaoCxGGYnMvj3dExRfTyuyU9EFaYCF9G4E5B6mv3ysUTshf4astuonmb5e1DPLyJ2amKAcpXbR5CHqHYa3",
  "key15": "4kHRoBgcMHSoyAi19xWW1A2i7yvU4KwiJ1pv1iSkfWg7vyUXz4En7UBWUsierKY7JinrwRoa1kqSoxVBv5WSeX7C",
  "key16": "4HR7fDNYAfYLEeCBP2GzhZ3Z7LbwYnyh5cVjKeBB6pp7nXFrmHPSMzitP8gpbCHT8gqS4sBNZ3LduQECXhtXtB7v",
  "key17": "5ch4UuoJ1wopSKwvNEZ93WDui7MavgJ1aNf4v1asT9U9CBnAXvEs5wB6NwYyW1zoVtpYSnteaCBSTZrBkPwRbJE9",
  "key18": "GzYtdsPPBmc9LrKo8bJS5gpagyN2LE8Sjr6gBcZHM2GUrmp91NTmVyRjB7tyvtsfcXfTaY3PgYdAZSdDHibBDWW",
  "key19": "5pRBTotUWQTmr2x8THogy8St4NDELxGQQqwh31Lg9gH9SneFp4qYJBFn5bUVQwkCgGg1kq1MfLXrkYX1sEpmg6pT",
  "key20": "qAmipyQSmjNmAT7JQHCW4FbaH9koXTNHRRLounrDSzZC2TgCe71cs4VfSYHdKLsQw1My52chb5ymMscswxUDkh2",
  "key21": "4QcvVxVT99HdQTdshAxhBf2KzquofhFX9otGx2wFSn9KneaK2H15FWaGHAjhEMSD1zf4q7VjYSgiWdRZf7cftp3m",
  "key22": "MtA6xsMWFxqqAaHQK39icrGCdpDvZA14saXmCX2Z5nWCYWn8YJU6ab31oRkjEJ9xQfWdUM4ziYVSKoXz8F4aQw5",
  "key23": "46RhM9YgCGvk2hUcVa421QyFw76535XwUeE99rSD5qdVvsGTFi8T2c1nNVSsPyHVY3c3KfZUgvuZw1vs9KkFEDxt",
  "key24": "2GSyttBFTny8vSyWr6GYi67M8KACxALsXLG6EFutog9jspD7CRUfTBbtkYYFeTpkM9MmXXex47CNKeQbXqugT3G2",
  "key25": "g3DzFzqWSrUhTpsS7vGJmWpo61aX9LFhqmv2h3TB1g5iE864k7Wg7d6CSoKP2CuZ4Zs63B5VMoPMG1niWafYXNj",
  "key26": "3kE3mtH8QEpUPqHNqUwx6NcxeGbgVu6mLbunPPNjfvDThNDNwojhWRrNfJj2MdpWbXiwfPzN8eRFKxYuznJowDab",
  "key27": "3P73oZRfxAchDE6ihBxra9sRUhzS241qyUXf2e2TjEREiGymKztppytXgvqaqLro4AfGaF9pHYzpQw34b6rkXGUQ",
  "key28": "VbgVnuUBvoUmpnoL1rY1HYpx1rnbbcSECGfooNd5DmurA69ZrRoGJ4PyoLnkx9MPJZQBk5sdjijQMsr93anhp2j",
  "key29": "66jKHMmGKucXVsXoEKE45uMioXiHiy1EWHnCv5yY3BzSyxBRyrWnUxUGpABsN6orn2mGcovnhPSsYFM3MczqH7ny",
  "key30": "4grddCJXcgYmQmKD3XxFMB7dWSnJmLfPNCBT9gs2CiRhTdibppkvN6D9wVQZ2aBP5BqESk4yYzY5Yrq6j42Tb1Q5",
  "key31": "3sDCmjS7wjuZQgDVcrcPHbWwuqiHZJNQX1JCekEka9wPaCPUTuW7tzdB7NZ5LStGdNfiUeuKDCPvwr6vEbm1zQsX",
  "key32": "4dVy6cg1bX76jTS4K2ziv6pDdenP8Kffc6ebPkqYZ9VpncEDy3hZjsem5TiZsx6jkoWrREgKH8rWHwkYugdJdfct",
  "key33": "3NdbsnubvjEkSqE8B2DDaDg7vQ6v6teRXGNJGbTXdjumv2Bf81HW8TE6F2mJN6KoNRJJgESz6JBY2QfUhmkiz7VU",
  "key34": "4ESzDii6fgv1zHgxEcC4N4PWRbBPhQzjRsgJmUBhw6HtW1yiFG4Dp7UEakx6U73jmPdiGREb2oBYeYBovxMUtmhj",
  "key35": "8UoSbTL6wdNkgMP1JEEiiXwTFUGsZg4PMW5Ef3EexoiKw7Dip5BobvWJhRUUjZoTaNEdmgVJQCcQ6UY9fh5aQpe"
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
