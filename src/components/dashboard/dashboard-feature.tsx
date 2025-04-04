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
    "5FGsPGZCKX95TNWVd6ozYgWhUAzHQ3pjyytGJiJ8Ms6j8b6YM53xSwUDXkD9afAKiQwBTsf72kWNK47Nh1mpkCKt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AsTnDXX3mNGCVrzaJRWtDpFFXBcMnXtCq8ViQXkFWd7Q5tn83Ao9KREnJHvxLLG2m3Jro6ttsAxSwjvkzEp99qx",
  "key1": "Qbjw1M41MQMD5scF2fT7vkPS36bRTFtxkJYcyHsAGuGXhF27ttNejBfXYjQcYT8124CQ9B45WdmFPrFvTcJXQYc",
  "key2": "2tnA9qPeKkWqNQjGwvuJmZDGcxYiwHXrRVmb1Vv6KcK97bedW2AS9dVoQnZVeLKJe13VB5LkERyTFRM47h9KTM4J",
  "key3": "5ZAgZcLTyUBrQxL7MdDJ8rVfCVNVUy9ZxVMrGmqeQMtxVasC5PRSdjJ46MGRHkSiQFa2CARnSXgrBVJfYFrz5UjU",
  "key4": "3hSodgdhWTDRPXT2zE9LvxxtwenZLEfNfxS8g76RGCQthp6Sj1ZqTUBYFRwx7TVNk1TiDqiJ4N2a9T7o4PQbDV8X",
  "key5": "2n161eh2ee6pnnFG6tvMnv5Sznk1xAYRoxLz1bpiwtLEjWjTDzP4mymXGJNSZg6wUVL4dVJz6jJKpbLJ6ahBbMy8",
  "key6": "3c4Ziu1qRFP3jdHrDaHcT2xbK67Qk6q5weiFqYuh4YtSwkutoyohkiJcMyYX4prBvfm7cFEJLJQr6PompyPp28zB",
  "key7": "4L5Hn8kR2AqZZAMXgGjQf4oSPxv16fvUSfuGJRuEUqeJMrFwRRpEZ2C99WDLMUykHwL2no6FXPy16MQGCUhfLVTn",
  "key8": "5en6pssH7niW64ZiubiCSHHdQpRzhdZr6VazZ37HsrXuNn7EP2uqtfVp6ZzBnig9GmJL2s4zuAMz7YuETwVfaB4m",
  "key9": "4G31rNDGkG6cspU6sG21MrQpdeTJkQxFS5NB5FFyNQx9cGzVKyj1nroRaEgeZLmnQHqn3KEuuKsebjd5skeBeRNE",
  "key10": "y4QHJEWYVkhJExpj3fdnsH28eoRJPaaZqDqopTbVLcsvHTvKzZsMbbLq8dS6hDfPoTwUmBgTLu3mTYXdPe1EKup",
  "key11": "VfHKP749yRMEoKcdGBoaRUZFf9SYjuo4R4w4JU7mzB1nLfHYyEAZK3Qyu7NtM9QdtzbhyAaacjGNFETA9E5L5Uk",
  "key12": "4UbCGWawkvszomC62H7oC5od2HCFdHoZuALXx7XW2QnnjqgoED2QY7L1ymGnYSamua398ZCQmskaoKnAQjBPcxhm",
  "key13": "3SD7GckPbEQvuKkvG86ZJKHkgk9dQmHy7RbSW8gaCAAfobNNrhxo27KxuqaYVXgqoY7m6VPTNncgeRCM9ty89d6k",
  "key14": "2ZJpvinAtRQSnczvsecH7GjpvBNLFCY7MJEEpgfgyfiaans66ZHay1u3XZetdwyxKv1nZjNcFgVGS29oEtkMhsnt",
  "key15": "6aeUFgu8p3jJfpNzfL1YNtmmW1gPmsY7WSXoNorTAGWrNY81cF86zhBbddi4ic4xkwqVbGVuX7nKtS7VPjaahPs",
  "key16": "3prs6iRTP7gKLiSRH2dTTGGyWYMxiy9C9WUWor5iXbQ39CaNNsjxnuCKJHDrkFBdTdiPsroLTLxw5qLsNJEjxVC8",
  "key17": "5xkiZAS2DKyUCNTDpLE1iuuNqwCcR6qhJe6x952uGxujR81rwhEysEdFzgi5LwRsMkCM8oBadCTqaLAxj4wWkNTQ",
  "key18": "2ervgzBkRkgzz98zy856pENt2ftUA7HAqQr5qibipJ9qbJwddCAkuFX9f5nZsaUNSYD8hAsSbdZTLS7tNPfcevzE",
  "key19": "QWWwGyu3VBQ91Sypf3G3ioEtSKPvtE2fyEfU9dLXNT29exs2SzHameQs9ud3h1mvR9LWpeQkYXCWMYui7CCVNdM",
  "key20": "5eXoWsCX8YYnZeW7PL8DdLsi1WeRJw4AdLdsG5VN3sS7YFk3PES5FrGCv4LHiFd2uQWYZKQgb5AfDoJA6juDCUF7",
  "key21": "4yv3U3GLRNdNj4qJj8J5kDySSKG3QZUk26GXj68XBnkHWeqNLRry3wsc6CpfUji1AaokzPMXH9hMJrN6ZmCf4KcF",
  "key22": "oo5QX8DbAGrgA5YmE63RsVNrYBwGqiBPEHsM53eqSyE6Q2YsPXgDD8VVXKWxVjDqBG9ZxW52irWSwbbwD4Yn67M",
  "key23": "4euxiZc6UC3t6NEsyRidBNsdSLwjvN5SjcxFQygKgJiDt55yB4qvQrbPgk6bBb2J3MBjrjdZgbRJATgKgE9u7nB2",
  "key24": "3WVhq38jFUgL93yBenKvgKLjNJNRd5SmLdjVGe7siK77fXAqq8hkn2vBTMMPQjqQFgaWZyD8hzb6x5B6fNTFmAfZ",
  "key25": "2mZJemyoHrXrCD3etCu5W9wGVF5hXRPQPZWqoo3hRX4FREhBHtL5NLrJa4cEmbCDHHpKoYxWEX15ED5qh59XyfL4",
  "key26": "3jrFXuNvFA3gAANfDGtyZmuHfEYbDbkDuMnR5x6NZtAju3LBFBkWE1JcouWbjyzmmnjVHAjeEHv7yPRKyuK7Zoon",
  "key27": "5qfo8pvhRUbZWvyQHG45pvUens7P5kXC13xYrdb5RzCG1TQqxDzgVn2RZLEgChU39tmVfK3KD2pgh8h8CeHeK991",
  "key28": "5yRHSjgLpYcK9wtCrCqY6tgQ6ZiB9YmPdJGimrNuBZkCd9b2j4y53cXFP5b46Z34cwC8YHUsRCntkNUcewZpqgM8",
  "key29": "25272ruVLYU5RZxXgb3wcGpib484Ddvt35kSHhCYFEBK7sS6oJoNxraRqx6WFRqw4xFvWyUwPdq87WErgFsNsKpy",
  "key30": "5C7gUHvTCRkwNq2LhjvAD2XqKA2jxR3UNEFcFQ4x4mCVVuwKXPksZvNy6zX9ZoYZmmWfn6CXok3fyEFytvkmXwPN",
  "key31": "2snkAM97eLnuEiauezNLTDqMX8QwDtSyohbVYv3UeAuqfQQPW3sRRYeH9kdZyPRdjMHhJskBJ3kwpzkWdUTRTc6A",
  "key32": "2Ju4nLqn2reT8ij6Graw4tMHQyfBp7g3SzZwBSz4ZwGYqePyFts9Hk5pLGTMJ6GuiAVtY9oWuEaDaj5pmMp1p9nM",
  "key33": "2xeTA4hLY7BTe94QbbH7MVbqi4SK8uumVgRrjzAaWqiE5TMEtrVMsxmsdG6jVZ7RxyUxLcu7HF1pFmzUnNXWBpz9"
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
