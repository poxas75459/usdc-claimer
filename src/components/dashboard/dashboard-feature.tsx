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
    "4mwwdb2XehkGHm7eWkXLToXrqZUGjAiPW6YhPYGzVz4N53S17x8QjcMUtXBuJNcUUjd4meanXEkUJXcQevv7ZnSV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Be7BgprFAz8kTBw82zXy8PQsmovdNH7aP4tf2isBbW8teUs8Wn7QC4Dti374rZo29dmJpmnNrPsVhJSoFVWLowN",
  "key1": "zLx68S1cbUL9u7xU1h2fcZa9FegM5niWCT5RR9R2tg5JtyL6XbMH2kr9ZLDUmuyUzGKwFetzpBAQpX1Tqb6EXAe",
  "key2": "2x4Buh6ryws27duUqsAXvY5nUQpzsGu1g2ADQUjaL1QVBco6ki5Az19RuNSsE1vB49UyAMAQ13A22RSNgUT3W8nu",
  "key3": "66pqjYZUYDuS1DRcHQCRayAQtdSu2kvSvuJb1kVcmrwrTM1Er7X6E7uqAonsFjxLXFoNRFTHtyZdKVe6PiDete5M",
  "key4": "htv6dFZorfsSB89pu3nH3ppt2g7uqCSLnatRFHfccfghNer1hdpCpefvcFmPdA9HNUUPLzsK9FdA5wg6kwBBVJP",
  "key5": "5S5weNQHP8UqynRSuqHRjKTQkbUSU7aRseByEmbQQ96XmnyRm7Y5xNVgrGJBSu1bPp9dtsBWtipyGdBQZbSqRuUA",
  "key6": "346vHVd9JV2h5RsdWnLMNXwWbGobBn26CZEY7DCaNMy3TUUj1CjVo7QUGj6VmPJaz8vsGUuMMkzSkER5uYA5q8HM",
  "key7": "53uuA2DXqhjK62pzQ8i3y2pz3SjP6ynK5ma8gWavXet2uKVgxoWgPzr99bZLDPySWeYh9CA8tY47ZzHVkwP3nGQA",
  "key8": "4STryNd4Kobb1Aq9reXRADQJNWNQz2RJtG9KRjEw8KunKvcpfuMyW1khafKbZ6MxZ8aR16E1o9Nim5NF5x8vTMmL",
  "key9": "3xSdDCnpa6efjTRYnbek4NHGuaonyrNyrGTUBy7GFdzdpZoYdEuDR9TbGPpLiwymbjhezmzme9ZDUhvi1GAVJioJ",
  "key10": "6uwnTSP1NxpFqpz4e4VJBsVwqgyCPr5heefm3JbbvPe1QYqGCS3uRtzQ39nxKdzkeP8HGqhco8GBA4wwbHyYHWk",
  "key11": "3adeVjcBGJqQ3H4zUxYHCYtGoWDJyRJnUGsqpfWiwg2Y5uqXD5gav3czHqo6LqaiEiNXeKVCbBnzDGKkfRMBsu4i",
  "key12": "4Y1bMsz85M41J2HjZZqGPgNgaKzaPCb91ESZQmp3tf8f3d94V33ToFRs6p8reVD5ruc82N9qrfov5y75o7PntEYY",
  "key13": "25qjb5E2sxPuLWQgEeSW4BdyQKXmcX1q2XVX258nwtjCoe7KjTGawjiqs5L6qCAyNFLmVsWuc4qio5QVw2NyitiU",
  "key14": "4dhWjJdBo7f2Z6i9vtrMdUcPSR6cKErJw1bfHPRT1Th46iutScej2jX4Bd49shK2oEoRSNFqGJ1QhCtf48rcSsyA",
  "key15": "3wnVrVrHwj8xWKhKv9NtWRMu12drazDLuEsZBVG6jEqVmDugRAEhtMQAQCEVVX51dMGhyyAHzZcYGt6QsuuKHwYR",
  "key16": "CzPi42qvhXqx8GSXD88ey9ALhACPvPfZr5QPkev8WN42h534c3k6YAy6dYJqYX4AJsgE2evG6vZgEx6wSyG7t4x",
  "key17": "gUzue6TNKu554BfAG5rY2eJB5Ru7dm2PmwXjnDuoCh4dXkZjJrBYinSKdyKHwWKEJWEcavYtM13ZviNnKZXcD1E",
  "key18": "26JBFKDh6Lduxb5AF4RagNYEdz3iYg96ygRbWNhGjrxgwYfTSc2GVJKqfq5Sk4G3deRKMiZC1agp73RwSQeHvAv7",
  "key19": "28JcNXDrcpGPLXeYvwL5hG44eK1qEr3kHLLwosHPUuWXwowC5s1U9wH5xyC4JMv5zgnqPReonraiVtLXcDNXfwH7",
  "key20": "E9x2XtDykG99hwhamCPTfuDvDVk7WXqDq5sHWTa8U7TDmPwTzaQcV8CdccVakR4fBRmmkAwX5UpGgt4V8bo4qkR",
  "key21": "n6joy8XzhaKYnWjB2br12Qy5bVXHeZfcwYNxMjDhebf6FEw53McFJvh9PAonLxKQs7FNsA5mgAz2EZWSsJYvcj5",
  "key22": "2NPjMnit6LxWXStwyshFodwdM6WSfPd89VrDXHVDVKx33coD293M2R3HNgBxVdLNybgxz73DcJcMewT5BKpPeMaE",
  "key23": "3YaTN7pm98jUN2iCyoj19xyJKmSoCyMEkehPQgEyvqL2FArExY4wounJoiuLMVNMjMBHScWuETsNN4VZrDYftViy",
  "key24": "3etzRskiPJGECJ953gje9JYVHMm4L35ndiL1RSossUqaJfH33qSnFZf8VQjcWo3qsobi7GebZR6hKmWBXraMnHRi",
  "key25": "4yBKBRFUuKDLtPy4YbjY6A64tj9BV8oCexyCuVZfUcnLKAZ9jhahZXud3z1jgJvAAQFmEYVtPHr49QpDYBfknyrP",
  "key26": "5WCizfBuRYT1DcbqwapEcz3yeBysQw7E79HFeh5JJEq2DhWUQdPg4NJiBY8YbWY7VUFWHzehHtVp2gLceFTXpnx9",
  "key27": "BgNJUvmwRUWX1C1XaGXN1kr1iXZqNqiwcwjoKSzzdXVvRgtTHy8v2Q7J218tR1DMi4VJdkXgUgNtjdBX8oDzrgi",
  "key28": "4iWYJQb7BF1aa3yQPbycuGSiTyaY6nTLqTW7Yo8Jd2S1t1kCYTR2nmZAyAKvMXsK4kPmfnBLGNa4WX5z9aqVAPA5",
  "key29": "3FaFkXCvov8U54dB1Hz8VSyaTTNG416aJfijnKUYyDz4fefRQjoy65vDL65S9nLxq1fCGVEvLugcD9RcRHMEYN3T",
  "key30": "2Z6owNVEHNUHbfxH9iJSGrCHoAZNzRBvFeHoMVcE8ECKtniHcV1Y6LizwdjwTn5gyC6bkeU5Lqtrw8dreJD8pDBj",
  "key31": "3to2WFLDV6t1B81ySbZ5r6WeHkUmRv1eS9bCX9ub7dAPBJqKQELjy6TcAn24MCZh82TCMpWL3i92z6kPASsLsGdt",
  "key32": "3JVs1gb4dTqjVtQJBoHGncNcw8b8goyoMqcgxL8SqN8svTiZJ29Ap9Dj7DndJcVGYgkURrNJv4c4h958PyFDazDp",
  "key33": "59qpJcazyAiC8TTKuwnEmt1MDHQEJ2rnWyhwYnSRuwq4X9krnJaccarrhew2fBbMF3WrHDhRA9vSLgD5ebWRzZak",
  "key34": "GnKHf3uNNaLFkgYpfuWFyGgjru82LvKEGxbFNsvsyQfMUDe821TiUd7DdD2A838bFBLGjCcBd4GRsofMVyf1kjQ",
  "key35": "3PNtZFByk5SXH1DrAi3idtPnjb8mYLsmRnduz9p1d9UTPMSLgSs19c2ZnwEgZbJhZbuBVon4BadZbxcYRhb6pcwM",
  "key36": "5S5S9R1JsZ9evHtuJgxhSXjxZRKme51beV2WusPmCZyx8uE9XeAZf3tPfKYxSDmNCd5F63X8iGeY6wnxvBGpz7gm",
  "key37": "cfWpG62ErGNrJErw7m9wLkzE8avuCbZpKhXSY6vZXpfzrSyLX8ZUuEpTfjiLzAtcg7iGY9UxXht2tV8msttkVSj",
  "key38": "2wf2AvNezN5qoPiyBUs3Q6dEw8MmyW2WJUp6hYcYuSqZNXb5usXJ244ry4asTTvULRq7ncqojXshnKafEkMTkiUA",
  "key39": "4QVQWo78PBq1FFw338M7Z4j76kphongXnGuCVaCid4Y38aWYGk2MsJzGG3tBJa3W7BUTeHZVwC4114HMRS18UDXJ"
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
