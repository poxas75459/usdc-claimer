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
    "5xxcxSPajRctdTKdgff96Kf4nzbLek218wZd8pp4aQBz9gxJmjKkJjfh26b64Lq4NefMWBNULfokVsrFbJVy8xmb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "seuNNMMQ9gFzXy9PiQDYSW8yU6naCM48kfSrp2DsWMTTmLFafJGXgCqX8BXD6xwDqULMsjkKJwro5FXp6S93Q92",
  "key1": "23SE8hxM7iBH7suRAxKWLSCMzEjkAy4Gu192H5id4EVhJxb5LUfbCeXJjJAPQHUQqQuqQwRQ4z1bowPscmsZ5h7N",
  "key2": "3UxeTjuLLLQRqV3ZLwAZWLbcEbw89XaGy7VA8NaXVehe5aKjAZ4FjKLjtuua2fXAnY3bTM3nyHRWeGRLY616rnhY",
  "key3": "5vkJWUVEJeCSFwp3dVbzJnSmbiryupJYVeKeWFoV8CtBtAbVrmGtJtNj2yo4QyYkXzLsttjuNbKvVeN13kS1efWP",
  "key4": "3YFL8meZXztPaVLv177zj7XEFW2oDB4c21ndXLFW271xrnKkM9s3hYzTs5Gc1BRTbLrHNmSpmdgxvgNXfcJAPKx1",
  "key5": "4kXk4B1DJMBFeNJgSYY6M9AjPr9ye8Pf4q9MLm9uSkee2vYfnEg42kPTru7VSakkdoknC11bBmqrmJhNvJsawVSw",
  "key6": "3S8hLrMoBe1foi5sphGJQHajn75JUd9J7q1y2U4WVE5KxhYLGqhrTKeCGM1b2K1HsG8S6ztDYGRJAW8UZ8Z1FWEB",
  "key7": "5FUdkjCbTBW46fzJ2KfTW2WAKZRASXSAJf95RHF1oAE7aPeHrXr9cb2aJk6CgtwfViSwDbfRnmpaSDq3iDd5qY7y",
  "key8": "6nH6wvHvUEgfJSC8bZ9P8QmywDuRGYBsg8JvipjEvdaGQHYWvDiEDwYXx1KHrPVweanW1YSU2GWGjCUd5SiWcEA",
  "key9": "3CaAJVUFKiza6iswHkehRXTBpx5veY3Z9Lq37PE3YHjfPQjTRfwJUZ7ZTyfe1tuGLCgWX5QEbLiPT9Fz5X1QBwt1",
  "key10": "aoccuNsMb3MKts1eM1PZnt7h9HzbEZSSr3TPd7BKiyw3cK176o7jJucPxw6T5A9da7Wj2MEzZXVPqc7PjzAuMkR",
  "key11": "4oRWVcnVRfPo3LusZoVLMDHtgpRgqcrFXUURHEW8veT9Re1xL1LCM3aQKNyQfjYAXgU9U43TFjThVWpaaKspP65j",
  "key12": "5R8HRP6yNnpXSbSoQzcU1NfRHkSxZ4BSNrEgzQsbxm5KzpVy1DMNH7ciWCRrPHzSBHke4VpRSPDeUSBFFJA8qYUc",
  "key13": "2qtg6UFSDKgvRJenJjPJvDzLNodNuUEiQxjXXMyaaGPkqLQumZpS7yRf4Y1c55PQ1HPj5CsnLQhHDd84basYbZau",
  "key14": "3wDCxCrRueCxVZ6XJUhkzaxFYDgyrQ9h6SASXqK6Gn7tQzdrprFGp3qqe3yeNndExcDGSuaDXEyyE18Qpa6jREif",
  "key15": "LffXPxjFHY3TznSP3SaRNXLPoPWA1sWq3u6AzVEHrrz4k8wDvg6oyHSmJRJ8YHwdDm1xs58Vji125aAmJYYPpA3",
  "key16": "3LfHQEg92dSruumTGpG5uc7vmFgXs9or4xvroTQD84mvEG41Rk8VYe2npoGtm7NqNtWxqJX6bDcRkp3QTyCZz9rt",
  "key17": "29DRL2tWPziVZifFtEYfnyofSDFaosJweY9hseFupzrSBc68ZJardNpPe9awKnFm8jCgwNtscurmViLBwUAdNPpk",
  "key18": "eQpKoEkspL7K1H8Su8SxMcntzNp3uwbCwv7mVBVKYmvKC3pVAS7QN73H68y9AeUNRYtgeaEahvcP7yaKZj2APtm",
  "key19": "77QpyXj78eehvr2giLZUC3qPWt6j91BvfsYbjkkW9RxSyB4h1UsnssaQ5RqSomyNp8PaBAsv9Rkjky4GNiaiCrH",
  "key20": "QSV9EQGT7M3K5LKSjY8qsNLL7avWzLzo3zHp5unmivXWvAh4YbZtXSxpiNKeRGMn3GgrfFzqbmEtJv2E9W4q5aF",
  "key21": "ceskfJ6kTfFJ4xjDDXgTtyN5S5JtnVnaMpFKDW4pR644ZPmBLpB6GPuVCtK2uCS333uwkwPZ482khivAWsu8xZo",
  "key22": "4S33SVaZpxYDm8wgeL8a84VntNa5qPu9Q8WK4P1UNmEwaqRVXQ9mvrsJTonM4HHmU1WtMtto96Tn6cJrMAkiRHXS",
  "key23": "4ncFTauQCQGmAxXoN4xsHe7P2AzAi1Q2yW5gKQnFFMiDapWZYCqH1QCQvWYgmesbXS6ZeTNnYkAcsyiFWYQXcMRC",
  "key24": "2gB5fBMmoCY59iQoKRYpE9nSXPX5WtHvvwo5Dq7Xvg78xmw3Ez1iS1pULwsr1QapyN7rDsTz114tGrN3h61qSxDE",
  "key25": "4yMfZ2spgTiLTXNw6ysJ86bnKjm3Af96Y9KSXDaWJ5TFMkFgCVwkymYzVH9hqzpq4vTN5YS2GBtUGx2kKrJnAFjE",
  "key26": "26XYcV238ViKQc3dfjdpnnbripc5qq9mrSroxekMFJ6DUpkhVo1ahJWoroWYbDjYDqNiVCjrHyE4Hr2CXEbRtxNe",
  "key27": "4SHZMdFgZARbJHGqDZphGVBLaRoMGHhZWufkaiHxSe9uVVQkzA9UX1tpttxUjPBiGiq4kUAvuuLZdcYr6BvuMS96",
  "key28": "5Q7dnUhfvTFD2tFJPDA6LcxcfaQjSS8KR8iDp42etf8PbxAXgYUJSfrv8Kufhb17KDSiKgY83AbTZH8hK5VHk4sz",
  "key29": "5yYPpDAZGnEtFsc32mFuAgQXJC6MntqivkWUg3J4KdmJcadswc19HT32TqKLy9Ybyn3P21gDAMuDcwvMeHJAv9AR",
  "key30": "5CsQ8PVjv4VKU6PmWN9TVDmxcC7ym3CtbgfTD6Bawn62p7YcXFpx3rYENg6EzWxXhqN5WPnbqrdneHTAFK6S3p4G",
  "key31": "5GMSjAqnsbTiCgaPTC8tMT7aA7RLqq3n5onGx6pQYxRCEZ956k1iKfaEyB1EBTueV3vrgsyQT3MTVEMtpKEJe8XL",
  "key32": "4eEKg7sEVorYywfhjoNpesJcMwPfWPjAM7Z264TLSjagTYs6RJHZ45YVW1L3Ec87p9nPfsw3RVMnH3JEHLU9k1Kv",
  "key33": "51kz22gxUt4QfZRpXuyfPCjUNHAX1EYQj38MYkpJSY15qA2d8ESeudpT3sooBGEkqXvgLZWVdvi9BNWU2Pjzpp7t",
  "key34": "5YAnWGv6tkHdXysFwbAMu2WeFUzD6AyxHCHRW361ugaRYJgD16LL9szgbhpB9fPktrf2r2AQs7bMpVc4Ron2f9RZ",
  "key35": "2cHd4iVUwheM8dvw7ekNPERPwRRUanPtRcLgQU6Exv8bEAggdmZ9iWmSpmJDsDejuYkVYU2c5RXB27e9VBjfVPmL",
  "key36": "5YTR72cGWyBnFxYHQbN1REYtyCt4GefaxjMdNowFinMpnRvwhz31sGs4KT2KXsDHyU4fazzxAu22WXR8YbzvKrPM"
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
