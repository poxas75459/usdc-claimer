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
    "2dg8cZxfnyH9CTjBeGQWMSMtjxUwjpchNFdQkuXVb6WJ3CHRtR6PvPKeaQyqQrHCrkU1w5XS6QbRe77b8aeTWFv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YcZWF8iNPufcKc7dtaLaU9rz61EW1M9zEdajL2Q6e6SYimgQ6Kw1pEaqBYB58CWvAtTHzg6F1sX9KAjSPaFmSpU",
  "key1": "tPqp5H84uhJypGzfFVLrHPN91qoYTaPZyyBDAKmB3AVvDgZwdcK46j8btHzjNt7z7ciYDXDMP8MUXsB6VJPRnLs",
  "key2": "3fCQC7HgzQsuGuphVgkKbd43H1mnWAXka1u2k4DxBhwXj9T5XAzkzPqwt7Po5EGQjQS6AFFz6rTH12W1nkCAgW15",
  "key3": "c2KQ8KfukWQ5VovHJQefhE2ueF4jk97Fc8yQYDk4r4cCMg8btN7kQExoCvfPfNt8Ae6Sn8rPtxEZGREyRRksfLo",
  "key4": "48ksGnxRmozeTDjfUgaT4W7i8g2kPwjstKRX94FUgJDzdJvDJNmJdE4suvt82ZtvfufqXUy92jTWPxjkPN3HQefm",
  "key5": "5WDP2P9r7xYYiKMpoXhx3Ad8P8VbVgh3a459TaG8sxgyeiwQrvQVAuZ9VJfxvKLR9JQ2B1hFiD1cADUvkrLoMtnF",
  "key6": "5JMZHE6qfHbLbhfmj9pyVmbS95ufhSZCLgFbhojzxH2Z64wUi9RvUidU8mtg41GKgiT94dNZGnPcukZFQZ8DMBBi",
  "key7": "5ZExxT5Zv8SGWGCZJzDfiQXC928PiwwpQ9MTMKvyHqigMFw3gcF8Ap3T3c7uKnmUCnEuo9NMLucCBmkK6DQ4qmWW",
  "key8": "4qFN2XJqpcZTpowfPJwmU17Z9gWKh9nphzYp1t93kQWRN5rY1sU6y5KV2XtNbJtWBRatdqA2RE51gzBRFCZpVw2s",
  "key9": "2zUWj6615o7DSgnnZEGXV68dASqCCqro8prBtHFreUQsMkzntxJZUjuP7vpneufrfeWhZ5BsnSxWndoAJB51V5Ch",
  "key10": "5jiqcit5ESAM2nZVHBFZD84aZjjs5B58mVRq8xsZe6gCEhPJx5uDh3FgFnDYBvCZNWXjvauKmJtGJzDhYp69bkoF",
  "key11": "48RKMiU9C7VrWnqB4zFsGXs3xsKh23hrsn1Sy71Gu7n3diSc9D6F2MDRcmbfkxNnzj4NCxTHXKLftztBEroes47E",
  "key12": "55RZrf24thwsLYmVjkLQKx27pGr7JHV1oRkYHMh2roYRuUcMJecExnDrcKcPnf8ozrnefRQoR2bWuApnhFDQs8WM",
  "key13": "3RqGCqnd6gTnuQT5AcdTXjqQ7aN4a7B9wctPybpE49phaBCfrJxbekJZFBsvg94Sj3xusmyHzoao8FQfBZZEmBm9",
  "key14": "P6VpNSXE3vT8wKraCrt2taq9hh1JrYRjuN6sJxshPaicJjEL7YFMwmGcuWiRGitTw4fcdWRu3GGbniqchYYzz8U",
  "key15": "2MnFsgS8CvtXyL2Moq7QyiM8z5wCBsvSxRa3sGcVTUSfLzG3fLr5PAtX5z2BeW1qquz6V6YEwVCiefqeaAtwMmG1",
  "key16": "652SZKLKysnFzbBuZnXBJLwvNt4tTHSXiGei8G9mLdFbEf4M4hByB7yipMGBzPSxH6DGUxp6C797yvrFi9hT3cQq",
  "key17": "5oYVmUWMJSH8ZLMRMRd21M15t2TDoqXwmXqBrSCkepcoqqGhKHduyuGmwqgbAAgs17kWM4HzKvFYJenR5aErJ7RN",
  "key18": "4etV5ZSVkMJPw9dJjxDe1i1AYzhHzpQmJXsJJsuzwwgoCGxYQXwVtVLKEaXE1hze7T4GUAR7qMPfSSdf8Dojt7uM",
  "key19": "3PacwDbGPXTsnTJ4CbayqP2WWq41ZCR9CtYrHU75qVVHdXbV1c1am5C72q5A4FhDyBMMMfbRj4Ym3cEv26QzCErb",
  "key20": "SRnqGitfrNZCBbQQeuUquHci4MbuxK9DkeZQT5CX2aTHs8R3WrNBvzmJiPrCBrJxeFcBx3kwTY1SdBPCcZowNqb",
  "key21": "24Yc2jZ83MNMEaNBeXiEKnvgemMVggFuiQ39otqFzkwhuMyVBU4Gk3rTEVXVqPtLwBY4vtEuXqRZvj1Nnhk3qyBA",
  "key22": "2cGWXG4iZTsUN6KZvCSus8oJFbs1aju2z9KcmWUjRaxrZ6c2QSaujv7ukdbYhDM16hyAVmN1kFYDbSFpN1Akb5Et",
  "key23": "3HYVmfgdxD5e82dhn8Fxm9vpymzFHh1L6AdeJWKv8sJ12EdxmKnG8B1vWenhrFXAtoH7ntG5Aa9CBtp8bdtnhRKi",
  "key24": "SWkgoFCxShYMKw9AShB4jaGEPK42ecsXxvMVN1cAUuTxvkfBPvRsX1tqwSqTiDu4P8dwvgZyKPpSjUtmuZjxCEM",
  "key25": "DpX7DJdj3yqKYwPZb1X59Q1jVLxamGao6ST3cXx7BzCPDPwA4ZM5pLy3M5nYoVr5Bdo6fHFzmXTVwYnieHsEAaJ",
  "key26": "3mHzhnapoh9SfrzaSwe1stXswDALPNvKtTahETW721SzJ2tKMkkepjKehezoqfp7m5mNo24CRMVrfjyNe8q1srtZ",
  "key27": "4nYTGSvG8RNxDRpnLEjNzB8hyAu8BPQbk6L3KfTAtPJtTuF2ntjozQ7BBd7jkcJ2FQ6xxg9bT32wrRkewfUPTXbd",
  "key28": "3Lh1L7u5wQ5BLv9vUMENamcnLP98mG86hmyrQSzvwovc1yVQHS37ZHqgkghY3GiKrFembhtfpFtp6gVVd41u7Y5h",
  "key29": "4ubf3NKcMkFCftxpVux5y7yqzaa7o7xWB6oZBwk1rngWpKPv5c2bE2kenbwrzM41tHp9GiUnp1JqEUaYTksTNUGq",
  "key30": "VoxNFciGW8RmtZmvvaPtHiSrNNPa8GjfcpnYWZAgt5iQc4e7gFnneDahJKHoyXwJiVrM2qj89VZvY21s2st2QgQ",
  "key31": "48o9YKyBqXpoovQxcQihdwFLZLGr65PDPVuvhxHJczyB6X1SEoYWYovk8hqhgJETbPGixkSKgdh7tP22ws7KmHXZ",
  "key32": "488swSCRiGg9CoaqdTUyFivgJuqdbxWduqmJMbMtn9QCUHmnPPJbw1ib4XbNptQPd8s8r5rDspUHDgijHuVgELfA",
  "key33": "5RDEGBWZMfvMLWqJL46Gqp9qzxYWDSqXgGoHnukaCKmPowT8mSvkjk22Tmog9XtjBYq9FK8D7ixJ2wFrKQifLa5P",
  "key34": "2bSgr2Zaa2kzfD3vWYQwpUKcU2sZttM8mh1MY5Auk26MrPHUvot7TNnjmjTaC7BkLYPPWSRSvLpu12JJ3MmEvkpM",
  "key35": "JXJAKsRut34EV4ttAkCTbCzrxUej2B7nF2QXtF3efCqe7HoKhE4ErUMxQG77uPu7UhFV8pwKb3YduK33aHCg1Ts",
  "key36": "2RBKKRmxJ4jHxxtWRhp5mYZoSELAQBZwZ3dFTaTHocDQYKLectYoMU527Mc5zaAxWRaWsd4KrrdUozoLKfto2ePY",
  "key37": "25FnSX717d5RrSmab8BQWJEqMT9d11LihQyBLrshKNwY5BDnD9sZbyVHNFGh8o6gt8MAZjQktoBMEeQRBNCY5T7i",
  "key38": "49pUM3nifstYMfhDKENEmnBRKqrdDYLgKQay6SuwVCVmbjDt8Na52WbqCWURsDrbh5dk3wJJKsC1k4xYEPKUL4XW"
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
