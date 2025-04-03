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
    "rofh6XKXwksB7ePczk2Ad9jNX8hDapVEzfpwmiR1mBtCfxqgeJ5St4aggxkGHjynNK8yH4n8m4JMmbx6PgvHwkS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66nHKmkois7TboWPGmU81JKpoHbj5NNiMDkB3Eacqnabe3CkxJc2hK8eSW78ctmvtYYSh4g3LvPeYwk9wdMunT1g",
  "key1": "5kM5YyUmbhbCdacmgRW5Vw7zEFiXvSsJW62DuYKkVsf7izneddhCqHQUBvU6TJcDhBZahk93n2Jzm2wnGPvqxhdb",
  "key2": "459bvAN9RhnQkMPnJRN9Z9CzcxvKxcN2MogNJFXRxWqQzw6QGBi8hEH9qMnYU6VFJrs3zyahAtYxS96HHQehUY3y",
  "key3": "D5MTMbVtxXnLBwjwrqFnZbxhTxnznnfCCQXNeNmSxRo6CyJeRHY12LJQg76TjRgec2ug4ScwHyAu3CnHh3TFJEt",
  "key4": "2EtMYsUybaGJGYKTUGtEENahCkpBj4Z2K5caEGRSMWqTW3zkRV6j1pHTuc453mXcapZtRF3qj32yWbUvoirhcQLh",
  "key5": "3qRecMtvqw7fhSjo5FYVpsF9ymekrgchGPdJJ1oSZhAmpQSbLLaxxMohb2aQg8kD6BP8asV97qF8HstqZGLkUCzC",
  "key6": "2xYa8mvRHyd4eZLdWZAkK9dpMVZ9xzLtAwXRjQW3SfBYLDjc3nwjRw8ZKVEprzphq673YNQ5LLkcoD8aNMGG8N1p",
  "key7": "3V75v6Jy2EJjXXqbt8JKq2CXbcQER874UdQLCtjfREk3fJqJdix5kSbrYw1nMgTEa6qumGwZy6Hwe92h8GTopGfh",
  "key8": "3ubBwGdsQHKa9pLfhBXUEo2mMXmzQjLq4uYM2QseRmwUHhEyvSMxft7Zp6AXPsBwBatkF4u6h8U2Fa9YMRJaPkq2",
  "key9": "4UxsqM5eCZjAvLtiBGac9nG3aphqvVhRzCPrMtpUXwTVXvwrRdaeNs62wbmJ9AWSFKZ4odk47huLsoDveKweoPen",
  "key10": "28uskqHCpKz9CMEoC2nm3fvePcUPxhtNMb1D1YxFSqwc7BXxyoZtd8wGKJ1ky46Z1q9A17L9D9rqDBAozXKuzhyZ",
  "key11": "3qcZEHHUdb8z1dmxyGk8gv1oLp7AjoU1QzrjVPj5fY67WZ5P6UNwjBypyaySn1X42piDWD4TWQALE1yaXYJ4Ctsq",
  "key12": "5HN2QWisLyKseZenzfHGn79wsLtrEb3a8h326AJE7r4MbpLfE46PJC8HrBnQPCud7VU6S3VmBZXaHvG2FaBkppcy",
  "key13": "3FTF17GGW3sC1WjsGfdPeEHhouWXHDn7HA8pfy2JN7iCCJTWqKUEsF59Vt93sRHAcSAwWXPqjuwUmkeMWYowLkKQ",
  "key14": "A6idkXJauPnQJom5g26RuT88FvmqnynJ7N8kGbYGgSmvvgyGa5XDYJEg8DRES85KBKntEoSX1tzPGfxTy2iFGiu",
  "key15": "G6tWFTiw5icCYoTqw2yBQxW9UBfVtJJQD4ou6uVMkRyNsazmuQnvLEWbtav8UyJs9R7nCohpT8da8NCXHRHH2ko",
  "key16": "5yiGM43EMamrrHN8bqXEcZrqGxdE5kSZZc78ah9jabKGNNhmvgwxtiQtLZUdTKAUjwXsWGKnyFsgWP2mcErpb54P",
  "key17": "4PvMX2sBxos2XDc4JGXLsxXDsVz5Lwh5LFm3Txw665Zt7HMHbxd6K8qeDoN6NannGs7ceobx7QDofzApTFnV8sv4",
  "key18": "4dzdWrGTDPGaGJ6f4bSfTW6RabixiPTUTMjo5a7n8cThjR8pP6dsGUf8VEVwgfjkH267mKtXWBshb7FoWjtYN1Eg",
  "key19": "4DedrsWC4KkgZNF1nefNJjnYP1ZS15T9B9qnEjkvmh5pCxnmhndqDYx2nijfmVmGYkow1SMPrhUqLXoL1BGJYnZt",
  "key20": "3VsikX1yBEuvtGAQR7pEXtpteyidz5s775hvn1cubmM9Qz5Ff2yXa2buYPEMccbCaG7xG59MRYygAR2Cq8BH2Zqz",
  "key21": "oTUo3mYo5z8dAmepR12PqVUwkooXhUmMKegGRhqfr4GP1fR6CmecFPntSq89jVq6xvyuFF29eAGVtiF6zm9Ma2v",
  "key22": "41BHzHWX74wrZVf7FaGujDPa47YQGKJUk9t2CTjnjriTYFYM8U42DM4AKxcf3b8bYWrYuE5hRdwer3quHjjrzizq",
  "key23": "GPfaKFosbaWpxSpckt6tL3vMBEXAWHSTj8iMMgELueMn8SF4HywoX38S4fYMDARNed4jtJNGpc9cSfydYrSZrqe",
  "key24": "4tiikcqJVFYdAMtmyZJ9yb6m5xUbRoZ76TiZVpELPszVeDCBkzFaj4k6AUHSNyPgAPxBiFh8f4R7GWeDeoj329fb",
  "key25": "3cbYoxkGgxsDiF5sVecEgiG2WwYWesGD14vwGj7KfbTZNCvJfqQkfmgiAsLhhZpgCuiMd4WhMEyG1m8ZueMip7B4",
  "key26": "3ddcYmqwDx1K2HXPE8ecPzv2rXhKnpmHnc2zyRRnXPnwsjB2RsbDVf54sirKBLXyc5ShcD8Zea5J2C3LMTmbtva7",
  "key27": "4CMhjaqqeyg5VMQVkLdFQmHCuBzgPDZGMn1c97y7Pner18TJzZbKY8MQkxduAUdFWuP5CKe5p2raKAQMiQM2gR3o",
  "key28": "3356Lhk7hGjHCHhZwmgReV9HHT6wFguudZC3Z76o1HUKcs5yyH2Cu2C9mC25CfxDMZ3Pf5WaHcqxsHUUWKJzDspm",
  "key29": "5jpnFP9VYH2oR3sWbKzycrSMc4LVz3hJoXKVfLjKfuQPyS54vTJNCEjDPM241e8a9g2sfnD9YtB4zsH4LNe6QE8K",
  "key30": "5EMZhRAGdD7xv89jseYhwaYN8XJ8V4DdJF5Rg3recneRcQZEZUNRuvTwEnJ1pqyJwLYwiusZvHqzs9NH7vo3485B",
  "key31": "4GL9WW48ew3Ng6RTDRCPbgQJBWSgF1CsMycYdCj7d4shSuXmpzMN2xQJZPVPqtVfyvUgGfcUJWgdxTEwf21zoBWF",
  "key32": "3tsHAtvyMsRMNCL4TMJi99fCwsHUgoHRmadnWcXoUBn3q7Q6s9tHFjn79b2MUku5t2LJm48d9Cxk1amb55UygXSj",
  "key33": "4PAjXqN5zBY7x3H81cwFmWX688r2LkiFd66uJ19LFxawk4Fy6FSttQF6JKjp3gdrTmLXkRPGu19PifZV4UUxgUBn",
  "key34": "3LeHpE199jzqN529uG3XKcfBWf9KEd7CY2fYSqA4c1Bants5X4QXLFEfS7Pf7ebPt2cyR9qfVa5LEkPAufTVmZRW",
  "key35": "2DVQMg2FHs4SaF83ksJ1EX7VvQEbvj4SLC8YptdUfQXSirbpD92oZV7eT2Mr4qt94mkYX6VY5QUQkrW4jfy7yHgq",
  "key36": "5WmtYcCu1TYVuXYQvbyRKRVG6PvgeLDPkVj1HDJnQA5zcjrj7gTmyGRX3F5fVDNT8PEHW4ZHZDBPF62mFMXMUkkz",
  "key37": "25WR7Wwphkq2RBfY5eiumVnH2CJp2CzKSUTfHrqQtyQbxX1uqzhWbYiRS2wqaxwzf5R9Sk7pZPaagMCvyHNGBKV4",
  "key38": "2jzh2nzGUgukt3b4PveB26T66eUW5tBq5YrgDrUGC5R6QpuPjeNhXcpXTohfzPU8N9Pe6EtzypeT5wMccBW79XXo",
  "key39": "2HEzrougaZSDgzZMHd9EGPfHjoaDz6nu1toQQ4GQ5181UhS8Ua4VrwszUdHQww5v75TNHhhBnW6wd1njV7CTspQq",
  "key40": "59WjEpMqczxNTuckip8b5FuJkj9Keiz1YwtEqTNGZNT1KC4NMKTPiC2gWnRW7JmCj8WCAfP1euvrhFimSyJMG7nR",
  "key41": "3BrQs5HfoVJvQK7Aq4AxJRM5Hg9ffrBvtyL196PbVVHDMzgc6HXyA6jPm8JtHxkmQEYFHQRYTgeoHhRFAbazkpho",
  "key42": "2JtRu8GbxvcBHaHy1QtiVVYS1KuKazcnKM1rg5oo75i1Mig4k3oXvQ6BNxmLA9TTroFe4MXFCRGcpP8ydRfJpBrA",
  "key43": "3AcFqHehm4hencm7zKta91JNTFsZMT5KRLGRkdHb46XCMWX2AsSZSHikYkxUKBZKBS3e8ZbMoiG6rdDtyeHGJLNX",
  "key44": "4Md8RLMwB2dNoavWcf7qcsonjzb3M5wVPnLtqJU67p3S2wdCgWJZ7T41gKi1ETtQPL1LjGhYuEEgj7Z8fe3mWuAN",
  "key45": "4wk4Ma5sYu4G5FUbEA5DUfq1XFUJbPZhpheZpa8tsYAVBmBet2jA7d6uF2XMzCXJGNud37Z9wBNC3E1Afn4kM5Gq"
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
