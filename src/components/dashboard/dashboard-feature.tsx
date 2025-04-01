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
    "265WTuf9DGbVbYbLwLiKCX9qTUiiASKj4KtifTgKpYKfTfhSQaUYwaYhvxbKuETfcmsTQ87HbHkf94H9gAyWwAce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ADBDnJJtnfUftn17S5ivijEaRUcW6tJjDeWaTsbtRHnZAoAE98bAEEcVWtma8T5C69d2mBQYsPCxVWoLnpjR7MP",
  "key1": "5ubY4UJBJLHPKiwiQSCTyeQuuLhxRBwbZwv8PZRNNHrfiv4Chnv7wHPDHzfptZZjiFdRQkQD4U5SZrasA4xLA5oJ",
  "key2": "2Chg3bCGbN339uaUuCnk4R9fPt2vKihyr9RwH2PqGXsGD3abgtTxRgefoBaNxG8bbQjpPPdqv4YKKSTX6iTEw3qD",
  "key3": "27qWVw2LPdNgQ6kLNXGG9Ut1bhDzmZDABKzEDi4Bxd7mR8RpEXsWcn1HwevugAciQvbKZABPCLrM8gtHhLb6LepE",
  "key4": "2Di2bivmuZVujchwANg62aWppx8owRB4FKxb7E7BWpGqF4f3JA6VHhjC3Bmcijo5JozWhPb593TR5cZ6gHmGykjP",
  "key5": "5rKTyQvBbJ75AccW43Mq4BsVup7SUWwP7aWAQexkhDgkzAptKM9hriGE3BgeRQxKKgxYqwG4q9DBsNgFXLJke7vZ",
  "key6": "5zcdQjeQLfYi6t5QUKxST9mZhKosUsTt9188EH3F2bW36VYXpQNMtga3T2yuPAxayeQMCFHmrTvEYT4zNNqsy4iW",
  "key7": "2kymLakeEV54mfbPWzvaY248ZH1swMwuise19D6ScWP1gurcVmBGWPVeQzNrRBYd9PfVVieN9mWymKF3FcRvAQgh",
  "key8": "2TQYwv6v7mPDk5cReTfTXweJfuGnfxqhQaupwRnyd5JFidoF7NsnpQonTrmU69rVWrjRJSZsgrm3iq4c2QCrmpGY",
  "key9": "38pK3xCba4tXdESL16PNCnCVx6QNgWmXhGS3dWHAbVTMqXbzUPnMJ74oGvxAYiLhjqCigkTBrdmeA8oh9QH43LQs",
  "key10": "QBBqztPvw8mz5pF48LBJzSZKAnr3fpu9SavAwx3cFPcshJ1pKeykxAghKCPPo3LvJWMhvymnPGAfuUxnM8DxFN5",
  "key11": "3UGpYKiSWmnHQcZni7QUmugSwWc6zzJEsjHVnzxKZe1w2yYSdfNozPkz7Hqnb58akgoNJ2NXRi7F3moXv8LePRJ1",
  "key12": "apkSWvZ8x3hZB7xCah1e7kZvdRxtr4LDshhfF1WKZsRWzPTppHgZcT5FRyA6kL48QLSzZckrU346ny5F2KEjCzC",
  "key13": "2SfTSWm8jJyT55d1K7qMDURQah1evTLVK3p2iWL6imtVLN5indevqQt1dXw1Miig4cKh9PdyHsVKZPfAb2BcTZYh",
  "key14": "Lcjgjb7GZkmohKTz6R98hrgMm6zdwLsastF6dKHy8MVuJ1F5amo8oiKjUB4FCKegMc8iW8RnvW3ouyMMUXJDr4q",
  "key15": "5F56FvuxNJr7EXhMVssxhwg1U7ZTuPEQnufyQJ5C9ghnYaE4LZMPnabBkLykLMVaPDEFi651McVdA3Y7iLHYmyP3",
  "key16": "3JcK1jQJbCBktoscbbsoAGo5ordcRyKWJdQuoXTHUKchG9JEZH6qN7dBd5xCeRozfdzNwEUdXZXsQ6w9oBvSaPSS",
  "key17": "1KN5dp8ZG76Ex5H8v53mDCyEt2Tsk6JmRjx2daofaX1ymoSjjipdjtFMN8EzaLTZnYTEmPV1KAmZErXEXonKhVR",
  "key18": "5U1EbyDLV8gzyiNRgs9nEt4wKc1JVpyVG3t961e8m1F9qSW7waA567htoUbDYTx4gPrkQXcXS4u3M7X3R2qtne95",
  "key19": "3rnsVNpzBSDJPKV5mAk899Nkf8rRWgxM6Kr8mYuwHTex8JMza89GLbKGejKc4St36hDyWi24PM2zoyitzhwZbtBR",
  "key20": "4S3b7AYhaqR2MvymcGbqkUzS3gKB7VkVip6GJDqsUaivvphR8TLwM72X3xmzEUw4tkyQX22BFPdBoKhbjRDPqiTH",
  "key21": "439xePPVT2RHeWaE6yESR3zvqVJaypRfFGrfcXjYAdAzHVBmHsbv61zsQsmfGM3Vngs3gxQRmQoN7D74QCKuErA3",
  "key22": "3RWEvBDuZCwR5fXbZKxzAgKhW1BkMsEvJ7oRsZxKwRiBwy2xttRZYeRYFLzaMasmi7aKhXynwNfEXi7zPtfkPuoh",
  "key23": "3j2YK4CFtWP9bGCD4kEFUzKSQi2kUGxyTDRJYx5sbCtgkwrYKULKwRxcdb6coeeGhRpUb8qUsvoQ69waAKatKXsE",
  "key24": "3EAU9891qQfFxUXWXXEtF5NsW9nrVE25TqNDTCaJMMqCM4s9TvWdo6jj8TXNA19vkHSDPaxwEqo96ZJn4oF2AUNS",
  "key25": "2yEMhTbqYfkAXY1tZ52uJrTJ2yK49en8uUW5oFJ9QUtqcZffD53UTfL3J2E1s7Abyf4aBPrepzgsghDEaSF1eGZn"
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
