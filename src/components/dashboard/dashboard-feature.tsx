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
    "4Y4Tb6CVhv4HMYvvg386zWQZJZbbwz1cmWbHDz1B2rUWQauR3bLBVxQpNGyA1v9gFjMJDKTdGpJk9gUvNk6E2m1v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GSBLJv4Egn2bogPzuip5JYKQU4GD9vq6MChCAzMcgQEeCg9boA4gFwZgJQNdTb21mx3pK5XT2go3NVJaxqhVzH6",
  "key1": "2krn569awjMYiSbBa4vsMzDv4AtoBcuC72CTT3XKj5T57FhuYg5pRywynEe3JtGczS2bbnRqpdguc4Y7uV4PKmdL",
  "key2": "3WqEy5vLfvjNoCbvdq7PAx3gVgqoFR4KrMqYeED6vJ75eWEiWEQeKdwXv5FNHeFQtRiL7UqeaLkUCnwtLiSCkhUe",
  "key3": "3Efwi2SDC2TEBPhnrxBxdYXUjYLLgh6jYVUUPxjcfkd6Qis2y85hAESY9UvHviXUTybuETJwL2Riq4zTsm7sDnCj",
  "key4": "4hmFusnUMwPaW3GwZjDuhpqmzcUZJG97ZSnpdUMiZZSJ3bQv16JwK4iyYS9pVBqALy8EjykSGTgrijDmUViTDxnj",
  "key5": "5CgBpBXmej8okkbVncN3QN8dz9EQ7SPM8V3VXBx6A7CG5PwjvYqo2HibYYWN9BDkWgyMSVf9FjBgcCQrAhRdp7vP",
  "key6": "45RRWsK2UHQ7Mo25VqV9HMw14z7cV4qQbTfZ6siHQzJo4cTN6zJHw7BFoYi56gavF3W93H8qVEfw3G4WJ7xbivj5",
  "key7": "4RApDTF3LsXiySgs4oufrvAKhgu3crSvcHk3rgHfApMCqtPFRFrtQ9SJxYAbwZpK4nQb5pdK4h5VgXGAh91Ts8D7",
  "key8": "2BoDBbkZnhx7s4i8YzuHVrK4dgXTHXtQ1LG1a3mPZaQYnNwhhY59i7jQSBQEshnbdBoS9MwefDjtKiqxGwiZBQv1",
  "key9": "2ZR86ZnmfSLzNr9bvJkv3sQ7VqwDsRoLfhewuy3ionX5RFVAU5HhjTtNTBFGrcGDZdHwaAtW6ibBqcnSn7Kgk5qN",
  "key10": "J9Um5kBAkE7pjgYwrorLbX7VhjqGGCNSdGhKZ9rQtbM1JH8XcLbzGBTny7quiayqSs3x79dVRc1LvNZfNE64TBT",
  "key11": "4NTRLhU4JZ1qs62gfvM1jvSY4BbykRM4rXe9tDs1t2z8WYJybDwj9VJ1vKUQWErt1AHfqqMcwSZPFB78FsNkgWtZ",
  "key12": "n8orb9jrLNpMndjVb5RFgMbcuPGwuWmrmM92dXDb4SPXSwMRUiBfQbRtTwoQN6nifSWbr6FSQNCZCHmCuFKC8tZ",
  "key13": "4cJgzTa6m63mNsyrEPVmtwHQJSBo8vvYPWNyiNcHcs3soVg1NJNuru5aawnJA3TSfur1jyBwgdCSpbepRimMrD27",
  "key14": "2EF1iiYs7jBHBMDj8VheEbhV7gJ9dwEuaf78qSFZBqru6aAnFm25X46aNFgHRtVXBdXyLKNUhefg943mm7YfmnNG",
  "key15": "5ZtFvh5t3EaNydM3bJ2u8zLoKw2Bo7pP2VShM2qum9KcHJChiBCLqxJy5StAtmCZ3BzXgJC7x2mSqbffbqVN8rNy",
  "key16": "5DQcx4kxmWjAFaEvWusZkneq4JRpVUik4h7CTdU2obcvb9pkUdUMNiHeFTfaPf9Njv4fJDryDQaEjXFoGg1tXjax",
  "key17": "5DmUidJvfNfnikE8Yr57u1Rt466ZHphgXJA7LB3hHrHUxyMn1LW7NQMaeEG3HgUMDZcbNY45cMNbUPwsQng1A7Bx",
  "key18": "5nrPktMoAZQQvG3xEeB7TXtDkW7B2TNqXVjP9TSUyXKQxyATwfXHAeUKWu9gFz7BgeKgoAs6XwPfZPLGkmZdYY93",
  "key19": "42N5Cmj5rhd7Hr1mPBBDx7pSYk9zm1kC52fxeCU6ntQrt9dH8dYn2sNap6d3e26ihKu6ikNb2XrGWxShYnAzyavx",
  "key20": "c2W9HimH3v64A9gK4aGwdB1sn8H3jup2rpGuvaNfaoamEWz6wtc9YAJoLtwked14eyGT2rsJGj99d4RFwyXgPvr",
  "key21": "3XhDb9aiWkCPjGiGsxPHNyZj4cGm8Wah2n85oYxrdjscXXTQ4dTaCZkHrjRbH96hxnFLpDpbNRmc6sF61NKscX6B",
  "key22": "5sFiAz7VsLLKzd4GDPnn5iX9ZUjoikqQjq44sKT62qTXDE4UXRLVGUPuTRYjj6sCPWbeFv1WWBXFVvMXyNdFNvG",
  "key23": "4yTteaQ3jf7hPmZZ7LYgurxX3nGXNGmrh6gm7n4yUYj6fq1U57UpCFYiqsfajotCEvnEqWKvSd8RMtpR8aeW12kx",
  "key24": "615wj41boHuFE8E4pNW95cG2vwCh1rs3Q3XxWFZm3Xo35fA7ftPpbzrbJt9q9kCMtK8U1faDXQhyUZJj51EZ63M9",
  "key25": "4gyunzQ3JsyDG27VEpM5X1A4xBvUWj485yqTvarGjq8kr5LZGmUKQm7eijRoBW564LZcgwriEtGT2GKJTHerJVRj",
  "key26": "4zFHPPX2fTJ2TiCe2zdzFgBjH8Crouxtu1fomck14nSawRSz521i3PQTqbMrps81v6PVr3CyDpfStdVBABvuyJ9M",
  "key27": "sSKhrP4Red9CY5hxTzYFvAyN4bCStyQJgyKT178dNTmBWKCJBa6RwaUdXWRWBFRQeqTv5Sedjq23vNeUrAR5dfA",
  "key28": "4QbFgkbjgUY1RD83ZdnQWr2VBsZxu25svxeKvBSNQ5ie82m5jcTsykHZUtnai8FKpcVA3iDn7u1K9TougaoB4uvq",
  "key29": "3FE1hj6yHF3udQak8fLRGCFyguRL2Z9YTkjP3fo2TbEtLykvFNiz91SpEuwJGL2nKLp6ctkqwo53dcVUrf4oa7BK",
  "key30": "5uYsM1a47Px7SHB2JZeRC6AJMaMMJNG5BQY6CKqhoS7dduynFBxbY558nfgrABHD2jSeZPqx91yUL4UqtW3PeHVn",
  "key31": "XvJS5ukyVAXXeVvmtN1NZYizJpxXqGHAGoMYVJtiVfxKxMcMkwoqs4d3qMPXF5yVnSEEAnVo8hEg2SvLoJZfgZy"
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
