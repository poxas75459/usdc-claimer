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
    "66wkb9Dg9xpnWdALeToMj4KxxrQL41Bvwh4gLjJf7LNBNNkAFSSrTZuXuKzThfSd24Emg4WBseBpXwPw9dRniq8E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QjeAY59UqQhswio8QZWv5mapBXYgWLvsqSSzxKAxXfFcRaYm5f4MmrkEkFuK3S9ApaEt2zn2katxBzK6FwtxLWd",
  "key1": "2hVG2sDsjxZwh5UEpPtRmLvZZPnAJGEKn6w7r7J6SYGSpCprnqZZLQfa4WwmHB1zbN51UDGa6d1kY7Hq3Rb6eQeo",
  "key2": "2AXqb1qJauAUUJnJ6nxpBvEjNxBv3Q7ZyzD7S6LyEEXtEamLLeVYnsvZyQPRwfbdervYfMmgr7LiDLA2b3WRhFej",
  "key3": "63ddGkLq69epe1fkjdXtWnnXmuAJ9WG2r2yS4J3ZgQVDxckPdwC6X3McGX859EyW9uqg3EV3yv8WArg4iQJDz3GG",
  "key4": "SSKpM3u7n1baywVF8VhXJjFBvWegsU1fejpnscWdL4KQwwvmtpGpvzRKtQLH4iEWVWEHv6x9NmxwZNxNZeKywxZ",
  "key5": "5399KUWmzdta5AikikRzntdo2gb6myyqNEoePVFgMHSGy2pdVJd53taA6b4Ss47wehFaUZvYCNqq7wy5P3ATSNc4",
  "key6": "3bP2hTPFt1aQnQs1MpMc7YqsTGMK4s14xH9yoNqHBbZVrDfCfsDqMYeLFXbxSpCuEAtNcKbnkYn7fJmo14yaPBx2",
  "key7": "4dJhSqoqdU6XjhmoT5wi4Nu2yVEgHM5EmRa5vZnReUJG9WC4S66KVWhPJvaAHTZZpLqULnaBPXdrsoKE3BLBqrJt",
  "key8": "4mTyDtGy1fq3QBUj62Lmm542e1B35jBZx6ZbXfSL6UU9u5wG9fj3qeYJQezfQAMGDbfGGK3boegTQoCgn5eiCXJV",
  "key9": "2bweMcNKY6sKTBwYFCypwthBPWrshnUQ1nJLVdP48pgkGKJZmXgg4HKrEhP6Yi2StLZXckR18beT2LcQLxpToBDv",
  "key10": "35XzXsDhj4mfxZgJwRfePd3MUNX1MbJ24893qmi6GGpNdcBo2bgZUkNDseLvcyJYRCGo64f6reGQW1zB5V211xWZ",
  "key11": "3K1MU6BF7r7PBXZKGcsvCfggQRtRGW6JgUy89kwL5Kjgo7KpkTYp4f3Qn7YpDVuc4byeFyRWivPuacwYGdJ1kSHm",
  "key12": "4f5ZbkaHnmt7riCpv2sQqMTkdEjYtHLiR9pQ6aPYEDxSyDZVEmvZQbRCT4Mx2GahvcYyKH3KDvXzMRka84pSoPcX",
  "key13": "2mNUw3cG4xR3qsGRZZjvmJ5RsEYuxfH1453m4pZQtLh65UCGdYRPQ4jRr4X1UspqwNSkjKYEwhsCvgD9RqP4DUC1",
  "key14": "nyYU4RTF8ZTzB1xHfq5LebHqk5QYnfJFNJwEMXYETYUJq2btUnJMtTe4yecWdX28RnL1LgwC8ftFCU5kjWZm9aL",
  "key15": "3uTW7ryxbDbT9gnND9Qq3cpXw4D6tqMGnxs8pAtR5VGrzEDB2r5uNPPVYtK3mXbeNoyH5jN8a7Fn1GYhsBK9gM7n",
  "key16": "4mPaYbXpAGtrg3kwnbuQifLJoQWvrYvAznjFpj3YxtV5J7jcimxrBzVmb5WeTA32z7k7W9YTYqVfhRdhv1wMqRT1",
  "key17": "4KsWoTQ5Q3Wd5xAHoWy48e4HtPkgv4jUhPerBQVVfyvaCSbtfyyoAJsgudzZeFkWmbGU2iVnMbugHDihxKhmAYd9",
  "key18": "5xP9ou3KKbEic8QB7yb7D5XVA9HmQrfrRHjEhpwgG7d9nN6gB1gsERXR9BBXgV2whHfbeKV2VNPPAgu6PW3r4Ppz",
  "key19": "516CaeoNs4uZommxzPp6LZmFziTJ8QBFZ6ATiN1VPGXhnXqTyAWKhnXTaGHTHUamyFEMRvefSCvfiNgbWoqc6ooL",
  "key20": "YgErfienTGs4JV6HYet3W5JBYYRqmwjzD2m2Udi2T6kwhRN4AuRCWbTXU29vgSa8bjhThmLwgQV3nJoi6gXRfeF",
  "key21": "gTYg4RyeHxjrTpCyntLhKYVueQgQAS6Q5v3kDkjYm6V1iLnyPcmBkUDt4yryes1xB9xbNpyAb8dXrWWPLFP5LXh",
  "key22": "3R9UsxUDSM6sKKrk8oBCArMgXpPcRGL5GCtQuzBghd5vyjvpqFtW5XQ7ZfCLBfo1gRWNw1f7AzfryUjNnQvbvy2j",
  "key23": "5RMN3M3CY3Df1Bb2cboxaAhFTSzYjFviSX1aVFzpdz11xqX3jmrKnyzBwTr2dYt6A5Uaq4jafCMpEF7x772FFwzt",
  "key24": "3NnxdrK3xGKbuoyN5ADdPfwMQi8pMWWqoGwbU2nrHFjPR4Zgs8fXCAB7DBEbYzp4GJTBErXT5h1EheXPZeiTSwu9",
  "key25": "3RBwG81M29zaFriGUEV8DUZmVF4ShMGeKWXRsX7i72eS3hfZS24d5yjkcmb5a7nqMWDYKVJUmodY9hQBrR7tev3Z",
  "key26": "2sxwXmckCBBKVt4vhhjAeMXBS8dRyKV14rpMxRXDBrmtTuPFRn6e2jcm4u4Wmtg7jVYvtWmBRKL1iBwkQ4aeHVDA",
  "key27": "SGNPAnvXRepJEdwCQc7ABxcYX7jXX6JkCbJrecKk9XQUzda8BXGTggAwcjVBx9fNK183HGYtp5MApvds2TaHYWg",
  "key28": "38Atr5ccbx5eb6c6eMWtcPTKz2N3BsTq1hYPEaCGoSARjztgc7pH1VzPQAVrHT5m4ivpaVSWR1kRbBHqrzum1XTo",
  "key29": "5KVXHmRFFUwjBVxsgmVVaAGekjzniAHgnbt5VTrFBGGmys1ZChdxo1gKqJzX8JxkUtb3tQssobNxvirR6XUfmfxR",
  "key30": "5r4oeKnyGyDz1AQ97AQKo3J9fDBfXByFFuh7SBEbHWiZBZJL6jdPRh1goiWkWbw9VPCo46ki3w65KfFRrcrR2ANz",
  "key31": "2bjvokMwP8seNTj4KXxySx4fqXxoZcNoGcMwNuiy2dW9H1KpcbrLxZe6ASKQocEGbMWZ1pLKEF3EBgqX1JjsELnn",
  "key32": "4RF3dF7dW4NjWMR4GxHD9V3dVer92izZp1RwdJMpLUNPstcTPRCk1divnWNqwALW1y3UUuZiBjaD7AJ7cbfZ39XT",
  "key33": "3e2jbjmLxg6WCbSNW8bWFaZBykaAK3WX1HttuHRE9HbSvizbSqdpstwx57r4uNpLXw4ptjntoHaTFNAYj2qKewep",
  "key34": "5ERoT9i97BJPokLRjGwWBwuHCu9dJjopMMyLEsBnRW8vwTk72eeESRUdbcid92WxF8bKu647horxZvD9ac7etoUF",
  "key35": "j131sdE6UG2GZL9LFp8aXJWXsa1XXtmscxvW9AwmD2RkA1vuFGTee3Fz5fGPQ3F8WTJKHtyUmUWC4pSwdsdNkDv"
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
