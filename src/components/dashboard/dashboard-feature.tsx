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
    "5SAonoQ9TDJFp8jgmBGDRbssQzLy1tNqkm7Xi3aQrhy58Noct4NNvFw3CFtmPmiLGMkny85m1Kn8GrK3rEYQ2wFv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2swRmuMEE2vyQtKuXbs8ttEvJESyvJTVucvZ5JiYh8yioM6rMowf5KvU3inmdCQJ1jC83mVsshrBVC9xw5iTHSzV",
  "key1": "EK4bHL9fGKC1RiWFMoZ2KwKnrqY43s3gjAYHesm2ns6gQENpyXBrMK8bxX85xWuG79daR1Wf3LB8DGysWH12q26",
  "key2": "3giizYKTeb8jyx3TDbsSQmAuX6YMvmSmuP9dwT9yoxjK3Jmay5ZMRvB1Bxq5BTa7PDyNZi3ntxDpkVeMvZeKwM2D",
  "key3": "3SQanS7SB6HKEVghQq2Fc8P9oRpbjk1QeRLQ3jeiZ3KcztpwfmUfrRCexY6HEp74QmF3D2y9FX1CeUjiS2Nm7kTp",
  "key4": "4csQJX9AKiErHT4XqK2bWj97JAR5Hwng1KkqF4YBgfJoaxEKsoMpeB5n6zTnzaFcebPDtuPYXV4RNPb7iEHAZ23n",
  "key5": "4KJJYepAKaHmvnqyBS9v694NVo1asaUdcJkVbnB7By6pxUHoX3ghg4QQnn3zjc6Qce4Xa2MaKixdEsimS5Ucck4u",
  "key6": "p4mwXt8iHzmQJTvn3ULVHFh4wjbzeQYnt4v3ds1vE3kTT5fUkT7EFwEF2Kc2K3bdbnjJBou5xa4urdMm9jmZMo7",
  "key7": "637p47wgyTn2GxrkqahY8rPM5wJcoW2F12kUBVH5MNTEd2hZEYm6hkG9QCCvwHPTML9ULskkSWcnwn71WbyXaWqX",
  "key8": "2CN5Dx5hvS4payDRrCMpDtyicDds3VFoQu9NUTQckg2jHDv9R3iPgq1amntQ8BsAJcvWqvTGz7QGFcemKqJShJr9",
  "key9": "2c6qVgSYsaSeKvLeGGfnqzJMqSa9nQ9kQHRBu2xKfm8XiEuac5sPXATbCcJCGuWq7xDrmU5r8jgd2QvoGnYxYHRx",
  "key10": "43uahCZiTub5dUN1RNVC1koPvHbF85EBm6Jp6Aih48vMGMEaN7EPEJUL2v3pVjdP8wKr55niTDGFc7PhWYPqCC8",
  "key11": "3Ujb8Y9JbujULL9uXuL2VLLVZWw5Fro8r3jdAVSWXetNRVbg8mApniQcKBy9rfxVibdBmpzMWzGVpZ3yJwn72m5M",
  "key12": "5E5UcqS41cEHemzd5L6Uk21kKjVhbbhYHx87KzDHaHKGhMykhVQRsMsGP4scyherLtmZRj5pVSWiX5nUGK2MeEyN",
  "key13": "3JSLWZKyvMJk3bYuLfWpANhdBcGacLx6kbm2KdXrmH6hzmTXqY7Z6T7ZMAVQceRSkxVfwLtH6zeNnn4emzWW9no4",
  "key14": "3HukuZjstQuZLqSurwYatMxCctJADFrwc8ewHh5mwy29LC6aENdXfqHcqxjzHyJYjnB8tHgZ4rd3V9WGYhnCsu5v",
  "key15": "5HB1ueckH7hHD7k7zwwZX7xi8f5tHMAfZi7WPk8Ri17FwtbcZM3wwbGTGBX1xgqGw1xTsvbaqJ6GMFvCKiMgZy2",
  "key16": "2A7TvpNXNKR23vWvJUbSKq3NnsUg74yjzFfYUC3Ue6P7dVjehHvQqE96CSYhKgw1xhBq2VJtJwyEBvnovq59MErv",
  "key17": "m1fPxDGAMc8jm83bByy9aqw7D37CRDoaA6JA66WfmZ34eBQe1MmPCQoUqYij5vEHUakPH2M2jUgSw8trkZUoAhH",
  "key18": "3MZU3ewkw8BYpq9F5wo5Ws2HoTpDWAFSG1YZYkUMtJLycu5cSW1DE8cgQajYfWzDvGxgdSvT1Q5vDjzaAkxNUTcg",
  "key19": "2ZSwHBs4ypXFQBb29AuGQn7qzsSnc2urjF712RTWLwoXfQ4BQ3P1BRJYYj8G7tksz3cPtAbLwpKNUt3gHYauZ5De",
  "key20": "27VzPehj5td3cBfitFunXxDRoXDS6WzPVMqP6mU5U5HHym6aouiPaB1GPVxRtbHzgtfbxHcKXNBb79oAiniYXZfj",
  "key21": "hCPrnyCxgq22ubVZtk2DWPMELXbJ1yV4WUWEeNDtFDRbYGxsRvp8yMusJkFCFBqnpVaQviPsnoyZqMST9f4Rtz7",
  "key22": "Djb4mSvZHbmY4crb3pC9cjiPvUPSQgq8WHBZUsprK7hApJyDkzzPaJHpAMhAuRSUCpPXnuazpmJLEdhKzLU5qKx",
  "key23": "4RFHaG54K5MvxNxHuUS5SoxCWAcWuDnMyZsB9a3ujqpxSuuQ3prowCzf6z3BMbySqb7BS6zQkK9Qxi1jExGhKrYn",
  "key24": "28ycCkAcq4a3FBHDP5Gota4RrALQ6PJ9ggTrkDZdyP8wjeJ8H35rbFwy1vBJtbqLmzqkUfgDtxzaL1ReeERSxEVg",
  "key25": "Vvsz6jsJwACQeR46PeTMq8Z7kDJreQwVpEcG63VAVNnm8kTDUygyGY8rv32EEJ7ZxQX9vEvp38EyoFfN9fZ2iYW",
  "key26": "5SwDodKwNmNhssugyWgQR9cBTb5xFGHHaZxWRu4rF8Kdi6azT6hKgedaL5Rhp2EncPDyAmDxkTdWEfFmkRSVDJAF",
  "key27": "4uD2n4KypihTDj44uoRh7KE6TyDU48VX775LNnG3s7zDFodXgiuU2KAsqkCdqS4gS8r8ZTbAEBGG8QTW4oUcx6YW",
  "key28": "4Y7hYK8CuMeaotdXgUZoQfjYcpdgakYEnQ9V1bo8J1Efb41SxJ9U2Vc8rwdkGipFmKQcDwcm7DeytfeDSCy6SRBT",
  "key29": "32qLbJepFCdDSE1FULLh1uREs24sj3H1U1RDFzXaGJgmPKBHAk1JRBDhzKYhtcvesrjkdWuhxkQ7Uqa5MRNfRTWU",
  "key30": "3sb5RwDyTThbkn2n8DQVXgnKHUfzGwVmnpeBfseGB3iDGqsRc3A6mzrACs3rnyRS4rEGzCXJs3QCaqK2tPVZpUaA",
  "key31": "4F8nu1eeGu5kp8ysefeUjQVEUrRbKXqwuxTkwHa3Jbzp8TEsPBMBcEDgFXoEzfRk2PeqjGDFEcYu6WucP2oydLiY",
  "key32": "5R4rLdLhQQAULPti94Biw2k55Ao8JDf4AQU9D9jLZtUf1eHwoRBKCmLUX92aGuC49EcNsP7n6qz5erPqo8VnrAiQ",
  "key33": "25fsM3ENGxYyecZMX49cmrUwM5zMxMAp3Ao26VjaPvazxMLjEg16NQiNqsbfhsMvJTfvyQiHkxKHx29axBZ88dpR",
  "key34": "5UVoPSPN5H7oiVqZBHUADkPHKELEF3JTF4V3cyTgqF6FLfCFLWmXwZujKst7bsZAPYwNJ51GrovAbwjSZ8y2XaZ5",
  "key35": "rafknz7xYuDhuhK62bk3vuARKtrJr9fEhVfVzLU13FLDgzv134qZy5GPxQ1XdtHXsd3gvJxo4xVVRKQcFGWK9QP",
  "key36": "C91d8FnkvJFJjJT4MUN3RK13fZRPmNB9UQoN1qUtZDLCLS2cGZAoVFNUAbTpvYbbbfM2vro6cAsw1b4hXXJoYxE",
  "key37": "3TtT7553X6XdYQsp3Koja6SWFTDeFxM6wbugcmD2ev9uBenpi7w8j2y61rJ2XGd8pEVtQ6Hcfvx8c5NL2HcEGw8b"
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
