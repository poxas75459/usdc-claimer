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
    "2iNjukRP8j6xQKUYBSDBG3f33GLyfj2UfJCfFLhn3SRHCvZ5ydTwkBMtCrDgv1CuT8jkUDVdk5bLBA8YojJ7EtVX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h8SQVGtGBhZBvfrLgGNJ5fXvU6nYDBfd313JRLYDEYRE88jFxqzZxz43xFX7Z89Fp6SkZK9YEFtvg6Cj6aZikje",
  "key1": "4afDGJZBaPh5GbsV3gxM46LFymdp2ptahNN7CSqDNQ1e1bwt34ufGSGF5y4oqwkLqji9QMTBfogUDjnYipRxoCL8",
  "key2": "2DE7wbLxEfS1Rq7ohxJehkQUGXVPRLhxPT821FiN77Wm2ePJaVZKv9bpwYd7pUK5yDTec52zEAJ9pdV7H2WMPMDZ",
  "key3": "3nSHxUQ8e4tmbgpX6RcSLtRhH3H1dpjFn14SzeNNAY3S8z1V4DfTaWEqr6DvUHN9ajJLTwy73NBP7Ho96zvc4Rgd",
  "key4": "567MZNjcpYkg15RBdQTNGZ6UNuWFn9J9ib4dX8hSKYgK96HWBSd5ti5MjGugSsLCA4AVB2YU5NZ3DjeHMeDMnQMc",
  "key5": "aaAKrYcmDsoWCe9JWooJz1tMXxe6FKDwqXEkHkMHK4eyT5QGJ2ruqxFyuUQxW9QQ5m59jKdkwnRwkWjWnM1yc7V",
  "key6": "5sTR43YUPbrYaFf77P8TNdgniWNG9SNRFbF8rGf6791nxzacQZgcgeqLGpS6ymKZyiL2xpu8EkSKF6C7vem6R7AT",
  "key7": "2KLuEk7J9ozuGPFb6LGF1wxQM1AXUYyHkiXtncSyBHjYmiMJb2v3CLcCWdpaKSQfDmtRjvkm9j1gfbu5izNRJZEa",
  "key8": "3DWRoC6tpnCW3vo1XioUAGirKVLyZ6eHzvk4B9c4a4cfXJiiQ9urvL4BNxvJLj41cPsBgbJbixsywyhmzqkfA4b4",
  "key9": "4GBzrhUCcQFgTJpq64qEEfdcVGfqCBsTGpmHuJYc8gyXXbYdcaFgCgC3HUYeLAs6cucBeHuyB8xncziwpgy5CURb",
  "key10": "56eUF1rdGHyb5RBPxuhdyfAjhwNKNNjxGSM3Fvn2CQYKjfNVoh2BNbkVdAyL2gMCj6WQBPkpRNtLq8t4BxKY4kwa",
  "key11": "XEZoYYa7pZ5uSHPBA2Q4Pn3gLiXeqXVbPhngYUjJxo8jdQVJMnmPTCzqpQK3jJSZARUeDF2cKoFGH8hHmkLtxMJ",
  "key12": "3J8dv9fHs9EZ9KWspzFtWUGMs3nVLEL4koTVQqsDwnYwA5qkYABvb5jV2sdUggD7fuREeongFCqJk77d64CUrzhS",
  "key13": "MFPeCpVkeotKEtDKcSqNm6XW1FQMnaG9StjY6Uxg8T1wC4p99JyJk9C13tBdB31EcFnJN8AHbL6NQ5wz68ekd5f",
  "key14": "2mJq5zMTGLunuKJ6xiE87unSiZaT7eMV4UysP8NsPJJieH1mRg8GyZ2pE4FJXd3P1wQXFgRnvDhqkoSrZ5qEcfAz",
  "key15": "5wHPjd4NJFAM4ePzqLJ7b1Hyt6Xq3S3iZLDAG84VDtwkZxZiyxPmPkMhBkqcYFUhBkCKYLrSFrM3mzLJTQMTqxfa",
  "key16": "4e6XgSCcTS9Ln7LRaQShQ7rHJYFLDu9qJJvN49jhHRFFbRMqr5dhFuWuzEYmobwqREGjjWLhVmHVHwNztZMWuTdZ",
  "key17": "4raQWHdZ6KYM61N63xJBd7kXPbAFF1W73CGV56t7KRFWFbq2Cz98iKo2bEhxUg51CXbaEgoXeGeD2wk43oNmNhVs",
  "key18": "2wzW9AM2TpFBtz7KSjyb1eN5booZpN3f1Qg6cAXYv5wDXB2gBF8fjPNw28K98HMBWsFnULBV53Yb7YfKUJQYuGih",
  "key19": "5d9o7ocDkXAQw12NQCujmphSKXXnVzbt4fHHbCp4LRxDjiEgGLKXvN4QBgak9ExFa9WPzJf38mp5Ddr2dyymAfM1",
  "key20": "5bJwiWdX5VYFKicMxqzd93Z5nrwiwFJmA3sFou5kHEBeGzZskcDshPEYks1QE2aBZEHUZbVo7zBUeRWvuP4FLHfk",
  "key21": "kjxmVZKziQkWxfZ3TMr8bGJ3Wbz1pnZgVimhaQoXRb3nNWQJExc9JhPqVa1bcsDJ2YrHe4S53Ae2XWxACFzhRkU",
  "key22": "2xCDD8xCDcy9rgXfFUnMSnVh9H2Gux7Ze1SnWvsUkEX8jK6bDXmjoi7WTAgp1SWyg58omVXFGuWdYS3zao96u7NU",
  "key23": "5NgkmXp4vsnnwj2ioUcuxTsL6N8Seu9D6XgxBCJSeDgYdfMtxRFzjCcwzzpC6ueKKBLG2BoTHxaz969vjv9otiFX",
  "key24": "4Xa5jQ72GvZcPQojeKh28b2ucW5cwpuANTV9GLStnKj7Bx8HGiqCvxMTZk4PSCQP5rv7ZZTJgELwLHzBry1nRZHY",
  "key25": "5wmgiLtutZgFSaHkWq3XscxhU28ADoVGVovNFCvYrPM5g1A3hYBJUmAnyScxCpCPhVffirj3dL3jcYMbqL1nsSVc",
  "key26": "3EBTAMrb2eYGNLxogK8r4iDdv9hRKLiwadNv3D8SrX3YNieyH4iChQR63MoHZedGnsZyhDM3B7Tc6vyegMYkU8fw"
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
