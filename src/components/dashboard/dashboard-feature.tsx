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
    "G1GcP7FSqrSLgxU5KLoDbrdo8zUJQ2AaxC3Np3evcXuTH2W5RG2gFx8U4MNDXvJErWU1zjEFE5fk8h6DCXYzuWQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2recvR4kkDTWrRknQNPtBX4YDZQJYD5JZ7WdFjtqfGdGoLmhKESsYUuyH3ayMFAhuFC82uYzG6APvGJBc6TfpfMH",
  "key1": "5gp2hXjSjc9BzbcPArPxxMYUSRBDz5rUTRkUJ8yUCHHSCuQbCuHVb1tWi4PofY6DiqXFM79hoVc1SZSGnJMefoG7",
  "key2": "54Phv4MDLqZiLVzkW1qbpXuwjdi86NuMW75a1zkMFq3Q8xCDpp4uNDKEMaJ8i9DPVLWVZPASw1zoUfSQmR1m9F2D",
  "key3": "35SfiZPuuAQL42Rx7mvRZghjqPqErHMyg1PdJQrW7VKBv9obxoqVs7oxGBFA2YA1eWsCdbnyKXqbCXbUxLSCEYgS",
  "key4": "67Bwm167bicregoHFtFwKYerqHxAtx7aFY41U2Lvrnkir2unMp86ErLCWPzzqaAtS5jqWanhsnyi6uh8Tb2LatBP",
  "key5": "2RAwAJFSVwxPHuBVVqXsYfYJG2giQznQ7x76vT5EorPdsosSLvVvStRAhF1puVJtS56Dz7a1oxeefxMDPGs754jG",
  "key6": "GLejYF4gfU7fsYg8gUZtrvrR8NDRz6axRzLdKEvkHThf3hu98DUHGvpNVjto85y12SVAoUqfQ6NjHDuT6c2kKDj",
  "key7": "oC5XaPCipBucmKR2pGmUZdLWDBgqbugcnEGQ5RC1jm4SuwVzTPwamqjqXu2YdLGfXGnhSVxj7xG556jsd2hNsMs",
  "key8": "3J2heUNGBJBYdBhBiyNcsk7h9cngZLwpuDZVcwQ8UcQ96GFLiABUsdhwQWrAcGcx8MEaJvdY9XLxj3PbEVXcDhCk",
  "key9": "3cyMzFjKH8SMzrAgQkwxSHPBf8ZMnLqLMTer5tDpLvFB3npVZxz8MahgB5Dq7wZRa4HQAwGLsMqtEpqEjyweTymv",
  "key10": "6NqH1NgDQpYPR5DHaWMvgMZ1wgaKVvAjP1mimqTYccMXnKM9DK2eVjHyob2fggdJvh9nX8MJsA7FMC7ZuXvMAdP",
  "key11": "4GjXtvuU9khd3kWBpeXjEhsYQwjFkpAYjieuPVkzepTpzdw4puUU7ERsFQgEsVmjUCFmjQD9QKUig1ZVU9zxKuj8",
  "key12": "276FBJZGKPzcvStGULSFA7yn6CEyiuuo1cJJV373uzhCy4iF2pMXv7812tmecEQdVdacha3MDPWXKy6hwa9miKXJ",
  "key13": "4d4BadSuZfvqCpbjvDQAz1qmvTTDfsWkryLLXTSmWNJ7AML4Chu9TzXgHnKd5md8wvLckXt7ByP8xSunctvuawsd",
  "key14": "5NkiqB9D2ZzziPnGFSxyENzG5vu41k2mmkJFThrANfxHUFWjZQ3jyYVwF1LEASLfsxQdJS47Lp1oFQMpsPXAtYCF",
  "key15": "24TvGHCfrLHuapKy79EepPxthLgabUAve8rHEup5mjMTzViAjFY3oATioYuTTXScvy1ix4iF5Jeq4UNxFUeGWza1",
  "key16": "2gXvGCcFGi6T2NzpkjLM1KrswtcurWgQSpJqZLTJoUFty3NueCTjE2rpEJppiSTdvQJzAYFj9ysZswAh2KMWLs4q",
  "key17": "3JqMvy6Vo7WuPCH7MryNtAW3kDKLqLaEQ6s6DWWzQmkdytKBkA6cjR9b4rGJu9Bm2gqFeotpEBJZuBqQV7B6DFHM",
  "key18": "5WNsCa5r1NAfDdhHVJzYsVJU9DYwtkUpphbHQ5mRrFANZPvrmGizVwehTEBZBwfpavJLEQ71soz8LRmHgbJAnkfZ",
  "key19": "fs4w5EnX8GzomoPvGmmZj22HmK6Mrhi7R2y3vde3YeyahfTum9QAynvEeNWHgaKfHviCGt3S6USTVY9ybV69Ji7",
  "key20": "4LPa2AhhdsvCbYzHGf5sKbM2as6AfYXpe91MQ2P76auKpnesLyrKWMYgRcDyrWGh3KAT6dehfqxcRYWpTzhrM7WB",
  "key21": "3sDVh1WQjrs9eC8oSS4vyBtizPp5TsMaXdV1vhfuXtk2JBuoju922UPk6LEMi2woCCueobj3s8umjwLSpFqiYjpf",
  "key22": "22e7jmKMqd83HsiJpjXim11iH8sHKZeZMxgkg2nG9PwKpMv9DFmSk41mhdvf47k9dgMv5DrTJY4monB18cgkLNsQ",
  "key23": "2aduLJPcq3aejpqgFhD2gWz7xNmputk9hf6QpfikN6sjS6QLJdHuPCPxsiWt81hf9ub16GUCsTAF2ygSrq2jMDHR",
  "key24": "5zLBF4jbq4ejZ8aecaFJHE3PvvLxp7HtBriXWmVYspahYinW4TMCrUFTMNKEatP9FumbQo16UrLWSnh1g6qasZhU",
  "key25": "2kALgUTufrwZqPseSxiknf2QaSx1TUEVDTUKkcEEDMMMECfaSYYHfeKThTWRiah5rnos6Xv65LxZyVg4AijoxjNS",
  "key26": "5jKP9E7eVsHWmRCbxBJ7rU36CRZQPbGysskzDvUdogD2Z7YC7Qo6wtfeRfcCivsp9UctB3NgKKJwdRuXtCr3CWve",
  "key27": "mk1PFYRoVy7dS4RHh2e4GisN23BELrmp8JxbmsdGLuvidJt8JDCRx8qPfSN7LoksefJZAZFLXUTSmobVJfLV3Ua",
  "key28": "5FDeqoHb8AxWh7srtLUGwKXQokMu5GtUQhaHUX9rgv1t2nCPL6zhbM5ubdUUnxkdTPyU4xNuUzp3Aokzi2xqDVtk",
  "key29": "3RGLqQtivFmH6z7XBL8227GrLjzEnPP74JdiA9nunLD5rzWGAtaFpMWxGJmPnNTK5wwGezzy4p5hsFcgEWoTXMy5",
  "key30": "4Z3GNpvbSkTPtULCZvQuW8Rz5neyNjLsUSf1NckQPfdKEjCx2HCpDdqjLVRNRvHUAqUWiQTDBeoeKp9s2jw7vcbw",
  "key31": "3CZxdCMqkN8bLJfiqByC8iRcTgGPS5KUvQr5h5Zd75U1WuAD198uwTsc3JuWp72FWnwSnJJn3ZiRcPamdn5KvJxB",
  "key32": "25hSyd1h3stD5T1Xo6VNqWcHS5vK7RD2K9wyuKppySrwUwbE1qtWJeASzhgXvLSJrAKr7im8ubKsjPuS8CUnpSvc",
  "key33": "3tKxxKmUFN3MgYniZxLNYwTGgL9QVEfRs3KVutT8drbyJEQQ3BrCSFV2BGhzB98hRu27CUDFTtBF9iteZVgUJWLH",
  "key34": "2d9SUgFpmTq1snrQtoy6kU6cB7MPDvEgmxEnYWPq1okNEPykuNYJS4u6ezK4LJ6z1Dgz4iZzpmjokCVJiixEMtAL",
  "key35": "4StbVYQRjZX7HDNuq4pVUa7k3b18pAKKuzCgbKegpoeYg4xo7WxokVxu8TssqzBVX7WnhbKs2zonWtkNkjDHaqwW",
  "key36": "4E8MZ7JwBN3dJ4DSuVsh52ezFVRyTuRQNUHd1JSQmwW2CKi1RpMKRwLmHHQaiyV3xrpuqUZeLWCBNvyRYNidBXzV",
  "key37": "4R2s1PnR8izhHBVkxd89NTtX6mDTDpXBmEJ7v33bntjqRKAiwgRdZTphN8TanCH9M5oEgkWe4qRYqeyF4jqP4xv7",
  "key38": "4Sa2yDjcBsrvMHqweiSZnXNKyeDbNKK4RWETS1WUht4SMqDVnE9e6sxoTNyUcvg3F1kDcnYTr11s6kjTv5tm9oEY",
  "key39": "3Lc369TKpDJTxo7sjNKxZfZoVLPBWjGvqD6jrzFyBBcUfiZArM2gJtQd4Kz9tZt3bYMkMprrTEYWRMCSv9aAvTCG"
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
