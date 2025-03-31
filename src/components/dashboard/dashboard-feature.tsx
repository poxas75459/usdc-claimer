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
    "54E6XnTHwTi9cAx6a7HU4t1DsyULGSa1PQYsPqLRnzUwFTSyMXBtMKhEGGuebZWNDwmDRC4F2AHGZa77RGMX7awM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xqyUxmsZ9X3Gd8xh8jVsJSBhnvJASRU59upKjo3Uh1pNGD3NqGW5vk3bjpyhUwtsY6dL8pD9y3XA3bHWiiVBWr3",
  "key1": "gwBDXEKuFtate41cmzVPynXe5rDcJCbZTieWjJyTjf9HnJWTTocx8fLVF9T5f9jDYSXUDANqPHsFCUj85MqRpTa",
  "key2": "5SsVisNCsx2nF7jUgANhWzSsQTHzZrERsPhFuCk8dMBxooYyg3vmAnaaf1M9p8ALJAfyB11SkMXDDc2Ve3zqDW2o",
  "key3": "2ujBb4pGYTSwcfnPe7AcnrF72MiZPhXg9WrdrYL25PCTTHdUcH7vNfzoFbP8Uu75xLftvkz4WLhQgjDRE8xRHw8J",
  "key4": "4uTNTCSn6sf9Xxokf4W4Je1B1DEeThHFe77zVts9jqXKnXhz88dcSZWncuMueDij3koViqK55D2KeSLdvSUTmRHn",
  "key5": "tLCkZTHu2k8k1VZdY8FTtPjG5wg7VY4RFeuTfNxXrF5trM4yctHji9of6PX98fAsmC9tcT4a3Dnfa4BphonX6ib",
  "key6": "3TU8koKrXPUubKqxZZJZs7ziaNX5Ta4xP7VsNKqR5axKGLZNbVdmWAcsaB5q7yBkZ1LHyLqu3Pc1zM2aWZu3gTZU",
  "key7": "3oVA4JSMs3mpgugx8iXhzGbRQ31htaQEG3cUC7xFLR13NfEiiBNPegvB5pRm8J45nESgNKeRxPSX5Z1pBhRZ7D5r",
  "key8": "2Hwo58ecL8nAngdZm7RVr1H6tHUs952LQP5ZGjmVTZvj3Dt56xky1rkAdkU4wHmwV8qyY2PHKYdcrxonD4M6fJKZ",
  "key9": "3MZFNYvgdS3HmGvHVmA49sHA35zAWzyWjG6Rf45mMvrkChr54nBuumLkm4QA9ceLYADihP8YpkZ2ksHdw3W5Kmgg",
  "key10": "DvHkdQzbmFZVYXytKUujcCPjLBcxPZQVbcWmFR8qFk7Z1jnniKvdnnYbDVXBXhABBcvMzyo1zC1i1fvywUqJhan",
  "key11": "5J5ivU89K6YLKLa289QjyZVB4WAJd6ddT9GLPk9zRqoDfZgBBPQTXV2JDGWwJyod3D1EUSvi7xZtHpNM1mFydH21",
  "key12": "2NWddUj7m4jLxATf2iSevSg4XnG38VfmthothpuKpAX1yD9HxU11oLfS8zs3bYWVjoZMFh1M6JDAsQMUiY5o2E3B",
  "key13": "5WZA2Nkmyhmudp2xK71BH8mPcFryJ6QGdCXYTwkXaNvMGX2Y4KHf1zMadz36ToVVk9aEA1U5Nyf6RPnngjYpaZ8u",
  "key14": "2BmC9V8ZMz1xHJHCgh49yaMfkxUwnNXrFQMLoo1AtRjNxc5B8JgxnWro87zbuwzXVzomYqoStfCMhv2wQrT6m1Xw",
  "key15": "LmScqBw1Cbj6yGam4jKrtQaJTtfCoZt15KKiKN2rKxjfcHt2itoufTBkRPGcAgz48ARKL9rYrVdbq8chQx1V9Hq",
  "key16": "ianeD8vKqikPGmXfMBXP9u3CN4Yzgd9XD5jfHx4RQ5Ncq7cDUAXbpMfkEBXq8w11qzojuqG4uQ8LYFsVq6c7Pe1",
  "key17": "5qvrw39JTNBbBgCgCfBQeXQRG25STLfiRNdG2CesQ3LJmpEYdsxWUMJhmpQsFfUqJ81y1dkbEeJHK5Pncdr8n2ZQ",
  "key18": "27gogvGxe243NZEGJsgJwtqcuzdo2UfpHjXBsFiDYDHySBxeDLFvvvTCm1Gm78UYxN4eWu7Qc8drKtApve9SbqB7",
  "key19": "4xGaRTjpeHhCJ4BCxS2KRh3qpYSWXe3wMsPMzMtk11r3hA1gzNrqeM6rfD2Sfytm6uLSxxhnHLjYw64d5jCFpymS",
  "key20": "5Zjreb3H7guuy5xsijyAAv8UM68TwEsSC8MuQvPYGFb8XofUtfW1bzJ8GebEy84et5wjNr3C4dQtYFwE5D6CpZur",
  "key21": "5A4bxs7vydPV4sV5hosAxwUacR3CbfRRwozmSkgP8RuoLHmmRko9nmaa4FY45KU7BCU1KLvSDUa36NGhNyTZwpe6",
  "key22": "WS8h3Kr3beq1rQ3xwLhorQNdE86jXJY9NcTd2aqDd5Lzkfki6gypKTrXHGbrD2jXkv1S3WBV4TFxfPYxngkuYNd",
  "key23": "3UJeBT4LraNe8XkaVA6c5CZVpeJwQa16njKtRqdQywc42pt5E8AseFwmQ6Nf24cNgwFPqZuEzZX9L7S7SpR2sxxx",
  "key24": "4PX7A4yBwRkpva4SgQqbyVDVdVfUXXGR7wZguPUPgtjGcbpDwKbgBDR1QTXB6JG4jwwfY2XjJhDZJZzQHCHeQXZy",
  "key25": "2SxYWHH6Hv1RvpbVnqbc59HqaEFstzFokHHj6Dv1MWj7LTTpvguioWCSksXB55pQWmDru2ZZViLqsZegbfSSn5sB",
  "key26": "4UfnThZL3AgvvxSQ2ATbgXE8jQHv4dHTv8JWRk1zPy1b2paHBTzBmxKEuYqogrNigB4526jnewfy57zoJHKr4gCa",
  "key27": "meVcVo5gEtsmGhBirzoz1pzyGbkNqbTpnf2QMb77H4BntWGvqzGW3pneB3NH7wk9KHgBAZoamPnL3cq4Tm1RAch",
  "key28": "3saYwgs9Meqx3r7WrC48JP8TPctmY8NgiXkyWjRpozgw7GN9mh1tREVba5UkcZiZSr8uBkW7ksdedsiZsv5Qnrgx",
  "key29": "5nDPoaA2yAAdzbniCwkBfoqo9kLU9JVrvkK2tfh7GR7hmJxtkHGJYhKpbq427K4XzcEyqfDJ9H19qSn9q6c3Vj55",
  "key30": "4UXHxsQqJAPErG2uX7u44PgBcDwytcfYzftiarN3U9y3ao3DDr5Mg76kfFjW1MsDUaWdSq1ppBD1KczDXn8zM811",
  "key31": "5fX52GZ4LGgcG2xm3CSAYyDUEj2BkcDcCWux7jLnahv5hNRujGoFaiHqnkvFdcdo3Tfss3tXi69mkQRrAiTsUzwW",
  "key32": "35Utt7S1k2GDx1ic4h5M6EqtfPU5pseH5DeWRkGBghKz3GKHue68d6FozZ9HMM8Zn7ypA8wMRrzn7BzH2Mu6oeQS",
  "key33": "5JLKVxZDFzRSGrKM3q2fTxmdpq6fbAG9Gcnr31H17rpsxstzFZPJo5BWmjM2MMv1CXXrULNUJMP5SFrUsiTGcAL1",
  "key34": "3HnevHaeDTZEJd691zEqP1zv9qJJRKzUkQEtJmdQPp1NvUMU3U1vDXo4EdVcE5V3iyQ4WYkBb7hoL3WgLhs763sg",
  "key35": "f7otMvW6x5aGqgsMcAFxzEQMrSdXJPpCDmkwtiJhfr5so4KutvjT58xacrZPNfUvFxsPJR9FhWNsFXMd4vDf2pf",
  "key36": "hYPn98LXPVmnDA8UMhhTDZiUGMnnaYhQRdwYN3xD3oeajoegmfNBMdqsLxrVAdpyLfw2HeKzrVnvVS4f7Qhy43d",
  "key37": "4MrKS19SD2dZJ2A4Yh63HQKgiwwifu1RRtDQMBJJTEGBKNxAPZ8qo6oxACedMjr9GDyRsYHfHXGWQnujG3jQ8SZT",
  "key38": "5Q3syKz6dq7fRoBE9CRXiGN5t16treQ4U4YDdqQb5ApbK1f5tTbkgbNNj1x22pK5bkPwVVVeE9S2B5JiHr2dxonu",
  "key39": "4iVa8f9VqW81e7ziWhmgotXVBvS8ERW1jmfAprQQtPvoyA18xHDwpt8ahbaa7shbx5A7zwiovV8QYmfPnYUPwQVu",
  "key40": "9wpArA2QnSS4QA1cNG8jCUu7LavpBXTJzvzvMH9rkdwXrGa3J6RdoGAvqWTa2zwQyJCE4cQYTme5npUgSnWTFfp",
  "key41": "3ps8cFPbnphyJMNe4BUvxdMcj3ioxsaqazMcQhwGPXfA5R7hyYk5ZNqw31pks81F58PTjzsU3wcVVzA5urN9JZuU"
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
