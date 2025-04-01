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
    "V61eGWGEL4a7kLKkupjFTVnEfosDKH6qftfqqmv7Vik6QuNY1d2XkSneBzP6GqZkApG3HHwxFqvn8VmgZVQrNJ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QZwRrY2Wb2e5D8MM1AiTdoGVCeZ52xcwRWXfPubJWDPJ2ZgnTSgLnSivnouJ5tx5C2XVve7veLkr5Ho1bWxa3DS",
  "key1": "3MMwvmCdtKaSjCQ7u16ZSdp7Uby7yoPufQUyruPdg8tHYimUar7Qf8TUxa35uMVG5b8rM7BdGo2hpuBBLcMiniCU",
  "key2": "5Ucf9SDvuaCHw9ZVbAx1stLft4ZNnC3DNJcVTmF5uaQiQS2grCs5MGhQwJ8HJ5kZNo666Nqn9Wv47h12zSMYMt1q",
  "key3": "BwzeoruSJA2SLwM5pPGcAiuMDoSRrvMyT6ibT1k4CcJ9ahhDVUXWVxypgftyQNXNuie8VzEAg9FLdxnsAQoY4yC",
  "key4": "4spunfNG7n9yBVE3YzJ6madb2XfAU4JZKHLACg5s7DGJ2LJ2y9D57uXBGhA28ush7jjcfPCAqzP2iVWwbBGPVCKQ",
  "key5": "37Lni1EiLj2ygzsGY6Z4uEeu3XPzkMexidnqe5KksibEcopZHGjpuYB2cgJzzh8wHqi91zoD5PmqHqQBktvsxQfj",
  "key6": "2PTqQNdv4D8E2boPsJBf1x1bjKoRtExj7AtgTeBbQJwWz4V96HJWQdA6xNGJU9pPjcquPhbHmnjmzeueM328pnLp",
  "key7": "4QEEVUdnkADMycpud7dm5BvyiHCs2S77ysUCu1Bc43JiR5Vd7UH6JSW3awSsgeEGUrEVjeUF9SK2234yrzn4Va3Q",
  "key8": "uMguvifiVKU6HFXjXq9Xzi2V2GjA4hTK1kfW87mqkvDrd4eeVGG5tT3Q8hF8j3dKWMwhERpoDrXBsdd4jKjP7ex",
  "key9": "3MAguTMvV9bCDqRNyKnvDB1H4JrtfaMSz5kv17fzep69X9ME1eRY445gxtSMoagvjYgLF7J9C2JadaNFJJRhkXbM",
  "key10": "5QTos1RY8MEbSAuuxXu4tBeqgSmY7nfP9aDuweyTog2ajywFdLVLwiEfdmjfThJW5q9x1YjbHQR744GvQKf1sSyK",
  "key11": "3Hoz8Lb28m8zKgY6iwkZL4hj1xR7xTkRp8LZAiKUWXvrevBbCTj6i9nQMLMWdfURAyfBNssDzgFZRMSLZ437eGvc",
  "key12": "4239jG8J44QTehjDt3Rj74zAYrJ1CdiX2M4a6NtfwbsjEaYbEgaWAfRHG3rx3HvEye8Lsc7ZEEHhuDkceQ4giWtF",
  "key13": "3GPSHYraQjbYhQ7oeqg1wnU2YrHZwCkJzRojpyXqWFaWyQzgvKfjcJZLdsaNjsfGvfMe3zpAXq7CDY9d1zesWiRR",
  "key14": "4SEJN1CLt5MEUv9vZuoUvMw2pthKB3EC6ccLZoTPtMph9HtLQzLgJv8WdruevbAvPBU4fVVLMh7ATeQZUwyQSptY",
  "key15": "5n3QwmP8xJqp1jnTL6caAPA3eU5DErgwMFRvNCpaK5EQY1CAJmVUHbHcuuK4bGBMkGAJomipSGB949L3LyCFSaR1",
  "key16": "4eJsbS43Ypem3XsEYTCpuuJvbf11571nGWEGGmAynsay4HMP4rSUn41TN9i1aRHqDxbo95nHdrsg6fCWnhEiYAhL",
  "key17": "5fmtNuNommSqJp6FE1Rdb6Wm7MCREx2uQPV6AVsFZFe3RaFYrLtBsMeu5CB5YqzA4bm9CFywMNJgm94aRwr1mzi1",
  "key18": "576EahNHM8F9BHwXkpxyjwcmDhp2BoiAwv61AVfz63nqjeTysGy1XgKFuUz2DmYKGN1qhWsBM6M1jWJqHbXC1v3F",
  "key19": "Y2FEF48X1GT1h3AgoTgDwrK5sdbV592Ys5HaNKpgemFGX8e88pDiWWwnmjJvjLcLfAJFKH9bJA1jMRQ9B2hPa5e",
  "key20": "3yvGfQNZDZ2KN9szyb5GLJvj3M15kSRikS7acJv5SAjWQMApQ8n6tUYdZDSVVC33WhWt2YTMhjwiqicjuL3uNAQ5",
  "key21": "48E159dFApJmByeaquwcfx9cKnqY8RjqM71K7Eq8Nr63tHaJ32pn2B9GhkpvLHGUBGWUpuPFK3739r1RnxGgRPgW",
  "key22": "3r8zfhogePsZSxwsCY5xVMUoohs4BoXh1oYFjjgQFjA3V4CxV67VEiodbdWiKG1eafGmvrZ1jPLVYXWdErWHeqdA",
  "key23": "5oRrZZGPCgyXDdEUrenoYMv6Vy6m2zSJq3671yMBEvzTYiLH3Xrax8pXdmGCwsSe71Y45MmeqDdLyYUAoTSxyHw4",
  "key24": "4Uhs2MMg7Z5vcipKv9SKbCy8E3vhRKfGkF6bfgZsPb1xYUSxRoCvh3W8RpTTRwczTJ8ZfAtBrKWqBLWLEPaqVSxE",
  "key25": "Gw4wW7SMsVM2siXtpHo4BYa4gy18cEjZDG819rZob7cxzcYDeDr2Jo6u2tPcUYpNTig2X9NQUHzgc7XdVDuZAWU",
  "key26": "29XwZXWMBJn8Qv51XG6soo6CTA67B6ue4wnfKcFT3YkryS5281sANj5FZXgZAMnJAiSJZzr3BrBwyKXn5fRZrSHE",
  "key27": "2FV4oipxjmSBYMZzqviXxyoeANYbkJ9S6iifPzYauRipmdj9WhJX5Grn5VhrBa1NRBrD4xgjwnRjRtp1GBypTLmd",
  "key28": "4sUnfsx5XmFJkVVubk6FAF6rcGzHiqhS9YWMqg6kcVu8UZc2r6fVK8rgfX4FYUcZAV7Jx3rtyTsCG4cyZe23gDXL",
  "key29": "5rPT3v1NP8NK3xXaL2gUNbXnYytdkuhxUMGtHxShgBVEdN56cooDV6ch5vZ2M6C9LEtq1c2yJWornT7NXMxdJdgw",
  "key30": "n3tGaifF1Ze8MumuRUQjsJ3bhLyrQ4v3e5td2YEABbcaq86LECSFpx4jZ6UiCnMHqif9yHDrrdYFScHywEHG4xS",
  "key31": "bwi4WthDEvFUtiyguMgmpiRqc2JpYKJQ6vmQy8LKnJLLYZZmDCvhU6guYtr4PJaNAuJhHjPKpLTZzPhAumPAcUT",
  "key32": "3YLL5QRXDVWcPDP7KZ9kwCXsLVMAFqMSpeLDr2NW4TJnvaVCkeUjweFrFgmbFg45eT8tRsoduhrre44DQZiJudrL",
  "key33": "2tP3f3t4X61fFbVDBSnJRYbHBaMyNRBWWNhLNuY4mz6Rm8xjKXtYWMYMf6nxWFAUoWiys6prKHNJnifes5pSx8kv",
  "key34": "5jTBJxBpzW9Yp4guamjqes4oLHBJbJWaJ1Zb9idkJhDJVkmiJUrsEfDi1Zd7xZkL2faEzPCP93mTdpQV3GPegWPy",
  "key35": "3dK6gMbQqjGtea4z1fk1QTqDAbX3wMqMaDRxuTbXBruSxs25tB2u8MjWqw7F6949vd5kbFa5y9Zx6GUoJZrPuT7S",
  "key36": "59g22SZQAB7i7d1ynPPbK7etmecocr9n4GrwdDi8vthdXH6pfwYG4iFAVXAW6kCVtUrDLiPFHKgkMdomdk8VHr83",
  "key37": "n6yzTbpgFy79FNRqL2RkxKPrAX7jHRTQtzV1qexox7rFUJJ9yLhix3scoiMhUGzsYBcTcvWk1ELZqMDycuVA8Jv",
  "key38": "3Nb2eeiGrbV8fH6Qocmek2A4myXWnG8YrUcE6LvxQnmCKgZyb67ra2xq8BFjhzzmy318NUh2HB7c9YyppTt2gjUh",
  "key39": "3LKuyhu27FRZEEWS7x1NkgWReoqiuJ8UzpnHrvXL1vWisCGy2YarFQWG1U5xSC8cFxe83G6Y4PicVZ4GtVgn2ewy",
  "key40": "2fosWW9SW9muMjXgr6GDbm8qytA2sJaTzKrB4dHbJjxuK4BRPPi6fWgqVn63hr6W5D3MMovMMMuC43vYhMpnDsB9",
  "key41": "5ZGmjuBKjX2z5efpKwbpPVjmgufPUZQNzF1TnPpAMeRVk9xULxzLr4Z1MNmHrUXt3wWF3G46knLwhfjNdRNzALz1",
  "key42": "5ePmN7MyvVgG7a7NVQFTy4e2wLd6detNyd9ofvYkgVSUmb29FE8JDmPYNpeXiXEAEUYkKjJFApw2dp5XYRP3SvyX",
  "key43": "2CxZNwJtFoNdGWVdpWuG6mfXQftf2WTBZ6YX2DNnomb6kryaGkejSrr36bVoNQ4xcsMUdvV7BJuhEZ5E3JXsMGXT",
  "key44": "6jGpmSpGpzJ5j8KfbMrUxyESHyfQmMBX8MotdBiafMhcGA9UyKXyvpPQ5ieZo9EHnHpdXHSWSMcBjjNW4J5szBF",
  "key45": "2TtHEZrFAq3K3L6FZh6YX2zd18pvEMvdG59FZZ3FE6GTkzodQpb215R35DXekNvYUVvNeg8zb3ZAZSDMXFqL5bfg",
  "key46": "4vufryv6iftSoeWtLujAHmiWyJdda1EgSQNBGHcy4cv4DptLkahphRXytrEsEPqBNiYuAhFfbVSE9Rpg9cExJvcw",
  "key47": "4CVsjcqLoEieBPM1HirBDy23cqM7agcm78EpQrLMMk61vi4dvKHb51wSp6xqAAmsn1Nm6oMJoXyzqZwuD3kaBTAm",
  "key48": "2SRXJgf8b91W3kMbbT3Z6W3zEboVdLCNx76nSMjJR73CD5fnEePCew7HHVrzami5UuYFW9QYFGuxXBDkzWhptC3Y"
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
