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
    "ufcnMNZzQ8FXZcjcM7ByFaLpk5vTnPNBBVvMQRJnGXUUL8N58qK9TmaeYWWzn47BUzDTVJZ7Gqrvj47TbVa3JSi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xLWEZQm6Qiw4KKqh4QrT7357LxD24T4S2tcBFgGCqMg5F6EVLRVX2odvHdLZ6tnWt7sxvGB8d49u4cRCiL8Ev3G",
  "key1": "NydGcWPy81CVXQ3L282r7mxtDtL9BX1wLKaH6btkUrtt6Wo3FPFfBgk1VggJH4x6y67c9QZuxoJgZSJAWUFTwYW",
  "key2": "3qEKJ2H7MYPvHW4GPv6UhmwizCMZcPwZYCDwLjKbyBUUf33rZimL6rbkq6uLGkMMv4kqUQncvbfLTsjUY1pHFfUX",
  "key3": "3iEbXetdj4ViJiKe5hVMouMGqtLnVebsuWcTFxEXJ3NMXGHGfu6yK1o1XY23RDZskrYCiWqbuqHnHTQp4WBTgNGT",
  "key4": "5u5VzkppQyRJfftJh4F9QwmjaKvvjWzJoZpFjsyUnPYNRiPJFM7rbGVJseerKma53dbJjmXDFqb7qW3eMoeDx2DN",
  "key5": "47oJAo62cXFh8KjYEeEEpVjp9ktvPHaTkgo5ZJkfgwNUYDCqhrQTHSQ2iReL8izVj7jKLfZq5QNkZgSS4nyqPr58",
  "key6": "DnnQrCzEzi7LDfSu7C6yWTLBn4TYSQ3MQexFAwCkxfjeLjqDR4CZaXeu5qVnVjieXArNANULRhggh58aKJKAnwq",
  "key7": "3NvJ3ZjUAJ9GEJGHU6dyCjSZXdKWkMZ96oBWAfgbu32zCzxMPePiSRib4UHCGmYaLtqCMUamHAB6TEd8jvLhEzT5",
  "key8": "A7JPe1dePV9YWpE6sbJao31mGxtS4ZcRDfxdQ5NMG7741h3ShnKpgiSEHzp1RfBBoJQaoUKv4mLQBqLCBmbYJ85",
  "key9": "3JAGretFSmkiaZnHSnHCmVFFGnPfyECzS42TKqRwNvuSaBae5JzD2BaLNKn4eZhMqL5RsaBEHfcPLg5RCEUWZxGz",
  "key10": "4ix1UqhK8raUrwPXvFn1g1kpXhDVWHy853W1RFmtvzRGfbfYuU577U5rgtZVFsfb5eURQqxibW1YGZ8PfLcAwGJQ",
  "key11": "2K3SRXc7V494j92QWekAfWi6r9Z3EF6vvxJqqCoXBC94FeAhJetGXLxMDV8T2nX4egm9EiGRgqFQPqdQP1mHCiZ5",
  "key12": "27AZuUee5FALFcoknKMioeVEmuqPgx7nuM6t8bH5PBUysc6SNiQJmADdbso8zeD1ATDZJs7dgS8sSzGGfDWWEKtv",
  "key13": "wjJrsnb2yCXdA8DnZJUkzjBrz6X7w7z7QVsZ4ztQHQVMv69erxPTE8sQE7zovSiUnoeisugMYYKDXY4RBSk3pRL",
  "key14": "3gNT37WficsQHtrGWL3WybdwABLCe2ZsoMmvNjRCBgvgbdJuaodjohyVomH7svUC1Vm5tmKAZmGEKSGQjpwA3B7K",
  "key15": "5jNyue2UrAtvtDLPRiYbQzEZ3xN6rtpvQcfKnfWCe2we2vagmLYmxxzqXNK8c2ggRBuhZocySppUgRtW6jQ2b7hd",
  "key16": "2cAUyuP6SCRiwqD1J5t2caJJgTLdQeB2uBCGvgYRafrUheDJeuLfPuomYaQFoREAa6ZxJBeSyywtVYLHhSk3s8G",
  "key17": "47ZyNJt6PJJQfZFJwqxpq9vNjdMwA71nfaUCx5bmWqbMgtZrfgsr3r9e4mt8WNZNyYypEQ3567vXXAtCxNneNgE",
  "key18": "4GtBi4v5dLU2nCvcZZVd8ijMreenMyPhvvBsf3sHrST5E5y8bMtrG82ue6srQrFbK2bkqdeV6miBc5ADuuyF1AJo",
  "key19": "5oLJoSWoVdHnF6s3yripRJZesZceQe4jzFk5iWQMPMALUJjnUhewAFbPgWRsxaYjgJQQjX1jTPziWZopxvTszGwg",
  "key20": "VVJ9VoFVf1v73j2TvTFDwVKnAYJ2gE6AhJkaaiQ1ubJdYoyiRTGeMNxJhJkb39kAr8kJr15h1Wx89wihbfN9wew",
  "key21": "4A7d1sr7CUAqAWVEA1GXMB67cSaSexaZQiUDRvDYp7Kd2aqpaPD88mJf68eSAhxcTHavgPh5aouKMfZsGiWcbWeu",
  "key22": "hmoQwUKzBsNnxk4xhNrgbWVbiUigKdKFuERgmbYVk3EkzV1GfMfn9FWzcFXzNYDX4JFF34jG69jWFXkHT79kjNY",
  "key23": "3ocvTDpfnxNWabnEEbpSJ8wTN157j7Tg1KyuDGAEy6gcL9Dq2DUuKSxFx9Y5guQ5sRZcEccx3B94F83K5uQ96bus",
  "key24": "21Pqb7Bn2fsHvku3WStC4kmQdQFH5qprZssVAqZmCZpT7QVXaaJfGHpkuip1hbQVTEQHazD6Wkw83YmQiBM6kNKA",
  "key25": "2mwVywr8YnmU5Zq3FgvCfnwR1GQMBMHyt3oHLgDvXqxi1arWiBYVgoH2FNhmiEiDqKsUnjGYmYuZ4pGcFWWyp29C",
  "key26": "2PPAFHs9nYF9kJxMVhKC3fKEKd5MVWvaVZdc7rYxDH2k5yFHy88G6HDhKAL4HLkbmxAg7e49AgiF6u9TqvzY8dnH",
  "key27": "3sLh7z1Bx4aTDFoi2QXvjFWHKwcE24Ayq7EgVsXdTrwWVsPsV7k4fLUq87gTApP7FHRMUrryuYjq9pyyMbrxBkQu",
  "key28": "4jWpuJEgoVBFFC6quCBSdnSs5Xqkjm7gnE5EuCG9FdtmRuZ9U2hW8ccGw2mtVcYqcyb42KhCEMmM4y1xVug8731R",
  "key29": "3qWDNZcTQ4KuxtjNsSuKXbieetkp7mgrJrvP43THEjUE6ZrvsgpBMa1U2JFGWYpT8qPgDSCniwSvb5tem9BVz1Cb",
  "key30": "4nvTqWLKvyE8WAWmEkeDUs7mbLJjFdVdZKkzuYL5dDwwtiaPqZSBnqBodiH1nGrUHoy7teQ5nvwZEx24hvREUJQJ",
  "key31": "Vf5xGhsUnPTu9bHVoeWBF3YRBhpmfrPtEayXLxt7J7zB3tUFFESJhhBGdskFiqfopnc6N5EcvHhKehVasqnDEmr",
  "key32": "54hyKZQfXYj4SQsYShbuzGjtebkYK1QojuZcBdQDJm4TULAtXqWYh9rQocpLiuWGKvd6Es1XMxHTzPQGrR22M8i",
  "key33": "5HVu3gZjwiUZKbrdm7MS9wPMGAxBNuzr2shNDUDQGdxn4EycjKGuGrhmVpdPb2Hh357LACRQEtfapVQiQ65Vh8R8",
  "key34": "3D7APsarbU1UznPEQdgMQySyhc4YLbySA53g53attnitSYzCGDLbtDSM2HSgH5VparDRUcwYfD1NqqBK8khYGgz9",
  "key35": "FnKFMmMCaiBZTUZDqWk9kjXp8dZ9KhGUNXew4RS6Lb7CVnS7z4DeMfStRdXoYbtSUCsR2WGw7FNpZBerkgHWbGK",
  "key36": "5A7WFTnkzqXNDhjFaWGnee66sqsSoqx785ED8JemgBuVTWgBHrAf73kzJctrSQnw9P1R2UBRsC7xVcAqr1ht1XxR",
  "key37": "C8xAr7NS4rheYpjVp9NKazRgCBugSzKqUycgxN7rsNVHySxk5bykLVpoMLzHGefHLKoit6AYJEkzBNoU54bUGXJ",
  "key38": "5tTAronRd5kcZ118Q6dXimJhSwVyz9dDgNt3TJhMbmzQ4rSrXf63uHDUHj5FAifKuqBWyAypvS7cmvy5p4AxXqvR",
  "key39": "4kQ9QRFhKNcAhWLf5FpY2nz4ZSuKMDTGSpY6J9LCiAFy2CSukMbN9NLXsBcGJiY1Mc6hYWf6XvwSVZWi75xeUEwL",
  "key40": "5Hiz67fQTTaJjVSCiybFmzbnaXpk5j3Q8qmsqJtbPqFfDHPjbTRq7zDLihUyrnNw8QL8GBDvCTWwEDg6bLJAdR8N",
  "key41": "Fb2XU5kFEDgEy7hpCzrZ2TWp41J4fLjt31UxZiuAZ9DdsY44FwTRsiRZbK4pg1Y1gvhBqbtqopDgqBq4sDN1YEt",
  "key42": "297MtF66wQGx5SWG8xxAApUFsGbsubgS4eYqmQix9x52cusAyPRDwYy2bF8QpCptNzCjNTpRPWns44CG8mKzkdse",
  "key43": "df2ZCR9NUVRBukUZi98Z2f4X35mGarMX34TuyS95uXgY42awzezntHsvDuyqd5V79XwBjZhqDgW9ZcqVKGnG5Ut"
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
