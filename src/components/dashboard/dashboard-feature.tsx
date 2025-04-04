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
    "2U6d8WSEg2BUTRP41Bq1cHFm6zG1YsWv6hMbYWCFtLCt4Zdn5JHepbVbkQdSMtSUpvbR97hyoUQwpzjgBfmsrejc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vcvSMwKFZQoBxyTzDmcAAdCaivd3GH6bsMRdVVWkeaHuzfqm2mVyZqNDXQNFXB7Xg7A9g6sneZ8nVvjpZBYs8GV",
  "key1": "4cRLYxh3xePQuxVCYG6Qd9a12PXCwzg6rmd4HL2L7XidiwURQ8iVRDKQz4brj8a999CEkTw9RXLV3UghyCsqJ8MT",
  "key2": "XYSgyYiiB7XJinJubCaV3j5tDT6FigxACxEUKmR3EGckKyHM6b8pNpXyQBWTamVyF8e9ffxkuk8FabEqbyZvNnA",
  "key3": "2C5XAcoFF3jGYE3E57VPmhu695GWRMwgYFALVQrEC2UG55ELLrGNYX2hYjJGd2UEfgeR66z8ALmdPQ3pJRjfWSJ3",
  "key4": "27FW7hKiesDo8o3mSAEcUJ96dt47Vbv4PFF78ctxs6VhmbxTSAR41zCyCXtdgvJZPpv2WyPcWYCHfPr7gDfu2HGG",
  "key5": "vmrZgQ9ncyE7kJsHtyR3Vj8oWjE8dsLrDsUNipw6MJuQQytTC94uLv2Bia8sKieHh76N2PyFgAYdGijS17dt4YM",
  "key6": "3yqSwDQESecPd6sGijC4y6K8odiSg6rvmQ3oKCqFAbdhYhoCdddFoN54ZYdaZYko59dbmphLLvwGjNprk1Ly7T49",
  "key7": "5RX46saeAP9cK3zdKZgNCVrbLKBWjpXGpFw9HhNgJhac7ZZuTgqLPUjJNoytQvPVXWCaW8DGeHK2R6XYPJ5BHEUY",
  "key8": "uWhQjeohjvr8y6MnQCShNfnoxqYNVFSrCpK5ey9cH1AgpX8qUpB8Bj7Zaw3VTHBLzAEvjQ4aeqzj6TmVPmKsYMs",
  "key9": "239u8KFcbDfkFVVGdF45tSjfYCMMW8co8YiiRnffYLqwesPNQ5jRqngcScPU33dKoKGxVEE3PD1obSsbsbtHGCpC",
  "key10": "3nE3z1yqAGKJCAVvNabPSvZjUtehSPXY3Rqp3t9JKQDvxvY4KpP5pHf6oVbELRC2ujaGbzgB1q5JA596UTYoNDJz",
  "key11": "3yx9xXY97MXGxttZYcRZGBspAuQ9ziQnypmypjv66miQ85vEjEqDAhCqub8AYWGLYTZy3qBADeS6gbcD1bnaSsYe",
  "key12": "2FK5Jq6yGC2ErsBh6m5uFi7s4axwJCJxJqXbxszZRZHYrUrpXVrfsjJmzr8QHJyfHBDfFY7EC1aK2ACmTgYP4mcj",
  "key13": "5Ve2XGDqbGHYoaQL1QrTL55jkfJGEUG6cDMYbQqKejSetQumfjfdhegGN4G6jQzBJVGSaAwrozzqKdBxKWhy4Gv6",
  "key14": "4aCUe8Xu5sWr9Q7ttpajHhfXFtqhNXvL4iWBMi4Sc9LNq7Bwh9HBEhxGGxqJjTyfiDjMBrB18LF4V8jTdH7F32Sz",
  "key15": "38d8ptRWMS1BRkto5dG9iAzcQbFfbPxdC7QSzPyFEAVqKaW3LxNCwEsGEH3hEk2dLpzjMfXvmXR9yV6G1w8Tm1ga",
  "key16": "4Ld6fMBx3ryvXdL9nusGCi3j9SWvWxCmjetTDXABUMawPMLwRjoqJ2APmojLVUabG1wJW6C2puBxGab8Y2Zqa9wS",
  "key17": "5fdKdiFr3sA4ra4XZnoaypKMaMeQ243QbLfQHCjrq95NvohkPFSRozRSUBqRbYjQ1PrqvvKX5fT6jDi2pp61UYUt",
  "key18": "2aVwGdH6FCMBzaAsugbUma5goB3nSe8g56fenMaox42WX5ZEG3xGEnPWzyVN3qBGwNnKfvrwfmLxj1oSmig1rth7",
  "key19": "4S3m3wW56sdR5GTxQ1Ts8ocT6ekKPinZGjMEHMXNZCEzbc6m9rmreBPPs7zpo6FgNYmbouQ8DG4XJPT2q7qHt4Uc",
  "key20": "3WQG26KcTawuu5aAGnBjqCbt9RNffzHM3Tz8rxxyUZLxNt4Jv83YpJZi5pHL39w3q4wE3uxJks9Uw6r6bZci7cKm",
  "key21": "45JJKDnvAhZgxoSifnZRxQHKEEvggBwoAQuYJizy2zXnPZsM9kN9sAScBGdQLE15m4M4BLBJ9AXPQSbMpF1PgJZm",
  "key22": "4jdv1CrWtApbF95gz2ENhQC4M9nWdzXtAfM1wkT6vQhYchremMmWeAJ77KBMDFfw5cTnaxMzmhHh87BWrBsYXnvZ",
  "key23": "iVkuYJWdELAZ2cizpKYqBztuSXPLWsnkN4UHHwPTnW95KzQuw2fMA3qvnyWmF5qogRYeqCvCVnm6voUhv8HAq5z",
  "key24": "3zYPKwmosrdh5wCy8RGQGb5QB4QLSfs6ty47gpz2AoUcBkqZrqqdco9fVYvLNb3ZHMPuDdRmGmzAckr3767pozTA",
  "key25": "2aMfJhSb7gmyruCsYQMoYYxbNCdi58Bt7k7aKX5kjCzjz8Pxyyqp1Uvr7vogDnHasW9smKdtL2qKgt4vbkfidzy8",
  "key26": "2QDF28jhZLWGo1F221qXh4tEtX6LEx8Pux59J26EYxiarfNFB9thBBjmu8LNoazLLAnTaJHeRDKJ4XWmZEAPXgpX",
  "key27": "5uUEtFYgSwAQjJA98mM6XJRceEGE9vfc1guVzphmjFVBRVDVohfbhn1JscxWYo9uG8yiK8vu8CXnZTYe88AouH24",
  "key28": "3YrARRuHSXhLGVEchD66BjuHj4CACSeRZi7PuE1Rcm4rkwqY7Tvm7eL7WE39j3tbyUTBga8F34Yq42f8nt1vtwEN",
  "key29": "5yw9ibdMKx155hFM5V8i7cS7GmtXmhJCP52R86qfnkQYZw4wnMQ2evkU91iHtnUurm2MuPdz9akNiJ4KW63RkMPY",
  "key30": "5C2hAE48TW2jUJqGLay2wWqFf2vXfDDwokQhJmTNKknwDuJw61ttZycQTk8DtsZk8roCq4JRvp7y9nEzgPaVjKCV",
  "key31": "2cbNChvoUWG2jxu36Tkw5WcuHMvAk9JsWKtJfR5PTjniiJA9x6CWaQWJBRj7RBjuvPjAtESXAAWDvHyGmGrRYvS6",
  "key32": "rqzQZXizV1QXDJZMeKHYxdczULn3zbcyMRCBqMTk7T6sEjykeay8Yxss2LangvkbVupVtnwCs6pf8TBr59HWbEd",
  "key33": "41bCE6hcGXyJk5wJfvxJsRhDLTU8pFXAHLpqnj7JnWDxP4JGsv4Lx6pGfBW8XiqruU2U8GZh2uACfGPvq1bZbvhv",
  "key34": "4f7q83Zyfroknh4dm9fxW6gggFb2PvgDYQiPYPmEaniyg5wKgzwXE8PqNDChryRmywMRBmWPgn8xzfFTF4JyoHpy",
  "key35": "3BcPZB4SY7zuXXHXLGiNavEtpurJcuFqkezVhQaUULkg2Ex4qQdNG4ihL4yZVWVCN5nXupQDTsQkRLvwyJUqahyW",
  "key36": "5bfZjYYUJizB3nXsXf2bs5rcREuQ2Mv6JtrcoetWGS37SjhcjwC692Ckpzz1uhRvMYmgtgYGZvZCMrWhS5MRuUNL",
  "key37": "4F9qF79seAXM8sYK48xT2Q4sGDxuXoiJoyEvzpKWUESNKLiKABuAFBMB2YZE2JgPnjJUNLM9DYTz1ftwNVsEx9Lo",
  "key38": "4ipVCCc5sPeU7xm2qz1MjJb44jf3bAuRsZk7GQxXHBr91t8Xm6ozLAHKZiM6uTA7fEEw3kcpxWREK1bjh3A42frq",
  "key39": "2R5v9MeFwCn18kWbUUeWXqqrW3PNL7ev1cScG3ruj9ijc3uMC3JLE3G6Dd6FWb7HP4DwS7ds4HQmGzW6FTkp32J9",
  "key40": "4s3H1rBLoPmFqiH2fRUEeAhyqNUtxLSvUesfKqcdiBUoGMHrzyhCnSSWWvbfRbTLEGR6nk3odusyEfPCeQwy5iJQ",
  "key41": "2Sfr1zE519hxqEKrfXG3YK9XQGddVfQsGH26LdVpNa7gCdAFpQx3FfChhZoKdVAPoz6snSwkRhzbRhgJVEa9dSGZ",
  "key42": "9R8kk26n6JvHRkVx5PxM6uVxFeNM55RGJiGESjtCrbHW8RMScVLQrEnqivfc7yFm2rex7CSSLdFXvCdqDQpZWcy",
  "key43": "43BqLiq1Rhocp5gTCx7w24S1ek24cRLAUvH7XKDMfCT5GnXM8v565APaUAwZw54dm5gkK2q2hmf1rnNkz7hwKEm9",
  "key44": "42G2vWdDYEjbGsMzpsKwM5hj2HD1AKMRhhMrNiBUM8CexJ8L66mdZ43UNUT6mrf2YdGuEQqEYeJ4nctb48MWgkB3",
  "key45": "4eSf7nBGE6FkHbnYSnFU14kMXomVPku2Qxx4ckrMP5wacJTPvaBgEVLMXWB1iDDDNxJW5vPbetvLvv8XdFMoguAu",
  "key46": "zZdH52aGbUbVnj4t43PV5S5CNkSNyFMRhpfH6rFh2CDKtRjx8PGg3tHVwHRCaq15RNNDFhKFdUD8SuPtjFUVfW6",
  "key47": "5oppmjNo2iPXhdV6ixznmUR7bxhgm3Zv7U4jZVacXHuBxPWSzx2dQjGMcvhBa22bDG44kJxQQr9VJqWVGYN8NAbH",
  "key48": "2CCJ2E4waEtC2E4FWKmVHFqWD6sy7gj2EohZtsrkEmwsB9GapLPYsB5Gg3eyvZ4SJVHvj2Ppg7qs3UTHY1WesRAw"
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
