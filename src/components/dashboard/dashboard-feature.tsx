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
    "g74xuVRUFM9JCcmy8uaVJmhGZfsFFjnQjTeGi8AkpTSSjudYbAhfXtw2E3Rk5x4YTBRy7xTNzAq796jvRCfaw91"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eFUBKuZLedUSdUNvottGeoBKDxTkGVHkiJcrj7ARDgb8J5iT7rMTthzGvnDFeJEux5scb3f6KcNH8UXwPXxZFaq",
  "key1": "5Vb2VP96shjMhtF2AX3mxHko1nSBekZnKkgV8k92yjipiAJgrLvyxtnYFWuEsMDG4hw8muVfK8KrhThMTXru56dN",
  "key2": "2L4fkoJAmREGg9kBGAoEmxFnc5MtwncQjvMJYnbp8AiXotLP21scCkQwXVsmshDibc4JevWmTwsBei6a3wUXzVcz",
  "key3": "5RzHN3DJFXgEGhrsvJXjhYiVoiP8oteQeLjTe4bqvvgKETuboPJc83ivhAN5c9bMS1pQKdL3B3gWr8MHUXot9Wyi",
  "key4": "3UZU3aT3o3C1d1mS8cz3iCJ3VoUHoZGn5bM6ccFzvbwPfNzGVAeUfG45f6UmNXeq92crxFjtjoRYf2VGHRQ82JMp",
  "key5": "4vbrU59CZKchRQwBKhPLGwPDRZJWaFn9aQmaGoyhRmqYoU1x1ipSFyxPEb98GoFm3PUKCUJQsGmAS8U4Bj2b9vLE",
  "key6": "5c5v6BbRe4zUMV4YkqGdLo914PjGkSVsozQMGzr3LggtyirwGNocHZSRxPe4gLNiDwSqqiDuPt9636EzYT3ZwJPJ",
  "key7": "2rmcG7rBx74sNZwqCjmytkJvSUZYiH7ATSQ62VLqjyzi488cUf83SUEFASb3EZfUpN2fnsw7A4o1GVXUaBGoFyTy",
  "key8": "Qpxm9PLQ1UcWz84CcjYBWmWjU8V1NxSXdDM6R9sYZn2taofg4GS88BD5B8576mS6VpuVZBcCovspq5Zoj9hy8LW",
  "key9": "5K3ReKERjujWNKrQLpsFtPGa1QHvXv1TPqh4KSbcP1PpqUpJFP4TzRxZ9n3fRMx6gh7fvGmebcuziiUk8gb1HV7b",
  "key10": "4MXpfRWDzJknuSP1iNNHVa6Ho1jS7HjMqEJvCDo4MhGaYvCNGd1VVFrv9i9F1AzxbgjpqTAVfpRECyU6w4BxfXAK",
  "key11": "2tbCA6A76JJDJz7wpjmLBoCK5EZYUE3vZBFV43beKpcqnigFq6mH7NyQPxF5NwKyde6tYaMqxQ5DigB4aNjpFGAH",
  "key12": "5WqAKoFN7ZSrgndpaCzX5zyMAZoY5Vensc4Mm4As7cQTRqKCqH2g6nx8rRYaQmnoSn7rHzUkh1iQvQ4MKJWCFh3u",
  "key13": "eLzFao4Eebfkd3uv8F9sGng95DpQb5isGWtpRw4kFb5bAA9vHWvw5ZnuTHdDzuhuLoSYMZKqNxUXbcBaUTN3oz8",
  "key14": "37iUL5iQ3P8Zg3H7qcjjc6VpLZNJVtw55DTVwr1hRAnYNQwFVUWUJPdvvuyMT1hHnWpeYMd9EmArKz6CbMMCyKgi",
  "key15": "5xKoaCxZq6C6gJ2n54Ur7ihcShgVkX7WjskTx2wYMTUrSR9qJ7hkjtoSHcJaQpCkXtb3mkZiGrna3XDEYVSxip8H",
  "key16": "2ksu28nHF3zHBbrwA2TpBTVfuEgPoJzHvee75Z2HLMxoANpSJCWqR3JdKFvUnjC8qUMfcbCfCMPLniA1WhQa7g43",
  "key17": "2TKkZYce3SvrZTTW181zgCfzbHpFLicqWLWFxTR7VjfmPynGFnENMC5ZwHb9zSh3jHWx4YsWoxu9sq8antbgTroy",
  "key18": "5VwatnmBdnAeLuWUWhGsSkVjhpmDiqVKaxTyNFMSjJTtTAm8Fnwo4DbLQdZ2p6pHrYuQw8CywxpJBQrReqVbghGC",
  "key19": "5dbPqRXjeCgMn3bFDdifjxx76PyJZmHXwJ9TT7Fw1zyyvQJRFdtKwbuXrY54ANpiMUmG4yKQiqgdnMaq5E7QP8hg",
  "key20": "j6LmbfRc3713fhoogqvtdJ3spQoWLDWLXY69F7S2hFWiwVC9TgRHsn84osYikFutPoJhEPJMd7f1SiaaQMXjm7B",
  "key21": "EVXwwtBnULYLiWR1oSY3NY4dFS6SNp4dN2pv3cZt5qnfMTppGSndNEoz2fTX4TRWJxN66jVMWyHVfCYSzMx1sfU",
  "key22": "5SD9Y8VFDFkNLCd1kHQNoiUDKvr1QFCgW6afYeYeUiPihDtUPDGf6XaK2ZQ3n5rgUB9AwaofMUZg7EmYvSe46UKM",
  "key23": "3iqfsKjQ26w1ut6NgRiHZXFSbJAgS7NKpeRATcfYwQuDuoqoAnshbQrQ58Z8EQFr23nZz7uBNKTXSy6wDZXYgPZ3",
  "key24": "6rRSAtifymYf8nTojLWqeGr6B3DP3AAcdMLhbqxJrctuw9w8SGzdwQANnDRxzyy9bJRmEJ5BhpseAGQLZi5bb7Q",
  "key25": "3B4LWFn3umX1rhbCqxCKxoFpHuT7PJy96uSRAyk9rY6PTLHoewH2BUrXohjAZ7s6yneuF3sgCs7cc8rs87MatqoB",
  "key26": "4toPBmF5kfVUCRcD276KwjuYuDZaaRnByRvRMvKDL86e97cfcvxitGr5qVT3qtuRDwpbfPgJYxq5J3ZBmxWimjWP",
  "key27": "2UnnRJj6QPxustmNJXouR5mmg7Y2JKAdhpSRg3Sos2dnmpTe1erVhCLQXwx2b2zUBjEMdaPvvpgiKCVtXmAxFszb",
  "key28": "66C4nkGBgMam2DDRUjeaf87mUdL78VERerMiEmieqfwqyjgdi221MXH5MAZtpRhkmVecSoFsVr1sYdw53fG8HLiV",
  "key29": "2w4PeovSqZERqeB4wzi1ttJKT7v19tcDqf4zLipL6vd4Pmo1P1E6PpkztHYP7u2ZrdJU4G7YuXbYRFUL9RoAg9Lg",
  "key30": "5RnbvXh57G36mv7ciJn1BPaqiZTsgqi2Q622kjrcUsDc1jqBahsicgDEXcvQPNwAYUq2e9ibks7KQYLF9fiz3xjX",
  "key31": "vhaDvBZf2n3Ck2FLYT8C6tZChYbMFartQz5kdwzJ2KSwFoRKNNJfT3zhS565CvMuQtYdnmWKiWnDGZr5b9q3cSE",
  "key32": "3ES1jnzFjQTfES29JWHxiQ2axBFrumfddK5czY2xGoqr5K9PRZijy5XFTeZCGKLUCrgFcYZcqGAcoqDJCw72JhzL",
  "key33": "5FsJCf2YwDGQAFHQNxths1QLqUYKa59U2UzFc7EyZmcWDqyhNLvVCw5NwG32E2oa5i3maQUBAEUfZjUFcimukWzZ",
  "key34": "329q49ACio1uRXwMJ5eXXMgCACWZeLhYKmL7Q1ht7BGmdp5dXHBYezsyYyFYoFQVBYZobeKDSC9HLRD4FJRbcJzG",
  "key35": "4k1ChSrUoz9tZiQpeGiupKsxPoEjUCGTBKRhCAUFNNjpLZKALQtxy82CjMXTPpt5zHpp3PwQaFtx644vAxPmbZ1N",
  "key36": "4G1XK5Y6LTaMzneaybFauezBiemVsBv8ZZ8cNNVr8K4hXjxGMhtMF9PsuBC3ibaPqUBoYnbD7tf8CdDwyruoW6dH",
  "key37": "5jpuQRnYqYvkVb6QPXbzDzmHjP6HJgYXzmcSdSY5K3YnMJekaxQxD48Zxt4bpnc5vb4GKvXDWXJooLzBRCZNwAPh",
  "key38": "22sUxipvjKD5RRkdXBSyzWAwm5APLX5bHUY1mLP4KW22Kowvf5G4pxKgpktyDaSoCgUz7sDnVrmySNbaApWtTXNa",
  "key39": "5WbXcR2sNgwuJPjaAfFassMBApdfyByZpa4k7HdfdcpQBj3y42CW9LWXcWQh5bVHRSqmZ7ujxSmwe5EiZTWtiCx2",
  "key40": "2uc14JYNiZD23aYTjf8fQcRFqAvMyVfpioh3Ycteqcv2AWuKkc7VjfCp8oe3rPNg2tp82cDjmzM2a1ku7AaWa292",
  "key41": "NMQCGhsZp92SNBbDKVLZnFHBK4h3BDv9eyzWhBU9p3mZiBoJpEgakMvhjK2QDYp54adgtY3vwPwBg65tXHBApVQ",
  "key42": "39q8XQfBKwXn6Ugx4YrddhkzYsPVBnqgvEAXE6Kq9gX1jfdofyHXiryZ2Csj1JzxC3xAmfqMmKWD29mDmnthrfM6",
  "key43": "3C6YtYmHvi6Genz9rJ5qawKfkmThTTmws28zy6NTziwQyosmFAQRJq1MwgZWfRGdhZcJNYcnvGXCqPQLbMGsxpq9",
  "key44": "dq6GHvvFkiREKJDkQBupWUZxc8XHotWGf7UncgaKnU5BuNe5xWXSzbERA9MURUddap3wr92hU41rBfxUdNXCkHP"
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
