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
    "rni9mYHpyzTrUafvFGxF3MYFWCJFUYotEvidLX4KvNjwqMmvSsHoLimoBQqK7eh2W3hfN5Qb5v6kRQNi5aDJcxA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9PT8rj1KdHPca14ekmUvAt8ufDg5uxD5gPuyF27ocuqubURxKHarkHbihvwYUGzhCjesaW5WfvHRhfMcuM627xY",
  "key1": "4gmB9spP7QSD1vwdCBejuufA8Xid3eZYckv4jTotZckGoBb6toqA2Hmn2QPYDEAWapEoqnaXMjfmD58yKU9UjF4Y",
  "key2": "4ZCUVXPuZCy4eewJdgVotgqk9LZCZKpa3zwn2Zbbg7H9vFECkPuS8C3MPbWzDNQkXhFKRZRic6NZ853zXa8t5nzV",
  "key3": "Er5LHHGtpf6FsqgACCDcRGjwTpLxZFhhHkwLig49VVwPtpcNd9jdXK9dTg7NZHaq1nGJoisrNns7mAiArqZLfFY",
  "key4": "4VU4bn1XYpyYVXTSTXamqZrF928BB1eFribP7ZGmZgxvgZhF5hjMX5WQoDaUPR4EDrQ6h9z8wefJcMnWF3cDSN9a",
  "key5": "2Xb5QfbsDV8NZFZWBq8iEtLc6FMAENQu8UNPqKd7ahk3jPF6hT3LpHSad5GhUtZgTFnKptk6efpkwEEN91jcvZ6G",
  "key6": "4pwAfrUadyLEUjMnRjY3bn5Th4WJrSV6mXfYdY6HLiNT7og7bx4QF5jR7BxuEmmwHdNxteQYmcAS8B2kRh56C4wY",
  "key7": "3aVJ8sw4agAeVZLHtLd1VHHWaWTH2s1RJ2Q4KdyFgicAyhSR1NG5HWkMvhbGY3yJdqFVQT579C5vnPF8az2f3xPf",
  "key8": "xpYrTFniCmvm7qyg6NArsp2kPra2ccZSQAXS6S5eTjFuqZzv6gSZCMVUQ6QHAWNbB5s5N5wqxizsnXgX8fdAxYr",
  "key9": "2sBqvgtUbacywJgBnCAcFKNKn9iXAedRWmNQcxNy36QLU1XhRP7voDmXV63TbW73w1kv5Sb9riNZTZYxw9APZqs1",
  "key10": "5SLHp1xV3HdR5tcGFdKcjZHAvQp7dhUttGLaSUzVDj9PZTLQ4TatN6ATnzp755ZgoPumpVjDCSUB5jFMV8oRkqwi",
  "key11": "3gLARuFL4oAyQhG3Tib2FUbu7T3X6GjaMEgR4mnu1iAWEJSspYh8HNFRurNLkkgzZLRtRbV7jgPqZp5VmRHtCNcz",
  "key12": "3KkeRCbwUta1Zg5VvDLRpGxuVt1LQ8Nonpsy4uEVrpnmuiLPTwURJ6G7TTZ2DMnM2rUiaByageuVCzjF1KExowtb",
  "key13": "nPNkknsrzQwPZh2cxHcWJmHaLN82Qa9oF8dQLVHQUkEt6YwTVzC6XAKxhNjLsidKBRqW6AUDjQFWVTH4dfoXRMZ",
  "key14": "krXGE8LCASfRJ1Bhq4Lh4YbYwaBrLa3DESyeM7Bxjet5JYN7spscHwDiNsjoTjhTJuaEDMtRtteFYg3GxBUqTjt",
  "key15": "kjtc2wUhuibM3ondtfhoijHM9yRLE3RE6xJqbWwCJazNM6bKPBwj6zmpi67GQE7hFvVskHZYrvmDdsrd2PQcUa3",
  "key16": "35pCdThroDVPmuEauUUhxUbzAszg8uTnp5jhj8iy4Vw4phSJBg3fLy1E6eMf4a1TvNxQvYpMVMuZKNwTFKv8B3jQ",
  "key17": "3s75qKNPK7t1n7jb4ic8ADDz2JPZra55rPVwQ3sR7cSBHZALog6aKyKAVZyauBSALGZgsLrgVb8jnCCDkjjG41F",
  "key18": "33BJ2XjHDY9RuV4QJUJKNRbTBGWnJvifiwCAzdMBYu9f1YZ2Q6DjLWtjBVhFEZdbB6GgzAwqZ9BAsTUGRSL2H5qL",
  "key19": "41sUFwNtPgWVjzqriwRiAK8a5L7bgfNbBBQJkr8Ya4ihy7tVhdSZrjmHJp5UbgUrX2jxwSkMbVBKVdTytTN9Gez4",
  "key20": "j3xdWRpmjDe9ueXvFuTKjyK1BNbsZduZQWbiLDUwNdmJDGrcMoMZBgPuTsVbRWCkXqUXtwewYDmdE7NVkr6nqtk",
  "key21": "35a9A8eYj1v7kUCUwSyvefhXNGjEgxE6iWEaUrDDutFvwKSFut2RrSju9Caa3aJCwL4BfCPF7X6kmdWReYsYMVc2",
  "key22": "39WSDBByH4XVTs87hHbqZP39dPexAiPA9zrRqStoEmeczHwJsq1NyWXUzNPPu7JVaC7xsokEwYpqTxD1QGQxxEFD",
  "key23": "37x8FLvGuzyLU4AQmGcCE9QVNuaZeBwfvtQXCtz5KsiU2qjF5iKmRHDL4YnTNasz4kfKeEuzguqxfMYyiS7Tm58N",
  "key24": "59Q3TuT67g8HToZN9VnaSANJBLk7q3HMKqcmaEarYF5HqrqedNrcxs5zzHm5zZNnK3sxuuSDdcWtbebkexmeh4Ue",
  "key25": "2DnSeBBAbLsS3axtsmr5yS4ustqx8BDXsPz7o5eSsX1NbQjnxsrUMcGeHHXgr7ka14eSwcqSy25kxQacdAek9CZd",
  "key26": "2fooDA2z8VVT8EG6KbXtFsSrek1hs5LNe3XodSg35pJQNoF86S72F4s1gCo9nNkGhyy86bDc9gcGxCAcNdKwu5vS",
  "key27": "2KeN6MbcNk9L919zwGdEadbeAvkE296VkYQiQaQpN21Saicxftu4q8H8QsXJUN2dmYVGmvaqnNmgA9gNMuiSpQbe",
  "key28": "5ectW1kir6pidQsDbWENETynhwEWZ6Hu4sFgrxwr5SgthLXpg5mnDcdS2LQwrwwFAFYBWBCWoBJW9ydViRimvpua",
  "key29": "4TxX5pZF9Z3QLaHRWjB1bpqEF974egqUvqpbeWKfhXciaqgn9J7CVoLdsvR1JYLLn3vVcUon5vBUJFzbxVuyaSdp",
  "key30": "5uw7ipCCdAXys2SdJSZ4M7uVg6pcWDWjatdaUyvufUZWCjf9i9NC6k25ziT58YQTdGB7TnwSajD12kRTiEGiob22",
  "key31": "2PnCZP78B69SeF8PrBLA6XgzzWpfRqbJTji4kBKgLHJQfxjmVrBdwsd99HRqBa68VyZkYtkQ4f63h3v2jvuz2yWr",
  "key32": "5sKDBZBXy2JKnTj19H8o9GmQaQv1CZPxMxHVtmy6myRbKCLYFcBQiBQ8NEuWVSBEE6AAh8BXXuUwDSy3rz9AMY4V",
  "key33": "x9fDd5ehrofR2jyUB7Q9NRWT2PSuRkwzoBHsPAuNbqp97RjEwmdD6RgHaZX99WATHdLqFLCiNuH3dJHPkEuye81"
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
