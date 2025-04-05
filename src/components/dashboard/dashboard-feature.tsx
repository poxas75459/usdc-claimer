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
    "4uSkBi6djM33UaE2NFn5VkBKp5PDcszt58tfCA6tfuwUBiSXc8eU4jocRogPikij1ejE6G7paU3YEMVVQ9ZF5fK3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DiWd7NmY7hnMpC94VGiP8zLssXDfipwRRTvWRqZeSutS4wFcZJ6SbgdXoRhGCCgvasULK1Mx2T6J3gwfuQ1TcH3",
  "key1": "32w2dc5ViAXLnGeHQZZ2mNp6RSSPME7XKjFDz4BFeuVbvjeCACLF5PnjcCPK1qEpRJE2xNqSaTHuBVa1P8MnUPmY",
  "key2": "5eVytwYRh9cmd9vtaBWG5H7xa7RTeVis2PMbBmEbf6BuAb5ZXApcHnkxthu7VgPkLofibPz4KV8kKMHksX9RCfYC",
  "key3": "4Pd6JdaRTunyAgnxKV64UPBc7NwrFW9WRu1uKdwpHu2YuDyMFfPqSVPGKdzThrLPnUi6uaaXff3ozDUC4zTxcRsz",
  "key4": "ig3sMP5fYnhvrvfXEJVJvEaBW4Qp89VuLQD9btmo4jHBtgmjAg6mj8km6Kj9mFRecV3LQuq5Luk4DSbHJNEu85f",
  "key5": "3SH6MU7Wn5tcuHZgJakAwG1ooj9AjzWYHrWQFzSpEL8H7MnKUsXvCrTtszxvDy5D5dBHRmyLGWqhjQVEFoFfTspz",
  "key6": "U6FmFKPSQuHgyev35xBxA5efpwnZiAhqhg8Wj5r9vJkpSjCNEWLcHWpQJEtRkaYvYBZLC78ni8rcnCgV93J8CP6",
  "key7": "4qit1BQRqeEeAGekKxsm7ThaMUq5WBRTDQ4YeWu7jB9P52Z3f2Rssderik1Z5E22qnisap2HsA4GZL8inXUbxqZ9",
  "key8": "2TtzJGF3yziY3t9K322EvL2o2NHfnzEoLouj7AfAbXk2qK5yiWJxGQdwTVqGKbTMUgmUpfn6xo7nyWzvHcAA9RkK",
  "key9": "65gZWpU3hXmC6oMWJMkejQ4VUwmeH6MpfGet2QJk773hHoXWuq6cEhGJL7vaHjuEXxaThz8LvLSsiTEFYdf96yh4",
  "key10": "4mcWSGmuspzHyZshWa268jTZrKsB7v3mmqVAAJVQob2sgnJtSczEBV5eFc6DEAgDq6LhALCeE7qE35d4ux4uBMzZ",
  "key11": "22nfMw3UzZ68tfMrcndqE3nsySN3qKk3RTCneC8p4ZBDqJp3Vc8siLdey2CX7Q4m1KrLNXLUqsFCB7o4BA99ErUK",
  "key12": "mYXF3dHPfxR8n6G36LZAsbWg6fEfmTxjjbAJSckv1qksoB9yW36XsRxsmd6RX9qLbUEBpSnrKr3t7bGXbt6UkGX",
  "key13": "3Hyv4XvqRnvrvkYsTErie2cYs2ciGDYwEtFA549pxZgyzSQS1AEG8tb6VBCEFriJpdepfohPve81TguR6VDQa1ou",
  "key14": "4uvw6z2KPrhfiCwbLV3hnjsEfLQoqrognUhnSMMBiprHiCvo9F8EK9PS34mrarCDyUUwNj81hL1zRgwZ3BhytQQW",
  "key15": "2D876vLrUoFNmDK4BrgToWPrGQdLG31WqzFsWa29XyNjWkkhBQ5GmrafgFTuSDUbB2wWMCVyfVHtTW4B6f4Cng5W",
  "key16": "5YJnxUKSDGpNr7qMAJUGC1RJTUbvxmvLLvjwQjPLzCJYWCMbT8pTQjiv59NGLJMMTyo7CGwm99yBCFNLUphi1WZz",
  "key17": "5Nxia1iNYvziL6ohd4iMxxT52nBnf73miEXiZsHrRqRB2F5mRSN7WMACB1UfdmBir3BBxut4SCRFWkar7E34YjTg",
  "key18": "3K32iTP7TxR9LritvctR53y4JqQGgEmvmPzo3255TS1TSTYBVscaAB5g1XjDPNMWFJwDHdpnE2shwNjdNMAztJj1",
  "key19": "3uQpmRxezDMcngrkRJYhebeUQmq2ZN7KQ1KNTvLVWHDboiiFzMMVnKdhqAnB51RB3P5oQmoGm1sY96MKi4Y59LvM",
  "key20": "67HtxbW6X7wZzoh43QkBPKTazQL1Uggzydw2CvL1eNCSUeFqSMaxAQjm2CpxBXXuLA7ZpJAabsJd87i2FJqxCZ89",
  "key21": "44zJ2x97X5Kvvwj8kaDn36EiJBXYvjufkdQkeqN4fNQxsTydVTz13rQspPc2qbrmdsKJFyTpNp3py7N7tfcSBu4C",
  "key22": "3d2ppkDhsmn3FBEmBbUV8fJ2cgDfw5hP222iDhXY6iFKyRT4wkBEfEe98AVDggYf73eJhibwXciEuXfZwW85i6vD",
  "key23": "4wp4xTJkhnXCKYc2hdQFYbjpWnX3vmu7FwyKt3NiKxLz2CU4CMfEh5U94TSH68zCtdRzgoxeByxF4GN9gWBWxUtD",
  "key24": "rqkK1LTzYhNH1Y3BE8wWdJZ7TvEvZbgMbDvcjG7SC8zZs2nHWrnfUmasQct3u7y47VqVVRXvM7RL97SQNve7zhj",
  "key25": "2kfX4w7FivaMFhAMKJBcveps5yYDpjJiCMi92qmwmTAwXz1W2kYRS1is953e2T9WtvxnXDhDsPQQ7TPkDhhUf8GF",
  "key26": "44sr6STGDYMPgFyFwiKae1R8NByXp4E3F1TX3kV4LewZFFKaWtEwdPrcuZNixoYoKdjwojPmSCLPdEiXMyPMYT3g",
  "key27": "Q8oCuueYMWCKJ7cbdL4CiYAaDYw1qpQGwSzHYYZyPhNz85ynPBcCUBaYi9Xwuf8YeES2U9LRR1etHvTT3LDeGw1",
  "key28": "5j9S1eiMzXGuBR1rs7yaAKMeXnpyRxFmKey4s1WzdCnGEwyQwkTznYNqJc6xqKhZ8wHFUFgkfCA2uVwYQ9oriDZK",
  "key29": "5N1cku1XxRvoJWQtMMrmuMqYczMYFetTyboE7tXyz9RxPigTszY8HdcLf93RvmZjf8Z5UVAaQZFRnvFyFtvd2dm5",
  "key30": "4urSMWGeYtfqxpaibpTgdhUbcpnfVx6oRyMY9mr6EbddcjFedRVZN1Fpe36cFyvAAnYPMu6n2NSkbyz5bnuPgoRK",
  "key31": "4sUjANtHZtoisFSNHJN9BdFPy2XE3Aj4R1dq9X8mPGahLLux2CsTcfP7deE4sf4kLHp6sPyJq6DUhXRhxcB4ovJL",
  "key32": "otLKz8ZeZfKHHWPVrU23JrdsQkacwMgRszXH5EXH4GXKxNwzmc6cNr7Y3f8c26tvdhyJfQEku2XUfX21xaJeHLf",
  "key33": "5FKnHL3heYYyaGuVQqXgQLGuibgkYPnUQpvvqCX3PGWVBJijBLbDXkSB8uadj5hsLuFLvD1Ua6hY4N8tfvn3Dy7Z",
  "key34": "55J6mynnPdYqprv3NaVbDSCkzdM9pHyo7M3vBFB4gN6ZH16rbd3wA5BfsVXUMYT5ZfLwA5vNcfQ77M8GahXRxwpX",
  "key35": "3cQ1bm7fkMkYP6fzRf4h1HKvHmJ2BNL2rNJXC3PoHag5eM9QXtZbXWjxAUABUudgjk61Ya2v8oKLCaEibGRfL31M",
  "key36": "3k9rqQPrJQDkk2AtpMZktAfuYbhPWaEUPhVMtKf7qjEVaRpDjMZwkX6HpTjLk1xfqNizaUEKxhQouee6AAkHaabK",
  "key37": "3X6oPsVWRzLJJMpFabohMNGGyx2ypKa1R97c58H6LYvaDFrutjdrFKjXazinFGjdhk2Rgkx4ayhnTjEhbnXFgNxT",
  "key38": "3FYmma3Fude2f8YhhwNZuNmcRpyohEeLA2KhmjxupEPNotatgt7Urqsu1pRMFbwu446jc6Z8y1A6mBid45JPU167",
  "key39": "39DzqzjunkQcNrukqVWNowSTuDGe2DBhRsFpBTA85ei8ByukcWgASMXCKL3GhBf58AExz4cti9gv7SuwhWcNxgdC",
  "key40": "3iCEkBWKRqHptDCm83qBE2oeUUs2AdgbVDPBWEoGjT4Gz68SXBi5t2Hb43S3nZJyL1feH4stRhwPHsi5Gfbrrayz",
  "key41": "5kDpww7UpmFM7Vt1rRWf2doYFufAi3E8jg5DYjbQGbqpDKyWX6D8YrubxHCp3xrC7cSR7xb1g3jLbSua9VZFFi14"
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
