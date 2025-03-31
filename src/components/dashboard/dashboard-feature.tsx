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
    "z2hpKFpTj22SrLDcYcu6VfCiuQuXwf4qbroKHETWrRjw4MSnrip9CSh9Ccw5J2GD6pBNVaNDpbizdcLiDtYKXXx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gD7hrTSzbL6gXW5Va4Nr4ou9cYPXsyL8xiMsikrEHcLQbZpu397dLW3LVCLRGyocUfwS8dbysmXHMGj16JxZi5e",
  "key1": "8roBZMsKiBeNuznDWgLyvWBVH2Xp7cpceTbQ6LDam4A1k1oo2RLn5jCdjSLxqwgkDVifXX7PpjUXAuC6avCoVSM",
  "key2": "4Dc3hj5qbDCgpjm7NrqKRocD5TvYRmbonVfZL14837bN4Ux4NqiLFNCybACiu8Hw6ynZYXvac4jGKbcfm3JwFqfz",
  "key3": "3vpjoLRpYkbgkQTnByATyDcwmL8nVXAAwtvkpJbvL5zfhKTjQMet6j5YmeiBqPqN8XRkTrsCe4ZEwi5nogLtAtMP",
  "key4": "5NheGHebe1g8PS4FtCL1fvXHDwRpPvy62CVAF8t5SZgPyBSNN4QaSjqEBXFQKM8y5jWkQyjkc7WhptYrubM4QfiZ",
  "key5": "5HnALrCKJMr61EmGnWhngVSt9e4U5zjYSEQaZCUbJC3TPFnRBnK3pw8VR7vgM9qhHqis1CW9qbR6oC7hxd2RqeDv",
  "key6": "4mL8qbj9Vx6zmMjvJoYmSnYxGP5ZqUbYviKyNjjg3SSyUuZs519MwqGYmEPN1g93Dec1bN4xVfQ3QihRsF3vPKEx",
  "key7": "VxsG9LWvXgnTt68QaZ6eVU2Sz4mSMLgd9Ni1YLcHADSQXf3X2NhVXesNG49AqhkttcRUxbpSsqe7iBJJHPQp5Wt",
  "key8": "5a5Nv5SrA4hMtbsW1FcLJ3K1uQuJBe7CnDfXzDB6xvqGz9bj3GU9WNHSKuPBuL1c7ZdzFE4pyqZNj8hTGFNvm33q",
  "key9": "4nSVErQzn8eG1dyEFnhziyb7htBMrfvNYQY8ykBHiHXaztEi5XCao6fVAsjWowDrCdkEWg5WJsn8ysvgfR7njUMk",
  "key10": "Q1mKuDrdz5YJiMBsgoowPXxFE8pbwNGEe4dk6cyT6LdwD1igj8weaokd13YJhSKGtNGAGP1ASNWxZgG4EkP36dd",
  "key11": "4ibcgnssatP32GeP71sNVrhtu8H9ZBdhjPkhmbsUKjeC6u2B3BapuMnYvSi3SfJtCmFqw2QsoC5u9dqomNs34Qa2",
  "key12": "3jhXsJvfRHDkQpF9RTqSL24qBGwtb46QAinqSV8ytZGwsg6fTKJYAUoLpbnjL6U9pREYH74h291sxs8MLLXPy68L",
  "key13": "PMYCzDvw6rmJMwmQWsFSyrShZiPbNHds9hvXZUwN6M8o1Ph4JgmyLBcayPDdT7f2Tu9YtQJne1oYfPAqiVewYSn",
  "key14": "2CJVbkgAapfkjagQHHGek8SVoy5GF2XhUs6Asz2kNWSSJm6s71c5HDcFq78Tsc1eNvL5dGcxkQBNQk7pRrQPwfrZ",
  "key15": "3nbwoz97etcA8aQ6yh78XwHLgGLJyyS8gQ5XynYNzTCAKdVR27Sp1xqvwoCR29dVHffDdFRWRTVvxBgjbdkUBeCF",
  "key16": "XtoyYQLzv5yUdoVCWbvB4ghqZQgcqkKmonFHG6VFLhUsTFkLcz8vNx85S2PqRPgQSAiL8r1wYt1QiX9dgyizy2v",
  "key17": "4p8NTbQVA2hcLaJJBXkaBb6HD7eV8f9dkJmW2BGqHJeWs4FmrXUX7ofsxgBpn4ZdPq745vPWenVF7h3h1SmNh2EW",
  "key18": "HtfiHLBp7EA2iovj6unkqPtuKa7GjCvDiKV96Vu9L9UWJvfRkUCQoUTGLWwDdLaW9jUjiBTYduRksWH2Bedae9J",
  "key19": "3VVA8GMSDKGznuHBc212rdZCfyaYrbEByZ2x83upHFfPjYQ5Svvdxtkx3aifaNX1UmSw4eVsmZA73g582ZkcH7sF",
  "key20": "21WoHhyJN6EEZKkgy66JTXYbMc433M747nsh3nZwCWAo1ynwcSXLY28VMGFz4TdX8SZNxkTvpWV8vNfSQF63e4uz",
  "key21": "2WKM4pcSApRXXtA7gC2WB7F4WgGAHexGNQjZzcZjdCoQgj31HJH18tEjWWUAo1uptPTVXA7y2GFo6EHXrT8jdHHP",
  "key22": "3VaZbUxeg9DbCYiiAF7NDunV61f2Cg5h9grqwj8f1R4BDPUdTtpasbwxQdxYnaTGS9NtALD3c6b1UzDCekFg5ki4",
  "key23": "61DRexvJh6RYKb8MpcxaK11LKFQEqi1RcsmsuEzhBLZghPYhHPi9FZGF1yWXAui4DqpJ7G3fH65pdEapq8dAT7MM",
  "key24": "5bLseT1Rj78p3YyjiuCPGC4JTHYA2vMsgvKAtp9Rh2BcgmMXLpfqZo8Z9w7QRfNkyStDaFtWSp1mcQvGSxVQY3WE",
  "key25": "22bwkxs2aQSjJEGiBYwEXNq2dQUVcsdUz4L6L7uARyQb6wSQJgKecbmAzJe3cB77jYyKoj2JMn7cLT2LAMJQMPmf",
  "key26": "3L3cACc3pM7fVUxkMEeMCr4rD4HMnBun9xsFcwucBwuiPTJya97gc1v1NUv8e3Td5pBWg4uGcWVhC97S2gT3ZtQW",
  "key27": "47Yc3XKVuDGGUd6rt1BTjj4Jif8NVXHmeXVCzTwPEZFnpVTnBqCkjhR9AYr3XpgWJrTNfUuTvqgSGyRJTDLbBmjy",
  "key28": "4mudTP8ZfEWRJp5YbUSxPgPvzKpkbckkHnXiG7pdcmJqG1tCp7pTDEyDMoA1y4KDaUYBpc2pqrdoeFy63RYiM6VD",
  "key29": "2Rmmo4L2yhrXKKntLvmy6p3k6AABx7k2K1QViAdw7FNHSHaYMFj4DcN1NqsdNsvUPMF1VFgTqJRyxMMGHkmKGSxf",
  "key30": "2mYhVYjbfepsQzT5FHw5pZQB6E1jboQjHMWzEFXuLQ2sMUmqgRuHfHFaZUofF8oshZ8gqSFUGLYqagmXmkdPGvKM",
  "key31": "2LHUv3FkLV1gn74WNz3RZhqLcs77FLBizCDTknfiSEsRUKdQaT8XzPQWvrLJ4CeogN5U2QXYY7oLeenuxuudXVLH",
  "key32": "3tbqW8KUMKK5kyS6EqbGP7bzdUL4MDPVdpLy7XwJekDfwsCi3TrD4p9aa5YhbDgXSkN7kSNytztgjsPURpZAXwYA",
  "key33": "5QkU8ogchLc9MB4NrTtp6b96j6B8g8ERom5FvKr8QcpeUbs7yNYaSn9dC52yaLi5DvVyBjUeNHxgaMDEmNqupXjx",
  "key34": "3wRKFAAXFpDDUtyN3PvjXTp6Pa2SUhAEbXkgh4cT5oxNgiZByxqvqxGkMykbbja2EidjzQrBFtHtrycDVKzdmjgD",
  "key35": "K6ZZAdsYm3o6Wm6tFbQwCYQt3NHgEEHWAnS1aY5LFzqaMv2XvFPurS9FyHegsPL8te9fvQXeRQ51iYd61CJYkX3",
  "key36": "4fRUmANcahtnQFno3STYmsPFJx5ni5yoKdaCCDibW8hjGX94MbUCxkPK1AAWwotam3S65JjzJWbSfvF3KDAv86Bf",
  "key37": "2KRKZyibkb34YR8FRvfp7K3RMP7rg3YAu6BQPNJskmmiSY4RoQT4CB8SCG5JuNnDQtyFRZoeeEKJNmVdF1ht71Wn",
  "key38": "4mLCC7xFLEfbgSn9H2NRALpcuZZE24FrDbc2oysjZAw6NtP11Y58oDaDCEcqXHPTtWKbYoYAxxovCrL6wsUnY7Jd",
  "key39": "31rN5c7493ib3jdPfB7zVQHRTeW8dv7sepKXzMHxSEsG1haftFwgx8Xs3Nasz56GDvSeCjHnPApY58e5YDK865fd",
  "key40": "4y6LJBJJx4jMF2vX5VB6eH8sPt28oLkaq7v9nESgtozFNEnFfCzow3m9yTYPHRBRgPHN58FXHVpwNqmh67YdzXuj",
  "key41": "4dCSLiGuS7cnzyWEX9dpSF9LxKZgzBmwisHC8ZUygcPJkYFcgmPtQx9RegHxNqr5unxpSQHULUrkgu2KM42wwSzu",
  "key42": "3H3EVv9SrxcwyurU4SJMMvh3Y2zD3VRdxhNG6Kx2Z6j5GEhjfY9xjXQz1gtyEQJpi5kwoErkavzHf4qvFxL121RW",
  "key43": "4oKJvjWGcEmH4RfskkffXBpHYimc6ucU7UCboK5px9HUivT2NxtYGecWCiGwRDwPcHiG7E6fwfVenKS4vYjqFgXM"
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
