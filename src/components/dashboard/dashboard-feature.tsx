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
    "5dN8ojBghvtH1KCpVy5MPc2SWzVK4cwx2HJVQuVxRDLRq9AiJswb2bcQbb75jz4Xoirr1Rg4q7PvrFCUHXq5Wavr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QLrKkhRJEumgpyfDZg6nu2fRqfBaN5v1GK3shygDCywAbqbtJop6gpqiyoHE6hgxhTq4iwqV99GsHm7hbsru4Hd",
  "key1": "2MHogZhNAjjdWKgGokwrjEigBjSQMzcDBg8AFkrGQbQoXtrT3UM2kDjeF3kNd23j1pZCAaeKMYgHW6q5LdHeTBuf",
  "key2": "2eF8CvCabTJdmggnEyxya2qGx4w6yWf8ZfCYgEGAqsUprjruggibz85JcMR4aGCeMUBFQVxurNRan4xRJnqsvc8m",
  "key3": "6xSBivNHhrxUHiA3CxJghX7gciMc8oJPnFjUGk7zGoL7e3g2akmJqsJnBnKi95b1EgPjSUbAzJTP9uXHXjHFLj9",
  "key4": "zhJ91zWaag4WV7kxjvWXgzDi2cdtbpPgqwud9VrD3u8Bhy2esdVkWrZrPxjt1oFNeVa4XNjZ76EfroveF4GjTTC",
  "key5": "5YSW1rv4SQPZiGGY2gAhXuwzYp6M43HgTHx5rKdWdRhbDjVRXe8WYRxctiysUipk9v6ivNfu5XgDLWcEVh16rtiq",
  "key6": "3amYPgPByYjwKmBU2nBTe7HF85w9vVtS2frAKxnsdLHz1o6WfLkfsN5EWaeuxkAvqmxG6CxexGsqL6R74LnrR7yh",
  "key7": "522oafZRQHhjqstR6bWnb23FcQAdtx2EJkSmdgPWooHxtDr5juFUm8B9ikV4eWjYRWBdw8mpNiBvRKZ4SR5dFwVU",
  "key8": "cWPqvJ89Sk7fjvmPGjcK5B35S9j3W5ufZLW8tzJeehcaD2hHyDbVQ7WBz1JgGe8WoDueosEe7G8nrSzUs4d3NQW",
  "key9": "5WjNa72XoZxaWVmkWw8kNM7XSEvrggUBZRjXtZLUgjPmfMwwo4rqtLUqtMuheJvVZ6Emq6FwdAFn1BcKdGWMXKLH",
  "key10": "HgZPkiALSsbYDSCcvHogBZSCjAZaR9kRNPAT1tSbfmcXf8KfLFVqmXXMmPbDv5cUFwp9rdnqPRwVQaW75cqZVSR",
  "key11": "3xGR9v92R3VsZmXL63GZbyshQqjPbY4THgsDa25rPtZoSgribSHtSRrmHbEsZkSVB6z9xjkZ1s1Mb4GadWewkVZP",
  "key12": "4UgsKUNfvMgo2mpsoUtgEGVR3jo71DMa2mzSUV9GFTwqarvejJ4hcPz9wXhUJJgzNvuKc1UH18yuKAtiEeQXp6Sh",
  "key13": "5m43u1EJ47LpPXqqxdnebzGg4Rj9zNaT3wFNi6SsoqnHYufyBSFYEE3c8JZ8JUPc58TZJWwvc5DHrAjjSALkGg4R",
  "key14": "7hGnZYWj8KJfeoSdttSFeT12jMg3Ljoh62RA5tvg6Mq13xFzqd7RXCvmBb49ivjmYzKXiSdsBiiCtJx4c7mxu3Q",
  "key15": "9k2KToi4SGzD5Fh9cxRweswfDwJuhnxHAjGKyQkgysJ7ajvJgK38e3UH99raNCcnYd6yLvxbZwiWByGhz7J9gWV",
  "key16": "5sC7WDnUedukWJF4HGpkPaPSYpTRs1u5C4tXhhtXQbLYMGFcviMJyxPUSdzwAKKyyDiaXVyZWseCwxEEQaNwUKwJ",
  "key17": "34qagGzsQT81SuTa4bUWa1wSSJhtLBEbojc8yApECoGV74wH9i74b6u7odnKMFdMeWDyuzLgRc966KJcy5hStNz3",
  "key18": "4ourEpdsb41QjMkvzbo33EyA2c5GGJs4HhcMtsWNfRAvujopxRNCc4t6Fcqc7JxZMsYzUXdGYX4Zy9RZCbZrmjvA",
  "key19": "2WYm5gRthycy2GXPcSUAT2EvicjyFEoPtpo5E79Rip4f8EXAD9o9VFojgvEGLVP686g8Z81jVGYzcreBj2E4NxPv",
  "key20": "4h9zoy9fwwoSdBftYZfCPAUmFxBt3NPidsTrMYvDtAM8BYVjWCfcXVfGurdrkTAisgK2Fa2tyTrbx5pQn1PkSiFC",
  "key21": "4WLAdGsBgoENQuqfJSQm824kVkfoSGyvFt69SDhk3BQDdM1pnJG9fSvQCPR4yQA9rps6oARsSqKB5DCA15B5V9Ys",
  "key22": "2qDapicHMS78DUzboUMVmxe5CYhSkxuGByRmBrCKg12xHcaiPPQpLA4p2R1Pm1xfYSSbbYeZH79MPcPSJR3wWFTC",
  "key23": "5qJBJ8YisAHC5LeRVKQ9vxYPTSy1TiqT6QjVxSgmrHGHuFU781r2RLbX7PavABoy8EXnesEyFFQrB2CBLmZmgcq9",
  "key24": "TvhLyqAEVpnE6HZhZDM9ERBxU5akEp75TqfmjtRNHNyuZdv4K7eP3qnDAkA3fwca6U91m7Nbk8f9ZXd5gk49V4v",
  "key25": "1QLXPcjcfUSTbTNuFs3DpY9WJp7PYwsKESpPcrZXT8boXHJ2HyBuww7XU9hYxphpAQ1BRZEXK5M6VqiP1sipEmT",
  "key26": "66WiuxSE7g9UuwGtYijGycE7Eeqid67gSAbYLFrV5Js3uZ2ShMvmVscGeRYBxmYBtXPcbz1MZ3bESZVa6Df5H7t4",
  "key27": "5dYaRmMsXmbvFAZs9N5p5zT5L2jGJLqKY1i2M2K7Ssa8SSCN6qaD3ia26z2T92Ha7gPV25C7ETUTJ2yXzpGHxP9y",
  "key28": "2M5UjajKjHCQBJGP718gtuncj6vbExjkSkJgbRfNpK7APnQ8pqXcDE4Kzn167csAXR3ZHuq2rVQ8tQqhqYgF4nUc",
  "key29": "5QghZF4s31ryqJNzrwNPLQ1x2zrGChNA3VUcTcKNLSaU3FcviX38DufiGNhZmvBaF8Ryr3v5kzUbznkf18Ajvzcb",
  "key30": "2jVkroWu896DMMbCMg1eagheCwbWwRbqk7aQFhSmPAMgy2ExoxfqdCZpepNkB5RwwWUaozU2YxGrCxdymnhKiQDg",
  "key31": "3HHA9fdBvuiNFyycwP1eAD9B2AVGAZLys5WWpRhQpYRX2F5TFtwR6qTXtsiggtXUWmRa3UpBu4fPdhZuzF6aLZAj",
  "key32": "51Kd6QBc4wqZ9VUqydZc2v62J2ycVEGj47PJmXxqZz6wWwfG9eE2DrYx6f4KE98JsN8yRZy4b46119BS1f7Xi6oj",
  "key33": "2BeZKgZCUcx96WYrdGi3sWW9k52TNDYLuNc3Q4QLnwNm4neToGXXxixFnco5YfMxAfR3uXuMmFEBkyoBivvia3Cx",
  "key34": "2heCnMBFFde4gi57k17EdivabQaK53kCRPAmnPsVWPa2kHpWNB4Moab6mUHqGGNC2LcaMAaQVHYhqmDoFAzuajXn",
  "key35": "3ASKXzHVLsjY5kWuAPTmZaNSYah3gKXYgXzoTcHaMN9bSSSaDGbuqdrfXj5q32EnJoDa1JtRoEEjxfSre981gSQs",
  "key36": "NmYNX5VbHodXL33Xidm4s7dV7gDLaWvvfKgpjYh4DoWf4F9X2XQXGW1gQ8RDLynucffoa4zWSiAWmRbthimGt5q",
  "key37": "4e51e4u3ZAF8CET9qvhFMJGNMGQD645fkDEHwHSMHtp27VWvepts6FVDxN13uXWBSuiWx4yyspudLWvUECyCkBcD",
  "key38": "3nMDZc87RafhPB3tbj1bgKv6U1BqGGLbUavH317UJ8gpHDc3cUN65ZTj3EKBz7sa4hQvCnzjfHrmaSTwDm4XE1HW",
  "key39": "62KsAGfv9HpFKF13pFJ7NoFbN9wijeUJnXyRyZKe98gLiUnLwCNtcJsAFsufhmBYV7U9UpdXX2dQTFYY8MFNd86F",
  "key40": "5eVykYNzB9qK3MHVUXwUEFafgakyyhQfAnR7VTmpAfADMjM2jsh8pY2Bx5NHfptA5zYsPnKxbgc2mvpCUmcWA9Tg",
  "key41": "5UMAiJKoNFYYdWPc8LPqU4svdJPYGSkAHsF38sPZRtWwpkQn5pnD8XzpswXtzqo1yvydKf7gm2jdvNgZxbje91Ks",
  "key42": "52KSkJZBYqQYrXZsJuPFVjKqLcvcCb8f1QtHUeQMsGxPqUzPEXGdf2qfkzPx7WRqbP78nLQSX67WAUQfXREvBBsg",
  "key43": "4tKp8ATv1t676xTxKbmUcwfAiJjRCd25f2ejHxNYtQqtpfeo6eiRV6qxqF5LyznthErdiqHwnWgArK5aK8xFqpRx"
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
