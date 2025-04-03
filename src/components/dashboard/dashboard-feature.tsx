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
    "64eZ5RbPYUP9UwittjZMwnx4AtfrbLAR5gKou92xsboVcbXSyH8cCHv79dqMyYEyNbsjuxhX3gWsmDoh9ZhEf8cL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q7aY5sBR9KooerMnxyCbtQSGaBirK2EMx3SKmrjEAXu1AVcyKkewaBsB5SiV2xVvD1TyBrzqjYRX4BfFLJrACJe",
  "key1": "4RMvqgY671BpZiPnr19keLVNPeEnGmKQ7zBpKEjvJokQcnsYUJdyktY2jQV3bbQsbwjDy5zRQmaHtvZT5RdKPMEH",
  "key2": "3uZd1i932kzJYXDxtH1k7AQqDrGwC6CFdzTns8s2pJWSkC9vY19o9nFjf38mh8LaLJkeHeNQXyhKf2Ntmwv5BKCC",
  "key3": "3nvsWT2L2ER5t7Vghr4AkyrCpCS7N9nyezy6fwAq5EfWNBRtWWJVzfqr9SV67n7eVxBwviJywfHmyVmWjki5Gy8w",
  "key4": "4N6tVxjpGAiNBcYHc16f4G9NgTv5PHCS54WgqZdFQKX3URaA5w83p29WENj5iJ2ySsqr6Sk3jFgNyjrWrWumZqgW",
  "key5": "5pBnf4kSJZJWdqUUASrzDhBrYSkJ9aqGe9XbnucEQ88YtvAvxsSedD9UVhfR77W9wAtaFBhPMGd1kwLGD6e8fDwZ",
  "key6": "5SZnsUkAeCopwfHoWk6wpbUCv2tSjqatCy7ZBeg9cVGNwysEZbhYXdWBBqRJ8LTcyiJPpg6TsqT63d8xumgXSpJn",
  "key7": "3nra1d8ZGosueWYXTEEkXLAtJqzmkfWjeA3mCjTdF8bq1YEpRcEupJgS6qKE2J3g6m2UD71FzrdjLXRJ9tJbmCAQ",
  "key8": "2Zkohr8RoBFH6WTe55koJwdXyMpB9r4Vkj2CE4Tewx3PiXN2s1UyUCRw1ZiU8Hx8U2T2Yu5JAb8Zfh5DX9MadQxS",
  "key9": "6k4EhXpgQvBmTFRskbZqNSDVRuco7B2ZxMaoEiyuiMZv2p6sRHqgzxtSChbymLAKvLFeVNSAMPZaMmcGXFdYvZ1",
  "key10": "54Z2wZ7M6ZYZ1fReYXT11CFbc89yYNf1kSeu5yyp6wHjZDyAZNiJoif6odEkgS7c6bRdyT3vrUpKSvHHMJ3UnAFw",
  "key11": "3yyZ1jDJ8jcoqbwneipJmZhKS27VqioVKCiVdhVXuN1vwk7rcyEm8HzBQLAjDTYzvoSxMzHmyD71uCgmGL8AGDnn",
  "key12": "3fd9VLE8U9GfFbpRNEJpKDv9YnZAe2JBXiKS5bdkfL1hCjviV3e4sCJqe8c4ZzL6viF6YauC8PSXcvKJeMMfqZtN",
  "key13": "wgGCkrZ4jxSKNJi4uezY3sTzafP5HhsFu1MYGdSDEYrEmmkmVLKFsJxwah1WgixTkHs8vzcbGr5TMXSBM8HdWBb",
  "key14": "5vB56j9YE7rxUiUzr6LQosbNePz4wiH49r81M6sToFPqbLSx8tySP9d8DNfVma7p4b2vShYQZC6k5geTLZzjjjFs",
  "key15": "g6RMoiiCetqvNo5MxnKWAJWMTEB3an7m9oEJrSXhXUfBeQervm8WyspfWucg8LbhvRcH4iC6qzPfRTgvd4cqLpA",
  "key16": "15PryqVqRxwfwDhoivqXh62RmYqzEvkSW1Kz5yXCTsZQ8MphQRLenpWWeA3S6fZHJzsvRdqJhyn6BHvFUUuCgkg",
  "key17": "QpqyNZ8H1Ud7TLwTFbnJZym62d8pJwWzvc4tzRVy6LehdYJa28xL7RfffcBDEBBigiZF2Ugfx526ShX5mi3kmMR",
  "key18": "t5JkHjD69LzZo48A3UKtRbRDi6UMmwyxN2xTwZixnKgVFYyzMJ48yMg5UHwLB9sNKwegRZ8WS8Gp2vSH4kQDL9Q",
  "key19": "k2HbkeD3QbDkNLwksG2nYxJFDcMU4uUUdHfKsmJ8KcGUU8fghPp1HBWG856XiphyQ9dXXe8v2XPxYZjEP4MuzT8",
  "key20": "4rxy3nE2zyHAnbwq4UvJjifrbTpAfEweHkhMK8xu9sbEGpFbwfHeiMEp1JFJr9b6ZBsahqAkcawAWrdFKJGdwxfg",
  "key21": "4UiTtw3m65G1CV8HUCiQ9Je9HCqLHMKUqfSFNp13dw6ANV9M8W1ooXMuTohrf9LasRwJf5bxbX35Ti44LxYmhYr5",
  "key22": "jjreJzxXXHnhEVUJGbXYjzD3CiYPjSawGhUZkvJY5fVt4GcjXNmQ4pceND8YWeRR2yT9trR75JpS8wHH6Si6D4J",
  "key23": "58UpATrhgTpTVf3z2WKNSFMHQpi2ma6ADTN6eLmdadSpvcvT2Z7g7gV1c5PfaryYYxTfz3LiytByPkzYjyoiuAFm",
  "key24": "3ttDj6w2DJAk6vFTzCZSRzK6JQusiXiTniJjRbLdmXEcLfM3jFKZoW77FEtvGmebkQuFwhKZ4kXcGevMk8Sezt22",
  "key25": "4y4Ria533Km8729x6qFKpMw1sYbJ9AnrMjb5r21BEas7GxMeAh5EZBAKiykwPKFAr8BKbMGZpRqV1GYgxGfdZuen",
  "key26": "jvHEvNBP6uv4sypsz6vXw23idCg1pWUtCdVjYPZVb8chWo9r8jfCf8vAjDqB1uMESyFacUsiuxtrzQcrpZEUBxr",
  "key27": "4PBhnWWHoM3MFzWuv8VHTH8Ut8kDgajpGyyVw2TK3AKk1w7xJQUVXdEMhGUpDyy8thPAzKZzeztVaRnierTqv4cQ",
  "key28": "53d1WZt2ySLKchn9cGH3Sp294jQu3MMcyPWUtbYojZfV3hmtFpS8VsdL4MuW9HexSsD2AxfEYP68JZFC7BzToSLt",
  "key29": "2yPEN7KSQUyP43bdpEeVcF4CLV9LjNgDunXEWwBjNoJ2xQy3osqdWH3UcqAi749STUqy1dswS7eWnfCupzvGVkPr",
  "key30": "pvMGAUPPfP3CpbGdNQQbJJGMwxjUSTdYL2FfgjzwTqMf8F9gP673Gobrwz67Npdm5bW5zkKu9Fy8uwDmm2rEamX",
  "key31": "31iA8PrpMBErozjWqq66v1WxZQ2bcnYCo6yrXzUHnBiKENDbZJTwMnfVeLEz5tDMJdtjEpDSRfKhRTAzTyUcjRke",
  "key32": "51PqZoPtLDDfoNgvoKgXnkRUC5t2a7WWgpK5P8fTNgVBw5peLmTTpkw1QwxhxVQk1TDN3eFCZ1q9J9bPFJ93Ruap",
  "key33": "4RqH8Uhea24Y88cenc1ypBrkWgsgwFSqEeMtyKsMGCL2b4cwEeynMfJx4B2FgifC4PsZ8zNxUHXk46mF9qBNW4BE",
  "key34": "dLhmQi5eu37TrACAzr8puA6JBDD7eV6jPBubNK4zApeVzKuaWR4ks4iooMz57rWfBb6nYN3sEw8Y6C7X7LXpk3h",
  "key35": "4tGPzTd7x3YYEMpst1PbjWqYB3E2BbyNNMGaod9ANyxqWXsCaAib7VSgYLdZED3hSLDRtP8fg6aJdWe2Dy7NNd8H",
  "key36": "4UtvmBEr6nF7ozZNGwY6VW9evptdhcnP3u46vuwwcSWnfCdeKG1N5PAACBQrmGNBFfeibb2GJjhWrxbWEKRheVpS",
  "key37": "Xgp8dt7y2bUeR7KgvQXEAJGdst7LqYGSSbQ2LSCN1GWh46puvj4prujsGWYdccvc1Fki4QpL6mft19qiCE62dfy",
  "key38": "5S29vAFy4ogtMaqPhi1N8FRTjshE9knsP6ArANUm46ZdnpCVncqVcn2Lka6CcgZyUqVEgcoc4H8UsZzqBpjZFTxk",
  "key39": "PUoKci4CGUWvnhMnXrL6K1d2fNjrQX149cLzQzKRzMcnLzkUTERi5xyzdcqfTyQNB79aAHsPFy3LmQb58XSBqUb"
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
