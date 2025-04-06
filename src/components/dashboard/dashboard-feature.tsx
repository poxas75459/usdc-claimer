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
    "TJ2EPBSYp4TU5VksMLDbCSTfvRZxsg4zvVjxzu6H6b2Zkh1Fb5bqR9Et8nCkSaHN9T5sJUgnM7MK1DjaNzRw8KQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ucK62LbD2xXZpyvMHFnBSZyqcNxTgvJAiLvBKG34ixs7DMm6cue17AXAuVtDVF8woixUnyXYq2vaFQHcc3UgoMT",
  "key1": "37yzSrKWyZFNdvNS9ZCKCbQbD7xihk4vY7T1Xj4pz1qXpMhZSUdrhBUGUohgZ8Q3LjFQhL1d1NnKnDGx2GNS1BvJ",
  "key2": "317gUM22MeNFrMByuT6RkPTUqXUbgiC88hACYFWPnVcwkSqg9k1E1RrnAGdYTzorAeNPsNG1sWfiJACU59Hgdycb",
  "key3": "7PdBPVoLyyyF2LDJBCmKoWsqpaR9wGJbzz4bEpZ69hPSt4aRaDR6vMSMYphGjjkNq71PXECUxtUViBGS1Szgb9G",
  "key4": "3HYU9Gkchq97w26teHoa1AM33CFWR2W5VqRH8TCATRt16mZYBsnKtY5x3KPfCi18i3thCid4Z8CmWE6zFcN77ieo",
  "key5": "3XYggp9u4o8beNsxPC88jCJvaANsdvjJoVeUnWh2vgGnEbjSjjFzFqWYsqxaPXffCUApNxKrfbTqaiXN9Hco7Ta8",
  "key6": "4zmdWJKvwJFf1he3Jvvagerk4QrBpWXEqEbb7HCjLSoz4Ki621mGxiRnrPyyUP7ovUBdNEVAwguZmkgeLTsSsD3X",
  "key7": "2CYDCdGMwfY7YBvviT5761yidr1RyiLEANqMudjQKzBDBVVRWNVFBCca8Xwyig9guJzFxjynMdnQusWdwvadTFCq",
  "key8": "2ksabkQzWpj3znCXe564EU51vGWTRKuUdbuSo8KoU2aZ5SJgMEEhCKAnh6NuwxQ9eJQXMucfQnoVxjZmvhNay1c4",
  "key9": "2GnaRMXKi5vCuVukNcbFPX6u3dsWVPNoohzt1hqkiqERZCpJfXoWFd8vKzUp23TuHVhgjgj6DNtbvL5R5jSByZKm",
  "key10": "4pVGdnkYnii7RqAbLax6wRuMVPUcHdKJGXq5SrpJbcjhM3FZYhKvTjbMN43XUximrdz5GYn21k8G17VJsqMkRHT",
  "key11": "2uzB1BHossoiLRZhvxchStnWvmFks2TwekqoXuwoUEeLCAxvHSvRJ9C7HmXCNW11YrXrtLhj33vyzVG6dZJ8HY6t",
  "key12": "VN5i3PY7iCqixnsGn3LXNHNUNXaAdZW7q7ovN3JgxJwHhhR6W3r8adZBphRNy9U1aedTFmaVYuDqSu73VqDTXmS",
  "key13": "3UYUY4T4sHA8NguCkfcSitTZheyjToLpBNfrPviSCm7oBXEm8byu6Bw4TanBBCrCJzyQnW9zBMqCi3hMpze6o2Mh",
  "key14": "5am9VC3Gco7pvTzNMaZG363PF1LZm168nysVwXYYqk17hGS2fnYDGfPjvEz1eEbpQffccXYoUDmGgFV4Cfr8BT1B",
  "key15": "4HphEBfXt8Y4NtjPxFVjAYddgLNVNAo94NPExgFWnPqQCQ5JeLKuzgcVQAC3zrfyzcykH99SPRfXUydG24oYg3ur",
  "key16": "3eZATegnQK9iCk1XTaEKR7F4vJXVgsBhcJWZxtH4T9ftUk1VtJzcCcMwCam9F797Ay19CVGhYbb6cA297REvGb7t",
  "key17": "5ChiEEjajjXWt98x6p7TqhPURW8aoo9o1CSjpNJovtsvoS42urRNZNsdrsYxvFhhcQHdgoUGyPeLf73hwTE117dF",
  "key18": "3i6TBi8yPsEgFvBoAdWXwRUY6FHGVJQqsNxiDuCK2yZAFm7riBDd8cvB3Dbtc9frNcp3jQdncGmSqpGtKWBkjHgm",
  "key19": "GM53YAV9EjkRdjArNShQF5uxk377DFchv5MGQQ747D31bqFrC8Waum7VRwSrqtHYSVUoxU6EukDy9wJKxHGw5am",
  "key20": "TxEu7b1rJpQXDJQbeb6kGmvMw32NRSUKiTTojsi9bdPaPEYEY2VoAp8qnSySzGv73xYDyiH937z93yg8uPkQk5j",
  "key21": "5DiReJsbhLpT8hvoVwZy3pJaW3UQbxcdL8WLKyigxaE53wtneUAm5xeDFNEAU5aYsL2ss49WHpY8Bdd1pYMRNmmf",
  "key22": "2NWq6M6DMbQ9rKCQPPnPFuUCALsLS898sGTmbmcPVAYZHt9FxQKUQNZVr8mMuJ3XkAyyy8wr4UfoZgBT1AYqEx6d",
  "key23": "2Zi4ZoLkyYywgH1EWWw76o1HD5QkBzhoaoiie9QB31vwSgNjKxAMbau44ekpDneBH28ytF5hdQR3EQdeYx8eAwAx",
  "key24": "2ASXYnf55NnBSDGHdyoTpqg2BE1d3YNHMhcWvtrpAkh33hpeRS4nUDKtjrbVSPKtkxmDYajgN2woxGJ9Mdrgn7XY",
  "key25": "2UwMnXvV5FcarMCQP6c18En7BzAgPvazj5JG13dZQ9HwTkKhFr9pAaASjMEntTREKUa6JoJrcZPzQV9AySPbTx6v",
  "key26": "5iEfNGufGs68jK7aRvrTLCPDPZmgdF89PfwQsxokBxQ5SCLWa1uwvJ4GBVyo6NLhYBJA5zH4NnB474q3V6ciKeCr",
  "key27": "5wnXFz4jTvGhKRFBY6KsegrtQwP56pqwjxHjmdaEsDnkHPdNVtztSnMKiLrrcnv4J1XnMU9uqaWKgxwBszLZ8kR5",
  "key28": "3uGTZxpacjXAgweApDsVRuHunDgKi2nqrWq4cyB8smaSPG9GvtWStDHa6u58y5mB8HufCpmtmwv6X1NDQg6XkAy6",
  "key29": "3j8kGSjT6VLmyFPZVVPxnEyVKC1f2eGDVbLfGx9a8oDdiyEua2zTWKteUPJEp5bNFEdLETsRVRtu2UaJUnG7Ad6X",
  "key30": "4CnFQ1ps6BkKGNhXme9w8fYy6EUzzRPSJFvADyQwn7SE6dRreS7SyEuB6Co1RWa4BWWJDQs2jTxBfhdG7zCRbp1u",
  "key31": "LVSr7mRAgxvGHGtimXjHWBEaW4CfhPpFWY1oodNfJXj2dt57i98B5Zrt9of8TBKW6wPv3hKWdpv89WU6H8yCxmh",
  "key32": "3amJCBukiB2T9herPX9PeQQ4JnT9R1BAG28fbQMx4qQxcHcUsytYNtfcoyWNQP5wgM8c4FnRNCwCa84bkUykwStB",
  "key33": "2jp5Sbbo1WZHkgF67BoJo9tJMwvUogUJHjcEi6LjSWMTL4VSx6oibWy8BbCthzLyGBqKzdGs1aDMPozmYuxCYDPn",
  "key34": "32FWa288SL448qQUPWL4shhFsiUEH5oPCwRYnDWgSXR6tR8fHXmYTFSWU2ycTcPf4ebi5HksQT4AaYJmiY2cVR5A",
  "key35": "2gVNv9p7HY3zX1KYPpbGsWFc2VziebjX3SFbFV9M5f131DFjeAGE4EmbqKmiM3R4qKKWYc1TrhPYrwTMFwyrDUyp",
  "key36": "5bh3EL4BXbcyuEpacM9NEZH5BUYdsWLjgXWUCVMR6YshvEePPgHMhWWH3gxmUrrL1q3fHAM7ZB24XrPs2NHjGmtq",
  "key37": "5cy9XrDHaW99PAHKp9S2iCfEAWKkownbEwbfgAvvqYrRb1wHeCCFzXv2aCUMvyQ8YzcF57xSYj4JSid1ocRFcLEN",
  "key38": "4fjw7W4fW67d5xTh2CvxRD5ycN5ic7CnBSredueY6ZySFWVVmL869QcmLKzQ8wYGrBXr7inxm5d6iF5hEnJj6wUq",
  "key39": "DS1Sh5jfHvZf8Ju6THfeguFyuyyJtdafqXQfHBVzrEyLWftNkyeB89zQ5QLBLTVqMfGmP4yjNWRkF1vVEbh88yj",
  "key40": "5ZNjAeKzYEXUSAuLPEUMRKkUyLnS85tjVCJoEzq9ew9vLWLzmbTk7T86gmQxXCauyod2N5xk18iTbhRjYy7bEXYw",
  "key41": "4TQJ6SwHbaT7S5Qqa4jbE1miVc7QswqDwzZjHStmypPaeSvLZoCgfeGePgqvjku27fx349zzEeS2i7uq9mLWXMrM"
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
