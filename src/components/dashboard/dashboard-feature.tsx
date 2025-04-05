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
    "2XHCHWEKtbeRLXHtFUaRpyKTg9kPSpZUzKo4ozd5Uuf8Hjx6KnWZByTKQW5hZc98KDfNdH8WmBwzcm5e1FRw3xrw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47teVkLyY8L7LtXFKw993hoDFkRKVj64R9wCFNM7Hr5Q7chiYT4u79oqU1nfgFaSa7An6Pr2DdG8Ao12GnN2w5fC",
  "key1": "GzfPiYARJFrFSuntDwa2zB1n5GaMhxLLaZB8pyWhSWgUdSCyUNiQjiWYKf6moRGGTmA7FksePpim6W496sGGMBa",
  "key2": "3gnh49u4mqEu3CimwJvmfnHj4dGKV3czQn7AcK3zUW6RaDhYZb6iNvC1eresS9aiUrAF2QoprZbK97Rc3E8Cnh4P",
  "key3": "2Dv4z2PbdysmJdS3SV5PtinwC37oWP1sHzmHJS8UCvPRLyzpoN5PPj9DngcFwodmxRfWmscMhBCcWrXDeRBS14bx",
  "key4": "z9LxDr2fduQQBbP1Yfn5R7nAZsBacj4wcVtQmXMcX6hS7H7cMactkVR3JUszR7eQiB8grw7QngANER3vG46XdVJ",
  "key5": "4nnHBDzBqWTnY5gE6jV8jqNgqBXdLa31WWzTVvPwy8nJsimaLphkF7WMXfZn41KeERwah6kt41YkGuk5nPDn4HJ9",
  "key6": "2NtSTPhbRbJdfZrnZ2331Zq1zcFUSzYKXXs3cF9ZYEUhUtkZvzURybz1cUnhUDX6bNgo84SybizRmyqmXKk4oe2D",
  "key7": "4wnf8KJ5A6edsau8xT4671dPpLAeFQdmbB5VPEjCfSpmC1m4wMgNZoAbzhcg3XFHe3ttVEJ8N7x5ZvGmvrvqwjrW",
  "key8": "4AZuLZaMgy1auWtkkVbbwVy9NoaeLNBJkCBEv6soduWCeQDccoMk2Ha5eUzUD7ZUwaJjdK3jLgvqGwYjqACn3cFW",
  "key9": "3uUDvp12YkbJdro1xiQHBbjiBM6Vm7Dmd3A54ExpM7hbbqW8NGbEt5MspxnzeqaDfkaxWzbyiaXtFJndLeZkhiNL",
  "key10": "3WYBqxZ3WodmtAoAy4MTKgiDhyuCgFtoTSNW7bYfEtuRTq2cy7o34WxPC6jMmCWhPA1zTDGLEZ9PCobUbrjnzQpL",
  "key11": "31hSjWKwL8kqNzKzVump4Yx7E3PEQKwGrFYZL5jJufAGXY3eMu4KHiAcG8mz4znRjfHi4YYocd3KFNbddwkGGRXJ",
  "key12": "5hNgxwjQgbtBvN61C9DBCyXDs5CFtEwt4LTCiU9RdJ5PDHzfPiygeaKQQgPR7iC42HeXUjZKous2JV74DzkqeDsw",
  "key13": "oR9WmBPxzCdnc63XtewrYMYpAer6V8ogSDo6dgh4XCKehFaWdbjNecokfiGHvorRCcF8k65FEs9toGPmjbzvnZt",
  "key14": "5rrWqGPPNXProDfaHpiKuk6NU4CULHp1yi1rhDwuLMawDzHtHBL9JSWHgcfdgDwuGrBu2QxQJMyH8BWQjsieu8o8",
  "key15": "3WWPeUPvDv9BrnxsyGeUtvWLzniFLDE3nbF9hBCARNdZNUKz3mb3zsgppGvUxKHizh8VnhBNPAb3pG1NBW6nfSHn",
  "key16": "4nMH8t4HPhrav7HszxP1hkXnHQpJhg11qb8AQYLodm7C7yJZ6gNxFw9k3EYZnDK6niGRUxixLhhkjJ6f1chMUaiw",
  "key17": "2JEtVaY7jYQjwKrwRoKPBcVhyeJWi9VVaGGCVPUUkG9MYkQ7XyBpts1saCMa323CefF3UNzxu42VykeSdU9ukRnP",
  "key18": "5X42uAD9qHN1EwFJNWH8YiC6RHzeTREJychRSVKQfxELch2sbkHtdsygzfAtvgKwZDcboLJVshrixVM5UsEtPS4o",
  "key19": "Rze99VKxEcj2Td34A3p4KZxBw7MehyGZecnWQr2NXPhsTjAKnaYeQdnkkCYyedjqU1hiTjniKyGSF5b2BU47y86",
  "key20": "39gppzQ4myWHARErqcnhHSa3Tjv9gs3Yf9AFYDrzJaYgtbht8inpDqE7p2saqj9NQSajpXGGmSWbahPG4fyEc3b5",
  "key21": "XV7a7gRA9GMRwcW3BjjP4ERrj8v4VZtwAjBYZskX7AtH7jTmjvsM7KZEETxcLqCuYFKgZTL9QK19Hb6kJyENxai",
  "key22": "62yYJwgAt7eK1xbBrVE7uwPMZCT1MmQUZJzMfGZmwi6xgYkbzQ14z2MDWEfwfGEQ2vkhkbJYqA2Y7fRdvrUHcDbL",
  "key23": "2rFC3KFCyQzUzWgHTRyKD1hHPXsD6TubE5ip7KJvc7pygjhEdiCtV3z4kYRtytbimUtYbTxVbT1MekgiPsdpctQe",
  "key24": "Q68AXK186roTjtpodnX3ujsLgpoZSdgeLnvBuomP9FPH69mt3UDAVpQYWCZ1vhDBz7T5zzEV2NwXJjGrPKdyU6G",
  "key25": "38XHoZVL1PMHisKXSTE9VR13n8cjBZ6ReT883iMNUZFMfUKxcZbWnbSkUS3P2xFbZDWC7ZuvJaBXmXSxdmXALCUD",
  "key26": "2qhgec3a5Joq94zAjWy4T9VCc8hRtYvUdyBmDFAEq4VvJC1rJm9NARNhXhg2aFaJ41PxCzTSCSgN8bJBN14pgTMf",
  "key27": "3avo167QYKNWdu9PVv2WgXcRe1SnWBTcyKCsiPJhVeR8VCsVYQc2DSzbowbH9HiyqGVmZhfjpsoZAhCXSLNojXRf",
  "key28": "5jeTQhacVk8Nv8MJuMbFyQjuvNiT9CRaCQXPRcjEwnNAZhEmHgw993qPpmk2PSkYqLbpru34MLFs2yG8z68gPY1U",
  "key29": "54XVebtJLtrF7Yiyv3iTkEEW1L6Rs2HHPNWE5a3pZNKhrrySn8sJQnySXwfLgDwtMb3oHrw9rKEZYNHFr1qvc29s",
  "key30": "GEyZLaCeRicnC5VC55bp9JjxX2JsuSvzSEMzmmtiEj6ixwK3zYVz5nrqoVShiWyuC1cJ1DUi4cNy3kUTY6GgYsn",
  "key31": "4wMisYbd3MsSJM1QVvk4gvdoDeAA4Yxsijt2TLCKJLbhpCDeJkktvRKyMXFqmxhiG7okUGXDXqbqowB25SqAUhMi",
  "key32": "4ZDn81JbpHk7VTEMaAP5XUgDoaXLE7iMA9AHZorTYFgvfpuDC9dc8Re4EkogyWaCSUqqJBEaw9UxhzAYRbnz97PB",
  "key33": "3LXgLLn3kstNUPKm6XC9jk22kwTyf2DaX7SiBKnAjiUUBr9poa5NXzqtUBEqFLiMkFKao4KFdvP3CVPoPggNcYWD",
  "key34": "vNjW2ZPSgeaX9dbeoEDCnr1LFXxQXJbFxZahoPiRTfgMtwkvmoUvE9AkmYeGDtLcnuqXrqVpoYu9tmKvzYNRNqi",
  "key35": "4sxHdHZip6vrCFzsvhH9kmZtn3j4h99iLJkNczWMSAP9rELZn8mATeJ7fZYFnAskgpULu7eXRLdPYVrKHToSCZte",
  "key36": "2i2BVTwFxMtjUFfD9YA4ettuJpsGMDRZ4DXVLkrzZz4HwgLSVszoy8PxrgQpMVkUGGup1aKzaHVHsQk8BrRj6TMk",
  "key37": "4NmBcXhwxzKPdmNudHMnW9a8jK8XtXPaJwCiRBbLjzPkAYtFqDFWFVCfs85kDhJb8xFrPK2KJnBdRHuGnqLtnNgV"
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
