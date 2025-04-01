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
    "2kQKdVA2EFBQtVL1tprZpQuCKJnrLumWDrQEod6jsEXcz42oEHFkDdAhGr94CXcoU5at5zSFab5fFS5smWBjAC7m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ssqdkor3CHq2YSocahiZffVqbb3VYXrJMgVjpBovaXwTd5BSvPuhcDpPe8A15Vui3bw19hP5t4JnnyaJF6Gw5Wq",
  "key1": "5hTyUhLyRbsm4ZVc8KrVKDdZpWw8hrQELP9mzjtMRZ72Bym3aBNcYDCWTgoAaGz55vkNBdL16vhZGTKLtfzH8Kdx",
  "key2": "4aBdTS2m7KfFJbybid2uNqvWGwHxfUkJzt5txdxEUtNfnhehEveJ1S2MRzXpyoYtspiuLiftQAzSQmKx7kinGnaT",
  "key3": "4mvnhpkP3B1uPLB9j3oPmeyknsamTf3jTwFgngvnZHZPyYRgpdz3TADWKWDdk3Wctxr9rSj5TvBjaoJGanmDCvg3",
  "key4": "2M9wA2XCgboge2bTrQ75Doh11img5U9fTCBkJG2DAaCcjB8L1hkQoNCnD8u4abFcJFo7RNcmYKH1G8FaLrt5fTy5",
  "key5": "4aVXDieccVgvUoeuaghihGdf3xQDuzWUsuvUVRxwg1ibmTt9B5JEdKDqvoMYm51Rw2Vztun7FrNd6VEc5fSpjE2z",
  "key6": "3e2ozGPZvDP7AbkybWsihdTMqDU3DW2TrZr64aTWYn97rr8kb263LCb28nbo8hf1khh7MANJiwootoBosX38EZLw",
  "key7": "5zDYNXV5mppZs35KvkDT24b2m3GzYnMfK9GKSJK4hNzVQvNUn6x4TRMA1Lb3Py4t14dFNWojKMSZcwRNG5MAXx3K",
  "key8": "uB13A8iXjA6b92Er1U3iqtLFfhkst29JQFM6XhiUSwhA9tWt4ZJmgPgScfLfSG6wiZCdsCyiMvhiVD8CZrSfHJa",
  "key9": "5y81R1S2LmwAPjCRmvEhXd3eVo1mJDLF49nTUYkdwgKxzdMbDuKozCSuUuFxSjr91dADdTt6fgQpSZQhiQGyJBHv",
  "key10": "4oLUbH1QRZwzYbRn23gWaRYJv5iUWHDcgueVQPK6PZXUCaXuFbgPkTrDZS3uh3vpcZ1UwmFePfdjJJjfzur7841M",
  "key11": "5bHSTm47WG966YxHZ6ti7VUjpK89dCNZyoSq5xz2eecmjAcWDxmf6WPEozoJKzQrq7j6CbchLewPhUn4iRTE2QwG",
  "key12": "5qJy6YhkEhyirTzkXTwbF2Er4UDSrCsV2TBcukuiEroNXi3HxebzZ5zywtRXiGSfCSrR2NcaDfvdFdfWEkEdS9aK",
  "key13": "fBfGEUqZRALy1qCJ23GEDJPFsNm1qkTZSeaHFo6zkfUmktecZ6tqmeGYbwW5YGqdDvQ2JWGSX1TpYBtrz2nYHyL",
  "key14": "ovA6JUvEkWYQE5ikv5QsTmgE6cooLx3j5Fu8shyLXFHfFL2Yi1H7uYFjE3pYAAaTznBqkQwYZ7icNJNoJQxPVF3",
  "key15": "31FJ2fAgkBGGJsrYGjYqvcgt6Z6B65QSEpMgNqhEmLnXoV7cG1pX6k1ZbLXm1cwEXgPeW37hvnPBPfoinZLVrFtb",
  "key16": "3bFec2xuJWvuwceaaYzvUyPktH14DoCKrhLRzAvB3MbxczjwHfDWNU6yYzHafrtsucrQEtEvYpZaZ9GcExJiTxYL",
  "key17": "2HEZj29nkffw7Lp44GiRJhUjUaxXQ4BFZjRJCQ5kAvsYjLrS3eRGjxWUf8A3qNyPrdTEXbzoeh7RFjKGEYXXYbto",
  "key18": "4J2fQc5NP4x7wwiFj6o7pze7J1w4DV86CotVwsKJVG8u55d376nEm2eqS7e7ifbEHovC83oCG5tgQ72PhGBCJuoj",
  "key19": "42mNAMXz8d95wUqavUTqouqyPgrd1JvWYr4JCA9rMMvJJuafC1eiybooGbsxGGZdmw6A5dNiJ89PRomhptoWdx5W",
  "key20": "4w7UizGLpvRjrWTqa9DVtkF1ALq4gDb7voNKv2cDTQmps3KdY4iFH8yd6yy39SCVvDesFor3VakZuAXNQhdNzQr3",
  "key21": "5jcc3XL3k1MGbMDzEBGf52UazNDsWXrCDap7wdcM1YbhaK938zY3zyuGazUxa1cgA23icuGhPFWDZYiUpnk3MfsR",
  "key22": "3ARX2n6e9zWi9K5RrNYj9yLEXJS2ajyy4ezDWr5XA47fTHEQgERaEHS6Ar2tQ9pArP68VLZ72au7bSsVCRXZNZbL",
  "key23": "4EJ5KC7XcAR9Jp6EA8C6gpfGAz38HEJ4p9KWitSA9U5BZ1s3pWxPdiD5YNto4MmbxgMZud6LZvfzueuQum453Ma",
  "key24": "4q2RTPdGVooXyhGcCwMxhGMivdQi8LDegAqwx4gtx4bZnWFHMZLCtP9G7FZVZKJadYVYaS4uUcBx9Nn3fzXegpi5",
  "key25": "54uQYL5qHReHWL5SJ9MKXtJpgHH6xFxpFKmVYoubHf7uds2zoVfr7N2hfLfmkVRoK2xUMUVmWbQ2ujAfbmdB7vJ2",
  "key26": "XxwGrsCcADCuMDMHLMvwHfLTYpfMLqcBhLgreS7JeTypMWszpjGEeCbgBVsndSbnNAhD7MXbcrx3juSReAwq4oB",
  "key27": "511EHyoZnAQZcsbWsMDcYzhW76Pfh1A1f2gEWS82A4xJBPANU7D8S4gMyS22wWmdU2KYsMYxqqj6MbvfTVFxyiqh",
  "key28": "4FFkRmkVgqaMQwoV19PRtEn67g5r6KUMwsrmHUXMoGLatSnEbwAvZ2QN8SvPuKJMRaFpHTFCtsJkdQ1Luar2hX4S"
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
