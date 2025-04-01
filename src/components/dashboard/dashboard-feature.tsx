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
    "3HC1yKRTm1scAMH29bspsHSR2LBaxJKJHUAeSfFCtWxApDkcbxfLRu8jMuDzD8H3AXstLqdeCoiGQAW3Nq1C7XvD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y35RGMqrVzhoCNBXRwX2jd1Rx6KXnrA6ppDjpoaS9PnoYgrL45WUdqiVkxQgaw2nAEhRp693cPJAeL188fnSQXz",
  "key1": "5MHfJzbnXBo3QR8NhUtsn7i988Aa3M281o7Xs12zAWwkb7vcMYDCVqUQbaZnPzoD4G2ftJDruYyWXcrP4dhVVr49",
  "key2": "33vpkFdxb1rKTe6QCcwHtsxxataJSFi9XSJZM8SbtgxszvWsBM6X2PgpEjzBem5q5tgFMMjSEwMpHT5TUmiS8Coi",
  "key3": "3Qj9Zke2cuK7unQLtC1iKJyu8Mk6j7ghS1Jfm3FtY3a3F49gZDGLfBrHDgNYFkpvDiq8e8bYP3y42zNDhRX2w1ie",
  "key4": "5ghL4Wp3X5ecXFLwBrLvQURAb9NzBdjsK4ZYdox62byNugq65fFgiMsumEBudv4kDoAfuNDnu9m9WtDYYe5Pvn8T",
  "key5": "63w1tB3TaUGAyyLVVfutStMrhaH3HZD2KQyxCc35rxcyKWU4AyhB8hsUFwypaiNDmXunjxGadiRJGG8CJC3x1h6V",
  "key6": "3FD9YHVAYx4KXt2sdCD8SU74cJXWwWZPhqNkUjXsbJ7e88ucUPyLFmqw68UJBxwZBPsL3xJYitHr77PqLLBqe39z",
  "key7": "3p2LGZ5tWFoJaicxAauPqpk2PyhTomN8mBMKHzhsehFwV5HNLeTsx34nyEtriTnp5ZAcAxHuTbV5CSxzaLpJ1TJq",
  "key8": "5e9xBHgWeUE2b5zREpFZHKzugCfrHzuG9yrje4c98UMmD6ZeVm5sCVWUA7VqDdWA9c4DdhQyguLTomWKcU5ok58i",
  "key9": "4DyfbjSDhRbgDUp22eyQRBYH52k1VHHqgpNL2QjXgu5wzpPYqycxFQPHxPbWmSGW954aZc3FLTAoyopywGqj19N4",
  "key10": "5UhY13rHTFTaLuUtr1G63dUFv5vFLufun6kYkK7hvnDW6SmM9tnTkdDjAFscMyUNNsKyAAKWkzYmSfKL4dxJjbeE",
  "key11": "4ewXLsN4FWFwZFgJxRrugQPubvWqQxe62ugxFynQWuGhK8v47iXnk1tCiwZUpvNAC6u7ttMLPgVxs3b6tL4jRsob",
  "key12": "4eZhGuneCfrFRfKckJqbYMD8y8neFwWkov6YjejC5qUsrdTT1Yz3hN7stZRvEMjASMvpBgGSwJMz1GnjAsMKh9X5",
  "key13": "4xBpw9vworaAmPmvRUKPt4cSSTdy8isoV1Xsr1e5jDisHgRG9Rri69u95zj6fbq8dRoTSsNQjM3KnnWkgmQgFbfn",
  "key14": "4E3grHAabthjzzLwL1uZymbgXe6Gt8sKX5ZG8i3sPjzpcwf2XtaHnKwBBuQhNQqfrE99ADovx2aZDcqTdK8A8X4d",
  "key15": "2VLn7TkGgwiAMib27Gh2qKKQJWyLJhJ2fS8kG6XLymtxgVeMcy7vAaeL989AVLXnrA12PKzcrPkCQW99nhPvX4Vx",
  "key16": "4tmgCt4Webo4tXw1wTDa5iTMqFnQvCph7CrZUaDwXeC7McydSe9PphPWGQMCzKbzpYYGcCDoZMwkMDXmHz22sQm",
  "key17": "3ArMX4ELRKoYFisP5vLX6PXo2kWed7Wt6uhiA9BNmeP9aYg3gqKLiREZgbxikucSmwBm9LiWhTgzkt2poNcTWXYP",
  "key18": "5SGGQRHzhGCLPgPYg9wfLswYQRC1RSbXV1mujgExFt8FGq7BZEw5qJLNdNDjrAG8NWW64QehXWxxaxYWJXgnGPp9",
  "key19": "2LiiaPudLy9pCdw4QasTLB3dUAk2nN41C2jFL12QDsh22VeTNUN3ixT1g8tx62GtKB9ig7a3p7UihVvxJaBMAZXM",
  "key20": "4Y3cvnkxfB12C5AAsPoHFrxhFSLERtqu49KuParhq61pT3ofvzzhbSwczYL35tkDt4YFtz37UyYApYR85uqpFKv3",
  "key21": "4GWF1vz3EuE7UVTNt46szseQC4VKsHkGeXc2X14yRkyJZ9cc1hbzqBdb7p3zYxroRFyc2FVEkgPQnmh2bQrfFhya",
  "key22": "2yfnftQT29Z4ME3ermmsN9BgZdihC5aPnWEHk5dg3UgCzhEp6mRSMTH7UmRuSwhnAXgqPesDyUkkLdw794ieGjR3",
  "key23": "jTDPD8pCoaWkYhtZKmVXGE2yNyX3MZXiGTCCNdCQZ2Y2WXto5wx2RkrzynLeYkghuwDmDWYeFnxSk7Ua6xGqhZq",
  "key24": "WcvWwdJc2guatBYb3YSvNyKT1yLMowRhxU9T5EdxgfkHDKQXd6Q7mtRyNzkkz1nDagyEJXP5vBeHRP9w4HG1ZJb",
  "key25": "7dGdosfGYn84dNMyktk93Hw9VP1QJf9ELWapKUsLr9woinRLv3W1qPxwjxidC4uevckZ89JJkorbY9iuBDo5XDc",
  "key26": "5dcmbUNoebmxm7aN9fVAyx7cKUxRjQoLuLpvmdHHc6DqqZfp3zBFxJZdNH3Ud9nWGeZGbosh8Wy3PjeW92eZgAF9",
  "key27": "5G3xkh4xEDbYcByuD7nRwwixN1WZPtJZXEs5WB8BxRpRduPowSTqn6riW3GMGgc6yuaiaeEMSmCAcYVrwEmWnEuQ",
  "key28": "MXNB6ETKGco7HUwNS6T2RzNE4oEnTkh9qx7vgL7uPZXEvhQcgp6CwY37YSZ53tJpo8Xi7NNkaQgpDFwNoBNHSCS",
  "key29": "2NHjybcGDXobSmEHyrLvaTsXYde9E3FQtxaGyC1Uc9aofGTCsug7dLxH62zSjg4vMMUQk2xrzCBLXWY3gLqm2UwU",
  "key30": "4N9xDN4ibKWhpZs1HE7AsxUgNShoFumNjzgV6rRFtE76nS37AqDp4bCdz24pekuJitvgUPkWPtKvzwTT9qP5jmfX",
  "key31": "4r8UiDgdsr46UhT41TjEVTHt5W9jYXsXrXnYMCiVg6dNWa4RZNgcbKnh1HGqy4mzzvJCmQj9ZSUBid6cFMUgL4yT",
  "key32": "3gH5M2wWse5S6VEaKfwUZX3Pjk65tr7seaPPiEGuQEaSss8nDXBkeu5yFXNcFVi2FutebYpapuCkn2r43UyARrpo"
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
