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
    "61Yg3t1mjcQJ6b1tMGA44bRqWqPxpFR6FfgMETjHaCFvqorFLXqTRM1duuEznQMFzcZYqJ37dV2tNr7KmR3hwpQi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dCwmb4LH1WK1TzBj7oCakxhmfiBNvZ6Sum2GA5wzjsWL8ECSZV7HA5Rnq5rGytptPjRwjpifFkidU24YvidpNFz",
  "key1": "rt5QBB31N9yw9Dbad7Q4rB557Twn66THazMz74awXR6L3sAp14r7j5rG6HFAf9dZLuFQ4X4eKQrpqScATNtvwxU",
  "key2": "3P6PQfVCkJd23gcXw64622viG8DAcQbjr9U3zQ23vnH5Jf7rwpNDkEWUSyNGak93XfN9jocm9VijNc1h2qUivBA",
  "key3": "3TVwodUVFKfEviGMw6HkcCPWuhLcoJxKHJPt5dTYJ4Q2HMjzA2xUPFaget2WvHEpqkViSThcDCN3iWWz6CZTzBX9",
  "key4": "RJpetXfRjJaNiJggUdS5ntT2BajHTRS8SojGuZ2xw8GjGNfLqwPqniKDoQu3RQLGpVd2zujd1gCFd7W8A7tM2Cn",
  "key5": "4WBTHwTPPCyDn4qYHnrXs3hkowp4EUW2WP44A3k2ZvcEMrNUPuGaRbokT9T4Ce2CMzZ6nUviLnzkyTVoEDHZXecB",
  "key6": "2yRtJb234e8RS6CjMRk39JfWBgAKZUm7ucYqsaxgtsubNbzgPMEvWxvc74xHYMb99KwgSHdEppq8soRdkraD6rqQ",
  "key7": "nZxbGCnQLZ2jeF3qRty1Fo61YbCC9g5WA8UPH3MBV6xRM9G2x23LgPmDYsKc93FvvJ1Pmrtm4pHEyEgEPoAqucu",
  "key8": "Dfa38NhTkecfd7uiHiuuYszeZs1S6ATfkhxJZdZ6AJtQoAX8oSNrTtE6ZciL9rnLFXN316kMod6CfknpEUxC2fD",
  "key9": "2gV9aQkytihVUvLbCqtKH3zZnYraEj8rYg61HFkUyxjuUi1oKTpc6xCXgTspR5ouE1eaGUGt1PzNVG85QaMtDfti",
  "key10": "3a13i9bP2ZRjE53Z2bFJEnCmVzTcNVBnxq7kWJJpsjz5NxbAmPT5Wc4fLJ3vZDjaMJw9o1vuWyoPh3EMk468fbro",
  "key11": "653p5KLEQueF2LcGawHaMFnGeLbE7apGBQmTkHv3oskjN7qEnUCQXkJTP5A3TRYofB31vvv3VRd7qMfFkKBCRGcW",
  "key12": "3usPFMeZ78UKdZ9neMKtvg8YUzBHPzMssYC3Tw5MrdTpAJ5VdMfupWTM8dWsoR5ffvUzcjV756rBEgf7P4hQx8X6",
  "key13": "4htwaiWi91wvGVrdg18nmM6cENVa4ryLXJ86dtuPYk3JTCP2qWoMBC9q133M12msfM655EU1PWaKzSFLowQhfLv",
  "key14": "3PH2jFyH1zko95iAQ7nkG6P4Z8mWYkBzV59PDUvdec7J54bAqoKb7qYYWaZuxPWaEKy1CndK1wsiYMuQ8423oEmH",
  "key15": "4BKTUhgTr5fTyYP8EqDteqojbrR6mphm6oAageqtQHFShrMptMsPFfsd8G1qCRLCUh2JpSjM9N5UShpFEWAvBoeQ",
  "key16": "2DZbCXNJLWj6ZAnSSzZ9qYiU5AVu4YMfzzLSEfA6BED5uQz3QhdUwYKbynwrSx3X3ryiQumsywcZHEKDAfgVcmkj",
  "key17": "2YiCUuUDxmi3aGvenYCgch98Cho41NKcXmZEpcEPPufmc6r8SDhzbaNFtACEKoPV1PUUZmx2B7KqegMWNpwfJ8BA",
  "key18": "5SUC3QPsnDqeup9YWqJ17PHKfVcWRJrwQDmrqrn1ZFmxdiMKwjPZtt1Bz3t5iXpZuEjBWmZVLRhDidfuMwsHVnEZ",
  "key19": "2ty2qNffJJdkFBJTPvgNFPJh8fxEw53VvJjVHPo84Z56zez42soYRVSASS2TF2Ztv3HnHFNiuQGEyAqvJQoraZin",
  "key20": "456QHK6skT7kmt2GpYCLHG6mXU9hixX7JVUbRgP51xrcPVcYzEYQEHUW8CiW7wmMsTy9ckjeMMiKvr9L98vPToHM",
  "key21": "5dYTTZ7mbKABAewHgAfk9gMxv2g1dugfKWeWAhqgvbMe9x9NuXTbnp3jdu6oLHf9XiPDk4ZMX7aj3M2dSJ151sMC",
  "key22": "5aXJ6wudrpFcbsg4iyAGw3KDrYYBSdn73SacVupqis6pgVg72n273kZJ5wt2M89nSMrfUBrAAeqB2vLxsarMayf6",
  "key23": "go7BcoHrC1aKC9m8Ry9QuWMSZXYTjNGdRtjtpxBMESyCvn5D81u9FHmwPdsNcWxvAmyDoURBNwzg4vBJ9fGF98J",
  "key24": "3WqXm68JCSrRxBiuvrJRa8AfmpLH7fDbpv8WisBCJ1UW3krkGmn6zJ8VLz9472kjotAzhjG29AdPWg1ncopJyi6s",
  "key25": "2mtXwqnhj1UyXBMNMH7Yb3xSsjeUxXpULWsQfkESbVfyYGEA61W9ZcuXnUzajFCEXE9ae9jconJ5y6wahqZPjyzq",
  "key26": "pWj28kDJby4REpSQQEdHXFTtuCDyGwRx3566NvisAsHCPEZBiBKrhmstsQnPsusKgAQeiVvJ1rKS2Sm6QKLYErh",
  "key27": "33LwtxHXZ8ujV8p8jMag4v24iPhRXM9XirySN2MvUkyJ5vbQiqqw9asSpAcBHxj49eV5ooDkTzKPLB9sURicLuKx",
  "key28": "5JXKvDyxAX1c7jJ8y8fDBAcGoHNVM8pG46nPGVnLLBxFf2q5h3YwmY8B95yed4btbBLtQQuUbCACLwuXFLyDzY7k",
  "key29": "3GdK45AcDBHGkct5z7jG26h5DXxPrsBB3epeGUeDSnJF8qZtW7WCNp8ekQfQuDSjMAZdMLNbpsjam9hJCdpeKiTj",
  "key30": "2e49FUotGRiP4yPehkzWk7UdAUEXrizveZGVvJYQyZJEYCKGT6g3evq73bKUzK8SWUVxXaDQjxPWwmEb5fhJVrKA",
  "key31": "3eMc4qPTs38YGAXFgbnwovfhQ5MyB33ZMpFM6fsnhAZm85pgCPeNZby24eM86skrXfLNHP8suUxkGnZeDCviZjaZ",
  "key32": "aEG4ig6L4PoszavHdpEpyUshYw19LBMggyDJrDVWdJqrDQuZr5BADwjjQdAX68DmsCbYpGC7wTTqeHmeTfDzToU",
  "key33": "3wtjQuNxkMbgqbaQ36dPFwSqyRwwmCU6dW7r7H31nayjj8VToGsez3kQiNYiyizas559XTKZmybhutQkGN386nAo",
  "key34": "27C6Qhnt8Ujz19PDq7ZzL5NArpp5egkeAVShXzZxibkPqj1J6eadf4KU1xu8THmFKKVaosHecD7LVu4ioZBEff9s",
  "key35": "2SNNbthnnbP2E6HngJTkz6NYvax7ZgaMXY7k5KvRYQKTHUk4hd5mt9V4sv5ELE77nbcHrSqkNSoaBmdtm2JdhFCT",
  "key36": "5UKsSR7Ubv4NUZ2MjxfKkmkADX2zkiYzgXmRrng1kUah4VfTNmF5ySqrN6ChVuG7GKgvxMsLXA2JotssGP9eW3CT",
  "key37": "4UYuioKecnH8rXrgrx6Gkwy5EyhdgNyhiaR3AvHr6TGQ47Jh9eLXhA8HvuJSP1rfdECAVHQxK4gwBHTgCLvjL5Zw",
  "key38": "5gMHNst4RPWeE4wYAV2mt3ykHFTc4b4U36Pyuwt21aSzX1AyYpfqfYmrVUDKqNiMcqSrrhPfFK34A3NTRgA69pmY",
  "key39": "5Zw6nVvQhkv9YdvnxtzqaM3PjqVnqy4Ma2QqWxXGBLTNpEdbH6L26PZv1QPRjKuG29yVVCqCsjcsGsvoGyxRxYco",
  "key40": "93SLQfeTcUXUS9JEZwYFCobCB4gfiH5vKi5uMF6oFu88sEHkCMPFejGXK1yeWehnboKXNwpLjvRAWLUd2CtVMxL",
  "key41": "4JuUxXeSUpUpRwMpRbSgXRkH8qKx9cR5T1nqkD25iQLNsWwCJQZ5PwTxgDJJC9rYWw4VtwnVJZ3uE56XLTwQXsL1",
  "key42": "2UQPL7v92rkNoyEk9KEdpo784iSXHi5ZJFVEWu9aot7io8qJGTA8qc7e9VBMLEnFTsvtsoyNMV9vmYqdT5YGZHYx"
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
