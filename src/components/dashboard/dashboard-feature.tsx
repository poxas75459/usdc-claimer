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
    "2Cza7n3xeAVr84FK2Q4bdashLFC6hMkccSTjb39LHUzTLNvs5qzW9RjQ7k8YMV9XT37bg7TeQbkQ1SpBraEceibf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35eQdAZ5KJFZLFq91aCajJmRQXNvMpusMiqA8MXaZRzuGCL1LrRHJMi2BZhSrqLVYAdNxT8QTWubEYL1D3GDwykR",
  "key1": "2XTP79yjKUEo5oSn8QZUVNr6DzaWCYe8Z78id8PmLBfHTxt96dh2aAd1VZz9J4tJiRdrMGCNMTSNT56rx8kTGCSL",
  "key2": "2TJzqhw3XEaV94sWu8KmuwdrwFdy97ahusRRUNaMWVv6j6CyFnB2dGtAyuu6x1hbBn19kUWjJmkc37jLxtU28zdC",
  "key3": "4aSMEX6dZid6qgEANuPMPkSQuF6KjdNGqgLqNbGxZ5eYFXSvvNzFiAHyssywd2RA4bsdnY4bYShQTYHEfcyvJCcT",
  "key4": "4iAXXK1snERXB5xcUFHZNe7Zqo16c3Gah8CJXieBgpjn5R5uvrxUrkh5kWtn36SRKxT1iAhpjREmtTFN4KwXyJTa",
  "key5": "3n3Gk7qn3QYX9zBgVe9cZfiP6Ch1fASan5RTMcLpCv49Kb1NPvNv9ZDczjTGZhU5Grm7h8hoU3issD1RGpduGjmf",
  "key6": "xAh2Hzv6a6jpJRRrmhkfvxbYfWfNZY8jCdoynWXeKeF39kpFna95FVEzz6M1i5EVvrVCyStzuByajYKuSiFhVxH",
  "key7": "5f3PLgY8Y7tQAf5YGDwaW3QPcL7wXVFKiXXr8MLurwx3nam21gMJqirdA5djm1PYr3hBkWZubW7HWnHvMPwxS4ou",
  "key8": "4LupsTJbZZGK9QSMJWNKxbjxzcdeY8oygDn5mN9pF1KKnD5tnBzYqz93bpDoqxdJYCmMhRVw6nkjJkosN5jSHyR1",
  "key9": "555nxt4xhPESyuqfKmHiFEndjpVx7bDHtkaRQR8k4QfcZ5eDfP98oEX3VkvktFLkELpBPvPXAijexGfZmj4QJNp7",
  "key10": "2e7Hu7hd5q6bZkX4pMZwkSm5t5oJy4K2USmVUzNspwQe8kKzNifwwVGgaV7dqcnnS5CCYT4n4H9kvWpb2EtVWmB4",
  "key11": "2QqS2nTvWE33E5f9Yzrnd7jGcTgicWmFE4wpQoppvv5K9dnjMrLqjJfhztgkyZ5rJz7zyFZWKdJ1ETy4dXZ7z4zZ",
  "key12": "2T5q9pnz7rJht89EmCmKkneqNwwUnJY32XQPK6oq1Gjrj3tjowc8k4PB6YSfSNPsmn1zBDvZmF6HpJVGxdAxjcjG",
  "key13": "66JSMhHnqgR5QT46XJei6yhfhC4WcSWsEUpqfyGyWHbq8SGBkGCwhBuqczAfVZUK2Bjx57S4XTiPpXPTXY1mA9Rv",
  "key14": "417cmuaGhU8rVUY39KUrggYMpKMWNfcd2omUZne8jvBV7k5QMotoQYKoUQa92WYc8yMg9uCAH9hrS7tdoAYC58w8",
  "key15": "33joaVARXLcpZtEnzZ8MifYsWP4JKsTqYv9fYsHhofVp1h4qnvfTsDnj42RHPJc5GC7jVvETot1XoqEAoAxRie4W",
  "key16": "VSHhhd9g5iJnV3MLQ7Cz1BvubtDv7sbfugDxnYQSujgrM8om5HKPVmAgkzJeS6nP77aGdujAzsuWbELmWB56HrU",
  "key17": "5zBDLgzzp6cVGyBcCoa3D9VbJXqEXdFW7UM8BqZVbbcHtMKbZtQR6WFyGJ5vYkNM8eRGNMjRHihDzrSEgvNgoMAk",
  "key18": "2881UdXx8CqkbGfk3ozi9AmU4Xj9NptFP3jgVwYYXbDpmGi192AB3Vekh1swVsF32fLJHcu171aonb1UK3K34TXG",
  "key19": "5QgFvYEdTeZd1c4RMBcG7VjoXShvN1esDRAraqU1GYHkj5bAcprGmi3K67w2fKt99kHo7ftKcvrTjV3PtA85ArW8",
  "key20": "5jtcquJpfF6dZUUQpeaMJPFFKHCGwMpDCL9ezxwNSpFgMLu4NwHtUdMTtQPU9AKnA6XZPXDL1NRM7DWKDKLeh6JJ",
  "key21": "44z3xTBacYjTnS1UhS21t77q6LDqZveHiqamudsPRPDvsGKkTanzE8a5t4cDcVbAEhwdDS6Gg4JaEqiAbdD6EBMU",
  "key22": "3bteBuerfaBKrLy6rmhizovV8xcxSLpzCw8CLzKbpxTjWaZH2H4QjYd1DDeu3J6nAuXzhWjjWbPTaLKcDz8bjmxk",
  "key23": "2cHkjtdYSVZtfWawS7ZnpUYbsGBZPRBVkzQCpwsAeMycaNevBtwxY6TBtYU6snXywyExDv6vkVhP1L11PhxEGs8g",
  "key24": "67b74YV98Jj5VJKGn7NcqKQhhAiSCC9myNcL14ghzbUnV578wwu2d8utZhqVDuhiFtURMKmgNgs4PyADQNPibRts",
  "key25": "3F87i5xfx295X5dT9ah9NLEeUFCUq8VPD2oQzRHBPxUayE1HB8ETjBx1Yyh6wdN7sPsMJvgDPSF4FDokdUzHb4bY"
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
