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
    "4tBKu6nQnh2nJkJL4xk7BdS2HAQ1LqfyiwsPB7iyLKLNMUokYBXDV7ESVMpViw2rWj6FWhL79wWoW6Xmb4KVHLsP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qtURfchYDeNJx5TLiMuVhKk8LrFa8vQZRwkFxWHMv9cSDKcteG1qwJtfM89kz2CfvcuGYdLt1zKrLBrHdfSPVqj",
  "key1": "NzsKS5Ee8ZhyRvcTkaUxQ4RCU4GAJVPcpEjH7sDFKS318JEX6wRZCjdNsoEGt3vGBpw4mGQWA1QAmkkTpSRU5Qs",
  "key2": "4yxqqP93xrAXtThtZPYmUNXv6SN92f18Gfx7sYQzymEaZAjYmBh9Tj5vfAZxbXzcnKNNKpccwc8iZjqcFu4brLXx",
  "key3": "3n9eBAbt95vJLCXVJHU4LMTGW4UJpSBrGLmYH3n87HizhWLwMj2tjLP5oeZo732HdQc1jwwTWzaBgxC1uCd1J6n1",
  "key4": "4LjAh8ZtzFbJG6YKAXxMfS3dy455sJNJCVkV9SS4ihQgg3HstAK1exP2CiPrTLwfzPDyw9KTumEgSCi88jux1Qh1",
  "key5": "38jfNebSEVxzaHdCYdHNWRfg8XwJhqQZUWAVQ8rUHLcDBEoAKcm8QnsnCqsFSmVxp3GGay845UKbiHQWAQyHX2XK",
  "key6": "esCySP7AjhTJU7niEn6ebskFZxVEFQG4123cVgNViJ2UxH94EixNynbPG1bazaByoSUQvMq4KdmcAwCttGfSoFe",
  "key7": "PMPiMoxpYwwz9CdrG4hPB54WU5piVDSeXsWzFWSgrVujDfBq65diSVF3i5WLBCgoX5niSe6hWWuQeGzBdbG72yk",
  "key8": "kobfMTNCV8oMS4pRqeA8MiQD9CfU4W9eyuk2LZdFMBTJP5xGk5uSpctuqPxmzYThFGSBYFnifs6MHh7X2BsESGU",
  "key9": "4gizMYUZQtoeTs5Ba9ZqnJiiuKnaTKBwfYtQmK5ZgyHaT6L1T9GU6g73cHJY6sSeNv9ZBJMvhJ3YBmaHLNGmy37J",
  "key10": "3TzYrMNH9A2kowmhhQJknkyFLok6yfNKbPMGhTFfLNhK6gxyRXTRSepDx7SWVTy6BRZ4YwfzCjLGqQdyYLczaqcz",
  "key11": "54MLtRZMzHj1iocpURri2GJvjigyioGLLN68aSxYbE8wbcQqeyLAxzChNTeWUMmoRMEs7oAoTE62SEqV1it7X8u2",
  "key12": "5H28jE9QSA2K7iWjkYKDtPyN4wG7rRsoZwGDVFWMLnt81XbfqYHMFdJRsguEpbSTBdNQ74qqNWY5W5ep8gkBW3AZ",
  "key13": "4P1BRB4uyCcKGbsfpFTw8MZrhLXHJYk6r7uo7w8oBFjXJuJbp2vCeTEFdLGgdUygdyMtHXnVy4bvMzuCe18efX61",
  "key14": "2pmerz4V4u4LoGrcWuusE5ctoAo71Nt1dbEtJ3GzZqP16FMa9RMv8J18gVcuTFm2xRvuCUPBEPYgesrPekwRMnkF",
  "key15": "3x7fUL78xeYX5WwwL8vo8hnEDkckcLMXPnDVu939aTDA74bD9GCsJonbt4LHc2uWPdGh93uDaixj9EuDfY6xiDev",
  "key16": "4kKcE4qoGp8CtBEHugsR9w7GkLVrEuWhgBmDhxjXzZXPvVVv6tsjcbyBt2UdEvBTUwhv5N3W571ErVu4dSKaDhPz",
  "key17": "UBfSjDN3iNng2qZwAbJJjyS12QbhrP6DCXDTYvSLgtvLWRgP1XrL9M1DdArHo2xxjJMuraN6sotCPSLL66Ngsqi",
  "key18": "FCm11L8ifB1VP6rcfMtnS9JzCb84qhsuhaipVdAVxLAb24QLbp44fBEuV9sy4XtHAk2apZyZpUPjFxBiB19FnxN",
  "key19": "5FeFLAKoyrsfNs8mb9FVRkNzEmhQd5zL9BAHj9vYgqy9uf3yfLNhMGMbVbDq9cYhHvhhFaP6hGPfMapjXyQtRcGi",
  "key20": "3qvqeFgw4u1QHG87wy4QtV9tnGyvxpbbLZSCMksG2PqF7w7cQPvvFsy8kWtoU7d2UY4eTY1WBxmfU8oUv2hoSbwW",
  "key21": "4mKVivxPZhnJWuU7vEvYoqJarpARHGrqhquJGtyfXRjZB2fKXjoX2Jz7oVJxtqZWTKVUVv6xzHbBjmD217idVBsq",
  "key22": "4oRa2Gz4rJCondJschMp9j2RiizF96PmoSdn5xAjwd1e1kd7cTnHUgQqhPLg3mJkMveGHe15PBGpNcvsZuyU6chQ",
  "key23": "5EqppEA2GVGUtUjwP6P3SqMnYhSDADik5JbvAUGCz7uN4bB8FswpsKKXgYe92HzNSpJwUsYoCVHHjkSwWdQcRLzY",
  "key24": "4AeeNspDRPgPf46nrA9DpCDJ89xS3sYPj6k3XHpiSnt75Xsq4WLjddKzKfKRZw3uvL7nEhDNS6xujT2UJfZK8Eqq",
  "key25": "3P3vQr9MCJFBWTXBFhUKg5RCDgt67TKrbu5XeDvKQLmvM4FMMwb2M2a5utX2H3R3t6YeimVLMBkD93GzGJ6oQmMf",
  "key26": "3AvvMV77cKBBXUfvGurzw4ggJ6cU8bzxCB2xZcyJghY7cUAxSxGqvr4R7NTkJ3n7G81HP4icUb4k1rGbdm2w9VuA",
  "key27": "3DgWrWpTsPZcqd6imm7jtcNRsb3q2C3NCAzFYxB55FwThJaqimv7uMT5tNcSw8bwngD57EDW8v7YVaUe1GczLnqs",
  "key28": "4vyM6Tm85z3wm2tR7tcA5TBNmJd9iWLsg4J5sxa7RWKDbtpkR25NHjvTsnmiSg4iXcGtGYUdy68nUpNRTeBLbTU5",
  "key29": "4XFYCZ3Auwy3KndfLmvoFsjzBxrNzdfn3L2vC6Hzzs6KBf7Ad9hGV14DuHrH4no2oUMGFzc8QbsnUDkEA6r26s1j",
  "key30": "3weJUuxQuMp2Gbn6FQGjMdrEVsUUrM9GL9mt8RjgE99uC4mBvy2FT4UmiUo4SJb78vxKbiX25u4nRRDsz5F4aj37",
  "key31": "34DR4buB3P1oq3oT7pdVGNaDWN9CafgrRQ5HvqFe77axmkhM3eUrfAQwCGbLdexpLPkpg3mkGxS1eh4WkmibJbU6",
  "key32": "4JW3r1L63Yezw1qKEJVSP8Fg6Mnwkk6SwnaLVg9YvEjaeKpzJBaAB3m2yQuYWwNms1khZc8x9gtirKYZnHuQv6CF",
  "key33": "2KfBPpo2SKsB6zgBTXc2M35KG8A8tnEBzxcm1NmFqVKXpSgKGAcTmGVHRqYBA57nNVhnBXqjm4fBjG5hj2SQXneA",
  "key34": "5RVXmZsv4syDwihUVc5TRJ9ZH6DaB1913PquLz3Ty7ZRuXLdx6Q1bGbr4CeFTywgynQo66rUW2qp9cuy8exiicuC",
  "key35": "2C5CXckqPyAWmQsy7DzRfry6FzkTEBaSmLJS6HSVhKYmQXk5npqfCsxx4c7xQ39dRg7ncJsfekoJpf123GM48zAD",
  "key36": "3aFBxqr33mZjA3e5M88MiaKJqM1vNy4cD1JNbDWVw98RV3N5cCzTW9BgxknR8tiS2f9XFTAQgBifua3kGZR7Vhxd",
  "key37": "Czch3eyqaHwXL7LpeR9rdAULQVLLUBeZNXHvtdytoy9yvZAHE3HeRtWaVWfdKMA9prQ6YmEYCeY3zHuLLdBDfZ1",
  "key38": "kQdS47k1qRoE5sKMpLK7Zg3Q1hHm8RSjy98jEtASJUvyrdFmSZNasHoruEHXTSZfb7sSNTmaPjqMGt5w7iBQT8P",
  "key39": "2M6nGSCdkNssTj7pnWkmUmH1uEBHf51XhQSgV7qsMLWJKayZ9yihrMSGeG9w2LyRCxykiyhLurNh1qdzrgNjwxn1",
  "key40": "RHCRRVREVKY8zq2FRGLhHqzbt9W41CUDuqwLHeyhUWxJTJAXGC5EEg1eWA4CgD8j38eEsC46NfxLv3ai9FEuY8J",
  "key41": "LkHKSdLrb7neSRfXtECaoJdcbJuAknUt3SB3vGxZqQm6azaxnpnjAAS8DZ3E6RqHreZKd1UYYiga5RnXyt5i3eo",
  "key42": "4hKnexbYy8L4wCpwtP4M41pDy4t1wEa6hfyAW5S5jYanwPddVdxt5w2jo9Vi9M3Ub97je6f527MA8RE7nTsFwDtj",
  "key43": "YUQfSVG7etUL9JMcLE8ZnrSepbL2tETQqw41sbtbNFJS1KkXsoh39gPTxcgC1gCmHPii5aJpvod76HmmqCdRtfj",
  "key44": "5xB1GLmSdiphdo9JcizSxZAnJVGrPeGmGUiaPKK4XDecgzFf4a3nz9k7xcSb7CMBgmSCfptBwXB7C77fXR1zE2c8",
  "key45": "4HgeJ2XZxTeB3xaXnmMSz1jCDRuSC2rm4NHk3UTimZQXvkybTfnqz3cLuiKSdLi4srXC7bXWqKA8V1y3BX1KY7x",
  "key46": "2e5XGwMz8mgTtkXSr84sSYgmq7WKCqf798jijK66rWTUACSBWCiwEKmMFGzZKYyfnMEAS32aBLUj5cEeibBKbJuN",
  "key47": "4GrZUewNJvR2r7TRw5zHrzeqx3h3FVW5zU1UBxinnDgK7RHzqLsEbJNnZMdruPf44JkoVsrsmoAVfxB7XqebjMXR",
  "key48": "g3nbKyi4NNY9TLmrhG2XCnppikS5XcgoZgYSboX5wn8aUQpeAnxFb2CbkRMbdhcAG2g8n9Yh1qL6Rg16BT9dCHX",
  "key49": "3MrYsEDPgxazHTL2UW8Mok55JPqCd2CF1aHbmJepuRRNCeCVZhWDHqk8NmcWRdqSEs6UmgPr4k8ARZ15eVC1JMNT"
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
