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
    "277w1GbbXJhGho1RykejKUg6sBo91hzKbrCnjRucyJqjvDwH4MG6BBfvPHFgDo61XWVygdrNP9WWRntrnykTWFMT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kpWy6zaPd3FMEnhTA75y2TXVytKADV1XPFxPKC69CZHx2Xj6wSQEWp95TuUBCvjXqY4JhMqsg9aEDqRS8tPwRdT",
  "key1": "2nnSZPBBAaHoZMP3pmW7FSgfRizF5UjzN8CCYHS6J8coP5tdfQVvaFkzQxHoQyz6EhbBKkEajQ6yYwNVm5qFbn6i",
  "key2": "5z6K2SXaX5fr6ivXfRA3XZ1Sx9V9cJUn3WLD8PiNpruheZxwm5i9axauPANSUaDYzR7YEs983EEnyXGLEsEGT2az",
  "key3": "XiagEmv8MH2xvvmTkwr2L7eC4J9qJ9LNzoNmT9AhxjEVcandSnGkWx4ajtjcszYQrMUxTNPFjRoomG71i2rf2Gf",
  "key4": "2QqPJBpKk2cX5vMgsYoiNs3GKp5ZLonZomuHpsLPtXRqcEHU1pJD8KthFZbg3EQsnmKumD9EMfYdY7prxj6dHFRB",
  "key5": "5EJj9HiuKnCDricDT73xTkFsMdVbGBqte4ajU7eUafyEPRmcptfvWg7u6zNJb2t3GkaKTp4ZUD7MY3caxQhg34tG",
  "key6": "4LximBk4p61JsNbxcqf9xAeVHQSY439WSmVkTKrUCe7KC8vpPnMF5B6djXtEXgE6fhgWKD8RBpECeMDmhLc4m4Zd",
  "key7": "3EWrqwDEqhZisTFmWATAfCXKdGSg6AhFjrL8Nfq1P7rqWw1CD5gVLtq23v89XbZ1msLZbF7ue9apgGwerzv9dUwC",
  "key8": "5wZz81hJXGSNbejpb5Tecwvy6MzbuBRbfgwuwH6bEeBJJeqSdYLKmfYGMughzMJXwWcKaBHoFo1V28pU9Y68RkgG",
  "key9": "5kiHQxXcLtGB7ZGy3oiPAkXUFEnANrMzQRM86tXArB9Mz9urXib6P6AVVHT2JKLmGP8g2vTCDCz3RzyNVmTCyeEj",
  "key10": "4nT7EPV7VVPZiB4bRbdZswdeaHbiWRYURVuCW78FC2nM877UTUj2fTmEHFKwYJXpXHbFaY9MsrobttNtXtAx5fM7",
  "key11": "573YsodvmDjYFRjVWUegHxr5dmvf76oS5PiFkpJMKeRQ7ce7xz5qNPVMfXEZKAjXE5VNKekDfCpRnmSuHaGxRtKE",
  "key12": "5KzgjnKeWg7LJcci4Diq8jxiZYG6C7hH49xdSNrcxkYSDQX7SBPxBVZZV3o8HeyNQ3pveZG4TDxZUYuaZsHSiqja",
  "key13": "35Ny8PvcCehrgMrtRLsvqWW9w9GVx8ALJviaaVDXEXtPxcpQMruAYx4rKzj42U21wADDRAEyiboCAuQvzWcw7Vrz",
  "key14": "me6mBPBjRQ3Dh4qV7aDXi3341vVQn4YXjgyb2BeejgftH2HYAsfwXbeZpGpoBbpVpTyakVTgXG7mH1ShT4237LZ",
  "key15": "43Kw5AXRCUY2JEVdELPmPgRYrffcJKSusQF5eQ7mJMRHPrH3Hba8s6NVg6gBDjKce3y5Kw85Xv2kpcUqHpkVzLrf",
  "key16": "4eqJXMkAUNnZgq2Awi8NVkB9K53ZW9u2SXrbuLDPKhTJCmwN9aYaYHQ1CteedcZo5sxW1p28n7BayDpTgL6AZsoc",
  "key17": "2Ndy4z1yPB83HZjjScSxxDApaxcgNXTiqv6nAS5Xzim7tWApkgURfWxvF31AjzTgSxT7VAzxK91EFehjNVKsveRE",
  "key18": "5q4NNUVjqTAFnqL7LwW7BhFyWEs8dKw2rGBA7JHEvmJf2hKKb3aqySxKzfLevHj7YxFtFyJvyyNcPnPPxs6wFAUD",
  "key19": "31Tr5vfnqp8Zk3JEss8MCckmG596yGdTNBYBbDaict79G495StCjb7WLTVpGxJd6fvHbqTf9nZS2HdUfpWqBrTxX",
  "key20": "5Gk5qToWozU8MGPbRtFHiCJupg9uXUyyFxbJ9f9KqDdG1846NAa3PXW87kknT1wC5YcdYho387jYGsSqAqb33Jgi",
  "key21": "5VnLPpi41Q6GWti1fPpXPxRiMDnhrXRirAoCbbf6pQuLvExAaN7ojyyck8TvG3qj6igtmyGq43d7SA8hpmfujk7j",
  "key22": "53NNJ3rfzqWRdbMcSLugoewh4A6C3n5djmVsaAZ4exaDMnGQKnzfHBQu7QNTn5dWgtXH72yJCGhisePUV1ChxMWA",
  "key23": "ad2Ln9p6CSb8CtnbzwpszSB59bMmmChj53DPSHmQ2wtUwKQvzYkfdmucPbVYecBqgWeAo971WegAeJTYmov6xkd",
  "key24": "4sNVU6c8m3AtBv6yHUdBoRcPNjCj5Lxc3ny2o5h1zrQ5PbVsUu7YDtuNLjMqkRZwfnbiQyunyirNzZQb8ZNt2JaZ",
  "key25": "5oeker3FYY8SXeLBWcyCYcetdjMKKwq82ACBWdbH4qiYWs8fmLHBmAz4LvSxemjFqYocLuo5K3erqJNMr1dUKS7g",
  "key26": "35wdRkoA8P191p6HG6naNRXDbtFy7s1C3GFXehJSV3Cm2dzWgPHf2PbQidnZaEQgWy9UgH9ZL355AgkXFwgCLKt8",
  "key27": "5LKcGRtxz47yQEQGQSJN2wEemH2eRY1sdSLrwtdXB8HJpvivEX4BHgGfiq1SXDUg4rMnserEWBwrBAetgx8ATe2D",
  "key28": "4K3eXF1etn7CWd7xN1EqkP3ZCeae8XztkDZBsMjGs3qmCvkFoa3UGJTtxDoiCQJFtxtqAj1Mdgvfe2A3VigrzR5B",
  "key29": "5p9gxdFmBbkcoG2GpJkaDQkPfjfbJRKdHkXVjkbBaecUSC4osGE99CAyy5ZzMzZ3gq2GZELPstyMAb3n5rXXaGur"
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
