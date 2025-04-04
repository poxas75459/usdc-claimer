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
    "3DjsLYWz39pJGzyv6Z1h3CN1vwEMRJhJAwr7TqynUdapa5DcLWvHNSqKrEGmhH568EWutGQrM9tQ4Ew4bQjPmMKa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65Sb2mxaREwtbas8oa9F951AbYnAxnrUpLS2k4CdNLo2YbBjkJ3Sps26CQBZa2SqM21F6MoxPs6ayMJcLMrtFMLP",
  "key1": "qVAFgSoB5WVFr9f3TJNSWzuSdcrmmfNj8NzJ1cxp6wwRL4CJRZ8bYLG23k3zXY8ZhmGNzDAmJ2g5DVzfxB9F52T",
  "key2": "3iFnZXGLT7JCqLbcHQWxYV97EuZaiJeJ4YQTQ69eCkFYQsg1NF8h7Xq6NvxWRySgjCaCLSgq2qSHYHvQFbQQbvfk",
  "key3": "48qncdEjsQXYvnYGShsrRGdDeYjf3cXXCvrpfSAWyc4S7V7Ttkbch5ePWp9TKLsDMQ49myGqJMCSS79iyaMpYu4b",
  "key4": "5LBqtnC6qfoj4FkhVUBgx88NJmwS5oZNyj8hx7Ts58ebfRCes6Umeq5xJ9zdXYb4GWwfmdjy8o68DS9h8U8kLubp",
  "key5": "63pWYBKgmJiUoZi5vYr85yfCLhyfTUAY7VFPqwpeKQQhXWBT5mZ9zjJyBSxMqiZFaY5XGfvmFyRwYdtCV445h2Wz",
  "key6": "27PfbVC6CfJ2dyXtKCPgksXCAS4Q8yknPEJ4uU9kSxGPLKC33zRitMVzhAnMKZY3CH2ZvpSCe8WhvZkyiUD258HZ",
  "key7": "3r2kuCseLrpeGTjeCY8oLtCunqN1Ny8KDMJSYFKmPaePJsCdXoeHUHjt53w5GmA9dJcp8NWFerp79SXLZacmL75N",
  "key8": "3j6Xgvj3LMvUfxJcH3cTbjsu6LTF7BDGoBe6S2Tx9cBcvS7hfUisRtwZCRHnuyK9wJGEB3CJe4DFyEcEk8PpceVq",
  "key9": "5eVMkusrw3s3YM4WNV734qsGYPeZ2AGnmZKxWeJfC28jzoJvWu7gXMgihTvWftoAPT2xkxiYtV42qoUPjTYSii7L",
  "key10": "3o67nDGQoiv51pR3bd12JwdsJKa69urrbgrymPX6qLtXjDyWLyxijiuxDZnL8qKSGAW5b5FEzrWyzVvcrFPK6dt7",
  "key11": "3r4XRfnrz4ZJFTwD2iuxb4UQpDQL84wdVZkjwumEEjMpZDRdHi9ptQSnF5CdEfcWV8ByicTLUkgpujWuR2D9y5iP",
  "key12": "4UpCs76VBNv853PRuQtknWi6Y6zqyG1v1aBQJ4jfEp9ncSK8wkQikbnEb1hVHkfaNBJgmro7sgKNdvbvGjaZnpWB",
  "key13": "59TMy3GVzWqcjVApcUx6cqijoAK2DkQ138XDf1Y6DSA7T2tAy7j6wferM7ed1xPhYHNMjwKkt9PUNNJKdLp38ri6",
  "key14": "JAywrFoq4ZazMBoikHBB4cDdYHDvsRyTthMD466a2chd1PoGaWqHK8N2vKQfBxtjx1SFkuhDBJD17D3DtF9pZP7",
  "key15": "2UEahBHzmAkLLjjgoQFXhFyMUN13GMd3UNNZd8ZZRTKdEG94w62aLeP6rTPTMAtHCzqF4sLpZmp9NSF76hY9goL6",
  "key16": "d4LjzMoNT9fHuH4roFvah4RUrvSSSpWhvnH9e2bYAtuK9s7RdgugV6ocG5WnkgwZVhF2CEFKGxNQC86g7kp17En",
  "key17": "kY9BjUt8oLe3LJ3KbDW6ydnzd9hMvViYbhcdzCkYHe42AWUtbDC3UrcyZQ8MJUtLQwrgfvEUCQXvxwnpqZ3F1eh",
  "key18": "2uKwNZrJusR6Cab9fUn4kFqToZRvSdGvr5L11JdpQdYDScugNBG7PD3zKJMi4zqrAJxRADSD9Y7VYrLtWy4BGBcd",
  "key19": "4YTzd4LDyNi8qzpCi29NrqnGz4SbmohC7E6PLnAKpWD5chD6nqd5D2MqfgjAr8HFt4X4odc3k7L65Gbz2n9AAvcM",
  "key20": "5iah2aF1rCNVWmbhYCMptASBCwyWjBhfW2WxtmB7LWn9X5oJo6FnwvYse4n4pkfL7k37dRvqYxkP91FUQqg4uUAb",
  "key21": "27j2LMu2tHmC1WqwTGd9vZs3Jms62HXuCYW94yec6bJyvxSj6iXPzrpiF3jkB2AUQUFF51BukLHakpm5QvWD8ZZq",
  "key22": "51YdS7toh9RkZUfWVpjDFeYUh1x7uASKRHVscKM2U5d2zerVULXzwcLv7Uv8Z3nr4ieEQb1o72Gb4Y66TEt6PFbN",
  "key23": "4ZpSRQekUurpo9uZGaqBYgC9VR6rnvQvcgPqpTNsTsbcRbAaGHLvLHxtWr321HerNphMW95CdBFGdh274iBCDk3n",
  "key24": "5CKXv8imjSjhQYz5x7vxdcpdJee4FMdKz2wgJyYiJCy5Bxq9wAuXuNWwpWT8JqAWvR8isLH9yBjVZhtx3GjqGyty",
  "key25": "2rFnrJnHxQG7GRWZPRpTefT8kHx4L4PuNDgCebwqk2TnvPnq1HEeuwqmQMBwNf6Xq7B2Gf1YQB7Tict5dkiE4PBC",
  "key26": "5QENZqiMunCtmT2uC5sBBzM9U4QyvrrH34jd2vDPQPcMP9RJcb7bF6LKagfyGv3HN9MHsbG6u6VNYyC4uTn9QaeL",
  "key27": "2UzgtHGQAHgGTP7Myysot2N3osJAYXGUCFoBB2qzhCAredyAt3VsmiLdJtD1x7GWG6NBiACHPEgrtNnd2qtJDnzr",
  "key28": "36M6GGLTmzBTH3MHVwcwRP2JigeGFciDHtPvaWYLKSeHbF7tY4R9tfGfFR3VuFmTo5mE4nTPm27mEuTT32k695RX",
  "key29": "2dyG9mzMfHsyDounWuHPcMSqJBKs7ZHGyh1KYmg3Qpu7dBPWUr4ZDntyktRU2RaG9RXiHhZw8Kf5Ba58RvHWnotp",
  "key30": "6XpTLEQt7DDYz3bSrSGMdCNcpi1g2PVta98VoKSkivJyx7sGYEeqnhiVMvnyJahJ1KbmhccPMUNc2Zw31oKiPmS",
  "key31": "3PGS5urxVUNDsv4RAVT1K5Kjxs9u1Tu4SgoMz8Lg96XQNPr8qC4oTjZjRdorjbzCFvcHXfbT56yETnmK4Yx2FYZZ",
  "key32": "63saQxUE6w689wkxpU5aQagqfbJDWw1BTXaeyyHTE2b4pdxKzLz1KJHJueuBnayWjiSXHsnni9wD6YbojpbkNZZr",
  "key33": "4J1YS7zyL2Wuo2xwRqfvdm11YZuVCevs9ZZko4q7Xkho2RGBnnqrMn9bqj1LakSjxgL14mmSGRzRJJBhNgiQkEee",
  "key34": "48PKHbWbZe7hyaTBi1ahaxZjmevyCaf9vwV8B1SFqXa4G8LY8ux6dmYsGD3UADoBucgmADw6WQi9iq6biiwf6N6t",
  "key35": "3kw21PTmMobATnd1bssm31s339ZTnke6Fuz4GVrA7K4BeDvsLMd6yL8Uz6fjQGYfEpP4mYrduJuouqDKjZ8GJhse",
  "key36": "2HpeNkTQFCA3R7htJNk1SQfenY7WyyVfCDAXoyQ4TEL1e1nBXd38UaBztypHLsiioJ9nZ26YjPP51mYjfjSwrQ6N",
  "key37": "5kK2oCzRr1LYkAm4JYKxDXrpsvumZwf5vVV4MgzGhQUT3TzXjdBU1sshdrheZR9hBk2LcAEyyt9AGWr4dHtNe67f",
  "key38": "4oGxq9ZMNVTFmd95n1jQUB7RGAButiTeGAzzonJ2Keq6qu1NDdLxsnE4SSTwMtP3tqHtuhoBAafGNRX54L1FXkMp"
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
