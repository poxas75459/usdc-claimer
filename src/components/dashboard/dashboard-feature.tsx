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
    "2A7fkyxHvAUzQsNFe9NeWEgA5REXiwqHcBKxnPRxUzqRp9Q8MAArqzSBVwF3Eiku3raPqApfHx4qKa3EBBrBangc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46F5bd91TpZ9mdTo8EEUDciXmZMJbpXV8wuEUhFHkeGsfCXLzHuESDBF75zzwP99F3HTau9UN6VxyZmbVNNrUAay",
  "key1": "5jvqMA9aDWLYjemdRSqpp4ukhrD9Dr3wqdaJ1bPJUiEqzK6r6BBsRqLqV2pin5TdszSmhDRLjuVyPpFBVWr1abqq",
  "key2": "3V7edPoNn6Gb5uL8GeboUmggyjJCpRHJKzH8kj73aJQZ9KycFqUfjMLpxuEeSS8QN5uATTdNghsL3dZE2SXhxbwU",
  "key3": "4rFF1G8ZqwT5Qb9vfpSVmK4VGWnMo1nGeHVNEfXoGoU4TtQso8PCcdeYDcAJH4cYMu1TaRJRxMSBfpL3CkhbzjDT",
  "key4": "2LLjMBF74QKWuHir9QC2WR6qPJvDBANeXEKpUrqD1jqvQTbBco3icKtS2oQUvfmPusnxTBkDF32R3CH9Ts4syiSU",
  "key5": "4eTYXMQoW9xT8HMHEmJPnBYaYEjPr92kP7xCmp4dBMa5pTfAHcSYkRi5MwTDqyECsYVTT15cppGBzHuAiDmd7ZTR",
  "key6": "4XBHsxnR3JByajeHUtgCC5fqp65ujZHgZ4TJNMCQgpNoxa8vo4CmVkUUs76QN9NnLtEA9jJ7aMCTRau2iHcTPcgF",
  "key7": "ZxE11yDWXU7A8T3BFAXgLVfufBesxLNbqFz47Xo5HpnA6avLy7yW2yBG97eTy1srxWzCN3FDDiheV95112K7tC9",
  "key8": "58HYLk7UhT9Qz88qzRvqjxTrT7DzJ3GB2iKo8F4eHGXmNkSSeYN2fT7rjSsQZWYWyBX78KXzPjTaHb7Mryjm2NBr",
  "key9": "GYumQRPVv88399gPd2SGbKGMDGMNHTk5ttLqE5Q6kcdrhYiwmJTT1EQPpss9FCpQDsWRKhETpF3uhSpKathBjD4",
  "key10": "468hiNbvr6WE6pY7zSxwb5dSUvoZiur9B5EdV26ZYY9mKtLe8yvmwfJ9CJYC3QyFE5JSxtXu7KgkkiyA4jvBpry6",
  "key11": "2Fzpk6b3UTm2udki5A7DjvK2FGRPuwnWvzcRQrpqpFcB8k37L4p52mAHpT7kDGhkNf1H6dz7wpzRHEXoCKkAw5dp",
  "key12": "5PbUZioTxK98nih5Ec47HNAcL8zuJdnRS5bVb5fPriF7Xn6vsefEDymhweMFEXNthkbScZPMToGQ5J8X65USZzxP",
  "key13": "2KMyZo6ZJMoZUPqockUSmopXzm6Ci2G1hR27iuX95xcce2sVe3ZEMypYaRryMejGC2UwCMQ8vyNiK3dEbJQLvAnw",
  "key14": "2eo3mEm7o7eGCpM7cPVN5jbvLKMEF2cDCLxsFSbk22zSafca3KSEhqk8J2PPEUc5QLMM8UWryXMQSw8rFTvEo1XH",
  "key15": "3d3oUq5GMuHYcsJNDQhAwhLkQU7rCzPZHVhMR2skv16ww6pYB4dpmcQG8EHjptfQFF3Vx2a8M6QZASZxUwsx24iS",
  "key16": "65NMqyJDeqxGa91fLeLCzF14ikVwncug8KQprSiBA9t1wKg9f3FSZuP7UeJgVpyt4mYCRWgduDJoPRgsYJqYjKKY",
  "key17": "5CQxsHChwp6hjSMJdDAM5FqXSMVvSL4vJhWV6eZJs5vRRaccNoZDLCXtwQvh3h5dzk4QmBkc3p1sKDm5Gsh9KPDs",
  "key18": "JjyAzQyFeANk3Z7Hd9tWYwD1xHZNzAM6Dm9EzMCg4FuX8eq712csUv3ZhQWVzqstneCMP1Whn4MDJf6X4Y8fpbG",
  "key19": "5BU5D5bMB1uQscs7uraKzGqZaeWuuCCjtT76MzGSepBthqxpkRScvaTyFWmRX65GcLkgZu8c4w5GzbQD43Zbsy52",
  "key20": "4qruVTPUFJrnM4gGNGAWdRvZRQZeetGa3QYGiRnnTBBPd5Gs1KovVMGD2RcwsK1N2RVn7MiQ4RcokDztQiMB7Xbi",
  "key21": "4oaVG4xfdLWLrtaumczqkN1kZRMWYw9yhy7qUvw5ne5jeryjtyke9VpHs7ZqVGrhC2uv8gqhzHgH5UgCD3VMqjFE",
  "key22": "3o856GvHJ6TjKeGPGVT4VKNkZgQydVPELHbAACwtAEK3orkC4eTFrZMT1WfhFyHreB4Zr9xL44Vdrjx8cTPwHZNY",
  "key23": "5Mth7N7Tdab5hiGDJBRZeGVxRKqHktY6tmV8ZNqn9zpM1v2YCFg1aq45k4zGsZ82xwmn4AeZe6apb7bwKBMcpndQ",
  "key24": "42eAaku8rqgbcS6Jc5c7UtU9ruJh7cycavVJ9jUfhZHMP7A1EMfsLPUuoqQmqPkYm8hwYSNp9EuQWvGK7DDX5vsT",
  "key25": "2imTTopPpNj8kg6hR9PZvufupjNyJEaMQeyGbTdqSrYWanfEgcewXx7eUYwSV8RLWQ1aCbZYPXJkhM9A2w72FhjS",
  "key26": "ukBnanvYaK8NKijB7SRRJTfbhQBc2VQBExtA3n8p2MXQSUKbDPQMAzLnEVP5m7ptRsY8tKGJkFoscu1WYLW7Moa",
  "key27": "3ZMD7bgxQwpbLtU8raGd6FLrsWBNXdQXtapjrPUdqVUyDH7Pnhyyz8Ztcewwgv8nskj3kdKwWQzKwtj4s226QgCw",
  "key28": "4ESWTbZK8XC4eCcvBs7Rvxy33L8ze83eDFMFejAy2UXZ64oGkUVNrfSbeoSzVM5nacteY1mpT774hS6gpZyykqSp",
  "key29": "3ywBi5rrcDT6qjaK22VQ2b1qsWC5w5uZnawxxv8Hr6T6xSw54kH9yPEtUkaEYWZ6Abc1Se37pcECoreVqVqGuSzu",
  "key30": "46nMGwFWp9tccXpaffWo8de7gRPUoGRvDTyTxJ5h8PpsHviJPt4vaqWPKGA4PetopZhzr5gzf6Lsjbfdzna5BJY9",
  "key31": "3NSAqEPuJ7xCzbn7wcHAJtfLdbiopTtngxbC8XHuknc59cm1j4EEJt5RwXksoN3uTtdvDEzSQJpT71dd2831jwpx",
  "key32": "3KUArJ6RANXafCqjt9dgHB7nEeBJUz2f6B9iWKjhxq8XvFwXVL8TuGCuN6F6E7poKZHH4Akdgzj1DCev3FTvpvCA",
  "key33": "Pkhbuf54LHuUYMQcjLoaNWi618iVx6SjpJzJp2fx23n4eyCv6hWuFGUWAhFZZLSWUyd5QwytjdSthP2v6qbFvTR",
  "key34": "RMQpgQ5bVN8aeg2D8uRZW7SQBjXK2VvM55wRJ3oLrE1Px4c2VWxvXEx9Eh4PfcfyjrvZeRuQgkr2C2BZnxNp7bS",
  "key35": "FgjrxgDu2FvkjdY1odfMST9JTXUF4RELwgPQuRWuK1exDMWQy7bG6a1Js3sEhP7ebnA2fcZwpSUtGD1m1fakEGh",
  "key36": "5WScGHYknCQSai97pAZgyvGzZ5SmUGGzEbfgqW9jMPKeV6PSg8aBrucKbKLyViZf9d2g5ZbVMrTsE6A5dXjUUcrP",
  "key37": "5Xar9sxDubUmeGj5qP8NhcW2kwXCYcJAtAVNF3B4pwoH7RnJQ6wHK9b1uU3jc9XBWU6e4b4ZQGzaf7SRTaA74ah6",
  "key38": "4rMdickgrsn3q2Nu8p1oXFx6pq7GMVU6qgRwjiDvHte2LuWoaF3sXW7K1HLnNr58uf5oBCnTH9FWucYLMPdnDTRn",
  "key39": "2dMhfx7sxZJzWmgrZYZHWD1xUUxsntitZkcLZR6fZ9wCBqYE4RQs8jqnhf1k7QeF1j1UAks1189r8ADEs5bNrM9y",
  "key40": "3NYE1T14F7hXBnZRNWcyTNwocqvUPubfU426oTm1kPkw45PQBAXUbxH4UuZv4bNnDFiJKdjV1Ri9GYk5ERKqXcFC"
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
