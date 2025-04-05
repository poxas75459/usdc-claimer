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
    "23eMgZYhj9Yh6FmUPp5H5TNBfsHezuZWkePGEvJr4TLn26gNo3qKmh6TNi8guVXwMaEiY7d7JF6r5Np9DoCUerE9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "crgAvdFJaYk8z9UsgvuBykej6s5feJxhHKsH8QxaVEkQMRA9q3EcJ7ZANgifzaR7UguoCfCgdutzJiH2qB7zu2e",
  "key1": "EBxmYAst66zNZhrNadcJysMfpBVrcUBfAWDZvp4KbA8MDayb6WSGHk9qn5goybd8KZ4kGaH5Z2Veqvek9nJGGKN",
  "key2": "e8Ytq3jG9VsbiwvhRnh5Vj125q8W1xR3K9WfaKjSLJFH9uasdLAYes3gvDsbgiBjXVZUw6hr6EjqmtMU7qVyCA7",
  "key3": "2QK2zDk3oZjUuzV4xXzefzHpHqcUXxYXhMQ4Ct5rZvTimJX7zYaW2YHAdmgwowNr7K2Atis1nuz3Ce6fjXrvLX6k",
  "key4": "3X2buAUQJRZb5rRd9k72zxgDzhAco253XhPaWk2X7tAtWKeYF4yKEQThLXtTiQdUYr1oSbKces7qLDjiYyqouNTM",
  "key5": "2cjU2Y3Zokod8EmY71ya9MyKDJAqrbhHrETJpfZ2oWRos62fegoetW7Gc12x5gsU1SvtAAKFbiigmZVXBMmgfgm2",
  "key6": "rZgPt8xEa2D8GxgMcKutxebJJEmqVw7SNWYkYBVfHW4pjLbHBCkNxM4ApGJRjzJEmpK4pA6aZe7sCRFNSh2N2BB",
  "key7": "2cWDcNUL2cNzbEJpfKQasyWE3L9keTkdrFW29tZG6NMHNueU9VYVummpdSEGME5kbBuoT6Am9abcSuPXo48nCSp9",
  "key8": "3YYVnHcjPUm2GB18nkmTRWmqy66grGxZTwoBL9rM6Koijo15rzfvWod8QFKJnkpAoxPETFSUhPGobeuQuTMnTXkb",
  "key9": "5GacPFhVRPCZhyx4qxmcGzKdgFgGxwif6eUj62BP32Lr8ALP1hou87LuscKjg4xr9Ksik95HsV3LACGAnwVF5ZQ5",
  "key10": "3V1G1Qzo1drvKQmR2JQLRdr6kubqd2oUkzq9m9QEgVT5M6ccn356fW3tVKjNsLKZKCYHY86nYWxwMHv4G5kXLbGf",
  "key11": "zcEQcXazz9e6i9pRauczsEV3rkBjjsspQUsaCZR7swsHMmRXptbTH9rA6QgQKQhLVvDzs2aRQ2d4SR2HNz23STw",
  "key12": "2AnA285uxZCDsKVMEpD2FDpwQBxBPRgdJw4i6eSQH3uP7b1eWEhoiGMV4YAunrD9z4AvCNSyiXf5JCkQQy7s78cy",
  "key13": "4smqRVhrREV35E5Vot1PkZmujd3LVSG7irBwBpeKoxSfpHFPndREoc4ioG9DoTmjf977P1BGxrwDb1b2m58D7oCk",
  "key14": "4d1ejfg3799RSzpHMGxruKGZKweTgGmHihG3bAHnDGU2tnbAUQ6x94SPvAyMJZxypKQKR5e7Lp9kwUWVjL1q9dKz",
  "key15": "3eGN8JaXJJPJPYDquxp7AqVgc7YQwdgehA8fnPpcE1DRavGzmBW15Jz3R55zp3JHqb7SJN3LJJrT2feEqWt2yw2t",
  "key16": "pnHBGzYKCfozXjdW7amZGpKqNSBYp5MwFPd6MmZ26u2JkDK7bHXVu23ZpferZkbCuCFPL1o3iWCZrBpZ9es46ii",
  "key17": "5FKyJ3SruYMAK9gkiHN14bkgqSrhxb2PjnYLxZB97Z2bUHE6BkuHGoL5GM7Du4difQAGxcWocjyAbwLqVM8qPvDK",
  "key18": "5rgmWps8m2kF1r2jyyQT6RiEEq91XFEPeGg36KcsvxPxaweEb3S87uyGUvBGotMPc5Wh9X2JLoKXWXSkfytTMVo9",
  "key19": "HzXwsvkJwdwCS5H7zLVQMrT24ucqLrenuZNF6m1B9vmpfwMQDK3HizKkYVE8RMdC6MJF6UmyQRJ3uDysnejZDsW",
  "key20": "NoMaxY3skj1ma3dsVzBFiEkZQDg5ZP595kXdHRfe6hChGBZ82fLVF6DGQ3BRsHVuNNuRdKFhR3A42jdoi2weKcz",
  "key21": "23bqX99UqX3KSFhNA323Z9Zd2tg7nY7yD4Yybc1eazJZWEf3kCZWqkfbiqvEkk5tLbjdiSEkTWtVWMzJ1ddT4ZGj",
  "key22": "2spBGyi9UP1r16y3XvMx5yeSsYz47tRxVbR3yjQZKuTkjL2iQYQWUa7uycgn45YQD1sUui1PE8mHMSEikAgsQvJb",
  "key23": "4Vci4Hm8RKZC5ud6rh2GzNwegGQPhmcqZuttdRqJuEo3URKA7BJJWe6bwmJs89t1ut6NRoFmu4JQ2ivHr41t2NmR",
  "key24": "2ZbGBEhF1iPSEieqkUozdD8z9iTd4U7DHsfZiHxvGdGShxFc3LcppzmSuiEDcwxe8vWWo4YMAHZMmZHHxk55k9Mn",
  "key25": "2YJShEH8H3pYoq1s4pahod1aYqAXzmQX3xrQ5nDBm7c1fP85m961Xu4uEaKR1mkQD7d8mYdBnNEHwnR5Mr1TxnXm",
  "key26": "2n5nsSFYb2VP4uKQv8nbyr9zDZz4vz4icVJUxswSrWwuB8mBd27c3VzTSnxvMcRES5yGBwTvMAHaugbxrZJFdHU6",
  "key27": "5UTPgfYUecHojdYv54Y7H753df3W55MMUPB3DE9YQgK3YUdECtRcLZjc71L8ZnyhMwdmQbb3gLuLCT4cAaEWoQgp",
  "key28": "2Cmi3AbjsJsUdEW2EwRMqxrhk7ND9MwGcjSbWSWvaffBNYa4tKWwDMFdNK1V64rAhjRF8yWL2c2tzGSowVTJ3j5u",
  "key29": "3gTD59uKha3pJXkVV4JxZncvRp6Qd59AARRD6buinMBfdsbuPWSSamn8EPH7k42WpMhvMyZj1apucgAfu5o1x3cY",
  "key30": "V7Ca4hrcwGiKFZXYSKo7jGubzELWWcG3RWognxika2KRJFiNKGLmRsHobzX3eXuib5YwafSxFWgmTBGNUD31Hqo",
  "key31": "w5cU9EycdH1t8gKM68SQdZdQzfmqen11Y9QtmgnCJkZmHve9oYrQaHiwH3nQoaLd9foAKqYtgEQBhDNvXvn7urE",
  "key32": "5GEoXaW48AsfKpHS2xWD9xf8bcdNMSiXHuXkTEwuWfrC8off7v2n8tXEp8oyegkL88qWQ5GZM6xerQ7LaAvZ9B3N",
  "key33": "dfNDoNEjxS7Vs6YYMAsTEsBRH1CcoMiEAqQa9L4MmMRpMbFgTjmJ8kyiJ8ZU8re495J2o4AxxWYYtqf1TUioiCx",
  "key34": "3jLaT2N8TWnQh7FyKvhoPmQE7FhobPphnQXdXfWnQD7QwAL9mF7L7o8VnDKXLRorrrisBfSNbnTqufzPTN4soKNJ",
  "key35": "2M9W5Lb6fdP8h7dVhjFmzy4UZsUK8tYeoJVLkEJQGeiwFY3ftV5raHQc3dpDpmA7SgbHdQKnqVQbFNnheYSKZ3J8",
  "key36": "2bQtDaKayo7p45NDyEbeV5nr6xKK7xqy5XEigQExWxPHsZxmgNdzMLqqikD5u4zpch87YCZQPok8b6NkqWzYS8F2",
  "key37": "2J5EbBUV9bMV78BkvdVEuFaWijwXMAqzgZLcftZ9Xu6MmmjXYEvcfoJTcSCUU7twHJNubmCjsX6m4z66RUyC7fm6",
  "key38": "2gRx3QGis4SC6vKNi9Gf4JfeEo6qXuJ55PT8DrKMz7CkxWNc2sGU86pqf9Trx1o2e2S8rT45uwF4G7kGumAb6Jjh",
  "key39": "5bMibg182TTYspyKPKka927ahGszfCmFxREhVC9ErdJdDhgtKZrGjTw3PdauxofZJioGjwzwQEBetHHnGWqtofu9"
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
