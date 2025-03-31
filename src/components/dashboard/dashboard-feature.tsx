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
    "4UBfY51kGie5ra2k1984b16XbPwsEH5w6zMeRxApCfrEoGJenEmjZe9q5vi1Rh3MxJdjXvm9ymmVWgwVhD7mp2Pc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mD3Bq5G49aWbppEug9BeHmV9dbX4dxVpYyeUyw9YJn1G6PVnKeqcv4bvrsaXPGawe8eeV3BdnnLLM5QSvF8xweY",
  "key1": "5jMWNLPFdHVG3RQ3QhtRmUWW2DxR9xPZ2m5cH2X1TquEXCvsqvtZCdyC6xKhYT4NcKyt2ozrZgGY1M17qo4XgA5i",
  "key2": "5JrGUxRKTLXws8qomdrxURxKxEKwqZGgveg3W6WPZxVAQHSkPTaz3n7621SNNstioqKvSS8D4XJsUyLqPbczkGC8",
  "key3": "4G7Kzc3DE8AXo9QbcXGaRT9TjEhGXpqpYcJQ1suHKc4WjxiRtjxyp95kM3R1VHzBxc4oH1YC7DeCPL5DT992PZit",
  "key4": "2ZwiJCJEaLGdGLazXzT6nnkDkLK1HiWjNrwwtjFCGSFpJBCRZ9sFK6cQkWWC19ouE2ns5zgMHxXMhoTe3U96gu8r",
  "key5": "8LFf7UgoQwo3vKaA6tsNX5p7kZAtcr3Nho2fCnRnAYqSyQ7xjaNzeKCeqDpcRJ1Jbm9qyjXM26bNW9pvZXB9Jbk",
  "key6": "4cpESaBvmu8UvYfSyxjW6BJSbnyt9C3xNBbYR7DtnroQ3pDwH2dFwmkXtRYyKsPULLRsWseqveje9PzLh6ZuZj7a",
  "key7": "3ziCVJAQZ3BBwjRHXTmhh35TLcUusBMVgUUXxDshaB4FWDcVcgawJcutYzytKVy5vjqYFcm5KKZux3h2duboBBkd",
  "key8": "4dLtUt5Nx3mh87ieheeU5unvvRuUM39Etw75zuYhGMWXKnvqqAe8XWoihdqgAmzYyub834RfHC9kdr95ku42JSdL",
  "key9": "88Y2hwCccUSZWGHkR3haQKy4PdKQCS8TTsRNGfSKJhiX6gfQTgxKoHw1s7JVRN22RuoAX22Eg1FqnAH91uzA23N",
  "key10": "4zCUK98GMMZoP6thRhj2FJfzvqZdTmRrF92ND5eA8gJrZ1nZMCQUu44q3hzzNMsYRGb1epSuJTbJ2o6S7LA6iJ4",
  "key11": "5ee32LcvhQQWBwzcfK4PtV4eNMmSyZFUZNy31gdjk9C1k5rxpyC6yKj5iTJKSQRUYXKzk5CotR8qkMeBNB1M7YAR",
  "key12": "58TVCrUVSwm3iYY6jFJVNpjxLK4RFpgjuStewqrnLEXdqxKUf7pGQrkp5LDYa69LdmTYSie9DpKp9aZUdn3nRQfu",
  "key13": "4YVTpU7f8Lj99kE2Ubhoh6GtxwndtJJWTKZ3cyzChViBrTzrMoLgf7nq4Cz1fAHE9To5XtYLq1jPb7tDeqRiQGik",
  "key14": "3VuM1W91HybL7M8R391fTH1qXHBSypwWkzGRTnG2GZZ4zCqoTk32xvrQ4BUKjauzGPqwZq2HA7jTb1RXMiZiuvCS",
  "key15": "CMyBYTKQ88c12vkrdkWH1EVNM3zCnhTG8ACAtvRLeqUzaLweHkWnaXC6VuejN9jw2zbvcM4JNhMCmwkrNVAEaMk",
  "key16": "fqcqwYbc5Pif1KyLtAkMCfWea1TBX4D6Een5iwCYyGSTpMxr8f1yiyPQ9jRDUC71RHAWi2ywaZ1cYpeN884tAsP",
  "key17": "49FHfSxpYGbUgm75qKtQGEGEix5ibT2Sr8Y6cpUsr8JEorDmA4fSbs9Uw7Etp98FoQJPnt1tiHY95JQ6pEwRV7eT",
  "key18": "4DdvZ5gRR93fmr2QkZTXbyLQ6yM1EUFWHifeRnb7NhU6c64HJgrM87Gsur3FqnFn5KmgeHB5e7esfYgMRNuPFieX",
  "key19": "4XuRyD4ZoncqjvBYJVSAdHJnGGCm3yZarM4sQWHKd38TVk8FPgCjSr9krBJgu98NoufjUuLVW3FatK3AXu14bJgY",
  "key20": "J7oCuLN1GjbE2yB9aUpYakymAgbYURdYbPGkx6N2iMoG4TocEFoq5dtCqsEy8DTNG9urTPThfDewSyeuoRNnHQz",
  "key21": "3R6BnB2Eck1TTkA7VZyGQR7jVbx2nQXBKZESM7dpZD8xMNzFdRWnT4rPmiuHkEQxUesSLKSyr4DDorabRHiW5SE1",
  "key22": "2v4oTGDNQEyHb6BmZiaTJSJwScFKzy7JLdQdFgpUaAKTZZ81GMZdtzfi7ZXbbPbcTdJU6jSdZUn9z7f3tm9hniS6",
  "key23": "2XKkS15vkxmL3UcYy3WEdmkBXm1Lob9DjcEBditF8QcxHBNtJDY7CXK9P9y5isWTwNvNvxWgKF5AgZ83NvJghdTU",
  "key24": "fHgD9UhXGrFzsTj3YGkkfmA2DrzPTjxMAxhLhgsbgqFeZcX7r9JPxfTSpFDN8TFqw82D8nMp7WUKDD8uHBjMneM",
  "key25": "dA6QKtuDayzVboHJ73vn2uE5xegut3HiGsaNbkyQ7CUMEfww997Ds7F5pEgjhMgezPxBrJjsYtoHFbTewsNraLf",
  "key26": "3PM9GxN5xUxZPd2ftTxXMVprGWs7Lf8qBBubpKbrGq2kV4HY6uxCiPvtWY3SbV1RTpkYnuz28msbC45XDSdn4xqN",
  "key27": "3eFxSCocbAmnnJAHVM4tWx1b99GtoiLGXrDHXk43vQ7dRNbTFnbmjgd5qBMwDVU7QN8A5LGMy96vLAhrqxLZ37qo",
  "key28": "4m4UghwBPzzNewqAZPcYRjxjEH6pYmifd6aJLVxLd1Acm3WHEZ4LViGtwDTPWReyjzD4gysq54kMHnXgc9E2fxQy",
  "key29": "3h4T7RpEbtFcPmijx4Vk2Nut4bnZjfzbt5v2x1wgeA6NHEnbAfLLrU6jqLXSJEFMSkbPBEuP9VzTgrQzhERrBzMi",
  "key30": "4bR5xi9BPieB5aDr4x2hkvNLvuJB5mR8R9LwXko4wtdRPkiSezNHJYNpF2Ynb3npAsYJ8kgHgsS1GDhjW1j7u9De",
  "key31": "4HGP6jmpnFAh1TpRrbXs5zGxqmDh3Fv5wu47Tmq61nBN4xJLJ5saakHe9CDiBRKZY2vQ4br69kmzmCAJ2DrXdr48",
  "key32": "5hGfwQeYQoBt4fQJ4WGan3hPRhB8fQtWiWL8NfoCQ82cq4pXBF52tP1zty4b3J32pBBH6fkQCGKDb25BgCHLv9xn",
  "key33": "5vJvDb2PsVR214veurnwvCTuVyyB1GjMAoXgrjbNng7vpfM2wUdLXxN5FzdDDpJm8xVReNQpDtnykht95hRVfDPg",
  "key34": "4h1f22b1fq4pQoXwNN4bvXFu5jXL1rkT5BVkZ6R8gMTYuYad6W1VmdU6kSBYK3TXuR16cg2jxqo7urYynhGG65Gu",
  "key35": "4FVweHM3aeKQXWnm3fEVXFtFXqfWXRBV5f4YYTbNWs7iWLfcqgh92GmrmZcLE4uUaVj7D8zpiStQqjkVrmpAro8Z",
  "key36": "z7wrSBtcSmocX1X4vMRRwYu4XUCZehBeNTicWwshNWFftesciJLzi8cT8NQEJNM52QYdgk78XR4SuiE4hvEuKVR",
  "key37": "T8Nnwcs53jE6KUjHRQD7bg4cePX3M3LUgQKvYsuVTd6wZ5rtw6xBLMx9Z9FAd4i8rjyH2geuu5X3EtoGwDkWxuv",
  "key38": "31Uvqv48syaymWWkkmG2o1KefNGx1NpNYUt1h6nSJELPXHwp61b3RXY7ii4PLNzVoCrb8yzb9y1bMQykXxpEgWzE",
  "key39": "4M2cSeoKqZEdxBoAFi4YsA6odspaiTreY9CoUyauqnr2PEpwE1rkqbfRPp44ozv1GKn9F8sh5yUGXK2ibcXggZiK",
  "key40": "3YzovqpiRPQFsacH4hyoryn6mBEtdLfGhDZmXZCdbqJAbpAFDFKsAcfPrta543siRcmWdTYZS3xuceGQsiC2TpHR",
  "key41": "2PYHGBHQfmP47WABCAMdmGu2ZpPV2xsMrfiVVT4c6onWh5TuF4xyaDCryGzT5hSTkyzpSypSQd7zX6X3AnMAawmU",
  "key42": "3ZNGEGHmkWPxNxd5BVqUSBtMyM1TqLFn8BuvpyNobvdjdpXDhL6FYcGaH2WLYAoihvBQbxu6KZs7pvwpT2F1Vsrj",
  "key43": "Gcy1gz1TYsAoAjWbZumR9XtT4heLyHocmqDen11i1X6CLB8vauzDQ9bkcvWD7Nw5db489Fz9akC7yDHvR3dHFan",
  "key44": "47xMsYGbE1NnPPhSXWjT1VqRXENnn5duFrk1eVuYVAkUQUoP7GvLbuhJ7XS8ppEu4a4RAU6jGmjJv7855YntdvTg",
  "key45": "4vL8cd94AtjRsfei6DNEWULnzFeLgj3Bh1ivLhqJfdDgnoUW7FJAk2pLVqkjpUwj4mbwU7sXq7AZEFwa88FTXbh1",
  "key46": "bHLzh2qs35EPg4rNxujzwtLX1A3HoBqgK25ogPk5oEUDr83f7ekWXvG8LWgoJGsbPmtKtugZsw5RvyGzN1tG8Ty",
  "key47": "54S39suur766jG5XS5L5gRAiiV5xRgDMS6HMdCRVNZUHpR9zR9fk9yezucfaJw9McuKbGgVyAEZJc8N71GTaa6LM"
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
