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
    "4K2FX6hbqsprFHgnxc39GVcGShqZypY6i9QNLZT1C9LPPTfzm1ah8zvPQvcGrsnZ7dj9xiS9cLQm36TtByFDUSBc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZoCQ3PyRPxjGtBJ1AnEyHBEmo3CSEmxpNtnAb8D5euTV6mgniGL9LikaPnutXdXVbMfXxyBhD2VLsTTpH8c1CbB",
  "key1": "4tQtZvHiJMDpmxVsSL4KBi8MWbxzXFvkRV5c78BvokAC7No7yGQdC1vpM6nwwmJ2uzQDZje3Ckxibz8Ds6N51pjn",
  "key2": "4WCkL9SjAgRGA1cb9FsDAtB3t72hnLfhQf2A8LkozuGrw6MS4WNS9K82mU2hYUesdNn5XTi4sfVefsQJFqZFrg3M",
  "key3": "ZtQ3F65XNrcRr4cDu6h6UUqFXey8nWXVTF5ViYxRyW1yq3o2VHGPXaBetC7S5uum8UM4KRh6gsUgNLsuLjSY556",
  "key4": "2yiKfzin4TUyPprCe1xwDfwJru5ngsznphohaMVRM8UL4JsbAw8JkamL12Xg8MUwUuemBiPdDyKuLQiuDNkyGdEg",
  "key5": "38JWtDRzh5rCpJiYdzgg8Jp5pVeeBwEXE8kodnqS5WN3VeHUmhmm73hYG7Rd7GzCNRux6nqk723i7LpHjRqBsmTP",
  "key6": "4ipRgmiRHArDZBvV1syAH2xCh5jsESkjPs4fsQE3DusqPxqd4sSD19iqq218LYrTBVDcC71rKdFaMHadwTB1Ai29",
  "key7": "2y54cHnMgJusnkMGCzHWGdwXsEPs3A8cficNnWAEV1Wyxv5qaE6fzYkC3Qt4wQAKRoMWXjcbmmdc5QL3o7boEugS",
  "key8": "217Nubf6eJ7WGGL2RbSFLfNK7djkjFM8kddMoD8eWtLnEDWY6q3tF69SxLi7XUBucPFJoa66XDVyokAZcKrVk8oZ",
  "key9": "5p9sVVaHnjxWDgBV1af8X6FDt33UA9YioG8xW6Ei1A5WJageobmQbtXKL9KHZdjXAxeUYGD5Sivy3FfvpGQwoNrH",
  "key10": "63SA4ySqMEurqDzoW2HTCZK57hnMmVWtKGtv2AhMtsckGJgnM3pTp7YkTuqHrEuMvLotAq7AsmLQE9m6hmV41Smc",
  "key11": "4wtCf79Aux8eo5R6yR1UChHCTs8u3xcGefZrbeGrxFxi1YLytjH8KSFvbSEmS5Ci3CancxijkKGUsjRGwVieXqW2",
  "key12": "63D1g6G1yXr9Gf1uQYbWZQ41aon3ZEiuGSwz65FYhPfzPpJYyXQwu4AAyifXSpTfcaXeQf1deRzZ2q3Xax5NLzWq",
  "key13": "2JBYomGtPC7GrcHdMFbcDXmmAujmAqZYjpHCqBG842d49262K7hejnLLkrGp66spQRVvc3XA7s2mirB43zVdHtA2",
  "key14": "4XYGUGNRxjdWJaTYwB9GwQd6bU4h6QhaQKRGyQR2S8yKQEmgpTn8NuzGMd8ybKbcmWHGUrCetGWcpQXdvRWpHuBd",
  "key15": "59MQTsakv422TFSf46CqnoJXFCgB8o2WrhBqp6EG7irdP4fuPz1Tbz7bbkN2UuQNPQueE7odi3fcs5zaMCvpZWyT",
  "key16": "2MjqFFJ5VfnaySjETRJU2M5HofDs9y27bpxc2znkAMeNyiwXnARaf4aAeACXxPKL7AN7kJGpSoFeZ5ykvPo8dCKV",
  "key17": "4LnpoWGvSY6JJUkWKYawB9Y6a9kvtXeFntaGjhukNx6N6cS1TQE5bu5TSmQPxLhLCjoPhwqV7Y8o4aCp7B6pckW6",
  "key18": "3cm5HSXyWeme9nfX6UAg1S8QJKT3wPiwnQ9G4cX6SCnuzVFVgNkyv2GE9uv37Zy2ecNrA9JapjGGsm1VkxuCZeJF",
  "key19": "7oTR7FMUQrc3xWRNV4z8sNJYLDQkM6uBd27WCmcXSeuA3UX3mGeKpFcCwHve2nxp659aTaTEKuamg2oX3FHLodJ",
  "key20": "3QTkzq2WyhWPakcRVsiEc72nSy2RUhA3KqrYU8Gvs4eK2rbwwv5gbujnxpKcZo7rhyxZgWiLz5zzRWY5UV8LbpNG",
  "key21": "2VGn7PFiohhmVu23A3hsLYZzuPZneVqs8ff7k1tkJQsTDzZJA6qmj3cZRDzX6296RS8iQVCE9FwySw37sanvCgBv",
  "key22": "2LLGQ3usALrG7MuRRAzY8caycDoHrHQnE5jFZPJrrcwau4YZ6uVDSg9oaJSWgPiRsRM651ojrDEGx8TT8rW8rkda",
  "key23": "4yJSomVEgWpfQfKGUC9yMzV7Rx2e8pYwMt771aywf8BXccR76b1dRSpkFkbRW4WxaaHwKhUG6H2KMh5UDMu6bT6C",
  "key24": "5DuDZAmgBH28T7rS5ekq1w1cGk7Yy2dEMJp2mSxx6K1TgFDTqpvaL4rmNNmy9VgMWhkJoci2tsPk9k4zjncrMU94",
  "key25": "2TokV2osVEAiHivPrk48Woj4HY5dPfafuDisuDyM1JfnxZuadiaRGX9tDs4i3BxncokWBZ1bP7fhQwu5dPyinvrb",
  "key26": "56U66eiLvBEm9Rj3ra2WKRMv62ohSEzeYdjDnvvuT9MJc2F69qVrKnM7hc5HegwLxntJbXeYFM57q4esQ7BwusU4",
  "key27": "379BLVbNaPC119sNDaUYg88AfBCye4CG4TvTW2kKnHPfhViRNi3v3dJ14nFn2XkMVvhdqxbzNSsfr3n3zSub6f7A",
  "key28": "5qDjmvicWySVDt3gZUdCUWDz6C1Ae4kCYRA7goEMtA8XoHicQZWvTHiRTf6zXFTRv9YSV1tRcG3MPNyQgAJG9e4J",
  "key29": "eDWH73jeAtR4KCAzDAXxX2onu4P1DzVW23YT1pMQFaLhXkmd3jjPEXrxwfZTiYLNUTeZsKF35swEAtyvApsj9fe",
  "key30": "49fdZ9zZ8xpjmLbNBvYinkiWzeiJQuHbhXHwhZqXXPB1Cs4GnSFQDDKxq4foNikj77KGNRMbA972kqYh1gg6E65z",
  "key31": "49AjY8qCu3fVXmLk4a4EqndzZswjQZJxFz97f51CqKE8ztdgf2jeCRugDUaHFiSa8QqLbJtyY3zDE6Kf2Xdtfsji",
  "key32": "5GskDBQfgHAD9EjK7T3rXvGmhCtgvQhVGWzxf8hs3HzEw6dkRV8XbfanTHaCzAn48zV8P7YXVNVSErj5wZXmheLt",
  "key33": "2B1M8RzhXMqsLWuMNsu2zsx5i9K8uHxRNwkSzQEprQoEtiuRaUGXf2e46msN6nT1Uv5E46NqEwvyrwKe8qxTraAY",
  "key34": "62vYmTtXHQMEb6hxALmScrD99bJJ4xjDpZiXsnVog3uULPrqK17fjBmYYq9VAXbea4HQJw3KjjjkaFUjHW32o6Jv",
  "key35": "39kDCeEMuaEFGwVLQpwY8oYUZgzhSz8cMfEvBspUf9nrjYcX1Cg6toVegHU7jr4FcGhM1bQDn1kVR3GXCMeYErqX",
  "key36": "3nd3CudDWAiVLevsMzsFtdWx82KYbnVMHwt8kXpo4X5tyzxpAjMGrbgxnAHm5xN6ntU8e2Yz5JEM8YUaZzaTDvqd"
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
