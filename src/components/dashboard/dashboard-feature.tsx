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
    "4fsCCX4UgYY1eQjyGnK8yQojcn1dZnJKnEATJNazwNVkyzyNmzaCEKhbGbSJ7CXq67hR7s5EFjMcyimE9Jamcssj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FyWHuXTaEphU1bPBzKvD9WHdrXxHYHXKqGxstMCTPCgq8J1pPx91xCa5msBkyR3VWUUzPxq9HjDUZSVu33hx7nz",
  "key1": "5g2MzZqXxeU57LYah8DBHmSbqbNeTu27GnhvhjLwv2ZXdigHkQS8cEkuWg3yG5XtLFPYVZyPuRC1c5KZd9UEP7Ay",
  "key2": "5hnrjiR4gEMLubr41m1o3nX7WyADzHrGbHHFTnjASvP9XyYB1r9MZ19bgXGpYZts4FSUXMvkb2AcUpJ28JUvFrH2",
  "key3": "5o8RciAsXvoTZoepGN3XD7MkhDdk8hcLGwvYYuFVmT7XBKGJZB1qv5F2RVHQevwTj5ScPETW6MVFmLwoBgWDuQ6e",
  "key4": "2ZcnA47hZp4ZZKoADQzGFzaj6tCCTUPoHsjESqBobE1L9GzPwZ8o2yZiq9nFNm7gQabUAvMjFdWK46gFP3bAYCvJ",
  "key5": "2XWvgjY7zqKgqxcYEqis9zRRkyeKwMX2jTNTwLfisxAWFUsmmZHhUbPotNBt5FYkburjqambHGz4kUCWwCMjWURV",
  "key6": "48CG2f8XCQb3zHZCDTLJ5F6QqqVEj2N1hfchccDjxC7msaNYLNLugnYXNsq55e71wkBzp34kGHoESkDVqrzYct4P",
  "key7": "5VKJK3jN6kit6RXr484pwD54z9CknpJcvwBx7tdDptq72qJhyCf4c3yZTEWZ2aZuJ61pheVX7UGAqqtnq1q6YGm2",
  "key8": "2AFQH4zho1HJneV1QwUjwd3yYxB9phoWuoKPJKbkk4tPq5fzRuD5Mnot8UGMesYEJCbLfh7tSs5pHoiWZmXQaTrR",
  "key9": "QPrx1DxiHR5rjUsiGjMGxJiHvizW45RB7tPoY3PfHvEQNmSYAx6PTiBojSec43UCqHDmnFL5WAZF57boEhtNouB",
  "key10": "533WCz9Rwrc26zRpvESuTi3hotWYEXjpHtK7ukKAZ9WxbUVQ41sCHjbxUefUro15iPDELFJCrEPpJMDn6LMpSeXq",
  "key11": "2zLJDx5Sbe3z4fEWsTj5K6VvgZE3sDyL66c3ye18VJ9hPGZXxXDDswxpEkKpkNbAoomBnwxrUob7oALFUGqHeiXy",
  "key12": "45adk2JxPXWqkkzDcnpv9gDkX32J3bv8Tx2bp7M3qxLFpSrMqmsEAczq2ZC6BHfxGdoBqLEAxzhyR4cFzj3Cf8Ky",
  "key13": "3JqXQgW2UupZq9kvtEmDgJLXuBrtzrBKMPJzytavLGBLSa1DH61pLbxn8LdWyb8w3qyLgx3ry5fpH1mujDEJVpAj",
  "key14": "4BDkRGResRRM9NAyPJhDLtxbYqZLPFg8U6Q2f9DvDDboWGsy53MnqTFXVrhGQa3Q9zxwH9VyQ2BccADCPBoUwJ5G",
  "key15": "2YUC5BceYEQLZsnhjs1mW9ZsdEdNuEEzY3Xn871kLUmRcpV8mq39yGys1ryZj5g7KiStWxUKBf3TpBvXL9ndVZzE",
  "key16": "6wLWbHmBzmyw1DpkNZCj75zDr1rkykB621DnuZnANZm1g2HJiKdLLXuzUHEjm4KQtyV9M6UtqDpLdMGYDoZ1eoh",
  "key17": "2MG2GZFkQFUC7soKXqybUjwuq4JpCJrSs8o1WnaqiiaGSqMassG7jj5u6H88BCAiW5ptzs4cb8VFF8atNq54mUHN",
  "key18": "3nFri4VAyo9w2XDFDvwRPgK9kKsU98xUBtU25JDmHfojFonc7AGDqQreGNor8RNLPX6PM6Er7Uc8KHFcM9nKPm3k",
  "key19": "6W9XGGL3tzQpwd3dzB7CoWNkkkeUHmqxK3shMRTg1i7RUVDfaTD765Z4quqjUGQhxL72eQqvs1kYZ2JGAbrkhAr",
  "key20": "4gvKMWVZnp6CnXbNdKMHGGPhGcsr5fbSQXqu1xsKbBuPhkzUryGVAbKwFdm8udb4Mgq6py5HYHDwTeXN44B4odib",
  "key21": "25EDFzDzSJwAEWtzpHVLcmrdYUHbJ3L9TxdeUK4HE8im1b8toeE8aev5ufU79vQXqU38ZUaW7ZVH957rWtLYuhhh",
  "key22": "3oiTYXackMi9nzVvFZMa8RiTqzyJrUHyqNHCafEUwhspRbJiRPGuskJKU8RKgEDyHLTR4WzVrpdpRPRQwMxK8TfU",
  "key23": "3XpGqvR4iq9tAgBpTFAR47ZTnFHsb4Bq2mjvMPJZJZaaNpxKHBRxPnfqJPUWSt8zTd7G2vwcjLG8hAtZ93ErQXja",
  "key24": "5aYB4ayAWwkoxrQc8xtzoQpw6BDi7FLQ6up9W9LoXMBftH1hGq5XyeZ3vqCJBMAQ2DFbpBkqDDCaTCkc5w7XfCct",
  "key25": "UhXDCHrMRG3D6N3JpDjxE9GgJATZNLDUbh4kzGEkVikNWJjMvLzq8UaPbejKu92vmef9TqGqQHzYZJXf9Q7U6CM",
  "key26": "5XZpwBGFRq38fsZ7KVodGTmYMM8FWAjrck98T8ppwjbShjX1nrLDGjKgbwwqFGXymsb6x5VnZ1UkuXfBGAV5b7zm",
  "key27": "1Q2WZi8b8okNW5V1z8Uch6q5exddh2apKLECwJkRoyoGw752UYb35aB4C8UMo5jArNkhNECkUkj6frLutoRsM2M",
  "key28": "5Ga7PdH86dDWhBdSjaNfLNiJqc59L87yBuMThm1po1SXEmMkLUFN1myB6NKpHr7kGTc4iZW7NCjjSWqWmg5c6ViH",
  "key29": "282PNHhsGtA58FRuZ2wPKciLKGd7WneCSUmuRzypqY5AjmzEiFtBHysdXoSy9H61bRLVms4mcChjmNxKTRT9aqeL",
  "key30": "5xcL5ePEhfxumbebmRJdbM39GyjvoWZUwkmeaGfyVkyJQHbHdfuzEZqoEQg1XZ9RbVWdag9MkZTRwYLcvJsNsiNe",
  "key31": "AGzgkyENRQfbcyhsp6S2Kwc6ySN7XCnE8j7rD21j8TDGZCS9tRptbL5UYStcoyP1qGNRMjcB2Nfi68DiVR3pmss",
  "key32": "4XhD9zrg4T21rurMnwqPEprRAugTy1Xgk1jKwwTkr4ZxExXg9d8WeB7FG47FuHmdomJBQcjZomN5e8pAWFJ33AB2",
  "key33": "2yQGcJ5ki6xPVvci2aWq1ySd6N73dvrKyR5vyTtF5M4JUbLB3cxEVQmkLfkneM97YNNfvJCzpbXRgFFVN7unJx9y",
  "key34": "554b1a2b2cdGfoTY6sHrzqNPr9oSoEUdTzFLt8zMCnq2YnHAh49iYCS92fWDToxmBEAarzd5hgdgcyGGZzM6x5Ve",
  "key35": "5v5NKTCsT7DMeL3U61KKqFsrZpKrRrS2NgfzCeWGRBwfJVR2k6iHC6YVm4Gg2wptKB3g3BHrLRhLdTT5EfYdLHdx",
  "key36": "3jM9GXEtRVs71o8vXACSswXYxaW27XFqza5tDDcUPnbBreESZKN6WYQWzqBo53JTKyK84gPypLHzskVTYW7q92Aa",
  "key37": "3Z5y7EjLHGVndRq5WQLfRec22AviVZ8ztXKLfqYtCqrVigo2U7fXxy9pqwW6m1GmPMrmGLkH7PvgR9FK1ofdYPWR",
  "key38": "2XQ5eqHkmwRFubqd8yLrdtsQq6odGRDxNyK8BTyEhCR33MuyjLg8syP1thjSKt52SXXB2JMvTeaHhS8VhHDQUNXr",
  "key39": "5y5kv5PVD5xBpF9eRTKnw9CezQBkJJp542BseM8Vs4osHkQyCZFX3Aiwh8qVGjwvBx99SSinvbZhsmEXyDWREGU2",
  "key40": "mQF89URd6ASERjT1WmpXFBdWvSPvVCpi6r7D668cAQCeUKJgXKzf9AgTBxJbxP7GZPgYyN6e585cizLReW8oLds",
  "key41": "2zxAjCM99VdUsDPRtJk3Y6NXqUuEUpfTgzq4WYancyHjsDSHXsksBY3D5UXtPnfwS4TZmwRA37UgNoxV5iKhe1ur",
  "key42": "2fXcSqakvAhA71FRmf6fWzAX5npZ5zq1djTmNW6qW6dVKWeDVnXqhG26zkcw6cVVjgZo316sfDWFNRegnm3WkgYF",
  "key43": "4BHrq8u8YCFF1vRmetquK9DzeNi6GAJu89sxHqpraQxXjpHvrX79rkoBGsKPLtsxLSxpMiyW7MwCXNgYFCfTrQTZ",
  "key44": "4jhAgZkVNoEciKyCTRu1jjt5GdCVqZJmwM3ErXenzFm3wKq9eoL5xJ559ofSPFAt4aXnXyYPdybBGdgWStgRb7jY",
  "key45": "3j7QqY2YyQk3i2UfmbGU56PWWYZiSdmUawg1tfeqXeeieszALsX4bpXADk2CBbbThqYoVMJudJxMTi8PGqfhjGSJ",
  "key46": "3rjpDiKqbgYBeV3UhCMsYGhYBf76i46Y2hfN71AZYEtZicGiPL63Vkck2cZDEYrg6uewqp2Pc8Zpcv7gBGXSo7Z",
  "key47": "5M7959T53ZiSp9ynWVozeDPpua7CbnkpsFzHZsqEQZfQy7hBJEQ7w69LYdsHSEZeT7R12uNnnQAfeK12PY4bghzp"
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
