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
    "2yQTu1Sacn4u1rGd54huC6fWMNt3H9LTUfgQ1h2YpTwuuB5jSQ6qcQXsnvYFdFEqtwvwF13gpmTYxXiDaBTCxmaZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S3FCb8xZ4JX9XsfjdqNfmxciKgQbLZ9BitTkdFS88FL5CdS2k2PCLP5Y9TGDZoGCvJkNxZwjzM5oAWRk9JUcqfE",
  "key1": "25fQasUFnGXQhfFY4WcCj9gKssrbVNRCPATgf4HVVfbsUfuu9zAH7N7GLgUqUjTpjz3VGuHcnzpxMVELsdthaaaM",
  "key2": "2bqZd1cy3VMzdqk3KuYhvP4fz4wTpJwVAhfx9vJYCCNttqbQkjBKanVt1NYFkszfX8JPN9nwKcrMGR4fVoRCRXbZ",
  "key3": "3wBEiKnobnvzGW2uitvt2vr4vndFxdkSzy2M3SvxTMoqcG4sBaf7vnShQomEkPb9smAbQsqD9ceHwUY8pJF6Ncew",
  "key4": "AbGsSzM2sqDm9QhCM7kmkmuMzxUttJmdg9cccpQnN9QUyQaemr64VH7WYwJUmm3DcJF7SAwLp4jrpcP7Kjc1Bb7",
  "key5": "2qQj8TPvjE516vTUDiC2g6N2iqiCidr8Y8CXzggWQyEhUxseTn8rbx2EZEeG7atFHZgReRHSxCBbiatzxKYz925S",
  "key6": "513TN7hqLPqQvnZyz2epB9ad8bFp5zY47rr1ijP35gr6s45RCtMLHddQaEDba9dPgWvb1HHQKKex2QpBsxGaiRqK",
  "key7": "5jWZ6s1xw6XM295DBYcJBLzxSpNbmgU6msVki6XHyNr6cgVkQsaugi1gSCdyeV1nUsArzCm7SfPyoS98Ujzi2D82",
  "key8": "3L6bRaM1KjpdTjrPreGu8GjRcYryKffbR1nR2furJXR4j3y5CWivXznKfEX3TetqXiAqBpCoQPTGc4RXq1FRBJez",
  "key9": "3w7ogZz8AUHd3X4R2suUzxs5JZ1N4Be9x271dMvvfUvMw4krCvckdesWR1sGkaKYoqNuVD4SHatzn9muG87V3pzN",
  "key10": "38YLcNWxHwpcGZhYNhNfv46PmTqm2LtyTuX8xALpfbT1bJzR2PGLxbaq5VjbgdKwkoKzYz6nheNPRuRdq6EbasLs",
  "key11": "2JAkD4wu9Gq917a6K74WZiFcPbpHshxzbpreHxnZ3GHHuRH9DNSgXaYBbsDwXETkuFGGsH2GSeMZt49ud8Mr6Jaa",
  "key12": "3yAFxtpnBFo7zneuYiB2QjAgG8pYJUa8kJhzXGjbevGCSvQy572haCSc6zi7WvXphNpeji5igJ27HMgCR7g4rCpB",
  "key13": "59fh77V31Sb4sTQ8s82Hd4vKwRpcwLqEQPpu7GKY9g6QY6cBWhKVJmYQ5QFmJYJCDiBCx6fPM7MDWkueAqZkU2jG",
  "key14": "3q8gr2WphRF7cDcvrhaqUmUPQRTNUvmRpJm6z2AYDbNZ1PLjGt8FHQKyMF1HS3nTDSLNQAimQ4dDK99u6rGxKjBe",
  "key15": "2U297vVkfQmWnXmArTGjUpFtoy9U7pzoJofyhGdqeKq4adhgqqVeyEA9CDmCC26KR8VjvYv7dVv5NUC8oXMKpayf",
  "key16": "5Ky4NUx54w3iWiMZtTEB9yb3fQRXHmVJedEieJGjA3itUkeuPewzjCCKMZT3ShyP6cvo5FNpFMQ8pYVVnczJdUeZ",
  "key17": "4wkXQFrcWzhJaXihojJXHbjQRvMzh27kx8iNNMmrgGbrGh2pEBtsG3JYZJbSht1bKn2SiFVZogqnWkqDiUoMx1VG",
  "key18": "3d6sc67SoQSwhAzBvmkqKim6yfpCThQ18hn4gnFSBghtsmZjUeQZYK23KfexRenffnRvXJVY146mBoMjvjHNBHeP",
  "key19": "4feDboF8zXqU8VbTs4TwNCbKR5tTcTVZwpJ2JwD15ckvw9WjLssh4gqfYBEXe4DVNBmGJgrqBUkXtjvpMHDD1h7e",
  "key20": "4K6yMbG4zfNz7UKhgZ8yxznAPFYHN83hJ4NXWAFGgRRVVwrN7b3gq195w9VRmnzRgwk7xra5MK4qCE8p2Yh3LpGL",
  "key21": "2vuUwiRPgpnDqJBRiFzLeEU8xqvkWabbKGpL8vFHy8erBmyyBi5BtVZpgJUoEm8cvDTnobp1uQstLWEnEYjVywnY",
  "key22": "foDEiKvFKPjkGzA5sspeMeUbU1nx9ZLT9dFF5DsXk5HiecMcZWb4XBCPbdn7XKfbLcqr1FqnYSJ3Q7V9Q2p2k6h",
  "key23": "3zjdajJc3jXbYQsqZyjfFNuGdrnMqELN1VAcPqHu6jxa5pxGMxgh5Ww4drcukmzu4cUCM2SvC9VFR5UaDn6KFrgq",
  "key24": "58VBJ2xVidZRoTaHX7MqkhMzXpM1aHxJQQ6U8RBoxbxbyHvL3iCziBYNm2htL2dfpsFPtsXvZ3Ub6S3i8aGLPdbA",
  "key25": "3YZBw3aoz6QyLfmgUzSgBWPfKcxnMerAU9u59xxQa6ctzUpqaEFS6EnhEoEorcgMeK61RrKSgfhe6sZDDM2nYFeP",
  "key26": "48QKf6pvoayvuZC9K79CxSQipuWVNoJ2fwEToFC7wF2Ago2WshiBKqWtVQSQTnHKzozexxv7tRUTsELppZZzVTVH",
  "key27": "2CqFjNnXfgEFhpL3axEkg5W2LnaGiqE6GcLYbhQsZRuYXDxFijsvKUG6sezanT6J3QFca8ESezuq5Sq6FAj3HGQQ",
  "key28": "4xae6rntAWGCV41AKqirH5uqFmdToTFfv71WVW1dkCiRG4wKF16Rp1mxNM14SuUb12ctezDZKp43HGgvTCqBHCma",
  "key29": "t7c36mo5eCegHu5y9R11xnLJEVXqTNoV9TxvrkYreVo9DwLqXELS6RpfPsuJgmnToEfPpifCXmUasVaJ7Zh3adh",
  "key30": "wcLAZbuK3FCGAR31tbNFvheiqW89w7va6gcUDqhWJLDXseRo8R9tGcwYkWAfd5sqQLYro1eu3HJuw8U9nDogeXm",
  "key31": "3B9TCjjXU3kjNqatZNuCZr4Rz39cnd3fiGahidtB8ycQNgDxmAKfeJ8YYm9dFVsdfmTTdYn4AWhZDHSkxcnr7zw6",
  "key32": "3QS9fkBqsEWNKXxdmCPwNoawewDJ7Uwz1zdA2HAoHGWaRp4Hpe7DfzxraSgyaS9cr7dcJAG6ShRfzpgWC6msM9fW",
  "key33": "2EGYuS5X3Mbsseh66jFxaZzaL598KYjnt7aaPtRPuhHEfBszAQdF8suhHP9BFBmkkmytRxBEdjFRQAhqKLTC7imR",
  "key34": "4mLTrF8ZDrW89Vs5DRxF7PPWF328MN2J9kQubs9es1NuFkMnjg6qq9JYwtKLbpUP3YnYVa9ywjfhf55eAvsPEBap",
  "key35": "3uxYiE7DhP8FoBBX8RVjPGrziQ94yEwrqxLtQQC74bJD8vCzjx2nSj8sZZhLWCkw3RBBZD6GnonKKYpy4A7b3ZWj",
  "key36": "5Hk7AauFACmZLmwwTPvf6iq53cqizpnywVYhY32UKjhUC6SHqyv1AmtjHbGHKX6BMxKpSMTj4PBNz27WzEJCYaP6"
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
