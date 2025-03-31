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
    "5q8V6eG2BC3bDTLyRPJQBikGeoSqJKAk7RgaXXE5iEvJ58QCTDrA516KRdZrQwYZmT5Yz2jz8ZH68ya4Gc75UweF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JEre7ooha86uf4SqMcASnKpV3Vs6EqEA8Homr1LCZ3pjNeF2HAdYDQom66YX97DZK6tUQ2Uind5v344e2RmAkZp",
  "key1": "3p7Fe16Ea36iDg5NxdLn2jKqtPF2Uv3wCYkjrQc3EQybZ52bf1kWqqjqpNz6akGkJ7puzpt6hPyN3LvSyJHZeysL",
  "key2": "3vjGXWi1SkpdSkEWfEWfe7kPwqg6xprsDZGXQaoPfUTjxA2kKLk5MXUgoPHr4PTeyco8C9Tvf6NGinmEt8E3A9Lx",
  "key3": "3r7Sg1ShMEw1FYJ8X6TtQrJ3Ya9fEGpkXq6W9arxSbRGqi3KsgWJGSn69uGR9ad1DAphrPrekpb9NwRP5Y68iNb5",
  "key4": "2jvvuPzXVuTkX7JXHB8jKF3cf1APanmd1qxLr6khXGKmtb5bctgvmSSCeJzhkps9VoFTzRNyxx2gHvvHi3mSGcP3",
  "key5": "9e39ipFnbNUKxHb7HA2RHgq7xHbGNndK8kR9iUF6TXyidjsC4dQyhVZrmEdsTomC3acNXSU2kVqe3JYQc3Zv67e",
  "key6": "4UMUNT3Mhzm4KjR6WNGjwd7fYG1NTCQoNEkyrFMjjvavDPTfZZSkZ6umH2xMRDKecVcLXRYJapE95JvASoUYvxuT",
  "key7": "3Qobp9v35mm9APsjDxZrey4fYCpx5wNe5bCi6qqNiSyBbz5qyAoBKgMjue5aQ9Xy6mkTh7FF9h8DUqmWK3ypS8A2",
  "key8": "BRVqs81iZBzzuiKYaPbKxV2Hd1ygE6gzXY93GRW2n5BXhxSg3vMAiG9FtP5LUVe5oQNtBB46CR7n4sLzoNW4svp",
  "key9": "5sCpTJPsRNjbhzHTaFo8odVz8Aq1Z79RFCdKX6xZvyVnxcYJHRtWKQpR9WKoxFUBpnYTY6cf33eUHiuXYLr9KneE",
  "key10": "626ZjSsqqiSPEN8FXZziQewewRWe4K6TJnQQWYRE9NMmY9jRXSv4tyU67PG3JXZsd8gqhZunpbHF4yy9HPkiqQ9e",
  "key11": "3jnF9qFycYeqWA7zcMpjh6KPXHcDhWiS95cAm59wu23nT8sNKCXC9cDniif4Jg44WQ28nD5N1RW3zHH13if8wQyf",
  "key12": "3LZqVGqwKiwFPJ1jLZ58vmDnBfywLSqi2GWCFvf3Fq2oz3cKxNsveaaMzS4AagxSbXCt5YPhotG39Y8JgyzSK3GA",
  "key13": "cY6FBHzohx14KRgw2KDub2N89CwKFFFiLWV5S9QACHKbpa3q9MkhhFv7gTSt9yjtjaUYo6CMxCfBHYd2SwQU9q7",
  "key14": "3tzT8LkNJCTtkRFvaS8UNVnAYnmGFX26U5RkY9A3s6JruGQ9NafsCnEhyTrFutm6GFWgnnNMQivvjFMoV7BiKitq",
  "key15": "3boS1cRkwwrgAm1J1oME8nZELfvzdmca19bdiGf2nKa7anxwfwV1yCsM9NnXh4Xt4arChh8TJxKkiCq77EqDyA9T",
  "key16": "22RmK3proZCFJxcTuwpBGeYAuiCXoCCzT4FmMVYbukJLxC3v1HEgTcV5KVL833DWoc3zBRh6xy8GQ237wVfyNMJD",
  "key17": "2jSRLYsKXaxD9gZuYXeWnXt39Ft3BygPMWt2eSXY7EiML1hcpte426hFbBRVdPrufxnGmJjAdxk6sn854RdyHho",
  "key18": "4YRvhiinnGKjZRTack6Bxv74WN5nYPNHJXff6evzhxxEyBUCJMKqEyxaxg7UeJZDaHgP2jRkXeGZZHvHJUASrJC1",
  "key19": "4qWRvJE9k1TFpMjzukRxzLQpHWMRYVa7LhFbsV7yfTFuRSctrJ2W1cvtmSB4stRvPWDXBP6pLwRuLdaEyHWjawHA",
  "key20": "HtwfamzANoLdkYnBifn4MT6hypZZWtNUDqTPzGxWwCdiAmV5r6EAaN2BygVKC2zUpQf95bTXKisRuz5gc3PVLGz",
  "key21": "MSPZmtDj3r7GYBTz9r5imtezkDYxhXJLPEakVJPGq26Q7nTumE39hxz53qDPQUoSMdqJC16bBjpcrHAphjWuZL5",
  "key22": "35XZPEYojTUdnuJJcqn4XhAQxyxo6yW284axBvsZcx5WFPotaSAbD5ichQfBWZu7K1WHs1uB3x9aBcgSXELoEKWm",
  "key23": "Jr6iYqoire88gaH4eMiB1vnjL6fkQG6fmmTipD3WLW29qWDhgA4fQNgW7V11T6T27SsEQiH54bpYBGCXK3LtAk5",
  "key24": "5kN3boxNugLFR6n36yJyTetSxLZLcnuKWTPUBHhXpructm6ARyExiqRvq8CeLytGVJfD9Hvbpd2tW3wM5srkjeZn",
  "key25": "67VgnoWXygFTuhv2bLjATiCvLX3Gz2jFN2PKWEjzZdXAeajtb145DnyvoKMx5wYjgohJdcw9ptjTJNkS2o69A8y7",
  "key26": "5CyxSCgB5amyqphyg68NLKEpLekABZ9wCadvC1SNSqCDU7ngQAC3PoiVw1GdVwwHr5Zq1wKCKscCvMgGZJSbre8C",
  "key27": "5RM6jgDgLbFHCqmFQYMaD7paRX4YzcPFNZnBHyEGQfoYvL9MxmxUf5bhFyExBrkKs8Za7qHoezBhHXcvV264uRa8",
  "key28": "5z9stzopXBL5sng7X1Fh7p95DzZhhPtffeXWjyAgAqRSugwSRREwqYBmrrUZAGArWKFkq47eDPrpMJDCGbpgpZsL",
  "key29": "5tytkykhppSt8MMra8t5cC6GM4xTqdNk4BCo1S13wC2LrkcycQen667tXN7DNvUk2LciDFqweDwmZtcJbEB4Rny1",
  "key30": "648aauhNjtGr5WMMV6NEfHfgCKnZgs7WHvAC3qhmFbGZa3Yqu2kBMxk4qAgGkQgHretGG7ckhMsrk9E2pnegRSJY",
  "key31": "crYiTDX3AUFyWrauNVpe8URnB9LSsUUSiFE98hYLHSFPx1fzuKgjtK7pVYFrbVQBb6MvKjAGmdtFszVxHxdb9Vk"
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
