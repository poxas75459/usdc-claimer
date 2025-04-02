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
    "2MpzqWYgz9JCzCKkrpmQjcbAjBToDaS4yrBU4B6xWjoqF8D9CfxCEi84t6HnnjM23dABtW3mpbS3aJvZT82TPTQw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kDk3TGUDxCCR8W2f8MmnJFe9sRQDdhEnNxAYRDSG3BmmNcnRQzafCDRuo3JyyVVTFRLH3K4LUxyhxp81R276k69",
  "key1": "3wywdHoqLd42sSiCTcnAPZ5D7K6aZkZ8Hs2Pf7WEEmKTdFoN8cSXP4Er5XczYM7y7eVoTTa8MThs3aKnA5XjxD2Q",
  "key2": "3vp14BSuDqHbuMaghZe1d6Q2JpuZh5e4jq9PNSzumjprW4tWNEueub5DAXXhFz9ww4TABK6nwFbMqmzNFihgxRc8",
  "key3": "r1PTeJCzNmsx8fCt65yg7i55ZevTm88zqS5sW9QUYgwqcCWhZDyG1r7zFB1eyotTAMFxtgREoo3YowSpgvkTTp1",
  "key4": "4mDTxoxZfqPC8wbUKnG6oyzWGP9UkgprNerXgYmgHi8JmzJUySsDo15HUsMQPYeXV33yaeHHhk1PiLAnXMPv1AJL",
  "key5": "217of7mCPpMLN1CcQELeFxSUb2C5jvTHEDyi3GAQdJGDjcZ8CyhFUfULiRRv3RUog1XBL9MTYvUhQ3nuBYNkLKLQ",
  "key6": "3jWrQQ8i39cMU6dLwp4d9CNf9d7McXJp4UFdGvHbDmz6E4KHMtkRjjWXSHPpuvzZyTkGGkLw3BESU3iTiLu3ZeYG",
  "key7": "4XfB5Z4rh7jF3FWd4R5fBwFHjMrLiBPwTTYpDBhN7eAsrSJT4HTWen8FZbvSRJTERkKamkRwCGMHFFS3w2unY7Bt",
  "key8": "3uBLE6r1rRbE5QuFLLNnoWYSbDewxHcFP2bzwYbuX75frrCxFsKYb4A7g6bZCHC7D6nf4re1RdVPmLKLzBLSEdvn",
  "key9": "KypJNPdGHiJXsASzkBFLobFGPPfn4ArbokhTKD6yboSTB5fqG22WofxAeJrESZwpKeshPXcdS5c1r8AkdaChaA6",
  "key10": "3VUd5zvbKEGBVVwAdaLqm3H9BqKZE1EnGGoDYa33o58WGEMEGZrbFvYhaUcGh13sfkVqRPc8VfPDzMczMi6Sqw8e",
  "key11": "3u6xioumoyUobac2Nvij736TA4YcM47bAZCJCXJ5kBQSaNJKEdGcZWMMdDzSMovirThXg8GnniXaLWXw3zrevxHb",
  "key12": "4VRy8nkMcHTQSMAMazYc26cQ9A4YGFbsznffH4wprGyoJjj28GGZG3VcsMpBbv89UWQ85Kvca9e7aciSEsi2Ppjt",
  "key13": "664g6rc2aSH9WPfhJXvyD47JU8QS1QronaLSS9Th1jhKxsGmtDTpaUbaXDFdXnxkjQUEnfyV6qHtk1JD9RVjPDjk",
  "key14": "2KHVjKMPbZzbjWWSFW5q9UGTKcx26gNNwcwfoSxbZTRPYoNZTiiGSwEeCf8zpoNz1FxPfmdeSz2G5gD8PH1dTg3g",
  "key15": "65isAJYdUH8r68vdr4qvpA2fdq1DBfFtaJYBgRoD3yhmmqucbtXkQQ8mxccQXyFEEW7AsfBWcG8kLiz7WzGQqFET",
  "key16": "5dHmi4B7jBsHGS78DxkbT68wkTXnRfFchvsAw4tRAARBP5YBrcGKWzJffAGNpXcFzzEGE3dexBqZyaczzVpbZW8j",
  "key17": "2nGcu1cRGF7XYLJ6qLu2391zJaYx7SDmpgULU25CQW9hYJfQBMmPmmhDMY2vh3oSrUJhn8rftjwWhTGd9Sennia5",
  "key18": "4tmqv3jT5c8c3zkvtiPqJ1QXFj57QhoBufb1pfxYmj4bkrScyPtqRqjXxRem1jeCkHRyJThaAPrnFWYirUYbMcyt",
  "key19": "2ZQJXrpeeBNtZDbWx1YH39Yc2wRfy6vweJrQD5LrCxPWNKB8V7un1m7Zu979JkBT58rAqPmjJEk8Mhbm59rkE1ai",
  "key20": "3x2aoNYSeuPxP9aVMQYeUr1fj15kEj2WBj7M5ZFkV8TnxjmrpgZxE4SA81dy3v2MuNGKeugBZKdBJ8oYpzVhnsG",
  "key21": "5mbPt3quZN1z1G9kahJpC4JUsSqCt5ExtMxF5pry5xG6m8UW2fTntz3m1TSBp4c9uzmyGwfjYPHTe9jBNfWWY9Zm",
  "key22": "4g2cM3GMT2v6qXCCkV6SSx247S8qSgKHVHmhRQdfivd7uiv5JXcu3FPP5377uZHGJ3UoHgBPyWyMzFvSNeZLAGzx",
  "key23": "4HqjYjFVnrQKz76Jt84qroGZLPGegbHf69PDcGc6JKukWRt5gxURYfpBuQDt18Ak2ioifLtjPL3k7joeraseyrRB",
  "key24": "3BB6cqyZxUiVdkzktCHM8nrUwvHmQn5BduqiCWFeYHjVMSA9LrL3jYQH1WQ2KLxgz1A5PjX7GEkU2E1HtyAfaXxz",
  "key25": "2cgiDcAcmGSX18jhV4v6tRsYKvwbHX4woAtjHzBTBcCpCJ39hryWxVCf9DSadsb8V4feKLLZDWzAy7fmxHm47v2k",
  "key26": "5mUcJtbQXnDFR9uQv6GYRx6CyKWT8gF3ivJVTN47XJkWpP4qoZZ79uHJ8sDNGnAmXWXzxgixWjgP9tAsbxCit9Qb",
  "key27": "3tRsQZBNzfXAPgmxGoi6oJpMt1fVbqfW5Xx3kV5y9d4tdFxcfo46AMXXhj58VMXZhdv9FKL8Vu8jhaFzLgiJHPDZ",
  "key28": "45VfY4qjJ84RvCLb1pSFHkAvEbebPHfdRXA5k7tBKiSgtcysmqTHSAryzsZpxg5o2tFKHhtqVrWkg9RVJAvkMyqa",
  "key29": "5qsh14R2vjLNVXx6Yd6AJXWCGrVFfyyGRWPEt1SSPEHweShvWCEmx5URYa9fQYsG1v4F7dcaXgMPXVyQ2Mhy88Ma",
  "key30": "5gmF6267sAxYnodDbGJC3TKgrvpbGrsr4tVavK7sQ5csRG3S1zPpXQm1zYGFaZddJ7P2FnV4AB318kxd5A1gcbxH",
  "key31": "2SmiwusySLbXBYUyLN2Tz1bLJaS38Hbqm92PD8JzqkmZj7QTvcX14X86HADWZY1bBxftcwYz1mbKgYAm28UsPjX2",
  "key32": "4McCexdU62XRVkM4s3FGsFTKi87aqxcmD4UEn2uNXJotWf7e9JuC8zUSGWj1AZBh2GXnqgMAJrhYfzvqJgV72fYp",
  "key33": "3t2h4Nv9KcM56BE3CmbJ1vFXvXX6jUDNnAfh9XRofpH8k4gygx3WZBDAi5LZKwBiJRtVeUPehVXyHTeZ976q6iiY",
  "key34": "4VBMqH9imCsjgqkm73yVovM5b7YhnS1dvbyCbRKcYwisgDov4AfwmotUjLC67YYnBjM9r3Xr81L76HQzdZRFo2Sf",
  "key35": "2uvHHGcKhnJcPhbkCc3mxxJJSW7i5rNZbj124EURT6wjfvrwtz4Be3Xozs6Sumz68yEZTWd171ENqMgHbLvKA9RU",
  "key36": "2xDek64oVfZGYaWD87JSwDdmRm3j7S57NZoEH2X7m4jyFBepcX1SrTML25ShHqDdjMNK8VKeauC8G74XWbkHocJZ",
  "key37": "2X8RCqDZsJNKSHiHR2Bk1TckmUC8CijdzfL9ospK8iN37HAszwq2LMAi7FaFKfmist7TAXVXZuKsMoKG5Zge7n97",
  "key38": "5nFrfFMQ4WZ55Sj3muKv3oKDjfszzP18XgdbRstdprnPHu6jWYHjXHr6KixWRvYs2c9sjyrTN839iSLotGtN7qnw",
  "key39": "5R6tVg4aHuWupdAvendkV3WNUdeJ9U8X8bA3xaLwnxBZBaz6Gkt7B157WgJgDAFvJfHfoxhPAQFDJtXEryuFoer4"
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
