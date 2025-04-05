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
    "3mYHPFpCUQejF2reNt3qWniXdL7gjbzhsV2Z1bNGMoyqEZ7sZKnKZkU1aRjaUN4LbARQhvZgNSvZtcxSarF6E4k6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AdTACmw89tvDgt7626qyY61t3634uMKHgSU1cFi8fUbJhYA3fp4CACZ2mE3fWrtSTXvWC7EcykHG42AAL42u697",
  "key1": "48eR3Tk3e2zmBEqRWJwrTSCMYDLv39zrYnymdHiktxx3dowDSZSC5gyH48YjFZJ8XGaLssFin4y9LGKvbKkc6e7X",
  "key2": "3kFmC3Ax3QYfuLiTJ8jZydN99v9c1sHQxYckwebQAwaTxCzRkECvJrhAGT41w5RpD1Qcovn17cnZj8NwNPf3vWny",
  "key3": "AKxByHKVGq2fpf4ZthdqF48tdoZvMY69pUBWSEYxaGbbKZj4NWpPjXneDC4V4cZyoUA2F7R4UDBY5k1zj2GBJnb",
  "key4": "5WuXFMBcKLjsGa5XhDUn2fEhaJcDGPJHaZyXdKFvwixu6iGDDhShKwgLYmZ9bkXXjZLNQFNzgWJCgaxQMLkCxWjV",
  "key5": "M3SxAkF58yzWQHaR3vwxLEYWdxJTZEqBHUWvVsBD4jCNG5N55Cq3cV8Rgxjoc5gLP3RpbQNwstdq6HA5cnvvWtF",
  "key6": "5aUdqm7dAkKTUA7hx9TNLMTNuPgFieUcYpLPA6tUxPJUDuEMQYTPtUaRyR1hApxbpzNHZaEKF4d6fwRBsMsH4Vxt",
  "key7": "3oY3z14nHL1xw9qGXw6WLYwxMfmMCL8KDexwuSxeW1g4ka4LreDNsX88AiVUYf6fG2bX9ycwnRcSZm4UtxHk74AF",
  "key8": "3LxrudngPVrg6P8gFvfAZQZZqRAjyPkKzeLscm4KvDsPMtY8MTCR39PyaT1BHi9Wq4KCcyqiiNoK7QBwQCsmRFNC",
  "key9": "2p6gQqgnV8sy2xkZTxGXXzzgHD32G1BTZitrYwiMjPeF85YCi2w8r4CwtMQnEfwM8Lw2uBg5fbWHzsqdvF8GQ4nk",
  "key10": "5inxJ4zFJSbwLnoSBjQoJVaGik2UyKkVfgxQMs7W6GDKMvpsGT3or4eSw1yzmBn2TQbxVKBHXComNg22BA5PfjD7",
  "key11": "4ChwbJH789SWEFe5UpR37TssSm3PjRJ2ViTN8NSP15RpxT5jNPz1iHDuNd1HvnF4BzrgxRkRFXRMGBc3c7Z68Rp2",
  "key12": "5BiFFXh9x37V5sDobANj32cipuVKqP9nhrnTK1WqCNGAezZq6jaFAse4DkWd5qj9wbkr5eHLeUUhUXix1Fps8Sgc",
  "key13": "38TLPRuUoobudfQBfjEQ2DhfnVpV4da9YnxbH9JbqnoSEb5y5L6HA9kH7hNEoDgHvmYYccLpBam3437c1xMUMKhf",
  "key14": "4Eri7ithyzaKdPxwkbSVMyh6NrjC48HNA9UYD73MJoHBvcgMioa3fnkuo41x32zNPR8dS7PpGcop6w6bEivSgroW",
  "key15": "57oWb5tPCnW7F23HVZZisPVTqnE8zanw3f2LNVVaAE2BEKGXee1nPv9hbneA86ieuvEHRnGqgQrVduMZw1uJvgLS",
  "key16": "3QijdyVCvbCgCHQbLSzJpVqUhgwQuLCWsxscGaRtiS2xwv7vZd1boHin4MifzqCkgs1QBY8TKYFVt884V2dPQsrS",
  "key17": "3aKvwasy1GFgo1o9iwqEdi7G3vtvEHMozbDAM3ah3j3A5EJmB4bNQVGvSFMbyPTFCDvWdvuoQBjnanpZumpG329H",
  "key18": "4tYHdDq6pUiB4avGqNNTcdL7PSfN1Ri86XtKDdMCTCAxBWqK9US1jA9Ua1WhMXtmvojhnVNZgXUpZZcqrYcVMCWB",
  "key19": "aDwTkAMpvCkHt97xgEQTppKF7BSvmyY2eUb6RaksLyXevoViKQaiNERrD9Cy5ycnm5S2FhE4EqaGm5QX2cCYfXv",
  "key20": "3rXT3xjLnfMQmXMkyM157wVD63H9GjM8LNvMphd9dJ4PysBdTAUXvH4PwN9jD6AnhKbQ9gdKvTuHBea3E2mtwRZ6",
  "key21": "647GKCrWef7ZDXGaGVPYufktZ6aMvJ6VyDGbwhUR5ZntdfzJ7K2GYxsRWY4CXqy9hW1X7zSisK5XZz4ZL45gdVtN",
  "key22": "8uX8Ut8BMacCdCV3NxnrFamCWtYqEiM18Gjq9rK6raFqZdGebg6Dfr1p6bSDF5Y4ZWcCQ1C11EZcE8pkqAxewfj",
  "key23": "6x7unA9Vqb5m9Xk6j9Ksas9kH4gu9GMz8Gqr99JyRguGzm3e2gZZoxMgaHcg6MWUkM1FPKLd6nDzDaPFy3VU1sa",
  "key24": "4tmdEZ927ZvDfcupQmrGC3AnxBbAy4oZBCsQKGLgTVWayfnajEHcj29MvCAvo2CdVKZQmdAEtyXfJ39iuSJCc5y6",
  "key25": "3xwCCJH8FJaBPkuJL9zJnXxZHk6ejWGLQwBSYKGvAszjjm4sLxB14xAUwCkjE1ND7PH9DW9FiCgNAy3N1waU3c9i",
  "key26": "32xxQpUvE9jCpxX5tg7V8dSY5NPFRWW7ikLuzmCyd595B1vbKCm124eVN7XFES7jA77xcrfSbeFwq5kTbksjDjV5",
  "key27": "28KBHVpySA1GrdATxcXbTPnpKAN6yy4vKivkn2PaqruPnqMSmCzViTTrmj1bKtnv68hGjShLap1uP5gXn2iMq3Sp",
  "key28": "2vYaGBxfwg6cLP8ujxozi4hFhnQogatD7TLBnsHxHz2KjypcAhqHD41bm7iSTtueDPZ6trNFw5V8fY6VEBFwnymX",
  "key29": "5Bc8eJp2hLMvJ8GxYTZgDwSAD3op3dKVTyxS9bqPAN5i7adRLW39fSaTZbN55D1KAhrmiHgnJWUAscqhcjAax8vb",
  "key30": "3LMkGeciXrZEo39XBPvu6qTa2cSFe8fdLVz8kYgVFZFFjnd2Au1FsQ2dnWeA6VwDBw1DWnTeV1iC5NPVJNPBAcbX",
  "key31": "u6j8RDjSpPqvgp1bfbHFgAAEtiMzPuekGTGnMorsZwm9D87qmx3gVpFngrKYW5a5pNTnNULywyaSqmT7HokmMRe",
  "key32": "3GNmoThNrBd9x6PQB348QnkqDJxvhivcHBmHbjhyL1Tto21Kcm1dYjpztNekJq4HTPsDmGz8WnxLAtGQvo8grxbB",
  "key33": "61nvkNWVDc2eoDkScSSvfa144EHQ3rhJN4EzVNiQPBGGRzs5kDE6LhJUuVuXQ6fq2cfVYnnVmCKddw6ebGyJnU6V",
  "key34": "3jvdn1vCgm9R195M6QdWLMRsMv68jiRLWkCrdpCTix7Xk6P8eXzmtLAX2nZBrbKpmv15Zdh9DEtJhzbHkwJTj5Uj",
  "key35": "2Ab9GxwLYFUUQPEVKjo6dWUjhTkE7s2LjSRVSK6VqLvt283uaKnquTu8MxnuzZvKSMx7PcbPCAWTdNUF9VKCAP1T",
  "key36": "2Z7Jd2nBng9LPxpqarRjWQoD2NEa3ZygKcVnxGCcQaEpX8VdXcTi1eyop6on8MLbFGBG4eKoDinpUQgneQL25nA7",
  "key37": "2wUjfN2uJ14u96jnKEuTcQrALCVfwDBLsr88pjYB2FkpsTSsGkTs6Ux37A3ejtV5iupoEJTs76pDkprttF7Akyjd",
  "key38": "3VaGs744WnbUDHPeYfKyNKjNBSoDfbDSf5yF1pUhi22uJroBRmNf6Q27N1AHYeAVubWVNrHTCo1F4FG7nS56pyUi",
  "key39": "2MXdCrxr4HKdiCDAECxVQn23cdoEuTZaF7srFkqUccJ6yF4KeFCk1ra1FMamffp7QBxDxKjREn7ThfTamw2Q9uxe",
  "key40": "4yJ5dKMfVCPZt9xCEaeDXvZtQ7Ab8cAKAzWFhWDNQQjJV5m49W2Aa8SdHWpBTq5bDX9YKAR1DWUmyDa9YcdipYrw",
  "key41": "4aoRs1EkXC7iF8pGAEKe59fAnrWKYNYiq5kLF4Brtz8ZiKaKedM9WtbufzWyYxfCFFvufJFCdsvpJe8XGy1yrGud",
  "key42": "57XBNWu3ihrQL3CcUcwHUcFtomEkq1N54RVGkYYmz3sW4K5LyVL3hENCBLfzzoARYjwH2nvAj5yWN3w8ihcHmjSg",
  "key43": "59NMMCcnqqaNqccWovr7zqp2Z2iU5uWX4pUbnCRkEogZYuNp5TuEWtemyfkkxdBad2dbT51wMrn8JQ7PpxcGy3sH",
  "key44": "2ranedSizivvVbh3SHFKwkjVdrrT9SJfCQ783vC4gWYE7aQRB2TmDebUSqLGYmDxnBiHc4gu3Gb1ytaHP6fzSPq7"
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
