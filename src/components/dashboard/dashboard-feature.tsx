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
    "5DC5yV2K8q5vJeAVPLzktmbCzsfZyrxct3Gnh9oas2hRmushifquFqW9pi9jpGuDmNX7jQS9YJFJVJ358PVyopMf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u7fZhEhZh79dDc5AXdrZhHWgQvym5qp12KgkscBfKzhFRodypbywKeUsTrZX1g8E7aQ2e4JbehAPopr4p6Uxne7",
  "key1": "47YHvwRG8fQt3PYvkXdvWTk531cuCPq7J8Tw8Bv5tTmKiFgEsUxpe9KgYkPs77NSBVKjHu1euoMjAMTY96KLiszX",
  "key2": "4DxhM4FobGL6pjidV99x1v5M28PsW4D4aN6Z3SHoLXFdpvxCMNE3JK6tqwDwVg5e9PnSAk8q8PJpNTET3CK2ECsQ",
  "key3": "5LMsWsFShceMohm2Js7yHRa1h179pZ3oiAWryi5V2ctM9M9jUjqEg5goRgAVTLzSCAc2NN7CUkTin6jZMyexhttV",
  "key4": "5KPufT9ZhQZrFTkfMCozeAUSy7cF68MVJh2FJPf4ygbNzPWA9Loq1o28ahkukMqu2iCStk5uzWqfx6EDApaGf1TY",
  "key5": "45QqYHCBBqJJiQfiWA3nAVPvWxAANbe9iP5vSVhoEffEYDWiFpZrCQX17XiEJU7Kw4ioBQrKhBYRachprLh9R5n9",
  "key6": "3dXHsV1WKEMrTJkuYtNE81BWbiXU9docdk4hQyjrM7ptV31aQg5UMDEAxNWdq1UkYCEr5WCZ71cuh23vBAv4mJrQ",
  "key7": "5gxv75QaFHvd2wr39vhxsMrc5VtvLNutv13o9Ybi6XxTY2L3j1oFgqtxqKQGZYWKjBqV4x21m3FE1BfzLPAHbjrr",
  "key8": "GNdvr6gHphJMMeYugr1eTtxqfK5Ggi1XSdafyD7KonUu8W6RGM2FBM3vXG5LF5xssYSEGthKwXaShk1ckLfxX5E",
  "key9": "5S1hPpyaPkSCc5vsgHZC5zH5NfgcZiyJugGYB87zes52asVkWBLhjFs4sgfYabxRWdqHejfr978rxHi1so4uAwEA",
  "key10": "5jdAC229HaLMGqRpmjUjEBVV8S9xTacYpR3tcZPbT4JHHiDrd2eaGTkto8j2Vt5xLmcrtxV5uyFAbL2KeFMr11Tz",
  "key11": "3QsBRFnPiYdEvzvCG98P5MBebBFRJsHabgBgx4G3X53Et89P2vv71D9rEfAPA6vJiqeNKKf9a6PEL6rEZJmJMJJf",
  "key12": "48dE9RnJY51DccFi3irEHzhMECAduUwfbD2tsbvV1JbCgG5ZRxHWrQFWXN53rDaUgvUHnFFWenJmAsiPtg2zN2AJ",
  "key13": "5NZphuodwyKVK8BjhMhCFEJitubErzscDaGEbwMPJemhPbch5jEzjFtQs4bBNuxWTYVuyMnkvDTqVA64w9CovJo3",
  "key14": "5Yg5uTq2TrAyoSW1RmFJEn1oaFgVXkjtprzajqD4qD757eA6ir9z1x1Wdh6QebucsM55MfKzkrqcBpvduZYGYRLy",
  "key15": "2kePYYqSUUi2KzijUioYw5GRj1JR6jr4RqVS2wqVkjTM8Q9BZaQDounM9rcKzzH8GsAjSFeTsZpezdCHEmoZ9zqj",
  "key16": "2F7J6WYfVCGfeSLX5qUuifAxECKf2Tu8xgSARZWBZChxXnD1zayDuvsUk7HTo7rxjPAMLZiy5ipBmKAbRhfFVydp",
  "key17": "4xsjt8XJzDXKwTp3HfPozBY2UtnyPqXbVDehPMcHRdNaTGco5L56LeEuX6Zw837A54FGdzQCGWdzFMvUvaHy5nen",
  "key18": "BenmEC6BmqvYHv68TYTBUrczgD3HHNQvGFQ5FVjhu1suvSC56y6o7yoVvHR6dYPPrQCftWnRHZ8QUxn52qrPwHk",
  "key19": "4FrYfF1DQHiVor5E917JWr7BLRg9nWfsbD83x6nt2MgjTZLmdpLRs8j97vPfzH4mb4XLtRy8xVnn7VCPgNDQ5CcJ",
  "key20": "5THrR4DWKwZecf6ugGgwTVFdYSvbLeMqC6B7dW2dFWC866vB7tfmEtvoAqckBLxhpAXGU1sZLAcnkJaquJFFZfVD",
  "key21": "4rQ578HNurydqwoAjhg4TBLVpf1h9iLjpefcsKMqrFCeMwdUqToWbopKgdQtAqmVY8Cm4tPr8nbYZkwhExBqTuRT",
  "key22": "3egYgENGVYkUPZQi3MnJbCn36wV7Ai3RiJLjJ4jzHdy3jUafkMh9tkKVnUoXnBiRqMpMHQGWqyLGSDgbVLZKtBqb",
  "key23": "Wnregwb3Z5TmYzMZubuUvdHUk8GEWa7oGGBTdrc34aMRtbK6qmTpm4mDcGcKtwcJuGBwubtmR9N7cotUKEjpk9h",
  "key24": "38W8uQ18ZRNBuMRwXHP2vavJ9hrM5ec9uw5zBE1sGsoyoCGs6CMEEsW3CFah14wqU4sSSHNqUA3xx1RXoRnDhjVW",
  "key25": "YsNCRJVAEqRohfEP8jHKsrpEaRfyWmUtg7nKzCavuMJgBcBJLeCkgXQ5qovguMgDyDg37nJU46RJGG3weurWhQA",
  "key26": "D2mhNszBQQXHFg4Aiv3swrN7ecuGFQD8g14EXNS5XgfH8AZynBVQ42VPrPJf6Y4wVHsJzQRS4DYkr9NDdYqQBVC",
  "key27": "5vZoU3CELvoA2E9YLBtYmsc83jcNvjr2fUEHk3BsnVchTbYuDcab1z8nd8M12ShaRENvjxfoEEpzHMRiCtKbUNvD",
  "key28": "roBQAaa32SpLtHjk8YThUQceESowfptWccboohyjLnqbgMDS4R6xwd3PFQDYf1sKGzvFeyEt33jMNxyWSgDFX72",
  "key29": "36iEoXRtTXqKswvgJwypdzLxY5xiyWKbKfFM9TYcPWnNoJVwCTwrp1NMGxvHBe14jLXdQudjyB7rnWDXYbY8a6HP",
  "key30": "5JirLB5aZCfnZuEosWvkSSE1HSgQ9axgUVF8AXX4Rug8zQkUsPNrKGoPQ7LGZc1wVTX8vbxohtykNrrP1gmDGwgN",
  "key31": "3gAFT4Ab3fcuEfR45fHfp6cdPXNCYudissrTvszZJ8LqW5T4fhDBnyS6dR5qYkWKSMp3axLHy1PLHuZXFxuVLgc",
  "key32": "7zi6nMepZK9vfrwn71ko1CRm8pGQRYoJV6LGfdM5RLVaCpT9f2mc8siJDuEZRmwoDGzXCnZFb1H6DqatgFnNBXV",
  "key33": "3Gy3mkGS5952cjxuvVVQohzVeiSGideCVeV614yyL7gWf18vzhVNSrRrKKq8VKTBzRSo1EZ6HVKYeuSCwcP5y5n2",
  "key34": "3Nk7XtmyDzjLMJsHXFSD5CpTagDSLA2hVHS1zZveg3Va9idJDSg4bfWkmuwiECjMrVPg6C6pLfvewVD8suum5nup"
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
