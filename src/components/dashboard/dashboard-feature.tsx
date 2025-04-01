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
    "3LoG5PGAh5X29Z8JjADPhCuP3z97rr63PR6MimJid2MUWKGAKTyro81UqTFz2x1yfB1sXEk3GPhQCJCjiaN5Wb4T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YLuXHNDSSpPhVL49etgnomitWgDAYwmnKzAP1Die2DgEDHSSxthD279ZQmaLwNwuiuWLEoauWySN7B6B9bwXghu",
  "key1": "5SLfQn98KiKvXaq6aNLDKeXg4Q9tGdj6Nn7AU4agKgsYPQiEP4ycRMdTW88P3dGfGQBgLjTQKdu92mra5BgeiLwG",
  "key2": "nnJj9yV6PenNE8PtcfoxSzubysGQoFCmqPNZdPRbEjDgRYvYQTFBYuuCnRSNagtkYvNuPPQ25eJNRegXZqjrG2d",
  "key3": "DrEW7cEKVS9XqQoLF8GYEUMyMmyatJCQ7w4k92nfzDjE1Lp91XbhvwDhMKNApw92s9ksSZihkb8CRrGGM9FeYEt",
  "key4": "5cn2ddqsdoWFDnR2PvjoqjZ5hk4uH8aVFtWsx37JgDDeUfwohV7QquXdHFZNpcesMBKixRxsYY12Q2rNfKMfaXtj",
  "key5": "44cE4sdYRfBQxLkE9qc99LT3vdhWnDEWncW3Qeak3tQwwXc7BTZCgQqDLUGAEAZinREMZfEU8AYZqibFjSpJvveQ",
  "key6": "2iJXUuGmaw8rCRqVsusoXdFfE4H8wCb1rogKVtdLjqajyo5FdAzeezafZX4vwjG45B1TJ2HazAG4mb9UdYkhSJE6",
  "key7": "3pqXef2QcK1B8f8VgTVkZqqBYcCep52Mt4e8QZKbtFd1Hn7P6Pg3FFAg3eA1XSSd3BNmi1HzUeSs8AS1WpvNob81",
  "key8": "2QHgMxTC6FZwRnTu9WgAP9HTCqJKUuMKxS6uutDRX37Qh4f1VP4Mr8FLe8VsVtXBmmn2uxYWyQadNB46xbwEgBtr",
  "key9": "3qpMfarR9GUWdvwuUTCKeKYZ7M9gDeLAKQTFxsNpZrAVzE6X9WmRg7mjTRQcbqqQyaZZWYPvMRUGe7th62S5E7AE",
  "key10": "3wwySqFxm3KcEwEZMrf4BQWkYvdvqjgQyUuxYD1erPt45HyJHUP9zrWYgxeMhUxT7bkz67Cw6DCWQyHx9wm4yrLY",
  "key11": "5SysC75R9v1wUL7DFDLrwbwrQUvHqNSQpBXVfrZdz4hAjdKVGrpGgGtKXtyy2Prr1F5kazXAvkwdNeJg5aps849W",
  "key12": "3XoJbJS189tb8Ct8WAparLeESgu4oNEva9YHUmTYK8BRnz6StJC2uWwkw6RYYi9eB6A6taY41DgVWmemFaNirSkF",
  "key13": "5TfugEBh4ZwuHbNJMuPSueRz69Zs6xe4g8JLd1eJr8SBq6MfKuWaj9jtFTQ6CKae4tNgkcEsx9FtXrbvXJV6PMht",
  "key14": "31bN4wATMK24muKA1uZKKCPDzYAZeMrsQpbr6cqA5HrS2w9QUAMBdLDjjoFUxj9D9KEB2DDuPMuQF5tq8Egxsn7j",
  "key15": "61Pvx4r3PJCahGq4g4VBT5S6kP5wi18jJuSUvnm2JMeV84JZMRM6d2d8XUU2kcNT8sUCRi7qq5FUtA8NFfV1U7Ju",
  "key16": "5EhdpjMJy9QQmvn1xpDq3xwqBH3J3hAf51sREwN2xxCJcTbyMfBnszD4PNJvPmASjHudJLrsE78WjxaarZx9qX4t",
  "key17": "64hCpfAMM9gU1sAkgGbxXq1aHXchvgp6u2FZJwifQ2XeLvN6PGJKLsJxEmAGXYYqUrUz17Jr56f8mEyySifSKDLb",
  "key18": "5MNQkbnwgknTESHPEM6dgumG9irdEns5sP4zDjEQqXmcLvaCFB7S9QBojXzpFBoMzrNfqzdz2PG48tvAPSZDug7b",
  "key19": "28qXM5g56d1qGB4H7F4eNLWFovimUmE1CKUzMv7pG5Yrez5zDQ8g82PdTzj9MuL55ZYyXvnpd6DDpia3tS5TjXTi",
  "key20": "4t67wPqNPtGAF9UScLV5RHEhJU8QpUqJ2o8ZgzALPdvYYtR8e6SsFNQUrkP42Utp59k9jPvS286RY2W7nBDCQzgt",
  "key21": "28VSXVPutLiaGBtch7vFDWatyxqBUjhZbmzdsdhRuPQdRjxqsXZpxDtGoVMNRr8vXFBkjyKKKB9AV18ghk3dRGw8",
  "key22": "3xyYkH1eizReAcgJRV5b3g7dpKwaE6AHKXqxcz3xY6JNpm2cXPnRymNiKRwc3k1XvDsBAqiBo4qb1uv5nnSYfFk4",
  "key23": "5VBp4KigPfBUnwDqexRCCkeD1ZPVB9maucCx3qENvjdAFki5Kfmo41qYFLLy6Zg21NgMWctsou93rvw5uRcs2gif",
  "key24": "4Uj4RmQtRn4ixcv6AYQSz53xJBeKshzWYKvaUwU5ytqGKgnh8sU2cuUDQs6sDe8ohs5h1jp7DfxARFDFBUEzYoVq",
  "key25": "3QR7UCHRmgsY21Cza4E8s9NfaiyUshsHmuBtBQ3yiQKqWrx7Bvph6oTFVqXBoyyZfYaK89cJ1hDW9Nwhvcy3E8Vy",
  "key26": "2QckQvWqNjg5NoQicAQZhwWPJoN3vzdoQzyFBXRMikRHVHztSZnxXc2bhPw9YDcQPwnpdyRw3JQQtFFMPWP1Uf2P",
  "key27": "vKXVbK7drMgJqx3r5RSZFFRrWGETQhsQfLRuHzqHKwz14CmRc8jRxfJt2KavSSw7CYzAV3PqmUSBXuYiQxHmx3H",
  "key28": "3YQXWM7r4HGkVGWb5h991MMvtH4cDJ5dLVGpvMa7FRqoZrrBPYBj2PD6zVum7iiBYXMFrNF1nyULDDkyt1Hbju7r",
  "key29": "5e6tvr58jwqZyqPbJVmCEESp83fxhq6M8NmpvBUkKqH9J7mVN8o7i2pEkWXc2NJS1mT6L58S6Bg3wq3N8ASC64ep",
  "key30": "2hksmzF6D9nktc3B1APVFvCBTShZyJXbz4cTr5rFzpRb3e7tpzy86kerKMVLo2erVruwAqCnEYfrFoszoswM8uK1",
  "key31": "2GXnbjjskUZfy4Ct2YvmaBaRfvHrEC5qBNbeD9eSSow2hrW1jUSxCZpi7LLj7kvS7nEqfELcxV4eakwFEBLuLdfm",
  "key32": "5s11kLhG1meX8oySoWJmdgFfyJTdsH3myM83a2NGmrFXgrGWY2MomKdtfrCpKPtRsmsqEmZ6P2k22vvyk5c3ucAj",
  "key33": "7pkST2cVs78fXSV3AExVJFcDfVJxMxbsNUadQd1m5PW3CQFX1eJ2kzKB7xcbg3keXczg1gXf7N8gLRYzmmqRq7Q",
  "key34": "2vxUJDzqhrUqpECnSqEL9BUJ2uwAp8dtGJQTNVjCLaVTqxQee4W97xUSpnAJEmFvBSEaQM1qv2tTt9Dj5cBGHvGj",
  "key35": "byvYwZooYbntmJZSDsoiMAhTa36jK4LZe3mbNh8gHvmsvqn7T1rAnvdMZDU6QdTrWABucXuBSGbkg9SfkS2ppj4",
  "key36": "2z5CHGnSEjFJknZxNQeGWALEfWikvsaXUfAFnTTcG3JDT7X7eGGmy8bihb9WDBQXW8ZbbpAiGWFYism9ti3WEZ21",
  "key37": "3VXH5ju6dJTnyfVU94jboifsiGGLkDfbP6Gc4ix6hJfW8Livz5f5mx7wW9sDPaG1ipL7tNDvVcYtHzGMMQJ1bs5N",
  "key38": "4LMpBjB7zbeVoxiL8cALzJHngT22jb49Z1stQdKUroWhDH1GEpaco3Qobnj7bK9AkYnG2yQPD3AdcVG3HVnXVaT2",
  "key39": "JyjFi9bSP2zFE1jTGnfogiDphdJcUM94XSibFEX1JKnoeYdsYPZoz5xYdjdGQVsysbmzbfqPYUb6hWis6QrTNRG",
  "key40": "HYxMFF4mm6WosgutUZawHyRs4XTSoeNQa3Lc1LnX4hSJxFRUMrDXW9Ur1RKZ3RiunEbhKXTH2RkDJLdp1qQB5Ja",
  "key41": "FQPcFZYJpmmX85pEYCTdA5C7kNBvvnqfFXNpeDc59vjWc6ksNT1KVg9n2SQE2Zxzaccdj9eax8HcKGEc1ypsHCn",
  "key42": "4W67Bb5k1iiQu3JsEiwUqt2fLNkahszV7ZHydhNNn3qcWgCGu3hxbV2XCg9QRQN84CKZH7CwXjbL5dDJa2QyYyVu"
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
