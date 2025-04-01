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
    "5y4WFb3rvhrXpEZ1LbKWQaH8oKK1SsWY6Ldpk2XXwAei6SXXcYFFyYdXyziRenoEDCNKrm8ZWPoaMvrZVE6BoE8a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32Kc77mTRpkvKgsmVD69JiSWnPPFwkvqw3SCPk1Yur1MpmQKzwk9j41zyJMdYiCgvDDPp7pUnrCZFhCGBtAX4vPN",
  "key1": "3RWDPEXTZFinY9kHDWH2NobsMngSKmB67a5XKPc5a1UQtuaGiWtUMjTRy566kVasz2kmfAthScQ6ejiwmU3GA92u",
  "key2": "3wJrm9rWJTsA56WifXNbrk2ixFpAmHSGqbjuHysmWYnTin12yFrhLn1AhgaxkGagXt6uD6Yub2eobvuK1kus9TNa",
  "key3": "2JzSKmpwWQntmSpg8C8Gb8UHKg6C9Ehvsq6u1gGT12cUbGWHHiQUTcGvYUenyRoQvGvVtWWDbVno96891vx2X2Bj",
  "key4": "21foGYPnt1aGMNBVnsWqHtmYMeiJ7HfZG7Y1pVM1Zscb9VCm2XwErjgtj1uQ3t7T7kPLQsHt7BmHjwLooWBijuYE",
  "key5": "5PG5BFqhS7EeLQg4FxvU29G3rvZJ5bYTKKK91QJaUxNtnmjgySVCffoCV3fRbYqRz4oK7QBc2pzqEEsPTjxT5td9",
  "key6": "2u7dJFwbtKjZSojGXC9dgB5yHRdoBCnHcuVuRMwAGCEngXGsNXqnYnpfegeQQJtzpWWb7JjiWA2tTzFjhhUp9yFo",
  "key7": "SZoDBoPHwVh9PDZte7uUMuozDKy8ZaRqXgDMyiFJWAUenXbcJppbgU4Venvo99jNqLw8SWMixzUm1jrDHWMuLG4",
  "key8": "Js7oTunmC7Cb8Xfb2G4boenK1J89qHi51v3YcKsj9W4S8EhvPtQtPQrE32fWcrRLTyJbRd1b6CqyS6qFpXgam9r",
  "key9": "2kGcejQySD3cj5zRGARusKWHpDB7eX87yJDvb44HbteWUFbWkXCkZBnzXNqcnLLWL1TkXvMgPAgyJpFrALJduJ2V",
  "key10": "MbZGigpUFHUnA4UpWdoFBZmMxNWRSySvV9NqZcAqQv543dK3CLgCKat9r2r3ND579MSRJphmhZq6LNcM1iqoCgA",
  "key11": "4xddFqkuB2YmxXSYuH7es7V1kDgrerFYfL1ocra88FfwJ2No2n1NbqnPbtVTsTzjW5ZgZawmkd2hoFG6mijDAfGh",
  "key12": "hXsRrGhsv7jJjtYsAqSkeN7adT7iDBJghPWrUhdiRzkyNHm1W1BopH7yrmwh5xEkvcFHfhTRjrHnEgq5zBgN47M",
  "key13": "3tB2TaaM1BbiTgjBG2sHPQTFHLbpctbYbztvo6QAWeMVfhvPw1urQsCnAzi7HSJraGaKcWUwBDixYDTubZjCLfQ8",
  "key14": "3fSEu8M4pTCmU8Lr4PWUmhaVpAHNhY1G86yrCoaXFfzg6oAxYL7KgsH8FwZcGmTgAkx5g9yFcohRrxp6YSciic66",
  "key15": "3NkAuf4jsZxebGf1qZhiFRAtNcMoMboy7FVGC4ino1oVWnudwxP62AbhsD8BQNzwTaKETuDTu71Rq2y9gUSsHWic",
  "key16": "4osc8KxSmqf53ZKDrMyS8L8EHX5prU6s5Pm7fup2CbobWZt2aiNG2DJMvLmeae1WUdvNfxYkqHGcddV7JXfkQgSM",
  "key17": "3g7bWAQ8Lg5QH9QLMcgDcXwmbfaY4Aydz3gjAcGDnBz7NK5hPRKT6PK5Hm3A6DQMrCb2T9yw7AUWqs9mSoQdcro",
  "key18": "5T3NAogP5wkz4Kuhu5pDn4kvcvEyswXor8ZDQtcEMfttTgcLbkm18cjE3SqkAxodA9MrNRcfF6Aq7Bfq5EzB6M6U",
  "key19": "4S5wPh58kpw6GzNaSyGkS7AyDuNdhwn56W1esNgxSJV8HyE8FBJbiebUZzux8TNzdLoHMUNGifTeTK8zqX4cqTKY",
  "key20": "4zTEQzndyBxm2qVmSAyL4aAvT2zSkNDPhibY1mutDfdrp25Q9Nv6dCMLpiRSVavbz2U8CbZ61cPnyQSRwfo6zdCb",
  "key21": "2WaKKu9McCfnfFUQpEp2E6Nut38WfPiihqL3adc4RJdT3fQg3Qmr5fkWzesdUueafFETdbKoMWZB7GEYi54oHSqd",
  "key22": "GQqejmZdT8eotKTZ8NF4abJVrYx7EBCuU9UyUWJ9F8mQa9Py8SXVkTY5oqbm7R5fMzmmUoRo2JJJnv77V5Vhkam",
  "key23": "2TvNopJRxJWTArAX5V56Vk1mUDNoQoz2UxKafRE9oyenNFJdKLVP5rgsrZ24jrtu6S8TUx1TJtAvjZ6bhUPtyVyH",
  "key24": "3xBR58rMvuEiNYjmiaaGjsFMrptS3yPtjo3LHsft476LVYh2mxgnsJecj2jpaQCQxs5N9yoxZs9A5zSEG8PTiAQw",
  "key25": "525EVyaS6KUF7rpZszj9Ureqxs9rYuKeCtpJhC8nxY3HQo11n3UY7Zt5rRsxkdPdBaHZe7B4K9nPS8KTtJMq6cR8",
  "key26": "5oFq6FCjZRqv2aLj9NoRHs5cVkFckDBPTa9uwqNFtFpTER98hT7Gec1tVcJvgKYAGCHV5aKcCZ6veFo1T7kpaUPs",
  "key27": "3KNpCMDZbJffhGLdDmTn6v8GXYzezXBUhuYs2NbdJwJqmN7ZkRa2fKWufxNZFvyrRhXUgAfTtEaxpNqeTykXiyu5",
  "key28": "jDy1PXzDz3wAtzqt22fUjk35uTDDLDWxh7E4xBceD3E5UYLWMPEX5VLRjArEPKW8TdpHUuiXaWj87rgUAFtLziQ",
  "key29": "3MiE7dWJq5Dt3ufdGxKf99i3obnTrdFmW5nssRTrQwrQS5NtFDTcUiQUA1CZMyVUZj5EwauepytBuKGJyhbTtC9d",
  "key30": "2C6LY13yapzN1WHtSaVqHUVkmyGtGWx9ffv9BiwqNy3NcKVo9eELSmgLjdQsopM8AzxaMK8yrUC9PcyeyaeTBwYg",
  "key31": "4oQHWkeMDuXYGb7M5kxszKUzBZXaMyfiRwzgoK3jmawMhgxGQFBXSQuSPwTJcvsGN1fopCEUSbihn95gWnjwCRse",
  "key32": "1JtsuwXPLrHRrdrMW6fuXwQmp8MXxFxfYDbpsT9ygjPAmeoAgnm1PhMSV7mP6Fjd1wzWBCT9CXD3myiyf6Thgyu",
  "key33": "CGC37VhbYbL5qGrzzGZoMtX7PYy8KG2PiTMqm9SARdNTQaMT6oj4kWz6yqxNSPY2Jire9e8ysb62cB5UvHG5gGE",
  "key34": "2eecRtYDGR9oKparR5psd8Mp8Td4QWhquiPEJtnHPD2nMBzpymLKyWmA4QwekjPbhRQeU82qhDCq4mM2QG8fUS7i",
  "key35": "3PgB51J8kXXVZmQZUTMXh9MAKoFr9H7aPkewcqrxoGfAg4bfv7ynGjZoNB5RWQSFcxLEAb8c2shZG6GrymZypaME",
  "key36": "oJoD95nLnGqYftv9jTS5fvVPRWUn1yfLbhjGX4aJ1oXBG7jEsj84KM3ZuKahyZ7GkhpE5BSEviTCGrbpJ34RW2v",
  "key37": "4kT2FBeQSzLKoaTzHn7JpazFYv8dNDriqnvUCLCxoTxVx5qx3bBbzUJsADf5JM4n12PTizTekqSmBqvoK42MWxTu",
  "key38": "24C5kerNFwW6iQ5aYYZ6s3Jke2Gq3mkKGaKV1vkDVqo1T8gmJUpWGJQ2rHqzTmuQGxm5HQAaUXHjkCWi2NgqD3W8",
  "key39": "4QC9Fun8cCM9PG8BiYV8CCPwU8yevDSUQZqxxfNjJt52yGshpCG7Rhg1NaNR215CiLzNfQfr3ChhN8XWNpW497f1",
  "key40": "5YxVqhMYyoHekxf4psV6DpS4Px21f49dYU9YRouvLed3jTcWBUL3L5KhAYjGgiQM6z8FxBFkUnW35N6JTEaBQVkD",
  "key41": "Sc6s8SiRMPvUJCvo1jMCFG8MczbNcsCeRi7kBr4sZES1UbC8XBag1TjgURTRveTRzP7WaJE1gMLo6wW7CRgCqnM",
  "key42": "3PdRMCp6eQCUjuffeUwQbZJVc81UGEYmKNxsrP6ZxitYkJ9gBn8dr6gnHPDQ5JkYwEoAyrzFE1c9j3xNgQYsu2a5",
  "key43": "2qsi39MDPpUsNtmyupBEm6HmZC97yj1bJtWpKykc23iBDK5TFsfGkgrkjzvsGLrc8dRUN8dmxTt5TXYwTv7qZegX",
  "key44": "4DjoRB1iZFYR2JN4YHrFyybTcuf3EhRErkX29dGpFL1mBoPeD53yCoYBXPfKw56GmQFrxNiGMpN2g2NcAMCe7L2D",
  "key45": "5nW8dKgTeEyKnQTAJ9E4Yrkb1N6BuqoqebLyUgGWBeqzJgKaVdzfhDNUyumVeZkHNE56Zd5c6JGynb6MWJWxTYcJ",
  "key46": "37rzPQXCMJiUdxdnywkmDxy3v1dJVZdGr8AhgrL9DconPxuTMY5QXtvyzQye6TftEbwFLvAhon4qeQL7qHdUUAEE",
  "key47": "5dHXLHqykJPTwveVvzr44RHZgtW2fAHsJHJgycg6D8U5g53FG1e6VPRgZhaLeTywbEijajD8dW9EWKhDFsEyJSzo"
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
