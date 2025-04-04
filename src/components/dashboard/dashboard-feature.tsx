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
    "4AfDtPhguku1hfNfvKjFqaqHiYx7DjpmeVL7uBjSYjEfb2BY61tmxZqDEj6BkGjjoiJoWHngRWVvcBxhJvVcugUA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G8zddyeuXN27Z9ydRAqu7jY5EpyCF27y56E9CKzj932SPtJtgYxDUx8QqxJcFak4S2ofPx3nKNUvq55qrpJdmLi",
  "key1": "2nijSMo8ihWkQaeY8b9igffQbmqFDWa9XEfwXL4QnoR8mbBdSTHxKTQ9t5v65DCcAp2spLyzYoqJ5KV9o7u9as98",
  "key2": "61pd4fUbZrnwW7ZirgwFWf2dB736FyzKU3QgEQxMnaYDtrKxSCMRZ3XKj99nU9bNjvPyPwbbR8WggqSQG2iw2ZfS",
  "key3": "5PwAnK4znUs14zBnHxoZA1yMaQr5aToa97DS9BFm1yxhvDuRVSCyicHywSdEF8uCXhv9q9HptfUgnD79eKoXQxji",
  "key4": "2GEuZru3xtoYboePWsrrNfZzEmwgKTbhfWumETsaEi7mXo8GMvoHrdddqrayMozkx3h9o3724ZUHee5ym6s87QXS",
  "key5": "3kbpPbfuCbCHnX3H9rtWVbpRVMbr7XASK6FL8XQhWEkUEyXbbxu8sseocXGw4sJJGDbxRMF2DEEBFZqxCvDKfvLp",
  "key6": "5fLpALPonr2DvhQfbTY21JDJnD5tTaco2sBtrYsnkVGm9KHMPQz1p9kVnDbEKgHpL1bQUWVd3cmCJrbyxftTUVW8",
  "key7": "Frs55J3Hkaq4ao7z8nDtbeVaTbWjf1PmHh33hQs2cgtUMJocfKa7wjLQDQiDDtbBhdMALf2SUhtHdsueTrs12mh",
  "key8": "5TiSABiU9TRgoJZXZ5RHcTg36gk9XSX4qV9mD2utNnZ51V4H3FiPZRqrT9GzC9k3NMMH5DH8Dr5wKwGhRz8t4rJf",
  "key9": "3obF2PoHG9VN8eJxWRzCLjciGZG5sugzVPdcMiJPKo66DzMBkDUbKXAGrWxrCUCRJMkkdmhErmRhXPBNbhM1nD5d",
  "key10": "2qCgZjvWXVEBnc5zX2HipoHJNAPJCJPKxEmbLh3747dT6biRjBm6G1PLDZWdsMQp8zRov1W8UViVd44iU3dVjWTy",
  "key11": "64Ydpj9pM2rVdzym9VNhJsPjWuMNp6qenEM6zuCZqhBYuSc87BZcCzRftAoJt7WCstwrycS2FFKVhgRRx5aX7sN4",
  "key12": "2dezdTMLmGhf1eGhhtWKA9jqJTczNUfEcSHEPFM2k8tzDiTVtBkj7QUG6sZH76ycdREWxTQRW1ck9JZMpeXWhC3s",
  "key13": "4r8ebgQvEKUNakbK7VXziiskZWGmugrMnzNNR8h5Cn13g6dwPAyZC5uL9vxZ5QvS5eUL7hgdmJwPZQJcWBTjRfaH",
  "key14": "3ZyxXWk1AZoDgyeZy3Ze9k2ChFFRA4Vg8UHH4D6KTYrM8TRgEW8TYF36VfmKcexg1vrHsnPUBPr2nvCajh9ZbaEx",
  "key15": "62ntf9Cpuzi1BTJvjzGQgLniHDeUU8jVhThQpKsfnp4r3dui28hFnTxQ6JXfzPgwPM1D6fRpyBpsi7oRcZuyQHKA",
  "key16": "UA6Ji3b8MS1xW5zaeckva2i2ntZui8APRf4Lpvg8pL1zruUqMSXGHGMCyKEc6ZqKQaB3i5wP1EnQENT1WyM5WE2",
  "key17": "3FdTYJu94xHAx9qsPGZF3yDP4BRZAtm95TV5hWSgbmSphnjZ8P63CUeJRmdu8VKoeRTXoPokdDHnvMcyKxqCPoMR",
  "key18": "57kfVe8LdbtpRav6oHdwg6JgVcFtf5qqB8H7ZfnFRu5abT9TGBRGnVCjbVDpMhNYzqWjBhmjFposR9n99THjsRvH",
  "key19": "zXAqMHbSyUSitmaXY1hBDgvuLdwoRDhb3xCpxXmTnVWmaarHFwGcYUcxqkJTfe3z9mFthpXUQrZo1p8AEsHV9WX",
  "key20": "4NJVBFfy8Uix3VHtXZYB1myZ5t76VSgvaKMpaN1Hxccjp8yfhxL2szrQDFWJMEgyJC8Bwkz2MupztmJdVGmHbKE",
  "key21": "439uwHyW9GPDUCzg8xsJQZBZmRwrGi1zEMAzrNDQH2SAo5Fxd2wDa5PgmNffHNwp9PhVkr6PJqXJ1oVr9ZokbAQ9",
  "key22": "deYdE3VQq5vKV2bYDvGehkPZSBQdkLzYh6u7hnHGKjszw5EFZsKmvCBMML8n9Fs5ES9uvMRutzTBePDtHRdwNk2",
  "key23": "43gGhnsPaVEQLTvu1wLXdmGxKQD825VK9Z4e7ZipPUo5nVnK7CqUv6crUr5RnAw1R38xZGNGRrJ7yJKgPeQq65cY",
  "key24": "4wzn9KRKvXHTqe1Cxp3n19T2dkSHsJhbaTCXbNw6uEAbxiz9HA98RBGKZkoXcBXUNjgiuXoC9r39nUDEPUASfev1",
  "key25": "4vX8cZ8Y8B8qhtBLADHmi3UHR1HMkt8SAviHzfe6QY69CBXL2UC1eCtNYkq2o4KcD5G6eD8ckvxz69vDnPhhZjk5",
  "key26": "6rJpgBw5X1BRHjD3tVW1rXWGsK4QFM7YwkZzXWEdeNerYXnTaPsbYps443jMxBuQMGyDP12J7KYvqeLzd7ozavt",
  "key27": "noSpuFn6RoXGNzv718gtRTVZQheEhKjzc3RRcWqm2ESM1eFjtsjnEjoLd2YF34SQt6v5tADhiag2hk2bQmi4jzn",
  "key28": "5d9JXExEWNUGR7yLAeiQckg6Fim2pNUT5dqk2auXzoX1CBxUQy3V755M5EEbj9pyJdNHr7oz4Sgtu1z3Env8BsHr",
  "key29": "3DvUnzNdxp6Te7XxuBDPSu5cFvvREWFC61UAwF4HPmM2CgyjXTZQvY72o5q2HEzpdnbc6G1Q6Q6wVxQm6QpNc6bQ",
  "key30": "5zZMmYMqaF5XRgQGdcNN9qHm43pfEMLTSgFVBLVRjYqzzLGifA2hEgP5TJWfomxdEccjWXQwLNg7asif6kJzHXzn",
  "key31": "3djRAKGE4ZLotDiiPjM7xPUPShtX5wN67FM8muDVeXXM33tMv2Q1gYuGEDBFaGDrMQkc5T19brWDwtYmDgWC5PBw",
  "key32": "3vQPnCcSRGfRRHazAUwfEwMFQQERwuoNT3DhkHghTbZwvRzG75HNomem5yRgt1fMj5KYk9K9GEysTdnrCruEGc82",
  "key33": "5A7rG51TRHx4oL3tb86ozBfcB7THPvZ3LeQgTLr9K5uKHHvAq7TFdGTkTnKJ8yKFkgBMKSMNWhwrhsEWt3P95tLx"
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
