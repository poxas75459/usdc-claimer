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
    "25Nfg6Y7rg7ct6M39vkpanYJy7zzWm3XbD33LXwRLmJPj5wMDiMYMURjrWfQ6GkRRZgGJ6nCJCwSJKXmFNCJRhUw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "495KQDoA4skJ8nNrQ8815aAbGSYskp1NDy1JdVyq6Kj9TFNMXVFazP7zdMEh9bcRRxMLnzvSdtHk53RVyVeCyL8J",
  "key1": "N69Tj44pWdoKNHuaSJpEeCgiKepupGug3MXhq8jm2N37WjB2Rq2j7xifyvkZkGRhrr8cTAz8E5GfnhTRyXrcSLV",
  "key2": "4UB5PsJ4faNmr2hRbjtjGeJz8NmiCXXYkoDCGbnKRCCmiSuDwKvq4pyHb8qacyDMmBPMymERvPLFwTdFoi6vLLz7",
  "key3": "XXGnsmLANh1db8GrfK1Y46TrSKxTgfxCx7XCn6e18gQV7cZwEP2siW5EVUQz4b6UdL45YhHt4Cwvq272B98ZSLA",
  "key4": "21T5uJB9tRVGhpPwuRgVWocBqT5nyyXVv5gbG1MjtwdypjWkejCuywPy9921XEuyex4Hj47yQGK5Fpav5vTKFDsZ",
  "key5": "5QytRKtGXjkdVu5LC7bbFKQVtafBrrJVExxPFv8BuZVM1oBR88HPj3N2mXbNVW4SVbs98H1tMS97snuu5MVceLpo",
  "key6": "2M4GmLtbmLJMPcMHPgP3f1advxBwkjE1HXPW9mvAuK5QVYaq16myoffiPo2R4YHajUpeypUJGpnwDiFcDLyaYu3W",
  "key7": "2X1dMdcifqDzuCGrp1UvfxAy4Fmhp4d9rAFS8SoK5kttX49Laur75i61EGJibjzpQ7tN575yjG9rW7TB2FnKCQtf",
  "key8": "4VGgBNCNFvghgMMXR3GkzjyZSp8xn9B33Rj11P8pGH7LYRGfQXaxej1xM6AxkCUNN3UagwnFd3DpcJmoZjSmyVtY",
  "key9": "4GmanYBNqg6Wj979oQiGyfTvdvHLhueYnAgzsn2C8vHNsJsJ4wykP4ithQrp7ToDHNH76MBRiSFn65FJcGetemzS",
  "key10": "2wpZoynCEPhxGSLwKtncyyejLyRUBMXmFe1KEcNX2XBowucCijWRZSW8yKQi9wiXHFpFDiL7vjbXRdH35z8eb39R",
  "key11": "qSKkD5Ne3nbUBHjL99ro7mkfaoBvwPS8KPbYg46WgAWpjrRp4qWUjrwMqNoitPYRAPsND9dyXTywHPPtcRkhmZx",
  "key12": "4saoo9GTqtLbGvKqnGhvfDLYr52BgNwAeZAvtLxt5izfeVe4hnYGwyJWM3VJNwX4nmrCmDgbXcU9nh9Fz1qXM4QA",
  "key13": "38KaxSZMsuhH3aAq8cXvnSeCrakayN3EhQAK2fNkGqppZqzWrV5fFxGJvAAhBhwLpCT6cg7tWaEDZHG1iNiHAzKK",
  "key14": "2WVM1KnxNL6K43AsNSMNFiYK6wVWPJGEcAyrbVbxmooyggdehU4q9CJBsg82wxvterKF1PZ6dAgNRHv1p5XHtHUg",
  "key15": "Myfc5rcQYibuFHCQZU79nnMCa8tDFw9SjoNsb18fh58ci2419DBianoyPixytBkzRUkAq98M8jE2Ad9kSy6QmoC",
  "key16": "4PzeM3Ck26UwQpCE3wFCzsGWq1odDkUuZtR4VbSQDWx6VjYjpoxYwp1daKdDYrMQEpMZpL7Qv9gvdJkB6qWMzCbi",
  "key17": "53BW9herFCyQf1UssMuHKsRuj1BETuqRDneQpPAzo7Y9kgszMowf2dacw33FGLcWM4kvwDNFFJRGjphhzFr5iJLo",
  "key18": "3immqT4Dj3qQX2QUzZh5ic5gneVrgDeMcJ5Gwx4Qybu2MbQxU27duYuXyti5xyTgLPhD1VsQPFFDKfF25F9bCmE6",
  "key19": "5bxEQW3Z4wbCjxdgXhskDzUEps19AwPef9bL7GrQ8Z4YE9EG6h7CaA3sRGWojbqyLXYcMckZWijyQtwTEmk5kmP4",
  "key20": "3AfNEakubZ6zhWUGNNgmAyXpximbqBX5pS4zLCk8iMFqa821S8FST7nRdumP6GrcSerpeY9oDo9941A9xQ42P5zh",
  "key21": "4tGc7DErrSRvMZh5hqBoAgQ9XYCHKhT4CSreF98AksigRA6w7mLmWX1xFwPbgg83RsK5KnTp7kh6uoGGU9PDfBdA",
  "key22": "4ARQrCK7cb6WaKE2dvMwBiHrLhciA3seiVCAoqstvsDu1ySqSz1jY6UQ4DjP2xRyknQMerBfxLHKrmhai52uyeWj",
  "key23": "5X5BcrLstfpHk4CDmSmAUGFztGvgpcinjjvsyupcwEMZroK2MhtNdx53Q8dy8PawJ3ehLeq4QjihC8XCuiXTwRKD",
  "key24": "4bbQdGCuWdPXvyMjFx4YKFpPTWPZaXE3nWrVzxWsBPWaD9eerqcVuRsiCp3U6Jr76HgW3vbdMZdzBki5VitwPDaa",
  "key25": "2kfJsaQcV3gbMwSiYgmVa4H7mr81RVnt9n7XUtAY6KA8ezVmKNnVtkYxRnCMM6Yj7f3iYhZtrVoemeQg2UBjWKS",
  "key26": "M6sXNBBHtvnxKEj65L7ntPEnFxA9r87NSNkjhgvJdVWZfDjfxLxzqK1Ud4VmWSBrBojUfkv7jRFd8hxaJbwZChU",
  "key27": "2F7JbSCCaRs1adEKGf2vPHd19DSLnWRaUFabzsCvd5UbZuNzXQWQZx8d8Scdg24pejcbtE17PY4MQNsVGVRCiBv2",
  "key28": "cmh3eqvE4TvWD1B2QsgFUuc66HT1DG7e1WWp4TNAh8rV8qvhDsBnJsEUmSfNoL2Li4syW6ktuY9hFMmu5Grtbiw",
  "key29": "2RJ7yfb6vgMeMXjS4o4QZfbP5XFk5vpAQkvTVzUVpxyHniET2EVTTvx8WQh17MKiN22PxBigs7siCwQdhwemeQBW",
  "key30": "4Ys9RP97vRiH6MKMQjD8m2DXabhHWp5MufHb3T42hVTcbUmtpMY4CFjR9E3Bm3Wck7PCgZwW7pBGUKLR2aPzXdjv",
  "key31": "5qWCcB53GyfSZb88M7MfwD8fzb4m674ahrLk58bzRh3F1TqneDuHqM8bUoLMzSVqMCmKzzE3KVNF7bZPXqcbaDSZ",
  "key32": "21cYVAnxBVsbJgK1VJzBgcht2Zho31AoCt7gK7AFZtx1WQNXcp3HGU8JC4R9EnuvKvrJhvpXKUrGEBdLBq1vBHt1",
  "key33": "2HyxmNtmzng25acG2teLCyCsFMfKei3Ax7Nuoi9uMQVZgxx4aqpwAsEdygopHAt7cMFHzJA1Mpc9LniGYcBMsV8G",
  "key34": "3z1vyz3FDpNvmm54RwHYCpd1NupBb9vsGzWfPz6dT7dJppnY8ETgz2tR4PKLL7bmu3QkMNpE6HBhY6fMCvVvSxZn",
  "key35": "2wCeoNY2nhykAbsoKxh4fuEmhxbuijewdiwxpCU7PbERc2GvK4ZDs419vhgXaJo4N8aPvoPanCSW7KkwiK9yZqxp",
  "key36": "5QaoAD2DqqwkwW79gxj15BW58q4Tj8qADjEC6r8QwPXK4ymX9whSTuMv56BGr1r5k5g1Lm69uK2Uptyvg4KbBXeL",
  "key37": "J5K29wUBfJRUYQ97dTGtFdY8gTVii2E7yoNvgSySaB7hNuLCmoo3DPmh8aNP9upDbFybmS6oNPyKaQ8u5HesQVV"
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
