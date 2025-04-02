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
    "2f1ojTw6rgR31iBPADRoiYxBxowMYCMCwc5e5CDQhAaLTRhwwxr3yAQaTFMFsrVDDsKq3hwJWKgchAtShbZXXnnt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w8KzorNk4tKmC2daGkouRiaABkQdTmxFk7zbTud7BHgv3GKE38Kx6xpRtef8ZievcQYfuKww26AKN2BkyywYrHM",
  "key1": "3bygbL6AskmGYMFbcAokdMMB1MuV4fWPSMmz7haBSqf3vJrZEmhua8c9wk1dJfe9QqDrhNnJBVUDMhvoeuCgsei8",
  "key2": "2gjQLSEBSgBAtkKENw5wdgYTQBTstHKUezpoo7ucb4BVT95DxnS7Yuv83vHUpfpoxpmK2q7GxGhuGnyJvJWWRGfP",
  "key3": "31tD6bVNDXicg9RDXZML6kiAyLgV1y8KpYAjeowdx26hFfEoPai95H24yGZKYWNFXPXXB8hCdQF7aGCapfKGsEMB",
  "key4": "4uxPgeBMD3Fy2YcbawN8kuajVpRBN9zNCF5z5SsjMiyc7ZW3HmrVXuGYKt8Ae5WNEmxt9JTGDV6mzAVZ6tBJXemJ",
  "key5": "2VXrSVjrHeeGya8utsxb1Nyt1sz1PbNrrsXDhd65xzuxUJWWt6nE3p6pC2DpBEHLeeFYoGEHBaT2E5XcUf3M8rLC",
  "key6": "2mJNwUD9GQCpNtKKtw27WCkcj5Zxiabzukp5Hf1qjTbgFi7z5wVfidamFbhMrgPKE15zWRe8ogxBos8m8GdHzUG8",
  "key7": "4UN3m2hvQWxWiReotVj9hoUwsfhNeXmhapECo2b9ePqKc57SMbAdqHpBj2GVAFTMvQC8MmQkgBPDBRcqazaKq9Bf",
  "key8": "NGLTtntUwVRXnEuahZx3GeiDivEMUe3ZejvGwZCqMVtCwkATS3UYjrivgmFLbXrGXyq4VZw9cqhjJjNf3a6gNR3",
  "key9": "3E3qRX5tP89QE1mBTKp82AVqDe6UP3TPFaDWToHgbt1pABNQMWaxPuNbSe5Tm6f7Mq2jY2uvewiJeYx58aguN6J2",
  "key10": "2FgEm5umffsJoKD6pobxTJ1UXno4ifHerNyRRSdNFvqo7aRAubMkJ7qzHCmbgWe9jbEP92yn2D1Dk1WjzLPHeekd",
  "key11": "MBETbrihXJzd1b3piUcL3NRbov5FpVdTY28MBfTxdFjoqPrQqj6qCT3SgZmCG63t2cpJPhTbhrA1CnJyE1s8Dfq",
  "key12": "3t1kbHYNjuzJYMukBNACGUPV4VcazvGWezNW2nKUHJau4YmkjRB7jLTaV6VtjvwRLRCQmDQcJjWdCAqEFWmthNqP",
  "key13": "67KdFwScw3N8fCZrtxw1xX6tnCB4PuDtKBeHvZRnzvfva3TyY2Y49x91V5xhvCX5qFMeXD4zs5NrufWhzid44rNM",
  "key14": "63p7c2o8dmhRHHTuHKBbwaMuEznPQ1ptP2BAd7h8HCyzodmP92boZDufi8fkxZ9SGMwR6kBHm3gw2CPQvwL67u8h",
  "key15": "jjcEAKvioUxSbYamDdBZMv3MKVqSAy46HqQ1t3muo9Gq8VbRnnkUhq7r7kAuxSeAWeX4rDgCenATmsxkosuTG9d",
  "key16": "5UbHoQKy6sM1e8Zhd79JVPtxMHZkGG62YJYdMtWVu7CEJjwqoppaGZ7pZtg1SxtZVTaXNMcEE6uUDXHXtK1KdUnF",
  "key17": "f4Uc3EQf9okHqvKBYkYvX9dGeVEX4LRdZW5hWfbHST1oB3XYc3MDJhqmPxLzERzA6riotZ4JrtHzAaqQQeEG8jj",
  "key18": "5ywHA1d6gp9pTMUveZQ9v7XsZZvqF56fguTCzhvzkTBvZeMAh33rvDxAhsqRgmqZZmxKKtwiejz2RcxaZbDL8BLm",
  "key19": "4rjG3WT6RQpoDeMTc3DJjso3tqREA8R6iqdF6sYZyMgexn7dKVEWmUyCQ9aTd9zYVDg9NNma6BRvdencdWPiGrEz",
  "key20": "BTM9zTbpXnBiquRxnY8Ry9PBNF7XyXYFeEwE7fuhYYk25LR2iXXzU3ay6Xif5KTpysCQmE5YX5Kze9EotGzBA7D",
  "key21": "2TKPAESNPEPvbC5BEdYfwMPu2yz237SVTjFHmhcdAFumVkwPtBoA3cmir9rk92D6KX4ctN9XrGmHcjFSYKLynMQm",
  "key22": "5yxhou1BRTxJYBhhE7KMDchtnJHzKAJksGJ6hyPmjcj8m3v3rxVGNe6ZUiGrvav3ATdNbZ1dsDiN9wRQDAmbF9Sx",
  "key23": "3AWLiXTHjXbbc48fHoJ9TzzW3NiTte1vxnyMr4PwPuVaqfkeexoyFDAJusx6a3GrLLiNJtRQHdcFsC9MMmVjbzBL",
  "key24": "MLepB33Vw12V5hd3GgSxLMHaMe3fy5LKidaCnWzGv9zdahmSveLCFMuFEd8D5gucSN5Htvd1pm4XFpUBKmuEn8W",
  "key25": "21Np5LhXDjrcbzpsAVgVaggqv3hus7VEGjGR5B9GG185mT9UGaW5kcLUWzvuo2dbroLoGUNyiQ5dFZhx7YopDxUE",
  "key26": "66JkEvVeEsa191uCUVUUthjWyutqqA5DPdoaxQHUvZPy4KDrBmRLJTU9nZC4PXsX1LgDZFwrgg6BgJ74hv61FWkB",
  "key27": "4j7JnUiF8qyZYuXC86Tzcaw4QKkQqE8jdtL9jcghe2PLW5eiuo7hMoALPtaZtBqS1upJLbTM4e4HjhMBWtoPrvpN",
  "key28": "3JscRLGygK2TvhLu3x3BDdBDoKXtaS1WFmNaokMCWwXs4EBW7CutFtYb7MLjJ9ZGZuvgvxLqDnJGENqkoSU9DoFv",
  "key29": "Uye6dshqe5VpiXWjvud83twBeH3wGUu4eFa3yiJ5yJZKVWWSGXkJDjwLGM22aZ3BDrYa5oVaubGy5AjZwXC9sDw",
  "key30": "4ikab8qFpfWaA9dz5ouGAXo2akFuYiHrivQA8S5YyWvAu8xAp92jRh8NZMEiAHEWEd7A7Xau831HHBScvCKZnAfG",
  "key31": "5XBKh2fbvhKTDT2YYKdwkuGMas8VmiJa6SDHNuCTJTwy1CMy6kqj36GyR7GdmZJ4SbhKiRERnELVtcYGQjLThP4c",
  "key32": "zHEFdRQibj9TnuKypFmW3PTBcRzGFSMKvNo7PeZK8Pq3rqLhmuPwkTFtCNdpNZiHDNnZYKNjUVRRQ2uCEYaG3LD",
  "key33": "3GpwmybxnDUVDF4j6bT7wwGBhJYyLyQmRojY8wkWHCbr7WsEi1qG2ZmH4vAYob8AEhYG9X6nX9FDBZerjo5HcvwK",
  "key34": "38hvAd2gi4HtcKPpSGW17ELdMcq2aeGsdbLWBZboiV4qr7BpXgkcyNJdHwWmH9D4VUKKyobd8VwZvjqdVStJkbM8",
  "key35": "41KuYif2aBrsS8UqFjkscFydZtTamELMSiKS3n9cM2K11wrEeoj2tDVuuRkqY1ASSLB4WgizeqaiCCKRZmspmvkj",
  "key36": "Ypjrp6erM1Xi5uXaxdwKFYkqbUpSpwGJT82FbnFJ9EzNFJue1AT8W6GiG3jbKGUwANUumj73xoE962cuznCsDtL",
  "key37": "63zfbVKafLrsEbsfxHun4JgYqvzpTJ8BDPDcZ2NJBMrJ8kduozzwfR3myosMCDfqR9tBB8cVKpFZc8KHjVv8uBuL",
  "key38": "2bF1b4dumRXdTtQDdpuSM8kLv29RwGr7whvhikg2bCHW3ZPdwL2HJPKdQJ6eGPkXtvQ4NdEWRmidN4JeHznwRara",
  "key39": "3EZukR2YnLDsDSBScdmGtaauKCSESGNnSnpwToCm5eX22bioZRbWKAwk1CSTGdr9LMi1VeNvoUGXeFmiQMuDGyKv",
  "key40": "3cm3giQDstLDygTN59W6jWxHCfTZBoYPHCJsLJXYHV5DknuWMsZfEkuGLcEkz7tmTaEtm5rYojg9JLQ9XjzsSi6q",
  "key41": "49D9kbv7rDHeh9r1PwtbvV8HrdLGABQbZHSpasSdNG8vL5xWApWCfDwcUgjWsLsVPTbHKS5ZfnzHTPXgkyxiwLHw",
  "key42": "4s31ZbXEAKw36zvSweamQqvBNtLm3AiohzYwkCcQD4spg9XxamSbjo3t8Ua18m3nYzw5eqY1Xr6vhp86oDksohuK"
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
