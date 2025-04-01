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
    "8DLPgDqqxJSn2Tfi324zkDcwWfcLY5NzjY2VqQH2dWxZsZEfXQBu7mZ2MUAPLBuGtd4jjDmNoN8fEycLD5KQAvB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wrh8P6jpy8WfYYd6cDYAfqBhQjbCfmBHVXK6wbiE6b5NS4gFnAsuncJcGGDmgBRJQ6x2paiFsjbQZDKxBrHQb3A",
  "key1": "4zJSYDb5VcNqe8eRYJiuzF296hAvsUeRaoXzVfwWCDQVG3s2ryRf9yuFsUNeSWXX7ATX3DdtyCJH9bZERUQsAA1f",
  "key2": "58T3SCFuuKpzc8AfpouF2pJbAcmapSPESvk87AbMhj8SpTRPv58dMsWxHd87nQmvPG5tjrzMmvAEeTAYbiPZHDKZ",
  "key3": "128F4tAMGE8DefQotQnVjdZZf1suMcowhZ7wsWF2emR5AG1Fn9BCxn7Xgfp3X7htbMQMspj798usSveMzqPLespR",
  "key4": "32YmxJYWNJqmrcAWRJWHCVyHnSHbCp36MRKFp1kmt8MyXwp1nNfsM4tns581q9P6N2sZzdasuN3Bufp9JgEyxgDL",
  "key5": "2prcjFKJFj3oW5ncrwVpVxSPPNkMU5wBXKUSV5zxqxgEyp1GLz896xUbJLUCtaHJogGQhkX5AT47J2ir1Y9UK8V8",
  "key6": "gGNqsHgMYM3AbMG7FqxTzgXww12uPw6iqQqd36bp7RpnZJ2okdbntuu6jPRinJxnKNDsh1QzeBtqvC4F3FwcKfV",
  "key7": "22dgyhvcfRCb19WBy88iprkfxS9Q13wNLfCRAnZHx1d6wiQ4qjA776AHes5jwG5zZWT3H7CF24jUDvsoGwTq5AfW",
  "key8": "2FHSa4SDTcYnMguCeEki4EZXhLcqDJcy3AMFWuXLHG7hjue2SZiNQENbeTmVVRX6LJCZHGCwpZxmyQW5zjxJiieK",
  "key9": "3hLnAG7AzAN8R7Zc9qsvEuQGcWAPe95UbStn5eXA44CjDmyv9GKrU2YcttqiB46F2RPamqSWjDQMthebnuDCJpgZ",
  "key10": "2rNsLuVHeuV8Qj3iAax3sBL5qMk9bo5fzNHt9VbWdGqWScx5MvhoPg1v5kAhoU41SSEAByDD2zyDFoS2x5Ri9rma",
  "key11": "3igtfyqSBMFpHqRUoxLp6rcnBicpRK5SX8wQDqwVFEBHcx5rarMMpZEXR19bMEi3WowoomagnCfMjEr8mjHWQvx8",
  "key12": "5ebnB9tPXUEW6oEMpVUTHg8gzxytgUVjx79EDWEDRav3PBmy8QhDh2FjyXSYKhqvRpzxayQg2CM3NRc6e7zuL3PT",
  "key13": "5DDQGjdfwPuexAb2czocgQeDZbNEAd3pNpk1SBiQkDCJHZc6XDKq9vHsvqVFgJUYBLJNe4M9V3r4oMmkLEZ13vno",
  "key14": "4KhgG7x4SRFC5rLLeFGqpNT2n6BNEQWtFdWKnxnWrkDpHZntRGe2DD3WiJLqY4Y65sjxxQogjwu8ptLvdErnvVT9",
  "key15": "4UExDvZU7Qy8Yd2KqQRHtgxCZnZwccLaZCDkvXVmXoZ8ZJ5AY7fPKrTpr7Cu58jYFXd8JAz7xTNdNefUyXnXJsLc",
  "key16": "8it9VmJdakNzPDUS4LTDpYydCZeb4KoqnJmwSpfLt6G2xvgT2yqQqCbZgh1rPqJCxDUqyaAndEmRnrFuLpjaUrc",
  "key17": "4M7YSxA1b1CKiL4vHKQafET7Ghs7UYMozAFcEZMRTQxTU6819x6o9LmwNuvXg5KJbAQU3bY2Zp55RUdnDZYwx1oa",
  "key18": "64cqjQuAWzowRY4v9GqcVcHP34JeNUEatz35CX2fFoV4DJCeq8KCAYYLukrnP9gmZ7fhTPRQp34MwJQVx1Um97c6",
  "key19": "4ZDVswb3P8t98XeJH42VUFYa98oX3ziETHtYgsG8FpkArfKaxFBvykFzLss4Ss3KN4CTDtSPCeokysCdoBhtqPYg",
  "key20": "3ncgXW6rtdGxTx3dVhwcgohY7BaNrLsgtmiReFNuucn7ZLxjUT4UuCQHyJrQDi85pPNYVqSsukuQyNwATLT4Jzib",
  "key21": "4PMCh9DKETEiSWyKDWSvGQ8AB3qBPDBq5qiU36sXsGLpBjukpXrgS9xVJLC1nNBTi6VEhPeTwKtw2ezneU9pQhvz",
  "key22": "HuFLR7v2spzVqVQauG95rWRSmW7Hrram6q957c3xP5eLisWe3BNYoyJtNNPuKXaFAkcNtJhgJmy8ZEA8vkfJh45",
  "key23": "uH1rzcPNAZWoda781hif9aALbccS1QdhdGmcLULjp8PF3kXzgAsy4wQQk9RbzgDsWsL67wUZ9nW2UdXQgLstCbz",
  "key24": "4W2TDteKhjbFcnTkFsHAeZhzE1Q6ZnVVSxTej9B4FFQsCezCvGd6fPy95byKsVScQi9C1B83k38mufThTBVaqTuv",
  "key25": "49B8JMeps7LyrLBqBhPDwcghRx2wCELM7TR9hJijX9im7HREuGKo9HaMnhaXJuXJY4n3XiXJQiJ48UgSj3ebxCKX",
  "key26": "4FHUc2wH8QohMTtwMAVh2arrfd3sFqew9WSyDT3ZQd5CXrMj4aKzkucWAUAMvEq7cGHJk968gpHX4MKQTzRj2wYh",
  "key27": "33yMiEioM675GFEGh5E6s4KzCw875bPQ6ALQ2wsV3xmgUukk4xgipumBU5auGdXYfzax1on5QfRyNeSfkHx4n4FF",
  "key28": "3DAGgGfeKKcixfez6SD1FeVhUhfue3o9YXMY5rhdK7aa3TwuQfXg9qMnD6a921dJuSKRWjWHZc5vMUdgi4pGTub7",
  "key29": "4QLtuEqcH3mpHr8BLbc1k5biHSz33gFgB8T39dMFVK5NKbJqEAkJJV96qhfWW9rgRXqz7muUY6BQcFjW2sfvHPXK",
  "key30": "2RibyjcZXPBujdE3QLDShuqZF6ELLvwTc2q89XpWBbzTo6Krpz2BmLc2SiGTbEeBGWq488pdQFdny16nfDDzELRy",
  "key31": "33dumaD7aqjEWJK8rk4ge5bb3qu65az4jKeSZciu6JeiEJeCrfhimBQ8k3qX4WaGxCRGonunf2eeDmY6WRSwChiz",
  "key32": "5seet3RYntFjhsKhet6JoFF8KTwKiazWk3PDcECf7LBDaLEbn8gCHiuxWQR9mEapovXF8H8JW6RYypoPk7ybVuYS",
  "key33": "8GUHzgxofYN1hTwDP2oywceXPgB5uyv6vEUt6UA1wEbVfnGFX57RW6hZmdZDoVn2d9pMpw2xGTUYiFMmZp9j1iV",
  "key34": "5cVYhm5rkN6xGaU1k5nF6VaKmhu1BK8DFEdSnHmRxJZJGnZPmjouyv8fvLGdn4ttngi4W6FMyvbbPdjELqhcoFzJ",
  "key35": "DHMNX3FLcHPKbCGQMpi77rSq6NFpDsZuJEpcTu2UB68zm5giesatYksgDMuwt1GvZW98aBZvPEbB7sX77GMuf29",
  "key36": "4W5N7x8CtidJVjHeT8hSRhvfJV8fYCM7XVovfnTWcjrgntBabm4Z9tXXVW9XMCDvsnED6TmRmAPme2eLoj2xhnga",
  "key37": "4qa7xnS2Kn9f1VPzhuvftiAMUvnZrQtKqzhXByYt4qZLV8ngZukgQ6ueML2PkrH2xKBTSrrMNjPGu78ssFGRNS9L",
  "key38": "5tbDP1drzX8WE9Uy17o9g8nTuuu3bCU5n6FgmXBrG1yy1RaTh619YF2kGPeZpAn7yaSbyF3GFahmALQT4ZzaFyvM",
  "key39": "1zSRJh8BN8G9gqttRsg4x6nVPspTiQVHFwx6SoBcncUsMwcFsVRd9k4GSBm1Giz7PFb9obEFAwiSHv8CEcGjuKu",
  "key40": "38uLi44WkKhQizE84ytSjXoKnWb8WUC6E48BMwLJ6vtRcThGz9srcvUCiNsNvo1qjbYczTq1qDh2EV63xLLaqEaW",
  "key41": "39UgCaQkEhmUkYoKiEH39ZncJ7quC1TQmxDdQv79ExRCQhZeZX5E2qbEJF6gBeFRobWe5inxpqEXk9GfKwLFfGk6",
  "key42": "B5Gju6Txqsi7btYrWEP5XEMteGYvA3tPAUwwhgYJLNRTtZt9NAKfa15WBBbNKUkXc62iCAhYEtXZP8rFhY1s8NR",
  "key43": "JnhR3iRgPJVDdouTRpnCqJuPwc5nwvgqJMHEhwWtMuhbVvZ53prt8S1gZGbvHMKVVw8ns63U4RNNUjLPmXbr1WY",
  "key44": "ihWLeQPkUSpS42HFxTdwcz63aZcWvBD8TnoQsTTriYmTSgQtZu3Z2QuZMZR5moj3kg9suoEiatfbyCbiecRVFxa"
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
