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
    "2tk1pmnHiRNKFYH9mAq4XJv3nZrrpCF6fWgHVp9QTn2TjF7g3pZfAtGweZ7NN5gbYAtUX4in9roQtN2tRmzUNwfC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NS657EyL3UpYMTnBNrkjwN8FzRjL1k3grRUrDtm3oK5dkjkRZKrmPP81regvczN8utpHRe85eyuU7hb3MDEya5U",
  "key1": "3W3xzSabQjPcZYZnHPYXVBDmBqiDzqzwF4CiEyptUUzynyCV37SNN3irskgT4jxrWGQo7Ksbi2kizLiaojLhz2q6",
  "key2": "3uJ4XtRvNxFj178xKbZjY6M9C6N8XDVMfAFoHTEgUgKc3ebACJVcvRC5bi97CQ3TiDkYpxj8CBEmhUxJqkLD3ffA",
  "key3": "23cAKLZquYvV9G74gDd6GjChAdztgsF4pyoMx7dwsu6mSNBHaGhYUX7HoPUfJSeVo1HTUxj3Nn9xSvuKGs2zbPtc",
  "key4": "33W5oFz3zZmK94y5WEgtgSzR815Xviq8tc79ZjQter8mQh8JyqcV3QxYNkhsVk7NeSAxgfQu2ErVM2WJrBPwJ2n1",
  "key5": "3wSQhqsx5xWX9mt1sJXWjGpnJc4aKDWkGhQJrxEGkMEU74rQYjCbjmR5b6a8ASCePQCrA8iuCiDstw4cHDHdQKHv",
  "key6": "5WokNx4mMVzL3h9ioWTRJQQQdA85WLqyYWfVTZCZGVWVRpR4GQMftuf1gz76PABVqrPYp71yxhbjCyBPkdptYQ5T",
  "key7": "32oHkW6KiJUGYBPujv1QTVw3GxA64uLGn9vvQRRBspJk4cRM7KugXxFNeh8GmrAR2HQ2DVvo9p47MxvRTncmgAfG",
  "key8": "67DsMgRdJQFkHk3mj5f7hQ63cbCaYCXyLrRjgAdpY6Chg6UqziQm6YNLrcanFEscrhpot4z19NSFDamsVqQmUv9T",
  "key9": "4ESchRBo6nvikoEbLMF6SRyW3YrF6C83ehWrzdKLnrnP13K52myaYQyShrwzXpdVE8gUD1R9qbrvPe4L5GiiPDdt",
  "key10": "4HdzMGJ2BbE39RdYzj86HDh95K1PMGkRdCbk2SyTP2kMJ2EKSAXiMagXLevrL9SLjGPjdzty9Veopet4g7fRLFeL",
  "key11": "5iXSgLBrEkcznb4B1oKtnm6Kag8dUY3kSJTribRock4ghXogRd3hNJ1TsLvwotwjsocUxQSVXMgvijXmmhpVqxBC",
  "key12": "4ADuDxpsZLyNPMQ8xXN6HjLtGzz4JkxcQBNJgyDV4xrn6wukLeq1W2amC7Rkg4DnxVhpg5DZBi8uzeV3M4XqkchV",
  "key13": "26hUipSmF42fcRwCyTFoKEsEzB2KsCjffHkNGT5mDEKPXYgypbyzBVLZiqFdM2UkDzpRRF8o8AfrR9u7nskGPxPE",
  "key14": "oYGzNdaT1WNpBXq9bdGn2oQycsqnT6nxTGrQVN5X8E3RGgXoqEbr3mDfLKoGmPcSHxKt4a1EMKGoad7i9fUnmN1",
  "key15": "2pcTf1SokmJ2DKmwXVVNFSqo1Gs3HDoFYbpLVRqPaRp7SuSQSGyUbvsgY7tLSdooGqNrRk6BMFQPyvjkNvjTP1df",
  "key16": "2PuhYzfZE8p1UWUqdBrWvXaUjKBGYDLghR733iQHYofBeXQqiQekJNQ97EHmRT7LnGJHdQpvQnKx9dj7vPyzJbLn",
  "key17": "63YLynMBHiTN9j1L3CWtPyv3ktemhicwZjiXbA3iNcRGu4mEp51NDPqTCXrYMdQpkesx4WaeR4pEpr4UpxG9RSpa",
  "key18": "4mhNRBrXwYvDfzKiD845NocovkCH7MTwdkJgJKvDWqCenuq5sc23Dqurr5eB777ovERkVsJhkqfYUPNTpRP5x3cN",
  "key19": "3CV7tmC6FDTz3DSRTAp65MGBQfjpoxnfJgwnMfnzkpKR9d6GkEh26sPFq6JgeaLC3yc7dB6DjHAhBtNPG42uxjHA",
  "key20": "2RVzqsNWbJHmorFpmfzcPmiutcxj2LWjGtuXBXG1F4kXs4jqNKqQu3jacyYtnYyxtRMip6PVqeWdb5aUqSDqdTKX",
  "key21": "38ceT1VPxhmLUrvoQbJQDVith4q32H6TbxDaz1TThH6gyvLc1ZUbjCVnSueSFku5Tn7jWDVSeeLUpQhjFCg83jgm",
  "key22": "58z7T1MYy8nKiDtzpL1XfPo6Jsxj3t6oSpS1m9drtYncgK7ec753yd9fGhqYVQvN3RffsBZ3fmuQT7p5p3Tg5pVf",
  "key23": "M9rth63PrZWHM7BULPMrBjoBSDxq6VJLCvK9pLCwz5MmMHwvFu8UZc7QSfYXHxbynQrf7MqXMx6mMqcLzyxyeVr",
  "key24": "2RxTE7KfcRmQZPui4MxgjGZ8yQCFKP16NdQ9P9PjMfgFNRhWwGwbu2vzJL6oY2dyQVCyXZZ3NV9JDn4cFs7VKkFR",
  "key25": "5qSctQSWguhDSUVYyiqKXBmw2qhUAgNZNnM6YTGgcXT2AAAFJLHmDk5ztEctJgTvx3nTYKLv318kT47xYQPqp92q",
  "key26": "2x7rLXn7Wf1CFBNDZAZ2j5sS3CVUoxtvopMS1erAdbk2hQce1pLxzmduCNXGT6WfUvYDnx4Ed75PrCw88iqQxtEU",
  "key27": "3Lbko8EBQK7VXGcP7jq3iTQ8tFjQFjLjw98DPApZnmrbqjuzydXNogNEoGmv5tjgEuYwbCyEXVuKXYxbQa5nyTTe",
  "key28": "5dUaaacJKGFfb769jawr9zJDya69F6V5LQq4D761GWUnMg44nbF3A2XLXUhgEJEh2gdUomzbMiXYgGdemwuMkift",
  "key29": "nzQ95bb3Aayvzq1YwhRvzwQv1y9uQW2btz2FqUbHwLaeNzrf2ANoSQZ4oQuMdoUdzDhnFzkaJapnMvDVLLftx2m",
  "key30": "N84NNMER5hqeAK65v5LanaAaBidLJGKyE4VuJUN3FGZVAM7acPKzoQPhcA3KDEAVgaLEbYkGyPXpzJKggwoFSwS",
  "key31": "5ZudCJiF1R64Nhm9D95DV5EiaqRyqKMsemgzjGR8huCxfbhoecszstzJ9yEtf1GbsHbxrxXSGoX26rSmgTajtYY1",
  "key32": "2YFQ3W2tNyXoc7xpX1Ks4UehhJosckBksG91FGoULesteZEdiBa5QFK7o5wB56GKRLVaWxNXwzNtsjmAnsuiWHDM",
  "key33": "37ERpQUwpR4PWJWSJGyvoptyh1ptXduCdffLwvxZeYGpoD65yQY4aKrJMSSr2n6A1TNgqtxY7T73ivb2kd1qqozf",
  "key34": "2CkGFWQESvNRZdgsZhp3SjTM8v6iNcvMq2JmDKtSzSPRaVFk51sX7pxPQvLbNkAKGMd2AWxBv6LNJdjieu2oA4Xy",
  "key35": "2wYAwkWMgQs5VMYzeowZ6AYvSFGn4tt1bJAmhH6aEx8zb3zujvzvAkMZYX7TBXFN4Zct2r31QTAyyi9vKzkJTC2r",
  "key36": "3H5AeTZi6npeu4voXA25LFs6cVoDAEsZYzP1ACwvaYB7QjbWK521fdztc9dziE1JFra7HHnxX5SH3fTxymuYMTsk",
  "key37": "4jg5jYkq8GJQHwuS91B9Sy9CKzpsFg3wbPCX3px9wnfyRciyfT3wtpoPrhwCKSBQBBTEUVsGNURgbwQmbXLFFDoT",
  "key38": "54hyPMFG4tHL4uPxFvDAnuSD6hdTiKLBDhLxctMHoW7rmegonjwPwMrnH8kAswb9y3wGUsdPAH92Ks8sUbmeET2C",
  "key39": "571nrqnBYaoYtRLxDiSQqdLHns8iYLHgYMkzywbi2ii1HYnNY2nZXjuNkFd8XrVschntW2DvbheGdVTEBAqJ2gcG",
  "key40": "46XuZsVF9UEcdkQjHupz4PcZjm9xFMWttL9STZgWbspzpXVR9dP7hDci3Lisbpbn4K1dZX4uUMdJ2dFKFuHsgot4",
  "key41": "52oz6xFJGAvmxU6hb5SgsMTcAUkWwK3bBwwDZAc2bZfLUMWV4hwpNgRd69R7frZgJu2M4nTwNiaaTYof5zzbG9CV",
  "key42": "3RuSKtkvpXCvmB89CAu9npEGhEWgpafRDLWrLwVyZ2epA71Exbru6EL8b7VjrXZqpqHsdLL6CMZyrLkEsgA7qCLS",
  "key43": "53THoGfBV8gpvr5nmZAdZ7SPiQsAZYHkiYoibrhScXW3E3ojt1SEMtXGxVoAgUb2m5A3PtTiARP6ZcpnLcuBLGSs",
  "key44": "2RZzKE1wurPeQLMQCZfTkvAp5yoKCx1rKspFg8i5XXzdsKhq72p7wkRZc2bze95JvxKRucX6d2oLJwsAXxnHGtzw"
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
