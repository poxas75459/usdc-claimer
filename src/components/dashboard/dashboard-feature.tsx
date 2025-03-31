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
    "4nDadkrb4NULLfgXjEBh14sQiYXvgwiRMpNk4DwzD4zoYbjkHMDjiby43fUtSgmDPXYsHEqLZBqPMwdVMHPQfCDm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35EKdYa73zLwuvZ8YAfyYw1n1PCgdFwVrWRy2MiiT1CY3KDXT9YvMRe6xe8NfNNE8pSzmbukeKwAuYr3H1n9PQpJ",
  "key1": "5gedfDuDmf4ej4SPgxJrH88r2nXXq3Y1QVUv8n6CFeJvCgdts5MWaus3yp7qAbLgwcoh76xJfb4Y4bg5Kfsg5Uoi",
  "key2": "3pUSYq2LqwKTjMtH6tAyn5fyaGhF7T8JaB6rRaTJxkZcHZiL7Wtk7aomwoAYynZZ83MnniJ8jQrzUreZ6HCJVoCk",
  "key3": "DHdoaFaFtNBpusauxBiqgoQ8ThdVQ7sxcjprK2WxzMf2ESCxwpSRWx85K6QmLjZzSGsX2cwBFjiHCZwDb5Pp5S3",
  "key4": "2RhxgnhsH8yD5t44Cyfqhp5QvkcNoarJhu4nHMezqrJoZWfY6RczYR3D2XKreruo6n8mFXWvfHL18NaA3qm142wU",
  "key5": "PTgQbL8J5iU4W8bzUArteMLRuUwxzccMkkfYUCkNGyRrkdjzR2th8Q3xFrdAbT78RvhQgcDSPuxczDunNLC9ktu",
  "key6": "3RgiRFTbdrCGuPpLEUaKjX8z2HpGcDhaHyYmzCugGCU3XvL4YvRKGDLiukQALcpFtp3dywSFyVShLQnvNjYVvZs7",
  "key7": "4ih34SykhRaGtQ8uzJT4ye96rBTAkGUTUaPnyD1ZAneKzQw97trSPFC2XZr8a7Dw7xxTboGVJxAMX87ztFVHLxih",
  "key8": "5tuPpMjXcwQjx9ACmgahJqHMZS6YQwGWZQS3DWkksYq1ArSyCAgLPYby5DHDtgXVntS3ob2xoyjVq81UQsS9S5QD",
  "key9": "4GdEx21L55bR7KvqYbqgEQeo4jhQ6Y8XQJGVsySGw2aHj7KAFumQ4tVsLvTmtRTV8M5MSXS5AYYDgRZNtHENh2jh",
  "key10": "3vgqTXEhd5LiUQAh82PdiyozWUoMsjWJFpz8V5wsULVeQt2RaFgnBbLL3h4Gdva5Ecifhr3tn8nDW9BhQZ56CuXs",
  "key11": "2qiHEWDy3t31suyES35SnhyMsc5kqhrMmmq44V3rcUDQcTLjBoyKvFKxUbknt8Y5fokhdNXapo7FWVi33aQPt958",
  "key12": "3ZfmjdM3h4Row3jN5tsWpSotd4BSRbuL1u9ScCAi9KcxjTPyzpK3VB1VjAbS2HePWUedkjKiPGA4vn8M8Vu89ffV",
  "key13": "5nRzkQgkWQoc98m9AE6i2JVkcXAaScsmFtkttnocouKif54rn4s8ykk5JWpR1i1XMpHzRkSePUCwEyyNxUiRg1ej",
  "key14": "3hUDaDf2tWPX4vsXHxke34JtV2ZRL3j1FLFxoFdqsdr5KoATTx42MEKQTCkr5Cwwt6MLePMFme5DbfrsUTezKK7P",
  "key15": "5R121YtAXJczDQ2vEDrcq4etbTwK1zoaYsWaxiTJh5fKpi44CLB4wpSv1gJupK2Wyud1XaTEJyFZg6BXwiXB5jWP",
  "key16": "23gTCMhyKicYJrk3zUm6ne2NuwseS3tAvyhykLDSMEjsYAn82h2DdxwCoHsf4SuMgESwVSceGBBYhXXkDDpz7kFH",
  "key17": "4D2cFrxraUiGkvzek9pngao5ngiAiS2eQau68S75V3ipuWx4vVCuPe44d9fKivwyLfpCgF4fXZJgShfquij8SKfa",
  "key18": "T6oxaGjz2MNjiYZ3UJeVuDc3519TSYdX7ZDPw1hft8KVtzp3c2AZ6G1Ja6TWEqRWQ16xkfm3tdwwHh7PfALWaio",
  "key19": "nXF6XCmTgCZYk1sRQrZWpMua8mPaHJgWQEMQtUws895WNeDUv1gtK2iX1Aypqvjx3yE2yS4puSaWfThY87Lje6x",
  "key20": "5ghwuTwrQt4H9G8MPce9no7QJRDsbf4RiH1GGPk84xqdNxfnfQwc4T9CjkLzMe9241WHQsXsrHYFbM83vdLVecVC",
  "key21": "mkoTrGuptuCct4tL5jhkQnqKMCHstDhCn7tyLjerm4qs2Ac5nKtydDUkn3fSFo4ntYdD2yjR8eXhhspCfKpHR6v",
  "key22": "T4u6kDMZtcnsPMgFVAmoa1FyUDYKRJNkgudhjJzcLzcLuma8UmMRL8x9rcRq1dVNMw85HW8a5RDjfhYofniizEW",
  "key23": "gNVV2dPyouV3sz1meg5UZVh5FhAtKaczyWLG7YRDzdaGmbsbcVefqxHi9Xz6dWht69XidVSrHkjE6KSYQhg3LJU",
  "key24": "3nYWKtYbLtvADkQqjtHfNiSDYdMHW4MzF7KnEiV99TxeKVY77JiNsYPfuXTtXxM7C9QyiHQ7oZr6FN6FezSoTPV4",
  "key25": "MUM1pGdj5mPM8mp4GLDak48LZ1ptA3VsjgAcR7xzYGiFdYDPmDQo7i2RrsT1VbfoE6hLxnpL44EE6F5pGKVZbmM",
  "key26": "2ATPQCvPAcwGYnkE16qBHZRMbhHh2VsqhwTvvkdL7U5n2uMJ8EhbEVh9UpvWoxK3TgvtV97pKKttvt4kdUGRDP8T",
  "key27": "4VGdxpJnYNgJvtw2MP355sHW7Ki9cNgdh2fmDMEcks1MaZxj69vwGX5d11hd2y7FpATfsT92cNecBqidWZ8krtmz",
  "key28": "2UmY3bjBsHasBP8VZhQBHAqyv6922curgtJL56ewHDpPYXAvcd5osVJSNsQv8xfVoz5uXbX9U1qBgiyU9m365BuL",
  "key29": "33xhKGig1zqV23zcYwsB2djdTzafu2719Z7iHPPC6JwWQsqWFNiHcs4pipWF9RJtG2F9BpZ6Xe9g8WS13cdZiRds",
  "key30": "4mhP1Qr89C3tW6mjm65CB9y7zCtBtfx7P47C1QviaUznshUqYMbsD955s7Hpx8Hc33vbhyPYfAhjT2HJnopMxqTr",
  "key31": "3d7aEPZxWe1iAUxovwkXvajLrcRxJRFJ1CwHNJKzUzwzY5EGWqUZMXVnKZqwkViq3uQ1SHRFvwpMuFczAjWXL8Bc",
  "key32": "iTodGp2oAYit41pdMCThozvUaV1oAxWzFrfC7EW4N8LZHwjzP2jgCiKHqHCWnhkzT6FvuKZi2vQDh4v76xCuE6h",
  "key33": "2sjJFkvzxDBDsrEGkdoy8UWnQc4vbe4LwDoKrm5yFLohfpjmSDczET8a4afNGjNfygoZ2A4ZH4Ljz4Lpd6ZXEdQ1",
  "key34": "4DbUAx1dZzxM4U5CroNbtBrUKRdasT6Q79W8uX8LmrMrbG44Z4V1EG1MPw12QoEJkpn3YnVHd8keC8S72ej5SyfV",
  "key35": "4TNCvKtXAFyiydj6LraiNxoNGejL2GXndCXFGSHkUjXwiqGapLbmw14oZmv6bSBeCATTBufMnWiWBobFYAEKSmt7",
  "key36": "2X9e9o7sARsQw2RApQWUUgzviyNbFzr68asx3f5SNF7ioBCRsWCbsmNwswffE4XS3F9Ut5zBTKbEveJuLn5MiENo",
  "key37": "5ya2y6qhese3MwBy8Po2LRGd6XwfYnEbppaGttMBgwdbPbMqYbNFoioPUXiTYDSPdzw3gQywQtojkCmqX4wVhnuB",
  "key38": "33bQG28ytjRfbBxRkegZJBDkgAFcC1reEkxW5cxGnChVYoZTUvPAP16o3jgeWnumHWyE77qRtRqF4hbVTymxQnrV",
  "key39": "4sjoZMyBuY2ArhDqBPAXbFYxnjSdDzpfbLLroccr4CHtLpW82XQJmD5LfXAJx2aJ7SeRKbespf3JiR4HoTu1fgTJ",
  "key40": "35KY9WX2SYUs1v5G2ESikvKry7pwYd2psXsnD2cDsxFBuE7wQtWgzMFZTUFE1pwbEHJ2hYz3g2ubGGMtcVjCUpaA",
  "key41": "57pcT6KJ7cmhSGuSJtqG1WdFRckDXxim3ZpQcEYwf9Fayq2SD3S9Yq2dY2bg9f35cPzppPtUVZenivCGbMCBuFEJ",
  "key42": "4iJHJ5AircPGcEEbgHbWoRjq7Ei1QFpTyVeKtsrz3QAk424BFvERZU5sAqvFDkgQqoNDz1Jj8UySMX1haW1Wr3MN",
  "key43": "uJGDZG9pXR1Jt8c1tWQ1wSEyan2m9ZULAUjxkhURdSTU8LUB8P8goYdM5yNFz9tHjj4jbMRmqVqup46fXTDiedK",
  "key44": "5jCmNyxCSRPMwLYeDWtfMQkDrK4b1AMa8Pzr35J6f9hTmK469tx3P61qk1rHGCdpvfq3oiFwXYTciF6AStyQyQnm",
  "key45": "49hCwTVvuvvBYWtzW6YKjGhGSm6b527Q38D9vb6HaSk1jni8RjGDrQySx1Bfo1LCCzp7Rvi91X5UsSNVZJp99UYS",
  "key46": "YUKbUQgGRU9adTmfnXg7CBSnRMhoeULrjXyMieeoxHzNg6W3B1byaDSjAhZEHRk1ZoXTPE51xzYhaqWj2fzKWLT",
  "key47": "9L2zRmiqqkSouykL4K4FjZEf1yPug4CExW1msUNBx5kNpy7L9VUnCCD8Ei31oXYq5J89fJZhSux2fAw8dgKtxbx",
  "key48": "4D3soNUjy41z4N8MhS6kMUUvJ6yt7PQRjei78ZmeYqNSn6WjN2yt5QUj6PqpghkR97msneujwHB5dA5yQoSBqrcW"
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
