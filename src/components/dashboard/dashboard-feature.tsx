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
    "8WnuE8zabj6oJ7PHxc24uMoftkGXibKYH3i1z8WxAJ3T4Scma3UpzKWxm9S5YbXXLuzpVGgiYGfZ8CdGX7qiQWm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54U8TMLNP4axFxiAFufsToh1yFepnRmq9apCw3QvgDwjGW68tizNpzGbCizPEJQKQuuyyQnrY3pqja8WP2Qf54hu",
  "key1": "5Sv813JL2YGxbwjLXw8Qfv2345EJebN9MT2uEHa7YGxNpvnpMmEQnsrZ4ap8pC4JRQaMtqn5mjbmeS3AAV3Kbq9B",
  "key2": "5LaoWLfKqPsgaeuqRbzuvRrwpZ3PqXjrT7qxJJoUKGSBntUDpEpTzxQ1e3o6Xkjf1bKxTPGqArEENKCvs36dsyN4",
  "key3": "qBfv5wGbccPTBRQzeox2ba3ZA3EEj72BZivVEAyLJmLiSGEy1zogRv26sQWwsGo1jmbULbf8HYhR5Hw8UKFe4jS",
  "key4": "BSFb317cDKheNVB25sAbo6UkGvAGYyCZrkT4w6jJncz4f2qbvxu5qQqEDhLXkf8D2tpMbeDrGonhHmTycJMWqSq",
  "key5": "2FGsUnaEGHM2yYHbmBNBFCvVRqvBWNXd6jgcTW4j8TSoZqTMUoRwFBZ36tquEpGkjn5JFtfF5ssFGuCfZWe7x82e",
  "key6": "5ekYkyCF9p5RYRAjX6D55ArjPJ6fhM2pDmAoo9jiXeaWaxenjPXiWbVKtXAgNmx3LtTyVNkRAgAmyBGCm2tdR8eo",
  "key7": "21F3JLVCsr6woFEVkevwWLPyWe9rqU4Ryxif3y6tmgAHWedq99qVzaK1Ledm6cd575sjWqbKGEQ43XofaMYmaTzu",
  "key8": "5zuJeds5ok4fVfMi94Eofu5pd454S3C2zCoyb4movS9ynF8oCq4pKvxjwtUYSwY2iX4KWkP6NhUh6WDTtmnduF4W",
  "key9": "3FEr1uXSkaBNsTsadPRLkDwmbpvYWHswrrMsUEX5a9xKGFjRXE9DTZuwNPbyV6uDWwsZT8p7Y84skVR83NxgSvmC",
  "key10": "5xbjjbGydV5MnTbR7V7gn6xD767SRcfAwor93532nNZWmC3Aq4NLmYDzQhLdhgw1udvF9v9f2VU5UJDcxCPDGFQM",
  "key11": "61jwucHQ1GCqbjWyjJJTCZ2fKTDLS1WbnMf6aWhzxJ4BesmnGfimBoMfeGqgyTaKWKMAxLx7bmuATwEWRSNg95yB",
  "key12": "27guwJqN4b6CU9tqwbZkw1byfg95XoRXKLdocR5kRvdMnD4nk1z47T1fCFFU9s7Y4WDf9LZwcef6AFhggPsgdx1V",
  "key13": "MT1JPaDwFsrrhNnZnKUNEHa2KxRZG4BNCtRPxdSKRmtX8av6AdHx6ZJSVigxth4JYKHYd1vgFXFoSVa2JcKTV19",
  "key14": "3Rwq8QnCFAh1C99NcTjvUvTYowsn2Vk4NtuK7cruC6GP9uMvRZx11rmmbiBhEFQpDxdvE7Pv7htYWe4HGhL1rGTL",
  "key15": "4WQW8dCBT6WreebXeQrYKZqp1218jwdkEgtk6gdAuo1AnWNbhnAgWqn9kXbYD5MCmFq8SveyMHKwgMuWLgMFTmjQ",
  "key16": "2uvp9F7mT9iwvfyf1am2cUtHxeUg5YBEDLz8DaLgCSqUTnB1wQFpnYwH7aT8SYAFsDwmUaDfbNqp3X8eWG5Mmndm",
  "key17": "523in1LbRgRPZFyK5XLiPiPSe2RSEsjD6BEFVezHa13oChmdL4m6fvQxzHd9VB9isVTLMBYf8pnA8fJmorGCttcd",
  "key18": "9gJtLC4SsRv5mEjUx9hrnpNFLDRiTqpQ2hknPNPW72g3nnsgTCmd9NzfKFRPVvWGn1so3oZp67Vdt3jhik4ExbX",
  "key19": "2VJ4bant6r2EDcmmm43UqDifCLyxCDiojJE1b1uwTSabwURsJ4SwvtiG1XpnK1H9XH6GFVnJegYXFNdJNqGmkLUb",
  "key20": "5wCmv3hrxVKDMUPTsu6Gawu8oyj61srkcCpNFT1U4am87Aq9VcPYmNYswgNVAoYtrsywXbD1WBU3QxMrBxqWbohH",
  "key21": "4Mb1jxbmkioEgfQY3vUYDpn13CXCVaNE1KTk7bnsArw1GiHEwEW4CtyQqDV7M8BPNWKQBpYsombckpbEQfWJTK9S",
  "key22": "5aBZ5Vq7AJFBwAPV53UB7NfRMhNWQR2JZLFc2kdBune3oESH8eb7a6gVRCpzB561niRQc7Nq94x8cbKJDHzqqSg7",
  "key23": "5mT53GopEsHTjzBGLBYKGdFPsF2YjdrEJPvJaPYpGRj3jQE6B7boMAEz3oxCthLmt7ugq66RyM93voy7okhN5W3U",
  "key24": "3Fbvwn6v6oEwB5dT4vR6GEQVPFe9QRXX3GaiDtDaKXaodEqCBRAAzJn54soyfVp1ZpvtXxoE36CM91HZMFFHGwu5",
  "key25": "43eZLy4BVEFecJMbXGryUMwPqdH4K8EkHZ8nZjAktQEZScXmbsaphB7UfDS3qDB8sAeszdhiFrHA6xkbXWCRpxwv",
  "key26": "49YJ2Sb5ia67ceTK7MVEj3ZcfoMstMXa8g9wJNjjU79F4ynzmjPw8vJeznAjsKF6GSSw76f1ddnX53prT8DWXxis",
  "key27": "JyxEosKLp1WLa2Y4mpodCG2nJMxRfYxgYUiBaVPxj4ahxzA7LTygG4UFWsGjkM6P4kDLbKpbX3QfJgCLTwHe7x4",
  "key28": "55jmXnaUXvJouSkbM5KQjJdA8agUpWKw9sJKJRFNr9SJiZScif6g8N8odqsm8Huw9kR4V1189zszYpKwGZ56x9Y2",
  "key29": "93SP3YxP1nyGTsBMH9aAbSMW31FbX9jJvmQM5njbvfheWNgWqzQnAukSvNzo2iaNaiAMnwD9jbj3sPgtF4bWca6",
  "key30": "4c2tgnVTUNuA9xkBq3ybuQhhU73n9JMm3RPMRjj39BNmDbJC6JpAja1o6RqkL62NcV5QXDrmgDkKMePxm4WvXH5L",
  "key31": "hyASgH4PZRL4ucXYnuBJM47tQK43si54PBcS8UJN967s962T2vAnunsNxZ3PKf3c9PguRbkESroE42m81fCWYk6",
  "key32": "5ZNhKVmhSUcRXukYkgQR5qdzzD3Q7n2R4AzGcMbhrZbFGHZejywryHb2JVdmxZGSySFC8Q8y8NmX2ss6vBa8J3AJ",
  "key33": "5b5EwSUg13JjFQNxYdugbkQPBzTP5KykZwdZPmzJL7ivDiKyu6hSBShH9LtwpDEQxvUb2jXZeBSu5EjZZUc9mQK9",
  "key34": "3hCEm9zWEWVMGnkLAsBEnEQypai6RAo4eBjLNLYcVu9zWYh9AeUJmmgPoJVHiA88T2Mu9hYHCxwR7f9zfizajAVH",
  "key35": "66fgk7n8UA6sAhWrit6cW2GYyNvjbdqLYQuY9gT9epjZssNyAvKR8TDGzbDXA7GGcQPirCSDVKVEw1okxjb2jPkC",
  "key36": "55GYKtioMsHBaEEXcaLXEuz7haWgc9eEK6rSjQE4i2JV3MnqbaoezcNV4XeTEm3KHhks1i7hMXstX3M9TPXHn6hC",
  "key37": "BqMEgFQ5wFx2nFE2Uxff7vy9MwpT55cLt7oAP6hM25CCtURXCb7Zbxd5q6P9wdrucJqDdkgFMSjJH5AakFtph4x",
  "key38": "4DtRWfuWWaZXC515EscZdxqoP5UTNT3oJbUEcLvei4nHVLQrchbXA8BFaf159QZSotq6ymxmSkATkE8AUdi1fMv5",
  "key39": "euFLfhDZenvHwy5xzLbtxKs4FQXHympMqcKMFNY9ejoLqXTpznBidazRkgcpo366k6dvkMHEFCPFmJ8nqYLZ7Kp",
  "key40": "3ieCUNyuVxkWbMWj2br1vDsEki25CM1UEMM1CCf6xzcR1TU2kAA1n33GWHXSrq9G8DaDquxkFgT38eQJiWuJ7Dgm"
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
