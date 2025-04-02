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
    "3DLtMZ6rUqb1ikUpwnedTHAgA3v7yCHkiHdnhMRkeGzp3wpqnjA8dk44FL5hTZcE8LKcvGm9M8GjA8aPLymytW6J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rEQ3sNEzdb3iFg5rV7mUfKrB5pwLkdPBLcLmJwQHMGqXHi1ZWLzWhTmPgdPa2jeaSo8f1F4Te1yzPq8sZAwNcZs",
  "key1": "3x5wWF8ERd21YXVmSVf3CDgqZwxLqQ4fJVJ98XHaaWKq9HzStV91wN5N7zAvBumscJgVq3hXGKY9rXag7jwAnBmz",
  "key2": "ch8RCEJyd7BA5C12uo541yaTiwvzFqqZbKkdjzngQyeNyGSf5CCrt8xAfpashYoLxwiYsMXoULAhbGRwnr5y9QZ",
  "key3": "4TXBifr7XGYoq7u4tm12o7cVMNdqHzJhT3EdWtRNEoXirKHRe9xr3v6kfqhMB5NTzsU4v2Dos6F2TQkFq7g2JB2r",
  "key4": "352hR2H9SNnUxxTwZxGUvMAEAVH1hf8A4uz37xVzyAnt16Q1WoHSp7QJkM5WwfFiKozvRcZhSKQry7hRjV4wTkkF",
  "key5": "2z6amgMjoiBsy835oQQjcTrUonErhkZrT5S8Uw7Vf4pvzR64ARimhz26ja9wrRSmHUbfQ7g3oGekTBxxmtL2u7tT",
  "key6": "EvzTW64F4s2AKwWfQDSYDu5AbJK3ppQcUBdurvTsVM3eFh58wx7VfX5zi7RZYXLT1pqetSs9PhtNDdBakJZaoXG",
  "key7": "5nnCydTSLx6148VajTLw7ikAKDNk9y8JEJA2TxZLXAjGKfAGkNwsDSS78kBM7wZ4pJhyrJdx9bManFVnMJgbR8vS",
  "key8": "5MjFTaPwgRJK3MFWRouD2YWy2E1R62vrmP7CWCirYBrdw3TXYVGygA88h4i4TwJ49g52hKjMz18U7nLXN79UKHkV",
  "key9": "5qov7amtXyW8sTuun5mNTCApMWG348qVvkuDXTEH8P2YL8XZHTBcDRmiLLFEjX8zwsrRDsqYdGggexCCkvzhWY1P",
  "key10": "FcdsE3t32cMkxW2n28iaDcsiRhv8BUnrpmNRM12nuEhPFLNnKc3UH2ctRLHJCxUjqmQ3csqvS5K5vPJH7zs6RD7",
  "key11": "4iGF1cZAF646jskcfrFeH9F6V6EuEUzGsuYfMjSfrPRADwhbfayNJyvdFM3CTMQR5f84fhb1XsZZMmJX7uRgSsAb",
  "key12": "5jbP8NWpdi83DsizA8mYkjczk6GGhWEV2RvAoP4tNkzD3LbkNLKAEfmo1DEF2sYAPniXHMPkF5pxZopazxqGYpvY",
  "key13": "51DtLSKGBoECpAfhm7K2wQqZPJ7u3sX59FeKkFUgZz5eqN3gJd3n2bTyKKoxrvLxR7GbHQPmSA4gVx2EQURMtn5Q",
  "key14": "2sSniFv9627jBrgG4AJWSRwwWhaxkzSFRfxeSgL2ZuokKkHxGvd8zTixQne1jRbUVxezTxFLjYQY5i8PgGGU4CDs",
  "key15": "5HhWkzfzEySNMhR9whVEGzNcySd9WEUf5xdFbYv9enjDYLjrvjPHkFZZnzmBmZDNVxdiDJFxEiEa4YyCZPnQ5M5T",
  "key16": "5EUPbeP1h73txP1bpARGDy12hb4ArdWv7B4tj33nBF4odx3nQPV5tWYDZxRihitvcWikvquGyRBHYQLwrqNkmWpJ",
  "key17": "613gYf7aHch6AtmitKJ9iVHxxLk1MXmZS4E2cbG7HLxx8skzkuU8iJpBwWQn4w1TK14BntBEA3tykyr9SJHsW52w",
  "key18": "3BryUaAUjeDXxU8tdoNrR5HGd2RFvVTJ79uKC4FCxbWVAuctdh6kjUpRR5cKEE6gbPMc7jfzT3fb27vdRUu1XcW6",
  "key19": "CULae5ri9QdA4uXWxF4HN4aYVgRm8VSWJ3G1LAwWGyNqorff6hWMTmGmZmn3B2mGJN2cQ8vhLSCQ5AaJcJPhXbD",
  "key20": "5o1YHBxjeKNTmTYmCkUCtDsLhXpCJ4LkJKMex425GVpcWZUGrB1a5T2yewMZvPnQJo2e7oezwm9VgN6jh4gwcNbj",
  "key21": "27GvWcJBZW2qUB7mtdKtPa7Vp9X6vBmGyrDYA1GKEmq7kqgSaFj3XaakJ2euJJF6ZJGN2q4zDLzPfwgMBD5NbpcB",
  "key22": "2PQsyMm5HGMBdnTAa5Ca9HYHvHH9SAoXyLVuvsAQbGM9EeZWWZyARfeqwdorvHZjcg4wuKQmDTbo8RPis5fJjy9T",
  "key23": "5dfX2ZN2tpHgjstxiZpSZZ7DcXtgC999DXwHM4dWze2qbre7UuRJZm6yp98A7dKq64m5o4uz7faxboBiTnqMGWei",
  "key24": "5yqprZq2Wpr8UuAPJKK1AkuoEqbx8LCBaQzeqdgFpFQAFu2TwBFW3FxC34QxSsimihuvkq5xDJ8PvuroadyzDoXK",
  "key25": "43NWFyvpAbsNqgfRKXRTGwva45eTTcnhR19oVdXCbvCabiW3UzLoo8k8EAkdQpKbyypkafwmYsHeUgWCfPAg2VWd",
  "key26": "2i9VsheErizJP9YdN9x7EFnZ54vM2C5new8Sh5XbKJcCetHkyXkUdLpJosSzB8wE2CTCFFpnrZNTczqzXHnxqSEJ",
  "key27": "4fDVkA3bc1QoBmNGojUvrEeA9DnyXZJn4cagaB3fWvuXYdgc1i4R3ngkzG7sXRpydQA6jkSQ9UVXYrvRFavjffdT",
  "key28": "2zbCKXm7zoap3Fwu1Wqhrsuo51kaMDDAqEzDz1jMwvBUDgfKxQJLgvofF6NjWRjtFgWjsMbKgA1aGK25rjfPuyXf",
  "key29": "4hyk9Sky2s9c2E1hoMHkK8qwZWTuzzyZEGwkyaUD3cKErg6ZiaEfVvb1XpKZuKorBHjqGCovNPEGER42qL4MvrXK",
  "key30": "2iEKLP7hkJAxq14jiYvQ9vp1zHXzE67aTK9RsABKYJRJjyc4kgScdiAPrqcJUgeKGo5YSxmp5dsJ99ioGMTxGstD"
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
