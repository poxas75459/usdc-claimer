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
    "2jJBuKNpDR2xXAguiPvccfbqPwjeNoai1YLZVdftaq3sRodRmGT2E4ACRsEwZbWQsuWzjno4BqwYccKAHDSvhpN7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44aJ3DpXz6QarWbCvje93YjozSkntFvbabdRC8RFs3QF4v2GQX1bX454KsHwhMsJ6Z5mwoyxcQtFkjJjXT8nrVkB",
  "key1": "3FCBSAqzJ5u9fAE78trRJ6mDvXMq8LjqFJ66CDXyNibycgXZmNdqvKQ981ohbfN6ptAeYabjYqiJx9Vh4r4fAjrC",
  "key2": "2wcWY1yp835RnwvTBvKA7oSJNxnNGzZCGm3fyu7jeTd7FGaxhxoD1wV9NwPiqJsyTNwuWUuZhxAXTzt4B6NrQrYx",
  "key3": "5YcaLFGAZkxkoNts39h7HzoUp7fKf77apFVr6R5UT52kSLLJ2q7bswXzW7d28G4a1CXeCwkCTYY3HNx9FMFzsVip",
  "key4": "5d2QYaJLve8fduhT9n8K1SwABZ3whixeMuLdxVd52VvQiqLm3ziWNFHNKgktb8rEqQBwuXuoknZH4x2puxNhMmMp",
  "key5": "5Z9gC5VpPQ7ZLmaNyQLzjBUyKPUi3hKtzQB6fs7PuqaDSP2B1ioYv2WWgYDWs1PwCtq58CWPq3HJw9Lq1tV8J97S",
  "key6": "3ihug9oLNYQ3ewJKPp9sv7zLrt8crnFmVioGSWbjARyZEG96gT5MjMLjL7XuPC5nxvdkAqKkTA2mE9zvkBcLTtFr",
  "key7": "5vvGXYcc9ZTbghUKLDJUQEP2HL615v7YJcfAUHriyWn1P547ALtgSGqEsmRugAH3vaqAsUhDs83XaEkVYmJzzkb9",
  "key8": "2Jm1uy9d52JePhm66ox6rMs1QL17XyfNkbGWS9FpvUmytCJQWgpTEJnG7byWZmzFFmDSfHisCFhmUWJmvHFphmKz",
  "key9": "5R7stKxXqKn97B1JMpjJTdLm6Xa8xg7BxSUsX6aCL3WXwnBjxw13rwAm2BSgcvEmDHCpwC2Ny6UQpjsQ8JWxQoka",
  "key10": "5JcrhugeRmXg25iRrLyAKd4eptyxn76FV52y9aYuftsrvtDhR6YyqiRftmZSFJN9seLzZgoUat5Df2HNPgsj99EL",
  "key11": "2wtJ4P61gWZwhVPjd1TT8uk6Lnyp3dpadRMmcZ5Qm5CgCvvuSQejqrMXuVxZwPdgXGYLgSQHMFvp359iD1tbLaYa",
  "key12": "CSuDdJWgDyCsa9SBqz9bUUuKdtiAYCFVx5W3FhnSr4y29DYoApwXTtEpHyY4iP69YgDYi2gsYkXv57r4xq5HKTe",
  "key13": "5WQFZoWAGht91y9V3Fe9M3ntHVsWgULAhSt5JYVVrJGBw7FtLAGG54vTM9uHRkuXgaKMr6R41wxat85fFUWcqDma",
  "key14": "4bKdt6fNRPQpVjrNM9dFVS8eoBDmPbhQnffVPLxjALJAkeQsKjvynjQVia6gpDRreSnWot1wWFy14z9asuohfFJa",
  "key15": "h5CBmj1i4ViAZqS2TpFMJVQLHaVmqhs1KjH5xgkwoyGPY4eX6ezSSoaue7PozLoYBFG5FdzwaWj2fgg1rbqirCS",
  "key16": "3myTaruMMqrBk6JAD55RsTKVrNPx32PkuehYKFnihmnM7RETgPNeM3GtNsLaK7r5DvnrVEzE686tBgW5xUzwjnts",
  "key17": "64oKHaYL95373UZooVibSYXoYmxveLphoKY4NZERuA9vhvGVDTXbFNi7kwe7VY7RymfAp7fgMpqi9jsh5worV31N",
  "key18": "34zo8WmxR5q3cP2WAEpZFhyhMzLR6mibAJPjNvGqjzLdq2y9pgsVx8vePqXYkbmGPXogRtftfrTKR36wdh7ztjdb",
  "key19": "31ehvUHe9JUGUKhigMQxE1sUAoXeHX85oTQoM2ten4RG8E7u3HL3iLXH1wZC4RqG1JsprEALQKEiciBm1ecgCcKX",
  "key20": "43v6wbBbH5KWdASgdjYH6myDuShdD7oBr1c98Ao2tJQjnp8QRhWA5DhppceTqY4v6p5euVveU3eaJdajTk745dUP",
  "key21": "3d4Ys3iZcpLsCTqEusTLfPJJLwXGZoknpwbVGHRoYN83gSp6xXHXRcZSXgGaRDe5fEksxfETUgb8wLBoGbecyWhp",
  "key22": "4aM6DX5KMuZDzkATLrwstFLfDyt6oDLP7CVYFYRpr9BZU4C7c2zoP4CJs65vRWYepc3LUn3jAfH6wXBSTnyeJP4B",
  "key23": "3m3f6KMjWih52L2uFJhKaQudA6n5S5AyYVTwXze3aPJqLwxvRVRdFGR4F5GxjuC6aBcZDfrxeYwUVnYjnH2VAdQg",
  "key24": "2Su5ZiLNtQXi5V3jp3K34YGFXrFbWhPFtQWhQxb9gmUnnTXArYgrFmZdMm5XyD64urEf35BBjtubmHPdqERam8c2",
  "key25": "3HYePwDekjKbDHtYhAWRoGaEi2gRxwWeRmN3deVjhCfWX2J3RAvmbRN3ut2JCE6AcYAYvPGqJEVR1chbiPNcebEd",
  "key26": "hzrEb1Rc5t3p7XduVCZbU47bsypCEr3RHzje4GiuTuYhdWGyUgqAX4YrLLYiPEEKXfZ3swLeGPWJTPjzoMXzxEa"
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
