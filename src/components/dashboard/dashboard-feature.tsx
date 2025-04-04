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
    "3TwZ2KFcR12k89g1s8aSppAK8G4mLK4CWtUfGZFnUAAq2ZsrdvMD1rMbBCPxXWsXq6dYxQoNBRxmhU4RZvdVyq6Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cmnvViF8J54QtQzRfT5Kam1GnY9b3kHwVoCoLWohDjX1UuiU6UVV8oZcoJ7vow657RfibZZnN9nhoTLpTFS22jS",
  "key1": "3K9RYYkd3vBt56h7FzABQiqMnSNZNkLKqEYhH6fzjt97X18zSUiPFCqgQzXmRe8UwiS4N6qoyuFeZWTRvgLbbZSX",
  "key2": "41yyLTTksYxqpPpJvmZ4paYtuHhAZ9X19tsRRtLQ7M5Dx1fpPpfJoyEN8fdJvdBtfCUBcMJPCfvajjJcHqnNAQWy",
  "key3": "4w31DVUy7M6ZXjHYNZZBZPhYR5gWm3v835pPNeLvjPzXGRmj7yEkRSJ3h683VTbA9oKfNpAKNzZmEdPVTihhB25L",
  "key4": "Rk2SJokgKsSsGbxCMY3EgGQD7EG6guYRLRqjmYr8F35n6GqBLq7Ew2t7ifGkALjiFD3tUvYUwvFa6foqX4RyAWa",
  "key5": "2GYfEY2QtFDqGyPgjdHDL6T9e8dn933cUFda5jnCTc4quwaXdMhzGZZrKBfhAoHghy6ySbLto1PRYGhJJmvdjWNd",
  "key6": "31tW4j8qzq7JaBX9NuubCmzreW9GNVrjJnMcNUEfwo9tB61gQY89VDhPpvVRUJDJrPEWoXch3grifqg69ZX7pTch",
  "key7": "xYYWRKRRM2dxwLvdq8jbixSFa26Rw8VQ8gTGSjyLaZMP51RA8DLsWi2suA9YcbJxyDMY8hHFWxv3BYFiwSRcFeb",
  "key8": "36GjTcy3HBLsqkCD4tcns7K8ZgRstiDLHvxapvxGVGGoF1Va8P64Rp7RFqx8BjrcmFbR3sP8znMNWDYABReZgABc",
  "key9": "Ci7yjP4iU1rat3pnRjbUwyuBeJVLG8mgQcAQk7vqZRNgdfroxnVFwGAcj29bepLH85VXzFNmN6NGjhL4ff9bXY4",
  "key10": "3uK2Ntaj8qmG82kXAZteb6BbBqpsEmTYqE4jvJrXHbfFWEsP2HKgX8zTji4U8ZUWYwJpHkupXe9H6ALsEoXMhpEP",
  "key11": "4usP6MGQuWSJHdkTf3r8jZYp43paa1y6aEmE1CWyPS9GUSv1ZUxqnShvwVYW3daFvVnNs649JW7xSag6vUha2N2Q",
  "key12": "5mYziLzUNs8h9bnaMWubRTgZyPZjV4BqTprSEZewiZipEJbtbYUf2rRZyKvJLB3vV3zbpAxD3zuq83FqZMx5ztgt",
  "key13": "62fRNY9PUopRYD66G6i7ZZczXJsDGpownHic8roYDErZ6dwD34xF8x6XscuNQLundHefyAUHSR8iXrDo6bf7rAwE",
  "key14": "94qtvWAdovyFkHzQqYjEFkoZ3ecyZgpXbcDRVH8PP7vQ8VjdTd2fNUzK9aPN9rZYYhyMRGD7KCUmLjE2HtYaPV3",
  "key15": "3F98d7QLhgcepZPdfJFbeZyZmgBmRJzKVYYqZSVdhAH8d4fUvEsGp5SfSnjH9FLyS4R2vjN3UJUqxoLywopHdv55",
  "key16": "ffM5933aGWVHKmkUfyFwhRkYkVuW6kYZoDWFb9ZD1MWuTe6qEXLMHDzNy36aHmhDz79PLxEyAyTtxKLkE3vWYFp",
  "key17": "4Kp4YPmTegx3N7tRPyB6gR2ZShFuR8TZaqWzWCWtAeYh1vVbVqP7RnLYQPbhvMbYQRuw6KpiC5ANezgCAWgw8xtP",
  "key18": "5RRQZMBDHhcPNmz1D3oPEP6YQ2wZaDQFL59jyH7CBXT4P1ScNm6wSQMUXt6aJea8WqU5Y92EZmnkVi5kMLtPZ3jP",
  "key19": "3z3Qi71T11aAJhUj18JaqVvs9dctzRxm8SDHTvBNU6G4dZ7rQV1oBRxivzDbs2ZQRboUgzeC5VkNJaFM5EARAdT2",
  "key20": "3nXupALm5JsPyqdC5m6U45KVCjabj9RjZJMda1cuD72hNRXLHpQZQUVRxttmDAoLNYeBkHAGt9mFwqiAhcFpKVWm",
  "key21": "3whGBX3CYXLdad7iFf3myNVjDK7Yt6LnV1hamxqj89xNJtn6KEfepiFUB51Bm2hXDtyhd5FVd9pHz6aYV4MEwq6n",
  "key22": "4KmFh53Agv6nM6G4vNkX9m3dNdne4XDs4Gkr9jHQ7291mLiVisx2vdgXJUw9A2g94xt3bEGciYxjBqY1xouADYtt",
  "key23": "3Jwh2LvycnwM7Ybctw5wVF2m2euF19TfLWTEvZqRixghRtNBpD7eyuX6ZNYzWndLMUzdHkFbfJzQTw6WfRpefCwf",
  "key24": "4ZdZGwTuE4PTBcqp1wavnFPsqYu1oN73zDhFpo7Yyb5BaXyvPo5xSK8z2tMj83tRB7EGV6UxG35UfQ7N7SeBbLYu",
  "key25": "4PRAJYdbwVHtt3CuGV5ZxVbscvtxgnoV4iFhfC2gHqfGyjdpw9EvNwhE3oTp3hW4tZKf3Tn8YJBMZvGm5cV9T7JU",
  "key26": "2hBGCbpq2ig1JQnhbyR6yH25o5XrFxuwZuT1SUJ2CHCeuoQpTdsZnNtTFxcofTgJAJ6hV2urWWtzXotbkb1iEoKW",
  "key27": "4zAr58AEoXMPPxvyRECnf1P3gxtZuFZJF2QN6gdC2zyjGQuJjNi7JD96s6XuFnXaUQBkpQpzKDiRwhDWLfXNshqg",
  "key28": "2Df7zo5nch9JgVozGc3RAQiJGNTnscuLZVoK4ASgAu3jHsnzT7q9W6bZ6ufWQgLXEJUCH12Y4Z4NREcXLykqcAsu",
  "key29": "41Z2Zz6rGtr2FCCqzgZuM2oWCYRAcmdffsHbvS7fq5mgYfyCHEznMmPB4v5mnCmsSJsAnkbB2GfwAUtzhp8mnp42",
  "key30": "4em5B9cucWckRB1Zd8K8s3DHDN5AHR86PCaumUPkewYpJ9FsZyC784p5CvNw9hjsK3NdNhBGvvc25nZLQVyLkAL1",
  "key31": "4EMmi8CQQDEp2j7LFDYGNoS7vt63h3CQBo8YPtshMnozzJCysfU1g7MGGhmBrEsheSEuY9TBjbpv83XrtgCD1rfH",
  "key32": "4NyKS7kmhaznbjL4PEZZfiPRUkjmQsCfuhPfFguxgCKeduUUv6bHwNf3r9B2oncfbDQGhuqaNBo9raZhggpRqJL3",
  "key33": "5nydZTh3ybymwTNFAkZ9D4fdonMDuwiHhQcLpAN8FJY1oYXr1Z96sLrNYDAm71kdKCkKvhRnSZyUbj2HjjNGwzRi",
  "key34": "4Jo2f7GTPn1wTqL1u5BaomWjQ9JacwhyeNuyMgBMom6pcSMSpEEJhUf2ECpSkXPfz5LhBQ7isU7gbo4zNQ83F8kj",
  "key35": "4hYymX8zcgmD85vkKtCPdb7qhPnVYjutNKStzLdakJUxHkBpkfQ9iJgjZfWiGhc5daQ6Hoiet3g7cZg4S74dHNq1",
  "key36": "2xzeGurds6NwaDsgbtawXKhn2A9uJNyF45SU2A82EkLS1q9cMhw4N93MuQiyXPirbZJZFcmFNhEH6kJeN2itjhUa",
  "key37": "28AsKY5BM6XfYYb1uQjjno7cZCR5K5z1fFJ7Pto7YTaaxP7yTT1DCeP4285arvnsXaosDLzFmBJjkJnEi5jkxkJx",
  "key38": "cAqydbg3dY5wN56y6BfoDSxP9hEjmGnx6pBkiyiB8VJfVR9MkRn9vFPiUrRYjveckrXh122oWRCKokTvYdsaxgv",
  "key39": "63uzwWg48edhV7YhKC6rnwNPg2wSG2BnZYg5qLSywE9gS3nheTjjpUkr76Km9zegNZouyf7uHqrk7qLb3vuxMLTn",
  "key40": "44TsiD3b6MGGSxdWUiZsSgajzdec6vR5d5dnz9BZ8yKKcQcZz1h7hPYXDRQcmmUMJgrfiTc7wJaQsn3L4CYtztCv",
  "key41": "3DWN9Ye9C2AXdR2R1ddfbsLLXvSbMLWEZWpZdsigrhoD1Qm6nH73wpts28tau3NkcPW1XAwGGfw5SoBHKQT39yzL",
  "key42": "3Udc35QkUUDwPM2rty4PymifYK3Y42Brj5rVpWqQqgRQrTm5sFTY91E1Cjb1pqtr8kpa7q4NFe9pAhP5phGyVP2u",
  "key43": "5sv3dSHvGRS3UUCogCg1EZ445MvVV9i4XKsMVsvV5hcSfLEU8rThoDWhBQ1J6MvMLkpFXqGHzw16VzU18XotzGrH",
  "key44": "TvenpVG6n727VbXiBbr2WRV7BTjiCpwb7udCWsGwHgWM2frbraYQFVvGe2iYZzSphMP9fvSxcVXePdeTJK58UNd",
  "key45": "4rEdWJLWqxB4L8DECUiFyYP5aHv9Q14XDcEAodkDqTyi9CJzhfpx6mzeRxthZ6828uGGwJWbH7n3XdTgXop92dF",
  "key46": "5UDC2AmCfFLcW6yTf9pfEn6pbYBKCG6YQ5zH893WMg1Ne9KjQacGSmVtADqTpJzSfd8Jdr3GjDqUPLhdHjFGEqG9",
  "key47": "46dXYYRjY5v9KgnKS4MgSfXDTsG2TzdjgiYykALjnSD6ZhJ7dDjZ4zGEw3xcEJdtYR6KPG5nRpEPA6fC2PhyMhfB"
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
