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
    "3YgSzrtCNFPrL1Aabtd48EocYSQyGMrNYmdcnS3wH73X6iMD1mhgRHqyNFZA8Q9HkA6vPRrZ4scZc5MvnpmhEeg1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XKuYjguWwbkwjKad3nS822Yqhu4Amrjq34uRBzAkzgTNiRG1ruk7SgdiatXyKDtJ7QEJqxBradShjFFRZ3zyje7",
  "key1": "uC8iC4qcsuutsJ86BaxFCvfexo43HruvD36G55D6Bt2EMoFZXH5LM1UHCCzHxNRcvEdAKyRfx82QWpWcvBtx6zS",
  "key2": "ZG3iQuhTScBLZHxWgbtaz8RrxVkAuJEARsGjyQyqTMwfVrU42NJK8dF9WvRz8HDVwW77p33Gb4t829aV4GhitD1",
  "key3": "3BE9LZFqduVMgUHhMnZiXe2x2gqWQJv7u4tUQ6W9NXWV9RRkh6YoDKd9PUGzny3TCseqc49YStUYJSvx5qtkKY6H",
  "key4": "5QvktHw3rxQ5eVbQWvU6fyywVLiTafwy1j1i6ZUs2saksuiMBwmP26tMVso4L71yWcPUKpTLzUkpUotfrFuMV5U6",
  "key5": "5Wts7ZwYyPUe7Qgfg89sNA4xrK4esj7xFggDeu2f4xLwvA4cVqXJ2YhpnMT4V8zCVpCmXi2SRnQ55DBTYmoKiZnv",
  "key6": "2vdFRhZJ1Wf8raHXKtKGVwQskZQeDCaQajt6yN22epAQuoUy31v7gKtRFTL9nvxd1vkdYS2oqf31NYCqbVkwS88P",
  "key7": "65XqbBPzDi3ybRQatkdCFBx2Z3GJHrEKh1HpxnV8spEHYFYaLSpEAUs6Nzgs75Fjx53RoeAsAF9DjTJzX8j1wHDV",
  "key8": "S2cQyxAVHUa8prwBU3QjtukXFD9XzS6tEFLpZaVxZk9g98qU2ewvf4ewViasurcrnrUvdAQHcPcnFg5JsrKPMJ8",
  "key9": "4zoEPVYfxN44txo59mzNYmXcyvAgmkuA9pWLK1x6kmrd6J1Mjijem8D7wcHr45WhQBTcexmeXVSQNrfmDBqG7hci",
  "key10": "2Po1ke7eAMfpnwNfbX8rZP97bZ4xbF7chDjKVz225EZ1u9CvadU121QcDsHcYTQrbANV5No3ypJxyWnU5xWCa7ot",
  "key11": "5mugzpPMZ5nhStGWSAwD4ovnM6RLFxWn88PrasFKHQWSfMzDocKFfCoox6Sqsr159qnai6LyiBRDi65vjjxqfRvG",
  "key12": "4AvbJPpbBMwiK3AdqjEh289RhqwQwRAY2ejehcpJHoqnNgJSLCbNLhz6XFwhYwJdFhvkMudBu9jfFKrM9vTywv8T",
  "key13": "2ZvYSeCxhF2jAEtszeXLsfe53VvKVtQgr5Up8nFVoBe41tCi9jjJPYbZVJfpgWE8yAsP7jbk8AhvWMmKZ5d7TVkJ",
  "key14": "63hD4asguTXMaXasnV8GcRHnqG1GUHGQj6ijwKcecaH95bYL1y7pRfYt4jRDZ3siqbznosMWZRimHE263SV1vMYu",
  "key15": "5oTUMBD2kQmNtfnkhq7TbKZnfMYFvr5zKPDZXvwKSQnSmdTfppfL2ftAkAeg4LWv5CzKyquJcf1yV9ber7p5b7V",
  "key16": "24zFvsxFgBYJjA3pouvrozbDfpHbLvB8H16eZsgPz8EUM7tVPsf6vo2j4tY3Fw7awpBxBSNzkqNmM3ASBUcKxrno",
  "key17": "4k3hQGGJdkyzRGC5mzuHFuzAGNbJ5qQ46ZwpvzS4eTjH3oMju55BM39iCzB6qmVxtqwEiznTxSa7pUvu1UCSeDBr",
  "key18": "2b6Gdn9M1AerUaw2N5nYGSfeJC1PhpsD4iWZfmz2Ti7EZaEiq1EvUsn3326DH58rYro33KMtkazZsQRNpySrCjZG",
  "key19": "3W9kuVf8fx223RdRqCm7MyJ4zYUVaCkBVMUVd1Zido6sWHNYUFSNkZRN7hTDScDcqTs1xNyQY9Vi5aTRougf5fJD",
  "key20": "62L4XuVLsxoiJSbeu4YkwJ7Fw2tXKoU1iEYnUn5kUeQgZEiwqMDUac5UfbkpUTiaE46Cmay4w2VZFs9cAKaJNR1w",
  "key21": "LMBW4184R1oAHihwdsoozNNJqrFEHxNUQXELecTZLJDjyYgXHci4cfyntgAF5RWG9xbmfXRKv1YdTUk7U93CwMu",
  "key22": "4ojEjc1EWDrR1ULb2woVcFahMMWoh4PmuG6A5WBawMWzn4feAAmPXkmPoVWkY97yj1qHZpATwTyhgdnJJ574Wj7R",
  "key23": "5V7v2JdmMmcRiJSuvTwjMYZxpQZMroDY8u93Rrju48t2fcfQavVm3Z9AWJ61tasFDpDAc9v7ANe41H5mirBdHxe9",
  "key24": "3nrejX83LJUq2iy29wuqo4QWHBvM8dLLmV7GjaX6AKZ238kZdWfoDoWRWCe4U72nH9YUd8kp89JTVhA9zCNEZj3h",
  "key25": "5h3ZiGQzAEYDwnM7tE38D7ws14mcC2ixRjw6DkSGUefzYPME21kn9jFvzaM8CeJkEj5c4m212oMsGVmpQegXCWZk"
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
