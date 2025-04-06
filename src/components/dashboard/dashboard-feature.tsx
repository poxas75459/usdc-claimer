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
    "3N6HwF8TYW7uvK3wkkSJKUuwnr1wU4Yw89uaqbV4fHxBXNnQVZXK44sGGZw2nhwdmRz82MuHJr3u1D3Qo1672YRT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b3urEUfBA4XC5bqyg4m1Uapsp7u6feAzBtBcdUEeQBgXRbA3tPsSwxrLbuuSFyQb5NyQJViNPgEnkKPpcDgPsHG",
  "key1": "5kjkqfW6TFWbrRHrrLQJkqGAq5HHRPoTiH9WKvKhZoP7ptEV8f5RPF2r7rBDH9ArNS7fy5UU13RijFRQqoCQsGh1",
  "key2": "2VX36rUNLVa3D5XpxXXSwRH8XAdEm2FtY6xAHS2aQpQ13kTU3R2SYKJ3vSLaKQdcwZYg2XYrrNynHe7DsMPG7WjP",
  "key3": "jCEi8Trgkf1LBvXRJgom2x1xafdmgw2TCDU5YytJFdiG9V82acQngjM2AT37rCSFXLiYN7uZH9dVNqJHxpV1X3d",
  "key4": "5HRpCkQryyN5U5UgnB8d3s2xVEr8CfZamULnR3KuL2VP9AcBRhxAQcWoaVgRp7ZnSfudboSFRjwFhDCzYq4x7sew",
  "key5": "LUyVKYWVFuDqX9vvwmDp4EfHaLj6i94NaNprgWZBgJJALqBKs12TYnP3jkmTaCacbQSc4bWNHvYik1QDT1ZrZ8a",
  "key6": "3LteULk8iNrtAUwNtMbxNUJBDxQkUoYBX56Bpz1JF4RxRSU7XWKxZxj7opDUzmBj8tdVz62FuA8JXg7cnnfDhdtE",
  "key7": "WDgWZ2apdvLVCVujmrXp38dGDJzEGNLtXeU2GRFdHeKn64vC2xEnbwMspWaMDY8zcmpPiQs4R9upAHqycE1ByQ1",
  "key8": "VdeAFMtkKzhGYDgMQqaRMEnZrTLEQEXYHK7rFN2hwCfmYLEZn3p7WKUrZcXJAGgAKDQEKJHyiRkUupU4fEGD8Ai",
  "key9": "rkfW3Jninm692MCe4GieJQUUxAko5MEhDT4eF18twzCpBy8TeCjpncqVd4u7aMYp7Me4T6Ej2yL9sUD1XPM42Jd",
  "key10": "3ovn4kFmChmBQmsZgr1DLLZtFT2aSdmzjhgWfMujGUra8Xui9Bgqq1VRLsG8HbZ1G5YJoubs1G7CYeXSnANiLMsF",
  "key11": "49pLxiwmNoxumj9SjuVTbqVfnPcxsNPaFF5jtqtCCkJfYQUxkvo97Mm7MMSthR4dZmercxjCRo5Rc2F5AUt6f7rx",
  "key12": "45bZd98j34KCJnWenbpSybSMEuFMNC9Df67KYT81vhwRBWSjFLdEvzsMeUaFnYYLeKUguwzqcpyQpUuoKLHhdosr",
  "key13": "4FBnhJoPMd4S7dY5YDgPXhwLmFSnAo4kXf9CCSwprkgZUReeg12b8Zsz8fdQFdF6U44rnhj1eBSmwfrZ95SNzUKy",
  "key14": "3iUmDFQc42aJHRcvXgqvbq7WSK3sE1eMALLPe8eJPsxSiKZLDVFbCzL5MBaam4sF9Pf8xWk4pK9t68fmJzP813wQ",
  "key15": "zJbDj1QMoY7eBpTfqAPv137zsdJ8RdiR6jBHFxJpAyjbgX7CG9g6JsHp49Q9Hwiptpuf1kvqDPjhhsa1vneGiuJ",
  "key16": "D68aPbSLLyvvwHQrdFqJnPesApK8BgScR2jcpLQcVawk4os9Tu6qnUWUEffgtuK6Qa799uuLxGM5ti5MGtyFFrz",
  "key17": "3ZvoqCfAgUkUCLi2uwCj9vMF69zT8eYZLNRufiYQ7TLjmVHrFpxdBRNu13DzWR2aAZC4soYn61t9MsuS1mV1g8oz",
  "key18": "53HgjLcznVNfLULqiLZTXn8Ex3fbStaqfLGxvMumriN5dfmZjRyPyHtXJn5kQxa3K5aG2zQd26DdyJqdRNAc11yX",
  "key19": "2CRHVxuzRfYesCHeTk8zZoZQsD5nf99GRxsj8cfGEHLsJSFLsdtc39zNJCMXyYVXwyH5rHnFxHYWaEaNSoY2347H",
  "key20": "2hRqpTMaaSoQNZ2okjstbgD2nCctwU1xeZRMjNu39aKdYCZkTndUVuZGqDsqy6WVrB7GPQgbSjTKwuM1WJTfL3g2",
  "key21": "3yJnj1J67bW3V3HJQxGmfas2pnALi6Ly7qpSsk1tjXkf6XbVCA8togAmfWTo1XrETsEdaQPKzQTevcgeoVrwtShe",
  "key22": "2urHTFY2urMaTFzkF64RG9sEqgy6RUCMNqYnDBFSAAQppMVxvf4Z2hJrHMVBWHR63mxcayukQmNhgxqGoffg7x5a",
  "key23": "2zD17hr7MvRWvYuGA7Zxo7nhktF8X68hdHpCeQAaALzSqwEkBCE6sVC4DA7VpxXh7LtysAhEhxHoFLHufs9or4Ft",
  "key24": "2f3jtey5uC6wuvFswrjoY1W9ceum7dtwgosy3e8ykb5q46PgUxvePa9gfpbvWwHjZbZne2XBb6APMP6F8cciZWv4",
  "key25": "32jdErRcUwWZw8wMAkAHT9pPQhrjYdGsP3DrptrS8U5sQ4h6PBF8tzhVJbiVWcduHVjG92M8xsCY9gon5pQGRgei",
  "key26": "4RnPpvUvajPgxEcomYjdw9Dn37wicmZQbsQoFfHYnUSv8BNGe69JatichfAMgZ6JBK8cJ2p6uKbb8i5tiV3T7h6Q",
  "key27": "2abnkoPpjkgbam4D4ybHCCuheJ85eWVJXiDUVDkgH4fFRB2Byq5jWkTk9rjHmVVc6qjYdSdKuJwk9rwCEtynwkm4",
  "key28": "2EPmqCGk9hRAbaciHxndH7tKsQ5g9TmUcnAokMMWwAmcDMwqazziP38coUm93iHu28ehhruN6sxDhGND1YxGTiZH",
  "key29": "3C6P5YaJ6MPs2TSmNKz3zmWjAQ4BWkeyb31MjbJZxKtqPCtdXsRuDeFtj6xRURLMrRUyPLakceJ653p1umNZcztM",
  "key30": "3NmBr3uycbvBbtbW3waJ8KfKF994YNSWrX1JokDuzwmK2cgJPvj89kt2gDgzCa7Gomsoo7Y3geftJceg33VDGMaQ",
  "key31": "2DX4iT3WbNBmRci4txJ3WTe8zpQejNyEpX8rp1xVAKAgQoJ78RQAbeNzmp5xsRiuyVaUWXtL7KZdbeyDvb4ajmwi"
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
