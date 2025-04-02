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
    "TDBxDPBTDxgNK727u2sSuSEiT9Bgy3RoR2vY8SjheGayGsryGnAEpkJAUQwK4rf2b9RhE3T91rTD1n38c7nAcpS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BBSuQaWrYRiVDF21N1X2No95xSyS8XnNUEhmSsGhC4puD2usiFnNFfpGMVXQWNJ8LjSP9Me49JxGwrxaohfan2D",
  "key1": "5KDSgMRnsMvQePCHBznKx7jS1EG3pyBpi2rw9TZT73PwY5kTmSQtVVhJGHEUY1kw2ehbj5TsB2N3TvHEtRFcToqB",
  "key2": "4DjNVJR66u42ydZehE7TSdfjRf38imBuH8c1vpuZ5xcT3VuC6Sa34D7j3kSdQBuLA6hLp7em9TvEdWLZBPmrogTM",
  "key3": "5ojLdzmV1ypnC6dNaXr9XgaVLRPS5ZhenowDJsg7V4uVn3QE4BGLfHq1UkmG6ZnrHYa7WmuMrobrShYLpiseExtK",
  "key4": "H86429HuUekt6U63NXC9L4JjkNd2HkgFAjXFTcVxJQrmnUVKAjZqyURrQnn2jqRqs5mJrD282T2GTQEGxTbc3Gi",
  "key5": "21JVo3TtkMFzFU8kxvuqoLF6aKrwvmNjcLTKqHnqTsXYnYme8zi165w58xUJ1sztCVLny9GKSSEAahDMNjzJmPR2",
  "key6": "sBhYyvC6BqNNDbU29pXK2ctdizG6dgLnjdu5NHM4p2J5HJ1hYWK14f41GwSZvcfP2ZPqwR2HKnRCotKbRBKg2hL",
  "key7": "U5EzDMKPLrVFyeGCSaGXYHr6ZWjEiKVJGDmsQ51mCb3Tk36Draw2Lnu7DKAv5tM6HC6N2wvaKAF5dNVVNTJMLbE",
  "key8": "9kjtmvsjaeP9o3SuocF7kYEANCLM2tMA7Ti2jMRhAxVc1CUxHuY2W5o6XHHnZyY1g8dqrZCYSsSpv5tG5KqS4kW",
  "key9": "4194qLe37s3bHTcBskbHdvAtg9YsSceeX6UonRw33iuxqdRpofNVQaX7ZyFxjAFnExudqxPq17QK7FivqgmUoCY1",
  "key10": "2o3deRKdTZEijcL2HhCjeSMHvdRQyfbAueWa3z66JAWhobmwTKKXgfF2nopejHqjR4AF9psMY11yZ87UWDV55FvS",
  "key11": "52z8pgkoeKQEhUwTEqE6XPcd8kqeEd31ryqaVYYWnjbxWcEko1hqqRibdj7QQfZCwTPwzW6wX6QuE8DGAqUXhcau",
  "key12": "65BJpnW6TzsBSQTkojybgdxbLSrDhKEhpSNJcS1kY9ppoid9cmm34U1GLoW1ZJJNBnrbt4P9YWcA8DMgQdjFYYzv",
  "key13": "3Ea1doWdUM4Cqexg4JixKE8gZqQ1kqeedCG6uMepAh1BWbc1zjqPNVUCZ3mbkkzrfp7iGuEAiZouuFfWXrBYNACU",
  "key14": "2kqEGnriwdpr3W49qLvoHrodPz7WK7mUSf1jBu3YUXcDU3mPtFHBeSn3agBHCLxFxXtJHtniCqKUsRhPvoTPzntN",
  "key15": "3EQYntNnzLKqUd6ib9uLJ1uHmDpnEQMwMwTgFDFsxeHzigGk7y2dcKTNUJ1GkMkyJdWSWc1n77iJX29n68QorWrN",
  "key16": "5GfQQQc4tJDFCfCCbknwES1TytSqEFCV97gN7WEEdJPdDsxkh8auKRqjPhkHkGvTNwfTvoYnyNpYigtxnGQgVqFt",
  "key17": "6vi5iMj8UNSN8puLKg3ZvHnku2Dg5cJmEKD17GLBaeWkaho7VqTU5S9arK7e6AmyvtKQwxiv8ZmZjqw8d4J4SY2",
  "key18": "9QdJ5PufJCPfPE4m8L1q3cTbuDGnwa6A4KbeTEn4TjaKfYHQ6sn3Fxwcxa8inEEDAzRjXXTRRgJY4aY7TMw3yzR",
  "key19": "46xktmYyqqXtxzh5Pu334LZiTY65MEqNRihkLgD6meBhnsNe9WNb6HTcbRbC19Ps4EPcLnMoFNqPN3HPAPwK2Hah",
  "key20": "37SoATYNENWjd2g6EDvkEfGZVssjsqcVSUq9vpssuKDMpWWUHSQmHK3aBAiAjryk95roFY5X1CS54cEye4ctaU5V",
  "key21": "3sszvHcjYCg5tp6ZAnuzjX8KkMd5EaZ8J42cQLxkQonkyrP3FqLKnguPsJXovYsfzxYHjo8iE1t7TDTMzkxWe7uC",
  "key22": "4jHEZokCCoH9HSaQrhD7YwqFWx4HnVEejQuh1yXxXFicLXwQ92DvYduzMN8DPhP6yx9nTX97pWJPzBk2THfQ3f1o",
  "key23": "EgRCLpBayPUmkN59wDwZhQMQhqaKKUfwix3bFvqqaMcSYUcL1Tv7sGhFYtHXXkc9NkTG4HtkdZjAZkDEpzLS9G9",
  "key24": "rX5657yHqQGA15WAZP4Ajh53E9Mg6fp4h8bzpdMdoUSP5Wxm7j8rdNM9cc1sJn9kwZkRaXAuf9kiioT2XvLkiLA",
  "key25": "C1SQa41sCUhsXYXPm6GUHzwoYiuc1ZPqtrjnjXBcwv25k1w8YjRHJtgW4UM7JmSfCi3wVWSAmQ3y3n7EZkSQ2Lq",
  "key26": "3F5n3zN8EnqHicLkJE2boAYznGbkzNzuP3hPeN7bR5piDPP5e9dxqs5LMNqcXYTRB6SLDk3t9mDi9tThKTuEfNbw",
  "key27": "2sPMSpgJZQEUFMQvMxYyGECxsGc4RkDJgUqNGxwiCw2P5gjRfA3VmeX1RiK15RbFR8WvhjmPpTCdz1aR1L7Brak9",
  "key28": "2bGDYYpbn2w99PiQ4PCt2Y2b3CjhQAwVzdjoEC2eNgZbcfrGmAL6XJ3ziEfSrwRQqFepbnbqocCJkdbjjGufhnwV",
  "key29": "43CKLixWAccMxoS25qWMjPmWdm7v44yYPU3jW3A5TkrCyYofWDrN6FQLfrT2RnyL6wm8BjPMNsKatEzHP3QPjskS",
  "key30": "3mrgSzcwYqXycbSxaTwSHtjJ61xWeJ7GesikZ7ViuhQGaDkNUDA7D1Yvbo6WmgD9UsDo62UMryH4ty5k1eaw23sU",
  "key31": "5964ZX49ghPnF13onYurh67ppZqtMZggwgtaqnG2cABPkzqnw6X3u72XW9xiqNe8w197qpHdL7CVRr1EmnwP1tWZ"
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
