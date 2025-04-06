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
    "2ZhmcvHneD5aRMwmKtdZFXdhJpeZn2uKAMbQ1EqCAme9BDLE9PLMDSqCdg18Xf7fLnySriVmzsPCmG8DwKHmnVHq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LnH5GrHD7quEpksNf75oQ58VRcc5Mfo7ENQNT7xUg35eJqBK1MH5xDWAu9epKbZ63gzb3YswY2GqnJRo5QELruo",
  "key1": "8RYLnqxgUVhVLE2t7J7NiCoABr4zVWQPbexe3xaU1ck9LrEbtmxq7SvgqpRAWn3TDKsnxcyxQ3qtnkT92edhdqi",
  "key2": "3Z9Wy86KKJGrKkodB8394YjHMWva7i3sHFYGVWay6ccgCwnQxJDqXe6kVRqBQxPHRF9g1kndN6i5oweoSyTUrdSJ",
  "key3": "27PCs1cF2KQsqdZtRV1SZV3c2mq5gQCuP2JB4BCna2Hcdf4BgyLo7uRNvMVjHU71YZd7wLen7yt5CbdxcRC9ZW3v",
  "key4": "3LKqbzY3zbcZ77saZm7ueJ1yceVRUuBQLtV9YMQR5o8hygWGNnmmjudvR6zWTf9xFKBu4s59g8aZtMTpxevvdcTt",
  "key5": "Pw7csw2S3paYHsPuVMtL7gzm5yapogcKmEEpfSm6NBz9P2fz7vHRnSTGwUCJpTBsb5EdyNeMJtFz4CfznKVSMfx",
  "key6": "5cA4pGKxVGUFNaaoWS2Vv771B9atvQJWnXacse9agPeneA4FKSmHyAMgcdrJBZPgxEvVquHtfAApkpEbCpREZ6nu",
  "key7": "39RmpT2tpnEq5To6aaC8c7TzAXcdVsQBR9ix4oYf95N2qC5cacreaK8CUySszeFgyF1xfsZtSocQGmJWJ8G6JBLj",
  "key8": "5dD7HS8b6wedebdaHHDFSnWr5bqg6udxsds7ZbD185Merkv6okSsXHz5Xreo6tB7AyWkuhnDQVwSdpb2A5U72nRe",
  "key9": "478ZLkfbNxN6mHFE8SGYt5nNNxAbwUrUKXbwEgp5JB4QG7XzertioHRJagztTWeH5S2YkPhHpy41X4NMKM675E2N",
  "key10": "5QqQ93ont4BrwPuWb6Gpq4RUzRivGM28VLTpJyaPeQCFKPA8hmkqmaoev4NXgUEh2pN5YbNTm1mS4H3ZqCwG4Dd4",
  "key11": "64Sht5AYmjBwL5MG7YYSyv7SPAr5LFQTdyrw5mve1HKRgUZ1EnMQzVuhLHKbbGT12XsL5f27Y9h4pU2KoWuohAw5",
  "key12": "FUztu6TLTShbyEdaU5N2UKKxFeqe2zMy6UpBiK19aJAo8BVUn43JG4cFiw8bzsoCYwZBWKFscz55mSHnDBa4ZNj",
  "key13": "3riPt1TfTiduq8XybeihR7bMvRj4PNHPWRSXnTDs378Nd7abhvPpZn2tFzLMVEn5VzYUBYKU94Xtdeq7eEELPSik",
  "key14": "4Dti1eZDz1dFrTNDAqMfuvuDs5N9vt9m7War6H8VwycJ9FfqQx8RZw9HvnBGxZERQpehCEVmNLqz6epjwTkR1mkB",
  "key15": "B9tjmrUQ52KpZjhgToPsAYy6WvyFEA65YiWgbGZkczFkoL7ut3gJ2VKjcYniSJGgMxks69YJzeXPcpPq3RGG7TD",
  "key16": "YtGeQE39w3X89UQuF1BcRbpLYvXrUxsJTgKtZKxqpjKvykKgF4ArCkAcamfxgmdx6oPgJGBVxqePmozEdzaWGnt",
  "key17": "jnKeg2zEVGZF8Pifev7XwQRKjGwFgvweLYR7QxH7yfrLY4sXjV8HTQZBwrMoDWQJGB63gPD916B8CTKpvy3Qtv9",
  "key18": "rFbyvdQ34mRNMegiQ8fi4pLZehJKo8fFb3otjo15e9xiB8RZaQkddo48BV2H2qQ3Qam9AU6oVhUv9y8bRKZ7Z1q",
  "key19": "3nYiixrPECV2XP5m1REm5z3F77VgKcb4frf4RJ9o1pPjfxMWDDgWmXZXo6hDPQJpJks7aVTo8dT8sgGxDKtQU47Q",
  "key20": "4LBWwx2uGJT5vLczonsm7wua42x83pSKHykuqWPWHGw3vgnBVnTXRDcoaChuLNkcEg7f6YGtc1HhNDMFWE5zNcJF",
  "key21": "C393wmbMHLFBMALrbFEFLAkQD49FAdnPwup57jt9ow1E7aDa4uZhoQjLVhbWRqgaABFMDPxYL2cRadtN4abFSci",
  "key22": "2xD22B1JnjqDhj5eV38ayfRvbxHXHYYgiyM7xo1Uqt8GaHdue8fgAemUa9GyhSGj7wMQLUpbrbxvFiyU8kxu7RUw",
  "key23": "25z64PDnM6iP7eXm5CqzJyfpN5pGwEp6CQMLcDkcJGm85d33X1gvbrRMstE6bivojwsbKXjEkdVr7FdkZeu7beiY",
  "key24": "38xqnrBJ9thew8JqAUaRWtyrvxcUG6k5K1QwnGARGN12VSok5m9t2Wiq7B6crkv4Migzmwfm8jmqLmDpTJ7gnBAM",
  "key25": "4kbpVC6NBuf9oPCDzV1jCiRU5WNwy5EPXV5MRBau7kEH7KviMJgmDqyqp69WVZ8UtynWBoXVBw9xXmFAtcdnp7Vf",
  "key26": "5fXYKe1tjWjVd5K9JrmPkQ5t9ysqcGiJ5AqYH9rSwBhnJpKMSjd5awXN1PnEnBgjqw7t9vRHgUtFQjwASwCNQVu9",
  "key27": "2yyR3oywqK1oEmwZNTRNRtmAvPPYkKiDkk5o249kr5NMdthmDzci8JsupHLcJDm6RiPXzfPnBgBhztttki41zvPo",
  "key28": "4b2FQTkLZmZ9MttRAYM5DwgnNvYuMtVZXVgkzJRYJLZRF5g8VtuBKsETKeKyDNZYjnfctvNtZSrjqbEzYhrYzZ6h",
  "key29": "4ML9ZaEnx1y5G6keKR6LSMVC4s55UJXjsb1fkeHArLq3wmpcmLqAeqnTQSfV8KK1yLiqvVvcaMMDms7FE6oAPFJL",
  "key30": "gvjgGotx15qoNLNaPpjdEbdizxnQzqS8x8NB8MrRydVnxPC7xhcsVFRvWx91LqBZyvn7pSZxzQ2VA4uxwJgJgdw",
  "key31": "2JgcaqqQVHw4c7D4hdh438EgwUBN4V9sXqHQrG7jUq8gwZZDTKN1PxSgNkMJZhbFXNUAWK6cwgibrepYY8qjZDQK",
  "key32": "5bLxWFoq9mhrZ258Sss1r5EXEHYYWUgecdfrpno8XkPa2GKF4BxSYrchdGj99wHKEi9FHasTM3hLLegGKFzeDoid",
  "key33": "d3YLKXBzFnCqWpKRgvaQUZ5JWguABL6D9XEg51446gWYr8t2CjobJMYEtXCtd2dK953yANZdLewcT4MWs2oNBfh",
  "key34": "58qiWMvVx8cpuoNFQHVuHRRYDVCpxjbHwrf7xRd5dMTJem7Uyi1KfwEJPQiAM1dCMFAQfKeSRsTLAUmPXJPiz9b5"
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
