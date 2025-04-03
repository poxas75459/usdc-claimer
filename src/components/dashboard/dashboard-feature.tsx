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
    "zzUUETBVa1E7VWRSJ83nfv1aHLCtSamxo7VgcUdxT5iWMqkdVvJRvZKQLV9P5D53WvknKdZVYpKvMnhWm59sd9z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UVzTjEKFwDPA3GbPGhD7uPRc2vC8G6DFuY46xw7nRx6bXaQ9HGJhR4VWuCPKjLbysVVkVwoBmnqB9SKSvo4dNor",
  "key1": "4mAw2pHeB7QZ3wDQN5gXGSS2AgUDqPNUU95SKV7MA4gbd9D2rkCQdDKEz4KXhTCYvstq5HuS5BhAAqbdBYgfuTku",
  "key2": "4N8Madf2Lm4Tuntac3RYkADNkc7LCqMCmuLNTx57rVxJFRBBYDqtFZ1qo9CYfhb8eMJN2xt2EQSJ8AioRApn3zAQ",
  "key3": "5ajVoezYyjwVXQWyvWqjwRU9WQJpvAg1Zrt7QBEEFmLZhVsMUcH11jEJjWLhpemRVxBxPVwU5DqFZfDofEEyZVQG",
  "key4": "2TYerMxGJ55SVPoAX2tR2VoosnBciCbbBm9obKDkqDiCeeTvEJ5wCGHPDnbmKyprxajizzh66EDo9EsjhSXc8EYF",
  "key5": "4PGT5UcHVzoxvtzQmNWLJycdL82b6ms2VLAmnscZEY8JV1zpEBoz8o5yUmMQWEXR8vCANuLE1h62MRNptvhNuajf",
  "key6": "tGDoFj14KaFU2EC7shectj3eqZFCJegrZKT9GYsCN572pEZuqW5qr3KYZymhu6fzNizB8FspzpXEz8oTAE8cbPj",
  "key7": "3osxyDDhhNGDtZVi5NFz7q24mPwPmjtFjDinJrDF9ujgogJ79uA7eUc8a3fka4kUDdT3ZYy98vWftYZkUCkiFw6j",
  "key8": "4gvyXqLaAgsRfJxXk4XJo9BMWwdpYB5T7FjSZWHL6oWpvUZqiYdrcKZAf91CATPZwpqKuyXrV2kHjZmpzREaSwgx",
  "key9": "3ohBVJtkFBtEoThTSubeCWzCh2jWyUvFgeL4kVSyfi41BW6f6KYiY59S6r6opnTkCEeKTTs1qnF8kqhzfMwKTCvV",
  "key10": "5xoH1U3MPrmCkshxe8t2qdvMMT56HFubs8P96dLvkHohg4eCLE2QR24SxiSbbrdnumV4xXct6b47QJ44jDw6EM1d",
  "key11": "29rxgRgvsALFovHEFxZ7Q8VfXmgTJRAsMfCt4fnbnza3gSBZdZ6p2fYAkaVU86jedZNYffASBfDqb7x6VgwPCaie",
  "key12": "4rr7GvTuZHo7rYekEgQDy9eEis7exZvYuE5vh4QRDcZWks8HvAzLqzy7JgmVrx34hjB7ChTvJMtn5uf5NJGQR3mJ",
  "key13": "36ZCEU2Hudob8ZAHqo6CwkVeHEuYpeSXoyXfts1pcAWct3tj8fhzDo311mmT6Qt97mygjHgbPSyPLJr2ZLWWfAWQ",
  "key14": "66upmVphZL2wYkqWnwXTbq1QEuxSDx3znLSQ3os6Pr8skurvrAJNZeFaMxtVKrBP6aWriBwKt98XJcwsfCXCiK6N",
  "key15": "3SuF7tvUsL8qmncSxgnWBsB3YDSTDskvRqiEHAap65DYWgUQFPW69y1D38cYC4rWMdfxQ6A2qzrTxq1uF5Ls2xjH",
  "key16": "61CeQpihRo19PUxjyVqgJVQgiPB36QTEAazausf6roehezZTTLc5JGm95qxdT1oYmxJ4VFypm46bFtMG6dmiZmAK",
  "key17": "4rkv1cQtiBwvLsgpGuXsuHPLd1wiNuBZbAfksrz3s93pAX3Y8CUGoDLQuW3KnH8N21qyr2heqYkavBKtU52N2CBP",
  "key18": "sBmL366e7qvbPGJGdGFSmMa317gdCBYdWEDEYvAcVcewhgXvvzNpoL9ZgYxBRYJ9b4hVqMQjsyZigroyC2rv3b8",
  "key19": "3vsDtR5CVKKtLWDisD8vWqvZfjxHXn5NktDnXYFakx8FemwLrtQjny5aYUSnXiqWJcSNHTEz27HEBimwvqceS1bA",
  "key20": "26NLDzcX5YFE1mFNuHDUrTr9evt18YoKxiwSqEtNYy65g72DhscNNMG2ZFq2kuNfGF1NZsdtfrdRFndoZde14bhS",
  "key21": "5sqmPLVBzWZp2EotoUULHK1NMW47XvwdWG1mPjuDK6p1BxsxfCrvomjTt3po6heNrf55gNnabUoRZTWy52xvY1FY",
  "key22": "wJpeSAMBaJ3ngK9tqpP4aDi4o6XrsZCPnzS9CaEAyKUsmEZMN1kERPNqgEDTBaeBTbRwr7H4d7b7qsFmeV98JMY",
  "key23": "5AS52d5qwcrsoSBkeoZSEHNHStCFSiQwjBF44AKTzYAy2EBamkig8zvspyFanrbQnFLxjTcvPo86BqUkAqR7VTk1",
  "key24": "5eGkg5Ez1xsssfpFZ4LGfMdQ1ChZT5fDx8WE9zx4kGPmUmsqiL2r6oxb7Jne58xB9RJa4Z9fxruaLmCTbjgeYpkB",
  "key25": "2gSkyfueeXGos76XWx1vxx3MJrXYj2FXKoSrfMB6K4XaQzuTwJR1LPWq2pBXWKGRA6s17NRDKDajzWTSFZnEfWjf",
  "key26": "57utNEXHsSEKRSQHAoAZr8TDnTUxET4uBhXbxZPsLdZ66GV4ZM4mwp7tLaHtkb8p4SW63RRuzHpUE9YjwYf2Mw9H",
  "key27": "4xG1yCfguc8vrQ9MkpjUN12rhBkyAidpVbMTfX4ofNUHmTFu88vGdGF6p9vfN5vH1poSBmD9Efd7hwoLYQdWTGox",
  "key28": "213t6B8VMg7XACRTbapcXw93Ujq1kSMWPBwuRYYhH3PsckKYxbhma64csct9Y7WwhvvDos7GXJDAB68GbW3Ay8UG",
  "key29": "4GxFPyHuNFDEKzWrupaBCQyZJnqzrrDP5qoUz3Do4rR1hxrXxapkMGb1SHA3cDSNVVSAHC5cn71HECRtT3VZtESc",
  "key30": "37uXzUxuth6FZmyag8dGQuMpf7TDugAKSEZX77JWxTdgxPzhys1g3cBacsX4wUDinRaUFZjnAzrULzbtFRghpAMj",
  "key31": "3HDBHAQNSG16XZNiq9vBfhmnXGSRpNqrJEu61FT7fkA5Rrqw3Dc11qN9HVBvc67MZDkG5pxH4wBw7JyHCMAwq6sQ",
  "key32": "cdoL79b8r8kWNJjHGV1HJhHNSKWVk35MCY9JbjZaXUCN5okRXi6BtbGeRNgGwhMzJFFJRNMSbeCyrNxvs6XTGEX",
  "key33": "3MTpaiLoYqS4PW9ayx12gMEAbw8Kmxz39gHLDa8hRAy5yfcEBj9W1A7HfTRkdHdEJYuDnuyJQcVeaPMQEyPqyGAY",
  "key34": "ik765v818tGdtsYtEF7njZSfS9WQT5skUsatSYTxM11RdRPWkVnYWzMbTwFrKn8g5VUFKx47UHEQbZePzYgARAx",
  "key35": "5fYdHx5jJgwq8muD2Ups7J6bPmPqg2n4nrBG1JBdvwqoqz5hFtH2UC58g74euHDK3T5yDVC1RbJJpCEeM8T1DFB8"
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
