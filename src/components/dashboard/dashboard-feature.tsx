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
    "2YX3nkL8dJpMTDeZTQ4yfWnAqB3vtbiiAwDqyjwyDHqGfwSP61U8RJCAg6ns1P2Y1k8m2GyVABEba4MiXcfdTAL6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xib7tPVjs1DtmqrRrhCT8oLrvZS2aqGSSE8JCWn6JSB5B3UQ8yz9kTgmQ6g34UBHe1qBa28PLCz7u4CNXq1gwH3",
  "key1": "59NgMvBJcNShmiDsdEK9m9XdXSyunhqK5AfyTzZBneKexJjHbe1daPzy5kE9n3XwLqfftW9u6qjtqbEGPogsBf5K",
  "key2": "4Xz3gQpofsEpBMv7KNLsjkwBDJJbHycpH69tHTBzAiNukiYjMfPybcyxJzAhFdeqReP8VVqrymrmecYX7tBKNzmz",
  "key3": "5CQsbFqfgpsPnC3ocD9qvaD584oGobYi18fdeQq9PQx9x5K7eMW6d3ZLzx9oWu7ch7mCCD67Gi7tGhbnif1wFrBy",
  "key4": "2M9YhUkRxiUxMoJzqaLKxHHgW2bk8Z1bPnTr9FdNbTAVudwofnGm7KH2g5hFi5baRpTN1ne3hEBBye6DjNNpwW7q",
  "key5": "2Z8VYT6wQaAZYx1bQrPT7qPPNgZwUvo17efpn88D1u7419AY1UpPDwMncqBZYE4137W8Z7BigP6iMJAVXh2WqnHh",
  "key6": "4TTi8LFYATKB3DrZFkRCuuzGnwxf7NodJFGeG5oamMFcWwCWcdwQtxBctdCvRKFYbrqUVTL24q2PMikan9X3mB6L",
  "key7": "nBi7WrRvWbSyMnn7LgBeDkA9E9cRHAnpUZHhLVFsfcbByXNb5i4xJ2oS7hKnLVo2EZrGqFR5yefnzVVs2NmN2C6",
  "key8": "4M9npP6WyGuDvQMtmbfbEAGM3UWgXgf5ZNLQZPKLmbDBxi4Utqdurq9t35QPCssTyoFNVf3aBsXat9zEKgjTsveX",
  "key9": "4EyvCsEHf3aRtGmDdVF9NsQP6FNQHYByxre1rF9qZ2vFjFJ18EKyGUZT6MVezuZzj5g19xoymkXRhcWAGkEAHRpY",
  "key10": "5h1Mq9qx2osFZbyPVDBFyJuFo6FKYy2KCAWU44WBcqBkbxzrz2RXVuCMBbAknLLo5QNJVcb216gaYsyELYKnD4tx",
  "key11": "4Xns5UFz7FuK6ZGUC4qCiXTam1SN1HZqsSFnboY6xqHEbAJBQCm25FrCY95TGFEx41CCTkNeUf24fGUMRogPBfAA",
  "key12": "2KPENZeGrRFLMZkNQ1DWqVckue6QL7VjpaBwsCcLqRq74pg7rU7XNcUSAaBqx2snZFuBHo7cGhehjScqA4KEbkNa",
  "key13": "4bK7H2h6F7h87wMhqhLu2CfTmSVcBPrMV7nPwhxFBJWFU4Z6csJRGbKSXMLQyxHgF9TYzCSbBJvTbfpCvZpjyNqk",
  "key14": "5cxRqpZx7e4gQY99rJFemCdyyvKJvi8f1tXwzpMEckWt5wSwrax1JYLRPkonsHQ6bB8gVNttoT9MaUTrgYzfkR17",
  "key15": "2ybUECsvtmiETzgHT4zYvphV28GMN3GFqFKZXZuwyCuQXGPtn8VsFfnKdZj4vzakTDK8RXZjqCQwFJevR2zWoUdi",
  "key16": "qG4x93G3nEPegMvEuaaBtN4WPyosZuiWMt6HxV4jDdb8owPi7ArL2v7fQfo3iCM3bBghyXr6PjL1LK2MsARaqVT",
  "key17": "3Hvwv2qAq6p79xs58vY698NPE12qGMfWxaeKGxuWmLD8ey83tUzqBHC3grWdiNxjyzoGvQwZjhDK9nud9FBfPZs4",
  "key18": "4xgju6mPbQNBuoRoV9oNZz4P6P3eowVFM56ne1GLmMJLL8QntMTjmxpnD1RFuMqdzFdpJwJDEsAfZGYW8zxbe3aQ",
  "key19": "5N918Tcmabz7Qk6Xwm9ZAmmX2A71gS6TQvV9qbduyiDYHCHmfMBy13MqxrmCHATr573nm7jwSAWirzkZo8K7J9Uc",
  "key20": "472CYrHor7VAWGvx1RTRvZJ3MGkQXjaDac1KH6z3GYw46xswDzjaksfgdmmkAL8BwxsGoiwvxoTrPWUi6ACxXin",
  "key21": "37fF8LBkyaaUQp8qMxHCB5uMTDdnPMpAE2Xh3uuekPuBfvtHDQRqVdnG6JZZz1HndyS9ANMN3gXjLD9j6i9n7cvu",
  "key22": "26poB3uaVcq9G2vxPgbrLNWDhj8ESh7LznE423HRNQLRrjgUbLK5wYHVfK8BUFYkNyW4r5JqgadnC79zWbHDFyXH",
  "key23": "3J9A1LSopdThj2YUPm2wm2Z9JVjWMzQJLVezTR4eTMMKimXZBtEDYp9QpLCrdkZgnkBmfVSZ6jPd4ca3pyCSHP3y",
  "key24": "4tcpTLjsqnxCLAQBdqaqDzoVALQgb6NMyu66e4HsBRy2d9SWizuY4vFdaejhGeCeh6S8fkpuuxJuRuE7WypiH4n4",
  "key25": "VpC6Cq9S9RFzncFhkmyPG6A283JTLBRg8o2Ly2PRHwZBRZESqHPpiCohK6eGkzC86ydn7AkAGenCiUUkNURdhsT",
  "key26": "3UN7Z7bqTjmYHQjBqAAHMD7ZKP9bv2PDSekWTA8DhwqRsCPXAxfB8hHJi88XY4JArmHxPCqSySwUy8739HQNGJJi"
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
