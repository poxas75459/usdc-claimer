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
    "4Lg9TBb84wvsiLve9Qv3vKXdSyMNMjLryt4HGg6ZzqPZ6edWXTkjL7bNQhRK8M8p8pCxZUYu3aJwst8Yssb7Uge8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5watLrJAboSjeUxkWYfAX57tPx1BaWYBwtpgmhceC5zq7kVwSqhYk9PDdzKjdaKcfXoPUzKK7jbVG9yGe8kC6A56",
  "key1": "3ey1m4tdLZHWzh7yZpvSay895PkuFny3GLy7SoJYDXtxAGMGLDcSiD73wxdoGzFTmvjSs9PriuShfnYr2hkmo9Dz",
  "key2": "2QxGpTETP57i2SM65xT2cBuEFNwbvfECjZT5FFvXfUeRbNNzeB2EgBqn499zQEctM9S7VqJSDocMbJjzLeNRPXx1",
  "key3": "2YufNK7xLdxmB8Rf7Lrp1dKhtNnRHhTinBJodrBMX9TBDaDGnCXyFSTdfdmZuDFg2QpUU7XronARFaNJA3nfwUod",
  "key4": "5pUgV7WWB9vAYnYRyDM2nXkmwTe1234b5FJDvfAMZ8SWHtQvJCg87yFD6Xw4pnuvrmVEwAvHwoqDp9XXdP6gWjcK",
  "key5": "34kZpAjLPACsdEwqU9Gh2HRpd7JorR2kxoJB8rXDWXY8dGmpj8xjxFX6e5c3ydyMFouTyUMHov2zQUGpiuouQd1c",
  "key6": "2kpy6raJngJvgksqA9J36QaTtBzhVj8R2AyfL5wEQLky4cYtZ39PKHcDjGyZEwNJ2GKaUL2gz8kguUWmbK2Z1XCB",
  "key7": "2hnpwoYvtHSRNSNAvo7TdidfiaxQpT7143wgqmpyvVwZFM8VMsbWx8F8XkVbcZaeMpe6oySVWapUu8PzcMddCkZf",
  "key8": "UcVFWR32KA7Qy3tVBme35Xn13aocfrLSQhhHXV4m7M7ic8CmH5ozBpjKHab9xQcXvRmjrg2k9DQP6FVbTUbNSaP",
  "key9": "1Qcv4k2117X6C7ZZC2PhYq3XhhbJ7Q3ZCocXq9BuKJGaeSsta4hF86HWVepPy2ucWi1ErKB8a6GrvHdnxhpQdn",
  "key10": "38WsA8nh2eRTdVpRVkkPGuop2XLjv9qjrf4Z7iydYE78319uPTixj16FhZnuLttEjybeCSdLR5j11PbUxRctgRWb",
  "key11": "2SDibjML98rMSVzzNcaYLqbrjUNYysfrByd65unt2S7c5jErcBD28RsVwwDCzLVyMi3oBcjY2dvLRBG5bRa56n8J",
  "key12": "5YqCXBrCJeJPDfWfzUGwzNqHSpA3Uqzgu2KmuctQCQxcNQHmnc6aubxiXRgjYKgS6QokjauB13SVnkBnYhxixt96",
  "key13": "4jZgJgGy3kTXMR6F5SgbVN9Ko8BGrgnoUrPiQ9EGpNz2NnQYrcBZuow2xbsDgPG3MKMpwE2PPWjgo8HPTQQUyTnN",
  "key14": "4PPZKu8SPcwJxnEFFiRAGujL9esLjrs7ByYjxyPWuHKp9K486T1bJyo3xrzicXRXZdPz7KBJz6QWYENcroMeBZTP",
  "key15": "i1wwKoomScckrNeCjPuwndBNYnXL6BHFXmV599bcGdYFFAJJpNyQH6o7ZYfs2vwUSk55XFnm6kwtWFM3DLyjnq9",
  "key16": "2zE99mAmAopqmVNSGeoA6EUJftSMS3VzYL5Mrmt5TDAKgu6RHy3qGMZMvXhsBYwy98FfsLH4zn4wCNBzcwLi77wR",
  "key17": "35H4EYtwokJC5yWYLCwHZoWwzP1vSfnssUV2qRKawoDG8Gx4yCTvHYCZ7yWLR1uRN1LinvTxbxQ3dXPAdh17ETXc",
  "key18": "2tvDCtRnTc1YoK1uEJtDiLrsEQ86NTrGb4Ke4eZuu5ZjX5QxUPvFx85GRFcV77njpTJ7z81CuUqhK2cRaP9XPzWL",
  "key19": "2yhC3vRkEr9aky7RJ1H5pU5CtCJhMytdUGfDhyoqTFtD6g1zjAqmcUd3teuoXxNr5B72MqKkniGDEpu36thSoMcd",
  "key20": "mLKzsgsC1hoQrkBULHpuAL97R8GFuYswfLA6KGADa6yH8L4Zfeb5RexxdCXsPFe4zWt53VsDVAkPsysBkgWoBRa",
  "key21": "3vTh75GR9CQaQ5WdCN69QwqdVAWqMVBDRh69fRCpbTFHovs1ZtASUetPqJydBFQL41qJCH1RcmoZhfjG8LWRHVor",
  "key22": "3oHA56VdeKF1Ks6pHnba2CQR731w29Lv2dthkzZ2mLKUHGoN3kNEFRxeKHLMCseSb9V7EN8AzSwtm9TYQy7GCvV1",
  "key23": "Bs6867gjLpgHEQEkPogop3QGV1RBhXYkfVQLo5RtWP3DUsdZPWfQ5BSWa9rPHPkD4LP2P6jgKEDkJ8UjryEKwKP",
  "key24": "2k5PQMjuBCLHjeWPGaxFg3fgP6gjGmjCKw2AAFCSLbUgcS1r8h6ZcJPFoDBxzAvg72w4HkRwxeH3kW9JVFmS7McP",
  "key25": "2a72m7NdcxAfpz62zZmuqMUnkXMoWiHVszRVjG9cf8751prcK6MxAWC4mGR78mYzFVBgFggHcyqXvAnb9pASMLc5",
  "key26": "tziNbf5wo9QnFmKJ9U2gts7niEeuWCYLLuNoBUL9ZUR1WDRZfwhz4PxmAsC2H59X7R54YT8Hi2eFaoDraE1xoYN",
  "key27": "DThBUVZdFEYAHLaSGK8YPF6neQKbq4pEvDQZSfnL8Svad3bPBCpRTDqdgoKvhJSnpLTuWHScpEZsHoXH4oACQXX",
  "key28": "5nbGFZ3Yi4UWGaYuGVB6avmfD4MK2dhEf6eEPgH6LQ4WokJoM6azQVYXWAuAAGD5JL1dnJQmSFrCjBgeGfhMvi6z",
  "key29": "32P3FBCZXf9U3qdhkBHAYGJVw5N45QPLcXnnV351wRXwo25SxWpdSk3xDCM1eiLzp3aXfz2NT1X7ybudNhodoYfz"
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
