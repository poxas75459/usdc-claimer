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
    "3yFdiLSVV5vcNaycPEbkC4oBSKVhhx6hnmbT4J9qPFmDzhT53tT8XqexuqWexHJCxaXJbtjfJiVk1tSazruCnXDm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LrFLrc5FGjboqa5JUH6XgDtRt7T6JBmrLKgMhbQoyNcwUqbGeDKhuJP3Gtg6dYEQf9529K4CYFQvjKxKgmcFZsh",
  "key1": "5And3jtLKBvyzckDh4xFQpwaf4hta7tY7qsAuj31wj4uqxFHqRhtoYUuGb6Xz27UFoFmuwCuJVTF7wVsdnNBqsMf",
  "key2": "Nwcc33MooiyZNY15Y2LBgitzEwwx2NzAfuyZpem6wVdPmZMqcG9c4asbuTwpbbnrCNjPSUrigfGH1d43BSrW2bu",
  "key3": "51ZUEH4wQEz4DRcSW2VYTxnVX8sk5ovPPjKm96xBUg7ccmWaZDa2KtCkgfd41U9yHAf8BNKUFCV4TY3hY948Y9fa",
  "key4": "4TK4vqRzFfUHnvcgUeZEv3NmQfLdATyhks3zcoC51YatbNNAdSf9W22YusWSNMjDXFEqRUtCz8mCbVNJjDHF8h6k",
  "key5": "4drpzDGMJJHBDjbceDT2iWihBudqjS99GXx2Ys5ZgYj8Q2Mi2hkPqBFMKYwRfWDUL8r69zLunirA5aAj2GXDGNoh",
  "key6": "45FVDUd7KExYAx1KZ3WWVrW13WSkEiMbHcFA4S9J53gf2FujvMriwJjCZ6SuHcYFbDnisgzu49bbsdGujw5gVJeA",
  "key7": "hyuFCmSu1TR1M3rHKJ3fUJstXpAdFEggf1ULVWFb7KByYzChHXzXxBNoK491ekbmfhXrYgaea3QkD5W4j3tqWoU",
  "key8": "5rKy1HukGdzuaMxUW6Z8DLLQ1bPDrrqLBVGxFRgxCPy3ZzkTMvZqNnQf1jZ2Ni8WFbdf7LLG7ndhjCBbSvH52B9a",
  "key9": "2ZVT7mq64FEg4vcMjgEfSB543SLfhVF3GD3rhmKc6RVbrEyKZGjNam4U7y897gEwC37M8KqYfefZbJFPG3mUgd95",
  "key10": "4Bkdg2fXfuorPmCUeML9QRcoARfrYKumBphxJLr1QRaEQh5p8JdtxTnGrxxw7YKzHTKejoR4AZJYtzxeT3GVY1NT",
  "key11": "5jDBed7NCE6vEp8KLgNyEGM7tzBuqZrMfad26nh17QumMQ5SubYh1sSrWKt2khBorYWXcCYgzjcRuJ7QbqDfMSNd",
  "key12": "5hfoxn5NQxhEqfUAdcr76p3zU9Ca6JPZEGNYYXRfvYyBh92UJAbqi5C7fDUdEmBNKWv2QHXpBuLW7TS1UneD5xiz",
  "key13": "4p9XvJ11XqQ7F6sSY65zR7BnVyDUa1SeUoCWTdNPUCiMyK4EzVhzDCRDzU9mZiCEWSmf88uVzXHDjjBpBwGvz6G7",
  "key14": "4xSCSmw7FkUicYh6Y34idpMbA2XfuU4Eb9HRzETLJGGkfEPeetn1jD4rJabHS8jgE3QGMuoCRXGC7bHMDhT1azGX",
  "key15": "57HMEPDbfVoTCk21PBT3Xkt135Anh76dR5ynHYSMz5vqnjDNWYweDmxvbdtsvYUEDNzHZkoY1YMm7cpYR2PHEW6T",
  "key16": "59vTQLkv6ZtAP1zkPVqC2HSMKt4sittNHTJYnorAwFc8w56KcdwgXF6vUYkMqxepdkRkrS3KjPUb519M1GrHc8YL",
  "key17": "8T9kkJuczRmyD1A6fCJKW269w84XZCKJ5PQXS16VneW5aqZPeyQEfiRK4kMDqamE35vYyaC5nqU4KHuUpGrUWwJ",
  "key18": "JamejmY1SYEimy8vxYswu7pRVMWf2Rxgooj1Bi9o7qBcNrekCtaCDznHPJF8qR89XvnJm9B2v5gGXbi1qAGjSvQ",
  "key19": "pgkRqfNRpoSzmsV2eVcLNLNP7ZPTx6MpkBLU1mkpRZ9vi3TFnLtStvQmown4giqLHi6jdWEzqzBe74hooyfsn2J",
  "key20": "XnNoLoBrfESntWtJ47XgkvjowhuiAfgpXiZx1t1QeucgJz9Cax5XEv2HtU8JJdJnqBSAz69zcasERQQT3yTPmSS",
  "key21": "2rC2fL78fHDTHbncd8a52pfQmiL5NBmsF2pFhtQFJCKzq2iPrcxBUj81bdSzJjLcuuzwUkPbiLUgxPjrsUUfUHLo",
  "key22": "49paBFcAYHt5ASReQEHRm6emGTrrZnEdCtn9hQ6oMHbPm8Ar1ydNsrayCjCa15G92charMBuWMjive4V2TvTwyu7",
  "key23": "ngAAgbYFttZxTCEBmHbdNTtoyWTA3ZxDjoZ6iSfbub7Xsf6SSGBj1FJ3vKyT2kGLL2EfQCNbK4XqCVggEprBXSN",
  "key24": "3M5h2HaXdxjgEoJvSFewWGaHiMFWxd7r719rYjcufw7z4SH1jHTuHAq7oKDYXS2CMy3GV4eJ2VpZixCUDY81Leba",
  "key25": "2izvYETFbw2wr3t3xVGK2hMjkoMCDAM934L6H4CkgZywprzEmBHnp2gnNcz5tpYZ6UqG3sJW5AJdnqcSTGVkn1ew",
  "key26": "3aysjYxW5wKf9P3gMskFx2CfWpLGkzQoCpB8mSxKJecnCvwxg7skrzVjCXiLdSZH4uKvwV1EyNLKgcy4eQ1AnJpZ",
  "key27": "eZPLNo2rnPFgN6tpbacYTVxEYvVUu4VyDoV21hT4vV9MEd9BXUy7hK9SVVTmxQsx45Znvr62DSExbR9Cno3qHwo",
  "key28": "3E4SdukAEPV64kr2QBEzKqY1ofjnxj6c1aAZWQnYEy4hJ54wBQnppJdUyqkGx5EVCxNG1BhidetMB6qgn6APY2dy"
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
