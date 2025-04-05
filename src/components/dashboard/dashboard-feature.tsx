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
    "329nTzPgX92FKjcZNQ4qFeti3NawFsg78DBHGtdkfge4hpopgMzsqu7JsgtkqsLzsRvdZeczGs2UJtgwCMo8Go9y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "498vEd8Ez1bCZrFN7LMxEzLBHV2nHnDwVZTEhAZhpcx5xCZ7dLfxQrLEk6LJWqvjAqLS1bSVHDDmZoviaYWCZt7T",
  "key1": "2Nu1dQHUNYUJuaN3DbDhvbwc6hp6kmTpPurt1PuMMBoxNyaH4uS9Sbd4aXQKXojy1APU1ZLVguy3UprdthGswtne",
  "key2": "5dCW1gjfqo7xCfd46G9NQErvQzBwkQBbV1McHWsTpemMLLNL6zqc1n2AkjKzuG9odjeyogKgA1niZ7Ni3w1YFXjj",
  "key3": "2pzDRucajVFGhfRB5g9qxxuijfXtVB4jKX496GePJC9hDC5SpRUcgwFAaNwjVambNWD1V8riyqzNVVKQpwvSFBr7",
  "key4": "2t5xo1uGpraKaqUWTVaaD4xYJ43FvsEGDBvJKXGp2A76Wam44Gfcq9CpVNgAxmz89zXUwqW1KtVRnJ64fkAdYrtC",
  "key5": "5tCLHpPsd6MLY6PzvYdWBegcvWi1JX94fWBwYiyddici1bmXQkGef9jMNpbUGjP881vkFjqxmtm6EfoiYtSDL4Ct",
  "key6": "2v82yRmcs2QkdsDaB63cYe7WM9vEnMRh7B3QHHRN9p1FnEGqZczfSAJrZKp2paHJrLBpeEeJZyvQKEjjQK5B8zgW",
  "key7": "32PZwx8FbRce4TVGpYVtZHZByVUSKJYwErnmwP21kgX7ParSEoSCNDZtLMKeomc26ArbqMGCas3bXM2rTbEc4A4C",
  "key8": "4RHSsKNHETDpvNivvQLHjG9Mx2n7uQGLQDp9ZdxrJTQWtsKvnMqGjrwEgXoz6YZZrMPgzJ1nDLG5DEHVgniN6gBz",
  "key9": "7sQMkygAf8a21tcofWRqxpraVnup6Ysg6SUnHz7ZtXCkB64T9e2drsQqdDWABC3fYLRjsW4ZRR72C1uUAjGuAPj",
  "key10": "2z33EAF3ifKFAwTHYbBzDs6eTWH2ywYLKDWyF3gB8QKCdy5eHU8F7aTPTZm6pTB8UHxRVapCcXjtF2vU3q86HMkJ",
  "key11": "2ShY6owjSSLafcS4XSM6JcmJVNABJ3KigsVkUP9pnxTxMAdc7F81En9kHPRhQDtd9djiXctm8UtE9SAQn95eeAfj",
  "key12": "2AK9sgP52Ag8V5iCJN6s6DntXKWJXvidZ5WVhxKK3Wimz4RL1nmtr3Wzek1cSduJS6uuD5RdUtWKkQA3QYUGSSaY",
  "key13": "5NhcoR6sZHFmZMG3eES52iNoFMHkqkLdsY2z4wrBbXGSUUevh25TAjR3cfaK4Tqnw6MgpbPg8kNziEjw4bdp6zze",
  "key14": "4jDeZQ9swp5vaK5JGUEABhSA6RE5VUBRN8AvPVXHzyHcDmugwHZHj5nzRXyogqCksnWYS3PdpzbNPC75cUX4ba9L",
  "key15": "3vBRhLSpm8GGE7mQPbm1LLyN4crR97zR2oLTr9or6KpSt9CxKpRdoC2DgFt7vWaXFqeHZDqYEeKnSBn8LjdQPDye",
  "key16": "4svB7ASRhvzVs9AA5VauVnEjvJJ1ubXUsRH8Bd5JE59sXSDTvxyJm39xacqPtAaAjLyw5oDAbVcQvyqt3p7qQpod",
  "key17": "5rC5b35Fzb2yXWX7by4TPtppH6fQz3aLC3pcBG9qsQxu3bYwswFv7nyYptAPwfdwJZXUiLbaD63wMZc3wHNAF9ig",
  "key18": "4Y8DW2fJqGcbRj11TMKKfVKLTeYqzUktzFLCQ65gmrffgXsGRoVaxYC9fs2f3HbnTZuKEr6FBd1CXghhmv4ZZFGh",
  "key19": "4gRYg4ti2afSUsy4TRg2yiByRkYbEwoJdvahAEWtiqjSTFX8GtfZ7RgLUNN3idvB8hwBun61v5ZXmNYYAwHNEeE9",
  "key20": "4Xqoav6cKwjYk2bE8qJCCMCuXqNpaQivszUnEAaFqrANpmS31dC2VrDMmK1WyZucLh7ZSdBaeK2KyMeZWqwDFhGH",
  "key21": "2uS5DcDKumY2C4oZSBbkrzV9ocdRckHZ8qXnJBqqvcPEgzWgG7oGc8cGmfVRZvkKJKTdFHsrVzY9cdHj1QBLgkJi",
  "key22": "5JJo2GbtxWyMKteAuRZCCWwyCpkdM8y7z7yx8WnpGmmR3Gkjx7KSTJX56N5MbxPBAuLZNiAFkZoaryHq1rnedQ4T",
  "key23": "3CweHaCD1JdhgT7uGwZxavjDeM7MyfM6G5QsRwX34SnGLZUX4Wj3JigEVkAbktjsyF7M3hpNXLyQhbSBm7HYCbzY",
  "key24": "24P8fUHnwUG3tD8JU8hxaJ6jUE4Aq5kyQWWY6i4s8UuFMr4DgDkLv3GzsmeKrFraQDkNLVUdBoKFnMXDkpisfScc",
  "key25": "3KTuqxHaxEKX1d4xQYQuDc4RqaD5tZPaj2gVrZJajijzq6zZJYwRpsLdQ7Lk6h4sWCRRYwfnEjQqZqeBGwwKHGzu",
  "key26": "2CyXiqwLGDUiHpjWz3jL7drAJ9oPWBhKzsEx8mFZYNQku6z56jQxVf9Rw1VfGKKzesQKJGsfqFLQEjaxe93Mqjhq",
  "key27": "5TcKKcxirwURXHQZjzP4ZY3f5jd1GngkTbf7mnvGfCyoatDknsasbxjHthEgBAmmt4QoyCiAUp4BFcBtvby6Std7",
  "key28": "5BeBdNdKAfgjhGpnszD2812kBm1rEhFxAuuWGGtMfgkikg3vUbEmdcTLozLrzVYvg4UPPbEdXVMbhX4TJt1E7T5b",
  "key29": "3mjkDYeiFcBuDDDrG1mJmyBxmZSp1t2FxqyJo38MRrJKTBB8WE9KD2yLeUYVo1aHQYaBeeYe4qHk7oPxFPib3MSH",
  "key30": "r65syNpEUZMe4R1YgFh7GMKLe2RUNBqz6D2KgPxUhxUgWVJWfP45jjB3erGuVYAZoNP3FL5Ei3m9f9oa4ZJkhY4",
  "key31": "2WD9fdse1kznfPk1wyC8xzGQepY2KN7EV8SPKEaEYKxSSi93gSYHb1NDGSKSzHPAcitVGQ7RHCQHSn7KNW3P6gRS",
  "key32": "5F7CiyzVwGWnZQJwipRVAqG1wbgSn8vd8jAN2girC9FFCTZhbAATeaqwJi69zyoe1xjaTJdjteUdB4U5iVg3uGRv",
  "key33": "3qPJbL4KDANKknEkezBVojbyMPMcZtz86zvRmAd2SjZwEiWePjK5k71qMSEHbFeE8NB2baRfmVNHRtiHEwkv1ctt",
  "key34": "22dnUF7M4peMNFn7tk7jZmqtfzd9JtsAhiNbreNW5HkCGGhpqQgdXUo34DthqJvmrz96zRpTamKGBgkoxSfq4fVr",
  "key35": "3KxttwYHmMZVtEhVfGKC95YwamTkTdrKyC8XwoNAb735B3XrfLZZXLJbbaqPajVmjjK8bBAETRuj3jX7tYvyxvdn",
  "key36": "38eonwZm27iGwqquSv6ZagkDKgsqt7qqCyQgvvk1LPv5ZwZp8xLyAAgRuUEVu1DcsTMsKZVnjftQAUx7uSswc2A4",
  "key37": "3vjmEYCo2ba1Scyas5sA7jXJR3zWuBsGXwhGnFfrRGD3NtcK7H2sbmWiUY2JRGYyV4A9Hi6JRvC74TdWNaRQoUFX",
  "key38": "5EPEersnUi7RkYvbCgUpjLkV8m1JKfbdCsTWEZkdY6jaB6usF8iwUDhV8m3NGUX4HoYf437TTAP7Z7HE9fQwo3CF"
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
