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
    "2HjFG6EdDErSKND47V5sPeioLybjPLKzgTnuKXKqEAa37vUVwGNTWYSnqXv4HfvcDXdUFLJMQbQfBfNM49BbneP5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y2VVSEDaq8sfVgrewrJzFHStMpRKa79w1NRhD5WHMWLx1GdNakG9TcvzGXYHJGYt4BYvL4g6WckY9AktzT4dUc4",
  "key1": "43k2HY1pvHkLKp9wRtb83bWAg3JaPCxuDRW31WQLSrULLh9yM5eeovD8rypXWGZCPCBuHVSAXCMGFSqa4g5xZNox",
  "key2": "4b79ZSPXd2nRtYgdA7SQS8wMcazeNrC5BYjeAVPHs2DF5GmnbsK9AVu4vAB6W6MsoBDoJGUeGXPjthkjpjF4pZA9",
  "key3": "WuAc669xKccAX9Y9NKiz2YxoJDFNXuWNXoWmPnu3ndnDnYAopS7UazJJ5SeAauy7dXHUp3SqgbfvaGHg7zTZiTG",
  "key4": "2P5WhffyzBkaHpDqnMRCw4Qtuu3M77KEqe25TcgEkMAS12vBiiNzjNK1QmaA5vCjZMCAnU5rEzngVtsQMkPhZg1q",
  "key5": "3m5tkeWXAh1cwTL1VeE7Wco74p197BtRVFEhDWnaYcNj8D4r9q2x48V6jCW3LAPoTK9RtfGP22f2SmJDd1nGtmVc",
  "key6": "38rxBuGAoKC7aHtDbJgqgStBm7uuY3dzN5wP75w6SHni8q1VBK9orN7cu9a8DeE7Y7wjJWMjDKxNWqqPTLsZVRBx",
  "key7": "2yvj6aoyyesxzGnHtjgqNy6fFQSeziHa4berQtiuwSTctgvRMsXqVkbJWwWpNeFHSuMYjMnmYBBEX62T5Jv6YSZt",
  "key8": "3bxwhDVS1vSo6UMSKioiyZfHbhGTpCB9A8F9cXJqHnNAsdxUU9JnTGaNg2Jej1Qb9pE8UQhSed5aRSYWXpAyiNxK",
  "key9": "4tFghESRrCDnTaRdEm2rUta7w3fBcJNfE3dtEUL8JtNVtkf6ThVCJKtiDgwAcRFpq7gsuq1m6Atn7rht2Lsnv3B9",
  "key10": "2T6txW5Hw5wVcJEtan1Z9v5mFQonhfPPU11E4vkT3EA5fXpuCfjhcaUxZh6yodFiHWMQ2qdPELnYZkuxu1jsJZqQ",
  "key11": "5tY8NPsJh6PTfRN3z3Er6TTjBmRwztPzpgzWpZ5BPZPwMfREAJQuMh2hbiEKedzw4VXJpE6DaHE9py4m5St5FLaJ",
  "key12": "3PWhzB6cP2vrRccfXK3c8NFrkqz5P8RVzzTH8E5fQPbKsHYicaTHa26k6KLwe6krEh8VBTHUPgDgcKXEue1T8fJe",
  "key13": "2ydNmtNM5WD8UxiRnXTjMyW5XeteyRYPBr8SUo4eoqSsrdMmLEtm4TCPHgcRnyKM8NU6VYTzPoFs7bQnLAvtpzux",
  "key14": "4cCdmAhik5zKMJdmb9WjBKwqhaZATJ3V4GrS9dyP1MZTpQszg3N8ZFwQPGafRfz1Fy8noydY7RrCqqgLvyQeh8wX",
  "key15": "DgqWTnUZM4fJny2js6XZPLdk67vG8uvNzXP4x4kAEvSrh8Ze9aou6sBW1RUA8tuNKcCzfmG5LakXNWuWnWkEK3G",
  "key16": "4F6LfRipkWDB7CZdr3MJ9sYhchXhpi9BYMhqWSM4gRcjfS9boz8TYjvWmaYdp1tdVoeiScRAVmcn2sDAJsxdKhmZ",
  "key17": "eaqSbWGRDNd86gndSH6VWkWGjNTFCpA6xFM9S3UGw7GBjPQLdEGGM7QUemxkN1praHpGfYYZ8zr2fruQNdTJUMt",
  "key18": "4NaCG8bYcgrbr2nQNecBA7YnBT5rRhH4Qu3w3uxbvr5Yd4NgHUYpk6vRkewT7WzzAQT1Mx2UUj96stku8RGW5YLg",
  "key19": "3ZCdviBebfeC25N8qa9uZHejk8GNXXwJ1bddx8M3GvZ71hVsD8YUVqHJ32Zctud5UFtdXbFqmdpko6NRseQBZmTf",
  "key20": "XeWkzNdPG6GeQeHBhMSHHUHrHJ8wKUhiyGdNTjhLkFmkHZmHA26pmjernEXNLhVEyfYdAfk9vSiK4xaev3xebZk",
  "key21": "5RTDAJHWM1j9a46rG4LFMxtts2vJnYtLQsudzBGG1aJdoMjaVJN6uadromAdz1QZcDbcEgeePwhFgqXm89MQtjev",
  "key22": "2q3xKz1KAX2QCvLSVcb2KdeaYrecsSfMAbmu4jxytaDTBYtxM2qyHk4RFAT74BbhAAhZQVzMG3mFV6LRbGiyoHK5",
  "key23": "3DsvJdh5YYTfkxdfNZsdbgP3a8inw4Rq9NwAsWxydxqGiyDsJSYX6QtDyXPZh83gNuvgJAkRK3z7mTtxyqZVWoTh",
  "key24": "2hYWLrCczpj2TfWFLUcZ8KKbU6YMfPPQYENshNxKeViAfmwsZpAiHrn9QkdXj94VARvsd56Haxg94jriA8DiSVsc",
  "key25": "3SuwXdgTG2orfhMm6NtkkdqeGmDVeghtD8fxnVGmFruaS8RZqeXTnyiQgvWJ98wc8bXeJqe59qj9nJ3nzKToXMs9",
  "key26": "66RySFvnQQkjKap2acbhyaPoCoZKsGbb2eJFLemh74mNALDUz4Szci1751K6SQYM1W9cA1jcGn7JBruqyfzvWWbq",
  "key27": "5vjEDKewW8aMK2G4JiQWyHZMzVEXEEyF38aQgkSu7cHMjbdnhZbwDXSRM1SkeqBgCSBM4s7uqRYj7LBcfhujhfPE",
  "key28": "4ShLDDgeyDsRKikpiMtUaFwLbmKvVzndx3fKobkYh9v9QsrQCKeaMW3kzEeq5aDDA89gW9VutozRkmJxzn8PCi9t",
  "key29": "5d5H86FTGHdWKwKPaBNxhE1fwVvpyGrUHPWhLenwnrEan3Di2ztUCkwdLaBa7VYsnycUrNbV2ZvpjVaLn51LupRR",
  "key30": "26i7d1A3MzYPnWAxWPr9dHWs1hgj6sWawZP6YRD4NveDJKQvdThE2yWofheN5Eq5DhWLMjtC46LAw8m6nwZbZXpx",
  "key31": "4vsahGUhd6Fx9rNCryvHykf4BuEqSL7asHp6A4A75dmpi3fBnZdGAbuSoLPSXCge3nWEsWCPoB3HYrWwDmaaEgxT",
  "key32": "3aJTiFGRHfLxBsKZPg3Aeb1ghE6d7w6mMF6rwkQPLwMFEsvGXpdgmtEf3Tc1kZiK2tVY89HgQ3uheaps1kTL9tTX",
  "key33": "36YK6CoKDuMdbiXds2wCDyLW2HapTesbGf9gAxtBUGpZzQoukjZq49v5Kiw8FBi5A1D96VpTyxQaopW4AuA5t5jK",
  "key34": "jpUxy8RRm6DuqUTdD6bwHmcEMPDkVKb9rJWkKNZeX9JsWNFxGuxUnnExKfpCYmdnh5QeFEAdTPHia27yC9CJ7uT",
  "key35": "24BtMrkR1ApX2bExzNNsmDQLY2akTgh5Kf1ZQK3kw4vFWgoqHih7kB7k4784mwf4ohbgCFVEG7gR6iD7gRWPhpSo",
  "key36": "4f4bzjDZUiJFiBxYPk6tsVCeJkRMjfyAerPkLipejhqjPSgq2WXaSo88rqGTgnYSsXajF84GFx7paBq4VWZGTgFx",
  "key37": "5vK5xmCvCHYJqbRZA4d7PrCVjBBicfjgGttLFZ5JZ9vDRwC5mfGiZ71ztwAcrWqMTkmreS83M6aZWW3ApXfZh15n"
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
