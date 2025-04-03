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
    "2NkdTi6hBJZCi3P7SNcNFHKbWSKy2s2QVaHoc3mH32sJY57GPmDWPan5PYaiDFusHiKiNEWLtDT8whJYVnBMqEAv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hkt14CoghKK8RgR87GVrZ6cZt1u7SSPneeo72Vzb5n8CJDLUtbvUi4iARmDhPvCvfozKZjnVguSE7fCnyWsqKzZ",
  "key1": "4SadKKWshUXWYr6cEraoDzL3YyZut4Kdi3zoeNj5RTocCbPgNFY2bCAR466SvEYW3hDoDsY3MHZmgqeiEuXYFVuv",
  "key2": "23GDfVYHCPY9CFyHQMPyQEP1c5e4yr2j2e5xSxNKRajkNGrxyzZXk1XPTQTbqbNW8QAxscwecNS3GBm5GoR2Fz43",
  "key3": "5FPJp2bCr9CFkw9eouG9FBs9QBvsG37skHbDQX5vt26vH5tknGYhxgbksT3VjnjwLZP887ZbevuJjnbRsFwyx5eQ",
  "key4": "KvS24ynSAW34XoRyw3s6A5WCVQddcmmXPAfzPjYmfTz4y954kXzLHcPcnUJfnfgUVNt8UxgXBmJpadtrGS6MEYh",
  "key5": "41AtU5f4BqrYnDankH8tGAMwKnX8Z4qW2mCGNzrkPrdBwaYjQb6RvbpNTAWwU9dKGywVZhQMhAQQESmR4WMirSfs",
  "key6": "3zBPZwWp55VovYtKxhGJtP8RZANWrnSBqjDBbfVpceobf8kyyu1M9Uda7GF4SH75ubMebJUp2FpX7tfWkCPXKYFZ",
  "key7": "21TqPRvbJPZx3ERBnibsWkXX5zMWceLTgojpRpdbw1Nx1DArr2LPLjCneWq3Cn62XxrjF8M1MqqnQrggM4J1D3js",
  "key8": "4jwccdf5k2HRJ7A6bALHPMQbTV2MjX7sJGB2F9sRHWJNpexT2J3kSCPb7feRsm6SNWJ1oPvQpeAKXK6JBoMkukSF",
  "key9": "5jnq89cFxNAht8wyE87auTsfF4wAVm1i7jZGhGFsj7zt2kWS65wxtv7RKShvzGjM931byUVUoDKAk1aQo8fjGfk4",
  "key10": "33tvw3TiWutQxirgJu5oQE6hboHDXemPAobNo9a3cWN62jUc3cN5mC8eztVPBtnKqbjjwDQJRLnXw68rYDQyMGhV",
  "key11": "62sk8CnYTTy63j2vgJ9BybAVwFoUGc4aDB1xXTtDSRSQrAck6AfuNieZbuem8r8apLjo43y4odZPRwtL9S4sFf2V",
  "key12": "217Yfx1dwa2nqiVaPMsLAbEWCv8JJALivyhywo3NYhXvNfZ2TYW1PxtVqBKgxUroPVMjnuhKMCPPZBCKAxrZEg2a",
  "key13": "27adcR7r9cjf2uBrDspz2JRgjnwXpaKQNztWKqeHgewCXqmCEYQ4jwwLaVY1LKmPe1NA2QDhXy4HftwrRdgEnBW8",
  "key14": "49EQWp3Fa3ZyjPHewokJqswFECCRa6t2uv2YqD7RT5bwi3cTEEbcccfs3sjY4nnhSSWamVeiZtqFzDg2spJdMzMB",
  "key15": "FAZwyJN92eoDXYFaAV7UXs7AqghHpNa5cWiQA9kCTvjtJoV3CoUSdkAyfBWDUCfhijsyZTU7rgdXDC6MEzEMmoz",
  "key16": "KtnksNmdF4Jj9Q1u37pnLjea4yQLWPomUQ79M3VX89smZAHqSq4phdXpEeVFHRyxGDpZcTrs4MHVYJb9YZy9GSJ",
  "key17": "qu18hPgosvctbo7UwmqNDvSevjS6DAAh3zHFY1wtm7q3wE3wDX6kRCqB9nmcp2YMnxRokuSLFW2ptjsVz6jGXhE",
  "key18": "3oS6QMJEjcJtUwETwLyDa3C92VffbDJksr73DteXv2bSvAv7DkPBEd4jqX9ztTCEvcxWLdkrNmRHSwHRXwt2cvQB",
  "key19": "3XjgdgEeK68GgHW5BKf3HxE6mhhPZ1Ets7V9Rt19TLqtSQqsmdP2ZNPbGpzjXNuQ89TfjyBBMUH1zxJLQfgQBbez",
  "key20": "4QvhR4g57nYi8kpcxm72cAoeGsB53APQccij75aeihZaqxnN39aEyxEPV19122UuREcWbefdKypAuJZyeUNv5wgT",
  "key21": "277gGmyYAX12ULJa3tZoYAaKvz7MK1vDLiCMku13bRV6FjEgQJnbB1u8npimTKnsKwp2GvwRjgCwSPtAADhEdiEa",
  "key22": "5r9e73HNEhroi4nuuKGQNHPp3NsWiK8QWj1rTonV2RciYDr7w4RFnznexUJgkVDYuLqbJzTJkiXmu78Digc9Mi5T",
  "key23": "2pqaWeQyvkABiUMzMuWiSCACSy3EySi8oK2AMpatMBsKyixKJM848DcW6uxNZNFXr6wNKFGAfet5361mEkQJ4oFB",
  "key24": "cpoGXvmUrbwKRmyUXJkQCvRKcFXHbyCbUeX2cWY2cbDYvYb9hR6KAhbGw9w2vvdfNTP8qcCMjCoonQnSyakGeqD",
  "key25": "3jHuNgkkpZnhxB3v8oMANC8zvxNKTQy3GHqvrGwJbrKye7Ada9mH1QsA5U8LbcTbu2hcm8FixUCXaWecQmJnvBcA",
  "key26": "49LAjMznfZ4rpU2RAn5GAZWFCFqZPGVKNZwL67VPsusewWB7fzDrmzSo7QR9roPAggqMkfHSLwMF5VPV9oJxRFCi",
  "key27": "47MCggpc5wdPyidnerFUCwVmAMNGWuik4FXiCW2eCSDYkiH6AGBGNxgUAKgxv696bEhDH3Nxcmu4T5Hww4hTJMcD",
  "key28": "4QM7bpordrXsoiMz6iX35pvxfYYghpZSRm21DqZ9oSCyhYkJaCuNfCUfBJGf2ASBY7oaEKJkTiGQrYqRTDQVTerB",
  "key29": "2hdWwQVqehEgr4zgFPKebmTVMnanvcZMWjuGtbkfUXF3x4PH3rVQDjs8QaST8oUH7EEJhbmdV7v344pQ79m2hM3n",
  "key30": "PZx7jj4pbagZTpEZ6fpwhVBzoBsSTdC4B1HUMQqUuuYRF7axCkbFSydH7szE2FtVWrUJ8zwyXpH4YyMZcHmbe3M",
  "key31": "4RkzcTXiKiDGGSCT9hPvS3v52QPsQHLh8pCTUJWcRBsmgnxCjPSkHHch5Qw3EDuT41SxYrMXVMwqXJm96ZPoiN1T",
  "key32": "4erZbNq93z8KcFhBtcEgCDh2fu9w3EZzzZCcvqqutmR4T3M6Lj9xGYUBGqz9WjNWXWTyt2EZiioMYyFJ3bdut96k",
  "key33": "5ioiGkbVBWjGfQW3m7FqG1Z9jsZYjqw12oi8gpqfbn78kbVmaaa4xCBgyD563jXRMHQYub2n8j7gFRHLTjycAB5U",
  "key34": "2j1gmwu46azAaYPcoBpvE7Hi4CsvhZrUBJm2LNep54NCB2qciRPQtyn6GKBUjb6jkHodyrDdNtHkGKDtdrD5uszt",
  "key35": "42MMKZhKUwrXQmuRt6CUvQ9VFriNnu8Ku3F1CCBFXiz2DxZEwwyGvyjmqCGzmUhn2Fq7uqapS3daxxhxh5vjDkYg",
  "key36": "21M3vEU5rJdirg3DN6j5JM2kKjb5fRzKR7urXkLEAQgXZARFkttrzq9NaWKu3Z9WJPSADjL37QxY5WW4km5kcccK",
  "key37": "28zSsBATwqvQgRYCzBjym4hu1mqNXKzrc8DUzm1zTWowkkN2KS1fwDNhhsEZLbM961qCESuTnHn8rDgFLfuAJSFU"
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
