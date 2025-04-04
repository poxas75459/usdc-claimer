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
    "4qHBTQUvzyjzkiZ3LPfwyLs8HCsdVR5AukFeVLEUjzZDTMhEY3o99doMLCfNTFnj9ue8Qi9aWq3STW9CmhwDFTg1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36jTcPQswXrAUBmdyhxXe2v4zDndwuxwjuLhF5XaEp1Q5NgRp5jtD42uqzYfHZqrSqcmgiC7F6D13NXPwJmXtVMV",
  "key1": "3YrXkxY9SEzUk97BrtE43NUZ8MCNTJ1ckQXhS2gEVit7ErqYJCe7a1fE1cZ5KLsn37DhdNURCRAr2HRkDCG6T9ns",
  "key2": "4UyZ72KYdLtT7TZCxbgGajfezTQGQYKrEoKnrjYTHGRD3EDNq3P5oJrkVJherb6aWBS5o9gX6L6v7ght4vSLhB6p",
  "key3": "4PrfzxE44MbUZ6SFaNCkeQKV41siYvu7NdqC1CZmtbX6oktBp8g5xH3dmAxeT9NRQDk8R86JUyzhKCAfHRZh84Xd",
  "key4": "5nBT5C9v4sQ6qJsnzAPnX12HQoEGemNKBsEHxuJDx6RCVaf4Fz56RpyXUYutBsNDd3piqy6cuqQZ2DCvHFfJxGw6",
  "key5": "4bwppd74Ke143Cmjy3ZGevnQCoN9X5qrQY5yA7zGJ5JzBVdNRdf4FSz248zF6im8aHog5jCE9HcQvdXyBLoWQqJv",
  "key6": "3jg5Ndqn7kMfTDZ5U3S3UvrQo29R4iHPtXU9BofyUgJ57gKnTba3ftCSN4sG67vyZEANDJGdfRiTLoAZ5WpQndz2",
  "key7": "2tHJJPJTBATKFzD1fETxD4JnwHZarCig37ZqSFuPnQhavyvyuX8HXW8B2R1wkB76gfjhRHvy7ptvC2kfbNUQqytF",
  "key8": "5QTipXjSWjFTJDEYzNXpZ1vJRwy87c9vKeViAEBGPe5g3HWqDZkfvLFFJpXPVgyFKDnxqHYDP84ev1vDwC6JoXTc",
  "key9": "4ANujvC5DsDom2WvnYggwjenj4miXr1pwfCKddgBKTFpLq9EVWX6p9GAQRCJF1akudRXNt5CRsnMozwBtFPNnEk5",
  "key10": "5KEzuZELW43XEs9jLnD8oa718sYjLDzq6yDryMBnSaN5ueM3ExwoEeDKd2aosfgHrMSiWqYYYJtEojNJsBKkYwL",
  "key11": "4fuCpsp5aDG1KUs8M3WJGuBhH1EJWu7HzAANAG7zmEx7jr98HipXWyCuSTHCtEJxZep8LG2NZ28otAFkKuaxppkB",
  "key12": "479HU5Nbt5wvbzHCpyF9j1cf8kJNThKnUq2KH8kbNduwWhHsRhTxYx4PfkpDTjNhZzdzGK8hXQxzmMLcyiDwHUDq",
  "key13": "4isVvfYAmzHw9VMMzS9YUEtmPYiYH4XTvGvLCQBbXSajeUo23DoJNFdJErpG6GENr1Da6hakcxD8fVP1SW8sKXhh",
  "key14": "4XBZYzx5V2ssbd16t4iVxkHkK67kmNmLqM7v5873UmFGeWbvaTNvGkF1Av3dKGejsdm2f6tJShaCaTCkntiRJhz2",
  "key15": "41RfTG5G8YuBfC3Ca9hfcgycRjyQHbiEUFCrkakzyHFCwWnuoVVXtmjQwEQXQxH8NtqoDKbxXpwfxALgXgkf4bxU",
  "key16": "3kZj1ZSNxqVWUuMJ2R7r6P1CWsZvsSUzFJ9b9gTizGGa6fz6cG6U9ismwTfpJiEb2Fd9D7m84nfk7AR7PPxKdaq4",
  "key17": "WV4BdikaKArgD5fkgaKETxwMjoXUCi1yHMyezAonLA8MbWzEEVLtAwybn25u1fssuaoJ47ZD5HZ8Khv95VHjMB5",
  "key18": "3iMYJ4W5BQyKTbNCMcKMGuQSyXyFsyXTeHjkybHCHdDiGjVb19KHEG57FFV7iNh9EuWHvwknwaRrPpYDVTocNTeR",
  "key19": "4hjjkcknrczFB19YWErRqnfTvLgCXV7cesy8aqai1yNeHZeTixhEoSoZRPpVq8RLgWUkoQhE4bQ8WwzzYcBdK9Px",
  "key20": "5XKvtMZFi7gCT9hFwxpBZUr5kYsfdSiVrZWtLfwxqBc8KFQViyzt5T5j9KQy7gjo1fYWkvHdh3hoevBPd6EyzGZ7",
  "key21": "4E5HkGjx8RhC67UbDhTMZf5EiHxEFVTruMrP8MuHy4ZW9XhccMbWb6RJJ3jJcrx59zimTaSQeGQAGvRoQpCeM445",
  "key22": "4j12AWEfXKqWUFk4bWGVvPxo1eSEYdk5SyFH6nv7sEAap8DLz1Ee1qmoKxLPnWnkCPnjUVuGCQRatgGmA5hvdvat",
  "key23": "4GSmcbHr8v6h7sczrAdd4cxmCvhFb1CRWqpG75vqd7Jgb3uxYmxYAfK5NiPS6W7o2Vo7C1QguoLtnaTVSUv9mV2x",
  "key24": "4pRr7fG6hj3ZEXr8sWZFdNTRvgSpYXaZUbvkovgdBYC5XANp3YRb9sfSGg4JnGCeTQszYmRs9qTB6dtAaAcirydx"
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
