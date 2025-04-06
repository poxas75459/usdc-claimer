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
    "k67iSKUiMzhtT5PuDzkFJVZtmgJC3FJ8YhuSsf8woSJwjc23fVA6nSx15GNj5xZJmaKooeUysAJBk9o9FfPeQhY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "87jrbZgzLLqkxFppNcGucxp1a3d3soDyb6MpSGnp3j4VcjD3pjSm8AeuKLBAUBwAwhgAx7xDBQP8azWJ9P81pwP",
  "key1": "3HBivG223c9Db5uNKQwmhLPbZ7buwB27RZTJvyotDMig9w4S6xyXh8PGEby3HXF48dj1x7gcg3y7brBXNUw1Svpo",
  "key2": "ox97b6PG24rdnj4yFkibFUMhCgdoq7Ed1enXmS7CEPsjAjhTeKmZowQd6NYSc7vHKpdjhUENAjxxGgwZtnAW89q",
  "key3": "JjMU1jHf7JJAuTcPPPsrKHG9sL9JJMFj2HPLqPmGwW3BXVmQJrpQa6vMNet36r4yceYcdbw5uU1uJuqwi9XiyGh",
  "key4": "5D8U2uNfHmjVRGX5hhBG9pYjqAF3uBz5yFVyKT7SwE6QGTyni8mz6LthhjLoi7pnwZUvsccbux3Z38pZbeXoainG",
  "key5": "3tUQFgDDSkh3B1HRTKGsP8u7ouuyu1JJPmZm6fxjvtScbfzZya6Tpoy9BjJgrcJUE215vRTGurBLhQsijiQuibSc",
  "key6": "522SHFUzynJeg7irLHtfDQWhuScd9BiQe7dgt7LJi9crSCMczUNyQTpVbriiPrqkcoyfZqQWxFhezWJtomjbFvbD",
  "key7": "4bPd9fXNh1ccTQJUFDs8hZg2bXbWoSMdbHSVaZQkWiJjJSSZavRPaqCAWFbjZ7BpfeHXxWbQk5WxLbtkd3TimHA1",
  "key8": "5eMnLgi4xtMLa4fqegdJkV4Z3rdCUMxZWA11MXnaJaYT5iDM57n9znjYJrL3wC1RjjAjEqSCn7jRjyVvhfKRfDBn",
  "key9": "rgoAppsNvMrpNDaPYfbdFCo3GMcMUmLaxXUZcQQmwXYgqRNjViXFa2DiSfpGqZ3Qt72HT7UrPWtsN5rEhDfnFcg",
  "key10": "S8bibh6uHPdJE1x7iKwWuwS8FSaEfN6zdhWC9kWTH9KyZKvdMWBwJHBXWmo5mqW2pA4k5hrXrsZSP3XVoDY3STC",
  "key11": "2yd5Cav1DxH99BX672PoiMMnMvPwTy83g6roS7svVvEUx2kh3VzMCP7jGKSj2Mrhc9y4MDbX6jUC2kkM3z6SBvy",
  "key12": "31aEn5Ydy4GYTu62G2xTuYFYouvkKLBawEoGxoy6s1na16sz8qeHCeWhFNxdgmnP47X7ei6AyKWYHnHNbcKVg5nT",
  "key13": "4kd2XdPwNb7H9M5QH1swgxvdRaPHqfVjbwz4Ww3eWYyoAgYwLAa48rioBjobmEat2FPPSw4dqtHtRYjL2erWyqdn",
  "key14": "2VQZc7pVYbAfMzYjZrKkaX497xRBqkSGcnt7mwsYzcj3ksjw2ZtgBMTdNh6sf1QjhvxjUhAqnSgKtgYUQLbETs8z",
  "key15": "24Eyajgi5h9TmcDAyihAKrTTJWTU8CCQbr2kpcuAYUrhAwxeQRH17AjBuLgoYoydGzbHxvYsfdJKy45ZQXzcdH25",
  "key16": "anVJRkMvFDTTcUbWTor4Qnbe72sNLkLukC8esy6EGMecRXCQLAqLj4yswj3C6yxoABPpB67iBxsX8e92YtpLZNL",
  "key17": "4u2jqWMiEaFPTzHJiv1y76NcLySwkAqsvGhPHNYMXK1id2DfuuNH8KF1GGcAWM9j32kpD8JW55eKwBa25z8oKUzW",
  "key18": "sLcNJcCjNN1gM9aePz5cJz9zKZLT3NazxphhwYdXvsTePYvS2qaT2d8hU5wafyqtKZzEFySnUdABykJ8U4c7YHL",
  "key19": "2WeUGsWAZXRZNck22ywhQPcGEeYW38xTaSHLEWtv9R5KFKvicBwj8NHvq9QAxCEubycuWhYsaTpamrBPeqVzbrsL",
  "key20": "3Ddg6ro3NS3EZfhgpcfBGdq2hiHjYsXpC96bvhGbTz2wHLEpiu2rhZ2zvBVDeLYiiTnzM7zFo9b9Lq6kR44sNrG7",
  "key21": "26p4gHio6cZbGKxDqhtXxUepMhuab6Ne1erypNt8QHeHrq1TCNQJFh8mJGXQx33oChogF3KdCGCkZ5usgC8D6UNk",
  "key22": "EBJg1FhVCsFrwfNrBQeCBf2gqdWya589nSRwfHFPRACNR2m7BZtVHjWZVJuWfX5yMFwTnbxHea9ACJXTNr71dqz",
  "key23": "61aGgCERkVC45WzuNYLhpYoffWjH1iRSSCJpS4hKRn56dBGgXUHqdmBBXp7WGi1AR8TTSGBRoYvkQcrtZGC2NWfX",
  "key24": "5hTU9RiYuGueCzYsmS9btNU5SJNeBdvtnqRdwJP4aLvCshbMNuucLhqPScCwGT37iKkHFfj3AkWonWiB1J7p32rt"
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
