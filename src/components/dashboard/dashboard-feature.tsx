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
    "3Ua8Wh5VuG887JphxEM2dmvgaVvvV8Z88rScRcbtijq3q5YEJrWsriZTyE5C8XXVE3PXBx2KU6Vh5NPf6j6jRCW3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59e2nXyjNT3sdRnQMqcQRe8KsUpVMF8d9FaJddujJahwTfn65aDgjhd8gtpF5f7tLZLez3xZD4JQpkvxhw3t3jGD",
  "key1": "3yJGxSp2dVcWE4c1PtmRxTUWehsCpft19Vfu6nodGkKNdHbK2xhHxSVX6AQC4huCiRf1gVfvCkb7WDLkr9isddjv",
  "key2": "2Juafbgvb5BwGuuxwwDDUJKPN8DyCeS6p673f4JHKeTNzZvbRPzqdDPN3AJwTcZXasZHxzd9VoX2nXTdk6ds36c9",
  "key3": "5Y6kdpXGaXP1Woohhoqx6Znrdrz4DnY2VTvgBjDuFGvTdvgTb2hk8ZCzXjcam9siAGn8BuvxAVBsmFAz3MCEjizE",
  "key4": "4E4L7F7eHyWTayshn2pqPWpnbc5NHksdu52d3QSKUuPevDtWZyipBKTDUmVbXM1r2sGkp42E777xCFU8VeN6buP2",
  "key5": "5T7kCA5qoqpyX6YkHqfTMhWmsXj4RXaztviFrt1Tg957TVAEdsWoJ5VQK7Xs3SxQkNxtRJeMRGR8gY2f3EXFKvAg",
  "key6": "3XFSPEayLU6MFeJXnzQqpXE371pXide1F3iK4dNQ5wfHGEBnXYpFr3o5bGTmaPAKDuwXoUnjq4NL5Uy7zLvdqwmj",
  "key7": "26FxZXBZSjVqykJ77wQvW4nZ9FWE2LVUR6MVWpXzrYPbXDMB7om3SB6UosVfyVgXFcCty6Pn4aN95jSucdHKzyDA",
  "key8": "3rgKAQnC5qtvqnQEh3mnFuJaBgQNp9P1tsMAizjaQHog48m54mojBMiwP71GQ525rZkiRHGcsn9CyDKVUsaL9ZhY",
  "key9": "4TasFUzD3beLzSmQSHVfoYT3zMStTQtM1Vf95iHMVPWsHtucSabmCzeWStw2FV6eefUUgtNgf9tRUgHJNXq3CLTF",
  "key10": "5BUqV8TpDrRQUkjWuwcrpAQwaqfZoUmwJrKYVoEkwSEhdTvzb5WHofwW5Jv4iNXuTHommxoSSQXvWzPRdR1Lp1RE",
  "key11": "55C9EugrQgTJJTi46sRdT2fzjtAsQFTgGhJ2scR4MSeshYVAQwkNM3MYxFuJGhoU3XGwtHhZjufgupV4Gn4sxeoe",
  "key12": "3DgCAKxsw4tAz8JWbTQNBfDQ682YTH1D6Mgckve3juh48itZ39Tz3HVZoCiDtKLaVZdZ9EHMqbYiJcXqnfxdbMKi",
  "key13": "4Q2qd8UyvtnnhwCafFtnfk8oxjpti6H4E7nTNEKWc4bw6x69ATTQjjvysPbcZZEcZSk5k8zMwEQMvyQm25LRD3So",
  "key14": "4gpZNJiyAgw9yumuWHfDyACWiMaemEFxzdvy8XhgXiYHWJtohDzVsnfUexjESqJWmfkebEfgWC7BKtLJEkV5ugNi",
  "key15": "5ojdn4UinQGAVcxz9xeUUidDiLcgNz5V7dtzWFzdZ3ih9pDD5UE6sdMEaSSUdrE2dByrHMv8RFyt8ZjJAkN4XuhU",
  "key16": "2BLC3rvRc4pBA7QSHfWZN8THSkzLdK2qHpLsw8N5QrWGCDgJdsawf1VYWv6Lg6rUaSh5oaQreGBJYotqdGGTuPnn",
  "key17": "epY3gRwpiFSwkQbhY239ZqQADiiW7JDnRejdQCKrhhKXr3t3DxPEdQkNmDLvMtonoZDrHq7prgGavk5G6iK2n4N",
  "key18": "kWUdqHWPS9SapMy1RUWS9DaiEA28YgJRs3ngA9vp52aj3HagPf6X6HKbcHZXi6idcuDNmxHLhj2sqD1s88F7S3P",
  "key19": "5CiMb4Q3HLPVKifAJ3h7FnnKWbGptYLTBMazmXF51zV93pD2SrGS8ipHyTLDvL6N3LkRE99Nx4DQcRJZeTiPq7AH",
  "key20": "x6TcifU9V2rqeD7ezKbWtz4rARoJeerFNLdUgb56oRhDUi1fLvJq3WwSvxtm8GGux6ATLdL9azb8dC4zmGqm87R",
  "key21": "1u5WenRXVnXZFkTFQasBLrJnTN7mWpcA8FTNRJUchJ4G5aQ2U33hVeX2qecDE77YeF1ZGhGkiKQYW2SUn5oNB8h",
  "key22": "3aoKbeY2fGnsUC29LZYaqGBupr1WnniH5gWHPnxQziwbyQiKpqUnYo7tUv677WZNYDVSXNg7eChutAGkYdzrdbmQ",
  "key23": "CEk4RXVrLs336Q4ivMg2d1umH6af9Em6gqqY91TtjDACLqWN3gf8SQB5TSseFrX3pp8QY7f8LdJNwQ7pNZgpodG",
  "key24": "4yi8z1zhi3gWP1rkKXbXBwrXB3J49d9gGKtm5RdyFYHSJ7zpT3CDoBa62to6xqizompU4M5jMHTghPCGs78SMRum",
  "key25": "3Tap3VQapQEMGDbK9fE67svkBfNYLbw4RjU9ZA7R1Zx9UaMHepV6eGc7fh3nw5Qp1xqDJokm3Le5zx8ArLUtZkzf",
  "key26": "3EzgyCLGh3jYfBTgjG2SSUYVf3mXj16ryGYd6ZPiU7gpbLXjSCRLVtDYUGi5f1DHcu17ifmhfH2LDaerjVfm7uf6",
  "key27": "44q4htaSmnGN5zcXoASerL3EEZrjxaoUTeCfi4xJ4q9vLGktWT5h5cB9evsHjvFWZJPdHZX3ScTALNDg8whhphri",
  "key28": "563Sj4JnMmQQ6M7iCLxLvDXPPFcAUs5EwHxLcEavmw7RSENM5Qmh6V7bkt14KRVATJAZ7Cp3JYagyfJjLZ9GLkCZ",
  "key29": "5MAMzQG5PiZxqZUE5YMiucim4rHj6vWfT9M1xHqbDLD8RDqMKKjFNAQnFv4QpXpon6UQfopWvxTkjUXuvVnHk12W",
  "key30": "Mrbrm3T16gJLmzq7V1f86C8y3B2PJouJhWXhMKFwf71V1JMgRb8gwCm6P4LEnaXEBtW6CWdcKj6afCMWFPaYvno",
  "key31": "3doBBZQUJnbqyZCQxEeS3u4fhqVNvWPVy9M1BoE9WecJb1q3MwELjwzNi8Gwv2TX5mtZP85SPKexVLp5iuQK5nRA",
  "key32": "3jkBfPdR5Vnz3omDeiePy5PNEbZ6GU2PDzBfLbzJ5Lo3LQy5bikdKDvyMQp8nvDJ7wGTkBQCisNKEC4TbbW2ubjN",
  "key33": "49Edb7xDsMLZyAcM7UnvPg4MTdyHn5W1VGcurpMbLs4Zqaumvc9azzADVFrvbFYvhPVTxz9MUEWUhSLQk5MH9nBG",
  "key34": "2gFLinLU1vNCYuH59MnCAM99EuDdq2DBDwMHeNoChx1zc66v8fZ87nbPhpCxw2d7AUFSkLRujNNWKSuDv12XSimy",
  "key35": "2RNXkV84FE9Xd7npmJodRoCSxP3eayH3h34s2qJtAgrcVkQ9TG1KkbND2chYRy1JC5fTLpf3WKtvGAafMcCsWGP",
  "key36": "5jh5wZ6USMdREEugLdakjUsvCu3U4SXjJmgW61qEWV6qUqiui64cjqYWKw1JH1NWkN3HtQErsHMyiPgzQVgfFGoD",
  "key37": "5EE7aKyKivLmV55j7LrFNDv3ZS2aGYdrZFqGXJKKG4diZsCJdfvUPYBM3Liwomq9bBzcxYLAcC8jCFgjYEGTiXtG",
  "key38": "5kbAzAkWVcjEJdnsqydfz8YqhxYkXouSw6qg6ptVnoZy4BefH5pjhdbYHjPzrtYPQeJQvzSpp7aFHW9byYWBfz49",
  "key39": "2WPC67LYAXWdRw7ykuehzBDXWMUWHvKRpj3uXBE3LL2Z49ab2bsqenHSGHVgmTv4YsxjeFbZQSwmLYKeLFGH4mSS"
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
