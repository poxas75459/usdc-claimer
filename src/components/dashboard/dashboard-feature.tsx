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
    "289q2Pc8pTohDhKmX1SZTTJGjExmDNXftcaAfrXH16kpSRscqC4TD3HFfRXeJNFaA4FooZoje4V61d8na9ic3HUu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qKkkq8RKZ8Zp1ybF3jWS4RHGPV8x2C94bLjaHRg682SJzaWJEixSgLmdUAV833yBYFwTVVsukyhChes5rzkvUwA",
  "key1": "3QFnWTPvFELfWtohk6TUh8QU9mxDr46rfrqFTwga6NzGQV4CuD8bJySK4JS8pFqQcArVDtfei4xLb3eBWmTCrxs9",
  "key2": "2iHMeEDanYV7j8M7HKpTakfHxBR52TikMSQNNSjY3tPPqVo8L5hnywD85fjuJpD84sh2MvQVBvJokwiYnCwsxC8H",
  "key3": "28mNfUDqMTFTDpx69Gv8uvdFjCHKz4rM2jWW5vCTdW1u2JaB7tUncFUrKCBg5rTsKWiwweTFiq8tDz3x17vKUj5q",
  "key4": "3YwJrHQGcCj8ab2Yfkp5Pa414b7C7Yp6TuzsCPN28MBWS8o7Y4uokH2Q14bV3YaM9ZVzVsDyheZ4N1aK6xzMbJUC",
  "key5": "3b5id1YNiPvJhau3qUB8dm9kc26RmTbqR2wKMHQTWciLWCDgZdrFkUzNouj4aKwkwjcoLQWXdZJ5gVw3d1jNbBgK",
  "key6": "xngqhNZ27eVCfa4vEUvbaGHk68JE1zFXTrH1Xvks1hEq95gZEMznHRx1tD2S68bgQLiDmTYvJ1SzGQ6wo3vmPGU",
  "key7": "4dwKGZ9LMp5vtyqqjQSrW3DxDA66dbQPBA6gAvvVzjrmTCUr3kdi2qhEdR25MNK3Mfux3AJKrNnF1U3VHz8e6JZo",
  "key8": "4VZDveETrpC4jfTcCGJDtzW6URjsdQg9WK4ExhwJD7yXyJ4fc3upNCyRiiW1xfUaXGATG5VyA8h23BMsRtZtRRho",
  "key9": "4M9xdaswgWBJdC5x33d7PYTBmq6CfrJSAnfd3f2vX1Aec4xkWSc3RcRWcVaDyTn5yTPn6moLjGcJAx5PqJafe86F",
  "key10": "4AVwvRd1QouccrXUZb2NRrKfsNHEUKYK9TnERxkzmsWrNQRYzxmnZHC427gmSqMoJYK6n3ReAiv6fE959hVvoSHL",
  "key11": "3qLa4YoEGsYsKgnG48P9KVFpGLJkZdqZfEmBPK2iBnnRvmHHKUpZ7Y3TVvFBQufMh5vASdL6hE1f7qJKZ54sSLuo",
  "key12": "216SJArWkaEvnLz1DooZdUyErzWSVChhVuQdUncqNvkA4ViqLDUAUK7Xt8BQ273pRzWRSPQBAAaVToVMm3K1tSTR",
  "key13": "2oq61rTqQACtNNDiGbiAZqnMz28bXPCXXCfHeTPAoTFsNVrrbuHfwoaeLcsb7cLcuk9XiaKb5akdqaoAf2dSui3i",
  "key14": "4sWMgkrnJN3vPsmnsyBcUB5dovZQy8PQL5FdA9QYAfSj3H91fax8nGWHLpnT8nA4iSV8bMJjhKo1obAPXg7vWee2",
  "key15": "3qBPmoE8cmZDXJ3jo7GcEqyjrQAARAAuNzaQA6Jt4vDsedUG2MB4WHBk3zCbcsurVhxVFpNg4w3fQrZmuDA5nSek",
  "key16": "4GrTQdpe4Wg9C9pMJCFYxJS5nGN4C5A9KsHKgarqCHCKtcuZMxTiMDKnqSqiBXFsGhVsvN27MCLrbP1njpETbE9y",
  "key17": "5nFjvRia1zxKnRgoyQuPPWBZwdBJ38DZ7316Q1PpMagqZw9nUAVadpa3GKt9oYXhLjKhpC6bUKHTu2QMD8Z1PpGs",
  "key18": "35B891WUKJV3vSrSGgZhVvhne28bU7d3RziD5tUe8TdF3bYnuWPPKkxhWGJnZ66QQvaFiz1uyptvTXpxK2RBemr1",
  "key19": "34HeSgbz55Q3ULPg7dMmVvDFT1bGmwA3J6YA6xmwa6atauDoG95Jue923zBs8N63wbf6hANubYttutjaekQhNbi3",
  "key20": "3MEraaXb7eQkBAHuNfT1mzyeJ8r8VvZMscX5qD2zALyippz6Zp8fupewciBMhsiLWBFokZYunBVhHYBNAVv7X7Rq",
  "key21": "4d1GVRAiDFrt9DtbytL2n1xhhdzfnGeuxYzsi6zcKyog9gzD3WHYQGSDBhavG9iPJVQF5T5dwMofQ36BnZBfT7g3",
  "key22": "Gz7nB4djFGFktjmeoYYCQHkTD78EZytNmdwr47NDyHWiFw2i1TtnQiUkFMqA5hawn5cHEmADXuoEirfA6ssrLh2",
  "key23": "3guSRqG8LX4YCSFy9Njymvdi4Kqy1mANeCZEu1VKECBTWkbu67y24MtTHYxFhCSoUbipumr4JdwTFzDS3n37bsm3",
  "key24": "2bSt5aSRuUoCAu8GhGoCqGzCEmja8YvWAFtAze4vs1k4ZzQoErDuVGVP6vponpfSuifWNoqYWa8BWvM8rYN9w7Zm",
  "key25": "57zJjAwGbZPSRMzFtvYwZYPZHxbL1ACYZJt2QVW4V3jnJcgSXY5kdzr3VTApuVyKVfpmbfraxQYE23vmErppdEJV",
  "key26": "61fR7zad7k1oULcjZf45abNHHxH36vcNMm71Nq7q2qtHxRoBfVG47AMeyGfwYawbMxutndQHmrcovPt7FcU6TreL",
  "key27": "5ih5kU4bNrnqsn6DfXqZHKnQpHWbT8hw5WCvVkAuhebYGi9j5PJJjcPsubMe2WRbPymNmm24ouEQFgsaGxe5vQ9",
  "key28": "3tjcegqhAfeiJWSky6yLDzQ5nY9fX29mFbgEemxtt51AipZRczCPUTtp9k62rg5jmVz5VRgSzNSxtMzwZ6yHv1R8",
  "key29": "3FEuQQRxvKQpXVLWi7PGEZ2GwktUE9TEFcpDF452F2GXuAtzuEqPuUUaesShVxYN9dTn5P2x8eGGtzPn9P2azvgC",
  "key30": "49DP5B3cbyXdqmEBgrS4ra7Xf1X1Vw94FvtvhxgVM4pfW8BRQdvZhCfBaD3bGFjxyW9MWP6gj78htqYzBP41boJ1",
  "key31": "3gKAFkvBsSPRMxYMehpwm3KTQTWm6x9XNjKsg72LRHJSHYDqNfQp9xMaqsTHCE29oBgfuqxvqHfR4x6wNUHCjKim",
  "key32": "2k4Lbbk2VY9tka9zUrb2gxhJjJcnojrwxWmhp6ociYr7hXhno3dkEnVrc7kwVfbiqQfvwZdAmBSEVEXA4HZJCJfX",
  "key33": "2WXRUB7be63RkoCNXvFAZxyjHPnDYgr5xzY9hcK66hAnxSoMLbSSWaBW1Sgdu5DN5ycVRdaRQBfpJDudK55XAm5b",
  "key34": "HJ9cgWCJf9CLkBhrwSqMLo4ugCL1UKegh8i5vDE3PWnff1ZbB4aFv15rjUDA4U2cxdE1rv3HRY6BmucnrwizXGP",
  "key35": "5bNjmxrC4cSjpRJXwFQbAFFcpUNRxDe7zUR42s27Y5PyfATBxmqwXAmLgrzw6BTNbxfETfJLmcPRP4v5Q5zZhxVB",
  "key36": "64ynkkFkPVfi11mrajBL4dbou6fBjKCaST9e5zHBGT6ngCgiCHwuTuFhhdtCtwpiAtHZR7dg2KY98c9aS6K2HJDj",
  "key37": "4BFa6WvJyCs9i2nzpFAZFqaRnPo9emRWquzMrjUhQHBgD9GPCV99yShy4zXHRbaxKQF6H7GV6W8drvvitq4SAevz",
  "key38": "4pL1gQCHLpjudBHBJUU6pmMuND6kUKfC2LAwZqPXCFgLK8zPjG1KC2wDp24himSWgwUSuoKjYsc1qjoAmpXWFppG",
  "key39": "4MeJ9yaeYeg1GkWxGrcu9eA6mM3R3LYmhXE1LWjq7EfcTsqqiD7xMjmVqvFLEmQmSdPoiNsUu3RW46QKyiYe2X1B",
  "key40": "97XvNbHHN6pS2AfrZzLDBame6Np9XiSD8v5u6cGXeWQ28NpaMuxpu35c7hVcWUWvBBsYKu4BpgFhWDkM7Y9esUi",
  "key41": "5bmSJvqeZAebKUN1gs3oZbzsaami9xNuxKFp8HUMgpFH6vH3oDH9Y37sV4qRZViXCPLcVw6GhwkAaugcNUfE2F7S",
  "key42": "2wjSFGA8RyZWQBBVjPaJjzQnvuSmfmDELpjMdN4GCWoMQUXJocYdYkGjicZWT3Anx7vPQzf9BrxeyqLVi4F4ggbs",
  "key43": "5CJhHvurE38VaUXKQesW9kZ7H8FM3o3KBmZPfSGeanMgVsgAjJL3mwx2kczcS6vRndtRLfnFYGfVFF35kes1Sf3Y"
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
