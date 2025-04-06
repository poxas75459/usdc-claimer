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
    "C3LC2aweTTy5ekckXeg8hHhbA288BF4idgqYQMef4iS9XqdXvJpQoLq6qjuLvDNef2Gd8GaFmqxQUZ5seV2LjmR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MUQCjgTWNvTvZ7avVSkSt6Cpp5nLVVDB8BRhvruGxhN6to5GYadYjDLzrKCKqEUTKZxSAYVtBZU1aX4pzA4bdPw",
  "key1": "3ymhR8DuRk42shopSthAc5XoUi4KqdYuLwdhTgY5zXduTQ3EnhH3VsHbSjeC1ZtpM9umVvETrvUryaNNabLH7Fr5",
  "key2": "2eWLQgPxGDLwPVqbBCso8WZAEa5RojvXzAA2jmSy4ure3wvqMnmyGyab1kxNDeZXAFNnnJRxzTuorv6hkZ1zdo6U",
  "key3": "3xxa7jGfGrJHX5dqPhfFgF242znpoQj4zngdffkwCB7zNmptmHSaPpTFAnUwdUAvChpmZTdP4KLM9Ar9NKybeG9D",
  "key4": "25DGuGWs6YjAQsNaJiH6jiFeKVC9qEeLgJ3NxmL3kQyTrv28JWvG8ewAVvKBDUDE35DUvLDbU9k8nKWx76GjKsbm",
  "key5": "2G5KgoU71HWhRUiuhoqZSymf3ee6e6Uji8XAVoTUhnqQV8MmQCRqnGWkLesocH55rNmUMKKdYwXHp6Q1n8HAUxHG",
  "key6": "3LLVSBwGH9WBxTMJb4LjWZv3gZpeztfB6QesKW6JcXwMYJWj6zbczxiDvdnvm1zAiHtjHcQk9G14EnedR2J4Yd4G",
  "key7": "EWfV1gdF5Luya1q23T7ZscJtoBzEiP9nhMesrvgADKhuBeSHtytPPUEchJoYqVd5xKibQiMr69fBP2QPjMG7jCn",
  "key8": "5CsfutD4rjC9EHEqUCQUTcLKfRVkKMbdPHzmCpBeAHTBxNrCMKDv4WWukUUFfpRCvUotRuxmyQzxrQuVwUmbiaPF",
  "key9": "2mSnXJPGnWJXFTeikWDAMA6rvU82dAVsVVm8mBViUcG2sASQFHxwJsfQBPJggdRsmBke7WBicp7i2dXKtJVcUaAC",
  "key10": "3ejsDgaA9b5xFKjDZ7Qj3emENx8Dt9rXtX5fG3RgW82kmEhrkfFc6bjAaZAe6G1JLxR41nBDykCUez1ww54GXu9f",
  "key11": "5bXcnBuHoK4EBKpZ6dJrapnZoPiRjUv8gCMrVzx8sQjZQPn1B6nESVqpb6b3LnVLzsJRyjmEJsFqTmmyE1h2A78d",
  "key12": "5ouBrEKqVJDnHSsZMubT7auGdQJnTEd9KMuGKDUgPsJe6NHBvFvNCH7tK3AG34GswFS6VZpnZrUHCK3zturRYr4k",
  "key13": "4fEQUEtepxSkQvwQPuQ8DSuvQaVuKyb1GWSD1oMGXt9TMFjEChKJoYkwgAjhuraMRyodX7UBEdU8YU9ccrHbmFQY",
  "key14": "2HfZtjZUkuUb7y3WKmbPtyNMoWeMpY56Vehppw28QbZAb84PG2w34Nkik4cbDuaE8S9eybpX1z2UWGVGVMkbtWRd",
  "key15": "BWs5ZrfQ4Zaj897hSxrNFhPffqztJ3tHPzjcjRkw8SREw8FUF1JGGp7oSvSXA1pf9yCnDutz1iF5mFbrSb4G9tq",
  "key16": "4QSmkpApx6JYvySCs4po1EQWYtEucdtnV6iezFM2zL8aeyLFTApntVgQWo82H8s8EBvWbqGGMUkeMn9caGu1UYgq",
  "key17": "3nq46Q5NPcFNZndVPye23n7WCuKxisVJHRQMhbCyhPo4hYsQojHjo5iAowkUn836Up9jxFzYswP4MG77oRFQj3w4",
  "key18": "4HYSDyJNhumouLsth5U6nZKDum9qWwe7kY4ZEbHaSnYAme3vJsrZKhiKiQumPyLqwQxudEgz93FTXS3ndNMxo32X",
  "key19": "329FLYPLiu4HVTryyqZV3WeXLdi3xrTDvRZA7LYdbPmzQqxWhc1SWGTX3NCo1veAGAeAMSBi9Fg9m6stnrUQxycW",
  "key20": "PdWAALTku8AHEeZg5LJLcRrU5ubGcsrFAw7Lorc4J8VxCvCbjKstcnXhxiQGTbkT9DuVdvH25CJaQfKPRCtGhHo",
  "key21": "G6t2VsV9TNajSH3s93tKsfsVzFitSYdG7vgZpYAiBPA5xBcSc4SKr7QYDkmtRq76e8jictvk5jYexpnHjqNknaq",
  "key22": "4MAWtKYgP1jmkFqdQzErBUHgbfD454LXpHm48vRM8uWvYCYABU7MFQoBjqVjLndp9N5zWQqiMf7Fz2cLC7U5hoMT",
  "key23": "24qQRPnHQCQ315zaKJLz1myMiVdGrramgiChAt7gAZjVtwey6tpTMwWh39QFzUJPP3bDForKwsizTipzZuW34jxR",
  "key24": "FgqbDPdd5rB8yvNEmHFRAjxsHtGWMQDqoRyBsQaxTsRu4yHxvP2hKGZojscE2rRdG8hQGzGQmKR9T3C3fgKG8x6",
  "key25": "44WAzVt87C9iWRimzuuqAxvF5L3wK2ZXthAa89vsxzPHqsM9mYsiE9L7m3nVxMCGBSq2tgLbo4n5NKYvCB2WJXHY",
  "key26": "4GseGs9fm1k5FFUWJd62z395osMvHYDMGGTUUjea2jtrEg1mJqo6FDEC3LDDfZC1aW1dg3Zq19p258mRoG8xzQE2",
  "key27": "4Xb6JcoSYsLcUhAUQBDRNfHc4HKyzxiHFNmt18vCdxQStucu1yr7BqrsfVxTqgNtzGgB9yDGhWCRGGRpffvzSVh7",
  "key28": "2QCRS1ndr11fTJeDn1H3jJcBgkCGjLpkn8ZHpd7SwcU6NcEqhDbRoRsX9Qm56BGrZF3CZp4Px29vHjNBiAvqj8bW",
  "key29": "rapGphvEEnxSRrDMKiQt788G23GRK9qnxWx4d5CZ8UpczTLomxgBHib9yxcotEsjj12FK1UVCA8BGUfP9XXkNwR",
  "key30": "3hTqidoyEmTgtHLN68JbXVj4DSQ2AXkjDHwpGvY6cosxWj5ni5VXZFzRt8PErhupXcn7LqEBt2t5FHTZRs9Hsfjr",
  "key31": "5puefhpK3wkCgVpskqZgB2ZAe7cyzK6dP24Yqdoije9zWeYuDFbxLTfZrJGrzt9A6PdH2ZYQNWjDZjAuxFPVKU3v",
  "key32": "36tZiuHWrxC6rL671ma36MTUCJapcGULY49bkNfGzvicKAAPMgZGGyB3cohan3e8WTGUFyv5K7S7MmuGDMeFL668",
  "key33": "2w8AbwzEY4gKELQzdUJTNtRCsiWAHVUrvPJE5339C7nuAJNc4hCDMLtuLc5g3r4Sow5st1SuvvDT6TN1pzt8w6JL",
  "key34": "4nFf17qUsSc4FZWVhkyqfXeNhAUSiXkLsQHzxGVWDXHNyPDft3ZrTksxBxXDhUqD4DJcMS3QvJTeV9yWCAQ6rWno",
  "key35": "G1KwPXKWmqj8iCQniPe3YkqbRyHcfz6P3ERPLfFgWh6q93fL64QRqwTAubVePug7YtqyCbGEuz7FTqQPRVCYzng",
  "key36": "39T9pj8Vs3awVofhhHmVG6A7QtmBeo2Sf8CmJYYU8kPG52PKfnqWKcHZfDsbBeSHXZFV9YQbWme8bqD3DnCCNGfN",
  "key37": "5XXGCKa2K4JngVXdQPV5g3FwwhZQNMMXKQ1PxJJH71inKmGnWBeZWkAHQVqevFFQstWkAhYHckJtVT2PrZ51VQs2",
  "key38": "wtHMuKymjL5Z5bJFDn1TPwLr87dUgfRicbyVsp3biUMH1rCtqp41d5t1cddag6Cnd12Yf645sxqBu9WHmg19KGB",
  "key39": "5TtaT5XrWr4WUkyBuC7RrE2m1UtHZpvHoxCoq1dL3LAzp8rfReNHgrDPryHxtexhyVSX4qTZ3ELsuPtcXgdtQjP1",
  "key40": "5qjmdzhs9xPmPyVTc4YApDimhFh24q7WdjmZ7VLawivYm8CP2qbo7UFQjgWkxVocJkS2oSfa4vXoTqAD8XiPLzGh",
  "key41": "4Mm7AExBrHTExui9Bch4EiYoCkS4V6ybEsFinYCcxfhTQ5swQ4QW8ceC6ZuMrYT1Y7sFGrJQTjmdCVK2ugVufMEX",
  "key42": "5wNJYSnmAbynaJPVmzdCePiAKkXPtKodYN2EVwXoVMha2vzXimQSLZW4g5hNhChsockiFpsUSPRinmTGoE947vw6",
  "key43": "hvdzbwbvmybNs7E5x44ns7r4DsjdG6jSQ1dR9gUA7HV2DXkeJPm3DrGmXdxDmS4LdALkijDGGENE9T3ZbTFuL7E",
  "key44": "4ETVUwVMUn2gR3P8cqSn76CRiPbr26dWeWaH9UYxddnGwtjyaLpNaYRqfhWxZSg4iUee5Ddtn1W9dyVX75MKN1k5",
  "key45": "5eTQabHqYtFWyMK3t6rdcZ3YQg8Q6fcxbLrAA1NsMPPnhfUc9BVZgiqqYKJYc5WqT3Eb7gQdYRDyXG4HNfv7v9r9",
  "key46": "3MGCUZfudHMxCWwF6zpqxvvn4A2udJjjaLK6m7D9rYAaHaronsw7WNqTfSX8qBTjqoK5WKPiXQGDaTRCGRLhY9NK"
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
