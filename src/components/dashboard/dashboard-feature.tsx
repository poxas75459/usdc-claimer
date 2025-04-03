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
    "SzKf57XE8RTqLJQRAJvsRHET13XgfupcSqzv898YVV1ftKEBii1XLdcv1CHn93bqiucEaWKjfUSyaxxidknUk2Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sHGP649iWAYb3nXMxq17hQzhGZakGM88acr7yu2ruvrSrDg96J2MSaMdjQEDLGaHSpd2q91aQtpu2wmQc7qBMQ",
  "key1": "F94xRqA7NvEsBX5RPtsW6M8EdNfBYVc93KJT3ENjS6go9U6ws6GiXappEt6Ug4346stsE3dcEz9N7YshwG6reQm",
  "key2": "3nh193rreidtc6hk577Cn1AZavxsSLSrDMusySNraKG2mmxxofno7i9LkJGsAeRLLfZQXfFgzcY7WnuBkKzKbqek",
  "key3": "sA66H75VftTpMhrcfjoZ2syAYaNJSKdAGxwVbsvhM3WQ44TdQyhet7sLgCgPQBYTdc21yLDase1Y3GkXVpdjgbA",
  "key4": "2sCLxxJVWdLkpHrEGAUecXzbjaSsALz91m464Vp7JqXULVWb3PAqqQWwehK1zpvfu1TmBbTEyS5FUNoke4xKAR8B",
  "key5": "3sHaQW1DRfMGEgHpXAKMTt8Xu3TrhBx2yjCd1s1uujE9EKVjdXg7xSCu71AhEFVFcPSuCjZNLR7z1MvMrn2HPkH6",
  "key6": "3zvt7Z6cBQ9ATGJJxmnGkh7gdByGrRwqZxnFQCRQgh15sVqDuW5ujzrefejbv3Eeqtdv8J2F15VyvG33CSuohqzy",
  "key7": "5TiJDyVFLs33ttErqEjiY7JszE6M1bytneoTU7ZGuY2Ri1QGQ7xcX6BqwpNDsqHK5yfakNwuun7Cgzogvc1Xoips",
  "key8": "4nc3svrMDWmpcXV2K72EeDJDkCHg1wwp2EQwcgyYv9iJMyqbyJCbsAMwCQbYFdAj8o3tXyjwSywsj8DMTsQ7BdGC",
  "key9": "25GitpJSk9TULnQhUohpA1zgBrzuT4tdYia6h1ea7Twh8mfXpmKjbmJqqJguvStxM92QqG25tcB8J5LpKxP5rWom",
  "key10": "3Hztm51KB2EypkLeMcErNbDRtJWirjpZ22JRDjDVbLjB3t2VQngSNc7h6foXyhEmqTnCLaAkpkMft1TnybS1W2Nx",
  "key11": "2noDTu3oRQpeMGCQAxVmJ9B2GxZMP7UtNq5xqNwwESsBDt5Yub2Xx6Xfkvudik7hRwoybMS458QYXHxsN3dGrynw",
  "key12": "3wNLPCNiCHJSQpnMST1HGf5qwMiZaMBFENfVa8Z5dSuw5vqj1RxrVDtLivdRLHkuudNNZSsugs6Xk5oRTwhYHLZ",
  "key13": "5RQPPZTbXweVHffKGpsWj2ZQUnKgJRX37S3ydZYQfig6q3sbvRMStCpTkbFyn8fVcFCAbYgWjBTRAXFzMxLtLpPk",
  "key14": "4A6VDt31f6XE4uVEANJXv2Bv7hMimXLkxxUCgUG36ugWfs6iEEJRwwehpaEunrpdu18YxPHFH6u92V7k6vTroZRj",
  "key15": "2uKYtJoPGrdfySuyov1tCz4yHj32CyBsMv1EDTpVzQVyHF3tmsvCcT73vGhuzJsxpr7H5eUPvZXVJfJjNwqu7dNf",
  "key16": "5cKs3QMAdjN78xaey9KtN1qhXn4dHxNn9wRjU6rEhCLQoFAb5xYNmk6qKPozTqKQ61J5tVqkQZpgdGjSggvqL1vk",
  "key17": "5aq44DSZ3UiFwBcLesAYJKHuHUVqN6qcVYNZmaW91qdxJJo2qZm8wfjNwhUasBYHpycgZ5ePc6TXpP7KHHniFMmM",
  "key18": "4so2WXj3UABv9UWaf1r62uwwkMYyhSmW43ibgwHS9X9ZoyUFyqX7TJSr4hDyarqmRwfA4xvLXsvfRuBf2J4FfeCy",
  "key19": "2n82ytSbzRrycLaiQ6KYCZFYt8Uef9WiNNHy4T8TqyxisYXPvZwGNAknu3QpmUpodgK9eorHuCoHex1fmT2P3nSq",
  "key20": "3Pp8JVPfqfYWk84BUHcsWiit2Vof45PXs3LoDvshBQcXPEDo8qyDiysevn5uH2RNrTt8vkNnf26vPScfJWYHB8cZ",
  "key21": "4qREPFGc241NkH22vmdBhri99WMYQdBqU46YxhNv4C2CqfkyLr6WfXctWuRbtTPZznfKxx6DppMmtqHBn7atWWNQ",
  "key22": "4mfwdv3PYMjBHYKdkJpwRBG6L4dchZ1sTcAEP2ZdKCM1JVc4RqzqQ9PMSEG92vqkffp87SDdYqcZ92B2AhJu6N8e",
  "key23": "PZEHdrg5x68TPfa7aZMTSgWoPr4NKTpVU8c6QBKZvZCoRvUgHVEYBRu2WZgQJXXUpJ5USMT58wF1LUuGwPK7Vdp",
  "key24": "45RjbM2ZBo87VsJE2rsH8UmZ7SAytUFerTHysFDo6bWJ5Mn91F5XqVEDgmv7d5DzLB52qdGauUJp9yXW2PCjJ3fC",
  "key25": "4wMZDwCW6vXumvg9dvSJjShrLD94kfEJmELb4k6Q35XxYjFePZ95q8cyHPu51M1tFhacDFQ2SoYomPkAkXgpoa8H",
  "key26": "5WxgCDkKu4QcRAJ1KpWwoimS5XNM46sBEQBcutDHF8EykSJmSh1f99KEZbtxJna3FCGNtkrbz2dm9CqutZnpmx3s",
  "key27": "2JDH5LNrJqYfTf5BkqsqV349DcRxdJXjTSVY2XyBRrDpmDWtt77kpSJmCWLo8cCbeFmN5BFg4hTnTJmuiRgHTZ8A",
  "key28": "4ULfNk1gGraxt6SUfoqwEmh81FFxdxdxtzAcjSiLiXoGLCVcmQThTytPeCfmRFoNbLDFjxH6f3D59fLd34yypeAx",
  "key29": "5hkmhjGkdvYdPP3S7pcEaPUqk9wTW4KHa92yjGEk45H281EBR2c1KdkDoMPQUh3UR2d38wLWeTUeKWR7eRLF3hGo",
  "key30": "Fg2WHZjGocNfZPq53GjLbQq3kSc9YWY1BDrJ58FnGNqUwM9KpbCiPiE6c2FeApph6KkrWQUjnMCLJscGatgFRVE",
  "key31": "3LkjTa8pQduPBQ1eRYK2rkYrojxv8m49AKdAQyKEzsYGk9z3cAZ1Tqjcg1XDAokZQLfbN16KDSahwtxhvuM7bzD5",
  "key32": "3Asp91cEqUbeE3h6jfj1GqsqFpP2SwZFK3WUwakQSCqRjLgHxaqErCknskKmk5yD5mhBsxu3uRFHcU7ALkQ6EEH",
  "key33": "3C655Hykad4rQC7MZ85a8vYbzABAzC54gadbYFiKkgALYjdHWAVcVwvVg3eVw1CaDgtVuyLfpdQQU11PSD31sinn",
  "key34": "2nk9B34kpyJgEMHZVV7VfRtg5SDuARoxEmdB6Zux6qvvKm8cqVCWX5J3aCKZ9EzDciVpbgXA9duvhVqKe36wpK4A",
  "key35": "2DW5sbfKGbafznP9p4bkF2z2H8v7YggxKf68NzMcJ4iTjwgJeeB2WKYZFuCBfbMJzf4MhHSXHtjhi761e5fYhCNm"
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
