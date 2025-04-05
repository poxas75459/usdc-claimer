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
    "3KNgSETAGpBCvAAV4TcZZ5j5EsC4htNx5vKJK7gPVnvgpuCVNWPm89tWXT3NG7gSSwUWdobBgcF8kpzcaPfvzPjA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B9trTwS9mHkSV5kUKKZzYJKBhwdWGS72UjKpx9xzKhPhLSPsS5mbKPirqdKrSZo3KtxbHL36hSn1sghhXyhcyp2",
  "key1": "4kNDwmmkSco1TqgBLTJY7KYmV8XLusZ7T7Rvto6ijBnfvCJ1WSuF3QhZC7F3wstmV4ZjuKCtSgqdAgeCKGrVWvjR",
  "key2": "3zQBbzx5FYTMBMLJQGAvDwBr6WkjJJ3mx5HWv9b4pGwipFBxFUjHC3chqm8byEG6YTpeJQZkrLYP5B1ZHTmZM3vF",
  "key3": "2ET5fx3B4A4aQYJf7VcZzCcLnEqbos7NtAAECEzfX34oeZujkvpHeSbeeF1yVLdmNyu4BkhDPkBvP1goTQ1M9Max",
  "key4": "5k9ehbvZfazE88igeticLzBV4VmaShmfwzJWaiKAsZEEghEmkBJbVHgzniv9PJTm6DuzvtYvbWiBU9V5Fbfmjxfb",
  "key5": "2psPyJ7V6QkVbGiktFn286Wu4iynLxPR97rFarVY4jsWpUkgiZsQzR4Fed3EyaouBLB57pNHNDKHpygkCGvg1sE3",
  "key6": "4YM4NHvxhGXyJMzPFDtTRYxZ26SvzLFvMo6VinnbmLyWTgvC7HnKTeF7UFgCC4eMsPBRhrvetNJNcNZQSuBAkFDQ",
  "key7": "3i9pHbtCib2oVKepqkFiafbs9UWBbKPMTRhdgvK2yoL6c1bym8EVQtiBU3i9Uo8J3bQV5Ws8ZYBnGxAYbi3mSXoC",
  "key8": "4BWafaZYAekMA2phLpnbM4smWzqHpxC5MmKxTYjkxRWATFrNUNATMYYe5xaZmb7cKjh9hMNgY7P8W6ciav3jpGpg",
  "key9": "a5WoJomkwAtkK2RDbVe37mWL7EZ9hFmDtamYCMmd6sh7BZazJzZmL2dhfhhE2WbBJFtCxZemaQD6jkygDQVRhbj",
  "key10": "2vkdPuiYYu6ydft78ivPUmH7DTKS6J2qcmYdeRWMkcW5M1D1UqZwu3GJNjomDjJTsUTeiuHtP15m8Le2MxaK4myF",
  "key11": "3YVw6EkS6M2Q1XjNtp27nriRmWrJ2UAh6KKKDxQwsqnp4JevnoRtWZojBVZjJtj6jkwioJcZscDDwDGFk6pWzebm",
  "key12": "3vZaMnujJGTcNuv4xhcwAm7BU2VnBhBuuPMAbvTfFgxW5w9ktpSSG6MkzpjjbJMXrji3yZtwXtm6Ve6uJDQrHxj2",
  "key13": "QFjj79yFaYqgYkF92ouKZzByh5VogcXNH21moWhmHAX1B6c3pqSfqdhSqNiRAWA6zZhqKCADNUrqT45Af2zdyfW",
  "key14": "X7g2fzR1siafVT4t2ptVanxKHoVFyg6NQQhJ7TFchx23LfMwbhHHXRXnA3z6EMr1ubbJK6dV2TkhtnTxTeG7PAk",
  "key15": "2tUdyPhFMsRVa8fy87VuJUbotY9jjnmwtEMny9o74FxnqeWBL2ENGyuJGM2KDgHWJK4SzjXKZLj9Edt8sjtEtVMR",
  "key16": "fkJnStegb9RAGeMCsNvU1gHwd37MGxSwhBKUXNaUh773ZhN6Mhn84KHnC9cr1qShRowCbKc6YPyCnZu5eUjdFn9",
  "key17": "339oVPVPnngptxh5Zb5XYyQEJUySH3c5UMw9b5NHV2Gz5Df4qa4aBoD9pq7SdcFxPXtWbfVNenLBjyeT2Mr2omFS",
  "key18": "36a3wCKnmpjhvkgBH9JiuWSr6N1Ga7ZC3gDdgD9AL6T3MQiwzNKvzozf8wi3Qb26WAZBNYqGdkBuww6Ji7CkYPgb",
  "key19": "ouBd11xSr7qk1KXqscAZ22zNBDNCyiUbTNZ8CeeSG7FGajisrAcngHPpz121A7NDc9FLEV3uUsGDrGRwc6T6DzD",
  "key20": "JJRHWtMXoGb8pAtXZz6ipq1Gq6D7qhgtEeR8Y2L2XXA17hSp1KzdwFKrqbC7BkbSag4uBUQE3Z2wieRmVoctQR4",
  "key21": "4VBatEchq9EyPYrrTAVWgFUnqtZhjAVYwjEipBb98j4sEmpj1zeHzx3MMbV7NQ8zd2Ju68LaGJFnWVYh9hyHixnM",
  "key22": "envu5KRPSZetLdWWPXWG74Tt3AtrqYXbh23juNEs4wA2Z4N5J9J8WetcNRmjEuMawxcqisgCDudTtBa1PzQFGMU",
  "key23": "4YPSdLA8mpmp4nHT6j39j3Wi3jvEzbqR398j271DxFjQW1yfAN7sboDFvk6QmAZ93XQqsGqfbq9aXwZeSkXGoMfx",
  "key24": "3WZMaLSWMdmrtJj14JGsiU9o1UbbmLyekGVJjM1gKi1ZRxoFB7nHcdRMwTgjMhoCCdDy5FAYpFQSAaQSwWVwojsN",
  "key25": "4PdnYegcjFAN9SdSHfD34SgKUFqhjyeiWFZrHP46qdVhBFvgdKcjEZfn8t3c5ghfvRyzftqwkiNFVkKZp6u9vNko",
  "key26": "2v4aDQwo291ns7K9nm6WhaSXFiNo7g62meX9tnd37Phcybn931PQYqPsPNz31yQJyyCMr4Xb2nYm9i1WaLY8wg2P",
  "key27": "41mAkrAVYxEPMk5EcbnA8B1nBDzuZqp36iodzKvN3QynCwKp1i3AWwTv6anuBWyCmv3V5SNUcL8pN2Yt7u9atqb3",
  "key28": "3fLiRahxR8Bmo17xdJVLe82hKBRAMPM6m3MnrfEnxgPf1tBMWYrY9mbV3WozvaGBJqiPsLVsWacuq2iwwwFSZSsS",
  "key29": "33FYsv96RNLGsarnsaY85sFX1rApsMW2uFJdGQMk1v9EiMWG41efDmW5hGaVXNgnEoijJW5E2roh5ibA1sMk4D2h",
  "key30": "5jEtj4M4vpa6pP1gKBMvcZMv4b9F3skExbz4BcaTmdU2vpT5JvKXZtXioUHE8TSmbE9gCY1pb2Rxb9r3diop1iKs",
  "key31": "5A5ixJnWjAaPZ88tG1xcqxskgUueS7Zh1z23jS4aaPsSKthWkpmHk5JFzjPDimB4QKbjF92H2nth2N69L6nJ9nvZ",
  "key32": "5BVQ21wwKXKt56kk4Wco22ueTGvz4RJ9xXQfqYD7zNJHdWCnFwpSUwTpqDNBJeTXZABa2juMFtxN4GLeZUowPED9",
  "key33": "4bLpjmGoiS2eGvyYKrWYSpDn2dGceZBmm8CtBGucaBC4MTyhfzBfLAyUZdDoVS42AGLNUcdixkHPJDgTqnNUx1sr",
  "key34": "3FG5tnYhg8ZTTuwuviD7HnkTyhS4s9Bh7yh5C34t3mDaSkNuAUFZrtdE22NNW5mZfDFfKrC1hxPbpayN7Qfchu3d",
  "key35": "4hcc1DZbBoszkhVdEW4ifFHhgaFVLo2TqKjHrpo8NpFhFGXVpDPHw9AgMY94MX3s7cdEsASnXKJmKv7GfGf11Ezw",
  "key36": "Wtxzojr47RDzHdmn9xdkniDJHyAsoai4o1sUaoDdRWoCNGt7FHHUm1e3TrrnH5DQxbJrPq1eAWNp71KnNZMKCxg",
  "key37": "4LiBF8SWBgjpvDL6zTWbh3dA2DGh9iAo7vTSEP5BRW2jySu2VGwbrmSWxPdcAWedugcUs6wNefy3qLiLZ4Hcu3mR",
  "key38": "jwtHHpoQSQEEcCsWYuNCkzXgTk1gVtpqA6zcW5on1JwzJiot7pT9tKhsyRiZ85GCgFGTavXrScapDXs1hdtnYGW",
  "key39": "4WhxEXf8EcaoE5Y8wBoCochwt7DEdEA6Fki4Z2FkK5shZycg2tczsWUkWLQiQ9CZAzKfLFD3G9X274mymYTzLVRg",
  "key40": "2uyyDJDgC61PDCVXUoQyo2UtKMW8UXvfaMhAv47FSAtXaUhsyqT9p8ZtWiskFVUXMkaLdbf9crfk783J3vgXrioE",
  "key41": "27TbXnJv3aENQzHrYHk1m8tJNoQP664AaBBSPknEGzVNCCFnyELc6TtgJpoLQwWNjwq7vfHSvmi2ZP7Y8aebexjQ",
  "key42": "35u9gLjvBkhbz1PKffAeUiqxdhk91iFG2G9sLcL5qVDPcFFqDZ4JsLQdUJhGmMQ7guLazG5v73TChbDP2SEbvdvR",
  "key43": "3zrdWfyDKnBb3rrbrAj6i6sHfftD1nAQhPHRqCeYHA1izFyKfsoLed7RbCYuwZVDfDKysF68Eg7KNTU4MxvK53PK"
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
