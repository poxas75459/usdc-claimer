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
    "3V2fTGGzT1uhbqSfyDkGmrDm4oiYggCS552KETo9jtC2ZoZFvXY1i2vxo7NeT4FLHVACiEL2rsdFVfc8oAUgRUEh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "69XgMEngKkJzGqrstMkvqRHjJMWCTpWELAkqBJrUX5hKEwZjd2yRVdwUV9J5k8wnWPfbqUfZo4sYG7rFUBD4x2r",
  "key1": "2wcVzt47GZvR23WSC3zmbjrKXyoXGaHFNStPUiSTrDJyVUFDN5pyxKhtW1RDTXfa8B4ZBNrWQuP4nRYu6Yw64oU",
  "key2": "59sKZtAfxbkEnS2JNasba4Dy2QmbDHrfakmckwenmn8kXzKiA8AC5oLzgitFTvFogE3n7NGLgZwY7mmTho7Mrgsu",
  "key3": "5PfVmuNCgJubTfdkJijt4ZigeZ64Mb8LNWSXfzLELgibjQFTucEuqsLjeuEQfabApqpmG76fnNAjzDNj7t5htwTY",
  "key4": "5DKyS1LLmKS3FZCjLZUF3oNCaeoZVFPwjPB1SjgUQQmSUL3p9sibur9eAEjaArw2P32mCRjmZwiwiYziwKxYdD9a",
  "key5": "58u5UKcMyX6GV53jwFkua2DHPQyxGdPVQa4e7CW6tzGUYidY23doCDmZ5ujC5Wyua42NEyqbdgEB348Cfd7VzrkU",
  "key6": "5w3GtRJfHziFRvGsaaEHFrCz5QuUeFBrfK9rSVMw5FewFibPB4DUWG7PL37JPzJJydFwej5hX1HemxRcLUxHRJsL",
  "key7": "3aBS1iSmLJsQVcfxtGraqo6neajFm538hBMGTXTKUA3ujGpsWyPktxj3asNQZdrJ8afWd7qJfrTLDH8SSzjSMd2x",
  "key8": "2rUvusVGEfSR6u5oGXXJWTfhJK1SSPVQudPazdf226kEFsdPidNVSUWWJjjSiH7ZQhfBnmBPtQyEfSYkQeUbsrGZ",
  "key9": "5fMiBdunELtxYoYdENiuDDfpB9oHTxdLYNMgw1vcTE2T3zaK7HhN1xNC76w84mkhYQLCYDtDFptq6CGgw64MTBeR",
  "key10": "4GRZYPBuj3FLdGspU5KcsbPgxHpXbed3UdUHuGUhLyyvcaY1qGCFrWKRmHsCjrqxj4CjsCxNJwpwtEMgzvZ583Mb",
  "key11": "2Uv9u4VXuM4sXnM7vsNebLE2tLHM2h6Ah8njpqYNhdr3sC9eNW6s6oBJ7P3Yk8VXYh7hRBhEtw2Tu17njBWzqT6G",
  "key12": "63y6YgCALDWNw6T63JjhPY2AMr2drg3owBgAQh82HekWMB6cgTM3CdjQQ7SctZCGK7wBLHRmnKvn5Bx2zJTxLRnh",
  "key13": "3UcdTv1eGLURez63382zD4Vdok39Saa7WUz8FYChZr7h7dJw8NVLwfFgrau2QeaMvNguyU95BUTwKbPzLDoTwiVX",
  "key14": "3kT4TfRJJTGcj17mRWq1P8V5xBUWmoVhaQHMHUkzCDU8d72tc4ywcGPFU6fGZqkk55uH18HHcTzGSKURjQQxFK6t",
  "key15": "3PQcWstmawHmgpQc65hrLp7M53rWMbnxso76wbWDdWpCBLSspztSfa4JDnrC12tsQJq7uKiiwhxEgWy6o8Z9Lmnq",
  "key16": "2QPGwkmK7RuxA3Hi6SKqq5ASLuosJwFTFcoSmC1ULt7EeBbhgr1brKTRsLVRujmSQDrFQyCaySHmEBwC612X1R7k",
  "key17": "3AKyotsRGXN2CeJtvm2rYNScHWb14di5Qv1RZPFwVCXtu9hjPCBddEejd8RbjXR21tgd2DKTrRPEU8up8eMz2AaC",
  "key18": "2joMfYNBAg52WShLw4YcXBaFHckCKSWWKCmZX9Ucgg9mSw7higcPY639ftWnHjQ3M54DCH61JeS4qER8E3HCs1gN",
  "key19": "5cqYj3UwirZCYb6YZodyJLoWBz183MuC3WZ42XJt1jP3VnanyA4f6CyX1iaczeALnvVjTA9hPf7GrDonLbas5WcQ",
  "key20": "2W1fHywZ5TTBmPdinb4p5hGiuDRCTEKLS8hQCjLQBW3whNBXZqenefS1JCK32avg3ojhipnHfJuMvf9xumiiFFzm",
  "key21": "3z7U35roJfZnhWjqN9BhNyewwHKAqQX9bDq2FrgCpFE4jxDGhsqajVeoXSFWSU1xiqBw4vpNUsr7rKAM7uyuCgeM",
  "key22": "2zkx8sqJJMeaHJThRLiDNDRfwMsi4KsqoghYsHzsdxa1fkjByf4KDkrrCBahaU6oqmc3yJsmvEBydqg5xKPdJgGE",
  "key23": "Xgmb2RjyP7bFLr1LFE7xLfSdcTKN82UVTy2VLWeX24VCVao3StEJ4QTcpsobyJJyvrUpuf8B5KzYjyixWLiygVC",
  "key24": "3Yz4aqZmgKNQQhX8WLRNbc4cTsCLCDu4sGk2XD29aDZTdyKGhzaw63ETm5s1ZvUYorBjMWWY34YdUbYPce2FM3Gm",
  "key25": "5N4PVcc2HmbKQym1Az4BahgV2AV1tX5moXV3uXs8PJmyMgYg13mErFeTBAQVzXR4HwQSZejwenw312akBBTZKfSs",
  "key26": "2wiWKeqTutrFtu7JGUcYfPdwBL3iEz4UiLjr3kMowwt25UVoxHSUFM7xVi4jtqBmDBqZnt6sGNAdsDfn86gfC6zw",
  "key27": "9zZMYwtEiJT3wNLmB5ZNtvHGNPgQZXaewmJ8ZPrSEhBhdux4rEc2rKgDCy8piPXRnrVkHLGdbdYRC16Ncy6zCXv",
  "key28": "4qCRpCJDr45dRxThRgMMH4624BbaLhWgLXCnfPqyT82ZEcznmRVtE5USH8GdAAXFrRk87Gd5U2RmHrkEvo15FX7J",
  "key29": "2f7sy9ekX2BX7pSzmsydfiTPHipAhgoifV4M9GuttrCr6QyYNYYDaeSPQLgjiH7ms8vG8knGGQDgnCD9wAV87cAm",
  "key30": "4tKSih6mGWtVpDHZPxhbkjVXa17XPQGxWa9rLVdR5zqU5dvp7N5dhNDKZCWFnXNW3VGUbbzhFLXCW54rGUBCiai8",
  "key31": "5GE4FTR3DAzAHcQK8aEo3aVSQuTTZBifgdsfAhiWW4i77Eqtwhfjd5gAiGQEXeZYvGPg1gxRCpyrcACfGHRS4pSH",
  "key32": "4EHdM8f7xpbtyr5qpN6jtEy3fi7FzZXa81yV9mtk612vBmZX2urMmwi6Koft1xDtMW6ZnDoDWM4zskRoZ6wG7yQ",
  "key33": "DZPJDrGx6zYGvreUoiJm8FPpKs2bzzPmPTLKcnHwZwSLaVhJ7HkEML89AyigTyLXvKthmeXidySvwsqrdDBJX9L",
  "key34": "4dbYQVRVcYsbzTyc4ZjAK3Z3Zd8Wt3BB561emHztFUAD8RovLNTWC4zEVr3sHGfZ3rKzH8jn4J6hntKAiHQdig8Z",
  "key35": "2CKy3Qd8ZbCg4h7pgmVycaz5W6JurosUAvt3vRqnkbGoVhvQNFzD2Z45SjRsLttznQ1yconnUjv3aagMacfB366Z",
  "key36": "2dhUS2HvvG5KimZS7AGE9nG4kw2GjA9VQeyw7khxsAtcVzmtjTs2u4dJ4xEFMXrzk2zZAq9u4AcXsD9tUcffSjfM",
  "key37": "tbj4spvJ9V2542v2qwfJ8VSuuYgMZNwhB8czAyfYpqUFPJf59TgDMePpNWwXKMfXXP76CWxaRqAj8U4yuMBv8vP",
  "key38": "2HwwLWyZkFPjYA27zoJLwVHCf5C79ddu7Ej6cz5fSMySYKj27HxB826TzWuxeWVwnqiWbvr81e6fRDKQikkRFZpH",
  "key39": "agU6VAmHNKNd9K4WJJ3WtFWPz3FG9F14BUqe1QcwaLxnozmuVG8H6KVx71fRBEjuvSi5xkt6yxYcekroJSZfPzT",
  "key40": "4gfUoRTTxJTD1EcNtTBi3zdhU5VhjLU61w5AWrsyjV2aWQg7uyXzUAc5hT53pocx7vnSy3L8y6EZLZQC8migHxaT",
  "key41": "5vT5zyqBZsBrhad8SKFRD7haBQJBbgrgjYZ1CzaMJutSu2Yo5xwj9UXrnNxP5sGgm1xJZ5tVZ2K3NHYvWFxwQxwz",
  "key42": "5h1Uh18cnqJ4zEX9WjXprrWkrHAx2xNotL8WShQcSpe8LbMUinofNt3LvtU4UNwW4gqwF7zWAxKp4VQPzKk65Whh",
  "key43": "2G77PDRHYEnzDghyw6cdM2cekGwQ8Kv9e7EcHejX29ehyb3CfvniWZibSw14VHW8ypbR61aui1FgnJtQPwL64gce",
  "key44": "3wXjt1PXyWLL66W1AtBYNMy3Y24pAmxb8cFpGmaBgKsjHDrVRDZrqBwtnfL8qXKTn6b5pJwJVgq7dGEzm9bcCduw",
  "key45": "5SL6MPCypfKJLe59jgSCrmXQ8UvgfsNorPEneNnRV9J5d84f8YZt3keYtss11wDsUvZ9Adxzh8ZwwjwT7CKw9t4W",
  "key46": "31xrsE68zJUQWDUbXBqMJfDGkuZYKGdovw5k9KQfX9VZtK3ehdFjAsB6iYMK8rQjSWLULtsNQRJK2mrVXALcGZoJ"
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
