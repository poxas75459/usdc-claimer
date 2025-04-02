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
    "5KG1Zx6S6pTqXsMEJVubZDrxkeGf7wMhxUE9jTZT7sMzo74XzDAT6C3fzuJJeccmRtiUv5B7o6GXoNBioHjiH4Je"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kRLE1CBWF2z3mBCR5zaEMsGYiNe8vejVtRZ3LWvZvUsXTJfHnpBuyNqGd2iCdYprWnALLrKGP7pi2jEpFHD96yR",
  "key1": "5M5SvNd1DegWvmJpUD6YHZxgUr24TiFP8ciFGPgbe2P8MQeBDePMHC8kAYUGU3nKyvp2mkqLm46tdE1TjHYfPCDR",
  "key2": "XoQEGmsQEu9oXn7KnFifGkBKzNiM5roeUqAXjGkZRS6dkBGw1dnK3vgnzbkwi6RKr9Rjk6wG2FCoSAhr4zfCj3m",
  "key3": "pRttoz2Sxw9fiZfZUKPrrT5qVkE8u33tThauZBA2gbzpdS8VyHFzyM8PusEtu4QHdExRsRamnBSCHh8PWUhGW9p",
  "key4": "WLPJKNxTAdSCmwjd5EfzMSrRtpbuuGAWWuoA2Y9CNcD9UtqC7vvx2BGXJdP1SrmDkcJFDJGPpSj4HqTvCeVL6P2",
  "key5": "5uS6PMJ5aj89Eti43CiYD1JH3NbhbERLRBR6MzprtzABRKSxr1nVLqqs7jSbKk9Rzxw5iFRgjDXD7WjxpYMEgxVg",
  "key6": "2Veqwo19yHkd93VCx7bwotzxR3B4iZSuqkzWJFN29Ta626e7fETYTE38scPXGbFKYezyxTZt1W8YhZdE7W8WZGgf",
  "key7": "2m2UpUHhFJtpPABNJnPyxSjSLyYuBMiGADcQ1Hc5ysdsCp8moH6KV9fNVfCSEBfeVvCcJJbyT416GbByqw2gpR8h",
  "key8": "3Jun29wh3JGE7WZUxb55b9fKR3EBomqp4cgZPLtWrkPNuQzDbEs9Zm5acVkSZAaYWwmeUjt4fLzKxXPndNVNomnc",
  "key9": "4Jy5juJZKCm7gMfspfteHUj4PGkLnMdibGXtS2q5zXvPsX1yBD9cMrwpp89xcKnaAEtgM5cVVJWJK4QZLu5jv1hE",
  "key10": "65kWUefngKtjmsn6CkfcpzeZH9LCzxk2eUZdQCauve7WeGDvQYfydDxf2RYUVwaCZVb2DxitmAGPQ4g4Y1jzr3Qh",
  "key11": "3EinGGx8Q8Vf5DEfQUqS9mNDEB6RQ9iczQxLuUWv3YdENBvfLWwM4AiaNm6y69Yn6n1oPVN17LsEWyBoFBSgjGNX",
  "key12": "3vLsHmTQaW8MDfvhQUDokEQia8JUMfqivPbUGxbGjzk4dVZBWvMrD3g4TbkADuUc1YJQFzsYWwZLbBsuXEGy4kej",
  "key13": "gbmXUN7XAqAn7f9yrY9W2hVpEymeStZ1CXv2D9Lo2jHTVwvf4p8CmXLn95FNNr4JEUyw8rcvaLzZkENojG6HakN",
  "key14": "3SomWdKVk4QdNWqgzTVJnCFZ4SNySJABx3F7oKN546BbciNjggsuqoZYRgtfPFqcRykT2SkXwoTSL5BS236Rrj1P",
  "key15": "671AKv2J9LNaDMxFGrYf3HjUw26PhTySBSMizsVYw9o96CmRAVq1TNM5A2LpcWuxA99EB6RdEhrnsnu2YbjtZHEe",
  "key16": "3KSmbUz9bwkKUjMcE8khb295qx6NKbVhXvoj1kszWugN9UjhTjSuoCs5uEfrrnAd69kfUdP92C7sKbPQNFgWqAEA",
  "key17": "5YyDVAPnagj8VuZtjD4G6RfLYwVWSKcNX5j4KCfcfD4Lrn8V3UP4zi8wjxA7UoHTH2Sya7rumKY3UU4gA1gxFSgp",
  "key18": "5mxaQJyZBrdkVDeVkvrmBCe1mZr5xQ5i5yJTqagco4F9xi9b4176bCCkTtANKtLb1fesp4oWHYEhs1GcLfndXSz1",
  "key19": "64xhYx7zutAiseHuPrmq3LyXvbpS7KZjy6j5BJEY2cZw2Z6Nt3XCVh2svqitCkTVrasgZc4MDfrQp4ex3F37Rz7s",
  "key20": "8KMF8ymvnpwGpxXrYoGJj9E5MiLR8yhHoFi5pQXBXnSoY5d3kyssKEvsaznZG62exoorq86ph83M5PYB9EjC8h3",
  "key21": "3SuC3ZwHGdN1vuP1wLqKs8YpEi6ekRPm4vcqEiB8VpmjRUSeTKtziGifyhdevwS3RNGD5anANmjTun8xxMHu3XKQ",
  "key22": "21NCJM4pZ5gF6SdoZcg2n3JzE4qKbSSTTn9KzdL3jKvpMmVmL5znpYaERBJiNBCFYMMjMosdEKZUmjj3vMRx58qK",
  "key23": "24SrZTPT5CqYUBz3iVbi4Y2n4dH4ogUUdhF3EagUN2ncTtuu9YtB5hmxC5d3HsJJHHofzcU4y1NKF2qqkxWFXsWU",
  "key24": "2kDhY7GiALXH43ReELUM611jdtHJXbB5ctuLp8hqC2uoRN9FuRuKGzQuCkGEkhpF5sp2BMWUE5h1EwQpMGPc57BG",
  "key25": "5ph8AVgjmpgz3G211N14eTjK2TReYqNsfeWBE6n3gAhTEyPZmY5q1eGe9fqdNhyUSugroHSyY68MTWpqMSfdPztY",
  "key26": "y7p8cWwrk4hCRiT1mEGdFsxjwi1DGPz6EAU5hkawcXTWWSTkS2gjfifJkDX1kFSUxLrofsaYeJVnExL1r8P6vDS",
  "key27": "3pkpVBAogcPwHYk7DTpMxAdBfujqyP9gct3U3SDAtwQCPGoTozYgnYasteDFfuNw4FYTtMGNfNRCsfdfRzkJ5PVf",
  "key28": "2yd5DAzYMxt2V4yGvsuZJT9GoaZNRdoT4avdwjb25NUrjEw1PAJFhy9Pfw8ujPPwBqAPfp4uycrYvdW1G9xjkfo3",
  "key29": "5KZrVBaDX5cChw4qieWTCsSxqrKEub7an1oUrnikQbUvWsDaNq3LWabYYR8jP988HX3gXXZLh657rh7Ar3QmzpZy",
  "key30": "erQJC4uurJxiQUdaTuB7JmTDi4o9bPojb6ELbPpaghheQsgn1JYh1RmsA1yTjCwyKxbTH6oxnhHi92Cpp5CRasz",
  "key31": "45sx93ZbbCbb6fdpNJTWTGJ86WNFvxjTeTAz85n1JtKQEkr22Ayj6gPZyeFSQeMpG7T58gnvypUNDZWUFD2zYAiE",
  "key32": "2QZiCuXptrn1pJtcrCqLxcbSNoR5J2gs7N8Q5MqFaihWsxP6nWX4eR5WcXmzBfzDCmw2nbTDeeL4VK6fh8o6VaML",
  "key33": "4vNDD7HnnRAEzquNPymTAjMa1Tw9pUqFCsv7eVRc4aob5ZMnQ8yah46oW4fEAdAXFcgTBf6fZtSfB2PyvSALzHZh",
  "key34": "4r33c9auKLWf7y5U8jcVNok4og8LkWGibvUuaHYfovneSLBih3nTUHs9uZyasPbBMVoVgSKb1fNwf65Z5C1ZzGnS"
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
