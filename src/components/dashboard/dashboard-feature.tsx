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
    "59C2C1vuayciUrF1nX7h6wVp5K1hUGFv6xQZUXzxLe9dPzMRDsKPffpbHx2B1NUtGc46raoMnunS4DywxKZAG2V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Kfp6V24PqPXQ8SzK7APeCsx28z5hsjkEN8m9NJXGdyc6aaa2Me2GJBLkUxAy9YX4fm46tSf5Pu9Xxhf5rrZxYkn",
  "key1": "2NSapS5qwaxUg76DvDGRCQWrNLHmY1yzHMsSSMsDXKpSgbDYiSQyb7CPbTjt51vR9wKPfQ7kwSxv7DtN74PGW8Vp",
  "key2": "4Rd1h7CSmWSPDzfsactm11PmXS7FYwKpEmwszTpJPZhvd4CnCezS64LyS7LCuHu3qkKQ95nwyegkJt17mYvcdViN",
  "key3": "44S4JDhZCxSS8pFtA1TR6ooEEf7a4CQb9khD4Q5czcxEDHwikDrfTmfm4M6dx3yrZEtNni7CAsvH4MoMC5irUyK",
  "key4": "2CqYKV8W8cWYVAv5PfedjCnAnNLZhSTwqhQ7T66D4RJPaoSeGgZYMkVtQqgVzeg2cuiJxEALUiY2AsZXtAjzUCQd",
  "key5": "4bT3iSdm8q42UUv1tGzN9f6qhdeT1qeRcrqnzmfJp9auhRPn7CGf9mfGUzUFVsayAV8BS66xmPqxPzFo2YndMvnu",
  "key6": "4ACB9yfEcCE825ry6FvnDbgzy24szQmqJbPFmV5hXzFXJjpvckV96bGRV6qdX9AUiWHGNYagXTZ7J738rfY7Qfvy",
  "key7": "5cCmZDcUW5nUTzrGcR53kEWywmT3WWFZJm6bnFCeiKRvRYfSz75upu7pMH3YBN2No4VEvTToPMvq6X6iGZcgRpLV",
  "key8": "2sficzttsvcvRUebPSKBUdiEoLvWN6d76enELZrJHBQHCmXiUcXVYKotf9u2kGTw41RynMYGsfNvT332hkbhFT8f",
  "key9": "5Hx7bpNzaWx8Ztav4KQES18BvHmgr7uZS7vJmTPiJ1KUJEZkQeZ3aUKKP3MXeXahJN2KKr8NTYoTJ2KXbVqXhqD7",
  "key10": "ybLGzoUXbWA9eneydjYafWJ8xehGjHQMy4NkWgVqw2ppWQHaNGxiF6sxx4CRJpg1V8VHb6y4AYk9uRzZC2RX3kk",
  "key11": "4AAByPv8HfDwYRJWcZZi25RkzvhUN7X8BVXfhAeWhBFXNDtBD4t4wtZJKi6bjyfvcBwNhxMiFSN6P2oh8WBpW7Ut",
  "key12": "5fmWrFPSATaQFU83q1Aoz3jNzAE96VRJPgxzEWqvi6uTxL4KUfneGLv3UBKkgVaQ4Wzay8JhsgQ9Kx8zBHK7NCp2",
  "key13": "5jRt8FQuXYwMWPRVgWsQXu1PVrAkvXUpBYmcdmc2azWT5QMWsfRPPeQhXMSvdEL9h3MxXbg3JbLecYpkjA7NkXSB",
  "key14": "2951GxDAR6dwcwjnJ9jn9AqxYCPMR8GZ9jFaVwGY7EKeYqhS7v2nxB8oh2bGqHPfm6bjwhxMb1ryoGsN5CZKD3ns",
  "key15": "5bW7ku7tHyhiuR2SRa9Lvezvy6w7KZL5jKzxtNXydw46YcKcKgiCHkfTBqhjThRutBPHdRYn8JaPwaU6e9Z8ciQd",
  "key16": "3SysVMBe41h1wJkpxH8qvPhYXiBHdbMeWjYSX4FERWzVr9gQsigk3EhkYeZnhyJmD5awZqmqYqkqXUcYCu2xpran",
  "key17": "6TyXT2tjwNDypCmWZvz9V9G7b2Y5bEsHfVP6KgUbB2KsRnxcmENEgnA2LX94e9YzSr4PfPP8QFXvoqjexy16z5W",
  "key18": "3uMGNMHREt3PxVqaea6jQqNJua5KJKye5CfMfAtBc4PNLbqk9k6f2odbA5QPAqrcHaMavNUUJNYEr2CpFpLkBg3U",
  "key19": "5nDjukvY9U7FVhDCHyprVfoptZMdbx3xhe1b7NLPrZzg49wq5yfuGUd4xVsMNYcNy5F99mzfYX6SS6rcQYnNKeH4",
  "key20": "4RjioRYub7t5ccJads7x7HVoXmnPoL1X7cjE4cZGHBjuut1j69DcMC5sUMTLUSH6gFSKq68Qp1E1SLYZEwe6D43V",
  "key21": "5RLAsfAcWfbSGKLeWmGkLu1XzLHHnT4AdGiLLczrmoVobHGzhXYe3tjdbkJBmF9tVDRRhoTxAPhR9nv6dyGdpZ3t",
  "key22": "4YUzd79HwDjv1YzWpgLhdxeaEcNidZwaCFnd8XcaM7t8LazTRzTtXxa8dVRRcN4hfPGQkwfoEDouc9PWo1NVEoAA",
  "key23": "65zC2gsyM41obmhKMFgoNExAuLbEZYstVpaEGZvMAsK6JuSur64DX9guqTmPDyDhjjqZzDeBM4B19yUTDwkda51w",
  "key24": "4ySY2ZhakhaeaXEYHP9xir79kKPa1CqAxZpSeBZ3SquCsGRSVgmGr8qqYenUPwAoefPHtNes4CfieK26EaqAEnWA",
  "key25": "58cryrRCXbK1pUcXtseoedwGZyLW4LmJv54KYtieqBdaoWEvus5ER9SjMhnmqfGFnhQFPrKhZyVYwVvj3xKQhpc8"
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
