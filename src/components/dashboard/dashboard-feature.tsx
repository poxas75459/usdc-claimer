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
    "2kytBX3ErV1P96zKWFwrZaa3pKHwghbNVabwan8m3RaNWDaF5BaAJYvVgPNL3zET9AnQioZxomnkhytT7oroXh5e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rnx4k7E2u9WcLvdWmG7a2H43TS8RRb2o3b7ZgnYUAqQmb2NUozdnoBy4u2rb3r73pBWX7gBHAfHBCUfACPXepMQ",
  "key1": "63TqqfL52MbDgrhbRJSgiy7Fi286R322sNwcjrUksaQ3pQvUePsxFSMm6jfaZpmAeJyNZoHZtEcSnsu2hK9CdQvq",
  "key2": "624WKHoUEsTkRpWUL34AZPZkN2k2ddhF8eRvdoAyidze6J3SnWzs4iQ8qodtBRrCAKiu17u5mBNSiGEXyTq9qufW",
  "key3": "5EADpn8Y3UDCw1oc8631DauSh8LLBikm7XC2ghm1fXvLF4PAtKzJjHVYGpu4mhKLonEAonyySGJAaFJ5W4ja1n3y",
  "key4": "66TWSo8YCPYTMhMsyNJ5rDTusURha6s8XyVTDGZFRS3PNKfJ4qZdszWHWv47VFKvuukTTAYoXBkayUeVDgAwJQiX",
  "key5": "21KgocrWYYtgS4dGk1cyTVpGSY1crFNCbRpip4ugLgTdhPEwfxrFZSsC2cBKDyZGZYw2amkhdTpCupXbBpNXCau4",
  "key6": "4QiimpnqtPuZXx1NKVjzMUZKs8tYJuQojuFZM15DwDSBCttzL41EviQUYvNKBQVc7kxQ5nt9q6oRhNUYa3xFLAnf",
  "key7": "41r2Fi258GU6H1bajMXE9NbmUYRPAPvWQ3jkfaUXoNKntv1C92Stgd6gybw1hvTeW4ZpqCxHySn9VGZH691AhVKL",
  "key8": "4MPiiepeoMxQWW3ShtMMSQFnacLjHnXxF5akCrTSCKfgLpH21mTnyWXmHerQPS83T1iwENvHpugqPfqpLoPEZkEZ",
  "key9": "4nvEYJoZ74GNjuTJCjYZWJXi5DdgK2g26D5amA6YbZm3n7iZJ2HjpnZe6WMcnoyakpNbNqaxhaNtLnVXRzEfazq2",
  "key10": "43cLaEAS1U1a6q8awYrEMeaqUhh5MTMXxXxwayfCqEBjmJQei1NWgS7B3iBFkmiRM1wnyzwDHhvdVzqaUZSEiwb4",
  "key11": "4pn2S3W9RJ7kxHPnYGZtoVwcUrJN3SapW8sZG9ahaQVXSSdNqwWSEpF7qDPDYLFkDCqfFeMNSbu1587XkymUNEna",
  "key12": "29zPuMPmgJuAASr2zPgAM8U6GVnTL8VUZnk7dxGSer9zsE677aStSZ6LkGdLoSSbAz8YefUrGHXS8cVVvzfRwqnU",
  "key13": "f8gAjgWjAkGVwbzR1HYoW5Lx2Aq4P7JzS5Gj7sSMat7U3TT33tLAWa5SrUzjX1vNQZGLzdmgrVHSeF9E4jfiBUL",
  "key14": "3FyguhJNLrcRBqvUuSMxv9mZ4iGSuyf8CBugfgrDJXa7sfQsTNXnKt2cepNDCknrUdS6vebdCodbQhvd7eR8ieeX",
  "key15": "2fsUjxoUyzvdHBN6cGvvjuAWUcYg8YteD22ypF9npKzw8C221jYg3w4ZZVtdcrfQmgY4Uu1MoHTJTv6mLK8Ef1NC",
  "key16": "5Ys64eCSkfa9n1KgucJSSTJpCEVHpddD2BmWc5fD2MoBtP6y1fpSfaCo2tJnYuffvRzd4zHekCCMCkBN2Fi4SK7Y",
  "key17": "47MZmCtpdmH7oAYxBJGKkvefP5GKhRCgZrDKv6e7vEeLMZ2stL45TTEsratXkLN5DqqvgS3nZkXgeKDy9HsNCv5R",
  "key18": "36FyFGmwCXFuqS7QGhyz97Rcj6g5ERrxCQBsg8x2gWd3aYzvcha8Q1qPzAL9Ye23yP7wJPTx2ZXn6n5sPte5hwBC",
  "key19": "3a4gd6Tgjct6f9ZnfJGu8wSEBiUrzoYtzKhvzJhXRtkdDQkgcjdLY4FqmEAcMQXdjr3tAaRjcsRDzg1RTgJjyzXG",
  "key20": "ET6c65kZvPReHct4XKVxmjzyGNxpeKwENSiyKcv4utrBnSuaAw73VofkNZXZBi6fsqH8o7m6FDUdwBnvBRoEDtP",
  "key21": "5b2yGTQ44PoQ9keH4tUqgLw6FesDTckwbnbv4JBxGejjWUW9aXzqGxq2BoL2xeLJztWWjFrcHtQq1jE6j5yEKfwQ",
  "key22": "3oqbRdQbW1VX6tT11Cny5LLC5cj3qcXPRkJA2m55ZGk8PJDTF2hA8sfWxWFt3hTJuYq7MjDVQAQZTGEzPshF5ynq",
  "key23": "59b2NXHRDHBYTHSMgKd95RrY6a6YV3ApeHgTcd5EdaHfJPeZuQc1RJjj3qZFwtWC6ppCdridoyUF8QJjRX7CnUFk",
  "key24": "3egXE1osoMaCzukPnMtW5JvmdXVVznMCcDY39UJeEdfByvA6DoNfoJaZsYm5PkfZVgiNFSLFJ452JS6n19NsVgS8",
  "key25": "5CPh6EB9Jmx4L6GzyqDpqKRXVJzVHBJm9zV6ozKjNWCeSbPwu69cbRUyEj5SVQgWkzocs7W3ubc62WMm1Cdh4X3M",
  "key26": "2hDUFKukyJ2ZdHFW8ZB1TCQdtp3MXkVUncvQBSBHkFGyXHpd3ZeRnZymBE4EJ6ePeX9a9Xx6Kxvwp2SaUPGpaGVd",
  "key27": "36UTx3mBzsbcHB6MAJJSu1ZGzhk6z1FSVXo2vrGeLNbbPXSffDVCHzjPKFFH7qQ1ornPaGU8e6r6pi5tX14BSZke",
  "key28": "3md5QKyfE7oV3KcG94DDFPHYB2Z1UsPxrKX1i9YMMa3qyaBG1Pkqxa8Po6VyrxHk7DnuXj1A35E6DFHXeFajkYL1"
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
