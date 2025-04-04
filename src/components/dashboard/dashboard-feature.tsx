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
    "Xzsu5T3qPyAykVfWVbSNysmh1XWJNB9rjrHfMfKU1r9MHD9ZmMkX9Wmd6HL8vWCypvoBVrkF99W1FA2umaC1vcr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gBymCZH2GgqaQbb8FDdqW9mhEXnwuf7vc6WUUbRNKYJrqdC2pHHoLJ4PXLhBnLoaFWNhh1yynfNQvLmNGA42NY2",
  "key1": "5kLHDHoX3FRiQQqabmCH2QgHqEq3wY1BVoMKqPdCR8f3to7X7tVvvFb6xDk8dm98Daod28QM1Q6WgYGS4br2WRMp",
  "key2": "4CQzPU7SGULwjHGp1WZVYnBrSEAiP4ypZAyrmgXZTmWs7sfzxt6LgmNGQ5q6pm6zrpmcJpWB4URuFB5Mc2Dhq6UW",
  "key3": "2KsrBo4nJYqbmVAM71zeieFtS7Tb5tvvhoFeXAwuYMsLo6p79orr3bvzuHMr4v53e3B4GsPjMR7kTddjm6nXszds",
  "key4": "42z8mMHLVZpRj1twRA3q5qKh9jwGsmupEqxrcH7QnpGKWZDaDAXf5wKxSAhLWFHnuEjM5Pq1urc6VgRLdPLwAF9B",
  "key5": "3beyba3Zsng1JVQxg4gibjL2gno2sETE4eEx23ESWpbS3nc6i2FcNEerc5QWf7pB6QBBWAdm3Q6BUeP4GMfogKAN",
  "key6": "2iuS1T4GuCkbRoXGmd31uR1wj8mJ9X2JJqrwhs9rjhFbZTXGVK1t4V1PhDGVzBQpKhLhDJn7HeMTkWWs88hcsrj9",
  "key7": "3avj97ci6jsFbWwsefePcxLxoR9u9Cjn1CM36mrKE5b3bmDhQm7wCTcjhAmYaMzp8g4xceUSzwcKwks9um6NzQd2",
  "key8": "2KihGWeKATME6SqC8TJLwcU2UCnoqRANAFgmn7U3WdjgnwLXVq7BbPgJDLy94yC9LcVqpM8PrFxxAuq25wp4b3Sh",
  "key9": "3SmctvhQBdh95VE5wiGwrjnGxowQCwMeebiaigPumaghDyHJSQEbeoc2K2i4X1RCi3T4EEq9nsd6jLQexumPisqb",
  "key10": "4wJU4PcDGWCwmQRysAHNgxTsKay6jbqpbHYNRwg6q6mvxgiEk8UTHBsPFyzmoGAmfL1NUfzSJPuTGjgvPNwBs5fH",
  "key11": "2B7mU495zgrZNWuzaUS9ViYuAHRUkJpAo6VWaTw3gBcaRNeTSnJKaCdF5erH1Uja92MqECWdxAbSksvrRZkHR2DN",
  "key12": "5arX4GLqPbMPtZV1XtiU3br1oX8CUYu2VyH21kffXoZQb8yWxJoHjjsnF1a5ruBAHXSJsa213e2AFeRZPhFtwdFG",
  "key13": "1ztxb8j9SRZiVPgrBJqYyoR56jYqsLCenZ3gAhCNLVRnG53UPTjjSoQpDTQZbEx6jnZJHXD72FBAh85r4cDEcgo",
  "key14": "3boNMXdnTFzx4xtmaDcajfuBDb3o9NhJaEm8LV7kAUWb4ZJCGwEAEHk6SLeihGcqtxqXV9Pf6w2uzQ3AKS4JjYKj",
  "key15": "5JQ9FvdxbRzyFrMtwmTgQ93wNsVtCx3Yw4hcxhNqV5DVdFhee27d4X7RtpfYvN4x2GQCpCmmDrDKeCaArWRoyUFh",
  "key16": "5TitkA61CDLoZLzu5djcvxfyxKAS5c4tN5kmMv89XK9Gw4EZU87haVEZGWRq3jBbTvpMb7AwYywqMkrGYXrZEboA",
  "key17": "64bcPyjj587kz2H3j837BvmdaA6RhnL89tNkCNMCz89vupvuvFtaTGAKyLTWdYWS4N9jX8b8rnftGXbAjLyhCxeQ",
  "key18": "QeYqaJvBJue8zxmphY6vmYEKjxbacbSQvdPJUUssiCEYzwEVqhL9kb1Ys9uC95xDEvit8GPa1rRwyiKcyxB1mLX",
  "key19": "o2Uj1BeZ6Jw2eDamugaoYSYgvHuTHtjt1SMzziLgHZvGfr3H52Bo4rTqTeXC9ki3CrAsG5bMnEHYi5kCcec8a3Z",
  "key20": "5G6MJC9yL9YqzQYKheGbowzrFBq8Dr9JaqtwThhKeJqZxRqsB75dRWjTCtLekYhV3me31yaw1WQgxav229ckHg91",
  "key21": "53HqsKqLmJLprKB3PJ9FUokjg5dHvqDsnvfDdMxCmRHccqtdXGCs9c1jvKvrx8GnSiqZ96ch81DhdJGmceKUucTz",
  "key22": "5YaBdnhT81ZH1WiQeYiu4b969iLmo7TCW7udaN72XSDvjFnybp5D4GoHkj5KCnvyBfgqXAALJaB13NZ8jUQ86LEA",
  "key23": "2hYDDZmwtqFLkL182z3iZo6KS555ikfjNbXZ48baAyRp3gFj54Gspr7o8s5F4V4APPSm1rb7CPpqgvf1sUB17pq8",
  "key24": "3MoB3aaZzkms7Vgih5GjzeZnsz883vSFfJEccFMHcY9JRErJEZnUTrvuJVBvhw8Cn9U3SnuFk2jjR8wd1ENQZZ2N",
  "key25": "3XPEqSrNc4a7rhGArEqRnreiwqa3gQ2cWzn8Xd4np6J1PTFUKk9oSqLDCfM6jX1sWhViU5jRUWCnFnPJEakPLbTe",
  "key26": "3Gxi5wWhgy3K9kKkNssX9XE3uuL9cpQf8Dbaw26joE5frXusJr8orWUozcBW1s8hUZoBaxb5tR2EuTKMuwhCuTyd",
  "key27": "4h85RzsGEEQb9Js6QGZ9s1iwiG4YV8mArtNbyAWnnQEoVCDvLzVJMDievx12tPmcjMML2PYdiv938PTxBK1PuM6y",
  "key28": "2zfGKUg8Mz6wGhiLYANywbma2XMsSVi4aV7xBhGyqBEZ3JkgSNjnMZbQNeX7X9Njk3Fa2qU1Gv4CDEJABWVYyjVU",
  "key29": "4ERdhxyreQPs54gQbGT8cZNynBE2yRp1VaE3rysQiv2zwaGzFEYc3o5ey2ZWn8BjJ1QCA4J9RvVCJa8fBnkxLjJu",
  "key30": "3rGGht3i61XriRhe3KLbF9pj5wGJuFYX6uTtP7nusBnf5jnLexKW69r6FnDjh4yJRm7cVUgg9WqQ4t4JmfDipeDT",
  "key31": "3KhXxMMN29D6qpEYRm3LxR48eCgde6JKEnzDLV1twmEu8tc5zkoS4gChXdPzh4UDYLRjSK2KbxTySLd44DLe9Qwn",
  "key32": "2gMdUaPx8aPDZ1ykJAhAo8uBBQnAN3Hz9JUJtqK1FPK7FwHVR9gJeYTgYHgjwjkLaaKxeBnYu2L3b1dD6g1dfort",
  "key33": "2u2ABQKrrcYNauqwQt72gWQomXz4noJuyeHap4Fmgn9X3YagV9BFwrfr2fhFxkXKboeafLq4n7HFnfmHwGSYzLdG",
  "key34": "64TvcDPtidrAciPpguuWFaRgga5nmEmVdqaWMWJKKvLnRS1ewsDpuF3gVFqfSwt114batXNhjFUnLueeB6Wm5tTi",
  "key35": "3meXHGZivQstuPf7LsjHPGttMDbjDRh3CuuZPhxMRc62d4YnuK2EHxwVAZfzNKRCQBfJWCatMPc9FUNjka6aB9di",
  "key36": "4CmT8V8WBuevYvEUvK3CXZ2Gxg1AqFxfZiKgxVS1euE6nL8GhUbMVMH5uHBKiwNmAGy72cZ1UAbsCxb1XcCrk1S2",
  "key37": "5nqCQQdXumaUimB5U7NbuFfM8zvZju5xZi2jMv4vv8n6fjzRy7T2TiqGB2RSzog5wgAvLJ9inaoH6jq9LoZfik5E",
  "key38": "4muLdGhkNSVDyiD5nu9DBUu8f6XvNHi5VyUnGCGCakqUHeg7HL1txi6XEYxQSkAUSJkgb1uo9y2eNqVpssvz2nN9",
  "key39": "AKcKFGGwrcZU8C1LRKCvFaZgWDbx6PRyzkM5RagRZ2nne3vraXUMHX6hPe9Ho94SQVxfhxp9KmCdBTvWpn7kQc5",
  "key40": "4fdwHVBu6PEBRca9U3T9wyNTWHZE5gD9K6Dk7vZ9M99FuBzu1yj4mAoydGqva3J4x6z2PiWWKpa9T3Vy5LScgzfx",
  "key41": "4tUxNUrqd7a99S3svCNFYvp6kY4YYx9125tojmuEf4GxYicDRPbsmcs1vVtEmP3UjA1zRjsMFRn74HiXQYgsv2NE",
  "key42": "4W26zXainm5KaN9m13FRjfRxPvdCeUZG2qdPGtotUmYLh15R3gwUPe9w1YHY3s5VQQg7h3nRccqwJsQviXpZWhx3",
  "key43": "4Uh4U37k7VNMPu99gEE1cYNFzDL7m9XdVuWnGXU6WBGrsZd6wQ1RBiwU7Z5AeUJdBf8NPL9bzTaRwFfc1Y14eMKe",
  "key44": "2tNP92XmiB4CiYsikjaGRPWC3m9xqHfqdjUT7ZWwSEuLYRKqymC7LJ8j72v9184iXjBAnP5YneHUHbb2N1gzdBLH",
  "key45": "3nXjJvP3WfGXFS9dqvrGBjowD4isPhCi6PGJjzPE9Wx4nBE6jq4yyeCwL8waRpW26uFpz5WLCL7oYvuFegEyLvtF",
  "key46": "48AxNpeZkKpTmLhJSxdshGtsjEEAHPzpyhYZ5Qsm91Hdo8jCQvYif2gAFUbCEd7h4Cz4rGyYjjT6pgfwqDwTecTm",
  "key47": "5jgmngzsahxQNegeuLrtJjVaAvzAP3jdat3A6Tu6a6wgVaT11oBK4zZXWDDvUsgeTw7cZybssAYWz1aVE2Wn2fDe"
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
