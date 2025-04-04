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
    "4HWafCgA9xPxyMUJkYLQLGPNZxpbBCGt6qeLr5Gqm6nVudBeind1QHAmgnaLcciMdV9VcywGdXjcgQDFwiHaMWpF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qyhpYbGYi59okFbtdsMzhyuTbgu3Am9SyhFtPcCQisoYACv6wzssSwX1NubdBRnsx4WzwzU5LTd3L3XHWijUpev",
  "key1": "UnFmxU2q5L58rxGNiutmTVc6JsGuyeMN7iCBtuqHidqmePkGQrFEGPZZTZsmY693tHUqMzU2LxhZrvEuPctRSKr",
  "key2": "2MBvAFx7mYtpUkmmaspw89zprknzP3PbgwQGVhJpqepVCr1eBmzefp7zasYW7UznNsbfzQcrQxXBxmNyCYJxzWBD",
  "key3": "5qh351LSKk83bo7Cpogb5aJ5kh3gk5WMmT4pcaTeKknAKark41Rm2JwxUaPyUDnqUte2oy6BVCh3MkABE55N8g8",
  "key4": "4PxvPP8iMR9KPnqZevREvSm4G191TdAhmZJ1PuQWhZWaPXwdXMNfXfkaHjoExosXESuWRdED4xuuCBWjqa2LTyNV",
  "key5": "413DETKQMS4AEQrMZPk2GuJTrCdusPsZmLwG6DCPqDGhX62xD8yweF676W9VCBeZway3QVAPYo9d9YddeWHCNibm",
  "key6": "4czQFF8FC62BHQUjHCp98RXmPG5gnDk2z1iBh6Z5M9GbcFziDtYkmxC8YpUEqhnpid2dWGkd8Qch4W1V2He391FU",
  "key7": "4jD7fee9oSa2kdivzSs8QyExqGG9b389DcWvWGxUjzbq9kxENFbxo9mUNSPpUT4npz9z7apgbyYUyFTvdJ6VtaHp",
  "key8": "3nNt55r6EL727movXjojdmeUJ9KEHQHQYaJr44NRfXpFMxXBy61YFDsiB7QBPLZYpTKNPFfn7PMqWjjNH1Xphs7C",
  "key9": "58wTzLFMabD73p9qpxGfb9CVfLteLvH4Tw5nv4dGejujeMbVoitTKnBJRYdLKx19wbqsUzqURj5FgjJt7TPNnkHQ",
  "key10": "5WRyAnuoArtYEihKBMYYtj6P6s6rWtKi65LCnvRGP9JekbX8CMuBdim5XZpUU8rvmPzFTLYjT8BfHmNXd5j1RgGp",
  "key11": "2m1vrCU99dWMotvqCgnqU9mpDqFWDA2b4pGKf2tTJpCHGKbrGHCFHoaFZvmep4PtopTPMUAY8JU8DMmvC5MYVMxm",
  "key12": "4U25h1p5k87U9LTEFjnvncCek4WfRuJtHzWipre7FM9mTEFMfEbQDb9L3YZnzSLu5V6fj11cXpFuUGhiBcLsyB2z",
  "key13": "3pNR2z2uVAJp81TMu74HDuzRqREsPsHe5CePUPYZt8atsmPEvTUv2uboxZw1eAwvhsyXMvwpaJAiDK3WFXUNBzBw",
  "key14": "4jpJyQpKC5m8Y1CBMtKnhseSgQt1ymR6YDGADWQf4m3Ey6qzm5vhYVChfpqxM96JmMako2pqNn5zeALQjeV2q6B7",
  "key15": "2x6R4TgtKcjrhSd93ALgsc9pXysD7jYz7cqWomF5GUmaVqrpnqRtGo1VLae4uxrRbpFMsuuzvLZo9qSkZJVxMSw5",
  "key16": "3XzSUMXEynBeMWjVn4m1er1MohAsbbYmjhGYyPQz27XFfJ9PAiBDDFDbFnTPMMhVB7DgNG4xmyofZiUDUXSm8Yq7",
  "key17": "6APeTjNVfmUrEzQAjJAWkY4ZcFs3Y4SYng8MFvGceYN2tvcp5a9wGYQr71u8hYCRo3KzBcDQZRkfBnT9ytqiGfE",
  "key18": "2tTCBP3b9vqawkDkqoutmu6V5qFJDePfNHAwiBkqPjve8nkk3vvMoywu5Q8XMFQRhGKTsoYurm3MiSATg8jb87Ya",
  "key19": "3NMdtWimZBgm7Cg4rKRCTby1XPehyPENrX9oyC5j9B7FB2B6fdT7fESTyUY2HMJaMhLUsFu6BJVpzCkHXZviFTVR",
  "key20": "3fis22VgKJbAtEAan97aAv7QAqu7BhzrAzaeejouHrVCsx8Rz2yCqaY7xGVbhNWueugSouE1qhZXiHgrMGVG4soF",
  "key21": "5p3KXJSoxcXQMQ2YseZnVVp95TyyLtPr94pGr3cDUL67DqoqZ8sHEwFsEiczgoL2P9y7cPjmfnntiMEZ9ubAJNd5",
  "key22": "59sZFEaBiFWob9k26aHBraTpvJcdspodXSUbmzfRSSEY6afDEzBK1vi3faNZMfyU9uPbmgy4B9Lz8BS19DvmbnV8",
  "key23": "24rCDgqyBLG4ws49rPnNBTtWfE1SZeDGHxzACBCYY7JmGvURujdEFpJDCN6iZYes1tRNnx6R2xH9M7W9U7vTeht5",
  "key24": "64jGz9SwUDmmkCGNi1K92wTqT2W7KELkwN6DEHEuPueX4pdcEq2hn31ZtbgnMLgw8kUjmySK927BqwRvevZ1A8XT",
  "key25": "3ozVZpGYfADLk4NMqdXQpeYELFuWZfVNmuJabUdscYr9dgcDTBire9uJpm8QJoGNzJ2fmAzxRuz7zns7SGcm2uPg",
  "key26": "4iNZxE748ZCxoH7hfnjWPt6SzcY3hgedhgoNeYPCVyP6JPT8WQRCm6wQCQJr7UCEWNHcsdCBpZoKtCBCfgBRB9G2",
  "key27": "4rEbyBwFcBz9LEWpMo8JjVxbdALUSnvoRCeGLh7wTE2twrV3ePr8RbCXQLGtVJDrVmWpe1sAkvjrva5jK5EKtzaQ",
  "key28": "33HEEZf4KHxRR7sdqspekSSw2iXP5owkHRwzSUkAZH3zp6Gr2Zp3GSX4UpCHXSnBrwJhQvR6wP2r8nEcTyYTpe3i",
  "key29": "2FYUM2oftRcLJKv7nm8RcSDetpe3qHVCJ5SgqMgCrbToTWcrmcZZCzRLcYRwwt3a4VAisA68dZEe62TpQDa3ayAF",
  "key30": "5HBfhWZto1de5sXvUxatEZHbaJ4uxXeyGA5ZA6GKGqJ1iFsqVDygnzMtkyWfWWbdcnCPWDsuDtZ5iC4QgmqXbNfZ",
  "key31": "3JdwBHhwnAQin2Eyi4PbVxLfLVoogo2qRKQipgRWZ8efFzSKs1hRYgTomwxV2BAqQQRNjrtT1unfAaGqRcBFZiaz",
  "key32": "2Nb8hENpkSLHFqXrHZ4Nuwk5XZaNa32rE8K3SqJSFV9jQAAkGDhzxwQMJCqeXsevHtouk9aRiyG3GEq3Q89TwVa6",
  "key33": "VcPBRVuV5G3caZSi5h9jJ2PkETof9TkFPye3KvcEM5brCYRu7NGFr1uYnc6Yafha9Ufgj9Cn9peBcUMcU5cnSn1",
  "key34": "5UeCdUpvBTVa9EB69Gq674pZg5ULM4NJbCEGHajsxEarTAcqgQvDjX1C3r3puULGMoKMtEH7ZJuxTw29sATArdEy",
  "key35": "Ldscy1LF64mB19NMdD4RF2Y2jX4BcEAU4W3vtJAethTrtp2weLrfzGAUgUFNq8vadBCgXt8gX7ndre9bBD8v4SS",
  "key36": "3Vojwq8P5sD4Tzkzv24w8spm5ZefLBhvUkMaH7E1nweyVQBGMRt1589Sz11zv6Hn5Uf3Ute9VtECT5PdvCPfFjVt",
  "key37": "5pi3LLd9aC73bVjgU4VeatXUWd2UVLvrhpvfLYQRCMZPyRJcqQ4joSbNgDUNXhthA26xGWZ2K9auxSCGJ2RKDafz",
  "key38": "4zMKCWjXyoh7aDMyhQUHcjDnfHqpHWQHn1ZbiYNYjkic36yjjVa1gQnqB5uH8ZPH8BnME2sBfDMijHmtVHFJ5MmH",
  "key39": "56ycauZEg38yVRTKTvbcjj8Q2qSQdrzWRA6hwYorXa6HykdStUCKtnm5zza7LR5a67gkdtMMrcbaoARsz6TCdBQ",
  "key40": "65GkmbFrykHR2Fp7UfUgsQxZi9MfpZKaT7psBtwvKdui7xotCNGVntqprb6WrNvqM5Yrf5WXMvnGC6kVGhUNEnmV",
  "key41": "4vE29myBtRCDocvf1g8QzKL97Xq3sfK1A6KxVWPdHDtvxJmB331N1B89zs2o9DJhydJmbsnqjsk8PKLQH3WZD2Dw"
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
