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
    "44wbVTTKdHL4a8VLNEhtftW6B1BJ1xkiYmbWA7Mt5D8rJfqYzxHKvxpGmN9m1jsvcTer8wQKNDqGdLU11YakiSjZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ytMdDT5Z2eHGc4RAAWLNfqZRmGcQHhSJXQmH13U4UyadRBx17RLsAqYibT8hgwt55Ce9mLLLTw5nBrGpJfoCniH",
  "key1": "2SH8s78zY7VUL2CgkqYczHEbXev5AiCUyAGkKgwBn9vqiKeax7pWFdUYRbHJLQTY1YJHWJqSwQ5bSJjsqbjgTAjo",
  "key2": "Hxhvxnudb9xWdWvp6eU28Bx6sKQ62mYSuKwEw25NuaYtTzbDFbRiXouM7qXe7pNARRBcUDo5etkhJPF8C4cRJYF",
  "key3": "2oHmpvkzoipuQNqNuV13fvCAimWc89rq7yzzhgVoUY4eHY24Mwch3mPZNrUHbtxbMTcwabbC1SgLzZvWRLu21Bpr",
  "key4": "3cPuyh7sPWssLPcNHp7TT8e9wMGZZQ3c3LCvX2uP2a3tE4ohvhicYZoPGWwEPJ6xMxuDZ6byxEhpxoArcwdH3LFn",
  "key5": "3cJ2Pe7JB6EESiGvLswzz2JZkVYd9zD4iDuXfsu2dVgm69b92tCZZM98ctu8UMbifb8KQTVYnwy6KDnRoZ7LRNur",
  "key6": "4cmv2JUn64MiS4cCQ4epay7La9Wfha2HmqnsTsTJZmxdkzBviay1zpeibNJkXosppSQdzXZ2QRvPt6A5Fmop4ghd",
  "key7": "47VWY3wr7nvup1J7f4SeYzsHgfb572drwPhfssPc9SmWJNuk3PfdTqi9r7FCnNiM19XRe16zt2UgkEpR8KgpvKE2",
  "key8": "59kj2Junwv3MoRnYUoSZbwAKF3SHNghYFn41JQTnHbE3cZQkrrbp1buHjb8kGbYTVvvx1dJKYZbGMUcLXCaoivxH",
  "key9": "3yaxPDTWGzyok4EXhUnY9TxuCQBafMcUiXFqzVRM5JGqgCJJqkNkXNjPGm95v8g4Zd4EWLtsuGbomQomEo5bDYNe",
  "key10": "eDWCsoZApvqcMUNg4Af7TbLdsK1GPVXJzvsou2zXatYwzn3A2RpnwkzzrAkZi7JrRgRdvhLfJso7FFpfAqJi4cf",
  "key11": "462Lup5jhvzavTQmbchfpZfxBAhuqzkkcGVYLqHXC8KQPKdZPU4HxkzLbHn84HbU3wc9eLV7ydboavxuXUcy7DDD",
  "key12": "3ubB27xotXZcpWFF3Po1dAyhjAsExSPWCHdZRRaiFeFNSDWZm8vqzYG5QAoSsPAoABodLCEKZbbmceV89q3iasE8",
  "key13": "2r7T1qzXGbfEUZZbsy4LKpuH6ZxjuoXJvyWVcjrN3b44VvgggLQ8oA83mkim8FwoNy1D1e873yDQir8yaixJatX6",
  "key14": "Phgum2QT5udABTx66W3PawgLpiKrFFbEeSdfuL3GER5aBLxxJXPDmrZ8vEQrZFeBu88toTzkL8aHg1odBH7cuet",
  "key15": "oqMyrgXvUTsCKgpa8i24NNqzyrD1SuuDPabGjC4Hq9uUTCDWFSy47ehv2XCe2n1P73qNMpyzCbmyadKmCkLApGQ",
  "key16": "58nhyFA3nwn3wTZYYf2nW66HBoDMaHHFXv63wjnPfgn4Ka6EoFZ51LpRhJKJRx1TStjAwJb41X1qF3pvkR51iQHn",
  "key17": "4Ltt4EPmTPsb5L7UKvaPnioEbyeVddhEJ86anox5zFNFxyqLfVL2RpMHBkKwgT4dP1M5Mn6aWKXnyizXZjM5nqBB",
  "key18": "3J96WchTRUtX98Fy5uPwAYGtsnueuwMEYwWb23E4ZJZ6BuvetrfnNjtDpxkQ8r5uJ6SExSb5hgNuwwXMR9URUufA",
  "key19": "5Wk2eUo6TP8vXA3NHLTKYj8GGecLEq8v6kxtoTVxfTUvnQJP3HwGiuyssRKsE8ayLBtmx1iwgeisBEQP6paTUzqT",
  "key20": "3jx1d6j9vnpgPabF3wZfR3EqEJLkLV1343Heu4f3G9t6GCeYSAaoV5F3wnX5CqkgoijDXdvj9nfq3Z1RMhKpPw7v",
  "key21": "3jBaHSmDEQXXfQXFAepJkb1HEjvspGZf66QFrWaqnujUWgiFC42F84NESy5WP9eKJzh8FtVMZzoq69wrEh6bHkV8",
  "key22": "5XkBV5VjegJrM1zu6rttyfZKn4JDTgbrjqPgV1eGTQbiAfmYtm87SrzqJzojkcrJNDKPzg7AGeXZU8mv7m69T24p",
  "key23": "4vpcek4MLgnsy712pJmyVGxYcYwRW4GJFA7Z2GRgoBwGXSKgM81ixBUheGuCPSAgVZLwwDjZbkhhu9fXHWWKEEwP",
  "key24": "398DE9Drnhg41CPe8H1Zju1GsbNcxoTfYVqXZSxCz8kRj5WK1mJsuNt7gdpQdCf55z28TFHWjHov9xT5pZokVyYw",
  "key25": "5gCnTkCbfpBQCqGj39wTuJa9uxRVUf7ih7HHpFW4pvky4s8WMrH4LpqdnEnREmq18JtbCZDdWkkZcGc5AVxFynMB",
  "key26": "21AQ5tGJmpkv7nZps6CNvREubdtFhFJNqcMBqwVmpTvsjbe1WDB73gABW7YRau9XmTt4v5e7qfeu3GqjTt5oqpha",
  "key27": "4dmQihXWm6zThCf62GjB9TtWYT7wy9XCP3BP6AywCLgLtJQM3azb66SMTHkLLAZPBWvAsoBchrZkebWoe4bdbkWN",
  "key28": "2A6HG18cyQyT7mifjY6aoJVKa4mtBatR9Cue5HwnL8zXqxkEQusB2pPed5AxWwYn835VHczwzioaehAcDw38QcTz",
  "key29": "GTJMUxJhM1k9bUakMF9qWB5hr8DzebN4nWNKxqYGkRvVvvrWgGS2fHTc2mKrddX2i387VTuh3QQdVQyCMU2vDnM",
  "key30": "4Qu1kWT6pM5VVQqrAZMYAmfxHU5LVwN85fi8pXhaiFT1hRTc8BWPBNMvZfjvYL2xubh1oJb3iLEMpSWBg8Godb3h",
  "key31": "4QzRm4KFhPW6Hbhi3ZYHEcSCDvo1HyawFerEAYs5PRyin9CpRYYqQYmZzhbvEU8dVmZ9pqG1uPngN97P6TVL7CHx",
  "key32": "3CTRjniSK2a43QBm9KwJmFRAVFpNDsYCTTsnDmBTbcQD1gHpYBp8sGP5T9W8yqTwi9vamQzz5qRWQfaQiB2vJdgo"
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
