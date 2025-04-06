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
    "65Cx5dM6zWwrVqLXusStmQ4iaS9JzRiPmUPMoKAbLajaiZrv49Pzi49T2qyAzFjokKQF8PmBzdWgDgZb2CTKPLBJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xxnh27BncodVyLkTRzMRXpY5QndZs6FFd7gcTWb7cLLREic3A7HdwHeSirUNMxBaSxL7ybpsaXK1BT1sqX1z6Yz",
  "key1": "2qZwWEQQa2aFD57U2rikryou7fLTUApXmXbGLcfvEobQ3rhrtomM66KaqstugK2s4akHFbF2pUTeQmKwvvQhm3DE",
  "key2": "2KkfgxmNFmWy4ghEALyRJwow7m46KJwYeMNSD25Xa1ujaQgJRVtNAE4eqJCFJaFcJmSqEUwbvJ75D25HA8UCDbet",
  "key3": "PdsCcJAPiMAoPfUEttzk3JWArFM3vsN6vHEHpcBSWWf85m6VcVUHc4p6Km3RzktGyV3zDBAcod4Do2ZCPwNk8YM",
  "key4": "5wpYTs6HKhyuxnLLJ5jhyZqExwhmwF5eVzyJZ7iY3fGUQyv6Gs35196U5zG2smEAV5AHPsZhrjabegMoFezbq4xu",
  "key5": "2xYRuC8sQJPy3ThttobguhgTZzEtCMuigqpaUVT49QbrLwBehPW1JAA6TsezsqZe61YojV7qkMpATJearaq77h69",
  "key6": "5faUUE9V3aQuXgFwVy9DddFMzV9QSt2SfrjubnD19QwP5yhCiwHNshfHqFYHLz9hRvES8tXRhDkyFd3JfhaPCoP9",
  "key7": "45L7g5h2SWUhEFj9hArsEEDZRphGKZur5i1PAFhBx4xd2Sb546ZB3B3Qh2L7ejVkYN5B4sQbiLutBCeTkp3jhNvA",
  "key8": "51VQoqwa28xzaApp9bb3uFzvyxXWP2XJ1rsWvL2uwnxTmnStLNsVHf8mkTMzJ9F6akdHhrrdASzkjqRY2HPDecc",
  "key9": "Fsiwwok5m1v69AR4u8dwnR8xXiqR8GE853gtnuwLYQFBqmTvUU8bNs6Y2kQeVqsuDhjLteWdk1DHKL7kj8MwEbf",
  "key10": "cPvKq5YwVUnHsnNytqGksH5kPP7cjwCDY3LvdpRK5kRJ9WrxLQrvRFTzPsDMANyT91wdJwmm9g1UiYADgA8ypza",
  "key11": "ePK7z8GK3j7uRpm65g7YvxfvWtA9qBzavhWsmKhgRvxEwz3eDrMj8nX7wPzeMWduk944NAHbJru3vLTbPi512Vm",
  "key12": "5CATo1CwBTjZy8zzX7phmYmpeGT5Nfk8WKw1LxSdwgPCF3gvA3gJ5CDoq5JrChn8rEdmB7xG7PfhmPuzxmzUvDt9",
  "key13": "bGs9oppMxDqiRhgjngJXquaQvibDYwuWQQ5fBvHdinQErTWuJgB37cFYYSHjcxi3xpZwfLj9tyV8BhpoAzEKM2E",
  "key14": "dUNZSAuQZRi6S9cu4qf5F1N6qxbpczjUop8HwBM4cHT3rWhaS1BNtxbu4twbv1DFMjdgZ5Rf2G1JUy3vDvZz9Xg",
  "key15": "21fcaXX3XSkCU7pnm86385k9DCKkEQnEUxUfvqobCyD7j4r2KdTDRJLBQYqbfeLJSWFbdB5SHqwJ3zzWbw3VZZuD",
  "key16": "22Am5i7Pxnv7GQTH7s9BYxJxWkFBACKTj5yi7AM4YHCcZC3FmDQuYMPv5FfiFKZRKryio6AbyJ356fwdVn7ghkqP",
  "key17": "592P3MNgb9aUNiDhrnHWk3KMLxU1trAuMG8AVwLqCwweHPwSGdFeJesTaicSXfcmzhb4h8ajKd2jV9s6jjkQiCyy",
  "key18": "2c3qXMPVm7voek9hSKUc2gziVJMNPBUyuMkgc1qp6AEQXNXQ5nv9bmPH2TPQMDkQftDEAwh8WNdCeWCJMpwrbQkk",
  "key19": "3MNos1JkzdL1JG1neMXivK8mJsbc1QcHvM1r5dvjBNJrRdFsXx4z3w48zu53i1evSHdG8AVCGggyaS8P7CUYyKGL",
  "key20": "629h77CXUC97NVg4FsgFNAe7Vzvx8uWn2vqqyQGgSUJdoFo4tVidmNxSLXyJZQXLCKJB2Za1MJaDpDG9zWxfRDH4",
  "key21": "2CVJTuL5vQFcsQ6uTdaWjd3gxmYLAXzS4mPfHCixmHGKgWSBBz6RKKWV18yRs8X9r8BwFuc2an8qZTDGpZ6SKJKr",
  "key22": "p2Mp4gZH8iBXkYzrTrSFET4zMP6mNXZLBiFeTUQQuWVt8hWvb8zarM1xP4C1uTXKf8MNzQFYq97HPDP7BUUCTMQ",
  "key23": "3sj3pZqcznTe6k6chz3Q2ExajLLyC7G4iCHZ95zHBWYhWi35Gror7R1dzBbMioAjTBV8D8zvVWh9YHhtPPr6Q6hm",
  "key24": "3wkTXnvacYMeovkinK4AtYJ4sJLx9mJKiZDRRXGCxajVzH423yKmr6PFZnqMDNMHEucJRLTrLCykq9UeHsR1YUBB",
  "key25": "3PGvGUk5V6PtGosaP67a5zVoUY3stYo5Q9b6F7xWw41CtDW2UVQAdBiXzGE8agozQfKF3YBNTtMmCr3rVqV8DUcX",
  "key26": "2SXLHmMM2g1aZ6C8vnPbUjJsWcwrEfAEVo3pRMoZxPQFfXSXLbPusjerHR8MKZwbAdmgaHaB4b6cjjWoK9gaVgmr",
  "key27": "5jNymdaTX9WXdqEe5EmPRt8pMYagE4wAtKrFBZLzq6gKhyynF4gQxBeBL8RVgfN4SbyDDHdfN2mZU9AhDfxzCExo",
  "key28": "rHe7H1bniZruJMRbRYdjw1DpxQfModkoJcRvCqPvHwFaK29c8xzmaT7ABuo2kGpsk5jhHTw3Hw3WRNrtJfAKmnR",
  "key29": "64sjaFe7E64oSvD7d3wbsUFs5A1fZvwNzyDwv8XvmwstSMgtMwNYPrmMb4KYsSSWTWsP9Syn1dK9mB9jdoMqYpWS",
  "key30": "3BMqtTFuaRkLyPMrFkM7C7q3dGkjaBN7CmBRePnrrFQbsDSzwE7e9aCaWepzWgc4g6pm4MUkt6vab7tmYwgnx6u5",
  "key31": "3RhuRfALEkBSQH5PcgEeS7jGxxC7jPb9QwkeczHKAZJLT6NLpNHti8vT6WkQL3zT4h9nRkp3rQuc64uZ1fpV5UhG",
  "key32": "2y77gw7BtkcB9Rvevqyrih78pdoZ3ALNxA2a2HQ3gbv1z2JeFgVtdLx1UD5QDMLvZcdHGb1EhUkPDZcV81sujZ32",
  "key33": "4t8V9GwWB6dDqXtwWuw7YfHff7geqU7cQEsQ7wxyE4CBQ3TjXYD2pT3BviTkAYthuxnitjUtrKY6Nfna12VgS7Li",
  "key34": "5Z7VfkkDHqdKrJBcESMKx1VXrpzNhfwFSbpT5imD3k5zAxmi9eNbdTF7zqhqFVEBXj5DFns56CUfxBMXDj1CDyaw",
  "key35": "ek1PEejrf7n7SkgUpGsp6P9CvTd6KEEANsG4Q36Nhn7CmwwbP6BUgZKDAsQWF6pzgVcSazhRDKPpEderFaXw3af",
  "key36": "RtLmzK71PAoGFseurj9T7YpgptrGeJvDDp3U3iNioYsZtGz1fHxeQSYBVWrVsCfwH6UNJcBcvpdebPsNWUq1det",
  "key37": "3iBwSdtY7Jg8nS5oWitUPhaa1CgXYxkBfSnwobNvTLJJtKiVRCt567v4jE6PgcPfB7Nc8nQduB7dRikS5e79P6cG",
  "key38": "ef15gvDWn5zMDLLRdBQyzPFQKLBvpyv3tbfe31LFJzD53pY24f6vvjycyEvHLjqDSxLRiDGBT3hpD4S55XuqCqW"
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
