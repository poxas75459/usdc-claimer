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
    "5snwhP2jSL11jrSnz4LCtXzTPL2yXK5FWQ7uFKnDQzPtf2Rv6YRTVbmGwUKo81HbPA8NE2bL7ieAqdsek5ygnvUi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eWdCu6piWyjiYTWNwsgLRM11tZqnwUoZUEAK1mEpKsgoWXgutf9eSdSQJWg2ycJhNuCjm9VG1uTxv9biHTdno2h",
  "key1": "2Rft7dpHTYXyCxSprUn3xKsy879E5WFefTmKZeQgYCPTDcQVB9vGbqmeceNmo4TtTdWvdwTXCueu2BuF5ewXcjzV",
  "key2": "4KVRrk8Xu3bBYJaiqXwk3tPxJQgdwXRfDKo2x4tnjv57KZpaaYpJcgP2tYwfjHBpx8oAiMQdNdRdr1H7Pf5Un4Aq",
  "key3": "3m94GNQhDVtbdGbAgVo5tXkJrVHST8pdzpouAFH1FD8Ec3nhNo5aVfi9CtxMNBEH9vLtkvQqtJfPebH1MqZfnm9L",
  "key4": "3UcSmSwEYcFKJeYUAPnqAVSfbKvFF3H8ZT8XgeoqdKKxTnvcqra6vqKSzUd1Sxxm4WCvz2T9BFQFjyrjBynit2rZ",
  "key5": "2RRqxspbuUmXT566dhPgwft4gBb8z354Jb5FLuLeCviHFWndyL5JVNpiSQc28ypgKH8r9tbZjFbpxgripJtRX6FQ",
  "key6": "5mHuYgdaMfjJGSDUpxnRrVVdJQxBUoz3wq5rmAyqFpJqFGQTkJEqGUXuGx3F3DwB6FsYKQRSJviSWcXLznVqgeAC",
  "key7": "2F3qBWN5dnibj8ekERdDFjAA4BfSdnvXtnb8E2Qt8pfPqfHZunKTUAdkDhHkwmMopvius8uvKnqRPwbNWif2pXH2",
  "key8": "q6zGmHWACJbvgbbzAoFMKreDev1bDUmZ9VG55P2rWt1SsBihTkFLhPYUrPWbcTBpyXQwewknrRK8QUbQj6WYvDe",
  "key9": "57mjebspEEbw97aAFaKm2KbkuQeoeEyQskQYdvYDzjzZdXPqVKEhb42SoaQ33d7oVbG4BGAFCBTq3pWviWCrmAwG",
  "key10": "2wicoDwRfD1L5PZQGpXQd6VhALdYK8BV4aoFKHtaZd2zBKswuLXhKhfLqtHsQTw9JCrUR3DauPv58L8388R21dSx",
  "key11": "5B9CzYKSXKooc7hFYmaUb1qgQ17xyyWTDkEPUyE4QMMcS8xz6ujgHs2oSPTQyMJcAtMRrjbipdLo6WmR4XQxDGGn",
  "key12": "2adJiTNd4HsfavwZRJZaTSSFy8TkNjo1LKFYcJRY6jPdWBaveEXEGvv6spsART2ZfZszQd3GZpg3utfPRLAw3Jvf",
  "key13": "45xPpkbKazXXGVfaApVDbgqq8SbE8pFB4AvQ1HCz8RBw7fQmA8hye3pY2j7EFDMJjf9qFB6RLfz54dSn5dU7Htnr",
  "key14": "44z5UB4pNTrTfq9vPxaJJanfo3ReR5q7AEBeqxAD4PAiYGCMz87aQgcz8xwTiN4D2Fa48gL3kweeAzL3kL213EvF",
  "key15": "2HRCLome4tBz1SeLp4kMpuNbcCWFSDAYB3BMmHEUA4e27tj22hB3vVAGuE31vcSGVwRBd1ajXonnjawbdE21SoMW",
  "key16": "3UCUGCkg8wyh3ZUxiVweuvnUHYJ58sGEqX6XwWRDbiCMEC3Y5qD3XjBL3S8HU25YkPc4aV3tCpVbBQQ9x3WMNamd",
  "key17": "3QeViu9esJQJWV3KWDa93f3NvpszrqFFfcwT8guLENqwxdYs4QUncjbRMvpa1SGiJ9MGxFLFFkryikkohrSvLMqU",
  "key18": "3iVEY29qrcLvRd6uL31TBzX2tFb6AZbZDiWX4QH1kMpRps3RFBzUXm6gHDd31TfyQUaiPh2RRbbes51b2ua5sNtS",
  "key19": "4jcvDy1Q3Jf2dHEnVGZK9g3FXgakZDXZS8XvWWGmwNZF9nDCbmiqjTMxLCL4mb2bieiQoVLHtYzfk9ai3yUjS3YP",
  "key20": "3sgfL3gDcPaeH1dZdsx38JEQkdX6Z3mwvhsrRuBq24BriPAyCZrB8vSBCzzRAEUUTCd3wN2AZzYUhMivVou4kAUU",
  "key21": "5it2imtSk3ZKvqm2qM4A61kzurKRE3zkZUy9ViTHdXWoZui3MGFXojfCkh7zwpAASYUHV2ZnwePC2pFqiQDEKgTf",
  "key22": "56tvHJdNnMR3U3Cy9i91b4nWLdA54aQQQvkLL6N2oxdiZCaLsrVkE75LCkBpa99FQr59o9U3WNnmGpetfcKEUSjY",
  "key23": "3GUwL6PXE8f67kj6yZz6dpbgbanZwV8S9HQmv53cJCxACahKhhAv7PETKZHdDEeiuxJRHc4jvJbXGjvBkddmHdu4",
  "key24": "5vhoYD24MtKj3GeuqFFdrNSLqg7svFQGvbAWog8wTRJjyAtu92FzTyBNf2KT3TPsCS1SzC4A1b9Yf5XZ1bvHn9yB",
  "key25": "61VUHQbWvtjhvYKZTPKPn1brf8NBWxdBep3y2frzKrBYrBAwKA2MbcZXgzqSNgTwX6bNSMjWbrhDp7GUziUCVdSP",
  "key26": "4GnUUF2Xj6TVTbWpjyaRgeyib8rY5TYSbks14VnHfjsawJTa33cXrYp7bM2WAKpSRdEtugBRR8nzLB1Qa1gFCj61",
  "key27": "4osNevhEAwepx9R9JA5TY4aC6ti7N4YyiYeCMeNgNUpEUXHXRgbBoe4ithMyBbU15Ka8xiLyL9GEeNkia2REpWT",
  "key28": "64V36t2R5jhKF29MsMGYvg1HGy8qjWNJy5SJTwrX1LvuRm2YSoMW85XuLAHW9ehYEgmVVZjUtV3q1AU8qb5mec1i",
  "key29": "UYCnMQDQMQEADEArYvM8rcEQUmxTKT6T6NUqxrgmbLej25HjiRhtkYdFNxyUux3gmdp9beoD2MczidnWHSADVdq",
  "key30": "4WiCP3ptZdFVnGdsWAaoLL22dLbAxf5uMap3wSHyinbi5G8KvPeifq9PiVXmM9bqHyEzAhcKZKVf1F9BfGzYXXjW",
  "key31": "56DGZ6fej6WeGwrH3GD3SY6BCF7CY55y3LVPTLU7pXF18DtxVRzUE8CveEkMsfG6kL2ue7ghUjZ4ddwNvXM7e2gW",
  "key32": "UTpN2kbr78ir3WgwaDMAxqEwEhtReqAqLRD2JR8vC4KALhYJju9YSkAo5zSbFuYnz558r4qLAsTcD1gw3uRtB9f",
  "key33": "jwQk5r6LtDtH3UC5Ne1AKkcnpt9e8x1sdE18beVUN3X4YHm215bEnmPCpw8QqSLrmXyDNE3m9wkwNrrL63YfZjy",
  "key34": "5hP46XStKcxvPfvKaTHGrjgwKGT9rdME3fVaseDmvjiH6mmnv4gP7AaVqr5zD2ETE5fhRkuvuY4wjLci9TTRD1G7"
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
