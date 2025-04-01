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
    "65evvtdoNRVnpAP2N3sRQwEp49iZ3MYZw86mBzXmF5Lb5JZQPoZdogA4fZNbRnrLZhsxXWk8FnLpZzKEjkGYVqQd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g5aBGu1iQFNrSpwcPJvfcn2oKemJkAsc9baCD1bfWGzk7Q6aTUVdvtmnTpneCh18bB1EQ3rUi95wUjzerDBXKPG",
  "key1": "5fKF9QZZau7nFHbPHXSYttbEVKQ4K2AHoGsAkdEYGoeiBNcypPHrDzCmanFMwnVQSmwPjoTBQMWEtT9xuCv2VFw9",
  "key2": "5sHfd7eoCKFi7Ts1N7CJXUKiVxWYPHs73oBWgAchRqyTsJWxSyPewBzYFGryjcJjTCwvLr8TErshu58uCJ8jNgJw",
  "key3": "5nHuATiv6dy9RNzeM4xkWmj9nANmr6oURvumU5wVWMpxVjc3GDXvr5L7fRmAdpiS45tKPXpK7jEEdn5mfAndPSkM",
  "key4": "2x3LXdqHUo67GYDP7Ykd9Pby2Qbe9tgmoP34o3PB67ZfKFC9qWk2AhsxifBRToLJXfycrU2P9XtHsXxAsbzQCecP",
  "key5": "3RHuzzom8hL5G9zrKi9qLwfxeZPnKfCe75U6jpopUkCvTLztnhpVF4njLbarQkpA19CGXisQuydCqs59CeWR7kD8",
  "key6": "64Q1j8e9iGaAzmgCtx4qzKeHLFoUSGF4RGo9oZNWyrby7AbtJgwRZ2rFqPNXQhu5kk6UrMmkDDKHyCEPzQy4DpMP",
  "key7": "3vFzZLWCDw28jDCttxE8R8QvzWoTWhWL5Qvy44FqFnDahYax73HS5rMwUGtbTZ9Yt1rgeDj4w74gKp9HZRVZb8W9",
  "key8": "36yVA7dpt44VJacDhGvkfo52kkYu5yrPzRXhmbTcjkUJyfGpwzWCJWk1BhuLcA6Vcx8ULGTmnAP7zGUfVDeCot4R",
  "key9": "5fjoenfForVirzVHeuRK7M2pXTVfqBHM2BczSPGqATJTCuo5MPopyaXiTSCjgGe3bz77A3sdB49udWw3La18BUn8",
  "key10": "4ke6Qd65823WwwyojKKqavfVJUjX6CwjDxu2Ug9Uxk5KC4hUK6BeUMMkRA2TdUn4dZb8e5VNMxFB3VZBPZQ1k4dp",
  "key11": "2VTGDANsijVmdyUzNsc8Wvz3awjTtoYoAgmxHp2JzqceQ31bAqMSNT6hfCw98Hwrjeksqr9WvmtbQE85ALA2Tqtz",
  "key12": "2XoMGDYvFmAdjSGgtSMbV3HFohmsRghxag8HcNu3gzKACxpTbJMNoZFqMNvwpSoDqTcCsJSBkYcvzpCJnBCqVeoW",
  "key13": "CLVmNCkVrVkmpS8rNsN8HN9UxmZw8GgHQzncwQyfpvWFoeLBG83vs96dr5ietZFsHDpKnMaLN7UPAK3VFVrgiz5",
  "key14": "3wxKg8uCE8yDrR49dowhHbEVdsc86pkhkNivHcb6WVNJmrzWHL7JghbFALJqL7pSESSqfde8Vt4ZLXApdb1Uw2Cd",
  "key15": "4Qo65wkBJKPyLRJWcRDskrvs39bk6XAHX2qbPKUrThNK3ZpoTL8F1Ryw2W6L19hcFNjaAhtVfx1WPUPcpF1Cq2am",
  "key16": "2xtqA93YvUML96aLREw7B3rd1HT3mMgrj5amQzTFosUk3EJ63z6iT6BWXtkeJonnWKAY9a58w3nmswHeJ9HiKHGi",
  "key17": "5KRQhWsFGksqRRT7mb3hJyZTPnXLd6FfULwNigAqkP7QhyyWn2rT2H88Xjo7AMZ6n82TvnYrGE4GiZUQU8uJY7Gd",
  "key18": "2A2hoCWSMDhEycpFZrYYg9k6c7b8iBCvecKoKeFaYqT2RbwZkLFoZgcvNC4NAeMBrD8XqpLHNZvmJUPhTFj86462",
  "key19": "2cxqKydGz7nQNJEdmvoMrjHidkckA7DRAGQDmqfHWEJYZTeZbA6pqASG1wwGRfeEdYJkW9tshcyqASp5nrpvUNWW",
  "key20": "2zWQnEWH7u2vCktUetrGxNR8voFsv3qSTmUp1iXfmhJhVHkzL3DcWfrnfncSGXcexLJrjMNRq2zkuWY7mxjK3qEu",
  "key21": "2UE4wPNG2uK2TRTbVrDg3PkDG912nZ3aeW3XugN3t4LZP8Rx9Xg2eTmLBG5NLRQqKC5Wi4TFZsNgj58HsxhCrKma",
  "key22": "29ue8cSQYwbH9FqkxPxBnV2vJZSSb5K4FQZT5u3xkHUMiizXceXdQgHJAr3CDY76T4q9AYebThqH4XFoHaCMceJe",
  "key23": "MU242UUJjzyXsW5bMH4L1LPXW44B3QYL3Ejo9Yd1GBxLb4uXHghgP6QHpM5Pko9YDt3Ld5una3R5wBowqudwi91",
  "key24": "2TKUf1BADauAS78iSmJ5FP7Uq7g5q6ynWp8sXSyLJtN5G68oUppfZKPK3mQbZYTqSoTtUwwioh7Ky44gkRnt9S9e",
  "key25": "XwYbiyrJuiMK5iJ73AXSjZz1nMhSMCZVxw4CBy48NBMG2zEdDV5GaL4jF6t31faoyKYtdcHNcs3ZeNiyEM87J3C",
  "key26": "3jtWqYuaPLPhv2iAL9C9trLTw3EZHZGHiDuEDxsNTKZ2tsYyPjYxuzuR7jee9gnCesihmrkd7z34LRDxacQ7YGwF",
  "key27": "bfsYfXft9vRFQw4xcM3SeMqDmfruDeUUg8FY6bLz44mY49FD4BQ9z78Eor5T7wKHcbwNvBEBHR3o6iGRBsLjpB2",
  "key28": "5tLNgTh7DBzcRaa5V7sKae78FUUMjjmB7UZYkNnNDhU3bTKhqGkg9L62snKJRkq1aomwza7XhXKbWMPkp6ZnSsDB",
  "key29": "E5vJ6zZcKkfifAof5DQvTtXkJsLTBVREZwufUMaGLeQRdmuJ26FgnKaW7cwPMH4ebdssS4AjqpxcD6vEMUQ5rmU",
  "key30": "5AyCbJCBaas8k38j4HyJn355zMgBtDXgfCWcEajZuCUX2Mo7Mu1pcBf1LvAwNjdLaauQiFY5ykZEjzRLhhYiVg72",
  "key31": "4pJm4SnQhksyUbX7MfQyaELWKuUeUkddAPBUaTzYETtw9ciLvh5ZpB3cQMd3e5bN21Cn4bZaYA9VKWxqKJFutYoe",
  "key32": "4j2FJnAznV2iQL3kmyr8efzjJ7vEzw2vjdpxWRXDZveEoJr5d2GWFqb4iawh8g9AKmpG4VH8HjAZ1xzoaDQcDRjy",
  "key33": "5BJ9wMPDFMPzXLxx1ZVBmK689NDqEat6HTfj8KNaDxhJEppsNKxxHDMrTYXLJB7Ti5nzrHH9D3PqoMoWRGeC7cuk",
  "key34": "5iF4KpZJYUx2BZKkMhk4xCtiUk1xVgtgTKB77t9wnVny7SrbBqsMA17QpNE6gLwY6toT7p9iEwMpmdKN5mhVD4s1",
  "key35": "2XPoyRcg3ERTJ552ritp4rNojeN5BiEMktuPUDN9npR7oAwuAr3juEaFuF9PYTqm1p9PqjXfWnaLnAg2HzsQc5uM"
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
