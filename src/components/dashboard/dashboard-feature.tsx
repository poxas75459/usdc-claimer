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
    "76WR41mBG6gwZPqD8B2LwfWd9wL9NhAyoC3MKEtNLgu2FrC774KuNa8o5jLesSVrm3JWs4jVVcMQvrectAo3xHK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gKH1QWjdLA37ZVKmKp9ZB5PBokUeLtbm1wRrArCteS6NG3hYLwADWRgXHz2k9FAuuYLZJ1qLwCP1CCMyVJ8SfNp",
  "key1": "2fbLoRLUYEjtZKEy8QPWVtZqxyEZqfjw8s5yU2caiHTP39jKp5AjP1aCD2pkDTbBV2DEvvDvFLzanofeRoxKDUYJ",
  "key2": "2JssKepUc5BALC61zDhYBvtQbwML9PiWWqjojpVCeaHM1A5k5QMEbnMuC3cbAdZ1ULLaZFfKKkxvDBN5bQBHBQEb",
  "key3": "5ddi8nkAppLzdtaLCG5KtPg9Ht9SdDDvkC5frLEu7t3YfnKhh5hTmWKCBpnW7AxSMnN47yZx1LjJELX6HueGdWXj",
  "key4": "3bN3ahVg4cTt2dJEiaetdK6ZzotpL1GZ4hNUeTTymyGemX9Z8fsuBCgcJfVnk3uNve4f8zBhEeNhvUL8V3QXjqBW",
  "key5": "4kTU12GRsiipXqMsB75btMvR5NnBrXpEaJQ4abE9X7EfQCcTj9hb8hk4s12NxFc3zVwZ2xh277NEsTVkQgnVaPJb",
  "key6": "34PSqCsNPhazxGwtzuvdDAa28dRxXypDMa4cTFbnZRJ17j66V3c59ViCY4bbiCYbroV97GqobFce8RcN2f57vDBd",
  "key7": "31BqCVfNFPy9G78NZxZeArwDNgyyXGDqmbB4Pn4G5jyjrKr46QhfVeYZj8Qz7FN5By3ryUQpTryhJ1gH28pHrwZr",
  "key8": "23YPrs68ee6SJ5hY9AkvS28aSx2xATuiB4YgnfdKyiiCmum6bJS3UUX3giYGyYiqxTJxCTK2kUb6WiPqsubLvhWW",
  "key9": "PovVWwUaYYvtWydLHpiUPSgjuz9cPLXgb6np24QUKZg5Tza4meHXQ397aKjrtMQpGXrwXm9o8w1i9CcG99NGESF",
  "key10": "4bFhbm6VhRmmGLLyGCXyoP9z84qCbEgRNxHyKnKuAJoLGZicJ3nkkR1GEdZX6zTLWkwxbAFAGvGFqgPo4EakAKJe",
  "key11": "4Y1gpaGyska3hjaak9Nro6oYnJ7K1LyBwqyGqjscPNs6VzdyqPBE3ocrbCJEK9u6m736AgCEnnaDytag5V1ahBzh",
  "key12": "3JQkf71LxAs7V8KAgg9xxSSPJTpziQkaC3oryvRfuy4yy62YMxQ3iS8Eo5YH7xfvgAgesTNHopX6HLAAfGxRjQ1P",
  "key13": "24Jb5ppKNpxYiT33sYUq6kwKTUwhNJ397sYveeb4EDysKG8i4CF3em8wCjHYYjudWJ8NK8NYxVYiUcjbZvqUNjXj",
  "key14": "2jJY41XmTPEesuTd9MHjLxLpJoPC9KQSa55prhK3RwiJPiM4UYVn6HJPnPNpPPU3U9ezNcfPvDskAyDombENkfit",
  "key15": "5fr3XTgAHTdrfPzkHPvqZ2Aa7pnk33wUHCrpETafjRJC63RcgSghZMBBnHQBf7zec4A2H36cXmabrdU4FAa89sZm",
  "key16": "4wZSVoYxnNfMVL3JXqYQGKvHWQ2GqVtmUpA1HqDpfStBp5r3fjjC29J5VSxQuVNARNbka8172ntr8xu7YuvTpnx7",
  "key17": "5J2RTtaAyRS9NvpXRh162FCrUT4qM3qxvDpczTSAg2dQwiSdubrpYXc57oqUZ3J4EYPaWo4hMRHqfSiAXb3NoWGm",
  "key18": "5X9y6ssmMVYuPzqsQdfMCaDsAYUGndNJZtE71AHn3QH4jADgbfWK6XLsx89t6kdDcxr1G5iVJM6w3JTa63M5k92w",
  "key19": "8Pck2fpivfB3rbpBxh9zmoStXc5XspahPNcpyL558ceBsJqJepTnkiiJRpxrddkUTVDPZfWvQcfKyqtfR9pAG6j",
  "key20": "nwqVte1r6cLLQgnXSE1wBoMWmb3jF9V2nB1HC7hGMG49KAR13JRhsDgi1Lmf4Mik1akwNYNRhvcuAaBKWayNgad",
  "key21": "4AiF6NRgf6Jxe7SM8GqvH8xQK4EjKxRL8tzz5dizSoEcZvZUe5QCa18sKHecASshf3jKnfzDXQmEqUpgwiyMsSRm",
  "key22": "DdEAxghcdcaFYveaL4nTsXeUqrBCyQvAmSJXpFEvKfAjVVSfFdVVjKX89g7HuRxWJ3HwUNAWtqHhvujeyVs7m84",
  "key23": "5pg3BPvqzxfu2ydDPJDsB4j9cY2G3gnVWT7JTpVgB4jsWTHFQMNU8Sgku4SnAL8kDavQGBGd5RR8cSqAAnj4gyev",
  "key24": "2VCwVSQWHAvJdEycBpjna3eQZPKvCQ42wKy1m2gysUazWzeHpyDvv6CCMHZ1BSfovK4vshouNqrMSAAx2GrnJQBc",
  "key25": "3FeYSo9drDNdFMnTsx52vmNasUEpkzK9vAxFH7ZSPLK8aHKvQSYzLjNLmG4hosPDiHfNMDjcPMJa8zkTWUaX9G5j",
  "key26": "5i42WtdnWt8ixSoukEnQhc1Bg2zUX55eLtrri5UxPzYXArtZUsAXS8xP6ug8uMEFYbkd4981F3XCGVH7XRMDe26e",
  "key27": "28tC6A6fbdCJxuXRa4RTVkEUP4bQMhHPbf5QeBvAxQhrZCRz47vo1vEesofissyAAZWHNdpr2qudmeqGSRp1xvjn",
  "key28": "4nuF6JYe2LUuaaiQNSvnX9q2TG77fyqQ3MHkdzjgDoSSqXuSTX8W3YeHkHmWJj6B5qTtK2JdjEYh9a56Hk2QqSvW",
  "key29": "2WGHFpdnQG5wrSm6WSmLVYQLbWqAgSCeep6CtonRAzL8ZEmxgSjNywjq5nwrQxuu4nBPecatWEFtycnboa1iCNUx",
  "key30": "5DBQ7b7j1b3c9ffN1v6F2y5KqLeV7u4LQcsMsG76MtZNZKf94P2c1HN7j8KK8gbgaXQZT3ouVfEc3Q5yDyaC8VVF",
  "key31": "5iK3hphGowEoTwF21iYDUta4NCK8C3nN5xrV8ZD7opT79EqTUw5EpF8iDSL2jSJukrB2ALd66AEJdkeN5RxXLhFs"
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
