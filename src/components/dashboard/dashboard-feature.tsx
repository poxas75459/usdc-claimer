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
    "31PiAVe6H36etoJL2hgAoGtJBnypK4ii4e3kQCy5pkYDNnSLnNaRgiPNbdRXPuqFqWdDFpuxwnXoFErbDyeMprvA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GD5W4i322GgXHJuBRk38CWq47KUedKj5UjeFR1ScH11Nr6Zmn1aHEWY6iQbPABYtPLEaYyV9gKvygBogMs8aqBH",
  "key1": "9LBsJvExha3dknjynftHVBfGBbX8daKGrWBgndakNXD5Pj2jEgKttjDMamyoLWoCXGb7Qtm38EAzrE1tcmZixkE",
  "key2": "2MmDpe3AdnYmqVpZaRdbgKQxGBd8byQxE52JfUPcBqN4vpD3CJzQoW7T3FVEsWNzoutTS4VYZEaA3u3RAuCu5grw",
  "key3": "tTqzV87KihLFwVevGhRTEVn6kFSAnJHPTwQ6r3ouwCAgS3Vj2zPzNUVhSaYGZqKmF8P7bobqWrm5Qd7EpFXgJRP",
  "key4": "57UwGYzeFnQSLxVTLEUUyZkQoUgxFuuxFVdU73Qy3TMkXr68CEUwF81gVW8PAfGHTpJ4PG7pqpec9uBokefRx7fM",
  "key5": "izX9gZmWqmCfhBkxAQTR6JcKFTdzh2v3mETGpXQvYW2ZDY13ZHsC8ne36bjp8veQJSNRjskwsiYPU5Yc5KPNmzc",
  "key6": "4nN9khhs7Rwh5pH8Y7x215XHmsC8b6F5A4PKpmWG88cFQXTbRtVJvCauPCKCv2LtHSkJ4LSVt42FRqDkHqfsDRnt",
  "key7": "3WhwG6qNLKL9X8VCBuXBqKH5uTxhyuW5MB2crR7cCgwL3DcdvKcJ8CbSekg84bjq2rFUU31ZrP8dmxjLK3USR6z7",
  "key8": "NTzqtG4ruNfkMjwnkZiNKHoqBXws2BnWG92A9Jn6794ADxpPpwf3TH2WejKQo1Y5xDco6v18eoL8DDDvdGZP1F2",
  "key9": "5YzAhRU1p2G47XE6H3JUNdkuUEZpiMXZ9mV2TnQCkhj9drwnhS9iZ6Jt1xiu93m9BDictUab9z3uKBMngNfVk37v",
  "key10": "4iSBn9Bqs937imyteBm4SRveAvCR1KtavE2wAuYWD15ZtNmWmei1xYodTsi3t3m4eFMdQmJ2GGTCx8K2d2ro7diB",
  "key11": "4eScXjymEVePxF9nAg8yGaFvajc3baawMSygJsJQQrTLiqvRJTs8hvFBF87QuDp6TEg24fxJRrFgRA1FvoQVZirG",
  "key12": "4zqPgJtKB124tWBpEZdG6h9oswDpVL5De6xng1Z3xN9uMWC948dU6Wg3SDJeAdLSKVxeSH3i8cbW4GgLSr9uafGd",
  "key13": "5rKgE4zeqp13VWUKqNuEErPHToCRo4vWtiBHumrdV456hp4XnGxU1nscJRh5U681teDYcdL7QkFXW8iQytiDgGzW",
  "key14": "5uoVkecqfAHDuM8HuJMc7ZuGoWsMzamYWpFQaSqDNQj6KjNvgcrMwkjxtUDnVotXTWz86p45JUPcYe8DHMTFTYhk",
  "key15": "4Jwd2QRkjXkv9uzafzhQ7Bgnw1DMkMCCV8CPygx2KKpSeAQfua9ndUFmhAXFNEi73dgtqg1BDpshCDfNLo2oACHk",
  "key16": "4PfygrmfpY9shQjpRKEjaZQZWzBPGotnrFibJRcLac5Fk4DoAdpzc1ZuHtWW1jLT38sMebQB6tj6MQ2UWwoPWPNT",
  "key17": "2jJqA5a9tEWBENDERURQhgNG1y3jtnmcGhWTzReAKMtraRhgTpoebWQoqBJEtKj9xLK4SNVUeXipSVRoCU2cMrjR",
  "key18": "3ivTkExnRCPkkErnBaowMTy2R8Car4xiKKswqrYnvnXL3BXTHjbvvDcHPAUZXrp2xTkczJ6GV3ASvg6GzPxrRvEu",
  "key19": "4D94Px8cR8gTybZiDtReF4umLQrRGWXY6XH2Ncv8ZyMZNEwYxuJ2f61aYfNdu3yAVXgC4oYY9k7g5YyHBFxRnECJ",
  "key20": "346dnrogPwUBDQ6tRVRGqc1ThLUGGoBhTnLKwbtfRVc8peNMkY2NWRzE8rsoiTzBcJUxFGidfzwkBHwTJ2RESB5Y",
  "key21": "49G4LRi6fhJiVPb17k77oNiSwUyzv5w576FzxuRtU8yAUirXADVBTMjfdLXezMJo6VKAy3mctvH9rhS65vm7qHdd",
  "key22": "5DGeNcCmope77vbCLk39SH8nA5C2APMb2VKyamd5umLNKMNiYhisaeQQ1JLjsUmGWXxX5xDaGnwCVqaaGfaf1hjm",
  "key23": "2ykWQ9Tfsvq3GvHg7Ni3rdyWF9W1GGFBaQx2pozGxVsPCDWPrcbENS97v8tJD1q1co8djtiRR9whDKgRFisqZDMs",
  "key24": "5KDX3ofbAL4iV9jgsFkrWX63bMxutiwoH9nvS6c88UqoP4r8xZsZEb6TsHy3b7dxED77hieRmXoF6XAV7Ey92nfw",
  "key25": "5Xx4JZhwupbADgqtpoeTs29vL6fSFEFdtk48ssR4hMTcV3Uy8eqdquKGsJ5vHiKTuZQsFAKdjMPdPT5FQi1amfnG",
  "key26": "5e9m4vvh6Pe29pWpfyDUfuvVfbMaBUq3skVckg3rZXadqwx3UN4AbhGS5mjAtCmKJjZdU6cqEDWsGhEcPtUEPXtf",
  "key27": "3xqcS8kfni4bsqEwD37t9W3JQrmocSMFk2iybQ5eGZ5LoeEBpxqrax4jjXoGVjVNUgWYNchoFHCXiZz27FATvzH4",
  "key28": "5oKB6mCmtxdYwwGh3SKgZPRAR6dXdVeK38fby2WzDMRn3ZH7KYWyme8xhjVrGrrS5XQ5Z3o5HouFSVyn7mqxFjgr",
  "key29": "4W8d6aabjC79GiiFUqqh6ctkm7b3FF4hyTiW4PjXkWG1cwFDkunJ1gZBQy8S6krVEEofLswkD3cYWWRB3dNoZguD",
  "key30": "xQPRvW5CjU7CMdTHDe9LsTyJ85pXmeXkFd8ShnmpnytRhCQtNry6EnmE4JhqiXoeLHggCU77JJ48xJrKGTCQTrM",
  "key31": "67nvhtLqWj46ppJqpJGT8YnE17DRuoZDreBX2x8QxVbkkQy6REwwPLw9yKpYqARVNB36p7FdfNweAJkHWbQLZVEM",
  "key32": "SbgV1Fde5BQWMH6zCMAaJUPVxHjuFEUCYzzDwtTRvSJLy745oZi7dqY7F9tUz5yT2m37eDLaBGZDZGuZzZmD4xh",
  "key33": "2WDm2Cuv2qaNsAiWp1h5KDUYBk7EQy6QuWb5A1uM7cg2MGyJ1FXPkyzENjs5jzkGiTk4njGv28pkvHCUogpvHcmU",
  "key34": "4TRFjFQYVEWoyKB488kkxWaUj1C6Q7E4wpD3sLTsULuoWFRQBitdemsoCSVjc3d2hP7kMygcc7XfrssPPAcFTyEo",
  "key35": "5jjWpCRoMmPtvFNg3V24G8AdPaaxuqtVtPsZMT2VHPp3FqDiajeZX8NS6hqiqyP3PGffzHvtAAWgCubMjKx6rFNL",
  "key36": "5siyhJwvkymeTbj6WgBYgGREuEpmBHq3Bbomh1BqtCoitGdDQJbBBpWSkjqYcZMgjpE8HBgumsDmEQcropQcpwFK",
  "key37": "2dpXzPHvwwAT2y8RfNZDhU7Eq6c5HD7QQtKJ3AALH18duSmvLmchg2frGo97bDUpzp9Rej1K9VfS2tynsDNCt9Ao"
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
