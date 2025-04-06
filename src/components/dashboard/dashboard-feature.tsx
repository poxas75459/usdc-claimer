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
    "Mu4c4YSMkd7B8aRXuvYwv77ow5S6cYVRptpWwN1Lu8YvbMPJgUfzyn9XcqcpbWyiQ9fj3ykwM9hAja7D9EArcv7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wtB3b5rDnkBwroQHC7462EePev4bnnGimN4brJpKHk4BQDx3BZZNknxyJhzNMyDEBQJR6TCznvPo6sSHSPW6qiW",
  "key1": "3K9t9Me7SPJy1RJhtvwg5W3R61Msc6JVbEBZpFMBKyGhixhE1dDoUMNQUviDcpnXMSJWpsqmwJSXduA4ohYpHaQe",
  "key2": "4T4YHFhVP8Wk3WiYEdLnzmzGSdzPJtVQXjzhN4RWoLQaSuDcb3UPDLSBBs1iT5JiQfsb6i6dXiskt4Hv3Qy2vfNk",
  "key3": "3sq5ipfdnzv8uQsMnzpAqz3w3JJPzjKGeLA6JSRUhARrtiSBurQBdcRFBhcSyzdr9FUvN5CWgQyLbUyfc8hWu7wZ",
  "key4": "24WTdYpVpykrebsQgfBRPyGXbfm41pn9Whkjn7NLQhJhC9C3NRX679qo5guUBmUbQkzNzMbGccts9DRiHNrgBjup",
  "key5": "Y1sTefC2TaA4zvNHif9pJeZAAHSxFm1wETirQ5XdEo4QSfMsbiLkJWfD8MFA8BUfgheZPg2Ddx6Zm7jn14xXm11",
  "key6": "S8k8eCy12XbqcexgLC65R3XjgBxhZbxP5zetg2uuBKkdqgZAA4BiaGsqH33KcYFhTZsz5vqCL9JZh1a7CEcquCf",
  "key7": "J4obT2ddAnPuLJtEWYUPHW4vr5rbPSwSDUmEBnfnb5PiW3XBTH1LvYRHebHK3pbsSzEbyWAo7Z2GeWjfFUaE7Bc",
  "key8": "33eLp1A4o5yDR7oPZo4dvJ39SMbEFVwgqDgdso3PGbKFmEP9VZHT5tPjrgmeRcQZvVxWYq9nJzZhWrDRTSQkq1LZ",
  "key9": "3oDCEfWNsdJgMt74xL9W6PEHrdWkmop36x2zQiZ4eMfy1cTeqQRvhABhd9o8KmRxc8cD2qxVWavUguQfWTJWVEgS",
  "key10": "oEHSfbbSj6pgM5Zxx9tECrRuVPDsJeDLg5TWb7rR6rPF46kUFTYVjYZzuiA7gWxEtxRAkJc9TjnB3LrsATTqCfH",
  "key11": "27ixYcxW9cV6aGJMLDqeYfBZTKx429GqEBMhDnJbMXRhs8HLGXx1iZJuXuVNf29XWcJhBDKBHmzyxfcYak5C73Fd",
  "key12": "DenQa159XeJimFPD2AKxureZEpLyX6E7SyfZVt21fpEatJ7FK8b32eiW4tQN1JQjjd4yff4LhZ91KHtyrjPXQAG",
  "key13": "3WF5YBT5dWGKTj8WfwP5zJcy8uNcfauxzEuXQA2CFALAYDy4AUBvqeYd2WFcM6fBUV82ne1GD7P9nmf25dTsywCu",
  "key14": "5W9zNwWR5rLNWgVkjvt6pF4mWEJuozGHYJoJouNsMsqGRYb6B4hz8JGgGddGWMqus1SBoQLBZQC4x7eKaZUowPJY",
  "key15": "2TJvm6harRDrK7SFYBi3CPda6H9NhU2Qdq5HwroBqYC3Nnh5bmaGh4GR2txMtcLVpdahKFCKEwrPVuAmYvvGWAkj",
  "key16": "2r2F1z4uQRJZrXtPWi4CnvMRivv5C5DmP2J3ZVzQ5oocWFbAVN4CQz4jSByRKpE8b5U2waWjy2UwYHsYQ6AViDDU",
  "key17": "3kJGCdsshigBNKD1BbaDsYaRM2aUFGqdbCJYqHj4TtaLqV8jeaKMSzFiTqsUHcZgGXc7UE7UNaiacintycsvDKdD",
  "key18": "4bdBfnVjjVcBoMADmqTbj434pkfkEx7ECf8bZxSRLJZ3WAvFo6ZEQwg4eWQcMytG8cgD6Ugnn9nRLEEoG3RjhmyH",
  "key19": "5YthU3usiMuNHcTURiseTPLAMrKmbvGMZbEvJS7EUdqGbg5G8K4QEisaWv2SsepugSZYu9CtnynPLaBKdL1Q2TT4",
  "key20": "3VnEPw7styFWkBubRehH74NUAEpsxHdYFRxPEeGnJ5PPmuuwo2RSWGgdhNDhJHvBb8jUpm6R3suRQeuTfe5AqH5H",
  "key21": "4sLnP98Nuc2aZDogTNum3q9MVGZwFhc8dKxHrSow1f8ZQYkQ7UtyHfLD1bZe54WgaTHzxDiuyZhnpRXWeFEnaq2B",
  "key22": "3dqxAKPMe8pvMwxd61F4j1i3Ht1qqqdACA5wG1KJ7YFHwWw84NfbP1jmF3rAuV3MBc9xo7nKgbB4d1NLWcZYPkUg",
  "key23": "59FhCR1hp8QqegYaaj2jaxrdsK2nmMByXrdbtwusQR4W2y6iFSzjD7WbUYiiWV3XVBKs8FVHKPXCPt3EBzUZCfE9",
  "key24": "4sPKcqtEU76QQbU3srEZd7u9wsQVa6ALA9vStzQNtfrfpk51jMNK8VwC1AgeaWZRLyiu9RNFRyFXVro4SmmoeQuK",
  "key25": "58fWLUrGQXTGV32exF8ngoWrE9ae9zGwhK2pr6JJBzfR9YJgKe1NC2mUoBngqSxYovVFEs2k1tDYipTHMWqMZbJr",
  "key26": "55v1ndvWvVyQ8mNXntkodowo1bpisf9bLUmH1vxMoYBB4ADrL24RwvK65WQSz5hvQoMhM5nztbzvST3Fqde7FXpg",
  "key27": "44k5ciYzAxmzcYPg9moUpBpXXgb9U3QEucCEscLEpLGNXdtLCAVoKegGXGZVY1eLq6FfkwvWaoaufcy7QkLuUMhG",
  "key28": "4VBvEXDt1rSDDce3XUA5sgmDhJHpUzv9r5MCDgXfK6QeqmP8NdDJiujDYbaNceCruZfgnSziua2wHPvTAHGGnmgg",
  "key29": "4aYFj1xZDSJSy79EeVSSEdwXDfbaWDMxvknoEGsJz6CkdoFZKpRaQfFH5ZnHeAEtzwye9NETocFa8yKiTsGLE3MP",
  "key30": "qCgKxoFZezew13x3P288R2RJQpNeYDbTdv6xJePQcKiAWR53M6TfZje9rJKeCn6EeVW7pdHUdxrT4XXWe6NDsVb",
  "key31": "62Y7naUJMZjXn9HMfxwGB7rQMYPbsKSKcZDFaSrCgZfVJdNp3j6B4Vev6c3kyoixDH45ua2hiq2E7cff6MS3UdUh"
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
