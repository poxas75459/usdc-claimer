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
    "3NhjnvNvYLaqrzQUd77vRSWkKJchEqMjVuvwBLhLtRY4ZDUvw6KwMBCrcHHZS1o9c53xVVZ5pN5Cbmcqidxe55y5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BU6NxgHFFY2Hvw7RaY1KCrC5hvo69ojQr15e3sWn3HZDU4KvP5ViUjxY3LxpppXRfwGohvc7ChT57r5vy9TuMbU",
  "key1": "3m8eDgN1nw98GiGzbG5Pdkjb3sHa9YAZFiGNvDdzUepKQWz9ArbbTEUyeoD9iWxDainZVgb7XtfoWoNTHQ6JHtFP",
  "key2": "4BV9BVzNyHxJB4jjuSYEjPohth6eoGzWTGFWJMTDakexkoANU7bNFLyAFGReF3wFjkfWymNKsr8hf5HneFTqTZ3T",
  "key3": "4D4DByxQJQW4uqtmGaCtTrvPeemA2WD1dRthF8bTedEkecVKJUGfXG2AS5kZX3UBGhmhNMvHY6ma4VjC4KCxidGb",
  "key4": "4Mf3jjhVtBZg7ufsKYfwC2XMjzTcYQiVe9754xvBd6bdgNBwiYP9vjgunhosfMigZsa8eLFAQYTtWnBcZeCBF1xg",
  "key5": "3egdfNcgRgw7nNrVWVXYyQ7ZnXR7DiyHeLbVxXM3AnrfKoKKze92n84xWCCHRxZXiFCqSKnWvFLnvZN79QNEJqSY",
  "key6": "5oqtbU82fMQ1yeYRn19oo7afR9vEJ3mJvkA2dSr4bzNEJoM6Ku3SpCT3p6pxn6BVpYXgwQuq38YmfbhUcuDyK9FG",
  "key7": "LKKa2knZsGNLwCq8mWwnBjmbUZaTaXnqys6izBX7AbNsKwgqZBC6VXZogCTvJg6MW8h43hWBwzscs4V8DVriUQe",
  "key8": "2hkFWJkXVB1hGb8zBDPwKJQZBRK5LPkjRMJMN68QxYRs99uVfTbZVPexPngVyFjQYw1Qj2zocE67jWkKV9M76RWw",
  "key9": "zCPyut7DUhfNpMz6f7coViP3Lp5jW2nz7GSJtVCPPHStFkgt1QGtah3FJTV6dNP5zUuKvCcv98HHW7qC4PhpoJD",
  "key10": "4i4uRx8YvXBFGLSoCjBEFrp3uoCRTsJzkKtGiW5Bw9mfUFxJvSoeTNWpYRhuTu6xgqJJLkvhr7tkqNpBTJsNGPAe",
  "key11": "3BwgJTFRM4ccErFyCD4zeSTyoS1wEhovzqga1BppoyrJKpR6oiQ4c5iGYLs5jmcEDKURyUZUn3dUa5NN66PViie6",
  "key12": "2ta4hdAAkHnvLei52XAS6intR4aPZvCiDb2HbLPUy6MiN6FMM4nGJNz9cSy7cMWJQ5FPpTw14FG5i7CeTz1JuWUx",
  "key13": "3Nztp3169oYGVwLhqWykwe6oPs7SYU8WJtANQeM6sYfTrUaY4PgbA9WWCgfBrKfLdbJZcyFrwyTXXrpLJvDED2eu",
  "key14": "3n94CtCMYSBnBegTQ7vMhMnv6isUGR5gZU9LcsC1JsMYQ28G81A5GyrFAPNKZtvreNPjkCCqocG1JLN9e3jdJKmo",
  "key15": "36zM4VbD5YtbEeeini4AMt13iz4G2L7j4dhCp87TjRKPn2NvACDiW2rQ1EVDBiw7i4n2GiWBCX6ctJhJr82c6XP",
  "key16": "57bcsSRj9DHmx3xcacHfcqDW8D98MHBdvgthEawUmm1oBG52qeYg4guGPHRVpiVhxz6UzgSpCUvViasn5xu6pVfB",
  "key17": "3KoBkxD9Ltbt6k82miS3a7Go8RPg2jbMXcHQAFhwYkvudSEf1wVh4TZ7WLvWAVB1twMp9ReBM112CrLsoW7eMnh5",
  "key18": "67a8YXp1pkFyYv2ip4W5oJZsMXkSUhFRE9kJdn36ddhtmUYWwjz24drxriGcw5jF9f42cmzXiXqEvqpoLR69RQ8k",
  "key19": "5s1CL19JTqjNK95L9VxauautjVQ2A2asyGeey86Pm4x9VeCRFoPvQW3uFtpPY1fLf1y6eZh1QnoJUa7S6AJbemC8",
  "key20": "52di12Qa6g8RrMAG9PsfcqPzqwj5qBJ2gWr78xz8XA6gxbmWXCkXggazZd1s5P7Z592J8b2SP3uLvyDUVnwM2Hn5",
  "key21": "5K7Pzw6j8yKHv3v5uFyRFUATthkamDgnLvpmAR839ASEHmMknaJewTkEs5b5dUhND55KxzN5wHDka1HdXCVHfAAX",
  "key22": "V6T283hDqruQr6bjD6xFv1X4zAy3rEnnDSh7cKYdC8Mb3aohpnaRp8h1XevnWMBy8TVJuZFkxffciQjkLaH8Qts",
  "key23": "2abzmQs6so7UX7pii7ZEUU2kHAMZA61jDJHGsuDZp6mFP7v3vDW95qQz96kwvxahUtRysWRSUpcudwHeZDyUDim6",
  "key24": "FdqqQ2dGjbL3n65uVnddvrwdfAHTuzKGZ8Ko4ajBPQ77APW8AscSC5djHtMatj1mAsy16M7rkYYNiwfWSCUn5uw",
  "key25": "5XtPHDBUshBTsEARs8jTSxtV5Z1FUfnvVEAU8qvZAsWVAUxE3WLhxPhRepNPSAF7WjXRpha3SCRy6ewNFuokSBPq",
  "key26": "YVEzcJjBrTN6WRoncggUXZNYGbvpWKbv6fQgQ1BbS6nP5cT7eaYQ84sUpwmrSHi8ZDN5xAdijh94hH4HWKoKoNh"
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
