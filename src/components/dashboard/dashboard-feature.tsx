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
    "2UDeoRREqXeibY5UsSTsC984thUkrLYkdkqvGRg6LKSAfR4sLw1QghghKNZGJdCdSrWotiXYiiw8Y3n5vKEgzetu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62yVTmDnfaoXaNTEKEEoY4KA3kRcGf9eio5bd4y6B1zhuYUuztUBWpG6EESdjebJwBtkHwvG9iJpALhiBy7QHfbz",
  "key1": "5SMxtcvsQv2XjNiF1VLjXXALcq43K1HiWXdEEvM3s8LGXvzfTDAzSZeLnCtM5Z3j12WdxZfFi3iLbcJrygZYpzpH",
  "key2": "5bctgUnxcEgqYndsHkqYmGpfAfTk4gkmqjohZZNS7MHt17kzWk6DoGojLHkY3WD69A8kq2r8qYrfEVji1VsfY9Qh",
  "key3": "4raMGZMcAFjcn9pjEoJZAae5z7nG8otNmHW79omh2m6U1mPfqoAv3hvSJatbBmr18ZfgneoyWMiixAEPjhMeXnbD",
  "key4": "3Viq7aKB7vziVGBjthzj6z8sSUadBmVWMQUzGkvZ4zpTPQMxVidcdE1HPp3QFYTBq5tZT9JnTKjdFWMbnn77o8eE",
  "key5": "2zBxofhJ7VJnmMYv63hLaKKGPbYHyQkAhgtZgUbZQD5nzcmvprc9vzWtFYc61RBWERuBG2gYKMKWBBepHbw2LaGd",
  "key6": "5SgT6JBxLgcoU8GmWCqY2CYdwUkirUMQHj2Qj5FFF1eFhUpXhCSQJHx46A9tGzs5foDEfaGtMrSZLTZt3Aoeq8tS",
  "key7": "3nRgJ3RvTQ9xnzxevyDBSHSxaCw58vUScBnnL9czbEhKBHdQRF2RZxXSG4Y9uxx51DcR98MWeBYARAfdc4RzXp2x",
  "key8": "44LpQf8qgYFdSKx9Ftq9RbhaRhawzZNMy521gdubjdaVK8esZBerKRxVcJtTVNHL4G62vt6sXmrDKEX1zC8bKzeU",
  "key9": "4g6KpQASgJfQCpFyjttzhCcWgRkJyEpZoasz6uUvSsJALGtfWLGAE46uNvjpR9HiRjaNYSv3zvzm5UQjDth9kX3o",
  "key10": "FJYok3whKcvQt9kDoQa1PsF9FcT1XjKWrZ6L9hGBwryV3Xgwsc1nPU8CFiASnZdNNwrP8nMkNbLncGuaQm5zbWK",
  "key11": "5R62GRVfxY3hcQBWdzq8zb7SgWqvHciAgRwisEThKFzn7iJum9GqD8qVM7PLrHFJKqSbLVZ5ga7V2BhYGnBCJDeb",
  "key12": "3XVM7LfZikN9YtJWnMDgsXuWXeYh8JxHypwsqse5Bcq5eFEG5KYKugheLq6nimPVJXcbfhKtRLzSNnEBMrttvCts",
  "key13": "2qyFBFdk1pVBUPUdgNhuvFGZhEqxqWoZ2eNuxXWpA7MR4oaYqScvuQwVBhAmYjz7R2j8Zab1hPtt2zhoNPpAmcSt",
  "key14": "5VgwEUQJiNjkdfFqe52R3nkTvEUu9XupwZYLVR4GDxDSk7HeimjsyG4JFK3SdCD8Se4X8oBYYyAWTdKU9Ts9w6KG",
  "key15": "4PG8Gqy2QrJfRGURqhSrAsXhGf2TWQfzTkaxMfkdX3EpmDrBezVyn3yPgBt81wPene21nMHjL94Gne1EShbopMhs",
  "key16": "X696nXHgKPmnRixsR4Lyynq5mvnvycYEiyWvAQbsHEmtkHRiUyYy8QWxp5xPQztuHDDLs1y7dLLfQSrxjJsvGVE",
  "key17": "5aLotsQQN7Uihjbgh22bY5ZAGPoxeznqDULpg6pgoN532RJ7mX4MuPaCR9LuWMXU1cwoe3DW22SHubh4Pxr5ohF",
  "key18": "bkLBgMoBAz21Tbcof4hp3sURB6syVytygoi6D9q948XiJP9XMnDyrPJpoeBhCbpLruNpDv2xJ3ao2qtGo12najz",
  "key19": "YfDNPAGm29Mgh4qwFoSGKm5Vkqxp7MWvAoqTW2HuDudQPvTfCTfFzaB7zbxY21hrzdmuxH5Etejo1Lz5UPb5skX",
  "key20": "2qx4uYJJYvwN9x6LmaEarXbNLR5PvkUjzPj9rjYYcCjZJTu5f1hrJqvCrGJwB5MwTK3eC9ssF3e1GTesbX5R8622",
  "key21": "4ZGEFGboLMjoMsCRrrvJVRzPzAxvEsZURkwRJtMZvYzx56EvW5qDJMZsdxXBN838dfUfSijJYj6sCJ2hBNbQqSh",
  "key22": "oyycpFP2ym63TY1pszwM2QmQHkcW1s9BPbY3uoMshDXEEC4NxTdgKHFnwzm96ftKaBacQwb9auBWH7vzS5CfDSE",
  "key23": "3GzwE2fvpf8PtH9PAzePkB5CQVxZQ6i5nmDZjZgkrK9XQi1S7NqH4xDCaes25UD8yn9UagGBDQdyDYQNibLw4BfV",
  "key24": "5x5njxqagdXSErQqKCRhe7CAKZz2AS1p9a3ZvgWKEox7sqboJ9c1X9ar2apr3VfKzXWTQWH7hj6nPBhdai2jpg73",
  "key25": "3YiXZor3dK2ci95kxs6wjnndFD4AwjPzEsVGFUGtPKZhqfsWav6tK8jobuD3g1XFaQbF8SUFyweXpaiuZHV5gZ4Q",
  "key26": "BLdRKRgdgXuo3Fo1dwt7banbXqCboCx6ZbH6CuAUv3mzsEFGfpSMNF7Y8rEsXqbLgv9wNkCs5qbeaTZjhfW8iLw",
  "key27": "ANS9ymxBwGG1VyGLkzmbrhMEEMc3ToqPPtyYKhxYQ4RH8wJoYpcYNVpcYtAfVGvCEBc62LfGmuZ7WHrAuNM6V5K",
  "key28": "67CeEDggEwpEK6nYApj8XRQaViVUbs5TFjuW4GQh2WoDwNrPJCv6bN5pzD5Ax2K91Pmxef8NhfoZzzrmw6n4ZnxV",
  "key29": "5yGvYLfBnXyz2uu3gCQxyr2PCPUGHKxRF5BXhhAhXgWPeQmaVfc5dBDM8zoJGGBtDL7B78UWhHL292FeVfRoqrWd"
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
