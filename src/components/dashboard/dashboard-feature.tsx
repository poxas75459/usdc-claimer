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
    "4Fxf6c3Eoqm3yE2d5HW9ztVBLPCuDvF6RhEygFzRso6J5Ywkif2mBcCntKrnEPRCgWgdmcdy7LFCTwLMuD5UVnyQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JAiFzFczECm6JU4BGG2d737fHftYe3uEZziJmGZKJf6uZ6Dc5XtWoCQzoQT1YdeNHx4ZAww1L7V58bTWotspbnT",
  "key1": "3g81AH4ZqH7AHeidSd3j9MwrwF8LWBbJF6t1e1AEqYeoeXse2rvgkMua8E2tyTRv9mV5Qi3ae3wrrMbg32DES1fy",
  "key2": "5dHcjnCxJuz1QFzHoMEWf1F9As7sTWrQDqhcDfUVSUNMrvX45LN4u2KE2RarU2CAjXK66piHv2hdZoPgJdtFeQkt",
  "key3": "3f97FdrTZ33aQgfqM533gkexLZwFz4cebStdABkTdvh2vSsYfN6s9xJQZpAcM2JjSFScTQCM9aTvCX5Ji5ZFLEeS",
  "key4": "5XWSoaeQf5r6afgenbwgcjEbB6tGVDtbt8KbmwRx8TAJ4jrmSGhJVSfAwzd4YAWa7yQ4PWwfrq1kN8HrLM4CbuGd",
  "key5": "3iD85MGUU3dUxf3QRH7T6fUJqTUZDwwkW3gWjKMkRij3QVLq4RHgKBeXNfP888tW2LF7zCRV1wcGbophcUXadCua",
  "key6": "3bzbwissdtQPtogssrYc8zasKzBA4BuBdp5T5i5JWqMwpfxBn6EK32gr9onkrZXGJfUx6bbXCMr5N75i7RP8A2xZ",
  "key7": "o2obzBqxrxS2E4nrKVcZjZhizTeCt8ZmPaEgy7VRJbJsRiH1jfNyfHi9PTyxq28Lnpyup1KjdSuA4QTFQHPm5XW",
  "key8": "2wYPkrGJeYPwRGx8Uzox144eAVKeM4a4zfZ2N8aL5MtUjB4PQWaLqSPzLZ1xc4cdydpWytvDR4Bsjh13Fad9CCKk",
  "key9": "37abf4vBgWSNggG9BcnS1iyF3efrKSQDknJSxuat2AkNp48AAQPWCi3CDbDQESG8tLxKR2q3MRWwKjvj8EMg4zFh",
  "key10": "jYwnNoWtnrk3vSd5ysTNwqk749LGBnrp9rRqEEtFT12VjaQ3rEGkSefhvwbxs9JYgBgeFgRqkRxzZtTFZNMVKxS",
  "key11": "33mEQaigwUesUmU1BtXcKyVnhYZuKkYoVjnv3vztFDTzTJiLisje46mMfAvEQg44HVENCNuuRoeTPnNVt6F3NZRR",
  "key12": "4b8U8Ap6LaTVsvRyvVewrKFqmS78nwTEvN1N4hH1MaPcCzZBr2dhiQZBN6pa1YeHwxkdr2WPkTeQvk5btbSzCN82",
  "key13": "2grTNLTeDvhVPUYABCTARKD53GLbDahkKmw1QAzzgssHAbjSVdqLfYSznYzHFkRBP8eSP1VTcNYmtwn6iapsFt2E",
  "key14": "4kVss8Gn3tdfm5rFeT6dpEknnWSgYMeCT4XTo93ZZPRWxB9GuhDyq9aVQVMgUH3dvykAgwFF4T5kY1wYxmfsdv4t",
  "key15": "4jWT5GgutWQH3ikhsf4NuovqJTHXUn2t9vdP6uYFhiBXVex6WL9pDvpagDJ6Ehzmm8ykMSJczkLuGNjqV59PMs5B",
  "key16": "4Usuo5NDEvroeeMXsDR962apf1vm2Cuc82MCkVAvaerstmyTFbErdyKucmcSye8GMJTGPgWo141CjktusNsLTZYM",
  "key17": "5ww7J4kaiA1f4QVU475bsrzw6E1kyDi6pJFMh99Mi6f3zVqM5btBKsFc9VJ7CYEGnY4zqAhbgAzpDQP8gunEd9cL",
  "key18": "5UvAA6wp4iSHuawzvGu97voXjc8bKEts3NEP3wyqQJCiZrwnnf129FDHEtPXE21yR31LhspFNZu71nQB3h2kUtHr",
  "key19": "2RWzvYd5SkxAJYApfXsu8YFwWRnipeWpY3AqkBVnDyrEdRg9zcaSW81Rf2of9TfuTibrcVKE789JLkjrm6ZAHoLx",
  "key20": "5iN2cGZPf41TrzB3u8DXQYF79rPYY5Nnnwv3ANH9tHc9AqNJAWf9Vf954gmPthUguZfkqqfyeBxkxFoGBrytw5Rc",
  "key21": "5F5ZiGSNdVprP9VLCgNYUf7PM8UaFtjzFcieyeX9qoeZoAKVzWiaKSPpErUyjihNRGpJTWVYEs1cKzm9nqszEsBb",
  "key22": "Q7qwqvVpgKcYRssLMowNieikUi1j33mwpPEbdGXLgpmRgx8sQzQMUCRTc5CD7gpKmFwszF7iWkqH7XhznV3nmdb",
  "key23": "5yHLpZg6aBbbRq8dVduiXL15qiTtCcaiUdkfzhjeABx96RMSoXYsUYE9LUMm9ATvSUXx3MftHkLEZH8ZjpHXhjPq",
  "key24": "2fdGnTQJfpUTeVTnraMRGX5tgwdK46KQyj3SNvX4xqFtYDhtytcC8gpoK4zVDB9xB7SkMcL1nej9E93Uz9DYsz6v",
  "key25": "awSUWpEfZ9i7dt1ZbYFHwVjepXZCFP6VdsTo8DNE9T3LXwBTbsQBmghLW2HqpMZybUEMgmxdbveW2cs9dTajNKH",
  "key26": "Qb7TLo32NiTADkHVyG57NfMZdwZL9DuCvLxi8jTu7CpMKiRdXJmBFsa6CTQo6QaNtLG42Govz6kCmvFJQSeg6jv",
  "key27": "dMXyhjdEtqX9DEd6wUqVSrUJ6QpEfod7dN6pHieoB1zwQypoT3RAP9yzhjinXVuXSZ5ft7cgd4mYAyKYvACoUk8",
  "key28": "4XhD83rP8qe5PL8bnPSREBr51TjVq84LXLczpbzeMrusLeMGVRiD1EehdDvSRJZ4EfA6yDw4MNk7HvCCZr9QhyZ4",
  "key29": "j2bDAwRksTd4ctwHJMXKnaW5KPEwzZFqNYVZL1q2upjhpyjZZaaMa72GSpjiVCqQguUbgWgftbcs9zVv56MmbkG",
  "key30": "4XXiMm2cBwxnQ9roy5dQCpTwfbgBtHc64t99sdMbfRjZZueGwpa2v4AH5FVY61rBVAWHLqsFES9wjPoVUvyXRBx5",
  "key31": "5EAYncBma6ZB8aeRherPm3arG3Lfnc6cZ7bg4nzctHqPEwGGnXqy33mkGZwKWRgqsWWKC86gFP89E7EM4FwMJQzD",
  "key32": "4Rt2iR2xFJyJFUnqawpYsaC33jCqf9oUEVPa3oy8XfSVdHGkUSrgW96MYeQQvk6AX3WFAyKQZGCHqM61CFG3qZTW",
  "key33": "2JepXeb8uP7ADxwxsLXnPKcxcoRMYH4R8n1QCwFB7TbJ62EeqEPCzSzYrXqnmmxzUBnmxqVrzHRvRJ1fxmpCnGTC",
  "key34": "2dnYRXmtmxxJ3GmXxJ4SqWCV2UXgWwzAr7UJNDbDXpoXsBxQrcKQnVC1H52myVJZLDV1nH3bg8Yr7JZChFftgrSv",
  "key35": "rzz1QZWhTHcBNu3jtZwjqhXxMLNyLi9HkwqFzhiTjpZdRqtJk7w8HmTjXfx7VjWZDCuCkhaGnJJXfvxwD3k4xbW",
  "key36": "4xymWzknMb3ZqtrpsfnmaF63G9HqJKGYoYndu7F4VBnmAoyexL1dTXYYjGLKTjMsf4kqw6rtDSek22UDNpbq1VYy",
  "key37": "3vVwrGnNXVi114GTbmP2wCEgNu3PK5PKNLWyaZnm9DX9FJFj5hCVi86BNqZFTp4W5hn4izxPSeKFpqKrhsH3Z8fP",
  "key38": "3ysxaSoDq7EXuogBQ5JZqmjP6FgNPMJxRgQd8SQgpR8ZTp5HKjvZaKCG5oDAVZ1XHAZ4Wph8BBfdNFgdTb51mRA7",
  "key39": "3gMPPzbQFFNtSETJwo7cnhhshKfpT6ABtRkcWMyFS74nEE7d2b712UZkkgFmCJ8fF8FVL784av5LQmeMuhna8XP8",
  "key40": "QFzRq31yRvYYvHWYAskxodoEbRw4EGkTEnZTNA69pwrRjLA9TfKJ7DFR7MCVcBTVdxfutFebryRkU98AjegBsLy",
  "key41": "gEUkZ2sArHsyr8k4Rk89pfRezVtU3oBeiXtJMnN2u3kgkGGguW7n7xcEhRdphaEJERAaMAvYubQzZXjaiAsRw8b",
  "key42": "5khZb3XM3azTKPZshANnpJRdDaYnndrdkz29yzLpQKSDUMM6jxc3o1WaybE18bN43tmgmYZZGYMZDqMcHBd21QYw",
  "key43": "5qcpBZJQKzNiPkkivHhi5dKnxL3kNCU7m73vxBHtaE8NBbnGfteqDn1vVxqnnL4Wm6vHXtDRyaVsYqzGPi5W3d3j",
  "key44": "2LCgkNd537ASGXYVaE7UHNRqTQLPPTYvADqRjss4d49fFQzRWq8Q7HLRyKfTMNFNTXVbt3nx8kFLEmB1RsM1BGsv",
  "key45": "5JUueZR3pFZ9eWYavY36T6CUTfGXYWmF1RoJLyHZfEhHxsgpUNzwc8phMcJf2t8Lwy9N6prTFrrwLk59eEEAYLBP",
  "key46": "3su87RqtqKwn8AvnQwNu77wG2Ck2spHSydGKXzKDkpmpywgJijNaYzAZDZbVn2TWhr4CDHZe9hCHJPLaekvjyntF",
  "key47": "3QjU9grTB7HCzeZGmhX7Yj9Rz3xRiZZGsgXyEefrTAhszPR9j6Y11kgLU583tzSe4xAfGVasT65EFYDkLjiZ179b",
  "key48": "Ltfc9oS1imvE5b8aEu9XRbcak1DUKR8UEKWfsia1YATGs81NC1NrWLsxGWR7K9A9iEzLfzhRrgwkG6oimy2dZmR",
  "key49": "3EsYHzRFNVVyq9HG8CicLBAz4V8agyk5qUBtLUizkCkeFhPU9rAtxsmhs1qbVPG5LPcxqzRHVCffhwEBSYZ624cs"
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
