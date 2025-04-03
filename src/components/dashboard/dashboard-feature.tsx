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
    "2FPmC5EBx2Z8Ju3VwWjWEEGoDMYAhgjxtwAfMPFa1MSusf1iaMNmJANgr8C8vP3osrjfmWg7GUYSA83tc5bZbHrr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jL5ABf3xqvRsn2DuhQZNMdNCTVH362Tc4MJvD3LTBezrwiXSk7tyegC8dCVVPyg4SpHymi2Uft3FgEoRmJWrQU8",
  "key1": "21gF1TrdRSCUAz3fg24qXWuw81WjPRU33rM5kCisGvbQqTqDQVXhHhhPXYD6QkmsxaYWzVQP4TagfwzxceUiySpr",
  "key2": "56tbUFSRcaD7i6VTDQwMrtFs9nZce3mi8HHc9pVKTV3MNTHidCPLdGBv8zz71xUxxSuBncBXzsMNmyLH11naq1A5",
  "key3": "5CEsqFX2vtzR2Yhb58Dm6n8S9PwqKEyvQydqZ2ygQPBRhF91Pz19vCqwS2GqnYsNL8cPiXTNUmRZ1oN3hMU4Nccx",
  "key4": "4NNCaUhR3d3dWXqJ4xwatxXGqxoNBcYoxkwgxiL6bEPGYnvmzfrmjAYUQisLzeLHBgLcKrRPo524ten33xna2hmX",
  "key5": "5sBneWLL9t4eQx3vqLFajC18t18Xkh9uWyaHWoQPc7w3BSzQ7pC5o31ybKqm4NYYvtS4grbPCKUU5DL96pGcmqWW",
  "key6": "31wX4hpYTVkH8L6PiYZJhyUPv3VQgcKDFvELC8NBUthq5aHJQmvTsU1yXddPugc3sHsbP3ADTnvwL9J2TrHtJ5sC",
  "key7": "SqcPXM9t78zsHjnakcSSZcQ4YAKcaxJtGWukajPjkyHuXCVxpBvLNB9DZRDdGW79bezhATqZAfNL9vQ34v6UPmS",
  "key8": "5V8JxftM5uV7k57pWfLr3iw9gy1Qh76kRXEGTyJPeSg6kdKmwdd8CSrzW8hFT7ajPMudTuL8fxcxd2vDZx3ZccNK",
  "key9": "43VenhzbgLC1YqccuAnU81GM98RPjLEi2reu8tVhFr7qnDfisvWKbQ5dY11QDuzV2qybnDuLZSgBYykXmXZYocBy",
  "key10": "2wnbBymhqHcBS59LiRPY9ETD4sVy91ptMnhY9sdQiQ2DkBsu5JtZyZoSmjCpJ79ui4oyhBTSrnjG1GQaunWd6y6Y",
  "key11": "7qQGraNh5btQQCkGak1aauZ4FcmC99tWYjmPr8k72yHAVq3Mxn5PmQUxGac5MgaF1sUoVY7dDpV2CSgbeMRan8t",
  "key12": "4mZbR3hVaR3he4o79v19Y8benjcRt4WjgBWvNDZqxDm84R6Ce67GNQ2mDJTAt7Mzrw1MqsHpa2KVAnqdRe8GP1ZP",
  "key13": "5cMcukws5nYHpf3ewNreZyAHQmE7encE1jRTjXAfmzndRwXGmgJQjbUgXPSnvQmCwKZx363z2t4FXEt9xvY6G7XP",
  "key14": "Z9WbiemPffMtLdVi31itRdVZN4ypsZaHx95X8uL2NK2UVmiZ5VruGrS6DCsGrrddwmBZWMpsqZQFYx91q8inGcf",
  "key15": "2yMPfQyG9bjbyKvo3FBd95enZxgE3hRpM9w9QJwCujQ4JZkCZ4fKCKw65HdCRZUV1pz19myvKaYgux9BjYAi5C4Z",
  "key16": "61ZxmdicRussmGhJANz2gGF2UXLc8ykJqfDHZSuBNd4hJxN1x1sA3Tt4S54mf5ur4AYsCzi8bDhUqUjsqX9i2BFf",
  "key17": "3aSn6pEXsaGstkuLme6fguCGrXVp7G1CWewfB5jo5qnaw6X7S77krQZrU9Cw4eNBZFrvotn4bpews8uNvyE4B4NZ",
  "key18": "Typ2SenRRt5CiDpuenufLX8ZUKV8PGrToHfsn2ti2CquXGg49oaJA5JNRHrYK3kqXUqD8J3xaSVtjonvH1pVkZw",
  "key19": "2e1amWfLskATnjLCVyLxRZ9aA5ZwpNXwZBQ5LxWxN8xWWTJ4AjT5sBhy3R7AP7zsFhiHGNimWH4Mo84K6XWp5wSh",
  "key20": "3ppEcvPZcBWn2cfku28HTFhm347Cxde7yM3yeQq6hnyffemLexDg33KQRboidzvAnCzqYjLDX35uznM2bV45tXif",
  "key21": "46FLSW521z5SbNca4Rs4YmPcQiH5CRP7gDq8Wg5cVESdGF7hZf6HkF5cPfTJ5aLpY7GC8JqMS3khQS6JtzMSds9M",
  "key22": "3XJWmC7bLr4f1PMFZBV7w7QoDkYoDx2g4x8STTqjPeCw9rkroMjrSEWBqejA6rS7SGoYY88x4X8Tt2RGmFSkdpFi",
  "key23": "5kk32DKs514hJVpTqARcGdZRvcVFfVgT5KWp3725qXWFHwRXD38XyLHgbHZckbVtfGPtyjczwtggM3M3w9zb99Z",
  "key24": "42eyRRWZgmekhiDEMUmgrt4uW2koQysHAStVE112VmuVrpG9GsbZm4tW6Q8aEJZiXGXHdrMwxq5uDBrNirSCB5rR",
  "key25": "2MKK4z2ejLGzwKZnVunwfNj7mhUKDJAD2ErkaEtksCzyFsvZ4e1fZr4aS7kuQtgzsfJw81S8A7NTW6K2Z7iqv2gn",
  "key26": "4WpxPpMrapV2NsQgdnLyEXwfBeYDNA13hTfGjJNPxneisrU1JZNhHvhnGbrhhAqPkBZRVoYqFhRWcjoGZqfi22Th",
  "key27": "5ZFtJx1HvvQEywrn5pLQHUTAnRKCxS1ShWSQfGCDMVkQZPvKGEhKExaXodnWnMAiJWyDi4Cx3Ek4LGCxCagGpaUd",
  "key28": "3rdKqeYsZbzZaL2tFqhevbcTjbkxtJYyVdSZqmHjF9cHP312KnsatAkJhxQLz34dYyxgv2GuHdvesXZjuXf3Yrk7",
  "key29": "pVc7dtcPG8JGJeGxPZt52GqUbbCNeTrgsQatwCuy82a7zVidHdfGCwbjBj5BkSGQsuden735JyQhWsPLWsjnYz4",
  "key30": "3gjToVRKX77wWmSnAUjoNUrbnW4cQnqiKuo7Nfb7JJCPYRiEnNr5eWJmYKRz92K2KbePHi6aYpd813pmUrg7sgXo",
  "key31": "4uda1xymj9Depyfk1YFDCG8H6fHo17yb1K8d4NZVDsoqrpae46uKjAickqqYwGWRT2NPK59a64vTG3LoWY8Q8kVz",
  "key32": "344YbaVsM5yEGaxDxLFxQ8Za9adhkk9ooish6w1VKdnSQG1YE8m9ixfZg7gVxu3RgxjGUgsPTAjnzxcDX33nXc1C",
  "key33": "vQcUjFPpkA9fGXJCqewfkm43jyVj3cFvN7CVqyAyBqLWRCNuoBbtop2ab73tgVRBvscEf4pTNzLke2VGTVrvWA7",
  "key34": "4SL83aVFViMMdfMNvVikKFq64pN5X9JAJaWJJDKwoZzyJcHLc3FipKFvnMsFYoeMhedwkVNrX4cC152SpB4CmDN9",
  "key35": "3DZcuWGU7RwC1fSpy2ttEdaoemu1vKgqH6YmxwjAcoRtBM2oQvC582DQM1ASNN44KptuEMzwpwWUgZWS4Btf4tZM"
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
