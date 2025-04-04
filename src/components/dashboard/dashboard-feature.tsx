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
    "4Cd4hps9BUDGwBUbPUR3igTy9UvET66RMU7427cMjQG2kd9enNvUcGotPjQRgNAhaL9WoDo6nSfcDmY2VoDdUwYs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZHjF79BND3dueTozXj998Y91vUFqoHFEbVxASP6se1W3mUNzoFuKgxTvo67VKYQTs8c1gUSyUGFvXV5E232JdaE",
  "key1": "cTKuXj9gxFbmVPcN3qwFapMV1tiSY5xDKEwsSaRBduW9VkZeQiAoeQLRECk4uMRauPxbuULUzVcgRnbLn35frRi",
  "key2": "5Et4nrJZnoDm8m8QTaid9yn4wrx3qU5HyLUFkhkSAUubamcsFC4wpbjGuecpQT5jEiiid8Jt9yY9SQSgJG2ETLHx",
  "key3": "4gHphxEsKKC2VyvcJQdJ7knsg3KqEEQmvSATsRKnDi9FMWjac8et9cosbxGJvRZcbVMQqpx1BfQuhRKrtwXEtzj6",
  "key4": "3AKtyvG6zCfrvCVMr8LXHJ41s3rdk5nau9iZcyhi14gz725Uovs9ZKuQYoZ763MWRhaVpA4sHEo8LcPAYCHFbhAJ",
  "key5": "5csEHbpUnAhPpBeEokvvxEFXN3xbY2uiPxBBFkTJWUBMDRzu8BaaSU5zvXELeX3TqhgPEJAa8wHtLAGhLE1pcZuN",
  "key6": "m1z4YPzfxv1j3yRbm8EfhjEjR5kHvvkPjZKktbJf7EN6rv4KCqeM9Cm7uRZBxuTdYUS6SS1vcYbup2awbRVDMvR",
  "key7": "3YS9Z2n2sXHk8RuMmkFbFDwVMBp5NvLK6wuiCG165brANGiCzV9LS9GhnAbpFD4eETL6gDAE8XquQfBFvx9h2oqe",
  "key8": "bLQKaB2wkgBeLewLRHEWMvtN9eBgt7N8cu4nsKStGRR7DoY1v77dPejBFxaNsWKFbxJ3pnagxzQk9oq5SBUX9g6",
  "key9": "MYVdrhe7qND7ntBZJ6wmQDFoYdjEtbLWiccHS8in9UDsYg61CxatmepztM9mJjRKS1KzWaZAmZDi885SH7wmWxT",
  "key10": "GfG8N29TbsC1w8L8K3oYt11qQNWJHtk7VmshWQ6YFqybnarDtczKQhG7jUU8kKFMuV2dwhqLXH73ukGsE2tzLJv",
  "key11": "3ZBenZPmTjNRkhbW1Aw4wwEmHxz2SyD6EJJvqFVTkskTdTMSZJFEjhSS5yZvBBNGh3dDAeaRD9KNUHzLc8UZsLQN",
  "key12": "5XhbHWekN3XyBVoKYkE8sC95xLPy5uCv5RwvP6WGFq9Z4m6HKUMyFLGzQrsjTzX4MW5eHiLEZj53ruejWeYUE7ZD",
  "key13": "515DEVEaFVgnLo7HhvzmXebUeFaeUQXcn4npjWLAt3VVFzjf4zt5YF4SaGRLAdAxHUV8WKLcrWvZnL7Ydzdwz1tS",
  "key14": "vVEoHKPbeEMbC7sjtFyb3imhrKbNjgwxjJ4XbTbnWxJRs87XGRbhryLwR9mgxCKSWmX1Lz9wh7CbevkzQu4yA4K",
  "key15": "364tYMSaVUm5VFYLo5yBgHomJr1Tp1EaTW431wH9PjXusXCSA9kWwCjZfkv2dHRakqPUH1XNLhTY2zoM6yt1VnM6",
  "key16": "62QVzD9xatqpFhceYYVqP9WdtM1DYh5BWDgrrgAEuGqniBuvpdrJAdkywm1mSSthUbWcCVYwGzvS6n8MDmhgq5cN",
  "key17": "4cFZBuSTGbyQ7Bb1FgSFAo1oS4KgZxdE8GXUAJckuvC3sdayCyaH8yiNny9CAkBjpjjFRaX8ZsTSL2aRQsKa6U2o",
  "key18": "4euxUEtBR7bYii1soYtTyDDHUjuZcvMTryoQ8GNYdVN4aEAofJ9whFDB8s3jvzQRTKi5Yx8r5Ab9xBEGLQEuvmw2",
  "key19": "2D6eQxHvoj9BqshxPjjh3ArSYEjVU6wUNQ4U9uNcQrMGQdckspjUcAA8tvuup8664aVXwf7jJPJRqb5K5xgYf5WQ",
  "key20": "3XagXJSgLifxMGX8a3upBEkz1qiGRJjM5U7RF2CaVCgxETHYL7EGMyGfRtP9BJpTytoMNzZPZtD2NfjHrt2vbMGh",
  "key21": "5RRufSayLP8367qnMSQVZfdLLSrHTFpfJeoqvJEZLFEXTCwkgxyxengpTkqYpARQMvwFaDsyhnkNwhx9VCQBf4Jv",
  "key22": "azwgxAdn29vvEiee6CAdj6ndHVi6xxvY3UZuZfExaSqTU5kY7MV9XdHB6ewnNSHaSrxmgyyVAVSPTqVoh731CYe",
  "key23": "5p1t9BbpKRVTwiuHtWFvaT91WfmzfnZHQoc5wLhfapY7wUQ2YdmaVYCdaZiUsCbdwu2ge79kC9tAFb2hgituWN4F",
  "key24": "2XHtzRZcLvScy7eqjMW9bynDzSDzL7hKauM6od1bV6LmALn9HaVkURYsJmSzxxm9thoNNeyaP3sJf3FbK9o3dWtF",
  "key25": "2u89ieo7WaqJcBrc44sLbU6CYsxdCgjyiz9y5BRLzQUFhijKBfdcvWSE62k8iUBEmALEGrt4iSn2GYuYraFWEckH",
  "key26": "66uEzbo2tqPAzV1ih7xh9rRx9EG9Fc91bG32PyGsCeamND1CNKH6mUQD4yJeSCDaZDMsLsEVftK7xMVjvTrszp3d",
  "key27": "2ZykmKSjJJvYM34yprMiWicRDzY9PEvsBtE2j9ivTfipTadmau6mLHnPBAy9mSYL2U4JV9RXg6Zm3W67MskTdBvp",
  "key28": "AtftKNjzozrVtZFPyL3Ry11CazDbnVHycgKQ8e4qtsLpJLxWhuojitzvBw7szWv2ktjBFgnjDxubygPtoYNA9Gn",
  "key29": "mU3PxRuUVLmgL2CBU3HaF2fED5PLBsu9PsDpdSwGkDAtXR6x2LpUgWPwrWo5m33XGvCMcUyrZguB5y61Jq4K7EJ",
  "key30": "5GtJHGUKFcup59xydKVrQ51Zy818dP3M5GiHERLKQ1e6cKrMQ6UXwQPmA8tyePRQJSSA194fuZvA5Z91Ty9Sxwfe",
  "key31": "3eY75qhMV8bMXDBya6ZggSNqeak73NnHaWcJZ5WXVVzSL79Fptw74uRZ7FpBDasiAEdxHkoYXNeUxbkFdeUcPA3A",
  "key32": "3NSNRUALFGMGf5gni3Fxnn8ujbktiySiZFm4btPvYqRivLNchW9cB525zddSXAbRtzkmxFgprRUWT1Ece52PPyQ1",
  "key33": "5wcyJ69TWTt3Z25r3iyjRPft9d9d4sDfsem4xiX6gG6WJZkJNFnQaAYjuZWSA1jn2Tsi7BwBC6EzkvqqDFoeyr55",
  "key34": "nLxv3FizXRhZVNyS7mRttqHcbK6zxiyMyhM6kasdL9gc4Ykf9jLiDHW9TcSgNu6Q7h7fqCZfKQmy6BPcep3mMH5",
  "key35": "7btiUowQzhC2jZAemHecdFMRD5mUcoQh1pazkSZMfNrMggaskYYhbm6ZgoWzbpzj1EmfuWwd84EerTLb7T5ReuX",
  "key36": "5JN9EF5EBX2QUUHgnxEeCqBpMsKXYRUT3n27D4ugHtu57fq7eZgEsvAYJQTS2zU8yhCeUz6kCLKNmGxraYP8pktS",
  "key37": "24tx5Xp6A35VNER22JsUr98YmnjLZNbc1UpZayPbMmLrH1XpKCNwtR4KwWV6GCjscmvSEMpt78oxcFrQwQbStDyU"
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
