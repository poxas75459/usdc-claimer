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
    "UL7M6WVYiiTToADSJ76UjS7EHUSWQJy7UACj8ksZzyca7jUQCnUzV8AvMTN29VU73HVfX3s9PjQFNmCuiQsC56c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AmhAAqMiA5s49zS1FJ1J1suK4vM7SBDHCN4rvAEeCD2Yg9vMEhcKZkTwU3jCRQfctaqDYQubsJzaEBm8WhWPhEK",
  "key1": "nBQot7sqScoHW4Ki8RGNV83fuBvTuhrtSupwv1VXCuvnq86mRACBydRRTupeBUjMJ4WghSJ2TdKa4DxM5XS6Nxo",
  "key2": "64Kxb9JeJHfr1i4ihqBJryGuFxdYzputFDm6mTRUuwjwUd2CWTMdPB8NFRNCKu7cd1EtCPuQ3JaMeNawUTn5tCYZ",
  "key3": "2S1gViJBi4oPUgzxizJcJ3uMWQqux4eSw8kmvTneM7hx2JjD9TpshrrHgH97TEvmhDgYmPVWcmGqk9aiThjWeUnf",
  "key4": "5CK2HYfKdbECLfkChoehFFJe5unJqjzW6sHaDoxvsMqKrRxSzJ8ufdNbEtvEADA239oQRjSSrRrrYvMcjGYrHULo",
  "key5": "4WnGiYiwp3c92fURohLX9Bg68Y9oivSXdzyqZBT2kGCs8mThXWFy4x55iu7DHerjv6BWzYwgcRE9WWkm6LQDuYTH",
  "key6": "5qrDESjcRfKd3iwhEFXLcMnDQwZ3CufN9mKXp4oF1rUqBKwZaw1JyjpGqGX8ARG6QxP8aDPAPTvjwVxSF7zjHB3K",
  "key7": "3A4genHf8bygdQAeDKtZagjDDEQffiSZRUAo7nxfrR9z9kjnQ8Wa8F8hG3d8dp5uqMziUJ2KoTo9dBeJ6xKHgVYQ",
  "key8": "3W9xcGZ4gSAS5VUQHk44CA682ovZ3XbKeY2tN8BLbKXnEtJfyEiYCS2xjsgPBz7xAQLALmmcLmxitWeyYh9jebz5",
  "key9": "ALuBsgv7qs9zWEwS4PA5fVvoHhxqjT8vi1HCQ35g1buSzue3LZiNRRKmyCDaNYKmQxB2KwU2iAxvTXZXYCTtCpi",
  "key10": "5BCu44Q29jrgdNsyzFEv45ewH1fRZgmjnMZAurhbKrMFHHQvTSd8Z4P2cXKMZjcp6GjApdDy36oKPgWyTzVZ7Akq",
  "key11": "5bjc5Kopy8roKnL8Y6dg2xKp6i5qokGgWFuqB2vyovbGWUgXh47mceny8vpG4TA12P8QBYnAC6fi3Pv5qD1Pnc4a",
  "key12": "4jmufd1EemJEMBVQtxuRQ2UfK92RPyEAmfUR9HvU24DTmcDkg3xDG3U6oyHHsUXM26dZ7698BVqyXq6iaaBDoCEG",
  "key13": "3TQQd6BzQeoFGFRQFz4XtoQpFAy5XLMdAWDf5ksKHwujwpu5cuBeci8gYR1aN2zfabsttv7cmUGn78UqzPwLrvRS",
  "key14": "4W7m2dgBZFdVyHFrCkofJSF7c93M23NNBj7L7jKC75kjgGXmNHUKQRakvCUKEsyvzAzHxB26JCMUkNa633Ucgahr",
  "key15": "4EkuwnNBXsHqLvwG6yfFrS7u7MjabjNJbVN1NVLUH15eSExRcp5sQx9Y6HitnCCm6A6QPmg9SzmTJKN5M6mKffc4",
  "key16": "VP5QhqYGEC7XvjUxks6aD3EdAvzhXhkjCaFFJujxPMbhsNuD6RxxQeLTWoAH68F7hLWkcrmaLP2UrXLHa6p2oKE",
  "key17": "3NW9NKnkXpuL8HSS9DpyxJDYiPC3sPJTtTcqicXhZFQmKV4f3iMapq67WRrDbergCR7zjpSbCDALFQu15Rfhnorg",
  "key18": "3XVz7aEC9oz2796i2QSuyDfLAKt54QSX9qyzHKN8iPkQjedmkE3nAf6F7FAX9yE9vZrqp4bNFMfXzPXc6MgrsUas",
  "key19": "61Des7ST2f1yLJYshYMHDn1E6EKm9LAzZcSTecptbpsHYvRejeVjNKek16w25xiBrHFcVfWTcX5ConQEHDhBLkgR",
  "key20": "5cBZzyqsbY8FWQsoRrQG34N5YKtfV4kqvSbaLZbfEFqWstVbpqCf7tPa3GGu1sERjf66TP1oQ2LkCAjN2mX7GDwF",
  "key21": "5dV5i7zaoZFDkNJgcAfC8ET6nAhqt51NggKTHZnptJ2o79G5Mbj96qDBX3rfqBWbXTKwmS2f8whKCMGyofcfhRrU",
  "key22": "4WYHUKXkgjmJanxa6H3zNFTqmebMgmugzfS8dNgxbmDF398WqwPj7V5ihipjCWCEhxo8GuX833bNrdAK2wj9KHQk",
  "key23": "5GA9BB32zy7DDY5S6uKxPNqi6PYbAvAWcK6mJaRqWJM4mJhaBvFyySyKUexig6rnY8cFUazafJ5oHi8x5Wn8FHhw",
  "key24": "4oYKBqrK8aZDf9VqXKjdjmahUWbUoFEQbCqas6VRXDhBJeLGnkUafWFYjBWhjbDsF9BGC3odEL9PUqmdoab13QWr",
  "key25": "5Be4yDfqZyyUGwcnGHH2Nv7YsHHaRFLRCgUquqAG3fDMbZCZNEU91VnYJc1PAcXKTvRWV4qpTmu4rCAPjxAaTGn",
  "key26": "3wcdTAaoz29kC8R27pGKHmK9N3GD3q7TX4wBFn1Kjv6dwreQ1L4TZZRC9cwQLf5xisbrT6MbJsep83VgJLt65sTP",
  "key27": "2FKY1CPmYMD6md3sKCiUv4o9KsiCer5mSnn52tvKNdWgSYUsgEFgKSN3mdhnSGJrx5jLTtqa85autYFu2XD7MA1p",
  "key28": "2i8V6WRMyRNHUts2P5haAjVtLUqFYJ6LJLWfyQbmsfySuDXioktrZjnRKJtr7wbnzq8H9eKm1xCW1FhRPkLi8Qcj",
  "key29": "5thLghcksMYWgBwwvLxd9w9WNejxTtnETfebUzhQxnYWg6x8sLLZagFnk4reJzKhBCzQpFm9SaD5AZ4Yk3P68SLX",
  "key30": "5NyWbfEu19PAXNdD4ofu3p3cbPcwjbsnFM5ncbCpKmd5f2SB48QNdQUuLno7KqBdqR5hz51jsxz6ebQEZbeP2kcr",
  "key31": "3tBk4q5kbX2snEsXTUT38GGwvQr2kkemearknedD27QzsP9kA5nvhJN5MpgwAseqZZqqZ4gov1Cip6V8xuFgXJPm"
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
