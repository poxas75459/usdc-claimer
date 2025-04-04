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
    "4dAvUYWNy6KDWEr3jwVah1u11nKn4RXuM6CDdSm4aCJNLnPfyz7zvjzTWucJzAhp4ZPAP8A22sCBjhxqdqabTdpo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PJBqogGiqon2Npntor1ibeCEzGptZTNvSVGAKJiMGx2PQotXhSeuTSAoQ4K2bU2AUJJbiVQGLErDB5roLK9TvAv",
  "key1": "1wWRvn9get4zLriz4nNUcDNQTQCqtLJRGhRMR295yCFm36wBBFAdjJ7eZDPgG2iHWMExNYhNS1AQjQeEYNKzmiX",
  "key2": "4Q9DpZhQN3wzposy22odVF2ga71WcM8Ah4Qb64yKUF52wef5EGmUrLwpoiLx6Nb2ehqXYFtH8DRZDqKKyPuQGwqW",
  "key3": "EdXmeVS57GspzgoePTdfCBiDeShKYUHAQwQRnP7jpstm4bdcrwQ5V1ze8M5wHgvgyFrQxLNbELKEUCEnCv9UALU",
  "key4": "2JZ83j99CbsNwaL2cXjiJ8FMGfJar22vCyn3jTUzSgewFzL8c74Xfkjycko4LYUTz7cfYnmTf5vqTX9E4qTV1AWt",
  "key5": "3v8YhdgUTS1jRTw6sbuyMakHXBHbcaEtDgJxCktcYz9g5XSj6Pa4xtMb42715FDz6JKFUzWpEEAqowVwctkpn5jj",
  "key6": "bzS97yvRARjPXi8a9YHRaRwciktf2ELGRePM6mbuzgF1Qamf6rptkxPJkPkJ8wVkNdi5ETKNKyqFvCUuESeKdeD",
  "key7": "3cqs1A2eqAcuV6vh7yhMDaHwgSsbu1QFTdYvEE4yNSmVJey8B63274VoSnvmvWMZYbAncoJMDEz3khwhJAcsHKLd",
  "key8": "4UySzYKbkbvg7BhSe4HJpTsQjAdZATrrhXcWR9zQhFwMP18FLT2VAhhntdtMv3uhxBXLfZZQhzMmeZDH3H7vZPQN",
  "key9": "3FdzhKvdUczmwneYZddbjmkznG4jF9vBFUs8kmjBeE8R6zWRKkaHt8bXxNgL1b5vAzDeFaRfUZ6zHaKKwL68fFmL",
  "key10": "3WYRNNi3Ept1AGixhLNToBPKqVhds1dKR7JqLMQFxubxmxaXkATfSFrgPPyeBc7xMBv4CLM24jAs8KFpUNs2qukr",
  "key11": "59Ew6bVSuooP3Wd57fhShbQZv78LEs4tVGyHMtbJNR2tuuV3hyrPz9A2BHkDeQmU3oJzVBzMC7oMLkoe8cVifNJ1",
  "key12": "2x3UgnSxtqELkBS9744SmuDqpUHpxiWQyjmaWCEbaUEiFbyvbNHmDj35Lekki91Xpnjo6GcFyb5TgN8sMQmiHAvH",
  "key13": "2YEJPJdTXcPDj3U5q6RyP3Zo5sdf26gidkjWe8xz6HKdMpXL9d64BCqJVY8bC5774xraP8MCc2HxqN4Pjo6tajsj",
  "key14": "2PudJeSmFbVPGXhesyFJJUqQGg4po8SKPwXsMX1iGSZigkem4svu8ZJfPtEL8rPZkZzGC6DR6fEpWVM9tdUEZrNr",
  "key15": "5Cx2EASHy5kUxkwoeT6WA9HFwGuBxUJi2Y46NQ5EMtE7pbRPWh59fzxmXZTzPGsWwyrKxBCm2wmtPD8QyLoVGLQw",
  "key16": "4W1NnVqhLuRUv6U97Q8HhujxHUx9gwBHTQaxi52e9vWYh5CvN2qfDi9S8PXjST6KV3daxvyn8HbF9PBFUbXYG6Wi",
  "key17": "52522FqVak8XKBYBNxQvX6beBZsBiPryLVyqNWJK88mUjSKVbzgEnrqnwwPeaVnHgedTfx3FSAz2dAyE1599ZwYk",
  "key18": "5MLr8JpqRhaSBVHETedXkKt3hXuQjwk77bGTAqUBvp7C4aGogPPofWX7gQaaSGcb7GS1tka7jAh9MCKazmHKsh2J",
  "key19": "3DJJNnvsb48VuK7FMEhUsQa2k57C3eJmhCPaM3JdMXMDyffSeA6qirMrjGhsnngqNEUkUsd2yb272o33UtchLquh",
  "key20": "5bncK9e3LZZUZzYH2qh2WWPvp3XfBittn1eoorMnZpWQoYPBKUUVrfQDqLgAtsxSnSjwLYEbRCzjq6SpWP8YHeHZ",
  "key21": "4MpApqZiqpknKrR6ESEBxSUZXVcAYDsgrcfyrMRkkuJiRJVLp6YkNTusuvJLWCLdRNWXHFKwMNoj4PnQuw7tEiPy",
  "key22": "HHzpRKJpJfujzLXVEc5EZsMDsAMM22nrNJpZZkx7itZeZhiQdsbo5iRbfiaKXzSgBYD5qAGsrMtindTL8NPyxiw",
  "key23": "3HgJD9sRTZ6zng4Dcdhjdt7115wf6yompizp9hMVcRyUH87bemTgaCYoqY2UiUz2ssCnaYD31mdyhGkN5ViQ3Jqz",
  "key24": "3pk9b5qRjo5qY4PvVo5WYZfZxERoJqYZLZSny1QZ6ytYeSBJskyGutfZyU8HC3KpgtLvhmLdDmc1DAfchnrK3ZiC",
  "key25": "2U5UL6u1HxaLZtjXmYzR6dPeRc7RDbwRkMWg2F3ibnfbXahzcNzTEvqoz23YLAamptiZb1z8EaNj8iQfpckb2Qcq",
  "key26": "2VnkAqjU281sxhzreiCMrnN7Y5woy26HdVy3sw33juWgNyWKLtzN3DToW79ydp598FB897X8aHvTTNcUHuEopxz5",
  "key27": "2j3n7ZQ8enJTV77o9c2Z2tNUG4Cv84E6hzifDe1e5gxHP2suajDPkygW6eyQTrcepCTNVfdrYxHxpxBvvy2iXpXJ",
  "key28": "4RbgMkJBMBgoH7ahkU94zYY7v35bYd1KzdGE5dTNKyxuU6tsxdxJcHDS1GH2tFdXL3FNU8vnchfgsKsZTDCaQS2H",
  "key29": "3MsbQ7zEPTWn7Tg5pkTbBppapHUXWM9YraLUkqtVFuAiarSDt7mke83u935bJ9tnHWBSWTDfFFEygGWxgYLAUjHs",
  "key30": "5i2o96a2AiP2sM3Xra3WfNkKqPqVVtriv9rKh6PYCEa58cGNzgKRaYJYHrpcuhRvwiaMcqwLJagorb4Lzf3CfWCd",
  "key31": "3v5NSafhotTvBu6421WGE34F9vXXDQtc5gnGPaXYGHNdvzpHtK9zN6uusDGpk1kmU8TEKDtNyFiYCi9J7oLedXkk",
  "key32": "4rUXJFFFdY47BKfzByi2mYddEfpAwTQumjCTRX5S7KJZnEbj6gcPESFmWoWuKdgUMwcaiNCG7fnbYoyzBoN4HRmd",
  "key33": "2PyovnZkxe2i3KXwdADz2kRTyMpHZr5vsNDZJ7Kt7DTyoK8BuphvzpwkTLJyGPsQidtZ1k8uhuFzVTJ62vNSrpsf",
  "key34": "3EAyGexSWT3krhuRu7gGKnsJfHmzxo9vmbNKpUErfMLSeqSCZMqj8brqPx7b1emrtQ4viUXLNKQG6PZSbshQDEWh",
  "key35": "25bAUVKcXMY26vUnXNB8uWwafrCbM1tPiskjc8mNJVjDt639EXRgQ7qyrbj4iBwe4kieFKStEoG4MRv8npSpGYze",
  "key36": "WUi4sv4SL4gLuUbCC6kUZWiZmo7dSJGsCFN97HR8AjWbyFP3M1H6nuNYMPYgGC7wVNNbVpGLJ9eFG9yupw5YU5P",
  "key37": "4VaR4wUPLn9jEVJ7Se5EoYYbyZCPrdG6Di9fpUHJ5pHircV1ubnAFHk8MFKfZvi7DVHTv4x9vimNhmyKDcNG2eGo"
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
