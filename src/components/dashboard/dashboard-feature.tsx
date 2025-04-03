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
    "Wu2Vp4QcfVtRv14LCFfPwCFKpL8scZ3RfPpqbuswrCyk27PcsT7mXGJNi4SJDjYZi2TcvS7WWcNDmfdGxSxNq46"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sLdzZE3sFgU3REiTqQaRWiPynGmnkMY9ttnD9J6karQ4RDYDgp5rdTYfrnAyA424ASieA79Sv7TCjpYqvioVugL",
  "key1": "2a9Kpns7Waxj4LAbzjqWVHAbE4jTnndy9oJVDkr8ZZhbg4NDsmrxH8Rj76hxMUfTFYpx7Tw3wY5dJUUVNGzctsE4",
  "key2": "122E4SHmvGAZrsN4n61D5QmRhEyoJvGM5UfoJn1kykHRcjsuEcPsq8wfuL3sePVsKTjaTP496Ba75MNThdEJhQns",
  "key3": "3DCrtcuZScJubsoDhj9ZhfHVyTcMGeNki7XQCyYCMeYYErwEmEwVZf2AgrRbEMjEREreW4ctECMgZB4WAFh1zQUT",
  "key4": "uU5DxUeeRGiJ6uvdXfVkZ8N3FUYm8bCAH72k3bRCgz14WJH3iQFECKw7BV253yGNt9MkHL6E4nbTKfmH3NQpeag",
  "key5": "48kHgB7RpQRTxPikJ4iQ4L27SsLEuUM6fYm5ARjFpcoGmMvUV2wndQmupkGnYWCaLRjymfAshHi92PqMYwJLfdfC",
  "key6": "2cgA4QTywNxSa7MS222We1wCeG8RJ5zaxDkfjXuy1Q5Fs2w9FxFhVYLNUpWrf3kgwThYGD4vzYj6WffYMrYExfYR",
  "key7": "4EAJoPcBk5KhpF7FZWmiUcAioBZyNAAFRGj31WtKqXGmVbdmE6FrxipgaaVnCBFgT6ximJv8cvqeQ63Wy2tc4wDu",
  "key8": "4Dfz8ByLaLp5RGgscvuKz89jnBQSVDfFi75eRUa5qp4PM8WCCBDw4h6KCcc5yqRXXJsFzywz3ShFv1uA4mBLm31u",
  "key9": "4c7ig8wkx2DFsw2Ugf5Stgq5PR1q3mHCtMRSTHzj6EaSgpW4AVouynhd6WzH5V29AdC398cmjT86B1p7GjPsdgn3",
  "key10": "4dFgWX1Y4PbDr89bjVAWM2c8yhaqH6K55nijm76arEGNhAmJ2BKd4ju3DyJDtcY7wQMpG7ZSoXwP2oEVgFeq11hk",
  "key11": "4WyWmDrpFWAmJPaT8MKbLqqUggHEsq7NnEQQjwPnBApc1aRnsUkAsuFNpAXVmiydJDy1PkugBJsfmm2Z4sBJMe3J",
  "key12": "3QEZevUFaidb1g6mYSUiStffT8z422iF8Y9BZeh27njLaAqEoEBkUpjkbZxKbJP55r2JF2RYNSUUwD2f7azisJVM",
  "key13": "2mtLxHzSqXMyQKZM23342efNkHfjZYDEXToBz2sVsr54svRv1Yfjv3ULn36TkLPbZEBdzGJ2rAYVxNxX2YQUfLtM",
  "key14": "52mvuHcYgW6mL46Hz6prBMG9a5dYiXDhbx2TWBULKA41JD5a4bM9aXczryCJmGAmy1ErErNRe8CqUjeQt8jmnTXn",
  "key15": "25vnMMoV4RGYs6BBNE8kf4HMHGirE9SdKXD4Gx5txg6LzSYma2wZreVU3SasWtAV4VoGNeaqgKwgGso3V1a1FCse",
  "key16": "y1QhXy5LXgpsF1TfriYL5Ncp7JuQsmF5dkMySgb8Ar82TVTsYmz5E8zWawztzmqUspW5pRyqS4qK2WS4iTEfjMe",
  "key17": "4rzDesTDqgvNkuXRoiSJafvJz2a3vnyGsH3dV7tMQZXjtwfoDaR6fXHtSxMv1K5UCNrXQQmQaELKxHgBet3cMCPh",
  "key18": "5FL2vdduaz18vgvtHY1rjfREsjE7MVG9uixJ8J9CiE2BgTFUbgkDKNDujxYmPYCCB5smYWtxBAGLrbZ7EztX9DTH",
  "key19": "4pgGJjGxLyWGeA916ero7Cy1JqYQ6sdoUmYstaTHxLLQVByDo4qNyk7tmPb5hx1f4Krx1i1WG9FwV3szfuun9oS6",
  "key20": "7vzaNcrfqvusZDRf2zHLZ57WJsfVG1SJm2NpvrYqzrrSpAyk7aFPkrzBq8EnLQZNDnx4cw1recT9oXsYs8c9J4W",
  "key21": "5hUSUnuQDuJu2sJkEnJVjNtMLqqziU9dEPDzLYMXyUxgVvpLxRKZTguVk5jQqC32HoCzJbo9GEyr3HGA2D2meVsA",
  "key22": "2hpTiLRsxyiq2EejTq6hq1qH2XKdFiEtPpoMz2aaL7KPvMYaXqd5uqdA3Gi3RSNnb4hXCS64x172df44TrYs7iVZ",
  "key23": "5a5S5tCdzNYVLdj6txNbDXtuf9LV9efNk7LHRs8kiRiAkFqQ6zmUn4B6niG2R5ogwL7EU4ZFQBaVcggTB6ZDkihH",
  "key24": "5gGqmP8BTEroQaHruyeEjEAptUtZKZTaaRYmATnLjcFUszPFSqux436cqCHvTEjhKB6mWEDC1PRBJ3fYJkrbvqFs",
  "key25": "39ixFCTLECtCZ5D5xzSGjNWbKQuh3fVA8mzh4YLjw6BnJJzhToFQT6Bz7hU6Y3GPhNLfn3NzKXoGE4d9gM3gNznx",
  "key26": "3H4k5w4CZjWkYnUUh6yWXmZKR1Kodnoy63PmkbQFw2phdv1XgcU76fvFtcwjFNL4c4rd3K2cjGk6RGj4wGVNcLWb",
  "key27": "3p9a2YKCSGSMBSrqB1AvtbwZ5faWDYncMVuqxrjeoTQpy6A9XLUwQxvM1NcBMEwf2zvkc8KjLrdj7CFRXbjBUtdf",
  "key28": "K555VWuJT9EVfSDsUMZ4AEAm6UF6chWwHmc7NSyWGd36gAd6q3Cvyu9N5ZSSeKHqPWyrH3QwRPBKAiMxb8r6wSG",
  "key29": "4xw2ixjMAwZfQ8Q87w8GBiDbrKE9diGJcaQoNhrVHHVYmJjoLWXY5FZnYgc4eEZz1VqvSGBEFuNqWj96NxaGhv52",
  "key30": "4sBGbbGTVnpbz3yvZAoLWnUrQPMwQMdndtKXU4cyS6XhkP42AwqL7WDza5P5FCkwPNfkbjLpEd87YAVLGguSRcz3",
  "key31": "2nzwApkr7qkJFhKDZWELwf8e3GzC4ZVYfVea6CaMan1Mn6yzdijnKepYKBUnUMM1VTem5oWMCbPNURKocKemkST5",
  "key32": "3MSvdQhay2sjVqKjG4T7Y1UQjjnmA6viNRiwxpo5APHbzKZzuyuqUnAgD1sTKAhRGXk8tY4j6J5cJxmJjdWgXnEt",
  "key33": "5NvSB6VLUZAUCetVXetXnA5wBca73UVKEswtWRWLVVhcmaVn21sovSEZ1HSfPNxU6yV3XmqY58tTrxJt2YEKMWBy",
  "key34": "24RSSWoqUSGU7nnL6xsTEqV1Dc7oNZx3QEUhpEYwXzvyzWSnMsiaXuEaF7wgWN9LaDekVATaaY4J3EBN3ehwVQEZ",
  "key35": "4kjqqAR28xL9fkVFn29dx2tPmW6T4V35xgxhKvhABJbEGFKSCwcsrdqeGKokuMRzXoCVMTK6HAaNLKzjGffaugU9",
  "key36": "h44D6ZcPnMKK3NUzC7GhaiuLEGD8U1Wwo32mvNFiG49oWxgVtDmCWtj52JQcKXRS5XXncCQkyJocaYSma3Mnofr"
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
