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
    "4qZzJjfFgsim2bzHcPSKy4pgzNgF91Zx2vouAya3seRqxLd8H1q4Aq1AvF389UH2gMJQEVJXQJ3T87ighHZu5AuD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D32PrKFjEeY2fJ9NE2SZCHvuiCCQ9z6iN5XS7C3x8DGy7P9xVjEaBZuwJYe3iksL5KZphyqaHd7RAkvKsb6cPKF",
  "key1": "3XZw6zkgACojE3i3CJGQo8e7rK5EtsGRnZXVPMLSRTRFpPjZ1eJxGegtsw5qVzFhNQZrZR9EWRLH1x5bH3UhRgjo",
  "key2": "P6F8fhfTk5Q4rL7EASqbbBRtZyTZsufJ4vEgXwQ4yTf49xhW5MhqmTA7HMmWFidcnaHgRDp8PCqRBSjdbA6aJBr",
  "key3": "21LWFKvJ9w1fcDMRtkS3wBEYLHFi2Pkdrzas3oE8bJ1ddLECG2z8YnNU8uXPc3nv4kNgRzJuPaE241vppzpCYVCz",
  "key4": "2hqyXH5VqsFENJXTxQtcQaNDSTsjwHBv5ATuKfDFHhkBf27wz1c7pB3M5nKitoXag2VinjWMAExniZygatNnHJ9k",
  "key5": "5VU4qjSNVsNWtZnfDvhXDfDPjgCETF2UmYv69JT1Z6wvh4eiDCfRbGiHusfb5waSUsiVAK74SzkjxL4Q785m17a7",
  "key6": "2Z2aHK7281C7LV3cES8QoppDBCF6QBkkBrtmyU35xKavTcHnEZtRiK5YvmbKWFa7NAM16FPyBXEiRowT6u7sVnXW",
  "key7": "2vKroeGKC2kTHUXzjRpmYrCytFwSU21bQ4n72X11iTCU3qwUGxDJ6hzoC8ChENdCcEqbEQGnm5F9nRHLyeYmub1W",
  "key8": "23HtsZP1kdaZhaEbgEubaU1cQW5Z6AhrSwUZ2j6iCGNK5Zcat21aaK2NdZKMyGBHXW1X5fuXpkEtHidQPyEN7G4P",
  "key9": "5sPyNBoM73WmxfEqe35oxZxfYcNVkoVy5UE5KyzU9Ng9cFD2E6kNJv75Fv3UsdNHMHdpa3djrT9Ky7ziFo2Wq6PT",
  "key10": "KN7Kj7sPNBDSGL5W9FARodyQSe4Hytk9KE7CZHynUw8D1Z7K2QMeVj3eYadrg96Q43Hj8nTCzf8dbJ68GzYNqXV",
  "key11": "33jrVPaEUcjrrp6Qdn5D4EAe25wCvaqNVU7qBxB9KZUJBenWDg1jRcHqquAnWi4vf1MZ3AVLSovM5ToHuZU3sYES",
  "key12": "iNZFhVWiK2dVHWNeucQ9ndAWUNm1vsmX3tSGj67hD2Y7NxGsgy16WPQHKnuyrXrTCn5LrhjUz6aVttJByuD9dG7",
  "key13": "5xPUtmkVB4x6bbcbwFA8fcVbSZoYqs3RzvKLbRM4ijfQDzeP52PUWJHAjRMWekTRFBXz6pT2cBNtgNPdfun9aVt2",
  "key14": "dzAhXEg6NazsMKou38fEDBjv2Gva4VmBK2RU4K2AbwrpXBMTehm4Jm6k7r9tAD4Vs3E2xYo4mXqZyAJiVpmNuuo",
  "key15": "4etAX95R4FqpqhWmhZkjhvSoeFgeMPk7WagqJN7deMypgg8S9fnwHsiJ3Ari1V4ndthj8wGbqZPdRwtR7qCaQJwP",
  "key16": "8QgQAQ6cgNAH69UziXsZwAUY6t23rsw3YzmATDTetVP8r8cSJBCnmwG2ZMULo2BeoTSR6vAN7R95xuYjWoaMjjW",
  "key17": "67k6u7j4qSJNdQiNJ8FTXoRzuiR4JaxAZEDnjsf38UT4DWaWA1Lqc7cNHfpSP6zfjuvQkPghsAAYzEMbZ3PDrK1",
  "key18": "4xsqoB4Em51QvoCfkc5zqqWBLW9VDmc647jQfozMFPupLu3VESTfXJKeN2KwthmBsADe7DNRuJUmzLEmgXq4S6Mz",
  "key19": "3gRjsWnH3TLbYhDH1reBbCt2HWtwyNqegEApxbsdfwZHoQ6EzWipsCKDurFJjvZLTLQqNrefpqfdT2p3KTticvqn",
  "key20": "5xs6xB8aQe4CvgQLxFad7xyPjKiPLQiaA4EtDDoFAa18LCvQTkJ3g847BJpqnJKf7xUMxDAKFJ4TGiRWWAX6saYw",
  "key21": "5YPtr7Vfp3Hi8GRJhMSfdjp1Bwf5Q1aiGJWtDodJSVJfzvAYm4kE8Q4MqperRswgpa99xAVqb6uWmRpEWXrKXAJV",
  "key22": "2NePzEJNhdJn3jvC2QBGSWD1361J9KbGuk25E9atzxgaeuzn9TCCTNW3Pv7vFymcNaoymHdt1KsbcruyzJyCj1xo",
  "key23": "61wq3N4TUFvwPNtcSQSYoX3UjQTd1yvsGzt4cfxXz8V5AXMHiDX1MHjfphLC6nVU1qT3F9KkAifvT7s73Eft5rxx",
  "key24": "5kMDVxGcFqd4xwDjEc9qgMYPn1J86hQAfGXxcTKxZ8R2zLAKtFgZTHvcE2GQsSmwAXKEo6kZKjbjes63JFYV1BUW",
  "key25": "PsUhKutvQ63kZJZGBAEr8Ac8TUchknx3Jr6yEhYvYkKA5HK1zJZr9Q75HMZxCVUY444ZjwmnTUCbYmmUD1WfoNV",
  "key26": "4qd5KyRJNCjmWYhf8KaFu4MFwmoBYykuHBYHGAvwvCzQe9T9b8pvWhCnYvPPAGAjpW2dNAYPpMDEHonUxWz2DEQ8",
  "key27": "2jsu7AJTNv5YGBQ6vFkVUUkwAhjxkUkUyhELXfgoJRW39kzshBGK73rQtdpjHTkrqkEXTDRhKD97yBy4oePEsYxD"
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
