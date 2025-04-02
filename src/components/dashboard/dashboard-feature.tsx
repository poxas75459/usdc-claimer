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
    "3rDPSdrhMb5DZaXjEoq8Bk6WdpTFtABHsFGGhC93v9SWEAn4HqxAykDGtqkXXeeNR2ykvyUGaAfWJxzCDTGYJ3Jh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xLkaUNQYtNoAouqjoPmue9bYx9Nr88w4wRr3PMykijb8jJ88HurHEN1r5fBRDeNUcY5QSsE8nmqsMqEwZEgGBt7",
  "key1": "4virU9tk5gKDbrUfErP1yEe4dg6e3MHdcdniN28FZtF5QMoYFZFVpQ81mGEfYmJLi9VH5XtH5wnYCsEGDytvFZkh",
  "key2": "dNeSNjcLHL1P6Fm2i7omXyqTrbsXEoTZy2x2zye3t97BVERBfbxeba2Z4drCqw4Lbk68vbBMVF67mPk1SoMW8AT",
  "key3": "62JxfD9jNGKBfUViJLLAjQkZRkfm8vvvuWoxKUrxABgX7bHqyHB6XmTD6BiVK9zupCqQdHuS3pna8si6yKmPPjXx",
  "key4": "33a9KtHEGj3EtbRKJ2tkfNFryZ2H1vZgrnkrvsQY7CioRpiacZcWMCV4cs4KnCC997raLM1peUa89hKDVxfwyvFB",
  "key5": "X8wbTdaANBk4cK8NKMLJKHTjUWEympnFm75auFZ5ZQ6ffwyRhEEitUL4MzyfL96Bmo9UDNHF1zK7k5TdVyR4z7D",
  "key6": "he4zfwDME8J7vB9CwkMsUEoYs7TQdcBwreBs8c9sYtfu3yPntrnKqsP4YL6GTPv54HQGydvBqKxq9hvmtrSXJ7C",
  "key7": "55qpEJwvAYeTqTaaXEWMmGynTTPUjiFFEkXWPzPkeMh95NtqcrmTYmYxVD1a69qGeQBYbUVS41EqjRmbgu9ERW2V",
  "key8": "3fHq8e4qqYWz4Vjugs85tm9oDSLTxeYtzuw1qcp357G7hfU5cc2A16nRfZZ3scQQvJa2LfiXhkzmJNLE5GAFw45X",
  "key9": "mgyXuckAtzhqyiXnL6GpM4GaKt4WgRxF9sgnUESc8mNjNtH52emXKJgi5yE7ZJLY5a58FmLPXDBrpTTcCxmh2z6",
  "key10": "24BsTQHEjvA1iR61wAaXh7Airscqt8eFk7F8jnpMXcjxL7fgMnaUEWtBSowJD8ovPLcQbVPRic75DNjygog5z7pa",
  "key11": "38ApNJGuMiAV6bCL87Vx2tBBuKepbrzynF6QDwWJy2ss1PAiyxgTtts5VhKkDoMab2DCzZe3HUGDemEGywYKu7gL",
  "key12": "QHCmVcGnTNgUqBvuuPK515Ph7hnY1UdqWSKu35kthE14T7tUmbYSeH72mN9tRcqoYnrcFJgGVE3YGFA1nHtg9ZK",
  "key13": "7tzemKszomUSD3ucwYZ5A5ae1awEaxxu39SP7rKeezUcMvr76DpR4Xw6EDZM6HszKa4Nty7AfnyKcrvQaMhsCWK",
  "key14": "3Wj1yomwoJmhsttQ2dH86FV4gaze6SKc8jnWLswyrmuurfhBt1thLfxMnqEe3gJHK4xZNicrRCGdhjsronCC2FPS",
  "key15": "RhnfWpkzaT62JKsHHHyJdUNLarFZ3TGb89HNYAypf7DivXjuDsuWEPyQ5NCdiHd3EYNQnbEfEDUcZHVThuiqHvX",
  "key16": "5eQjfepJ71dcEsCJvvtojpJpc3JHt86S2X1hMSLHfS3h7q6Y9M9K9Z8gQSFg6vVwHXG813iZqhpXAMkoEWU47D4n",
  "key17": "25hXFD736MnfD7c4JRUz2tmFNpdAQEuV6NA95aZDTmjDYaTdVMqvgSNdPe5RysT4n5RNsA7mHZSmxA8cGCdEpNMm",
  "key18": "3E8QBU9bFh4sQTVdT1RQDCPmHJTQcQgUo4rwgxG9NNC1HwVHmdaNq2JXptAq9y6RG5enPgB7NcSDEUdgDje9L793",
  "key19": "xpAUcbhiDeNQtx1jrBjo5exet3Y5mzGTLTcbjBYBS8S1E1swB5SoDFn1LNxuVK6MrYTp7SfanJCJLTAfeeD5T5z",
  "key20": "3Xk9jaNsxXszNCoCaDcKiauseRKVxUompRzS7mPm2wEDk1bDTWmfzCo1R2WBs3Y5wJuHw363xqj9hFedBEsF6jDv",
  "key21": "29oA5cypqHMWKFZYPQXNCu4zJhewthVogkvukrPC6nLK3kYKXQaaLwE4E7QUEjdhT5KaD1YAjgyJZXCpiDtLBPBh",
  "key22": "5KQBi2JE35oGuqsVZBkxzQqoWhsMN5UovrtbvbcFvH8znU9S32H6jRsfCQzeq89uWFq4JFFexwjWV3zc2o2bKm3E",
  "key23": "2Ror5CStDbtnLQJHdbvbxPzRZBwW9aSqBTz827yAGbXjS7kV8zq8vry4nbzMgYvUnnKZgYy2Q2PE9UWH9Ut2pgHM",
  "key24": "5PCxkNpYvzPf5iJhVM2R9uUBrwUV5RnLw4RNn4R7LzL3htrdYGwSZJQbFeQ5stmjxnDGMEGEuUiQv6riyKvpF1VH",
  "key25": "5FuLGoEgMvjcNy2h7CH4ftBX72WoXsojtNTqz9jod7GCnZLNrDr2MWcyYPZP64rz7fgorkxU5Rj74pqVs5HLuLJp",
  "key26": "RzXKnWhhVTeHfyAqaw39hy3pcMp6PwiLpHofLCirskMGdiGpk8T82gPDPZZJoE1BnkFSjWfER7GSDnvgBrG9upv"
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
