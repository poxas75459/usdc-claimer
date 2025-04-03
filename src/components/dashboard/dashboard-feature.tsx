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
    "2XWZCYe9Gf3xjzP9MB64jhpR9JMq1sLbt6XwzojTRQcrA82ZyxW7q4ReQdCHLeRMPdDR6o9ksr33rB2nYvsUnTQb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nsNBLLjbDmEXQUwU9htejdN6M4UuZ4tmCAUcmT2NBW77sYpaJpoD2poHAarT9vNWqUv5J6KEjtJ1QeTof1LQ86P",
  "key1": "4XgZgvg6jQikhgetrZXVz4BhKLSvgTN5Y4LL542m7HiMyzN8WaTSQ1dGunaYf4mrwihWq6fscmVDPUbYTTh1kQDa",
  "key2": "3MEfNN1qJHE9jZomK5VP2RRmpWxxmgTpZdoShbjHdiuR6FT69YoRNzX6KRxpf7qkjpSvnTEVEnfpeoGH6pewaeee",
  "key3": "3c2XUVsocmzcCsq4g97s1yrQyjDP7pCLfUo2aCz9RQLQCwbC9LsNpDh6DPzpS8A275b6nRMdLMjaDR2GUA2wGwTq",
  "key4": "4BrYPNKYSgYrsDwVHBCU6kaP6eeCLfEqumnprF8DcJKXtxWa3f5PNcv3eFFvCr1mqgQiAkjp9DG1CssY4bg2wSAZ",
  "key5": "5CSDFRG97rEu2oyBh7JYdbG7ngAkcSivesT6mEzvZjhskSo1cuvKypnZtV7MkdUpUbgwtHCut8iBj1LvxVZpBX9H",
  "key6": "4p2qxbpjoQHgre3Snf7gZqa7F79pySefnYVJoz8hRJZ7bxrVuXWKk2265H8ShaPmEYkFyTCGzmmUKKwbZ7Q2wuu9",
  "key7": "4NTzQVX5g5PUQE2PnUBDjrdK5U4bztDER3fCtGqpUokQD1WjcjQbtPe4iCB56Hr3BBbYQtvEEgcdUwuZwFWdnXgr",
  "key8": "5BkoH6yxyH4UJAWWHd1JrbBpKfyudymupQe5r9dmBunGPCrLEcsfMNCRcTzuuJRGbA4Dd6vh8TTYoU72tx4V1DtB",
  "key9": "48TDiLgWmxDR2zpYAMjeMvb8caBxV2TyRhN6qBghs1xmXxFveJT1PeTU1Am7PCk9qAYa4GqrCQQeuWGbyrNYcy3V",
  "key10": "58i3hLix3V4KnM8mBBySYYeZ2xaX61XstKc71F9YH87uuckw868W9UiX2KmcxhvbCjKdjWhRCRu8v1mNrLSxDPod",
  "key11": "4KU6aquF5zJyTBQUhcVvfEHi7TnHnvGptVtTFtGKDkVwuBMYKkZ1sLLLWDWEtBEwVvmiB6EE3UXR8XbdzMkYmdwQ",
  "key12": "3NnKE2erwaFVtvL4bfgpX7Nemi3vfbDcRvVxkYrsiwF2J6mMB2zeQ7adbJ8f4CbKBSaotZA8XuGryyTGpzaBTLuT",
  "key13": "48gkGgzpyM8kX4xqvzk2eRFzDjtGyJP1tgZNFYdhBuyUZes1hSCWNFs2UCw1k4cs13Sa3fhTwLxH7qk124s1Y1Lq",
  "key14": "27dRyneFRbLjW7jw5Rjw9M5Hc5p8Q7GnbrnHbvwsU9EUQwooVcjguBbALu2dFzVbjepYjdmNNUis15Um8euxieUF",
  "key15": "4Lj6zHh8wb47NAtTSgcecAGwuxmMU9p6E32NgHzK1FmWd8KA5qksQuN6CT1piyHzfNWJiXHt7Y6a2ZGR77SsFwy4",
  "key16": "2mwy8GLPPcSAP54LknSyuQ4F29p7GRsLTwpDVHsxAyGPSRAseNrhUBvZ43R4fLCqTZVz2VzKh3GmiyD5LLqNK4vK",
  "key17": "hiEJroWpqTVKt6coCm5etUVioZSVn7qxXf3kdaxmXKq7ohrcmiG2ScKAXEXqT3LeHdxC3RNdPyyKnq9PnZxwjjT",
  "key18": "4RvZQZJbdXVqCQRDD93M1kcLF38tkamNvjqdfCgf3ybD5kcaZhDWnZwuHadLcRHqoK1PMucSmVgXQa4otsddjAcS",
  "key19": "3tR4ADDzjobkb2xznZGKcdsJmgXgxQWKui17S6DgGUU7Kn51zuNRBEb9sECYVjbsiXegQnx8MTAhmGGyguDx9saX",
  "key20": "4KJRg9gyPzTuyFsQ7FTzGz1fcvvQZmFLipxzNwZSuXmLGYgDr4jmdT5UhFDqmYVswDmC87A2Ww4tf1JT3coa9SuW",
  "key21": "2QsojMkXG4FUMsiaf73u8kfbfW1BR4Dry3PZAzWudmf4gDjk77Q9a6sji5nqSjEiZK4rD2i2AzALW8qQLDLcahrq",
  "key22": "NJUCtFVygrfjdHro3szERdhyFvQt6QQontFGhAPLzJadGniYcDEJa1oPxizZZasf58tcZ7hgh5dbPJNhhNUU9WF",
  "key23": "2v2RWPWe52Y6BbFjYBtfyZZgUboAhzLQoFoT8yHyGmoGn8kHpr58W9LJphQmDWtw1jTpRU6iaYUmgggM31iCXjbc",
  "key24": "akMARroKecsEoNGc5jCbb2wYfmtrXKLA9gy3nwtD4ngB5CnzBUu5mZv1xmVkCUF3KZ4nwtLftBqAb5nE8YyX6UQ",
  "key25": "2r6dPQu2VngKgZ7tnHexwprdQ5UzNoM7EWuUBeDZRMeVTYhxfafvKjRAKUohvYtFCoEYM8iG7QeLEJGhSQLnzop8"
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
