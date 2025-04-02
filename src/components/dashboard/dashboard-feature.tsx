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
    "4WXcB6Z9Ag9jgZPGobiYUnnL2G6y8RkrjfG8FR5SzF42XREHormLqp32mL9o2PntJJsEQBbPmgTE6bF3LFuWkpEa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S9io2jkJQ9WC3jbYYai45zgzDseKsokQJUu37DvfZq7bRK4zmbScETdgw43X7qbyYrmRpmNsaXZDKN9YN7jgs94",
  "key1": "4SMpBvqF2aPKUdSfM6XX7eVKoRvNM5GNHBLtDgBHFEkgmvuRXiKBwpWGYRoX5dAYUBSNanHqCtTU9YGwKFGZ2ZXD",
  "key2": "3wZKhTTmrAbZbcYxGaUggP67MjqzLzpWTatccrkiFrn7UMVgHVY11jTkG3g69QvPHLP6nXmU2jQ6dEet2fimfr1K",
  "key3": "2ypEj3t7KeKKEXzhvxRZp7WoEFF3Wiud5rW39YigackJjKm5S4KjjxNncKeDMojD7hYiW6g2WPysjMBBBPckgrpY",
  "key4": "44nJGYaXs6z6VLcKdhGm5x6EUU7FY7NY8m8JLcWDjZxKV8fT8f5CSq3JGY9qQtBvbRZeLCty1xrWBzR5XQFMHFLj",
  "key5": "3G4uNHckWvhvjyQJLCNkNmUwy8BvJg9WiA9Cao8NcfC19ZHTTQJ9dx3BmV2hDdtXPtBPu9NQu3EJi49zrhxp8TrW",
  "key6": "5TNQvyEkqrVCBgD4ASAkAcJsV1qdqADhjWkbrTJz3sT1mq8v2PGWjr7sqYetZ5R5956TFXmEnYBjA6iapeqDQF5s",
  "key7": "2wLXq8oWfHc3QChhxTcmm7fFXvBLczzYWxq7zJBm3WjQKH9bqWQehgpwWRUCM56nhAxxnqhw4Br7ZZMD9EFSDBLt",
  "key8": "65q2o7LGuMPGkcgCG6Cpikf3eRYM842MqEHhb5b9eA2nHCAs2zmbhdQEnXL3AknU9dYVhZBeP5douBv9G3uiExNn",
  "key9": "2cyuRPo5HZST9WfiK4tPcB3X4KqCj78hVgrSsEakhdNhmTiDjLqF87c3gTfX7xVbjcrxD67CxCU6JkQJhYNeJhpY",
  "key10": "Qdu6JFBXKo1bGAGHJJg4pJBs9eTtmfMnJ2LZsMo6ajkt2cFcK6a8RAt9eaBZ9KU4MUmT1ffu9GjnXEogEMZUFSr",
  "key11": "3FQURBSHhw4mKy73zx8DMcnBArueUhaFkqrYvqXraQTRWZzZeQcdRmLk99JrHB2zWxNKKj1EWcdf1h9v7YTADJvo",
  "key12": "Hovsk7AHuyqY6iJeQYjMpYxSByuex1mzs7CCcFUFbg1NwePCFbhbzq8i6ifehgj55fqv3yBrjbWY7UkgsX1JYqi",
  "key13": "5ssgSvx12P332LrcQPRLfJSA8njLLntMNiqSAc27jSDqwKFKg4ntDtoGQ6kuYJ5YfEYU6cvgKaTD6LDguojXcird",
  "key14": "63xfNAdGTA7Ws1x7KNFZH24bADuN3DLYpsHBAwshgJRCqYBHbNfbVxpcwLvsMrAKFzM5q3oT3GBghaKd3hVHnRaw",
  "key15": "3v15sP3jxNQAKQ4nxUJsxLg7zTpfa5EZ3eEQSTNgwv2KFbRafWSynypqFAVdLN7BxoKHJEZ3nNeJoUBRKGn9wTVS",
  "key16": "4XzfSJiZxfjH9WrsBbpZHUkt4u3udfh3viEg5kJqQ3AgbFCrRo18vvFVPRCSTRXDtEATpoyF9WqbwyrsXz3uNSKE",
  "key17": "5dp9fJRvkkWxbbhwD7DvsouU1XEu4QPVZd2BWCJYyqDUYdKLH27vknGJi9nXX1p3TMtC7aDw7UQkwB15FEgahdP7",
  "key18": "3Z5H23JB9Kwr6BkhUG8HyoSjfRhhQA58rqrD2rz4L2LhHBsbeXETaKBnBCvspMGJbZWRe8sXFxEq6J7aaa52mWAP",
  "key19": "2RgxcJXLZqw3MSWwXCrSJ2wy1HqiRFqYb4cJW31tfEbjH27dDXfocKGSsCaV6D1dkGzLEEZUeMoTd6u6Xa3Tcwjs",
  "key20": "2wfWQmp5EqDrcdiJVV8UXh3L2SajfuqW8mEH1pdmAEtaJTXXvzMFxFV6Tj263cg8fM9ruQVJ23MmmhJLCUmfuro3",
  "key21": "5m7BGQzMZbFyk96EZY2MJTEsjHGTNGmFu39edtJHeKayYUauCFAHepXxKftHiL4jcx6d6T2zDFiRr75cq6eyDY6S",
  "key22": "4myRjrAJD3B71xGgg5mPL7dD9S45sM9v3E9zLzVjUtZgHLQzCHSNUaciNcSfXMU1sagh2BkJc8rc97mc4E95YErR",
  "key23": "5iPGNvx656u8MEGAstqksYHP3Rxbrk8eKiFdAmTofzSnorrmPiLBNNBBWo4e7tfbSw7ocNn7fHoFzEb4rredFYjx",
  "key24": "2XugX32jywnw4cEAfFMd5VeZfeB37SSJQEKm1xs8NCyJpqh7R19iuauisxnjHL92suqEpp9dKfiUZAmfHYBi7ouC"
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
