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
    "A3H8euPZ6dBX9VpCDZtRsXG6TfhiyCeGwHdFjUUUJDQuLnX97nqjz54rmmyG7hoAjzpmCmnffHwSoHERPxqZgxX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z6yCjSQ4L6ZvGJxLrbuif9Pw386iGdsj7Pq5DL2eazVPPzMUjJEXAghkjAHWo2Zu9FsmYNSQZNf3A9ygQBHBeB4",
  "key1": "p7oQMpJytYBuaFyLix3AxwhS4V7QxELqkCiasP5oP5NiPVkBcZGRTP28J1sK6ouA7DxSFQuYqcFzwhW5xM3SAjK",
  "key2": "5qBDRJ7nEEapEnspUjNxf1U9uagxbUE1goX3LPC6zEKBk7LCV1nSvCg2jv8ndbfo4XWoWmstGWWxbmU4kYCMtmtY",
  "key3": "8dM7tyNXEy3xSsxdaSNi6xSwaZweXsaFHdrz3gnoeb3J6B2RPwwJCF61pSZkMS4p33Y8qg48JT41bzKcv2NASpB",
  "key4": "4hArsEyR9zUKwmi3uNYEeTvqfZyKwLTuFBTebEUWsddeawYU1pCH4ms9giFiU6ZswLkjGCGMHp4bDd6juyU1zkrg",
  "key5": "2s2K58Xrmx86TtfBNyQYqWAvussJbnX3M1G1hngR59BnpWKi6nCbrW4Jhs98yqMxPYcdnimhS9ktTcqS5r58Hvd6",
  "key6": "VNjBJPkMA5T9vQUmX38L1yQ2cHy7bUjhVMhbGbJRoLWtiuLBqb6h4ApbBTWMyGwzBFBnGoQcu5iCQg29MRuRtz1",
  "key7": "ZLABYGCNbxkLBbkdyQNe2AWMoFYBjSna4dUeutg2BxKSKKP887PxJ5QCrcxuDt7LaAAKebupwVf4u5ftAFpNhuT",
  "key8": "RE8NBZTb1Zf1nzCnkaeNQ8VtGErpCUPNvM7e4MX5peXoMzTvfkjKRPfd2S4kX3j3RHRfkEHPEw583dDzJ6ZbnUo",
  "key9": "5t46bkuRaZnfz4CFzM9txGTGvf7dhQMM7LXhUP3mTqgRxZK7GrV5fCNo1BstTdjC5t7YcYsYYyvAAEULg3DQajTA",
  "key10": "4Mn4GFu8MEh4WsndgvNeeNTBASH3eATpsgqV4aqreEzXvR2ZyQWaAaEyM37gtsGVvwXj5sx9SPg9JK5VMERAU8Lb",
  "key11": "3HzJSrG7RegKa1gZqindnPRhGBz8p1sFV2yH6fXZSoULPWEbysy51dCdaLFeXorMqSNDYYzgG3uYpNs3GJgffUFY",
  "key12": "cMHkhqdRY3GeDrYzTj5Ajgsawe9WKuNWgfxm9n91g1YwP8Fhi2ngnczTDmg8fakXpzV6oERw1UHxtRmvpkrXG9Q",
  "key13": "23iQSiHtRSQK386jfdmb5j6yUJSGLPvf9TUoxXNyZ6DHYSLDJeAYkfUE7ByrPAw7Soy8zFNpjuYQuV57mbzwwbon",
  "key14": "4vu3aMbPBqR4wRiqPnA11ZsAvczbjGFsMD74MHHFQ5Tor7VNKu1HUY4ibEVNzMR1qHPb4QYiAYNj7TyT3CVrWead",
  "key15": "3YFvSZmUW6AD6a2AFAvYT8h3oCGuyCv3Ju3DoZGeXdA98VSC5X6f1C8Qs9Aiyfwd96HybKpNDWEayUaPqS6aLDw8",
  "key16": "4MsdZw5gEkein8ZtexxF32YD9CurT3SyEPaSmcnfirZGuG5wdfz7PmPPuyeVbmYLG9kJGHkNJu7Ffu5qjZCxnFid",
  "key17": "27Wy9TwtqEA4eMQgwe1cDE6Zu4nfVJst17P2YpRBbropgijsWvW59KgRViMfLazA2Xp7dXd4GAYsVDBNUqq1CdsL",
  "key18": "5hZj4ZkCPZk2Awhwyd2YQrJynDRnktPrtoXhLzhzUcX4cDLpJU5MBgP3NeYjMEjbo5StedrwDFxFqoDVgn87JRhQ",
  "key19": "2tjArUorWkizT4dLUcVRy9zBDaKACxK7Bj2M355Xwbw7jpkqZCwWwXeC97AtzghN2C9cETkj9qjdNRiDyYF1QafY",
  "key20": "PGHrxLxebmnVpLfSPS3e6YcaamxQo8mJ3EhyQ71tNo1mCYQqyE6qyRFMFaR4TnJhKZhbBsMt5dKtxPf1QNRLKjh",
  "key21": "tiGutuTiAUsXCtvafSR9Rkz6munMEq7Efemg4FiCBSFV5P7o6PbgGnB75vn7qMcGEGtTExVeAPWidkwwfN8cVBg",
  "key22": "2gQ7sGpEQf76o5Sc1xrCYB5FCUcLRg13AHvDorT6gLnoVxDKZGUeAcaJMTSqLWTMyvQvz9fdtv7qjJWY8Bk25cxK",
  "key23": "Ri1xu5znjCGTdMYRFy9rFtPHXqaCpktMY8FxmANrKponnF4HoCrm6HDBz135Txu2YHvu3p8n3F4N4MD7Pdb3MqR",
  "key24": "64K3pF2qnC1gYBpN6AkK9arPmDkubYDGiTVxPMwqnj5o4hdohYdRgAHg99c8EuGaB2Tx9rnosRkeePJmnShc3j4r",
  "key25": "5Q3bpDney4MDivn3UwihShQ2f5KqsjjNGgBYfo3mcX1dmKd6MZQgzo7JAUZARhvouJeXx9LP2Peoz7oqgpnNCqhp",
  "key26": "2LQTnoNavd5egfuVT2YijRayynnAQf5bZHxVhbxZnK161JGf4NQtUSTCPxMDhjfrnZTvNwNaHV1EGQ7fUyBJNCpH",
  "key27": "4spawk9EEKX36RyuDWzDisJk8fx5AMDapRwzcs4BmsA9hSZRqx61FcUg97gKVvFsDwL9QVctRABiLetaUyoRxU4B",
  "key28": "4NvfnhRaXt6WsZDkjQJy7kdjNARUap9raZAjUyXfge7gGr6yUzGk7cEZkPrdX9G64zQpgkzZMx1e3jyYzfyx2d1m",
  "key29": "SdhLzFZtbTo8YiVwk75fZqxCdybhSx7tCy8bD5h2NZz2NhYDCKeSq1xmipPoim8g3Ydm8QLJnKSC7AD5pJBoGu1",
  "key30": "3nsuQs2fqGs7bBnf5QqyiHU9558jWQCbRQuhp9zsNczPLtwPtcB3medoUkaBkdVqU8Bv4tsUn86veivp482td8Lo",
  "key31": "MHPYJfWhNmtmDaBKzVh81K2odNUfqLmw179sBgmvYnhsmaPuEei5RjsujiGBKb3SWav1C4fvZ8PvLu86G1uDcyH",
  "key32": "3nRuJS1Bj1C5uVVAu9Za7Q9D9szrSDuPrADwrsaS95ZrQu7A4geFown6FhUmwsWsX6ubM8tULPBMoBwtxvVerBi",
  "key33": "4YTmkJ8wocTSdTWrDGaH3PeaE193UMRbfpTp5mWuZ6Wn67vnzeZQBqts1C8VHNgzBuvGZ7ss7D1mTYyu27gU3Hdj",
  "key34": "5yTr5Yb7XwZwEPynTLFVZAM3GawiAnvgNzSoKgbEMXAeUPyskEeArR7NYqHB66rWgJqrKwA9UiuF3hCLF2oBCKy5",
  "key35": "3kSBaq2NSL5aAHDCoSQZ5vBcJqiUDRjPGXSosrH5dMtpXP6Z4B4CWzL7SzPBUU6yZBbParXrRzAyEk1KdKBPUq2K",
  "key36": "2UU34H9JR8EpLdkyVqu4LGCxsya5tiWFAtuokRqJdTH3NkYx5DhvLJcQ6Ppq3zfLYXKqQRXNL6kWkVRyo2dqxGez",
  "key37": "w8zr6o5wJy8XaNCZYcaAw6Aiz9z4d5FYj7ddNPEs5xZy7ENfWdQSPYD3JvvtJBPaftCLZGbAqKQUqBq9hpq4KwP",
  "key38": "5vNMfaHrcQQyLxhTEABuHTyNpe8vAHgzbyeu9BCyBD24PKVbzfq1b4d87CV9c3AAZtyuoAsUkC4FnC5wJRnSJb5B",
  "key39": "5gKt1T7RrpZbszV1T3srWkC4pT1ia6v6vMpvL2WFrkuFtSmfpaPQSJYnTpZXt9tkD6tqXEZphjbCinu6jmCzyddL",
  "key40": "5N7vxEyCGmpWRXEU95b4CBCzJSEK72XGzDEbfg2HJszrn2hBc8LYsiQ7XfP6AmEMxNttZ3XERQ1EWEWx4YCoyYUf",
  "key41": "3GTbG2ixkYRdLXohAchArchMgge6We3eL6xM9bfNNH26TWb2i8MiajWduG2RXxEQUT4z5UFFDquqrbCeK8USk8fK",
  "key42": "21aNJQeZtqKN9xa3aUYnnCaqSWviMHySrHrrNowKjuRaEaQohmpEzPBZgynia7U6pnRP1fk416eb3s8hPGXr1osK",
  "key43": "46W3QinYYMkciFnMwvD9aLWZFvHzQLhZNPcVpTnKrwtXC543C6CbVSD2qqmuWhQKTgCTiVwRZTujPWFef41F9H2j",
  "key44": "2GFV2gsXEFrZCsVsCcQNTsE9pV7mekntqnUH6yqwQNF9RQiviQe1NyZLDzpvF8fV2JNudjkhY1gbNXa12YKg6eVq",
  "key45": "VMGsk1yP6e71aA9CjG3VjvnnBN7KZrZd7AhEqVV1Yv8KVf3k4rL7sb3Vv5Yn81r78jKhrV2iqHDaCEz8NYCZqr2",
  "key46": "5QviwDiWuFYcstWwWnCzrd7oVpvzdcTXoqf8z24wr3pmALDi17wV1GiBNq7cLE6QKDYnH2w73FYDHfdTjqfR4L58",
  "key47": "5nsxmdjkne2VGb7zW5aicja1s2hbKpemTJ1BUquMTMDC2tLvDKzrHmFNUcm9aiXwwD4m4XZkNcu25MGQsqTdbgo3",
  "key48": "5hMrzc8vBrh1QrGmk4h6j4WC7nUX4ruRaRvANyZYNDiueyU94hWSSCUseLtS7MKjekAECJegVzouvujgiZJzFQLA"
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
