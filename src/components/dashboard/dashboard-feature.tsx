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
    "5wbYouPQJcSWX4CdhkkAxme7zd6U2MivgiqsUP3Xm9k8Wm5X4BKL97RzxSxUC7N1k1SC6ehPm7KFy42BY3QVNecE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pR1bVsTMFUqvR4i8k95xMBzY6ZwKrq6pNdcG1fqYHRriW9xq3xuTQJsbZZ8syrt6Aq2zXEbmVCm3SEiyyGH4V7t",
  "key1": "48GvpdXEiEKCuCt89Y2bpfPv6Azf1dTgyfrUS6dX8mTagRnQXyFFeRRFPDzYpSEuzWPgwjVustV3f7CUEP1Nu1Fb",
  "key2": "5NdyfiEVHi7zWx7MHavHuLS4H2aPxcEvfSuZrEj8swoCNTZ8Q7bCUdqyrjeziUKPWJBWUQVcMMxMJfyWgYLKyh2g",
  "key3": "3H166DtULtaPis7QJoChZ9gPjRg9gnPVgt6GnyRy2Lg1sn1oKZfuA8NWuebP8inzXE98eb5EtVnUCL7BMMUvKba8",
  "key4": "3ykCA5gjuR1vnDhYexXT7nv6Nq8EssDvQNedmPotfDrA4wEuF6iXwZLSJ87RQm5Lx6vedHFDeFDZRLT6yDQLdEY7",
  "key5": "3oijPx7LiVVqhswuzmYm8Y9Nou7qTSarobwgKV9cCnW3ypcXoBkEpvzZFX5qJeC7NgAXGnu81ZNhTPfgGZPrE5yc",
  "key6": "4mjyj4DmVXtx97jbuDuzGLLwjuRgtXJkSJumMAJxaDMk1hBZ4UwzUDmSxdmz5djRh8yFwS4eq7QZkRRjPcEhTg2r",
  "key7": "5ATD2kdFPoFR7X8nLvEL9H6M8w3Rdqyy83NcfXUCs72GneGEBK16qxPr1d9LDSopSGva5u5aFWrrtgxrqcyrGb2t",
  "key8": "4iXSRSP1oJnqFYf3vSBBMCv7vf6uYPMGxnQeVFW8RX9NFUuVaGdohBBfGoXmqwTpHPMk6shQcxmgQm5b1pJVeYqY",
  "key9": "2NsXtrhuPoLDeqA3nVUben8vtcfaAztTnNz8s3LoTPMKD9zU6KDP1v6VHGsMZm5fx4btkPpnpr16uYWnB2xPFiBc",
  "key10": "2AwZMsTgCLuCSs4LGkeS4yo8GwDEmaQemG183GwY5B9fFm2b5SXMdeiAMtNATRhTRwmTHBDQUJBZAFw4KwZ9xgmN",
  "key11": "4cHyCrK7VaL7WVg5EwsXXF8RjRtgFjCAvr2oBGAuDEigR5NSu8n4itqAUjVwz26Fu6bz912ZGVWfaj36iC2fYKsZ",
  "key12": "2zzGtfu64HQEepNJY2jVVFRTC9vHdvEyN7eHsQF5VS5tqssDTm28rRVSUTHKXyeFNbM51FeWo4U82Q6UW2fAt7wi",
  "key13": "3GZhehUVSTafMugH3CuMcSJ6VEfy4456tcmAwm5tDJngRc11HgdDFEs9av81iYA8V4rDt6AWceN1DpmbQ1JmWcMv",
  "key14": "4okwqGbBDEYiVvVXhwVtgdKpyRYSdQqGjcd7tsxVJQ1cwu7cnQTPYFKJMJBdxrsBKYg4v48Qpnd5ZtSR8tFNAMeJ",
  "key15": "4aJQoJ1gDVpEaNZPFRbLqXJJsG9NxhZ4ypZfvPH3P1Q4SuQ3NLbduUAK71yAgX7FGbUkhff5x5opvogMaCAzG8dg",
  "key16": "2Ko35ma4KA2G14QuHHRL8nYLt48g6mwXgtaPAuPqVmdR43zfZc1u7bTGbhDugHitb84axLzZqCSSBeigXbd3M2vz",
  "key17": "5Tw92CHTYWLCzbcAmzxdKi9cPioQkQdoLrJcbtn18rqmmfg3hMLsiqZCVswfe6LEEVyBfrg5f3HYrgcEvwCoe1MX",
  "key18": "4kyXAtscU6M5xEbP588hEJSiSACFd4MK7Bk3pVY4F1qC4ebZ96dRrpzdykkGNrGod8uowWxKY9xTEEroKwvTowJW",
  "key19": "MxUss5DRt3bo8u1i1yBPmpefURMoTMTD6gjL7zCDTaFfefGYDbr74gfRpsSA3UDJPFd2wyaZ5Z61MeF338Mn8Yt",
  "key20": "4a34fDAJLRSLNdD7pAekG5uxF1mcKCeSe9zz9or83aZFkzVKSf7bLnjKSai3Jt1in8rizf7CX6rDoboBrZsUdptg",
  "key21": "5ZJDzGnb6HL5rcKx1Bdu87VFdBfAF324PyCD7pAEh511wFKEkRYHsLnTdLzdjbjKAnnxbDNss2ziRGkswCf8pbtD",
  "key22": "hmE1diQgAbEEwa8h6jvCuQEfR27otydTWAHh7ioigcqM1p2fvq8KvZE1ZsHSYEJKpduup3bexGEiSLhPdSZEhLg",
  "key23": "4SXvRbQgKTSKrHnJ6EWsjXSCiJsdy14YTvAuDM4qKBoj3Kixr2LTskAHu7gJsTqyAnVrMg1x6bPpDN9UpzdjymHQ",
  "key24": "2duihGWvSaPipumjPgYgNCGnEEpRn54vXz4oSUkchCc6wqaFhpnWfaiHeLgTVqUVtKsoZ2n8KbKDddMjjoSi5qWW",
  "key25": "2BoKcM2PugFi9eFs3dQEywKoYmiLr6fHM7KnAr5qCFTKy4tzFkN38AnFoc28DgoUiHQZzBmyoP4Sr86a2UH2WiYY",
  "key26": "5rz4mrqmifQmqkiMQvk2ix2NKGVLAqbuv3ZEMz4HARcUUnpifkDWP68QKrars18XtWur2agVy8fH9t3xhV9RLyum",
  "key27": "2w4uLycAGPhPJc8YE6LdAyepmzqmaznQAqNV7U7VXRyU2mZQJ5UmaxNUZRF2zz36Z3FjBKoLd8njXY6EGZ9CVVQ9",
  "key28": "3uACriNi9ULNgtve9Vebn66UdfRyzgvCcTkcR2jJzMGDtV2vZ3nsxHaZ39zCik995K23xZkVNGfHCwtibNFNoiFe",
  "key29": "vNA7inhzfUqUE9kfuABQsX5ykq7vbLsmUsJugbKsoqrhhMECHnHoi2f6uWSiA1q7JjcECrQi5DaUQFJegLjv9iX",
  "key30": "656r66Mr1yXo9vRBrBXK2tc9g5FAYN9UaW2g6ezWR74MFGV5W3GEBkkrTyhUYyXmsErevKbihYUrwtWcLUTDskjF",
  "key31": "4pYDmxw4o1gkNZeFAPXmz9bY7M1uR6LVNATWy7YTG2FYkoARcQymHyY7sjnz2BDHfAreEL3oc9qjix9CyvGPzaZB",
  "key32": "Be7Zx6DpzEv6ZXCQzLCr1hML1nbXC2CsGozkyPofU7aHZmk4oKT2k1V1LTjbZJh7QcVkREtJYngn7mGU8AgLxcU",
  "key33": "3iFfZLMCm2ijmCBtgV25hd9YDWnKA6qwyCwsC6WEGR89mAaGyFnRGrJaf8ebQJrXkGTcwe66ecWPfYbfEvgFocJP",
  "key34": "5F95fYkXHyFKtHh922aivsTVG1WAR2trERopg1DEeWBLeKJSJYCFxG7xjKCJ31MChWQ2vRbR2rGrn16LpvccYgZp"
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
