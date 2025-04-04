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
    "2hAnWxFmFwvjFLx6QYHRcTVEi6BMboFAeJjFSaoT5GP4e52LxzKSW3d17sumCRjpKJ6FdBomZ1mVxP3RnvCwtQhV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cWjTadx8g84FRACHECzgtc9xMMSSVLRywoYYouYaShzd6cMudwVq7fQjJfBumTkdQMY6KPHkoa65rmbycCKYbaB",
  "key1": "2o3cfju3w4x12zKyEiozwr8a81pAZ3v68kgZDSNmg6ycVUTrBWTUF956UvGvgB54T8d2fsYCxXEAru62cyCK18Ra",
  "key2": "4HX6pDpte6mUSiC1Z2R6hManFZRjNXiQzdEqmZyTdRVyu148XnQ3wV56HFvjXBcsfxu6tnFkdS21EGhFYDS443r3",
  "key3": "2ChwFzCkaWDVp8UADjpvGdk6YK66BAMEPwuRJR53rkTU2sDGuGcANTdkgUVGgNH2PKzCBf9u9Fdec8tNTimKoKBa",
  "key4": "43zjV3uAafZpkDoJHyUYU83UWsWQCfq8CCD4Hzx8ye5uAmo4d9A1wDcDVidwxojm8WvNtFgCZeFugY3PFkZjUo3d",
  "key5": "59PqdPsQQR5r5eYfToSEAbsFnnB2Fy7zSmxeygrLEqfUHH8PP4Y4DFYcBvRPkqKeMAUTExNbcKhDG6eDGaeEUb26",
  "key6": "5dxvjc6RCrRXPiTHjeWQyd78ZGC5QNvDDQWJSVCeusE9HvMppwnhjU2pNTMkVLmEdAspiiErGtL7kNc1T9ktXnRo",
  "key7": "61FTf5p1ibrZh81N4k3LWkndekK3m8ZokGXWhTqBFsrSn19tSp9pbi9hKb8LMkqLR7MHnJR3n84yeac8zfxm2Kiw",
  "key8": "52b732TffN5Tnq2XH9iZHSE4cXKbbwDK3TgcFHMnSmYShah6vJDHpqGQyXLGBtVwyCLc7Mj4CoTLjcY39HaZJj6Z",
  "key9": "2Tpoz8aXNuHhMYMLcLbAce1QGG7nBWmqoGLvSBQP2EkEgVtEse6sm8hPMpopZmk9SUGVkdEbZ3v4v8BVNMCWnjs",
  "key10": "2uteRWppssF2i8MwHtwLenV8ZetVGzeuBH3W477T6CswYRPXsppvhvxDBxBE4yRh8du7wR14k5LAQkYBTqHn8mJs",
  "key11": "jRkbCigZ2kG4KGBYsPPdhTsxVwiwKckbpY8NREicpmVAvjuzcHJs5tKmBiXxKgs9ocubqvB8A5BFfuxTQRrD42M",
  "key12": "5Vyg4KZhqsQMNGDpDifGLjL4nsk8Srhm5UCkNku71Kvx72YremiTmL4TWkgYCmk9bTdgARC3LxhoeDHjapQADB3S",
  "key13": "31hkjAZXiWCbreVQLtocS5EcoCXe3sNkAYBV2ppvdwysa4zNoZfqwpmzzuXzH9ge9BJvvFy7xg44zZPaz6pqencR",
  "key14": "5kUEHvL4eQi2U39to9aDBrcFNTE1zjzPr4x14jhhLu5iWMwKw12h3UPDJ4HoMNXkunGH88YH4MHGAZt5eTQbQpzU",
  "key15": "5RGDTYNHgHvjzLZhAQNRQQBWWHKQEYWNFoMJ1m8fUonSZDhGzgLikaZbieqQ7bxMwoLJBVJuEqSUSBL6ZMCRroSe",
  "key16": "3bmDWZwRhjryEHRwbYsGsqJ5b8kv4VY46dMC2467FNfDJYVAfa9hXiQxWqkNX4XtAAJmiXV23QrLQn77hCCVNWzf",
  "key17": "2CtPGASJpM2RQVd8BMnwMd6ETkXYSAf9k74LxmsqUGuyJRhSHidMW3foRzXoJeJHLDKH3MK7nQJry9MZYA5eUJoA",
  "key18": "3EN4RnBPRgCXPh8kTV9LZTjK7goTXiE2u5mJ9VedEiipQuQcQhgwJwAC6XZVQ3TNQu3Yg9Wu6q853Tma8MwCBopZ",
  "key19": "23cDiStPLJFr388dEtknCBdzEgNfzWczux3HFf7H5AuwqqxNGAdQfLJiQBVBKV7t4cXJez9d22YKeEAQUURrKDH7",
  "key20": "26RA3sY2aLoVsffkiGieyxSLCGFGaXE5Sy7yHaTvyKhUneJPhzTiJ3uQweJzhGgxmK1hFmF5XGAWjSnwYnBBHfdr",
  "key21": "5BpmXEaBZLyc92yGv217Cq4hVJCAVa4kFEtWQZmvm7MqTLRaXLxWLjjqvA7e79rwHwMG7wrfeUAVTjqLv2AwvdJ5",
  "key22": "5t6hCR4eqaGSjGUmaa9hp1Ry4hmKgRgGc4HHWrxv2TAhL8X7fiHUAZ5m9A9WNBHXtXn13sFTKSwMR61dSwhkkgBd",
  "key23": "5CVn41R1aokaTXmbGCwsbGYCVhwQeNJ7onx7D11h5Hw7y4eVFPiYekXP6JFDxLS1zFPhWfmHu2DYyqRDVqrx886D",
  "key24": "tp3yMS6YMsejWQyRvuvNqgmsyhaC3fzG8ZtWqqEasdECzqfZmcH1cwcEPtKwEyQKhTUDyjmMutSz7EGbhMsKi9n",
  "key25": "4VwweyGxtayfkSwGEAyZ8ervRSUnrZakotYrHwVZs9nHNjrjUa71WcBxaUvrmgk33x7Hgs47xb1ukSC3XusCwSLw",
  "key26": "2FFP9YZKpKJS7WcUofw3R4y8M9g3QnoVSXWGmKyZ3spPkSh9g6zM6w5hTyQzFJ6pog9bctnkWwAMnmpT24cQKBGu",
  "key27": "5bdSjq4wtFvjr5TPVcGRbUPD6xhG1PgjRyNFRPbKRgMDva2inL1zYC6pSm2DQ8F2fubAbPv3HwMKGEKFtpqSjpET",
  "key28": "2f49dvLhQKd6LtMeh5mPYryEQkqAq8QXzYPa2BeWjyqcNenvXTUCi3a8TNgrfzaoUzasZbXbWbNRHmE3tLZyuH4C",
  "key29": "4JDhNSTuiamCD2L8eYcbhLahGk1TocBpx5tBfG9pPJ3wLixf6Hx26eUzreMmW1AEVKJRVyBAFnB9HRogm873psZP",
  "key30": "49XqDvC9EqdeB6ChQaeh3sPZRc7WueDZ27xtjsQUCsYVK6T8oZ8Nkodj4ZDgHqFB64Usuzxes3FAS62mkvJz5unb",
  "key31": "5Xs1ie3oimV8JKpJ99Zxo8Hc4e9WoGbLvtqs6wQDDmek1XQwi34Uw1riKCvXMwCUKR71XnozggfxHykVLHyrj8b2",
  "key32": "3pj8FUkY3SyDxGjc99Fh4jGcQET9ruzSuVCiGzeFqeYykfmv6Uf4eRZMkxq6zRr8ddWtsHwNTjaZXPPS4fLWkxW2",
  "key33": "3qn12TYxh6AcwKuMwmUa4WgBmKHmqpDRSyGRuSFkRR7oQWjfSmBKsvGvAUXrCtBNyBNcjBUe3v311rdi2C2VyPXQ",
  "key34": "L7HrQS1voNqxbEAyWDhoRohJuychUvxxYsjK3EH2ZoJfqcJBRoijJHcM6Q6RULt4V1RQYAWxSKBowDuS1VV5Trp",
  "key35": "5xYvM5kcEPopr3TB1NkZVnLpKmcF1H28hSRaZzzsY7C6rCgGNa5rx5sbY1TJLwXP7Dm78H4cwotL5H67eDtX2eGr",
  "key36": "3mtZYf5zq3gVyndDbXVUp1bc3d9mJht2BYxCnk8RpB3WFLbqjvgQeru2Kdsk1MQ7voC59koXU8yhbyYmipEu5vsR",
  "key37": "4uy8d6p9ZU6jUTe422xm4x629Ta9yS7B6xzAuuDze78Z3KvREnRhhyiJv53VpBEC1QV4RE9KBbBJqqg2j2ph4miz",
  "key38": "567qihrvAC7FJWvnENaYMMg8XpdDsA14jvXGzJfBYzzYNNRSSoeBmhxm3ShhVNGFf4rE7AA3Ks7CxnmEEzCrNact",
  "key39": "moDg6GsPJyGZnF3eW4t7dUukh6bizzFantVEuahZiPrwhNKmrCyvLPRrqaAW3bfvG1ZsSFvX8CtxQeSXXB9w4qD",
  "key40": "3m8ThjM4irDYM3pB7BCFxpFtqwsKyzL4Bbj8TvgEGpaQ5xKT32TijSTsMSDeUU7PHL4uMEmNhUmrMr9UTEVgCQ6Q",
  "key41": "ajXVPGLAWNwwkjmBnV4DttjqmmetutyjzcsfESh529AhterYzTEyrh6oSWNGTL45FcQkZMipRBwwc51KSmnHEJ7",
  "key42": "4hGyweAAnQ4p6RZHh3YhuSS9zMkHsUS3HuTWF9WGuPrN4RzRXdB66HynwnhiVZj1HHv4mfDaLQ8bDrokPCwbk3Az",
  "key43": "2iKbRdBQEpKTj75exKq6pN19fQgtUbDZYPX6ty3YzqkyrxfDo1x6JiSJTpqH6FWs7KwB7vS7fVK4PhBedzE4PAMr",
  "key44": "5YWUe4btnL8ixNAEfNoEqNfrdYdoDPHnF8EUJ69qYkVs3w17BPGkxUt4CVyU64QbJzuSqfs3HPaxxCp2ZQ8huJd2",
  "key45": "33aLQLLm9CEwkwdAoyx3wCpyYxZSZTDicTxbJjtYG5texmY5CWUUe2VqD2cpmhRM2wddXtnMrjAXaZUXYQHhZ2ob",
  "key46": "5G6UjX9c8ADCN9sSnVq8QxSDhym6HuAW7Dh26ghNNrmUksWfQhy5t6YbtMSCokPJFxQKHoboLb4psjUnKwu7fQWm"
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
