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
    "29ovnpPhwZPNKWMTZ1k8uQFQht6YXUhT8toAF7zhJ8Un8i5ZTUvtesBbRQjmYtDd2Yx5Uyx9tu8tixPdo49XC2UV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q1ahRtYF2JKB2y7nDZX98GUwXoFSy8r77Z6iT4qfUSYFk6P9rH2TLTC7Gi3NVXehyAfwuZvgZ5rwJvosd56ycxk",
  "key1": "5XK4g8eMaCLnzwFpVaUAazujZbrSJoHuFpnDWZzrdKHeidRYzb868qhWsgTEfK5oTmaEYRaPPSMkjbKFUaRPw67T",
  "key2": "5KAGgggzgY5yxB4kYAy87edFRTaJWuEbAvTZckBFhLhv3yK6FvWecqkchtUB9iRgLGdzfKkma7FLXcrQpLpYfcfk",
  "key3": "3ysQJFwAiFojN7Vd1dfLHt2ocoJGGLGhhemZ8j9AWSyJ7VCk2pWMKYreuXFNkAGkbNsNWYWz5hjFcG6bHFC8GeV1",
  "key4": "5EF5si269YpAxH4CKdTHLLyFZqm3LkMk4vmBbRuKaw4PJcMQPcgyLxXkYBydzYQGSW9Qi8Q5kzHppxkoHD94a4LR",
  "key5": "45zFYQsUf8ZyWueWy5HiMPGvch5tGHHoo96tL1p5stDyZF72AB1GtfdJx6BP9Nt4aufSDCn33b8fVgG2inFph9F5",
  "key6": "538Hq6AeVr4uUAXMUKj5wLNAXoYKvNtssZjPmL9ymonwHL4LT6ANJgXcseDDqZTHV6Y9ZsuPSyo8mM8DR6QbQJPg",
  "key7": "666t4m6HPVW3DsGbwSWnjxmhfTeCUsTjj6YjV7bokstmekXKfKL4Q7f2BaQZDQMqkDBTXeLemDFRWDMN4QyL1vcG",
  "key8": "4aF5UPK86iaTyrVg1o6uf6Rbfgbj4DbKF24fUqQBmiqeDsaVfx32c668mSeFSWHtqsQwNqkP3Q7Mgvcybv1fMo3o",
  "key9": "4paPtu3pf2iMr6Bz4ZNbYZRaSPa699xNJosr9YgMZiwmsD6R9YnnKMEJrLCCXDnnMW7RGEW7G6FmwPD1oYQpxYMS",
  "key10": "5bM2z6X4FJ17NmA3MyRc96hCuP9n12ZhQdigT771xY7Y9MpX67P1AvTnBZwkbzzy3fjwQN1NpEcTv78ZS9UBgfS3",
  "key11": "3mzKhfLW4oPKZW5tX3tkoQAxaLnJ1iLobrEB3u8LnM67A4rYwmbDQVAkcjNpLnu58ChxdWiGdivMSD8pJVL1Hh6o",
  "key12": "3x52TfqpHGxFVZmuaKwy1LbDReuKpDCuRcPcbTgDLwjdnXq5ypci1RZ6NpSfPoJDFGEieYDy6nZGmXVjqDoXNxuY",
  "key13": "5ix3x319QFJ92EEgzPQDv5QgrhhkYA1x3GjxPu1M5ZQJqhdLSa5kVp8RsfJVysejzt5NwX6DxiYsRBh5PgZgbbNa",
  "key14": "4DzCp6oeynqaiDiBnTWBK1caa6192w44qR3h8HveZH2zMVBdBPgMNnXn3PVvDqNHfdny1UY2rqNEjKZRiHLLyEKa",
  "key15": "5s1FhsAgCHg1Qg3sF8p4DGgCREWuGSB8RSYPSMgMk73GA26LKAafZqEg698UVRruWHeSK9DCfYbDPfhXm2cyjDu8",
  "key16": "4QCQmpWr4NtK7eMCQVdvU2bHmYVmzvX5wzVy4XRrnJ58GACWGJcykAC5WSJj6KAD44ttRuM8dgrnZ79KD3PbNtRU",
  "key17": "4mNNaaLpgKe1GNeJnPEvgNNphoLGyp83NT3tskHGq6mVf4eMKuFQ9QoCi1MQUXXdu5ePBExRSnCaNyXHSXMd72oz",
  "key18": "3rbpqwZbXuGQ9nng34cDWZzm1HzL6iSxuwwTWQYfzUoG9qspUQSexU6rTaVouRsso8Z53qgiB9L74zw8sxxeaCPS",
  "key19": "2RtEwkVJAwF5mkcTVabcRUMHUJLqcdmETNB6B97oQKNv6xcLybN1Tk7fZMmFzMq6DRAKJazzF79mDNcAh3oV5QAh",
  "key20": "2fgSqcZTziszsZ5j9A4EcNgL5S3LPELmrgqBYv2ydEQwZ5ULr36xHXh2Mprz94zAr5vS5nDXyZq9BjBx6KMnDph5",
  "key21": "5njoqGmUh2i3afHevG52CPP7ouUDekqkNfgopVMEqNi4Yj9wo6kUy7nF3KvQzh7cT1ibA5owGxDngvNtNNF5mQ4D",
  "key22": "2BWFobFaZfJYVRvsCXMRXzU4hBo7PRZ18x7RDXtVdS16hiraYcC6YBNv3KGFScjEXQbdXXs2dDM8WKifWq2kSGNk",
  "key23": "5SzYxfRjst6LrGoH6B4fN27NtrRiSgHa8ArdFdTEVLiL45EzsF8buBq4zzJfmpW2UwKn394RBNmapH8HueAYiGbX",
  "key24": "AyUuNu55ADGvtJf8w5K1GWJr3fyXdPxRSgfv3KySxqysRUCkxL6bUHQEzbtUvJke41Q5Wn4SqwSdVsJW99vnEZi",
  "key25": "5HWmc6aRC9r9bR7BqUDgGrAEE4xt2ggKMTUu6U984tJQweA8Jx8ZKVvhGNW4p93mDaay6tfa1KB6Ezr1Zf8bhCY8",
  "key26": "3CDSL7VxVawU1CHpZVaHKfQxyDsc8NsDsDVFpHLfSHRDxFC4gf9MHwJBspzV2mdCZ8gokgwuBV6VBtBgni7vwiio",
  "key27": "AivW4mBgkZrJRv4EBNkDTWzdRAaAx1Jpj2w2eVZdS8nAJHgpSpyVzpAhqicsNo8DNxA8rVftwQq64o1YorfWgzX",
  "key28": "2y7jU53iya1qUvPjZrEjYcGkcY7kQP5C7BU13Xdt3c6ZeHHmJWsoeWZKXfrye8NxXkcorY3AHW26vGMyjFSn2B7D",
  "key29": "hfhAwiCN5C3PWdcBgBnks7TarzuLHj5yPG1jgzVragT8e8ve8HZiUjQECPjTYkoLcsxBFJ9NP1eRMght6FR7YEy",
  "key30": "uWDoqxgjSbNzrhixFu7uhccUyA4LYENEL8eQ8MPQzCxqryRxzfkX41JBCT52nTkZvdbhQuKdsXSU4UJdahngoqv",
  "key31": "3wojxSBnYQGy7F91acmeu4xnSSaT6ATDJv6gF3zM7ggfAtzv92KBhdNQ9ftLw77Dpuy3GxXNFticufEs2cemKnjf",
  "key32": "BntEQUnwGJP2JkcKgDi4tyD5a5btQur8NJQUqzfbe6xvV6k5reX4Y8o68Qzci58FpLMQxPzKpsakRgS4vsgKArK",
  "key33": "PUyW6kSDU9UL3pUAU85X9XyVVH8NmX4jEyuE7eizc6LeceW1mRYQpoqRnMgbRwEfXXp8pj7gRY6r4AKP5TNYQ7Q",
  "key34": "5nPhf6W9i6AFEoA4am9g8bCfQYgHYC6xtTwuMUeJNVRiFUzhNUNBGUpSoa9RFmzM3aRywdKWaK776S4ehz3TdPT",
  "key35": "Yd98haU958MUodq3Mp48CiDXpKdXmAhiDKYDvWiVoPJ7cApW5fmj6Q5ZR31N2xY1i6hgTE6uvmnaSHUHDAVf6PY",
  "key36": "pCmCYjA5Pjtkrb1RgnpLCPhLbxTc3YcTqhV6uhy8wzFDtgxQuvRfnwm4fYe3a9NZA8u3BkPA2HYs7s6JZhXpDYo",
  "key37": "2uvnEhtisWRuisjvpSs3jPQK8V1Ppd1eGnAV1TdUQrqhC5WpZDDSKZqkJNqKkgMmayxm8t2HT71hcWEtqFRENCMr",
  "key38": "5FNXu4UFj3GsTGxWHCaUo8CuaEoHtrq31goSmtkyJZf6h6GRht4ouviRXgj3Nv19o2FzZFTMaXN7251D6iDrQwG7",
  "key39": "q9obcTQ3B2KC81MiAbhCUUzChdKA6JQGR19ywgt8AdfAtM4zuY5zmmpmyyKUTE7m5kALvCtZRaUCm1yUCfoehJT",
  "key40": "3BdfXSZg3XXLa4nL9eLWok5MeoVsD4rUdewmqcK6WFvJD3NGeqhUuoUvMrJzwyNmviWKn3Kj3L6YdXPxXqfb9tmS",
  "key41": "3cmFmKJhqj82bWbQ19ND1PEgZaz5gzfM1EC7uSBTtAAcdJ3U9L5szVRfNFXkpa2J7eh3WVfmWA7U49qXFDPLN5xg",
  "key42": "49Yo7iKrxGWoeTbxHEzQRFULYNRMXVy7PSYRzWti9PAvCWbZyi6ahK69t4hVcX9qyRCHmbLjgtA59m6NmqytVN92",
  "key43": "6kmDV2qU3DiMRZ9DnLmEbjhw3AyUZeERxKHgeVRQRT1qf7qj1XhSXwonsBqjC5a1eF1sPz2q2Q47sC5QAyu5zgv"
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
