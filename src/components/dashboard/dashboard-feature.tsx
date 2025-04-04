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
    "5hUC5sgYcLvXLNMRNzv6g1tENpDhvm8Qny1eNRagpaSocQj3GdbF7yg8eTruBh9fSZQ7EPM9iF9vsXyjCHpefxB3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D8C6aTGiyRpFEsvbK7euVTDHTRJEiQSfE15cyQBtF3XHmMqGtuCFk1WzLRHeN6EMqmqGb1dqQNttjZJF3m9do8o",
  "key1": "4AzJwD8GHbfNWFHHBqaRKeacJxvscYhsdjgd2M1MbHgNCRJP91EqJXqGUb7BSiRuDC3e9a8Snju2RRey39gYDxHJ",
  "key2": "4QHg34M8W58BhoTN4rS8QGgrgYkHZ5C1we1nxFyzsrDmV4spYdTTjS4XWUhrtKMzqmMZFaBUvXZjbEKHvn2gDUM7",
  "key3": "5xrwCSsRhcD1JUDu7tc64CKDihy6tzDqvRmxx68jmodMgGZnWdXa9xTudAPbUMkAThpqTW7TnPdeunqoaywiskVa",
  "key4": "2N168LvcfTeCE8NuwU2X24csxEcf4Tj3DMzJ3tHxLmwSEcoDwALmbVsjt8aep9fXS1RXbXbK3B3aM4n1BLX4jKXv",
  "key5": "5fvHtVDzCX8K2eMu4cHtee8pP7Y4oogozyoCUvT25cLx5JZGsV4NJ3dMGeLT4PhJmbhPoX83n2HnhXXVrgXWbAqC",
  "key6": "2k5Dqw914n9NhbqXuV2sXFSKxD6ZNwDgWifPQmfWCad58z8KfhNqULJ78iVmD6qhG669q8BKSt4apLYzVGpUEPg2",
  "key7": "4xWWE9EtRVp3CduJevMhcact64rSMq8cocDVP6MQPMnFvG5r5AhmG5E4vqfKnZcm5QWgkqvJASdHWUXuYvEW1KVH",
  "key8": "5qwtBXVj5bbSCJh4qnmc8gRcohQ59PahFQWYK2XDK1CbNHdpDT1qMAZT6NxVcNMZc7QayNhJGRmvxcgkRKZetE83",
  "key9": "3miqLJpJfkz9nap4oD6febSn4jAu1ZMZ9WKro2yzJ7bVoBqLejmF2qfzk7rS9nW6rQcnQKKzuiz4FZxR95Z6Ymsw",
  "key10": "4hmnDUYtyEDadNUdoMfmx3hd4Xehz7s22msQmdLoV5goNUwFjho9vdswnHjKLK9g6UgX6KrHSxPXFC7hAc11woVf",
  "key11": "4ZFDJ5AZe7osr18NEM4fYNaiEgrWxqMxpuTHrXGxcgaJ2pj9zAZHTNWQsePrcBWyvvdkfjPospubfJJHjekpRzJP",
  "key12": "5mLGAUBvFs7yNPpAfCMKuvqTKRujXqBWUMdu4kTtFAz26woq5RTcgkPvhrgJAyWQydiiX9HRRRe9WF8YyvgMeokb",
  "key13": "MYCZjb3qm763bPEpUQRyJ7wpLG2jfYhPZaeLxyLhUf3rYANY86kR7G8X5cTJRZhG42TEPJjvTZ7fC5avG5EHQ9P",
  "key14": "3DNKRTQmosMXGohJKSSPvkAVqGNGqDEa5CNK1gvFXALKXDfsEGd47p45QYYhJQhTMLEK3tiSAy4ZzjXBJzfnnF1K",
  "key15": "3tVUaT8Xw4g1TpSbL3EmXwdrfwHk8XBKp25ww987FEg2yve1La8SXFTiKqNP7j23kp7ZRwsiTyrtCrGLGBN8U4dz",
  "key16": "TAag1NHF4eU6LQf3Q3n6n3zHnRnzrHZk6vXmq9qHmZ1gydAVHmDhS2LBoGGkB85AyskKpcW9Lt3PNTB85y647CR",
  "key17": "278nvEAKhUdktnVDQGHAgP1k2hddQDkDUHZ6fFxNXZYZZwzGHZ5CZFQWqkffCCfWyxE2Jeq36sf4T9ANBfoigq1t",
  "key18": "ARjwpoKoCtNsQFiJv3jh5Vvkn5fJwvWXRpzqEXJGdFyTydSNxr7a19eRn9D1hh9HRUG3cKgLsyVNWvkrDnEwbS7",
  "key19": "5bisJzNmn4giRSq2nvDoHnbm9e528SB3CUza4MCQaLCMqxfkqmXYtsT1YaMStcgDNJVZyP32Ns6Vf3DSMy8yAf3c",
  "key20": "5P91idbuD88ACEuaX72fvpjk5GMFo7jpa4Syp1kiCwiioYhbx8VrHwtmgK3YTsn86fG1mhkJs13KxP6QikKFHGZF",
  "key21": "PcDgSsEoSTik6tMrL9aq5ArD4bupEDHZJrwx4WzHZ2qsrS8ZX5FjjKzYyHMkfwjG3boLFBUyTNvZjy7SUY8yrZB",
  "key22": "XsDcGhsUpnwUh9gTXQ6g1NjNT14mFFBxLtWRDvpF9tBGxZYR3J26vRWvJM4YxB1gbbFbMbFGnJHhVSa4apGkckF",
  "key23": "5Fs4Uueafce712GuPUNUnB8LVP7ZUnfYmrzVnc9yyfe6XLxpkbjE18gPxod1PLp4Q4B65qZRX9S4bY7UCLiKeikr",
  "key24": "4RSN2Cf8ynb44j1MTnsrDSqUvcSwzNMrugmgqpGS6tr2swwyCWPePzaJCKgPY6tLsoV9Qx14n9QAMgp7nGHf5W5m",
  "key25": "5ihiNQS18VJpQWZRnmGLCbe5jgmPqqpQU1gpWNviM3s1y2FbAf2ii25j7MpqMH5mZ6EZunzckyhTkJ7AsV3xdifz",
  "key26": "3dVAV8XDkAzB1Ns2B99yPqJpYmdViGmgAgbkLYXFMZb5AsP8E9K3ffYYGBMhaxk8tV44VjzFXna572eikoteGtDP",
  "key27": "2c9JAD4MXqXK3MPckGe1YmHUf6RnrC3pJf2kDve1kZCYxbv1UvPxikmZjoJUd1bmRUPJ9oxAP5ge1d8kmyWVyd2N",
  "key28": "527LeGUfrmYWMHjirKK2KduDxXV3vALhbNm8htrkYpZE1z1LY5sdypyyUaDo8ufdSjQ5hSi7R6RLBLpVdgqnDPVG",
  "key29": "4kiz6nPHVs6hZDi1i3QvQeDC7P8CcdmnkiZGYRxx6raUmRr14E5YJnjt3XA2cEoQA4cD3ziPD2gLYkb8TxWSpeBp",
  "key30": "4v6b5zFef2wJX218ScF3xXxkKyWq2nKFCYAdYxVMoAWVQE8r4L7WyqJEzuBf5mNdu2NteDkub64ju7AeT6GBprJK",
  "key31": "45WwK8v4eBSBvpQv6vSWRBcLxrAG5HgfWBfSFYYa1JKvviWZVr8iL6fGMMxUrfGJowo35EGCkBwaxWAiUhbjjfoL"
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
