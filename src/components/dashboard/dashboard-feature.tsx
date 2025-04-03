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
    "2wHKCRfmndDSNusPHvipQXABogpUuEioafKTCPgyLdm1f2FXpcJNnEuw5n4L2xdDQHSXpaBuhXKHVzpR3jgMsMHN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aAkafrtSKj98VJhYGw81wpPa4MLXaumnZ4k27aBMvLDD5Sh6MxcqAxjUeRBJ9BCKCxvzzYnMzcLV1ogNkevFhxD",
  "key1": "4emHzRLrqqD32VshhrhFJmYUHkmATtGxqVZuTda4vwTgkDM7UjgbUuT9utE7HVNXYgjZWb9DwvU2HaXKxJa3nRVv",
  "key2": "2myNwzsUZ1j4c3ixE8LaQS87NkqY5L24qZR4UZ9x13SHUtZy7FecELANMisyD4GXTKFcVwM58fyRpykpJ3CHB9e4",
  "key3": "3MQuPRcTYAnnTfu6Pyge5s2RJVT2uDd1vu1P5ntcujha9uxD3CG5MtSJer2xsngQct3vchU339ovkCSYwgxhmvu7",
  "key4": "3ChNECx6Cmg9CJvviBopV5AESdCCx3PUoDNgkk5uRSFjdvWVprBTGWVVgbHjtZyVUeXJQvdSWDEoERaRxjHDSzVi",
  "key5": "2ijzRn352Uc5nh956L5HQTTa3m2CVwJi6JNABg3rMuD35fSy1FazySq1WfJJtjzprj4xeVvcH414DGgWZS4dFHbp",
  "key6": "563HDCfkkXghtdDCQ52yq6jCfGcCzX6AhqYZoCH72gtLU22PomErDHkAMugTKi3SPAhZLPveJAtzvVTjH7SArduK",
  "key7": "3J62uJEfBf92ZdnhqdZiMmFsAjwU2uXyXcHwkk2Dcv2ivPyj9KZ24HFUJhPxw8DNASBoxxKRFmmUx4x2U67KN3mq",
  "key8": "3wh5CRqHJPxPgSoh4FEfehkFBGNruVohycnyB4n2VdGx3nSbyZpR2u6BogdPHgE8AzuZGHfRfefgK8g1THKhb3WS",
  "key9": "MbGQFrU76iEKjWFnsrN51RUAMhXJ9tk8qzHxSmCuVNKKcYYYHmbiAwQ7bZsvQv8GGKom3GQQXReqpRxxhJ47ZQH",
  "key10": "2EDMs3T8Mfc2tDhfjean8k8RFZx1eXtxEE96NroigPFhksW5sfYN5FC6fKRP3MNGkX8zhDZWqNsZDkiTddUXbxub",
  "key11": "MZ5BmXwuni74kjAqVQmpLB8wowWoGFZhL9kfYo5cRAuER5v2XqDk7SXRDyvhevYxkZWDa1cxtaHCgkgAgAPn5kQ",
  "key12": "3NjsUh32gbit3PZgda6yXo6btyiyPodm2UeR2gYUvt6WALeJVSVSgkSpyY7x3S9jJoqJcXeJXynDAVnLSavwdD3X",
  "key13": "AChqDFRcjkELedLsUEX4Pk3m6BEsxu7dsodhRsDWKJf7dw4wgTGNijrMvEQgk1omCv9gX1gcAwdzrMB1dCESfeV",
  "key14": "2pJ13RBqpLDkgswDA4MTMUgAePGGp4DTwq6jUtoAucDe1GHvzBWikh2HwiC1Xkcf6tSVUYUDLJCaGBAeLsP2DXwE",
  "key15": "5gwt92hJp2ANeKwqmxRPoSFnxP911sC6KQpLQ2aB2183ri9ZDwENGCspbcjmrQDTrL3iC94a1RcZeqXVwT8xe9vX",
  "key16": "2Ba55H5PLh6Dxpi7zbZueTf9TFVrqxpvh5oHNBJBBQX8L3KsTzvntz4wxujgWj7Q48HwfUFLdtvpxgwAUXEVhziF",
  "key17": "2DhuUoEMa4HnfbwVUF48zQFJ5Jyr5TFEunW4sADDfr9Xvr5d3sAvoY4cArqkQTxizzxvV3yZKaq9k264r8aSyraW",
  "key18": "5gq4z7KNL4b3dic9rNWBkzgtms3GDJVCcMiVXAnwNysW25fpvCwykK1UQHdCkt8HgEzfeMQKdmLrHmzZPUNMMFD7",
  "key19": "5BZyxv5FqgqrjhWZrZQ4g7koNMdaAGTB4A8HHx2mmYrZcfKgs2bKNNNKcsQkNYtrRVXtuwYhooT2ySSykphWkd2k",
  "key20": "2SeuZgy2NNqKngn1dBCMFg1KF2wxGfJgZc94cQzcjp3bMbATf2DJ8dSYx7Pz5yXbBSMvzaxhq8zaphU2LMtQ5ZNX",
  "key21": "483Yme7NY6sbARm1V2MZeYnV3RWAQiTkcrAqoZCKZpen6Q6JxJM5WSxvsAQ8WBceiijq1z2pnu5mEbVkJYzGSbaT",
  "key22": "4VkdpuKQn4G3sTcY54f6W6jakV55vDn7BXqart1j7BLGLeNqvNrjVTRrTsLEpAXmrxvZULFwhiEPbAYPAFHQLmmC",
  "key23": "38LpSH68362zVLHjF7dCLoikQfKCdBBcNUbdWXcF1Tnis5Mwdk2vW2n46HcZC8BLywtKbd1Mg6nhjGTgTjm4ex8z",
  "key24": "3CiiM1zfqSP4KmacAjLTCLUuE8kvF6LzrDSZF5pHPmxYAxc1g5bgQz5FXtoV44ZUn1bgdbqsfr43YvoSrjU4rW82",
  "key25": "5PeMwFQEXKQ3Y8L68xPP3cFHGZEvScWxtPk165PQR52WBbr9z4ehoaNxwKXGe4nMeYXEivSanYf81rH5SFLX1oJr",
  "key26": "3yjCiHvboESUedq8wzxbGBHRCyoHTmY7apTUdXpHxreRtBfnMx6y6bNJ3e4dpBEQkafp3C81pmGhHPpUEXG9fm51",
  "key27": "63cBgNKZ9VvmPBtL5ePCCenD63LxzH3Aeeor4mR7v84qNPvRUnpfNZMkVUqjbVrhpNtiLcD139odcpAhmV5iG559",
  "key28": "2D8YLVqCqgd4YhiPW5HpHu4FNTQjtkZmfhrpdK8PFC4Qvj7P7aLxBRb4ZtAdjfEf8yp999e8EMeRrPCRDeQXKTWh",
  "key29": "4Qnb9i6dndyqB3hho5fEC9M5s16f6zwn6B3bL9YGkKYLxDui6uKqj6TSsg5HGKkGfACYBxrKzp6RW2sVgnsu6EmG",
  "key30": "3NLsJQ66p9sHThuBwmeEuBrUDr9AdFtHCV3LwD7QZNeC6dsvuVu998Jji56GDpBM1R7j9Kzig44GPGppNn8VR6qU",
  "key31": "4wGSYyrwuDmDwaggzQaL51idjaR4kU8aV15ATKhWQQkWrLH3y5xWb6crpDnQWbhpLB48kL2CvUKFXFq3UeS1G9Vf",
  "key32": "4AoRvv4JzkpAExq7NgNWKLjRbzZs3ThufFu638TCFTi9hH1jjmt2jDytmzYn5vfzcACNsMQ8HsNjdYVH8NzUpFX7",
  "key33": "tuAqrXUPtSj9d4Tr5e4JxSTE9m5wJQCQmYYmbqpEDBfgryUSQ8b8uwAHiXGMFnQikGHJTGQ3FJLcZ9HW3owHq2V",
  "key34": "4778JGsYc14CKJPg6n9sRCe9eFnrsTrQ9P58u5cyQD4cf6p85GzkB6LtJrbbsCyfBuspVUaKippGY76JCJKzuTAN",
  "key35": "3S6LuabBg3cvp7bj5PpYUNxMDUgWRTiZkyuQbFRcREUMpWwHxvFWu9K2zbcXD9FsCK9roTA976UKdE5VBFQ1uZvG",
  "key36": "KLCw8NTvxijsKdG2nHWGkk69tPfDvxjNMWDhkZ1YhzbNQFEwFDjhhy1iBcoVdW2JvCUCDuu4L22ijjEYHb6cTph",
  "key37": "5Qo96oVSjFwdfe2LQrEMCedn6i4izY76qHBvDjyFuyYPz7aPZTPAwiH38xVQ1DSSmEtzPBQbNUt3RRx1ebtKGUvg",
  "key38": "2QhVqG678k2hnEiiJFi1NVTGbxgSprBZehBCZApUzcWGjvJGpkPWK5wwMHyGyxHkWmBF6BTk3yxw83UbRBuphfW8",
  "key39": "5Mw2YmFSC6Layq2djvgjVZxYFiUNXgQZbqVark6w6WW6mR9qMyzxtCF69fhCKqhyEwsnqjsTLfMyckw465SQPYcS",
  "key40": "4iZgTYd3caTWvACF1dAGP6fHmdkD7MGqd8Ptg1C5KzNo4snKxvoyVuGnrBTWwAtmQVpLexPaQeKDW36UivSk6edf",
  "key41": "44FzY9FZg4yweRNwNHkJ8FijU6XRynRBqU7jzMyjvjx4YhqJe2ZL8CHRngees3uUqNUpAroKj8Z6e63Uz5sn4Dv4",
  "key42": "Y3TAcfJZJxyxfpoBhWdQCpeXHL536deYqsbohvbLjEV5XnD8J8E6RRBoNMZr7t3UvGaqAHXDKiU67NgGTCNBmNh",
  "key43": "2LTobnWepwRtxm7XXwGC9hVn3U3Bcx7t6BDnSZXjxzpgPiKwSsUDovGFA9xDatV9zoDgRxCacTUKQoF8ByeFLtBz",
  "key44": "2WHkf7oMuXSuhY9NwQXvv4QyAuiMddw1mf299uLQZVD6pPj7W7hgo1Tyybneu2tM2t8x28AA6Hfx2UBCd6pU4jaK",
  "key45": "3GD1PJbf28GdeJAho9iEHH4qs3khFxdbwFV8DwikbdDFYjARgkEmJku2a1HhvrmD7zsvUJ2WFBRAK6rGMPAh3ASS",
  "key46": "zQjzAvhgLpCYGCUb9qCkfK6Z3B3VJT17xRXWnv8Jv8DYAZFTSgWAcX7123uJ494o1X5hP3bThaMHungmFRre639",
  "key47": "1KuecFLeKUQCaxxvz4wXzKA4PLQYqYJQBSvF988ii8rLdRCynXULfVJsLwngLoPE1mBDVGC5Bn7G8b7CghcUjmS"
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
