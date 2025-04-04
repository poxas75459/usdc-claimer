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
    "2k9fKdW1h828Pj747mYp4TWWxhZufzRPa9TNmWhu2aeYM5LRTGuXQsZZMqMbgGmMw5RgmJfLkeyJChwmX6Dmjgrz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xLZv29nNRyJg8cfjeo7GCcz53Nr1UoWgBc4AqrBznDYYnCK87mQLJ7Ye4YoU2XpbwF1KBHZ5HJSxRPiW2GLpFx7",
  "key1": "2qdSibg4ova4NetbWJAJcKF3tviWFhV2VLBnyhhmfngmWP8zJkLadT2TTxqKCFDhKiC5BLRiMw5gsTKK8okADvp1",
  "key2": "5PtcSzkVSyoTy9pds82qm2sYToLF9sZpKfvRTNvtKARL7VxqMbkWHnZJfK5fyPfR9wLuZXLoshzM5ZdEw5Y3aEeg",
  "key3": "8RToiDGGuAaBfGEBfErZWCi3HefZ8tdUDGTaf28F6cWsGGyBVauVsKvSZbREmfHQpBZhaH54P1rEmmtnZRpxe67",
  "key4": "4sMRsyTpkhb1wGXw8kgdqhUMB5g91piZKm83EnrQfTFYnpY1upxBeZNCwg8JEx6nVvrRCpoNxC3LDq4EdzbtKM5W",
  "key5": "5TvHNVUkWG6dfrQYtyVgi8rwHrbcNnqNXSwUFciTGK9E9fwrbQoLg497KaMzhVRVV55BmGgGjHfAuU4hVGT5QJ2E",
  "key6": "2Gh4YqcE2GuyLUNXUwUMCDWmPsRW6ERQxZr4kk6579rj42xAnubJW33kViDZpcwWxvCLgeggVxenNZverKPhaQpV",
  "key7": "5tYMo4fwAwQxHH8fCz1kZD5N8dGMZcxHXAJqKA5S91SUQgELqJ2uVxsR2ubqApDt2Yj3X3x6Q7oCpgwSq2WwwxMb",
  "key8": "3M9nAdFPDMXTwNuCt4FxqQmk7qViYAUcBHSm15mHna37oxVhV9jDfBovkugrBMUbYpDD4obt89yZYhDGF7QK7hvo",
  "key9": "ynGm8usXYNEEX7hqQZwX5KuAHzQ5UBaaTFRU5DrpXiFX5KWieNzuXTYW4uqDHCuU6PWH8skY3fcqzMUYEuWFs8H",
  "key10": "5Y1jbDfLswR9fPTuCgtgAc2E2kb6mUJ8hMCQgWFgD8ytYFvN6FcAR3QMUXz1f6LurLfgb2qt8xyo4fqEED1uer3e",
  "key11": "3UHf5ce3SfEnrnZnGAnNigAt9RDtPjjUWRxfZCKZthiAeSkb7UVk31uwu26FYzh3b8o4oKyp1A3J6eoBp2AWjFtQ",
  "key12": "2cdeujVYDfz69eLBNAzuDEaQG9xdDVExoHA4xkeW3G1pSpkMWdoF7qq2yLfqabVBBJ8VDEG2eTSVy5DhsEotYkUs",
  "key13": "4Sinfs5wDpGSXs4LnWxpS9zMKwVrtE9ethvfbp1JbSf1j3dqxM8Ui2XfD3VaN4G66hamWSZnSGqkFdAW6sYjAtH8",
  "key14": "6335N41Bh6bHF8EEYVLehp2KbeEaYvwUD3AMA9dw4D8o3yz7q6aUXnnJvb8kfxQPZGYH4MYF1f1LeKDHue3UGkZu",
  "key15": "35oSx2RJsoBdU2cGDzXFSoTj11Hmm6ibGXqoq9yH8NLjBvuKG5wFx2FjumjEXj9VTxkzhty9CLPbxWbGJJHceuF9",
  "key16": "5xYWayTkAUKQLTo4QrfXNc7Yrb3HfjE6nqJwLEjgGMwKoDs4o9D58rLojSu55KKzqU8J9KC41xi6s2wPAtK17FeR",
  "key17": "54Fgt5XicHFf9YiVu5yJvLc3JoybdotFZrhYDh5jr4yRVDNyw2pxYhHFwkdh6hJPW9C8PEPFbeGX8CRDQvARHrqN",
  "key18": "mq76zTmQ8gyGmfBd9jQiFR3MP7Bjkaa8bH68hqquesr9KX976XaKY9YcpjDoLyrgUHAydZw8shU2C5EeQi7hb4F",
  "key19": "2oj6gJPpSUKBEGAifh5DkNQMdWCEDZKW43keY8gajdrYnFdd3t1fkrQmFZjJKKpF4CsoTER3KVeRgWGx7atoEo9t",
  "key20": "25GsJ8Zo8vacLj12czzPFrBmvysDAAnEi1vXbUkPWNCHzRNL986j1QeLBHa3bVS7R3gKGs8GJTWLGBoUF3EXZh86",
  "key21": "5LwcZWYaKLFrJJQYTiUTDNmnNdCebKqsgNrc88ewB9EAi6yo26Ukp6N4MbFZgF1Jb53gt4c6pS7SMFUbYwnkKCir",
  "key22": "3QpbCLeDJRctJ4E9yQVuMZHtP8VuiVud13w5dDpqXssjua8QDbykkxNQiQN3VotcJdpuP6FkzSifjdR1GtM5MMeB",
  "key23": "5hiuo1HM8dnXnEDfp5jWFLCXzzgY2j9wHLgXB7e2f88JBpLdxtUue8qx9LrtxwR6kwE3ZRejqjGvXgbeqwGUDJBJ",
  "key24": "58jydJbo9aMK6SKrxDZMseCkroA9dLHUHjYhbXG2vU9cVco9sZvAKcqQbjCeMZxyajG8dSnncmJD1MhjfPkeqR98",
  "key25": "4YeQXkjACC1tv5u1FDmTHzmbjNdd4M8QveV2WQZAfo4UEhHHLpc7UVy2dDnejxDLBoMkWtLr6r1fDShFYkstfYPw",
  "key26": "3JFNBojgB9wBKjimWogevVRVEasokMoNkQ8sqHQPyZtrwAm41jVC11ThB37Q5aJLzKhxLVYc15pNefXAWJQEeALE"
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
