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
    "5ndj3KSrZZGq1Q8SxgDwYUepYj4eCSSjdfw6q1JFSuda1ZW69CMm3sBTKHH6HJfTYmzWkjbgbSmCEjAxGWMswo6v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ef4dTUanbA29FhPpXm3ZwWQfxboeFrEH7axQMPpbFzFcVcfcGtLc8YVYRCqdTFmbcJQaSrUmuZ9MPs4nK2ybtMB",
  "key1": "xX81bhK8xJhSQd4xUAJY6Nx4mxySphpDf1MpLdidrMA37gNx5XtDrCFsNngXyRQWXsLXaGEWooYdBxo79jVF9dw",
  "key2": "GXKwfuuS7pyb18f69hfxCmduWX3XgkWTyqakWZjLpCha9AXatihpVzyr7HjTjwnMbsYmdPDAykud7zqrYzCE4KR",
  "key3": "X6woxYVNQGdvAQgP9yTEsUs6sEyfyLfpWZwQEXm2JLiBTQaPKzcDCxrwcSVvFuckgNwkfR5b7iU9ZLkjKMBU9PA",
  "key4": "5VwLAYAysgMzPQWw1cpAtb4FXiRZZkpdUuRE2TQB5mUA6vh94j1eDv7HtJkPVa44rvYv4UfU4hPQdyrfm3wR5FzX",
  "key5": "2N4Ttg9SheFUCng3WYJ9NAHsSBKZAV4aBdJ3MBCZRXZxUXGxByw8GhCrbmD6dbiPmkCAtCdxnQem8hNFSQ8MQpVp",
  "key6": "4Q2GYUab9hxdhgiMaHRWspGpRWTq4g6p2tmsZa3gQSD85ASZvnruvhmCmxKU6bh1VBonKwpVNtDoLdWMxmvvAraD",
  "key7": "2ZUrjgZ4cewhEqRMNZQt9Rp4Dw77MPhPD1jZXDarrekwFYu6krcairZrbFQBapF8Ypg81h4ureEi1RDTGF8fUEFA",
  "key8": "kqHYG9KKyPEqAdpkda8XDFv5dTKqFEvF2xcBrEhTJiE3qKBw7mZoa6Dq2sZRDnQ5KsZQFxUWTGqhpjVRxGcdTc8",
  "key9": "RnTfMUNivteaqKvdYekeN56fuFaooemRYapWwQXxHZbzkZmVKhtiV58aowDJUTZgW3MF21WFWcFKRN8Db1vgX2v",
  "key10": "2jyYDMfjQBhv69ZxR94FwbnqYtSsQ6Tvv6RiXR9w2mr2RBKNAsPQXivJLUGUjVkYEyN4iSuUbj93EL4EdtasVVUi",
  "key11": "3x1vSXux6nxuiKh6yW4VBxah9wj4RxYXKvzm9ZrUGhU4QnzHEGftaPL9mQfSYd3EA5xqrTndcg9j5x21JAoXfbze",
  "key12": "3hucZMYiBLLPDd6DYhZuByEtHAXnmMKgxCoJx6vXXb6Sri5stDRttnyBHVDfK6gR7zjRXV8trSoQNae7cch6RYHS",
  "key13": "4sfAhk1mgBbqeACKxCVa7SyHX5B13pMffh872wzfPPZpa3gFBA5jrD6GJ3ThZXsk7sSJSSV5nNeqErNYviKC1NRb",
  "key14": "3ttxzXuULzEBUPPkuhAk8XajKSZWzLg7iu43btkR2PAHX163ks3758rWtVHGneSZ22kiuW8LYTBhC7AnmyZmsjRd",
  "key15": "nzErYU7NxnbJSnWE5NK2gnDkdqn3osrPdbyrxpAoDnKWGHNWTUSM58EKKgnau1ZfXhFgTmqgwPkfHSW2M6fWGnF",
  "key16": "CB68QTgSCJ6of5ce4vwtFM2dYqAhy1srifHaD1PYyPupUnTqZZ8gKYj12jBzGUNxa4sWhaA2L6bgtq5WdbdWGvA",
  "key17": "2XyzwTjZgTdSKgMBh4CFZy7vqqhmo2bsU7zUZhMET7VYzegYxkQyajcskko7zdkkFpLThBgMSgDtLjZztxvvDT73",
  "key18": "cQZok478PF4679rKrqTFGwPFyg9zJ6Pmc7m24hxPXGiwAb1fD5tE26r6jQ5XGMSrM1YwAriec92Mz6ZTNnbwjja",
  "key19": "2MdfkJazNQ1oyqXVUbsqbsPsZNgXSmZtkpWDkv9YtCJSezpKsCb5bwCUp2uDqaYfzJGXCKCWV9tg4R23ZycUc9gc",
  "key20": "2GsxwcdkCVFM8hVnPXVFiKF5HKM4MJUzzeXAWicjdhdKakHaREfNB3SSd48uJzKRX981ZRFFJr2qcqVYX9tcbpkw",
  "key21": "5WEPQDRU8GwwPkd2JMUBJmvD16kHgkg1qQktANMWpEfxk7Y8Vq7mYYz4FEge69XbnLQPhpRbs7aTgaT2JRubdCNb",
  "key22": "3JKMsEGugiGifirpfbwQxEf5SgyB193Zj85rs33eYXDVbrwKWTWyBw7nVVgdf4gktUW7YbYELRp2oUiqkghhxyjf",
  "key23": "59ZbDCgRYPacLBMsQ6RjHG2hSuPQSZKRgoTUjwCUeU4LHeHrUd4hudXgfN64EGJHgHLtxcpFHwApQqtcjdY92okw",
  "key24": "4bYTtFzwR1LsfQXH51L5btznhYwQifa7xFFY1bNBNovkc5TaPD7NLt6hEE3YNCJouyfhMvKT3Pj33qt8qXe5niNz",
  "key25": "5Nwev7zyx4c7zSH6VqtbgVN9DChHoZxgptCx2zFGfEGTNGgJAH1Qmy1nkJSd8smokatPdPwMHS89gyFVV3xGgNXk",
  "key26": "2o4m2pZAPLQYX6enk1FqMPvHpfsbJC1cE7fWnTTeZnJoSufwghgeapBvN6MC65TkUoiH3LW2gfB6NPsQGCFAgbDY",
  "key27": "5RDKzxpDqc6voNDk9cxkZo9tv8gdQfp7Meh9w5CmLrSQNWBboJSDLVsY4RKF338UpqwZRsjAc349iqfoYdHrLajd",
  "key28": "3opm8HwaWLhQjQQKUqgpdUPRkUGg1ogdhwBJH9svVX4TELXf8dj7tRmyqRUdrpreAbYMGtAbdfwqyFY4bAXaLcPC",
  "key29": "4Y39XzS4XM7LCJypCC8dCtr1q9pK7GMKBKHJ39CEBqHYw5jbTMAcoyGFWsR4H4pjbBcDswgK1biajJSdvZ9Rikbk"
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
