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
    "2LBktuVbEBE5i3NsXyiekUoeYf3EXxizcj5UJcKYNvBNV2gaXXn1o7owccZjA32gjhi7VDW2e7uGHUbyQeYFDyPu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DBrm4MqkqojLLtXHxydaBtrQSarq8pnG66Aa16pk3jR6LwNvv1dfDjwUKDD25QKpwfNqpPuJy2sei5sUrNU3pD2",
  "key1": "621V2rvotFkbFHsh7BrhhnqoDXcXPSmuJo4sViVz5tcnZZ9cgi57j9fuxSrmbxuHHoym36dQMaCgETSDuEbTdUHq",
  "key2": "2bJSDDpufodCWB6PEn46hVi7rS65QSCn5fzP4Y26SwzFLFRx7JtpUkdaCoobbD14BhWz1PEZYW4hZ8ENM55vzY1Z",
  "key3": "5yfDkw5DznGJVN1dVa9REzKgMFM2LE1FQG5aadgXUfvAYsk8qoX3FmK6t2UgSp7eURpBAunGTWcPosfCc4aMmwjm",
  "key4": "f6kBY42V3YZ8oSZVvuhWpyofWLDS6z89oX7xUngNsFoVciqfpco9Rfu9suytQqgPdL9rm9JMpmhfWrd6RcMGv7H",
  "key5": "455DJAYaE1qTHXGPAXUMuMCtYwA7FH1hEAcV4Pv1z2DWuAArRUmQyryZhmnK4v2o26WxBowrEuzoZRpU9zsiMAN2",
  "key6": "49Pege55eafvnmiarGZVWgKCemZwMenY9gTq2tRhUzhFqfHut7h6MzTc9cmLs1SX6dLUwvhoBoA6Y2KXWuVo9BLR",
  "key7": "3wkc7q3uedxddz92X3odtkmU3cP8tMh3Hf14ZJqZEAkmMA1J6EvbNERM1G7dwQBiSe8pqADQV4QhuY6ZYJcWpU1n",
  "key8": "3YouHZSAik9nsafHcokiLdT66WoLgU5mDazCWgkMbeP8j9SCPxkmBWS6cDsgfFcwm3Gz2dFxsQ9GQwWC7vtJ7ShY",
  "key9": "2nTTBgSXcGAnqZ6BjtwRFkwqNkTV1aJQYPABSQVwR1M6DTLz35zj6p8TNM9imag13V9kpB8wBymiGp9vX4GGzC92",
  "key10": "wnmQXRWF4dP5zo7PCYSTCPrTFv63EVJ27T4tdRsLmT6BxmaMoUxkRFeSBNqsdmZaEwwQqSHWNCyR5vb1PmtB6pg",
  "key11": "5TQArusF12xGeompCThwG2ZptMJsWcpgKgCCD1Dd28jGfUqSLgL5bE3iTAytmSQr2B3yQdybvZy318metFweo8KM",
  "key12": "2x6pBvh7tTuEc4wJEugYhsaaaZZdMqER6CCS8wnf8xfuYfx8GkJzEoH1AP8p2bXyyY267QGfaSyNeR1QncRxnDfg",
  "key13": "4hWfZeU8XQXuNpNGj952juJQ67oYz8UYsRHF5XseghryrQDqRYzHBCh1EX5GfAzE5YeCXrdqM7agpA5mBvJjh9Da",
  "key14": "3aWbj8acx3gwS73aBo5nHNDoS741Gd1wGV5K3fEeGkV274QhaLqnBASYkTj5v39EKXkF7BYqgdJrgGUpHFhiii7",
  "key15": "4wqNygkGfSGm92v5hsdz3fuWcgKPMHPGWttZx5xUdckXh8rTTLhM8CN4Jsgb7BdxmehcerxauerEULfWTodWcXd9",
  "key16": "23YP2po83fBfZU9BeRCvvQk3xrcjQraUkAVMd2zZfjW5jRzXYTJY4SooeLdoBPMaQVsRMF9yAd3JqdoDDE3GKWhF",
  "key17": "5dkmzx1YZFQWbonsiJqqvqNub2RbBkUhjZrUJ7zgfZZjX4AAc9RbE55pqkaNX6QAn7QFjcR7bRcvg6dLGwbBVTaK",
  "key18": "5USeqz9p41BACs9hzgTWBsCZCKwc64tz2AVRVwdFgx4JkjFQdn5oPZnpekCmqxmBFEwpq7kxqbu2tXbLa4397uQ1",
  "key19": "2M4qz3b1AW8FFV92xHYRaFEGsxvhvQWhJBF637GNbymdb1tJAwLHEKxnBS1USte3tZi6aGFQz2rymf127hGyNnuo",
  "key20": "5eJEb4uv1TcJDxmxmGebWhDMbS3T7nSS31M3vifyuM8vr4DZM7UmzbeLSLDHmjGJjD8mdpTfXAz3C4zjXTKLfmJC",
  "key21": "2qrxgPAgmr7Lv7xTjCoHPMdLLA96jhcn2m2nBxrvestKMnFnvMYqnMragc4unkvposAvzwrjL9GgLMtzrrwrDnvb",
  "key22": "fvbiWj9NSNph6SSJb2QoNQvdP8woMoxLK5obo5MrZzfcGaRpaUfs8WxejfHu5xVToFndBDXxm3tS3mWhNP7ogA7",
  "key23": "3csPXzZu5sv94cVJ8RBT8tKXy2BM27VaiEp3BMBpt3SgofogixTS6FN1aYKbCZDHk7zqjrzA7S8K4j4Pr2bkKyGY",
  "key24": "4WAq1sX8kCVC5a7rVkeXFEiWefNKNEj6FCQBGewjmmk5mv3PsGqx8oEfVmYeP1pmQyU1dW8W9K5LhgAmNpeAtBzx",
  "key25": "3pJYanFQsRTfLAvp58PPzqhmqANfaVF1cXfRz4WBfbbEpLGsX44ihJ7uPQZEMakjSHAuVJrD6s4tAArZ9Wr2iCJw",
  "key26": "5sH6RaR4cfAYouBEzAyepDSgihi1spRoN99pq9RkLWeCRBrtRsuFSfWM1RgenYzJJhCoTnUAxxsv7FvFcwuRKXxk",
  "key27": "4FShknQyVQKLR3v8AEc9P3SjttMqoev8PCqVas3mTCeESJHNcwY5t8tRDS1jn6Lxcr11Nn5iJs4C4W9aQ23VafrT",
  "key28": "qUf6REa5HxEaWt6EwFAG5FLMwM3XhyoxjJb2bxLrRzBWm5AAdLxc6KCuwFe3ovyebRZvxPVKGCu3CuyQgfYCArY",
  "key29": "5aV7eygfETKTTYDaaBGs6E4Y4tPnP1ZUaxzWV8uwPV7z6qMqC8S5UGhDV9L5X9cVEN4wGbW6n4xpC654AACGRUMs",
  "key30": "3SSDaEvcCi37vVcRDAy9PuEaHL947HvWkyJDRUDnQ7gBxKqRDeWdbK7TeEds3JUMH7KrNwrq9qAeFSvMjrjpTgV7",
  "key31": "5BZCneUh5QV9GFPkbN2nEdJ2haJVE9WFxrtAZJ13YSeQz8dqDYmLbccthA7xxsjVMpL1jKj3uEWUZz43rUjR4WV9"
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
