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
    "2LTcaYhazt9wQK4YyspshFgQVXNDWQeDHzkdBhJYaq6vb4eiNZDUQtLw6WskyJo56Qjnof3YPNJ2nJEKWanxkkDf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66mNSsFeZuLnUsi9q5KNRJrgDwePfXS3HtZgwZ8RUrk7NZrrG7bxx7aaHYLeV98zqvnQ7ar4dkE16HMQsryY1FFC",
  "key1": "pSwacGJyMhdLYoqRZsBqesof2bASfUAf7Z2FAiQVMqTJEbfgXFagvnt4yDYcfGRvgmC4QesbSPPN83YYPLME5e1",
  "key2": "4Wk7hamhdApExhtDh5iBzwa4vp4ssUkTzFYfzrrafikfh3xndzBvQS2eamsachAfUPJVRtwFmtGsXBHT9qLb5fpy",
  "key3": "4tKyhLQUGvmbJm2qzetCCFQXFWMJYb11k5ceFVBjcbNLrFT3VAYjcs7GD1ssH6G6nYuLQApeNXijqkwhDQW98TfB",
  "key4": "hd4WKRfUUS29Xmut87uPKY8HdaztJeWAxQDYJGYLWfgsABdC5mgdwLBPt4Cdq1dcuQ5iJMwR1LJvjJZcB8LJpoq",
  "key5": "NTDNfPrGDdziCnyNdSqRXusC9WFzytHiPvqZEvA2fFZ9Uh4wDMt8pYvAbrJSLDaRoxhfC12xRZCLEh2t3xcc5iv",
  "key6": "4PAT9dnCiyxJcWvFQmUjNDg7DU4Ytk1XUTSVrhYCxeS1QCejEQ6Xre9SPfadt2UQEZAiRDJwCkXiYBhZ8Vniia3D",
  "key7": "R3NT4y6GJ7E6zeKS3xB5xW8pe6RQSa9Vs8K9Hv2CQ6z6wCJf7XE2SoVafbPQkYdva4CMrgyrV6HU7QnGsCYdsJg",
  "key8": "5n1VkDG4ZJEDSZxN8GuVPuHLjGsWSa6rzzg6oV6Dm2pKbnYyNt6FhYptpZyYuXtLoGkDcKKbds6rj5vH6Zja7hpb",
  "key9": "2iWutvM476BahQp5AfHbj5yFHzepyKo2aLDFJTt3dRJJzZLsJXswRjPQxfzWTJwkUGTZEFi41GqgQyn1H3hyQ9w2",
  "key10": "2JuQWuMozcwyeQDN8rFTSvVPkepqHB7Z9GtgA9Uu5QqWdTAowXydYa9wp5ryK2WWCfDRU63ij3ddisLZVPx5e3JA",
  "key11": "2rFJkGo5SUxyAy5exuy2Dqj4vvzGGpx6FRVVB5mWonAZs1k64Utmx2TJD1mPgRetKD6JVQCJoshZDD7MmkGDaYYV",
  "key12": "5u5Pj8VckkaJFvBK93qEG7PgNY9JBNPsen4J7wdaEw3HQsuRmA3dCXWBGvbsvgfAwe9G91zNT8BXbL2mJq8mbPzC",
  "key13": "5UNnq8SD6maQWD9hwAkG9KCuacmF1btUJkXoSiVeLMqiy63NtQnb5rPorZZS4kb877s1p8CjAYae4nCsWzLA3rZN",
  "key14": "65q2ezTQcgktFz5ot34xyGVT1tqvhotFgeBQ8QQwiY4vXcocvRWHvgMtqi1gAtKyBYyXBoVBzFm96yFfFppVYTfA",
  "key15": "wwC2Na9Nkg3DpkFzvVtsVpdyyXLSgH6L62ii4YsnBQZ6cTNWu1npyZZGYSVnuAGbcb9k7XKcGvW8qfqCyZ5YmSc",
  "key16": "hDb5ZTikaMZ2BH3CgCLNrjX5jwDcZR52aNAtue16cJumQtefuQxiRbgHDkFN8zfcWpadaYQicQaHwo9SBC7phtn",
  "key17": "e8owxTqgAdcVTMZuxbtJWoz5uvhQcUH8tyEkfn7PLjy2PZgmDZzJZLeyh7mzGsL7XS37x53N1X8pYQZFbcikvEj",
  "key18": "2RAtWJucEXN6AaPiGWyMXcyNzRho4ggU8Tz1j42gMAgTQpXnzLbKzjjCdXp1vP4c2yyFKUg4qhhL4MEHaiSVAPFR",
  "key19": "62VexXe6R3fuiwC6JfmnVCJH98Ghmjr7hojjot21Xs78Vf39nmr4HETzSCtU6NZuykycLTwNxDkAHdiAjDPcCTyw",
  "key20": "4y3sBUdymfSZU8PAycKGfuf96Yciq3p6CmjAF8hN7DPysWUMwREcb1A5AncY3hAirB9o9BG2zfe5bdgtz96g7qSW",
  "key21": "3arhAC3RCgK5Q3vEPahCkttriD534pCuWDkZfpTSQDEV5qE8euAknwGaHg86AztSApAwYrqMohBTSspyyeLFsrSC",
  "key22": "5ghU4Fc7p2bLFHLhaeGcs9kTooPCQJhyoJ6mBFqVA4f5Q3t52rrGyCUJsgrtgANS3dhAZXwykzBysbR2KqB15C36",
  "key23": "wh5gwGwekob62BAd8ouNDEmAPxHGZgj73EbFCHAgBYHUugEMTSdUYcaEMUkJJywZd9ZJqND67eqTdA4hq2Rh741",
  "key24": "tkFAP9AHsPqiPpWDebmtEtNw8fgZqYiqjp5ZTc4DT7k6sZ7GpHqXCMiy7eki7AQh2ASwQrETqyXVpNERqh3VAeV",
  "key25": "3DRtWC7TPyJwfsuMW6Hjo8PCJhsPpCyHEJ7e9ok1aMsEaRnYvJX5QdxxZ8KFeU9XhMrqwnhj9EYDuFd6ZxTAKi4f",
  "key26": "2NS3NKSvdEknFad1vhBmuWhmAhvBLJBNt4fTsxPX6b7iFvGpy9MmfpdVR8A7jYyM4cpmMUgKtnzeEoXmdC9ZmjFx",
  "key27": "fwtbXBEES3Cj7D86o6u6j3S57XJTBU62V1GvGcEtZd231oweJCjbtFoHBv459gZeS7SiwgnprfohdqQvub57tSw",
  "key28": "WXTFVcL4cLhzsztph7VCDA4twy789efkv2qdVKY2BxzcT4SP8XcKnNZprEu3dHH6JUQ6boV9E1UTt4akVoUZqv8",
  "key29": "XexJNknUB6erawTLe9rJGNuAiuR6KSTKmCFUX4xjjXrz82XngNdnv5ruFYAHm74wwfYmtiydDGkcPQ9QXHk5J4T",
  "key30": "wxGmqVVGyx53apGv3JjbAEjvfmfYAifC1Nqw26j2mq9iRAAFaKnvTgZJQGftuyULXAjdnTJV6A2rquhWB85WNkT",
  "key31": "5rzvF37qsKJ6uLBdAvuBEsUNHG1v6VRL5rWPH66s6exPKMEe33xAQJHAmRebqRQkPCZmuAfSiM57VPqK3JXBacdK",
  "key32": "59jFqaSWGphHtjFcWC3jypJhYTuFh7scQNPJzwySAZ261sLHjZDw4Hz6ZrtckvJnKwMCe3owAQQu8kcHYF5hBBx",
  "key33": "r3s1Y1y5R2jcumPfqjMGNmwM1z8UjXNdG7VacVCW7WqAp2PQZiLonngcPQrZTroJZH6KfbmgQqfZsq6yrUYr8KN",
  "key34": "3BzM2xos8NmNiNWBKwNbnjnxN1s3g9jGijq9fkocpX6QBo4RZVjQMcJh39hhTTpz2K27Hm93cmTg7wEcxu3ak4wU",
  "key35": "5d4xq1f4Uin75u6nidbxEoXDf9vXD3sTfauoEgNUea4j8HS74uvpVNWtb74ZpbhpgNycsoYtwffovh4bzX2hW35s",
  "key36": "2d5XK2aUy9SrP2symmcVmnS47W8iuiE8LiNR8KnozeUxJq4W2GzFMTNi9hpqFwnKh3QpkmVRU6JKxLcj69ghBZf",
  "key37": "GYAsQ52bHMzeT5BzVByGqqD42ZuZ5vFw22RszuwMwjQ41TJgihvCuZ4EkSqZdfKCohodgytza9WQ86NpPq6oXFn",
  "key38": "5rZTaitUFofiVvmcP5PqS87vztYVs88kqU3x67nNAXpznLww4GUTSrUwPGhWNatuytayx56jhUY7haJT5s9jSYKP",
  "key39": "5sXmH9HZqr11MzhG3ouipmqGwbwg2PAaXTiwCpepMtF8vgGgZKCp4P6nALAs1qQDuczPXuPWUZ1r4q2dECj3TWBc",
  "key40": "4eQmkqQDzn3KBtRbZaRLGyXrqAnz8jtRH9qZP7wMmi9kY1Y2Mu1x6S6GNmMWVqHj4P67m6aLYL3BX4qjWJcJHpws",
  "key41": "311fGMtn35gczJt88S3m8JkjENqMAmNNrjLZPfA4e5NwTNn4PvPjS7P35DnpoGL6oGYAzJLeMSPFGT9HLKsufvUL"
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
