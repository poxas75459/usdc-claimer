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
    "3RExxqDiCHUXXqD3ivdFMojYdTn2eNvMXBxvkmCriQKzcL5WPV3uCxfR19Wbr5QDfF78gmfu9KGgATeusvRiywDu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L9pyAYh53jst3dvR6HkbonxG7wnuxpq2Au1cApryvogkb6QTrjCR4B7vdzN98jqEzWG9pd13vmTWDFY5gxdBLE7",
  "key1": "511xyYGkNKt4MxumamjvicC1vHG7gFRmpDMPRsyFdxx3HYwcVrUjpJ5wMBw9DEGPE2RwZvcv33zSpnb2THb2CFgZ",
  "key2": "CGtP71yQJsxLjAM6x48as7uXv2e1MauBfJ5WushmUiQqXacUWR54fxpNeJmWaw3RdisBYWHuNTPy9LArFJV2Yp3",
  "key3": "GH81BovokhUB1EMpbGA85xw6K5CJ9NspdtghzRquEajyrGt4eFRCppdT3uuhTU3gVQwGcScypuLrFuuuKV5tB5D",
  "key4": "495jRDLCASG4NjuFeCH6iYehs223hVo5tv2qM2pQ4jUKoig7p9ucZj3g1dJQsjL3E1uCXU5qaUymJHXgsNnDeMfN",
  "key5": "5PGuAvQsXJ9k7P3uFXCFkqV3yxDPBrFrTD3W87QefPz5p45gMAQB2KeBjK66BbhVjjyVvNiiNtCJU7bHj5fDTrJ9",
  "key6": "2h21WP47hQFxNMGaxHErcjLA6A15gqwNteA2kYDWH9XA392tBeZYfAC72Wv3ZNfEzRbcHcs15H4RZ825LapFGwQx",
  "key7": "5rGBnPvWSmxrfCtg187zffy8hD9s1YgX3a3C29Kq6MqqDXXYW83woGxYqsrRkiQictFM4RmTtC6hKwkFVsPK23ec",
  "key8": "4DsSKEZZdicVrhWQME957Y65Cn9EvU2s7ktDBmHwuSPcAyjtaPHaSR8a4GV9FwWwmm2RMrbRZ79P7MZXY7GBFRoX",
  "key9": "2hRSjnnQbWmwHWL2r3LDRLHv2rfm9RKM13aystchxJuitJPG9rm5yNEDJHggaBpCFCVWXuY3Ko8mxiwZAmZ6no1G",
  "key10": "2xZBoX8jTmFfB7pukPefwQAWnhgAod2P1gZzYDDcT3baDPiiHwc1HY9Gi7cdvgdSR9ybNFD9a7Yp1emYhD2Wand3",
  "key11": "43KU42TGsVho1fmE59aNqWK2xyUf86ffaYQVxtwGuMPvKRGKBNmPiLbmh15gvu7e8e22E1d91fymryHkrczQ9d3W",
  "key12": "2nQdNWh8pxCaCoKM4WLU75Ric3saXFrbTw2CYqquW2VKL9yT9F9Ho2gwgwzTF8w7qdMNMshKTPi45EaCTY7EuLmX",
  "key13": "4UAMJLRkGLAx4WL8cmY9fohH15XRBvKEgpdXNXtb2tERsQRQCw4jivdyT5vDgdhM3mnHUnqCzS1gBDkeHKDyND7o",
  "key14": "3GC3RmShbYqEhfpgwk4yAwR2AYP3gjmrqkFWjofgyvVsktSRMUEFnucVai1pKWdj68MxLBwHSaNsDtX5GVKsNp9Y",
  "key15": "5rUDx5WMpkxY57FajowVWNLfvxcYagnEhH9kNgRHeTLHCCbgBcW6bcsGVUBNcT84iX9Nm8B26HNCJvUk6yfmtkws",
  "key16": "zbMj2SMkVjxkmi83QySRPCisoSkgBgG4wqCspU27e9s6BWoYss3MKBTS9A6KMfrZRDhD6AgJRttgkfnVdShEcL8",
  "key17": "4PkPEy19wTZCER6KPU5d1TeU3zAegA7rWZUKX2mqFkqjiecGGW1wQPWXwJp1j4Lpj4E6JxvaKXdok8YuviC14DnB",
  "key18": "4aVwcgHuNUtyX3jYmxkuwpkwa9fPinbccSoFvAEjpSmabcTdBpq56vK7NnfHgPxY7phiFbBYSKuJ93cr7EQm1T6D",
  "key19": "4BVeM5Jo9vmqiYGK3GJ9ioxyoZULoThiRymum7rvApurdfWrZBH7yaUH6aCCMQS3vQ4HQass8ojrYUj2z9xd5rQd",
  "key20": "wCovLcf7W5DQgFL3UDaUkn8EqmHgf83pnYWf5PV2NqES5dKYMZgddrR6GXnsoD21TnAVPH6BWbDAw7JzXRuDoKR",
  "key21": "2dgVqdtnpuA1ehmWAh5MCKg7r3hAgJ8hDA8xMbGqCdKkQyFpb2jJwfiLjBX1dMgYLqxw24ReEdXbfYPDReHJuQ2G",
  "key22": "TrbBSoskRpRbKeqWvTy5Xa7Dk46prTsXMgZT4Q3NS15ABsDXrzWuGidK8JhYxV4xyvNzRtcMVjvy49xPDYWCwtU",
  "key23": "4jraNMS2FjvG6kbGwkkxEfKpGu2Zr2YcQRviRGW5RJY2HNxmvQFQpXScq1F1Xz6MpAYevmdVh1sTDd9hXf4VmY3Y",
  "key24": "3UwyUGxLiRcebhU5GScyjmGxExRux4uut6hDm8y7XFLF4AcG2W8vpcXDPMgf5a3hLYQKtu1rAKmPhuYcBf38pKkk",
  "key25": "GUdtnnFngDRb7ZWJGrP1P1744x6SfHmNW9baoDUezNaJ4LsAiB9aUMz3pZJhDnkeCX8cQVZnF31LuzLLiNKNT7H",
  "key26": "3em41Dv7XBAHBjSL4bMMgZ5fCiFwkoRHh8ES66kJiSCfTtVgYJC5vXWtrUYD9dEc34fPbTkH43PhSBuGr92gionz",
  "key27": "WMUeWh1zbbREubHaFKucyCak2mxCMQ4pBhPqbgea4jnPmYKRvVQS7C8HDbVgZPgf5MRwcDaq3sou7a77S2bkrst",
  "key28": "39qsYuHJ36mm1vY6ZwkXyBT2PA2eEhDP9V24jEyVqocPB5GyENmTk5v4ZpTJ4extRZZ4LPAivJSEYrKdbwuPHHoz",
  "key29": "cR2SaosFJBzezMTLHRbesv5ZkvWPzgpSJUKXzqJrVgCxGbRhQAaWAG2fNPfQVr2hrku2NKoEmLqmy79mfGGUbgj",
  "key30": "3qHWZzdkmVJwsYAMmtYbtKQd3eGFThUE3DTmyPGw3iL4oSjNjja3rcJEw4jjMWUtDJEvGVJxGGm9wb3Hgqt1BwY3",
  "key31": "5chdf6kFy3uGjoiCqnysxTCPRq4sxJYA4w4KsN7u2bkU39wbXkauAv7aR7Y6ibqyqs9ipYzfTSH5rFLsUPtenQS8",
  "key32": "21xq18zYBhyArPuAUi4gab7qoWVfPsfBbQ5vsZzFkXAz9HTJCC3o4dB3o7F7xJCSabAEietqxPV6E4PV7GD9JN9r",
  "key33": "3M8RAUem6zHcTkZMMndmeAiytF6M3UF3MVrvz79FZn5kmYVSTS7AEGLuJTNwXmv1LrnyZw155PW1YNHQSpWTtyd3",
  "key34": "2vPvgSkPUXSVuW9gKMEUh5CbgAuCNospEn6WxLEhvArZzztCZewkRxz5pUBJWsKg6DV1Hs4u1cb7ftuF7nUejt6q",
  "key35": "4CxXpHHxnJXmBJu1qJGtUh9vPLxkUuN9r58D6AtUcdXatjq3BntrQunuMB6QnfyqfwgAxGSmju3nEnaikULgb7Cq"
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
