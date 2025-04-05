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
    "2Jq6p6Q5Bx2LXTo5y4iNZXqL4gd155nrS4zsQq2G2aJAkBjXPSygREb2Barv5RNCWzYKcrz7TcXDMSiUFDEd8ifX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kqYsoDhcJNfNz7H4c7rKbcerfDTfhrzjM1WEGixTH2BJpF7hvFaD2PDot6XWUppL62tWnbxLAE6ish2zvvq7cAk",
  "key1": "61NNmgkUmMged19sQBVZitdNBSB8DkZFw6pwMw82XwEnabBV84YTrkVvVNzAiB8PPS16JwLdbwbxtgancqnxYAVE",
  "key2": "4XLqJLT4s7J7f7asrrPhbYyVhBzoDnnxvQf5WzZiVtgTTFa8YWNE9H2TTLjLmEuPYuRW2FUzvc8FJErjoQnNHFua",
  "key3": "49R15KGTUHoiWPEm5E4vDG2QKwaTAkZNsokFy6wLwVguLHTQc3Lo5Cf49m4fgwJ5d1XodWS8bRpd4ttLY9gT2AZ5",
  "key4": "3o6LeSPXpHSuZYYLznyFs5WcWNN5hMJtXnqMKrYY2Ue2ZZyZmSrpRrvCgA6bT9DiRa25PmcNdeVsvw8d29E49JMC",
  "key5": "5wU7hEhXvbQoidvr21q1vYLbw8S4cLrU5GcXp71EaLP8xLq4YWUUBEaAEVTktszPaT4zhQU8ro3UNjKXDaWYL2sP",
  "key6": "5NSRZ31QgGqmdtXwL651WtfoKt7cJTS9NSRYGCF3En5XnE9tCavRZFRnGqBX7MbbtC8shSayZi2oYJAEqWVHRiSy",
  "key7": "25gd7SZrUyA634uTSJg4UzFydkeS7FD6qYed6jxSGmZXTdzJrJnCBmXsvnKahdaFHhWSjFrCjCtHbaYMmGMLszUo",
  "key8": "568QEi6Ueh1BHbjApcRFbL9CHtqrsjGb5eYwKFNeCQNH45VaPChmtxxuqvxoB91r3WzVjMuhS7E9DNoAV4iz5eqq",
  "key9": "5EDD2sv5QV8gaXoyxEy57zjjTfiEHQ1RJ7tf1PpHwLgpYUrz5EfBdCLKy4YDvGwiXxyHTJBsko3cuHzcipEAYrvY",
  "key10": "3hm6j2GkAtWr8NdMn8U5BaGQAfnrTXdABxFMNxNsKGnfWq4HfpkHP1YykeozLhdyriKkUhNSc3ee1b3otwtb2CWX",
  "key11": "2hmbn7pHsVVpZrT5RHonFoC1vTEubKp8ZFgsAUVT7x5YpT5tkkoT8oRXG6GrTFzkvdDkqQXini1QmWeouzVdNqEv",
  "key12": "5Eiozau78nVJkDkdSMDFGu48cj3agg7h9fDi3qFGWdTCAzAQT1LnFz5yLqroiyH3supTxchqKuJZ369QW1rKUHEf",
  "key13": "36GeJjYZ1MafKHfbqCJZqcaKJXaETL9XMEkkFNxdKpvCgQ8rhBLRxJnhHJFYMeiYWPcREedHJ6tgakLxQeZuKn2y",
  "key14": "guxWpTbkGHeHoMML6MD8SRVjYiP9EzTWm7T6oGtW5k9yGDP7nJiT9j7WEBDVgzmxpjde6hjzEPzQSKAyQ5oUPuK",
  "key15": "5QHuBmQWP9Zinrdqw1dZXabSPQ96P7aWkyv4ug72RGYiJaBrpj5DQtp6pCKF3HrbAV3gn7i11X6kqG97jx1GQ86P",
  "key16": "5xBXE5ewiHQoZ2HmGNGNsfFKx1SpZpeerR3Mh729kDZZFr5Tz6HqGV6E43ZC8scVq6kpw6LnaUymuDxkQdZeWZjU",
  "key17": "4QXvbvSixVXZSv6rAGUbqCAYomuSxJBmVuUTt6s3uXV55iDihxUgEdodzxk5zsJENw86rAFgfy9ciwUF1THYaPY7",
  "key18": "ZHb5nmU8uT3CXAfe7PMHpdEELB8rN5ews7HXUNZ8BWBYAL5sVa5dKcmPZ5rBL6K5K2ncgdf1Q1fDjmBobpBziUa",
  "key19": "4sQc2yf2BgRp84uxatyAH6c5WqZEBSRwVcSXKYM3BmKaaCsALQT9Tks5n6okn87DLNPLEULPebg6PhYW3y2TLxbu",
  "key20": "4w8dnc2BaZqKks2VyKdqLhmVCA6QBrWLPpC8BsUsqsnoM7fUQHKRx8nzsnxrmafC2TvNpbvqGJnQB5iD7ogSmcrK",
  "key21": "2QPVsjc4CL2bPV4pc887Z8w1TWWkodGYi83f4zMLpPQ4fQ8jiSQNMDBzmEutbfQUYb8cfq9c9QB9Mhm9ZyG3mVbH",
  "key22": "8oR8QUhJJuY7fTN819VPHmonBXMuEqjMVw2UQMS5EEAVatCYYYxJmXqPU8KMPbiffMbgNH4GbSq3ZjsTSRa8oAK",
  "key23": "34A42febCHwdV4KgQUWPGmK2T5WT6mGMpvAAfjTHMhfC9z1ww8p7sfgbBpBNSpUFepbpzCuZNsDDFB6W9pv5ogWW",
  "key24": "5UJU6GbqyDfA5r4ALh3w6y79e2QXxWV9wMTwWn42Q9AB7UtQxg67pCxmZdowF3uCTWbJpfHvyMQxQtNr6SJpWA4J",
  "key25": "3VU1fLaAk2z6iQWXKLnFgArYdPYmnE5n2B3hZYsqQDpLVcPSrCgjXazsBGeyW7vnR3ugLPP8ZtpkovJ13UoAL2NE",
  "key26": "KDK6vQf9nfdmZRypMuSsdVBcZo5dM3zmcngQRySJyGefK3mbQnzHwUaeS4UzdWdyq6gurKhXLBwsyKmu6FC12Yh",
  "key27": "3ezzu2DRRhGNFFfGZPa8RVMFV463qmMj8ChxzvKmkUPsW1SwYdNmCm4N5b5MPWUsZSrGqYdRXpKmngXSXdDdtAh6",
  "key28": "KDT1B7cK8ifQU2hZZbXMqL4R9q4hnUqUFPgDj3UatN45XdCvDhc76uW4qwK4tKmJvUfZAcjp4ywijFYuyrQc1XJ",
  "key29": "5VsyPka2HCznnm4jNCyq5kpbVhJydg5NKdLhpkgm3akfHoBAprj44RwR5xu3aDxHxvPEHMUwmUB4HMvFHNMYpMSy",
  "key30": "3jqZHxjyfQ1FsYJVGHTKargUjeHfU7u3wbCdwGSGFC1UgyBABquUpd6TcxRCsKMoMpkxiZ6KsxzGAyoV7VyDnLeL",
  "key31": "4tPbCzNU9uCZGovQxJtUHyzPCjTFy17sWZsuwnxwthVD1FxxFG7RvUaBMXVy1Qi24sRtGVJp7ym4dVwjWondw26H",
  "key32": "3sJck6Qqm45inQbJjCLDK6SZTwHVDgiXaF8SrYiBPQtgRNifdedomLjZCrCRZtNeh4hjpAp5uYbWgvcepj3bNt3K",
  "key33": "2LsKGLBgAG8iAmH2dF8hv91kN17P8X59cR1TYgZKGxRv86tZhovZS4ahX9rjoRnTy2NH3fLSPQDzPcbQryPx3onU",
  "key34": "5Yfn6ZKsNb8wbLrzqFWAK8wKd3bZebxJTPSonEFkQZMaZdAXWaUGXHNMHjyQGbzjmJ7NVHuDMBKCVHBjFJPvghqn"
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
