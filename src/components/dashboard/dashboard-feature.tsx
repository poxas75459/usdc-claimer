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
    "4gbTWhgH3PVCLjtoz52Kuptn7qodDhqW7QZNKytnJEp3YXo1wSB2jwHkFkMcqxnXpgqwwKyrqRfg5LTrCiZGAR1E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c4E37SZTN9gbc72iNvk1MTer13CFUaJH2BPPBKxSDowRkDJ6dqsiP8iJjWm2mMYURuTEis27LZYGGHmMzrE12tn",
  "key1": "4dS1C56GWJdRDbaQHpHXMrhJh5FL9k46YiSFFmQJS1i8YRBzVwFyshyd5G1xamjtrHi7V3qvQZFE4nWphK8k9yzS",
  "key2": "5NyHUFHBnPwTMZRiaUBhYZoga5bZLfbf4t6vufvyvSuh4naPLPTVUc8oiiurF39CksxEgqRRgNLYzms2byR1nK16",
  "key3": "Th6SUDvWVMf22N9cqAffJqN5nNLwjw1ttzDUYmW39dHE94SgFrM5NP2oL4MV9gLRpXUCbCpSzMMzaX97Ku2gZ8t",
  "key4": "4E6UDWJnLAXzSweDUTEAEcpdqpX1YAigFakFLgL8QAa7XnA4CJJitZPwJb2dKY42tqUKrhUUYFpMePPNcJjsZMq",
  "key5": "Px1HD4i5ggUz8qJx7VCbPad9f89NEqukZfdvueDnAaSU3bTmQDHr9DEpUSxKjNYyQqGnpaATo7mVYTgjxPiSgL7",
  "key6": "5HE5jitfMLqiRHUiJ8Lu7V9CoxwBXCmLXTB7jzqMKtBHC1norQgynR9HgDwVPUuLGGcTbcMoLYXJevWW3TndtPLG",
  "key7": "2j4kdFCwuvmFXTZRk4M9styqg1AKQYabpQEZiwtPdjCEpLgYCTSvYSeZFeu6TBXw4Yk86mxLeFj5vPDABrZGHafv",
  "key8": "35aVoLKDpG5jgzwJpzs7KnGsHEu5upENHFC868EZbSkJmG4hnwhPQv5wsSgHXecAXQEjMZ3UfuTQiuuPAv1wgLjB",
  "key9": "2zuGaixAgLQoMmdzPZgBAkVkvN4eiw5V7sotYEKa4knB3Jq38WfhryTknNpEzvzDRzsoDevQnnryH4VzDLHzpAU9",
  "key10": "3NwgLMcNtfuyLCpykz3kB2xrNQgNb8sBwkvx7fzbHCvks2i48oMSrgVRHtT7yVjWVEJqpJEh5kj7bniExkAkwARL",
  "key11": "2oXCcnyQ9RcLAT5y2kKFtZiR9Bshx3PPqPXbnaqwqDh1mfypKpBy5ubaG7keEmWDb2mczaauzswhhsNspGT8B7DK",
  "key12": "225Fd5rXNaVcug62eK5uSocqT7JNuxbEa6uyNrpULi7cLYKg958MtaKCSoKHGzv1SFp2bt3ntmrut3XUkhRVw2ES",
  "key13": "3DJeCBUdBe773YcVNF7QrpywsM4XCJ19GS6MR1RThUk9U9RsfH3UjQ2bCVBKgq2KS6bMiaDBtdFgxYxrLATg4WzD",
  "key14": "57rU6TuZHwqGeZgGw4YYztJLJXwtejSfUdxrbGhE2i8iLooAbkUCkyo6jxXpQuSKXkyKbr1SQkfM1792PNkFx4WX",
  "key15": "2AFmkRRnVE2MvwKWsN2yTDu8EKgmZpxFobMZjYyJpw4vFo5kBVUTWgvCjCAerJfV1gbukCGE3nTQ8Ybm4NahHRUG",
  "key16": "3JSKYkiqbEuYhaZMgwvJ8iKnmPeUhwT9xTqLp6fyaqbxbEgHknDzKdLCcwQKwkCsZHprf8mY2j5d7rPio7jsHZwQ",
  "key17": "76n5oidtdKZ12DexXVzjTmbRVCvr1eEJKRZdFCoq7mk1wGRzZW6ahED5CzYxJVbzzTnD1xcSKZfCqT5KgY4Er6M",
  "key18": "8nJNk11xTi8rbW8vrxwCacmUmiKt2tXMNYjMsnvEAv8bxqrXwUvtyVexBgwGyrLTFUAmkMqwRjDPijH8LkbNEpS",
  "key19": "5dZDnyL98VHjHC36yfhYkPay7ttJnDzNWBWVAcYoX5fmJPXDpT9RSYf1src3oEnDY85iUHZ4kpJo8WJfBbf1jXZ4",
  "key20": "2Z2c8RQ3fiDM28yk2Pwu7gKAN5MGkVGbTp2UiauyFDXHCnPwJJAzCVfFWXZMnzCqwqwh66vkNm3Kig4LeS4Ns9z5",
  "key21": "5FzmJWQBzNJq4VMXcoDScG3SZAX7RQsowYHUTffZfrAGjdZD5Yai25HmScg9VAR4XRCeY3ryVpJmozRb9oezNzqE",
  "key22": "vikn7hxXsw8kTheSeNzy5UjsmfhbHC6sQkecUzNNFUQLfWBwUuckkFaMQMtdY4wZvtbWWVpumogdeigsVLmVymu",
  "key23": "5inQRpHuCqV45AqfN9HJzQioNuC6hChRKcYkvXsZ5xc7UYU4QYQ7dMsmeDc5sKKnNEna9M8YV5T8RFet5iA5EMs8",
  "key24": "3TjNtmXM5WuFuFZHZufLZwSPjbzfMww877HWPWyJbK2qV87LoGgqYsrgpxt9L4mD45nD86CCxLP4V7kWvqPghhdf",
  "key25": "3syrP4zbyXwQuy7EzBQfAXdZwMWEpEew9ZvCKARwEao5WojaxL1oUx7aRh89nZSXhsth82DWSJ6PJvVL32ooyy8e",
  "key26": "3RfLqYzWMRZFc6uj7SDc6JDXj2irWEzxFgNphrQBkmKMCFdu3BvZeRmASdRNFEvhq14dxWiaTAY3dXuxS4D979aE",
  "key27": "5Y6CP6WEgJUg5w3JWLG3HQwMb4SKdzFvvXRP5N3JSmn13C8KtRLM3ahaaGnqw4KvWVXBFYN9EHnujBjv13nE6cK6",
  "key28": "3KmLbRsCjj4ZrLDQ7krSd6823CM3HrhDGmcMyvYBK3BiKFr4jY1CGU6mpMLqDsrw7ifzmwX3Cb94ydTGzJsVqGEt",
  "key29": "3cXTa2je8HBzneZeFteiBvqXCAFqHW1wR3P1nL7YNiCqyEmaA3SzJfbmUaWNGMXBbS54zKeAtrWioeLPc1BYLHm2",
  "key30": "2wofkmcYkmFwkZJSVztHHW5FM4PGFw5wJSer5ynBx7cVac4HNruLe3rTtJ7DGCsuzgXWEvZfThShCzQXZvUTaJCg",
  "key31": "2vaZpWNTsxcpdtD5h3eXPGQeqCFUnJYTtfqHLqgSfku3q8phGRdysBpdUuV4W7KvjWNG1kb4uogqGaJjcW8XuRxh",
  "key32": "89U6XgZTLnrr1FKRuoQmdqTdN6Xyszm7euqv3Duj5YPrQ36A39a1aPTQAuRkZohyZsYS9MPSzPhZ6h8ggEn55kn",
  "key33": "3hpn1WUsCXwsH8gxxy14Kzx2hmuqJhXtMCL16mQgFLWQakR7XvvgghFF5UK4wehEGpodzMSQMaWqkZrsxTUiwT2f",
  "key34": "pAPWVNwZYbWhPndD9EnbpaoKPddjApKbNrkuZfgfJ7UFCDHtAeWYUAv9P1V5MUKX2o1QW5mcbcoveYeMHinF8nC",
  "key35": "pvkFxsvQacCGStM4xdxSTTpVm3Lf1WTU9cQ6X7bhpuBQueFWywJKaEHf8yvxek7q4uxbzHuAFdZvFSYpRzS7n8G",
  "key36": "4dG1rzmxsgbeYuKXAW67s9bCuA3zHTQ2ri77r6mHPmFh1ngvyJadmaaDTeFmGFajxY5s4YfeN8maFYVx1WsfbZM5",
  "key37": "44nKaBP6acvvRHqmvmiBVRyBkT9HGAYhdqLLdenCmeBkPFJCW8GqSxgGn4U8buh6Q6WtBaqyGHbgM6XF9Zc21gW6"
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
