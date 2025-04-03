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
    "2aZKw793fcdnZNRVNiiQKWag9imeGYo58oVHWisJMByCi9Ms25fQh3CXkbaDkRhKsM8rAUrzjYiB8LhsGY9SxQRb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KTY79QzgCZHpjbJyEoDnxMHyUKsQZvXDfJBSD6k3r3YGkpZuJThXwWH86VLQ8CkLcMY5WNmPgzBPSB7fmLPNxqH",
  "key1": "3HuosNzHjZEJqW3BiTp4UM1J6xnbLJfnSM9nncxEsi2WbJLK82fhvpzpDaHcSxKWBjdGDJdg7c9DNTBcjjnB4f28",
  "key2": "5MztuZYmhhPDxtBY6UrTS4JRWirUbj7r5TVKytzBzw6rY9koDVjJp1nj5acgV6Gab4iGwDx7KdpyAurdS4ZmvYnH",
  "key3": "4DP8cvfyWKFmTTqqfEkEnid59RXNUCDGug8o8ZpLDwAGuxnkFo7M5nP43z9TPRAZQbuXFgahCMnK1cvvVWaBsj5x",
  "key4": "3W8cpS1PoJ6QJKQxZVKRHS1TA3YraBfho34K7mVgkAbNzDCEwkMHVAH1NhCHRMQCfAn6zHPjSx2XwEDwkdnchDsj",
  "key5": "2zdur2STRaTQDpM7n554aTkDanytj5gRMA5wzaudvhTcuAUqWSXNxZyY57mDijPnx4Q2dJBxZMqqU2vU393QDyJW",
  "key6": "5tdzZBy4bVyKsaJpuaFgePmERpNEHiQkrk51mZarHBcFaYYomRKaHPaJZcn3VRpgkHQucFhwZgWYmBwwW18SZtmA",
  "key7": "AebRpHj5xRtAxzjPBi7mG9LAMLJizGW21Ukhk33bBPiL56afMwxj7rFwqsgvjPkZG9Jy9JrFjwp6tkr2KLh2RqX",
  "key8": "2GaJ3h8VrYv8WepRMMvHB51WESwJcrrrRKLReamTWMjvAQdtC43fdPpD4Lb14rXqfVeNzmE7sFRN5c54hu61DGQN",
  "key9": "599WkgXbCoqTwTyxduTytaRq1RxEmx42MhMkzQ4RbHvYM8Rfb6QNDcvBwMAEzYGuKXVUB6Q1hfJmDrchjgJiYsWz",
  "key10": "QbH5Hzx4GAhkWWkeWftJZioChvKZnfpDhoeScRF1d71MLPeZcU6V3qz6yf7K5U7HPtYiJt3gLKDWyupAbEJPfzw",
  "key11": "4pn8qwvMcZesirigDLxeqYsqgRrG86AES6e8mjPWM3eg66BVJJrZEde2iqbayFT6jnsGz23qh893eV2uXMqb6J9o",
  "key12": "5Lu2YoUfy5kEGhzS9niukGzKTzJxNMvjw1GgygtjBzzBgStv1VqpN1c3VYZDvehPi3FzHUM2fTRxDxxupekLMhhc",
  "key13": "3UceVqwsE1KKHD5zgji5piPo1wPfh8FWBuowF9TnPpvTaog4Bi6UZjrKHW56XwCAVgi1Mmffc5KR3z2qfZf6ptqL",
  "key14": "5THVJZFDwGWjcvRFsbSoeaXAfN7zwj5LwVr5vC7qU6dAU6WX5YdbVGTC5PrKzUzy2hduidMyftP5B3KUrDNCQuYB",
  "key15": "5kssK1p1rpDAAkErTgW2Z9dcspc7eGPkKwxJm7tk6iDi4omtmntquGdYLeit6rtiJkoHR1cFNXwAegGEJC1dE5Ch",
  "key16": "54pQsCr3dwKmcFFd4KFL3bTwTCTogYhuHtmfN9C6873SH6YbEGENAPb9ud9RRuWNo6P3PBUhLxBnMyUBKzyX6GkS",
  "key17": "62ZUxAaH6rGo5STbwRC1yvdcerfJQjvKiVfxdDJNwU4SqqH6z3rCsuLDdBwaTDdf8EM94yofSkMdqa4rdZyHQ6dn",
  "key18": "itT9CUv7sBZjU9BVe7Q9PRjUwGRBEfFH5ZzdqkzH9DrLgnwQ5PrLAZLSQSfeQ7vaaodnVCxj92Hxx1au6tuWJWg",
  "key19": "4xUC1ZkbAYJRPmdvpG1P7SuJr1xuothYYhSE9tYpvsZu14S23PG7Tpi3CAufuDhTfwQZzrsSutRfkuz8y5Lo5fz3",
  "key20": "4FitDRMWQPRTF1GWDE6kZUS61VNheKuQLNcUiDPwUXquQXMSXRBeMvAj7FqM7cHdKdRy1JsykMgiZedSvdpzVKjE",
  "key21": "4KWRwhnWkPfSRAribHpsAJT49E4C6b15Ri7jC7Lgux1JrsMQAVKcvyjCbwcYJDMv4Sd1aQHxEbjVE2HWaaL9bSRD",
  "key22": "64SgKEZDWtLDahMiiNVFM2F84Ngd6EAdRC43KpRHEFNgP83cc57e1iGzNCKdX1FggKwxMfaNJiPMAMdHLevsJxva",
  "key23": "4itBEucDtXJGmvLn55imDgU4HKyfDrJB6BRmEyDXGHHkEqEMFE1qcCB3zVEnMZPrVX2fFahegBb3h9y4Ws6iiiio",
  "key24": "CKvxDWh8sgUS5Z2gkmePRmKNvK96Lmp19ZcxQXtRrD79ju3vThCHQCEwFJ6rtcqi8GDERqUqT5aTLgaK9hb5JMf",
  "key25": "3yCiDJVB3j6kGMD6djqGkLvmoebnQS4Y9gK4y5Ci9cRihme3AaA52hF23CFXXvw6xjZxentvqu1wF2XxYmLbSXnj",
  "key26": "2SGSMKJXKD5rDgV36ksQjZZuRpo6pTjX3DumJvKzaYEp5bdru18umDzX5wiBBXUhdYYGFBqKCWvAYfYVHVG5tpen",
  "key27": "XUTiWyqjEJJTzhAMTx2S38gxwqdgsBEsGtsosgH3gLet58XUs3MW3GcWFCp63xe7tJPcQWHRgZcaEP54dMWkAfv",
  "key28": "3m1gQftmKc264rUULQLp97rR7W3H9WeT2Uiz9uLdTSMLyEPEKLNq9roSNKt8qoprDiieSmw3e8R2x3BkjMpLjapU",
  "key29": "3i4fHsiY4VHptKfJnEkBLqMQPXAfcrNou8UrmDhCWFUGQysinfH6ngFmJAQYMAG9Qiq4S2ywJqfBpeTHtrTd5iGe",
  "key30": "5Jj4XSShuZDvtzRLxvVzJM9PHrLYEpn3JbTpcYFrk3LvzZtEerbVg7bZWSK4X7vtAkxYFqD62U9BDy3EAeKynemn",
  "key31": "4FyDfRP99ByjqybG5bomg6ghWBcixMhZLmQkvtAkGEDaZeGgu1K33mW3sAov5X1oHNrTX5UFePv4TT7QxFSJ8ZVJ",
  "key32": "5vHaPBomEFchLrGr2age38BcWTKiK992enpWk64z4ZAL1E8f9FGUkyR5R4WoyoEg46853SUFN7se1ERLsKWR8tjr",
  "key33": "3yi6aAPMhigFcJpX7QmYjET6pRFLT7uXiuKUBVdJqiMqn2Dm4vog2vf98nmJhUpXd9WcSTn8xNXw5jqgXgy8Rvm6",
  "key34": "2r7F3GL8n3TAxmSyiiVs1cA9e2iEwL1FMTNajeXjwGz1sEqczGrJYYaA2UpCmPsyFq4gSuCcWjfqVjwJkKFzgWnS",
  "key35": "3S4G9edxNwa2vjMfxfZjz38XzngBRp6xD3HecgB3xT9e4W8Ut487tsN5QSp2pUnsyxkjw6VAUq2JcZdPVYd6hAim",
  "key36": "2rCTyfFUfMY8Fsn7dZHGsKngydkTv7FMCskKCZsUnKEstmfZYvYajgdpkb4VnTo2tHT2HK8bBCzrZf1SBK1cpvzX",
  "key37": "4PGWjJ7SjGYwrhydrJ7Fd5zKtNMewjWdonwuVNhsRNundj7R7fvvoLaGGtnksSi893Bu7Y3DV6gKMiWyRM79yiDr",
  "key38": "TL6dKhnCM72EAJEd1yHtEcvBiu2nmYw5tFwUJYb6uC5VifJHFhRLhJYBrqaZ1nfntRMpLMFenLwfHd5Q7fAsmXQ",
  "key39": "63vHHzFAxdhndxArgrc1S1Wxf8wP1KoTWYgHptXZ4i7gsGSRfje5iiZvsKvf3PZTgF8Xng7jVK48aZehG3exizZz",
  "key40": "5ozVLyQMgsMmUyAXa7tNrfxTyvnRhG4uYBPeBVE6g38pFhWRoySNjEFdDp9ZodJvwVvR1gaDthxkJpKNYmmBdVSz",
  "key41": "5LHXTC6ymWbRDnKxu7hKUALXAqbd5CXEURXCWthHTRoxHXu887Gmq6K12sgtn97maPRxpTmfZhr72HgoyNtZ23LQ",
  "key42": "5zxa38LSEQW7rcdTv8XSPHADxDsnvmkp3bq5rgfRSETAsgtgRrUaJKM4a6B6yAf9ExKA9rgWUBuDmkBUxBAyZsSr"
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
