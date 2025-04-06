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
    "5fSwMqzXZVaBnerxoAQubB5Vn1JqUK29Xr6qwWzAANHKwhErUUDpFpr77NwVkM2SKviYiEBpZccdSdzSYNav1691"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zWPDik1hXYU6LTsyCFbzQPoWddCxw9ErsQY4BdjXmyZ8LCrLjkdragoLR2XUNEdLv53vGwTUhmyZUSiAw68nCCk",
  "key1": "58jtC3pNCsKEguZA9BGutcQcmQWkpYp2e2BD3iuKo7vDkyK4UnsoYZ6u73UX1km1YEx3Pt8rsj5oVvi6hKpzKVGL",
  "key2": "4fR4ZJ8MVLbhPEitkKwLSjAcibYPgQYDhasGFJ29yCgZ5RVGmhApELENPkiqhpgs6nLBEmnZXVHxKr8Riu1wXUXi",
  "key3": "58FdPnjiSAXqzgzVPgLXPXJQ8qZBFdGGjf71tSvzjaZWT2BWTb8sYTe87yvBPrxGJRPdtTUEk3uwj39Xw8QgSo1f",
  "key4": "2cWSAso73aJAj4dVGC8s992T2L7eaCND3eTgqc18hJKu5ZHrXpeAD928jpX7qXXbYk2Jb3M46M3Uz5eesgKcmrA2",
  "key5": "qqLsZxod2iXKqfn9vc2XWocJ3rKxQs7tDuV9N2GjTSxuwaSqyeHeqCNnUpW9m3wbvWraTQxK84hZWt6mMykVN7b",
  "key6": "4zXQWd7a84ZiwV7bzvVQNahnstA96fGc31TBx5CURiDYmnwYUkhWpm6yrfDHW6xzFZgzMBrwSpqXPxyZnBB6u95F",
  "key7": "47P3wB6Bc2FckRJxg5msJ8fzc8P4fQnj9v1bhN66sGsSiSmmNyb9LxYWdKkmdcZdeDJy5BwD2CvzTBTnPat4w2aU",
  "key8": "f4Tp2H7KpFZALcwmQYb3xoyNH29RNQZtTB48m3vAJTQo8PY25MGsew1cqzuqnB3NvcMUGCDSiCNChTwFyXsxkHk",
  "key9": "4u5uwTEzXGMZg3jn6GH35GYPbYwA7x48WjijPfMYSXHRF6fMvbNTX4F4K9bdkCLf5dK9M1Q8T1VtxseSquBUnfUv",
  "key10": "zCXbv8bUhrYUcGPtFvwhknenKP56MXEiZDdvNrQXcX9gb9ADWRFaTVB1K6QCKWzBS2kHs9DqPioHQ3mZL4ErWQv",
  "key11": "47onBVfNMiE3zt6NB6QX8BJtjZngFBxqUxYdjezVCU7Af4ghiKQd92JsdNn3AfL7LJEE6obWKU5TugmyP9VPtyZ6",
  "key12": "6354iYHrAQQriU5MRPzUhixurEcHyVgXGsSVKpmscSJ2tQJFU7BNq37DqtDaWdThc557EbtM6jbL95gLNYRdRwc",
  "key13": "3XV2FMPq5nFS1eob3LfYjQKQjE7HJwjLVYkekFVRtyWxkGFNTo4qd7auD5wD8y9CciifkU5iXEwYntHjYYQ5Ssqw",
  "key14": "fgrrK42dZm3LhBSLFunFCc8qg7fcebSC7uqx5CQKbZdmhq4g2DrSiqQQskMg8Rs8uWFRD7qV9Lhinn86BRY5LWz",
  "key15": "5YnTtqgSQYrUdUFjUFT88dPFFyU55wFuEumvFNY46a1r71MQqTjrBeG3jbbZxPoNqiNBWjALmCmykSrAvVth1e8Q",
  "key16": "2yqT5vCTLe8EccsQSwL7DMH8rNL45Prcy3zfuj4QVizLywGD3j7inQ7AQCyEz5Cwy9o6TJ9ekbvoAVSMC9zuuW4G",
  "key17": "GZZSymuifAM7VcSdP8MhzAfmscz74hAmg3AuStL66vkCknDSixp1VXixxAWwSRRSUpsasaty9PPhQYoqbRpRDmh",
  "key18": "3KgtCH2jpqNH8iKnA9ZncEvGjPrUegQHtewSisgHJmWrWjzVxX2s5ZeG8NycM19wswwqar2HcdBdHv7X2CAPHg89",
  "key19": "VZkdZPmcQu2CvmyH8LZWGs8S38NgRJcKw1esZG4yFcbs68Z6Ty6wPpedgA3M69DzSyMH5RuvhMqxSUSEYk7nDgF",
  "key20": "3oX1pWhPnadnav95W9hpWA4gR3s2BZej5huE95Lu2sKzKkaRm23K7oWggqqPBTBBk3VT8hMz2u6t6xtnA2UagVY4",
  "key21": "31Bmhtap9jahhaUufCX7oRBeho4CY8yTB5LEDocqiFEsJosVWKhXg8eZb7XpZg3wg3ZELsd4amaekJpgTdMLQJ1n",
  "key22": "2riSedua1M19zWFwmeAGsoBfuSykUaEEMNmGHuvtbQwdeMMu4G7yS51LxhJNV46bpGbQM9DxNuLXRbCJqKKHeosq",
  "key23": "3Xc6kULy8rUeBvTdnLnmsBL8sCpBoCb9m3Li3hj3CEpvQYvBtvbUupANdCbqyhBKYCSQ4d3unAknJkfp2fef2GQ7",
  "key24": "4Xkc7NjyzGYAmWsasMPPh29zZ3ggAWQvU2UFp7cNoXHMgkcUdyXL1St7xR14YTWoxbHG7QGp9sfpQeri5uPArgLr",
  "key25": "4G3eF6mbAwrd9Dj4DwCgJmMPy2p8otSjLvU4MkDPQqGBK8AcuBj4f78T92npvhU3SVuB8sNeHiBCBjmbgKDxQ1Uq",
  "key26": "VeXfEW2KQn4d7t1GTSiM4s64oeCQTinr9gYaz7Aj6xNCfEPXBAY9UUvNNnMevsR1MwH85prDTzYoqMgNSnGNSpw",
  "key27": "4vYszMPvKLK89aXqb2hHboEmaH3ZQwr5jnmwtv7gU9eiWN3XvcednJx4qSZvus2zcyX17bboMkW2o8LgxRFmrcSk",
  "key28": "37RcZcXf54DP62dAHX8yGVoUNuMw7z4GqCeRDZmLrZSWX9eu17k26PLUBgjkzQSkxK787R4GYsqohYj6ASp3Pk1b",
  "key29": "27F3DAgRUJGjzFSCHC958uBbz2K5J1b16Zg9ozg37HrT8aHpkkmzaSQekB2nRuHUUooAGK7SDPobQR7KNZLzCQzR",
  "key30": "iAwsDQok4k4f5aWpbk49ASHUmPS3LuCsc3azXGieNjs3VhiU2A1EXviMoCB8Sd5nJzodHrZeobhriEVsVRvRZHW",
  "key31": "3QiEeiHtjgtaYgeZ4xhBq8sUMwyCEz5aZ1hWjUyNV869NeR5ZVaQmzoPdmu6QuiuYbYkqxLzMtHkrZ4dPUEhvYH4",
  "key32": "4xEFMF8mzb2MpPTK64hnJgGhtZCRXWaUNSZV4kPRoCwN5UzsDcKB756C4P8hG4w9n3MAqWBuPq2kVmtFubgTbF7p",
  "key33": "TYRNLEegDHnx18sBpDJ14gD9FsRkwXsTB1sKPs3TeHyBC1fFPrTNdDKWq7Sc5zMe7BS2SePcnj4YS9wJXACWCnb",
  "key34": "2GrgyyY511sFna3rkP8t4MuuMpnwGyD1xzwQZEzYuvCck69qkAABf8XYFmppSuhSKPzNiGuz3ykPyhUcEhmnGspL",
  "key35": "3eYNjverStW4SkFhY8wyCB1boeydP4J2CRNEjXHpKUp7wZa5FWzPk9xpnB9w4GT4J2L7zDLbjhDJsiarwc6HkHLj",
  "key36": "2XHBmcX42eKwdpXrsoM7VRMZErqUkdaq7i6g9tqCj9ULEoCcPoGUAfsNQU51k6okND9TbDxvbfm5H7dAEG7tRw65",
  "key37": "5v5VAdUA23AHjPoccKap9RVFtpgHGi9yzk5vDWxpzwdnqb1dGVZE41Ae9UvbzgKmMSYMNai9MZnb5DUPsztBekjM",
  "key38": "7JcVMD7bR8GTbhGMPFdp41duxcePitQhGxXN9pzjn1bGgmY1dMuDbGAjLMc5eUZusoFMJbTkfsAbudust4HgTmG"
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
