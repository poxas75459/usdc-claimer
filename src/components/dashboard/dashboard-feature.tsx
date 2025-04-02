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
    "4U7LZ1vEZN3xmoF9MVUFoEbb1zBxbVgqTuVzgkjVLS8Ntd8UXiED4oGK5VNAQ3EDbWZX9wN88WJ86XQFvdrjrXUm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q4xSJACBiqrBagPTU8TDeGzTBhBdR1FLy2Yxzp8sF5hJrhyyJQooJUFJAznCU45tPit3LBUAiffzVFMqQBR9853",
  "key1": "5HGpdDiA75Mc2QE37CwbpH5wzG1UZiLthJoeb2QzUU3YbZUmBF2zGDocK7wRAX7QjgfPvpxYbe7sfUc6qAGvX6r4",
  "key2": "SK7qhHgM1UBWtrehmDEiZPhBnGK9cCJmvJsv4gnNnVe5NQq24r4Txqfkg9XLvtzsYUSNssrEiJFqyhrnGWYeWZm",
  "key3": "34AYeqtrRzHoCm3t3g3QujGmvaUAiNPGM965WZzAw7p9bYVHNfDK6vi8ioAP4ECSvwF8U3Fvd2RfLJJW1aVjnGbZ",
  "key4": "3cYitVgvvcfJrXigSNAkBQSeMU8ggksjWq9pjPMBPQ6a4wFP3HTRYwqGrQS1Kw8k9heKt86d63inVpNF6xJzpYz1",
  "key5": "5nq7REXnprhkdHWywVYRDe5w4Lg9qLHp9UaFritG4mbfC4i6376F8pzcHTdxKXs5KJyfs1MjK1t34TdEF2VB1obN",
  "key6": "2FcxwbAG9J7XLt38B1a9RyXc3o5b96VMKhMDijHs5uSKpHWuMRsGbuqe5mC3ASFUtKhD6yXwi2XrDLW6Dt9qTJTF",
  "key7": "s5wM8nD9yMWJis91mP5W5R9dS9LeAUaWA422LLuDRbzLJMusxAXaFprsBJ8To4r6sb6dANqFoX7abSHpW79wXUW",
  "key8": "2oTTKd3raGHuNAyMukbJtoq8Yb4sB2fKjDiMkGfa9zx1UfxkhLA377q8pohWF4EZShcmS8uFdTj5hjEm4RSTBv3u",
  "key9": "4QGUcJp73kcxZHTtYQwWE9kfaQrzPb8G9nYywifdTL7mHSg8gSD5f2ZCFqvukSXmm9EQmzMVsoMrKtd54ax5uPtw",
  "key10": "3ivz7aYRx5EtsZ1bWzvjLdHB8Layu1qv8YVAm4MHDeuaUFMUbJzD3g24y7wLnhPiDWuU3FKZzU7g21Xy6BFu93cL",
  "key11": "4Z9TUirrrggb2j8Bw1VgvcAFHLHfkxnhzLpbZiy8mLGHKABAkoHg4orCphSG2RBdmXfjzoQ9Bh3EKGrNk9W7RbeH",
  "key12": "5gv91vtX3XqDac9LLZdtDvHM9HvUDDVWd2s6aPjof9KDn51UFwXKax5ebjZKi3aYiJH5PsHmz7NZWBZHQdnRJZK1",
  "key13": "4abpopR1FouUxNfVeuRJhPnaMqhkwfhybbxmXfbA8UEXxMxa3RYQJifqxBkENQfhtACrVXcLN8BhbMWyCAHF3CJz",
  "key14": "2Lr7fWHfcf1Pcdn3i6aCDvdBwBoBXd5m4n1XQ8J3QHcvNJsN3ZW49RXLWaZ8XsMs1hfm2vh5nbVtuYC5vh9XAxwy",
  "key15": "29trP6fPkhPcZdrn9wZUiDb8k9jiPieZBqGvmBAWyBPoP8uo64kcYpSU5UajwGhtc7m21Ra4Q9nis4A6wQscPfx5",
  "key16": "LmvAUedhkh4878o3kfLUYkXd4Z4xqdqQWGzVYuDMuUgYgh9dzDdkbqA9UEzhXBQRp62RKK9yrrXxprZRwV8Fype",
  "key17": "3CVZi7oanCEUhdwMbrarx5Ww7hHZj2MNRpFgBRS3bXufn2gc92Ff3xoxRk29oemKAnwPrxe2ZchSEcpQtmUA4xJe",
  "key18": "2fgDcmrz4DSQZ2FbUywZeiaaVCaQZiZSPQRVUh86qWph9sQBYHLLMmHNA7VcoGGTDLrSjKJXbiHaNEAz4Wbc67wr",
  "key19": "66CLVf6J43BPn68hsHDu5C2e54NLFJWaE1MVmZcERVoyDxZEm487e1tRyx1oM7QjhHo7pDELFm4HdXQ91P4RP7x4",
  "key20": "AeAE1SHSJY45ScGzLnYwyTFwHpy36zLx4pUbJGT8vT4576rbk19jym6EHTmx5PiFpdE7kUt6aK4EYyKNMT2YiJN",
  "key21": "4jSUkTxnRD4zuPfQAhfJEYQY3CmBvZpBHLmAgaGgJNwNHVJJcFwfnHJZ2HaCWc4inhycYXPcSHzFi8imyWEPsdzk",
  "key22": "31ZgtdEiWFjbQZKWuDa47Bp4877pQnJ4fWU6iJhGfFZYTfRNV1veY1ZEE3y8RZM9eddsqyNKMty7sHbbq34kuUUb",
  "key23": "4ktvrah6DHvTqxchopM4c3vXcd3NzvSoQkyLv1bRYu54YvBJsAZAheXTwquFGUM6pCm6926bEUtDwEHg4puRyYVi",
  "key24": "8sWjk4Rq2d9igDbHWxpCLh2qiahX4s4MZuLiBQZgb5U9fYs3NjLVCWdwKZe3jQzn5a1DUG5r8J3znYeA6QvXJmS",
  "key25": "5m2KjTxL9uk6oS4V4mLmABH6YLGNhdbtT6bpY8btuvEXHMxtyQEzPg5ixwyUy4DFxczdS3THD9rtJ81szRXZSNSp",
  "key26": "2SaDdzz38Y2At8MXuZnGDUbScoEvCAUv9wABmdobb3F3zJgwtoq4XqWXy7ynYgUGBDyqKC7hvWaji1oYW8MbbT9q",
  "key27": "24wJ2zoNGEDdoTfWaqstfEAZ45i2b4EHQEFUbMJxk5VznreMpt3wQCR4KCENTah334g99CzVnkVPYdXXEBtfRurK",
  "key28": "awVrMYL5apuzB56mivrkRApNQQTYqLetTgdr6S3pzJmaNbLJXpbS5LDshpzUgzNHiFhhLPAHv1Es2cXn845xbAQ",
  "key29": "5N37RqvqXuFvUcCWfGPWhY9on5vSSZQjAusM11kGupR7dWjDJZrDqVLhUed1iL72QWsD1Dv4aiHKFpv9mKmfpKh1"
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
