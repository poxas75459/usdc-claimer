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
    "2C7GhJUZivtjY7UwzvhJkasH9ZcLuZ8aR9jXKeoYJooJrrQVGtaPrM6JdYXpZBcTPjL1AaTr3yrzFKJsPjNHyXUp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GyjeZyLvURakxAhUHsxQJpy5YLVcnQFHhHaDpxTDcFbsSc9V3mGfE1b7ZoLaXEFUd8cWHmVFxGX7oNAYQy2RuDC",
  "key1": "3Sb9YPeBMVSvmmGXBJkGreKoUBqC6Fhf6iEv3zwZzeKX3d1GSDcT5iNh4L5wbps6RtMEkmMSrN9ijA6wsMXeavnD",
  "key2": "3oAJFGWLK1KemMuCqh2SwmZXRdcVzKDicSfM2xfBMS1xoj9U4FjrnLyxDYpRveVkDhX8wBwRKYEPthGhwUsKhzKE",
  "key3": "3V4pdovMv4tGZSzTjATWCVEEamEWqaeJjaUdXx1JXV4BwDx5Vaojf7ggKEEuEkz9XmEmiBoLBZDmcHgjLr7in6HL",
  "key4": "2NRCt3ZA7cj7hUd73wLbJY7uu3tQBkxZkeQjjpUzSFCcEUcEbEEwUNzogVEo7nzBfAU2UduFKAyowhcYrW3fBwB3",
  "key5": "5KvUfmrawvwyw42CRPoo8sTLrRwYSiQteBXXe8vtpM1G4rP2VCKLS1oVUS17QUtN5waMxXbTTkkRUgKrdHptmhgd",
  "key6": "QDtd7dp4G2WvfwUTgpzLZY9sWASQjTtJNVb9ntpxheV4tP6TCFmWvKkCcsUYQvvyCD4Fy2ETgnog9b1WekgbKsY",
  "key7": "528BTHMKJVeUZD4xWUVWZ7AqmrLuubttPsukPuPz1acePFfKppa49QAVyWaAb1DF4jjfceGm45zS4FeemV3mgUmB",
  "key8": "5iUPeXDQvkNP9pWU6V5LeNyUqNTzwx67siYL93dJSWQsiMYTqrQ1wQh6BZxry9areQKJ2qJTQ5kSJZQYxVx2ppHZ",
  "key9": "4rDxujjLVHLTQ671mYwWHEQojHM6gXwWFuUVFd6YbfrQnGK1vpoAFy9oXAku74QVHmJ6bqN3vB1NUX5MVXTYAArX",
  "key10": "2Aofi76z2o7uuKv5br8PdAhYJWVm7sPwQUZYYzP21BAYohWB2v6Q2JSkGrTdnSoMCgw1G7yd8EpLVyFmrvKLtKQo",
  "key11": "4hCD6xKcWY9XKcC2oVgizNnUiK5y9oSBPwsbHj2n7jmCWr8dZhspdfaLeP3QZtZD2WbZBdrzMnZ9Kcf5uSQxZ1kW",
  "key12": "2ZRLJL8kimeduPUpgu5V69xSb8AYAf8BLthciPUJt9K9Aajcq4hE4GieVDaSgHu5VjW4NwXSnDE7fp4kcSL17jHJ",
  "key13": "282EhDN48CfmrAq8KHPQfEHwi29iaN2PcptTUBwoEVxyp5CmNCGwukRv4VZkeV9XXKFwvHvPEy31opcy84kUGUgg",
  "key14": "4HFUuyTZSgCtkSR3FLgiMFnusXB6urutDjK151cvxUDze4XC7HogGrR2zrKD5YWmsASrmr42RWDc2prwBUtUK4KH",
  "key15": "5inYTeWLnC3zuwqEzdoCuMxH6Gthau2QFkVcs5g6QjHebWYVWQXUkfzzka5PhNm7pxPHeXoBbnGWtBVLSMd3gcoT",
  "key16": "4mRH8kBnxKvJySTWpepBCLaqD6x8rr9djsvag8fMLmw8jfsSrSqcouLazizakF2NARJnnsheGP74FnMFAbThPg5C",
  "key17": "66DWrNej2AbMnFRgye4mmCnVcDnEZNJ6gy9VmV5gfKKjorZTseiDmHS9tZHjH78Hq5nk5XBQBgu1zcYkjyhWr6V1",
  "key18": "2GEGNb8edYFhqPWMkXmJebghkaTJJpYWovSEVK12KCJN6u7Bcib4CAKCd671rQjDvcQm4HtLVZtWjBNy8ft1XJDQ",
  "key19": "4zp1Y6PZAAXGsDsuZiK4FeFyuGExSU1EbWswkakM1NqgGw4tjc1BWKpwRQW9FKQqZgepo4AsYb4yNDohsEKTA88e",
  "key20": "iHndSwHy1huGBYhATvHbengjNQcAFArTWzQrhJFtgSRkLZtcchmX81KGhpL1BUsk1wdpewsLhs23G5a4wGVc7pa",
  "key21": "vro8Vs9u8B5nrw9PCHV5qN5D2oF1pBbqRpE928JUikcA32zDZGdFvZaupKjC2c6xXhFAis33z2nHbLFt7mA2fzv",
  "key22": "65DpuacAEUnq2SwnYPCt3ShZhq4ZDyfj9NiDFP1Y41Td6DEu7nRZRGmeV29tn4jRwHhKoj8vDp46nBee8zHz7Jyd",
  "key23": "2CRHwnX5qsBhYcGWSdhqNdeD81w6Uc6JgJXAQnVLXNLN7sp1hWX8z3WS5K4MhHQB1kJaGuFKUuSFSGeivSGgZ5UT",
  "key24": "55zbfvFVAANQ26vAUmn5L5GHz62Rb6j64sA7tPhssTYadwPHUFCJ7ev5JvXszBEQvMt47mMLzgNB79b195NinWvA",
  "key25": "54sAnfDcbSwPweyUpRb3zqXY7dVJNGt7Y8uRZM3yThceocYAS3x1cdjWunLAmJqfKFoweNQz4rn3WEqfWUk3WksN",
  "key26": "5AykBwKYhEVuWnU3hqjkBWjpFaYhR7bRA4tTq9HYrPZSLAkTQEKX4WydpC7VfMCwvJbJPZD2FYr7Xu3Y1pEjzUW",
  "key27": "5QJbFjY4xHfLZogSADSftYnWU45znmcQPDiFRCVm2JDSXGk3Z6a9eiHsgdTLfPenTNULk8GxusdjXszxCvzd3ayJ",
  "key28": "5CDouwyBzusUQS3bvv8fMSTRyy7GyDtdnUtLF6G9tUppsextkJegDCr5bYgnxDGF3KcrDwCjtDWVYbfwRhKKXgdm",
  "key29": "2tpHBkJw8apZJo6XXZnSc4szhAAXXyrdCepoNRwn9bRnbkupMoRVqVxsmyVdRUpq6W2T1fJLpMyv1vGERue65xsg"
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
