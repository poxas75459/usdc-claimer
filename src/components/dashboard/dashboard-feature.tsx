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
    "4y84r6LrZTK48vtVS79sH2FyqZhJ9PabsoSSY3DaN2uck4rgNTgjXvLWjHKVbQRvHozWCwYkECzyhaH1FiRQSrs1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fECE2WCtPPfmGq1brrdw5YNp1C3EeZxXwXfc4EyzRBZV3q7UgFYqgYswBJ3hJHUDj5fd4sDwBM8tyELAmV5B3Vv",
  "key1": "4nS7qyE2Gdhqkwv2P5vMZVaA9MHcbjh2jdyYgzfazcPxM6MX2DivJN4xdiTAz3eAdoiVESuoRYmUUd6TKK1VvdhJ",
  "key2": "37DPjgoU5Equy9UnpsXi6R1tbCrLp2BpySgWZABSg3UzXLJKDV5f4UzXMsLXtsxTJa3YCkhySsXY5MJn9kFExJUf",
  "key3": "2tBjjsp9nJD9cxPiRxRs98rVcePNxjVsBwsTR74VQsUqpWndyryuWDYg65Zqns6XtkJZiA2F4MixsJiauCk69Srk",
  "key4": "5NTDhCU1jphxLPHvxfygZDBJr3Pd6YjQYB66WTDKYYYnzmhUgt1CCV5R5aMTkxiaEKRPznvWGcMznj7Vyb3Fe9c",
  "key5": "65XXEsYsTuEyjVZb7YtWgTjtjnxt5S76rt889ziqhtBwNpefoWv1XZM7DJRHvMsnRbsFy5XJHn4bdQF8G4RjYmZg",
  "key6": "2NUBmtML9R4jWZwgvCYS3QAjv6YmmeEer31MuSGYjhYMPVK7VSDAimKedruxkU9675JP9nQdcm9LPBYQE6RheRsW",
  "key7": "3VntBYZT2o8u3CMNau8cVJSJve2HmjHLiCPtfYaJwcbjUhinAPmfYqmrRR27LPxAdZaH9K5njcJxGbGtKQShug6W",
  "key8": "A4EoLNpRrMvDe7SYPwGc9zdWipV9Ekgvq82Gbqnj4DtTjxvs7pUc72GtNtWx871vfzuZ5ZhJ1ErZGGC634GtGLS",
  "key9": "5DwpGuWV1xHFovVCrbATUHT79r99yLyeHvKva26yBU8Gpayw1nGLvuo3pvxtrdSdZR54Bi3MpNPMGnd7as5gHZgh",
  "key10": "4KjfoebDBbV8oMWhWfd6RTYLNK4UeshVQU4JJhajPcVCfx914NuiaQU9rRTT2Ny6nZqycUgm8tGf6p7gr2FkaT21",
  "key11": "4Kd1f7iAwQraTTwqjjG1tFCKU9Rq7WkwgHK4oY8KrghLkpXsvHAZdYBjJY4s1KEfwJ3fNThaWkKeQ3JcdZnGuCz",
  "key12": "5d5u1xn6Npfnt45WbkRSjWTUsdHC2EjQxQ59Hz8DBJZ6M4wm9BUSzuRcAcY3S9WYskS2ZbHg5s45XrEwGw6UifXz",
  "key13": "3sWTX6g2LNC5z5nUiHpWsfHM5royqWdycT7afKXVFGgjAo1sUZQ8SnastaN45qPjS46CCeTmGTSfm3SNK7PUD9m7",
  "key14": "3ntqXHXx29XNjfAZ1u3RhySyjBgWGS13phJccLnYhNWP8ARu5u2Y6CwyQaZp4m6yqJszHAeieaaXsL45MuNnwgrJ",
  "key15": "2W3T7K8kShyVbxtEFBNnAYBA2UDFjpgfkLAtu6XYw4n2Pg8eejMDuAkj5zAEfeNdK4kJpbuKzB7dat9L4eDEBPm4",
  "key16": "3iku8PQxgviznQDn5rsN1RRPLQ7kj4UtQkDswBsoiuEaquzR2Mj5AEVmmHFDG2y5r9TBnuAvLf5gpLgQzh11crTz",
  "key17": "3wajxJ6ynbqawAJGsvX828sC3Cu9PVTkVMjebRcrzo7pk6zuJCwHVgNmjEanKUDNWBgkDk2u1giQxo6PBmLrszum",
  "key18": "5dBuUpELbfzPLX8GEqKExThnf8JexCBvPKAoRizyRvEX9BYFHM2bT6DWjhCrwQ578A8p7YvPv59UDZk7tq5djF9h",
  "key19": "2i4VpiJcuc6BDja3GQeWYKYGQXL3AhJkUTfMcGE5MfEbedHe1pNbQnqwbn1VTckqhi8XeBQFAaJs5WC6esJhgmaZ",
  "key20": "2JefNnqtnPPBFGqSwh1zFgWEUrXdRnb7kjcWdiqgmvfxwLUKDxMV9oMb1gs5pystMZrg284PTLeD8CMAadC6GRXr",
  "key21": "2958bLjMpuDJSzxk8fesNMpnyYs5KdbqxTQx31kskN5Do8dqnsxDo51PGHdMsetmsaKrvnJqfPVg7shXhL1JKqsJ",
  "key22": "34sB32mrkjN5bQ2gRKuf6SCzeJ9LDZB2gft9v8pkPk2Xd2RViQX4gTVh8NGqDtHDBhEe7rpL3kWMWyauSfqgWbMg",
  "key23": "4NmPupmvz9bsjLCSADgCydB632e5VVEcPHJ5JggYyZzAcMo5AQGzYNMVHB4usdMzENU2FbG9eaY7AaE9qbiCqoBp",
  "key24": "3oHdvWCWiUJBmr3GfvLgUiafN98tiwRRje5GexZUpmS3SeZyAXQhKs7HnVAa5Re9HC5N8mRbUyWRHGQqZKDyjQ9s",
  "key25": "3XxBycj2zeeuWuYQC6kk9ZV1Gu7FPtokgZUkwVTELf6Wj4rUpKiB3WGKzkYTn12kKRHdbkxrqnZ7idzgYF9kk1MG"
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
