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
    "M2YJhpCsyKeCagtoyiJP8UGqTe8vzeD6cghiJQ5kMTByc7qWS4saZmESpK1yVgQqGcbLLDbPZwbEGTYkRqva47W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YHUxmJoCAV34xRMXXN4nyQRnSTwZe8gCFGmWwh8QcbNX5A7otZenPms33Vv6MKmiH2gPsFr1dudcnPEVwr83eA2",
  "key1": "4B3bgnsh4aD64EXGTjU86j1p7cLnWQw6qkdbAY8JdxM5z3udrrDKVBt1FSzaGAUSWtgKSRy4KYXYhq2Tb6yD8VAy",
  "key2": "2NHyJjq6e6G2qZjwn2jngaR68jcN2FXD1Kxr49ryND6bECHA8mA5n7RDxe2nvSeuYw27eG2nPQUsmXhWMCSvVGQm",
  "key3": "4F1GhnouXQjceNPnz3LvW3gVCpYkS9Nh5fJ4RDnajqH7zuzv1sf5CmJ7jLAGShjNDGFe4r1dPWHhFRsmz1yC67BY",
  "key4": "5qicgHJ5gC5AnKXipPZethtQyheLXowgycehHbixtoazUAHvQWdVCgcEZA4E7DXbfVpLYSvyUUqbx1rsbT6gy2Zd",
  "key5": "2BGeBtYrXv4tYZuKFtHL9wFdmvStoVSLZ6qJDaRabUS1pX2D6B2kwynk1nZ59WcUeB7kSLoxMGk6NdFSj3McDpGr",
  "key6": "2mxCoTc5tEsDLBujkuPRewZQphCPHvQVnwuEkevS4WEoPd68b1iKVxoeDUk1PHrS7oJiaVeKWJnzKSxfsmPfTNqa",
  "key7": "29V7rVCuq735E1YRFg45qdrLpunP1nDaQnramgHVoTezWoHGwZ4GoRRXR5THCyg93j3hDeaHugcSuVfnmyipkwyi",
  "key8": "4svEb4JKpxJRvGzx3LYUzNsDzQCJekwo45JZJGobFQRz3fDbdejKnAoXnR84Ux1A4ePqbvpT3VzeQnvmjyMwTgWf",
  "key9": "4kqxQ9oQDF5iBLBoWzTheX5so9Bc7o3kjE1Vq6XGEG8cez4qXxJVtLL9qLTzty9NTi7DJBVEfUuXKsAamU8eAVcG",
  "key10": "F3E2djRuEhSPRPP85mfWbCPRZg7Mfvz14xk6NpsHauMY6PbsRxvqqZ6K11cVE8KACp5XbDvsmp5wpXgwrm6po6h",
  "key11": "2n2SxFwvWJrtZ2Gd8gKsyAaTTvNpoE3aw9qsAUMMPRPRZdKzq7ZvPLGe81nJBZ6J9m9SficVU7LRK31R2eU7e3mf",
  "key12": "hZqKpbVk7xf37A3W4NdpVmu9etR7653DQwvN7oLf56k3AhxzxiaFooyCWk8g7sTVEHQDzDkRH7rfWXc3RXNmLeS",
  "key13": "vjsrwNMoGMaJefZvhra8Lv8PJZLYGJWKg7M7XajCByGU8UaE4BsmiFJtt1RjWqkZaHNNFjSC98wiLUjQRt74PGg",
  "key14": "4oY1YftFN478eMXDzkGGadkCg49rsyUFYYpEff38Rfu2PeG4xwY6F5uKKNHqhxeQkvzjmdc82DmTNWNUDpryHCBT",
  "key15": "3D4yqvDqh97PbfKYqofTGnCV7iUEwHjpwWLavPL3XsXBrVoTEVNFmhRS9kjiYNWHvkLKLMT4LWqrZrQbimnGoRcF",
  "key16": "5UnP1h9nXdPqpBqy6SDMPqHxhwBC2tDkSBkv6cUDyTFweD6gBAL8yy3BtEQrTr3cCk8y8cqhZZUW9rVoY55Gfiyn",
  "key17": "4FUaUMgndN2KT7VTvPxXiiKp3vPmhKYrEKALZGUbjs3YbFXkMGZR1cvSk66RN3U3xeXNrxtDnSX5ovSjuWDWhJ6q",
  "key18": "3mnWv8fLYHLee6iVkdmj84CijZ8kZC4LQiDsD6FrqHYaqA8aiadJbDQZ5Nu3HXfQq8rDmNaRpEkMrWoAee5ka6rN",
  "key19": "4zVtdziUuhYkxYxXn6zN5EaWk5FkwNJobpF6HniaFqpKCNed9pCmnsBjxtEJkkFFrmoxTAJeVLAukv9o2T2YXw69",
  "key20": "5w7FJ74nrTBPZZXrQyBKEvUBbZUScHA4fvFQS8d67Swu6ssRxaZYRM9u19Zv7qnM7ZywMcgMWqKw9CG2McfNbSmg",
  "key21": "4MYjNxFqnU9sPLtavpF45QmTAtuTfjowSNd8p196vohr5St4PfBpt5ikcuDXhQNVaDe1XWc4MBk1BWpy7aqGMMzD",
  "key22": "4rqTH9WXfbFDgBzZTKa9cfhL6LD1ALiUn1x1o1ewY8z1ykW6BXBk3VuiP7GWLDGG6mRusHyFKRdHREnLkPuihKM9",
  "key23": "Z8SoCx4DF8ajNuhqAz7BVgbheJW1MQsgzHZMiWCkujRG53fEC7d5cGBhojfKpiC4YtokfyGFice4o3iTYzPWgHe",
  "key24": "2soA9hczBvG13hGpgBdhh33rxHnyeJYLcfoHz7Ztvysj2ZxhxeaD3xkFv7yuJvHgcShrLfaDiVgmEdMUcL1J8tpo",
  "key25": "4fduQ4ZVUrc8CPyWSMxv8Dp7unKfhSwQFgu68s4EHRNshCCymAyDRvniSWYEDiHFq7HHjnGX2ZyUaX4iFKWDJqXR",
  "key26": "3hdDRbt5y9B2CQ2H6tC2hcn7V9jUxhach1nm65aLH7SS4zt5ZAdYCiQZ5NZbCeLyCmtbUTJL7Lw4y8NE8ASW8dnn",
  "key27": "5E3bi1a8m6a1NP1R8zEoXCetHdopiXPXtbJ7VW2wv9Rspw9rAM18W2Zhh2HMh55LPEBMiwpURxYkTiUp77YMxwHi",
  "key28": "2XWowmN1Ljcutf4tXNPnwGNZhtu6uaAgdiJ2EmoukW7oWF4tLyuu2x6PqZ2zX6dF6pVrrY57jKBLUAp7fUwKFVfa",
  "key29": "4WgcmJwqt7nyoTDgJmx8EbQMEn5gL17QAbVJdbuFbv9koTeyyRMTriQP9vJNgmdvCHPh8uBaxeBgg9BQmBfSFJYQ",
  "key30": "fhTAAo2NDkq6ZVh5HhhjstXivorU79K8TZHEpyZK6Lfdar5wji5Kj6ZyUmHGT48MouNPZ3VUDrJ8cgFmQxfeUSL",
  "key31": "zM2cC4ZdDQmPZqQQqu1vAkkEAMT3dtATpVzrmwoJ527rh2gwsh5FtoUoMfS2o3hRXJNkiQAdv1iqEiH8t3NVmb2",
  "key32": "3p67CySAswCrea5tEwrmimDry9xY3g9iZUq42F6NjuvHqHgzj2fYtAiScEyTbMG8mMQXXqxsZjfA11Uj1drmqFwM",
  "key33": "352Sji3wA48XFqJGF73EyQmBz4aLKDqYeyUqQ6ingtA6WqNWo3r6rFE5Kwnz4kMMCksuxRoZK6NkH3nsiwtV338f",
  "key34": "KL7QUKesfGSxYekQTbnZiDhxXZ8Z8dnpZCfh6TsWhH13PcSARR7ZN3WUYAak9W7PLZ5ZnGkXYnfD8j3TeTP5yeW",
  "key35": "292BG7oi5foycCqnxcdewXf8JLomHRupdxFeikxwcszfDwo7NKm2f2MCfLYPCTNbQGVuyfE3L7HPWFNXuZuqFTZP",
  "key36": "2UVcLEZV7qskMGh3vcBucDCEcVLbLkQLu8u3Vabm5rMY5hnFt1DBotdqPoBKNuCKHhytZVpqYe7z9yxbRtQYGjre",
  "key37": "23k23GXnHwJcCaLZJxRHX31JofhhLzsksZAv4NQvrTzXkuUspHbnFtfnMPePyWCmVBQugyfx8QW8QuVDxVsiSWPq",
  "key38": "bmNQdrTDfqyq7CLR4QHQcCcJCecxTSs88FYCKy2Au9yE6BbZRNJdo9E2TKH3DsEK8LpKG1dvG9KKMs5KHy9tRjx",
  "key39": "3qTvmjdBW8DdmDrPVJSvWd59Vmr35rDSMotbFyoNLMR1Zi9QT5rnfqEtuQtvjC27qoC37RvJThLsoGjCxeSgK3Un",
  "key40": "3kYZyy1boB9xPTGQWGUEbQ4xEKjCutDUPfhv1B5R77LWQw7vv8kPXbG9W8R6YhnovMuW2Qge9xXRfYgqgrt5ToDT",
  "key41": "pTX9iLa3dhQNPEVU4zMZm58h5B6Dg5TWtAsV8eYNFndwFhZrMx2eM2i3XxGCnbe7TKqHi3QwbGKyiSZt37htf13",
  "key42": "43teAnLhriYPrAq9TSWM8dqd4YjJPg7ttfHNzWPEneUoVixyBvPbXTvFt38TVkuYGw2vVtv74PjtzTbAQQG3Lqrx",
  "key43": "2HGY224KmwvKFVFA1VLXDQcnBfoBN8sgSDoGfDBj2KNsa8r4A5jyHUGBAVXNMqyyPjfnWnxy9Q6gKMh81QiLc4Ei"
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
