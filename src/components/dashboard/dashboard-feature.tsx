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
    "3DkGfNLoEBkVgb7bDydRJZ2sGy4WnCXWEtTbPZAJ4xbZkAXiiUpv2rRrzruZbujLog4KEkQ9VkAxpRbJbKG1KoyZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vzq5HfZAbVEUEvYm6KyDp1VmwFwgJcNKEqw22LzrLDXeJggna4mjMDu1vjQBfmLLJd7PczmtU3dPAQbY5k9ZJy5",
  "key1": "wxJ273nsbUXPaRdThdQYhoJ5fsBg3p5agShaQPtfzwkgPHoVFpPLkSuhM5Ros29KTHCJr4Q8XfvBFrRaqBx6DSu",
  "key2": "5rE3FC3WTNK4wQVEUJmaA1e42Gi8TdBE1RQNonXK1jnULtSXAWYEeLc8hr7v8xcXbdQUEYw2c9WakEgGDJ3A6G2N",
  "key3": "3MmVQXP42VaafheCWM1nFAGRvs4H97ev3RH8EsxMWSboU1tB9X4iuZT8TPsidyRk2JgQ2QHBPxyGWyydDe5bLPFh",
  "key4": "4VkVESw1aVbn6kV77cNwoYcXKXqGqj8LteR7qyj6838gMNfrnuFLKFVFh6oYrnhXDUZxqMZGnTqHy1Mgw7AAwEWp",
  "key5": "62aAdKKVdNE7wpficVSJ8m586XmYVdayaPgbA1nRgotDL6rcojzditvufof8Ph7vHyLcVXCeNqT7La6NS3nWWMw5",
  "key6": "4WZoAKyACUwH8n25yfW8vBqJjtm9DWfhZ4KYvoZeXkbA4y9ijnfLxLQ8Ngxi9MXCZHosV7tGi31fFSC1tkP1hpXm",
  "key7": "35J5qPMg8HsEw1EZ3tQ38ugXn3jEZfP96fnzwEyHX7XeByHSnJ2YimMnxGonPnQEgMxc1Ht5DpdoJy229j5owgUu",
  "key8": "4C6sCHbrVjQi5pYuHzMXFHPs8384PiXEqE9rSWgVMGZc6J7oJSYfg3k7PTodQAChg9CHydbpcjGLnCqV8853zQtZ",
  "key9": "2aqUnNyHXoLxnJ5P8QYArsG3fW6PbVt95wx1u5cLoTYX22tBNQsAXFukbDpCUskoqwAiXrHXzfycwPKcHPGNzaNX",
  "key10": "5qBVw32jQH8oYbS89CCtW86TsQBGt8igZGKroqyAYv5jQQc9wUcGK2ySzFoUsLy9yzYDVp8dzFLnJnnAJrBXDSeo",
  "key11": "3KMZAumjXj4CqraPoLANKtGq8jEW6ZGThPatxa2NsoG99jq3fzEu5nXrtdT54497RLBz2ruYM1naEuiB4QNYa9Dd",
  "key12": "2qWEJZPu6BzJymsDCjh8xfuBfmZWm5qMMocsMtXEbSbuU74uCbZ9Vn5Vck9mEA1AQWbtgiMvuzsownwkrKg7sbyN",
  "key13": "5iQzYHaKbW6Lb7ExtJywVstiu2Vuq6yqopnC6vhMjjGdMtau942DZNVMPK4WVfrphAXsinLmu7vvT51sMS5QoqBv",
  "key14": "5QFtEwvykGdYgZspBaLRWfAJGMMNF3uTMYMYDGMyCtVLkoWy4qDsfD7zLFPBvLmzfH7ZvjsmupAst7eD9XpYvZYY",
  "key15": "5MecRYM3HEumRvbgEVWWwniXWMjoDGgokL9MqXSjUkBD4Z2mecdFB7YHAMTtZEvihFJodWe9txppeiimjMudJAPT",
  "key16": "2JqeThf9zC28yp4o1U9RwthuYZThNbVqVwRMT4vi6EK9VeLYVT4FGjeM9HPUyGQo6papVBDbuTuTUPtyG95KLYkB",
  "key17": "DafkrAyUuSjPrYfp4QmTJsgseFUJYCEPCHzkDU8M8cJQyKKXxUxH1pRPFWNbrGy3DREhrnGJ4BL6FE9kWxCJZwL",
  "key18": "3Gv5nReGV4z6RzS5breSufCCxo2UtPwkE9TDFvtxus6NyULo2RBuvgCeBiWqyabw16xgQ13ELbvkBmYU13apZk7o",
  "key19": "2HkEW9APmVAjwQ8MFxnMUsv4yPEVAuiGW7BdEtyEdnaX9nZXz2YJMGZfccszorTbtKQji9DeSaLM3KpdmPupAUxz",
  "key20": "4RjqBG692TismdYkBr5dhgmrdVzAAf3vhtKXtqB35W9RP1dmBzxCLpj9ppQVW6MqDrXXf4cVxeckG1oViBxYpdNn",
  "key21": "3Cj2QnRkqomVxSu5xTg8mrLRzETC81YDxYXmEEHS7bbDca7gmrs5b6ZZ5ykH4YhpjWF6hacf93uFDhBU5eqV8iVo",
  "key22": "3ndHiC4umqxdESgYCkE1eMakcBg9UmmumMzL6nh5PNdQibUHPqKgJQWLZMKUN87Yb6hzUWBanVm7ZkNELKqX7AQY",
  "key23": "3fF8mFSyNJGM75auM2mg3jD2Z6nxdArC1midgSQWTf6H9V32WBdpzHmQdNKRiPLmZ2Cu1AaZNegX9it7irDFpWHh",
  "key24": "2aot1Ar6Y5pFBxSZRhzxHsA6vQ3t28oKbUeMu5AJUxUfNh56r7qTxPnb84A5j2NEiRvf68c1Zurw4fZQSgBQ8MAb",
  "key25": "3DPmmfyffs35p7FeyQtJkT92JYCzEZghTexyNVPo2KYENkrbgFg5LMGwZbgfXQ4RKehRpQC4oviz1KiKcMPZJN4p"
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
