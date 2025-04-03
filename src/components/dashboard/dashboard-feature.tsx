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
    "3zQufLquDLtdos9v1aLBnF7uQnTBBZX2y3R5NqExDTcLpeAU5akbXHzWCZywevsz1JRPG7mj6Z76dYTsneQVBvKW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FwDRp9wbyP2p69sfwgw1YcqjdVhpNJ1NP1gmz3pxfZckf91chwakVxi5AUg81rdehfQWBEV6tjz8Mhz5o8EmegQ",
  "key1": "5yxa9yGMHACwgV1aSxzaVWhZomCUvzmjn9Qb7kEK1bUSfCCUD8cz4ku69KGEGWqFF5J64KG9DvJTeoxAAQ3Uj1Bf",
  "key2": "5awE8JVhXR8FdcNqcVqQUx531Xq6YuZsQEJLzqGULvXEBe8obi9LfRLJuVEJftScVG4xKxcPQGbuqpXiqUKPn4ve",
  "key3": "3h59njrSv7ELUqT7y8Psaj4bXsGqCVhgaJbVu3stKpkE6w3QFKtSm6oKiaiAPPNp2Xv8T17i5hTtZ1mT2Wc7Ty1m",
  "key4": "46SG6dWRiZeEpD2zzoPd1YQNqfKdyXUngKyQtZJ5Z7pbzdBf9Ts41rQi1AMLtadeyLKLBNjo92TvprPtHTqn9f99",
  "key5": "23zWL1tXhKL92iRSqkVxwU8rJv6RSr4qGoM9DtwgEDYfTe7nHT6eeDmQNPHCP1cLTq9op86viHGQbonm6Kj5PmhM",
  "key6": "BkjQiBwL6dt9ELUpvgyXaApRctbkeGXWiLXxPDui5RubH6mwvDis3Vr91cjfLKk8ZZNwsgRbi6F3obeKNKT55P7",
  "key7": "5VNH3GEcr5KNyGDhQfCj1rvu4HZATz4Af7cpK1ttKo47p3Z1m2YoK1SkHzXykVtQbGitRpfFUvJHpzrJP7ZhCqt4",
  "key8": "3f23pC2JNgnYYTJLw5yyEGB4PXpur9n2zK3QLtxMSeGKu6KvQhLmgUn8jYvC2ECAX72U7phFAq9mNu7Hk1v4XbeU",
  "key9": "5VrYHc7KFg1TvBUbazosoyJufgea2GScqGnzo41kJoR1asMBPcdBaGTYiHPP1fW8RGuHGyEA1EYTSfJwQBeQW132",
  "key10": "62F8b18pQK4cpuVqP1FqkFrLwhAey4Wtm2iZmM5b1cL5qqF2VfSR9LQjgMxpXJkNMv6gLLa2qquUrSHzqzBufx6F",
  "key11": "2SdfvjsADMKgGmnJn5jeAjruRPYvARCvPj7xXEyJ1xfWtEsHYt9k5WooX7A16P7TNuHdysfHubaqPR6gqeJBn3Fu",
  "key12": "2ihEb8B1FEShm2R3gfdaHfCckv8jad24xWZ4eB6JFu8UPyFedgi2uPRXUjvnTKahozYwyDq26qotvqunuYqcThS3",
  "key13": "64bF1iVdDvhtBavsjUoWBa9VFoMhrAD4cU67vheujbFgun68HxEejuMrLxwLS9PBAwx7rHAKcUGJ3ZLK5p9rhAuv",
  "key14": "4X8bCV7Q7o1ZxeMpPWZh5tD8WDz56yKPK1mj9drEsTSBaSNq15ZhB56xVjd86up2NoyeuLs8TxQA35UPVykQZDBe",
  "key15": "HsrVtardjZJ1cfCVNgEwH8NRhb5bvnLjudwCw6u3KMebAq2hJn5VZkVUEarKvupxxUvyQwB1LV2SStRFMp3oqRY",
  "key16": "4zDxSwa76Mf1iCnF2nmyY8zx4YNBUGno32xhaXmkmsGaC4wQy2rmedFmkJSSxbFCXYWRd1AFdifKToBFNSSgqRyY",
  "key17": "25y4fBErxK7vmxa7JyBRepZQpecepbzz9pXTpR2UqmQGc3EFPxQt28PhA3q9jem7tG3xoEGzSn88bKrs2XwgE4Tt",
  "key18": "3b2kipmb4DEz5Ak45XLnM4WJVGemV88xKAdLsjRkkT2T98smonZtjrR7eQ2riNryPDx1uCcgU5x1SEuSTdw3Wnsx",
  "key19": "4N6z2Svyw3wrb9LxT3sukPoUmyf8zqRxGhhu3UZAYxMTB1D86o8PquYAceU4mMbbCTRwkc67jPM8TFU68GzEUQfW",
  "key20": "3Qhs35D5wrA1GLJxvWXNb5cdd1aNTfc5EvTMNo18pS5ZDUsNdHu4DpDjX9mpVtraAL1Pfs9tgsx8GLeSQe1T2EtW",
  "key21": "3dS342hti1ZrYWM4jkQymGriTCnrw4XQqPJVkgpbmohzRDCZvH1aeD5vDBpweemivPcA55q3XCCVR9gBfxjqtqzD",
  "key22": "2WLG8vPtqwSvRXTLxr89W1YDai2GkEdSKNj8iaEMnPuXRLGdCGk25ybnvmQ43nqRZAc1PQxX7SnosxcJnpZtjLL5",
  "key23": "3vMjxshkxv5FMhhqncRfj2QBRDVikmbbkgwZbmZYqJWjStSc6DJhW4TzBmRPi54oc9mQKZkWsJphvPGd89qAwT5Q",
  "key24": "2chgF6oLbutg4Qrd3MVHM5afoZY8LEhQWuUeT1xJUgiQfpv8XGenhvhxL9rtL7TQUh9WKXPDRWrKZBC1PDhex2J4",
  "key25": "5k6AXatxNQ3QJHGZPHWxVYc4U7d5Xt5PKnRVPSz5Xaes6HVWknmexws36R44LMSBFa9noi9SJXaYjanNBJWWXyiM",
  "key26": "5CfSEqtXP3WQEc3ZT4tVzHrTVnAbjDHt6gpcnfAXvkhuEibY7TGSVL77McfWiyE4ANNFUDNkQrmt17Jj6tqMCaod",
  "key27": "3x38q6YqsKdc6cpsYf4gotWDCLaZo2X1JEzP316QwHZ7K318m6LXXewERjkrtEWFHqEDWRzuPR41z9yc6GuSB9w4",
  "key28": "3NTR4cf62jdNfSgUpAZ9SVrJ93wH5VzNuVu5AY7qsiMrYuiNsVxorkLDckHesiQXivpMmHqnqwJS6VK4XQePj1y7",
  "key29": "JwdUPH3FjgWQyrdL7iWjk71gGErKE6qhNUqvYzMCrihKeftCcauFMb7X4t9M2wRSvEM4snvni849MEzAPXNbkQu",
  "key30": "2peETzNE4fNgG9Pk88bmfAFXTAmduDBtLNoCtspQGmvPgCHmSNx2RcJhzXhifgwf5jhgQfXY21Q7BsTgyu6EJZ8S",
  "key31": "Knfy1oBv6CZqnGH1JuCVpKCQBEEFcHyYhFAehq1pMbnbDvL7oUyhYRucPpDmcu4YKFUUqaLqi3FnBkwY2mu73fP",
  "key32": "5roiiaRDJm2LtcM9qSEBoHX7UZXBd1M2fZbsqUnQ9vGuXuZTm31Uag7CCkTJcTcsHaAVVoTgFGJGn4XA8TG9kQA8",
  "key33": "4jySXKBMsC5sPB8KETe3fW1EpGZaoRjHapfBvXtjRs33DZEypPxhELpWzajH1qQKn9nCUMK2kTowUudJPPBqKZw6",
  "key34": "4mV1AZvBGw8bHraa3SsD6zvKfhhMS2wmPJ2Futr5xMA2zmc9SiYwH6QGcUYJ1qiGYatAGi5DLmJ7BWAuVspJvzqe",
  "key35": "2JYJXaYkAuVtxcEZMKqkC5npkgkzZG2xyz7BcWJ3ieoLVHNGE39LCUeoPZJ6j44qvVLPLMi58pjryrmgthKndjnB",
  "key36": "3CgRT7DqgJHw1GSPqgVKmjyjVN2Qhp6Nkw75MUsEfH55eySQGXYEHdMnpadQjCqdzNvVKmCoC5DtuNmQ66PBTLwD",
  "key37": "5koE8JxDCD2572waP281NMrhmAg1eTtT9BwwmC4XhrwyuAJanvY1ytC4t1ELeqoUvbed8b1f1VGeh1btCKWCGRgM",
  "key38": "61ZAUDYNvjrjuK9ESznwUQTb3fAn5XYzVPZtsXiDyG8Zg2WbgQ9NVLJn31jUeZzbSUjxQ7gRPjqE5tdqBchhhF94",
  "key39": "3oWGCJngE9QBPozyFQwDTZZ6vsdXmXTZwjtLuK4Sd95nsyauoAgkq7XANnd89mhZJ82CfPd14RyHbrzzTzrs1yXP",
  "key40": "5AEs7syzigYnqYab7qRDsJAiwysuCT4hqCTFvJvbEUaHVs6gX19uR1W8tkPAa6a8CS5SzPbJVL3BgjSxgiGgBXqE"
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
