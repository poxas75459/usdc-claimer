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
    "5k18jKS7Txza7TXbpCmQSVRAzN1hNrEvR621FWohZHdCZ38kfTsakBuVMF7mew15q9NM2Xn7jnh225jGQjbi6pBN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ibent5PjqkG4PGM1gEKMaHk5MbEHwBj5fiqM1DyXN4KcYJa6XfnJQjMTMNVj5Q47sKcaVGEfU6wVop384Q6knq",
  "key1": "4mL8CcsRmwSfqyVKEBp3yMb4PT1WURk4vVNLdtU6ZDwHUXnEZKogMcekZLAm4bEaDQ843sBdihXmaKe2bxHBkxM4",
  "key2": "DosnJm24v272jYhpQHz2ZQ2Gt6e7xxa7nN5mPqi98DZV4FJ36zmAd9vAxjJPYrDBYR4GUfrEWTaj6T8gaeKRzqs",
  "key3": "33uzy4irS3xFdWneW1ayyozQRsgic9GFJ8w3eSxks4mqeVok1SHNLhkpmhbX7uWS9cfF9vucSPh5mYb6G1bfFT52",
  "key4": "5ET5b1nH8Vu2KvsAYHmPtXjztsyDHEh6yujiQyV5qVHbGNpySzaNp6egHEM4b9zUWHXPt4yaGW4g7skikYbegXCi",
  "key5": "5ZCGp7wZJqkU9n93NsrXg8DjgJ4WTXvKBpihGn9JwQ1qauCFi4m6B651Rm9ZjpQsdY2q4n7ae2Ai7HcUqmL3NKD1",
  "key6": "Shzq4A2VcmBBy5fNbEz48mUbRs8HNQZtiMDAtcuNyXtGgvwreL4N5nxVPj9zhgxzJTubmeSMhS7vQvZJPjZgJig",
  "key7": "4BMVtmktE4AkSq9zU4rJfpzBymhXQqdqHpbH5UxGs2LoC8bDR6VjvcA2cTWCKWFeit5dQ7RrPTpA947kmfNHuGt8",
  "key8": "2hP97TeDy14JQwcEHqBBbPWNSCvVamqPDPXwUY4qZnqTPxYhGPr9uCfNtCJsBdPmSywKAJhAGQi4tVidk4ynBFeB",
  "key9": "62cbkbK2EpmUkXhUVQZqWVV8HhsiGmSHe2hcZM1cVXZ9zFwZdt5gc1WEPRMGBomxWKBjmrKF7FN9Z4BfKKnNHhaq",
  "key10": "44BxSqAtMNVvARge4t6EaK65S9egvGhDYdwveSfiKeg5eSoPAPWSwG9rn8qXUJZzPgCKmU8aPiuK5goRZhzb8bcV",
  "key11": "4pMTdQ2snfGppbKTzjvtmdWryxmRKiyUVkWEM9P2kfQvoTubNGrkQSWMzFzEYgFnx9QSeYJwm145rrt9zNSMjXTG",
  "key12": "4ax7kQZ5FHUCVGeVvhyHaKm88pAc53dCrJEEgVmTop5ecn838JMMrp6Nr6rmWztemBzq3ghrm9ZYT6P2z45VBhYu",
  "key13": "44Ahwh8GYorKUjsgLRBdNueQg6PUvDsYfn1VuELfGGLBLLqgRYzm5c6u4D6xcV1kUnSU1ZbZHHgyEsN1obH3Ms5y",
  "key14": "2zRYRT9vuzd4BgtRY7FhC5sV7CPH5qTKkoZe5a3Uo5WEcoP52tboTrDncJYD5FDJqg2y6ee3efWKxYbNoEzdk1Zj",
  "key15": "Mnd6gfUyd8LRb7NgAZH81eV8XE5snkPpuh4uDf4HmHsLp8TFc7mWeMzxQu73swvVoCNdBzQn6nHAjxRPD5o1bzi",
  "key16": "VkJm5adMcKZPMVbQVgGivT37NatYLYTY8vAPeP7NFRjuoZSfAwyE6mhQ7kUZ77vgEEFBfMzM6AyMcqDjxNtBqMX",
  "key17": "5sg2u5PdUvs63NDxK7idC14Nisty3bVj2HyTxNhf28po8iwbBtoj9uwPwCML1S8S2KmWjkBd9vearyoFx94x1BYH",
  "key18": "4oEb3vC8aYfmxrB2E57z9zp8eqa6UkVEx74VFmhQWGn7GtgvKn8uqDfPYKNjdThvM8Eq4Ti7e5MARYUG46x5GrEG",
  "key19": "3kQSh7D75BucuyJnihpdVd8zmG4eoMW9Dnfc9WgsYWq4A7yoy1gjS6qS4ixEuxEdctGx5HV9abiECyTAf2yreEiB",
  "key20": "57VSvJ9n8JSNP3WYpf5WoHzxGNUgXrQBreDY7aZgpK6bicyC3ePxcZhAuYfR1tKRwvJ94wmLrwBeAm8KQpVWrXb9",
  "key21": "2sivKypeGcqVbGMFKWc5EWGXUe8k9con6xK6WVwkiJYcrGcQZEipBqgDGWusfdYbymUfScNNQ2uqWaHhm78Kd8wi",
  "key22": "2PXUwnFiKVHQ8tGfuy8udX5gAzebWDGPsxTMtjcG3W9dh5xVKccjRCNiroju2PDNtKpaVg2HkPBBKNSaEZz846Tu",
  "key23": "3aKJ5N1fWQRt9mGJfmJ8NHi1fZsX1ghosNzTZkRbH4pypaZEXDxDf2UehsVsTCVXSQJbmrEWS54JJF5wajbQsZRU",
  "key24": "DcpggWGharQcuJjrCj3rB6FYKfRi9d8xRRHdoNmXmQRgxJm6CZZkXrJWY59d369gBQGSfAuRoTpiTdAmz8jf1FU",
  "key25": "29cMpT4yRyNtzMYZRqWd5GJprqrFAgugdyx2hAwDmsmt27APhCNkCb1JH6oUmpfr2r3hjfSzUDCd6zJ2bu3S8jAg",
  "key26": "vp7sRxpWgSnhprg6yoKWu753zTVxKDrKqAKV2WxtJKZhaCB3RKvqa1jyQwhtKX4wnxsTYA7jxv9z3cpUYHnQmkh",
  "key27": "nW8p1J7ojMwKnThxmHXb7uv1QJHHfNETVTVh5fVkxe7vfLyRJ2tVwSd3AT6Z6eCDXVUB1Q6DtfMEJMFTKsoCdd6",
  "key28": "3f2a2ehXunBkxBVyo65Xrw4EyiGGC6URGDprwgN5tTuAsL3hR9BWhsrufZn31UJPmoFhHaj5kZtfY2icTd9RjLvo"
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
