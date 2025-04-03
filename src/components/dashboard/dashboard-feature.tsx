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
    "4Sgoz7HS1jhXn8BdKiF6zh1aTYMAudx9kGW39GGdNg1n2gN6fbKUdzbRVECYgQTH2PGPKLL3PRgwgTaWTucqB6h3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37eBNshwbVGt5UuVFbc7MycWj6YgFrVgDdGGkE1YvE2XXwYUa7QqyVmydijNfLsc8J1nHDCky83dEgoNpL48U9Lm",
  "key1": "2eyCBShFATy9exsHeHNuGeurZhRReai8HiCACVLb1EVFL2ywdXhbVWuVEzywZyRFP8rCvFB4qp6zSLvoftds94xC",
  "key2": "49pQ3UeUTi5je1X4aecs19QFafRi5b5d2xmRTrvWzmZ2pGMZsYmZx1X6rLA7Hs8ZX5DuH1FR2wnAP1B3M3f3PVhG",
  "key3": "5dAuB5e3QGGseaLk5L6tAgWvMhoQNyNegPcUW9EeiDXzN9UaK3B443QKdwK6Pwh68ZZUuJYzjCBipMB7pCTRn4TC",
  "key4": "2AGCVZJigoTdvgDaaF9fr8uDbHgt9piL27PbsXvo6fV6yRs2AvNV55VBxZBVQdqR8DaCgU41uspaazVCUjF31L84",
  "key5": "3sMCwZZ9G8secDYXNLJatGLZGUvEpeaXzYYtueNDJAthovuaYcGQK4Wdy1R2um31MwqgUtHpryNtP63xHrwKuTV9",
  "key6": "5Zxs642tPBdiKybtHzXqSj3rWFpwZzLVMrSU7Wd2QZfbjNopAVaiN1cGMKDXcXHKakfTCeKNMrUvdpTdb1rSwogv",
  "key7": "4GVCvtQEmZ6MYtAfSxR1gkiucGYZe7oabeoQz5VjscadjshJvzgqDG77yFmeLe6Fn3GBuypcW4bv7m4qBEcbcmbY",
  "key8": "FWfzST2JfUTmjbYdHnFEr64FPAs9DTSeEvxV7v338HJZxXkAKaBGUW2xLG43mNqigfaJygFHhMjEEEtwWqd9GHT",
  "key9": "2sqciWKZQBk8z94efcfQ6ov1CQrbZLEtGiPd6b5vMnKTFDJz2KGdjDAT8XsLrg2UGUYpXTn2PjsYbCYMcczyeqGj",
  "key10": "RRPuHQEAvcqZPS7Fascz1RBYpiH9jgsRN5xwrhwQhv3Q1sNnhL7q5nkkwqUdKBbZiLCMiU1RA6jiL6XWvMn44ZC",
  "key11": "NdXz6dQckieeZCkEg6UhZdBYP4iLQvD7i1KPaNWx1wGw9QMCEA9rkPA6mxkW1vnWViSMYQeTnFoqMA1L6siTEvT",
  "key12": "53e1RxNozmYUYcrm8kwQQ4ckJXiVnrEHvB19AjxccJ3FMiiLgrKp5LesUZU1XgQGgo9TTrvN7sfZhVCkUbT1asa",
  "key13": "2uEr7TAy2yX6Pe48rR9PpKCSUEcNzCvanyEuXXV9G8w543LrCVzrLRwcnL3xPXzR6hPVdDAfK7D6Kohw2qD1Usbx",
  "key14": "665rqfE9BMHuG7qf28Q5s1b1K1YWuU8KrnFevGX4BJuaTpxvXJM9yWkQtGsDkE7c8mfMQQ5kgnGjfYmTp88ftbeY",
  "key15": "TGJThrNBpKD1euz9cj98unEjkoTPr2GCbxeV6cpnwoPrRdn3rPJWQmMe6XKi679AnuDVtWs9CPQecr3eoZ3uJuV",
  "key16": "5iN4SQhu4XRNs2AiX3JSmXMSiEuE6ApFiyCmoKZPWxbQ9mNyvJkuUa8uTQLXyKpLBjAX8jfpTWXQzUzfEuPmegPo",
  "key17": "5NSKJTtCAURxHUSnkcY9QFKt4Rb3YmuzJ8hyKsjQhPDmKAvro3f2DLhk1kSkaaTF2ncwJbcv3aBKe6j9pnczUumP",
  "key18": "5pRHXjhQH6AXUQXPG2tatUJoiduV1CYufcmWyDuvGdhkqsNoDR1yfW9LKmdhjmf8MFjgsRcgWBNjA4RnKMMTx6cT",
  "key19": "5HvKZ5szatwmwDTkd4gMWBeMAu3T9vc8oCEiMxqxxcYxdiJdJyH1DjbQhYCP5efCVWZa7QfQb84vrGru14u1JCx",
  "key20": "62a7k55XYqsg4MM4kF2EGTf4imHjAQebbabpPYoNMgngsKdfgNExsJjfZtKok4AVGVBpj9KEPGUa9ZJsZXvk1Boy",
  "key21": "3NyX9cfWvD8b5NJQ8vMzdF4d5UjETXou5LcbxgxAYQPd7kxm7KJaZ5hWnarBqj8dmWPHod2tPoSJRTLVpEJkMTAu",
  "key22": "4zbTpiY7ysMJAVLQ6QmFd2Sk2R1gF7LWskdqrXKicRZ3mceMr8KvwRs1ta7Voesepz7sgKh9o6nedznpaEScFJAM",
  "key23": "vn7XVPX8D9apsxPPN1oWc7hjQ6DCTCsHSXUFDxUNsPD3HBJb22yM1aheEJJoC8ktvvDbLwwGWwCmiacHNVsjcJo",
  "key24": "3W5n86nC9XZznXMtcVDPxSbBooTRytbFxmtEsWcA3fhxaAeA4eBx6wCHG5zqUkvRUPVWTKLe7AUULTaYqxd2BXtk",
  "key25": "4tD1N7PpE5pQD7PKEn5zFbdtT1syEqgktJR6aE1iG65NLnQgfgoVNg6QD1Mv96dw96cWpSp3BCzzXtZi55ZjAFXV"
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
