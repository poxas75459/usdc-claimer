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
    "46DwSKtYj8vBdfN6q7wx5JYBNjKbX3UDUiNYqutptbaWe3S7qRHecxGP247UY4tDNCt69u3QMibG17K48WVtYs97"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bgtVQNWs4WvDYxdeFhWkjA5qbDEgQ27oJyvpMfr6bF321emDNjavHr3YkFPfjSeNf86jqQLc5UmuGbs32SmFmLR",
  "key1": "46Cg92BPPSS8d9wBgprsBWZuBi2BUrR7Dy8NheUXkDiSBkGyDRdybeUaQdpZDTbW2Wbiba8vAXWxzMdNY6psu5xA",
  "key2": "3qXcQA9BgcYkbCGwgc9k7VkFxXYS4ADaBQZd5auApwWtLqESosvMMEdCAduQP9nFBDPgeBc3GQYY8Rs7KbFhYAFR",
  "key3": "2nWWwPwcsLEpe11v9dhGhaB9t7AXQuMdvjGv2CYJdMCGQP7CvBme3GA11h9Wr7dt6xwrbK2i94DLJwwPnCg3oKS6",
  "key4": "3FDxrzmkfmPP9u9MeAHBHHNVFqxJZ7HkeTAz7VageTZJjrxABhf5GjJKD9VJdfpeUUtuBYJ2S67fP7LnNzzwRAxg",
  "key5": "5vc6nGHJPfcQJpfXK56yzBSgHq1hsovj96Bk1CRhqVVDEBt9QHQEwFFxSDvuphsFFXC5KZeK6Kbz2przHNuSLwke",
  "key6": "4AtWHn4H1FXppe9aFnKq9dwfuEGCzzBJuSCjBP7nAsZsynooay2UCZjushwwrURA8P5Z7TueanSTXkAN5AstKTs8",
  "key7": "4YpxyxiuLwU6z9HRsbhxDRM3DzxLSzyu8bT2ZjyLFHmUvL7E2UxVumLk42FciMyfp9fLoaBkdQNJD6MbNdrv7ufw",
  "key8": "3n29hJNNMA53qZGdbwNRMKKndSXnyv5qhb16gZxR7JzsrrYST8aBpd1HtYP7kZHxDC8U3r2iXbJXNjWnTWtsoCJY",
  "key9": "39fT5Z2mCvF6ovLMJV5EHN3qZY1jFnkgT9DDZ2br4jn9KUoKMGQ5qbj97VWKXABQBSGRMb3RxDSJZifW71K8QrhQ",
  "key10": "pmZeNP9oMRAYL86773YsnJQ47KydZeo9suTGSZxU1cxpKXYVCiiXzP8XXkHqp8YVURjibHz3yzfcfHBKPQ2Uub7",
  "key11": "42CFV9bayfFzQZpQQ9knxxAUCwSJzkVEtZdWeYRNUkJBSBA6dorSYmjTDaUejHG6zguKjmxWxhjJacnMqXikc33x",
  "key12": "5PuDv57Bm55Cq4Ete7XBJsGBRgAiCnyTAGGVFQakHhxJExJRWRZZdtyzgH5Dfq9M24t5syPiBoBf7pFinpAXkD5q",
  "key13": "3SWRnPc8RU6kFrV2NtbS81Ly7DWUFivEobwC1zmVAhSfo31LNcs27rikSXvqoDHiug7u2sFeZZyHDyBv773hEr5V",
  "key14": "eupDCnEeDgikZL3FbgNpUYRJPfTVZ16dynFgLSxk7mbKAwKXbtft6wDHk32spfMCqUG6S6HDF5fJnXYYpLHYT7j",
  "key15": "46giXva3itnNS9FF5gdLdkshf1wWjTs9eacSV8JvxRfTtC5RM2rHVnKD6qomqzG5LHnZoBk7kZZijz6reETf4bRk",
  "key16": "AicWdC5BtLAWjFSNkr8JNQMFsq6wJAv9NU6c3HjL2mLGQDMir3aVrUmeGdiDpt5oWTbRUYZNpbrwHzcLN7fzpVh",
  "key17": "4hf8DpT9y3w2kEYKvFutjDxbWEotjJ2K5aEw9NaTwyTgTyg1cFuGkiR7c373yjpt7VchocP2kcN5NYn92GxP9cJh",
  "key18": "44rGXWmhAWx699SfiXkdKYv9YVum3swsbfNJGNX4goH3TsYxertpVYYbiFetWQMjAJvKxEU6qodCnGz1fmLoKSbb",
  "key19": "iAL9hAbP6pRhsLFTXVuA38A8jWwN4baD1jW9tcL1bLRXhvxrt47YFKRien9p4FASqv68ef2nZqyXfYLA5KMvS6k",
  "key20": "5U6tJaNpLH9X9ftkXnCdCoLwSJi9uPLXqyVqMbEUAJW5DGUkhsEZSBRz1T9vvhmFbNB9jmLMxVME6W3sDgXdgdBK",
  "key21": "3849JgKwvANjB4EQ1KfePnuCNAUAmTHSmia4oijQS1pY5CyCi8tSp8RKuwYjAHjDutJsLMj3TxVhPx6zgrWGr4an",
  "key22": "wTjTUY9JcfH3hWhajVvxyy3Rbx2gaVA76gJm1qb5HCKUJaJjLxr42mRvAqv7rKaUwcaHxEL4Kbi2qkpHRKF874H",
  "key23": "48qwdVEWo48CfPwuRoSmd7epcHuyDCBMrDHpagAZba7cB9Zs41Jo6uvZXVXnp2rqWSeAx4pMzgFVWPxrbtcbyqfA",
  "key24": "2Mc9Tdvjfpf3da7pJWJBRZfNvkgdq1SphREs46J3R4VovBF6sw8QnGB3DcfBW3tgfLcYQdW4RjqdVK9FhPSBAjXh",
  "key25": "27D6Z3znXnEWSKQwxtfGdDskz2pUgFxG7w7niYi9JDW9btQxoRZ9BQZqZV7javuPF4VzVuAGi7sypVc1rLafyQJf",
  "key26": "2hoafv582idD5xFYKB7xb7k6HJLQQUy5xGaTFothSmpK2UGVGeHZJB4bTmmKRUobeU3pU6Uirk1g4tCriTjXjnCg"
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
