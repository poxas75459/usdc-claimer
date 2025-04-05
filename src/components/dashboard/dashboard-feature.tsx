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
    "5FZ35o6MKrCTSDftGr25eZmnkf7GCNSR6DoyaUyM3JGNbvar4FB1EiKQ88GEw1dnZZeEuBC6xytTVMP2W9HvzsZZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kzGhwCW9qfU9otnJ7bGZAB5aUzafDhj7MvfuCykVVjDwKHCMefxWiAPxbg1NJjJvG9urwWYgJXquTADiEjs19sm",
  "key1": "4XvBZEaohx7NW4LNVEHkyj8xsNeUgugitv8xop44cqUZpATiqmhYk3sAE67txUv5jf89SUxxa8hmfz1EYQyrj1Be",
  "key2": "3p5i1qae2HFoy9t5cM67Q2Gn6LE5YXMMuCdrzQ6LJjZ7WMi7ubd6NQNK339rHwk1zEkLFbQ8e6HN1hrB1MCoZZ5M",
  "key3": "2Z7KcrJH2UmW3buy4tE4J4Dwea67AE1MEtQFMVB1fC5qg6LjuoRGYrAjcdnfK9tSSiw2VH7pWpJ52LJimsaPUB3L",
  "key4": "3Qu5BxMppF9FrZ5evJasUkspxVTcmnyno6rqQE8QJWdhEog7AiTagV9yjXPVqzDPY6gFp1noGMGphoxxqRS7jcua",
  "key5": "4EMuFtA65i7sgpFA8h9BFeyoZJoHyRDRBWvzufsCBKXrPARxmEepNViYvfGgi2J3LXRhhmfKnAzNpHWP2BPD4msd",
  "key6": "64XAaoDQ7R8Fcff8WcjEGpN3g5z5tVNcfNw91HV2jgHnwJPQpBu5PiQU1QbdMzVcmqEBcAajBchRgbBePsU1pm3K",
  "key7": "DqYPDCPQi8TW4Lt42RxbKSY2Sr8YD8SaJ3u2G1dJRGgPeL6NVWjUqRYY2KEnHWZRKc4DFV2NMqj6F3YuLYo3arB",
  "key8": "4UbfGATdTcnmwALaBrq5G52qBev8FPGfsyaERhwrp5dAtLdh5eoPyZf5FbDxi8BMgJwVBFwCSoQHGCai1yhp9pbR",
  "key9": "3o6UUgX4Agi2sQMwz4gK9JGJbpHbRaq3nau2eXx7pXcDVezrLWTpprSE5z291rFYPJSgXPSWeRoqu9mXFZC23Ppq",
  "key10": "88EbwPyVtFh7cq9YHQAx27gbMDQkPnNqFb2qtF45WgASGSpF4fVu5jucgD1uKGWCqoppuQhsSgcqrJvi9NZeFRd",
  "key11": "ysUBPaauym8Fywdkoxd1XHTWTFnHVJjK9bvSQnzyxR6ywGvUgMdqjUqBJ1KcTgoCgUYkdjSRErJFF9xHoopNARF",
  "key12": "54qSg8SCnFAvAMivd5jPhbT6VmTZY8mhx9iZY3vP61cq9HXbYN3T4rV8RW6JMqF6it6Fe5fZUBigCEdUW7oocy6B",
  "key13": "2ysUJgmvMjBHc5nSovEh8PHKqCabWNQVEF8xUpfW1wPraqMom3deaXpinTAF8DCzHcSDWoLwezXGezSu7HUi75Wq",
  "key14": "hVJyugQ76c8UhTn4SqcYF3S5HSBpxJgEQfcH1y1aGpVwtj135RVGLUyJqBbSeRA1SCRVCv2QkadFpSiPTF2G2hz",
  "key15": "iktKZ1jZ6533JaQF1oXeomRCsn3GrDMTcc3t8cxUwS5E8PnXtep5tRWMRP61aKyaA2FUYHHUACHfC64cg5gZd2P",
  "key16": "3fPNkxPjDm4FhfZ3M2cL4KcDk5xz3GsYmhh7RHaQEHHCYoWLXb7H6fvmxu3XvfFrikdy5ZMoZWcbxy1458N6MmAa",
  "key17": "5o2Gm4sDr4gAanXKVrsjfJdA2Ub1rxff6t5fxoYNtuhMs3KMWd3i5HNZPKnhfzhSbaRo1rNvXgAzH6nWj3HgoyAK",
  "key18": "1yHLaQBQ6rCh9T18UtXmgkHmQ5eSxgkMmYZUAUp8MZxQWcnRykPWraXquKhvKacnMLuovGfSMwX1ivQkTAGAu7",
  "key19": "2nrguHGkhox3sZ5KztSTWxa4PR1i8FvcRU9PuFQZd8tYJw8XbL2VSBr82Eq8nW6AwHGbZiQ39Va1bXLknsWuVfAW",
  "key20": "SUwaHmrxtTBkXH6P3M6W1pMP5ADX4ZjBCsjmssx163GmtUPRcJDUhD8hkrRGmPt6yrWMDZ1iQFpENV3GhpaALcL",
  "key21": "5j8t7sdQ4WaqLUw9CftByQJHKGuVYjg6cga73VJqjziK93n8EZakgaMbmaYHCnALdHp9tFLpGGUUUcjCo76KmrAg",
  "key22": "4idBwaaijLzVeF8rd1n8FLkxtGRjF58nAdTzZXpeeUSbcE5asGGf44dzPgw4zRRHKb3HMs17QBTT61n1vrDmcPti",
  "key23": "5A2pJmAkz68rAoy6JfE18QuPbjz5bkTfBKZ8Xc8VnVYWjAct3ntX1S6W44vYHcwsUkcZNbAHcXSxJou8zo7BrhKc",
  "key24": "2pFwgTxMkMM3Q1LgmjexrBnxCAHzL8wi6PJX5AQyYCMAz5CCpZGRddLnBJiwUkyR3x7VdA3qaUxKC24giy1V8uy8",
  "key25": "2yWvNZsWQPBPPQPwyVZrPK1rL7rTZahSEaFPRTrdszJjJXWob8MT6f8RQWdBJWbifzE5zM48j67GcSdLVycg86oT",
  "key26": "H9cRVYizZmcb2bJzexKVBSWJcaXEg21cHWLSdHuMP21zMmMdXcNaoXtixBwm7wQqcgnNF96eyuXEdshaVpyusH3",
  "key27": "5E2nVhi5DbxKtrWQo9jhPTjPmgSDGymDrmsfp32hMN6JizdCCV4SWvL9P4BvvhDZk3fSRauqUHnzhxzcqsFpmpqj",
  "key28": "ssfx13HtZAH4TZoArFTxAKbGap7HeeG9oXcrs2Cwjed1bQEgNkYYgaG3YKUGQ1U97XxZ2hxkRRwHwJg2KDirwQd",
  "key29": "H1JUkKC2wa59qmN54nA2t94ZAgDFxqfZq9t3812hZYx3swWhD1KPNkxWdc8cCBXSAADPRw36YJHHThpkM4h9neb",
  "key30": "3TjrP89eoi9t2pig7Ks5HE3fWXwEcqysbgjnTrm6M3dYDgB8CzNREokqPfVadu65wWtNUw1cd9yQdixnHveAyHPb",
  "key31": "TjJFoSWSc39eM9ij5rPkasnVHHjNwvu4vW6vw6vWo8n5ATgacarrL1MG2NmRuLFRS6cM5atY6Qb6nGoo6YRa7ke",
  "key32": "39UABbsQ6MLHxmhgsCEekVYv3jgMk9pEujejokg8TUy3ZTHouXjJW59CyQoYHB3ig2zC8pSkBudGprZFxu8iUsq5",
  "key33": "5HsK5tNANq6QVzD4r9UrsjXPXAApKchWECJa2Xr6Zd8KY5n5VBgHMjygxV2zVkvek6gHycCotjeti2GpptqfqJ8P",
  "key34": "5XsfDLdr6GKhgcQBXMGz5aZwbmkwNySZDPVCRgHDscWyLEr4NHYDU5zsjKCUvkJTLPHPJHtMJ5KUfeRsgSVKVgTj",
  "key35": "4JvKPy21zy8ERTUbVteMapjFiEEziREW4KgpV1mZwermHHXXGEAhf9aC2TQwETMkcyuzUPK9uC5H5rpYArh69Fxm",
  "key36": "5yFFnhnjdy4Hrbg2UVH1evFU9QaKfjtnFNEpXMqBaPtDem8yTXUycJojMBKyy2K7sWgB7o4Mz2bwJNnWjqWKGB6Y",
  "key37": "5MWb8gyhPUNJnxhK3qV8sWshJn1FW26deJjzuHAVHRNAZDVgxMesgFVnb4gJtk7XEBYAFwsg7K5y4jZtVpBxkQLL",
  "key38": "4AP4EatXXoDwbGXrFpovCEpw24XHCDgXLSTwhrF7x8CymwFNVBPC7CGXSLQ5yMU8jvfheysdCSWGGGM27VZGXjJA"
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
