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
    "367oRBMqkrQrqLSK9pfi6PxLCwHG1hEnCcWfPgtd3oTVUoFzJe1DyMk95NQsRiEDMxeoG8jBTbY9Ex5JnDwr46ue"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Lx5xyXXU298eWqbH3KBAYj77Z5fS9F8Gp8Tcb4BGKHoyGTxcLtEzp3e7WEeJ6qdVYtN6Hj34cHb3FJskrdmA7d",
  "key1": "3j1M2XhsxZwfZYMJnSNKo56yHoc86rwgNFALtS5MHQsGQx7hcoPkR8pqChM4DfW3tn4Sq5grdDqEiUeLrrREFRt5",
  "key2": "21ehtTWrpBxPDaiGVyxHWta8MNtjQvvULfGKfJKh1G7ZLvEREJwBbCkxJQXrie7aHrtWhqi2B84LqaUfftSGNAEa",
  "key3": "4nEnsciDP56T2qAcJbrhQ5mbWHUm9mu4ntgk3nYLz9efifShm5ELTXHFX6z2z68jNqev9egwKoW2nVmC1fL54wZi",
  "key4": "2dnsxQFvPi1a3hR9AwmvkrdU7wGxM79zM8uwhH15EpamJQ3s5b2Y1UKQyKrp2suf1UPZowrgPFzod95cqVfedz2f",
  "key5": "5yuvsdWN28XF5RL1aYmUsj8JB5cRe7YRsdckBUvfdbLLQfgiHKi3hzKoWgp7icmNKzh7Qh9a4pomhWRPzCJZNnxx",
  "key6": "uxbekECKfbJHzNAvcA8UfwnZrbWswRAVyP3DngGxwtxjoHha7DBmTHoE9z8qh7VH5BiVUBCfGA72xorhgnS22xg",
  "key7": "4Ki78Sj5QXTTnERmxAnnWBxm4CB8zMhhaBtz7wWeVKmkwaXxZuopkM7Sk5ER7cu3R16juK1LxnTdu8zx7Tq8UjP3",
  "key8": "TXJts7UdBWQoxYkBNhPQGUabzDGYZ41iHMwB5vGkNr2AizdK2wcP8C4Cw4P8qusqWtC7vWKYTmTXG88NdnYngzZ",
  "key9": "4hkzDkNLKnHtP9WtdTed1H5UK7FfeDfKswSuR5VjoRk1r5RPt4aNePAx2bcAJMZgPraReeti8EcC7zv7BpvoDYey",
  "key10": "zxVxi88XiF2mr5idDFxg5kbdiPYDvbP3T9ArnC1XS3SfLRN4HtyXWvtvUq3VhEpMct4qD85yyEoJWWsz6mxhLSL",
  "key11": "2d6o6RCpQ2YPmgiKvFbSeMU6YjPUGCmyKsdiF8caQLgTwkNGisBVBDQUkNv1dn4EoCgbUx2VZ8ytsDo2DLXsTDQV",
  "key12": "5hmcuY64ALyjYaArVupeSk4SUseee3rAXTuKtWBBnNhdFXxtP5RNNnvCTFejsSGErhDZCy4jqBZCdATNobNVE7Lo",
  "key13": "rWp6yXwh6B6Xdr5jtNN4Fbmo9zrzignDbd1YXsf2KiG6TXGzSD8HvvdXRfU9HiXLRyBNPmVGmGCJ9r2wwg6JcHw",
  "key14": "2x9fgzqf1ovFu15zpVSAZdWJKVc3k5tWRyhVwTHxiSgw6hgkMbTsfhNwAAqBoUG4XbZoNUGxx1KHHNBji2uDJ2xm",
  "key15": "4rP9xk9Brqh15FPrXuoXcmazefc9W7khUDLgREByq2sYL8qpwxg8XQBoAoFKTPGtqzWPgKKVJ6jPzFQv9v68ehdn",
  "key16": "3GGyq3ZmCHeZqs8h5wrhPAGoMwJAL6EgzX3c3Y4CLxZECnSJRYJ6bJ6pq4H2in8KbWaUoWgoB5k5vACkQuPXYKZR",
  "key17": "jMoE39cv1BkAZV3XqKz42sQyiRwDje294kS1H3ECGNfpKumksoknqjre3eK7Qt21mY7Ga3wkL11pvDQjag6Rupo",
  "key18": "33mi3LfKoEzGpzH2vNybcSQZ7fpfWYHU3enEX3BS4EMi1VTz67ih9T72m3n7CMuFAZHedPs8VQo5xU1P6pkV5WQY",
  "key19": "3GFY2R2f8YJbARyD8ASh5JM36ioUuZQ6sXMv2dRnTZTQHuZSRvkUy1DhHrXdoFxaoPYTcUuhCLwSZBbGmygupYpU",
  "key20": "3uYtYeM8zoWt32TosJ81sxs2EjgjtK6ccuxfQDRym5BL4T4YEoAcT8xCiNywKGwvJCK3zw7h72kr4nDj8LxJYqxs",
  "key21": "5iJp1YN3mQ1cyhruuyp69gE2KLrZgj4XBHVp2LD1wnAT1XwQd26HW5P1CQ3MfXuEwY9D5CY4k46dEXbedV9sMM5E",
  "key22": "2GJGqid3RufB2BzCtKn4k8QtWi33CAFZr5a2BA81o5qY9KSVBSmFCGDiRmTDkU1MHTCgsTcxFXMwJZtiqoDX5B74",
  "key23": "265tFwBJwaa8qGykid8VShY2FQBpzxuFC3AGXLqtCf1ViuDNsrjY6mC1LT3WKxdt6P6Bht29M8NTe4PmMmngAVDM",
  "key24": "3YTsqi6e3ErtH3FRHJTrJsg9KtLbdy122K7eCKbXR4SztBDLF1HXZr7TmBbWa16dHsXUeFEuSXxdUo3LqiK6uJeU",
  "key25": "5iqX5afBv43ZdWMjntG4gmA5E5mdpHyTyzPwZ25YGTsEVD42VxRabYdRM99gXV1n3t896eURDjx8j7Wh3iaMTqaj",
  "key26": "3hTh3JerFcjKKgN8ZtEdoTA84LMeQGCoGDf5pPnUFrWMLs95tbnbvwsmTjpCN1J8jNH2xAjWJeQLB5MvoAFZmQ4B",
  "key27": "kJa2hfks2LZYkTQW3ByAWBVo5tgWpbPRvPVofyarXEPzyqVLQfvve7c16igQwaLazK7PjSyyKgAouRf5HJXzL8s",
  "key28": "4CMTiKJeZiux5zuyjDX3KYJ6Knb9ezQAUc62DbnnCa1BC7kcpnBMfCpTo5TH1QNzGYGA1NdvqznMz5vMsE4c1x7r",
  "key29": "4V75GGBT47miaegJSj6htAUeEEuK7W7kKWxCcENfdX1NPr6M38DJHYUtDS6RLKGh8Ex5ygKU3Dj7NgWjYd413A2b",
  "key30": "3j1Rcf8t47zKQiis1Pou8U6fjFMAuQrcf66tDR76EV1NZMSA11AN4WoiHnoAfpzRWkZY2LFhNrw2wTzt58enarm4",
  "key31": "5LU13pnn8HnRKDuD5wuukxLVEyvrXfQqdp1uN12vXB2KoWRzghPejn1qm2VxkDj3Y4hGgLMn9aNN1uDxd4TAkGbC",
  "key32": "2nsL3KE5hr8ZG5sBG54ttp4765AjzY5k67AWB7CEYzrUVKXwTA3hZpvLgmuacrJ2pL1RjueykVRu5qo8gAAJC8RK",
  "key33": "3cnPVsJwuUqjSDupKZzkwDxcNPBCG4LNiLHYvphdt8G7rPM5gS96ZJpHPez4ftJPY5Keh5LuwT4eAM9AJddgL3TH",
  "key34": "4TsojPYbUoDwf4fFPmLXvrFbCp7aCeJFbBSTTUq1m85hhWU54Lc7WrbPa5DrWkMw82HU4cRbpb2Xp6DFNfA6veMr",
  "key35": "5u2v2hY8ho7gAW2Fj7LuknnRVP3mn7LWvwcf7Frt4n9NjS5WUvH7ek4Yu6ZEn8gBdhdEw1B9XWdi75TX2JP6b3nU",
  "key36": "2WYHKAF4ZomcKSUq9WoXorASHUr5953aunsYEYhe99PCLLUY4uaqKXXPzSgG1ifwP15XDs9uFUdjsXYCbXRNjs8f",
  "key37": "mpds68D4DCzxdt4QhJtEJ4yWzEkmGBxSxSKgoKTvTtXzY26QTexZARHEHXrtfmduEV7muErr9hHsFYRt7AQvomc",
  "key38": "5g4tNbAZZH9Q8wsGEL224MoXn3MjiFpeWebjWm1NmwE6dbUGvPPHjgwiQd12d4i2A6uKBfe756esxHuqmKwdQkkq"
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
