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
    "5ojT1SD8KT8FKMFRQgLqtUCRuEKvbKvNnHXn5mAUALHMMC1Rf3mKN85Naoir9D2A3WZFp61wLNw6LZ9gSehEK43o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3obCcmcmNrBKgVPjT1Rk6aAwiJrghDmjzaCNAhVHz2wwhnCPWHjPkvmrMWZrUEQpA3T1VYuaBJyjxDX43s64QR8K",
  "key1": "4BqUY1T3Yna8xKCrkSWdQe7UZNomGwg6qa8WL49NSdYtJGUGZwzP2sBzim2ZtU7Qq2Yfr1XCtExjM2ngLW9DQRUU",
  "key2": "5fPutsSYqKJy7oR7WVmqDmc3xi9cpkKUKFsuGLDw6V871mnEga22jmFF6MBH9vJEctXa86yhe12qsJVJyN5r9Rhv",
  "key3": "21Ko3uroDEimi9bQfMnUoLr5a3piGtFqfYAfKEfhaAwETDZA4dsHYXfutBWjGzoFv2mgyGRt4RorBBcetabpyFYd",
  "key4": "52KMthZegkxa5QgrGCp9qQ4XT4QHhEs9sriqfwnpNt6rQUUACbGiynjCQqX3T4rLh252JvvX9Zu6aUqp7o6acg3R",
  "key5": "4zAmT6CAnJeM6RPYbmMWpjYssmuYBDAecGtw68AeyPWZd6RJUVACobEf2PEe2BYad5uNM5oMJEewC3zoMEvdioWq",
  "key6": "3Zg5SRgoupkRiwssouahcQHwCYAkybjBngNqGFGzb6zV7TskNt82TanvEkmzHvx8XT6y6oPXj8C7DuM6fzFm7FzG",
  "key7": "5xpgPk1nAyTKNThurdbeqZhxwwuWADLMmpfMAwUmPZVqFrpoK8T5A85wc6jFBSwSR5U2wAy74hZLJbShxFpdfCmd",
  "key8": "2ZqVQCLtQuVDdr2ovpwDT4WcJsw7s894z5f2JWqc3KNriSZt5SDNKGUDQCD7f2LNjfYZGRUrd48GB1uBZY8jUJH4",
  "key9": "35P3jtSkR6VPxf4UmMxWZPGoVUpGd3xuemPLwNH4pEwF3JuREPFuwJya4fjjuCJcFdhfhAdFMuh7iuZ68agpZ2ig",
  "key10": "MmCYmWR5ZLG51XW9uFpxNMwLyJJQLHQy9atcovS1NSxqZrCFSUNPtq9RShaSRPEJhUeGcm51C3PmkJkpwCyFUhD",
  "key11": "4qGEQRs63DzPGX1W4urP9RnCoG9bAfqpYAVowz3k3YFU41e6jtVGVjuLPR3QTSCGFmUu8B5JxpwvZ1x9mLfCc9CG",
  "key12": "3vaXUSkR9Lz22deRQtZZbuXoQrmmQ1QH4JZvVZhdF6Ye8Nery1cL9HifPPCd8LgEV7hRtBKad7zauEDcZHeLF6VK",
  "key13": "468uwVQdHsaFgUcks2hhwkDagYPKijnqcXAXQoSw5meUgg5xpzFzFqAta1d3qXJ9LEmBTE1of9w1upF5rpDdBXQS",
  "key14": "5NeXdVJjcjTf28fSFgwWJNPQWZQ9h1ggtpf1hHwmpjCzu1Y3muuj6555pzo3aqztA5pzhBa2fHgpnfbFmqFi17d4",
  "key15": "RdtkrTxFB9wSynC2j1hmpzgPEhTSChbmyEi8EYNrnseLDTz25rtQJQEq8UVEywDmcsSHXnP1s9yd6JJXJKLgiyH",
  "key16": "2mHqCa2zXyR5vmHns4qWGY6RpDU7uzNa9akpm5emtjwoJCURdG3DMTzojdxTJi8z5hZ27iZrJ391XGfogAr6xe4z",
  "key17": "4Gu5AGxET2Fb2quLyQDNrZKhL3dLvWe2ynUbrXgEzka8DfhK9QGSfjDBJXsRAhXYZ9aY6vbSemCBzYVXBeXhk3G6",
  "key18": "4FzQfAREcDNiFKpBXJS4bTNDyKJR6PxGtMKrVB696qEMuqWvuwDHZXj63bAVd6hAZEhUkgArXNNjTbcpmQhwoEu4",
  "key19": "9W44tYxWuJWpG2fygGF2JirewoAYmLbrhxzVq3bd3wFM1L2Xv8viEFMhhNfbwPkz3UWop76XKBRSvqLCF5e7RzJ",
  "key20": "2aQinHfu897c7F6b3jA2WUtCuWnHFAhsGCrScXRppEv54Us2qnEZGkfLQt7S3xxsKQbLLDjYbCSwqdoqLKZfizQe",
  "key21": "4u2cc9fxinGWDSqtxgvqyyiByGtYiZcHbNQty3XwFD7Vn3Nb7owZbCN6Tx9y3WU8SCFDGqSHUasXLfoVvUnXAVbW",
  "key22": "4tjkuisANus6AirixkBkWUK9NNvBUKkuetTEnKtXth9ViD4ZVpa2QZM7J3UiaASf6ZmHaDpyJ4V6kJvG7r9FzY5v",
  "key23": "5viUJykr5MCF7eYbXwf9Tt5Ln9CGvKVFoHzmWmva4mWYtaw7GYywwC2BvKV745vFbJ5biYYJURF6U9dDhcnGaKRf",
  "key24": "2AWNtXNujoAbdfBM5hRuhv9dwAkw9RU6NzAoL1AB97FcHarkSEQaXD9hd9wKaMucbToYfbpmJUVBarvAPZPAaLJw",
  "key25": "GnoEofvFVT47AKoHxoDgPSeGBmNibmgUkYWMHGM7F3tAuzUm1MhgozrmHVdXrdxCFa9vqv8bGmjHz3cheMqtL4X",
  "key26": "4n2stV1HgRtgt2ibAYGvjD9nfAmnQWs6Vw3q29uCDFf5uX4BuJF5KXF89SC938Dsi2WZACJ7gxbH5NAu6j5yhnRZ",
  "key27": "46ZT4UjZUbfksZ8vdXgTxXMbZm3nUL4nRc8ZAe3MCm2XycUUqyXgjZwN4GEEEaaWeCZTNdScgRN78ZELr7XTsnR8",
  "key28": "stHsWE5jwZB2ZNejRAdmXjyj7iX8TZJkE2kQ81obcyHVrCF9GcX56subsWUUGcYNCZfatr4aiSBQ9qLxCbLKGKt",
  "key29": "5kAH5sNcP3Q2J8ZABCtU4ZFiosPwMn4esMDpqUcYYpXkEJvKDwTtQTTgd74UQacgJDpq6mUhfQA2uvoVtXaWJFMx",
  "key30": "3fV93VzXCfESxxsUyWD7VjqsiVhsYYcqPUm5Y5YzKk87zRLcvbtBX2pScSxzTKh7AXg66b7AQuh1VaPCjUJEM1Ap",
  "key31": "5mHiZYFE87pomywYaqY2NC8BQTiPCgd4L1RJcpB1xrnZL8qG1HBSbdsneSk35Eh3he1RBDd84t1u93JEiqpJX1k1",
  "key32": "2NvjjDo8smMswdmrVB9P5sQjwTwnj9QDP6K3ryuqPYEbNun5AwX59eHwMeoBM71svWKhtgGDGhKeUCXheTc7Pyye",
  "key33": "61jNJ3AjyboF3HjVfkcR6NoB5NimHPWZKSD2FzvVs1kAA3KNqY9x89a3pP4R69wCuvm47iU4t6uEunriWnqNkT1b",
  "key34": "22yBGJpfXE8TPJS393rdddoebiwKpaDN2ehN7vYj8WPa1f6Ws9SuepMBruPzSyKLDjFhNAdvpbtkH2w2NdmTBibU",
  "key35": "4xaKJaS5HE2sMqHDvySFtfnYPXC2fUpwfAGpjBvgy4Vu9BFkyixva5ftmc1BwfcmNLLPP2MqbJJtNxofPVJGxdL1"
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
