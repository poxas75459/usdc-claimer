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
    "3RaVEirhvrFJtFwmDajcbMyD8cA7FLaC4tWK5WCuhRuVREuVondfR3bPP4tS698aY5FVrnm8tuxQXLLymEXdhYfr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22o2518LZuEb8bRpC3TxezHth9qr42pKGuK24cKGXEAbDcu9AgfqEfBbbeDaYosJhUUKsuVdfRBaqgoCRbFpnxoL",
  "key1": "eRrVfCxtiuTBRexUuKGiRAgBMJp8XoMFvRj7c9D5ErCsjSi3tYjPw3dkekDSLSoSj4RXAaGzKpEmBdT5BfTARaN",
  "key2": "YSStoKcMEV7Mzq1hHfTtqKuzEsjqprEtXBUKv9QZf9pf2qqYMRvgaeFFR7eyfon3q2Jw2dAMPTyNVnBQoFgUARG",
  "key3": "4gZomLBDnqpSrCnuMN3hH6zDbi1cuki7Qm2PvcxxMiowQxQmFX6fpTQDA5HbP6YmQ8aS4tCeC12dyauH2p6JUR59",
  "key4": "3FvXENWE5Qrx4xQ5E7bVUZVt9q8tcR4Uc4zHRYmxn9eo8MuBkV8MbhxkL1PrkZPgLgkrEeaN2QWvYtZwEMdTyhM6",
  "key5": "5YJTj4NcuarSRFTCyfh5AZ4C3a1nbzswYCUUHJfUMWDipfxao9aCbvEvJY7fsLvtAvyYJEWrQBs7MmJ1b35rBVHa",
  "key6": "2Kcv8juXy9BXU1k9ZdPKVdy4d9G6hJveN3stDKteSpbvifxYBVDbuL2GdN7Lv1HW7zrZ6gX5UxkJRbSmMbP8nUb5",
  "key7": "46FasaWqWieFCCcwsxQSFz86Z2qTWYRhjJAKSoRp4dBgwV2LxEmRLm8GRM5NwA31c625yBX4kqvQx9xRCmCXsEvX",
  "key8": "dL8BbjANKNrzcPFfRwZz2yuQcf5e4P5ZvTGzgqfifnDBhoKBWHaiPTSRPFLJrgp6sCnP5CecTcHnWSGKvsWwhRN",
  "key9": "fCR2bXkoqJzhqZC69aWowUtzGGo9Eg4bWjJAYzkW7zaf7KAmTp6YgEp5KyJfe82iZicVShnjBL12mRueu1FGdtw",
  "key10": "65mvEQit5v21AZX8LcqW9UmzRgDihTvJVP5QMVzVeGGAAydxTczk6zqvDn1dFx49cUFhT3WSDyzzzMrmXwdwXq9n",
  "key11": "pC294Nj7Jp6AhSftij6ymdCh4ts827YkcR2CztwbrVTJ98va3BH9hTmfphSMm5Y1vJDi75Ue5RHmJsgXoqAEJGB",
  "key12": "5M42RwZSkwQNQ6tDVMweZuhn8VjFtALCxv79GuBvXRmL6oaWuYYM8Hs3SKG1t27TjFsVr225kTZj8n7R8GzeewjH",
  "key13": "3feRY79g4LjENuW75HYGxBqX5vSSg3ySWNtrEJZxYGERSLQ8kmgQ62zDSuWgiDacHgYsFqYkjCyNu8HJTTohuJTN",
  "key14": "5PeLKacZjZ5WK3opVEMW3PfUvnpRwbq44efKAanFErCEgRygvbgSg4PAvY6KEwWUsz8V9PFpNrMJ6H2Rpe5t3Cez",
  "key15": "4a4WUnEWoqVMdhFr6vgsz25NXP7mqu7cEKaMCcdyvRR25uoqZD3ssdyTexrGHdU9g2FMBAifw6ddVD4Q38kJn5KZ",
  "key16": "5s4ECBu4a6qLt1CaNWKM1opjhwevTQJTg2cYxgwidA8bbrxjQ5PgmXA8H7qu8wHE3MtF9W7Q2Vdeoy3puKYi55d8",
  "key17": "3Szxe1aDEyuQyRNdYQw9gAxXcC2j7pomB1yZsj1gsFRDAKfnuCKcuyP9mBckp6M2ZxQTyoosVZzZBScSn1qvzeiX",
  "key18": "5FenFioXfcxAz5ejeEagtH9sXTh7Xonww5jMDnntR4Gjzaw8x1PMcXb24uHYru446sF4eawjPTvzUdKdHZdX1nkG",
  "key19": "2Qs8J5HvSi5vXksVWnbX7Har6NywZ9rjATAsfWd4pV4bA7a33rfuQBhmvN5FKYjRhZSDXKBdGyk26ZTU8rJ34tU9",
  "key20": "3pWjTiVyHX83vcAcWqu3NUSor8bepQaXSSymFbKB23FKYUn2V4hzoFdig2nySKgJoju3PYx5rnkEpwxntugKoxxE",
  "key21": "44Riapa7jqfpveuJYcgYnnmgvjHjGopdtiCDyeZPccJrwcA2kZoVEobAzaZK9b5ULqnDZRFVm9MuhovjTes1zj3i",
  "key22": "zpb6hUGdkY9TFdbdKZEEtJesngvSnA9yshwgtgmtA3FnwkqwTQdmdsBZi7AMkitxKwmXGYFhFnc6PntoemZdksp",
  "key23": "21EjyRCyd9Z5sSsveytvMjYKjHSa3wmAtMRNcqySQ8MvLfmsBDQ5PNVvUbS9tyZzYDBJyNt67Z62VD9racCQ8SAN",
  "key24": "5cLxA4ZYGA1i3WndfT8xhw3q2ZGDprw7odawUmcBgCfoonTky4LeB4q2CmHqFmP7aGobVfwzomK82fauRffEp6QB",
  "key25": "4Pq94zffnF5mhpkzd2yqNVTB6CKJUorERoRxsVLdxpVa5pZ2UJ1AgyZnnxaDeNJKqgDbjpHEsavRje32fpimVoNC",
  "key26": "4cysNkNEqz9tA1YWTpxuXrmrB6kK43WNrhywACYaBiFDceDyhAPzd7fWqSyjS9R4M5AmLgh2FRNw7wKSLUokd7FN",
  "key27": "26bV6MaQaYBDP1C8EZXN1DWqXTZKibjYPJN1vt73x8e7hnCxW3FFWZAz1BnatLtPyVyc8HMULJ9XLsQZ9De75bQX",
  "key28": "3tKGGHWx8w4FYQMsnAiRGvjoWh6Whdok2YpUD7mLd3zqUSN5ycd6KBbManyEdTTyDmdFLvv8Ke6QN58XZxVQ16cM",
  "key29": "62rKBew3jbjvCX1y7a2psyqLKo15aS7RriZzpSLdLVmR5qE3rvQwNGCSw8zGtLiir5N6gsyDikRYR6bDnE6ZZH4b",
  "key30": "4LZqU6eGUf4AGjTbwGTsirrubgwsGXW7s2FHjf8mgb49sdjpLTWqGJhGuQ3LiaN4WfQaiJntWuTdAmrVXz6sXuAS"
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
