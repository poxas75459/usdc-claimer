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
    "523VadmRbCtSBdiyjGHdEJ7uXpBgXkpdEFde5qRSZd7iNrdDvF4P7kWJrxnDP2cWb1L841Yy2LnHDSb1wc1YGebs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gQL77d1thsdNWEwwT1zYzRhtwy4JYAhKrpMLDUR2UoE9ggrkuEe5TrHD1SGHeeGgS1uCj26xX5yp4WEorLPmXN9",
  "key1": "4H6McVD9J5TfQwgZyuEJWAsLLbdCCJe2ebnvPC8sWAcGe4DVvQxTkuDgeqGpPrdD2tjNv772fmX64cBdwfQD35tb",
  "key2": "4Zh4y3pS6RG9caQnKvpt6Voc2cRa5N1buub2S7r2x49e8WHQbs2xmfSiVCBuQNuGFf1L2jHuX4J8upaFoGuhjBdf",
  "key3": "5R1kYDd1UH53wiTWqnUGan1mkqocspMdZNfi1TLqum4NAatX1VoWPxUVsCyQiuaTzKgnK2pyWYTX6wTtZtAkWn2b",
  "key4": "4smNJWUS4PcBriSqLuF7RG7kgLLUd2kLm9P484hP5yhYfKTKHKcVgAEr929fGhn69oLyLxLCjLuzsGK3ce9eF5Kk",
  "key5": "2dF2czJWyxJdYgrp8Y4spH1HYNWS1yUVnM8E3p9R9UBVWmiSZj5Z4jsJcru587aCQzu9cQ9jkZH3rzUgfqWY8z5S",
  "key6": "E5vNWVurKEXacspS8aVE4MH6sq8DESKfVP7xqEzTmTEVm5FJUXkUzmzTvyMKZD7qmzj7ZcT1SUXNQdCE21Bmehj",
  "key7": "4wwwFccGphvJD4vs6Xjftph49XP5XEJ7XbETFXQNBZR6LbBC9Fq5huHtmozdjhyhuTUiX3p3JKJGPNJuyC6n8nRu",
  "key8": "2w8xa6CG64hutWnXJoDVV1zB2qiLAXtEnC3G7L5LmeFmN7AdWSZDUUVV59iz66R8J1oSKNemxZcuYqdNkw9LP59G",
  "key9": "38jxq35tyuccNwyR9sWuCSKQChQHAHbHHXz6QmvjvDsNyWHD6nQhiLtewDEXLn1XX2ndG5M9VjUz9igikW8dxGrQ",
  "key10": "5Y1juuB5HDPFRn59JNj2ikS3PrPaBkanvaUFtNxbDUZwZ4BP6MBXVd4Rj38PnwbrNAMmVynWTvmWzadKKLZPyFzn",
  "key11": "3bcHXgzVR65yShnKRZoMN9d8NuC9ehAzJyznuDhGfRvCS5L9QhioMb9V3nKo4inQWZdyijzWcDfE3WTE5hW5TrRu",
  "key12": "5ZxoyCocJGhXybHzg2LREyEPSATz61KU6Fupwo6S1242kYkebrnhQygfRZp5uxkWF6278qzsjAQJf87aMt9TJAWw",
  "key13": "4aXDR1fwSkvfWUL83ZrCc2X6dhiX5bo8m1FnFPsJ15CwpYMNhDL5hpGTCTvN25rvCHWSvW4bjFxj8erG5WDo897m",
  "key14": "3virEVSyE42o2JjWw4oY1pwxRgXrkAsnAvkk4cTmCYrZiH98gEifyi9QcTcNUGqoMLoqRagoZFd4zg48uSEM47UM",
  "key15": "35HTumJueLX1HTorqRp4qAviKWAJNPTM46nKugZsZS2UnoLnNHxecRdvZAKy6wxd6ns7y7YqiGj4f4T7xQZV9TND",
  "key16": "BQ951fHpLUAJ2G4MvMmiJ1kCh9VujxaTo4uK6neaTQsPZS1Gbixs74oUvGqUHgbqhce9Momp3qEEpX4r8ULY44h",
  "key17": "3uoD2KdAQrUiLffqoDvV97WbKhL2WxU3bJgwwa6g7yopz5oevBKdKTTGKaH5QF6o78SGVTiDBczx9abo8DT9oLep",
  "key18": "3rsS8ezU4tmXCkVZHMNqeK3Bxy5ZmSQ4GicRYdntuXRbQweoNxWVecF6WuxtVxERtcq3Gp53tc1F17qqnqKfQcUg",
  "key19": "277dNbktRpuHym2CLrJXCXEEiGjew2bG7RJepihuZc6g5giwgJafqr3PcCM3FyC7LZ4s3QxGDF4VVJkJHZ1vDJgK",
  "key20": "gcybMoX5qrs3E99znBBajTiQK1ktMYAwiACoqzeg8ZjNj7BP3ULCCgYMwPqpZXVx5PqHuWAJk8rXhmS72yAco5x",
  "key21": "52dTLCEFL3sVwgatvK97TPx45yTiNAv6zfQmXmawQ42UnWbASphbmiHezqs3MHM3gsZVg5xtLxKg5u336HZnF3fQ",
  "key22": "FjJmr2XQDLZcyBidcznk8FMDUJbZwgVxPAfi6bswdvcjxRcfqo5Brp4et9vU3TBjna8tJCd2ptt6s5BvNTakqdA",
  "key23": "bvG7qpA1tin87fXbE3tyCoEaPwHXF2QcKbUUhLCsCSXWsNMJqeFdZwLPpggGNUsAhPFSERBrRH6fxSHgUp2RpmD",
  "key24": "4H6FAsQbxDgFHopnZ9cZwhFC9AmssPHwBprrnYVzc8gEt9JgsZfwTP1HEqwMj8R9bt2VJE3xUP3Qh8DsEJrGLbt2",
  "key25": "dNY2yqkwnEJgLJbXibnP2r4ZUFM7LcPExL9UXyEog4yLBpzoC3DmBYH5EUyEKjeLA8Cwe8XVWHE8Uz6Cc7AR5Yi"
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
