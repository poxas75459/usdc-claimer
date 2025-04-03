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
    "4WBR7bvTVLft2q5XoPuviGUadYNYimGfxq4aTE4SWFwJuyHxJkqbfLHrDDEPQvd7CZgJ78ffk6G8qYEztUfAYdwz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xEJb71faCnTX63B8G7XvtefQwuU2eTNgEt9UAKn3vfVmxqrBu4BhbzTzivzuFYshgE2Q3YVuE2yGgvPYv18Ay6z",
  "key1": "3kGbV4pSbC7P8QN6VbR8vjYaPULNCfui9MgdQDuHMXmKMcbn7uWg7QRm1xFzhzab7Gi14u3jNw3q81y1hx9MA23x",
  "key2": "2jMU8h6fxbygGxab7NLUGRgh35riPVo9RnDDUiFefmBDfxhoxSMxtQvhePaNCB6HNngyA2BzT1VL88wGgvo8WWsF",
  "key3": "5tHfZsaatmDGcBp2uFuS8eENiokyedYCDEY71qZwJxFX5WJupGcDsHkF5eDRTgHt87WwiUMwjyyztr55vJ3F8L4g",
  "key4": "3QgAhnhjr8ZNFR9sg4SDTD3Sybxtg6XYduanxxKBzh8KwqunVNGWxeX4wy3vZrGzgZ5HnBAktmt5M6VV7tiYpd48",
  "key5": "4eiyZkiiwmrPJHUzniFTQSwnqzbcQHjjW8gDSQW5CnewCkG3fVkw5PtTsknLfmJqr48qbJpHAMqXsmQHVPk3Tqnm",
  "key6": "3oobAoBAmhRA7aCkxQmVkUhP4cjyjxiQz6Zg231bvePYtRu9nELGy5DYjACxctwmnkGpkUF3o98VCDF8wRFUSwpT",
  "key7": "5pXrDxtbuvpWajc9BBGGZy872RX8SXfjEEx9My4nrK4udhsamYx6adKSBM7ACeLYbXMmRwcBLcVgYN5TLL6jjyLg",
  "key8": "4HM62VEsuNr3MUgsHwTr1Pj4QhJHWmaq32vQ4CZHbU4SEEEySZnjNeXs6ZJquMNDPu32KEqKXfBEFTit2k37Y7GM",
  "key9": "4r3uQbtXpXNkCohJNoEB4b75UFh9DSerhkCmQm975GczaV71KzB5EtAoxvrSXNtSk3EE19pbkTteg9tpMqA3RLK1",
  "key10": "4ZBumR7F9eWW5aMFjoApRhWGLjorQKQY7wtKG93Qb519tqyuNXXZPu6ZT8XXRXbAgxh4NumcPWNvYb9miT96fJrz",
  "key11": "2MWipJYkkdF1dvPqk6KGhUGLGJfSGN8oDZyXAFiZe6CX2TUjpiAJbAosw5VTE3QQUdipETUaLDPXsbtJFbXqMpEk",
  "key12": "3iXj8MFRU3cL9NBp8szpm4T3mDu8qFVBcQ2g3UYBZzqQ54S2Ppuq1VgFaYn9vJDjxuv7huFgLpM4RgejKg1A2SjN",
  "key13": "JrQ8vXKoSchn7FTu6Bb5uR8sU6T7DZauZdeLMWmysQTcqVFpQLFXYbCVomMawYe7pSnYjRFiZ9tkKGEXF4mvMnt",
  "key14": "4fZkU8zH8aFWB9C3YRJ7SsM5qVqTcNs5GQ5dYMPb7GrMBkPLMF5oYqp7Pj3Aw9NsA2pgrkjLDMhMPxyztrsMYFqB",
  "key15": "f3xVunfceerAFqjDVr39hoFRqG4BXjF5NZRwAykD2WMacnZifjm4xPsN5S827ZSGwAth2YstPUjidY8CGkY1jyK",
  "key16": "4KSoTuHcGFCn8A9bqWLG9zenR43pCs2r1q22JypmquBDQ7uFUPzib1VQiZ4BzQwZRgHJBXFCEQZyurohogtUozFy",
  "key17": "4AsQVHExDXfE4y98A3REA85ja2eVD4mtk2LbekHZ5DFyUd5YXz5Xwfvy99WZrkgUtJbtN9tQjZQprBrCX3gdMaqX",
  "key18": "2icDj4mg8J84Z727M26sn6RKC2pHXGrmTJ61UBKUj9xtybdoFmmxCjswNjMwgsSrSmEBCfEUDV5c432NnNBuDZK",
  "key19": "3JKQp9ZjbizeLCGkr7SEkugxtgC97DtmFiTKWTFifJeHAV6XKrqtZm1R5bGgnbiN8QipkKdqMAHeUKw4x4D7Nt3X",
  "key20": "5fJZpbYs45yVdkuqPeUnkgSCGVvVRwtQabEVeYmaVYqgBSXzkmgmiUHo1VocoJJ8qQEJuhpGw2vChszJBYL6SSSS",
  "key21": "3JEB5ykPGKoZ1543JhmeZHTXZWCV3ThNY7XzsnXeLYhfqT8ni1aCz8TeeLNUL7nwkMNvmdA823z9SuBhTzxbMqMr",
  "key22": "5HQcnPTEf5zkTwCLP7VoJQ7Q4nL2DQQY1qsqSiJpUFrLHx58cY6RYhsf9RCKu5uhMFvTi3aJg5q1gLw29HRHHVN6",
  "key23": "31YwVaE2YCpQxi1yrKtJMkjQ6PHYTiLwjionCVtG4NLkanC2vEkMU228ecpBngbVGavDzdJKXNeiY8wV2AXYmziq",
  "key24": "39Gu1m1Mb6ZXaPF4i7YBRXSVRyQpoHA9LsobJnSetnr1SMVLJ2AYi3nR3stqkBfTLJYnkXFuCrvVezaVB4wdTiri",
  "key25": "4ZUBMrpkQ7RKdGCFHRSTuCrzZE9ewusFmGPbFenu4Agrsy9LQEXb92zMrnZZeUGoYcHAF8AFhuKtYcn7ykwvLmuu",
  "key26": "5AWNUyriDjSczLDhFxkGfrutfJpAcKGMih82QSQXZUgVTJCQJCKH79Efkg26fy3qW3xrLfyDMjmtq8X5Mm9meqnG",
  "key27": "5z9Y8LKehSd1ythLbvCTHdejd2JoU5rmphFiNGha9AUDAXQvzFJQP77emNXGWuNiooMaxhoPssXfHnvqpxxUAWti",
  "key28": "65aZLjeQ3NydLUy4C51THXQcLDqDDEn1pe3FCYLrHHy23W4BzqLDDYpJeDkdg3JezE8uELDQLDs9psr677jCvUVi",
  "key29": "2ooNWk2iCt5QbN5swfUYdbGvBytXPR46TZU9DbfZs69sPuoM4KKZqkPKgUNLCNNiQYN1N9bgm2XCfLU7qBrH339E",
  "key30": "LjBgxtWFLBmTaNodk27JEJ7hdQQp5oFB89DAvNeUXoq8JG34QP7ir1WMDawYyzFyLDwhuYhY5dFtyYAG6SSe9We",
  "key31": "33wT8AXDrNStBHk4B5ig1eQ24FBFCWJfA5K6TsATLmXqYQ3deHqrbdUVZc1VMi23d1wc9gFR778CgyWY5ZffnUo8",
  "key32": "2H6Fzk4pkUrNYpSLruvNwiDJRDak3GQsLZsS3MHY7ukFhdBUdGcJnPgGcuTwWQujttspC72SNeuwCGtnVhNr47Gw",
  "key33": "GqKuNE996sq1stzMMG59wEUJqGREiRemrnofLEqzTPhovfGYB6Hbi8zqJpsrznyVstoUyhRYhe5Gj5k7JPcW3SW"
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
