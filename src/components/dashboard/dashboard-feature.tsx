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
    "2x1kus5nxYCD3PJx6XbbHN3eJaqQbVbmmydezgHVzpMHhKtwnnFFwQDwbCBxcQgCSXHvKfZiyu4zdSgcwFXemVat"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DWe4z8xgmZ8XTLrXch7khr6C7JxrFKMzgeqQjNnjqKomN8Syk9ZnpQN8agPMUK5WAfxGm1Jo5tCKNbEihBWJhd6",
  "key1": "3MQBWbPHBqLK15aqcK6uwwChh4AQaZb6ACQtYq9MPWtXifPRc1Miy7dEcX9hnH8LQgzmNg6q3YVwLn1pQu1a14qW",
  "key2": "4ENyQNhBXmJxRsGJwnJwxGciG2PQ5wZFwxnxcMsZx9K1AkHa4JYKaocZZ7QsrWdkFaF8gRfYGV7fcoRr1z4c3QTj",
  "key3": "22DTn7qZEPEHnuhgx4uGbgDxWrgkbUgytvg7omTi3Skbwz7eDWjmrZUQZK6xmk3DkSaxB9HD8Q89FjJuiv8ygC1q",
  "key4": "3Wpn9LfT4t3b19XM6XFnvF3yeZJB8afAZMzMmZaC6bT23rL5KqRgfDa1q8G5nW53sJqVf7NZgqQcc5jEARj757EH",
  "key5": "HtoReH2ojKQFDSobcpc4LdBG6Xv6DUasU3y6t5T7rLmNSfnHKWPRWLGtLoJQxYow6bBrxDWEicfrue1nBYCXQqg",
  "key6": "4JmE77LvQZFwfcoGLyqgP1k6fa6nYG16ViQmwfvFieea2kUTgpG4VRS5aLvF83Ny32jSA8yLkyYnKZc5nUhHkjjq",
  "key7": "apsek43aSmiW3xFeJJHtxiBGkeaMTZDjdUfDzxqdYXkqeUF1Uy44XLVsPPxg6g4odHPPZBWebAbYe2tUfi2XBRQ",
  "key8": "QRXLJFUJcdyGmg5FqC1T9QJUAzXJFfzYu8vbroZsE3FuZ2vNiQYWCiFJmBPuqxEw9iDE6B7DqQTLfJTLuGw3BAK",
  "key9": "3h7W9cCTP81BcSXLm95xNW31TzsjhP2UDx22jToJuWcpok5CDG5777ot5FCUmdLq5c47ygJURPggL89mEmNsP6TX",
  "key10": "4UJiuLrbD14wMNMzW84TrhC8UKi7ZvBudAm6pbD5oZyAdKYkHhBqbJYDMeSmhHh8NCifVjid32xdeXLfh3V4YUrc",
  "key11": "3accVvwNCTJxPJnvE5h7VnC2T4AzDKSStDAb9ihvvbCKEHBMdowpsxixkLNX2e5WE9eT8dPskRvSsTzr8UQy4JRk",
  "key12": "5XEZ5W7GNPU6RbxEzqhhGsD2CGzQriuXTqyM3EJ8vmuQ5FkKz1Z5wxHXm3YaZNWCQBPkdSzowkXJ6GXGsuyBxQzV",
  "key13": "a2u1hbMhqpQgLqzAZLCLvYzUoyJ7BeC7b54enZXk8YDX4ed7nGN9veG3mB6ZMen4gG2Rs35i7rXupri4rNgZLY6",
  "key14": "8BAfs4wnPNB144PS5XU5Bk6RiLAxUf6gtkAHJzp9i15UT23goiTSbrM6LpExhUPBMJskcTmz3qGULEWZihPrE3X",
  "key15": "358pgw7ZwUGpgfnV6hjfBu9hx9kyrZ954CBuCUxesQUx3AWhpvWsxgUoRGLmA3wRrLpaB24Xh5aYUQ5H1gZGPRd9",
  "key16": "49wcpbWvfpxVNxFyDu4i6e1M9KXebG7GD4farX133oD3wMzqGwtpPZsfvN3Z7aDWczqDyT1epueGFw9TV1QoqDmM",
  "key17": "2XjLKNxZybLaDYCxM39MWwSVrFWmdaQribWPSxoAatNaahsenLsFytr3cbv2tsNZq1kdZZVNDdgDzLNgtYt97HbW",
  "key18": "46FcjveCjySACtUd7GVg64UZFfBKPNiptWBkC61uHAED6pCk7GSvxEpmyvF8rMLxdriVWW9EPUrBqDjkKSQMRDRN",
  "key19": "5rrsCH2w21EJMEH7hXcx3XJVRvqJQVkBS9rwsDbAsE8xrZ8Up8H3Ca3Gmq9NaJmLH3A5PgzgFNSXeNWdNwX4RXch",
  "key20": "S5WeBEABDJN3hqSxU5MVQFoWgwN1HYFXnbS7kzZZ98FLjTteYXiuB8QRnES1Tr7vnvgr5atupangB8X3m1sYmCx",
  "key21": "37FPpifhyeHg8hQkrLUZXsWZ3FyzHzbPhKfPjRWsCd8NEVJD8QeQK9kEUSHhKXfSpyqFfRwBkz2jhH6pQTqgDySC",
  "key22": "5BKxLbU9f6mSK3TxYntjQQdNEdmFoUKWcoFhHxmB3FvUTXF8BZdEgBGNJnrndyNECWECLAmtgaK2b5fjozFXXKA2",
  "key23": "31k7iQ9FUZ1ftWuEP1wHdFT52id6APM1m2QfsrtTHXhMgwyCwFp4Gm3HziyHvoZv2yK1rF7gsyKHKrtPL9QHikgh",
  "key24": "3vNnZrcmnnLJcCLTPTZdrhYwxipBsxKCMqaWrCaWpzxxmpXjNG8ZEzqzu4VbixusDThyN8JGeQtkjorraM3Jrafr",
  "key25": "5K1CvaZKBeYycfZWkb5MjanTnUhqSnNaAihEKZ5hokp8xLMxoMWnio4DAnGGsMtnnf6jJFvZNrVZ3ndAa5reqKQe",
  "key26": "5W78vgCVVjxWBJ1Y2gzQNa7H5C5BPdQmfhFecQ8Ci9ahBRm31vDWHXgFcLS9gCC1JkWvtyduTxV5HP6juwxLQEgW",
  "key27": "3atyBqWHqVBi3v2TisHkiQS2djdbnS3E2uppatyHPibwGCqEVTRgrKXEwgxVnFbjDmMMW9MESgWG3wHw6XtDqpGt",
  "key28": "2dn2WqoQEs5NNkXRtDCPYGoyqMT3VBbPMVoTFpdgVd9f5GGzizrB4oh9wahorBWvVroCaWKgvbtbWUAx8vhtv7Ff",
  "key29": "2ZqNLXzuMNpoiiZFvHnAYJj42VbsXM5qM1fqj45QRvYwtTfcrbRdr3tbRSaHuMSZv9uoRCP12oc4SHhHCo1pA5kR",
  "key30": "36XZS2SewKTo2oMeNuXseVQ3bDbwn9S53fLqWknkQZCraEnWs616vdYtiJ2XSaqkRBCQNCxZBBEpRipBjFyTnqo8",
  "key31": "5qSFGTyxzQ4pF4kdBVA1kPMKcBe63i1CqfHL17V9orxYWoC5qaQLVa9KEUbU5N4YF3m8Ky8sujPa4xT4A9wNfRLL",
  "key32": "Z7yFbZ8P52oYoLb1nuREL1UMRP1qq7eEnAofEtbhehxXMVp7YM4XKzAPuTCqrcx6nt3tfdruHcwAkpKAVAXovbv",
  "key33": "36bT1AZMrcVqSgSiRKARBVQvXEpcJHc1XsQMZ2fj9JsnriR4vQjNJth3zfvCchDnVScyH2pL1mystv8YHsiFsvdP",
  "key34": "P8vNkjNEJyuoBJ5vBAttHNeK6GbrW9zR9G3SfxMUg7X94zwp98aby86MkyKtx1Q7tEDJRuYcdvxLxp1vpUe6gUK",
  "key35": "3TMqudPpU2dNMqE26UaoP8JKXimsNEFx6Bm7ppknFgXKb8tNviRXsj8ft1ipWev4kymLrR78j61CRbcoPosMvE5",
  "key36": "fmQ3QLGXtyEftw8aN9nkgwsPtqeGgPDMVrnRD7rCW68x2uCJxf1qg9xSWpTaKgDTAjmh6Vky7SJSjugGkB8zhz9",
  "key37": "2pMsrAH9UvoGwajPx95v5qQwvsZ7YGg7aSgQLCf111EKei1D872cdV9Ywbuz7NERyccEDS41cH74BMGdYnDVK8Dx",
  "key38": "4xh6Y4uJF5NwVNQWrGLqgYYg86LB1xUVp27neeYGUdRAWGbNpqZGE4KVovcWqPtWXXoTJUQQUgSpBzVxrfaXYXy",
  "key39": "4zGrYUWGJ8zs2Nrns98Ppq7VDz5mr1qSseKdT7Fc9K1j83woCESxdftJpjwy2dXRQGZsWwYB1AsuZpiaVzZtWYLW"
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
