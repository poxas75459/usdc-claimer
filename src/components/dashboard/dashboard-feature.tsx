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
    "3YDaYoWrtGsPAj8yUV9p8HyKFaHLqhc8AQ9k2Qe7Wfs78ye1HD8bq8bD6PhpL6nXDDxv16vqw6jRPZCUJEtMbGRL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DocjQTQHTbpYbsSPjic3LPSZcLFybMj4SYKboStJn7uepU5m8ppdRv6z8K1uPoAF4XgirXAXP5nMueMCGe26vWY",
  "key1": "51jpkdc1r7ZdLqaeDseem5rmkkNURPQJskpujVEmXo7QgowCdfzhV1rEw7v3tduDFpcjAU3Mso91mLQLqbRe3sA4",
  "key2": "5Pw2QdXJh8Um7y88kRKyxrV9ceV8JwHrQ91ATcUKJink5ymP29hpW1Mh4oAje6KjdE8zXE34q7PH2XtK3bqUmhCb",
  "key3": "2fxEkXaRyn7yTr1sdwf6nyKWGjDKxP4Mcesc7ghoLREas5SWegvupqTEYgmtjA9Tih5N86kDk4FccTfE16oTws5D",
  "key4": "592LfSW5os9Tc6Ttqu83Yq4z3vQEF2cN8j3j2Umr8dWDa9pMjfq9M6JG1h2j66in1SC5bHFagztbonqGqEjFoqzu",
  "key5": "3qPLvXG3t4AuQH4vWkFKvPaeeoC1zHnYmsYhbvYwfW9VZnfwzaox4apYBdDvTQiYS2MzHjMmTieoZKxBvv3jLZm8",
  "key6": "4mLCrS9QE8TP8QKb4ixVFLA8U1ZXYNBoFHZdEiPXFdc3Lp15VXab3U8c8xJetrQxK2ABYiwWwP8gNkXRnqh28CKx",
  "key7": "3ym4GYJRhmMFf9kpiVsffbyCKH46zQJiEDPYAkVDkUyCdmSQUAGMJ7oN5ZeF4Qujgn2nCFSZ8fvaHEkaVC638cS7",
  "key8": "2FXxRzSPiDdRRxLGD8Js3U9DWNrZG3VHL9fLWZ1jvjhveKEcYxMvFcgeZRgRMrTQ9SQ1HHJQgKgh7iZzNGeTzTkV",
  "key9": "5eYQDeisGYfDdvTrPp3YUkeFWkru3uJztwPaaxgvBgAq3V6Y6jknNSDYgT3VWytjnsBqDrLjsUuucLW6sccYTfo",
  "key10": "4Acp7Mm1kREZyKtz6Y4RJjkRJYJqT8wavQt9MfJ6x5SpK34zqSu2Pt7owDipp1RCiBqkP4sEdASbRd1vkLbyKJTf",
  "key11": "2fNPEfnDJSfFNAHrbxmhpPeek6o8BwacqJDA7J4CQbkvikaJYvDUNzqs8L1LFVE2UgLHsqzWUzrfMaMqfhTy8Rqu",
  "key12": "oi6fj1ete8TemXWPDvAVHvfKY2TySGX2keodWRY7yGSfZhYWhLjjrx7b1zVfviU4ABbxUStqc2ovkFGPQ7PdJ9J",
  "key13": "4wgfMjiCFPiuk6tfJ9uzK5RX3piu2Z3kY2kcvRxfgAPw39FaKX15U7YfeKZni79v9GSpk9gWpA9rZDDnULHrEyMN",
  "key14": "22a9GK73cJUy746RhkZVjJ479UKKHSJ6Mv4gjmwbhq2nvWjsU3FQMDCBq2nBftn6ctXrzEpawS4JAFbgGDPzmWBc",
  "key15": "3r2a7Ls8eyBYs6Hq3MnEuSM676c7t97ohZMK21dbToxH9imfY8MLiEEBNp9XosqcEkR28PFPYpxaGz1Cju3zd4nd",
  "key16": "5Rg72CuvcoyYRYeAAvripnYRsiderwsdfRvYYs8A8cLG2fYd9LX5kFqgvrL1b8HfvWh2neYcQPVRfG2kTMVjpcmf",
  "key17": "25BXxfpF1x5SzXuExGPJSLmyNR4RPvTq46Cr4QAdzTjVXM7fQRL7BQ1VkimW5ZVAUetme9PUBkTegXLfMm4PTquz",
  "key18": "5mGbXvsmgwBbGdiEYsP755L6DB4bXNcfWuepiMFEqyo4EHrUf2wcy4g78T5W3eEVJbuVk6wxsoUnHLypbYt31sSz",
  "key19": "QM9vNLvrFp7DRaufcnCcwzV27A1bqYh2ap9yv5AfTL9r5krkR7LQS1x3gnUUsLy7MijinVUnMCQ4XDQPapfH3s6",
  "key20": "2MEjwVdNToTnTpaGo5HSkGNVL7VNxWLAznj4y8os4ZaNNUeGLen8ZtDpxgDUZFxdMKBMg6LamKFNyipmrW188N8D",
  "key21": "3Sn3sNuPrr4oALXwhsx3cek6u4A1HQvGsJV9N7ZREbhY6DQuyoREtFmsr3HX45CweXW1wVtQ1Ukq2qmwakjwFgVr",
  "key22": "Q12TDHo68H8TrkGgChWeCiC4XnjRTQzViXpKCSKbwEi1odsf77utfwDq4gkN65Z7E5FGw8tG3EcDQAyd7jYRwxZ",
  "key23": "4kwFEfjKVTJqB1kp87E5iBookJBbn1wT2fMXYTZWz7Ms7sCSUfZQNGMm7XJJ8qruEnU8AtGxTCGCRrC5WajvzwrB",
  "key24": "4fFpT435pzrcrRAsu4oksSNAeNPukiWL1fYKFrv3bbeSCcTAPzfkv9BmxBx9hFwTfnuYYBR88DjZFZPxu7gQsGrQ",
  "key25": "3YV9nFmbYfMBFVXTJACeQuWkLD5baU3ssLS1t39mCcvakMNomGnn9XkjDbLJimcCciKwXxSCSmQ86k8M89ka5eaf",
  "key26": "4DnXfip2kVGtBag68BhXS7J3gbSmHUREq6i3snCcfjJeNypHARNW1man8uWNFCNEsod5AG7sTmUjJW5XkBBczjTt",
  "key27": "qy7gzkcvBGp4yHi7vBecAcBrgxynDVx1GwygF3tohjswLv9QMYSa1apfrSw8Bqak28NZSjDnoLDvHp8V8yACoSR",
  "key28": "3kANGLdcxNvAzPcUKedypkn8HoMhsqQcmW95Xa3UQFKCgvyhsuhgHZL6ghQpLyKzacYRq1yrWuFWDEuE3qNnXUDb",
  "key29": "WonVkxQvpJaDhvk81CMxYpn41gh7KGJy8xp19KHyC2jtyUeabBEfpCSeaSkUhhS72yk3pB8hMD1FMTa8yGd8ZLz",
  "key30": "4v2QRXDMPix3UTnYEmkicRhYdGjKdcEfnenpNiDshYCB3kRD1KYr7fq1sx7EawxWtovsYEc5S25sTCkGByp1aSzr",
  "key31": "2qF5tVLAgcMPw3qeYGYKJ4VuZKHaWiwYPTxZMKwS7Zyt3zsvusaQCne1z7X6ZyewaQ77G6ktJRciSAkiLxB2AFDV",
  "key32": "3HC25MEQpkY6pbRtjSqHahPu8iNurzP4rJ9XZ9SG2s2nazJYGDuk11AFeuPczF9QdVkUhjEbBbYjysVH2SkMMGVU",
  "key33": "A9QDzigqYW15WzRHpu3fEd7x5hpUysP4ZraFHKvMZqtL18jSSJvwGguv1XgZy4MVXF6vL6qKaKqC4dZxFcsFseZ",
  "key34": "5pqMxzhaqKhLruSqeAHnju6Bs4RrY4pkAU79JLsCFAdUtuw5txnwhZw11cLATumdPvqFEXehPi5uYY7bnMFUvKSu",
  "key35": "3wh5GJ94Dj8W2dgLN45gofsgWttRFepRaXo6EK3aMjiXbqD6N6Fb16crTk3qzxxjfBGKRmDtsutNz78M2X12RoWq",
  "key36": "4SVSwVYSkJo7B6CrCAWTRAHzfmHS9yzuZmQEp5Dxgk4Zw67xYyaT5BU9jUgKLjeXRR7c8JA2ru4LVNPfYNdDkzSs",
  "key37": "3QoCa1dAfPkhNJ7S5iMveMrLCVtg1WC6DchnY9rnVjQsWKwTaajGaXcNEhHTcT4hdSdQWqzA7fS9w3yaoe3RaELj",
  "key38": "4zxYaiAHrkitW3MQYKs3PxpHXtTEEB2GexpiNWjdZD2rnpPLS7UTDey2BtykX8MBN6uP6D28mRE2WQ3yr6ztRjHh",
  "key39": "5aF5HAywhPiu6pGdtjeyLGA7jfv9tWaEWhziVQJXjvdRQaPtXgtyiXVanUeRN6o31ibRVZwAjekD3BHZPZXjp28p",
  "key40": "3oU7rjMHJD42LWErEUrobfRbZhfLBX7Y4MR4MBV1jiDLb2hGcvsRNxNHWnfFJ8Ni3Kcy865tZWuZdQYdZBhMoF2t",
  "key41": "5xywZocE35jn7rE5PB2TzwNFVAJPc8WjxzsSjgGvUs1pggR72ii82Cs9SobV4CV6XE998AzwLksuhvcrSXwbtAax",
  "key42": "3gqbHbW4zu6F5xAaThUVEtX45ZHfix9Gkqmw5E2uYyYiFnkVKJHvRaaLtd9ACsGwcxpTwc9poGUXDbAn2rRRAAfa",
  "key43": "5Lyian3ay9bf7f1TCPeJuxxfmaa7staHnWfSeEqRZLyNvrxUEERybVrj21jkunvnoz77V46ub4UCdov7M5rQyLGV"
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
