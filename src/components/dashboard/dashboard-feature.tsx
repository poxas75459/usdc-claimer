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
    "3cTHa263fAKdo4bgWDpzpE7JgypZYpguJC2oEfG957eDu9X4r4jFdkYeFgLXWvsQ2PWU42K11X6x1v13kag13CVo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EBHxZVSPk4XAS3qhgKAhT7jReRLmeThFKeD9tuxbUERVYzV3LMKZhuTW6vjPBoxyZ1xnM7ZCzFmcUXaC6HJqkrK",
  "key1": "3Bkt8Lh1RyEpY8kgc68LJzAKvp7Gq3n4uZYE6xmVsuBBCJYQnot35p63NWEaB5hXVpvC61NbbXhrzEDUctP4k9uh",
  "key2": "eZGSQQae2kzALjdmyZf6EJNsGAWzfkVGTNLDbhBVLepHmJsEeNRLhoz4vNPsUxA9L2awgNyonzryr1nH7Gjv5F1",
  "key3": "5mTXNwgoqxYqa15adubG72xY8cJLENsk8CJgW1wqecQ5whrfoW9Lx6feq3peNrhTSad2PuniaoNuWpD3DGubds82",
  "key4": "3CXbNQMaCJn4RjgmgP2wZbFwvB4hw1UyCupx7nwHKHoxdZY34ErqwLcLabuB73YjpRzqnWRDBkYU9mCrr1yeyNYe",
  "key5": "KbUxzXkF83sgr6FrqWD2DTaNoGyu9sCFryeUkcD7dyuAA8AumWCM9H5KgSs5Fpd2UAiqUKykvZZzUp3QV5wkPrd",
  "key6": "5PyfpJRBXbFDmUtvn6ZTa3nhds4jpPFA47bGMct3fEsNgz8x8bvGJKjihTFkfciP4jQTC6fQBRcnhy46toY7iQYb",
  "key7": "3bcgBXcHDoTgCfBDBx3yv39qnhNFYWzUZsiVYPbqJRnHYDSWrNCZrY3iPTHf1cRgD7W9gyDDk9WbanpQWUKZYEBE",
  "key8": "9A4EddbwLXNBzsNZ3JcNdos1drM6Mm31MvjSNyYtppLUioMF7kztMZYkrcp8LWJb3YoYDserQXcFxG5M5cnJUZM",
  "key9": "3RB61BP76DaLTcTN7UkHwR5yypckmYXTZXA1aNsqYmHHWBtVVZ88YM4v6rHwDovqeZhQTtKBWkaDWFcLQu2xhgkj",
  "key10": "2aPu7KFz2AFbhhvoaec2GUwvYcepN6RBLTgT6z4oDrV8ZusHHAm8YLPLJaFbibmHqygmoSWTfuqnybrqciFySetS",
  "key11": "vGFMUe3toUbekdPuo2jv4DCoxHwrQ6wGDWQeKHMPMHJzXFb7DFnUt1Wz7a6cBvQRRDGoEUUS5WTVbD9SU4wDYCQ",
  "key12": "4e1h416C7YnewUC3rjG78TB82Lg2wFTziuX6GKCkdtBmpPE4AtJCYBfG862rYo5s4174adWtFWheGFhZBtYauNV4",
  "key13": "2mKvv73SxZq4v4WNQmyYtA6xNHcM2dt3TAvth45BQRPvCEs1sUDJgo74ngrpGGxSD4uunuCjgUpAemogDVTLTGkk",
  "key14": "4ynQ7LYAdsD9WZu7AF2PovT9jktafDH55jFbeytzwxwrRdMhd6QifKu8Md4vU41JKxETJMUyHWbQ8wuxGFyLEoqV",
  "key15": "63tBoM2Mqp9RXbttUKyw2vBNK4HBBV1vZpZ2Uw57rH3hGAnPVkt1jAiqK3Wz5NY8auKVf9EELiS4PXzCZ9dRmGnt",
  "key16": "5nNokiL3PakdEbCASTTTAFThR1YhaEHujdAYPRGgvFcRFAG2khBdp6FhsFy6Ujm1zmoxKYrVUn4hoLU4XSzeiJPP",
  "key17": "JDkcXPm5mtE5Q6imWg9i81g3qZvQZoHaBZgE12nhTFvj4GvNpPFs67ALEcu3Guutzd9HkXCbhMMqtYWrN73pu45",
  "key18": "5b8rqzRP2eNzXjRyJgogyZkDxtBjPJVQnCjLzynhF1xLD9Tanki7UteVRYJJdrDLdcHx9MT2m5jZKZHLaNJXxRNM",
  "key19": "6KSP7t7Xe28n5LondxcqnrjBo1QQMvjKkju3BGCsMzzosj112YpqM45jPt6N6y2cdhAaLwzmZ9CcwPeYRL192xj",
  "key20": "5k1zvcsT9HSymnNNA84C519xUMYGDShvSQYPxjt8LFey91QxrxnRU7XKWki6vQXx7U5A9yTz89bc9aG96ThxWabF",
  "key21": "m2XkgdZp5k1Ne8wXx8sigtibwjzzQGXC8azgGR4XfZwgxJvvQJuJ1VYTHQBZ2tqS23psmk8UvVY8ANu4D9V6CDn",
  "key22": "4P6yosANApcihZFPE99qGrJcq9LrmDWG7DHd1FrG6iMuR1bwoKLqtcur7QXAKzqsfrr6vEBrPa2WDBsyRTkomMr8",
  "key23": "LJ6SBFJes7szuZ2YeZz119J3KDzSgwLEFwawi8jZuzzh7fqg4kyZ77KBcnL7r8vNZ1PgDKzHvLJSRD45Xxn9Tj6",
  "key24": "57i2tLh6Hx5NJGAM7oEag1ghzoLoaJ97hugtcSwt8xMj7PD8Ak6a1zJNRyaFxx7z2qgNSRHW9hZifqrsxjFGYkaA",
  "key25": "2U9cBHuuSLCkuVuNTXZWycCab5n9a1iehrDKEDUQziNABY4bmQFku3d62u7VFK9gJ8GYQQe1ff33qDWgPpvwd7AQ",
  "key26": "2QhzRapoC5FCwmaohRqe5Qb6B4srPTtC27eoFpJxa3CNrVXLipcbH4riZb2S7ZF2KB6wS1jfo5uuSLrhVhxYgGiV",
  "key27": "jUUedXYTmEMUkagCmB6PtRkHsTiuBUq6CqHbChpso4RzqjWrZD3aMgmDKgLb34eaeYo8caRyBeJDmzDKDrWj6cQ",
  "key28": "5YJGGgWNCacHFRn58NMeMRMViPqtSPXBqodSUrTEYpJWHaxZ5XrUuxW5dNCSzpfiUetzc35T3X4czvB7qSD9hpLZ",
  "key29": "41PwzLLoxqoMQAHV2DoZ7Z6Q8LbBgfAFFFkUntAA2EWUAnbLdGixz63zbHRLUqncsdJ8iHJTvKUaYpTi1SaSrkAv",
  "key30": "2dVJ3TmBsxSrVqvXYkBdNA3txQaHmtmqCqBiQnkcmf8cSLDGqWhEo61HNBiagNRdjAvMruL7DLv27oNmqETrzFVs",
  "key31": "5gRhtuuXzGJBg19rL6Sh7CHJWQztjFPkPb3mi8H9gFCrG91JrphJWBRo74RCkazTYc8XK3jiohFu31f8XbpoVzrT",
  "key32": "kXhA7kF9SSzX9Dve1V81JUqc4zC8jYupcNPPgmFVy3b5gk7ZNg8ZGjQz9KySdaNye8qyaJ5dEzLh3NdbDK1PcVG",
  "key33": "63CHiq3eMj5tVxzHjTWpe35EqSjYbnQcG9auETeg7ZmwTABgQY5eBCDqV7AgfcfUoPPXejkcuesbb6dK1g1aReS3",
  "key34": "41Qd2C9dntBHWuYFXDo8PeW2H9K5ruKBEfZGM1kpFQt3rpvFwJfHT3Wf3Aa2ZwpW3ssf2tFqUywgMgfBMiNKGDMh",
  "key35": "4HzEEHrdc9fw3HkbobmSqaKkRqh9trWLk1uPizmgTzTB3k6KCTqU9UkVk8Tn9FRGTFgrmnvPe8Hx5G4tJaVzjPTK",
  "key36": "QerFWpKbDvtqopgRiPkoSo6p4RrhZqH313bh7GVJrV6N1mRvushwdFdcYJweDiVtbSffitdPy311ZaqoJzZkcwT",
  "key37": "4WsiKkNd6HcHmCQp3mmmu7pFgNBNW92iQGNrcvNFRhVBKWmx2tCNrp3brdKJixaQnh7KJ4NY96J81gCE7wSeFiYe",
  "key38": "4XpepmxECShNY25565Tw3dHi6bmJDecTXacDQDo9Dh2KUN5meZjCeVaTJbdgyi1UBt1Bx1iWFGt9r25pcjxeanFz",
  "key39": "5TCjppTaY8Fi87f9q5u8Vupct6EsMqHmgEUBPQ5NzkioFGMNzUFq1whxszWc9J3cmkaZ56b2NbM3VFb6J8SA9LLk",
  "key40": "4Dja6BA1Ns3ZC6qffMKwRhhbdt4GF7RVXXAk9Hm5sDeRBpXpynLrc8xn5jdEUce8qDhq5MD7Qb2bYutEQP2vZcKp",
  "key41": "3jFo1EWDMWSVh6Lc1nmpjoCsH48AvCU38YkzNDNXwCdVDPFuthbo1HaVKB9xkJ1Q2Pqf6DVDcCeXgYpUoNc2NCgR",
  "key42": "2k3CbVLNmSyyq98MrSXXRjg5eNCB2h1Lh9tfRmFFUGgqcMXsTC6vJdFwsATZNBDDtWmjq3uAMnriBmL7D2tRcY4J",
  "key43": "2kcmjeaRakPRxspSDS7yZe3L4pK6JZF7djnGc1Q9Pg1jHe8PeyLx9VFkUNVfunGdnhrj59WuupQgsZJYUmEyhuW8",
  "key44": "2iwDeNvoL5nFftFCcM5SxCyJZLEiQ4zsiYqmLyT1YTDGJ3rJU13v8cMqqXVXwAJEvEqdtiQSUYBJSJ8d6MGj3ndo",
  "key45": "5LxbqM2XzBN9vC3WDy9YB9qZ6vfpKmc3K3np43TCT11qfJE6LcN3ApWgprW9A54mVcxnk29FVqc13y2QkvkpWkKd",
  "key46": "Z6BRc8z5J4HYPSvgVkkGYmM3vX4eX716ABKtvxPuXEL6gAfX79h2HnEssC65YHFyBRzpNeJsgTzbawduwpdo2iZ",
  "key47": "4U4dohKHR6cDCDaeFY4J6obKcn4f1EsLtctynuaWUcJpTxCx2VsPXaDfqaERLSfgx3eMLWNHR8u5jE4Wwd9jsrEZ"
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
